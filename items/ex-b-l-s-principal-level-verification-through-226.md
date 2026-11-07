---
id: ex-b-l-s-principal-level-verification-through-226
kind: example
title: Verification for Γ(N) Through N = 226
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-booker-lee-strombergsson-finite-selberg-verification-ranges
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "Theorem 1.1: verification for Γ(N), N≤226."
---

## Example

For every integer $N$ with $1\le N\le226$, the published BLS finite
verification asserts that each positive cuspidal weight-zero Laplace
eigenvalue on $\Gamma(N)\backslash\mathbb H$ is at least $1/4$. The assertion
is subject to the interval-computation qualifications of the source and is
recorded here as a finite range example, not as an independent replay.
Here $\Gamma(N)=\{\gamma\in\mathrm{SL}_2(\mathbb Z):
\gamma\equiv I\pmod N\}$ is the principal congruence subgroup.
Here $\Gamma(N)=\{\gamma\in\mathrm{SL}_2(\mathbb Z):
\gamma\equiv I\pmod N\}$ is the principal congruence subgroup.

## Example references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Proof status

This example depends on the finite-range theorem, whose production certificate
and local replay are unavailable. No independent finite verification is
claimed.
