---
id: def-rns-physical-state-brst-cohomology
kind: definition
title: Conditional RNS Physical-State BRST Cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-local-operator-algebra-conventions
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
  - pthm-rns-criticality-central-charge-cancellation
  - def-st-bosonic-bc-ghost-system
  - def-rns-beta-gamma-superghost-picture-system
  - def-rns-transverse-oscillator-system
  - pthm-rns-open-lightcone-intercepts
  - pthm-rns-closed-lightcone-level-matching
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-local-operator-algebra-conventions: formulation-prerequisite
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
  pthm-rns-criticality-central-charge-cancellation: physical-result
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  def-rns-beta-gamma-superghost-picture-system: formulation-prerequisite
  def-rns-transverse-oscillator-system: formulation-prerequisite
  pthm-rns-open-lightcone-intercepts: physical-result
  pthm-rns-closed-lightcone-level-matching: physical-result
physical_scope: "Conditional definition of the flat critical RNS relative BRST state space in a selected small-Hilbert-space, sector, and picture convention with a supplied ghost-inclusive GSO involution; no nilpotence proof, no-ghost positivity, exceptional-momentum picture isomorphism, or global string measure is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§2.1.6, printed p. 34 (PDF p. 55), equation (2.1.20), half-normalized matter supercurrent; §3.1.2, printed pp. 57–58 (PDF pp. 78–79), equations (3.1.4)–(3.1.8), BRST charge; §3.1.7, printed pp. 64–66 (PDF pp. 85–87), GSO charge."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.4, printed pp. 136–142, super-Virasoro physical-state constraints and Ramond zero-mode condition."
verification:
  precheck: n/a
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
---

## Definition

Fix the local criticality condition $c_{\rm tot}=0$ in each chiral matter-plus-ghost system. The local central-charge calculation gives $c_{\rm tot}=3D/2-15$, so this condition is equivalent to $D=10$. This criticality assumption is separate from BRST nilpotence: even at $D=10$, this definition independently assumes that the displayed $Q_B$ is nilpotent and that the relative subspace is $Q_B$-stable; cancellation of the local central term alone is not asserted to prove either property.

At a fixed target momentum $p\in\mathbb R^{1,9}$ of dimension $L^{-1}$, take the chiral matter, $bc$, and bosonized $\beta\gamma$ algebraic Fock spaces of the flat RNS model. Let $\mathcal C_{\rm all\,pic}(p)$ be their direct sum over the chosen NS or R scalar-exponent picture sectors, and let $\mathcal C_{\rm small}(p)=\ker\eta_0$ inside this sum. All operators below act on the supplied common invariant algebraic domain and preserve $p$; suppress $(p)$ in the chiral formulas. With the declared matter stress tensor $T_m$ and supercurrent $G_m$, define the charge on this total space, with $G_m$ twice the half-normalized source supercurrent, by
$$Q_B=Q_0+Q_1+Q_2,$$
$$Q_0=\oint\frac{dz}{2\pi i}\,[c(T_m+T_{\beta\gamma})+bc\partial c],\qquad Q_1=-\frac12\oint\frac{dz}{2\pi i}\,\gamma G_m,\qquad Q_2=-\frac14\oint\frac{dz}{2\pi i}\,b\gamma^2.$$
Each term has ghost number $+1$; in the displayed bosonization they have picture shifts $0,1,2$, respectively. Closed strings use independent left and right copies. Fix the canonical representative pictures $-1$ in NS and $-1/2$ in R when a fixed-picture representative is required.

Assume as an explicit input that this $Q_B$ is an odd differential on the chosen small total state space, $Q_B^2=0$, and that the relative subspace
$$\mathcal C_{\rm rel}=\{v\in\mathcal C_{\rm small}: b_0v=0,\ L_0^{\rm tot}v=0\}$$
is $Q_B$-stable. Here $L_0^{\rm tot}=\oint\frac{dz}{2\pi i}\,z(T_m+T_{bc}+T_{\beta\gamma})$ is the covariant total stress-tensor zero mode in that chirality.

