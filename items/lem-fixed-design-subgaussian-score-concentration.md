---
id: lem-fixed-design-subgaussian-score-concentration
kind: lemma
title: "Sub-Gaussian score bound under fixed-design incoherence"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-fixed-design-incoherence-condition
  - def-subgaussian-fixed-design-regression-model
  - lem-probability-measure-basic-identities
  - thm-finite-subgaussian-maximum-and-epsilon-net
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Theorem 2.18 proof"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Theorem 2.18 proof"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Theorem 7.2"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement

Let $Y=X\theta^\ast+\varepsilon$ be as in [[def-subgaussian-fixed-design-regression-model]], with $n\ge1$, $d\ge1$, noise proxy $\sigma^2\ge0$, and $X$ satisfying the incoherence condition of [[def-fixed-design-incoherence-condition]] at some $1\le s\le d$. For $\delta\in(0,1)$ define
$$\tau=4\sigma\left(\sqrt{\frac{\log(2d)}{n}}+\sqrt{\frac{\log(1/\delta)}{n}}\right).$$
Then
$$P\!\left(\left\|X^{\mathsf T}\varepsilon/n\right\|_\infty\le\tau/2\right)\ge1-\delta.$$

## Facts & Assumptions

**Given:** The fixed-design sub-Gaussian model, $n\ge1$, $d\ge1$, $1\le s\le d$, $\delta\in(0,1)$, and incoherence at sparsity $s$.

[F1] Every linear functional $\langle u,\varepsilon\rangle$ is sub-Gaussian with proxy $\sigma^2\|u\|_2^2$ ([[def-subgaussian-fixed-design-regression-model]]).

[F2] A maximum of finitely many centered sub-Gaussian variables with common proxy $v>0$ obeys $P(\max_j|Z_j|\ge t)\le2m e^{-t^2/(2v)}$ for $t>0$, without an independence assumption; for proxy $v=0$, this probability is zero ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F3] Incoherence gives $X_j^{\mathsf T}X_j/n\le1+1/(14s)\le15/14$ ([[def-fixed-design-incoherence-condition]]).

[F4] Probability is countably subadditive ([[lem-probability-measure-basic-identities]]).

## Proof

1.1 For each $j$, $X_j^{\mathsf T}\varepsilon/n$ is a centered sub-Gaussian variable with proxy $\sigma^2\|X_j\|_2^2/n^2\le15\sigma^2/(14n)$ by [F1] and [F3]. The $d$ variables need not be independent. [F1, F3, algebra]

2.1 If $\sigma=0$, then for every positive integer $m$, [F2] gives $P(\|X^{\mathsf T}\varepsilon/n\|_\infty\ge1/m)=0$. Since the event that this finite maximum is positive is the countable union of these events, [F4] shows that the score is zero almost surely, and the conclusion follows. Suppose $\sigma>0$. Apply [F2] at $t=\tau/2$ to obtain $P\!\left(\left\|X^{\mathsf T}\varepsilon/n\right\|_\infty>\tau/2\right)\le2d\exp\!\left(-\frac{28}{15}\left[\sqrt{\log(2d)}+\sqrt{\log(1/\delta)}\right]^2\right)\le\delta,$ because the squared bracket is at least $\log(2d/\delta)$ and $28/15>1$. This proves the claim. [F2, F4, step 1.1, algebra] ∎
