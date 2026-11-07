---
id: thm-ford-maynard-tao-fixed-length-large-gap-chains
kind: theorem
title: Ford–Maynard–Tao fixed-length chains of large prime gaps
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
- def-prime-gap-functions
- def-iterated-logarithms-and-prime-gap-scale
- thm-fgmt-quantitative-large-prime-gap-bound
- thm-maynard-simplex-growth-bound
- thm-maynard-multidimensional-sieve-dhl-criterion
- thm-bombieri-vinogradov-prime-distribution
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- lem-finite-moment-and-close-pair-bounds-produce-separated-chains
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Ford, Maynard, and Tao, Chains of large gaps between primes, Theorem 1
    url: https://arxiv.org/pdf/1511.04468
  - title: Ford, Green, Konyagin, Maynard, and Tao, Long gaps between primes
    url: https://www.ams.org/jams/2018-31-01/S0894-0347-2017-00876-2/S0894-0347-2017-00876-2.pdf
---

## Statement

For an integer $k\ge1$, let $G_k(X)$ be the maximum over chains of $k$ consecutive prime gaps whose last prime is at most $X$ of the minimum gap length in the chain. There is an absolute effective constant $c>0$ such that, for every fixed $k\ge1$, there is $X_0(k)$ for which every real $X\ge X_0(k)$ satisfies
$$G_k(X)\ge\frac{c}{k^2}\,\frac{\log X\,\log_2X\,\log_4X}{\log_3X},$$
where $\log$ is natural and $\log_{j+1}X=\log(\log_jX)$. The constant $c$ is independent of $k$; the threshold may depend on $k$.

## Statement references

[[def-prime-gap-functions]]

[[def-iterated-logarithms-and-prime-gap-scale]]

[Ford, Maynard, and Tao, “Chains of large gaps between primes,” Theorem 1](https://arxiv.org/pdf/1511.04468)

[[lem-finite-moment-and-close-pair-bounds-produce-separated-chains]]

## Facts & Assumptions

**Given:** A fixed integer $k\ge1$, the increasing sequence of positive primes, and the last-prime cutoff in the Statement.

[F1] $G_k(X)$ maximizes the minimum of the $k$ adjacent gap lengths over indices $n$ with $p_{n+k}\le X$ ([[def-prime-gap-functions]]).

[F2] The iterated logarithms in the formula are recursively defined from the natural logarithm for all sufficiently large arguments ([[def-iterated-logarithms-and-prime-gap-scale]]).

[L1] The scalar 2018 maximal-gap theorem gives the stated scale for a single gap but does not itself imply the fixed-$k$ chain conclusion ([[thm-fgmt-quantitative-large-prime-gap-bound]]).

[L2] The current Maynard criterion states the admissible tuple, level-of-distribution, and $M_k$ threshold needed for the sieve route, and its full fixed-tuple local proof is supplied at that given-level scope ([[thm-maynard-multidimensional-sieve-dhl-criterion]]).

[L3] The current Bombieri–Vinogradov Statement assumes the Axiom of Choice, Countable Choice, and Dependent Choice and gives its stated progression estimate ([[thm-bombieri-vinogradov-prime-distribution]]).

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice, with the meanings in their respective Definitions ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F3] A finite probability space of complete candidate point sets with the stated first/second moments and close-pair bound admits a separated outcome. Its explicit $k^{-2}$ corollary keeps an absolute effective constant only when the supplied moment/pair constants are absolute; actual consecutive prime gaps require the COMPLETE prime set of the interval. This proves the finite separation implication, not those analytic hypotheses. [[lem-finite-moment-and-close-pair-bounds-produce-separated-chains]]

## Proof obligation

The full fixed-$k$ Statement remains held, with its effective absolute constant independent of $k$, its $k^{-2}$ factor, all-sufficiently-large-$X$ quantifier and last-prime cutoff intact. [F3] reconstructs the finite second-moment/separation step, including the need for the COMPLETE prime set in the sampled interval. A scalar large-gap theorem does not give a chain, and a sparse subset of primes does not give consecutive prime gaps.

The chain source additionally needs lower as well as upper/local counts for its sifted set, one-exceptional-prime removal, a Gallagher-type lower prime estimate in a specified primorial progression at polynomial size in that modulus, a pair upper sieve, essential-support-preserving hypergraph covering and uniform tuple-weight/random-sieve estimates. These are not supplied by [F3], the current abstract DHL criterion, or the scalar FGMT Statement.

The exact accepted119/125/127/129 local scopes exist and must not be described as absent. Nevertheless, per-character zero-free regions and common real-zero uniqueness do not by themselves prove the needed effective Gallagher progression bound. Accepted SW has logarithmic moduli and ineffective constants; accepted BV is an average over moduli with its literal endpoint cutoff and AC/CC/DC hypotheses, and cannot be substituted for that particular large-modulus effective lower bound. The chain source explicitly avoids relying on ineffective Siegel/BV for its effective constant. The local log-free zero-density theorem and its detector/parameter argument also remain unproved suppliers here.

All remaining analytic and covering hypotheses, and the choice-scope gap between the unconditional Statement and the current conditional distribution route, are retained explicitly. No full chain theorem, global existence result or effectivity upgrade is asserted by this partial packet.
