---
id: post-pure-spinor-type-ii-curved-background-sigma-model
kind: postulate
title: "Pure Spinor Type Ii Curved Background Sigma Model"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 3
domain: physics
physical_scope: "Adopted minimal Type II pure-spinor sigma-model data in the exact ten-dimensional superspace and regularization conventions of Bedoya–Chandía. The source’s classical BRST and superspace constraints are explicit background premises; no exact path-integral measure is asserted."
deps:
  - post-pure-spinor-superstring-model
dependency_roles:
  post-pure-spinor-superstring-model: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Oscar A. Bedoya and Osvaldo Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background, arXiv:hep-th/0609161v2, JHEP 0701:042 (2007)"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§2–2.5, equations (2.1)–(2.21): action, connection decompositions, background constraints and ghost-number/dilaton relation; §5 opening, after (4.6): independent operator basis before the beta-function equations. No one-loop vanishing proof imported."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Adopt the following minimal Type II superspace sigma-model data in the exact component order and connection conventions of Bedoya–Chandía. This specifies the local classical action and background constraints; it does not assert a quantum measure, a restored quantum master equation, or the vanishing of one-loop beta functions.

Let $\Sigma$ be an oriented smooth two-dimensional worldsheet with local complex coordinate $z$. The target $\mathcal M$ is a smooth $10|32$-dimensional supermanifold with local even and odd coordinates $Z^M=(x^m,\theta^\mu,\widetilde\theta^{\bar\mu})$, and the classical configuration is a smooth supermap $Z:\Sigma\to\mathcal M$, coefficientwise in a fixed finite-dimensional real Grassmann algebra. All displayed equations are local on this chart; background superfields and the invertible supervielbein $E_M{}^A$ are smooth. A frame index $A$ is $a$, $\alpha$, or $\bar\alpha$, with $a=0,\ldots,9$ and each spinor index ranging from $1$ to $16$. Barred spinor indices label the second spin bundle, not complex conjugation: it has opposite chirality in IIA and equal chirality in IIB. Put $\Pi^A=\partial Z^M E_M{}^A$, $\bar\Pi^A=\bar\partial Z^M E_M{}^A$; these are the pullback components of the supervielbein. The Grassmann-odd first-order worldsheet fields are $d_\alpha,\widetilde d_{\bar\alpha}$. Bosonic ghost fields $(\lambda^\alpha,w_\alpha)$ and $(\widetilde\lambda^{\bar\alpha},\widetilde w_{\bar\alpha})$ obey $\lambda\gamma^a\lambda=\widetilde\lambda\gamma^a\widetilde\lambda=0$ and the conjugate gauge shifts $\delta w_\alpha=\Omega_a(\gamma^a\lambda)_\alpha$ and $\delta\widetilde w_{\bar\alpha}=\widetilde\Omega_a(\gamma^a\widetilde\lambda)_{\bar\alpha}$ for arbitrary local parameters, with conventions as in Postulate references. Write $K^\alpha{}_\beta=\lambda^\alpha w_\beta$ and $\widetilde K^{\bar\alpha}{}_{\bar\beta}=\widetilde\lambda^{\bar\alpha}\widetilde w_{\bar\beta}$, always in this order.

