---
id: cex-a-proper-subgroup-of-r-can-be-nonmeasurable
kind: counterexample
title: "Assuming Choice, a proper subgroup of $(\\mathbb{R},+)$ can be nonmeasurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [lem-hamel-basis-exists, cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn,
       thm-lebesgue-measure-of-a-box-of-every-kind, thm-rationals-countable,
       thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       thm-finite-and-countable-subadditivity-of-measures]
aliases: []
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Non-measurable subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Non-measurable_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every proper subgroup of $(\mathbb{R},+)$ is Lebesgue
measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Assuming the Axiom of Choice, $\mathbb{R}$ has a Hamel basis over $\mathbb{Q}$, and each basis vector carries a well-defined $\mathbb{Q}$-linear coefficient map ([[lem-hamel-basis-exists]]).

[L2] A Lebesgue measurable subgroup of $(\mathbb{R},+)$ of positive measure is all of $\mathbb{R}$ ([[cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn]]).

[L3] The interval $[0,1]$ is Lebesgue measurable with measure $1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L4] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L5] Lebesgue measurability and Lebesgue measure are invariant under translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L6] A countable union of measurable null sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] choose a Hamel basis $B$, a basis vector $b_\star \in B$, and the corresponding coefficient map $\Lambda_{b_\star}:\mathbb{R}\to\mathbb{Q}$. Its kernel $$W:=\{x \in \mathbb{R}:\Lambda_{b_\star}(x)=0\}$$ is a subgroup of $(\mathbb{R},+)$, and it is proper because $\Lambda_{b_\star}(b_\star)=1$. Every real is of the form $qb_\star+w$ with $q \in \mathbb{Q}$ and $w \in W$. [L1, construct]

2.1 If $W$ were measurable with positive measure, [L2] would force $W=\mathbb{R}$, contradicting step 1.1. [step 1.1, L2]

2.2 If $W$ were measurable with measure $0$, then every translate $qb_\star+W$ would also be measurable with measure $0$ by [L5], and step 1.1 says these countably many translates cover $\mathbb{R}$. Their union would be null by [L4] and [L6], yet it contains the measurable interval $[0,1]$ of measure $1$ by [L3], a contradiction. [step 1.1, L3, L4, L5, L6]

3.1 So the proper subgroup $W$ is not Lebesgue measurable, and it refutes the claim. [step 2.1, step 2.2] ∎
