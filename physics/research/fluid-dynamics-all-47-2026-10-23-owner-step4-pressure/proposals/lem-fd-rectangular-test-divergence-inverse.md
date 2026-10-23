---
id: lem-fd-rectangular-test-divergence-inverse
kind: lemma
title: "Rectangular continuous divergence inverse on mean-zero tests"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - lem-uniform-integral-error-bound
dependency_roles:
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  lem-uniform-integral-error-bound: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 6 §6.1, PDF pp. 55–56: Stokes pressure and inf–sup context; the explicit rectangle right inverse is proved here."
---

## Statement

Let $d\ge1$ and let $\Omega=\prod_{i=1}^d(a_i,b_i)$ be a nonempty finite open rectangle. Write $D(\Omega)=C_c^\infty(\Omega;\mathbb R)$ and $D_0(\Omega)=\{h\in D(\Omega):\int_\Omega h=0\}$. There is one linear map $R:D_0(\Omega)\to D(\Omega;\mathbb R^d)$ with $\operatorname{div}(Rh)=h$ such that, for every compact $K\subset\Omega$, there is a compact $K'\subset\Omega$ containing the support of $Rh$ whenever $h$ is supported in $K$, and every fixed-support restriction is continuous for the seminorms $\sup|\partial^\alpha h|$. This same map can be chosen to satisfy
$$\|Rh\|_{1,2;\Omega}\le C_\Omega\|h\|_{1,2;\Omega}\qquad(h\in D_0(\Omega)),$$
where $\|g\|_{1,2;\Omega}^2=\int_\Omega(|g|^2+|\nabla g|^2)\,dx$, summing over components for vector fields, and $C_\Omega<\infty$ depends on the rectangle and the fixed bumps in its construction, but not on the support of $h$. No bound from the $L^2$ norm of $h$ to the $H^1$ norm of $Rh$ is asserted.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[A1] For each nonempty interval, an affine rescaling of $b(s)=\exp(-1/(1-s^2))$ for $|s|<1$, extended by zero, is a positive smooth compactly supported bump; its integral is positive and finite, so it can be normalized to one.

[F1] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: a continuous real function on a closed nondegenerate finite-dimensional rectangle is Riemann integrable.

[F2] [[thm-riemann-fubini-on-product-rectangles]]: if a Riemann-integrable function on a product of closed rectangles has integrable sections, its ordinary iterated integrals in both orders exist and equal its multiple integral.

[F3] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: for continuous real $g$ and its continuous parameter derivative on a compact two-variable rectangle, that derivative passes through the finite integral, including one-sided parameter endpoints.

[F4] [[lem-uniform-integral-error-bound]]: if integrable $f,g$ differ in sup norm by at most $M$ on $[a,b]$, their integrals differ by at most $(b-a)M$.

[F5] [[thm-holder-inequality-for-integrals]]: for real square-integrable functions, $\int|fg|\le\|f\|_2\|g\|_2$; in particular, on an interval of length $\ell$, $|\int g|^2\le\ell\int|g|^2$.

## Proof

**Given:** A nonempty finite rectangle $\Omega$, the test-space seminorms in the Statement, and a zero-integral test $h$.

1.1 For the given rectangle, fix once for all inputs and support sets an affine copy of the bump in
[A1] on each side interval. Every derivative on $|s|<1$ is the exponential times a finite sum of
rational terms with poles of finite order at $|s|=1$; $e^{-1/(1-s^2)}$ tends to zero faster than
every such power, so extension by zero is smooth. By [F1] its continuous compact-interval integral exists; positivity makes it nonzero, so
normalization gives $\theta_i$. For $d=1$, put $(Rh)(x)=\int_{a_1}^x h(s)\,ds$. The primitive
difference quotient differs from $h(x)$ by at most $\sup\{|h(s)-h(x)|:s\text{ lies between }x\text{
and }x+\delta\}$, which tends to zero by continuity. Its derivative is therefore $h$, and it
vanishes near both endpoints because $h$ is compactly supported and has total integral zero. Its
support is compact inside the interval, and its $j$th derivative is $h^{(j-1)}$ for $j\ge1$; the
zeroth seminorm is bounded by $(b_1-a_1)\sup|h|$. [given, A1, F1, F4, algebra]

