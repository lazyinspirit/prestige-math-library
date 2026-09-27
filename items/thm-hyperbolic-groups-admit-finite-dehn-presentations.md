---
id: thm-hyperbolic-groups-admit-finite-dehn-presentations
kind: theorem
title: "Hyperbolic groups admit finite Dehn presentations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-hyperbolic-group, lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

Let $G$ be a hyperbolic group. Then $G$ admits a finite presentation
$\langle S \mid R \rangle$ with the following Dehn property: every nonempty
freely reduced word $w$ over $S^{\pm 1}$ representing the identity in $G$
contains a subword $u$ such that $u$ is longer than half of some cyclic
conjugate $uv$ of a relator in $R^{\pm 1}$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$.

[F1] For $\delta>0$, every $6\delta$-local arc-length geodesic in a geodesic $\delta$-slim space is a $(3,4\delta)$-quasi-geodesic; for $\delta=0$, every positive-radius local geodesic is globally geodesic ([[lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics]]).

[A2] For a fixed finite generating set, there are only finitely many words of length at most $2L$.

## Proof

**Proof technique:** direct.

1.1 Choose a finite generating set $S$ for $G$ and a positive slimness constant $\delta$ for its Cayley graph. Choose an integer $L>\max\{6\delta,12\delta\}$. By [F1], any $L$-local geodesic arc is a $(3,4\delta)$-quasi-geodesic. If such an arc has the same initial and terminal vertex and positive length $N$, the quasi-geodesic inequality gives $0\ge N/3-4\delta$, hence $N\le12\delta<L$; then the whole arc lies within the local-geodesic radius and would have to be geodesic, impossible between equal endpoints. Let $R$ be the finite set of nonempty freely reduced words over $S^{\pm1}$ of length at most $2L$ that represent the identity. Finiteness follows from [A2], and $\langle S\mid R\rangle$ presents $G$ once the Dehn property below is proved. [given, F1, A2, construct]

2.1 Suppose a nonempty freely reduced trivial word $w$ contains no subword longer than half of a cyclic conjugate of a member of $R^{\pm1}$. If an ordinary subword of $w$ of length at most $L$ were nongeodesic, choose one of minimal length and call it $u$, and choose a shorter geodesic word $v$ with the same endpoints. Minimality of $u$ implies that $u$ and $v$ share neither an initial nor a terminal edge: deleting such a common edge would give a shorter nongeodesic subword. Hence the loop word $uv^{-1}$ is freely and cyclically reduced. It belongs to $R$, has length $|u|+|v|<2|u|\le2L$, and contains $u$ as more than half of a cyclic conjugate, a contradiction. Thus every ordinary length-at-most-$L$ subword of $w$ is geodesic. Read $w$ as the parameterized open path from the identity vertex back to itself; all its short consecutive segments are geodesic, so this open path is $L$-local geodesic. No condition is imposed across a cyclic junction of $w$. [step 1.1, choose, algebra]

3.1 Step 1.1 forbids a nonempty $L$-local geodesic arc with equal endpoints, contradicting step 2.1. Hence every nonempty freely reduced trivial word has the required long relator subword. Replacing that subword by the shorter complementary piece of its relator, then freely reducing, strictly decreases word length while preserving its value in $G$. Finite induction reduces every trivial word to the empty word using relations from $R$, so $R$ presents $G$ and has the Dehn property. [step 1.1, step 2.1, algebra] ∎
