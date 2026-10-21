---
id: lem-signed-outer-summand-cut-comparison-with-zero-periodic-cut
kind: lemma
title: "Signed outer summand and cut complex with zero periodic cut"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-integral-sutured-floer-compactness-and-orientations
  - lem-integral-sutured-auxiliary-triangle-and-move-maps
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
  - lem-marked-fiber-admits-a-sutured-surface-diagram
  - lem-permissible-surface-niceification-preserves-admissibility
  - lem-fiber-outer-grading-and-integral-cut-euler-matrix
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

For an actual nice admissible good surface diagram whose cut has zero periodic-domain group, the outer differential and the cut differential are identified over the integers after changing generator signs. This identifies the top Alexander homology with the integral homology of the cut diagram when the surface is the marked Seifert surface and the outer degree is its genus. The conclusion applies in particular to a fiber cut and to the rank-one branch of the cut Euler-matrix reduction.

## Facts & Assumptions

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[lem-integral-sutured-auxiliary-triangle-and-move-maps]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[lem-relative-sutured-diagrams-have-signed-move-equivalences]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F4] [[lem-marked-fiber-admits-a-sutured-surface-diagram]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F5] [[lem-permissible-surface-niceification-preserves-admissibility]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F6] [[lem-fiber-outer-grading-and-integral-cut-euler-matrix]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F7] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F8] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 New construction, 2026-10-20. No canonical source or accepted supplier is changed or rechecked. This file concerns the difference between existing coherent orientations. It does not assume existence, coherence, or signed diagram invariance merely from orientability of individual determinant lines. [construct]

1.2 **1. Derive the actual character group.** Fix a finite transverse balanced sutured diagram $\mathcal H=(\Sigma,\alpha,\beta)$ and put $X=\operatorname{Sym}^d(\operatorname{int}\Sigma)$. Treat the empty diagram separately: its generator and orientation are canonical. For $d>0$, let $\mathcal G$ be the groupoid of Whitney-disk homotopy classes with its actual generators as objects and splicing as composition. Work separately on each connected component of this groupoid. Fix a base generator $x_0$ and reference paths $\theta_x:x_0\to x$ for its finitely many objects. Let $\Pi=\mathcal G(x_0,x_0)$, and let $\mathcal P$ be the integral periodic-domain group. Both endpoints and the ordered attaching circles are retained throughout. [construct]

1.3 The domain homomorphism $D:\Pi\to\mathcal P$ has kernel exactly the image of sphere insertion. Here is the needed topological proof. The coefficient of $\alpha_i$ in the boundary of a periodic Whitney domain is the winding number of its alpha boundary loop in the $i$th factor of the product torus; the beta coefficients have the same interpretation. This follows by taking a regular point on the relevant attaching circle: its signed boundary preimages count that winding, and are precisely the boundary incidence coefficient of the region chain. If $D(u)=0$, all these windings are zero. Both torus loops are therefore nullhomotopic, since a product of circles has universal cover $\mathbb R^d$. Cap them inside the respective tori; the capped map is a sphere in $X$. Removing the caps expresses the original class as insertion of that sphere into the constant Whitney disk. Conversely, a sphere has zero domain. Indeed its intersection number with $E_p=\{p\}+\operatorname{Sym}^{d-1}(\Sigma)$ is independent of $p$ along any path in $\operatorname{int}\Sigma$: the moving divisors give the homology between these intersection tests. The union of all coordinates of a compact sphere image is compact in $\operatorname{int}\Sigma$, so choose $p$ in a boundary collar outside it. That intersection number is zero, hence it is zero for every region test point. Thus sphere insertion lies in the kernel. No assertion that $\pi_2(X)=0$ has been made. [construct]

