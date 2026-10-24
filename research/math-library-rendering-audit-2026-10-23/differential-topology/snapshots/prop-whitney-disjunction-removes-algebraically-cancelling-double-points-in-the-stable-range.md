---
id: prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range
kind: proposition
title: Whitney disjunction removes algebraically cancelling double points
status: published
origin: session
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-self-transverse-immersion-and-double-point-locus
- lem-double-point-locus-has-expected-dimension-two-m-minus-n
- lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks
- def-local-whitney-move
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
- lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- def-regular-homotopy-of-immersions
- def-simply-connected
- def-self-intersection-number-of-an-oriented-submanifold
- def-compact-space
- prop-a-proper-injective-immersion-is-a-smooth-embedding
- def-countable-choice
- def-whitney-circle-for-a-pair-of-intersection-points
- def-primary-double-point-obstruction-to-removing-self-intersections
- lem-a-collared-whitney-disk-can-be-made-disjoint-from-an-entire-compact-immersed-image
- lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-parametric-transversality
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-transverse-preimage-theorem
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
  - title: Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved
      from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”,
      §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)
    url: https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf
  - title: Andrew Ranicki, Algebraic and Geometric Surgery, Theorem 7.27(ii), proof and Lemma 7.28, printed pp.138–140
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed connected $m$-manifold, $m\ge3$, and let $f:M^m\looparrowright X^{2m}$ be a pairwise self-transverse immersion.

1. Select two distinct genuine double points $r_1,r_2$, so each has exactly two preimages, and two disjoint joining source arcs that avoid every other collision preimage and give a Whitney circle $\gamma=\alpha*\beta$. Suppose $\gamma$ is null-homotopic and the selected branch pairing has opposite local signs, with compatible branch orientations along the arcs. For even $m$, signs of oriented branch pairs are ordering-independent; for odd $m$, branch orderings and joining arcs are chosen together and the signs refer to those choices. Then there is a smooth regular homotopy $f_t$ through immersions, with $f_0=f$ and $f_1$ self-transverse, supported near a clean framed Whitney bigon whose interior avoids the entire immersed image. It is fixed near every other collision image, removes exactly the two selected branch pairs, and satisfies
$$\Sigma(f_1)=\Sigma(f)\setminus\{r_1,r_2\}.$$
No new branch pair appears, and every other collision germ remains unchanged. Intermediate maps may have the branch tangency at which the pair cancels; their source differentials remain injective.

2. If $\Sigma(f)$ can be partitioned into finitely many pairs of genuine double points admissible as in clause 1, then $f$ is regularly homotopic to a self-transverse injective immersion and hence, by compactness of $M$, to an embedding.

In particular, if $M$ and $X$ are oriented, $X$ is simply connected, $m$ is even, and the integral unordered branch-pair count $I(f)$ of [[def-primary-double-point-obstruction-to-removing-self-intersections]] vanishes, then $f$ is regularly homotopic to an embedding. This last criterion holds for every pairwise self-transverse $f$, even with triple images initially: a small regular homotopy first separates them while preserving all branch pairs and signs.

Pairing, compatible signs and the chosen circle's null-homotopy are load-bearing. No classification of embeddings up to isotopy is asserted.

## Facts & Assumptions

**Given:** Countable Choice; a closed connected $M^m$, $m\ge3$; a boundaryless $X^{2m}$; a pairwise self-transverse immersion $f$; and for clause 1 two genuine double points, the selected branch pairing and opposite signs, disjoint joining arcs avoiding all other collision preimages, and the null-homotopic Whitney circle.

[F1] Ordered coincidences, unordered branch pairs $D(f)$, collision images $\Sigma(f)$ and genuine double points are distinct notions as in [[def-self-transverse-immersion-and-double-point-locus]]. Selected complementary sheet disks are supplied by [[lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks]].

[L1] A collared Whitney bigon admits an embedded perturbation relative to its entire fixed boundary model, with interior disjoint from every source branch of a compact immersion ([[lem-a-collared-whitney-disk-can-be-made-disjoint-from-an-entire-compact-immersed-image]]). Relative smooth approximation is [[thm-relative-whitney-approximation-for-manifold-valued-maps]].

[L2] An admissible boundary normal frame of a clean Whitney disk can be corrected within one sheet-normal summand to extend over the rank-$2m-2$ disk normal bundle; this asserts existence after the permitted correction, rather than extension of an arbitrary prescribed frame ([[lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses]]).

