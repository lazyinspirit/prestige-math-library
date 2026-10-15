---
id: lem-uniform-cdf-order-and-quantile-coverage
kind: lemma
title: CDF ordering and uniform error control quantile coverage
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-cumulative-distribution-function-of-a-random-variable
  - thm-continuity-from-above-for-measures
  - thm-continuity-from-below-for-measures
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, Appendix A.1, Lemma A.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
---

## Statement

For a cumulative distribution function $F$ and $u\in(0,1)$, define the generalized quantile $q_F(u):=\inf\{x\in\mathbb R:F(x)\ge u\}$, and put $q_F(0):=-\infty$ and $q_F(1):=+\infty$. Let $X$ be a real random variable with CDF $F$. In part 3, a **random CDF** $\widehat G$ means that each $\widehat G(x)$ is measurable and, for every outcome, $x\mapsto\widehat G(x)$ is a right-continuous CDF. If the initial paths are CDFs only outside a specified measurable null set $N$, first set $\widehat G(x)=\mathbf1_{\{x\ge0\}}$ on $N$; all suprema and quantiles in part 3 use this everywhere-CDF version. No completeness of the probability space is assumed. For $\varepsilon,\delta\ge0$ and $0\le\alpha_1,\alpha_2<1$ with $\alpha_1+\alpha_2<1$, the following hold.

1. If $G$ is a CDF and $\sup_x(G(x)-F(x))\le\varepsilon$, then $\mathbb P\{X\le q_G(1-\alpha_2)\}\ge1-\alpha_2-\varepsilon$.
2. If $G$ is a CDF and $\sup_x(F(x)-G(x))\le\varepsilon$, then $\mathbb P\{X\ge q_G(\alpha_1)\}\ge1-\alpha_1-\varepsilon$.
3. If $\widehat G$ is a random CDF and $\mathbb P\{\sup_x|\widehat G(x)-F(x)|\le\varepsilon/2\}\ge1-\delta$, then
$$\mathbb P\{q_{\widehat G}(\alpha_1)\le X\le q_{\widehat G}(1-\alpha_2)\}\ge1-\alpha_1-\alpha_2-\varepsilon-\delta.$$

The endpoints $\alpha_i=0$ use the extended quantiles and make the corresponding tail event vacuous. No continuity of $F$ or absence of atoms at the target quantiles is required.

## Facts & Assumptions

**Given:** CDFs $F,G$, a real random variable $X$ with CDF $F$, the stated tail-levels, and, in part 3, a random CDF $\widehat G$ with measurable evaluations, right-continuous sample paths, and its uniform error event.

[F1] [[def-cumulative-distribution-function-of-a-random-variable]]: The CDF of a real random variable is $F_X(x)=\mathbb P(X\le x)$.

[F2] [[thm-continuity-from-above-for-measures]]: For decreasing measurable sets whose first set has finite measure, the measure of their intersection is the infimum of their measures.

[F3] [[thm-continuity-from-below-for-measures]]: For increasing measurable sets, the measure of their union is the supremum of their measures.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $u\in(0,1)$ the quantile set $\{x:F(x)\ge u\}$ is nonempty and bounded below because the events $\{X\le k\}$ increase to the whole space and $\{X\le-k\}$ decrease to the empty set; [F2]–[F3] give the CDF limits $1$ and $0$ at the two tails. If $q=q_F(u)$, then for every $r>0$ there is $x<q+r$ with $F(x)\ge u$, so $F(q+r)\ge u$. The events $\{X\le q+1/k\}$ decrease to $\{X\le q\}$; by [F2], $F(q)=\lim_kF(q+1/k)\ge u$. Also, for every $x<q$, $F(x)<u$ by the definition of infimum. [F1, F2, F3, given, algebra]

2.1 If $\alpha_2=0$, the event is vacuous because $q_G(1)=+\infty$. Otherwise, if $1-\alpha_2-\varepsilon\le0$, the lower bound is nonpositive and is trivial. In the remaining case, every $x$ with $G(x)\ge1-\alpha_2$ satisfies $F(x)\ge1-\alpha_2-\varepsilon$, so $q_F(1-\alpha_2-\varepsilon)\le q_G(1-\alpha_2)$. Step 1.1 gives $F(q_F(1-\alpha_2-\varepsilon))\ge1-\alpha_2-\varepsilon$, and monotonicity of $F$ proves the first probability bound. [F1, step 1.1, given, algebra]

2.2 If $\alpha_1=0$, the event is vacuous because $q_G(0)=-\infty$. If $\alpha_1+\varepsilon\ge1$, the lower bound is nonpositive and is trivial. Otherwise, each $x$ with $F(x)\ge\alpha_1+\varepsilon$ has $G(x)\ge\alpha_1$, whence $q_G(\alpha_1)\le q_F(\alpha_1+\varepsilon)$. For every $y<q_F(\alpha_1+\varepsilon)$, step 1.1 gives $F(y)<\alpha_1+\varepsilon$. The events $\{X\le q_F(\alpha_1+\varepsilon)-1/k\}$ increase to $\{X<q_F(\alpha_1+\varepsilon)\}$; [F3] therefore gives $\mathbb P\{X<q_F(\alpha_1+\varepsilon)\}\le\alpha_1+\varepsilon$. This proves the second bound. [F1, F3, step 1.1, given, algebra]

3.1 The stated replacement on $N$ preserves measurable evaluations and gives CDF paths everywhere. For $u\in(0,1)$, $q_{\widehat G}(u)$ is measurable because $\{q_{\widehat G}(u)<a\}=\bigcup_{r\in\mathbb Q,\,r<a}\{\widehat G(r)\ge u\}$; the endpoint quantiles are constant, so the coverage event is measurable. Also $E:=\{\sup_x|\widehat G(x)-F(x)|\le\varepsilon/2\}$ is measurable because $|\widehat G-F|$ is right-continuous for every outcome and its supremum over $\mathbb R$ equals its supremum over $\mathbb Q$. If $\alpha_1+\alpha_2+\varepsilon+\delta\ge1$, part 3 is the trivial nonnegative lower bound. Otherwise, on $E$, when $\alpha_1>0$ the pointwise order implies $q_{\widehat G}(\alpha_1)\le q_F(\alpha_1+\varepsilon/2)$; hence the lower-tail failure on $E$ is contained in $\{X<q_F(\alpha_1+\varepsilon/2)\}$ and has probability at most $\alpha_1+\varepsilon/2$ by step 2.2. If $\alpha_1=0$, this tail is empty. Similarly, when $\alpha_2>0$, $q_F(1-\alpha_2-\varepsilon/2)\le q_{\widehat G}(1-\alpha_2)$; hence the upper-tail failure on $E$ is contained in $\{X>q_F(1-\alpha_2-\varepsilon/2)\}$, whose probability is at most $\alpha_2+\varepsilon/2$ by step 1.1. If $\alpha_2=0$, that tail is empty. A union bound and $\mathbb P(E^c)\le\delta$ give the claimed coverage bound; no independence between $E$ and $X$ is needed because each intersection with $E$ is bounded by the corresponding unconditional tail event. [F1, step 1.1, step 2.2, given, algebra] ∎
