# Product cap and symmetric witness geometry

Author-stage construction in the still-missing product/nonvanishing lane. This does not recheck any repaired supplier. The newly accepted integral cube, finite oriented earring cobordism counts, specified reducible skein cap and finite planar unlink Frobenius operations are reused at their recorded scopes. In particular their singular based-link cuts are not silently changed to nonsingular $S^1\times\Sigma$ cuts. The separate cube author owns the new insertion/cutdown compactness extension; this note supplies the product-cap and witness topology.

## The actual zero-curvature cap sector

Let $F_g$ be a closed oriented surface and take $A_g=F_g\times D^2$. A fixed determinant whose first Chern class has degree one on $F_g$ extends over this cap: it is the pullback of a degree-one line bundle on $F_g$. One can describe its projectively flat adjoint connections by the retained lift model

$$N_g=\{(U_1,V_1,\ldots,U_g,V_g)\in SU(2)^{2g}:\prod_{r=1}^g[U_r,V_r]=-1\}/SU(2).$$

The central obstruction $-1$ means every tuple is irreducible. Indeed a positive-dimensional common centralizer in $SU(2)$ would contain a circle; all its commuting matrices would lie in that same circle, making every commutator one, a contradiction. The common stabilizer is exactly $\{1,-1\}$.

Every flat adjoint connection on $A_g$ restricts to one on a surface slice, and conversely every such surface connection pulls back: the projection induces an isomorphism on fundamental groups because $D^2$ is contractible. The retained lift of the boundary $S^1$ has value $+1$, because that loop bounds the actual disk. Thus the flat cap sector selects the boundary component with circle lift $+1$; it does not include the other lift obtained by tensoring around the boundary circle. The boundary flat sector is the same surface tuple space with an additional lift $Z$ centralizing the whole tuple; irreducibility forces $Z=\pm1$. Its retained-lift model is two copies of $N_g$.

The adjoint surface local system has $H^0=0$ by the stabilizer calculation. Its $H^2$ also vanishes: the trace pairing identifies the system with its dual, and the surface cellular pairing between a cell and its transverse dual cell identifies the top cochain quotient with the dual of the invariant zero-cocycles. Hence its Euler characteristic gives $\dim H^1=6g-6$. This also proves smoothness of the tuple equation modulo conjugation. To see the obstruction explicitly, linearize its relation map; the cokernel pairs with an invariant adjoint vector by the cellular transpose of the surface boundary map, hence is $H^2=0$. The relation map is a submersion, conjugation is locally free with discrete stabilizer, and the quotient is smooth of dimension $6g-6$. For $g=1$ the quaternion normal form gives a single point.

On the actual flat cap sector, the universal adjoint bundle is pulled back from the surface moduli problem. Restriction at an interior cap point gives its degree-four point class, and slanting over a surface slice gives the degree-two surface class. These observations identify the zero-curvature sector and its classical insertion restrictions. They do not assert that the relative cap invariant equals its classical fundamental class: positive-energy instantons and the cylindrical end still enter the complete relative invariant. In particular a dimension-zero classical cap sector in genus one does not calculate the nonzero degree-four point operator, which switches the two boundary sectors.

## A concrete symmetric two-torus building block

The following construction gives an actual exchange symmetry rather than assuming one from intersection numbers. In homogeneous coordinates $[x:y:z]$ on $\mathbb{CP}^2$ put

$$C_1=\{x^3+xz^2+y^3+z^3=0\},\qquad \iota[x:y:z]=[-x:y:z],\qquad C_2=\iota(C_1).$$

Both cubics are smooth. On $z=0$ their gradient cannot vanish at a projective point. On $z=1$, vanishing of the $y$ derivative gives $y=0$; vanishing of the $x$ derivative would give $3x^2+1=0$, while vanishing of the homogeneous $z$ derivative would require $2x+3=0$, an incompatible pair. The second cubic is its image by an automorphism. Their intersections have $z\ne0$ and are exactly the nine affine points

$$x\in\{0,i,-i\},\qquad y^3=-1.$$

At each such point the derivative of $x^3+x$ is $1$ or $-2$, and the derivative of $y^3+1$ is nonzero, so all nine intersections are transverse. The involution fixes the three with $x=0$ and exchanges the remaining three pairs. Each cubic is a torus: its map to the $[x:z]$ line is a degree-three cover with three total-ramification branch points (the distinct roots of $x^3+x+1$), and no ramification at infinity. Lifting a cell decomposition with these three branch points as vertices gives Euler characteristic $3\cdot2-3\cdot2=0$; the connected smooth oriented curve thus has genus one.

