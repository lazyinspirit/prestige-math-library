# Multicolored coupon evaluation and the actual Ω band slide

Scientific proof proposal. No canonical edits. This closes the two remaining ribbon-algebra obligations without substituting the unit-channel meridian projector for a slide. The geometric source is Turaev I §§3.1–3.5 and4.9; the semisimple cut/coend source is Virelizier, *Kirby elements and quantum invariants*, arXiv:math/0312337v2, §§1.5–1.6,2.1, Theorem2.5 proof, and §§3.1–3.2. The steps below supply explicit composites where those sources use pictures or leave algebraic translation implicit.

## 1. Exact extension of the published evaluator

The actual published `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` states a single-generator-X theorem without coupons. The actual published generator-presentation lemma likewise has a single strand type and its dual. Their proofs have already established the full boundary-relative generic movie for framed cores, all orientation variants, cups/caps, crossing passages and full framing rotations. We consume those proved local geometric movie models. Colors remain constant on each connected band; hence labeling the finitely many branches in each local movie does not add an event or alter its local normal form. Every equation in the published evaluator's proof was derived with arbitrary categorical V,W before specializing V=W=X (in particular its bent-crossing identity). We now state and verify the additional typed equations and coupon movie completeness.

Let a signed color list A=(Y_1^{ε_1},…,Y_p^{ε_p}) represent the object |A|=⊗_sY_s^{ε_s}, with Y^-=Y*. An elementary coupon f:A→B carries an arbitrary actual morphism f:|A|→|B|. Assign crossings c or its inverse, full twists θ or θ^{-1}, left cups b and caps e, opposite cups b^R and caps r as in the repaired published evaluator, and assign each coupon f precisely its morphism. The value of a finite sliced diagram is their categorical composite/tensor product.

For completeness, the strand-only equations hold for arbitrary colors: Yang–Baxter is the naturality/hexagon expansion on U⊗V⊗W; inverse crossings and twists are their defining inverses; all four snakes hold for each dual pair; the two-sided bent-crossing relation is the arbitrary-V,W composite explicitly proved in the published evaluator step2.2; and the twist-square relation is its step3.1 with an arbitrary single V. The opposite orientation generators have the same right-dual formulas, applied separately to each color. Thus all the source's relations I(3.2.a)–(3.2.h) and redundant orientation formulas are verified with their actual types, not inferred by setting unequal objects equal.

For a coupon f:A→B and another signed object Z the two coupon/strand moves are exactly

c_{|B|,Z}(f⊗1_Z)=(1_Z⊗f)c_{|A|,Z},

c_{Z,|B|}(1_Z⊗f)=(f⊗1_Z)c_{Z,|A|}.

Their inverse-crossing versions follow by multiplying by the inverses. Expand c against a tensor list by the hexagons: this writes each side as the actual finite sequence of single-band crossings that moves Z over or under the whole coupon. This handles signed upward bands too, by replacing their tensor object with the specified dual and using the already proved bent-crossing formulas. There is no unnamed 'standard coupon slide'.

The complete coupon rotation equation is

θ_{|B|} f θ_{|A|}^{−1}=f.

It is naturality of θ. Repeated balancing writes θ_{|A|} as the full twist of all its bands, including individual θ factors and every pairwise crossing. Explicitly Θ_{A⊗Y}=c_{Y,A}c_{A,Y}(Θ_A⊗θ_Y), with Θ_empty=1; induction gives Θ_A=θ_{|A|}. Thus the displayed equation is precisely the source's full output-bunch twist/input-bunch inverse-twist relation I Figure3.2, with all factors accounted for.

Coupon composition/tensor laws are actual equalities gf and f⊗g in the category. If a coupon is bent in a chosen slicing, its color is the uniquely typed mate. For example, for f:A⊗Y→B, its left mate is f^flat=(f⊗1_{Y*})(1_A⊗b_Y):A→B⊗Y*, with inverse f=(1_B⊗e_Y)(f^flat⊗1_Y). Substitution reduces both composites by a snake. The other bends use b^R,r and their snakes; iterating gives every signed-word orientation and double-dual comparison j. Naturality j_Bf=f**j_A, already part of the pivotal supplier, checks two successive full dualizations. Thus changing the slicing convention at a coupon cannot introduce an unidentified mate or scalar.

## 2. Coupon movie completeness, beyond the published strand theorem

