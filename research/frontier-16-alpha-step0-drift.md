# Frontier 16 — Alpha step-0 prerequisite-drift review

### the-inverse-function-theorem-completed

I read `research/plan-realanalysis-completion-track.md`, §3, Block I, RC-1; `research/plan-realanalysis-pages.md`, Block X, RA-34 through RA-36; and the downstream DG-4 seam amendment in `research/plan-differential-geometry-track.md`. RC-1 states `inverse-and-implicit-function-theorems`, `the-topology-of-euclidean-space`, and `mixed-partials-taylor-and-extrema` as prerequisites. All three were in the declared closure: the third is transitive. The connected-open constancy result is licensed by `the-topology-of-euclidean-space`. The proper-local-diffeomorphism sentence explicitly says to narrow if a covering-space citation is too far, so it does not require the higher-order covering-space page. DG-4 is a downstream consumer of RC-1, not its prerequisite.

VERDICT: no-drift

### convex-and-semicontinuous-functions-on-rn

I read `research/plan-realanalysis-completion-track.md`, §3, Block I, RC-3. Its stated prerequisites are `convexity`, `mixed-partials-taylor-and-extrema`, and `the-topology-of-euclidean-space`; these are exactly the page's declared `requires`, and the supporting-hyperplane, Hessian, compact-attainment, and epigraph arguments name no additional page prerequisite outside their closure.

VERDICT: no-drift

### areas-of-elementary-plane-figures

I read `research/plan-realanalysis-completion-track.md`, §3, Block II, RC-4, together with the RA-38 partial-delivery reconciliation in `research/plan-realanalysis-pages.md`. RC-4 states `fubini-and-change-of-variables`, `pi-the-equivalent-characterizations`, `inner-product-spaces-and-orthogonality`, and `determinants-of-matrices-over-a-commutative-ring`. The first three were direct requirements and the determinant page was already transitive through the declared closure. The graph-area/Jordan-content and disc-area reconciliation is likewise supported inside that closure.

VERDICT: no-drift

### improper-and-parameter-dependent-multiple-integrals

I read `research/plan-realanalysis-completion-track.md`, §3, Block II, RC-6, and `research/plan-realanalysis-pages.md`, Block X, RA-38's partial-delivery note. RC-6 states `fubini-and-change-of-variables`, `improper-integrals`, `uniform-convergence-of-functions`, and `the-fundamental-theorems-of-calculus`. The first, second, and fourth were direct requirements; `uniform-convergence-of-functions` was already in their transitive closure. The polar-change-of-variables and compact-rectangle differentiation inputs are supplied by those pages.

VERDICT: no-drift

### picard-lindelof-and-first-order-odes

I read `research/plan-realanalysis-completion-track.md`, §3, Block V, RC-10, and the downstream DG-8 seam amendment in `research/plan-differential-geometry-track.md`. RC-10 states `the-fundamental-theorems-of-calculus`, `completeness-and-uniform-continuity`, `uniform-convergence-of-functions`, and `approximation-and-compactness-in-ck`. The first and fourth were direct requirements, while the other two were already transitive. DG-8 consumes RC-10 for local existence, uniqueness, Grönwall, and continuous dependence; it is not an RC-10 prerequisite.

VERDICT: no-drift

### the-gauge-integral-and-cousins-lemma

I read `research/plan-realanalysis-completion-track.md`, §3, Block V, RC-11 and §5.5, plus `research/plan-measure-theory-track.md`, MT-19's seam amendment. RC-11 states `the-fundamental-theorems-of-calculus`, `equivalent-forms-of-completeness`, and `bounded-variation-and-riemann-stieltjes`; the latter two were already transitive from the declared requirement. The documents explicitly leave the Lebesgue comparison to later MT-19 and make RC-11 state only the classical gauge-integral half, so the higher-order measure pages are downstream rather than prerequisites.

VERDICT: no-drift

### trigonometric-and-oscillatory-examples-in-one-variable

I read `research/plan-realanalysis-completion-track.md`, §3, Block VI, RC-12 and §5.3, together with `research/plan-realanalysis-pages.md`, D-TRIG. The stated direct prerequisites are `the-complex-exponential-and-eulers-formula`, `approximation-and-compactness-in-ck`, `darboux-lhopital-and-taylor`, and `arc-length-and-rectifiable-curves`. Those cover the analytic examples, but RC-12's B-page design also promises the topologist's sine curve specifically as a connected non-path-connected set. That result needs the published connectedness/path-connectedness interface on `connectedness`, which was absent from the original closure. I added the legal backward edge to order 253.

VERDICT: drift-applied — added connectedness (order 253)

### measures-and-their-basic-properties

