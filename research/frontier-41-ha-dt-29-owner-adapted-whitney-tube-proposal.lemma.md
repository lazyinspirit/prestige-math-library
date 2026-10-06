---
id: lem-a-clean-framed-whitney-bigon-has-an-adapted-tube
kind: lemma
title: A clean framed Whitney bigon has an adapted tube
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
- def-countable-choice
- def-whitney-disk-and-clean-framed-whitney-disk
- lem-transverse-complementary-spheres-have-product-charts
- thm-weak-whitney-proper-embedding-theorem
- thm-euclidean-tubular-neighbourhood-theorem
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-smooth-inverse-function-theorem-on-manifolds
- thm-existence-uniqueness-and-smooth-dependence-of-geodesics
- lem-local-isometries-send-geodesics-to-geodesics
- prop-exponential-map-scales-geodesic-time
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Lemmas 6.7-6.8, printed pp. 73-77, and completion of Lemma 6.7 on printed pp. 83-84
  - title: Andrew Ranicki, Algebraic and Geometric Surgery
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed pp. 139-140
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W:\mathcal B\hookrightarrow X^m$ be a clean framed Whitney bigon for complementary embedded sheet neighbourhoods $A^a,B^b$, where $a+b=m$ and $a,b\ge1$. Smoothness of the cornered disk means local smooth extension at every source boundary point. Fix its compatible product corner collars and its admissible extended disk-normal frame, with ordered blocks of ranks $a-1,b-1$. After extending the disk slightly and shrinking the sheet collars, there are an open plane neighbourhood $U$ of $\mathcal B$, a number $\delta>0$, and an embedding
$$\Phi:U\times B_\delta^{a-1}\times B_\delta^{b-1}\longrightarrow X$$
whose zero section extends $W$ and for which the inverse images of the designated sheet neighbourhoods are exactly the extended first edge times $B_\delta^{a-1}\times\{0\}$ and the extended second edge times $\{0\}\times B_\delta^{b-1}$. The tube represents the given normal quotient framing, with metric-orthogonal lifts preserving its boundary tangent flags and fixed corner data. It can be made arbitrarily thin and can exclude any closed unwanted sheet parts disjoint from $W(\mathcal B)$. Rank-zero blocks have their empty-frame interpretation.

## Facts & Assumptions

[F1] The clean framed disk supplies its embedded bigon, clean interior, fixed compatible corner collars, and an extended admissible normal frame. [[def-whitney-disk-and-clean-framed-whitney-disk]]

[F2] Complementary transverse sheets have simultaneous product charts. [[lem-transverse-complementary-spheres-have-product-charts]]

[F3] Under Countable Choice there is a proper Euclidean embedding of the ambient manifold, and Euclidean normal addition gives an ambient retraction near its image. [[thm-weak-whitney-proper-embedding-theorem]], [[thm-euclidean-tubular-neighbourhood-theorem]]

[F4] Under Countable Choice smooth partitions of unity exist. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F5] An invertible differential gives a smooth local inverse. [[thm-smooth-inverse-function-theorem-on-manifolds]]

[F6] Geodesics exist uniquely with smooth dependence and open initial-data domain; their exponential maps have the geodesic-time scaling identity. [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[prop-exponential-map-scales-geodesic-time]]

[F7] A local Riemannian isometry sends an affinely parametrized geodesic to a geodesic. [[lem-local-isometries-send-geodesics-to-geodesics]]

## Proof

**Given:** Countable choice, the smooth clean embedded cornered disk, its extended normal frame, and the fixed compatible sheet and corner collars.

