---
id: alg-scaled-taylor-exponential-action
kind: algorithm
title: "Finite scaled Taylor action for the matrix exponential"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-certified-matvec-and-vector-arithmetic
  - def-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-phi-functions-by-everywhere-convergent-series
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 3, Taylor action recurrence and scaling, printed pp. 492–497; Section 4, roundoff analysis, printed pp. 497–499."
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7.4, Taylor approximation to the exponential action, printed p. 24."
verification:
  precheck: n/a
---

## Definition

**Inputs:** $A\in M_n(\mathbb C)$ with $n\ge1$, a vector $v\in\mathbb C^n$, an exactly represented finite time $t\in\mathbb R$, positive rational tolerance $\varepsilon$, integer budgets $s_{\max}\ge1$ and $p_{\max}\ge0$, rational upper bounds $\rho_A\ge\|A\|_2$, $\rho_t\ge|t|$, and $\rho_v\ge\|v\|_2$, and a provider satisfying [[def-certified-matvec-and-vector-arithmetic]].

For $s\ge1$ define the rational $R_s:=\rho_t\rho_A/s$, which upper-bounds $|t|\|A\|_2/s$. For rational $0\le R\le1$ and integer $p\ge0$, define

$$Q_p(R):=\frac{R^{p+1}}{(p+1)!\left(1-R/(p+2)\right)}.$$

**Outputs:** a vector candidate when returned, an extended nonnegative rational error bound in $\mathbb Q_{\ge0}\cup\{+\infty\}$ ($+\infty$ means no finite certificate was established), the number of calls to $A$, and one status: `success`, `inconclusive-tail-budget`, `inconclusive-roundoff`, or `invalid-input`.

**Procedure:**

1. Reject invalid dimensions, nonpositive tolerance, negative bounds, or invalid budgets by returning no candidate, bound $+\infty$, zero calls to $A$, and `invalid-input`. If $v=0$, $t=0$, or $\rho_A=0$, return $v$, bound $0$, zero calls to $A$, and status `success`. In the last case $\|A\|_2=0$ forces $A=0$.
2. Among pairs $1\le s\le s_{\max}$ and $0\le p\le p_{\max}$ with $R_s\le1$, select one minimizing $sp$ subject to $s\,3^{s-1}Q_p(R_s)\rho_v\le\varepsilon/2$. Break ties by smaller $s$, then smaller $p$. If no pair exists, return the zero vector candidate, bound $+\infty$, and `inconclusive-tail-budget`.
3. Set $\delta:=t/s$ and $w_0:=v$. For each substep $\ell=1,\ldots,s$, initialize $z_0:=w_{\ell-1}$ and $a_0:=w_{\ell-1}$. For $j=1,\ldots,p$, call the certified provider with coefficient $c=\delta/j$ and vector $z_{j-1}$ to obtain $z_j$ and a bound $\alpha_{\ell j}$ for $\|z_j-(\delta/j)Az_{j-1}\|_2$. Add $z_j$ to the partial sum through the provider, obtaining $a_j$ and a bound $\zeta_{\ell j}$ for $\|a_j-(a_{j-1}+z_j)\|_2$. Set $d_{\ell0}:=0$ and compute $d_{\ell j}:=(R_s/j)d_{\ell,j-1}+\alpha_{\ell j}$. Set $w_\ell:=a_p$ and $\epsilon_\ell:=\sum_{j=1}^p(d_{\ell j}+\zeta_{\ell j})$; for $p=0$, set $w_\ell:=w_{\ell-1}$ and $\epsilon_\ell:=0$.
4. If any provider result lacks a sound bound, return the current candidate, bound $+\infty$, and `inconclusive-roundoff`. Otherwise compute $B:=s\,3^{s-1}Q_p(R_s)\rho_v+\sum_{\ell=1}^s3^{s-\ell}\epsilon_\ell$. Return $w_s$, bound $B$, and `success` if $B\le\varepsilon$; otherwise return the same candidate and bound with `inconclusive-roundoff`.

The pair search is finite. The recurrence makes exactly $sp$ calls to $A$ when it reaches step 4; the error-bound provider performs no additional $A$ calls. An implementation may return an inconclusive status whenever an outward scalar comparison or a local error certificate cannot be established.

## Well-definedness and guarantee boundary

There are at most $s_{\max}(p_{\max}+1)$ pairs in the search, and for every admissible $R\in[0,1]$ and $p\ge0$ the denominator $1-R/(p+2)$ is at least $1/2$, so each $Q_p(R)$ is defined. Every matrix-vector and partial-sum loop has a finite bound. The zero branches are exact: $v=0$ gives the zero action, $t=0$ gives $e^{0A}v=v$, and $\rho_A=0$ forces $A=0$. A failed local certificate stops with `inconclusive-roundoff`; failure to find a pair within the declared budgets returns `inconclusive-tail-budget`. Neither status asserts an error guarantee.

The separate error/work theorem on this page proves the reported bound under the stated rational input bounds and successful local provider certificates. Finite budgets need not return `success`; no convergence claim beyond this conditional finite certificate is made. The count $sp$ is the exact matrix-vector call count for a completed recurrence, not a claim about wall-clock cost.
