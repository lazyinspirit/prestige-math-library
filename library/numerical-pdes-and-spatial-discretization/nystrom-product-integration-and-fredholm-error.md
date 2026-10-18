---
page: nystrom-product-integration-and-fredholm-error
title: Nystrom product integration and fredholm error
status: published
requires:
  [
    composite-quadrature-rules,
    gaussian-quadrature,
    compact-operators-and-riesz-schauder-theory
  ]
items:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-finite-node-equation-reconstruction-equivalence
  - lem-continuous-kernel-integral-operator-is-compact-on-c
  - thm-collectively-compact-operator-stability-and-error
  - lem-half-order-singular-integral-exists
  - lem-half-order-kernel-translation-modulus-in-l1
  - thm-nystrom-operator-norm-perturbation-error
  - lem-midpoint-nystrom-collective-compactness-and-consistency
  - def-half-order-product-integration
  - lem-half-order-product-weights-closed-form
  - thm-midpoint-nystrom-smooth-solution-error
  - lem-half-order-product-integration-stability-and-consistency
  - thm-half-order-product-integration-fredholm-error
examples: []
---

This page sets up finite-rank Nyström operators and proves their equivalence with the sampled grid equations. It treats two stability routes separately: an operator-norm perturbation estimate and an AC-dependent collectively compact Fredholm argument. For composite midpoint sampling, it proves pointwise consistency, the solution error bound under smoothness of the actual integrand, and the limitation of operator-norm convergence on the full space of continuous functions. A second section develops piecewise-linear product integration for the kernel $|x-y|^{-1/2}$, including the improper weights, their exact closed forms, the kernel's improper L1 translation modulus, collective compactness, consistency, and a Fredholm error bound. The page keeps the choice assumptions explicit and makes no operator-norm convergence claim for point sampling on $C([0,1])$.

## Affine normalization to a general interval

The item formulas below use $[0,1]$ as a normalized coordinate. They give the
approved results on every nondegenerate compact interval $I=[\alpha,\beta]$ as
follows. Put $L:=\beta-\alpha>0$ and define the isometry
$$U:C(I)\to C([0,1]),\qquad (Uu)(t):=u(\alpha+Lt).$$
Its inverse is $(U^{-1}v)(x)=v((x-\alpha)/L)$. Here $C(I)$ and $C([0,1])$ denote real continuous functions. The intervals $I$ and $[0,1]$
are nonempty compact metric spaces by [[thm-heine-borel-rn]]. Pointwise addition
and real scalar multiplication preserve continuity, and the absolute-value
triangle inequality, homogeneity and separation give the supremum norm on each
space ([[def-norm-and-normed-space]]). Their induced supremum metrics are complete
by [[thm-c-k-complete-in-the-sup-metric]], so both spaces are Banach
([[def-banach-space]]). The affine
coordinate map is a bijection, and pointwise evaluation makes $U$ linear; for
every $u\in C(I)$,
$$\|Uu\|_\infty=\sup_{t\in[0,1]}|u(\alpha+Lt)|=\sup_{x\in I}|u(x)|=\|u\|_\infty,$$
so $U$ is an isometry for these norms.
For a continuous kernel
$k_I:I^2\to\mathbb R$, set
$$\widetilde k(t,s):=L\,k_I(\alpha+Lt,\alpha+Ls).$$
For the affine integral substitution used here, a tagged partition of $[0,1]$
maps to the partition of $I$ obtained by $s\mapsto\alpha+Ls$; its mesh is
multiplied by $L$, and each corresponding Riemann-sum term is multiplied by
$L$. Taking the defining limits therefore gives
$\int_\alpha^\beta g(y)\,dy=L\int_0^1g(\alpha+Ls)\,ds$ for continuous $g$.
For the half-order improper integrals the same identity holds first on each
truncated interval, and then in the limit as the cutoff tends to zero. Thus,
for every $u\in C(I)$,
$$UK_IU^{-1}=\widetilde K,\qquad (K_Iu)(x):=\int_\alpha^\beta k_I(x,y)u(y)\,dy,$$
where $\widetilde K$ is the unit-interval integral operator with kernel
$\widetilde k$. More generally, if a finite quadrature on $I$ has nodes
$z_j\in I$ and weights $\omega_j$, write $s_j=(z_j-\alpha)/L$ and
$\widetilde\omega_j=\omega_j/L$. Then the conjugated Nyström operator is
exactly
$$(UK_{Q,I}U^{-1}v)(t)    =\sum_j\widetilde\omega_j\widetilde k(t,s_j)v(s_j),\qquad    (K_{Q,I}u)(x)=\sum_j\omega_j k_I(x,z_j)u(z_j).$$
Thus the transformed finite grid matrix is the same matrix, the right-hand
sides and solution errors have the same supremum norms, and operator norms,
inverse norms, compactness, collective compactness, injectivity, and
invertibility are preserved by $U$: the operator-norm equality follows since
$U$ maps the unit ball onto the unit ball isometrically, and compact closures
are preserved by this isometric bijection. The operator-norm perturbation route and
the collectively compact route therefore apply on $C(I)$ with exactly their
stated hypotheses after this normalization. For the composite midpoint rule,
the physical panel width is $\Delta=L/N$ and its normalized width is $1/N$;
if $g_x(y)=k_I(x,y)u(y)$ has the stated uniform second-derivative bound
$M_2:=\sup_{x,y\in I}|\partial_y^2g_x(y)|$, the midpoint residual from
[[thm-composite-midpoint-error-bound]] becomes
$$\|K_{N,I}u-K_Iu\|_\infty\le \frac{L\Delta^2}{24}M_2.$$
Equivalently, the transformed integrand $L g_x(\alpha+L\,\cdot)$ has second
derivative bounded by $L^3M_2$, and $(1/N)^2=\Delta^2/L^2$.

