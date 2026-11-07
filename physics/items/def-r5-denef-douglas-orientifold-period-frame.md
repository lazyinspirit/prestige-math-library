---
id: def-r5-denef-douglas-orientifold-period-frame
kind: definition
title: "Denef–Douglas orientifold period-frame data"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 14
deps:
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-cmp-n2-special-kahler-period-data
  - def-cmp-type-iib-o3-o7-orientifold-data
  - def-r2-iib-flux-background-conventions
  - def-r5-flux-vacuum-ensemble-data
  - pthm-r2-iib-d3-tadpole-from-f5-bianchi
dependency_roles:
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-r5-flux-vacuum-ensemble-data: formulation-prerequisite
  pthm-r2-iib-d3-tadpole-from-f5-bianchi: physical-result
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
physical_scope: "Source-specific local special-geometry data for the Type IIB Calabi–Yau orientifold limit used in the Denef–Douglas continuum count. It is a conditional data interface, not an existence theorem, global F-theory lift, or full compactification solution."
empirical_premises: []
sources:
  references:
    - title: "Frederik Denef and Michael R. Douglas, Distributions of Flux Vacua, arXiv:hep-th/0404116v2"
      url: "https://arxiv.org/pdf/hep-th/0404116v2"
      locator: "§2.1, Eqs. (2.13)–(2.29), PDF pp. 12–14; orientifold Hodge decomposition, orthonormal frame, flux expansion, and tadpole."
    - title: "Mariana Graña, Flux Compactifications in String Theory: A Comprehensive Review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§§5.2 and 8; Type IIB Calabi–Yau orientifold period/superpotential conventions and flux-vacuum density."
---
## Definition

Let $Y$ be the smooth compact Calabi–Yau threefold, $X=(T^2\times Y)/\mathbb Z_2$ the source orientifold-limit notation, and $\sigma$ the O3/O7 involution fixed by the orientifold supplier. Write $n=h^{2,1}_-(Y)$, $m=n+1$, and $K=4m$. The index $0$ denotes the axio-dilaton $\tau\in\mathbb H:=\{\tau\in\mathbb C:\operatorname{Im}\tau>0\}$; indices $i,j,k\in\{1,\ldots,n\}$ denote local complex-structure coordinates on $Y$. The region $U\subseteq\mathcal M$ is a smooth measurable region in the $m$-complex-dimensional $(\tau,z^i)$ moduli space, with Kähler moduli omitted as in the source calculation.

Choose harmonic one-forms $\alpha,\beta$ on $T^2$ with the source canonical pairing and $\widehat\Omega_1=\beta-\tau\alpha$, a normalized holomorphic three-form $\Omega_3$ on $Y$, and $\Omega_4=\Omega_1\wedge\Omega_3$. The permitted harmonic flux space is the real $K$-dimensional source subspace
$$
H_F^4(X)=\{G_4=-\alpha\wedge F_3+\beta\wedge H_3:\ F_3,H_3\in H^3_-(Y;\mathbb R)\text{ harmonic}\}.
$$
Here $H^3_-(Y;\mathbb R)$ is the $-1$ eigenspace of $\sigma^*$ on real degree-three cohomology, represented by harmonic forms using the chosen metric. The source flux lattice $\Lambda\subset H_F^4(X)$, its ordered integral basis $N^\alpha$, orientation, and pairing $\eta_{\alpha\beta}$ are the same ensemble data as in [[def-r5-flux-vacuum-ensemble-data]]. The basis and pairing use the same smooth cover or quotient convention and the same GKP charge normalization as [[def-r2-iib-flux-background-conventions]]. In this convention $L=\tfrac12N^\alpha\eta_{\alpha\beta}N^\beta$ is the flux D3 charge that enters the conditional source-charge balance supplied by [[pthm-r2-iib-d3-tadpole-from-f5-bianchi]]; the source data, not this definition, fix the upper bound $L_*$.

Let $g_{a\bar b}$ be the positive Hermitian metric on the source complex-structure/axio-dilaton region, with $a,b\in\{0,1,\ldots,n\}$, and $g(z)=\det(g_{a\bar b})$. The symbol $D_a$ denotes the source Kähler-covariant derivative on the normalized period section, including the Levi-Civita connection on its moduli-space tangent index. Choose a local orthonormal frame $e_A{}^a$ satisfying $e_A{}^a g_{a\bar b}\overline{e_B{}^b}=\delta_{AB}$, and set $D_A=e_A{}^aD_a$. In this frame define the dimensionless Yukawa tensor
$$
F_{IJK}=i\langle\Omega_3,D_ID_JD_K\Omega_3\rangle,\qquad I,J,K\in\{1,\ldots,n\},
$$
where $\langle u,v\rangle=\int_Yu\wedge v$ with the source orientation. All period sections and covariant derivatives are evaluated on $U$.

An admissible Denef–Douglas period frame is a local choice of these data in which the source special-geometry identities hold: $D_0\Omega_1=F_0\overline{\Omega}_1$, $D_0D_0\Omega_1=0$, $D_ID_J\Omega_3=F_{IJK}\overline{D}^{\,K}\overline{\Omega}_3$, and the frame is normalized by $F_0=1$. The resulting product Hodge basis
$$
\mathcal B=\{\Omega_4,D_A\Omega_4,D_0D_I\Omega_4,\overline{\Omega}_4,\overline{D_A\Omega_4},\overline{D_0D_I\Omega_4}\}
$$
has $K=4m$ real directions and source pairing matrix $\operatorname{diag}(1,-I_m,I_n,1,-I_m,I_n)$. Define the complex flux coordinates $x\in\mathbb C$, $y_A\in\mathbb C^m$, and $Z_I\in\mathbb C^n$ by the unique source-frame expansion
$$
G_4=\bar x\,\Omega_4-\bar y_A D_A\Omega_4+\bar Z_I D_0D_I\Omega_4+\mathrm{c.c.}
$$
where $\mathrm{c.c.}$ means the complex-conjugate terms required for the real flux form. In the source normalization the F-term section is $W_{\rm src}=\langle G_4,\Omega_4\rangle=x$, $D_AW_{\rm src}=y_A$, $D_0D_0W_{\rm src}=0$, $D_0D_IW_{\rm src}=Z_I$, $D_ID_JW_{\rm src}=F_{IJK}\bar Z^K$, and the quadratic tadpole is $L=|x|^2-|y|^2+|Z|^2$. The mixed source special-geometry identity is $D_A\bar D_{\bar B}\bar W_{\rm src}=\delta_{A\bar B}\bar x$, with conjugate $\bar D_{\bar A}D_BW_{\rm src}=\delta_{\bar A B}x$. At a supersymmetric root $y=0$, differentiating the local frame vectors contributes only terms proportional to $y$, which vanish; hence these displayed covariant derivatives give the frame Jacobian of the F-term map at the root. These source-normalized coordinates are auxiliary integration coordinates; they are not additional observed random variables or a cosmological population measure.

## Definition references

[[def-cmp-calabi-yau-threefold-compactification-data]]

[[def-cmp-n2-special-kahler-period-data]]

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[def-r2-iib-flux-background-conventions]]

[[def-r5-flux-vacuum-ensemble-data]]

## Remarks

This is an interface definition for the source's local orientifold-limit frame. It explicitly requires the special-geometry identities and source pairing used by the count; it does not prove that a chosen global compactification realizes these data. The formula may therefore use this item only conditionally until its defining prerequisites have current, matching carriers and readiness.