The action, source equations (2.2)–(2.3), is
$$\begin{aligned} S={1\over2\pi\alpha'}\int d^2z\,[&\tfrac12\Pi^a\bar\Pi^b\eta_{ab}+\tfrac12\Pi^A\bar\Pi^B B_{BA}+d_\alpha\bar\Pi^\alpha+\widetilde d_{\bar\alpha}\Pi^{\bar\alpha}\\&+K^\alpha{}_\beta\bar\Omega_\alpha{}^\beta+\widetilde K^{\bar\alpha}{}_{\bar\beta}\widetilde\Omega_{\bar\alpha}{}^{\bar\beta}+d_\alpha\widetilde d_{\bar\beta}P^{\alpha\bar\beta}\\&+K^\alpha{}_\beta\widetilde d_{\bar\gamma}C_\alpha{}^{\beta\bar\gamma}+\widetilde K^{\bar\alpha}{}_{\bar\beta}d_\gamma\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}+K^\alpha{}_\beta\widetilde K^{\bar\alpha}{}_{\bar\beta}S_{\alpha\bar\alpha}{}^{\beta\bar\beta}] + S_{\mathrm{pure}}+S_{FT},\\ S_{FT}&={1\over2\pi}\int d^2z\,r\Phi(Z).\end{aligned}$$
Here $B$ is the graded superspace two-form, $P$ the RR bispinor superfield, and $r$ the worldsheet scalar-curvature density in the source convention. The worldsheet connection pullbacks are $\bar\Omega_\alpha{}^\beta=\bar\Pi^A\Omega_{A\alpha}{}^\beta$ and $\widetilde\Omega_{\bar\alpha}{}^{\bar\beta}=\Pi^A\widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}$. $S_{\mathrm{pure}}$ is the free minimal constrained first-order ghost action: on independent local pure-spinor coordinates $\gamma^i,\widetilde\gamma^i$ and their conjugates $\beta_i,\widetilde\beta_i$ its action is $S_{\mathrm{pure}}=(2\pi\alpha')^{-1}\int d^2z\,(\beta_i\bar\partial\gamma^i+\widetilde\beta_i\partial\widetilde\gamma^i)$, with the conjugates normalized by the source canonical bracket. The sign/rescaling of these conjugates is part of this source convention; the action is not obtained by silently identifying the momentum normalization with another reference's flat action. There is no nonminimal quartet here.

The independent left and right structure connections include a scale part and a Lorentz part. To state all gauge-compatible couplings, put $G_{ab}=\gamma^{ab}$ on the first spin bundle and $\widetilde G_{ab}=\gamma^{ab}$ on the second. The source decomposition (2.4) is
$$\begin{aligned} \Omega_{A\alpha}{}^\beta&=\Omega_A\delta_\alpha{}^\beta+\tfrac14\Omega_{Aab}(G^{ab})_\alpha{}^\beta,&\widetilde\Omega_{A\bar\alpha}{}^{\bar\beta}&=\widetilde\Omega_A\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde\Omega_{Aab}(\widetilde G^{ab})_{\bar\alpha}{}^{\bar\beta},\\ C_\alpha{}^{\beta\bar\gamma}&=C^{\bar\gamma}\delta_\alpha{}^\beta+\tfrac14 C_{ab}{}^{\bar\gamma}(G^{ab})_\alpha{}^\beta,&\widetilde C_{\bar\alpha}{}^{\bar\beta\gamma}&=\widetilde C^\gamma\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde C_{ab}{}^\gamma(\widetilde G^{ab})_{\bar\alpha}{}^{\bar\beta},\\ S_{\alpha\bar\alpha}{}^{\beta\bar\beta}&=S\delta_\alpha{}^\beta\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14 S_{ab}(G^{ab})_\alpha{}^\beta\delta_{\bar\alpha}{}^{\bar\beta}+\tfrac14\widetilde S_{ab}\delta_\alpha{}^\beta(\widetilde G^{ab})_{\bar\alpha}{}^{\bar\beta}\\&\quad+\tfrac1{16}S_{abcd}(G^{ab})_\alpha{}^\beta(\widetilde G^{cd})_{\bar\alpha}{}^{\bar\beta}.\end{aligned}$$
No scale component is set to zero merely because the Lorentz connection is present.

The independent weight-$(1,1)$ operator families used in the source's one-loop expansion are the products of one entry from each list
$$ (\Pi^a,\Pi^\alpha,d_\alpha,K^\alpha{}_\beta),\qquad(\bar\Pi^a,\bar\Pi^{\bar\alpha},\widetilde d_{\bar\alpha},\widetilde K^{\bar\alpha}{}_{\bar\beta}).$$
Independence is in the source's pure-spinor-gauge quotient and classical equations-of-motion basis, not in an unconstrained sixteen-pair ghost theory. The other spinor pullbacks are eliminated by the actual equations
$$\bar\Pi^\alpha+\widetilde d_{\bar\beta}P^{\alpha\bar\beta}+\widetilde K^{\bar\beta}{}_{\bar\gamma}\widetilde C_{\bar\beta}{}^{\bar\gamma\alpha}=0,\qquad \Pi^{\bar\alpha}-d_\beta P^{\beta\bar\alpha}+K^\beta{}_\gamma C_\beta{}^{\gamma\bar\alpha}=0.$$
This specifies the coupling slots referred to after source (4.6); no finite one-loop coefficient or vanishing theorem is included in this postulate.

The background tensors are the supervielbein torsions $T,\widetilde T$, the two connection curvatures $R,\widetilde R$, and $H=dB$. Covariant differentiation uses the left or right connection on each corresponding spinor index. The source classical background premises are nilpotent, anticommuting charges $Q=\oint\lambda^\alpha d_\alpha$ and $\widetilde Q=\oint\widetilde\lambda^{\bar\alpha}\widetilde d_{\bar\alpha}$ and conserved currents $\bar\partial(\lambda d)=\partial(\widetilde\lambda\widetilde d)=0$ on the classical equations of motion. The nilpotency and anticommutation conditions (2.5)–(2.7), for all pure spinors, are

$$\lambda^\alpha \lambda^\beta H_{\alpha\beta A} = \lambda^\alpha \lambda^\beta \lambda^\gamma R_{\alpha\beta\gamma}{}^\delta = \lambda^\alpha \lambda^\beta \widetilde R_{\alpha\beta\bar\gamma}{}^{\bar\delta} = 0,$$

$$\lambda^\alpha \lambda^\beta T_{\alpha\beta}{}^a = \lambda^\alpha \lambda^\beta T_{\alpha\beta}{}^\gamma = \lambda^\alpha \lambda^\beta T_{\alpha\beta}{}^{\bar\gamma} = 0,$$

$$\widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} H_{\bar\alpha\bar\beta A} = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} R_{\bar\alpha\bar\beta\gamma}{}^\delta = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} \widetilde\lambda^{\bar\gamma} \widetilde R_{\bar\alpha\bar\beta\bar\gamma}{}^{\bar\delta} = 0,$$

