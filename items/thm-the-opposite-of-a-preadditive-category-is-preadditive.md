---
id: thm-the-opposite-of-a-preadditive-category-is-preadditive
kind: theorem
title: "The opposite of a preadditive category is preadditive"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, def-opposite-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If $\mathcal C$ is preadditive, then the opposite category
$\mathcal C^{\mathrm{op}}$ is preadditive.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$.

[L1] The opposite category has the same objects and the same hom-sets, with
composition reversed ([[def-opposite-category]]).

[L2] In a preadditive category every hom-set is an abelian group and
composition is bilinear ([[def-preadditive-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], for objects $A,B$ the hom-set $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ already carries the abelian group structure given by [L2]. [L1, L2]

1.2 Let $f,g:B\to A$ in $\mathcal C$ and let $h:C\to B$, $k:A\to D$. In $\mathcal C^{\mathrm{op}}$ these are composable as $f^{\mathrm{op}},g^{\mathrm{op}}:A\to B$, $h^{\mathrm{op}}:B\to C$, and $k^{\mathrm{op}}:D\to A$. Using [L1], the left distributive law in $\mathcal C^{\mathrm{op}}$ is $(f^{\mathrm{op}}+g^{\mathrm{op}})\circ h^{\mathrm{op}}=(h\circ(f+g))^{\mathrm{op}}=(h\circ f+h\circ g)^{\mathrm{op}}=f^{\mathrm{op}}\circ h^{\mathrm{op}}+g^{\mathrm{op}}\circ h^{\mathrm{op}}$, and the right distributive law is similar from bilinearity in $\mathcal C$. [L1, L2]

2.1 Thus $\mathcal C^{\mathrm{op}}$ has abelian-group hom-sets and bilinear composition, so it is preadditive. [step 1.1, step 1.2, L2] ∎
