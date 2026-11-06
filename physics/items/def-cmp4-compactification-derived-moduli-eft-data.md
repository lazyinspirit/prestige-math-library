---
id: def-cmp4-compactification-derived-moduli-eft-data
kind: definition
title: Compactification-derived four-dimensional moduli EFT data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-4d-moduli-effective-field-theory
dependency_level: 14
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp-type-iib-o3o7-chiral-coordinates
  - pthm-cmp-type-iib-o3o7-kahler-and-gauge-couplings
  - post-four-dimensional-n1-matter-coupled-supergravity
  - pthm-four-dimensional-n1-fd-scalar-potential
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp-type-iib-o3o7-chiral-coordinates: formulation-prerequisite
  pthm-cmp-type-iib-o3o7-kahler-and-gauge-couplings: physical-result
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A declared Type IIB Calabi–Yau orientifold EFT chart at two derivatives in four-dimensional Einstein frame; every retained or omitted sector, correction, cutoff, frame, unit, and approximation regime must be identified, and no vacuum or consistent truncation is asserted."
empirical_premises: []
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§§3.1–3.2, especially equations (3.25)–(3.27) and (3.33); O3/O7 chiral coordinates and the large-volume unwarped Kähler/gauge data."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§§3–4, especially §3.5; moduli EFT data and corrections."
    - title: "V. Balasubramanian, P. Berglund, J. P. Conlon, and F. Quevedo, Systematics of Moduli Stabilisation in Calabi-Yau Flux Compactifications, arXiv:hep-th/0502058v2"
      url: "https://arxiv.org/pdf/hep-th/0502058v2"
      locator: "§2, equations (3)–(17); distinct flux and nonperturbative contributions in a specified model."
    - title: "Ruy Exel, Partial Group Actions, course notes taken by Eusebio Gardella"
      url: "https://www.math.chalmers.se/~gardella/Docs/Notes/Exel2013.pdf"
      locator: "§1, Definition 1.1 and its equivalent domain identities, pp. 1–2; set-level partial-action axioms adapted here to smooth right actions."
---

## Definition

A compactification-derived two-derivative four-dimensional $N=1$ moduli effective field theory on a declared field patch consists of retained chiral coordinates $Z^I$, a real Kähler potential $K=M_P^2\mathcal K$, a holomorphic superpotential $W$, holomorphic gauge-kinetic functions $f_{AB}$, any gauged isometries and real moment maps $P_A$, a four-dimensional Einstein metric and Planck mass $M_P$, the truncation domain and cutoff, and the omitted Kaluza–Klein, warped-throat, open-string, and string states. The field patch is an open complex coordinate domain $U\subseteq\mathbb C^n$, $n\ge1$, with coordinates $Z^I$; the real potential $K\in C^2(U)$ specifies the positive Hermitian scalar metric $K_{I\bar J}=\partial_I\partial_{\bar J}K$, and the real two-form convention is $\omega=iK_{I\bar J}dZ^I\wedge d\bar Z^{\bar J}$.

If gauging is present, specify a finite-dimensional real Lie group $G$, meaning a smooth real manifold with smooth multiplication and inversion satisfying the group axioms. Its Lie algebra is $\mathfrak g=T_eG$, with bracket induced by left-invariant vector fields; for a basis $T_A$, write $[T_A,T_B]=f_{AB}{}^CT_C$. Use the right-action convention. A global action is a smooth map $\Phi:G\times U\to U$ with $\Phi_e(Z)=Z$ and $\Phi_h(\Phi_g(Z))=\Phi_{gh}(Z)$ for all $g,h\in G$ and $Z\in U$.

A smooth partial right action consists of open subsets $U_g\subseteq U$ with $U_e=U$ and biholomorphisms $\Phi_g:U_{g^{-1}}\to U_g$ with $\Phi_{g^{-1}}=\Phi_g^{-1}$. It satisfies $\Phi_g(U_{g^{-1}}\cap U_h)=U_g\cap U_{hg}$ for all $g,h\in G$, and $\Phi_h(\Phi_g(Z))=\Phi_{gh}(Z)$ for every $Z\in U_{g^{-1}}\cap U_{(gh)^{-1}}$. Its graph domain is $D=\{(g,Z)\in G\times U:Z\in U_{g^{-1}}\}$, required to be open, and $(g,Z)\mapsto\Phi_g(Z)$ is smooth on $D$. For either kind of action, each $\Phi_g$ preserves the Hermitian metric $K_{I\bar J}dZ^I\otimes d\bar Z^{\bar J}$ on its domain.

