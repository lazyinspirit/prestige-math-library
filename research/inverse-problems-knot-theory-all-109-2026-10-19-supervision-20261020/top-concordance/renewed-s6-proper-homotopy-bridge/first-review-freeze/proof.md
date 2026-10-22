# S6 from an actual proper homotopy equivalence

New separate extension of the adopted smooth splitting input. Assume **Countable Choice**. This note does not reread, revise, or recertify the adopted S(q6/q7) proof. It supplies the new end data that let its adopted finite end operations start from a proper homotopy equivalence, rather than a proper TOP homeomorphism. No original theorem is declared closed here.

## Exact new input and output

Let Q be a connected smooth six-manifold, possibly with a prescribed smooth product side boundary. Let C be a compact connected smooth five-manifold of finite CW type, with Π=π_1(C)=Z^r for a finite r. Supply actual maps

\[
 f:Q\longrightarrow C\times\mathbb R,
 \qquad g:C\times\mathbb R\longrightarrow Q,
\]

and actual proper homotopies

\[
 H:1_Q\simeq gf,\qquad K:1_{C\times\mathbb R}\simeq fg.
\tag{1}
\]

“Proper homotopy” means that the homotopy map on the whole product with I is proper, not merely that each time slice is proper. Fix which end is positive. On a prescribed side collar identify ∂Q with ∂C×R; f and g restrict to that product identification and its inverse, and H,K are constant there. The given side height has uniformly compact sections and the same positive and negative end signs. In applications this includes the whole supplied collar, not just its boundary points. Assume the adopted algebraic inputs reduced K_0(ZΠ)=0 and Wh(Π)=0.

Then the adopted S6 finite end operations apply to Q and yield a compact smooth five-manifold F and a diffeomorphism

\[
 F\times\mathbb R\longrightarrow Q
\]

extending the prescribed side product and respecting the signed end marking. This makes no assertion that an arbitrary compact core is fixed pointwise. The new work below is to derive the required inward finite domination, stable end group with actual witnesses, and their side compatibility from (1).

## Adopted operations used as contracts

The marked-torus owner supplied the following already adopted finite interfaces. They are consumed as contracts; their proof bodies are not consulted here.

1. From inward finite domination and a stable finitely presented end group Π identified with π_1(Q), construct clean 1-neighborhoods with both frontier-to-neighborhood and neighborhood-to-Q fundamental-group isomorphisms. The operation uses nested regular levels, finite frontier-connecting arcs, finite 1-handle trades, finite normally generating kernel loops and their actual disk nullhomotopies in a larger end. It resolves innermost frontier intersections before trading the disks. In dimension six the dual indices are at least four, so the required other fundamental groups are retained. Its support avoids a prescribed side product collar.
2. For a compact smooth triad with both frontier fundamental-group isomorphisms and a fixed side collar, simplify its handles to indices 2 through q-2. Prescribed framed disk realization and trading are available in dimension six for disk dimensions **2 and 3**. The top index q-2=4 is used only through the separately adopted adapted-free-basis/opposite-frontier operation; this note does not infer a generic four-disk realization theorem.
3. Starting from those 1-neighborhoods and the supplied finite domination, the finite end improvements reach 3-neighborhoods in dimension six. Their top projective obstruction is removed using reduced K_0(ZΠ)=0; the adopted stable basis and Whitney-complement operations then give acyclic compact slabs. This contract includes the projective finiteness step from finite domination. It does not identify a finitely dominated space with a finite CW complex without removing its obstruction.
4. For an acyclic compact slab with both frontier fundamental-group isomorphisms, the adopted relative dual-chain operation proves both frontier homotopy equivalences. Wh(Π)=0 gives its relative smooth product. A locally finite concatenation of these products is a smooth product on the corresponding end, with the prescribed side product unchanged.

The previous TOP-product hypothesis was one way to obtain the end data needed at the start of operation 1. The following argument obtains those same data from (1).

## 1. Cofinal ends and precise control statements

Proper homotopy equivalences identify the ends: applying f and g to complements of compact sets and using the proper homotopies gives inverse maps on their inverse systems of components. Thus Q has precisely two ends. With the fixed marking, f and g preserve the positive end and the negative end. In this argument an “end neighborhood” contains the entire sufficiently far indicated end and excludes the other end and a sufficiently large compact core.

