---
id: thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients
aliases: [nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]
kind: theorem
domain: mathematics
title: "Airy envelopes and asymptotic coefficients"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization, lem-nrqm-composites-complex-gaussian-continuation, thm-dominated-convergence, def-complex-differentiability-holomorphic-and-entire, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization: mathematical-premise
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Sections 9.2, 9.7 (Airy function integral representations, Wronskians and asymptotic expansions)"
      url: "https://dlmf.nist.gov/9.7"
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 11 (uniform Airy asymptotics; standard monograph)"
      url: "https://dlmf.nist.gov/9.7"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $A$ be the
entire Airy function of
[[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]] and
define, for real $z$,
$$B(z):=\frac1\pi\int_0^\infty\Bigl[\exp\bigl(-t^3/3+zt\bigr)+\sin\bigl(t^3/3+zt\bigr)\Bigr]dt .$$
Then:

(a) $B$ is well defined and smooth on $\mathbb R$, extends to an entire
solution of $B''=zB$, and the Wronskian identity
$$A(z)B'(z)-A'(z)B(z)=\frac1\pi$$
holds for all complex $z$;

(b) as $Z\to+\infty$, with $\Theta=2Z^{3/2}/3+\pi/4$,
$$B(Z)=\frac1{\sqrt\pi}Z^{-1/4}e^{2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),\quad B'(Z)=\frac1{\sqrt\pi}Z^{1/4}e^{2Z^{3/2}/3}\bigl(1+O(Z^{-3/2})\bigr),$$
$$B(-Z)=\frac1{\sqrt\pi}Z^{-1/4}\bigl(\cos\Theta+O(Z^{-3/2})\bigr),\quad B'(-Z)=\frac1{\sqrt\pi}Z^{1/4}\bigl(\sin\Theta+O(Z^{-3/2})\bigr);$$

(c) *Envelopes.* With $p(z):=1+|z|$ and $S(z):=\frac23(z_+)^{3/2}$ there is a
constant $C<\infty$ with
$$|A(z)|\le Cp(z)^{-1/4}e^{-S(z)},\quad|B(z)|\le Cp(z)^{-1/4}e^{S(z)},\quad |A'(z)|\le Cp(z)^{1/4}e^{-S(z)},\quad|B'(z)|\le Cp(z)^{1/4}e^{S(z)}$$
for all real $z$, and there is $c>0$ with
$A(z)\ge cp(z)^{-1/4}e^{-S(z)}$ for $z\ge0$.

## Facts & Assumptions

**Given:** the entire functions $A,B$ and real $z,Z>0$.

[F1] $A$ is entire with $A''=zA$, and its positive and negative asymptotics and the estimate of its oscillatory representation are known ([[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]]).

[F2] The exponential integral $E(z):=\frac1\pi\int_0^\infty e^{-t^3/3+zt}dt$ and the sine integral $S(z):=\frac1\pi\int_0^\infty\sin(t^3/3+zt)dt$ converge absolutely and uniformly on compact real sets (the first by cubic decay, the second by the tail integration by parts against $t^2+z$), and are smooth; distributional differentiation against compactly supported smooth tests (justified because the test Fourier transforms decay faster than any power) gives $E''-zE=\frac1\pi$ and $S''-zS=-\frac1\pi$ ([[thm-dominated-convergence]], [[def-complex-differentiability-holomorphic-and-entire]], algebra).

[F3] The substitution computations: for $Z>0$, $t=\sqrt Z+Z^{-1/4}u$ in the exponential integral and $t=\sqrt Z\,s$ with the Fresnel identity in the sine integral ([[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]], [[lem-nrqm-composites-complex-gaussian-continuation]]).

## Proof

1.1 [Definition and ODE] By [F2], $B=E+S$ is smooth and satisfies $B''=zB$ since the two one-sided forcing terms cancel; analytic continuation gives an entire solution. [F2, algebra]

2.1 [Asymptotics] For $Z>0$ the substitution $t=\sqrt Z+Z^{-1/4}u$ gives the exponential branch the leading value $\pi^{-1/2}Z^{-1/4}e^{2Z^{3/2}/3}$ with relative error $O(Z^{-3/2})$, the sine integral being $O(Z^{-1})$ and its derivative polynomially bounded by nonstationary integration [F3]; for the negative argument the exponential integral is $1/Z+O(Z^{-4})$ and the sine integral's endpoint contribution $-1/Z$ cancels it, leaving the cosine coefficient at the stationary point $s=1$, with the derivative computed from amplitude $s$ and smaller endpoint terms. This gives (b). [step 1.1, F1, F3, algebra]

3.1 [Wronskian and envelopes] The function $A B'-A'B$ has derivative $AB''-A''B=0$ by step 1.1 and [F1], and taking $Z\to+\infty$ in the asymptotics of (b) and of [F1] gives its constant value $\pi^{-1}$; the envelope bounds and the positive lower bound for $A$ on $[0,\infty)$ follow from the asymptotics combined with compact-interval continuity, with constants depending only on the fixed Gaussian moments. [step 2.1, F1, F3, algebra] ∎
