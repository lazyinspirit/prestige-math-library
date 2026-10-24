---
id: thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded
kind: theorem
title: Smooth group signature defects are independent and uniformly bounded
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
aliases: []
deps:
  - def-axiom-of-choice
  - thm-explicit-mitoses-give-functorial-integrally-acyclic-group-envelopes
  - thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures
  - thm-topological-finite-projective-l2-duality-and-boundary-gluing
  - thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism
  - lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse
  - cor-classifying-space-of-a-discrete-group-is-a-k-g-one
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - lem-diagonal-bar-coinvariants-compute-group-homology
  - thm-topological-kunneth-short-exact-sequence-for-homology
  - lem-cw-quotient-induces-relative-singular-homology-isomorphisms
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes
  - lem-relative-hurewicz-comparison-through-a-choice-free-weak-model
  - thm-whitehead-theorem
  - thm-long-exact-sequence-of-relative-homotopy-groups
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-every-closed-oriented-smooth-three-manifold-bounds-a-compact-oriented-smooth-four-manifold
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-normal-form-for-free-products-with-amalgamation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jae Choon Cha, A topological approach to Cheeger-Gromov universal bounds
        for von Neumann rho-invariants
      url: https://arxiv.org/pdf/1405.1805
      locator: Complete printed11–14 read; smooth realization and all uses needed here
        are proved locally, without importing the cited STOP bordism axioms
    - title: Daniel S. Freed, Bordism Old and New
      url: https://web.ma.utexas.edu/users/dafr/bordism.pdf
      locator: Complete printed88–91 read; general collapse construction with retained
        coefficient labels is detailed below
dependency_level: 6
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. For every closed oriented smooth four-manifold $Z$ and every based homomorphism $\theta:\pi_1Z\to G$ to an arbitrary discrete group,
$$\operatorname{sign}^{(2)}_G(Z,\theta)=\operatorname{sign}(Z).$$
Let $M$ be a closed oriented smooth three-manifold and $\phi:\pi_1M\to G$ any homomorphism. There exist an injective homomorphism $j:G\hookrightarrow\Gamma$ and a compact oriented smooth four-manifold $W$ with $\partial W=M$ and a homomorphism $\pi_1W\to\Gamma$ restricting to $j\phi$. For any such data put
$$\rho_{\mathrm{sm}}(M,\phi)=\operatorname{sign}^{(2)}_\Gamma(W)-\operatorname{sign}(W).$$
This number is independent of the smooth bound, its extending map and the injective target enlargement. The same value is obtained from $r$ copies of $M$ bounding a smooth $W$ by dividing its defect by $r>0$. Embedding the target group preserves the number. There is a finite constant $C_M$, depending only on the given smooth manifold $M$, such that
$$|\rho_{\mathrm{sm}}(M,\phi)|\le C_M$$
for all $G$ and $\phi$, including nononto homomorphisms and uncountable targets. For a disconnected compact $M$, use its finitely many components and the sum of these values, equivalently the free-product convention for its based fundamental groups. This is a signature-defect invariant among smooth bounds. No comparison with a nonsmooth TOP bound or an analytic eta definition is asserted.

## Statement references

[[thm-explicit-mitoses-give-functorial-integrally-acyclic-group-envelopes]]

[[thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures]]

[Cha, section2](https://arxiv.org/pdf/1405.1805)

## Facts & Assumptions

**Given:** AC, the indicated smooth manifolds and regular unitary group coefficients, actual boundary collars, and compatible based paths for restrictions and gluings.

[A1] [[def-axiom-of-choice]] is retained in the group-envelope, smooth embedding/transversality, group/classifying-space, CW and spectral suppliers.

[F1] There is a functorial injective $\iota_G:G\to A(G)$ with integral positive group homology zero. Group homology is computed by the explicit unnormalized bar resolution. A discrete group has a connected CW $K(G,1)$ model with contractible universal cover, obtained from Milnor's contractible principal total space. [[thm-explicit-mitoses-give-functorial-integrally-acyclic-group-envelopes]], [[lem-diagonal-bar-coinvariants-compute-group-homology]], [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]], [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F2] Smooth embedding, tubular collapse, compact finite-Grassmannian factorization, controlled smoothing near the zero section, relative transverse homotopies, normal-first orientation and linearization of a transverse map to its own collapse are proved in the point-target collapse carriers. [[thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism]], [[lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse]]

[F3] Integral cross-product Kunneth is natural, and a CW quotient induces the relative singular homology comparison. [[thm-topological-kunneth-short-exact-sequence-for-homology]], [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]]

