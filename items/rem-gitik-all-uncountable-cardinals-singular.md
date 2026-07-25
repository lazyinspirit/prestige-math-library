---
id: rem-gitik-all-uncountable-cardinals-singular
kind: remark
title: "Gitik 1980: consistently, every uncountable cardinal is singular"
status: draft
origin: session
proved_here: false
deps: [rem-feferman-levy-model]
justified_by: []
forward_refs: [def-cardinal, thm-hartogs, rem-choice-ledger]
aliases: []
landmark: false
short: "from large cardinals: no uncountable regular cardinal"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Gitik, All uncountable cardinals can be singular, Israel J. Math. 35 (1980), 61-88"
      url: "https://doi.org/10.1007/BF02760939"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
pipeline_run: null
---

## Statement

**If ZFC together with "there is a proper class of strongly compact cardinals"
is consistent, then so is ZF + "every uncountable cardinal is singular".**

That is: relative to that large-cardinal hypothesis, there is a model of ZF in
which no uncountable cardinal is regular at all, so $\aleph_1$, $\aleph_2$ and
every other uncountable aleph has cofinality $\omega$. Gitik (1980) obtains it by
an iterated Prikry-style forcing over a model with a proper class of strongly
compact cardinals, followed by a symmetric submodel.

## Remarks

- **Not proved in this library.** No forcing, no large cardinals, no cofinality
  theory.

- **What would prove it.** Large-cardinal theory (strongly compact cardinals and
  their embeddings), Prikry forcing and its iterations, and symmetric extensions.
  This is the deepest result recorded on this page and is far outside the
  library's stack.

- **Why it matters here.** It is the extreme point of the phenomenon that
  [[rem-feferman-levy-model]] introduces. That model makes $\omega_1$ singular;
  Gitik's makes **every** uncountable cardinal singular. The practical reading
  for this library is that regularity of an uncountable cardinal is never a free
  structural fact about [[def-cardinal]]: it is a consequence of choice, and
  without choice it can fail everywhere at once. What survives in ZF is the much
  weaker existence statement [[thm-hartogs]], which is why the library leans on
  Hartogs numbers and never on regularity. [[rem-choice-ledger]] records that
  distinction.

- **Conditional discipline.** The hypothesis is a large-cardinal consistency
  assumption strictly stronger than Con(ZFC), and the conclusion is a relative
  consistency statement. Nothing here asserts that strongly compact cardinals
  exist.
