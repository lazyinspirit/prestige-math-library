# Reader report — batch 14

Run: `statistical-models-experiments-62`  
Role: reader  
Date: 2026-10-15

## Inventory opened

Assigned pages:

- `library/statistical-models-and-experiments/full-factorial-contrasts-and-interactions.md` (A page)
- `library/statistical-models-and-experiments/full-factorial-contrasts-and-interactions-examples.md` (B page)

Assigned items, reviewed in supplier order:

- `items/def-two-level-full-factorial-design.md`
- `items/thm-full-two-level-factorial-contrast-orthogonality.md`
- `items/thm-full-factorial-estimator-and-effect-variances.md`
- `items/ex-two-factor-interaction-and-scale-dependence.md`
- `items/ex-unbalanced-full-factorial-loses-orthogonality.md`

Dependencies opened for the assigned claims:

- `items/def-orthogonal-vectors-sets-and-orthonormal-bases.md`
- `items/prop-standard-coordinate-inner-products.md`
- `items/def-random-element-and-real-random-variable.md`
- `items/def-independent-random-elements.md`
- `items/def-independent-sigma-algebras-and-events.md`
- `items/def-independent-families-of-event-classes.md`
- `items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md`
- `items/def-moments-variance-and-covariance.md`
- `items/lem-variance-and-covariance-identities-for-random-variables.md`
- `items/cor-variance-adds-for-pairwise-independent-random-variables.md`
- `items/thm-expectation-of-products-of-independent-random-variables.md`
- `items/thm-factorization-of-expectations-for-independent-variables.md`
- `items/def-pairwise-and-mutual-independence-of-events.md`

## Review and evidence

- The design definition correctly indexes all `2^k` runs and subset columns and gives the normalized coefficient and group-mean effect. The nonempty groups are established by the all-positive run and a coordinate flip.
- `thm-full-two-level-factorial-contrast-orthogonality`, steps 1.1–3.1, correctly reduces each column product to the symmetric-difference sign monomial, cancels nonempty symmetric differences with a fixed-point-free coordinate-flip involution, and derives the Gram identity. The standard real coordinate pairing and orthogonality definition supply the stated interfaces.
- `thm-full-factorial-estimator-and-effect-variances`, steps 1.1–3.1, correctly isolates each coefficient, preserves independence under multiplication by a deterministic sign, applies finite variance addition, and converts the nonempty contrast to twice the coefficient. The finite-second-moment assumption supplies integrability on a probability space; no centering or Gaussian assumption is used for the variance formulas. The two-group cardinalities and effect relation follow from the coordinate-flip bijection.
- `ex-two-factor-interaction-and-scale-dependence`, steps 1.1–2.1, computes the raw effect as `1` and the log effect as `0`; the logarithm identity follows from `6=2·3` and positivity of the responses.
- `ex-unbalanced-full-factorial-loses-orthogonality`, steps 1.1–3.1, computes the weighted intercept/first-factor inner product as `−1`. The duplicated five-row matrix has the same four distinct rows as the balanced matrix, so its kernel is contained in the balanced matrix's kernel; `XᵀX=4I₄` then proves full column rank.
- The A-page summary accurately distinguishes deterministic design orthogonality from response-error assumptions and does not assert additivity or zero interactions. The B-page summary matches both calculations, including retained full rank under the specified unequal replication.

### Source check

- NIST/SEMATECH, [§5.3.3.3.1, “Two-level full factorial designs”](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3331.htm), lines 9–27 describes the `2^k` full design and coded levels; line 46 states the orthogonality property for full factorial designs.
- NIST/SEMATECH, [§5.3.3.3.2, “Full factorial example”](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3332.htm), lines 20–23 gives the `2^k` combinations and full-model coefficient context; lines 38–39 discuss replication and variance homogeneity.
- Oehlert, [*A First Course in Design and Analysis of Experiments*, Ch. 8, §§8.5–8.6](https://users.stat.umn.edu/~gary/book/fcdae.pdf), PDF pp. 175–181 (source lines 7924–8057, 8108–8188), presents the balanced factorial model, effect estimators, and balanced-factorial ANOVA. Its model assumes independent normal mean-zero errors, a narrower case than the assigned variance theorem; the theorem's broader claim is established by its local proof. The citation is relevant and its narrower assumptions do not contradict the item.

## Edits and unresolved defects

No item or page prose was edited. No confirmed defect requiring repair or escalation was found. No defect outside edit scope remains. Since no item changed, reflow, precheck, and proof-layout were not run.

## Page verdicts

- `full-factorial-contrasts-and-interactions` (A): **pass**. Page summary and caveats are supported by the assigned definition and theorems.
- `full-factorial-contrasts-and-interactions-examples` (B): **pass**. Summary is supported by the two checked computations.

## Coverage note and blocker

All assigned page and item files and the direct supplier results invoked by their proofs were reviewed, along with the relevant independence and expectation/variance definitions. I did not independently re-audit the complete transitive foundational proof closures behind published measure, integration, and linear-algebra suppliers; those explicitly stated published results were used at their cited interfaces. The live run status command reported the run as `running`, with stage `3a-read` counting and no reader artifacts yet; there is no mathematical blocker for this batch.
