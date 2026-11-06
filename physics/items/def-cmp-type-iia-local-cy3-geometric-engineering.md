---
id: def-cmp-type-iia-local-cy3-geometric-engineering
kind: definition
title: Type IIA Local Calabi–Yau Geometric Engineering Limit
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
category: string-theory
deps:
  - def-axiom-of-choice
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-cmp-n2-special-kahler-period-data
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-cmp-n2-special-kahler-period-data: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
justified_by: []
forward_refs: []
aliases: []
axiom_strength: "Full AC is carried only through the conditional compact N=2 period/Hodge input; it is not used to prove the local source model or a local period-matching theorem."
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
physical_scope: "Local or noncompact Type IIA Calabi–Yau threefold engineering data and source-specified field-theory decoupling regimes. This definition asserts no global compact completion, universal local period theorem, or physical realization of a given source model."
empirical_premises: []
sources:
  references:
    - title: "Sheldon Katz, Albrecht Klemm, and Cumrun Vafa, Geometric Engineering of Quantum Field Theories, arXiv:hep-th/9609239v2"
      url: "https://arxiv.org/pdf/hep-th/9609239v2"
      locator: "§2 and §2.1, especially equation (2.1), PDF pp. 4–6; local A1 model, wrapped D2 states, and base/fiber field-theory scaling."
    - title: "Peter Mayr, Geometric Construction of N=2 Gauge Theories, arXiv:hep-th/9807096v1"
      url: "https://arxiv.org/pdf/hep-th/9807096v1"
      locator: "§2, equations (2.6), (2.7), (2.11), and (2.12); independent local ADE-fibration, gauge-coupling, and decoupling treatment."
---

## Definition

Use the mostly-plus signature $(-+\cdots+)$ and natural units $\hbar=c=1$ from [[def-supergravity-conventions-and-normalizations]], with $J_s$ measured in the associated Type IIA string-frame metric. A Kähler form here means a smooth real positive closed $(1,1)$-form, and $K_Y:=\Lambda^{3,0}T^*Y$ denotes the canonical line bundle of a complex three-manifold $Y$. A **local Calabi–Yau threefold datum** is a specified connected smooth complex three-manifold $Y_\epsilon$ of complex dimension three, compact or noncompact, with a Kähler form $J_{s,\epsilon}$ and a specified nowhere-zero holomorphic three-form $\Omega_\epsilon$ trivializing $K_{Y_\epsilon}$. If a singular limiting complex space $Y_0$ is used, the datum separately supplies a resolution $r:\widetilde Y_0\to Y_0$ where $\widetilde Y_0$ is a smooth complex threefold and $r$ is a proper holomorphic map restricting to a biholomorphism over the smooth locus of $Y_0$; $Y_0$ itself is not called smooth. A local model may also specify a holomorphic map $\pi_\epsilon:Y_\epsilon\to B$ over a complex curve $B$ and compact holomorphic curves (compact complex one-dimensional submanifolds) $C_j(\epsilon)\subset Y_\epsilon$ contained in its fibers. For each such curve define its string-frame area $A_j(\epsilon):=\int_{C_j(\epsilon)}J_{s,\epsilon}$ and dimensionless Kähler parameter $t_j(\epsilon):=A_j(\epsilon)/\alpha'(\epsilon)$; the curve is **vanishing** in a family when $A_j(\epsilon)>0$ for $\epsilon>0$ and $A_j(\epsilon)\to0$ as $\epsilon\downarrow0$. These local conditions do not impose compactness or exact $SU(3)$ holonomy (the Kähler metric's parallel-transport group need not equal $SU(3)$).

A **Type IIA geometric-engineering datum** for a four-dimensional $N=2$ gauge sector consists of this specified local geometry; a source-specific assignment of wrapped D-brane species and a charge lattice $\Gamma$ (a finite-rank free abelian group); a designated subset $\Gamma_{\mathrm{BPS}}\subseteq\Gamma$ of source-assigned BPS states, with BPS meaning here that the datum identifies each such state's mass with its central-charge modulus; a declared central-charge map $Z_\epsilon:\Gamma_{\mathrm{BPS}}\to\mathbb C$ with energy units; a specified low-energy gauge-theory sector and its Coulomb-branch scalar coordinates (the chosen complex scalar expectation values labelling its vacua); and a one-parameter family, indexed by a positive length $\epsilon\downarrow0$, of the above geometric and physical data. Here $N=2$ denotes the adopted four-dimensional supersymmetry framework with eight real supercharges, a gauge coupling $g_{\mathrm{YM}}(E)$ is defined by the coefficient $-1/(4g_{\mathrm{YM}}^2(E))$ of the normalized gauge kinetic term at energy $E$ with its trace normalization fixed, and a Coulomb coordinate is the chosen complex scalar expectation value with energy units in that framework. The strong scale $\Lambda$, when used, also has energy units. Each quantity and its normalization is part of the datum; canonical-bundle triviality alone supplies none of the spectrum or gauge dictionary.

