---
id: thm-preperiodic-height-zero-criterion-for-ample-number-field-polarization
kind: theorem
title: "Zero canonical height is equivalent to preperiodicity over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-canonical-height-of-divisorial-eigenclass
  - thm-canonical-height-functional-equation-and-bounded-error
  - thm-ample-powers-very-ample-proper-base
  - thm-weil-height-machine-functoriality-and-additivity
  - thm-northcott-finiteness-for-bounded-degree-algebraic-points
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms"
      url: "https://www.numdam.org/article/CM_1993__89_2_163_0.pdf"
      locator: "§1, Corollary 1.1.1 and its proof, printed pp. 169–170"
    - title: "Joseph H. Silverman, Arithmetic and dynamical degrees on projective varieties"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
      locator: "Lecture 3, printed pp. 14–16"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X/K$ be a projective variety, and let $(X,f,L,d)$ be a polarized dynamical system with $L$ ample and $d>1$. For every $P\in X(\overline K)$, the canonical height $\widehat h_{f,L}(P)$ is zero if and only if the forward orbit $\{f^n(P):n\ge0\}$ is finite.

## Statement references

[[def-canonical-height-of-divisorial-eigenclass]]

[[thm-canonical-height-functional-equation-and-bounded-error]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-northcott-finiteness-for-bounded-degree-algebraic-points]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a projective variety $X/K$; a polarized endomorphism $f$ with ample $L$ and weight $d>1$; and a point $P\in X(\overline K)$.

[A1] AC is assumed by the projective embedding and height suppliers used below. ([[def-axiom-of-choice]], [[thm-ample-powers-very-ample-proper-base]])

[F1] The canonical height satisfies $\widehat h_{f,L}(f(Q))=d\widehat h_{f,L}(Q)$ for every algebraic point and differs from a Weil height $h_L$ by a uniformly bounded function. ([[thm-canonical-height-functional-equation-and-bounded-error]])

[F2] For a sufficiently large integer $m$, the ample sheaf $L^{\otimes m}$ gives a closed immersion $i:X\hookrightarrow\mathbb P^N_K$, and the height machine gives $h_{\mathbb P^N}(i(Q))=m h_L(Q)+O(1)$ uniformly in $Q$. ([[thm-ample-powers-very-ample-proper-base]], [[thm-weil-height-machine-functoriality-and-additivity]])

[F3] For fixed $D$ and height bound, there are only finitely many points of bounded degree over $K$ in projective space. ([[thm-northcott-finiteness-for-bounded-degree-algebraic-points]])

## Proof

1.1 If $P$ has finite forward orbit, there are integers $m>n\ge0$ with $f^m(P)=f^n(P)$. Iterating [F1] gives $d^m\widehat h_{f,L}(P)=d^n\widehat h_{f,L}(P)$; since $d^m-d^n\ne0$, the canonical height is zero. [given, F1, algebra]

1.2 Suppose $\widehat h_{f,L}(P)=0$. By [F1], $h_L(P)$ is bounded by a constant independent of $P$. Therefore [F2] bounds the projective height of $i(P)$ uniformly. [F1, F2]

2.1 Every iterate $Q=f^r(P)$ is defined over the same finite extension $K(P)/K$, and [F1] gives $\widehat h_{f,L}(Q)=d^r\widehat h_{f,L}(P)=0$. The uniform bound in [F1] and the height comparison in [F2] give one common height bound for all $i(Q)$. [given, F1, F2, step 1.2]

3.1 Apply [F3] with $D=[K(P):K]$ to the points $i(f^r(P))$. There are only finitely many possible images; since $i$ is injective, the orbit of $P$ is finite. This proves the converse. [given, F3, step 2.1, algebra] ∎
