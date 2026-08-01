---
id: ex-directed-three-cycle-tournament
kind: example
title: "The directed $3$-cycle is a strongly connected tournament with a directed Hamilton cycle"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-tournament, thm-camion-strong-tournament-hamiltonian, def-directed-walk-trail-path-cycle-and-strong-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Tournament"
      url: "https://encyclopediaofmath.org/wiki/Tournament"
pipeline_run: null
---

## Example

Let $T$ have vertices $1,2,3$ and arcs

$$
1\to2,\qquad 2\to3,\qquad 3\to1.
$$

Then $T$ is a strongly connected tournament, and $1,2,3,1$ is a directed
Hamilton cycle.

```tikz
\begin{tikzpicture}[scale=1.0,>=stealth]
  \node[circle,draw,inner sep=2.5pt] (v1) at (0,1.8) {$1$};
  \node[circle,draw,inner sep=2.5pt] (v2) at (-1.6,0) {$2$};
  \node[circle,draw,inner sep=2.5pt] (v3) at (1.6,0) {$3$};
  \draw[->,very thick] (v1)--(v2);
  \draw[->,very thick] (v2)--(v3);
  \draw[->,very thick] (v3)--(v1);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The three explicitly displayed arcs.

[F1] A tournament has exactly one directed arc between each pair of distinct vertices ([[def-tournament]]).

[F2] Strong connectivity requires a directed path for each ordered vertex pair, and a directed Hamilton cycle visits every vertex once before returning ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

[L1] Camion's theorem gives a directed Hamilton cycle in every strong tournament of order at least three ([[thm-camion-strong-tournament-hamiltonian]]).

## Verification

**Proof technique:** direct.

1.1 The three arcs orient the three unordered vertex pairs exactly once, so $T$ is a tournament. The ordered pairs $(1,2),(2,3),(3,1)$ are joined directly, while $(2,1),(3,2),(1,3)$ are joined by the two-arc paths through the remaining vertex. Hence $T$ is strongly connected. [given, F1, F2]

1.2 The closed list $1,2,3,1$ follows the three arcs and visits every vertex once before returning, so it is a directed Hamilton cycle, as [L1] predicts. [given, F2, L1]

2.1 This verifies all three assertions in the example. [step 1.1, step 1.2] ∎
