---
id: thm-cg-polyhedral-chain-metric-topology-and-properness
kind: theorem
title: "The chain metric is a metric, its topology is the weak topology, and the space is proper and complete"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, lem-cg-polyhedral-face-coherence-and-uniform-star-radius, def-metric-space, def-metric-topology, def-metric-ball, def-metric-compactness, def-complete-metric-space, def-cauchy-in-metric, def-metric-convergence, lem-metric-reverse-triangle, lem-metric-nonnegativity, thm-compact-implies-complete-and-totally-bounded, lem-closed-subset-of-a-compact-space-is-compact, thm-continuous-bijection-from-a-compact-space-has-continuous-inverse, lem-metric-cauchy-with-convergent-subsequence, lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology, def-upper-bound]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.7.2–I.7.6, printed pp. 97–100 (strings and the intrinsic pseudometric); I.7.10–I.7.13, printed pp. 101–102 (positive injectivity radius, the length metric, finite shapes and completeness); I.7.19, printed pp. 105–111 (finite shapes and complete geodesic spaces)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.3, printed pp. 507–508 (X_k-cell structures and Proposition I.3.4); §12.1, printed pp. 231–233 (piecewise Euclidean cell structure and the finite-shapes geodesic remark)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $X$ be an isometric polyhedral gluing with standing hypotheses (H1)-(H3) of [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], let $d$ be its chain metric candidate, and let $L$ and $\delta$ be the constants of [[lem-cg-polyhedral-face-coherence-and-uniform-star-radius]] for this gluing. Then:

**(1) Well-definedness and metric.** The length of a chain does not depend on the cells chosen to measure its steps, every two points of $X$ are joined by a chain, and $d\colon X\times X\to[0,\infty)$ is a metric on $X$: for all $x,y,z\in X$, $d(x,x)=0$, $d(x,y)=d(y,x)$, $d(x,y)>0$ whenever $x\ne y$, and $d(x,z)\le d(x,y)+d(y,z)$ ([[def-metric-space]]).

**(2) Topology.** The metric topology of $d$ ([[def-metric-topology]]) coincides with the weak topology of the gluing: a subset of $X$ is open in the metric topology if and only if its trace on every closed cell is relatively open.

**(3) Properness and completeness.** Every closed $d$-bounded subset of $X$ is compact ([[def-metric-compactness]]); in particular $(X,d)$ is complete ([[def-complete-metric-space]]) and every closed ball is compact. No bound on the number of cells meeting a vertex is needed beyond local finiteness.

## Facts & Assumptions

**Given:** An isometric polyhedral gluing $X$ with (H1)-(H3), its chain metric candidate $d$, and the constants $L\ge1$ and $\delta=1/(2L(D+1))>0$ of the star lemma.

[F1] The gluing data: cells $C_p$ with affine face isometries $h_{p,q}$, the intersection condition, the weak topology, (H1)-(H3), the maximum dimension $D$; the chain metric candidate $d$ is the infimum of lengths of chains, where a chain's length is the sum over its steps of the Euclidean distance in any cell containing the two consecutive points. [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]

[F2] The order complex $K$ of $P^{*}$ and the map $\Phi\colon|K|\to X$: $\Phi$ is a homeomorphism from the weak topology of $|K|$ to the weak topology of $X$; every point of $X$ lies in the relative interior of exactly one simplex of $K$; the hat coordinates $\lambda_v$ satisfy $\sum_v\lambda_v=1$, are affine on every simplex, and satisfy $|\lambda_v(x)-\lambda_v(y)|\le L\,d(x,y)$; for every $x$ there is $v$ with $\lambda_v(x)\ge1/(D+1)$ and $B(x,\delta)$ lies in the open star of $v$; every closed star is the image under $\Phi$ of the realization of a finite subcomplex of $K$, hence compact and metrizable; the open stars cover $X$; and each vertex has only finitely many vertices in a common cell with it. [[lem-cg-polyhedral-face-coherence-and-uniform-star-radius]]

[F3] Metric vocabulary and elementary facts: $d(x,y)\ge0$ and the reverse triangle inequality $|d(x,z)-d(y,z)|\le d(x,y)$ hold in a metric space; open balls, the metric topology, compactness, completeness, Cauchy sequences and convergence have their usual meaning. [[lem-metric-nonnegativity]], [[lem-metric-reverse-triangle]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-compactness]], [[def-complete-metric-space]], [[def-cauchy-in-metric]], [[def-metric-convergence]]

