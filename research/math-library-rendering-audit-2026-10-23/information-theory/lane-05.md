# Information Theory visual audit — lane 05

## Scope and method

Reviewed all 46 assigned frozen source snapshots and corresponding local ItemBody HTML previews. Opened each of the 63 assigned PNG tiles individually at original resolution. Assignment source, rendered HTML, and tile SHA256 values matched the recorded hashes. This is a local preview audit; it makes no production route or live-site claim.

Checked the full title and rendered body for literal ASCII math, TeX/KaTeX, TikZ, reference-title leakage, scratch text, standalone-image clipping, and the mathematics of existing diagrams. The links rendered as blocks and ordinary punctuation wrapping were treated as intended. No standalone image content appeared in these item bodies.

## Confirmed rendering defects

1. **`ex-finite-trellis-viterbi-tie-and-unreachable-state`** — snapshot lines 49–60 are emitted literally in the local preview instead of as a trellis. The TikZ content itself matches the prose: `s→a` and `s→b` have weight 2; `a→t` and `b→t` have weight 3; `c→t` has weight 100 while `c` has no incoming edge. The intended point—that the high-score `c` is unreachable—is mathematically correct. Viewed tile: `screenshots/ex-finite-trellis-viterbi-tie-and-unreachable-state--01.png`.

2. **`ex-it-strong-subadditivity-for-pure-tripartite-state`** — snapshot lines 69–76 are emitted literally in the local preview instead of as a diagram, across tiles 01–02. The diagram convention is mathematically correct: the central state-preparation map produces one joint GHZ state and has ordered outgoing tensor-factor legs `A`, `B`, `C`. Viewed tiles: `screenshots/ex-it-strong-subadditivity-for-pure-tripartite-state--01.png`, `screenshots/ex-it-strong-subadditivity-for-pure-tripartite-state--02.png`.

The other 44 assigned items had no visual rendering defect observed in the complete title and body. TeX math rendered; no stray reference titles or scratch text were observed.

## Source-supported diagram candidates

These are optional editorial candidates, not defects.

- **`def-it-qudit-erasure-channel`**, snapshot lines 37, 39, 41, 43: an orthogonal-sum channel schematic can show `X` on `A` entering `E_{d,ε}`, then data output `(1−ε)JXJ*` in the `A` summand and erasure output `ε tr(X)|e⟩⟨e|` in the orthogonal `C e` summand, with `e⊥A` and `dim(B)=d+1`. The equation and prose already give the definition, so this is optional.
- **`thm-it-point-to-point-lossless-source-channel-separation`**, snapshot lines 41, 45, 49, 51, 55: a block source-channel cascade can label `S^k → f_k → X^{n_k} → W^{⊗n_k} → Y^{n_k} → g_k → Ŝ^k`, with `n_k/k→ρ`, source law `P_S^{⊗k}`, achievability threshold `H(P_S)<ρC(W)`, and converse `H(P_S)≤ρC(W)`. This would summarize the stated interfaces and thresholds and is optional.

## Machine-readable coverage

[`lane-05.json`](lane-05.json) records all 46 item rows, snapshot and HTML hashes, every tile path/hash and individual original-resolution view attestation, review checks, and exact findings. No item, publication status, or application output was changed.
