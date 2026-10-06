# Step 3b pair report — `eilenberg-watts-theorem-and-natural-transformations`

- Run `frontier-41-ha-dt-29`; role `alpha-high`; label
  `step3b-pair-eilenberg-watts-theorem-and-natural-transformations-fdb91a42613a4a3e`.
- A page `eilenberg-watts-theorem-and-natural-transformations` (order 919, batch 25,
  homological-algebra, 13 items). B page
  `eilenberg-watts-theorem-and-natural-transformations-examples` (order 920, companion, 4 items).
- Own only this pair. Preserve sibling rows in the shared batch-25 files.

## Entry state and inputs

- At entry, none of the 17 item files `items/<id>.md` exists, and neither page file
  `library/homological-algebra/<page>.md` exists. The binding scaffold is
  `research/frontier-41-ha-dt-29-batch-25.pages.json` (13 A + 4 B items with statements,
  `deps`, `dependency_level`, `justified_by`, provenance, sources and proof strategies);
  coverage is `research/frontier-41-ha-dt-29-batch-25.coverage.json` (25 rows / 4 sources);
  cross-batch input is `[]`.
- Read at entry: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, the batch-25 manifest/coverage/notes,
  the design `research/plan-homological-algebra-track.md` (HA-25–HA-29 conventions
  L5405–5483, HA-25 P1–P4 L5484–5579, B1 L6144–6163, source table + binding inventory
  L6234–6330), `research/eilenberg-watts-expansion/{proposed-items.json,integration.json,
  source-manifest.json}`, the Step 3a scope review
  `research/frontier-41-ha-dt-29-step3a-review-eilenberg-watts-theorem-and-natural-transformations.json`
  and its report, the owner authoring direction, the 17 `step1-<item>.json` readiness
  records, and the cited published suppliers.
- Scope decision: closed `sufficient` for page 919 at
  `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope`
  (30/30 pairs closed, work 0). `dependency_level` labels in the manifest are the authoring
  order below (max 4); recomputed by `node tools/item-dependency-levels.mjs check --run
  frontier-41-ha-dt-29` before handoff.
- Direct in-run prerequisite pairs to inspect: none (page `requires` lists only published
  pages; the consumer edges from batches 26–29 are not suppliers of this pair).

## Owned IDs in authoring order

Level 0: `def-additive-cocontinuous-module-functor`,
`lem-evaluation-on-the-regular-module-has-a-commuting-right-action`,
`lem-tensor-hom-adjunction-for-bimodules`,
`lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`.
Level 1: `lem-additive-cocontinuous-module-functors-form-a-category`,
`lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`,
`lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural`.
Level 2: `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`,
`thm-natural-transformations-of-tensor-functors-are-bimodule-maps`.
Level 3: `thm-eilenberg-watts-for-arbitrary-unital-rings`,
`ex-natural-transformations-between-tensor-composites`. Level 4:
`cor-cocontinuous-additive-module-functors-admit-right-adjoints`,
`cor-eilenberg-watts-is-an-equivalence-of-hom-categories`,
`cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules`,
`cex-coproduct-preserving-left-exact-module-functor-is-not-tensor`,
`cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor`,
`ex-eilenberg-watts-recovers-extension-of-scalars`.

## Open obligations at entry

1. Author all 17 item files and both page files from the binding scaffold, preserving every
   promised claim and the arbitrary-unital-ring, left-module, no-commutativity conventions.
2. Audit each scaffold: hypotheses, sources, direct suppliers, proof route; repair local gaps
   in the manifest only where the scaffold is defective, recording the change.
3. Write the batch-25 proof contracts (per-step claims/inputs, exact citation excerpts, all
   eight boundary cases) into `research/frontier-41-ha-dt-29-batch-25.proof-contracts.json`.
4. Run explicit-path precheck + rendering, `proof-layout`, content policy, strict proof
   contracts, dependency-level checks, `validate-plan`, coverage, and source gates; keep the
   missing-item decisions out of the receipts until authoring and checks are complete.
