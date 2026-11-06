---
id: def-st-pure-spinor-quantum-bv-data
kind: definition
title: Curved Type II Pure-Spinor Model and Quantum BV Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
category: string-theory
deps:
  - def-st-pure-spinor-cone-bv-geometry
dependency_roles:
  def-st-pure-spinor-cone-bv-geometry: mathematical-premise
physical_scope: "Conditional formal one-worldsheet-loop Type II pure-spinor model calculation in the original Bedoya–Chandia conventions; no higher-loop or unrestricted-background conclusion."
empirical_limits: "No measurements or empirical confirmation are asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Oscar A. Bedoya and Osvaldo Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§2.1–2.5, equations (2.2)–(2.21): exact action, pure-spinor constraints, nilpotence, BRST-current holomorphicity, superspace Bianchi identities, vector equation of motion, and dilaton/connection relation."
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3.1–3.4.1, PDF pp. 50–54: constrained cone charts, local current algebra, and the distinction between a local current calculation and a noncompact global measure."
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228v1"
      locator: "§§4.2–4.3 and 8.5–8.7: odd antibracket and the need to compute a local anomaly before asserting its removability."
    - title: "Osvaldo Chandia and Brenno Carlini Vallilo, Non-minimal fields of the pure spinor string in general curved backgrounds"
      url: "https://arxiv.org/pdf/1412.1030v1"
      locator: "§3.1, equations (3.5)–(3.11), for the type-II canonical momenta and minimal curved BRST transformations; §3.2, equations (3.12)–(3.23), for the curved non-minimal sector. Neither section establishes the complete sourced QME restoration claimed by no item here."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: definition
---

## Definition

Adopt the minimal curved Type II pure-spinor model of Bedoya–Chandía. Let $\Sigma$ be a compact oriented smooth surface with a smooth positive worldsheet metric $h$; integrations by parts assume $\partial\Sigma=\varnothing$ or explicit boundary conditions that kill the stated boundary terms. Use dimensionless complex coordinates $z=x+iy$, $d^2z=dx\,dy$, and the scalar-curvature convention $\int_\Sigma\sqrt{h}R^{(2)}\,dx\,dy=4\pi\chi(\Sigma)$ when $\Sigma$ is closed. In the displayed source normalization define the curvature density relative to $d^2z$ by $r=\tfrac12\sqrt{h}R^{(2)}$; thus the Fradkin–Tseytlin term below is the usual $\tfrac1{4\pi}\int_\Sigma\sqrt{h}R^{(2)}\Phi$ and has no hidden factor of $\alpha'$. For a boundary theory any required boundary curvature term is separate from this bulk definition.