[F4] Cellular approximation and CW mapping cylinders exist under AC; pair homology and homotopy sequences hold. The first possibly nonzero relative homotopy group of a CW pair with simply connected subspace is its relative homology, and a weak equivalence of CW complexes is a homotopy equivalence. [[thm-cellular-approximation-for-maps-of-cw-pairs]], [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]], [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]], [[thm-whitehead-theorem]], [[thm-long-exact-sequence-of-relative-homotopy-groups]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F5] Every closed oriented smooth three-manifold bounds an actual compact oriented smooth four-manifold. Compact smooth manifolds have finite CW homotopy models under countable choice, implied here by AC. [[thm-every-closed-oriented-smooth-three-manifold-bounds-a-compact-oriented-smooth-four-manifold]], [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]

[F6] Actual coefficient-extending five-bordisms preserve ordinary and $L^2$ signatures. Bounded finite-projective chains model compact manifolds and their gluing diagrams, give group-subgroup induction by identical coset matrix blocks, and give whole-component signature additivity. [[thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures]], [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]]

[F7] The amalgamated free product of two groups along injective copies of the same subgroup has transversal normal forms. A nontrivial element of either factor is either a nontrivial amalgamated-subgroup element or a nontrivial one-syllable normal word, so both factor maps are injective. [[thm-normal-form-for-free-products-with-amalgamation]]

## Proof

1.1 We first identify the actual classifying-space homology used below. For a group $H$, use a CW $K(H,1)$ model from [F1], with universal cover $E$. Lift its CW cells to $E$; the higher homotopy groups agree with those of $BH$ and the fundamental group is zero, so [F4] and Whitehead make $E$ contractible. The singular complex $C_*(E;\mathbb Z)$ is a free $\mathbb ZH$ complex: deck action is free on singular simplices, since a deck transformation fixing one simplex fixes its first vertex. Choose orbit representatives under [A1]. Its augmented complex is exact by contractibility. Taking deck coinvariants identifies it with singular chains of $BH$: every simplex lifts, and two lifts differ by a unique deck transformation, consistently on faces. Comparing this free resolution of $\mathbb Z$ with the bar resolution gives the same coinvariant homology. Explicitly lift the identity in degree zero and recursively lift each boundary of a free basis vector through the next differential of the exact resolution. This gives augmentation-preserving chain maps in both directions. The same recursion on their difference from the identity supplies chain homotopies. Tensoring with the trivial module retains these actual identities. Therefore $H_*(BH;\mathbb Z)=H_*(H;\mathbb Z)$; in particular $K=BA(H)$ is connected and integrally acyclic. All free-basis lifts are permitted by [A1]. [A1, F1, algebra, construct]

1.2 We need the labelled version of smooth collapse, and give its extension explicitly. For a CW space $K$ set $K_+=K\sqcup\{*\}$. A closed oriented smooth $n$-manifold with a map $f:M\to K$ gives a based map $S^{n+q}\to T_q\wedge K_+$: embed $M$, take the normal tube and its oriented classifying map as in [F2], and on a normal vector over $x$ retain the additional label $f(x)$. Collapse the tube exterior to the basepoint. Here $T_q$ is the Thom space of the universal oriented $q$-plane bundle and sufficiently large $q\ge\max(2,n+1)$ is allowed. Independence of the embedding, tube, normal metric and classifying homotopy follows from the same explicit tube comparisons and stabilization in [F2], with the label retained on each tracked base point of $M$. A smooth bordism carrying a map to $K$ embeds neatly with product boundary collars by [F2]; collapsing its tube and retaining its label gives a based homotopy after a common stabilization. The normal-first convention of [F2] gives negative incoming and positive outgoing boundary orientations. [F2, given, construct]

