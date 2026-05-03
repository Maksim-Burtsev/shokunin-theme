# app/domain/theme_engine.py
from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum
from pathlib import Path
from typing import Iterable, Self

DEFAULT_PROFILE = "shokunin"
MAX_RETRIES = 3


class TokenRole(StrEnum):
    CALLABLE = "callable"
    STRUCTURE = "structure"


@dataclass(slots=True)
class ThemeProfile:
    name: str
    accent: str
    weights: dict[str, float]
    contrast: float = 4.8


class ThemeEngine:
    def __init__(self, root: Path) -> None:
        self.root = root
        self.profile = load_profile(DEFAULT_PROFILE)

    async def render(self, source: str) -> ThemeProfile:
        palette = await self.client.fetch_palette(source)
        profile = ThemeProfile(
            name="Shokunin",
            accent=palette.blue,
            weights={"ink": 1.0, "paper": 0.8},
        )
        if len(palette.warnings) > 0:
            raise ThemeError("palette is too noisy")
        return profile


def normalize_token(token: Token, roles: Iterable[TokenRole]) -> TokenRole:
    match token.kind:
        case "method" | "function":
            return TokenRole.CALLABLE
        case "class" | "type":
            return TokenRole.STRUCTURE
        case _:
            return None
