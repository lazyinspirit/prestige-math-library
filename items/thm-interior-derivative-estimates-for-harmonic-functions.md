---
id: thm-interior-derivative-estimates-for-harmonic-functions
kind: theorem
title: Interior derivative estimates for harmonic functions
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-ck-and-multi-index-notation-in-several-variables, def-laplacian-of-a-c2-function, def-surface-integral-on-a-compact-c-one-hypersurface, cor-ball-mean-value-property-for-harmonic-functions, cor-euclidean-closed-balls-and-spheres-are-compact, lem-smooth-sphere-data-have-a-harmonic-replacement, lem-sphere-and-ball-measures-scale, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-continuous-mean-value-functions-are-harmonic, thm-differentiation-under-the-integral-sign, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-dominated-convergence, thm-extreme-value-metric, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-poisson-kernel-for-a-ball-in-rn, thm-real-power-continuity-and-derivatives, thm-spherical-mean-value-property-for-harmonic-functions]
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, derivative estimates and factorial bounds"
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, printed pp. 36–39, Problem 4.4 derivative estimate"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, Theorem 4.24 and its corollaries"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $\Omega\subseteq\mathbb R^n$ be open, let $u$ be real or complex harmonic on $\Omega$, let $B_r(x)\Subset\Omega$ with $r>0$, and let $\alpha$ be a multi-index. Then
$$\bigl|D^\alpha u(x)\bigr|\le C_{n,\alpha}\,r^{-n-|\alpha|}\int_{B_r(x)}|u(y)|\,dy,$$
where the constant $C_{n,\alpha}$ depends only on $n$ and $\alpha$, not on $u$, $x$, $r$ or $\Omega$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, an open set $\Omega\subseteq\mathbb R^n$, a harmonic $u$ on $\Omega$, a point $x\in\Omega$ and a radius $r>0$ with $\overline{B_r(x)}\subset\Omega$, and a multi-index $\alpha$.

[F1] If $u\in C^2(\Omega)$ and $\Delta u=0$, then $u(x)=M_u(x,r)$ for every $B_r(x)\Subset\Omega$, and consequently the ball mean value property $u(y)=\frac{1}{|B_\rho(y)|}\int_{B_\rho(y)}u$ holds whenever $B_\rho(y)\Subset\Omega$ ([[thm-spherical-mean-value-property-for-harmonic-functions]], [[cor-ball-mean-value-property-for-harmonic-functions]]).

[F2] A continuous function on an open set with the ball mean value property lies in $C^\infty$ and is harmonic ([[thm-continuous-mean-value-functions-are-harmonic]]).

[F3] For $n\ge3$ and continuous data $g$ on a sphere, the Poisson integral is the unique $C^2\cap C(\overline B_R(a))$ harmonic function on $B_R(a)$ with trace $g$; its kernel is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$ ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]], [[thm-poisson-kernel-for-a-ball-in-rn]]).

[F4] For $n\ge2$ and real smooth data $g\in C^\infty(\partial B_R(a))$ the unique $C^\infty\cap C(\overline B_R(a))$ harmonic function with trace $g$ is the Poisson integral with the same kernel formula ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F5] On a measure space and an open parameter interval, differentiation under the integral sign holds when every integrand slice is integrable, the parameter derivative exists off a fixed measurable null set, its slices are measurable (with zero extension), and its modulus has one nonnegative measurable integrable majorant for all parameters off a fixed null set. Bounded continuous integrands on the compact sphere have finite surface integrals, and dominated convergence applies to measurable pointwise convergent families with an integrable majorant ([[thm-differentiation-under-the-integral-sign]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[thm-dominated-convergence]]).

[F6] Calculus interface: sums, products and compositions of $C^k$ maps are $C^k$; $(t^\beta)'=\beta t^{\beta-1}$ for $t>0$; the chain rule and the product rule hold; $D^\alpha$ is the iterated coordinate derivative of the multi-index notation, and $\Delta=\sum_i\partial_i\partial_i$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-laplacian-of-a-c2-function]]).

