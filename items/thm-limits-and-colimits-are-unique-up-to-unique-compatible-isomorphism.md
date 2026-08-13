---
id: thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism
kind: theorem
title: "Any two limits, or any two colimits, of one diagram are uniquely isomorphic compatibly with their structure maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism, def-isomorphism-groupoid-and-connected-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.1.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

If $(L,\lambda)$ and $(L',\lambda')$ are limits of one diagram $D$, there is a
unique isomorphism $u:L\to L'$ satisfying $\lambda'_j u=\lambda_j$ for every
$j$. Dually, any two colimits of $D$ are joined by a unique isomorphism that
commutes with every cocone leg.

## Facts & Assumptions

**Given:** Two limiting cones $(L,\lambda)$ and $(L',\lambda')$ over $D$.

[F1] A limit is a terminal cone: every cone has a unique morphism to it, and a
colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[L1] Any two terminal objects are uniquely isomorphic, as are any two initial
objects ([[thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism]]).

[L2] An isomorphism has a two-sided inverse
([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** universal property.

1.1 By [F1], there are unique cone morphisms $u:L\to L'$ and $v:L'\to L$; hence $\lambda'_ju=\lambda_j$ and $\lambda_jv=\lambda'_j$ for every $j$. [F1]

2.1 Both $vu$ and $1_L$ are cone morphisms from $(L,\lambda)$ to itself, so terminal uniqueness gives $vu=1_L$. Similarly $uv=1_{L'}$. [F1, step 1.1]

3.1 Thus $u$ is an isomorphism with inverse $v$. Any compatible isomorphism is a cone morphism $L\to L'$, so it equals $u$ by uniqueness. [L2, step 1.1, step 2.1]

4.1 The same argument in $\operatorname{Cocone}(D)$ uses initial rather than terminal uniqueness [L1]: the unique morphisms between the two initial cocones are inverse and commute with all cocone legs. [F1, L1] ∎
