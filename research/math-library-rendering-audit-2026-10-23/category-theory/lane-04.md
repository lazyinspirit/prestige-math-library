# Category Theory rendering audit — lane 04

Reviewed 110 assigned items and all 129 listed screenshot tiles at original resolution. Every current item source hash matches the assignment manifest. Coverage IDs, source hashes, and per-tile SHA-256 hashes are recorded in `lane-04.json`.

Confirmed diagram findings: 2. No separate uncertain/editorial candidates.

## thm-the-meet-of-subobjects-is-their-pullback

- Section: Proof
- Source line: 51
- Kind: Malformed displayed diagram
- Symptom: The proof tile prints the inline TikZ-cd source literally instead of displaying the pullback square.
- Mathematical check: The intended square has `p:P→B`, `q:P→C`, `b:B→A`, and `c:C→A`, with `b∘p=c∘q`; the next clause uses this equality to define `m=bp=cq`.
- Screenshot: `screenshots/thm-the-meet-of-subobjects-is-their-pullback--01.png`

## thm-nine-lemma-variants-by-which-rows-are-assumed-exact

- Section: Statement and Proof
- Source lines: 36, 45, 61, 63, 65
- Kind: Missing commutative diagram
- Symptom: The statement and given explicitly refer to a commutative 3×3 diagram, and the proof relies on named horizontal and vertical maps, but no grid appears in the body or screenshot.
- Mathematical check: The proof uses `c₁∘p₁=p₂∘b₁`, `i₂∘a₁=b₁∘i₁`, `i₃∘a₂=b₂∘i₂`, and `c₂∘p₂=p₃∘b₂`. The absent diagram should show rows `A₁→A₂→A₃`, `B₁→B₂→B₃`, `C₁→C₂→C₃`, vertical maps `i_j:A_j→B_j` and `p_j:B_j→C_j`, and the short exact columns.
- Screenshots: `screenshots/thm-nine-lemma-variants-by-which-rows-are-assumed-exact--01.png`, `screenshots/thm-nine-lemma-variants-by-which-rows-are-assumed-exact--02.png`

No other assigned item had a source-supported missing commutative, string, braid, knot, tableau, or flag diagram, or a confirmed mathematical mismatch in a displayed diagram.