I read `research/plan-measure-theory-track.md`, §0, §§1.1–1.3, and MT-2, as well as the functional-analysis and probability inherited-boundary rows that mention MT-2. MT-2 states MT-1, `limsup-and-subsequential-limits`, `series-and-nonnegative-tests`, `filters-and-ultrafilters`, and `countability-and-uncountability` as prerequisites. The spec's direct `sigma-algebras-and-borel-sets-examples` edge reached MT-1 and all four named published pages transitively. MT-5 is expressly an orientation-only forward pointer for a non-complete example, while the functional-analysis and probability mentions are downstream consumers.

VERDICT: no-drift

### the-seifert-van-kampen-theorem

I read `research/plan-topology-set-theory-track.md`, HT-5, and `research/plan-algebraic-topology-track.md`, §§0 and 5, where the page is recorded as a consumed lower seam. HT-5 states `the-fundamental-group-of-the-circle` and `free-products-and-amalgamation`. Its Lebesgue-number/compactness input, Euclidean sphere and annulus input, fundamental-group machinery, and free-group input were all already in that declared closure. The algebraic-topology references are later consumers.

VERDICT: no-drift

### classification-of-covering-spaces

I read `research/plan-topology-set-theory-track.md`, HT-6, and `research/plan-algebraic-topology-track.md`, §§0 and 5. HT-6 states `covering-spaces-and-lifting` and `the-fundamental-group-of-the-circle`; the lifting criterion, group-action/normaliser algebra, and integer division inputs were already in their closure. The possible non-regular covering over a wedge is expressly conditional—"else drop with note"—so HT-5 is not a required prerequisite of this page. The algebraic-topology occurrences use classification as a later supplier.

VERDICT: no-drift

### analyticity-liouville-and-morera

I read `research/plan-complex-analysis-track.md`, CX-D7 and CA-5, plus the existing-band inventory and the functional-analysis consumer references. CA-5 states CA-4 (`goursat-and-cauchys-theorem-in-a-convex-domain`) and CA-2 (`complex-power-series-and-analytic-functions`) directly. Two further prerequisites were outside the original closure: `rem-locally-uniform-convergence-dictionary` is expressly to cite the published compact-convergence topology, homed on `function-space-topologies`, and the Liouville FTA remark is expressly to cite the canonical statement on `the-fundamental-theorem-of-algebra` once authored. I added both legal backward edges. CX-D7 only requires the remark to name the topological route, not use it as a proof premise, so `applications-of-the-fundamental-group` remains a non-load-bearing agreement mention. The Fubini input for the parameter-integral theorem was already transitive.

VERDICT: drift-applied — added function-space-topologies (order 283)

> **Session correction, 2026-08-20, during the run.** The review also applied
> `the-fundamental-theorem-of-algebra` (order 139) as a `requires` edge. That
> edge has been **struck from `research/plan-spec.json`** and removed from the
> verdict above.
>
> The review's own prose is the evidence against it: the FTA citation is
> "expressly to cite the canonical statement on `the-fundamental-theorem-of-algebra`
> **once authored**", and `plan-complex-analysis-track.md` L157 records that page
> as "planned, unauthored (`items[]` empty)" with CA-5 citing it "once that
> predecessor is authored rather than re-minting it". It has been out of scope
> since frontier-15 step 0, whose §II.8 route needs two unbuilt Galois pages. A
> conditional future citation was applied as a present prerequisite.
>
> The effect was not local. `analyticity-liouville-and-morera` became
> unbuildable, and with it the twenty-three complex-analysis pairs that chain
> through it — while batch 7 was scaffolding that very page. No gate could see
> it: `validate-plan` passes a backward edge to a page with no item list, and
> `drift-review-check` was a prose-only check over a stage whose purpose is to
> mutate the plan. That gate now verifies every applied edge against the spec,
> its direction, and whether its target is published or built by this run.
>
> **And the citation the review wanted is already available — no edge needed.**
> Two different objects share the name. The order-139 page is the planned
> *algebraic* proof (Artin–Galois, `requires` Kummer/Sylow/IVT), unbuilt. The
> **theorem** is published: `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`,
> `landmark: true`, on the A page `the-complex-exponential-and-eulers-formula`
> (order 189, real-analysis, `status: published`) — the d'Alembert minimum-modulus
> route, with `lem-complex-polynomial-growth-and-minimum-modulus` and
> `lem-dalembert-minimum-modulus-descent` beneath it.
>
> That page is **already inside this page's 85-page transitive `requires`
> closure**, so CA-5's remark can cite the published statement today. It is an
> A-page item, so no `b-leaf` problem. An explicit edge would be redundant, and
> `external_refs` would be wrong — that is for non-load-bearing mentions of
> things the library does not have, and the library has this.
>
> **Batch 7 must not re-mint it.** The design sentence "once that predecessor is
> authored" predates the order-189 publication and, read literally today, invites
> exactly the duplicate statement the generated-claim rule forbids. The Liouville
> proof here is a *second proof of an already-published landmark*, and the remark
> records the agreement.
