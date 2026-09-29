# Step 3a scope review — Riemann surfaces, branched maps, and differentials

**Decision: insufficient.** This is a scope finding only; I did not approve or
refute any item proof.

The CA-RS-1 prose places this pair after the sphere and analytic continuation
material, and assigns it Riemann-surface atlases, local and proper branched-map
theory, compact-surface genus, the residue theorem, and Riemann–Hurwitz. The
current A inventory covers those subjects, with local triangulation and
differential-pullback support. Its B inventory has atlas examples, a complex
torus, a smooth affine conic, a coordinate-change example, a nonproper
exponential map, a hyperelliptic cover, and a power-map Riemann–Hurwitz
example. The four-source coverage record maps 41 harvested results from
Looijenga, McMullen, Jost, and Hinich to this material. The pair has a coherent
library role between its sphere/monodromy/covering prerequisites and later
elliptic-function, Hodge, divisor/Riemann–Roch, and hyperbolic-surface pages.

The specific scope gap is the planned algebraic-curve example. The CA-RS-1
companion prose says “algebraic curves where nonsingular,” and the binding
CA-RS-1 B inventory names `ex-nonsingular-algebraic-curve-charts`
([plan](plan-complex-analysis-track.md), CA-RS-1 and §M.2). The current
manifest instead has only `ex-smooth-affine-conic-as-punctured-plane`, a single
explicit curve. The coverage record explicitly defers Looijenga's Examples
1.9(iii–iv), “general nonsingular affine and projective curves,” because their
chart construction needs the holomorphic implicit-function/local analytic
hypersurface interface ([coverage](frontier-36-complete-batch-28.coverage.json),
source `looijenga-riemann-surfaces`). A conic demonstrates one instance but
does not establish the planned general curve-to-Riemann-surface bridge.

**Recommended owner action:** enrich this pair with the general result that
nonsingular complex affine and projective algebraic curves carry the intended
one-dimensional holomorphic charts, including the local support needed to
construct those charts (and compactness in the projective case). No merger is
selected here. Until the owner applies an enrichment or other scope decision
and records `proceed` for the resulting scope, this pair remains blocked.

The library-plan prerequisites otherwise match the current A manifest,
including the added compact-surface-classification prerequisite. The current
batch-28 dependency record separately leaves the classification page and its
two used supplier results open pending Step 3 authoring/review; this is a
supplier-proof obligation, not the scope gap above. Batch-28 notes report no
pair-specific owner amendment.

During this review, recomputed autopilot status still reported `1-drift`, with
`3a-scope` waiting and no dispatch in flight. I left run state unchanged and
recorded only this assigned pair's scope decision.
