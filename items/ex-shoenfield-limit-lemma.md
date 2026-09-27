---
id: ex-shoenfield-limit-lemma
kind: example
title: "A limit approximation computed from the halting oracle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limit-computable-function, thm-shoenfield-limit-lemma]
forward_refs: [def-turing-jump]
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
    - title: "Ludovic Patey, Computability Theory, Lemma 7.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Example

Use the fixed effective numbering $\Phi_e^A$ from the definition of the
Turing jump. For $0'=\{e:\Phi_e^\varnothing(e)\downarrow\}$, put $h(e,s)=1$
if $\Phi_e^\varnothing(e)$ halts within $s$ steps and put $h(e,s)=0$
otherwise.

## Facts & Assumptions

**Given:** a program index $e$.

[F1] The fixed effective numbering defines $0'$ by diagonal halting ([[def-turing-jump]]).

## Verification

**Proof technique:** direct.

1.1 The numbering and decoder are effective, so bounded simulation makes $(e,s)\mapsto h(e,s)$ computable. [F1, given, construct]

2.1 If $\Phi_e^\varnothing(e)$ never halts every value is $0$; if it halts at stage $r$, every value from $r$ onward is $1$. Thus $\lim_s h(e,s)=\chi_{0'}(e)$, without supplying a computable stage at which this happens. [F1, step 1.1] ∎
