---
id: "def-set-theoretic-tree-and-levels"
kind: "definition"
title: "Set-theoretic trees, heights, levels, branches and antichains"
status: "draft"
origin: "pipeline"
deps: ["def-well-order", "def-ordinal", "thm-mostowski-collapse"]
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
    - title: "Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted)"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
---

## Definition

A **tree** is a set $T$ with an irreflexive transitive relation $<_T$ such that $P_t=\{s\in T:s<_Tt\}$ is strictly well-ordered for each $t\in T$. Use the strict convention in [[def-well-order]] and the ordinals of [[def-ordinal]]. Write $s\le_Tt$ for $s<_Tt$ or $s=t$.

The **height** $\operatorname{ht}_T(t)$ is the ordinal order type of $P_t$. Put $T_\alpha=\{t\in T:\operatorname{ht}_T(t)=\alpha\}$, $T_{<\alpha}=\bigcup_{\beta<\alpha}T_\beta$, and $\operatorname{ht}(T)=\sup\{\operatorname{ht}_T(t)+1:t\in T\}$. A **root** has height zero. The empty tree has height zero.

A **chain** is a subset whose distinct elements are comparable; a **branch** is a chain maximal under inclusion. A branch is **cofinal** when its node heights are unbounded in $\operatorname{ht}(T)$: for every $\alpha<\operatorname{ht}(T)$ it contains a node of height at least $\alpha$. An **antichain** is a subset whose distinct elements are incomparable. These definitions allow empty chains and antichains; in the empty tree the empty chain is the unique branch and is vacuously cofinal. A singleton tree has one root and one branch.

These are set-theoretic trees, with no assumption that nodes are finite sequences. The order-type theorem [[thm-mostowski-collapse]] supplies the unique ordinal used in the height definition: the predecessor relation is a set well-order, hence well-founded and extensional. Indeed distinct elements of a strict linear order have different initial segments.
