---
id: cex-knot-kt-34-boundary-case
kind: counterexample
title: Writhe is not an unframed knot invariant
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-singular-knot-and-vassiliev-derivative
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
justified_by: []
dependency_level: 2
verification:
  precheck: pass
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
---

## Statement refuted

For every oriented knot diagram $D$, the writhe $w(D)=\sum_c\operatorname{sgn}(c)$, with $\operatorname{sgn}(c)=\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$ in the oriented projection plane with positive viewing normal, is unchanged by unframed Reidemeister moves and therefore defines an unframed finite-type invariant of type at most $1$.

## Statement references

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §4.2.2, pp. 92–93](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

## Diagram

The picture is a local Reidemeister I pair: the vertical branch passes over the horizontal branch in the one-crossing curl, while the rest of the knot is unchanged.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
\begin{scope}
  \draw (0,0) circle (0.82);
  \draw[->] (0.42,-0.70) -- (0.18,-0.80);
  \node at (0,-1.2) {$D_0$};
\end{scope}
\begin{scope}[xshift=3.0cm]
  \draw (-1,0) .. controls (-1.15,-0.75) and (1.15,-0.75) .. (1,0);
  \draw[->] (0.45,-0.62) -- (0.20,-0.68);
  \draw (-1,0) -- (-0.22,0);
  \draw[->] (-0.78,0) -- (-0.50,0);
  \draw (0.22,0) -- (0.35,0)
    .. controls (0.73,0.02) and (0.80,0.42) .. (0.49,0.64)
    .. controls (0.27,0.80) and (0.08,0.82) .. (0,0.80)
    -- (0,-0.42)
    .. controls (0,-0.76) and (0.50,-0.70) .. (1,0);
  \draw[white,line width=5pt] (0,0.25) -- (0,-0.25);
  \draw (0,0.25) -- (0,-0.25);
  \node at (0,-1.2) {$D_1$};
\end{scope}
\end{tikzpicture}
```

At the single crossing of $D_1$, the vertical over-tangent points down and the horizontal under-tangent points right, so the determinant convention gives sign $+1$.

## Facts & Assumptions

**Given:** The two oriented diagrams in the counterexample below, and the sign convention in the refuted statement.

[F1] [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]: each local oriented Reidemeister I move is realized by an ambient isotopy of the represented oriented link.

[F2] [[def-singular-knot-and-vassiliev-derivative]]: a finite-type invariant must first be an invariant of ambient-isotopy classes of oriented knots.

[F3] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: writhe is the sum of the crossing signs, with the determinant convention stated in the refuted statement.

## Counterexample

Let $D_0$ be a crossing-free diagram of the oriented unknot and let $D_1$ be obtained from it by inserting one positive Reidemeister I curl. Both diagrams represent the same oriented unknot. The writhe values are $w(D_0)=0$ and $w(D_1)=1$.

1.1 By [F1], $D_0$ and $D_1$ represent the same unframed oriented knot, since they differ by one oriented Reidemeister I move. [given, F1]

2.1 The diagram $D_0$ has no crossings, so $w(D_0)=0$. The diagram $D_1$ adds exactly one positive crossing and leaves all other crossings absent, so $w(D_1)=+1$ by [F3]. Therefore writhe is not constant on the ambient-isotopy class of the unknot; by [F2] it cannot be an unframed finite-type knot invariant. [given, F2, F3, step 1.1, algebra] ∎