Set $[\alpha']=\mathrm L^2$, $[\hbar]=1$, $[Z^m]=\mathrm L$ for even target coordinates, and $[\theta^\alpha]=[\widetilde\theta^{\bar\alpha}]=\mathrm L^{1/2}$ for the odd target coordinates. The supervielbein is dimensioned so $[\Pi^a]=[\bar\Pi^a]=\mathrm L$ and $[\Pi^\alpha]=[\bar\Pi^\alpha]=[\Pi^{\bar\alpha}]=[\bar\Pi^{\bar\alpha}]=\mathrm L^{1/2}$. Adopt dimensionless pure-spinor ghosts, $[\lambda]=[\widetilde\lambda]=1$, $[w]=[\widetilde w]=\mathrm L^2$, $[d]=[\widetilde d]=\mathrm L^{3/2}$, $[K]=[\widetilde K]=\mathrm L^2$, $[P]=\mathrm L^{-1}$, $[C]=[\widetilde C]=\mathrm L^{-3/2}$, $[S]=\mathrm L^{-2}$ and $[\Phi]=[r]=1$. The two-form components have $[B_{BA}]=\mathrm L^{2-\delta_A-\delta_B}$, where $\delta_a=1$ and $\delta_\alpha=\delta_{\bar\alpha}=1/2$; connection components satisfy $[\Omega_{A\alpha}{}^\beta]=[\widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}]=[\Omega_{Aa}{}^b]=[\widetilde\Omega_{Aa}{}^b]=\mathrm L^{-\delta_A}$. These conventions make every term inside the $S_{\rm lead}^{\rm Lag}$ integrand have dimension $\mathrm L^2$ and the full action dimensionless.

The target is a smooth $10|32$ superspace patch with coordinates $Z^M$ and invertible supervielbein $E_M{}^A$, where $M$ ranges over ten even and thirty-two odd coordinates and $A=(a,\alpha,\bar\alpha)$ over a ten-vector and two sixteen-component spinor blocks. Pullbacks are $\Pi^A=\partial Z^M E_M{}^A$ and $\bar\Pi^A=\bar\partial Z^M E_M{}^A$. Use the source Lorentz metric $\eta_{ab}$ of signature $(-,+,\ldots,+)$. The full $32\times32$ Dirac matrices $\Gamma^a$ satisfy $\Gamma^a\Gamma^b+\Gamma^b\Gamma^a=2\eta^{ab}I$; $\gamma^a_{\alpha\beta}$ and $\widetilde\gamma^a_{\bar\alpha\bar\beta}$ are the source's symmetric chiral blocks, and $\gamma^{ab}=\frac12[\Gamma^a,\Gamma^b]$ restricted to the indicated Weyl block. The remaining target fields are the super-two-form $B_{BA}$, independent left/right scale-plus-Lorentz connections $\Omega_{A\alpha}{}^\beta$ and $\widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}$, constrained pure-spinor pairs $(\lambda^\alpha,w_\alpha)$ and $(\widetilde\lambda^{\bar\alpha},\widetilde w_{\bar\alpha})$, odd first-order momenta $d_\alpha,\widetilde d_{\bar\alpha}$, and background superfields $P^{\alpha\bar\beta}$, $C_\alpha{}^{\beta\bar\gamma}$, $\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}$, $S_{\alpha\bar\alpha}{}^{\beta\bar\beta}$ and dilaton $\Phi$. The Lorentz pieces of the two spinor connections induce the corresponding metric-compatible vector connections $\Omega_{Aa}{}^b$ and $\widetilde\Omega_{Aa}{}^b$ through the vector representation of the same $\mathfrak{so}(1,9)$ generators. The left and right spinor chiralities are opposite in IIA and equal in IIB; the odd-coordinate and odd-derivative signs below follow the cited source.

Let $D_{\rm Lor}=\mathbb C^{32}$ carry the source matrices $\Gamma^a$. Let $\Gamma_*$ be the source chirality involution, with $\Gamma_*^2=I$ and $\Gamma_*\Gamma^a=-\Gamma^a\Gamma_*$. Its two sixteen-dimensional eigenspaces are the two Weyl modules; the source's left module $S_L$ is one of them, while $S_R=S_L$ in IIB and is the other in IIA. To use the cone coordinates of the Pure-Spinor Cone and Finite BV Semidensity Geometry definition for the physical left pure-spinor variable, fix a complex-linear isometry $\jmath$ from $(\mathbb R^{1,9},\eta)\otimes_{\mathbb R}\mathbb C$ to its complex quadratic space $V$, and a Clifford-module isomorphism $U:D_{\rm Lor}\to S^+\oplus S^-$ satisfying $U\Gamma(v)=c(\jmath(v))U$ for every complexified vector $v$, where $\Gamma(v):=v_a\Gamma^a$ in the basis used for $\eta$. Choose its chirality orientation so its restriction $U_L$ maps $S_L$ to $S^+$ and matches the source bilinear $\gamma_{\rm source}(v)=v_a\gamma^a$ with $\gamma(U_Ls,U_Lt)(\jmath(v))$ for $s,t\in S_L$. The field $\lambda$ is transported by $U_L$ when written in those cone coordinates; the right block is transported by the corresponding restriction, to $S^-$ in IIA and to $S^+$ in IIB. The physical real form remains the Lorentzian one specified by $\eta$; only the algebraic cone coordinates use the complexification.

Put $K^\alpha{}_{\beta}=\lambda^\alpha w_\beta$ and $\widetilde K^{\bar\alpha}{}_{\bar\beta}=\widetilde\lambda^{\bar\alpha}\widetilde w_{\bar\beta}$, with products in that order, $\bar\Omega_\alpha{}^\beta=\bar\Pi^A\Omega_{A\alpha}{}^\beta$, and $\widetilde\Omega_{\bar\alpha}{}^{\bar\beta}=\Pi^A\widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}$. The source’s leading Lagrangian is

