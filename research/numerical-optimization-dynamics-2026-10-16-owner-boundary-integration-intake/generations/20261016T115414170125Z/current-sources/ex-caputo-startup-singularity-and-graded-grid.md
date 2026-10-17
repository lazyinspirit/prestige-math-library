---
id: ex-caputo-startup-singularity-and-graded-grid
kind: example
title: A Caputo startup singularity and a graded-grid calculation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-uniform-and-graded-grid-l1
  - lem-l1-positive-weights-and-discrete-comparison
  - thm-l1-stability-and-smooth-data-error
  - def-caputo-derivative-and-fractional-integral
  - def-absolutely-continuous-function
  - def-real-gamma-function-by-the-euler-integral
  - def-real-beta-integral
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - lem-fractional-integral-kernel-power-integral
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - def-higher-derivatives-and-smoothness
  - cor-mean-value-theorem
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-countable-choice
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-substitution-for-improper-integrals
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Bangti Jin, Raytcho Lazarov, and Zhi Zhou, An Analysis of the L1 Scheme for the Subdiffusion Equation with Nonsmooth Data, IMA Journal of Numerical Analysis, §§1–3
      url: https://discovery.ucl.ac.uk/1459965/1/fracL1scheme_IMA_rev.pdf
    - title: Martin Stynes, Eugene O'Riordan, and José Luis Gracia, Error Analysis of a Finite Difference Method on Graded Meshes for a Time-Fractional Diffusion Equation, SIAM Journal on Numerical Analysis 55 (2017), §§1, 3–5
      url: https://www.researchgate.net/publication/306379686_Error_Analysis_of_a_Finite_Difference_Method_on_Graded_Meshes_for_a_Time-Fractional_Diffusion_Equation
proof_strategy: direct
axiom_use: Countable Choice is used only through the absolute-continuity derivative theorem in step 1.2 and the Lebesgue change-of-variables formula in step 2.1.
---

## Example

Let $u(t)=\sqrt t$, $0\le t\le T$, and $\alpha=1/2$. Then $u$ is
absolutely continuous and $D_C^{1/2}u(t)=\Gamma(3/2)$ for $t>0$, but
$u\notin C^2([0,T])$. With $\lambda=0$ and forcing
$f(t)=\Gamma(3/2)$, the uniform-grid first L1 step has state error

$$u(h)-U^1=(1-\Gamma(3/2)^2)\sqrt h>0,$$

so it is not $O(h^{3/2})$. For the power-graded mesh
$t_k=T(k/N)^2$ with $N=4$, the nodes are
$0,T/16,T/4,9T/16,T$; the first-step state error is
$(1-\Gamma(3/2)^2)\sqrt T/N$. This first-node calculation does not prove an
optimal global graded-mesh rate.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $u(t)=t^{1/2}$, $\alpha=1/2$,
$\lambda=0$, $u_0=0$, $f(t)=\Gamma(3/2)$, and an integer $N\ge1$.

[A1] Countable Choice: every sequence of nonempty sets admits a choice
function ([[def-countable-choice]]). It is used only through [F10] and [F13].

[F1] [[def-absolutely-continuous-function]]: $u$ is absolutely continuous
when the sum of its endpoint increments over any finite disjoint family of
intervals is small whenever their total length is small.

[F2] [[def-caputo-derivative-and-fractional-integral]]:
for continuous $g$, $I^\beta g(t)=\Gamma(\beta)^{-1}\int_0^t
(t-s)^{\beta-1}g(s)\,ds$ is finite for every $t$; for
$u\in AC$ with $u'\in L^1$, $D_C^\alpha u=\Gamma(1-\alpha)^{-1}\int_0^t
(t-s)^{-\alpha}u'(s)ds$ almost everywhere, and at points where this
integral is finite its pointwise integral value is the representative used
below.

[F3] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(q)=\int_0^\infty s^{q-1}e^{-s}ds$ for $q>0$.

[F4] [[def-real-beta-integral]] and
[[thm-real-beta-gamma-identity]]:
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ for $p,q>0$.

[F5] [[thm-real-gamma-functional-equation]]:
$\Gamma(q+1)=q\Gamma(q)$ and $\Gamma(1)=1$ for $q>0$.

[F6] [[alg-uniform-and-graded-grid-l1]]: the first-step L1 weight on a
uniform or general grid is
$b_{1,1}=t_1^{-\alpha}/\Gamma(2-\alpha)$.

[F7] [[thm-l1-stability-and-smooth-data-error]]: the $O(h^{2-\alpha})$
uniform-grid estimate assumes $u\in C^2([0,T])$.

[F8] [[def-real-power]], [[thm-real-power-continuity-and-derivatives]],
and [[def-higher-derivatives-and-smoothness]]: for $t>0$,
$(t^{1/2})'=1/(2\sqrt t)$ and $(t^{1/2})''=-1/(4t^{3/2})$.

[F9] [[lem-fractional-integral-kernel-power-integral]] and
[[thm-substitution-for-improper-integrals]]:
$\int_0^t s^{-1/2}ds=2\sqrt t$ for $t>0$, by reflection from the displayed
kernel integral.

