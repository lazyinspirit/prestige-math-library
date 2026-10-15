---
id: lem-qft-free-time-ordered-kernel
kind: lemma
title: Tempered time-ordered scalar two-point carrier
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-countable-choice
  - def-qft-scalar-mass-shell
  - def-qft-fock-and-test-spaces
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
  - def-schwartz-space-and-its-seminorms
  - def-tempered-distribution
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-fourier-inversion-on-schwartz-space
  - thm-dominated-convergence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-tempered-distribution: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 2, §§2.2 and 2.7.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Complete HTML text of Chapter 2; free scalar mode expansion, the time-ordered two-point function, and the Feynman propagator, equations 2.93–2.127 and 2.165–2.170.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §§3 and 8
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page draft; §3, equations 3.7–3.16, and §8, equations 8.11–8.15. Srednicki's propagator includes a prefactor i; the carrier here does not.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Fix the scalar shell parameter $\mu\ge0$ and all shell, Fourier, and metric conventions of [[def-qft-scalar-mass-shell]], with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\Box=-\partial_t^2+\Delta_{\mathbf x}$. For $\phi\in\mathcal S(\mathbb R^4)$ define the partial spatial Fourier transform
$$\widehat\phi_t(\mathbf k)=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}\phi(t,\mathbf x)\,d^3\mathbf x$$
and define $H_\mu\in\mathcal S'(\mathbb R^4)$ by
$$\langle H_\mu,\phi\rangle=\int_{\mathbb R}dt\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3\,2\omega_\mu(\mathbf k)}e^{-i\omega_\mu(\mathbf k)|t|}\widehat\phi_t(-\mathbf k).$$
This is a continuous distributional extension of the free scalar time-ordered two-point function: on $t>0$ its kernel is the Wightman two-point distribution $W_\mu(t,\mathbf x)$, and on $t<0$ it is $W_\mu(-t,-\mathbf x)$. The displayed partial Fourier formula fixes the extension at $t=0$; no product of a step function with an unspecified singular distribution is used. The kernel is symmetric under $(t,\mathbf x)\mapsto(-t,-\mathbf x)$, agrees with the two orderings on spacelike-separated supports, and obeys
$$ (\Box-\mu^2)H_\mu=i\delta_0 $$
in $\mathcal S'(\mathbb R^4)$. There is no extra prefactor $i$ in the definition of $H_\mu$.

## Facts & Assumptions

**Given:** Countable Choice, $\mu\ge0$, the fixed scalar shell and Fourier conventions, the QFT-MF01 Fock pairing, the QFT-MF02 free scalar field and causal commutator at their current draft interfaces, and the stated Fourier and integration theorems.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] The shell density is $d\nu_\mu=d^3\mathbf k/((2\pi)^3\,2\omega_\mu)$, the phase is $p\circ x=\omega_\mu x^0-\mathbf k\cdot\mathbf x$, and the metric is $(-,+,+,+)$. [[def-qft-scalar-mass-shell]]

[F2] Schwartz space consists of smooth functions with every polynomially weighted derivative bounded. [[def-schwartz-space-and-its-seminorms]]

[F3] A tempered distribution is a continuous complex-linear functional on Schwartz space, paired bilinearly with its test function. [[def-tempered-distribution]]

[F4] The bosonic Fock pairing is second-variable-linear, with the stated vacuum and finite-particle domain. [[def-qft-fock-and-test-spaces]]

[F5] For real tests, $\Phi_\mu(f)=a(K_\mu f)+a^\dagger(K_\mu f)$ and
$$\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle=\langle K_\mu f,K_\mu g\rangle.$$
[[lem-qft-smeared-free-scalar]]

[F6] The scalar commutator distribution has support in the closed causal cone and the smeared free fields commute for pairwise spacelike-separated supports. [[lem-qft-scalar-causal-commutator]]

[F7] Absolutely integrable functions on sigma-finite product spaces may be integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F8] The reciprocal-normalized Fourier inversion formula holds for Schwartz functions, with Countable Choice as stated by its supplier. [[thm-fourier-inversion-on-schwartz-space]]

[F9] Dominated convergence applies to the integrable shell bounds used for the time-slice continuity below. [[thm-dominated-convergence]]