1.4 Write $\Lambda=D(\Pi)\subseteq\mathcal P$. Suppose $o,o'$ are coherent orientation systems, with the same determinant-splicing convention and the canonical complex orientation for sphere insertions. Their ratio $r(u)\in\{\pm1\}$ is constant on each disk class, multiplicative under splicing, and one on sphere insertions. Therefore its restriction to $\Pi$ factors through a unique character $\chi:\Lambda\to\{\pm1\}$. Put $\sigma(x)=r(\theta_x)$. For $u:x\to y$, the class $\theta_x*u*\theta_y^{-1}$ is periodic at $x_0$, and multiplicativity gives the exact formula [construct]

1.5 $$r(u)=\sigma(x)\sigma(y)\,\chi\bigl(D(\theta_x)+D(u)-D(\theta_y)\bigr).$$ [construct]

1.6 Conversely every character of $\Lambda$ produces a coherent twist by this formula: the two reference-domain terms at an intermediate endpoint cancel under composition, and sphere insertions have zero domain. Thus, **if at least one coherent system exists**, their equivalence classes modulo generator sign changes are a torsor for $\operatorname{Hom}(\Lambda,\mathbb Z/2)$. This is the exact group justified here. It is not silently replaced by $\operatorname{Hom}(H_2(M),\mathbb Z/2)$ or by all of $\operatorname{Hom}(\mathcal P,\mathbb Z/2)$; surjectivity of disk classes onto periodic domains has not been assumed. Different connected components of the disk groupoid carry their own such groups. [construct]

1.7 **2. On the rank-one homology-product branch the domain group vanishes.** Use the actual sutured intersection matrix $I$ in the preceding homology-product donor. Its proof derives $\det I=\pm1$ from an actual integral complex with homology $\mathbb Z$, without an $S^3$ normalization. Let $Q$ be any periodic domain, with [construct]

1.8 $$\partial Q=\sum_i a_i\alpha_i+\sum_j b_j\beta_j.$$ [construct]

1.9 Intersect this homologically zero boundary with each $\alpha_i$. The alpha curves are mutually disjoint, so $I b=0$ up to the fixed overall intersection convention. The integer inverse of $I$ gives $b=0$. Hence $\partial Q$ is supported on alpha curves alone. Its coefficient function is constant on each component of $\Sigma\setminus\bigcup\alpha$. Every such component meets $\partial\Sigma$ by the balanced condition, and the coefficient there is zero by the sutured-domain condition. Therefore $Q=0$. This proves $\mathcal P=0$, and hence $\Lambda=0$ in every generator component. [construct]

1.10 It follows that any two **existing** coherent systems on this branch differ only by generator signs. The map $x\mapsto\sigma(x)x$ identifies their actual integer differential matrices: for an index-one class from $x$ to $y$ its count changes by exactly $\sigma(x)\sigma(y)$. This eliminates orientation-character ambiguity on precisely the homology-product branch required by Ni. It does not construct the first coherent system, signed continuation maps, or signed surface-decomposition maps. Nor does it justify using this conclusion before the top-group/decomposition comparison has put the actual cut-manifold complex on that branch. [construct]

1.11 **3. Explicit ambiguity away from that branch.** Take a flat torus $\mathbb R^2/\mathbb Z^2$, let $\alpha$ be $y=0$, and let $\beta$ be $y=\varepsilon\sin(2\pi x)$, with $0<\varepsilon<1/10$. Remove a small open disk centered near $(1/4,1/2)$, disjoint from the two curves and their thin bigons. The resulting once-punctured torus is a balanced sutured diagram: each nonseparating attaching curve has connected complement meeting the boundary. There are two transverse generators, call them $x,y$, and two embedded empty bigons $B_1,B_2$ from $x$ to $y$. The complement of these thin bigons is the single region meeting the puncture. [construct]