5. Record Step-3b item decisions (`accept`/`repaired`, confidence 1, examined dependencies) for
   all 17 original scaffold IDs; escalate any unfinished supplier or unresolved obligation
   rather than marking it complete.
6. Report handoff: completed IDs, checks actually run, added suppliers (expected: none; the
   two local suppliers are original scaffold IDs), published concerns, open obligations.

## Checkpoint log

(appended per item as authoring proceeds; each entry records claim/conventions, source
locators, dependencies, decisions, checks, open gaps, next action)

### Checkpoint — items at level 0 (1/4)

- `def-additive-cocontinuous-module-functor` (definition, level 0). Claim/conventions: additive
  + preserves every small colimit; equivalent reformulation "right exact and preserves arbitrary
  direct sums"; the restricted functor category is locally small by the `justified_by` lemma;
  no commutativity, no choice. Suppliers read: `def-additive-functor`,
  `def-preservation-reflection-creation-continuity-and-cocontinuity`, `def-functor-category`,
  `def-left-exact-and-right-exact-functor`, `def-left-and-right-modules`,
  `rem-category-theory-class-and-size-conventions`. Decision: authored as-is; no scaffold
  defect. Checks: `rendercheck` OK. Next: its `justified_by` lemma at level 1.
- `lem-evaluation-on-the-regular-module-has-a-commuting-right-action` (lemma, level 0).
  Claim: `ma:=F(r_a)(m)` makes `F(A)` a `(B,A)`-bimodule for additive `F`. Read
  `def-bimodule`, `def-functor-and-contravariant-functor`, plus the level-0 definition's
  suppliers. Verified independently: `r_{aa'}=r_{a'}∘r_a`, `r_{a+a'}=r_a+r_{a'}`, functoriality
  and additivity of `F`, `B`-linearity of each `F(r_a)`; the five right-module laws all follow.
  No scaffold defect. Checks: `precheck` PASS (direct), `proof-layout` 0 defects.
- `lem-tensor-hom-adjunction-for-bimodules` (lemma, level 0). Claim: left `A`-action
  `(aφ)(m)=φ(ma)` on `Hom_B(M,Y)`; currying `Θ` a natural bijection; unit
  `η_X(x)(m)=m⊗x`, counit `ε_Y(m⊗φ)=φ(m)`, triangle identities, `T_M ⊣ Hom_B(M,-)`.
  Scaffold repair: added `def-balanced-and-bilinear-maps` and
  `def-adjunction-by-unit-counit-and-triangle-identities` to the item and manifest `deps` (the
  promised "left adjoint" clause needs the unit-counit data and balance is cited by the
  universal property used for the inverse map). Read `thm-universal-property-of-module-tensor-products`,
  `thm-bimodule-actions-induced-on-tensor-products`, `def-hom-groups-and-induced-hom-maps`,
  `prop-functoriality-of-module-tensor-products`. Verified independently: balance
  `u(ma,x)=u(m,ax)`, `B`-linearity of `Ψ(φ)`, both triangle identities on generators. Checks:
  `precheck` PASS, `proof-layout` 0 defects, `manifest-deps` 17/0/0.

### Checkpoint — level 0 complete (4/4)

