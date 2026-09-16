---
id: fs-countable-unions-of-countable-sets-are-countable-in-zf
kind: false-statement
title: ZF proves that countable unions of countable sets are countable
status: published
origin: pipeline
deps: [cor-relative-consistency-of-feferman-levy-choice-failures-over-zf, thm-r-uncountable]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6, printed pp. 142–144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement refuted

ZF proves that every countable union of countable sets is countable.

Assuming $\operatorname{Con}(\mathrm{ZF})$, this statement is false: it is not
a theorem of ZF.

## Facts & Assumptions

**Given:** $\operatorname{Con}(\mathrm{ZF})$. The conclusion is conditional syntactic nonprovability; it does not assert a transitive model from bare consistency.

[F1] [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]] proves consistency of ZF with a sequence of countable real layers whose union is the whole real line.

[F2] [[thm-r-uncountable]] proves in ZF, without Choice, that the real line is uncountable.

## Proof

**Proof technique:** contradiction with the consistent Feferman--Levy target theory.

1.1 Let $T$ be the consistent theory supplied by F1. It contains ZF and asserts that a sequence $\langle R_m:m<\omega\rangle$ consists pointwise of countable sets and satisfies $\mathbb R=\bigcup_{m<\omega}R_m$. Since $T$ contains ZF, it also proves from F2 that $\mathbb R$ is not countable. [F1, F2]

**Boundary check.** The witness is not the empty family or a one-set union: its domain is all of $\omega$, beginning with index $0$, and its union contains the zero real and hence is nonempty. Repeated or empty individual layers would not affect the argument; only pointwise countability and the exact union equality are used. No enumeration is selected from the family, because the false principle is assumed only as a single theorem for contradiction.

2.1 Suppose for contradiction that ZF proved the statement refuted. Then $T$ would inherit that theorem. Applying it to the specific sequence in step 1.1 would make $\mathbb R$ countable, contradicting the same step's ZF proof that $\mathbb R$ is uncountable. Thus $T$ would be inconsistent, contrary to F1, and the claimed ZF theorem is not provable under the stated consistency hypothesis. [F1, step 1.1, assume-contra, discharge-contradiction] ∎
