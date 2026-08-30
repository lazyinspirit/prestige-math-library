---
id: thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound
kind: theorem
title: "The C5-free graphs satisfy a polynomial kappa bound"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree,
       thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb,
       lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle,
       prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical,
       def-clique-stable-set-and-numbers,
       def-kappa-of-a-graph,
       def-graph-isomorphism-and-complement,
       def-h-free-and-family-free-graph,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       thm-real-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 4.4"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, introductory C5 discussion"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

There exists a real $\tau>0$ such that every nonempty $C_5$-free graph $G$
satisfies

$$\kappa(G)\geq |V(G)|^\tau.$$

## Facts & Assumptions

**Given:** A nonempty $C_5$-free graph $G$.

[L1] For every graph $H$ and every real $\epsilon>0$, there exists
$\delta>0$ such that every nonempty $H$-free graph contains a linearly large
induced subgraph whose graph or complement has maximum degree at most
$\epsilon\delta|V(G)|$
([[cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree]]).

[L2] For every $\delta,\epsilon>0$ with $\epsilon<1/20$, there exists
$\tau_0>0$ such that every $\tau$-critical graph with
$0<\tau\leq \tau_0$ and every linearly large induced subgraph of maximum degree
at most $\epsilon\delta|V(G)|$ contains a rooted stable-tooth comb with at
least $1/(400\epsilon)$ teeth and block size at least
$\delta|V(G)|/(400\epsilon t^2)$
([[thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb]]).

[L3] A cross-edge between two different blocks of a rooted stable-tooth comb
creates an induced copy of $C_5$
([[lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle]]).

[L4] A minimal $C_5$-free counterexample to a bound of the form
$\kappa(G)\geq |V(G)|^\tau$ is $\tau$-critical
([[prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical]]).

[L5] For every graph $H$, $\kappa(H)=\alpha(H)\omega(H)$
([[def-kappa-of-a-graph]], [[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\epsilon$ with $0<\epsilon<1/400$. Apply [L1] with $H=C_5$ and this $\epsilon$ to obtain $\delta_0>0$. Set $\delta:=\min\{\delta_0,1\}/2$. Then every nonempty $C_5$-free graph has a set $X$ with $|X|\geq \delta|V(G)|$ such that one of $G[X]$ or $\overline G[X]$ has maximum degree at most $\epsilon\delta|V(G)|$. Let $\tau_0$ be the constant from [L2] for this pair $(\delta,\epsilon)$. Because $400\epsilon<1$, choose $\tau\in(0,\tau_0]\cap(0,1/2)$ so small that $(400\epsilon)^{2-1/\tau}>400\epsilon/\delta$. [L1, L2, choose]

1.2 Suppose for contradiction that some nonempty $C_5$-free graph satisfies $\kappa(G)<|V(G)|^\tau$. Choose such a graph of minimum order. Then [L4] makes it $\tau$-critical. [L4, assume-contra, choose]

2.1 Apply the last sentence of step 1.1 to this minimal counterexample. There is a set $X\subseteq V(G)$ with $|X|\geq \delta|V(G)|$ such that one of $G[X]$ or $\overline G[X]$ has maximum degree at most $\epsilon\delta|V(G)|$. If the low-degree graph is $\overline G[X]$, replace $G$ by its complement. This preserves the order, preserves $\kappa$ because complement swaps cliques and stable sets, preserves $\tau$-criticality because induced subgraphs and complements commute, and preserves $C_5$-freeness because $C_5\cong \overline{C_5}$. So after this replacement we may assume that $G[X]$ itself has maximum degree at most $\epsilon\delta|V(G)|$. [step 1.1, step 1.2, L5, algebra]

3.1 Apply [L2] to the $\tau$-critical graph $G$ and the set $X$. We obtain a rooted stable-tooth comb $\bigl(v,\ ((a_i,B_i):1\leq i\leq t)\bigr)$ in $G[X]$ such that $t\geq 1/(400\epsilon)$ and $|B_i|\geq \delta|V(G)|/(400\epsilon t^2)$ for each $i$. If some block $B_i$ meets another block $B_j$ by an edge, then [L3] gives an induced $C_5$ in $G$, impossible. Therefore the blocks $B_1,\dots,B_t$ are pairwise anticomplete. [step 2.1, L2, L3, discharge-contradiction]

4.1 Each $B_i$ is a proper induced subgraph of $G$, so $\tau$-criticality and [L5] give $|B_i|^\tau\leq \kappa(B_i)=\alpha(B_i)\omega(B_i)\leq \alpha(B_i)\omega(G)$. Hence $\alpha(B_i)\geq |B_i|^\tau/\omega(G)\geq \left(\delta|V(G)|/(400\epsilon t^2)\right)^\tau/\omega(G)$. [step 1.2, step 3.1, L5, algebra]

5.1 Because the blocks are pairwise anticomplete, stable sets chosen inside different $B_i$ may be united. Thus $\alpha(G)\geq \sum_{i=1}^t \alpha(B_i)\geq t\left(\delta|V(G)|/(400\epsilon t^2)\right)^\tau/\omega(G)$. Multiplying by $\omega(G)$ and using [L5], $\kappa(G)\geq t\left(\delta|V(G)|/(400\epsilon t^2)\right)^\tau$. Since step 1.2 assumes $\kappa(G)<|V(G)|^\tau$, cancelling $|V(G)|^\tau$ yields $400\epsilon/\delta>t^{1/\tau-2}$. [step 4.1, L5, algebra]

6.1 Step 3.1 gives $t\geq 1/(400\epsilon)$, and step 1.1 has $\tau<1/2$, so $1/\tau-2>0$. Therefore $t^{1/\tau-2}\geq (1/(400\epsilon))^{1/\tau-2}=(400\epsilon)^{2-1/\tau}$. Combining with step 5.1 gives $400\epsilon/\delta>(400\epsilon)^{2-1/\tau}$, contrary to step 1.1. This contradiction proves that no counterexample exists, so every nonempty $C_5$-free graph satisfies $\kappa(G)\geq |V(G)|^\tau$. [step 1.1, step 3.1, step 5.1, discharge-contradiction] ∎
