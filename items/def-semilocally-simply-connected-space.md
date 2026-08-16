---
id: def-semilocally-simply-connected-space
kind: definition
title: "Semilocally simply connected spaces with explicit basepoint convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-induced-homomorphism-on-fundamental-groups, def-neighbourhood-top, def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Definition

A space $X$ is **semilocally simply connected at $x\in X$** when there is a neighbourhood $U$ of $x$ and a basepoint-preserving inclusion $(U,x)\hookrightarrow(X,x)$ whose induced map on fundamental groups is trivial ([[def-neighbourhood-top]], [[def-induced-homomorphism-on-fundamental-groups]], [[def-based-loops-and-fundamental-group]]). It is semilocally simply connected when this holds at every point. The neighbourhood need not itself be simply connected.

