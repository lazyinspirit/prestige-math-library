---
id: ex-nelder-mead-flat-plateau-stagnation
kind: example
title: "Nelder–Mead can stop on a nonminimizing flat plateau"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-nelder-mead-finite-budget
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
    - title: "K. I. M. McKinnon, Convergence of the Nelder–Mead Simplex Method to a Nonstationary Point, §§2–3"
      url: https://www.ime.unicamp.br/~sandra/MT853/handouts/Ref5%28McKinnon1998%29.pdf
verification:
  precheck: pass
---

## Example
Define the continuous objective on $\mathbb R$ by $f(x)=0$ for $x\le2$, $f(x)=2-x$ for $2<x<3$, and $f(x)=-1$ for $x\ge3$. Run [[alg-nelder-mead-finite-budget]] from the one-dimensional simplex $(0,1)$ with diameter tolerance $0.1$, spread tolerance $0.01$, and call budget $14$. It returns **tolerance-met** after four shrink updates, with simplex $(0,1/16)$, returned best point $0$, and objective spread $0$, although the global minimum is $-1$ on $[3,\infty)$.

## Facts & Assumptions

**Given:** Exact branch comparisons, tie rules, shrink rule, tolerance test, and call accounting [[alg-nelder-mead-finite-budget]].

[A1] The stated piecewise formula defines $f$ on all of $\mathbb R$; its pieces agree at $2$ and $3$.

[F1] The algorithm keeps the lower-slot vertex on objective ties, uses strict inside-contraction acceptance, and shrinks toward the best vertex ([[alg-nelder-mead-finite-budget]]).

## Verification
1.1 The two initial values at $0,1$ are both $0$; the slot tie rule makes $0$ best and $1$ worst. At a simplex $(0,h)$ with $0<h\le1$, reflection is $-h$, with value $0=f(h)$. Since the reflected value ties the worst value, the inside-contraction branch applies; its point is $h/2$ and also has value $0$, so strict inside-contraction acceptance fails and shrink produces $(0,h/2)$. [given, A1, F1, algebra]

2.1 Starting at $h=1$, four repetitions give $h=1/16=0.0625<0.1$ and the spread remains $0<0.01$. Initial evaluations use two calls and each iteration uses reflection plus inside contraction, so the total is $2+4\cdot2=10\le14$ calls. All evaluated points lie in $[-1,1]\subset(-\infty,2]$, where the objective is flat; meanwhile $f(x)\ge-1$ everywhere and equals $-1$ for $x\ge3$. Thus the prescribed finite tolerance is met at a non-global minimizer. [given, step 1.1, algebra] ∎

