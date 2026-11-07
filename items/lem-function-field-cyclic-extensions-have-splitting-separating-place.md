---
id: lem-function-field-cyclic-extensions-have-splitting-separating-place
kind: lemma
title: "Linearly disjoint cyclic prime extensions have a place splitting in one but not the other"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-global-function-field-infinitely-many-nonsplit-primes
  - lem-finite-ramification-of-function-field-extension
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-global-field-completion-tensor-product-decomposition
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - def-finite-galois-extension-and-galois-group
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: compositum-and-local-degree
axiom_use: AC, Countable Choice and DC are inherited from the local place, completion and nonsplit suppliers; the compositum argument adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §3.3.1, Corollary 2"
      url: "https://arxiv.org/pdf/1610.07486"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC.

Let $L_1/F$ and $L_2/F$ be cyclic extensions of the same prime degree $p$,
with $[L_1L_2:F]=p^2$. Infinitely many places of $F$ split completely in
$L_2$ and do not split in $L_1$, where complete splitting means that the
decomposition group is trivial.

## Statement references

[[thm-global-function-field-infinitely-many-nonsplit-primes]]

[[lem-finite-ramification-of-function-field-extension]]

[[def-finite-galois-extension-and-galois-group]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.3.1, Corollary 2](https://arxiv.org/pdf/1610.07486)

## Facts & Assumptions

**Given:** Cyclic extensions $L_1/F$ and $L_2/F$ of prime degree $p$ with
$[L_1L_2:F]=p^2$, together with AC, Countable Choice, and DC.

[A1] These choice assumptions are inherited from the local completion and
nonsplit suppliers. ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]])

[F1] A nontrivial finite Galois extension has infinitely many nonsplit places.
([[thm-global-function-field-infinitely-many-nonsplit-primes]])

[F2] Only finitely many places ramify in the compositum $L_1L_2/F$.
([[lem-finite-ramification-of-function-field-extension]])

[F3] At an unramified place, the decomposition group has order equal to the
local degree, is cyclic, and is a subgroup of the global Galois group.
([[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]],
[[thm-global-field-completion-tensor-product-decomposition]],
[[def-place-of-a-global-field]],
[[def-completion-of-a-global-field-at-a-place]],
[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]],
[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]])

[F4] A place splits completely exactly when its decomposition group is
trivial. ([[def-finite-galois-extension-and-galois-group]],
[[def-place-of-a-global-field]],
[[def-completion-of-a-global-field-at-a-place]])

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 Put $M=L_2$ and $N=L_1L_2$. The extension $N/M$ is cyclic of degree $p$. By [F1], infinitely many places $w$ of $M$ do not split in $N/M$. Discard the finitely many places above places ramified in $N/F$ by [F2], and let $v$ be the place of $F$ below any remaining $w$. [A1, F1, F2]

2.1 The local degree $[N_w:M_w]$ is $p$. Since $N/F$ is unramified at $v$, [F3] identifies its decomposition group with a cyclic subgroup of $\operatorname{Gal}(N/F)\simeq(\mathbb Z/p\mathbb Z)^2$. It contains the degree-$p$ subgroup for $N/M$, so it equals that subgroup. Its intersection with $\operatorname{Gal}(M/F)$ is trivial; hence $[M_w:F_v]=1$ and $v$ splits completely in $L_2=M$. The decomposition group acts nontrivially on $L_1$, so $v$ does not split in $L_1$. [F3, step 1.1, algebra]

3.1 Each such $w$ gives a place $v$ with the two required splitting properties, and infinitely many $w$ give infinitely many $v$ because each place of $F$ has only finitely many places above it in the finite extension $M/F$. [F4, step 2.1, algebra] ∎ 