Take an isotopy of a finite ribbon graph relative to its external collars. Choose disjoint small solid rectangular neighborhoods of the coupons and transport them along their tracks; compactness permits uniform smaller neighborhoods on finitely many time intervals. By isotopy extension using normal-coordinate cutoffs, changing the motion of these finitely many rectangles through a homotopy can be extended to a motion of the incident bands. One can see this directly: prescribe the change of velocity on the rectangle, multiply it by a cutoff supported in its disjoint moving neighborhood, and integrate the resulting smooth vector field; finite time subdivision keeps supports disjoint. This fixes the external collars.

Each coupon's rotational frame is a loop in SO(3), since its initial/final rectangle has the same preferred side and based edges. Every such loop is homotopic relative endpoints to a loop of planar rotations. Here is the precise elementary fact: unit quaternions form S³ and act on imaginary quaternions R³ by qvq^{-1}; the kernel is {±1}. Local inversion gives a two-sheeted covering S³→SO(3). S³ is simply connected: a compact smooth loop misses a point after a small perturbation, and stereographic projection contracts it in R³. Therefore loops in SO(3) are classified by whether their quaternion lift ends at +1 or−1. A planar2π rotation has lift from+1 to−1, so planar rotations represent both classes. Homotope each coupon frame loop accordingly and extend by the cutoff construction above.

It now suffices to consider motions keeping coupons parallel to the projection plane and their based edges horizontal, together with finitely many planar±2π coupon rotations. The latter are exactly the rotation relation of §1, preceded/followed by ordinary level motions. To check the former's complete movie, shrink each coupon inside its protected rectangle and apply the published relative generic movie construction to its incident core arcs, keeping them fixed in the small collar of each coupon. Its independent jet perturbations have cutoffs vanishing in those collars. Away from coupons the complete strand movie list is exactly the already proved published list. At a protected coupon neighborhood the only new projection event is a band crossing the projected coupon rectangle, from one side to the other while remaining above or below it in three-space. Reading that event in horizontal slices is exactly one of the two naturality equations of §1, with its tensor-list hexagon expansion. A band cannot cross a based edge in three-space because the graph is embedded and its coupon attachments remain fixed. Tangencies of a band to the rectangle boundary, simultaneous coupon passages or double events are removed by the same independent finite-jet perturbation on the moving rectangles' centers and external band coordinates; each adds an extra scalar equation and hence does not occur in a generic one-parameter movie.

If projected coupon rectangles cross each other, separate the event by first shrinking one rectangle and moving its incident parallel bands past the other. The resulting finite sequence consists of the strand/coupon passages already listed, followed by the two coupons' disjoint level exchange. Algebraically it is c_{B,D}(f⊗g)=(g⊗f)c_{A,C}, obtained by applying the two naturality equations successively. Disjoint level exchanges are interchange. This includes coupons of arbitrary valence, including zero inputs or outputs. Cup/extremum passage near a coupon is first separated from the rectangle by shrinking its protected neighborhood; the remainder is an existing cup/cap passage and then one strand/coupon passage. Thus no additional boundary/extremum coupon move is suppressed.

There are finitely many events by the same compactness/transversality argument used in the actual published presentation proof, now on a finite graph with these protected rectangle collars. Every event preserves the assigned composite by §1. Consequently the value is independent of the sliced diagram and is invariant under every boundary-relative isotopy of the multicolored coupon ribbon graph. It preserves composition, tensor product, the empty diagram, and assigned coupon morphisms by its definition. Uniqueness follows because each diagram slices into precisely these generators.

This is the required full multicolored arbitrary-coupon evaluator. It does not need every object to be a tensor power or retract of one generator; all colors and all coupon morphisms were covered directly. Countable choice remains through the published generic-presentation supplier; all extra constructions on each graph are finite. A strict-model equivalence transports the result back exactly as in the published evaluator's final step.

## 3. Finite coend with all maps defined explicitly

Let B=⊕_{i∈I}i*⊗i, and let ι_i be its summand inclusions. For any object X choose an actual semisimple decomposition with e_{i,a}:i→X, p^{i,a}:X→i, p^{i,a}e_{j,b}=δijδab and Σe p=1_X. Define

ι_X=Σ_{i,a}ι_i(e_{i,a}*⊗p^{i,a}):X*⊗X→B.

Changing bases on a multiplicity space multiplies the e's and p's by inverse matrices, so the sum is unchanged. For f:X→Y write its simple block matrices p_Y f e_X; expanding both sides proves

