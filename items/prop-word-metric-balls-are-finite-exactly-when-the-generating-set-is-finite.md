---
id: prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite
kind: proposition
title: "Balls of a word metric are finite if and only if the generating set is finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-balls-in-a-connected-locally-finite-graph-are-finite, def-finitely-generated-group, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite, def-word-length-with-respect-to-a-generating-set, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, def-metric-ball, def-finite-cardinality, thm-product-rule]
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
## Statement

Balls of a word metric are finite if and only if the generating set is finite.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L3] In a locally finite connected graph every ball of the path metric is finite ([[lem-balls-in-a-connected-locally-finite-graph-are-finite]]).

[L4] Every vertex of a Cayley graph has the same degree, and the graph is locally finite exactly when the symmetrised generating set is finite ([[prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite]]).

[L5] $B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. ([[def-metric-ball]]).

[L6] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).

[L7] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L8] Write $$\prod_{i<m} A_i:= \{\, f: f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$ Then $\prod_{i<m} A_i$ is finite and $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the right-hand product being the $\mathbb{N}$-valued one of. ([[thm-product-rule]]).


## Proof

**Proof technique:** direct.

1.1 If $S$ is finite the Cayley graph is locally finite, so balls of its path metric are finite; left invariance moves this to every centre. [F1, L1, L2, L3, L4, L5, L6, L7, L8]

2.1 If $S$ is infinite then the open ball of radius $2$ about the identity contains every element of $S\cup S^{-1}$, because each such element has word length $1$; so that ball is infinite. [F1, L1, L4, L5, L6, step 1.1] ∎
