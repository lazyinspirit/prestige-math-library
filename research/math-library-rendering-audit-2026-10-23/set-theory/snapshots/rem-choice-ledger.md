---
id: rem-choice-ledger
kind: remark
title: "The proved choice ledger: hypotheses, equivalences, and upper bounds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-every-vector-space-has-a-basis, thm-every-independent-set-extends-to-a-basis,
       cor-ac-iff-well-ordering, cor-ac-iff-zorn, thm-hartogs,
       lem-well-order-comparability, thm-zorn, thm-bourbaki-witt, def-chain,
       thm-well-ordering-theorem, def-cardinal, def-axiom-of-choice,
       def-countable-choice, def-dependent-choice]
justified_by: []
aliases: [rem-choice-strength-ledger]
landmark: false
short: "proved equivalences and explicit choice hypotheses"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
pipeline_run: null
---

This ledger records only conclusions established by local proofs. It separates
an assumption actually used by an argument from a claim about the weakest
possible assumption, which usually needs additional model theory.

**Equivalent formulations proved over ZF.** The Axiom of Choice, Zorn's lemma,
and the assertion that every set can be well ordered are equivalent by
[[cor-ac-iff-zorn]] and [[cor-ac-iff-well-ordering]]. Thus a proof using any one
of them may be translated into a proof using either of the others. This is an
equivalence statement; it does not itself prove an independence result.

**Where the supplied proofs spend full choice.** [[thm-zorn]] uses
[[def-axiom-of-choice]] to select a strict upper bound for every chain that has
no maximal member. Its structural fixed-point core, [[thm-bourbaki-witt]], is
choice-free. [[thm-well-ordering-theorem]] then obtains a well-order through
Zorn. The proof that every vector space has a basis similarly extends an
independent set by Zorn ([[thm-every-independent-set-extends-to-a-basis]],
[[cor-every-vector-space-has-a-basis]]). These routes establish AC as a
sufficient hypothesis; they do not establish that every consequence needs AC.

**Weaker hypotheses remain distinct in this ledger.** Countable choice and
dependent choice are separately stated principles ([[def-countable-choice]],
[[def-dependent-choice]]). A theorem using one must carry that exact assumption
in its statement and proof. This item does not assert any unproved reverse
implication or nonimplication among them.

**Choice-free substitutes.** [[thm-hartogs]] gives, for every set $A$, an
ordinal that does not inject into $A$, without comparing arbitrary sets.
[[lem-well-order-comparability]] compares already supplied well-orders without
choosing well-orders for arbitrary sets. Transfinite induction and recursion
likewise operate on a supplied well-order. These results are not weakened by
the fact that assigning [[def-cardinal|$|A|$]] to an arbitrary set requires a
well-orderability hypothesis.

The later constructibility, forcing, Boolean-algebra, and symmetric-model pages
are responsible for proving relative consistency and strictness claims. Until
then, recorded external results are targets, never dependencies of this ledger
or of any other Foundations item.
