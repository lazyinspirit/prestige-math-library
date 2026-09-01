---
id: lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses
kind: lemma
title: "The auxiliary pattern then has a polynomial-size clique or stable set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, thm-complete-graph-free-classes-are-erdos-hajnal]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 2.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs. Assume one of the
following.

1. There exist $F_\star\in\mathcal F$ and an integer $t\ge1$ such that
   $F_\star$ is an induced subgraph of the $1$-subdivision of $K_{1,t}$.
2. There exist a graph $H$ on vertex set $[q]$ with $12\in E(H)$, with
   distinguished vertices $1,2$, such that $\{H\}\cup\overline{\mathcal F}$ has
   the Erdős-Hajnal property and $H^+$ is not $\overline{\mathcal F}$-free.
   Let $m$ be the maximum order of a graph in
   $\{H\}\cup\overline{\mathcal F}$.

Then there exists $c\in(0,1)$, depending only on $t$ in condition 1 and only
on $\{H\}\cup\overline{\mathcal F}$ in condition 2, with the following
property.

Let $a\in\mathbb R$, let $y\in(0,\tfrac12)$, let $G$ be a
$\overline{\mathcal F}$-free graph, and let $s$ be a positive integer. Let
$B_1,\dots,B_s\subseteq V(G)$ and $v\in V(G)\setminus\bigcup_{i=1}^s B_i$
satisfy the hypotheses of
[[lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph]]
with $\eta:=y^a$, and let $J$ be the corresponding auxiliary graph on $[s]$.
In condition 2, assume also that $a\ge m$.

Then $J$ has a clique or a stable set of size at least $|J|^c$.

## Facts & Assumptions

**Given:** The finite family $\mathcal F$, a chosen applicable obstruction condition, and arbitrary instance data $a,y,G,s,v,B_1,\dots,B_s,J$ satisfying the uniform assertion in the Statement.

[L1] A clique of size $t$ in $J$ lifts to an induced copy of the complement of the $1$-subdivision of $K_{1,t}$ in $G$. After relabelling the indices of an induced copy of a graph $F$ of order $r$ as $[r]$, that copy lifts block-by-block to an induced copy of $F$ in $G$ provided $(r-1)\eta<1$. If the copied graph is $H$ with $12\in E(H)$, then it lifts together with $v$ to an induced copy of $H^+$ provided $(q-1)\eta<\tfrac12$ ([[lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph]]).

[L2] For every integer $t\ge1$, the class of $K_t$-free graphs has the Erdős-Hajnal property ([[thm-complete-graph-free-classes-are-erdos-hajnal]]).

[L3] If a hereditary class has the Erdős-Hajnal property, then some $c>0$ satisfies $\operatorname{hom}(X)\ge |V(X)|^c$ for every nonempty graph $X$ in that class ([[def-erdos-hajnal-property-and-constant]]).

[L4] The homogeneous number is the maximum of the clique number and the stable set number ([[def-homogeneous-set-and-homogeneous-number]]).

## Proof

**Proof technique:** separate the star-subdivision and special-vertex cases.

1.1 [assume-case star] Assume condition 1, with $F_\star$ an induced subgraph of the $1$-subdivision of $K_{1,t}$. If $J$ had a clique of size $t$, then [L1] would give an induced copy of the complement of that $1$-subdivision in $G$. Because complementation preserves induced-subgraph containment, $\overline{F_\star}$ would then occur as an induced subgraph of $G$. But $\overline{F_\star}\in\overline{\mathcal F}$, contradicting that $G$ is $\overline{\mathcal F}$-free. So $J$ is $K_t$-free. [L1, given, contradiction: if $J$ had a $K_t$]

1.2 [assume-case special] Assume condition 2, and write $\mathcal G:=\{H\}\cup\overline{\mathcal F}$. By the Erdős-Hajnal property of $\mathcal G$, [L3] gives an Erdős-Hajnal constant $\epsilon>0$ for $\mathcal G$. Put $c:=\min\{\epsilon,\tfrac12\}\in(0,1)$. Then every nonempty $\mathcal G$-free graph $X$ satisfies $\operatorname{hom}(X)\ge |V(X)|^c$. [L3, given, algebra]

2.1 [assume-case star] By [L2] and [L3], the class of $K_t$-free graphs has an Erdős-Hajnal constant $\epsilon>0$. Put $c:=\min\{\epsilon,\tfrac12\}\in(0,1)$. Since $s\ge1$, the graph $J$ is nonempty, so applying the bound to the $K_t$-free graph $J$ from step 1.1 and then using [L4], $J$ has a clique or a stable set of size at least $|J|^c$. [step 1.1, L2, L3, L4, algebra]

2.2 [assume-case special] We claim that $J$ is $\mathcal G$-free. If $J$ contained an induced copy of some $F\in\overline{\mathcal F}$ with $r:=|V(F)|$, then $r\le m\le a$, so $(r-1)y^a\le(r-1)2^{-a}\le (r-1)2^{-r}<1$. Relabel the indices of that copy as $[r]$; [L1] then lifts it to an induced copy of $F$ in $G$, contradicting that $G$ is $\overline{\mathcal F}$-free. If $J$ contained an induced copy of $H$, relabel its indices as $[q]$. Since $q\le m\le a$ gives $(q-1)y^a<(q-1)2^{-a}\le (q-1)2^{-q}<\tfrac12$, [L1] lifts it to an induced copy of $H^+$ in $G$. Since $H^+$ is not $\overline{\mathcal F}$-free by hypothesis, that would again contradict the $\overline{\mathcal F}$-freeness of $G$. Hence $J$ is $\mathcal G$-free. [step 1.2, L1, contradiction: if $J$ contained a forbidden pattern]

3.1 [assume-case special] Since $s\ge1$, applying step 1.2 to the nonempty $\mathcal G$-free graph $J$ and then using [L4], we obtain a clique or a stable set in $J$ of size at least $|J|^c$. [step 1.2, step 2.2, L4, given]

4.1 Steps 2.1 and 3.1 cover the two hypotheses in the Statement. In the star case, $c$ depends only on $t$; in the special case, it depends only on $\mathcal G=\{H\}\cup\overline{\mathcal F}$. Thus the chosen $c$ is independent of $a,y,G,v$, and the blocks, and $J$ has a clique or a stable set of size at least $|J|^c$. [step 2.1, step 3.1, cases-exhaustive] ∎
