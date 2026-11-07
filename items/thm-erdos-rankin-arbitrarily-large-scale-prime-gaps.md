---
id: thm-erdos-rankin-arbitrarily-large-scale-prime-gaps
kind: theorem
title: Arbitrarily large multiples of the Rankin prime-gap scale
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
- def-prime-gap-functions
- def-iterated-logarithms-and-prime-gap-scale
- lem-crt-residue-covering-to-prime-gap
- thm-linear-sieve-fundamental-lemma
- thm-maynard-simplex-growth-bound
- thm-maynard-multidimensional-sieve-dhl-criterion
- thm-bombieri-vinogradov-prime-distribution
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- lem-finite-residue-covering-from-probability-marginals
- lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: James Maynard, Large gaps between primes, Theorem 1 and Sections 2–6
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf
  - title: Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29,
      Theorem 29.3
    url: https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf
---

## Statement

Let $p_n$ be the $n$th positive prime in increasing order and, for sufficiently large $x$, put $L_R(x)=\log x\,\log_2x\,\log_4x/(\log_3x)^2$, with $\log_{j+1}x=\log(\log_jx)$. For every real $C>0$ and every integer $N\ge1$, there is an integer $n\ge N$ such that
$$p_{n+1}-p_n>C L_R(p_n).$$

## Statement references

[[def-prime-gap-functions]]

[[def-iterated-logarithms-and-prime-gap-scale]]

[Maynard, “Large gaps between primes,” Theorem 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf)

[Koukoulopoulos, *The Distribution of Prime Numbers*, Theorem 29.3](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[[lem-finite-residue-covering-from-probability-marginals]]

[[lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals]]

## Facts & Assumptions

**Given:** The increasing sequence of positive primes and the Rankin scale $L_R$ from the Statement.

[F1] $G(X)$ is the maximal consecutive-prime gap with its smaller prime at most $X$, and $L_R(X)=\log X\,\log_2X\,\log_4X/(\log_3X)^2$ for sufficiently large $X$ ([[def-prime-gap-functions]], [[def-iterated-logarithms-and-prime-gap-scale]]).

[F2] A cover of $[1,H]\cap\mathbb Z$ by prime residue classes at cutoff $z$ yields $G(2P(z))\ge H+1$ ([[lem-crt-residue-covering-to-prime-gap]]).

[F3] The variational quantity $M_k$ satisfies $M_k>\log k-2\log\log k-2$ for every sufficiently large integer $k$ ([[thm-maynard-simplex-growth-bound]]).

[L1] The current Maynard sieve interface states that if $k\ge2$, $m\ge1$, the primes have level of distribution $\theta>0$, $H$ is an admissible $k$-tuple, and $M_k>2m/\theta$, then infinitely many translates of $H$ contain at least $m+1$ primes; its full original local proof is supplied at this unqualified given-level scope ([[thm-maynard-multidimensional-sieve-dhl-criterion]]).

[L2] The current Bombieri–Vinogradov Statement assumes the Axiom of Choice, Countable Choice, and Dependent Choice and gives its stated Chebyshev-form progression estimate ([[thm-bombieri-vinogradov-prime-distribution]]).

[L4] The current linear-sieve fundamental-lemma interface has the source-valid $(w,z]$ local-product and remainder hypotheses in its Statement; its full original $u^{-u/2}$ asymptotic and explicit-$u_\kappa$ positivity proof are now locally supplied. This does not prove the specialized large-gap weight estimates ([[thm-linear-sieve-fundamental-lemma]]).

[A1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Countable Choice: every sequence of nonempty sets indexed by $\mathbb N$ has a choice function ([[def-countable-choice]]).

[A3] Dependent Choice: every entire relation on a nonempty set admits an $\mathbb N$-indexed chain from any prescribed starting point ([[def-dependent-choice]]).

[F4] Finite residue probability vectors with marginal sum at least $t$ outside an exceptional set $B$ admit a deterministic assignment leaving at most $|B|+e^{-t}(|Q|-|B|)$ uncovered targets, by a finite product and averaging argument. This supplies no construction of those marginal vectors. [[lem-finite-residue-covering-from-probability-marginals]]

[F5] Under literal AC/CC/DC, accepted endpoint BV implies its divisor-weighted prime-count estimate uniformly for two fixed interval endpoints and every fixed exponent $\eta<1/2$. The proof removes prime powers explicitly and never places an endpoint maximum inside the modulus sum. [[lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals]]

## Proof obligation

The full original Statement remains held. The elementary averaging implication is locally reconstructed in [F4], and the AP error bridge needed for a fixed divisor-weight support is reconstructed in [F5]. Neither result constructs the special GPY probability measures, proves their normalizing constants, or proves the one-target-prime lower coverage bound in Maynard's Lemmas6–8. A completed abstract bounded-cluster/DHL criterion alone would not supply those large-gap weight identities.

The actual endpoint Bombieri–Vinogradov theorem [L2] and its SW/Vaughan prerequisites are independently accepted at their literal AC/CC/DC scopes. Historical claims that BV has no local proof are superseded for those exact scopes. The accepted BV theorem includes $q=1$ and full von Mangoldt endpoints, but has no maximum over endpoints; [F5] uses pointwise uniformity in the endpoint, then finite modulus sums and a proper integral. It does not upgrade that supplier.

The general linear-sieve fundamental lemma [L4] and fixed-tuple multidimensional criterion [L1] now have complete local proofs at their literal hypotheses. Their availability does not prove the present large-gap conclusion. The large-gap route additionally needs the actual rough-prime counts, special weight normalizer and coverage bounds, residual cleanup and their full uniform parameter ranges. The classical Rankin covering uses the already accepted elementary smooth bound with $R=4$; this does not silently prove the stronger sparsified smooth estimate in the2016 source.

The source's printed Lemma7 on p.926 has $m<Uz^{-1}(\log x)^{-2}$, while Proposition5 and the conclusion require $(\log_2x)^{-2}$. The smaller printed range eventually contains no positive $m$ at its parameters. The intended larger range must be established in an actual local argument; this packet does not claim it proved. Finally the present distribution route retains AC/CC/DC, whereas the unchanged public Statement is unconditional. Both that choice obligation and the missing covering/weight arguments remain, with the arbitrary-$C$, arbitrary-$N$ claim and its exact scale preserved.
