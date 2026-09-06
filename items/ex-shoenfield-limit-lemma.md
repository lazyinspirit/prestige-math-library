---
id: ex-shoenfield-limit-lemma
kind: example
title: "A limit approximation computed from the halting oracle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limit-computable-function, thm-shoenfield-limit-lemma]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Lemma 7.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Example

For the halting set, put $h(e,s)=1$ if the $e$th program halts within $s$
steps and put $h(e,s)=0$ otherwise.

## Facts & Assumptions

**Given:** a program index $e$.

## Verification

**Proof technique:** direct.

1.1 Bounded simulation makes $(e,s)\mapsto h(e,s)$ computable. [given, construct]

2.1 If $e$ never halts every value is $0$; if it halts at stage $r$, every value from $r$ onward is $1$. Thus $\lim_s h(e,s)=\chi_{0'}(e)$, without supplying a computable stage at which this happens. [step 1.1] ∎
