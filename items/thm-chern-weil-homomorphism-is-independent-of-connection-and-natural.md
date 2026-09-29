---
id: thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
kind: theorem
title: Connection independence and naturality of Chern–Weil classes
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-the-chern-weil-homomorphism
  - lem-transgression-between-two-connections-is-exact
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - def-axiom-of-choice
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-complex-linear-and-compatible-bundle-connections
  - thm-curvature-two-form-structure-equation
  - def-pullback-connection
  - thm-pullback-connection-is-well-defined-and-functorial
  - thm-connection-one-form-transformation-law
  - thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
  - def-smooth-map-between-manifolds-with-boundary
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.1, Proposition II.4.1(b)–(c), printed pp. 88–89: connection-path exactness and pullback naturality for trace power series"
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: "§5, connection-independence proposition following Lemma (5.3), printed pp. 28–29"
---

## Statement

Let $M$ and $N$ be finite-dimensional Hausdorff second-countable smooth
manifolds, with boundary allowed. Let $E\to M$ be a finite-rank real or
complex bundle with a supplied $G$-frame reduction, where the applicable
group is $\operatorname{GL}_r(\mathbb R)$, $\operatorname{GL}_r(\mathbb C)$,
$U(r)$, or $SO(r)$. For a finite sum $P$ of $G$-invariant polynomials, let
$\operatorname{CW}_{E,\nabla}(P)$ be the map defined in
[[def-the-chern-weil-homomorphism]] using a connection compatible with this
same reduction.

For any two compatible connections $\nabla_0,\nabla_1$ on $E$,
$$\operatorname{CW}_{E,\nabla_0}(P)=\operatorname{CW}_{E,\nabla_1}(P).$$
For every smooth map $f:N\to M$, equip $f^*E$ with its pulled-back
$G$-reduction and use the pullback connection $f^*\nabla$. Then
$$\operatorname{CW}_{f^*E,f^*\nabla}(P)=f^*\operatorname{CW}_{E,\nabla}(P),$$
where for boundary manifolds smoothness and pullback of forms use the library's
local-extension convention. For each supplied compatible connection,
$\operatorname{CW}_{E,\nabla}$ is a unital graded algebra homomorphism in
$P$.

Assume full Axiom of Choice (AC) for the existence assertion: every such
real or complex bundle with a fixed $\operatorname{GL}$, $U$, or $SO$
reduction admits a compatible connection. The connection-independence and
pullback assertions for supplied compatible connections do not use AC.

## Facts & Assumptions

**Given:** The manifolds and bundle; a supplied $G$-frame atlas; a finite
sum of $G$-invariant polynomials; and, for the first two assertions, the
compatible connection or pair of compatible connections explicitly named.
A smooth map $f:N\to M$ is included when proving naturality.

[A1] Full AC says every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F1] For a fixed compatible connection, the Chern–Weil construction is a
unital graded algebra map ([[def-the-chern-weil-homomorphism]]).

[F2] For every homogeneous degree $k\geq1$, the difference of endpoint
curvature evaluations is the exterior derivative of the explicit
transgression form; degree zero has equal endpoint evaluations
([[lem-transgression-between-two-connections-is-exact]]).

