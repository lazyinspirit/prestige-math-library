# Finite-word lifting with actual rigid decorations

Renewed user-authorized development, 2026-10-21. Independent induction-interface authoring; no zero-crossing base claim, canonical edit, native-state transition, or accepted-provider check. This continues `rigid-zero-crossing-given-map-base.md`; it does not replace its history.

## Actual source contract and limits

Read supplied MT pp.114–115 standard-flype model, pp.117–118 graph category and A/B reduction, and pp.137–138 substitution paragraph. A standard flype rigidly rotates its A-tangle ball by pi about an axis in the projection plane, fixes its B-tangle, and half-twists the two intermediate balls. Rigid vertices are actual flat square disks, mapped isometrically by category morphisms. Page137 permits a given map, after pairwise isotopy, to be isometric on a neighborhood of every vertex, and permits corresponding tangle substitutions at v and f(v). The supplied crops do not separately define pairwise isotopy through rigid maps; no claim that they explicitly give a parametric neighborhood-normalization theorem is made here.

For the finite statement below a MARKED vertex neighborhood is an actual oriented-coordinate ball containing the square, its four labeled ports, and a chosen thin crossing tangle. A germ-marked pair isotopy means an isotopy through rigid graph pair maps whose restrictions to a common neighborhood of every square are the same prescribed orientation-preserving rigid maps. This is stronger than setwise isotopy of the one-dimensional graph. The conclusions proved below distinguish the two inputs.

## Earned local invariant at the weaker rigid-disk input

Choose at each square an oriented orthonormal plane chart (x,y), with normal z chosen so (x,y,z) gives the ambient orientation. Its two pairs of opposite ports are P0 and P1. A thin crossing decoration has state c=+1 if P0 is above P1 and c=-1 otherwise. The actual semicircular arcs may be chosen with arbitrarily small nonzero normal height, while their four port attachments stay fixed.

Let A be a rigid square map. Set delta(A)=+1 or -1 according as it preserves or reverses the oriented plane; set p(A)=+1 or -1 according as it preserves or exchanges the two opposite port pairs. The unique orientation-preserving orthogonal extension is

    Ahat(x,y,z) = (A(x,y), delta(A) z).

Consequently the transported crossing state is

    c' = delta(A) p(A) c.                         (1)

Indeed the source P0 arc has normal-height sign c; its image has sign delta(A)c. If P0 maps to target P0 this is c'; if it maps to target P1 it is -c'. These are exactly the two cases in (1). The normal-side rule also holds for any orientation-preserving locally flat homeomorphism carrying the disk with plane-orientation sign delta: the orientation of a bicollar is the product of the disk orientation and its transverse interval orientation, so preservation of the ambient orientation forces the interval sign to be delta. No differentiability is used in this sign assertion.

Both delta and p are multiplicative for composable marked square maps. Thus chi(A)=delta(A)p(A) is multiplicative, and finite transport satisfies c_k=chi(A_k...A_1)c_0. In particular, an ordinary height-preserving ninety-degree plane rotation has delta=+1 and p=-1, so it reverses the fixed crossing state. This is why an arbitrary rigid square map cannot be expanded while independently holding its crossing decoration fixed.

Suppose f_t is an isotopy THROUGH RIGID GRAPH MORPHISMS to a fixed target graph. Each source vertex maps to one fixed target vertex: the target vertex set is finite and discrete. On its square f_t is one of the finitely many marked square isometries; continuity therefore makes that isometry constant. Hence its actual four-port permutation, delta, p, and chi are constant. If f_0 and f_1 have rigid ambient neighborhood representatives, transporting a fixed source crossing by either representative produces the SAME target crossing state and the SAME labeled-port pairing. This proves endpoint DECORATION-CLASS compatibility at rigid-disk input; it does not by itself prove a relative ambient isotopy of expanded pairs.

## Finite lifting theorem at germ-marked input

Assume a finite graph word g_m...g_1=G, where every factor is a geometrically realized graph flype in the standard model, or a sphere-preserving graph map, and all factors are rigid on small neighborhoods of every vertex. Assume G and the original given graph map f are joined by a germ-marked pair isotopy f_t. At the initial and final vertices prescribe crossing decorations with the final decoration literally the image under f of the initial decoration. This last condition is earned in A/B by the original matched crossing-ball map; it is not an independently assigned over/under choice.

