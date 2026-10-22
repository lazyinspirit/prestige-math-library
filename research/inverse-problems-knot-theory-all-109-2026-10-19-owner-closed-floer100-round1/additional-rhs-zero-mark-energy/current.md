---
id: lem-rational-homology-sphere-zero-marked-strips-have-uniform-energy-bounds
kind: lemma
title: "Zero-marked strips on a rational homology sphere have one domain per endpoint pair and a uniform energy bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-rational-homology-sphere-heegaard-periodic-domains-are-constant
  - lem-heegaard-strip-domain-differences-have-full-curve-boundaries
  - lem-nearly-symmetric-heegaard-strip-domain-energy-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Rational homology sphere periodic domains and hat energy finiteness in Sections3–4; the endpoint-domain argument is supplied locally"
---

## Statement

Assume countable choice. Fix a complete singly pointed Heegaard diagram of a closed three-manifold $Y$ with $H_2(Y;\mathbb Q)=0$, a surface complex structure and area form, target metric, one point $a_R$ in every attaching-curve region, including the basepoint $z$, and exact product generator charts avoiding all these divisors and the diagonal. Consider a fixed nearly symmetric path $J_t$ satisfying the strip domain-energy and domain-boundary lemmas, and actual smooth finite-energy strips with uniform generator ends and $n_z=0$.

For each ordered pair of generators, all these strips have the same integral region domain. Every same-generator such strip is constant. There is one finite bound $E_0$ for the energies of all these strips, independent of their Fredholm index and Whitney class. Thus no domain Maslov formula is needed for this energy bound.

The same conclusions hold simultaneously for any set of such paths with the fixed surface, curve and chart data, if their domain-energy inequality has one common constant $C$. This common constant exists on a sufficiently small $C^0$ neighborhood of any fixed allowed path when its integrable diagonal/divisor neighborhoods and generator charts remain fixed. This is a uniform actual energy theorem; it asserts neither generic regularity nor well-defined Floer counts.

## Statement references

[[def-countable-choice]]

[[lem-rational-homology-sphere-heegaard-periodic-domains-are-constant]]

[[lem-heegaard-strip-domain-differences-have-full-curve-boundaries]]

[[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]]

## Facts & Assumptions

**Given:** The actual complete cut diagram, $H_2(Y;\mathbb Q)=0$, fixed region points and geometry, and the indicated set of actual paths and finite-energy zero-marked strips.

[F1] [[lem-rational-homology-sphere-heegaard-periodic-domains-are-constant]] proves that every full-curve periodic region domain in this diagram is $c[\Sigma]$, so a zero-basepoint one is zero.

[F2] [[lem-heegaard-strip-domain-differences-have-full-curve-boundaries]] proves, for actual strips with the same ends even when their interior perturbations differ, that the difference of their actual domains is a full-curve periodic domain. A same-generator strip's own domain is periodic.

[F3] [[lem-nearly-symmetric-heegaard-strip-domain-energy-bound]] proves $E(u)\le C\sum_R n_R(u)\int_R\eta$. Its proof obtains $C$ only from fixed quotient-metric derivative bounds on the integrable diagonal part and uniform pointwise tameness bounds on a compact complement of a smaller diagonal neighborhood.

## Proof

1.1 In genus zero the target is one point and every strip is constant with zero domain and zero energy, so all conclusions hold with $E_0=1$; in the family assertion this remains so for every path. Assume henceforth positive genus. For two strips with the same ordered ends, [F2] makes $P=D(u)-D(v)$ periodic. Its basepoint coefficient is zero because both strips have $n_z=0$. By [F1] it vanishes. Thus their actual domains agree, whether their interior almost complex paths coincide or merely satisfy the common data of the Statement. If the ends of a strip agree, [F2] makes its own domain periodic with basepoint coefficient zero, so [F1] makes it zero. The energy inequality [F3] then forces its nonnegative energy to be zero. A smooth map with zero Dirichlet energy on the connected strip has zero derivatives everywhere and is constant. [F1, F2, F3, given, construct, algebra]

2.1 There are finitely many generators, since opposite-system curves have finitely many transverse intersections and a generator is one of finitely many possible matching tuples. Hence there are finitely many ordered endpoint pairs. For each pair admitting a strip in the specified set choose one actual strip and its domain; this uses only a finite number of choices. Step 1.1 says that the domain $D_{xy}$ thereby chosen is common to every actual strip with those ends. Each of the finitely many numbers $$C\sum_R n_R(D_{xy})\int_R\eta$$ is finite, since the region set is finite and its coefficients are integers. It is nonnegative whenever such a strip exists, by [F3]. Their finite maximum, enlarged by one, is a uniform upper bound $E_0$. If there are no such endpoint pairs, set $E_0=1$. For a family of paths the same argument uses its one common $C$ and the same finite endpoint-pair domains from step 1.1. No choice of one strip per homotopy class or per parameter was made. [F3, step 1.1, construct, algebra]

3.1 We verify the stated local uniformity of $C$. Choose a smaller diagonal neighborhood $V_0$ with closure in the fixed integrable neighborhood $V$. On the compact complement $X\setminus V_0$, the descended product two-form is smooth. The fixed allowed background path has a positive uniform minimum of $\omega(v,J_tv)$ over unit vectors there: outside $V$ this is its tameness, and on $V\setminus V_0$ it is the positive product form with the fixed standard complex structure. Compactness of the parameter interval and unit sphere bundle gives the minimum. A sufficiently small $C^0$ change in $J_t$, supported off the fixed integrable neighborhoods, preserves at least half this minimum and gives a common upper bound for $|J_t|$. The pointwise estimate $$\tfrac12(|v|_g^2+|J_tv|_g^2)\le c\,\omega(v,J_tv)$$ consequently has one common $c$ on that complement. On the integrable part $V_0$, the product metric, the quotient map derivative bound and the standard complex structure are fixed. These are exactly the two constants used in [F3]'s actual ordered-cover energy proof. Taking their fixed maximum therefore supplies one common $C$ for all paths in this neighborhood. Step 2.1 applies, completing the uniform energy and constant-self-strip conclusions without a Fredholm-domain formula, genericity or Floer invariance assertion. [F3, step 2.1, construct, algebra] ∎
