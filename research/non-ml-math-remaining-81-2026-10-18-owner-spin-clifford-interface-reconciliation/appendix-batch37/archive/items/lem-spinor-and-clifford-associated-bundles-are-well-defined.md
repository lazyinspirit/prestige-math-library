---
id: lem-spinor-and-clifford-associated-bundles-are-well-defined
kind: lemma
title: "Spinor and geometric Clifford bundles and connections are well defined"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 10
deps:
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - thm-connection-one-form-transformation-law
  - thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-associated-vector-bundle-is-well-defined
  - lem-geometric-dirac-operator-is-well-defined
  - def-ahat-and-relative-chern-character-forms
  - def-axiom-of-choice
  - thm-real-pin-spin-image-kernel-and-compactness
  - thm-finite-dimensional-compact-group-representations-are-completely-reducible
  - thm-complex-spin-modules-and-compact-reducibility
  - def-curvature-of-an-affine-connection
  - def-riemann-curvature-four-tensor
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; the spinor module supplier is conditional and carries its PA-04 blocker"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC and the conditional complex module interface [A1]. On an even-dimensional oriented Riemannian manifold with a supplied Spin lift, the realified associated construction in [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]] is a smooth Hermitian graded Clifford bundle with a global compatible spin connection. For any graded Hermitian Clifford module, its local multiplicity spaces $W=\operatorname{Hom}_{\mathrm{Cl}}(S_0,V)$ and the relative curvature $F^{V/S}:=F^V-c(R^{LC})$ have transition laws for which $\operatorname{str}_W\exp(-F^{V/S}/(2\pi i))$ is a global even form. In the spin-twisted case $V=S\widehat\otimes E$, this relative curvature is the curvature $F^E$ of the supplied unitary connection.

## Facts & Assumptions

**Given:** AC, the conditional complex spin module and its full-even Spin representation, a Spin lift, and (for the relative statement) a finite-rank graded Hermitian Clifford module and compatible connection.

[F1] For $n=2m\ge2$, the complex Clifford algebra has its unique irreducible module $S_0$ of dimension $2^m$; chirality splits its Spin representation into $S_0^+\oplus S_0^-$ ([[thm-complex-spin-modules-and-compact-reducibility]]). The current item is draft and its statement is conditional on the two PA-04 classification suppliers named in [A1].

[F2] A real representation of a smooth principal bundle defines a smooth associated real vector bundle by the quotient $[ph,v]=[p,\rho(h)v]$ ([[def-associated-bundle-to-a-principal-bundle-and-representation]], [[thm-associated-vector-bundle-is-well-defined]]).

[F3] The Levi–Civita connection is the unique metric-compatible torsion-free connection ([[thm-fundamental-theorem-of-riemannian-geometry]]). Local matrices of a connection obey $\omega'=A^{-1}\omega A+A^{-1}dA$, and exactly such matrices glue to a unique connection ([[thm-connection-one-form-transformation-law]], [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F4] Curvature is the bracket-corrected commutator of covariant derivatives; in an orthonormal frame the Levi–Civita curvature action lifts to Clifford endomorphisms by $c(R_{ij})=\frac14\sum_{a,b}\operatorname{Rm}(e_i,e_j,e_a,e_b)c(e^a)c(e^b)$ ([[def-curvature-of-an-affine-connection]], [[def-riemann-curvature-four-tensor]], [[def-clifford-algebra-of-a-quadratic-space]]).

[A1] The current complex module theorem is conditional on [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]], both draft without Step-1 readiness; no acceptance of those premises is asserted. AC is declared in [[def-axiom-of-choice]].

## Proof

**Given:** The data above and compatible local spin frames.

1.1 The orthonormal frame bundle is a reduction of the oriented frame bundle by fiberwise Gram–Schmidt. On each trivializing open set choose a local section of the Spin lift and use its transition maps $h_{ij}$ to express the associated bundle in $S_0$ coordinates. Realify the complex representation $\sigma: \operatorname{Spin}(n)\to GL_{\mathbb R}(S_{0,\mathbb R})$; its transition maps are smooth and real-linear. By [F2] these charts define a smooth real vector bundle. Multiplication by $i$ on $S_0$ commutes with $\sigma(h_{ij})$, so it descends to a smooth endomorphism $J$ with $J^2=-I$ and the charts are complex-linear. The chirality operator is Spin-invariant, so its eigenspaces also descend. [A1, F1, F2, construct]

2.1 A Hermitian form can be made Spin-invariant by averaging any positive Hermitian form over compact Spin using normalized Haar measure; compactness follows from the definite case of [[thm-real-pin-spin-image-kernel-and-compactness]], and AC supplies the Haar interface in [[thm-finite-dimensional-compact-group-representations-are-completely-reducible]]. The induced associated metric is smooth. The local connection matrix $\omega_i$ of $P_{SO}(TM)$ is $\mathfrak{so}(n)$-valued; its lift $d\sigma(\omega_i)$ obeys the same frame-change formula in [F3], so the local spin connections glue uniquely. The commutator identity $[c(e^a)c(e^b),c(e^k)]=2(\delta_{ak}c(e^b)-\delta_{bk}c(e^a))$, obtained by expanding the Clifford relation, shows that $d\sigma$ intertwines the defining $\mathfrak{so}(n)$ action with Clifford multiplication. Thus the glued connection is unitary, preserves chirality, and is Clifford-compatible. [A1, F1, F3, step 1.1, algebra]

3.1 Locally the complex Clifford algebra in even dimension is a full matrix algebra by [F1], so a finite-dimensional module decomposes as $S_0\widehat\otimes W$; changing the local Spin frame changes $S_0$ by $\sigma(h)$ and changes $W$ by the inverse commutant coordinate. On overlaps, the connection curvature splits into $c(R^{LC})+F^{V/S}$. Applying curvature to the compatibility identity in [F3] gives $[F^V_{ij},c(\xi)]=c(R^{T^*M}_{ij}\xi)$; the commutator computation in step 2.1 gives the same identity for $c(R_{ij})$, so $F^{V/S}_{ij}$ commutes with every Clifford generator. The induced grading on $W$ is $\Gamma_W=(\Gamma_{S_0}\otimes I)\Gamma_V$, which also commutes with the overlap changes. [F1, F3, F4, step 2.1, algebra]

4.1 Under a change of local spinor frame, the multiplicity endomorphisms and $F^{V/S}$ are conjugated by the induced transition on $W$, so their supertrace power series is unchanged. If a local lift changes by the central element $-1$, the two spinor factors both change sign and conjugation on $\operatorname{End}(W)$ is unchanged. Hence the relative form patches globally even when no global spinor bundle $S$ exists. For $V=S\widehat\otimes E$, the spin connection contributes $c(R^{LC})$ and the tensor-product connection contributes $I\otimes F^E$, so $F^{V/S}=F^E$ and the relative supertrace is the ordinary supertrace on $E$. This proves the claimed well-definedness; the unresolved PA-04 classification remains the precise blocker for using [F1] without condition. [A1, F1, F3, F4, step 3.1, algebra] ∎