$$S_{\rm lead}^{\rm Lag}=\frac1{2\pi\alpha'}\int d^2z\,[\tfrac12\Pi^a\bar\Pi^b\eta_{ab}+\tfrac12\Pi^A\bar\Pi^B B_{BA}+d_\alpha\bar\Pi^\alpha+\widetilde d_{\bar\alpha}\Pi^{\bar\alpha}+K^\alpha{}_{\beta}\bar\Omega_\alpha{}^\beta+\widetilde K^{\bar\alpha}{}_{\bar\beta}\widetilde\Omega_{\bar\alpha}{}^{\bar\beta}+d_\alpha\widetilde d_{\bar\beta}P^{\alpha\bar\beta}+K^\alpha{}_{\beta}\widetilde d_{\bar\gamma}C_\alpha{}^{\beta\bar\gamma}+\widetilde K^{\bar\alpha}{}_{\bar\beta}d_\gamma\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}+K^\alpha{}_{\beta}\widetilde K^{\bar\alpha}{}_{\bar\beta}S_{\alpha\bar\alpha}{}^{\beta\bar\beta}]+S_{\rm pure},$$

where $S_{\rm pure}=\frac1{2\pi\alpha'}\int d^2z\,(w_\alpha\bar\partial\lambda^\alpha+\widetilde w_{\bar\alpha}\partial\widetilde\lambda^{\bar\alpha})$ is the first-order ghost action in ordinary derivatives; the two displayed connection-current terms covariantize it. The Fradkin–Tseytlin term is $S_{\rm FT}=\frac1{2\pi}\int d^2z\,r\Phi$, with $r$ the source's worldsheet curvature density. The full source action is $S_{\rm model}^{\rm Lag}=S_{\rm lead}^{\rm Lag}+S_{\rm FT}$; $S_{\rm FT}$ is assigned one-loop order in the expansion and is not silently added as a leading-action Hessian vertex.

The pure-spinor constraints are $\lambda\gamma^a\lambda=\widetilde\lambda\gamma^a\widetilde\lambda=0$; the conjugates are identified under $\delta w_\alpha=(\gamma_a\lambda)_\alpha\Lambda^a$ and the barred counterpart. The source decompositions are part of the model data:

$$\Omega_{A\alpha}{}^\beta=\Omega_A\delta_\alpha{}^\beta+\tfrac14\Omega_{Aab}(\gamma^{ab})_\alpha{}^\beta,\quad \widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}=\widetilde\Omega_A\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde\Omega_{Aab}(\gamma^{ab})_{\bar\alpha}{}^{\bar\beta},$$

$$C_\alpha{}^{\beta\bar\gamma}=C^{\bar\gamma}\delta_\alpha{}^\beta+\tfrac14 C_{ab}{}^{\bar\gamma}(\gamma^{ab})_\alpha{}^\beta,\quad \widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}=\widetilde C^\gamma\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde C_{ab}{}^\gamma(\gamma^{ab})_{\bar\alpha}{}^{\bar\beta},$$

$$S_{\alpha\bar\alpha}{}^{\beta\bar\beta}=S\delta_\alpha{}^\beta\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14S_{ab}(\gamma^{ab})_\alpha{}^\beta\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde S_{ab}\delta_\alpha{}^\beta(\gamma^{ab})_{\bar\alpha}{}^{\bar\beta}+\tfrac1{16}S_{abcd}(\gamma^{ab})_\alpha{}^\beta(\gamma^{cd})_{\bar\alpha}{}^{\bar\beta}.$$

