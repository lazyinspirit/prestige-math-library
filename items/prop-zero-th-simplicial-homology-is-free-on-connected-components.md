---
id: prop-zero-th-simplicial-homology-is-free-on-connected-components
kind: proposition
title: "Zero-th simplicial homology is free on connected components"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simplicial-cycles-boundaries-and-homology, def-connected-component-and-quasicomponent]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

For every simplicial complex $K$, the group $H_0^{\mathrm{simp}}(K)$ is the free
abelian group on the connected components of $|K|$.

## Proof

**Given:** A simplicial complex $K$.

1.1 If $x\in|\sigma|$ and $u$ is a vertex of the simplex $\sigma$, then the straight-line barycentric homotopy inside the Euclidean simplex $|\sigma|$ joins $x$ to $u$. Hence every point of $|K|$ lies in the same connected component as any vertex of a simplex supporting it, and all vertices of one simplex lie in the same connected component of $|K|$. [given]

1.2 If vertices $v$ and $w$ are joined by an edge path $v=v_0,\dots,v_m=w$, then $[w]-[v]=\sum_{i=1}^m \partial[v_{i-1},v_i]$, so vertices in the same edge-path component define the same class in $H_0^{\mathrm{simp}}(K)$. [given]

2.1 Fix a vertex $v$ of $K$, let $E(v)$ be the set of vertices joined to $v$ by edge paths, and let $K(v)$ be the subcomplex whose simplices have all vertices in $E(v)$. By step 1.1, every simplex that contains one vertex of $E(v)$ has all its vertices in $E(v)$, so for each simplex $\sigma$ the intersection $|K(v)|\cap|\sigma|$ is either $|\sigma|$ or $\varnothing$. Hence $|K(v)|$ is open and closed in the weak topology. It is connected because every point of $|K(v)|$ lies in a simplex whose vertices are edge-path connected to $v$, so step 1.1 and concatenation of those edge paths connect the point to $v$. Therefore $|K(v)|$ is exactly the connected component of $|K|$ containing $v$. In particular, the connected components of $|K|$ are exactly the realizations of the edge-path components of the vertices, and if $|K|\neq\varnothing$ every connected component contains a vertex. [step 1.1]

3.1 Let $\pi_0(|K|)$ be the set of connected components of $|K|$. Since the vertices of every simplex lie in one component by step 1.1, the assignment sending a vertex $u$ to the basis vector $e_{[u]}$ of the free abelian group $\bigoplus_{C\in\pi_0(|K|)}\mathbb Z e_C$ extends to a homomorphism $C_0(K)\to\bigoplus_{C\in\pi_0(|K|)}\mathbb Z e_C$. Boundaries of edges map to $0$, so this homomorphism factors through $\Phi:H_0^{\mathrm{simp}}(K)\to\bigoplus_{C\in\pi_0(|K|)}\mathbb Z e_C$. If $|K|=\varnothing$, then $C_0(K)=0$ and both groups are zero. Otherwise step 2.1 shows that every connected component contains a vertex, so $\Phi$ is surjective. [step 1.1, step 2.1]

4.1 Choose one vertex $a_C$ in each nonempty connected component $C$. Every class in $H_0^{\mathrm{simp}}(K)$ is represented by a finite $0$-chain $z=\sum_u n_u[u]$. By step 2.1, two vertices lie in the same connected component exactly when they are edge-path connected, so step 1.2 gives $[u]-[a_C]\in B_0(K)$ for every $u\in C$. Hence in $H_0^{\mathrm{simp}}(K)$ one has $[z]=\sum_C\left(\sum_{u\in C}n_u\right)[a_C]$. If $\Phi([z])=0$, then every component sum $\sum_{u\in C}n_u$ is zero, so $[z]=0$. Thus $\Phi$ is injective. [step 1.2, step 2.1, step 3.1]

5.1 Therefore $\Phi$ is an isomorphism, so $H_0^{\mathrm{simp}}(K)$ is the free abelian group on the connected components of $|K|$. [step 3.1, step 4.1] ∎
