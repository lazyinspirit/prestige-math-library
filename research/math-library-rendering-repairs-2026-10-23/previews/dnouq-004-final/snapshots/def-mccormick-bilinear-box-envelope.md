---
id: def-mccormick-bilinear-box-envelope
kind: definition
title: McCormick envelope for a bilinear term on a box
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §16"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

Let $x\in[l_x,u_x]$ and $y\in[l_y,u_y]$, where all four endpoints are finite and ordered, and let $w$ be an additional real variable representing the product $xy$. The **McCormick polytope** for this box is the set of $(x,y,w)$ satisfying the box bounds and
$$ w\ge l_xy+l_yx-l_xl_y,\qquad w\ge u_xy+u_yx-u_xu_y $$
$$ w\le u_xy+l_yx-u_xl_y,\qquad w\le l_xy+u_yx-l_xu_y $$
The term **McCormick envelope** will mean this polytope. Its exact relation to the convex hull of the product graph is established by the local bilinear-hull result.

## Remarks

For the illustrative unit box $0\le x,y\le1$, the four bounds become $w\ge0$, $w\ge x+y-1$, $w\le x$, and $w\le y$. In the picture, the dashed blue edges bound the polytope with vertices $A=(0,0,0)$, $B=(1,0,0)$, $C=(0,1,0)$, and $D=(1,1,1)$. Its faces $ABC$, $BCD$, $ACD$, and $ABD$ lie respectively in the four planes $w=0$, $w=x+y-1$, $w=x$, and $w=y$. The orange grid samples the product surface $w=xy$ inside these bounds; it is not the whole polytope. This illustration imposes no nondegeneracy restriction on the definition above.

```tikz
\begin{tikzpicture}[x={(3cm,0cm)},y={(-1.3cm,1.3cm)},z={(0cm,2.7cm)}]
\coordinate (A) at (0,0,0);
\coordinate (B) at (1,0,0);
\coordinate (C) at (0,1,0);
\coordinate (D) at (1,1,1);
\draw[cyan,dashed,thick] (A)--(B)--(C)--(A);
\draw[cyan,dashed,thick] (A)--(D)--(B);
\draw[cyan,dashed,thick] (C)--(D);
\draw[orange,thick] (0,0.25,0)--(1,0.25,0.25);
\draw[orange,thick] (0,0.5,0)--(1,0.5,0.5);
\draw[orange,thick] (0,0.75,0)--(1,0.75,0.75);
\draw[orange,thick] (0.25,0,0)--(0.25,1,0.25);
\draw[orange,thick] (0.5,0,0)--(0.5,1,0.5);
\draw[orange,thick] (0.75,0,0)--(0.75,1,0.75);
\node[below left] at (A) {$A$};
\node[below right] at (B) {$B$};
\node[left] at (C) {$C$};
\node[above] at (D) {$D$};
\node[orange,right] at (1,0.5,0.5) {$w=xy$};
\end{tikzpicture}
```
