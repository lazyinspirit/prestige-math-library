---
id: thm-lindenstrauss-leafwise-conditional-measures-for-t-spaces
kind: theorem
title: "Leafwise conditional measures for locally compact T-spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-lindenstrauss-t-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "§3, Theorem 3.6, statement on Annals printed p. 177 (local PDF p. 13): normalized leafwise conditionals, compatibility with subordinate partitions, and leafwise equivariance."
---

## Statement

Let X be a T-space and μ a Radon measure for which μ-almost every T-leaf is embedded. A countably generated Borel sigma-ring 𝒜 is a family of Borel sets closed under countable unions and relative differences with a countable generating family; its atom [x]𝒜 consists of points with the same membership as x in every set of 𝒜. For such a sigma-ring with maximal element E and atoms covering E, μₓ^𝒜 is the conditional measure of μ on [x]𝒜. An open T-plaque is a subset contained in a bounded part of one T-leaf whose preimage in each local leaf chart is open in T. For each leaf chart U, there are Borel measurable leafwise Radon measures μₓ,U,T on T for x∈U, unique up to μ-null sets and satisfying: (i) μₓ,U,T(B_T(1))=1 for μ-almost every x; (ii) whenever every atom of 𝒜 in its maximal element E is an open T-plaque, the pullback of μₓ^𝒜 to T is proportional to μₓ,U,T restricted to the preimage of [x]𝒜; and (iii) on a conull set X₀, if x,y∈X₀ lie on the same T-leaf, U,V are charts containing x,y, and θ is any chart-transition isometry satisfying t_V(y,·)∘θ=t_U(x,·), then θ_*μₓ,U,T is proportional to μᵧ,V,T. In formulas suppressing the chart index, μₓ,T denotes the measure in the chart currently used; every comparison uses the same chart or the displayed transition rule.

## Statement references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, §3, Theorem 3.6, statement on Annals printed p. 177 (local PDF p. 13): normalized leafwise conditionals, compatibility with subordinate partitions, and leafwise equivariance.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Lindenstrauss Theorem 3.6 states the normalized, partition-compatible, leafwise-equivariant conditional measures; its measurable construction is not reproduced locally. [Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, §3, Theorem 3.6, statement on Annals printed p. 177 (local PDF p. 13): normalized leafwise conditionals, compatibility with subordinate partitions, and leafwise equivariance.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)
