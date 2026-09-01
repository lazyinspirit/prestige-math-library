---
id: lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph
kind: lemma
title: "Mixed anticonnected blocks lift pattern obstructions to the ambient graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge, def-anticonnected-graph-and-anticonnected-component, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs, def-h-plus-and-h-minus-for-two-special-vertices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 2.1 and Claim 2.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph, let $v\in V(G)$, and let
$B_1,\dots,B_s\subseteq V(G)\setminus\{v\}$ be pairwise disjoint nonempty sets.
Assume:

1. each $B_i$ is anticonnected;
2. $0<|N_G(v)\cap B_i|<\tfrac12|B_i|$ for each $i\in[s]$; and
3. for all distinct $i,j\in[s]$, either $B_i$ is complete to $B_j$, or both
   $B_i$ is $\eta$-sparse to $B_j$ and $B_j$ is $\eta$-sparse to $B_i$ for some
   real $\eta\ge0$.

Let $J$ be the graph on vertex set $[s]$ defined by

$$ij\in E(J)\quad\Longleftrightarrow\quad B_i\text{ is complete to }B_j.$$

Then:

1. if $X\subseteq[s]$ is a clique of size $t$ in $J$, then $G$ contains an
   induced copy of the complement of the $1$-subdivision of $K_{1,t}$;
2. if $F$ is a graph on vertex set $[q]$ with $q\le s$ and
   $(q-1)\eta<1$, and if $J[\{1,\dots,q\}]=F$, then $G$ contains an induced copy
   of $F$ with the vertex $i$ realized inside $B_i$ for every $i\in[q]$;
3. if $H$ is a graph on vertex set $[q]$ with $q\le s$, with distinguished
   vertices $1,2$ satisfying $12\in E(H)$ and $(q-1)\eta<\tfrac12$, and if
   $J[\{1,\dots,q\}]=H$, then $G$ contains an induced copy of $H^+$.

## Facts & Assumptions

**Given:** The graph $G$, the outside vertex $v$, the disjoint sets $B_1,\dots,B_s$, the parameter $\eta$, and the auxiliary graph $J$ from the Statement.

[L1] If $B_i$ is anticonnected and $0<|N_G(v)\cap B_i|<|B_i|$, then $v$ is mixed on $B_i$, so there exist nonadjacent $b_i,b_i'\in B_i$ such that $vb_i\in E(G)$ and $vb_i'\notin E(G)$ ([[lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge]]).

[L2] A complete pair has all cross-edges, while a mixed pair is neither complete nor anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L3] If $B_i$ is $\eta$-sparse to $B_j$, then every vertex of $B_i$ has at most $\eta|B_j|$ neighbours in $B_j$ ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

[L4] For adjacent distinguished vertices $1,2$ of $H$, the graph $H^+$ is obtained by adjoining a new vertex adjacent exactly to $1$ and $2$ ([[def-h-plus-and-h-minus-for-two-special-vertices]]).

## Proof

**Proof technique:** direct constructive lifting.

1.1 For each $i\in[s]$, apply [L1] to choose nonadjacent vertices $b_i,b_i'\in B_i$ with $vb_i\in E(G)$ and $vb_i'\notin E(G)$. [L1, given, choose]

1.2 Now assume $J[\{1,\dots,q\}]=F$ and $(q-1)\eta<1$. Choose $x_1\in B_1$ arbitrarily. Suppose $x_1,\dots,x_{j-1}$ have been chosen with $2\le j\le q$, so that for all $1\le i<k<j$ one has $x_ix_k\in E(G)$ if and only if $ik\in E(F)$. [given, construct]

1.3 Assume instead that $J[\{1,\dots,q\}]=H$, that $12\in E(H)$, and that $(q-1)\eta<\tfrac12$. Because $0<|N_G(v)\cap B_i|$ for $i=1,2$, choose $x_1\in B_1$ and $x_2\in B_2$ adjacent to $v$. Since $12\in E(H)=E(J[\{1,\dots,q\}])$, the pair $(B_1,B_2)$ is complete, so $x_1x_2\in E(G)$. Suppose now that $x_1,\dots,x_{j-1}$ have been chosen with $3\le j\le q$ so that $vx_1,vx_2\in E(G)$, $vx_i\notin E(G)$ for $3\le i<j$, and $x_ix_k\in E(G)$ if and only if $ik\in E(H)$ for all $1\le i<k<j$. [given, choose]

2.1 Let $X=\{i_1,\dots,i_t\}$ be a clique in $J$. By definition of $J$, the pairs $(B_{i_r},B_{i_u})$ are complete for all $r\ne u$, so every vertex chosen from one selected block is adjacent to every vertex chosen from another selected block. Together with step 1.1, this shows that on the vertex set $\{v,b_{i_1},b_{i_1}',\dots,b_{i_t},b_{i_t}'\}$ the only nonedges are $vb_{i_r}'$ and $b_{i_r}b_{i_r}'$ for $r\in[t]$. That is exactly the nonedge pattern of the complement of the $1$-subdivision of $K_{1,t}$, with $v$ as the complemented center, $b_{i_r}'$ as the subdivision vertex, and $b_{i_r}$ as the corresponding leaf. [step 1.1, L2, construct]

2.2 For each $i<j$ with $ij\notin E(F)=E(J[\{1,\dots,q\}])$, the pair $(B_i,B_j)$ is not complete, so hypothesis 3 and [L3] imply that $x_i$ has at most $\eta|B_j|$ neighbours in $B_j$. Therefore at most $(j-1)\eta|B_j|$ vertices of $B_j$ violate one of the required nonadjacency conditions to the previously chosen vertices. Since $(q-1)\eta<1$ and $j-1\le q-1$, some vertex $x_j\in B_j$ avoids all those forbidden sets. For such a choice, every required edge holds automatically because whenever $ij\in E(F)=E(J)$ the pair $(B_i,B_j)$ is complete. [step 1.2, L2, L3, choose]

3.1 By induction on $j$, steps 1.2 and 2.2 produce vertices $x_1,\dots,x_q$ with $x_ix_j\in E(G)$ if and only if $ij\in E(F)$ for all distinct $i,j\in[q]$. Hence $G[\{x_1,\dots,x_q\}]$ is an induced copy of $F$. This proves assertion 2. [step 1.2, step 2.2, induction]

4.1 For $j\ge3$, hypothesis 2 gives fewer than $\tfrac12|B_j|$ neighbours of $v$ in $B_j$, so more than $\tfrac12|B_j|$ vertices of $B_j$ are nonadjacent to $v$. As in step 2.2, the nonedge requirements to the previously chosen $x_i$ exclude at most $(j-1)\eta|B_j|<(q-1)\eta|B_j|<\tfrac12|B_j|$ further vertices. Hence some $x_j\in B_j$ is simultaneously nonadjacent to $v$ and satisfies $x_ix_j\in E(G)$ if and only if $ij\in E(H)$ for every $i<j$. Inducting on $j$ produces vertices $x_1,\dots,x_q$ such that the old vertices induce $H$, the new vertex $v$ is adjacent exactly to $x_1$ and $x_2$, and therefore $G[\{v,x_1,\dots,x_q\}]$ is an induced copy of $H^+$ by [L4]. This proves assertion 3. [step 1.3, L3, L4, discharge-construct] ∎
