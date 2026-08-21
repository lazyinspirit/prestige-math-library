---
id: cex-discontinuous-right-hand-side-with-no-local-solution
kind: counterexample
title: "The Dirichlet right-hand side gives a first-order equation with no solution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution, def-dirichlet-and-thomae-functions, thm-darboux-theorem-for-derivatives, lem-q-and-irrationals-dense-r]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
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

Every scalar right-hand side admits a local solution. Let $F(t,y)=\mathbf1_{\mathbb Q}(t)$; then $y'=F(t,y)$ has no solution on any nondegenerate interval, for any initial value.

## Facts & Assumptions

**Given:** The Dirichlet field $F(t,y)=\mathbf1_{\mathbb Q}(t)$.

[L1] Every derivative has the intermediate-value property ([[thm-darboux-theorem-for-derivatives]]).

[L2] The Dirichlet function is the indicator of the rationals ([[def-dirichlet-and-thomae-functions]]).

[L3] The rationals and irrationals are both dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [L2] and [L3], $F$ takes only $0$ and $1$, and takes both values on every nondegenerate interval. [given, L2, L3]

2.1 Suppose a differentiable solution existed; its derivative would equal $F$ but omit every value strictly between $0$ and $1$, contrary to [L1], so no local solution exists. [step 1.1, L1, assume-contra, discharge-contradiction] ∎
