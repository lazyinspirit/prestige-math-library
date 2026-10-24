---
id: lem-temperley-lieb-link-state-module-action-is-well-defined
kind: lemma
title: "The link-state quotient is a right Temperley–Lieb module"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-temperley-lieb-link-state-standard-modules, def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, PDF pp. 11–13: concatenation action on link states and the filtration by number of defects."
    - title: "John Enyang and Frederick M. Goodman, Cellular bases for algebras with a Jones basic construction"
      url: "https://arxiv.org/pdf/1106.5339"
      locator: "§6.4.2, printed pp. 33–35: the Temperley–Lieb category, dangles, and stacking."
---

## Statement

For $R$, $\delta$, $n$, $t$ and $W_{n,t}(R,\delta)$ as in [[def-temperley-lieb-link-state-standard-modules]], the rule $x\cdot a=[x\circ a]$ defines a unital right $\mathrm{TL}_n(R,\delta)$-module structure on $W_{n,t}(R,\delta)$.

## Facts & Assumptions

**Given:** A commutative ring $R$ with unit, $\delta\in R$, $n\ge0$, an allowed defect number $t$, and the quotient $M_R(n,t)/M_R^{<t}(n,t)$.

[F1] The modules $M_R(m,n)$ are free on noncrossing matching diagrams; composition stacks the left factor above the right factor, deletes each closed cycle with a factor $\delta$, and extends bilinearly ([[def-temperley-lieb-diagram-category]]).

[F2] Stacking is associative and the vertical matching $1_n$ is a two-sided identity; $\operatorname{End}(n)=\mathrm{TL}_n(R,\delta)$ is a unital algebra ([[thm-temperley-lieb-diagram-category-laws]]).

[F3] $M_R^{<t}(n,t)$ is spanned by diagrams with fewer than $t$ propagating components, and $W_{n,t}$ is the quotient by this span ([[def-temperley-lieb-link-state-standard-modules]]).

## Proof

**Proof technique:** direct.

1.1 For basis diagrams $x:n\to t$ and $a,b:n\to n$, both $(x\cdot a)\cdot b$ and $x\cdot(ab)$ are represented by the same three-layer glued graph, with the same exterior paths and the same number of closed components. By [F1] their coefficients are the same power of $\delta$, and [F2] gives $(x\cdot a)\cdot b=x\cdot(ab)$. The identity diagram leaves $x$ unchanged. Bilinearity extends these equalities to $M_R(n,t)$, making it a right $\mathrm{TL}_n(R,\delta)$-module before quotienting. [F1, F2, algebra]

2.1 If $\operatorname{prop}(x)<t$, every propagating component of $x\circ a$ must pass through a distinct propagating component of $x$ at the glued $n$-boundary; stacking cannot create a new path from the top $t$-boundary of $x$ to the exterior bottom boundary of $a$ when no such path existed in $x$. Thus every basis term of $x\cdot a$ has fewer than $t$ propagating components. By [F3], $M_R^{<t}(n,t)$ is a right submodule. [F1, F3, step 1.1]

3.1 The action therefore descends to the quotient $W_{n,t}(R,\delta)$, and the module identities from step 1.1 descend with it. Since the diagram basis of $M_R(n,t)$ is partitioned into diagrams with exactly $t$ propagating components and those with fewer, the surviving cosets form the stated link-state basis. [F1, F3, step 1.1, step 2.1] ∎
