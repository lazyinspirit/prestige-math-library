---
id: ex-gr-sinusoidal-tt-plane-wave
kind: example
title: "An explicit sinusoidal TT plane wave: harmonic gauge, linearized vacuum
  equations, curvature components and detector strain"
status: draft
origin: session
domain: physics
dependency_level: 16
physical_scope: "Conditional computation in the classical gravitational
  framework: the explicit TT plane-wave metric family g(lambda) = eta + lambda h
  of the flat model with sinusoidal profiles, its harmonic-gauge and
  linearized-vacuum properties, its first-order curvature components, and the
  finite path-length strain function of the ideal two-body detector of the
  companion definition at equal inertial-chart time. The exact-vacuum residual
  clause is for the zero-source, Lambda = 0 branch. Clause 3 is a model
  statement about that ideal detector; the example asserts no measurement, no
  apparatus, no noise model, and no numerical amplitude, frequency or strain of
  any real wave."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-gr-plane-wave-perturbation
  - thm-gr-tt-plane-wave-solutions
  - thm-gr-tt-plane-wave-curvature
  - pthm-gr-linearized-field-equations
  - lem-gr-null-phase-coordinate
  - def-gr-flat-linearized-perturbation
  - thm-gr-flat-linearized-curvature-and-gauge
  - def-gr-minkowski-model-and-inertial-chart
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - def-derivative
  - def-real-order
  - def-rational-power
  - def-gr-linearized-wave-regime-and-detector-coupling
  - def-gr-si-unit-and-coordinate-conventions
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  pthm-gr-linearized-field-equations: physical-result
  lem-gr-null-phase-coordinate: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-real-order: mathematical-premise
  def-rational-power: mathematical-premise
  def-gr-linearized-wave-regime-and-detector-coupling: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.53)-(6.57) and (6.63)-(6.66): the
        transverse-traceless amplitude matrix with components C_11, C_12 and the
        oscillating separations for the + polarisation, printed pp. 151-153 (PDF
        pp. 158-160)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), sections 5.2.1-5.2.2: the polarisation matrix (5.22)
        with H_+ and H_x and the induced displacements (5.24), printed pp.
        211-214 (PDF pp. 218-221)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022
        revision), sections 7.3: the polarization matrix (7.49) and the relative
        displacements of test particles for + and x polarisations, printed pp.
        78-81 (PDF pp. 79-82)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk\
        /user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Use the SI length coordinates $x^0=ct,x^1,x^2,x^3$ of
[[def-gr-si-unit-and-coordinate-conventions]]. Fix dimensionless real amplitudes
$a,b$ and a positive wave-number parameter $\omega$ with units $\mathrm m^{-1}$.
The phase coordinate $u=x^0-x^3$ has units $\mathrm m$, so $\omega u$ is
dimensionless. At a fixed spatial point the model angular frequency is
$c|\omega|$ in $\mathrm s^{-1}$. Put

$$A_+(u):=a\cos(\omega u),\qquad A_\times(u):=b\sin(\omega u),\qquad u=x^0-x^3,$$

and let $h$ be the TT planar perturbation of
[[def-gr-plane-wave-perturbation]] clause (b) with these amplitudes:
$h_{11}=A_+$, $h_{22}=-A_+$, $h_{12}=h_{21}=A_\times$ and all other
components zero. Let $M:=\max\{|a|,|b|\}$ and choose $|\lambda|<1/(2M)$ when
$M>0$. Then:

1. $h$ is traceless and in harmonic gauge, $\Box h_{ab}=0$, and
   $G^{(1)}_{ab}(h)=0$: the perturbation solves the linearized vacuum
   equations; the metric $g(\lambda)=\eta+\lambda h$ is a smooth Lorentzian
   metric of signature $(-,+,+,+)$ with time orientation $\partial_0$, and
   in the zero-source, $\Lambda=0$ branch, for every nonempty compact $K$ and
   length scale $L$, the exact vacuum residual is bounded by a constant times
   $\lambda^2$ whenever $|\lambda|B_K(h)\le1/16$;
   since the profiles are smooth, this holds for sufficiently small
   $|\lambda|$ on each fixed compact set.
2. The first-order curvature components are
   $$R^{(1)}_{0101}=\tfrac12a\omega^2\cos(\omega u),\qquad R^{(1)}_{0102}=\tfrac12b\omega^2\sin(\omega u),\qquad R^{(1)}_{0202}=-\tfrac12a\omega^2\cos(\omega u),$$
   and $R^{(1)}_{0i0j}=0$ whenever $i=3$ or $j=3$.
3. At a point where $u=0$ the curvature values are
   $R^{(1)}_{0101}=\tfrac12a\omega^2$ and $R^{(1)}_{0102}=0$. For the ideal
   detector of [[def-gr-linearized-wave-regime-and-detector-coupling]], the
   arm along $e_1$ has strain $\sqrt{1+\lambda a\cos(\omega u)}-1$, which
   equals $\sqrt{1+\lambda a}-1$ at $u=0$; the arm along
   $(e_1+e_2)/\sqrt2$ has strain $\sqrt{1+\lambda b\sin(\omega u)}-1$ as a
   function of general $u$, whose value at $u=0$ is $0$.

