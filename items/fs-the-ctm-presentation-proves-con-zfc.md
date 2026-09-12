---
id: "fs-the-ctm-presentation-proves-con-zfc"
kind: "false-statement"
title: "False statement: the CTM presentation proves Con(ZFC)"
deps: ["thm-semantic-generic-extension-theorem-for-countable-transitive-models", "thm-formal-consistency-transfer-by-forcing", "thm-consistency-does-not-supply-a-transitive-zfc-model", "thm-second-incompleteness-for-standard-provability", "lem-zf-arithmetic-interpretation-and-effective-axioms"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

False statement: Con(ZFC) alone supplies a countable transitive model of all ZFC, so the semantic forcing presentation proves Con(ZFC) inside ZFC.

The refutation has two precise consistency qualifications. Under external Con(ZFC), the asserted internal proof of Con(ZFC) is impossible. For a set-model counterexample to the claimed derivable implication from consistency to a transitive model, retain the stronger external premise $\operatorname{Con}(S)$, where $S=\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC})$.

## Facts & Assumptions

**Given:** The standard certified proof predicates. Use external Con(ZFC) for the unprovability assertion, and external Con(S) for the stronger countermodel assertion.

[F1] [[thm-semantic-generic-extension-theorem-for-countable-transitive-models]] assumes a CTM and does not construct one from consistency.

[F2] [[thm-formal-consistency-transfer-by-forcing]] gives relative consistency from verified finite-fragment proof constructors.

[F3] [[thm-consistency-does-not-supply-a-transitive-zfc-model]] under Con(S) gives a model of $S+\neg\operatorname{TM}(\mathrm{ZFC})$ and nonderivability of the claimed TM implication.

[F4] [[thm-second-incompleteness-for-standard-provability]] forbids a consistent effective theory satisfying the standard arithmetic/derivability hypotheses from proving its own Con sentence.

[F5] [[lem-zf-arithmetic-interpretation-and-effective-axioms]] verifies those hypotheses for ZFC's standard presentation.

## Refutation

1.1 Under Con(S), apply F3 to obtain a set model K of $S+\neg\operatorname{TM}(\mathrm{ZFC})$. Inside K, Con(ZFC) holds and there is no transitive model of ZFC, hence no countable transitive one either. This is an actual model witness against derivability of the asserted consistency-to-CTM implication in ZFC. It is not asserted that K is externally well-founded or that Con(S) follows from Con(ZFC). [F3, given]

1.2 Independently, under external Con(ZFC), F5 verifies the arithmetic and standard derivability conditions for ZFC. F4 therefore gives $\mathrm{ZFC}\nvdash\operatorname{Con}(\mathrm{ZFC})$. Thus the claimed internal proof of its own consistency cannot be furnished by forcing or by any other ZFC argument under this premise. [F4, F5, given]

2.1 F1 begins with a full CTM as a hypothesis; applying it preserves that hypothesis and supplies no missing model-existence proof. F2 instead transforms verified finite-fragment constructions into a conditional Con implication. Accordingly neither theorem licenses the false inference, and the two precise failures in steps 1.1 and 1.2 refute its two assertions without confusing full CTMs with finite reflected fragments. [F1, F2, step 1.1, step 1.2] ∎
