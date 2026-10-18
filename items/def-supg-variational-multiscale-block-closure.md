---
id: def-supg-variational-multiscale-block-closure
kind: definition
title: "Finite-dimensional resolved–unresolved VMS split and residual closure"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Thomas J. R. Hughes, Guglielmo Scovazzi, and Leopoldo P. Franca, Multiscale and Stabilized Methods, Encyclopedia of Computational Mechanics, ICES Report 04-18 (2004)"
      url: "https://www.oden.utexas.edu/media/reports/2004/0418.pdf"
      locator: "§§3.1–3.2.2: exact coarse/fine space decomposition, residual-driven fine scales, and the distinction between the exact fine-scale Green operator and its approximation."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: residual-based stabilization, its norm, and parameter-dependent coercivity."
---

## Definition

Let $X_c$ and $X_f$ be finite-dimensional real vector spaces and set $X=X_c\oplus X_f$; elements are written $(u_c,u_f)$, with $u_c$ the resolved component and $u_f$ the unresolved component. For a real vector space $Y$, let $Y^*$ be its space of real linear functionals. Let $A_{cc}:X_c\to X_c^*$, $A_{cf}:X_f\to X_c^*$, $A_{fc}:X_c\to X_f^*$, and $A_{ff}:X_f\to X_f^*$ be linear maps, with $A_{ff}$ invertible, and let $F_c\in X_c^*$ and $F_f\in X_f^*$. The linear equation on $X$ has block form
$$\begin{pmatrix}A_{cc}&A_{cf}\\A_{fc}&A_{ff}\end{pmatrix}\begin{pmatrix}u_c\\u_f\end{pmatrix}=\begin{pmatrix}F_c\\F_f\end{pmatrix}.$$
The fine residual for a resolved vector $v_c$ is $r_f(v_c):=F_f-A_{fc}v_c$. Exact elimination gives $u_f=A_{ff}^{-1}r_f(u_c)$ and the Schur equation
$$\left(A_{cc}-A_{cf}A_{ff}^{-1}A_{fc}\right)u_c=F_c-A_{cf}A_{ff}^{-1}F_f.$$

A **residual closure** selects a linear map $T:X_f^*\to X_f$ to approximate the exact inverse $A_{ff}^{-1}:X_f^*\to X_f$. It defines $\widetilde A_{cc}:=A_{cc}-A_{cf}TA_{fc}$, $\widetilde F_c:=F_c-A_{cf}TF_f$, and the modeled fine component $\widetilde u_f:=T r_f(\widetilde u_c)$, where $\widetilde u_c$ solves $\widetilde A_{cc}\widetilde u_c=\widetilde F_c$. This is a finite-dimensional algebraic closure; an application to a PDE requires its own residual, spaces, invertibility, and approximation-defect analysis.

