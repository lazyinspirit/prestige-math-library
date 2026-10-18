---
id: thm-phase-field-convex-splitting-mesh-time-convergence
kind: theorem
title: One-dimensional mesh and time convergence of convex-splitting phase flows
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
  - lem-phase-field-interval-p1-projector-stability
  - alg-phase-field-convex-splitting-backward-euler
  - thm-phase-field-convex-splitting-step-existence-and-energy
  - def-pe12-gelfand-triple
  - thm-pe12-discrete-aubin-lions-compactness
  - lem-parabolic-weak-compactness-separable-bochner-hilbert
  - thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: Assume the Axiom of Choice. It is used by the PE12 discrete Aubin–Lions compactness theorem and by the weak subsequence extraction in the separable Bochner Hilbert supplier; the finite-dimensional step theorem is choice-free.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§§2.2 and 3.2, printed pp. 1676–1688 / PDF pp. 7–19: conditional smooth-solution error bounds, explicit epsilon dependence, and the role of spatial approximation."
    - title: Jing Guo, Cheng Wang, Steven M. Wise, and Xingye Yue, An H2 convergence of a second-order convex-splitting finite difference scheme for the three-dimensional Cahn–Hilliard equation, Communications in Mathematical Sciences 14 (2016), 489–515
      url: https://www.intlpress.com/site/pub/files/_fulltext/journals/cms/2016/0014/0002/CMS-2016-0014-0002-a008.pdf
      locator: "§4, Theorem 4.1 and proof, PDF pp. 22–25 / printed pp. 503–507: convergence only under explicit periodicity, smoothness, and time-step restrictions for that distinct second-order scheme."
    - title: Christian Clason, Introduction to Finite Element Methods, complete lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §§12.1–12.2, PDF pp. 102–105: conforming spatial subspaces, time-discrete compactness, and the assumptions used in a parabolic finite-element limit."
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §9.2, equations (9.17)–(9.23), printed pp. 40–42: the center-to-center two-point stiffness on the one-dimensional orthogonal dual grid."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice and use the separable Hilbert evolution triple $V=H^1(0,L)\Subset H=L^2(0,L)\hookrightarrow V^*$. Let $\Omega=(0,L)$, $T>0$, and use the conforming interval realization in [[def-phase-field-discrete-realizations]] with $h=L/N$ and time steps $\tau=T/J$, where $N,J\to\infty$. Fix $\varepsilon,\kappa,M>0$. For each $h,\tau$, initialize $u_h^0=P_hu_0$ with $u_0\in H^1(0,L)$ and use the corresponding convex-splitting scheme. Set $t_n=n\tau$ and, for $t\in(t_n,t_{n+1}]$, let $u_{h,\tau}(t)=u_h^{n+1}$, $\mu_{h,\tau}(t)=\mu_h^{n+1}$, and $D_\tau u_{h,\tau}(t)=(u_h^{n+1}-u_h^n)/\tau$; values at the finitely many endpoints do not affect the Bochner classes. There is a subsequence with $h,\tau\to0$ such that $u_{h,\tau}\to u$ strongly in $L^2((0,T)\times(0,L))$ and weakly in $L^2(0,T;H^1(0,L))$.

For the Allen–Cahn branch, the limit satisfies, for every $\phi\in C^1([0,T]\times[0,L])$ with $\phi(T,\cdot)=0$,
$$-\int_0^T\!\int_0^L u\,\partial_t\phi\,dxdt+M\kappa\int_0^T\!\int_0^L u_x\phi_x\,dxdt+M\int_0^T\!\int_0^L f_\varepsilon(u)\phi\,dxdt=\int_0^L u_0(x)\phi(0,x)\,dx.$$

