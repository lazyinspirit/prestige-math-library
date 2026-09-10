---
id: fs-con-zfc-implies-a-transitive-model-of-zfc
kind: false-statement
title: "Consistency does not justify a transitive ZFC model"
status: draft
origin: pipeline
deps: [thm-consistency-does-not-supply-a-transitive-zfc-model]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.8 p153, background only; exact countermodel supplied by the local strength-gap theorem"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — §4.7 second incompleteness, applied by the owned strength-gap theorem"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

False proposed implication over ZFC: $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{TM}(\mathrm{ZFC})$. Assuming externally $\operatorname{Con}(\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC}))$, there is a set model of ZFC in which this implication fails.

## Facts & Assumptions

[F1] [[thm-consistency-does-not-supply-a-transitive-zfc-model]]: Let $S=\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC})$. Assuming externally Con(S), ZFC does not prove $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{TM}(\mathrm{ZFC})$. Moreover $S+\neg\operatorname{TM}(\mathrm{ZFC})$ is consistent and has a set model. The stronger external premise Con(S) is retained.

## Refutation

**Given:** External Con(ZFC+Con(ZFC)) and the standard arithmetic Con and actual-membership TM formulas.

1.1 Under exactly the stated external premise, F1 supplies a nonempty set model N of $\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC})+\neg\operatorname{TM}(\mathrm{ZFC})$. This N is the countermodel witness and meets the ZFC hypothesis of the proposed assertion. [F1, given]

2.1 In N the antecedent Con(ZFC) is true by its added axiom, while the consequent TM(ZFC) is false by the other added axiom. Thus the implication is false in N by its Boolean satisfaction rule. The supplied model can be at most countable, but its relation is not asserted to be actual membership and it is not asserted to be transitive. Neither countability nor mere consistency repairs the proposed conclusion. [step 1.1, algebra] ∎
