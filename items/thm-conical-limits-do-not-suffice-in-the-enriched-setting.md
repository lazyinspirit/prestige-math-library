---
id: thm-conical-limits-do-not-suffice-in-the-enriched-setting
kind: theorem
title: "Conical weights are a proper special case of enriched weights"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conical-limit-in-an-enriched-category, def-cotensor-and-tensor]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, formula (3.56) and Section 3.9"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Conical weights form a proper special case of enriched weights: not every
weighted-limit problem is itself conical. This distinction already occurs for
$\mathbf{Ab}$-enrichment. This does not assert that the object solving a
particular weighted-limit problem can never also be constructed as a conical
limit of a different diagram.

## Facts & Assumptions

**Given:** The enriched setting of this page.

[L1] A conical enriched limit is the limit for the constant-unit weight on a
free enriched category ([[def-conical-limit-in-an-enriched-category]]).

[L2] Cotensors are weighted limits over the one-object free enriched category,
with an arbitrary object of the base as weight
([[def-cotensor-and-tensor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], a conical limit uses the constant weight at the tensor unit. By [L2], weighted limits already include the one-object weights given by arbitrary objects $X\in\mathcal V$; these are the cotensors $X\pitchfork C$. Thus conical weights constitute only the tensor-unit case of this family. [L1, L2, given]

2.1 For $\mathcal V=\mathbf{Ab}$, the tensor unit is $\mathbb Z$, while $X=\mathbb Z/2$ is a legitimate nonunit weight. Its weighted-limit universal property is $$\mathcal B(B,(\mathbb Z/2)\pitchfork C)\cong[\mathbb Z/2,\mathcal B(B,C)],$$ whereas the conical weight on the one-object free enriched category is the constant weight $\mathbb Z$. Since $\mathbb Z/2\not\cong\mathbb Z$, these are different weights and different specified universal properties. [L1, L2, step 1.1]

3.1 Thus the class of enriched weights is strictly larger than the class of conical weights, already over $\mathbf{Ab}$. A particular cotensor may nevertheless be computable from conical limits—for example, when it exists, $(\mathbb Z/2)\pitchfork C$ can be the conical equalizer of $2_C$ and $0_C$. The distinction proved here is between the weighted problems, not a prohibition on alternative constructions of their representing objects. [L1, L2, step 2.1] ∎
