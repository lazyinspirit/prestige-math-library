---
id: lem-cook-levin-map-is-polynomial-time
kind: lemma
title: "The Cook-Levin reduction map is computable in polynomial time"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-computation-tableau, lem-exactly-one-symbol-constraints-have-polynomial-size, lem-start-accept-and-transition-constraints-have-polynomial-size, def-worst-case-time-and-space-complexity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Statement

For a fixed nondeterministic polynomial-time machine $N$, the map sending an
input $w$ to the Cook-Levin formula $\psi_{N,w}$ is computable in polynomial
time.

## Facts & Assumptions

**Given:** A fixed machine $N$ running in time at most $p(n)$ on inputs of length $n$.

[L1] The exactly-one-symbol family has polynomial size in the tableau side length, by [[lem-exactly-one-symbol-constraints-have-polynomial-size]].

[L2] The start, accept, and transition families also have polynomial size in the tableau side length, by [[lem-start-accept-and-transition-constraints-have-polynomial-size]].

[L3] A time bound means that every run on length-$n$ inputs halts within the stated bound, in the worst-case sense formalized by [[def-worst-case-time-and-space-complexity]].

## Proof

**Proof technique:** direct.

1.1 On an input $w$ of length $n$, [L3] gives a tableau side length $T+1$ with $T\le p(n)$. A deterministic transducer can loop over all cells, all alphabet symbols, and all local windows in lexicographic order and print the corresponding clauses of $\psi_{N,w}$. [L3, given, construct]

2.1 By [L1] and [L2], the number of printed variables and clauses is polynomial in $T$, hence polynomial in $n$ because $T\le p(n)$. Each loop iteration performs only constant-size bookkeeping for the fixed machine $N$. [L1, L2, step 1.1]

3.1 Therefore the transducer from step 1.1 halts after polynomially many steps and outputs $\psi_{N,w}$. So the Cook-Levin map $w\mapsto \psi_{N,w}$ is polynomial-time computable. [step 1.1, step 2.1] ∎
