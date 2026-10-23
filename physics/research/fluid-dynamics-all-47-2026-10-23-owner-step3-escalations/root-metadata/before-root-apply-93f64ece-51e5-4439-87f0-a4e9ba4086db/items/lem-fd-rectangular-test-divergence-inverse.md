---
id: lem-fd-rectangular-test-divergence-inverse
kind: lemma
title: "Rectangular continuous divergence inverse on mean-zero tests"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
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

Let $d\ge1$ and let $\Omega=\prod_{i=1}^d(a_i,b_i)$ be a nonempty finite open rectangle. Write $D(\Omega)=C_c^\infty(\Omega;\mathbb R)$ and $D_0(\Omega)=\{h\in D(\Omega):\int_\Omega h=0\}$. For every compact $K\subset\Omega$ there is a compact $K'\subset\Omega$ such that a linear map $R:D_0(\Omega)\to D(\Omega;\mathbb R^d)$ sends tests supported in $K$ to fields supported in $K'$, satisfies $\operatorname{div}(Rh)=h$, and is continuous on each fixed-support test space for the seminorms $\sup|\partial^\alpha h|$.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[A1] For each nonempty interval, an affine rescaling of $b(s)=\exp(-1/(1-s^2))$ for $|s|<1$, extended by zero, is a positive smooth compactly supported bump; its integral is positive and finite, so it can be normalized to one.

[F1] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: a continuous real function on a closed nondegenerate finite-dimensional rectangle is Riemann integrable.

[F2] [[thm-riemann-fubini-on-product-rectangles]]: if a Riemann-integrable function on a product of closed rectangles has integrable sections, its ordinary iterated integrals in both orders exist and equal its multiple integral.

[F3] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: for continuous real $g$ and its continuous parameter derivative on a compact two-variable rectangle, that derivative passes through the finite integral, including one-sided parameter endpoints.

[F4] [[lem-uniform-integral-error-bound]]: if integrable $f,g$ differ in sup norm by at most $M$ on $[a,b]$, their integrals differ by at most $(b-a)M$.

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
induction] ∎
