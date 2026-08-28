---
id: ex-a-two-block-pure-blockade-has-additive-kappa
kind: example
title: "A two-block pure blockade can realize equality in the additive kappa theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-pure-blockades-with-cograph-patterns-have-additive-kappa,
       def-pattern-graph-of-a-pure-blockade,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-kappa-of-a-graph,
       def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Theorem 5.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

Equality can occur in the additive $\kappa$ theorem for a two-block pure
blockade.

## Facts & Assumptions

**Given:** The complete graph $K_5$ on vertices
$a_1,a_2,b_1,b_2,b_3$, with blocks $A:=\{a_1,a_2\}$ and
$B:=\{b_1,b_2,b_3\}$.

[L1] The pattern graph of a pure blockade records an edge exactly when the two
corresponding blocks are complete
([[def-pattern-graph-of-a-pure-blockade]]).

[L2] A clique on $m$ vertices has $\omega=m$, $\alpha=1$, and therefore
$\kappa=m$
([[def-clique-stable-set-and-numbers]], [[def-kappa-of-a-graph]]).

[L3] The additive $\kappa$ theorem states that a pure blockade with cograph
pattern satisfies
$\kappa(G[V(\mathcal B)])\geq \sum_i\kappa(G[B_i])$
([[thm-pure-blockades-with-cograph-patterns-have-additive-kappa]]).

## Verification

**Proof technique:** direct computation.

1.1 The blockade $(A,B)$ is pure, and the two blocks are complete to each other because the ambient graph is $K_5$. Hence its pattern graph is $K_2$, which is a cograph. [L1, given]

1.2 The induced subgraphs on $A$, on $B$, and on $A\cup B$ are respectively $K_2$, $K_3$, and $K_5$. By [L2], $\kappa(G[A])=2,\qquad \kappa(G[B])=3,\qquad \kappa(G[A\cup B])=5.$ So $\kappa(G[A\cup B])=\kappa(G[A])+\kappa(G[B]).$ [L2]

2.1 Thus this two-block pure blockade attains equality in the inequality from [L3]. [step 1.1, step 1.2, L3] ∎
