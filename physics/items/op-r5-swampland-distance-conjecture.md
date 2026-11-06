---
id: op-r5-swampland-distance-conjecture
kind: open-problem
title: "Swampland distance conjecture"
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
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "On the Geometry of the String Landscape and the Swampland"
      url: "https://arxiv.org/pdf/hep-th/0605264v1"
      locator: "§2, PDF p. 3 (printed p. 2): finite-Planck-mass scope in d>=4 and exclusion of d<=3 from the original formulation; PDF p. 4 (printed p. 3), Conjecture 2: asymptotic tower criterion."
    - title: "Distance and de Sitter Conjectures on the Swampland"
      url: "https://arxiv.org/pdf/1810.05506v2"
      locator: "Complete primary paper inspected, especially PDF pp. 1–5, for the refined de Sitter proposal and its explicitly conjectural status."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "PDF p. 2, note 7: questionable applicability in d=3; §II.E, PDF pp. 39–40, distance-conjecture statement and scope limitations; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Eran Palti, The Swampland: Introduction and Review, arXiv:1903.06239v3"
      url: "https://arxiv.org/pdf/1903.06239v3"
      locator: "Distance Conjecture, PDF pp. 23–27; conjectural status and asymptotic tower formulation."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "Distance-conjecture discussion, PDF pp. 138–143 and 198–203; full lecture notes."
physical_scope: "Open conjecture in d>=4, with d=3 retained as a separately labelled conjectural extrapolation, about an asymptotic light tower along an infinite-distance limit in a specified quantum-gravity scalar moduli space; it does not assert a proven universal tower type, exponent, finite-distance bound, or cosmological trajectory theorem."
---

## Open problem

Fix an integer spacetime dimension $d\geq3$. The standard conjectural formulation below is for $d\geq4$; its $d=3$ case is retained only as a separate conjectural extrapolation. Supply a scalar target $\mathcal T$ with positive Riemannian metric $G$, a point $s_\star>0$ (possibly $s_\star=\infty$), a base point $\phi_0\in\mathcal T$, and a continuous path $\phi:[0,s_\star)\to\mathcal T$ with $\phi(0)=\phi_0$ and $\operatorname{dist}_G(\phi_0,\phi(s))\to\infty$ as $s\to s_\star$. Use canonically normalized scalar fields, so $\operatorname{dist}_G(\phi_0,\phi(s))$ has mass dimension $(d-2)/2$, and define the dimensionless distance $\Delta\phi_d(s):=\operatorname{dist}_G(\phi_0,\phi(s))/M_{P,d}^{(d-2)/2}$ using the reduced $d$-dimensional Planck mass defined in the claim datum. A tower is an infinite sequence or family of distinct states with a declared characteristic mass gap $m_{\rm tower}(s)$. The conjecture is that, for a specified quantum-gravity family along this path, $m_{\rm tower}(s)\sim m_0\exp(-\alpha\Delta\phi_d(s))$ for fixed $m_0>0$ and $\alpha>0$ as $s\to s_\star$. In $d=4$, the normalization is $\Delta\phi_4=\operatorname{dist}_G/M_P$. Universality, tower type, $\alpha$ bounds, finite-distance bounds, and extensions to potential-driven/non-geodesic trajectories are separate unresolved parts.

The scalar kinetic normalization and Planck frame are part of each family datum; a different scalar-coordinate normalization must first be translated to the canonical distance above. The reference mass $m_0$ is fixed and positive for the family, and $\sim$ denotes asymptotic scaling up to factors that do not change the exponential rate. The species counted and the operational definition of the gap must be specified. This claim does not impose a universal numerical lower bound on $\alpha$ or select a string, Kaluza–Klein, or other tower.

## Open problem references

[[def-r5-swampland-eft-claim-data]]

[Ooguri–Vafa, full paper, pp. 1–5](https://arxiv.org/pdf/hep-th/0605264v1)

[Palti, §§ on the Distance Conjecture, pp. 23–27](https://arxiv.org/pdf/1903.06239v3)

## Status

Status review dated 2025-09-05: the bounded record is Ooguri–Vafa, PDF pp. 1–5; Palti, PDF pp. 23–27; Agmon–Bedroya–Kang–Vafa, PDF pp. 138–143 and 198–203; and Lehnert, §II.E, PDF pp. 39–40. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8). Within this source set, the asymptotic tower claim is conjectural and the listed examples do not prove it for every quantum-gravity family. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search.

Formulation scope: Ooguri–Vafa, §2, PDF p. 3 (printed p. 2), restrict their stated conjectures to finite-Planck-mass quantum-gravity theories in $d\geq4$ and leave possible $d=3$ applicability open. Lehnert, PDF p. 2, note 7, questions that applicability. The $d=3$ question retained here is therefore an extrapolation, not an attribution of that dimension to the original standard conjecture.
