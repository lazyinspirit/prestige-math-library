---
id: lem-unramified-local-unit-norms-and-cohomology
kind: lemma
title: Unit norms and positive cohomology in unramified local extensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- thm-hilbert-90-for-finite-galois-extension
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- lem-finite-choice
- lem-finite-semilinear-descent-and-matrix-inner-automorphisms
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- lem-cyclic-group-cohomology-norm-and-inflation
justified_by: []
proof_strategy: direct
axiom_use: None; one finite ordered residue alphabet and uniquely defined recursions suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter III §1, Propositions 1.1–2.1, Lemmas 1.3–1.5 and Corollary 1.6,
      printed pp.97–99; trace nonvanishing proved through field-automorphism independence.
verification: {}
---

## Statement

Use normalized cochains and normalized continuous cochains for cohomology. If $E/K$ is a finite unramified extension of complete discretely valued fields with finite residue fields, then its unit norm $\mathcal O_E^\times\to\mathcal O_K^\times$ is onto and $H^r(\operatorname{Gal}(E/K),\mathcal O_E^\times)=0$ for every $r>0$. For $K^{\mathrm{ur}}/K$ the same vanishing holds in continuous positive cohomology with coefficients $\mathcal O_{K^{\mathrm{ur}}}^\times$ given the discrete topology. Moreover $\Gamma=\operatorname{Gal}(K^{\mathrm{ur}}/K)\cong\widehat{\mathbb Z}$ and each finite power of $\Gamma$ are compact without a choice axiom. These assertions are not made for ramified extensions.

## Statement references

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-hilbert-90-for-finite-galois-extension]]

[[lem-cyclic-group-cohomology-norm-and-inflation]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] Finite unramified extensions have the cyclic residue Galois group and a uniformizer from the base field. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F2] Hilbert 90 gives $H^1(G,E^\times)=0$. [[thm-hilbert-90-for-finite-galois-extension]]

[F3] For cyclic $G=\langle\sigma\rangle$, positive even cohomology is $M^G/NM$ and odd cohomology is $\ker N/(\sigma-1)M$. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F4] For a compact profinite group, normalized continuous cohomology is the direct limit of finite-quotient cohomology with invariant coefficients, without an additional choice axiom. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F5] Distinct field automorphisms are linearly independent as functions, as proved in step 1.1. [[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

[F6] The multiplicative group of a finite field is cyclic. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F7] A finite indexed list of nonempty sets admits simultaneous choices in ZF; the continuous cochain model itself is choice-free. [[lem-finite-choice]] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Put $n=[E:K]$, and let $\ell/k$ be the degree-$n$ residue extension. Its multiplicative norm is onto: $\ell^\times$ is cyclic of order $q^n-1$, and raising a generator to $(q^n-1)/(q-1)$ yields an element of order $q-1$. Its additive trace is onto as well. The sum of its distinct automorphisms is not the zero function by [F5], its image is contained in $k$, and it is $k$-linear; hence it has nonzero image in the one-dimensional $k$-space $k$. This includes characteristics dividing $n$. [F1, F5, F6, given, algebra]

1.2 In a fixed maximal unramified extension, the finite degree-$n$ subfield is unique: the finite-field inclusion and [F1]'s unique Hensel lifts determine its image. All such fields exist by [F1]; hence the fields $K_{j!}$ form a uniquely specified cofinal tower, with quotient groups $\mathbb Z/j!\mathbb Z$ ordered by their integer representatives and transitions reduction. Thus $\Gamma=\operatorname{Gal}(K^{\mathrm{ur}}/K)$ is the inverse limit of these cyclic quotients. This inverse limit and every fixed finite power are compact without choice. Indeed a cylinder is specified by one finite coherent residue tuple. If an open cover had no finite subcover, a bad cylinder would have a bad child, since it has finitely many children. Recursively choose the first bad child in the finite residue order. The resulting coherent tuple is a point of the inverse limit; some member of the cover contains a prefix cylinder about it, contradicting badness. This also proves compactness of each finite power by ordering its finite residue tuples. [F1, F7, given, construct]

2.1 Let $\pi$ be a uniformizer of $K$, also of $E$. Reduction identifies $\mathcal O_E^\times/(1+\pi\mathcal O_E)$ with $\ell^\times$, and identifies $(1+\pi^j\mathcal O_E)/(1+\pi^{j+1}\mathcal O_E)$ with additive $\ell$ for $j\ge1$. Expanding the norm product shows that its map on the latter quotient is trace: cross terms have valuation at least $2j\ge j+1$. Fix an ordered finite alphabet of representatives of $\ell$ in $\mathcal O_E$ by [F7]. For $u\in\mathcal O_K^\times$, take the first nonzero representative whose residue norm is $\bar u$. If the current unit $v_j$ has $u/N(v_j)\equiv1\pmod{\pi^j}$, choose the first representative $a_j$ whose residue trace is the residue of $(u/N(v_j)-1)/\pi^j$, and put $v_{j+1}=v_j(1+\pi^j a_j)$. The expansion proves $u/N(v_{j+1})\equiv1\pmod{\pi^{j+1}}$. Every correction is uniquely determined by the fixed finite alphabet, so this recursion uses no countable choice. The product of corrections converges by completeness, its norms converge to $u$ because norm is a finite product of continuous field automorphisms, and it is a unit. This proves norm-surjectivity. [F1, F7, step 1.1, construct]

3.1 The $G$-equivariant decomposition $E^\times=\mathcal O_E^\times\times\pi^{\mathbb Z}$ makes unit cohomology a direct summand. By [F2], its $H^1$ is zero. By step 2.1 its even positive groups vanish by [F3], and [F3]'s cyclic periodicity gives all remaining positive degrees from $H^1$. For the trivial extension these are the zero groups directly. [F1, F2, F3, step 2.1, algebra]

4.1 For the unramified tower each quotient by $j!\Gamma$ has invariant unit module exactly $\mathcal O_{K_{j!}}^\times$. To see this, an element lies at a finite level, and fixedness is the finite cyclic fixed-field criterion at a common later factorial level. Each finite-level positive cohomology group vanishes by step 3.1. By compactness in step 1.2, [F4] applies in its choice-free normalized-cochain branch; the continuous positive cohomology is their zero direct limit. No ramified unit vanishing is used. [F1, F4, step 3.1, step 1.2, algebra] ∎
