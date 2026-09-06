---
id: lem-the-relative-connecting-map-is-independent-of-lift-and-representative
kind: lemma
title: "Well-definedness of the relative connector"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-homology-connecting-homomorphism-on-cycles, def-relative-singular-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

The formula $\delta[c]=[\partial c]$ defines a homomorphism
$H_n(X,A;G)\to H_{n-1}(A;G)$.

## Facts & Assumptions

**Given:** Relative cycles $c,c'$ representing the same class in $H_n(X,A;G)$.

## Proof

**Proof technique:** direct.

1.1 Equality of their relative classes says $c'-c=a+\partial b$ for some $a\in C_n(A;G)$ and $b\in C_{n+1}(X;G)$. [given, algebra]

2.1 Therefore $\partial c'-\partial c=\partial a$, an ordinary boundary in $C_{n-1}(A;G)$; the two proposed values agree. Linearity follows from linearity of $\partial$. [step 1.1, algebra] ∎
