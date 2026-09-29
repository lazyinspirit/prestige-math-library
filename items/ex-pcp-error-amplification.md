---
id: ex-pcp-error-amplification
kind: example
title: "Three repetitions of a three-quarters-sound PCP"
status: draft
origin: pipeline
deps:
  - thm-pcp-error-amplification
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.1 Note 3 to Theorem 18.2, printed p. 354"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Let $V$ be a nonadaptive PCP verifier with proof length at most $L(n)$,
randomness bound $r(n)$, query bound $q(n)$, and soundness at most $3/4$.
Run it three times using independent random tapes, the same fixed proof in all
runs, and accept only if all three runs accept. The resulting verifier has
soundness at most
$$\left(\frac34\right)^3=\frac{27}{64},$$
uses at most $3r(n)$ random bits and $3q(n)$ symbol queries, and keeps the
proof length bound $L(n)$.

## Facts & Assumptions

**Given:** A fixed nonadaptive verifier $V$ with the stated resource bounds and soundness at most $3/4$.

[F1] Independent repetition uses the same fixed proof, has acceptance probability $p^k$ for each fixed input and proof, multiplies randomness and query bounds by $k$, and leaves the proof length unchanged. ([[thm-pcp-error-amplification]])

## Verification

**Proof technique:** direct.

1.1 Fix a no input $x$ and any proof $\pi$, and let $p=\Pr[V^\pi(x)\text{ accepts}]$. By the soundness premise, $0\le p\le3/4$. Applying [F1] with $k=3$ gives repeated acceptance probability $p^3\le(3/4)^3=27/64$. Since this holds for every fixed proof, the repeated verifier has the claimed soundness. [F1, given, algebra]

2.1 The three independent runs use at most $3r(n)$ random bits and concatenate at most three query lists of size $q(n)$, so the total is at most $3q(n)$ symbol queries. They all inspect the same proof of length at most $L(n)$, rather than storing three proofs; the combined query locations are fixed by the input and the full random tape, so the repeated verifier remains nonadaptive. [F1, given, construct] ∎
