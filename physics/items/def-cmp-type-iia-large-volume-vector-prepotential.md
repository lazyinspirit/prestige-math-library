---
id: def-cmp-type-iia-large-volume-vector-prepotential
kind: definition
title: "Classical Type IIA vector prepotential from Calabi–Yau intersections"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 8
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp-n2-special-kahler-period-data
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n2-matter-coupled-supergravity
  - post-type-iia-two-derivative-supergravity-action
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n2-matter-coupled-supergravity: physical-assumption
  post-type-iia-two-derivative-supergravity-action: physical-assumption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
physical_scope: "Source-reported leading homogeneous prepotential for the tree-level, large-volume, unfluxed, unorientifolded Type IIA vector sector. The adopted IIA action is current Step 1 ready. The local proof verifies the homogeneous lift and real quadratic ambiguity but does not derive the source-reported cubic coefficient from the ten-dimensional action; that derivation remains an explicit owner hold."
empirical_premises: []
sources:
  references:
    - title: "Klaus Behrndt, Gabriel Lopes Cardoso, Bernard de Wit, Renata Kallosh, Dieter Lüst, and Thomas Mohaupt, Classical and quantum N=2 supersymmetric black holes, arXiv:hep-th/9610105v1"
      url: "https://arxiv.org/pdf/hep-th/9610105v1"
      locator: "§2.3, equation (2.27), PDF p. 10 (printed p. 9); exact $-\frac16 C_{ABC}t^At^Bt^C$ classical coefficient and instanton corrections."
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§3.2.1, equation (37), PDF p. 30 (printed p. 29); confirms cubic dependence but displays a different coefficient convention, not used as support for the exact normalization."
---

## Definition

In the tree-level, large-volume vector-multiplet sector of Type IIA on a smooth compact Calabi–Yau threefold $X$ with no flux or orientifold projection, use the real closed $(1,1)$-form basis $[\omega_a]$ and Kähler coefficients $[J]=v^a[\omega_a]$ of the intersection and Kähler-volume datum, with complex-oriented intersections $\kappa_{abc}=\int_X\omega_a\wedge\omega_b\wedge\omega_c$. Supply also a smooth real closed dimensionless two-form $\mathcal B$ representing the retained internal NS–NS two-form sector, with $[\mathcal B]\in H^{1,1}(X;\mathbb R)$, and define its unique real coefficients by $[\mathcal B]=b^a[\omega_a]$. Thus $\mathcal B=B_{2,\mathrm{phys}}/\alpha'$ in this local string-unit normalization, and its internal field strength is zero. Choose real representatives $b^a$ on a local patch; no global gauge-period identification is asserted. Define the complexified Kähler coordinates $t^a:=b^a+iv^a$ and choose homogeneous special coordinates $(X^0,X^a)$ on a patch with $X^0\ne0$ and $X^a=X^0t^a$. In a local symplectic frame admitting a homogeneous prepotential, the source-reported leading classical term is
$$\mathcal F^{(0)}(X)=-\frac16\kappa_{abc}\frac{X^aX^bX^c}{X^0},$$
up to the stated real quadratic symplectic-polynomial ambiguity. Worldsheet-instanton terms and higher-derivative or string-loop corrections are excluded from this classical definition.

## Definition references

[[def-cmp-cy3-kahler-moduli-and-divisor-volumes]]

## Facts & Assumptions

**Given:** The fixed intersection and Kähler-volume data of [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]], the chosen closed two-form $\mathcal B$ and its real coefficients $b^a$, a local symplectic frame with special coordinates $X^0,X^a$ satisfying $X^0
e0$ and $X^a=X^0(b^a+iv^a)$, and the tree-level large-volume unfluxed Type IIA regime.

[F1] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] defines $\kappa_{abc}=\int_X\omega_a\wedge\omega_b\wedge\omega_c$ and uses dimensionless $\alpha'=1$ Kähler coordinates.

[F2] [[def-cmp-n2-special-kahler-period-data]] defines a local degree-two homogeneous prepotential only in a symplectic frame where it exists, and states the patchwise special-Kähler norm convention.

[F3] [[def-supergravity-conventions-and-normalizations]] defines the Lorentzian signature, string-frame form norm, $\alpha'$, $g_{\rm str}$, frame relation, and $\kappa_0$ normalization used here. Its current Step 1 record is ready.

