---
id: lem-tester-size-and-construction-time-are-polynomial
kind: lemma
title: "Tester output size and construction time are polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-constant-query-assignment-tester, lem-proximity-gap-amplification-preserves-input-coordinates, lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 Corollary 9.3 and the running-time accounting in its proof, printed p. 33."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5, printed pp. 371-375."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Fix the finite alphabet $\Sigma_{\rm out}$ and the constants $t$, $C$, $\rho^\ast$, $c$ of [[thm-constant-query-assignment-tester]]. For every Boolean circuit $C$ of size $m$ with $n$ named inputs, the system $P^\ast(C,X)$ produced there satisfies:

1. the balanced base system has $M_1\le6(m+n+1)^2$ constraints, each of the $K=\lceil\log_2M_1\rceil$ iterations multiplies the number of constraints by at most $C$, and the final system has at most $C\,M_1^{1+\log_2C}\le(m+n+1)^{c}$ constraints, so the output size is polynomial in $m+n$;
2. the final system is over the fixed alphabet $\Sigma_{\rm out}$ with binary constraints, the same named input coordinates and rejection ratio at least $\rho^\ast$, and the number $K$ of iterations is $O(\log(m+n))$;
3. the system is produced by a deterministic algorithm in time polynomial in $m+n$, because each iteration lists all of its cloud ports, walk patterns, comparison slots and inner systems explicitly and runs in time polynomial in the size of the system it is applied to.

## Facts & Assumptions

**Given:** a Boolean circuit $C$ of size $m$ with $n$ named inputs, and the constants $t$, $C$, $\rho^\ast$, $c$, $M_1$, $K$ of the construction of [[thm-constant-query-assignment-tester]].

[F1] The construction of [[thm-constant-query-assignment-tester]] starts from the balanced base system with $M_1=M_0+\sum_i(d-d_i)\le M_0(1+n)$ constraints, where $M_0\le(n+m)+4m+1$ is the number of constraints of the trivial tester of [[lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester]] and $d$ is the common number of incidences of the input coordinates in the balanced system; it then applies the map of [[lem-proximity-gap-amplification-preserves-input-coordinates]] exactly $K=\lceil\log_2M_1\rceil$ times, each application multiplying the number of constraints by at most $C$, and returns a system with at most $(m+n+1)^{c}$ constraints, binary constraints over $\Sigma_{\rm out}$, the same named input coordinates and ratio at least $\rho^\ast$.

[F2] Each application of the map of [[lem-proximity-gap-amplification-preserves-input-coordinates]] is deterministic, uses no randomness, lists all cloud ports, lazy-walk patterns, comparison slots, inner systems and arity gadgets explicitly, and runs in time polynomial in the size of the system it is applied to.

## Proof

**Proof technique:** direct.

1.1 Put $s:=m+n$. The trivial tester has $M_0\le(n+m)+4m+1\le5s+1$ constraints, and the common incidence number satisfies $d\le M_0$, so the balanced base system has $M_1\le M_0(1+n)\le(5s+1)(s+1)\le6(s+1)^2$ constraints; in particular $M_1\le6(m+n+1)^2$. [F1, algebra]

2.1 By [F1] the $j$-th iteration multiplies the constraint count by at most $C$, so $M_K\le C^KM_1$ with $K=\lceil\log_2M_1\rceil\le\lceil\log_2(6(m+n+1)^2)\rceil=O(\log(m+n))$, and $C^K\le C^{1+\log_2M_1}=C\,M_1^{\log_2C}$, whence $M_K\le C\,M_1^{1+\log_2C}$. For $m+n+1\ge6$ one has $M_1\le6(m+n+1)^2\le(m+n+1)^3$, so this is at most $(m+n+1)^{3(1+\log_2C)+1}$; the finitely many smaller cases have $M_1\le216$ and are covered after enlarging the constant $c$, so $M_K\le(m+n+1)^{c}$ in every case. [F1, step 1.1, algebra]

3.1 The sum of the sizes encountered is bounded by a polynomial in the last size: since $C\ge1$ the bounds $M_j\le C^jM_1$ are nondecreasing in $j$, so all intermediate sizes are at most $M_K$ and $\sum_{j\le K}M_j\le(K+1)M_K\le(m+n+1)^{c+1}$; this covers $C=1$ as well, where a geometric ratio $C/(C-1)$ would not be defined. Each iteration works in time polynomial in the size of its input, by [F2], and there are $K=O(\log(m+n))$ iterations; hence the total running time is bounded by a polynomial in the largest explicit system size $M_K$, which by step 2.1 is polynomial in $m+n$, and no randomness is used anywhere. [F2, step 2.1, algebra]

4.1 Steps 1.1, 2.1 and 3.1 give the three assertions of the statement: the explicit constraint count $M_K\le(m+n+1)^{c}$, the fixed alphabet and arity with rejection ratio at least $\rho^\ast>0$ and $K=O(\log(m+n))$ iterations, and the deterministic polynomial construction time with all choices enumerated. [F1, step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Geometric growth is what makes the accounting work.** The number of iterations is logarithmic in the initial size and each iteration costs a constant factor, so the final size dominates the total work up to a constant: the construction neither stores nor enumerates anything of size comparable to the intermediate systems summed without bound.
- **The saturation threshold.** The iteration stops as soon as the ratio reaches the saturation value $t^{-1}$ of [[lem-proximity-gap-amplification-preserves-input-coordinates]]; since $2^K\ge M_1$ and the base ratio is $1/M_1$, the $K$-th system already has ratio at least $t^{-1}$, which is why $K=\lceil\log_2M_1\rceil$ steps suffice and no further steps are needed.
