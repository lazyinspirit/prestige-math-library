---
id: thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space
kind: theorem
title: Poisson kernel and bounded Dirichlet problem on a half-space
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-laplacian-of-a-c2-function, def-real-beta-integral, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, lem-reflection-green-function-for-the-half-space, lem-sphere-and-ball-measures-scale, cor-real-gamma-one-half-is-root-pi, cor-volume-of-the-unit-n-ball, thm-algebra-of-derivatives, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-differentiation-under-the-integral-sign, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-dominated-convergence, thm-liouville-theorem-for-bounded-harmonic-functions, thm-polar-coordinates-formula-for-lebesgue-measure, thm-real-beta-gamma-identity, thm-real-gamma-functional-equation, thm-real-power-continuity-and-derivatives, thm-weak-maximum-principle-for-the-laplacian]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, Poisson kernel on the half-space and its bounded Dirichlet problem"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.4, printed pp. 28–32, reflection construction and half-space Poisson kernel"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.1, printed p. 111, Lemma 5.8 and Theorem 5.9 half-space case"
---

## Statement

Assume Countable Choice and $n\ge3$. Use one-based labels $x_j:=x_{j-1}^{\mathrm{can}}$ and $e_j:=e_{j-1}^{\mathrm{can}}$, $1\le j\le n$. For $x=(x',t)\in H=\{x_n>0\}$ and $z\in\mathbb R^{n-1}$,
$$P_H((x',t),z)=\frac{2t}{\omega_{n-1}\bigl(|x'-z|^2+t^2\bigr)^{n/2}}$$
is the negative outward boundary derivative of the reflected Green kernel $G_H$ of the half-space, is positive, and satisfies $\int_{\mathbb R^{n-1}}P_H((x',t),z)\,dz=1$. For bounded continuous real or complex $g$ on $\partial H=\mathbb R^{n-1}$, the function $U_g(x)=\int_{\mathbb R^{n-1}}P_H(x,z)g(z)\,dz$ is bounded, smooth and harmonic on $H$, and $U_g(x)\to g(z_0)$ as $x\to(z_0,0)$ from inside $H$. It is the unique bounded harmonic function on $H$, continuous on $\overline H$, with trace $g$; boundedness is the growth condition at infinity that makes the solution unique.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, the upper half-space $H=\{x=(x',x_n):x_n>0\}$, the outward normal $\nu=-e_n$ of its boundary plane $\partial H=\{x_n=0\}=\mathbb R^{n-1}$, and a bounded continuous $g:\partial H\to\mathbb C$, $\lVert g\rVert_\infty=\sup_{\partial H}|g|<+\infty$.

[F1] The reflected kernel $G_H(x,y)=\Phi(x-y)-\Phi(x-y^\dagger)$, $y^\dagger=(y',-y_n)$, is symmetric off the diagonal and strictly positive for distinct $x,y\in H$, smooth and harmonic in $x$ off $y$, has $-\Delta_xG_H(\cdot,y)=\delta_y$ distributionally in $H$ and has zero continuous boundary trace ([[lem-reflection-green-function-for-the-half-space]]).

[F2] For $n\ge3$, $\Phi(w)=|w|^{2-n}/((n-2)\omega_{n-1})$ is smooth and harmonic on $\mathbb R^n\setminus\{0\}$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F3] The continuous Dirichlet problem on a ball is uniquely solvable by the Poisson integral, for real and complex data ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]]).

[F4] On a bounded nonempty open set, a $C^2\cap C(\overline\Omega)$ function with $\Delta u\ge0$ attains its maximum on the boundary ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F5] A bounded harmonic function on all of $\mathbb R^n$ is constant ([[thm-liouville-theorem-for-bounded-harmonic-functions]]).

[F6] Toolkit for the normalisation: polar coordinates in $\mathbb R^{n-1}$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]), the $C^1$ change-of-variables formula for nonnegative measurable functions ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]), $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}dt$ ([[def-real-beta-integral]]), $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[thm-real-beta-gamma-identity]]), $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]), $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]), $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]), $|\partial B_r|=\omega_{n-1}r^{n-1}$ and $|B_r|=\omega_{n-1}r^n/n$ ([[lem-sphere-and-ball-measures-scale]]), and $\omega_{n-1}=|S^{n-1}|$ for the polar surface measure ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F7] Differentiation under the integral sign over a general measure space, and dominated convergence ([[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]]).

