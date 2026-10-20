# Step 3a reader report — batch 42

Run: machine-learning-all-101-2026-10-19  
Role: reader-42  
Scope: batch 42 only

## Opened inventory

Assigned pages:

- library/machine-learning/adaptive-gradient-optimizers.md
- library/machine-learning/adaptive-gradient-optimizers-examples.md

Assigned items, reviewed in dependency order:

- alg-rmsprop
- alg-adam
- alg-amsgrad
- lem-geometric-polynomial-decay
- lem-clipped-negative-prefix-positive-suffix
- lem-adaptive-moment-updates-well-defined
- lem-amsgrad-one-step-regret-inequality
- lem-amsgrad-momentum-energy-bound
- thm-adam-online-regret-counterexample
- thm-amsgrad-online-convex-regret
- ex-adam-fixed-epsilon-online-regret-counterexample
- ex-amsgrad-historical-maximum
- ex-amsgrad-constant-beta-outside-decaying-schedule

I also opened the batch proof-contract records and cross-batch dependency record as evidence, and checked their claims against the current authored items. The 32 direct published item dependencies opened for the claims and proof steps were:

def-euclidean-inner-product, thm-of-square-roots, lem-of-square-positive, lem-of-zero-mult, def-ordered-field, lem-of-sign-rules, cor-cauchy-reals-lub-complete, def-natural-numbers, def-max-min, lem-finite-set-has-max, def-interval, def-convex-subset-of-euclidean-space, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, def-integer-power, thm-induction-principle, def-complete-ordered-field, lem-of-inverse-positive, thm-of-archimedean, lem-geometric-sequence-null, def-finite-sum, lem-finite-sum-laws, lem-of-square-monotone, thm-cauchy-schwarz-and-the-euclidean-norm, def-subgradient-and-subdifferential, def-convex-and-strictly-convex-functions-on-euclidean-sets, def-limsup-liminf, def-sequence, lem-algebra-of-continuous-real-maps-on-a-space, def-abs-value, lem-of-abs-value, def-metric-continuity, and lem-real-line-is-a-metric-space.

For cited convention comparisons, I also opened alg-adam-update, alg-amsgrad-update, and cex-adam-periodic-linear-losses-force-divergence. The assigned A-page prerequisites were opened at library/machine-learning/stochastic-gradient-descent-for-learning.md and library/numerical-optimization-inverse-problems-and-uncertainty-quantification/variance-reduced-finite-sum-and-adaptive-gradient-optimization.md.

## Mathematics and presentation review

The three algorithm definitions state their inputs, parameter ranges, update order, outputs, and special cases. The AMSGrad zero-coordinate convention and minimizer existence are established by lem-adaptive-moment-updates-well-defined. The geometric-decay and clipping lemmas supply the prerequisites used by the Adam counterexample.

The Adam theorem's two constructions use the stated uncorrected update and clipped iterates. The zero-epsilon branch keeps every denominator positive, makes the per-period moment and increment estimates explicit, and obtains positive cumulative drift. The fixed-epsilon branch uses the stated parameter values and proves a positive cycle drift before deriving the best-comparator lower bound. The two examples accurately instantiate the theorem or compute the raw historical maximum.

The AMSGrad one-step inequality handles singular coordinate weights using the stated zero convention. The momentum-energy estimate bounds the accumulated coordinatewise terms. In the regret theorem, the potential coefficients are paired with their preceding terms, the nonmonotone first-moment schedule is accounted for in the correction term, and the two listed schedules give the stated square-root order. The final example lower-bounds the theorem's correction term and explicitly makes no claim about actual regret.

The assigned Statement, Definition, and Example sections contain no inline hyperlinks; their links are placed in the following references sections. The assigned pages have empty Markdown bodies and retain page_layout: compact-v1. No TikZ or tikzcd diagrams occur in the assigned pages or items.

Primary sources checked for the cited algorithm conventions and arguments:

