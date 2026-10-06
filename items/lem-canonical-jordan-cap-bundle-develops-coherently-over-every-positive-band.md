---
id: lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
kind: lemma
title: The canonical Jordan cap bundle develops coherently over every positive band
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-compatible-arbitrary-pi-fence-reduction
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice
- lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- lem-c2-inverses-and-scalar-return-roots
- lem-c1-euclidean-maximal-flow-with-c2-upgrade
- thm-universal-cover-existence
- thm-deck-group-of-a-universal-cover-is-the-fundamental-group
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-fundamental-theorem-on-flows
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 12
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §7, Lemmas 7.1-7.4 and their proofs, printed pp. 20-24; finite bundle and clock arguments supplied
      locally
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; coherent cap development supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$, and let $F$ be a $C^2$ cooriented foliation of a closed oriented smooth three-manifold. For a fixed-V fence with every positive loop null and simple in its leaf universal cover, and with the sphere-cover alternative excluded, the canonical based Jordan caps form a Hausdorff C² disk bundle over (0,b]. Its evaluation admits coherent regular C² cap development, with the actual reference disk region as source and V-orbit tracks over all positive parameters. If its zero loop is essential, at least one material point has infinite normal clock.

## Facts & Assumptions

**Given:** A fixed $V$-fence whose every positive loop is null and simple in the universal cover of its leaf, with the sphere universal-cover alternative excluded, and the canonical based Jordan caps $\Delta_t$ over the positive parameter interval $(0,b]$. The reference source $D:=\Delta_b$ is this actual compact $C^2$ disk region, with its inherited atlas; it is homeomorphic to a disk. No diffeomorphism from the standard Euclidean disk is presumed.

[F1] The in-pair item [[lem-compatible-arbitrary-pi-fence-reduction]] supplies the fence reduction with genuinely closed/null right families whose lifts are simple at every positive parameter; the sibling-pair item `lem-fixed-transverse-fences-have-a-finite-crossing-word` supplies the finite crossing word, and the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the unique bounded Jordan disk for a simple closed curve in a leaf whose universal cover is not a sphere. Their uses are flagged in steps 1.1 and 2.1 below.

[F2] The in-pair item [[lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice]] excludes the sphere cover alternative: a compact spherical leaf would force every leaf spherical while the initial loop is essential; the sibling-pair item `lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots` realizes the pointwise cap-product gluing by unique transverse-flow roots.

[F3] A $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root, and $C^2$ maps with invertible derivative have $C^2$ local inverses ([[lem-c2-inverses-and-scalar-return-roots]]); a $C^2$ Euclidean field has $C^2$ flow boxes with uniform bounds on compact domains ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



[F5] Compact sets inside open sets admit smooth bumps ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]), and smooth fields have unique smooth local flows ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 First extend the fixed fence field $V$ to a smooth positive field on the closed ambient manifold, retaining it near the compact fence trace, including its zero loop. To do so, choose a bump equal to one near that trace and supported in the original domain of $V$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]), and patch $V$ with a positive global field obtained from finitely many constant ambient chart fields and positive bumps. The convex combination remains positive and agrees with the original $V$ near the trace, so the fence is unchanged. Use this one extension in every cap product and every clock below. An intrinsic connected leaf surface is path connected by finite plaque chains, locally path connected and semilocally simply connected by its disk charts. Thus [[thm-universal-cover-existence]] supplies its universal cover, with the lifted C² plaque charts. For $t>0$ choose the universal cover of its leaf based at the fence basepoint and lift the entire null loop from that point; the lift is simple by hypothesis. By [F1] the surface-Jordan disk supplier gives the unique compact disk region $\Delta_t$ bounded by this lift, uniqueness using that the universal cover is not a sphere; the sphere alternative is excluded by [F2]. Include the based coverpoint, not only its projected image, in $\Delta_t$, and define $E$ as the disjoint union of the $\Delta_t$ with projection $\pi$ to $t$. [F1, F2, F5, given, construct]

