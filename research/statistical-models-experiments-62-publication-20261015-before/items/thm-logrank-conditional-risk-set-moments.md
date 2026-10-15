---
id: thm-logrank-conditional-risk-set-moments
kind: theorem
title: "Conditional hypergeometric moments for a logrank risk set"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-logrank-risk-set-score-and-test
  - def-finite-probability-space-and-event
  - def-uniform-finite-probability-space
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-indicator-random-variable
  - def-variance-and-covariance
  - thm-linearity-of-expectation
  - lem-indicator-expectation-and-products
  - lem-variance-and-covariance-identities
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 6: Logrank Test, PDF pp. 3-4"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit6.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.3, PDF pp. 59-60"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

Fix a risk set with $Y_1$ group-1 subjects, $Y_0$ group-0 subjects, and
$Y=Y_1+Y_0$. Conditional on the margins, suppose the $d$ failing subjects
are a uniform $d$-subset of these $Y$ subjects, where $0\le d\le Y$. Let
$O$ be the number of failures in group 1. If $Y>1$, then
$$\mathbb E[O]=d\frac{Y_1}{Y},\qquad \operatorname{Var}(O)=\frac{Y_1Y_0d(Y-d)}{Y^2(Y-1)}.$$
If $Y=0$ or $Y=1$, set the contribution to the variance to zero; the
expectation remains $dY_1/Y$ when $Y>0$, and is zero when $Y=0$.

For the sequential assertion, take a finite sequence $j=1,\ldots,J$ on a
probability space with a filtration
$\mathcal H_0\subseteq\mathcal H_1\subseteq\cdots\subseteq\mathcal H_J$.
Before the failures at step $j$ are revealed, the current risk-set subjects,
their group counts $Y_{1j},Y_{0j}$, and the total $d_j$ are
$\mathcal H_{j-1}$-measurable, with $0\le d_j\le Y_j:=Y_{1j}+Y_{0j}$.
Conditionally on $\mathcal H_{j-1}$, the failing subjects are a uniform
$d_j$-subset of the current $Y_j$ subjects; their identities are revealed
in $\mathcal H_j$. If $Y_j=0$, necessarily $d_j=0$ and the failing subset is
empty. Put $E_j=d_jY_{1j}/Y_j$ when $Y_j>0$ and $E_j=0$ when $Y_j=0$;
let $V_j$ be the displayed risk-set variance when $Y_j>1$ and zero when
$Y_j\le1$. Suppose each real weight $w_j$ is $\mathcal H_{j-1}$-measurable
and
$$\mathbb E\!\left[\sum_{j=1}^Jw_j^2V_j\right]<\infty.$$
Then $D_j=w_j(O_j-E_j)$ are square-integrable martingale differences and
$$\mathbb E\!\left[\sum_jD_j\right]=0,\qquad \operatorname{Var}\!\left(\sum_jD_j\right) =\mathbb E\!\left[\sum_jw_j^2V_j\right],$$
where the nonempty-risk-set variance contribution is the one in
[[def-logrank-risk-set-score-and-test]].

## Facts & Assumptions

**Given:** A finite risk set, its two group counts, a total failure count $d$, the uniform-subset allocation model, and, for the sequential assertion, the finite filtration, measurable pre-reveal margins, zero-risk convention, conditional law, predictable weights, and integrability condition stated above.

[F1] [[def-uniform-finite-probability-space]]: the uniform law on a nonempty finite set assigns each element probability equal to the reciprocal of the set's cardinality.

[F2] [[def-indicator-random-variable]]: an indicator is one on its event and zero elsewhere.

[F3] [[thm-linearity-of-expectation]]: expectation of a finite sum is the sum of the expectations; independence is not required.

[F4] [[lem-indicator-expectation-and-products]]: indicator expectations equal event probabilities, and products of indicators equal indicators of intersections.

[F5] [[def-variance-and-covariance]]: variance and covariance are expectations of the centered square and centered product.

[F6] [[lem-variance-and-covariance-identities]]: variance and covariance may be expanded as $\mathbb E[X^2]-(\mathbb E X)^2$ and $\mathbb E[XY]-\mathbb E X\,\mathbb E Y$.

[F7] [[def-logrank-risk-set-score-and-test]]: $E_j=d_jY_{1j}/Y_j$, and under the conditional hypergeometric model $V_j=Y_{1j}Y_{0j}d_j(Y_j-d_j)/(Y_j^2(Y_j-1))$ when $Y_j>1$, with zero contribution for $Y_j=1$.

[A1] Conditional on $\mathcal H_{j-1}$, which includes the risk-set margins and $d_j$, each $d_j$-subset of the $Y_j$ risk-set subjects has equal probability.

## Proof

1.1 If $Y=0$, then $d=0$, $O=0$, and both stated moments are zero. Suppose $Y\ge1$. For each of the $Y_1$ group-1 subjects let $I_a$ indicate that subject $a$ is in the failing subset. Under [A1], when $d\ge1$, $P(I_a=1)=\binom{Y-1}{d-1}/\binom{Y}{d}=d/Y$; for $d=0$, both sides are zero. Since $O=\sum_{a=1}^{Y_1}I_a$, [F3] and [F4] give $\mathbb E O=Y_1d/Y$. [A1, F1, F2, F3, F4, given]

1.2 If $Y=1$, then $d\in\{0,1\}$ and the failing subset is deterministic: $O=dY_1$. Its expectation is $dY_1/Y$ and its variance is zero, as stipulated. [F1, F5, given]

2.1 Suppose $Y>1$. For distinct group-1 subjects $a,b$, if $d\ge2$ the same subset count gives $P(I_a=I_b=1)=\binom{Y-2}{d-2}/\binom{Y}{d}=d(d-1)/(Y(Y-1))$; for $d=0$ or $d=1$ the probability and the displayed ratio are both zero. Using [F5] and [F6], $ \operatorname{Var}(I_a)=\frac{d(Y-d)}{Y^2},\qquad \operatorname{Cov}(I_a,I_b)=-\frac{d(Y-d)}{Y^2(Y-1)}. $ Thus [F3] and [F5] give $ \operatorname{Var}(O) =Y_1\frac{d(Y-d)}{Y^2} -Y_1(Y_1-1)\frac{d(Y-d)}{Y^2(Y-1)} =\frac{Y_1(Y-Y_1)d(Y-d)}{Y^2(Y-1)}. $ Since $Y-Y_1=Y_0$, this is the stated variance, including $d=0$, $d=Y$, $Y_1=0$, and $Y_1=Y$. [F3, F5, F6, given, algebra, step 1.1]

3.1 In the sequential model, step 1.1 and the $Y_j=0$ convention give $\mathbb E[O_j-E_j\mid\mathcal H_{j-1}]=0$, and step 2.1 gives conditional variance $V_j$. Since $w_j$ is $\mathcal H_{j-1}$-measurable, $D_j$ has conditional mean zero and conditional second moment $w_j^2V_j$. The stated integrability condition makes each $D_j$ square-integrable. If $k<j$, the filtration property and the revelation convention make $D_k$ $\mathcal H_{j-1}$-measurable, so $\mathbb E[D_kD_j]=\mathbb E[D_k\,\mathbb E(D_j\mid\mathcal H_{j-1})]=0$. Expanding the finite sum's variance therefore yields both sequential identities. [A1, F3, F7, step 1.1, step 2.1, algebra, step 1.2] ∎