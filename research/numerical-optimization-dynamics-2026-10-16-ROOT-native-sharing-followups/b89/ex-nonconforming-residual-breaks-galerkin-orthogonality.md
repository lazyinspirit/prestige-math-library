---
id: ex-nonconforming-residual-breaks-galerkin-orthogonality
kind: example
title: A broken P1 test exposes a nonzero consistency residual
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-variational-crime-error-framework, thm-second-strang-lemma-for-nonconforming-galerkin, thm-cea-quasi-optimality-for-conforming-galerkin-approximations, def-countable-choice, thm-reals-cauchy-complete, def-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-holder-inequality-for-integrals, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-tonelli-and-fubini-for-completed-product-measures, thm-lax-milgram, thm-ftc-second-part, lem-derivative-of-a-power, thm-lebesgue-measure-of-a-box-of-every-kind, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-continuous-implies-integrable, lem-changing-a-function-at-finitely-many-points, thm-additivity-over-subintervals]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Example

Encode a one-dimensional zero-boundary function by its derivative. The exact Hilbert space is the mean-zero subspace $V:=\{g\in L^2(0,1):\int_0^1g=0\}$, with $a(g,h)=\int_0^1gh$. Its associated function is $U_g(x):=\int_0^xg(t)\,dt$. The source functional is $F(h):=\int_0^16xU_h(x)\,dx$. Its exact solution is $g_u(x)=1-3x^2$, whose associated function is $U_{g_u}(x)=x-x^3$.

For the nonconforming discrete space, take broken piecewise-affine functions on $[0,1/2]\cup[1/2,1]$ that vanish at $0$ and $1$, with no continuity imposed at $1/2$. Identify each such function with its two cellwise slopes, a two-dimensional space $V_h$ of piecewise-constant fields. For $\omega_h=s_L\mathbf1_{[0,1/2]}+s_R\mathbf1_{(1/2,1]}$, define its associated broken function by $U_{\omega_h}(x)=s_Lx$ on the left cell and $U_{\omega_h}(x)=s_R(x-1)$ on the right cell. Use $\widetilde a_h(g,\omega_h):=\int_0^1g\omega_h$ and $F_h(\omega_h):=\int_0^16xU_{\omega_h}(x)\,dx$. The left basis function $\phi_L(x)=2x$ on the first cell and $0$ on the second corresponds to slope field $\omega_L=2\mathbf1_{[0,1/2]}$; it has residual $F_h(\omega_L)-\widetilde a_h(g_u,\omega_L)=-1/4$. Thus the exact solution does not satisfy the broken discrete equation on $V_h$: its consistency residual is nonzero. This is the term retained by the second Strang estimate in place of an exact Galerkin identity. The conforming Céa hypothesis $V_h\subseteq V$ is also false.

## Facts & Assumptions

**Given:** Countable Choice; $L^2(0,1)$ with its integral inner product; the mean-zero subspace $V$; the exact and broken forms and loads in the Example; and the broken basis functions $\phi_L(x)=2x$ on the first cell and $0$ on the second, and $\phi_R(x)=0$ on the first cell and $2(x-1)$ on the second.

[F1] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] and [[def-hilbert-space]]: under Countable Choice, $L^2(0,1)$ is a Hilbert space for the integral pairing; a complete inner-product space is a Hilbert space.

[F2] [[thm-holder-inequality-for-integrals]]: $\int_0^1|g|\le\|g\|_2$, and $|\int fg|\le\|f\|_2\|g\|_2$.

[F3] [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]: the primitive $U_g(x)=\int_0^xg(t)\,dt$ is independent of the representative of the $L^2$ class $g$.

[F4] [[thm-tonelli-and-fubini-for-completed-product-measures]]: under Countable Choice, absolutely integrable functions on the product have equal iterated integrals.

[F5] [[thm-lax-milgram]] under [[def-countable-choice]]: a bounded coercive form on a Hilbert space with bounded load has a unique variational solution.

[F6] [[thm-second-strang-lemma-for-nonconforming-galerkin]]: a bounded extension to $V+V_h$ and a coercive discrete form yield an error estimate with the exact-solution consistency residual.

[F7] [[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]: its conforming hypothesis is $V_h\subseteq V$.

[F8] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers has a real limit.

[F9] [[thm-ftc-second-part]] and [[lem-derivative-of-a-power]]: the displayed polynomial integrals are evaluated by explicit antiderivatives and the fundamental theorem of calculus.

[F10] Under Countable Choice, $\lambda_1([0,1])=1$ and every interval has Lebesgue measure equal to its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-countable-choice]]).

[F11] Under Countable Choice, a bounded Riemann-integrable function on a closed interval is Lebesgue integrable and the two integrals agree ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[def-countable-choice]]).

[F12] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F13] Continuous functions on closed intervals are Riemann integrable; changing finitely many values preserves integrability and the integral; and the Riemann integral is additive over adjacent intervals ([[thm-continuous-implies-integrable]], [[lem-changing-a-function-at-finitely-many-points]], [[thm-additivity-over-subintervals]]).

