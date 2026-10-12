---
id: cex-nrqm-framework-mean-position-can-fail-to-exist
kind: counterexample
title: "The mean position of a normalized state need not exist"
status: draft
origin: session
domain: physics
dependency_level: 5
deps: [def-nrqm-framework-quantities-and-units, def-nrqm-magnetic-and-detection-position-and-momentum-operators, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, def-improper-integral-at-infinity, thm-improper-p-test-rational, cor-primitives-of-a-continuous-function, lem-derivative-of-a-power, thm-monotone-convergence-for-the-integral, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  thm-improper-p-test-rational: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, on an explicit normalized state of the one-dimensional model, of the claim that the first moment of the position distribution of every normalized state exists: the exhibited state has unit norm but neither a finite second moment nor a finite first absolute moment. The item refutes that general existence claim and records the precise moment condition of the framework's quantity conventions; it asserts no measured value and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): the probability interpretation, expectation values and the moment conditions for position"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 1, printed pages 1-4: normalization of wave functions and the probability density"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the one-dimensional model, every normalized state $\psi\in L^{2}(\mathbb R;\mathbb C)$, $\|\psi\|=1$, has a finite position first moment,
$$\int_{\mathbb R}x\,|\psi(x)|^{2}\,dx\in\mathbb R,$$
so that the mean position of every preparation exists as a real number in the sense of the quantity conventions of the framework.

## Facts & Assumptions

**Given:** The Hilbert space $L^{2}(\mathbb R;\mathbb C)$ with elements read as almost-everywhere classes and $\|\psi\|^{2}=\int_{\mathbb R}|\psi|^{2}\,dx$ ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-l-p-space-as-a-quotient-by-null-functions]]); the position operator $Q$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] with domain $D(Q)=\{\psi\in L^{2}:x\psi\in L^{2}\}$; the moment rule of [[def-nrqm-framework-quantities-and-units]] clause (d7).

[L1] The explicit state: the function $\psi:\mathbb R\to\mathbb C$ with $\psi(x)=\tfrac12$ for $|x|\le1$ and $\psi(x)=\tfrac1{2|x|}$ for $|x|\ge1$ is a well-defined class in $L^{2}(\mathbb R;\mathbb C)$: it is continuous on each of the intervals that cover $\mathbb R$ except at $x=\pm1$, bounded on $[-1,1]$ and of modulus $\tfrac12|x|^{-1}$ on $|x|\ge1$, whose square integrates to a finite value by the rational $p$-test on the half line ([[def-improper-integral-at-infinity]], [[thm-improper-p-test-rational]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] Explicit integrals on $|x|\ge1$: for $N>1$ the fundamental theorem and the power rule give $\int_{1}^{N}x^{-2}\,dx=1-N^{-1}$ and $\int_{1}^{N}x^{-1}\,dx=\ln N$; the improper integrals at infinity are the limits of these truncated integrals ([[cor-primitives-of-a-continuous-function]], [[lem-derivative-of-a-power]], [[def-improper-integral-at-infinity]]).

[L3] Monotone convergence for the truncated absolute moments: $\int_{-N}^{N}|\psi|^{2}\to\int_{\mathbb R}|\psi|^{2}$ and $\int_{-N}^{N}|x||\psi|^{2}\to\int_{\mathbb R}|x||\psi|^{2}\in[0,+\infty]$ along the increasing sequence of sets $[-N,N]$, and similarly for the second moments ([[thm-monotone-convergence-for-the-integral]]).

[L4] Second moments and Cauchy-Schwarz: $\psi\in D(Q)$ means $\int_{\mathbb R}x^{2}|\psi(x)|^{2}\,dx<\infty$, and for a probability density with finite second moment the first absolute moment is finite by the Cauchy-Schwarz inequality applied to the probability measure $|\psi(x)|^{2}dx$ ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Counterexample

**Proof technique:** direct; compute the norm, the second moment and the first absolute moment of the displayed state.

1.1 [Norm one] The squared modulus of the displayed state is $|\psi|^{2}=\tfrac14$ on $[-1,1]$ and $|\psi(x)|^{2}=\tfrac1{4x^{2}}$ for $|x|\ge1$. Its integral is $\int_{-1}^{1}\tfrac14\,dx+2\int_{1}^{\infty}\tfrac{1}{4x^{2}}\,dx=\tfrac12+\tfrac12\lim_{N\to\infty}\bigl(1-N^{-1}\bigr)=\tfrac12+\tfrac12=1$ by [L2] and [L3], so $\psi$ is a normalized state. [given, L1, L2, L3, algebra]

1.2 [Second moment infinite] The second moment is $\int_{\mathbb R}x^{2}|\psi|^{2}\,dx=2\int_{1}^{\infty}x^{2}\cdot\tfrac{1}{4x^{2}}\,dx=\tfrac12\lim_{N\to\infty}\int_{1}^{N}dx=\tfrac12\lim_{N\to\infty}(N-1)=+\infty$ by [L2] and [L3]; equivalently $x\psi\notin L^{2}$ and $\psi\notin D(Q)$, although $\psi$ is a normalized state. [given, L1, L2, L3, algebra]

1.3 [First absolute moment infinite] The first absolute moment is $\int_{\mathbb R}|x|\,|\psi|^{2}\,dx=2\int_{1}^{\infty}x\cdot\tfrac{1}{4x^{2}}\,dx=\tfrac12\lim_{N\to\infty}\int_{1}^{N}x^{-1}\,dx=\tfrac12\lim_{N\to\infty}\ln N=+\infty$ by [L2] and [L3]. Both one-sided integrals $\int_{0}^{\infty}x|\psi|^{2}$ and $\int_{-\infty}^{0}(-x)|\psi|^{2}$ diverge, so the function $x|\psi(x)|^{2}$ is not Lebesgue integrable and the mean $\int_{\mathbb R}x|\psi(x)|^{2}\,dx$ does not exist as a real number. [given, L1, L2, L3, algebra]

2.1 By steps 1.2 and 1.3 the displayed state is normalized, $\|\psi\|=1$, and yet has neither a finite second moment nor a finite first absolute moment, so the refuted general existence claim fails for this state; combining with step 1.1, the precise condition is the one recorded in the quantity conventions, namely that the mean exists exactly when $\int_{\mathbb R}|x|\,|\psi(x)|^{2}\,dx<\infty$, and by [L4] the second-moment condition $\psi\in D(Q)$ implies the mean exists by Cauchy-Schwarz. [step 1.1, step 1.2, step 1.3, L4] ∎

## Remarks

- The example concerns the existence of a moment, not the definition of the preparation: the displayed $\psi$ is a legitimate normalized state, and statements about its position distribution are computed from $|\psi|^{2}dx$. What fails is only the claim that the first moment is automatically finite.
- Moments are not part of the probability postulate of the page; each mean, variance or higher moment of an outcome law is asserted only where its integrability has been established, exactly as the quantity conventions of the framework require.