For a target scalar $f$, $D_Af=E_A{}^M\partial_Mf$; $D_AD_Bf$ means the ordered directional derivatives of the scalar component $D_Bf$, without a connection on the frame label $B$, whereas $\nabla_AD_Bf$ also covariantly differentiates that label. In general $\nabla_A$ acts on every target index using the connection just specified; for example, $\nabla_\alpha P^{\beta\bar\gamma}=D_\alpha P^{\beta\bar\gamma}+P^{\delta\bar\gamma}\Omega_{\alpha\delta}{}^\beta+P^{\beta\bar\delta}\widetilde\Omega_{\alpha\bar\delta}{}^{\bar\gamma}$. Put $E_A=E_A{}^M\partial_M$ and define the frame commutator coefficients $c_{AB}{}^C$ by $[E_A,E_B]=c_{AB}{}^C E_C$, where $[X,Y]=XY-(-1)^{|X||Y|}YX$ for homogeneous derivations. For each chosen tangent connection define its torsion intrinsically by $T(X,Y)=\nabla_XY-(-1)^{|X||Y|}\nabla_YX-[X,Y]$. Its components in the source's tangent-index convention are

$$T_{BC}{}^A=-E_B{}^N(\partial_N E_C{}^M)E_M{}^A+(-1)^{|B||C|}E_C{}^N(\partial_N E_B{}^M)E_M{}^A+\Omega_{BC}{}^A-(-1)^{|B||C|}\Omega_{CB}{}^A,$$

where $\Omega_{BC}{}^A=E_B{}^M\Omega_{MC}{}^A$. Define curvature on a section $s$ of the indicated vector or spinor bundle by

$$R_{AB}s=\bigl(\nabla^S_A\nabla^S_B-(-1)^{|A||B|}\nabla^S_B\nabla^S_A-c_{AB}{}^C\nabla^S_C\bigr)s,$$

where $\nabla^S_A=\nabla^S_{E_A}$ differentiates the section and not the frame label on the next operator. This fixes the curvature signs without mixing the source's order for form coefficients with the usual order for exterior evaluation. In source notation, spinor-output torsions $T_{BC}{}^\alpha$ use $\Omega$, while $T_{BC}{}^{\bar\alpha}$ use $\widetilde\Omega$; the corresponding spinor curvatures are $R_{AB\alpha}{}^\beta$ and $\widetilde R_{AB\bar\alpha}{}^{\bar\beta}$. For vector output, $T_{BC}{}^a$ uses $\Omega_{Aa}{}^b$ and $\widetilde T_{BC}{}^a$ uses $\widetilde\Omega_{Aa}{}^b$, with curvatures defined by the same commutator rule. Also $H=dB$ is the graded exterior derivative of the super-two-form.

The scale curvatures $R_{AB}$ and $\widetilde R_{AB}$ are the scalar parts of the spinor curvatures in the displayed scale-plus-Lorentz decomposition. Equivalently, the left scale curvature is the exterior derivative of the scalar connection one-form, evaluated on $(E_A,E_B)$:

$$R_{AB}=D_A\Omega_B-(-1)^{|A||B|}D_B\Omega_A-c_{AB}{}^C\Omega_C,$$

with the analogous formula for $\widetilde R$. The frame coefficient $c_{AB}{}^C$ is not the torsion $T_{AB}{}^C$: their difference is fixed by the displayed torsion formula. In particular, $\Omega_{\bar\beta}=0$ implies $R_{\bar\beta\alpha}=D_{\bar\beta}\Omega_\alpha-c_{\bar\beta\alpha}{}^C\Omega_C$. Vanishing mixed torsion alone does not remove the last term. On that branch the additional condition $c_{\bar\beta\alpha}{}^C\Omega_C=0$ is sufficient for the directional-derivative specialization $R_{\bar\beta\alpha}=D_{\bar\beta}\Omega_\alpha$; without it the frame term must be retained. This condition is an extra restriction when that specialization is used, not a consequence of the adopted constraints below.

**Adopted classical premises, not results proved by this definition.** The BRST charges are $Q=\oint\lambda^\alpha d_\alpha$ and $\widetilde Q=\oint\widetilde\lambda^{\bar\alpha}\widetilde d_{\bar\alpha}$. Their source nilpotence and mutual anticommutation constraints are exactly

