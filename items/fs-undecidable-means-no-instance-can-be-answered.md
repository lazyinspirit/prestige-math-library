---
id: fs-undecidable-means-no-instance-can-be-answered
kind: false-statement
title: "FALSE: undecidable means no individual instance can be answered"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-machine-acceptance-is-undecidable, def-turing-machine-acceptance-problem]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement

If a language is undecidable, then no specific instance of it can ever be
answered correctly.

## Facts & Assumptions

**Given:** The acceptance problem $A_{TM}$.

[L1] The language $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

[L2] A member of $A_{TM}$ is a coded machine/input pair on which the machine accepts the input, by [[def-turing-machine-acceptance-problem]].

## Refutation

**Proof technique:** direct.

1.1 Let $M_{\mathrm{yes}}$ be the machine that immediately enters its accepting state on every input. Then, by [L2], the specific coded pair $\langle\ulcorner M_{\mathrm{yes}}\urcorner,\widehat 1\rangle$ lies in $A_{TM}$, and this yes-answer is completely explicit. [L2, given, construct]

2.1 Step 1.1 shows that at least one individual instance of $A_{TM}$ is easy to answer, while [L1] says the whole language is still undecidable. So undecidability cannot mean that every particular instance is beyond analysis; it means only that no single algorithm decides all instances. [L1, step 1.1] ∎
