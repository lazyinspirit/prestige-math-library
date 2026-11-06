---
id: def-cmp4-gkp-single-overall-kahler-modulus-coordinate
kind: definition
title: GKP single overall Kähler-modulus coordinate and normalization
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-4d-moduli-effective-field-theory
dependency_level: 12
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n1-matter-coupled-supergravity
  - post-type-iib-fiveform-self-duality-constraint
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - pthm-type-iib-string-einstein-frame-pseudoaction
  - cor-closed-differential-forms-are-locally-exact
  - def-nullhomotopic-map-and-contractible-space
  - lem-contractibility-implies-trivial-fundamental-group
  - def-simply-connected
  - lem-sr-closed-one-form-primitive-on-simply-connected-open-sets
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  pthm-type-iib-string-einstein-frame-pseudoaction: physical-result
  cor-closed-differential-forms-are-locally-exact: mathematical-premise
  def-nullhomotopic-map-and-contractible-space: mathematical-premise
  lem-contractibility-implies-trivial-fundamental-group: mathematical-premise
  def-simply-connected: mathematical-premise
  lem-sr-closed-one-form-primitive-on-simply-connected-open-sets: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional two-derivative, large-radius, unwarped Type IIB Einstein-frame reduction on a fixed Ricci-flat Calabi–Yau threefold with one overall Kähler modulus and the stated C4 zero mode; no global axion period, multi-modulus reduction, flux vacuum, or exact truncation is asserted."
empirical_premises: []
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "Appendix A.1, equations (A.1)–(A.4), and §2.1, footnote 6; the dual scalar normalization used here is fixed separately by the constrained variation below."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/html/1607.00327v3"
      locator: "§7.3, Theorems 7.11–7.12: Einstein-frame pseudoaction coefficient and five-form stress tensor; used to check the adopted inputs, with the retained-mode variation supplied locally."
    - title: "David Baumann and Liam McAllister, Inflation and String Theory, Cambridge Monographs on Mathematical Physics"
      url: "https://arxiv.org/pdf/1404.2601v1"
      locator: "§§6.2–6.4, single Kähler modulus, Weyl rescaling, and no-scale structure; independent textbook treatment."
---

## Definition

Fix a compact Calabi–Yau threefold with a chosen smooth Kähler reference metric $\tilde g$ with vanishing Ricci tensor $\tilde R_{mn}=\tilde R^p{}_{mpn}=0$ and Kähler form $\tilde J$, and let $\tilde V=\int_X\sqrt{\tilde g}$. In the constant-warp, large-radius, two-derivative Type IIB Einstein-frame zero-mode ansatz
$$
ds^2_{10,E}=e^{-6u_E(x)}g_{4,E,\mu\nu}(x)dx^\mu dx^\nu+e^{2u_E(x)}\tilde g_{mn}(y)dy^m dy^n,
$$
retain the $C_4$ mode $C_{\mu\nu mn}=a_{\mu\nu}(x)\tilde J_{mn}(y)$ and its self-dual five-form completion, while setting background five-form flux to zero. Let $U$ be a nonempty contractible external coordinate neighborhood, $u_E\in C^\infty(U,\mathbb R)$ and $a_2\in\Omega^2(U)$ a smooth real two-form, with $a_2=\tfrac12a_{\mu\nu}dx^\mu\wedge dx^\nu$. Use the product orientation of $U\times X$ and a smooth nondegenerate external metric. Where the two-form equation holds, define its local dual scalar $b\in C^\infty(U,\mathbb R)$ by $db=\sqrt2 e^{8u_E}*_4 da_2$, equivalently $da_2=2^{-1/2}e^{-8u_E}*_4db$. In natural units, $u_E,b,\rho$ and the coordinate components of $a_2$ are dimensionless; $[\tilde V]=\mathrm{length}^6$. Here $*_4$ uses the chosen oriented four-dimensional Einstein metric of signature $(-,+,+,+)$ and satisfies $*_4^2=+1$ on one- and three-forms. The scalar is defined up to one additive constant on that connected neighborhood; no global period is specified. With this $b$ and $\kappa_4^2=\kappa_0^2/\tilde V$, the modulus coordinate is $\rho=b/\sqrt2+i e^{4u_E}$ and its dimensionless Kähler potential is $\mathcal K=-3\log[-i(\rho-\bar\rho)]$. If $\Phi=\Phi_0$ is constant and the same internal reference metric is used in string frame, then $u_E=u_s-\Phi_0/4$, so $\operatorname{Re}T=e^{4u_E}=e^{4u_s-\Phi_0}$ for $T=-i\rho$. In the dimensionful four-dimensional $N=1$ convention, $K=M_P^2\mathcal K$ and $M_P^2=\kappa_4^{-2}$. The local axion normalization does not fix a global period. This interface is restricted to one overall modulus; it makes no claim for multiple moduli, nonconstant warping, finite-radius corrections, or a complete flux vacuum.

