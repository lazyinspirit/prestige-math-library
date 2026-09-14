---
id: cor-ultrafilter-lemma-and-bpi-are-not-theorems-of-zf
kind: corollary
title: The Ultrafilter Lemma and BPI are not theorems of ZF
status: draft
origin: pipeline
deps: [cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf, thm-bpi-equivalent-to-set-ultrafilter-lemma]
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
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, Theorem 4.12, printed pp. 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

Assuming $\operatorname{Con}(\mathrm{ZF})$, neither the set Ultrafilter Lemma
nor the Boolean Prime Ideal Theorem is provable in ZF.

## Facts & Assumptions

**Given:** $\operatorname{Con}(\mathrm{ZF})$ for the fixed formalization.

[F1] [[cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf]]
proves the consistency of
$$T=\mathrm{ZF}+\text{``every ultrafilter on }\omega\text{ is principal''}+\neg\mathrm{BPI}.$$

[F2] [[thm-bpi-equivalent-to-set-ultrafilter-lemma]] proves in ZF that BPI is
equivalent to the set Ultrafilter Lemma (UFL).

## Proof

**Proof technique:** contradiction by adjoining a hypothetical ZF proof to the
consistent countertheory.

1.1 By F1, $T$ is consistent. Suppose for contradiction that $\mathrm{ZF}\vdash\mathrm{BPI}$. Because every axiom of ZF is an axiom of $T$, the same finite derivation is a $T$-derivation of BPI. But $\neg\mathrm{BPI}$ is an axiom of $T$, so $T$ would be inconsistent, contradicting F1. Thus $\mathrm{ZF}\nvdash\mathrm{BPI}$. [F1, assume-contra, discharge-contradiction]

2.1 Suppose instead that $\mathrm{ZF}\vdash\mathrm{UFL}$. The UFL-to-BPI implication in F2 is itself a ZF theorem, so concatenating the two finite proofs would give $\mathrm{ZF}\vdash\mathrm{BPI}$, contradicting step 1.1. Hence $\mathrm{ZF}\nvdash\mathrm{UFL}$. [F2, step 1.1, assume-contra, discharge-contradiction]

3.1 Both nonprovability conclusions use the stated consistency hypothesis. They are syntactic consequences of a consistent countertheory; no completeness theorem, countable transitive model, or assertion of absolute truth is used. [step 1.1, step 2.1, discharge-contradiction: steps 1.1 and 2.1] ∎
