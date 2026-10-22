# The actual outer-torus operation for an embedded annulus

This is the new initial-paredness topology operation requested by root. It uses the already supplied finite PL annulus/band parameters, actual torus compression-to-solid-torus interface, boundary-parallel torus products, and primitive-slope cyclic solid-torus fillings. No repaired source or supplier is rechecked. It proves a statement about an ACTUAL embedded annulus; it does not assert an essential-map annulus theorem or substitute a fixed-first-rim witness for an original transverse map.

Let M be a compact connected orientable irreducible PL three-manifold whose entire boundary is one injected torus T. Assume every injected interior torus is boundary-parallel to T. Let A be a properly embedded annulus with injected core. Then either M is Seifert-fibered or A is boundary-parallel. In particular an atoroidal non-Seifert M of this scope has no essential embedded annulus.

## The actual neighborhood and its fiber word

The rims of A are essential simple circles on T, because a null rim would kill the injected core. They are therefore parallel primitive curves on the torus. Give T its circle parameter of this primitive slope and use the actual annulus parameter on A. The rim parameters extend across the finite annular collars, retaining their possible reversal. A small regular neighborhood

    N = N(T union A)

inside M consequently has an actual circle fibration. This is a finite chart construction: begin with T times an inward interval; thicken A by its supplied normal interval; match the two circle-times-rectangle attaching collars to the circle slope on the inner T collar. The base starts as an annulus and receives one band with both feet on its INNER boundary. Its original outer boundary is T. The band either preserves base orientation, giving a pair of pants, or reverses it, giving a once-punctured Möbius band. The total space is orientable in the latter case because the same transition reverses the fiber. No initial exceptional fiber is introduced.

Write h for the actual core of A, equivalently the primitive slope on the original T. It has infinite image in M by injection of T. In the pair-of-pants case N has two other boundary tori S1,S2; in the punctured-Möbius case it has one, S. These are actual exterior frontiers of N in the interior of M. The original annulus A remains the actual vertical annulus over the middle arc of the attached band. All its points and its original rim/access marking are retained.

## Compressible frontier tori

For any frontier torus which is not injected in M, the supplied finite PL Loop/compression interface gives an actual compression disk. The compression-to-sphere construction and irreducibility give its solid-torus side V: a neighborhood of the torus and disk is a punctured solid torus, and the sphere is capped by its actual ball. The alternative in which the torus lies in a ball is excluded by the infinite ambient image of h.

The solid-torus side is EXTERIOR to N. Its interior cannot contain the side containing N, because N reaches the actual boundary T of M, whereas V is a compact interior submanifold with just its frontier torus as boundary. More explicitly, N's connected interior misses that frontier and reaches a collar of T, so lies on the non-V side. The same argument shows that V contains none of the other frontier tori of N. Solid tori obtained from distinct frontier components are therefore disjoint: nesting would contain the other boundary component, and the covering alternative would contain the actual boundary T.

The attaching fiber h is not meridional on V, since a meridian disk would make it null in M. Write the actual primitive meridian on a boundary basis (h,c) as

    mu = p h + q c,   gcd(p,q)=1,   q != 0.

The supplied cyclic solid-torus model extends the circle fibration over V, with multiplicity |q| retained. This is an actual filling along its meridian, not a replacement of h by a root. Original A and every old marked path in N remain by inclusion.

If ALL frontier tori compress, adjoining their disjoint exterior solid tori removes every interior frontier. The resulting compact submanifold has precisely the original boundary T. Connectedness of M forces it to be M: a remaining complementary component would have an interior frontier, and none remains. The extended circle fibration makes M Seifert-fibered. Its base is the pair of pants with its two other rims capped by the actual cyclic disks, or the punctured Möbius band with its other rim capped. This proves the desired conclusion in that case.

## An incompressible frontier: use the actual torus-product pocket

Suppose a frontier S1 is injected. Atoroidality gives an ACTUAL product U between S1 and the original boundary T, with U homeomorphic to T squared times I. The closure of the M-minus-S1 component meeting T is this product pocket. Since N is connected, contains T and has S1 as a frontier, N lies in U.

