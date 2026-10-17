# Batch 23 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-23.

## Completed level 0 obligation

`refuter:23:1`, `def-rectangular-grid-and-dirichlet-flux-stencil`: confirmed_fatal, repaired with repair_confidence: 1. A full grid function equal to 1 at (0,0) and 0 elsewhere is nonzero but has zero interior square sum. Thus the original claim of an inner product/norm on all grid functions is false. Current pre-edit raw SHA256 124d2c314e683247cefc9b18bc27710576c79c1d5f8ed05a2baecf60e7bad158 equals both immutable reader pre/post item hashes: the reader made no repair. The scope's observed_sha256 d3b357e470a6d8eb731bd8a65a57f5fa4cc5eb385fadff65e3488fd60acf5575 is a distinct recorded fingerprint; no claim is made that it is the raw-file hash.

The Definition now states the formulas on real interior vectors, extends notation to restrictions of full grid functions, and distinguishes the resulting seminorm from its norm restriction to X_{h,0}. Mesh weights are positive; zero interior norm forces all interior entries zero, and on X_{h,0} the boundary entries already vanish. Grid, face, boundary and energy formulas remain identical. No AC or proof contract is needed for this definition. Updated the batch manifest's interface summary and all five owned definition quote mirrors; provenance remains ai-altered/not-applicable with existing source URLs.

Direct consumer review: the summation-by-parts lemma uses a bilinear interior pairing for arbitrary full grid functions, and uses definiteness only on X_{h,0}; its inverse norm is expressly on interior vectors. Consistency and flux/expanded examples use only the unchanged stencil. The quadratic exactness example uses zero-boundary differences for uniqueness. The error theorem uses interior residuals and zero-boundary errors. The owned page summarizes those valid interior norms. No consumer claim needs repair and no propagation beyond this hop is triggered.

Outside batch 37, def-parabolic-theta-finite-difference-scheme specifies matrices and power stability on interior values, while lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint explicitly quantifies over interior grid vectors with zero extension. Both uses remain valid; no mathematical repair is required. OWNER HANDOFF: refresh the copied Definition citation in research/numerical-optimization-dynamics-2026-10-16-batch-37.proof-contracts.json, contract lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint, F1. This outside-batch metadata is deliberately unedited. Its full old quote contains the replaced domain sentence. No published carrier is defective or edited; no withdrawal is proposed.

Sources checked so far: Süli nspdes.pdf, §3.2 PDF pp.19–23 (printed 15–19), §4.1 PDF pp.27–31 (printed 23–27): interior-vector pairing, homogeneous-boundary SBP/Poincaré, stability and C4 error transfer. Browser fetch failed but the complete PDF downloaded successfully and was read with PyMuPDF. MIT lectures 5 and 6 were read through their complete mathematical sections. Source URLs are the existing item references. These sources motivate the construction; the domain counterexample and corrected definiteness argument are elementary and checked directly.

## Completed level 2 risk review

`thm-elliptic-finite-difference-l2-error-on-rectangles` is HIGH (score 5). The complete specific risk review is recorded in its owning proof contract. Independently checked all four theorem steps, all seven stability supplier steps and all four consistency supplier steps. The coefficient lower bound reaches the exact face midpoints. The Taylor products give precisely the stated Cx/Cy constants; the identical quadratic face term cancels, leaving second-order divergence error. Boundary-adjacent Taylor segments remain in the closed rectangle. Invertibility acts on zero-boundary errors after lifting by exact u* samples; A e=-tau has the correct sign. The weighted interior count is bounded by area, giving exactly the displayed square-root area factor. Constants are independent of the two mesh counts. Checked the single-interior-node grid, zero residual, zero right-hand side, unequal positive side lengths and independent two-axis refinement. Empty grids are excluded; there is no iff or choice issue and no weak-solution regularity is asserted. No theorem edit is needed.

Sources: [Süli lecture notes](https://people.maths.ox.ac.uk/suli/nspdes.pdf), §3.2 PDF pp.19–25 and §4.1/4.1.1 PDF pp.27–31, were read completely for stability and smooth error transfer. [MIT Lecture 5](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf), mathematical pp.1–6, checks the central and boundary stencils. [MIT Lecture 6](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf), mathematical pp.1–4, checks midpoint conductivity, the residual sign and uniform inverse transfer. The variable-coefficient constants and rectangular generalization are independently established in the local proofs.

## Decisions and ledger

Exactly one decision is owed: refuter:23:1, route flagged, confirmed_fatal, repair_confidence 1. It references closed defect `nod-20261016-b23-3a-interior-norm-domain`. There are no touched, reader or page obligations in the frozen scope; the risk-only theorem requires no invented decision. No historical preimage resolution or escalation is needed. No judge or audit stamp was added.

## Checks and owner handoff

Local checks completed successfully:

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-23.proof-contracts.json` ran before the risk review: 0 errors, seven proof-bearing items routed, one HIGH theorem.
- The same command with `--require-reviewed` after recording the theorem review: 0 errors.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-23.proof-contracts.json --strict`: 7/7 checked, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-rectangular-grid-and-dirichlet-flux-stencil.md --json`: not-applicable, zero proofs checked, zero failures, as appropriate for a definition.
- `node tools/rendercheck.mjs items/def-rectangular-grid-and-dirichlet-flux-stencil.md --json`: one file, zero errors or warnings.
- Final item layout check, after the final item edit: `node tools/proof-layout.mjs items/def-rectangular-grid-and-dirichlet-flux-stencil.md`: one item, zero proof steps, zero defects.
- `node tools/defect-ledger.mjs append --file /tmp/b23-defect-row.json`: appended the single closed row and regenerated the canonical view using the tool's append lock. `validate --run numerical-optimization-dynamics-2026-10-16`: two current run rows checked, zero errors.
- Explicit-path `git diff --check` exited 0; several run carriers are untracked in this shared workspace, so this is only a whitespace check for tracked deltas, not evidence of a clean repository.

Final definition raw SHA256: `4e3cf9004b98be18a212e2d5da8c787f0030085856218f7149464a164e6917db`. The original pre/post snapshots, reader and refuter artifacts were preserved unchanged.

 No mathematical blocker remains in batch 23. Batch 37's F1 quote mirror refresh remains an outside-scope owner metadata handoff as described above; its consumer mathematics requires no repair. Engine-owned decision stamping and the gate battery have not been run.
