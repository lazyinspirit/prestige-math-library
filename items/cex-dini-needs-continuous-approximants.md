---
id: cex-dini-needs-continuous-approximants
kind: counterexample
title: "Dini's theorem fails for discontinuous approximants: shrinking interval indicators decrease pointwise to zero but not uniformly"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dini-on-a-closed-interval, def-continuity-real, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** continuity of the approximating functions in Dini's theorem
can be dropped.

For $k\in\mathbb{N}$ define $h_k:[0,1]\to\mathbb{R}$ to be the indicator of

$$(0,1/\iota(k+1)).$$

Thus $h_k$ has value $0$ at both endpoints of that open interval. The sequence
decreases pointwise to the continuous zero function but does not converge
uniformly.

## Facts & Assumptions

**Given:** The indicator functions $h_k$ in the Statement, with $a_k:=\iota(k+1)>0$.

[L1] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$, and positive canonical naturals increase while their reciprocals decrease ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] Continuity at $c$ requires that every positive output error admit a positive input radius on which all function values remain close to the value at $c$ ([[def-continuity-real]]).

[L3] Dini's theorem on a closed interval assumes that every approximating function and the pointwise limit are continuous ([[thm-dini-on-a-closed-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 The intervals $(0,1/a_{k+1})$ are contained in $(0,1/a_k)$, so $h_{k+1}(x)\le h_k(x)$ for every $x\in[0,1]$. [L1]

1.2 At $x=0$, every $h_k(x)$ is $0$. If $x>0$, choose $N$ with $1/\iota(N)<x$; then $h_k(x)=0$ for all $k\ge N$. Thus $h_k\to0$ pointwise. [L1, choose]

1.3 Each $h_k$ is discontinuous at $0$: for any $\delta>0$, the point $y:=\min\{\delta/2,1/(2a_k)\}$ satisfies $0<y<\delta$, lies in $(0,1/a_k)$, and has $|h_k(y)-h_k(0)|=1$. [L2, algebra]

1.4 For each $k$, the point $x_k:=1/(2a_k)$ lies in $(0,1/a_k)$ and satisfies $h_k(x_k)=1$, so the convergence to $0$ is not uniform. [given, L1]

2.1 The compact domain, monotone pointwise convergence, and continuous limit remain, but the approximants are discontinuous and uniform convergence fails; their continuity is indispensable in [L3]. [step 1.1, step 1.2, step 1.3, step 1.4, L3] ∎
