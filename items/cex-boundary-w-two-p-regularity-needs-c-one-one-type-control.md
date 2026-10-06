---
id: cex-boundary-w-two-p-regularity-needs-c-one-one-type-control
kind: counterexample
title: Boundary $W^{2,p}$ regularity needs more than Lipschitz boundary
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 4
deps: [thm-global-w-two-p-dirichlet-estimate, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-laplacian-of-a-c2-function, thm-polar-coordinates-formula-for-lebesgue-measure, lem-smooth-bump-between-concentric-euclidean-balls, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Example 10.1, the re-entrant sector harmonic singularity $r^{\\pi/\\beta}\\sin(\\pi\\varphi/\\beta)$ failing $H^2$ for $\\beta>\\pi$, printed p. 242 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Theorem 3.8, Part II, where the boundary estimate is proved under a $C^{2,\\alpha}$ (hence $C^{1,1}$) boundary, printed p. 107 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6(2) and §8.8, the smooth-boundary hypotheses of the global estimates, printed pp. 138-139 and 151 (read in full)"
---

## Statement refuted

A weak-solution regularity assertion that replaces the $C^{1,1}$ boundary hypothesis by mere Lipschitz regularity is false; this does not refute the a priori estimate [[thm-global-w-two-p-dirichlet-estimate]], whose hypothesis already requires $u\in W^{2,p}$. The reentrant sector below is a bounded Lipschitz domain, but not a $C^{1,1}$ domain at its vertex. Let $\Omega_\omega=\{(r,\theta):0<r<1,\ 0<\theta<\omega\}$ with $\omega\in(\pi,2\pi)$, put $\gamma=\pi/\omega\in(1/2,1)$, and define $U=r^\gamma\sin(\gamma\theta)$. Choose a smooth radial cutoff $\zeta$ supported in $B_{1/2}$ and equal to $1$ near $0$, and let $v=\zeta U$. Choose $r_0>0$ so that $\zeta=1$ for $r<r_0$. Then $v\in H^1_0(\Omega_\omega)$, $f:=-\Delta v\in C^\infty(\Omega_\omega)\cap L^\infty(\Omega_\omega)\subset L^p(\Omega_\omega)$ for every finite $p$, and $-\Delta v=f$ weakly. However, $|D^2v|\asymp r^{\gamma-2}$ near $0$, so
$$\int_0^{r_0}r^{p(\gamma-2)+1}\,dr=\infty\quad\Longleftrightarrow\quad p\ge\frac{2}{2-\gamma}=\frac{2\omega}{2\omega-\pi}.$$
Hence this weak solution is not in $W^{2,p}$ for those exponents (in particular not in $H^2$). The reentrant corner shows why weak boundary regularity requires more than a Lipschitz chart.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n=2$, $\omega\in(\pi,2\pi)$, $\gamma=\pi/\omega$, the sector $\Omega_\omega=\{(r,\theta):0<r<1,\ 0<\theta<\omega\}$ (with $x=r\cos\theta$, $y=r\sin\theta$), the harmonic profile $U(r,\theta)=r^\gamma\sin(\gamma\theta)$, a radial cutoff $\zeta\in C_c^\infty(\mathbb R^2)$ with $\zeta=1$ on $B_{r_0}$, $0\le\zeta\le1$ and $\operatorname{supp}\zeta\subseteq B_{1/2}$, and $v=\zeta U$.

[A1] The only choice principle used is Countable Choice $\mathrm{AC}_\omega$; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] Weak solutions of $-\Delta u=f$ with zero boundary values are the classes $u\in H^1_0(\Omega_\omega)$ with $\int_{\Omega_\omega}\nabla u\cdot\nabla\varphi=\int_{\Omega_\omega}f\varphi$ for every $\varphi\in H^1_0(\Omega_\omega)$; by density it suffices to test against $\varphi\in C_c^\infty(\Omega_\omega)$. ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-laplacian-of-a-c2-function]])