$$\widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} T_{\bar\alpha\bar\beta}{}^a = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} T_{\bar\alpha\bar\beta}{}^\gamma = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} \widetilde T_{\bar\alpha\bar\beta}{}^{\bar\gamma} = 0.$$

$$H_{\alpha\bar\beta A} = T_{\alpha\bar\beta}{}^a = T_{\alpha\bar\beta}{}^\gamma = T_{\alpha\bar\beta}{}^{\bar\gamma} = \lambda^\alpha \lambda^\beta R_{\bar\gamma\alpha\beta}{}^\delta = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} \widetilde R_{\gamma\bar\alpha\bar\beta}{}^{\bar\delta} = 0.$$

The holomorphicity conditions (2.15) are the following vanishing expressions:

$$T_{\alpha(ab)} = H_{\alpha ab} = T_{\alpha\beta a} - H_{\alpha\beta a} = T_{a\alpha}{}^\beta = T_{a\alpha}{}^{\bar\beta} + P^{\gamma\bar\beta} T_{\gamma\alpha a} = \lambda^\alpha \lambda^\beta R_{a\alpha\beta}{}^\gamma = 0,$$

$$\widetilde R_{a\alpha\bar\beta}{}^{\bar\gamma} - \widetilde C_{\bar\beta}{}^{\bar\gamma\delta} T_{\delta\alpha a} = T_{\gamma\alpha}{}^{\bar\beta} + \frac12 P^{\delta\bar\beta} H_{\delta\gamma\alpha} = \widetilde R_{\delta\alpha\bar\beta}{}^{\bar\gamma} + \frac12 \widetilde C_{\bar\beta}{}^{\bar\gamma\rho} H_{\rho\delta\alpha} = P^{\delta\bar\gamma} T_{\delta\alpha}{}^\beta - \nabla_\alpha P^{\beta\bar\gamma} - C_\alpha{}^{\beta\bar\gamma} = 0,$$

$$\nabla_\alpha \widetilde C_{\bar\beta}{}^{\bar\gamma\delta} + \widetilde C_{\bar\beta}{}^{\bar\gamma\rho} T_{\rho\alpha}{}^\delta + P^{\delta\bar\rho} \widetilde R_{\bar\rho\alpha\bar\beta}{}^{\bar\gamma} - S_{\alpha\bar\beta}{}^{\delta\bar\gamma} = \lambda^\alpha \lambda^\beta ( \nabla_\alpha C_\beta{}^{\gamma\bar\delta} - P^{\rho\bar\delta} R_{\rho\alpha\beta}{}^\gamma ) = 0,$$

$$\lambda^\alpha \lambda^\beta ( \nabla_\alpha S_{\beta\bar\delta}{}^{\gamma\bar\rho} + C_\beta{}^{\gamma\bar\sigma} \widetilde R_{\bar\sigma\alpha\bar\delta}{}^{\bar\rho} + \widetilde C_{\bar\delta}{}^{\bar\rho\sigma} R_{\sigma\alpha\beta}{}^\gamma ) = 0,$$

