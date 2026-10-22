# Locally flat Seifert fiber: independent geometry investigation

Scope: off-canonical donors only, for `lem-locally-flat-slice-surface-bounds-seifert-hypersurface`. No canonical items, claims, dependencies, manifests, contracts, native state, publication or acceptance were changed. The full TOP claim remains an established theorem awaiting local proof, not an open problem and not a completed branch.

## Exact first missing foundational input

The given definition supplies local pair charts and the prescribed boundary collar of the proper disk. It does not supply a single embedded rank-two normal disk bundle over the disk, relative to that boundary collar. Contractibility of the disk trivializes a bundle *after its existence has been established*; it does not construct such an embedded bundle from the pair charts. Nor does vanishing of the capped surface's normal Euler obstruction construct a normal neighborhood. A proof using either assertion must first supply the neighborhood theorem.

For this construction the smallest unresolved input is the relative normal-neighborhood existence theorem for a locally flat proper disk in the standard smooth four-ball, with its prescribed boundary product germ. One may instead formulate the needed input for the capped oriented surface, relative to the smooth F region. A direct construction of the entire hypersurface could bypass the normal-neighborhood *method*, but the local pair charts alone have not supplied that construction either.

Even if such a neighborhood were supplied, a second issue remains: topological transversality relative to the prescribed angular end on the compact exterior, including the ambient bicollar. Sard applies to the open smooth complement. It does not prove the relative TOP statement at the tube boundary or at the disk.

## Actual source inspection

I independently rendered and visually inspected Freedman–Quinn, *Topology of 4-Manifolds*, printed pages 136–139 and 157–159 from the actual complete 265-page scan `/tmp/freedmanquinn-candidate.pdf`. The scan's printed-page offset is +6; its raw SHA256 is `647ece36dcbd1a574f1c6f33cc3a6d2611ab80ec0defbb152614adac7972a4bf`. Retrieval URL: https://www.maths.ed.ac.uk/~v1ranick/papers/freedmanquinn.pdf. This is not a claim to have read the entire book.

Printed p.137 states:

> A locally flat submanifold of a 4-manifold has a normal bundle, which is unique up to ambient isotopy.

It immediately gives the relative form:

> if a bundle is given over a neighborhood of a closed subset K ⊂ N then there is a normal bundle which agrees with the given one on a (smaller) neighborhood of K.

The surrounding definition makes a normal bundle a vector bundle together with an embedding of its total space extending the zero-section embedding. Thus this is precisely more than a family of local-flatness charts or an abstract rank-two bundle.

Printed p.138 begins the proof:

> The proof given basically comes from Quinn [4], and deduces the result from the analogous theorem in dimension 5 and the controlled h-cobordism theorem.

Printed p.139 identifies the use:

> The controlled h-cobordism theorem 7.2C implies that we can find h so that the h-cobordism has a product structure over N × (0, 9/10).

The remaining paragraph explains a smoothing required to apply that controlled theorem, including Theorems 8.2 and 8.3B. None of these are supplied by the elementary Alexander-duality calculation. No proof of the needed special controlled product theorem has been authored here. FQ's proof cannot truthfully be counted as locally completed by quoting only its normal-bundle conclusion.

Printed pp.157–159 treat the three-dimensional submanifold case of transversality. They use uniqueness of normal bundles, a collar whose interior is smooth as an open subset of M, a smooth regular level, smoothability of the resulting W by 8.7C, and handle cancellation. Printed p.159 then derives map transversality from submanifold transversality by a graph construction. In particular the book itself does not infer the required TOP fiber simply by smoothing the original map on its open complement.

## Completed elementary modules

`lem-angular-map-rectification-on-a-given-product-tube.md` proves the following actual adjustment: if a product tube is *already given* and the ratio of the desired angular map to a meridian map has zero winding on **every** loop in that tube, a logarithm and radial cutoff give literal angular agreement on a smaller entire product end, preserving the map outside a slightly larger tube. Its proof includes the path-lifting construction of that logarithm. This is conditional on the supplied tube and is not a proof of that tube's existence.

The distinction between meridian loops and all loops matters. A map a(s,z) multiplied by any nontrivial map S → S¹ still has degree one on every meridian. Rectifying it to the originally prescribed angular coordinate requires removal of its horizontal class too. A framing adjustment may address that class, but preservation of the specified F framing must be checked separately.

`ex-vanishing-angular-approximation-can-have-nonmanifold-fiber-closure.md` gives a fully explicit smooth local example. Disjoint four-balls approach the surface through very small positive angles. On each ball a compactly supported phase change produces one round S³ as a regular-fiber component. The perturbations preserve the homotopy class and their angular errors tend uniformly to zero at the surface. Nevertheless the fiber closure has arbitrarily small clopen S³ components at the origin and is not locally connected there. This invalidates the inference from vanishing-error smooth angular approximation to locally flat compact closure even in an initially smooth model.

## Conditional gluing, with the missing input visible

If an embedded product normal tube is supplied, if a compact exterior contains a compact oriented three-manifold Q with the required boundary angular section, and if an explicit ambient bicollar of Q is supplied matching the angular product on an open boundary collar, then glue Q to the radial sheet S × [0, ε]. In the matching tube the result is literally the product half-space; the matched bicollars glue as the same coordinate map. The result is compact, has boundary S, and is locally flat and cooriented. Because the radial sheet is connected when S is connected, select its component and discard all other closed components. Orientation is fixed by the increasing angular coordinate, and the sign along F is whichever sign was prescribed in the original matching tube. These are elementary gluing consequences of the **explicitly supplied** geometry. They do not obtain Q or either required collar.

One must not replace the exterior input by “a generic smooth regular fiber whose closure is tame.” That is exactly the missing assertion. The example above gives a concrete obstruction to that inference.

## Further constraint on a proposed smooth-complement shortcut

A potential shortcut that additionally makes the hypersurface smooth throughout its interior and supplies a smooth collar at the F region is stronger than the required TOP statement. Subject to the ordinary relative smoothing theorem for locally flat disks in smooth three-manifolds, such a hypersurface would turn the given slice disk into an ambient smooth slice disk: enlarge D by a thin annulus in F until its boundary is a smooth curve K′ in the interior of F; push that enlarged disk into the hypersurface's smooth interior, with the push smooth near K′; smooth this locally flat disk in the smooth three-manifold relative to the smooth boundary collar; and attach the smooth annulus returning to K. This is a conditional reduction, not a claimed local proof of the relative three-dimensional smoothing theorem. It shows why smoothness of a regular fiber away from D is not an innocuous replacement for the desired TOP construction when smooth F compatibility is also asserted.

## Outcome

No complete proof of the full target was found. The relative disk normal-neighborhood bridge remains unproved locally, and a complete proof of the required compact-exterior relative TOP transverse-fiber theorem also remains absent. No narrowing to a smooth disk, no assumption of a normal bundle as part of “locally flat,” and no proof-completion stamp is justified by this investigation. The two proved donors are intermediate modules and diagnostic evidence only.
