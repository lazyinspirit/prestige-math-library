---
id: cor-zf-does-not-prove-urysohn-lemma
kind: corollary
title: "Consistency of a Urysohn counterexample theory obstructs a ZF proof"
status: published
origin: pipeline
deps: [def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Eleftherios Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14590"
      locator: "Main relative-consistency theorem, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
    - title: "Eleftherios Tachtsis, Erratum to The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14848"
      locator: "Published erratum to the cited theorem"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/cor-zf-does-not-prove-urysohn-lemma.json
---


## Statement

Let $T$ be any first-order theory extending ZF and containing the negation of
Urysohn's lemma for normal spaces ([[def-normal-and-t4-spaces]]). If $T$ is
consistent, then ZF does not prove Urysohn's lemma.

This is a conditional criterion. It asserts neither consistency of such a
$T$ nor existence of a model or a counterexample space.

## Facts & Assumptions

**Given:** A consistent theory $T$ containing every ZF axiom and the sentence
$\neg\mathrm{URY}$, where $\mathrm{URY}$ asserts continuous separation of
disjoint closed sets in every normal space.

[F1] A finite derivation using axioms of a subtheory is a derivation in the
extending theory, since each axiom used is still available.

## Proof
 1.1 Suppose ZF proves $\mathrm{URY}$. The same finite derivation is a $T$ derivation by F1 and the given inclusion of axioms. [given, F1, assume-contra]

2.1 Since $T$ also has $\neg\mathrm{URY}$ as an axiom, it would derive a contradiction. This contradicts the assumed consistency of $T$; therefore ZF does not prove $\mathrm{URY}$. [given, step 1.1, discharge-contradiction] ∎