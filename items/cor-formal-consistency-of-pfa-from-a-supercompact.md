---
id: cor-formal-consistency-of-pfa-from-a-supercompact
kind: corollary
title: "Formal consistency of PFA from a supercompact"
status: published
origin: pipeline
deps: [lem-formal-pfa-iteration-verification-compiler, thm-formal-relative-consistency-from-verified-proof-reduction]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Theorem 24.11"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Statement

For the fixed certified arithmetizations of
$S=\mathrm{ZFC}+\text{“there is a supercompact cardinal”}$ and
$T=\mathrm{ZFC}+\mathrm{PFA}$,

$$\mathrm{PA}\vdash\operatorname{Con}(S)\longrightarrow\operatorname{Con}(T).$$

This is a formal proof-code reduction. It does not extract a transitive model
of either full theory from consistency.

## Facts & Assumptions

**Given:** The proof predicates, contradiction sentence, and PA representations fixed by the two suppliers.

[F1] PA verifies a total map $R$ taking every certified $T$-refutation to a certified $S$-refutation. [[lem-formal-pfa-iteration-verification-compiler]]

[F2] A base-verified total refutation reduction from $U$ to $T_0$ yields in that base $\operatorname{Con}(T_0)\to\operatorname{Con}(U)$. [[thm-formal-relative-consistency-from-verified-proof-reduction]]

## Proof

1.1 Apply F2 with arithmetic base PA, source theory $T_0=S$, target theory $U=T$, and reduction $R$ from F1. Its verified premise has the required orientation: a proof of contradiction in ZFC+PFA is sent to a proof of contradiction in ZFC plus a supercompact. Therefore PA proves $$\operatorname{Con}(S)\longrightarrow\operatorname{Con}(T).$$ [F1, F2, Given]

2.1 Equivalently, inside PA assume $\operatorname{Con}(S)$ and let $p$ be arbitrary. If $p$ were a certified $T$-refutation, F1 would make $R(p)$ a certified $S$-refutation, contradicting the assumption. Universal generalization over $p$ gives $\operatorname{Con}(T)$. This spells out both quantifiers and confirms that no converse implication is being used. [F1, step 1.1]

3.1 On standard natural numbers the formal implication gives the corresponding external relative-consistency consequence. F1 constructs only finite proof codes, and F2 explicitly requires no model extraction. Hence neither step produces a generic extension or a countable transitive model from the bare consistency hypothesis. [F1, F2, step 2.1] ∎
