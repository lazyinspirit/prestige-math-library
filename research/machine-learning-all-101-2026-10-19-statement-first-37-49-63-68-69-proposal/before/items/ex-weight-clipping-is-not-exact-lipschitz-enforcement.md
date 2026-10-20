---
id: ex-weight-clipping-is-not-exact-lipschitz-enforcement
kind: example
title: "Point masses, Jensen–Shannon saturation, and weight clipping"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-integral-probability-metric
  - def-compact-metric-wasserstein-one
  - def-finite-metric-wasserstein-one
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-dirac-integral-evaluation
  - def-measure
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §§2–3, PDF pp. 2–7"
      url: "https://arxiv.org/pdf/1701.07875"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 3–7"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Example

Let $X=[0,1]$ with distance $d(x,y)=|x-y|$, let $P=\delta_0$, and for $t\in[0,1]$ let $Q_t=\delta_t$. For each $t>0$, let $F_t=\{0,t\}$ with the induced finite metric and ordering $(0,t)$, and use probability vectors $p=(1,0)$ and $q=(0,1)$; for $t=0$, take $F_0=\{0\}$ and $p=q=(1)$. For finite-support probabilities $R,S$, define $\operatorname{KL}(R\|S)=+\infty$ if $R$ gives positive mass where $S$ gives zero mass, and otherwise define $\operatorname{KL}(R\|S)=\sum_{x:R(x)>0}R(x)\log(R(x)/S(x))$, with natural logarithms. Define $\operatorname{JS}(R,S)=\tfrac12\operatorname{KL}(R\|(R+S)/2)+\tfrac12\operatorname{KL}(S\|(R+S)/2)$. For every $t>0$, the finite-space transport cost $W_1(p,q)$ on $F_t$, the compact-space coupling cost $W_1(P,Q_t)$, and the integral probability metric over all real functions satisfying $|f(x)-f(y)|\le |x-y|$ on $X$ are all $t$, whereas $\operatorname{JS}(P,Q_t)=\log 2$; at $t=0$ these three transport/IPM values and the JS value are zero. Thus the compact-space $W_1(P,Q_t)\to0$ as $t\downarrow0$ while $\operatorname{JS}(P,Q_t)$ stays equal to $\log 2$ for every $t>0$.

For the same data space, consider the two-layer scalar affine critic $f_{a,b}(x)=a(bx)$ whose two scalar weights are constrained by $|a|,|b|\le c$ for a fixed $c>0$. When $c>1$, the clipped family contains $f(x)=c^2x$, which is not $1$-Lipschitz; when $0<c<1$, it cannot contain $f(x)=x$; when $c=1$, it cannot contain the nonlinear $1$-Lipschitz function $f(x)=x^2/2$. Hence this fixed clipped affine family is not exactly the class of $1$-Lipschitz critics for any $c>0$.

## Example references

[[def-dirac-measure|Dirac measure]]

[[prop-dirac-measure-is-a-probability-measure|Dirac measure is a probability measure]]

[[def-integral-probability-metric|Integral probability metric]]

[[def-compact-metric-wasserstein-one|Compact-space coupling definition of $W_1$]]

[[def-finite-metric-wasserstein-one|Finite-metric primal transport cost]]

## Facts & Assumptions

**Given:** $X=[0,1]$ with its usual metric, $P=\delta_0$, $Q_t=\delta_t$ for $0\le t\le1$, the finite-support definitions of $\operatorname{KL}$ and $\operatorname{JS}$ in the Example, and the critic family $f_{a,b}(x)=abx$ with $|a|,|b|\le c$.

[F1] A Dirac set function assigns mass $1$ exactly to measurable sets containing its point, and it is a probability measure. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]]

[F2] For a nonnegative measurable function $g$, $\int g\,d\delta_x=g(x)$. [[lem-dirac-integral-evaluation]]

[F3] For finite probability vectors $p,q$, $W_1(p,q)$ is the minimum of $\sum_{i,j}d(x_i,x_j)\pi_{ij}$ over nonnegative coupling matrices with row sums $p$ and column sums $q$. [[def-finite-metric-wasserstein-one]]

[F4] $W_1$ on a compact metric space is the infimum of $\int d(x,y)\,d\gamma(x,y)$ over Borel probability couplings with the prescribed marginals. [[def-compact-metric-wasserstein-one]]

[F5] The IPM is the supremum of the absolute differences of the test-function integrals over its specified class. [[def-integral-probability-metric]]

[F6] A measure is countably additive on pairwise disjoint measurable sets; finite unions of null sets are null. [[def-measure]]

## Verification

1.1 For $t>0$, the second row sum $0$ and nonnegative entries force $\pi_{21}=\pi_{22}=0$; the first column sum $0$ then forces $\pi_{11}=0$, and the first row sum $1$ forces $\pi_{12}=1$, which also gives the required second column sum $1$. This is the unique feasible matrix, and [F3] gives finite-space cost $d(0,t)=t$. For $t=0$, the singleton probability vector has unique coupling $(1)$ and cost $0$. [given, F3, algebra]

1.2 By [F1], $P$ and $Q_t$ are Borel probability measures. If $\gamma$ is any coupling of $P$ and $Q_t$, then $\gamma(\{0\}\times X)=1$ and $\gamma(X\times\{t\})=1$. The complement of their intersection is contained in the union of their two null complements, so finite subadditivity from [F6] gives $\gamma(\{(0,t)\})=1$. A probability measure concentrated on the singleton $(0,t)$ equals its Dirac measure there: sets containing $(0,t)$ have mass $1$, and sets omitting it have mass $0$. The Dirac measure at $(0,t)$ has the required marginals, so it is the unique coupling. By [F2] and [F4], its cost is $d(0,t)=t$, so $W_1(P,Q_t)=t$, including $t=0$. [given, F1, F2, F4, F6, algebra]

1.3 Every function in the specified $1$-Lipschitz class satisfies $|f(0)-f(t)|\le t$, and $f(x)=x$ belongs to the class and has $|f(0)-f(t)|=t$. By [F5], the IPM is exactly $t$. [given, F5, algebra]

1.4 If $t>0$, the mixture $(P+Q_t)/2$ assigns mass $1/2$ to each of $0$ and $t$. The finite sum definition gives $\operatorname{KL}(P\|(P+Q_t)/2)=\log2$ and $\operatorname{KL}(Q_t\|(P+Q_t)/2)=\log2$, so $\operatorname{JS}(P,Q_t)=\log2$. If $t=0$, the two laws agree, each KL term is $0$, and the JS value is $0$. [given, algebra]

2.1 Under the weight bounds, the slope of $f_{a,b}(x)=abx$ has absolute value at most $c^2$. If $c>1$, the allowed choice $a=b=c$ gives slope $c^2>1$. If $0<c<1$, every allowed slope has magnitude less than $1$, so the function $x$ cannot occur. If $c=1$, every member is linear, while $x^2/2$ is $1$-Lipschitz because $|x^2-y^2|/2=|x-y|(x+y)/2\le|x-y|$ on $[0,1]$; it is not linear, since its value at $1$ is $1/2$ and at $1/2$ is $1/8$. These three exhaustive cases prove the stated failure of exactness for every $c>0$. [given, algebra] ∎
