---
id: lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay
kind: lemma
title: "Rapid Cusp Decay for a Smoothed Full-Level GL2 Distribution Triple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-full-level-gl2-automorphic-distribution
  - thm-local-finite-order-characterization-of-distributions
  - lem-gl2-uniform-moderate-growth-implies-rapid-cusp-decay
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
  - thm-standard-fundamental-domain-for-the-modular-group
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§3, Observation 3.28, Theorem 3.33 and equation (3.34), printed pp. 14–16."
    - title: "S. D. Miller and W. Schmid, Pairings of Automorphic Distributions"
      url: "https://arxiv.org/pdf/1106.2364v1"
      locator: "§3, Lemma 3.9 and Remark 3.23; §4; the proof here uses explicit rank-one compact-picture estimates."
---

## Statement

Let $G=PGL_2(\mathbb R)$, $\Gamma=PGL_2(\mathbb Z)$, let
$\tau_1\in(V^{-\infty}_{\lambda_1,\delta_1})^\Gamma$ be a cuspidal
full-level automorphic distribution, and let
$\tau_j\in V^{-\infty}_{\lambda_j,\delta_j}$, $j=2,3$, be arbitrary
distribution sections of the indicated principal series.
Set $f_1=e$, $f_2=\begin{pmatrix}1&1\\0&1\end{pmatrix}$,
$f_3=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
For $\psi\in C_c^\infty(G)$, interpret
$$\Phi_\psi(g_1,g_2,g_3)=\int_G\tau_1(g_1hf_1)\tau_2(g_2hf_2)\tau_3(g_3hf_3)\psi(h)\,dh$$
by pulling back the tensor-product distribution on the three projective lines
along the open orbit of pairwise distinct points, then pairing with the test
density $\psi(h)\,dh$. This interpretation is well defined and smooth in
$(g_1,g_2,g_3)$.
For each fixed compact $C\subset G$ and each real $N\ge0$ there are
an integer $q\ge0$ and a finite constant $A$ such that
$$|\Phi_\psi(n_xa_yk,n_xa_yk,n_xa_yk)|\le A\,p_q(\psi)y^{-N}\qquad(0\le x\le1,\ y\ge1,\ k\in SO(2)/\{\pm1\},\ \operatorname{supp}\psi\subset C).$$
Here $n_x=\begin{pmatrix}1&x\\0&1\end{pmatrix}$,
$a_y=\begin{pmatrix}\sqrt y&0\\0&1/\sqrt y\end{pmatrix}$ and $p_q$ is
the supremum of the derivatives through order $q$ in any fixed finite
coordinate cover of $C$. If $\tau_2$ and $\tau_3$ are also full-level
invariant, the diagonal function is $\Gamma$-invariant and absolutely
integrable on $\Gamma\backslash G$ with its Haar measure.
No choice principle is assumed; compact integrations in the construction
can be defined by Riemann sums in finite charts.

## Statement references

[[def-full-level-gl2-automorphic-distribution|the principal-series and cuspidality conventions]]

## Facts & Assumptions

**Given:** The three distributions, one cuspidal factor, and the fixed compact support set for the smoothing functions.

[F1] [[def-full-level-gl2-automorphic-distribution]] fixes the right-equivariant distribution model and full-level invariance. Cuspidality includes zero constant Fourier coefficient and infinite-order vanishing at the origin.

[F2] [[thm-local-finite-order-characterization-of-distributions]] bounds a distribution on each compact support by finitely many derivative suprema.

[F3] [[lem-gl2-uniform-moderate-growth-implies-rapid-cusp-decay]] gives diagonal rapid decay from zero unipotent average and a single growth exponent valid for all first-variable right derivatives.

[F4] [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]: the Fejér means of a continuous periodic function converge uniformly.

[F5] [[thm-standard-fundamental-domain-for-the-modular-group]] gives the modular fundamental region with $|x|\le1/2$, $|x+iy|\ge1$, and $y\ge\sqrt3/2$.

## Proof

**Given:** The data in the Statement. Write $P=\mathbb RP^1$.

1.1 Use the two standard affine charts of $P$ and fixed smooth cutoffs on slightly larger charts. These give finite-order estimates for each distribution section by [F2]. The tensor distribution $T=\tau_1\otimes\tau_2\otimes\tau_3$ is obtained by successive evaluation on a smooth test density in the three separate variables: differentiating the remaining variables commutes with evaluation because the difference quotients converge in every derivative seminorm on a common compact support. Iterating the finite-order estimates bounds $T$ by a single seminorm $p_m$ on the compact product $P^3$. To check independence of the order, localize to a product of three compact intervals inside affine charts, extend the localized smooth function by zero to a larger three-dimensional torus, and take Fejér means successively in the three variables. These are finite sums of separated functions. They converge with all derivatives through any prescribed finite order: differentiation commutes with these Fourier means, and [F4] applied successively to each continuous derivative gives uniform convergence, uniformly in the other compact variables by their uniform continuity. Multiply by fixed one-variable cutoffs equal to one on the original support. The resulting separated compactly supported functions still converge in the required seminorms. Successive evaluations agree on every separated summand, so the finite-order bounds show that they agree on the limit. [F1, F2, F4, construct]

2.1 The map $h\mapsto(hf_1B,hf_2B,hf_3B)$ identifies $G$ diffeomorphically with the ordered triples of pairwise distinct points of $P$: a projective linear transformation is uniquely determined by its images of $0,1,\infty$, and its coefficients are rational functions of three distinct affine coordinates. The right-equivariance characters trivialize the tensor line bundle on this orbit. Pushing forward $\psi(h)\,dh$ with the corresponding dual trivialization gives a smooth dual test density $v_\psi$ on $P^3$, supported in the compact image of $C$ inside the open orbit; extend it by zero. Every derivative seminorm of $v_\psi$ is bounded by a fixed finite multiple of a derivative seminorm of $\psi$, since all chart changes, weights and Jacobians are smooth on a neighbourhood of that compact image. Acting independently by $g_1,g_2,g_3$ on this test density and evaluating $T$ defines exactly the distributional expression in the Statement. Smooth parameter dependence follows from the difference-quotient argument in step 1.1. [step 1.1, F1, construct, algebra]

