---
id: lem-flag-variety-of-a-vector-space
kind: lemma
title: The variety of complete flags of a finite-dimensional vector space is smooth projective
dependency_level: 3
deps:
  - def-axiom-of-choice
  - lem-upper-unitriangular-central-series
  - cor-grassmannian-smooth-irreducible-dimension
  - cor-projective-variety-product-exists
  - def-algebraic-group-action-and-scheme-theoretic-stabilizer
  - def-derived-subgroup-and-solvable-algebraic-group
  - def-grassmannian-subspaces
  - def-plucker-coordinates
  - def-product-varieties-universal-property
  - def-projective-bundle-scheme
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - lem-closed-immersion-proper
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-grassmannian-standard-affine-charts
  - lem-plucker-map-well-defined-injective
  - thm-multihomogeneous-map-to-projective-space
  - thm-plucker-image-closed
  - thm-projective-space-proper-over-base
  - def-upper-unitriangular-group-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Propositions 7.29-7.30, printed p. 146 (flag functor and projective incidence construction)
---
## Statement

Assume the Axiom of Choice, inherited from the projective product and properness suppliers ([[def-axiom-of-choice]]).

Let $k$ be an algebraically closed field and let $V$ be a finite-dimensional $k$-vector space of dimension $n\ge1$. The set $\mathrm{Fl}(V)$ of complete flags
$$0=V_0\subset V_1\subset\dots\subset V_n=V,\qquad \dim V_i=i,$$
carries the structure of a smooth projective classical $k$-variety: it is the closed subvariety of the product of Grassmannians $\prod_{i=1}^{n-1}\mathbf{Gr}_i(V)$ cut out by the incidence conditions $V_i\subseteq V_{i+1}$, embedded in a product of projective spaces by Plücker coordinates. The group $\mathrm{GL}(V)$ acts transitively on $\mathrm{Fl}(V)$, the stabilizer of a flag is a closed subgroup scheme of $\mathrm{GL}(V)$, and the stabilizer of a complete flag is solvable.

## Facts & Assumptions
**Given:** AC, an algebraically closed field $k$ and a $k$-vector space $V$ with $\dim_kV=n\ge1$.

[F1] For $0\le r\le n$ the Grassmannian $\operatorname{Gr}(r,V)$ is the parameter set of $r$-dimensional subspaces; the Plücker map $\operatorname{pl}:\operatorname{Gr}(r,V)\to\mathbf P(\Lambda^rV)$ is well defined and injective with closed image, cut out by the quadratic Plücker relations, so $\operatorname{Gr}(r,V)$ is a projective classical $k$-variety, smooth, irreducible of dimension $r(n-r)$, covered by the standard affine charts $p_I\ne0$ isomorphic to $\mathbf A^{r(n-r)}_k$. ([[def-grassmannian-subspaces]], [[def-plucker-coordinates]], [[lem-plucker-map-well-defined-injective]], [[thm-plucker-image-closed]], [[lem-grassmannian-standard-affine-charts]], [[cor-grassmannian-smooth-irreducible-dimension]])

[F2] Nonempty projective varieties have a product, realized as a Segre image, and that product is a projective variety. ([[cor-projective-variety-product-exists]], [[def-product-varieties-universal-property]])

