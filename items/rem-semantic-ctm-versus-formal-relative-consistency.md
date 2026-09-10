---
id: rem-semantic-ctm-versus-formal-relative-consistency
kind: remark
title: "Two distinct outputs of a consistency construction"
status: draft
origin: pipeline
deps: [def-countable-transitive-model-and-fragment-transfer, thm-finite-fragment-relative-consistency-transfer, thm-formal-relative-consistency-from-verified-proof-reduction, thm-consistency-does-not-supply-a-transitive-zfc-model]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 pp10–12, finite-fragment discussion"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Remarks

A semantic theorem $\operatorname{CTM}(T)\to\operatorname{CTM}(U)$ and a formal theorem $B\vdash\operatorname{Con}(T)\to\operatorname{Con}(U)$ have different premises and conclusions.

Use [[def-countable-transitive-model-and-fragment-transfer]] to specify actual membership and external countability. A later model construction must identify its finite target fragment, source fragment, auxiliary hypotheses and proof of source-model existence when applying [[thm-finite-fragment-relative-consistency-transfer]]. An internal consistency implication also needs the verified total proof-code reduction in [[thm-formal-relative-consistency-from-verified-proof-reduction]]. The obstruction in [[thm-consistency-does-not-supply-a-transitive-zfc-model]] prevents replacing a transitive-model hypothesis by bare consistency. These are proved interfaces and methodological instructions, not a new unproved consistency claim.
