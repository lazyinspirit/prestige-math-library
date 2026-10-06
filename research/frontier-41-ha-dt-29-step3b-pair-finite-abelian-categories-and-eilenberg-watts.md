# Step 3b dispatch report — pair `finite-abelian-categories-and-eilenberg-watts`

Run `frontier-41-ha-dt-29`; batch 27 (this batch contains exactly this pair, so
there are no sibling rows in the shared batch files to preserve). Role
`alpha-high`; current dispatch
`step3b-pair-finite-abelian-categories-and-eilenberg-watts-1db3909b8b2b11e9`,
continuing dispatches `…-cd388b91b8406c41` and `…-d5d46def4efcc1eb`. A page
`finite-abelian-categories-and-eilenberg-watts` (order 923), B page
`finite-abelian-categories-and-eilenberg-watts-examples` (order 924). This
dispatch owns only this pair.

Binding design: `research/plan-homological-algebra-track.md` HA-25–HA-29
conventions (L5405–5466), HA-27 P8 (L5750–5803), P9 (L5804–5859), witnesses B3
(L6181–6194), binding inventory (L6334–6354); `research/eilenberg-watts-expansion/proposed-items.json`.
Owner authoring direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
fixes the HA-25–HA-29 statements to the plan and requires normal authoring and
proof review. Step-3a scope receipt
`research/frontier-41-ha-dt-29-step3a-review-finite-abelian-categories-and-eilenberg-watts.json`
is current (`sufficient`; `step3-decisions check --phase scope` shows the pair
closed, no work row).

## Entry state of dispatch 1db3909b8b2b11e9 (recorded at start)

- All fifteen item files and both page files already existed on disk, written by
  the two earlier dispatches of this pair; the batch-27 manifest carried their
  updated dependency lists (item file and manifest deps matched exactly, 240
  declared slots).
- **No item decisions had been recorded** (`step3-decisions check --phase final`
  listed all fifteen as "current item audit required").
- **The batch proof-contract file `research/frontier-41-ha-dt-29-batch-27.proof-contracts.json`
  did not exist** — this was the artifact the engine reported missing for the
  pair.
- The report file existed but stopped at level 2 with `(filled at handoff)`
  placeholders.
- All fifteen IDs are original scaffold IDs (present in
  `research/frontier-41-ha-dt-29-step3-auditor-baseline.json` `items`), so each
  required an ordinary Step 3b item decision; the auditor-created certification
  route does not apply to any of them.

## Owned IDs, decisions and checkpoints

Order is the dispatch's dependency-level order (level, page order, item id).