[F8] Calculus interface: chain rule, product rule, real-power derivatives, closure of $C^k$ maps under algebra and composition, and $\Delta=\sum_i\partial_i\partial_i$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-laplacian-of-a-c2-function]]).

[F9] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F9] and put $R(x,z):=|x-(z,0)|=(|x'-z|^2+t^2)^{1/2}>0$ for $x=(x',t)\in H$. Write $y=(z,0)$. [given, F9]

1.2 Derivative of the fundamental kernel: since $\Phi(w)=|w|^{2-n}/((n-2)\omega_{n-1})$ on $w\ne0$, the chain rule and real-power rule [F8] give $\nabla\Phi(w)=|w|^{-n}w\cdot(2-n)/((n-2)\omega_{n-1})=-w/(\omega_{n-1}|w|^n)$ for every $w\ne0$. [given, F2, F8, algebra]

1.3 Normalisation, first reduction. By [F6] applied to the nonnegative measurable function $z\mapsto P_H(x,z)$ and the $C^1$ diffeomorphism $z=x'+tw$ with Jacobian $t^{n-1}$, $$\int_{\mathbb R^{n-1}}P_H(x,z)\,dz=\frac{2t}{\omega_{n-1}}\int_{\mathbb R^{n-1}}\frac{dz}{\bigl(|x'-z|^2+t^2\bigr)^{n/2}}=\frac{2t\,t^{n-1}}{\omega_{n-1}t^n}\int_{\mathbb R^{n-1}}\frac{dw}{(1+|w|^2)^{n/2}}=\frac{2}{\omega_{n-1}}I,\qquad I:=\int_{\mathbb R^{n-1}}\frac{dw}{(1+|w|^2)^{n/2}}.$$ [given, F6, algebra]

2.1 The boundary derivative. Fix $x=(x',t)\in H$ and a boundary coordinate $z\in\mathbb R^{n-1}$. For $0<s<t$, the formula in [F1] gives $G_H(x,(z,s))=\Phi(x' - z,t-s)-\Phi(x'-z,t+s)$. Both arguments stay nonzero through $s=0$, so this explicit expression extends smoothly to the boundary pole $(z,0)$. By step 1.2, differentiating in $s$ at $0$ gives $\partial_sG_H(x,(z,s))|_{s=0}=2t/\bigl(\omega_{n-1}(|x'-z|^2+t^2)^{n/2}\bigr)$. Since the outward normal is $\nu=-e_n$, the negative outward derivative is $-\partial_\nu G_H=+\partial_sG_H$, which is the displayed positive kernel. This calculation uses the explicit reflected formula and its smooth boundary extension; it does not apply the interior-pole statement of [F1] at a boundary pole. [step 1.1, step 1.2, F1, algebra]

2.2 Polar evaluation of $I$. With $m=n-1\ge2$ and $w=r\theta$, [F6] gives $I=\omega_{n-2}\int_0^\infty\frac{r^{n-2}\,dr}{(1+r^2)^{n/2}}$; substituting $s=r^2$, $r^{n-2}dr=\frac12s^{(n-1)/2-1}ds$, this is $I=\frac{\omega_{n-2}}{2}\int_0^\infty s^{(n-1)/2-1}(1+s)^{-n/2}\,ds$. The further substitution $t=\frac{s}{1+s}$ turns the last integral into $\int_0^1t^{(n-1)/2-1}(1-t)^{1/2-1}dt=B\bigl(\frac{n-1}{2},\frac12\bigr)$ by [F6]; hence $I=\frac{\omega_{n-2}}{2}B\bigl(\frac{n-1}{2},\frac12\bigr)<+\infty$. [step 1.3, F6, algebra]
3.1 Positivity: for $x\in H$ we have $t>0$ and $\omega_{n-1}>0$ by [F6], while the denominator is a positive real number; hence $P_H(x,z)>0$ for every $z\in\mathbb R^{n-1}$. [step 2.1, F6, algebra]

