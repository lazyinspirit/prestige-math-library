---
id: lem-qftx-coupled-penrose-injective-edge
kind: lemma
title: Injective fibre-harmonic edge for coupled Penrose cohomology
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 4
axiom_base: "ZF + full AC through the conditional analytic Dolbeault comparison and harmonic theory."
deps:
  - def-axiom-of-choice
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-coupled-penrose-fibre-dolbeault
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-coupled-penrose-fibre-dolbeault: mathematical-premise
  thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–54: fibre-harmonic representatives, unique decomposition, and injective cohomology edge."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 488–494: relative Dolbeault/Penrose transform route; cited only as independent context."
verification:
  precheck: pass
---

## Statement

Assume full AC and the following analytic comparison: for $r\in\{0,1,2,3\}$, every finite-rank holomorphic vector bundle $G$ on $X=\mathbb P^r(\mathbb C)$ has a canonical isomorphism $H^q(X,\mathcal O(G))\cong H^q_{\bar\partial}(X,G)$ for every $q\ge0$, and for $G=\mathcal O_X$ one has $H^0(X,\mathcal O_X)=\mathbb C$ and $H^q(X,\mathcal O_X)=0$ for $q>0$. Let $E\to S^4$ be a smooth finite-rank Hermitian bundle with smooth unitary connection $A$. On the incidence fibration $\pi:Z=\mathbb CP^3\to S^4$, let $F$ be a finite-rank holomorphic bundle and fix an isometric smooth identification $F\cong\pi^*E$ under which the component of its Dolbeault operator on $V^{0,1}=\ker(d\pi)\cap T^{0,1}Z$ is the ordinary coefficientwise vertical Dolbeault operator and its component on the Fubini–Study orthogonal horizontal subbundle $H^{0,1}$ is $\nabla_A$ evaluated on the projected complex alpha-plane. Give $F$ the pulled-back Hermitian metric from $E$, give $\mathcal O_Z(-2)$ its induced tensor-square Fubini–Study metric, and use the product metric on $F\otimes\mathcal O_Z(-2)$ and the induced Fubini–Study metric and volume on each fibre $L_x$.

Write $H^1(Z,F\otimes\mathcal O_Z(-2))$ for analytic sheaf cohomology of the holomorphic section sheaf, identified by the stated comparison with the smooth Dolbeault quotient

$$H^{0,1}_{\bar\partial}(Z,F\otimes\mathcal O_Z(-2)):=\frac{\ker(\bar\partial_F:\Omega^{0,1}(Z,F\otimes\mathcal O_Z(-2))\to\Omega^{0,2}(Z,F\otimes\mathcal O_Z(-2)))}{\operatorname{im}(\bar\partial_F:\Omega^{0,0}(Z,F\otimes\mathcal O_Z(-2))\to\Omega^{0,1}(Z,F\otimes\mathcal O_Z(-2)))}.$$

For $x\in S^4$, let $Q_x\subset\mathbb C^4$ be the quaternionic two-plane corresponding to $x$. Its quaternionic Hermitian structure determines the alternating form $\delta_x\in\Lambda^2Q_x^*$ by $\delta_x(v,jv)=1$ for every unit vector $v\in Q_x$. Under $K_{L_x}=\Lambda^{1,0}T^*L_x\cong\det(Q_x)^*\otimes\mathcal O_{L_x}(-2)$, let $\iota_x:\mathcal O_{L_x}(-2)\to K_{L_x}$ be multiplication by $\delta_x$. The fibre Dolbeault groups include $H^{0,0}_{\bar\partial}(L_x,\mathcal O_{L_x}(-1))=H^{0,1}_{\bar\partial}(L_x,\mathcal O_{L_x}(-1))=H^{0,0}_{\bar\partial}(L_x,\mathcal O_{L_x}(-2))=0$ and $H^{0,1}_{\bar\partial}(L_x,\mathcal O_{L_x}(-2))\cong\mathbb C$. Let $\mathcal H_x^{0,1}\subset\Omega^{0,1}(L_x,\mathcal O_{L_x}(-2))$ be the kernel of the fibre Dolbeault Laplacian $\bar\partial\bar\partial^*+\bar\partial^*\bar\partial$ for the induced metrics. Compact Hodge decomposition identifies $\mathcal H_x^{0,1}$ with $H^{0,1}_{\bar\partial}(L_x,\mathcal O_{L_x}(-2))$, so this harmonic space is one-dimensional. Let $\sigma_x\in\mathcal H_x^{0,1}$ be the unique form satisfying $\int_{L_x}\iota_x(\sigma_x)=1$. Let $\sigma$ be the resulting smooth vertical $(0,1)$-form on $Z$, extended to vanish on $H^{0,1}$. For a global closed representative $\alpha\in\Omega^{0,1}(Z,F\otimes\mathcal O_Z(-2))$, let $\Pi_x$ be the orthogonal projection of $\Omega^{0,1}(L_x,E_x\otimes\mathcal O_{L_x}(-2))$ onto its fibrewise Dolbeault-harmonic subspace, and define $\mathcal P_A[\alpha](x)=s(x)$ by $\Pi_x(\alpha|_{L_x})=s(x)\otimes\sigma_x$. This gives a linear map

