---
id: post-qftx-n1-wess-zumino-model
kind: postulate
title: Rigid four-dimensional N=1 Wess–Zumino sigma-model action
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
deps:
  - def-qftx-physical-superspace-normalization
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - def-qftx-n1-kahler-target-data
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
  def-qftx-n1-kahler-target-data: formulation-prerequisite
physical_scope: "An adopted classical rigid N=1 superspace model on flat four-dimensional Minkowski spacetime, with a finite set of chiral multiplets on one specified Kähler coordinate patch and compactly supported component fields. It asserts no gauge interaction, supergravity, quantum measure, continuum quantum theory, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§3.1–3.2 and 4.7, printed pp. 18–24 and 41–42: off-shell chiral multiplets, chiral interactions, and the Wess–Zumino superspace action."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§4.3 and §7.1, printed pp. 21–22 and 43–46: superspace total-derivative invariance and Kähler sigma-model actions."
verification:
  precheck: pending
---

## Postulate

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use oriented and time-oriented Minkowski spacetime $M=\mathbb R^{1,3}$ with coordinates $x^0,x^1,x^2,x^3$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and natural units $\hbar=c=1$. Let $n\geq1$, let $U\subseteq\mathbb C^n$ be an open set containing $0$, let $K:U\to\mathbb R$ be smooth, and require the Hermitian matrix $g_{i\bar j}(z,\bar z)=\partial_i\partial_{\bar j}K(z,\bar z)$ to be positive definite at every point of $U$. Let $W:U\to\mathbb C$ be holomorphic. These data specify the Kähler coordinate patch and holomorphic superpotential of the model.

For each $i=1,\ldots,n$, take an even smooth chiral superfield $\Phi^i$ on the four-dimensional superspace, with physical components $(\phi^i,\psi^i_\alpha,F^i)$, related to the unique mathematical chiral coefficients by the physical normalization definition. The scalar map $\phi:M\to U$ is smooth with compact support, and the coefficient functions of $\psi^i$ and $F^i$ are smooth and compactly supported. The supersymmetry parameters $\epsilon^\alpha$ and $\bar\epsilon^{\dot\alpha}$ are constant Grassmann-odd Weyl spinors, and the adopted variation is $\delta\Phi^i=(\epsilon^\alpha Q_\alpha+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha})\Phi^i$ with the chiral-superfield supercharges. The engineering dimensions are $[x^\mu]=-1$, $[\theta]=[\bar\theta]=-1/2$, $[\phi^i]=1$, $[\psi^i]=3/2$, $[F^i]=2$, $[K]=2$, and $[W]=3$ in mass units.

Adopt the classical action

$$S_{\mathrm{WZ}}=\int_M d^4x\left([K(\bar\Phi,\Phi)]_D+[W(\Phi)]_F+\mathrm{h.c.}\right),$$

where only the chiral F action has a Hermitian-conjugate partner and the D bracket is real; both physical brackets are the fixed multiples of the earlier raw ordered measures. In the bosonic zero-derivative sector, the algebraic auxiliary-field terms are

$$\mathcal L_{F}=g_{i\bar j}(\phi,\bar\phi)F^i\bar F^{\bar j}+F^iW_i(\phi)+\bar F^{\bar j}\overline{W_j(\phi)}.$$

The canonical Wess–Zumino model is the special case $U=\mathbb C^n$, $K=\sum_i\bar\Phi^{\bar i}\Phi^i$, and hence $g_{i\bar j}=\delta_{i\bar j}$. This is an adopted classical formulation and normalization, not a deduction that nature realizes the model.

## Postulate references

[Stephen P. Martin, *A Supersymmetry Primer*, §§3.1–3.2 and 4.7](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §4.3 and §7.1](https://arxiv.org/pdf/hep-th/0101055).

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-n1-kahler-target-data]]

[[def-qftx-physical-superspace-normalization]]

