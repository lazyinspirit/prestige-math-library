---
id: thm-explicit-code-construction-and-distance
kind: theorem
title: "A polynomial-time explicit constant-rate constant-distance code"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-explicit-constant-rate-constant-distance-code, def-reed-solomon-outer-code-and-binary-linear-inner-code, lem-reed-solomon-outer-code-has-constant-rate-and-distance, lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time, lem-concatenated-code-multiplies-rate-and-distance]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2-17.5.3 (Reed-Solomon and concatenated codes) and §19.2 (explicit codes), printed pp. 346-348 and 405-407."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 (explicit binary code of constant rate and constant distance), printed pp. 29-31."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

There is a deterministic uniform binary code family $(C_k)_{k\ge1}$ in the sense of [[def-explicit-constant-rate-constant-distance-code]], with
$$N(k)\ <\ 128k,\qquad \text{rate}\ >\ \frac1{128},\qquad \text{relative distance}\ \ge\ \frac18,$$
each encoder computable by one algorithm in time polynomial in $k$. Thus the definition of an explicit constant-rate constant-distance family is met with $C_0=128$, $c_0=1/128$ and $\delta_0=1/8$, and these three constants are absolute.

## Facts & Assumptions

**Given:** an integer $k\ge1$, the family of concatenated codes of [[def-reed-solomon-outer-code-and-binary-linear-inner-code]] indexed by $m\ge1$, and the constants $K=q/2$, $q=2^m$.

[F1] For every $m\ge1$ the concatenated code of [[def-reed-solomon-outer-code-and-binary-linear-inner-code]] encodes $Km=2^{m-1}m$ bits into $16qm=32\cdot2^{m-1}m$ bits; it is defined after choosing the first irreducible polynomial of degree $m$ in a fixed enumeration and the inner matrix produced by the uniform procedure of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]], and its bit encoding of field elements is the power-basis encoding $\mathrm{enc}$.

[F2] The Reed-Solomon outer code has rate $1/2$ and relative distance at least $1/2$ ([[lem-reed-solomon-outer-code-has-constant-rate-and-distance]]).

[F3] The inner code is injective and linear of rate $1/16$ and relative distance at least $1/4$, and the matrix is produced deterministically in time polynomial in $2^m m$ ([[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]]).

[F4] The concatenation of an outer code of rate $R_o$ and relative distance $\delta_o$ with an injective linear inner code of rate $R_i$ and relative distance $\delta_i$ has rate $R_oR_i$ and relative distance at least $\delta_o\delta_i$ ([[lem-concatenated-code-multiplies-rate-and-distance]]).

[F5] A binary code family with $N(k)\le C_0k$, rate at least $c_0$ and relative distance at least $\delta_0$, encoded by one deterministic algorithm running in time polynomial in $k$, is an explicit constant-rate constant-distance family ([[def-explicit-constant-rate-constant-distance-code]]).

## Proof

**Proof technique:** constructive.

1.1 Define $m(k)$ to be the least integer $m\ge1$ with $2^{m-1}m\ge k$; it exists because $2^{m-1}m\to\infty$, and for $m\ge2$ minimality gives $2^{m-2}(m-1)<k$. Given $x\in\{0,1\}^k$, pad it by zeros to the length $Km=2^{m-1}m$ and apply the concatenated encoding of [F1], whose output length is $N(k):=32\cdot2^{m-1}m$. [F1, construct]

2.1 For $m\ge2$ we have $2^{m-1}m=2\cdot2^{m-2}m\le4\cdot2^{m-2}(m-1)<4k$, using $m\le2(m-1)$; hence $N(k)<128k$. The case $m=1$ occurs exactly for $k=1$, where $N(1)=32<128$. The rate of the padded $k$-bit family is $k/N(k)>1/128$; $Km/N(k)=1/32$ is the rate of the full concatenated code before restricting it to padded messages. The relative distance remains at least $\tfrac12\cdot\tfrac14=\tfrac18$ by [F2], [F3] and [F4], because restricting an injective code to padded messages cannot decrease its minimum pairwise distance. [F1, F2, F3, F4, step 1.1, algebra]

2.2 The family is injective: the padding is injective and the concatenated encoding is injective by [F4]. It is uniform and deterministic: $m$ is determined by $k$, the field and its bit encoding by [F1], the inner matrix by [F3], and no step uses randomness. [F1, F3, F4, step 1.1]

3.1 The running time is polynomial in $k$: $m\le2+\log_2k$ because $2^{m-1}<2k$ for $m\ge2$; the degree-$m$ irreducible polynomial is found by scanning at most $2^m$ monic polynomials and testing each by trial division, in $2^{m}2^{m/2}m^{2}\le 2^{3m/2}m^{2}$ field operations; evaluating the outer code at all $q$ field elements costs $O(qK)=O(q^2)$ field operations; the inner matrix is computed in time polynomial in $2^mm$ by [F3]; and applying it to the $q$ outer symbols costs $O(qm^2)$. Since $q=2^m\le4k$ and $m=O(\log k)$, every term is polynomial in $k$, so one algorithm serves all $k$ within polynomial time. [F1, F3, step 1.1, step 2.1, algebra]

4.1 By [F5] the family, with its length function, rate, relative distance and polynomial-time uniform encoder verified in steps 2.1, 2.2 and 3.1, is an explicit constant-rate constant-distance binary code family with the stated constants. [F5, step 2.1, step 2.2, step 3.1, discharge-construct] ∎

## Remarks

- **The constants.** The full concatenated code has rate $1/32$, the product of the outer rate $1/2$ and inner rate $1/16$. Padding the $k$ input bits changes that rate to $k/N(k)>1/128$ because $N(k)<128k$; the distance bound $1/8$ is the product $1/2\cdot1/4$ and survives restriction to padded inputs. None of these constants depends on $k$.
- **What is not claimed.** The theorem asserts neither a decoder nor a parity-check description of the family, and it does not optimise the constants; the page needs only that a constant-rate constant-distance family with a polynomial-time uniform encoder exists, which is what [[def-explicit-constant-rate-constant-distance-code]] asks for.
- **Small lengths.** The padding makes the family total: $k=1$ is encoded by the length-$32$ concatenation with $m=1$, $q=2$ and the length-two repetition outer code of [[lem-reed-solomon-outer-code-has-constant-rate-and-distance]], so no separate small-case convention is needed beyond the zero padding.
