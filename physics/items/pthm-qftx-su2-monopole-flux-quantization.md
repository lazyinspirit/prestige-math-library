---
id: pthm-qftx-su2-monopole-flux-quantization
kind: physics-theorem
title: Flux quantization in the specified SU(2) adjoint-Higgs sector
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-solitons-monopoles
dependency_level: 3
deps:
  - def-countable-choice
  - def-qftx-adjoint-higgs-monopole-sector
  - lem-nrqmx-c1-stokes-compact-surface
  - lem-qftx-su2-compact-nonabelian-invariant-form
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-adjoint-higgs-monopole-sector: formulation-prerequisite
  lem-nrqmx-c1-stokes-compact-surface: mathematical-premise
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
proof_strategy: direct
axiom_base: "ZF + AC_omega, inherited through the gauge-sector and compact-surface Stokes suppliers; no full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Conditional classical flux quantization for the stated global SU(2) form, adjoint Higgs asymptotic reduction to U(1), and fundamental-doublet probe lattice. No charge lattice for SO(3) or other global forms, quantum state, or empirical monopole claim is asserted."
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://arxiv.org/pdf/hep-th/0509216
      locator: "§2.1.1, equations (2.9)–(2.15), printed pp. 41–43 (PDF pp. 42–44): northern/southern gauge potentials, single-valued SU(N) transition, and magnetic charge lattice. Tong's component and coupling normalization is compared with the fixed SU(2) convention here."
    - title: "Jeffrey A. Harvey, Magnetic Monopoles, Duality, and Supersymmetry"
      url: https://arxiv.org/pdf/hep-th/9603086
      locator: "§1.4, equations (1.30), (1.38)–(1.40): asymptotic Higgs winding, flux quantization, the fundamental SU(2) doublet charge, and the relation between transition loops and Higgs winding. The local patch proof here does not import Harvey's cited homotopy-sequence result."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume $\mathrm{AC}_\omega$. On oriented Euclidean $\mathbb R^3$ with $\epsilon_{123}=1$, use the zero-potential static model with global group $SU(2)$, $T_a=-i\sigma_a/2$, $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, $F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j]$, $D_i\Phi=\partial_i\Phi+[A_i,\Phi]$, and $B_i=\tfrac12\epsilon_{ijk}F_{jk}$. Let $g>0$ be dimensionless, $v>0$ of dimension $\mathrm{length}^{-1}$, and $A_i,\Phi$ be smooth static fields. Assume $|\Phi|_\kappa\to v$, $\Phi(R\,\cdot)/v\to n_\infty$ in $C^\infty(S^2,\mathfrak{su}(2))$, and the boundary reduction specified below. Let $D_N,D_S\subset S^2$ be the closed northern and southern hemispheres, and choose smooth lifts $u_\alpha$ on neighborhoods of $D_\alpha$ with $\operatorname{Ad}_{u_\alpha}T_3=n_\infty$ and transition $u_S=u_Nh$ on their common equator, where $h(\varphi)=\exp(\theta(\varphi)T_3)$ and $\theta:[0,2\pi]\to\mathbb R$ is a smooth lift. For $\iota_R:S^2\to S_R^2$, $\iota_R(\omega)=R\omega$, define on each $D_\alpha$ the fixed-frame angular connection, curvature, and normalized Higgs field by

$$\mathcal A_{\alpha,R}:=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*A)+u_\alpha^{-1}du_\alpha,\qquad \mathcal F_{\alpha,R}:=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*F),\qquad q_{\alpha,R}:=\operatorname{Ad}_{u_\alpha^{-1}}\bigl(\Phi(R\,\cdot)/v\bigr).$$

Assume that $\mathcal A_{\alpha,R}$ converges pointwise on each closed hemisphere to $\mathcal A_{\alpha,\infty}$, which extends as a $C^1$ one-form to a neighborhood of $D_\alpha$. Define its curvature by $\mathcal F_{\alpha,\infty}:=d\mathcal A_{\alpha,\infty}+\tfrac12[\mathcal A_{\alpha,\infty}\wedge\mathcal A_{\alpha,\infty}]$, and assume it extends as a $C^1$ two-form to a neighborhood of $D_\alpha$. Also assume $\mathcal F_{\alpha,R}\to\mathcal F_{\alpha,\infty}$ uniformly on each closed hemisphere. The fixed-frame right-action transition gives $\mathcal A_{S,\infty}=\operatorname{Ad}_{h^{-1}}\mathcal A_{N,\infty}+h^{-1}dh$. The smooth Higgs-field limit gives $q_{\alpha,R}\to T_3$ uniformly. Define $D_{\mathrm{tan}}n_\infty|_{D_\alpha}:=\operatorname{Ad}_{u_\alpha}[\mathcal A_{\alpha,\infty},T_3]$ and require it to vanish. Define $B_\infty:S^2\to\mathfrak{su}(2)$ by $\operatorname{Ad}_{u_\alpha}\mathcal F_{\alpha,\infty}=B_\infty\,d\Omega$ on $D_\alpha$, with $d\Omega$ the outward unit-sphere area form. Curvature covariance identifies the two definitions on the equator. Equivalently $B_\infty(\omega)=\lim_{R\to\infty}R^2\sum_i\omega_iB_i(R\omega)$ uniformly on each hemisphere. Require $[B_\infty(\omega),n_\infty(\omega)]=0$, which is the stated stabilizer-algebra condition. The equator is oriented as the boundary of $D_N$, and the admissible external electric probes include the fundamental doublet. If the surface flux limit

$$m=\lim_{R\to\infty}\int_{S_R^2}\kappa(\Phi,B_i)\hat x_i\,dS$$

exists, define

$$\nu:=-\frac{\theta(2\pi)-\theta(0)}{4\pi}.$$