1.3 Now take connected integrally acyclic $K$. At a finite oriented Grassmannian stage let $T$ be its Thom space, with rank $q\ge2$. It is a finite based CW space with one basepoint zero-cell and all other cells in dimensions at least $q$: trivialize the oriented bundle over each base characteristic disk and collapse its sphere boundary, which shifts that disk's cell dimension by $q$. The ordinary product of a finite CW space with a CW space has the product CW structure. For this topology assertion, product with each compact disk preserves the quotient test for the characteristic-map presentation of $K$ by the ordinary compact-domain exponential law, iterated from the interval. The finite characteristic-disk quotient onto the Hausdorff finite complex $T$ is a closed map with compact fibers; its product with $K$ is still closed by the compact-fiber tube argument, hence quotient. Together these two tests are exactly the product-cell weak topology. The quotient $(T\times K)/(\{*\}\times K)=T\wedge K_+$ is therefore CW with all nonbasepoint cells of dimension at least $q$. Both it and $T$ are simply connected, by cellularly moving each loop into its single-vertex one-skeleton. [F2, F4, construct]

2.1 Maps to these $K(H,1)$ spaces realize group homomorphisms and classify them up to based homotopy on the smooth domains used here. Indeed replace a compact smooth domain by its finite CW model [F5]. Send a maximal tree to the basepoint and the remaining one-cells to loops representing the stipulated generator images. The relator condition extends this map across its two-cells; vanishing $\pi_jK(H,1)$ for $j>1$ extends it across every higher cell. A homotopy between maps with the same based fundamental-group homomorphism is built by the same relative cell induction on the cylinder; its obstruction on each cell lies in the corresponding zero higher homotopy group, with the one-cell case fixed by equality in $\pi_1$. Transport along the actual CW homotopy equivalence gives the map on the smooth domain. The same construction gives maps $Bf$ for group homomorphisms and their compositional compatibility up to specified based homotopies. On a boundary collar these homotopies can be inserted to make the restrictions exactly the specified maps. [A1, F1, F5, step 1.1, construct]

2.2 Conversely let $g:S^{n+q}\to T_q\wedge K_+$ be based. The Thom projection $p_T$, induced by $K_+\to S^0$, is continuous. Its zero preimage is compact and lies in the open set where $g$ has uniquely defined Thom and $K$ coordinates. Its Thom coordinate has compact image in a finite Grassmannian Thom space. On a compact buffer about the zero preimage apply [F2]'s controlled Euclidean smoothing/retraction and arbitrarily small transverse perturbation to that coordinate, keeping the $K$ coordinate unchanged. Cutoffs have support in this product-coordinate open set; on the compact outer buffer the Thom coordinate stays away from zero, so sufficiently small perturbations create no extra zeros. Off the buffer retain $g$. The result is based and has a compact smooth transverse zero preimage $P$ and its continuous retained map to $K$. The identical construction on a homotopy, constant on endpoint collars and protecting the basepoint track, gives a smooth normal bordism of the endpoint preimages with its retained $K$ map. Thus stable homotopies give actual labelled bordisms. [F2, step 1.2, construct]

2.3 Projection $T\times K\to T$ induces an integral homology isomorphism by [F3]: the Kunneth terms from $K$ are only its $H_0=\mathbb Z$, with no Tor contribution. The restriction $\{*\}\times K\to\{*\}$ is also an integral homology isomorphism. Their pair sequences imply an isomorphism on relative homology. The quotient comparison in [F3] thus shows that the actual projection $p:T\wedge K_+\to T$ is an integral reduced homology isomorphism, also an ordinary degree-zero isomorphism since both spaces are connected. To see it is a homotopy equivalence, replace it by its cellular CW mapping cylinder. The simply connected pair has zero relative integral homology by its pair sequence. Its relative degree one is zero by the homotopy pair sequence; if it is $(r-1)$-connected for $r\ge2$, the first relative Hurewicz isomorphism [F4] makes its degree-$r$ homotopy zero. Induction makes all relative homotopy groups zero. The homotopy sequence and Whitehead [F4] give a homotopy equivalence. It is based: its source basepoint is a CW subcomplex, so the inverse and its homotopies can be adjusted along their basepoint tracks, whose loops are null in the simply connected spaces. [F3, F4, step 1.3, algebra]

