---
id: prop-limit-colimit-duality
kind: proposition
title: "A limiting cone for a diagram is exactly a colimiting cocone for the formally dual diagram in the opposite category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, def-opposite-category, thm-category-theoretic-duality-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: duality
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Remark 3.1.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For $D:\mathcal J\to\mathcal C$, let
$D^{\mathrm{op}}:\mathcal J^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}$ be the
same object and arrow assignment with directions reversed. A cone
$\lambda:\Delta L\Rightarrow D$ is limiting in $\mathcal C$ if and only if the
reversed family is a colimiting cocone under $D^{\mathrm{op}}$ in
$\mathcal C^{\mathrm{op}}$. The dual assertion exchanges colimits and limits.

## Facts & Assumptions

**Given:** A diagram $D:\mathcal J\to\mathcal C$.

[F1] Limits are terminal cones and colimits are initial cocones
([[def-limit-and-colimit-of-a-diagram]]).

[F2] The opposite category has the same objects and reverses all morphisms and
composites ([[def-opposite-category]]).

[L1] A formally dual theorem follows by reversing every morphism and the order
of every composite ([[thm-category-theoretic-duality-principle]]).

## Proof

**Proof technique:** duality.

1.1 Reversing $\lambda_j:L\to D(j)$ gives $\lambda_j^{\mathrm{op}}:D(j)\to L$. The cone equation $D(u)\lambda_j=\lambda_k$ reverses to the cocone equation $\lambda_j^{\mathrm{op}}D(u)^{\mathrm{op}}=\lambda_k^{\mathrm{op}}$. [F2]

1.2 A cone morphism $h:(X,\xi)\to(L,\lambda)$ reverses to a cocone morphism from $(L,\lambda^{\mathrm{op}})$ to $(X,\xi^{\mathrm{op}})$, and this operation is bijective on morphisms. [F2, algebra]

2.1 Consequently terminality of $(L,\lambda)$ among cones is exactly initiality of $(L,\lambda^{\mathrm{op}})$ among cocones. By [F1], this proves both directions of the asserted equivalence. [F1, step 1.1, step 1.2]

3.1 Applying the same translation a second time gives the colimit-to-limit statement. Any later appeal to duality uses this exact reversal of objects, arrows, hypotheses, and conclusion, as required by [L1]. [L1, step 2.1] ∎
