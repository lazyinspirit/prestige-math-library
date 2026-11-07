---
id: alg-finite-admissible-tuple-certificate-check
kind: algorithm
title: "Deterministic checking of finite admissible-tuple certificates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-admissible-prime-tuple, def-prime, thm-standard-representatives-modulo-n]
justified_by: [lem-finite-admissible-tuple-certificates-are-sound-and-complete]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1407.4897v4"
      locator: "§10.2.1, finite admissibility testing; the explicit certificate and trial-division procedure are local adaptations"
---

## Definition

Input integers $k\ge1$, $D\ge0$, an integer list $(h_1,\ldots,h_k)$, and a finite list of integer pairs. Arithmetic and remainders use exact integers; $n\bmod p$ is the representative in $\{0,\ldots,p-1\}$. The checker returns ACCEPT or REJECT.

1. Reject unless the shift list has exactly $k$ entries, $h_1<\cdots<h_k$, and $h_k-h_1\le D$.
2. For each integer $m=2,\ldots,k$ in order, test divisibility by each integer $d=2,\ldots,m-1$. Include $m$ in a list $P$ exactly when none divides it.
3. Reject unless the pair list has exactly one entry $(p,r_p)$ for every $p\in P$, in the order of $P$, and no other entries. For each entry reject unless $0\le r_p<p$ and $h_i\bmod p\ne r_p$ for every $i=1,\ldots,k$.
4. Return ACCEPT if no rejection occurred. For $k=1$ the prime and pair lists are empty.

The associated generator first performs step 1 and computes $P$. For each $p\in P$ in order it tries $r=0,\ldots,p-1$ in increasing order, checking it against all $k$ shifts. It appends the first missing residue, and fails if none exists. It returns the completed pair list only after every prime is processed. An interrupted execution gives no result and is not ACCEPT.

## Definition references

[[def-admissible-prime-tuple]]

[[def-prime]]

[[thm-standard-representatives-modulo-n]]

[Polymath, §10.2.1](https://arxiv.org/pdf/1407.4897v4)

## Remarks

The test includes $p=k$ when $k$ is prime. It is a finite certificate interface, not an assertion that any particular large tuple has been found. The trial-division implementation and cost convention in its correctness lemma are locally authored adaptations of the earlier batch-139 research draft.
