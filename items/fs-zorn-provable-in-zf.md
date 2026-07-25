---
id: fs-zorn-provable-in-zf
kind: false-statement
title: "FALSE: Zorn's lemma is a theorem of ZF"
status: published
origin: session
deps: [rem-cohen-forcing-ac-independent, thm-zorn, cor-ac-iff-zorn, thm-zorn-implies-ac, thm-bourbaki-witt]
justified_by: []
forward_refs: [rem-choice-strengths]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
pipeline_run: null
---

## Statement

**FALSE.** Zorn's lemma is a theorem of ZF: it can be proved from the
Zermelo–Fraenkel axioms without assuming the Axiom of Choice.

The statement is plausible because Zorn's lemma reads like a structural fact
about ordered sets rather than a selection principle, and because the proof given
in [[thm-zorn]] runs through [[thm-bourbaki-witt]], which genuinely is
choice-free. The Axiom of Choice enters that proof at a single step, and it
cannot be removed.

## Facts & Assumptions

**Given:** The axioms of ZF, **assumed to be consistent**, together with the external metamathematical result cited below. Every conclusion here is relative to that consistency assumption, which cannot be dropped and cannot be proved inside ZF.

[A1] **If** ZF is consistent, **then** ZF does not prove the Axiom of Choice (Cohen 1963, [[rem-cohen-forcing-ac-independent]]). This is an external result, established by forcing, and it is NOT proved in this library; it presupposes the consistency of ZF assumed in the Given. See the remark below.

[L1] Zorn's lemma implies the Axiom of Choice, and this implication is itself proved in ZF ([[thm-zorn-implies-ac]]).

[L2] The two statements are equivalent over ZF ([[cor-ac-iff-zorn]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose Zorn's lemma were a theorem of ZF. [assume-contra]

1.2 The implication from Zorn's lemma to the Axiom of Choice is proved in ZF, using no choice principle. [L1, L2]

2.1 Chaining a ZF theorem with a ZF-provable implication yields a ZF theorem, so the Axiom of Choice would be a theorem of ZF. [step 1.1, step 1.2]

3.1 This contradicts [A1], which holds under the consistency of ZF assumed in the Given; so, under that assumption, Zorn's lemma is not a theorem of ZF. Equivalently and without any assumption: if ZF proves Zorn's lemma, then ZF proves the Axiom of Choice, and ZF is therefore inconsistent. [step 2.1, A1, discharge-contradiction] ∎

## Remarks

- **What is and is not proved here.** The refutation is a genuine ZF argument given the cited independence result, but that result itself is not proved in this library: Cohen's theorem requires forcing, which is deferred. The honest reading is therefore conditional, namely that Zorn's lemma is a theorem of ZF only if ZF is inconsistent. It is recorded this way deliberately rather than presented as fully derived.
- The companion half of the independence, that ZF cannot refute the Axiom of Choice, is Gödel's 1938 constructible universe result. Together they say the Axiom of Choice, and hence Zorn's lemma, is genuinely independent.
- Where this sits among the choice principles, and which weaker ones are still unprovable in ZF, is taken up later in [[rem-choice-strengths]].
- The trap this item exists to close: [[thm-bourbaki-witt]] really is choice-free and does most of the work of [[thm-zorn]], which invites the conclusion that the whole proof is choice-free. Step 4.1 of [[thm-zorn]], where a strict upper bound is selected for every chain at once, is the irreducible use.
