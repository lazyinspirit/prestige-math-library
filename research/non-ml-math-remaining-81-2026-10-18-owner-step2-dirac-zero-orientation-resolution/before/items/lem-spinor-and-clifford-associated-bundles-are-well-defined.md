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
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
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
justified_by: []
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

[F0] Under the repository convention, a smooth manifold is Hausdorff and second-countable ([[def-smooth-manifold]], [[def-topological-manifold-without-boundary]]).

[F1] For $n=2m\ge2$, the complex Clifford algebra has its unique irreducible module $S_0$ of dimension $2^m$; chirality splits its Spin representation into $S_0^+\oplus S_0^-$ ([[thm-complex-spin-modules-and-compact-reducibility]]).

[F2] A real representation of a smooth principal bundle defines a smooth associated real vector bundle by the quotient $[ph,v]=[p,\rho(h)v]$ ([[def-associated-bundle-to-a-principal-bundle-and-representation]], [[thm-associated-vector-bundle-is-well-defined]]).

[F3] The Levi–Civita connection is the unique metric-compatible torsion-free connection ([[thm-fundamental-theorem-of-riemannian-geometry]]). Local matrices of a connection obey $\omega'=A^{-1}\omega A+A^{-1}dA$, and exactly such matrices glue to a unique connection ([[thm-connection-one-form-transformation-law]], [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F4] Curvature is the bracket-corrected commutator of covariant derivatives; in an orthonormal frame the Levi–Civita curvature action lifts to Clifford endomorphisms by $c(R_{ij})=\frac14\sum_{a,b}\operatorname{Rm}(e_i,e_j,e_a,e_b)c(e^a)c(e^b)$ ([[def-curvature-of-an-affine-connection]], [[def-riemann-curvature-four-tensor]], [[def-clifford-algebra-of-a-quadratic-space]]).

[A1] The actual [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]] supply the full and even complex matrix algebras underlying [F1]. Full AC is assumed ([[def-axiom-of-choice]]).

[F5] The actual covering has the local logarithm/exponential section at the identity given by the matrix-logarithm formula; its power series and finite-dimensional exponential are smooth on a smaller neighborhood ([[lem-real-local-spin-lift-by-matrix-logarithm]]).

## Proof

**Given:** The data above and compatible local spin frames.

1.1 By [F0], $M$ has a countable base. From the supplied local trivializing cover of the topological Spin lift, choose for each basis element contained in some trivializing open set one such set; these countably many sets cover $M$. Choose a local section on each. On overlaps its continuous transition $h_{ij}$ lifts the smooth oriented-frame transition $g_{ij}$. At each point, translate the local logarithm/exponential section in [F5] to a smooth inverse branch of $\rho$ near $g_{ij}(x)$. After restricting to a connected neighborhood, the continuous lift $h_{ij}$ agrees with one of the two inverse branches, so $h_{ij}$ is smooth. The resulting principal charts have smooth transitions and define a smooth structure on the actual supplied lift. This structure is Hausdorff because the base is Hausdorff and each fiber is separated in a product chart. It is second-countable because it is covered by countably many charts $U_i\times\operatorname{Spin}(n)$ and the finite-dimensional Clifford group is second-countable. The right action is smooth in these charts. Realify the smooth complex representation $\sigma: \operatorname{Spin}(n)\to GL_{\mathbb R}(S_{0,\mathbb R})$. The associated-bundle theorem [F2] now applies to this smooth, second-countable principal bundle. Multiplication by $i$ commutes with $\sigma(h_{ij})$, so it descends to a smooth endomorphism $J$ with $J^2=-I$ and the associated charts are complex-linear; the Spin-invariant chirality operator and its eigenspaces descend as well. [A1, F0, F1, F2, F5, construct]