For the basis $T_A$, define the real fundamental vector field pointwise by $X_A|_Z=\left.\frac{d}{dt}\right|_{t=0}\Phi_{\exp(tT_A)}(Z)$; in holomorphic coordinates write $X_A=k_A^I\partial_I+\overline{k_A^I}\partial_{\bar I}$, with holomorphic coefficients $k_A^I$. For a partial action the derivative is defined because its open graph contains $(e,Z)$ for every $Z$. With this right-action convention, $[X_A,X_B]=f_{AB}{}^CX_C$. A chosen Hamiltonian lift supplies real $C^1$ functions $P_A$ satisfying
$$dP_A=\iota_{X_A}\omega,\qquad \partial_{\bar J}P_A=iK_{I\bar J}k_A^I,\qquad \partial_IP_A=-iK_{I\bar J}\overline{k_A^J},\qquad X_A(P_B)=f_{AB}{}^CP_C.$$
These equations fix the moment-map sign and equivariance convention. The gauge-covariant derivative is $D_\mu Z^I=\partial_\mu Z^I-A_\mu^Ak_A^I$; any gauge coupling is absorbed consistently into the chosen generators, gauge fields and $P_A$. The allowed additive constants in $P_A$ are part of that lift; an FI constant is admitted only with the compatible Kähler-line and gauged $R$-symmetry data of the adopted supergravity supplier. A generic isometry is not asserted to admit such a lift. In an ungauged patch this list is empty. Coordinates are recorded in a declared chart and normalization; here $\mathcal K$ and $Z^I$ are dimensionless, $[K]=\mathrm{mass}^2$, $[W]=\mathrm{mass}^3$, $[P_A]=\mathrm{mass}^2$, $[f_{AB}]=1$, and $[M_P]=\mathrm{mass}$. Each contribution from tree-level geometry, flux, nonperturbative effects, $\alpha'$ corrections, string loops, or warping is separately identified with its approximation regime and source. The Type IIB O3/O7 chiral coordinates and large-volume Kähler/gauge data use the exact current conditional interfaces recorded below, with their actual proof scope and readiness. The standard F- and D-term scalar potential is identified with the full zero-derivative potential only under the additional assumption that the adopted old-minimal auxiliary sector generates it entirely, with no auxiliary-independent contribution. Any such additional contribution is separate model data and must be added explicitly to the auxiliary-generated expression. This data tuple alone asserts neither a critical point nor a valid uplift or scale-separated truncation.

## Definition references

