---
id: ex-rankin-selberg-series-for-level-one-eigenforms
kind: example
title: "A Rankin–Selberg Series for Two Level-One Eigenforms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-modular-discriminant-and-j-invariant
  - ex-level-one-discriminant-as-hecke-eigenform
  - def-gl2-rankin-selberg-l-function
  - thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation
  - def-euler-gamma-function
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, the discriminant cusp form and its q-expansion, printed pp. 54–56; Chapter 5 Hecke operators, pp. 73–77."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 3 and the completed Rankin–Selberg series, PDF pp. 5–7."
forward_refs: []
---

## Example

Let $\Delta(z)=(E_4(z)^3-E_6(z)^2)/1728$ be the normalized level-one
discriminant cusp form of weight $12$, with Fourier expansion
$\Delta(z)=\sum_{n\ge1}\tau(n)e^{2\pi inz}=q-24q^2+O(q^3)$, where
$q=e^{2\pi iz}$. It is a simultaneous Hecke eigenform. Define
$\lambda_\Delta(n):=\tau(n)n^{-11/2}$ and
$$L(s,\Delta\times\Delta):=\zeta(2s)\sum_{n\ge1}\lambda_\Delta(n)^2n^{-s},
\qquad \operatorname{Re}s>2.$$
With $\Gamma_{\mathbb C}(w):=2(2\pi)^{-w}\Gamma(w)$ and
$$\Lambda(s,\Delta\times\Delta):=\Gamma_{\mathbb C}(s)
\Gamma_{\mathbb C}(s+11)L(s,\Delta\times\Delta),$$
the completed series has a meromorphic continuation with no possible poles
except simple poles at $0$ and $1$, and satisfies
$\Lambda(s,\Delta\times\Delta)=\Lambda(1-s,\Delta\times\Delta)$.

## Example references

[[def-modular-discriminant-and-j-invariant|the normalized discriminant and its q-expansion]]

[[ex-level-one-discriminant-as-hecke-eigenform|the discriminant's Hecke eigenform property]]

[[def-gl2-rankin-selberg-l-function|the Rankin–Selberg coefficient normalization]]

[[thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation|the equal-weight functional equation]]

## Facts & Assumptions

**Given:** The modular discriminant $\Delta$, its Fourier coefficients $\tau(n)$, and the level-one Hecke operators.

[F1] [[def-modular-discriminant-and-j-invariant]]: $\Delta$ is a weight-$12$ cusp form with expansion $q-24q^2+O(q^3)$ and leading coefficient $1$.

[F2] [[ex-level-one-discriminant-as-hecke-eigenform]]: $T_n\Delta=\tau(n)\Delta$ for every $n\ge1$.

[F3] [[def-gl2-rankin-selberg-l-function]]: for equal-weight eigenforms, $L(s,f\times g)=\zeta(2s)\sum_{n\ge1}\lambda_f(n)\lambda_g(n)n^{-s}$ on $\operatorname{Re}s>2$.

[F4] [[thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation]]: for two normalized weight-$k$ level-one holomorphic Hecke cusp eigenforms, $\Gamma_{\mathbb C}(s)\Gamma_{\mathbb C}(s+k-1)L(s,f\times g)$ continues meromorphically with at most simple poles at $0,1$ and is invariant under $s\mapsto1-s$.

## Proof

**Given:** $\Delta$ and facts [F1]–[F4].

1.1 By [F1] and [F2], $\Delta$ is a normalized weight-$12$ Hecke cusp eigenform. Its normalized coefficients are $\lambda_\Delta(n)=\tau(n)n^{-(12-1)/2}=\tau(n)n^{-11/2}$. [given, F1, F2, algebra]

2.1 Substituting $f=g=\Delta$ into [F3] gives exactly the displayed Dirichlet series on $\operatorname{Re}s>2$. [F3, step 1.1, algebra]

3.1 Apply [F4] with $k=12$ and $f=g=\Delta$. Its second Gamma argument is $s+k-1=s+11$, so its completed function is the displayed $\Lambda(s,\Delta\times\Delta)$ and it has the asserted meromorphic continuation and functional equation. [F4, step 1.1, step 2.1, algebra] ∎
