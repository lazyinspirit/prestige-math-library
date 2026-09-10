---
id: thm-finite-fragment-relative-consistency-transfer
kind: theorem
title: "Finite-fragment model transfer proves relative consistency"
status: published
origin: pipeline
deps: [def-countable-transitive-model-and-fragment-transfer, thm-model-existence-versus-syntactic-consistency, lem-derivation-finite-support-and-concatenation]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 paragraph preceding Lemma 4.1 pp10–11, corrected explicit formalization hypotheses"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

Let T extend enough ZF to formalize set-model soundness, and let U be an explicitly countable sentence theory. Suppose that for each external finite $\Delta\subseteq U$ there are a finite $\Gamma$ and T proofs of existence of a suitable TM/CTM of $\Gamma$ and of its conversion into a set model of $\Delta$. Then external Con(T) implies Con(U). This is a metatheorem with fixed finite proof inputs, not a uniform internal all-fragment assertion.

## Facts & Assumptions

[F1] [[lem-derivation-finite-support-and-concatenation]]: In ZF, every derivation from a sentence theory uses finitely many assumptions. Weakening, concatenation and replacement of proved sentence premises by their proofs preserve derivability. The union of an inclusion-chain of consistent sentence theories in one fixed signature is consistent, including the empty chain.

[F2] [[def-countable-transitive-model-and-fragment-transfer]]: For a sentence theory $\Gamma$ in the membership language, $\operatorname{TM}(\Gamma)$ means that some nonempty transitive set M, with actual restricted membership, satisfies every sentence of $\Gamma$. Transitive means $\forall x\in M\forall y\in x(y\in M)$. The assertion $\operatorname{CTM}(\Gamma)$ additionally requires an external injection $M\to\omega$.

A finite-fragment transfer specifies, for each external finite target fragment $\Delta$, a finite source fragment $\Gamma$ and a theorem converting every suitable TM or CTM of $\Gamma$ into a set model of $\Delta$. Suitability includes every auxiliary axiom, parameter restriction and metatheory needed by the conversion. Inclusion $\Gamma\subseteq\mathrm{ZF}$ is syntactic, using the fixed axiom presentation.

The model convention is def-theories-models-and-semantic-consequence, and the schema syntax is def-coded-first-order-zf-theory. For definable classes use def-relativization-to-a-definable-class separately for each fixed formula; do not quantify over a universe truth predicate. Countability in this definition is outside the proposed model. A model or CTM of the full source theory is not part of finite-fragment data unless explicitly assumed.

[F3] [[thm-model-existence-versus-syntactic-consistency]]: In external ZF, an explicitly countable sentence theory is consistent iff it has a nonempty set model, and iff it has a model with carrier injecting into $\omega$. For an effective presentation, external consistency agrees with the truth of its certified Con formula in standard arithmetic. No transitivity or external well-foundedness of a model follows.

## Proof

**Given:** The two stipulated T proofs for every fixed finite target fragment and sufficient internal set-model soundness in T.

1.1 If U had an actual refutation p, F1 extracts the finite set Delta of its nonlogical axiom lines. The same annotated proof is a Delta refutation. Apply the stipulated fragment data F2 to exactly this Delta: its two T proofs give a suitable source model and a model N of Delta. Finite assembly of these proofs is licensed by F1. [F1, F2, given]

2.1 Inside T, formal soundness applied to the fixed finite derivation p says every nonempty model of Delta satisfies its contradictory last sentence. The model N just obtained cannot satisfy that sentence; thus T proves a contradiction. The set-model soundness principle is part of the stated strength hypothesis on T, consistent with the external model/consistency direction F3. Therefore Con(T) rules out every actual U refutation, giving Con(U). Only the single finite support of the alleged proof was used. [F3, step 1.1] ∎
