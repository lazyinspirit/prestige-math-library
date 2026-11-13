---
id: def-expander-sync-adjacency-expander
title: Adjacency spectral expander — Definition 1.3
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 6, Section 1.2 and Definition 1.3
      statement: A graph with n vertices is an (n,d*,alpha)-expander when the operator
        norm of A-(d*/n)J is at most alpha d*.
      hypotheses: A graph with n vertices and adjacency matrix A; J is the all-ones
        matrix and d* is the chosen reference parameter. The displayed division
        requires n>0.
      reading_limits: The supplied article text at Section 1.2 and Definition 1.3 was
        inspected. This reference attributes the definition; it is not used as a
        proof or as a source for a prerequisite.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 3
---

## Definition

Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$ vertices and adjacency matrix $A$. Its entries $A_{xy}$ record adjacency, including any diagonal loop entries under the graph convention. Let $J$ be the $V\times V$ all-ones matrix, and let $d^*$ and $\alpha$ be real parameters. The centered adjacency matrix is $\Delta_A=A-(d^*/n)J$. Its operator norm is $\|\Delta_A\|=\sup_{f\ne0}\|\Delta_A f\|_2/\|f\|_2$, where $f\in\mathbb C^V$ and $\|f\|_2=(\sum_{x\in V}|f(x)|^2)^{1/2}$.

The graph $G$ is an **$(n,d^*,\alpha)$-expander** if $\|\Delta_A\|\le\alpha d^*$, equivalently, if $\|A-(d^*/n)J\|\le\alpha d^*$. The reference parameter $d^*$ need not be the degree of every vertex; this definition does not require regularity.

## Definition references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-matrix-order]]

## Justification

The graph notation supplies the finite vertex set and adjacency matrix, with the stated diagonal convention ([[def-expander-sync-graph-notation]]). Since $n>0$, the centered-matrix definition supplies the uniquely defined matrix $\Delta_A=A-(d^*/n)J$ for each real $d^*$ ([[def-expander-sync-centered-matrices]]). The operator norm is finite and well defined on this finite-dimensional vertex space ([[def-expander-sync-matrix-order]]). Consequently the displayed inequality is a well-defined predicate, and its two forms agree by substitution. The inequality itself imposes any restrictions needed on the product $\alpha d^*$; no positivity assumption is needed merely to define the predicate.

## Source notes

The definition is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Definition 1.3. The article's subsequent regular-graph spectral characterization is stated separately.
