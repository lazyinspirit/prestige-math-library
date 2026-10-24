# Neural Networks and Learning Dynamics visual audit — lane 07

## Scope and coverage

Reviewed all 44 assigned items and all 80 screenshot tiles. Every tile was opened individually with `tools.view_image` at original resolution. Source, frozen snapshot, rendered HTML, and screenshot SHA-256 hashes match their assignment or screenshot manifests; no unreviewed tiles were left.

Per-item and per-tile hashes, findings, diagram candidates, and limitations are recorded in [lane-07.json](lane-07.json). The previews show generally clean math rendering, with one raw TikZ block and one overlapping rendered diagram. No unintended reference-title leak, Scratch panel, or standalone-image clipping issue was observed.

## Confirmed findings

### TikZ and existing diagram layout

- **lem-wasserstein-gluing**, Diagram lines 74–80: the unfenced TikZ source appears literally in the preview instead of rendering. The source labels the intended projections correctly; the defect is rendering. See `screenshots/lem-wasserstein-gluing--01.png`.
- **def-neural-operator**, Diagram lines 48–59: the five-node composition schematic renders, but node labels collide in a compressed row, making boxes and arrows hard to distinguish. See `screenshots/def-neural-operator--01.png`.

## Diagram candidates

- **def-positional-encoding-and-causal-mask**, Definition line 27: an n=4 mask matrix could show allowed 0 entries on/below the diagonal and -∞ above it, with query rows corresponding to allowed key prefixes. Candidate is illustrative; the formula is already explicit.
- **thm-message-passing-gnn-no-more-powerful-than-1wl**, Statement line 39, Facts & Assumptions lines 59–63, and proof lines 71–73: a two-graph induction schematic could connect equal WL color multisets to common GNN states and equal readouts. Candidate is illustrative; the proof carries the argument.

## Limitations

These were local frozen Chromium previews, not HTTP or production routes. The review covered visible rendering and diagram opportunities, not a full mathematical audit of each proof. No item, application, build, or publication files were modified.
