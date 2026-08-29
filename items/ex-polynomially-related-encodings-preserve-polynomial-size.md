---
id: ex-polynomially-related-encodings-preserve-polynomial-size
kind: example
title: "Ordinary binary numerals and doubled-bit numerals are polynomially related"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-instance-size-under-an-encoding, prop-polynomially-related-encodings-preserve-polynomial-size]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "San Skulrattanakulchai, The Class P"
      url: "https://homepages.gac.edu/~sskulrat/Courses/2019S-265/lectures/P.html"
---

## Example

Let $\sigma(0)=0$, let $\sigma(n)$ for $n>0$ be the ordinary binary numeral
with leading bit $1$, and let $\tau(n)$ be the word obtained by repeating each
bit of $\sigma(n)$ twice. Decode $\sigma$ by rejecting the empty word and
noncanonical leading zeros, and otherwise reading the binary numeral. Decode
$\tau$ by first requiring identical adjacent bit-pairs, replacing each pair by
one bit, and then using the decoder for $\sigma$. These total decoders return
$\mathtt{mal}$ on every rejected word and recover $n$ on the displayed
codewords, so $\sigma$ and $\tau$ are effective encodings. Moreover,
$|\tau(n)|=2|\sigma(n)|$ for every $n$, so the two encodings are polynomially
related. For example,
$$ \sigma(13)=1101,\qquad \tau(13)=11110011. $$
Consequently a bound such as $|\tau(n)|^3$ is also a polynomial bound in
$|\sigma(n)|$, namely $8|\sigma(n)|^3$.

## Facts & Assumptions

**Given:** The encodings $\sigma$ and $\tau$ defined above.

[L1] Two encodings are polynomially related when each code length is bounded by
a polynomial in the other, by [[def-instance-size-under-an-encoding]].

[L2] Polynomially related encodings preserve polynomial size bounds, by
[[prop-polynomially-related-encodings-preserve-polynomial-size]].

## Verification

**Proof technique:** direct.

1.1 The specified decoders recover $n$ from both codewords, so $\sigma$ and $\tau$ are effective encodings. By construction, each bit of $\sigma(n)$ contributes exactly two bits to $\tau(n)$, so $|\tau(n)|=2|\sigma(n)|$ for every $n$. Hence $|\tau(n)|\le 2|\sigma(n)|$ and $|\sigma(n)|\le|\tau(n)|$, which are polynomial bounds in both directions. By [L1], $\sigma$ and $\tau$ are polynomially related. [given, L1]

1.2 The displayed example is immediate: $\sigma(13)=1101$ and $\tau(13)=11110011$. [given]

2.1 Applying [L2] to the polynomial bound $m(n)=|\tau(n)|^3$ gives a polynomial bound in $|\sigma(n)|$. Here the calculation is explicit: $|\tau(n)|^3=(2|\sigma(n)|)^3=8|\sigma(n)|^3$. [L2, step 1.1, algebra] ∎
