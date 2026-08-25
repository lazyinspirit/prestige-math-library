---
id: ex-the-cayley-graph-and-word-metric-of-the-integers
kind: example
title: "The Cayley graph of $\\mathbb Z$ for the generating set $\\{1\\}$ is a line and its word metric is $|m-n|$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, def-word-length-with-respect-to-a-generating-set, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, lem-real-line-is-a-metric-space, def-free-abelian-group]
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

The Cayley graph of $\mathbb Z$ for the generating set $\{1\}$ is a line and its word metric is $|m-n|$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L3] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L4] Define $d_{\mathbb{R}}: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by $d_{\mathbb{R}}(x,y):= |x - y|$. ([[lem-real-line-is-a-metric-space]]).

[L5] A **free abelian group on a set $X$** is an abelian group $A(X)$ together with a map $i:X\to A(X)$ such that, for every abelian group $B$ and every function $u:X\to B$, there is a unique group homomorphism $\widehat u:A(X)\to B$ satisfying ([[def-free-abelian-group]]).


## Verification

**Proof technique:** direct.

1.1 With $S=\{1\}$ the symmetrised set is $\{1,-1\}$ and the edges join $n$ to $n\pm1$, so the Cayley graph is a two-way infinite path. [F1, L5]

2.1 The word length of $n$ is $|n|$, since $n$ is a product of $|n|$ copies of $1$ or of $-1$ and no shorter expression exists. [L1, L2, L3, step 1.1]

3.1 So the word metric is $d(m,n)=|m-n|$, the metric induced from the real line. [L2, L4, step 2.1] ∎
