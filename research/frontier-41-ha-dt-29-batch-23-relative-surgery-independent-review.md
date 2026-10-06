# Independent audit: latest relative center–saddle cancellation route

## Finding

The latest construction supplies the local block from the stated simple
first-saddle lobe, provided the explicit hypotheses in the memo hold: the
center basin is an embedded disk of closed orbits, its frontier is one simple
separatrix circuit through `q`, there are no other critical points in a
sufficiently small neighborhood, and exactly one descending saddle branch
enters the basin. The other branch has a short regular segment immediately
outside the saddle chart, so it can be truncated at a transverse level
section before any other critical point. The fixed cap is not what creates
this geometric block; it makes the frontier holonomy trivial and supplies
the leafwise product needed for the map surgery.

The revised endpoint construction is also convincing. The center-lobe levels
are full circles below the saddle value. In a nested saddle chart, the local
incoming arc is fixed by the exact Morse chart; the complementary interval
map extends with matching endpoint germs by choosing a positive derivative
and correcting its integral with an interior bump. Smooth dependence on the
level yields the endpoint band, and marked lifts interpolate between endpoint
bands. I found no obstruction to this construction.

The latest wording fixes the sentence-level issue I flagged: it now takes
the annular product only over a compact middle interval of regular values
whose full circles avoid the critical charts, then glues that band to the
separately constructed saddle endpoint band. After excision, the upper
complement is correctly treated as interval fibers glued to the local
hyperbola arcs by endpoint germs. This resolves the literal circle/interval
mismatch.

No canonical page, manifest, receipt, or controller state was edited.

## Block construction from the lobe

Let `Ω` be the compact disk bounded by the simple separatrix circuit through
`q`. Its regular levels are nested circles around the unique minimum `p`.
For each compact interval of values inside `(u(p),u(q))`, the relevant
sublevel component is compact and contains no critical point. The regular
level component is therefore a proper one-dimensional submersion over that
interval; it is one circle near `p` and remains one circle throughout. The
unique descending branch from `q` to `p` meets each circle once because `u`
strictly decreases from `u(q)` to `u(p)` along the branch.

Choose a small exact Morse chart at `q` that meets `Ω` only in the
center-facing lower sector. Removing this chart from the simple frontier
circuit leaves a compact regular interval. Along that interval `du≠0`, and
the frontier is a level arc. A thin neighborhood is a rectangle with
coordinates given by position along the arc and the scalar value `u`.
Compactness gives a uniform width; the coordinate is single-valued on this
simply connected rectangle, so its local flow-box charts agree.

The other descending branch leaves the basin in the opposite lower sector.
Take a short segment after it leaves `q`, still inside a region with no other
critical point, and a small section contained in one regular level and
transverse to the branch. Flow that section by
`X=∇u/|∇u|²`, for which `du(X)=1`. This gives a product tube whose fibers
are intervals, and whose outer end is a transverse exit section. Together
with the saddle chart and the rectangle around the frontier interval, this
is a sufficiently small regular neighborhood of the lobe and saddle. Its
regular complement is covered by these product rectangles; the four local
saddle sectors are accounted for by the exact Morse chart and the two
regular-side attachments. The boundary can be rounded within the rectangles.

This construction uses only the local simple-lobe and no-extra-critical
hypotheses. The fixed cap separately implies trivial holonomy of the
frontier circuit, which is needed to extend the scalar/product across the
frontier collar. If the lobe is not an embedded disk with one simple circuit,
or if another singularity prevents choosing the regular exit segment, this
block construction does not apply; those cases are outside this conditional
carrier.

## Endpoint chart and annulus gluing

For `t=u(q)-δ` close to the saddle value, the center-lobe circle meets a
nested saddle chart in one arc `J_t`; its complement `I_t` is a regular
interval. The exact Morse chart is defined on an open neighborhood larger
than the chosen small chart, so it prescribes the full endpoint germs of the
map on `I_t`. Keep those germs on short endpoint collars. Extend the
derivative positively across the middle and add an interior bump to match
the target interval length; integrating gives the interval diffeomorphism.
The endpoint collars may be shortened so their integral contribution is
less than the target length. On a compact upper value band the construction
can be made smoothly in `t`. This is sufficient to glue the center-circle
map to the saddle chart on an open overlap, including its seam jets.

For the middle band, choose regular values bounded away from both critical
values. Its full level circles form a compact annulus, trivialized by
`X=∇u/|∇u|²`; the same holds for the model. Match the marked descending
section and interpolate the lifted circle maps there. The middle annulus
should overlap the already fixed center and saddle endpoint bands. It should
not be obtained by deleting a full saddle disk while retaining full-circle
fibers: that deletion produces interval fibers. The separately constructed
frontier and exit rectangles handle those interval fibers and extend the
chart over the non-lobe side to the outer regular collar.

## C² adapter and collar interpolation

The revised C² paragraph takes a C²-close smooth approximation on the
surgery region and blends it back to `u₀` on a regular annulus. If that
annulus lies outside the smooth cancellation core, the estimate

`dũ(X)=(1−ρ)du₀(X)+ρdū(X)+(Xρ)(ū−u₀)`

is sound. With `du₀(X)≥c`, `dū(X)≥c/2`, and
`|(Xρ)(ū−u₀)|<c/4`, it gives `dũ(X)>c/4`. The approximation can be chosen
arbitrarily close in C¹ for a fixed annulus width. The cancellation support
must stay inside the region where the scalar is the smooth approximation;
the revised text specifies that.

Thus, under the explicit simple-lobe hypotheses, I find the block, endpoint
germ extension, middle-annulus overlap, and C² adapter adequate in substance.
