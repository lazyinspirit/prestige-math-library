---
id: thm-formal-consistency-of-zf-with-failure-of-choice
kind: theorem
title: Relative consistency of ZF with failure of Choice
status: published
origin: pipeline
deps: [lem-basic-cohen-symmetric-construction-is-uniformly-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Theorem 5.16", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

Externally, $\operatorname{Con}(\mathrm{ZF})$ implies $\operatorname{Con}(\mathrm{ZF}+\neg\mathrm{AC})$. The implication uses separately fixed finite-fragment model proofs; no PA-verified uniform symmetric-model proof transformer or transitive model of full ZF is asserted.

## Facts & Assumptions

**Given:** One hypothetical finite contradiction proof from $\mathrm{ZF}+\neg\mathrm{AC}$.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$, and hence consistency of ZFC.

[F2] [[lem-basic-cohen-symmetric-construction-is-uniformly-formalizable]] gives a ZFC proof of a set model for every externally fixed finite target fragment.

[F3] [[def-axiom-of-choice]] is the sentence negated in the target.

## Proof

1.1 The hypothetical contradiction proof uses a finite list $\Delta$ of axioms of ZF and the negation of F3. Fix this list externally. F2 provides a ZFC proof that a set model of $\Delta$ exists. Soundness for the particular finite contradiction proof gives a ZFC proof that no such model exists. Thus target inconsistency implies inconsistency of ZFC. [F2, F3]

2.1 F1 makes ZFC consistent whenever ZF is consistent. Contraposition in step 1.1 therefore proves the stated external relative-consistency implication. Source Choice is available in the ambient ZFC construction; the symmetric target refutes it. Each target proof is handled separately, without a claim that PA verifies a uniform map on proof codes. [F1, step 1.1] ∎
