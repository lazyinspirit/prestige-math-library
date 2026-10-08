---
id: lem-local-holder-cauchy-transform-estimate
kind: lemma
title: "The fixed-support Cauchy transform and its Hölder bounds"
status: draft
origin: pipeline
deps:
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - def-ck-and-multi-index-notation-in-several-variables
  - def-wirtinger-derivatives
  - def-countable-choice
  - def-laplacian-of-a-c2-function
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-newtonian-potential
  - thm-newtonian-potential-for-holder-data-is-classical
  - lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-locally-integrable-functions-embed-in-distributions
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-differentiation-under-the-integral-sign
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-symmetry-of-higher-mixed-partials
  - lem-complex-conjugation-and-modulus-laws
  - thm-logarithm-derivative-and-integral
dependency_level: 0
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through the Newtonian-potential, polar
  measure, Fubini, and distributional interfaces used here. The fixed-support
  estimates and formulas make no selection and use no full Axiom of Choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7.1, Theorem 2.26 and Corollary 2.27, and §2.7.2, the full proof of Theorem 2.28, printed pp. 37–43: cancellation, the near/far split, the kernel-difference estimate, and annular flux cancellation."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.10.1, Theorem 14.11 and its proof, and §14.10.3, printed pp. 200–201: the Cauchy transform solving the Beltrami equation and its principal-value derivative."
aliases: []
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Fix an integer $k\ge0$ and $0<\alpha<1$. Write $D_r:=\{z\in\mathbb C:|z|<r\}$ and $\overline D_r:=\{z\in\mathbb C:|z|\le r\}$. Let
$$X_{k,\alpha}:=\{q\in C^{k,\alpha}(\mathbb R^2;\mathbb C):\operatorname{supp}q\subseteq\overline D_2\},$$
where derivatives are in the real coordinates and the complex-valued Hölder norm is that of [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] ([[def-ck-and-multi-index-notation-in-several-variables]]). Put $\Gamma(z)=-(2\pi)^{-1}\log|z|$ and let $Nq=\Gamma*q$ be the Newtonian potential of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]] and [[def-newtonian-potential]]. Using the Wirtinger derivatives of [[def-wirtinger-derivatives]], define
$$Tq(z):=-4\,\partial_zNq(z),\qquad Sq(z):=\partial_zTq(z)=-4\,\partial_z^2Nq(z).$$

(i) **The Cauchy transform.** For every $q\in X_{k,\alpha}$ and $z\in\mathbb C$,
$$Tq(z)=\frac1\pi\int_{\mathbb C}\frac{q(\zeta)}{z-\zeta}\,dA(\zeta),$$
and this integral is absolutely convergent. The function $Tq$ is smooth on $\mathbb C\setminus\overline D_2$, satisfies $\partial_{\bar z}Tq=q$ pointwise, and for every $R>0$ obeys
$$\|Tq\|_{C^{k+1,\alpha}(D_R)}\le C_{k,\alpha,R}\,\|q\|_{C^{k,\alpha}(\mathbb R^2)}.$$

(ii) **The derivative.** The function $Sq$ lies in $C^{k,\alpha}(\mathbb R^2)$ and has the principal-value representation
$$Sq(z)=-\frac1\pi\,\operatorname{p.v.}\!\int_{\mathbb C}\frac{q(\zeta)}{(z-\zeta)^2}\,dA(\zeta),$$
where the principal value uses circular truncations. Equivalently, it is the absolutely convergent subtracted integral
$$Sq(z)=-\frac1\pi\left[\int_{|\zeta-z|<1}\frac{q(\zeta)-q(z)}{(z-\zeta)^2}\,dA(\zeta)+\int_{|\zeta-z|\ge1}\frac{q(\zeta)}{(z-\zeta)^2}\,dA(\zeta)\right].$$
The subtraction is only over the unit disk; no globally absolutely convergent subtraction of $q(z)$ is asserted.

(iii) **Bound on the fixed-support space.** There is $M_{k,\alpha}<\infty$, depending only on $k$ and $\alpha$, such that
$$\|Sq\|_{C^{k,\alpha}(\mathbb R^2)}\le M_{k,\alpha}\,\|q\|_{C^{k,\alpha}(\mathbb R^2)},\qquad q\in X_{k,\alpha}.$$
No global $L^p$ mapping property of $S$ is asserted.

## Facts & Assumptions

**Given:** Countable Choice; an integer $k\ge0$; $0<\alpha<1$; and a complex-valued $q\in C^{k,\alpha}(\mathbb R^2;\mathbb C)$ supported in $\overline D_2$.

