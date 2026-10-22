# Relative smooth pair cancellation for the KS circle removal

Status: a proof conditional on the explicit torsion hypothesis below. This is research evidence, not a canonical supplier or a mathematical acceptance receipt. No current item, manifest, native evidence, or previous stopping record is changed.

## Exact application and the torsion correction

Put

\[
 X_j=B^k\times T^{n+2}\times T^j,\qquad
 K_j=B^k\times T^n\times\{0\}\times T^j,
 \qquad m=k+n\in\{3,4\}.
\]

The point in the middle expression is a point of the normal **two-torus**. At the first removal j=1, at the second j=0. The desired compact cobordisms have dimensions m+j+3: respectively 7 and 6 when m=3, and 8 and 7 when m=4. Their cores have dimensions m+j+1; these are **already products**, so there is no application of an s-cobordism theorem to a core of dimension four or five.

An exterior has the homotopy type

\[
 X_j-K_j\simeq T^{n+j}\times(T^2-\{0\}),\qquad
 \pi_1(X_j-K_j)=\mathbb Z^{n+j}\times F_2.
\]

Consequently ambient Whitehead-group vanishing for a free abelian group alone does not discharge the pair theorem. A sufficient torsion input for this proof is

\[
 \operatorname{Wh}(\mathbb Z^{n+j}\times F_2)=0,
 \qquad j=1,0.
\tag{WH}
\]

An alternative sufficient input is actual vanishing of the two particular exterior cobordism torsions, with their incoming boundary markings. Neither is asserted here. In particular no ordinary unmarked ambient s-cobordism theorem is substituted for (WH).

## Relative exterior cancellation lemma

Let W be a compact smooth d-manifold, d>=6, with corners, horizontal ends M_0,M_1, and a specified product structure on its vertical boundary. Let L be a neat codimension-two smooth submanifold with a specified product tubular neighborhood

\[
 (N_W,L)=(N_0,L_0)\times I
\]

respecting the end collars and vertical boundary. Mark this whole tube, including any chosen normal bundle coordinates. Assume that E=closure(W-int N_W), with corners rounded compatibly, is an h-cobordism between E_i=closure(M_i-int N_i), relative to its vertical boundary. If tau(E,E_0)=0 in Wh(pi_1 E), there is a diffeomorphism

\[
 (W,L)\cong(M_0,L_0)\times I
\]

equal to the specified product on M_0, the vertical boundary, and N_W. In particular it preserves the marked normal germ; no manipulation is made inside N_W.

Here the product structure on the tube is a hypothesis, rather than a consequence of the phrase “pairwise h-cobordism.” It is enough that the prescribed germ extend over such a product tube. Independently chosen incompatible framings on the two ends are not allowed.

### Proof by handles, relative to every marked face

Choose a smaller collar of the entire vertical boundary of E and a Morse function equal to its product coordinate there and on the end collars. All critical points and all handle attaching data lie in the complement of that collar. Corners have thus become fixed ordinary boundary collars. Every construction below is supported in a compact subset of the interior of the horizontal levels. This is what makes the argument relative; doubling and subsequently claiming that a resulting diffeomorphism fixes the doubling locus would not do this.

Here are the handle reductions in the form actually used. Write d=s+1, so s>=5. Order the handles by index. Connectivity of E and E_0 joins any 0-handle to the old boundary by a 1-handle; choose a spanning tree of these joins and cancel along the tree. Hence no 0-handles remain. For a remaining 1-handle generator x_i, the isomorphism pi_1(E_0)->pi_1(E) writes its image as a word w_i in the old generators. The word x_i w_i^{-1} is trivial after the 2-handles have been attached. Represent it by a framed attaching circle in the boundary after the 1-handles, disjoint from the existing attaching circles. Add a trivial cancelling 2/3 pair in the boundary after the existing 2-handles. The new 2-handle attaching circle, which is nullhomotopic there, can be isotoped to the chosen representative of x_i w_i^{-1}. Indeed a homotopy between embedded circles in a manifold of dimension at least five can be made an isotopy, with the framing carried from the newly introduced cancelling pair. Before attaching the old 2-handles the chosen circle goes once through the i-th 1-handle and misses the other belt spheres. It cancels that 1-handle. Transport the old 2-handles through this cancellation; the introduced 3-handle remains. Repeating removes every 1-handle.

