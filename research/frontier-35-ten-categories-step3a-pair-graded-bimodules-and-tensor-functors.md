# Step 3a scope review — graded-bimodules-and-tensor-functors

- Run: `frontier-35-ten-categories` (batch 14), role alpha, label
  `step3a-pair-graded-bimodules-and-tensor-functors-7f44a94edbb28a47`.
- A page: `graded-bimodules-and-tensor-functors` (order 717, category
  `homological-algebra`, 9 planned items).
- B page: `graded-bimodules-and-tensor-functors-examples` (order 718, 3 planned
  items), companion pointer A↔B consistent.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-35-ten-categories-step3a-review-graded-bimodules-and-tensor-functors.json`;
  re-verify with `node tools/step3-decisions.mjs check --run
  frontier-35-ten-categories --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-35-ten-categories-batch-14.pages.json` | Current A inventory (9 items) and B inventory (3 items) with every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-35-ten-categories-batch-14.coverage.json` | Five source records with locators, row dispositions, deferral destinations and fetch stamps |
| `research/frontier-35-ten-categories-batch-14.notes.md` | Step-1 construction record: design/plan agreement, the two design proof-route corrections, dependency audit, gate results |
| `research/frontier-35-ten-categories-cross-batch-dependencies.json` and `…-batch-16/17.cross-batch-dependencies.json` | 15 recorded supplier edges from this pair into batches 16 and 17 (10 open, 5 verified), plus the two page edges |
| `research/frontier-35-ten-categories-alpha-step1-drift.md` (line 137) and `…-drift-evidence.json` | Drift verdict `no-drift` for order 717; 6 declared `requires`, 129-page transitive closure, 11 design locations |
| `research/plan-homological-algebra-track.md` §HA-18 (lines 5007–5047) | Controlling prose design: role, boundary, rows 18.1–18.9, B inventory, source control, "Forward references: NONE" |
| `research/plan-spec.json` rows 717/718 and consumer rows 719, 721, 725, 755, 759, 763, 787, 795 | Page identity/order/kind/category/companion/`requires`; empty item lists (the manifest controls item order); later consumers' named HA-18 rows |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-deferred-pairs.json`, `…-deferred-items.json`, `…-scope-ledger.json` | Binding owner direction touches batch 8 and one batch-13 item only; this pair is owed by batch 14 and is not deferred |
| Published pages listed below (6 prerequisite pages, 13 supplier items, 5 source pages) | Prerequisite and supplier availability, statuses and exact interfaces |
| Fetch-stamped extracts re-downloaded to `/tmp/f35-kleshchev.pdf`, `/tmp/f35-khovanov-seidel.pdf`, `/tmp/f35-weibel3.pdf`, `/tmp/f35-00jl.html`, `/tmp/f35-00cv.html` | Independent locator and hash/text re-verification at the bytes the coverage stamped |

## Inventory against the prose design

All 9 designed A rows are present, in design order and with the design kinds:
18.1 `def-graded-ring-module-bimodule-and-internal-shift`,
18.2 `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`,
18.3 `def-graded-balanced-tensor-product-and-homogeneous-hom`,
18.4 `lem-graded-balanced-tensor-and-shift-isomorphisms`,
18.5 `def-finitely-generated-graded-projective-module`,
18.6 `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`,
18.7 `thm-bimodule-tensor-exactness-and-projective-preservation`,
18.8 `thm-graded-bimodule-tensor-hom-adjunction`,
18.9 `prop-restriction-and-extension-of-scalars-on-graded-module-categories`.
No designed row was dropped, renamed or re-kinded; no extra A claim was added.
All 3 designed B witnesses are present in design order
(`ex-internal-shift-versus-a-change-of-degree`,
`ex-right-flat-bimodule-with-nonprojective-output`,
`ex-left-projective-bimodule-with-nonexact-tensor`), each carrying the explicit
module action and failure it is designed to exhibit. Plan rows 717/718 agree
with the manifest on id, title, order, kind, category, companion and `requires`,
and carry no competing item order; the full plan item lists are empty, as
expected at this stage.

Boundary clauses of the design are preserved in the statements:

- Internal degree is not super parity: 18.1 and 18.3 state that no Koszul sign
  enters from internal grading; signs are left to the complex-level consumers.