ι_Y(1_{Y*}⊗f)=ι_X(f*⊗1_X):Y*⊗X→B.

This is the dinaturality identity, explicitly proved by the finite direct-sum resolution. Conversely, if t_X:X*⊗X→Z obey this identity, set t:B→Z by its components tι_i=t_i. Inserting the resolution on both X legs and using dinaturality shows t_X=Σ_{i,a}t_i(e_{i,a}*⊗p^{i,a})=tι_X. Uniqueness follows from the summand inclusions. This proves the needed coend universal property locally, without an abstract existence theorem or a Fubini citation.

Define maps Δ:B→B⊗B, ε:B→1, and m:B⊗B→B by their following component words:

Δι_X=(ι_X⊗ι_X)(1_{X*}⊗b_X⊗1_X),

ει_X=e_X,

m(ι_X⊗ι_Y)=ι_{Y⊗X}(1_{X*}⊗c_{X,Y*⊗Y}).

The tensor-dual order is (Y⊗X)*=X*⊗Y*, using canonical tensor duals and their stated comparison isomorphisms otherwise. The universal property makes the definitions independent of X presentations: apply dinaturality to each f, naturality to each crossing, and the dual-mate equality to each cup. Equivalently define the maps on the finitely many simple summands by these words, then the same identities prove the displayed formula for arbitrary X,Y. This verifies well-definedness without invoking all Hopf algebra axioms, which are not needed below.

Substitution of the first two words and either snake proves

(1_B⊗ε)Δ=1_B=(ε⊗1_B)Δ.

For example (1⊗ε)Δι_X=(ι_X⊗e_X)(1_{X*}⊗b_X⊗1_X)=ι_X, by the X snake. Put

Λ=Σ_i d_i ι_i b_i^R:1→B.

By §2 its insertion at a surgery-component cut is exactly the formal coloring Ω=Σ_i d_i i with that component's orientation. Reversing the component orientation replaces i by i*, including the canonical right/left dual comparisons; naturality of j, ribbon duality and d_i=d_i* show that Λ gives the same closed graph. This is the usual orientation independence, now a reindexing of an actual finite sum of evaluated graphs.

## 4. The missing full-channel fusion/coupon calculation

We prove the **complete morphism** identity

m(1_B⊗Λ)=Λε:B→B.

Fix simple j,k. Decompose i⊗j over k, using e_{k,a}:k→i⊗j and p^{k,a}:i⊗j→k with p^{k,b}e_{k,a}=δab1_k. For fixed k and varying i define the bent maps

F_{i,a}=(p^{k,a}⊗1_{j*})(1_i⊗b_j):i→k⊗j*,

G_{i,a}=(1_i⊗r_j)(e_{k,a}⊗1_{j*}):k⊗j*→i.

These are bijective adjunction/bending correspondences on the Hom spaces: their inverses insert e_j or b_j^R and retract the corresponding snake. Therefore the F's form a basis of Hom(i,k⊗j*) and the G's a basis of Hom(k⊗j*,i). More explicitly, G_{i,b}F_{i,a}=ptr_j(e_{k,b}p^{k,a}), with ptr_j exactly the composite defined in proposal.md. Closing in stages gives tr_i ptr_j=tr_{i⊗j}; cyclicity then gives the following equality, so no picture-only trace rearrangement is used:

tr_i(G_{i,b}F_{i,a})=tr_k(p^{k,a}e_{k,b})=δab d_k.

No dimension positivity is used. Since i is simple, division by its nonzero dimension gives G_{i,b}F_{i,a}=δab(d_k/d_i)1_i. For different i the composition vanishes by Schur's lemma. The finite direct-sum resolution on k⊗j* therefore reads

Σ_{i,a} d_i F_{i,a}G_{i,a}=d_k1_{k⊗j*}.                 (R)

This is the exact trace-dual basis calculation missing from a meridian-only proof.

Now define a literal rotation of any a∈End(k⊗j*) by

T_{kj}(a)=(1_{k*}⊗1_k⊗e_j)(1_{k*}⊗a⊗1_j)(b_k^R⊗1_{j*}⊗1_j):j*⊗j→k*⊗k.

In particular T_{kj}(1)=b_k^R e_j. Substituting F,G into this word gives

T_{kj}(F_{i,a}G_{i,a})=(e_{k,a}*⊗p^{k,a})(1_{j*}⊗b_i^R⊗1_j).                 (B)