$$\lambda^\alpha\lambda^\beta H_{\alpha\beta A}=\lambda^\alpha\lambda^\beta\lambda^\gamma R_{\alpha\beta\gamma}{}^\delta=\lambda^\alpha\lambda^\beta\widetilde R_{\alpha\beta\bar\gamma}{}^{\bar\delta}=0,\quad \lambda^\alpha\lambda^\beta T_{\alpha\beta}{}^a=\lambda^\alpha\lambda^\beta T_{\alpha\beta}{}^\gamma=\lambda^\alpha\lambda^\beta T_{\alpha\beta}{}^{\bar\gamma}=0,$$

$$\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}H_{\bar\alpha\bar\beta A}=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}R_{\bar\alpha\bar\beta\gamma}{}^\delta=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}\widetilde\lambda^{\bar\gamma}\widetilde R_{\bar\alpha\bar\beta\bar\gamma}{}^{\bar\delta}=0,\quad \widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}\widetilde T_{\bar\alpha\bar\beta}{}^a=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}T_{\bar\alpha\bar\beta}{}^\gamma=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}T_{\bar\alpha\bar\beta}{}^{\bar\gamma}=0,$$

$$H_{\alpha\bar\beta A}=T_{\alpha\bar\beta}{}^a=T_{\alpha\bar\beta}{}^\gamma=T_{\alpha\bar\beta}{}^{\bar\gamma}=\lambda^\alpha\lambda^\beta R_{\bar\gamma\alpha\beta}{}^\delta=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}\widetilde R_{\gamma\bar\alpha\bar\beta}{}^{\bar\delta}=0.$$

The BRST-current holomorphicity and antiholomorphicity constraints are adopted as the source's complete equations (2.15)–(2.16), stated here to fix their interface. All bracket notation is unit-weight normalized graded symmetrization or antisymmetrization over the indicated indices. For spinor outputs, $T_{BC}{}^\alpha$ and $R_{AB\alpha}{}^\beta$ use the left connection, while $T_{BC}{}^{\bar\alpha}$ and $\widetilde R_{AB\bar\alpha}{}^{\bar\beta}$ use the right connection; for vector outputs, $T_{BC}{}^a$ and $\widetilde T_{BC}{}^a$ use the left and right vector connections, respectively. The covariant derivative acts on every index; in particular $\nabla_\alpha P^{\beta\bar\gamma}=D_\alpha P^{\beta\bar\gamma}+P^{\delta\bar\gamma}\Omega_{\alpha\delta}{}^\beta+P^{\beta\bar\delta}\widetilde\Omega_{\alpha\bar\delta}{}^{\bar\gamma}$. With the source index conventions, the left-current conditions are

$$\begin{aligned} T_{\alpha(ab)}&=H_{\alpha ab}=T_{\alpha\beta a}-H_{\alpha\beta a}=T_{a\alpha}{}^\beta=T_{a\alpha}{}^{\bar\beta}+P^{\gamma\bar\beta}T_{\gamma\alpha a}=\lambda^\alpha\lambda^\beta R_{a\alpha\beta}{}^\gamma=0,\\ \widetilde R_{a\alpha\bar\beta}{}^{\bar\gamma}-\widetilde C_{\bar\beta}{}^{\bar\gamma\delta}T_{\delta\alpha a}&=T_{\gamma\alpha}{}^{\bar\beta}+\tfrac12P^{\delta\bar\beta}H_{\delta\gamma\alpha}=\widetilde R_{\delta\alpha\bar\beta}{}^{\bar\gamma}+\tfrac12\widetilde C_{\bar\beta}{}^{\bar\gamma\rho}H_{\rho\delta\alpha}=P^{\delta\bar\gamma}T_{\delta\alpha}{}^\beta-\nabla_\alpha P^{\beta\bar\gamma}-C_\alpha{}^{\beta\bar\gamma}=0,\\ \nabla_\alpha\widetilde C_{\bar\beta}{}^{\bar\gamma\delta}+\widetilde C_{\bar\beta}{}^{\bar\gamma\rho}T_{\rho\alpha}{}^\delta+P^{\delta\bar\rho}\widetilde R_{\bar\rho\alpha\bar\beta}{}^{\bar\gamma}-S_{\alpha\bar\beta}{}^{\delta\bar\gamma}&=\lambda^\alpha\lambda^\beta(\nabla_\alpha C_\beta{}^{\gamma\bar\delta}-P^{\rho\bar\delta}R_{\rho\alpha\beta}{}^\gamma)=0,\\ \lambda^\alpha\lambda^\beta(\nabla_\alpha S_{\beta\bar\delta}{}^{\gamma\bar\rho}+C_\beta{}^{\gamma\bar\sigma}\widetilde R_{\bar\sigma\alpha\bar\delta}{}^{\bar\rho}+\widetilde C_{\bar\delta}{}^{\bar\rho\sigma}R_{\sigma\alpha\beta}{}^\gamma)&=0. \end{aligned}$$

