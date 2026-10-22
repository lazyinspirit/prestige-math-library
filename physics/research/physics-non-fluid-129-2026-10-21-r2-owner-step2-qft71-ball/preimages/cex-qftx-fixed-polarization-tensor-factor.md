---
id: cex-qftx-fixed-polarization-tensor-factor
kind: counterexample
title: A fixed Cartesian polarization is not a global transverse helicity frame
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-photon-helicity-bundle
  - prop-qftx-helicity-chern-obstruction
  - thm-qftx-photon-rotations-helicity
dependency_roles:
  def-qftx-photon-helicity-bundle: mathematical-premise
  prop-qftx-helicity-chern-obstruction: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eric Palmerduca and Hong Qin, Photon topology, arXiv:2308.11147v2
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page PDF retrieved; section III, theorem 18 and the discussion following equation 65, for the nonexistence of global circular-helicity unit vectors.
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page PDF retrieved; section I, equation 1 and the transversality discussion of separate orbital and spin angular momenta.
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Full author-hosted HTML chapter; section 6.2.1, equations 6.513–6.514, for momentum-dependent transversality of polarization vectors.
verification:
  precheck: pending
---

## Statement refuted

Let $e_1,e_2,e_3$ be the standard coordinate basis of $\mathbb R^3$. The constant Cartesian circular vectors $e_\sigma^0=(e_1+i\sigma e_2)/\sqrt2$, for $\sigma=\pm1$, form a transverse helicity frame for every nonzero momentum direction; consequently this fixed pair supplies a momentum-independent polarization factor on the transverse one-photon space.

## Statement references

[[def-qftx-photon-helicity-bundle]]

## Facts & Assumptions

**Given:** The transverse helicity fibers, the nonzero Chern numbers of their line bundles, and the total rotation generators on the transverse Hilbert space.

[F1] Each helicity fiber $\mathcal L_{\sigma,\mathbf n}$ lies in the transverse plane $\mathbf n^\perp$. [[def-qftx-photon-helicity-bundle]]

[F2] The standard first Chern number of $\mathcal L_{\sigma}$ is $-2\sigma\ne0$, and no global smooth unit helicity section exists. [[prop-qftx-helicity-chern-obstruction]]

[F3] On the dense smooth transverse domain the total rotation generator is $J_{\mathbf a}=L_{\mathbf a}+S_{\mathbf a}^{\mathrm{op}}$, while the orbital and spin terms generally do not separately preserve transversality. [[thm-qftx-photon-rotations-helicity]]

[F4] The momentum domain is $M=\mathbb R^3\setminus\{0\}$ with $d\nu=d^3\mathbf k/(2|\mathbf k|)$, and $\mathcal H_T^\nu$ consists of $L^2(M,\nu;\mathbb C^3)$ equivalence classes satisfying $\mathbf k\cdot f(\mathbf k)=0$ for $\nu$-almost every $\mathbf k$. At each $\mathbf k\in M$, the transverse fiber is $\mathcal T_{\mathbf k}=\{v\in\mathbb C^3:\mathbf k\cdot v=0\}$, using the complex-bilinear extension of the real dot product. [[def-qftx-photon-helicity-bundle]]

## Counterexample

**Given:** A nonzero momentum $\mathbf k\in M$ and the constant vectors in the Statement.

To make the fixed-pair factorization claim precise, let $\mathscr A=L^2(M,\nu;\mathbb C^2)$, with norm $\|a\|^2=\int_M(|a_+(\mathbf k)|^2+|a_-(\mathbf k)|^2)\,d\nu(\mathbf k)$. For each $\mathbf k\in M$ define $\Phi_{\mathbf k}:\mathbb C^2\to\mathbb C^3$ by $\Phi_{\mathbf k}(z_+,z_-)=z_+e_+^0+z_-e_-^0$, and define $\Phi:\mathscr A\to L^2(M,\nu;\mathbb C^3)$ by $(\Phi a)(\mathbf k)=\Phi_{\mathbf k}(a_+(\mathbf k),a_-(\mathbf k))$. The two fixed vectors are Hermitian-orthonormal, so $\Phi$ is an isometry into the ambient vector-valued $L^2$ space. The fixed-pair factorization claim tested below is that this map takes values in $\mathcal H_T^\nu$ and is unitary onto it; pointwise, it claims that the same two vectors supply each transverse fiber $\mathcal T_{\mathbf k}$.

1.1 Take $\mathbf k=\kappa e_1$ with $\kappa>0$. Then $\mathbf k\cdot e_\sigma^0=\kappa/\sqrt2\ne0$ for either $\sigma$, so neither fixed vector lies in the transverse plane $\mathbf k^\perp$. By [F1], neither can belong to the corresponding helicity line at this momentum. [F1, given, algebra]

1.2 Independently, [F2] excludes any global smooth unit helicity eigenvector, even if the polarization vector is allowed to depend on momentum. Thus a smooth global helicity gauge cannot repair the fixed-frame claim. [F2, given]

2.1 Let $A=B_{1/4}(e_1)$. Since $3/4<|\mathbf k|<5/4$ on $A$, its $\nu$-measure is finite and positive: $A$ has positive finite Lebesgue measure and the density $1/(2|\mathbf k|)$ is bounded above and below by positive constants there. Thus $a=(\mathbf 1_A,0)$ belongs to $\mathscr A$. For every $\mathbf k\in A$, $(\Phi a)(\mathbf k)=e_+^0$ and $\mathbf k\cdot e_+^0=(k_1+ik_2)/\sqrt2\ne0$, since $k_1>3/4$. Thus $\Phi a$ fails the transverse condition on the positive-measure set $A$; in particular, $\Phi$ does not define a map from $\mathscr A$ into $\mathcal H_T^\nu$, and cannot be the proposed unitary factorization. [F4, given, construct, algebra]

2.2 The displayed fixed pair therefore is not a transverse helicity frame on all momentum directions, and the explicitly defined fixed-pair map fails to factor through the transverse one-photon space. The Chern obstruction separately excludes a global smooth helicity frame even when vectors are allowed to depend smoothly on momentum. This refutes the statement. [step 1.1, step 1.2, step 2.1, discharge-contradiction]

3.1 The rotation theorem also identifies the precise limitation of separating orbital and spin terms: their displayed differential expressions need not individually send the transverse domain into itself, whereas their sum does. Hence those separate restrictions do not give independent operators from $\mathcal D$ to $\mathcal H_T^\nu$ on the common transverse domain. This refutes a decomposition by those particular restrictions; it does not rule out arbitrary Hilbert-space tensor-product isomorphisms. [F3, given] ∎
