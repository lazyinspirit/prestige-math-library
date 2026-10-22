---
id: thm-nrqmx-bloch-projector-chern
kind: theorem
domain: mathematics
library: mathematics
title: Gapped band curvature and Chern invariance
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 5
deps:
  - def-nrqmx-bloch-fiber-model
  - lem-nrqmx-bloch-fiber-model-properties
  - def-nrqmx-determinant-line-projector
  - lem-nrqmx-determinant-line-projector-well-defined
  - lem-nrqmx-determinant-curvature-is-trace
  - thm-nrqmx-rank-one-chern-holonomy
  - lem-nrqmx-c1-stokes-compact-surface
  - def-chern-classes-from-the-projective-bundle-relation
  - def-axiom-of-choice
  - def-countable-choice
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-integral-formula-circle
dependency_roles:
  def-nrqmx-bloch-fiber-model: mathematical-premise
  lem-nrqmx-bloch-fiber-model-properties: mathematical-premise
  def-nrqmx-determinant-line-projector: mathematical-premise
  lem-nrqmx-determinant-line-projector-well-defined: mathematical-premise
  lem-nrqmx-determinant-curvature-is-trace: mathematical-premise
  thm-nrqmx-rank-one-chern-holonomy: mathematical-premise
  lem-nrqmx-c1-stokes-compact-surface: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 2, §2.3.4; Chapter 6, §§6.1.1–6.1.2.
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 6, §§6.3.4–6.3.5.
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Sections I.C–I.D.
---

## Statement

Assume Axiom of Choice and Countable Choice. Let $P:\mathbb T^2_{2\pi}\to M_r(\mathbb C)$ be a $C^2$ orthogonal projector of constant rank $m\ge1$; in particular it may be the projector of an isolated band cluster of a finite-range Bloch Hamiltonian. Use the orientation $dk_1\wedge dk_2$, let $E_P=\operatorname{im}P$, and let $F=P(dP\wedge dP)P$ be the curvature of the projected connection $\nabla=P\,d$. Then

$$C(P):=\frac{i}{2\pi}\int_{\mathbb T^2_{2\pi}}\operatorname{tr}F=\left\langle c_1(\det E_P),[\mathbb T^2_{2\pi}]\right\rangle\in\mathbb Z.$$

For every map $P:\mathbb T^2_{2\pi}\times[0,1]\to M_r(\mathbb C)$ that is $C^2$ up to the boundary, with each $P_t(k):=P(k,t)$ an orthogonal projector of the same rank $m$, $C(P_t)$ is independent of $t$. A finite-range Bloch deformation covered by this clause is specified by an open interval $J\supset[0,1]$, a finite symmetric $S\subset\mathbb Z^2$, and $C^2$ maps $T_\delta:J\to M_r(\mathbb C)$ with $T_{-\delta}(t)=T_\delta(t)^*$, through

$$h(k,t):=\sum_{\delta\in S}T_\delta(t)e^{-ik\cdot\delta}.$$

For one fixed consecutive eigenvalue block of size $m$, if the distance to its complementary spectrum is bounded below by one $\gamma>0$ for all $(k,t)\in\mathbb T^2_{2\pi}\times[0,1]$, then its orthogonal spectral projector $P(k,t)$ is jointly $C^2$, so the same invariance applies. If $E_P$ has a global $C^2$ periodic orthonormal frame, then $C(P)=0$.

## Statement references

[[def-nrqmx-bloch-fiber-model]]

[[thm-nrqmx-rank-one-chern-holonomy]]

[[lem-nrqmx-determinant-curvature-is-trace]]

## Facts & Assumptions

**Given:** Axiom of Choice, Countable Choice, the stated projector or projector family, and the oriented torus.

[A1] Axiom of Choice is the principle in [[def-axiom-of-choice]].

[A2] Countable Choice is the principle in [[def-countable-choice]].

[F1] [[def-nrqmx-determinant-line-projector]] and [[lem-nrqmx-determinant-line-projector-well-defined]] identify $Q=\bigwedge^mP$ as the $C^2$ rank-one orthogonal projector onto $\det E_P$.

[F2] [[lem-nrqmx-determinant-curvature-is-trace]] identifies the determinant-line curvature with $\operatorname{tr}F$.

[F3] [[thm-nrqmx-rank-one-chern-holonomy]]: under Axiom of Choice, on a compact boundaryless oriented smooth surface a $C^2$ rank-one orthogonal projector has $\frac{i}{2\pi}\int\operatorname{tr}F=\langle c_1(E),[\Sigma]\rangle\in\mathbb Z$.

[F4] [[lem-nrqmx-c1-stokes-compact-surface]] gives Stokes' theorem for a $C^1$ one-form on a compact oriented surface.

[F5] [[def-chern-classes-from-the-projective-bundle-relation]] defines $c_1$ for the numerable line bundle over the torus; it depends only on the isomorphism class.

[F6] [[lem-nrqmx-bloch-fiber-model-properties]] makes every uniformly gapped finite-range Bloch band projector $C^2$ (indeed smooth).

[F7] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] gives an orthonormal eigenbasis for each Hermitian fiber matrix. [[thm-cauchy-integral-formula-circle]] gives the scalar resolvent circle integral $2\pi i$ for an interior eigenvalue. The zero contribution for exterior eigenvalues is proved directly in step 2.1; together these calculations identify the finite-matrix contour integral.

## Proof