All three clauses are conditional statements of the model: clause 3 is the
strain function of the ideal detector defined in
[[def-gr-linearized-wave-regime-and-detector-coupling]] evaluated on the
stated family; no observation, apparatus or statistical statement is made,
and no numerical amplitude, frequency or strain of a real wave is asserted.

## Verification

**Given:** The flat model with SI length coordinates, dimensionless $a,b,\lambda$, positive $\omega$ in $\mathrm m^{-1}$, and the profiles $A_+(u)=a\cos(\omega u)$, $A_\times(u)=b\sin(\omega u)$, the perturbation $h$ above, the amplitude parameter $\lambda$ and the metric $g(\lambda)=\eta+\lambda h$.

[L1] The derivatives are $\partial_0\cos(\omega u)=-\omega\sin(\omega u)$, $\partial_0\sin(\omega u)=\omega\cos(\omega u)$, $\partial_3\cos(\omega u)=\omega\sin(\omega u)$, $\partial_3\sin(\omega u)=-\omega\cos(\omega u)$, hence $\Box\cos(\omega u)=-\omega^2\cos+\omega^2\cos=0$ and likewise for $\sin$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[def-derivative]], [[lem-gr-null-phase-coordinate]] clause (b)).

[L2] For a TT planar perturbation with bounded profiles the perturbation is in harmonic gauge with $G^{(1)}_{ab}(h)=0$ and the metric $\eta+\lambda h$ is Lorentzian for $|\lambda|<1/(2M)$ ([[thm-gr-tt-plane-wave-solutions]] clauses (a)-(b), [[def-gr-plane-wave-perturbation]] clause (b)); in the zero-source, $\Lambda=0$ branch, for each nonempty compact $K$ and $L>0$ the vacuum field-law residual is $O(\lambda^2)$ whenever $|\lambda|B_K(h)\le1/16$ ([[pthm-gr-linearized-field-equations]] clause (d)).

[L3] For a TT planar perturbation, $R^{(1)}_{0i0j}=-\tfrac12F''_{ij}$ with $F''_{11}=A_+''$, $F''_{22}=-A_+''$, $F''_{12}=A_\times''$ and $F''_{i3}=0$; the finite arm length and strain are the path integrals of clause (c) of [[def-gr-linearized-wave-regime-and-detector-coupling]], which reduce to $\sqrt{1+\lambda a_\delta(s,0)}-1$ when $\delta^3=0$ makes the profile constant along the arm ([[thm-gr-tt-plane-wave-curvature]] clause (c), [[def-gr-linearized-wave-regime-and-detector-coupling]] clause (c), [[def-rational-power]]).

[L4] The profiles are bounded because $|\sin z|\le1$ and $|\cos z|\le1$ for all real $z$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

1.1 (Second derivatives.) Differentiating twice in $x^0$ with [L1], $A_+''(u)=-\omega^2a\cos(\omega u)$ and $A_\times''(u)=-\omega^2b\sin(\omega u)$. Hence $h$ has smooth bounded profiles with bound $M$, and clause 1 is [L2]. [L1, L2, L4, algebra]

2.1 (Curvature components.) By [L3], $R^{(1)}_{0101}=-\tfrac12F''_{11}=-\tfrac12A_+''=\tfrac12a\omega^2\cos(\omega u)$, $R^{(1)}_{0102}=-\tfrac12F''_{12}=-\tfrac12A_\times''=\tfrac12b\omega^2\sin(\omega u)$ and $R^{(1)}_{0202}=-\tfrac12F''_{22}=\tfrac12A_+''=-\tfrac12a\omega^2\cos(\omega u)$; the vanishing for $i=3$ or $j=3$ is part of the same clause. This proves clause 2. [L3, step 1.1, algebra]

3.1 (Curvature and general-phase strain.) At $u=0$, $\cos0=1$ and $\sin0=0$, so the displayed curvature values are $\tfrac12a\omega^2$ and $0$. For $\delta=|\delta|e_1$, $\delta^3=0$, the profile is constant along the arm and $a(s,q)=A_+(u)=a\cos(\omega u)$, so the exact strain is $\sqrt{1+\lambda a\cos(\omega u)}-1$ and at $u=0$ equals $\sqrt{1+\lambda a}-1$. For $\delta=|\delta|(e_1+e_2)/\sqrt2$, again $\delta^3=0$ and $a(s,q)=(h_{11}+2h_{12}+h_{22})/(2)=A_\times(u)=b\sin(\omega u)$, so its strain is $\sqrt{1+\lambda b\sin(\omega u)}-1$, which is $0$ at $u=0$. This proves clause 3. [L3, step 1.1, algebra] ∎

## Remarks

- **Sign and phase conventions.** The signs follow the curvature convention of [[thm-gr-tt-plane-wave-curvature]]; with $a>0$ the component $R^{(1)}_{0101}$ is positive at $u=0$. The example is a mathematical computation in the flat model and asserts no physical amplitude, frequency or measured strain.

- **Superposition.** Since $\Box$ and $G^{(1)}$ are linear, a finite sum of TT plane waves with different wave covectors is again a solution of the linearized vacuum equations, by the same computation. No completeness of such sums is claimed here.
