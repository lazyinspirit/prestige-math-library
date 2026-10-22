---
id: lem-link-peripheral-longitude-word-from-diagram
kind: lemma
title: "Diagram word for a preferred peripheral longitude"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-regular-oriented-link-diagram
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - def-topological-linking-number-by-meridian-coordinate
  - lem-link-wirtinger-local-meridian-conjugacy
  - lem-string-link-exterior-homology-and-meridian-maps
  - thm-blackboard-framing-self-linking-is-writhe
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, §7.1, Longitudes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Chapter 7, §7.1, longitudes from based diagrams, printed pp. 95–96, PDF pp. 96–97"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, blackboard framing and writhe correction, printed pp. 3–9"
---

## Statement

Let the diagram be either a based regular string-link
diagram in $D^2\times[0,1]$ or a finite regular oriented diagram of a nonempty
labeled closed link. In string-link mode, choose the product-tube parallel to
be the blackboard push-off determined by the projected tangent, carried
through the fixed endpoint collars. Choose one initial strand on each
component and use based
positive meridians for all strands. Traverse component $K_j$ in its orientation
(from bottom to top for a string link and once around for a closed link). At
each undercrossing $c$ of $K_j$, let $o(c)$ be the over-strand, and set
$\epsilon_c=+1$ if the traversal goes from the source side to the target side
of the over-strand's positive in-plane normal, and $\epsilon_c=-1$ if it goes
from target to source. If the undercrossings in traversal order are
$c_1,\ldots,c_s$, define
$$
W_j(D)=x_{o(c_1)}^{\epsilon_{c_1}}\cdots
x_{o(c_s)}^{\epsilon_{c_s}}.
$$
For a string link, this word represents its based longitude. For a closed
link, it represents the blackboard parallel in $\pi_1(E_L)$. The preferred
zero-self-meridian longitude in the closed-link case is represented by
$$
\lambda_j(D)=x_j^{-\operatorname{wr}_j(D)}W_j(D),
$$
where $x_j$ is the initial meridian on $K_j$ and $\operatorname{wr}_j(D)$ is
the sum of crossing signs at self-crossings of $K_j$.

## Statement references

[Friedl, §7.1, Longitudes](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

[Elhamdadi, Hajij, and Istvan, §3](https://arxiv.org/pdf/1910.10257v6)

## Facts & Assumptions

**Given:** The diagram, based strand meridians, base arcs, and product tubes in the statement.

[F1] At each crossing, based positive meridians on the source and target under-sides satisfy the side-based conjugation relation. [[lem-link-wirtinger-local-meridian-conjugacy]]

[F2] For a regular oriented link diagram, the self-linking of the blackboard framing on a component equals its self-writhe. [[thm-blackboard-framing-self-linking-is-writhe]]

[F3] The positive component meridians form a basis of exterior $H_1$, and the degree-one class with zero self-meridian coordinate is the preferred closed-link longitude class. [[lem-string-link-exterior-homology-and-meridian-maps]], [[def-based-string-link-and-labeled-link-peripheral-system]]

[F4] The crossing sign is the determinant sign of the ordered over- and under-tangents in the oriented projection plane. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]

[F5] A framed knot's self-linking is the linking number with its positive push-off. [[def-framed-knot-self-linking-and-seifert-framing]]

[F6] Linking with a component is the coefficient of its positive meridian in the first homology of its exterior. [[def-topological-linking-number-by-meridian-coordinate]]

## Proof

1.1 Set $v_0=1$. Suppose the current strand meridian on $K_j$ is represented by $v_{i-1}^{-1}x_jv_{i-1}$. At crossing $c_i$, if the component passes source-to-target, [F1] replaces it by $x_{o(c_i)}^{-1}v_{i-1}^{-1}x_jv_{i-1}x_{o(c_i)}$, which is $v_i^{-1}x_jv_i$ for $v_i=v_{i-1}x_{o(c_i)}$. If it passes target-to-source, solving the same relation for the source meridian gives the same formula with $v_i=v_{i-1}x_{o(c_i)}^{-1}$. Thus after one traversal the ordered product is exactly $W_j(D)$. [F1, given, induction, algebra]

1.2 In the local product chart at each undercrossing, the narrow band between the component and its parallel has boundary access paths whose difference is the over-meridian factor just computed in step 1.1. Away from crossings the parallel and the core run in a product annulus and contribute no group letter. Concatenating these finitely many local annuli from bottom to top gives the based string-link longitude; concatenating once around a closed component gives its based blackboard-parallel loop. In both cases the ordered word is $W_j(D)$. [F1, step 1.1, construct]

2.1 In the closed-link case, the parallel in step 1.2 has degree $+1$ on $K_j$. Under inclusion from $E_L$ to the exterior of $K_j$ alone, every other component meridian maps to zero because its small normal disk is disjoint from $K_j$, while $\mu_j$ maps to the positive generator. By [F5] and [F6], the self-meridian coordinate of this parallel is therefore its self-linking number. By [F2] that number is $\operatorname{wr}_j(D)$. The same coordinate is the sum of the exponents of those factors in $W_j(D)$ whose over-strand lies on $K_j$: for such a self-crossing, source-to-target has determinant sign $+1$, and target-to-source has sign $-1$ by [F4]. Mixed-crossing factors lie in other component coordinates by the meridian basis in [F3]. [F2, F3, F4, F5, F6, step 1.2]

2.2 In the closed-link case, multiplication by $x_j^{-\operatorname{wr}_j(D)}$ changes the self-meridian coordinate by $-\operatorname{wr}_j(D)$ and leaves the degree on $K_j$ equal to $+1$. Its self-meridian coordinate is therefore zero. By [F3], this is the preferred zero-self-meridian longitude class. In the string-link case, step 1.2 already gives the based longitude specified by the tube and access paths. [F3, step 1.2, step 2.1, algebra] ∎
