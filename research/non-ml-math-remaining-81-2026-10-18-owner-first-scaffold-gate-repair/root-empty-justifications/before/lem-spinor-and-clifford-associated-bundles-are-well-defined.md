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
  - lem-real-local-spin-lift-by-matrix-logarithm
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
axiom_strength: "ZF + full AC; exact current Clifford/Spin interfaces"
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

Assume full AC. On an even-dimensional oriented Riemannian manifold with a supplied Spin lift, the realified associated construction in [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]] is a smooth Hermitian graded Clifford bundle with a global compatible spin connection. For any graded Hermitian Clifford module there is locally a graded factorization $V\cong S_0\widehat\otimes W$. Its local multiplicity spaces $W=\operatorname{Hom}_{\mathrm{Cl}}(S_0,V)$ and the relative curvature $F^{V/S}:=F^V-c(R^{LC})$ have transition laws for which $\operatorname{str}_W\exp(-F^{V/S}/(2\pi i))$ is a global even form. In the spin-twisted case $V=S\widehat\otimes E$, this relative curvature is the curvature $F^E$ of the supplied unitary connection.

## Facts & Assumptions

**Given:** AC, the complex spin module and its full-even Spin representation, a Spin lift, and (for the relative statement) a finite-rank graded Hermitian Clifford module and compatible connection.

[F1] For $n=2m\ge2$, the complex Clifford algebra has its unique irreducible module $S_0$ of dimension $2^m$; chirality splits its Spin representation into $S_0^+\oplus S_0^-$ ([[thm-complex-spin-modules-and-compact-reducibility]]).

[F2] A real representation of a smooth principal bundle defines a smooth associated real vector bundle by the quotient $[ph,v]=[p,\rho(h)v]$ ([[def-associated-bundle-to-a-principal-bundle-and-representation]], [[thm-associated-vector-bundle-is-well-defined]]).

[F3] The Levi–Civita connection is the unique metric-compatible torsion-free connection ([[thm-fundamental-theorem-of-riemannian-geometry]]). Local matrices of a connection obey $\omega'=A^{-1}\omega A+A^{-1}dA$, and exactly such matrices glue to a unique connection ([[thm-connection-one-form-transformation-law]], [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F4] Curvature is the bracket-corrected commutator of covariant derivatives; in an orthonormal frame the Levi–Civita curvature action lifts to Clifford endomorphisms by $c(R_{ij})=\frac14\sum_{a,b}\operatorname{Rm}(e_i,e_j,e_a,e_b)c(e^a)c(e^b)$ ([[def-curvature-of-an-affine-connection]], [[def-riemann-curvature-four-tensor]], [[def-clifford-algebra-of-a-quadratic-space]]).

[A1] The actual [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]] supply the full and even complex matrix algebras underlying [F1]. Full AC is assumed ([[def-axiom-of-choice]]).

[F5] The actual covering has a local logarithm/exponential section at the identity ([[lem-real-local-spin-lift-by-matrix-logarithm]]).

## Proof

**Given:** The data above and compatible local spin frames.

1.1 The orthonormal frame bundle is a reduction of the oriented frame bundle by fiberwise Gram–Schmidt. On each trivializing open set choose a local section of the Spin lift and use its transition maps $h_{ij}$ to express the associated bundle in $S_0$ coordinates. The explicit local section has formula $s(A)=\exp(b(\log A))$, with $b$ linear. On every smaller matrix-norm ball the logarithm series and all its derivatives converge uniformly, so this section is smooth. Translating it gives smooth local sheets. A continuous lift of a smooth frame transition therefore is locally this smooth section times a constant sign and is smooth; the lifted charts give the smooth structure on the supplied lift. Realify the complex representation $\sigma: \operatorname{Spin}(n)\to GL_{\mathbb R}(S_{0,\mathbb R})$; its transition maps are smooth and real-linear. By [F2] these charts define a smooth real vector bundle. Multiplication by $i$ on $S_0$ commutes with $\sigma(h_{ij})$, so it descends to a smooth endomorphism $J$ with $J^2=-I$ and the charts are complex-linear. The chirality operator is Spin-invariant, so its eigenspaces also descend. [A1, F1, F2, F5, construct]

