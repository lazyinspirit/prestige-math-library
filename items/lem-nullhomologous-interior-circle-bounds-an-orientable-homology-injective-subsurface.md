---
id: lem-nullhomologous-interior-circle-bounds-an-orientable-homology-injective-subsurface
kind: lemma
title: "A nullhomologous interior circle bounds an orientable homology-injective subsurface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: a finite triangular presentation relative to the circle and the surface boundary is supplied; all chain arguments are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua E. Greene, Alternating links and definite surfaces, Lemmas 3.3–3.4, printed pp.5–6"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
---

## Statement

Let $F$ be a compact connected surface with nonempty boundary, possibly nonorientable, and let $\gamma\subset\operatorname{int}F$ be an embedded circle with a supplied orientation. Supply a finite triangular presentation of $F$ in which $\partial F$ and $\gamma$ are subcomplexes. If $[\gamma]=0$ in $H_1(F;\mathbb Q)$, then $\gamma$ separates $F$ and is the entire boundary of a compact connected orientable subsurface $A\subset\operatorname{int}F$. Its orientation can be chosen to induce the supplied orientation of $\gamma$. The inclusion $H_1(A;\mathbb Q)\to H_1(F;\mathbb Q)$ is injective. The assertion is choice-free for the supplied finite presentation.

## Facts & Assumptions

**Given:** The compact connected surface $F$ with nonempty boundary, the oriented interior circle $\gamma$, the finite triangular presentation relative to $\partial F\cup\gamma$, and the rational nullhomology of $\gamma$.

[F1] Simplicial and singular homology agree naturally for a finite simplicial complex with arbitrary coefficient group, without a choice principle. ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]])

## Proof

1.1 By [F1] there is a rational simplicial two-chain $c$ whose boundary is the oriented edge cycle $\gamma$. Give the finitely many triangles arbitrary reference orientations and record their coefficients in $c$. Across every interior edge not in $\gamma$, the two triangle coefficients have equal absolute value, since their signed boundary coefficients cancel. Wherever that absolute value is nonzero, the coefficient signs give coherent orientations of the incident triangles. A boundary edge of $F$ is incident to one triangle and does not occur in $\partial c$, so that triangle has coefficient zero. [given, F1, construct, algebra]

2.1 The triangles on each connected component of $F\setminus\gamma$ are joined by adjacencies across edges not in $\gamma$: a path between interior points can be moved off the finitely many vertices and made transverse to the finitely many edges, yielding such a finite edge path. Thus the absolute coefficients are constant on each component. Every component that meets $\partial F$ has coefficient zero by step 1.1. There is at least one such component, because $\partial F$ is nonempty. [given, step 1.1, construct]

3.1 There are at most two components of $F\setminus\gamma$. Indeed a small interval on $\gamma$ has two local sides; following them once around the connected circle either retains two sides or exchanges them. A sufficiently small regular neighborhood therefore has at most two components after its central circle is deleted. Every complementary component meets this neighborhood, since otherwise it would be both open and closed in connected $F$; and each connected side of the neighborhood belongs to one complementary component. If there were only one component, step 2.1 would make every coefficient zero, contradicting $\partial c=\gamma$. Hence there are exactly two, one of them with zero coefficients and containing $\partial F$. Across each edge of $\gamma$ the jump is one, so the other component has coefficient absolute value one and does not meet $\partial F$. Let $A$ be its closure. The local two-side charts show that $A$ is a compact connected subsurface with boundary exactly $\gamma$. The coherent orientations in step 1.1 orient $A$ so that its oriented fundamental two-chain has boundary $\gamma$. Thus $A\subset\operatorname{int}F$ is the required orientable side. [given, step 1.1, step 2.1, construct, contradiction]

4.1 Let a rational simplicial one-cycle $z$ in $A$ become zero in $H_1(F;\mathbb Q)$. By [F1] choose a rational two-chain $d$ in $F$ with $\partial d=z$. On the other complementary component, all interior-edge coefficients of $\partial d$ vanish because $z$ is supported in $A$, and its edges on $\partial F$ also have coefficient zero. The same propagation as in steps 1.1–2.1 forces every triangle coefficient of $d$ on that component to be zero. Therefore $d$ is supported in $A$, so $z$ already bounds there. Every homology class of $A$ has such a simplicial representative by [F1]. This proves the asserted injection. [step 1.1, step 2.1, step 3.1, F1, construct, algebra]

5.1 Steps 3.1–4.1 give the orientable one-boundary subsurface and its homology injection. In particular a one-sided circle cannot meet the nullhomology hypothesis: its two local sides are exchanged, so the complement in step 3.1 would be connected. The argument also allows $A$ to be a disk and uses only finitely many coefficients, triangle adjacencies and reference orientations. No orientation of the original surface and no choice principle were assumed. [step 3.1, step 4.1] ∎