- `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums` (lemma,
  level 0). Claim: `T_M=M⊗_A−` is additive, cokernel-preserving/right exact on sequences,
  preserves arbitrary direct sums including the empty one, and is `B`-linear on `B`-modules when
  `M` is a `(B,A)`-bimodule; no commutativity, no choice. Suppliers read:
  `thm-universal-property-of-module-tensor-products`, `prop-functoriality-of-module-tensor-products`,
  `def-tensor-product-of-modules-by-generators-and-relations`, `def-direct-sum-of-a-family-of-modules`,
  `thm-universal-property-of-module-direct-sums`, `def-exact-and-short-exact-sequences-of-modules`,
  `def-module-homomorphism-kernel-image-and-cokernel`, `thm-bimodule-actions-induced-on-tensor-products`,
  `def-bimodule`.
  Scaffold repair: dropped `def-quotient-group` from the proof route — the cokernel step is proved
  directly by the universal property of the tensor product (well-defined `c(m,z)=v(m⊗y)` for a
  lift `y`, balanced, induced `w`, both identities), which proves exactly the cokernel universal
  property without building `(M⊗Y)/im(1⊗f)`. Manifest/e item deps must be aligned (done at the
  manifest pass). Verified independently: surjectivity of `1⊗g`; `(1⊗g)(1⊗f)=0`; the lifting and
  uniqueness; the two inverse identities for `Φ,Ψ`; `M⊗_A0=0` for `I=∅`; `B`-linearity of every
  displayed map. Checks: `precheck` PASS, `proof-layout` 0 defects.

### Checkpoint — level 1 complete (3/3)

- `lem-additive-cocontinuous-module-functors-form-a-category` (level 1). Claim: the additive
  cocontinuous functors with all natural transformations form a locally small category; the map
  `η↦η_A` is injective and the free-cover argument determines every component from `η_A`.
  Scaffold repair: added `lem-vertical-composition-of-natural-transformations-is-natural`,
  `def-left-exact-and-right-exact-functor`, `thm-modules-over-a-ring-form-an-abelian-category`
  to item and manifest deps (the scaffold's own route needs right-exactness of a cocontinuous
  functor and epimorphism preservation via the published theorem). `q_X` is shown epic inline
  from surjectivity; `F(q_X)` epic via right exactness. Checks: `precheck` PASS, `proof-layout`
  0 defects.
- `lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`
  (level 1). Claim: cocontinuous ⟺ cokernels + arbitrary direct sums ⟺ right exact + arbitrary
  coproducts. Read `thm-small-colimits-from-coproducts-and-coequalizers`,
  `thm-rmod-is-complete-and-cocomplete`,
  `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference`,
  `thm-an-additive-functor-preserves-finite-biproducts`. No scaffold defect. Checks: `precheck`
  PASS, `proof-layout` 0 defects.
- `lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural` (level 1). Claim:
  `β_X(m,x)=F(ℓ_x)(m)` is balanced and `B`-linear in `m`, inducing `τ_X(m⊗x)=F(ℓ_x)(m)`;
  `τ` is natural without choosing a presentation. Verified balance
  `F(ℓ_x)(F(r_a)(m))=F(ℓ_{ax})(m)`, `B`-linearity on generators, naturality
  `F(u)F(ℓ_x)=F(ℓ_{u(x)})`. No scaffold defect. Checks: `precheck` PASS, `proof-layout`
  0 defects.

### Checkpoint — level 2 complete (2/2)

- `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` (level 2). Claim: for
  additive right exact coproduct-preserving `F`, the canonical `τ` is a natural isomorphism;
  proof by `τ_A=ρ_M` (unit iso), coproducts of isomorphisms at free modules, and cokernel
  universality on the canonical presentation `A^{(K_X)}→A^{(X)}→X→0` (first map possibly
  non-monic). Scaffold repair: added five examined suppliers to item and manifest deps
  (`lem-evaluation-…`, `def-kernels-and-cokernels-as-equalizers-and-coequalizers`,
  `def-direct-sum-…`, `thm-universal-property-of-module-direct-sums`,
  `prop-functoriality-…`) because the scaffold's route uses the cokernel universal property and
  coproduct comparisons. Checks: `precheck` PASS, `proof-layout` 0 defects.
