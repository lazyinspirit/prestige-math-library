---
id: ex-knot-kt-47-worked-cases
kind: example
title: "Trefoil Gauss traversal and rotation reconstruction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - lem-planar-diagram-code-realizability-and-face-validation
  - alg-planar-code-validation-and-diagram-reconstruction
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
  - alg-enumerate-diagrams-up-to-crossing-bound
  - thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Knot Atlas, Gauss Codes manual"
      url: "https://katlas.org/wiki/Gauss_Codes"
      locator: "Gauss-code definition and trefoil code, lines 65–80"
    - title: "C. Fish, Codes, Links and Racks, University of Warwick thesis (2001), Chapter 5, §5.2.1"
      url: "https://wrap.warwick.ac.uk/id/eprint/136332/1/WRAP_Theses_Fish_2001.pdf"
      locator: "Signed Gauss code definition and right-trefoil code, printed pp. 67–68, PDF lines 1569–1605"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
---

## Statement

Use the based signed Gauss code $-1,+3,-2,+1,-3,+2$, where a negative visit is
under, a positive visit is over, and the separate algebraic crossing-sign
vector is $(+1,+1,+1)$. This is a cyclic shift and the relabeling $2\leftrightarrow
3$ of the right-trefoil signed Gauss code. Its normalized PD records in
clockwise order beginning with outgoing over-dart are
$$X_1=(e_1,e_2,e_3,e_4),\qquad
X_2=(e_2,e_5,e_6,e_3),\qquad
X_3=(e_5,e_1,e_4,e_6).$$
Its face cycles are
$$F_0=(1:e_1,2:e_2,3:e_5),\quad
F_1=(1:e_2,2:e_3),\quad
F_2=(1:e_3,3:e_4,2:e_6),\quad
F_3=(1:e_4,3:e_1),\quad
F_4=(2:e_5,3:e_6).$$
Selecting $F_0$ as the outer face gives a valid one-component three-crossing
code, and the bounded enumerator includes its reconstructed candidate at
crossing bound $3$.

The figure displays the positive two-strand braid closure used for this code.
The braid strands are oriented downward, the closure arcs upward, and the
crossings are labeled from top to bottom $1,3,2$; the upper branch is the
right-to-left branch at each positive crossing. The proof below verifies the
code and face cycles from finite dart data and does not infer them from the
drawing.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  % Top crossing, label 1: under branch left-to-right, over branch right-to-left.
  \draw[white,line width=5pt] (-1,0) -- (1,-1);
  \draw[->] (-1,0) -- (-0.18,-0.41);
  \draw[->] (0.18,-0.59) -- (1,-1);
  \draw[->,line width=1.2pt] (1,0) -- (-1,-1);
  \node at (0.34,-0.5) {$+1$};
  % Middle crossing, label 3.
  \draw[white,line width=5pt] (-1,-1) -- (1,-2);
  \draw[->] (-1,-1) -- (-0.18,-1.41);
  \draw[->] (0.18,-1.59) -- (1,-2);
  \draw[->,line width=1.2pt] (1,-1) -- (-1,-2);
  \node at (0.34,-1.5) {$+3$};
  % Bottom crossing, label 2.
  \draw[white,line width=5pt] (-1,-2) -- (1,-3);
  \draw[->] (-1,-2) -- (-0.18,-2.41);
  \draw[->] (0.18,-2.59) -- (1,-3);
  \draw[->,line width=1.2pt] (1,-2) -- (-1,-3);
  \node at (0.34,-2.5) {$+2$};
  % The two closure arcs join matching left and right endpoints outside the braid.
  \draw[->] (1,-3) .. controls (2.1,-3) and (2.1,0) .. (1,0);
  \draw[->] (-1,-3) .. controls (-2.1,-3) and (-2.1,0) .. (-1,0);