Write $\ell_s:=\sqrt{\alpha'}=\epsilon$ and define the string scale $M_s:=\ell_s^{-1}$. For a declared field-theory energy scale $E_{\mathrm{FT}}>0$, a **decoupling limit** in this definition requires $M_{\mathrm{Pl}}(\epsilon)/E_{\mathrm{FT}}\to\infty$ and $M_q(\epsilon)/E_{\mathrm{FT}}\to\infty$ for every declared unwanted string or compactification threshold $M_q$, while the specified low-energy gauge-theory data, Coulomb coordinates, and charged BPS masses have finite stated limits. $M_{\mathrm{Pl}}$ is the reduced four-dimensional Planck mass in the convention $M_{\mathrm{Pl}}^{-2}=8\pi G_N$; for a pure asymptotically-free (gauge coupling decreases as energy increases) $N=2$ $SU(2)$ model, the fixed gauge-theory datum may be its strong scale $\Lambda$ and the running coupling at a fixed field-theory energy. The bare coupling at $M_s$ is not required to stay fixed and in the cited asymptotically-free limit tends to zero. A local noncompact construction does not assert existence of a compact completion satisfying global flux and brane consistency conditions. Any local period identification beyond the data above requires its own source-specific hypotheses and regime.

## Definition references

[[def-cmp-calabi-yau-threefold-compactification-data]]

[[def-cmp-n2-special-kahler-period-data]]

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iia-two-derivative-supergravity-action]]

[[def-axiom-of-choice]]

[Katz–Klemm–Vafa, §2 and §2.1](https://arxiv.org/pdf/hep-th/9609239v2)

[Mayr, §2](https://arxiv.org/pdf/hep-th/9807096v1)

## Facts & Assumptions

**Given:** A specified local or noncompact Kähler complex threefold with its holomorphic volume form, a one-parameter family of compact vanishing curves and source-normalized curve volumes, a declared Type IIA brane/charge dictionary, a low-energy $N=2$ gauge-theory sector with fixed units, and explicit Planck, string, and unwanted-threshold limits.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] defines the broad compact CY3 convention using a specified trivialization of $K_X$ and explicitly does not imply exact $SU(3)$ holonomy. The present definition extends the geometric data to a specified noncompact local manifold; it does not apply the compact supplier's conclusions to that local space.

[F2] [[def-cmp-n2-special-kahler-period-data]] states compact special-Kähler period data under smooth proper compact Kähler CY3, locally constant Hodge-number, locally free relative-filtration, flat rational polarization, and marked torsion-free degree-three lattice hypotheses. Its carrier exists, but its current Step 1 decision is `escalated`: that record cites an escalated four-dimensional $N=2$ postulate whose own blocker says the conventions carrier is absent, although that conventions carrier and its current ready record are present. I use only the actual compact-family statement as a conditional scope boundary, not as an accepted proof of a local period result. Its full-AC hypothesis is carried by [A1].

[F3] [[def-supergravity-conventions-and-normalizations]] fixes $\alpha'>0$ with dimension length squared, $\ell_s=\sqrt{\alpha'}$, and natural units; it identifies $g_{\mathrm{str}}=e^{\Phi_\infty}$ as the dimensionless string coupling, distinct by tensor type from the string-frame metric.

[A1] Adopt the Axiom of Choice (AC): every family of nonempty sets has a choice function, as defined in [[def-axiom-of-choice]]. It is included because [F2] and its Hodge suppliers explicitly assume it; no choice principle is used in the dimensional identities below.

[A2] [[post-type-iia-two-derivative-supergravity-action]] is the adopted massless, source-free, leading two-derivative Type IIA bulk action. It supplies the background framework and conventions, not a D-brane worldvolume action, a compactification solution, or a local SU(2) spectrum.

[A3] Katz–Klemm–Vafa and Mayr supply the source-reported local A1/K3-fibration dictionary and the specific asymptotically-free SU(2) scaling. Their model inputs are not consequences of the broad compact CY definition.

## Proof

**Proof technique:** direct interface and units verification; no existence claim is made.

**Given:** The data in the Definition, including the explicitly supplied local geometry, charge map, field-theory sector, and one-parameter scale limits.

1.1 The local geometry is fully specified by $Y$, $J_s$, $\Omega$, and any resolution/fibration data. [F1] concerns compact $X$ and warns that even its broad compact definition does not imply exact $SU(3)$ holonomy. Therefore the local datum's geometry and the source-specific $N=2$ spectrum remain separate supplied inputs, with no compactness or holonomy conclusion inferred from $K_Y\cong\mathcal O_Y$. [F1, given]

1.2 A curve area $A_j$ and $\alpha'$ both have dimension length squared, hence $t_j=A_j/\alpha'$ is dimensionless. Since $[\epsilon]=$ length and $[a]=[\Lambda]=$ inverse length, both $\epsilon a$ and $\epsilon^4\Lambda^4$ are dimensionless scaling parameters. [F3, given, algebra]

1.3 The Planck and unwanted-threshold ratios, as well as the finite low-energy data, are explicit predicates in the Definition. Their inclusion records what a particular engineering model must supply; the definition itself neither proves that a family satisfying them exists nor derives them from the source-free bulk action. [A2, given]

2.1 The compact period data in [F2] apply only under its smooth-proper compact-family and Hodge/polarization hypotheses. The local charge map and any local period identification must instead be supplied with their own source regime; no compact period theorem is extended to a noncompact limit here. [F2, A1, A3, given] ∎

## Remarks

For the pure $N=2$ $SU(2)$ source example, the quantity held fixed is $\Lambda$ (equivalently the gauge-theory running data at a fixed energy); the bare string-scale coupling tends to zero. Exact local period identifications and global-completion arguments are outside this definition.