Choose cofinal clean connected positive end neighborhoods U_i with compact frontiers and U_{i+1} contained in the interior of U_i. They can be taken as connected far-end components beyond regular levels of a smooth proper exhaustion, with any finitely many compact components discarded. Connect any frontier components by finitely many arcs in a compact collar slab and take a regular neighborhood if a connected frontier is needed. These preliminary choices do not assert that the frontier fundamental groups are already correct. On the side use the given product levels. Exhaustion levels and connecting arcs can be chosen outside its fixed product collar.

The properness hypotheses give the following **actual** tail restrictions. For each i choose a real b_i and a deeper neighborhood V_i⊂int(U_i) so that

\[
 g(C\times[b_i,\infty))\subset U_i,\quad
 f(V_i)\subset C\times(b_i,\infty),\quad
 H(V_i\times I)\subset U_i.
\tag{2}
\]

For example, failure of the last restriction along points escaping the positive end would put points escaping every compact subset in the preimage under the proper map H of the closed forbidden part of a fixed larger compact exhaustion stage. First separate the two ends by a compact set; properness excludes the compact obstruction, and end preservation excludes escape into the wrong end. The other restrictions follow identically. More directly, the positive-end tail of a proper end-preserving map or proper homotopy eventually lies in any prescribed positive-end neighborhood.

Choose buffered versions of (2) so that the relevant K-homotopies on sufficiently high sections also remain in the desired product tail. Each choice is a finite compact-set/tail containment test at that stage; after it holds it remains valid at all greater heights or deeper tails. The chosen sections

\[
 \sigma_i:C\to U_i,\qquad \sigma_i(c)=g(c,b_i)
\tag{3}
\]

are compact maps. Their being maps, rather than embedded cross-sections, is sufficient for everything before the adopted end operations construct actual frontiers.

These estimates are end control: each displayed homotopy stays in its prescribed buffered end. A contraction of an entire tail to a compact section is not claimed to have uniformly small metric tracks or to be proper at its final time. We do not infer an ε-small homotopy from abstract properness.

The negative end has the same construction with reversed height and disjoint buffered neighborhoods. The two families can therefore be operated on without interacting.

## 2. A finite domination of every clean end neighborhood

Let U be any one of these clean end neighborhoods. Choose b and a smaller clean V inside U satisfying (2). First use H to homotope the inclusion V→U to gf|V. Then use the vertical product homotopy

\[
 (c,t)\longmapsto(c,(1-u)t+ub),\qquad t\ge b,
\]

and apply g. Its whole image lies in U by (2). This gives an explicit homotopy in U from the inclusion to

\[
 V\xrightarrow{\operatorname{pr}_C f} C
 \xrightarrow{\sigma} U.
\tag{4}
\]

At the final time the image is in the compact set σ(C). This is more than an assertion about an end pro-group; it is an actual end-staying homotopy supplied by (1).

The inclusion V∪∂_fU→U is a cofibration: V is a closed clean codimension-zero submanifold separated from the compact frontier ∂_fU, and both have compatible collars. Extend the displayed homotopy over U by the homotopy extension property, prescribing the identity on ∂_fU. The remaining portion U minus int(V) is compact. Its image at the final time is therefore compact too. The final map U→U has compact image, contained in σ(C) together with the image of this compact slab.

Enclose that image and ∂_fU in a compact finite smooth handlebody P⊂U, taking its boundary/frontier collars compatibly. A locally finite smooth triangulation, or a finite relative Morse construction on a compact regular neighborhood, gives P finite CW type. If d:U→P denotes the final map with its restricted codomain and a:P→U the inclusion, then

\[
 ad\simeq1_U\quad\text{relative to }\partial_fU.
\tag{5}
\]

Thus **U itself** is finitely dominated, with actual maps and homotopy, relative to its compact frontier. We have not merely factored one smaller inclusion through a finite complex, nor asserted that U already has finite CW type.

On the prescribed side collar, (4) has a particularly controlled form: its first part H is the identity, and its second part is the standard height contraction to b with the side base point fixed. Extend this prescription across the bounded side interval between ∂_fU and V by a cutoff in the height variable, equal to the identity near ∂_fU and equal to that contraction on V's side tail. Prescribe it during the same homotopy extension. A union of compatible neat side/frontier collars is again a cofibration. At the final time the side image lies in a compact side interval. Choose P with that prescribed compact side portion. This is finite domination of the side pair with exactly the given product-height homotopy; it makes no demand to fix the entire noncompact side tail while contracting that tail into a compact set. The subsequent adopted handle operations still fix the actual side product pointwise.