2.1 Start with any positive Hermitian form on $S_0$ and average it over the finite group of signed monomials in the negative-square generators $c_0(e^j)$. Each generator becomes unitary; since its square is $-I$, its adjoint is its negative. Real linearity then makes every $c_0(v)$ skew-Hermitian, and unit vectors act unitarily. The positive generators are $c_+=-ic_0$, so their unit-vector products, and hence the full-even Spin action, are unitary too. Chirality is unitary and has square one, hence is selfadjoint. Thus this one form is both Clifford-compatible and Spin-invariant, and descends to a smooth associated Hermitian metric. Averaging over Spin alone would not ensure the vector adjoint relation. Let $\omega_i$ be the local $\mathfrak{so}(n)$-valued Levi–Civita connection matrix and let $\widehat\omega_i=(d\rho)^{-1}\omega_i$ be its lift to $\mathfrak{spin}(n)$. The connection matrices $d\sigma(\widehat\omega_i)$ obey the frame-change law [F3], so they glue uniquely. In the positive-square cover, the infinitesimal lift of an orthogonal matrix $A$ is the negative Clifford bivector; substitution $c_+=-ic_0$ cancels that sign and gives the local spin action $\frac14\sum_{a,b}\langle Ae_a,e_b\rangle c_0(e^a)c_0(e^b)$. Expanding the Clifford relation gives $[c(e^a)c(e^b),c(e^k)]=2(\delta_{ak}c(e^b)-\delta_{bk}c(e^a))$, so the lifted connection intertwines the defining $\mathfrak{so}(n)$ action and Clifford multiplication. Thus the glued spin connection is unitary, preserves chirality, and is Clifford-compatible. [A1, F1, F3, step 1.1, algebra]

3.1 Locally the complex Clifford algebra in even dimension is a full matrix algebra by [F1]. Its matrix idempotents split $V$ into smooth subbundles and its matrix units identify those subbundles, giving a smooth evaluation isomorphism $V\cong S_0\widehat\otimes W$ with $W=\operatorname{Hom}_{\mathrm{Cl}}(S_0,V)$. The induced multiplicity grading is $\Gamma_W=(\Gamma_{S_0}\otimes I)\Gamma_V$, so $\Gamma_V=\Gamma_{S_0}\otimes\Gamma_W$. In a local factorization the difference $\nabla^V-\nabla^S\otimes I$ commutes with Clifford multiplication, because both connections are Clifford-compatible. The full matrix algebra has commutant $I\otimes\operatorname{End}(W)$, so this difference uniquely defines a smooth multiplicity connection $\nabla^W$; it is unitary and preserves $\Gamma_W$ because both original connections are unitary and preserve their gradings. On an overlap write the change of factorization as $T_\beta=T_\alpha(\sigma(h_{\alpha\beta})\otimes B_{\alpha\beta})$, where $B_{\alpha\beta}$ is the smooth invertible multiplicity transition. The connection transformation law [F3], after subtracting the spin-connection law, gives $\omega^W_\beta=B_{\alpha\beta}^{-1}\omega^W_\alpha B_{\alpha\beta}+B_{\alpha\beta}^{-1}dB_{\alpha\beta}$. Thus the local multiplicity connections glue. Their curvature satisfies $F^V=F^S\otimes I+I\otimes F^W$, with $F^S=c(R^{LC})$ by [F4], so $F^{V/S}=I\otimes F^W$ and is genuinely a global commutant-valued curvature. [F1, F3, F4, step 2.1, algebra]

4.1 On overlaps, $F^W_\beta=B_{\alpha\beta}^{-1}F^W_\alpha B_{\alpha\beta}$ and $\Gamma_W$ is preserved, so $\operatorname{str}_W\exp(-F^W/(2\pi i))$ is invariant and patches to a global even form. The Bianchi identity follows directly from the local connection matrix: for $F=d\omega+\omega\wedge\omega$, expansion gives $dF+\omega\wedge F-F\wedge\omega=0$. Cyclicity of supertrace then shows that the relative character is closed. For a path of compatible connections with commutant-valued difference $a_t=\dot\omega_t$, one has $\dot F_t=d^{\nabla_t}a_t$; applying Bianchi and cyclicity gives $\partial_t\operatorname{str}_W e^{\lambda F_t}=\lambda\,d\operatorname{str}_W(a_t e^{\lambda F_t})$, with $\lambda=-1/(2\pi i)$. The transgression forms also conjugate by $B_{\alpha\beta}$ on overlaps, so they patch. This supplies the relative cohomological interpretation for a fixed geometric module, including when no global spinor bundle $S$ exists. For $V=S\widehat\otimes E$ with its product connection, the spin connection contributes $c(R^{LC})$ and the twist contributes $I\otimes F^E$, so $F^{V/S}=F^E$ and the relative supertrace is the ordinary trace on the ungraded $E$. [A1, F1, F3, F4, step 3.1, algebra] ∎

