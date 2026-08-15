---
id: def-homogeneous-set-and-homogeneous-number
kind: definition
title: "Homogeneous vertex sets and the homogeneous number $\\operatorname{hom}(G)=\\max\\{\\omega(G),\\alpha(G)\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-clique-stable-set-and-numbers]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite graph. A vertex set $S\subseteq V(G)$ is **homogeneous** if it is a clique or a stable set in $G$ ([[def-clique-stable-set-and-numbers]]). The **homogeneous number** of $G$ is
$$\operatorname{hom}(G):=\max\{\omega(G),\alpha(G)\}.$$

For the null graph, the published conventions give $\omega(G)=\alpha(G)=0$, and hence $\operatorname{hom}(G)=0$.
