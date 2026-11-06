---
id: ex-st-pure-spinor-curvature-ft-source-contact
kind: example
title: Curvature-Current and Fradkin-Tseytlin Source Contacts
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
category: string-theory
deps:
  - lem-st-pure-spinor-cone-volume-current-cocycle
  - def-st-pure-spinor-quantum-bv-data
dependency_roles:
  lem-st-pure-spinor-cone-volume-current-cocycle: mathematical-premise
  def-st-pure-spinor-quantum-bv-data: formulation-prerequisite
physical_scope: "Only the stated original-convention curvature-current/Fradkin–Tseytlin contact channel; not a complete anomaly or conformal-invariance test."
empirical_limits: "No measurements or empirical confirmation are asserted."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Oscar A. Bedoya and Osvaldo Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§2.1–2.2, equations (2.2), (2.5)–(2.7), (2.15)–(2.16), and §2.5, equation (2.21): original action/BRST, current-conservation, and dilaton-connection conventions."
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3–3.4, PDF pp. 50–54: constrained-current volume cocycle and ordered third-pole convention."
    - title: "Osvaldo Chandia and Brenno Carlini Vallilo, Non-minimal fields of the pure spinor string in general curved backgrounds"
      url: "https://arxiv.org/pdf/1412.1030v1"
      locator: "§3.1, equations (3.1)–(3.11), including the conventional constraints (3.3): type-II canonical momenta, the full minimal Qd transformation, and its field-dependent Lorentz parameter; the AdS specialization in §4 is not used."
proof_strategy: direct
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Use [[def-st-pure-spinor-quantum-bv-data]] and [[lem-st-pure-spinor-cone-volume-current-cocycle]]. In the Euclidean source-contact chart $z=x+iy$, use $d^2z=dx\,dy$, $\partial_z=\tfrac12(\partial_x-i\partial_y)$ and $\bar\partial_z=\tfrac12(\partial_x+i\partial_y)$. Let $\delta_{\rm source}(z-w)$ be the Dirac distribution with $\langle\delta_{\rm source}(\cdot-w),\sigma\rangle=\sigma(w)$ for $\sigma\in C_c^\infty(\mathbb C)$. These are contact-chart derivatives, separate from the real canonical-time notation. For this contact channel additionally impose the source's conventional dimension-zero data: for odd frame indices $A,B$ and any odd output $\delta$, $T_{AB}{}^\delta=0$ (using the corresponding left or right connection); all components of $H$ with three odd indices vanish; $T_{\alpha\bar\beta}{}^a=0$; and $T_{\alpha\beta a}=H_{\alpha\beta a}=(\gamma_a)_{\alpha\beta}$ and $\widetilde T_{\bar\alpha\bar\beta a}=-H_{\bar\alpha\bar\beta a}=(\widetilde\gamma_a)_{\bar\alpha\bar\beta}$. These are additional conventional background assumptions, not consequences of the pure-spinor-contracted constraints alone. Use the displayed canonical transformation as the specified source-convention input on this branch. For fixed left odd index $\alpha$, its field-dependent Lorentz parameter and transformation are

$$\Sigma_\alpha{}^\beta=\lambda^\gamma\Omega_{\gamma\alpha}{}^\beta+\widetilde\lambda^{\bar\gamma}\Omega_{\bar\gamma\alpha}{}^\beta,\qquad Q_c d_\alpha=\Sigma_\alpha{}^\beta d_\beta+(\gamma_a\lambda)_\alpha\Pi^a+V_\alpha{}^\delta w_\delta,$$

where the actual curvature-current coefficient is

$$V_\alpha{}^\delta=\lambda^\beta R_{\beta\alpha\gamma}{}^\delta\lambda^\gamma+\widetilde\lambda^{\bar\beta}R_{\bar\beta\alpha\gamma}{}^\delta\lambda^\gamma.$$

Here $R_{AB\alpha}{}^\beta$ is the curvature of the left spinor connection and $r_{AB}$ its scale-curvature component. As in [[def-st-pure-spinor-quantum-bv-data]], $\gamma^{mn}$ is the Weyl block of $\frac12[\Gamma^m,\Gamma^n]$; thus $R_{BA\alpha}{}^\delta=r_{BA}\delta_\alpha{}^\delta+\frac14R_{BA,mn}(\gamma^{mn})_\alpha{}^\delta$. Set $t_{\alpha\beta}=R_{\alpha\gamma\beta}{}^\gamma$. Then

$$\operatorname{div}_\Omega V_\alpha=\lambda^\beta(t_{\alpha\beta}+8r_{\beta\alpha})+8\widetilde\lambda^{\bar\beta}r_{\bar\beta\alpha}.$$