For the half-order kernel
$$k_I(x,y)=|x-y|^{-1/2}a_I(x,y),$$
the transformed regular factor is
$\widetilde a(t,s)=L^{1/2}a_I(\alpha+Lt,\alpha+Ls)$, because
$dy=L\,ds$ and $|x-y|^{-1/2}=L^{-1/2}|t-s|^{-1/2}$. The physical product
weights use the hats $\phi^I_{N,j}(y):=\phi_{N,j}((y-\alpha)/L)$ on nodes
$x_j=\alpha+j\Delta$ and satisfy
$$W_{N,j}(x):=\int_\alpha^\beta|x-y|^{-1/2}\phi^I_{N,j}(y)\,dy  =L^{1/2}w_{N,j}\!\left(\frac{x-\alpha}{L}\right).$$
The improper singular functional has
$$\|S_x^I\|=S_x^I(1)=2\sqrt{x-\alpha}+2\sqrt{\beta-x}\le2\sqrt{2L}.$$
Consequently the product weights are nonnegative and their exact sum and
stability bound are
$$\sum_jW_{N,j}(x)=2\sqrt{x-\alpha}+2\sqrt{\beta-x}  \le 2\sqrt{2L};$$
the closed forms in
[[lem-half-order-product-weights-closed-form]] apply in normalized coordinates
and are multiplied by $L^{1/2}$. The half-order kernel translation modulus
scales as $\tau_I(d)=L^{1/2}\tau(d/L)$, by the same change of variables, so it
still tends to zero as $d\downarrow0$. Suppose each
$g_x(y):=a_I(x,y)u(y)$ extends to a $C^2$ function on a neighborhood of $I$ and
put
$$M_{2,I}:=\sup_{x,y\in I}|\partial_y^2g_x(y)|<\infty.$$
In normalized coordinates the regular factor is
$\widetilde g_t(s)=L^{1/2}g_{\alpha+Lt}(\alpha+Ls)$, so
$\sup_{t,s}|\partial_s^2\widetilde g_t(s)|=L^{5/2}M_{2,I}$ and the normalized
panel width is $1/N=\Delta/L$. Applying the unit-interval interpolation bound
from [[lem-linear-interpolation-error-bound]] and the collective compact
solution estimate gives the physical product-interpolation residual and
Fredholm solution bound
$$\|K_{N,I}u-K_Iu\|_\infty  \le \frac{\sqrt2}{4}L^{1/2}M_{2,I}\Delta^2,$$
$$\|u_{N,I}-u\|_\infty  \le C\left(\|f_{N,I}-f\|_\infty+        \frac{\sqrt2}{4}L^{1/2}M_{2,I}\Delta^2\right),$$
with the same uniform inverse bound $C$ as for the conjugated unit-interval
problem. Setting $L=1$ recovers every formula in the assigned items; the
unit-interval examples are the canonical normalized cases.
