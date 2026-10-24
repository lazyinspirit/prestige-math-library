---
id: def-knot-connected-sum-and-prime-knot
kind: definition
title: "Oriented connected sum and prime knot"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.1–7.3, printed pp.91–93"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Proposition 2.14, printed pp.24–25"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Fix a coordinate orientation-reversing reflection $r:S^3\to S^3$ for the mirror convention. Let $K$ and $J$ be smooth oriented knots in the standard oriented three-sphere. A connected-sum datum consists of one smoothly embedded closed three-ball around a short subarc of $K$ and one around a short subarc of $J$, each meeting its knot in a single trivial properly embedded arc, together with the fixed standard orientation-reversing boundary identification of the two standard oriented ball boundaries that joins the oriented arcs into one circle. Choose this standard map once in the standard two-ball model so that it commutes with $r$ and an orientation-preserving half-turn interchanging the two balls preserves the joining convention. Here a trivial arc is an embedded interval in a ball that is carried by an orientation-preserving diffeomorphism of ball-arc pairs to a straight diameter. Remove the interiors of the two balls and glue the remaining boundary spheres using this fixed identification; the resulting oriented knot in the standard oriented three-sphere is a connected sum of $K$ and $J$, denoted $K\#J$ for the specified datum.

The **standard unknot** is the counterclockwise circle $U=\{(x_1,x_2,0)\in\mathbb R^3:x_1^2+x_2^2=1\}\subset S^3=\mathbb R^3\cup\{\infty\}$. Under inverse stereographic projection $x\mapsto(2x/(1+\lVert x\rVert^2),(\lVert x\rVert^2-1)/(1+\lVert x\rVert^2))$, this is the unit circle in the first coordinate two-plane of the unit sphere in $\mathbb R^4$. A knot is **nontrivial** if it is not ambient isotopic through orientation-preserving diffeomorphisms of $S^3$ to the standard unknot. A nontrivial knot is **prime** if it has no connected-sum presentation whose two summand knots are both nontrivial.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and ambient isotopy]]

[[lem-knot-connected-sum-well-defined|Independence of the local connected-sum choices]]

[Burde and Zieschang, Chapter 7](https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf)

[Friedl, Proposition 2.14](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

## Diagram

The circles stand for arbitrary oriented knot diagrams outside the small balls. The short gaps are the trivial arcs removed from the two knots; the two joining arcs indicate the fixed orientation-matching gluing. This is only a construction schematic and contains no crossing data.

```tikz
\begin{tikzpicture}[line cap=round,line join=round,scale=0.9]
  \coordinate (KLtop) at ({-3+cos(20)},{sin(20)});
  \coordinate (KLbot) at ({-3+cos(20)},{-sin(20)});
  \coordinate (JRtop) at ({3-cos(20)},{sin(20)});
  \coordinate (JRbot) at ({3-cos(20)},{-sin(20)});
  \draw[thick] (KLbot) arc[start angle=340,end angle=20,radius=1];
  \draw[thick] (JRtop) arc[start angle=160,end angle=-160,radius=1];
  \draw[dashed] (-2,0) circle ({2*sin(10)});
  \draw[dashed] (2,0) circle ({2*sin(10)});
  \draw[thick,->] (KLtop) .. controls (-1.1,1.3) and (1.1,1.3) .. (JRtop);
  \draw[thick,->] (JRbot) .. controls (1.1,-1.3) and (-1.1,-1.3) .. (KLbot);
  \node at (-3,0) {$K$};
  \node at (3,0) {$J$};
  \node[below] at (0,-1.65) {$K\#J$};
  \node[above] at (-2,0.55) {$B_K$};
  \node[above] at (2,0.55) {$B_J$};
\end{tikzpicture}
```
