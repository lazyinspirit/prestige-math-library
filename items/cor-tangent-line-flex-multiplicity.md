---
id: cor-tangent-line-flex-multiplicity
kind: corollary
title: Flexes are contacts of order at least three with the tangent line
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-flex-and-bitangent-plane-curve, def-local-parameter-smooth-plane-curve, def-plane-projective-curve, lem-intersection-with-line-order-of-vanishing, lem-local-intersection-as-vanishing-order-on-smooth-curve, lem-smooth-plane-curve-unique-tangent]
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

Let $C$ be a plane projective curve over the algebraically closed field $k$ and let $p\in C$ be a smooth point with tangent line $T=T_pC$. Then $p$ is a flex of $C$ if and only if $T$ is not a component of $C$ and the nonzero restriction to $T$ of a defining form of $C$ vanishes at $p$ to order at least three. Whenever $T$ is not a component,

$$ I_p(C,T)=\operatorname{ord}_p(F|_T).$$

In particular $p$ is an ordinary flex exactly when $I_p(C,T)=3$, and for a smooth conic or a line there are no flexes.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], a plane projective curve $C=V(F)$ of degree $d$ over the algebraically closed field $k$ and a smooth point $p\in C$ with tangent line $T=T_pC$ [[def-plane-projective-curve]], [[lem-smooth-plane-curve-unique-tangent]].

[F1] A flex is a smooth point whose tangent line is not a component and has $I_p(C,T_pC)\ge3$, an ordinary flex one with $I_p(C,T_pC)=3$ [[def-flex-and-bitangent-plane-curve]].

[F2] If the tangent line $T$ is not a component of $C$, then $I_p(C,T)=\operatorname{ord}_p(F|_T)$, with order taken in the DVR $\mathcal O_{T,p}$, by [[lem-intersection-with-line-order-of-vanishing]]. The equivalent valuation along the smooth curve $C$ is $\operatorname{ord}_p(l|_C)$ for a local equation $l$ of $T$ [[lem-local-intersection-as-vanishing-order-on-smooth-curve]], [[def-local-parameter-smooth-plane-curve]].

[F3] When $T$ is not contained in $C$, the restriction $F|_T$ is a nonzero binary form of degree $d$; the order of vanishing at $p$ is at most $d$ by the root bound for the restriction [[def-flex-and-bitangent-plane-curve]], [[def-plane-projective-curve]].

## Proof

1.1 If $T$ is a component of $C$, its contact has infinite multiplicity and $p$ is not a flex by [F1]. Otherwise regard $T$ as the smooth curve and restrict the local equation $F$ of $C$ to it. By symmetry of the defining local quotient and [F2], $I_p(C,T)=\operatorname{ord}_p(F|_T)$; [F3] makes this finite and at most $d$. [F1, F2, F3, given]

2.1 In the finite-contact case of step 1.1, by [F1] the point $p$ is a flex exactly when $I_p(C,T)\ge3$, i.e. by step 1.1 exactly when $\operatorname{ord}_p(F|_T)\ge3$; it is an ordinary flex exactly when both are $3$. [F1, step 1.1, algebra]

2.2 If $C$ is a smooth conic and its tangent is not a component, then $d=2$, so $\operatorname{ord}_p(F|_T)\le2<3$ and no point is a flex. If $C$ is a line, then $T_pC=C$ for every point, the pair $(C,T_pC)$ has a common component and $I_p$ is not finite, so no point is a flex in the sense of the definition. [step 1.1, F1, F3, given]

3.1 Steps 1.1, 2.1 and 2.2 establish the identification, the characterisation of ordinary flexes by contact order three, and the absence of flexes on smooth conics and lines. [step 1.1, step 2.1, step 2.2] ∎ 