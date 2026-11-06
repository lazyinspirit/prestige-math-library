---
id: post-f4-m2-matter-curve-zero-mode-dictionary
kind: postulate
title: M2 matter-curve zero modes for smooth algebraic flux backgrounds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
category: string-theory
deps:
- def-axiom-of-choice
- def-f4-crepant-resolution-and-matter-surface
- def-m2-brane-worldvolume-action
- post-f4-codimension-two-matter-and-yukawa-dictionary
- post-f4-mtheory-g4-shifted-quantization
- post-f4-mtheory-to-f-theory-limit
- def-singular-cochain-complex-with-coefficients
- def-singular-cohomology-with-coefficients
- thm-de-rham-theorem
- def-thom-euler-class-of-an-oriented-vector-bundle
- def-fundamental-class-of-a-compact-oriented-manifold
- def-kronecker-evaluation-pairing
- lem-de-rham-top-integral-is-fundamental-class-evaluation
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-sheaf-cohomology-derived-global-sections
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  def-m2-brane-worldvolume-action: formulation-prerequisite
  post-f4-codimension-two-matter-and-yukawa-dictionary: formulation-prerequisite
  post-f4-mtheory-g4-shifted-quantization: formulation-prerequisite
  post-f4-mtheory-to-f-theory-limit: formulation-prerequisite
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-thom-euler-class-of-an-oriented-vector-bundle: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  lem-de-rham-top-integral-is-fundamental-class-evaluation: mathematical-premise
  def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface: mathematical-premise
  cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional: mathematical-premise
  thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces: mathematical-premise
axiom_strength: Full AC inherited from the adopted flux and geometric interfaces.
physical_scope: Adopted zero-mode dictionary restricted to a smooth compact matter curve and its chosen resolved fibral component
  in a geometric F-theory model, with an algebraic gauge-background flux whose induced line bundle is defined on that curve.
  It does not cover singular matter curves, arbitrary non-algebraic integral (2,2) flux, all vectorlike multiplicities, or
  a microscopic quantization of the M2 theory.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1
    url: https://arxiv.org/pdf/1806.01854v1
    locator: §5.4.2, printed pp. 46–48, twisted seven-brane zero-mode cohomology; §9.5.1, printed pp. 92–95, M2 Wess–Zumino
      coupling, flux-induced line bundle on a smooth matter curve, and the Riemann–Roch chiral index.
  - title: Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory
      compactifications, arXiv:1109.3454v2
    url: https://arxiv.org/pdf/1109.3454v2
    locator: §4.1, printed pp. 23–24, the matter-surface chiral-index ansatz and the authors' explicit 2011 statement that no
      first-principles wrapped-M2 derivation of its general form was then known.
  - title: Ling Lin and Timo Weigand, G4-Flux and Standard Model Vacua in F-theory, arXiv:1604.04292v2
    url: https://arxiv.org/pdf/1604.04292v2
    locator: §2.2, printed pp. 5–6, matter-surface integrations in the specified resolved models; used as a model-specific
      check, not a universal zero-mode theorem.
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Assume Full AC. Fix a smooth compact resolved flat sectioned elliptic Calabi–Yau fourfold and a chosen weight component whose matter surface $S_R$ is a smooth compact complex surface fibred by the selected rational curve over a smooth compact matter curve $q:S_R\to C_R$. Require $q$ to be a proper smooth submersion with closed oriented real two-dimensional fibers, with the orientation of the selected weight fixed, and write $i:S_R\hookrightarrow\widehat Y_4$. All integral cohomology below is singular cohomology. For a smooth compact complex curve $C$, let $j_C:H^2(C;\mathbb Z)\to H^2_{\mathrm{sing}}(C;\mathbb R)$ be coefficient change: on singular cochains it is composition with $\mathbb Z\hookrightarrow\mathbb R$. Let $J_C:H^2_{\mathrm{dR}}(C;\mathbb R)\to H^2_{\mathrm{sing}}(C;\mathbb R)$ be the de Rham comparison, and define $\rho_C=J_C^{-1}\circ j_C$. For a holomorphic line bundle $L$, use the integral first-Chern normalization $c_1(L):=e_{\mathrm{Th}}(L_{\mathbb R})$, with the underlying real plane oriented by complex multiplication. Define its degree by $\deg L:=\langle c_1(L),[C]\rangle\in\mathbb Z$, where $[C]$ is the complex-oriented integral fundamental class, summed over connected components. Write $K_C=T^{*1,0}C$ for the holomorphic cotangent line: its local frame is $dz$, with the holomorphic nonzero derivative as transition factor. These conventions and their local well-definedness checks are specified below.

