# Step 3b authoring report — `graded-eilenberg-watts-and-shift-coherence` / `…-examples`

- Run: `frontier-41-ha-dt-29` (batch 29, orders 927/928, category `homological-algebra`).
- Role: alpha-high, dispatch `step3b-pair-graded-eilenberg-watts-and-shift-coherence-0b451d131b38fe07`.
- Scope: the A page `graded-eilenberg-watts-and-shift-coherence` (12 items) and its B companion
  `graded-eilenberg-watts-and-shift-coherence-examples` (3 items); no other pair.

## Owned IDs and open obligations (entry)

Authoring order (ascending `dependency_level`, ties by page order then ID):

| # | item | level | status at entry |
|---|---|---|---|
| 1 | `lem-graded-degreewise-direct-sums-and-homogeneous-free-covers` | 0 | unauthored |
| 2 | `rem-derived-tensor-composition-and-the-enhancement-boundary` | 0 | unauthored |
| 3 | `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` | 1 | unauthored |
| 4 | `lem-internal-shift-endofunctors-and-tensor-compatibility` | 1 | unauthored |
| 5 | `def-coherently-shift-compatible-functor-and-natural-transformation` | 2 | unauthored |
| 6 | `lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent` | 2 | unauthored |
| 7 | `lem-coherent-shift-functors-and-transformations-form-hom-categories` | 3 | unauthored |
| 8 | `lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action` | 3 | unauthored |
| 9 | `lem-homogeneous-free-presentations-prove-the-graded-comparison` | 4 | unauthored |
| 10 | `thm-graded-eilenberg-watts-with-coherent-shifts` | 5 | unauthored |
| 11 | `cor-graded-bimodule-maps-classify-shift-compatible-transformations` | 6 | unauthored |
| 12 | `cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor` (B) | 6 | unauthored |
| 13 | `ex-internal-shift-as-a-graded-eilenberg-watts-kernel` (B) | 6 | unauthored |
| 14 | `cor-graded-eilenberg-watts-respects-bicategory-coherence` | 7 | unauthored |
| 15 | `cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module` (B) | 7 | unauthored |

Open obligations carried in:

- Author all 15 item files (none exists) and place both pages in `library/homological-algebra/`
  (page files also absent at entry).
