---
id: thm-cm-smooth-string-fourier-series-solution
kind: theorem
title: "The classical $C^2$ fixed-end string: the sine series solves the wave equation with the given data, uniquely, with an explicit tail bound"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-sine-coefficients-of-periodic-functions, lem-cm-sine-coefficient-decay-by-integration-by-parts, lem-cm-cosine-sine-orthogonality-and-odd-extension, lem-cm-fejer-completeness-for-continuous-periodic-functions, lem-cm-uniform-convergence-with-derivatives-on-a-rectangle, thm-cm-dalembert-formula-and-string-solutions, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, thm-integral-test-for-series, def-ck-euclidean-maps-and-diffeomorphisms, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, def-sine-and-cosine-by-power-series, thm-integration-by-parts, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, thm-linearity-of-the-integral, def-derivative, def-interval, def-abs-value, thm-extreme-value-metric, thm-heine-borel-rn, thm-continuous-implies-integrable, thm-heine-cantor-metric, lem-uniform-integral-error-bound, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-substitution]
dependency_roles:
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  lem-cm-sine-coefficient-decay-by-integration-by-parts: mathematical-premise
  lem-cm-cosine-sine-orthogonality-and-odd-extension: mathematical-premise
  lem-cm-fejer-completeness-for-continuous-periodic-functions: mathematical-premise
  lem-cm-uniform-convergence-with-derivatives-on-a-rectangle: mathematical-premise
  thm-cm-dalembert-formula-and-string-solutions: mathematical-premise
  thm-weierstrass-m-test-for-function-series: mathematical-premise
  def-series-of-real-functions: mathematical-premise
  thm-integral-test-for-series: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-abs-value: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  lem-uniform-integral-error-bound: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-substitution: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapters 1–2 (Fourier coefficients, summability and the uniqueness theorem (2.14))"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (standing waves of the fixed-end string)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $L>0$, $c>0$. Let $F:\mathbb R\to\mathbb R$ be odd and $2L$-periodic of class $C^5$ and let $G:\mathbb R\to\mathbb R$ be odd and $2L$-periodic of class $C^4$ ([[def-cm-sine-coefficients-of-periodic-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]), with $M_5:=\sup|F^{(5)}|<\infty$, $M_4:=\sup|G^{(4)}|<\infty$. Put

$$a_n:=b_n(F),\qquad d_n:=\frac{b_n(G)}{\omega_n},\qquad \omega_n:=\frac{cn\pi}{L}\qquad(n\ge1),$$

and define, for $(t,x)\in\mathbb R^2$,

$$u(t,x):=\sum_{n\ge1}\Bigl[a_n\cos(\omega_nt)+d_n\sin(\omega_nt)\Bigr]\sin\Bigl(\frac{n\pi x}{L}\Bigr). \tag{S}$$

Then:

**(i)** the series (S) and the termwise series of $\partial_tu,\partial_xu,\partial_t^2u,\partial_t\partial_xu,\partial_x^2u$ converge absolutely and uniformly on every strip $[-T,T]\times[0,L]$; the sum $u$ is $C^2$, is odd and $2L$-periodic in $x$, satisfies $u_{tt}=c^2u_{xx}$, obeys the fixed-end conditions $u(t,0)=u(t,L)=0$, and has

$$u(0,x)=F(x),\qquad u_t(0,x)=G(x)\qquad(x\in\mathbb R).$$

**(ii)** (Uniqueness.) If $v$ is $C^2$ on $[0,T]\times[0,L]$ for some $T>0$, satisfies $v_{tt}=c^2v_{xx}$ there, $v(t,0)=v(t,L)=0$ for all $t$, and $v(0,\cdot)=v_t(0,\cdot)=0$, then $v=0$ on $[0,T]\times[0,L]$.

**(iii)** (Tail bound.) For every $N\ge1$ and every $(t,x)\in[-T,T]\times[0,L]$,

$$\Bigl|u(t,x)-\sum_{n\le N}\Bigl[a_n\cos(\omega_nt)+d_n\sin(\omega_nt)\Bigr]\sin\Bigl(\frac{n\pi x}{L}\Bigr)\Bigr|\le C\,(N+1)^{-4},$$

where $C:=2\bigl(\frac{2L^5M_5}{\pi^5}+\frac{2L^5M_4}{c\pi^5}\bigr)$.

## Facts & Assumptions

**Given:** $L,c>0$; the odd periodic data $F,G$ with the stated regularities and bounds.

[F1] Coefficient decay: $|a_n|\le\frac{2L^5M_5}{\pi^5n^5}$ and $|b_n(G)|\le\frac{2L^4M_4}{\pi^4n^4}$, hence $|d_n|\le\frac{2L^5M_4}{c\pi^5n^5}$ ([[lem-cm-sine-coefficient-decay-by-integration-by-parts]]).

