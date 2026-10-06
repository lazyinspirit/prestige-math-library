---
id: lem-bezout-no-common-component-finite-intersection
kind: lemma
title: Curves without a common component meet finitely often
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-factor-theorem-over-a-commutative-ring, cor-no-common-component-projective-plane-intersection-is-zero-dimensional, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-algebraically-closed-field, def-axiom-of-choice, def-field, def-morphism-to-projective-space-homogeneous-coordinates, def-plane-projective-curve, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, def-projective-scheme-from-a-homogeneous-quotient, def-projective-space-points, def-resultant-homogeneous-polynomials, lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring, lem-projective-coordinate-morphisms-well-defined, lem-projective-standard-chart-prime-and-local-ring-correspondence, lem-resultant-detects-common-projective-point, lem-zero-dimensional-projective-scheme-has-finite-local-charts, thm-polynomial-degree-of-a-product-over-a-domain, thm-root-bound-for-polynomials-over-a-domain]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$ and $D=V(G)$ be plane projective curves over the algebraically closed field $k$ with no common component. Then $C\cap D$ is nonempty and finite: after a projective change of coordinates putting $[0:0:1]$ on neither curve, the intersection points project onto the finitely many zeros of the nonzero resultant $\operatorname{Res}_{x_2}(F,G)$, with finitely many points over each zero. Equivalently, it consists of the finitely many points corresponding to the points of the zero-dimensional projective scheme $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ [[def-projective-scheme-from-a-homogeneous-quotient]].

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, plane projective curves $C=V(F)$, $D=V(G)$ of degrees $d,e\ge1$ with no common component.

[F1] $k$ is infinite: if $k=\{a_1,\dots,a_q\}$ were finite, then $\prod_{i=1}^q(T-a_i)+1$ would be a nonconstant polynomial over $k$ with no root in $k$ [[def-algebraically-closed-field]], [[def-polynomial-evaluation-and-root]], [[def-field]], [[thm-polynomial-degree-of-a-product-over-a-domain]].

[F2] If a polynomial over $k$ in several variables vanishes at every tuple of elements of the infinite subring $k$, then it is the zero polynomial [[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]].

[F3] A projective change of coordinates is given by a linear isomorphism of $k^3$ defined up to scalars, it maps curves to curves and intersections to intersections, and it is a morphism of projective space with homogeneous coordinates [[def-morphism-to-projective-space-homogeneous-coordinates]], [[lem-projective-coordinate-morphisms-well-defined]], [[def-projective-space-points]].

[F4] For nonzero forms of positive degrees $d,e$ with no common factor and with $[0:0:1]$ on neither curve, the resultant $\operatorname{Res}_{x_2}(F,G)$ is a nonzero form of degree $de$, and its value at $(a,b)\ne(0,0)$ vanishes exactly when $[a:b:c]\in C\cap D$ for some $c$; over each zero of the resultant the fibre of common points has at most $\min(d,e)$ elements [[lem-resultant-detects-common-projective-point]], [[def-resultant-homogeneous-polynomials]].

[F5] For nonzero plane forms with no common nonconstant factor, $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ is nonempty and zero-dimensional in the chartwise sense [[cor-no-common-component-projective-plane-intersection-is-zero-dimensional]]; then $X$ has finitely many points, every prime of each chart ring is maximal, and the points of $X$ correspond to the maximal ideals of the chart rings [[lem-zero-dimensional-projective-scheme-has-finite-local-charts]], [[lem-projective-standard-chart-prime-and-local-ring-correspondence]]. Over the algebraically closed field $k$, maximal ideals of the chart rings are evaluation ideals at points of the chart [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]].

[F6] AC is assumed; it enters through the projective-scheme and Nullstellensatz suppliers above [[def-axiom-of-choice]].

[F7] Every nonconstant polynomial in one variable over $k$ has a root in $k$ [[def-algebraically-closed-field]], and a nonzero polynomial of degree $N$ has at most $N$ roots [[thm-root-bound-for-polynomials-over-a-domain]].

## Proof

1.1 The product $FG$ is a nonzero polynomial in three variables over the infinite domain $k$, so it does not vanish at every triple of elements of $k$: there is $a\in k^3\setminus\{0\}$ with $F(a)G(a)\ne0$. Choosing a projective change of coordinates $A$ with $A[0:0:1]=[a]$ and replacing $C,D$ by $A^{-1}(C),A^{-1}(D)$, whose intersection is the inverse image of the original one, we may assume $[0:0:1]$ lies on neither curve. The hypothesis of no common component is preserved, so the new defining forms are still nonzero of positive degrees $d,e$ with no common factor. [F1, F2, F3, given, construct]

1.2 Any nonzero binary form $\rho\in k[x_0,x_1]$ of degree $N\ge1$ has a zero in $\mathbf P^1$: writing $\rho=x_0^{s}\rho_1$ with $s$ maximal and $x_0\nmid\rho_1$, the dehomogenisation $\rho_1(1,T)$ is a nonzero polynomial of degree $N-s$; if $N-s\ge1$ it has a root $\lambda\in k$ by algebraic closure and $[1:\lambda]$ is a zero of $\rho$, while if $N-s=0$ the point $[0:1]$ is a zero. [F7, given, algebra]

2.1 In the coordinates of step 1.1 the forms $F,G$ satisfy the hypotheses of the resultant detection: $\operatorname{Res}_{x_2}(F,G)$ is a nonzero form of degree $de$, and it vanishes at $(a,b)\ne(0,0)$ exactly when some common point $[a:b:c]$ of $C$ and $D$ exists; over each projective zero of the resultant the fibre of intersection points has at most $\min(d,e)$ elements. [step 1.1, F4]

3.1 The zeros of the nonzero form $\operatorname{Res}_{x_2}(F,G)$ of degree $de$ form a finite nonempty subset $Z\subseteq\mathbf P^1$: finite because writing $\rho=\operatorname{Res}_{x_2}(F,G)=x_0^{s}\rho_1$ with $x_0\nmid\rho_1$, the only possible zero with $x_0=0$ is $[0:1]$, while the zeros with $x_0\ne0$ are the at most $de$ roots of the nonzero polynomial $\rho_1(1,T)$; and nonempty by step 1.2. By step 2.1 the projection $C\cap D\to\mathbf P^1$ has image exactly $Z$ and finite fibres of at most $\min(d,e)$ points, so $C\cap D$ is finite and nonempty, of at most $de\cdot\min(d,e)$ points [step 1.2, step 2.1]. For the scheme description, $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ is nonempty and zero-dimensional, hence has finitely many points which are the maximal ideals of the standard charts; over the algebraically closed field $k$ these maximal ideals are exactly the evaluation ideals at the points of the corresponding chart lying on both dehomogenised curves, so the points of $X$ correspond bijectively to the points of $C\cap D$ [F5, step 2.1]. This gives both the finite projection description and the equivalent scheme-theoretic description. [step 2.1, F5, given, F6] ∎ 