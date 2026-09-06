---
id: fs-nl-equals-conl-follows-by-state-swapping
kind: false-statement
title: "NL equals coNL follows by swapping accepting and rejecting states"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, thm-immerman-szelepcsenyi-nl-equals-conl]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
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

**Given:** nondeterministic acceptance means that at least one branch accepts.

[L1] NL uses the existential accepting-branch convention for nondeterministic read-only-input machines ([[def-l-and-nl]]).

[L2] The actual equality $\mathrm{NL}=\mathrm{coNL}$ follows from inductive counting, not from a terminal-label change ([[thm-immerman-szelepcsenyi-nl-equals-conl]]).

## Refutation

**Proof technique:** direct branch analysis.

1.1 Suppose a machine has on one input both an accepting branch and a rejecting branch. By [L1] it accepts that input. [L1, given]

2.1 After terminal labels are swapped, the former rejecting branch is accepting, so the swapped machine also accepts the same input. The complement language instead rejects it. [L1, step 1.1, contradiction]

3.1 Hence state swapping expresses “there exists a rejecting branch,” not “there is no accepting branch.” [L2] identifies the additional inductive-counting argument that genuinely proves the class equality. [L2, step 2.1] ∎