[F2] The modes $\sin(n\pi x/L)\cos(\omega_nt)$ and $\sin(n\pi x/L)\sin(\omega_nt)/(\omega_n)$ solve $u_{tt}=c^2u_{xx}$, vanish at $x=0,L$, and have initial data $(\sin(n\pi x/L),0)$ and $(0,\sin(n\pi x/L))$ respectively ([[thm-cm-dalembert-formula-and-string-solutions]](c), [[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F3] Weierstrass majorant test: a series of functions majorised by a summable sequence converges absolutely and uniformly ([[thm-weierstrass-m-test-for-function-series]], [[def-series-of-real-functions]]).

[F4] The rectangle differentiation lemma: uniform convergence of a $C^2$ sequence together with its first and second partial derivatives implies the limit is $C^2$ with those derivatives ([[lem-cm-uniform-convergence-with-derivatives-on-a-rectangle]]).

[F5] Orthogonality and completeness: $\int_0^L\sin(n\pi x/L)\sin(k\pi x/L)dx=(L/2)\delta_{nk}$ and the full-period identities for odd $2L$-periodic functions ([[lem-cm-cosine-sine-orthogonality-and-odd-extension]]); a continuous one-periodic function with all character integrals zero vanishes, hence a continuous odd $2L$-periodic real function with all sine coefficients zero vanishes: rescale $x=2Ly$ by [[thm-substitution]] and use $e^{-i r}=\cos r-i\sin r$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]) ([[lem-cm-fejer-completeness-for-continuous-periodic-functions]]).

[F6] For $N\ge1$ and integers $m>N+1$, decreasing $x^{-5}$ gives $\sum_{n=N+2}^{m}n^{-5}\le\int_{N+1}^{m}x^{-5}dx\le\tfrac14(N+1)^{-4}$. Passing to the limit of the nonnegative partial sums and adding $(N+1)^{-5}$ gives $\sum_{n>N}n^{-5}\le2(N+1)^{-4}$, using only proper integrals ([[thm-integral-test-for-series]], [[thm-additivity-over-subintervals]], [[thm-ftc-second-part]]).

[F7] For a $C^1$ function $H$ on a compact time-space rectangle, the time difference quotient $Q_h(x):=(H(t+h,x)-H(t,x))/h$ equals $h^{-1}\int_t^{t+h}\partial_tH(s,x)\,ds$ by the fundamental theorem. Uniform continuity of $\partial_tH$ on the rectangle makes $Q_h\to\partial_tH(t,\cdot)$ uniformly in $x$. These functions are continuous and integrable, so [[lem-uniform-integral-error-bound]] gives convergence of their integrals and $\frac{d}{dt}\int_0^LH(t,x)dx=\int_0^L\partial_tH(t,x)dx$ ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-heine-cantor-metric]], [[lem-uniform-integral-error-bound]]).

[F8] For a $C^2$ function on an open neighbourhood of a point $(t,x)$, the mixed partials $v_{tx}$ and $v_{xt}$ agree. The divided rectangular increment over $[t,t+h]\times[x,x+k]$ equals the averages of the two ordered mixed partials by applying the one-variable fundamental theorem in each order; continuity makes both averages tend to their point values ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]]).

[F9] For $C^2$ data, integration by parts in $x$ on $[0,L]$ gives $\int_0^Lv_xv_{xt}dx=[v_xv_t]_0^L-\int_0^Lv_{xx}v_tdx=-\int_0^Lv_{xx}v_tdx$ when $v_t(t,0)=v_t(t,L)=0$, using [F8] to identify $v_{xt}=\partial_xv_t$ ([[thm-integration-by-parts]], [[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]], [[def-derivative]]).

## Proof

**Proof technique:** direct; majorise the differentiated series, identify the initial data by completeness, and prove uniqueness by the energy identity.

1.1 By [F1] the coefficient sequences satisfy $|a_n|+|d_n|\le C_1n^{-5}$ with $C_1:=\frac{2L^5M_5}{\pi^5}+\frac{2L^5M_4}{c\pi^5}$. Since $|\sin|\le1$, $|\cos|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]) and $|\partial_t^2|\le\omega_n^2$, $|\partial_t\partial_x|\le\omega_n(n\pi/L)$, $|\partial_x^2|\le(n\pi/L)^2$ termwise ([[thm-sine-and-cosine-derivatives]]), each of the five differentiated series is majorised termwise by a constant multiple of $n^{-3}$: $$\omega_n^2(|a_n|+|d_n|)\le\Bigl(\frac{c\pi}{L}\Bigr)^2C_1n^{-3},\quad \omega_n\frac{n\pi}{L}(|a_n|+|d_n|)\le\frac{c\pi^2}{L^2}C_1n^{-3},\quad\Bigl(\frac{n\pi}{L}\Bigr)^2(|a_n|+|d_n|)\le\frac{\pi^2}{L^2}C_1n^{-3}.$$ These majorants are independent of $t$ and $x$, so [F3] gives absolute uniform convergence of the series and all five differentiated series on $\mathbb R^2$, in particular on every stated strip. [given, F1, F2, F3, algebra]

