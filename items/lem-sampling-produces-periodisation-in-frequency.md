---
id: lem-sampling-produces-periodisation-in-frequency
kind: lemma
title: "Sampling at a lattice produces periodisation of the spectrum over the dual lattice"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb, def-dirac-comb, thm-fourier-transform-converts-allowed-tempered-convolutions-to-products, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, def-dirac-delta-and-its-derivatives, def-fourier-transform-of-a-tempered-distribution, def-fourier-transform-on-l-one-of-rn, def-countable-choice, thm-fourier-transform-maps-schwartz-space-continuously-to-itself]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Definition 23.1, Lemma 23.3 and Theorem 23.5: periodisation over the dual lattice and the sampling identity, PDF pp. 135-138"
    - title: "Andrew Sutherland, MIT 18.785 Lecture 16: The functional equation (course PDF)"
      url: "https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf"
      locator: "§16.1, the product-to-convolution and Poisson interface for the Gaussian sampling instance, printed pp. 1-3"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $f\in\mathcal S(\mathbb R^n)$
and let $\Lambda$ be a full-rank lattice with covolume $c$ and dual
$\Lambda^*$. The product $f\cdot\operatorname{comb}_\Lambda\in\mathcal S'(\mathbb R^n)$
equals the sampled distribution $\sum_{\lambda\in\Lambda}f(\lambda)\delta_\lambda$,
and
$$\mathcal F\bigl(f\cdot\operatorname{comb}_\Lambda\bigr)=\frac{1}{c}\sum_{\lambda^*\in\Lambda^*}\widehat f(\cdot-\lambda^*)=\frac{1}{c}\bigl(\operatorname{comb}_{\Lambda^*}*\widehat f\bigr),$$
the **periodisation of the spectrum over the dual lattice with scale** $c^{-1}$.
In particular for $\Lambda=h\mathbb Z^n$ ($h>0$) sampling at spacing $h$ gives
$$\mathcal F\Bigl(\sum_{k\in\mathbb Z^n}f(hk)\delta_{hk}\Bigr)=h^{-n}\sum_{m\in\mathbb Z^n}\widehat f(\cdot-m/h).$$

## Facts & Assumptions

**Given:** Countable Choice, $f\in\mathcal S(\mathbb R^n)$, the full-rank lattice $\Lambda=A\mathbb Z^n$ with covolume $c$ and dual $\Lambda^*$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]), the Dirac combs and deltas of [[def-dirac-comb]] and [[def-dirac-delta-and-its-derivatives]], and the distributional convolution $(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle$ of [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]].

[F1] $\operatorname{comb}_\Lambda\in\mathcal S'(\mathbb R^n)$ with $\langle\operatorname{comb}_\Lambda,\psi\rangle=\sum_\lambda\psi(\lambda)$ absolutely convergent for Schwartz $\psi$, and $\mathcal F\operatorname{comb}_\Lambda=c^{-1}\operatorname{comb}_{\Lambda^*}$ ([[lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb]]).

[F2] Multiplication by a Schwartz function is transposition, $\langle f\cdot u,\psi\rangle=\langle u,f\psi\rangle$, preserves $\mathcal S'$, and $f\psi\in\mathcal S$ for $\psi\in\mathcal S$ ([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

[F3] Product-to-convolution: for $u\in\mathcal S'$ and $\varphi\in\mathcal S$, $\mathcal F(\varphi\,u)=\mathcal F\varphi*\mathcal Fu$ under the distribution-first convention ([[thm-fourier-transform-converts-allowed-tempered-convolutions-to-products]]); the transform of a tempered distribution is defined by $\langle\mathcal Fu,\psi\rangle=\langle u,\mathcal F\psi\rangle$ ([[def-fourier-transform-of-a-tempered-distribution]]).

[F4] $\widehat f\in\mathcal S(\mathbb R^n)$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]), and for the $L^1$ transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ the two notions agree on Schwartz functions ([[def-fourier-transform-on-l-one-of-rn]]).

[F5] $\operatorname{covol}(h\mathbb Z^n)=h^n$ and $(h\mathbb Z^n)^*=h^{-1}\mathbb Z^n$: the diagonal matrix $hI$ has determinant $h^n$, and $(hI)^{-T}\mathbb Z^n=h^{-1}\mathbb Z^n$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]).

## Proof

**Proof technique:** direct.

1.1 For $\psi\in\mathcal S$, [F2] gives $\langle f\cdot\operatorname{comb}_\Lambda,\psi\rangle=\langle\operatorname{comb}_\Lambda,f\psi\rangle=\sum_{\lambda\in\Lambda}f(\lambda)\psi(\lambda)$ by [F1], since $f\psi\in\mathcal S$. The right-hand side is absolutely convergent by the shell estimate of [F1], and equals $\langle\sum_\lambda f(\lambda)\delta_\lambda,\psi\rangle$ because for compactly supported $\psi$ only finitely many terms remain and the general case is the absolutely convergent limit of the partial sums [F1]. Hence the product is the sampled distribution. [F1, F2, given, algebra]

2.1 By the product-to-convolution law [F3] applied with $\varphi=f$ and $u=\operatorname{comb}_\Lambda$, and the comb duality [F1], $\mathcal F(f\cdot\operatorname{comb}_\Lambda)=\widehat f*\mathcal F\operatorname{comb}_\Lambda=c^{-1}(\widehat f*\operatorname{comb}_{\Lambda^*})$; the convolution definition [F3] and [F4] give $(\widehat f*\operatorname{comb}_{\Lambda^*})(x)=\sum_{\lambda^*\in\Lambda^*}\widehat f(x-\lambda^*)$, so $\mathcal F(f\cdot\operatorname{comb}_\Lambda)=c^{-1}\sum_{\lambda^*}\widehat f(\cdot-\lambda^*)$ in $\mathcal S'$. [step 1.1, F1, F3, F4, given, algebra]

3.1 For $\Lambda=h\mathbb Z^n$ one has $c=h^n$ and $\Lambda^*=h^{-1}\mathbb Z^n$ by [F5], so the identity reads $\mathcal F(\sum_kf(hk)\delta_{hk})=h^{-n}\sum_m\widehat f(\cdot-m/h)$, the sampling periodisation claimed. Countable Choice is inherited from the comb duality and Schwartz Fourier suppliers above. [step 2.1, F5, given] ∎ 