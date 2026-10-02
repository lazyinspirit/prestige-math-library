---
id: thm-harmonic-functions-are-real-analytic
kind: theorem
title: Harmonic functions are real analytic
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [cor-ball-mean-value-property-for-harmonic-functions, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, def-multivariable-power-series, def-real-analytic-germ-in-several-variables, def-surface-integral-on-a-compact-c-one-hypersurface, lem-ball-poisson-kernel-is-positive-and-normalised, lem-smooth-sphere-data-have-a-harmonic-replacement, lem-sphere-and-ball-measures-scale, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-continuous-mean-value-functions-are-harmonic, thm-differentiation-under-the-integral-sign, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-dominated-convergence, thm-multinomial-theorem, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, thm-poisson-kernel-for-a-ball-in-rn, thm-real-power-continuity-and-derivatives]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, analyticity of harmonic functions and the factorial derivative bound"
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, printed pp. 36–39, Problem 4.5 polynomial-growth consequence"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, analyticity from the Poisson integral"
---

## Statement

Assume Countable Choice and $n\ge2$. Every real or complex harmonic $u$ on an open set $\Omega\subseteq\mathbb R^n$ is real analytic: for every $a\in\Omega$ there is $\rho>0$ such that
$$u(a+h)=\sum_{\alpha\in\mathbb N^n}\frac{D^\alpha u(a)}{\alpha!}\,h^\alpha$$
with absolute convergence whenever $|h|<\rho$. In particular, if $\overline{B_{2r}(a)}\subset\Omega$ and $M=\sup_{B_{2r}(a)}|u|$, then
$$\bigl|D^\alpha u(a)\bigr|\le M\,C_n^{|\alpha|}\,|\alpha|!\,r^{-|\alpha|}$$
for every multi-index $\alpha$, with $C_n$ depending only on $n$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, an open set $\Omega\subseteq\mathbb R^n$, a real or complex harmonic $u$ on $\Omega$, and a point $a\in\Omega$.

[F1] For $n\ge3$ the Poisson kernel of $B_R(a)$ is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$, positive with unit mass ([[thm-poisson-kernel-for-a-ball-in-rn]], [[lem-ball-poisson-kernel-is-positive-and-normalised]]); the continuous Dirichlet problem on a ball is uniquely solved by the Poisson integral, for real and complex data ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]]).

[F2] Differentiation under the integral sign and dominated convergence for integrals over the compact sphere ([[thm-differentiation-under-the-integral-sign]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[thm-dominated-convergence]]).

[F3] The multivariable Taylor formula with Lagrange remainder: for $f\in C^{k+1}(U)$ on an open convex $U\ni a,a+h$ there is $\theta\in(0,1)$ with $f(a+h)=T_kf(a;h)+\sum_{|\alpha|=k+1}D^\alpha f(a+\theta h)h^\alpha/\alpha!$ ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]), and the multinomial theorem gives $\sum_{|\alpha|=k}1/\alpha!=n^k/k!$ by evaluating the expansion of $(x_1+\dots+x_n)^k$ at $x_i=1$ ([[thm-multinomial-theorem]]).

[F4] Real analyticity means representation by an absolutely convergent multi-indexed power series $f(x)=\sum_\alpha c_\alpha(x-a)^\alpha$ with $c_\alpha=D^\alpha f(a)/\alpha!$ on a polydisc ([[def-real-analytic-germ-in-several-variables]], [[def-multivariable-power-series]]).

[F5] Sphere and ball measures: $|\partial B_R|=\omega_{n-1}R^{n-1}$; multi-index notation $D^\alpha$, $\alpha!$, $h^\alpha$ ([[lem-sphere-and-ball-measures-scale]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F6] Calculus interface for the kernel computation: chain rule, product rule, real-power derivatives and closure of $C^k$ maps under algebra and composition ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F7] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