## 3. Stable end Π with explicit stabilized-image witnesses

For a sufficiently deep U_j⊂U_i, (4) gives a homotopy

\[
 U_j\hookrightarrow U_i\simeq
 \sigma_i\operatorname{pr}_C f|_{U_j}
 \quad\text{inside }U_i.
\tag{6}
\]

Write r_j=pr_C f|U_j. The supplied K-homotopy, followed by projection to C, gives

\[
 r_i\sigma_i\simeq1_C.
\tag{7}
\]

For all deeper sections σ_j contained in U_j, the vertical path g(c,t), from b_i to b_j, is an actual homotopy in U_i from σ_i to the inclusion of σ_j. Use these same paths as basing paths. Equations (6) and (7) therefore show, at the level of based groups, that

\[
 \operatorname{im}\bigl(\pi_1U_j\to\pi_1U_i\bigr)
 =\sigma_{i*}\Pi
\tag{8}
\]

for every sufficiently large j. The containment from left to right follows from (6). For the converse, choose a still deeper section σ_j(C)⊂U_j and use its vertical homotopy to σ_i; (7) identifies its full group with Π. The subgroup σ_{i*}Π is isomorphic to Π because r_{i*}σ_{i*}=1. The bonding maps between these stabilized images are the identity on Π under the identifications r_i. The based homotopies in (1) resolve any inner-conjugacy choices; alternatively the same calculation is literal in the fundamental groupoid with these specified paths.

This proves stability with witnesses, rather than silently replacing a pro-isomorphism to a constant system by isomorphisms for every arbitrary original frontier. Moreover π_1(Q)=Π via f, and the stabilized subgroup in (8) maps isomorphically to that global group. In particular there is no issue of identifying the two ends with different quotients of π_1(Q).

## 4. Finiteness and actual kernel nullhomotopies for the first end operations

Finite domination (5) supplies finite presentations of π_1(U_i). One explicit algebraic reason is as follows. Give the compact dominator P a finite presentation G. The domination maps make π_1(U_i) a retract of G, represented by an idempotent endomorphism e of G. If x_1,...,x_m generate G and e(x_l) is represented by the word w_l, then adding the finitely many relations x_l=w_l to G presents im(e), hence π_1(U_i). This uses actual finite domination; arbitrary open-manifold fundamental groups would not suffice.

The maps r_i and σ_i give split surjections π_1(U_i)→Π with a finite normally generating kernel. Indeed for finitely many generators y_l of π_1(U_i), the elements

\[
 y_l\bigl(\sigma_{i*}r_{i*}(y_l)\bigr)^{-1}
\tag{9}
\]

normally generate that kernel: after imposing them every generator belongs to the section subgroup, and r_i identifies that subgroup with Π. No finiteness assertion about an unexamined kernel is being assumed.

The same construction provides **actual nullhomotopies in a specified larger end** for the kernel loops of a deeper U_j. Take their annuli given by (6). Their r_j-images represent the trivial element of Π, so choose finite disk nullhomotopies in the fixed finite complex C, using its finite presentation. Compose those disks with σ_i and join the displayed annuli. The resulting finite collection of disks lies in U_i by (2). It is precisely the buffered kernel-disk input required by the adopted initial 1-neighborhood contract. The adopted operation, rather than an unsupported general-position assertion, resolves their frontier intersections and realizes the corresponding handle trades. This note does not claim that the disks initially lie in a compact slab outside U_j.

Finite domination also supplies the homological/projective finiteness input of the adopted improvements. Its finiteness obstruction need not be zero merely because a finite dominator exists. The separate hypothesis reduced K_0(ZΠ)=0 is used exactly when the adopted operation removes that obstruction.

All finitely many loops, annuli, and disks at a given stage have their actual supports in one chosen larger end. Before the next stage choose a deeper clean neighborhood beyond those supports. This makes the countable collection of compact handle slabs locally finite. Every loop and disk can be kept off the supplied side collar by the adopted relative operation; the nullhomotopies and finite dominations above already match its fixed side-product data.

## 5. Assemble only the adopted finite S6 operations

