# Step 3a scope review — pair `deligne-products-and-categorical-eilenberg-watts` / `deligne-products-and-categorical-eilenberg-watts-examples`

- Run `frontier-41-ha-dt-29`, batch 28, orders 925/926, category `homological-algebra`, design
  §HA-28 of `research/plan-homological-algebra-track.md` (P10 L5862–L5934, P11 L5935–L6006,
  P12 L6007–L6040, witnesses B4 L6195–L6215, source table L6246–L6276, binding item inventory
  L6356–L6381).
- Pair inventory: A page 12 items (5 P10-route, 3 P11-route, 4 P12-route — exactly the binding
  inventory), B page 4 items (the B4 witnesses).
- Reviewer role: alpha, `step3a-pair-deligne-products-and-categorical-eilenberg-watts-cceac2558047da02`.
- Verdict: **`sufficient`** — the planned definitions, results and examples cover the designed
  subject (finite Deligne products and their universal property, the categorical Eilenberg–Watts
  triangle, explicit ends/coends, the Nakayama calculus); no topic or result of the HA-28 design
  is missing, and no prerequisite is absent from both the published library and the current
  scaffold. One declaration-level defect (suppliers exist in-run; the A page's `requires` is
  incomplete) and one proof-level uncertainty are flagged below; neither changes scope.
- No scaffold, plan, manifest, coverage or owner record was edited. One scope decision is recorded
  for the A page; the tool's scope hash binds both pages of the pair.

## 1. Inputs read

- Manifest `research/frontier-41-ha-dt-29-batch-28.pages.json`: all 16 item statements, proof
  strategies, dep lists, `justified_by` links and dependency levels, plus the page `requires`,
  orders and companions.
- Coverage `research/frontier-41-ha-dt-29-batch-28.coverage.json` (31 rows, 2 sources; dispositions
  below); batch notes `research/frontier-41-ha-dt-29-batch-28.notes.md` (design reconciliation,
  recorded deviations, checks); cross-batch input
  `research/frontier-41-ha-dt-29-batch-28.cross-batch-dependencies.json` and the run ledger
  `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` (batch 28: 18 rows, all
  `verified`; batch 28 in `reviewed_batches`).
- Design and owner directions: plan §HA-25–HA-29 conventions L5405–L5475; HA-28 P10–P12 and B4;
  binding inventory L6278–L6381; `research/plan-spec.json` orders 925/926;
  `research/eilenberg-watts-expansion/proposed-items.json` (HA-28 ids, deps, proof locations);
  `research/frontier-41-ha-dt-29-owner-authoring-direction.md` L69–L73 (HA-25–HA-29 statements
  bound to the plan plus `proposed-items.json`, to pass normal authoring and proof review);
  `research/frontier-41-ha-dt-29-scope-ledger.json` (`allow_in_run_dependencies: true`). No
  pair-local owner amendment exists.
- In-run supplier statements read on disk: batch 25 `eilenberg-watts-theorem-and-natural-transformations`
  (order 919), batch 26 `morita-bicategories-and-projective-generators` (order 921), batch 27
  `finite-abelian-categories-and-eilenberg-watts` (order 923).
- Machine checks re-run read-only: `manifest-deps.mjs` over all 30 batch files (883 items, 0
  errors), `content-policy.mjs --manifest-only` (883 scoped items, 0 errors/0 warnings),
  `coverage-checklist.mjs --require-destination` on the owned coverage file (31 rows, 0/0),
  `validate-plan.mjs research/plan-spec.json` (exit 0), `step1-decisions.mjs check` (883/883
  ready), `splice-plan.mjs --run frontier-41-ha-dt-29 --verify` (6 declaration findings for this
  pair, §5), and a direct dep-resolution scan (237/237 edges resolve).
- Independent source reads this session on hash-matched complete PDFs: EGNO *Tensor Categories*
  (SHA-256 `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3`, 362 pp.) printed
  pp. 15–16, and FSS arXiv:1612.04561v3 (SHA-256
  `a9e7d26bf24dabb35c2faa78daf7c7ecc2916143a69cee2800bd4d939b5b9708`, 41 pp.) pp. 12–16 and
  23–24; both hashes reproduce the coverage stamps exactly.

## 2. Design conformance (scope)