For completeness the higher-index trading operation is as follows. Suppose the handles below q are already absent, 2<=q<=s-3. Only this strict range is needed for trading. In the universal cover the q-handle cores form a free Z[pi]-basis a_i of H_q(E_q,E_0). Acyclicity of C_*(E~,E~_0) makes the differential from the (q+1)-handles surjective onto this group. Thus choose finite coefficients c_ij with sum_j c_ij partial b_j=a_i. For each i add a cancelling (q+1)/(q+2) pair, initially with the lower handle trivially attached. Slide its attaching q-sphere over the old (q+1)-handle attaching spheres along arcs representing the coefficients c_ij. A positive or negative coefficient is realized by the corresponding oriented parallel copy; a group element is realized by its basing arc. In the boundary after the old (q+1)-handles these band sums are isotopic to the original trivial sphere: each old attaching sphere bounds its handle core there. In the boundary before those handles their lifted relative class is a_i. The intersection reduction in the next paragraph makes each new attaching sphere meet precisely its q-handle belt sphere once and the other belt spheres zero times. Cancel these pairs. The old (q+1)-handles and the newly introduced (q+2)-handles survive. This removes the q-handles at the cost of handles two indices higher. This is the explicit trading operation, rather than an assumption that an arbitrary acyclic free complex is already two-term.

The intersection reduction just invoked works with group-ring coefficients. Choose paths from a common base point to all attaching spheres and belt spheres. Intersections have signs and pi labels. A relative class equal to one basis element says that, apart from one retained intersection, all intersections can be paired with opposite signs and equal labels, separately for each belt sphere. The loop made from the arcs joining the two intersection points on the two spheres then has trivial pi label. It bounds a Whitney disk in the level manifold. The relevant spheres have dimensions q and s-q, both at least two. A disk interior can be made disjoint from the q-spheres when q+2<s. The handle complement has the same fundamental group as the level: for q>=3 this follows from the codimension of the belt spheres; for q=2 the complement identifies, for fundamental-group purposes, with the preceding boundary with the attaching circles removed. Those circles have codimension at least four, and each is nullhomotopic in the preceding boundary because there are no 1-handles and pi_1(E_0)->pi_1(E) is injective. Attaching the 2-handles therefore does not change that fundamental group. This supplies a disk whose interior misses every belt sphere, after moving its boundary arc along the selected belt sphere. Its self-intersections can be removed by general position since 4<s. The Whitney framing is the framing from the two sheets, adjusted along the boundary arc before thickening the disk. The resulting framed Whitney move removes the selected pair and is supported away from the fixed collar. Iterate for the finitely many pairs. With multiple attaching spheres, choose the disk interiors disjoint from the other attaching spheres by the same strict inequality. The survivor meets its belt sphere once geometrically, with its existing handle framing. The single-intersection handle cancellation replaces the two attached disk handles by a collar: push the upper handle core through the lower cocore in its product coordinates. Thus the replacement respects the old boundary and every disjoint marked collar.

Use the trading operation first from E_0 and then in the dual decomposition from E_1. For the needed choice r=2, first remove indices 0 and 1 from the bottom. In the dual decomposition the already absent original 0- and 1-handles are absent dual indices s+1 and s. Eliminate dual indices q=0,...,s-3, stopping with dual indices s-2 and s-1, which are original indices 3 and 2. Each dual trading operation introduces only dual indices q+1 and q+2, at most s-1, so it does not reintroduce original indices below two. The required strict Whitney inequality q+2<s holds throughout this range. The resulting based chain complex is

\[
 0\longrightarrow\mathbb Z[\pi]^a\xrightarrow{A}
 \mathbb Z[\pi]^a\longrightarrow0
\]

in degrees 3 and 2, with A invertible. Its torsion is [A] up to the harmless conventional sign/inverse. The hypothesis tau=0 means precisely that A can be reduced to an identity matrix using finitely many elementary row/column operations, unit changes +/-g, and stabilizations A->A direct-sum (1). These operations have the following actual handle realizations: changing an orientation or a chosen lift realizes a unit change; a band sum/handle slide with a based arc realizes addition of +/-g times one row or column, and repetition realizes an arbitrary finite group-ring coefficient; adding a small cancelling 2/3 pair realizes a stabilization. These moves are all interior. After them, the preceding intersection reduction makes the matrix geometrically the identity. Cancel the resulting 2/3 pairs one at a time. There are no remaining critical points. Flow along the resulting nonsingular product vector field gives E=E_0×I with exactly its original boundary collars. Glue back the untouched marked tube N_0×I. This proves the relative pair lemma.

The primary source for these handle constructions is Kervaire, *Le théorème de Barden–Mazur–Stallings*, Commentarii Mathematici Helvetici 40 (1965), 31–42: handle trading on pp.35–39; the group-labelled Whitney pairing on p.39; the elementary matrix operations and their handle realizations on p.40. The extra relative conclusion above follows from the explicitly specified compact interior supports, and the pair conclusion follows by keeping the tube untouched. The source itself states its theorem for closed horizontal ends, so its statement alone is not used to assert the relative conclusion.

## The cut in the unrolled circle

Let the same compact topological pair (X,K) carry smooth structures S_0,S_1, both smooth near K and the boundary. Suppose

\[
 h:(X,K)_{S_0}\times S^1\longrightarrow(X,K)_{S_1}\times S^1
\]

