# Step 3a scope review — pair `finite-reflection-length-and-orthogonal-moved-spaces`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-finite-reflection-length-and-orthogonal-moved-spaces-0284d1a6de26a458` · design label CG-21.

- A page: `finite-reflection-length-and-orthogonal-moved-spaces` (order 1752, batch 18, kind A).
- B page: `finite-reflection-length-and-orthogonal-moved-spaces-examples` (order 1753, batch 18, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-finite-reflection-length-and-orthogonal-moved-spaces.json`.

## Inputs read

`research/frontier-42-coxeter-32-batch-18.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; `library/coxeter-groups/finite-reflection-length-and-orthogonal-moved-spaces{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-21 (lines 355–367); `research/plan-spec.json` (orders 1752/1753,
`requires`, companion pointers); `research/coxeter-scaffold/inventory.json` CG-21;
`research/coxeter-scaffold/definition-justifications.json` (this definition's justifier);
`research/coxeter-scaffold/combinatorial-source-report.md` §"Reflection length, absolute order, noncrossing
partitions and Cambrian scope" and §CG16; `research/coxeter-scaffold/independent-audit.md` (the CG-21 ordering
line); `research/frontier-42-coxeter-32-owner-authoring-direction.md`; `research/frontier-42-coxeter-32-alpha-step1-drift.md`
§ this page; `research/frontier-42-coxeter-32-scope-ledger.json`; `research/frontier-42-coxeter-32-owner-scope.json`;
the seven `research/frontier-42-coxeter-32-step1-<id>.json` readiness records; the current statements of every
supplier clause named in §4; and the batch 19 and batch 31 manifests for the consumer scan.

## 1. Prose design versus scaffold (A page)

The library prose page names the four ordered CG-21 supplier contracts; the scaffold keeps all four exact ids,
kinds and relative order and realises every clause of the plan's proof-route column. It adds no new supplier
contract.

| Design contract (plan §CG-21 and native prose) | Scaffolded item | Coverage |
|---|---|---|
| `def-cg-reflection-length-absolute-order-and-moved-space` — ℓ_T(w) as least k with w=t₁⋯t_k, existence from S⊆T and well-ordering; u≤_T v iff ℓ_T(v)=ℓ_T(u)+ℓ_T(u⁻¹v); M(A)=im(A−id), F(A)=ker(A−id) for orthogonal A | `def-cg-reflection-length-absolute-order-and-moved-space` (1) reflection length with the existence argument, (2) absolute order, (3) moved/fixed spaces plus the orthogonal-order relation ≤_O on O(V), (4) explicit abstentions (no order property, no ℓ_T=dim M claimed at definition level) | complete |
| `lem-cg-orthogonal-wall-form-and-subspace-restriction` — M(A)=F(A)^⊥; χ_A(u,v)=B((A−id)⁻¹u,v) with χ_A+χ_Aᵀ=−B; H_U with symmetric part −½ implies invertibility; A_U=id+H_U⁻¹ on U and id on U^⊥; unique moved space U and reflection-prefix relation by rank additivity; orthogonal rank-length equality; A_U need not lie in W | `lem-cg-orthogonal-wall-form-and-subspace-restriction` (1) basic identities and rank subadditivity, (2) the Wall form, (3) subspace restriction, line-reflections and the H_U formula, (4) restriction theorem: U↦A_U is a bijection onto {B∈O(V):B≤_O A} with uniqueness, inverse B↦M(B) and transitivity, (5) rank-length equality and the prefix characterisation of ≤_O | complete |
| `lem-cg-reflection-factorizations-and-independent-normals` — generic point of F(w) outside the finitely many root hyperplanes, nontrivial chamber stabiliser a parabolic hence contains a conjugate simple reflection r with normal in M(w); dim M(rw)=dim M(w)−1; induction inside W; telescoping reverse inequality closing Carter equality without an imported shortening theorem | `lem-cg-reflection-factorizations-and-independent-normals` (1) root normal α∈M(w) with F(w)⊆H_α and ρ(t_α)≤_O ρ(w) with the rank drop 1, (2) factorization and ℓ_T(w)=dim M(w), (3) independent normals (Carter Lemma 3) | complete |
| `thm-cg-carter-reflection-length-and-absolute-order` — ℓ_T(w)=dim M(w); absolute order a partial order with rank properties; under α,β≤_T δ, M(α)⊆M(β) iff α≤_T β, equality implies α=β, using restriction of χ_δ; common-upper-bound hypothesis indispensable | `thm-cg-carter-reflection-length-and-absolute-order` (1) Carter formula, (2) order/rank/invariance/monotonicity: prefix form, gradedness and cover rank, triangle-type inequality, inversion and conjugation invariance, M/F monotonicity, (3) moved-space rigidity under δ with the explicit hypothesis caveat | complete |

- The definition's recorded justifier is exactly `thm-cg-carter-reflection-length-and-absolute-order`
  (verified in `definition-justifications.json`), as the owner direction requires.
- Local additions, all design-presupposed and already recorded by the batch note: the orthogonal-order relation
  ≤_O (the design's restriction contract speaks of "the orthogonal reflection-length prefix order"); the
  independent-normals clause (the contract's own title, Carter Lemma 3); and the absolute-order rank and
  invariance clauses (source report CG16: "triangle inequality, inversion and conjugation invariance … prove
  absolute order is a poset by strict integer rank"; Brady–Watt §2 note (1) for M/F monotonicity).
- The design's warnings are preserved in the statements: the restriction element A_U need not lie in W (exhibited
  in the B plane-rotation example (ii)); the rigidity converse is claimed only under a common upper bound
  (exhibited as not removable in the I₂(4) witness); the identification V≅V* is used only through the batch-17
  arrangement page. No planned promise was narrowed.

## 2. B companion versus design

Design B task (native prose and plan §CG-21): "Compare the simple and reflection lengths of a long transposition
in S5. Work out the Wall form of a plane rotation and demonstrate why arbitrary subspace intersection does not
produce a Coxeter noncrossing meet." The three B items match one-for-one:

| Design B component | B item | Coverage |
|---|---|---|
| simple versus reflection length of a long transposition in S₅ | `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5` (i)–(iii): reflections are the transpositions, ℓ=2(j−i)−1 for (i j), ℓ_T=n−c(σ)=5−c(σ), the long transposition has ℓ=7 versus ℓ_T=1, w₀ has ℓ=10 versus ℓ_T=2 | complete |
| Wall form of a plane rotation, and the necessity of the common upper bound | `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` (i)–(iii): trace, S_A=(A−id)⁻¹ as multiplication by 1/(e^{iθ}−1), χ_A+χ_Aᵀ=−B; line restrictions, the bijection onto {B≤_O A} and A_L∉ρ(W) off the root lines; the I₂(4) A,A² witness with no common upper bound | complete |
| arbitrary subspace intersection is not the noncrossing meet | `ex-cg-moved-space-intersection-is-not-a-meet-in-a3` (i)–(iii): α,β≤_T γ in A₃=S₄, the explicit 2-dimensional moved spaces with 1-dimensional intersection containing no root, meet = 1 and M(1)=0 strictly smaller | complete |

The B page is a consumption leaf as its prose requires: no page's `requires` list and no run item outside the
pair depends on any B item (scan in §4). The I₂(4) witness in the second B item is the mathematically necessary
local addition that makes the rigidity theorem's non-removable hypothesis concrete; the batch note records it as
serving the design's own warning, not as a new supplier contract.

## 3. Source coverage

`batch-18.coverage.json` records the A page with three fetch-verified independent sources (Björner–Brenti,
complete author/class-hosted PDF, Exercise 2.36; Carter, Numdam full text, §2 Lemmas 1–5; Brady–Watt,
arXiv:math/0501502, §2 and §4 opening), 29 harvested rows (22 source rows + 7 canonical design/B-companion
rows), all with a destination: 17 `included`, 2 `inline` (Carter Lemma 1; the main result of Brady–Watt's
reference [7], proved locally by the Wall-form lemma per the design), 1 `deferred`, 9 `out-of-scope` with
reasons tied to this pair's contracts. The tally in the batch note matches the coverage file exactly.

The one `deferred` row is Brady–Watt §3 (Steinberg's bipartite ordering, the ρ_i and μ-vectors, Theorems 3.2
and 3.7), deferred to `bipartite-coxeter-elements-and-ordered-root-complexes`; that page exists (order 1754,
batch 19) and requires this A page, so the deferral destination is live and no harvested result is orphaned.
The 9 out-of-scope rows (involution subposet/shellability; Carter's crystallographic axiomatic setup and
Lemmas 4–5; Brady–Watt notes (2),(3)&(6),(5),(7) and the closing spherical-simplex facts) are each not consumed
by any claim of this pair or its planned consumers. The B page has no coverage-file entry, which is the run's
established A-page-only convention for coverage files; its three items carry their own references (Carter §2,
Björner–Brenti Exercise 2.36, Brady–Watt §2 and §4) and are `literature-derived` with `ai-altered` proofs. No
source drop or unresolved fetch is recorded; the coverage checklist passes with 0 errors and 0 warnings.

The inventory lists Stembridge FC §§1–2 as an advisory source for the four contracts; the selected proof route
(local Wall-form restriction + chamber-stabiliser shortening + Carter equality) does not consume it and no
design promise depends on it. Non-blocking, no action.

## 4. Prerequisite availability

- **Dependency scan.** All 86 declared `deps` edges of the seven pair items resolve: 59 to scaffolded in-run
  items (batches 2, 4, 7, 13, 17 and within batch 18) and 27 to published library items (linear algebra:
  `def-linear-map`, `def-kernel-and-image-of-a-linear-map`, `def-linear-subspace`, `def-linear-independence`,
  `def-adjoint-…`, `prop-adjoint-algebra`, `def-orthogonal-projection`, `thm-finite-dimensional-orthogonal-decomposition`,
  `thm-finite-dimensional-isometry-characterisations`, `cor-double-orthogonal-complement-and-dimension`,
  `thm-rank-nullity`, `def-real-and-complex-inner-product-space`, `def-linear-isometry-…`, the finite-union of
  proper subspaces lemma; order/type A: `def-partial-order`, `def-graded-poset-and-rank`,
  `def-inversions-inversion-number-and-sign`, `thm-well-ordering-principle`). No edge targets an id absent from
  both the published library and the current scaffold, and no edge points to a later batch.
- **Consumer scan.** The A page is required by its B companion (batch 18) and by
  `bipartite-coxeter-elements-and-ordered-root-complexes` (order 1754, batch 19); run items outside the pair
  consuming A items are four A items and one B item of batch 19 and four A items and two B items of
  `noncrossing-partition-lattices-and-kreweras-complements` (order 1778, batch 31). This matches the design:
  CG-25 requires this page, and the noncrossing route needs the absolute order, Carter formula and moved-space
  rigidity. The B page has no external consumer.
- **Supplier clauses verified in the current statements** (statement-level, not proof-level):
  - batch 2 `def-hh-coxeter-matrix-word-group-and-length` (presented group, universal property, length as least
    word length, S generates W) and `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4) (type A:
    S={s₁,…,s_{n−1}}, m(s_i,s_j)=3 iff |i−j|=1, s_i↦(i i+1) an isomorphism W→S_n, ℓ = inversion number);
  - batch 4 `def-cg-real-coxeter-form-and-reflection` (V=R^S, B, r_a), `def-cg-canonical-reflection-homomorphism`
    (ρ, Φ, T), `lem-cg-reflection-representation-descends-and-root-norms` (2) B-invariance and (4)
    ρ(wsw⁻¹)=r_{ρ(w)e_s}, `lem-cg-reflection-form-invariance-and-rank-two-orders` (3)(iii)–(iv) (matrix of r_sr_t,
    trace 2cos(2π/m), exact order m);
  - batch 7 `thm-cg-root-inversion-formulas-and-strong-exchange` (1) (root–reflection dictionary ρ(t_α)=r_α and
    Φ₊→T bijection) and `thm-cg-root-length-criterion-and-faithfulness` (3) (ρ injective);
  - batch 13 `def-cg-coxeter-diagram-components-and-finite-type` (diagram, components, finite type = W finite)
    and `thm-cg-finite-type-positive-definite-criterion` (1)–(2) (W finite iff B positive definite; b(v)=B(v,·)
    an isomorphism);
  - batch 17 `def-cg-finite-reflection-arrangement-and-spherical-chambers` (chambers wC, open faces wC_I, root
    hyperplanes H_α, finiteness) and `thm-cg-finite-chamber-tiling-and-coset-face-identification` (1) union of
    closed chambers and (3) partition by face interiors with Stab_W(x)=wW_Iw⁻¹.
