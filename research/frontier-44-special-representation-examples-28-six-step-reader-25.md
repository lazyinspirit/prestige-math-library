# reader-25 — independent review of batch 25

Run: `frontier-44-special-representation-examples-28-six-step`. The dispatch's current manifest owns two draft differential-topology pages and eight draft items. The live state read during this review was `stage: 3a-read`; the last three Git log entries concern the rebuilt engine. This review uses current carriers, not concluded-run RESUME files or inherited author verdicts.

## Opened inventory

Pages:

- `library/differential-topology/relative-smooth-triangulation-and-bundle-fitting.md` (A).
- `library/differential-topology/relative-smooth-triangulation-and-bundle-fitting-examples.md` (B).

Assigned items, read supplier before consumer (the product example follows its definition and cell supplier):

- `items/def-relative-smooth-triangulation-and-projection-preserving-fitting.md`.
- `items/lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation.md`.
- `items/lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps.md`.
- `items/lem-corner-adapted-strong-approximations-remain-in-the-same-orthant.md`.
- `items/lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection.md`.
- `items/thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations.md`.
- `items/thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation.md`.
- `items/ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation.md`.

Direct outside suppliers: statements and relevant supplied proofs/definitions were opened to check their actual interfaces.

- `items/cor-vector-valued-ftc-and-lipschitz-bound.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-barycentric-subdivision-of-an-abstract-simplicial-complex.md`.
- `items/def-simplicial-subcomplex-star-closure-and-link.md`.
- `items/lem-closed-subset-of-a-compact-space-is-compact.md`.
- `items/lem-finite-convex-cell-complexes-admit-compatible-triangulations.md`.
- `items/prop-a-finite-simplicial-complex-has-compact-hausdorff-realization.md`.
- `items/thm-brouwer-fixed-point-theorem.md`.
- `items/thm-chain-rule-for-total-derivatives.md`.
- `items/thm-continuous-bijection-from-a-compact-space-has-continuous-inverse.md`.
- `items/thm-extreme-value-metric.md`.
- `items/thm-heine-borel-rn.md`.
- `items/thm-lebesgue-number-lemma.md`.
- `items/thm-picard-lindelof-local-existence-and-uniqueness.md`.
- `items/thm-smooth-dependence-of-ode-solutions-on-parameters.md`.

Additional published context opened:

- `items/lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex.md`.
- `items/def-finite-convex-cell-complex-and-linear-subdivision.md`, including its explicit Heine–Borel compactness interface.
- `items/thm-heine-cantor-metric.md`, consulted for uniform continuity; the repaired approximation proofs give their finite-cover argument locally, without changing the dependency graph.

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, the assigned manifest, and the seven assigned proof contracts. An inspection of the batch notes encountered copied representation-theory/native-scaffold material rather than this differential-topology assignment; those historical decisions were not used as mathematical verdicts. No rendered mathematical evidence bundle was supplied in the dispatch.

## Authoritative evidence

- [Munkres, Elementary Differential Topology](https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf): downloaded the scanned PDF and visually read PDF pp. 85–110, corresponding to printed pp. 80–105. This includes the complete stability argument in §8.8, secant/thickness and extension arguments in §§9.3–9.8, fitting and its induction in §§10.1–10.4, and the boundary-extension proof in §10.6. The actual one-based PDF offset is **+5**, whereas the assigned carriers gave +6. The source's manifold-boundary argument is not a theorem for arbitrary corner data; the corner additions were checked as local arguments.
- [Putz, Triangulation of Fibre Bundles](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/3C2209F15E20312654B3B2602314144D/S0008414X0005450Xa.pdf/triangulation_of_fibre_bundles.pdf): downloaded the full PDF and read printed pp. 499–506 and 508–512, including diagram definitions, shifts, fitting, extension, and the complete relevant finite-stage induction (§§3.2–4.4). In particular §4.1, p. 510, explicitly requires an induced domain subdivision before shifting over a subdivided base. Classical boundaryless/boundary results were distinguished from the supplied corner proof.

## Repairs and their evidence

All eight edited items remain draft. No owned item had a `verification.judge` record to remove; no judge, audit, verification, or acceptance stamp was added. Dependencies and item levels are unchanged. Seven affected proof contracts were updated with current derivations, exact full source-section quotes, and current step uses. Historical hash-bound `template_review` records were preserved without refreshing them.

