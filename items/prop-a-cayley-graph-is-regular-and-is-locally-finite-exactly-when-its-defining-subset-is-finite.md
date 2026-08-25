---
id: prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite
kind: proposition
title: "Cayley-graph neighbourhoods are equipotent, and local finiteness is equivalent to finiteness of the symmetrised subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-finite-graph, def-cayley-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-finite-cardinality]
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

Let $G$ be a group, $S\subseteq G$, and
$S^{\pm}:=(S\cup S^{-1})\setminus\{e\}$. Left translation gives a bijection
between the neighbourhoods of any two vertices of $\operatorname{Cay}(G,S)$.
The graph is locally finite exactly when $S^{\pm}$ is finite; in that case it
is regular of finite degree $|S^{\pm}|$.

## Facts & Assumptions

**Given:** A group $G$, a subset $S\subseteq G$, and $S^{\pm}=(S\cup S^{-1})\setminus\{e\}$.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] A graph is locally finite when every vertex has finitely many neighbours ([[def-locally-finite-graph]]).

[L2] The **degree** of $v$ is $\deg_G(v):=|N_G(v)|$, equivalently the number of edges incident with $v$. A graph is **$r$-regular** when every vertex has degree $r$; it is **cubic** when it is $3$-regular. ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L3] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The neighbours of $g$ are the elements $gs$ with $s$ in the symmetrised set minus the identity, and left multiplication by $hg^{-1}$ is a bijection from the neighbours of $g$ to those of $h$. [F1, L2]

2.1 Thus one neighbourhood is finite exactly when all are, which occurs exactly when $S^{\pm}$ is finite. In that case the degree is defined at every vertex and equals $|S^{\pm}|$, so the graph is regular of that finite degree. [F1, L1, L2, L3, step 1.1] ∎
