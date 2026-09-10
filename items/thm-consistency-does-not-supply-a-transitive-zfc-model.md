---
id: thm-consistency-does-not-supply-a-transitive-zfc-model
kind: theorem
title: "The transitive-model consistency-strength gap"
status: draft
origin: pipeline
deps: [lem-transitive-zf-models-have-correct-proof-codes, thm-second-incompleteness-for-standard-provability, thm-model-existence-versus-syntactic-consistency, lem-zf-arithmetic-interpretation-and-effective-axioms, thm-first-order-sentence-deduction]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.8 p153, second-incompleteness background; transitive-model application proved locally"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — §4.7 second incompleteness; local application using the transitive-proof-code lemma"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
    - title: "Andrew Marks, Set Theory lecture notes — Exercise 18.15, consistency versus well-founded models, p79"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---


## Statement

Let $S=\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC})$. Assuming externally Con(S), ZFC does not prove $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{TM}(\mathrm{ZFC})$. Moreover $S+\neg\operatorname{TM}(\mathrm{ZFC})$ is consistent and has a set model. The stronger external premise Con(S) is retained.

## Facts & Assumptions

[F1] [[lem-transitive-zf-models-have-correct-proof-codes]]: A transitive set model M of ZF has the real omega and natural arithmetic, and all finite natural-number syntax and proof codes. Every fixed arithmetic predicate on these codes agrees with ambient arithmetic. If M models ZFC, it satisfies the standard Con(ZFC).

[F2] [[thm-model-existence-versus-syntactic-consistency]]: In external ZF, an explicitly countable sentence theory is consistent iff it has a nonempty set model, and iff it has a model with carrier injecting into $\omega$. For an effective presentation, external consistency agrees with the truth of its certified Con formula in standard arithmetic. No transitivity or external well-foundedness of a model follows.

[F3] [[lem-zf-arithmetic-interpretation-and-effective-axioms]]: ZF and ZFC have effective axiom presentations and an interpretation of PA on the actual internally defined $\omega$, using von Neumann zero/successor and recursively defined addition/multiplication. For their standard presentations the arithmetic proof constructors and translations needed for D1–D3 are verifiable in that interpretation. AC is unnecessary for the PA interpretation; ZFC adds one encoded Choice sentence.

[F4] [[thm-second-incompleteness-for-standard-provability]]: If T is consistent and has the arithmetic/interpretation and D1–D3 hypotheses above for the displayed standard predicate, T does not prove its displayed $\operatorname{Con}(T)$. Numeralwise correctness of an arbitrary predicate is insufficient.

[F5] [[thm-first-order-sentence-deduction]]: In ZF, for a sentence theory $T$, a sentence $\sigma$ and any formula $\theta$,

$$T\cup\{\sigma\}\vdash\theta\quad\Longleftrightarrow\quad T\vdash\sigma\to\theta.$$

The forward transformation also works for an open discharged assumption $\sigma$ provided every variable generalized or existentially eliminated in the given derivation is absent from $\operatorname{FV}(\sigma)$; the other assumptions remain sentences.

## Proof

**Given:** External Con(S), for $S=\mathrm{ZFC}+\operatorname{Con}(\mathrm{ZFC})$, with the standard predicates and actual TM convention.

1.1 ZF proves $\operatorname{TM}(\mathrm{ZFC})\to\operatorname{Con}(S)$: a transitive ZFC model satisfies Con(ZFC) by F1 and hence is a model of S; the model-to-consistency direction of F2 gives Con(S). This reasoning is formalizable in ZF because set satisfaction and the fixed arithmetic predicates are set-theoretic formulas; it does not use satisfaction for the universe. [F1, F2, given]

2.1 S has the standard effective arithmetic presentation of F3 with one extra sentence. By F4 and external Con(S), S cannot prove Con(S). Step 1.1 therefore implies that S cannot prove TM(ZFC). If ZFC proved the displayed conditional, adding its antecedent as the extra S axiom would prove TM(ZFC), impossible. [F3, F4, step 1.1]

3.1 If $S+\neg\operatorname{TM}(\mathrm{ZFC})$ were inconsistent, sentence deduction F5 would give $S\vdash\neg\operatorname{TM}(\mathrm{ZFC})\to\bot$, hence $S\vdash\operatorname{TM}(\mathrm{ZFC})$ by classical logic. This contradicts step 2.1. Thus the extension is consistent, and F2 gives a nonempty at most countable set model. No transitivity of that countermodel is asserted. [F2, F5, step 2.1] ∎
