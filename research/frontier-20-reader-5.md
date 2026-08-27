# frontier-20 reader-5

Date: Wednesday, August 26, 2026.

## Opened scope

- Batch artifacts:
  `research/frontier-20-batch-5.pages.json`,
  `research/frontier-20-batch-5.coverage.json`,
  `research/frontier-20-batch-5.proof-contracts.json`,
  and `research/frontier-20-batch-5.notes.md`.
- Assigned page files:
  `library/number-theory/regular-continued-fractions-and-diophantine-approximation.md`,
  `library/number-theory/regular-continued-fractions-and-diophantine-approximation-examples.md`.
- Assigned item files (27):
  `def-regular-continued-fraction`,
  `def-convergents-of-regular-continued-fraction`,
  `lem-continued-fraction-convergent-recurrence`,
  `lem-continued-fraction-determinant-identity`,
  `cor-continued-fraction-convergents-are-reduced`,
  `def-continued-fraction-complete-quotients`,
  `lem-continued-fraction-complete-quotient-formula`,
  `thm-convergence-of-infinite-regular-continued-fractions`,
  `thm-continued-fraction-algorithm-for-real-numbers`,
  `thm-rational-continued-fraction-termination`,
  `thm-normalized-finite-continued-fraction-uniqueness`,
  `lem-continued-fraction-error-bound`,
  `thm-continued-fraction-convergents-are-best-approximations`,
  `thm-legendre-continued-fraction-criterion`,
  `def-quadratic-irrational`,
  `def-eventually-periodic-continued-fraction`,
  `lem-periodic-continued-fraction-is-quadratic`,
  `lem-quadratic-irrational-complete-quotients-are-finite-state`,
  `thm-lagrange-periodic-continued-fraction-theorem`,
  `ex-two-finite-continued-fractions-for-a-rational`,
  `ex-continued-fraction-and-extended-euclid`,
  `ex-continued-fraction-of-square-root-two`,
  `ex-continued-fraction-of-square-root-fourteen`,
  `ex-golden-ratio-as-a-periodic-continued-fraction`,
  `ex-best-rational-approximations-to-pi`,
  `cex-an-excellent-approximation-at-the-legendre-boundary`,
  `ex-a-negative-real-continued-fraction`.
- Dependency item files opened for claim verification (11):
  `def-complete-ordered-field`,
  `def-rat-operations`,
  `def-rationals`,
  `def-real-numbers`,
  `lem-nat-embeds-int`,
  `thm-bezout-identity`,
  `thm-division-algorithm-in-z`,
  `thm-induction-principle`,
  `thm-of-archimedean`,
  `thm-recursion`,
  `thm-well-ordering-principle`.
- Additional page dependency opened:
  `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction-examples.md`.
- Source cross-checks used during repair:
  Bruce Ikenaga, "Periodic Continued Fractions";
  William Stein, *Elementary Number Theory*, Theorem 5.5.5 and surrounding proof.

## Repairs

1. `items/thm-rational-continued-fraction-termination.md`
   Defect: the descent step claimed `u_{n+1}=v_n<u_n` for every nonintegral complete quotient, which is false at the initial index for negative rationals.
   Repair: restricted the descent to `n>=1`, cited the fact that later complete quotients are `>1`, proved the reduced-form transition `v_n/r_n`, and moved the termination argument onto the positive numerator chain `u_1,u_2,...`.

2. `items/thm-continued-fraction-convergents-are-best-approximations.md`
   Defect: the consequence for ordinary rational error compared `|s alpha-r|` and `|q_n alpha-p_n|` by dividing through by `s q_n`, which does not yield the claimed inequality on `|alpha-r/s|` and `|alpha-p_n/q_n|`.
   Repair: replaced that step with the direct contradiction
   `|s alpha-r| = s|alpha-r/s| < s|alpha-p_n/q_n| <= |q_n alpha-p_n|`.

3. `items/lem-periodic-continued-fraction-is-quadratic.md`
   Defect: the prior proof treated "infinite regular continued fraction" as enough to conclude irrationality from the rational-termination theorem, which does not by itself rule out a different infinite expansion of the same value.
   Repair: shifted the repeating tail to start at an index `N>=1`, proved the tail irrational from the nonsquare discriminant of its fixed-point quadratic, and then proved the whole value irrational by inverting the linear-fractional prefix map with the determinant identity.

4. `items/lem-quadratic-irrational-complete-quotients-are-finite-state.md`
   Defect: the prior statement/proof overclaimed a universal positive-denominator `(P_n + sqrt(D))/Q_n` normal form with uniform `|P_n|` and `Q_n` bounds, and the written proof skipped the actual integrality/divisibility work. A direct counterexample family exists for the positive-denominator claim, e.g. the quadratic irrational
   `alpha = (10 + sqrt(5))/95`, whose first complete quotient is `10 - sqrt(5)`.
   Repair: narrowed the statement to the finite-state claim actually used downstream, and reproved it via the Stein fixed-discriminant argument: every later complete quotient satisfies an integer quadratic with the same discriminant, the coefficients `A_n` are uniformly bounded via the convergent error term, and hence only finitely many quadratics, and therefore finitely many complete quotients, can occur.

## Contract sync

- Regenerated the affected proof-contract entries in
  `research/frontier-20-batch-5.proof-contracts.json` for:
  `thm-rational-continued-fraction-termination`,
  `thm-continued-fraction-convergents-are-best-approximations`,
  `lem-periodic-continued-fraction-is-quadratic`,
  `lem-quadratic-irrational-complete-quotients-are-finite-state`,
  `thm-lagrange-periodic-continued-fraction-theorem`,
  and `ex-continued-fraction-of-square-root-fourteen`.
- No touched item carried a `verification.judge` block, so no stale judge record needed removal.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the four changed items: unchanged on the final pass.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four changed items: `4 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-20-batch-5.proof-contracts.json --strict`: `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-20-batch-5.proof-contracts.json --fail-on-missing-quote`: `56 citation(s)`, no missing quotes, no widening candidates.
- `node tools/rendercheck.mjs` on the four changed items: clean.
- `node tools/content-policy.mjs research/frontier-20-batch-5.pages.json`: `27 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; only the repository's standing unrelated `redundant-prereq` notes remain.
- `node tools/boundary-audit.mjs research/frontier-20-batch-5.proof-contracts.json --fail-on-contradicted --fail-on-template` still emits the pre-existing heuristic template/zero-axis candidates on untouched rows. I re-read those candidates and did not confirm a live contract defect from them.

## Page verdicts

- `regular-continued-fractions-and-diophantine-approximation` (A): sufficient after the four repairs above.
- `regular-continued-fractions-and-diophantine-approximation-examples` (B): sufficient as written; no B-page body or example item needed repair.

## Notes and blockers

- The batch manifest still carries the spec-owned page prerequisite `positive-definite-binary-quadratic-forms-and-reduction-examples`. The current on-disk item closure for batch 5 does not use that page, but I left the manifest edge unchanged because this dispatch only permits item/A-page repair and the edge is inherited from plan-level scaffolding rather than from a live item proof.
- No uneditable mathematical defect remains in the assigned items, assigned page prose, or opened published dependencies.
- No blocker remains.