For an algebraic gauge-background flux in the stated geometric regime, form the real fiber-integrated class $\alpha=q_*(i^*[g_4])\in H^2_{\mathrm{dR}}(C_R;\mathbb R)$. Assume a chosen integral lift $c\in H^2(C_R;\mathbb Z)$ with $\rho_{C_R}(c)=\alpha$, and a supplied holomorphic line bundle $\mathcal L_R$ with $c_1(\mathcal L_R)=c$. The pushforward is de Rham integration along these oriented compact fibers. Orient the total surface by the complex orientation of the base followed by the selected fiber orientation; the integral uses this same weight convention. Its defining evaluation identity and the degree convention above give
$$\deg(\mathcal L_R)=\int_{S_R}g_4.$$
The real class alone neither guarantees this integral lift nor determines the holomorphic or flat part of the line bundle; these are additional data, not consequences of shifted quantization. Choose a spin line $\mathcal S_R$ with $\mathcal S_R^{\otimes2}\cong K_{C_R}$. For any holomorphic line $E$ on $C$, let $\mathcal O_C(E)$ be its sheaf of holomorphic sections, let $H^q(C,E):=H^q(C,\mathcal O_C(E))$ be derived sheaf cohomology, and write $h^q(C,E):=\dim_{\mathbb C}H^q(C,E)$. The groups for $q=0,1$ are finite-dimensional for every such $E$ by the exact general-line Dolbeault and sheaf comparisons below; in particular this applies to the supplied $E=\mathcal L_R\otimes\mathcal S_R$, without a divisor representation being assumed. The net four-dimensional chiral multiplicity is the index
$$\chi_R=h^0(C_R,\mathcal L_R\otimes\mathcal S_R)-h^1(C_R,\mathcal L_R\otimes\mathcal S_R).$$
This is an adopted physical zero-mode dictionary, supported by the later smooth-curve derivation in Weigand's lecture notes. The bosonic M2 Wess–Zumino term alone does not prove it. The convention does not count vectorlike pairs and makes no claim for singular curves or general non-algebraic cohomology classes.

## Postulate references

[[def-axiom-of-choice]]

[[def-f4-crepant-resolution-and-matter-surface]]

[[def-m2-brane-worldvolume-action]]

[[post-f4-codimension-two-matter-and-yukawa-dictionary]]

[[post-f4-mtheory-g4-shifted-quantization]]

[[post-f4-mtheory-to-f-theory-limit]]

[[def-singular-cochain-complex-with-coefficients]]

[[def-singular-cohomology-with-coefficients]]

[[thm-de-rham-theorem]]

[[def-thom-euler-class-of-an-oriented-vector-bundle]]

[[def-fundamental-class-of-a-compact-oriented-manifold]]

[[def-kronecker-evaluation-pairing]]

[[lem-de-rham-top-integral-is-fundamental-class-evaluation]]

