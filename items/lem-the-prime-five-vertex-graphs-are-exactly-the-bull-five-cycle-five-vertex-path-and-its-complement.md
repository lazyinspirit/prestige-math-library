---
id: lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement
kind: lemma
title: "The prime five-vertex graphs are exactly the bull, $C_5$, $P_5$, and $\\overline{P_5}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four, def-prime-graph, def-module-of-a-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-bull-graph, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture — A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

A finite graph on five vertices is prime if and only if it is isomorphic to one
of the following four graphs: the bull, $C_5$, $P_5$, or $\overline{P_5}$.

## Facts & Assumptions

**Given:** A finite graph $G$ with $|V(G)|=5$.

[L1] Every prime graph on at least four vertices contains an induced $P_4$ ([[thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four]]).

[L2] A graph is prime exactly when it has no nontrivial module ([[def-prime-graph]], [[def-module-of-a-graph]]).

[L3] The standard graphs $P_5$ and $C_5$ have their usual path and cycle edge sets, and graph complementation replaces edges by the missing pairs ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[def-graph-isomorphism-and-complement]]).

[L4] The bull is the graph obtained from a triangle by attaching leaves to two distinct triangle vertices ([[def-bull-graph]]).

[F1] A vertex set is a module of $G$ if and only if it is a module of $\overline G$, because an outside vertex is complete or anticomplete to the set in $G$ exactly when it is anticomplete or complete to it in $\overline G$.

## Proof

**Proof technique:** cases.

1.1 [assume-case forward] Assume first that $G$ is prime. By [L1], there is an induced path $p_1p_2p_3p_4$ in $G$. Let $x$ be the fifth vertex. We classify the neighbourhood $N_G(x)\cap\{p_1,p_2,p_3,p_4\}$. [L1, given, choose, cases]

1.2 [assume-case reverse] Conversely, each of the listed graphs is prime. For $P_5$ on vertices $1,2,3,4,5$ in path order, every nontrivial proper subset is split by an outside vertex: the pairs $\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{1,3\},\{1,4\},\{1,5\},\{2,4\},\{2,5\},\{3,5\}$ are split respectively by $3,1,2,3,4,3,2,1,4,2$, and the triples $\{1,2,3\},\{1,2,4\},\{1,2,5\},\{1,3,4\},\{1,3,5\},\{1,4,5\},\{2,3,4\},\{2,3,5\},\{2,4,5\},\{3,4,5\}$ are split respectively by $4,3,3,2,4,3,1,1,3,2$; every four-vertex subset is split by the omitted vertex. For $C_5$, by cyclic symmetry, adjacent pairs are split by a neighbour of exactly one of them, nonadjacent pairs are split by their common neighbour, consecutive triples are split by the next cycle vertex, the other triple type is split by the middle omitted vertex, and a four-vertex subset is split by the omitted vertex. For the bull, writing the triangle as $a,b,c$ with leaves $y$ at $a$ and $z$ at $b$, every nontrivial proper subset is again split by an outside vertex: for instance $\{a,y\}$ by $b$, $\{b,y\}$ by $z$, $\{a,b\}$ by $y$, $\{c,y\}$ by $b$, $\{a,b,c\}$ by $y$, $\{a,b,y\}$ by $c$, and $\{a,y,z\}$ by $b$; the remaining cases follow by the automorphism swapping $(a,y)$ with $(b,z)$ or by the omitted vertex when the subset has size four. Thus $P_5$, $C_5$, and the bull have no nontrivial modules, so [L2] makes them prime; then [F1] gives the same for $\overline{P_5}$. [L2, F1, L3, L4, cases]

2.1 If $x$ has no neighbours on the path, then $x$ is isolated, so the four path vertices form a nontrivial module. If $x$ has all four path vertices as neighbours, then $x$ is isolated in the complement, and [F1] again gives a nontrivial module. Both cases contradict [L2]. [step 1.1, L2, F1, cases]

2.2 If $x$ has exactly one neighbour, then either that neighbour is an endpoint or an internal path vertex. In the endpoint case, say $N_G(x)=\{p_1\}$, the order $x,p_1,p_2,p_3,p_4$ is a $P_5$. In the internal case, say $N_G(x)=\{p_2\}$, the set $\{p_1,x\}$ is a nontrivial module, since every other vertex is complete or anticomplete to that pair. Thus the only prime one-neighbour case is $P_5$. [step 1.1, L2, L3, cases]

2.3 If $x$ has exactly two neighbours, there are four patterns up to reversing the path: $\{p_1,p_2\}$, $\{p_1,p_3\}$, $\{p_1,p_4\}$, and $\{p_2,p_3\}$. For $\{p_1,p_2\}$ the set $\{p_1,x\}$ is a module; for $\{p_1,p_3\}$ the set $\{p_2,x\}$ is a module; for $\{p_1,p_4\}$ the cycle $x,p_1,p_2,p_3,p_4,x$ is a $C_5$; and for $\{p_2,p_3\}$ the vertices $p_1,p_2,p_3,x,p_4$ form a bull, with triangle $p_2p_3x$ and leaves $p_1,p_4$. Hence the only prime two-neighbour cases are $C_5$ and the bull. [step 1.1, L2, L3, L4, cases]

2.4 If $x$ has exactly three neighbours, then exactly one path vertex is a non-neighbour. When that non-neighbour is an endpoint, say $p_1$, the set $\{p_3,x\}$ is a nontrivial module. When the unique non-neighbour is internal, say $p_3$, the order $p_2,p_4,p_1,p_3,x$ is an induced $\overline{P_5}$ by [L3]. Therefore the only prime three-neighbour case is $\overline{P_5}$. [step 1.1, L2, L3, cases]

3.1 Steps 2.1 through 2.4 exhaust all neighbourhood sizes of $x$, so every prime five-vertex graph is isomorphic to the bull, $C_5$, $P_5$, or $\overline{P_5}$. [step 2.1, step 2.2, step 2.3, step 2.4, cases-exhaustive]

4.1 Step 3.1 proves the forward direction and step 1.2 proves the reverse direction, so the stated equivalence holds. [step 3.1, step 1.2] ∎
