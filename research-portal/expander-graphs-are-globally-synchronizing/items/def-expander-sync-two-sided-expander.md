---
id: def-expander-sync-two-sided-expander
title: Two-sided spectral expander — Definition 1.9
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-adjacency-expander
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 8, Definition 1.9
      statement: A graph is an $(n,d^*,\alpha,c^-,c^+)$-expander if it is an
        $(n,d^*,\alpha)$-expander and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$.
      hypotheses: The graph and centered matrices use the article's preceding
        conventions; the definition does not require regularity.
      reading_limits: PDF page 8 was inspected for the definition and its immediately
        following explanation. The citation attributes the formulation and is
        not used to prove the local justification.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 4
---

## Definition

Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, adjacency matrix $A$, degree matrix $D$, and Laplacian $L=D-A$, using the graph conventions of [[def-expander-sync-graph-notation]]. Thus $D_{xx}=\sum_y A_{xy}$, including a diagonal loop entry once. Let $I$ be the identity matrix and $J$ the all-ones matrix. For real parameters $d^*$, $\alpha$, $c^-$, and $c^+$, put $\Delta_A=A-(d^*/n)J$ and $\Delta_L=L-d^*I+(d^*/n)J$.

The graph is an **$(n,d^*,\alpha,c^-,c^+)$-expander** if it is an $(n,d^*,\alpha)$-expander, meaning that $\|\Delta_A\|\leq\alpha d^*$, and also satisfies $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$. Here $\|\cdot\|$ is the operator norm induced by the standard norm on $\mathbb C^V$. For Hermitian matrices, $B\preceq C$ means that $f^*(C-B)f\geq0$ for every $f\in\mathbb C^V$. The definition does not require $G$ to be regular.

## Justification

The graph convention supplies real symmetric matrices $A$, $D$, and $L$ of the same size ([[def-expander-sync-graph-notation]]). Because $n>0$, the centered-matrix construction gives well-defined real symmetric matrices $\Delta_A$ and $\Delta_L$ ([[def-expander-sync-centered-matrices]]). The operator norm and Loewner order are well defined for these matrices ([[def-expander-sync-matrix-order]]). The first inequality is precisely the previously defined $(n,d^*,\alpha)$-expander predicate ([[def-expander-sync-adjacency-expander]]), while the two order inequalities are meaningful predicates on the same vertex space. Their conjunction therefore defines the stated class. No sign restrictions on the real parameters are needed to make this predicate meaningful; the inequalities themselves determine whether a given graph belongs to the class.

## Source notes

The formulation is attributed to Definition 1.9 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The justification above uses the displayed definitions and does not treat the article as proof of its own definition.
