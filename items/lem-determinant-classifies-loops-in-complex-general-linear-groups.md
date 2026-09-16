---
id: lem-determinant-classifies-loops-in-complex-general-linear-groups
kind: lemma
title: Determinant classifies loops in complex general linear groups
status: published
origin: pipeline
deps: [def-invertible-matrix-and-general-linear-group, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-higher-dimensional-spheres-are-simply-connected, cor-winding-number-classifies-loops-in-the-punctured-plane]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Proposition 1.11"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Determinant and clutching loops, printed pp.23–24"
    - title: "MIT 18.906 notes, Lectures 18 and 21"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Unitary fibrations and stable classical groups, printed pp.58–61 and 69–72"
---

## Statement

For every $n\geq1$, determinant induces an isomorphism

$$\det_*:\pi_1(\operatorname{GL}_n(\mathbb C),I)\longrightarrow\pi_1(\mathbb C^\times,1)\cong\mathbb Z.$$

A based loop whose determinant has winding number $k$ is homotopic through
invertible matrices to $z\mapsto\operatorname{diag}(z^k,1,\ldots,1)$. This
result is choice-free.

## Facts & Assumptions

**Given:** an integer $n\geq1$ and based loops at the identity.

[F1] Invertible complex matrices form $\operatorname{GL}_n(\mathbb C)$ ([[def-invertible-matrix-and-general-linear-group]]). Equip $M_n(\mathbb C)\cong\mathbb C^{n^2}$ with its Euclidean topology and $\operatorname{GL}_n(\mathbb C)$ with the subspace topology. The determinant is a polynomial in the matrix entries and hence is continuous.

[F2] A fibration has the pointed long exact sequence of homotopy groups ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F3] Spheres $S^m$ are simply connected for $m\geq2$ ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F4] Winding number identifies $\pi_1(\mathbb C^\times,1)$ with $\mathbb Z$ ([[cor-winding-number-classifies-loops-in-the-punctured-plane]]).

## Proof

**Proof technique:** direct.

1.1 Continuous Gram–Schmidt on the ordered columns writes every $A\in\operatorname{GL}_n(\mathbb C)$ uniquely as $A=QR$, where $Q\in U(n)$ and $R$ is upper triangular with positive real diagonal. No denominator vanishes because each initial set of columns is independent. The path $Q((1-t)R+tI)$ remains invertible and fixes $U(n)$ pointwise, so it is a deformation retraction of $\operatorname{GL}_n(\mathbb C)$ onto $U(n)$. [F1, construct, algebra]

1.2 The last-column map $SU(n)\to S^{2n-1}$ is locally trivial: near a chosen unit vector, continuous Gram–Schmidt completes that vector together with a fixed nearby frame, and multiplying the first completed vector by the inverse determinant puts the completion in $SU(n)$. Its fiber over the last basis vector is $SU(n-1)$. Thus $SU(n-1)\to SU(n)\to S^{2n-1}$ is a fibration. [construct, algebra]

2.1 Since $SU(1)$ is a point, induct simultaneously that $SU(n)$ is path-connected and simply connected. For $n\geq2$, the sphere $S^{2n-1}$ is path-connected and has trivial fundamental group by [F3]. The pointed low-degree part of [F2], applied to step 1.2, first carries path-connectedness of the fiber and base to $SU(n)$ and then carries the inductive equality $\pi_1(SU(n-1))=0$ and $\pi_1(S^{2n-1})=0$ to $\pi_1(SU(n))=0$. [F2, F3, step 1.2, induction]

3.1 Determinant $U(n)\to U(1)$ is a fibration with fiber $SU(n)$ and section $s(z)=\operatorname{diag}(z,1,\ldots,1)$. By [F2] and step 2.1, $\det_*$ is injective on $\pi_1$, while the section makes it surjective. Step 1.1 transfers this isomorphism to $\operatorname{GL}_n(\mathbb C)$ and $\mathbb C^\times$. [F2, step 1.1, step 2.1]

4.1 If a loop $g$ has determinant winding $k$, [F4] says $\det g$ is homotopic to $z\mapsto z^k$. Step 3.1 says that $g$ and $s(z^k)$ represent the same based homotopy class, which is precisely the displayed diagonal loop. Every construction was finite and explicit, so no choice principle was used. [F4, step 3.1] ∎
