# Exact sewing inverses and cut coherence in raw Hom coordinates

Isolated parent construction. This is the complete algebraic factorization calculation. Its geometric identification uses the explicit tube/coupon word and cap normalization below; independence of all surgery presentations remains the separate full topology obligation, not a premise smuggled into a category calculation.

Fix the actual spherical ribbon fusion category, left dual i*, right evaluation r_i:i⊗i*→1 induced by the pivotal structure, and its corresponding right coevaluation b_i^R:1→i*⊗i. Both right snakes hold. State spaces have raw coordinates Hom(1,W⊗H^g), H=⊕i i⊗i*, and disjoint components take the tensor product of Hom spaces, not Hom into the tensor product. All tensor orders/associators below are fixed by the cut parametrizations. Parentheses are suppressed only via the actual canonical-map coherence theorem; no arbitrary braiding permutation is called canonical.

## 1. Separating cut

Let X,Y be the tensor objects on the two cut components (marked labels and their handles). The sewing map is

 G: ⊕i Hom(1,X⊗i)⊗Hom(1,i*⊗Y) → Hom(1,X⊗Y),
 G_i(f⊗k)=(1_X⊗r_i⊗1_Y)(f⊗k).

This is a literal coupon word: juxtapose the two coupons and join the adjacent i and i* outputs by the pivotal right cap. No d_i factor is presumed.

Choose simple-summand inclusions g_iα:i*→X and composition-dual projections p_iα:X→i* with p_iαg_jβ=δijδαβ1_i* and Σiαg_iαp_iα=1_X. Define

 F(z)=Σiα [(g_iα⊗1_i)b_i^R] ⊗ [(p_iα⊗1_Y)z].

Both tensor factors have exactly the domains in the direct sum. These choices are finite semisimple decompositions and the resulting map is independent of their basis: a change g'=gA,p'=A^{-1}p cancels in the displayed finite sum, separately in every simple block.

The composite GF(z) equals Σiα(g_iαp_iα⊗1_Y)z=z. To see this without a diagram, substitute the two factors into G. Interchange reduces the middle part to (1_i*⊗r_i)(b_i^R⊗1_i*)=1_i*, the right snake, leaving g_iαp_iα on X.

For the reverse composite, write g_f=(1_X⊗r_i)(f⊗1_i*):i*→X. The other right snake gives f=(g_f⊗1_i)b_i^R. In F(G_i(f⊗k)), the jβ term contains p_jβg_f:i*→j*. It is zero for j≠i and a scalar γβ for j=i by absolute simplicity. The right snake then makes the second factor γβk. The sum of the first factors times γβ is (Σβg_iβp_iβg_f⊗1_i)b_i^R=f. Therefore FG_i(f⊗k)=f⊗k for every decomposable tensor, and by linearity FG=1 on the entire finite direct sum. This proves the full separating factorization, including multiplicities, zero Hom blocks and empty lists of marked labels.

The identity Σgp=1_X is composition-dual. If a source instead uses trace-dual tr(gp) coordinates, the projection is d_i times the trace-dual map on the simple i block, exactly as derived in the coupon proposal. Thus no hidden d_i^-1 is lost when this word is identified with the actual normalized geometric sewing map.

## 2. Nonseparating cut

Let X be the object containing the original marked labels and the remaining g handles. The gluing adds one handle. Write u_i:i⊗i*→H and v_i:H→i⊗i* for its actual direct-sum inclusions/projections. Then

 G: ⊕i Hom(1,X⊗i⊗i*) → Hom(1,X⊗H),
 G((z_i)_i)=Σi(1_X⊗u_i)z_i,
 F(z)=((1_X⊗v_i)z)_i.

The composites are GF=(1_X⊗Σu_iv_i)=1 and (FG)_ij=(1_X⊗v_iu_j)=δij1. This proves nonseparating factorization on all finite multiplicity spaces. If the fixed surface convention puts handle factors after a different label order, conjugate these written maps by the specified associator/reordering word in that parametrization and its actual inverse. This keeps the maps typed and does not assert that different braid words coincide.

## 3. Geometric tube identification and normalization

For a separating gluing, attach a tube between the two capped cut circles, place the i-colored joining band through that tube, and connect its two ends to the specified coupon legs. The ribbon evaluator reads exactly the word G_i above: the tube joins the adjacent i,i* legs by r_i, with every other leg vertical. For nonseparating gluing the same tube contributes the i⊗i* handle pair and hence exactly the inclusion u_i. These statements define the standard sewing parametrization and its orientation convention; reversing a cut interchanges the dual labels and the corresponding cap word by the pivotal duality identities.