## Definition references

[Giddings, Kachru, and Polchinski, Appendix A.1 and §§2.3–2.4](https://arxiv.org/pdf/hep-th/0105097v2)

[Baumann and McAllister, Inflation and String Theory, §§6.2–6.4](https://arxiv.org/pdf/1404.2601v1)

[[def-nullhomotopic-map-and-contractible-space]]

[[lem-contractibility-implies-trivial-fundamental-group]]

[[def-simply-connected]]

[[lem-sr-closed-one-form-primitive-on-simply-connected-open-sets]]

## Facts & Assumptions

**Given:** A chosen smooth compact Calabi–Yau threefold, a fixed Ricci-flat Kähler reference metric and Kähler form, a smooth four-dimensional Lorentzian metric of signature $(-,+,+,+)$, and the large-radius zero-mode regime stated above.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] supplies the broad compact Calabi–Yau geometry interface and its Kähler data; it does not assert that a chosen metric is Ricci-flat.

[F2] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]] declares product reduction metrics, retained modes, frames, dilaton convention, and approximation orders as separate ansatz data.

[F3] [[def-supergravity-conventions-and-normalizations]] fixes mostly-plus signature, $2\kappa_0^2=(2\pi)^7\alpha'^4$, $G_E=e^{-\Phi/2}G_s$, and $M_P^{-2}=\kappa_4^2$.

[F4] [[post-type-iib-two-derivative-supergravity-pseudoaction]] adopts the source-free Type IIB two-derivative pseudoaction with the five-form kinetic term varied before imposing its constraint.

[F5] [[post-type-iib-fiveform-self-duality-constraint]] separately imposes five-form self-duality after pseudoaction variation.

[F6] [[pthm-type-iib-string-einstein-frame-pseudoaction]] supplies the conditional Einstein-frame action with unshifted $\kappa_0$ and the stated RR normalization.

[F7] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the four-dimensional Einstein-frame scalar kinetic normalization used to identify the Kähler metric.

[F8] [[cor-closed-differential-forms-are-locally-exact]]: every closed smooth differential form of positive degree is exact on some neighbourhood of each point.

[F9] [[def-nullhomotopic-map-and-contractible-space]] defines a nonempty topological space $U$ to be contractible when every continuous map from $U$ into every topological space is homotopic to a constant map. Applying this to $\operatorname{id}_U$ gives a continuous homotopy from $\operatorname{id}_U$ to a constant map.

[F10] The homotopy in [F9] gives a path from each point of $U$ to its constant value, so $U$ is path-connected. [[lem-contractibility-implies-trivial-fundamental-group]] gives trivial $\pi_1(U,x_0)$ for every basepoint $x_0\in U$.

[F11] [[def-simply-connected]] defines a space to be simply connected when it is nonempty, path-connected, and has trivial fundamental group at every basepoint.

[F12] [[lem-sr-closed-one-form-primitive-on-simply-connected-open-sets]]: on a nonempty path-connected, simply connected open subset of an oriented time-oriented affine Minkowski four-space, each $C^1$ closed one-form has a global $C^2$ primitive, and a smooth form has a smooth primitive.

[A1] The reference metric is Ricci-flat and independent of $x^\mu$, the warp factor and ten-dimensional dilaton are constant in the internal coordinates, background fluxes and sources that would source a potential are set to zero, and only the displayed $C_4$ zero mode and its required self-dual completion are retained.

[A2] The internal reference volume $\tilde V$ is finite and positive; external boundary terms vanish or are discarded under the declared boundary conditions; all four-dimensional quantities use the same Einstein-frame metric.

## Proof

**Given:** The assumptions above and the adopted pseudoaction and self-duality inputs [F4]–[F6]. Write $u=u_E$, let $\hat g_4$ be the raw external metric in the ten-dimensional product ansatz, and define the four-dimensional Einstein metric by $g_{4,E}=e^{6u}\hat g_4$.

1.1 The nonzero mixed Christoffel symbols of $ds^2_{10,E}=\hat g_4+e^{2u}\tilde g$ are $\Gamma^m_{\mu n}=\delta^m_n\partial_\mu u$ and $\Gamma^\mu_{mn}=-e^{2u}\hat g^{\mu\nu}\partial_\nu u\,\tilde g_{mn}$, in addition to the Christoffel symbols of $\hat g_4$ and $\tilde g$. Contracting the Ricci tensor computed from these symbols gives $R_{10}=R[\hat g_4]+e^{-2u}R[\tilde g]-12\hat\Box u-42(\partial u)^2_{\hat g_4}$, while the block determinant is $\sqrt{-G_{10}}=e^{6u}\sqrt{-\hat g_4}\sqrt{\tilde g}$. Since $R[\tilde g]=0$ by [A1], integrating the Laplacian term by parts gives the external Jordan-frame bracket $\hat R_4+30(\partial u)^2_{\hat g_4}$; the reduced action is $\tilde V/(2\kappa_0^2)\int d^4x\sqrt{-\hat g_4}e^{6u}[\hat R_4+30(\partial u)^2_{\hat g_4}]$. Thus the coefficient of $\hat R_4$ relative to the Jordan-frame measure is $\tilde V e^{6u}/(2\kappa_0^2)$, which is field-dependent. [given, F1, F2, F3, F6, A1, A2, algebra]

