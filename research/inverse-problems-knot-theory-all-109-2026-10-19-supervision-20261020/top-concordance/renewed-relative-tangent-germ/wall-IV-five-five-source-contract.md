# Wall [W13, IV5.5]: bounded primary/interface finding

Source and interface work only. No new normal-bordism or surgery engine was authored. No accepted proof body was opened. The low-j foundation remains held pending the bindings specified below.

## Exact reference and actual source

Wall's *Surgery on Compact Manifolds*, second edition, bibliography printed298/PDF310, identifies:

> [W13] Wall, C. T. C. “Differential Topology.” Notes, Liverpool University,1965, IV Theory of handle decompositions, VA Cobordism: Geometric Theory.

The actual public scan was ALREADY acquired in the marked-torus lane:

https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/wall.pdf

Durable file: `../renewed-marked-torus/sources/wall-handle-decompositions.pdf`, with extracted text beside it;207 PDF pages. No duplicate download or accepted-provider check was made. The actual PartIV title/preface is PDF88: *Differential Topology*, *Theory of handle decompositions*, based on Oxford1962 and Cambridge1964 lectures. Thus the scan's lecture provenance and the1965 bibliography label should not be mistaken for different theorems.

New actual reading: PartIV printed17–25/PDF109–117, plus the PartIV title/preface. Visually inspected printed22–24/PDF114–116 to resolve OCR losses in the hypotheses and the extra boundary-dimensional exception. This is the actual connectivity-to-handle-index proof, not a theorem-name inference from the later surgery book.

## The needed uncontrolled handle-index contract

Theorem5.1 starts with a compact smooth cobordism presented by an r-handle followed by finitely many (r+1)-handles, with π_r(W,M)=0. It replaces that r-handle by an (r+2)-handle. Corollaries5.1.1–5.1.3 allow a previously built piece V, repeat the operation on finitely many r-handles, and eliminate all handles of index at most r for an r-connected pair.

The non-simply-connected proof is given under Hypotheses5.3. Its incoming comparison includes

    π₁(∂₊V) → π₁(V) is an isomorphism.

The ordinary range is r≥2, n−r≥4; the other borderline range has extra outgoing π₁ data. Theorem5.5 states that5.1 and its corollaries hold when n≥r+4, and also when n=r+3 provided r≠1,2 and π₁(∂₊W)→π₁(W) is an isomorphism. The special r=2,n=5 case is explicitly excluded by the preceding discussion. These details cannot be dropped from a general consumer contract.

For the current minimal application one can restrict to r≥3 and n≥r+4 with actual incoming π₁ agreement. The regular-level attaching and belt spheres then have dimensions r and n−r−1, both at least three. No borderline Whitney disk argument is required. In Wall6.1 applied to a seven-dimensional normal problem, the normal bordism has dimension8 and k=r=3; its index-elimination part lies safely in this range. This statement concerns an ACTUAL finite smooth handle presentation. It is not a controlled-carrier theorem and does not produce normal-map data.

## What the proof actually constructs

Because the relative low groups vanish and the presentation has no lower cells, the universal-cover boundary map onto the relevant degree-r generator is surjective. Choose a finite Λ=Z[π₁] linear combination c of the (r+1)-handle generators with ∂c=e_r.

The proof then introduces a NEW standard geometrically cancelling pair of indices(r+1,r+2) in an outgoing boundary disc (Theorem4.5). Its new (r+1)-handle is slid over the old (r+1)-handles according to the finite coefficients in c. Theorem4.6 is proved on printed17–19 by an actual band/arc construction; the path may be taken in any specified homotopy class, so the slides realize the group coefficients as well as their signs. The new (r+1)-handle has attaching-belt coefficient1 against the old r-handle.

Lemma5.4, printed23–24, converts that coefficient into one geometric intersection: pair all other intersection points with equal group label and opposite signs; the resulting circles are nullhomotopic. In the restricted r≥3,n−r−1≥3 range the ordinary framed Whitney operation removes these pairs. The cancellation theorem then removes the old r-handle and this new (r+1)-handle. The introduced (r+2)-handle remains. Repetition eliminates the finitely many degree-r handles.

Crucially, this argument does NOT use “the old core is nullhomotopic” as a substitute for an upstairs framed trivial embedding. The newly introduced cancelling pair is geometrically standard from the start. Its band moves carry actual attaching framings. This is why it is a more precise source for the intended trading operation than an invocation of an unqualified null-core trade.

When used only to change the presentation of an already supplied smooth normal bordism, these operations change its handle description, not its physical normal map or stable bundle isomorphism. Their actual diffeomorphisms transport that already supplied data. They do not construct a missing normal-bundle extension B over a new surgery trace.

## Existing declared interfaces and a possible source-supported unit

