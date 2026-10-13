---
page: qm-math-orbital-and-spin
title: Qm Math Orbital And Spin
status: published
items:
  - prop-nrqm-orbital-and-spin-finite-spin-matrices
  - thm-nrqm-orbital-and-spin-symmetric-power-su2-representation
  - thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
  - thm-nrqm-orbital-and-spin-tensor-spin-composition
  - thm-nrqm-orbital-and-spin-tsirelson-bound
  - thm-nrqm-orbital-and-spin-legendre-rodrigues-equation
  - lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  - thm-nrqm-orbital-and-spin-associated-polynomial-normalization
  - thm-nrqm-orbital-and-spin-weighted-angular-completeness
  - thm-nrqm-orbital-and-spin-sphere-onb
  - thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain
  - thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension
  - thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action
  - thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators
  - thm-nrqm-orbital-and-spin-dipole-angular-selection-rules
requires:
  - qm-math-oscillator
  - algebraic-extensions-degree-and-finite-fields
  - cm-math-central
  - cm-math-rigid
  - construction-of-the-natural-numbers
  - darboux-lhopital-and-taylor
  - euclidean-surface-measure-divergence-and-green-identities
  - field-extensions-and-the-complex-numbers
  - linear-algebra-methods-in-combinatorics
  - polynomial-rings-and-roots
  - projective-algebraic-sets-projective-morphisms-and-cones
  - stone-weierstrass-general
  - the-branching-rule-and-the-young-graph
  - the-divergence-theorem-and-classical-stokes
  - uniform-spaces
  - unitary-representations-positive-type-and-gns
  - sine-cosine-and-the-definition-of-pi
  - qm-math-composites
  - cm-math-geometry
examples: []
---

The orbital-and-spin layer of the non-relativistic quantum mechanics
mathematical prerequisites, all of it mathematics: the finite-dimensional
spin-$s$ matrices of $\mathfrak{su}(2)$, their symmetric-power and tensor
representations and block decompositions, the Tsirelson bound for two binary
sharp models with its singlet attainment, the Legendre and associated Legendre
equations with the normalized spherical functions, their completeness in
$L^2(S^2,\sigma)$, the diagonal sphere Laplacian and weight operator with
explicit domains, the harmonic-polynomial decomposition of polynomial spaces
and of the isotropic oscillator levels, the strongly continuous unitary
rotation action on $L^2(S^2,\sigma)$, its self-adjoint orbital generators with
the angular-momentum commutators and rotational domain identification, and the
dipole angular selection rules. Every item carries `domain: mathematics` and
depends only on mathematical suppliers, published supersets or items of
[[qm-math-oscillator]]; nothing here asserts a physical interpretation of
spin, measurement, transition rates or empirical evidence, and the companion
page [[qm-math-orbital-and-spin-examples]] stays mathematics as well.

The spin layer begins with
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]: for $s\in\frac12\mathbb
N$ the standard matrices $J_ze_m=me_m$ and
$J_\pm e_m=\sqrt{(s\mp m)(s\pm m+1)}\,e_{m\pm1}$ on $\mathbb C^{2s+1}$ satisfy
$J_+^*=J_-$; the matrices $J_z$,
$J_x=(J_++J_-)/2$ and $J_y=(J_+-J_-)/(2i)$ are self-adjoint, obey the
$\mathfrak{su}(2)$ commutators and have Casimir $J^2=s(s+1)I$. For
$s=\frac12$, $J_i=\frac12\sigma_i$ for $i=x,y,z$, with
the multiplication law $\sigma_i\sigma_j=\delta_{ij}I+
i\sum_k\varepsilon_{ijk}\sigma_k$.
[[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]] identifies
the symmetric power of the spin-$\frac12$ module with the spin-$\frac n2$
module inside the $n$-fold tensor power;
[[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]] splits any
self-adjoint $\mathfrak{su}(2)$ triple on a finite-dimensional space into
spin blocks with the standard ladders and reads the multiplicities off
$\dim\ker(J_z-MI)$; and
[[thm-nrqm-orbital-and-spin-tensor-spin-composition]] composes two spins,
$V_s\otimes V_t=\bigoplus_{j=|s-t|}^{s+t}W_j$ with each $W_j$ unitarily
equivalent to the spin-$j$ model and an explicit ladder construction. These
finite-dimensional results feed
[[thm-nrqm-orbital-and-spin-tsirelson-bound]]: for bounded self-adjoint
involutions the Bell operator
$C=A_0\otimes(B_0+B_1)+A_1\otimes(B_0-B_1)$ satisfies
$C^2=4I-[A_0,A_1]\otimes[B_0,B_1]$ and
$|\langle C\psi,\psi'\rangle|\le2\sqrt2\|\psi\|\|\psi'\|$, the bound is
attained by the singlet with the standard settings, and the explicitly
specified common-outcome $\pm1$ model obeys the CHSH bound $2$ instead.

The angular layer is analytic.
[[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]] develops the
Rodrigues polynomials $P_l$ and the Legendre equation and orthogonality;
[[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]] identifies
the polar surface measure with the chart measure
$\sin\theta\,d\theta\,d\varphi$ and computes $\sigma(S^2)=4\pi$;
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] establishes
the associated functions $w_{lm}$, their equation and the normalized
spherical functions $Y_{lm}=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$
for $0\le m\le l$, with $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$ for $1\le m\le l$;
[[thm-nrqm-orbital-and-spin-weighted-angular-completeness]] proves
completeness of $(w_{lm})_l$ in the weighted space; and
[[thm-nrqm-orbital-and-spin-sphere-onb]] assembles the complete orthonormal
family $(Y_{lm})$ of $L^2(S^2,\sigma)$.
[[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] defines the
self-adjoint diagonal operators $AY_{lm}=l(l+1)Y_{lm}$ and
$L_zY_{lm}=\hbar mY_{lm}$ on explicit square-summability domains with the
finite span as a common core, matching the sphere differential expressions
away from the poles and reducing the blocks $V_l$.
[[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] connects the
sphere to polynomials: $\mathcal P_l=\mathcal H_l\oplus r^2\mathcal
P_{l-2}$, $\dim\mathcal H_l=2l+1$, the $Y_{lm}$ are restrictions of explicit
harmonic homogeneous polynomials, and the isotropic oscillator level $M$
contains exactly the orbital degrees $M,M-2,\dots\ge0$, each once.
[[thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action]] constructs
the unitary action $U(R)F=F\circ R^{-1}$ with $U(RS)=U(R)U(S)$, its
preservation of the harmonic blocks with intertwining against the restriction
isomorphisms, and the norm-continuity of every orbit map with the truncation
estimate. [[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]]
extracts the self-adjoint generators $L_i$ of the coordinate-axis rotation
groups, proves $L_i=-i\hbar(x\times\nabla)_i$ on the blocks, the commutators
$[L_i,L_j]=i\hbar\sum_k\varepsilon_{ijk}L_k$ on the core, the identification
$L_3=L_z$, and the unitary identification of the three domains by explicit
quarter turns. Finally
[[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]] expands
$Q_qh_{lm}$ into harmonic homogeneous pieces of degrees $l+1$ and $l-1$ and
proves that the angular matrix element $\langle Y_{l'm'},Q_qY_{lm}\rangle$
can be nonzero only for $l'=l\pm1$, $m'=m+q$: necessary conditions only, with
no transition-probability claim. All items are draft mathematics under
construction; the physical orbital and spin pages consume these results as
stated mathematical premises and add their own postulates and interpretation.
