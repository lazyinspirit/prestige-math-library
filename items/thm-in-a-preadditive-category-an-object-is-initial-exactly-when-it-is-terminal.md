---
id: thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal
kind: theorem
title: "In a preadditive category, an object is initial exactly when it is terminal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preadditive-category, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemma 12.3.2"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

In a preadditive category, an object is initial if and only if it is terminal.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ and an object $Z$ of
$\mathcal C$.

[L1] In a preadditive category every hom-set is an abelian group and
composition is bilinear ([[def-preadditive-category]]).

[L2] An initial object has a unique map out of it, and a terminal object has a
unique map into it ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Z$ is initial. Then $\mathcal C(Z,Z)$ has exactly one element by [L2], so its identity morphism and its additive zero coincide. Hence $1_Z=0_{Z,Z}$. [L1, L2]

2.1 Let $f:A\to Z$. Using step 1.1, $f=1_Z\circ f=0_{Z,Z}\circ f$. By bilinearity from [L1], the right-hand side is the zero element of $\mathcal C(A,Z)$. Thus every morphism $A\to Z$ equals the same zero arrow, so there is exactly one such morphism and $Z$ is terminal. [L1, L2, step 1.1]

2.2 The same argument with arrows reversed shows that a terminal object is initial: if $Z$ is terminal then $\mathcal C(Z,Z)$ again has one element, so $1_Z=0_{Z,Z}$, and for any $g:Z\to A$ one has $g=g\circ1_Z=g\circ0_{Z,Z}=0$. Hence there is exactly one map from $Z$ to $A$. [L1, L2, step 1.1]

3.1 Steps 2.1 and 2.2 prove the two implications, so initial and terminal are equivalent in a preadditive category. [step 2.1, step 2.2] ∎
