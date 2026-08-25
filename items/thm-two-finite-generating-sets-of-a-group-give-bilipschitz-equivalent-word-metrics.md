---
id: thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics
kind: theorem
title: "The identity map between the word metrics of two finite generating sets is a bilipschitz equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-group, def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, def-bilipschitz-embedding-and-bilipschitz-equivalence, def-equivalent-metrics, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
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

The identity map between the word metrics of two finite generating sets is a bilipschitz equivalence.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L3] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L4] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L5] - $d$ and $d'$ are **topologically equivalent** if they have the same metric topology: $$\mathcal{T}_d = \mathcal{T}_{d'}.$$ - $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$ there are reals $\delta > 0$ and $\delta' > 0$ such that, for all $x, y \in X$, $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon.$$ - $d$ and $d'$ are **Lipschitz equivalent** if there are reals $\alpha, \beta > 0$ with $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X.$$ ([[def-equivalent-metrics]]).

[L6] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L7] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).


## Proof

**Proof technique:** direct.

1.1 Let $c$ be the largest word length in the second metric of a member of the first symmetrised set; finiteness of that set is exactly what makes the maximum exist. [F1, L1, L6, L7, choose]

2.1 Expanding an element of length $n$ in the first metric and applying the triangle inequality along the expression bounds its second length by $cn$. [F1, L1, L2, L3, step 1.1]

3.1 Exchanging the roles of the two sets gives the reverse inequality, so the identity is a bilipschitz equivalence and the two metrics are Lipschitz equivalent. [F1, L4, L5, step 2.1] ∎
