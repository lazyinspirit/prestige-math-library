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
proof_strategy: direct
verification:
  precheck: pass
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

$$C(P):=\frac{i}{2\pi}\int_{\mathbb T^2}\operatorname{tr}F=\left\langle c_1(\det E_P),[\mathbb T^2]\right\rangle\in\mathbb Z.$$

For every jointly $C^2$ family $P_t$ of such projectors, $0\le t\le1$, with the same rank, $C(P_t)$ is independent of $t$. In particular this holds for a $C^2$ Bloch Hamiltonian deformation whose chosen spectral cluster retains a uniform gap. If $E_P$ has a global $C^2$ periodic orthonormal frame, then $C(P)=0$.

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

## Proof

**Given:** [A1], [A2], [F1]–[F6].

1.1 For each fixed $t$ (or for the single projector), [F1] gives the rank-one projector $Q_t=\bigwedge^mP_t$ onto $\det E_{P_t}$. Its image is a complex line bundle over the compact torus, hence is numerable; the torus is a compact smooth CW complex. The determinant-line curvature lemma [F2] gives $\operatorname{tr}F_t=\operatorname{tr}(Q_t(dQ_t\wedge dQ_t)Q_t)$ pointwise, with the same orientation convention. Applying [F3] to $Q_t$ proves the displayed equality and integrality, with $c_1$ interpreted by [F5]. [A1, A2, F1, F2, F3, F5, given]

2.1 For a jointly $C^2$ family, the coefficient function $g(k,t)$ of the two-form $\operatorname{tr}(P_t(dP_t\wedge dP_t)P_t)$ is continuous on the compact set $\mathbb T^2\times[0,1]$, so it is uniformly continuous. If $t_j\to t$, then $\sup_k|g(k,t_j)-g(k,t)|\to0$; therefore $C(P_{t_j})\to C(P_t)$ by bounding the difference of integrals by the torus's finite area times this supremum. Thus $t\mapsto C(P_t)$ is continuous. Step 1.1 makes it integer-valued, and a continuous integer-valued function on the connected interval $[0,1]$ is constant: otherwise the intermediate-value theorem would give a noninteger value between two distinct integer values. For a uniformly gapped Hamiltonian deformation, [F6] supplies the required joint $C^2$ spectral projectors by the local contour formula. [F2, F3, F6, step 1.1, given, algebra]

3.1 If $V$ is a global $C^2$ periodic orthonormal frame, then $A=V^*dV$ is a globally defined $C^1$ matrix-valued one-form. By [F2] and its proof, $\operatorname{tr}F=d\operatorname{tr}A$ (the trace of $A\wedge A$ vanishes). Hence $C(P)=\frac{i}{2\pi}\int_{\mathbb T^2}d\operatorname{tr}A=0$ by [F4], since the torus has empty boundary. [F2, F4, given] ∎
