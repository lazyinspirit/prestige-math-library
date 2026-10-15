---
id: ex-td-biased-bath-shannon-entropy-decreases
kind: example
title: "Shannon entropy decreases in a biased detailed-balance bath"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [def-td-detailed-balance-rate-model, pthm-td-markov-relative-entropy-and-convergence, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws]
dependency_roles:
  def-td-detailed-balance-rate-model: formulation-prerequisite
  pthm-td-markov-relative-entropy-and-convergence: physical-result
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "An exact two-state finite-rate calculation distinguishing Shannon entropy from relative entropy to a biased stationary law; no empirical claim."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 2.4, 2.5, 6.1, and 6.2 on stochastic entropy and ensemble entropy production."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Let $S=\{0,1\}$, with rates $q_{01}=1$ and $q_{10}=9$ seconds$^{-1}$. The positive detailed-balance law is $\pi=(0.9,0.1)$, and take initial law $p_1(0)=1/2$.

## Facts & Assumptions

**Given:** The finite detailed-balance rate model and natural-log Shannon entropy $H(p)=-p\log p-(1-p)\log(1-p)$.

[F1] [[def-td-detailed-balance-rate-model]]: the master equation is $\dot p_1=(1-p_1)q_{01}-p_1q_{10}$.

[F2] [[pthm-td-markov-relative-entropy-and-convergence]]: the theorem controls $D(p\Vert\pi)$; it does not claim that $H(p)$ increases.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-natural-logarithm-laws]]: $(\log x)'=1/x$ for $x>0$, and the natural logarithm is strictly increasing.

## Verification

**Given:** $q_{01}=1$, $q_{10}=9$, and $p_1(0)=1/2$.

1.1 Solving $\dot p_1=1-10p_1$ gives $p_1(t)=0.1+0.4e^{-10t}$, which lies in $(0.1,0.5)$ and strictly decreases for every $t>0$. [given, F1, algebra]

2.1 For $0<p<1/2$, $H'(p)=\log((1-p)/p)>0$ by [F3]. Therefore $dH(p_1(t))/dt=H'(p_1(t))p_1'(t)<0$ for every $t>0$. The Shannon entropy decreases while detailed balance holds. [F3, step 1.1, algebra]

3.1 The two-state rate graph is connected, both components of $p(0)$ and $\pi$ are positive, and detailed balance holds. Thus [F2] applies to the relative entropy $D(p(t)\Vert\pi)$ at the same time that step 2.1 shows the Shannon entropy decreases. [F1, F2, step 1.1, step 2.1] ∎
