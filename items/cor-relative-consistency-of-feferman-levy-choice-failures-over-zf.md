---
id: cor-relative-consistency-of-feferman-levy-choice-failures-over-zf
kind: corollary
title: Relative consistency of the Feferman–Levy choice failures over ZF
status: draft
origin: pipeline
deps: [lem-feferman-levy-symmetric-collapse-is-finitely-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6, printed pp. 142–144, and Problems 2–3, p. 148", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

If ZF is consistent, then so is ZF together with the assertions that the reals
are a countable union of countable sets,
$\operatorname{cf}(\omega_1)=\omega$, and $\neg\mathrm{AC}_\omega$.

## Facts & Assumptions

**Given:** The fixed arithmetizations of the displayed first-order theories and
the hypothesis $\operatorname{Con}(\mathrm{ZF})$.

[F1] [[lem-feferman-levy-symmetric-collapse-is-finitely-formalizable]] proves,
for every externally fixed finite target fragment, that ZFC+GCH proves the
existence of a set model of that fragment.

[F2] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] proves
$\operatorname{Con}(\mathrm{ZF})\to
\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ without assuming a transitive
set model of ZF.

## Proof

**Proof technique:** contradiction by the finite support of formal derivations.

1.1 By F2, the given hypothesis implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. Suppose for contradiction that the target theory $T$ in the Statement is inconsistent. A formal refutation is a finite sequence, so it uses only a finite set $\Delta$ of ZF axiom instances together with the three extra target sentences. [F2, assume-contra]

2.1 Apply F1 to exactly this externally fixed $\Delta$. ZFC+GCH proves that there is a set structure satisfying every sentence used by the alleged refutation. The first-order soundness proof for that finite derivation then proves in ZFC+GCH that the structure satisfies a contradiction, while equality logic proves that no structure does. Hence ZFC+GCH would be inconsistent, contrary to step 1.1. [F1, step 1.1, discharge-contradiction]

3.1 Therefore $T$ is consistent. The argument uses the finite set of formulas occurring in one hypothetical proof; it does not construct a set model of full ZF, invoke semantic completeness, or infer consistency from a merely external citation. [step 1.1, step 2.1, discharge-contradiction: step 1.1] ∎
