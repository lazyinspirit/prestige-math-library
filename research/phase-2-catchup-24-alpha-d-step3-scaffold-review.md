# Phase 2 catch-up 24 — Alpha group d Step-3 scaffold review

Run: `phase-2-catchup-24`  
Group: `d`  
Batches reviewed: `8`, `9`

| Batch | A page | B page | Verdict |
|---:|---|---|---|
| 8 | `higher-homotopy-groups-and-cofiber-sequences` | `higher-homotopy-groups-and-cofiber-sequences-examples` | **insufficient** |
| 9 | `the-de-rham-complex-homotopy-and-mayer-vietoris` | `the-de-rham-complex-homotopy-and-mayer-vietoris-examples` | **insufficient** |
| 9 | `riemannian-metrics-length-distance-and-volume` | `riemannian-metrics-length-distance-and-volume-examples` | **insufficient** |

I independently read the current manifests, coverage, notes, Step-0 report,
assigned AT-10/DG-15/DG-18 designs, current canonical plan, the local-degree
proof contracts, both companion pages, the published prerequisite bodies used
at the load-bearing interfaces, and the complete recorded source selections.
This review does not edit either batch scaffold. All three A pages are below the
60-item limit. No new prerequisite A/B pair is required, but the exact repairs
below cannot be waived.

## Batch 8 — higher homotopy groups and cofiber sequences

The current 31-item A inventory and six-item B inventory agree with the
amended AT-10 prose scaffold and the canonical plan. Their page requirements
are earlier, and the actual owned dependency closure has no unresolved ID,
cycle, forward edge, or B-page supplier.

### Mathematical audit

The point-set and group spine is adequate. I checked items 1–12 from
`def-compactly-generated-conventions-for-based-homotopy` through
`thm-long-exact-sequence-of-relative-homotopy-groups`. The compact-interval
exponential law is used in the correct direction, product with the locally
compact interval supplies the quotient compatibility, and the relative group
ranges are correct: pointed set in degree one, group from degree two, abelian
from degree three. The disk-compression route proves the exactness criterion
relative to the whole boundary and does not substitute a covariant cofiber
sequence.

I also checked items 13–27, from HEP through the finite-CW basepoint lemma.
The strip is `X×{0} union A×I`; the mapping-cylinder deformation and free-end
cofibration use the correct square retraction; pushout/product uses are local;
the cofiber rotation retains the suspension reflection; and Puppe exactness is
contravariant after applying based mapping classes. The basepoint-transport
formula agrees with the library's first-loop-first convention. May, *A Concise
Course in Algebraic Topology*, Chapter 5 §§1–2 (pp. 39–41), Chapter 6 §§1–4
(pp. 43–46), Chapter 8 §§1–4 (pp. 57–60), and Chapter 9 §§1, 4 (pp. 65–67)
supports these conventions and constructions. The active complete text is
https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf and has a current
251-page fetch receipt.

The new items 28–31 close the former lower-sphere and degree-classification
gap without Hurewicz or Freudenthal. The cross-polytope triangulation, finite
simplicial approximation relative to a singleton, and omitted-simplex
contraction prove the lower-sphere vanishing. For the degree theorem, the
double-cube target is a finite sphere triangulation; a small regular cube in
one target simplex pulls back to finitely many disjoint affine bubbles. The
explicit `Q_R` homotopy is continuous at its moving boundary and at infinity.
QR/Gram–Schmidt paths reduce every bubble to the identity or the first-coordinate
reflection, and the disjoint-slab homotopy realizes their signed sum using the
already proved cubical operation. The local-degree sum then makes degree equal
to that signed count. Hatcher, *Algebraic Topology*, §2.C Proposition 2.30 and
Example 2.31 (printed pp. 136–137) supplies the exact degree/local-degree
interface, while the finite-bubble converse is correctly identified as a local
argument rather than attributed to those pages. The full active text is
https://pi.math.cornell.edu/~hatcher/AT/AT.pdf; the higher-homotopy source is
https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf. Both have current full-PDF
fetch receipts.

Five of the six B items are closed. The product computation is coordinatewise;
the disk-boundary calculation now legitimately uses the local lower-sphere and
degree theorems, including the two-point relative `pi_1` case for `m=1`; the
wedge summand is a pushout of a well-pointed basepoint cofibration; the free
homotopy example uses the exact transport conjugation and free-word normal
form; and the convergent-sequence counterexample contradicts the strip
retraction directly.

### Fatal B8 defect and repair

`ex-mapping-cone-of-a-degree-d-circle-map` is not yet proof-closed. Its
fundamental-group calculation is adequate: the published theorem for
`pi_1(R/Z)` identifies `[t] -> [dt]` with the `d`th power of the generator, so
van Kampen imposes the relation `a^d`. The homology calculation has a different
premise. The path

`ex-mapping-cone-of-a-degree-d-circle-map`
→ `thm-cellular-boundary-is-the-incidence-degree-matrix`
→ `def-incidence-number-of-two-cw-cells`