3.1 These assignments are inverse, including surjectivity with the label. Near $P$, write the smooth Thom coordinate as $(b(x,v),a(x,v))$ on a small normal tube. Its normal derivative $A_x$ is invertible. As in [F2], transport the bundle along $b(x,tv)$ by its finite Grassmannian orthogonal projections and linearize $a$ to $A_xv$; a uniform $o(\|v\|)$ bound makes this homotopy zero-free off $P$. Simultaneously replace the continuous label $k(x,v)$ by $k(x,(1-s\chi(v))v)$, where the tube cutoff is one on a smaller tube and zero near its boundary. This homotopy is defined entirely in the product-coordinate region. On that smaller tube its final label is $k(x,0)$. Compactness bounds the nonzero Thom radius away from zero outside a still smaller tube. A radial Thom map, homotopic to the identity, expands every radius at least this bound to the collapsed boundary; the resulting map is exactly the normally classified collapse of $P$ with label $k|_P$, up to the metric/tube comparisons in [F2]. Its normal orientation gives the original orientation on a collapsed $M$. Stabilization adds the same positive first normal coordinate as in [F2] and leaves the labels unchanged. Consequently labelled oriented smooth bordism is identified with the stable colimit of $\pi_{n+q}(T_q\wedge K_+)$, with an actual labelled bordism witnessing equality of any two classes. No topology or smoothness of $K$ beyond its CW topology was used for perturbing the Thom coordinate. [F2, step 1.2, step 2.2, construct, algebra]

4.1 The section $s:T\to T\wedge K_+$ using a fixed point of $K$ has $ps=1$. Step 2.3 makes $p$ an isomorphism on all based homotopy groups, so $s_*$ is its unique inverse. For a labelled collapse of a fixed compact $M$, choose one finite Grassmannian Thom stage $T$ containing its classifying tube map. Apply step 2.3 to this $T$ and the whole acyclic $K$. Since $p_*$ is injective and $p s=1$, the labelled collapse and the constant-labelled version of its unlabelled collapse represent the same homotopy class already at this finite stage. The homotopy may have labels escaping finite subcomplexes near a basepoint preimage, which is harmless: its Thom projection remains in this same finite $T$, and step 2.2 perturbs only that projection on a compact zero buffer. Thus the equality passes to the same stable collapse group without any global compact-label claim. By step 2.2 this equality is witnessed by an actual compact smooth $(n+1)$-bordism over $K$, between $(M,f)$ and the same oriented $M$ with constant map. In this argument finite stage projection is applied to a collapsed tube, whose label lies in the compact image $f(M)$, so no compact image bound at a basepoint singularity is assumed. [F2, F4, step 1.2, step 2.2, step 3.1, step 2.3, algebra, construct]

5.1 For a closed smooth four-manifold $Z$ with group map $\theta:\pi_1Z\to G$, map it to $BA(G)$ using $\iota_G\theta$ and step 2.1. This classifying space is integrally acyclic by step 1.1. Step 4.1 gives an actual smooth five-bordism over $BA(G)$ from this coefficient manifold to $Z$ with constant map. By [F6], its $L^2$ signatures agree. With constant coefficients the completed finite matrices are those of ordinary complex chains tensored with the regular Hilbert module, so each positive or negative scalar eigenspace contributes its ordinary multiplicity times the trace of $1$, equal to one. The constant-map $L^2$ signature is therefore the ordinary signature of $Z$. Group-subgroup induction [F6] identifies the original $G$ signature with its $A(G)$ signature, proving the first assertion for arbitrary $G$, without an analytic index theorem. [F1, F6, step 1.1, step 2.1, step 4.1, algebra]

5.2 Fix a connected smooth $M^3$, put $\Pi=\pi_1M$, and choose its map $M\to BA(\Pi)$ induced by $\iota_\Pi$. Step 4.1 gives a smooth four-bordism over $BA(\Pi)$ from $M$ to $M$ with constant map. The latter end bounds a compact smooth four-manifold by [F5], whose constant map extends that end. Glue this actual filling with the bordism, respecting its collars and orientation, to obtain one fixed smooth $W_M$ with $\partial W_M=M$ and a map $\psi_M:\pi_1W_M\to A(\Pi)$ restricting to $\iota_\Pi$. For any $\phi:\Pi\to G$ compose with $A(\phi)$; functoriality gives $A(\phi)\iota_\Pi=\iota_G\phi$. Thus the same smooth $W_M$ is a valid bounding extension into $A(G)$ for every $G,\phi$, establishing existence with injective $G\to A(G)$. [F1, F5, step 2.1, step 4.1, construct]

