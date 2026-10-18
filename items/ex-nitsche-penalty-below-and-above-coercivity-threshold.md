---
id: ex-nitsche-penalty-below-and-above-coercivity-threshold
kind: example
title: Penalties below and above the Nitsche coercivity threshold
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-nitsche-boundary-penalty-forms,
    lem-nitsche-penalty-coercivity,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
---

## Example

Assume Countable Choice and take any nondegenerate bounded simplex with its one-cell matching mesh and degree-$k$ space, $k\ge1$. For either Nitsche sign $\theta\in\{0,1\}$, the algebraic penalty-free boundary form, obtained by evaluating the displayed formula at zero penalty, is not coercive: the constant function has zero gradient and zero form value but positive boundary part in $\|\cdot\|_{E,h}$. In contrast, any $\gamma_0>(1+\theta)^2C_\partial^2/4$ satisfies the sufficient coercivity threshold of [[lem-nitsche-penalty-coercivity]]. The example shows failure at zero and success above the proved bound; it does not claim that every positive penalty below that sufficient bound fails on every mesh.

## Facts & Assumptions

**Given:** Countable Choice; one bounded simplex with all facets boundary; $k\ge1$; a constant trial function; the form and energy seminorm of [[def-nitsche-boundary-penalty-forms]]; and the coercivity result [[lem-nitsche-penalty-coercivity]].

[F1] At $\gamma_0=0$, $a_h^\theta(1,1)=0$ because $\nabla 1=0$ and $\partial_n1=0$; the energy seminorm has $\|1\|_{E,h}^2=\sum_Fh_F^{-1}|F|>0$ ([[def-nitsche-boundary-penalty-forms]]).

[F2] If $\gamma_0>(1+\theta)^2C_\partial^2/4$, then $a_h^\theta(v_h,v_h)\ge\lambda_\theta\|v_h\|_{E,h}^2$ with $\lambda_\theta>0$ ([[lem-nitsche-penalty-coercivity]]).

## Verification

**Given:** The one-cell simplex setup and the data in [F1]–[F2].

1.1 For $v_h=1$, each volume-gradient and normal-flux term in the definition vanishes. At $\gamma_0=0$ the penalty term vanishes too, so $a_h^\theta(1,1)=0$. Since each facet has positive measure and $h_F>0$, the finite sum $\sum_Fh_F^{-1}|F|$ is positive; hence no positive coercivity constant can bound this form below by $\|1\|_{E,h}^2$. [F1, given]

2.1 For any $\gamma_0$ strictly above the displayed threshold, [F2] gives the positive constant $\lambda_\theta$ and proves coercivity on the entire finite-element space, including the constant function. This establishes the stated below/above comparison without making a necessity claim for intermediate positive penalties. [F2, step 1.1, algebra] ∎
