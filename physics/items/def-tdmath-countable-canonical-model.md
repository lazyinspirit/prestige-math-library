---
id: def-tdmath-countable-canonical-model
kind: definition
title: "Countable canonical model"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-complete-ordered-field","def-finite-sum","def-natural-logarithm","def-real-exponential-function-and-e","def-series"]
justified_by: []
dependency_roles: {"def-complete-ordered-field":"mathematical-premise","def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-series":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; §§1.3–1.4, printed pp.17–30, for canonical and grand-canonical normalizations and responses."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; §§4.2–4.6, printed pp.192–217, for microcanonical, canonical, quantum trace and grand-canonical constructions."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Let $I$ be a nonempty finite or countably infinite set equipped with a specified enumeration, let $E_i\in\mathbb R$ be finite energies, let $g_i>0$ be weights, and let $J\subseteq\mathbb R$ be an open parameter interval. For a nonnegative family $(a_i)_{i\in I}$ define $\sum_{i\in I}a_i:=\sup_{F\subset I,\,F\text{ finite}}\sum_{i\in F}a_i$, with finite sums as in [[def-finite-sum]] and the supremum as in [[def-complete-ordered-field]] when the finite subsums are bounded; set the value to $+\infty$ when they are unbounded. This definition is independent of the specified enumeration. For $\beta\in J$, define the nonnegative partition sum $Z(\beta):=\sum_{i\in I}g_i\exp(-\beta E_i)$ by this rule. The admissible parameter set is $J_Z:=\{\beta\in J:0<Z(\beta)<\infty\}$. For $\beta\in J_Z$, define $p_i(\beta):=g_i\exp(-\beta E_i)/Z(\beta)$. A countable probability law on $I$ means a nonnegative family with total sum $1$ under the finite-subsum convention above; these weights form such a law because $\sum_i p_i(\beta)=Z(\beta)/Z(\beta)=1$. For any real family $X_i$ with $\sum_i p_i|X_i|<\infty$, define $\langle X\rangle_\beta:=\sum_i p_iX_i$. If $\sum_i|p_i\log(p_i/g_i)|<\infty$, define the reference-relative entropy $H_g(p):=-\sum_i p_i\log(p_i/g_i)$. When $g_i=1$, this is the Shannon entropy with natural logarithms. A lower bound on the energies alone is not part of this definition and does not imply $Z(\beta)<\infty$. For countably infinite $I$, any specified enumeration is used only to write a list; the nonnegative sum itself is the supremum over finite subsums above.

## Scope

The sum is interpreted using the series convention of [[def-series]]. The model is purely mathematical; any physical interpretation of $E_i$, $g_i$, or $\beta$ requires separate premises.
