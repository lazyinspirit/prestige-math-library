---
id: lem-st-pure-spinor-cone-volume-current-cocycle
kind: lemma
title: Intrinsic Pure-Spinor Volume and Current Cocycle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
deps:
  - def-st-pure-spinor-cone-bv-geometry
dependency_roles:
  def-st-pure-spinor-cone-bv-geometry: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3.1–3.3.2, equations (3.34)–(3.44), and §3.4.1, equation (3.55), PDF pp. 50–54: complexified Euclidean chiral charts and invariant top form. Nekrasov's current is $J_V=\beta_iV^i$; the pole below is separately derived for the explicitly declared $j_V=-\beta_iV^i$ convention."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use [[def-st-pure-spinor-cone-bv-geometry]]. On the punctured ten-dimensional chiral pure-spinor cone with local volume $\Omega=\rho^7d\rho\wedge d^{10}u$, the Euler vector $E=\rho\partial_\rho$ has $\operatorname{div}_\Omega E=8$, and infinitesimal $\operatorname{Spin}(10,\mathbb C)$ vectors have zero divergence. In a compatible holomorphic $\beta\gamma$ chart with the positive current third-pole convention, let $\beta_i(z)\gamma^j(w)\sim-\alpha'\delta_i{}^j/(z-w)$, $j_V=-:\!\beta_iV^i\!:$, and $T_\Omega=-\alpha'^{-1}:\!\beta_i\partial\gamma^i\!:-\frac12\partial^2\log v$ when $\Omega=v(\gamma)d\gamma^1\wedge\cdots\wedge d\gamma^{11}$. Then

