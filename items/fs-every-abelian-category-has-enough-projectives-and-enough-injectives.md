---
id: fs-every-abelian-category-has-enough-projectives-and-enough-injectives
kind: false-statement
title: "FALSE: every abelian category has enough projectives and enough injectives"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-a-category-with-enough-projectives-and-with-enough-injectives, thm-enough-projectives-gives-projective-resolutions, cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

> **False.** Every abelian category has enough projectives and enough > injectives.
## Facts & Assumptions

**Given:** The abelian category $\mathbf{FinAb}$ of finite abelian groups.

[L1] Enough projectives and enough injectives are extra hypotheses, not part of the definition of abelian category ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[L2] The projective-resolution construction on this page still needs a chosen projective epimorphism at each stage ([[thm-enough-projectives-gives-projective-resolutions]]).

[L3] The Grothendieck theorem gives enough injectives only under additional Grothendieck hypotheses ([[cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution]]).
## Refutation

**Proof technique:** direct.

1.1 The category $\mathbf{FinAb}$ is abelian. If it had enough projectives in the sense of [L1], then some nonzero projective object $P$ would surject onto $\mathbb Z/p\mathbb Z$ for some prime $p$. Choose a cyclic quotient $u:P\twoheadrightarrow\mathbb Z/p^m\mathbb Z$ with $m$ maximal among all cyclic $p$-power quotients of $P$. [L1, choose]

2.1 The canonical quotient $q:\mathbb Z/p^{m+1}\mathbb Z\twoheadrightarrow\mathbb Z/p^m\mathbb Z$ is epic. If $P$ were projective, $u$ would lift across $q$, producing a surjection $P\twoheadrightarrow\mathbb Z/p^{m+1}\mathbb Z$, contradicting maximality of $m$. So $\mathbf{FinAb}$ does not have enough projectives, and the universal statement is false. The positive statements [L2] and [L3] are therefore extra-hypothesis results, not automatic consequences of abelianity. [L2, L3, step 1.1, algebra] ∎