[L3] The local Whitney model changes the first sheet relative to its boundary, keeping the second sheet fixed; its endpoint removes the cancelling pair without introducing other intersections ([[def-local-whitney-move]], [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]]).

[L4] The ordered pair locus is zero-dimensional here ([[lem-double-point-locus-has-expected-dimension-two-m-minus-n]]); an injective immersion of compact $M$ is an embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]). A regular homotopy requires immersion at every time ([[def-regular-homotopy-of-immersions]]).

[L5] Joining arcs in dimension at least two avoid finite sets ([[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]). The null-homotopy condition is the selected Whitney-circle/label condition ([[def-whitney-circle-for-a-pair-of-intersection-points]], [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]]); ambient simple connectivity makes it automatic ([[def-simply-connected]]).

[L7] Parametric transversality with finite smooth bump families gives relative general position for compact source arcs ([[thm-parametric-transversality]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-transverse-preimage-theorem]]).

[L6] A small regular homotopy removes all triple images while preserving the finite unordered branch pairs and their signs ([[lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs]]). The integral count is the finite signed sum over $D(f)$ ([[def-primary-double-point-obstruction-to-removing-self-intersections]]).

[A1] Countable Choice is inherited from smooth approximation and parametric transversality; every explicit pairing and selection here is finite ([[def-countable-choice]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Choose disjoint source arc neighbourhoods $P,Q\subset M$, with smaller closed arc neighbourhoods inside them. Along either arc the immersion is an embedding because its interior contains no double-point preimage; shrink the source neighbourhoods using local embedding charts and compactness of the arcs. Their images meet each other only at the two prescribed corners, and meet no other branch there: otherwise a sequence of unwanted incidences as the neighbourhoods shrink would converge to an additional double-point preimage on an arc or to an extra branch at a prescribed double point. The genuine-double-point hypothesis says that there are exactly two preimages at each selected corner; all other collision images are avoided by the arcs. Use the fixed Whitney bigon $B=\{(u,v):-1\le u\le1,\ |v|\le1-u^2\}$ with the explicit quadrant charts of [L1]. At the two corners use the complementary-sheet coordinates; opposite local signs allow the standard Whitney collar to be sewn between the arc collars. Its interior leaves the selected sheet in a transverse direction, and at a corner lies in the quadrant between the two sheet axes, so it meets neither axis. Compactness/properness excludes every remaining branch from a sufficiently small collar. As the circle is null-homotopic, the inner boundary of this collar also bounds a continuous disk (it is homotopic through the collar to the original circle). Attach that disk to the collar and smooth relative to a smaller fixed bigon boundary neighbourhood using relative Whitney approximation on the open interior. To see this as an ordinary-manifold application, the attached map is already smooth on the collar interior; apply the relative theorem on $\operatorname{int}B$ with a closed inner collar where it is smooth, and extend by the original boundary model. Thus both corners stay fixed and no arbitrary rounding off the sheets is used. Apply the immersion-image adapter to obtain an embedded disk $W$ with interior disjoint from all of $f(M)$, fixed on the collar and avoiding neighbourhoods of every other double point. [F1, L1, L5, A1, given, construct]

2.1 The branch-normal data along the Whitney circle give an admissible splitting into ranks $m-1$ and $m-1$ of the rank-$2m-2$ normal bundle of the collared disk. The orientations involved here are those over the contractible disk and the two source arc neighbourhoods; the original opposite-sign hypothesis is the corner compatibility. No orientation of all of $M$ or $X$ is added to clause 1. The corrected framing supplier asserts existence of an admissible extendible choice, permitting correction of the frame within one summand while fixing its subspace and its values at both corners. The normal-summand surjection proved in that supplier realizes the inverse of the discrepancy loop in $SO(2m-2)$ within $SO(m-1)$, valid also at $m=3$, so this correction kills the discrepancy from a global disk normal frame. The correction is supported in the interior of one boundary arc; it changes no sheet or disk. Obtain a clean framed disk. This uses an admissible extendible framing, never an arbitrary fixed circle-normal framing. [L2, A1, step 1.1, construct]

3.1 Choose the framing tube and the selected smaller source patch $P$ so that the local Whitney model isotopy $G_t$ is the identity near the image of $\partial P$, moves only the first sheet as compared with the fixed second sheet, and is supported in a compact tube around $W$. The local construction of [L3], applied to these sheet patches, provides an isotopy of the first sheet, relative to its boundary, whose final image intersects the fixed second sheet with precisely the prescribed cancelling pair removed. The tube is disjoint from all other source-image branches except the chosen sheet collars by step 1.1; shrink its radius using the compact disk core and the compact image of the source outside slightly enlarged $P,Q$, and use the fixed collar charts near the boundary. The local model is embedded on $P$ at every time and unchanged near $\partial P$. [L1, L3, step 1.1, step 2.1, construct]

4.1 Define $f_t(x)=G_t(f(x))$ for $x\in P$, and $f_t(x)=f(x)$ for $x\notin P$. The two formulas agree on an open neighbourhood of $\partial P$ for every $t$, so they glue to a smooth map on $M\times I$. On $P$, $d f_t=dG_t\circ df$ is injective because $G_t$ is a local ambient diffeomorphism, and on the complement $df_t=df$ is injective; the agreement region handles patch boundaries. Thus every $f_t$ is an immersion and the family is a regular homotopy. The second source sheet $Q$ remains fixed. Applying $G_t$ to the entire immersion would preserve all coincidences and is explicitly not the construction. At the cancellation parameter the two branches may be tangent, although each source branch remains immersed. [L3, L4, step 3.1, construct]

5.1 At time one the model removes exactly the intersections at $r_1,r_2$ between the selected sheets and creates none. It creates no self-intersection within the moved patch because that patch stays embedded. A new intersection with any other branch is excluded by the tube cleanliness in step 3.1, and all other double-point neighbourhoods are fixed. Thus $\Sigma(f_1)=\Sigma(f)\setminus\{r_1,r_2\}$ and all remaining crossings retain their original self-transverse local models. The endpoint $f_1$ is self-transverse. Together with step 4.1 this proves clause 1 with the corrected endpoint-only transversality condition. [F1, L3, L4, step 3.1, step 4.1]

6.1 There are finitely many double points: local injectivity excludes a neighbourhood of the diagonal in compact $M\times M$, and the transverse coincidence locus is a discrete closed subset of its compact complement. For a finite admissible pairing apply clause 1 successively. After each move the unmoved double-point germs and signs remain fixed. Transport the endpoints of any planned source arcs by the already constructed regular homotopy; the corresponding ambient Whitney circles remain null-homotopic because their parametrized loops vary by a homotopy. Rechoose the arcs by small source perturbations relative to the endpoint collars to avoid the finitely many remaining preimages and each other, using the finite relative bump/diagonal argument of [L7] with expected dimension $2-m<0$. Small perturbations preserve embeddedness by the local-injectivity and compact separated-pair estimate. This changes no ambient homotopy class. At every stage apply the adapter to the current immersion, rather than assume pairwise disjointness of all prior disks or closeness to an arbitrary null-homotopy preserves cleanliness. After finitely many removals the endpoint is an injective immersion of compact $M$, hence an embedding. Reparametrize each regular homotopy to be constant near its endpoints before concatenating, giving a smooth regular homotopy. [F1, L4, L5, L7, A1, step 5.1, construct]

7.1 For the final integral criterion, $M$ and $X$ are oriented, $m$ is even, $X$ is simply connected and $I(f)=0$. Apply [L6] first to obtain a self-transverse immersion $g$ with no triple image and with $I(g)=I(f)=0$. Its finitely many unordered branch pairs now correspond bijectively to genuine collision images, so the vanishing finite sum pairs each positive sign with a negative sign. Connectedness and [L5] supply embedded source arcs avoiding the finitely many other collision preimages; To make the arcs disjoint, keep small disjoint endpoint collars fixed and perturb the second arc using finitely many source-chart translations times bumps spanning all target value directions along its compact interior. The evaluation into $M$ is transverse to the first embedded arc; [L7] yields a slice transverse to it. Its intersection preimage has expected dimension $1-(m-1)=2-m<0$, so is empty. Small $C^1$ perturbations keep the arc embedded: local convex-chart projection estimates give uniform local injectivity, and pairs outside their common chart neighbourhood have a positive separation on a compact set. Smallness also preserves avoidance of the finite collision preimages; the whole perturbation is relative to the endpoint collars and gives a homotopy of the selected arc. Ambient simple connectivity makes each resulting Whitney circle null-homotopic. The pairs are admissible, so step 6.1 gives an embedding endpoint. Concatenate with the small regular homotopy from $f$ to $g$, smoothing the time parameter as in step 6.1. This preserves the criterion for the original pairwise self-transverse immersion, including its possible initial triple images. [L5, L6, L7, A1, step 6.1, construct] ∎
