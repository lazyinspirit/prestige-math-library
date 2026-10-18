---
id: lem-standard-normal-fourth-moment
kind: lemma
title: A normal variable has finite fourth moment
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws, thm-gaussian-integral, thm-integration-by-parts, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, thm-exponential-beats-every-polynomial, thm-substitution-for-improper-integrals, thm-factorization-of-expectations-for-independent-variables]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the published standard-normal law definition; the moment calculation itself is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 2 §2.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "David J. C. MacKay, Information Theory, Inference, and Learning Algorithms, Chapter 12 §12.3"
      url: https://www.geophysik.uni-muenchen.de/~igel/Inv-II/Others/Mackay/information_theory.pdf
---

## Statement

Assume AC and let $G\sim N(0,\sigma^2)$ for $\sigma\ge0$. Then $\mathbb E[G^2]=\sigma^2$ and $\mathbb E[G^4]=3\sigma^4$; in particular the fourth moment is finite. For independent centered normal coordinates $G_j\sim N(0,\sigma_j^2)$, every finite linear combination of the variables $G_j^2$ has finite second moment.

## Facts & Assumptions

**Given:** AC and a scalar centered normal variable with variance $\sigma^2\ge0$.

[A1] [[def-axiom-of-choice]] and [[def-standard-normal-and-normal-laws]]: the standard normal law is defined under AC and has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$.

[F1] [[thm-gaussian-integral]] and [[thm-substitution-for-improper-integrals]]: $\int_{\mathbb R}e^{-x^2/2}\,dx=\sqrt{2\pi}$.

[F2] [[thm-integration-by-parts]]: on finite intervals, $\int u v'=uv|_{a}^{b}-\int u'v$ under its stated integrability hypotheses.

[F3] [[thm-exponential-beats-every-polynomial]]: a fixed polynomial times $e^{-x^2/2}$ tends to zero as $|x|\to\infty$ and is integrable after comparison with a weaker Gaussian tail.

[F4] [[thm-derivative-of-exponential]] gives $\exp'=\exp$; [[thm-chain-rule]] gives $(e^{u(x)})'=e^{u(x)}u'(x)$ for differentiable $u$ on an open interval. The product and scalar rules in [[thm-algebra-of-derivatives]] give $(x^2)'=2x$, so $u(x)=-x^2/2$ has derivative $-x$.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: independent variables with integrable product have factorized product expectation.

## Proof

1.1 Let $I_k:=\int_{\mathbb R}x^{2k}e^{-x^2/2}\,dx$ for $k=0,1,2$. These integrals are finite: outside a bounded interval, $|x|^{2k}e^{-x^2/4}$ is bounded by [F3], while $e^{-x^2/4}$ is integrable by [F1] after scaling. Thus integration by parts on $[-R,R]$ is valid, and its polynomial-exponential boundary terms vanish as $R\to\infty$ by [F3]. [F1, F2, F3, given]

2.1 Since $u(x)=-x^2/2$ is differentiable on $\mathbb R$ and the exponential is differentiable at every $u(x)$, the chain rule in [F4] gives $(e^{-x^2/2})'=-xe^{-x^2/2}$. All these functions and derivatives are continuous on $[-R,R]$, so the hypotheses of [F2] hold. Integration by parts gives $\int_{-R}^R x^2e^{-x^2/2}\,dx=[-xe^{-x^2/2}]_{-R}^R+\int_{-R}^R e^{-x^2/2}\,dx$ and $\int_{-R}^R x^4e^{-x^2/2}\,dx=[-x^3e^{-x^2/2}]_{-R}^R+3\int_{-R}^R x^2e^{-x^2/2}\,dx$. Letting $R\to\infty$, [F3] makes the boundary terms vanish and [F1] gives $I_1=I_0=\sqrt{2\pi}$ and $I_2=3I_1=3\sqrt{2\pi}$; integration against the standard-normal density gives $\mathbb E[G_0^2]=1$ and $\mathbb E[G_0^4]=3$. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 If $\sigma>0$, the definition of $N(0,\sigma^2)$ is the law of $\sigma G_0$, so $\mathbb E[G^2]=\sigma^2\mathbb E[G_0^2]=\sigma^2$ and $\mathbb E[G^4]=\sigma^4\mathbb E[G_0^4]=3\sigma^4$. If $\sigma=0$, $G=0$ almost surely and both formulas hold. For finitely many independent coordinates, [F5] gives $\mathbb E[G_i^2G_j^2]=\mathbb E[G_i^2]\mathbb E[G_j^2]<\infty$; expanding the square of any finite linear combination of the $G_j^2$ proves that it has finite second moment. [A1, F5, step 2.1, given, cases, algebra] ∎