For the Cahn–Hilliard branch, along a further subsequence $\mu_{h,\tau}\rightharpoonup\mu$ weakly in $L^2(0,T;H^1(0,L))$, and
$$-\int_0^T\!\int_0^L u\,\partial_t\phi\,dxdt+M\int_0^T\!\int_0^L \mu_x\phi_x\,dxdt=\int_0^L u_0(x)\phi(0,x)\,dx,$$
$$\int_0^L\mu\psi\,dx=\kappa\int_0^L u_x\psi_x\,dx+\int_0^L f_\varepsilon(u)\psi\,dx\qquad(\psi\in H^1(0,L)),$$
and $\int_0^L u(t,x)\,dx=\int_0^L u_0(x)\,dx$ for almost every $t$. The no-flux boundary conditions are encoded by the $H^1$ test spaces. The quartic nonlinearity is controlled here by the one-dimensional embedding $H^1(0,L)\hookrightarrow L^\infty(0,L)$. This theorem is for fixed $\varepsilon$ and $d=1$; it does not assert a higher-dimensional finite-volume limit or an $\varepsilon\downarrow0$ sharp-interface result.

## Facts & Assumptions

**Given:** The Axiom of Choice; the finite-volume stiffness and conforming interval spaces; the mesh and time sequences; $u_0\in H^1(0,L)$; the convex-splitting updates; and the fixed positive parameters.

[F1] [[def-phase-field-gradient-flow-and-double-well]] and [[def-phase-field-discrete-realizations]]: $F_\varepsilon=F_c-F_e$, where $F_\varepsilon(s)=(s^2-1)^2/(4\varepsilon^2)$, $F_c(s)=s^4/(4\varepsilon^2)+s^2/(2\varepsilon^2)$, and $F_e(s)=s^2/\varepsilon^2-1/(4\varepsilon^2)$. In the conforming branch $V_h\subset H^1(0,L)$ is continuous piecewise affine between centers, constant on boundary half-cells, has exact $L^2$ mass, and $a_h(v,w)=\int_0^L v'w'$.

[F2] [[lem-phase-field-interval-p1-projector-stability]]: $P_h$ is $L^2$-orthogonal, uniformly $H^1$-stable, $P_hv\to v$ in $H^1$ for every $v\in H^1(0,L)$, and $P_hg\to g$ in $L^2$ for every $g\in L^2(0,L)$; the interpolation family is conforming.

[F3] [[thm-phase-field-convex-splitting-step-existence-and-energy]]: every step exists, conserves the Cahn–Hilliard mean, and satisfies the two energy inequalities, with dissipation of $\mu$ in $L^2$ for Allen–Cahn and of $\mu_x$ in $L^2$ for Cahn–Hilliard.

[F4] [[def-pe12-gelfand-triple]]: $V=H^1(0,L)$ embeds continuously and densely in $H=L^2(0,L)$, and $H$ embeds canonically in $V^*$.