Choose $q=(0,-1,1)$. Blow up the other eight intersections, an invariant set. Choose $p_9=[1:-1:0]\in C_1\setminus C_2$ and $p_{10}=\iota(p_9)\in C_2\setminus C_1$ and blow up both. Denote the resulting rational surface by $X$.

The involution lifts to the resulting rational surface $X$. Write $H$ for the line class and $E_1,\ldots,E_{10}$ for the exceptional classes, with $E_9,E_{10}$ the last two. The proper transforms $T_1,T_2$ have classes

$$[T_1]=3H-E_1-\cdots-E_8-E_9,\qquad [T_2]=3H-E_1-\cdots-E_8-E_{10}.$$

Both are embedded tori because a nonsingular cubic has genus one and blowing up a point on a smooth curve leaves its proper transform diffeomorphic to the curve. Their squares are $9-9=0$, and their mutual intersection is $9-8=1$. Their only intersection is the unblown point $q$. The lifted involution exchanges them and exchanges $E_9,E_{10}$. This is an actual symmetry of the marked pair, not just equality of intersection forms. In oriented complex coordinates at $q$ the two tori are the two coordinate axes; choose their trivial normal framings to agree with these coordinates there.

Here is the required comparison with the rational elliptic block, rather than an inference from its homology. Before blowing up the last two points, the pencil spanned by the two original cubic equations has the nine transverse base points just listed. Blowing up all nine gives its actual map to $\mathbb{CP}^1$; near a base point this is the ratio $[u:v]$, resolved by the ordinary blowup chart. A generic fiber is the smooth proper transform of a cubic; its exceptional sphere at $q$ is a section because the ratio map restricts with degree one there.

Our initial ninth blowup point is $p_9$, not $q$, so first compare the marked pairs explicitly. On the smooth torus $C_1$, choose a point $q'$ close to $q$ and a smooth isotopy fixed near the other eight crossings, carrying the ordered pair $(p_9,q)$ to $(q,q')$. Such an isotopy is built by moving the two points along disjoint successive arcs in the punctured surface and using vector fields in their thin disk neighborhoods; neither moving point must cross the other. Extend this isotopy to a product normal tube of $C_1$ and multiply its tangential vector fields by a radial cutoff. Their compact flows give an ambient isotopy of $\mathbb{CP}^2$ preserving $C_1$ and the other eight crossings. It carries $C_2$ to a smooth torus $C'_2$ meeting $C_1$ at $q'$ instead of $q$, and carries $p_{10}$ to a point $p'_{10}$ on that torus away from all nine elliptic base points. It lifts to the actual blowups, since it is a diffeomorphism of their marked point configurations. Thus $X$ is the rational elliptic surface from the original cubic pencil, blown up at $p'_{10}$, as a smooth marked pair.

The second torus is also the one used in the source construction. In the initial eight-point blowup, the pencil members approaching $C_1$ avoid $p_9$ and, after the blowup at $p_9$, limit to $C_1$'s proper transform together with the exceptional section. Their local equation is $uv=\epsilon$, so they are the literal smoothing of that one crossing. The smooth members of the pencil connect $C_2$ to such a small smoothing while fixing $C_1$ and its remaining crossing $q$; all other singular parameters form a finite subset, which can be avoided by a path in the pencil parameter sphere. Transport this family by the preceding ambient isotopy. It identifies $C'_2$ with the smoothing of the elliptic fiber and its exceptional section. Taking the final proper transform at $p'_{10}$ gives the source torus class $T_1+\sigma-E_{10}$ with its actual embedded realization. This constructs the source's two marked tori and transports the exchange involution to them. It does not calculate a Donaldson invariant.

## The higher-genus cap surface and odd determinant

In a surface bundle model with a section $\sigma$ of square $-g$ and torus fiber $F$, take $g$ distinct fibers. The union $\sigma\cup F_1\cup\cdots\cup F_g$ has a tree of $g$ positive crossings. Resolve each crossing by $uv=\epsilon$. Smoothing connects components by a connected sum and gives an embedded surface $\widetilde\Sigma_g$ of genus $g$: the section contributes genus zero, each torus contributes genus one, and a tree smoothing adds no further handle. Its class is $\sigma+gF$ and its square is

$$\widetilde\Sigma_g^2=\sigma^2+2g(\sigma\cdot F)+g^2F^2=-g+2g=g.$$

