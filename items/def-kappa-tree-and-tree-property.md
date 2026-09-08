---
id: "def-kappa-tree-and-tree-property"
kind: "definition"
title: "κ-trees and the tree property"
status: "draft"
origin: "pipeline"
deps: ["def-set-theoretic-tree-and-levels", "def-cardinal", "def-cofinality"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Chapter 9, printed p65; cardinal-tree convention made explicit"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
---

## Definition

Let $\kappa$ be an infinite cardinal in the sense of [[def-cardinal]]. A **$\kappa$-tree** is a tree $T$ of height $\kappa$ such that $|T_\alpha|<\kappa$ for every $\alpha<\kappa$, with height and levels as in [[def-set-theoretic-tree-and-levels]]. The **tree property at $\kappa$** asserts that every $\kappa$-tree has a cofinal branch.

Regularity is a separate condition ($\operatorname{cf}(\kappa)=\kappa$, using [[def-cofinality]]); it is not imposed by this definition. In particular an $\omega$-tree has height $\omega$ and finite levels. Having $\kappa$ nodes alone is not the definition of a $\kappa$-tree. Empty and singleton trees have heights zero and one, respectively, so are not $\kappa$-trees for the permitted infinite cardinals.