- `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` (level 2). Claim: the
  bijection `Nat(T_M,T_{M'}) ≅ Hom_{B-A}(M,M')` with `η_X=f⊗1_X`, compatible with addition,
  identities and vertical composition. Scaffold repair: the displayed formula
  `f=ρ_{M'}^{-1}∘η_A∘ρ_M` does not type-check against the cited unit isomorphisms
  `ρ_N:N⊗_AA→N`; the authored statement uses
  `f=ρ_{M'}∘η_A∘ρ_M^{-1}`, `f(m)=ρ_{M'}(η_A(m⊗1))`. Also dropped the unused comparison-lemma
  dep and added `thm-bimodule-actions-induced-on-tensor-products` and
  `def-vertical-composition-of-natural-transformations`. Verified: `f(ma)=f(m)a`,
  `η_X=f⊗1_X` from naturality at `ℓ_x`, both inverse directions, and the three compatibilities.
  Checks: `precheck` PASS, `proof-layout` 0 defects.

### Checkpoint — level 3 complete (2/2)

- `thm-eilenberg-watts-for-arbitrary-unital-rings` (level 3). Claim: (i) `M↦T_M` lands in
  additive cocontinuous functors and is functorial; (ii) every additive cocontinuous `F` is
  naturally isomorphic to `T_{F(A)}`; quasi-inverse `F↦F(A)`. Scaffold repair: added the five
  used suppliers (`lem-evaluation-…`, `lem-tensoring-…`, `thm-natural-transformations-…`,
  `thm-unit-isomorphisms-…`) to item and manifest deps; the proof route stays
  P3: cocontinuity ⟺ right exact + coproducts, then the free-presentation lemma. Checks:
  `precheck` PASS, `proof-layout` 0 defects.
- `ex-natural-transformations-between-tensor-composites` (level 3, B page). Claim: `T_N∘T_M` is
  identified with `T_{N⊗_BM}` by associativity; transformations between composites biject with
  all `(C,A)`-bimodule maps of kernels; pairs `(g,f)` give `(g⊗f)⊗1_X`; some bimodule map is not
  of that form. Scaffold repair: the witness is proved with the dot-product functional
  `β(m,n)=m₁n₁+m₂n₂` on `k²⊗_kk²` (not of the form `g⊗f` by an explicit four-equation
  contradiction) instead of the unscaffolded matrix/trace identification, preserving the
  promised claim; added the exact suppliers used (unit iso, tensor universal property, balanced
  maps, direct sums, naturality/vertical composition) to item and manifest deps. Checks:
  `precheck` PASS, `proof-layout` 0 defects.

### Checkpoint — level 4 A-page corollaries (3/3)

- `cor-cocontinuous-additive-module-functors-admit-right-adjoints`: transfer of the unit and
  counit of `T_M ⊣ Hom_B(M,−)` along `F ≅ T_{F(A)}` by whiskering; both triangle identities
  verified componentwise; `cor-left-adjoints-preserve-colimits` added as dep. Checks:
  `precheck` PASS, `proof-layout` 0 defects.
- `cor-eilenberg-watts-is-an-equivalence-of-hom-categories`: `Φ: M↦T_M` is a functor by the
  transformation theorem, full and faithful by the bijection, split essentially surjective by
  EW(ii) with data `F↦F(A)`; equivalence via
  `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`;
  naturality in both variables and the iso-class statement verified. Added
  `def-full-faithful-and-essentially-surjective-functor`,
  `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`,
  `def-natural-isomorphism` to deps. Checks: `precheck` PASS, `proof-layout` 0 defects.
- `cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules`: exactness transported
  across the forgetful functor `B-Mod→Ab` using `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences`
  and the fact that kernels/cokernels of module maps are the underlying abelian-group ones; the
  iso-class bijection uses the EW equivalence corollary. Added the examined suppliers to deps;
  no left-projectivity claim. Checks: `precheck` PASS, `proof-layout` 0 defects.

### Checkpoint — level 4 B-page items (3/3)

