---
id: thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions
kind: theorem
title: "Pincus transfer for BPI and injectively boundable conjunctions"
status: draft
origin: pipeline
deps: [thm-jech-sochor-transfer-for-boundable-sentences, def-boolean-prime-ideal-principle, def-boundable-sentence-over-an-atom-set, def-countable-choice, rem-pincus-transfer-interface-and-preservation-limits]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "David Pincus, Zermelo–Fraenkel consistency results by Fraenkel–Mostowski methods"
      url: "https://doi.org/10.2307/2272420"
      locator: "§2A, Definition 2A5, p. 736; §3A, Metatheorems 3A2–3A3"
    - title: "David Pincus, Adding dependent choice"
      url: "https://doi.org/10.1016/0003-4843(77)90011-0"
      locator: "Theorem 4 and note added in proof, p. 145"
    - title: "Eleftherios Tachtsis, The Boolean prime ideal theorem does not imply the extension of almost disjoint families to MAD families"
      url: "https://www.impan.pl/shop/en/publication/transaction/download/product/114057"
      locator: "Definitions 5.2–5.3, Fact 5.4, and Theorem 5.5, printed pp. 110–111"
---

## Statement

Let a ZFA permutation model be given, and let $T_1, \dots, T_k$ be finitely many
certified atom-blind boundable sentences. Then the conjunction
$T_1 \wedge \dots \wedge T_k$ transfers to a model of $\mathrm{ZF}$.
Moreover, if the permutation model satisfies BPI
([[def-boolean-prime-ideal-principle]]), BPI may be conjoined with the certified
sentences and transferred with them. If the model satisfies both BPI and
Countable Choice ([[def-countable-choice]]), the simultaneous conjunction
$\mathrm{BPI}\wedge\mathrm{AC}_\omega$ may be transferred with the certified
sentences. This item does not assert an $\mathrm{AC}_\omega$-only exceptional
clause. No arbitrary ZFA truth, no full Choice, and no uncertified sentence is
transferred.

## Facts & Assumptions

**Given:** A permutation model of ZFA with atom set $A$; finitely many certified atom-blind boundable sentences with their absolute rank bounds.

[F1] A boundable statement is injectively boundable (Pincus, cited in Tachtsis as Fact 5.4). Thus an atom-blind boundable statement carrying the typed certificate of [[thm-jech-sochor-transfer-for-boundable-sentences]] has the preservation data needed by the Pincus theorem ([[def-boundable-sentence-over-an-atom-set]]).

[F2] Pincus's transfer theorem admits BPI as a named exceptional conjunct alongside a finite conjunction of injectively boundable statements. Tachtsis Theorem 5.5 records the stronger simultaneous $\mathrm{BPI}\wedge\mathrm{AC}_\omega$ form. It does not state an $\mathrm{AC}_\omega$-only exceptional clause, so none is used here. This is direct source input, not an inference from the orientation-only remark [[rem-pincus-transfer-interface-and-preservation-limits]] ([[def-boolean-prime-ideal-principle]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix the finite list $T_1,\dots,T_k$ of certified sentences. By [F1], each $T_j$ is injectively boundable; the finite conjunction retains the finitely many certificates and absolute bounds. [given, F1]

2.1 Let $\Omega$ be the conjunction of the $T_j$, together with BPI when that exceptional clause is to be used, and together with both BPI and $\mathrm{AC}_\omega$ when the simultaneous exceptional clause is to be used. No other truth of the permutation model is included in $\Omega$, and $\mathrm{AC}_\omega$ is never adjoined here without BPI. [step 1.1, given, F2]

3.1 Apply the corresponding Pincus theorem in [F2] to $\Omega$. It produces an atom-free model of ZF satisfying every injectively boundable conjunct and the named exceptional principle or principles. In particular, omitting the exceptional clauses transfers the finite conjunction alone, adjoining BPI transfers BPI with it, and adjoining the simultaneous $\mathrm{BPI}\wedge\mathrm{AC}_\omega$ clause transfers both principles with it. [step 1.1, step 2.1, F2]

4.1 Step 3.1 is exactly the transfer asserted in the Statement. BPI and the simultaneous $\mathrm{BPI}\wedge\mathrm{AC}_\omega$ conjunction enter only through [F2]'s exceptional clauses and are not relabelled as injectively boundable; the typed certificates restrict all other transferred content to the named $T_j$. [step 2.1, step 3.1, F1, F2] ∎

## Remarks

- **What is exceptional about BPI and countable choice.** BPI is transferable alongside an injectively boundable conjunction, and the cited stronger theorem transfers BPI and countable choice together. Neither principle is relabelled as injectively boundable here, and this interface supplies no countable-choice-only transfer.

- **What the statement does not do.** It does not transfer the truth of the permutation model wholesale, and in particular it does not transfer the failure of well-orderability of the atom set or the countable-choice structure of the model; only the named principles and the certified sentences cross.
