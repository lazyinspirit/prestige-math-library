---
id: ex-diagonal-self-application-machine
kind: example
title: "Building the diagonal machine against a hypothetical acceptance decider"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-diagonal-self-application-machine, thm-machine-acceptance-is-undecidable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
---

## Example

Assume a black-box decider $H$ for $A_{TM}$. The diagonal lemma builds a
machine $D_H$ with input alphabet $\Sigma_2=\{1,2\}$ such that on the recoded
description $\overline{\ulcorner M\urcorner}$ of any machine $M$ with the same
input alphabet, $D_H$ does the opposite of $M$.

## Facts & Assumptions

**Given:** A hypothetical decider $H$ for $A_{TM}$ and the resulting machine $D_H$.

[L1] The diagonal construction yields a machine $D_H$ with
$$ D_H \text{ accepts } \overline{\ulcorner M\urcorner}\iff M \text{ does not accept } \overline{\ulcorner M\urcorner} $$
for every coded machine $M$ whose input alphabet contains $\Sigma_2$, by [[lem-diagonal-self-application-machine]].

[L2] The existence of such a machine forces a contradiction and therefore proves $A_{TM}$ undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Verification

**Proof technique:** direct.

1.1 Applying [L1] with $M=D_H$ itself gives $D_H \text{ accepts } \overline{\ulcorner D_H\urcorner}\iff D_H \text{ does not accept } \overline{\ulcorner D_H\urcorner}$. So the special input is the recoded description $\overline{\ulcorner D_H\urcorner}$, not an informal self-reference slogan. [L1, given]

2.1 The contradiction in step 1.1 is exactly the obstruction recorded in [L2]. This concrete trace is the diagonal core of the undecidability proof. [L2, step 1.1] ∎
