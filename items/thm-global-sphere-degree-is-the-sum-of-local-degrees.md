---
id: "thm-global-sphere-degree-is-the-sum-of-local-degrees"
kind: "theorem"
title: "Global sphere degree is the sum of local degrees"
deps: ["lem-local-sphere-orientations-and-finite-puncture-excision", "lem-a-map-of-nonzero-degree-between-spheres-is-surjective"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Proposition 2.30, p.136"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Proposition 2.30, p.136"
status: published
origin: "pipeline"
proof_strategy: "Use the commuting global/relative/local square; the incoming global class is diagonal and the outgoing map adds the local multiples. Treat the empty fibre with the omitted-point lemma."
---

## Statement

Let $f:S^n\to S^n$ be continuous, $n\ge1$, with source and target orientations fixed. If $f^{-1}(y)$ is finite, then
$$\deg(f)=\sum_{x\in f^{-1}(y)}\deg_x f.$$
The sum over an empty fibre is $0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For $n\ge1$, $H_n(S^n,S^n\setminus\{x\};\mathbb Z)\cong\mathbb Z$, with generator the restriction of the global sphere orientation. The local degree in def-local-degree-at-an-isolated-preimage is independent of shrinking its neighborhood. For every finite nonempty $F\subset S^n$, $$H_n(S^n,S^n\setminus F;\mathbb Z)\cong\bigoplus_{x\in F}H_n(S^n,S^n\setminus\{x\};\mathbb Z),$$ and the global orientation maps to the tuple of local orientation generators. ([[lem-local-sphere-orientations-and-finite-puncture-excision]])

[F2] A continuous map between oriented $n$-spheres, $n\ge1$, whose degree is nonzero must be surjective. ([[lem-a-map-of-nonzero-degree-between-spheres-is-surjective]])

## Proof

1.1 If the fibre is empty, $f$ omits a point, so its degree is zero by F2. This equals the empty sum. [F2]

1.2 For a nonempty finite fibre $F$, use the global-to-relative maps for $(S^n,S^n\setminus F)$ and $(S^n,S^n\setminus\{y\})$. Functoriality makes the square with $f$ commute. By F1, the source global generator maps to $(1)_{x\in F}$ and the target global generator maps to $1$. [F1]

2.1 On the summand indexed by $x$, the lower map in this square is multiplication by $\deg_x f$, by the local definition and excision. Its value on the diagonal is the sum of these integers. The other route through the square gives $\deg(f)$, proving the formula, also for a singleton fibre. [F1, step 1.2, algebra] ∎
