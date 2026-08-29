---
id: lem-finite-tuples-admit-effective-prefix-free-encodings
kind: lemma
title: "Finite tuples admit effective prefix-free binary encodings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effective-binary-encoding-and-decoder]
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
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf"
---

## Statement

For every fixed $k\ge 1$, the set of binary $k$-tuples
$(w_1,\dots,w_k)\in(\{0,1\}^*)^k$ has an effective prefix-free binary encoding.

## Facts & Assumptions

**Given:** A fixed integer $k\ge1$.

[L1] An effective binary encoding is an injective map into $\{0,1\}^*$ equipped
with a total decoder having a fixed malformed-code output, and prefix-free means
that no codeword is a proper prefix of another, by
[[def-effective-binary-encoding-and-decoder]].

## Proof

**Proof technique:** direct.

1.1 First encode a single binary word by $$ c(w):=1^{|w|}0w. $$ From the initial block of $1$'s and the following $0$, one reads off $|w|$ and then reads exactly that many remaining bits, so $c$ is injective and has a total decoder that either returns the uniquely parsed word or the malformed token of [L1]. [given, L1, construct]

2.1 For the fixed tuple length $k$, define $$ E(w_1,\dots,w_k):=1^k0\,c(w_1)\cdots c(w_k). $$ The initial block $1^k0$ tells the decoder that exactly $k$ self-delimiting blocks must follow. Parsing those $k$ blocks recovers a unique tuple when the input has the required form, and otherwise the decoder returns the malformed token. Hence $E$ is an effective encoding in the sense of [L1]. [step 1.1, L1, construct]

3.1 The encoding $E$ is prefix-free. Indeed, once the parser has read the initial block $1^k0$, it knows that the codeword ends exactly after the $k$th self-delimiting block. So a valid codeword cannot be a proper prefix of a different valid codeword with extra unread bits at the end. [step 2.1, L1]

4.1 Therefore $(\{0,1\}^*)^k$ admits an effective prefix-free binary encoding. [step 2.1, step 3.1] ∎
