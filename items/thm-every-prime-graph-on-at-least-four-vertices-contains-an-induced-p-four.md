---
id: thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four
kind: theorem
title: "Every prime graph on at least four vertices contains an induced P_4"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime-graph,
       def-module-of-a-graph,
       thm-cographs-are-exactly-the-p-four-free-graphs,
       thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement,
       lem-unions-of-components-and-of-anticomponents-are-modules,
       cor-connected-components-partition-the-vertex-set,
       lem-anticonnected-components-are-complement-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Theorem 5.1 and Section 5.2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

If $G$ is a prime graph with at least four vertices, then $G$ contains an
induced copy of $P_4$.

## Facts & Assumptions

**Given:** A prime graph $G$ with $|V(G)|\geq 4$.

[L1] A prime graph has no nontrivial module
([[def-prime-graph]], [[def-module-of-a-graph]]).

[L2] A graph is a cograph if and only if it is $P_4$-free
([[thm-cographs-are-exactly-the-p-four-free-graphs]]).

[L3] Every nontrivial cograph is disconnected or has disconnected complement
([[thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement]]).

[L4] Every union of connected components is a module, and so is every union of
anticomponents
([[lem-unions-of-components-and-of-anticomponents-are-modules]]).

[F1] If a partition of a set with at least four elements has at least two
nonempty parts, then some proper union of its parts has cardinality between
$2$ and $|V(G)|-1$: either one part already has at least two elements, or else
all parts are singletons and the union of two of them does.

## Proof

**Proof technique:** direct.

1.1 Suppose for contradiction that $G$ contains no induced $P_4$. Then [L2] shows that $G$ is a cograph. Since $|V(G)|\geq 4$, the graph is nontrivial, so [L3] gives that $G$ is disconnected or $\overline G$ is disconnected. [L2, L3, given, assume-contra]

2.1 If $G$ is disconnected, its connected components form a partition of $V(G)$ into at least two nonempty parts. By [F1], choose a proper union $M$ of component vertex sets with $2\leq |M|\leq |V(G)|-1$. Then [L4] makes $M$ a module of $G$, and the cardinality bounds say that it is nontrivial. This contradicts [L1]. [step 1.1, L1, L4, F1, discharge-contradiction]

2.2 If $\overline G$ is disconnected, then the anticomponents of $G$ form a partition of $V(G)$ into at least two nonempty parts. Again [F1] gives a proper union $M$ of anticomponent vertex sets with $2\leq |M|\leq |V(G)|-1$, and [L4] makes $M$ a nontrivial module of $G$, contradicting [L1]. [step 1.1, L1, L4, F1, discharge-contradiction]

3.1 Both alternatives from step 1.1 are impossible, so the assumption was false. Therefore $G$ contains an induced copy of $P_4$. [step 2.1, step 2.2] ∎