Here are the exact cancellations behind (B). Expand F first: its b_j followed by the last e_j retracts the j* snake, leaving p^{k,a} on the two surviving i,j factors. For the G part use right-coevaluation dinaturality

(1_{k*}⊗e_{k,a})b_k^R=(e_{k,a}*⊗1_{i⊗j})b_{i⊗j}^R,

and expand the tensor right cup b_{i⊗j}^R=(1_{j*}⊗b_i^R⊗1_j)b_j^R. The r_j in G contracts the outer b_j^R by the right snake. What remains is exactly e_{k,a}* on j*⊗i*, b_i^R on i*⊗i, and p^{k,a} on i⊗j, in the order on the right of (B). Right-coevaluation dinaturality itself follows by taking the dual of e and substituting its defining mate composite; the two snakes cancel. Thus (B) uses explicit composites/dualities, not an unoriented 'rotate the picture'.

Apply T to (R). This yields, on the entire object j*⊗j,

Σ_{i,a}d_i(e_{k,a}*⊗p^{k,a})(1_{j*}⊗b_i^R⊗1_j)=d_k b_k^R e_j.                 (C)

This is a morphism j*⊗j→k*⊗k, not merely a scalar trace equality. It includes every simple output k and every fusion multiplicity a.

Finally compute m(ι_j⊗Λ). Naturality of c at b_i^R gives c_{j,i*⊗i}(1_j⊗b_i^R)=b_i^R⊗1_j. Therefore the defining product word gives

m(ι_j⊗Λ)=Σ_i d_i ι_{i⊗j}(1_{j*}⊗b_i^R⊗1_j)

=Σ_{i,k,a}d_i ι_k(e_{k,a}*⊗p^{k,a})(1_{j*}⊗b_i^R⊗1_j)

=Σ_k d_k ι_k b_k^R e_j=Λe_j.

The middle equality is the explicit formula for ι_{i⊗j}; the next is (C). Since the ι_j are all summand inclusions of B, this proves m(1_B⊗Λ)=Λε as an actual categorical identity. No modular inverse or unit-channel meridian was used in this full-channel calculation.

## 5. Actual band slide as a typed Γ word

Define Γ=(1_B⊗m)(Δ⊗1_B):B⊗B→B⊗B. Section4 and the counit snake give the short but now fully justified calculation

Γ(Λ⊗Λ)=(1_B⊗m)(ΔΛ⊗Λ)
=(1_B⊗Λε)ΔΛ
=[(1_B⊗ε)ΔΛ]⊗Λ
=Λ⊗Λ.                                                (S)

To identify this with the actual geometric Ω slide, cut the two participating surgery components at small disjoint intervals next to the attaching band. Arrange the two cuts adjacently below the rest of the diagram. Let T_{X,Y}:X*⊗X⊗Y*⊗Y⊗U→V be the evaluated exterior, retaining all its other input/output strands and arbitrary coupons. It is dinatural in X,Y: a morphism moved from one endpoint of a cut to its other endpoint passes the successive crossings by §1 naturality and the successive bends by its explicitly inverse mate equations. There is no coupon on a surgery component itself. Thus no passage through an arbitrary morphism of unequal domain is assumed. Define Φ:B⊗B⊗U→V by its simple-summand restrictions Φ(ι_i⊗ι_j⊗1_U)=T_{i,j}. Inserting the finite decompositions in §3 and applying the just-proved dinaturality shows T_{X,Y}=Φ(ι_X⊗ι_Y⊗1_U) for every X,Y. This is the required exterior factorization, proved by a finite direct-sum calculation rather than an abstract Fubini assertion. All other strands and coupons remain in this same Φ. A component cut presents the pair X*⊗X. For simple cut colors X,Y the **complete word** introduced by a positive band sum is

(ι_X⊗ι_{Y⊗X})
(1_{X*}⊗1_X⊗1_{X*}⊗c_{X,Y*⊗Y})
(1_{X*}⊗b_X⊗1_X⊗1_{Y*}⊗1_Y).

Its domain is X*⊗X⊗Y*⊗Y; after the cup the factors are X*⊗X⊗X*⊗X⊗Y*⊗Y; after the crossing the last four are X*⊗Y*⊗Y⊗X, which are the correctly ordered (Y⊗X)*⊗(Y⊗X). By the definitions in §3 this word is exactly Γ(ι_X⊗ι_Y).

