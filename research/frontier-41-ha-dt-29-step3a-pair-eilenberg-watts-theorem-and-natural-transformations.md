# Step 3a scope review — `eilenberg-watts-theorem-and-natural-transformations`

- Run `frontier-41-ha-dt-29`; role alpha; label
  `step3a-pair-eilenberg-watts-theorem-and-natural-transformations-bf7d08173cd1f41f`.
- A page `eilenberg-watts-theorem-and-natural-transformations` (order 919, batch 25,
  homological-algebra); B page `eilenberg-watts-theorem-and-natural-transformations-examples`
  (order 920, companion). Scope review only; no scaffold, manifest, coverage or item file was
  edited (Step 3a prohibits scaffold edits).
- Inputs read: HA-25–HA-29 conventions and the HA-25 design/prose contract in
  `research/plan-homological-algebra-track.md` (L5405–5483 conventions, L5484–5579 full local
  proofs P1–P4, B1 at L6144–6163, source-closure table and binding inventory L6234–6330);
  `research/eilenberg-watts-expansion/{pages.json,proposed-items.json,source-manifest.json,review.md}`;
  `research/plan-spec.json` pages 919/920; `research/frontier-41-ha-dt-29-batch-25.pages.json`
  (13 A + 4 B items), `…-batch-25.coverage.json`, `…-batch-25.notes.md`,
  `…-batch-25.cross-batch-dependencies.json` (`[]`); `…-scope-ledger.json`; the drift record for
  page 919 and its 110-page prerequisite closure (`…-drift-evidence.json`); all 17
  `…-step1-<item>.json` readiness records; `…-owner-authoring-direction.md` (HA-25–HA-29 binding
  clause, L70–72); the published suppliers cited by the pair; and the consumer manifests /
  unified ledger for batches 26–29. Current run state: Step 2 assign closed; the Step 3a
  dispatch attempt 1 (2026-10-05T13:26:30Z) left no report or scope receipt
  (`step3-decisions.mjs check --phase scope` lists this page as "current scope review required"),
  so this is the fresh review.

## Verdict

`sufficient` for `eilenberg-watts-theorem-and-natural-transformations`. The planned 13 A + 4 B
items realize every claim of the binding HA-25 inventory (11 A rows) and every B1 witness
(4 rows), plus two required local suppliers
(`lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`,
`lem-tensor-hom-adjunction-for-bimodules`). Definitions, results and examples cover the intended
subject — arbitrary unital rings, canonical comparison, transformation classification,
equivalence, adjoints, flatness — with no claim dropped or narrowed. All 49 distinct dependency
edges resolve (39 published items, all `status: published`, and 10 items of this pair); every
published dependency home lies inside the declared six-page prerequisite closure. No unmet
prerequisite absent from both the published library and the current scaffold was found. No
merger, enrichment or owner scope action is required.

## Design → scaffold mapping (scope, not proof)

