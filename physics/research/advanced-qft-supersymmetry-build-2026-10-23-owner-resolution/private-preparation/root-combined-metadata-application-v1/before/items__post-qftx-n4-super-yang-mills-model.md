---
id: post-qftx-n4-super-yang-mills-model
kind: postulate
title: Four-dimensional N=4 SU(2) super-Yang-Mills model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
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
  - lem-qftx-n4-adjoint-cubic-gauge-invariance
  - post-qftx-n1-gauge-matter-model
  - post-qftx-n2-vector-hypermultiplet-model
  - post-qftx-nonabelian-yang-mills-model
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-super-poincare-algebra-4d: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-n1-vector-superfield: formulation-prerequisite
  lem-qftx-n4-adjoint-cubic-gauge-invariance: formulation-prerequisite
  post-qftx-n1-gauge-matter-model: physical-assumption
  post-qftx-n2-vector-hypermultiplet-model: physical-assumption
  post-qftx-nonabelian-yang-mills-model: physical-assumption
physical_scope: "A classical rigid four-dimensional N=4 SU(2) super-Yang-Mills model on the selected Minkowski bundle sector, with one vector and three adjoint chiral multiplets. Its sixteen-supercharge invariance is adopted as part of the model; it asserts no quantum measure, continuum construction, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§§2.4 and 2.9–2.10: the N=4 vector-multiplet content, its N=2 vector-plus-adjoint-hyper decomposition, and the renormalizable action convention."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§3.4, 4.5 and 4.9: canonical N=1 gauge-matter couplings, vector superfields, and non-Abelian superspace action normalization."
verification:
  precheck: n/a
---

## Postulate

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from [[def-qftx-physical-superspace-normalization]], with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use the oriented, time-oriented Minkowski spacetime $M=\mathbb{R}^{1,3}$ with coordinates $x^\mu$ of length, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, time orientation of increasing $x^0$, and metric $\eta=\operatorname{diag}(-1,1,1,1)$. Let $P\to M$ be one smooth right-principal $SU(2)$ bundle in the selected sector $\{[P]\}$; $[P]$ is its smooth bundle-isomorphism class and the global group is $SU(2)$, not $SO(3)$. The adjoint action is $\operatorname{Ad}_uX=uXu^{-1}$. Use $T_a=-i\sigma_a/2$, $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ with $\kappa(T_a,T_b)=\delta_{ab}$, $c=\hbar=1$, and dimensionless coupling $g=g_{\mathrm{YM}}>0$. The Pauli matrices are $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Use $\sigma^0=I_2$, $\sigma^j$ for these spatial matrices, $\bar\sigma^0=I_2$, $\bar\sigma^j=-\sigma^j$, and $\epsilon_{12}=1$, so $\sigma^\mu\bar\sigma^\nu+\sigma^\nu\bar\sigma^\mu=-2\eta^{\mu\nu}I_2$. In the N=1 decomposition, $V_{\mathrm{ad}}$ is the dimensionless real adjoint vector prepotential with $e^{2gV_{\mathrm{ad}}}\mapsto e^{i\Lambda^\dagger}e^{2gV_{\mathrm{ad}}}e^{-i\Lambda}$, where $\Lambda$ is a chiral gauge-parameter superfield, and $\Phi_1,\Phi_2,\Phi_3$ are adjoint chiral superfields in connection normalization. Each $\Phi_i$ obeys $\bar D_{\dot\alpha}\Phi_i=0$ and has one complex adjoint scalar, one adjoint Weyl fermion, and an algebraic auxiliary field. The canonical chiral fields are $\Phi_{i,\mathrm{can}}=\Phi_i/g$.


