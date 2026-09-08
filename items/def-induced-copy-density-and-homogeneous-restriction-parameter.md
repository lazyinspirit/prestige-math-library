---
id: def-induced-copy-density-and-homogeneous-restriction-parameter
kind: definition
title: "Induced copy density and homogeneous restriction parameter"
status: draft
origin: pipeline
deps: [def-induced-copy-number, def-induced-embedding-and-induced-copy, def-edge-density-between-vertex-sets, thm-two-element-subsets-count, cor-cardinality-of-the-power-set]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "Sections 2 and 5, before 5.2 and its beta_s definition"
---

## Definition

Let $G$ be a nonempty finite simple graph, $n=|V(G)|$, and $H$ a finite simple graph with $h=|V(H)|$. Define $d_{\mathrm{ind}}(H,G)=\operatorname{ind}_H(G)/n^h$, using the labelled induced embeddings of [[def-induced-copy-number]] and [[def-induced-embedding-and-induced-copy]].

For $a,b\geq0$, put
$$\rho_G(a,b)=\max\left\{\frac{|S|}{n}:\varnothing\ne S\subseteq V(G),\ e(G[S])\leq a\binom{|S|}{2}\ \text{or}\ e(\overline G[S])\leq b\binom{|S|}{2}\right\}.$$
Here $e(G[S])$ counts unordered edges. For disjoint sets, $e_G(A,B)$ counts cross edges as in [[def-edge-density-between-vertex-sets]]. We use the quotient $e(G[S])/\binom{|S|}{2}$ only for $|S|\geq2$.

There are finitely many subsets by [[cor-cardinality-of-the-power-set]]. A singleton has no edges and $\binom12=0$ by [[thm-two-element-subsets-count]], so the family in the maximum is nonempty. Comparing a finite list of its real values gives an attained maximum, with $1/n\leq\rho_G(a,b)\leq1$. If $a\geq1$ or $b\geq1$, the full vertex set qualifies and $\rho_G(a,b)=1$.

For the null pattern, the unique empty map is an induced embedding, so $\operatorname{ind}_{\varnothing}(G)=1$ and $d_{\mathrm{ind}}(\varnothing,G)=1$. For a one-vertex pattern the count is $n$.

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Sections 2 and 5, before 5.2 and its beta_s definition.
