---
id: op-r5-charge-completeness-conjecture
kind: open-problem
title: "Charge-completeness conjecture"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps: ["def-r5-swampland-eft-claim-data"]
dependency_roles:
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
    - title: "Monopoles, Duality, and String Theory"
      url: "https://arxiv.org/pdf/hep-th/0304042v1"
      locator: "Complete paper, PDF pp. 1–5: completeness principle and its conjectural motivation."
    - title: "Constraints on symmetry from holography"
      url: "https://arxiv.org/pdf/1810.05337v2"
      locator: "Complete paper, PDF pp. 1–6: completeness in the stated AdS/CFT setting."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "PDF pp. 11–15, completeness and related swampland proposals."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Full review, 201 pages. Read the introduction/status discussion (PDF pp. 5–8), the Distance Conjecture (pp. 23–27), the Weak Gravity Conjecture (pp. 28–31), emergence (pp. 128–137), and the cited AdS/global-symmetry sections as scoped below."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Global symmetry/completeness/cobordism lectures, PDF pp. 162–177; full lecture notes."
physical_scope: "Open state-spectrum charge-completeness conjecture for a compact internal gauge group acting on a full dynamical charge-sector Hilbert space with fixed asymptotic boundary conditions. All finite-total-energy multiparticle, bound, black-hole and wrapped-object sectors count; nondynamical probes and infinite-energy objects do not. The holographic partial result retains its additional assumptions."
---

## Open problem

Fix a compact topological internal gauge group $G$, including its global form. A finite-dimensional representation is a pair $(V,\rho)$ where $V$ is a finite-dimensional complex vector space and $\rho:G\to\mathrm{GL}(V)$ is a continuous group homomorphism; it is irreducible if $V$ has no nonzero proper $G$-invariant complex subspace. For this state-spectrum version, use a charge sector with fixed asymptotic boundary conditions in which $G$ acts by a strongly continuous unitary representation $U:G\to\mathcal U(\mathcal H_{\rm dyn})$ on the physical dynamical Hilbert space, with all required gauge dressing included. Supply the nonnegative self-adjoint energy operator $H$ relative to the stated vacuum; its spectral projections commute with $U$. Count the full spectrum, including multi-particle configurations, bound states, black holes and wrapped extended objects of finite total energy. Exclude nondynamical external probe charges and isolated unwrapped objects of infinite total energy. A representation is realized precisely when there is an injective linear map $j:V\to\mathcal D(H^{1/2})\subseteq\mathcal H_{\rm dyn}$ satisfying $U(g)j=j\rho(g)$ for every $g\in G$; $\mathcal D(H^{1/2})$ is the finite-energy quadratic-form domain, so $\|H^{1/2}j(v)\|^2<\infty$. The charge-completeness conjecture says that every finite-dimensional irreducible representation of $G$ is realized. For compact $U(1)$ with character lattice $\mathbb Z$, this includes every integer-charge representation. The universal conjecture is stronger than the Harlow–Ooguri result for a specified anti-de Sitter/conformal-field-theory holographic pair under its boundary and duality assumptions.

Occurrence in a multi-particle spectrum counts in this formulation. The conjecture concerns every ultraviolet-complete quantum-gravity theory admitting the specified asymptotic charge-sector data; a confined phase without that action requires a different formulation. Completeness does not say the state is light, stable, elementary, or a single-particle asymptotic state. Here AdS/CFT denotes a specified anti-de Sitter quantum-gravity theory and conformal field theory related by the stated holographic duality, with its boundary conditions and duality hypotheses.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Polchinski, pp. 1–5](https://arxiv.org/pdf/hep-th/0304042v1)

[Harlow–Ooguri, pp. 1–6](https://arxiv.org/pdf/1810.05337v2)

## Status

Status review dated 2025-09-05: the bounded record is Polchinski, PDF pp. 1–5; Harlow–Ooguri, PDF pp. 1–6; and Lehnert, §II.C, PDF pp. 13–14. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). Polchinski presents completeness as a principle/conjecture. Harlow–Ooguri's conditional argument assumes their asymptotically AdS/CFT setting, a compact internal gauge group with long-range gauge symmetry, and their stated charged-object and holographic hypotheses; their argument then uses the faithful asymptotic action, a Wilson line through the two-sided AdS-Schwarzschild geometry, and representation theory to obtain the irreducible representations. It does not establish the universal assertion for nonholographic backgrounds or every extended-object convention. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search; it is not a logical supplier.
