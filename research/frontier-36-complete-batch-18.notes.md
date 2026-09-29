# Frontier 36 complete — batch 18 Step 1 notes

Run `frontier-36-complete`; beta batch 18; 27 September 2026. Owned pair:
`unitary-representations-positive-type-and-gns` (A, order 510.069,
representation-theory) and its `-examples` B page. The owner authoring direction
was read before construction and gives no special amendment for this pair. The
assigned design is RG-20 in `research/plan-representation-theory-groups-track.md`;
the current `research/plan-spec.json` controls page prerequisites. No selected
pair, published item, shared plan, engine state, or verdict was edited.

## Exact inventory and readiness

All 21 item IDs are unused elsewhere, have explicit `deps`, and were entered in
prerequisite order. An item readiness record was written with the required
`step1-decisions.mjs record` command before proceeding to the next item. All
21 are mathematically `ready` at scaffold level, subject to the page-level
plan repair below and independent Step 3 review. The batch has no empty page.

**A, 17 items in manifest order:**

1. `def-strongly-continuous-unitary-representation`
2. `lem-continuity-criteria-for-unitary-representations`
3. `def-cyclic-vector-and-cyclic-unitary-representation`
4. `thm-schurs-lemma-for-unitary-representations`
5. `def-matrix-coefficient-of-a-unitary-representation`
6. `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous`
7. `def-continuous-function-of-positive-type`
8. `lem-diagonal-unitary-coefficients-have-positive-type`
9. `lem-positive-type-functions-define-a-pre-hilbert-form`
10. `lem-the-gns-null-space-is-translation-invariant`
11. `lem-the-gns-translation-action-is-unitary-and-strongly-continuous`
12. `thm-gns-construction-for-topological-groups`
13. `thm-uniqueness-of-the-cyclic-gns-representation`
14. `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations`
15. `lem-dominated-positive-type-functions-give-positive-commutant-contractions`
16. `lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function`
17. `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations`

**B, 4 items in manifest order:**

1. `ex-positive-type-functions-on-a-discrete-group`
2. `ex-gns-representation-of-a-one-dimensional-character`
3. `ex-positive-type-gaussian-on-the-real-line`
4. `cex-a-bounded-continuous-function-need-not-have-positive-type`

Every label is the computed longest in-run prerequisite depth, from level 0
through level 7. Published and other out-of-run suppliers contribute zero
to that depth. A local recomputation of all 21 labels found no mismatch,
cycle, unresolved ID, or same-run cross-batch item edge. Each owned Step 1
record includes the examined dependency IDs; the records were refreshed in
supplier order after the final proof-strategy and dependency edits.

## Owner escalation: one undeclared published page prerequisite

**Exact placement:** add the already published A page `uniform-spaces`
(order 279) to the `requires` of the A page
`unitary-representations-positive-type-and-gns` (order 510.069) in the current
plan, then reconcile this owned manifest's A-page `requires` with that owner
decision. The B page keeps only its A-page prerequisite. The complete A/B
inventories to which this applies are listed above; no new pair or item is
requested.

**Dependency and evidence chains:**

- `def-strongly-continuous-unitary-representation` and
  `def-continuous-function-of-positive-type` need the published
  `def-topological-group`, homed on `uniform-spaces`. Both use its group
  topology and continuity hypotheses; their consumers inherit that use.