| Design row | Realization in the batch-25 manifest | Evidence |
|---|---|---|
| P1 definition; functor category; cocontinuity ⇔ cokernels + coproducts; component-at-$A$ determination; local smallness | `def-additive-cocontinuous-module-functor` (+ `justified_by`), `lem-additive-cocontinuous-module-functors-form-a-category`, `lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving` | statements match P1 including the right-exact-plus-direct-sums alternative and the injectivity of $\eta\mapsto\eta_A$ |
| P2 commuting right action; canonical balanced comparison before any presentation | `lem-evaluation-on-the-regular-module-has-a-commuting-right-action`, `lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural` | $ma=F(r_a)(m)$, balance $\beta_X(ma,x)=\beta_X(m,ax)$, $B$-linearity, naturality, "no presentation chosen" all stated |
| P3 unit at $A$, free modules, canonical free presentation, cokernel universality (no five lemma), converse for $T_M$ | `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`, `lem-tensoring-with-a-right-module-…` | presentation $A^{(|K_X|)}\to A^{(|X|)}\to X\to0$ with first map not required monic; unit isomorphism citation; additivity/right-exactness/direct sums stated for arbitrary unital rings |
| P3 both directions assembled | `thm-eilenberg-watts-for-arbitrary-unital-rings` (i)–(ii) | "up to natural isomorphism the additive cocontinuous functors are exactly the tensor functors with bimodule kernels", quasi-inverse $F\mapsto F({}_AA)$ |
| P4 transformation bijection and its coherence | `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` | $\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$, $\eta_X=f\otimes1_X$, compatible with addition, identities, vertical composition |
| P4 equivalence of categories | `cor-eilenberg-watts-is-an-equivalence-of-hom-categories` | full, faithful, essentially surjective; quasi-inverse $F\mapsto F({}_AA)$ |
| P4 right adjoints | `cor-cocontinuous-additive-module-functors-admit-right-adjoints` | $T_M\dashv\operatorname{Hom}_B(M,-)$ transferred along $F\cong T_{F(A)}$ |
| P4 exactness ⇔ right flatness | `cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules` | exactness of $T_M$ iff $M$ flat as right $A$-module, using `def-left-and-right-flat-modules-over-an-arbitrary-ring`; no left projectivity claim |
| B1 extension of scalars | `ex-eilenberg-watts-recovers-extension-of-scalars` | kernel ${}_SS_R$, right action $s\cdot r=sf(r)$; stated in the commutative scope of the published definition, with the caveat recorded |
| B1 composite kernels; $g\otimes f$ components; non-decomposable bimodule maps | `ex-natural-transformations-between-tensor-composites` | associativity + outer actions identify $T_N\circ T_M$ with $T_{N\otimes_BM}$; trace witness over a field for a map not of the form $g\otimes f$ |
| B1 right exact without sums is not tensor | `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor` | $F(V)=\prod_{n\ge0}V$; AC declared via `def-axiom-of-choice` and the coordinatewise-lifting use |
| B1 sums-preserving but not right exact is not tensor | `cex-coproduct-preserving-left-exact-module-functor-is-not-tensor` | $F=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$; coproduct preservation and failure on $\mathbb Z\to\mathbb Z/2$ |

The two added A lemmas are a prerequisite repair, not a scope change: the design's P3/P4 cite
`thm-right-exactness-of-tensor-products`, `thm-tensor-products-commute-with-arbitrary-direct-sums`
and `thm-hom-tensor-adjunction-for-modules`, and I verified that all three published items are
stated over a **commutative** ring, so they cannot carry the arbitrary-unital-ring route. The
local lemmas restate exactly the needed facts (additivity, cokernel/exactness, direct sums;
currying with the left $A$-action $(a\varphi)(m)=\varphi(ma)$) and their own dependencies are
published arbitrary-ring items. Kamensky Prop. 5.1.40/Exercise 5.1.41 and Nyman–Smith §2–§3 give
independent source coverage of both facts. The page's stated scope is therefore complete *and*
its proof contract is closed over arbitrary rings.

Deviations from the design text that are not scope losses: the k-linear remark of P2 is not
claimed (HA-27 owns $k$-linearity); the composition law appears as B1's composites example,
as the design orders, with the coherent unit/composition comparisons deferred to HA-26's
`lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` and
`lem-tensoring-defines-a-pseudofunctor-with-interchange` (batch 26 manifest, page 921).

## Source coverage

The owned coverage file records 25 harvested rows over 4 fetch-verified full texts:

- M. Kamensky, *Non-Commutative Algebra* (BGU 2017), 82 PDF pages. I re-fetched the PDF and its
  SHA-256 matches the recorded hash `889e8c0a…a39a`; Theorem 5.1.43 ("$F$ is isomorphic to
  $F_N$ … iff it commutes with all colimits, equivalently with all quotients and direct sums"),
  Prop. 5.1.40, Exercise 5.1.41, Prop. 5.1.44, Lemma 5.1.46 and Corollary 5.1.48 (equivalence
  and $F_M\circ F_N\cong F_{M\otimes_SN}$) were read at printed pp. 54–57. Arbitrary unital
  rings, left-module handedness and the kernel $F(R)$ statement all check out.
- A. Nyman, S. P. Smith, *A Generalization of Watts's Theorem*, arXiv:0806.0832v1, 9 PDF pages.
  Re-fetched; SHA-256 matches `0474133e…a447`. Theorem 1.1 (right exact + direct limits ⇒
  $-\otimes_RB$, $B=F R$) and Theorem 1.2 ($\Psi:\mathrm{Mod}(R^{\mathrm{op}}\otimes_{\mathbb Z}S)
  \to\mathcal B(\mathrm{Mod}_R,\mathrm{Mod}_S)$ an equivalence) were read on p. 1.
- FSS, arXiv:1612.04561v3 (introduction's classical arbitrary-ring statement; finite results
  deferred to HA-27/HA-28) and EGNO *Tensor Categories* §1.8 Prop. 1.8.10 (free-presentation
  proof absorbed inline; §1.11 deferred to HA-28): recorded in coverage with hashes; I did not
  re-fetch these two, relying on the recorded fetch stamps.
- Watts's original 1960 paper remains unread (AMS access challenge); it is bibliographic
  attribution only, no claim depends on it. The classical statement was independently confirmed
  against the nLab *Eilenberg–Watts theorem* page (fetched 2026-10-06): additive cocontinuous
  functors are exactly the tensor-with-bimodule functors, equivalently additive + right exact +
  preserving small coproducts; bimodules and natural transformations form an equivalent
  category. Handedness: nLab/right-module $\mathrm{Mod}_R\to\mathrm{Mod}_S$, $-\otimes_RB$ with
  $B$ the $S$–$R$-bimodule is the opposite-ring form of this pair's left-module
  $T_M=M\otimes_A-$ with $M$ a $(B,A)$-bimodule.

Dispositions: 4 rows scaffolded as dedicated items, 12 absorbed inline into local items,
8 deferred with named destinations (HA-26/HA-27/HA-28 pairs, Morita §5.2, EGNO §1.11), 1
out-of-scope with reason (Nyman–Smith §4 affine-scheme application). The advisory
`coverage-low-yield` warning (4/25 scaffolded) is confirmed as expected: the inline absorptions
prove the same statements at the same or greater generality in the local items.

## Prerequisite findings (unmet-prerequisite check)

- **Confirmed available (no gap).** All 49 distinct deps of the 17 items resolve: 39 published
  items (each file present with `status: published`) and 10 items of this pair; no other-run
  target, no `proved_here: false` item. The 39 published homes are
  `tensor-products-of-modules`, `free-modules-and-exact-sequences`, `modules-and-module-homomorphisms`,
  `preadditive-and-additive-categories-and-biproducts`, `abelian-categories`,
  `limits-and-colimits`, `adjunctions-units-and-counits`, `categories-functors-and-natural-transformations`,
  `tor-flatness-and-global-dimension`, `normal-subgroups-and-quotient-groups`,
  `relations-functions-and-quotients` — all inside the 110-page closure of the six declared
  `requires` pages recorded by the drift review. Spot-checked statements are for arbitrary
  unital rings where used (`thm-universal-property-of-module-tensor-products`,
  `thm-unit-isomorphisms-for-module-tensor-products`, `thm-associativity-of-balanced-tensor-products`,
  `thm-bimodule-actions-induced-on-tensor-products`, `def-balanced-and-bilinear-maps` first
  clause, `cor-every-module-is-a-quotient-of-a-free-module`).
- **Consumer interfaces match (no gap).** Batch 26 consumes the functor definition/category,
  theorem, transformation theorem, equivalence and tensor–Hom adjunction for the Morita
  biequivalence/invertibility/center results; batch 27 restricts the two local lemmas and the
  evaluation/comparison lemmas to finite-dimensional modules; batch 28 uses the transformation
  bijection and the adjunction for the Deligne/Nakayama kernels; batch 29 needs
  `lem-tensoring-…` verbatim (graded transport of right exactness and direct sums) and
  `lem-canonical-free-presentation-controls-…` (cokernel universality, first map possibly
  non-monic) plus the page-level arbitrary-ring theorem/equivalence/functor category. Each of
  these is a declared claim of this pair; the three batch-29 reviews marked "open" (page-level
  plus `lem-graded-tensor-functor-…` and `lem-homogeneous-free-presentations-…`) are open
  *until authoring*, not scope gaps. No consumer needs a claim this pair does not plan (checked
  all 29 batch manifests for deps on the 17 ids and for `requires` edges to page 919).
- **B page remains a leaf.** No B item is a dependency of any item anywhere in the run
  (verified across all batch manifests); B1's AC-dependent counterexample declares
  `def-axiom-of-choice` and lies outside every choice-free supplier path.
- **Uncertainty, recorded honestly.** (i) This review checked scope and statements, not proof
  correctness; the two added local lemmas and every P-route argument remain to be authored in
  Step 3b. (ii) The coverage row that absorbs Kamensky Cor. 5.1.49 ("the base-change functor
  $F_S$ is the tensor functor with kernel $S$, and its endomorphism ring is computed through
  that bimodule") into `ex-eilenberg-watts-recovers-extension-of-scalars` is imprecise: the
  example covers only the kernel ${}_SS_R$ and the right action, not the endomorphism-ring
  computation, which is planned on HA-26 as `cor-center-is-morita-invariant-via-natural-endomorphisms`
  (batch 26 consumes `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` for it).
  This is a coverage annotation to refresh when next touched, not a scope gap.

## Library role and consumers

- The A page is the base pair of the HA-25–HA-29 expansion (orders 919–928) and the arbitrary-ring
  reference for the graded, finite-category and Deligne pairs. Declared page-level consumers:
  `morita-bicategories-and-projective-generators` (batch 26, order 921; review `verified`) and
  `graded-eilenberg-watts-and-shift-coherence` (batch 29, order 927; review `open` pending
  authoring). Item-level consumer edges from batches 26, 27, 28 and 29 all resolve to the planned
  A items.
- The B page is an examples leaf consuming only the A page; its four witnesses test the two
  hypotheses of the theorem, the composition/transformation classification, and the base-change
  instance.
- Every scaffolded claim is either published-library-supported or locally supplied; nothing is
  silently relocated to a future pair, and the only deferred design content (bicategory
  coherence, finite variants, Deligne products, grading) is explicitly owned by the sibling
  pairs and is not a stated claim of this page.

## Checks run (actual results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-25.pages.json` | 17 items, 0 normalized, 0 errors |
| dependency resolution scan (17 items, 49 distinct deps) | 39 published (`status: published`), 10 local A items, 0 unresolved |
| `node tools/coverage-checklist.mjs …batch-25.coverage.json --require-destination` | 1 page, 25 rows, 0 errors, 1 advisory (`coverage-low-yield`, 4/25) — confirmed as expected |
| `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` | this page listed as "current scope review required"; no prior review or owner receipt |
| Step-1 readiness records | 17/17 `decision: ready`, `owner: false` |
| source re-verification | Kamensky and Nyman–Smith PDFs re-fetched; SHA-256 match the recorded `889e8c0a…`/`0474133e…`; key statements read at Kamensky pp. 54–57 and Nyman–Smith p. 1; classical statement cross-checked against nLab |

## Item-level notes for Step 3b / owner (not scope blockers; no edits made)

1. The two added local lemmas are the sole arbitrary-ring route for P3/P4; Step 3b must author
   them and must not re-point dependencies at the commutative-only published items they replaced.
2. Optional owner enrichment candidates only (outside the commissioned design, not required by
   any consumer): (a) a non-flat kernel instance, e.g. $T_{\mathbb Z/2}=\mathbb Z/2\otimes_{\mathbb Z}-$
   on $\mathbf{Ab}$, would witness the failure direction of the flatness corollary in the B1
   counterexample style; (b) the arbitrary-ring left-exact/limit-preserving Hom dual is not
   claimed anywhere in the expansion (the finite dual is deferred to HA-27). Recording
   `sufficient` does not decide either.
3. Coverage annotation refresh: re-home the Kamensky Cor. 5.1.49 endomorphism half from
   `ex-eilenberg-watts-recovers-extension-of-scalars` to the HA-26 center corollary when the
   coverage file is next touched.
4. Keep the B page a leaf and the AC use confined to
   `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor` when authoring.

## Decision

Record `sufficient` for `eilenberg-watts-theorem-and-natural-transformations` with this report
path as the scope evidence. No owner scope action is required; Step 3b authoring proceeds on the
current manifest, and the batch-29 consumer reviews close against the authored statements.
