---
id: post-qftx-n1-gauge-matter-model
kind: postulate
title: Rigid N=1 SU(2) gauge-matter superspace action
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF + AC_omega inherited through the supplied non-Abelian gauge-data and connection interfaces; no additional choice principle is used."
deps:
  - post-qftx-n1-wess-zumino-model
  - post-qftx-nonabelian-yang-mills-model
  - def-qftx-nonabelian-gauge-data
  - def-qftx-n1-chiral-superfield
  - def-qftx-n1-vector-superfield
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  post-qftx-n1-wess-zumino-model: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-n1-vector-superfield: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
physical_scope: "An adopted classical rigid N=1 superspace gauge-matter model for a finite family of chiral multiplets in specified finite-dimensional unitary representations of the selected SU(2) gauge group and bundle sector on flat four-dimensional Minkowski spacetime. It asserts no quantum measure, continuum quantum theory, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.5 and §§4.8–4.9, printed pp. 38–48: real vector superfields, chiral field strengths, and the non-Abelian matter superspace action."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§§4.4 and 5.1–5.2, printed pp. 23–31: vector superfields, non-Abelian field strengths, representation-valued chiral matter, gauge coupling rescaling, and component interactions."
verification:
  precheck: pending
---

## Postulate

Use the selected classical pure $SU(2)$ gauge model on oriented and time-oriented Minkowski $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$, one selected smooth right-principal bundle $P\to M$, connection $A$, curvature $F_A=dA+\tfrac12[A\wedge A]$, invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, and positive dimensionless $g_{\mathrm{YM}}$ from the non-Abelian Yang–Mills model. Use natural units $\hbar=c=1$, so $[x^\mu]=-1$, $[g_{\mathrm{YM}}]=0$, $[A_\mu]=1$, and $[F_{A,\mu\nu}]=2$. Let $g=g_{\mathrm{YM}}$.

Choose a finite index set $I$ with $|I|\geq1$. For each $a\in I$, choose a finite-dimensional complex Hermitian space $V_a$, a smooth unitary representation $R_a:SU(2)\to U(V_a)$, and its associated vector bundle $E_a=P\times_{R_a}V_a$. The matter field $\Phi^a$ is a smooth chiral superfield with local components in $E_a$ and unique scalar, left Weyl, and complex auxiliary components $(\phi^a,\psi^a,F^a)$; their engineering dimensions are $1$, $3/2$, and $2$. Let $V$ be the full real vector prepotential of the local vector-superfield definition, with connection-normalized component $A_\mu=-ig B_\mu$ in a local unitary frame, and let $\mathcal W_\alpha$ be its abstract connection-normalized Lie-algebra-valued chiral field strength. Its represented matrix curvature is $\mathscr C_{\alpha,R}=-\tfrac14\bar D^2(e^{-2gV_R}D_\alpha e^{2gV_R})$; the dictionary is $\rho_{R*}(\mathcal W_\alpha)=\mathscr C_{\alpha,R}/(2i)$, so in the defining representation $\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)=\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)/2$. The matter covariant derivative is $D_\mu\phi^a=\partial_\mu\phi^a+\rho_{a*}(A_\mu)\phi^a=\partial_\mu\phi^a-ig B_\mu^b t_{b,a}\phi^a$, where $t_{b,a}=i\rho_{a*}(T_b)$ and $T_b=-i\sigma_b/2$. Take smooth field-dependent component fluctuations with compact support in the local trivializing regions used for the action; noncompact backgrounds are treated only through compactly supported relative action differences.

Choose a holomorphic gauge-invariant superpotential $W_G(\Phi)$ of engineering dimension three, so $dW_G(\phi)(\rho_{a*}(X)\phi^a)=0$ for every $X\in\mathfrak{su}(2)$, with the represented infinitesimal action summed over $a$. For a superspace superfield $X$, write $[X]_D=\int d^4\theta\,X$ and, for chiral $Y$, $[Y]_F=\int d^2\theta\,Y$, using the fixed ordered Berezin measures. Let $\kappa_\mathbb C$ denote the complex-bilinear extension of $\kappa$. Adopt the action

$$S_{\mathrm{GM}}=\int_M d^4x\left\{\sum_{a\in I}[\bar\Phi^a e^{2gV_{R_a}}\Phi^a]_D+\left(\left[\frac{1}{4g^2}\kappa_\mathbb C(\mathcal W^\alpha,\mathcal W_\alpha)+W_G(\Phi)\right]_F+\mathrm{h.c.}\right)\right\},$$

where $V_{R_a}$ is the represented vector prepotential from the local definition. Its coupling convention is fixed by requiring the bosonic gauge-curvature component to be exactly $-\kappa(F_A\wedge *_\eta F_A)/(2g^2)$; the same $g$ occurs in $e^{2gV_{R_a}}$ and in $D_\mu=\partial_\mu+\rho_{a*}(A_\mu)$, with no second gauge-coupling rescaling. The matter fields have $[\Phi^a]=1$, $[\psi^a]=3/2$, and $[F^a]=2$; $W_G$ has engineering dimension three. The model is defined locally in bundle trivializations with the transition laws induced by $P$; the D/F densities are required to obey the displayed supergauge law, with $\kappa$ invariant and $W_G$ gauge invariant, so the local action densities patch. Take configurations for which the action is integrable, or use compactly supported relative action differences with the same boundary convention as the supplied pure-gauge model. This is an adopted classical action, not a derivation that nature realizes it or that a quantum continuum theory exists. The gauge auxiliary field contributes its separate $D$-term sector; the $F$-term theorem on this page concerns only the chiral auxiliary contribution.

## Postulate references

[Stephen P. Martin, *A Supersymmetry Primer*, §4.5 and §§4.8–4.9](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §§4.4 and 5.1–5.2](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-wess-zumino-model]]

[[post-qftx-nonabelian-yang-mills-model]]

[[def-qftx-nonabelian-gauge-data]]

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-n1-vector-superfield]]

[[def-qftx-superspace-grassmann-algebra]]