| HA-28 design contract | Scaffold item(s) |
|---|---|
| P10 copower existence: $V\odot Y$ represents $\operatorname{Hom}_k(V,\mathcal C(Y,Z))$, basis-independent, functorial in both variables | `lem-finite-vector-space-copowers-in-a-linear-abelian-category` |
| P10 definition: universal $k$-linear abelian category for right-exact-in-each-variable bifunctors, universal property an equivalence of categories, existence not asserted | `def-deligne-product-of-finite-linear-categories` (existence in `justified_by`) |
| P10 construction and determination: $W=H(R,S)$, commuting right actions, $\bar H$ from finite presentations, natural $\bar H(X\otimes_kY)\cong H(X,Y)$, transformations determined at $(R,S)$ | `lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules`, `thm-finite-deligne-products-exist-by-tensor-product-algebras` |
| P10 dual/opposite side: $\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq(\mathcal B,\mathcal A)\text{-}\mathrm{bimod}$, external object $\bar a\boxtimes b\mapsto b\otimes_ka^*$, left-exact dual universal property, $(\mathcal A^{\mathrm{op}}\boxtimes\mathcal B)^{\mathrm{op}}\simeq\mathcal A\boxtimes\mathcal B^{\mathrm{op}}$ | `lem-opposite-deligne-product-identifies-with-finite-bimodules` |
| P11 triangle: $\Phi^l,\Phi^r$ equivalences, $\operatorname{Lex}\simeq\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq\operatorname{Rex}$, external formulas | `thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories` |
| P11 explicit (co)ends: universal wedge/cowedge, uniqueness, $\Psi^l\Phi^l\cong1$, $\Psi^r\Phi^r\cong1$, functoriality, finite existence | `lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps` |
| P11 composition: kernel of $G\circ F$ is $N\otimes_{\mathcal B}M$, transformations are bimodule maps, associativity/unit coherence | `cor-kernel-composition-and-transformations-use-balanced-tensor-products` |
| P12 Nakayama: $\Gamma^{rl},\Gamma^{lr}$; $N^r=A^*\otimes_A-$, $N^l=\operatorname{Hom}_A(A^*,-)$; intrinsic (co)end formulas; $N^r\dashv N^l$; regular and co-regular need not agree | `def-left-and-right-nakayama-functors-by-finite-kernel-calculus`, `lem-nakayama-kernels-give-well-defined-adjoint-functors` |
| P12 identity image; Lex-to-Rex equivalence is not the inclusion and need not preserve the identity | `prop-left-to-right-exact-equivalence-sends-identity-to-nakayama` |
| P12 projective Nakayama pairing and conditional symmetric-algebra specialization | `prop-projective-nakayama-pairing-and-symmetric-algebra-specialization` |
| B4 witnesses (vect product; non-identity Nakayama; regular vs co-regular; non-external kernel) | the four B items, id for id |

All 12 A ids and all 4 B ids match the binding inventory exactly; no design item is dropped and no
claim, hypothesis or witness is narrowed. The batch-recorded deviations (notes §2) are
scope-neutral or strengthenings: the copower lemma no longer cites the module tensor product it
does not use; the two-variable determination is proved directly for an arbitrary $k$-linear
abelian target because the batch-25 comparison lemma is module-category-only; the published
commutative-ring Hom–tensor adjunction is replaced by the batch-25 arbitrary-ring
`lem-tensor-hom-adjunction-for-bimodules`; the Set-valued ninja-Yoneda citation is replaced by the
local finite linear co-Yoneda computation; unused citations were trimmed in A1, A4–A7, A12.

## 3. Source coverage

- Dispositions: 13 `included`, 11 `inline`, 1 `already-published`, 3 `deferred`, 3 `out-of-scope`
(rows sum to 31). Deferrals route FSS Lemma 2.1/Corollary 2.3 to the batch-27 pair and the FSS
introduction bicategorical reading to the batch-25 pair; out-of-scope rows are EGNO's coalgebra
realization (replaced by the design's tensor-product-algebra construction), FSS Remark 3.17 (GV
structure, used by no item of this pair) and FSS §4 (Hopf/scheme applications), each with a
specific reason.
- I re-fetched both sources and reproduced the recorded SHA-256 digests. EGNO printed pp. 15–16
  confirm Definition 1.11.1 (universality for right-exact-in-both-variables bilinear bifunctors)
  and Proposition 1.11.2 (i) existence, locally finite, with the explicit coalgebra-realization
  sketch; (ii) unique up to a unique equivalence; (iii) coalgebra realization; (iv) exactness in
  both variables and $\operatorname{Hom}(X_1,Y_1)\otimes\operatorname{Hom}(X_2,Y_2)\cong
  \operatorname{Hom}(X_1\boxtimes X_2,Y_1\boxtimes Y_2)$; (v) exact bifunctors induce exact
  functors. FSS pp. 12–16 confirm Corollary 2.9 (Peter–Weyl: end $=A$, coend $=A^*$), (2.32)
  ($A\text{-}\mathrm{mod}\boxtimes B^{\mathrm{op}}\text{-}\mathrm{mod}\cong A$-bimod-$B$) and
  Corollary 2.10 (end/coend existence), Theorem 3.2 (the triangle of quasi-inverse adjoint
  equivalences) and Corollary 3.7 (kernel composition by balanced tensor product); FSS pp. 23–24
  confirm Definition 3.14 and Lemmas 3.15–3.16 ($N^r\cong A^*\otimes_A-$, $N^r\dashv N^l$).
- A3, A12, B1, B2 and B4 have no standalone harvest row: they are the design's own local
  expansions (P10 construction, P12 projective pairing, B4 witnesses) resting on rows recorded
  for adjacent items and on the in-run batch-26 dual-basis lemma for A12; the coverage checklist
  passes and no designed topic lacks a source/design route.

