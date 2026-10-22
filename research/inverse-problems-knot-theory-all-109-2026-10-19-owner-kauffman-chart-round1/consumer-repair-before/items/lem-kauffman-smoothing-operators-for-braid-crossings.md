---
id: lem-kauffman-smoothing-operators-for-braid-crossings
kind: lemma
title: Bracket smoothings of positive and negative braid crossings
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-elementary-geometric-half-twist
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-kauffman-bracket-smoothing-and-loop-value
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The local crossing calculation is finite and choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque
        163–164 (1988), §II, pp. 155–160
      url: https://www.numdam.org/item/AST_1988__163-164__137_0.pdf
    - title: Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial,
        arXiv:2204.12104v2, §2
      url: https://arxiv.org/pdf/2204.12104v2
---

## Statement

Let $\sigma_i$ be the positive geometric Artin braid crossing in a braid rectangle whose parameter increases from bottom to top, with strand $i$ passing below and strand $i+1$ passing above. Use the bracket chart in which the over-strand runs southwest to northeast, the $A$-smoothing joins top to top and bottom to bottom with weight $A$, and the $B$-smoothing joins left to left and right to right with weight $A^{-1}$. Let $I$ be the through pairing and let $e_i$ be the pairing with a top cap and a bottom cup at positions $i,i+1$. Then the positive crossing has bracket operator $A I+A^{-1}e_i$, and the negative crossing has bracket operator $A^{-1}I+A e_i$.

```tikz
\begin{tikzpicture}[scale=0.82, line cap=round, line join=round]
  \begin{scope}
    \draw[thick] (-0.55,-1)--(-0.55,1);
    \draw[thick] (0.55,-1)--(0.55,1);
    \node at (0,1.35) {$I$};
  \end{scope}
  \begin{scope}[xshift=2.6cm]
    \draw[thick] (-0.55,1) .. controls (0.25,0.55) and (0.25,-0.55) .. (0.55,-1);
    \draw[thick] (0.55,1) .. controls (-0.25,0.55) and (-0.25,-0.55) .. (-0.55,-1);
    \node at (0,1.35) {$e_i$};
  \end{scope}
  \node at (1.25,0) {$\sigma_i=A I+A^{-1}e_i$};
\end{tikzpicture}
```

## Statement references

[Kauffman, *New Invariants in the Theory of Knots*, §II](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2](https://arxiv.org/pdf/2204.12104v2)

## Facts & Assumptions

**Given:** The positive geometric half twist, its inverse, the determinant crossing-sign convention, and the Kauffman bracket chart specified in the statement.

[F1] In the positive geometric generator, strand $i$ moves from $x=-h$ to $x=h$ below the midpoint and strand $i+1$ moves from $x=h$ to $x=-h$ above it; the inverse reverses the crossing ([[def-elementary-geometric-half-twist]]).

[F2] The crossing sign is $\operatorname{sgn}\det(v_{\rm over},v_{\rm under})$, and this convention assigns sign $+1$ to the positive geometric Artin half twist ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] In the stated chart a crossing contributes $A$ times its $A$-smoothing plus $A^{-1}$ times its $B$-smoothing; the loop value is $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

## Proof
1.1 In the braid projection coordinates $(t,x)$, the over-strand has tangent $(1,-2h)$ and the under-strand has tangent $(1,2h)$, so their determinant is $4h>0$, in agreement with [F2]. An orientation-preserving quarter-turn puts the over-strand in the southwest-to-northeast position of [F3]. Under that coordinate change, the chart's top-bottom pairing is the two vertical through arcs, while its left-right pairing is the top cap and bottom cup. The two terms in [F3] are therefore $A I$ and $A^{-1}e_i$. [F1, F2, F3, construct]

2.1 The inverse half twist reverses which diagonal is over. Reflection of the local crossing interchanges the two pairings while retaining the bracket rule that assigns coefficient $A$ to the chart's $A$-smoothing and $A^{-1}$ to its $B$-smoothing. Consequently the through pairing now has coefficient $A^{-1}$ and the cap-cup pairing has coefficient $A$. [F1, F3, step 1.1, construct] ∎
