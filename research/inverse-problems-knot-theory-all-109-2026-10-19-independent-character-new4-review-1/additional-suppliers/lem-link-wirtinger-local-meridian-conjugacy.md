---
id: lem-link-wirtinger-local-meridian-conjugacy
kind: lemma
title: "Local meridian conjugacy at a labeled link crossing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-link-wirtinger-crossing-ball-cover
  - def-regular-oriented-link-diagram
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-based-string-link-and-labeled-link-peripheral-system
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Claim 1a and the local crossing charts, printed pp. 69–70, PDF pp. 70–71"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
      locator: "§§2–3, local meridian-conjugacy construction; knot case only"
---

## Statement

At an oriented crossing let $o$ be the over-strand. Orient the projection plane
by the rule that $(v_1,v_2)$ is a positive basis exactly when the ordered triple
$(n,v_1,v_2)$ is positive in the ambient three-space, where $n$ is the viewing
normal. Let $n_o$ be the positive in-plane normal characterized by the condition
that $(v_o,n_o)$ is positive in this plane. Call the under-side from
which $n_o$ points the source $s$, and the side toward which it points the
target $t$. Use a common basepoint above the diagram and paths in the upper
collar to the positive meridians $m_o,m_s,m_t$. Then
$$m_t=m_o^{-1}m_sm_o.$$
Equivalently, the crossing relator is
$m_o^{-1}m_sm_om_t^{-1}=1$. Reversing the direction of the under-strand
does not change the side-based equation.

## Statement references

[Friedl, §5.3, Claim 1a](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

[Charbonneau, §§2–3](https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf)

## Facts & Assumptions

**Given:** The oriented crossing chart, positive meridian disk orientations, and common upper-collar basing paths.

[F1] The crossing cover supplies pairwise disjoint local crossing balls and compatible product-tube charts. [[lem-link-wirtinger-crossing-ball-cover]]

[F2] The positive meridian is the oriented boundary of a normal disk with the link tangent followed by disk orientation equal to the ambient orientation. [[def-based-string-link-and-labeled-link-peripheral-system]]

[F3] The ambient orientation fixes the positive orientation of the crossing chart and hence the orientation of the normal $(y,z)$ plane to the over-strand. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-regular-oriented-link-diagram]]

## Proof

1.1 Choose local coordinates $(x,y,z)$ in which the over-strand is tangent to $+\partial_x$, the viewing normal is $+\partial_z$, and the positive projection orientation is $(\partial_x,\partial_y)$. Then [F3] gives $n_o=+\partial_y$, so the source is $y<0$ and the target is $y>0$. The under-strand lies below the over-strand. Choose a small product tube around the under-strand, disjoint from the over-strand, and transport its normal disks along the under-strand from source to target. The annulus swept by these meridian circles lies in the crossing-ball complement, and [F2] fixes its orientation as the positive-meridian orientation. Its boundary contains an arc $\beta$ on the product-tube boundary joining the chosen source and target meridian circles; $\beta$ lies in the link complement. [F1, F2, F3, given, construct]

1.2 In a smaller crossing ball straighten the over-strand to $(x,0,0)$ and the under-strand to $(0,y,-h)$, where $h>0$. Choose $d>0$ small and a tube radius $r$ with $0<r<h$. The upper boundary-parallel arc on the under-tube is $\beta(y)=(0,y,-h+r)$ for $-d\le y\le d$, and its endpoints lie on the source and target meridian circles. Choose upper-collar access arcs $\alpha_s,\alpha_t$ from the common basepoint $(0,0,H)$, $H>0$, to these endpoints. The loop $g=\alpha_s\beta\alpha_t^{-1}$ bounds the triangle in the plane $x=0$ with vertices $(0,0,H)$, $(0,-d,-h+r)$, and $(0,d,-h+r)$. Its interior lies above the under-strand and meets the over-strand exactly at $(0,0,0)$. The oriented intersection is positive because the ordered vectors $(\partial_x,\partial_y,\partial_z)$ give the ambient orientation by [F3]. Removing a small disk around that one intersection leaves an annulus in the crossing-ball complement between $g$ and a small positive meridian circle of the over-strand, so $g=m_o$ by [F2, F3]. Transport across the under-meridian annulus gives $m_s=g m_t g^{-1}$; solving for $m_t$ yields $m_t=m_o^{-1}m_sm_o$. Reversing the under-strand reverses both under-meridian loops and preserves this conjugation equation. [F1, F2, F3, step 1.1, construct, algebra]

2.1 Multiplying the equality from step 1.2 on the right by $m_t^{-1}$ gives the displayed relator. Reversing the under-strand orientation reverses both under-meridian loops and leaves the side labels determined by $n_o$ unchanged; applying inversion to the transported equality recovers the same side-based relation. [step 1.2, algebra] ∎

## Remarks

The source/target labels determine which conjugation formula is used. Incoming/outgoing labels depend on the direction of the under-strand and should be derived from this equation, not substituted for it.

~~~tikz
\begin{tikzpicture}[>=stealth,line width=0.9pt]
  \draw[->,line width=1.2pt] (-1,-1)--(1,1);
  \draw[->] (1,-1)--(0.15,-0.15);
  \draw[->] (-0.15,0.15)--(-1,1);
  \node at (0.8,-0.7) {$s$};
  \node at (-0.8,0.8) {$t$};
  \node at (-0.8,-0.8) {$o$};
\end{tikzpicture}
~~~
