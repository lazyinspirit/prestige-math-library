---
id: thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category
kind: theorem
title: "Limits and colimits are Kan extensions along the functor to the terminal category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, def-limit-and-colimit-of-a-diagram, def-comma-slice-and-coslice-categories, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Theorem X.7.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a category, let $\mathbf 1$ be the terminal category, and
let $!:\mathcal C\to\mathbf 1$ be the unique functor.

For a diagram $F:\mathcal C\to\mathcal E$:

1. a colimit of $F$ is a left Kan extension of $F$ along $!$;
2. a limit of $F$ is a right Kan extension of $F$ along $!$.

So the ordinary universal properties of limits and colimits are the Kan
extension universal properties for the unique map to the terminal category.

## Facts & Assumptions

**Given:** A diagram $F:\mathcal C\to\mathcal E$ and the unique functor $!:\mathcal C\to\mathbf 1$.

[F1] Limits and colimits are terminal cones and initial cocones ([[def-limit-and-colimit-of-a-diagram]]).

[L1] The comma-category formulas compute left and right Kan extensions ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[F2] The terminal category has one object and only its identity morphism ([[def-initial-terminal-and-zero-object]]).

[F3] The comma categories $(!\downarrow *)$ and $(*\downarrow !)$ are formed as in [[def-comma-slice-and-coslice-categories]].

## Proof

**Proof technique:** direct.

1.1 Let $*$ be the unique object of $\mathbf 1$. An object of $(!\downarrow *)$ is an object $c$ of $\mathcal C$ together with the unique arrow $!\,c\to *$, and a morphism is exactly a morphism of $\mathcal C$; so $(!\downarrow *)$ is canonically just $\mathcal C$. The same argument shows $(*\downarrow !)$ is also canonically $\mathcal C$. [F2, F3]

2.1 Under the identification of step 1.1, the comma-category colimit formula of [L1] says that a left Kan extension value at $*$ is an initial cocone under the original diagram $F$. By [F1], that is exactly a colimit of $F$. [F1, L1, step 1.1]

3.1 Under the same identification, the comma-category limit formula of [L1] says that a right Kan extension value at $*$ is a terminal cone over $F$. By [F1], that is exactly a limit of $F$. [F1, L1, step 1.1] ∎
