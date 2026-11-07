---
id: lem-finite-admissible-tuple-certificates-are-sound-and-complete
kind: lemma
title: "Soundness and completeness of finite admissible-tuple certificates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
deps: [alg-finite-admissible-tuple-certificate-check, def-admissible-prime-tuple, def-prime, thm-standard-representatives-modulo-n]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1407.4897v4"
      locator: "§10.2.1, finite admissibility testing; the certificate checker and proof are local adaptations"
---

## Statement

For $k\ge1$, $D\ge0$ and integers $h_1<\cdots<h_k$, the finite certificate checker accepts some pair list if and only if $T=\{h_1,\ldots,h_k\}$ is admissible and $h_k-h_1\le D$. Every accepted certificate establishes both properties. The associated generator terminates and succeeds exactly in this case. No choice axiom is needed.

Count comparisons, integer divisibility tests, modular reductions, arithmetic operations, pair-list operations and residue comparisons as unit operations, and assume the input lengths are available in constant time. The checker uses $O((k+1)^2)$ such operations after reading its input lengths; the generator uses $O((k+1)^3)$. These are unit-cost bounds, not bit-complexity or large-instance resource claims.

## Statement references

[[alg-finite-admissible-tuple-certificate-check]]

[[def-admissible-prime-tuple]]

[[def-prime]]

[[thm-standard-representatives-modulo-n]]

[Polymath, §10.2.1](https://arxiv.org/pdf/1407.4897v4)

## Facts & Assumptions

**Given:** The input parameters and unit-cost convention in the Statement.

[F1] [[alg-finite-admissible-tuple-certificate-check]] specifies the checker and generator as finite indexed loops.

[F2] [[def-admissible-prime-tuple]] defines admissibility by a missed residue class for every prime.

[F3] [[def-prime]] says $m>1$ is prime exactly when it has no divisor $d$ with $1<d<m$.

[F4] [[thm-standard-representatives-modulo-n]] identifies the $p$ residue classes with the $p$ representatives $0,\ldots,p-1$.

## Proof

**Proof technique:** finite enumeration and residue counting.

1.1 For every $2\le m\le k$, the list construction tests exactly the possible integer proper divisors of $m$. By [F3] it retains exactly the primes at most $k$, including $k$ when prime. Every loop has finite limits and terminates. [F1, F3, given, algebra]

2.1 If the checker accepts, its first step gives the stated strict order and width. By step 1.1 and [F1], for each prime $p\le k$ the pair list contains a representative $r_p$ distinct from all $h_i\bmod p$, hence a missed class by [F4]. For $p>k$, the $k$ shifts occupy at most $k<p$ classes, so at least one of the $p$ classes is missed. By [F2] the tuple is admissible. [F1, F2, F4, step 1.1, algebra]

3.1 Conversely suppose the tuple is admissible and has width at most $D$. By [F2] and [F4], for each prime in the finite list $P$ at least one of the ordered representatives $0,\ldots,p-1$ is missing. The generator's finite search finds its least such value and appends it. Thus it succeeds and the resulting pair list passes every check. If any search fails, that prime witnesses nonadmissibility; if the preliminary width test fails, the stated width condition fails. Finite recursion over an explicitly ordered finite list uses no choice axiom. This proves the equivalence and generator claim, including $k=1$. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 At most $k$ candidate integers each require at most $k$ divisor tests, and the checker compares at most $k$ pair rows against at most $k$ shifts each; the other checks are linear. Its unit-cost count is $O((k+1)^2)$. The generator considers at most $k$ primes, at most $k$ possible residues per prime, and at most $k$ shifts per residue, in addition to the quadratic prime-list construction. Its count is $O((k+1)^3)$. These loops terminate and the stated bounds do not claim bit complexity. [F1, step 1.1, step 3.1, algebra] ∎

## Source notes

The earlier native batch-139 author supplied the initial finite-certificate draft and its small-instance checker. The present owner-spawned author independently rewrote the procedure using exhaustive trial division and supplied the stated unit-cost bounds. Neither contribution asserts an H2–H5 witness or adopts a published numerical computation.
