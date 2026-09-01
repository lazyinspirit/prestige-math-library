---
id: thm-machine-acceptance-is-undecidable
kind: theorem
title: "The Turing-machine acceptance problem is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-machine-acceptance-problem, lem-diagonal-self-application-machine, def-decidable-and-recognizable-language, def-effective-encoding-of-turing-machines]
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement

The language $A_{TM}$ of [[def-turing-machine-acceptance-problem]] is not
decidable.

## Facts & Assumptions

**Given:** The acceptance language $A_{TM}$.

[L1] A language is decidable exactly when some deterministic Turing machine halts on every input and answers membership correctly, by [[def-decidable-and-recognizable-language]].

[L2] If a deterministic Turing machine $H$ decides $A_{TM}$, then there exists a deterministic one-tape machine $D_H$ with input alphabet $\Sigma_2$ such that, for every coded machine $M$ whose input alphabet contains $\Sigma_2$,
$$ D_H \text{ accepts } \overline{\ulcorner M\urcorner}\iff M \text{ does not accept } \overline{\ulcorner M\urcorner}, $$
by [[lem-diagonal-self-application-machine]].

[L3] Every coded deterministic one-tape machine has one definite chosen code $\ulcorner M\urcorner$, by [[def-effective-encoding-of-turing-machines]].

## Proof

**Proof technique:** contradiction.

1.1 Assume for contradiction that $A_{TM}$ is decidable. Then [L1] gives a deterministic decider $H$ for $A_{TM}$. Apply [L2] to that $H$ and obtain the corresponding machine $D_H$. Because $D_H$ itself has input alphabet $\Sigma_2$, the diagonal equivalence from [L2] applies to $M=D_H$. [assume-contra, L1, L2, construct]

2.1 Let $d=\ulcorner D_H\urcorner$, whose existence is guaranteed by [L3]. Substituting $M=D_H$ into [L2] yields $D_H \text{ accepts } \overline d\iff D_H \text{ does not accept } \overline d$. That is impossible. [L2, L3, step 1.1, contradiction]

3.1 The contradiction in step 2.1 discharges the assumption from step 1.1. Therefore $A_{TM}$ is undecidable. [step 2.1, discharge-contradiction: the assumed decider for $A_{TM}$ cannot exist] ∎