[F1] The Hölder norm and multi-index derivatives are those of [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] and [[def-ck-and-multi-index-notation-in-several-variables]].

[F2] The real-coordinate Wirtinger operators satisfy $\partial_z=\tfrac12(\partial_x-i\partial_y)$, $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$, and $\Delta=4\partial_z\partial_{\bar z}$ on $C^2$ functions ([[def-wirtinger-derivatives]], [[def-laplacian-of-a-c2-function]]).

[F3] The planar fundamental solution is $\Gamma(z)=-(2\pi)^{-1}\log|z|$, is locally integrable, and satisfies $-\Delta\Gamma=\delta_0$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F4] For compactly supported $C^{0,\alpha}$ data, the Newtonian potential is everywhere finite, belongs to $C^2$, satisfies $-\Delta Nq=q$, has the stated real-Hessian cancellation formula, and obeys the local $C^{2,\alpha}$ estimate ([[thm-newtonian-potential-for-holder-data-is-classical]]).

[F5] The real-Hessian principal-value formula has the correction $-\delta_{ij}q/2$ in dimension two, and its near subtraction is absolutely convergent for $\alpha>0$ ([[lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials]]).

[F6] Distributional derivatives commute and agree with classical derivatives for $C^k$ functions; locally integrable functions determine distributions injectively ([[thm-distributional-differentiation-is-continuous-and-commutes]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F7] Fubini applies to integrable functions on sigma-finite product measure spaces, and Lebesgue measure is sigma-finite and finite on bounded sets ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F8] A nonempty Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F9] Polar coordinates give $\int_{D_r}|z|^{-1}\,dA=2\pi r$ and make every $C|z|^{\alpha-2}$ singularity integrable near $0$ when $\alpha>0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F10] The divergence theorem applies on disks and annuli with their outward normals ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F11] Differentiation under an integral sign is valid under a common integrable majorant on the parameter interval ([[thm-differentiation-under-the-integral-sign]]).

[F12] The mean value theorem bounds a differentiable kernel's increment by its gradient bound times the displacement ([[cor-mean-value-theorem]]).

[F13] The chain rule, algebra of derivatives, and symmetry of continuous mixed partials give the real-coordinate identities used below ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-symmetry-of-higher-mixed-partials]]).

[F14] The complex modulus is multiplicative and satisfies the triangle inequality, and $(\log r)'=1/r$ for $r>0$ ([[lem-complex-conjugation-and-modulus-laws]], [[thm-logarithm-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 For $z\ne0$, direct differentiation of $\Gamma$ gives $a(z):=\partial_z\Gamma(z)=-1/(4\pi z)$; polar coordinates give $\int_{D_r}|a|\,dA=r/2$. Integrating by parts outside $D_\varepsilon$ against a compactly supported smooth test function leaves an inner boundary term bounded by $C\varepsilon|\log\varepsilon|$, which tends to zero, so the distributional derivative of $\Gamma$ is the regular distribution of $a$. [F2, F3, F9, F10, F14, algebra]

1.2 Since $Nq\in C^2$ and $-\Delta Nq=q$, the identity $\Delta=4\partial_z\partial_{\bar z}$ gives $\partial_{\bar z}Tq=-4\partial_{\bar z}\partial_zNq=q$ pointwise. On every compact subset of $\mathbb C\setminus\overline D_2$, the Newtonian kernel $\Gamma(z-\zeta)$ and all its $z$-derivatives are bounded uniformly for $\zeta\in\overline D_2$; differentiation under the integral sign in $Nq$ therefore makes $Nq$, and hence $Tq$, smooth there. [F2, F3, F4, F11, F13]

1.3 By Fubini and integration by parts in the compactly supported $q$ variable, for every multi-index $\beta$ with $|\beta|\le k$ the distributional identity $D^\beta Nq=N(D^\beta q)$ holds. The right side is $C^{2,\alpha}_{\mathrm{loc}}$ by [F4]. Starting with $Nq\in C^2$, induction on $|\beta|$ identifies each already-classical derivative $D^\beta Nq$ with this continuous representative: distributional injectivity gives equality almost everywhere, and [F8] rules out a nonzero continuous difference on any ball. Each such derivative is then $C^2$. The local estimate in [F4], applied to each $D^\beta q$ with support in $\overline D_2$, yields $Nq\in C^{k+2,\alpha}_{\mathrm{loc}}$ with its norm on $\overline D_R$ bounded by $C_{k,\alpha,R}\|q\|_{C^{k,\alpha}}$. Since $Tq=-4\partial_zNq$, this gives the asserted $C^{k+1,\alpha}(D_R)$ bound. [F1, F4, F6, F7, F8, F13]

