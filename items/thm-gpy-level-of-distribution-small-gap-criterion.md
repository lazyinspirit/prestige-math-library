---
dependency_level: 6
id: thm-gpy-level-of-distribution-small-gap-criterion
kind: theorem
title: "GPY bounded-gap criterion above level one-half"
status: draft
origin: pipeline
deps: [def-gpy-prime-tuple-divisor-sum-weight, def-prime-level-of-distribution, def-prime-tuple-singular-series, def-admissible-prime-tuple, def-von-mangoldt-function, thm-maynard-variational-lower-bound-m105, thm-maynard-multidimensional-sieve-dhl-criterion]
justified_by: []
proof_strategy: direct
axiom_use: "Finite subset selection, one explicit computable integer threshold and the given prime level add no choice hypothesis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
    - title: "James Maynard, Small gaps between primes (2015), Propositions4.2–4.3 and Section8.3"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "The supplied local proof uses the stronger accepted Maynard criterion and exact M105 certificate, not the original GPY moment method."
---

## Statement

Fix $\theta>1/2$ and suppose the primes have level of distribution $\theta$ in the full von Mangoldt weighted arithmetic-progression sense. Then there is an effectively computable integer $K(\theta)$ such that every admissible finite set $H$ of distinct integer shifts with $|H|\ge K(\theta)$ has infinitely many positive integer translates $n$ for which at least two of the integers $n+h$ ($h\in H$) are prime.


## Statement references

[[def-prime-level-of-distribution|Weighted level of distribution]]

[[def-admissible-prime-tuple|Admissible tuples]]

[[def-gpy-prime-tuple-divisor-sum-weight|GPY truncated divisor weight]]

[[def-prime-tuple-singular-series|Singular series]]


## Facts & Assumptions

**Given:** The original $\theta>1/2$, its assumed full-weight prime level, and an admissible finite set $H$ of distinct integer shifts.

[F1] [[def-admissible-prime-tuple]] means that the occupied residue classes number less than $p$ for every prime $p$.

[F2] [[thm-maynard-variational-lower-bound-m105]] gives the exact unqualified inequality $M_{105}>4$.

[F3] [[def-prime-level-of-distribution]] gives the full von Mangoldt endpoint meaning of the given level $\theta$.

[F4] [[thm-maynard-multidimensional-sieve-dhl-criterion]] gives infinitely many positive translates of an admissible $k$-tuple with at least $m+1$ primes whenever its given level and $M_k>2m/\theta$ satisfy the stated threshold.

## Proof

1.1 Define $K(\theta)=105$. This is an effectively computable integer function: the algorithm ignores its input and outputs the integer $105$. If $|H|\ge105$, take its least $105$ elements in increasing integer order and call this tuple $H'$. For each prime the residue classes occupied by $H'$ are a subset of those occupied by $H$, so their number is still less than that prime. Thus $H'$ is admissible by [F1]. Only a canonical finite subset is selected. [F1, given, construct, algebra]

1.2 Since $\theta>1/2$, one has $2/\theta<4<M_{105}$ by [F2]. The distribution hypothesis in [F3] is already given, with the actual full-weight endpoint convention. No unqualified interpretation of a separately choice-qualified distribution theorem is needed. [F2, F3, given, algebra]

2.1 Apply [F4] with $k=105$, $m=1$, the tuple $H'$ in step 1.1 and the given level. Its threshold follows from step 1.2. Infinitely many positive integers $n$ have at least two prime values among $n+h$ for $h\in H'$, hence also among those with $h\in H$. This proves every original quantifier, including arbitrary signed shifts, every admissible finite set of size at least $K(\theta)$, and the effective threshold. [F4, step 1.1, step 1.2, algebra] ∎

## Source notes

This is a different local proof of the original GPY Statement via the stronger accepted Maynard multidimensional criterion and its exact $M_{105}$ certificate. It does not reconstruct the historical GPY first/prime-weighted second moments or singular-series argument. The original GPY-weight and singular-series definitions and source references are retained as historical/context interfaces, not active premises of this proof. The computable threshold $105$ does not depend on effectivity of analytic error constants or of thresholds for successful translates. No enlarged-support, GEH or growing-parameter theorem is inferred.
