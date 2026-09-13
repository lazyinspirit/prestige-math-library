# Phase 2 next 21 — Step 3a scope review, group b

Run: `phase-2-next-21`  
Batches: 5, 6, 9  
Role: scope review only; this report makes no item-level proof judgment.

## Evidence reviewed

I read the current manifests, coverage records, prose designs, plan entries,
scope ledger, batch notes, dependency records, Step 1 recertification, and
owner readiness decisions for all five pairs. I also read the complete
relevant module-theoretic route through Craven's treatment of Brauer's Second
Main Theorem (Chapter 2, §§2.1–2.5):
<https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf>.

The earlier Step 1 escalations in batches 5 and 6 have been applied in the
current manifests. They repair proof interfaces and examples; they do not by
themselves settle this scope review. The current cross-batch dependencies are
explicit and point to the intended preceding pages.

## Decisions

### `bocksteins-steenrod-squares-and-cohomology-operations` — sufficient

The 24-item A page covers stable cohomology operations, the connecting-map
Bockstein and its main formal properties, higher diagonals and cup-`i`
products, Steenrod squares with instability, Cartan and Adem relations, Wu
classes, and the construction and normalization of odd-primary reduced
powers. Its seven companion items exercise Bocksteins, square computations on
real and complex projective spaces, an Adem consequence, the surface Wu
class, and two useful failure cases. The applied local cyclic-resolution,
transfer, equivariant-power, and wreath-product interfaces close the source
route required for the odd-primary and Adem statements. Bockstein spectral
sequences and a full computation of the cohomology of Eilenberg–Mac Lane
spaces are advanced continuations rather than requirements of this operations
page; the Thom identity and characteristic-class applications belong to their
planned later pages.

### `local-coefficients-twisted-homology-and-duality` — sufficient

The 19-item A page develops local systems through both the fundamental
groupoid and universal-cover module models, twisted singular and cellular
chains and cochains, functoriality, exactness, excision, Mayer–Vietoris,
compact supports, orientation systems, local cup/cap products, twisted
Poincaré–Lefschetz duality, and the Serre local-coefficient interface. Six
examples cover monodromy on the circle, the projective-plane sign system, the
Möbius bundle, nonorientable surfaces, failure of constant-coefficient
duality, and mapping-torus monodromy. This is adequate for the later
obstruction, spectral-sequence, Lefschetz, and surgery consumers. Sheaf-level
generality and unrelated universal-cover exercises are not needed for that
role.

### `spectra-and-stable-homotopy-groups` — insufficient

The pair otherwise gives a coherent minimal sequential-prespectrum treatment:
point-set conventions, structure maps, Omega spectra, sphere and suspension
prespectra, strict maps and homotopies, stable homotopy groups, shifts,
stabilization, stable stems, and multiplicative pairings. However, prose-design
item 9 explicitly requires the induced-map result to **define stable weak
equivalence**. The current `prop-maps-induce-maps-on-stable-homotopy-groups`
states functoriality and homotopy invariance but contains no such definition,
while the scope-boundary remark invokes “stable equivalence” without supplying
it.

Owner action recommended: enrich this pair, without merging it, by defining a
strict map of sequential prespectra to be a stable weak equivalence exactly
when it induces an isomorphism on every integer-graded stable homotopy group,
and make the boundary remark use that defined term. Stop this pair here until
the enrichment is applied and the owner records `proceed` for the resulting
scope.

### `obstruction-theory-postnikov-towers-and-classifying-spaces` — sufficient

The 23-item A page covers primary cellular obstruction theory with its local
coefficient system, obstruction and difference cochains, independence and
extension criteria, lifting, Eilenberg–Mac Lane spaces and representability,
Postnikov sections and simple-space `k`-invariants, and Milnor's numerable
classifying-space construction. Seven examples include the sphere fibration,
standard `K(G,n)` models, a first Postnikov stage, a trivial bundle, the
repaired cellwise-choice counterexample, and a nonnumerable long-line bundle.
The page is expressly limited to primary obstruction theory, simple
`k`-invariant classification, and numerable bundles; secondary operations,
non-simple Postnikov classification, and simplicial machinery are legitimate
later or specialist topics rather than gaps in this role.

### `brauers-second-main-theorem` — sufficient

The 16-item A page supplies the needed relative-projectivity, vertex, Green
indecomposability, and central-defect interfaces before treating `p`-parts,
`p`-sections, generalized decomposition numbers, subsections, the vanishing
theorem, Nagao correspondence, local block projection, Brauer's Second Main
Theorem, and its support corollary. The three companion items clarify the
section/subsection indexing, recover ordinary decomposition numbers at
`u=1`, and exercise empty local support. This matches the standard
module-theoretic source chain and the pair's role as the local-block interface
following Brauer's First Main Theorem. Fusion counting, character-count
formulas, explicit large decomposition tables, and Brauer's Third Main
Theorem are distinct continuations and need not be absorbed here.

