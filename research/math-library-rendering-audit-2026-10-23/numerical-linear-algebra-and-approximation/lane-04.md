# Numerical Linear Algebra and Approximation rendering audit — lane 04

Reviewed all 100 assigned titles and complete ItemBodies, plus all 144 receipt-listed screenshot tiles. Each tile was opened individually with `tools.view_image` at original resolution. Current source, frozen snapshot, rendered HTML, and screenshot hashes match their frozen records. No confirmed rendering defect or standalone clipping remains. Exact per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

Two assigned items have malformed source YAML recorded in `frontmatter-parse-blockers.json`: `thm-cg-recursive-residual-gap-and-attainable-accuracy` and `thm-gmres-true-residual-gap-from-computed-arnoldi-relation`. Their titles and full ItemBodies were reviewed as **recovered body-preview coverage** from the frozen raw snapshots. This does not establish successful canonical parsing or native loader coverage; the parse blocker is separate from the visual review.

All 100 screenshot sidecars report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. There were no existing TikZ/tikzcd maps, labels, domains/codomains, orientations, indices, or signs to inspect. Apparent leading-glyph losses in several tiles were checked against the unchanged original PNG pixels using diagnostic crops; the full glyphs are present, so they are not findings. Wikilinks appearing as separate block lines are expected preview styling. No standalone clipping was confirmed.

## Optional diagram candidates

- `def-elimination-tree-and-column-reach` (source lines 28–30): an optional worked elimination-forest figure could connect one fixed ordering, later-neighbor set, structural column, parent edges, and vertex reach. The parent-edge direction should follow the source convention from each child to its later parent, with positions increasing along parent edges. This is an uncertain explanatory candidate; the prose already defines the objects.
- `alg-h2-matrix-vector-multiplication` (source lines 36–40): an optional pair of cluster-tree sketches could show the column-side upward pass, admissible and near-leaf contributions, and row-side downward pass. The upward arrows use the adjoint transfers $(E^V_{\sigma_j})^*$; row propagation uses $E^U_{\tau_i}$; near-leaf terms feed $y|_\tau$ directly. This is an uncertain explanatory candidate; the algorithm is already explicit in prose.

No Scratch section or Scratch panel occurs in the assigned ItemBodies. The review was read-only and used no live website or external network. Only `lane-04.md` and `lane-04.json` were written.
