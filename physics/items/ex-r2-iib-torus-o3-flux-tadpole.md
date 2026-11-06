---
id: ex-r2-iib-torus-o3-flux-tadpole
kind: example
title: "Type IIB three-form periods and D3 tadpole on the T6/Z2 cover"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 16
domain: physics
library: physics
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-r2-iib-flux-background-conventions
  - post-r2-iib-three-form-flux-quantization
  - pthm-r2-iib-d3-tadpole-from-f5-bianchi
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  post-r2-iib-three-form-flux-quantization: physical-assumption
  pthm-r2-iib-d3-tadpole-from-f5-bianchi: physical-result
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A finite GKP-cover charge-accounting example using the adopted O3-minus and free-period conventions. It checks two explicit flux periods and the integrated Maxwell tadpole; it does not establish a global supergravity solution, all-cycle quantization, supersymmetry, stability, or a universal O3 charge law."
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.1 Eqs. (2.23)–(2.25), PDF pp. 7–9; §4.1 O3 models, PDF p. 20."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2.2 Eq. (2.5), PDF pp. 5–6; §4.2 Eqs. (4.18), (4.21)–(4.22), PDF pp. 25–29."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722v2"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.4, Eq. (4.77) and Exercise 4.14, PDF pp. 34–35."
    - title: "Shamit Kachru, Michael B. Schulz, Prasanta K. Tripathy, and Sandip P. Trivedi, New Supersymmetric String Compactifications, arXiv:hep-th/0211182v1"
      url: "https://arxiv.org/pdf/hep-th/0211182v1"
      locator: "§2.1 Eqs. (2.1)–(2.3) and footnote 2, PDF pp. 3–4; cover tadpole and even periods when exotic O3 planes are excluded."
    - title: "Michael B. Schulz, Calabi-Yau Duals of Torus Orientifolds, arXiv:hep-th/0412270v4"
      url: "https://arxiv.org/pdf/hep-th/0412270v4"
      locator: "§2.1 Eqs. (2.2)–(2.6), PDF pp. 3–5; cover source density and O3 weight."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $X=(\mathbb R/\mathbb Z)^6$ be the smooth covering six-torus with dimensionless coordinates $x^i$ of period one, a constant length scale $R>0$, flat metric $ds_6^2=R^2\sum_{i=1}^6(dx^i)^2$, positive orientation $dx^1\wedge\cdots\wedge dx^6$, complex coordinates $z^a=x^{2a-1}+ix^{2a}$, Kähler form $J=R^2\sum_{a=1}^3dx^{2a-1}\wedge dx^{2a}$, and holomorphic volume form $\Omega=dz^1\wedge dz^2\wedge dz^3$. Let $\sigma(x^1,\ldots,x^6)=(-x^1,\ldots,-x^6)$ modulo one and choose the ordinary O3-minus convention for the quotient $X/\langle\sigma\rangle$, while doing current and flux integrals on the smooth cover $X$. Exclude exotic O3 planes, choose the source sector with no localized flux on any O3 plane as required in Schulz §2.1, and take no mobile D3-branes, D7-branes, or other induced localized D3 sources. The absence of localized O3 flux is an explicit model choice, separate from absence of induced D3 charge; no localized discrete flux datum is inferred from a smooth differential form. In this cover convention, the 64 fixed-point terms each have source weight $-1/2$. Set
$$F_3=2(2\pi)^2\alpha'\,dx^1\wedge dx^2\wedge dx^3,\qquad H_3=-16(2\pi)^2\alpha'\,dx^4\wedge dx^5\wedge dx^6.$$
For the oriented coordinate cycles $\Sigma_{123}=T^3_{123}$ and $\Sigma_{456}=T^3_{456}$, the normalized cover periods are $2$ and $-16$, respectively; both are even, as required here when exotic O3 planes are excluded. The degree-six cover source current is $\rho_3^{\mathrm{loc}}=-\frac12\sum_{p\in\operatorname{Fix}(\sigma)}\delta_p$. On the covering space, the dimensionless Maxwell flux charge is $Q_{\mathrm{flux}}=32$ and the localized charge is $Q_3^{\mathrm{loc}}=-32$, so the integrated D3 tadpole balances. This is a worked period/current ledger conditional on the cited physical inputs; it is not a construction of a solution to the local field equations and does not claim that these two cycle checks establish quantization on the full free lattice.

## Example references

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[def-r2-iib-flux-background-conventions]]

[[post-r2-iib-three-form-flux-quantization]]

