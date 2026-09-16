---
id: thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions
kind: theorem
title: "Pincus transfer for BPI, Countable Choice, and injectively boundable conjunctions"
status: draft
origin: pipeline
deps: [thm-jech-sochor-transfer-for-boundable-sentences, thm-finite-fragment-relative-consistency-transfer, thm-formal-relative-consistency-from-verified-proof-reduction, def-boolean-prime-ideal-principle, def-boundable-sentence-over-an-atom-set, def-countable-choice, rem-pincus-transfer-interface-and-preservation-limits]
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
([[def-boolean-prime-ideal-principle]]) or Countable Choice
([[def-countable-choice]]), then either of those principles may be conjoined with
the certified sentences and transferred with them. No arbitrary ZFA truth, no
full Choice, and no uncertified sentence is transferred.

## Facts & Assumptions

**Given:** A permutation model of ZFA with atom set $A$; finitely many certified atom-blind boundable sentences with their absolute rank bounds.

[F1] Jech–Sochor transfer: a certified atom-blind boundable sentence with its transfer certificate holds in the symmetric ZF model obtained from the permutation model by the pure forcing at the certificate's iterate height ([[thm-jech-sochor-transfer-for-boundable-sentences]], [[def-boundable-sentence-over-an-atom-set]]).

[F2] Pincus's exceptional clauses: alongside the injectively boundable conjuncts, BPI and $\mathrm{AC}_\omega$ may occur in the transferred conjunction when they hold in the permutation model, as stated explicitly in the cited Theorem 5.5 of Tachtsis and applied in Brunner's §3.4(a) to the Urysohn obstruction ([[rem-pincus-transfer-interface-and-preservation-limits]], [[def-boolean-prime-ideal-principle]], [[def-countable-choice]]).

[F3] Finite-fragment model transfer and the verified proof reduction convert a family of set models of finite fragments into the syntactic consistency implication ([[thm-finite-fragment-relative-consistency-transfer]], [[thm-formal-relative-consistency-from-verified-proof-reduction]]).

## Proof

**Proof technique:** direct.

1.1 Fix the finite list $T_1,\dots,T_k$ of certified sentences, each with its absolute bound, and let $\alpha$ be the maximum of those bounds; the maximum exists because the list is finite and the bounds are absolute ordinals. [given]

2.1 For each $j \le k$ the certificate of $T_j$ names finitely many carried levels below $V_{\alpha}(A \cup \omega)$ after the bound is increased to $\alpha$, and increasing the height of a certificate preserves it: the same formula is relativised to a larger segment and the equivalence of [F1] remains provable, so the single iterate height $\alpha$ serves all conjuncts. [step 1.1, F1]

3.1 By [F1] applied at height $\alpha$ to the conjunction, the finite conjunction $T_1 \wedge \dots \wedge T_k$ holds in the atom-free ZF model that the Jech–Sochor embedding produces; this is an external finite application of the transfer theorem, and the embeddings for the finitely many conjuncts are taken at the one height $\alpha$. [step 2.1, F1]

4.1 If the permutation model satisfies BPI, then by [F2] BPI may be adjoined to the conjunction before transfer, and the same applies to $\mathrm{AC}_\omega$; the hypothesis that these are exceptional clauses rather than injectively boundable sentences is respected, and neither is asserted to be injectively boundable. [step 3.1, F2]

5.1 Finally [F3] converts the existence of set models of every finite fragment of the transferred theory into the syntactic implication $\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF} + \text{transferred principles})$, using the verified proof reduction as its input. [step 3.1, step 4.1, F3] ∎

## Remarks

- **What is exceptional about BPI and countable choice.** Both are transferable alongside an injectively boundable conjunction, but neither is itself injectively boundable in the sense used for the conjuncts; the statement respects that distinction, and a consumer may not relabel them.

- **What the statement does not do.** It does not transfer the truth of the permutation model wholesale, and in particular it does not transfer the failure of well-orderability of the atom set or the countable-choice structure of the model; only the named principles and the certified sentences cross.
