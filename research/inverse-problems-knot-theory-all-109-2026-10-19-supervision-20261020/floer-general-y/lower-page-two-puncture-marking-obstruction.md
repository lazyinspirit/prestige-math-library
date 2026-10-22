# The unmodified lower page is not the required two-puncture fiber polygon

New finite geometric obstruction, 2026-10-20. This concerns only the attempted direct doubled-page marking in the Moise working donor; it does not refute the fibered-knot theorem.

Let $F$ have genus $g\ge1$ and one boundary component. In its doubled-page Heegaard diagram choose the $2g$ disjoint cocore arcs $a_i$ and their short positive endpoint push-offs $b_i$. Shrink their neighborhoods so no endpoint passes another. Around the boundary seam, the endpoints have cyclic order

$$a_1,b_1,a_2,b_2,\ldots,a_{4g},b_{4g},$$

where the subscripts here enumerate individual endpoints, not the original cocore arcs. The actual monodromy is the identity in this collar, so this order is also the order of the lower-page alpha and beta intersections with the seam.

The whole lower page cannot already be the adapted polygon: its boundary seam is interior to the closed doubled surface, while all vertices of an adapted polygon must lie on the boundary of the sutured Heegaard surface. Putting both punctures off the seam does not change that defect.

Even the simplest seam-puncture repair fails. Remove two disjoint small disks centered on the seam, with closures avoiding every attaching-curve endpoint, and take $P$ to be exactly the remaining lower page. This already meets the new boundary in semicircles rather than only vertices, which is another violation of the adapted-polygon definition. There is also an independent endpoint obstruction: even if one grants a local collar modification near each puncture to replace these contacts by vertices, while retaining the two original interior seam arcs and their attaching endpoints, each such arc must have a single type. Changing type at an interior point would introduce a vertex not on $\partial\Sigma$. The condition $\beta\cap A=\varnothing$ puts every $b$ endpoint on a $B$ arc; $\alpha\cap B=\varnothing$ puts every $a$ endpoint on an $A$ arc. Thus all $a$ endpoints would lie on one seam arc and all $b$ endpoints on the other.

This is impossible by the displayed cyclic order. An arc containing two consecutive $a$ endpoints contains the intervening $b$ endpoint. Each of the two arcs could consequently contain at most one $a$ endpoint if it contains no $b$ endpoint, whereas there are $4g\ge4$ of them. Equivalently, two seam cuts cannot separate two alternating endpoint sets into one interval of each type. No placement of the two small seam punctures avoids this obstruction.

Therefore a successful two-puncture diagram needs an actual modification of the fiber polygon, such as corridors and bands with a checked sutured-manifold marking, or a different adapted Heegaard construction. Simply calling the lower page the fiber polygon, even after adding two seam punctures, cannot justify the upper-tuple Alexander claim. The extra marking operation must also verify the rounded decomposing surface remains the original once-bordered genus-$g$ fiber and that the punctures represent the meridionally sutured exterior. No canonical source or accepted proof is changed by this calculation.
