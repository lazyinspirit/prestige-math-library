---
id: pthm-cmp-type-iib-o3o7-kahler-and-gauge-couplings
kind: physics-theorem
title: "Large-volume Type IIB O3/O7 Kähler potential and vector couplings"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp-n2-special-kahler-period-data
  - def-cmp-type-iib-o3-o7-orientifold-data
  - def-cmp-type-iib-o3o7-chiral-coordinates
  - lem-cmp-o3o7-kahler-coordinate-metric
  - post-cmp-type-iib-o3o7-closed-sector-kinetic-action
  - post-four-dimensional-n1-matter-coupled-supergravity
  - post-type-iib-fiveform-self-duality-constraint
  - post-type-iib-two-derivative-supergravity-pseudoaction
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-cmp-type-iib-o3o7-chiral-coordinates: formulation-prerequisite
  lem-cmp-o3o7-kahler-coordinate-metric: mathematical-premise
  post-cmp-type-iib-o3o7-closed-sector-kinetic-action: physical-assumption
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional deduction from the explicitly adopted source-reported four-dimensional tree-level, two-derivative, large-radius, unwarped Type IIB O3/O7 closed-sector kinetic action with zero background three-form flux and frozen open-string fields. It does not establish the ten-to-four-dimensional reduction, tadpole cancellation, a stabilized vacuum, or corrected couplings."
empirical_premises: []
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§2, equations (2.9)–(2.10), PDF pp. 5–6; §3.2, equations (3.12)–(3.14), (3.21), (3.23), (3.25)–(3.27), and (3.31)–(3.33), PDF pp. 11–16; Appendix C.1, equations (C.1)–(C.8), PDF pp. 33–35. Equations (3.31) and (3.33) give the same sign as coefficient matching between (3.21) and (3.23)."
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§3.1, PDF pp. 24–26; local symplectic period vector, prepotential, and special-Kähler norm conventions."
    - title: "Mariana Graña, Athanasia Ksagoni, Praxitelis Ntokos, and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.1, printed pp. 62–64; independent O3 Kähler-potential and four-cycle-modulus check; it does not state the general O7 vector-coupling formula."
---

## Statement

Assume the source-reported four-dimensional closed-sector kinetic action stated in `post-cmp-type-iib-o3o7-closed-sector-kinetic-action`, the local O3/O7 chiral-coordinate patch defined in `def-cmp-type-iib-o3o7-chiral-coordinates`, and the local period/prepotential data of `def-cmp-n2-special-kahler-period-data`. Let $\sigma^*$ act on $H^3_{\mathrm{dR}}(X;\mathbb R)$ and write $H^3_\pm(X;\mathbb R)=\ker(\sigma^*\mp\operatorname{id})$. A parity-adapted real symplectic frame means symplectic bases of smooth real $g$-harmonic three-form representatives of $H^3_+$ and $H^3_-$, respectively denoted $(\alpha_\kappa,\beta^\lambda)$ and $(\alpha_{\hat k},\beta^{\hat l})$, with $\int_X\alpha_\kappa\wedge\beta^\lambda=\delta_\kappa^\lambda$, $\int_X\alpha_{\hat k}\wedge\beta^{\hat l}=\delta_{\hat k}^{\hat l}$, and all pairings between the two eigenspaces zero; Greek indices label the even block and hatted indices the odd block. Use the Grimm–Louis period convention $X^I=\int_X\Omega\wedge\beta^I$, $F_I=\int_X\Omega\wedge\alpha_I$, and $\Omega=X^I\alpha_I-F_I\beta^I$. Work on a local homogeneous period-coordinate patch with a degree-two prepotential $\mathcal F(X)$ in this frame, where $F_I=\partial_I\mathcal F$, the orientifold locus is the slice on which the even periods $X^\kappa$ vanish, and the surviving odd periods vary as local coordinates; write $z^k$ for local complex coordinates on that slice. Let $\mathrm{vol}_g$ be the volume form of the chosen Kähler metric and complex orientation on $X$, and define its internal Hodge star on three-forms by $\eta\wedge *_6\theta=\langle\eta,\theta\rangle_g\,\mathrm{vol}_g$ for smooth three-forms $\eta,\theta$, where $\langle\eta,\theta\rangle_g=(1/3!)\eta_{mnp}\theta^{mnp}$ with indices raised by $g$. Use natural units, $\alpha'=1$, $M_P=1$, $y=\operatorname{Im}\tau=e^{-\phi}>0$, $\mathcal K=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma=6\mathcal V>0$, and the source intersection normalization. Then the closed-string chiral scalar metric is generated locally by
$$K=-\log\!\left[i\int_X\Omega\wedge\bar\Omega\right]-\log[-i(\tau-\bar\tau)]-2\log\mathcal V,$$
where, with $\tau$ fixed, $v^\alpha$ is locally determined by $T_\alpha$ and $G^a$ on the stated chiral-coordinate patch. In the even vector sector, matching the gauge terms in the adopted four-dimensional actions gives
$$f_{\kappa\lambda}(z^k)=-\frac{i}{2}\,\mathcal F_{\kappa\lambda}(z^k).$$
This is a conditional model deduction from the adopted four-dimensional kinetic action. It does not prove that this action follows from the ten-dimensional pseudoaction. Grimm–Louis equations (3.31) and (3.33) give this same sign; it follows by matching their displayed actions (3.21) and (3.23).

