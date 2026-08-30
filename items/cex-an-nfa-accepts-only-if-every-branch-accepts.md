---
id: cex-an-nfa-accepts-only-if-every-branch-accepts
kind: counterexample
title: "One accepting branch is enough for an NFA to accept"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-an-nfa-accepts-only-if-every-branch-accepts]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement refuted

The statement "an NFA accepts a word only if every branch accepts" is false.

## Facts & Assumptions

**Given:** The NFA and input word $abb$ from
[[fs-an-nfa-accepts-only-if-every-branch-accepts]].

[A1] The statement refuted is: an NFA accepts a word only if every branch
accepts.

[L1] The false statement's refutation already exhibits one accepting branch and
one rejecting branch on the same input, by
[[fs-an-nfa-accepts-only-if-every-branch-accepts]].

## Counterexample

**Proof technique:** direct.

1.1 On the input $abb$, one branch follows the path $q_0\xrightarrow{a}q_1\xrightarrow{b}q_2\xrightarrow{b}q_3$ and accepts, while another branch stays on the start-state loop too long and rejects. [L1, given]

2.1 Therefore the same machine and the same word witness that acceptance can occur even when not every branch accepts. [step 1.1]

3.1 This contradicts [A1], so the displayed NFA on $abb$ is a counterexample. [A1, step 2.1] ∎
