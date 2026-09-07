---
id: cor-ac-iff-zorn
kind: corollary
title: "The Axiom of Choice and Zorn's lemma are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-zorn, thm-zorn-implies-ac, def-axiom-of-choice]
justified_by: []
forward_refs: [rem-choice-strengths, thm-ultrafilter-lemma]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Over ZF, the Axiom of Choice ([[def-axiom-of-choice]]) and Zorn's lemma
([[thm-zorn]]) are equivalent: each implies the other.

## Facts & Assumptions

**Given:** The axioms of ZF.

[L1] The Axiom of Choice implies Zorn's lemma ([[thm-zorn]]).

[L2] Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]).

## Proof

**Proof technique:** direct.

1.1 Assuming the Axiom of Choice, every nonempty poset in which each chain has an upper bound has a maximal element, which is Zorn's lemma. [L1]

1.2 Assuming Zorn's lemma, every family of nonempty sets has a choice function, which is the Axiom of Choice. [L2]

2.1 Each statement implies the other over ZF, so they are equivalent. [step 1.1, step 1.2] ∎

## Remarks

- This is the item later pages cite when they want to use either form without re-arguing the passage between them. The ultrafilter lemma ([[thm-ultrafilter-lemma]]) uses the Zorn form; results about products of nonempty sets use the choice-function form.
- Equivalence is over **ZF**, and it is a genuine two-way implication proved
  here. It does not by itself decide whether either equivalent statement is a
  theorem of ZF.
- Because the two are equivalent, a theorem proved with Zorn's lemma costs **at
  most** the Axiom of Choice. The equivalence gives an upper bound on the proof,
  not a lower bound on the theorem. [[thm-ultrafilter-lemma]] is the standing
  example: the proof supplied here routes through Zorn, while
  [[rem-choice-strengths]] deliberately makes no unproved claim about the least
  choice principle sufficient for the statement.
