---
id: ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank
kind: example
title: "The Cayley graph of $\\mathbb Z^n$ for the standard basis is the integer lattice, and its word metric is the sum of coordinate differences"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, def-word-length-with-respect-to-a-generating-set, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, def-free-abelian-group, lem-metrics-on-rn]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Example

The Cayley graph of $\mathbb Z^n$ for the standard basis is the integer lattice, and its word metric is the sum of coordinate differences.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A **free abelian group on a set $X$** is an abelian group $A(X)$ together with a map $i:X\to A(X)$ such that, for every abelian group $B$ and every function $u:X\to B$, there is a unique group homomorphism $\widehat u:A(X)\to B$ satisfying ([[def-free-abelian-group]]).

[L2] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L3] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L4] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L5] $$d_1(x,y):= \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y):= \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y):= \max\{\, |x_k - y_k|: k < n \,\}.$$ ([[lem-metrics-on-rn]]).


## Verification

**Proof technique:** direct.

1.1 With the standard basis as generating set, the neighbours of a tuple are those differing by one in a single coordinate, so the Cayley graph is the integer lattice. [F1, L1]

2.1 The word length of a tuple is the sum of the absolute values of its coordinates: that many steps suffice, and each step changes the sum by at most one. [L2, L3, L4, step 1.1]

3.1 So the word metric is the restriction of the $\ell^1$ metric, and the inclusion into that normed space is a quasi-isometry. [L3, L5, step 2.1] ∎
