# Frontier 17, batch 2 — assignment-cap rebalance

This batch now owns the trigonometric-and-oscillatory pair formerly in batch 10.
The complete pre-rebalance artifacts are preserved in
`research/frontier-17-scope-repair-history/assignment-cap-rebalance/`.
No page, harvested result, proof contract, or mathematical disposition was removed.

# Frontier 17, batch 10 — post-scope-repair notes

This batch now owns only the trigonometric-and-oscillatory several-variables
pair. It moved intact from batch 4 so batch 4 could co-locate the new
regular-surfaces prerequisite with constant-rank. No page, item, source
disposition, or proof contract was discarded.

The full source and design notes for this pair remain preserved at
`research/frontier-17-scope-repair-history/batch-rebalance/frontier-17-batch-4.notes.md`.
Read the trigonometric sections there. The live manifest, coverage file, and
proof-contract file are authoritative for current batch ownership.

## Step-3 fix pass

- **B2-1 — applied.** Added
  `ex-surface-area-of-the-sine-solid-of-revolution` after the volume
  computation on the companion page. It applies the earlier
  `cor-surface-area-of-revolution-formula` and evaluates the area as
  2 pi times the sum of square root 2 and arsinh 1. The proof contract
  separates the surface-formula application, the derivative and oddness of
  arsinh, verification of the primitive, and the endpoint evaluation. Both
  OpenStax section 2.4 rows formerly deferred to
  `regular-surfaces-and-surface-integrals` now have `included`
  dispositions pointing to this item. The first APEX HTML record was read in
  full but its stamp attempt failed before HTTP with `EAI_AGAIN`. The
  mechanically stamped APEX Calculus II Version 2.0 treatment was therefore
  re-harvested rather than passed off as the same edition: section 7.4, Key
  Idea 28 and Example 214 carry the same surface formula and exact sine
  computation at
  `https://web.archive.org/web/20251010212618if_/https://www.vmi.edu/media/content-assets/documents/academics/appliedmath/CalculusII_Version2.pdf`.
  The exact archived URL already has the same-run full-body stamp in batches 4
  and 5 (4,378,900-byte PDF, SHA-256 prefix `2d2e86a1d18bb6a6`), and that
  durable stamp was reused for the identical URL before rerunning the checker.
  The expected component provenance is `statement: literature-derived` and
  `proof: ai-altered`: APEX supplies the exact construction and value, while
  the local proof is adapted to the earlier surface theorem and the library's
  inverse-function, real-power, and FTC results. Step 5 must put this archived
  APEX URL
  and the existing OpenStax section 2.4 URL in `sources.references`. No
  AI-generated-Statement truth-risk obligation is introduced.

- **B2-2 — applied.** Rebound
  `ex-volume-of-the-sine-solid-of-revolution` to the earlier
  `thm-volume-of-a-solid-of-revolution-by-discs`. Its strategy now uses that
  theorem for compact Jordan measurability and the disc integral, then
  evaluates only the remaining one-variable sine-square integral. The obsolete
  local reconstruction through Cavalieri, graph regions, disc area, and
  square-root continuity was removed from `deps`; the proof contract now
  quotes the exact planned disc-theorem clause and maps its use to step 1.1.
  Its expected provenance remains `statement: ai-altered`,
  `proof: ai-altered`, backed by OpenStax section 2.2 and adapted to the
  library's RC-5 theorem.

These dispositions supersede the archived pre-rebalance statements that
surface area was deferred and that no item used the volume page. The two
load-bearing cross-batch inputs are now explicit:
`thm-volume-of-a-solid-of-revolution-by-discs` on
`volumes-of-elementary-solids-and-solids-of-revolution` at order 288.00009,
and `cor-surface-area-of-revolution-formula` on
`regular-surfaces-and-surface-integrals` at order 288.00015. Both are earlier
than this pair at orders 288.00025–288.00026, and both planned Statements are
`literature-derived`. No load-bearing forward reference or external fallback
is used.

