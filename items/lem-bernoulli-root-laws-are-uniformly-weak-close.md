---
id: lem-bernoulli-root-laws-are-uniformly-weak-close
kind: lemma
title: Bernoulli root laws are uniformly close in Levy–Prokhorov distance
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-bernoulli-and-binomial-random-variables
  - lem-bernoulli-and-binomial-mean-and-variance
  - cor-chebyshev-inequality-for-random-variables
  - def-levy-prokhorov-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, §2.2, Example 2.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
---

## Statement

For $n\ge1$ and $p\in[0,1]$, let $\mu_{n,p}$ be the law of
$$S_{n,p}:=\frac1{\sqrt n}\sum_{i=1}^n(B_i(p)-p),$$
where $B_1(p),\ldots,B_n(p)$ are IID Bernoulli$(p)$. For every $p,q\in[0,1]$,
$$\pi(\mu_{n,p},\mu_{n,q})\le |p-q|^{1/3},$$
where $\pi$ is the Levy–Prokhorov metric. The bound is uniform in the sample size and choice-free.

## Facts & Assumptions

**Given:** Integers $n\ge1$, $p,q\in[0,1]$, and the laws $\mu_{n,p},\mu_{n,q}$.

[F1] [[def-bernoulli-and-binomial-random-variables]]: A Bernoulli$(p)$ variable is $1$ with probability $p$ and $0$ otherwise; a binomial variable is a finite sum of independent Bernoulli variables.

[F2] [[lem-bernoulli-and-binomial-mean-and-variance]]: A binomial$(n,r)$ variable has mean $nr$ and variance $nr(1-r)$, including $r=0,1$.

[F3] [[cor-chebyshev-inequality-for-random-variables]]: For a square-integrable real random variable $Y$ and $t>0$, $\mathbb P(|Y-\mathbb E Y|\ge t)\le\operatorname{Var}(Y)/t^2$.

[F4] [[def-levy-prokhorov-metric]]: The Levy–Prokhorov distance is the infimum of radii $\varepsilon>0$ for which both closed-set inequalities $\mu(A)\le\nu(A^{[\varepsilon]})+\varepsilon$ and $\nu(A)\le\mu(A^{[\varepsilon]})+\varepsilon$ hold for every closed $A$.

## Proof

**Given:** The integers, parameters, and laws in the statement.

1.1 If $p=q$, the laws coincide. Suppose $p\le q$. For each $i$, give $(B_i,C_i)\in\{0,1\}^2$ probabilities $p$ at $(1,1)$, $q-p$ at $(0,1)$, $1-q$ at $(0,0)$, and zero at $(1,0)$, and take $n$ independent copies of this finite pair. Then $B_i\sim\operatorname{Bernoulli}(p)$, $C_i\sim\operatorname{Bernoulli}(q)$, and $D_i:=C_i-B_i\sim\operatorname{Bernoulli}(q-p)$; the pairs are independent across $i$. Thus $S_{n,q}-S_{n,p}=n^{-1/2}\sum_i(D_i-(q-p))$, whose mean is zero and whose variance, by [F2], is $(q-p)(1-q+p)\le q-p$. If $q<p$, interchange the two parameters and change the sign of the difference; its variance is $|p-q|(1-|p-q|)\le|p-q|$. [F1, F2, algebra, construct]

2.1 Put $r=|p-q|$ and $\varepsilon=r^{1/3}$ for $r>0$. By [F3] and step 1.1, the coupling just constructed satisfies $\mathbb P(|S_{n,p}-S_{n,q}|>\varepsilon)\le r/\varepsilon^2=\varepsilon$. For any closed set $A$, the event $\{S_{n,p}\in A,\ |S_{n,p}-S_{n,q}|\le\varepsilon\}$ is contained in $\{S_{n,q}\in A^{[\varepsilon]}\}$, so $\mu_{n,p}(A)\le\mu_{n,q}(A^{[\varepsilon]})+\varepsilon$. Interchanging $p$ and $q$ gives the reverse inequality. Hence $\varepsilon$ is admissible in [F4], so the infimum defining $\pi$ is at most $\varepsilon$. For $r=0$ the laws coincide and their distance is zero by [F4]. This proves the bound for every endpoint case as well. [F3, F4, step 1.1, algebra] ∎