**Given:** [A1], [A2], [F1]–[F7].

1.1 For each fixed $t$ (or for the single projector), [F1] gives the rank-one projector $Q_t=\bigwedge^mP_t$ onto $\det E_{P_t}$. For any $k\in\mathbb T^2_{2\pi}$ and nonzero $v\in\operatorname{im}Q_t(k)$, continuity makes $U_v:=\{\ell:Q_t(\ell)v\ne0\}$ an open neighborhood on which $Q_t(\ell)v/\|Q_t(\ell)v\|$ is a local frame; these neighborhoods cover the torus. Compactness gives a finite trivializing cover $U_1,\ldots,U_N$. The torus is a compact metric space with its quotient Euclidean metric, so sufficiently small open balls, followed by a finite subcover, give a finite open refinement $V_1,\ldots,V_J$ with each closure $\overline{V_j}$ contained in some $U_{i(j)}$. Put $\rho_j(\ell)=\operatorname{dist}(\ell,\mathbb T^2_{2\pi}\setminus V_j)$, taking $\rho_j=1$ if $V_j=\mathbb T^2_{2\pi}$. Each $\rho_j$ is continuous, has cozero set $V_j$, and has support (the closure of its nonzero set) $\overline{V_j}$. Since the $V_j$ cover, $\sum_j\rho_j>0$, and the functions $\rho_j/\sum_a\rho_a$ form a continuous partition of unity whose supports lie in the trivializing sets $U_{i(j)}$. By definition, a bundle atlas with such a subordinate partition is numerable, so [F5] applies. The torus is path-connected and the quotient square with opposite edges identified gives it a finite CW structure with one $0$-cell, two $1$-cells, and one $2$-cell. The determinant-line curvature lemma [F2] gives $\operatorname{tr}F_t=\operatorname{tr}(Q_t(dQ_t\wedge dQ_t)Q_t)$ pointwise, with the same orientation convention. Applying [F3] to $Q_t$ proves the displayed equality and integrality. [A1, A2, F1, F2, F3, F5, given, construct]

2.1 For a jointly $C^2$ family, the coefficient function $g(k,t)$ of the two-form $\operatorname{tr}(P_t(dP_t\wedge dP_t)P_t)$ is continuous on the compact set $\mathbb T^2_{2\pi}\times[0,1]$, so it is uniformly continuous. If $t_j\to t$, then $\sup_k|g(k,t_j)-g(k,t)|\to0$; therefore $C(P_{t_j})\to C(P_t)$ by bounding the difference of integrals by the torus's finite area times this supremum. Thus $t\mapsto C(P_t)$ is continuous. Step 1.1 makes it integer-valued, and a continuous integer-valued function on the connected interval $[0,1]$ is constant: otherwise the intermediate-value theorem would give a noninteger value between two distinct integer values. It remains to verify the finite-range clause. The displayed finite sum makes $h(k,t)$ jointly $C^2$ on $\mathbb T^2_{2\pi}\times J$. Ordered eigenvalues of a Hermitian matrix depend continuously on its entries: the min-max formula gives $|\lambda_j(A)-\lambda_j(B)|\le\|A-B\|$, by the same Rayleigh-quotient argument as in [F6]. At any $(k_0,t_0)$, choose disjoint small positively oriented circles around the distinct eigenvalues in the selected block of $h(k_0,t_0)$, with their closed disks separated from the complementary eigenvalues. Joint continuity of $h$ and its eigenvalues keeps the selected eigenvalues inside this fixed contour union and the complementary eigenvalues outside on a neighborhood of $(k_0,t_0)$. On the contours, $(zI-h(k,t))^{-1}$ is jointly $C^2$, since matrix inversion is smooth on invertible matrices and the contour remains in the resolvent set. Its contour integral is therefore jointly $C^2$. For completeness, on any component circle $z=c+Re^{it}$ an exterior eigenvalue $\lambda$ has $q=R/|\lambda-c|<1$. The finite geometric identity gives $(z-\lambda)^{-1}=-\sum_{k=0}^N(z-c)^k/(\lambda-c)^{k+1}+r_N(z)$ with $\sup|r_N|\le q^{N+1}/(|\lambda-c|(1-q))$. Each polynomial term has zero circle integral, since $\oint(z-c)^k dz=iR^{k+1}\int_0^{2\pi}e^{i(k+1)t}dt=0$, while the remainder integral has modulus at most $2\pi R\sup|r_N|\to0$. Thus an exterior eigenvalue contributes zero. The interior formula in [F7] and this exterior calculation, applied in a finite orthonormal eigenbasis at each fixed $(k,t)$, give coefficient $1$ on each selected eigenspace and $0$ on its complement. Thus the contour integral is exactly the selected orthogonal projector. The local contour projectors agree on overlaps because they select the same ordered block, so $P(k,t)$ is jointly $C^2$ on the whole product. The general homotopy argument above now applies. [F2, F3, F6, F7, step 1.1, given, algebra]

3.1 If $V$ is a global $C^2$ periodic orthonormal frame, then $A=V^*dV$ is a globally defined $C^1$ matrix-valued one-form. By [F2] and its proof, $\operatorname{tr}F=d\operatorname{tr}A$ (the trace of $A\wedge A$ vanishes). Hence $C(P)=\frac{i}{2\pi}\int_{\mathbb T^2_{2\pi}}d\operatorname{tr}A=0$ by [F4], since the torus has empty boundary. [F2, F4, given] ∎
