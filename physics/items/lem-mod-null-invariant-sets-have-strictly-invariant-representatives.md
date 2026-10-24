---
id: lem-mod-null-invariant-sets-have-strictly-invariant-representatives
kind: lemma
title: Mod-null invariant sets have strict representatives
deps: [prop-invariant-families-are-sigma-algebras, prop-measure-preserving-compositions-iterates-and-completions, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Proposition 2.14 pp.23–24; Sarig Proposition 1.1 pp.5–6
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $E\in\mathcal I'$ in a measure-preserving system, then
$$F=\limsup_{n\to\infty}T^{-n}E=\bigcap_{m\ge0}\bigcup_{n\ge m}T^{-n}E$$
belongs to $\mathcal I$ and satisfies $\mu(E\mathbin\triangle F)=0$. This does not require completeness or a choice axiom.

## Facts & Assumptions

[F1] The invariant families consist of the stated measurable sets [[prop-invariant-families-are-sigma-algebras]].

[F2] Nonnegative iterates preserve measure; only the choice-free iteration clause is used [[prop-measure-preserving-compositions-iterates-and-completions]].

[F3] Finite and countable unions of measurable null sets are null [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Write $D=E\mathbin\triangle T^{-1}E$, which is measurable and null. For $n\ge1$, $E\mathbin\triangle T^{-n}E\subseteq\bigcup_{k=0}^{n-1}T^{-k}D$: whenever membership at times zero and n differs, it differs at a consecutive pair. Iterates preserve measure, so every set on the right is null; finite subadditivity makes the left null. For n=0 the difference is empty. [F1, F2, F3]

2.1 The displayed countable intersection and unions make F measurable. Outside the measurable null set $N=\bigcup_{n\ge0}(E\mathbin\triangle T^{-n}E)$ all these indicators equal $\mathbf1_E$, so membership in their limsup equals membership in E. Thus $E\mathbin\triangle F\subseteq N$ and its measure is zero. [F3, step 1.1]

3.1 Pulling back the displayed formula gives $T^{-1}F=\bigcap_{m\ge0}\bigcup_{n\ge m}T^{-(n+1)}E=F$: removing the initial term does not change membership infinitely often. Hence F is strictly invariant and is the required representative. [F1, step 2.1] ∎
