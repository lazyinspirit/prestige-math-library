---
id: def-phase-field-gradient-flow-and-double-well
kind: definition
title: Allen–Cahn and Cahn–Hilliard double-well gradient flows
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-sobolev-space-wkp-and-its-norm
  - def-sobolev-extension-domain-and-extension-operator
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - thm-critical-sobolev-embedding-into-every-finite-lq
  - def-axiom-of-choice
justified_by: []
aliases: []
axiom_use: The core definitions do not use a choice axiom. Assume the Axiom of Choice only when invoking the cited d=2 or d=3 Sobolev embedding consequences, whose suppliers declare that hypothesis.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§1, equations (1.1)–(1.5), PDF pp. 1–2: the two no-flux models, their common energy, and their L2 and H−1 gradient-flow identities."
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§1, equations (1.1)–(1.3), PDF pp. 1–2: the H−1 Cahn–Hilliard gradient flow and energy dissipation identity."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\Omega\subset\mathbb R^d$ be a bounded connected Lipschitz domain, let $d\ge1$, and fix constants $\varepsilon>0$, $M>0$, and $\kappa>0$. Put
$$F_\varepsilon(s)=\frac{(s^2-1)^2}{4\varepsilon^2},\qquad f_\varepsilon(s)=F_\varepsilon'(s)=\frac{s^3-s}{\varepsilon^2},$$
and define the free energy on $H^1(\Omega;\mathbb R)\cap L^4(\Omega;\mathbb R)$ by
$$\mathcal E_\varepsilon(u)=\int_\Omega\left(\frac{\kappa}{2}|\nabla u|^2+F_\varepsilon(u)\right)\,dx.$$
Here $H^1=W^{1,2}$ and weak derivatives have the meaning in [[def-sobolev-space-wkp-and-its-norm]]. The finite-energy initial class consists of $u_0\in H^1(\Omega)\cap L^4(\Omega)$.

The **Allen–Cahn gradient flow** is
$$u_t=-M\mu,\qquad \mu=-\kappa\Delta u+f_\varepsilon(u),\qquad \partial_nu=0,\qquad u(0)=u_0.$$
The **Cahn–Hilliard gradient flow** is
$$u_t=M\Delta\mu,\qquad \mu=-\kappa\Delta u+f_\varepsilon(u),\qquad \partial_nu=\partial_n\mu=0,\qquad u(0)=u_0.$$
For weak solutions, the no-flux conditions are encoded by the natural weak formulations with all $H^1(\Omega)$ test functions. In dimensions $d\ge5$, the finite-energy class $H^1\cap L^4$ alone does not in general make $f_\varepsilon(u)$ a continuous functional on $H^1(\Omega)$: it gives only $f_\varepsilon(u)\in L^{4/3}$, while $H^1(\Omega)$ need not embed into $L^4(\Omega)$. Thus any weak solution tested against all $H^1$ functions must have the additional integrability needed to make the nonlinear pairing continuous. The chemical potential $\mu$ is the variational derivative of $\mathcal E_\varepsilon$, and the mobilities select the $L^2$ metric for Allen–Cahn and the mean-zero $H^{-1}$ metric for Cahn–Hilliard. In the Cahn–Hilliard flow, the no-flux equation conserves $\int_\Omega u$; the Allen–Cahn flow has no such conservation law in general. No maximum-principle property is part of these definitions.

The convergence theorem on this page is restricted to one space dimension. Assuming the Axiom of Choice for the following standard embedding consequences, if $d=2$ and $\Omega$ is a bounded $W^{1,p}$ extension domain for every $1<p<2$ as defined in [[def-sobolev-extension-domain-and-extension-operator]], then [[thm-critical-sobolev-embedding-into-every-finite-lq]] gives $H^1(\Omega)\hookrightarrow L^4(\Omega)$. If $d=3$ and $\Omega$ is a bounded $W^{1,2}$ extension domain, then [[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]] gives $H^1(\Omega)\hookrightarrow L^4(\Omega)$. These are the exact extra extension hypotheses for the quartic-energy claim. In dimensions $d\ge4$ no assertion that every $H^1$ state has finite quartic energy is made; the explicit initial class above remains $H^1\cap L^4$. No sharp-interface limit as $\varepsilon\downarrow0$ is part of either definition.
