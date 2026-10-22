---
id: lem-balanced-knot-strips-in-bounded-index-sets-have-finite-domains-and-energy
kind: lemma
title: "Balanced knot strips in finite index sets have finitely many domains and bounded energy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
  - lem-balanced-knot-whitney-index-differences-equal-twice-total-mark-differences
  - lem-heegaard-strip-domain-differences-have-full-curve-boundaries
  - lem-pointed-heegaard-integrable-divisor-positivity
  - lem-symmetric-product-divisor-intersections-and-point-movement
  - lem-nearly-symmetric-heegaard-strip-domain-energy-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Balanced marked cut systems in Definition2.2; the full marked-index finite-domain consequence is proved below"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Domain-energy method in Section3; no domain-index formula is imported"
---

## Statement

Assume Countable Choice. Fix an actual balanced multipointed diagram of one oriented knot in $S^3$, its cyclic ordered marks, surface complex structure, area form, target metric, region points and product-integrable generator charts. Let $I\subset\mathbb Z$ be a finite set. Consider all actual smooth finite-energy nearly symmetric holomorphic strips with generator ends and actual fixed-end real Fredholm index in $I$, before source translation. Require the protected integrable neighborhoods used for divisor positivity and the domain-energy estimate. ALL $w_i$ and $z_i$ multiplicities are allowed, including positive $z_i$ multiplicities.

For each ordered generator pair and each $d\in I$, the two nonnegative totals $\sum_i n_{w_i}$ and $\sum_i n_{z_i}$ are constant on the strips with those ends and index $d$. There are only finitely many actual integral region domains across all these pairs, indices and realized classes. For fixed ends and the full ordered vector of $w$ and $z$ multiplicities, at most one domain occurs. All the strips have a common finite energy bound. These conclusions hold simultaneously on any collection of paths with the fixed geometric data and a common domain-energy constant; such a constant exists on a sufficiently small $C^0$ neighborhood with the protected data fixed.

For a same-generator strip, its index equals both twice its total $w$ degree and twice its total $z$ degree. Thus a same-generator strip of index zero is constant, index one is impossible, and index two has both totals one. No claim of regularity, finite moduli counts, compactified boundary cancellation, grading normalization, move invariance or grid comparison is included. No vanishing-$z$ substitution is made.

## Facts & Assumptions

**Given:** The fixed balanced knot diagram, protected geometry, finite actual index set and actual holomorphic strips.

[F1] For any two realized same-end Whitney classes, the difference of their actual indices is twice each total marked-degree difference. Same-generator classes have index twice each total degree. ([[lem-balanced-knot-whitney-index-differences-equal-twice-total-mark-differences]])

[F2] Actual strip domain differences are full-curve periodic. In the balanced $S^3$ knot diagram a periodic domain with every $w$ and $z$ coefficient zero is zero. ([[lem-heegaard-strip-domain-differences-have-full-curve-boundaries]], [[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]])

[F3] Actual marked multiplicities are nonnegative integers, equal to the marked-region divisor degrees. ([[lem-pointed-heegaard-integrable-divisor-positivity]], [[lem-symmetric-product-divisor-intersections-and-point-movement]])

[F4] An actual strip satisfies $E(u)\le C\sum_R n_R(u)\int_R\eta$ with the fixed domain and surface data. Its constant depends only on fixed quotient bounds in the integrable part and uniform taming and metric bounds elsewhere. ([[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]])

## Proof

1.1 The generator set is finite: it is a subset of the finitely many matching tuples of the finite transverse attaching-curve intersection sets. Fix one ordered pair and $d\in I$. If it has no actual strip there is nothing to count. Otherwise choose one actual strip from this set. There are only finitely many pair/index sets, so all such choices are finite. For any other strip in this set [F1] makes each of its total marked-degree differences zero. Both totals consequently equal two fixed nonnegative integers $W_{xy,d},Z_{xy,d}$ by [F3]. This compares actual classes across different paths with the same protected target data as well; the invariant in [F1] is topological and uses their actual indices. [F1, F3, given, construct, algebra]

2.1 There are at most $(W_{xy,d}+1)^k(Z_{xy,d}+1)^k$ nonnegative ordered marked-degree vectors with these totals. If two actual strips with the same ends have the same full vector, their domain difference is periodic by [F2] and vanishes at every $w$ and $z$ mark. The vanishing assertion of [F2] makes the entire difference zero. Thus at most one domain occurs for each vector. Taking the finite union over all pairs and $d\in I$ proves the claimed finite domain set, without asserting that any merely formal vector or chain has a representative. [F2, F3, step 1.1, construct, algebra]

3.1 For each actual domain in that finite set the right side of [F4] is one fixed real number times $C$. Choose one actual domain witness only for each nonempty finite set if needed; these are finite choices. Their finite maximum, plus one, is a common energy bound for a fixed path or for any collection with a common $C$. For an empty collection use bound one. A common $C$ exists locally: off a smaller protected diagonal neighborhood, the background taming expression $\omega(v,J_tv)$ on the compact unit-vector bundle has a positive minimum. A small $C^0$ change preserves half this minimum and a common bound on $|J_t|$. Inside the protected integrable neighborhood the quotient derivative and product metric estimates are fixed. These are precisely the estimates in [F4], so they yield one common constant. No compactness, regularity or moduli cardinality conclusion is used. [F4, step 2.1, construct, algebra]

4.1 For same-generator strips [F1] gives index $2\sum n_w=2\sum n_z$. Index zero makes every marked multiplicity zero by [F3]; comparison with the actual constant strip and [F2] then makes the full domain zero. Estimate [F4] forces energy zero, hence the smooth map on the connected strip is constant. Index one is excluded by the displayed even integer identity. At index two each nonnegative total is one. Finally if $m=0$ the target is a point and all maps, domains and indices are zero directly. The finiteness and energy bounds cover the full positive-$z$ filtered scope; analytic counting and cancellation remain separate obligations. [F1, F2, F3, F4, algebra] ∎
