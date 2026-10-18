---
id: lem-bem-lipschitz-transmission-kernel-representation
kind: lemma
title: Lipschitz finite-energy transmission pairs have the double-layer kernel representation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
  - lem-bem-lipschitz-graph-sobolev-and-green-interface
  - lem-bem-lipschitz-trace-and-lifting
  - def-bem-laplace-layer-potentials-and-energy-spaces
  - def-bem-newtonian-kernel-in-three-dimensions
  - lem-bem-newtonian-kernel-is-fundamental-solution
  - thm-gagliardo-nirenberg-sobolev-inequality
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-axiom-of-choice
  - def-countable-choice
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - thm-sine-and-cosine-derivatives
  - thm-ftc-second-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Martin Costabel, Boundary Integral Operators on Lipschitz Domains, Elementary Results (1988)
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: Printed pp. 614–617, general Lipschitz geometry, Green formula3.2 and representation3.4. The local proof supplies the distributional interface and uniqueness at infinity.
---

## Statement

Assume the Axiom of Choice and Countable Choice, and the compact Lipschitz geometry and normal $n$ of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. Let $\phi\in H^{1/2}(\Gamma)$ and let $(u^-,u^+)\in H^1(\Omega^-)\times E^+(\Omega^+)$ satisfy
$$\gamma^-u^- -\gamma^+u^+=-\phi,$$
$$\int_{\Omega^-}\nabla u^-\cdot\nabla v+\int_{\Omega^+}\nabla u^+\cdot\nabla v=0\qquad(v\in C_c^\infty(\mathbb R^3)).$$
Then, with smooth representatives off $\Gamma$,
$$u^\pm(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)\,dS_y,\qquad x\in\Omega^\pm.$$
The integral is absolutely convergent for each $x\notin\Gamma$, and equality holds without any vanishing condition at edges or vertices.

## Facts & Assumptions

**Given:** The axioms, geometry, density, transmission pair, trace jump, and global smooth-test stationarity in the Statement. Write $U=u^-1_{\Omega^-}+u^+1_{\Omega^+}$, assigning any values on $\Gamma$.

[F1] Interior extension, bounded traces, and smooth approximation in Lipschitz charts are available from [[lem-bem-lipschitz-trace-and-lifting]]. The exterior energy space is defined in [[def-bem-laplace-layer-potentials-and-energy-spaces]]. The homogeneous Sobolev inequality supplies the $L^6$ interior representative ([[thm-gagliardo-nirenberg-sobolev-inequality]]).

[F2] $-\Delta_xG_3(x,y)=\delta_y$ in distributions ([[lem-bem-newtonian-kernel-is-fundamental-solution]]), with $G_3=(4\pi|x-y|)^{-1}$ ([[def-bem-newtonian-kernel-in-three-dimensions]]).

[F3] Absolutely integrable product integrals may be interchanged, and Holder bounds $L^1$ on bounded sets by $L^6$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-holder-inequality-for-integrals]]).

[F4] Mollification of a locally integrable function is smooth, derivatives pass to the bump, and unit-mass smooth bumps form approximate identities converging in $L^1$ ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]]).