On the branch $\Omega_{\bar\beta}=0$, the supplier's directional-derivative convention gives $r_{\bar\beta\alpha}=D_{\bar\beta}\Omega_\alpha-c_{\bar\beta\alpha}{}^C\Omega_C$, where $[E_{\bar\beta},E_\alpha]=c_{\bar\beta\alpha}{}^CE_C$ is the graded frame commutator. With $D_\alpha\Phi=4\Omega_\alpha$, the opposite-ghost term is $2\widetilde\lambda^{\bar\beta}D_{\bar\beta}D_\alpha\Phi-8\widetilde\lambda^{\bar\beta}c_{\bar\beta\alpha}{}^C\Omega_C$. The simpler first term is recovered if $c_{\bar\beta\alpha}{}^C\Omega_C=0$ is additionally imposed; vanishing mixed torsion alone does not imply this condition. The source conjugate has local components $w_i=\beta_i$. Since the current convention of [[lem-st-pure-spinor-cone-volume-current-cocycle]] is $j_{V_\alpha}=-:\!\beta_iV_\alpha{}^i\!:$, the actual Qd term $+w_iV_\alpha{}^i$ is $-j_{V_\alpha}$, so its third-pole coefficient is $-\alpha'\operatorname{div}_\Omega V_\alpha$. The original left-odd simple poles are $\Phi(z)d_\beta(w)\sim-\alpha'D_\beta\Phi/(z-w)$ and $\Phi(z)\Pi^a(w)\sim+\alpha'D^a\Phi/(z-w)$. With $U_\alpha=(\gamma_a\lambda)_\alpha D^a\Phi-\Sigma_\alpha{}^\beta D_\beta\Phi$, the left Fradkin–Tseytlin insertion $T_{\rm FT,L}=\partial^2\Phi$ contributes $2\alpha'U_\alpha/(z-w)^3$. The computed partial third-pole coefficient is therefore $\alpha'[-\operatorname{div}_\Omega V_\alpha+2U_\alpha]$; the opposite-chirality insertion also gives the distribution $\pi\alpha'U_\alpha\bar\partial_z\delta_{\rm source}(z-w)$, whose pairing with a test function $\sigma$ is $-\pi\alpha'U_\alpha\bar\partial\sigma(w)$ under $\bar\partial(1/z)=\pi\delta_{\rm source}$. These are only the specified curvature/FT source contacts.

## Statement references

[[def-st-pure-spinor-quantum-bv-data]]

[[lem-st-pure-spinor-cone-volume-current-cocycle]]

