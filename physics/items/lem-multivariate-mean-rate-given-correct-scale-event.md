---
id: lem-multivariate-mean-rate-given-correct-scale-event
kind: lemma
title: "The multivariate trimmed-mean rate follows from a correct-scale slab event"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [alg-multivariate-trimmed-mean, lem-multivariate-trimmed-mean-selector-total-and-measurable, lem-finite-covariance-matrix-basic-properties, def-natural-logarithm, thm-natural-logarithm-laws]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Theorem 2"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 14–23; the theorem rate derived from the correct-scale slab event. This item proves the conditional implication locally."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; independent overview of the multivariate directional-slab adaptation."
---

## Statement

Let $\Sigma$ be a finite covariance matrix in $\mathbb R^d$, $d\ge1$, with $\operatorname{tr}\Sigma>0$, mean $\mu$, and $0\le\lambda_{\max}(\Sigma)\le\operatorname{tr}\Sigma$ as in [[lem-finite-covariance-matrix-basic-properties]]. Let $0\le\eta\le1/10$, $0<\delta<1$, $N\ge2560\log(2/\delta)$, and $\varepsilon=\max\{10\eta,2560\log(2/\delta)/N\}$. Define
$$
Q_0=\max\left\{\frac{256}{\varepsilon}\sqrt{\frac{\operatorname{tr}\Sigma}{N}},\ 16\sqrt{\frac{\lambda_{\max}(\Sigma)}{\varepsilon}}\right\}.
$$
Fix $b>0$ and any integer $i_0$ with $2^{i_0}\in[2Q_0,4Q_0)$ and any observed input tuple to [[alg-multivariate-trimmed-mean]]. If $K_{i_0}$ is nonempty and every $z\in K_{i_0}$ satisfies $\|z-\mu\|_2\le b\varepsilon Q_0$, then the algorithm's output satisfies
$$
\|\widehat\mu-\mu\|_2\le c_b\left[\sqrt{\frac{\operatorname{tr}\Sigma}{N}}+\sqrt{\frac{\lambda_{\max}(\Sigma)\log(1/\delta)}{N}}+\sqrt{\lambda_{\max}(\Sigma)\eta}\right],
$$
where
$$
c_b=b\max\left\{256+16\sqrt{2560\log2},\ 16\sqrt{2560},\ 16\sqrt{10}\right\}.
$$
In particular, $b=4$ recovers the original constant and $b=16$ applies to the corrected slab proposition. This is a deterministic implication from the slab event; it does not assert that the event has high probability.

## Facts & Assumptions

**Given:** The parameters, covariance matrix, mean, dyadic index, arbitrary observed data tuple, and the stated nonempty correct-scale slab condition.

[F1] The selector returns a point of $K_j$ when $S=\{j:K_j\ne\varnothing\}$ has least element $j$; if $S=\mathbb Z$, it returns a point in the all-scale intersection; the sets $K_j$ are nested ([[alg-multivariate-trimmed-mean]], [[lem-multivariate-trimmed-mean-selector-total-and-measurable]]).

[F2] The covariance matrix is positive semidefinite and $0\le\lambda_{\max}(\Sigma)\le\operatorname{tr}\Sigma$ ([[lem-finite-covariance-matrix-basic-properties]]).

[F3] The logarithm is increasing and satisfies $\log(2/\delta)=\log2+\log(1/\delta)$ for $0<\delta<1$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

**Given:** The positive-trace covariance, parameters, dyadic index, arbitrary observed input tuple, and correct-scale slab condition in the Statement.

1.1 Since $K_{i_0}\ne\varnothing$, $i_0\in S$. If $S=\mathbb Z$, [F1] puts the algorithm output in $\bigcap_{i\in\mathbb Z}\Gamma(2^i)\subseteq K_{i_0}$. If $S$ is nonempty and proper, its least element $j_*$ satisfies $j_*\le i_0$, so nesting in [F1] gives $K_{j_*}\subseteq K_{i_0}$ and the output again belongs to $K_{i_0}$. Thus the event condition implies $\|\widehat\mu-\mu\|_2\le b\varepsilon Q_0$. [F1, given, algebra]

2.1 The definition of $Q_0$ gives $b\varepsilon Q_0\le256b\sqrt{\operatorname{tr}\Sigma/N}+16b\sqrt{\lambda_{\max}(\Sigma)\varepsilon}$. Since $\varepsilon\le10\eta+2560\log(2/\delta)/N$, square-root subadditivity and [F3] bound the second term by $16b\sqrt{10\lambda_{\max}(\Sigma)\eta}+16b\sqrt{2560\lambda_{\max}(\Sigma)\log(1/\delta)/N}+16b\sqrt{2560\lambda_{\max}(\Sigma)\log2/N}$. By [F2] the final term is at most $16b\sqrt{2560\log2}\sqrt{\operatorname{tr}\Sigma/N}$. These three coefficients are bounded by $c_b$, giving the stated implication. At $b=4$ this is exactly the previous constant. [F2, F3, step 1.1, algebra] ∎
