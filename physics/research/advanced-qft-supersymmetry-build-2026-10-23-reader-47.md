# Step 3a Reader Report — Batch 47

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `47`  
Role: independent reader  

## Scope and inventory

The current batch manifest assigns the A/B pair `qftx-susy-backgrounds` and
`qftx-susy-backgrounds-examples` in category
`advanced-qft-and-supersymmetry`.

Opened pages:

- `library/advanced-qft-and-supersymmetry/qftx-susy-backgrounds.md` (A)
- `library/advanced-qft-and-supersymmetry/qftx-susy-backgrounds-examples.md` (B)

Opened assigned items in supplier-before-consumer order:

1. `thm-qftx-complex-associated-bundle-realification`
2. `def-qftx-susy-background-data`
3. `ex-qftx-susy-flat-torus-geometric-background`
4. `post-qftx-rigid-supersymmetric-background`
5. `ex-qftx-susy-round-s4-localization-data`

The order between the flat-torus example and the round-sphere postulate is
independent; both use the background definition, and the round-sphere example
uses the postulate.

Direct mathematical and model suppliers opened for the assigned claims:

- Published mathematics: `def-countable-choice`, `def-smooth-manifold`,
  `def-riemannian-metric-and-riemannian-manifold`,
  `def-frame-bundle-of-a-smooth-manifold`,
  `def-oriented-real-vector-bundle-and-oriented-frame-bundle`,
  `def-smooth-principal-g-bundle`,
  `def-principal-g-bundle-and-associated-fiber-bundle`,
  `def-principal-connection-and-vertical-curvature`,
  `thm-associated-vector-bundle-is-well-defined`, and
  `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`.
- Current-run mathematical drafts: batch-2
  `def-qftx-associated-covariant-derivative` and batch-7
  `def-torus-equivariant-cohomology-cartan-model`.
- Current-run physical postulate: batch-31
  `post-qftx-n4-super-yang-mills-model`.

## Item review and repairs

### `thm-qftx-complex-associated-bundle-realification`

The statement preserves the real associated-vector-bundle theorem's
hypotheses, defines the fibrewise map `J[p,w]=[p,iw]`, and makes no uniqueness
claim for unrelated complex structures. The quotient check uses the supplied
right-action convention and complex-linearity of the representation. The local
chart argument gives smoothness and complex-linear transition maps. I found no
defect and made no edit.

Lee, *Introduction to Smooth Manifolds*, 2nd ed., Lemma 10.6, states that
fibrewise-linear local charts with smooth linear transition functions determine
a unique smooth vector-bundle structure. I opened its complete statement and
proof at PDF pp. 270–271. The complex structure itself is proved locally in
this item.

### `def-qftx-susy-background-data`

I repaired the spin-structure formulation so that the equivariance is explicit
for the already specified double cover:
`lambda(p s)=lambda(p) rho(s)`. This supplies the group map at its first use
and fixes the precise relationship between the principal `Spin(4)` bundle and
the oriented orthonormal frame bundle. The rest of the definition consistently
treats the spin connection, R/gauge bundles, fields, and analytic localization
inputs as supplied data; it does not claim arbitrary-background existence or a
constructed continuum measure.

The associated covariant-derivative supplier is a current batch-2 mathematical
draft. I read its Definition, Facts, and complete local patching proof, together
with the right-action, principal-connection-form, representation, associated
quotient, and Maurer–Cartan conventions needed for this use. Its formula is
`d psi_i + rho_*(A_i) psi_i`; the chart changes and connection-form transition
cancel with the declared right quotient. The supplier itself records that its
proof has not received independent acceptance. The batch-47 definition says
that status explicitly and does not convert it into an accepted theorem.

### `post-qftx-rigid-supersymmetric-background`

The original postulate referred to a source spinor module restricted to a
`Spin(4) x SU(2)_R` action without defining that action. I repaired the item by
identifying `SU(2)_R` with the source's internal left factor acting on scalar
directions 5–8, stating its action on the quaternionic four-space, and fixing
the trivial R-bundle and zero connection. I then defined the complex
16-dimensional module
`(Delta_+ direct-sum Delta_-) tensor (V_R direct-sum V_0)` and the smooth group
representation
`(pi_+ direct-sum pi_-) tensor (tau direct-sum I)`. Here `V_R` is the defining
`SU(2)_R` module and `V_0` is a two-dimensional trivial multiplicity space.
The postulate now states the product-bundle quotient and local derivative using
that representation. It also specifies the round metric's Levi-Civita-induced
spin connection.

I made the spinor dimensions explicit: the normalized `epsilon` is
dimensionless, `tilde epsilon` has mass dimension one, `Q_epsilon` has mass
dimension one-half, and the coefficient of a physical infinitesimal
transformation is separate and has mass dimension minus one-half. The squared
generator and the corresponding flow parameter dimensions are stated
consistently with the length coordinates and radius.

Source evidence: Pestun, *Localization of Gauge Theory on a Four-Sphere and
Supersymmetric Wilson Loops*, §2.1 representation table (PDF pp. 8–9) gives the
four-dimensional chiral blocks and their `SU(2)_R^L`/`SU(2)_R^R`
representations; equations (2.5)–(2.14) give the conformal Killing spinors and
selected N=2 subspace. Sections 2.2 and 4.2 and Appendix C give the selected
off-shell generator, auxiliary spinors, and gauge-fixed algebra. I also checked
the §1 regulator caveat: the source assumes an S4 extension of the
noncommutative R4 regulator rather than constructing it. The postulate retains
that limitation and treats the other gauge-sector, lift, contour, and measure
data as formal assumptions.

### `ex-qftx-susy-flat-torus-geometric-background`

