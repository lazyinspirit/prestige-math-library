---
id: post-qftx-n2-vector-hypermultiplet-model
kind: postulate
title: Four-dimensional N=2 SU(2) vector and hypermultiplet model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions
axiom_base: "ZF + AC_omega inherited through the selected SU(2) bundle, Lie algebra, and associated-representation suppliers; this physical postulate adds no choice principle."
deps:
  - def-qftx-physical-superspace-normalization
  - def-qftx-super-poincare-algebra-4d
  - def-qftx-superspace-grassmann-algebra
  - def-qftx-n1-chiral-superfield
  - def-qftx-n1-vector-superfield
  - lem-qftx-n2-hypermultiplet-gauge-invariant-couplings
  - post-qftx-n1-gauge-matter-model
  - post-qftx-nonabelian-yang-mills-model
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-super-poincare-algebra-4d: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-n1-vector-superfield: formulation-prerequisite
  lem-qftx-n2-hypermultiplet-gauge-invariant-couplings: formulation-prerequisite
  post-qftx-n1-gauge-matter-model: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: formulation-prerequisite
physical_scope: "A classical rigid four-dimensional N=2 SU(2) gauge model with one hypermultiplet in a chosen finite-dimensional unitary representation, on the selected Minkowski bundle sector. Its eight-supercharge invariance is adopted as part of the model; it asserts no quantum measure, continuum construction, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§§2.4, 2.9–2.10 and 3.5–3.7: N=2/N=4 field content, hypermultiplet coupling, prepotential action, and the low-energy electric/magnetic patch qualification."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§3.4, 4.5 and 4.9: canonical N=1 gauge-matter couplings, real vector superfield, Wess-Zumino gauge, and non-Abelian superspace normalization."
verification:
  precheck: n/a
---

## Postulate

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Adopt a classical rigid four-dimensional model on the oriented, time-oriented Minkowski spacetime $M=\mathbb R^{1,3}$ with coordinates $x^\mu$ of length, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, time orientation of increasing $x^0$, and metric $\eta=\operatorname{diag}(-1,1,1,1)$. Use $c=\hbar=1$. Fix the global gauge group $G=SU(2)$, not its quotient $SO(3)$. The adjoint action is $\operatorname{Ad}_uX=uXu^{-1}$; choose one smooth right principal bundle $\pi:P\to M$ in the single sector $\Sigma=\{[P]\}$, where $[P]$ means smooth bundle isomorphism over $\operatorname{id}_M$. In the anti-Hermitian basis $T_a=-i\sigma_a/2$, use $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, so $\kappa(T_a,T_b)=\delta_{ab}$, and a fixed dimensionless coupling $g=g_{\mathrm{YM}}>0$. Use $\sigma^0=I_2$, the Pauli matrices $\sigma^j$, $\bar\sigma^0=I_2$, $\bar\sigma^j=-\sigma^j$, and $\epsilon_{12}=1$; there is no theta term in this selected model.

Use the N=1 superspace algebra with even coordinates $x^\mu$ and odd coordinates $\theta^\alpha,\bar\theta^{\dot\alpha}$, the left derivatives and Berezin measures specified in the superspace definitions, and $D_\alpha=\partial^L_{\theta^\alpha}+i\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}\partial_\mu$, $\bar D_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}-i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu$. A chiral field obeys $\bar D_{\dot\alpha}\Phi=0$. In each representation $R$, the dimensionless real vector prepotential $V_R$ transforms by $e^{2gV_R}\mapsto e^{i\Lambda_R^\dagger}e^{2gV_R}e^{-i\Lambda_R}$ and a chiral matter field transforms by $Q_R\mapsto e^{i\Lambda_R}Q_R$, where $\Lambda_R$ is a chiral gauge-parameter superfield. Its represented matrix curvature is $\mathscr C_{\alpha,R}=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(e^{-2gV_R}D_\alpha e^{2gV_R})$. The connection-normalized vector multiplet consists on shell of the connection $A_\mu$, one complex adjoint scalar $\phi$, and two adjoint Weyl fermions; its N=1 decomposition is one vector superfield $V_{\mathrm{ad}}$ and one adjoint chiral superfield $\Phi$. The canonical scalar is $\phi_{\mathrm{can}}=\phi/g$. Here “on shell” means after eliminating algebraic auxiliary fields and imposing the field equations; the full vector superfield also contains the real auxiliary adjoint field $D$.

