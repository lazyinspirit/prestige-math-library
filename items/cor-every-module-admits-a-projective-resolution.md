---
id: cor-every-module-admits-a-projective-resolution
kind: corollary
title: "Under the Axiom of Choice, every module admits a projective resolution"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-iterated-free-module-resolution-is-canonical-in-zf, thm-free-modules-are-projective-with-choice-boundary, def-projective-resolution-in-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "The Stacks Project, Section 12.28: Projectives"
      url: "https://stacks.math.columbia.edu/tag/013A"
pipeline_run: frontier-28
---
## Statement

Assume the Axiom of Choice. Then every left module over a unital ring admits a projective resolution.
## Facts & Assumptions

**Given:** A unital ring $R$ and a left $R$-module $M$.

[L1] The canonical iterated free-cover construction gives an exact augmented free resolution in ZF ([[prop-the-iterated-free-module-resolution-is-canonical-in-zf]]).

[L2] Under the Axiom of Choice, every free module is projective ([[thm-free-modules-are-projective-with-choice-boundary]]).

[L3] A projective resolution is an exact augmented complex of projectives ([[def-projective-resolution-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], the module $M$ has a canonical exact augmented complex of free $R$-modules ending in $M$. Because AC is assumed, [L2] makes every term of that complex projective. [L1, L2]

2.1 By [L3], that exact augmented complex is a projective resolution of $M$, including the case $M=0$. [L3, step 1.1] ∎