Here is the geometric reading fixing that word, its framing and the band convention. Isotope the rectangular attaching band into the strip joining the two cut neighborhoods, retaining its given normal framing. The slid strand turns around one endpoint of that strip, producing the adjacent cup b_X and its X* return strand. Its new parallel segment follows the stationary strand in the prescribed framing; at the other endpoint it rejoins through the crossing of X with the ordered pair Y*,Y, namely c_{X,Y*⊗Y} expanded by the hexagon. The parallel pair is read as the single cable color Y⊗X and its reversed dual cable X*⊗Y*. Following the rectangle from one end to the other yields exactly the ordered factors written above. No full twist is discarded: the parallel follows the original framing, so any original twists lie in the unchanged exterior; a twist in the attaching rectangle itself is part of the framed band and is transported into the same cable crossing word on both readings. This is the finite elementary ribbon word corresponding to Virelizier Figure7, with its algebraic expansion supplied explicitly here.

A knotted or spatially winding attaching band causes no change to the endpoint-word proof: its own regular neighborhood with its two attaching intervals is a product ball carrying the rectangle convention just specified. The new parallel also follows the **entire stationary component outside that ball**. This is accounted for by the exterior's second color being Y⊗X: cabling an exterior crossing or twist is exactly its tensor-product hexagon/balancing expansion, so the original Φ applied to ι_{Y⊗X} reads both the old Y strand and the new parallel X strand all the way around that component. Thus we do not assert that a global band sum is an isotopy supported in the little attaching-band ball. The complete new evaluation is Φ(Γ(Λ⊗Λ)⊗1_U), while the old is Φ(Λ⊗Λ⊗1_U). Equation(S) equates them. The exterior may contain arbitrary crossings and coupons, already part of the same Φ, and may be tensored/composed with any further graph. Cutting elsewhere changes only its presentation by the proved coupon/tangle identities and ι dinaturality. This proves equality for the **entire arbitrary-coupon colored graph before and after the band slide**, with both participating surgery colors Ω and all other graph labels/morphisms fixed.

The reverse band slide gives the same equality read backwards. Choosing the other participating component or the opposite orientation is reduced to this local convention by relabeling the cuts and reversing the relevant Ω-component orientations, which is allowed by §3's explicit i↦i* reindexing. Moving the cut pairs past each other uses naturality c_{B,B}(Λ⊗Λ)=Λ⊗Λ, since c_{1,1}=1. Hence no oriented band-slide case is omitted.

The slide changes neither the number m of surgery components nor the signature: the new linking matrix is P^tBP where P is the elementary integral matrix replacing the slid attaching vector by its sum with the stationary one. This congruence is invertible and preserves inertia even for singular B. Therefore the full normalized closed graph evaluation D^{-m-1}κ^{-σ(B)}F is unchanged, with no extra D, d_i or κ factor. The weight n is unchanged by a presentation move; the corrected κ^{n+a} boundary map therefore has the same value as well, provided the underlying capped bordism/reference relation is fixed.

## 6. Source scope and remaining separate obligations

Actual Virelizier full-text proofs read: §§1.5–1.6 coend structural words; §2.1 special-tangle factorization; complete Theorem2.5 proof of handle-slide invariance and its Figures6–7; Lemma3.1 full proof; Lemma3.2 definitions/proof context; complete Theorem3.4 proof including its bent F,G bases and weighted resolution equations3.7–3.8. The source's final Figure10 reduction is not adopted as a picture-only proof: §§3–5 above provide the complete needed full-channel composite calculation. Its Hopf-algebra/representation sections, nonsemisimple generalizations and classification of all Kirby elements were not read or used.

Actual Turaev full-text proofs read: complete I§3.1 generation, §§3.2–3.4 relation statements, entire §3.5 categorical verification through the last twist-naturality calculation, and entire §4.9 coupon-isotopy completeness argument; the already repaired published strand-only proof supplies its generic core movie rather than a citation-only use of Reidemeister. The additional coupon movie in §2 and its SO(3) framing reduction are authored locally.

This proposal closes the multicolored coupon evaluation and actual full Ω band-slide/coupon identity as local scientific claims, subject to root review. Relative three-bordism presentation/move **completeness** remains a separate topology theorem; no calculation here supplies that Cerf result. The signature bridge cycle2 repair is in signature-maslov.md and retains its separate pending root review status.
