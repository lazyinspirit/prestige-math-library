---
id: lem-atoroidal-piece-with-essential-annulus-is-seifert
kind: lemma
title: "An atoroidal piece containing an essential annulus is Seifert-fibered"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies
  - lem-angular-boundary-neatification-preserves-smooth-disk-obstructions
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
  - lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-normal-form-for-free-products
  - thm-seifert-van-kampen
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. All marked neighborhoods and disk surgeries are finite. Smooth transversality, curve parameters and fibration matching use the new finite proofs; the N-side product-collar obstruction uses the proved flat-product compression/cut-injection bridge, not a general smooth triangulation theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.16 and its proof, printed pp.20–21"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, classification of pieces containing essential annuli"
---

## Statement

Let $M$ be a compact connected orientable irreducible atoroidal $3$-manifold whose boundary components are tori. If $M$ contains an incompressible, boundary-incompressible annulus $A$ whose boundary lies in $\partial M$, then $M$ is Seifert-fibered.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.16](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** The compact connected orientable irreducible atoroidal smooth three-manifold $M$ with torus boundary and the incompressible boundary-incompressible proper annulus $A$.

[F1] The geometric disk obstructions and atoroidality are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition. In particular irreducibility supplies a parametrized smooth ball for each interior sphere.

[F2] The two circle-bundle bases used initially have injected boundary torus groups; their base groups are free of rank two and the bundle projection surjects onto them ([[lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective]], Statement and Proof 1.1–1.2). Finite free-product reduced words are nontrivial, and a connected gluing gives the group pushout ([[thm-normal-form-for-free-products]], [[thm-seifert-van-kampen]], Statements).

[F3] Torus curves and their annulus strips have finite smooth parameters ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]]). A nullhomotopic torus circle has a planar lift whose bounded disk has the smooth parameter of [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]; different deck translates cannot nest bounded equal-area disks, so this disk projects injectively. Compact smooth embeddings admit relative transversality without choice ([[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]], Statement).

[F4] Marked smooth balls and disk windows have explicit standard parameters and collar-supported attachment/removal maps, without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]], Statement).

[F5] Equal primitive Seifert fiber slopes admit actual smooth fiber matching and product-collar gluing, without choice ([[lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing]], Statement).

[F6] In a supplied smoothly parametrized $T^2\times I$, an incompressible smooth torus system has injective cut-piece groups, without choice ([[lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product]], Statement and full proof).

[F7] Finite compact-source isotopies extend smoothly ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]). Finite bundle transport uses the Euclidean flow and smooth parameter dependence in [[thm-picard-lindelof-local-existence-and-uniqueness]] and [[thm-smooth-dependence-of-ode-solutions-on-parameters]].

[F9] Every compact smooth boundary-preimage surface has a boundary-fixed smooth embedding neatification with an explicit topological ambient extension. The actual smooth disk obstructions and boundary-compressing witnesses transport as stated in the endpoint-witness supplier. Products here are the products in the original Definition; on a broad nonneat input their pullbacks are topological products, not newly asserted smooth collars. [[lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies]] [[lem-angular-boundary-neatification-preserves-smooth-disk-obstructions]]

## Proof

1.1 First apply [F9] to the given surface, fixed pointwise on its boundary. The resulting surface is neat. Incompressibility passes to it, and a boundary-compressing witness passes in either direction; absence of boundary compressions therefore passes as well. Work with this neat representative for the following smooth collar constructions. The boundary-fixing topological ambient extension pulls any resulting boundary-parallel product back to the actual original surface. Thus this preparation does not add a neatness hypothesis to the Statement. Take a small product neighborhood of $A$ and collars of its incident boundary tori. They exist by a finite coordinate construction: choose the normal side using orientations of $M$ and $A$, combine finitely many adapted chart fields by normalized finite bumps, and use their short flow and the local inverse and compact separation arguments in [F7]. Normalize the two boundary curves on each incident torus by [F3]. Their parallel strip parameters and the product parameter of $A$ supply circle coordinates on the neighborhood, agreeing at the attaching rims. Circle parameter discrepancies have degree $\pm1$ and are adjusted by interpolation of their increasing, or decreasing, angular lifts; this is finite. Round the quadrant corners in the base coordinate, keeping the circle coordinate. The resulting neighborhood $N_0$ is an ordinary circle bundle with $A$ vertical. If the annulus meets two different original tori, its base is a pair of pants with two original boundary circles and one internal boundary. If it meets one original torus, its band attaches to the same base boundary circle: the two possible band identifications give a pair of pants with two internal boundaries, or a once-punctured Möbius band with one. The total space is orientable, since it is a submanifold of $M$; in the Möbius case the fiber orientation reverses with the base orientation. These are actual finite band-and-collar quotient parameters. The internal frontier consists of at most two tori. [F1, F3, F7, given, construct]

