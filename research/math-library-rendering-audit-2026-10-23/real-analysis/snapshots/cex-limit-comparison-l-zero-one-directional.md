---
id: cex-limit-comparison-l-zero-one-directional
kind: counterexample
title: "With $a_k/b_k \\to 0$, convergence of $\\sum a_k$ does not give convergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-limit-comparison-test, thm-p-series-rational, ex-harmonic-series-diverges, def-series, cor-archimedean-reciprocal, def-integer-power, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit, def-rational-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_comparison_test"
    - title: "APEX Calculus, Section 9.4: Comparison Tests"
      url: "https://sites.und.edu/timothy.prescott/apex/web/apex.Ch9.S4.html"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $a_k, b_k > 0$ and $(a_k/b_k)$ converges with
$\lim_k a_k/b_k = 0$, then convergence of $\sum a_k$ implies convergence of
$\sum b_k$.

Claim 2 of [[thm-limit-comparison-test]] gives the implication in the other
direction only: at $L = 0$, convergence of $\sum b_k$ gives convergence of
$\sum a_k$. The claim above reverses it, and the reversal fails. Take

$$a_k := \frac{1}{(k+1)^{2}}, \qquad b_k := \frac{1}{k+1} \qquad (k \in \mathbb{N}) .$$

Both are positive, and $a_k/b_k = 1/(k+1) \to 0$. But $\sum a_k$ is
$\sum_{k \ge 1} 1/k^{2}$, which converges ([[thm-p-series-rational]] at $p = 2$),
while $\sum b_k$ is the harmonic series, which diverges
([[ex-harmonic-series-diverges]]).

**The asymmetry is not an artefact of the proof.** At $L = 0$ the hypothesis says
the $a_k$ are eventually much smaller than the $b_k$; smallness of the $a_k$ can
never constrain the $b_k$ from above, and the witness shows that it does not.

## Facts & Assumptions

**Given:** The sequences $a_k := 1/\iota(k+1)^{2}$ and $b_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, and their quotients $q_k = a_k/b_k$ ([[def-series]], [[def-integer-power]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals $\iota(k+1)$ are positive, so $a_k, b_k > 0$; and reciprocation on the positives is order reversing ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-real-limit]]).

[L3] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$; at $p = 2$ it converges ([[thm-p-series-rational]], [[def-rational-power]]).

[L4] The harmonic series $\sum_{k \ge 1} 1/k$ diverges, and it is the series of $j \mapsto 1/\iota(j+1)$ ([[ex-harmonic-series-diverges]], [[def-series]]).

[L5] Claim 2 of the limit comparison test: with $\lim_k a_k/b_k = 0$, convergence of $\sum b_k$ gives convergence of $\sum a_k$, and that is the only implication it supplies in this regime ([[thm-limit-comparison-test]]).

[L6] The refuted claim: with $\lim_k a_k/b_k = 0$, convergence of $\sum a_k$ gives convergence of $\sum b_k$.

## Counterexample

**Proof technique:** direct.

1.1 Every $a_k$ and every $b_k$ is positive, so the quotients are defined and the hypotheses of the claim are available for this pair. [given, L1]

1.2 The series $\sum a_k$ is $\sum_{k \ge 1} 1/k^{2}$, the $p$-series at $p = 2$, and it converges. [given, L3]

1.3 The series $\sum b_k$ is the harmonic series, and it diverges. [given, L4]

2.1 The quotients are $q_k = \dfrac{1/\iota(k+1)^{2}}{1/\iota(k+1)} = \dfrac{1}{\iota(k+1)}$, and $(q_k)$ converges to $0$: given a rational $\varepsilon > 0$, choose a natural $n \ge 1$ with $1/n < \varepsilon$, and then $0 < q_k \le 1/n < \varepsilon$ for every $k$ with $k+1 \ge n$. [step 1.1, L1, L2, choose]

3.1 So $\lim_k q_k = 0$ and $\sum a_k$ converges while $\sum b_k$ diverges; the claim is refuted. [step 2.1, step 1.2, step 1.3, L6]

4.1 Nothing in the limit comparison test is contradicted: its claim 2 asserts the implication in the opposite direction, and here its hypothesis, convergence of $\sum b_k$, is false. [step 3.1, L5] ∎

## Remarks

- **The same pair also shows the divergence form is one-directional.** Read contrapositively, claim 2 says divergence of $\sum a_k$ forces divergence of $\sum b_k$. The witness has $\sum b_k$ divergent and $\sum a_k$ convergent, so divergence of the larger series says nothing about the smaller one, which is the same asymmetry seen from the other side.

- **The regime $L = +\infty$ fails symmetrically.** Exchanging the roles of $(a_k)$ and $(b_k)$ in the witness gives $b_k/a_k \to +\infty$ with $\sum b_k$ divergent and $\sum a_k$ convergent, so claim 3 of the test is one-directional for the same reason. That reading is immediate from the computation above, the two sequences being the same two.
