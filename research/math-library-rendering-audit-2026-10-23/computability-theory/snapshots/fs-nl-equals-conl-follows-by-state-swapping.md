---
id: fs-nl-equals-conl-follows-by-state-swapping
kind: false-statement
title: "NL equals coNL follows by swapping accepting and rejecting states"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, def-read-only-input-logspace-machine]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.4.2"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

**False statement.** For a nondeterministic machine, swapping accepting and
rejecting states recognizes the complement language; therefore it proves
$\mathrm{NL}=\mathrm{coNL}$.

## Facts & Assumptions

**Given:** A read-only-input nondeterministic machine that immediately branches to one accepting state and one rejecting state on every input, using no work-tape cells.

[L1] NL uses the existential accepting-branch convention for nondeterministic read-only-input machines ([[def-l-and-nl]], [[def-read-only-input-logspace-machine]]).

## Refutation

**Proof technique:** direct branch analysis.

1.1 The displayed machine has exactly two halting branches on every input, one accepting and one rejecting. By [L1] it accepts every input, within logarithmic work space. [L1, given]

2.1 After terminal labels are swapped, the former rejecting branch is accepting, so the swapped machine also accepts every input. The complement of the original language is empty. [L1, step 1.1]

3.1 Hence state swapping expresses “there exists a rejecting branch,” not “there is no accepting branch,” and cannot by itself prove $\mathrm{NL}=\mathrm{coNL}$. [step 2.1] ∎
