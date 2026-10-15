---
id: thm-tdmath-regular-energy-shell-measure
kind: theorem
title: "Coarea and invariant measure on compact regular energy shells"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-axiom-of-choice","def-tdmath-regular-energy-shell","def-lebesgue-measure-and-the-lebesgue-sigma-algebra","lem-distance-to-set-is-lipschitz","lem-finite-measure-uniqueness-on-a-pi-system","thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions","thm-dominated-convergence","thm-euclidean-implicit-function-theorem","thm-metric-closure-characterisation","thm-tdmath-hamiltonian-measure-and-recurrence","thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: []
dependency_roles: {"def-axiom-of-choice":"mathematical-premise","def-tdmath-regular-energy-shell":"mathematical-premise","def-lebesgue-measure-and-the-lebesgue-sigma-algebra":"mathematical-premise","lem-distance-to-set-is-lipschitz":"mathematical-premise","lem-finite-measure-uniqueness-on-a-pi-system":"mathematical-premise","thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions":"mathematical-premise","thm-dominated-convergence":"mathematical-premise","thm-euclidean-implicit-function-theorem":"mathematical-premise","thm-metric-closure-characterisation":"mathematical-premise","thm-tdmath-hamiltonian-measure-and-recurrence":"mathematical-premise","thm-tonelli-theorem-for-sigma-finite-product-spaces":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
      locator: "Complete author-hosted HTML chapter read; ideal-gas phase-space integrals and canonical Gaussian momentum distribution."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement

Assume AC. Let $O\subset\mathbb R^{2n}$ be open with its canonical symplectic form, let $H\in C^2(O,\mathbb R)$, and let $J\subset\mathbb R$ be open. Suppose $\nabla H\ne0$ on $H^{-1}(J)$ and $H^{-1}(K)$ is compact in $O$ for every compact $K\subset J$. Define $\mu_E$ by [[def-tdmath-regular-energy-shell]]. Then for every nonnegative Borel $f$ compactly supported in $H^{-1}(J)$,
$$\int_Of(x)\,dx=\int_J\mu_E(f)\,dE.$$
For every $E\in J$ with nonempty shell $\Sigma_E=H^{-1}(\{E\})$, $0<\mu_E(1)<\infty$, and $\widehat\mu_E=\mu_E/\mu_E(1)$ is a probability measure. Let $\phi_t$ be a Hamiltonian flow map defined as a diffeomorphism on a full compact energy band containing $\Sigma_E$ and preserving that band. Then $\widehat\mu_E$ is invariant under $\phi_t$ for every such regular $E$. Critical levels and noncompact bands are outside this statement.

## Facts & Assumptions

**Given:** The regular-band data, the weighted-area definition, and the complete Hamiltonian flow on the particular band.

[A1] AC is adopted; $O\subset\mathbb R^{2n}$ is open, $H\in C^2$, $\nabla H\ne0$ on $H^{-1}(J)$, and compact energy intervals have compact inverse images in $O$.

[A2] The nonnegative Borel function is compactly supported in $H^{-1}(J)$. For invariance, $\phi_t$ is a diffeomorphism on a compact band, maps it onto itself, and is the Hamiltonian flow of $H$.

[F1] [[def-axiom-of-choice]] and [[def-tdmath-regular-energy-shell]]: AC is the standing hypothesis of the change-of-variables supplier; the candidate shell integral is the sum over a supplied graph partition, and graph area in a chart has density $\sqrt{1+|\nabla h|^2}\,dz$.

[F2] [[thm-euclidean-implicit-function-theorem]]: if one partial derivative of $H$ is nonzero, a neighborhood of that level is a $C^1$ graph $x_i=h(z,E)$ with $\partial_Eh=1/\partial_iH$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a $C^1$ injective change of variables with nonzero Jacobian transforms a nonnegative Lebesgue integral by the absolute Jacobian.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]: nonnegative chart integrals may be interchanged and decomposed over Euclidean Lebesgue factors.

[F5] [[thm-tdmath-hamiltonian-measure-and-recurrence]]: on the domain of a Hamiltonian flow, the canonical symplectic volume is preserved and $H$ is constant along each orbit.

[F6] [[thm-dominated-convergence]]: a common integrable chart bound justifies continuity in $E$ of compactly supported shell integrals.

[F7] [[lem-distance-to-set-is-lipschitz]] and [[thm-metric-closure-characterisation]]: distance to a nonempty closed set is continuous and vanishes exactly on that set.

[F8] [[lem-finite-measure-uniqueness-on-a-pi-system]]: two finite measures that agree on a generating pi-system and have equal total mass agree on the generated sigma-algebra.

## Proof



**Given:** [A1]–[A2] and the geometric and measure interfaces [F1]–[F7].

1.1 Let $C$ be a compact energy band containing the support of $f$. At each $x\in H^{-1}(C)$, some coordinate derivative $\partial_iH(x)$ is nonzero. By [F2] a neighborhood is parameterized by the remaining coordinates $z$ and energy $E$, with $x_i=h(z,E)$. Compactness gives a finite cover by such charts. Refine the cover by finitely many balls whose closures lie in chart domains and whose smaller concentric balls cover $H^{-1}(C)$. Choose standard smooth bump functions $\psi_a$ supported in the larger balls and positive on the smaller balls, and let $\Psi=\sum_a\psi_a$. Its minimum on $H^{-1}(C)$ is positive. Choose a smooth scalar cutoff $\eta$ that is zero below one quarter of this minimum and one above one half of it. Then $\chi_a=\eta(\Psi)\psi_a/\Psi$, extended by zero where $\Psi=0$, is smooth, supported in its chart, and the sum is one near $H^{-1}(C)$. [A1, A2, F2, F4, construct]

