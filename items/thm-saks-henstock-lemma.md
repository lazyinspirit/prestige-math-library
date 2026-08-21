---
id: thm-saks-henstock-lemma
kind: theorem
title: "The Saks–Henstock lemma for fine partial tagged partitions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-henstock-kurzweil-integrability-on-subintervals-and-additivity, def-henstock-kurzweil-integral-on-a-compact-interval, thm-cousins-lemma-for-gauges]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

If $f$ is Henstock–Kurzweil integrable on $[a,b]$, then for every $\varepsilon>0$ there is a gauge $\delta$ such that every $\delta$-fine partial tagged partition $\{([u_i,v_i],\xi_i)\}_{i=1}^m$ satisfies

$$\sum_{i=1}^m\left|f(\xi_i)(v_i-u_i)-\int_{u_i}^{v_i}f\right|<\varepsilon.$$

The assertion includes the empty partial partition.

Fine partial tagged partitions have uniformly small sums of local integration errors.

## Facts & Assumptions

**Given:** An HK-integrable $f$ and a fine partial tagged partition for a sufficiently accurate gauge.

[L1] Every gauge on each complementary compact interval admits a fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

[L2] Henstock–Kurzweil integrals restrict to subintervals and add over adjacent intervals ([[thm-henstock-kurzweil-integrability-on-subintervals-and-additivity]]).

[L3] HK integrability means that one gauge makes every fine tagged sum lie within a prescribed error of the integral value ([[def-henstock-kurzweil-integral-on-a-compact-interval]]).

## Proof

**Proof technique:** direct.

1.1 The empty family has error $0$. Otherwise fix a whole-interval gauge whose full-partition error is below $\varepsilon/4$. After a partial partition fine for that fixed gauge is given, [L2] makes $f$ integrable on each of its finitely many complementary compact intervals. For any prescribed complement error, [L3] supplies a local accuracy gauge there; [L1] supplies a partition fine for the minimum of that local gauge and the already fixed whole-interval gauge. Thus the resulting completions are both arbitrarily accurate and fine for the original gauge. [given, L1, L2, L3]

2.1 For the cells with nonnegative local error, complete their complement with fine partitions whose total local error is below $\varepsilon/4$. Additivity [L2] identifies the resulting full-partition error with the selected positive errors plus those complement errors, so the positive total is below $\varepsilon/2$. Repeating the construction for the negative cells bounds the absolute value of their total by $\varepsilon/2$; adding the two bounds gives the displayed strict estimate. [step 1.1, L1, L2, algebra] ∎
