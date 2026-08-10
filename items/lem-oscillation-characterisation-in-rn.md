---
id: lem-oscillation-characterisation-in-rn
kind: lemma
title: "A function on a subset of $\\mathbb{R}^m$ is continuous at $x$ iff its oscillation there is $0$, and every oscillation superlevel set is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oscillation-in-rn, def-metric-continuity, def-metric-ball, def-metric-topology, lem-p-norms-are-norms-and-induce-the-published-metrics, def-bounded-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

For $f:A\to\mathbb R$, $f$ is continuous at $c\in A$ if and only if $\omega_f(c)=0$. If $f$ is bounded, then for every $\varepsilon>0$, the relative superlevel set $\{c\in A:\omega_f(c)\ge\varepsilon\}$ is closed in $A$.

## Facts & Assumptions

**Given:** $f,A,c$.

[L1] Metric continuity and balls are [[def-metric-continuity]] and [[def-metric-ball]].

[L2] Oscillation is [[def-oscillation-in-rn]].

## Proof

**Proof technique:** direct.

1.1 If $f$ is continuous at $c$, choose a ball on which $|f(x)-f(c)|<\varepsilon/3$; pairwise differences are then below $2\varepsilon/3$, so the ball oscillation is at most $2\varepsilon/3<\varepsilon$ and $\omega_f(c)=0$.  [L1, L2]

1.2 If $\omega_f(c)=0$, choose $r$ with ball oscillation below $\varepsilon$. Holding one point at $c$ gives $|f(x)-f(c)|<\varepsilon$, proving continuity.  [L1, L2]

1.3 If $\omega_f(c)<\varepsilon$, choose $r$ with $\omega_f(A\cap B(c,r))<\varepsilon$. Every $d\in A\cap B(c,r/2)$ has a sufficiently small ball contained in $B(c,r)$, so $\omega_f(d)<\varepsilon$. Thus the sublevel set is relatively open.   [L1, L2, given]

2.1 Steps 1.1 and 1.2 give the equivalence; step 1.3 makes the complementary superlevel set closed.   [step 1.1, step 1.2, step 1.3, given] ∎
