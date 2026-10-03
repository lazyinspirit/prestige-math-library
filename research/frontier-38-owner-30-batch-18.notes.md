# frontier-38-owner-30 — batch 18 Step 1 notes

Owned pair: `frobenius-characteristic-and-the-symmetric-group-character-dictionary`
(A, order 801) and its `-examples` B page (order 802), both in
`representation-theory`. Read before construction: `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the SYMR-2 design
section in `research/symmetric-group-planning/proposed-inventory.md` (lines
39–62), `research/plan-symmetric-group-representations-track.md`,
`research/plan-spec.json`, the Step-1 drift review
(`research/frontier-38-owner-30-alpha-step1-drift.md`) and the
symmetric-group planning main review including
`gap-dependency-closure-ledger.md`. The owner direction keeps this pair at
order 801, uses `representation-theory`, and forbids relying on the unbuilt
873/877 pairs; this pair never reaches them. No selected pair, shared plan,
published item, engine state or verdict was edited.

## Plan versus design

`research/plan-spec.json` carries the same page IDs, order, category,
companion pointers and `requires` as the dispatch and the design; its item
lists for both pages were empty before this batch. The design's scope,
conventions (outer product versus internal/Kronecker product; ordinary
complex character theory; stable graded ring over the integers, power-sum
scalar extension to the rationals) and proof route (Young's rule plus
Kostka unitriangularity to fix the Specht/Schur labels; cycle-type
computation for multiplicativity; isometry for the metric) are preserved.
Recorded conflicts and deviations:

1. **Codomain correction (drift review, applied).** The proposed
   `def-frobenius-characteristic-map` wrote an unqualified
   `Lambda_Q` codomain. An arbitrary complex class function has complex
   coefficients `f(rho)/z_rho`, so the definition is stated with codomain
   `Lambda_C`; rational-valued class functions land in `Lambda_Q`, and the
   integrality `ch(R(S_n)) ⊆ Lambda` is *proved* by
   `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`,
   never assumed. This is the drift reviewer's coefficient-convention
   correction, not a scope change.
2. **One proposed A row replaced by published content.** The design proposed
   `lem-centralizer-order-for-a-symmetric-group-cycle-type`. The published
   `thm-centralizer-cardinality-from-cycle-type`
   (`conjugacy-and-simplicity-in-the-symmetric-groups`, in the requires
   closure) states `|C_{S_n}(sigma)| = prod_k k^{c_k} c_k!`, and published
   `thm-conjugacy-class-cardinality` supplies `|Cl| = [G:C_G(g)]`; together
   they give exactly the claimed class size `n!/z_rho`. Re-minting that row
   locally would have duplicated published content, so it was not
   scaffolded; the definition of `ch` depends on the published theorem
   directly. No commissioned claim was weakened.
3. **One necessary local prerequisite added.** The design's route needs the
   expansion `h_lambda = sum_rho N(lambda,rho) p_rho/z_rho` with the
   cycle-distribution coefficient `N(lambda,rho)` (Macdonald (2.14') and
   §7.3/§6 Tab. 1). It is scaffolded as
   `lem-complete-homogeneous-expansion-in-power-sums`, before its consumers,
   with a self-contained finite-rank `exp(sum_k p_k t^k/k)` proof. It is
   used by the Young-permutation characteristic lemma and by the B-page
   computations.
4. **Dependency retargeting to actual suppliers.** The design's rows name
   several items that are either superseded or imprecise. The dictionary
   theorem depends on the published
   `lem-kostka-change-of-basis-is-dominance-unitriangular` and
   `thm-youngs-rule-for-permutation-modules`, as required by the closure
   ledger's explicit correction ("orthonormality alone permits a permutation
   of labels"). The isomorphism theorem proves `ch(R_S) ⊆ Lambda` first
   (Young's rule plus the integral inverse Kostka matrix), then surjectivity
   from the `h_lambda` basis and injectivity from the isometry. The design's
   `def-partition-young-diagram-and-conjugate-partition` dependency on the
   graded representation group was dropped as unused; the published
   character ring and symmetric-group notation are the actual suppliers.
5. **B rows extended, not weakened.** All four designed B rows are built
   (`ex-frobenius-characteristic-dictionary-for-s3`,
   `ex-young-permutation-characteristic-for-shape-two-one`,
   `ex-sign-twist-conjugates-the-s31-character`,
   `cex-outer-induction-is-not-the-kronecker-product`). The first and third
   gained the Jacobi–Trudi identities, the omega involution and the local
   power-sum expansion lemma as explicit dependencies, because "expand
   `s_lambda` in `p`" needs an actual expansion route; every designed claim
   is retained and each computation was recomputed symbolically during
   scaffolding.

## Inventory, dependency levels and route

All 16 IDs were unused before this batch, are unplanned elsewhere in
`plan-spec.json`, have explicit `deps`, and appear in prerequisite order.

**A inventory (12):**

| level | id |
|---|---|
| 0 | `def-graded-ordinary-representation-ring-of-symmetric-groups` |
| 0 | `lem-complete-homogeneous-expansion-in-power-sums` |
| 0 | `def-frobenius-characteristic-map` |
| 1 | `def-outer-induction-product-for-symmetric-group-characters` |
| 1 | `lem-frobenius-characteristic-is-an-isometry` |
| 1 | `lem-characteristic-of-a-young-permutation-character-is-complete` |
| 2 | `lem-frobenius-characteristic-preserves-outer-products` |
| 2 | `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions` |
| 3 | `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism` |
| 3 | `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients` |
| 3 | `prop-sign-twist-corresponds-to-the-omega-involution` |
| 3 | `prop-regular-character-has-characteristic-p-one-to-the-n` |

**B inventory (4):** `ex-frobenius-characteristic-dictionary-for-s3` (level
4), `ex-young-permutation-characteristic-for-shape-two-one` (level 5),
`ex-sign-twist-conjugates-the-s31-character` (level 4),
`cex-outer-induction-is-not-the-kronecker-product` (level 3).

Route, verified against the published proofs actually cited: `ch` is defined
on complex class functions into `Lambda_C` and is C-linear; the isometry
follows from `p_rho/z_rho`-expansion plus class sizes `n!/z_rho`;
`ch(Ind_{S_lambda}^{S_n} 1)=h_lambda` follows from fixed tabloids equal to
cycle distributions; multiplicativity follows from the published Frobenius
induced-character value formula and the split-count identity
`z_rho/(z_mu z_nu) = prod_i m_i(rho)!/(m_i(mu)! m_i(nu)!)`; Young's rule with
the integral unitriangular Kostka matrix yields `ch(chi^lambda)=s_lambda`
(labelled, not merely unlabelled); the remaining corollary and propositions
are direct consequences. No item consumes a Recorded result, no incompatible
axiom branch is touched, and no item uses the Axiom of Choice (finite group
averages and finite generating-function manipulations only).

## Sources, suppliers and dispositions

Three complete textbooks were fetch-stamped and inspected; nothing was
dropped and the recovery allowance was not needed (initial full-text fetch
succeeded for all three):

- I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed.,
  Chapter I §7 (7.1)–(7.13), Examples 1–3, printed pp. 112–117, and (2.14')
  printed p. 25 — the primary complete treatment of the characteristic map.
- G. D. James, *The Representation Theory of the Symmetric Groups*, §6
  printed pp. 22–26 (fixed-tabloid matrix, Theorem 6.2, Lemma 6.9) and §16
  printed pp. 60–64 (Definition 16.1, Lemmas 16.2–16.3, Theorem 16.4,
  Corollary 16.5) — independent character-theoretic treatment.
- Peter Webb, *A Course in Finite Group Representation Theory*, §3.2
  printed pp. 27–30 and §4.3 printed pp. 54–58 — independent general
  finite-group treatment of the Hermitian inner product, multiplicity
  formula, induction and the induced-character value formula.

The owned coverage file records every harvested heading with a disposition
(28 rows): 7 `included` into the new items, 6 `inline`, 6
`already-published`, 9 `deferred` to
`rim-hooks-and-the-murnaghan-nakayama-rule`,
`outer-products-skew-specht-modules-and-littlewood-richardson` or
`kronecker-coefficients-and-internal-products`, each with a specific reason.
No result was left undisposed and no destination is speculative; all three
destination pages exist in `plan-spec.json`. Every published supplier used
was read at its statement (and, where the route depends on it, its proof):
`thm-youngs-rule-for-permutation-modules`,
`lem-kostka-change-of-basis-is-dominance-unitriangular`,
`thm-elementary-and-complete-families-freely-generate-the-stable-ring`,
`cor-power-sums-are-orthogonal-for-the-hall-inner-product`,
`prop-omega-conjugates-schur-functions`,
`thm-jacobi-trudi-and-dual-jacobi-trudi-identities`,
`thm-centralizer-cardinality-from-cycle-type`,
`thm-conjugacy-class-cardinality`, the character-theory items on
`characters-and-the-orthogonality-relations`, the induced-character items on
`induced-representations-and-frobenius-reciprocity`, the Specht items on
`specht-modules-and-the-irreducibles-of-the-symmetric-group` and the
branching items on `the-branching-rule-and-the-young-graph`. No published
defect in an actual prerequisite was found; every direct item dependency is
either in this batch or published outside the run, so the consumer-batch
dependency input is `[]`.

## Checks (actual observed results)

| Check | Result |
|---|---|
| Owned `coverage-checklist --require-destination` | exit 0; 1 A page, 28 harvested results, 0 errors, 1 advisory `coverage-low-yield` (7/28 included; the declines are inline/already-published/deferred with reasons) |
| Owned `source-fetch-check --stamp`, then check mode | exit 0; 3/3 full-text sources fetch-verified (Macdonald 486 pp., James 161 pp., Webb 294 pp.) and 3/3 resolved |
| Owned `url-sweep --recover --fail-on-dead` | exit 0; 3/3 live, 0 dead, 0 documented drops |
| Owned `source-backing` | exit 0; 7 authored result(s), every one backed by an openable source |
| Whole-run `manifest-deps` | exit 0 at both observations: 201 items before and 277 items after the final edit (other batches were being scaffolded concurrently), 0 missing dependency arrays, 0 errors |
| Whole-run `content-policy --manifest-only` | exit 0 at both observations (201 then 278 scoped items, other batches growing concurrently), 0 errors, 0 warnings |
| Current-plan `validate-plan` | exit 0; pre-existing `redundant-prereq` warnings elsewhere and 289 still-empty planned inventories in other batches; no error in the owned path |
| Temporary plan with the batch-18 item inventories injected | exit 0; 0 errors — no undeclared page prerequisite, item cycle, forward reference, B-page dependency or unresolved id |
| Whole-run `item-dependency-levels check` | exit 1 only for 42 empty inventories in other batches; all 16 owned labels recompute exactly (levels 0–5), no owned mismatch or cycle |
| Whole-run `step1-decisions check` | exit 1 while other batches still have 63 missing records and 42 empty inventories; all 16 owned `ready` records are closed and current |
| Whole-repo `extcheck --quiet` | exit 0; only pre-existing published warnings elsewhere, none in the owned path |
| Whole-repo `fwdcheck` | exit 1 on `items/lem-multiplicative-type-affineness-by-field-descent.md` (`[[def-group-scheme-over-a-field]]` not later), an item outside this batch; no owned forward reference |
| `frontier-dependency-ledger refresh` | succeeded; batch-18 input `[]`; 0 unified-ledger edges touch batch 18 |
| `scaffoldArtifacts` predicate (replicated) | 2 owned pages, 16/16 decisions closed, 16/16 `dependency_level` values match the computed levels |

The remaining whole-run failures are other batches' unfinished scaffold
work; they are not owned by this batch and were recorded, not repaired.

## Escalations and remaining work

No cross-batch change, new prerequisite pair, page split, source drop or
owner escalation is required. The page has 12 A items (limit 100), all local
prerequisites are scaffolded before their consumers, no pair prerequisite is
missing, and no AC branch is consumed. Step-1 decisions are scaffold
readiness evidence only; Step 3 must author the complete proofs and Step 3's
review provides independent mathematical approval.
