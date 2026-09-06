# Step 6a reader report — frontier-31a batch 3

## Scope opened

- A page: `library/functional-analysis/geometric-hahn-banach-and-convex-separation.md`.
- B page: `library/functional-analysis/geometric-hahn-banach-and-convex-separation-examples.md`.
- A items: `def-absorbing-balanced-and-absolutely-convex-set`,
  `def-minkowski-functional`, `lem-minkowski-functional-is-sublinear`,
  `lem-balanced-gauge-is-a-seminorm`,
  `lem-open-convex-set-recovered-from-its-gauge`,
  `def-weak-and-strict-separation`,
  `thm-separation-of-an-open-convex-set-and-a-point`,
  `thm-separation-of-disjoint-convex-sets-one-open`,
  `thm-strong-separation-of-closed-and-compact-convex-sets`,
  `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces`,
  `def-continuous-annihilator-of-a-subspace`,
  `thm-geometric-hahn-banach-for-subspaces`,
  `cor-annihilator-detects-closure`,
  `cor-density-characterised-by-annihilator-zero`,
  `cor-finite-dimensional-subspaces-are-complemented`,
  `cor-finite-codimensional-subspaces-are-complemented`,
  `def-linear-hyperplane`,
  `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals`, and
  `thm-mazur-weak-and-norm-closure-of-convex-sets`.
- B items: `ex-gauges-of-norm-balls-and-ellipsoids`,
  `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm`,
  `cex-two-closed-convex-sets-need-not-be-strongly-separated`,
  `ex-distance-to-a-subspace-via-annihilating-functionals`,
  `def-c-zero-and-ell-infinity`,
  `lem-c-zero-is-a-closed-subspace-of-ell-infinity`,
  `lem-uncountable-almost-disjoint-family-on-natural-numbers`,
  `lem-quotient-by-c-zero-has-no-countable-separating-family`,
  `thm-c-zero-is-not-complemented-in-ell-infinity`,
  `ex-a-closed-uncomplemented-subspace`, and
  `rem-two-results-called-mazurs-lemma`.

I also opened each direct dependency declared by these items:
`def-norm-and-normed-space`, `rem-real-and-complex-normed-space-convention`,
`def-dual-space-of-a-normed-space`, `thm-hahn-banach-dominated-extension`,
`lem-real-part-determines-a-complex-linear-functional`,
`lem-distance-to-set-is-lipschitz`, `thm-extreme-value-metric`,
`def-metric-compactness`, `def-metric-topology`, `def-linear-subspace`,
`thm-norm-preserving-extension-from-any-subspace`,
`thm-metric-closure-characterisation`, `def-normed-subspace`,
`thm-coordinate-map-for-a-finite-dimensional-normed-space`,
`cor-finite-dimensional-subspaces-are-closed`, `def-complemented-subspace`,
`thm-complemented-subspace-iff-range-of-a-bounded-projection`,
`def-quotient-seminorm`,
`thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed`,
`def-quotient-vector-space-coset-notation`, `def-dimension`,
`thm-derivative-of-exponential`, `cor-differentiable-implies-continuous`,
`thm-exponential-two-point-convexity`, `thm-exponential-is-strictly-increasing`,
`def-sequence`, `cor-irrationals-uncountable`,
`lem-q-and-irrationals-dense-r`, `thm-rationals-countable`,
`thm-well-ordering-principle`, `def-countable`, and
`thm-countable-union-of-countable`. The dependency closures needed for the
current proof steps were checked rather than inferred from their contracts.

The batch manifest, coverage and notes, and its 23 proof contracts were opened.
The source metadata in `research/frontier-31a-batch-3.coverage.json` identifies
the consulted functional-analysis locators: [Buehler--Salamon
§§2.3.3--2.3.5](https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf),
printed pp. 76--87; [Teschl §§5.1 and
5.3](https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html),
printed pp. 137--148; [Knapp IV §5](https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf),
pp. 125--128; and [Hajlasz
§10.5](https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf),
pp. 94--98. The current item proofs and declared dependencies supplied the
mathematical verification here.

## Repairs

- `thm-strong-separation-of-closed-and-compact-convex-sets`: replaced the false
  assertion that a general bounded functional has a norm-maximising direction
  with the valid supremum argument on the open ball.  Updated its proof-contract
  step 3.1.
- `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces`: restricted
  the statement to nonempty closed convex sets, the scope needed by its proof,
  and corrected the first inclusion explanation.  This avoids the empty-set
  boundary failure in the zero normed space.
- `thm-mazur-weak-and-norm-closure-of-convex-sets`: replaced the false claim
  that every weak neighbourhood is norm-open with the correct basic-open-set
  argument; split out the empty-convex-set case; and replaced a second
  norm-attainment assertion with a supremum argument.  Updated matching contract
  steps.  Quoted the colon-bearing YAML title so the renderer no longer drops
  the item.
- `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm`: closed the inline math
  span before its dependency link.
- `def-c-zero-and-ell-infinity`: made the display formula a single physical
  line, as required by the renderer.

No affected item carried a stale `verification.judge` record.

## Mathematical review and verdicts

- A page: pass after repair.  The gauge identities preserve the real/complex
  scalar distinction; the separation arguments use real parts correctly; the
  compact-versus-closed separation proof now takes a supremum rather than
  assuming norm attainment; the subspace, quotient, hyperplane, and Mazur
  arguments preserve their nonempty and closure hypotheses.
- B page: pass after repair.  The gauge examples and counterexamples compute the
  stated infima correctly.  The zero-distance obstruction to strong separation,
  annihilator distance formula, almost-disjoint construction, quotient dual
  obstruction, and conditional Phillips proof are consistent with their stated
  hypotheses, including $\mathrm{AC}_\omega$.

## Validation

- Reflow and focused precheck passed for every changed proof-bearing item.
- Scoped precheck: 23 proof-bearing items, 0 failures.
- Scoped renderer check: 30 items, 0 errors; both assigned pages also passed.
- `proof-contract --strict`: 23/23, 0 errors and 0 warnings.
- `content-policy`: 30 scoped items, 0 errors and 0 warnings.
- Repository dependency check completed successfully.
- `git diff --check`: clean.

## Uneditable defects and blockers

None.  All confirmed defects were within the authorized in-flight item scope
and have been repaired.  No published dependency defect was found.
