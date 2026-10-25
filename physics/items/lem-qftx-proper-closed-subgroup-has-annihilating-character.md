---
id: lem-qftx-proper-closed-subgroup-has-annihilating-character
kind: lemma
title: A proper closed subgroup of a torus has a nonzero annihilating character
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-countable-choice
  - thm-quotient-manifold-by-a-closed-lie-subgroup
  - thm-constant-rank-theorem-for-manifolds
  - thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero
  - thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields
  - prop-exponential-scales-one-parameter-subgroups
  - def-one-parameter-subgroup-of-a-lie-group
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-compactness-under-continuous-maps
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-quotient-manifold-by-a-closed-lie-subgroup: mathematical-premise
  thm-constant-rank-theorem-for-manifolds: mathematical-premise
  thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero: mathematical-premise
  thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields: mathematical-premise
  prop-exponential-scales-one-parameter-subgroups: mathematical-premise
  def-one-parameter-subgroup-of-a-lie-group: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
justified_by: []
axiom_strength: ZF + AC_omega
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, isotropy-subgroup support, printed pp. 6–8.
    - title: Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey, and Theo van den Hurk, Hamiltonian Group Actions and Equivariant Cohomology
      url: https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf
      locator: Section 9.10, orbit-isotropy localization mechanism, PDF pp. 86–87.
landmark: false
---

## Statement

Assume countable choice. Let $T=(\mathbb R/\mathbb Z)^r$ with $r\geq1$, and let $H\subsetneq T$ be a closed subgroup. A character means a smooth group homomorphism from $T$ to the multiplicative unit circle $S^1=\{z\in\mathbb C:|z|=1\}$. Then there is a nontrivial character $\chi:T\to S^1$ whose restriction to all of $H$ is the trivial character.

## Statement references

[Proper isotropy character in the localization argument] [Atiyah–Bott, Section 3, printed pp. 6–8](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Closed-subgroup quotient and exponential construction] [Dwivedi et al., Section 9.10, PDF pp. 86–87](https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf)

## Facts & Assumptions

**Given:** Countable choice, the product torus $T$, and a proper closed subgroup $H$.

[A1] Countable choice supplies the embedded Lie subgroup and smooth quotient structures used here. [[def-countable-choice]]

[F1] For a closed subgroup $H$ of a finite-dimensional Lie group $T$, the quotient $Q=T/H$ is a smooth manifold, the quotient map is a surjective submersion, and its dimension is $\dim T-\dim H$. [[thm-quotient-manifold-by-a-closed-lie-subgroup]]

[F2] The exponential map of a finite-dimensional Lie group is smooth, has identity differential at zero, and is obtained from its one-parameter subgroups. [[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]] [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]] [[prop-exponential-scales-one-parameter-subgroups]] [[def-one-parameter-subgroup-of-a-lie-group]]

[F3] A smooth map with invertible differential is a diffeomorphism on some open neighborhoods. [[thm-smooth-inverse-function-theorem-on-manifolds]]

[F4] A continuous image of a compact space is compact. [[thm-compactness-under-continuous-maps]]

[F5] A smooth submersion has local coordinate form $(u,v)\mapsto u$ and hence smooth local sections, obtained by fixing $v$. [[thm-constant-rank-theorem-for-manifolds]]

## Proof

**Given:** The data in the statement.

1.1 Since $T$ is compact and connected, $Q=T/H$ is compact and connected, and [F1] makes $\pi:T\to Q$ a smooth surjective submersion. As $T$ is abelian, $H$ is normal: the operations $(aH)(bH)=(ab)H$ and $(aH)^{-1}=a^{-1}H$ are independent of representatives and give an abelian group with identity $H$. By [F5], each point of $Q$ has an open neighborhood $U$ and a smooth section $s_U:U\to T$ with $\pi s_U=\operatorname{id}_U$. On $U\times V$, multiplication is $(x,y)\mapsto\pi(s_U(x)s_V(y))$; on $U$, inversion is $x\mapsto\pi(s_U(x)^{-1})$. These formulas prove both operations smooth, so $Q$ is a Lie group. It is not a point because $H\subsetneq T$; a zero-dimensional manifold is discrete, and connectedness would then make it a point. Hence $d=\dim Q\geq1$. [A1, F1, F4, F5, given, algebra]