Apply operation 1 with the finite dominations, the stable images (8), the finite kernel lists (9), and the actual buffered nullhomotopies just constructed. It gives cofinal clean 1-neighborhoods with the required frontier and global Π-isomorphisms, respecting the prescribed side. Apply operations 2 and 3 to their nested compact slabs. In dimension six the generic prescribed-disk range is 2 and 3; use the adopted special top operation only after its adapted basis and opposite-frontier hypotheses have been prepared. reduced K_0(ZΠ)=0 removes the resulting top projective obstruction.

The resulting cofinal acyclic slabs have both frontier Π-isomorphisms. Operation 4 first obtains both frontier homotopy equivalences, then uses Wh(Π)=0 to turn each slab into a smooth product relative to its side collar. Concatenate their products locally finitely to collar each end.

There is one further input to the middle slab that must be proved, not inferred merely from the end fundamental groups. Let N be either resulting collared end. Choose a deeper product tail V⊂N so that (6) holds with U_i=N. Its inclusion u:V→N is a homotopy equivalence because N is now a product end. Equation (6) says σ r_N u≈u inside N, while (7) says r_N σ≈1_C. Composing the former with a homotopy inverse of u gives σ r_N≈1_N. Thus r_N:N→C is a homotopy equivalence. Since pr_C f:Q→C is also a homotopy equivalence, two-out-of-three shows that N→Q is a homotopy equivalence, in all homotopy dimensions. The same conclusion holds for its compact frontier M→Q.

Let D be the compact slab between one such frontier at each end. Collapsing the two product tails to their frontiers gives a deformation retraction Q→D. Consequently both M_-→D and M_+→D are homotopy equivalences, so this middle slab is an h-cobordism, not just a π_1-correct cobordism. Its Wh obstruction vanishes and operation 4 gives its relative smooth product. Gluing that product to the two end products yields F×R→Q.

The gluing uses the given common side product throughout. Its height orientation agrees with the chosen positive and negative ends. No new free choice of independent side identifications is made at the two ends, and no compact-core pointwise fixing is asserted.

This is exactly the S6 result needed here. It is not a new general circle-fibering theorem F6: the input is the particular proper homotopy equivalence with its actual side-compatible homotopies, and the conclusion is obtained by the already adopted finite end operations.

## 6. Bind the actual cyclic-cover data supplied by the stable owner

After the first adopted S7 split and its marked furling, the stable owner supplies a compact smooth W^6 and a homotopy equivalence

\[
 q:W^6\to B^k\times T^{6-k}
\]

with inverse and based homotopies relative to the prescribed side collar. The remaining normal-circle class is q^* of its marked target class. Lift these actual maps and homotopies to the corresponding connected cyclic covers, using the supplied base point and compatible endpoints. The target cover is

\[
 C\times\mathbb R,
 \qquad C=B^k\times T^{5-k},\qquad \Pi=\mathbb Z^{5-k}.
\]

The lifted maps and homotopies are deck equivariant. The compact base manifolds and compact homotopy parameter give bounded height displacement on a compact fundamental strip, and equivariance propagates the bound to every translate. Consequently the maps and the whole homotopy maps are proper. The side products are exact, and both end signs are fixed. These are precisely f,g,H,K in (1). A chosen lift whose composition has the identity endpoint has no residual deck translation; this endpoint/basing compatibility is part of the supplied data, not inferred from an arbitrary unbased homotopy.

The transported height pr_R f is proper and equals the prescribed height on the side. Its particular numerical level sets need not already be smooth or π_1-correct; §§1–5 construct the required clean neighborhoods instead. The free abelian Π hypotheses for the adopted K_0 and Whitehead inputs now have the stated rank. No assertion about a codimension-two exterior group is used in this S6 bridge.

## Choice and status

The maps and homotopies are input. The end neighborhoods form two countable cofinal sequences; all operation lists at a fixed stage are finite. CC suffices for the countable selections of admissible levels, finite templates, presentations, and representative nullhomotopies, as in the adopted relative operation contract. Where the needed tail restrictions are encoded by integer bounds, the least sufficiently large integer can be used. No full AC or arbitrary-index selection is introduced.

New research authoring only. The extension awaits independent review and root adoption. No old S proof, accepted algebra proof, canonical item, map, or native state has been checked or changed.
