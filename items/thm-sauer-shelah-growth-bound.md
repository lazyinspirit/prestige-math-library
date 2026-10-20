---
id: thm-sauer-shelah-growth-bound
kind: theorem
title: "Sauer–Shelah growth bound for indexed samples"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-shattered-set-and-vc-dimension
  - def-growth-function
  - thm-sauer-shelah
  - def-binomial-coefficient
  - thm-binomial-theorem
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 3.17 and Corollary 3.18"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorems 5–6"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space and let $H$ be a nonempty class of measurable functions $h:\mathcal X\to\{0,1\}$ with finite VC dimension $d$. For every integer $m\ge0$,

$$\Pi_H(m)\le\sum_{j=0}^{d}\binom{m}{j},$$

where $\binom{m}{j}=0$ for $j>m$. Consequently, $\Pi_H(m)=1$ when $d=0$; and when $1\le d\le m$,

$$\Pi_H(m)\le\left(\frac{em}{d}\right)^d,$$

where $e:=\exp(1)$.

## Statement references

[[def-shattered-set-and-vc-dimension]]: shattering uses indexed tuples and $\operatorname{VCdim}(H)$ is the largest shattered length.

[[def-growth-function]]: $\Pi_H(m)$ is the largest number of distinct binary traces on an indexed $m$-tuple.

[[thm-sauer-shelah]]: a family in $\mathcal P([m])$ with VC dimension at most $d$ has at most $\sum_{j=0}^{d}\binom{m}{j}$ members.

[Mohri et al., Theorem 3.17 and Corollary 3.18](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): Sauer’s trace bound and its $(em/d)^d$ estimate.

[Bartlett and Mendelson, Theorems 5–6](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): empirical VC dimension enters the classification complexity bound.

## Facts & Assumptions

**Given:** A nonempty measurable binary class $H$, finite $d=\operatorname{VCdim}(H)$, and an integer $m\ge0$.

[F1] A tuple is shattered when its trace is all binary vectors; repeated coordinates are retained as distinct indices. [[def-shattered-set-and-vc-dimension]]

[F2] $\Pi_H(m)$ is the supremum of the finite trace cardinalities on indexed $m$-tuples. [[def-growth-function]]

[F3] If $\mathcal F\subseteq\mathcal P([m])$ has finite-set-family VC dimension at most $d$, then $|\mathcal F|\le\sum_{j=0}^{d}\binom{m}{j}$. [[thm-sauer-shelah]]

[F4] $\binom{m}{j}$ counts $j$-element subsets of $[m]$ and is zero for $j>m$. [[def-binomial-coefficient]]

[F5] In $\mathbb R$, $(1+u)^m=\sum_{j=0}^{m}\iota\binom{m}{j}u^j$ for every real $u$ and natural $m$. [[thm-binomial-theorem]]

[F6] For every real $u$, $1+u\le e^u$; $e=\exp(1)$; and $e^{a+b}=e^ae^b$. [[lem-exponential-dominates-one-plus-x]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix an indexed tuple $\mathbf x=(x_1,\ldots,x_m)$. Associate to it the family $\mathcal F_{\mathbf x}:=\{\{i\in[m]:h(x_i)=1\}:h\in H\}\subseteq\mathcal P([m])$. The map from a trace vector to its set of $1$-indices is a bijection, so $|\mathcal F_{\mathbf x}|=|\operatorname{tr}_H(\mathbf x)|$. If $\mathcal F_{\mathbf x}$ shatters $T\subseteq[m]$, then every binary labeling of the subtuple $(x_i)_{i\in T}$ occurs in $H$; hence $T$ is a shattered indexed tuple for $H$ and $|T|\le d$. Thus the finite-family VC dimension of $\mathcal F_{\mathbf x}$ is at most $d$. [F1, F2, given, construct]

2.1 Apply [F3] to $\mathcal F_{\mathbf x}$ to get $|\operatorname{tr}_H(\mathbf x)|\le\sum_{j=0}^{d}\binom{m}{j}$. This bound holds for every tuple, so taking the supremum over tuples gives the first inequality. [F2, F3, step 1.1]

3.1 If $d=0$, the first inequality gives $\Pi_H(m)\le1$, while nonemptiness of $H$ makes every trace nonempty; hence $\Pi_H(m)=1$. [F2, F3, step 2.1, given]

4.1 Suppose $1\le d\le m$ and identify natural binomial counts with their real images under $\iota$. For $0\le j\le d$, $(m/d)^{d-j}\ge1$, so $\sum_{j=0}^{d}\binom{m}{j}\le\sum_{j=0}^{d}\binom{m}{j}(m/d)^{d-j}\le\sum_{j=0}^{m}\binom{m}{j}(m/d)^{d-j}=(m/d)^d(1+d/m)^m$. The second inequality adds nonnegative terms. By [F5], the last factor satisfies $(1+d/m)^m\le(e^{d/m})^m=e^d$, where the first inequality follows by multiplying $1+d/m\le e^{d/m}$ by itself $m$ times and the equality follows from [F6]. Therefore $\Pi_H(m)\le(em/d)^d$ by step 2.1. [F4, F5, F6, step 2.1, algebra] ∎
