---
id: lem-bounded-stage-capture-in-finite-support-iterations
kind: lemma
title: Small sets of ground ordinals are captured at a bounded iteration stage
status: published
origin: pipeline
deps: [lem-iteration-restrictions-and-complete-embeddings, thm-finite-support-iterations-preserve-ccc, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, bounded-name argument in Theorem 7.10", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, let $\delta$ have uncountable cofinality and $P_\delta$ be a finite-support ccc iteration. In a $P_\delta$-extension, every set $A$ of ground-model ordinals with $|A|<\operatorname{cf}(\delta)$ belongs to some $V[G_\alpha]$, $\alpha<\delta$. The same holds for structures and indexed families coded by such sets.

## Facts & Assumptions

**Given:** AC, the iteration and the stated small set in the final extension.

[F1] [[thm-forcing-theorem]] supplies the truth lemma, and [[lem-forcing-monotonicity-density-and-decision]] supplies dense decisions; ccc makes maximal deciding antichains countable.

[F2] [[thm-chain-condition-preserves-cofinalities-and-cardinals]] preserves $\operatorname{cf}(\delta)$.

[F3] [[lem-iteration-restrictions-and-complete-embeddings]] supplies complete top-padding embeddings and generic restrictions. It does not identify arbitrary finite-support conditions with literal top-paddings; the normalization and bounded intermediate name are constructed below.

## Proof

1.1 Work in the given extension $V[G]$. By F2 choose a ground cardinal $\nu<\operatorname{cf}(\delta)$ equal to $|A|$ there, and choose in $V[G]$ a surjection $f:\nu\twoheadrightarrow A$. The truth lemma gives a ground $P_\delta$-name $\dot f$ and $p\in G$ forcing that $\dot f:\check\nu\to\operatorname{Ord}$ and is onto a name $\dot A$ for $A$. Thus the antichains below are indexed by the *ground* ordinal $\nu$, not by the extension set $A$. For every $\xi<\nu$, choose in the ground model a maximal antichain below $p$ deciding $\dot f(\check\xi)$ as some check ordinal. Each antichain is countable by ccc. There are fewer than $\operatorname{cf}(\delta)$ antichains, and every condition has finite support, so the union $S$ of all their supports, together with $\operatorname{supp}(p)$, has size below $\operatorname{cf}(\delta)$. AC supplies the simultaneous antichains and code. [F1, F2]

2.1 By regularity of $\operatorname{cf}(\delta)$, $S$ is bounded by some $\alpha<\delta$. Normalize $p$ and every member $a$ of every chosen antichain: replace each coordinate outside its finite support by the distinguished literal top name. At such a coordinate the original prefix forces equality to top, so induction on coordinates makes the normalized condition forcing-equivalent to the original in both order directions and preserves every decision. The normalized support is still contained in $\alpha$; hence these conditions, unlike the raw ones, are literal top-paddings of their $P_\alpha$ restrictions. Replace each antichain by its normalized image, removing duplicates if needed. Equivalence preserves antichain maximality below normalized $p$ and the ordinal labels. [F3, step 1.1]

3.1 Each normalized antichain is predense below normalized $p|\alpha$ in $P_\alpha$: a $P_\alpha$-extension of that prefix has a top-padding below normalized $p$; maximality supplies a compatible normalized antichain member, and F3 reflects compatibility between these *padded* conditions. For each $\xi<\nu$, label the resulting $P_\alpha$-antichain by the ground ordinal it forces for $\dot f(\check\xi)$. These labelled antichains define an explicit $P_\alpha$-name $\dot f_\alpha$; this construction does not restrict the original $P_\delta$-name $\dot f$. Since normalized $p$ is equivalent to $p\in G$, it belongs to $G$, and $G_\alpha$ meets each predense antichain below its prefix. The corresponding padded antichain member lies in $G$ and forces the same value of $\dot f(\check\xi)$, so $\dot f_{\alpha,G_\alpha}=f_G$. Thus its range $A$ lies in $V[G_\alpha]$. F2 ensures that “fewer than $\operatorname{cf}(\delta)$” has not changed. [F2, F3, step 1.1, step 2.1]

4.1 A structure or indexed family coded by a small set of ground ordinals is recovered by fixed decoding operations from that set, so it belongs to the same intermediate model. The coding qualification is essential: no assertion is made for arbitrary unbounded collections lacking such a code. [step 3.1] ∎
