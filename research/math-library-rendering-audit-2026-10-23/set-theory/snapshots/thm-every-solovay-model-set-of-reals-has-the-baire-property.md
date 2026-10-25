---
id: thm-every-solovay-model-set-of-reals-has-the-baire-property
kind: theorem
title: Every set of reals in the Solovay model has the Baire property
status: published
origin: pipeline
deps: [thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-borel-code-and-regularity-absoluteness, lem-solovay-random-and-cohen-generics-are-large, lem-solovay-homogeneous-truth-has-borel-representatives, def-property-of-baire-for-subsets]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: borel-mod-meagre
sources: {references: [{title: "Solovay 1970, Part III, Lemmas 1.5 and 2.10", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Statement

In $M$, every subset of $\mathbb R$ has the property of Baire.

## Facts & Assumptions

**Given:** $A\subseteq\mathbb R$ in $M$.

[F1] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]]: gives a definition of $A$ from one real and finitely many ordinals.

[F2] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: the real parameter lies in a bounded intermediate model $N$ whose relevant codes are countable in the final extension.

[F3] [[lem-solovay-homogeneous-truth-has-borel-representatives]] gives an $N$-coded Borel $B$ agreeing with $A$ on every $N$-Cohen generic, while [[lem-solovay-random-and-cohen-generics-are-large]] says that the nongeneric reals form an ambient meagre set.

[F4] [[lem-solovay-borel-code-and-regularity-absoluteness]] and [[def-property-of-baire-for-subsets]]: coded Borel sets are open modulo coded meagre sets, absolutely, and internal DC closes the meagre ideal countably.

## Proof

1.1 Use F2 to choose a bounded $N$ containing F1's real parameter; the ordinal parameters remain explicit. F3 gives an $N$-coded Borel set $B$ agreeing with $A$ on every $N$-Cohen generic. In the ambient final extension, enumerate the $N$-coded closed nowhere-dense sets as $(C_n)_{n<\omega}$, as in the proof of F3's generic-largeness component, and let $d$ be the real Borel code for $D=\bigcup_nC_n$. Every nongeneric real lies in $D$, so $A\mathbin\triangle B\subseteq D$. The code $d$ need not lie in $N$, but F1 says that $M$ and the final extension have the same reals, hence $d\in M$; F4 makes its evaluation and meagreness absolute to $M$. Apply F4 inside $M$ to the code of $B$ to obtain a coded open $U$ and coded meagre $E$ with $B\mathbin\triangle U\subseteq E$. [F1, F2, F3, F4]

2.1 The explicit codes for $D$ and $E$ lie in $M$, and F4 closes the meagre ideal under their finite union (equivalently, interleave their two coded nowhere-dense witness sequences). Thus $A\mathbin\triangle U\subseteq D\cup E$ is meagre in $M$, which is exactly BP. Empty and whole-space cases use $U=\varnothing$ and $U=\mathbb R$. [F4, step 1.1] ∎