Blow up $g$ distinct smooth points of this surface, away from the crossings and away from one further fiber $F'$. Its proper transform $\Sigma_g$ is still genus $g$ and has square $g-g=0$. The surface $F'$ is a torus of square zero and meets $\Sigma_g$ in one positive point. Thus $PD[F']$ restricts to degree one on $\Sigma_g$ and supplies the required odd determinant class. This degree calculation does not appeal to a canonical basic class.

The normal bundle of $\Sigma_g$ is an oriented real two-plane bundle of Euler number zero. An explicit global nonzero normal section can be obtained by extending local sections over a finite cell structure: there is no obstruction on the one-skeleton, and the winding numbers on the two-cells sum to the Euler number; modifying the edge sections moves these winding numbers until they all vanish. A second section is rotation of the first. Hence one may choose an actual product tube $\Sigma_g\times D^2$.

Alternatively the same marked pair is constructed from $g$ copies of the concrete block $X$: sum consecutive copies along $T_1$ using the chosen product normal framings, and join the punctured $T_2$'s across the seam. The joined surface has genus $g$, square zero and a remaining transverse torus meeting it once. Its square-zero framing is the one carried by this gluing. This construction is enough to define the witness; identifying its ambient manifold with a named elliptic surface is not required for the topology. Identifying its gauge counts with elliptic formulas would be a separate operation.

Take two copies of this marked pair and perform the framed surface sum along $\Sigma_g$: on the boundary tubes use $(p,z)\mapsto(p,\overline z)$, with the prescribed surface marking. The result is a closed oriented witness $C_g$ and a distinguished surface copy $\Sigma_g\times\{z_0\}$ in its neck. The two punctured copies of the transverse torus $F'$ join to a genus-two surface $\widehat\Sigma_2$. At the crossing chart its joining annulus passes once across $\Sigma_g\times\{z_0\}$, so

$$\widehat\Sigma_2\cdot\Sigma_g=1.$$

Consequently $w=PD[\widehat\Sigma_2]$ is an actual integral determinant class odd on the product boundary surface; this is the determinant class used in Muñoz's fiber-sum witness. One must retain this class and its gluing isomorphism when cutting out the cap, rather than replacing it by an unspecified odd class and assuming all invariant signs unchanged.

There is also a concrete two-direction description. Arrange the $2g$ copies of $X$ in a two-by-$g$ array. Join first along the row $T_1$ directions and then along the joined $T_2$ surface directions; this gives the described $C_g$. Reverse the order: first join the two copies in each column along $T_2$, giving a block with a genus-two surface built from their punctured $T_1$'s, then join the $g$ blocks along those genus-two surfaces. The two constructions agree for the fixed product markings. Away from crossing neighborhoods the identifications have disjoint supports. At a crossing the two gluings identify respectively the two normal angular coordinates in $D^2\times D^2$; performing these two coordinate identifications in either order gives the same quotient. The collars have the same product radial coordinates. Choosing one smoothing of their product corner therefore gives the same smooth gluing, with the same determinant transition maps. The block involution exchanging $T_1,T_2$ supplies the needed marked identification of column and row building blocks. This is the finite geometric reason that the higher-genus witness can be evaluated by repeated genus-two gluing, once that actual gluing count has been proved.

## The count that this geometry still does not calculate

The double and its determinant are now actual geometric data. Turning their relative invariant into the nonzero insertion witness still requires a count. The source computes the two surviving extremal branches by repeated genus-two gluing with factors $-32$ and $+32$, starting with branch coefficient $1/4$ in the genus-two block. The coefficient arithmetic is

$$(-32)^{g-1}(1/4)^g=(-1)^{g-1}2^{3g-5},\qquad 32^{g-1}(1/4)^g=2^{3g-5}.$$

That arithmetic is not a derivation of either $32$ or $1/4$. Nor does the rational primitive class constructed above force the point-insertion ratios $+2$ or $-2$. Those values require the actual cut-down moduli, compactification and oriented matching degree on these nonsingular product and genus-two cuts.

The accepted Frobenius handle factor $2$ belongs to a marked singular planar unlink movie. A nonsingular genus-two boundary, its odd determinant and its surface/point insertions are different data. The accepted cap's degree-one evaluation is over its specific unlink critical interval; it is not the degree of the present product-cap evaluation. Without an actual identification of these geometric problems, multiplying that handle factor five times to obtain $32$ would supply no proof. The present construction provides the missing witness topology and determinant, while the new insertion author constructs the analytic cutdown extension. It leaves the enumerative seed explicitly unproved instead of assigning it a numerical value from a different cobordism theory.
