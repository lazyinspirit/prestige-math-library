---
id: cex-equivalent-metrics-need-not-come-from-equivalent-norms
kind: counterexample
title: "Topologically equivalent metrics on a vector space need not come from equivalent norms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equivalent-metrics, def-equivalent-norms, def-norm-and-normed-space,
       lem-bounded-remetrisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
pipeline_run: frontier-27
---

## Statement refuted

If two metrics on a vector space are topologically equivalent and one is induced
by a norm, then the other is induced by an equivalent norm.

## Facts & Assumptions

**Given:** A nonzero normed space $(V,\|\cdot\|)$ and the norm metric $d(x,y):=\|x-y\|$.

[L1] The bounded remetrisation $d'(x,y):=\min\{d(x,y),1\}$ is a metric topologically equivalent to $d$ ([[lem-bounded-remetrisation]], [[def-equivalent-metrics]]).

[L2] A norm metric satisfies $d_M(\lambda x,\lambda y)=|\lambda|\,d_M(x,y)$ for every scalar $\lambda$ ([[def-norm-and-normed-space]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the metric $d'(x,y):=\min\{d(x,y),1\}$ has the same topology as the original norm metric $d$. [L1]

2.1 Suppose $d'$ were induced by some norm $M$ on $V$. Choose a nonzero vector $v$; then $M(v)>0$, so [L2] gives $d'(tv,0)=M(tv)=|t|M(v)$ for every scalar $t$. [step 1.1, L2, assume-contra]

3.1 The right-hand side of step 2.1 is unbounded as $|t|\to\infty$, but by definition $d'(tv,0)\le 1$ for every $t$. This contradiction shows that $d'$ is not induced by any norm at all. [step 2.1, discharge-contradiction]

4.1 Hence $d'$ is topologically equivalent to a norm metric while failing even to come from a norm, so it certainly does not come from a norm equivalent to the original one. This refutes the statement. [step 1.1, step 3.1] ∎
