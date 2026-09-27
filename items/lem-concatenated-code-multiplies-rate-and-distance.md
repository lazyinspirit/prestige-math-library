---
id: lem-concatenated-code-multiplies-rate-and-distance
kind: lemma
title: "Concatenation multiplies rate and relative distance"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-reed-solomon-outer-code-and-binary-linear-inner-code, def-explicit-constant-rate-constant-distance-code, lem-reed-solomon-outer-code-has-constant-rate-and-distance, lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.3 Definition 17.19 and Claim 17.20 (concatenation multiplies distance), printed p. 348."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 (Reed-Solomon outer code concatenated with a binary inner code), printed pp. 29-30."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $m\ge1$, $q=2^m$, $K=q/2$, let $\mathrm{RS}_{q,K}\subseteq\mathbb F_q^{\,q}$ be the Reed-Solomon outer code with rate $R_o=K/q$ and relative distance at least $\delta_o$, and let $E_{\rm in}=M(\cdot):\mathbb F_2^m\to\mathbb F_2^{16m}$ be the inner encoding of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]], injective and linear of rate $R_i=1/16$ and relative distance at least $\delta_i$, so that $\operatorname{wt}(E_{\rm in}(w))\ge\delta_i\cdot16m$ for every nonzero $w\in\mathbb F_2^m$. Then the concatenated code of [[def-reed-solomon-outer-code-and-binary-linear-inner-code]], which encodes $Km$ bits into $16qm$ bits, is injective with
$$\text{rate}\ =\ R_oR_i\ =\ \frac{K}{16q},\qquad \text{relative distance}\ \ge\ \delta_o\delta_i .$$
For the outer parameters of [[lem-reed-solomon-outer-code-has-constant-rate-and-distance]] and the inner parameters of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]] these are rate at least $\tfrac12\cdot\tfrac1{16}=\tfrac1{32}$ and relative distance at least $\tfrac12\cdot\tfrac14=\tfrac18$.

## Facts & Assumptions

**Given:** integers $m\ge1$, $q=2^m$, $K=q/2$; the bit encoding $\mathrm{enc}:\mathbb F_q\to\mathbb F_2^m$ of the field, which is $\mathbb F_2$-linear by the power basis; the outer code $\mathrm{RS}_{q,K}$ with rate $R_o=K/q$ and relative distance at least $\delta_o$; an injective $\mathbb F_2$-linear $E_{\rm in}:\mathbb F_2^m\to\mathbb F_2^{16m}$ with $\operatorname{wt}(E_{\rm in}(w))\ge\delta_i\,16m$ for $w\ne0$.

[F1] The concatenated encoding sends a message $u=(u_1,\dots,u_K)\in(\mathbb F_2^m)^K$ to the word obtained by applying $E_{\rm in}\circ\mathrm{enc}$ to each of the $q$ coordinates of the outer word $\mathrm{RS}_{q,K}(\mathrm{enc}^{-1}(u_1),\dots,\mathrm{enc}^{-1}(u_K))$; it has $Km$ input bits and $16qm$ output bits, and the field element $0$ has bit encoding the zero vector ([[def-reed-solomon-outer-code-and-binary-linear-inner-code]]).

[F2] Relative distance of a code of length $n$ over an alphabet is the minimum, over distinct codewords, of the fraction of differing coordinates; over a binary alphabet the coordinates are bits. Rate is the input length in bits divided by the output length in bits ([[def-explicit-constant-rate-constant-distance-code]]).

[L1] Distinct messages of $\mathrm{RS}_{q,K}$ have outer words differing in at least $\delta_oq$ coordinates, and distinct messages have distinct outer words ([[lem-reed-solomon-outer-code-has-constant-rate-and-distance]]).

[L2] The map $E_{\rm in}$ is linear and injective with $\operatorname{wt}(E_{\rm in}(w))\ge\delta_i\,16m$ for every nonzero $w$; in particular $u\mapsto Mu$ has rate $R_i=1/16$ and relative distance at least $\delta_i$ ([[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]]).

## Proof

**Proof technique:** direct.

1.1 The concatenated encoding is injective: if two messages $u\ne u'$ had the same concatenated word, then their outer words would agree in every coordinate, since $E_{\rm in}\circ\mathrm{enc}$ is injective and the blocks of the concatenation are read off coordinatewise; but distinct messages have distinct outer words by [L1, F1]. Moreover the rate is $Km/(16qm)=K/(16q)=R_oR_i$, because the outer code has $K$ $\mathbb F_q$-symbols ($Km$ bits) and the concatenated word has $q$ blocks of $16m$ bits. [F1, F2, L1, algebra]

2.1 Let $u\ne u'$ be distinct messages with outer words $c\ne c'$, and let $S=\{j:c_j\ne c'_j\}$ be the set of differing coordinates, of size at least $\delta_oq$ by [L1]. For $j\in S$ the field element $c_j-c'_j\ne0$ has nonzero bit encoding $\mathrm{enc}(c_j-c'_j)=\mathrm{enc}(c_j)-\mathrm{enc}(c'_j)$ by linearity of $\mathrm{enc}$, so the block difference $E_{\rm in}(\mathrm{enc}(c_j))-E_{\rm in}(\mathrm{enc}(c'_j))=E_{\rm in}(\mathrm{enc}(c_j-c'_j))$ is a nonzero word of weight at least $\delta_i\,16m$ by [L2]. [F1, L2, step 1.1, algebra]

3.1 The blocks indexed by $S$ occupy disjoint sets of coordinates of the concatenated word, so the total Hamming distance between the two concatenated words is the sum over $j\in S$ of the block weights, at least $\lvert S\rvert\,\delta_i\,16m\ge\delta_oq\,\delta_i\,16m$; dividing by the word length $16qm$ gives relative distance at least $\delta_o\delta_i$, and with the outer and inner parameters this is at least $\tfrac12\cdot\tfrac14=\tfrac18$ while the rate is $\tfrac12\cdot\tfrac1{16}=\tfrac1{32}$. [F2, step 2.1, L1, L2, algebra] ∎

## Remarks

- **Both factors are honest minima.** The outer distance loses a factor $q$ in the number of surviving coordinates and the inner distance loses a factor $16m$ in the surviving bits per coordinate, and the product is exactly the product of the relative distances; nothing is lost to the intermediate field or to the choice of inner matrix, because the inner map is linear and injective and its blocks are disjoint.
- The lemma is stated for the concrete outer and inner codes of this page, but the proof uses only [F1], [F2], [L1] and [L2], so the same computation applies to any outer code with rate $R_o$ and relative distance $\delta_o$ whose alphabet is identified with $\mathbb F_2^m$ and any injective linear inner code with parameters $R_i,\delta_i$.
