# format-10 repair report

Run: `machine-learning-all-101-2026-10-19`. Scope: the 25 suppliers in `assignment.json`; 47 presentation alerts. All 47 confirmed and repaired in candidate files only. No false alerts. One review/repair cycle; no second cycle needed.

The complete Statement or Definition (including level-three subsections and explanatory paragraphs) retains all original text except replacing wikilinks with their explicit alias or current target title. Each distinct original link is collected, in first-occurrence order, in the immediately following correctly named references section, one source line and one blank-separated paragraph per link. Repeated links remain represented once. Full target titles can read awkwardly in existing sentences; they are retained exactly to preserve the required rendered labels without paraphrase.

## Frozen evidence

- `before/items/`: exact current preimages, checked against every assignment raw SHA256.
- `candidate/items/`: proposed repairs; no live item edits.
- `inventory.json`: before/candidate SHA256, link counts, references, and alert coordinates.
- `comparison.json`: independently reconstructed comparison of each candidate against its preimage, plus exact title labels and source hashes for referenced targets.
- `proof-layout.json`: actual isolated-temporary-tree command, stdout, stderr and exit code.
- `SHA256SUMS`: frozen inventory of assignment, preimages, candidates and comparison/check evidence.

## Semantic and consumer impact

Independent comparison confirmed exact frontmatter and non-primary-section byte equality for all 25 candidates, including Facts & Assumptions, proofs, hypotheses outside the primary section, dependency metadata, verification/repair stamps and status. Primary sections equal the original rendered-label text, with only link markup removed. All mathematical formula text outside substituted title labels is untouched; all logical suppliers remain in metadata and references. Thus no Statement/Definition mathematical meaning changes and no direct or indirect consumer repair obligations are triggered. No consumer files were changed or checked; the owner retains integration and actual gates.

No engine control, native gate, corpus validator, digest, attempt, Step3 closure, publication, push, or ownership claim operation was performed. Existing published repair records, including `thm-of-square-roots`, remain intact. This is a presentation repair, not a new mathematical audit.

## Validation

After the final candidate edit, explicit candidate-only `node tools/proof-layout.mjs` ran against copies in an isolated temporary tree: exit 0; `proof-layout: 25 items, 103 steps, 0 defects`. Source hashes were checked again during the independent comparison.

## Exact alert dispositions

### cor-archimedean-reciprocal

- Batch 2, group a, alert index 14: **confirmed; repaired**. Exact finding: cor-archimedean-reciprocal contains '([[def-complete-ordered-field]])', '([[thm-of-archimedean]])', '([[def-field]])' and another Archimedean-theorem link inside Statement. They belong after the complete statement in Statement references.
- Batch 62, group u, alert index 16: **confirmed; repaired**. Exact finding: cor-archimedean-reciprocal, Statement, contains '[[def-complete-ordered-field]]' within its opening hypothesis and additional inline links. This violates the uninterrupted-statement requirement.

### def-adjoint-of-a-linear-map-between-inner-product-spaces

- Batch 17, group f, alert index 0: **confirmed; repaired**. Exact finding: The Definition begins, “Let $V,W$ be inner product spaces ([[def-inner-product-space]]) over the same field and let $T:V\to W$ be linear ([[def-linear-map]]).” These two hyperlinks interrupt the defining section, contrary to the uninterrupted-statement requirement. There is no following Definition references section carrying them. The mathematical definition itself supports its CART use.
- Batch 19, group f, alert index 3: **confirmed; repaired**. Exact finding: The Definition begins “Let $V,W$ be inner product spaces ([[def-inner-product-space]]) over the same field and let $T:V\to W$ be linear ([[def-linear-map]]).” Both supplier hyperlinks occur inside the complete defining section instead of a following Definition references section.

### def-ck-and-multi-index-notation-in-several-variables

- Batch 93, group ae, alert index 0: **confirmed; repaired**. Exact finding: Its Definition contains inline supplier links, including “Coordinate partial derivatives have the meaning fixed in [[def-directional-and-partial-derivatives]].” Other links occur earlier in the same defining section. These interrupt the complete definition and have no immediately following Definition references section, contrary to the assigned uninterrupted-statement policy.

### def-convex-subset-of-euclidean-space

