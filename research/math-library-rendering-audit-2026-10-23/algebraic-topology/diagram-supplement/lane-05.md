# Diagram supplement — lane 05

Reviewed the assigned frozen snapshot and its one original local revision-2 screenshot tile at original resolution. The source hash matches the assignment and the screenshot hash matches its receipt; the tile is 1200×1400. The receipt reports `tikz_count: 0`, so there is no existing diagram to inspect.

## Potential missing diagram

**`thm-naturality-of-singular-mayer-vietoris` — snapshot lines 24–25, 29, 35, 37, 39.** A two-row ladder is an optional useful aid: show overlap → direct sum of cover chains → small chains, with maps `c ↦ (c,−c)` and `(u,v) ↦ u+v`, and vertical maps induced by `f`. Include the induced homology sequences and connector square. For `z=u+v`, `∂z=0` gives `(∂u,∂v)=(∂u,−∂u)`, so this convention yields the positive U-boundary connector `[z] ↦ [∂u]`; `f#∂u=∂f#u` verifies its naturality. Empty overlap or cover members give zero groups and do not change the sign. The diagram is not needed for the proof, and no mathematical error was observed. Detailed source lines and checks are recorded in `lane-05.json`.