1.12 The periodic-domain group is $\mathbb Z(B_1-B_2)$. To see this directly, its puncture-region coefficient is zero. At either crossing the absence of boundary endpoints forces the two thin coefficients to be opposite. These are the only two remaining coefficients, and every such opposite pair has boundary a sum of the full alpha and beta curves. In particular the diagram is admissible. Every positive disk domain from $x$ to $y$ is $B_1+n(B_2-B_1)$, and nonnegativity forces $n=0$ or $1$. For the reverse endpoint order the analogous coefficients cannot both be nonnegative. With the integrable surface structure each bigon is a single translation class of regular holomorphic strips: a conformal map from the standard strip onto the open Jordan bigon is unique up to translation, and the linearized scalar boundary problem has its one translation kernel and zero cokernel. Thus these are exactly the two differential contributions. [construct]

1.13 Here the nontrivial periodic class is actually realized by $B_1*B_2^{-1}$, so $\Lambda=\mathcal P=\mathbb Z$. Given any coherent orientation system, write the two signed strip counts as $s_1,s_2\in\{\pm1\}$. Its complex is $\partial x=(s_1+s_2)y$, $\partial y=0$. Twist it by $(-1)^{n_p(u)}$, for a test point $p$ in the interior of $B_1$. Domain multiplicity is additive under splicing and zero on spheres, so this is a coherent orientation twist. It changes $s_1$ to $-s_1$ and leaves $s_2$ unchanged. Exactly one of the two coefficients $s_1+s_2$ and $-s_1+s_2$ is zero, and the other is $+2$ or $-2$. The two resulting homologies are therefore $\mathbb Z\oplus\mathbb Z$ and $\mathbb Z/2$, respectively. They cannot be isomorphic. [construct]

1.14 For existence in this specific example, no free-abelian commutator compatibility is needed: the periodic group is infinite cyclic, the surface has no sphere classes, and the determinant lines of individual strip components are orientable. Choose an orientation for its periodic generator and one reference disk. Extend to their integer powers and composites by the actual splicing determinant maps, orient inverses so their product is the constant operator's orientation, and use associativity of splicing. There are no further group relations to impose. The same construction gives the twisted system above. This is also the genus-one case of the explicit two-disk construction in Ozsvath--Szabo Lemma 9.1, whose complete proof was newly read here from `/tmp/moise-fibered/os-foundations.txt`, printed pp.79--80. The present calculation exhibits the individual domains, the character, and both differential matrices; it does not infer the ambiguity from a count of possible conventions alone. [construct]

1.15 The example concerns a general balanced sutured manifold, not the irreducible homology-product branch of the Ni original. It therefore obstructs an invariance assertion independent of **arbitrary** orientation systems, not the original fiberedness theorem. The correct continuing construction must transport specified classes off the homology-product branch; on that branch section 2 removes the ambiguity. Canonical definitions remain untouched. [construct]

2.1 Research donor, 2026-10-20. This is a local operation, not integral sutured invariance or the full surface-decomposition theorem. No canonical interface is changed. [construct]

2.2 **Precise input and conclusion.** Let $(\Sigma,\alpha,\beta,P)$ be a balanced surface diagram with $\partial P=A\cup B$, $\alpha\cap B=\beta\cap A=\varnothing$, as in Juhasz Definition 4.3. Form $\Sigma'$ by replacing $P$ with copies $P_A,P_B$, attaching the exterior of $P$ to $P_A$ along $A$ and to $P_B$ along $B$. Lift alpha curves to $P_A$ and beta curves to $P_B$. Write $p:\Sigma'\to\Sigma$ for the resulting map, a local diffeomorphism on the interior. Equip $\Sigma'$ with the pulled-back complex structure. [construct]

2.3 An **outer generator** has no coordinate in $P$. Its unique preimage is a generator upstairs. Conversely every generator upstairs avoids both copies of $P$: an intersection in $P_A$ cannot lie on a beta curve, and an intersection in $P_B$ cannot lie on an alpha curve. Thus $p$ gives a bijection of the upstairs generators with the outer generators, with the original ordered attaching-curve labels retained. [construct]

