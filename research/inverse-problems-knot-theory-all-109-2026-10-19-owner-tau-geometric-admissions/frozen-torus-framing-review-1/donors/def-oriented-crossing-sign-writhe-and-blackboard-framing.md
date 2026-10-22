---
id: def-oriented-crossing-sign-writhe-and-blackboard-framing
kind: definition
title: "Oriented crossing signs, diagram writhe, and blackboard framing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-elementary-geometric-half-twist,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       prop-normal-and-conormal-bundles-are-smooth-vector-bundles,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Definition 3.11 and Proposition 3.12; pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definition 3.1, Figures 5–6; pp. 3–4"
---

## Definition

Assume $\mathrm{AC}_\omega$ for the smooth normal-bundle structure used in the
framing clause. For a knot component $K$, its normal bundle is the fibrewise
quotient $\nu K=TS^3|_K/TK$, and a normal section is a smooth section of this
bundle.

Let $D$ be a regular oriented link diagram in a projection plane $P$ of an
oriented $3$-sphere, after moving the link off the point at infinity. Fix the
unit viewing normal $n$ pointing toward the viewer. Orient $P$ by the rule that
an ordered basis $(u,v)$ of $P$ is positive exactly when $(n,u,v)$ is a positive
basis of the ambient $3$-space. At a crossing $c$, let $v_{\rm over}$ and
$v_{\rm under}$ be the nonzero projected tangent vectors following the
orientations of the overpassing and underpassing strands. Define
$$\operatorname{sgn}(c):=\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})\in\{+1,-1\}.$$
Reversing the orientation of $P$ reverses every crossing sign.

This convention makes the positive geometric Artin half twist positive. In
the braid chart $(x,y,t)$ with ambient orientation $(x,y,t)$, view along $+y$;
the induced positive orientation of the $(x,t)$ projection plane is the ordered
basis $(\partial_t,\partial_x)$. For the positive half twist, label $i$ moves
from $x=-h$ to $x=h$ below the midpoint, while label $i+1$ moves from $x=h$ to
$x=-h$ above it, with $h>0$. Thus the over and under projected tangent vectors
in coordinates $(t,x)$ are $(1,-2h)$ and $(1,2h)$, whose determinant is
$4h>0$.

The **writhe** of $D$ is
$$\operatorname{wr}(D):=\sum_{c\text{ a crossing of }D}\operatorname{sgn}(c).$$
For a link component $K_i$, its **self-writhe**
$\operatorname{wr}_i(D)$ is the sum over crossings whose two branches belong to
$K_i$; the total writhe also includes all mixed crossings between distinct
components.

The **blackboard framing** of a component of $D$ is the homotopy class of the
normal section represented by the positive quarter-turn in $P$ of the projected
oriented tangent. The projection is an immersion, so this vector never
vanishes; it is perpendicular to the projected tangent, hence also to the
spatial tangent, and therefore represents a nonzero normal section of the
component in the ambient $3$-sphere.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  \draw[->] (-1,0) -- (1,0) node[right] {$v_{\rm over}$};
  \draw[->] (0,-1) -- (0,1) node[above] {$v_{\rm under}$};
  \node[above left] at (0,0) {$+1$};
\end{tikzpicture}
```

In the displayed local chart, the over tangent is the positive horizontal
vector and the under tangent is the positive vertical vector, so the determinant
is $+1$. This figure illustrates the determinant rule only; no proof below
depends on a picture.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented links and ambient orientation]]

[[def-regular-oriented-link-diagram|Regular diagrams and over/under data]]

[[def-elementary-geometric-half-twist|Positive geometric Artin half twist]]

[[def-normal-and-conormal-bundles-of-an-embedded-submanifold|Normal bundle quotient]]

[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles|Smooth normal-bundle structure]]

[[def-countable-choice|Countable-choice hypothesis for the smooth normal bundle]]
