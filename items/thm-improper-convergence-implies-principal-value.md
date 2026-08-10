---
id: thm-improper-convergence-implies-principal-value
kind: theorem
title: "Separate improper convergence implies convergence of the principal value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-improper-p-test-rational, def-cauchy-principal-value, def-mixed-improper-integral,
       lem-improper-integral-splitting-and-tail-invariance,
       thm-linearity-of-improper-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If the two one-sided improper integrals at an interior singularity converge separately, then the Cauchy principal value exists and equals their sum. If both tails of a whole-line improper integral converge separately, its principal value exists and equals the whole-line improper integral.

The converses need not hold.

## Facts & Assumptions

**Given:** Separate convergence at the two singular ends in either setting.

[L1] A mixed improper value is the sum of the two independent limits ([[def-mixed-improper-integral]]).

[L2] Moving finite split points preserves both convergence and value ([[lem-improper-integral-splitting-and-tail-invariance]]).

[L3] Principal values use coupled symmetric truncations ([[def-cauchy-principal-value]]).

[L4] For every rational $p$, $\int_0^1x^{-p}\,dx$ converges exactly when $p<1$, and $\int_1^\infty x^{-p}\,dx$ converges exactly when $p>1$ ([[thm-improper-p-test-rational]]).

[L5] The whole-line Cauchy principal value is $\lim_{R\to\infty}\int_{-R}^{R}f$ for a function locally Riemann integrable on the real line, and it does not assert that the two tails converge separately ([[def-cauchy-principal-value]]).

## Proof

**Proof technique:** direct.

1.1 At an interior point $c$, the two truncated terms in [L3] tend separately to the two finite one-sided values. Given $\varepsilon>0$, take the common smaller truncation scale on which each term is within $\varepsilon/2$ of its limit; the triangle inequality then puts their sum within $\varepsilon$ of the sum in [L1]. [L3, L1]

1.2 On the real line, split at zero. As $R\to\infty$, $\int_{-R}^0f$ and $\int_0^Rf$ tend separately to their two tail values. The same $\varepsilon/2$ estimate shows that their sum tends to the mixed value. Split-point invariance [L2] removes any dependence on zero. [L2]

2.1 The converses fail, and a witness is available on this page rather than assumed. Take $f(x)=1/x$ on $[-1,1]$ with the interior singularity at $0$. For every $\delta\in(0,1)$ the substitution $x\mapsto-x$ gives $\int_{-1}^{-\delta}x^{-1}\,dx=-\int_{\delta}^{1}x^{-1}\,dx$, so the symmetric truncations cancel exactly and the principal value exists and is $0$. But $\int_0^1x^{-p}\,dx$ converges exactly when $p<1$ by [L4], so at $p=1$ the right-hand one-sided integral diverges, and by the same reflection so does the left-hand one. Hence the principal value can exist while neither one-sided improper integral converges, and the converse of the first claim fails. For the whole line a separate witness is needed, because [L5] admits only a function locally Riemann integrable on all of $\mathbb R$ and $1/x$ is not one: take $f(x)=x$, which is continuous and therefore locally integrable. For every $R$ the substitution $x\mapsto-x$ gives $\int_{-R}^0x\,dx=-\int_0^Rx\,dx$, so $\int_{-R}^Rx\,dx=0$ and the whole-line principal value is $0$; but $\int_0^Rx\,dx=R^2/2$ is unbounded in $R$, so the tail $\int_0^\infty x\,dx$ does not converge. [L4, L5, given] ∎