3.2 Evaluation of the constants. By [F6], $|B_1^n|=\pi^{n/2}/\Gamma(n/2+1)$ and $|B_1^n|=\omega_{n-1}/n$, so $\omega_{n-1}=n\pi^{n/2}/\Gamma(n/2+1)=2\pi^{n/2}/\Gamma(n/2)$; replacing $n$ by $n-1$ gives $\omega_{n-2}=2\pi^{(n-1)/2}/\Gamma((n-1)/2)$. By [F6] again, $B\bigl(\frac{n-1}{2},\frac12\bigr)=\Gamma\bigl(\frac{n-1}{2}\bigr)\Gamma\bigl(\frac12\bigr)/\Gamma\bigl(\frac n2\bigr)=\Gamma\bigl(\frac{n-1}{2}\bigr)\sqrt\pi/\Gamma\bigl(\frac n2\bigr)$. Substituting into steps 1.3 and 2.2, $\int_{\mathbb R^{n-1}}P_H(x,z)\,dz=\frac{2}{\omega_{n-1}}\cdot\frac{\omega_{n-2}}{2}\cdot\frac{\Gamma\bigl(\frac{n-1}{2}\bigr)\sqrt\pi}{\Gamma\bigl(\frac n2\bigr)}=\frac{2\pi^{(n-1)/2}}{2\pi^{n/2}}\cdot\sqrt\pi=1$. [step 1.3, step 2.2, F6, algebra]

3.3 Boundary convergence. Fix $z_0\in\partial H$ and $\eta>0$; by continuity of $g$ at $z_0$ choose $\delta>0$ with $|g(z)-g(z_0)|<\eta$ for $|z-z_0|<\delta$. Let $C=\{z:|z-z_0|<\delta\}$ and $D=\mathbb R^{n-1}\setminus C$. For $z\in C$, $|g(z)-g(z_0)|\le\eta$; for $z\in D$ we use $|g(z)-g(z_0)|\le2\lVert g\rVert_\infty$, and the mass of $D$ is small: if $|x'-z_0|<\delta/2$ and $z\in D$, then $|x'-z|\ge|z-z_0|-|x'-z_0|>\delta/2$, so by step 1.3 $\int_DP_H(x,z)\,dz\le\frac{2}{\omega_{n-1}}\int_{|w|>\delta/(2t)}\frac{dw}{(1+|w|^2)^{n/2}}$, and this tail tends to $0$ as $t\downarrow0$ by [F7] and the finiteness in step 2.2, since the integrands are dominated by the integrable function $(1+|w|^2)^{-n/2}$ and vanish pointwise on the shrinking domain. Hence $|U_g(x)-g(z_0)|\le\eta+2\lVert g\rVert_\infty\int_D P_H(x,z)\,dz$, so $\limsup_{x\to(z_0,0)}|U_g(x)-g(z_0)|\le\eta+2\lVert g\rVert_\infty\cdot0=\eta$, and $\eta>0$ was arbitrary; so $U_g(x)\to g(z_0)$ as $x\to(z_0,0)$ from inside $H$. [step 1.3, step 2.2, F7, algebra]

4.1 Derivative bounds and integrability. Every partial derivative $D^\alpha_xP_H(x,z)$ is continuous on $H\times\mathbb R^{n-1}$ and, on each compact $K\subset H$, satisfies $|D^\alpha_xP_H(x,z)|\le C_{\alpha,K}(1+|z|)^{-n}$. Indeed, writing $\lambda=|x\prime-z|^2+t^2$, on $K$ the height $t$ is bounded away from $0$ and both $t$ and $|x\prime|$ are bounded above; for large $|z|$, $\lambda$ is comparable to $|z|^2$. Each horizontal derivative of $\lambda^{-n/2}$ contributes a factor $O(|z|)$ and one extra factor $\lambda^{-1}$, gaining decay; each vertical derivative either differentiates the numerator $t$, leaving the base decay $O(|z|^{-n})$, or differentiates a denominator factor and gains decay with bounded factors of $t$. Repeating these rules shows that no derivative decays more slowly than $|z|^{-n}$; bounded $z$ are covered by compactness and smoothness on $K$. Since $n>n-1$, this majorant is integrable over $\mathbb R^{n-1}$. Also $|U_g(x)|\le\lVert g\rVert_\infty\int_{\mathbb R^{n-1}}P_H(x,z)\,dz=\lVert g\rVert_\infty$ by steps 3.1 and 3.2; in particular $U_g$ is absolutely convergent and bounded on $H$. [step 2.1, step 3.2, F8, algebra]

