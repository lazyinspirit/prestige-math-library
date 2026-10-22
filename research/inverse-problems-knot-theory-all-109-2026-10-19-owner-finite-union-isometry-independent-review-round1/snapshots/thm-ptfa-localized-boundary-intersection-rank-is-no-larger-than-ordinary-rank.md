---
id: thm-ptfa-localized-boundary-intersection-rank-is-no-larger-than-ordinary-rank
kind: theorem
title: PTFA localized boundary intersection rank comparison
status: draft
origin: session
deps: [thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf, lem-choice-free-wall-chain-finiteness-from-explicit-domination, lem-ptfa-finite-projective-basechange-preserves-euler-characteristic, lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions, thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf, thm-compact-oriented-manifold-local-coefficient-duality-in-zf, lem-involutive-twisted-chain-duals-realize-local-coefficient-duality, thm-pair-long-exact-sequences-with-local-coefficients, thm-topological-collaring-for-manifold-boundaries]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemma4.12, printed page17
---

## Statement

Let $W$ be a compact connected oriented Hausdorff topological four-manifold and put $M=\partial W$, allowing $M$ empty. Let $k$ be a commutative field, $G$ a PTFA group, and $\phi:\pi_1(W)\to G$ a supplied coefficient homomorphism. Write $K$ for the fraction division ring of $k[G]$, with its standard involution, and use the induced rank-one right-coefficient systems. Suppose $\dim_kH_1(M_j;k)=1$ for each connected component $M_j$ of $M$. Then
$$\dim_K\operatorname{coker}\{H_2(M;K)\to H_2(W;K)\}\le\dim_k\operatorname{coker}\{H_2(M;k)\to H_2(W;k)\}.$$
All dimensions in the formula are finite. No choice axiom, smoothness, triangulation, or supplied finite CW model of $W$ is assumed.

## Facts & Assumptions

**Given:** The compact oriented manifold, field, group, coefficient homomorphism and boundary first-Betti hypothesis.

[F1] Singular right-coefficient chains of a compact manifold, with boundary allowed, have an actual basis and explicit domination by a bounded finite-free complex. The choice-free Wall construction converts that domination into a nonnegative bounded finitely generated projective chain model, with maps and homotopies. [[thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf]], [[lem-choice-free-wall-chain-finiteness-from-explicit-domination]]

[F2] Finite projective PTFA base change preserves Euler characteristic and gives $b_1^K\le b_1^k-1$ when $b_0^k=1$ and $b_0^K=0$. The group-ring fractions and standard involution exist for the stated fields. [[lem-ptfa-finite-projective-basechange-preserves-euler-characteristic]], [[lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions]]

[F3] Compact boundaries have collars, without choice. Relative and closed cap duality apply to arbitrary underlying abelian-group local systems with commuting actions. The standard unitary structure identifies dual cochains with conjugate chains; its simplexwise formula respects boundary subcomplexes. [[thm-topological-collaring-for-manifold-boundaries]], [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]], [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F4] The homology pair sequence is exact with its actual inclusion and boundary maps. [[thm-pair-long-exact-sequences-with-local-coefficients]]

## Proof

1.1 Apply [F1] to the actual $k[G]$ singular complex of $W$ and to each of the finitely many boundary components. Tensoring the specified chain equivalences and homotopies with $k$ or $K$ preserves their equations. On singular generators augmentation sends every group transport to $1$, so these are exactly the ordinary $k$ and twisted $K$ chains. The bounded projective models show that all homology dimensions are finite. By [F2] their alternating homology dimensions are equal; denote the common number by $\chi$. Apply [F1] over $k$ as well when needed. If a coefficient homomorphism is trivial, its actual singular $K$ complex is the constant singular $k$ complex tensored with $K$. Its bounded projective $k$ model is a bounded finite-dimensional vector-space complex; finite elimination splits it into its homology and contractible pairs. Tensoring those finite splittings with $K$ proves equality of all ordinary and $K$ Betti numbers in the trivial case, without a choice of a basis in an infinite vector space. [F1, F2, given, construct, algebra]