| level | item | decision | checkpoint |
|---|---|---|---|
| 0 | `def-superfluous-subobject-and-projective-cover-in-an-abelian-category` | accept | General superfluous-subobject / essential-epimorphism / projective-cover definition; module-agreement clause checked against the published module notion `def-essential-epimorphism-and-projective-cover`; no existence or choice asserted; no numbered steps (precheck n/a). Sources: EGNO §1.8, Webb Ch. 7. |
| 0 | `lem-finite-module-duality-is-exact-with-commuting-bimodule-actions` | accept | Five-layer proof: right A-action and A^op-linearity (1.1–1.3, 2.3), double dual as natural isomorphism using finite bases (2.4, 3.3), exactness by rank–nullity with i* surjectivity by finite basis extension (1.4, 3.1, 4.1), and the commuting (B,A)-bimodule case (2.1, 3.2, 4.2). deps include `def-equivalence-and-adjoint-equivalence-of-categories`, `thm-dimension-of-a-linear-subspace`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`. Claim matches the scaffold; final step 5.1 records the choice-free finite selections. |
| 1 | `lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite` | accept | B3 witness class. C is the full finite-support subcategory of ∏_n k-Mod (1.1), closed under zero, finite biproducts, kernels and cokernels (1.2–1.3), hence abelian and k-linear with finite-dimensional homs (1.4, 2.1); every object projective by a direct finite-basis lift (4.1); S_m simple and complete (4.2, 5.1); finite length by induction on total dimension (5.2); identity projective covers (5.3); no generator (5.4). Scaffold repair kept in place: the AC-dependent `prop-modules-over-a-field-are-projective-flat-and-injective` was dropped in favour of the direct lift, so "no choice" is honest. |
| 1 | `lem-projectives-covering-the-simple-objects-generate-every-finite-length-object` | accept | Induction (1.1–1.3, 2.1): base p=0 via the empty biproduct; successor lifts φ_i: Q_i↠S_i along X↠X/X_p, proves the combined map epic by the cokernel universal property (3.1), and regroups the source (4.1); the P^m clause uses the split projection of the regrouped biproduct (5.1). Reading-independence (projectivity + epicity suffice) is part of the statement and is used by the realisation theorem. |
| 1 | `prop-finite-dimensional-module-categories-are-intrinsically-finite` | accept | A-mod is closed in A-Mod under finite biproducts, kernels and cokernels and is abelian (1.1, 2.1); finite-dimensional homs (2.2); finite length with ℓ(M) ≤ dim_k M by least-dimension induction (3.1); every simple is a composition factor of the regular module via the least index j (4.1); projective covers from the published finite-dimensional cover theorem over a field, identified with the general notion (1.2); conclusion (5.1). Step 3a F2 applied (cite the cover theorem over a field). |
| 2 | `thm-intrinsic-finite-category-hypotheses-give-a-finite-projective-generator` | accept | (i) P projective by splitting epimorphisms (1.1); (ii) P separating via im(u−v), a simple quotient, double lifting and the retraction P↠Q_i (1.2); (iii) A=End(P)^op finite-dimensional unital k-algebra (1.3); (iv) C(P,−) exact and faithful (2.1); (v) every object a quotient of P^m (1.4); reading-independence and choice accounting (3.1). Supplier `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` (batch 26) is authored on disk; statement read and matched. |
| 2 | `cex-finite-length-and-finite-hom-do-not-imply-finite-category` | accept | B witness. C satisfies finite-dimensional homs and finite length and has projective covers (1.1, 2.1) yet has infinitely many simple classes (3.1), refuting the statement; ai-generated statement with `generation.role: counterexample`; nothing depends on it. |
| 3 | `thm-finite-abelian-categories-are-finite-dimensional-module-categories` | **repaired** | Realisation theorem. Forward direction: H=C(P,−) is k-linear (1.1), exact and faithful (1.2), full (2.1), essentially surjective (3.1), so H is an equivalence with A=End(P)^op (4.1). **Gap found and repaired in this dispatch:** the promised biconditional "finite ⟺ k-linearly equivalent to A-mod" had only the forward direction proved; new steps 1.3 and 2.2 transfer finite-dimensional hom-spaces, finite length, finitely many simple classes and projective covers along a k-linear equivalence, and step 5.1 closes both directions. Deps extended (item file and manifest, 26→34) with `prop-equivalences-preserve-reflect-and-create-limits-and-colimits`, `prop-fully-faithful-functors-reflect-isomorphisms`, `cor-a-morphism-in-an-abelian-category-is-monic-…-exactly-when-its-cokernel-is-zero`, `def-simple-object`, `def-subobject-and-quotient-object`, `def-superfluous-…`, `def-the-join-of-subobjects-in-an-abelian-category`, `def-initial-terminal-and-zero-object`. Claim text unchanged. |
| 3 | `thm-finite-eilenberg-watts-for-right-exact-linear-functors` | accept | (i) T_M well defined, k-linear, right exact (1.1, 2.1); (ii) balanced comparison τ_X(m⊗x)=F(ℓ_x)(m) natural (1.2), isomorphism on A and on A^r (2.2), and on every finite X by the finite-presentation cokernel argument (3.1); (iii) Nat(T_M,T_M′) ≅ Hom_{B-A}(M,M′) by the unit isomorphisms (2.3); (iv) M↦T_M an equivalence with quasi-inverse F↦F(A) (4.1). Batch-25 supplier statements read and matched; only finite-module instances used (Step 3a F3). |
| 4 | `thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels` | accept | F^d(Y)=F(Y*)* is k-linear and right exact (1.2), so finite Eilenberg–Watts gives F^d ≅ K⊗_{A^op}− with K=M* (2.1); double duality and the tensor–hom adjunction identify F(X) ≅ Hom_A(M*,X) naturally in X as left B-modules (3.1–3.2, 4.1); equivalence on hom-categories by Yoneda and bimodule duality (5.1, 6.1). Supplier reconciliation recorded below (evaluation lemma used through the same functoriality argument on the maps λ↦λ·a). |
| 5 | `cor-exact-finite-tensor-functors-have-right-projective-kernels` | accept | (2)⇒(1) projective ⇒ flat ⇒ exact (1.1); (1)⇒(2) via (M⊗_A−)* ≅ Hom_{A^op}(M,−∘*) on finite modules, splitting the finite free cover A^n↠M (1.2, 2.1); the finite-summand and finite-generation clauses (3.1); choice accounting (4.1). |
| 5 | `cor-finite-eilenberg-watts-is-a-biequivalence` | accept | Local functors are finite Eilenberg–Watts equivalences (1.1); composition and unit comparisons are the restrictions of the batch-26 pseudofunctor's associativity and unit isomorphisms and remain coherent (1.2); every target object A-mod equals Φ(A), so the restricted pseudofunctor is a biequivalence (2.1, 3.1). Batch-26 suppliers read and matched. |
| 5 | `cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint` | accept | (i) right exact ⟺ right adjoint: T_{F(A)} ⊣ Hom_B(F(A),−) and the colimit-preservation criterion (1.1, 1.2); (ii) left exact ⟺ left adjoint: M*⊗_B− ⊣ Hom_A(M*,−) and the limit-preservation criterion (1.3, 1.4); all adjoints stay inside the finite module categories (2.1). |
| 6 | `ex-dual-numbers-tensor-functor-is-right-exact-but-not-left-exact` | accept | (ε) ≅ S via a↦aε (1.1); the sequence 0→(ε)→A→S→0 does not split (2.1); T_S is right exact so S→0 S→≅ S→0 is exact (2.2–3.1) while the first comparison map is zero with nonzero source, so T_S is not left exact (4.1); no left adjoint and non-projective kernel follow (5.1); choice accounting (6.1). ai-generated example with `generation.role: example`. |
| 6 | `ex-finite-right-exact-functor-needs-no-infinite-coproduct-hypothesis` | accept | A-mod has no countable coproduct of copies of A: if X were one, Hom_A(X,S) ≅ ∏_n Hom_A(A,S) ≅ k^ℕ, contradicting finite-dimensional hom-spaces (1.2, 2.1, 3.1); T_S is nevertheless right exact with right adjoint and classified by its kernel using finite presentations (1.3, 4.1). ai-generated example with `generation.role: example`. |

Conventions fixed for the pair: fields k and finite-dimensional unital k-algebras;
left modules; A-mod = finite-dimensional left A-modules; (B,A)-bimodule M with
T_M = M⊗_A− : A-mod → B-mod; A = End_C(P)^op for P = ⊕_i Q_i; no commutativity
of A or B assumed; each item states its own choice content (all fifteen are
choice-free as written).

## Repair made in this dispatch

`thm-finite-abelian-categories-are-finite-dimensional-module-categories`. The
scaffold statement promises the biconditional "a k-linear abelian category is
finite iff it is k-linearly equivalent to A-mod for some finite-dimensional
k-algebra A", but the proof only established the forward direction; the reverse
direction (invariance of the intrinsic finiteness conditions under a k-linear
equivalence) was asserted. Added two numbered steps — now steps 1.3 and 2.2 in
the canonical layer numbering — transferring: (a) finite-dimensional hom-spaces
and finite length, via preservation/reflection of kernels, cokernels, finite
biproducts, monomorphisms/epimorphisms and isomorphisms along an equivalence, and
the induced bijection on subobjects; (b) finitely many simple classes, since the
equivalence preserves and reflects simplicity; (c) enough projectives, by
transporting the projective cover of the corresponding simple A-module and the
superfluity of its kernel (joins are images of maps out of finite biproducts).
Step 5.1 closes both directions and records the choice accounting. Deps were
updated consistently in `items/<id>.md` and in the batch-27 manifest; the
statement text, title and page promises are unchanged, so downstream batch-28
consumers are unaffected (CLAUDE §14: only a statement change would impact them).

## Supplier reconciliation (batches 25 and 26)

All previously unfinished in-run suppliers are now authored on disk and were
re-read against the consuming steps:

- `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums` → `thm-finite-eilenberg-watts-for-right-exact-linear-functors` [F1]/step 2.1 (additivity, cokernel preservation, B-linearity) — matched.
- `lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural` → same [F4]/step 1.2 (balanced B-linear pairing, naturality, no presentation chosen) — matched.
- `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` → same [F8]/step 2.3 (classification by the component at A; restriction to finite modules noted in the step) — matched.
- `lem-evaluation-on-the-regular-module-has-a-commuting-right-action` → same [F3]/step 1.2; `thm-finite-left-exact-functors-…` [F3]/step 1.1 — matched; the consumer applies the same functoriality computation to the left A-linear maps λ↦λ·a of A* (Step 3a F3, resolved).
- `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` → same [F9]/step 3.1 — used as the pattern of the cokernel argument, not applied as a statement (its coproduct hypothesis is unavailable on A-mod); the step says so.
- `lem-tensor-hom-adjunction-for-bimodules` → `thm-finite-left-exact-functors-…` [F4]; `cor-finite-one-sided-exactness-…` [F3]; `cor-exact-finite-tensor-functors-…` [F3] — matched (finite instances).
- `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` → `thm-intrinsic-finite-category-hypotheses-…` [F9]; `thm-finite-abelian-categories-…` [F4] — matched.
- `lem-tensoring-defines-a-pseudofunctor-with-interchange`, `def-morita-bicategory-of-rings-and-bimodules`, `def-bicategory-pseudofunctor-and-biequivalence` → `cor-finite-eilenberg-watts-is-a-biequivalence` [F2]–[F4] — matched.

No consumer decision was left escalated: every supplier it uses is on disk, the
consuming fact/step was reconciled against the supplier statement, and the
decision rows were recorded with confidence 1.

## Checks actually run (this dispatch; exact commands and results)

Item and page checks (paths batched in one command where the command takes a list):

- `node tools/tsx-run.mjs tools/precheck.mts items/<15 ids>` → 14 checked (the definition has no proof body), 0 failing.
- `node tools/proof-layout.mjs items/<15 ids>` → 15 items, 104 steps, 0 defects (run after the final edit).
- `node tools/rendercheck.mjs items/<15 ids> library/homological-algebra/finite-abelian-categories-and-eilenberg-watts{,-examples}.md` → 17 files OK (KaTeX, YAML, wikilinks, display math). The run-wide rendercheck reports 1 error, in `items/def-foliation-component-by-mutual-positive-transverse-accessibility.md` (another pair), not in this pair.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-27.pages.json` → 15 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-27.pages.json` → 15 items, 0 errors.
- `node tools/depcheck.mjs` → 0 errors attributable to this pair's items or pages; the run-wide failure (983 errors, all `published-unaudited`/other-pair classes) is unrelated.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` → no error for any of the 15 items; 8 errors in batch 26 (sibling pair), see Published concerns.
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (page order acyclic and consistent; the expected pre-splice note about pages with no item list applies to un-authored pairs, not this one).
- `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` → 62/62 pages, no scope drift.
- `node tools/coverage-checklist.mjs --coverage research/frontier-41-ha-dt-29-batch-27.coverage.json --require-destination` → 25 rows, 0 errors, 1 advisory `coverage-low-yield` (6/25 scaffolded; the declines were confirmed by the Step 3a review).
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-27.coverage.json` → 2/2 fetch-verified, 2/2 resolved.
- `node tools/fwdcheck.mjs`, `extcheck.mjs`, `prosecheck.mjs`, `depsource.mjs` → no finding mentioning this pair; run-wide failures come from other in-flight pairs.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` → all 15 owned items closed (no work row for the pair; 611 open rows belong to other, still-being-authored pairs).

