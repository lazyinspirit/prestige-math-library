---
dependency_level: 1
id: lem-finite-shift-sets-contain-admissible-subtuples
kind: lemma
title: "Finite admissible subtuples and a conditional positive-proportion counting bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-admissible-prime-tuple
  - thm-the-strong-pigeonhole-principle
  - def-binomial-coefficient
  - thm-binomial-closed-formula
  - def-prime
  - thm-standard-representatives-modulo-n
justified_by: []
proof_strategy: direct
axiom_use: "The argument counts finite sets and finite unions; it makes no countable or unrestricted choices. The optional prime-producing assertion is an explicit conditional hypothesis."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Proof of Theorem 1.2, printed p. 391. The finite argument below uses a single common residue class instead of successive residue deletions and retains the analytic assertion as an explicit hypothesis."
verification:
  precheck: pending
---

## Statement

Let $1\le m\le k$ be integers, let $W=\prod_{p\le k}p$ over positive primes, with empty product one, and let $K=kW$. Every finite set of at least $K$ distinct integers contains an admissible $k$-element subset.

Let $\mathcal B$ be any collection of $m$-element subsets of $\mathbb Z$. Suppose every admissible $k$-element subset of $\mathbb Z$ contains a member of $\mathcal B$. For every $r\ge K$ and every $r$-element set $A\subset\mathbb Z$,
$$|\mathcal B\cap[A]^m|\ge\frac{\binom r m}{\binom K m}.$$
In particular this applies, conditionally, when $\mathcal B$ consists of $m$-subsets having infinitely many simultaneous positive prime translates and the preceding containment assertion has been supplied. This lemma does not prove that analytic containment assertion.

## Statement references

[Maynard, Theorem 1.2 proof, printed p. 391](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** $m,k,W,K$ and the finite sets or optional collection $\mathcal B$ as stated.

[F1] [[def-admissible-prime-tuple]]: a finite tuple is admissible if it occupies fewer than $p$ residue classes for every positive prime $p$.

[F2] [[thm-the-strong-pigeonhole-principle]]: a finite map to a nonempty set of $W$ classes has a fibre of cardinality at least the ceiling of its domain size divided by $W$.

[F3] [[def-binomial-coefficient]]: $[A]^j$ is the finite set of $j$-element subsets of a finite set $A$, and its size for $|A|=r$ is $\binom rj$.

[F4] [[thm-binomial-closed-formula]]: $\binom rj=r!/(j!(r-j)!)$ for $j\le r$.

[F5] [[def-prime]]: every positive prime is at least two.

[F6] [[thm-standard-representatives-modulo-n]]: a positive modulus $W$ has exactly $W$ residue classes, represented by $0,\ldots,W-1$.

## Proof

1.1 Since there are only finitely many integers at most $k$, $W$ is a positive integer. Map a finite set $A$ of at least $kW$ distinct integers to its $W$ residue classes, counted by [F6]. By [F2] one class contains at least $k$ elements; take any $k$ of them. For each prime $p\le k$, $p\mid W$, so these elements occupy one class modulo $p$, which is fewer than $p$ by [F5]. For $p>k$ their number is $k<p$, so again fewer than all classes are occupied. Thus the chosen subset is admissible by [F1]. This includes $k=1$, where $W=1$ and the small-prime condition is empty. [F1, F2, F5, F6, given, construct]

2.1 Let $A$ have $r\ge K$ elements, and put $\mathcal G=\mathcal B\cap[A]^m$. Every $K$-subset $T$ of $A$ contains an admissible $k$-subset by step 1.1. By the explicit containment hypothesis, $T$ therefore contains at least one member of $\mathcal G$. Count incidence pairs $(B,T)$ with $B\in\mathcal G$, $T\in[A]^K$ and $B\subseteq T$. Counting first by $T$ gives at least $\binom rK$ pairs. For fixed $B$, the remaining $K-m$ elements of $T$ can be any subset of $A\setminus B$, so there are exactly $\binom{r-m}{K-m}$ possibilities. Thus [F3, given, step 1.1, algebra]
$$|\mathcal G|\binom{r-m}{K-m}\ge\binom rK.$$
All these sets are finite; no representative is chosen for every $T$. [F3, given, step 1.1, algebra]

3.1 The denominator is positive since $m\le K\le r$. By [F4], [F3, F4, step 2.1, algebra]
$$\frac{\binom rK}{\binom{r-m}{K-m}}=\frac{r!(K-m)!}{K!(r-m)!}=\frac{\binom rm}{\binom Km}.$$
Divide step 2.1 by the positive denominator to obtain the bound. The prime-producing specialization merely substitutes the indicated collection into the same explicit hypothesis; no prime-distribution conclusion is used or inferred to establish that hypothesis. [F3, F4, step 2.1, algebra] ∎