In the punctured-Möbius case S1 is the only other frontier of N. Thus N has exactly the two boundary components of U and no interior frontier in U; connectedness gives N=U. This is impossible. In the actual circle-band presentation of N the one-sided base generator x satisfies

    x h x^-1 = h^-1.

The word h has infinite ambient image. If pi_1(N) were the abelian group pi_1(U)=Z squared, that relation would imply h squared equals one, a contradiction. Hence the punctured-Möbius case has no injected frontier and was already settled by the filling case above.

In the pair-of-pants case let S2 be the other frontier. It CANNOT also be injected. There is an elementary homological argument avoiding any extra torus-in-product classification. N is an oriented submanifold of U, and its boundary collars at T and S1 have exactly the outward orientations of the two ends of U. Those two end classes cancel in H2(U;Z). The oriented boundary of N therefore gives [S2]=0 in H2(U;Z). On the other hand, if S2 injected in M it would inject in U. Its group map Z squared -> Z squared is then an integral matrix with nonzero determinant. Projection U -> T squared induces that same matrix, and the pullbacks of the two circle classes have cup product equal to its determinant times the fundamental torus class. Thus its H2 map has nonzero degree, giving [S2] nonzero in H2(U;Z), a contradiction. Hence S2 is compressible.

Let V2 be its exterior solid-torus side from the previous construction. It lies in U and misses S1 and N. Indeed if it contained S1, it would contain nearby interior points of connected N on its side of S1, contrary to being exterior to N; it also cannot cross S1. Filling it removes the only interior frontier of N inside U, so

    N union V2 = U.

This is equality of actual submanifolds, with the original A still in N.

## The filling multiplicity is one, so A has its actual parallelism product

Use actual oriented base-rim generators x,y for S1,S2 in the pair-of-pants base. Before filling the group has presentation

    < h,x,y | [h,x]=[h,y]=1 >.

The actual S2 meridian is p h + q y, with q nonzero as above. Thus after filling,

    pi_1(U) = < h,x,y | [h,x]=[h,y]=1, y^q h^p=1 >.

The LEFT side is Z squared, hence its quotient by the image of h is abelian. The displayed right-side quotient by h is exactly

    < x,y | y^q=1 > = Z * C_|q|.

For |q|>1 this is nonabelian by the supplied free-product reduced-word test. Therefore |q|=1. The S2 filling is an ordinary fibered disk, not an exceptional-fiber disk. No source root has been silently divided out.

In the ACTUAL pair-of-pants band picture, the base arc a of A has both endpoints on the T rim and separates S1 from S2. Its S2 side is an annular region bounded by a, one interval of that T rim, and S2. Capping S2 by the just-recognized ORDINARY fibered disk makes this region a parametrized disk. Over this disk the circle bundle is an actual circle-times-disk product, using its finite disk parameters and matching circle charts. Its boundary has the original A on one side and the corresponding annulus in T on the other, with their two rim circles fixed. This is precisely the actual annulus-times-interval parallelism between A and that boundary annulus. It retains A itself and its original rim markings. Thus A is boundary-parallel.

The alternative in every case is now explicit: either all frontier fillings make M Seifert-fibered, or an injected frontier yields the actual parallelism product of A with T. Hence no essential embedded annulus exists when M is not Seifert-fibered.

## Original-facing logical use and limit

If a separately supplied essential-MAP annulus theorem states that an annulus map essential in the required paired sense produces an essential embedded annulus, the preceding contradiction excludes the original essential map. That existence argument does NOT require the selected embedded annulus to retain the original transverse d. It does require the exact essentialness-preservation premise of that map theorem. A theorem preserving only one rim, without that essentialness conclusion, is insufficient.

This topology operation changes no original theorem Statement, authorizes no original-d substitution, and supplies no independent review or metadata/native coverage. It closes only the actual embedded-annulus outer-torus step requested here. The hyperbolization owner retains the essential-map theorem and initial realization assembly.