## Statement references

[[def-cmp-cy3-kahler-moduli-and-divisor-volumes]]

[[def-cmp-n2-special-kahler-period-data]]

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-cmp-type-iib-o3o7-chiral-coordinates]]

[[post-cmp-type-iib-o3o7-closed-sector-kinetic-action]]

[[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Grimm and Louis, §3.2 and Appendix C.1](https://arxiv.org/pdf/hep-th/0403067v3)

[Aspinwall, §3.1](https://arxiv.org/pdf/hep-th/0001001v1)

[Graña, Ksagoni, Ntokos, and Triendl, §6.1](https://djvu.online/file/qufswWArYbwIP)

## Facts & Assumptions

**Given:** A smooth compact Calabi–Yau threefold with a holomorphic O3/O7 involution; the selected even/odd harmonic bases and intersection tensor; local coordinates $(\tau,G^a,T_\alpha,z^k)$; a parity-adapted symplectic frame with local homogeneous prepotential $\mathcal F$; $\mathcal V>0$, $y>0$, and nonzero period-matrix denominator; and the adopted source-reported four-dimensional actions in $\alpha'=M_P=1$ units.

[F1] [[def-cmp-type-iib-o3-o7-orientifold-data]] supplies the smooth compact threefold, Kähler form, chosen holomorphic three-form and O3/O7 involution. Its broad Calabi–Yau convention alone does not imply exact $SU(3)$ holonomy.

[F2] [[def-cmp-type-iib-o3-o7-orientifold-data]] uses a holomorphic isometric involution with $\sigma^*J=J$ and $\sigma^*\Omega=-\Omega$; the even/odd cohomology split and vanishing of intersections with an odd number of odd classes are geometric consequences, not charge-cancellation conditions.

[F3] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] sets $\mathcal V=\kappa_{\alpha\beta\gamma}v^\alpha v^\beta v^\gamma/6$ and $[J]=v^\alpha[\omega_\alpha]$ in dimensionless string units, using chosen smooth closed representatives for the intersection integrals. The volume and its coordinate derivatives depend on the cohomology classes; no pointwise equality of form representatives is required in the metric calculation below.

[F4] [[def-cmp-n2-special-kahler-period-data]] defines the local marked period vector and, only in a frame where it exists, a degree-two homogeneous prepotential with $F_I=\partial_I\mathcal F$. With the period convention in the Statement, expansion of $\Omega=X^I\alpha_I-F_I\beta^I$ gives $\int_X\Omega\wedge\bar\Omega=\bar X^IF_I-X^I\bar F_I$. Therefore $i\int_X\Omega\wedge\bar\Omega=i(\bar X^IF_I-X^I\bar F_I)$, agreeing with the positive period norm of that supplier. The negative integral sign printed in Grimm–Louis equation (2.12) is inconsistent with this expansion and the declared complex orientation; it is corrected here, not inferred from that printed equality. No global prepotential is asserted.

[F5] [[def-cmp-type-iib-o3o7-chiral-coordinates]] defines $\tau=l+ie^{-\phi}$, $G^a=c^a-\tau b^a$, $\zeta_\alpha=-\frac{i}{2(\tau-\bar\tau)}\kappa_{\alpha bc}G^b(G^c-\bar G^c)$, and $T_\alpha=\frac{3i}{2}\rho_\alpha+\frac34\kappa_{\alpha\beta\gamma}v^\beta v^\gamma-\frac32\zeta_\alpha$ on a local patch. Its current Step 1 input record is stale/escalated, so this use is conditional.

[F6] [[lem-cmp-o3o7-kahler-coordinate-metric]] proves the local Hessian and real-coordinate Hermitian quadratic-form identity for $K=K_0-2\log P$ under the stated invertibility hypotheses.

[F7] [[post-cmp-type-iib-o3o7-closed-sector-kinetic-action]] adopts the source-reported four-dimensional scalar and vector kinetic coefficients, including $+\frac14\operatorname{Im}\mathcal M\,F\wedge *_4F+\frac14\operatorname{Re}\mathcal M\,F\wedge F$. Its reduction from ten dimensions is not proved in that item.

[F8] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the local two-derivative four-dimensional $N=1$ Einstein-frame framework and a holomorphic gauge-kinetic matrix. Its present carrier exists; its recorded Step 1 escalation cites an earlier missing conventions item and is stale. In the explicit source form convention, Grimm–Louis equation (3.23) puts the gauge terms inside an overall minus, so their contributions to the action are $-\frac12\operatorname{Re}f\,F\wedge *_4F-\frac12\operatorname{Im}f\,F\wedge F$.

[A1] Adopt the source-reported harmonic reduction, five-form self-duality prescription and Weyl rescaling encoded in [F7]. This is an effective-action input, not a derivation from [[post-type-iib-two-derivative-supergravity-pseudoaction]] and [[post-type-iib-fiveform-self-duality-constraint]]. Both planned ten-dimensional dependencies remain recorded below; the local ten-to-four-dimensional reduction proof is unresolved.

[A2] Work on the local parity-adapted homogeneous prepotential patch defined in the Statement, with $X^P(\operatorname{Im}\mathcal F)_{PQ}X^Q\ne0$. The surviving odd period coordinates vary on an open subset of the orientifold slice, so identities holding there may be differentiated in those coordinates. No global prepotential or symplectic frame is assumed. The complex-oriented norm $i\int_X\Omega\wedge\bar\Omega$ is positive and equals $i(\bar X^IF_I-X^I\bar F_I)$ by [F4]. The adopted action uses this corrected real logarithm.

## Proof

**Proof technique:** Hessian calculation, real-coordinate substitution, and period-matrix block reduction.

**Given:** The geometric, coordinate, local-period, unit and effective-action data in [F1]–[F8] and [A1]–[A2].

1.1 In a holomorphic chart, write $\Omega=f\,dz_1\wedge dz_2\wedge dz_3$. Direct reordering gives $i\Omega\wedge\bar\Omega=8|f|^2\,dx_1\wedge dy_1\wedge dx_2\wedge dy_2\wedge dx_3\wedge dy_3$, a positive density since $f\ne0$. Thus its integral on the compact nonempty threefold is positive. Put $P=\mathcal K=6\mathcal V$ and $K_0=-\log[i\int_X\Omega\wedge\bar\Omega]-\log[-i(\tau-\bar\tau)]$. The proposed potential is $K_0-2\log P$ up to the additive constant $2\log 6$, because $-2\log\mathcal V=-2\log P+2\log6$. An additive constant has zero mixed Hessian, so it does not change the scalar metric. [F1, F3, given, algebra]

1.2 In the even vector sector, equating the coefficients of $F^\kappa\wedge *_4F^\lambda$ and $F^\kappa\wedge F^\lambda$ in [F7] and [F8] gives $\operatorname{Re}f_{\kappa\lambda}=-\frac12\operatorname{Im}\mathcal M_{\kappa\lambda}$ and $\operatorname{Im}f_{\kappa\lambda}=-\frac12\operatorname{Re}\mathcal M_{\kappa\lambda}$, because the $N=1$ vector terms in equation (3.23) lie inside an overall minus. Thus $f_{\kappa\lambda}=-\frac{i}{2}\overline{\mathcal M}_{\kappa\lambda}$. This follows from the displayed coefficients of the two adopted actions. [F7, F8, given, algebra]

2.1 Apply [[lem-cmp-o3o7-kahler-coordinate-metric]] with $N=(\tau,G^a,z^k)$, the $P$ and $T_\alpha$ from [F3] and [F5], and $K_0$ from step 1.1. The local Jacobian and invertible cubic Hessian are the patch hypotheses; the lemma therefore gives the scalar line element in real variables, including the $G_{\alpha\beta}dv^\alpha dv^\beta$, $\frac14(d\log P)^2$, and axion-connection terms. This use is conditional on the adopted four-dimensional action in [F7], not a derivation from its ten-dimensional suppliers [A1]. [F3, F5, F6, F7, A1, given, step 1.1]

3.1 Let $y=\operatorname{Im}\tau=e^{-\phi}$ and $b^a=-(G^a-\bar G^a)/(\tau-\bar\tau)$. Direct substitution into [F5] gives $\zeta_\alpha+\bar\zeta_\alpha=\kappa_{\alpha ab}y b^a b^b$. Differentiating this expression in the holomorphic coordinates $(\tau,G^a)$ and their conjugates gives $$\partial_A\partial_{\bar B}(\zeta_\alpha+\bar\zeta_\alpha)\,dN^A d\bar N^{\bar B}=\frac{\kappa_{\alpha ab}}{2y}(b^a d\tau+dG^a)(b^b d\bar\tau+d\bar G^b).$$ Here $b^a d\tau+dG^a=dc^a-\tau db^a$. The $\tau$ part of $K_0$ has Hessian $d\tau d\bar\tau/(4y^2)=\frac14(d\phi^2+e^{2\phi}dl^2)$. Since $G_{ab}=-3\kappa_{\alpha ab}v^\alpha/(2P)$, multiplication of the displayed $\zeta$ Hessian by $-3v^\alpha/P$ gives $e^{\phi}G_{ab}(dc^a-l db^a)(dc^b-l db^b)+e^{-\phi}G_{ab}db^a db^b$. The complex-structure part of $K_0$ gives $G_{k\bar l}dz^k d\bar z^{\bar l}$ by its definition in [F7]. Thus the remaining scalar blocks match the real scalar terms in [F7]. [F5, F6, F7, step 2.1, algebra]

4.1 Applying the same chain rule to $\zeta_\alpha$ itself yields $$-i\big(\partial_A\bar\zeta_\alpha\,dN^A-\partial_{\bar A}\zeta_\alpha\,d\bar N^{\bar A}\big)=-\frac12\kappa_{\alpha ab}(c^a db^b-b^a dc^b).$$ Hence the lemma's $\Xi_\alpha$ is exactly the covariant differential in [F7]. Combining this identity with the scalar terms already computed in steps 2.1 and 3.1 gives the full scalar metric in [F7] term by term; this establishes a conditional matching of kinetic terms, not a derivation of [F7] from ten dimensions. [F5, F6, F7, step 2.1, step 3.1, algebra]

5.1 The real symplectic marking in the Statement gives $H^3_{\mathrm{dR}}(X;\mathbb R)=H^3_+(X;\mathbb R)\oplus H^3_-(X;\mathbb R)$. Since $\sigma$ is an orientation-preserving isometry, its pullback commutes with the internal Hodge star $*_6$; hence for $\alpha\in H^3_+$ and $\beta\in H^3_-$, $\int_X\alpha\wedge *_6\beta=\int_X\sigma^*\alpha\wedge *_6\sigma^*\beta=-\int_X\alpha\wedge *_6\beta=0$. The source relation (2.9) therefore makes the $N=2$ period-matrix blocks between the two eigenspaces vanish, $\mathcal M_{\kappa\hat l}=0$. The oddness of $\Omega$ gives $X^\kappa=0$ and $F_\kappa=\int_X\Omega\wedge\alpha_\kappa=0$ identically on the local orientifold slice. In the chosen homogeneous-prepotential chart, $F_\kappa=\partial_\kappa\mathcal F$ there; since it vanishes on an open set of the surviving odd period coordinates by [A2], differentiation along each such coordinate gives $\mathcal F_{\kappa\hat l}=\partial_{\hat l}\partial_\kappa\mathcal F=0$. In the matrix formula of [F7], the rank-one correction to $\mathcal M_{\kappa\lambda}$ vanishes: each term with an even index is multiplied by an even period $X^\mu=0$, and each term with an odd index has $\operatorname{Im}\mathcal F_{\kappa\hat l}=0$. The denominator is nonzero by [A2], so $\mathcal M_{\kappa\lambda}=\overline{\mathcal F}_{\kappa\lambda}$. Step 1.2 now gives $f_{\kappa\lambda}=-\frac{i}{2}\mathcal F_{\kappa\lambda}$, holomorphic as a second derivative of the local holomorphic prepotential. This is the block-diagonal period-matrix argument in Grimm–Louis §3.2, equations (3.12)–(3.14) and (3.31)–(3.33); those displayed equations use the same negative sign as the action match. [F2, F4, F7, A2, step 1.2, algebra] ∎

## Remarks

The negative gauge-coupling sign follows both from the explicit gauge-action coefficients and from Grimm–Louis equations (3.31) and (3.33). The ten-dimensional reduction remains an adopted source-reported input. The source's independent O3 compactification treatment checks the Kähler-potential/four-cycle structure but does not cover the general O7 vector-coupling formula.
