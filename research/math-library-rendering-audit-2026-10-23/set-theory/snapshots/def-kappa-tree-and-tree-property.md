---
id: "def-kappa-tree-and-tree-property"
kind: "definition"
title: "κ-trees and the tree property"
status: published
origin: "pipeline"
deps: ["def-set-theoretic-tree-and-levels", "def-cardinal", "def-cofinality"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (def-kappa-tree-and-tree-property). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Chapter 9, printed p65; cardinal-tree convention made explicit"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
---

## Definition

Let $\kappa$ be an infinite cardinal in the sense of [[def-cardinal]]. A **$\kappa$-tree** is a tree $T$ of height $\kappa$ such that, for every $\alpha<\kappa$, its level $T_\alpha$ admits an injection into some ordinal $\lambda<\kappa$, with height and levels as in [[def-set-theoretic-tree-and-levels]]. The **tree property at $\kappa$** asserts that every $\kappa$-tree has a cofinal branch. This smallness condition is meaningful even when a level is not known to be well-orderable. Under the Axiom of Choice it is equivalent to the usual notation $|T_\alpha|<\kappa$.

Regularity is a separate condition ($\operatorname{cf}(\kappa)=\kappa$, using [[def-cofinality]]); it is not imposed by this definition. In particular an $\omega$-tree has height $\omega$ and finite levels. Having $\kappa$ nodes alone is not the definition of a $\kappa$-tree. Empty and singleton trees have heights zero and one, respectively, so are not $\kappa$-trees for the permitted infinite cardinals.