- Batch 42, group n, alert index 4: **confirmed; repaired**. Exact finding: Its Definition places '([[def-interval]])' immediately after the parameter interval. This inline link violates the required uninterrupted-definition presentation.
- Batch 75, group y, alert index 0: **confirmed; repaired**. Exact finding: def-convex-subset-of-euclidean-space, Definition: “t∈[0,1]$ ([[def-interval]])” contains an inline wikilink within the complete definition, contrary to the uninterrupted-definition rule.

### def-euclidean-inner-product

- Batch 42, group n, alert index 5: **confirmed; repaired**. Exact finding: Its Definition contains inline links including '([[def-natural-numbers]], [[lem-nat-order-is-membership]])' before the function-space formula, and further supplier links throughout its defining subsections. They are not moved after the complete Definition.
- Batch 69, group w, alert index 3: **confirmed; repaired**. Exact finding: def-euclidean-inner-product Definition contains inline supplier links before the inner-product formula, including “is the function space of [[def-function-space]]”, and further links throughout its defining clauses. They interrupt the Definition and have no immediately following Definition references section.
- Batch 40, group m, alert index 0: **confirmed; repaired**. Exact finding: The Definition contains inline links, including “n = {0, 1, …, n−1} ([[def-natural-numbers]], [[lem-nat-order-is-membership]])”. These interrupt the defining section and are not collected in an immediately following Definition references section, contrary to the uninterrupted-statement instruction.
- Batch 90, group ad, alert index 6: **confirmed; repaired**. Exact finding: def-euclidean-inner-product begins Definition with inline links “[[def-natural-numbers]]” and “[[lem-nat-order-is-membership]]”, and retains numerous further links throughout its defining section and level-three subsections. There is no intervening Definition references section; the complete definition violates the uninterrupted-section policy.
- Batch 39, group m, alert index 3: **confirmed; repaired**. Exact finding: def-euclidean-inner-product, Definition, contains '([[def-natural-numbers]], [[lem-nat-order-is-membership]])' before defining Rⁿ and embeds numerous further supplier links throughout the defining section. The required uninterrupted Definition and immediately following Definition references section are absent.
- Batch 75, group y, alert index 2: **confirmed; repaired**. Exact finding: def-euclidean-inner-product, Definition: “([[def-natural-numbers]], [[lem-nat-order-is-membership]])” and numerous later wikilinks occur inside the definition rather than an immediately following Definition references section.
- Batch 41, group n, alert index 3: **confirmed; repaired**. Exact finding: Its Definition contains numerous inline supplier links, beginning with “([[def-natural-numbers]], [[lem-nat-order-is-membership]])” and continuing through the norm and inner-product laws. These interrupt the complete defining section under the supplied policy.

### def-finite-real-random-variable-and-distribution

- Batch 46, group o, alert index 15: **confirmed; repaired**. Exact finding: The Definition ends its explanation of the distribution weights with '([[thm-finite-additivity-of-probability]])'. This hyperlink remains in the complete Definition instead of Definition references.

### def-hilbert-space

- Batch 51, group q, alert index 3: **confirmed; repaired**. Exact finding: def-hilbert-space, Definition: 'A real Hilbert space is a real inner-product space H ([[def-real-and-complex-inner-product-space]])' begins a definition containing several inline links before its complete conclusion.

### def-ito-integral-of-an-elementary-predictable-process

- Batch 1, group ah, alert index 2: **confirmed; repaired**. Exact finding: The published Definition states 'work under the standing hypothesis (H) of [[def-elementary-predictable-brownian-integrand]]' and embeds additional supplier links in its defining conventions. The complete Definition is interrupted by hyperlinks.

### def-martingale-submartingale-and-supermartingale

- Batch 89, group ad, alert index 6: **confirmed; repaired**. Exact finding: def-martingale-submartingale-and-supermartingale, Definition, contains “Assume AC [[def-axiom-of-choice]]” and inline links to def-adapted-and-integrable-stochastic-process and def-conditional-expectation-as-an-ae-class. The defining section is not hyperlink-free.
- Batch 91, group ad, alert index 5: **confirmed; repaired**. Exact finding: def-martingale-submartingale-and-supermartingale, Definition, starts 'Assume AC [[def-axiom-of-choice]].' It also embeds adapted-process and conditional-expectation wikilinks in the defining section, contrary to the uninterrupted-definition instruction.

### def-metric-continuity

- Batch 42, group n, alert index 11: **confirmed; repaired**. Exact finding: Its Definition opens 'be metric spaces ([[def-metric-space]])' and contains further inline links including '([[def-metric-ball]])'. They violate the required reference placement.

