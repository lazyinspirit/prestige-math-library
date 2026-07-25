---
id: cor-ac-iff-well-ordering
kind: corollary
title: "Choice, Zorn and well-ordering are equivalent"
status: draft
origin: session
deps: [thm-well-ordering-theorem, thm-well-ordering-implies-ac, cor-ac-iff-zorn, def-axiom-of-choice]
justified_by: []
aliases: [cor-ac-zorn-well-ordering]
landmark: false
short: "AC $\\iff$ Zorn $\\iff$ every set is well orderable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Well-ordering theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_theorem"
pipeline_run: null
---

## Statement

Over ZF the following three statements are equivalent:

**(1)** the Axiom of Choice ([[def-axiom-of-choice]]);

**(2)** Zorn's lemma;

**(3)** the well-ordering theorem, that every set can be well ordered.

## Facts & Assumptions

**Given:** The axioms of ZF. Each implication below is itself a theorem of ZF, so what is established here is an **equivalence proved in ZF**, with no appeal to any further principle. Read it exactly that way: it says that ZF proves each of (1), (2), (3) to follow from the others, and it does **not** say that any of the three is itself a theorem of ZF. Which of them ZF proves outright is a separate, metamathematical question, and the answer, conditional on the consistency of ZF, is none of them; that is recorded among this page's false statements and in the remarks below.

[L1] The Axiom of Choice implies that every set can be well ordered ([[thm-well-ordering-theorem]]).

[L2] If every set can be well ordered then the Axiom of Choice holds ([[thm-well-ordering-implies-ac]]).

[L3] The Axiom of Choice and Zorn's lemma are equivalent over ZF ([[cor-ac-iff-zorn]]).

[L4] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assuming (1), every set can be well ordered, which is (3). [L1]

1.2 Assuming (3), every family of nonempty sets has a choice function, which is (1). [L2]

2.1 Statements (1) and (3) therefore imply each other over ZF and are equivalent. [step 1.1, step 1.2, L4]

3.1 Statements (1) and (2) are equivalent over ZF by [L3]. [step 2.1, L3]

4.1 Equivalence is transitive, so (1), (2) and (3) are equivalent over ZF. [step 2.1, step 3.1] ∎

## Remarks

**What this licenses.** Any later result may be proved with whichever of the three forms is convenient, at exactly the same cost. Applications that build an object stage by stage naturally use (3) through [[thm-transfinite-recursion]]; applications that maximise something naturally use (2); applications about products of nonempty sets use (1).

**What is not proved here.** That any of the three is independent of ZF. That requires Gödel's constructible universe for the consistency of the Axiom of Choice with ZF ([[rem-godel-constructible-universe]]) and Cohen's forcing for the consistency of its negation ([[rem-cohen-forcing-ac-independent]]), neither of which this library contains: both are recorded with references and are not proved anywhere here. The honest conditional statements are [[fs-zorn-provable-in-zf]] and [[fs-every-set-well-orderable-in-zf]].

**Strictly weaker principles get no information from this.** The equivalence says nothing about the ultrafilter lemma, dependent choice or countable choice. Each of those is, **if ZF is consistent**, strictly weaker than the Axiom of Choice: not provable in ZF, and not strong enough to recover AC. Those separations are external metamathematical results, established by forcing and by permutation models, quoted from references and proved nowhere in this library; the consistency hypothesis cannot be dropped and cannot be proved inside ZF. Every theorem in this library that uses one of the weaker principles must say which, and the ledger, with the sources, is [[rem-choice-ledger]].

**Historical note.** Zermelo proved (1) implies (3) in 1904, Kuratowski and Zorn isolated (2) in 1922 and 1935, and the circle of equivalences was standard by the 1940s. The choice-free content of the theory of well-orders, by contrast, was settled earlier: Hartogs proved in 1915 that cardinal comparability implies (3), which is what makes [[thm-hartogs]] a choice-free theorem worth isolating.