The right-current conditions are

$$\begin{aligned} T_{\bar\alpha(ab)}&=H_{\bar\alpha ab}=T_{\bar\alpha\bar\beta a}+H_{\bar\alpha\bar\beta a}=T_{a\bar\alpha}{}^{\bar\beta}=T_{a\bar\alpha}{}^\beta-P^{\beta\bar\gamma}T_{\bar\gamma\bar\alpha a}=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}\widetilde R_{a\bar\alpha\bar\beta}{}^{\bar\gamma}=0,\\ R_{a\bar\alpha\beta}{}^\gamma-C_\beta{}^{\gamma\bar\delta}T_{\bar\delta\bar\alpha a}&=T_{\bar\gamma\bar\alpha}{}^\beta+\tfrac12P^{\beta\bar\delta}H_{\bar\gamma\bar\delta\bar\alpha}=R_{\bar\delta\bar\alpha\beta}{}^\gamma+\tfrac12C_\beta{}^{\gamma\bar\rho}H_{\bar\delta\bar\rho\bar\alpha}=P^{\beta\bar\delta}T_{\bar\delta\bar\alpha}{}^{\bar\gamma}-\nabla_{\bar\alpha}P^{\beta\bar\gamma}+\widetilde C_{\bar\alpha}{}^{\bar\gamma\beta}=0,\\ \nabla_{\bar\alpha}C_\beta{}^{\gamma\bar\delta}+C_\beta{}^{\gamma\bar\rho}T_{\bar\rho\bar\alpha}{}^{\bar\delta}-P^{\rho\bar\delta}R_{\rho\bar\alpha\beta}{}^\gamma-S_{\beta\bar\alpha}{}^{\gamma\bar\delta}&=\widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}(\nabla_{\bar\alpha}\widetilde C_{\bar\beta}{}^{\bar\gamma\delta}+P^{\delta\bar\rho}\widetilde R_{\bar\rho\bar\alpha\bar\beta}{}^{\bar\gamma})=0,\\ \widetilde\lambda^{\bar\alpha}\widetilde\lambda^{\bar\beta}(\nabla_{\bar\alpha}S_{\delta\bar\beta}{}^{\rho\bar\gamma}+C_{\delta}{}^{\rho\bar\sigma}\widetilde R_{\bar\sigma\bar\alpha\bar\beta}{}^{\bar\gamma}+\widetilde C_{\bar\beta}{}^{\bar\gamma\sigma}R_{\sigma\bar\alpha\delta}{}^{\rho})&=0. \end{aligned}$$

These are adopted classical premises, not results proved by this definition. The complete adopted Bianchi identities (Bedoya–Chandía (2.17)–(2.19)) for each indicated left or right connection are

$$\nabla_{[A}T_{BC]}{}^D+T_{[AB}{}^E T_{EC]}{}^D-R_{[ABC]}{}^D=0,$$

$$\nabla_{[A}H_{BCD]}+\tfrac32T_{[AB}{}^E H_{ECD]}=0,$$

$$\nabla_{[A}R_{BC]D}{}^E+T_{[AB}{}^F R_{FC]D}{}^E=0.$$

