---
id: lem-the-e-graph-and-the-bird-graph-are-wonderful
kind: lemma
title: "The $E$-graph and the Bird graph are wonderful"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bird-graph-and-co-bird-graph, def-e-graph-and-co-e-graph, def-h-plus-and-h-minus-for-two-special-vertices, lem-star-or-special-vertex-obstructions-force-wonderfulness, thm-substitution-preserves-the-erdos-hajnal-property, thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.2 and Figure 6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

The singleton families $\{E\}$ and $\{\mathrm{Bird}\}$ are wonderful.
Equivalently, the $E$-graph and the Bird graph are wonderful.

## Facts & Assumptions

**Given:** The $E$-graph, the Bird graph, and the wonderfulness criterion.

[L1] A finite family is wonderful if it satisfies either the star-subdivision
obstruction or the special-vertex obstruction from the previous criterion
([[lem-star-or-special-vertex-obstructions-force-wonderfulness]]).

[L2] Every graph on at most five vertices has the Erdős-Hajnal property
([[thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property]]).

[L3] Substitution preserves the Erdős-Hajnal property
([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[L4] The Bird graph and co-Bird are complements of one another, and $H^+$ is the
graph obtained by adding a new vertex adjacent exactly to the two distinguished
vertices
([[def-bird-graph-and-co-bird-graph]], [[def-h-plus-and-h-minus-for-two-special-vertices]]).

[A1] Let $H$ be the graph on vertices $v_1,\dots,v_6$ with edge set
$$ \{v_1v_2,v_1v_3,v_1v_5,v_1v_6,v_2v_3,v_2v_4,v_2v_5,v_3v_5,v_4v_5,v_4v_6\}. $$
Its distinguished vertices are $v_1$ and $v_2$.

## Proof

**Proof technique:** verify the two criterion inputs explicitly.

1.1 For the $E$-graph, take the $1$-subdivision of $K_{1,3}$ with center $c$, subdivision vertices $s_1,s_2,s_3$, and leaves $t_1,t_2,t_3$. On the six-vertex subset $\{t_1,s_1,c,s_2,t_2,s_3\}$, the induced edges are $t_1s_1$, $s_1c$, $cs_2$, $s_2t_2$, and $cs_3$, which is exactly the edge set of the $E$-graph from [[def-e-graph-and-co-e-graph]]. Thus $E$ is an induced subgraph of the $1$-subdivision of $K_{1,3}$, so [L1] makes $\{E\}$ wonderful. [L1, given, construct]

1.2 In the graph $H$ from [A1], the vertices $v_2$ and $v_5$ are adjacent to each other and both have the same neighbourhood outside $\{v_2,v_5\}$, namely $\{v_1,v_3,v_4\}$. Hence $\{v_2,v_5\}$ is a homogeneous clique. Let $Q$ be the five-vertex graph on $\{x,v_1,v_3,v_4,v_6\}$ with edge set $\{xv_1,xv_3,xv_4,v_1v_3,v_1v_6,v_4v_6\}$. Then $H$ is obtained from $Q$ by substituting $K_2$ for the vertex $x$. By [L2], both $Q$ and $K_2$ have the Erdős-Hajnal property, so [L3] gives the Erdős-Hajnal property for $H$. [A1, L2, L3]

1.3 Form $H^+$ from [A1] by adjoining a new vertex $v$ adjacent to $v_1$ and $v_2$, and delete $v_3$. On the remaining six vertices $\{v,v_1,v_2,v_4,v_5,v_6\}$ the edge set is $\{vv_1,vv_2,v_1v_2,v_1v_5,v_1v_6,v_2v_4,v_2v_5,v_4v_5,v_4v_6\}$. Under the relabelling $x_1=v$, $x_2=v_6$, $x_3=v_5$, $y=v_4$, $z=v_2$, and $w=v_1$, the six missing edges are exactly $x_1x_2$, $x_1x_3$, $x_2x_3$, $x_1y$, $x_2z$, and $yw$, which are precisely the Bird edges. Therefore $H^+-v_3$ is co-Bird, so $H^+$ is not co-Bird-free. [A1, L4, algebra]

2.1 Step 1.2 shows that $\{H\}\cup\{\mathrm{co\text{-}Bird}\}$ has the Erdős-Hajnal property, and step 1.3 shows that $H^+$ is not co-Bird-free. Therefore [L1] applies to the singleton family $\{\mathrm{Bird}\}$ and proves that Bird is wonderful. Together with step 1.1, this proves the statement. [L1, step 1.1, step 1.2, step 1.3] ∎
