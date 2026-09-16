---
id: cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf
kind: corollary
title: Relative consistency of no free ultrafilter on omega over ZF
status: published
origin: pipeline
deps: [lem-feferman-tail-flip-model-is-finitely-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, Theorems 4.9 and 4.12, printed pp. 341, 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

If ZF is consistent, then ZF is consistent with the assertion that every
ultrafilter on $\omega$ is principal and with $\neg\mathrm{BPI}$.

## Facts & Assumptions

**Given:** $\operatorname{Con}(\mathrm{ZF})$ for the fixed formal theories.

[F1] [[lem-feferman-tail-flip-model-is-finitely-formalizable]] proves that ZFC+GCH proves a set model of every externally fixed finite fragment of the displayed target theory.

[F2] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] transfers the given consistency hypothesis to $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$.

## Proof

**Proof technique:** contradiction using finite derivation support.

1.1 F2 gives $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. Suppose for contradiction that the target theory $T$ is inconsistent. One finite refutation uses only a finite list $\Delta$ of ZF axiom instances together with the two additional sentences. [F2, assume-contra]

2.1 By F1, ZFC+GCH proves that a set structure satisfies every sentence in this exact $\Delta$. Formal first-order soundness for the alleged finite derivation then makes ZFC+GCH prove that this structure satisfies a contradiction, contrary to step 1.1. [F1, step 1.1, discharge-contradiction]

3.1 Thus $T$ is consistent. Only the finite support of one hypothetical proof is used; the conclusion is conditional consistency and does not assert or require a countable transitive model of full ZF. [step 1.1, step 2.1, discharge-contradiction: step 1.1] ∎
