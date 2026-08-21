---
id: def-locally-lipschitz-in-the-state-variable
kind: definition
title: "Local Lipschitz continuity in the state variable, locally uniform in time and parameters"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-first-order-ode-initial-value-problem-and-solution, def-lipschitz-holder-contraction, lem-metrics-on-rn]
justified_by: []
forward_refs: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$ with $n\ge1$, let $D\subseteq\mathbb R\times\mathbb R^n$ be open, and let $F:D\to\mathbb R^n$. The map $F$ is **locally Lipschitz in the state variable, locally uniformly in time**, if every compact time-state cylinder $C\subseteq D$ has a finite $L\ge0$ such that

$$\|F(t,x)-F(t,y)\|_2\le L\|x-y\|_2$$

whenever $(t,x),(t,y)\in C$ have the same time coordinate.

On every compact time-state cylinder the state-variable inequality holds with one finite constant $L$. More generally, let $p\ge1$, let $\Lambda\subseteq\mathbb R^p$, let $D_\Lambda\subseteq\mathbb R\times\mathbb R^n\times\Lambda$ be open in its relative Euclidean topology, and let $F:D_\Lambda\to\mathbb R^n$. The parameter family is **locally Lipschitz in the state variable, locally uniform in time and parameters** when every compact time-state-parameter cylinder $C\subseteq D_\Lambda$ has one finite $L\ge0$ such that

$$\|F(t,x,\lambda)-F(t,y,\lambda)\|_2\le L\|x-y\|_2$$

whenever $(t,x,\lambda),(t,y,\lambda)\in C$ have the same time and parameter coordinates.
