---
id: ex-the-ring-as-a-generator-of-its-module-category
kind: example
title: "The ring R is a generator of R-Mod"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, thm-module-categories-are-grothendieck-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.9"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-22
---

## Example

For any ring $R$ and left $R$-module $M$, a homomorphism $R\to M$ is determined
by the image of $1$. So the canonical coproduct of one copy of $R$ for each
element of $M$ maps onto $M$, which is the concrete generator criterion.

## Facts & Assumptions

**Given:** A ring $R$ and a left $R$-module $M$.

[L1] The canonical coproduct map criterion characterizes generators in AB3
([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]).

[L2] Module categories are Grothendieck categories, hence in particular have
such a generator ([[thm-module-categories-are-grothendieck-categories]]).

## Verification

**Proof technique:** direct.

1.1 Every module homomorphism $u:R\to M$ is determined by $u(1)$, and every element $m\in M$ defines a homomorphism $u_m(r)=rm$. Therefore the canonical map $$\coprod_{m\in M} R\to M$$ that sends the $m$-indexed basis vector to $m$ is surjective. [L1, algebra]
2.1 By [L1], this surjectivity is exactly the generator property for $R$, and [L2] records the same conclusion abstractly at the category level. [L1, L2, step 1.1] ∎