---
id: fs-continuous-dependence-alone-implies-differentiable-dependence
kind: false-statement
title: "Continuous dependence does not by itself imply differentiable dependence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-continuous-dependence-of-odes-on-initial-data-and-parameters,
       thm-c1-dependence-of-solutions-on-initial-data,
       thm-smooth-dependence-of-solutions-on-initial-data]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

**False claim:** once solutions depend continuously on data, they automatically
depend differentiably on that data.

## Facts & Assumptions

**Given:** The parameter-dependent scalar ODE $x'(t)=|\lambda|$, $x(0)=0$.

[L1] Continuous dependence on initial data and parameters is weaker than the $C^1$ and smooth dependence theorems that require derivative hypotheses ([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]], [[thm-c1-dependence-of-solutions-on-initial-data]], [[thm-smooth-dependence-of-solutions-on-initial-data]]).

## Refutation

**Proof technique:** direct.

1.1 For each parameter $\lambda\in\mathbb R$, the unique solution is [L1] $x(t;\lambda)=|\lambda|\,t$. This depends continuously on $\lambda$ for every fixed $t$. [L1]

2.1 At every fixed $t>0$, the map $\lambda\mapsto|\lambda|\,t$ is not [step 1.1] differentiable at $\lambda=0$. Thus continuous dependence does occur, but differentiable dependence fails. [step 1.1]

3.1 Therefore continuous dependence alone does not imply differentiable [L1, step 2.1] dependence. [L1, step 2.1] ∎
