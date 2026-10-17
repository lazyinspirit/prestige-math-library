---
id: alg-frozen-slow-explicit-fast-euler
title: "Frozen-slow explicit Euler with fast microsteps"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Michael Günther, Numerical Analysis and Simulation I — Ordinary Differential Equations, Chapter 4: Multirate Schemes (lecture notes, 2017/18)"
      url: "https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf"
---

## Definition

Let $r,s\ge1$, let $D\subseteq\mathbb R^{r+s}$ be open, and let $f:D\to\mathbb R^r$ and $g:D\to\mathbb R^s$ be the designated slow and fast vector fields. The labels “slow” and “fast” are input partition labels; this definition does not assert that either field actually varies at a specified rate. The routine receives proposed state vectors $x,z$, a real macro step $H$, and a microstep count $m$.

**Procedure.**

1. Before any division or field evaluation, check that $x\in\mathbb R^r$, $z\in\mathbb R^s$, $H>0$, $m$ is an integer with $m\ge1$, and $(x,z)\in D$. If any check fails, return `invalid-input`.
2. Set $h:=H/m$ and evaluate $f(x,z)$ to set $x^+:=x+Hf(x,z)$.
3. Set $z_0:=z$.
4. For $j=0,1,\ldots,m-1$, first check whether $(x,z_j)\in D$. If not, return `domain-exit` without a macro-step output. Otherwise evaluate $g(x,z_j)$ and set $z_{j+1}:=z_j+h g(x,z_j)$.
5. If $(x^+,z_m)\notin D$, return `domain-exit` without a macro-step output. Otherwise return `success` and the output state $(x^+,z_m)$.

For inputs on which the procedure succeeds, write its output map as $\Psi_{H,m}(x,z):=(x^+,z_m)$.

On a successful step the procedure uses exactly one evaluation of $f$ and $m$ evaluations of $g$; an invalid-input return uses no field evaluations, and a domain-exit return uses no more than these counts. The slow state is held at its initial value during every fast microstep. In a separated implementation, the slow update needs the starting fast value $z_0$, while the fast loop needs the starting slow value $x$; $x$ can be sent to the fast worker once and cached for all $m$ microsteps, with no fast-to-slow refresh during the block. The actual communication cost depends on the implementation. The evaluation counts alone give no wall-clock saving claim, especially when the fast block accounts for nearly all right-hand-side work.