[F8] Closed Euclidean balls and spheres of positive radius are compact; compact Euclidean subsets are closed and bounded and closed bounded subsets are compact; continuous real-valued functions on nonempty compact metric spaces attain their extrema. Thus the closed ball used in step 1.1 is compact, its continuous $u$ is bounded there, and the compact product of the closed interior ball with the boundary sphere in step 2.1 supports the uniform derivative bounds ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-extreme-value-metric]]).

[F9] Under Countable Choice, a classical harmonic function has the ball mean-value property, and a continuous function with that property is $C^\infty$ ([[cor-ball-mean-value-property-for-harmonic-functions]], [[thm-continuous-mean-value-functions-are-harmonic]]).

[F10] For $n\ge2$, real $C^\infty$ data on a sphere have a unique smooth harmonic replacement on the ball, given by the explicit Poisson kernel formula ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F7] and suppose first that $u$ is real. Since $\Omega$ is open and $a\in\Omega$, choose $r>0$ with $\overline{B_{2r}(a)}\subset\Omega$. Then $u$ is continuous on the compact set $\overline{B_{2r}(a)}$, so $M:=\sup_{B_{2r}(a)}|u|$ is a finite nonnegative number. [given, F7, F8]

2.1 Poisson representation and derivative bounds from the kernel. For $n\ge3$, $u$ equals the Poisson integral of its trace $g:=u|_{\partial B_{2r}(a)}$ on $B_{2r}(a)$ by [F1], since both functions are $C^2\cap C(\overline{B_{2r}(a)})$ harmonic with trace $g$. For $n=2$, [F9] makes $u$ smooth on a neighbourhood of $\overline{B_{2r}(a)}$, so $g$ is smooth; [F10] then gives the same Poisson representation and uniqueness. In both cases the kernel is $P_{2r,a}$. Differentiating the representation through the integral by [F2] (for $x$ in the compact ball $\overline{B_r(a)}$ the sphere is separated from $x$, and all kernel derivatives are bounded there), we get $D^\alpha u(x)=\int_{\partial B_{2r}(a)}D^\alpha_xP_{2r,a}(x,y)u(y)\,dS_y$ for every multi-index $\alpha$ and every $x\in B_r(a)$. [step 1.1, F1, F2, F8, F9, F10]

3.1 Kernel derivative bound. Write $x=a+2r\zeta$, $y=a+2r\eta$, with $|\zeta|\le1/2$ and $|\eta|=1$. Then $P_{2r,a}(x,y)=(2r)^{1-n}g(\zeta,\eta)/\omega_{n-1}$, where $g=(1-|\zeta|^2)|\zeta-\eta|^{-n}$. Fix $\zeta_0$ with $|\zeta_0|\le1/2$, put $d=\zeta_0-\eta$ and $A=|d|^2\ge1/4$, and write $\zeta=\zeta_0+u$. Then $$|\zeta-\eta|^{-n}=A^{-n/2}(1+P_0(u))^{-n/2},\qquad P_0(u)=A^{-1}(2d\cdot u+|u|^2).$$ For $|u|\le1/4$, $|P_0(u)|\le16|u|$, so the binomial series for $(1+P_0)^{-n/2}$ converges near $u=0$, for example when $|u|<1/32$. Its coefficients satisfy $|\binom{-n/2}{m}|=\prod_{j=1}^m(1+(n/2-1)/j)\le(n/2)^m$. The coefficients of the linear and quadratic terms of $P_0$ are bounded by $12$ and $4$, respectively, and it has at most $2n$ monomials. For total degree $k\ge1$, only powers $m\le k$ contribute; counting at most $(2n)^m$ products in $P_0^m$, then multiplying by the degree-two polynomial $1-|\zeta_0+u|^2$ and by $A^{-n/2}\le2^n$, bounds each Taylor coefficient of $g$ of total degree $k$ by $C_2^k$ for a constant $C_2(n)$. Since $D^\alpha g(\zeta_0,\eta)=\alpha!$ times its $u^\alpha$ coefficient and $\alpha!\le |\alpha|!$, this gives $|D^\alpha_\zeta g|\le C_2^{|\alpha|}|\alpha|!$ for $|\alpha|\ge1$, uniformly in $\zeta_0,\eta$. Thus for $k=|\alpha|\ge1$, $|D^\alpha_xP_{2r,a}(x,y)|\le(2r)^{1-n-k}\omega_{n-1}^{-1}C_2^k k!$. [step 2.1, F6, algebra]

