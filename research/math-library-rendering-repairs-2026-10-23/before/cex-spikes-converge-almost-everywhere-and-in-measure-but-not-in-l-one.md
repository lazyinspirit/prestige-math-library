---
id: cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one
kind: counterexample
title: "The spikes k chi_(0,1/k) converge almost everywhere and in measure to zero but not in L^1"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-almost-everywhere-relative-to-a-measure, def-convergence-in-measure, def-convergence-in-l-one-of-a-measure]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iii)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

convergence in measure implies convergence in $L^1(\mu)$.

## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$ and the sequence defined by $f_0:=0$ and $f_n(x):=n\,\chi_{(0,1/n)}(x)$ for $n\ge1$.

[L1] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L2] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L3] Convergence in $L^1(\mu)$ means $\int |f_n-f|\,d\mu \to 0$. ([[def-convergence-in-l-one-of-a-measure]])

## Counterexample

**Proof technique:** direct.

1.1 Fix $x \in [0,1]$. If $x>0$, then $1/n<x$ for all large $n$, so $f_n(x)=0$ eventually; and $f_n(0)=0$ for every $n$. Thus $f_n(x)\to0$ for every $x \in [0,1]$, hence almost everywhere by [L1]. [given, L1]

1.2 Fix $\varepsilon>0$. For all $n>\varepsilon$ one has $\{|f_n-0|>\varepsilon\}=(0,1/n)$, whose measure is $1/n \to 0$. So $f_n \to 0$ in measure by [L2]. [given, L2]

1.3 For every $n\ge1$, [given, L3, algebra] $$\int_0^1 |f_n|\,d\lambda = \int_0^{1/n} n\,d\lambda = 1.$$ So the $L^1$ errors from $0$ never tend to $0$, and [L3] fails.

2.1 The sequence converges almost everywhere and in measure to $0$, but not in $L^1$. [step 1.1, step 1.2, step 1.3] ∎