- The tensor–Hom item distinguishes the graded `HOM` (direct sum of homogeneous
  maps) from all ungraded maps and records the associative left A-action
  `(a·f)(m)=f(ma)`; the ungraded adjunction is stated separately.
- The exactness/projectivity theorem keeps the two hypotheses separate
  (underlying right A-flatness for exactness; finite left B-projectivity for
  preservation of finite projectives) and asserts neither implies the other;
  the B witnesses realize both failure directions.
- Shift dictionary: `M{r}_d=M_{d-r}` equals the published commutative twist
  `M(−r)`, checked in 18.1 and in the first B example.
- 18.6 is choice-free ("without an assumption of arbitrary-index choice"), and
  no pair item declares an AC dependency.

Two scaffold corrections of *design proof routes* are recorded in the batch
notes and are sound at scope level, because the named published suppliers cannot
carry the noncommutative claims: `thm-hom-tensor-adjunction-for-modules` and
`def-restriction-and-extension-of-scalars` are commutative-ring only (verified
in their statements). The manifest instead proves 18.8/18.9 locally from
`thm-universal-property-of-module-tensor-products`,
`thm-bimodule-actions-induced-on-tensor-products` and the pair's own items.
The claims are unchanged; only the route was refined by the Step-1 author.

## Source coverage assessment

`coverage-checklist … --require-destination` on the owned coverage file reports
2 pages, 31 harvested rows, 0 errors, 0 warnings; `source-fetch-check` reports
8/8 fetch-verified and 8/8 resolved. I re-downloaded the five graded-page
sources and confirmed every recorded stamp: Kleshchev `8685199608967fa7`,
746,493 bytes, 66 pp.; Khovanov–Seidel `34e747083f6229d6`, 714,553 bytes,
72 pp.; Weibel ch.3 `6caf5421d0e7d24d`, 887,853 bytes; Stacks 00JL 24,309 bytes
and 00CV 39,210 bytes of HTML. I then read the load-bearing arguments:

- Kleshchev §2.2, printed pp.6–7: `H-Mod` is the abelian category of graded
  left modules with degree-preserving morphisms; shift `M⟨m⟩_n=M_{n-m}` is
  (2.4); `Hom_H(M,N)_n=Hom_H(M⟨n⟩,N)`, `HOM=⊕_n` and (2.5) are on p.7, as is
  the Grothendieck/Cartan-pairing paragraph that the coverage defers to HA-19.
  The harvest rows and their dispositions are faithful.
