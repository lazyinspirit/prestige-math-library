---
id: ex-window-edge-border-estimator
kind: example
title: "A finite window makes the border correction weight visible"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 8
deps:
  - alg-border-corrected-ripleys-k-estimator
  - def-pair-correlation-and-ripleys-k-function
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.6, border method and formula (18), PDF pp.39–40."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, §§8.2–8.3, PDF pp.83–85: K-function target and boundary discussion."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take $W=[0,1]\subset\mathbb R$, radius $r=1/4$, and observed occurrences at $0.1,0.4,0.5,0.9$. The border window is $W_{-r}=[1/4,3/4]$: the two boundary anchors are excluded because their full closed $r$-neighborhoods are not observed. The two eligible anchors each have one observed partner within distance $r$.

## Verification

**Given:** The border-estimator procedure of [[alg-border-corrected-ripleys-k-estimator]], $W=[0,1]$, $r=1/4$, and $\xi=\delta_{0.1}+\delta_{0.4}+\delta_{0.5}+\delta_{0.9}$.

[F1] $W_{-r}=\{x\in W:[x-r,x+r]\subseteq W\}$; the anchor weight is $1$ on $W_{-r}$ and $0$ outside, and the output is the eligible ordered-pair sum divided by $\widehat\rho N(W_{-r})$. ([[alg-border-corrected-ripleys-k-estimator]])

[F2] For an eligible anchor, the entire closed radius-$r$ interval is inside the observation window, so all radius-$r$ partner occurrences are observed. ([[alg-border-corrected-ripleys-k-estimator]])

[A1] AC and Countable Choice are inherited through the estimator's K and point-process dependencies; this finite calculation uses no choices. ([[def-axiom-of-choice]], [[def-countable-choice]])

1.1 For $x\in[0,1]$, the condition $[x-1/4,x+1/4]\subseteq[0,1]$ is equivalent to $x\ge1/4$ and $x\le3/4$. Therefore $W_{-r}=[1/4,3/4]$ and the anchor weights at $0.1,0.4,0.5,0.9$ are respectively $0,1,1,0$. [F1, construct, algebra]

2.1 The eligible anchor at $0.4$ has only $0.5$ as a distinct occurrence within distance $1/4$; the eligible anchor at $0.5$ has only $0.4$. Thus the ordered-pair numerator is $2$, $N(W_{-r})=2$, $N(W)=4$, and $\widehat\rho=4/|W|=4$. The border procedure returns $2/(4\cdot2)=1/4$. [step 1.1, F1, algebra]

3.1 The excluded anchor $0.1$ has a radius-$1/4$ interval extending to $-0.15$ outside $W$, so its complete neighborhood is not observed; the anchor $0.4$ has $[0.15,0.65]\subseteq W$, as guaranteed by [F2]. This calculation verifies the procedure's edge-exposure rule only and proves no finite-sample unbiasedness claim. AC and Countable Choice [A1] are inherited supplier assumptions. [A1, step 1.1, step 2.1, F2] ∎

## Sources

Baddeley, Lecture 2, §2.6, formula (18); Last and Penrose, Chapter 8, spatial K-function discussion. This is a geometric example, not an unbiasedness result.