- **Confirmed unmet prerequisites: none.** Residual uncertainty (stated honestly): this verification is at the
  current manifest/statement level. The supplier proofs and this pair's own proofs are Step-3b authoring work —
  no item files exist yet — so all in-run prerequisites are "scaffolded, proofs pending", not certified.
  Nothing outside the published library and the current scaffold is required.

## 5. Findings

1. **Confirmed declaration gap (non-blocking for scope).** The notation I₂(m) used by
   `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` and referenced by the closing sentence of
   `thm-cg-carter-reflection-length-and-absolute-order` (the I₂(4) witness) is defined only in
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (batch 13: "I₂(m), 3≤m<∞: two vertices joined
   by a single edge labelled m"), which is not among the pair's declared dependencies. The cross-batch ledger
   describes `def-cg-coxeter-diagram-components-and-finite-type` as supplying "the type conventions used for
   A₄, A₃ and I₂(m)", but its statement supplies only the diagram vocabulary and the finite-type designation;
   the type-A convention is in fact supplied by `thm-hh-parabolic-minimal-representatives-and-length-additivity`
   (4), which the type-A examples do declare. This is **not** an unmet prerequisite: the I₂(m) supplier exists in
   the current scaffold at an earlier batch/level, so scope holds. Recommended scaffold addition (Step-3b author
   or a scaffolder with owner authority; Step 3a must not edit scaffolds): add
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral` to the `deps` of the wall-form example (and of
   the theorem if its closing sentence is kept), and correct the ledger row's description of
   `def-cg-coxeter-diagram-components-and-finite-type`.
2. **Coverage bookkeeping nuance (no action).** The Carter row "Lemma 2: ℓ(w) equals the number of eigenvalues of
   w on V different from 1" is dispositioned `included` in `thm-cg-carter-reflection-length-and-absolute-order`,
   whose statement gives the equivalent geometric form ℓ_T(w)=dim M(w) (equivalent for finite-order orthogonal
   operators over R). The planned claim is kept; the row's phrasing is broader than the clause as stated.
3. **No scope pressure.** The pair is four A items plus three B examples; no page-split or merger pressure, and
   the design's three companion checks are all realised. The general comparison ℓ_T≤ℓ (immediate from S⊆T) is
   not stated as a separate clause, but the design's "differs from simple length" promise is carried by the B
   comparison and by the theorem's mixed ℓ/ℓ_T passage; no action.

## 6. Checks actually run

| Check | Command (abbreviated) | Actual result |
|---|---|---|
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-18.coverage.json --require-destination` | exit 0; 1 page, 29 results, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-18.pages.json` | exit 0; 7 items, 0 normalized, 0 errors |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; page order acyclic/consistent; no item cycles, forward references, B-page dependencies or unresolved ids |
| dependency/consumer scan | ad-hoc over all `research/frontier-42-coxeter-32-batch-*.pages.json` + published `items/` | 86 edges of the seven pair items: 59 in-run, 27 published, 0 missing; no later-batch target; A required by batches 19 and 31; no external B consumer |
| scope state | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` | page listed as "current scope review required" — this review supplies that decision |
| drift | `research/frontier-42-coxeter-32-alpha-step1-drift.md` § this page | VERDICT: no-drift; "No prerequisite gap. The Wall-form and shortening proofs remain draft obligations." No batch-18 entry in `step1-blockers.json` |
| readiness | the seven `research/frontier-42-coxeter-32-step1-<id>.json` records | all seven `decision: ready`, no outstanding work |

## 7. Decision

**`finite-reflection-length-and-orthogonal-moved-spaces`: sufficient.** The planned definitions (reflection
length with existence, absolute order, moved/fixed spaces and the orthogonal-order relation), results (Wall form
and subspace restriction with uniqueness and the bijection U↦A_U; shortening, Carter equality and independent
normals; absolute-order partial order with rank/invariance/monotonicity; moved-space rigidity under a common
upper bound with the indispensability caveat) and examples (three B items covering every design B check,
including the S₅ length comparison, the I₂(4) witness and the A₃ non-meet intersection) adequately cover the
intended subject of CG-21. Source coverage is complete for the selected route (3 fetch-verified sources, 29
dispositioned rows, live deferral destination, no orphaned rows); all declared prerequisites resolve to the
published library or the current scaffold; the pair sits in its designed place (prerequisite for the bipartite
and noncrossing pages); the drift verdict is no-drift. One non-blocking declaration gap was recorded with a
recommended scaffold addition (the I₂(m) notation's supplier). No omitted topic within the design or its sources
was found; no enrichment or merger is recommended; no unmet prerequisite was confirmed. Owner action: none
required for scope; proceed.