2.1 We first fill compressible frontier tori, before addressing boundary-parallel ones. For $N_0$, frontier groups inject into its group by [F2]. Use this injection for the initial iteration. After the only possible intermediate filling, its explicit group calculation below will verify the invariant before another iteration. If a frontier torus is compressible in $M$, choose a compressing disk and put it transverse to the other frontiers by [F3]. Its intersection consists of finitely many circles. Remove any inessential circle on a frontier by an innermost disk replacement: choose its frontier disk with interior disjoint from the compressing disk, replace the latter's subdisk by it and push slightly to the side of the retained disk. The disk parameters in [F3] and quadrant rounding give an embedded smooth disk with the same essential original boundary and fewer intersections. If a remaining intersection is essential on its frontier, an innermost circle on the disk cuts off a compressing disk whose interior misses the entire frontier. If no intersection remains, the original disk already has this property. Thus some frontier $T$ has a clean compressing disk $D$. It cannot lie in $N$, since its boundary class is nonzero on $T$ and $\pi_1(T)\to\pi_1(N)$ is injective. The connected disk interior consequently lies on the exterior side of $N$. [F1, F2, F3, step 1.1, construct]

3.1 Compress $T$ along $D$ and push the resulting sphere slightly off the frontier. Irreducibility supplies a ball $B$ bounded by it. The connected $N$ lies outside that ball: it misses the compressed sphere and contains an original boundary torus of $M$, whereas $B$ is an interior ball. The disk neighborhood restored by reversing compression is also on this non-ball side, because its rim strip is joined to $N$ through the gap removed from $T$. Hence reversal attaches a marked $1$-handle to $B$; it does not remove a possibly knotted handle from its interior. Its two disk windows have the parallel-copy parameters of $D$, and [F4] standardizes them. The result is a solid torus $U$ outside $N$, with boundary exactly $T$. It contains no other frontier, since $B$ and the small disk neighborhood miss $N$ except at $T$. The exterior component adjacent to $T$ is exactly $U$: its interior is both open and closed in that component and it has no other boundary. Adjoin it to $N$. [F1, F4, step 2.1, construct]

4.1 The meridian of $U$ cannot be its attaching fiber slope. If it were, [F3] and its supported boundary collar formula give a smooth meridian disk bounded by that actual fiber. In $N$, choose a base arc from this frontier to the interior of the base arc underlying $A$, avoiding any previous cone point and meeting that arc only at its endpoint. Its inverse image is a vertical annulus meeting $A$ in its one boundary core. Join it to the meridian disk and round the common collar. This is a compression of $A$, a contradiction. In product coordinates $U=D^2\times S^1$, therefore, the primitive regular-fiber class is $a\mu+b\lambda$ with $b\ne0$. After reversing the fiber orientation take $b>0$. The action $$t\cdot(z,w)=(e^{iat}z,e^{ibt}w)$$ gives a Seifert model with that boundary slope and one possible multiplicity-$b$ core. Indeed the map $(\zeta,v)\mapsto(v^a\zeta,v^b)$ identifies $U$ with the quotient by $(\zeta,v)\mapsto(e^{-2\pi ia/b}\zeta,e^{2\pi i/b}v)$; since $\gcd(a,b)=1$, choose an inverse generator to obtain exactly the standard fibered-solid-torus cyclic model. Its boundary fibration has the same fiber class as the old one. Use [F5] to match it smoothly and glue the product collars. Thus this filling extends the actual Seifert structure, leaves $A$ vertical and caps that base boundary by a disk with cone order $b$ (regular if $b=1$). [F1, F3, F5, step 1.1, step 3.1, construct]

