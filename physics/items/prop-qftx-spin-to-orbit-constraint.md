---
id: prop-qftx-spin-to-orbit-constraint
kind: proposition
title: Axial symmetry constrains spin-to-orbital conversion
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qftx-paraxial-cone
  - def-qftx-photon-helicity-bundle
  - def-qftx-photon-projected-angular
  - lem-qftx-paraxial-vortex-packet-existence
  - prop-qftx-paraxial-spin-error
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qftx-paraxial-cone: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  def-qftx-photon-projected-angular: mathematical-premise
  lem-qftx-paraxial-vortex-packet-existence: mathematical-premise
  prop-qftx-paraxial-spin-error: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space"
      url: https://arxiv.org/pdf/1006.3876
      locator: "Full 8-page PDF retrieved; inspected §IV Eqs. 25–26 and the discussion at PDF pp. 4–5 on total angular momentum during helicity-preserving focusing."
    - title: "A. Bekshaev, M. Soskin, and M. Vasnetsov, Paraxial Light Beams with Angular Momentum"
      url: https://arxiv.org/pdf/0801.2309
      locator: "Full 87-page PDF retrieved; inspected PDF pp. 26–27 discuss polarization conversion by an inhomogeneous half-wave plate under the stated optical model."
    - title: "David Tong, Quantum Field Theory, Chapter 6"
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: "Full author-hosted Chapter 6 HTML retrieved; §6.2.1 Eqs. 6.511–6.523 read in full; other sections not harvested."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice, and use the transverse Hilbert space $\mathcal H_T^\nu$, the Stone generator $J_z$, and the bounded projected spin operator $S'_z$ and orbital remainder $L'_z=J_z-S'_z$ on $D(J_z)$ defined above. Let $U$ be a unitary linear operator on $\mathcal H_T^\nu$ such that $U(D(J_z))=D(J_z)$ and $J_zU\psi=UJ_z\psi$ for every $\psi\in D(J_z)$. For any normalized input $\psi\in D(J_z)$, put $\psi_{\rm out}=U\psi$ and $\Delta\langle A\rangle=\langle\psi_{\rm out},A\psi_{\rm out}\rangle_\nu-\langle\psi,A\psi\rangle_\nu$. Then
$$\Delta\langle L'_z\rangle=-\Delta\langle S'_z\rangle.$$
For the north-gauge vortex input in the preceding spin-bound proposition, this is an exact balance of its projected spin and orbital expectations; it does not assert that $U$ preserves the cone. A unitary preserves mean helicity $\langle h\rangle_\nu$ for every input vector if and only if $Uh=hU$. Axial commutation alone does not imply helicity preservation: there is a unitary that commutes with $J_z$ and changes helicity.

## Statement references

[[def-qftx-photon-helicity-bundle]]

[[def-qftx-photon-projected-angular]]

[[lem-qftx-paraxial-vortex-packet-existence]]

[[prop-qftx-paraxial-spin-error]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, $\hbar>0$, the transverse one-photon Hilbert space with its helicity multiplier, and a unitary $U$ satisfying the domain and commutation hypotheses in the Statement.

[A1] Assume the Axiom of Choice and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] $h$ is a bounded self-adjoint multiplication operator, and $P_+P_-=0$ on every transverse fiber. [[def-qftx-photon-helicity-bundle]]

[F2] $J_z$ is self-adjoint, $S'_z$ is bounded self-adjoint, and $L'_z=J_z-S'_z$ on $D(J_z)$. [[def-qftx-photon-projected-angular]] [[thm-qftx-photon-rotations-helicity]]

[F3] Fix $\sigma\in\{+1,-1\}$, $0<\kappa_-<\kappa_+<\infty$, and $0<\theta_{\max}<\pi/2$. If $\psi\in\mathcal H_T^\nu$ has $\|\psi\|_\nu=1$, $P_\sigma\psi=\psi$ almost everywhere, and vanishes almost everywhere outside $\kappa_-\le|\mathbf k|\le\kappa_+$, $0\le\theta(\mathbf k)\le\theta_{\max}$, then $|\langle\psi,S'_z\psi\rangle_\nu-\hbar\sigma|\le\hbar(1-\cos\theta_{\max})\le\hbar\theta_{\max}^2/2$. [[prop-qftx-paraxial-spin-error]]

