---
id: cex-undecidable-means-no-instance-can-be-answered
kind: counterexample
title: "An immediate-accept machine gives an easy yes-instance inside an undecidable language"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-undecidable-means-no-instance-can-be-answered, def-turing-machine-acceptance-problem]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement refuted

The claim "undecidable means no individual instance can be answered" is false.
An explicit yes-instance already appears inside $A_{TM}$.

## Facts & Assumptions

**Given:** The machine $M_{\mathrm{yes}}$ that immediately accepts every input.

[L1] A coded pair lies in $A_{TM}$ exactly when the decoded machine accepts the decoded input, by [[def-turing-machine-acceptance-problem]].

[L2] The false statement being refuted is the one recorded in [[fs-undecidable-means-no-instance-can-be-answered]].

## Counterexample

**Proof technique:** direct.

1.1 The machine $M_{\mathrm{yes}}$ accepts the one-symbol input word $1$ on its first step. Therefore [L1] gives $\langle\ulcorner M_{\mathrm{yes}}\urcorner,\widehat 1\rangle\in A_{TM}$. [L1, given]

2.1 This specific membership question has a completely transparent yes-answer, so it contradicts the slogan named in [L2]. Hence the slogan is false. [L2, step 1.1] ∎
