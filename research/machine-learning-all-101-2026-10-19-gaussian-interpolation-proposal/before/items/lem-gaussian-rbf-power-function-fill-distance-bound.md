---
id: lem-gaussian-rbf-power-function-fill-distance-bound
kind: lemma
title: Gaussian RKHS power function decays exponentially with inverse fill distance
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-countable-choice
  - ex-gaussian-radial-kernel
  - thm-canonical-rkhs-construction-and-reproducing-property
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Rieger and Zwicknagl, Sampling inequalities for infinitely smooth functions, with applications to interpolation and machine learning"
      url: "https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf"
      locator: "Theorem 6.1 and its proof; §§4.2, 4.3, and 4.5 for the compact-cube route, especially the local polynomial reproduction input attributed to Madych and Nelson (1992), Lemma 1."
    - title: "Belkin, Hsu, Ma, and Mandal, Reconciling modern machine learning practice and the bias-variance trade-off"
      url: "https://arxiv.org/pdf/1812.11118"
      locator: "Appendix A, Theorem 1 and proof sketch; the proof sketch refers to Wendland (2004), Theorem 11.22."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $\Omega\subset\mathbb R^d$ be a fixed closed cube with
positive side length, let $\sigma>0$, and set
$k_\sigma(x,z)=\exp(-\|x-z\|_2^2/(2\sigma^2))$ on $\Omega$. Let
$\mathcal H_\sigma$ be its real reproducing-kernel Hilbert space. For a finite
nonempty set $X=\{x_1,\ldots,x_m\}\subset\Omega$, define its Euclidean fill
distance and Gaussian power function by
$$h_X:=\sup_{x\in\Omega}\min_{1\le j\le m}\|x-x_j\|_2,\qquad
P_X(x):=\inf_{v\in\operatorname{span}\{k_\sigma(\cdot,x_j):1\le j\le m\}}
\|k_\sigma(\cdot,x)-v\|_{\mathcal H_\sigma}.$$
There are constants $C,c,h_0>0$, depending only on $d,\Omega,\sigma$, such
that every such $X$ with $0<h_X\le h_0$ satisfies
$$\sup_{x\in\Omega}P_X(x)\le
C\exp\!\left(-c\frac{|\log h_X|}{h_X}\right).$$

## Statement references

[Rieger and Zwicknagl, Theorem 6.1 and proof](https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf)

[Belkin, Hsu, Ma, and Mandal, Appendix A, Theorem 1 and proof sketch](https://arxiv.org/pdf/1812.11118)

## Facts & Assumptions

**Given:** The Gaussian kernel, cube $\Omega$, and real RKHS
$\mathcal H_\sigma$ from the Statement.

[A1] The Axiom of Countable Choice says every countable sequence of nonempty
sets has a choice function ([[def-countable-choice]]).

[F1] The Gaussian radial function is a real positive semidefinite kernel on
$\mathbb R^d$ ([[ex-gaussian-radial-kernel]]).

[F2] Under Countable Choice a real positive semidefinite kernel has a canonical
RKHS with the stated reproducing property
([[thm-canonical-rkhs-construction-and-reproducing-property]]).

[F3] The finite-dimensional span in the definition has a unique orthogonal
projection in a real inner-product space
([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

## Unresolved proof obligation

The theorem's exact power-function estimate is retained as the planned local
supplier for the noiseless RKHS result. Belkin et al.'s proof sketch invokes
Wendland's Theorem 11.22. The full Rieger–Zwicknagl article derives a
cube-specific sampling inequality through local polynomial reproduction, whose
proof route uses Madych and Nelson's (1992) Lemma 1 without reproducing that
lemma's proof; its separate general-domain route cites Wendland (2001). The
author's dissertation gives the same cube route and also cites Madych and Nelson
rather than proving the reproduction result. Neither route supplies a complete
local proof of the required estimate. This lemma is escalated and supplies no
accepted proof.
