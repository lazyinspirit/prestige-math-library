---
id: lem-machine-encoding-is-injective-and-decodable
kind: lemma
title: "The chosen machine coding is injective and has a total decoder"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, def-effective-binary-encoding-and-decoder, lem-finite-tuples-admit-effective-prefix-free-encodings]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
---

## Statement

The coding $\ulcorner M\urcorner$ fixed in
[[def-effective-encoding-of-turing-machines]] is injective on coded
deterministic one-tape Turing machines, and it has a total decoder that either
reconstructs the unique coded machine or reports malformed input.

## Facts & Assumptions

**Given:** The fixed coding scheme $\ulcorner M\urcorner$ from [[def-effective-encoding-of-turing-machines]].

[L1] A coded deterministic one-tape machine is described by a finite tuple of binary numerals recording $m$, $s$, $n$, and the lexicographically ordered transition triples, and its code is the result of applying the fixed tuple encoder to that description tuple, by [[def-effective-encoding-of-turing-machines]].

[L2] The machine definition fixes the single variable-arity encoder $E(w_1,\ldots,w_k)=1^k0c(w_1)\cdots c(w_k)$, whose arity header and self-delimiting entries give a total parser ([[def-effective-encoding-of-turing-machines]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each coded machine $M$ has one definite description tuple $\operatorname{Desc}(M)$ of some fixed length $3+3(m-2)n$, and $\ulcorner M\urcorner$ is exactly the tuple code of that tuple. [L1, given]

1.2 A total decoder first uses [L2] to parse the unary arity header and then exactly that many self-delimiting entries. If the parse fails or leaves unread bits, it returns the malformed token; otherwise it recovers one finite tuple of binary words. [L2, construct]

2.1 If $\ulcorner M\urcorner=\ulcorner N\urcorner$, then the global injectivity in [L2] gives equality of the decoded tuples, including their arities, so $\operatorname{Desc}(M)=\operatorname{Desc}(N)$. By [L1], that common tuple records the same values of $m$, $s$, $n$, and every transition triple for both machines. Hence $M=N$. [L1, L2, step 1.1]

2.2 The decoder then checks the shape demanded by [L1]: every entry must be a canonical binary numeral; the tuple must have length $3+3(m-2)n$ for the recovered first three numerals; one must have $m\ge 3$, $n\ge 1$, and $0\le s<n$; and every transition entry must lie in $Q_m\times\Gamma_n\times\{0,1\}$. If any check fails, the decoder returns the malformed token. If all checks pass, those data determine one coded deterministic one-tape machine. [L1, step 1.2]

3.1 Step 2.1 proves injectivity, and steps 1.2 and 2.2 produce a total decoder. Therefore the chosen machine coding is injective and effectively decodable. [step 2.1, step 1.2, step 2.2] ∎
