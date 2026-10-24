---
id: ex-transitive-tournament-has-no-directed-cycle
kind: example
title: "A transitive tournament has a directed Hamilton path and no directed cycle"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-tournament, thm-redei-tournament-hamilton-path, def-directed-walk-trail-path-cycle-and-strong-connectivity]
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

On $V=\{1,2,\ldots,n\}$ with $n\ge1$, orient the edge between $i$ and $j$ as
$i\to j$ exactly when $i<j$. This transitive tournament has the directed
Hamilton path $1,2,\ldots,n$ and has no directed cycle.

```tikz
\begin{tikzpicture}[scale=1.0,>=stealth]
  \node[circle,draw,inner sep=2.5pt] (v1) at (0,0) {$1$};
  \node[circle,draw,inner sep=2.5pt] (v2) at (1.6,0) {$2$};
  \node[circle,draw,inner sep=2.5pt] (v3) at (3.2,0) {$3$};
  \node[circle,draw,inner sep=2.5pt] (v4) at (4.8,0) {$4$};
  \draw[->,very thick] (v1)--(v2);
  \draw[->,very thick] (v2)--(v3);
  \draw[->,very thick] (v3)--(v4);
  \draw[->] (v1) to[bend left=28] (v3);
  \draw[->] (v2) to[bend left=28] (v4);
  \draw[->] (v1) to[bend left=45] (v4);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed orientation of the complete graph on $V$.

[F1] A tournament chooses exactly one arc direction between each distinct pair ([[def-tournament]]).

[F2] Directed paths and cycles must follow all displayed arc directions ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

[L1] Every nonempty tournament has a directed Hamilton path ([[thm-redei-tournament-hamilton-path]]).

## Verification

**Proof technique:** direct.

1.1 For each distinct pair $i,j$, exactly one of $i<j$ and $j<i$ holds, so the construction is a tournament by [F1]. Each arc in the list $1,2,\ldots,n$ points forward, and the list contains every vertex once, so it is a directed Hamilton path, explicitly realizing [L1]. [given, F1, F2, L1]

1.2 Along every directed walk in this tournament, the vertex label strictly increases at each positive-length step. Such a walk cannot return to its initial label, so no directed cycle exists. [given, F2]

2.1 Thus a tournament may have a directed Hamilton path while having no directed cycle. [step 1.1, step 1.2] ∎
