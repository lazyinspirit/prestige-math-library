---
id: thm-hereditary-classes-have-a-unique-minimal-forbidden-basis
kind: theorem
title: "Every hereditary graph class is determined by its unique minimal forbidden induced subgraphs"
status: published
origin: session
deps: [def-minimal-forbidden-induced-subgraph, def-hereditary-graph-class, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, def-finite-cardinality, cor-cardinality-of-the-power-set, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

For every hereditary graph class $\mathcal C$ and every finite graph $G$,

$$G\in\mathcal C\quad\Longleftrightarrow\quad G\text{ is }\mathcal B(\mathcal C)\text{-free}.$$

If $\mathcal F$ is any forbidden induced-subgraph basis for $\mathcal C$, then for every $H\in\mathcal B(\mathcal C)$, the family $\mathcal F$ contains a graph isomorphic to $H$. Consequently, $\mathcal B(\mathcal C)$ is, up to isomorphism, the unique inclusion-minimal forbidden basis for $\mathcal C$.

## Facts & Assumptions

**Given:** A hereditary class $\mathcal C$ and a finite graph $G$.

[F1] Membership in $\mathcal C$ passes to induced subgraphs and is invariant under graph isomorphism ([[def-hereditary-graph-class]]).

[F2] $\mathcal B(\mathcal C)$ consists exactly of graphs outside $\mathcal C$ all of whose proper induced subgraphs lie in $\mathcal C$ ([[def-minimal-forbidden-induced-subgraph]]).

[F3] A finite vertex set has finitely many subsets, whose cardinalities are natural numbers; every nonempty set of natural numbers has a least element ([[def-finite-cardinality]], [[cor-cardinality-of-the-power-set]], [[thm-well-ordering-principle]]).

[F4] $\mathcal F$-free means containing no induced member of $\mathcal F$ ([[def-h-free-and-family-free-graph]]).

## Proof

**Proof technique:** direct.

1.1 If $G\in\mathcal C$, then no induced subgraph of $G$ lies outside $\mathcal C$, so in particular $G$ contains no member of $\mathcal B(\mathcal C)$. [F1, F2]

1.2 Suppose $G\notin\mathcal C$. Among vertex sets $W\subseteq V(G)$ for which $G[W]\notin\mathcal C$, choose one of least cardinality; it exists because $W=V(G)$ is available. [choose, F3]

1.3 Let $\mathcal F$ be any forbidden induced-subgraph basis for $\mathcal C$. Every $J\in\mathcal F$ lies outside $\mathcal C$: otherwise $J\in\mathcal C$ would contain itself as an induced copy of a member of $\mathcal F$, contradicting the defining equivalence for $\mathcal F$. [F4]

2.1 Every proper induced subgraph of $G[W]$ lies in $\mathcal C$ by minimality of $|W|$. Hence $G[W]\in\mathcal B(\mathcal C)$. [step 1.2, F2]

2.2 Fix $H\in\mathcal B(\mathcal C)$. Since $H\notin\mathcal C$, it is not $\mathcal F$-free, so some $J\in\mathcal F$ occurs as an induced subgraph of $H$. If that copy were proper, then it would lie in $\mathcal C$ by the minimality of $H$; closure under isomorphism would give $J\in\mathcal C$, contradicting step 1.3. Thus the copy uses all vertices of $H$, and $J\cong H$. [F1, F2, F4, step 1.3]

3.1 Thus $G$ is not $\mathcal B(\mathcal C)$-free. Together with step 1.1 this proves the equivalence. [step 2.1, step 1.1, F4]

4.1 Hence every forbidden basis for $\mathcal C$ contains, up to isomorphism, every member of $\mathcal B(\mathcal C)$. Since $\mathcal B(\mathcal C)$ is itself a basis by step 3.1, it is inclusion-minimal, and any inclusion-minimal forbidden basis has no additional members. This proves uniqueness up to isomorphism. [step 3.1, step 2.2] ∎
