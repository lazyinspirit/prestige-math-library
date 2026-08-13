---
id: lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic
kind: lemma
title: "The legs of a limiting cone are jointly monic, and the legs of a colimiting cocone are jointly epic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, prop-limit-colimit-duality, def-monomorphism-and-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Exercise 3.1.iv"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

If $(L,\lambda_j)$ is a limiting cone and $r,s:X\to L$ satisfy
$\lambda_jr=\lambda_js$ for every $j$, then $r=s$. Dually, if
$(Q,\rho_j)$ is colimiting and $r,s:Q\to X$ satisfy
$r\rho_j=s\rho_j$ for every $j$, then $r=s$.

## Facts & Assumptions

**Given:** A limiting cone $(L,\lambda)$ and morphisms $r,s:X\to L$ with equal
composites through every leg.

[F1] A limiting cone admits exactly one cone morphism from each cone
([[def-limit-and-colimit-of-a-diagram]]).

[F2] Monomorphisms and epimorphisms are defined by left and right cancellation,
respectively ([[def-monomorphism-and-epimorphism]]).

[L1] The formal dual of a limiting cone is a colimiting cocone
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** universal property.

1.1 The common family $\xi_j:=\lambda_jr=\lambda_js$ is a cone, since both families arise by composing the cone $\lambda$ with an apex morphism. [given]

2.1 Both $r$ and $s$ are cone morphisms $(X,\xi)\to(L,\lambda)$. The uniqueness clause in [F1] therefore gives $r=s$. [F1, step 1.1]

3.1 Reverse every arrow in steps 1.1 and 2.1. By [L1] this says that equal composites after all legs of a colimiting cocone force equality of the two arrows out of its apex. [L1, step 1.1, step 2.1]

4.1 These two cancellation properties are precisely joint monicity and joint epicity; for a one-legged family they reduce to the notions in [F2]. [F2, step 2.1, step 3.1] ∎
