---
id: lem-square-zero-coderivation-is-higher-jacobi-identities
kind: lemma
title: "Square-zero coderivations are equivalent to the shifted higher Jacobi identities"
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-koszul-sign-rule-for-graded-tensors
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-coderivation-extension-from-corestrictions
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, sh Lie Structures"
      url: "https://arxiv.org/pdf/hep-th/9209099"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§10.1.12–10.1.20"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $Q$ be the degree-one coderivation of
[[def-shifted-coalgebra-l-infinity-algebra]], with corestrictions
$q_i:S^i(W)\to W$. For each $n\ge1$, define

$$J_n(w_1,\ldots,w_n) =\sum_{i=1}^{n}\ \sum_{\sigma\in\operatorname{Sh}(i,n-i)} \epsilon(\sigma;w_1,\ldots,w_n)\, q_{n-i+1}\!\left( q_i(w_{\sigma(1)}\odot\cdots\odot w_{\sigma(i)}) \odot w_{\sigma(i+1)}\odot\cdots\odot w_{\sigma(n)} \right),$$

where $\operatorname{Sh}(n,0)$ contains only the identity and an empty tail
after $q_i$ is omitted. Then $Q^2=0$ if and only if
$J_n(w_1,\ldots,w_n)=0$ for every $n$ and all homogeneous $w_j\in W$. These
are the shifted higher Jacobi identities; for $n=1$ the identity is
$q_1^2=0$.

## Facts & Assumptions

**Given:** A reduced graded symmetric coalgebra $S^c(W)$, a degree-one
coderivation $Q$, and its corestrictions $q_n$.

[F1] [[def-shifted-coalgebra-l-infinity-algebra]]: $Q$ has degree $+1$ and
satisfies the coderivation equation with the graded tensor convention.

[F2] [[lem-coderivation-extension-from-corestrictions]]: a coderivation is
uniquely determined by its corestrictions.

[F3] [[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]]:
the only primitive elements of $S^c(W)$ are the length-one elements $W$.

[F4] [[def-koszul-sign-rule-for-graded-tensors]]: moving homogeneous factors
past one another contributes the displayed Koszul signs.

## Proof

1.1 The square $Q^2$ is a coderivation of degree $2$. Indeed, applying the coderivation equation twice gives $\bar\Delta Q^2 =(Q\otimes1+1\otimes Q)^2\bar\Delta =(Q^2\otimes1+1\otimes Q^2)\bar\Delta,$ because the two cross terms are $Q\otimes Q$ and $-Q\otimes Q$ by [F4]. [F1, F4, algebra]

1.2 On an input of symmetric length $n$, the projection $\pi_1Q^2$ can be nonzero only when the first application of $Q$ consumes $i$ inputs by $q_i$ and the second consumes the resulting $q_i$ output together with all $n-i$ unused inputs by $q_{n-i+1}$. The first application ranges over exactly the $(i,n-i)$-unshuffles; its coefficient is $\epsilon(\sigma;w_1,\ldots,w_n)$, and the second unshuffle has only one term because it must consume every remaining factor. Thus $(\pi_1Q^2)|_{S^n(W)}=J_n$. [F1, F2, F4, algebra]

2.1 If $Q^2=0$, then every projection $\pi_1Q^2|_{S^n(W)}$ is zero, so step 1.2 gives $J_n=0$ for all $n$. [step 1.2, algebra]

2.2 Conversely, suppose $J_n=0$ for every $n$. By step 1.2, every corestriction of the coderivation $Q^2$ is zero. We show by induction on input length that $Q^2=0$. On length one it is zero by its corestriction. If it vanishes on all smaller lengths, its coderivation equation makes the reduced coproduct of $Q^2(x)$ zero for an input $x$ of the next length. By [F3], $Q^2(x)$ is then in $W$, and its zero corestriction forces $Q^2(x)=0$. [step 1.1, step 1.2, F3, induction]

3.1 The induction covers every finite symmetric length, which exhausts the direct sum $S^c(W)$. Hence $Q^2=0$, proving the converse. [step 2.2, discharge-induction] ∎

