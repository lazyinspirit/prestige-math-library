---
id: thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism
kind: theorem
title: "Thom's theorem: Stiefel-Whitney numbers detect unoriented bordism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem, thm-characteristic-numbers-are-cobordism-invariants, cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds, def-thom-prespectrum-of-the-universal-real-and-oriented-bundles, lem-stable-thom-cohomology-is-degreewise-eventually-constant, def-finite-thom-classifying-detector-map, thm-stable-unoriented-thom-homotopy-is-injectively-detected, def-stiefel-whitney-number-of-a-closed-manifold, def-null-cobordant-closed-manifold, def-unoriented-and-oriented-bordism-groups, thm-disjoint-union-makes-bordism-classes-abelian-groups, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 13, printed pp. 24-26 (structure of the unoriented cobordism ring and the s-number triangularity); Sections 6-12, printed pp. 11-24 (Hopf algebras, partitions, Steenrod algebra, cohomology of Grassmann manifolds, cohomology of $TBO_r$, freeness over $A_2$); Section 17, printed pp. 31-32 (cohomology of $BO_r$ away from 2)"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 18, printed pp. 205-217: Thom spaces and transversality; Section 4, Theorem 4.10, printed p. 53: the Stiefel-Whitney-number converse, with its proof referred to Stong."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 1.40 and Theorem 1.37, printed pp. 13-14, and Lecture 10, printed pp. 86-91"
dependency_level: 15
---

## Statement

Assume AC. Let $M$ and $N$ be closed smooth $n$-manifolds. Then $M$ and $N$ are
unoriented-cobordant if and only if all of their Stiefel-Whitney numbers agree;
equivalently, $M$ is null-cobordant if and only if every Stiefel-Whitney number
of $M$ vanishes. Consequently the map $\Omega_n^{O}\to\prod_I\mathbb F_2$,
$[M]\mapsto (w^{I}[M])_I$, is injective, and the unoriented bordism ring is
detected by the Stiefel-Whitney numbers. (The 'only if' direction is the
invariance theorem; the content is the converse, due to Thom.)

## Facts & Assumptions

**Given:** Closed smooth $n$-manifolds $M,N$, the unoriented bordism classes of [[def-unoriented-and-oriented-bordism-groups]], the Stiefel-Whitney numbers of [[def-stiefel-whitney-number-of-a-closed-manifold]], and the stable Thom prespectrum data of [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]].

[F1] [[thm-characteristic-numbers-are-cobordism-invariants]] and [[cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds]]: unoriented-cobordant closed $n$-manifolds have equal Stiefel-Whitney numbers, and a null-cobordant closed manifold has all of them zero; [[def-null-cobordant-closed-manifold]] identifies null-cobordism with the zero class of $\Omega_n^{O}$.

[F2] [[lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem]] assigns $\alpha(M)\in\pi_n(M\mathrm O)$ with $M$ null-cobordant if and only if $\alpha(M)=0$, expresses the Stiefel-Whitney numbers as the evaluations of the universal classes $u_r\smile\overline{w^I}(\gamma_r)$ on $\alpha(M)$, and records that the degreewise inverse substitution is involutive.

[F3] [[lem-stable-thom-cohomology-is-degreewise-eventually-constant]] identifies $\widehat H^n(TO;\mathbb F_2)$ with the homogeneous degree-$n$ polynomials in the universal normal Stiefel-Whitney classes times the Thom class, and [[def-finite-thom-classifying-detector-map]] chooses the finite detector coordinates $D_{r,n}$ from this space, so each coordinate is a finite linear combination of normal-class monomials times $u_r$.

[F4] [[thm-stable-unoriented-thom-homotopy-is-injectively-detected]]: for each $n$ the detector map from $\pi_n(M\mathrm O)$ to the finite product of coordinate groups is injective on the cofinal tail $r\ge n+2$, with coordinates commuting with the fixed-coordinate structure maps. [[thm-disjoint-union-makes-bordism-classes-abelian-groups]] gives $[N]=-[N]$ in $\Omega_n^{O}$ and the componentwise additivity of the numbers, and [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

## Proof

1.1 The only-if direction. If $M$ and $N$ are unoriented-cobordant then all their Stiefel-Whitney numbers agree by [F1], and a null-cobordant manifold has all numbers zero by [F1]; this is the easy half of both formulations. [F1]

1.2 The converse: vanishing numbers force the Thom class to be zero. Suppose every Stiefel-Whitney number of $M$ vanishes. By [F2] the Pontryagin-Thom class $\alpha(M)\in\pi_n(M\mathrm O)$ determines null-cobordism, and for a large representative rank $r$ the numbers are the evaluations $w^I[M]=\langle u_r\smile\overline{w^I}(\gamma_r),\alpha(M)\rangle$. By [F3] every detector coordinate $D_{r,n}$ in degree $n$ is a finite linear combination of normal-class monomials $u_r\smile a(\gamma_r)$ of degree $n$, and each such normal monomial is, by the degreewise inverse substitution of [F2] (which is involutive), a finite linear combination of the tangent-number functionals $u_r\smile\overline{w^I}(\gamma_r)$. Hence every detector coordinate evaluates to zero on $\alpha(M)$, since each of those functionals evaluates to a Stiefel-Whitney number and all of them vanish by hypothesis. [F2, F3]

2.1 Zero detector implies null-cobordism. The detector coordinates are compatible with the fixed-coordinate structure maps and injective on the cofinal tail $r\ge n+2$ by [F4]. Since step 1.2 shows that all coordinates of $\alpha(M)$ vanish at a representative rank in that tail, injectivity gives $\alpha(M)=0$; by [F2] the manifold $M$ is null-cobordant. The argument uses the batch-30 Steenrod/Thom module-coalgebra and free-generator construction, the strict mod-two comparison, the finite-generation comparison through the universal-coefficient cone, the relative Hurewicz range, and the proved suspension compatibility through their supplier chain; no unstable dimension count or integral/mod-two identification replaces those inputs. [F2, F3, F4, step 1.2]

3.1 Equality of numbers and injectivity. For closed $n$-manifolds $M,N$, the numbers of the disjoint union satisfy $w^{I}[M\sqcup N]=w^{I}[M]+w^{I}[N]$ in $\mathbb F_2$ by the componentwise definition [F1], and $[N]=-[N]$ in the unoriented bordism group [F4]. Hence all numbers of $M$ and $N$ agree if and only if all numbers of $M\sqcup N$ vanish, if and only if $M\sqcup N$ is null-cobordant by step 2.1, if and only if $[M]+[N]=0$, if and only if $[M]=[N]$. Therefore the coordinate map $\Omega_n^{O}\to\prod_I\mathbb F_2$ is well defined and injective in every degree, so the unoriented bordism ring is detected by the Stiefel-Whitney numbers; no polynomial presentation of that ring is asserted. [F1, F2, F4, step 2.1]

4.1 Degree zero and empty case. For $n=0$ the sole monomial is the empty product, whose number is the parity of the cardinality by [F1], the stable group is detected in degree zero through $\widehat H^0=\mathbb F_2U$ and ranks $r\ge2$ by [F3] and [F4], and the same argument gives that a finite set is null-cobordant exactly when its cardinality is even. The empty manifold has the zero class in $\Omega_0^{O}$ and all numbers zero, consistent with the injectivity of step 3.1. All rank thresholds use the cofinal tail $r\ge n+2$ of [F4] and the fixed-coordinate structure maps; no further choice is made. [F1, F3, F4, step 3.1] ∎
