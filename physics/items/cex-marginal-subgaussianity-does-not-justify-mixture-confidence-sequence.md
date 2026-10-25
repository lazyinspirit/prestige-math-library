---
id: cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence
kind: counterexample
title: Marginal sub-Gaussianity does not justify an anytime confidence sequence
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-gaussian-mixture-confidence-sequence-boundary
  - def-conditional-subgaussian-increments
  - def-subgaussian-variable-and-vector
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - def-conditional-expectation-given-a-sigma-algebra
  - lem-conditional-expectation-is-unique-almost-surely
  - lem-conditional-hoeffding-bound-for-bounded-martingale-differences
  - thm-logarithm-derivative-and-integral
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

For every $\alpha\in(0,1)$ and $\rho>0$, marginal centered sub-Gaussianity with proxy $1$ alone makes the intervals in
[[def-gaussian-mixture-confidence-sequence-boundary]] a $(1-\alpha)$ confidence sequence for the common mean, regardless of dependence.

## Facts & Assumptions

**Given:** Fix $\alpha\in(0,1)$ and $\rho>0$. Let $\Omega=\{-1,+1\}$ with equal probabilities, let $Z(\omega)=\omega$, let $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_t=\sigma(Z)$ for every $t\ge1$, and set $X_t=Z$, $\mu=0$, and $\sigma^2=1$.

[F1] [[lem-conditional-hoeffding-bound-for-bounded-martingale-differences]]: if $D$ is conditionally centered and lies between measurable endpoints $A\le D\le B$ of deterministic width at most $c$, then $\mathbb E[e^{\lambda D}\mid\mathcal G]\le e^{\lambda^2c^2/8}$ for every real $\lambda$.

[F2] [[def-subgaussian-variable-and-vector]]: a centered real random variable is sub-Gaussian with proxy $1$ when $\mathbb E e^{\lambda X}\le e^{\lambda^2/2}$ for every $\lambda\in\mathbb R$.

[F3] [[lem-conditioning-a-known-variable-and-an-independent-variable]]: an integrable variable independent of a sigma-algebra has conditional expectation equal almost surely to its ordinary expectation.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is a measurable integrable function with the same integral as the input on every event in the conditioning sigma-algebra.

[F5] [[lem-conditional-expectation-is-unique-almost-surely]]: any two versions of the same conditional expectation agree almost surely.

[F6] [[def-conditional-subgaussian-increments]]: the required sequential premise bounds the conditional mgf of each increment given $\mathcal F_{t-1}$ for every fixed real $\lambda$.

[F7] [[def-gaussian-mixture-confidence-sequence-boundary]]: for $\sigma^2=1$, the radius at time $t\ge1$ is $t^{-1}\sqrt{(t+\rho)\log((t+\rho)/(\alpha^2\rho))}$.

[F8] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log x=\int_1^x du/u$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the conditional-expectation convention in [F1].

## Counterexample

1.1 We have $\mathbb E Z=0$ and $-1\le Z\le1$. Since $\mathcal F_0$ is trivial, [F3] gives $\mathbb E[Z\mid\mathcal F_0]=0$ and, for every $\lambda$, $\mathbb E[e^{\lambda Z}\mid\mathcal F_0]=\mathbb E e^{\lambda Z}$; the latter variable is integrable because $Z$ has finite support. Apply [F1] with $D=Z$, $A=-1$, $B=1$, and $c=2$ to get $\mathbb E[e^{\lambda Z}\mid\mathcal F_0]\le e^{\lambda^2/2}$, hence $\mathbb E e^{\lambda Z}\le e^{\lambda^2/2}$ for every $\lambda\in\mathbb R$. Thus every marginal $X_t=Z$ is centered and sub-Gaussian with proxy $1$ by [F2]. [given, F1, F2, F3, A1]

1.2 At time $t=2$, $X_2=Z$ is $\mathcal F_1$-measurable. Its own version satisfies [F4], so [F5] gives $\mathbb E[e^{X_2}\mid\mathcal F_1]=e^Z$ almost surely. On the event $\{Z=1\}$, which has probability $1/2$, this equals $e>e^{1/2}$. Hence the conditional sub-Gaussian premise [F6] with proxy $1$ fails at $t=2$ and $\lambda=1$. [given, F4, F5, F6, algebra]

1.3 Every sample mean is $\bar X_t=Z$. For all sufficiently large $t$, $(t+\rho)/(\alpha^2\rho)\ge1$; using [F8] and $u^{-1}\le u^{-3/4}$ for $u\ge1$ gives $(u_\alpha(t)/t)^2\le4(t+\rho)^{5/4}/((\alpha^2\rho)^{1/4}t^2)=4t^{-3/4}(1+\rho/t)^{5/4}/(\alpha^2\rho)^{1/4}\to0$. Thus the radius is eventually less than $1$. [given, F7, F8, algebra]

2.1 Since $|\bar X_t|=|Z|=1$, step 1.3 implies that $0$ is outside every boundary interval for all sufficiently large $t$, on both outcomes. Therefore $\mathbb P(0\in C_t\text{ for all }t\ge1)=0<1-\alpha$, refuting the statement. [given, step 1.3, F7, algebra] ∎
