---
dependency_level: 5
id: lem-gl3-unipotent-character-descent-and-rank-one-boundary-model
kind: lemma
title: "Unipotent character descent and the full rank-one boundary model"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-level-gl3-automorphic-distribution, thm-gl3-heisenberg-fourier-expansion, def-distributional-derivative, lem-distribution-pairing-with-smooth-parameter-families, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-distributions-form-a-sheaf, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice, thm-linear-change-of-variables-for-lebesgue-measure]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), (3.34)–(3.45) and complete proof of Corollary 3.38"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

Assume Countable Choice and use the supplied normalized principal-series datum $(\lambda,\delta,\tau)$ of a full-level GL3 automorphic distribution. No existence of that principal-series embedding is asserted here. All assertions except the final cuspidal zero-average assertion also apply to any supplied $\Gamma$-invariant vector in the same normalized principal-series model. Put $H_1=N_{y,z}$ and let $S_1$ be the upper-left embedded $\mathrm{SL}_2$; put $H_2=N_{x,z}$ and let $S_2$ be the lower-right embedded $\mathrm{SL}_2$. Define
$$P^{(1)}_{k,n}\tau=\int_0^1\int_0^1e(ky+nz)\pi(n(0,y,z))\tau\,dy\,dz,$$
$$P^{(2)}_{k,n}\tau=\int_0^1\int_0^1e(kx+nw)\pi(n(x,0,w))\tau\,dx\,dw.$$
These are well-defined distribution vectors. They transform under $H_i$ by the character $e(-kh_1-nh_2)$ and admit a well-defined coefficient restriction to $S_i$, obtained by character descent on the open flag orbit $H_iS_iP/P$.

More explicitly, for arbitrary $\mu\in\mathbb C$ and $\epsilon\in\{0,1\}$ let $W_{\mu,\epsilon}^{-\infty}$ be the distributions on two real-line charts of $\mathbb {RP}^1$, with overlap transition
$$v_\infty(u)=(\operatorname{sgn}u)^\epsilon|u|^{\mu-1}v(-1/u).$$
It is the strong dual of the smooth model $W_{-\mu,\epsilon}^\infty$ with the corresponding transition; its action is
$$\bigl(\psi_{\mu,\epsilon}(g^{-1})v\bigr)(x)=(\operatorname{sgn}(cx+d))^\epsilon|cx+d|^{\mu-1}v\left(\frac{ax+b}{cx+d}\right),\quad g=\begin{pmatrix}a&b\\c&d\end{pmatrix},$$
interpreted globally in the two charts. The coefficient restrictions of $P^{(1)}$ lie in $W_{\lambda_1-\lambda_2,\delta_3}^{-\infty}$ and those of $P^{(2)}$ in $W_{\lambda_2-\lambda_3,\delta_1}^{-\infty}$. On the finite charts they are
$$v^{(1)}_{k,n}(x)=\sigma_{n,k}(x+k/n),\qquad v^{(2)}_{k,n}(y)=\rho_{n,k}(k/n-y)\quad(n\ne0),$$
$$v^{(1)}_{q,0}(x)=\sum_r c_{r,q}e(rx),\qquad v^{(2)}_{q,0}(y)=\sum_s c_{q,s}e(sy).$$
Translations and reflection therefore give natural extensions of every $\sigma_{n,k},\rho_{n,k}$ and both periodic coefficient families to these rank-one distribution models. The extensions respect $k$ modulo $n$. They are not asserted canonical or infinitely flat.

If $\gamma\in S_i\cap\Gamma$ and $\chi$ is an integer character of $H_i$, the coefficient restrictions obey
$$v_\chi=\psi(\gamma)v_{\chi\circ\operatorname{Ad}\gamma}.$$
Reflection $Rv(x)=v(-x)$ is a global automorphism of $W_{\mu,\epsilon}^{-\infty}$ and $R\psi(g)R=\psi(rgr)$ for $r=\operatorname{diag}(-1,1)$. Finally, for the cuspidal realization datum, $P^{(1)}_{0,0}\tau=P^{(2)}_{0,0}\tau=0$ as global principal-series distribution vectors.

## Statement references

