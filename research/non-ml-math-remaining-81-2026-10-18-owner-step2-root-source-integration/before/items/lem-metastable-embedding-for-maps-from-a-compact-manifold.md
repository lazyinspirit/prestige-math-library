---
id: lem-metastable-embedding-for-maps-from-a-compact-manifold
kind: lemma
title: Metastable approximation of maps by embeddings
deps:
- def-smooth-manifold
- def-smooth-embedding
- def-smooth-map-between-manifolds-with-boundary
- def-immersion-submersion-and-constant-rank-map
- cor-every-immersion-is-locally-an-embedding
- def-smooth-family-of-maps-and-evaluation-map
- def-null-subset-of-a-smooth-manifold
- thm-parametric-transversality
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
- prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
- thm-transverse-preimage-theorem
- def-a-smooth-map-transverse-to-an-embedded-submanifold
- thm-weak-whitney-proper-embedding-theorem
- thm-euclidean-tubular-neighbourhood-theorem
- cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction
- lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood
- def-compact-space
- def-countable-choice
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-collar-neighborhood-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: 'Lemma 6.11 and Lemma 6.12, printed p. 79 (Whitney approximation and Whitney embedding: a smooth map
      that is an embedding on a closed subset of $Y$ and has $\dim M\ge2\dim Y+1$ is homotopic relative to that
      subset to an embedding)'
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Theorems 7.1-7.2, printed p. 126 (Whitney immersion and embedding theorems)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N^n$ be a compact smooth manifold, $M^m$ a smooth manifold without boundary and $m\ge2n+1$. Then every smooth map $f:N\to M$ admits arbitrarily $C^1$-close smooth embeddings smoothly homotopic to it. More generally, if $C\subseteq N$ is closed and $f$ is an embedding on $C$, then there is a smooth embedding $g:N\to M$ that is homotopic to $f$ relative to $C$ and agrees with $f$ on $C$. Independently, if $N$ has boundary and $f|_{\partial N}$ is a smooth embedding, there is an embedding smoothly homotopic to $f$ relative to $\partial N$. To keep both $C$ and $\partial N$ fixed by the relative clause, its embedding hypothesis must hold on the combined closed set $C\cup\partial N$. The hypothesis $m\ge2n+1$ is used twice: injectivity comes from $2n<m$ and nondegeneracy of the differential from $m\ge2n+1$.

Here “embedding on a closed subset $C$” means injectivity on $C$ and injectivity of the ambient differential at every point of $C$; equivalently for compact $N$, $f$ is an embedding on a neighbourhood of $C$. This specifies the standard smooth relative-embedding hypothesis, rather than only topological injectivity of a restriction to an arbitrary closed set. For the boundary-only clause, one first chooses an embedded collar extension of the prescribed boundary embedding, keeping its boundary values fixed.

## Facts & Assumptions

[F1] A closed smooth embedded submanifold has a normal tubular neighbourhood under Countable Choice. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]

[F2] Under Countable Choice a smooth manifold admits a proper finite-dimensional Euclidean embedding. [[thm-weak-whitney-proper-embedding-theorem]]

[F3] An embedded Euclidean submanifold has a smooth normal tube and associated neighbourhood retraction. [[thm-euclidean-tubular-neighbourhood-theorem]]

[F4] A transverse finite-dimensional evaluation family has transverse slices outside a null parameter set. [[thm-parametric-transversality]]

[F5] A transverse inverse image has dimension equal to source dimension minus target codimension. [[thm-transverse-preimage-theorem]]

[F6] The diagonal $\Delta\subseteq M\times M$ of a smooth $m$-manifold is a closed embedded submanifold of codimension $m$; indeed, in each product chart it is the graph $\{(z,z)\}$ of the identity, an embedded $m$-submanifold of the $2m$-dimensional product, and it is closed because $M$ is Hausdorff.

[F7] The complement of a null set is dense in a positive-dimensional manifold. [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]

[F8] Under Countable Choice, countable unions of manifold null sets are null. [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]

[F9] Under Countable Choice, a smooth manifold with boundary admits a smooth collar. [[thm-collar-neighborhood-theorem]]

## Proof


**Given:** Countable choice, compact $N^n$, boundaryless $M^m$ with $m\ge2n+1$, and a smooth map $f$, with the stated relative embedding data when present.

1.1 In the simultaneous case replace $C$ by $C\cup\partial N$. In the unrestricted case take $C=\varnothing$. If $N$ is empty the claim is vacuous. Under the relative embedding hypothesis compactness supplies nested closed neighbourhoods $D_0\subset\operatorname{int}D_1$ of $C$ on which $f$ is an embedding. To see this, injectivity of the differential gives local embedding neighbourhoods about every point of $C$. If no smaller neighbourhood were globally injective, distinct pairs in shrinking neighbourhoods would converge by compactness to a pair in $C$ with equal images. Injectivity on $C$ forces the limits equal; one local embedding neighbourhood then excludes the pairs. In the independent boundary-only case use a source collar from [F9] and choose a smooth normal field to the embedded boundary inside $M$: after embedding $M$ in Euclidean space, project constant-vector parameters onto this normal bundle. The resulting section-evaluation is a submersion onto the fibre, and parametric transversality avoids its zero section because the normal rank $m-n+1$ exceeds $n-1$. The embedded boundary is compact, hence closed in $M$, so [F1] applies to it; a nonzero field in its normal bundle gives an embedded collar in that tube. Replace $f$ near its boundary by this collar extension, through a homotopy fixed on the boundary: on a small collar both maps are close to the same boundary value, and a target tubular retraction of their Euclidean linear interpolation gives the homotopy, with a cutoff on a slightly larger collar. Thus the relative argument applies with $C=\partial N$ and a protected collar. If the protected neighbourhood covers $N$, the prepared map is already an embedding; otherwise proceed with the adjustable core. [given, construct, F1, F2, F3, F4, F5, F7, F9]

