# Probability visual audit — lane 01

## Scope and coverage

Visually audited all 69 assigned frozen titles and complete ItemBodies in the local HTML renders. Opened all 110 receipt-listed screenshot tiles individually at original resolution. Exact source, snapshot, HTML, and tile hashes plus per-tile view attestations are recorded in [lane-01.json](lane-01.json). The receipts report no KaTeX parse errors, TikZ diagrams, or diagram failures. No live-site or production-route claims are made.

## Findings

- **Unformatted inline mathematics:** [ex-successive-brownian-hits-restart-independent-copies](items/ex-successive-brownian-hits-restart-independent-copies.md), lines 68, 70, 72, 74, 76, and 78, leaves expressions such as `W_{t wedge sigma}` and `H_n=sigma(...)` in ordinary text; see tiles [02](screenshots/ex-successive-brownian-hits-restart-independent-copies--02.png) and [03](screenshots/ex-successive-brownian-hits-restart-independent-copies--03.png). The source omits math delimiters, so this is an authoring/markup issue rather than a KaTeX parse failure.
- **Unformatted inline mathematics:** [thm-brownian-markov-property](items/thm-brownian-markov-property.md), lines 58 and 62, displays `Y=B_{s+t}-B_s`, `t>0`, and related expressions as plain text; see tiles [01](screenshots/thm-brownian-markov-property--01.png) and [02](screenshots/thm-brownian-markov-property--02.png). The source omits math delimiters.

The remaining views showed rendered mathematical notation, expected block-style reference links, and no confirmed clipping or horizontal-overflow defect. I checked potential long-line cases against the full original tiles; none showed hidden content that could be established as clipping.

## Diagram checks

No assigned ItemBody contains a TikZ diagram. Five source-supported diagram ideas are recorded in the JSON as editorial candidates, with exact lines and concrete content checks: the period-two chain, killed versus absorbed kernels, Brownian exit segments and the embedded walk, the step-potential resolvent, and triangular characteristic-function density inversion. They are not confirmed defects.

No source, application, build, or publication files were changed.
