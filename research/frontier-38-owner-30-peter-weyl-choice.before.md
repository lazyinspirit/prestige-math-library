---
id: ex-peter-weyl-for-an-infinite-product-of-finite-groups
kind: example
title: Peter-Weyl for an infinite product of finite groups
deps:
- lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct
- thm-uniform-peter-weyl-density
- thm-l2-peter-weyl-orthonormal-basis
- thm-regular-representation-peter-weyl-decomposition
- def-unitary-dual-of-a-compact-group
- def-normalized-irreducible-matrix-coefficient-basis
- def-profinite-group-by-inverse-limit
- cor-normalized-haar-probability-on-a-compact-group
- thm-complex-stone-weierstrass-self-adjoint
- def-product-topology
- def-matrix-coefficient-of-a-unitary-representation
- thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
- def-strongly-continuous-unitary-representation
- def-representative-function-on-a-compact-group
- cor-finite-dimensional-subspaces-are-closed
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: "§2 opening discussion: inverse limits of finite groups and their compact topology, printed pp. 1–2"
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §22.6, printed p. 53 (irreducibles of a product of compact groups are tensor products)
status: draft
origin: pipeline
---
## Example

Let $(G_i)_{i\in I}$ be finite discrete groups with $I$ arbitrary and let $K:=\prod_{i\in I}G_i$ with the product topology; $K$ is compact, Hausdorff and totally disconnected, hence profinite with normalized Haar probability $\mu$. By [[lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct]], every continuous finite-dimensional unitary representation of $K$ factors through the projection $p_F:K\to K_F=\prod_{i\in F}G_i$ for some finite $F\subseteq I$; conversely every finite-dimensional representation of the finite group $K_F$ pulls back to $K$, and it is irreducible exactly when the representation of $K_F$ is irreducible (pullback along the surjection $p_F$). The finite-coordinate irreducibles of $K$ are therefore exactly the pullbacks of the irreducibles of the finite groups $K_F$; their coefficient spaces are the pullbacks of the coefficient spaces of $K_F$, and the coefficient algebra $R(K)$ is the union of these pullbacks over finite $F$, i.e. the algebra of continuous functions depending on finitely many coordinates. This algebra is dense in $C(K)$ by [[thm-uniform-peter-weyl-density]] (equivalently by Stone-Weierstrass: it is a unital self-adjoint algebra separating points because coordinates separate points and the finite-group coefficient algebra separates points), the normalized coefficient family is an orthonormal basis of $L^2(K)$ ([[thm-l2-peter-weyl-orthonormal-basis]]), and the regular representation decomposes as in [[thm-regular-representation-peter-weyl-decomposition]]. No countability of $I$ or of the dual is assumed, and point separation in the product uses only finitely many coordinates.

## Facts & Assumptions

[F1] The product $K=\prod_{i\in I}G_i$ of finite discrete groups is the inverse limit of the finite groups $K_F$ over the directed set of finite subsets $F\subseteq I$, hence a profinite group: compact, Hausdorff, totally disconnected; it carries a normalized Haar probability $\mu$, and the kernels $\ker p_F$ form an open normal neighbourhood basis. ([[def-profinite-group-by-inverse-limit]], [[cor-normalized-haar-probability-on-a-compact-group]], [[def-product-topology]], [[lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct]])

[F2] Every continuous finite-dimensional unitary representation $\rho$ of $K$ factors as $\rho=\rho_F\circ p_F$ through a finite subproduct, and every matrix coefficient of $\rho$ depends only on the coordinates in $F$. Conversely a representation $\rho_F$ of $K_F$ pulls back along the surjection $p_F$ to a continuous finite-dimensional unitary representation of $K$ with coefficients $\rho_F$-coefficients composed with $p_F$. ([[lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F3] Pullback along a surjective homomorphism preserves and reflects irreducibility: a closed invariant subspace of the pullback corresponds bijectively to a closed invariant subspace of the representation on the quotient, because the acting groups coincide, $\rho(K)=\rho_F(K_F)$. ([[def-strongly-continuous-unitary-representation]], [[lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct]])

[F4] For the finite group $K_F$ the coefficient algebra $R(K_F)$ equals $C(K_F)$: $R(K_F)$ is a dense linear subspace of the finite-dimensional space $C(K_F)$ by the general density theorem, and a finite-dimensional subspace of a normed space is closed. ([[thm-uniform-peter-weyl-density]], [[cor-finite-dimensional-subspaces-are-closed]])

[F5] The general compact-group theory applies to $K$: irreducible representations are finite dimensional, $R(K)$ is uniformly dense in $C(K)$, the normalized coefficient family is an orthonormal basis of $L^2(K)$, and the regular representation decomposes into the isotypic blocks. ([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], [[thm-uniform-peter-weyl-density]], [[thm-l2-peter-weyl-orthonormal-basis]], [[thm-regular-representation-peter-weyl-decomposition]], [[def-unitary-dual-of-a-compact-group]], [[def-normalized-irreducible-matrix-coefficient-basis]])

[F6] The functions $K\to\mathbb C$ depending on finitely many coordinates form a unital self-adjoint complex algebra containing the constants, and they separate points: distinct points differ in some coordinate $i$, and the function of that coordinate alone taking value $1$ at one coordinate and $0$ at the other is continuous because $G_i$ is discrete. ([[thm-complex-stone-weierstrass-self-adjoint]], [[def-product-topology]], [[def-representative-function-on-a-compact-group]])

## Verification

**Given:** AC, finite groups $G_i$ indexed by an arbitrary set $I$, the product $K=\prod_iG_i$ with product topology, and its finite subproducts $K_F$.

1.1 By [F1] the product $K$ is a profinite group, hence compact Hausdorff, with normalized Haar probability, and the kernels of the coordinate projections form an open normal neighbourhood basis. By [F2] every continuous finite-dimensional unitary representation of $K$ factors through some $p_F$, and every matrix coefficient then depends on the coordinates in $F$ only; by [F3] such a pullback is irreducible exactly when the representation of the finite group $K_F$ is, so the finite-coordinate irreducibles of $K$ are exactly the pullbacks of the irreducibles of the groups $K_F$. Consequently $R(K)$ is the union over finite $F$ of the pullbacks $p_F^*R(K_F)$: one inclusion is [F2], and conversely a pullback of an element of $R(K_F)$ is a finite linear combination of pullbacks of matrix coefficients, hence a representative function of $K$. Since $R(K_F)=C(K_F)$ for the finite group $K_F$ by [F4], $R(K)$ is exactly the algebra of continuous functions depending on finitely many coordinates. [F1, F2, F3, F4]

2.1 The general theory applies to the compact Hausdorff group $K$ by [F5]: $R(K)$ is uniformly dense in $C(K)$ and the normalized coefficient family is an orthonormal basis of $L^2(K)$, while the regular representation decomposes into its isotypic blocks. The density also follows directly from the description of $R(K)$ in step 1.1: it is a unital self-adjoint algebra of continuous functions separating points by [F6], so the unital Stone-Weierstrass theorem gives uniform density; point separation uses only the finitely many coordinates in which two points differ, and no countability of $I$ is needed or claimed. This completes the verification. The Axiom of Choice is inherited through the profinite and Haar suppliers. [F5, F6, step 1.1] ∎
