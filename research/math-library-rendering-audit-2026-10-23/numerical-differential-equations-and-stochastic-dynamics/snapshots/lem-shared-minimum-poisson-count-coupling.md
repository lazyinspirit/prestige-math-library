---
id: lem-shared-minimum-poisson-count-coupling
kind: lemma
title: "Shared-minimum coupling of two Poisson counts"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David F. Anderson and Desmond J. Higham, Multilevel Monte Carlo for continuous time Markov chains, with applications in biochemical kinetics"
      url: "https://strathprints.strath.ac.uk/36279/1/8509181.pdf"
      locator: "§6, shared and residual Poisson processes for rates 13.1 and 13, PDF pp. 11–12."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.1, Poisson count parameters and moments for tau leaping, PDF pp. 2–3."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $h\ge0$ and let $\lambda_1,\lambda_2\ge0$. Let $C,R_1,R_2$ be
independent counts with laws
$$C\sim\operatorname{Pois}(h\min(\lambda_1,\lambda_2)),\quad R_1\sim\operatorname{Pois}(h(\lambda_1-\lambda_2)^+),\quad R_2\sim\operatorname{Pois}(h(\lambda_2-\lambda_1)^+),$$
and set $K_1=C+R_1$, $K_2=C+R_2$. Then $K_i\sim\operatorname{Pois}(h\lambda_i)$,
$$\mathbb E(K_1-K_2)=h(\lambda_1-\lambda_2),\qquad \operatorname{Var}(K_1-K_2)=h|\lambda_1-\lambda_2|,$$
and
$$\operatorname{Cov}(K_1,K_2)=h\min(\lambda_1,\lambda_2).$$

## Facts & Assumptions

**Given:** $h\ge0$, nonnegative rates $\lambda_1,\lambda_2$, and the
independent Poisson counts in the Statement.

[F1] [[def-scalar-poisson-count-law]]: for finite $\theta\ge0$,
$\operatorname{Pois}(\theta)$ has masses $e^{-\theta}\theta^k/k!$ for
$k\in\mathbb N_0$, with the zero-parameter law concentrated at $0$.

[F2] [[lem-poisson-count-law-normalization-and-moments]]: a Poisson count
with parameter $\theta$ has mean and variance $\theta$.

## Proof

**Given:** The independent counts and facts [F1]–[F2].

1.1 If $A\sim\operatorname{Pois}(\alpha)$ and $B\sim\operatorname{Pois}(\beta)$ are independent, then for $\alpha,\beta>0$ and $n\in\mathbb N_0$ their convolution is $$\mathbb P(A+B=n)=e^{-(\alpha+\beta)} \sum_{k=0}^n\frac{\alpha^k\beta^{n-k}}{k!(n-k)!} =e^{-(\alpha+\beta)}\frac{(\alpha+\beta)^n}{n!},$$ by the binomial theorem. If either parameter is zero, the corresponding count is identically zero by [F1], and the same conclusion follows. Thus an independent sum has Poisson law with the sum of its parameters. [F1, algebra]

2.1 Apply step 1.1 to $C+R_1$ and $C+R_2$. Their parameters are respectively $h\min(\lambda_1,\lambda_2)+h(\lambda_1-\lambda_2)^+=h\lambda_1$ and $h\min(\lambda_1,\lambda_2)+h(\lambda_2-\lambda_1)^+=h\lambda_2$. This proves the marginal laws. [step 1.1, algebra]

3.1 The shared count cancels in $K_1-K_2=R_1-R_2$. Independence and [F2] give its mean as $h(\lambda_1-\lambda_2)^+-h(\lambda_2-\lambda_1)^+=h(\lambda_1-\lambda_2)$ and its variance as $h(\lambda_1-\lambda_2)^++h(\lambda_2-\lambda_1)^+=h|\lambda_1-\lambda_2|$. Also, since $R_1,R_2$ are independent of $C$ and of each other, $$\operatorname{Cov}(K_1,K_2) =\operatorname{Var}(C)=h\min(\lambda_1,\lambda_2)$$ by [F2]. This proves all identities. [F2, algebra] ∎
