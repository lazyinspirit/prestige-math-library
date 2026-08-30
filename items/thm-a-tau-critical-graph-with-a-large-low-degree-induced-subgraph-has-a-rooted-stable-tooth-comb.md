---
id: thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb
kind: theorem
title: "A tau-critical graph with a large low-degree induced subgraph has a rooted stable-tooth comb"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side,
       def-rooted-stable-tooth-comb,
       def-tau-critical-graph,
       def-kappa-of-a-graph,
       def-clique-stable-set-and-numbers,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 3.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

For all reals $\delta,\epsilon>0$ with $\epsilon<1/20$, there exists
$\tau_0>0$ such that the following holds for every real $\tau$ with
$0<\tau\leq\tau_0$.

Let $G$ be a $\tau$-critical graph, and let $X\subseteq V(G)$ satisfy
$|X|\geq \delta|V(G)|$. Suppose the induced subgraph $G[X]$ has maximum degree
at most $\epsilon\delta|V(G)|$. Then there are:

1. an integer $t\geq 1/(400\epsilon)$;
2. vertices $a_1,\dots,a_t,v\in X$; and
3. pairwise disjoint sets $B_1,\dots,B_t\subseteq X$

such that

$$\bigl(v,\ ((a_i,B_i):1\leq i\leq t)\bigr)$$

is a rooted stable-tooth comb in $G[X]$, and each block satisfies

$$|B_i|\geq \frac{\delta|V(G)|}{400\epsilon t^2}.$$

## Facts & Assumptions

**Given:** Reals $\delta,\epsilon>0$ with $\epsilon<1/20$, a real $\tau\in(0,\tau_0]$, a $\tau$-critical graph $G$, and a set $X\subseteq V(G)$ with $|X|\geq \delta|V(G)|$ such that $G[X]$ has maximum degree at most $\epsilon\delta|V(G)|$.

