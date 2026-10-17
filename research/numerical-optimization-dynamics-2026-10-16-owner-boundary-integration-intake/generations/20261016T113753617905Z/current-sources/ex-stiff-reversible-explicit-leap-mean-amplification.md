---
id: ex-stiff-reversible-explicit-leap-mean-amplification
kind: example
title: "A stiff reversible system exposes explicit tau-leap mean instability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - lem-bounded-rate-reaction-generator-dynkin-identity
  - lem-poisson-tau-leap-moment-and-covariance-identities
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.4, reversible reaction example, PDF pp. 5–6."
---

## Example

Assume Countable Choice and Dependent Choice. Consider
$A\rightleftarrows B$ with fixed total population $M\ge1$, state
$x=\#A\in\{0,\ldots,M\}$, rates $a_1(x)=c_1x$ and
$a_2(x)=c_2(M-x)$, and jumps $-1,+1$. Let $\lambda=c_1+c_2$.

## Facts & Assumptions

**Given:** $M\in\mathbb N$ with $M\ge1$, $c_1,c_2>0$, the exact chain with these rates,
and the one-step Poisson leap
[[alg-explicit-poisson-tau-leaping]].

[F1] [[def-reaction-network-propensity-system-and-generator]]: the generator
on the state coordinate is
$Qf(x)=c_1x(f(x-1)-f(x))+c_2(M-x)(f(x+1)-f(x))$, with forbidden boundary
rates zero.

[F2] [[lem-bounded-rate-reaction-generator-dynkin-identity]]: for this
finite-state chain, expectations of $v(t,X_t)$ satisfy the generator
identity.

[F3] [[alg-explicit-poisson-tau-leaping]] and
[[lem-poisson-tau-leap-moment-and-covariance-identities]]: one leap has
conditional mean $x+h(c_2M-\lambda x)$.

[A1] Countable Choice is assumed by [F2] for the exponential event law.
[[def-countable-choice]]

[A2] Dependent Choice is assumed by [F2] for the countable event input
sequence. [[def-dependent-choice]]

## Verification

**Given:** Countable Choice, Dependent Choice, $x_0\in\{0,\ldots,M\}$, and a
one-step duration $h>0$.

1.1 Apply [F2] to $v(t,x)=x$ and use [F1]. The exact mean $m(t)=\mathbb E X_t$ satisfies $$m(t)=x_0+\int_0^t(c_2M-\lambda m(s))\,ds.$$ This makes $m$ absolutely continuous; differentiating almost everywhere shows that the derivative of $e^{\lambda t}(m(t)-c_2M/\lambda)$ is zero almost everywhere. This product is absolutely continuous, so it is constant; its value at $t=0$ is $x_0-c_2M/\lambda$. Rearranging gives $$m(t)=\frac{c_2M}{\lambda} +\left(x_0-\frac{c_2M}{\lambda}\right)e^{-\lambda t}.$$ [F1, F2, A1, A2, given, algebra]

2.1 By [F3], one Poisson leap has $\mathbb E Y_1=(1-\lambda h)x_0+c_2Mh$. Its linear mean amplification factor is $1-\lambda h$, whose absolute value exceeds $1$ when $h>2/\lambda$. For the symmetric case $c_1=c_2=r$ and initial state $x_0=0$, the choice $h=3/(2r)$ gives $\mathbb E Y_1=3M/2$, outside the physical upper bound $M$, whereas the exact expectation from step 1.1 is $\frac M2(1-e^{-3})<M/2$. This is a one-step comparison; it does not assume that invalid Poisson leaps remain in the physical state set. [F3, step 1.1, algebra] ∎
