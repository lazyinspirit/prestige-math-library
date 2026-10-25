---
id: post-qftx-n1-gauge-matter-model
kind: postulate
title: Rigid $N=1$ SU(2) gauge-matter superspace action
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF + AC_omega inherited through the supplied non-Abelian gauge-data and connection interfaces; no additional choice principle is used."
deps:
  - def-qftx-physical-superspace-normalization
  - post-qftx-n1-wess-zumino-model
  - post-qftx-nonabelian-yang-mills-model
  - def-qftx-nonabelian-gauge-data
  - def-qftx-n1-chiral-superfield
  - def-qftx-n1-vector-superfield
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Postulate

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use the selected classical pure $SU(2)$ gauge model on oriented and time-oriented Minkowski $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$, one selected smooth right-principal bundle $P\to M$, connection $A$, curvature $F_A=dA+\tfrac12[A\wedge A]$, invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, and positive dimensionless $g_{\mathrm{YM}}$ from the non-Abelian Yang–Mills model. Use natural units $\hbar=c=1$, so $[x^\mu]=-1$, $[g_{\mathrm{YM}}]=0$, $[A_\mu]=1$, and $[F_{A,\mu\nu}]=2$. Let $g=g_{\mathrm{YM}}$.

Choose a finite index set $I$ with $|I|\geq1$. For each $a\in I$, choose a finite-dimensional complex Hermitian space $V_a$, a smooth unitary representation $R_a:SU(2)\to U(V_a)$, and its associated vector bundle $E_a=P\times_{R_a}V_a$. Define $V_{\mathrm{mat}}=\bigoplus_{a\in I}V_a$ and $R_{\mathrm{mat}}(h)=\bigoplus_{a\in I}R_a(h)$. The matter field $\Phi^a$ is a smooth chiral superfield with local components in $E_a$ and unique full even scalar, odd left Weyl, and even auxiliary components $(a^a,\psi^a,\mathcal F^a)$ in the coefficient convention below; their engineering dimensions are $1$, $3/2$, and $2$. Let $V$ be the full real vector prepotential of the local vector-superfield definition, with connection-normalized component $A_\mu=-ig B_\mu$ in a local unitary frame, and let $\mathcal W_\alpha$ be its abstract connection-normalized Lie-algebra-valued chiral field strength. Its represented matrix curvature is $\mathscr C_{\alpha,R}=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(e^{-2gV_R}D_\alpha e^{2gV_R})$; the dictionary is $\rho_{R*}(\mathcal W_\alpha)=\mathscr C_{\alpha,R}/(2i)$, so in the defining representation $\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)=\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)/2$. The matter covariant derivative is $D_\mu\phi^a=\partial_\mu\phi^a+\rho_{a*}(A_\mu)\phi^a=\partial_\mu\phi^a-ig B_\mu^b t_{b,a}\phi^a$, where $t_{b,a}=i\rho_{a*}(T_b)$ and $T_b=-i\sigma_b/2$. Take smooth field-dependent component fluctuations with compact support in the local trivializing regions used for the action; noncompact backgrounds are treated only through compactly supported relative action differences.

Choose a holomorphic superpotential $W_G:V_{\mathrm{mat}}\to\mathbb C$ of engineering dimension three, where holomorphic means that every Wirtinger derivative $\partial_{\bar z^A}W_G$ vanishes in complex-linear coordinates $z^A$ on $V_{\mathrm{mat}}$. Require invariance under the induced $SU(2)$ action, $W_G(R_{\mathrm{mat}}(h)v)=W_G(v)$ for all $h\in SU(2)$ and $v\in V_{\mathrm{mat}}$. Its complex differential $dW_{G,v}:V_{\mathrm{mat}}\to\mathbb C$ is the complex-linear map with coordinate expression $dW_{G,v}(w)=\sum_A(\partial_{z^A}W_G)(v)w^A$. Write $\rho_{\mathrm{mat}*}(X)=\bigoplus_{a\in I}\rho_{a*}(X)$ for the infinitesimal representation. Differentiating the invariance condition along $h=\exp(tX)$ gives $dW_{G,v}(\rho_{\mathrm{mat}*}(X)v)=\sum_{a\in I}dW_{G,v}(0,\ldots,\rho_{a*}(X)v^a,\ldots,0)=0$ for every $X\in\mathfrak{su}(2)$.

In each local unitary frame, use the finite Grassmann convention of the Wess–Zumino model postulate for this complete finite matter family: take the finite exterior coefficient algebra $\mathcal G$ on $m$ odd generators with generator-fixing conjugate-linear, parity-preserving involutive anti-automorphism $(c\zeta_{i_1}\cdots\zeta_{i_r})^*=\bar c\zeta_{i_r}\cdots\zeta_{i_1}$ and its degree-zero augmentation, exactly as defined there, and let $\mathfrak J$ be the zero-body ideal in $\mathcal G\otimes\Lambda_4$, so $\mathfrak J^{m+5}=0$. Local full scalar and auxiliary components are smooth maps $a^a,\mathcal F^a$ into $\mathcal G_{\bar0}\otimes V_a$, and fermions into $\mathcal G_{\bar1}\otimes V_a$, with coefficientwise compact support on $M$ in the stated frames. Complex conjugation combines the specified $\mathcal G$ involution with the Hermitian dual in the unitary frame. The ordinary bosonic restriction sets all positive coefficient-algebra degrees and fermions to zero, giving complex fields $\phi^a=b(a^a)$ and $F^a=b(\mathcal F^a)$; it is not the formal field space used for off-shell closure. Use the full $\mathcal G$-valued action and coefficientwise supersymmetry variation, and the conjugation-compatible parameter convention of the Wess–Zumino postulate. Let $v(x)=(\phi^a(x))_{a\in I}$ be the body and $\nu(x,\theta,\bar\theta)=\Phi(x,\theta,\bar\theta)-v(x)\in\mathfrak J\otimes_{\mathbb C}V_{\mathrm{mat}}$ its nilpotent increment. Evaluate $W_G$ by the finite Taylor rule of the Wess–Zumino model postulate: after choosing complex-linear coordinates on $V_{\mathrm{mat}}$, write $d=\dim_{\mathbb C}V_{\mathrm{mat}}$ and let $\gamma=(\gamma_A)_{A=1}^d\in\mathbb N^d$ be a multi-index, with $\gamma!=\prod_A\gamma_A!$, $\partial_z^\gamma=\prod_A\partial_{z^A}^{\gamma_A}$, and $\nu^\gamma=\prod_A(\nu^A)^{\gamma_A}$.

$$W_G(\Phi)(x,\theta,\bar\theta):=\sum_{|\gamma|\leq m+4}\frac{(\partial_z^\gamma W_G)(v(x))}{\gamma!}\nu(x,\theta,\bar\theta)^\gamma,$$

where the finite Grassmann algebra and its nilpotent ideal are chosen for this finite component family as in that postulate. Thus the local expression is chiral and, by the stated $SU(2)$ invariance, defines the same scalar superpotential on overlapping associated-bundle frames. For a superspace superfield $X$, use the normalized physical brackets $[X]_D=-I_D(X)/4$ and, for chiral $Y$, $[Y]_F=I_F(Y)/2$. Let $\kappa_\mathbb C$ denote the complex-bilinear extension of $\kappa$. Adopt the action

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

[[def-qftx-physical-superspace-normalization]]