To select a GSO sector, additionally supply an even complex-linear involution $\widehat G$ on the total state space, preserving ghost number, the small space and $\mathcal C_{\rm rel}$. Require it to implement the matter sign action $\psi^\mu\mapsto-\psi^\mu$, to fix $X,b,c,\phi$, and to send $\eta,\xi\mapsto-\eta,-\xi$, hence $\beta,\gamma\mapsto-\beta,-\gamma$. Fix its vacuum phases so that on canonical-picture matter states tensored with the chosen ghost vacuum it agrees with the NS or R involution of the GSO definition. Existence of an implementing involution with these domain and phase properties is additional conditional input, not a conclusion about arbitrary ghost modules. Each displayed $Q_j$ is invariant under this action: $Q_0$ contains invariant stresses, $Q_1$ contains the two sign-changing factors $\gamma,G_m$, and $Q_2$ contains $\gamma^2$. Thus $[\widehat G,Q_B]=0$. Using the matter involution alone would not give this commutation.

For a retained sign $g\in\{+1,-1\}$ put $\mathcal C_{\rm rel,g}=\ker(\widehat G-gI)\cap\mathcal C_{\rm rel}$. It is a graded subcomplex by the preceding commutation. Define the open physical state space to be
$$H^1(Q_B,\mathcal C_{\rm rel,g})=\frac{\ker(Q_B:\mathcal C_{\rm rel,g}^1\to\mathcal C_{\rm rel,g}^2)}{Q_B(\mathcal C_{\rm rel,g}^0)},$$
where superscripts denote ghost number, and $g=+1$ for the chiral supersymmetric projection. Nilpotence makes the denominator a subspace of the numerator.

For closed strings, take both chiral complexes at the same $p$, with the closed-string matter zero modes $\alpha_0^\mu=\widetilde\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$. Write $H^1_{\chi,s,g}(p)$ for the above relative cohomology in chirality $\chi\in\{L,R\}$, sector $s\in\{NS,R\}$ and retained sign $g$. On the tensor product of relative complexes define the covariant level-difference operator
$$\Delta=L_{0,L}^{\rm tot}\otimes I-I\otimes L_{0,R}^{\rm tot}.$$
Each summand vanishes on its relative complex, so $\Delta=0$ there and induces the zero operator on $H^1_{L,s_L,g_L}(p)\otimes H^1_{R,s_R,g_R}(p)$. Thus covariant level matching $\Delta=0$ is already imposed by the two relative constraints; it requires no additional restriction by transverse oscillator operators. For a chosen Type II or Type 0 pairing, let $\mathcal S$ be its finite set of allowed tuples $(s_L,g_L;s_R,g_R)$, using the GSO conventions above, and define
$$\mathcal H_{\rm closed}=\bigoplus_{p\in\mathbb R^{1,9}}\ \bigoplus_{(s_L,g_L;s_R,g_R)\in\mathcal S}H^1_{L,s_L,g_L}(p)\otimes_{\mathbb C}H^1_{R,s_R,g_R}(p).$$
The momentum sum is algebraic: each vector has finite support in $p$; no momentum measure or Hilbert completion is asserted. This defines the selected state spaces only under the supplied differential, domain and ghost-inclusive involution hypotheses. The transverse equality $N_L-a_{s_L}=N_R-a_{s_R}$ belongs to the separately defined light-cone system; no map from its Fock spaces to these cohomologies is assumed or proved here.

This is a conditional cohomology definition. It does not assert that $Q_B$ is nilpotent from central-charge cancellation alone, establish picture-changing as an isomorphism at exceptional momentum, prove positivity/no-ghost, or define a global measure.

## Definition references

[[post-rns-flat-worldsheet-model]]

[[def-rns-spin-structures-and-sectors]]

[[def-rns-gso-projection]]

[[pthm-rns-criticality-central-charge-cancellation]]

[[def-st-bosonic-bc-ghost-system]]

[[def-rns-beta-gamma-superghost-picture-system]]

[[def-rns-local-operator-algebra-conventions]]

[[def-rns-transverse-oscillator-system]]

[[pthm-rns-open-lightcone-intercepts]]

[[pthm-rns-closed-lightcone-level-matching]]

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §3.1.2](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

[Timo Weigand, *Introduction to String Theory*, Chapter 6.4](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Remarks

Schlotterer gives the charge decomposition with its half-normalized matter supercurrent. Since the local convention here is $G_m=2G_{\rm Sch}$, its $-\oint\gamma G_{\rm Sch}$ becomes $-\tfrac12\oint\gamma G_m$; the $Q_2$ coefficient is unchanged. The source describes physical states as nilpotent cohomology, but the inspected section does not give a complete local proof of $Q_B^2=0$ or of stability of the stated small relative subspace. The bosonic BRST nilpotence theorem [[pthm-st-bosonic-brst-nilpotence]] is a different system and is not used here. The exact missing RNS-specific proof is escalated in the batch notes; this definition remains explicitly conditional.
