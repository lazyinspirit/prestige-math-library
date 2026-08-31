---
id: def-minres-iterate-from-the-lanczos-tridiagonalization
kind: definition
title: "The MINRES iterate from the Lanczos tridiagonal least-squares problem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence,
       thm-least-squares-solutions-and-normal-equation]
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Definition

Let $A$ be Hermitian, let $x_0$ be an initial guess for $Ax=b$, let
$r_0=b-Ax_0$, and put $\beta=\|r_0\|_2$. Assume Lanczos runs through step $m$
without breakdown and yields

$$AQ_m=Q_{m+1}\bar T_m,\qquad r_0=\beta q_1=\beta Q_{m+1}e_1,$$

with $\bar T_m$ tridiagonal in the sense of
[[thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence]]. A
vector

$$x_m:=x_0+Q_my_m$$

is an **$m$th MINRES iterate** when $y_m$ minimizes

$$\|\beta e_1-\bar T_my\|_2$$

over all $y\in\mathbb C^m$. Such a minimizer exists by
[[thm-least-squares-solutions-and-normal-equation]].