2.1 For a connected space with nontrivial $\phi$, $H_0(-;K)=0$: paths identify all point fibers with the base fiber in degree zero, and a based loop with image $g\ne1$ imposes $(g-1)K=K$, because the nonzero element $g-1$ is invertible in $K$. This argument uses one path for each individual zero-cycle, not a simultaneous path selection. If the homomorphism is trivial, $H_0(-;K)=K$. For $W$ write $\beta_i=\dim_k H_i(W;k)$ and $b_i=\dim_KH_i(W;K)$. If its homomorphism is nontrivial, $\beta_0=1,b_0=0$, so [F2] gives $b_1\le\beta_1-1$. This uses the nonnegative bounded projective model from step 1.1, not an unproved finite CW structure. [F1, F2, step 1.1, construct, algebra]

2.2 Here is the exact rank formula for either coefficient system. Write $c_i$ for its dimensions on $W$ and $a_i$ for those on $M$. Finite projective models over the division field identify dual cohomology dimensions with homology dimensions by finite elimination, and [F3] therefore gives $H_i(W,M)$ dimension $c_{4-i}$ and boundary dimensions $a_i=a_{3-i}$. If $M$ is nonempty, $H_4(W)=0$: under relative duality it is degree-zero relative cohomology, whose parallel sections vanishing on the nonempty boundary vanish on connected $W$. The top of the pair sequence is then $$0\to H_4(W,M)\to H_3(M)\to H_3(W)\to H_3(W,M)\to H_2(M)\to H_2(W).$$ Successive image dimensions are $c_0$, $a_0-c_0$, $c_3-a_0+c_0$, and $c_1-c_3+a_0-c_0$. Hence the image of $H_2(M)\to H_2(W)$ has dimension $a_1-c_1+c_3-a_0+c_0$, and its cokernel has dimension $$r_*=c_2-a_1+c_1-c_3+a_0-c_0=\chi+2c_1-2c_0-a_1+a_0.$$ In the last equality $H_4(W)=0$ and higher homology vanishes by duality. If $M$ is empty, closed duality gives $c_4=c_0,c_3=c_1$ and $r_*=c_2$, yielding the same formula with $a_0=a_1=0$. Thus the formula is valid in both boundary cases. [F1, F3, F4, step 1.1, construct, algebra]

3.1 For a boundary component write $\beta_i^j,b_i^j$ similarly. If its restricted homomorphism is trivial, step 1.1 gives $b_i^j=\beta_i^j$. Otherwise step 2.1 and [F2], applied to that component's projective model, give $b_0^j=0$ and $b_1^j\le\beta_1^j-1=0$. Thus $b_1^j=0$, while $\beta_0^j=\beta_1^j=1$. In both cases $$\beta_1^j-b_1^j=\beta_0^j-b_0^j.$$ Summing over the finitely many components gives the identical equality for the total boundary Betti numbers $\beta_i(M),b_i(M)$. It also holds for empty boundary, with all four numbers zero. [F1, F2, given, step 1.1, step 2.1, construct, algebra]

4.1 If $\phi$ on $W$ is trivial, equality of all Betti numbers and natural ordinary coefficient base change in step 1.1 give equality of the two cokernel dimensions, or equivalently the identical formulas of step 2.2 do. Suppose it is nontrivial. Subtract the $K$ formula from the $k$ formula, using the common Euler number and $\beta_0=1,b_0=0$: $$r_k-r_K=2(\beta_1-1-b_1)-(\beta_1(M)-b_1(M))+(\beta_0(M)-b_0(M)).$$ The last two terms cancel by step 3.1, and the first is nonnegative by step 2.1. This proves the claimed inequality for empty or nonempty boundary. Every chain-model construction used actual domination maps and a finite projective strictification; every subsequent elimination and exact-sequence dimension computation was finite. Therefore no choice principle or smooth/PL/CW assumption on the manifold has been introduced. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 2.2, algebra] ∎