[F2] In polar coordinates on the open sector, $\Delta w=w_{rr}+\frac1rw_r+\frac1{r^2}w_{\theta\theta}$ for $w\in C^2$; the Lebesgue integral of a radial function is $\int_{B_{r_0}\cap\Omega_\omega}g(r)\,dx=\omega\int_0^{r_0}g(r)r\,dr$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F3] For every $0<\rho<R$ there is a radial cutoff $\zeta\in C_c^\infty(\mathbb R^2)$ with $\zeta=1$ on $B_\rho$, $0\le\zeta\le1$ and $\operatorname{supp}\zeta\subseteq B_R$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F4] A class lies in $W^{2,p}$ precisely when it and all its weak derivatives through order two lie in $L^p$. In particular, failure of $L^p$ integrability of a second weak derivative excludes $W^{2,p}$ membership; $\int_0^{r_0}r^{s}\,dr$ converges if and only if $s>-1$. ([[def-sobolev-space-wkp-and-its-norm]])

## Counterexample

**Proof technique:** direct.

1.1 The profile is harmonic and vanishes on the two sides. For $U(r,\theta)=r^\gamma\sin(\gamma\theta)$ one has, by [F2], $$\Delta U=\bigl[\gamma(\gamma-1)r^{\gamma-2}+\gamma r^{\gamma-2}-\gamma^2r^{\gamma-2}\bigr]\sin(\gamma\theta)=0,$$ so $U$ is harmonic on the sector (in particular $U\in C^\infty(\overline{\Omega_\omega}\setminus\{0\})$). Moreover $U(r,0)=0$ and $U(r,\omega)=r^\gamma\sin(\pi)=0$, so $U$ vanishes on the two radial sides of $\Omega_\omega$; at the reentrant vertex the sector has interior angle $\omega\in(\pi,2\pi)$, so $\Omega_\omega$ is a bounded Lipschitz domain that is not $C^{1,1}$ there. [F2, given, algebra, A1]

1.2 The localized profile is in $H^1_0$. Since $|U|\le r^\gamma$ and $|\nabla U|=\gamma r^{\gamma-1}$ (the gradient of the harmonic profile has absolute value $\gamma r^{\gamma-1}$ because the angular factor contributes a unit vector in polar coordinates), the integrals $\int_{r<1/2}|U|^2\,dx$ and $\int_{r<1/2}|\nabla U|^2\,dx$ converge; hence $v=\zeta U\in H^1(\Omega_\omega)$ with support in $\overline{B_{1/2}}$. To approximate $v$ in $H^1$ by $C_c^\infty(\Omega_\omega)$ functions: first truncate radially, $v_\varepsilon:=\chi(r/\varepsilon)v$ with $\chi\in C^\infty$ equal to $0$ near $0$ and to $1$ for every $t\ge2$. This transition need not be compactly supported: $v_\varepsilon$ remains compactly supported because $v$ is supported in $\overline{B_{1/2}}$. The estimate $\|v-v_\varepsilon\|_{H^1}^2=O(\varepsilon^{2\gamma})$ follows from $|v|^2+|\nabla v|^2\lesssim r^{2\gamma-2}$ near the vertex. Next cut off in the angular variable with a smooth $\eta_\delta(\theta)$ vanishing for $\theta<\delta$ and for $\theta>\omega-\delta$ and equal to $1$ for $2\delta<\theta<\omega-2\delta$. For each fixed $\varepsilon$, the squared $H^1$ error is $O(\delta)$, hence the $H^1$ norm error is $O(\delta^{1/2})$: near either side $U=O(r^\gamma\operatorname{dist}(\theta,\{0,\omega\}))$, the angular cutoff derivative is $O(\delta^{-1})$ on strips of angular width $O(\delta)$, and the resulting radial weight $r^{2\gamma-1}$ is integrable. The resulting functions are supported in a compact subset of the open sector and can be mollified there, so $v\in H^1_0(\Omega_\omega)$ by definition of the closure. [F1, given, algebra, F3]

