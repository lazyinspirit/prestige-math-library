---
id: lem-projective-coordinate-invariance-bezout-sum
kind: lemma
title: Invariance of the Bezout sum under projective coordinate changes
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-morphism-to-projective-space-homogeneous-coordinates, def-plane-projective-curve, lem-intersection-multiplicity-independent-equations-coordinates, lem-projective-coordinate-morphisms-well-defined, thm-bezout-plane-curves]
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

Let $C,D$ be plane projective curves of degrees $d,e$ over the algebraically closed field $k$ with no common component, and let $A\in\mathrm{PGL}_3(k)$ be a projective change of coordinates. Then $A(C)$ and $A(D)$ are plane curves of the same degrees with no common component and

$$ \sum_{p\in C\cap D}I_p(C,D)=\sum_{q\in A(C)\cap A(D)}I_q(A(C),A(D)).$$

More precisely $I_p(C,D)=I_{A(p)}(A(C),A(D))$ for every $p$, so any convenient coordinate system may be used to compute the sum.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], plane projective curves $C=V(F)$ of degree $d$ and $D=V(G)$ of degree $e$ over the algebraically closed field $k$ with no common component, and a projective change of coordinates $A\in\mathrm{PGL}_3(k)$.

[F1] $A$ is an automorphism of $\mathbf P^2$: it is a morphism of projective spaces given by homogeneous coordinates of degree one, with inverse of the same kind, and it carries closed sets to closed sets and curves of degree $f$ to curves of degree $f$ [[def-morphism-to-projective-space-homogeneous-coordinates]], [[lem-projective-coordinate-morphisms-well-defined]], [[def-plane-projective-curve]]. It maps $C\cap D$ bijectively onto $A(C)\cap A(D)$, and a common component to a common component, so $A(C),A(D)$ still have no common component.

[F2] Local intersection multiplicities transform by the induced isomorphism of local rings: $I_p(C,D)=I_{A(p)}(A(C),A(D))$ for every $p\in C\cap D$, and the values are finite exactly together [[lem-intersection-multiplicity-independent-equations-coordinates]].

## Proof

1.1 By [F1] the curves $A(C),A(D)$ have the same degrees $d,e$ and no common component, and $p\mapsto A(p)$ is a bijection $C\cap D\to A(C)\cap A(D)$; the intersection sets are finite by the no-common-component hypothesis. [F1, given]

1.2 For every $p\in C\cap D$ the local multiplicities agree, $I_p(C,D)=I_{A(p)}(A(C),A(D))$, by [F2]. [F2, given]

2.1 Summing the equality of step 1.2 over the finite set $C\cap D$ and using the bijection of step 1.1 gives $$ \sum_{p\in C\cap D}I_p(C,D)=\sum_{q\in A(C)\cap A(D)}I_q(A(C),A(D)),$$ so the Bezout sum is invariant and may be computed in any system of projective coordinates. [step 1.1, step 1.2, algebra] ∎ 