- `cex-coproduct-preserving-left-exact-module-functor-is-not-tensor` (B page, level 4). Statement
  refuted: "every additive module functor that is left exact and preserves coproducts is naturally
  isomorphic to a tensor functor". Witness `F = Hom_Z(Z/2,−)`: additive (1.1, postcomposition is a
  homomorphism); preserves arbitrary direct sums (1.2: injective since distinct components differ
  on `[1]` in distinct coordinates, surjective since `φ([1])` has finite support and `2x=0`); left
  exact by Hom-left-exactness (1.3); not right exact (1.4: `Z → Z/2` is surjective but
  `F(u): 0 → Hom(Z/2,Z/2)` is not epic), hence not tensor since tensor functors are right exact and
  right exactness transfers across a natural isomorphism (2.1). Choice-free (finite supports are
  determined by the elements, no selection). deps: `thm-eilenberg-watts-for-arbitrary-unital-rings`,
  `thm-hom-functors-are-left-exact`, `def-left-exact-and-right-exact-functor`,
  `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms`,
  `thm-abelian-groups-form-an-abelian-category`, `prop-abelian-groups-are-z-modules`,
  `def-hom-groups-and-induced-hom-maps`, `def-direct-sum-of-a-family-of-modules`,
  `thm-universal-property-of-module-direct-sums`, `def-integers-modulo-n`,
  `def-addition-and-multiplication-modulo-n`. Sources: none (direct proof; provenance
  ai-generated). Checks: `precheck` PASS, `proof-layout` 0 defects.
- `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor` (B page, level 4).
  Statement refuted: "every additive right exact module functor is naturally isomorphic to a tensor
  functor; in particular the coproduct-preservation hypothesis can be dropped". Witness over a
  field `k`: `F(V)=∏_{n≥0}V`; additive (1.1, coordinatewise); left exact (1.2, kernels computed
  coordinatewise); right exact under AC (2.1); the coproduct comparison
  `c: ⊕_j F(k) → F(⊕_j k)` is not surjective, witnessed by the diagonal element `(e_n)`
  (1.3, 2.2); hence `F` is not naturally isomorphic to any tensor functor (3.2, naturality
  transfers the comparison and `T_N` preserves coproducts). Choice: declared in deps via
  `def-axiom-of-choice` and used exactly once, for the countable coordinatewise lifting in step 2.1
  (choosing one preimage in each of countably many fibres); the rest of the argument is
  choice-free. deps: `thm-eilenberg-watts-for-arbitrary-unital-rings`, `def-axiom-of-choice`,
  `def-direct-sum-of-a-family-of-modules`, `thm-universal-property-of-module-direct-sums`,
  `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences`,
  `def-exact-and-short-exact-sequences-of-modules`,
  `thm-modules-over-a-ring-form-an-abelian-category`, `def-left-and-right-modules`. Sources: none
  (direct proof; provenance ai-generated). Checks: `precheck` PASS, `proof-layout` 0 defects.
- `ex-eilenberg-watts-recovers-extension-of-scalars` (B page, level 4). Claim: for a unital
  homomorphism `f: R→S` of commutative rings, `T_S = S⊗_R −` is exactly extension of scalars; it is
  additive and cocontinuous (left adjoint to restriction, or directly by the theorem); and its
  Eilenberg-Watts kernel is `T_S(R) = S⊗_R R ≅ S` with right action `s·r = sf(r)` (computed via
  the evaluation lemma and the tensor unit isomorphism `ρ_S`). Caveat recorded in the item: the
  published `def-restriction-and-extension-of-scalars` states extension of scalars only for
  commutative rings, so only that case is claimed. No choice. Statement literature-derived
  (Kamensky, *Non-Commutative Algebra* §5.1 Thm 5.1.43, Prop 5.1.40, Lem 5.1.46, Cors 5.1.48–49;
  Nyman–Smith, arXiv:0806.0832 Thm 1.1–1.2, Props 3.2–3.3, Lem 3.4), proof ai-altered. Checks:
  `precheck` PASS, `proof-layout` 0 defects.

Both pages are written: `library/homological-algebra/eilenberg-watts-theorem-and-natural-transformations.md`
(A, `status: draft`, 13 items, prose summary) and
`library/homological-algebra/eilenberg-watts-theorem-and-natural-transformations-examples.md`
(B, `status: draft`, 4 examples, prose summary).

## Handoff