Consulted ONLY declared Statements:

* `thm-creation-of-a-cancelling-handle-pair`: an actual standard framed complementary pair in a boundary disc under CC;
* `lem-handle-slides-preserve-the-relative-diffeomorphism-type`: actual band moves preserve the source, with supported diffeomorphism;
* `prop-elementary-matrix-operations-are-realized-by-handle-slides` and `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains`: the stated integer basis effects at their given ordered stages;
* `thm-high-dimensional-whitney-trick`: complementary embedded sheets of dimensions at least three, with the actual equal-label/nullhomotopy data;
* `thm-handle-cancellation`: an actual single geometric intersection, with later attaching data carried along.

The first/last and Whitney contracts fit the restricted range above. The existing integer chain/basis Statements should not be silently relabeled as arbitrary Λ-coefficient statements; the required finite labelled band calculation is instead explicitly present in the newly read Wall4.6 primary proof.

Thus one possible deliberately bounded unit is now fully source-supported: **uncontrolled finite elimination of degree-r handles for r≥3,n≥r+4, from a supplied actual index-ordered handle presentation with no handles below r and the stated incoming π₁/relative-connectivity data, by new-pair insertion, labelled slides, Whitney cancellation, and iteration.** Higher handles do not change π_r of the prefix through degree r+1. This report does not assert that the unit has been locally authored, independently reviewed, adopted, or given a new canonical identifier. It does identify a short actual primary proof with concrete matching hypotheses. It does not need Wh=0 or an h-cobordism assumption. It also does not remove the degrees0,1,2 needed before its r=3 application: the source treats those through earlier separate ranges and, at r=2, its complement fundamental-group argument. Those extra bindings have not been replaced by the all-sheet-dimensions-at-least-three Whitney Statement.

## Stop boundary: what is still not supplied to Wall6.1

The larger normal-bordism step needs more data before and after this unit.

1. It first makes the normal bordism map sufficiently connected RELATIVE TO ITS PRESCRIBED BOUNDARY. The retained below-middle proposition is stated for closed normal maps. It cannot automatically be applied to a triad while fixing incoming, outgoing and side data. Each trace needs the actual normal-bundle extension B; stable triviality of a sphere or a core nullhomotopy is not that extension. The full primary1.1–1.4 material is available in the acquired surgery book, but its relative-triad binding is not proved by the current accepted closed Statements. This report does not extend them.
2. After the separate connectivity-to-index eliminations, Wall6.1 uses a preferred stable kernel basis, stabilizes it to a free based module, REPRESENTS THAT BASIS BY HANDLES, and identifies the remaining region as an s-cobordism. That is not the accepted two-index h-cobordism theorem, whose input already is an h-cobordism. It still needs the actual based-kernel/relative handle realization from Wall's earlier machinery. This is the next unbound geometric consumer step; no further source expansion or engine construction was undertaken here.
3. Finite normal/bordism operations must retain the actual full protected germs. This source contract is uncontrolled; it gives no color itinerary, quantitative collar size, or automatic generic dimension14 fibering theorem. No scope was transferred from the adopted special seven-dimensional angular construction.

## Choice

The restricted handle-index unit uses a supplied finite presentation, finitely many group-ring coefficients, finitely many actual bands, and the retained CC geometric operations. It is a plausible bounded CC specialization; its local formal binding has not yet been adopted. The source itself does not announce a CC theorem. The complete D1 low-connectivity calculation still has the separate choice-scope gate and the actual Arf/fibering/normal-action dependencies recorded in `low-connectivity-primary-boundary.md`.

## Root-requested completion of the finite index-range source check

Additional primary reading, still no new proof authoring: PartIV definitions and product-side convention, PDF89–92/printed1–4, and printed13–16/PDF105–108 (low0-handle case and the actual geometric complementary-pair model). The scan explicitly permits side-boundary corners and writes the side of Q×I as ∂Q×I. It is not restricted to closed-ended cobordisms. This strengthens the earlier source matching; it does not change the accepted interface history.

Here is a precise **authorable contract**, rather than an assertion that it is already adopted:

> Let (Wⁿ;M₀,M₁,∂M₀×I) be a compact actual smooth cobordism with a supplied finite index-ordered handle presentation and genuine fixed incoming/side product collars. Let M₀ and W be connected, M₀ nonempty, and π₁(M₀)→π₁(W) an isomorphism. Suppose π_i(W,M₀)=0 through i=q. For the needed instances take n=14 or15 and q≤6. Then the presentation can be changed to have no handles of index≤q, by finite presentation modifications supported away from the incoming and side collars, without changing the physical manifold or its supplied normal data. Outgoing labels may be transported; no independent outgoing pointwise-fixing claim is part of this handle contract.

The whole needed index range is source-supported as follows.