Then the word lifts to the SAME finite word of decorated flypes/maps, followed by a pair isotopy to the GIVEN expanded f. In particular this unit tracks the original map, not merely a graph isomorphism.

Proof. Label vertices once at the initial graph and transport their labels along the word. Because there are finitely many factors and vertices, shrink all chosen neighborhoods simultaneously so that each factor is rigid on the relevant neighborhood. In every standard graph flype, choose these neighborhoods disjoint from the control spheres and the two half-twist balls; each vertex lies entirely in the rigidly rotated tangle or the fixed tangle. This uses the standard-model requirement that control spheres meet edges at ordinary nonvertex points. Define the intermediate vertex tangle recursively by T_i=g_i(T_{i-1}). Outside the vertex neighborhoods retain the original graph edges and original crossing-ball realization.

The factor g_i now maps the expanded pair literally to the next expanded pair. On a vertex in the rotated tangle it applies precisely the SAME rigid pi rotation to the inserted crossing; on a fixed vertex it fixes that crossing. The two intermediate half-twists and the ordinary flype crossing are unchanged. Hence g_i remains the same actual standard diagrammatic flype on the expanded tangle. Sphere-preserving factors extend by their orientation-preserving bicollar maps and transport the inserted crossings by (1). At every stage one obtains the decorated diagram by performing this very diagrammatic operation, rather than reassigning crossing states afterward. The initial decorations come from the actual matched oriented crossing balls, so each joined pair has the required incoming/outgoing port directions; transport by the edge-orientation-preserving graph maps retains those same directions. No claim is made that an arbitrary assignment of orientations to a four-valent vertex admits this crossing expansion. In particular alternatingness is inherited when the initial expansion is alternating and each factor is an allowed alternating graph flype.

The expanded endpoint is G of the initial expansion, by finite composition. On each marked neighborhood, G=f by the germ-marked isotopy hypothesis. Outside those neighborhoods the expansion is exactly the original graph, which every f_t maps to the fixed target graph. Therefore every f_t is already a map from the initial expanded pair onto the SAME final expanded pair. Thus f_t itself is the required pair isotopy from the expanded word G to the original expanded f. No final graph-isomorphism replacement is used. This proves the theorem.

The same reasoning accommodates an alternating tangle decoration instead of a single crossing when its WHOLE marked neighborhood is transported. Four-port permutations alone classify the crossing-state transport above; they do not classify arbitrary tangle interiors. For a general tangle, germ-marked transport is essential.

## Exact induction bindings and remaining restriction

For A/B, take the decorations from the original pair of crossing balls already mapped rigidly by the aligned given map. Collapse these balls equivariantly, retain their labels and neighborhood markings, apply the smaller graph-word theorem, and restore those very decorations. If preliminary flypes phi1,phi2 were used, the aligned map is phi2 f phi1; after lifting, compose with the inverse preliminary flypes to recover the original f. No arbitrary target crossing is chosen.

For the C interface, each collapsed Conway ball is decorated by its actual entire tangle, and BOTH smaller graph triples must retain the same actual rigid boundary identification. The finite transport proof is then valid on each side; agreement of the two expanded given maps on that identification is a separate gluing input, not a consequence of matching abstract port permutations alone.

At the literal source input currently supplied, the constant-port/constant-plane-sign endpoint lemma above is fully earned IF pairwise isotopy means isotopy through the stated rigid category. The finite lifting theorem is proved at the explicit germ-marked strengthening. To identify these two contracts requires a RELATIVE PARAMETRIC straightening of a rigid-disk pair isotopy to a common rigid vertex-neighborhood germ, relative its endpoint maps. Ordinary single-map normalization on MT p.137 is not itself that parametric statement. One may supply the latter using an actual local bicollar/isotopy-extension argument, or establish that the source's pairwise-isotopy convention already includes these neighborhood markings. This report does not silently assume it. The missing [4] embedding lemma and zero-crossing base are independent of this local parametric issue.
