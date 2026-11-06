---
id: def-rns-gso-projection
kind: definition
title: RNS GSO Projections
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - def-rns-spin-structures-and-sectors
  - def-cft-r5-free-fermion-spin-theory
dependency_roles:
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-cft-r5-free-fermion-spin-theory: mathematical-premise
physical_scope: "Algebraic NS/R projections for open chiral and closed sectors of the ten-dimensional flat RNS model, including the closed Type II/0 pairings; locality, modular invariance, anomaly cancellation, and interacting consistency are not proved."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.7, printed pp. 140–147, G-parity, critical sectors, and Type II/0 projections."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, §§7.3–7.5, printed pp. 103–112, spin-structure sums and modular transformations."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§3.1.7, printed pp. 64–66 (PDF pp. 85–87), GSO parity, chirality and ghost-inclusive bosonized charge."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Take the ten-dimensional flat target $M=\mathbb R^{1,9}$ with $\eta=\operatorname{diag}(-,+,\ldots,+)$ and orientation $dx^0\wedge\cdots\wedge dx^9$. Fix Clifford generators $\Gamma^\mu$ on a complex target Dirac module with $\{\Gamma^\mu,\Gamma^\nu\}=2\eta^{\mu\nu}I$, and define the chirality involution by $\Gamma_{11}=\Gamma^0\Gamma^1\cdots\Gamma^9$; it squares to $I$, and reversing the chosen target orientation reverses its sign. In a single chiral sector let $F$ count nonzero fermionic oscillator excitations modulo two, with the NS vacuum assigned $F=0$; Ramond zero modes are not counted in $F$ and act through the target Clifford module. Set
$$G_{\rm NS}=(-1)^{F+1}.$$
For the Ramond sector choose an independent sign $\epsilon_\chi\in\{+1,-1\}$ for each closed chirality $\chi\in\{L,R\}$; for an open string use a single label $\chi=O$ for its doubled chiral sector and choose one sign $\epsilon_O$. Set
$$G_{\rm R}^{(\chi)}=\epsilon_\chi\Gamma_{11}(-1)^{F_\chi}.$$
The chiral supersymmetric projection retains the $+1$ eigenspace of $G_{\rm NS}$ or the selected $G_{\rm R}^{(\chi)}$. It removes the NS vacuum. On a Ramond ground state, $F_\chi=0$, so the retained target chirality is the $\Gamma_{11}$ eigenspace with eigenvalue $\epsilon_\chi$; the projector equation gives the opposite ground-state chirality for odd $F_\chi$. For closed Type IIB choose $\epsilon_L=\epsilon_R=+1$, so the retained Ramond chiralities agree; for Type IIA choose $\epsilon_L=+1$ and $\epsilon_R=-1$, so they are opposite. Reversing both signs gives the primed presentation of the same relative Type II choice. For an open string, use the endpoint conditions and doubled single chiral sector defined in [[def-rns-spin-structures-and-sectors]], and apply one such projection.

Write $NS^\pm$ for the $G_{\rm NS}=\pm1$ eigenspaces and $R^\pm$ for Ramond sectors whose ground state has $\Gamma_{11}=\pm1$. The Type 0A closed sector set is $(NS^+,NS^+),(NS^-,NS^-),(R^+,R^-),(R^-,R^+)$; Type 0B is $(NS^+,NS^+),(NS^-,NS^-),(R^+,R^+),(R^-,R^-)$. Thus both retain the NS-NS vacuum, remove the mixed NS-R and R-NS sectors, and have no spacetime fermions. These are sector-space definitions; the torus spin-structure sum, modular invariance and locality of projected operator products are separate checks, not consequences of the notation $G$.

## Definition references

[[def-rns-spin-structures-and-sectors]]

[[def-cft-r5-free-fermion-spin-theory]]

[Timo Weigand, *Introduction to String Theory*, Chapters 6.5–6.7](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §3.1.7](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Remarks

The signs use the NS/R mode convention in [[def-rns-spin-structures-and-sectors]]. The common-spin sum in [[def-cft-r5-free-fermion-spin-theory]] belongs to a different nonchiral theory and is not the Type II/0 projection defined here. No modular-invariance or operator-locality theorem is claimed.