### def-nonnegative-extended-series

- Batch 76, group y, alert index 8: **confirmed; repaired**. Exact finding: Definition contains “([[def-extended-reals]])” in the opening domain and further inline links. These violate the uninterrupted-Definition rule.

### def-product-measure-on-sigma-finite-spaces

- Batch 62, group u, alert index 19: **confirmed; repaired**. Exact finding: def-product-measure-on-sigma-finite-spaces, Definition, contains '[[prop-sigma-finite-section-measure-functions-are-measurable]]' and '[[thm-iterated-section-measures-agree-on-product-measurable-sets]]' before its concluding definition sentence. This violates the uninterrupted-definition requirement.
- Batch 51, group q, alert index 6: **confirmed; repaired**. Exact finding: def-product-measure-on-sigma-finite-spaces, Definition: 'The two displayed integrals are well-defined by [[prop-sigma-finite-section-measure-functions-are-measurable]] and equal by [[thm-iterated-section-measures-agree-on-product-measurable-sets]]' precedes the final definition sentence. The links remain inside Definition.

### def-separable-space

- Batch 51, group q, alert index 8: **confirmed; repaired**. Exact finding: def-separable-space, Definition: 'dense in X ([[def-dense-top]], [[def-countable]])' places hyperlinks inside the definition before its equivalent formulation.

### def-subgradient-and-subdifferential

- Batch 42, group n, alert index 15: **confirmed; repaired**. Exact finding: Its Definition contains '([[def-convex-and-strictly-convex-functions-on-euclidean-sets]])' before defining a subgradient, and '[[def-euclidean-inner-product]]' after the subdifferential formula. Both links remain inside the Definition.
- Batch 75, group y, alert index 16: **confirmed; repaired**. Exact finding: def-subgradient-and-subdifferential, Definition: “([[def-convex-and-strictly-convex-functions-on-euclidean-sets]])” and “[[def-euclidean-inner-product]]” remain inline within the definition.

### lem-a-double-sum-over-finite-index-sets-may-be-interchanged

- Batch 88, group ac, alert index 6: **confirmed; repaired**. Exact finding: lem-a-double-sum-over-finite-index-sets-may-be-interchanged, Statement, describes its sums as those of “[[def-sum-over-a-finite-index-set]], carried by [[def-finite-sum]]” and includes other supplier links before the section ends. This violates uninterrupted-statement presentation.
- Batch 89, group ad, alert index 2: **confirmed; repaired**. Exact finding: lem-a-double-sum-over-finite-index-sets-may-be-interchanged, Statement, includes “[[def-sum-over-a-finite-index-set]], carried by [[def-finite-sum]]” and “This is not a clause of [[thm-sum-rule]].” These hyperlinks remain inside the complete Statement rather than a following Statement references section.

### lem-geometric-sequence-null

- Batch 42, group n, alert index 18: **confirmed; repaired**. Exact finding: Its Statement contains '([[def-integer-power]])', '([[def-real-limit]])' and '([[def-divergence-to-infinity]])' within the hypotheses and conclusions, plus further inline links before Facts. They violate the required uninterrupted-statement presentation.
- Batch 85, group ab, alert index 2: **confirmed; repaired**. Exact finding: The Statement contains “integer power ([[def-integer-power]])”, “([[def-real-limit]])”, and “([[def-divergence-to-infinity]])”, with additional supplier links before Facts & Assumptions. The complete Statement is interrupted by hyperlinks contrary to the uninterrupted-statements instruction.
- Batch 40, group m, alert index 15: **confirmed; repaired**. Exact finding: The Statement includes “the integer power ([[def-integer-power]])”, links defining null convergence and divergence, and “Bernoulli's inequality ([[lem-bernoulli-inequality]])”. These hyperlinks remain within the complete Statement rather than a following Statement references section.
- Batch 90, group ad, alert index 4: **confirmed; repaired**. Exact finding: lem-geometric-sequence-null contains “([[def-integer-power]])”, “([[def-real-limit]])”, and “([[def-divergence-to-infinity]])” inside Statement, with additional inline supplier links before that section ends. The complete statement is interrupted instead of followed by Statement references.
- Batch 39, group m, alert index 10: **confirmed; repaired**. Exact finding: lem-geometric-sequence-null, Statement, embeds 'integer power ([[def-integer-power]])', '([[def-real-limit]])', and '([[def-divergence-to-infinity]])', followed by additional linked suppliers. These hyperlinks remain in the Statement instead of an immediately following Statement references section.

