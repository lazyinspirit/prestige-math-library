---
id: def-simplicial-subcomplex-star-closure-and-link
kind: definition
title: "Subcomplexes, closures, stars, and links in a simplicial complex"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abstract-simplicial-complex]
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

Let $(V,K)$ be an abstract simplicial complex.

A **subcomplex** of $K$ is a subfamily $L \subseteq K$ that is itself closed
under taking subsets.

If $\sigma \in K$, its **closure** is the subcomplex
$$\overline{\sigma}:=\{\tau \in K : \tau \subseteq \sigma\}.$$
More generally, if $A \subseteq K$, its closure is
$$\overline{A}:=\{\tau \in K : \tau \subseteq \sigma \text{ for some } \sigma \in A\}.$$

For a simplex $\sigma \in K$, the **closed star** of $\sigma$ in $K$ is
$$\operatorname{St}_K(\sigma):=\{\tau \in K : \sigma \cup \tau \in K\},$$
and the **open star** is the union, after realization, of the relative
interiors of simplices $\rho\in K$ with $\sigma\subseteq\rho$.

The **link** of $\sigma$ in $K$ is
$$\operatorname{Lk}_K(\sigma):=\{\tau \in K : \tau \cap \sigma=\varnothing \text{ and } \sigma \cup \tau \in K\}.$$