4.1 Factorial derivative bound on the inner ball. For $k:=|\alpha|\ge1$, combining steps 2.1 and 3.1 with [F5] gives, for $x\in B_r(a)$, $$|D^\alpha u(x)|\le C_2^k k!(2r)^{1-n-k}\omega_{n-1}^{-1}\int_{\partial B_{2r}(a)}|u|\,dS\le M C_2^k k!(2r)^{-k}.$$ For $k=0$, the bound $|u(x)|\le M$ follows directly from the definition of $M$. [step 2.1, step 3.1, F5, algebra]

5.1 Taylor remainder. Let $k\ge0$ and let $h$ satisfy $|h|<r$. The ball $B_r(a)$ is convex and open, contains $a$ and $a+h$, and $u$ is $C^{k+1}$ on it by step 2.1, so [F3] gives some $\theta\in(0,1)$ with $u(a+h)-T_ku(a;h)=\sum_{|\alpha|=k+1}D^\alpha u(a+\theta h)h^\alpha/\alpha!$. Since $a+\theta h\in B_r(a)$, step 4.1 bounds each term by $M(2r)^{-(k+1)}C_2^{k+1}(k+1)!|h^\alpha|/\alpha!$, and $\sum_{|\alpha|=k+1}|h^\alpha|/\alpha!\le\sum_{|\alpha|=k+1}|h|^{k+1}/\alpha!=n^{k+1}|h|^{k+1}/(k+1)!$ by [F3]; the two $(k+1)!$ factors cancel and the remainder is at most $M\bigl(nC_2|h|/(2r)\bigr)^{k+1}$. [step 2.1, step 4.1, F3, algebra]

5.2 The factorial bound. If $\overline{B_{2r}(a)}\subset\Omega$ and $M=\sup_{B_{2r}(a)}|u|$, step 4.1 gives the claimed estimate for $|\alpha|\ge1$ with $C_n:=C_2/2$; for $|\alpha|=0$ it is $|u(a)|\le M$. The constant depends only on $n$. [step 4.1, algebra]

6.1 Convergence and analyticity. Choose $0<\rho<2r/(nC_2)$. For $|h|<\rho$ the Taylor remainder bound in step 5.1 tends to zero, so the Taylor polynomials converge to $u(a+h)$. The degree-zero term is at most $M$, while for each $k\ge1$ step 4.1 and the multinomial bound in [F3] give $\sum_{|\alpha|=k}|D^\alpha u(a)h^\alpha|/\alpha!\le M(nC_2|h|/(2r))^k$. The geometric series converges, so the Taylor series converges absolutely and equals $u(a+h)$; the ball $|h|<\rho$ contains the polydisc $|h_i|<\rho/\sqrt n$, hence $u$ is real analytic at $a$ in the sense of [F4]. [step 4.1, step 5.1, F3, F4, F5, algebra]

7.1 Complex $u$: apply steps 1.1 through 6.1 to $\mathrm{Re}\,u$ and $\mathrm{Im}\,u$, which are real harmonic; the Taylor coefficients of $u$ are the sums of the corresponding coefficients, and the two real series give an absolutely convergent complex series. For $|\alpha|=0$, $|u(a)|\le M$ directly. For $k:=|\alpha|\ge1$, the real estimates give $|D^\alpha u(a)|\le2M C_n^k k!r^{-k}\le M(2C_n)^k k!r^{-k}$. Thus the stated estimate, including order zero, holds with constant $2C_n$ in place of $C_n$. Since $a\in\Omega$ was arbitrary, every harmonic function on $\Omega$ is real analytic. [step 6.1, step 5.2, cases] ∎