6.1 Compare any two smooth bounds $W_1,W_2$ for the same $(M,\phi)$, over target enlargements $j_i:G\hookrightarrow\Gamma_i$. Form $L=\Gamma_1*_G\Gamma_2$; [F7] embeds both targets into $L$. Their maps agree on the based boundary, and the collar gluing and van Kampen property supply the map on the smooth closed four-manifold $Z=W_1\cup_M(-W_2)$. If a boundary restriction was given only up to based homotopy, insert its actual cylinder homotopy first; its two maps then agree literally. Induction in [F6] preserves each signature under its target inclusion. Additivity and orientation reversal give the difference of their defects as $\operatorname{sign}^{(2)}_L(Z)-\operatorname{sign}(Z)$, zero by step 5.1. This proves independence of both the smooth bound and the extending enlargement/map. Replacing $G$ by a group containing it preserves the value by using the same extension into an amalgamated target. No surjectivity of $\phi$ is involved. [F6, F7, step 5.1, step 5.2, construct, algebra]

7.1 A smooth $W$ bounding $rM$ may be compared in the same amalgamated target to the disjoint union of $r$ copies of $W_M$. Glue their $r$ matched boundary components. The result is a closed smooth four-manifold, possibly disconnected, with a compatible target map; its signature defect is zero by step 5.1 componentwise. Additivity in [F6] gives $\operatorname{defect}(W)=r\operatorname{defect}(W_M)$. If coefficient identifications on different components involve based paths, choose the corresponding paths when applying van Kampen; equivalently use the graph-of-spaces fundamental group and send its additional connecting generators to these specified group elements. Thus division by $r$ yields exactly the same value. [F6, F7, step 5.1, step 5.2, step 6.1, algebra]

7.2 Fix a finite-projective coefficient chain model for the fixed smooth $W_M$ over $R=\mathbb C\pi_1W_M$, using [F6], and fix an idempotent presentation $E_2=eR^N$ of its degree-two term. Here $N$ is fixed with $W_M$, before $G$ or $\phi$ is chosen. Under any coefficient homomorphism $R\to\mathbb CA(G)$ the actual chain comparison maps and homotopy identities extend by tensoring. First-vertex singular frames identify that extended singular complex with the actual target local-coefficient complex; this uses a chain homotopy equivalence, not flatness of the homomorphism. The extended idempotent has Hilbert-closed range in $\ell^2(A(G))^N$ and dimension at most $N$. Reduced degree-two homology and its positive/negative spectral subspaces consequently have dimension at most $N$, giving $|\operatorname{sign}^{(2)}_{A(G)}W_M|\le N$. Extend the same matrices along the ordinary augmentation $R\to\mathbb C$; their ordinary degree-two homology has dimension at most $N$ too, giving $|\operatorname{sign}W_M|\le N$. Thus $|\rho_{\mathrm{sm}}(M,\phi)|\le2N$ independently of $G,\phi$. Model independence in [F6] identifies the signatures with the original geometric ones. No target-dependent choice of bordism or finite CW model of a TOP manifold enters this bound. [F6, step 5.2, step 6.1, algebra]

8.1 A compact manifold has finitely many components, since its open components form an open cover and compactness gives a finite subcover. Apply the constructions to each component and add their bounds $2N_i$. Disjoint sums give the stated invariant and constant $C_M=2\sum_iN_i$, with the empty manifold giving zero. All subgroup changes and arbitrary cardinalities are covered by [F6]'s identical coset matrix blocks; no countability or finite-image substitution was made. The only manifold bordisms constructed here were obtained by smooth transverse preimages in step 2.2. Hence the result proves smooth bounding-defect independence and uniformity, while making no inference for a nonsmooth TOP bound or for an analytic eta invariant. [A1, F6, step 5.1, step 5.2, step 6.1, step 7.1, step 7.2, algebra] ∎