2.4 Consider an embedded empty bigon or rectangle $D$ between outer generators. Assume every connected component $C$ of $D\cap P$ has its boundary entirely in $(\bigcup\alpha)\cup A$ or entirely in $(\bigcup\beta)\cup B$, and in the former case meets $A$, in the latter meets $B$. This is an explicit hypothesis here; its derivation for all differential domains in a good nice diagram is a separate operation. Then: [construct]

2.5 * $D$ has exactly one lift $D'$ with zero multiplicity at the new boundary of $\Sigma'$. It is an embedded empty bigon or rectangle. * For an actual regular holomorphic strip supported on this disk, with unchanged stationary coordinates, the lifted strip has a canonically conjugate Fredholm operator. Transporting the determinant orientation through that conjugacy preserves its signed count, including the orientation of the real translation orbit. * Consequently, if the entire outer differential is already known to consist of these disks and their lifts, its integer differential matrix is identical to the upstairs matrix when the upstairs disk orientations are transported from downstairs. This conclusion is about these matrices; it does not assert a global coherent orientation system on all upstairs disk classes or any diagram-change map. [construct]

2.6 The assertion applies to any ambient three-manifold and uses integers throughout. [construct]

2.7 **Proof of the operation.** Outside $P$, the lift of $D$ is forced because $p$ is one-to-one. Lift an alpha-type component $C$ of $D\cap P$ into $P_A$ and a beta-type component into $P_B$. Along an $A$ edge the unique exterior sheet attaches to $P_A$, and along a $B$ edge it attaches to $P_B$, so these prescriptions agree on every seam. They define a continuous map $h:D\to\Sigma'$ satisfying $p h=\operatorname{id}_D$. Since $p$ is a local diffeomorphism at every image point, $h$ is smooth and conformal after rounding domain corners. It is injective because $p h$ is the identity. Its boundary alpha and beta arcs lie on the specified lifted attaching curves. Its corner generators lift uniquely, and its interior contains no generator coordinate because $D$ is empty. [construct]

2.8 Uniqueness uses the new boundary condition, not a drawing. A lift of an alpha-type component into $P_B$ would place its nonempty $A$ edge on $\partial\Sigma'$; its coefficient would be one at that boundary, contrary to the defining condition for a sutured disk domain. A beta-type component is excluded from $P_A$ in the same way. Since each $C$ is connected, it cannot switch between the two disjoint copies. All components and the exterior portion are therefore forced. The same reasoning applies to a positive upstairs disk whose pushforward is the indicated embedded disk; no two distinct positive sheets can occur over one point because that pushforward has multiplicity one. [construct]

2.9 Here are the analytic identifications actually needed for the sign statement. The compact disk $h(D)$ is disjoint from $\partial\Sigma'$. The local inverses of $p$ chosen by $h$ agree on overlaps; by compactness they extend $h$ to a neighborhood of $D$ after shrinking it. For a bigon the moving coordinate lies in that neighborhood. For a rectangle the two moving coordinates lie there, and the induced map on their symmetric square is holomorphic also across its diagonal: in local complex coordinates this follows by expressing unordered pairs through their elementary symmetric functions. All stationary coordinates have disjoint small neighborhoods on which the unique chosen inverse of $p$ is defined. Emptiness and the attaching-curve labels exclude collisions with a stationary coordinate. Taking the corresponding symmetric-product neighborhoods gives a biholomorphism $H$ near the entire strip image and the constant coordinates. It takes the lifted attaching-torus boundary conditions to the original ones and preserves their order. [construct]

2.10 For the pulled-back almost complex structure, composition with $H$ conjugates the nonlinear Cauchy--Riemann sections. At a zero its derivative $dH$ therefore conjugates the linearized operators. On Sobolev spaces along the strip, these multiplication operators and their inverses are bounded: their coefficients are smooth on the compact disk neighborhoods, and at either strip end they converge to the fixed derivative at the corresponding transverse intersection. Thus this is an isomorphism of the actual Fredholm problems, not just equality of their indices. It induces maps on kernel and cokernel, and hence a canonical map on [construct]

