---
id: thm-bezout-plane-curves
kind: theorem
title: Bezout's theorem for plane projective curves
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, def-projective-scheme-from-a-homogeneous-quotient, lem-bezout-global-length-degree-product, lem-bezout-no-common-component-finite-intersection, lem-global-intersection-length-sum-local-lengths]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) lecture notes, consolidated"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$ and $D=V(G)$ be plane projective curves of degrees $d,e\ge1$ over the algebraically closed field $k$, with no common component. Then

$$ \sum_{p\in C\cap D}I_p(C,D)=de,$$

a finite sum over the finitely many intersection points, each term the local intersection multiplicity of the two curves.

## Facts & Assumptions

**Given:** AC, plane projective curves $C=V(F)$, $D=V(G)$ of degrees $d,e\ge1$ over the algebraically closed field $k$ with no common component, and $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ [[def-projective-scheme-from-a-homogeneous-quotient]].

[F1] $C\cap D$ is nonempty and finite, and the points of $X$ correspond to the points of $C\cap D$ [[lem-bezout-no-common-component-finite-intersection]].

[F2] The total length of $X$ equals the degree product: $\operatorname{len}_k(X)=de$ [[lem-bezout-global-length-degree-product]].

[F3] The total length of $X$ equals the sum of the local intersection multiplicities: $\operatorname{len}_k(X)=\sum_{p\in C\cap D}I_p(C,D)$ [[lem-global-intersection-length-sum-local-lengths]], with every term finite by the no-common-component hypothesis [[def-local-intersection-multiplicity-plane-curves]].

## Proof

1.1 By [F2] the global length of $X$ is $\operatorname{len}_k(X)=de$; by [F3] the same global length equals the finite sum of the local multiplicities $\sum_{p\in C\cap D}I_p(C,D)$ over the finitely many intersection points, each summand finite. [F2, F3, given]

2.1 Equating the two computations of the same number $\operatorname{len}_k(X)$ gives $\sum_{p\in C\cap D}I_p(C,D)=de$, which is Bezout's identity; finiteness and nonemptiness of the intersection were recorded in [F1] and are used to make the sum meaningful. [step 1.1, F1, F2, F3] ∎ 