4.2 Uniqueness. Let $w$ be bounded and harmonic on $H$, continuous on $\overline H$, with $w=0$ on $\partial H$; it suffices to show $w\equiv0$. If $w$ is complex-valued, apply the argument below separately to its real and imaginary parts, so assume $w$ is real-valued. Fix $p\in\partial H$ and a ball $\mathbb B:=B_\rho(p)$ with $\rho>0$. Define $g_\rho$ on $\partial\mathbb B$ by $g_\rho(y)=w(y)$ for $y_n\ge0$ and $g_\rho(y)=-w(y',-y_n)$ for $y_n<0$; this is continuous on $\partial\mathbb B$ because $w$ is continuous on $\overline H$ and $w=0$ on the plane, where the two clauses agree. By [F3] let $W$ be the harmonic function on $\mathbb B$ with trace $g_\rho$; since $g_\rho$ is odd under the reflection $\sigma(y)=(y',-y_n)$, the function $y\mapsto-W(\sigma(y))$ is harmonic on $\mathbb B$ with the same trace $g_\rho$ (because $g_\rho\circ\sigma=-g_\rho$), so [F3] gives $W(\sigma(y))=-W(y)$: $W$ is odd. In particular $W=0$ on the flat part $\partial\mathbb B\cap\partial H$, and on the upper half ball $\mathbb B^+:=\mathbb B\cap H$ both $W$ and $w$ are harmonic, continuous on the closure of $\mathbb B^+$, and agree on its boundary (the upper hemisphere carries $g_\rho=w$, and the flat part carries $w=0=W$); the weak maximum principle [F4] applied to $W-w$ and to $w-W$ gives $W=w$ on $\mathbb B^+$. Therefore the odd extension $\widetilde w$ of $w$ (namely $\widetilde w(y)=w(y)$ for $y_n>0$ and $\widetilde w(y)=-w(y',-y_n)$ for $y_n<0$) coincides with the harmonic function $W$ on $\mathbb B$, hence is harmonic on a neighbourhood of $p$; as $p$ was arbitrary and $\widetilde w$ is harmonic off the plane, $\widetilde w$ is harmonic on all of $\mathbb R^n$. It is bounded by $\lVert w\rVert_\infty$, so [F5] makes it constant, and its value at the plane is $0$; hence $\widetilde w\equiv0$ and $w\equiv0$. [step 3.3, F3, F4, F5, cases]

5.1 Smoothness and harmonicity. By step 4.1 the domination hypothesis of [F7] holds on every compact $K\subset H$ and all admissible derivatives, so induction over the coordinate directions as in [F7] gives $U_g\in C^\infty(H)$ with $D^\alpha U_g(x)=\int_{\mathbb R^{n-1}}D^\alpha_xP_H(x,z)g(z)\,dz$. Moreover $\Delta_x(w_n|w|^{-n})=0$ for $w\ne0$: by [F8] and step 1.2, $\Delta w_n=0$, $\nabla(w_n)=e_n$, $\nabla|w|^{-n}=-n|w|^{-n-2}w$ and $\Delta|w|^{-n}=2n|w|^{-n-2}$, so the product rule gives $\Delta(w_n|w|^{-n})=2e_n\cdot(-n|w|^{-n-2}w)+w_n\cdot2n|w|^{-n-2}=0$. Since $P_H(x,z)=\frac{2}{\omega_{n-1}}\,\varphi(x-(z,0))$ with $\varphi(w)=w_n|w|^{-n}$ and $x-(z,0)$ never vanishes for $x\in H$, the chain rule gives $\Delta_xP_H(x,z)=0$ for all $x\in H$, $z\in\mathbb R^{n-1}$, and therefore $\Delta U_g(x)=\int_{\mathbb R^{n-1}}\Delta_xP_H(x,z)g(z)\,dz=0$. [step 1.2, step 4.1, F7, F8, algebra]

6.1 If $v$ is any bounded harmonic function on $H$, continuous on $\overline H$, with trace $g$, then $w:=v-U_g$ is bounded, harmonic by step 5.1, continuous on $\overline H$ and zero on the plane by step 3.3, so step 4.2 gives $w\equiv0$ and $v=U_g$; for complex data both $U_g$ and the difference are complex, and the maximum-principle and Liouville steps were applied to the real and imaginary parts. Together with steps 2.1, 3.1, 3.2, 4.1, 5.1 and 3.3 this proves every clause of the statement. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 3.3, step 4.2, cases] ∎
