---
id: rem-fd-frontier-status-separation
kind: remark
title: Research status for the Navier–Stokes regularity frontier
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: physics
library: physics
physical_scope: "Dated status reporting for the mathematical regularity problem of the three-dimensional incompressible constant-density Navier–Stokes model; it makes no empirical claim about real-fluid singularities and supplies no accepted proof."
deps: []
dependency_roles: {}
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles L. Fefferman, ‘Existence and Smoothness of the Navier–Stokes Equation,’ in The Millennium Prize Problems (Clay Mathematics Institute, 2006)"
      url: "https://www.claymath.org/library/monographs/MPPc.pdf"
      locator: "Fefferman chapter, printed pp. 57–59, equations (1)–(11) and alternatives (A)–(D); full volume retrieved and inspected."
    - title: "Clay Mathematics Institute, Navier-Stokes Equation, current Millennium Prize Problem page"
      url: "https://www.claymath.org/millennium/Navier-Stokes-Equation/"
      locator: "Current page status label ‘Active’ and problem overview; checked 2026-10-23 Australia/Sydney."
    - title: "Clay Mathematics Institute, Navier-Stokes Announcement, 11 September 2026"
      url: "https://www.claymath.org/news/navier-stokes-announcement/"
      locator: "Complete announcement, especially its announced-status and evaluation paragraphs."
    - title: "OpenAI, On the Navier–Stokes Millennium Prize Problem, 8 September 2026"
      url: "https://openai.com/index/navier-stokes-solution/"
      locator: "Complete announcement, ‘The result’ section; source for the authors’ reported claim only."
    - title: "OpenAI, Finite Time Blowup for Navier–Stokes, 2026 preprint"
      url: "https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf"
      locator: "Abstract and Theorem 1.1, PDF p. 1; the complete 166-page proof was not independently audited in this authoring work."
    - title: "Anastasios Bastounis, Yiannis Circelli, and Anders C. Hansen, Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs, arXiv:2610.08144v1 (6 October 2026)"
      url: "https://arxiv.org/pdf/2610.08144v1"
      locator: "Disclaimer, §3.1 Example 3.1, §3.2 Example 3.3, and §3.2.1; the authors analyze correspondence with Lean and disclaim a verdict on correctness of the natural-language proof."
verification:
  precheck: pending
---

## Remark

Use the whole-space, incompressible constant-density Navier–Stokes equations in Euclidean coordinates as the formulation under discussion:

$$\partial_t u+(u\cdot\nabla)u-\nu\Delta u+\nabla p=f,\qquad \nabla\cdot u=0.$$

Here $u:\mathbb R^3\times[0,\infty)\to\mathbb R^3$ is velocity in metres per second. Let $\rho_0>0$ be the constant mass density in kilograms per cubic metre. The scalar fields $P,p:\mathbb R^3\times[0,\infty)\to\mathbb R$ are the mechanical pressure $P$ in pascals and the reduced pressure $p:=P/\rho_0$ in square metres per square second. The vector field $f:\mathbb R^3\times[0,\infty)\to\mathbb R^3$ is force per unit mass in metres per square second. Fix a constant kinematic viscosity $\nu>0$ in square metres per second. In the global smooth solution assertions below, $u,P,p$ are $C^\infty$ on this space-time domain; the admissible forcing $f$ is also $C^\infty$ there. Set reference scales $\ell_0:=1\,\mathrm m$ and $\tau_0:=1\,\mathrm s$ for the dimensionless decay weights below. The gradient and Laplacian act in $x$, with $(u\cdot\nabla)u_i:=\sum_{j=1}^3u_j\partial_{x_j}u_i$, $\Delta u_i:=\sum_{j=1}^3\partial_{x_j}^2u_i$, and $\nabla\cdot u:=\sum_{j=1}^3\partial_{x_j}u_j$; incompressible means $\nabla\cdot u=0$. Smooth means that all space-time partial derivatives of all orders exist and are continuous for $t>0$ and extend continuously to $t=0$, with time derivatives there interpreted from the right. Define the kinetic-energy functional normalized by the constant density as $E(t):=\frac12\int_{\mathbb R^3}|u(x,t)|^2\,dx$, with SI units $\mathrm{m^5\,s^{-2}}$, and the mechanical kinetic energy as $K(t):=\rho_0E(t)$, in joules. Fefferman's bounded-energy condition is $\sup_{t\ge0}E(t)<\infty$, equivalently $\sup_{t\ge0}K(t)<\infty$ for this fixed positive $\rho_0$. The equation is a mathematical model; no measured flow or physical singularity is asserted. The period-one comparison domain is $\mathbb T^3:=\mathbb R^3/\mathbb Z^3$ in nondimensional coordinates $X=x/\ell_0$; in SI spatial coordinates, period one means $g(x+\ell_0e_j,t)=g(x,t)$ for each standard coordinate vector $e_j$ and every $t$.