[Bedoya–Chandía, original curved-model conventions](https://arxiv.org/pdf/hep-th/0609161v2)

[Nekrasov, local constrained-current pole](https://arxiv.org/pdf/hep-th/0511008v1)

[Chandía–Vallilo, type-II canonical transformation and full $Qd_\alpha$](https://arxiv.org/pdf/1412.1030v1)

## Facts & Assumptions

**Given:** The stated original left-odd OPE signs, curvature action on the constrained cone, positive third-pole convention, and distribution normalization.

[F1] [[lem-st-pure-spinor-cone-volume-current-cocycle]] proves $\operatorname{div}(fX)=f\operatorname{div}X+X(f)$, Euler divergence eight, zero Spin divergence, and the current third-pole rule.

[F2] [[def-st-pure-spinor-quantum-bv-data]] fixes the physical action, pure-spinor quotient, and the source's dilaton/connection convention $D_\alpha\Phi=4\Omega_\alpha$; it does not assert an anomaly cancellation.

[F3] Chandía–Vallilo (1412.1030v1), §3.1, equations (3.1)–(3.11), use the conventional constraints (3.3), including the uncontracted dimension-zero torsions stated in the Example, before computing the type-II $Qd_\alpha$ transformation from their canonical charge and equal-time brackets. Their $P_M=\delta S_{\rm CV,lead}/\delta(\partial_0Z^M)$ equals $2\pi\alpha'\,\delta S_{\rm lead}^{\rm Lag}/\delta(\partial_0Z^M)$ here: their equation (3.1) writes the leading integrand without an overall coefficient, whereas $S_{\rm lead}^{\rm Lag}$ here has the outside factor $1/(2\pi\alpha')$. The derivative is of the leading action, with the separately written Fradkin–Tseytlin term excluded. This agrees with Bedoya–Chandía (hep-th/0609161v2), equation (2.2) and the paragraph preceding (2.5), where the same momentum is explicitly $(2\pi\alpha')\delta S/\delta(\partial_0Z^M)$. Chandía–Vallilo's $d_\alpha$ relation (3.8), charge (3.2), and transformation (3.9) then match the source data above with $\omega_\alpha=w_\alpha$ and their hatted right-spinor indices identified with the present barred indices. Their equation (3.11) is exactly the $\Sigma$ displayed in the Example. Their canonical brackets are used only in the gauge-invariant pure-spinor combinations, as stated in their footnote 4. Section 4 treats a special $AdS_5\times S^5$ background and is not transferred here.

[A1] Use the additional conventional background data and supplied canonical transformation in the Example, the specified curvature/scale-connection branch, the original left-odd pole ordering, and $\bar\partial(1/z)=\pi\delta_{\rm source}$. The field-dependent coefficient derivative is included. No term outside this partial source channel is assumed to vanish.

## Proof

1.1 For a fixed curvature component, the fundamental cone vector $X_{BA}=(R_{BA}\lambda)^\delta\partial_{\lambda^\delta}$ has divergence $8r_{BA}$: its scale part is $r_{BA}E$, which contributes eight by [F1], and its Spin part contributes zero. Applying $\operatorname{div}(fX)=f\operatorname{div}X+X(f)$ to $f=\lambda^\beta$ adds $R_{\beta\alpha\gamma}{}^\beta\lambda^\gamma$; the right ghost coefficient is constant along the left cone and contributes only its scale trace. Graded symmetry of the two left odd curvature slots and relabelling indices give the displayed $\lambda^\beta(t_{\alpha\beta}+8r_{\beta\alpha})+8\widetilde\lambda^{\bar\beta}r_{\bar\beta\alpha}$. This computes the divergence of $V_\alpha$; since $w_i=\beta_i$ and the full $Q_cd_\alpha$ term is $+w_iV_\alpha{}^i=-j_{V_\alpha}$, its stress-tensor pole has the negative of this divergence. [F1, F2, F3, algebra]

2.1 In the scale-curvature formula of [F2], both indices $\bar\beta,\alpha$ are odd. Setting $\Omega_{\bar\beta}=0$ gives $r_{\bar\beta\alpha}=D_{\bar\beta}\Omega_\alpha-c_{\bar\beta\alpha}{}^C\Omega_C$. Substituting $\Omega_\alpha=\tfrac14D_\alpha\Phi$ yields $8\widetilde\lambda^{\bar\beta}r_{\bar\beta\alpha}=2\widetilde\lambda^{\bar\beta}D_{\bar\beta}D_\alpha\Phi-8\widetilde\lambda^{\bar\beta}c_{\bar\beta\alpha}{}^C\Omega_C$. This retains the frame term without identifying the frame commutator with torsion. If its contracted coefficient vanishes, the previously displayed directional-derivative specialization follows. [F2, step 1.1, algebra]

2.2 Contracting the two stated simple poles with $\partial^2\Phi(z)$ differentiates twice in the insertion coordinate $z$. The $d_\beta$ term gives $-\alpha'\Sigma_\alpha{}^\beta D_\beta\Phi$ before differentiation, while the $\Pi^a$ term gives $+\alpha'(\gamma_a\lambda)_\alpha D^a\Phi$; since $\partial_z^2(z-w)^{-1}=2(z-w)^{-3}$, their sum is $2\alpha'U_\alpha/(z-w)^3$. Adding the source-current pole $-\alpha'\operatorname{div}_\Omega V_\alpha$ identified in step 1.1 gives exactly the stated partial coefficient. No derivative of a coefficient at $w$ is used in this simple-pole calculation. [A1, F1, F2, F3, step 1.1, algebra]

3.1 The locally integrable Cauchy kernel has $\bar\partial_z(1/z)=\pi\delta_{\rm source}$: integration by parts on the complement of a disk gives $-\int z^{-1}\bar\partial\sigma\,dx\,dy=\lim_{\varepsilon\downarrow0}\frac1{2i}\oint_{|z|=\varepsilon}\sigma(z)z^{-1}dz=\pi\sigma(0)$, with the circle positively oriented. Applying the opposite-chirality FT insertion to the left simple pole uses $\bar\partial_z(1/(z-w))=\pi\delta_{\rm source}(z-w)$ and yields $\pi\alpha'U_\alpha\bar\partial_z\delta_{\rm source}(z-w)$ in the stated Euclidean area normalization. For a test function $\sigma$, distributional integration by parts gives $\int d^2z\,\sigma(z)\bar\partial_z\delta_{\rm source}(z-w)=-\bar\partial\sigma(w)$, proving the stated contact pairing. Other pole orders, matter normal products, canonical endpoint terms, right-source partners and the full BV density contribution are not evaluated here; hence no full anomaly or cancellation follows. [A1, step 2.2, algebra] ∎

## Scope boundary

The full source insertions also contain $\Sigma_\alpha{}^\beta d_\beta$ and $(\gamma_a\lambda)_\alpha\Pi^a$; only their stated FT simple-pole contractions are evaluated here. Other pole orders, target-coefficient contractions, canonical endpoint/momentum partners, the $C,\widetilde C,S$ interaction vertices, the opposite right source, and the full regulated BV density remain unevaluated. The inspected research note `constrained-ghost-weyl-current.md` separately derives the classical scalar-current source cancellation after independent-coupling pullback. That redundant-source identity does not establish the one-loop QME, cone boundary prescription, or restored eight-slot BV comparison and is not used to cancel this partial sum.
