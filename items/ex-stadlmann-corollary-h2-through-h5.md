---
id: ex-stadlmann-corollary-h2-through-h5
kind: example
title: "Stadlmann’s improved H₂–H₅ admissible-tuple bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps: [thm-stadlmann-smooth-modulus-prime-distribution, thm-stadlmann-smooth-modulus-mpz-criterion, thm-polymath8b-enlarged-simplex-dhl-criterion, def-admissible-prime-tuple, def-liminf-consecutive-prime-gap-hm]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Corollary 1 and §2.1.4, printed pp. 3 and 8"
    - title: "D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1407.4897v4"
      locator: "Theorem 6.7, enlarged-simplex DHL criterion"
---

## Example

Stadlmann's 2025 paper reports the unconditional bounds
$
\begin{aligned} H_2&\le H(35265)\le396504,\\ H_3&\le H(1624545)\le24407016,\\ H_4&\le H(73807570)\le1391051532,\\ H_5&\le H(3340375663)\le77510685234, \end{aligned}
$
where $p_n$ is the $n$th positive prime and $H_m=\liminf_{n\to\infty}(p_{n+m}-p_n)$. A finite set $T$ of $k$ distinct integers is admissible when, for every prime $p$, its residues do not occupy all classes modulo $p$; its diameter is $\max T-\min T$. The value $H(k)$ is the least diameter among admissible $k$-tuples.

## Example references

[[thm-stadlmann-smooth-modulus-prime-distribution|Stadlmann's exponent 1/2+1/40−ε for prime distribution to smooth moduli]]

[[thm-stadlmann-smooth-modulus-mpz-criterion|MPZ criterion from Type I/II and Type III estimates]]

[[thm-polymath8b-enlarged-simplex-dhl-criterion|Polymath8b’s Elliott–Halberstam enlarged-simplex criterion for DHL[k,m+1]]]

[[def-admissible-prime-tuple|Admissible finite tuples of integer shifts]]

[[def-liminf-consecutive-prime-gap-hm|The limit-inferior prime-gap constants H_m]]

[Stadlmann, Corollary 1 and §2.1.4](https://arxiv.org/pdf/2309.00425v3)

[Polymath8b, Theorem 6.7](https://arxiv.org/pdf/1407.4897v4)

## Facts & Assumptions

**Given:** The smooth-modulus prime distribution theorem, the MPZ parameter criterion, the enlarged-simplex DHL criterion, the four stated values of $k$, and the associated finite tuple/shifted-sieve data.

[F1] [[thm-stadlmann-smooth-modulus-prime-distribution]]: the 2025 prime-distribution exponent is $1/2+1/40-\varepsilon$ on squarefree smooth moduli.

[F2] [[thm-stadlmann-smooth-modulus-mpz-criterion]]: the parameter choices displayed in Stadlmann's Corollary 1 yield the required MPZ estimates.

[F3] [[thm-polymath8b-enlarged-simplex-dhl-criterion]]: the enlarged-simplex variational threshold and a level-of-distribution hypothesis imply the corresponding DHL statement and hence $H_m\le H(k)$.

[F4] [[def-admissible-prime-tuple]]: a $k$-tuple is admissible exactly when it omits at least one residue class modulo every prime.

[F5] [[def-liminf-consecutive-prime-gap-hm]]: $H_m$ is the limit inferior of $p_{n+m}-p_n$ for the increasing prime sequence.

## Proof obligation

The source computes four variational thresholds from explicit numerical parameter tuples and then reports $H(k)$ diameter bounds. The local corpus contains neither the three very large admissible tuples nor the shifted Schinzel-sieve certificate for $k=3340375663$ (the paper gives the shift interval and parameter $13090609$ only). The enlarged-simplex criterion now has a local derivation using Countable Choice through its complete-Lebesgue L2 foundation, density and integral comparison; it does not supply a choice-free interface for these unconditional source conclusions. No finite-computation import is authorized for these values. Preserve all four claims and escalate the missing choice-free analytic proof and complete finite witnesses/checks.
