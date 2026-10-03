---
id: lem-closure-depends-only-on-the-braid-isotopy-class
kind: lemma
title: "The closure depends only on the braid isotopy class"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-closure-of-a-geometric-braid, def-braid-isotopy-relative-top-and-bottom,
       def-geometric-braid-with-setwise-endpoints,
       lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy,
       lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2, printed pp. 12-20"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Julian Chaidez, Notes on Smooth Topology and Symplectic Embedding Problems (Berkeley Geometry REU), Isotopy Extension Theorem 2.39, printed pp. 35-36"
      url: "https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. If $\beta,\beta'$ are braid-isotopic geometric
$n$-braids based at $Q$, then their closures are equivalent oriented links.
More precisely, the braid isotopy induces an isotopy of the closures through
closed $n$-braids about the standard axis $A$, hence an ambient isotopy of $S^3$
carrying $\widehat\beta$ to $\widehat{\beta'}$. Consequently the closure
construction is well defined on braid isotopy classes.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, two braids $\beta,\beta'$ based at $Q$ ([[def-geometric-braid-with-setwise-endpoints]]), a braid isotopy $Z$ from $\beta$ to $\beta'$ ([[def-braid-isotopy-relative-top-and-bottom]]), and the closure construction of [[def-closure-of-a-geometric-braid]] with its diffeomorphism $\varphi\colon V\to S^3\setminus A$ and axis $A$.

[F1] Every geometric braid is braid-isotopic to a braid whose strand maps are smooth, by an isotopy arbitrarily close to it that keeps each bottom endpoint $q_j$ and each individual top endpoint fixed ([[lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid]], [[def-countable-choice]]). AC_omega is assumed there and is inherited here.

[F2] Under $\mathrm{AC}_\omega$, a smooth isotopy $F\colon M\times I\to N$ of a compact boundaryless manifold through embeddings, constant near the ends, extends to an ambient isotopy $H$ of $N$ with $H_t\circ F_0=F_t$, supported in any prescribed neighbourhood of the image ([[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]]).

[F3] Raw topological closure uses the fixed $\varphi([(x,t)])=(\sqrt{1-|x|^2}e^{2\pi it},x)$ and one component per permutation cycle. Under $\mathrm{AC}_\omega$, the smooth closure of a general continuous braid is formed from a chosen smooth endpoint-flat representative; its selected closed-braid model has exactly $n$ points in every page. A literal smooth matching-jet raw closure is retained ([[def-closure-of-a-geometric-braid]]).

[F4] A braid isotopy from $\beta$ to $\beta'$ is an $n$-tuple $Z=(Z_1,\dots,Z_n)$ of jointly continuous maps on $I\times I$ such that every slice $Z(u,\cdot)$ is a braid based at $Q$, with $Z(0,\cdot)=\beta$ and $Z(1,\cdot)=\beta'$; the top endpoints $Z_j(u,1)$ are independent of $u$ ([[def-braid-isotopy-relative-top-and-bottom]]).

## Proof

**Proof technique:** direct.

1.1 **Smooth braid isotopies give isotopies of closures.** Assume the family is smooth and its disk-coordinate strands are constant on collars of height $0,1$. The endpoint permutation $\pi$ is independent of the family parameter by [F4]. For each $\pi$-cycle of length $k$, concatenate its $k$ strands on $\mathbb R/k\mathbb Z$, exactly as in [F3]. Their fixed endpoint collars make all jets agree at the seams. Thus the source is the compact one-dimensional manifold $M=\bigsqcup_{\text{cycles of }\pi}\mathbb R/k\mathbb Z$, and the concatenations followed by the fixed $\varphi$ give a smooth family $F_u:M\to S^3\setminus A$. Each $F_u$ is an embedding by the distinct-points condition and the component argument of [F3], with its orientation inherited from the increasing cycle parameter. Reparametrize $u$ to make the family constant near $0,1$. By [F2] this isotopy extends to an ambient isotopy of $S^3$, supported away from $A$ in a neighbourhood of its compact image. Each image still has exactly $n$ intersections with every page. If a literal smooth closure has matching cycle-seam jets but is not constant in endpoint collars, interpolate its common height map from the identity to the fixed flat map of [F3]. The matching jets remain matching in every smooth parameter slice, so this gives another compact cycle embedding family and [F2] identifies that literal closure with its constant-collar model. [F2, F3, F4, construct]

1.2 **Smoothing a braid isotopy with all seams fixed.** First choose smooth representatives at the two ends by [F1] and give them endpoint collars by the fixed height reparametrization of [F3], and concatenate their approximation homotopies with the given family. The empty family needs no approximation. For $n\ge1$ the disk-boundary distance has positive uniform minimum on the compact parameter square; for $n\ge2$ include the finitely many pairwise strand distances as well. Use the boundary minimum alone at $n=1$. Reparametrize height and family parameters to make the family constant in height collars and equal to the two smooth end braids in family-parameter collars. Approximate its finitely many real coordinate functions by tensor-product Bernstein polynomials on the square. For a continuous scalar function $f$ on $[0,1]$ and $N\ge2$, with out-of-range binomial coefficients taken as zero, the binomial weights sum to one, have mean $t$ and variance $t(1-t)/N\le1/(4N)$, by the identities $k\binom Nk=N\binom{N-1}{k-1}$ and $k(k-1)\binom Nk=N(N-1)\binom{N-2}{k-2}$. Uniform continuity gives error at most $\epsilon$ on $|k/N-t|<\delta$. The remaining weight is at most $1/(4N\delta^2)$, since its squared deviation is at least $\delta^2$ per unit weight. Thus the total error is at most $\epsilon+2\|f\|_\infty/(4N\delta^2)$, uniformly in $t$, and tends to zero. Apply this to each of the finitely many real coordinates, successively in the two variables; convex averaging is a contraction for the uniform norm, so the two errors add. This proves the required uniform square approximation. Choose error smaller than one tenth of that separation. Repair each family-parameter edge by adding a smooth collar cutoff times the difference between the prescribed smooth edge and the approximant's restriction to that edge; the two family collars are disjoint, and these corrections have norm at most the approximation error. Then repair the two height edges to their fixed points by the analogous disjoint height cutoffs. On the family edges these latter corrections vanish because the prescribed end braids already have the correct height endpoints. The resulting map is smooth on the square, fixes all four edges, and differs from the collared continuous family by less than five times the chosen error, so remains in the disk with all strands distinct. Finally compose its height variable with a smooth map constant near $0,1$ and equal to the identity outside the original fixed height collars, and its family variable with one constant near $0,1$; this makes all height jets agree with the fixed endpoints and all family end collars constant, without changing the braids at those ends. The same uniform margin permits straight interpolation to the collared family. Thus this is a smooth braid isotopy between the chosen smooth representatives, with the one fixed endpoint permutation throughout. [F1, F3, F4, given, construct]

2.1 **Arbitrary chosen models and independence.** Choose any smooth endpoint-flat models $\beta_s,\beta_s'$ of the given braids. Their endpoint-fixed approximation isotopies, the given $Z$, and the inverse approximation isotopy form a continuous braid family between them. Step 1.2 makes this into a smooth family of collared models, and step 1.1 gives ambient equivalence of their selected literal smooth closures. If either chosen model is smooth with matching jets but lacks constant collars, the explicit height interpolation of the Definition [F3] preserves all matching cycle-seam jets, and the compact-cycle argument of step 1.1 supplies the same equivalence. Thus the result holds for every permitted choice of model. Applying the same argument with $\beta'=\beta$ proves independence of the smooth-category closure class in [F3]; it is established here, rather than assumed from the Definition. No ambient smooth isotopy of a nonsmooth raw image is used. All constructed model images remain closed $n$-braids about $A$. [F1, F2, F3, step 1.1, step 1.2, construct]

3.1 **Conclusion.** Every braid isotopy from $\beta$ to $\beta'$ therefore yields an ambient isotopy of $S^3$ carrying $\widehat\beta$ to $\widehat{\beta'}$, so the closure construction factors through the braid isotopy class; the two uses of $\mathrm{AC}_\omega$ are exactly the smoothing of [F1] and the ambient isotopy extension of [F2]. ∎ [F1, F2, step 2.1]
