---
id: lem-csm-frontier-fk-fkg-spatial-markov
kind: lemma
title: "Finite FK association, spatial Markov property, and boundary monotonicity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps: [def-csm-frontier-fk-real-boundaries, def-multigraph-loop-and-digraph]
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  def-multigraph-loop-and-digraph: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 1, finite FK conditional laws and positive association; Section 3, monotonicity and influence formula."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 3 §§3.2–3.4, FKG association, differential formula, and comparison inequalities."
verification:
  precheck: pass
---

## Statement

For every finite undirected multigraph $G=(V,E,\partial)$, boundary set $B\subseteq V$, boundary partition $\xi$ on $B$, $q\geq1$, and $p\in(0,1)$, the finite FK law defined by the stated finite weights is strictly positive and log-supermodular on the Boolean lattice $2^E$: for $A,C\subseteq E$,

$$\phi_{G,p,q}^{\xi}(A\cup C)\phi_{G,p,q}^{\xi}(A\cap C)\geq\phi_{G,p,q}^{\xi}(A)\phi_{G,p,q}^{\xi}(C).$$

Consequently it is positively associated: $\phi(fg)\geq\phi(f)\phi(g)$ for increasing real functions $f,g:2^E\to\mathbb R$. Conditioning on the states of all edges outside a finite edge set $F$ gives a finite FK law on $F$ whose boundary partition wires exactly the vertices joined by the fixed exterior open edges and the original partition $\xi$. Given all other edge states, an edge is open with conditional probability $p$ if its endpoints are already connected, and $p/(p+q(1-p))$ otherwise. If $p_1\leq p_2$ and $\xi_1$ refines $\xi_2$ (each $\xi_1$-class lies in a $\xi_2$-class), then $\phi_{p_1,q}^{\xi_1}\leq_{st}\phi_{p_2,q}^{\xi_2}$.

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

## Facts & Assumptions

**Given:** A finite multigraph, a boundary set and partition, $q\geq1$, and $p\in(0,1)$ with the finite FK weight of [[def-csm-frontier-fk-real-boundaries]].

[F1] The finite FK mass of $A\subseteq E$ is proportional to $p^{|A|}(1-p)^{|E\setminus A|}q^{k_\xi(A)}$, with $k_\xi(A)$ counting components after the boundary classes are wired ([[def-csm-frontier-fk-real-boundaries]]).

[F2] In an undirected multigraph, connected components are the path-connected components; parallel edges and loops retain distinct edge labels ([[def-multigraph-loop-and-digraph]]).

## Proof

1.1 Form the quotient vertex set $V_\xi$ by identifying each $\xi$-class. For an edge with distinct quotient endpoints $u,v$, let its incidence vector be $e_u+e_v\in\mathbb F_2^{V_\xi}$; a quotient loop has zero vector. In a component $C$ of the opened quotient graph $(V_\xi,A)$, every edge vector has even coordinate sum, so their span lies in the even-sum subspace, of dimension $|C|-1$. Conversely choose a root $r\in C$. For every $v\in C\setminus\{r\}$, connectedness [F2] gives an open path from $r$ to $v$; summing its edge vectors over $\mathbb F_2$ cancels each internal vertex twice and gives $e_r+e_v$. These $|C|-1$ vectors are linearly independent by their distinct $v$-coordinates. Thus the incidence rank on $C$ is $|C|-1$, and summing over components gives $r(A)=|V_\xi|-k_\xi(A)$, including isolated vertices and quotient loops. If $U_A$ and $U_C$ are the spans of incidence vectors from edge sets $A$ and $C$, then $U_{A\cup C}=U_A+U_C$ and $U_{A\cap C}\subseteq U_A\cap U_C$. The subspace dimension formula therefore gives $r(A)+r(C)\geq r(A\cup C)+r(A\cap C)$, hence $k_\xi(A\cup C)+k_\xi(A\cap C)\geq k_\xi(A)+k_\xi(C)$. [given, F1, F2, algebra]

