---
id: ex-aqft-anomaly-inflow-example
kind: example
title: One-instanton SU(2) sign cancelled by a mod-two-index bulk
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 8
deps:
  - pthm-aqft-global-anomaly-test
  - def-aqft-global-anomaly-holonomy
  - def-aqft-anomaly-inflow-relative-theory
  - def-qftx-finite-groupoid-integration
  - lem-qftx-round-s4-spin-twist-index-one
  - lem-qftx-periodic-su2-product-kernel-and-center-line-sign
  - def-axiom-of-choice
dependency_roles:
  pthm-aqft-global-anomaly-test: physical-result
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
  def-qftx-finite-groupoid-integration: mathematical-premise
  lem-qftx-round-s4-spin-twist-index-one: mathematical-premise
  lem-qftx-periodic-su2-product-kernel-and-center-line-sign: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
axiom_use: "Full AC is inherited through the explicit round-spin Hodge/Green and characteristic-form suppliers; the finite character calculation needs no additional choice."
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: >-
  This worked example uses one specified Euclidean SU(2) Weyl-doublet inverse-
  determinant-line model, the explicitly proved round index-one geometry, the
  central order-two test, and its mod-two-index bulk response. It does not
  identify this line with a fermionic Pfaffian line. The finite BC2 calculation
  is a normalization check, not a continuum discretization or a general anomaly
  classification.
sources:
  references:
    - title: "Juven Wang, Xiao-Gang Wen, and Edward Witten, A New SU(2) Anomaly"
      url: "https://arxiv.org/pdf/1810.00844v4"
      locator: "§2.2, PDF pp. 6–9, especially (2.3)–(2.8); index/zero-mode parity and the mapping-torus interpretation."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, printed pp.154–158/PDF pp.162–166; fermion anomaly lines and relative invertible theories."
verification:
  precheck: pass
---

## Example

Assume full AC and take the explicit unit round spin $S^4$ background with $E=S^+$ and its positive-spin Levi-Civita connection, one massless left-handed Weyl doublet of a nondynamical $SU(2)$ global symmetry, and the order-two central transformation $z=-I$ from the global-anomaly test. Use the inverse determinant line $\mathcal L_A=(\det_{\mathbb C}\ker D_A^+)^*\otimes\det_{\mathbb C}\operatorname{coker}D_A^+$; this example makes no identification with the Pfaffian line used in a pseudoreal fermion path-integral presentation. The local Hodge calculation gives complex chiral index $1$ and Chern number $-1$. Pair this boundary line with the assigned bulk line, which is its dual, adopting $(-1)^{\operatorname{ind}_2D_5}$ as the closed phase and as the bulk-line holonomy on the mapping torus with product orientation and periodic total spinors. The boundary line has character $\chi(1)=1$, $\chi(z)=-1$; the mapping-torus mod-two index is $1$, so the bulk character is $\chi^{-1}=\chi$ and the combined character is trivial. With $F_A$ anti-Hermitian, use $\operatorname{ch}(E)=\operatorname{tr}_{\mathbf 2}\exp(-F_A/(2\pi i))$, $p_1(TM)=-(8\pi^2)^{-1}\operatorname{tr}_{\mathbb R}(\mathcal R^{TM}\wedge\mathcal R^{TM})$, and $\widehat A_4=-p_1(TM)/24$; the adopted index-density polynomial $I_6=[\widehat A(TM)\operatorname{ch}(E)]_6$ is zero. This algebraic characteristic-polynomial calculation alone does not assert vanishing of an infinitesimal BRST variation. For the finite normalization check take a single-vertex complex $K$ and the ordinary field groupoid $\mathcal F(K)=BC_2$, with one object and automorphism group $C_2$. The combined unit weight is arrow-invariant and its normalized groupoid sum is $1/2$. Without the bulk, the odd boundary character is not a scalar invariant weight and no such finite gauging sum is defined. For two identical copies the boundary character itself is trivial and the same normalized groupoid sum applies. This example tests only the stated loop and does not establish that even copies have no other anomalies.

## Example references

[[lem-qftx-round-s4-spin-twist-index-one]]

[[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]]

[[def-axiom-of-choice]]

[Wang, Wen, and Witten, §2.2](https://arxiv.org/pdf/1810.00844v4)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The explicit round index-one SU(2) inverse-determinant-line model with full AC, the order-two line character, the adopted bulk-line holonomy, and the finite single-vertex groupoid specified in the Example.

[F1] [[pthm-aqft-global-anomaly-test]] computes boundary and adopted bulk phases for the same model and loop, including the actually proved round-sphere index-one instance.

[F2] [[def-aqft-global-anomaly-holonomy]] defines the line holonomy as a unit-modulus scalar for the chosen regularization.

[F3] [[def-aqft-anomaly-inflow-relative-theory]] requires inverse boundary/bulk holonomies for cancellation.

[F4] [[def-qftx-finite-groupoid-integration]] defines the normalized sum over isomorphism classes with reciprocal automorphism weights for an invariant function on a finite groupoid.

[F5] [[lem-qftx-round-s4-spin-twist-index-one]] is a draft local mathematical lemma with a complete authored proof under full AC; it proves the actual round positive-spin twist has kernel dimension one, cokernel zero and Chern number $-1$.

[F6] [[lem-qftx-periodic-su2-product-kernel-and-center-line-sign]] is a draft local mathematical lemma with a complete authored proof under full AC; it proves the periodic-product $J$-fixed real kernel has dimension one and the central inverse-determinant action is $-1$.

[A2] [[def-axiom-of-choice]] is retained through these mathematical suppliers.

[A1] $C_2=\{1,z\}$ with $z^2=1$; the boundary line is the one-dimensional character $\chi(z)=-1$, while the inverse bulk character is $\chi^{-1}$.

## Verification

1.1 By [A2], [F5] and [F6], the concrete background has index one, real product-kernel parity one and central line action $-1$, so the specified physical test [F1] applies. Since $z^2=1$ and $\chi(z)^2=(-1)^2=1$, the assignment $\chi(1)=1$, $\chi(z)=-1$ is a character of $C_2$. Its inverse equals itself, so the tensor product of the boundary and bulk lines has the trivial character. [given, A1, A2, F1, F2, F5, F6, algebra]

2.1 The single-vertex groupoid $BC_2$ has exactly one isomorphism class and its automorphism group has order $2$. The combined unit weight is constant on its arrows by step 1.1, so [F4] gives $Z=1/2$. The boundary-only character is not arrow-invariant, so it is not an admissible scalar weight for that sum. [given, F4, step 1.1, algebra]

3.1 For two identical boundary copies the character is $\chi^2=1$, and the mod-two bulk phase is also $(-1)^{2\cdot1}=1$. Thus the same finite groupoid sum has unit invariant weight and value $1/2$; this verifies cancellation for the stated test without asserting absence of any other anomaly. [given, F1, F3, step 1.1, step 2.1, algebra] ∎