The middle identity also holds with $\widetilde\nabla,\widetilde T$; it is the same $H=dB$ identity in the two connection conventions. In the last identity the bracket is over the first three frame indices. The dilaton relation is $D_\alpha\Phi=4\Omega_\alpha$ and $D_{\bar\alpha}\Phi=4\widetilde\Omega_{\bar\alpha}$, equation (2.21).

The full vector equation of motion (Bedoya–Chandía (2.20)) is adopted whenever that equation is used:

$$\begin{aligned}\tfrac12(\widetilde\nabla\bar\Pi_a+\bar\nabla\Pi_a)={}&\tfrac12\Pi^b\bar\Pi^cH_{cba}-\tfrac12\Pi^\alpha\bar\Pi^bT_{\alpha ab}+d_\alpha\bar\Pi^bT_{ab}{}^\alpha+\lambda^\alpha w_\beta\bar\Pi^bR_{ab\alpha}{}^\beta\\&+\widetilde d_{\bar\alpha}\Pi^b(T_{ab}{}^{\bar\alpha}+\tfrac12P^{\beta\bar\alpha}T_{\beta ab})+\widetilde\lambda^{\bar\alpha}\widetilde w_{\bar\beta}\Pi^b(\widetilde R_{ab\bar\alpha}{}^{\bar\beta}+\tfrac12\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}T_{\gamma ab})+\tfrac12\widetilde d_{\bar\alpha}\Pi^\beta T_{a\beta}{}^{\bar\alpha}+\tfrac12\widetilde\lambda^{\bar\alpha}\widetilde w_{\bar\beta}\Pi^\gamma\widetilde R_{a\gamma\bar\alpha}{}^{\bar\beta}\\&+\tfrac12d_\alpha\bar\Pi^{\bar\beta}T_{a\bar\beta}{}^\alpha+\tfrac12\lambda^\alpha w_\beta\bar\Pi^{\bar\gamma}R_{a\bar\gamma\alpha}{}^\beta+d_\alpha\widetilde d_{\bar\beta}\nabla_aP^{\alpha\bar\beta}\\&+\lambda^\alpha w_\beta\widetilde d_{\bar\gamma}(\nabla_aC_\alpha{}^{\beta\bar\gamma}-P^{\delta\bar\gamma}R_{a\delta\alpha}{}^\beta)+\widetilde\lambda^{\bar\alpha}\widetilde w_{\bar\beta}d_\gamma(\nabla_a\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}+P^{\gamma\bar\delta}\widetilde R_{a\bar\delta\bar\alpha}{}^{\bar\beta})\\&+\lambda^\alpha w_\beta\widetilde\lambda^{\bar\gamma}\widetilde w_{\bar\delta}(\nabla_aS_{\alpha\bar\gamma}{}^{\beta\bar\delta}-\widetilde C_{\bar\gamma}{}^{\bar\delta\rho}R_{a\rho\alpha}{}^\beta-C_\alpha{}^{\beta\bar\rho}\widetilde R_{a\bar\rho\bar\gamma}{}^{\bar\delta}).\end{aligned}$$

Here $\nabla,\widetilde\nabla$ on a pulled-back vector use the corresponding pullback of the vector connection; for example $\bar\nabla\Pi^a=\bar\partial\Pi^a+\bar\Pi^B\Omega_{B b}{}^a\Pi^b$ and $\widetilde\nabla\bar\Pi^a=\partial\bar\Pi^a+\Pi^B\widetilde\Omega_{B b}{}^a\bar\Pi^b$. This is the complete source equation, not an equation with selected terms omitted.