## Proof

**Given:** [A1] and [F1]–[F9].

1.1 For an integer $M\ge2$, integration by parts in $\mathbf x$ gives
$$(1+|\mathbf k|^2)^M\widehat\phi_t(\mathbf k)=\widehat{(1-\Delta_{\mathbf x})^M\phi(t,\cdot)}(\mathbf k).$$
Every boundary term vanishes because $\phi$ is Schwartz. For any fixed $L>3$, Schwartz seminorms bound
$$\int_{\mathbb R^3}|(1-\Delta_{\mathbf x})^M\phi(t,\mathbf x)|\,d^3\mathbf x\le C_M(\phi)(1+|t|)^{-2}\int_{\mathbb R^3}(1+|\mathbf x|)^{-L}d^3\mathbf x,$$
so $|\widehat\phi_t(-\mathbf k)|\le C'_M(\phi)(1+|t|)^{-2}(1+|\mathbf k|^2)^{-M}$. The $t$ bound is integrable. In radial $\mathbf k$ coordinates the shell weight is at most a constant times $r\,dr$ because $\omega_\mu(r)\ge r$; hence its product with $(1+r^2)^{-M}$ is integrable at infinity and at $r=0$, including $\mu=0$. Thus the defining integral converges absolutely and is bounded by a finite Schwartz seminorm, proving that $H_\mu$ is tempered. [A1, F1, F2, F3, algebra]

1.2 For each $\omega>0$, let $g_\omega(t)=e^{-i\omega|t|}/(2\omega)$. It is continuous at $0$, with $g_\omega'(0+)=-i/2$ and $g_\omega'(0-)=+i/2$. For a compactly supported smooth test $\eta(t)$, integrating by parts separately on $(-\infty,0)$ and $(0,\infty)$ cancels the boundary terms involving $\eta'(0)$ and leaves the derivative jump times $\eta(0)$; since $g_\omega''=-\omega^2g_\omega$ off $0$, this proves
$$g_\omega''+\omega^2g_\omega=-i\delta_0$$
as a one-dimensional distribution. [F1, given, algebra]

2.1 By [F4, F5] and Fubini's theorem [F7], the positive-frequency two-point kernel is
$$W_\mu(t,\mathbf x)=\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3\,2\omega_\mu(\mathbf k)}e^{-i\omega_\mu(\mathbf k)t+i\mathbf k\cdot\mathbf x}$$
as a distribution. This is the slice of $H_\mu$ for $t>0$. For $t<0$, replacing $\mathbf k$ by $-\mathbf k$ identifies its slice with $W_\mu(-t,-\mathbf x);$ the same substitution proves $H_\mu(t,\mathbf x)=H_\mu(-t,-\mathbf x)$. For real tests, the vacuum expectation of the field commutator is $W_\mu(f,g)-W_\mu(g,f)$; [F6] identifies it with a distribution supported in the causal cone. Thus the two Wightman orderings agree on spacelike-separated supports. For a compactly supported smooth spatial test supported away from $\mathbf x=0$, both slice pairings are continuous in $t$ by [F9] and the integrable bound in 1.1, so no additional term supported at $t=0$ occurs away from the coincidence point. The partial Fourier formula itself specifies the extension at coincidence. [F1, F4, F5, F6, F7, F9, step 1.1, algebra]

3.1 The spatial Fourier multiplier of $\Box-\mu^2$ is $-\partial_t^2-|\mathbf k|^2-\mu^2=-(\partial_t^2+\omega_\mu(\mathbf k)^2)$. Applying it to the kernel in 2.1 and using 1.2 gives $i\delta_0(t)$ times $(2\pi)^{-3}\int e^{i\mathbf k\cdot\mathbf x}d^3\mathbf k$. Fourier inversion [F8] identifies the latter as $\delta_0(\mathbf x)$. For $\mu=0$ the excluded apex has measure zero and the shell weight is locally integrable there, as established in 1.1; it contributes no additional distribution. Therefore $(\Box-\mu^2)H_\mu=i\delta_0$ in four dimensions. [F1, F8, step 1.1, step 1.2, step 2.1, algebra] ∎