only identifies the cellular coefficient with the induced endomorphism of
oriented reduced `H_1(S^1;Z)`. It does not calculate that endomorphism for the
explicit quotient-circle map. `thm-fundamental-group-of-the-circle` supplies no
undeclared `pi_1`-to-`H_1` bridge. The present strategy says to prove the bridge
“if needed” but gives neither a complete local argument nor an adequate
declared supplier.

The owning Beta must preserve all integers, including zero and negative values,
and do one of the following before this pair can be sufficient:

1. add the earlier A-level sphere-degree/local-degree interfaces and the
   oriented `R/Z`–unit-circle identification to this B item's deps, then spell
   out the finite-fibre computation (positive `d`, reflection for negative
   `d`, constant map for zero) and invoke the incidence definition; or
2. add a local A lemma immediately before the example proving exactly that
   `[t] -> [dt]` acts as multiplication by `d` on oriented reduced `H_1`, then
   depend on it.

The existing published B example `ex-degree-of-the-circle-power-map` confirms
the computation but is not a legal B-page supplier for this scaffold. No new
A/B pair is needed. Until the local A supplier or full inline proof exists, the
pair is `insufficient`.

The batch notes and coverage still label the point-set proof and overall batch
as blocked. Their mathematical obligations are otherwise resolved by the
current detailed strategies; after repairing the degree bridge, the owning
Beta should reconcile those stale status sentences without deleting the
historical evidence.

## Batch 9 — de Rham complex, homotopy, and Mayer–Vietoris

The 39 A items and 12 B items in the owned manifest form a mathematically
adequate proof sequence. Items 1–12 correctly build the cochain complex,
cohomology, wedge algebra, contravariant functor, and pullback algebra map.
Items 13–19 construct interval integration, prove
`i_1* - i_0* = dK + Kd`, and handle continuous homotopies through a genuinely
endpoint-relative Whitney smoothing. The local argument uses smaller closed
collars inside the constant plateaux and therefore does not consume the known
published smoothing defect.

Items 20–23 prove positive-degree Poincaré exactness and contractible-manifold
cohomology with the stated countable-choice cost. Items 24–30 use the consistent
`s(alpha,beta)=beta-alpha` convention. The cutoff lift
`alpha=-rho_V omega`, `beta=rho_U omega` gives
`eta=d rho_U wedge omega`; the cochain reindexing introduces no extra sign,
and naturality does not require pullback to preserve the chosen partition.
Items 31–33 correctly restrict disjoint-union interchange to a finite family,
handle the two-component overlap for `S^1`, and then induct on spheres before
deducing punctured Euclidean space. Items 34–39 are accurately scoped false
statements and do not introduce dependencies.

All 12 companion items were checked. The finite discrete, circle, sphere,
punctured-space and annulus computations follow from the A page; the angular
and sphere-volume representatives are detected by nonzero integrals without
using the later Riemannian page; the counterexamples preserve the positive-degree,
smooth-homotopy, cutoff, and contravariance qualifications.

Lee, *Introduction to Smooth Manifolds*, Chapter 17, printed pp. 441–451 and
460–464, and Hitchin, *Differentiable Manifolds*, §6.6, printed pp. 50–56,
are independent complete treatments of the active route. Their recorded full
texts are respectively
https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html
and
https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf.
Both are fetch-verified; no source is dropped and there is no alternative
argument requiring adjudication.

### Fatal DG15 registration defect

The current canonical `research/plan-spec.json` page entries for both this A
page and its companion contain `items: []`. The owned manifest contains the
39/12 inventories and the DG-15 prose design contains them, but the notes only
validated a temporary overlay. The task contract requires the current plan,
not an overlay, to carry every item and dependency.

One authorized shared-plan writer must copy the exact current A and B arrays
from the batch-9 manifest into their canonical plan entries, preserving order,
IDs, deps, strategies and provenance, then rerun whole-run `validate-plan` and
`manifest-deps`. No prose-scaffold change or new prerequisite pair is needed.
Until that edit exists, this pair is `insufficient` despite its sound local
mathematics.

## Batch 9 — Riemannian metrics, distance, and volume

The 50 A and 12 B manifest items are also mathematically coherent. Items 1–14
correctly distinguish pullback tensors from positive-definite pullback metrics,
restrict the equal-dimensional local-isometry equivalence to boundaryless
manifolds, make musical maps smooth via the inverse matrix, and normalize the
exterior metric by the determinant formula. The global metric existence item
states countable choice explicitly, which locally supplies the choice cost
omitted from the two published partition/bundle-metric statements it uses.

Items 15–30 establish length and distance from finite piecewise-`C^1` curves.
The monotone-surjection reparametrization proof allows pauses; reachability by
finite coordinate segments is an open equivalence class; compact chart
comparison gives the first-exit positivity estimate and the topology theorem;
and the extended distance avoids subtraction of infinities across components.
Items 31–39 distinguish densities, oriented volume forms, Borel Radon measure
and completion, and use the outward-normal-first convention in the divergence
theorem. Items 40–44 construct the orientation-dependent Hodge star in a smooth
local orthonormal coframe, establish the square sign, and restrict the integral
inner product to compactly supported real forms. Items 45–50 correctly refute
the six tempting overstatements without importing geodesic or cut-locus theory.

