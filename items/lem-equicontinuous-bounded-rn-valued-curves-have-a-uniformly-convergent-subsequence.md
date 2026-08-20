---
id: lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence
kind: lemma
title: "A uniformly bounded equicontinuous sequence of $\\mathbb R^n$-valued curves on a nonempty compact interval has a uniformly convergent subsequence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-bolzano-weierstrass-in-rn, thm-rationals-countable, lem-q-and-irrationals-dense-r, lem-vector-valued-continuous-curve-space-is-complete, def-equicontinuity-and-boundedness-in-ck, thm-heine-borel-r]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $J$ be a nonempty compact interval and $n\ge1$. A uniformly bounded equicontinuous sequence of continuous maps $x_m:J\to\mathbb R^n$ has a subsequence that converges uniformly to a continuous map $x:J\to\mathbb R^n$. The construction requires no choice principle.

A uniformly bounded equicontinuous sequence of $\mathbb R^n$-valued curves on a nonempty compact interval has a uniformly convergent subsequence.

## Facts & Assumptions

**Given:** The uniformly bounded equicontinuous sequence in the Statement.

[L1] The rationals are countably infinite: $\mathbb Q\approx\mathbb N$ ([[thm-rationals-countable]]).

[L2] A bounded sequence in $\mathbb R^n$, $n\ge1$, has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

[L3] Continuous $\mathbb R^n$-valued curves on a compact interval are complete in the supremum metric ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[L4] Every closed bounded interval in $\mathbb R$ is compact ([[thm-heine-borel-r]]).

[L5] The rationals are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

## Proof

**Proof technique:** constructive.

1.1 If $J$ is a one-point interval, apply [L2] at that point; otherwise use [L1] to enumerate the dense set $J\cap\mathbb Q$, apply deterministic nested boxes and least admissible indices to implement [L2] at each enumerated time, and take diagonal indices to obtain a subsequence convergent at every rational time. [given, L1, L2, construct]

2.1 Given $\varepsilon>0$, equicontinuity, [L4], and [L5] give a finite rational net on which the diagonal subsequence is eventually $\varepsilon/3$-close; the triangle inequality then makes it uniformly Cauchy on all of $J$. [step 1.1, L4, L5, algebra]

3.1 Applying [L3] to the uniformly Cauchy subsequence gives a continuous uniform limit, completing the construction. [step 2.1, L3, discharge-construct] ∎