1.4 The cancellation formula [F5], combined as $Sq=-(\partial_{xx}-2i\partial_{xy}-\partial_{yy})Nq$, cancels the two diagonal correction terms. Away from zero the resulting kernel is $-4\partial_z^2\Gamma(w)=-1/(\pi w^2)$, so $Sq(z)=-(1/\pi)\operatorname{p.v.}\int q(\zeta)/(z-\zeta)^2\,dA(\zeta)$. The integral of $(z-\zeta)^{-2}$ over every centered annulus is zero because its angular factor is $e^{-2i\theta}$; hence subtracting $q(z)$ only on $|z-\zeta|<1$ gives the displayed subtracted formula. Its near integral is bounded absolutely by $C[q]_{0,\alpha}\int_0^1r^{\alpha-1}dr$, and the far integral is absolutely finite because it avoids the singularity and $q$ has compact support. [F5, F8, F13, F14, algebra]

2.1 For every compactly supported smooth test function $\varphi$, Fubini and the distributional derivative identity in step 1.1 give $\langle\partial_zNq,\varphi\rangle=\langle a*q,\varphi\rangle$, with $$(a*q)(z)=\int_{\mathbb C}a(z-\zeta)q(\zeta)\,dA(\zeta).$$ This integral is absolutely finite for each $z$, since $q$ is bounded, supported in $\overline D_2$, and $a$ is locally integrable. It is continuous: on a compact set of $z$-values let $\delta=|z-z'|<1$; the two disks of radius $2\delta$ around $z,z'$ contribute at most $C\|q\|_\infty\delta$, while on their complement $|\nabla a(w)|\le C|w|^{-2}$ and the mean value theorem bounds the difference by $C\|q\|_\infty\delta\log(C_0/\delta)$ for a fixed $C_0$. Since $Nq\in C^2$, both sides are continuous; [F6] makes them equal almost everywhere, and [F8] then makes them equal everywhere. Therefore $Tq=-4\partial_zNq=(1/\pi)\int q(\zeta)/(z-\zeta)\,dA(\zeta)$. [F4, F6, F7, F8, F9, F12, F13, F14, step 1.1]

2.2 For the global Hölder seminorm when $k=0$, put $K(w)=-1/(\pi w^2)$ and $k_{ij}(w)=\partial_i\partial_j\Gamma(w)$. Let $\Omega$ be a disk with $\operatorname{supp}q\Subset\Omega$ and $x\in\Omega$, and choose a larger disk $D_s(x)\supset\overline\Omega$. On the outer circle the explicit derivative $\partial_i\Gamma(w)=-w_i/(2\pi|w|^2)$ and polar symmetry give $\int_{\partial D_s(x)}\partial_i\Gamma(x-y)\nu_j(y)\,dS(y)=\delta_{ij}/2$. Also $k_{ij}(x-y)=-\partial_{y_j}\partial_i\Gamma(x-y)$, so the divergence theorem gives $\int_{D_s(x)\setminus\Omega}k_{ij}(x-y)\,dA(y)=-\delta_{ij}/2+g_{ij,\Omega}(x)$, where $$g_{ij,\Omega}(x):=\int_{\partial\Omega}\partial_i\Gamma(x-y)\nu_j(y)\,dS(y).$$ Split the centered-disk cancellation formula [F5] into $\Omega$ and $D_s(x)\setminus\Omega$; on the latter $q(y)=0$, so the $\delta_{ij}/2$ terms cancel and $$\partial_i\partial_jNq(x)=\int_\Omega k_{ij}(x-y)(q(y)-q(x))\,dA(y)-q(x)g_{ij,\Omega}(x).$$ Taking the linear combination $-\partial_{xx}+2i\partial_{xy}+\partial_{yy}$ gives the corresponding formula for $Sq$ with kernel $K$ and boundary factor $G_\Omega=-g_{xx,\Omega}+2ig_{xy,\Omega}+g_{yy,\Omega}$. [F5, F9, F10, F13, step 1.4, algebra]