[L1] If $G$ is $\tau$-critical, then $\kappa(G)<|V(G)|^\tau$, and every proper induced subgraph $H$ of $G$ satisfies $\kappa(H)\geq |V(H)|^\tau$ ([[def-tau-critical-graph]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L2] For every finite graph $H$, $\kappa(H)=\alpha(H)\omega(H)$ ([[def-kappa-of-a-graph]], [[def-clique-stable-set-and-numbers]]).

[L3] The bipartite theorem gives either a $(t,\Gamma t^{-2})$-comb when $d=1/2$, or the explicit bound $$|B|\leq \frac{3^{3/2}}{3/2-(3/2)^{1/2}}\Gamma^{1/2}\Delta^{1/2}$$ ([[thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side]]).

[L4] A rooted stable-tooth comb consists of a comb whose teeth form a stable set, together with a root adjacent to all teeth and anticomplete to all blocks ([[def-rooted-stable-tooth-comb]]).

## Proof

**Proof technique:** direct.

1.1 If $\delta>1$, then no nonempty graph can have a subset $X\subseteq V(G)$ with $|X|\geq \delta|V(G)|$, so the theorem is vacuous. Hence we may assume $\delta\leq 1$. Choose $\tau_0\in(0,1/2)$ so small that $\frac{2^{1-1/\tau_0}}{\delta}+\left(\epsilon+\frac{19}{20}\right)(\epsilon\delta)^{-\tau_0}<1$. Because $\epsilon\delta<1/20<1$, decreasing $\tau$ decreases both summands, so the same inequality holds for every $0<\tau\leq\tau_0$. [given, choose]

1.2 By [L1], $\kappa(G)<|V(G)|^\tau$. Since $\kappa(G)$ is a positive integer for every nonempty graph, it cannot equal $1$: otherwise [L2] would force $\alpha(G)=\omega(G)=1$, hence $|V(G)|=1$, contradicting $1<1^\tau$. Therefore $\kappa(G)\geq 2$, so $2<|V(G)|^\tau$ and hence $|V(G)|>2^{1/\tau}$. [L1, L2, algebra]

1.3 Set $X_0:=X$. As long as $X_{i-1}\neq\varnothing$, choose a vertex $v_i\in X_{i-1}$ of maximum degree in $G[X_{i-1}]$, let $A_i:=N_{G[X_{i-1}]}(v_i)$, choose a stable set $C_i\subseteq A_i$ with $|C_i|\geq |A_i|^\tau/\omega(G)$, and let $X_i$ be the set of vertices in $X_{i-1}\setminus\{v_i\}$ with no neighbour in $\{v_i\}\cup C_i$. This is possible because when $A_i\neq\varnothing$, the induced subgraph $G[A_i]$ is proper, so [L1] and [L2] give $\alpha(G[A_i])\geq \kappa(G[A_i])/\omega(G)\geq |A_i|^\tau/\omega(G)$. The process stops after finitely many steps because $v_i\notin X_i$, so $|X_i|<|X_{i-1}|$ whenever $X_{i-1}\neq\varnothing$. [L1, L2, choose]

2.1 For $i<j$, the set $X_j$ is contained in $X_i$, so by construction there are no edges from $\{v_i\}\cup C_i$ to $X_j$. Hence $v_1,\dots,v_s$ are pairwise nonadjacent, and $C_1\cup\cdots\cup C_s$ is stable. For each $i$, let $D_i$ be the set of vertices in $X_{i-1}\setminus(A_i\cup\{v_i\})$ that have a neighbour in $C_i$. Then $X=\{v_1,\dots,v_s\}\sqcup A_1\sqcup\cdots\sqcup A_s\sqcup D_1\sqcup\cdots\sqcup D_s$, because every vertex removed when passing from $X_{i-1}$ to $X_i$ is either $v_i$, a neighbour of $v_i$, or a vertex outside $A_i\cup\{v_i\}$ with a neighbour in $C_i$. [step 1.3, algebra]

3.1 Put $\gamma:=\delta/(400\epsilon)$. Fix $1\leq i\leq s$. If $A_i=\varnothing$, then $C_i=\varnothing$ and therefore $D_i=\varnothing$, so certainly $|D_i|\leq 19\sqrt{|A_i||X|/(400\epsilon)}$. Assume now that $A_i\neq\varnothing$. Every vertex of $D_i$ has a neighbour in $C_i$ by definition, and every vertex of $C_i$ has at most $|A_i|$ neighbours in $D_i$ because $v_i$ has maximum degree in $G[X_{i-1}]$ and $|A_i|=\deg_{G[X_{i-1}]}(v_i)$. Apply [L3] to the bipartite graph between $C_i$ and $D_i$ with $\Gamma:=\gamma|X|/\delta=|X|/(400\epsilon)$, $\Delta:=|A_i|$, and $d:=1/2$. If [L3] yields a $(t,\Gamma t^{-2})$-comb $((a_j,B_j):1\leq j\leq t)$ in $(C_i,D_i)$, then the blocks lie in $X$, the teeth lie in the stable set $C_i$, and $v_i$ is adjacent to every tooth and anticomplete to every block. Thus [L4] gives a rooted stable-tooth comb in $G[X]$. Also $t\Gamma t^{-2}\leq |X|$ because the $t$ disjoint blocks lie in $X$, so $t\geq 1/(400\epsilon)$, and $\Gamma t^{-2}=|X|/(400\epsilon t^2)\geq \delta|V(G)|/(400\epsilon t^2)$. Therefore the theorem is proved in this case. We may hence assume instead that $|D_i|\leq \frac{3^{3/2}}{3/2-(3/2)^{1/2}}\sqrt{|A_i||X|/(400\epsilon)}\leq 19\sqrt{|A_i||X|/(400\epsilon)}$. This bound now holds for every $1\leq i\leq s$. [step 2.1, L3, L4, algebra, cases]

3.2 Let $x_i:=|A_i|/|X|$. Since $C_1\cup\cdots\cup C_s$ is stable by step 2.1, its size is at most $\alpha(G)$. On the other hand, step 1.3 and [L1] give $|C_i|\geq |A_i|^\tau/\omega(G)=x_i^\tau |X|^\tau/\omega(G)\geq (x_i\delta)^\tau |V(G)|^\tau/\omega(G)>(x_i\delta)^\tau \alpha(G)$. Summing over $i$ and dividing by $\alpha(G)$ yields $\sum_{i=1}^s x_i^\tau<\delta^{-\tau}$. [step 1.3, step 2.1, L1, L2, algebra]

3.3 Since $v_1,\dots,v_s$ are stable by step 2.1, we have $\frac{s}{|X|}\leq \frac{\alpha(G)}{|X|}\leq \frac{\kappa(G)}{|X|}<\frac{|V(G)|^\tau}{|X|}\leq \frac{|V(G)|^{\tau-1}}{\delta}<\frac{2^{1-1/\tau}}{\delta}$, where the last inequality uses step 1.2. [step 1.2, step 2.1, L1, L2, algebra]

4.1 Because $X_{i-1}\subseteq X$ and $v_i$ has maximum degree in $G[X_{i-1}]$, we have $x_i=|A_i|/|X|\leq \epsilon\delta|V(G)|/|X|\leq \epsilon$. Hence $\sum_{i=1}^s x_i=\sum_{i=1}^s x_i^\tau x_i^{1-\tau}\leq \epsilon^{1-\tau}\sum_{i=1}^s x_i^\tau\leq \epsilon(\epsilon\delta)^{-\tau}$, and, because $\tau<1/2$, $\sum_{i=1}^s x_i^{1/2}=\sum_{i=1}^s x_i^\tau x_i^{1/2-\tau}\leq \epsilon^{1/2-\tau}\sum_{i=1}^s x_i^\tau\leq \epsilon^{1/2}(\epsilon\delta)^{-\tau}$. [step 3.2, given, algebra]

5.1 Divide the partition identity in step 2.1 by $|X|$. Using step 3.1 and the bound on $\sum x_i^{1/2}$ from step 4.1, we obtain $1=\frac{s}{|X|}+\sum_{i=1}^s x_i+\sum_{i=1}^s \frac{|D_i|}{|X|}\leq \frac{s}{|X|}+\epsilon(\epsilon\delta)^{-\tau}+\frac{19}{20}\epsilon^{-1/2}\sum_{i=1}^s x_i^{1/2}\leq \frac{s}{|X|}+\left(\epsilon+\frac{19}{20}\right)(\epsilon\delta)^{-\tau}$. Combining this with steps 1.1 and 3.3 gives $1<\frac{2^{1-1/\tau}}{\delta}+\left(\epsilon+\frac{19}{20}\right)(\epsilon\delta)^{-\tau}<1$, a contradiction. Therefore the comb outcome in step 3.1 must occur, and that outcome yields exactly the rooted stable-tooth comb asserted in the Statement. [step 1.1, step 3.3, step 4.1, discharge-contradiction] ∎