2.1 Fix $r>0$ and transport the compact cap over a small two-sided interval using finitely many foliation boxes and fixed-$V$ roots; this yields a regular cap at every nearby $t$ with exactly the prescribed boundary word by transport uniqueness. Lift it from the prescribed basepoint to the universal cover of its leaf; a regular lifted disk map with simple boundary is a diffeomorphism onto the unique Jordan region, because it is a local diffeomorphism and its degree across the boundary is $\pm1$ with all local degrees of one sign, so every interior point has exactly one preimage and every exterior point none; the degree count follows by finite triangulation of the compact parameter disk and cancellation of internal oriented edges, so no global uniformization theorem is required. Hence the transported caps identify $\Delta_r\times J_r$ with $E$ over $J_r$. [F1, F3, step 1.1]

3.1 If two such charts overlap, both identify each fibre with the same based Jordan region; their transition map is the inverse of one regular leafwise parametrization composed with the other, which is locally $C^2$ by the plaque inverse function theorem [F3], and uniqueness of the based lift fixes the local branch. Covering the compact common disk fibre by finitely many such branches gives a $C^2$ transition on a smaller overlap, and the transitions satisfy the cocycle identity because they identify actual based coverpoints rather than arbitrarily chosen parametrizations. The charts define a locally trivial Hausdorff $C^2$ disk bundle: disjoint base intervals separate points of different parameter values, and one common product chart separates points in one fibre. Its projection is proper over compact parameter bands, since finitely many trivializing intervals give compact $\pi$-preimages, and the evaluation $e:E\to M$ is $C^2$ and a local diffeomorphism in the interior, with possibly multiple sheets retained through their based coverpoints. [F3, step 2.1]

4.1 Lift the one fixed ambient field $V$ through these local inverse branches to a $C^1$ field $W$ on $E$; the branches agree on overlaps by the identified coverpoints, so $W$ is globally defined, it is tangent to $\partial E$ because the boundary fence tracks are $V$-orbits, and its $\pi$-component has one strict sign. After choosing that sign positive and normalizing $W/(d\pi(W))$ so the base parameter has derivative $1$, a compact positive band has compact total space, a positive minimum for $d\pi(W)$ and bounded local fields; the finite-chart ODE extension argument [F3] therefore transports the whole compact reference disk across the band, no interior solution escaping through the boundary because $W$ is tangent there. Exhausting the positive interval by compact bands and using uniqueness gives coherent disk transport from the reference fibre at $b$ to every $t>0$, locally $C^2$ by the unique-root implicit function statement [F3], so the evaluation $G:D\times(0,b]\to M$ is regular with the specified boundary fence and $V$-orbit tracks. [F3, step 3.1, construct]

5.1 Choose a $C^1$ positive defining form $\omega$ for the cooriented foliation. The fixed global field $V$ of step 1.1 has $\omega(V)\ge c>0$ by compactness. Its smooth flow $\Phi$ is complete: finitely many compact chart domains give uniform local flow extension intervals ([[thm-fundamental-theorem-on-flows]]). With $B=G_b$ and $\tau(x,t)$ the flow time from $G_t(x)$ back to the reference cap, differentiation along the flow gives $|D_x\tau|\le C(T)$ for $0\le\tau\le T$, since the flow derivatives and $DB$ are uniformly bounded on the compact reference domain and the denominator is at least $c$. If every limiting clock were finite, choose at one material point $x$ a number $T>\tau_0(x)+1$. In a convex disk or half-disk source chart take a radius less than $1/C(T)$. A clock value at a neighboring point cannot reach $T$: along the segment from $x$, its first level-$T$ point would require a rise of more than one while the derivative bound $C(T)$ still holds below $T$. This gives a local bound uniform in all positive parameters. A finite cover of the compact reference disk gives a global bound. The same derivative estimate gives uniform local equicontinuity; the monotone pointwise clock limits are therefore continuous and converge uniformly, as follows by finite small source nets and monotonicity. Consequently $G_t=\Phi_{-\tau(\cdot,t)}\circ B$ converges uniformly to a continuous limit $G_0$, and $G_0$ would be intrinsically leafwise because each small disk patch has constant transverse box coordinate and connectedness of $D$ puts all patches in one leaf, with boundary the original loop — a continuous intrinsic leafwise null cap for an essential loop, a contradiction. Hence some material point has infinite normal clock whenever the zero loop is essential, and the whole construction uses finitely many boxes, charts and bands, hence only the standing countable choice from [F4]. [F1, F3, F4, F5, step 1.1, step 4.1] ∎
