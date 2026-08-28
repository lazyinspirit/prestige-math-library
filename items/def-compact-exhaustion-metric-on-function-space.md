---
id: def-compact-exhaustion-metric-on-function-space
kind: definition
title: "The exhaustion metric on a function space over a plane domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-canonical-compact-exhaustion-of-a-plane-domain]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Definition

Fix a plane domain $\Omega$ and a compact exhaustion $(K_n)_{n\ge1}$ of $\Omega$;
for this page the canonical exhaustion of
[[lem-canonical-compact-exhaustion-of-a-plane-domain]] is the default choice.
For functions $f,g:\Omega\to\mathbb C$, set
$$s_n(f,g):=\begin{cases}0,&K_n=\varnothing,\\ \sup_{z\in K_n}|f(z)-g(z)|,&K_n\neq\varnothing.\end{cases}$$
and define the **exhaustion metric** by
$$d_K(f,g):=\sum_{n\ge1}2^{-n}\min\bigl(1,s_n(f,g)\bigr).$$

Here the supremum is taken in $[0,\infty]$, so $s_n(f,g)=+\infty$ is allowed,
and $\min(1,+\infty):=1$. Thus each summand is a real number in
$[0,2^{-n}]$, so the series converges absolutely. The
metric is used on spaces of continuous or holomorphic functions on $\Omega$; the
next theorem shows that its convergent sequences are exactly the locally
uniformly convergent ones.
