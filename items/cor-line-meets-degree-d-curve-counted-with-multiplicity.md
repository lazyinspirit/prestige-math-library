---
id: cor-line-meets-degree-d-curve-counted-with-multiplicity
kind: corollary
title: A line meets a degree-d curve in d points counted with multiplicity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-degree-projective-hypersurface, def-plane-projective-curve, def-projective-space-points, def-tangent-lines-plane-curve-point, lem-intersection-with-line-order-of-vanishing, lem-standard-projective-opens-are-affine-spaces, thm-bezout-plane-curves, thm-intersection-multiplicity-basic-properties, thm-polynomial-degree-of-a-product-over-a-domain]
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

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $L$ be a line and $C$ a plane projective curve of degree $d$ over the algebraically closed field $k$ with $L\not\subseteq C$. Then $L\cap C$ consists of at most $d$ points and

$$ \sum_{p\in L\cap C}I_p(C,L)=d .$$

Equivalently, if $F|_L$ is the restriction of a defining form of $C$ to $L\cong\mathbf P^1$, a nonzero binary form of degree $d$, then $I_p(C,L)$ is the multiplicity of the corresponding root of $F|_L$, and the roots counted with multiplicity exhaust $d$.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], a line $L=V(\ell)$ and a plane projective curve $C=V(F)$ of degree $d$ over the algebraically closed field $k$, with $L\not\subseteq C$.

[F1] $L$ is a plane projective curve of degree one, and $L,C$ have no common component; so Bezout applies to the pair and gives $\sum_{p\in L\cap C}I_p(C,L)=d\cdot1=d$, the sum being finite [[def-plane-projective-curve]], [[def-degree-projective-hypersurface]], [[thm-bezout-plane-curves]].

[F2] The restriction $F|_L$ is a nonzero binary form of degree $d$ on $L\cong\mathbf P^1$ (nonzero because $L\not\subseteq C$), and $I_p(C,L)$ equals the order of vanishing of $F|_L$ at the point corresponding to $p$ [[lem-intersection-with-line-order-of-vanishing]], [[def-projective-space-points]], [[lem-standard-projective-opens-are-affine-spaces]].

[F3] A nonzero binary form of degree $d$ over an algebraically closed field is a product of $d$ linear forms, so the multiplicities of its distinct roots sum to $d$ by additivity of degree over products [[def-tangent-lines-plane-curve-point]] (Remarks, binary-form factorisation); the homogeneous-product degree calculation there gives the count.

## Proof

1.1 By [F1] the intersection is finite and the multiplicities satisfy $\sum_{p\in L\cap C}I_p(C,L)=d$. Each summand is a positive integer precisely at the points of $L\cap C$ [[thm-intersection-multiplicity-basic-properties]], so the number of distinct contact points is at most $d$. [F1, given, algebra]

2.1 By [F2] each $I_p(C,L)$ equals the root multiplicity of $F|_L$ at the corresponding point, and by [F3] the distinct root multiplicities of the nonzero binary form $F|_L$ sum to $d$, in agreement with step 1.1. [F2, F3, given]

3.1 Combining steps 1.1 and 2.1 gives both the bound on the number of points and the displayed identity; the equivalent root-multiplicity formulation is exactly the identification of step 2.1. [step 1.1, step 2.1] ∎ 