---
id: def-qft-involutive-algebra-state
kind: definition
title: Unital star algebra and positive normalized state
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
sources:
  references:
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020), §2.4, Definition 2.32"
      url: "https://doi.org/10.1007/978-3-030-46366-3"
      locator: "§2.4, printed pp. 20–21: positivity and normalized states on a unital complex *-algebra."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, lecture notes, arXiv:1904.04051v2 (2019), §§2.2–2.3"
      url: "https://arxiv.org/html/1904.04051"
      locator: "§2.2, Definition 2, and §2.3, algebraic state conventions."
---

## Definition

A **unital complex star algebra** is a complex vector space $A$ with a complex-bilinear associative product $(a,b)\mapsto ab$, a specified unit $1_A$, and a conjugate-linear map $a\mapsto a^*$ such that, for all $a,b\in A$,

$$ (ab)^*=b^*a^*,\qquad (a^*)^*=a,\qquad 1_A^*=1_A. $$

A **positive normalized state** on $A$ is a complex-linear functional $\omega:A\to\mathbb C$ such that $\omega(1_A)=1$ and $\omega(a^*a)$ is a real nonnegative number for every $a\in A$. This is an algebraic definition: no norm, topology, boundedness condition, or completion is part of the data.