2.1 In each chart, the map $(z,E)\mapsto(z,h_a(z,E))$ is injective after shrinking the chart, and its absolute Jacobian is $|\partial_Eh_a|=|\partial_iH|^{-1}$. By [F3] and Tonelli [F4], $$\int_O f(x)\chi_a(x)\,dx =\int_J\int f(z,h_a(z,E))\chi_a(z,h_a(z,E))|\partial_iH|^{-1}\,dz\,dE.$$ Implicit differentiation gives $\partial_{z_j}h_a=-\partial_jH/\partial_iH$, so the graph area density is $$\sqrt{1+|\nabla_zh_a|^2}\,dz=\frac{|\nabla H|}{|\partial_iH|}\,dz.$$ The inner integral is therefore the corresponding chart contribution to the candidate $\mu_E(f)$ in [F1]. Sum the finitely many charts and use $\sum_a\chi_a=1$ on the support to obtain the asserted coarea identity. [A1, A2, F1, F2, F3, F4, step 1.1, algebra]

2.2 On overlaps, if one graph parameterization is obtained from another by a $C^1$ coordinate change $\psi$, its Gram matrix is transformed by $G\mapsto(D\psi)^\top G(D\psi)$. Taking determinants shows the area density changes by $|\det D\psi|$, exactly the ordinary chart Jacobian. Implicit differentiation gives $\sqrt{1+|\nabla h|^2}/|\nabla H|=|\partial_iH|^{-1}$, so the chart contributions define the same measure independent of the partition and equal $\int_{\Sigma_E}g|\nabla H|^{-1}dA_E$. Each shell is a closed subset of compact $H^{-1}(\{E\})$, hence compact. A finite collection of graph charts with $\nabla H$ bounded away from zero on that compact level gives finite area and hence $\mu_E(1)<\infty$. If the shell is nonempty, one graph chart contains an open patch; its coordinate domain has positive $(2n-1)$-dimensional measure and the continuous density $|\nabla H|^{-1}dA_E/dz$ is positive there, so $\mu_E(1)>0$. [A1, F1, F2, step 1.1, algebra]

3.1 Fix a compact band and a compactly supported continuous test $g$ on it. For a continuous compactly supported scalar function $q$ on $J$, the coarea identity from 1.2 and the Hamiltonian volume/energy invariance [F5] give $$\int_Jq(E)\mu_E(g\circ\phi_t)\,dE =\int_Oq(H(x))g(\phi_tx)\,dx =\int_Oq(H(x))g(x)\,dx =\int_Jq(E)\mu_E(g)\,dE.$$ The second equality is the change of variables by the volume-preserving diffeomorphism $\phi_t$; $H\circ\phi_t=H$ keeps the energy weight fixed. For each test $g$, both functions of $E$ in the outer integrals are continuous locally: use the finite chart representation in 1.2, compact chart support, the positive lower bound for $|\nabla H|$, and dominated convergence [F6]. Their difference integrates to zero against every compactly supported continuous $q$. If the continuous difference were nonzero at one energy, it would keep one strict sign on a neighborhood; a nonnegative continuous bump $q$ supported there would make the integral nonzero. Thus $\mu_E(g\circ\phi_t)=\mu_E(g)$ for every $E$ in the band. [A1, A2, F1, F5, F6, step 2.1]

4.1 Fix a closed subset $F$ of a nonempty shell. If $F=\varnothing$, both measures assign it zero. Otherwise let $\chi$ be a continuous compactly supported cutoff equal to one on the compact shell; the same finite-ball bump construction used in 1.1 supplies it. In the ambient band set $g_n(x)=\chi(x)\max\{0,1-n\,\operatorname{dist}(x,F)\}$. By [F7], $g_n$ is continuous, $0\le g_n\le1$, and its restriction to $\Sigma_E$ converges pointwise to $\mathbf1_F$. Because $\phi_t$ maps the shell onto itself, $g_n\circ\phi_t$ converges there to $\mathbf1_{\phi_t^{-1}F}$. Apply 2.1 to each $g_n$ and use dominated convergence [F6] for the finite shell measure from 1.3; this gives $\mu_E(\phi_t^{-1}F)=\mu_E(F)$ for every closed $F\subseteq\Sigma_E$. Closed sets form a pi-system generating the shell Borel sigma-algebra, and both $\mu_E$ and its pushforward have the same finite total mass because $\phi_t$ maps the shell onto itself. [F5, F6, F7, step 2.2, step 3.1]

5.1 By [F8], agreement on closed sets and equality of total masses imply that $\mu_E$ equals its pushforward on every Borel subset of $\Sigma_E$. Divide by $0<\mu_E(1)<\infty$ from 1.3. Hence the normalized regular-shell probability is invariant for each such $E$, not merely almost every energy. [F8, step 2.2, step 4.1] ∎