- `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous`
  additionally needs the published
  `def-left-and-right-uniformities-of-a-topological-group`, also homed on
  `uniform-spaces`, to state which of the two group uniformities its estimates
  prove. That definition itself depends on `def-topological-group` and
  `def-uniform-space-by-entourages`. The source estimate is in
  [BHV, Appendix A §A.1](https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf)
  and [Neeb, §§3.4 and 5.3](https://www.math.fau.de/wp-content/uploads/2024/01/rep.pdf);
  the local proof explicitly gives the right-translate and left-translate
  estimates.
- The B page reaches these A definitions through its A-page `requires` and
  item dependencies; it needs no extra direct page requirement.

The current plan's A-page `requires` lists Haar measure, the modular/L1
group algebra, Hilbert geometry, and spectral measures. Its closure omits
`uniform-spaces`. The published supplier exists and its definition and proof
were read; this is a plan declaration defect, not a mathematical absence or a
published-item defect. The baseline `validate-plan.mjs research/plan-spec.json`
passes because this planned A/B pair still has empty item lists there. A
temporary copy of that plan with the **actual 21 scaffold items injected**
fails with the sole hard error
`[undeclared-prereq] page unitary-representations-positive-type-and-gns ...
uniform-spaces`. A second temporary copy with only the proposed A-page
`requires` addition passes. Both copies are under `/tmp`; the shared plan
was not changed. This owner reconciliation is required before these items
can be inserted into the shared plan or pass its full item-level gate.

The design's Gaussian example says to cite the later FR Fourier transform
page, while the current plan gives the B page only its A page as a
prerequisite. A load-bearing FR item dependency would therefore be rejected
by the current plan. The B strategy proves the one-dimensional Gaussian
Fourier integral directly from the published Gaussian integral, Lebesgue
agreement, differentiation under the integral sign, dominated convergence,
and L² completeness; it uses the published FR Gaussian result only as a
non-load-bearing comparison in future Remarks. This preserves the designed
claim and cyclic model without adding a page edge. The plan and design agree
on the four declared A prerequisites and A/B order; the current plan has
empty item lists for this pair, while RG-20 supplies the 21 assigned IDs.

## Proof and source audit

Four full texts were downloaded, inspected beyond search snippets, and stamped
by `source-fetch-check --stamp`. Exact locators, 38 individually disposed
harvested results, URLs, and durable fetch evidence are in the owned coverage
file. The independent A-page treatments include the BHV monograph and
Neeb's full lecture notes; Kowalski gives a further independent Schur proof.

- [Bekka, de la Harpe and Valette, *Kazhdan's Property (T)*](https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf),
  Appendix A §§A.1–A.2, printed pp. 305–314; Appendix C §§C.4–C.5,
  printed pp. 373–381: definitions, Schur, positive type, GNS, domination,
  and extreme points.
- [Neeb, *An Introduction to Unitary Representations of Lie Groups*](https://www.math.fau.de/wp-content/uploads/2024/01/rep.pdf),
  §§3.4, 4.2, 5.1, 5.3.1, printed pp. 67–68, 76, 97–99, 115–118:
  dominated kernel forms, Schur, GNS continuity and purity.
- [Kowalski, *An Introduction to the Representation Theory of Groups*](https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf),
  §3.4, printed pp. 106–115: strong continuity and spectral Schur proof.
- [Bekka and de la Harpe, *Unitary Representations of Groups, Duals, and Characters*](https://arxiv.org/pdf/1912.07262),
  Chapter 1 §§1.A–1.B, printed pp. 25–30: complete finite-support GNS and
  pointed uniqueness. This book refers to BHV for Schur, so those two are not
  counted as independent Schur arguments.

The BHV proof of unitary Schur in A.2.2 treats the Borel indicator of any
spectral singleton as a nonzero projection. That fails for continuous
spectrum. The scaffold instead takes separated relatively open spectral
subsets and uses the published
`thm-support-and-uniqueness-of-the-spectral-measure` to obtain a nontrivial
commuting projection. Neeb's §4.2.7 also calls a general bounded operator's
range closed; the local proof uses the spectral-projection route and makes
the final intertwiner an isometry before concluding its range is closed.
These are source-proof caveats, not defects in a published item of this
repository.

The GNS construction uses the first-variable-linear pairing throughout:
`B_phi(delta_x,delta_y)=phi(y^{-1}x)`. The null quotient is well defined
before Hilbert completion, left translation is isometric, and the norm
formula on translated delta vectors proves strong continuity before density
extends it to the whole space. The zero positive-type function produces the
zero Hilbert space and is excluded from normalized statements. The dominated
form proof derives the positive commutant contraction via the published
Hilbert Riesz theorem with the conjugate-linear second-variable convention.
The extreme-point proof follows the required two-lemma route; its reducible
direction explicitly uses published orthogonal decomposition and projection
properties. The B Gaussian has a direct ODE calculation of
`int exp(its) exp(-s^2/4)/(2 sqrt(pi)) ds = exp(-t^2)` and a cyclic closed
subspace of `L^2(R,ds)`. The counterexample has a finite negative quadratic
form `6 - 8 exp(-1/16) + 2 exp(-1) <= -1/2`.

The published suppliers actually used were checked for statement, proof,
hypotheses, convention and axiom strength, including Hilbert completion,
Riesz, adjoints, orthogonal projection, the continuous and Borel spectral
calculi, spectral support, Gram–Schmidt, Gaussian integration, Lebesgue
convergence/differentiation, and L² completeness. All 1,434 distinct
transitive published suppliers reachable from the 21 items have
`status: published`; none is missing or `proved_here: false`. No defective
actual published prerequisite was confirmed. The Haar and modular/L1 pages
remain the plan's page-level context, but none of these 21 proofs uses their
results as a load-bearing item dependency.

The finite-matrix and pre-Hilbert arguments are choice-free. AC is stated
and `def-axiom-of-choice` declared wherever the published completion,
Hilbert Riesz, orthogonal projection, Borel functional calculus, or spectral
support route is consumed. The zero-space and normalized branches are kept
separate. No Recorded result or incompatible-axiom branch is used.

## Dependency input and checks

The owned `research/frontier-36-complete-batch-18.cross-batch-dependencies.json`
is `[]`: all 21 direct dependencies resolve either within this pair or to
published pages outside this run. `frontier-dependency-ledger.mjs refresh`
succeeded and registered batch 18 as reviewed in the unified ledger. The
published `uniform-spaces` repair above is an out-of-run page requirement,
not a same-run cross-batch edge.

Checks run on the workspace during construction:

| Check | Observed result |
|---|---|
| Owned coverage (`--require-destination`) | Passed, 1 page, 38 harvested results, 0 errors or warnings. |
| Whole-run `manifest-deps` | Passed, 484 items, 0 errors at the latest check. |
| Whole-run `content-policy --manifest-only` | Passed, 484 scoped items, 0 errors or warnings at the latest check. |
| Baseline current-plan `validate-plan` | Passed, with its pre-existing redundant-prerequisite warnings; this pair has empty plan item lists. |
| Actual-item temporary plan | Failed solely on the missing `uniform-spaces` page declaration; adding that declaration in a second temporary copy passed. |
| Repository `extcheck --quiet` | Passed, 0 hard errors; 43 warnings concern already published items elsewhere. |
| Owned `source-fetch-check` | Passed, 4 of 4 full-text stamps resolved. |
| Whole-run `item-dependency-levels check` | Exit 1 solely because 22 pages in other batches still had empty inventories; all 21 owned levels recompute correctly with maximum 7. |
| Whole-run `step1-decisions check` | At its recorded check, exit 1: 464 of 466 items ready, 22 empty pages and two other-batch escalations (`ex-fredholm-determinant-of-a-finite-rank-operator`, `ex-nevanlinna-characteristic-of-reciprocal-gamma`). All 21 owned records pass their current-hash check. Other batches are concurrently changing, so whole-run counts can move. |

The full engine gate and Step 3 mathematical approval follow owner/operator
reconciliation. No engine transition or verdict was attempted here.
