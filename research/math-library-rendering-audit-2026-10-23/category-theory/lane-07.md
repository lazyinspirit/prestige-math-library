# Category Theory rendering audit — lane 07

Read-only review of all 109 assigned items and all 125 screenshot PNG tiles. Each tile was viewed at original resolution. Source SHA-256 and captured HTML SHA-256 matched the assignment for every item; exact IDs and hashes are recorded in [lane-07.json](lane-07.json).

## Confirmed rendering defects

- **`thm-ab5-is-equivalent-to-exactness-of-filtered-colimits`, line 60 — literal TikZ source.** Screenshot tile `--02` shows the two pullback squares as literal `tikzcd`/`\arrow` text in proof step 1.2. The maps are the squares `P_i → C` over `B_i → A`, and the induced colimit square `P → C` over `B → A`; they carry the pullback checks used by the proof. Move both environments out of inline backticks into standalone TikZ blocks.
- **`thm-the-kernel-cokernel-sequence-of-a-composite`, lines 61 and 63 — literal TikZ source.** Tiles `--01`/`--02` show both diagram command strings literally. Line 61 encodes the square with rows `ker(f) → A → B` and `0 → C → C`, with vertical maps `0`, `gf`, and `g`; line 63 encodes rows `A → B → coker(f)` and `C → C → 0`, with vertical maps `gf`, `g`, and `0`. These are the comparison squares for exactness at `ker(gf)` and `ker(g)`. Move both environments into standalone TikZ blocks.

## Uncertain editorial candidate

- **`thm-the-nine-lemma-follows-from-the-snake-lemma`, lines 31–47 — possible 3×3 diagram.** The item refers to a commutative 3×3 diagram, three short-exact columns, a short-exact middle row, and the outer-row exactness, without naming objects or maps. A standard diagram could orient those references. This remains an editorial candidate: the prose describes conventional data, and no mathematical mismatch is confirmed.

## Diagram checks

The displayed dinaturality hexagon, cartesian-square kernel diagram, snake-lemma diagram, and cartesian swap/hexagon argument were checked against their stated maps, equations, and types; no mismatch was found. No other concrete source-supported missing figure was identified. Technique banners and block-line internal wikilinks are intentional.

No item content or publication status was changed, and no live website or HTTP(S) source was accessed.