## 4. Intended role in the library

- Leaf pair. A direct scan of all 30 batch manifests finds 0 items outside batch 28 depending on
  any batch-28 item; the only page naming the A page in `requires` is its B companion. No
  published item covers Deligne products or Eilenberg–Watts tensor functors (`items/` has 0
  filenames matching `watts`/`deligne`).
- The pair is the finite Deligne-product/Nakayama capstone of the HA-25–HA-29 expansion. It does
  not duplicate its suppliers: batch 25 proves arbitrary-ring Eilenberg–Watts and transformation
  classification, batch 26 the Morita bicategory, batch 27 the algebra-level finite
  classification, while this pair adds the model-independent triangle, the explicit (co)end
  inverses, kernel composition and the Nakayama calculus.

## 5. Prerequisite audit

- All 237 dependency edges across the 16 items resolve: 190 to published items (every
  `items/<id>.md` exists with `status: published`) and 47 to in-run items — 3 in batch 25, 3 in
  batch 26, 11 in batch 27, 30 inside the pair; 0 unresolved, 0 ambiguous. The in-run supplier
  pages are ordered 919/921/923, all before 925, and all 883 run items are ready. The three
  `requires` pages exist (`finite-abelian-categories-and-eilenberg-watts` in-run; the published
  `ends-coends-and-weighted-limits` and `enriched-categories`, whose cited items
  `def-end-and-coend`, `def-wedge-and-cowedge`, `def-dinatural-transformation`, the end/coend
  naturality and uniqueness theorems and `def-cotensor-and-tensor` are all on disk).
- **No unmet prerequisite.** Nothing required by these items is absent from both the published
  library and the current scaffold; every required claim has a named supplier with matching
  hypotheses (e.g. A12's `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` is
  stated for finitely generated projectives, which is exactly the finite module case used;
  A10/A12's `lem-tensor-hom-adjunction-for-bimodules` is stated for arbitrary unital rings).
- **Declaration finding (owner/Step 4; suppliers present, no mathematics missing).**
  `splice-plan --verify` reports 6 undeclared-prerequisite edges on the A page into unbuilt
  in-run pages not named in its `requires`: into `eilenberg-watts-theorem-and-natural-transformations`
  (batch 25) — `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` (consumer
  `cor-kernel-composition-and-transformations-use-balanced-tensor-products`) and
  `lem-tensor-hom-adjunction-for-bimodules` (consumers
  `lem-nakayama-kernels-give-well-defined-adjoint-functors` and
  `prop-projective-nakayama-pairing-and-symmetric-algebra-specialization`); into
  `morita-bicategories-and-projective-generators` (batch 26) —
  `def-morita-bicategory-of-rings-and-bimodules` and
  `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` (consumer
  `cor-kernel-composition-...`) and `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`
  (consumer `prop-projective-nakayama-...`). The suppliers exist with matching content (statements
  read), the binding `proposed-items.json` already declares these edges, and all 18 cross-batch
  rows are `verified`; the defect is only that the A page's `requires` (and the plan) does not
  name the two supplier pages. Recommended owner action at Step 4: add
  `eilenberg-watts-theorem-and-natural-transformations` and
  `morita-bicategories-and-projective-generators` to the A page's `requires` in manifest and plan
  (or reroute the citations), then refresh the frontier ledger. This is a declaration repair, not
  a scope insufficiency.
- **Uncertainty (proof-level, not scope).** FSS states Theorem 3.2 over an algebraically closed
  field, while the scaffold states the corresponding items for an arbitrary field; the HA-28
  conventions say an algebraically closed field would suffice, and the design's own batch-27
  route records "No semisimplicity or algebraically closed field was used", so the broader claim
  is a strengthening whose proof obligation stays with the authors. Step 3b should confirm no
  transported step silently uses algebraic closure. The batch notes also flag A4's arbitrary-target
  full faithfulness and the successive-cokernel identification as the least standard steps; these
  are authoring risks, not omissions.
- Spot checks only (not a proof review): the B-witness dimensions and the non-externality
  argument for the upper-triangular algebra re-derive correctly; A6's typed hypotheses ($M$ a
  $(\mathcal B,\mathcal A)$-bimodule, $M^*$ its $(\mathcal A,\mathcal B)$-dual) match
  $\Phi^l=\operatorname{Hom}_{\mathcal A}(M^*,-):\mathcal A\to\mathcal B$ and
  $\Phi^r=M\otimes_{\mathcal A}-$.

## 6. Decision and receipt

- Decision: `sufficient` for `deligne-products-and-categorical-eilenberg-watts`, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29 --page
  deligne-products-and-categorical-eilenberg-watts --decision sufficient --reason "..."`.
- Receipt: `research/frontier-41-ha-dt-29-step3a-review-deligne-products-and-categorical-eilenberg-watts.json`.
- The scope hash binds both pages' current statements; any later statement edit invalidates this
  review and requires a fresh scope pass.
- No item approvals, owner records, scaffold, plan, manifest or coverage edits were made by this
  review.
