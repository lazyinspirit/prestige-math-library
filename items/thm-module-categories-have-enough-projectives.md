---
id: thm-module-categories-have-enough-projectives
kind: theorem
title: "Module categories have enough projectives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-a-category-with-enough-projectives-and-with-enough-injectives, thm-projective-object-characterisations, cor-every-module-is-a-quotient-of-a-free-module, thm-projective-module-characterizations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, Sections 3.14 and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
pipeline_run: frontier-22
---

## Statement

Assume the Axiom of Choice. For every ring $R$, the abelian category
$R\text{-}\mathbf{Mod}$ has enough projectives.

## Facts & Assumptions

**Given:** A ring $R$.

[L1] Every left $R$-module is a quotient of a free left $R$-module
([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L2] Under the Axiom of Choice, free modules are projective
([[thm-projective-module-characterizations]]).

[L3] Having enough projectives means admitting a projective epimorphism onto
every object
([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a left $R$-module. By [L1], the canonical free module $R^{(M)}$ admits a surjection $R^{(M)}\twoheadrightarrow M$. [L1]
2.1 Under the Axiom of Choice, [L2] makes $R^{(M)}$ projective. So $M$ admits a projective epimorphism from step 1.1. [L2, step 1.1]
3.1 Since $M$ was arbitrary, [L3] shows that $R\text{-}\mathbf{Mod}$ has enough projectives. [L3, step 2.1] ∎