---
id: rem-active-label-complexity-and-noisy-oracles
kind: remark
title: "Exact labels, slow version-space shrinkage, and abstention limits"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-finite-pool-version-space-query
  - def-natural-logarithm
  - def-pool-based-realizable-active-learning
  - def-population-and-empirical-risk
  - def-realizable-and-agnostic-pac
  - def-supervised-learning-problem
  - lem-population-and-empirical-risk-are-measurable
  - thm-active-version-space-invariant-and-query-bound
  - thm-disagreement-abstention-correctness
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Steve Hanneke, Theory of Active Learning, version 1.1, §§2.1–2.2 and §5.1"
      url: "https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf"
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2 §§2.1–2.2.3"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Remark

The invariant requires the pointwise exact-oracle assumption; standard distributional zero-risk realizability alone need not prescribe labels at pool points of zero input probability. A noisy response can remove the true target from the version space. The ascending-scan query count has no uniform bound by a constant times $\log|\mathcal H|$ over all finite classes; the conditional branch-shrink hypothesis in the query theorem is essential for its logarithmic bound. For fresh features, abstention probability is $D_X(\operatorname{DIS}(V))$, which can equal one even when $|V|=2$. No VC-dimension, disagreement-coefficient, or distribution-free active label-complexity rate is asserted; $\log$ is the natural logarithm.

## Remark references

[[def-pool-based-realizable-active-learning]]: states the pointwise exact-oracle convention and defines the pool model.

[[def-realizable-and-agnostic-pac]]: defines standard distributional realizability by zero population risk.

[[def-population-and-empirical-risk]]: defines population risk as the expected loss under the joint law.

[[lem-population-and-empirical-risk-are-measurable]]: proves that the population risk is a defined measurable integral in the supervised model.

[[alg-finite-pool-version-space-query]]: gives the fixed ascending scan and exact-label version-space update.

[[thm-active-version-space-invariant-and-query-bound]]: proves target retention, the finite query bound, and the conditional logarithmic branch-shrink bound.

[[thm-disagreement-abstention-correctness]]: gives the exact fresh-feature abstention probability and zero answered-point error.

[[def-natural-logarithm]]: defines the natural logarithm on positive reals.

[[thm-natural-logarithm-laws]]: supplies the monotonicity, product, and reciprocal laws used in the finite growth comparison.

[Steve Hanneke, *Theory of Active Learning*, version 1.1, §§2.1–2.2 and §5.1](https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf)

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 2 §§2.1–2.2.3](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)

## Facts & Assumptions

**Given:** The exact-target finite-pool model, the ascending-scan procedure, and the standard supervised-learning risk convention.

[F1] [[def-supervised-learning-problem]]: the joint law is a probability measure on the product of the measurable feature and label spaces.

[F2] [[def-population-and-empirical-risk]]: population risk is the integral of loss under that joint law; for zero-one classification loss it is the probability of a prediction error.

[F3] [[lem-population-and-empirical-risk-are-measurable]]: for a measurable supervised predictor, the loss is measurable and population risk is a defined integral.

[F4] [[def-realizable-and-agnostic-pac]]: distributional realizability means some $h\in\mathcal H$ has $R_P(h)=0$.

[F5] [[def-pool-based-realizable-active-learning]]: the exact oracle returns $h^*(x)$ at every queried point, and $D_X$ is the law for fresh features.

[F6] [[alg-finite-pool-version-space-query]]: the procedure scans pool indices in order and removes classifiers that disagree with each queried exact label.

[F7] [[thm-active-version-space-invariant-and-query-bound]]: the target remains in every current version space; the shrink-factor query bound applies only under its stated branch-size hypothesis.

[F8] [[thm-disagreement-abstention-correctness]]: for a fresh independent feature, the rule abstains exactly on $\operatorname{DIS}(V)$ and makes no error when it answers.

[F9] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ satisfying $\exp(y)=x$.

[F10] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, satisfies $\log(xy)=\log x+\log y$ for positive $x,y$, and has $\log1=0$.

[A1] All witnesses are explicit finite sets and probability laws; no choice axiom or IID sampling assumption is used.

## Proof

1.1 Let $\mathcal X=\{a,b\}$ with its full sigma-algebra, label set $\{0,1\}$ with its discrete sigma-algebra, and joint law $P=\delta_{(a,0)}$ on their product. Define $h_0(a)=h_0(b)=0$ and $h_1(a)=0$, $h_1(b)=1$. The zero-one error events are measurable by [F1] and [F3], and [F2] defines their risks as their $P$-probabilities. Both risks are zero, so [F4] declares the law realizable by either classifier. Yet they give different labels at $b$, while the input marginal satisfies $P_X(\{b\})=0$. Thus distributional realizability does not prescribe the label at every possible pool point; [F5]'s pointwise oracle condition is a genuinely stronger interface. [A1, F1, F2, F3, F4, F5, construct]

1.2 Let $\mathcal X=\{a\}$, $\mathcal H=\{h_0,h_1\}$ with $h_0(a)=0$ and $h_1(a)=1$, target $h^*=h_0$, and budget $b\ge1$. If the filtering update is fed the noisy response $1$ at the initial disagreement $a$, [F6] replaces $V=\{h_0,h_1\}$ by $\{h_1\}$, deleting the true target. Hence the invariant proof cannot be extended to arbitrary noisy responses. [F6, construct]

1.3 For any $m\ge2$, take $\mathcal X=\{x_1,\ldots,x_m\}$, target $h_*(x_j)=1$, alternatives $h_i(x_j)=0$ exactly when $j=i$, pool $(x_1,\ldots,x_m)$, and budget $b\ge m$. Before query $i$, the version space is $\{h_*,h_i,\ldots,h_m\}$: this is true initially and, at $x_i$, the exact positive label removes only $h_i$. Thus all $m$ indices are queried and $q=m=|\mathcal H|-1$. [F5, F6, construct]

2.1 Set $m=2^k-1$ for integers $k\ge2$. Then $|\mathcal H|=2^k$ and $q=2^k-1$. By repeated application of [F10]'s product law, $\log|\mathcal H|=k\log2$, and strict increase with $2>1$ gives $\log2>\log1=0$. The ratio $q/(k\log2)$ is at least $2^{k-1}/(k\log2)$; the latter is unbounded because its consecutive-term ratio is $2k/(k+1)\ge4/3$. Therefore no uniform constant multiple of $\log|\mathcal H|$ bounds the query count, while [F7]'s logarithmic guarantee remains valid when its branch-shrink premise holds. [F7, F9, F10, step 1.3, algebra]

3.1 Let $\mathcal X=\{a\}$, $\mathcal H=\{h_0,h_1\}$ with $h_0(a)=0$, $h_1(a)=1$, target $h^*=h_0$, current version space $V=\mathcal H$, and $D_X(\{a\})=1$. The initial version space is consistent with the exact-target model. Then $\operatorname{DIS}(V)=\mathcal X$, so [F8] gives abstention probability $D_X(\operatorname{DIS}(V))=1$ although $|V|=2$. This verifies that finiteness alone does not force the disagreement mass to be small. All witnesses are explicit finite constructions, as stated in [A1]. [A1, F5, F8, construct] ∎
