---
id: fs-every-set-well-orderable-in-zf
kind: false-statement
title: "FALSE: the well-ordering theorem is a theorem of ZF"
status: draft
origin: session
deps: [rem-cohen-forcing-ac-independent, thm-well-ordering-theorem, thm-well-ordering-implies-ac, cor-ac-iff-well-ordering, fs-zorn-provable-in-zf, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
short: "not provable in ZF, conditionally on the consistency of ZF"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Well-ordering theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_theorem"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

**FALSE.** Every set can be well ordered, and this is a theorem of ZF: the
well-ordering theorem can be proved from the Zermelo-Fraenkel axioms without
assuming the Axiom of Choice ([[def-axiom-of-choice]]).

The claim is plausible because the intended construction looks like plain
bookkeeping: line the elements of $X$ up one at a time, and keep going until
none is left. Transfinite recursion really is a theorem of ZF, so the machinery
for "keep going" is free. What is not free is the instruction "take an element
not yet used": that is a selection, made simultaneously at every stage, and it
is exactly the content of the Axiom of Choice. The proof of
[[thm-well-ordering-theorem]] isolates the cost in a single place.

## Facts & Assumptions

**Given:** The axioms of ZF, **assumed to be consistent**, together with the external metamathematical result cited below. Every conclusion here is relative to that consistency assumption, which cannot be dropped and cannot be proved inside ZF.

[A1] **If** ZF is consistent, **then** ZF does not prove the Axiom of Choice (Cohen 1963, [[rem-cohen-forcing-ac-independent]]). This is an external result, established by forcing, and it is NOT proved in this library; it presupposes the consistency of ZF assumed in the Given.

[L1] If every set can be well ordered then the Axiom of Choice holds, and this implication is itself proved in ZF ([[thm-well-ordering-implies-ac]]).

[L2] Over ZF the Axiom of Choice, Zorn's lemma and the well-ordering theorem are equivalent ([[cor-ac-iff-well-ordering]]).

[L3] The same conditional discipline, for Zorn's lemma in place of the well-ordering theorem, is recorded in [[fs-zorn-provable-in-zf]].

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the well-ordering theorem were a theorem of ZF. [assume-contra]

1.2 The implication from the well-ordering theorem to the Axiom of Choice is proved in ZF and uses no choice principle. [L1, L2]

2.1 Chaining a ZF theorem with a ZF-provable implication yields a ZF theorem, so the Axiom of Choice would be a theorem of ZF. [step 1.1, step 1.2]

3.1 This contradicts [A1], which holds under the consistency of ZF assumed in the Given; so, under that assumption, the well-ordering theorem is not a theorem of ZF. Equivalently and without any assumption: if ZF proves that every set can be well ordered, then ZF proves the Axiom of Choice and ZF is therefore inconsistent. [step 2.1, A1, L3, discharge-contradiction] ∎

## Remarks

**What is and is not proved here.** The refutation is a genuine ZF argument given the cited independence result, but that result itself is not proved in this library: Cohen's theorem requires forcing, which is deferred. The honest reading is therefore conditional, namely that the well-ordering theorem is a theorem of ZF only if ZF is inconsistent. It is recorded this way deliberately rather than presented as fully derived, exactly as in [[fs-zorn-provable-in-zf]].

**The companion half.** That ZF cannot refute the Axiom of Choice is Gödel's 1938 constructible universe result. Together with Cohen's, it says the Axiom of Choice, and hence the well-ordering theorem, is genuinely independent of ZF.

**What is true.** "Every set can be well ordered" is a theorem of ZFC ([[thm-well-ordering-theorem]]), and it is also true outright for many particular sets in ZF alone: $\mathbb{N}$ is well ordered by [[thm-well-ordering-principle]], every subset of a well-ordered set inherits a well-order, and every ordinal is well ordered by membership ([[def-ordinal]]). The false statement is about ZF *proving* it for **every** set.

**Concretely what fails.** In Cohen's models there are sets of real numbers that carry no well-order at all. The reader should resist the reflex that such a set must still be well orderable "somehow": in those models no well-ordering of it exists, full stop, and the reflex is precisely the Axiom of Choice being assumed without notice.