[F4] A compact metric space is complete; a closed subset of a compact metric space is compact; a continuous bijection from a compact metric space onto a metric space has continuous inverse; a Cauchy sequence with a convergent subsequence converges to that subsequential limit. [[thm-compact-implies-complete-and-totally-bounded]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]], [[lem-metric-cauchy-with-convergent-subsequence]]

[F5] For a finite abstract simplicial complex the weak topology on its realization agrees with the Euclidean topology and the realization is a compact metric space; a finite subcomplex of any complex includes into its realization as a closed embedding with that topology. [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]]


## Proof

**Given:** The gluing $X$ with (H1)-(H3), its chain metric candidate $d$, the constants $L,\delta$, the order complex $K$ and the map $\Phi$.

1.1 The length of a chain is independent of the chosen cells and is finite, so $d$ is a symmetric real-valued function with $d(x,x)=0$ and the triangle inequality. If $x_i,x_{i+1}$ lie in cells $C_p$ and $C_q$, then by the intersection condition of [F1] both points lie in $C_{p\wedge q}$, and the affine face isometries identify the three cells on their common points, so the Euclidean distances computed in $C_p$ and in $C_q$ agree; hence every choice gives the same sum. For finiteness, fix $x$ and let $A$ be the set of points joined to $x$ by a chain; if a cell $C_p$ meets $A$, say in $y$, then any $z\in C_p$ is joined to $x$ by the given chain followed by a one-step chain, so $C_p\subseteq A$: thus the trace of $A$ on every closed cell is either that cell or empty, and $A$ is open and closed in the weak topology of [F1]; as $X$ is connected, $A=X$. Therefore every two points are joined by a chain, each chain has finite length, and $0\le d(x,y)<\infty$ for all $x,y$. Reversing a chain shows $d(x,y)=d(y,x)$, the one-term chain shows $d(x,x)=0$, and concatenating chains at $y$ and passing to the infimum shows the triangle inequality. [F1]

