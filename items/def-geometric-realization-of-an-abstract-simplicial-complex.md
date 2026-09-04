---
id: def-geometric-realization-of-an-abstract-simplicial-complex
kind: definition
title: "The geometric realization of an abstract simplicial complex"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abstract-simplicial-complex, def-geometric-simplex-spanned-by-affinely-independent-vertices, def-product-topology, def-subspace-topology-top]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Definition

Let $(V,K)$ be an abstract simplicial complex. Its **geometric realization**
$|K|$ is the set of functions $\alpha:V \to [0,1]$ such that:

1. $\alpha(v)=0$ for all but finitely many $v \in V$;
2. $\sum_{v \in V}\alpha(v)=1$;
3. the support $\operatorname{supp}(\alpha):=\{v \in V:\alpha(v)\neq 0\}$ is a simplex of $K$.

For each simplex $\sigma=\{v_0,\dots,v_n\}$ of $K$, write
$$|\sigma|:=\{\alpha \in |K| : \operatorname{supp}(\alpha)\subseteq \sigma\}.$$
Sending $\alpha$ to the barycentric tuple
$(\alpha(v_0),\dots,\alpha(v_n))$ identifies $|\sigma|$ with the geometric
simplex spanned by the standard basis vectors indexed by $v_0,\dots,v_n$, so
$|\sigma|$ carries its Euclidean simplex topology.

We give $|K|$ the **weak topology** with respect to these simplex inclusions:
a subset $U\subseteq |K|$ is declared open exactly when $U\cap|\sigma|$ is open
in $|\sigma|$ for every simplex $\sigma$ of $K$.