### Completed IDs (17/17, authored, checked, decided)

A page (13): `def-additive-cocontinuous-module-functor`,
`lem-evaluation-on-the-regular-module-has-a-commuting-right-action`,
`lem-tensor-hom-adjunction-for-bimodules`,
`lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`,
`lem-additive-cocontinuous-module-functors-form-a-category`,
`lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`,
`lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural`,
`lem-canonical-free-presentation-controls-eilenberg-watts-comparison`,
`thm-natural-transformations-of-tensor-functors-are-bimodule-maps`,
`thm-eilenberg-watts-for-arbitrary-unital-rings`,
`cor-eilenberg-watts-is-an-equivalence-of-hom-categories`,
`cor-cocontinuous-additive-module-functors-admit-right-adjoints`,
`cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules`.
B page (4): `ex-natural-transformations-between-tensor-composites`,
`ex-eilenberg-watts-recovers-extension-of-scalars`,
`cex-coproduct-preserving-left-exact-module-functor-is-not-tensor`,
`cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor`.

Registration: item files `items/<id>.md` (frontmatter deps = manifest deps); pages; manifest
`research/frontier-41-ha-dt-29-batch-25.pages.json` (deps synced from item frontmatter,
`dependency_level` recomputed); contracts
`research/frontier-41-ha-dt-29-batch-25.proof-contracts.json` (17 items, per-step claims/inputs,
citation excerpts, boundary worksheets); coverage
`research/frontier-41-ha-dt-29-batch-25.coverage.json` (unchanged schema, destinations filled,
0 errors); 17 item decisions recorded via `tools/step3-decisions.mjs record-item` (`accept` 3,
`repaired` 14: the `accept`s are `def-additive-cocontinuous-module-functor`,
`lem-evaluation-on-the-regular-module-has-a-commuting-right-action` and
`ex-eilenberg-watts-recovers-extension-of-scalars`; confidence 1; examined dependency IDs recorded;
no `--owner` flag, no judge/audit stamps). Cross-batch input
`research/frontier-41-ha-dt-29-batch-25.cross-batch-dependencies.json` is `[]`, valid because this
pair declares no cross-batch dependencies (all its suppliers are published library items).

### Checks actually run (fresh at handoff)

- `node tools/proof-layout.mjs` over the 17 changed item paths in one batched command:
  `17 items, 94 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the same 17 explicit paths:
  `16 checked, 0 failing` (the definition has no proof block), all `PASS (direct)`.
- `node tools/rendercheck.mjs` over the 17 items + 2 pages: OK — no wikilink in math, no nested or
  unbalanced delimiters, no multiline display, every math span parses under KaTeX, every
  frontmatter block parses.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-25.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-25.pages.json`:
  `17 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-25.pages.json`:
  `17 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`: run-wide exit 1 with 52
  `dependency-level` errors, none of them on any of this pair's 17 IDs (verified by per-ID scan);
  item metadata and manifest levels agree for all 17.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0.
- `node tools/citation-fidelity.mjs research/frontier-41-ha-dt-29-batch-25.proof-contracts.json
  --fail-on-missing-quote`: 138 citations over 17 items; no missing quote; no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-41-ha-dt-29-batch-25.proof-contracts.json
  --fail-on-contradicted --fail-on-template`: 136 rows (54 `not_applicable`); no template reuse at
  or above 3; no contradicted dispositions.
- `node tools/risk-report.mjs research/frontier-41-ha-dt-29-batch-25.proof-contracts.json`:
  `0 error(s), 17 item(s) routed`.
- `node tools/finite-smoke.mjs research/frontier-41-ha-dt-29-batch-25.proof-contracts.json`:
  `0 error(s), 0 check(s) over 0/17 item(s) carrying obligations` — vacuous for this batch (no item
  carries a finite-smoke obligation); recorded as vacuity, not as a pass claim.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-25.coverage.json
  --require-destination`: `1 page(s), 25 harvested result(s), 0 error(s), 1 warning(s)`; the warning
  is the pre-existing advisory that 4/25 harvested results were scaffolded (Step 3a declines, for
  the owner to confirm with Alpha).
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-25.coverage.json`:
  `4/4 source(s) fetch-verified`, `4/4 resolved` (0 documented drops).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`: run-wide open
  (716 work rows belonging to other pairs); all 17 of this pair's items are closed, confirmed
  directly through the tool API (`17/17 known in run, 0 open`). A page scope decision is `sufficient`.
