---
id: ex-graph-harmonic-path-interpolation
kind: example
title: "Harmonic extension on a three-vertex path"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-graph-harmonic-label-extension
  - thm-graph-harmonic-extension-uniqueness-and-maximum-principle
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

Take the path with vertices $1,2,3$, unit weights on edges $\{1,2\}$ and $\{2,3\}$, labeled boundary $B=\{1,3\}$, and values $y_1=0$, $y_3=1$. The unique graph-harmonic extension assigns value $1/2$ to vertex 2 and has Dirichlet energy $1/4$.

## Graph diagram

The labels inside the end vertices are their prescribed boundary values. Each drawn undirected edge has weight 1; vertex 2 is unlabeled. The calculation in Verification uses the energy formula, not the drawing.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v1) at (0,0) {$1:0$};
\node[draw,circle] (v2) at (2,0) {$2$};
\node[draw,circle] (v3) at (4,0) {$3:1$};
\draw (v1)--node[above] {$1$}(v2);
\draw (v2)--node[above] {$1$}(v3);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** A three-vertex path with unit edge weights, boundary vertices $1$ and $3$ with values 0 and 1, and unlabeled vertex 2.

[A1] $w_{12}=w_{21}=w_{23}=w_{32}=1$ and all other weights are zero.

[F1] [[def-graph-harmonic-label-extension]]: the extension minimizes $E(f)=\tfrac12 f^TLf$ over functions with the specified boundary values.

[F2] [[thm-graph-harmonic-extension-uniqueness-and-maximum-principle]]: for an anchored finite graph, the minimizer is unique and solves $f_U=-L_{UU}^{-1}L_{UB}y_B$.

## Verification

1.1 Here $U=\{2\}$, $L_{UU}=[2]$, $L_{UB}=[-1\ -1]$, and $y_B=(0,1)^T$. By [F2], $f_2=-[2]^{-1}((-1)0+(-1)1)=1/2$. [given, A1, F2, algebra]

2.1 For any candidate value $t=f_2$, the two edge contributions give $E(t)=\tfrac12(t^2+(1-t)^2)=\tfrac14+(t-\tfrac12)^2$. This is uniquely minimized at $t=1/2$ with energy $1/4$, confirming [F1] and [F2]. [given, A1, F1, F2, step 1.1, algebra] ∎
