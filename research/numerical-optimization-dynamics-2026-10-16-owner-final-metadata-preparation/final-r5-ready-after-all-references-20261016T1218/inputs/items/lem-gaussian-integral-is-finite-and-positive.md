---
id: lem-gaussian-integral-is-finite-and-positive
kind: lemma
title: "The improper integral of $e^{-x^2}$ over $\\mathbb{R}$ is finite and positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mixed-improper-integral, thm-comparison-test-for-improper-integrals, thm-substitution-for-improper-integrals, thm-improper-p-test-rational, lem-exponential-dominates-one-plus-x, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-continuous-implies-integrable, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

The integral $I=\int_{-\infty}^{\infty}e^{-x^2}\,dx$ exists as a finite positive real number.

## Facts & Assumptions

**Given:** The real exponential function and the mixed-improper convention on the real line.

[L1] For every real $u$, $1+u\le\exp(u)$ ([[lem-exponential-dominates-one-plus-x]]).

[L2] The improper integral $\int_1^\infty x^{-p}\,dx$ converges exactly when the rational $p>1$ ([[thm-improper-p-test-rational]]).

[L3] For every real $u$, $\exp(u)>0$ and $\exp(-u)=1/\exp(u)$ ([[cor-exponential-reciprocal-and-positivity]]).

[L4] Improper integrals at $-\infty$ and $+\infty$ must converge separately before they are added ([[def-mixed-improper-integral]]).

[L5] If $0\le u\le v$ toward a singular end and the improper integral of $v$ converges there, then the improper integral of $u$ converges there ([[thm-comparison-test-for-improper-integrals]]).

[L6] The exponential function is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

[L7] If an integrable function $h$ satisfies $m\le h(x)\le M$ on $[a,b]$, then $m(b-a)\le\int_a^bh\le M(b-a)$ ([[lem-integral-elementary-bounds]]).

[L8] Every continuous function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[L9] A valid $C^1$ substitution carries a convergent improper integral to the corresponding transformed improper integral ([[thm-substitution-for-improper-integrals]]).

## Proof

**Proof technique:** direct.

1.1 If $|x|\ge1$, then [L1] and [L3] give $0<e^{-x^2}\le1/(1+x^2)\le x^{-2}$. The $p$-test [L2] and comparison [L5] make the positive tail converge, and the substitution $u=-x$ in [L9] gives the identical negative-tail estimate. [L1, L2, L3, L5, L9]

1.2 On $[-1,1]$, the integrand is continuous and hence integrable by [L8]; [L6] gives $e^{-x^2}\ge e^{-1}>0$, so [L7] gives $\int_{-1}^1e^{-x^2}\,dx\ge2e^{-1}>0$. [L3, L6, L7, L8]

2.1 By [L4], the two finite tails and the proper middle integral combine to a finite mixed improper integral, and step 1.2 makes the total strictly positive. [step 1.1, step 1.2, L4] ∎
