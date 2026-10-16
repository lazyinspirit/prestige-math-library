---
id: thm-qa-euclidean-modular-inverse-correctness-cost
kind: theorem
title: Correctness and bit cost of the modular inverse recurrence
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - alg-qa-euclidean-modular-inverse
  - thm-division-algorithm-in-z
  - thm-euclidean-algorithm
  - thm-unit-criterion-modulo-n
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the recurrence and bit operations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§5, PDF pp. 29–32: inverse of a sampled residue in cyclic discrete-log reconstruction"
    - title: "D. Proos and C. Zalka, Shor's discrete logarithm quantum algorithm for elliptic curves"
      url: "https://arxiv.org/pdf/quant-ph/0301141"
      locator: "§5.1–§5.4, PDF pp. 13–23: Euclidean recurrence, reversibility, and iteration cost"
---

## Statement

For $n\ge2$ and $0\le c<n$, [[alg-qa-euclidean-modular-inverse]] returns `NO_INVERSE` exactly when $c$ is not a unit modulo $n$, and otherwise returns the unique $u\in\{0,\ldots,n-1\}$ with $cu\equiv1\pmod n$. With $B=\lceil\log_2(n+1)\rceil$, the algorithm uses $O(B^3)$ bit operations.

## Facts & Assumptions

**Given:** Integers $n\ge2$, $0\le c<n$, Euclidean division, and binary schoolbook arithmetic.

[F1] Each division has unique quotient and remainder $r_{i-1}=a_i r_i+r_{i+1}$ with $0\le r_{i+1}<r_i$ ([[thm-division-algorithm-in-z]]).

[F2] The Euclidean remainder sequence terminates at $\gcd(n,c)$ ([[thm-euclidean-algorithm]]).

[F3] A residue class is a unit modulo $n$ exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).

[F4] The recurrence, initialization, and return rule are those of [[alg-qa-euclidean-modular-inverse]].

## Proof

1.1 First handle $c=0$: since $n\ge2$, $\gcd(n,0)=n\ne1$, so the algorithm returns `NO_INVERSE`, correctly. Suppose $c>0$. The initialized coefficients satisfy $r_{-1}\equiv s_{-1}c\pmod n$ and $r_0=c\equiv s_0c\pmod n$. [given, F4, algebra]

1.2 If $r_{i-1}\equiv s_{i-1}c$ and $r_i\equiv s_i c$ modulo $n$, the division identity and update give
$$
r_{i+1}=r_{i-1}-a_i r_i\equiv(s_{i-1}-a_i s_i)c\equiv s_{i+1}c\pmod n.
$$
Replacing a coefficient by its least residue preserves this congruence. Induction proves $r_i\equiv s_i c\pmod n$ for every generated index. [F1, F4, step 1.1, induction, algebra]

2.1 By [F1], each positive remainder is strictly smaller than its predecessor, so the divisions terminate. By [F2], the last nonzero remainder is $d=\gcd(n,c)$. The algorithm returns an $s_i$ exactly when $d=1$; by [F3], this is exactly the unit case. If it returns, the invariant at the last nonzero index says $s_i c\equiv d=1\pmod n$, hence the returned least residue is an inverse. If $d\ne1$, [F3] says no inverse exists, so `NO_INVERSE` is correct. [F1, F2, F3, step 1.2, algebra]

3.1 Let $B=\lceil\log_2(n+1)\rceil$. There are $O(B)$ divisions: in two consecutive Euclidean divisions the remainder falls below half its earlier positive value. Indeed, if $r_{i+1}\le r_i/2$ this already holds; otherwise $r_{i+1}>r_i/2$, so the next quotient is $1$ and $r_{i+2}=r_i-r_{i+1}<r_i/2$. Thus at most two steps halve a positive remainder, which has at most $B$ bits. [F1, step 2.1, algebra]

4.1 Every quotient, remainder, and coefficient residue has $O(B)$ bits; each Euclidean quotient is found by binary long division in $O(B^2)$ bit operations. Each product $a_i s_i$ and reduction modulo $n$ also costs $O(B^2)$ by schoolbook multiplication and division. With $O(B)$ iterations from step 3.1, the total is $O(B^3)$. [step 3.1, algebra] ∎
