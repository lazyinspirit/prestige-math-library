---
id: cor-zf-countable-family-of-pairs-without-choice
kind: corollary
title: Relative consistency of a countable family of pairs without choice
status: published
origin: pipeline
deps: [lem-jech-sochor-socks-transfer-is-uniformly-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-choice-for-pairs-and-countable-finite-choice]
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
    - {title: "Jech, The Axiom of Choice, Chapters 4–6", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

Externally, $\operatorname{Con}(\mathrm{ZF})$ implies the consistency of ZF plus a countable family of pairs with no choice function. Consequently $\mathrm{AC}_{\omega,2}$ is not a theorem of ZF if ZF is consistent. The implication uses fixed finite-fragment model transfer; it does not claim a PA-verified uniform Jech–Sochor refutation transformer.

## Facts & Assumptions

**Given:** A hypothetical finite contradiction proof from $\mathrm{ZF}+T$, where $T$ is the displayed socks sentence.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$.

[F2] [[lem-jech-sochor-socks-transfer-is-uniformly-formalizable]] gives, for every externally fixed finite fragment of $\mathrm{ZF}+T$, a proof in a finite fragment of $\mathrm{ZFC}+\mathrm{GCH}$ that it has a model.

[F3] [[def-choice-for-pairs-and-countable-finite-choice]] identifies $T$ with failure of $\mathrm{AC}_{\omega,2}$.

## Proof

1.1 A contradiction proof from $\mathrm{ZF}+T$ uses only a finite target fragment $\Delta$. Fix $\Delta$ externally. F2 supplies a proof in $\mathrm{ZFC}+\mathrm{GCH}$ that a set model of $\Delta$ exists. The alleged contradiction proof and finite-model soundness give a proof that no such model exists. Hence target inconsistency implies inconsistency of $\mathrm{ZFC}+\mathrm{GCH}$. [F2]

2.1 By F1, consistency of ZF implies consistency of $\mathrm{ZFC}+\mathrm{GCH}$, so step 1.1 gives the external relative-consistency implication. F3 identifies $T$ as a countable family of pairs without a choice function. If ZF proved $\mathrm{AC}_{\omega,2}$, then $\mathrm{ZF}+T$ would be inconsistent; therefore consistency of ZF prevents such a proof. [F1, F3, step 1.1] ∎