- Khovanov–Seidel §2a–2c, PDF pp.9–11: graded `A_m`-modules with
  grading-preserving maps and the self-equivalence `{1}`; §2b defines
  `U_i=P_i⊗_iP` and `U_i(M)=P_i⊗_iP⊗_{A_m}M` (2.1) and asserts exactness plus
  projective preservation **for that bimodule** ("since P_i⊗_iP is right
  projective"); Theorem 2.2 and §2c complexes/homotopy/cones follow. The
  coverage correctly records the general theorem as proved locally from
  separate hypotheses and defers the special Temperley–Lieb relations and the
  bounded-complex material to the planned BG-14 page, which owns matching
  items.
- Stacks 00JL: graded ring/module definitions, degreewise short exactness,
  twist `M(n)_d=M_{n+d}`, `GrHom_n(M,N)=GrHom_0(M,N(n))`, and Lemma 10.56.1
  (positive-grading Nakayama), excluded from this page with a written reason.
- Stacks 00CV: Lemma 10.12.5 (associativity), 10.12.6–7 (bimodule outer
  actions), 10.12.8 (currying, commutative R only), Remark 10.12.11 and
  Example 10.12.12 (failure of exactness) — the recorded inline rows.
- Weibel ch.3 §3.2: Definition 3.2.1 defines left/right flatness as tensor
  exactness and records projective ⇒ flat, flat ⇏ projective; the localization
  theorem is excluded with a reason.

Non-blocking source observations: (1) the §2a bullet that the `P_i` are the
indecomposable projectives and every indecomposable projective is `P_i{k}` is
not its own harvest row on this page; that `A_m`-specific classification is
scaffolded by the in-run BG-14 page, so no item is missing from this pair.
(2) The source `GrHom_n` convention is the twist analogue of the scaffold's
`Hom_{A,d}`; the recorded dictionary `{r}=(−r)` reconciles them exactly.

## Role in the library

- Prerequisites: all six declared `requires` pages
  (`tensor-products-of-modules`, `free-modules-and-exact-sequences`,
  `abelian-categories`,
  `subobject-lattices-generators-and-the-grothendieck-axioms`,
  `rees-modules-artin-rees-and-hilbert-samuel-theory`,
  `tor-flatness-and-global-dimension`) are `status: published` with nonempty
  inventories. The Step-1 drift verdict for this page is `no-drift`.
- Declared dependencies: the pair has 12 own item ids and 13 distinct external
  dependency ids, all resolving to `status: published` items; none points at a
  B page, the deferred Set-Theory catalogue, or forward in page order. All 13
  hosting pages lie in the declared 129-page `requires` closure, so
  `validate-plan`'s `undeclared-prereq` rule is not violated. No item id
  collides with an existing `items/` file.
- In-run consumers: batch 16 `graded-quiver-algebras-and-derived-tensor-functors`
  (page edge plus 10 item edges) and batch 17
  `type-a-soergel-bimodules-and-hecke-categorification` (page edge plus the
  internal-shift edge). I checked each consuming clause — internal shift
  `M{r}_d=M_{d-r}`, degreewise exactness in `GrMod_0`, the finite
  shifted-free retract criterion, balanced tensor internal grading with the
  consumer supplying its own cochain sign, the graded associator/shift
  identities, and the separate right-flat / left-projective hypotheses — and
  every one is supplied by a scaffolded item of this pair. The consumers do
  **not** ask this pair for the KS Theorem 2.2 relations or bounded-complex
  machinery; those deferrals land on BG-14, whose manifest contains
  `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` and the
  bounded projective-model items.
- Later planned consumers, verified row by row: HA-19 (719) names 18.1, 18.2,
  18.3, 18.6, 18.8; HA-20 (721) names 18.4, 18.7; HA-22 (725) names 18.1;
  BG-18 (763) names 18.1. Each named row exists in this manifest. HA-19 is also
  the recorded destination for the deferred graded Grothendieck/Cartan rows.
- No published item depends on this pair (nothing is in `items/` yet), the pair
  is absent from the deferred-pairs/deferred-items records, and neither page is
  named in the Phase-3 published-defect ledger.

## Checks run (actual results)

| Check | Result |
|---|---|
| `coverage-checklist research/frontier-35-ten-categories-batch-14.coverage.json --require-destination` | Pass — 2 pages, 31 harvested rows, 0 errors, 0 warnings |
| `source-fetch-check --coverage research/frontier-35-ten-categories-batch-14.coverage.json` | Pass — 8/8 sources fetch-verified, 8/8 resolved |
| `validate-plan.mjs research/plan-spec.json` | OK — acyclic declared order, no item cycles, forward references, B-page dependencies or unresolved ids (pre-existing `redundant-prereq` warnings concern other pages) |
| `manifest-integrity --run frontier-35-ten-categories` | 52/52 owed pages in the manifests, no scope drift |
| Dependency-resolution scan over the pair's deps | 0 missing, 13 published external suppliers, 0 id collisions with `items/` |

## Uncertainty and what this review does not decide

- Scope only. Statement-level correctness and every proof route — in particular
  the locally proved graded tensor–Hom adjunction and restriction/extension
  items, and the general flatness/projectivity theorem — remain for the Step-3b
  author and Step 5.
- I verified the interfaces of the load-bearing published suppliers, not the
  proofs of the pair's ~300-item published transitive closure.
- Judgement call, stated honestly: three B witnesses are the design's full B
  inventory, and they cover the shift dictionary and both independence
  directions of 18.7; I do not regard a larger examples page as required.
- Legitimacy of the deferred rows (Kleshchev Cartan pairing; KS Theorem 2.2)
  rests on their destination pages `grothendieck-groups-and-graded-cartan-pairings`
  and `graded-quiver-algebras-and-derived-tensor-functors` remaining planned.
  If the owner later defers either destination, the deferred material needs
  re-homing (this is an owner-level decision, not a defect of this pair).

Verdict: the planned definitions, results and examples cover the intended
subject of HA-18 adequately; decision `sufficient`.