The quotient coordinate one-forms descend to a global coframe, the displayed
trivial spin lift uses the same `rho`, and its zero spin connection makes each
constant nonzero positive-chiral section parallel. The example asserts only
geometric spin/R and Killing-spinor input. I found no defect and made no edit.

### `ex-qftx-susy-round-s4-localization-data`

I repaired its statement to identify the spinor/R bundle with the explicit
module and representation fixed in the adopted S4 postulate. The statement is
now uninterrupted by hyperlinks and has enough content to type the source
spinors and their associated bundle. Its conditional square calculation
expands `Q=s+delta` separately on adjoint tensors, the connection, and ghosts;
the only use of the Cartan complex is on the finite-dimensional circle action
on `S4`, not on the infinite-dimensional field space. The proof remains
conditional on the postulated sectorwise lifts, zero-mode algebra, and formal
measure/regulator. I found no further defect.

## Dependency and consumer review

The realification theorem's three direct suppliers have the exact finite-
dimensional smooth hypotheses needed. The published associated-vector-bundle
result supplies a real vector-bundle atlas; the new theorem separately proves
the complex structure. The Riemannian, frame, orientation, principal-bundle,
connection, and Levi-Civita suppliers match the background definition's stated
geometry. No spin structure or Killing spinor is inferred to exist on an
arbitrary Riemannian four-manifold.

The batch-7 Cartan supplier defines the invariant polynomial-valued de Rham
complex for a compact torus action and proves its differential squares to zero
on invariant forms. Its displayed Borel quotient square commutes: both routes
send `(e,p)` to `[e]`. The batch-31 N=4 supplier is an adopted physical
postulate, not a proof of N=4 invariance. Its current statement matches the
round-sphere postulate's global group `SU(2)`, invariant form
`-2 Tr_2`, dimensionless coupling, connection-normalized fields, and
one-vector/three-adjoint-chiral content. The round-sphere item keeps the curved
action and regulator assumptions separate from that flat-space interface.

Because the spin-structure definition and S4 postulate statements changed, I
checked their current direct and indirect consumer closures. The changed
definition reaches batch-47 `post-qftx-rigid-supersymmetric-background`,
`ex-qftx-susy-flat-torus-geometric-background`, and
`ex-qftx-susy-round-s4-localization-data`; batch-48
`def-qftx-supersymmetry-fluctuation-complex` and
`pthm-qftx-qexact-localization-ward-identity`; batch-50
`post-qftx-s4-n2-localization-model`,
`pthm-qftx-n2star-u2-regulated-ward-identity`, and
`ex-qftx-s4-n2-partition-function`; batch-51
`def-qftx-instanton-equivariant-partition-series`,
`pthm-qftx-omega-background-fixed-point-expansion`, and
`ex-qftx-omega-u2-one-instanton-factor`; and batch-53
`def-qftx-physical-bps-index`, `def-qftx-superconformal-index`,
`pthm-qftx-physical-index-beta-independence`,
`pthm-qftx-superconformal-index-beta-independence`,
`ex-qftx-witten-index-finite-superpartner-pair`, and
`ex-qftx-superconformal-index-free-chiral`. The postulate also directly reaches
batch-48 `pthm-qftx-qexact-localization-ward-identity`. The standard round-S4
and flat-torus spin lifts satisfy the clarified double-cover convention; the
abstract consumers continue to take spin data as supplied. No consumer
interface or conclusion required repair. No out-of-batch file was edited.

The assigned items contain no TikZ/tikzcd diagram. I checked the diagrams in
the opened direct mathematical suppliers: the associated-covariant-derivative
square has the correct `rho(g^{-1})` coordinate transition in both rows, and
the Cartan Borel-quotient square commutes with the stated quotient maps.

## Page verdicts

- `qftx-susy-backgrounds` (A): pass. It is frontmatter-only, has the three
  assigned items in supplier-before-consumer order, and retains its prerequisite
  page inventory and `page_layout: compact-v1`.
- `qftx-susy-backgrounds-examples` (B): pass. It is frontmatter-only, retains
  its two examples and reciprocal companion requirements, and preserves
  `page_layout: compact-v1`.

Both pages have empty Markdown bodies; no summary was created or restored. All
assigned item statements are complete and hyperlink-free, with references in
their following reference sections.

## Contract and validation record

Updated `research/advanced-qft-supersymmetry-build-2026-10-23-batch-47.proof-contracts.json`
for the changed spin-structure and S4 interfaces. The dependent example's
current-source excerpts were refreshed for the S4 postulate, background
definition, and current N=4 supplier. The postulate formulation evidence now
records the explicit representation and dimensions. None of the three edited
items had a `verification.judge` record to remove.

After the final item edits, all three changed item paths passed reflow and
precheck. The required single batched `proof-layout` run reported 3 items, 6
steps, and 0 defects. Strict proof-contract validation of all five assigned
items reported 0 errors and 0 warnings. The local real-bundle proof's Lee
locator was checked against the complete Vector Bundle Chart Lemma 10.6.

## Unedited findings and blocker

No confirmed defect remains uneditable in the reviewed assigned claims or
their required dependency uses. There is no reader blocker. The batch-2
covariant-derivative item remains a draft supplier; its current local proof was
read and checked, and its draft/independent-acceptance status remains explicit.

## Coverage note

The five assigned items and two pages were opened, along with the listed direct
suppliers and relevant in-run consumer-use contexts. The current batch-2
covariant-derivative proof was checked locally; its listed Vákár and Neeb
external texts were not separately fetched. The round-sphere source review used
the cited passages from Pestun, Peelaers, and Festuccia–Seiberg; it did not
claim a full-text audit beyond those locators. Consumer checks outside batch 47
were focused on dependency closure and the actual uses of the changed
interfaces, not independent whole-item reviews of those batches. No further
content coverage is claimed.
