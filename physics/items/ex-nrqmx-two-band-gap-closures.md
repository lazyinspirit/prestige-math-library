---
id: ex-nrqmx-two-band-gap-closures
kind: example
domain: mathematics
library: mathematics
title: Gap closings and Chern regions in the two-band lattice model
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 7
deps:
  - thm-nrqmx-two-band-degree-formula
  - thm-regular-value-formula-for-degree
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-two-band-degree-formula: mathematical-premise
  thm-regular-value-formula-for-degree: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 2, §2.3.4; Chapter 6, §§6.1.1–6.1.2, Eqs. (6.1)–(6.5).
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Sections I.C.2 and I.D.
---

## Example

Assume Axiom of Choice and Countable Choice. For $M\in\mathbb R$, consider the two-orbital finite-range Bloch Hamiltonian

$$h_M(k)=\sin k_1\,\sigma_1+\sin k_2\,\sigma_2+(M+\cos k_1+\cos k_2)\,\sigma_3,$$

on the oriented torus $\mathbb T^2_{2\pi}$. Its spectral gap closes exactly when $M\in\{-2,0,2\}$. For each fixed $M$ outside this set, the lower and upper band Chern numbers in the convention $C(P)=\frac{i}{2\pi}\int\operatorname{tr}(P(dP\wedge dP)P)$ are

| Parameter range | $\deg(n_M)$ | $C(P_-)$ | $C(P_+)$ |
|---|---:|---:|---:|
| $M<-2$ | $0$ | $0$ | $0$ |
| $-2<M<0$ | $+1$ | $+1$ | $-1$ |
| $0<M<2$ | $-1$ | $-1$ | $+1$ |
| $M>2$ | $0$ | $0$ | $0$ |

Each Chern number is constant on its parameter interval. At the three closing values a separated band projector, and therefore its Chern number, is not defined.

## Example references

[[thm-nrqmx-two-band-degree-formula]]

[[thm-regular-value-formula-for-degree]]

## Facts & Assumptions

**Given:** Axiom of Choice, Countable Choice, the real parameter $M$, the stated Bloch Hamiltonian, the torus orientation, and the Chern convention in the example.

[A1] Axiom of Choice and Countable Choice are the principles in [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] [[thm-nrqmx-two-band-degree-formula]] gives $C(P_-) = \deg(n_M)$ and $C(P_+)=-\deg(n_M)$ for $n_M=d_M/|d_M|$ when $d_M$ is nowhere zero.

[F2] [[thm-regular-value-formula-for-degree]] computes the degree of a smooth map between closed oriented surfaces by the signed number of preimages of any regular value.

## Verification

**Given:** [A1], [F1], [F2], the Bloch matrix, and the standard orientations on the torus and sphere.

1.1 Write $d_M=(\sin k_1,\sin k_2,M+\cos k_1+\cos k_2)$. The band energies are $\pm|d_M|$, so the gap is $2|d_M|$ and closes exactly if all three components vanish. The first two vanish only when each $k_j$ is $0$ or $\pi$ modulo $2\pi$; the third component at $(0,0),(\pi,0),(0,\pi),(\pi,\pi)$ is respectively $M+2,M,M,M-2$. Thus a zero exists exactly at $M=-2,0,2$. For every other fixed $M$, compactness of the torus and continuity give $\min_k|d_M(k)|>0$, so the two bands have a uniform gap. The sine and cosine terms are finite Fourier sums with nearest-neighbor support, hence this is a finite-range Hermitian Bloch matrix. [given, algebra]

2.1 Fix $M$ outside the closing set and let $N=(0,0,1)\in S^2$. The preimages of $N$ under $n_M=d_M/|d_M|$ are exactly the four candidate points above for which the third component is positive. Near such a point, use the oriented coordinates $(n_1,n_2)$ at $N$. The derivative matrix is diagonal with entries $\cos k_1/d_3$ and $\cos k_2/d_3$, where $d_3=M+\cos k_1+\cos k_2>0$; its determinant is nonzero. Therefore $N$ is a regular value, and the local orientation signs at $(0,0),(\pi,0),(0,\pi),(\pi,\pi)$, whenever present, are respectively $+1,-1,-1,+1$. By [F2], degree is the sum of the signs for those points with $d_3>0$. [F2, step 1.1, given, algebra]

3.1 If $M<-2$, no candidate has $d_3>0$ and the sum is $0$. If $-2<M<0$, only $(0,0)$ contributes, giving $+1$. If $0<M<2$, $(0,0),(\pi,0),(0,\pi)$ contribute $+1-1-1=-1$. If $M>2$, all four contribute $+1-1-1+1=0$. Substitution into [F1] gives every table entry. For any two values in one of the four intervals, the closed segment between them remains in that interval; the joint function $|d_M(k)|$ is positive on the compact torus times that segment, so it has a positive minimum and supplies a gap-preserving deformation. [A1, F1, step 2.1, given, algebra] ∎
