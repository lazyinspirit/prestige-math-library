---
id: lem-a-collared-whitney-disk-can-be-made-disjoint-from-an-entire-compact-immersed-image
kind: lemma
title: A collared Whitney disk can avoid an entire compact immersed image
deps:
- def-countable-choice
- cor-every-immersion-is-locally-an-embedding
- thm-parametric-transversality
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
- prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
- thm-transverse-preimage-theorem
- lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
- thm-weak-whitney-proper-embedding-theorem
- thm-euclidean-tubular-neighbourhood-theorem
- thm-smooth-partitions-of-unity-exist-on-manifolds
- prop-a-proper-injective-immersion-is-a-smooth-embedding
- def-compact-space
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-smooth-inverse-function-theorem-on-manifolds
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery, Theorem 7.27(ii), proof and Lemma 7.28, printed pp.
      138–140
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: 'Printed pp. 139–140: collared disk outside f(N), correction of one normal summand, and alteration
      of only one source sheet.'
justified_by: []
status: draft
origin: session
dependency_level: 1
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $S$ be either the ordinary disk $D^2$ or the fixed convex Whitney bigon $B=\{(u,v):-1\le u\le1,\ |v|\le1-u^2\}$. On the bigon, smoothness means local restriction of a smooth map on an open subset of $\mathbb R^2$, including its two fixed corner charts. Let $M^m$ be closed, $m\ge3$, let $X^{2m}$ be boundaryless, and let $f:M\looparrowright X$ be an immersion. Suppose a smooth disk/bigon map $H:S\to X$ is an embedding on a boundary collar and the interior of that collar is disjoint from $f(M)$. Then arbitrarily close to $H$ there is an embedded disk $W$ homotopic to $H$ relative to a smaller fixed boundary collar and satisfying $W(\operatorname{int}S)\cap f(M)=\varnothing$. If $H$ is already an embedding, $W$ can be chosen arbitrarily $C^1$-close through embedded disks, and any supplied framing that already extends over $H$ is transported with unchanged boundary values. For a Whitney boundary at two genuine transverse double points, avoiding all other collision preimages, the supporting tube can be chosen disjoint from neighbourhoods of those other double points and meeting the immersed image only in the designated source-sheet collars. This is an immersion-image adapter; it does not assert extension of an arbitrary prescribed boundary frame.

## Facts & Assumptions

[F1] An immersion is locally an embedding ([[cor-every-immersion-is-locally-an-embedding]]), and a proper injective immersion is an embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]).

[F2] Countable Choice gives a proper Euclidean target embedding, a smooth tubular retraction, and smooth partitions of unity ([[thm-weak-whitney-proper-embedding-theorem]], [[thm-euclidean-tubular-neighbourhood-theorem]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-countable-choice]]).

[F3] Parametric transversality excludes a null set of parameters, a finite union of such null sets is null, and their complement is dense ([[thm-parametric-transversality]], [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F4] The target diagonal is embedded and a transverse preimage has the expected codimension ([[lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold]], [[thm-transverse-preimage-theorem]]). Compactness is [[def-compact-space]]. The inverse function theorem supplies the explicit quadrant charts ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F5] Compact source sets admit smooth bumps supported in prescribed open neighbourhoods ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

**Given:** Countable choice, a closed smooth $m$-manifold $M$, $m\ge3$, an immersion $f:M\to X^{2m}$, and a smooth disk/bigon map $H:S\to X$ whose restriction to an open boundary collar is an embedding and whose collar interior is disjoint from $f(M)$. For a Whitney circle use the fixed bigon $B$ rather than round its transverse-sheet corners. At $(\pm1,0)$, the functions $\rho_\pm=1-u^2\pm v$ have independent gradients, so the inverse function theorem gives a quadrant chart with $\rho_\pm\ge0$. Away from these two points the boundary is smooth. These explicit charts are the meaning of its fixed corner convention; all perturbations vanish on a neighbourhood of the entire boundary.

1.1 Compactness makes $f$ proper and $f(M)$ closed. Cover $M$ by finitely many immersion charts $U_i$ on which $f$ is an embedding; use slightly smaller relatively compact charts covering $M$. Fix closed nested collars $C\subset\operatorname{int}_{S}C^+$ inside the given collar, and keep $H$ fixed on a neighbourhood of $C$. The transition annulus is compact, embedded, and disjoint from $f(M)$; its positive distance from this closed image and openness of embeddings on the larger compact collar let all sufficiently small perturbations preserve these properties on the protected collar. No positive distance is asserted on the whole open disk interior, which accumulates on its boundary in $f(M)$. [F1, F4, given, construct]

1.2 Make $H$ an immersion relative to the collar. Embed $X$ in Euclidean space and use its smooth neighbourhood retraction as in the published tubular-target perturbation supplier. On finitely many disk charts covering the compact unprotected core, choose smooth bumps supported off $C$, equal to one on smaller charts, and multiply these bumps by the constant and both coordinate functions. Give each of these three profiles independent ambient-vector parameters. Composing the resulting Euclidean perturbation with the target retraction gives a family whose 1-jet parameter differential spans independently the value and both derivative columns at each core point: constants vary the value, and a linear combination of constant and coordinate profiles vanishing at that point varies either derivative column without varying the value. Surjectivity holds at parameter zero and, by a finite compact cover, on a sufficiently small parameter ball. The rank-$r$ matrix stratum for maps $\mathbb R^2\to\mathbb R^{2m}$ has codimension $(2-r)(2m-r)$: on the chart where an $r\times r$ minor is invertible, the remaining Schur-complement block must vanish and gives exactly that many independent equations. Parametric transversality to the rank-0 and rank-1 strata therefore avoids both, because their codimensions exceed 2 (the least is $2m-1>2$). On the protected collar immersion persists by smallness. Choose a sufficiently small good parameter, obtaining an immersion $h$ fixed near $C$. This uses only finitely many profiles and the actual parametric-transversality theorem; no unproved relative jet theorem is invoked. [F2, F3, F4, F5, construct, algebra]

