# Information Theory visual audit — lane 01

## Scope and coverage

Visually audited all 47 assigned frozen item snapshots and local HTML renders. Each title and complete assigned ItemBody were checked. Opened all 69 assigned screenshot tiles individually at original resolution. Exact item, source/snapshot/HTML hashes, and tile paths/hashes are in [lane-01.json](lane-01.json). No live-site or production-route claims are made.

## Findings

- **Confirmed raw TikZ source in rendered body:** `ex-it-dephasing-quantum-relative-entropy-dpi`, lines 73–79, displays the literal `center`/TikZ source in its Diagram convention section instead of the described one-wire map schematic. See [tile 01](screenshots/ex-it-dephasing-quantum-relative-entropy-dpi--01.png) and [tile 02](screenshots/ex-it-dephasing-quantum-relative-entropy-dpi--02.png). The frozen source locates the issue at the diagram block; use a supported diagram rendering path while preserving labels X, Δ, and Δ(X).

The remaining assigned views showed rendered mathematical notation, expected uppercase technique banners, and intended block-style reference links. I found no other literal ASCII math, raw TeX/KaTeX, reference-title leaks, Scratch text, or clipped item content. The two diagram ideas in the JSON are editorial candidates supported by the cited item text, not confirmed defects. No source, application, build, or publication files were changed.
