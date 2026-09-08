---
id: fs-every-omega-one-tree-has-a-cofinal-branch
kind: false-statement
title: "FALSE: every ω1-tree has a cofinal branch"
status: draft
origin: pipeline
deps: [thm-special-aronszajn-tree-construction, def-kappa-tree-and-tree-property, def-aronszajn-suslin-and-special-tree, thm-countable-subsets-of-omega-one-are-bounded, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.2 and Exercise 9.4, printed p43; application of the local special-tree construction"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

Every $\omega_1$-tree has a cofinal branch, even when only normal splitting trees are considered.

## Facts & Assumptions

**Given:** Work in ZFC. The statement above is to be refuted by the earlier constructed special Aronszajn tree.

[F1] There exists a normal splitting special Aronszajn tree. [[thm-special-aronszajn-tree-construction]]

[F2] A $\kappa$-tree has height $\kappa$ and all levels of size less than $\kappa$. [[def-kappa-tree-and-tree-property]]

[F3] An Aronszajn tree is an $\omega_1$-tree without a cofinal branch; a special tree admits a map to $\omega$ injective on chains. [[def-aronszajn-suslin-and-special-tree]]

[F4] Under countable choice no countable subset of $\omega_1$ is cofinal. [[thm-countable-subsets-of-omega-one-are-bounded]]

[A1] Assume AC, as required by the construction and F4. [[def-axiom-of-choice]]

## Refutation

1.1 Take the normal splitting special Aronszajn tree $T$ supplied by F1 under A1. By F3 and F2 it has height $\omega_1$ and countable levels, so it satisfies the proposed hypothesis, including its optional normality and splitting restrictions. Specialness supplies $f:T\to\omega$ with different values on comparable distinct nodes. In the construction this map is obtained by coding the strictly increasing rational labels by natural numbers. [F1, F2, F3, A1, given]

2.1 If $B$ were a cofinal branch of $T$, its nodes would be pairwise comparable, so $f\mathbin{\upharpoonright}B$ would be injective. Thus $B$ and its image under the height map would be countable. F4, using the countable choice supplied by A1, says that this height image cannot be cofinal in $\omega_1$. This contradicts the definition of a cofinal branch. Hence this concrete constructed tree refutes the statement. [F3, F4, A1, step 1.1] ∎
