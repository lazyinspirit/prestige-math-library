---
id: ex-szemeredi-cyclic-group-wraparound
kind: example
title: "An interval progression inside a prime cyclic group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-finite-density-k-term-arithmetic-progression
  - def-prime
  - lem-interval-to-large-cyclic-group-progression-embedding
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§2, the prime cyclic group embedding used in the proof of Theorem 2.6"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorems 10.4–10.5, interval and cyclic-group formulations"
---

## Example

Let $A=\{1,3,5\}\subseteq[6]$, let $p=13$, and map each integer to its residue class in $\mathbb Z/13\mathbb Z$. The interval progression $(1,3,5)$ becomes a proper cyclic-group three-term progression. Up to reversing order, it is the only proper three-term progression contained in the image of $A$.

## Example references

[[def-finite-density-k-term-arithmetic-progression]]

[[def-prime]]

[[lem-interval-to-large-cyclic-group-progression-embedding]]

[Gowers, *A new proof of Szemerédi’s theorem*, §2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** $A=\{1,3,5\}\subseteq[6]$, $p=13$, and reduction modulo $p$.

[F1] A prime integer is greater than $1$ and has no positive divisors except $1$ and itself ([[def-prime]]).

[F2] Proper interval and cyclic-group progressions have the definitions in [[def-finite-density-k-term-arithmetic-progression]].

[F3] When $p>2N$, reduction modulo $p$ preserves and reflects proper progressions whose terms lie in $[N]$ ([[lem-interval-to-large-cyclic-group-progression-embedding]]).

## Verification

1.1 If $13$ had a proper positive divisor $d$, then $13=de$ for positive integers $d,e>1$, so the smaller of $d,e$ would be at most $\sqrt{13}<4$ and hence would be $2$ or $3$. Neither divides $13$, so $13$ is prime; also $13>2\cdot6$. [given, F1, algebra]

2.1 The tuple $(1,3,5)$ is an interval progression of difference $2$, and its residue classes remain distinct modulo $13$. The embedding result [F3] therefore gives a proper cyclic progression with the same terms. [given, F2, F3, step 1.1]

3.1 Any proper three-term progression in the three-element set must use all three residues. If the middle term is $1$, the other two sum to $3+5=8\not\equiv2\pmod{13}$; if it is $3$, then $1+5=6\equiv2\cdot3\pmod{13}$; if it is $5$, then $1+3=4\not\equiv2\cdot5\pmod{13}$. Hence the middle term must be $3$, and the only two ordered progressions are $(1,3,5)$ and its reversal. [given, F2, step 1.1, algebra] ∎
