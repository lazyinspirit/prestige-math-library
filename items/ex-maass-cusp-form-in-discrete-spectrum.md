---
id: ex-maass-cusp-form-in-discrete-spectrum
kind: example
title: "A Maass Cusp Form in the Discrete Spectrum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-weight-zero-maass-form-on-gamma0n
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.16: the discrete Maass cusp basis and Parseval contribution."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1 and §6.1: Maass cusp forms and the discrete term in the spectral expansion."
---

## Example

Let $u_j$ be a normalized weight-zero Maass cusp form that occurs in an orthonormal basis $\mathcal B_{\mathrm{disc}}$ of the discrete Laplace spectrum for $\Gamma_0(N)$ with even unitary character $\chi$. For every smooth compactly supported automorphic function $f$, its discrete spectral coefficient is $\langle f,u_j\rangle$, its contribution to the spectral reconstruction is $\langle f,u_j\rangle u_j$, and its contribution to Parseval's identity is $|\langle f,u_j\rangle|^2$.

## Example references

[[thm-spectral-decomposition-l2-congruence-surface]]

[[def-weight-zero-maass-form-on-gamma0n]]

## Facts & Assumptions

**Given:** The normalized Maass cusp form $u_j$ in the stated orthonormal discrete basis, and the smooth compactly supported automorphic function $f$. The integral pairing is linear in its first argument. No existence of a continuous spectral decomposition is assumed here.

[F1] The Maass function is square-integrable and its norm is the integral over the quotient with measure $d\mu=y^{-2}dx\,dy$. ([[def-weight-zero-maass-form-on-gamma0n]])

[F2] Products of two square-integrable functions are integrable, with $\int |fg|\,d\mu\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Verification

1.1 Compact quotient support and smoothness make $f$ square-integrable; the given normalization is $\int|u_j|^2d\mu=1$. The product $f\overline{u_j}$ is integrable by [F2]. Thus $c=\int f\overline{u_j}d\mu=\langle f,u_j\rangle$ is defined. Put $r=f-cu_j$. Linearity of the integral gives $\langle r,u_j\rangle=c-c\int|u_j|^2d\mu=0$. [given, F1, F2, construct, algebra]

2.1 If $f=bu_j+r'$ and $\langle r',u_j\rangle=0$, pairing with $u_j$ gives $b=c$. Therefore the rank-one orthogonal component is uniquely $cu_j$. In particular it is the $u_j$ term in any orthogonal spectral reconstruction containing the specified discrete basis vector: pairing any such convergent reconstruction with $u_j$ annihilates its orthogonal remaining components, with continuity supplied by [F2]. This uses the basis/vector data already assumed in the Example and proves no existence of other spectral components. [F2, step 1.1, algebra]

3.1 Expand $|cu_j+r|^2$ and integrate. The two cross terms vanish by step 1.1 and their conjugates, giving $\|f\|_2^2=|c|^2\|u_j\|_2^2+\|r\|_2^2=|\langle f,u_j\rangle|^2+\|r\|_2^2$. Hence the contribution of this normalized vector to Parseval is precisely $|\langle f,u_j\rangle|^2$, and steps1.1--2.1 give the asserted coefficient and reconstruction term. [given, step 1.1, step 2.1, algebra] ∎

## Remarks

The cuspidal and Eisenstein spectral-decomposition theorem states the full discrete-plus-continuous decomposition and remains held. The calculation above is a single-vector orthogonal-projection calculation under the Example's given basis data, with no proof or existence credit for that full theorem.

## Remarks references

[[thm-spectral-decomposition-l2-congruence-surface]]
