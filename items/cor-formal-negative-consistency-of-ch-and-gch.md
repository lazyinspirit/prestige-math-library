---
id: cor-formal-negative-consistency-of-ch-and-gch
kind: corollary
title: Externally fixed-fragment relative consistency of not CH and not GCH
status: draft
origin: pipeline
deps: [lem-formal-cohen-forcing-verification-compiler]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Chapters VII–VIII", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Statement

Externally, $\operatorname{Con}(\mathrm{ZFC})$ implies each of $\operatorname{Con}(\mathrm{ZFC}+\neg\mathrm{CH})$ and $\operatorname{Con}(\mathrm{ZFC}+\neg\mathrm{GCH})$. The implication here is a metatheorem obtained by applying a separate finite-fragment construction to any purported contradiction proof; no PA proof of a uniform refutation transformer is claimed.

## Facts & Assumptions

**Given:** The ordinary syntactic consistency predicate and one hypothetical finite refutation.

[F1] [[lem-formal-cohen-forcing-verification-compiler]] gives, for each externally fixed finite fragment of either target theory, a ZFC proof that a model of that fragment exists.

## Proof

1.1 If $\mathrm{ZFC}+\neg\mathrm{CH}$ were inconsistent, a contradiction proof would use only a finite set $\Delta$ of its axioms. Fix that $\Delta$ externally. F1 gives a ZFC proof of the existence of a model of $\Delta$. Soundness for the finite proof shows that no such model exists, so ZFC itself would be inconsistent. Contraposition gives the first consistency implication. [F1]

2.1 The same argument with a finite refutation of $\mathrm{ZFC}+\neg\mathrm{GCH}$ and the second F1 construction gives the other implication. Both are external consequences of fixed-fragment proofs; the positive consistency counterparts are separate results. [F1, step 1.1] ∎