[F7] For $n\ge1$ and $s>0$, the closed ball and sphere are compact, the sphere is nonempty, and $|\partial B_s(x)|=\omega_{n-1}s^{n-1}$ and $|B_s(x)|=\omega_{n-1}s^n/n$. Compact Euclidean sets are closed and bounded, so the product of the closed ball $\{|\zeta|\le1/2\}$ and unit sphere, viewed in $\mathbb R^{2n}$, is closed and bounded and hence compact; continuous functions on nonempty compact metric spaces attain extrema ([[lem-sphere-and-ball-measures-scale]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-extreme-value-metric]]).

[F8] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F8] and suppose first that $u$ is real-valued. Put $\rho:=r/4>0$, so that $\overline{B_{2\rho}(x)}\subset B_r(x)\subset\Omega$ and $u$ is harmonic, hence $C^2$, on a neighbourhood of $\overline{B_{2\rho}(x)}$. [given, F8]

1.2 Mean-value bound on the inner sphere. For $y\in\partial B_\rho(x)$ and $w\in B_\rho(y)$ we have $|w-x|\le|w-y|+|y-x|<2\rho=r/2<r$, so $B_\rho(y)\subset B_r(x)$; by [F1] and [F7], $|u(y)|=\bigl|\frac{1}{|B_\rho(y)|}\int_{B_\rho(y)}u\bigr|\le\frac{1}{|B_\rho|}\int_{B_r(x)}|u|=\frac{n}{\omega_{n-1}\rho^n}\int_{B_r(x)}|u|$. [given, F1, F7, algebra]

2.1 Representation on the inner ball. For $n\ge3$ put $g:=u|_{\partial B_\rho(x)}\in C(\partial B_\rho(x))$ and note that $u\in C^2(B_\rho(x))\cap C(\overline{B_\rho(x)})$ is harmonic with trace $g$; the uniqueness clause of [F3] gives $u(z)=U_g(z)=\int_{\partial B_\rho(x)}P_{\rho,x}(z,y)g(y)\,dS_y$ for $z\in B_\rho(x)$. For $n=2$: $u$ is continuous on $\Omega$ and has the ball mean value property by [F1], so [F2] makes it $C^\infty$; its restriction $g$ to the sphere is then real and $C^\infty$, and $u$ is a $C^\infty\cap C(\overline{B_\rho(x)})$ harmonic function with trace $g$, so uniqueness in [F4] gives $u(z)=\int_{\partial B_\rho(x)}\frac{\rho^2-|z-x|^2}{\rho\omega_{n-1}|z-y|^n}g(y)\,dS_y$ for $z\in B_\rho(x)$. Thus in both dimensions $u$ on $B_\rho(x)$ is the Poisson integral of $g$ with the same kernel. [step 1.1, F1, F2, F3, F4, cases]

2.2 Kernel derivative bound. Write $z=x+\rho\zeta$ and $y=x+\rho\eta$ with $|\eta|=1$; the kernel is $P_{\rho,x}(z,y)=\rho^{1-n}(1-|\zeta|^2)/(\omega_{n-1}|\zeta-\eta|^n)$, whose denominator is bounded below on the compact set $\{|\zeta|\le1/2\}\times\{|\eta|=1\}$ by $2^{-n}$. For every multi-index $\alpha$, the partial derivatives $D^\alpha_\zeta\bigl[(1-|\zeta|^2)|\zeta-\eta|^{-n}\bigr]$ are continuous by [F6] on that compact set and hence bounded in modulus by a constant $c_{n,\alpha}$ by [F7]; rescaling gives, for $|\zeta|\le1/2$, $\bigl|D^\alpha_zP_{\rho,x}(z,y)\bigr|=\rho^{1-n-|\alpha|}\bigl|D^\alpha_\zeta\bigl[(1-|\zeta|^2)|\zeta-\eta|^{-n}\bigr]\bigr|/\omega_{n-1}\le C_{n,\alpha}\rho^{1-n-|\alpha|}$. [step 1.1, F6, F7, algebra]

