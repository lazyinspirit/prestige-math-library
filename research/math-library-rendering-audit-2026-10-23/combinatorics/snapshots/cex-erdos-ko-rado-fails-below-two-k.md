---
id: cex-erdos-ko-rado-fails-below-two-k
kind: counterexample
title: "When $k<n<2k$, the entire $k$th level is intersecting and exceeds the Erdős-Ko-Rado star bound"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-erdos-ko-rado-without-the-ground-set-bound, def-intersecting-family, def-binomial-coefficient, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdős-Ko-Rado theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem"
pipeline_run: null
---

## Statement refuted

The false statement [[fs-erdos-ko-rado-without-the-ground-set-bound]] claims
the Erdős-Ko-Rado star bound without assuming $n\ge2k$.

## Facts & Assumptions

**Given:** Natural numbers satisfying exactly $k<n<2k$, an $n$-element set $A$, and the full level $\mathcal F=[A]^k$.

[F1] An intersecting family has nonempty intersection between every pair of members, and $\binom nk=|[A]^k|$ ([[def-intersecting-family]], [[def-binomial-coefficient]]).

[L1] The binomial closed formula gives $\binom nk=\frac n k\binom{n-1}{k-1}$ for $1\le k\le n$ ([[thm-binomial-closed-formula]]).

## Counterexample

**Proof technique:** direct.

1.1 If $S,T\in[A]^k$ were disjoint, then $|S\cup T|=2k>n=|A|$, impossible. Hence the entire level $\mathcal F$ is intersecting. [given, F1]

1.2 By [L1], $|\mathcal F|=\binom nk=(n/k)\binom{n-1}{k-1}$. Since $k<n$, the factor $n/k$ is greater than $1$, so $|\mathcal F|>\binom{n-1}{k-1}$. [given, F1, L1, algebra]

2.1 Thus for every $k<n<2k$, the full $k$th level is an intersecting family larger than a star, refuting the bound outside its stated range. [step 1.1, step 1.2] ∎
