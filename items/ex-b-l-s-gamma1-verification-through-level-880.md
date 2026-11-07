---
id: ex-b-l-s-gamma1-verification-through-level-880
kind: example
title: Verification for Γ₁(N) Through N = 880
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
      locator: "Theorem 1.1: verification for Γ₁(N), N≤880."
---

## Example

For every integer $N$ with $1\le N\le880$, the published BLS finite
verification asserts that each positive cuspidal weight-zero Laplace
eigenvalue on $\Gamma_1(N)\backslash\mathbb H$ is at least $1/4$. The assertion
is subject to the interval-computation qualifications of the source and is
recorded here as a finite range example, not as an independent replay.
Here $\Gamma_1(N)=\{\begin{psmallmatrix}a&b\\c&d\end{psmallmatrix}\in
\mathrm{SL}_2(\mathbb Z):a\equiv d\equiv1,\ c\equiv0\pmod N\}$.
Here $\Gamma_1(N)$ consists of matrices
$\begin{psmallmatrix}a&b\\c&d\end{psmallmatrix}\in\mathrm{SL}_2(\mathbb Z)$
with $a\equiv d\equiv1$ and $c\equiv0\pmod N$.

## Example references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Proof status

This example depends on the finite-range theorem, whose production certificate
and local replay are unavailable. No independent finite verification is
claimed.