\end{tikzpicture}
```

## Example references

[[def-planar-diagram-gauss-and-dowker-codes]] — signed visits, normalized PD records, and face-cycle convention.

[[lem-planar-diagram-code-realizability-and-face-validation]] — Euler test for spherical realizability.

[[alg-enumerate-diagrams-up-to-crossing-bound]] — bounded normalized-code enumeration.

[Knot Atlas, “Gauss Codes”](https://katlas.org/wiki/Gauss_Codes) — trefoil traversal $-1,3,-2,1,-3,2$.

[Fish, “Codes, Links and Racks,” §5.2.1](https://wrap.warwick.ac.uk/id/eprint/136332/1/WRAP_Theses_Fish_2001.pdf) — right trefoil signed code and crossing-sign convention, pp. 67–68.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation-system face cycles and outer-face selection.

## Facts & Assumptions

**Given:** The based signed Gauss word $-1,+3,-2,+1,-3,+2$, the sign vector $(+1,+1,+1)$, and the page's normalized dart and face conventions.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: a positive Gauss visit is over and a negative visit is under; each crossing occurs once over and once under; a positive normalized crossing has clockwise record $(O_{\rm out},U_{\rm in},O_{\rm in},U_{\rm out})$; face cycles are those of $\alpha\circ\sigma$.

[F2] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: the algebraic sign is $\operatorname{sgn}\det(v_{\rm over},v_{\rm under})$, and the positive Artin half twist has sign $+1$.

[F3] [[lem-planar-diagram-code-realizability-and-face-validation]]: a nonempty connected code with consistent local crossing data has a spherical realization when $V-E+F=2$, and a chosen face gives its plane model.

[F4] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: the validator accepts exactly codes satisfying the incidence, strand, connectedness, face-count, and outer-face predicates and returns their crossing-disk/edge-band model.

[F5] [[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]: the enumerator includes every normalized connected one-component code up to the specified crossing bound that passes validation.

[F6] [Fish, “Codes, Links and Racks,” §5.2.1, p. 67](https://wrap.warwick.ac.uk/id/eprint/136332/1/WRAP_Theses_Fish_2001.pdf): the right trefoil signed Gauss code is $o1+,u2+,o3+,u1+,o2+,u3+$, and crossing signs are unchanged between the two visits to a crossing.

## Proof

1.1 The visits of the given word are, in order, under at crossing $1$, over at $3$, under at $2$, over at $1$, under at $3$, and over at $2$. The source code in [F6], started at its fourth visit, is $u1+,o2+,u3+,o1+,u2+,o3+$; exchanging labels $2$ and $3$ gives exactly the stated word and the same positive sign at each crossing. Thus the word is the stated based traversal of the right trefoil. [given, F1, F6, algebra]

1.2 Let $x_i$ be the directed edge from visit $i$ to visit $i+1$, with indices modulo $6$. Then $x_1$ joins $1:U_{\rm out}$ to $3:O_{\rm in}$, $x_2$ joins $3:O_{\rm out}$ to $2:U_{\rm in}$, $x_3$ joins $2:U_{\rm out}$ to $1:O_{\rm in}$, $x_4$ joins $1:O_{\rm out}$ to $3:U_{\rm in}$, $x_5$ joins $3:U_{\rm out}$ to $2:O_{\rm in}$, and $x_6$ joins $2:O_{\rm out}$ to $1:U_{\rm in}$. At each crossing the sign is positive by the given vector and [F2]. Reading each crossing clockwise from its outgoing over-dart therefore gives $X_1=(x_4,x_6,x_3,x_1)$, $X_2=(x_6,x_2,x_5,x_3)$, and $X_3=(x_2,x_4,x_1,x_5)$. Scanning crossing $1$ then $2$ then $3$ assigns canonical edge names $e_1=x_4,e_2=x_6,e_3=x_3,e_4=x_1,e_5=x_2,e_6=x_5$, yielding the three normalized records in the statement. [given, F1, F2, step 1.1, construct]

2.1 Write $j:e_k$ for the dart labelled by edge $e_k$ at crossing $j$. Applying $\phi=\alpha\circ\sigma$ gives
$$
\begin{aligned}
1:e_1&\mapsto2:e_2\mapsto3:e_5\mapsto1:e_1,\\
1:e_2&\mapsto2:e_3\mapsto1:e_2,\\
1:e_3&\mapsto3:e_4\mapsto2:e_6\mapsto1:e_3,\\
1:e_4&\mapsto3:e_1\mapsto1:e_4,\\
2:e_5&\mapsto3:e_6\mapsto2:e_5.
\end{aligned}
$$
For example, $1:e_1$ advances clockwise to $1:e_2$, whose paired dart is $2:e_2$. The five displayed cycles are disjoint and contain all twelve darts, so they are exactly the face cycles. Hence $V=3$, $E=6$, $F=5$, and $V-E+F=2$. [given, F1, step 1.2, construct]

2.2 Each edge occurs at its two ends once incoming and once outgoing by the six directed segments in step 1.2. Each crossing record has its two opposite oriented strands, the over/under designation, and the positive cyclic order from [F1]–[F2]. Traversing from $1:U_{\rm out}$ follows $x_1$ to $3:O_{\rm in}$, then the opposite over-dart follows $x_2$ to $2:U_{\rm in}$, then follows $x_3$ to $1:O_{\rm in}$, then $x_4$ to $3:U_{\rm in}$, then $x_5$ to $2:O_{\rm in}$, and finally $x_6$ to $1:U_{\rm in}$; the opposite under-dart there is the starting $1:U_{\rm out}$. This single cycle covers all six visits, and the edge graph connects crossings $1,2,3$. By [F3], the Euler count gives the spherical realization; choosing $F_0$ yields the selected plane model. [given, F1, F2, F3, step 1.2, step 2.1, construct]

3.1 The code therefore passes the validator's ordered checks, and [F4] returns its diagram with these face cycles and outer face. Its normalized crossing signs, edge pairing, and selected cycle occur in the enumerator at $c=3$; the one-cycle component trace passes the knot filter. By [F5], the reconstructed candidate is included at bound $3$. [given, F4, F5, step 2.2] ∎