is a pair diffeomorphism fixing K×S^1 pointwise, equal to the identity near the outer boundary, and inducing the identity on the distinguished circle cohomology class. The last condition follows from the KS assumption h homotopic to the identity. It gives a lift

\[
 H:(X,K)_{S_0}\times\mathbb R\longrightarrow
 (X,K)_{S_1}\times\mathbb R,
 \qquad H(x,t+1)=H(x,t)+(0,1).
\]

Choose the lift fixing K×R. The outer-boundary lift is the identity as well: on each boundary component its possible integer translation is constant, and that component meets K, where the translation is zero. This includes k=1 with its two boundary components. Compactness of X×S^1 gives a finite bound for the displacement of the R-coordinate of H and its inverse.

Choose a>0 so large that the entire hypersurface L=H(X×{a}) lies above X×{0}. Its negative side U=H(X×(-infinity,a]) contains X×(-infinity,0]. The region

\[
 W=U\cap(X\times[0,\infty))
\]

is compact, has ends X×0 and L, and meets the fixed core cylinder in K×[0,a]. On the boundary it has its fixed ordinary product collar. At the core, L is transverse to K×R and meets it exactly in K×a. Projection along the R-coordinate identifies L near K×a with the graph t=a+f(x,z), f(x,0)=0, in smooth tubular coordinates. A cutoff graph isotopy straightens this to t=a on a small normal tube, fixes K pointwise, and is the identity on the prescribed outer-boundary germ. The tube may be taken uniform by compactness. After this isotopy W has the literal smooth product tube

\[
 (K\times D^2)\times[0,a].
\]

Here tubular coordinates may be bundle coordinates rather than a global trivialization. If marks on the normal germ are specified, use the chosen tube's mark on the entire cylinder and its restrictions at both ends. The source mark at the upper end is its pullback by H. No claim is made that an arbitrary normal derivative of H can be killed by an isotopy fixing the core: a rotation varying around a base loop may be nontrivial. This distinction matters when the word “marked” includes a framing. The prescribed attaching-boundary germ is unchanged throughout.

### The exterior h-cobordism is proved, rather than assumed

Remove the core cylinder and write Y=X-K, U^*=U-(K×R), L^*=L-K. The graph isotopy above does not affect the argument. First U^*->Y×R is a homotopy equivalence: conjugate by H and use the inclusion Y×(-infinity,a]->Y×R, which has a product deformation retraction. Also L^*->U^* is a homotopy equivalence by the same conjugation. Next U^* is the union of W^*=W-(K×[0,a]) and Y×(-infinity,0], along Y×0. Collapsing the lower half-cylinder gives a deformation retraction U^*->W^*. Hence L^*->W^* is a homotopy equivalence. The composite Y×0->U^*->Y×R is the ordinary horizontal inclusion and is a homotopy equivalence. Since the second arrow is one too, Y×0->U^*, and therefore Y×0->W^*, are homotopy equivalences by two-out-of-three.

Finally radial retraction in the straight product tube gives homotopy equivalences from the compact exterior E to W^* and from each compact end exterior E_i to its punctured end. These retractions commute with end inclusion. Consequently both E_i->E are homotopy equivalences. This verifies exactly the exterior hypothesis of the relative pair lemma, with fixed tube side and outer-boundary side. In the KS application pi_1 E is the group stated in (WH).

If tau(E,E_0)=0, apply that lemma and restrict the resulting product to the upper end. Compose with the parametrization H|X×a (and the graph-straightening isotopy). This gives a pair diffeomorphism between (X,K)_{S_0} and (X,K)_{S_1}, pointwise the identity on K, identity on the given outer-boundary germ, and compatible with the coherent marked normal germ on W. Its induced map on pi_1 is the map obtained by comparing the two slices in X×R. If the original h is homotopic to the identity, this map is the identity. For X=B^k×T^ell, maps to X are classified up to homotopy by their fundamental-group homomorphism (X is a K(Z^ell,1)); hence the resulting diffeomorphism is homotopic to the identity. Only this absolute homotopy is claimed, not a new relative homotopy or a prescribed isotopy class.

## Repeat, with no implicit dimension jump

Apply the preceding construction to the last circle of g'' on X_1×S^1. The first exterior cobordism has dimension m+4>=7, and its group is Z^{n+1}×F_2. It produces the required pair diffeomorphism on X_1, fixing K_1 and the outer-boundary germ. Its pi_1 action is the identity, so it preserves the remaining auxiliary circle class and can be unrolled again. Apply the same construction on X_0×S^1. The second exterior cobordism has dimension m+3>=6, and its group is Z^n×F_2. Under (WH) both torsions vanish and the second output is the desired pair diffeomorphism g on X_0.

Thus the **geometry** of the two circle removals is reduced to the two explicitly identified exterior torsions. This fills the pair, boundary, core, and circle interfaces in the printed KS sentence; it does not discharge the outstanding algebraic vanishing input.