[F5] [[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]: for a bounded interval, $H^1(0,L)$ is compactly embedded in $L^2(0,L)$.

[F6] [[thm-pe12-discrete-aubin-lions-compactness]]: for time-step functions $U_j^n\in V$ with maximum time step tending to zero, uniform $L^2(0,T;V)$ bounds and uniform $L^2(0,T;V^*)$ bounds on discrete time derivatives imply relative compactness in $L^2(0,T;H)$, assuming $V\Subset H$.

[F7] [[lem-parabolic-weak-compactness-separable-bochner-hilbert]]: under Countable Choice, bounded sequences in the separable Hilbert space $L^2(0,T;H^1(0,L))$ have weakly convergent subsequences.

[F8] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: every $H^1(0,L)$ class has an absolutely-continuous representative satisfying the fundamental-theorem identity. [[thm-holder-inequality-for-integrals]]: $\int_I|v'|\le |I|^{1/2}\|v'\|_{L^2(I)}$ and $\|w\|_{L^2(0,L)}\le L^{1/4}\|w\|_{L^4(0,L)}$.

[F9] [[alg-phase-field-convex-splitting-backward-euler]]: $\mu_h^{n+1}=\kappa A_hu_h^{n+1}+\nabla_hP_{c,h}(u_h^{n+1})-\nabla_hP_{e,h}(u_h^n)$, with $P_{c,h}(v)=\int_0^LF_c(v)$ and $P_{e,h}(v)=\int_0^LF_e(v)$ in the conforming realization; its AC and CH updates give the corresponding discrete time derivatives.

[A1] The Axiom of Choice supplies the compactness and subsequence extractions in [F6] and [F7].

## Proof

1.1 For $v\in H^1(0,L)$, choose a point $y$ with $|v(y)|\le L^{-1/2}\|v\|_2$; such a point exists since $v$ has a continuous representative. For every $x$, [F8] and Cauchy–Schwarz give $|v(x)|\le |v(y)|+\int_0^L|v'|\le L^{-1/2}\|v\|_2+\sqrt L\|v'\|_2$. Thus $H^1(0,L)$ embeds continuously in $L^\infty(0,L)$. [F8, given, choose, algebra]

1.2 By [F2], $u_h^0=P_hu_0$ is uniformly bounded in $H^1$; step 1.1 bounds it in $L^\infty$, so its gradient and quartic terms in [F1] give a uniform initial-energy bound. The energy inequalities in [F3] then give $\sup_{h,\tau,n}\|u_h^n\|_{H^1}<\infty$: the gradient term controls $\|u_h'\|_2$, and the algebraic identity
$$F_\varepsilon(s)-\left(\frac{s^4}{8\varepsilon^2}-\frac1{4\varepsilon^2}\right)=\frac{(s^2-2)^2}{8\varepsilon^2}\ge0$$
controls $\|u_h\|_4$ and, by [F8], $\|u_h\|_2$. Step 1.1 gives $\sup_{h,\tau,n}\|u_h^n\|_\infty<\infty$. For Allen–Cahn, the update in [F9] gives $D_\tau u_h^n=-M\mu_h^{n+1}$; hence the summed dissipation in [F3] and $\|w\|_{V^*}\le\|w\|_2$ give $\|D_\tau u_{h,\tau}\|_{L^2(0,T;V^*)}\le C$. For Cahn–Hilliard, summing [F3] bounds $\partial_x\mu_{h,\tau}$ in $L^2$. Its mean is
$$\overline\mu_h^{n+1}=L^{-1}\int_0^L\bigl(F_c'(u_h^{n+1})-F_e'(u_h^n)\bigr)\,dx,$$
because $\int_0^L A_hu_h^{n+1}\,dx=0$ and the Riesz gradients in [F9] pair with $1$ as derivatives of the integral potentials in [F1]; this mean is uniformly bounded by the $L^\infty$ bound. For $g=\mu_h^{n+1}-\overline\mu_h^{n+1}$, [F8] and Cauchy--Schwarz give $|g(x)|=|L^{-1}\int_0^L(g(x)-g(y))\,dy|\le\int_0^L|g'|\le\sqrt L\|g'\|_2$, so $\|g\|_2\le L\|\partial_x\mu_h^{n+1}\|_2$. Thus $\mu_{h,\tau}$ is bounded in $L^2(0,T;H^1)$. For each $v\in V$, the CH update in [F9] gives $D_\tau u_h^n=-MA_h\mu_h^{n+1}\in V_h$ and orthogonality gives $(D_\tau u_h^n,v)_{L^2}=(D_\tau u_h^n,P_hv)_{L^2}=-M\int_0^L(\mu_h^{n+1})_x(P_hv)_x\,dx$. The uniform H1 stability of $P_h$ in [F2] therefore bounds the discrete derivative in $L^2(0,T;V^*)$. [F1, F2, F3, F8, F9, step 1.1, given, algebra]

2.1 The piecewise-constant reconstructions take values in $V=H^1(0,L)$ and have uniformly bounded $L^2(0,T;V)$ norms by step 1.2. The interval embedding in [F5] supplies $V\Subset H$, and [F4] supplies the evolution triple. The time steps tend to zero and step 1.2 supplies the discrete-derivative bound, so [F6] gives a subsequence converging strongly in $L^2(0,T;L^2)$. Applying [F7] to the same bounded $L^2(0,T;H^1)$ sequence and taking a further subsequence gives weak $L^2(H^1)$ convergence to the same $u$, since the strong $L^2$ limit is unique. The Cahn–Hilliard chemical potentials are bounded in $L^2(H^1)$ by step 1.2, so [F7] also gives a weak limit $\mu$. [A1, F4, F5, F6, F7, step 1.2, given]

3.1 Let $w_{h,\tau}(t)=u_h^{n+1}-u_h^n$ on $t\in(t_n,t_{n+1})$. Then $w_{h,\tau}=\tau D_\tau u_{h,\tau}$, so step 1.2 gives $\|w_{h,\tau}\|_{L^2(0,T;V^*)}\le C\tau$; the uniform H1 bound gives $\|w_{h,\tau}\|_{L^2(0,T;V)}\le C$. For every $w\in V$, the evolution-triple pairing and Cauchy--Schwarz give $\|w\|_H^2=\langle w,w\rangle_{V^*,V}\le\|w\|_{V^*}\|w\|_V$. Integrating and applying Cauchy--Schwarz in time shows $\|w_{h,\tau}\|_{L^2(0,T;H)}^2\le C\tau$, so adjacent time-level reconstructions differ by a term tending to zero in $L^2((0,T)\times(0,L))$. By step 1.1 both adjacent states are uniformly bounded in $L^\infty$; the polynomial split derivatives $F_c'$ and $F_e'$ are Lipschitz on this common bounded range. Therefore their values at adjacent levels differ by a term tending to zero in $L^2$, and strong convergence from step 2.1 implies convergence of each split term, and hence $f_\varepsilon$, strongly in $L^2$ to its value at $u$. [F1, F2, F3, F8, step 1.1, step 1.2, step 2.1, algebra]

3.2 Let $\phi\in C^1([0,T]\times[0,L])$ vanish at $T$. The sets $\{\phi(t):0\le t\le T\}$ and $\{\partial_t\phi(t):0\le t\le T\}$ are compact in $H^1$ and $L^2$, respectively, by continuity in those norms. Uniform operator bounds and strong convergence of $P_h$ in [F2] imply uniform projector convergence on each compact set: cover the set by finitely many balls of radius $\delta$, use convergence at their centers, and bound the errors inside each ball by the uniform operator norm plus $1$. Uniform continuity of $\partial_t\phi$ then shows the projected time difference quotients converge in $L^2$ to $\partial_t\phi$. Use $P_h\phi(t_{n+1})$ as the spatial test in the discrete equation [F9] and sum by parts in time. The terminal term vanishes exactly because $\phi(T)=0$; the initial term is $(P_hu_0,P_h\phi(t_1))=(u_0,P_h\phi(t_1))\to(u_0,\phi(0))$. Strong convergence of the tests, weak convergence of $u_{h,\tau}$ in $L^2(H^1)$ from step 2.1, and strong convergence of the nonlinear terms from step 3.1 permit passage in every sum, yielding the Allen–Cahn identity in the Statement. [F1, F2, F3, F9, step 2.1, step 3.1, algebra]

4.1 In the Cahn–Hilliard branch, apply the same test passage to the first mixed equation [F9]. The weak $L^2(H^1)$ convergence of $\mu_{h,\tau}$ from step 2.1 and strong convergence of the tests give $-\int u\phi_t+M\int\mu_x\phi_x=\int u_0\phi(0)$. For any $\psi\in H^1(0,L)$, test the second mixed equation [F9] with $P_h\psi$. By [F2], $P_h\psi\to\psi$ in $H^1$; weak convergence of $u_h$ in $H^1$ and strong convergence of the split potential from step 3.1 therefore give $\int\mu\psi=\kappa\int u_x\psi_x+\int f_\varepsilon(u)\psi$. Finally, the discrete mean is constant by [F3]. Strong convergence in $L^2((0,T)\times(0,L))$ makes the mean functions converge in $L^2(0,T)$ by Cauchy–Schwarz in space, so the limit has that mean for almost every time. [F1, F2, F3, F9, step 2.1, step 3.1, algebra] ∎