- Cross-batch suppliers `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`,
  `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`, `def-bicategory-pseudofunctor-and-biequivalence`,
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` are in-run items of batches 25/26 that are
  still unauthored; consumers must be authored and the actual uses reconciled when the suppliers land.
- Record Step 3b item decisions after authoring and checks; escalate only genuine open obligations.
- Refresh cross-batch dependency inputs, coverage and manifest registration if authoring changes anything.

## Checkpoints

(one per item, appended below as authoring proceeds)

### 1. `lem-graded-degreewise-direct-sums-and-homogeneous-free-covers` (level 0) — authored

- Claim authored: (1) degreewise direct sum is the graded coproduct in `GrMod_0(A)`, all small coproducts, agreeing with the finite biproducts of the published degreewise lemma; (2) `A{d}` free on `1_A`, unique `\ell_x`; (3) canonical homogeneous free cover `P_X`, epimorphic `q_X`, graded kernel `K_X`, exact `Free(K_X) -> P_X -> X -> 0` with non-monic first map. Local repair: the cover is indexed by the **nonzero** homogeneous elements (the zero element has no well-defined degree); the promised claim is unchanged, the manifest statement was not edited.
- Suppliers read: `def-graded-ring-module-bimodule-and-internal-shift`, `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`, `def-direct-sum-of-a-family-of-modules`, `thm-universal-property-of-module-direct-sums`, `def-free-module-on-a-set-and-standard-basis`, `thm-universal-property-of-free-modules`, `def-module-homomorphism-kernel-image-and-cokernel`, `def-abelian-category`.
- Checks: `precheck` PASS (direct) after adopting the canonical step layering; `proof-layout` 10 steps, 0 defects; `depcheck` no finding for this item.
- Open: none.

### 2. `rem-derived-tensor-composition-and-the-enhancement-boundary` (level 0) — authored

- Remark only (provenance.proof `not-applicable`): states the bounded-complex composition boundary, the internal-shift-versus-cochain-shift distinction, and the explicit non-claim about abstract triangulated functors and dg/stable enhancement.
- Checks: `precheck` 0 checked (no phase body, expected for a remark), `proof-layout` 0 steps, 0 defects.
- Open: none.

### 3. `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` (level 1) — authored

- Claim: cocontinuity ⟺ cokernels + all coproducts ⟺ right exact + coproduct preserving, for an additive functor between graded module categories.
- Dependency edge **added**: `def-additive-functor` (the proof uses `F(f+g)=Ff+Fg` and hence `F(c-d)=Fc-Fd`); the scaffold deps omitted it. Added to the item frontmatter and (at the manifest pass) to the manifest row. This is an out-of-run edge: the manifest's `dependency_level` 1 is unchanged.
- Checks: `precheck` PASS (direct), `proof-layout` 6 steps 0 defects.
- Open: none.

### 4. `lem-internal-shift-endofunctors-and-tensor-compatibility` (level 1) — authored

- Claim: (1) the internal shift is a strict autoequivalence, `{r}{s}={r+s}`, `{0}=id`, additive and `k`-linear on hom-modules; (2) preserves degreewise coproducts, kernels, images, cokernels; (3) commutes with the graded tensor product. Local sharpening: for a commutative ground ring the item states that the induced map on hom-modules is the identity of the same `k`-module and that for a field this is `k`-linearity in the published sense (the published `k`-linear vocabulary is field-based); the promised claims are unchanged and the field case is explicitly recovered via `lem-field-is-a-commutative-ring`.
- Checks: `precheck` PASS (direct), `proof-layout` 6 steps 0 defects.
- Open: none.

### 5. `def-coherently-shift-compatible-functor-and-natural-transformation` (level 2) — authored

- Definition of coherent shift data (natural isomorphisms `\theta_{X,r}` with unit and cocycle), coherent transformations (equivariance square), `Coh^0(A,B)` and `CohFun(A,B)`; `justified_by: [lem-coherent-shift-functors-and-transformations-form-hom-categories]` preserved.
- Checks: `precheck` 0 checked (definition, expected), `proof-layout` 0 steps 0 defects.
- Open: none.

### 6. `lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent` (level 2 → **repaired to 3**) — authored

- Claim: (1) `T_M = M\otimes_A-` is `k`-linear, cokernel preserving and coproduct preserving, hence right exact and cocontinuous, with no flatness; (2) the canonical `\theta^M` satisfy unit and cocycle, so `(T_M,\theta^M)` is coherently shift-compatible; (3) `f\mapsto f\otimes1` is coherent and functorial.
- Scaffold repairs (manifest row and item frontmatter): **added** `def-coherently-shift-compatible-functor-and-natural-transformation` (the statement cites the definition and the coherence conditions are part of the claim) and `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` (cited in the statement and used for the cocontinuity conclusion); **removed** the uncited `thm-unit-isomorphisms-for-module-tensor-products` (no step uses it; the unit clause of the comparison is `\theta^M_{X,0}=1`). Because the definition edge is a genuine dependency, the correct `dependency_level` is **3**, not the scaffold's 2; recorded in the item frontmatter and scheduled for the manifest edit. No other item's level changes (checked item by item: items 7–15 keep levels 3,3,4,5,6,6,6,7,7).
- Cross-batch supplier in use: `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums` (batch 25, **unauthored at the time of writing**) used in steps 2.1 and 2.2 for underlying right exactness and direct-sum preservation; see the escalation section of this report.
- Checks: `precheck` PASS (direct) after adopting the canonical step layering; `proof-layout` 8 steps 0 defects.

### 7. `lem-coherent-shift-functors-and-transformations-form-hom-categories` (level 3) — authored

- Claim: (1) identity and composite functors carry coherent data (composite comparison with cocycle, strict associativity/unitality), vertical composites of coherent transformations are coherent; (2) coherent transformations form a subgroup closed under the pointwise `k`-action, vertical composition is `k`-bilinear, the data form a strict 2-category whose hom-categories are `k`-linear, and `CohFun` is closed under composition and identities; (3) local smallness: `η ↦ η_A` is injective, so `CohFun(A,B)` is a locally small `k`-linear category. The horizontal-composition coherence calculation uses naturality of `ν` at `θ^{F'}`, coherence of `η` under `G`, naturality of `θ^G` at `η_X`, and coherence of `ν` at `F'(X)`.
- Checks: `precheck` PASS (direct), `proof-layout` 13 steps 0 defects.
- Open: none.

### 8. `lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action` (level 3) — authored

- Claim: the reconstructed right action `m·a = F(r_a)θ^{-1}_{A,d}(m)`, its unit/additivity/associativity, `B`-commutation, homogeneity, and the conclusion that `M = F(A)` is a graded `(B,A)`-bimodule.
- **Confirmed scaffold defect and repair:** the scaffold hypothesis was merely *additive*; with additive-only `F` the claimed `k`-centrality (equivalently `M` being a graded `(B,A)`-bimodule in the published sense with `η_B(t)m = mη_A(t)`) is false. Witness: `k = 𝔽_{p²}`, `σ` the Frobenius automorphism, `A = B = k` concentrated in degree 0, `F(X) = X` with scalar action `λ⋆x = σ(λ)x` and `F(u) = u`: `F` is a functor, additive, coherently shift-compatible with identity comparisons, and not `k`-linear; then `m·(λa) = λma` while `λ⋆(m·a) = σ(λ)ma` and `η_B(λ)m = σ(λ)m ≠ mλ = mη_A(λ)`. The item hypothesis is therefore written **`k`-linear (hence additive)**, matching the design P13 ("$k$-linearity gives the central ground action"); the construction and conclusions are unchanged. Recorded for Step 4/owner visibility.
- Checks: `precheck` PASS (direct) after adopting the canonical step layering; `proof-layout` 7 steps 0 defects.
- Open: none.

### 9. `lem-homogeneous-free-presentations-prove-the-graded-comparison` (level 4) — authored

- Claim: (1) existence and uniqueness of the comparison `τ_X` with its degree formula and naturality; (2) shift compatibility and the comparison matrix; (3) `τ` is an isomorphism at `A{d}`, at coproducts of shifts and at arbitrary `X` by cokernel universality (first presentation map never asserted monic).
- Cross-batch supplier in use: `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` (batch 25, **unauthored at the time of writing**), used in step 5.1 as the ungraded pattern of the cokernel-universality argument (the graded instance is proved locally); see the escalation section.
- Checks: `precheck` PASS (direct), `proof-layout` 8 steps 0 defects.
- Open: the batch-25 supplier is still unauthored; the consumer decision will be escalated unless the supplier lands before handoff.

### 10. `thm-graded-eilenberg-watts-with-coherent-shifts` (level 5) — authored

- Claim: Φ: GrBimod(B,A) → CohFun(A,B), M ↦ (T_M, θ^M), f ↦ f⊗1, is an equivalence of k-linear categories, with the four clauses (well-definedness, essential surjectivity, quasi-inverse with triangle identities, full-and-faithful `η ↦ η_A`).
- The full-and-faithful clause is proved **inside** the theorem (injectivity from item 7(3), surjectivity from item 6(3) and the unit isomorphisms) so that the theorem does not cite its own consumer `cor-graded-bimodule-maps-...`; the corollary then cites the theorem non-circularly.
- Triangle identities verified by direct computation at the level of the A-components plus injectivity: `(εΦ∘Φη)_M` has identity A-component (`τ^{(T_M)}_A(m⊗a)=m·a`), and `(Ψε∘ηΨ)_F(m)=m·1=m`.
- Checks: `precheck` PASS (direct), `proof-layout` 5 steps 0 defects.
- Open: none.

### 11. `cor-graded-bimodule-maps-classify-shift-compatible-transformations` (level 6) — authored

- Claim: `η ↦ η_A` is a k-linear bijection Nat^coh(T_M,T_M') ≅ Hom_{B-A}(M,M') with inverse `f ↦ f⊗1`; the component is automatically a degree-zero bimodule map; for `A=B=k` the coherent endomorphisms of the identity functor are exactly the scalars `k`.
- The k-case is proved by conjugation with the coherent unit isomorphism `T_k ≅ id` plus the bijection to `Hom_{k-k}(k,k) ≅ k`; the scaffold's forward pointer to `cex-unrestricted-...` was **removed** in the completion pass below (declaring it in `forward_refs` produced a genuine cycle, since that B item legitimately depends on this corollary, and the annotated claim is proved locally in step 2.2; the pointer carried no mathematical input).
- Supplier reconciliation: this consumer cites `thm-graded-eilenberg-watts-with-coherent-shifts` (authored here) and `lem-graded-tensor-functor-...` (authored here).
- Checks: `precheck` PASS (direct), `proof-layout` 4 steps 0 defects.
- Open: none.

## Completion pass (dispatch `step3b-pair-graded-eilenberg-watts-and-shift-coherence-6b153cc5cba32bf8`)

The pair was re-dispatched after the authoring run above was interrupted. State at entry of this
pass, recomputed against disk with `tools/step3-decisions.mjs check --run frontier-41-ha-dt-29
--phase final`: 11 of the 15 items carried current Step 3b decisions (items 1, 3–11 and 14; four
`repaired`, seven `accept`, all confidence 1, all hashes still valid against the current transitive
inputs); the pair scope decision was closed; four items had no current decision and were audited,
repaired where needed and decided here in ascending `dependency_level` order. All 15 item files and
both page files were already present on disk; no item or page was added or removed.

### 12. `cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor` (level 6, B) — audited, decision `repaired`

- Claim audited and verified: `F(X)=X_0` in degree 0 over `k` concentrated in degree 0 is a
  k-linear functor; `(ker u)_0=ker(u|_{X_0})` and `(coker u)_0=Y_0/u(X_0)` give preservation of
  kernels and cokernels, hence exactness and left/right exactness; `(⊕_i X_i)_0=⊕_i (X_i)_0` gives
  preservation of every coproduct; `F(k)=k` while `F(k{1})=(k{1})_0=k_{-1}=0` and
  `T_k(k{1})≅k{1}≠0` by the unit isomorphism, so `F` is not isomorphic to `T_k`, and a coherent
  comparison at `k{1}`, `r=1` would need a degree-zero isomorphism `0→k{1}`, which does not exist.
- Repair: the statement and step 3.1 conclude "exact, and in particular left and right exact", but
  the facts cited only the kernels-and-cokernels theorem and the colimit definitions; the
  definition making "exact" mean additive + left exact + right exact was missing. Added
  `def-exact-functor-between-abelian-categories` to the item frontmatter deps, to the batch-29
  manifest row, and to fact [L11] (read together with
  `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels`). Claim,
  proof route, hypotheses, provenance, and `dependency_level` 6 unchanged; the added edge is an
  out-of-run published item and cannot move the level.
- Checks: `precheck` PASS (direct); `proof-layout` 0 defects; `content-policy` batch 29 item mode
  0 errors 0 warnings; `depcheck` 0 errors, 0 warnings for this item; contract row updated (new
  exact quote for [L11] → the definition) and `proof-contract --strict` + `citation-fidelity`
  pass.
- Open: none.

### 13. `ex-internal-shift-as-a-graded-eilenberg-watts-kernel` (level 6, B) — audited, decision `repaired`

- Claim audited: parts 2–3 of `lem-graded-balanced-tensor-and-shift-isomorphisms` compose the unit
  `A⊗_A X→X` with the shift comparison `A{r}⊗_A X→(A⊗_A X){r}` to a natural degree-zero
  isomorphism `A{r}⊗_A X→X{r}` compatible with outer actions, so `T_{A{r}}≅{r}` and the bimodule
  attached to `{r}` by the classification is `T_{A{r}}(A)≅A{r}` with the canonical comparisons;
  the contrast with the cochain shift `[1]` matches the signed totalization convention and the
  published counterexample `cex-internal-and-homological-shifts-are-not-interchangeable`.
- **Confirmed defect and repair:** the scaffold claim "the shift `{r}` is the identity functor
  precisely when `r=0`" is false for the zero algebra `A=0`, which the library's conventions allow
  (`def-ring`: nothing requires `1≠0`). Over `A=0` the only graded left module is `0`
  (`m=1_A m=0·m=0`), so `GrMod_0(A)` has one object and every shift is the identity. The item now
  carries the hypothesis `1_A≠0` in the Example and in **Given**, step 1.2 proves the criterion
  with that hypothesis (trivial intersection of distinct homogeneous pieces) and records the
  excluded zero-algebra case; every other claim (k-linearity, right exactness, coproduct
  preservation, coherence, `T_{A{r}}≅{r}`, kernel `A{r}`, `[1]` distinction) is unchanged and
  remains true without the hypothesis.
- The manifest statement was deliberately **not** rewritten: a changed claim would reopen the
  closed Step 3a pair scope. The hypothesis sharpening is recorded here for Step 4 and the owner,
  exactly as the `k`-linearity sharpening of item 8 was recorded.
- Checks: `precheck` PASS (direct); `proof-layout` 0 defects; `content-policy` batch 29 item mode
  0 errors 0 warnings; `depcheck` 0 errors, 0 warnings for this item.
- Open: none.

### 15. `cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module` (level 7, B) — audited, decision `accept`

- Claim audited and verified: every scalar family `(λ_d)` gives a natural endomorphism
  `η_X(x)=λ_d x` of the identity (`x∈X_d`); the equivariance square for the identity comparisons
  reads `λ_e=λ_{e-r}` on `X=k{e-r}`, so exactly the constant families are coherent; the
  endomorphisms of the identity correspond to `Hom_{k-k}(k,k)=k` via `η↦η_k`, matching
  `cor-graded-bimodule-maps-classify-shift-compatible-transformations` through the coherent unit
  isomorphism `T_k≅id`; the family `λ_0=0`, `λ_1=1` is a nonzero natural transformation whose
  component at the regular module is `0`, the same as the zero transformation, so unrestricted
  natural transformations between graded tensor functors are not determined by their regular-module
  component and dropping the equivariance square would falsify the classification corollary.
- No defect found; no repair made.
- Checks: `precheck` PASS (direct); `proof-layout` 0 defects; `content-policy` batch 29 item mode
  0 errors 0 warnings; `depcheck` 0 errors, 0 warnings for this item.

### 2. `rem-derived-tensor-composition-and-the-enhancement-boundary` (level 0, A) — audited, decision `accept`

- Every cited supplier was read in full: the signed totalization definition
  (`d(f⊗g)=d_F(f)⊗g+(-1)^p f⊗d_G(g)`, internal degree `r+s`, "the internal ℤ-grading is
  independent of cochain degree and contributes no additional sign"), the associativity/unit/cone
  theorem (natural chain isomorphisms, pentagon and triangle on elementary tensors), and the
  inverse-complex derived-equivalence theorem (which itself records that supplied inverse data
  choose no coherent comparisons for a group action). The remark's clauses match those statements
  verbatim in hypotheses and conventions; its closing sentences are scope disclaimers (no
  classification of abstract triangulated functors or enhancements; no consumption of the
  bounded-complex page beyond the named published items). A remark owes no proof body and its
  `not-applicable` proof provenance is permitted.
- No defect found; no repair made. Checks: `precheck` 0 checked (expected); `proof-layout` 0 steps
  0 defects; `content-policy` batch 29 item mode 0 errors 0 warnings; `depcheck` 0 errors,
  0 warnings; level 0 confirmed.

### Additional gate-driven repairs to already-decided items (re-decided after the edit)

- Item 4 `lem-internal-shift-endofunctors-and-tensor-compatibility`: `rendercheck` flagged a
  three-line `$$…$$` display (coproduct/kernel/cokernel isomorphisms) as `multiline-display`. The
  formula was put on one source line (same mathematics); the item decision was re-recorded as
  `repaired` with the same dependency audit. `precheck` PASS, `proof-layout` 6 steps 0 defects,
  `rendercheck` clean for the item.
- Item 11 `cor-graded-bimodule-maps-classify-shift-compatible-transformations`: `fwdcheck`
  reported `forward-undeclared` for the statement's wikilink to the later-page B item
  `cex-unrestricted-…`; declaring it in `forward_refs` then produced a genuine cycle, because that
  B item legitimately depends on this corollary (`deps + load-bearing forward references`). The
  pointer was removed from the statement (the annotated k-case claim is proved locally in step
  2.2), the `forward_refs` line was removed, and the item decision was re-recorded as `repaired`.
  The two consumer contract rows quoting this statement (`cor-graded-eilenberg-watts-respects-
  bicategory-coherence` [L1], `cex-unrestricted-…` [L1]) were re-quoted to the current exact
  statement; `proof-contract --strict` and `citation-fidelity --fail-on-missing-quote` pass.
  `precheck` PASS, `proof-layout` 4 steps 0 defects, `fwdcheck` clean for the pair.

## Cross-batch reconciliation (6/6)

`research/frontier-41-ha-dt-29-batch-29.cross-batch-dependencies.json` carries the six declared
edges, all now `verified` (2 page `requires`, 4 item suppliers). The suppliers were authored after
the scaffold: batches 25/26 landed `lem-tensoring-with-a-right-module-is-additive-right-exact-and-
preserves-direct-sums` (additive, cokernel-preserving, arbitrary direct sums including the empty
one, B-linear for a (B,A)-bimodule — exactly what consumer steps 2.1–2.2 use),
`lem-canonical-free-presentation-controls-eilenberg-watts-comparison` (canonical comparison
isomorphism by cokernel universality over a never-monic first presentation map — exactly the
pattern consumer step 5.1 instantiates in the graded setting),
`def-bicategory-pseudofunctor-and-biequivalence` (bicategory/pseudofunctor/biequivalence axioms
with pentagon and triangle) and `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-
coherence` (the Morita data satisfy those axioms, checked on elementary tensors). The two page
`requires` were checked against the authored batch-25/26 pages. Each declared consumer use was
re-read in the consumer files and matches its supplier; no mismatch, no missing supplier, no
escalation. No new item supplier was created or added by this pair.

## Checks at handoff (this pass)

| Check | Actual result |
|---|---|
| explicit-path `precheck` (all 15 items) | exit 0 — 13 checked, 0 failing (the definition and the remark have no phase body, as expected) |
| `proof-layout` (all 15 items, one command) | exit 0 — 15 items, 88 steps, 0 defects |
| `content-policy research/frontier-41-ha-dt-29-batch-29.pages.json` | 15 scoped item(s), 0 error(s), 0 warning(s) |
| `depcheck` (whole repo, filtered to this pair) | 0 errors for the pair; 2 advisory `cited-not-in-deps` warnings (items 3 and 6, non-load-bearing forward/cross mentions; the item-11 warning is gone after the pointer repair) |
| `item-dependency-levels check --run frontier-41-ha-dt-29` | no error for any of the 15 pair items (whole-run exit 1 is other batches' unfinished manifests) |
| `validate-plan research/plan-spec.json` | exit 0 — declared order acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids |
| `fwdcheck --quiet` | no finding for this pair (whole-run exit 1 is other pairs' links to not-yet-written items) |
| `extcheck` | exit 0 — no pair item reaches a Recorded result |
| `rendercheck` | clean for all 15 pair items (whole-repo exit 1: one `multiline-display` in `def-foliation-component-by-mutual-positive-transverse-accessibility`, a draft of another pair) |
| `depsource`, `prosecheck` | exit 0; no finding for this pair |
| `merge-proof-contracts` + `proof-contract --strict` (batch-29 contracts) | 0 errors, 0 warnings, 15/15 items checked |
| `citation-fidelity --fail-on-missing-quote` | 167 quotes over 15 items; no QUOTE NOT FOUND, no widening candidate |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 120 boundary rows, 0 contradicted, 0 template clusters |
| `finite-smoke`, `risk-report` (batch-29 contracts) | 0 errors; risk-report routes 15 items for review (advisory only) |
| `step3-decisions check --run frontier-41-ha-dt-29 --phase final` | 0 work rows for this pair (pair scope closed; all 15 item decisions current) |
| `frontier-dependency-ledger refresh --run frontier-41-ha-dt-29` | **blocked by another batch**: `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer ownership` (mtime 2026-10-06 01:34, i.e. not a concurrent write). This is batch 19's input file and must be repaired by its owner; the batch-29 input is intact and its six rows validate structurally (2 page, 4 item, all `verified`) |

## Handoff

- **Completed IDs (15/15, all decisions current):** `lem-graded-degreewise-direct-sums-and-
  homogeneous-free-covers`, `rem-derived-tensor-composition-and-the-enhancement-boundary`,
  `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`,
  `lem-internal-shift-endofunctors-and-tensor-compatibility`,
  `def-coherently-shift-compatible-functor-and-natural-transformation`,
  `lem-coherent-shift-functors-and-transformations-form-hom-categories`,
  `lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent`,
  `lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action`,
  `lem-homogeneous-free-presentations-prove-the-graded-comparison`,
  `thm-graded-eilenberg-watts-with-coherent-shifts`,
  `cor-graded-bimodule-maps-classify-shift-compatible-transformations`,
  `cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor`,
  `ex-internal-shift-as-a-graded-eilenberg-watts-kernel`,
  `cor-graded-eilenberg-watts-respects-bicategory-coherence`,
  `cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module`.
  Both pages are placed in `library/homological-algebra/` with the manifest and coverage rows;
  the 15 contract rows are current in `research/frontier-41-ha-dt-29-batch-29.proof-contracts.json`.
- **Added suppliers:** none (all prerequisites were already scaffolded and have now landed).
- **Published concerns:** none found. No published item was edited and no published supplier
  statement was contradicted by a use on this pair. Two in-run items of *other pairs* are flagged
  for their owners in the checks table (the foliation `multiline-display`, and batch 19's ledger
  input row ownership); neither is this pair's content and neither was edited here.
- **Open obligations:** none within the pair. Cross-batch edges are `verified`; the four items
  whose decisions were outstanding are decided with confidence 1; the two hypothesis/pointer
  repairs and their reasons are recorded above for Step 4 (and, for the `1_A≠0` hypothesis, for
  owner visibility, since the manifest statement was intentionally left untouched to preserve the
  closed scope decision).