- `node tools/depcheck.mjs`: run-wide FAIL; no line of the report references any of this pair's 17
  items (verified by per-ID scan). Findings shown belong to other pairs.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`: **blocked**
  (exit 1) by another batch's input —
  `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json` uses statuses `available`
  (7 rows: rows 5, 8, 14, 15, 16, 18, 19) and `reconciled` (1 row: row 6), neither of which is in
  the tool's allowed `open|verified|removed`; the refresh aborts with "invalid review or consumer
  ownership". This is outside this pair; remedy is the batch-19 owner rewriting those statuses
  (with evidence) and re-running the refresh. The unified ledger on disk (`...cross-batch-dependencies.json`,
  written 2026-10-06 01:34:33 +1100, after this pair's last manifest edit 01:31) already reflects
  this pair's 29 consumer edges from batches 26–29.

### Added suppliers

None. All 17 IDs are original scaffold IDs in the immutable pre-authoring inventory
(`research/frontier-41-ha-dt-29-step3-auditor-baseline.json`, 17/17 present, 0 in
`existing_item_files`), so every item took an ordinary current item decision and no
auditor-created additions required engine certification. The two local supplier items authored for
the pair — `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`
and `lem-tensor-hom-adjunction-for-bimodules` — are original scaffold IDs placed before their
consumers.

### Post-repair level/order notes (for Step 4)

After the dependency repairs the computed `dependency_level`s changed for three items relative to
the dispatch's pre-authoring listing: `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`
2→0, `ex-natural-transformations-between-tensor-composites` 3→1,
`cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules` 4→5. Item metadata and the
manifest carry the recomputed values, consistent with `item-dependency-levels` (no discrepancy for
any of the 17); authoring itself followed the dispatch order. This is reported as a pre-splice plan
mismatch for Step 4 rather than hidden.

### Published concerns and cross-pair findings (report only; no sibling edits)

1. `def-restriction-and-extension-of-scalars` is stated only for commutative rings; the
   extension-of-scalars example records this caveat and claims nothing beyond it. Confidence: high
   (read the published definition). Remedy: none needed for this pair; an arbitrary-ring version
   would need an owner decision on the published item.
2. Choice: exactly one item uses AC — `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor`
   — declared via `def-axiom-of-choice` and used exactly at step 2.1 (countable coordinatewise
   lifting). The other 16 items are choice-free.
3. Batch-29 rows still `open` on consumer sides (their writers own them; my suppliers are complete):
   `lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent` →
   `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`, and
   `lem-homogeneous-free-presentations-prove-the-graded-comparison` →
   `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`. These need the batch-29
   owner's re-verification (or removal with evidence) before the Step-3 final gate and Step-8 join.
4. Run-wide blockers unrelated to this pair, listed for the owner/Step-8 lead: the batch-19 ledger
   input defect above; 52 run-wide `dependency-level` errors in other pairs; `depcheck` FAIL from
   other pairs (including a cycle among Morse-theory pages and a `justified_by` mismatch in
   handle-theory items); `step3-decisions` final phase open for other pairs; the coverage-low-yield
   advisory on this page (pre-existing Step 3a declines).

### Open obligations / escalations

None inside the pair: all 17 items authored, all gates above run and green for this pair, all
decisions recorded with confidence 1 and examined dependency IDs. The only outstanding items
touching this pair are outside it: batch 29's two consumer-side rows (above) and the run-wide ledger
refresh blocked by batch 19's invalid input file. No owner-held decision was overridden and no
escalation was created.