Fefferman’s alternatives are four distinct assertions. Alternative A is the whole-space unforced assertion: for every smooth divergence-free initial field $u^0$ satisfying the stated whole-space decay bound, there exists a global smooth pair $p,u$ solving the displayed equation with $f=0$, $\nabla\cdot u=0$, and $u(x,0)=u^0(x)$, with $\sup_{t\ge0}E(t)<\infty$. Alternative B is the periodic unforced assertion: for every smooth divergence-free period-one initial field $u^0$, there exists a global smooth pair $p,u$ solving the equation with $f=0$, $\nabla\cdot u=0$, and $u(x,0)=u^0(x)$, with both $u$ and $p$ period one in space; B imposes no separate uniform-in-time energy bound. Alternative C asks for a smooth divergence-free whole-space initial field $u^0$ and a smooth force $f$ satisfying the whole-space decay bounds below for which no global smooth pair satisfying the equation with that $f$, incompressibility, $u(x,0)=u^0(x)$, and $\sup_{t\ge0}E(t)<\infty$ exists. Alternative D asks for smooth divergence-free period-one initial data $u^0$ and a smooth period-one force $f$ satisfying the periodic decay bound below for which no global smooth solution with that force, $u(x,0)=u^0(x)$, and period-one velocity and pressure exists. The energy bound is part of alternatives A and C; alternatives B and D require smooth period-one velocities and pressures without a separate uniform-in-time energy condition.

On $\mathbb R^3$, admissible initial data $u^0$ and force $f$ satisfy, for every multi-index $\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbb N_0^3$ and integer $K\ge0$, $|\partial_x^\alpha u^0(x)|\le C_{\alpha K}(1+|x|/\ell_0)^{-K}$, where $\partial_x^\alpha:=\partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\partial_{x_3}^{\alpha_3}$, and, for every $\alpha$ and nonnegative integers $m,K$, $|\partial_x^\alpha\partial_t^m f(x,t)|\le C_{\alpha mK}(1+|x|/\ell_0+t/\tau_0)^{-K}$. Here $|x|$ is the Euclidean norm, and the finite constants have the units required by their respective bounds. On $\mathbb T^3$, the initial field and force are period one in each nondimensional spatial coordinate and, for every $\alpha$ and nonnegative integers $m,K$, $|\partial_x^\alpha\partial_t^m f(x,t)|\le C_{\alpha mK}(1+t/\tau_0)^{-K}$. For specified whole-space data $u^0,f$, a global bounded-energy solution is a pair $p,u\in C^\infty(\mathbb R^3\times[0,\infty))$ satisfying the displayed equation, incompressibility, and $u(x,0)=u^0(x)$, with $\sup_{t\ge0}E(t)<\infty$. For specified periodic data $u^0,f$, a global smooth periodic solution is a pair $p,u\in C^\infty(\mathbb R^3\times[0,\infty))$ satisfying the same equation, incompressibility, and $u(x,0)=u^0(x)$, with both $u$ and $p$ period one in each spatial coordinate.

As checked on 2026-10-23 Australia/Sydney, the current Clay problem page labels the entry “Active”. Its announcement of 11 September 2026 says the problem has “apparently” been settled and that evaluation and credit assignment are deliberately unhurried. OpenAI’s announcement and preprint claim to establish alternative C by constructing, for each $\nu>0$, a force $f\in C_c^\infty(\mathbb R^3\times(0,\infty);\mathbb R^3)$ and smooth fields $u,p$ on $\mathbb R^3\times[0,1)$ with $u(\cdot,0)=0$, $\nabla\cdot u=0$, $\operatorname{supp}u(\cdot,t)\cup\operatorname{supp}p(\cdot,t)\subset\mathcal K$ for a compact $\mathcal K\subset\mathbb R^3$, $\sup_{0\le t<1}\|u(t)\|_{L^2(\mathbb R^3)}<\infty$, and $\limsup_{t\uparrow1}\|u(t)\|_{L^\infty(\mathbb R^3)}=\infty$. Here $C_c^\infty$ denotes smooth fields vanishing outside a compact subset of space-time, support is the closure of the set where a field is nonzero, $\|u(t)\|_{L^2}^2=\int|u(x,t)|^2\,dx$, and $\|u(t)\|_{L^\infty}$ is the essential supremum of $|u(x,t)|$ over $x$. The preprint also states that this construction yields alternative D on $\mathbb T^3$ and that no global smooth solution with the same force and initial data can have uniformly bounded energy. This reported forced construction does not establish either zero-force alternative A or B.

An arXiv paper posted on 6 October 2026 reports discrepancies between the preprint and its accompanying Lean formalization: among its examples, the stated inverse estimate in equation (8.19) uses $m+4$ input derivatives while a cited Lean estimate uses $m+5$, and the formalized pressure-flux estimate corresponding to equation (10.19) has a different bound. The authors explicitly do not decide whether the natural-language proof is correct. This item therefore records a dated announced claim and a reported formalization concern; it neither accepts nor refutes the claimed theorem, and does not treat it as an established proof supplier.

## Remark references

[Fefferman, “Existence and Smoothness of the Navier–Stokes Equation,” in *The Millennium Prize Problems*, printed pp. 57–59](https://www.claymath.org/library/monographs/MPPc.pdf)

[Clay Mathematics Institute, “Navier-Stokes Equation,” current problem page](https://www.claymath.org/millennium/Navier-Stokes-Equation/)

[Clay Mathematics Institute, “Navier-Stokes Announcement,” 11 September 2026](https://www.claymath.org/news/navier-stokes-announcement/)

[OpenAI, “On the Navier–Stokes Millennium Prize Problem,” 8 September 2026](https://openai.com/index/navier-stokes-solution/)

[OpenAI, *Finite Time Blowup for Navier–Stokes*, Theorem 1.1, PDF p. 1](https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf)

[Bastounis, Circelli, and Hansen, “Navier-Stokes lost in translation,” arXiv:2610.08144v1, §§3.1–3.2.1](https://arxiv.org/pdf/2610.08144v1)