1.1 First extend the disk to an embedded open surface near its compact source. Here are the needed extension and shrinking details. By [F3] embed $X$ properly as $j(X)\subset\mathbb R^N$ and obtain a smooth retraction $R$ from an open neighbourhood of $j(X)$ onto $j(X)$ by taking the footpoint of Euclidean normal addition. The assumed local smooth extensions of $jW$ at boundary points and its original map at interior points admit a finite source cover. Smooth source partition weights extend their Euclidean coordinate functions by a weighted sum. This agrees with $jW$ on the entire bigon; at its boundary its differential agrees as well, since local extensions agree on the adjacent open interior and therefore have identical boundary jets. Preserve the prescribed corner extensions by taking only that extension in smaller corner neighbourhoods. On a sufficiently small source neighbourhood the sum lies in the domain of $R$; applying $j^{-1}R$ gives a smooth extension $w$. It has rank two near the bigon. A rank-two differential gives a local embedding: two independent coordinate components have a locally invertible derivative by [F5], so the other components are a graph. If no neighbourhood extension were injective, there would be distinct source pairs approaching the compact bigon with equal images. Their limits would coincide by injectivity of $W$, contradicting the local embedding just obtained at that common limit. Thus shrink to an embedded extension. Choose a compact plane neighbourhood $K$ of the bigon lying inside this extension, with the bigon in its interior. Along either smooth edge, one normal defining function for its sheet has nonzero derivative in the inward disk direction; it vanishes identically on the edge. Writing it in collar coordinates as $r k(s,r)$, with $k(s,0)\ne0$, shows its only nearby zeros are $r=0$. The fixed corner model supplies the same assertion at both endpoints, including extended arcs. Cleanliness excludes sheets over the remaining compact disk portion. Shrink $K$ accordingly, so the extended surface meets the selected sheets precisely in the two extended edge arcs. [given, construct, F1, F2, F3, F4, F5]

2.1 Choose smooth representatives of the normal frame along the extended disk. On the first edge choose the first block in $TA$, and on the second choose the second block in $TB$: the admissible quotient flags permit these lifts, and any two lifts differ by a disk-tangent vector. Fix the representatives to the given compatible ones in the corner charts. Local lifts elsewhere combine by a partition of unity because the quotient classes are identical; adding disk-tangent corrections extends the specified boundary lifts, by the same local coordinate extension and partition argument as step 1.1. Their classes remain the original full frame, so these representatives together with any disk-tangent basis are linearly independent. Along the first arc let $t$ be its tangent and $n$ a transverse disk-tangent vector, and prescribe an inner product making the four blocks $t,n,E,H$ orthogonal and positive definite. This makes $TA=\operatorname{span}(t,E)$ orthogonal to $\operatorname{span}(n,H)$. On the second arc prescribe the corresponding condition $TB=\operatorname{span}(t,H)$ orthogonal to $\operatorname{span}(n,E)$. In the smaller corner charts use the fixed Euclidean product metric, with the disk in its two-coordinate plane; these prescriptions agree there. A prescribed smooth positive inner product along each arc extends to neighbouring slice charts by extending its matrix coefficients; positive definiteness persists after shrinking. Weighted sums of these extensions preserve the prescribed inner product on each arc because every summand restricts to that same value. Use corner charts alone in smaller corner neighbourhoods and an arbitrary positive metric elsewhere. This constructs a smooth preliminary ambient metric $h_0$ near $w(K)$, Euclidean in the corners, with the stated orthogonal flags. It uses no normal-constant partition requirement. [step 1.1, construct, algebra, F1, F2, F4]

3.1 Construct normal exponential tubes for slightly larger compact sheet collars using $h_0$. For a sheet point $p$ and an $h_0$-normal vector $v$, put $T(p,v)=\exp^{h_0}_p(v)$. It is smooth near zero by [F6]; its differential at zero is $(\xi,\eta)\mapsto\xi+\eta$. The base derivative follows from $T(p,0)=p$, and the fibre derivative follows by differentiating $\exp_p(sv)=\gamma_{p,v}(s)$ at $s=0$. Thus [F5] makes it locally invertible. Compactness gives a common existence and local-invertibility width. Global injectivity on a smaller width follows by the same limit-pair argument as step 1.1: pairs with fibre lengths tending to zero have limits on the compact sheet zero section, equality of their images forces the same base point, and both pairs then lie in one local inverse neighbourhood. Restrict the base to open collars inside these larger compact collars and take symmetric fibre neighbourhoods. The two resulting tubes $T_A,T_B$ can overlap only in the Euclidean corner neighbourhoods: outside smaller corner neighbourhoods their compact base pieces are disjoint, hence have positive separation in the ambient Euclidean embedding, and uniformly small fibres preserve that separation. Choose the widths at the corners so every fibre meeting the overlap, and its antipodal fibre segment, stays in the Euclidean corner chart. There normal exponential is ordinary normal addition to coordinate planes. [step 2.1, construct, F3, F5, F6]