To obtain their actual coordinate matrices from capped surgery evaluation, attach the raw dual testing cap. For every other handle the rotated-meridian identity R(E)=D²/d_i from rt-cap-normalization.md contracts the input/output pair. The cylinder geometric Gram scalar is D^{g-1}/d(tuple); postcomposing by the proved outgoing N=D^{1-g}d(tuple) cancels it. On the tube itself the right snake leaves exactly r_i (separating) or u_i (nonseparating). Thus the normalized tube map has the G above, rather than an unexplained proportionality. Its inverse is therefore the exact F just calculated. This local calculation holds for arbitrary external coupons, so it identifies the full map, not just a nonzero scalar on one simple channel.

A cut-compatible choice of object Lagrangians means that the tube's actual boundary relation carries the cut-surface Lagrangian to the glued-surface Lagrangian. For a separating tube this is the direct-sum identification on H1; for a nonseparating tube the new meridian is in the outgoing relation kernel and is included in its outgoing Lagrangian, while the other directions are the image of the cut Lagrangian. Under this hypothesis every local sewing relation preserves the specified Lagrangians. In the corrected middle-boundary composition formula its first argument is then the middle Lagrangian, so the correction vanishes (two repeated arguments). The explicit cap-reference correction transports to other specified compatible parametrizations. No unexplained anomaly scalar is suppressed, and no assertion about incompatible Lagrangian choices is made.

## 4. Naturality and iterated-cut coherence

The two inverse formulas are actual maps, not dimension comparisons. Any morphism on an uncut tensor factor commutes with the displayed evaluations, direct-sum projections and inclusions by bifunctoriality and naturality; consequently it commutes with G. Since F=G^-1 it commutes with F as well. For geometric bordisms outside the tube, compose their actual coupon/surgery words with this same local tube word. The local rotated-meridian calculation above gives the same matrix in either order. Once presentation independence is established by the separate topology theorem, this is naturality for the actual RT maps, rather than an appeal to a drawing.

For two disjoint cuts, perform both tube words on the cut-open surface. Their evaluations/insertions are on disjoint boundary leg pairs. Interchange of tensor products makes their composites equal. For two nonseparating handles this is also directly Σi,j u_i⊗u_j with the same two projection coordinates. For two separating or mixed cuts, insert the composition-dual resolutions Σgp=1 at their two seams. Expanding the finite sums gives the same product of coupon inclusions and projections in either order: operators on distinct factors commute, and if one resolution is on a factor produced by the first cut, regroup the finite sum using Σgp=1 on that factor. Both expressions are the same all-cuts coupon word. This last equality can alternatively be checked after applying both G maps, since their explicit inverses exist and every adjacent F/G pair reduces by the snakes proved in §§1–2.

Inductively, any finite ordered set of disjoint cut circles gives the same all-cuts word, with all simple labels and multiplicity indices summed exactly once; reordering the cuts gives the same result by adjacent swaps. Reversing all cuts composes the explicit F maps and reduces successively to identity. This proves iterated gluing and cutting coherence, including separating/nonseparating combinations and zero-dimensional summands. The compatibility of Lagrangians makes all auxiliary weight corrections zero on these comparisons as proved in §3. General parametrization changes use the already specified cylinder maps and the proved relation cocycle; their actual functoriality still requires the independent topology/RT spine to have been completed.

## 5. Resulting dimension calculation

The algebraic state dimensions require no surgery completeness: direct Hom decomposition and §§1–2 already suffice. On a three-marked sphere the dimension is N_ij^(k*) and therefore the actual algebraic Verlinde formula gives Σx S_ixS_jxS_kx/S_0x. The 0,1,2-marked spheres follow from S²=C. Summing each sewn dual pair uses Σa S_ax S_a*y=δxy; for a nonseparating pair at the same x this equals1. Thus induction over the cut circles yields

 dim Hom(1,W_i1⊗…⊗W_in⊗H^g)
   =Σx S_0x^(2−2g−n)∏r S_ir,x.

The n=0,g=1 value is |I|. The interpretation as dimensions of the presentation-independent RT functor and its torus operators remains coupled to the separate completed RT construction. This explicitly separates a proved algebraic dimension identity from an unproved claim of topological independence.