Choose one finite-dimensional complex Hermitian space $V_R$ and smooth unitary representation $\rho_R:SU(2)\to U(V_R)$. The hypermultiplet consists of chiral superfields $Q$ and $\widetilde Q$ whose scalar components are smooth sections of $P\times_{\rho_R}V_R$ and its dual; the dual action is $\rho_{R^*}(u)\ell=\ell\circ\rho_R(u^{-1})$. Each chiral N=1 hypermultiplet field has one complex scalar, one Weyl fermion, and one auxiliary field; hence the pair has two complex scalars and two Weyl fermions, which form one Dirac fermion on shell. Write $\mathfrak{su}(2)_{\mathbb C}=\mathfrak{su}(2)\otimes_{\mathbb R}\mathbb C$ and let $\kappa_{\mathbb C}$ be the complex-bilinear extension of $\kappa$. This form is nondegenerate and invariant under the complexified adjoint action, so for $R=\mathrm{ad}$ it identifies the dual with the adjoint. Use the Hermitian form $h_R(X,Y)=\kappa_{\mathbb C}(\overline X,Y)$ on the complexified adjoint, where conjugation is with respect to the real Lie algebra. The local invariant pairing is $\widetilde Q Q$, and $\widetilde Q\Phi Q$ means $\widetilde Q\,\rho_{R*}(\Phi)Q$. Under a chiral supergauge transformation $U_R=e^{i\Lambda_R}$, use $Q\mapsto U_RQ$, $\widetilde Q\mapsto\widetilde Q U_R^{-1}$, and $M_R:=\rho_{R*}(\Phi)\mapsto U_RM_RU_R^{-1}$; the associated mass and cubic bilinears are gauge invariant. The hypermultiplet is canonically normalized, while $\Phi$ is in the connection normalization above. “Holomorphic” means complex analytic in the adjoint coordinates $\Phi^a$ on $\mathfrak{su}(2)_{\mathbb C}$. The microscopic vector prepotential is the holomorphic, gauge-invariant quadratic function

$$\mathcal F_{\mathrm{UV}}(\Phi)=\frac{i}{2g^2}\,\kappa_{\mathbb C}(\Phi,\Phi),\qquad \operatorname{Im}(\mathcal F_{ab})=\frac{1}{g^2}\kappa_{ab}>0.$$

Here $\mathcal F_{ab}=\partial_a\partial_b\mathcal F_{\mathrm{UV}}$ in the basis $T_a$. With the normalized physical action brackets, its N=1 vector action is

$$\mathcal L_{\mathrm{vec}}=\frac{1}{4g^2}\left([\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)]_F+\mathrm{h.c.}\right)+\frac{1}{g^2}[\kappa_H(\bar\Phi,e^{2gV_{\mathrm{ad}}}\Phi)]_D,$$

where $\mathcal W_\alpha$ is the abstract connection-normalized Lie-algebra-valued chiral curvature, with $\rho_{R*}(\mathcal W_\alpha)=\mathscr C_{\alpha,R}/(2i)$; hence its gauge F-term coefficient also equals $\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)/(8g^2)$ in the defining representation, before adding its Hermitian conjugate, and $\kappa_H(\bar X,Y)=\kappa_{\mathbb C}(\bar X,Y)$. For a superspace expression $X$, $[X]_F=I_F(X)/2$ and $[X]_D=-I_D(X)/4$, using the raw generator order with the normalized physical brackets. Thus the vector kinetic term has exactly the connection-normalized Yang-Mills coefficient $-\kappa(F\wedge *_\eta F)/(2g^2)$.

The adopted renormalizable one-hypermultiplet action is

$$\mathcal L_{N=2}=\mathcal L_{\mathrm{vec}}+[Q^\dagger e^{2gV_R}Q+\widetilde Q^\dagger e^{2gV_{R^*}}\widetilde Q]_D+\left([\sqrt2\,\widetilde Q\Phi Q+m\widetilde Q Q]_F+\mathrm{h.c.}\right),$$

with complex mass parameter $m$ of dimension $\mathrm m^{-1}$. In canonical normalization $\Phi_{\mathrm{can}}=\Phi/g$, the cubic coefficient is $\sqrt2g$, the same gauge coupling that appears in the covariant derivative. The ultraviolet prepotential above is quadratic; a low-energy effective prepotential may instead be non-polynomial and valid only on a specified electric/magnetic patch. This postulate adopts no such low-energy solution or duality claim.

The model includes rigid four-dimensional $\mathcal N=2$ supersymmetry: “rigid” means its spinor parameters are constant in spacetime, and $\mathcal N=2$ means two independent left-Weyl supercharges, hence eight real components. Its invariance is an adopted model premise, not a deduction in this item. The N=1 superspace expression is a field/action packaging; the full hypermultiplet transformations close only after imposing the physical field equations, and the finite N=1 auxiliary fields are eliminated in this on-shell description. Fields are smooth in local trivializations and admissible variations are smooth and compactly supported; actions are taken over relatively compact regions or when the spacetime integral converges. No path-integral measure, regulator, quantum theory, or continuum existence claim is included. In mass-dimension notation $[x]=-1$, $[\theta]=-\frac12$, $[\Phi]=[Q]=[\widetilde Q]=1$, $[\mathcal W_\alpha]=3/2$, $[m]=1$, and $[g]=0$; equivalently scalar fields and mass parameters have units $\mathrm m^{-1}$.

## Postulate references

[D'Hoker and Phong, §§2.4, 2.9–2.10 and 3.5–3.7](https://arxiv.org/pdf/hep-th/9912271v1)

[Martin, §§3.4, 4.5 and 4.9](https://arxiv.org/pdf/hep-ph/9709356v7)

[[post-qftx-n1-gauge-matter-model]]

[[post-qftx-nonabelian-yang-mills-model]]

[[def-qftx-n1-vector-superfield]]

[[lem-qftx-n2-hypermultiplet-gauge-invariant-couplings]]

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-super-poincare-algebra-4d]]

[[def-qftx-physical-superspace-normalization]]

