---
id: ex-positive-roots-and-highest-root-of-g-two
kind: example
title: Positive roots and highest root of G_2
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system, ex-root-systems-a-two-b-two-and-g-two, thm-existence-of-each-classified-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, the G_2 model in the proof of Theorem 21.10, printed p. 113"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

In the $G_2$ model with a short simple root $\alpha$ and a long simple root
$\beta$, the positive roots are
$$\alpha,\quad\beta,\quad\alpha+\beta,\quad2\alpha+\beta,\quad3\alpha+\beta,\quad3\alpha+2\beta,$$
and the highest root is $3\alpha+2\beta$.

## Facts & Assumptions

**Given:** The $G_2$ model $\Phi=\{\pm\alpha_0,\pm\beta_0,\pm(\alpha_0+\beta_0),\pm(\alpha_0+2\beta_0),\pm(\alpha_0+3\beta_0),\pm(2\alpha_0+3\beta_0)\}$ with long root $\alpha_0$ and short root $\beta_0$. Rename the ordered base $\{\beta_0,\alpha_0\}$ as $\{\alpha,\beta\}$, so $\alpha=\beta_0$ is short and $\beta=\alpha_0$ is long.

[L1] In the model the roots $\pm(\alpha_0+\beta_0)$, $\pm(\alpha_0+2\beta_0)$, $\pm(\alpha_0+3\beta_0)$, $\pm(2\alpha_0+3\beta_0)$ occur, and the Cartan matrix relative to $\{\beta_0,\alpha_0\}$ is the $G_2$ matrix ([[ex-root-systems-a-two-b-two-and-g-two]], [[thm-existence-of-each-classified-root-system]]).

[L2] In a reduced crystallographic root system, every positive root is a nonnegative integral combination of the chosen simple roots; if the finite root system is also irreducible, it has a unique highest root ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]]).

## Verification

**Proof technique:** direct.

1.1 Write $\alpha_0$ for the long root and $\beta_0$ for the short root of the model, so that $\alpha=\beta_0$, $\beta=\alpha_0$. The twelve roots listed in the model become, in terms of $\alpha,\beta$: $\pm\alpha,\pm\beta,\pm(\alpha+\beta),\pm(2\alpha+\beta),\pm(3\alpha+\beta),\pm(3\alpha+2\beta)$. Hence the positive roots with respect to the base $\{\alpha,\beta\}$ are exactly the six nonnegative combinations displayed, of heights $1,1,2,3,4,5$. [L1, L2, algebra]

2.1 The root $3\alpha+2\beta$ has height $5$, the largest among the positive roots, and it is the unique highest root by [L2].  Directly, each of the other five coefficient pairs $(1,0),(0,1),(1,1),(2,1),(3,1)$ is coordinatewise at most $(3,2)$ and is not equal to it, so every other positive root is strictly below $3\alpha+2\beta$ in the root order. [L2, step 1.1, algebra] ∎