2.1 Start with any positive Hermitian form on $S_0$ and average it over the finite group of signed monomials in the negative-square generators $c_0(e^j)$. Each generator becomes unitary; since its square is $-I$, its adjoint is its negative. Real linearity then makes every $c_0(v)$ skew-Hermitian, and unit vectors act unitarily. The positive generators are $c_+=-ic_0$, so their unit-vector products, and hence the full-even Spin action, are unitary too. Chirality is unitary and has square one, hence is selfadjoint. Thus this one form is both Clifford-compatible and Spin-invariant, and descends to a smooth associated Hermitian metric. Averaging over Spin alone would not ensure the vector adjoint relation. The local connection matrix $\omega_i$ of $P_{SO}(TM)$ is $\mathfrak{so}(n)$-valued; its lift $d\sigma(\omega_i)$ obeys the same frame-change formula in [F3], so the local spin connections glue uniquely. In the positive-square cover, the infinitesimal lift of an orthogonal matrix $A$ is the negative Clifford bivector; substitution $c_+=-ic_0$ cancels that sign and gives $d\sigma(A)=\frac14\sum_{a,b}\langle Ae_a,e_b\rangle c_0(e^a)c_0(e^b)$. The commutator identity $[c(e^a)c(e^b),c(e^k)]=2(\delta_{ak}c(e^b)-\delta_{bk}c(e^a))$, obtained by expanding the Clifford relation, shows that $d\sigma$ intertwines the defining $\mathfrak{so}(n)$ action with Clifford multiplication. Thus the glued connection is unitary, preserves chirality, and is Clifford-compatible. [A1, F1, F3, step 1.1, algebra]

3.1 Locally the complex Clifford algebra in even dimension is a full matrix algebra by [F1], so its matrix idempotents split $V$ into smooth subbundles and the matrix units identify them with $E_{11}V$. Their ranks are locally constant by the trace of the idempotent, and the resulting smooth evaluation isomorphism gives $V\cong S_0\widehat\otimes W$ with $W=\operatorname{Hom}_{\mathrm{Cl}}(S_0,V)$; changing the local Spin frame changes $S_0$ by $\sigma(h)$ and changes $W$ by the inverse commutant coordinate. On overlaps, the connection curvature splits into $c(R^{LC})+F^{V/S}$. Applying curvature to the compatibility identity in [F3] gives $[F^V_{ij},c(\xi)]=c(R^{T^*M}_{ij}\xi)$; the commutator computation in step 2.1 gives the same identity for $c(R_{ij})$, so $F^{V/S}_{ij}$ commutes with every Clifford generator. The induced grading on $W$ is $\Gamma_W=(\Gamma_{S_0}\otimes I)\Gamma_V$, which also commutes with the overlap changes. [F1, F3, F4, step 2.1, algebra]

4.1 Under a change of local spinor frame, the multiplicity endomorphisms and $F^{V/S}$ are conjugated by the induced transition on $W$, so their supertrace power series is unchanged. If a local lift changes by the central element $-1$, the two spinor factors both change sign and conjugation on $\operatorname{End}(W)$ is unchanged. Hence the relative form patches globally even when no global spinor bundle $S$ exists. The local Bianchi identity for the induced multiplicity connection gives $\nabla_WF^{V/S}=0$. Cyclicity of supertrace therefore makes the relative character closed. For a path of compatible connections with commutant-valued difference $a_t$, differentiation gives $\partial_t\operatorname{str}_W e^{\lambda F_t}=\lambda\,d\operatorname{str}_W(a_t e^{\lambda F_t})$, with $\lambda=-1/(2\pi i)$; these transgression forms conjugate on overlaps and hence patch. This supplies the relative cohomological interpretation for a fixed geometric module. For $V=S\widehat\otimes E$, the spin connection contributes $c(R^{LC})$ and the tensor-product connection contributes $I\otimes F^E$, so $F^{V/S}=F^E$ and the relative supertrace is the ordinary supertrace on $E$. This proves the claimed well-definedness with the actual algebra interfaces in [A1]. [A1, F1, F3, F4, step 3.1, algebra] ∎

