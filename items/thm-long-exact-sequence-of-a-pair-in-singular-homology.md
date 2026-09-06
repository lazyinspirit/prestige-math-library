---
id: thm-long-exact-sequence-of-a-pair-in-singular-homology
kind: theorem
title: "Long exact sequence of a pair"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-singular-homology, thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 2.16"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For $A\subseteq X$ there is an exact sequence
$$\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to H_{n-1}(X;G)\to\cdots.$$

## Facts & Assumptions

**Given:** A subspace $A\subseteq X$.

## Proof

**Proof technique:** direct.

1.1 Inclusion and quotient form a degreewise short exact sequence $0\to C_\bullet(A;G)\to C_\bullet(X;G)\to C_\bullet(X,A;G)\to0$. [given, construct]

2.1 The long-exact-sequence theorem for a short exact sequence of complexes applied to step 1.1 gives precisely the displayed sequence, with the third homology group equal to relative homology by definition. [step 1.1, algebra] ∎