Write $\mathfrak{su}(2)_{\mathbb C}=\mathfrak{su}(2)\otimes_{\mathbb R}\mathbb C$, let $\kappa_{\mathbb C}$ be the complex-bilinear extension of $\kappa$, set $\kappa_H(\bar X,Y)=\kappa_{\mathbb C}(\bar X,Y)$, and write $[X,Y]$ for the complexified Lie bracket. The complexified form is nondegenerate and adjoint-invariant. For $U=e^{i\Lambda}$, each adjoint chiral field transforms by $\Phi_i\mapsto U\Phi_iU^{-1}$, so the adjoint cubic in the action is gauge invariant under this law. Use $D_\alpha=\partial^L_{\theta^\alpha}+i\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}\partial_\mu$ and $\bar D_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}-i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu$. Each $\Phi_i$ is an even chiral superfield satisfying $\bar D_{\dot\alpha}\Phi_i=0$, and the represented adjoint matrix curvature is $\mathscr C_{\alpha,\mathrm{ad}}=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(e^{-2gV_{\mathrm{ad}}}D_\alpha e^{2gV_{\mathrm{ad}}})$. The abstract connection-normalized chiral curvature in the action is $\mathcal W_\alpha$, defined by $\rho_{R*}(\mathcal W_\alpha)=\mathscr C_{\alpha,R}/(2i)$ for every representation $R$. Thus $\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)/(4g^2)=\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)/(8g^2)$ in the defining representation, before adding its Hermitian conjugate. The adopted connection-normalized N=1 action is

$$\mathcal L_{N=4}=\frac{1}{g^2}\left\{\frac14\left([\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)]_F+\mathrm{h.c.}\right)+\sum_{i=1}^3[\kappa_H(\bar\Phi_i,e^{2gV_{\mathrm{ad}}}\Phi_i)]_D+\left([\sqrt2\,\kappa_{\mathbb C}(\Phi_1,[\Phi_2,\Phi_3])]_F+\mathrm{h.c.}\right)\right\}.$$

Here $[Y]_F=I_F(Y)/2$ and $[Z]_D=-I_D(Z)/4$ are the normalized physical brackets; the raw mathematical measures retain their coefficient-extraction meaning. In canonical fields, the cubic superpotential coefficient is $\sqrt2g$, so its Yukawa coupling equals the gauge coupling. On shell, meaning after eliminating algebraic auxiliary fields and imposing the field equations, the physical content is one gauge connection, six real adjoint scalars $X^I$ ($I=1,\ldots,6$), and four adjoint Weyl fermions $\lambda^A$ ($A=1,\ldots,4$). The scalar potential in connection normalization is

$$V_{\mathrm{scalar}}=\frac{1}{2g^2}\sum_{1\le I<J\le6}\kappa([X^I,X^J],[X^I,X^J]);$$

for canonical fields $X^I_{\mathrm{can}}=X^I/g$ this is $\frac{g^2}{2}\sum_{I<J}\kappa([X^I_{\mathrm{can}},X^J_{\mathrm{can}}],[X^I_{\mathrm{can}},X^J_{\mathrm{can}}])$. With the N=2 model's N=1 decomposition, this is the $R=\mathrm{ad}$, $m=0$ hypermultiplet specialization after rescaling its two canonical hypermultiplet chiral fields by $g$ to the connection normalization of $\Phi_2$ and $\Phi_3$.

Adopt rigid four-dimensional $\mathcal N=4$ supersymmetry, with four independent left-Weyl supercharges and sixteen real components, as part of this physical model postulate. The action's extended invariance and on-shell closure are not proved in this item. This is a classical action with smooth fields in local bundle trivializations and compactly supported admissible variations; no path-integral measure, regulator, quantum continuum theory, or empirical result is asserted. Use $c=\hbar=1$: $g$ is dimensionless, connection-normalized scalar fields have units $\mathrm m^{-1}$, and canonical fields have mass dimension one.

## Postulate references

[D'Hoker and Phong, §§2.4 and 2.9–2.10](https://arxiv.org/pdf/hep-th/9912271v1)

[Martin, §§3.4, 4.5 and 4.9](https://arxiv.org/pdf/hep-ph/9709356v7)

[[post-qftx-n2-vector-hypermultiplet-model]]

[[lem-qftx-n4-adjoint-cubic-gauge-invariance]]

[[post-qftx-n1-gauge-matter-model]]

[[post-qftx-nonabelian-yang-mills-model]]

[[def-qftx-n1-vector-superfield]]

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-super-poincare-algebra-4d]]

