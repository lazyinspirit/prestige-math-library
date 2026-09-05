---
id: def-extension-by-zero-abelian-sheaf
kind: definition
title: "Extension by zero for abelian sheaves on an open subspace"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-restriction-sheaf-open-subspace, def-sheafification]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Section 2.7 and nearby discussion"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 6.31"
      url: "https://stacks.math.columbia.edu/tag/009Z"
---

## Definition

Let $j:U\hookrightarrow X$ be the inclusion of an open subspace, and let
$\mathcal F$ be a sheaf of abelian groups on $U$.

For an open set $V \subseteq X$, define
$$(j_!\mathcal F)(V) := \left\{ s\in \mathcal F(V\cap U): \operatorname{Supp}(s)\text{ is closed in }V \right\}.$$
Equivalently, $s$ lies in $(j_!\mathcal F)(V)$ exactly when for every
$x\in V\setminus U$ there exists an open neighbourhood $W_x \subseteq V$ with
$$
s|_{W_x\cap U}=0.
$$

Restriction maps are inherited from $\mathcal F$, so $j_!\mathcal F$ is a
subsheaf of $j_*\mathcal F$. When $V \subseteq U$, the support condition is
vacuous and
$$
(j_!\mathcal F)(V)=\mathcal F(V).
$$

This is the **extension by zero** of $\mathcal F$ along $j$. It is distinct in
general from the ordinary direct image $j_*\mathcal F$.