The antiholomorphicity conditions (2.16) are:

$$T_{\bar\alpha(ab)} = H_{\bar\alpha ab} = T_{\bar\alpha\bar\beta a} + H_{\bar\alpha\bar\beta a} = T_{a\bar\alpha}{}^{\bar\beta} = T_{a\bar\alpha}{}^\beta - P^{\beta\bar\gamma} T_{\bar\gamma\bar\alpha a} = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} \widetilde R_{a\bar\alpha\bar\beta}{}^{\bar\gamma} = 0,$$

$$R_{a\bar\alpha\beta}{}^\gamma - C_\beta{}^{\gamma\bar\delta} T_{\bar\delta\bar\alpha a} = T_{\bar\gamma\bar\alpha}{}^\beta + \frac12 P^{\beta\bar\delta} H_{\bar\gamma\bar\delta\bar\alpha} = R_{\bar\delta\bar\alpha\beta}{}^\gamma + \frac12 C_\beta{}^{\gamma\bar\rho} H_{\bar\delta\bar\rho\bar\alpha} = P^{\beta\bar\delta} T_{\bar\delta\bar\alpha}{}^{\bar\gamma} - \nabla_{\bar\alpha} P^{\beta\bar\gamma} + \widetilde C_{\bar\alpha}{}^{\bar\gamma\beta} = 0,$$

$$\nabla_{\bar\alpha} C_\beta{}^{\gamma\bar\delta} + C_\beta{}^{\gamma\bar\rho} T_{\bar\rho\bar\alpha}{}^{\bar\delta} - P^{\rho\bar\delta} R_{\rho\bar\alpha\beta}{}^\gamma - S_{\beta\bar\alpha}{}^{\gamma\bar\delta} = \widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} ( \nabla_{\bar\alpha} \widetilde C_{\bar\beta}{}^{\bar\gamma\delta} + P^{\delta\bar\rho} \widetilde R_{\bar\rho\bar\alpha\bar\beta}{}^{\bar\gamma} ) = 0,$$

$$\widetilde\lambda^{\bar\alpha} \widetilde\lambda^{\bar\beta} ( \nabla_{\bar\alpha} S_{\delta\bar\beta}{}^{\rho\bar\gamma} + C_\delta{}^{\rho\bar\sigma} \widetilde R_{\bar\sigma\bar\alpha\bar\beta}{}^{\bar\gamma} + \widetilde C_{\bar\beta}{}^{\bar\gamma\sigma} R_{\sigma\bar\alpha\delta}{}^\rho ) = 0.$$

All products, free indices and signs in these equations are in the source order. Symmetrization is graded: interchanging homogeneous superindices $A,B$ in an antisymmetrization contributes $-(-1)^{|A||B|}$, with $|a|=0$ and $|\alpha|=|\bar\alpha|=1$.

The torsion, three-form and curvature Bianchi identities adopted in the same convention are
$$\nabla_{[A}T_{BC]}{}^D+T_{[AB}{}^E T_{EC]}{}^D-R_{[ABC]}{}^D=0,$$
$$\nabla_{[A}H_{BCD]}+\tfrac32T_{[AB}{}^E H_{ECD]}=0,\qquad \nabla_{[A}R_{BC]D}{}^E+T_{[AB}{}^F R_{FC]D}{}^E=0.$$
Use $\widetilde R$ and the corresponding connection for an output right-spinor index; with vector output either stated connection gives its own torsion Bianchi identity. The $H$ identities for the two connections express the same $dH=0$ condition. These are background identities, not a quantum Ward-identity restoration result.

Finally adopt the source ghost-number/dilaton compatibility equation (2.21),
$$\nabla_\alpha\Phi=4\Omega_\alpha,\qquad\nabla_{\bar\alpha}\Phi=4\widetilde\Omega_{\bar\alpha}.$$
This is an explicit source background premise. It is not deduced here from classical torsion Bianchi identities alone, nor promoted to a construction of a regulator or measure.

## Postulate references

[[post-pure-spinor-superstring-model]]

[Oscar A. Bedoya and Osvaldo Chandía, *One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background*, arXiv:hep-th/0609161v2](https://arxiv.org/pdf/hep-th/0609161v2), §§2–2.5, equations (2.2)–(2.7), (2.11), (2.15)–(2.21), and the operator basis described following (4.6).
