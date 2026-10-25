---
id: cex-an-abscissa-need-not-be-a-line-of-convergence
kind: counterexample
title: "A boundary line need not have uniform convergence behavior"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abscissae-dirichlet-series, thm-geometric-series, thm-p-series-rational, thm-alternating-series-test]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Statement refuted

If a Dirichlet series converges at one point on the line $\Re s=\sigma_c$, then
it converges at every point on that line.

## Facts & Assumptions

**Given:** The Dirichlet series $$D(s):=\sum_{k \ge 1}\frac{2^{-ks}}{k},$$ equivalently the series $\sum_{n \ge 1} a_n n^{-s}$ with $a_{2^k}=1/k$ and $a_n=0$ otherwise.

[L1] The abscissa of convergence is defined by half-plane convergence ([[def-abscissae-dirichlet-series]]).

[L2] The $p=1$ case of the $p$-series theorem says that the harmonic series diverges ([[thm-p-series-rational]]), while the alternating-series test applied to $1/k$ says that the alternating harmonic series converges ([[thm-alternating-series-test]]).

[L3] A geometric series with ratio of modulus $<1$ converges ([[thm-geometric-series]]).

## Counterexample

**Proof technique:** direct.

1.1 If $\Re s=\sigma>0$, then $$\sum_{k \ge 1}\left|\frac{2^{-ks}}{k}\right| \le \sum_{k \ge 1} 2^{-k\sigma},$$ and the right-hand side is a convergent geometric series by [L3]. So $D(s)$ converges for every $\Re s>0$. At $s=0$ it becomes the harmonic series $\sum_{k \ge 1} 1/k$, which diverges by [L2]. Therefore [L1] gives $\sigma_c=0$. [L1, L2, L3, given, algebra]

2.1 On the same boundary line, at $$s_*= \frac{\pi i}{\log 2}$$ one has $2^{-s_*}=-1$, so $$D(s_*)=\sum_{k \ge 1}\frac{(-1)^k}{k},$$ which converges by [L2]. Thus the line $\Re s=0$ contains both the divergent point $s=0$ and the convergent point $s=s_*$. [L2, step 1.1, algebra]

3.1 Therefore convergence at one boundary point does not force convergence at every point of the abscissa line. [step 1.1, step 2.1] ∎