2.1 A compact immersion $h:S\to X$ has a uniform near-diagonal injectivity radius, stable under sufficiently small $C^1$ perturbations. To see the stability rather than merely assert it, cover $S$ by finitely many smaller disk charts in which a two-coordinate projection of a target chart composed with $h$ has derivative near a fixed invertible matrix. Shrink to convex charts. For all close maps the derivative of the projected map still differs from that matrix by less than its least singular value, so integration along the segment between two source points proves injectivity there. A Lebesgue radius for this finite cover excludes coincidences with $0<d(z,z')<\delta$. This argument applies in the fixed boundary and quadrant charts too, or on the convex bigon itself, because every perturbation vanishes near its boundary. Now use finitely many finer bump charts of diameter less than $\delta/3$, supported off $C$, with independent constant-vector parameters. They span value directions on the unprotected core. On the transition collar any unmoved pair is already distinct, and charts and parameter size can be chosen so that any possible separated coincidence involving that collar has at least one point in the fully adjustable core; compactness excludes the other pairs. For a pair at distance at least $\delta$ the parameters supported at its adjustable point move that image in all target directions while leaving the other point fixed. Thus the pair evaluation $(z,z',a)\mapsto(h_a(z),h_a(z'))$ is transverse to the target diagonal at every possible coincidence. Parametric transversality makes the separated coincidence preimage empty since its expected dimension is $4-2m<0$. Apply it on an open separated-pair region (or its boundary strata separately); the uniform near-diagonal estimate excludes all remaining pairs. The map is still an immersion by $C^1$ smallness and hence a compact injective immersion, so is an embedding $w_0$, fixed on the collar. [F1, F3, F4, F5, step 1.2, construct, algebra]

3.1 Finally perturb this embedded disk to avoid the entire immersed image. A sufficiently small $C^1$ perturbation of a compact embedding remains embedded, by the uniform local estimate and the positive separation of images of pairs outside a diagonal neighbourhood. Construct a finite value-spanning parameter family $w_a$ supported off the protected collar, using the same bump/retraction construction; on its compact transition annulus avoidance of $f(M)$ persists by smallness. For each immersion chart put $R_i=\{(f(y),y):y\in U_i\}\subset X\times U_i$. This is an embedded graph of codimension $2m$, even when different branches of $f(M)$ cross. On the adjustable disk region the map $(z,y,a)\mapsto(w_a(z),y)$ is transverse to $R_i$ because the parameter derivative spans $T_{w_a(z)}X$. On the protected collar interior and transition annulus there are no incidences at all. Relative parametric transversality, implemented by these vanishing profiles, gives parameters for which every slice is transverse to every $R_i$; the exceptional sets have finite null union, and good parameters exist arbitrarily near zero. The incidence preimage has dimension $2+m-2m=2-m<0$, hence is empty for $m\ge3$. The finite charts cover every source branch, so $w_a(\operatorname{int}S)\cap f(M)=\varnothing$, including all double-point branches. Boundary incidences are intentionally excluded from the domain of this transversality argument. Set $W=w_a$ at one such small parameter. [F1, F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 Straight parameter segments in the retraction families give smooth homotopies relative to the fixed collar. The disk can be chosen arbitrarily close to $H$; when $H$ was already an embedded disk, steps 1.2 and 2.1 are unnecessary and step 3.1 alone gives arbitrarily $C^1$-small perturbations through embedded disks. For an actual supplied frame, regard $X$ as embedded in Euclidean space, with its induced inner product. At each disk point project the original normal vectors first orthogonally into $T_{W(z)}X$ and then orthogonally off $dW_z(T_zS)$. These smooth projections restrict to an isomorphism from the old normal fibre to the new one for $C^1$-close disks, since at $W=H$ their restriction is the identity and the least singular value stays positive on the compact disk. Where the collar is fixed the projection is the identity. This explicitly transports the frame and preserves its actual boundary values; no separate bundle-isotopy theorem is assumed. Thus any supplied boundary framing that already extended remains unchanged there and still extends; no assertion is made that an arbitrary prescribed boundary framing extends initially. For the support clause, local injectivity of the compact immersion excludes a neighbourhood of the source diagonal from its ordered coincidence locus; that locus is therefore compact, as is its collision image. A genuine transverse double point is isolated in that image: the selected two sheet charts give one isolated coincidence, and compactness of the source outside those charts excludes every further branch near it. Removing the two selected isolated collision images leaves a compact set disjoint from $W$, including its boundary by the Whitney-boundary hypothesis. Compactness therefore permits a disk tube disjoint from neighbourhoods of all remaining collision images, whether or not they were finite. Near its boundary the tube meets $f(M)$ only in the designated source-sheet collars: compactness of the complement of those source collars excludes stray branches, while the local immersion charts give the designated sheets. This is the required cleanliness relative to the entire image. [F1, F2, F4, step 3.1, construct] ∎
