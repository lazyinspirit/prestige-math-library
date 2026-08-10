---
id: cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic
kind: corollary
title: "The word-quotient and reduced-word models are uniquely isomorphic compatibly with $X$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-word-quotient-model-is-free, thm-normal-form-for-the-word-quotient-model, thm-reduced-words-form-the-free-group, thm-free-groups-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

Let $F_{\mathrm{red}}(X)$ be the reduced-word group of
[[thm-reduced-words-form-the-free-group]]. There is a unique group isomorphism

$$\Phi:F_{\mathrm{word}}(X)\longrightarrow F_{\mathrm{red}}(X)$$

such that $\Phi([x])=x$ for every $x\in X$. It sends each word class to its
unique reduced representative, so the quotient-of-words and reduced-word
constructions are compatible models of the same free group rather than rival
definitions.

## Facts & Assumptions

**Given:** A set $X$, the word-quotient free group, and the reduced-word free group on $X$.

[L1] If $(F,\iota)$ and $(F',\iota')$ are free groups on the same set $X$, then there is a unique group isomorphism $\phi:F\to F'$ compatible with the two generator maps ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[L2] Reduced words form a group whose product is concatenation followed by free reduction, and the map sending $x\in X$ to the one-letter word $x$ has the universal property of the free group on $X$ ([[thm-reduced-words-form-the-free-group]]).

[L3] Every class in $W(X)/{\sim}$ contains exactly one reduced word ([[thm-normal-form-for-the-word-quotient-model]]).

[L4] The word-quotient group together with $x\mapsto[x]$ is a free group on $X$ ([[thm-word-quotient-model-is-free]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] and [L2], both displayed models are free groups on the same set $X$, so [L1] gives a unique compatible isomorphism $\Phi:F_{\mathrm{word}}(X)\to F_{\mathrm{red}}(X)$. [L1, L2, L4]

2.1 Compatibility gives $\Phi([x])=x$, and preservation of inverses gives $\Phi([x^{-1}])=x^{-1}$. Thus $\Phi([a_1\cdots a_n])$ is the reduced product of the one-letter words $a_1,\ldots,a_n$. It is freely equivalent to $a_1\cdots a_n$ and hence is the unique reduced representative of that class by [L3], including the empty class. [step 1.1, L2, L3] ∎