1.2 Fix the exterior edge states outside a finite $F\subseteq E$. For an interior edge set $A\subseteq F$, the total number of components of the combined graph is the number of exterior-only components disjoint from the boundary of $F$, plus the number of components of the graph on $F$ after identifying its boundary vertices that are connected by the fixed exterior open edges or by $\xi$. The first summand and all exterior edge factors are constant in $A$; they cancel when the conditional weights are normalized. Hence the conditional law on $F$ is exactly the finite FK law with this induced boundary partition. [F1, algebra]

2.1 Since $|A\cup C|+|A\cap C|=|A|+|C|$, the factors $p^{|A|}(1-p)^{|E\setminus A|}$ have equality in the lattice condition. The component inequality in step 1.1 and $q\geq1$ give the displayed log-supermodular inequality; every mass is positive by $0<p<1$ and $q\geq1$. [F1, step 1.1, algebra]

2.2 Given all edges except $e$, let $s$ be the conditional number of components when $e$ is closed. If its endpoints are already connected, opening it leaves $s$ unchanged, so open-to-closed odds are $p/(1-p)$ and the open probability is $p$. If the endpoints are not connected, opening it changes the component factor from $q^s$ to $q^{s-1}$, so the odds are $p/[q(1-p)]$ and the open probability is $p/(p+q(1-p))$. Both expressions increase with $p$; opening other edges or making the boundary partition coarser can only turn the second case into the first. [F1, step 1.2, algebra]

3.1 We prove positive association for a strictly positive log-supermodular measure on $\{0,1\}^n$ by induction on $n$. It is trivial at $n=0$. For the last coordinate $s\in\{0,1\}$, each conditional measure $\mu_s$ on the first $n-1$ coordinates remains log-supermodular, so induction makes each $\mu_s$ positively associated. The ratio $R(x)=\mu(X_n=1,x)/\mu(X_n=0,x)$ is increasing in $x$: for $x\leq y$, apply log-supermodularity to $(y,0)$ and $(x,1)$ to obtain $R(y)\geq R(x)$. Thus for every increasing $h$, $\mathbb E_{\mu_1}h=\mathbb E_{\mu_0}(hR)/\mathbb E_{\mu_0}R\geq\mathbb E_{\mu_0}h$ by positive association under $\mu_0$. For increasing $f,g$, their conditional means $F_s=\mathbb E[f\mid X_n=s]$ and $G_s=\mathbb E[g\mid X_n=s]$ therefore satisfy $F_1\geq F_0$ and $G_1\geq G_0$. The conditional association and the nonnegative covariance of two increasing functions of the single Bernoulli coordinate give $\mathbb E(fg)\geq\sum_s\mu(X_n=s)F_sG_s\geq\mathbb E f\,\mathbb E g$. [step 2.1, algebra, induction]

4.1 For two parameter/boundary choices ordered by $p_1\leq p_2$ and by refinement $\xi_1\leq\xi_2$, run random-scan heat-bath chains from the all-closed configuration, choosing the same edge and uniform random number at each update. Each update resamples one edge from its conditional FK law, so it preserves the corresponding FK law. Step 2.2 makes every coupled update preserve coordinatewise order. For completeness this convergence follows by a finite contraction: if there are $r>0$ labels, a block of $r$ updates chooses them in a prescribed order with probability $r^{-r}$. If all its uniforms exceed the larger parameter $p_2<1$, every label is closed at the block end regardless of the initial configuration. This has probability at least $\delta=r^{-r}(1-p_2)^r>0$. Coupling any two chains with these same updates makes them coincide by that block with probability at least $\delta$, and after coincidence they stay equal. After $k$ blocks their disagreement probability is at most $(1-\delta)^k$. Comparing to an initial stationary FK configuration proves convergence of every finite-state probability to FK. When $r=0$ there is one configuration and nothing to prove. Taking the time limit in the coupled chains proves stochastic domination. [step 2.2, construct, algebra] ∎

## Remarks

The association is derived from the component-count lattice condition; no independence assumption is used.

For probability laws on $2^E$, $\mu_1\leq_{st}\mu_2$ means $\mathbb E_{\mu_1}f\leq\mathbb E_{\mu_2}f$ for every increasing real function $f:2^E\to\mathbb R$.