The 12 B items check directly: induced/product/conformal/hyperbolic/flat metrics,
circle and disconnected distances, polar density, Euclidean three-dimensional
Hodge star, polar divergence, and the degenerate constant-map pullback. The
torus atlas is constructed by translation charts rather than depending on an
earlier B example. The product example's mathematical route is correct, though
its dependency array contains the same product-smooth-structure ID twice.

Lee, *Introduction to Smooth Manifolds*, Chapter 13 pp. 328–332 and 337–342,
Chapter 15 pp. 389–391, and Chapter 16 pp. 422–439, together with Datar,
*Riemannian Geometry*, §§8.1 and 9.3–9.4, printed pp. 45–47 and 56–58, give two
independent treatments. Datar's author-hosted full text is
https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf.
All active sources are fetch-verified and no source-resolution drop exists.

### Fatal DG18 defects and repairs

First, both canonical plan entries again have `items: []`, while the manifest
has 50 A and 12 B items. The same authorized shared-plan writer must install
the exact arrays and rerun the whole-run gates. The DG-18 prose design already
contains them, so no new pair is required.

Second, the Lee harvest “Problem 16-22(a,c) (codifferential and formal adjoint)”
is marked deferred to the literal string `owner-decision`. That is not a valid
destination page. I resolved its scope row as `owner-decision`: the owner must
choose an existing later Hodge/PDE page and update coverage, or reclassify the
result out of scope with the specific reason that this page intentionally stops
at the algebraic Hodge star. No owned proof uses the deferred result.

Third, the owner must deduplicate the deps array of
`ex-the-product-riemannian-metric` before installing the B inventory into the
plan. The duplicate does not conceal a mathematical premise, but it is not a
clean exact dependency record.

## Published-consumer boundary and Foundations boundary

The published item
`thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` has the collar
neighbourhood defect recorded in the batch-9 notes. The owned continuous de
Rham invariance item does not declare or use it; it gives a complete local
relative-Whitney route with smaller collars. Likewise, the published partition
and bundle-metric statements under-record their countable-choice cost, but the
owned global conclusions add `def-countable-choice`, making the used premises
adequate under their stated hypotheses. These remain Phase-3 published debt,
not supplier verdict failures. I found no published consumer whose proof uses
one of these new frontier items, so there is no additional consumer-supplier
ledger row to route from this review.

None of the three pages is a Foundations page. I checked the actual owned
`requires`, `deps`, definition well-definedness links, and the load-bearing
published body references used above. No path reaches
`deferred-set-theory-beyond-choice` or an item recorded there. Explicit
countable-choice dependencies in DG-15 and DG-18 go to the proved local choice
definition, never to the deferred catalogue.

## Frontier dependency ledger

I compared every page requirement and item dependency in consumer batches 8
and 9 against all 16 current run manifests. Neither batch consumes a page or
item owned by another batch in this frontier, and the semantic audits above
found no implicit same-frontier use. Therefore both required per-batch input
files remain `[]`. Running the refresh command preserved batches 8 and 9 as
reviewed and introduced no orphaned review or edge.

## Scope decisions

`scope-decisions refresh` produced 11 pending rows. Ten now stand with exact
evidence: covering invariance, triple exactness, NDR equivalence, compact
finite-dimensionality, countably infinite disjoint unions, Lorentzian metrics,
the nonorientable divergence theorem, self-dual two-forms, Nash embedding, and
Lee's alternate finite cross-component metric are all genuinely unused or
properly routed. The codifferential/formal-adjoint row is `owner-decision` for
the missing destination described above. The scope check reports zero errors.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group d`
  — 11 current declines, 11 initially pending.
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group d`
  — 11 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24`
  — refreshed and deduplicated; both owned inputs remain empty.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-8.coverage.json,research/phase-2-catchup-24-batch-9.coverage.json --stamp --timeout-sec 12`
  — 7/7 sources fetch-verified, 0 newly stamped, 0 drops.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-8.coverage.json research/phase-2-catchup-24-batch-9.coverage.json`
  — 3 pages, 204 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`
  — 691 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — exit 0; declared page order is acyclic and consistent, with no item-level
  cycles, forward references, B-page dependencies, or unresolved IDs among
  itemized pages. This validator permits empty item arrays, so it does not
  waive the two DG registration defects.
- `node tools/extcheck.mjs --quiet`
  — exit 0 with 57 pre-existing published warnings on the final rerun; none is an actual premise
  of these owned proofs.
- `node tools/autopilot/bin/autopilot.mts status`
  — not completed: the installed Node loader rejected the `.mts` extension.
  No driver-state conclusion is claimed from that failed diagnostic.

## Handoff

Batch 8 needs the explicit homological degree bridge for its circle mapping-cone
example. Batch 9 needs a single authorized shared-plan installation for all
four item arrays; DG-18 additionally needs the codifferential scope destination
resolved and one duplicate dependency removed. These exact defects are recorded
in the verdict file for the owning Betas and the serial shared-plan writer.