[A1] The exact solution candidate is $g_u(x)=1-3x^2$ and its associated function is $U_{g_u}(x)=x-x^3$.

[A2] $V_h=\operatorname{span}\{\omega_L,\omega_R\}$ with $\omega_L=2\mathbf1_{[0,1/2]}$ and $\omega_R=2\mathbf1_{(1/2,1]}$. Its norm is $\|\omega_h\|_h=\|\omega_h\|_{L^2}$, and $\widetilde a_h(g,\omega_h)=\int_0^1g\omega_h$.

## Verification

1.1 The functional $L(g):=\int_0^1g$ is linear by [F12] and bounded by [F2], since $\|1\|_2=1$ by [F10]. Thus $V=\ker L$ is a closed linear subspace of $L^2$. If $(g_n)$ is Cauchy in $V$, [F1] gives an $L^2$ limit $g$; continuity of $L$ gives $L(g)=0$, so $g\in V$. Hence $V$ is a Hilbert space. [F1, F2, F10, F12, given, algebra]

1.2 For $\omega_h=c_L\omega_L+c_R\omega_R$, [F10, F11, F13] give $\|\omega_h\|_h^2=\int_0^1|\omega_h|^2=2(c_L^2+c_R^2)$ and $\|U_{\omega_h}\|_2^2=(c_L^2+c_R^2)/6=\|\omega_h\|_h^2/12$, by integrating the bounded piecewise-polynomial representatives. They also give $\|6x\|_2^2=\int_0^1 36x^2\,dx=12$. A Cauchy sequence in $V_h$ therefore has Cauchy coefficient sequences; [F8] gives their limits and the same norm formula gives convergence in $V_h$. Thus $V_h$ is a two-dimensional Hilbert space. Moreover, $\omega_L+\omega_R=2$ is constant, and every $g\in L^2(0,1)$ decomposes as $g=(g-\int_0^1g)+\frac12(\int_0^1g)(\omega_L+\omega_R)$; the first summand lies in $V$ and the second in $V_h$. Thus $X_h=V+V_h=L^2(0,1)$, with the common $L^2$ norm restricting to both spaces. The discrete form has coercivity constant $1$, and the extension $\widetilde a_h(g,\omega_h)=\int g\omega_h$ is bounded by [F2]. Holder [F2] and the displayed finite $L^2$ norms show $F_h(\omega_h)=\int_0^1 6xU_{\omega_h}(x)\,dx$ is bounded. Hence the stability and bounded-extension hypotheses of [F6] hold. [A2, F2, F6, F8, F9, F10, F11, F13, algebra]

2.1 The polynomial $g_u=1-3x^2$ has Lebesgue integral zero by [F9, F11], so $g_u\in V$, and its primitive is $U_{g_u}=x-x^3$. By [F2], $|U_h(x)|\le\|h\|_2$, hence $\|U_h\|_2\le\|h\|_2$ using [F10]. Since $\|6x\|_2^2=12$ by step 1.2, Holder [F2] bounds $F(h)=\int_0^1 6xU_h(x)\,dx$ for $h\in V$; [F3] makes the primitive representative-independent. The function $(x,t)\mapsto6x h(t)\mathbf1_{0\le t\le x\le1}$ is absolutely integrable, with absolute integral at most $6\|h\|_1\le6\|h\|_2$. Fubini [F4] gives $F(h)=\int_0^1h(t)3(1-t^2)\,dt$. Linearity [F12] and $\int h=0$ yield $F(h)=\int_0^1h(t)(1-3t^2)\,dt=a(g_u,h)$. The form is the $L^2$ inner product, hence bounded and coercive, so [F5] confirms the unique exact solution is $g_u$. [A1, F2, F3, F4, F5, F9, F10, F11, F12, step 1.1, step 1.2, algebra]

2.2 The associated broken function for $\omega_L$ is $\phi_L$. By [F9, F11, F13], $F_h(\omega_L)=\int_0^{1/2}12x^2\,dx=1/2$, whereas $\widetilde a_h(g_u,\omega_L)=\int_0^{1/2}2(1-3x^2)\,dx=2[x-x^3]_0^{1/2}=3/4$. The residual is $-1/4$ and $\|\omega_L\|_h=\sqrt2$, so $\delta_h^{\mathrm{nc}}(g_u)\ge1/(4\sqrt2)>0$. [A1, A2, F9, F11, F13, step 1.2, algebra]

3.1 The slope field $\omega_L$ has integral $1$, so $\omega_L\notin V$ and $V_h\nsubseteq V$. Thus the conforming hypothesis in [F7] fails; independently, step 2.2 shows that the exact solution does not satisfy the discrete equation on $V_h$. This is the consistency term retained by [F6]. [F6, F7, step 2.2] ∎
