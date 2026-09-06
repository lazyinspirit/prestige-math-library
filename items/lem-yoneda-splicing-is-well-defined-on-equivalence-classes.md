---
id: lem-yoneda-splicing-is-well-defined-on-equivalence-classes
kind: lemma
title: "Yoneda splicing is well-defined on equivalence classes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-of-n-fold-extensions, def-yoneda-splice-product]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Splicing $p$- and $q$-fold extensions induces a well-defined map on their generated equivalence classes.

## Facts & Assumptions

**Given:** Equivalent representatives of two composable higher extensions.

## Proof

**Proof technique:** direct.

1.1 A generating chain map between one pair of representatives can be concatenated with the identity chain map on the other factor; the result is a chain map of the spliced exact sequences that is the identity at both ends. [given, construct]

2.1 Such maps generate the equivalence relation of [[def-equivalence-of-n-fold-extensions]], so repeated generating replacements do not change the class of the splice defined in [[def-yoneda-splice-product]]. [step 1.1, algebra] ∎