[F4] The current carrier [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] adopts the local two-derivative four-dimensional $N=2$ framework, special-Kähler vector sector, and selected regular electric frame. Its current Step 1 record remains escalated; its recorded reason cites the conventions carrier as absent although that live carrier is now ready. The framework interface is used conditionally, and the stale escalation is preserved.

[F5] The current postulate [[post-type-iia-two-derivative-supergravity-action]] adopts the source-free massless tree-level two-derivative IIA action in string frame, with $F_0=0$, local potentials, $dH_3=0$, and no localized or magnetic sources, Romans mass, loops, or $\alpha'$ corrections. Its adopted action and current Step 1 record are ready; the source-reported prepotential is still used only in the stated tree-level, large-volume regime.

[A1] The closed NS–NS two-form sector and its combination $t^a=b^a+iv^a$ are supplied physical coordinate data, not additional conclusions of [F1]. The explicit coefficient and sign of the classical cubic are adopted as the source-reported effective-field-theory interface at large volume. The local calculations below verify its homogeneous lift and frame ambiguity; they do not derive the ten-dimensional reduction. The inspected Aspinwall lecture displays a different normalization, so its equation (37) is not used for this coefficient.

## Proof

**Proof technique:** homogeneous-coordinate verification and symplectic ambiguity check.

**Given:** The intersection form and Kähler coordinates, a local prepotential frame, and the source-reported large-volume Type IIA cubic interface stated above.

1.1 The quotient $t^a=X^a/X^0$ is invariant under simultaneous scaling $X^I\mapsto\lambda X^I$, while $(X^0)^2$ scales by $\lambda^2$. Thus $\mathcal F^{(0)}=(X^0)^2[-\frac16\kappa_{abc}t^at^bt^c]$ is homogeneous of degree two. In the gauge $X^0=1$, it reduces to the source-reported affine cubic $-\frac16\kappa_{abc}t^at^bt^c$ of [A1]. The physical identification of this term with the leading Type IIA reduction remains conditional on the $N=2$ framework [F4] and action [F5]. [F1, F2, F3, F4, F5, A1, given, algebra]

2.1 Add a real quadratic polynomial $Q(X)=\frac12A_{IJ}X^IX^J$ with $A_{IJ}=A_{JI}\in\mathbb R$. Then $\partial_IQ=A_{IJ}X^J$, and symmetry gives $\overline X^I\partial_IQ-X^I\overline{\partial_IQ}=\overline X^IA_{IJ}X^J-X^IA_{IJ}\overline X^J=0$. Hence this addition leaves the symplectic norm and its scalar metric unchanged. The period vector transforms by $\binom{X}{F}\mapsto\begin{pmatrix}I&0\\A&I\end{pmatrix}\binom{X}{F}$; symmetry of $A$ makes this matrix symplectic. In a regular prepotential frame, put $\mathcal F_{IJ}=\partial_I\partial_J\mathcal F$ and define $\mathcal N_{IJ}=\overline{\mathcal F}_{IJ}+2i\frac{(\operatorname{Im}\mathcal F)_{IK}X^K(\operatorname{Im}\mathcal F)_{JL}X^L}{X^M(\operatorname{Im}\mathcal F)_{MN}X^N}$ on the regular patch where the denominator is nonzero. Adding the real $Q$ leaves every imaginary second derivative unchanged and adds $A_{IJ}$ to the first term, so the vector period matrix transforms exactly as $\mathcal N_{IJ}\mapsto\mathcal N_{IJ}+A_{IJ}$: its imaginary kinetic matrix is unchanged, while its real theta matrix shifts by $A$. Equivalently the Abelian vector action changes by exactly $cA_{IJ}F^I\wedge F^J$ for constant adopted normalization $c$ if its theta term is written $c\operatorname{Re}\mathcal N_{IJ}F^I\wedge F^J$. On a local patch with $F^I=dA^I$ this is the total derivative $d(cA_{IJ}A^I\wedge F^J)$, so it leaves the local field equations unchanged. It need not leave globally normalized theta data unchanged. This is the stated local symplectic-polynomial ambiguity, not literal equality of all vector couplings. It does not derive the adopted cubic coefficient from ten dimensions. [F2, A1, step 1.1, algebra] ∎
