---
id: def-pe26-primal-interface-spaces-and-jumps
kind: definition
title: Primal interface spaces and jump convention
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe26-scalar-substructuring-model]
justified_by: []
aliases: []
axiom_use: "None; the spaces and maps are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 83–89"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §3.1"
      url: "https://arxiv.org/pdf/0708.4031"
verification:
  precheck: n/a
---

## Definition

For each $i$, let $W_i$ be the vector space of local boundary nodal traces compatible with the fixed outer Dirichlet values, and set $W=\prod_i W_i$ (all interface copies independent). Let $\widehat W\subset W$ be the subspace whose nodal traces agree at every shared interface node; let $R:\widehat W\to W$ be the inclusion. Choose a set of **primal constraints**, meaning finitely many linear functionals on local traces whose values are required to agree across their incident subdomains. Vertex values and normalized edge averages are examples. The **partially assembled space** $\widetilde W$ is the subspace of $W$ satisfying those primal equalities, so $\widehat W\subset\widetilde W\subset W$.

The remaining continuity equations are collected in a jump map $B:\widetilde W\to\mathbb R^m$ with $\ker B=\widehat W$. It may contain redundant rows. Fix the **redundant-multiplier convention** $\Lambda:=\operatorname{range}B$ with its inherited Euclidean inner product: multiplier vectors are elements of this range, not arbitrary row-coordinate vectors modulo an unstated choice. Then $B^T$ is injective on $\Lambda$. For the PE26 two-dimensional estimate, all subdomain vertices are primal and the only remaining jump rows are nodal differences on open interface edges, each shared by exactly two subdomains.

An interface corner is primal whenever its value is among the selected primal functionals. An **edge average** on a side $E$ is $|E|^{-1}\int_E v_h\,ds$, which is a finite sum of nodal values for a $P_1$ trace. The two-dimensional bound below uses corner constraints; no edge-average bound is claimed there.
