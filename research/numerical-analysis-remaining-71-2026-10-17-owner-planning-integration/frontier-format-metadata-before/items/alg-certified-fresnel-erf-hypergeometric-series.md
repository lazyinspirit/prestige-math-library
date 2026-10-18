---
id: alg-certified-fresnel-erf-hypergeometric-series
kind: algorithm
title: Finite certified power-series evaluation for Fresnel, erf, and Gauss functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-certified-evaluation-result-contract, def-fresnel-erf-and-hypergeometric-series, lem-fresnel-series-geometric-tail, lem-erf-series-geometric-tail, lem-gauss-hypergeometric-series-geometric-tail, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §15.2(i), Gauss series
      url: https://dlmf.nist.gov/15.2
    - title: DLMF, §§7.6(i) and 15.2(i)
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For exact dyadic complex input $z$ and exact dyadic parameters $a,b,c$ when
the Gauss series is selected, this finite procedure evaluates $C(z)$, $S(z)$,
$\operatorname{erf}(z)$, or ${}_2F_1(a,b;c;z)$ using the corresponding
partial sum and geometric tail bound to return `success`, `inconclusive`,
`domain`, or `range` as in
[[def-certified-evaluation-result-contract]]. Fresnel and $\operatorname{erf}$
inputs have domain $z\in\mathbb C$. The Gauss-series branch has domain
$c\notin\{0,-1,-2,\ldots\}$ and $|z|<1$. It makes no continuation claim
outside that disk.

The procedure takes absolute tolerance $\varepsilon_a>0$, optional relative
tolerance $\varepsilon_r>0$, and finite term, work, and precision caps. It
assumes a sound outward interval backend: every reported interval operation
contains the exact operation on its inputs. If an operation cannot be
represented under the precision cap, the procedure returns `range`.

## Facts & Assumptions

**Given:** The selected exact parameters, tolerances, finite caps, and a sound
outward interval backend as specified in the statement.

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval arithmetic expression DAG encloses its exact range, and non-finite
statuses make no finite claim. [[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]]: required real elementary and
complex exponential/logarithm ranges are enclosed whenever those evaluations
return finite results.

[F1] [[def-certified-evaluation-result-contract]]: `success` requires a
containing enclosure with radius at most the requested absolute tolerance;
relative certification is checked only when zero is outside the enclosure.

[F2] [[def-fresnel-erf-and-hypergeometric-series]]: the four functions on
their stated domains are given by the specified series.

[F3] [[lem-fresnel-series-geometric-tail]]: the Fresnel term ratios are
bounded by the displayed decreasing rational expressions, and a tail with
subsequent ratios at most $q<1$ is bounded by the first omitted term divided
by $1-q$.

[F4] [[lem-erf-series-geometric-tail]]: after summing terms $0$ through
$N-1$, the $\operatorname{erf}$ tail is bounded by
$|e_N|/(1-|z|^2/(N+1))$ when that ratio is below $1$.

[F5] [[lem-gauss-hypergeometric-series-geometric-tail]]: for $N>|c|$,
ratios of terms from index $N$ onward are at most the displayed $q_N$; if
$q_N<1$, the tail starting at $h_N$ is at most $|h_N|/(1-q_N)$.

[F6] [[lem-trigonometric-identities-machin-and-range-reduction]]: its
Machin identity and arctangent tail provide a finite certified enclosure of
$\pi$; [A1] encloses the real square root $\sqrt\pi$.

## Proof
1.1 The procedure first checks the selected branch's exact domain conditions. Failure of a Fresnel or $\operatorname{erf}$ domain check is impossible for a finite complex input; a failed Gauss condition returns `domain`. If a Gauss series terminates because $a$ or $b$ is a nonpositive integer, the procedure forms its finite sum using the backend and skips the infinite-tail stage. [given, A1, F2]

1.2 Otherwise, at each permitted term count $N$, it encloses the partial sum through index $N-1$ using [A1]. For $C$ or $S$ it bounds the first omitted term and uses the corresponding ratio from [F3]; for $\operatorname{erf}$ it uses [F4]; for ${}_2F_1$ it requires $N>|c|$ and $q_N<1$ from [F5]. The coefficient enclosures for $\pi$ and $\sqrt\pi$ use [F6]. If a required ratio test fails, that iteration supplies no certificate. When it passes, adding the symmetric interval enlargement by the resulting tail bound contains the full series value by [F2]--[F5]. [A1, F2, F3, F4, F5, F6]

2.1 The procedure returns `success` only when the resulting enclosure passes the radius test in [F1] and any reported relative test also passes; it returns `range` if the backend reports a representational failure. If no iteration within the finite caps passes, it returns `inconclusive`. The preceding inclusion proof applies to every successful enclosure, while the bounded loops and explicit failure branches ensure that the procedure terminates. [A1, F1, step 1.1, step 1.2] ∎