3.1 Fix distinct $x,x'$, put $\delta=|x-x'|$ and $m=(x+x')/2$, and take $\Omega=D_R(m)$ with $\operatorname{supp}q\Subset\Omega$ and $R\ge2\delta$. Reflection through $m$ sends $x$ to $x'$, reverses both $\partial_i\Gamma(x-y)$ and the normal $\nu_j(y)$, and preserves arc length, so $G_\Omega(x)=G_\Omega(x')$. Also $|G_\Omega(x)|\le C$, since $|x-y|\ge3R/4$ on $\partial\Omega$, $|\nabla\Gamma(w)|\le C/|w|$, and $\partial\Omega$ has length $2\pi R$. Thus the boundary-term difference is at most $C[q]_{0,\alpha}\delta^\alpha$. [F3, F10, F13, F14, step 2.2]

3.2 Split the integral difference over $D_\delta(m)$ and $\Omega\setminus\overline D_\delta(m)$. On the inner disk, $|K(x-y)(q(y)-q(x))|\le C[q]_{0,\alpha}|x-y|^{\alpha-2}$ and likewise for $x'$, so polar integration bounds both contributions by $C_\alpha[q]_{0,\alpha}\delta^\alpha$. On the outer region, write the difference integrand as $$[K(x-y)-K(x'-y)](q(y)-q(x))-K(x'-y)(q(x)-q(x')).$$ With $\rho=|y-m|\ge\delta$, the segment between $x-y$ and $x'-y$ stays at distance at least $\rho/2$ from zero; $|\nabla K(w)|\le C|w|^{-3}$ and the mean value theorem bound the first term by $C[q]_{0,\alpha}\delta\rho^{\alpha-3}$. Its area integral is at most $C[q]_{0,\alpha}\delta\int_\delta^R\rho^{\alpha-2}d\rho\le C_\alpha[q]_{0,\alpha}\delta^\alpha$, using $\alpha<1$. For the second term, $|q(x)-q(x')|\le[q]_{0,\alpha}\delta^\alpha$ and each real component $\int_{\Omega\setminus\overline D_\delta(m)}k_{ij}(x'-y)\,dA(y)$ is bounded by the divergence theorem: its boundary fluxes are $\partial_i\Gamma$ on the outer circle and inner circle, each bounded by $C$ using $|x'-y|\ge3R/4$ on the outer circle and $|x'-y|\ge\delta/2$ on the inner one. This proves $[Sq]_{0,\alpha;\mathbb R^2}\le C_\alpha[q]_{0,\alpha;\mathbb R^2}$. [F9, F10, F12, F14, step 2.2, algebra]

4.1 On $\overline D_4$, the local Hessian estimate [F4] bounds $|Sq|$ by $C_\alpha\|q\|_{C^{0,\alpha}}$. For $|z|\ge3$, the integral formula gives $$|Sq(z)|\le\frac{\|q\|_\infty}{\pi}\int_{\overline D_2}|z-\zeta|^{-2}\,dA(\zeta)\le4\|q\|_\infty,$$ since $|z-\zeta|\ge1$. Hence $\|Sq\|_{C^{0,\alpha}(\mathbb R^2)}\le C_\alpha\|q\|_{C^{0,\alpha}(\mathbb R^2)}$. [F4, F9, step 1.4, step 3.2]

5.1 For $k\ge1$, the regularity in step 1.3 makes $D^\beta Sq=S(D^\beta q)$ classically for every $|\beta|\le k$: expand $S$ as a linear combination of second derivatives of $Nq$ and commute continuous mixed derivatives using [F6]. Each $D^\beta q$ is supported in $\overline D_2$ and has $C^{0,\alpha}$ norm at most $\|q\|_{C^{k,\alpha}}$. Applying the seminorm and supremum bounds of steps 3.2 and 4.1 to these finitely many derivatives proves $Sq\in C^{k,\alpha}(\mathbb R^2)$ and the stated constant $M_{k,\alpha}$. The zero datum is included, and all estimates use the strict range $0<\alpha<1$; no endpoint $\alpha=1$ or global $L^p$ bound is claimed. [F1, F6, step 1.3, step 3.2, step 4.1, algebra, cases] ∎

## Source notes

Hunter's Theorem 2.28 supplies the fully worked near/far estimate for the Hessian of a Newtonian potential; this proof repeats the estimate on the particular trace-free complex combination giving $S$, including the annular flux bound needed for the outer term. Lyubich's Theorem 14.11 fixes the Cauchy-transform sign and its $\bar\partial$ equation, while §14.10.3 records the principal-value derivative. Neither source is being used as a substitute for the displayed local arguments or as a global $L^p$ theorem.