2.11 $$\det D_u=\Lambda^{\max}\ker D_u\otimes(\Lambda^{\max}\operatorname{coker}D_u)^*.$$ [construct]

2.12 Assign the lifted determinant line the pullback of the given downstairs orientation. Regularity is preserved. Composition with $H$ commutes with translation in the source variable, so $dH(\partial_su')=\partial_su$. Quotient orientations on zero-dimensional translation quotients therefore agree. This proves equality of the signed contributions. Summing the contributions proves the matrix assertion whenever its stated exhaustive-disk hypothesis holds. No choice of signs modulo two has been substituted for this orientation transport. [construct]

2.13 For completeness, admissibility also transfers in the required direction without an orientation argument. If an upstairs periodic domain $Q'$ has all coefficients nonnegative, its pushforward $Q=p_*Q'$ is a downstairs periodic domain with nonnegative coefficients. An admissible downstairs diagram forces $Q=0$. Each coefficient of $Q$ is the sum of one or two nonnegative coefficients of $Q'$, so all coefficients of $Q'$ vanish. Apply the same argument to $-Q'$ to exclude nonpositive nonzero periodic domains. This proves upstairs admissibility from downstairs admissibility. It does not prove that the initial diagram can be made admissible by permissible moves. [construct]

3.1 **The trace bookkeeping on the punctured surface.** Use a product complex structure on the actual surface. A holomorphic strip in Sym^dΣ has its incidence trace in Σ×strip. Normalize that trace; the projection to the strip has degree d. The trace is compact away from its two ends, because all counted boundary-region multiplicities vanish. Constant components are the stationary generator coordinates. Write D for the projected two-chain, e(D) for its Euler measure (a disk region with k right-angle corners has measure 1−k/4), and n_x,n_y for the sums of the four quadrant averages at the two generators. Let Δ be intersection with the discriminant, counted positively. On normalization this is [construct]

3.2 Δ = b + 2s, [construct]

3.3 where b is the ramification number of the strip projection and s is the total singularity defect of the incidence trace. A simple branch contributes one; a transverse meeting of two graph sheets contributes two. General singularities have these same nonnegative contributions after local resolution. Constant sheets outside D make no contribution. [construct]

3.4 The two bookkeeping identities are [construct]

3.5 μ(D) = 2e(D)+Δ, Δ = n_x(D)+n_y(D)−e(D). [construct]

3.6 Here the degree is d, the number of actual attaching circles; there is no substitution of the genus of a cap. One way to perform the calculation is to cut the trace along the inverse images of the region edges and trivialize TΣ over each resulting region. On a k-corner disk sheet the squared tangent framing has winding 2−k/2. Summing the sheets gives 2e(D): internal edges cancel with their opposite orientation. At a branch exchange the change from ordered root coordinates to symmetric coordinates has determinant ∏_{i<j}(z_i−z_j); its square has one zero at a simple branch exchange and two at a crossing of two graph sheets. This gives the first formula, including the factors one and two above. For the second calculation cap the α and β trace edges by their real tangent framings. The edge winding cancels in pairs. An endpoint quadrant of multiplicity m leaves m/4, so the remaining endpoint contribution is n_x+n_y; the region Euler contribution is e(D). Their difference is the same squared root-discriminant winding Δ. This calculation can be made after splitting multiple branches and perturbing corner angles, since both sides are invariant under these local deformations. All edges of the capped boundary collar have coefficient zero. In particular they add neither a hidden boundary winding nor a closed-surface Euler term. [construct]

3.7 Combining gives μ=e+n_x+n_y. This is a calculation for the actual incidence trace and actual tangent boundary conditions, rather than an invocation of a completeness-dependent closed Heegaard index formula. [construct]

3.8 **The only positive index-one traces.** A counted nonconstant disk has D≥0. Every region in its support is a bigon or square, so e(D)≥0 and e(D) is a multiple of 1/2. If its boundary hits h distinct α circles, the endpoints on each such circle contribute at least 1/2 to n_x+n_y. It must hit at least one: otherwise it is a nonzero nonnegative periodic domain. An unhit circle has identical x and y coordinates. Such a coordinate is outside D: if it had positive local multiplicity, its two point measures would contribute at least one, in addition to the contribution from a hit circle. Therefore every unhit coordinate is a stationary sheet disjoint from the moving trace. [construct]

3.9 For μ=1 there are precisely the following numerical possibilities: [construct]

3.10 * h=2, e=0, and four moving endpoint averages equal 1/4; * h=1, e=1/2, and two moving endpoint averages equal 1/4; * h=1, e=0, and the two moving endpoint averages sum to one. [construct]

3.11 The last possibility cannot occur. Its moving trace has degree one over the strip, so its normalization is a graph, with b=0. It has no stationary sheet in its support and hence no singularity defect. But the formulas would require Δ=1. [construct]

3.12 In the first case Δ=1. Positivity gives b=1,s=0. Removing the d−2 stationary sheets leaves a connected degree-two branched cover of the strip, with one simple branch point. After compactifying its ends it is a disk F with four marked boundary points. In the second case Δ=0; removing the d−1 stationary sheets leaves a degree-one disk F with two marked boundary points. [construct]

3.13 The projection F→Σ is an immersion, including at its corners. To see this without assuming it, pull the region cellulation back to F. Riemann–Hurwitz for this cellulation, with corner angles included, is [construct]

3.14 χ(F) = e(D) + (# marked right-angle corners)/4 − r, [construct]

3.15 where r≥0 is the total ramification of this projection. The corner averages 1/4 say exactly that each marked point occupies a single quadrant. For the four-corner case the first two terms are 0+1; for the two-corner case they are 1/2+1/2. Since χ(F)=1, r=0. [construct]

3.16 It remains to rule out a noninjective immersion. Pull all α and β edges back to F. For the square these are a rectangular grid: a closed α preimage or an α arc returning to the same β boundary edge would cut off an outside piece with negative Euler measure, whereas that piece is tiled by squares. The same holds after interchanging the colors. For the bigon there is exactly one bigon tile; the α arcs are nested around it, and the remaining part is a rectangular grid; the β arcs have the same description. These conclusions follow by cutting successively along an outermost returning arc; its outside Euler measure is negative unless it contains the unique bigon tile, so at most the single nested bigon pattern survives. [construct]

3.17 If two grid vertices had the same image, follow their lifts in one direction along the same α circle until one reaches a β boundary edge. Next follow the two lifts along β until one reaches an α boundary edge. Choose the β direction toward the end of the lift which already lies on the boundary. This produces two preimages of one image, one of them a marked corner. In the nested bigon, first follow toward the innermost bigon if needed, then make the same two boundary moves. A marked corner has exactly one preimage because its quadrant average is 1/4. This is a contradiction. Injectivity on vertices implies injectivity on tiles and edges by the same continuation, hence on F. Thus D is an empty embedded bigon or rectangle, with all coefficients zero or one. [construct]

3.18 **Existence, uniqueness, and the local operator.** For an embedded bigon the moving coordinate is its conformal strip parametrization. It is unique modulo real translation. The other coordinates are constant outside the domain. For a rectangle, give its disk F the induced complex structure. The degree-two map to the strip is specified by the real cross-ratio of the four marked points: the position of its simple branch point realizes that cross-ratio uniquely modulo strip translation. The symmetric pair of its two roots gives the actual holomorphic map to Sym²Σ; it is smooth at the branch point in elementary symmetric coordinates. All other coordinates are stationary. [construct]

3.19 Regularity is local. For the bigon, reflection across its two boundary edges identifies the kernel with the real translation field; a kernel section with its translation coefficient removed vanishes at both ends and, after reflection, has no allowed positive-degree term. The adjoint reflected problem has no allowed pole and hence has zero kernel. For the rectangle the same reflection argument is made on its branched double cover. The one cross-ratio matching condition removes the additional branch-position parameter; it has nonzero derivative because the real modulus of a quadrilateral is a strictly monotone conformal coordinate. The only remaining kernel is again translation and the adjoint kernel is zero. The stationary coordinate operators are invertible for transverse real tangent lines. Thus each quotient moduli space consists of a single regular point. Its integer count is a unit with the sign specified by the actual coherent orientation. This does not fix all units independently; the previously constructed orientation system fixes their compatibility. [construct]

3.20 Small generic perturbations used elsewhere do not change this finite description: continuation of each regular point follows from the implicit function theorem, and a hypothetical extra sequence would compactify to an additional product-structure point or a broken index-one trace. The exhaustion above excludes the first; the index and the absence of bubbles exclude the second. Consequently the chosen nice endpoint can be used by the signed move theory. [construct]

3.21 **The surface cut has no additional index-one disk.** For outer generators, both endpoints lie outside the interior of P. An embedded bigon or rectangle D therefore has no αβ corner in P. Pull the A and B edges back to D. They are embedded arcs, since A and B have no closed components, and are disjoint within each color. Cutting D along these arcs gives precisely the bigon/square pieces of the nice surface cellulation. A component of D∩P cannot contain a closed monochromatic frontier: an A/B circle is excluded by goodness, and a whole attaching-circle frontier would bound a coefficient-one nonnegative periodic domain. It cannot have an alternating αβ corner because every such corner of D is an endpoint generator outside P. Thus each component has all its attaching-circle edges of just one family: α with A, or β with B. It meets the corresponding A or B boundary. Equivalently, a mixed-family component would have a first switch between α and β on its boundary, which is an excluded αβ corner; switching through A/B instead reaches their vertex on ∂Σ, outside a counted domain. [construct]

3.22 This is exactly the geometric hypothesis of the already authored signed local disk transfer. Every component has a unique destination P_A or P_B, so D lifts uniquely to the cut diagram; the conformal parametrization lifts with it. Conversely a positive index-one disk upstairs pushes to a positive domain downstairs. Euler and endpoint measures are unchanged by the cut, so the pushed domain has index one and is among the exhausted bigons/rectangles. Its lift is the original disk. Nonnegative periodic domains upstairs push to nonnegative periodic domains downstairs, which also proves cut admissibility. No new upstairs disk or periodic class is being discarded. [construct]

3.23 The signed determinant conjugacy already constructed for these literal local lifts applies to every differential disk, rather than to a selected subset. On the zero-periodic homology-product branch, the previously constructed generator-sign adjustment therefore gives the full integer chain identification of the outer summand with the cut complex. This is the new differential exhaustion required by that identification; it does not provide the separate taut hierarchy or characteristic-product argument. [construct]

4.1 Orient the actual lifted nice disks by the determinant conjugacies. For a loop in the graph of outer generators and rigid disks, concatenate its lifts in the cut complex. Its periodic domain is zero by the hypothesis, so its class is a zero-domain sphere. The sphere determinant is complex oriented, and every literal local lift preserves that orientation. The product of orientation ratios around the graph loop is therefore positive. Pick a spanning forest of this finite graph and assign generator signs recursively. The loop calculation proves that the assignment is independent of paths. With these signs every rigid disk count agrees, so the generator bijection is a strict integer chain isomorphism. [construct]

4.2 The outer grading formula identifies this chain group with degree g of the marked knot complex. For a fiber cut the product has zero relative homology and hence zero periodic group; for a rank-one top group the cut Euler-matrix lemma proves the same condition before any differential comparison is invoked. Thus both stated applications satisfy the hypothesis without circular use of the signed cut theorem. [construct] ∎
