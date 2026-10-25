---
id: prop-solutions-compose-under-a-change-of-initial-time
kind: proposition
title: "Solutions compose under a change of initial time"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-the-maximal-solution-domain-is-open,
       lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]
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

Let $\Phi(t,x_0)$ denote the maximal solution map of a smooth autonomous vector
field. Whenever both sides are defined,

$$\Phi(t,\Phi(s,x_0))=\Phi(t+s,x_0).$$

Equivalently, changing the initial time along a trajectory composes solutions.

## Facts & Assumptions

**Given:** A smooth autonomous vector field, its maximal solution map $\Phi$, a state $x_0$, and times $s,t$ such that both sides of the displayed equation are defined.

[F1] The maximal solution domain is open ([[prop-the-maximal-solution-domain-is-open]]).

[L1] Two locally unique solutions of the same ODE that agree at a time agree on their common interval of definition ([[lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]]).

## Proof

**Proof technique:** direct.

1.1 The curve $u\mapsto \Phi(u+s,x_0)$ solves the ODE and at time $u=0$ has value [F1, L1] $\Phi(s,x_0)$. The curve $u\mapsto\Phi(u,\Phi(s,x_0))$ also solves the same ODE and has the same value at time $0$. Because [F1] makes both curves defined on an open interval about every common time where they exist, [L1] applies and forces them to agree on their common domain. [F1, L1]

2.1 Evaluating the equality from step 1.1 at the time $u=t$ gives [step 1.1] $\Phi(t,\Phi(s,x_0))=\Phi(t+s,x_0)$ whenever both sides are defined. [step 1.1] ∎