- Reddi, Kale, and Kumar, On the Convergence of Adam and Beyond: §2, Algorithms 1–2, Theorem 4, Appendix B, Appendix D, and Appendix F ([PDF](https://arxiv.org/pdf/1904.09237)). Algorithm 1's analysis explicitly removes Adam bias correction; Algorithm 2 takes a running maximum of the raw second moment; Appendix F treats the inside-root regularizer.
- Kingma and Ba, Adam: A Method for Stochastic Optimization: Algorithm 1 and §§2–3 ([PDF](https://arxiv.org/pdf/1412.6980)). This confirms the bias-corrected moments and denominator convention used by the published comparison algorithm.
- Bottou, Curtis, and Nocedal, Optimization Methods for Large-Scale Machine Learning: RMSprop update, pp. 65–66 ([PDF](https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf)).
- Hazan, Introduction to Online Convex Optimization, §5.6.1, pp. 114–116 ([PDF](https://arxiv.org/pdf/1909.05207)).

## Edits and validation

No assigned item or page needed repair. No item files changed, so I did not run reflow, precheck, or proof-layout.

## Findings outside write scope

The published dependencies listed below have inline wikilinks in their complete Statement or Definition sections. The current statement-first rule requires those links to be moved after the complete section into its references section. These carriers are published and outside this batch's write scope, so they are recorded in the findings JSON.

| Published dependency | Assigned consumer | Location | Evidence |
|---|---|---|---|
| def-euclidean-inner-product | alg-rmsprop | ## Definition | Inline links include [[def-natural-numbers]], [[def-function-space]], and [[thm-of-square-roots]]. |
| thm-of-square-roots | alg-rmsprop | ## Statement | The hypothesis includes inline [[def-complete-ordered-field]]. |
| lem-of-square-positive | alg-rmsprop | ## Statement | The hypothesis includes inline [[def-ordered-field]]. |
| lem-of-zero-mult | alg-rmsprop | ## Statement | The hypothesis includes inline [[def-field]]. |
| def-ordered-field | alg-rmsprop | ## Definition | The opening definition includes inline [[def-field]]. |
| lem-of-sign-rules | alg-rmsprop | ## Statement | The hypothesis includes inline [[def-ordered-field]]. |
| cor-cauchy-reals-lub-complete | alg-rmsprop | ## Statement | The statement includes inline [[def-complete-ordered-field]] and [[thm-reals-ordered-field]]. |
| def-natural-numbers | alg-adam | ## Definition | The definition includes inline links to [[def-inductive-set]] and [[lem-omega-smallest-inductive]]. |
| def-max-min | alg-adam | ## Definition | The order explanation includes inline [[def-ordered-field]] and [[def-complete-ordered-field]]. |
| lem-finite-set-has-max | alg-adam | ## Statement | The statement section includes inline [[def-max-min]] and [[lem-finite-subsets-listable]]. |
| def-interval | alg-adam | ## Definition | The definition includes inline links to ordered-field, bounded-set, and supremum conventions. |
| def-convex-subset-of-euclidean-space | alg-amsgrad | ## Definition | The definition includes inline [[def-interval]]. |
| def-integer-power | lem-geometric-polynomial-decay | ## Definition | The definition contains multiple inline links, including [[def-ordered-field]], [[thm-recursion]], and [[lem-power-laws]]. |
| def-complete-ordered-field | lem-geometric-polynomial-decay | ## Definition | The opening definition includes inline [[def-ordered-field]]. |
| lem-of-inverse-positive | lem-geometric-polynomial-decay | ## Statement | The hypothesis includes inline [[def-ordered-field]]. |
| thm-of-archimedean | lem-geometric-polynomial-decay | ## Statement | The statement includes inline [[def-complete-ordered-field]] and [[def-ordered-field]]. |
| lem-geometric-sequence-null | lem-geometric-polynomial-decay | ## Statement | The statement and its qualification contain inline links such as [[def-integer-power]], [[def-real-limit]], and [[lem-bernoulli-inequality]]. |
| def-finite-sum | lem-clipped-negative-prefix-positive-suffix | ## Definition | The definition contains inline links to natural-number, recursion, and finite-sum dependencies. |
| lem-finite-sum-laws | lem-clipped-negative-prefix-positive-suffix | ## Statement | The statement includes inline [[def-finite-sum]], [[lem-of-q-embeds]], and [[lem-of-naturals-positive]]. |
| thm-cauchy-schwarz-and-the-euclidean-norm | lem-adaptive-moment-updates-well-defined | ## Statement | The statement contains inline links to the inner-product definition, norm definition, and metric result. |
| def-subgradient-and-subdifferential | lem-amsgrad-one-step-regret-inequality | ## Definition | The definition contains inline links to convex-function and inner-product definitions. |
| def-convex-and-strictly-convex-functions-on-euclidean-sets | thm-adam-online-regret-counterexample | ## Definition | The definition contains inline [[def-convex-subset-of-euclidean-space]] and [[def-interval]]. |
| def-limsup-liminf | thm-adam-online-regret-counterexample | ## Definition | The definition contains inline links to sequence and extended-real definitions/results. |
| def-sequence | thm-adam-online-regret-counterexample | ## Definition | The definition contains inline links to real-order, natural-number, and real-limit definitions. |
| def-abs-value | ex-amsgrad-constant-beta-outside-decaying-schedule | ## Definition | The definition contains inline [[def-ordered-field]]. |
| lem-of-abs-value | ex-amsgrad-constant-beta-outside-decaying-schedule | ## Statement | The statement contains inline [[def-ordered-field]] and [[def-abs-value]]. |
| def-metric-continuity | ex-amsgrad-constant-beta-outside-decaying-schedule | ## Definition | The definition contains inline links to metric-space, metric-ball, and equivalent-metric definitions. |
| lem-real-line-is-a-metric-space | ex-amsgrad-constant-beta-outside-decaying-schedule | ## Statement | The statement contains inline links to absolute-value, metric-space, interval, and metric-topology definitions. |

## Page verdicts

- adaptive-gradient-optimizers: Pass. The A page has only frontmatter, the ten assigned items match the manifest, and both declared prerequisite pages exist. No page prose or summary needs repair.
- adaptive-gradient-optimizers-examples: Pass. The B page has only frontmatter, its three examples match the manifest, and it requires the assigned A page. No page prose or summary needs repair.

## Blocker and coverage limit

There is no blocker to completing this reader review. The 28 published-dependency formatting findings are outside the authorized write scope and require routing to their owners. I reviewed the direct dependency Statement/Definition sections as used by this batch, but did not re-audit every published dependency proof or every deeper transitive foundational proof.
