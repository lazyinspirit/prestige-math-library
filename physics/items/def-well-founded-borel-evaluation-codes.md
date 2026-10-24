---
id: def-well-founded-borel-evaluation-codes
kind: definition
title: "Well-founded Borel evaluation codes"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets", "def-countable-borel-hierarchy", "def-well-founded-setlike-relations"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions 7.1–7.2, printed pp62–63; nodewise labels and empty union made explicit"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Fix a topological space $X$ and an enumerated basis $(U_n)_{n\in\mathbb N}$. Use the tree convention of [[def-trees-and-bodies-on-discrete-alphabets]] and the Borel sigma-algebra of [[def-countable-borel-hierarchy]]. A **Borel evaluation code** is a nonempty tree $T\subseteq\mathbb N^{<\omega}$ with a label at each node, subject to the following rules:

- A node labelled $\operatorname{leaf}(n)$ has no children, with $n\in\mathbb N$.
- A node labelled $\operatorname{complement}$ has exactly the child $s^\frown0$.
- A node labelled $\operatorname{union}$ has any set of children $s^\frown k$ indexed by a subset of $\mathbb N$, including no children.

Require the immediate-child relation $tRs$ (meaning $t=s^\frown k\in T$ for some $k$) to be well-founded in the sense of [[def-well-founded-setlike-relations]]: every nonempty subset of $T$ has a member with no child in that subset. This is part of validity. Absence of a branch is not being substituted for it. The relation is setlike since its domain is a set.

The intended operations are a basis open at a leaf, complement relative to $X$, and union of child values. An empty union is intended to evaluate to $\varnothing$, not to $X$. Existence and uniqueness of evaluation are a separate result. The empty underlying tree is invalid, whereas a one-node union code is valid: its child relation is empty and well-founded. A complement of that one-node union is also valid. All labelled trees under consideration form a set (labels are drawn from a fixed countable set), so no proper-class collection of codes is needed. No choice assumption occurs in this definition.