1.2 Here and below the coordinate integrals of smooth compactly supported functions may be computed
on the closed coordinate intervals after extension by zero. This extension is smooth on a
neighborhood of the closed box: compact support leaves a neighborhood of every boundary face where
the function is zero. By [F1] the function and every coordinate section are Riemann integrable;
[F2], applied to successive coordinate blocks, identifies all iterated orders with the same box
integral. In particular, the marginal $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$ has total integral equal
to $\int_\Omega h$. [given, F1, F2]

1.3 To differentiate a marginal, fix all other coordinates and restrict the differentiated
coordinate to a compact interval inside its open side interval. The integrand and each parameter
derivative are continuous on the resulting compact two-variable rectangle, so repeated [F3] gives
$$\partial_{x'}^\beta H(x')=\int_{a_1}^{b_1}\partial_{x'}^\beta h(s,x')\,ds,\qquad \sup|\partial^\beta H|\le (b_1-a_1)\sup|\partial_{x'}^\beta h|.$$
The inequality follows from [F4] with the second integrand zero. Continuity of these derivatives
jointly in the remaining parameters follows from the same bound applied to their differences and
uniform continuity of the integrand derivative on each compact box. [given, F3, F4]

2.1 The same reasoning differentiates an integral with upper endpoint $x_1$ in its other parameters.
For its $x_1$ derivative, the difference quotient of $\int_{a_1}^{x_1}f(s,x')\,ds$ differs from
$f(x_1,x')$ by at most $\sup_{s\text{ between }x_1\text{ and }x_1+\delta}|f(s,x')-f(x_1,x')|$, which
tends to zero by continuity; higher endpoint derivatives then follow by ordinary differentiation.
This proves the finite-integral identities used in the recursion. [given, F3, F4, step 1.3]

3.1 For $d>1$, let $x'=(x_2,\ldots,x_d)$ and $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$. By step 1.2, $\int
H=\int h=0$, and steps 1.3–2.1 show that $H$ and the displayed primitives are smooth. Assuming the
construction in dimension $d-1$, define
$$(Rh)_1=\int_{a_1}^{x_1}\bigl(h(s,x')-\theta_1(s)H(x')\bigr)\,ds,\qquad (Rh)_j=\theta_1(x_1)(R'H)_{j-1}(x')\quad(j\ge2).$$
Differentiating gives $\operatorname{div}(Rh)=h-\theta_1H+\theta_1H=h$. The first component vanishes
both before the support and after its total first-coordinate integral, which is zero; the other
components are compactly supported by induction. [given, A1, step 1.1, step 1.2, step 1.3, step 2.1,
induction]

3.2 We now prove the additional estimate for the very same fixed-bump map constructed in steps 1.1 and 3.1. Put $\ell=b_1-a_1$ and, for a smooth $g$ on the box, $Jg(x_1,x')=\int_{a_1}^{x_1}g(s,x')\,ds$. By [F5], $|Jg(x_1,x')|^2\le\ell\int_{a_1}^{b_1}|g(s,x')|^2\,ds$; integration over $x_1$ and $x'$ gives $\|Jg\|_2\le\ell\|g\|_2$. The smooth derivative identities in steps 1.3–2.1 give $\partial_1Jg=g$ and $\partial_jJg=J(\partial_jg)$ for $j>1$, so
$$\|Jg\|_{1,2;\Omega}^2\le(\ell^2+1)\|g\|_2^2+\ell^2\sum_{j=2}^d\|\partial_jg\|_2^2\le(1+\ell^2)\|g\|_{1,2;\Omega}^2.$$
All functions integrated here are smooth up to the closed box; step 1.2 licenses the iterated integrations. In dimension one the map is $Rh=Jh$, and this proves the base case. [given, F2, F5, step 1.1, step 1.2, step 1.3, step 2.1, algebra]

4.1 If inputs are supported in fixed compact $K$, each coordinate projection $K_i$ is compactly
contained in $(a_i,b_i)$. Choose closed intervals $J_i\Subset(a_i,b_i)$ containing $K_i$ and the
support of the already fixed bump $\theta_i$. Their product is a common compact output-support set
$K'=\prod_iJ_i$: before the first-coordinate support the primitive is zero, and after it the
primitive is zero because its full first-coordinate integral is zero; the other components have the
required support by induction. [given, A1, step 1.1, step 3.1, induction]

5.1 Write $p_m(f)=\max_{|\alpha|\le m}\sup|\partial^\alpha f|$, taking the maximum also over
components for vector fields, and put $\ell_1=b_1-a_1$. Step 1.3 gives $p_m(H)\le\ell_1p_m(h)$. For
the first component in step 3.1, a derivative with no $x_1$ differentiation is an integral of
$\partial_{x'}^\beta h-\theta_1\partial_{x'}^\beta H$ and is bounded by
$\ell_1(1+\ell_1\|\theta_1\|_\infty)p_m(h)$. If the derivative differentiates $x_1$ at least once,
the endpoint identity in step 2.1 gives a derivative of $h$ minus a fixed derivative of $\theta_1$
times a derivative of $H$, again bounded by a constant times $p_m(h)$. For each remaining component
$\theta_1(x_1)(R'H)_{j-1}(x')$, the product derivative is bounded by a fixed bump-derivative
constant times $p_m(R'H)\le C'_m p_m(H)$ by induction. The dimension-one bounds in step 1.1 start
this induction. Thus
$$p_m(Rh)\le C_m p_m(h)\qquad(m\ge0),$$
where $C_m$ depends only on the fixed rectangle, bumps, dimension and $m$, not on $h$. These are all
fixed-support seminorm estimates, proving the full stated continuity. Every displayed construction
is linear in $h$, and the bumps were fixed once independently of $h$ and $K$, so the same map $R$
serves all compact input supports. [given, A1, F4, step 1.1, step 1.3, step 2.1, step 3.1, step 4.1,
induction]

6.1 In dimension $d>1$, write $\Omega'=\prod_{i=2}^d(a_i,b_i)$ and $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$. Apply [F5] to this integral and each derivative identity in step 1.3, then integrate in $x'$, to obtain
$$\|H\|_{1,2;\Omega'}^2\le\ell\left(\|h\|_2^2+\sum_{j=2}^d\|\partial_jh\|_2^2\right)\le\ell\|h\|_{1,2;\Omega}^2.$$
For any scalar or vector smooth $G$ on $\Omega'$, direct differentiation and separated integration give
$$\|\theta_1G\|_{1,2;\Omega}^2=(\|\theta_1\|_2^2+\|\theta_1'\|_2^2)\|G\|_{2;\Omega'}^2+\|\theta_1\|_2^2\|\nabla'G\|_{2;\Omega'}^2\le B^2\|G\|_{1,2;\Omega'}^2,$$
where $B=(\|\theta_1\|_2^2+\|\theta_1'\|_2^2)^{1/2}<\infty$. Thus $g=h-\theta_1H$ satisfies $\|g\|_{1,2;\Omega}\le(1+B\sqrt\ell)\|h\|_{1,2;\Omega}$. The first component of $Rh$ is $Jg$, so step 3.2 bounds it by $\sqrt{1+\ell^2}(1+B\sqrt\ell)\|h\|_{1,2;\Omega}$. The remaining components form $\theta_1R'H$. By step 1.2, $H$ has integral zero, so the inductive estimate for the same lower-dimensional construction gives their combined norm at most $BC_{\Omega'}\sqrt\ell\|h\|_{1,2;\Omega}$. Squaring and adding the first-component and remaining-component estimates proves the claimed estimate with
$$C_\Omega^2=(1+\ell^2)(1+B\sqrt\ell)^2+B^2\ell C_{\Omega'}^2.$$
This finite induction depends only on the fixed side lengths and bumps, never on the compact input support. The support, divergence and all-order test continuity properties already proved remain properties of this same map. [given, F2, F5, step 1.2, step 1.3, step 3.1, step 4.1, step 5.1, step 3.2, algebra, induction] ∎