1.2 (Uniqueness.) Let $v$ be as in (ii) and put $E(t):=\frac12\int_0^L\bigl(v_t(t,x)^2+c^2v_x(t,x)^2\bigr)dx$, which is finite for each $t$ because the integrand is continuous on the compact interval ([[thm-continuous-implies-integrable]]). By [F7] applied to this integrand, $E$ is differentiable and its derivative is the integral of its time derivative. Using [F9], $$E'(t)=\int_0^L\bigl(v_tv_{tt}+c^2v_xv_{xt}\bigr)dx=\int_0^Lv_t\bigl(v_{tt}-c^2v_{xx}\bigr)dx=0 ,$$ where the boundary term vanishes because $\partial_tv(t,0)=\partial_tv(t,L)=0$: the endpoint conditions $v(\cdot,0)=v(\cdot,L)=0$ hold identically in $t$, so their time derivatives vanish. The integral-evaluation theorem [[thm-ftc-second-part]] gives $E(t)-E(0)=\int_0^tE'(s)\,ds=0$, so $E$ is constant; $E(0)=0$ because $v(0,\cdot)=v_t(0,\cdot)=0$; so $v_t(t,x)=v_x(t,x)=0$ for all $(t,x)$ by continuity and nonnegativity of the integrand. Thus $v$ is constant on the connected rectangle and, vanishing at $t=0$, is identically $0$. This is (ii). [given, F7, F8, F9, algebra]

2.1 Let $u_N$ be the $N$-th partial sum of (S). Fix any compact rectangle in $\mathbb R^2$ and translate its coordinates to the form required by [F4]. Step 1.1 gives uniform convergence there of the partial sums and all first and second partial-derivative series, so [F4] makes the limit $u$ $C^2$ on the rectangle interior with those termwise derivatives. Such rectangles cover $\mathbb R^2$. Since every summand satisfies $u_{n,tt}=c^2u_{n,xx}$ by [F2] and the differentiated series converge uniformly, $u_{tt}=c^2u_{xx}$. Also every summand vanishes at $x=0$ and $x=L$, so $u(t,0)=u(t,L)=0$, and each term is odd and $2L$-periodic in $x$, so $u$ is too. [step 1.1, F2, F4, algebra]

2.2 (Initial data.) Let $R:=F-\sum_n a_n\sin(n\pi x/L)$; uniform convergence from step 1.1 makes $R$ continuous, odd and $2L$-periodic. For each $k\ge1$, the uniform integral-error bound and [F5] give $\int_0^LR(x)\sin(k\pi x/L)dx=\tfrac L2b_k(F)-\tfrac L2a_k=0$. Rescaling $x=2Ly$ and using the exponential identity in [F5], the character integral of $R(2L\,\cdot\,)$ at positive $k$ is $-\tfrac{i}{L}\int_0^LR(x)\sin(k\pi x/L)dx=0$; its cosine part vanishes by oddness. The $k=0$ integral vanishes by the mean identity of [F5], and negative $k$ gives the opposite sine sign with the same zero integral. Thus every character integral vanishes and Fejer completeness [F5] yields $R=0$. For $G$, its coefficient series converges uniformly by the $n^{-4}$ bound [F1], so the same argument gives $G=\sum_n b_n(G)\sin(n\pi x/L)$. Evaluating (S) and its uniformly convergent time-derivative series at $t=0$ gives $u(0,x)=F(x)$ and $u_t(0,x)=G(x)$ for all real $x$. [step 1.1, F1, F3, F5, algebra]

3.1 (Tail bound.) For fixed $(t,x)$ the tail of (S) is bounded in absolute value by $\sum_{n>N}(|a_n|+|d_n|)\le C_1\sum_{n>N}n^{-5}\le2C_1(N+1)^{-4}=C(N+1)^{-4}$ by [F1], the triangle inequality and [F6]. This is (iii). [step 1.1, F1, F6, algebra] ∎

## Remarks

- The theorem solves the fixed-end wave problem for $C^5$/$C^4$ odd periodic data with an explicit uniform tail bound; it does not treat merely continuous or $L^2$ data, non-periodic compatibility conditions beyond the odd extension, or the $L^2$ convergence of the full trigonometric system. The uniqueness clause is stated for $C^2$ solutions on a strip and uses only the energy identity.

- The exact constants in (iii) inherit the constants of the coefficient decay; they are not asserted to be optimal, and no numerical error is claimed. The initial-data convergence is uniform on $\mathbb R$ because the same convergence mode produced the series.