2.1 For $\hat g_4=e^{-6u}g_{4,E}$, the four-dimensional conformal curvature identity gives $\hat R_4=e^{6u}[R_E+18\Box_Eu-54(\partial u)^2_E]$, and $(\partial u)^2_{\hat g_4}=e^{6u}(\partial u)^2_E$. The factor $\sqrt{-\hat g_4}e^{6u}$ equals $\sqrt{-g_{4,E}}e^{-6u}$, so after discarding the Einstein-frame boundary term from $\Box_Eu$, the sum of the curvature and Jordan kinetic terms is $R_E+(-54+30)(\partial u)^2_E=R_E-24(\partial u)^2_E$. The resulting action has the constant Einstein–Hilbert coefficient $\tilde V/(2\kappa_0^2)=1/(2\kappa_4^2)$, so $\kappa_4^2=\kappa_0^2/\tilde V$. [given, step 1.1, A2, algebra]

2.2 In a positively oriented orthonormal coframe for $\tilde g$, write $\tilde J=e^1\wedge e^2+e^3\wedge e^4+e^5\wedge e^6$ and $Q_4=\tilde J\wedge\tilde J/2$. Then $|\tilde J|^2=|Q_4|^2=3$, $*_{6,\tilde g}\tilde J=Q_4$ and $*_{6,\tilde g}Q_4=\tilde J$ by direct wedge expansion. Both forms are closed since $d\tilde J=0$. Before imposing self-duality retain independent potentials $a_2$ and $\chi$, so $C_4=a_2\wedge\tilde J+\chi Q_4$ and $\widetilde G_5=\mathcal H_3\wedge\tilde J+h_1\wedge Q_4$, with $\mathcal H_3=da_2$ and $h_1=d\chi$. These two summands have different external degrees and are orthogonal. In the Einstein-frame bracket of [F4, F6], the first contributes $-\tfrac34 e^{8u}|\mathcal H_3|_E^2$: the measure contributes $e^{-6u}$, the external three-form norm $e^{18u}$, and the internal two-form norm $3e^{-4u}$. The second contributes $-\tfrac34 e^{-8u}|h_1|_E^2$, with respective factors $e^{-6u}$, $e^{6u}$ and $3e^{-8u}$. Thus the reduced pseudoaction bracket is $\mathscr L_{\rm ps}=-\tfrac34(f|\mathcal H_3|_E^2+f^{-1}|h_1|_E^2)$, where $f=e^{8u}$. The product Hodge star gives $*_{10}(\mathcal H_3\wedge\tilde J)=f(*_4\mathcal H_3)\wedge Q_4$ and $*_{10}(h_1\wedge Q_4)=f^{-1}(*_4h_1)\wedge\tilde J$. Consequently [F5] imposes $h_1=f*_4\mathcal H_3$ after variation. [given, F3, F4, F5, F6, A1, step 1.1, algebra]

3.1 Both summands must contribute to the retained metric and $u$ equations before this constraint is imposed. Put $v_1=*_4\mathcal H_3$. The Lorentzian identities $|\mathcal H_3|_E^2=-|v_1|_E^2$ and $\tfrac12\mathcal H_{\mu\alpha\beta}\mathcal H_\nu{}^{\alpha\beta}=v_\mu v_\nu-g_{E,\mu\nu}|v_1|_E^2$ follow by contraction of the oriented four-dimensional volume tensor. Varying the measure as well as the inverse metrics, the metric variations of $\sqrt{-g_E}f|\mathcal H_3|^2$ and $\sqrt{-g_E}f^{-1}|h_1|^2$, evaluated at $h_1=fv_1$, each have coefficient $\sqrt{-g_E}f(v_\mu v_\nu-\tfrac12g_{E,\mu\nu}|v_1|^2)$ against $\delta g_E^{\mu\nu}$. At fixed $\mathcal H_3,h_1$, the $u$ derivative of $\mathscr L_{\rm ps}$ is $-6f|\mathcal H_3|^2+6f^{-1}|h_1|^2$, which becomes $-12f|\mathcal H_3|^2$. These are exactly the metric and $u$ variations of the one-potential bracket $\mathscr L_2=-\tfrac32 f|\mathcal H_3|^2$. Its two-form equation is $d(f*_4\mathcal H_3)=0$, the same as the pseudoaction's two-form equation; the other pseudoaction equation $d(f^{-1}*_4h_1)=0$ becomes $d\mathcal H_3=0$. Together with $dh_1=0$ these reproduce both field equations and Bianchi identities in this retained sector. This establishes the effective two-form coefficient by variation, rather than substituting self-duality into $\mathscr L_{\rm ps}$, which would give zero. No equation for an omitted mode is thereby established. [given, F4, F5, F6, A1, step 2.2, algebra]

