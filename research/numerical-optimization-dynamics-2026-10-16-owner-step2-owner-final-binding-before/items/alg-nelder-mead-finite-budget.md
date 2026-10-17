---
id: alg-nelder-mead-finite-budget
kind: algorithm
title: "Finite-budget Nelder–Mead simplex procedure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-finite-sum
  - def-linear-combination-and-span
  - lem-finite-set-has-max
  - def-max-min
justified_by:
  - lem-nelder-mead-finite-budget-returns-status
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
    - title: "K. I. M. McKinnon, Convergence of the Nelder–Mead Simplex Method to a Nonstationary Point, §§2–3"
      url: https://www.ime.unicamp.br/~sandra/MT853/handouts/Ref5%28McKinnon1998%29.pdf
verification:
  precheck: n/a
---

## Definition
Finite sums of vectors in $\mathbb R^n$ use the additive finite-list sum of [[def-linear-combination-and-span]]; sums of real coefficients use [[def-finite-sum]].

Fix $n\ge1$, an objective oracle $f:\mathbb R^n\to\mathbb R\cup\{\text{nonfinite}\}$, a finite integer call budget $B\ge0$, positive tolerances $\varepsilon_x,\varepsilon_f$, and an ordered initial simplex $(v_0,\ldots,v_n)$. Call the ordered tuple nondegenerate when, for real coefficients $\lambda_1,\ldots,\lambda_n$, $\sum_{i=1}^n\lambda_i(v_i-v_0)=0$ implies every $\lambda_i=0$. Use reflection $\alpha=1$, expansion $\gamma=2$, contraction $\rho=1/2$, and shrink $\sigma=1/2$. Ties in sorting objective values are broken by current vertex slot, lower slot first. When recording the best point seen, replace it only on a strict objective improvement, so ties retain the earliest evaluation; initial vertices are evaluated in slot order.

If the initial simplex is degenerate, return **degenerate-simplex**. If $B<n+1$, return **budget-exhausted** with zero calls and no best point. Otherwise evaluate initial vertices in slot order, counting every call. A nonfinite result returns **nonfinite-objective** and the best finite point seen, if any. For each committed simplex, let $x_b$ be its sorted best vertex, $x_w$ its worst, let $x_2$ denote the second-worst (the best when $n=1$), and set $c:=n^{-1}\sum_{i=0}^{n-1}x_i$ using the sorted vertices $x_0,\ldots,x_n$. Define the diameter $D=\max_{0\le i,j\le n}\|x_i-x_j\|_2$, and spread $S=f(x_w)-f(x_b)$. Stop with **tolerance-met** exactly when both $D\le\varepsilon_x$ and $S\le\varepsilon_f$.

Otherwise evaluate reflection $x_r=c+(c-x_w)$. If $f(x_r)<f(x_b)$, evaluate expansion $x_e=c+2(x_r-c)$ and replace $x_w$ by $x_e$ iff $f(x_e)<f(x_r)$; a tie keeps reflection. If $f(x_b)\le f(x_r)<f(x_2)$, where $x_2$ is the second-worst vertex, replace $x_w$ by reflection. If $f(x_2)\le f(x_r)<f(x_w)$, evaluate outside contraction $x_{oc}=c+(x_r-c)/2$ and accept iff $f(x_{oc})\le f(x_r)$; equality accepts. If $f(x_r)\ge f(x_w)$, evaluate inside contraction $x_{ic}=c+(x_w-c)/2$ and accept iff $f(x_{ic})<f(x_w)$; equality fails. A failed contraction shrinks each nonbest vertex to $x_b+(v_i-x_b)/2$.

Count every objective call, including rejected trials. Before a needed call, if the budget is exhausted, return **budget-exhausted** with the last committed simplex and best finite point seen; do not partially commit an update. A nonfinite trial returns **nonfinite-objective** with the same committed simplex. If a proposed complete update is degenerate, return **degenerate-simplex** without committing it. After a valid update, recheck both tolerances. No general convergence guarantee is asserted.