The exact-id search for
`ex-surface-area-of-the-sine-solid-of-revolution` was run over `items/`,
`research/plan-spec.json`, and every other live frontier-17 batch manifest
before insertion; it returned no occurrence. A semantic search for sine
surfaces of revolution found the two source theorems and no existing item with
this computed Statement.

The decomposition and corollary passes were rerun for the pair. The new
surface computation is one coherent example whose conceptual subclaims are
already separated in its proof contract; no reusable intermediate theorem or
noncosmetic corollary was found. The A page remains at one item and the B page
now has nine items, so no split or pruning is proposed.

### Gate record

- `coverage-checklist`: one A page, 25 harvested rows, zero errors, and the
  existing low-yield warning. The warning remains explained by the large
  `already-published` share; the formerly stale surface rows are now
  scaffolded.
- `source-fetch-check --stamp`: all six source records fetch-verified, with
  no newly stamped record.
- The exact isolated command
  `content-policy --manifest-only research/frontier-17-batch-2.pages.json`
  reports two `batch-dependency-missing` errors, naming exactly the two
  intended earlier cross-batch items. The checker resolves planned targets
  only from the manifests supplied in that invocation, so making this isolated
  form green would require removing B2-1/B2-2's mandated edges or duplicating
  another Beta's items. The whole-run manifest invocation, which supplies
  their owning manifests, checks 440 scoped items with zero errors and zero
  warnings; the narrower group-a invocation over batches 2, 4, and 5 likewise
  checks 132 scoped items cleanly.
- `validate-plan research/plan-spec.json`: pass on the current unspliced
  plan. Step 4 remains responsible for splicing these item lists.
- The contract consistency audit finds ten planned proof-bearing items, ten
  scope ids, ten contracts, all eight boundary cases exactly once per
  contract, no citation source absent from its consumer's `deps`, and no
  duplicate planned step. All 33 citations to published items are exact
  normalized substrings. The remaining planned-source clauses are the existing
  circular witness plus the volume and surface clauses quoted verbatim from
  their owning batches' durable Step-5 obligations.
- `prosecheck --warnings`: zero errors and no positional contradiction. Its
  count warnings occur only in this required scaffold audit record, not in an
  item title or page-summary draft.

## Step-5 authoring

### Authored items and component provenance

- prop-two-classical-counterexamples-in-polar-coordinates:
  statement: ai-altered, proof: ai-altered. Lebl sections 8.3 and 11.4 and
  the Toronto differentiation notes supply the polar and derivative
  conventions; the exact pair of identities and their domain split are adapted
  to the published Cartesian witnesses. The local calculation follows the
  sourced Pythagorean, double-angle, and tangent statements.
- cex-circular-curve-defeats-vector-valued-mean-value-equality:
  statement: literature-derived, proof: ai-altered. Lebl's unit-circle
  parametrization and derivative treatment supply the classical witness. The
  local verification was rewritten against this library's componentwise
  vector derivative, continuity, and Euclidean norm definitions.
- fs-the-mean-value-equality-holds-for-vector-valued-maps:
  statement: literature-derived, proof: ai-altered. The false universal
  equality and the surviving inequality are standard in the cited Lebl and
  Toronto treatments. The refutation delegates the explicit counterinstance to
  the immediately preceding circular-curve item and cites the published mean
  value inequality for the valid replacement.
- ex-sine-of-xy-and-its-mixed-partials: statement: ai-generated,
  proof: ai-generated, generation.role: example. The exact construction was
  formulated locally; Lebl and Toronto support only the derivative conventions.
  The proof calculates both first partials and both mixed partials from the
  published one-variable chain and product rules.
- ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives:
  statement: ai-generated, proof: ai-generated,
  generation.role: example. The exact construction and local proof were
  formulated here, with the cited treatments supplying only background
  conventions. The proof treats the origin separately, computes both
  punctured-plane partials, and uses positive indices only.
- ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient:
  statement: ai-generated, proof: ai-generated,
  generation.role: example. The exact radial construction and proof were
  formulated locally. The proof checks the origin from the total-derivative
  definition, derives the punctured gradient, and compares two explicit
  positive-index radial sequences.
