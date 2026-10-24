---
id: lem-ip-weighted-chi-square-triangular-array-limit
kind: lemma
title: Weighted chi-square triangular-array limit
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-fourth-moment
  - thm-lindeberg-feller-central-limit-theorem-sufficiency
  - thm-dominated-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: The Axiom of Choice is used only through the published Lindeberg–Feller theorem. The finite row-moment and Lindeberg estimates are choice-free.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.1, equations (4.2)–(4.3)"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume the Axiom of Choice. For each $n$, let $G_{n,1},\ldots,G_{n,m_n}$ be independent standard normal random variables, and let $w_{n,j}\ge0$ satisfy $2\sum_{j=1}^{m_n}w_{n,j}^2=1$. If $\max_{1\le j\le m_n}w_{n,j}\to0$, then
$$T_n=\sum_{j=1}^{m_n}w_{n,j}(G_{n,j}^2-1)$$
has mean zero and variance one for every $n$ and converges in distribution to $N(0,1)$.

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.1, equations (4.2)–(4.3)](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, Gaussian white-noise signal detection](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** AC; for each $n$, independent standard normal coordinates $G_{n,j}$; nonnegative weights with $2\sum_jw_{n,j}^2=1$ and $\max_jw_{n,j}\to0$.

[A1] [[def-axiom-of-choice]]: AC is the hypothesis of the Lindeberg–Feller supplier.

[F1] [[lem-standard-normal-fourth-moment]]: for $G\sim N(0,1)$, $\mathbb E G^2=1$ and $\mathbb E G^4=3$; hence $V=G^2-1$ has mean $0$, variance $2$, and finite second moment.

[F2] [[thm-lindeberg-feller-central-limit-theorem-sufficiency]]: an independent centered triangular array with positive row standard deviations and the Lindeberg condition has its normalized row sums converging in distribution to $N(0,1)$.

[F3] [[thm-dominated-convergence]]: an integrable dominating function allows limits to pass through the expectation.

## Proof

1.1 By [F1], each $V_{n,j}=G_{n,j}^2-1$ is centered with variance $2$. Independence within each row gives $\mathbb E T_n=0$ and $\operatorname{Var}(T_n)=2\sum_jw_{n,j}^2=1$. Thus the row standard deviation is $s_n=1>0$. [given, F1, algebra]

2.1 Fix $\delta>0$ and put $w_n^* =\max_jw_{n,j}$. If $w_{n,j}=0$, its Lindeberg summand is zero. Otherwise $w_{n,j}|V_{n,j}|>\delta$ implies $|V_{n,j}|>\delta/w_n^*$. Therefore $$\sum_j\mathbb E\!\left[w_{n,j}^2V_{n,j}^2\mathbf1_{\{w_{n,j}|V_{n,j}|>\delta\}}\right]\le \frac12\mathbb E\!\left[V^2\mathbf1_{\{|V|>\delta/w_n^*\}}\right].$$ Because $w_n^*\to0$ and $V^2$ is integrable by [F1], the right side tends to zero by [F3]. This is the Lindeberg condition for the array $w_{n,j}V_{n,j}$. [given, F1, F3, step 1.1, algebra]

3.1 The array in step 2.1 is centered and independent within rows, has finite second moments, and has row standard deviation $1$. By [F2] and the Lindeberg condition just proved, $T_n\Rightarrow N(0,1)$. [A1, F2, step 1.1, step 2.1] ∎