---
id: thm-qftx-coupled-penrose-vanishing
kind: theorem
title: Coupled Penrose vanishing on the round four-sphere
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-coupled-penrose-injective-edge
  - lem-qftx-coupled-penrose-operator-coefficient
  - lem-qftx-coupled-penrose-positive-orientation-asd
  - lem-qftx-coupled-penrose-round-sphere-curvature
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-coupled-penrose-injective-edge: mathematical-premise
  lem-qftx-coupled-penrose-operator-coefficient: mathematical-premise
  lem-qftx-coupled-penrose-positive-orientation-asd: mathematical-premise
  lem-qftx-coupled-penrose-round-sphere-curvature: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_base: "ZF + full AC inherited through the analytic sheaf/Dolbeault comparison and harmonic inputs."
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–56: the coupled fibre edge, global injectivity, and explicit D*D+R/6 identity."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§§3–4, printed pp. 488–498: the Penrose operator and compact positivity route."
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: "https://arxiv.org/pdf/2205.08639"
      locator: "§4, printed p. 7: the displayed R/8 coefficient is recorded as a source discrepancy and is not used."
verification:
  precheck: pass
---

## Statement

Assume full AC. Let $S^4$ have the unit round metric and the positive stereographic orientation for $z_1=x_0+ix_1$, $z_2=x_2+ix_3$. Let $E\to S^4$ be any smooth finite-rank Hermitian bundle with a smooth unitary anti-self-dual connection $A$. On $Z=\mathbb CP^3$ use the incidence equations $\mu_1=z_1\lambda_1-\bar z_2\lambda_2$, $\mu_2=z_2\lambda_1+\bar z_1\lambda_2$, with infinity fibre $\lambda_1=\lambda_2=0$. Suppose $F$ is a holomorphic bundle smoothly identified with $\pi^*E$ and its Dolbeault operator is the ordinary vertical derivative and the $A$-horizontal alpha-plane operator. Then

$$H^1(Z,F\otimes\mathcal O_Z(-2))=H^1(Z,F^\vee\otimes\mathcal O_Z(-2))=0.$$

This applies to arbitrary reducible and flat summands. It assumes no algebraic-to-analytic GAGA, monad, or inverse ADHM normal form as an independent premise.

## Statement references

[[def-axiom-of-choice]]

[[def-qftx-coupled-penrose-incidence-geometry]]

[[lem-qftx-coupled-penrose-injective-edge]]

[[lem-qftx-coupled-penrose-operator-coefficient]]

[[lem-qftx-coupled-penrose-round-sphere-curvature]]

[Rawnsley, §§2–3, pp. 46–56](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §§3–4, pp. 488–498](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

[Donaldson, §4, p. 7 (coefficient discrepancy only)](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** Full AC; the unit round sphere with the specified positive orientation and incidence; a smooth finite-rank Hermitian bundle with unitary ASD connection; and the holomorphic pullback bundle with the stated vertical and horizontal Dolbeault operator.

[A1] The actual batch-67 carrier states that under full AC, for each $r\in\{0,1,2,3\}$ and every finite-rank holomorphic vector bundle $G$ on $\mathbb P^r(\mathbb C)$, the canonical comparison $H^q(X,\mathcal O(G))\cong H^q_{\bar\partial}(X,G)$ holds for every $q\ge0$; for the trivial line it also states $H^0(X,\mathcal O)=\mathbb C$ and $H^q(X,\mathcal O)=0$ for $q>0$. This matches the comparison used here. The item file and full conditional proof are present and were inspected, but its current Step 1 readiness record is missing, so the premise remains unresolved for this batch. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[F1] The incidence fixes the positive orientation, the unit round metric and the alpha-plane distribution; its horizontal curvature equation detects exactly $F_A^+=0$. [[def-qftx-coupled-penrose-incidence-geometry]], [[lem-qftx-coupled-penrose-positive-orientation-asd]]

[F2] Fibrewise harmonic projection defines a well-defined injective map from the analytic cohomology group to $\Gamma(S^4,E)$, conditional on the comparison in [A1]. [[lem-qftx-coupled-penrose-injective-edge]]

[F3] The image of that map solves $(\nabla_A^*\nabla_A+2)s=0$, and the same local calculation applies to the dual unitary ASD connection. [[lem-qftx-coupled-penrose-operator-coefficient]]

[F4] The scalar curvature in the fixed unit-radius convention is $R=12$, so $2=R/6$. [[lem-qftx-coupled-penrose-round-sphere-curvature]]

[F5] Full AC is inherited through the analytic and harmonic comparison inputs; no stronger choice principle is used in the integration-by-parts argument. [[def-axiom-of-choice]]

## Proof

**Given:** The theorem hypotheses and the conditional analytic comparison [A1].

1.1 Let $\xi\in H^1(Z,F\otimes\mathcal O_Z(-2))$ and set $s=\mathcal P_A(\xi)$. By [F2] the map is injective, and [F3] gives $(\nabla_A^*\nabla_A+2)s=0$. Since $S^4$ is compact without boundary and $\nabla_A^*$ is the formal adjoint, integration gives $0=\int_{S^4}\langle(\nabla_A^*\nabla_A+2)s,s\rangle\,d\mathrm{vol}_g=\int_{S^4}(|\nabla_As|^2+2|s|^2)\,d\mathrm{vol}_g$. Both integrands are nonnegative, so $\int_{S^4}|s|^2=0$. [given, A1, F2, F3, F5, algebra]

2.1 The smooth function $|s|^2$ is nonnegative. If it were positive at a point, continuity would make it bounded below by a positive number on a nonempty open set, which has positive Riemannian volume and contradicts the zero integral in step 1.1. Thus $s=0$ everywhere, and injectivity in [F2] gives $\xi=0$. Hence $H^1(Z,F\otimes\mathcal O_Z(-2))=0$. [F2, step 1.1, algebra]

3.1 The dual connection $A^\vee$ is unitary and has curvature $F_{A^\vee}=-F_A^{\mathsf T}$; transposition acts only on bundle coefficients and commutes with the Hodge star, so $A^\vee$ is ASD in the same orientation. The holomorphic dual $F^\vee$ has the induced vertical and horizontal Dolbeault operator. Apply [F2] and [F3] to this dual data and repeat the integration in step 1.1: every term is nonnegative and the scalar term is again $2|s^\vee|^2$. The continuity argument in step 2.1 gives $s^\vee=0$, and injectivity gives $H^1(Z,F^\vee\otimes\mathcal O_Z(-2))=0$. This uses no irreducibility or nonflatness condition. [F1, F2, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 The preceding deductions are complete conditional on [A1]. The batch-67 comparison carrier and proof are present, but `loadStep1Record`/`step1Decision` currently returns `Readiness record missing` for both it and its Laurent–Čech scalar-cohomology prerequisite; therefore this item remains `escalated` and the deductions are not presented as an unconditionally current proof. The actual comparison interface has been matched against the uses in steps 1.1–3.1; after the current supplier readiness records are authored, recheck their exact interfaces before changing this item. [A1, step 1.1, step 2.1, step 3.1] ∎
