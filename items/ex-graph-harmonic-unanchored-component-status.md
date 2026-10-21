---
id: ex-graph-harmonic-unanchored-component-status
kind: example
title: "An unanchored component is rejected before solving"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-graph-harmonic-label-extension
  - alg-graph-harmonic-label-propagation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $V=\{1,2,3\}$, with the single unit-weight edge $\{1,2\}$, labeled set $B=\{1\}$, boundary value $y_1=0$, and unlabeled set $U=\{2,3\}$. The isolated component $\{3\}$ contains no labeled vertex, so the graph-harmonic propagation algorithm returns status $\texttt{unanchored-component}$ before forming a linear solve.

## Graph diagram

The edge between 1 and 2 has weight 1; vertex 1 has boundary value 0. Vertices 2 and 3 are unlabeled, and vertex 3 is isolated. The verification checks the support components directly.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v1) at (0,0) {$1:0$};
\node[draw,circle] (v2) at (2,0) {$2$};
\node[draw,circle] (v3) at (4,0) {$3$};
\draw (v1)--node[above] {$1$}(v2);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Three vertices, one unit-weight edge $\{1,2\}$, $B=\{1\}$, $y_1=0$, and $U=\{2,3\}$.

[A1] $w_{12}=w_{21}=1$ and every other weight is zero.

[F1] [[def-graph-harmonic-label-extension]]: anchoring requires every support component meeting $U$ to meet $B$.

[F2] [[alg-graph-harmonic-label-propagation]]: the algorithm checks component anchors and returns $\texttt{unanchored-component}$ before constructing the SPD solve if any component meeting $U$ misses $B$.

## Verification

1.1 The support components are $\{1,2\}$ and $\{3\}$. The first meets both $B$ and $U$, while $\{3\}\subseteq U$ and $\{3\}\cap B=\varnothing$, so the anchor condition in [F1] fails. [given, A1, F1, algebra]

2.1 By [F2], this failed anchor check returns status $\texttt{unanchored-component}$ before forming a linear system; no singular solve is attempted. [given, F2, step 1.1] ∎
