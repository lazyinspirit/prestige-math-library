---
id: lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup
kind: lemma
title: Finite normal quotients preserve ball growth
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Theorem 14.26 finite-kernel reduction, printed p.511; direct fiber-count proof
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["def-word-length-with-respect-to-a-generating-set", "lem-word-length-is-well-defined-and-satisfies-the-length-laws", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite"]
---
## Statement

For a finite generating set $S$ of a group $G$, finite normal $F$, and $q:G\to G/F$, one has $|B_{qS}(n)|\le |B_S(n)|\le |F|\,|B_{qS}(n)|$ for every integer $n\ge0$. Balls use generators and their inverses.

## Facts & Assumptions

**Given:** $F\trianglelefteq G$ is finite, $S$ is finite and generates $G$, and $n\ge0$.

[F1] Word length is the minimum number of generator or inverse letters ([[def-word-length-with-respect-to-a-generating-set]]).

[F2] Finite generating sets give finite balls ([[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]).

## Proof

1.1 An $S$-word of length at most $n$ projects to a $qS$-word of that length. Conversely, lift each letter in a $qS$-word to a corresponding letter of $S\cup S^{-1}$; their product lies in $B_S(n)$ and projects to its value. Only finitely many letters of this particular word need lifts. Therefore $q(B_S(n))=B_{qS}(n)$. [F1, given]

2.1 Each fiber of $q$ is a coset of $F$, with exactly $|F|$ elements. Its intersection with $B_S(n)$ has at most $|F|$ elements and, over $B_{qS}(n)$, at least one by step 1.1. Summing over the finite target ball yields both inequalities. At $n=0$ both balls contain only the identity, and $1\le1\le|F|$. For $F=1$ both inequalities are equalities; the empty generating set gives the trivial group. [F2, step 1.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Theorem 14.26 finite-kernel reduction, printed p.511; direct fiber-count proof. The finite-quotient growth reduction in revised Theorem 14.26 is replaced by exact ball images and finite fiber cardinalities. No later quasi-isometry invariance theorem is used.
