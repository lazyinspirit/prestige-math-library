---
id: thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field
kind: theorem
title: Conjugacy of Borel subgroups and of maximal tori over an algebraically closed field
dependency_level: 13
deps:
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - def-axiom-of-choice
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - def-borel-subgroup-and-maximal-torus
  - def-complete-variety
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-proper-morphism
  - def-smooth-morphism-schemes
  - lem-orbit-map-faithfully-flat-and-orbit-locally-closed
  - prop-faithfully-flat-orbit-map-represents-coset-quotient
  - thm-borel-fixed-point-for-complete-schemes
  - thm-homogeneous-space-for-smooth-affine-group
  - thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate
  - thm-quotient-by-a-borel-subgroup-is-complete
  - def-group-of-multiplicative-type-and-torus
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
      locator: Theorems 17.9-17.10 and Proposition 17.13, printed pp. 354-356
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Theorem 122(ii), printed pp. 50-51; Theorem 136, printed p. 57; Proposition 149, printed p. 63 (Borel pairs)
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Theorem 18.12, printed pp. 315-316; Theorem 18.14 and Proposition 18.17, printed p. 316
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a connected affine group variety over $k$, i.e. a smooth connected affine algebraic group of finite type over $k$ ([[def-smooth-morphism-schemes]], [[def-group-scheme-over-a-field]]). Then: (a) for every Borel subgroup $B\subseteq G$ the quotient $G/B$ is complete; (b) any two Borel subgroups of $G$ are conjugate by an element of $G(k)$; (c) any two maximal tori of $G$ are conjugate by an element of $G(k)$; (d) any two Borel pairs are conjugate. The assertions here are made under the stated smooth connected and algebraically closed hypotheses; no necessity claim for each hypothesis is made.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, and a smooth connected affine algebraic $k$-group $G$.

[F1] Borel subgroups are smooth connected solvable subgroup varieties, geometrically maximal among such subgroups. Over algebraically closed $k$, choosing a smooth connected solvable subgroup of largest dimension gives a Borel: a strict inclusion of smooth connected subgroup varieties increases dimension, since they are irreducible. Conjugation preserves this class. A closed subscheme of a smooth finite-type scheme containing all its $k$-points is the whole scheme, by schematic density. ([[def-borel-subgroup-and-maximal-torus]], [[def-smooth-morphism-schemes]], [[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F2] Assume AC. For a Borel subgroup $B_0$ of largest possible dimension, the quotient $G/B_0$ is a nonempty complete finite-type $k$-scheme, and the fppf quotient $G/B$ is representable by a separated finite-type $k$-scheme for every closed subgroup scheme $B$, with quotient morphism faithfully flat and locally of finite presentation; the left translation action of $G$ on $G/B$ is rational and restricts to an action of any closed subgroup. Every $k$-point of $G/B$ lifts to $G(k)$: its fibre is nonempty and finite type by faithful flatness and finite presentation; a maximal ideal in a nonempty affine chart exists under AC and has residue field $k$ by the weak Nullstellensatz. ([[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-homogeneous-space-for-smooth-affine-group]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

[F3] Assume AC. Let $H$ be a smooth connected solvable affine algebraic group over $k$ and let $X$ be a nonempty complete finite-type $k$-scheme with a rational action of $H$. Then there is a point $x\in X(k)$ fixed by $H(k)$. ([[thm-borel-fixed-point-for-complete-schemes]])

[F4] Assume AC. Let $H$ be a smooth connected solvable affine algebraic group over $k$ and let $T\subseteq H$ be a maximal torus. Then $H=H_u\rtimes T$, and any two maximal tori of $H$ are conjugate by an element of $H(k)$; equivalently every closed subgroup of multiplicative type of $H$ is conjugate into $T$. ([[thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate]])

[F5] A maximal torus $T$ of $G$ is a smooth connected commutative subgroup variety. Among smooth connected solvable subgroup varieties containing $T$, choose one of largest dimension. No strictly larger smooth connected solvable subgroup can contain it, so it is a Borel. Thus each maximal torus of $G$ is contained in a Borel; no assertion is made that a maximal torus of an arbitrary solvable subgroup is maximal in $G$. ([[def-borel-subgroup-and-maximal-torus]], [[def-group-of-multiplicative-type-and-torus]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a smooth connected affine $k$-group $G$.

1.1 By [F1] choose a Borel subgroup $B_0$ of largest possible dimension; [F2] makes $G/B_0$ a nonempty complete finite-type $k$-scheme with a rational $G$-action. This proves (a) in the case $B=B_0$. [F1, F2]

1.2 Let $B$ and $B'$ be Borel subgroups with $B$ of largest possible dimension. By [F1] and [F3] the smooth connected solvable group $B'$ acts on the complete variety $G/B$, so there is a fixed point in $(G/B)(k)$. Its fibre under the faithfully flat finite-type map $G\to G/B$ is nonempty and has a $k$-point by the weak Nullstellensatz (choose a maximal ideal in a nonempty affine chart). Thus the fixed point is represented by $gB$ for some $g\in G(k)$, with $B'gB=gB$; the closed subgroup $B'\cap gBg^{-1}$ contains every point of $B'(k)$, so smoothness and schematic density [F1] give $B'\subseteq gBg^{-1}$ scheme-theoretically, and $gBg^{-1}$ is a connected solvable closed subgroup scheme by [F1]. Since $B'$ is a Borel subgroup, maximality gives $B'=gBg^{-1}$. [F1, F2, F3]

2.1 In particular every Borel subgroup is conjugate to the largest-dimensional one, so all Borel subgroups have the same dimension $\dim B_0$ and every Borel subgroup is of largest possible dimension. Hence (a) holds for every Borel subgroup: $G/B\cong G/B_0$ as $k$-schemes (conjugate subgroups give isomorphic quotients), so $G/B$ is complete. This proves (a) and (b). [F1, F2, step 1.1, step 1.2]

3.1 For (c), let $T,T'$ be maximal tori of $G$. By [F5] there are Borel subgroups $B\supseteq T$ and $B'\supseteq T'$; by (b) there is $g\in G(k)$ with $gB'g^{-1}=B$, so $gT'g^{-1}\subseteq B$. Both $T$ and $gT'g^{-1}$ are maximal tori of the smooth connected solvable group $B$: they are tori of $B$, and a torus of $G$ strictly containing one of them would strictly contain a maximal torus of $G$. By [F4] applied to $B$ there is $b\in B(k)$ with $bgT'g^{-1}b^{-1}=T$, so $T$ and $T'$ are conjugate by $bg\in G(k)$. [F4, F5, step 2.1]

4.1 For (d), let $(B,T)$ and $(B',T')$ be Borel pairs. By (b) choose $g\in G(k)$ with $gB'g^{-1}=B$; then $gT'g^{-1}$ and $T$ are maximal tori of the smooth connected solvable group $B$, by the same maximality argument as in [step 3.1], so by [F4] there is $b\in B(k)$ with $bgT'g^{-1}b^{-1}=T$. Then $(bg)(B',T')(bg)^{-1}=(B,T)$, so any two Borel pairs are conjugate. [F4, step 2.1, step 3.1]

5.1 Therefore (a) holds for every Borel subgroup, Borel subgroups are pairwise conjugate, maximal tori are pairwise conjugate, and Borel pairs are pairwise conjugate, as claimed. [step 2.1, step 3.1, step 4.1] ∎ 