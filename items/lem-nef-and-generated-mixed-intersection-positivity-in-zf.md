---
id: lem-nef-and-generated-mixed-intersection-positivity-in-zf
kind: lemma
title: Numerical-nef and generated mixed-intersection positivity without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-mixed-euler-component-and-birational-projection-formulas-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-projective-curve-degrees-and-projection-formula-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over a supplied infinite field; all coherent filtrations, section choices and component lists constructed in the proof are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Numerical intersections
      url: https://stacks.math.columbia.edu/tag/0BEL
      locator: Numerical degree conventions; finite filtration and base-field regular-section proof supplied here, not imported.
---

## Statement

Work in ZF. Let $k$ be infinite, $X/k$ projective, $d\ge1$, and $G$ coherent with support dimension at most $d$. Let $L$ be a line bundle with $\deg_C(L|_C)\ge0$ on every integral projective curve $C\subseteq X$. If $M_2,\ldots,M_d$ are globally generated line bundles, then
$$J_G(L,M_2,\ldots,M_d)\ge0.$$
The same conclusion holds when for each $i$ a positive integer power $M_i^{a_i}$ is globally generated. In particular this proves mixed numerical positivity for one arbitrary curve-nef entry and $d-1$ generated or semiample entries, in every dimension, including nonreduced or embedded coherent support. It does not require the curve-nef bundle to have a section.

More precisely, every coherent $G$ has a finite filtration whose factors are $O_V(-a)$ on reduced integral projective subvarieties $V\subseteq X$. For any globally generated line bundle $M$ there is a section whose multiplication $G\to G\otimes M$ is injective and whose cokernel has strictly smaller support dimension. These sections are chosen over the original field $k$, so the numerical curve condition is used only on actual curves of $X/k$. No invariance of nefness under an unproved field-extension or approximate-ampleness theorem is invoked.

## Facts & Assumptions

**Given:** The infinite field, projective finite data, coherent sheaf, dimension bound, curve-degree inequalities for $L$, and the stated generation or positive-power-generation of the remaining bundles.

[F1] Projective coherent supports have finitely many top components and finite generic lengths; their top mixed Euler differences decompose into component mixed differences with those lengths. [[lem-mixed-euler-component-and-birational-projection-formulas-in-zf]]

[F2] Coherent projective sheaves have finite chart presentations, large twists have finite global generating families, and their Euler characteristic is intrinsic and finite. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F3] Mixed Euler differences are exact-sequence additive, vanish above support dimension, are top tensor multilinear and invariant under twisting their coherent argument. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F4] Integral projective curve degrees agree with Euler-characteristic degrees, including singular curves, and are tensor additive. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

## Proof

1.1 Let $e$ be the largest support dimension of nonzero $G$. At a top component $V$, its generic module has finite length by [F1] and hence a nonzero socle. A one-dimensional residue-field subspace of that socle gives a nonzero generic section of the coherent finite-presentation sheaf $\operatorname{Hom}(O_V,G)$. By [F2], after a large twist this Hom sheaf has a finite global generating family, and one member is nonzero at $\eta_V$. It gives an injective map $O_V(-a)\to G$: generic nonzero gives injectivity at the generic point, and an invertible sheaf on integral $V$ has no nonzero subsheaf vanishing generically. The quotient decreases the generic length at $V$ by one and leaves the other $e$-dimensional generic lengths unchanged. After at most the finite sum of these lengths, a finite filtration has removed all top components, leaving support dimension below $e$. Repeat by induction on the finite support dimension. The zero sheaf ends the induction. This constructs a genuinely finite filtration of the original $G$ by the asserted factors; quotient supports stay inside the preceding support, so the top-length bound remains valid at each stage. [F1, F2, given, construct, algebra]

2.1 Let $s_0,\ldots,s_m$ be a finite global generating family of $M$. Such a finite family exists by quasi-compactness and finite chart generation. For each of the finitely many integral $V$ in the filtration, the sections vanishing identically on $V$ form a proper linear subspace of their coefficient space: at its generic point the family generates a one-dimensional line, so not every evaluation is zero. Choose coefficients along $(1,c,\ldots,c^m)$, where each nonzero evaluation polynomial has at most $m$ roots in $k$, even though its coefficients lie in $k(V)$. Because $k$ is infinite, one $c$ avoids the finite union of these finite root sets. The resulting section $s$ is nonzero on each integral factor. Multiplication by $s$ is therefore injective on $O_V(-a)$, since its chart coordinate ring is a domain. Inducting through the finite short exact filtration makes multiplication injective on $G$ itself. Its cokernel is zero at the generic points of every support component: the section has nonzero residue there and hence is a unit on the generic finite-length local module. Thus it has support dimension at most $e-1$, by the strict finite-type dimension drop. All sections and tests were finite and took place over $k$; no associated-prime selection theorem was needed. [F2, step 1.1, construct, algebra]

3.1 Set $Q_1=G$ and apply step 2.1 successively to $M_2,\ldots,M_d$ and the coherent cokernels, stopping with zero if one occurs. Each sequence $0\to Q_{i-1}\to Q_{i-1}\otimes M_i\to Q_i\to0$ is exact, and $\dim\operatorname{Supp}Q_i\le d-i+1$. In the finite coherent exact-sequence relations, it says $\Delta_{M_i}[Q_{i-1}]=[Q_i]$. Consequently exact-sequence additivity [F3] gives
$$J_G(L,M_2,\ldots,M_d)=\chi(Q_d\otimes L)-\chi(Q_d),$$
where $Q_d$ denotes the final sheaf after the $d-1$ cuts and has support dimension at most one. The notation $Q_d$ is used also when $d=1$, when there are no cuts and it means $G$. This is an equality of finite integers and actual coherent modules, not a virtual effective approximation. [F3, step 2.1, algebra]

4.1 Apply the component formula [F1] in dimension one to this final sheaf. All zero-dimensional or embedded parts give zero, and each reduced curve $C$ contributes its nonnegative generic length times $J_{O_C}(L|_C)=\deg_C(L|_C)$ by [F4]. The latter degree is nonnegative by the original curve condition. Thus the displayed integer in step 3.1 is nonnegative. All these are curves over the original field because the regular sections were constructed over that field in step 2.1. The argument includes arbitrary coherent multiplicities and singular curves. If the original support has dimension less than $d$, the same conclusion also follows from the vanishing clause [F3]. [F1, F3, F4, step 2.1, step 3.1, algebra]

5.1 If only the positive powers $M_i^{a_i}$ are globally generated, apply step 4.1 to them. Tensor multilinearity [F3] gives
$$J_G(L,M_2^{a_2},\ldots,M_d^{a_d})=(a_2\cdots a_d)J_G(L,M_2,\ldots,M_d).$$
The multiplier is positive, proving the claimed extension. For $d=1$ the empty multiplier is $1$, and the proof is just the length-weighted curve degree calculation in step 4.1. Zero sheaves, empty component lists and trivial bundles cause no exception. No claim that an arbitrary curve-nef bundle has such a generated power was used: the remaining arbitrary-nef mixed-positivity obligation is unchanged. [F3, step 4.1, algebra] ∎
