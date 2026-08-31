---
id: cex-recognizable-means-total
kind: counterexample
title: "A recognizer for {0} that loops on every nonmember"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-recognizable-means-total, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Statement refuted

Whenever a machine recognizes a language, it halts on every input.

## Facts & Assumptions

**Given:** The one-word language $\{0\}\subseteq\{0,1\}^*$.

[L1] By [[def-decidable-and-recognizable-language]], recognizers are required to accept the members of their language, but they may diverge on nonmembers.

[L2] By [[fs-recognizable-means-total]], the statement claims that such divergence cannot occur.

## Counterexample

**Proof technique:** direct.

1.1 Let $M$ accept immediately on input `0` and otherwise move right forever without entering any halting state. Then [L1] shows that $M$ recognizes exactly $\{0\}$. [L1, given]

2.1 Every nonmember of $\{0\}$ makes $M$ diverge, so $M$ is not total. This contradicts the claim summarized in [L2]. [L2, step 1.1]

3.1 Therefore $M$ is a concrete counterexample to the refuted statement. [step 1.1, step 2.1] ∎
