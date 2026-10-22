---
id: lem-balanced-knot-zero-z-strips-have-finitely-many-domains-and-uniform-energy
kind: lemma
title: "Balanced knot strips with zero z multiplicities have finitely many domains and uniformly bounded energy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
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
      locator: "Balanced marked cut systems in Definition2.2; the finite-domain consequence below is proved from actual strip boundaries"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Domain-energy method in Section3; no domain-index formula is imported"
---

## Statement

Assume countable choice. Fix an actual balanced multipointed diagram for one oriented knot in $S^3$, with the complete compression disks, simultaneously parallel knot arcs and cyclic ordered marks of the pointed-data convention. Its individual cut-surface components are $A_i,B_i$, with $w_i,z_i\in A_i$ and $w_i,z_{i+1}\in B_i$ for $1\le i\le k$, cyclically. Fix its surface complex structure, area form, target metric, a region point in each region, and product generator charts avoiding the diagonal and all chosen region and marked divisors. Consider actual smooth finite-energy holomorphic strips with uniform generator ends, for nearly symmetric paths integrable near those divisors and the diagonal, satisfying $n_{z_i}(u)=0$ for every $i$. The $w_i$ multiplicities may be positive.

For every ordered generator pair there is one fixed nonnegative integer $S_{xy}$ such that every such strip with those ends satisfies $\sum_i n_{w_i}(u)=S_{xy}$. Only finitely many actual integral region domains occur for that pair. For each possible $w$-multiplicity vector there is at most one such domain. Every same-generator strip in this class is constant. The energies of all these strips, across all generator pairs and all actual indices and Whitney classes, have one finite upper bound.

The finite-domain conclusions hold simultaneously for paths with the fixed geometric data. The energy conclusion holds simultaneously whenever their domain-energy constants have one common bound, in particular on a sufficiently small $C^0$ neighborhood with the integrable neighborhoods and generator charts fixed. In the case that a pair admits no strip, take $S_{xy}=0$ and its domain set empty. This supplies a finiteness and energy prerequisite for the zero-$z$ knot Floer differential with positive $w$ powers; it asserts no regularity, square-zero, grading formula, move invariance or grid-to-analytic comparison.

## Statement references

[[def-countable-choice]]

[[def-admissible-pointed-heegaard-floer-data]]

[[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]]

[[lem-heegaard-strip-domain-differences-have-full-curve-boundaries]]

[[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]]

## Facts & Assumptions

**Given:** The actual balanced splitting in $S^3$, its cyclic marked cut components, fixed analytic geometry and actual zero-$z$ finite-energy strips. No domain or index class is assumed to have a holomorphic representative.

[F1] [[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]] proves every full-curve periodic domain has an integral representation $P=\sum_i a_iA_i+\sum_i b_iB_i$ and proves that a periodic domain with all $w$ and $z$ coefficients zero is zero. It does not require admissibility as an input.

[F2] [[lem-heegaard-strip-domain-differences-have-full-curve-boundaries]] proves that two actual strips with the same ends have a full-curve periodic domain difference, even when the interior perturbations differ; a same-generator strip's own domain is periodic.

[F3] [[lem-pointed-heegaard-integrable-divisor-positivity]] proves nonnegative actual marked multiplicities. [[lem-symmetric-product-divisor-intersections-and-point-movement]] identifies divisor degrees at two points of the same attaching-curve complement component. Thus the actual marked multiplicities agree with the corresponding region coefficients used in [F1].

[F4] [[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]] proves the actual domain-energy estimate for each such path. Its proof uses only uniform taming constants off a smaller diagonal neighborhood and the fixed quotient derivative bound on the integrable part.

## Proof

1.1 If $m=h+k-1=0$, the symmetric product is a point and every strip is constant with zero marked multiplicities and zero energy, so the assertions hold directly. Assume henceforth $m>0$. For every full-curve periodic domain the representation [F1] gives $$\sum_{j=1}^k n_{w_j}(P)=\sum_i a_i+\sum_i b_i=\sum_{j=1}^k n_{z_j}(P).$$ Indeed each $A_i$ contains precisely one point from each marked set, and each $B_i$ does as well; the cyclic shift of the beta $z$ index permutes that sum. This is an evaluation of integral region chains at the actual points, including when several marks occupy one region. For two zero-$z$ strips with the same ends, [F2] makes $P=D(u)-D(v)$ periodic and its total $z$ coefficient zero. The displayed identity therefore makes their total $w$ coefficients equal. If any strip for that endpoint pair exists, this common integer $S_{xy}$ is nonnegative by [F3]. Otherwise use the convention in the Statement. [F1, F2, F3, given, construct, algebra]

2.1 Each individual $w$ coefficient of an actual strip is an integer between zero and $S_{xy}$ by [F3]. There are at most $(S_{xy}+1)^k$ such vectors, hence finitely many. If two strips with the same ends also have the same vector, their periodic difference from [F2] has every $w$ coefficient zero and every $z$ coefficient zero. The last conclusion in [F1] makes that difference zero, so their entire domains agree. This proves one domain per vector and finitely many domains per ordered endpoint pair, without selecting or realizing any merely formal domain. For a same-generator strip compare with the actual constant strip at that generator. Its zero marked domain makes $S_{xx}=0$ by step 1.1. Thus all $w$ coefficients of the given strip are zero, and its already zero $z$ coefficients and [F1]–[F2] make its entire domain zero. The estimate [F4] forces energy zero, and smoothness on the connected strip makes the map constant. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 The generator set is finite, since there are finitely many attaching-curve intersections and finitely many matching tuples. Steps 1.1–2.1 give a finite union of actual domain sets across its finitely many ordered pairs. For a fixed path the right sides $C\sum_R n_R\int_R\eta$ of [F4] consequently take only finitely many values; taking their maximum plus one bounds every actual strip energy. If there are no strips, use bound one. The same reasoning applies to a collection of paths with common geometry and one common energy constant $C$, because the periodic-domain comparison in [F2] compares those paths too. There is no selection over infinitely many classes or parameters: the finite possible vectors and the one-domain assertion suffice, and one may choose one actual witness from each nonempty finite-domain set using finite choice. No Fredholm index has entered this argument. [F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 For completeness the needed uniform $C$ is locally available. Choose one smaller diagonal neighborhood whose closure lies in the fixed integrable one. Off it, the background path has a positive minimum of $\omega(v,J_tv)$ on the compact parameterized unit-vector bundle; on the portion inside the integrable neighborhood this follows from the fixed product complex structure. A sufficiently small $C^0$ variation preserves half this minimum and a common bound on $|J_t|$, giving the uniform pointwise energy-to-area estimate there. On the integrable diagonal part the product metric and derivative of the fixed quotient map are unchanged. These are exactly the two bounds used in the actual proof [F4], so one constant works for all paths in that neighborhood. The stated finiteness and energy conclusions retain positive $w$ multiplicities wherever they actually occur. No genericity, domain-index identity or Floer comparison has been inferred. [F4, step 3.1, construct, algebra] ∎