[[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]

[Giddings–Kachru–Polchinski, §2.1 and §4.1](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §§2.2 and 4.2](https://arxiv.org/pdf/hep-th/0509003v3)

[Van Riet–Zoccarato, §4.4](https://arxiv.org/pdf/2305.01722)

[Kachru, Schulz, Tripathy, and Trivedi, §2.1](https://arxiv.org/pdf/hep-th/0211182v1)

[Schulz, §2.1](https://arxiv.org/pdf/hep-th/0412270v4)

## Facts & Assumptions

**Given:** The smooth covering torus, its coordinates and orientation, the involution $\sigma$, the two flux forms and two cycles in the Example section, the adopted GKP free-period input, the GKP O3-minus source convention, and the conditional integrated tadpole theorem.

[F1] [[def-r2-iib-flux-background-conventions]]: $\alpha'$ has dimension length squared; the internal integration space, source current, and flux periods use the same declared smooth cover.

[F2] [[def-r2-iib-flux-background-conventions]]: the chosen smooth cover, orientation, and O3/O7 sector are fixed there; its Definition records the worldsheet projection, involution, and pullback parities, while its Remarks records that the local orientifold carrier is outside this run manifest and lacks current Step 1 readiness. This example checks its concrete involution directly and treats the O3 charge as a separately cited conditional input.

[F3] [[post-r2-iib-three-form-flux-quantization]]: on the selected smooth cover, each free integral three-cycle has the adopted normalized $F_3$ and $H_3$ periods in $\mathbb Z$; here only the two displayed cycles are checked.

[F4] [[def-r2-compact-de-rham-current-of-a-source-cycle]]: for each point $p$ on a compact oriented six-manifold, $\langle\delta_p,f\rangle=f(p)$ and the finite source sum pairs with $1$ as the sum of its coefficients.

[F5] [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]: under the adopted current Bianchi identity and matching cover/source normalizations, $Q_{\mathrm{flux}}+Q_3^{\mathrm{loc}}=0$.

[A1] Adopt the no-localized-O3-flux sector of Schulz §2.1, after Eq. (2.3), as in the specialized tadpole theorem. The quotient O3-minus charge input is $-1/4$ per plane in GKP's convention. On the $T^6$ cover, use the source density $Q_{O3}=-1/2$ per fixed point and count 64 fixed points; for the no-exotic-O3 sector, Kachru et al. §2.1 footnote 2 require even normalized cover periods. These are source and lattice inputs, not deductions from the mathematical fixed-point count.

## Verification

**Given:** The data in the Example section, with $\alpha'>0$, and the separately adopted O3-minus charge and period conventions in [A1] and [F3].

1.1 The map $\sigma$ squares to the identity and preserves the flat metric. Since $z^a\mapsto-z^a$, it is holomorphic; its pullback fixes each summand of $J$ and multiplies the three factors of $\Omega$ by $(-1)^3=-1$. Thus $\sigma^*J=J$ and $\sigma^*\Omega=-\Omega$, as required by the orientifold interface recorded under [F2]. [F1, F2, given, algebra]

1.2 A point of $\mathbb R/\mathbb Z$ is fixed by $x\mapsto-x$ exactly when $2x=0$ modulo one, so each of the six coordinates has two fixed values, $0$ and $1/2$. The fixed set therefore has $2^6=64$ points and no positive-dimensional component; under the selected O3 projection these are isolated O3 loci. [F2, given, algebra]

1.3 Each $dx^i$ is closed, and $\sigma^*dx^i=-dx^i$, so both displayed degree-three fluxes are closed and odd under $\sigma$. They have the required O3 parity. The two constant forms extend smoothly over every fixed point, so their displayed bulk representatives introduce no delta-supported flux term or NS5/D5 magnetic current. The no-localized-O3-flux sector is separately chosen in [A1], not deduced from the de Rham forms; hence this example meets the specialized theorem's new source premise without changing either flux or either period. [A1, F1, given, algebra]

1.4 On $\Sigma_{123}$, the coordinate integral of $dx^1\wedge dx^2\wedge dx^3$ is one and that of $dx^4\wedge dx^5\wedge dx^6$ is zero; on $\Sigma_{456}$ the corresponding integrals are zero and one. Hence the normalized displayed cover periods are $2$ for $F_3$ on $\Sigma_{123}$ and $-16$ for $H_3$ on $\Sigma_{456}$, while the cross-periods vanish. Both integers are even and satisfy the adopted free-period lattice condition [A1, F3]; no all-cycle claim is used. [A1, F3, given, algebra]

2.1 Since moving a three-form past a three-form contributes $(-1)^9=-1$, $dx^{456}\wedge dx^{123}=-dx^{123456}$. The minus sign in $H_3$ and this permutation give $$\int_XH_3\wedge F_3=32(2\pi)^4\alpha'^2,$$ and therefore $Q_{\mathrm{flux}}=32$ by the definition in the Statement. [given, algebra, step 1.4]

2.2 By [A1] and step 1.2, each of the 64 fixed points contributes $-1/2$ to the cover source density, so $\langle\rho_3^{\mathrm{loc}},1\rangle=64(-1/2)=-32$. This uses the mathematical current pairing [F4] and the physical cover-source normalization [A1] separately. [A1, F4, step 1.2, algebra]

3.1 Apply [F5] to these matched cover and source normalizations: $Q_{\mathrm{flux}}+Q_3^{\mathrm{loc}}=32-32=0$. This verifies the integrated charge cancellation in this chosen data set only; it does not imply that the current equation admits a solution obeying the remaining local field equations. [F5, step 2.1, step 2.2, given, algebra] ∎

## Remarks

The flux integrals and delta-current sum are both over the covering torus and use the cover source density. A quotient calculation would need its own quotient-normalized periods and localized source multiplicities. The only period checks here are on $\Sigma_{123}$ and $\Sigma_{456}$; the example does not claim those cycles exhaust $H_3(X;\mathbb Z)/\mathrm{torsion}$. The charge identity is inherited from the conditional A-page theorem. No supersymmetry, stability, warp factor, five-form profile, local sourced solution, or global string compactification is asserted.