$$\mathcal P_A:H^1(Z,F\otimes\mathcal O_Z(-2))\longrightarrow\Gamma(S^4,E).$$

Every such $\alpha$ has a unique decomposition $\alpha=\alpha_H+s\sigma+\bar\partial_F\gamma$, where $s=\mathcal P_A[\alpha]$, $\alpha_H\in\Omega^{0,1}(Z,F\otimes\mathcal O_Z(-2))$ annihilates $V^{0,1}$, and $\gamma\in\Omega^{0,0}(Z,F\otimes\mathcal O_Z(-2))$ is smooth on all of $Z$. The map is well defined and injective. The comparison is supplied by the local analytic Dolbeault-resolution theorem; no algebraic-to-analytic comparison is assumed.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[[lem-qftx-coupled-penrose-fibre-dolbeault]]

[[lem-qftx-coupled-penrose-positive-orientation-asd]]

[[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[Rawnsley, §§2–3, pp. 46–54](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 488–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** Full AC, the holomorphic pullback bundle with the stated connection Dolbeault operator, the global incidence fibration and its metric splitting.

[A1] For every finite-rank holomorphic bundle $G$ on $\mathbb P^r(\mathbb C)$, $0\le r\le3$, analytic sheaf cohomology is canonically the global smooth Dolbeault quotient. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[F1] The incidence fixes the ordinary complex structure on each projective-line fibre, the intrinsic alpha-planes, the local constant-$t$ lifts, and the global Fubini–Study orthogonal splitting. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] On $\mathbb CP^1$, $H^{0,0}(\mathcal O(-2))=0$, $H^{0,1}(\mathcal O(-2))\cong\mathbb C$, and both Dolbeault groups of $\mathcal O(-1)$ vanish. [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F3] On a compact Hermitian complex manifold with a finite-rank Hermitian holomorphic bundle, the Dolbeault Laplacian has harmonic projection $\Pi$ and Green inverse $G$, and a closed smooth form $f$ satisfies $f=\Pi f+\bar\partial\bar\partial^*Gf$. No sheaf comparison is included in this assertion. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[F4] For these compact positive-symbol Laplace-type operators, $G:H^m\to H^{m+2}$ is bounded for every integer $m\ge0$; its smooth restriction is continuous in every smooth seminorm. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[A2] Full AC is assumed as required by the analytic and harmonic suppliers. [[def-axiom-of-choice]]

## Proof
**Given:** [A1]–[A2] and [F1]–[F4].

1.1 Write $V^{0,1}$ for the vertical tangent and use [F1]'s global orthogonal complement. Filter the smooth Dolbeault complex of $F(-2)$ by the number of horizontal covectors. Vertical restriction is the ordinary fibre Dolbeault operator. The differential has components of horizontal/vertical bidegrees $(0,1)$, $(1,0)$ and potentially $(2,-1)$; the last is the curvature of the splitting, so a bicomplex with only two differentials is not presumed. On a form annihilating vertical tangent, the mixed component is the intrinsic vertical Bott/Dolbeault operator on the horizontal coefficient bundle: it is obtained by evaluating $\bar\partial$ on one vertical and one horizontal vector. This description is independent of the lift of the horizontal vector. In the constant-$t$ local frame the vectors $\partial_{\bar t},H_1,H_2$ commute; hence that coefficient operator is ordinary $\partial_{\bar t}$. [F1, given, construct, algebra]

1.2 Let $Q_x\subset\mathbb C^4$ be the quaternionic two-plane over $x$. Its Hermitian quaternionic structure gives a canonical complex alternating volume form $\delta_x$: every frame $(v,jv)$ of unit norm has determinant one for this form, and the changes are in $SU(2)$. On $L_x=\mathbb P(Q_x)$, the identity $K_{L_x}=\det(Q_x)^*\otimes\mathcal O(-2)|_{L_x}$ therefore gives an intrinsic isomorphism $\iota_x:\mathcal O(-2)|_{L_x}\to K_{L_x}$. In the finite incidence chart put $a=1+r^2$, $q=1+|t|^2$, $v_1=(1,0,z_1,z_2)$, $v_2=(0,1,-\bar z_2,\bar z_1)$ and $e=(v_1+t v_2)^{\otimes2}$. The two $v_i$ are orthogonal with squared norm $a$, so $\delta_x(v_1,v_2)=a$ and $\iota_x(e)=a\,dt$. The tautological metric is $\|e\|^2=a^2q^2$. The harmonic vertical form is $$\sigma_x=\frac{i}{2\pi}\frac{e\,d\bar t}{a q^2}.$$ Indeed its weighted coefficient $\|e\|^2/(a q^2)=a$ is holomorphic in $t$, so the local formal-adjoint equation is zero; [F2]–[F3] make the harmonic line one-dimensional. Moreover $\int_{L_x}\iota_x(\sigma_x)=\frac{i}{2\pi}\int_{\mathbb C}dt\wedge d\bar t/q^2=1$. This fixes both scale and phase. The intrinsic metric/volume construction proves agreement on projective and base-chart overlaps, including infinity, and smooth dependence on $x$. Extend this vertical form by zero on the global orthogonal horizontal complement to obtain $\sigma$. This extension need not be Dolbeault closed. [F1, F2, F3, given, construct, algebra]

2.1 Smoothness of the needed primitive does not require a theorem about varying complex structures. Choose smooth unit quaternionic frames of $Q_x$ on a base neighborhood and a smooth unitary frame of $E$. These identify the vertical problem exactly with the fixed $SU(2)$-invariant Hermitian $\mathcal O(-2)$ problem on $\mathbb CP^1$, componentwise in $E_x$. Set $B=\bar\partial^*G$ on vertical degree one. By [F3], $\bar\partial B=I-\Pi$, and by [F2] its degree-zero kernel is zero. The estimates [F4] and the first-order nature of $\bar\partial^*$ give $B:H^m\to H^{m+1}$ bounded for each $m$. For jointly smooth $f(x,t)$, base difference quotients converge in every fibre $H^m$ uniformly on compact base sets, by the Taylor formula and compactness of the fibre. Applying the fixed bounded $B$ shows $\partial_x^\beta(Bf)=B(\partial_x^\beta f)$ at every order in every $H^{m+1}$. Sobolev embedding on the fixed two-dimensional compact fibre, with arbitrarily large $m$, gives joint smoothness in $(x,t)$. For the horizontal coefficient problem, choose also a smooth unit quaternionic frame of $Q_x^\perp$. Together the two quaternionic frames give a smooth $Sp(2)$ transformation from a fixed pair of planes to $(Q_x,Q_x^\perp)$. Its complex-linear action on $\mathbb CP^3$ is holomorphic and preserves the Fubini–Study and tautological metrics. It therefore transports the horizontal quotient, its vertical Bott operator and its induced metric to the fixed $\mathcal O(-1)^{\oplus2}$ problem identified below. That inverse is likewise one fixed bounded operator componentwise, so the same derivative argument applies. Thus no moving-cokernel inverse or unproved parametric Green assertion is used. [A2, F2, F3, F4, step 1.2, algebra]

3.1 By [A1], a sheaf class has a global smooth closed representative $\alpha$. Its vertical restriction has harmonic part $s(x)\sigma_x$, where $s(x)=\int_{L_x}\iota_x(\alpha_V)$ componentwise in $E_x$. This is smooth by integration over compact fibres. Solve $\gamma_x=B(\alpha_V-s\sigma_x)$; then $\bar\partial_V\gamma_x=\alpha_V-s\sigma_x$. Step 2.1 makes $\gamma$ smooth. A change of unit quaternionic frame acts by an $SU(2)$ fibre isometry and a change of unitary $E$ frame acts by a matrix constant on each fibre; both preserve the equation. Uniqueness from $H^{0,0}(\mathcal O(-2))=0$ makes these local solutions agree. Hence $\gamma$ is global and $\alpha_H:=\alpha-s\sigma-\bar\partial_F\gamma$ annihilates vertical tangent, proving the asserted decomposition. The harmonic/exact orthogonality and the same zero kernel prove its uniqueness. [A1, F1, F2, F3, step 1.2, step 2.1, construct]

4.1 Replacing $\alpha$ by $\alpha+\bar\partial_F\beta$ changes its vertical restriction by $\bar\partial_V\beta$; its harmonic projection and integral against the fibre trace are zero. Thus $s$ depends only on the cohomology class, and the construction is linear. It is a section of $E$, not of an unspecified conformal-weight line, because the metric quaternionic volume in step 1.2 supplies the precise canonical identification of the harmonic line with $\mathbb C$. [F2, F3, step 1.2, step 3.1, algebra]

5.1 In the second projective chart $u=1/t$, the constant-coordinate horizontal vectors satisfy $\widetilde H_i=uH_i$. The intrinsic horizontal cotangent quotient therefore restricts to $\mathcal O(1)^{\oplus2}$; after the $\mathcal O(-2)$ twist its coefficient bundle is $\mathcal O(-1)^{\oplus2}\otimes E_x$. This transition determines the vertical Bott holomorphic structure from step 1.1, rather than assuming a normal-bundle or generic Penrose theorem. If $s=0$, closedness gives $\bar\partial_F\alpha_H=0$, since $\bar\partial_F^2=0$. Its mixed component says that $\alpha_H|_{L_x}$ is holomorphic for precisely this coefficient bundle. By [F2] it is zero on each fibre. Thus $\alpha=\bar\partial_F\gamma$ globally, proving injectivity, including zero rank. [F1, F2, step 1.1, step 3.1, step 4.1, algebra] ∎