For the canonical extension, let $\partial=\partial_0-\partial_1$ and $\bar\partial=\partial_0+\partial_1$, and define $P_M=2\pi\alpha'\,\delta S_{\rm lead}^{\rm Lag}/\delta(\partial_0 Z^M)$. The source canonical bracket, used only in the gauge-invariant combinations appearing in the action, is $[P_M(\sigma),Z^N(\sigma')]=-\delta_M{}^N\delta(\sigma-\sigma')$, together with $[\lambda^\alpha,w_\beta]=\delta^\alpha{}_\beta\delta$ and its right counterpart. In local cone coordinates this is the cotangent bracket of the Pure-Spinor Cone and Finite BV Semidensity Geometry definition. Keeping the full $B$ and both connection contributions, the canonical first-order relations are

$$\begin{aligned} d_\alpha&=-E_\alpha{}^M P_M+\partial_1Z^M B_{M\alpha}+\Omega_{\alpha\beta}{}^\gamma\lambda^\beta w_\gamma+\widetilde\Omega_{\alpha\bar\beta}{}^{\bar\gamma}\widetilde\lambda^{\bar\beta}\widetilde w_{\bar\gamma},\\ \widetilde d_{\bar\alpha}&=-E_{\bar\alpha}{}^M P_M+\partial_1Z^M B_{M\bar\alpha}+\Omega_{\bar\alpha\beta}{}^\gamma\lambda^\beta w_\gamma+\widetilde\Omega_{\bar\alpha\bar\beta}{}^{\bar\gamma}\widetilde\lambda^{\bar\beta}\widetilde w_{\bar\gamma}. \end{aligned}$$

Thus $Q_c=\oint(\lambda^\alpha d_\alpha+\widetilde\lambda^{\bar\alpha}\widetilde d_{\bar\alpha})$ is the actual canonical BRST charge, including its spatial $B$-field cocycle. Let $S_{\rm can}$ be the first-order phase-space action obtained by Legendre transform of $S_{\rm lead}^{\rm Lag}$ with $P_M$ and any chosen auxiliary vector momenta retained. Define $R_cF=[Q_c,F]_{\rm can}$ as an odd left derivation, with $R_c^A=R_c\Phi^A$ and $\epsilon_A=|\Phi^A|$. The source classical Noether premise is $R_cS_{\rm can}=0$, and the nilpotence constraints give $R_c^2=0$. In the cited canonical antibracket use $S_{\rm BV,c}=S_{\rm can}+\int\sum_A(-1)^{\epsilon_A}\Phi_A^*R_c^A$, with products in this order. Indeed $(S_{\rm BV,c},\Phi^A)=R_c^A$; expanding its self-bracket gives an antifield-independent term proportional to $R_cS_{\rm can}$ and antifield-linear terms proportional to $R_c^2\Phi^A$, all zero under the adopted premises. Hence $(S_{\rm BV,c},S_{\rm BV,c})=0$; denote this classical canonical BV action by $S_0$. Every independent field-chart coordinate and ghost has an odd cotangent antifield with parity and ghost number fixed by the Pure-Spinor Cone and Finite BV Semidensity Geometry definition. If auxiliary canonical vector momenta are introduced in a first-order metric/source split, retain them through the source variation and finite BV pushforward with their actual Gaussian cycle and determinant branch; eliminating them earlier must be represented by the induced higher-antifield vertices. The projected BRST vector is not substituted for $R_c$.

The candidate quantization datum is a tuple consisting of: the local cone charts and overlap maps; the worldsheet kinetic operators and a spectral cutoff; complementary low/high projectors with invertible high quadratic block on the stated branch; the odd-symplectic transport that pulls metric-varying ranges to fixed Darboux coordinates; a determinant branch and finite mode integration cycle; an admissible counterterm space of even ghost-number-zero finite-jet local functionals of fields, antifields, metric and sources, modulo declared total derivatives, with chart/frame-compatible transition laws; and an apex/infinity prescription for the punctured cone together with its actual boundary term. These are choices to be supplied and checked by a quantization construction. No compatible continuum measure, vanishing boundary remainder, anomaly cancellation, or local $C_1$ is included as an assumption.

## Definition references

[[def-st-pure-spinor-cone-bv-geometry]]

[Bedoya–Chandía, §§2.1–2.5, equations (2.2)–(2.21)](https://arxiv.org/pdf/hep-th/0609161v2)

[Nekrasov, constrained-cone and current conventions](https://arxiv.org/pdf/hep-th/0511008v1)

[Gomis, París, and Samuel, BV anomaly/removability distinction](https://arxiv.org/pdf/hep-th/9412228v1)

[Chandía and Vallilo, curved non-minimal transformations](https://arxiv.org/pdf/1412.1030v1)
