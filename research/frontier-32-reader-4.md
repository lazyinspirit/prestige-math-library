# Frontier 32 reader report — batch 4

## Scope opened

I independently read the current batch manifest, both assigned functional-analysis
pages, and all 21 assigned items:

- A page the-baire-principles-of-functional-analysis: thm-uniform-boundedness-principle, thm-banach-steinhaus-dichotomy, cor-pointwise-limit-of-bounded-operators-is-bounded, lem-sokal-local-operator-norm-lower-bound, thm-sokal-gliding-hump-uniform-boundedness, lem-open-mapping-ball-closure-step, lem-open-mapping-successive-approximation, thm-open-mapping-theorem, cor-open-mapping-quantitative-form, thm-bounded-inverse-theorem, def-graph-of-a-linear-operator, thm-closed-graph-theorem, def-closable-linear-operator, thm-closability-sequential-criterion, cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous, and cor-equivalent-complete-norms-from-one-sided-comparison.
- B page the-baire-principles-of-functional-analysis-examples: ex-condensation-of-singularities, cex-uniform-boundedness-fails-on-an-incomplete-domain, cex-open-mapping-fails-without-completeness, cex-closed-graph-fails-without-completeness, and ex-a-closed-unbounded-differential-operator.

I also opened the direct dependency targets needed for those arguments:
the bounded-operator and operator-norm definitions; Banach, Baire-category,
countable-choice, dependent-choice, metric-closure, Banach-series, bounded
linear-operator equivalence, linear-subspace, product-norm, closed-subspace,
finite-product, bounded-bilinear, bounded-bilinear-equivalence,
equivalent-norm, integral-function, continuous-implies-integrable, and
Newton--Leibniz items. In particular, the bilinear conclusion was checked
against thm-bounded-bilinear-map-equivalences, rather than treating the
linear-operator theorem as applicable to a bilinear map.

For source claims I opened the cited complete sources, including Sokal,
_A Really Simple Elementary Proof of the Uniform Boundedness Theorem_, PDF
pp. 1--2 (lemma and gliding-hump construction); Bühler--Salamon,
_Functional Analysis_, Chapter 2; and Teschl, _Topics in Real and Functional
Analysis_, §4.1. Sokal’s stated construction selects operators with norms at
least 4^n, uses increments of size 3^-n, and obtains the
(1/6)(4/3)^n lower bound; those exact constants were used in the repair.

## Repairs made

All repairs were confined to assigned in-flight items, the assigned batch-4
manifest, and its proof-contract worksheet. No A/B page prose, published item,
other batch, or plan file was changed.

1. lem-sokal-local-operator-norm-lower-bound now supplies the stronger
   intermediate lower bound needed by the companion gliding-hump construction.
   Its displayed theorem remains the original valid r times operator-norm over
   4 conclusion.
2. thm-sokal-gliding-hump-uniform-boundedness replaced an asserted
   “after allowing for all later error terms” construction with Sokal’s explicit
   4^n, 3^-n, geometric-tail proof. The final lower bound is now derived and
   contradicts pointwise boundedness.
3. thm-banach-steinhaus-dichotomy and the batch manifest now declare its
   actual use of thm-uniform-boundedness-principle.
4. thm-open-mapping-theorem now proves openness locally at an arbitrary image
   point, rather than incorrectly inferring it merely from images of a union
   of balls.
5. thm-bounded-inverse-theorem now scales a point strictly inside the open
   output ball; the prior point was at the unlicensed boundary.
6. def-graph-of-a-linear-operator now names the maximum product norm, so
   “closed graph” has a definite ambient norm topology.
7. cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous
   now cites and declares the applicable published bilinear boundedness/joint
   continuity theorem; the previous linear-operator equivalence did not have
   the asserted bilinear conclusion.
8. cex-open-mapping-fails-without-completeness now proves incompleteness of
   both normed-space structures named in its title, using the ell-one partial
   sums of (2^-k).

The repaired proof-bearing items have strict entries in the batch-4
proof-contract worksheet. No changed item carried a stale verification.judge
record to remove.

## Verification

- Reflow ran on every changed item.
- Focused precheck passed for all seven proof-bearing changed items; the
  changed definition is non-proof-bearing.
- Proof-contract strict validation passed: 6/6 contracted repaired proof items.
- Manifest dependency validation passed: 21 items, 0 errors.
- Plan validation passed.
- Git diff check passed.

The repository-wide depcheck remains blocked by 13 pre-existing, out-of-scope
errors (malformed YAML escapes in three unrelated items and an unresolved t link
in def-jantzen-deformation-and-filtration-of-a-verma-module), plus unrelated
legacy warnings. It reports no batch-4-specific error and does not affect the
focused results above.

## Verdicts

| Page | Verdict |
| --- | --- |
| the-baire-principles-of-functional-analysis | Pass after the repaired Sokal, open-mapping, inverse, graph-definition, and dependency-accounting defects. |
| the-baire-principles-of-functional-analysis-examples | Pass after the repaired incomplete-space counterexample; its B-page prose was read and left unchanged. |

No uneditable defect remains in the assigned scope. The structured findings
artifact therefore has an empty findings array.
