---
dependency_level: 3
id: lem-gcd-graph-small-prime-compression
kind: lemma
title: Recording all small primes with a bounded quality loss
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- lem-gcd-graph-quality-selection-and-pruning
- lem-gcd-graph-generic-prime-increment
- lem-gcd-graph-unbalanced-valuation-edge-bound
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

Put $D:=10^{10^{3000}}$. Every nontrivial finite weighted GCD graph $G$ with empty recorded prime set has a nontrivial subgraph $G_1$ with recorded primes all at most $H_0$, residual primes all greater than $H_0$, and
$$ q(G_1)\ge q(G)/D,\qquad \delta(G_1)q(G_1)\ge\delta(G)q(G)/D. $$

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[def-finite-weighted-gcd-graph]] is available, with its hypotheses and constants.

[F2] The full stated result or definition in [[lem-gcd-graph-quality-selection-and-pruning]] is available, with its hypotheses and constants.

[F3] The full stated result or definition in [[lem-gcd-graph-generic-prime-increment]] is available, with its hypotheses and constants.

[F4] The full stated result or definition in [[lem-gcd-graph-unbalanced-valuation-edge-bound]] is available, with its hypotheses and constants.

## Proof

1.1 For p in R with p≤H_0 one can add p with both quality ratio and density-times-quality ratio at least 10^-50. First trim to high degree, preserving density and quality. If p disappears from R, record f=g=0 and finish. Otherwise the small-prime dichotomy of [[lem-gcd-graph-generic-prime-increment]] either finishes with the stronger 10^-40, or gives a common k-class of masses at least 9/10. If p>10^41, also apply the large-prime dichotomy: its increment finishes, or its concentrated class must be this same k (two disjoint classes cannot each have mass ≥9/10). Consequently, when no increment finishes, both class masses are at least max(9/10,1-C_0/p). [given, F1, F2, F3, F4, algebra]

2.1 Choose an integer r≤6644 with p^r>H_0; this is possible because 2^6644>10^2000. Apply [[lem-gcd-graph-unbalanced-valuation-edge-bound]]. Its increment finishes, or at most 1/4 of all edge mass joins V_k to classes at distance at least r+1. High degree and alpha_k≥9/10 show that edges incident to V_k have at least 81/100 of total edge mass. Thus restricting to V_k and the union of W_l with |l-k|≤r retains at least 56/100, hence at least 1/2, of edge mass. Quality and density ratios are at least 2^-10 and 1/2. Partition that right union into at most 13289<15000 valuation classes and use [[lem-gcd-graph-quality-selection-and-pruning]]. The final rectangle has quality ratio at least (2·15000)^-10 and density ratio at least (2·15000)^-1, so quality and density-times-quality ratios are both at least (30000)^-11>10^-50. Recording p contributes a factor at least 1 to quality, and no density change. This proves the transition, including its product-density assertion. [given, F1, F2, F3, F4, algebra]

3.1 Beginning with P empty, iterate until no p≤H_0 lies in R. At most H_0 transitions occur. Only primes ≤H_0 have been recorded. Put
$$
D=10^{10^{3000}}.
$$
Because $(10^{50})^{10^{2000}}\le D$, the final graph G1 satisfies q_1≥q/D and delta_1·q_1≥delta·q/D. This is KM8.3 with its enormous but absolute constant, not an unspecified accumulated loss. [given, F1, F2, F3, F4, algebra] ∎
