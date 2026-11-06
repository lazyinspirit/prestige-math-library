---
id: op-r5-axionic-weak-gravity-conjecture
kind: open-problem
title: "Single-axion weak-gravity bound for instantons"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps: ["def-r5-string-axion-data", "def-r5-swampland-eft-claim-data"]
dependency_roles:
  "def-r5-string-axion-data": "formulation-prerequisite"
  "def-r5-swampland-eft-claim-data": "formulation-prerequisite"
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "Di Ubaldo, Iliesiu, Lin and Yan, Positivity of the gravitational path integral implies the axionic weak gravity conjecture"
      url: "https://arxiv.org/html/2605.05305v1"
      locator: "Step-5 selective reading: main text sections II-V, especially equations (11)-(18) and the qualifications in section V; no universal proof acceptance or appendix reconstruction claimed."
    - title: "Andriolo et al., Duality and Axionic Weak Gravity"
      url: "https://arxiv.org/pdf/2004.13721v2"
      locator: "Introduction, printed p. 2 (PDF p. 3), Eq. (1.1), for the action-to-charge normalization; Eq. (1.2) states the distinct dilaton-dependent version."
    - title: "The String Landscape, Black Holes and Gravity as the Weakest Force"
      url: "https://arxiv.org/pdf/hep-th/0601001v2"
      locator: "Complete primary paper, PDF pp. 11–12: axion/instanton version and stated normalization."
    - title: "Axion Cosmology"
      url: "https://arxiv.org/pdf/1510.07633v2"
      locator: "§2.4, printed pp. 13–16 (PDF pp. 14–17), and §§4.1–4.3 (PDF pp. 26–29): periodicity and kinetic/canonical-field conventions."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.S, PDF pp. 95–96, and the axion-compatibility discussion cited at §I, PDF p. 15, note 54; review dated 5 September 2025, with a pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Weak Gravity Conjecture discussion, PDF pp. 28–31; status and distinction among forms."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "WGC lecture, PDF pp. 181–185; full lecture notes."
physical_scope: "Open four-dimensional fixed-f single-axion WGC with semiwormhole reference constant sqrt(6) pi/4, no varying dilaton, and all charged instanton sectors counted, including sectors with operator insertions. Semiclassical action estimates require separately controlled expansions; neither an instanton nor a potential is inferred from periodicity."
---

## Open problem

Use natural units $\hbar=c=1$ and the four-dimensional Einstein-frame convention $M_P^{-2}=8\pi G_N$. A single axion is a smooth field $\theta:\mathcal X\to\mathbb R/(2\pi\mathbb Z)$ with kinetic term $-f^2g^{\mu\nu}\partial_\mu\theta\partial_\nu\theta/2$, where $f>0$ is constant on the declared background patch and $a=f\theta$ is a local canonical field. Fix a proposed ultraviolet-complete quantum-gravity theory, its Euclidean boundary conditions, and the full set $\mathcal I$ of its charged instanton sectors: localized nonperturbative Euclidean sources with nonzero amplitudes (possibly with operator insertions), finite real vacuum-subtracted actions $S_i\geq0$, and angular dependence $e^{in_i\theta}$ with $n_i\in\mathbb Z\setminus\{0\}$. The charge, boundary conditions, action prescription, and fluctuation/zero-mode treatment are supplied for each $i\in\mathcal I$. An arbitrary selected subset of known saddles is not the full set $\mathcal I$.

The weak single-axion conjecture asks whether there is at least one $i\in\mathcal I$ satisfying $fS_i/|n_i|\leq c_0M_P$. Fix here the macroscopic-semiwormhole reference normalization $c_0:=\sqrt6\pi/4$ for the four-dimensional axion-gravity system with no varying dilaton; this is a definite proposed version, rather than an adjustable constant fitted to a chosen instanton. A dilaton-dependent bound, other reference normalizations, and multi-axion lattice or convex-hull versions are separate questions.

Here $f$ and $M_P$ have mass dimension one; $S_i,n_i,c_0$ are dimensionless. There is no requirement that the satisfying sector dominate the potential or have unit charge. If a sector has no unsaturated zero modes and produces a scalar-potential harmonic, its term can be written $\Lambda_i^4e^{-S_i}[1-\cos(n_i\theta+\delta_i)]$ with supplied $\Lambda_i\geq0$ of mass dimension one and dimensionless $\delta_i$; a charged instanton need not generate such a bosonic term. A semiclassical evaluation of $S_i$ requires its own controlled saddle expansion and corrections. In particular, $S_i\gg1$ is not an extra requirement on the conjectured sector, and no instanton or ultraviolet completion follows from periodicity alone.

## Open problem references

[[def-r5-string-axion-data]]

[[def-r5-swampland-eft-claim-data]]

[Andriolo et al., Eq. (1.1), printed p. 2](https://arxiv.org/pdf/2004.13721v2)

[Arkani-Hamed et al., pp. 11–12](https://arxiv.org/pdf/hep-th/0601001v2)

[Marsh, §2.4 and §§4.1–4.3](https://arxiv.org/pdf/1510.07633v2)

## Status

Status review dated 2025-09-05: the bounded record is Arkani-Hamed–Motl–Nicolis–Vafa, PDF pp. 11–12; Palti, PDF pp. 28–31; Lehnert, §II.S, PDF pp. 95–96 and its axion-compatibility note at PDF p. 15, note 54; and Marsh, §2.4 and §§4.1–4.3. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). These sources give conventions, conjectural bounds and model-dependent examples, not a proof of the universal single- or multi-axion statement. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search. The referenced axion definition supplies the fixed-$f$ convention used here; this open problem supplies no proof premise.

Selective status supplement dated 2026-11-05: Di Ubaldo–Iliesiu–Lin–Yan, arXiv:2605.05305v1, §§II–V, give a conditional argument from path-integral positivity, contributing perturbatively stable axion wormholes, analytic continuation of boundary axion values, suppression of higher-boundary connected contributions, and an instanton-induced instability. Their §IV also identifies exclusion of those wormholes as a logical alternative. Section V says higher-boundary suppression is difficult to check and does not prove that instanton proliferation restores positivity. Their background-dependent constants do not establish the universal fixed-normalization conjecture above for every ultraviolet completion. This selective supplement assesses that argument and is not an exhaustive later-literature review.
