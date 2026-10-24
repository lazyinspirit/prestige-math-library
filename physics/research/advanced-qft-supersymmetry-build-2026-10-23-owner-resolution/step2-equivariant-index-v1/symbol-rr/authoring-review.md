# Compact symbol characteristic comparison

Owned source: `items/lem-equivariant-symbol-chern-character-pushforward.md`.
This is a new draft mathematical supplier, not an equivariant analytic index
theorem or a readiness receipt. No original supplier or existing consumer was
edited. No manifests, proof contracts, numeric levels, authority files, state,
verification stamps, or commits were changed.

The source proves the ordinary embedding-pushforward characteristic comparison
and its trace-weighted version on a fixed manifold. The fixed-component
expression is conditional on a quotient supplied by equivariant K-localization.
It explicitly preserves general first-order elliptic symbols and the symbols of
elliptic complexes, including positive-dimensional and nonorientable fixed
manifolds.

The proof uses the following substantive constructions rather than citing an
index theorem as its proof:

- Compact symbol triples become relative Thom-quotient K-classes by doubling,
  boundary clutching, adding a complement, trivializing the negative disk and
  collapsing it. The bundles are identified with base pullbacks by radial
  contraction and the exact ordinary homotopy-invariance supplier. This identifies the compact character with the ordinary
  relative character.
- For a complex line the zero-section calculation is `x A = 1-exp(x)` for the
  root Bott sign. Division is justified on universal finite projective spaces,
  one degree beyond the coefficient being calculated, then pulled back. It is
  not inferred by cancelling an Euler class on an arbitrary base.
- The unitary exterior representation explicitly constructs the required
  Spin-c lift: a spin lift implements a unitary frame transformation on
  Clifford matrices, and its difference from the exterior action is a unit
  scalar; their paired sign ambiguity vanishes in Spin-c. Degree-dependent
  signs identify its skew Clifford symbol with the specified Koszul symbol.
- Flag splitting, relative products and the ordinary Thom isomorphism give
  `ch(tau_W)=(-1)^rank(W) u_W exp(c1(W)) Td(W)^(-1)`.
- For a complexified real bundle, `c1` vanishes rationally. Its doubled
  cotangent orientation differs from its complex orientation by the rank sign,
  so the last formula is `u_minus Td(V_C)^(-1)` with no additional factor.
  Integration is explicitly evaluation on the oriented relative fundamental
  class of a sufficiently large cotangent disk/sphere pair, using
  `def-relative-fundamental-class-and-boundary-orientation`; only the
  cotangent total space is oriented.
- For an embedding into Euclidean space the doubled normal is `V + V*`,
  Bott inversion is evaluated by compact-support integration, and
  `Td(V_C)^(-1)=Td(TF_C)`.
- On a fixed manifold, finite eigenbundle decomposition defines the character
  weighted by eigenvalues, whose value over a point is the trace. This is not
  the rank in degree zero of Borel equivariant cohomology.
- The normal exterior class has a nonzero scalar character and a nilpotent
  positive-degree remainder in cohomology, giving its cohomological inverse.
  K-theoretic invertibility is deliberately not deduced from this calculation.

## Bott and orientation issue resolved during authoring

The root `thm-complex-spinc-thom-orientation` uses the plane symbol `z` and
`beta=[tautological Hopf line]-1`. Its compact Chern character integrates to
minus one with the ordinary complex orientation. A Koszul symbol on exterior
powers of `W*`, with contraction by the vector and its adjoint, instead has
plane map conjugate-z and the opposite sign. The new definition's author
changed the generic normal symbol to exterior powers of `W`, with exterior
multiplication and its adjoint, so its plane map is `z`. For `W=nu_C`, the
complex-bilinear extension of the real metric identifies `W` with `W*`
equivariantly, preserving the required denominator written with `nu_C*`.

The no-sign integral in the draft uses `dtheta=sum dxi_j wedge dx_j`.
If cotangent symplectic orientation instead means
`-dtheta=sum dx_j wedge dxi_j`, its integral is multiplied by
`(-1)^dim(F)`. This is explicit both in the Statement and in the proof. There
is no assumption that all fixed components have even dimension.

## Actual source inspection and limits

The following PDFs were retrieved into temporary files and their relevant
extracted text inspected during this task:

- Gilkey, *Invariance Theory, the Heat Equation, and the Atiyah-Singer Index
  Theorem*, first edition,
  <https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf>.
  Inspected the discussion around Theorem 4.4.6, printed p. 274 and following,
  where `dx1 wedge dxi1 wedge ... wedge dxm wedge dxim` is explicitly called
  the symplectic orientation, with the dimension sign in the displayed
  formula. This source was used for the convention comparison. The proof of
  its index theorem was not reconstructed by claiming to have read this
  paragraph.
- Heitsch, *The Lefschetz Principle, Fixed Point Theory, and Index Theory*,
  <https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf>.
  Inspected printed pp. 5–6, in particular Theorem 2.1 and its displayed
  `(-1)^n` ordinary symbol formula. Also inspected the introductory caveat
  that this historical account outlines proofs and should not be taken
  literally. It is convention context, not a missing-proof discharge.
- Hatcher, *Vector Bundles & K-Theory*,
  <https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf>, was retrieved and text
  extracted. No additional precise Hatcher passage was relied on beyond the
  actual inspected local Chern-character and Bott suppliers.

Atiyah–Singer I is listed as the standard bibliographic source for the
statement and symbol construction. Its full text was not retrieved in this
task; no full-text reading claim is made for it. A preliminary arXiv retrieval
turned out to be a foliation text, not the desired index-theorem reference;
it was not used as evidence or as a proof input.

The existing root mathematical suppliers were read without editing. The draft
lists their exact IDs. Root owns any import or prerequisite-placement work
needed to make these suppliers available in the physics build; this task does
not create imported copies or bypass import controls.

## Remaining substantial prerequisites for the eventual consumer

1. Equivariant compact-support K-localization, including the normal
   self-intersection identity and pushforward compatibility, must supply the
   class satisfying `e_g b=i* sigma` and the equality of the global
   topological-character evaluation with the sum of fixed-component
   pushforwards. The existence of the cohomological inverse here alone does
   not prove this.
2. The general equivariant analytic/topological index comparison must identify
   the elliptic-complex character with that topological pushforward. Ordinary
   Bott/Spin-c Thom theory and an existing Dirac index formula do not alone
   establish the required equivariant embedding compatibility for arbitrary
   matrix-valued first-order elliptic symbols.

These are established mathematical authoring obligations, not open problems in
mathematics. This draft neither imports them under an unproved-result label
nor claims to complete them.

## Focused mechanical check actually run

After the final source edit:

`node tools/physics-support/proof-layout.mjs items/lem-equivariant-symbol-chern-character-pushforward.md`

Result: exit 0, `proof-layout: 1 items, 11 steps, 0 defects`.

This is a proof-layout check only. No native gate, source acceptance,
certification, publication, or scientific independent review is claimed.
