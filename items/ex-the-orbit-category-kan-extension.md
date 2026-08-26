---
id: ex-the-orbit-category-kan-extension
kind: example
title: "The orbit-set and fixed-point constructions as Kan extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, prop-monoids-and-groups-as-one-object-categories, def-group-action, prop-connected-groupoid-equivalent-to-an-automorphism-group, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.2.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $G$ be a group, view it as a one-object category, and let
$! : G \to \mathbf 1$ be the unique functor to the terminal category. A
$G$-action on a set $X$ is the same thing as a functor $X:G\to\mathbf{Set}$
([[prop-monoids-and-groups-as-one-object-categories]], [[def-group-action]]).

Then the left Kan extension of $X$ along $!$ is the orbit set $X/G$, while the
right Kan extension is the fixed-point set $X^G$.

## Facts & Assumptions

**Given:** A group $G$, a $G$-set $X$, and the unique functor $! : G\to\mathbf 1$.

[F1] Groups are one-object categories and $G$-actions are functors to $\mathbf{Set}$ ([[prop-monoids-and-groups-as-one-object-categories]], [[def-group-action]], [[prop-sets-and-functions-form-category-set]]).

[L1] The comma-category formulae compute left and right Kan extensions ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[F2] The one-object category of a group is connected, hence equivalent to the automorphism groupoid of its sole object ([[prop-connected-groupoid-equivalent-to-an-automorphism-group]]).

## Verification

**Proof technique:** direct.

1.1 For the unique object of $\mathbf 1$, the comma category $(!\downarrow *)$ is just the one-object category $G$ again, by [F1] and [F2]. A cocone from the $G$-action diagram $X:G\to\mathbf{Set}$ to a set $Y$ is exactly a function $q:X\to Y$ constant on $G$-orbits, so its universal example is the quotient map $X\to X/G$. Therefore [L1] identifies the orbit set with the left Kan extension of $X$ along $!$. [F1, F2, L1]

2.1 Dually, a cone from a set $Y$ to the action diagram is exactly a function $Y\to X$ landing in the equalizer of all action maps, that is, in the fixed-point set $X^G$. Hence [L1] identifies $X^G$ with the right Kan extension of $X$ along $!$. [F1, L1] ∎
