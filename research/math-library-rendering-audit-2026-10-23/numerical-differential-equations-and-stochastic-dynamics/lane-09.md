# Numerical Differential Equations and Stochastic Dynamics rendering audit — lane 09

Reviewed all 66 assigned items and all 104 receipt-listed screenshot tiles individually with `tools.view_image(detail="original")`. Complete item bodies were inspected against the frozen snapshots and static HTML. Source, snapshot, HTML, screenshot metadata, and tile hashes are recorded in [lane-09.json](lane-09.json); no assignment/capture hash drift was found.

## Rendering findings

No confirmed LaTeX/TikZ rendering defects. No suspected clipping remained after checking each standalone tile and adjacent continuation context.

## Diagram review

No TikZ diagrams or diagram failures occur in the assigned capture receipts. Two uncertain, optional, source-supported diagram candidates are recorded in the JSON: a positive-transition graph illustrating SCCs/closed classes for `alg-finite-markov-closed-class-decomposition` (source lines 27, 31, 33), and a mesh/endpoint-map illustration for `alg-multiple-shooting-for-nonlinear-bvps` (line 29, with the scope caveat in line 37). Their content is already specified by the prose.

Focused checks found no orientation, map-direction, sign, or index mismatch in the Markov graph convention; the phase-bordered flow, multiple-shooting and midpoint residual rows; or the Brownian-bridge lower-barrier crossing formula. Details and exact source lines are in `existing_diagram_checks` in the JSON.

## Scope

Local frozen sources, snapshots, static HTML, screenshot receipts, and PNG tiles only. This is a rendering and focused diagram-relation review, not a complete proof audit.
