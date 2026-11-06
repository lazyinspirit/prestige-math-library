---
id: op-r5-no-global-symmetries-conjecture
kind: open-problem
title: "No exact global symmetries in quantum gravity"
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
    - title: "The String Landscape, Black Holes and Gravity as the Weakest Force"
      url: "https://arxiv.org/pdf/hep-th/0601001v2"
      locator: "Complete paper, PDF pp. 1–4: global-symmetry/WGC motivation and conjectural framing."
    - title: "Anastasi et al., Relative quantum gravity: localized gravity and the swampland"
      url: "https://link.springer.com/article/10.1007/JHEP08(2025)107"
      locator: "Step-5 selective reading: abstract and introduction of the primary article/preprint for the distinction between a localized relative gravitational subsystem and its full higher-dimensional completion."
    - title: "Constraints on symmetry from holography"
      url: "https://arxiv.org/pdf/1810.05337v2"
      locator: "Complete paper, PDF pp. 1–6: no-global-symmetry result under explicit holographic assumptions."
    - title: "Cobordism Classes and the Swampland"
      url: "https://arxiv.org/pdf/1909.10355v2"
      locator: "Complete paper, PDF pp. 1–3 and 7–9: cobordism proposal and relation to symmetry constraints."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.J, PDF pp. 65–68, no-global-symmetry discussion and stated review limitation; review dated 5 September 2025, with its pre-2025 literature cutoff at PDF p. 2, note 8."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Full review, 201 pages. Read the introduction/status discussion (PDF pp. 5–8), the Distance Conjecture (pp. 23–27), the Weak Gravity Conjecture (pp. 28–31), emergence (pp. 128–137), and the cited AdS/global-symmetry sections as scoped below."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Global symmetry/completeness/cobordism lectures, PDF pp. 162–177; full lecture notes."
physical_scope: "Open no-exact-internal-global-symmetry conjecture for standalone ultraviolet-complete target-space gravity in d>=3, with faithful action on bounded-region physical bulk operators. Gauge redundancies, physical asymptotic gauge symmetries, spacetime isometries and relative localized-gravity subsystems are distinguished; generalized extensions require their own defect-action data."
---

## Open problem

Fix a standalone ultraviolet-complete quantum-gravity theory in spacetime dimension $d\geq3$, its boundary conditions and its physical Hilbert space $\mathcal H_{\rm phys}$. Standalone here means that the full quantum state space, observables and dynamics are defined without coupling the putative gravitational system to an additional higher-dimensional gravitational host. A localized gravitational subsystem whose consistency requires such a host is a relative theory; the conjecture is tested on its full completion, not on that subsystem in isolation.

For the ordinary internal-symmetry version, supply algebras $\mathcal A(R)\subseteq\mathcal B(\mathcal H_{\rm phys})$ of bounded physical bulk operators assigned to bounded regions $R$, with a specified relational localization and gravitational dressing prescription wherever needed. A candidate exact internal global symmetry is a strongly continuous unitary representation $U:G\to\mathcal U(\mathcal H_{\rm phys})$ of a topological group $G$, commuting with the specified time evolution and acting trivially on spacetime coordinates. Conjugation $\alpha_g(A):=U(g)AU(g)^{-1}$ must preserve every $\mathcal A(R)$, preserve all dynamics and correlation functions, and act faithfully on their union: for each $g\ne e$ some $R$ and $A\in\mathcal A(R)$ satisfy $\alpha_g(A)\ne A$. Where a local stress tensor is part of the effective description it is neutral under this action. The ordinary conjecture is that no nontrivial $G$ with these properties exists.

A gauge redundancy acts trivially on physical states and operators. A physical asymptotic gauge transformation can instead act on charged sectors or on operators with gauge Wilson lines to the boundary while commuting with all bounded-region gauge-invariant bulk algebras; it is not a global symmetry by the faithful bulk-action criterion above. The operator algebras used in that criterion exclude boundary-anchored gauge-charge insertions; the specified neutral gravitational dressing is distinguished from such gauge dressing. Spacetime isometries are not internal symmetries and are not prohibited by this version. For higher-form or more general versions, the additional open task is to specify the charged extended operators, their support, topological-defect action and boundary conditions, then formulate the corresponding prohibition; an arbitrary nontrivial action on the total state space is not an adequate definition. Approximate low-energy symmetries are not exact symmetries of the full theory. Arbitrary $d<3$ worldsheet-gravity models are outside this target-space formulation.

The universal conjecture is distinct from conditional holographic theorems and from charge-completeness and cobordism proposals. The assumed existence of a full ultraviolet completion is a scope condition, not an existence theorem for any proposed effective theory.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Arkani-Hamed et al., pp. 1–4](https://arxiv.org/pdf/hep-th/0601001v2)

[Harlow–Ooguri, pp. 1–6](https://arxiv.org/pdf/1810.05337v2)

[McNamara–Vafa, pp. 1–3, 7–9](https://arxiv.org/pdf/1909.10355v2)

## Status

Status review dated 2025-09-05: the bounded record is Arkani-Hamed–Motl–Nicolis–Vafa, PDF pp. 1–4; Harlow–Ooguri, PDF pp. 1–6; McNamara–Vafa, PDF pp. 1–3 and 7–9; and Lehnert, §II.J, PDF pp. 65–68. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8) and says that the no-global-symmetry literature is too extensive for its review to cover exhaustively (PDF pp. 67–68). Harlow–Ooguri's argument uses an asymptotically anti-de Sitter/conformal-field-theory dual pair, entanglement-wedge reconstruction, and splittability, and treats internal symmetries in this letter; it does not establish the universal claim on every quantum-gravity background. The bounded sources leave the universal version conjectural; higher-form/generalized extensions and approximate low-energy symmetries need their own formulations. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search. The cobordism proposal is related but is not used as proof.

Selective formulation supplement dated 2026-11-05: Harlow–Ooguri, §§III–V, distinguish faithful bulk-local internal actions from physical asymptotic gauge actions; their discussion includes the need for relational gravitational localization. Anastasi et al., introduction, distinguish relative localized gravity from the complete system with its gravitational host. These scope checks do not establish a universal theorem or independently certify the models in that paper. The historical status review above remains bounded to its listed record.