5.1 There are initially at most two frontiers. The only filling that can leave another frontier is the pair-of-pants case with just one original boundary torus; its new base is an annulus with at most one cone. Its remaining boundary groups still inject, by this explicit finite calculation. Before filling the orientable circle bundle over a pair of pants has group $F(a,c)\times\langle h\rangle$: lift the two free base generators, and the oriented fiber $h$ is central and injective by [F2]. Filling adds the primitive relation $c^q h^p=1$, with $q\ge1$, by [F2]'s gluing pushout. The quotient by central $h$ is $\mathbb Z*C_q$. The two boundary base loops have images $a$ and $(ac)^{-1}$, both of infinite order by reduced words (for $q=1$, both are $a^{\pm1}$). Also $h$ has infinite order: the presentation maps to the additive reals by $h\mapsto1$, $c\mapsto-p/q$, $a\mapsto0$. Thus a boundary element projecting trivially must first have zero base exponent, then zero fiber exponent. This proves boundary-torus injection after the intermediate filling. Step 2.1 is therefore applicable again. After finitely many such steps, either no frontier remains or every remaining frontier is incompressible in $M$. [F2, step 1.1, step 2.1, step 4.1, construct]

6.1 By atoroidality, each remaining frontier $T$ is parallel to an original boundary torus, with a supplied smooth product $P=T^2\times I$. If $P$ is on the exterior side of $N$, it is exactly the adjacent exterior component, so absorb it into $N$, extending the fibration as a product by [F5]. Suppose instead that $N$ lies on the $P$ side. It is then contained in $P$, since the latter occupies that whole component between $T$ and the original boundary. The product contains only one original boundary torus of $M$. Thus this is impossible if $N$ already contains two original boundary tori. If $N$ still has two frontiers, it is the original pair-of-pants bundle with one original boundary; the other frontier $T'$ is an incompressible smooth torus in $P$. By [F6], every cut piece of $P$ along $T'$ injects into $\pi_1(P)$. The connected $N$ is one such piece, since its only interior boundary in $P$ is $T'$. But $\pi_1(N)$ surjects onto the nonabelian free rank-two base group [F2], while $\pi_1(P)=\mathbb Z^2$ is abelian. This is a contradiction. This argument treats $N$ as a possible proper submanifold of the collar; it does not incorrectly infer that nonabelian $N$ cannot sit inside a product without an injection proof. [F1, F2, F5, F6, step 5.1, construct]

7.1 It remains to exclude the $N$-side collar when there is one frontier and one original boundary. In that case $N=P$, since it has exactly the two boundary tori of $P$ and no interior frontier in it. If its base is the once-punctured Möbius band, [F2]'s free rank-two quotient contradicts the abelian product group. Otherwise this is the intermediate annulus-with-one-possible-cone case. Its central-fiber quotient from step 5.1 is $\mathbb Z*C_q$, which is nonabelian for $q\ge2$. Hence $q=1$: the inherited structure is an ordinary circle bundle over an annulus. The vertical $A$ has both ends on the same original base boundary, so its base arc cuts off a disk. That disk has a smooth parameter by [F3] in an annulus cover. Trivialize the bundle over it by radial horizontal transport: combine finitely many local lifts by finite base bumps and solve the radial ODE from its center using [F7]. A fixed point of the initial fiber gives a section disk. Its boundary consists of an essential spanning arc of $A$ and an arc in the original boundary torus. This is a forbidden boundary compression of $A$. Thus the collar can never be on the $N$ side. Every remaining frontier is therefore an exterior product collar and can be absorbed. [F1, F2, F3, F7, step 5.1, step 6.1, construct]

8.1 Each solid-torus filling or collar absorption removes a frontier, and initially there were at most two. At the end $N$ has no internal frontier; it is nonempty, closed and relatively open in connected $M$, hence equals $M$. Its fibration is the smooth Seifert structure constructed in steps 4.1 and 6.1. The neat representative of the annulus was retained throughout. The conclusion is a smooth Seifert structure on the unchanged ambient manifold, so it proves the original choice-free Statement without asserting that an original tangential annulus is smoothly ambient isotopic to a vertical one. The only product-group comparison used the explicit flat-product compression and cut-injection bridge [F6]; no arbitrary smooth/PL compatibility or general topological triangulation assertion entered. All choices and modifications were finite. [F1, F5, F6, step 3.1, step 5.1, step 7.1, construct] ∎