[F3] Incidence is closed: for $1\le i\le n-1$ the set $\{(W,W')\in\operatorname{Gr}(i,V)\times\operatorname{Gr}(i+1,V):W\subseteq W'\}$ is a closed subvariety of the product. In a standard affine chart of $\operatorname{Gr}(i+1,V)$ in which $W'$ is spanned by the rows of a matrix whose first $i+1$ columns form the identity, a complement of the chart locus is given by the vanishing of the Plücker coordinate, and $W\subseteq W'$ is expressed by the linear equations saying that a spanning matrix of $W$ has zero entries in the coordinates complementary to $W'$; these equations are polynomial in the chart coordinates of $W$ and glue over the charts of $\operatorname{Gr}(i,V)$. (Milne, Proposition 7.30, printed p. 146. No local item isolates this incidence statement.)

[F4] A closed subvariety of a projective variety is projective, and a closed immersion is proper; a projective variety over $k$ is complete, i.e. proper over $\operatorname{Spec}k$. ([[lem-closed-immersion-proper]], [[thm-projective-space-proper-over-base]], [[cor-projective-variety-product-exists]])

[F5] The upper triangular group scheme $T_n=D_n\ltimes U_n$ is a closed subgroup scheme of $\mathrm{GL}_n$; $D_n$ is a diagonalizable commutative group scheme and $U_n$ has a central series with successive quotients isomorphic to $\mathbf G_a$. ([[lem-upper-unitriangular-central-series]], [[def-upper-unitriangular-group-scheme]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[lem-general-linear-group-scheme-and-its-coordinate-ring]])

[F6] A group scheme with a normal series whose successive quotients are commutative is solvable, by the definition of the derived series; explicitly $D^iG\subseteq G_i$ for the terms of any such series. ([[def-derived-subgroup-and-solvable-algebraic-group]])

[A1] AC is the axiom of [[def-axiom-of-choice]], explicitly assumed for the specified projective and properness suppliers.

## Proof

**Given:** AC, an algebraically closed field $k$ and a finite-dimensional $k$-vector space $V$ of dimension $n\ge1$.

1.1 For $n=1$, the empty product is the one-point variety, there is a unique flag, and all incidence conditions are vacuous. For $n>1$, by [F1] each $\operatorname{Gr}(i,V)$ is a projective variety, and by [F2] the product $P=\prod_{i=1}^{n-1}\operatorname{Gr}(i,V)$ is a projective variety. By [F3] each incidence condition $V_i\subseteq V_{i+1}$ defines a closed subvariety, so their intersection $\mathrm{Fl}(V)\subseteq P$ is a closed subvariety; by [F4] it is projective, hence complete, and its Plücker embedding in the product of projective spaces is the restriction of the Plücker embeddings of the factors. [F1, F2, F3, F4]

1.2 Fix a basis $e_1,\ldots,e_n$ and its opposite coordinate flag $E_j=\langle e_{n-j+1},\ldots,e_n\rangle$. The locus $U(E)$ of flags $W_\bullet$ satisfying $W_i\oplus E_{n-i}=V$ is open: projection of $W_i$ onto $\langle e_1,\ldots,e_i\rangle$ is invertible exactly when its leading Plücker coordinate is nonzero. Each such flag is uniquely $W_i=\langle l_1,\ldots,l_i\rangle$, where $l_j=e_j+\sum_{a>j}c_{aj}e_a$ are the columns of a lower unitriangular matrix. To construct $l_j$, use the unique vector of $W_j$ projecting to $e_j$ in the first $j$ coordinates; it has the displayed form. Nesting shows the earlier $l_i$ belong to $W_j$, and their distinct leading coordinates make them a basis. Uniqueness follows from that same projection. The coefficients $c_{aj}$ are regular on the standard Grassmannian charts of [F1], obtained by matrix inversion with the nonzero leading minors as denominators. Conversely every lower unitriangular matrix yields such a flag, with polynomial Plücker coordinates. Thus these mutually inverse regular maps identify $U(E)$ with $\mathbf A^{\binom n2}_k$. Every flag admits an adapted basis and is transverse to its reverse coordinate flag, so these affine-space charts cover the flag variety. These inversions and polynomial formulas also work over arbitrary $k$-algebras when the leading minors are units, so the charts parameterize locally direct-summand flags after base change. They give smoothness; for $n=1$ the chart is $\mathbf A^0_k$. [F1]

1.3 I claim that the stabilizer of a complete flag is solvable. Fix the flag $F$ given by $V_i=\langle e_1,\dots,e_i\rangle$ for a basis $e_1,\dots,e_n$. For every $k$-algebra $R$, an $R$-point $g\in\mathrm{GL}_n(R)$ stabilizes each $V_i\otimes_kR$ if and only if its matrix is upper triangular, since the image of $V_i\otimes R$ is spanned by the images of the first $i$ basis vectors; hence the stabilizer of $F$ is exactly the upper triangular closed subgroup scheme $T_n=D_n\ltimes U_n$ of [F5]. The series $T_n\supseteq U_n=U_n^{(0)}\supseteq U_n^{(1)}\supseteq\dots\supseteq U_n^{(m)}=1$ is a normal series whose successive quotients are, in order, $D_n$ (commutative, being diagonalizable) and the quotients $U_n^{(r)}/U_n^{(r+1)}\cong\mathbf G_a$ of the central series of [F5], which are commutative. By [F6] a group scheme with such a series is solvable, so the stabilizer of the complete flag $F$ is solvable. [F5, F6]

2.1 I claim that $\mathrm{GL}(V)$ acts transitively on $\mathrm{Fl}(V)$, compatibly with its action on the Grassmannians, and that the stabilizer of a flag is a closed subgroup scheme. Given two flags $V_\bullet$, $V'_\bullet$, choose bases $v_1,\dots,v_n$ and $v'_1,\dots,v'_n$ adapted to them; the linear map $gv_i=v'_i$ lies in $\mathrm{GL}(V)(k)$ and carries $V_i$ onto $V'_i$ for every $i$. The action of $\mathrm{GL}(V)$ on $P$ preserves the incidence conditions, so it restricts to a morphism $\mathrm{GL}(V)\times\mathrm{Fl}(V)\to\mathrm{Fl}(V)$, an action of the group scheme $\mathrm{GL}(V)$ by [F5]; the scheme-theoretic stabilizer of a point is then a closed subgroup scheme of $\mathrm{GL}(V)$. Since $\mathrm{GL}(V)(k)$ acts transitively, the stabilizer of any complete flag is a $\mathrm{GL}(V)(k)$-conjugate of the stabilizer $T_n$ of the standard flag, so by [step 1.3] the stabilizer of every complete flag is solvable. Moreover $\mathrm{GL}(V)$ is the determinant-open integral subscheme of matrix affine space. The closure of its flag orbit is irreducible and contains every closed point by transitivity, hence is all of $\mathrm{Fl}(V)$; thus the flag variety is irreducible. [F1, F3, F5, step 1.1, step 1.3]

3.1 Collecting: [step 1.1] gives the projective closed-subvariety model of $\mathrm{Fl}(V)$ via incidence, [step 1.2] its smoothness, [step 2.1] the transitive action and closed stabilizer subgroups, and [step 1.3] the solvability of the stabilizer of a complete flag. This proves the statement. [A1, step 1.1, step 1.2, step 2.1, step 1.3] ∎ 