- ex-sine-product-family-is-not-equicontinuous:
  statement: ai-generated, proof: ai-generated,
  generation.role: example. The exact family and witness points were
  formulated locally. The proof verifies compactness and member continuity
  before applying the equicontinuity definition, and it excludes the zero
  frequency explicitly.
- ex-volume-of-the-sine-solid-of-revolution: statement: ai-altered,
  proof: ai-altered. OpenStax section 2.2 supplies the disc-method
  construction; the Statement and verification are adapted to the earlier
  in-library disc theorem, which supplies compact Jordan measurability as well
  as the volume formula.
- ex-surface-area-of-the-sine-solid-of-revolution:
  statement: literature-derived, proof: ai-altered. OpenStax section 2.4
  and APEX section 7.4, Example 214 supply the surface formula and exact sine
  computation. The local proof is adapted to the in-library surface theorem,
  inverse derivative theorem, hyperbolic identities, real-power derivative,
  and FTC.
- fs-spherical-coordinates-are-globally-injective:
  statement: ai-altered, proof: ai-altered. The scaffold expected
  literature-derived, but the harvested Lebl material directly supports
  periodic angular nonuniqueness and polar coordinates rather than this exact
  three-variable closed-domain claim. The honest label is therefore
  ai-altered: the standard coordinate map is materially specialized to the
  seam, pole, zero-radius, and Jacobian assertions proved locally.

Every item retains its scaffold id, kind, title, and intended mathematical
claim. No planned item was dropped, merged, or renamed, so every live
included coverage disposition still names an authored file.

### AI-generated construction checks

The generated examples were checked analytically against their full domains and
by an independent bounded numerical comparison. A local Node calculation
compared the displayed derivative formulas with central differences at
coordinate-axis and interior sample points, then checked the explicit witness
formulas for positive indices 1 through 8; it reported no failure. This bounded
check is not recorded as finite_smoke, because none of the registered finite
combinatorial models applies and the calculation is not a proof.

- For ex-sine-of-xy-and-its-mixed-partials, the counterexample search covered
  both coordinate axes, the origin, and interior points. The formulas remain
  defined and both mixed partials agree.
- For the reciprocal-radius product, the search covered a possible failure of
  total differentiability at the origin, sign or power errors in both partials,
  the first permitted sequence index, and unboundedness of both rather than
  only one partial. No counterexample was found; the quadratic origin bound and
  the exact diagonal phase close the universal claims.
- For the radial oscillator, the search covered the origin, the square-root
  derivative off the origin, both gradient coordinates, and both reciprocal
  phase sequences. No counterexample was found; the two gradient values are
  exactly $(-1,0)$ and $(1,0)$.
- For the sine-product family, the search covered nonemptiness and compactness
  of the square, continuity of every member, the forbidden zero frequency, the
  first positive frequency, uniform boundedness, and the common-modulus
  quantifiers. No counterexample was found; the quarter-turn witness defeats
  every proposed equicontinuity radius.

### Scaffold-change ledger

- prop-two-classical-counterexamples-in-polar-coordinates drops
  def-p-norms-on-rn, because neither identity uses a norm.
- cex-circular-curve-defeats-vector-valued-mean-value-equality adds
  def-vector-valued-functions-limits-and-continuity,
  thm-componentwise-limits-and-continuity, and
  cor-differentiable-implies-continuous to verify the continuity hypothesis
  directly rather than relying on undeclared transitive facts.
- ex-sine-of-xy-and-its-mixed-partials replaces
  thm-chain-rule-for-total-derivatives,
  thm-algebra-of-total-derivatives,
  thm-clairaut-schwarz-mixed-partials, and
  def-jacobian-matrix-and-gradient with thm-chain-rule,
  thm-algebra-of-derivatives, and
  def-directional-and-partial-derivatives. The planned total-derivative
  algebra theorem does not contain a product rule, and Clairaut is illustrated
  rather than used to compute the formula.
- ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives
  replaces the two total-derivative calculation rules and the unused
  quarter-turn values with the one-variable chain and product rules,
  def-p-norms-on-rn, the exact period theorem, and the definition that makes
  $\pi$ positive. These are the facts actually used by the formulas and witness
  sequence.
- ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient
  replaces the two total-derivative calculation rules with the one-variable
  chain and product rules and adds the exact gradient, square-root derivative,
  origin-partial, and positivity inputs used in the proof.
- ex-sine-product-family-is-not-equicontinuous drops the cosine-zero theorem,
  sine derivative, C-k closure theorem, and total-differentiability continuity
  theorem. It adds the sharper published sine Lipschitz estimate and the
  Euclidean norm definition, which directly prove continuity of each member.
- ex-volume-of-the-sine-solid-of-revolution adds
  lem-integral-elementary-bounds for the integral of the constant function one.
- ex-surface-area-of-the-sine-solid-of-revolution adds
  thm-scalar-surface-integrals-on-a-surface-of-revolution so the hypotheses
  inherited by the corollary can be quoted exactly, and
  thm-continuous-implies-integrable for the FTC input.
- fs-spherical-coordinates-are-globally-injective adds the C-k closure theorem,
  differentiability-implies-continuity, and positivity of $\pi$ to verify the
  Jacobian definition and distinguish the seam points.

The false-statement item and the remaining titles and dependency lists match
the scaffold. The requested cross-reference from the circular witness to the
published polynomial witness, and the requested spherical cross-references,
were not added: those targets live only on other examples pages, and this
dispatch's B-page leaf rule forbids citations outside the owning A/B pair.

### Escalation and confidence

The batch-4 dependency cor-surface-area-of-revolution-formula has the correct
Statement, and that exact Statement is what the surface computation cites. Its
current title, outside this batch's write scope, incorrectly displays
$r''(s)^2$ instead of $r'(s)^2$. Step 6 should return that title typo to batch 4
or repair it under the in-flight audit authority before freezing judge text.

Confidence is high in the polar identities, circular mean-value witness,
partial-derivative formulas, explicit oscillatory sequences, and both sine
solid integrals. I checked every direct cited Definition or Statement on disk
before writing its Fact, including both earlier cross-batch results once they
appeared. I did not run either judge, did not audit another batch's proof, and
did not verify source material outside the harvested ranges.

### Per-item precheck result

- prop-two-classical-counterexamples-in-polar-coordinates: pass.
- cex-circular-curve-defeats-vector-valued-mean-value-equality: pass.
- fs-the-mean-value-equality-holds-for-vector-valued-maps: pass.
- ex-sine-of-xy-and-its-mixed-partials: pass.
- ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives: pass.
- ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient:
  pass.
- ex-sine-product-family-is-not-equicontinuous: pass.
- ex-volume-of-the-sine-solid-of-revolution: pass.
- ex-surface-area-of-the-sine-solid-of-revolution: pass.
- fs-spherical-coordinates-are-globally-injective: pass.

### Step-5 gate record

- Reflow reported every owned item unchanged on the final pass.
- Strict proof-contract validation checked the complete scope with no error or
  warning. The boundary audit examined every boundary row and found no
  contradicted or template-reuse candidate. Citation fidelity found every
  recorded quote in its declared source section and found no widening
  candidate.
- Finite smoke ran with no error and no applicable registered check. Risk
  routing classifies the analytic items for additional Step-6 review; no
  risk_review was written here because that disposition belongs to Alpha.
- Batch content policy passed with no error or warning. Coverage validation
  passed with the previously explained low-yield advisory. Source fetch check
  confirmed every coverage source has a full-body verification stamp.
- Rendercheck passed the owned items and both page files, including YAML, KaTeX,
  display-line, delimiter, and wikilink-in-math checks. Prosecheck passed the
  same files with no error or warning. Targeted citecheck reported no warning.
- The spliced plan validator passed. Repository-wide fwdcheck and extcheck
  passed. The repository-wide depcheck was run but remained red because other
  parallel Step-5 batches were incomplete: its output named missing planned
  items and malformed YAML titles outside batch 2, plus the pre-existing
  published sources_checked failure. No depcheck error named an owned item or
  page. This shared gate must be rerun by the engine after every Step-5 author
  has returned.
- No judge was run and no judge verdict was written.
