---
id: lem-the-universal-coefficient-tor-obstruction-map-for-homology
title: "The homological universal-coefficient Tor obstruction map"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-balanced-tor-bifunctor"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $C$ be a free right $R$-complex over a PID and $G$ a left $R$-module. The cycle-boundary sequences induce a natural map $H_n(C\otimes_RG)\to\operatorname{Tor}_1^R(H_{n-1}C,G)$.

## Proof

**Given:** $0\to B_{n-1}C\to Z_{n-1}C\to H_{n-1}C\to0$ with the first two modules free.

1.1 Tensoring this free presentation by $G$ identifies $\operatorname{Tor}_1^R(H_{n-1}C,G)$ with the kernel of $B_{n-1}C\otimes G\to Z_{n-1}C\otimes G$. [given]

2.1 A cycle in $C\otimes G$ maps under $d_n\otimes1$ into that kernel; changing it by a boundary changes the image by zero, so this gives the asserted natural quotient map. [step 1.1, algebra] ∎
