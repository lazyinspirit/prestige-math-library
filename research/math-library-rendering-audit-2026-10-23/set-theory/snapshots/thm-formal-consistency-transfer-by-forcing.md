---
id: "thm-formal-consistency-transfer-by-forcing"
kind: "theorem"
title: "Formal consistency transfer by forcing"
deps: ["lem-forcing-transfer-for-finite-zfc-fragments", "thm-formal-relative-consistency-from-verified-proof-reduction", "lem-primitive-recursive-syntax-and-proof-checking"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Fix a certified effective target theory T and an arithmetic base B. Suppose a **uniform formal forcing verification** is supplied in the following precise sense. B verifies total code functions which, from the finite axiom support of a certified T-refutation, produce ZFC proofs of the finite-fragment source-model existence and target-model conversion in the preceding lemma. B also verifies the proof constructors for extracting the support, combining those proofs, and applying set-model soundness to that finite derivation. Then

$$B\vdash\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(T).$$

Correctness on standard numerals, an effective procedure with unproved totality in B, or an externally given CTM does not alone satisfy this hypothesis. No CTM of all ZFC is inferred from its consistency.

## Facts & Assumptions

**Given:** The certified proof presentations and the B-verified total constructors in the statement. The constructor verifications are hypotheses of this conditional theorem, not consequences of citing a semantic forcing theorem.

[F1] [[lem-forcing-transfer-for-finite-zfc-fragments]] gives the fixed-fragment source-model and conversion proofs when a formal forcing verification for that target fragment is supplied.

[F2] [[thm-formal-relative-consistency-from-verified-proof-reduction]] converts a B-verified total refutation reduction into a formal Con implication.

[F3] [[lem-primitive-recursive-syntax-and-proof-checking]] provides certified proof parsing/checking and finite code operations, with malformed-input defaults.

## Proof

1.1 On input p first check whether it is a certified T-proof with contradictory conclusion, using F3. For a valid such proof scan its finitely many lines, collecting each nonlogical axiom sentence with its certificate and retaining the line references. Denote the finite support by Delta(p); the same derivation is a refutation from that support. This is a bounded loop over the decoded list, using the operations in F3, and is among the B-verified constructors in the hypothesis. On any invalid input use the fixed default output zero. [F3, given]

2.1 On a valid refutation input, apply the stipulated total constructors to Delta(p). They return ZFC proofs of existence of a suitable finite-fragment CTM and of its conversion to a nonempty model N of Delta(p), the two proof roles in F1. Concatenate those proofs with renamed variables and corrected references. Append the stipulated soundness-constructor proof for the particular finite derivation p: a model of all its axiom lines satisfies every line by the logical axiom and inference checks, hence satisfies its contradictory final sentence. The nonempty set model N cannot satisfy that sentence, so the combined proof is a ZFC refutation. Denote its code by r(p). [F1, F3, step 1.1]

3.1 Every operation used in r has a totality and correctness verification in B by the stated hypothesis; composition with the bounded parser and the invalid-input branch therefore gives a total r whose verified property is $\forall p\ (\operatorname{Prf}_T(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_{\mathrm{ZFC}}(r(p),\ulcorner\bot\urcorner))$. This step uses the actual constructor verifications as inputs, rather than inferring them from the external fragment-existence scheme. [F3, step 1.1, step 2.1, given]

4.1 Apply F2 to r with source theory ZFC and target theory T. It yields the displayed Con implication in B. All CTMs used in constructing the proof code were confined to their fixed finite source fragments; neither the reduction nor its arithmetic consequence constructs a CTM of full ZFC. [F1, F2, step 3.1] ∎