4.1 The fibre antipodal maps give smooth involutions $r_A,r_B$ on these tubes. On $T_A$ put $h_A=(h_0+r_A^*h_0)/2$, and similarly define $h_B$. Each is a positive metric invariant under its involution. On the zero section its tangent and normal spaces are $h_0$-orthogonal and $dr_A$ acts as $+1,-1$, respectively; consequently $h_A=h_0$ there, and likewise for $B$. In the tube overlap both antipodal maps are Euclidean coordinate reflections, so $h_A=h_B=h_0$. They therefore glue to one metric on $T_A\cup T_B$. Extend this metric using a cutoff equal to one on a neighbourhood of the smaller compact sheet collars and supported inside the union, taking its convex combination with $h_0$ outside. Such a cutoff follows from [F4]; it leaves the glued metric unchanged near those collars and in smaller Euclidean corners. Call the result $h$. A geodesic initially tangent to $A$ in this unchanged neighbourhood is fixed by $r_A$: [F7] makes its reflected curve a geodesic, its initial point and velocity agree with the original, and [F6] gives uniqueness. The fixed-point set of $r_A$ is exactly $A$. Thus the geodesic stays in $A$ as long as it stays in that neighbourhood; the identical argument applies to $B$. The metric still has every prescribed boundary flag because averaging preserved its zero-section value. [step 2.1, step 3.1, construct, algebra, F4, F6, F7]

5.1 Project the extended frame representatives orthogonally to $Tw$ using $h$. Projection does not change their normal quotient classes. On the first edge $E$ remains tangent to $A$, because its only disk-tangent component is in the edge-tangent line; the inward disk line is orthogonal to $TA$. On the second edge $H$ remains tangent to $B$ for the same reason, and $E$ is orthogonal to $TB$. The boundary representatives chosen in step 2.1 were already orthogonal to $Tw$, so they are unchanged, including in the fixed corner charts. Their projections remain a full normal frame everywhere: a linear combination that projected to zero would have zero quotient class, contrary to independence of the given quotient frame. Extension and projection beyond the bigon are legitimate by the local coordinate extension argument of step 1.1; independence persists on a smaller neighbourhood. Denote these smooth projected blocks by $E,H$. No orthonormalization or framing-class change is needed for the exponential construction. [step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 Define $\Phi(z,e,h)=\exp^{h}_{w(z)}(\sum e_iE_i(z)+\sum h_jH_j(z))$. Its zero-section differential is the direct-sum map from the two disk tangents and the full normal frame, so is invertible by [F5]. Smooth geodesic existence, compactness of $K$, and the limit-pair injectivity argument in step 3.1 give a positive common width on which this map is an embedding over an open neighbourhood $U$ of the bigon with compact closure inside $K$. Along the first edge, every initial vector with $h=0$ is tangent to $A$; choose the width uniformly small enough that its geodesic remains in the reflection neighbourhood of step 4.1 until time one. Thus the corresponding product slice maps into $A$. It has dimension $a$ and is immersed, so it is an open neighbourhood of the edge in $A$, by applying [F5] in sheet coordinates. The second-edge product slice similarly maps onto a neighbourhood in $B$. Near each edge point these slices therefore give the entire inverse sheet germs, since $\Phi$ is a local diffeomorphism. Finitely many such neighbourhoods cover the compact extended edge portions. Away from those portions the compact zero section misses the sheets, so shrinking the width excludes other inverse sheet points. This proves the asserted exact inverse images throughout the smaller tube. An unwanted closed sheet part disjoint from the compact disk is excluded by first shrinking the disk neighbourhood away from it and then performing the same width reduction. All arguments remain valid for empty frame blocks, including $m=2$. [step 1.1, step 3.1, step 4.1, step 5.1, construct, F5, F6] ∎
