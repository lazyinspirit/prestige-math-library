---
id: ex-random-walk-on-a-finite-undirected-graph-is-reversible
kind: example
title: "Random walk on a finite undirected graph is reversible"
status: draft
origin: pipeline
landmark: false
deps:
  - def-finite-simple-graph
  - def-connected-graph-and-connected-component
  - def-graph-adjacency-incidence-neighbourhood-and-degree
  - thm-handshake-lemma-for-finite-simple-graphs
  - def-reversible-measure-and-detailed-balance
  - lem-detailed-balance-implies-invariance
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §1.4 and Example 1.12, printed pp. 8–10 / PDF pp. 24–26"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Example

Let $G=(V,E)$ be a finite connected undirected simple graph with at least one
edge ([[def-finite-simple-graph]]). Simple random walk on $G$ has

$$P(v,w)=\begin{cases}\dfrac1{\deg_G(v)},&\{v,w\}\in E,\\[2pt]0,&\text{otherwise,}\end{cases}$$

and $\pi(v)=\deg_G(v)/(2|E|)$ is a reversible probability distribution for
$P$, hence invariant
([[def-reversible-measure-and-detailed-balance]],
[[lem-detailed-balance-implies-invariance]]).

## Facts & Assumptions

**Given:** A finite connected simple graph $G=(V,E)$ with $|E|\ge1$, the degree function $\deg_G$, and the displayed walk $P$.

[F1] A finite simple graph is an ordered pair $(V,E)$ with $V$ finite and $E\subseteq[V]^2=\{\{u,v\}\subseteq V:u\ne v\}$; every edge has two distinct endpoints and there are no loops. ([[def-finite-simple-graph]])

[F2] Distinct vertices $u,v$ are adjacent when $\{u,v\}\in E$; $N_G(v)=\{u\in V:\{u,v\}\in E\}$ is the open neighbourhood and $\deg_G(v)=|N_G(v)|$ the degree. ([[def-graph-adjacency-incidence-neighbourhood-and-degree]])

[F3] For every finite simple graph, $\sum_{v\in V}\deg_G(v)=2|E|$. ([[thm-handshake-lemma-for-finite-simple-graphs]])

[F4] A state measure $\mu:E\to[0,+\infty)$ with $\mu(x)<+\infty$ satisfies detailed balance for $p$ when $\mu(x)p(x,y)=\mu(y)p(y,x)$ for all $x,y$; it is a reversible probability distribution when additionally $\sum_x\mu(x)=1$. ([[def-reversible-measure-and-detailed-balance]])

[F5] Any finite-point-mass nonnegative measure satisfying detailed balance for a countable transition matrix satisfies $\mu p=\mu$; a reversible probability distribution is therefore invariant. ([[lem-detailed-balance-implies-invariance]])

[F6] A graph is connected when its vertex set is nonempty and every two vertices are joined by a path, equivalently a walk. Its connected component is the induced subgraph on the vertices reachable from a given vertex. ([[def-connected-graph-and-connected-component]])

## Verification

**Given:** A finite connected simple graph $G=(V,E)$ with $|E|\ge1$ and the walk $P(v,w)=1/\deg_G(v)$ on edges with no loops.

**Proof technique:** check positivity of the degrees, normalize the degree measure by the handshake lemma, verify detailed balance on edges and nonedges, and invoke the general detailed-balance lemma.

1.1 Every vertex has $\deg_G(v)\ge1$: if some $v$ had $\deg_G(v)=0$ then, by [F2], $v$ is adjacent to no vertex; if $|V|=1$ then $E=\varnothing$ by [F1], contradicting $|E|\ge1$, and if $|V|\ge2$ then $v$ cannot be joined to any other vertex by a walk, contradicting connectedness. Hence $P$ is well defined and $P(v,w)\ge0$ for all $v,w$. [F1, F2, F6, given]

2.1 The rows of $P$ sum to one: $\sum_{w\in V}P(v,w)=|N_G(v)|/\deg_G(v)=1$ for every $v$, since the only nonzero entries are over the neighbors and $P(v,v)=0$ because there are no loops; thus $P$ is a transition matrix. [F1, F2, step 1.1, given]

2.2 The measure $\pi(v):=\deg_G(v)/(2|E|)$ is a probability vector: it is nonnegative, $\sum_{v\in V}\pi(v)=\frac{1}{2|E|}\sum_v\deg_G(v)=1$ by [F3], and $2|E|\ge2>0$; moreover $\pi(v)>0$ for every $v$ by step 1.1, so $\pi$ is finite-valued on the finite set $V$. [F3, step 1.1, given]

3.1 Detailed balance holds. If $\{v,w\}\in E$ then $\pi(v)P(v,w)=\frac{\deg_G(v)}{2|E|}\cdot\frac1{\deg_G(v)}=\frac1{2|E|}$ and likewise $\pi(w)P(w,v)=\frac1{2|E|}$, using $\deg_G(v),\deg_G(w)>0$; if $v\ne w$ and $\{v,w\}\notin E$ then $P(v,w)=P(w,v)=0$ so both sides vanish; and for $v=w$ both sides are $\pi(v)P(v,v)=0$ since $P(v,v)=0$. [F2, step 2.2, algebra]

4.1 By [F4] the identity of step 3.1 makes $\pi$ a reversible probability distribution for $P$, and [F5] then gives $\pi P=\pi$, so $\pi$ is invariant. [F4, F5, step 3.1, given]

5.1 Boundary and scope cases: the one-vertex edgeless graph is excluded because then $|E|=0$, the normalizer $2|E|$ vanishes and the displayed transition row would divide by the degree $0$; a graph with several connected components is not covered by the connectivity hypothesis, although the same computation applies to each component containing an edge, with its own positive degree normalizer. An isolated-vertex component has degree zero, so neither displayed formula defines a walk or probability there; a separate absorbing-row convention would give its point mass as a reversible law; the walk has no holding probability, so $P(v,v)=0$ and the diagonal detailed-balance identity is $0=0$; irreducibility of the walk follows from connectedness but is not needed for reversibility; and no choice principle is used, all objects being determined by the finite graph. [F3, F4, F6, step 1.1, step 4.1, given] ∎