2.2 The unipotent average $\int_0^1\pi(n_x)\tau_1\,dx$ vanishes as a distribution section on all of $P$. On the affine line its Fourier series has only its constant coefficient, which is zero by [F1]; hence this average is supported at infinity. In the reciprocal chart at infinity, full-level invariance under $f_3$ identifies $\tau_1$ with its chart at zero, where it vanishes to infinite order. Translation by $n_x$, $0\le x\le1$, acts in that reciprocal chart by $t\mapsto t/(1\pm xt)$ and a smooth power of $|1\pm xt|$. For $|t|<1/3$ these maps and every derivative are uniformly bounded in $x$. Substituting the infinite-order representation from [F1], moving the Euler derivatives onto the test, and integrating in $x$ shows that the average still has infinite-order vanishing. Explicitly its value on $\varphi(t/\epsilon)$ is $O(\epsilon^{a+1})$ for every $a\ge0$: the factor $t^a$ supplies $\epsilon^a$, Euler derivatives of the scaled test remain bounded, and the integration interval has length $O(\epsilon)$. A finite-order distribution supported at zero is a finite sum of derivatives of the Dirac mass: subtract the Taylor polynomial of a test through its order in the finite-order estimate to see that only those jets can matter. Such a sum cannot obey these scaling estimates unless every coefficient is zero, by choosing a test with exactly one prescribed jet. This proves the asserted zero average on $P$. Compact integration commutes with evaluation throughout because the Riemann sums converge in every test seminorm and [F2] passes the limit through the distribution. [F1, F2, step 1.1, algebra]

3.1 The compact-picture principal-series action has a direct polynomial estimate. Represent a point of $P$ by $u_\theta=(\cos\theta,\sin\theta)$, with $\theta$ modulo $\pi$, and represent $g$ by a matrix of determinant $\pm1$. In the smooth dual model the multiplier is $\|g^{\pm1}u_\theta\|^{-\lambda-1}$ times a constant sign of modulus one; the argument is the line through $g^{\pm1}u_\theta$. The sign and the choice of inverse do not affect estimates. With $\|g\|=\max(\|g\|_{\mathrm{op}},\|g^{-1}\|_{\mathrm{op}})$, one has $\|g\|^{-1}\le\|g^{\pm1}u_\theta\|\le\|g\|$. Derivatives of the angular map are rational expressions in the matrix entries, $\sin\theta$, $\cos\theta$, and powers of $\|g^{\pm1}u_\theta\|^{-2}$; its first derivative is $\det(g^{\pm1})/\|g^{\pm1}u_\theta\|^2$. Repeated differentiation of the multiplier has the same polynomial bounds, with constants depending on $\lambda$ and the differentiation order. The chain and product rules therefore give, for each fixed $m$, $p_m(g\cdot v)\le A_m\|g\|^{b_m}p_m(v)$ for some finite $A_m,b_m$. Apply this separately in three variables, increasing the common exponent if necessary, and then use step 1.1. [step 1.1, step 2.1, F1, algebra]

4.1 Right differentiation of $\Phi_\psi$ in the first group variable acts on $v_\psi$ by an infinitesimal smooth dual principal-series action. In the circle model this is a first-order differential operator with fixed smooth coefficients. A word of length $r$ therefore replaces $v_\psi$ by a test density bounded in $p_m$ by a fixed multiple of $p_{m+r}(v_\psi)$. Crucially the order $m$ of the distribution $T$ in step 1.1 does not change. Step 3.1 thus gives a single exponent $M$, independent of $r$, and bounds $|D\Phi_\psi(g_1,g_2,g_3)|\le A_D p_{m+r}(v_\psi)\prod_{j=1}^3\|g_j\|^M$ for every first-variable right derivative word $D$ of length $r$. [step 1.1, step 3.1, algebra]

5.1 Full-level invariance implies first-variable $n_1$-periodicity of $\Phi_\psi$. Pairing the zero section average of step 2.2 with the translated test density in step 2.1 gives $\int_0^1\Phi_\psi(n_xg_1,g_2,g_3)\,dx=0$. Apply [F3] with the growth bounds of step 4.1 to the lift to $SL_2(\mathbb R)^3$. For every $N$ it uses only finitely many derivative bounds; step 2.1 then replaces their test seminorms by one $p_q(\psi)$. This is the required rapid-decay estimate. [step 2.1, step 4.1, step 2.2, F3, algebra]

6.1 For the last assertion assume also that $\tau_2$ and $\tau_3$ are full-level invariant. Simultaneous left translation by $\Gamma$ then fixes all three distributions, hence fixes the diagonal function. By [F5], the quotient is covered by a compact part together with the region $|x|\le1/2$, $y\ge1$, and compact rotation coordinate. In Iwasawa coordinates Haar measure is a fixed multiple of $dx\,dy\,dk/y^2$. Smoothness gives integrability on the compact part, while step 5.1 and periodicity bound the cusp integral by a constant times $\int_1^\infty y^{-N-2}\,dy<\infty$. The determinant-negative component is identified with the positive one by an element of $\Gamma$. Thus the quotient integral converges absolutely. All cutoffs, covers and compact integrations used above are finite and explicit. [step 2.1, step 5.1, F1, F5, algebra] ∎