$$T_\Omega(z)j_V(w)\big|_{(z-w)^{-3}}=\frac{\alpha'\operatorname{div}_\Omega V(w)}{(z-w)^3},\qquad \operatorname{div}_\Omega V=v^{-1}\partial_i(vV^i).$$

For field-dependent $V=fX$, the divergence includes $X(f)$. If $\Gamma_z$ is an affine connection with inhomogeneous conformal variation $\delta_\sigma\Gamma_z=2\partial\sigma$, the affine completion $j_{V,\mathrm{aff}}=j_V-\frac{\alpha'}2\Gamma_z\operatorname{div}_\Omega V$ has the inhomogeneous Weyl contact $-\alpha'\operatorname{div}_\Omega V\,\partial\sigma$. The statements hold on compatible holomorphic cone-chart overlaps with the quantum-corrected cotangent current transitions; no global worldsheet measure or apex Stokes theorem is asserted.

## Statement references

[[def-st-pure-spinor-cone-bv-geometry]]

[Nekrasov, pure-spinor volume and current algebra](https://arxiv.org/pdf/hep-th/0511008v1)

## Facts & Assumptions

**Given:** The punctured cone chart, its volume, and cotangent gauge quotient of [[def-st-pure-spinor-cone-bv-geometry]]. Use the displayed negative first-order pole, current sign, stress tensor, and affine-connection convention in the statement.

[F1] [[def-st-pure-spinor-cone-bv-geometry]]: $\lambda=\rho\exp(u/2)$ in the scalar-component patch, with ten independent skew coordinates, $\Omega=\rho^7d\rho\wedge d^{10}u$, and Spin-translated cone charts.

[A1] The local beta-gamma chart has the stated OPE and the compatible quantum cotangent transition maps; the latter are a hypothesis of this local current calculation, not a constructed interacting continuum measure.

## Proof

1.1 For $X=X^\rho\partial_\rho+\sum_{a<b}X^{ab}\partial_{u_{ab}}$, the coordinate formula is $\operatorname{div}_\Omega X=\rho^{-7}\partial_\rho(\rho^7X^\rho)+\sum_{a<b}\partial_{u_{ab}}X^{ab}$. Hence $\operatorname{div}_\Omega(\rho\partial_\rho)=\rho^{-7}\partial_\rho(\rho^8)=8$. [F1, algebra]

1.2 Write $\Omega=v(\gamma)d^{11}\gamma$. The double contraction of $-\alpha'^{-1}:\!\beta_i\partial\gamma^i\!:(z)$ with $-:\!\beta_jV^j\!:(w)$ contributes $\alpha'\partial_iV^i/(z-w)^3$ under [A1]. The contraction of $-\frac12\partial^2\log v(\gamma(z))$ with the current contributes $\alpha' V^i\partial_i\log v/(z-w)^3$. Adding them gives $\alpha'[\partial_iV^i+V^i\partial_i\log v]=\alpha'v^{-1}\partial_i(vV^i)$, which is the Lie-derivative definition of divergence. Since this expression is coordinate invariant and the overlap preserves $\Omega$, the third-pole coefficient agrees on the compatible overlaps. [A1, F1, algebra]

2.1 From the Clifford action in [[def-st-pure-spinor-cone-bv-geometry]], the differential spin representation sends a bivector $v\wedge w$ to $\frac14[c(v),c(w)]$. In the isotropic splitting $V=W\oplus W^*$ its three summands are $\Lambda^2W^*$, $\mathfrak{gl}(W)$ and $\Lambda^2W$. Acting on $\lambda=\rho e^{B_2}$, the creation summand shifts $u$ by a constant and fixes $\rho$. The middle summand $A\in\mathfrak{gl}(W)$ acts on the scalar component by $\delta\rho=-\frac12(\operatorname{tr}A)\rho$ and on the two-form coordinates by $\delta u=Au+uA^t$. The linear map $u\mapsto Au+uA^t$ has trace $4\operatorname{tr}A$ on $\Lambda^2W$; its weighted radial contribution is $8(-\frac12\operatorname{tr}A)=-4\operatorname{tr}A$. Thus each summand has zero $\Omega$-divergence. [F1, step 1.1, algebra]

3.1 For a lowering generator $C\in\Lambda^2W$, the Fock action is $\frac12C^{ab}\iota_{e_a}\iota_{e_b}$, with repeated indices summed. Acting on the degree-zero, degree-two and degree-four pieces of $\rho e^{B_2}$ gives the chart vector $X_C^u=-uCu$ and $X_C^\rho=\frac12\operatorname{tr}(Cu)\rho$. For an independent coordinate $u_{ab}$, varying $u_{ab}$ by $+1$ and $u_{ba}$ by $-1$ gives $\partial_{u_{ab}}(-uCu)_{ab}=-\sum_\ell C_{b\ell}u_{\ell b}-\sum_k u_{ak}C_{ka}$. Summing these ten derivatives in dimension five gives $\sum_{a<b}\partial_{u_{ab}}(-uCu)_{ab}=8\sum_{a<b}C_{ab}u_{ab}=-4\operatorname{tr}(Cu)$, since $\operatorname{tr}(Cu)=-2\sum_{a<b}C_{ab}u_{ab}$. The radial term is $8X_C^\rho/\rho=4\operatorname{tr}(Cu)$, so total divergence is zero. These three types span $\mathfrak{so}(10,\mathbb C)$, and the connected Spin group is generated by its one-parameter subgroups; consequently its local flows preserve $\Omega$. [F1, step 1.1, step 2.1, algebra]

4.1 For $g\in\operatorname{Spin}(10,\mathbb C)$ mapping the displayed patch to another patch, put $\rho_g=(g\lambda)^+$ and $u^g_{ab}=(g\lambda)_{ab}/\rho_g$ on the overlap where $\rho_g\ne0$. These are the scalar and two-form coordinates by the chart definition. Since the group action preserves $\Omega$ by steps 2.1 and 3.1, the overlap obeys $\rho_g^7\,d\rho_g\wedge\bigwedge_{a<b}du^g_{ab}=\rho^7\,d\rho\wedge\bigwedge_{a<b}du_{ab}$, equivalently $\rho_g^7\det\!\left(\frac{\partial(\rho_g,u^g)}{\partial(\rho,u)}\right)=\rho^7$. Thus the local forms agree on each compatible patch overlap. [F1, step 2.1, step 3.1, algebra]

5.1 The same coordinate formula gives $\operatorname{div}_\Omega(fX)=f\operatorname{div}_\Omega X+X(f)$ by expanding $v^{-1}\partial_i(vfX^i)$. Finally, varying the affine term at fixed coordinates gives $\delta_\sigma[-\frac{\alpha'}2\Gamma_z\operatorname{div}_\Omega V]=-\alpha'\operatorname{div}_\Omega V\partial\sigma$. The sign is tied to the positive third-pole convention in the statement; reversing the operator order also reverses the displayed pole. [A1, step 1.2, algebra] ∎

## Scope boundary

The proof establishes the constrained local volume/current cocycle, including the derivative of a field-dependent coefficient. It does not construct all interacting target-dependent quantum patch maps, a global spectral density, or a prescription eliminating the punctured cone's apex/infinity boundary terms.

## Remarks

The source current and the current used here have opposite signs in the displayed cotangent coordinate. The local third-pole formula follows from the OPE and stress tensor stated in this item, so the source's current symbol is not silently substituted. In the curved Type II source, the explicit $+w_iV^i$ term corresponds to $-j_V$ when $w_i=\beta_i$; its pole sign must therefore be checked at the consumer.
