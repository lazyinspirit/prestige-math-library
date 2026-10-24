---
id: ex-abel-dini-pair-for-the-harmonic-series
kind: example
title: "Abel-Dini applied to $\\sum 1/k$: $\\sum 1/(k s_k)$ still diverges while $\\sum 1/(k s_k^2)$ converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-abel-dini, ex-harmonic-series-diverges, def-series, def-finite-sum, lem-of-naturals-positive, def-integer-power, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-08
    scope: published-audit-targeted
    context_sha256: 3c9528ae54651082cbfbea6c824f87b31a909cdd650b74491a3d33ca6f18289c
    item_sha256: 121eeb740e76f3ee820cad08053c898d3b349449bcddbe0c8bf3dbea050cfeaf
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Take $a_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, so that $\sum a_k$ is the
harmonic series $\sum_{k \ge 1} 1/k$, which has positive terms and diverges
([[ex-harmonic-series-diverges]]). Its inclusive partial sums are the harmonic
numbers

$$S_n \;=\; \sum_{k=0}^{n} a_k \;=\; \sum_{k=1}^{n+1} \frac{1}{k} \;=\; H_{n+1} \qquad (n \in \mathbb{N}),$$

all of them positive. The Abel-Dini theorem ([[thm-abel-dini]]) then says that

$$\sum_{n} \frac{a_n}{S_n} \;=\; \sum_{n} \frac{1}{(n+1)\,H_{n+1}} \quad \text{diverges}, \qquad \sum_{n} \frac{a_n}{S_n^{2}} \;=\; \sum_{n} \frac{1}{(n+1)\,H_{n+1}^{2}} \quad \text{converges} .$$

Classically these are written $\sum_{k \ge 1} 1/(k H_k)$ and
$\sum_{k \ge 1} 1/(k H_k^{2})$, with $H_k = 1 + 1/2 + \dots + 1/k$.

**What the pair shows.** The harmonic series is a familiar slowly divergent
explicit series, and dividing its terms by the running total
produces something that diverges more slowly still. Dividing by the square of the
running total overshoots into convergence. So exponent $1$ gives a divergent
member and exponent $2$ a convergent one. The absence of a slowest divergent
positive series comes from applying Abel-Dini again to the newly produced
divergent series, not from a last-exponent claim about this fixed pair.

## Facts & Assumptions

**Given:** The sequence $a_k := 1/\iota(k+1)$, $k \in \mathbb{N}$, and its inclusive partial sums $S_n = \sum_{k=0}^{n} a_k$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive, so each $a_k$ is positive and each $S_n$ is a sum of positive terms ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] The harmonic series $\sum_{k \ge 1} 1/k$ diverges ([[ex-harmonic-series-diverges]]), and it is by definition the series of $j \mapsto 1/\iota(j+1)$ ([[def-series]]).

[L3] Abel-Dini: for a sequence of positive terms whose series diverges, with $S_n$ the inclusive partial sums, $\sum_n a_n/S_n$ diverges and $\sum_n a_n/S_n^{2}$ converges ([[thm-abel-dini]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 Every term $a_k = 1/\iota(k+1)$ is positive. [given, L1]

1.2 The series $\sum a_k$ is the harmonic series $\sum_{k \ge 1} 1/k$ and therefore diverges. [given, L2]

1.3 Its inclusive partial sums are $S_n = \sum_{k=0}^{n} 1/\iota(k+1) = \sum_{k=1}^{n+1} 1/k = H_{n+1}$, a reindexing of the sum by $k \mapsto k+1$. [given, L1]

2.1 The hypotheses of Abel-Dini are met by $(a_k)$: positive terms and a divergent series. [step 1.1, step 1.2, L3]

3.1 Therefore $\sum_n \dfrac{a_n}{S_n} = \sum_n \dfrac{1}{\iota(n+1) H_{n+1}}$ diverges. [step 2.1, step 1.3, L3]

4.1 And $\sum_n \dfrac{a_n}{S_n^{2}} = \sum_n \dfrac{1}{\iota(n+1) H_{n+1}^{2}}$ converges. [step 2.1, step 1.3, L3] ∎

## Remarks

- **This is the concrete form of the no-slowest-series obstruction.** The general statement is that no divergent series of positive terms is eventually dominated by every other; here it is exhibited for the standard candidate. Anyone proposing the harmonic series as a universal comparison series is answered by the first of the two conclusions.

- **No growth estimate for $H_k$ is used or needed.** The classical statement $H_k \approx \log k$ would make both conclusions look like instances of the $p$-series with a logarithmic correction, but neither the logarithm nor that estimate is available in this library at this point, and the theorem does not require them: it needs only that the running totals are positive, nondecreasing and unbounded.