2.1 Let $\mathfrak q=T_eQ$. The exponential map $\exp_Q:\mathfrak q\to Q$ has differential the identity at zero by [F2], so [F3] makes it a diffeomorphism from a neighborhood of zero onto a neighborhood of the identity. Since $Q$ is abelian, $\exp_Q(X+Y)=\exp_Q(X)\exp_Q(Y)$: the product of the one-parameter subgroups with velocities $X,Y$ is a one-parameter subgroup with velocity $X+Y$, and uniqueness of integral curves gives the identity. Thus $\exp_Q(\mathfrak q)$ is a subgroup containing an open identity neighborhood, hence is open. Its other cosets are open, so its complement is open; connectedness of $Q$ gives $\exp_Q(\mathfrak q)=Q$. The kernel $\Lambda=\ker(\exp_Q)$ is discrete because the exponential is injective near zero. Translating its local inverse shows that $\exp_Q$ is open, so it induces a homeomorphism $\mathfrak q/\Lambda\cong Q$. [F2, F3, step 1.1]

3.1 The linear span of $\Lambda$ is all of $\mathfrak q$. Otherwise the quotient linear map $\mathfrak q\to\mathfrak q/\operatorname{span}_{\mathbb R}\Lambda$ factors through the compact space $Q=\mathfrak q/\Lambda$ and is onto a nonzero real vector space; that is impossible by [F4]. A discrete additive subgroup of a finite-dimensional real vector space that spans it is a lattice. To see this, a discrete subgroup has a neighborhood of zero containing no other subgroup point, so distinct subgroup points are uniformly separated and every bounded subset of it is finite. Choose a shortest nonzero vector $\lambda_1$; the intersection with $\mathbb R\lambda_1$ is $\mathbb Z\lambda_1$, since any smaller positive step would contradict shortestness. If projections of subgroup points to $\lambda_1^\perp$ approach zero, subtract nearest integer multiples of $\lambda_1$; the resulting points lie in a bounded set, hence in a finite set, so zero is isolated in the projected subgroup. The projection remains discrete and spans $\lambda_1^\perp$. Induction on $d$ gives a lattice basis for the projection; lifting that finite basis and adjoining $\lambda_1$ gives a $\mathbb Z$-basis $\lambda_1,\ldots,\lambda_d$ of $\Lambda$ that is also a real basis of $\mathfrak q$. [F4, step 2.1, algebra]

4.1 Define the nonzero real linear functional $\ell:\mathfrak q\to\mathbb R$ by $\ell(\lambda_1)=1$ and $\ell(\lambda_j)=0$ for $2\leq j\leq d$. Then $\ell(\Lambda)\subseteq\mathbb Z$. Define $\chi_Q(\exp_Q X):=\exp(2\pi i\,\ell(X))$. This is well defined because two logarithms differ by an element of $\Lambda$. It is a homomorphism by additivity of both the exponential map on the abelian Lie algebra and $\ell$; it is smooth because the exponential map is a local diffeomorphism near zero and its translates are local diffeomorphisms everywhere. It is nontrivial: $\exp_Q(\lambda_1/2)\ne e$, while $\chi_Q(\exp_Q(\lambda_1/2))=-1$. [F2, step 2.1, step 3.1, algebra]

5.1 Let $\pi:T\to Q$ be the quotient homomorphism and set $\chi=\chi_Q\circ\pi$. Surjectivity of $\pi$ makes $\chi$ nontrivial, while $\pi(H)=e$ makes $\chi|_H=1$. This proves the assertion. [F1, step 4.1, construct] ∎