Then $\nu\in\mathbb Z$ and the classical magnetic surface charge and energy-normalized surface term are

$$m=4\pi v\nu,\qquad T=\frac{m}{g^2}=\frac{4\pi v}{g^2}\nu.$$

This is flux quantization for the stated global form, boundary reduction, and probe lattice; it does not assert a universal normalization for other groups or global forms.

## Statement references

[David Tong, §2.1.1, Dirac quantization and SU(N) magnetic charge](https://arxiv.org/pdf/hep-th/0509216)

[Jeffrey A. Harvey, §1.4, Higgs winding and charge quantization](https://arxiv.org/pdf/hep-th/9603086)

[[def-qftx-adjoint-higgs-monopole-sector|Specified SU(2) adjoint-Higgs boundary data]]

[[lem-nrqmx-c1-stokes-compact-surface|Stokes theorem on a compact oriented surface region]]

[[lem-qftx-su2-compact-nonabelian-invariant-form|Normalized invariant form and SU(2) commutators]]

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice. [[def-countable-choice]]

[F1] The sector fixes $SU(2)$, $T_3=-i\sigma_3/2$, the right-action transition law, $\Phi\to v n_\infty$, the adapted local frames, and the surface-flux definition. [[def-qftx-adjoint-higgs-monopole-sector]]

[F2] For the chosen basis, $[T_a,T_b]=\epsilon_{abc}T_c$ and $\kappa$ is positive definite, symmetric, and $\operatorname{Ad}$-invariant with $\kappa(T_a,T_b)=\delta_{ab}$. [[lem-qftx-su2-compact-nonabelian-invariant-form]]

[F3] For every compact oriented surface region with finitely many smooth boundary arcs and every $C^1$ one-form, $\int_D d\alpha=\int_{\partial D}\alpha$ with outward-normal-first boundary orientation; the result assumes $\mathrm{AC}_\omega$. [[lem-nrqmx-c1-stokes-compact-surface]]

## Proof

**Given:** [A1], [F1]–[F3], the smooth limiting reduction and local frames in the Statement, and the stated transition lift.

1.1 In either limiting adapted frame, $n_\infty=T_3$ and $D_{\mathrm{tan}}n_\infty=0$, so $[\mathcal A_{\alpha,\infty},T_3]=0$. Writing $\mathcal A_{\alpha,\infty}=a_\alpha^1T_1+a_\alpha^2T_2+a_\alpha^3T_3$, the commutator relations in [F2] give $[\mathcal A_{\alpha,\infty},T_3]=a_\alpha^2T_1-a_\alpha^1T_2$; hence $\mathcal A_{\alpha,\infty}=a_\alpha T_3$ for a real $C^1$ one-form $a_\alpha$. Its curvature is $\mathcal F_{\alpha,\infty}=da_\alpha\,T_3$, since $[T_3,T_3]=0$. [F1, F2, given, algebra]

2.1 For finite $R$, the two-form $F$ pulled back by $\iota_R$ is the magnetic flux form: $\iota_R^*F=(B_i\hat x_i)\,dS_R$ under the outward orientation. By $\operatorname{Ad}$-invariance of $\kappa$ and the frame definitions, the flux at radius $R$ therefore satisfies  $$\frac{1}{v}\int_{S_R^2}\kappa(\Phi,B_i)\hat x_i\,dS=\sum_{\alpha=N,S}\int_{D_\alpha}\kappa(q_{\alpha,R},\mathcal F_{\alpha,R}).$$  The uniform limits of $q_{\alpha,R}$ and $\mathcal F_{\alpha,R}$ imply uniform convergence of the integrands to $\kappa(T_3,\mathcal F_{\alpha,\infty})$. Each hemisphere has finite area, so the absolute difference of its integrals is bounded by its area times the sup norm of the integrand difference and tends to zero. Using $\kappa(T_3,T_3)=1$, we obtain $m/v=\sum_\alpha\int_{D_\alpha}\kappa(T_3,\mathcal F_{\alpha,\infty})=\int_{D_N}da_N+\int_{D_S}da_S$. [F1, F2, step 1.1, algebra]

3.1 Apply [F3] separately to the two closed hemispheres. Their induced equatorial orientations are opposite, so $\int_{D_N}da_N+\int_{D_S}da_S=\int_C(a_N-a_S)$. The limiting right-action transition stated above, with $h=\exp(\theta T_3)$, and the fact that both limiting forms lie in the stabilizer algebra give $a_S=a_N+d\theta$. Therefore the flux is $-\int_Cd\theta=-(\theta(2\pi)-\theta(0))$. [A1, F1, F3, step 2.1, algebra]

4.1 In the fundamental representation, $\exp(\theta T_3)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$. Since $h$ is a closed SU(2) loop, equality of its endpoint matrices gives $e^{-i(\theta(2\pi)-\theta(0))/2}=1$, hence $\theta(2\pi)-\theta(0)=4\pi k$ for some $k\in\mathbb Z$. The definition $\nu=-k$ and step 3.1 yield $m/v=4\pi\nu$, so $m=4\pi v\nu$ and $T=4\pi v\nu/g^2$. [F1, step 3.1, algebra] ∎

## Remarks

The diagram records that both local lifts project to the same asymptotic Higgs direction. The lower map is $p(u)=\operatorname{Ad}_uT_3$; the relation $u_S=u_Nh$ with $h$ in the stabilizer makes the square commute. The proof above uses the transition formula and Stokes theorem directly; it does not rely on the diagram.

```tikzcd
U_N\cap U_S \arrow[r,"u_N"] \arrow[d,"u_S"'] & SU(2) \arrow[d,"p"] \\
SU(2) \arrow[r,"p"'] & S^2_\kappa
```
