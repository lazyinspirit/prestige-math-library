---
id: lem-active-routes-in-a-finite-dag-have-active-paths
kind: lemma
title: "Every active finite route contains an active path"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - def-d-separation-in-a-dag
proof_strategy: direct
axiom_use: "Only finite graph arguments and a minimum in the natural numbers are used; no choice axiom is used."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, \u00a72-1, pp. 671\u2013672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
dependency_level: 1
---

## Statement

In a finite DAG, a **route** is a finite sequence of vertices with consecutive vertices adjacent by an arrow in either direction; repeated vertices are allowed. Collider and noncollider status is assigned to each internal occurrence using its two incident route arrows. A route is **active given $C$** if each noncollider occurrence is outside $C$ and each collider occurrence is an ancestor of $C$, including membership in $C$. If an active route joins vertices $x,y\notin C$ with $x\ne y$, then an active distinct-vertex path joins $x$ and $y$ given $C$.

## Facts & Assumptions

[F1] The active-path criterion and finite acyclic graph conventions are those of [[def-d-separation-in-a-dag]].

## Proof

**Proof technique:** shorten repeated-vertex loops and check the only possible newly blocked junction.

**Given:** An active route from $x$ to $y$ and the hypotheses in the statement.

1.1 Among active routes with these endpoints choose one of minimum length. If a repeated vertex occurs at an endpoint, discard the initial segment through the later occurrence of $x$, or the terminal segment from the earlier occurrence of $y$. Endpoints are outside $C$, and all retained internal occurrences have their old incidences, so the shortened route is active. Consequently any repetition in a minimum route consists of two internal occurrences of a vertex $v$. Delete the segment between two such occurrences and identify them. Only the two incidences at the joined occurrence of $v$ change. If $v\in C$, its old occurrences were both colliders, so the joined occurrence is still a collider. If $v\notin C$ and the joined occurrence is a noncollider, it is allowed; if it is a collider and $v$ is an ancestor of $C$, it is also allowed. [given, F1, choose, construct]

2.1 The sole remaining possibility is that the join makes $v$ a collider although $v$ is not an ancestor of $C$. Both original occurrences were then noncolliders. The retained edge before the first occurrence points into $v$, so its deleted departure edge must point out of $v$; likewise the deleted arrival edge at the second occurrence points out of $v$, since its retained departure edge points into $v$. Traverse the deleted segment starting with its arrow out of $v$. There must be a first place where its arrows cease to point forward: the final arrow points backward, and an entirely forward return to $v$ would also contradict acyclicity. At that first change is a collider $w$, reached from $v$ by a directed segment. A directed segment in a DAG has no repetitions. Activity of the original route makes $w$ an ancestor of $C$, hence $v$ an ancestor of $C$, a contradiction. Thus every loop deletion above is active and strictly shorter, contradicting minimality. The minimum route is therefore a path. [F1, step 1.1, construct] ∎

## Source notes

Pearl's d-separation criterion supplies the occurrence-wise activity conditions. The loop-junction argument above is supplied locally; the source's statement of the moralization test is not used in place of this proof.


## Remarks

The following occurrence-wise schematic illustrates the junction in step 2.1. The two labels $v$ on the upper row denote the same graph vertex, visited twice; the row is a route, not a directed cycle. In this concrete configuration the deleted excursion is $v,p,w,q,v$, and $w$ is its first collider. All displayed vertices except the two occurrences of $v$ are distinct, and take $C=\{c\}$. Thus $w$ is active through $w\to c$, while $v$ is an ancestor of $C$ through $v\to p\to w\to c$. After deletion, the retained arrows form the collider $a\to v\leftarrow b$, which is therefore active too. The general proof allows arbitrary intermediate route segments and remains independent of this illustration.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node at (3.9,0.9) {Before deletion: two occurrences of the same vertex};
\node (a) at (0,0) {$a$};
\node (v1) at (1.3,0) {$v$};
\node (p) at (2.6,0) {$p$};
\node (w) at (3.9,0) {$w$};
\node (q) at (5.2,0) {$q$};
\node (v2) at (6.5,0) {$v$};
\node (b) at (7.8,0) {$b$};
\node (c) at (3.9,-1.4) {$c\in C$};
\draw[->] (a) -- (v1);
\draw[->] (v1) -- (p);
\draw[->] (p) -- (w);
\draw[->] (q) -- (w);
\draw[->] (v2) -- (q);
\draw[->] (b) -- (v2);
\draw[->] (w) -- (c);
\node at (3.9,-2.4) {After deletion: the joined occurrence is a collider};
\node (aa) at (2.6,-3.2) {$a$};
\node (vv) at (3.9,-3.2) {$v$};
\node (bb) at (5.2,-3.2) {$b$};
\draw[->] (aa) -- (vv);
\draw[->] (bb) -- (vv);
\end{tikzpicture}
```