1. **`def-relative-smooth-triangulation-and-projection-preserving-fitting`, Definition, corner-face and gluing paragraphs.** An arbitrary local chart face need not itself be the compact image of a finite global subcomplex; clarified local face compatibility as the local restriction of a subcomplex. The claim that gluing any subcomplex gives a simplicial complex omitted fullness/refinement: two distinct edges sharing their two endpoints would otherwise have the same vertex set. Now glue a full fit, or first subdivide compatibly to make the fit full, with the common-face argument supplied. Munkres §10.1, printed pp. 97–98, gives the matching full-fit interface.
2. **`lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation`, former Proof 2.2–4.2; current Proof 1.1–5.1.** Former step 2.2 used an undefined separation constant, and former steps 2.1/3.1 treated the simplexwise differential as a single linear injection on a union span. The proof also did not justify uniform neighbourhoods independent of the arbitrary approximation/subdivision. Rebuilt the argument using full-span bounds obtained from relative interiors, two-segment integration, separate affine simplex maps agreeing on their common face, compact frozen-angle minima established before use, and neighbourhoods determined only by the original map. The frozen refined fan proves immersion; compact separation away from those neighbourhoods proves global embedding. Munkres §§8.6–8.8 supplies the exact statement and complete geometric argument; no mesh/thickness restriction was introduced. Canonical phase numbering was adopted after precheck's initial repair proposal.
3. **`lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps`, Statement extension clause and Proof 1.1–3.1.** Scaling a correction preserves the *linear part* of an affine map, not its affine offset: for instance `p(e)=0` does not imply `p(ae)=0` when `p(x)=x+1`. Replaced this by the exact condition `p(g)=p(f)`, equivalently annihilation by the linear part. Handled the empty complement of U before taking a positive lower bound, and separated zero-dimensional simplices before dividing by inradius. Supplied an explicit smooth taper, the compact finite-cover uniformity argument, and the full-span derivative justification needed for extension bounds independent of boundary-subdivision shape. The lattice subdivision, secant estimate, and tapered extension are checked against Munkres §§9.3–9.8.
4. **`lem-corner-adapted-strong-approximations-remain-in-the-same-orthant`, Proof 1.1–2.1 and whole-zero-set cases in 3.1–4.1.** The old bound on *every* unit direction not tangent to a zero face is false: for the coordinate function y, transverse unit directions `(1,epsilon)/sqrt(1+epsilon^2)` approach the horizontal zero-face tangent and have derivative tending to zero. Proved instead that maximal zero faces are disjoint under the supporting-cone hypothesis, took positive compact minima on outside-vertex directions, and integrated barycentrically projected segments to obtain the needed distance lower bound. Treated coordinates identically zero on a simplex separately and chose the perturbation threshold below the actual half-bounds. Corrected the last proof citation: the half-plane warning is Munkres §9.8(e), not fact F3 (which is only the definition).
5. **`lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection`, Proof 1.1, 2.1, 4.1.** Corrected the compact source from a finite index set to the finite disjoint union of closed simplices. Made the secant-on-P1 construction and its controlled extension two explicit applications of the supplier. Added the finite inverse-image convex-cell subdivision so the original affine r maps each refined domain simplex into one simplex of the temporary base subdivision. This closes the shift construction's previously unstated compositional prerequisite, explicitly present in Putz §4.1. The shift back preserves the same point map h and the same r; the existing supported finite induction and corner-side arguments were checked against the repaired suppliers.
6. **`thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`, Statement and Proof 1.2, 2.1–2.2, 4.1.** Made local-versus-closed-face language precise and made corner adaptation explicit for a supplied protected neighbourhood piece, since the fitting interface requires it. Constructed the finite bump functions using the proved explicit cutoff. Corrected the collar differential at positive time to `D Phi_t(w+s V_y)`, established invertibility through the reverse flow and uniqueness identity, and distinguished nonnegative time tangents at the bottom, unrestricted time tangents in the collar interior, and the artificial top sector. Orthant derivative zero-cones now follow from the repaired distance estimate rather than the false unit-direction bound. Supplied the compact-core fixed-point argument for retention of the intermediate old collar annulus. The nonrelative triangulation and admissible boundary-extension claims are retained; Munkres §10.6 supports the boundary fitting route, while the corner fan and flow calculations are established here.
7. **`thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation`, Statement, Given, Proof 5.1.** Made the supplied protected diagram's corner adaptation explicit, closing the missing hypothesis for use of the corner fitting clause. Replaced the unsupported assertion that an intermediate old neighbourhood survives approximation by a finite corner-box-core argument pulled back through its original homeomorphism, using the same clipped Brouwer construction as Proof 4.1. The fixed-base, exact projection, compact-fibre and supplied-collar restrictions were retained.
8. **`ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation`, Verification 2.1.** A trivial kernel alone does not prove injectivity of a piecewise linear map on a whole star. Replaced the zero-vector comparison by equality of two arbitrary tangent-star vectors and factorwise whole-star injectivity. The convex product-cell triangulation and exact first-coordinate projection remain unchanged.
9. **Citation locators.** Corrected every existing Munkres PDF page-range/page locator in the assigned carriers to the observed +5 offset. Printed-page and theorem locators were retained. Items with no PDF-number locator needed no such correction.
10. **Assigned A-page prose.** Added the essential existing corner-adapted protected-piece and supplied bundle-diagram requirements to its summary. The B-page prose was read and left unchanged.

