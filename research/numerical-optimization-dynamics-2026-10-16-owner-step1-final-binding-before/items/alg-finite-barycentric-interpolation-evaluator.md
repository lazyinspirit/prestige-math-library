---
id: alg-finite-barycentric-interpolation-evaluator
kind: algorithm
title: "Finite barycentric interpolation evaluator"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-cardinal-polynomial-interpolation
  - thm-barycentric-interpolation-identities
  - def-standard-relative-floating-point-model-and-unit-roundoff
justified_by:
  - prop-finite-barycentric-interpolation-evaluator-returns-status
aliases: []
landmark: false
verification:
  precheck: pending
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
---

## Definition

The input is a natural number $n\ge0$, a floating-point system $(\mathbb F,N_{\min},N_{\max},\operatorname{fl})$ satisfying [[def-standard-relative-floating-point-model-and-unit-roundoff]], a node array of exactly $n+1$ candidates $x_0,\ldots,x_n$, a data array of exactly $n+1$ values $y_0,\ldots,y_n$, and a query $x$. The output is either a record with status *success* and a value in $\mathbb F$, or one of the statuses *invalid_nodes*, *invalid_data*, and *range_failure*.

Use checked operations as follows. For $a,b\in\mathbb F$ and $\circ\in\{+,-,\times,\div\}$, return *range_failure* if division has $b=0$ or if the exact real result $a\circ b$ is nonzero and outside the normal range $N_{\min}\le|a\circ b|\le N_{\max}$. Otherwise return $\operatorname{fl}(a\circ b)$, using the exact-zero rule when the result is zero. Each checked operation has the tagged outcome either *range_failure* or a value in $\mathbb F$; if an operation in a displayed sequence returns *range_failure*, stop before evaluating the next operation and return that status. Thus $\operatorname{fl}$ is called only on arguments in the domain of the stated model.

Procedure:

1. If the node array has length other than $n+1$, any node is not in $\mathbb F$, or the nodes are not strictly increasing, return *invalid_nodes*. If the data array has length other than $n+1$, or any data value or the query is not in $\mathbb F$, return *invalid_data*.
2. If $x=x_i$ for some $i$, return *success* with value $y_i$.
3. For each $j=0,\ldots,n$, initialize $d_j=1$. For each $k=0,\ldots,n$ with $k\ne j$, compute $\delta=\operatorname{checked}_{-}(x_j,x_k)$ and then replace $d_j$ by $\operatorname{checked}_{\times}(d_j,\delta)$. After this inner loop set $w_j=\operatorname{checked}_{\div}(1,d_j)$. Any checked-operation failure returns *range_failure*.
4. Initialize $N=0$ and $D=0$. For each $j=0,\ldots,n$, compute $\delta_j=\operatorname{checked}_{-}(x,x_j)$, $u_j=\operatorname{checked}_{\div}(\operatorname{checked}_{\times}(w_j,y_j),\delta_j)$, and $v_j=\operatorname{checked}_{\div}(w_j,\delta_j)$. Replace $N$ by $\operatorname{checked}_{+}(N,u_j)$ and $D$ by $\operatorname{checked}_{+}(D,v_j)$. Any checked-operation failure returns *range_failure*.
5. If $D=0$, return *range_failure*. Otherwise return *success* with value $\operatorname{checked}_{\div}(N,D)$, unless that final checked operation returns *range_failure*.

The exact-arithmetic target of steps 3–5 is the quotient in [[thm-barycentric-interpolation-identities]]. This finite-arithmetic procedure provides no forward-error bound, conditioning guarantee, or accuracy certificate; close or widely separated nodes can cause a range failure or an inaccurate successful value.