[Miller and Schmid, (3.34)–(3.45), Corollary3.38 and its proof](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the supplied principal-series automorphic datum. Matrix characters and group actions use [[def-full-level-gl3-automorphic-distribution]].

[F1] [[thm-gl3-heisenberg-fourier-expansion]] supplies the two strong distribution expansions and their coefficient uniqueness.

[F2] [[lem-distribution-pairing-with-smooth-parameter-families]] permits smooth parameter differentiation and compact-parameter integration of local distribution pairings. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits the compact smooth test integrations used in descent. [[thm-linear-change-of-variables-for-lebesgue-measure]] preserves normalized torus integrals under the unimodular conjugation maps.

[F3] [[def-distributional-derivative]] gives integration by parts against tests. [[lem-test-function-cutoffs-and-euclidean-localization]] supplies fixed unit-integral bumps. [[thm-distributions-form-a-sheaf]] glues the compatible local distributions.

[F4] The supplied realization has a cuspidal image, so every proper-parabolic unipotent constant term of every smooth realized vector vanishes, as specified in [[def-full-level-gl3-automorphic-distribution]]. The map $J$ is supplied and continuous equivariant; no Casselman theorem is used.

## Proof

**Given:** The stated data.

1.1 A scalar distribution $U$ on $\mathbb R^2_h\times Y$ with $U(h+h_0,s)=e(\chi(h_0))U(h,s)$ has a unique form $e(\chi(h))\otimes v(s)$. Indeed multiply by $e(-\chi(h))$; the resulting $V$ has both $h$ derivatives zero by parameter differentiation. Fix unit-integral bumps $\rho_1,\rho_2$ and define $v(\phi)=V(\rho_1\rho_2\phi)$. For any compact smooth $\Phi(h_1,h_2,s)$ subtract $\rho_1(h_1)\int\Phi(t,h_2,s)dt$, then subtract $\rho_1(h_1)\rho_2(h_2)\int\Phi\,dh$. Each difference is a derivative in the corresponding $h$ variable of a compact smooth function: take its integral from $-\infty$ to the variable, whose total integral is zero. Thus $V$ annihilates both differences and $V(\Phi)=v(\int\Phi\,dh)$. This also proves continuity, uniqueness and independence of the bumps, using fixed-support test seminorms. The same proof works in local frames for a line bundle trivialized along the $H$ fibers. [F2, F3, given, algebra]

1.2 Identify $G/P$ with complete real flags $(\ell\subset\Pi)$, where the identity flag has line $\mathbb Re_3$ and plane $\mathbb Re_2+\mathbb Re_3$; its stabilizer is exactly the lower triangular group $P$. On $O_1=H_1S_1P/P$, the line has last coordinate nonzero and can be written $(z,y,1)$; its incident planes are a copy of $\mathbb {RP}^1$. Hence $O_1=H_1\times\mathbb {RP}^1$ with representatives $h(y,z)n_x(x)$ and $h(y,z)w_{12}n_x(u)$, where $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. On the overlap [F3, given, algebra]
$$w n(u)=n(-1/u)\begin{pmatrix}1/u&0\\1&u\end{pmatrix}.$$
The principal-series right transformation factor $\omega_{\lambda,\delta}(p^{-1})$ for $p=\operatorname{diag}(1/a,a,1)$ is $(\operatorname{sgn}a)^{\delta_3}|a|^{\lambda_1-\lambda_2-1}$, using $\delta_1+\delta_2=\delta_3$. This gives the first stated transition. Similarly $O_2=H_2S_2P/P$ consists of planes whose first covector coordinate is nonzero. Its finite representatives are $n(x,0,w)n_y(y)=n(x,y,w+xy)$; its base is the other $\mathbb {RP}^1$. The diagonal $\operatorname{diag}(1,1/a,a)$ gives parameter $\lambda_2-\lambda_3$ and parity $\delta_1$. These are open coordinate descriptions, not restrictions of an arbitrary distribution to a submanifold. [F3, given, algebra]

2.1 For completeness the concrete smooth contragredient induced model is the parameter $(-\lambda,\delta)$ model. On a Gauss chart, differentiating $g n=n'p$ gives the Jacobian of $n\mapsto n'$ as $(a_1/a_3)^2$: the induced linear map on the three strictly upper entries has diagonal ratios $a_1/a_2,a_1/a_3,a_2/a_3$, while a lower unipotent factor has determinant one. This equals $\omega_{\lambda,\delta}(p^{-1})\omega_{-\lambda,\delta}(p^{-1})$. Thus the product of the two smooth sections is a coordinate-invariant density, and its integral pairing is contragredient and nondegenerate; compact dual-frame tests witness nondegeneracy. This is a concrete induced-model duality, with no subrepresentation or globalization assertion. Its continuous dual is locally the distribution sections with the preceding transition: a compactly supported test density in a chart, tensored with the dual frame, extends by zero to a smooth vector in the contragredient induced model; testing the supplied distribution vector on it gives the local distribution. Transition follows by the ordinary density change of coordinates and the inverse dual-frame factor. In the one-dimensional overlap, the pairing with the smooth dual model is consistent because the two frame factors are $(\operatorname{sgn}u)^\epsilon|u|^{\mu-1}$ and $(\operatorname{sgn}u)^\epsilon|u|^{-\mu-1}$, whose product is $|u|^{-2}$, exactly the Jacobian of $x=-1/u$. A finite partition of unity on $\mathbb {RP}^1$ gives both directions of the identification with its strong dual; continuity follows from the finite chart derivative seminorms. Factoring $g n(x)$ into $n((ax+b)/(cx+d))$ times the lower triangular factor with diagonal $(1/(cx+d),cx+d)$ gives the action formula. Reflection has infinity-chart component $(-1)^\epsilon v_\infty(-u)$; thus it is global and its stated conjugation identity follows from the same two-chart maps. [F2, F3, step 1.2, algebra]

3.1 The compact integrals defining $P^{(i)}$ exist on tests by [F2]. Their fixed dyadic Riemann sums also converge in the strong distribution topology: on a bounded set of tests every derivative of the compact-parameter pulled-back test is uniformly bounded, and the finite-order distribution estimate bounds its common Riemann-sum error. Continuous linear intertwiners therefore commute with these averages. Translation of the torus integration variables, using the $H_i\cap\Gamma$ invariance of $\tau$, gives $\pi(h_0)P_\chi\tau=e(-\chi(h_0))P_\chi\tau$ for every real $h_0\in H_i$. On the open product orbit of step 1.2 this is precisely the covariance in step 1.1. Character descent therefore supplies the global rank-one coefficient vector, without pulling an arbitrary distribution back to $S_i$. Applying [F1] on the finite cell gives the four displayed coefficient formulas, since the torus characters select exactly the indicated central and horizontal frequencies; the second coordinates are $x,w=z-xy$. Translations and reflection in step 2.1 extract the natural extensions of $\sigma$ and $\rho$. The relations for $k$ modulo $n$ hold globally: conjugation by $n_x(1)$ sends $h(y,z)$ to $h(y,z+y)$, giving $v^{(1)}_{k,n}=\psi(n(1))v^{(1)}_{k+n,n}$; applying $\psi(n(k/n))$ identifies the two extensions of $\sigma$. For the other model, conjugation by $n_y(1)$ sends $(x,w)$ to $(x,w-x)$, and the analogous relation with $k-n$, followed by reflection, identifies the extensions of $\rho$. [F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 For $\gamma\in S_i\cap\Gamma$, conjugation preserves $H_i$ and its integer lattice. On its torus, it preserves normalized measure: its real two-dimensional matrix is unimodular, so a transformed unit fundamental parallelogram can be cut into finitely many integer translates of pieces of the unit square, with the same area. Consequently [F2, F3, step 2.1, step 3.1, algebra]
$$P_\chi\tau=\pi(\gamma)P_{\chi\circ\operatorname{Ad}\gamma}\tau,$$
by $\pi(\gamma)\tau=\tau$ and the change of variables in the compact integral. Character descent on $H_iS_i$ then gives $v_\chi=\psi(\gamma)v_{\chi\circ\operatorname{Ad}\gamma}$, since at the identity $H$ coordinate left multiplication by $\gamma$ is the ordinary left $S$ action. This is an identity in the entire two-chart distribution model, including its boundary values, because it came from equal global distribution sections. [F2, F3, step 2.1, step 3.1, algebra]

5.1 First compute the average of the evaluation vector $\tau_{V_0}$ before applying $J$. Its value on every $w\in W_0^\infty$ is $\int_{(H_i\cap\Gamma)\backslash H_i}i_0(w)(h^{-1})dh$, which is a proper-parabolic constant term and vanishes by [F4]. Continuity and equivariance move $J$ through the compact integral, so the same vanishing holds globally in the supplied principal-series model. All constructions permit zero vectors and every complex difference parameter; no spherical, tempered or existence restriction has entered. [F2, F4, step 3.1, algebra] ∎
