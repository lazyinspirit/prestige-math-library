---
id: thm-every-solovay-model-set-of-reals-is-lebesgue-measurable
kind: theorem
title: Every set of reals in the Solovay model is Lebesgue measurable
status: draft
origin: pipeline
deps: [thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-borel-code-and-regularity-absoluteness, lem-solovay-random-and-cohen-generics-are-large, lem-solovay-homogeneous-truth-has-borel-representatives]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: borel-mod-null
sources: {references: [{title: "Solovay 1970, Part III, Lemma 1.4 and Lemma 2.9", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
---

## Statement

In $M$, every subset of $\mathbb R$ is Lebesgue measurable.

## Facts & Assumptions

**Given:** $A\subseteq\mathbb R$ with $A\in M$.

[F1] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]]: $A$ has a definition from one real and finitely many ordinals.

[F2] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: the real parameter lies in a bounded intermediate model $N$ whose relevant real codes are countable in the final extension.

[F3] [[lem-solovay-random-and-cohen-generics-are-large]]: the $N$-random reals are conull in the final extension; its proof obtains the null exception by ambiently enumerating the $N$-coded null Borel sets.

[F4] [[lem-solovay-homogeneous-truth-has-borel-representatives]]: an $N$-coded Borel $B$ agrees with $A$ on every $N$-random real.

[F5] [[lem-solovay-borel-code-and-regularity-absoluteness]]: the codes and nullness transfer to $M$, whose DC supplies completeness of the null ideal.

## Proof

1.1 Use F2 to choose a bounded $N$ containing F1's sole real definition parameter; the finitely many ordinal parameters require no localization. F4 gives an $N$-coded Borel set $B$ agreeing with $A$ on every $N$-random real. In the ambient final extension enumerate the $N$-coded null Borel sets as $(C_n)_{n<\omega}$, as in F3's proof, and let $c$ be the real Borel code of their union $C$. Every nonrandom real lies in $C$, so $A\mathbin\triangle B\subseteq C$. The code $c$ generally need not lie in $N$, but F1 says that $M$ and the final extension have the same reals; hence $c\in M$. [F1, F2, F3, F4]

2.1 The code of $B$ is a real of $N$, hence a real of the final extension; F1's same-reals conclusion puts that code in $M$ without requiring the false class inclusion $N\subseteq M$. Step 1.1 likewise puts the code of $C$ in $M$. F5 makes $B$ Borel and $C$ null internally and supplies completeness of the null ideal, so every subset of $C$ is measurable; hence $A=B\mathbin\triangle(A\mathbin\triangle B)$ is measurable. This includes $A=\varnothing$, $A=\mathbb R$, and zero exception $C=\varnothing$. [F1, F5, step 1.1] ∎
