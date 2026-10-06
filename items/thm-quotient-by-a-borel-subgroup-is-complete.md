---
id: thm-quotient-by-a-borel-subgroup-is-complete
kind: theorem
title: The quotient of a connected group by a Borel subgroup of maximal dimension is complete
dependency_level: 11
deps:
  - lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
  - def-affine-scheme
  - def-axiom-of-choice
  - def-borel-subgroup-and-maximal-torus
  - def-complete-variety
  - def-derived-subgroup-and-solvable-algebraic-group
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-proper-morphism
  - def-smooth-morphism-schemes
  - lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag
  - lem-closed-immersion-proper
  - lem-flag-variety-of-a-vector-space
  - lem-orbit-map-faithfully-flat-and-orbit-locally-closed
  - lem-orbit-map-fibres-and-stabilizer-dimension
  - lem-proper-stable-composition
  - prop-faithfully-flat-orbit-map-represents-coset-quotient
  - thm-homogeneous-space-for-smooth-affine-group
  - def-quotient-sheaf-and-representable-quotient
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 17.9(a) and its proof, printed pp. 354-355
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.1, Proposition 112, Theorem 113 and Definition 115, pp. 48-49, and Section 5.2, Theorem 122, pp. 49-51
---
## Statement

Assume the Axiom of Choice where the orbit-dimension supplier uses it. Let $k$ be an algebraically closed field, let $G$ be a smooth connected affine algebraic group over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]], [[def-group-scheme-over-a-field]]), and let $B\subseteq G$ be a Borel subgroup of largest possible dimension ([[def-borel-subgroup-and-maximal-torus]]). Then the homogeneous space $G/B$ is complete: the orbit of the flag $F$ of [[lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag]] is a closed subvariety of the (complete) flag variety $\mathrm{Fl}(V)$, and $G/B$ is isomorphic to that orbit.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected affine $k$-group $G$, and a closed connected solvable subgroup $B\subseteq G$ of the largest possible dimension.

[F1] There are a finite-dimensional rational representation $V$ of $G$ and a maximal flag $F$ in $V$ such that $B$ is exactly the scheme-theoretic stabilizer of $F$ in $G$. ([[lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag]])

[F2] $\mathrm{Fl}(V)$ is a smooth projective, hence complete, $k$-variety on which $\mathrm{GL}(V)$ acts transitively, and the scheme-theoretic stabilizer in $\mathrm{GL}(V)$ of a maximal flag is a closed subgroup scheme conjugate to $T_n=D_n\ltimes U_n$, hence solvable; a closed subgroup scheme of a solvable group scheme is solvable, since its derived series is contained term by term in that of the ambient group ([[def-derived-subgroup-and-solvable-algebraic-group]]). A closed subvariety of a complete variety is complete: a closed immersion is proper and properness is stable under composition. ([[lem-flag-variety-of-a-vector-space]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]], [[def-complete-variety]], [[def-proper-morphism]])

[F3] Assume AC. Let $G$ be smooth of finite type over the algebraically closed field $k$, acting on a classical variety $X$, and let $x\in X(k)$ be a closed point with orbit $O_x$ and scheme-theoretic stabilizer $G_x$. Then $\varrho_x:G\to O_x$ is faithfully flat and locally of finite presentation, $\dim O_x=\dim G-\dim G_x$, and every orbit of minimal dimension in $X$ is closed; moreover $O_x$ represents the fppf quotient $G/G_x$, and $G/G_x$ is representable by a separated $k$-scheme of finite type. ([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[lem-orbit-map-fibres-and-stabilizer-dimension]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[thm-homogeneous-space-for-smooth-affine-group]])

[F4] Two $k$-schemes that represent the same fppf quotient sheaf $G/H$ are canonically isomorphic, and a morphism of group schemes $H\to H'$ that is an isomorphism of the underlying quotient functors induces an isomorphism $G/H\cong G/H'$. ([[def-quotient-sheaf-and-representable-quotient]], [[thm-homogeneous-space-for-smooth-affine-group]])

[F5] Over a perfect field, for a closed subgroup scheme $H$ of a smooth algebraic group, $(H_{\mathrm{red}})^\circ$ is a smooth connected closed subgroup of the same dimension as $H$. ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected affine $k$-group $G$, and a smooth closed connected solvable subgroup $B$ of largest possible dimension among smooth connected solvable subgroup varieties.

1.1 By [F1] fix a finite-dimensional rational representation $V$ of $G$ and a maximal flag $F$ in $V$ with $G_F=B$ scheme-theoretically. By [F2] the flag variety $\mathrm{Fl}(V)$ is a complete variety over $k$ on which $G$ acts, and the orbit $O_F=G\cdot F$ is a locally closed subvariety with $\dim O_F=\dim G-\dim B$ by [F3]. [F1, F2, F3]

1.2 Let $K$ be the scheme kernel of the representation $G\to\mathrm{GL}(V)$. Every element of $K(R)$ fixes $F_R$ for every $k$-algebra $R$, so $K\subseteq G_F=B$ and $K$ is solvable by [F2]. For a complete flag $F'$, its stabilizer $H=G_{F'}$ is the inverse image of the triangular flag stabilizer $T_{F'}\subseteq\mathrm{GL}(V)$, rather than necessarily a subgroup of $T_{F'}$. The restricted representation $H\to T_{F'}$ has kernel $K$. Choose $a,b$ with $D^aT_{F'}=1$ and $D^bB=1$. Naturality of the commutator morphism and the minimality definition of the derived subgroup imply inductively that $D^aH$ maps trivially to $T_{F'}$, hence $D^aH\subseteq K\subseteq B$; then $D^{a+b}H\subseteq D^bB=1$. Thus $H$ is solvable. By [F5], $(H_{\mathrm{red}})^\circ$ is a smooth connected solvable subgroup variety of $G$ of dimension $\dim H$. The maximum-dimension hypothesis on $B$ gives $\dim H\le\dim B$. This does not require a faithful representation or smoothness of $H$. [F1, F2, F5, given]

2.1 Consequently, for every maximal flag $F'$ the orbit dimension satisfies $\dim O_{F'}=\dim G-\dim G_{F'}\ge\dim G-\dim B=\dim O_F$ by [F3]: among the orbits of maximal flags, $O_F$ has the minimal dimension. Since $\mathrm{Fl}(V)$ is a $G$-stable variety, [F3] shows that the minimal-dimensional orbit $O_F$ is closed in $\mathrm{Fl}(V)$; being a closed subvariety of the complete variety $\mathrm{Fl}(V)$, it is complete by [F2]. [F2, F3, step 1.1, step 1.2]

3.1 By [F3] the orbit map $\varrho_F:G\to O_F$ is faithfully flat and locally of finite presentation with $G_F=B$, so [F3] shows that $O_F$ represents the fppf quotient sheaf $G/B$; by [F4] and the representability statement of [F3] the canonical morphism $G/B\to O_F$ is an isomorphism. Hence $G/B\cong O_F$ is complete by [step 2.1]. [F3, F4, step 2.1]

4.1 Therefore $G/B$ is a complete finite-type $k$-scheme, isomorphic to the closed orbit $O_F$ of the maximal flag $F$ in the complete flag variety $\mathrm{Fl}(V)$, as claimed. [step 3.1] ∎ 