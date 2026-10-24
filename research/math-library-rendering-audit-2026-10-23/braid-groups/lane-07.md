# Braid Groups rendering audit — lane 07

Reviewed all 44 assigned items and all 98 revision-2 screenshot tiles individually at original resolution. Titles and complete ItemBody sections were checked against frozen snapshots. No item content or publication status was changed.

Findings: 4 confirmed rendering defects; 40 items clean.

## `def-khovanov-seidel-complex-of-a-braid-word`

- Source: `items/def-khovanov-seidel-complex-of-a-braid-word.md` lines 39 (frozen snapshot).
- Section: Definition
- Symptom: The linked supplier title is displayed with literal TeX-style underscores and braces (R_i and R_i^{-1}) instead of typeset mathematics.
- Screenshot evidence: `screenshots/def-khovanov-seidel-complex-of-a-braid-word--01.png`, `screenshots/def-khovanov-seidel-complex-of-a-braid-word--02.png`
- Suggested repair: Use a readable plain-language link label for the supplier, or change its displayed title so the generator names do not appear as raw TeX.

## `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers`

- Source: `items/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers.md` lines 4 (frozen snapshot).
- Section: Title
- Symptom: The page heading prints the raw TeX fragment I^{bigr} literally, including the caret and braces.
- Screenshot evidence: `screenshots/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers--01.png`, `screenshots/lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers--02.png`
- Suggested repair: Replace the title formula with a readable phrase such as “bigraded intersection number,” or format the title through a math-aware renderer.

## `lem-every-trivial-braid-word-combs-as-w-one-w-two`

- Source: `items/lem-every-trivial-braid-word-combs-as-w-one-w-two.md` lines 4 (frozen snapshot).
- Section: Title
- Symptom: The page heading displays the literal underscore in W_1W_2 rather than a typeset subscript.
- Screenshot evidence: `screenshots/lem-every-trivial-braid-word-combs-as-w-one-w-two--01.png`, `screenshots/lem-every-trivial-braid-word-combs-as-w-one-w-two--02.png`
- Suggested repair: Use a prose title such as “Every trivial braid word combs into two factors,” or use title markup supported by the heading renderer.

## `thm-the-artin-presentation-is-complete-for-geometric-braids`

- Source: `items/thm-the-artin-presentation-is-complete-for-geometric-braids.md` lines 54 (frozen snapshot).
- Section: Facts & Assumptions
- Symptom: The linked item title is rendered with the literal underscores in W_1W_2 in the Facts & Assumptions section.
- Screenshot evidence: `screenshots/thm-the-artin-presentation-is-complete-for-geometric-braids--01.png`, `screenshots/thm-the-artin-presentation-is-complete-for-geometric-braids--02.png`
- Suggested repair: Give the cross-reference a readable prose label, or update the linked item title to avoid raw TeX-style notation.

## Coverage

The JSON coverage array records each assigned ID, its checked sections, page assignment and every individually viewed tile.
