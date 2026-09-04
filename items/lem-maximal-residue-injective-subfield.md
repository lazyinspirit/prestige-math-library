---
id: lem-maximal-residue-injective-subfield
kind: lemma
title: "Maximal residue-injective subfields exist"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicharacteristic-local-ring-and-coefficient-field, lem-equicharacteristic-prime-field-lifts, thm-zorn]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(A,\mathfrak m)$ be an equicharacteristic local ring. Then there exists a
subfield $K \subseteq A$ that is maximal, under inclusion, among subfields whose
residue map to $A/\mathfrak m$ is injective.

## Facts & Assumptions

**Given:** An equicharacteristic local ring $(A,\mathfrak m)$ and the Axiom of Choice.

[L1] The residue field's prime field embeds in $A$, so the family of
residue-injective subfields is nonempty
([[lem-equicharacteristic-prime-field-lifts]]).

[L2] Assuming the Axiom of Choice, every nonempty poset in which every chain
has an upper bound has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** apply Zorn's lemma to the poset of residue-injective subfields.

1.1 Let $\mathcal S$ be the set of subfields $K \subseteq A$ for which the residue map $K \to A/\mathfrak m$ is injective. By [L1], $\mathcal S$ is nonempty. Order $\mathcal S$ by inclusion. [L1, given, construct]

2.1 If $\mathcal C \subseteq \mathcal S$ is a chain, then $\bigcup_{K \in \mathcal C} K$ is again a subfield of $A$: closure under the field operations is inherited from some chain member containing the finitely many elements involved. Its residue map is still injective, because a nonzero element of the union already lies in one chain member where injectivity holds. Thus every chain in $\mathcal S$ has an upper bound in $\mathcal S$. [step 1.1, given, algebra]

3.1 By [L2], the poset $\mathcal S$ has a maximal element. That is exactly a maximal residue-injective subfield of $A$. [L2, step 2.1] ∎
