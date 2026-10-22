---
id: prop-qftx-paraxial-spin-error
kind: proposition
title: Axial spin approaches helicity with a quantitative cone bound
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-paraxial-cone
  - def-qftx-photon-projected-angular
  - cor-sine-and-cosine-are-one-lipschitz
  - cor-trigonometric-parity-and-pythagorean-identity
  - lem-qftx-paraxial-vortex-packet-existence
  - prop-qftx-photon-fock-angular-lift
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-paraxial-cone: mathematical-premise
  def-qftx-photon-projected-angular: mathematical-premise
  cor-sine-and-cosine-are-one-lipschitz: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  lem-qftx-paraxial-vortex-packet-existence: mathematical-premise
  prop-qftx-photon-fock-angular-lift: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space"
      url: https://arxiv.org/pdf/1006.3876
      locator: "Full 8-page PDF retrieved; inspected §II Eqs. 6–9 and §IV Eqs. 24–26, including the helicity-projected spin expectation and the ideal-cone correction."
    - title: "A. Bekshaev, M. Soskin, and M. Vasnetsov, Paraxial Light Beams with Angular Momentum"
      url: https://arxiv.org/pdf/0801.2309
      locator: "Full 87-page PDF retrieved; inspected §§2–3 and the spin-to-orbit discussion at PDF pp. 26–27. Its classical field split is contextual only."
    - title: "David Tong, Quantum Field Theory, Chapter 6"
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: "Full author-hosted Chapter 6 HTML retrieved; §6.2.1 Eqs. 6.511–6.523 read in full; other sections not harvested."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice, $\hbar>0$, and fix $0<\kappa_-<\kappa_+<\infty$ and $0<\theta_{\max}<\pi/2$. Let $f$ be a normalized helicity-$\sigma$ packet in the cone $\kappa_-\le |\mathbf k|\le\kappa_+$, $0\le\theta(\mathbf k)\le\theta_{\max}$, with $\sigma\in\{+1,-1\}$. For the helicity-projected operator $S'_z$ on the transverse one-photon Hilbert space,
$$\langle f,S'_zf\rangle_\nu=\hbar\sigma\int_M\cos\theta(\mathbf k)|f(\mathbf k)|^2\,d\nu(\mathbf k),\qquad |\langle f,S'_zf\rangle_\nu-\hbar\sigma|\le\hbar(1-\cos\theta_{\max})\le\frac{\hbar\theta_{\max}^2}{2}.$$
For the exact north-gauge vortex packet of winding $\ell$ constructed in the preceding lemma, $J_z$ has eigenvalue $(\ell+\sigma)\hbar$, and $L'_z=J_z-S'_z$ therefore satisfies
$$\langle f,L'_zf\rangle_\nu=\ell\hbar+\hbar\sigma\left(1-\int_M\cos\theta(\mathbf k)|f(\mathbf k)|^2\,d\nu(\mathbf k)\right),\qquad |\langle f,L'_zf\rangle_\nu-\ell\hbar|\le\frac{\hbar\theta_{\max}^2}{2}.$$
The integer $\ell$ is the coefficient winding in the chosen north gauge; neither formula asserts a global gauge-independent orbital label.

## Statement references

[[def-qftx-paraxial-cone]]

[[lem-qftx-paraxial-vortex-packet-existence]]

[[def-qftx-photon-projected-angular]]

[[prop-qftx-photon-fock-angular-lift]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the normalized transverse helicity packet, the polar-angle support condition, and the operator conventions stated above.

[A1] Assume the Axiom of Choice and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The cone definition gives a packet with $\|f\|_\nu=1$, $P_\sigma f=f$ almost everywhere, and support in $0\le\theta\le\theta_{\max}$. [[def-qftx-paraxial-cone]]

[F2] For every normalized one-photon helicity vector, $\langle f,S'_zf\rangle_\nu=\hbar\sigma\int_M\cos\theta(\mathbf k)|f(\mathbf k)|^2d\nu(\mathbf k)$. [[prop-qftx-photon-fock-angular-lift]]

[F3] $S'_z$ is bounded and self-adjoint, and $L'_z=J_z-S'_z$ on the exact domain $D(J_z)$. [[def-qftx-photon-projected-angular]]

[F4] The rotation convention is $U(R_z(t))=e^{-itJ_z/\hbar}$, with $J_z$ the self-adjoint Stone generator. [[thm-qftx-photon-rotations-helicity]]

[F5] The preceding lemma constructs a normalized vortex packet in $D(J_z)$ with $J_zf=(\ell+\sigma)\hbar f$. [[lem-qftx-paraxial-vortex-packet-existence]]

[F6] Sine is $1$-Lipschitz, so $|\sin u|\le|u|$. [[cor-sine-and-cosine-are-one-lipschitz]]

[F7] Cosine is decreasing on $[0,\pi]$ and takes values in $[-1,1]$. [[thm-sine-cosine-signs-monotonicity-and-ranges]]

[F8] The cosine addition formula and $\sin^2u+\cos^2u=1$ imply $1-\cos x=2\sin^2(x/2)$. [[thm-sine-and-cosine-addition-formulas]] [[cor-trigonometric-parity-and-pythagorean-identity]]

## Proof

**Given:** [A1], [F1]–[F8], and the Statement hypotheses.

1.1 Under the Choice assumptions [A1], [F2] gives $\langle f,S'_zf\rangle_\nu=\hbar\sigma\int_M\cos\theta\,d\rho$, where $d\rho=|f|^2d\nu$ is a probability measure because $\|f\|_\nu=1$. Since $|\sigma|=1$, $\left|\langle f,S'_zf\rangle_\nu-\hbar\sigma\right|=\hbar\left(1-\int_M\cos\theta\,d\rho\right)$; the right side is nonnegative by the range bound in [F7]. [A1, F2, F7, given, algebra]

2.1 On the support, $0\le\theta\le\theta_{\max}<\pi/2$. The monotonicity in [F7] gives $0\le1-\cos\theta\le1-\cos\theta_{\max}$ pointwise. Integrating against the probability measure $\rho$ in step 1.1 proves the first upper bound. [F1, F7, step 1.1, algebra]

3.1 By [F8], $1-\cos\theta_{\max}=2\sin^2(\theta_{\max}/2)$. Applying [F6] with $u=\theta_{\max}/2$ gives $2\sin^2(\theta_{\max}/2)\le2(\theta_{\max}/2)^2=\theta_{\max}^2/2$. Combining this with step 2.1 proves the spin estimate. [F6, F8, step 2.1, algebra]

4.1 Under [A1], the preceding lemma [F5] gives $J_zf=(\ell+\sigma)\hbar f$ and $f\in D(J_z)$ in the rotation convention [F4]. By [F3], $L'_z=J_z-S'_z$ on that domain, so $\langle f,L'_zf\rangle_\nu=(\ell+\sigma)\hbar-\langle f,S'_zf\rangle_\nu$. Substituting [F2] gives the displayed exact orbital expectation; subtracting $\ell\hbar$ and applying step 3.1 gives its stated bound. [A1, F2, F3, F4, F5, step 3.1, algebra] ∎

## Remarks

These are conditional Hilbert-space deductions for the stated one-photon model. The gauge winding is local, and the expectation identities do not identify the projected operators with an apparatus-specific orbital-angular-momentum measurement.