[F5] The general Lipschitz first-order Green formula is proved in [[lem-bem-lipschitz-graph-sobolev-and-green-interface]]. Divergence on smooth balls is available from [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]].

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F94] The parametrization $(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ has surface Jacobian $\sin\theta$ off the surface-null poles and meridian. Thus $|S^2|=2\pi\int_0^\pi\sin\theta\,d\theta=4\pi$ and $|\partial B_r|=4\pi r^2$ by [F90]. ([[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]])

## Proof

1.1 By [F1], extension and a bounded-support cutoff put $u^-$ in $L^6(\Omega^-)$; $u^+\in L^6(\Omega^+)$ by definition. Thus $U\in L^6(\mathbb R^3)$. Both pieces are $H^1$ in bounded boundary collars: on such a collar Holder gives local $L^2$ from $L^6$, and their gradients are already $L^2$. The fixed finite atlas also gives $\phi\in L^2(\Gamma)\subset L^1(\Gamma)$. [F1, F3, given, algebra]

2.1 For a compactly supported smooth $\eta$, apply the Lipschitz first-order Green identity [F5] to each piece, localized by a finite smooth chart partition. The graph normals have opposite signs and are intrinsic on overlaps; partition derivative terms cancel. Thus $\langle\partial_j U,\eta\rangle=\int_{\Omega^-}(\partial_j u^-)\eta+\int_{\Omega^+}(\partial_j u^+)\eta+\int_\Gamma(\gamma^+u^+-\gamma^-u^-)n_j\eta\,dS$. Both pieces are $H^1$ up to the boundary by step 1.1, so the approximation and bounded endpoint trace in [F5] apply. The imposed jump gives $\gamma^+u^+-\gamma^-u^-=\phi$. Taking the divergence distributionally and using the global smooth-test stationarity therefore gives $\langle-\Delta U,\eta\rangle=\int_\Gamma\phi\,\partial_n\eta\,dS$. No planar face decomposition, surface-normal differentiation or pointwise jump formula is used. [F1, F5, step 1.1, given, algebra]

2.2 Put $P(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)dS_y$ off $\Gamma$. Since $|\partial_{n_y}G_3|\le(4\pi)^{-1}|x-y|^{-2}$ and $\int_{B_R(a)}|x-y|^{-2}dx\le CR$ uniformly in $a,y$, [F3] defines $P\in L^1_{\rm loc}(\mathbb R^3)$ and gives $\int_{B_R(a)}|P|\le CR\|\phi\|_{L^1(\Gamma)}.$ For the uniform ball estimate, if $|a-y|\le2R$ enclose the ball in $B_{3R}(y)$ and integrate radially; otherwise $|x-y|\ge|a-y|/2>R/2$, giving the same bound. Off $\Gamma$ all kernel derivatives are uniformly bounded on compact sets, so differentiation under the surface integral proves smoothness and harmonicity. Differentiating [F2] with respect to the source variable gives $\int_{\mathbb R^3}\partial_{n_y}G_3(x,y)(-\Delta\eta(x))dx=\partial_n\eta(y).$ This differentiation is valid distributionally: $|x-y|^{-2}$ is locally volume integrable, and integration by parts outside a ball of radius $\epsilon$ leaves a boundary term $O(\epsilon)$ for the first derivative of $G_3$. Fubini using that same local integrability therefore yields $\langle-\Delta P,\eta\rangle=\int_\Gamma\phi\partial_n\eta\,dS$. [F2, F3, F90, step 1.1, given, construct]

3.1 Set $w=U-P$. Steps 2.1 and 2.2 show $\Delta w=0$ distributionally on the whole space. Choose a nonnegative unit-mass smooth bump $\rho$ supported in $B_1$ and let $w_\epsilon=w*\rho_\epsilon$. By [F4], $w_\epsilon$ is smooth and harmonic everywhere: $\Delta w_\epsilon(x)=\langle w,\Delta\rho_\epsilon(x-\cdot)\rangle=0$. Holder and step 2.2 give, for fixed $\epsilon$, $\int_{B_R(a)}|w_\epsilon|\le C(R+\epsilon)^{5/2}\|U\|_6+C(R+\epsilon)\|\phi\|_1.$ For a smooth harmonic $h$, differentiation of its spherical average gives $\frac{d}{dr}[(4\pi)^{-1}\int_{S^2}h(a+r\omega)d\omega]=(4\pi r^2)^{-1}\int_{B_r(a)}\Delta h=0$ by [F5]. Its limit at zero is $h(a)$, and radial integration gives the ball mean-value formula. Apply this to $h=w_\epsilon$ to obtain $|w_\epsilon(a)|\le |B_R|^{-1}\int_{B_R(a)}|w_\epsilon|\to0$ as $R\to\infty$. Thus $w_\epsilon=0$. Localizing $w$ to a slightly larger bounded set and applying the $L^1$ approximate-identity convergence of [F4] gives $w_\epsilon\to w$ in $L^1$ on every compact set. Hence $U=P$ almost everywhere. The smooth harmonic $P$ supplies the asserted representatives. [F3, F4, F5, F90, F94, step 1.1, step 2.1, step 2.2, algebra] ∎
