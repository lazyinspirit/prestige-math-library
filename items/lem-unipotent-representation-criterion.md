---
id: lem-unipotent-representation-criterion
kind: lemma
title: Unipotence is equivalent to unipotence of all finite-dimensional representations
dependency_level: 5
deps:
  - def-affine-scheme
  - def-group-scheme-over-a-field
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-unipotent-algebraic-group
  - def-upper-unitriangular-group-scheme
  - lem-representations-of-affine-group-schemes-are-comodules
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
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
      locator: Proposition 14.3 and Corollary 14.6, printed pp. 280-282
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.utoronto.ca/~herzig/lin-alg-groups13.pdf
      locator: Section 2.1, Proposition 39 and Corollaries 40-41, pp. 19-20
---
## Statement

Let $k$ be a field and let $G$ be an affine algebraic group over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]). Then $G$ is unipotent ([[def-unipotent-algebraic-group]]) if and only if every finite-dimensional rational representation of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) is unipotent. In particular, if $G$ is unipotent then every nonzero finite-dimensional rational representation admits a basis in which $G$ acts through the upper unitriangular group scheme $U_n$ of [[def-upper-unitriangular-group-scheme]], and the class of unipotent finite-dimensional representations is closed under subquotients, direct sums and tensor products.

## Facts & Assumptions

**Given:** A field $k$, an affine algebraic group $G$ over $k$, and a finite-dimensional rational representation $V$ of $G$.

[F1] $V$ is unipotent when it has a basis in which every $g$ acts by an upper triangular matrix with diagonal entries $1$, equivalently when $V$ has a complete $G$-stable flag with trivial successive quotients; $G$ is unipotent when every nonzero rational representation has a nonzero fixed vector, equivalently every simple representation is one-dimensional with trivial action, and it suffices to test finite-dimensional representations. ([[def-unipotent-algebraic-group]])

[F2] Every finite-dimensional representation of a group scheme over a field has a composition series: $0=V_0\subset V_1\subset\dots\subset V_m=V$ with each $V_i$ a $G$-stable subspace ([[def-linear-subspace]]) and each quotient $V_i/V_{i-1}$ simple, by finite-dimensionality of $V$. Every rational representation is a union of finite-dimensional subrepresentations. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[lem-representations-of-affine-group-schemes-are-comodules]])

[F3] If a finite-dimensional rational representation has upper unitriangular matrices in an adapted basis, its matrix morphism $G\to\mathrm{GL}_n$ factors through the closed subgroup $U_n$. This morphism $G\to U_n$ need not be faithful or a closed immersion; the assertion concerns this particular representation and does not say that arbitrary representations of a closed subgroup extend to $U_n$. ([[def-upper-unitriangular-group-scheme]])

## Proof

**Given:** A field $k$, an affine algebraic group $G$ over $k$, and a finite-dimensional representation $V$.

1.1 Suppose $G$ is unipotent. If $V\ne0$, take a composition series $0=V_0\subset\dots\subset V_m=V$ as in [F2]. Each simple quotient $V_i/V_{i-1}$ is a simple representation of the unipotent group $G$, hence one-dimensional with trivial action by [F1]; reading the flags in a basis adapted to it shows that $V_i$ is obtained from $V_{i-1}$ by adjoining a trivial line, and induction on $i$ puts $V$ in the unipotent form of [F1]. The first step $V_1$ is a nonzero fixed vector in $V$, so every nonzero $V$ has one. [F1, F2]

1.2 Conversely suppose every finite-dimensional representation of $G$ is unipotent. Then every simple finite-dimensional representation $S$ is unipotent, and a unipotent simple representation has a nonzero fixed vector (the first step of its flag), so $S$ is one-dimensional with trivial $G$-action; since every rational representation is a union of finite-dimensional subrepresentations by [F2], every nonzero rational representation contains such a simple subrepresentation, hence a nonzero fixed vector. By [F1], $G$ is unipotent. [F1, F2]

2.1 For the closure properties, let $V$ be a unipotent finite-dimensional representation with a flag $V=V_m\supseteq\dots\supseteq V_0=0$ with trivial successive quotients. If $W\subseteq V$ is a $G$-stable subspace, the subspaces $W\cap V_i$ form a flag on $W$ with successive quotients subquotients of the trivial modules $V_i/V_{i-1}$, hence trivial, so $W$ is unipotent; the images of the $V_i$ in $V/W$ form a flag on $V/W$ with successive quotients quotients of the $V_i/V_{i-1}$, hence again trivial. For direct sums, concatenating flags adapted to the two summands gives a flag on $V\oplus W$ with trivial successive quotients; for the tensor product, if $g$ acts on $V$ and $W$ by unipotent matrices, then in the tensor basis $g$ acts by the Kronecker product of two upper unitriangular matrices, which is upper unitriangular. Finally, in the basis of [F1] the matrix morphism of this representation factors as $G\to U_n\to\mathrm{GL}_n$ by [F3], giving its asserted upper-unitriangular form without any faithfulness or subgroup-representation extension claim. [F1, F3, step 1.1] ∎ 