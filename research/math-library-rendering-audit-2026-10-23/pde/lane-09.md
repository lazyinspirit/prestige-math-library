# PDE rendering audit — lane 09

## Scope and coverage

Audited all 94 assigned frozen ItemBodies and individually opened all 195 receipt-listed screenshot tiles with `tools.view_image(detail="original")`. The ledger records each item source and snapshot hash, title and complete-body coverage, screenshot path/hash and original pixel size. All tiles were inspected independently, including continuations and overlaps. The sidecar receipts reported no KaTeX errors or diagram failures; every item had `tikz_count: 0`. No suspected clipping remained after visual review of the original tiles.

Exact per-item and per-tile attestations are in [lane-09.json](lane-09.json).

## Confirmed finding

- Confirmed raw title notation in `ex-zero-order-bessel-completion-is-ltwo`: source line 4 writes “L2” without math markup; the original-resolution title tile shows the baseline 2.

## Diagram checks

The following are uncertain editorial candidates grounded in claims already stated in the sources:

- `def-parabolic-cylinder-and-parabolic-boundary` (lines 39–50, 85–91): consider a schematic space-time cylinder separating initial and lateral parabolic boundary from the excluded final-time face.
- `cor-compact-support-expands-at-speed-at-most-c` (lines 31–42, 46–52): consider a propagation-cone schematic relating support K, source support, and the time-t region K+B_ct.
- `ex-burgers-shock-riemann-solution` (lines 32–40): consider an x-t shock ray x=st with left/right states and a flux-chord inset encoding the Rankine–Hugoniot speed.
- `ex-plane-wave-shows-the-characteristic-speed-is-sharp` (lines 35–53): consider a schematic of the translated support slab and parallel fronts moving with velocity c omega.
- `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` (lines 46–47): consider a split-coordinate graph of the local level set a -> phi(a) in ker DG(u) direct-sum Y.

No source, application, production, library, native publication, or publication-status files were changed. Only this lane report and its JSON ledger were written.