[[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]

[[def-sheaf-cohomology-derived-global-sections]]

[[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]

[[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]

[[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]

## Facts & Assumptions

**Given:** A fixed smooth resolved model, one oriented weight component, a smooth compact matter curve, and an algebraic flux background in the geometric regime.

[F1] [[def-f4-crepant-resolution-and-matter-surface]] supplies the specified smooth resolved fourfold and integral matter surface interface; its current Step 1 readiness record is stale, so this citation does not assert current readiness.

[F2] [[def-m2-brane-worldvolume-action]] currently defines the classical bosonic M2 action with Wess–Zumino coefficient $T_{M2}$ on a smooth closed oriented timelike worldvolume, with a Green–Schwarz completion in on-shell CJS superspace. Its current Step 1 record is ready. The action is a coupling/normalization input only, not proof of the quantum zero-mode statement.

[F3] [[post-f4-codimension-two-matter-and-yukawa-dictionary]] currently states the conditional matter-curve/selected-fibral-curve/matter-surface dictionary in a specified resolved model. Its current Step 1 record is escalated for stale resolved-geometry readiness and an outstanding Kodaira/local-minimal-Weierstrass input; its older missing-M2-action reason is now stale because that carrier exists. The item's separate stale note that the M2 carrier is absent is not used here.

[F4] [[post-f4-mtheory-to-f-theory-limit]] adopts the sectioned-model M/F decompactification and identifies M2 states wrapping the full generic elliptic fiber with Kaluza–Klein modes of the dual circle. Those are distinct from the selected rational fibral-curve M2 states used in this matter-curve dictionary. The local M/F carrier remains escalated on its type-IIB elliptic-fibration dependency; its M2-action and IIA-circle inputs now have ready Step 1 records.

[F5] [[post-f4-mtheory-g4-shifted-quantization]] is the local conditional flux convention. Its free-period interface is matched, but the underlying generic-shift and M2-tension carriers lack current Step 1 readiness records, so this is not a ready input.


[F6] [[def-singular-cochain-complex-with-coefficients]] and [[def-singular-cohomology-with-coefficients]] define the cochain coboundary by precomposition with the chain boundary and cohomology as its kernel modulo image. [[thm-de-rham-theorem]] supplies the comparison $J_C$ for the smooth second-countable curve under the inherited AC assumption. Thus the degree-two map here is defined independently of the degree-four flux map.

[F7] [[def-thom-euler-class-of-an-oriented-vector-bundle]] supplies the integral Euler class of the complex-oriented underlying real plane, using its normalized Thom class. [[def-fundamental-class-of-a-compact-oriented-manifold]] and [[def-kronecker-evaluation-pairing]] supply the complex-oriented fundamental class and evaluation defining degree. [[lem-de-rham-top-integral-is-fundamental-class-evaluation]] identifies real top-degree evaluation under $J_C$ with integration.

[F8] [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]] defines holomorphic frame transitions, sections and the bundle Dolbeault operator. [[def-sheaf-cohomology-derived-global-sections]] defines $H^q(C,\mathcal O_C(E))$; $H^0$ is the global holomorphic-section space.

[F9] [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]] constructs a compatible metric on a compact Riemann surface and a Hermitian metric on every holomorphic line under countable choice, supplied by the stated full AC. [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]] proves finite-dimensionality of both Dolbeault groups for an arbitrary holomorphic line with these metrics. [[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]] identifies its derived sheaf $H^0,H^1$ with those Dolbeault groups. No finite good cover is needed for this global comparison; that supplier's additional good-cover assumption concerns only its separate fixed-cover conclusion.

## Mathematical well-definedness

Coefficient change commutes with coboundary, since $\delta(j\circ\varphi)=j\circ\varphi\circ\partial=j\circ\delta\varphi$. It therefore descends to $j_C$, and [F6] gives the inverse comparison defining $\rho_C$. For the supplied $c_1(\mathcal L_R)=c$, coefficient change commutes with evaluation on the integral fundamental cycle, and [F7] gives
$$\deg\mathcal L_R=\langle j_C(c),[C_R]_{\mathbb R}\rangle=\int_{C_R}\rho_{C_R}(c)=\int_{C_R}q_*(i^*[g_4])=\int_{S_R}g_4.$$
The last equality uses the stated base-before-fiber orientation and defining integration identity. Changing a closed-form representative changes the integral by the integral of an exact form on a closed manifold, hence by zero. For the cotangent line, the chain rule makes the $dz$ transition factors satisfy the cocycle rule; they are holomorphic and nonzero, so [F8] applies. Tensor products of the supplied holomorphic line frames again have holomorphic nonzero transitions, giving the actual line $\mathcal L_R\otimes\mathcal S_R$.

For each connected component of $C_R$, choose the metrics whose existence is proved in [F9]. Apply its arbitrary-line Dolbeault finiteness and global sheaf comparison to $E=(\mathcal L_R\otimes\mathcal S_R)|_C$. This gives finite $H^0$ and $H^1$ for this actual supplied line, rather than only for $\mathcal O(D)$. No connectedness restriction has been added: a compact smooth curve has finitely many connected components, because components are open in a locally connected manifold and compactness gives a finite subcover. Sheaves on a finite disjoint union are exactly tuples of sheaves on its components, by restriction and gluing; global sections are their finite product. This equivalence and exactness of finite products apply to injective resolutions in [F8], so derived global sections, and hence $H^0,H^1$, are the finite products of the component groups. They are finite-dimensional, including the empty case. The comparison is with the fixed sheaf groups, so the auxiliary metric choices impose no restriction on the given holomorphic line and do not affect $h^q$. This proves only the mathematical meaning and finiteness of the adopted index; its physical zero-mode interpretation remains the Postulate.
