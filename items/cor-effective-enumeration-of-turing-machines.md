---
id: cor-effective-enumeration-of-turing-machines
kind: corollary
title: "Turing machines admit an effective enumeration"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, lem-machine-encoding-is-injective-and-decodable]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
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

The coded deterministic one-tape Turing machines of
[[def-effective-encoding-of-turing-machines]] can be effectively enumerated.

## Facts & Assumptions

**Given:** The fixed coding of deterministic one-tape Turing machines.

[L1] Every coded deterministic one-tape Turing machine $M$ has a binary code $\ulcorner M\urcorner$, by [[def-effective-encoding-of-turing-machines]].

[L2] The chosen coding has a total decoder and is injective, by [[lem-machine-encoding-is-injective-and-decodable]].

## Proof

**Proof technique:** direct.

1.1 Enumerate all binary words in shortlex order and run the total decoder from [L2] on each word. Whenever the decoder reports malformed input, output nothing; whenever it returns a coded machine, output that machine. [L2, given, construct]

2.1 By [L1], every coded machine $M$ has some binary code $\ulcorner M\urcorner$, and shortlex enumeration eventually reaches that code. At that stage the decoder returns $M$, so every coded machine appears somewhere in the output stream. [L1, step 1.1]

3.1 By injectivity in [L2], two different binary words cannot decode to the same coded machine. Therefore the procedure from step 1.1 lists each coded deterministic one-tape Turing machine exactly once and gives an effective enumeration. [L2, step 1.1, step 2.1] ∎
