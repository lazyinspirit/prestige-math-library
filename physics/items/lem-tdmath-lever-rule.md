---
id: lem-tdmath-lever-rule
kind: lemma
title: "The two-point lever rule on a scalar interval"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-complete-ordered-field
  - def-interval
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-interval: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §1"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §1.1"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let $v_a,v_b\in\mathbb R$ with $v_a<v_b$. A fraction $\lambda\in[0,1]$ satisfies $v=(1-\lambda)v_a+\lambda v_b$ exactly when $v\in[v_a,v_b]$ and

$$\lambda=\frac{v-v_a}{v_b-v_a}.$$

This fraction is unique. At $v=v_a$ it is $0$, and at $v=v_b$ it is $1$; no admissible fraction gives a value outside the endpoint interval.

## Facts & Assumptions

**Given:** Ordered real numbers $v_a<v_b$, an interval point $v\in\mathbb R$, and a mixing fraction $\lambda\in[0,1]$.

[F1] [[def-complete-ordered-field]]: $\mathbb R$ is an ordered field, so division by the positive number $v_b-v_a$ is valid and preserves inequalities.

[F2] [[def-interval]]: $[0,1]=\{\lambda\in\mathbb R:0\le\lambda\le1\}$.

## Proof

**Proof technique:** direct.

1.1 From $v=(1-\lambda)v_a+\lambda v_b$ one obtains $v-v_a=\lambda(v_b-v_a)$. Since $v_b-v_a>0$ and $0\le\lambda\le1$, this gives $v_a\le v\le v_b$ and forces $\lambda=(v-v_a)/(v_b-v_a)$. [F1, F2, given, algebra]

2.1 Conversely, if $v_a\le v\le v_b$, the quotient $\lambda=(v-v_a)/(v_b-v_a)$ lies in $[0,1]$ and substitution gives $v=(1-\lambda)v_a+\lambda v_b$. The same forced quotient proves uniqueness and yields the two endpoint values. [F1, F2, step 1.1, algebra] ∎
