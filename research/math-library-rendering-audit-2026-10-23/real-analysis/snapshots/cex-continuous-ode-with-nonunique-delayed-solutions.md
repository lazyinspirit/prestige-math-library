---
id: cex-continuous-ode-with-nonunique-delayed-solutions
kind: counterexample
title: "$y'=2\\sqrt{|y|}$ has a continuum of delayed-start solutions through the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-peano-local-existence-for-continuous-odes, def-locally-lipschitz-in-the-state-variable, def-rational-power]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement refuted

Continuity of the right-hand side of a first-order IVP is enough for uniqueness. The continuous field $f(y)=2\sqrt{|y|}$ refutes this: $y'=2\sqrt{|y|}$ has distinct delayed-start solutions through the origin.

## Facts & Assumptions

**Given:** For each $c\ge0$, define $y_c(t)=0$ for every $t\le c$ and $y_c(t)=(t-c)^2$ for $t\ge c$.

[L1] For rational $r>0$, $0^r=0$ ([[def-rational-power]]).

[L2] Local state-Lipschitz continuity requires one finite constant bounding the state difference quotient near the point ([[def-locally-lipschitz-in-the-state-variable]]).

## Counterexample

**Proof technique:** direct.

1.1 On the first piece $y_c'=0=2\sqrt{|y_c|}$ by [L1], on the second $y_c'=2(t-c)=2\sqrt{(t-c)^2}$, and at $t=c$ both one-sided derivatives are $0$, so every $y_c$ is a solution through $(0,0)$. [given, L1, algebra]

2.1 Distinct delays give distinct solutions, while $|f(y)-f(0)|/|y|=2/\sqrt y$ for $y>0$, so [L2] rules out every finite local Lipschitz constant at zero. [step 1.1, L2, algebra] ∎
