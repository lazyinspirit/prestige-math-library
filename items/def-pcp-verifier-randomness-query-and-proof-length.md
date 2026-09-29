---
id: def-pcp-verifier-randomness-query-and-proof-length
kind: definition
title: "PCP verifier resources and deterministic proof strings"
status: draft
origin: pipeline
deps:
  - def-np-by-verifiers
  - def-uniform-finite-probability-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Fix a finite proof alphabet $\Gamma$ independent of the input length. A
**nonadaptive PCP verifier** with resource bounds $r,q,L$ is a uniform
polynomial-time randomized oracle algorithm $V$ such that, on each input
$x\in\{0,1\}^n$, it uses at most $r(n)$ unbiased random bits, reads a fixed
proof $\pi\in\Gamma^{L(n)}$ at at most $q(n)$ locations, and outputs accept
or reject. For every input and every coin string, the queried locations are
computed from $x$ and the coins before any proof symbol is read; each lies in
$[L(n)]$. Repeated locations count as repeated queries. The bound $L(n)$ is
polynomial in $n$ and counts addressable **symbols**, not the bits in their
binary addresses. When $L(n)=0$, the proof is empty and the verifier makes no
queries.

For a fixed input $x$ and a fixed proof $\pi$, the acceptance probability is
the proportion of the $2^{r(n)}$ coin strings on which $V^\pi(x)$ accepts.
The coin set is nonempty even when $r(n)=0$, in which case it contains the
empty string. Completeness asks for one fixed proof on each yes input;
soundness bounds the acceptance probability for every fixed proof on each no
input. Thus the proof is not resampled when the verifier runs. This oracle
version refines the verifier viewpoint of [[def-np-by-verifiers]], with its
coin space interpreted as the uniform finite probability space of
[[def-uniform-finite-probability-space]].