## Consumer checks

The definition's direct/indirect consumers are the other seven assigned items. Searching current item carriers for the definition and repaired supplier IDs found no outside consumers; the relevant owned suppliers have empty alias lists. All seven consumers were checked against the corrected gluing/local-face convention. In particular fitting already produces full intersections, and the product construction fits its local corner faces.

The secant affine-map clarification was checked in fitting Proof 3.1–4.1 (the projection's linear part annihilates corrections), the manifold theorem, and the bundle theorem. The stability and orthant proof replacements preserve their statements; their uses in fitting and both existence theorems were checked with the exact hypotheses. The manifold theorem's newly explicit protected-piece qualification was checked in its only assigned theorem consumer, which uses its nonrelative fibre-triangulation clause. The bundle relative-statement qualification has no further item consumer. The B example proves the product case directly and does not consume either existence theorem. No outside carrier required a repair.

## Page verdicts and remaining defects

| Page | Reader verdict |
| --- | --- |
| `relative-smooth-triangulation-and-bundle-fitting` (A) | No remaining defect identified after the recorded repairs and consumer checks. The relative neighbourhood clauses now explicitly require the corner-compatible supplied pieces used by the proof. Remains draft for Step 3b. |
| `relative-smooth-triangulation-and-bundle-fitting-examples` (B) | Product construction and page summary match the supplied hypotheses; the item-level whole-star argument was repaired. No B-page prose edit. Remains draft for Step 3b. |

No uneditable item or page defect was confirmed. No withdrawal is proposed. No blocker remains for this reader handoff. These are reader findings, not independent judge certification or authorization to publish.

## Validation

- Reflow ran on all eight changed item paths; each was already in the required paragraph layout.
- Precheck: all seven proof-bearing items passed. The definition has no phase proof. The stability item's initial phase-number proposal was repaired and rerun; later surgical changes to the secant/manifold proofs were also rerun successfully.
- Rendercheck: the explicit eight-item/two-page selection passed; after final surgical changes the two affected items passed again. An attempted `--help` invocation unexpectedly started the tool's default corpus scan; it was interrupted (exit 130) and is not validation evidence.
- Contract consistency: all seven refreshed contracts have exact current source-section quotes and references to existing proof steps. Historical hash-bound review records were not recertified.
- Final required command, after all item edits and reflow: `node tools/proof-layout.mjs` with all eight explicit changed item paths in one batch. Result: **8 items, 39 steps, 0 defects**, exit 0. No item edit followed this check.

## Coverage limitations

This review read every assigned current item and both assigned pages, the consumed direct supplier interfaces, the listed additional published context, and the exact source sections above. It does not claim a new audit of every transitive published dependency or of source chapters outside those sections. No representation-theory/native-scaffold conclusion from the copied notes was used. The mathematical corner additions were checked locally rather than attributed to a source theorem that only treats ordinary boundary.
