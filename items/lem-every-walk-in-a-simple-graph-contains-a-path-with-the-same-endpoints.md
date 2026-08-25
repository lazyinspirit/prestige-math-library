---
id: lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints
kind: lemma
title: "Every walk contains a path between the same endpoints, of no greater length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, thm-well-ordering-principle]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

Every walk contains a path between the same endpoints, of no greater length.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A simple graph is a pair $(V,E)$ with $V$ any set and $E$ a set of two-element subsets of $V$ ([[def-simple-graph-without-a-finiteness-hypothesis]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$. ([[thm-well-ordering-principle]]).


## Proof

**Proof technique:** contradiction.

1.1 Among the walks from $u$ to $v$ of length at most that of the given one, the well-ordering principle selects one of least length. [F1, F2, L1, choose]

2.1 If a vertex occurred twice in the selected walk, deleting the segment between the two occurrences would give a shorter such walk, contradicting minimality. [F2, step 1.1, assume-contra]

3.1 So the selected walk repeats no vertex and is a path with the same endpoints and no greater length; finiteness of the vertex set is never used. [F2, step 1.1, step 2.1, discharge-contradiction] ∎
