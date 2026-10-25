---
id: def-aqft-global-anomaly-holonomy
kind: definition
title: Determinant-line holonomy for a global anomaly test
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 4
deps:
  - def-aqft-thooft-anomaly
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: >-
  This is a geometric interface for a fixed smooth family of regulated chiral
  Dirac operators on compact Euclidean manifolds. It does not assert existence
  of a general interacting continuum quantum field theory or classify all
  anomalies.
sources:
  references:
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: "https://arxiv.org/pdf/hep-th/9405012"
      locator: "§§1–2 and §5, PDF pp. 1–3, 8–15, 31–35; determinant-line construction and the holonomy formula for the inverse determinant line."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: "https://abel.math.harvard.edu/~dafr/CBMS133.pdf"
      locator: "Lecture 11, §§11.1–11.2, PDF pp. 154–163; Pfaffian lines, families, and the relative/invertible anomaly interface."
verification:
  precheck: pass
---

## Definition

Fix an even integer $d\ge2$, a compact smooth oriented Riemannian $d$-manifold $M$ without boundary with a specified spin structure, a smooth principal right $G$-bundle $P\to M$ with connection $A$, and a unitary finite-dimensional complex representation $R:G\to U(V_R)$. Let $E_R=P\times_R V_R$ be the associated Hermitian bundle. Let $S^+$ and $S^-$ be the associated bundles of the two half-spin representations of $\operatorname{Spin}(d)$. The chiral Dirac operator is the first-order operator

$$D^+_{A,R}:H^1(M;S^+\otimes E_R)\longrightarrow L^2(M;S^-\otimes E_R),$$

where $H^1$ and $L^2$ are the first Sobolev and square-integrable completions for the fixed Riemannian metric. Assume the operator is Fredholm. Its inverse determinant line is

$$\mathcal L_A=\left(\det_{\mathbb C}\ker D^+_{A,R}\right)^*\otimes\det_{\mathbb C}\operatorname{coker}D^+_{A,R},$$

with $\det_{\mathbb C}W=\bigwedge^{\dim_{\mathbb C}W}_{\mathbb C}W$. For a smooth family of such Fredholm operators over a parameter manifold, use the Quillen metric and the Bismut–Freed unitary connection on this line bundle. For a real or pseudoreal fermionic quadratic form, the Pfaffian line replaces the determinant line and carries its induced Hermitian metric and unitary connection.

Let $\mathcal A(P)$ be the affine space of smooth connections on $P$, and let $\mathcal G(P)$ be the group of smooth bundle automorphisms covering the identity on $M$. A gauge arrow $u:A\to A^u$ identifies the corresponding fibers of the determinant line. A closed loop in background/gauge-field space consists of a smooth path $A_t$ in $\mathcal A(P)$, $0\le t\le1$, and an endpoint gauge arrow $u:A_0\to A_1$. Parallel transport along $A_t$, followed by the endpoint identification induced by $u$, is a unitary automorphism of the one-dimensional line $\mathcal L_{A_0}$. Its scalar is the holonomy $\operatorname{Hol}_{\gamma}(\mathcal L)\in U(1)$. Fix the regularization and local-counterterm convention before comparing this loop phase with the infinitesimal local anomaly; the holonomy itself is additional global loop data.

## Definition references

[Dai and Freed, §§1–2 and §5](https://arxiv.org/pdf/hep-th/9405012)

[Freed, Lecture 11, §§11.1–11.2](https://abel.math.harvard.edu/~dafr/CBMS133.pdf)

## Facts & Assumptions

**Given:** The compact spin manifold, bundle, connection, unitary representation, smooth Fredholm family, and regularized Hermitian line with unitary connection in the Definition.

[F1] [[def-aqft-thooft-anomaly]] defines the local perturbative anomaly class for a specified nondynamical background subalgebra modulo the model's admissible local counterterms. It explicitly makes no claim about large or disconnected transformations or determinant-line holonomy, so it supplies only the local/global scope distinction used here. Its current Step 1 readiness record is missing.

[A1] Every family member is Fredholm, and the Quillen metric and Bismut–Freed connection are supplied as part of the chosen regularized determinant data.

[L1] Dai and Freed, §5, PDF pp. 31–35, construct parallel transport from the exponentiated $\xi$-invariant and identify its connection with the Bismut–Freed connection; this supports the line/holonomy convention used here.

## Proof

1.1 By [A1], each kernel and cokernel is finite-dimensional, so each top exterior power in the Definition is a one-dimensional complex vector space. Their tensor product and dual are therefore a one-dimensional Hermitian line with the specified Quillen metric. [given, A1, algebra]

2.1 Parallel transport for a unitary connection is unitary, and the endpoint gauge identification is unitary by the chosen representation $R$. Their composite around $\gamma$ is thus a unitary automorphism of a one-dimensional complex line, hence multiplication by a unique scalar of modulus one. A change of unit vector in the fiber conjugates that scalar, which does not change it because $U(1)$ is abelian. Therefore $\operatorname{Hol}_{\gamma}(\mathcal L)$ is a well-defined element of $U(1)$. By [F1], the local anomaly interface does not classify determinant-line holonomy; this phase is defined here as separate global loop data, not as a consequence of [F1]. The current Step 1 readiness record for [F1] is missing. [given, F1, A1, L1, step 1.1, algebra] ∎