2.1 The forcing is smooth and bounded, and the weak equation holds. Since $U$ is harmonic, $\Delta v=\Delta(\zeta U)=(\Delta\zeta)U+2\nabla\zeta\cdot\nabla U$ on the sector; the right-hand side is supported in the annulus $\{r_0\le r\le 1/2\}$ where $U$ and its gradient are smooth up to the two radial sides for $r\ge r_0>0$, so $f:=-\Delta v\in C^\infty(\Omega_\omega)\cap L^\infty(\Omega_\omega)$ and hence $f\in L^p(\Omega_\omega)$ for every finite $p$. For $\varphi\in C_c^\infty(\Omega_\omega)$ integration by parts on the compactly contained support gives $\int\nabla v\cdot\nabla\varphi=\int(-\Delta v)\varphi=\int f\varphi$; both sides are continuous in $\varphi$ in the $H^1$ norm, so the identity holds for every $\varphi\in H^1_0(\Omega_\omega)$ by [F1]: $v$ is a weak solution of $-\Delta v=f$ with zero boundary values. [step 1.2, F1, given, algebra]

3.1 The second derivatives diverge exactly above the threshold. On $\{r<r_0\}$ one has $v=U$, a function homogeneous of degree $\gamma$; write $U=\operatorname{Im}z^\gamma$ on the sector branch. Direct differentiation gives $U_{11}=\gamma(\gamma-1)r^{\gamma-2}\sin((\gamma-2)\theta)$, $U_{12}=\gamma(\gamma-1)r^{\gamma-2}\cos((\gamma-2)\theta)$ and $U_{22}=-U_{11}$. Thus the Frobenius Hessian norm is $\sqrt2\gamma(1-\gamma)r^{\gamma-2}$, so there are constants $0<c_1\le c_2<\infty$ with $c_1r^{\gamma-2}\le|D^2v|\le c_2r^{\gamma-2}$ on $\Omega_\omega\cap\{0<r<r_0\}$ (by the displayed nonvanishing norm, since $0<\gamma<1$). By [F2], $$\int_{\Omega_\omega\cap B_{r_0}}|D^2v|^p\,dx\asymp\int_0^{r_0}r^{p(\gamma-2)+1}\,dr,$$ which by [F4] diverges exactly when $p(\gamma-2)+1\le-1$, that is $p\ge\frac{2}{2-\gamma}$. Using $\gamma=\pi/\omega$ gives $\frac{2}{2-\gamma}=\frac{2\omega}{2\omega-\pi}$, so the weak solution $v$ is not in $W^{2,p}(\Omega_\omega)$ for those exponents; taking $p=2$ (which is allowed because $\gamma<1$) shows in particular that $v\notin H^2(\Omega_\omega)$. [step 1.1, step 2.1, F2, F4, algebra]

4.1 Conclusion. On the bounded Lipschitz reentrant domain $\Omega_\omega$ there is a weak solution $v\in H^1_0(\Omega_\omega)$ of $-\Delta v=f$ with $f\in C^\infty\cap L^\infty$, which fails to lie in $W^{2,p}(\Omega_\omega)$ for every $p\ge2\omega/(2\omega-\pi)$. Thus smooth data and a Lipschitz boundary alone do not guarantee weak-solution $W^{2,p}$ regularity. This example is not a counterexample to the a priori estimate [[thm-global-w-two-p-dirichlet-estimate]], whose domain already assumes $u\in W^{2,p}$; it makes no claim that the estimate’s $C^{1,1}$ boundary hypothesis is necessary. [step 2.1, step 3.1, step 1.1, given] ∎

## Remarks

- The mechanism is the corner exponent $\gamma=\pi/\omega$: the harmonic profile grows like $r^\gamma$, its first derivatives like $r^{\gamma-1}$ (square-integrable already for $\gamma>0$, since the radial gradient integral is $\int r^{2\gamma-1}dr$; the zero-boundary closure was proved in step 1.2), and its second derivatives like $r^{\gamma-2}$, which is not $p$-integrable for large $p$ because the radial weight in two dimensions is $r^{p(\gamma-2)+1}$ (equal to $r^{2\gamma-3}$ when $p=2$).
- The failure is purely at the vertex, not at the sides: the two radial sides are straight, and on each of them the localized solution is smooth for $r\ge r_0$. This isolates the reentrant corner as the obstruction, in contrast to convex corners, where $\gamma>1$ improves the integrability threshold, but the Hessian is still unbounded when $1<\gamma<2$; it is bounded when $\gamma\ge2$.