4.1 Let $\mathcal H_3$ be an independent three-form and use the parent density $-\tfrac32e^{8u}\mathcal H_3\wedge *_4\mathcal H_3-\tfrac{3}{\sqrt2}db\wedge\mathcal H_3$. Varying $b$ gives $d\mathcal H_3=0$; [F8] then supplies a local two-form $a_2$ with $\mathcal H_3=da_2$, and $db\wedge da_2=d(b\,da_2)$ shows that the parent density reduces to the original two-form density up to a boundary term. Conversely, variation of the original two-form density with $\mathcal H_3=da_2$ gives $d(e^{8u}*_4\mathcal H_3)=0$. This is a smooth closed one-form on the contractible external coordinate domain. By [F9]–[F11] the domain is path-connected and simply connected. A coordinate chart identifies it with a nonempty open subset of $\mathbb R^4$; for applying [F12], equip this coordinate copy only with the auxiliary standard affine Minkowski structure, which does not add a physical spacetime assumption. The pullback one-form is smooth and closed, so [F12] supplies a smooth scalar $b$ on the full domain with $db=\sqrt2 e^{8u}*_4\mathcal H_3$. Any two such primitives differ by a constant because the domain is connected. Varying the parent density in $\mathcal H_3$ gives the same relation $*_4\mathcal H_3=2^{-1/2}e^{-8u}db$; since $*_4^2=+1$ on one- and three-forms in Lorentzian four dimensions, $\mathcal H_3=2^{-1/2}e^{-8u}*_4db$. Substitution in the parent density gives $-\tfrac34e^{-8u}|db|_E^2$. Thus the scalar and two-form equations are locally dual on the chosen coordinate domain, without setting a global period; the completion potential satisfies $d\chi=db/\sqrt2$. [given, F3, F8, F9, F10, F11, F12, A2, step 3.1, algebra]

5.1 For $X=-i(\rho-\bar\rho)=2e^{4u}>0$ and $\rho=b/\sqrt2+i e^{4u}$, differentiating $\mathcal K=-3\log X$ gives $\mathcal K_{\rho\bar\rho}=3/X^2$. Also $\partial_\mu\rho\,\partial^\mu\bar\rho=\tfrac12(\partial b)^2_E+16e^{8u}(\partial u)^2_E$, so $-2\mathcal K_{\rho\bar\rho}\partial\rho\partial\bar\rho=-\tfrac34e^{-8u}(\partial b)^2_E-24(\partial u)^2_E$, exactly the two kinetic terms from steps 2.1 and 4.1 in the four-dimensional $N=1$ normalization [F7]. Thus $\mathcal K=-3\log[-i(\rho-\bar\rho)]$; because $T=-i\rho$, $T+\bar T=X$ and $\mathcal K=-3\log(T+\bar T)$. [given, F7, step 2.1, step 4.1, algebra]

6.1 From $g_{10,E}=e^{-\Phi_0/2}g_{10,s}$ and the common fixed internal metric, $e^{2u_E}=e^{-\Phi_0/2}e^{2u_s}$, hence $u_E=u_s-\Phi_0/4$. Therefore $e^{4u_E}=e^{4u_s-\Phi_0}=\operatorname{Re}T$ and $\operatorname{Im}T=-b/\sqrt2$. The dualization defines a scalar only locally and contains no period or charge lattice, so no global axion period follows. [given, F3, F6, A1, step 5.1, algebra] ∎

## Remarks

The scalar normalization is fixed by the two retained five-form components and their constrained variation. GKP Appendix A.1 motivates the coordinate presentation; its printed dualization relation before (A.3) does not include the $\sqrt2$ used here. With the unrescaled $C_{\mu\nu mn}=a_{\mu\nu}\tilde J_{mn}$ and the adopted pseudoaction, the unrescaled primitive $d\chi=e^{8u}*_4da_2$ instead gives $\rho=\chi+i e^{4u}$. Our convention $b=\sqrt2\chi$ preserves $\rho=b/\sqrt2+i e^{4u}$ and the stated Kähler potential. Neither convention fixes a global charge lattice or axion period.