1.2 For every $x_0\in X$ and real $r>0$ the closed ball $\bar B(x_0,r)$ is contained in a finite union of closed stars. Call two vertices $v,w$ *adjacent* when they lie in a common cell; by [F2] each vertex has only finitely many adjacent vertices. Choose $v_0$ with $B(x_0,\delta)\subseteq\operatorname{st}(v_0)$ and let $S_r$ be the finite set of vertices reachable from $v_0$ by a walk of at most $K:=\lceil2(r+1)/\delta\rceil$ steps of the adjacency relation; then $\bar B(x_0,r)\subseteq\bigcup_{v\in S_r}\bar{\operatorname{st}}(v)$. Indeed, let $z\in\bar B(x_0,r)$. If $z=x_0$, it already lies in the starting star. Otherwise choose a chain $x_0=y_0,\dots,y_m=z$ of length $0<\ell<r+1$, delete consecutive repeated points, and traverse each remaining step at unit speed in its cell to obtain a map $\gamma\colon[0,\ell]\to X$ with $\gamma(0)=x_0$, $\gamma(\ell)=z$ and $d(\gamma(s),\gamma(s'))\le|s-s'|$, because the sub-chain between two parameter values has length at most the parameter difference. Put $h:=\delta/2$ and let $0=s_0<s_1<\dots<s_N=\ell$ be the parameters obtained by steps of size $h$, the last gap being at most $h$; then $N\le K$. For each $j$ choose a vertex $v_j$ with $B(\gamma(s_j),\delta)\subseteq\operatorname{st}(v_j)$, taking $v_0$ for $j=0$. Since $d(\gamma(s_j),\gamma(s_{j+1}))\le h<\delta$, the point $\gamma(s_{j+1})$ lies both in $B(\gamma(s_j),\delta)\subseteq\operatorname{st}(v_j)$ and in $B(\gamma(s_{j+1}),\delta)\subseteq\operatorname{st}(v_{j+1})$, so the two open stars meet and $v_j,v_{j+1}$ lie in a common cell, that is, they are adjacent. By induction $v_N\in S_r$, and $z=\gamma(s_N)$ lies in $\operatorname{st}(v_N)\subseteq\bar{\operatorname{st}}(v_N)$. [F2, algebra]

2.1 $d$ is a metric: if $d(x,y)=0$ then $x=y$. Suppose $d(x,y)=0$. By the Lipschitz clause of [F2], $|\lambda_v(x)-\lambda_v(y)|\le L\,d(x,y)=0$ for every vertex $v$, so $\lambda_v(x)=\lambda_v(y)$ for all $v$. Since $x$ and $y$ correspond under the bijection $\Phi$ of [F2] to the functions $\lambda(x),\lambda(y)$ on the vertex set (their values on the carrier), this gives $\Phi^{-1}(x)=\Phi^{-1}(y)$ and hence $x=y$. With [step 1.1] this gives all the metric axioms of [F3]. [F2, F3, step 1.1]

2.2 Every metric ball is weakly open: the metric topology is contained in the weak topology of [F1]. Fix $x\in X$ and a cell $C_p$ with its Euclidean metric $d_p$. For $u,v\in C_p$ the reverse triangle inequality gives $|d(x,u)-d(x,v)|\le d(u,v)$, and the one-step chain gives $d(u,v)\le d_p(u,v)$; hence $d(x,\cdot)$ is $1$-Lipschitz, in particular continuous, on $C_p$. Therefore the trace of any open ball $B(x,r)$ on $C_p$ is relatively open, and as $p$ was arbitrary each ball is weakly open. [F1, F3, step 1.1]

3.1 Every closed bounded subset of $X$ is compact. Let $A\subseteq X$ be closed and bounded; if $A=\emptyset$ this is [F3]. Otherwise $A\subseteq B(x_0,r)\subseteq\bar B(x_0,r)$ for some $x_0$ and $r>0$. The ball $\bar B(x_0,r)$ is closed, since $y\mapsto d(x_0,y)$ is $1$-Lipschitz and hence continuous, and by [step 1.2] it is contained in the union of the finitely many closed stars $\bar{\operatorname{st}}(v)$, $v\in S_r$; each of those is compact in the weak topology by [F2] and therefore compact for the metric subspace topology by step 2.2: any metric-open cover is also weakly open on the star and thus has a finite subcover. Their finite union is metric compact, since an open cover has a finite subcover on each of the finitely many stars, and $\bar B(x_0,r)$, being a closed subset of that compact metric space, is compact by [F4]. Finally $A$, closed in $X$, is closed in the subspace $\bar B(x_0,r)$ and therefore compact by [F4]. [F2, F3, F4, step 1.2, step 2.2]

3.2 The weak topology is contained in the metric topology. Let $W\subseteq X$ be weakly open and let $x\in W$. By [F2] choose a vertex $v$ with $\lambda_v(x)\ge1/(D+1)$ and $B(x,\delta)$ contained in the open star of $v$; the closed star $\bar S$ of $v$ is the image under $\Phi$ of the realization $|S|$ of a finite subcomplex $S$ of $K$. The map $\Phi|_S\colon|S|\to\bar S$ is a continuous bijection from the compact metric space $|S|$ of [F5] onto $\bar S$ with the weak topology, and the identity on $\bar S$ towards the metric subspace topology is continuous by [step 2.2], so the composite is a continuous bijection from a compact metric space onto a metric space; by [F4] the weak and metric topologies agree on $\bar S$. Hence $W\cap\bar S$ is open in the metric subspace $\bar S$: there is $\varepsilon>0$ with $B(x,\varepsilon)\cap\bar S\subseteq W$. Taking $\varepsilon':=\min\{\varepsilon,\delta\}>0$ and using $B(x,\delta)\subseteq\operatorname{st}(v)\subseteq\bar S$ we obtain $B(x,\varepsilon')=B(x,\varepsilon')\cap\bar S\subseteq W$. Therefore every weakly open set is metric open, and with [step 2.2] the two topologies coincide. [F2, F3, F4, F5, step 2.2]

4.1 Every closed ball is compact by [step 3.1], since a closed ball is closed and bounded. For completeness, let $(x_k)$ be a Cauchy sequence in $X$; by [F3] fix an index $N$ with $d(x_m,x_k)<1$ for all $m,k\ge N$. The finitely many terms $x_0,\dots,x_{N-1}$ have finite distances from $x_N$, so there is a real $\rho>0$ with $d(x_k,x_N)\le\rho$ for every $k$, and hence the sequence lies in the closed ball $\bar B(x_N,\rho)$, which is compact by [step 3.1] and therefore complete by [F4]; being Cauchy in $X$ and lying in this complete subspace, $(x_k)$ converges to a point of it, so $(X,d)$ is complete. [F3, F4, step 3.1] ∎
