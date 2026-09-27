---
id: lem-reed-solomon-outer-code-has-constant-rate-and-distance
kind: lemma
title: "Reed-Solomon outer code has constant rate and distance"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-reed-solomon-outer-code-and-binary-linear-inner-code, def-explicit-constant-rate-constant-distance-code, thm-root-bound-for-polynomials-over-a-domain, lem-of-no-zero-divisors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2 Lemma 17.18 (Reed-Solomon distance), printed p. 347."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2 Definition 17.17, printed p. 347."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $m\ge1$, $q=2^m$ and $K=q/2$, and let $\mathrm{RS}_{q,K}:\mathbb F_q^K\to\mathbb F_q^{\,q}$ be the Reed-Solomon evaluation code of [[def-reed-solomon-outer-code-and-binary-linear-inner-code]]. Then $\mathrm{RS}_{q,K}$ is injective, its rate over the alphabet $\mathbb F_q$ is $K/q=1/2$, and its relative Hamming distance over $\mathbb F_q$ is at least
$$\frac{q-K+1}{q}\ \ge\ \frac12,$$
that is, distinct codewords differ in at least $q-K+1=q/2+1$ coordinates. In the bit metric of [[def-explicit-constant-rate-constant-distance-code]] applied to the words encoded by the power-basis map this is a statement about $\mathbb F_q$-symbols; the binary distance of the concatenated code is computed separately in [[lem-concatenated-code-multiplies-rate-and-distance]].

## Facts & Assumptions

**Given:** integers $m\ge1$, $q=2^m$, $K=q/2$, the field $\mathbb F_q$ with its fixed listing of the $q$ elements, and the evaluation code $\mathrm{RS}_{q,K}$.

[F1] $\mathbb F_q=\mathbb F_2[z]/(f)$ is a field with exactly $q$ elements; the code $\mathrm{RS}_{q,K}$ sends a message $(c_0,\dots,c_{K-1})$ to the word $(P(\alpha))_{\alpha\in\mathbb F_q}$ where $P=\sum_{i<K}c_iX^i$ has degree less than $K$, evaluated at all $q$ elements of the field in the fixed listing; the map is $\mathbb F_q$-linear ([[def-reed-solomon-outer-code-and-binary-linear-inner-code]]).

[L1] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L2] Every field has no zero divisors, so a field with its ring structure is an integral domain ([[lem-of-no-zero-divisors]]).

## Proof

**Proof technique:** direct.

1.1 Let $c\ne c'$ be two distinct messages and let $P,P'$ be the associated polynomials. Then $P-P'\ne0$ because the coefficient vectors differ, and it is a polynomial of degree at most $K-1$, so by [L1] applied over the field $\mathbb F_q$, which is an integral domain by [L2], it has at most $K-1$ roots; equivalently $P(\alpha)=P'(\alpha)$ for at most $K-1$ of the $q$ evaluation points $\alpha$. [F1, L1, L2]

2.1 Among the $q$ coordinates of the two words, therefore, at least $q-(K-1)=q-K+1$ differ; the code is injective because $q-K+1\ge1$, and its relative distance is at least $(q-K+1)/q$. With $K=q/2$ this is $(q/2+1)/q=1/2+1/q\ge1/2$. [step 1.1, F1, algebra]

3.1 The message space $\mathbb F_q^K$ has $q^K$ elements and the rate over $\mathbb F_q$ is the dimension divided by the length, $K/q=1/2$; the input and output sizes in bits are $Km=q m/2$ and $qm$ respectively. [F1, algebra] ∎

## Remarks

- The count is exact for the evaluation code: the bound $q-K+1$ is attained by polynomials vanishing on $K-1$ evaluation points, so the distance cannot be improved by this method, but only the lower bound $1/2$ is used on this page.
- The alphabet here is $\mathbb F_q$, not the binary alphabet: the lemma is a statement about the outer code alone, and the passage to binary distance is the content of [[lem-concatenated-code-multiplies-rate-and-distance]], which uses the injectivity and distance of the inner code. The case $m=1$ is included: then $q=2$, $K=1$, and the code is the length-two repetition code over $\mathbb F_2$, with rate $1/2$ and relative distance $1\ge1/2$.
