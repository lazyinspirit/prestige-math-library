---
id: ex-phase-field-ch-two-cell-energy-ledger
kind: example
title: A two-cell Cahn–Hilliard mass and energy ledger
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-phase-field-discrete-realizations
  - thm-phase-field-convex-splitting-step-existence-and-energy
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 10 §§10.1–10.2, printed pp. 63–68, for the Neumann cell graph, conserved mean, and the mean-zero gauge; the two-cell ledger is computed exactly here."
    - title: Jing Guo, Cheng Wang, Steven M. Wise, and Xingye Yue, An H2 convergence of a second-order convex-splitting finite difference scheme for the three-dimensional Cahn–Hilliard equation, Communications in Mathematical Sciences 14 (2016), 489–515
      url: https://www.intlpress.com/site/pub/files/_fulltext/journals/cms/2016/0014/0002/CMS-2016-0014-0002-a008.pdf
      locator: "§1, equation (1.4), PDF pp. 1–2 / printed pp. 489–490: the standard first-order convex-splitting Cahn–Hilliard update."
verification:
  precheck: pending
---

## Example

Take two unit cells on $(0,2)$, one interior face with transmissibility $T=1$, no-flux boundary faces, $\varepsilon=\kappa=M=\tau=1$, and $u^0=(1,-1)$. The discrete mean is zero, and the one-step convex-splitting state is $u^1=(a,-a)$ where $a$ is the unique root in $(0,1)$ of $2a^3+7a-5=0$. The initial energy is $2$ and the new energy is $2a^2+\frac12(1-a^2)^2<2$.

## Facts & Assumptions

**Given:** The two-cell finite-volume realization and the convex-splitting Cahn–Hilliard step.

[F1] [[def-phase-field-discrete-realizations]]: for this two-cell mesh, $m_h(u,v)=u_1v_1+u_2v_2$, $A_h(u_1,u_2)=(u_1-u_2,u_2-u_1)$, and $E_h(u)=\frac12\langle A_hu,u\rangle_h+F(u_1)+F(u_2)$.

[F2] [[thm-phase-field-convex-splitting-step-existence-and-energy]]: the Cahn–Hilliard step is unique, preserves the discrete mean, and does not increase $E_h$.

## Verification

1.1 The initial mean is zero, so mass conservation [F2] forces $u^1=(a,-a)$. Since $A_h(a,-a)=(2a,-2a)$ and $F_c'(s)=s^3+s$, $F_e'(s)=2s$, the first chemical-potential component is $\mu_1=2a+(a^3+a)-2=a^3+3a-2$. The first state equation gives $a-1=-2\mu_1$, hence $2a^3+7a-5=0$. The polynomial is strictly increasing because its derivative is $6a^2+7>0$, and its values at $0$ and $1$ are $-5$ and $4$; therefore it has exactly one root $a\in(0,1)$. [F1, F2, given, algebra]

2.1 The initial gradient energy is $\frac12\langle A_hu^0,u^0\rangle_h=2$ and both potential terms vanish, so $E_h(u^0)=2$. For $u^1=(a,-a)$ the gradient energy is $2a^2$ and the potential energy is $\frac12(1-a^2)^2$. Since $0<a<1$, $(1-a^2)^2<1-a^2$, hence $E_h(u^1)<2=E_h(u^0)$. This is the exact finite ledger for the step. [F1, step 1.1, algebra] ∎
