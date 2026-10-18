# Comparing two arcs in a one-handle surgery replacement

2026-10-18. Local scientific proposal for root review. The input is the routed-strip replacement of `continuous-one-handle-surgery-movie.md` §2. No generic field or global Cerf theorem is assumed as a conclusion of this file.

## 1. Input and framing convention

Let h be one four-dimensional one-handle with feet in a connected compact oriented three-dimensional base N. Let B and B′ be two embedded replacement arcs joining its feet, with framed product tubes and the same parametrized germs at their endpoints. They avoid every other one-handle foot and the protected boundary collar. A finite system of framed two-handle attaching curves may traverse h any number of times, with either orientation. Apply the explicit cancellation/routing construction with either arc. Its links are

\[
R_B(L)\cup U\qquad\hbox{and}\qquad R_{B'}(L)\cup U.
\]

Here U may be chosen as the same small zero-framed circle in both diagrams: take its cross-section on the common endpoint germ. Its disk meets each routed strip once for each signed traversal of h. Its framing is the product disk framing. This convention follows by transporting the meridian along the product cancellation tube; it fixes the actual exterior marking.

Assume first that B and B′ have disjoint interiors outside their common endpoint germs. No restriction is placed on the homotopy class of their union. The two framed arc strips, with oppositely oriented common germs, join to a framed embedded ribbon annulus about a closed curve K that follows B′ and returns along a parallel of B. More precisely separate the strips by distinct normal coordinates, cut both just inside their common germs, and join the four short ends by the two planar rectangles in the endpoint balls. The core of the resulting annulus is K. Its annular normal is the integer framing used below. This choice records any difference in twisting of the two replacement arc framings; no independently chosen integer is substituted.

## 2. Addition, routing slides and the meridian correction

Push the K-annulus far enough in the normal coordinate to miss every old routed strip and U. Add a small disk-framed meridian V of K at the B′ branch near one endpoint fork, with its disk missing the old B-routed strips. This is an O3 insertion: before any subsequent slide its meridian disk meets K alone. Choose its radius much smaller than the separation of the ribbon strips. The solid-torus support of K can avoid all old link components.

For each traversal of h by an attaching strip, slide that component over a framed parallel of K, using the short band at the relevant endpoint fork. Choose the sign so that the parallel B segment of K cancels the old B segment of that strip. The two oppositely followed, adjacent B strips bound the product rectangle in the B-tube. Pushing their band sum across this rectangle leaves a B′ strip. Outside the B/B′ tubes and the two endpoint balls the old component is unchanged. For multiple traversals choose distinct normal positions, do the slides sequentially, and shrink every band. The same rectangle then applies separately at every traversal. The resulting old attaching curves are exactly R_{B′}(L), with their full framed strips. The integer framing of K was defined by those strips precisely so the cancellation of the B ribbons leaves the prescribed B′ ribbon. Both signs of traversal are handled by reversing the annular orientation and the band direction. There is no assertion that numerical framings remain unchanged during the slides.

After these slides V is not yet a clean O3 meridian: the new B′-routed strips pass through its cross-section. Leaving this issue out would invalidate the comparison. Slide V over the oppositely oriented zero-framed parallel of U, with the band lying in the endpoint fork. Let the result be V′. Its framing is zero: U and V initially have disjoint disk interiors in that fork convention and linking zero, so the band framing is 0+0−2lk(U,V)=0. Equivalently the band sum is the boundary of the explicit disk in the next paragraph. The slide does not change U or any other attaching component.

The disk and the fact that V′ meets K alone can be verified in a regular neighborhood of the three-edge fork. One edge is the common endpoint germ, and the other two are the separated B and B′ branches. Take a small ball containing only this fork and the parallel ribbon strips. The transverse disk on the common edge is the disk of U. The transverse disk on the B′ edge is the disk of V after the routing slides. Join their boundaries by a narrow strip on the boundary of the fork ball, with the opposite orientation on the common-edge disk. Cutting the fork neighborhood along the two cross-sections displays an ordinary ball with three disk faces: the B face, the B′ face and the common-edge face. This follows directly by thickening the three intervals of a tree; absorb its two terminal vertex balls into the interval tubes. The oriented boundary relation among these three faces says that the band sum of the B′ meridian and the negative common-edge meridian is the B meridian. In particular it bounds the third transverse disk after a product isotopy in this ball. This is an equality of the displayed framed disk faces, not just an equality of homology classes.

The old strips now use the common edge and the B′ edge, and therefore miss the B cross-section. K uses the B′ branch and the B branch with opposite orientations, and therefore crosses the B cross-section exactly once. Thus the displayed disk of V′ meets K once and every other attaching strip zero times. It also misses U after reducing the fork ball and using the distinct cross-sections. Its normal framing is its disk framing. Consequently K,V′ is again a clean O3 pair. Remove it. What remains is R_{B′}(L)∪U with the exact routed strip framings.

The comparison is therefore a finite sequence

\[
\text{O3 insertion},\quad
\text{one O2 per signed traversal},\quad
\text{one O2 on the new meridian},\quad
\text{O3 deletion},
\]

followed by the explicit product isotopies. It does not require K to be nullhomotopic in N.

## 3. General arcs and geometric supports

Two arbitrary replacement arcs can be put in the preceding disjoint position while retaining their common endpoint germs. Perturb the interior of B′ by finitely many local spatial translations. At a possible intersection with B, the evaluation map has source dimension two and the diagonal has codimension three; the same actual finite-dimensional parametric-transversality theorem used for curves gives a disjoint perturbation. It may also avoid the finitely many other foot balls by retaining its original support outside them. Choose the perturbation C¹-small, so it is still embedded and its framing is transported by its small tubular isotopy. The routed link changes by the corresponding framed isotopy, with the old U cross-section fixed. Intersections with old attaching strips need not be excluded during a motion of the auxiliary arc: the explicit transverse crossing calculation in the companion §3 inserts the necessary O2 moves. For the comparison itself the final arcs and their ribbon parallels are chosen disjoint from the finite old curve system before the O3 insertion; generic one-dimensional position in a three-manifold supplies this, followed by sufficiently small product tubes.

All the operations are supported in compact subsets of int(N), consisting of the two arc tubes, endpoint fork balls and the finite slide bands. The boundary collar is pointwise fixed. The maps on the outgoing surgered three-manifold are those of the actual slides and the boundary-relative O3 filling identity, with the displayed cancellation charts. The construction relates the two link outputs. The following trace comparison records its actual outgoing map as well; it does not claim that an arbitrary interior mapping class can be freely substituted.

### 3.1 Comparison of the outgoing maps

Work before cancelling h. Let γ_B=A′∪B in the four-dimensional one-handle stage, and let γ_K be a disjoint parallel of B′∪−B. Attach five-dimensional two-handles along these two framed circles. They give the two successive interior circle surgeries. The actual relative handle-slide lemma applies with n=5 and k=2. Slide the γ_B handle over γ_K along the short endpoint rectangle. The oppositely followed B arcs cancel across their product rectangle, so the new attaching circle is γ_{B′}=A′∪B′. Its rank-three framing is the one obtained from the annular ribbon framing and its extra collar-normal direction. The γ_K handle remains. This is a five-dimensional handle slide supported in the interior of the four-dimensional stage; its entire external three-boundary times the movie interval is fixed pointwise.

Read its outgoing four-boundary by splitting each inserted D²×S² into the two hemispherical two-handles, with the second disk factors swapped as in the already constructed surgery bridge. The parallel core-disk push defining the five-dimensional slide has two effects on these four-dimensional attaching charts. On every strip traversing h, its band rectangle replaces the B strip by the B′ strip; these are exactly the signed slides over K in §2. On the transverse disk faces it replaces the B′ cross-section by the difference of the B′ and common-edge cross-sections; this is exactly V↦V−U in the displayed three-disk fork ball. Outside these rectangles and fork ball both maps are identity. On each rectangle they are the same product disk push, and on the fork ball they identify the same three parametrized disk faces. Choose the corner interpolations by this same product isotopy. Thus the link-move comparison in §2 is the outgoing restriction of the five-dimensional slide after applying the same h/C cancellation on the two sides. In particular its external three-boundary map is the change of the two recorded cancellation charts, up to the supported collar isotopies already retained in those charts.

After removing the clean O3 pair at the second end, the comparison of the resulting three-manifolds is therefore the one induced by those original cancellation/routing identifications. This establishes the marking required for this local arc-choice comparison. It still supplies no arbitrary prescribed diffeomorphism beyond that recorded comparison.

## 4. Exact remaining interfaces

This comparison is a candidate local way to remove the dependence on arbitrary replacement arcs. It is not by itself a proof that a one-handle slide has the required effect after all replacements. That next step needs the explicit simultaneous two-long-handle/dual-meridian calculation and its outgoing map, or an equally precise replacement. Dual three-handle replacements and births at the top require the corresponding reversed-boundary bookkeeping. These and the independently owned finite descending-field movie remain necessary before a full undecorated relative O1/O2/O3 calculus can be asserted.
