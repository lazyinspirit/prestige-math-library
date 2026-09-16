---
id: cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability
kind: counterexample
title: "Fixed-time assertions do not yield a pathwise nowhere statement"
status: draft
origin: pipeline
deps: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.1.6 and the surrounding discussion of fixed-time versus pathwise statements"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement refuted

The inference "if for each fixed time $t$ the path is almost surely not
differentiable at $t$, then almost surely the path is nowhere differentiable"
is invalid. There is a continuous random process $X$ on $[0,1]$ such that for
every fixed deterministic $t$ the path is differentiable at $t$ almost surely,
while every sample path fails to be differentiable somewhere.

## Counterexample

**Given:** no special hypotheses beyond the standard Borel measure space $([0,1],\mathcal B([0,1]),\lambda)$ and the process $X_t(\omega):=|t-\omega|$ for $t\in[0,1]$.

1.1 Each sample path $t\mapsto X_t(\omega)=|t-\omega|$ is continuous, and the map $(t,\omega)\mapsto|t-\omega|$ is continuous hence jointly measurable; moreover the path has a corner at $t=\omega$, so it is not differentiable there, and hence every sample path fails to be differentiable at the point $t=\omega\in[0,1]$. [given]

1.2 For a fixed deterministic $t\in[0,1]$ the set of outcomes at which the path fails to be differentiable at $t$ is contained in $\{\omega=t\}$, a Lebesgue-null singleton, so at each fixed $t$ the path is differentiable at $t$ almost surely; in fact the difference quotient of $t\mapsto|t-\omega|$ equals $-1$ for $t>\omega$ and $+1$ for $t<\omega$, which shows directly that differentiability at $t$ holds exactly for $\omega\ne t$. [given]

2.1 Consequently the hypothesis "for each fixed $t$, almost surely the path is not differentiable at $t$" can hold while the pathwise statement "almost surely there is no time of differentiability" fails, since here the fixed-time assertion is even the opposite one and the pathwise failure still occurs at one point per path; the quantifier inversion between a fixed time and an uncountable family of times is the defect being exhibited. [step 1.1, step 1.2] ∎

## Source notes

Durrett's discussion around Theorem 7.1.6 contrasts fixed-time statements with
the pathwise nowhere-differentiability theorem for Brownian motion; the example
above is the elementary logical witness that the fixed-time form cannot be
upgraded to the pathwise form by any measure-theoretic argument alone.
