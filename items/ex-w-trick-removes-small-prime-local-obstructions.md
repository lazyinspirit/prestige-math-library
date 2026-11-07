---
id: ex-w-trick-removes-small-prime-local-obstructions
kind: example
title: "The W-trick removes small-prime local obstructions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-w-trick-prime-modulus
  - def-prime
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.1–9.2 and summary; W-trick/transference context; analytic majorant proof explicitly omitted"
---
## Example

Take $w=5$, so $W=2\cdot3\cdot5=30$. In the progression $30n+1$, every term is congruent to $1$ modulo each prime $2,3,5$ and therefore none is divisible by those primes. By contrast, every term of $30n+6$ is divisible by $2$ and $3$, so it cannot be prime once it exceeds those primes. Thus restricting $b$ to a residue coprime to $W$ removes the local divisibility obstructions from all primes at most $w$.

## Example references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Zhao, Chapter 9](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)

## Facts & Assumptions

**Given:** $W=30$, the progressions $30n+1$ and $30n+6$, and the definition of prime.

[F1] [[def-w-trick-prime-modulus]]: $W=\prod_{p\le w}p$ and each progression term has the form $Wn+b$.

[F2] [[def-prime]]: A prime is an integer greater than $1$ with no positive divisors other than $1$ and itself.
## Proof

1.1 For $w=5$, the primes $p\le w$ are exactly $2,3,5$, hence [F1] gives $W=30$. For every integer $n$, $30n+1\equiv1\pmod p$ for each of these primes, so none divides $30n+1$. [F1, given, algebra]

2.1 Since $30n+6$ is divisible by both $2$ and $3$, it has a proper divisor whenever it exceeds $3$ and cannot be prime by [F2]. Also $\gcd(1,30)=1$ while $\gcd(6,30)>1$, which proves the claimed distinction between an admissible residue and an obstructed one. [F1, F2, step 1.1, algebra] ∎
