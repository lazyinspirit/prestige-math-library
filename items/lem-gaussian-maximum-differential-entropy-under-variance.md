---
id: lem-gaussian-maximum-differential-entropy-under-variance
kind: lemma
title: A Gaussian maximizes scalar differential entropy at fixed variance
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-kullback-leibler-divergence, thm-kullback-leibler-is-nonnegative, def-natural-logarithm, def-standard-normal-and-normal-laws, def-moments-variance-and-covariance, thm-nondegenerate-multivariate-normal-law-has-density]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the measure-theoretic KL and Gaussian-law definitions; no selection beyond those interfaces is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 2 §2.3, Theorem 2.8"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "David J. C. MacKay, Information Theory, Inference, and Learning Algorithms, Chapter 12 §12.3"
      url: https://www.geophysik.uni-muenchen.de/~igel/Inv-II/Others/Mackay/information_theory.pdf
---

## Statement

Assume AC. Let $V$ have a Lebesgue density $p$ with $\int p(x)|\ln p(x)|\,dx<\infty$, finite mean $\mu$, and positive finite variance $v=\mathbb E[(V-\mu)^2]$. Define $h(V):=-\int p(x)\ln p(x)\,dx$. Then
$$h(V)\le\frac12\ln(2\pi e v),$$
with equality exactly when $V\sim N(\mu,v)$.

## Facts & Assumptions

**Given:** AC and a real random variable with a density whose entropy integrand is absolutely integrable, finite mean, and positive finite variance.

[A1] [[def-axiom-of-choice]]: AC is required by the stated measure-theoretic KL convention and the Gaussian-law definitions.

[F1] [[def-kullback-leibler-divergence]]: for $P\ll Q$, $D(P\|Q)=\int\ln(dP/dQ)\,dP$.

[F2] [[thm-kullback-leibler-is-nonnegative]]: for probability measures, $D(P\|Q)\ge0$, with equality exactly when $P=Q$.

[F3] [[def-standard-normal-and-normal-laws]] and [[thm-nondegenerate-multivariate-normal-law-has-density]]: for $v>0$, $N(\mu,v)$ has density $(2\pi v)^{-1/2}\exp(-(x-\mu)^2/(2v))$.

[F4] [[def-moments-variance-and-covariance]]: $\mathbb E[(V-\mu)^2]=v$.

[F5] [[def-natural-logarithm]]: $\ln$ denotes the natural logarithm.

## Proof

1.1 Let $q$ be the positive density in [F3]. Since $q(x)>0$ for every $x$, the law with density $p$ is absolutely continuous with respect to the Gaussian law. Its KL divergence is well-defined by [F1]. The absolute entropy-integrability hypothesis and finite second moment make each term in the following expansion integrable. [A1, F1, F3, F4, F5, given]

2.1 Expanding $\ln(p/q)$ and integrating gives $D(P_V\|N(\mu,v))=-h(V)+\frac12\ln(2\pi v)+\frac{\mathbb E[(V-\mu)^2]}{2v}=-h(V)+\frac12\ln(2\pi e v)$. By [F2] this is nonnegative, proving the bound; equality holds exactly when the two laws coincide, again by [F2]. [A1, F1, F2, F3, F4, F5, step 1.1, algebra] ∎