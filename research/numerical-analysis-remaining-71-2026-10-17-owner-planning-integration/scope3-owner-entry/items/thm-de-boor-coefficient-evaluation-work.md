---
id: thm-de-boor-coefficient-evaluation-work
kind: theorem
title: de Boor evaluation uses quadratic work in the degree
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-de-boor-coefficient-evaluation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter X, pp. 123–126
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
---

## Statement

For a supplied nonempty knot span and degree $p$, a successful call to the
loop in [[alg-de-boor-coefficient-evaluation]] performs exactly
$p(p+1)/2$ coefficient updates when $p\ge1$ and none when $p=0$. A call
that returns a range failure performs no more than this many updates. Each
update uses at most a constant number of scalar arithmetic operations, so
the arithmetic work is $O(p^2)$ and the coefficient storage is $O(p)$; the
caller's span search is excluded.

## Facts & Assumptions

**Given:** The finite degree-$p$ loop and one already identified nonempty knot span.

[F1] [[alg-de-boor-coefficient-evaluation]] runs, for each $r=1,\ldots,p$, one update for each $j=p,p-1,\ldots,r$ and retains only $p+1$ local coefficients.

[A1] A supplied span index is used; finding the index is not charged to the coefficient evaluation.

## Proof

1.1 At loop level $r$, there are $p-r+1$ values of $j$. Therefore a completed loop performs $\sum_{r=1}^{p}(p-r+1)=\sum_{s=1}^{p}s=p(p+1)/2$ updates; for $p=0$ the loop is empty. A range failure stops the loop early, so every call performs at most this many updates. [A1, F1, algebra]

2.1 Each full update computes a fixed number of subtractions, one division, two multiplications and one addition, independent of $p$; an exact-zero numerator branch or a range failure can only reduce that count. Initializing and returning the local list takes at most a constant times $p+1$ copies. Thus the scalar arithmetic count is bounded by a constant times $p^2+1$, while the list contains at most $p+1$ entries. The excluded span search cannot change either bound. [A1, F1, step 1.1, algebra] ∎