2.1 Embed $M$ properly in Euclidean space and use a smooth tubular retraction $R$. Cover the compact core outside $\operatorname{int}D_1$ by finitely many source charts with bumps supported off $D_0$ and equal to one on smaller charts. For each bump independently multiply the constant function and all $n$ coordinate functions by every ambient coordinate vector, with independent parameters. At any point of a smaller chart constants span value variations; subtracting their appropriate multiples from the coordinate profiles gives functions vanishing at that point whose derivatives span the $n$ independent derivative columns. Composing the Euclidean perturbations with $R$ gives independent value and derivative variations, since $dR$ maps onto the target tangent space. Hence the local 1-jet evaluation is a submersion on the adjustable core at parameter zero, and remains so in a sufficiently small parameter ball by compactness. It is not asserted to be a submersion on the protected collar, where immersion already holds. [step 1.1, construct, algebra, F2, F3]

3.1 For a rank-$r$ matrix of size $m$ by $n$, a chart with an invertible $r$-minor writes the rank-$r$ stratum as the vanishing of the Schur-complement block. Its codimension is $(m-r)(n-r)$, least $m-n+1$ for $r<n$. Apply parametric transversality to these finitely many rank strata in local jet charts, restricting to their open matrix-chart domains; a finite or countable chart cover suffices. For a source with boundary apply [F4] separately on its interior and boundary, retaining the full $n$-column jet in both families; the source dimensions are $n$ and $n-1$. Since $n-(m-n+1)=2n-m-1<0$, good slices meet no rank-deficient stratum. By [F8] the union of the exceptional null sets is null. Choose a sufficiently small good parameter; immersion persists on $D_1$ by compactness and smallness. The resulting map $h$ is an immersion, unchanged near $C$. It can also be kept injective on $D_1$: local injectivity of $f$ there persists by projecting target charts to $n$ coordinates and integrating a derivative uniformly close to an invertible matrix along source-chart segments, while compactness gives a positive image separation for the remaining pairs in $D_1$. [step 1.1, step 2.1, construct, algebra, F4, F5, F7, F8]

4.1 For $n=0$, compact $N$ is finite; take $\delta>0$ below all distances between distinct source points, so the close-pair assertion is vacuous. For $n>0$, a finite collection of convex source charts gives a uniform local injectivity estimate stable under small $C^1$ perturbation of $h$: in each chart project a target chart to $n$ coordinates with derivative near a fixed invertible matrix $L$. If that derivative differs from $L$ by less than its least singular value, integrate along the segment between two source points to obtain a positive lower bound on the difference of their projected images. Compactness gives finitely many such charts and a Lebesgue radius $\delta$ for their smaller cover. Every sufficiently close map therefore separates distinct pairs of source distance less than $\delta$. Boundary half-charts are convex too. [step 3.1, construct, algebra]

5.1 Use finer bump charts of diameter less than $\delta/3$, with independent constant-vector parameters after the same target retraction. Their profiles vanish on $D_0$ and span values outside $D_1$. Because $h$ is injective on $D_1$, compactness gives a positive image separation for pairs in $D_1$ at source distance at least $\delta/2$; sufficiently small perturbations preserve it. On the open pair region of source distance greater than $\delta/2$, any coincidence therefore has at least one point outside $D_1$. A value-spanning profile at that point has support excluding the other point, so the two-point evaluation is transverse to the target diagonal at every possible coincidence. Apply parametric transversality separately on the interior/boundary pair strata, each of dimension at most $2n$, and use [F8] to combine the exceptional sets. The inequality $2n-m<0$ excludes all such pairs for a sufficiently small good parameter; no smoothness of a distance-level boundary is required. Step 4.1 excludes the remaining pairs and ensures immersion persists. The resulting map is an injective immersion of a compact manifold, hence an embedding. Straight parameter segments and the retraction give a smooth homotopy to $f$, fixed near the protected set, with the initial boundary-collar homotopy included only in the boundary-only case; reparametrize at concatenation points to make the homotopy smooth. Taking both perturbations sufficiently small gives the asserted arbitrary $C^1$ closeness in the unrestricted case. All profiles and cover choices are finite; countable choice enters through the declared embedding, collar, tube and genericity suppliers. [step 1.1, step 3.1, step 4.1, construct, F4, F5, F6, F7, F8] ∎
