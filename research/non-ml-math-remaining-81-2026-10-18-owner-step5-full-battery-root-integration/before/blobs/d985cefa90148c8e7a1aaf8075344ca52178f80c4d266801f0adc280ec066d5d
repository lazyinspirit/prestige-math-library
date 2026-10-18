---
id: def-qc-tqc-braid-action-from-fusion-data
kind: definition
title: Braid action on a fixed-charge fusion space
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-unitary-fusion-category
  - def-qc-tqc-fusion-tree-basis
  - def-qc-tqc-f-symbol
  - def-qc-tqc-r-symbol
  - def-braid-group-by-the-artin-presentation
dependency_level: 6
justified_by:
  - thm-qc-tqc-braid-action-unitary-and-artin
axiom_use: None; the generator assignment and Artin relations are finite algebraic data.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.A, PDF pp. 3–6; §IV.B.c, PDF pp. 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.5 and §§9.14–9.17, PDF pp. 13–62
---

## Definition

Fix a unitary braided fusion category $\mathcal C$ and the simple-object
representative set $\operatorname{Irr}(\mathcal C)$ used in
[[def-qc-tqc-fusion-tree-basis]]. Let $x,c\in\operatorname{Irr}(\mathcal C)$,
let $n\ge2$, and suppose $V(x^n\to c)\ne0$. Use the left-associated fusion-tree basis. For the Artin
generator $\sigma_i$ that exchanges the $i$th and $(i+1)$st strands, let
$T_i$ be the specified sequence of $F$-moves that changes from the fixed tree
basis to a basis where those two charges fuse first, and let $R_i$ apply the
corresponding $R$-symbol on each pair-charge channel. Define
$$\rho_c(\sigma_i):=T_i^{-1}R_iT_i.$$
This defines the generator assignment. The next theorem proves that the
assignment descends from words to a well-defined group homomorphism. Word
products use matrix multiplication acting right-to-left on column vectors.
The abstract group in this definition is the Artin group
[[def-braid-group-by-the-artin-presentation]]; the positive crossing is the
generator convention used for the displayed $R$-symbols. If a motion is
described chronologically, its matrix product is written in reverse temporal
order.


## Positive crossing convention

The diagram depicts the positive adjacent generator on two identical charges.
Time runs from top to bottom; the continuous left-input strand passes over the
broken right-input strand. The crossing represents $c_{x,x}$, while its
pullback on a fusion space uses the inverse in the formula above. This fixes
the $R$-matrix orientation; the proof of the Artin relations is categorical.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.8pt]
  \draw (0,2) -- (0,1.08);
  \draw (1,2) .. controls (1,1.5) and (0.72,1.25) .. (0.58,1.05);
  \draw (0.42,0.95) .. controls (0.28,0.75) and (0,0.5) .. (0,0);
  \draw (0,2) .. controls (0,1.4) and (1,0.6) .. (1,0);
  \node at (0,2.2) {$x$};
  \node at (1,2.2) {$x$};
  \node at (0,-0.25) {$x$};
  \node at (1,-0.25) {$x$};
  \node at (1.35,1) {$\sigma_i$};
\end{tikzpicture}
```

## Remarks

The geometric configuration convention in
[[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]
uses first-loop-then-second multiplication, while raw slicing reverses
stacking. This definition fixes the algebraic Artin action directly and makes
no extra assertion that the library's geometric group is identified with the
Artin presentation under a stronger axiom branch.