[Grimm and Louis, §§3.1–3.2](https://arxiv.org/pdf/hep-th/0403067v3)

[McAllister and Quevedo, §§3–4](https://arxiv.org/pdf/2310.20559v1)

[Balasubramanian, Berglund, Conlon, and Quevedo, §2](https://arxiv.org/pdf/hep-th/0502058v2)

[Ruy Exel, *Partial Group Actions*, Definition 1.1 and the equivalent domain identities, pp. 1–2](https://www.math.chalmers.se/~gardella/Docs/Notes/Exel2013.pdf)

## Facts & Assumptions

**Given:** A specified Type IIB Calabi–Yau orientifold, a retained field patch, a four-dimensional Einstein-frame convention, and a two-derivative expansion domain.

[F1] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] defines the Kähler-cone coordinates $v^a$, intersection numbers, total volume $\mathcal V$, and divisor-volume coordinates $\tau_a$ when the divisor basis is supplied.

[F2] [[def-cmp-type-iib-o3o7-chiral-coordinates]] is a current definition on the batch-78 A page. Its statement uses the dimensionless string-unit even-sector class $[J]=v^\alpha[\omega_\alpha]$, with selected smooth closed representatives for intersection integrals and no assumed equality of form representatives, the odd/even intersection numbers, $\tau=l+i e^{-\phi}$, $G^a=c^a-\tau b^a$, $K_\alpha=\kappa_{\alpha\beta\gamma}v^\beta v^\gamma$, $\zeta_\alpha=-i[2(\tau-\bar\tau)]^{-1}\kappa_{\alpha bc}G^b(G^c-\bar G^c)$, and $T_\alpha=(3i/2)\rho_\alpha+(3/4)K_\alpha-(3/2)\zeta_\alpha$. It restricts the coordinates to local patches where the real Jacobian from $v^\alpha$ to $\operatorname{Re}T_\alpha$ is nonsingular, uses the source's four-dimensional Einstein frame and imposes five-form self-duality before choosing $\rho_\alpha$, and states no global chart. The carrier's current Step 1 readiness record is missing; its definition status and pending precheck are not themselves the blocker.

[F3] [[pthm-cmp-type-iib-o3o7-kahler-and-gauge-couplings]] is a current physics-theorem carrier on the batch-78 A page. Its statement gives $\mathcal K=-\log[i\int_X\Omega\wedge\bar\Omega]-\log[-i(\tau-\bar\tau)]-2\log\mathcal V$ and $f_{\kappa\lambda}=-(i/2)\mathcal F_{\kappa\lambda}$ in the source's local even-vector symplectic frame, with open-string fields frozen and no flux-generated $W$ or scalar potential. Its complete proof conditionally matches the adopted source-reported four-dimensional closed-sector kinetic action to the local $N=1$ action; it explicitly does not derive that kinetic action from ten dimensions. Its corrected source coefficient is obtained by matching Grimm–Louis actions (3.21) and (3.23); equations (3.31) and (3.33) give that same negative sign. The result uses the explicitly parity-adapted symplectic frame and local orientifold-slice period hypotheses stated by that supplier. The current carrier is placed, but its Step 1 readiness record is missing and its adopted kinetic-action, coordinate, $N=2$ period, and mathematical-metric inputs are not all current-ready; this use remains conditional.

[F4] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the local two-derivative four-dimensional Einstein-frame $N=1$ action, with dimensionful $K$, holomorphic $W$ and $f_{AB}$, and $M_P>0$.

[F5] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]] conditionally gives $V=e^{K/M_P^2}[K^{I\bar J}D_IW\overline{D_JW}-3|W|^2/M_P^2]+\frac12(\operatorname{Re}f)^{-1\,AB}P_AP_B$ after auxiliary elimination, provided the entire zero-derivative potential comes from that sector and no auxiliary-independent term is present; its current Step 1 record remains escalated for a stale upstream-readiness reason.

[A1] On the declared patch, $K$ is $C^2$ with positive Kähler metric, $W$ and $f_{AB}$ are holomorphic in their specified bundles, and $\operatorname{Re}f$ is positive on the physical gauge sector when the potential is evaluated. Dimensionless coordinates use $K=M_P^2\mathcal K$; a dimensionful coordinate convention must instead be recorded with its corresponding units.

[A2] No formula for $W$, flux tadpole, warping correction, loop correction, or omitted-mode mass is inferred unless that model-specific input is separately supplied.

[A3] Whenever the F- and D-term expression in [F5] is used as the full scalar potential, the zero-derivative scalar Lagrangian is generated solely by its standard old-minimal auxiliary sector. If instead an auxiliary-independent density $-V_{\rm add}$ is separately supplied, the full potential is the auxiliary-generated expression plus $V_{\rm add}$.

## Proof

**Given:** The field patch, units, two-derivative regime, and conditional supplier interfaces [F1]–[F5].

1.1 The current coordinate definition [F2] gives the retained closed-sector coordinates $\tau$, $G^a$, and $T_\alpha$ with the displayed dependence on $\rho_\alpha$, $v^\alpha$, and $\zeta_\alpha$, valid only on its nonsingular local field patches and under its large-radius unwarped O3/O7 hypotheses. It does not identify them with the single overall coordinate of another compactification without a separate specialization. Its current Step 1 readiness record is missing, and its O3/O7 orientifold-data input has no current ready record, so this use remains conditional on those exact inputs. [given, F1, F2, A1, algebra]

1.2 Under [F3], the large-volume unwarped closed-sector $\mathcal K$ and gauge function $f_{\kappa\lambda}$ are separate entries of the EFT data tuple. The theorem's full local proof establishes them only from the adopted four-dimensional kinetic action and stated local periods; it leaves that action's ten-dimensional reduction unresolved. Its current Step 1 record is missing, and the exact coordinate, period, local-metric, and kinetic-action suppliers retain missing or escalated readiness records. The source freezes D-brane fluctuations and supplies neither flux $W$ nor a scalar potential, so those inputs must be separately supplied rather than inferred from [F3]. [given, F3, A1, A2]

2.1 Given the adopted action [F4] and the conditional potential result [F5], the declared $\mathcal K$, $W$, $f_{AB}$, specified action $X_A$, moment maps with $dP_A=\iota_{X_A}\omega$ in the selected lift, and $M_P$ determine the displayed F- and D-term expression whenever the positivity and holomorphy conditions in [A1] hold. Under the auxiliary-only assumption [A3], this expression is the full scalar potential. If a separate term $-V_{\rm add}$ is present in the Lagrangian, it is unaffected by auxiliary elimination, so the full potential is instead that expression plus $V_{\rm add}$. No equation $\partial_I V=0$, no Hessian sign, and no full higher-dimensional omitted-field equation is part of the data tuple; accordingly, those conclusions do not follow from this definition. [given, F4, F5, A1, A2, A3, algebra] ∎