[F4] For every integer $\ell$ and $\sigma=\pm1$, there is a normalized $f_{\sigma,\ell}\in D(J_z)$ with $P_\sigma f_{\sigma,\ell}=f_{\sigma,\ell}$ and $J_zf_{\sigma,\ell}=(\ell+\sigma)\hbar f_{\sigma,\ell}$. [[lem-qftx-paraxial-vortex-packet-existence]]

## Proof

**Given:** [A1], [F1]–[F4], $U$, and normalized $\psi\in D(J_z)$.

1.1 By the hypotheses on $U$, $\psi_{\rm out}\in D(J_z)$ and $J_z\psi_{\rm out}=UJ_z\psi$. Unitarity and the second-variable-linear Hilbert pairing give $\langle\psi_{\rm out},J_z\psi_{\rm out}\rangle_\nu=\langle U\psi,UJ_z\psi\rangle_\nu=\langle\psi,J_z\psi\rangle_\nu$. [A1, given, F2, algebra]

1.2 If $Uh=hU$, then $U^*hU=h$ and unitarity gives $\langle U\psi,hU\psi\rangle_\nu=\langle\psi,h\psi\rangle_\nu$ for every $\psi$. Conversely, if these expectations agree for every unit vector, homogeneity gives equality for every vector. The bounded self-adjoint operator $A=U^*hU-h$ therefore has $\langle x,Ax\rangle_\nu=0$ for every $x$. Expanding this identity at $x+y$, $x-y$, $x+iy$, and $x-iy$ shows both real and imaginary parts of $\langle x,Ay\rangle_\nu$ vanish for every $x,y$, so the polarization identity gives $A=0$ and hence $Uh=hU$. [F1, given, algebra]

1.3 Under the Choice assumptions [A1], choose the two packets $f_+=f_{+1,0}$ and $f_-=f_{-1,2}$ from [F4]. They are normalized and orthogonal because $P_+P_-=0$ by [F1]. Both have $J_z$ eigenvalue $\hbar$, while $hf_+=f_+$ and $hf_-=-f_-$. Let $K=\operatorname{span}\{f_+,f_-\}$, let $U_0$ exchange $f_+$ and $f_-$ on $K$, and let $U_0$ be the identity on $K^\perp$. Its matrix on the ordered orthonormal basis $(f_+,f_-)$ is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which equals its adjoint and has square equal to the identity; thus $U_0$ is unitary. [A1, F1, F4, construct, algebra]

2.1 By [F2], $L'_z=J_z-S'_z$ on the domain containing both input and output. Subtracting the finite expectations in step 1.1 gives $\Delta\langle L'_z\rangle=\Delta\langle J_z\rangle-\Delta\langle S'_z\rangle=-\Delta\langle S'_z\rangle$. If the input also satisfies the fixed-helicity and support hypotheses of [F3], that fact bounds its input spin expectation. Applying the bound to the output would require the corresponding output hypotheses; the exact balance requires neither these packet restrictions nor spin conservation. [A1, F2, F3, step 1.1, algebra]

2.2 The finite-dimensional subspace $K$ lies in the $\hbar$ eigenspace of the self-adjoint $J_z$. Its orthogonal projection $P_K$ preserves $D(J_z)$ and satisfies $J_zP_K\eta=\hbar P_K\eta$. If $\eta\in D(J_z)\cap K^\perp$, self-adjointness gives $\langle v,J_z\eta\rangle_\nu=\langle J_zv,\eta\rangle_\nu=0$ for every $v\in K$, so $J_z\eta\in K^\perp$. Thus both $K$ and $K^\perp$ reduce $J_z$, and $U_0$ preserves $D(J_z)$ and commutes with $J_z$ there. [A1, F2, step 1.3, given, algebra]

3.1 But $U_0hf_+=f_-$ whereas $hU_0f_+=-f_-$. Hence $U_0h\ne hU_0$ although $U_0$ is unitary and commutes with $J_z$; by step 1.2 it changes mean helicity for an input. This proves that axial symmetry alone does not imply helicity conservation. [F1, step 1.3, step 2.2, algebra] ∎

## Remarks

The balance is conditional on the stated unitary model and exact domain invariance. It does not establish that a physical focusing or scattering apparatus is unitary on this Hilbert space or commutes with $J_z$; those are separate model assumptions.