[F10] [[thm-absolutely-continuous-functions-have-integrable-derivatives]]:
if $u$ is absolutely continuous, then $u'\in L^1(0,T)$.

[F11] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]:
pointwise domination of nonnegative measurable functions preserves the
integral inequality and finiteness.

[F12] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]:
the nonnegative integral is additive over a finite measurable partition.

[F13] [[cor-c-one-change-of-variables-for-l-one-functions]]:
under [A1], if $S:(0,1)\to(0,t)$ is a $C^1$ diffeomorphism and $g\in
L^1(0,t)$, then $\int_0^t g(s)\,ds=\int_0^1 g(S(y))|S'(y)|\,dy$.

[F14] [[cor-mean-value-theorem]]: for a continuous function on a closed
interval differentiable on its interior, some interior derivative equals
the secant slope.

[F15] [[lem-l1-positive-weights-and-discrete-comparison]]: the returned L1
sequence satisfies its discrete equation at each grid node.

## Verification

**Proof technique:** direct.

1.1 Fix an arbitrary $\varepsilon>0$ and set $\eta=\min(T,\varepsilon^2/16)$ and $\delta=\varepsilon^2/8$. By [F14] and $u'(s)>0$ for $s>0$, $u$ is increasing. Reorder any finite family of disjoint intervals by left endpoints; monotonicity across the gaps shows its summed endpoint increments on a subinterval $[a,b]$ are at most $u(b)-u(a)$. For $t>0$, $u'(t)=1/(2\sqrt t)$ and $u(t)=\int_0^t(2\sqrt s)^{-1}ds$ by [F9]. If $T\le\varepsilon^2/16$, the family contributes at most $u(T)-u(0)=\sqrt T\le\varepsilon/4<\varepsilon$. If $T>\varepsilon^2/16$, split each interval at $\eta=\varepsilon^2/16$. The pieces below $\eta$ contribute at most $u(\eta)-u(0)=\sqrt\eta=\varepsilon/4$. On pieces above $\eta$, $u'(s)\le1/(2\sqrt\eta)=2/\varepsilon$, so [F14] bounds their total increments by $(2/\varepsilon)\delta=\varepsilon/4$. Thus [F1]'s defining condition holds. But $u''(t)=-1/(4t^{3/2})$ is unbounded as $t\downarrow0$, so $u\notin C^2([0,T])$. [given, F1, F8, F9, F14, algebra]

1.2 Fix $t>0$. By [F10], $u'\in L^1(0,T)$. On $(0,t/2)$, $(t-s)^{-1/2}\le(t/2)^{-1/2}$; on $(t/2,t)$, $u'(s)\le1/(2\sqrt{t/2})$. The fractional-integral clause of [F2] makes $(t-s)^{-1/2}$ integrable on $(0,t)$; [F11] bounds the product on each half, and [F12] adds the two finite integrals. Hence $(t-s)^{-1/2}u'(s)\in L^1(0,t)$ for every $t>0$. [given, F2, F10, F11, F12, F8]

2.1 For the pointwise representative in [F2], apply [F13] to the integrable kernel in step 1.2 with $S(y)=ty$. This is a $C^1$ diffeomorphism with $S'(y)=t$, and the Jacobian cancels the factor $t^{-1}$ in $(ty)^{-1/2}(t-ty)^{-1/2}$. Therefore $$D_C^{1/2}u(t)=\frac1{2\Gamma(1/2)}\int_0^1(1-y)^{-1/2}y^{-1/2}\,dy=\frac{B(1/2,1/2)}{2\Gamma(1/2)}=\frac12\Gamma(1/2)=\Gamma(3/2),$$ using the Beta–Gamma identity [F4] and $\Gamma(1)=1$ plus the functional equation [F5]. This holds for every $t>0$. [given, A1, F2, F4, F5, F13, step 1.2, algebra]

3.1 For the uniform grid, [F6] and [F15] give the equation $\delta_h^{1/2}U^1=f(h)$, hence $U^1=\Gamma(3/2)^2\sqrt h$. Also $$\Gamma(3/2)=\int_0^\infty\sqrt s\,e^{-s}ds <\frac12\int_0^\infty(s+1)e^{-s}ds=1,$$ because $(\sqrt s-1)^2\ge0$ with strict inequality except at $s=1$, and [F3]–[F5] evaluate the last integrals. Hence the stated error is positive. Its ratio to $h^{3/2}$ is $(1-\Gamma(3/2)^2)/h$, which is unbounded as $h\downarrow0$; the smooth-data theorem [F7] cannot be extended to this example. [given, F3, F4, F5, F6, F7, F15, step 2.1, algebra]

4.1 On the power-graded grid, $t_1=T/N^2$, so [F6] gives $b_{1,1}=N/(\Gamma(3/2)\sqrt T)$. The first discrete equation, justified by [F15], yields $U^1=\Gamma(3/2)^2\sqrt T/N$, and subtracting it from $u(t_1)=\sqrt T/N$ gives the displayed graded first-step error. For $N=4$ the nodes follow by substituting $k=0,1,2,3,4$ into $t_k=T(k/4)^2$. [given, F6, F15, algebra] ∎
