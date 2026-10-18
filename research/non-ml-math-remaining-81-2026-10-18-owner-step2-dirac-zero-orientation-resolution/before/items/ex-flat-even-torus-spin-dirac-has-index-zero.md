---
id: ex-flat-even-torus-spin-dirac-has-index-zero
kind: example
title: "Fourier modes give index zero for the periodic flat even torus"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory-examples
dependency_level: 11
deps:
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
  - thm-complex-spin-modules-and-compact-reducibility
  - lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel
  - cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - lem-duals-of-finite-products-and-discrete-direct-sums
  - def-dependent-choice
  - def-axiom-of-choice
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC and dependent choice; exact current Clifford/Spin interfaces"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
---

## Statement

Assume full AC and dependent choice, with the complex spin-module suppliers in [A1]. On the flat torus
$T^{2m}=\mathbb R^{2m}/\mathbb Z^{2m}$ with the periodic Spin structure and $m\ge1$, the untwisted chiral Spin Dirac operator has index zero. Its kernel and adjoint kernel are precisely the constant positive- and negative-chirality spinors.

## Facts & Assumptions

**Given:** The flat quotient torus, its translation-invariant orthonormal frame, the periodic Spin lift, and the standard normalized Haar measure.

[F1] The periodic lift is the product principal Spin bundle over the trivial oriented orthonormal frame bundle; its spinor bundle and connection are the corresponding associated bundle and trivial connection ([[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]], [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]).

[F2] In dimension $2m$, the complex spinor module splits into half-spin spaces of equal dimension $2^{m-1}$ ([[thm-complex-spin-modules-and-compact-reducibility]]).

[F3] Compact-group Plancherel makes the characters a complete orthonormal basis indexed by the Pontryagin dual; finite-product duality identifies $\widehat{\mathbb T^{2m}}$ with $(\widehat{\mathbb T})^{2m}$ ([[cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]). The local character classification in step 1.1 identifies $\widehat{\mathbb T}=\mathbb Z$.

[F4] On a compact manifold, the chiral Dirac operator with its maximal $H^1$ domain is Fredholm ([[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]]).

[A1] The equal half-spin dimensions in [F2] follow from the actual [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]]. Full AC supplies the compact Fourier and representation hypotheses; dependent choice is declared in [[def-dependent-choice]].

## Proof

**Given:** The periodic spinor section and the chiral Dirac operator.

1.1 First classify the characters of $\mathbb T=\mathbb R/\mathbb Z$. If $\chi:\mathbb T\to S^1$ is a continuous character, let $f(t)=\chi([t])$. By continuity at $0$, choose $\delta>0$ so that on $|t|<2\delta$ the values of $f$ lie in the arc with a continuous argument $\theta(t)\in(-1/8,1/8)$, normalized by $f(t)=e^{2\pi i\theta(t)}$. Whenever $|s|,|t|,|s+t|<\delta$, the character identity gives $\theta(s+t)-\theta(s)-\theta(t)\in\mathbb Z$; this difference has absolute value less than $3/8$, so it is zero. Define $\Theta(u)=N\theta(u/N)$ for any positive integer $N$ with $|u/N|<\delta$. If $N,N'$ both work, repeated local additivity gives $N\theta(u/N)=NN'\theta(u/(NN'))=N'\theta(u/N')$, so $\Theta$ is well-defined. Choosing $N$ large enough for $s,t,s+t$ shows $\Theta(s+t)=\Theta(s)+\Theta(t)$. Near zero $\Theta=\theta$, so $\Theta$ is continuous, and the continuous additive equation gives $\Theta(t)=\alpha t$ for some $\alpha\in\mathbb R$. For arbitrary $t$, choose $N$ with $|t/N|<\delta$; then $f(t)=f(t/N)^N=e^{2\pi i\alpha t}$. Since $f(1)=1$, $\alpha\in\mathbb Z$. Conversely each $k\in\mathbb Z$ defines $\chi_k([t])=e^{2\pi i kt}$, so $\widehat{\mathbb T}=\mathbb Z$. Finite-product duality now identifies the frequencies of $\mathbb T^{2m}$ with $\mathbb Z^{2m}$, and compact-group Plancherel makes these characters a complete orthonormal basis. [F3, given, algebra]

1.2 The quotient $\mathbb R^{2m}/\mathbb Z^{2m}$ has a global parallel coframe, so the Levi–Civita connection and the periodic spin connection have zero local connection matrix. For each $k\in\mathbb Z^{2m}$, the Fourier character $e_k(x)=e^{2\pi i k\cdot x}$ satisfies $D(e_k\otimes s)=2\pi i\,e_k\otimes c(k)s$. For $k\ne0$, $c(k)^2=-|k|^2I$, so $c(k)$ is invertible. [F1, given, algebra]

2.1 By the completeness in [F3], every $L^2$ spinor is determined by its Fourier coefficients. The equation $D\psi=0$ forces every nonzero-frequency coefficient to vanish by step 1.2; the zero-frequency coefficient is arbitrary. Thus $\ker D^+$ consists exactly of constant elements of $S^+$, and $\ker(D^+)^*=\ker D^-$ consists exactly of constants in $S^-$. [F1, F3, step 1.2]

3.1 By [F2], $\dim_{\mathbb C}S^+=\dim_{\mathbb C}S^-=2^{m-1}$. Hence the Fredholm index supplied by [F4] is $\dim\ker D^+-\dim\ker(D^+)^*=2^{m-1}-2^{m-1}=0$. For $m=1$ both dimensions are one; the zero-dimensional torus is outside the stated range $m\ge1$. The half-spin dimensions use the exact algebra suppliers in [A1]. [A1, F2, F4, step 2.1, algebra] ∎