* **r=0:** PartIV4.1, printed13, cancels the finite0-handles against1-handles using the connected graph of components and incoming component. No group-ring module interpretation of π₀ is needed.
* **r=1,2:** Use the ORIGINAL5.1 range n≥2r+3, not the borderline5.4 Whitney argument. Both14 and15 are safely in this range. A relative nullhomotopy of the old core gives the map F of an (r+1)-disk described in printed20. General position moves that disk off the finitely many r/(r+1) cores, allowing its boundary sphere to lie on the actual outgoing level. That sphere is nullhomotopic there. A one-parameter relative general-position argument makes a homotopy to a small standard sphere an isotopy: the double-point dimension is2r+1−(n−1)<0 and the rank-defect condition is also absent. Ambient isotopy extension then gives an ACTUAL spanning disk and a transported STANDARD framing for the NEW cancelling(r+1,r+2) pair. The new(r+1)-sphere meets the old r-belt once by the upper-hemisphere construction; cancellation leaves the new(r+2)-handle. This does not assert that an arbitrary old framed attaching sphere became trivial merely because its core was nullhomotopic.
* **3≤r≤q≤6:** Use5.5 with n≥r+4. The attaching sphere has dimension r≥3 and the old belt sphere has dimension n−r−1≥7 in the smallest needed n=14,r=6 case. The labelled Whitney argument is entirely in the ordinary both-codimensions-at-least-three range. The finite surjection ∂c=e_r, standard new pair, labelled slides, and cancellation described above apply.

The source inequalities more generally suggest the restricted range n≥max(7,q+4) for q≥3, but the proposed assignment need only claim the concrete14/15-dimensional cases. No low-dimensional or controlled enlargement is required.

### Why the partial-level π₁ hypothesis is earned, not assumed anew

At every degree-r stage the lower degrees have ALREADY been removed. Keep the base V=M₀×I, rather than treating an arbitrary new V as an unexplained input. The degree-r prefix through its(r+1)-handles has the same π_r relative to M₀ as the full W: all later handles have index≥r+2 and cannot change that relative group. Hence its relevant relative group vanishes by the supplied connectivity. The incoming boundary of V is M₀ and ∂₊V=M₀, so Wall5.3's initial π₁ comparison is literally the product comparison.

For r≥3, attach the degree-r handles to that collar. On its outgoing boundary this is surgery on spheres of dimension r−1≥2 and codimension n−r≥3. Removing their tubular neighborhoods does not change π₁, and the replacement disk/sphere pieces add no new fundamental generators. Van Kampen therefore identifies the new outgoing level's π₁ with π₁(M₀); adding the degree-(r+1) handles has the same property. Since π₁(M₀)→π₁(W) was supplied as an isomorphism, the group labels used in the Whitney step are the ACTUAL labels in the level, not merely labels after mapping into W. No fresh boundary π₁ assumption is hidden in this induction.

The r=1,2 stages use the preceding general-position construction instead of a group-ring Whitney reduction, so they do not need an unproved identification of a partially killed fundamental group. Once these degrees are removed, the argument for every later outgoing level is the codimension-at-least-three van Kampen calculation just stated. The extra n=r+3/outgoing-π₁ exception in5.5 is never used in these instances.

All source homotopies, arcs, isotopies and local cancellation supports may be kept off the physical side collars: the actual data are compact and interior, and the supplied product collars push their finite homotopies off the side before the relative perturbations. The supported diffeomorphisms retain the incoming base. Thus the requested fixed incoming/side contract is genuinely consistent with the source convention. It is not a theorem fixing every outgoing label.

### Interfaces still to bind before authoring that contract

The source now supports the complete finite index range for the proposed unit, but a local CC proof would still have to bind explicitly:

1. the supplied finite handle presentation and finite index ordering, with the fixed physical side collars;
2. finite relative parametric general position in the r=1,2 argument, plus ambient isotopy extension, with the stated dimension inequalities and end collars—not a full-AC generic transversality theorem renamed CC;
3. the finite Λ-labelled band calculation in Wall4.6, since the consulted canonical elementary-basis Statements themselves state integer effects;
4. the existing CC new-pair, ordinary high-dimensional Whitney, and cancellation operations at their literal geometric inputs;
5. transport of any ALREADY supplied actual normal map and bundle isomorphism through the same physical-W presentation changes. This is pullback/transport through the actual diffeomorphisms, not creation of an extension B across a new normal surgery trace.

This unit would remove the handle-index-elimination citation barrier in Wall6.1. It would NOT supply the earlier relative normal-map surgery that makes the bordism sufficiently connected, nor the subsequent based-kernel/basis-by-handles step. Those remain the next exact D1 bindings. No new proof, review pass, adoption, generic surgery theorem, or ACω certification is claimed here.