[F3] Under AC, every real or complex bundle admits a compatible metric and
connection, and any supplied Euclidean or Hermitian metric admits a
compatible connection
([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F4] In a pulled-back frame the pullback connection matrix is the entrywise
pullback of the original matrix
([[def-pullback-connection]]).

[F5] The pullback prescription defines a unique connection independent of
frames ([[thm-pullback-connection-is-well-defined-and-functorial]]).

[F6] In a local frame the curvature matrix satisfies
$\Omega=d\omega+\omega\wedge\omega$
([[thm-curvature-two-form-structure-equation]]).

[F7] A smooth map between manifolds with boundary has coordinate
representatives smooth in the local-extension sense
([[def-smooth-map-between-manifolds-with-boundary]]).

[F8] On the boundary-capable form complex, pullback commutes with $d$,
preserves wedges, and induces maps on de Rham cohomology
([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

[F9] Curvature evaluation is the multilinear extension of the invariant
polarization followed by exterior multiplication
([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F10] Hermitian-compatible and Euclidean-compatible connections obey their
respective metric-derivative identities
([[def-complex-linear-and-compatible-bundle-connections]]).

[F11] In frames related by $e'=eA$, connection matrices satisfy
$\omega'=A^{-1}\omega A+A^{-1}dA$
([[thm-connection-one-form-transformation-law]]).

[F12] Local connection matrices satisfying that transition identity define
a unique connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

## Proof

1.1 Write $P=\sum_{k=0}^dP_k$ as its finite homogeneous decomposition. For $k\geq1$, apply [F2] to $\nabla_0,\nabla_1$ on the same supplied $G$-reduction: the representative difference $P_k(\Omega_{\nabla_1},\ldots,\Omega_{\nabla_1})-P_k(\Omega_{\nabla_0},\ldots,\Omega_{\nabla_0})$ is exact. For $k=0$, both representatives are the same constant form. Taking classes and adding the finitely many homogeneous components proves the displayed connection-independence equality, including for complex coefficients and boundary bases. [F1, F2, given, algebra]

1.2 Let $f:N\to M$ be smooth. Pull back each supplied frame $e_\alpha$ to $f^*e_\alpha$ on $f^{-1}(U_\alpha)$; its transition matrix is $A_{\alpha\beta}\circ f$, still valued in $G$. The definition [F4] gives local connection matrix $f^*\omega_\alpha$, with values in the Lie algebra of $G$. On boundary charts use local smooth extensions as in [F7]. On boundaryless charts [F5] supplies frame-independent gluing; for boundary charts, differentiating the frame relation $e_\beta=e_\alpha A_{\alpha\beta}$ gives [F11], whose product-rule derivation applies to the locally extendible coefficients at boundary points. Pulling the matrix identity back and using [F8] yields
$$f^*\omega_\beta=(A_{\alpha\beta}\circ f)^{-1}(f^*\omega_\alpha)(A_{\alpha\beta}\circ f)+(A_{\alpha\beta}\circ f)^{-1}d(A_{\alpha\beta}\circ f).$$
This is precisely the gluing identity [F12]. Explicitly, if $u_\alpha=(A_{\alpha\beta}\circ f)u_\beta$, the product rule gives $du_\alpha+(f^*\omega_\alpha)u_\alpha=(A_{\alpha\beta}\circ f)(du_\beta+(f^*\omega_\beta)u_\beta)$; the local expressions therefore define one connection, including at boundary points. This establishes the boundary case directly without presuming [F5] covers it. Finally, the structure equation [F6] and [F8] give, entry by entry, $\Omega_{f^*\nabla}=d_N(f^*\omega_\alpha)+(f^*\omega_\alpha)\wedge(f^*\omega_\alpha)=f^*(d_M\omega_\alpha+\omega_\alpha\wedge\omega_\alpha)=f^*\Omega_\nabla$. Thus the pulled-back connection preserves the pulled-back reduction. [F4, F5, F6, F7, F8, F11, F12, given, algebra]

1.3 Assume [A1]. The compatible-connection existence result [F3] supplies a metric and a compatible connection for every real or complex bundle in the stated scope, and supplies compatible connections for any given Euclidean or Hermitian metric. A general linear reduction is preserved by any such real or complex connection. For a $U(r)$ reduction the supplied Hermitian metric makes [F3] Hermitian-compatible; applying its metric-derivative identity [F10] in a unitary frame gives a skew-Hermitian connection matrix. For an $SO(r)$ reduction the supplied oriented Euclidean metric makes [F3] Euclidean-compatible. Applying its metric-derivative identity to an oriented orthonormal frame gives a skew-symmetric connection matrix, hence a $\mathfrak{so}(r)$-valued matrix in each such frame. This proves existence. AC is used only here, through [F3]; all other claims use supplied connections and no choice axiom. [A1, F3, F10, construct]

1.4 By [F1], for the fixed supplied connection the map preserves multiplication and the unit in the invariant-polynomial algebra. This proves the stated multiplicativity without using connection independence as a premise. [F1, given]

2.1 For each $k\geq1$, [F9] expresses the curvature evaluation as a multilinear combination of wedge products of scalar coefficient forms. Pullback preserves those products by [F8], so step 1.2 gives $P_k(\Omega_{f^*\nabla},\ldots,\Omega_{f^*\nabla})=f^*P_k(\Omega_\nabla,\ldots,\Omega_\nabla)$. For $k=0$ both sides are the pullback of the same constant $0$-form. Summing over $k$ gives equality of representative forms. Since [F8] induces the pullback map on the de Rham quotients, their classes satisfy the stated naturality equation. For complex coefficients the same cochain equality holds componentwise on real and imaginary parts. If another compatible connection is chosen on $f^*E$, step 1.1 gives the same class. [F1, F8, F9, step 1.1, step 1.2, given]

3.1 If $M$ is empty, its de Rham target is the zero algebra and every class equality is the unique equality there; a map to the empty manifold can exist only when $N$ is empty. For rank zero, the connection is unique and only the degree-zero polynomial evaluation can be nonzero. At rank one the matrix and pullback computations above remain scalar and use no rank lower bound. Any form degree above the base dimension is zero, so the equalities remain valid in those degrees. The path in [F2] is integrated from $t=0$ to $t=1$, giving exactly the two endpoint forms in the order used in step 1.1. The theorem contains no iff assertion. [F1, F2, F8, step 1.1, step 1.2, algebra] ∎