3.1 Derivatives of $u$. By step 2.1, $u(z)=\int_{\partial B_\rho(x)}P_{\rho,x}(z,y)g(y)\,dS_y$. On $\overline{B_{\rho/2}(x)}\times\partial B_\rho(x)$ every ordered $z$-derivative of the smooth kernel is continuous and bounded, by the compactness argument of step 2.2. Multiplying by the bounded continuous $g$ gives Borel integrable slices; the next coordinate derivative has an integrable constant majorant on the finite sphere. Thus [F5] applies on each sufficiently small open coordinate interval, with no exceptional points. Induction over ordered coordinate derivatives, with dominated convergence for their continuity, gives $D^\alpha u(z)=\int_{\partial B_\rho(x)}D^\alpha_zP_{\rho,x}(z,y)g(y)\,dS_y$ for $z\in B_{\rho/2}(x)$, using the canonical order for $D^\alpha$. At $z=x$ step 2.2 then yields $|D^\alpha u(x)|\le C_{n,\alpha}\rho^{1-n-|\alpha|}\int_{\partial B_\rho(x)}|u(y)|\,dS_y$. [step 2.1, step 2.2, F5, F6, F7, induction]

4.1 Bounding the boundary integral by the sphere area, step 3.1 and [F7] give $|D^\alpha u(x)|\le C_{n,\alpha}\rho^{1-n-|\alpha|}\cdot\omega_{n-1}\rho^{n-1}\cdot\sup_{y\in\partial B_\rho(x)}|u(y)|=C_{n,\alpha}\omega_{n-1}\rho^{-|\alpha|}\sup_{\partial B_\rho(x)}|u|$. [step 3.1, F7, algebra]

5.1 Substituting the mean-value bound of step 1.2 into step 4.1 yields $|D^\alpha u(x)|\le C_{n,\alpha}\omega_{n-1}\rho^{-|\alpha|}\cdot\frac{n}{\omega_{n-1}\rho^n}\int_{B_r(x)}|u|=C_{n,\alpha}n\rho^{-n-|\alpha|}\int_{B_r(x)}|u|=C_{n,\alpha}n4^{n+|\alpha|}r^{-n-|\alpha|}\int_{B_r(x)}|u|$, and absorbing $n4^{n+|\alpha|}$ into the constant gives the displayed estimate with a constant depending only on $n$ and $\alpha$. [step 1.2, step 4.1, F7, algebra]

6.1 For complex $u$, apply steps 1.1–5.1 to $\mathrm{Re}\,u$ and to $\mathrm{Im}\,u$, which are real harmonic functions on $\Omega$ with $\overline{B_r(x)}\subset\Omega$: $|D^\alpha u(x)|\le|D^\alpha\mathrm{Re}\,u(x)|+|D^\alpha\mathrm{Im}\,u(x)|\le C_{n,\alpha}r^{-n-|\alpha|}\int_{B_r(x)}(|\mathrm{Re}\,u|+|\mathrm{Im}\,u|)\le 2C_{n,\alpha}r^{-n-|\alpha|}\int_{B_r(x)}|u|$, and $2C_{n,\alpha}$ again depends only on $n$ and $\alpha$. [step 5.1, cases, algebra]

7.1 Steps 5.1 and 6.1 give the estimate for real and complex $u$ with a constant independent of $u,x,r,\Omega$; the value $r>0$ is unavoidable because the estimate divides by $r$, and the hypothesis $\overline{B_r(x)}\subset\Omega$ was used only to place $B_{2\rho}(x)$ and the mean-value balls inside $\Omega$. [step 5.1, step 6.1, algebra] ∎
