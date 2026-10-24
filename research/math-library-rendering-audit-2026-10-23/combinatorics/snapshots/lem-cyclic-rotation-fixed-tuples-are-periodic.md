---
id: lem-cyclic-rotation-fixed-tuples-are-periodic
kind: lemma
title: "A tuple fixed by a cyclic rotation is determined by a shorter periodic block"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cycle-construction-of-a-combinatorial-class, def-common-divisor-and-gcd, thm-linear-congruence-solvability-and-solution-count]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$, let $0 \le r < m$, and put $d := \gcd(m,r)$. For an $m$-tuple
$u = (u_0,\dots,u_{m-1})$, the following are equivalent:

1. rotation by $r$ places fixes $u$;
2. whenever $i \equiv j \pmod d$, one has $u_i = u_j$;
3. there is a $d$-tuple $(b_0,\dots,b_{d-1})$ such that
   $u_i = b_{i \bmod d}$ for every $i$.

In particular a tuple fixed by rotation by $r$ places is determined by its first
$d$ entries and is obtained by repeating that shorter block exactly $m/d$ times.

## Facts & Assumptions

**Given:** Integers $m \ge 1$ and $0 \le r < m$, the integer $d := \gcd(m,r)$, and an $m$-tuple $u = (u_0,\dots,u_{m-1})$.

[L1] The congruence $rq \equiv t \pmod m$ is solvable exactly when $\gcd(r,m) \mid t$ ([[thm-linear-congruence-solvability-and-solution-count]]).

## Proof

**Proof technique:** direct.

1.1 Assume rotation by $r$ places fixes $u$. Then one application of the rotation gives $u_i = u_{i+r \bmod m}$ for every index $i$, and iterating gives $u_i = u_{i+qr \bmod m}$ for every $q \ge 0$. [given]

1.2 If condition 2 holds, define $b_s := u_s$ for $0 \le s < d$. Every index $i$ has a unique residue class modulo $d$, and condition 2 makes $u_i$ depend only on that class, so $u_i = b_{i \bmod d}$ for every $i$. This is condition 3. [given, construct]

2.1 If $i \equiv j \pmod d$, then $d \mid (j-i)$. Since $\gcd(r,m)=d$, [L1] gives an integer $q$ with $rq \equiv j-i \pmod m$, and step 1.1 therefore gives $u_i = u_j$. This proves 1 implies 2. [step 1.1, L1]

2.2 If condition 3 holds, then $d \mid r$, so $(i+r) \bmod d = i \bmod d$ for every $i$. Hence $u_{i+r \bmod m} = b_{(i+r) \bmod d} = b_{i \bmod d} = u_i$, so rotation by $r$ places fixes $u$. Thus 3 implies 1. [step 1.2, L1, algebra]

3.1 Steps 2.1, 1.2, and 2.2 prove the equivalence of the three conditions and the final periodic-block description. [step 2.1, step 1.2, step 2.2] ∎
