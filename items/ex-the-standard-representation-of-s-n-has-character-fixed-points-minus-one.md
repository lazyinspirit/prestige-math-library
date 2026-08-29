---
id: ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one
kind: example
title: "The standard representation of $S_n$ has character equal to the number of fixed points minus $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-character-of-a-permutation-representation-counts-fixed-points, thm-characters-of-direct-sums-tensor-products-and-duals]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

For $n\ge1$, let $S_n$ act on $\{1,\dots,n\}$ by permutation and let
$\mathbb C^{n}$ be the permutation representation. The standard
representation is the subrepresentation

$$V_{\mathrm{std}}:=\Bigl\{(x_1,\dots,x_n)\in\mathbb C^{n}:\sum_ix_i=0\Bigr\},$$

and its character is $\chi_{\mathrm{std}}(\sigma)=\operatorname{fix}(\sigma)-1$,
where $\operatorname{fix}(\sigma)$ is the number of fixed points of $\sigma$.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a permutation $\sigma\in S_n$ acting on $\{1,\dots,n\}$.

[F1] The character of a permutation representation is the number of fixed points of the action ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[F2] Characters add on direct sums ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[A1] The permutation representation decomposes as $\mathbb C^{n}=L\oplus V_{\mathrm{std}}$, where $L=\{(x,\dots,x):x\in\mathbb C\}$ is a copy of the trivial representation and $V_{\mathrm{std}}$ is its stated complement.

## Verification

**Proof technique:** direct.

1.1 The line $L$ of constant vectors is fixed pointwise by every permutation, so it is a trivial subrepresentation, and the sum map $(x_1,\dots,x_n)\mapsto\sum_ix_i$ is preserved by every permutation, so its kernel $V_{\mathrm{std}}$ is a subrepresentation. Every vector decomposes uniquely as a constant vector plus a vector of sum zero, which is [A1]. [A1, given]

1.2 By [F2] applied to [A1], the permutation character $\chi_{\mathbb C^{n}}$ satisfies $\chi_{\mathbb C^{n}}=\chi_{\mathrm{triv}}+\chi_{\mathrm{std}}$. The trivial character is the constant $1$, so $\chi_{\mathrm{std}}(\sigma)=\chi_{\mathbb C^{n}}(\sigma)-1$. [F2, A1, given]

2.1 By [F1], $\chi_{\mathbb C^{n}}(\sigma)=\operatorname{fix}(\sigma)$, the number of fixed points. Combining with step 1.2 gives $\chi_{\mathrm{std}}(\sigma)=\operatorname{fix}(\sigma)-1$. [F1, step 1.2, algebra] ∎