Proof-contract checks for `research/frontier-41-ha-dt-29-batch-27.proof-contracts.json`
(created by this dispatch; 15 scope entries, 239 citation rows, 104 derivation rows,
120 boundary rows):

- `node tools/proof-contract.mjs … --strict` → 0 errors, 0 warnings, 15/15 checked.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` → 120 rows, no template reuse at ≥3, no contradicted dispositions.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → every recorded quote appears in its cited item; no widening candidates.
- `node tools/finite-smoke.mjs …` → 0 errors (no finite obligations declared for this pair).
- `node tools/risk-report.mjs …` → 15 items routed for Step 5a review (routing signal only; the theorem, EW theorem, left-exact theorem, both corollaries and the two examples score HIGH/CRITICAL and should get reader/refuter attention in Step 5).
- Merged-contract spot check (`merge-proof-contracts.mjs` of all 26 available batch contract files → temp file): none of the merged proof-contract, boundary-audit or citation-fidelity findings corresponds to any of this pair's 15 ids.

## Item decisions recorded

`node tools/step3-decisions.mjs record-item` was run once per item with
`--confidence 1`, the item's full direct dependency list as the examined
dependencies, and concrete evidence. Fourteen items: `accept`
(def-superfluous, lem-finite-module-duality, lem-finite-support-families,
lem-projectives-covering, prop-finite-dim-module-categories,
thm-intrinsic-finite-category, cex-finite-length, thm-finite-eilenberg-watts,
thm-finite-left-exact, cor-exact-finite-tensor, cor-finite-eilenberg-watts,
cor-finite-one-sided, ex-dual-numbers, ex-finite-right-exact). One item:
`repaired` (thm-finite-abelian-categories-are-finite-dimensional-module-categories,
the added transfer steps above). No `escalate` row remains for this pair. Receipts
are `research/frontier-41-ha-dt-29-step3b-review-<id>.json`.

## Added suppliers

None by this dispatch. The three traced closure items on the A page
(`def-superfluous-subobject-and-projective-cover-in-an-abelian-category`,
`lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite`,
`prop-finite-dimensional-module-categories-are-intrinsically-finite`) were
already part of the batch-27 scaffold manifest and are recorded in
`research/frontier-41-ha-dt-29-step3-auditor-baseline.json`; they therefore took
ordinary item decisions (all `accept`), not the auditor-created certification
route. No pair, page, item ID or promised claim was added, dropped or weakened.

## Published concerns (exact IDs, evidence, confidence, strategy)

1. `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`
   — statement says "finite-dimensional algebra" without naming the base field,
   while its proof uses a finite k-basis and dim_k (steps 1.1, 3.1). Confirmed
   wording defect, not a mathematical error: the field case is what its proof
   delivers and what consumers `prop-finite-dimensional-module-categories-…`,
   `lem-finite-support-families-…`-independent consumers and B witnesses need.
   Confidence high. Strategy: add "over a field k" to the published statement
   (owner action); this pair cites it over a field explicitly.
2. `def-finite-k-linear-abelian-category` — its "every simple object has a
   projective cover" clause uses a notion whose only published definition,
   `def-essential-epimorphism-and-projective-cover`, is module-scoped. Confirmed
   documentation gap (Step 3a F1). Strategy: keep `def-superfluous-subobject-and-projective-cover-in-an-abelian-category`
   as the general definition and add a cross-reference from the published
   definition (owner action, canonical-ledger note only).
3. Batch-26 sibling pair `morita-bicategories-and-projective-generators` —
   `item-dependency-levels check` reports stale `dependency_level` metadata for
   `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom` (2,
   computed 3), `thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category`
   (3, computed 4), `lem-tensoring-defines-a-pseudofunctor-with-interchange` (3,
   computed 4), `thm-eilenberg-watts-biequivalence-for-module-categories` (4,
   computed 5), `thm-morita-equivalence-is-invertibility-of-a-bimodule` (5,
   computed 6), `cor-center-is-morita-invariant-via-natural-endomorphisms` (6,
   computed 7), `ex-matrix-ring-morita-pair-with-explicit-tensor-inverses` (6,
   computed 7), `ex-central-elements-as-natural-endomorphisms-of-the-identity`
   (7, computed 8). This is in the sibling pair's write scope, so it is reported,
   not edited here. It currently fails the shared `item-dependency-levels` gate
   for the run; remedy: the sibling owner recomputes and records the level in
   both the item metadata and the batch-26 manifest. The two batch-26 suppliers
   this pair consumes are unaffected by the level metadata.
4. Run-level (not this pair): `depcheck` 983 errors (mostly `published-unaudited`
   on other pairs), `fwdcheck` 46 unresolved forward links, `rendercheck` 1
   multiline-display error, all in other in-flight pairs' files. No action here;
   recorded so the Step-4/Step-5 reconciler is not surprised.

No defect was found in any of this pair's own claims or proofs beyond the
repaired gap in item 8 above; no claim was weakened to avoid work.

## Pre-splice expectation for Step 4

`research/plan-spec.json` entries 923/924 still carry `items: []`; the manifest
ids are inserted by the Step 4 splice. This is the expected pre-splice state, not
a mismatch: the batch-27 manifest, the two library page files and the fifteen
item files agree on the inventory and reading order (`validate-plan` and
`manifest-integrity` pass). The A page's `requires` edge to
`morita-bicategories-and-projective-generators` remains declared; the sibling
pair is not yet gated closed, so the page-level edge should be re-checked at the
Step 3 gate when both pairs' writers drain.

**Shared plan/prose amendments for Step 4: none.** No plan passage, manifest
`requires` list, category page or pathway file was changed by this dispatch; the
only shared-file edit is the dependency list of
`thm-finite-abelian-categories-are-finite-dimensional-module-categories` inside
the batch-27 manifest, kept identical to its item file. The pair's pages carry
authored summary prose and reading order (A page: definition and duality, then
the finite categorical machinery, then the functor classification; B page: the
three witnesses in the manifest's order); Step 4 needs no prose change for this
pair.

## Open obligations and escalations

- None outstanding for this pair's items or pages: all fifteen decisions are
  `accept`/`repaired` with confidence 1 and current hashes, the proof contract is
  on disk and strict-clean, and no supplier remains unfinished or unreconciled.
- Escalated to the owner/sibling scope (not resolvable within this pair's write
  scope): the eight batch-26 `dependency_level` rows in Published concern 3; the
  published wording/cross-reference items in Published concerns 1 and 2.
- Step 5a should prioritize the five HIGH/CRITICAL-routed items named in the
  risk-report line above; their proofs were authored here and have not yet had an
  independent read.
