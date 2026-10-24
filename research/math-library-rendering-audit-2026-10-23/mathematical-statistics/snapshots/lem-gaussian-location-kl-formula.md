---
id: lem-gaussian-location-kl-formula
kind: lemma
title: "KL divergence between equal-variance Gaussian location laws"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-kullback-leibler-divergence
  - def-multivariate-normal-law
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-normal-density-has-total-mass-one
  - thm-integration-against-a-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Example 4.7"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2, Example 2.1.7; Chapter 8, Example 8.4.4"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC and let $a,b\in\mathbb R$ and $\tau>0$. For the normal location
laws with common variance $\tau^2$,
$$D\bigl(N(a,\tau^2)\|N(b,\tau^2)\bigr)=\frac{(a-b)^2}{2\tau^2}.$$

## Facts & Assumptions

**Given:** AC, real means $a,b$, and a positive scale $\tau$.

[A1] [[def-axiom-of-choice]]: AC supplies the normal-law construction and the Radon–Nikodym assumptions used by the KL definition.

[F1] [[def-standard-normal-and-normal-laws]]: $N(a,\tau^2)$ is the law of $a+\tau Z$ when $Z$ has standard normal law, whose density is $\phi(z)=(2\pi)^{-1/2}e^{-z^2/2}$.

[F2] [[lem-normal-density-has-total-mass-one]]: $\phi$ is a probability density on $\mathbb R$.

[F3] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC supplies countable choice, the axiom required by the change-of-variables supplier.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: for a $C^1$ diffeomorphism $T$ and nonnegative measurable $g$, $\int g(y)\,dy=\int g(T(x))|T'(x)|\,dx$.

[F5] [[thm-integration-against-a-density]]: $\int g\,d(f\,d\mu)=\int gf\,d\mu$ for nonnegative measurable $f,g$.

[F6] [[def-natural-logarithm]]: the natural logarithm is the inverse of the real exponential, so $\log(\exp y)=y$. For positive $u,v$, $\log(u/v)=\log u-\log v$ ([[thm-natural-logarithm-laws]]).

[F7] [[def-multivariate-normal-law]]: a normal law with mean $a$ has expectation $a$; in dimension one this is the scalar law $N(a,\tau^2)$.

[F8] [[def-kullback-leibler-divergence]]: for $P\ll Q$, $D(P\|Q)=\int\log(dP/dQ)\,dP$.

## Proof

1.1 Set $p_a(x)=\frac1{\tau\sqrt{2\pi}}\exp(-\frac{(x-a)^2}{2\tau^2})$. Apply [F4] to $g p_a$ with $T(z)=a+\tau z$; since $\tau p_a(a+\tau z)=\phi(z)$ by [F1], for every nonnegative Borel $g$, $\int g(x)p_a(x)\,dx=\int g(a+\tau z)\phi(z)\,dz.$ Thus $N(a,\tau^2)$ has Lebesgue density $p_a$; the same calculation gives $p_b$ for $N(b,\tau^2)$. Both are strictly positive. Let $r=p_a/p_b$. By [F5], $\int_Er\,dN(b,\tau^2)=\int_Ep_a\,dx=N(a,\tau^2)(E)$ for every Borel set $E$, so $r=dN(a,\tau^2)/dN(b,\tau^2)$. [A1, F1, F2, F3, F4, F5, given, construct]

1.2 For every $x$, cancel the common positive prefactor of $p_a$ and $p_b$ and apply the quotient law and inverse identity in [F6] to obtain $\log\frac{p_a(x)}{p_b(x)}=\frac{(x-b)^2-(x-a)^2}{2\tau^2}=\frac{(a-b)(2x-a-b)}{2\tau^2}.$ This affine function is integrable under $N(a,\tau^2)$, whose mean is $a$ by [F7]. [F1, F6, F7, algebra]

2.1 By [F8] and step 1.2, $D\bigl(N(a,\tau^2)\|N(b,\tau^2)\bigr)=\int\frac{(a-b)(2x-a-b)}{2\tau^2}\,N(a,\tau^2)(dx)=\frac{(a-b)(2a-a-b)}{2\tau^2}=\frac{(a-b)^2}{2\tau^2}.$ The identity also covers $a=b$, when both sides are zero. [A1, F8, step 1.2, algebra] ∎