### lem-of-square-positive

- Batch 42, group n, alert index 22: **confirmed; repaired**. Exact finding: Its Statement begins 'Let $F$ be an ordered field ([[def-ordered-field]])'. The inline link remains inside the Statement rather than a following references section.

### prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null

- Batch 64, group u, alert index 8: **confirmed; repaired**. Exact finding: prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, Statement, includes '([[def-countable-choice]])' before its two conclusions. This inline hyperlink violates the uninterrupted-statement instruction; no Statement references section follows the complete Statement.

### thm-cauchy-condensation

- Batch 76, group y, alert index 19: **confirmed; repaired**. Exact finding: Statement contains “a family from $1$ ([[def-series]])” and further inline links. These violate the uninterrupted-Statement rule.

### thm-elbo-kl-decomposition

- Batch 97, group af, alert index 4: **confirmed; repaired**. Exact finding: The Statement begins “Let $\mu,\gamma,Z,\pi,q$ satisfy [[def-variational-family-and-elbo]]”. The inline supplier hyperlink interrupts the Statement, contrary to the supplied uninterrupted-statement instruction.
- Batch 66, group v, alert index 8: **confirmed; repaired**. Exact finding: The Statement begins “Let ... satisfy [[def-variational-family-and-elbo]]” before presenting its identity and inequality. The supplier hyperlink interrupts the complete proposition and has no following Statement references placement.

### thm-glm-general-link-score-and-information

- Batch 14, group e, alert index 4: **confirmed; repaired**. Exact finding: thm-glm-general-link-score-and-information begins Statement with “Consider [[def-generalized-linear-model]]” and places “from [[def-glm-observation-family]]” in its regularity hypotheses. These hyperlinks interrupt the theorem statement instead of appearing after the complete statement in Statement references.

### thm-ito-integral-process-has-a-continuous-martingale-version

- Batch 1, group ah, alert index 5: **confirmed; repaired**. Exact finding: The published Statement embeds '[[def-ito-integral-for-square-integrable-predictable-processes]]' after its integral identity, as well as inline filtration, martingale and indistinguishability links. The links occur within the complete Statement rather than a following references section.

### thm-monotone-convergence

- Batch 86, group ac, alert index 10: **confirmed; repaired**. Exact finding: thm-monotone-convergence, Statement, introduces its sequence with '([[def-sequence]])' and places links to def-monotone-sequence, def-bounded-set, and def-real-limit inside conclusion 1, before conclusion 2 and the remaining qualifications. These links interrupt the complete Statement rather than following it in Statement references.

### thm-of-square-roots

- Batch 42, group n, alert index 27: **confirmed; repaired**. Exact finding: Its Statement begins 'Let $F$ be a complete ordered field ([[def-complete-ordered-field]])'. The supplier link interrupts the Statement and no following Statement references section carries it.
- Batch 76, group y, alert index 32: **confirmed; repaired**. Exact finding: Statement contains “Let $F$ be a complete ordered field ([[def-complete-ordered-field]])”. The hyperlink interrupts its complete Statement.
- Batch 99, group ag, alert index 7: **confirmed; repaired**. Exact finding: The Statement begins “Let F be a complete ordered field ([[def-complete-ordered-field]])”. This inline supplier link interrupts the theorem statement; no Statement references section follows.
- Batch 75, group y, alert index 8: **confirmed; repaired**. Exact finding: thm-of-square-roots, Statement: “complete ordered field ([[def-complete-ordered-field]])” contains an inline hyperlink within the statement.
- Batch 41, group n, alert index 5: **confirmed; repaired**. Exact finding: Its Statement begins “Let F be a complete ordered field ([[def-complete-ordered-field]])”. This inline hyperlink interrupts the Statement and is not moved to a following Statement references section.

### thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison

- Batch 22, group g, alert index 1: **confirmed; repaired**. Exact finding: The published item's Statement, clause 1, says “where $\lVert\cdot\rVert_2$ is the operator norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]].” This hyperlink interrupts the Statement and has not been moved to an immediately following Statement references section, as required. The Frobenius singular-value formula cited by the owned PCA proof is sound.

## Remaining issues

No unresolved assigned presentation alerts or candidate validation defects. No mathematical corrections proposed. The report asserts preservation and scoped presentation validation only.
