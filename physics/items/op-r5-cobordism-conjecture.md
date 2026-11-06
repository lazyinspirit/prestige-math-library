---
id: op-r5-cobordism-conjecture
kind: open-problem
title: "Cobordism conjecture for quantum-gravity structures"
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
    - title: "Cobordism Classes and the Swampland"
      url: "https://arxiv.org/pdf/1909.10355v2"
      locator: "Complete paper, PDF pp. 1–3 and 7–9: cobordism proposal and finite-energy defect/termination interpretation."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.B, PDF pp. 11–13, cobordism formulation and qualifications; review dated 5 September 2025, with its pre-2025 literature cutoff at PDF p. 2, note 8."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Global symmetry/completeness/cobordism lectures, PDF pp. 162–177; full lecture notes."
physical_scope: "Open pointed termination conjecture for standalone target-space string/M-theory backgrounds and finite-energy defects under the stated no-global-symmetry hypothesis. The conservative k>=3 range and stronger k<3 extension are distinguished; arbitrary low-dimensional gravity is not included. No quotient-group structure is asserted for the pointed relation."
---

## Open problem

Fix a standalone target-space string/M-theory quantum-gravity setting in integer dimension $d\geq3$ (the full system, rather than a localized subsystem requiring a higher-dimensional gravitational host), an integer compactification dimension $0\leq k<d$, and a specified set $B_k$ of its allowed compact closed $k$-dimensional backgrounds, geometric or non-geometric. Define the pointed termination relation $M\rightsquigarrow\emptyset$ to mean that there exists an allowed noncompact $(k+1)$-dimensional quantum-gravity background $W$ with boundary $\partial W=M$, whose Lorentzian interpretation gives an allowed finite-energy $(d-k-1)$-dimensional domain wall/defect across which the $D=d-k$-dimensional spacetime ends; the allowed $W$ and defect class are part of the input. The McNamara–Vafa cobordism conjecture proposes $M\rightsquigarrow\emptyset$ for every $M\in B_k$, with the motivating hypothesis that the full target-space theory has no exact ungauged conserved charges, including charges carried by extended defects. This hypothesis is adopted in the proposal, not proved by this item. For $k\geq3$ this is the conservative range identified in their black-hole argument; retaining $k<3$ is explicitly the stronger conjectural extension under that same no-global-symmetry hypothesis. It is not an assertion about arbitrary low-dimensional quantum-gravity theories such as string-worldsheet gravity. The paper packages this proposal as vanishing quantum-gravity cobordism groups, but this item records only the pointed termination criterion and asserts no quotient-group structure. For comparison, ordinary smooth $G$-bordism to the empty manifold is the separate compact-witness condition defined below. A noncompact termination witness does not by itself establish that condition.

The boundary convention is outward-normal-first. “Allowed” means admitted by the specified quantum-gravity theory, including its structure, flux/charge data and boundary conditions. The finite-energy condition is evaluated in the Lorentzian defect interpretation in $D=d-k$ dimensions. For the smooth geometric comparison, specify groups $G_j$ with homomorphisms $G_j\to O(j)$ and stabilization maps compatible with adding a trivial normal line. A $G$-structure on a smooth $j$-manifold is a principal $G_j$-bundle together with an equivariant map to the orthonormal tangent-frame bundle inducing an isomorphism after extension of structure group to $O(j)$; fix the boundary restriction through the outward normal. Ordinary $G$-bordism to $\emptyset$ means a compact smooth $(k+1)$-manifold $\overline W$ with this structure and a boundary identification with $M$ preserving the induced structure. To deduce this compact condition from a geometric termination witness, additionally require a compactification $\overline W$ with no extra boundary components and with the $G$-structure extending over it. No group operation or quotient relation is inferred from the pointed relation for the general non-geometric backgrounds.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[McNamara–Vafa, pp. 1–3 and 7–9](https://arxiv.org/pdf/1909.10355v2)

## Status

Status review dated 2025-09-05: the bounded record is McNamara–Vafa, PDF pp. 1–3 and 7–9; Agmon–Bedroya–Kang–Vafa, PDF pp. 162–177; and Lehnert, §II.B, PDF pp. 11–13. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). McNamara–Vafa propose the termination/defect relation and express a version through quantum-gravity cobordism groups; their examples do not prove the criterion for every allowed background or theory. The present formulation retains its pointed relation and separate compact smooth $G$-bordism comparison without asserting a quotient-group structure. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.

Step-5 source qualification: McNamara–Vafa, §1, printed pp. 2–3 (PDF pp. 3–4), explicitly state the no-global-symmetry motivation, a conservative $k\geq3$ restriction, and their decision to adopt the stronger target-space string-landscape hypothesis for the remaining discussion. Section 2.1, printed pp. 7–8 (PDF pp. 8–9), gives the noncompact termination interpretation. This qualification preserves the small-$k$ research question with its hypothesis; it does not deduce it for worldsheet quantum gravity.
