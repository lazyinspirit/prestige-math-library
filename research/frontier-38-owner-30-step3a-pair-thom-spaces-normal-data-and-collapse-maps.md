# Step 3a scope review — `thom-spaces-normal-data-and-collapse-maps`

- Run: `frontier-38-owner-30`; role alpha; label
  `step3a-pair-thom-spaces-normal-data-and-collapse-maps-8ffac0beb5a5706d`.
- Pair: A `thom-spaces-normal-data-and-collapse-maps` / B
  `thom-spaces-normal-data-and-collapse-maps-examples` (batch 14, orders
  547/548, differential topology). Owned pair only; no scaffold, item, owner
  record or sibling batch file edited.
- Decision: **sufficient** for the designed subject. The A page carries the
  design's 15 DT-16 rows and the B page its five leaves, in design order, with
  every design role present; no omitted topic, result or example, and no
  merger or enrichment of the subject proposed. One statement-level
  prerequisite is flagged below with a recommended same-page addition
  (owner call); it is a licensing gap, not a subject omission.

## Evidence read

- Design: `research/plan-differential-topology-track.md` §DT-16 (L928–972),
  the track summary row (L45–46) and the source-heading table (L1666).
  Binding owner direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  L84–89 — use Stanford 215B Lectures 14–15, pp. 44–46, Theorems 138–139 for
  collapse/Thom pullback-PD; May Ch. 23 §5, pp. 194–196 plus the published AT
  interfaces elsewhere; tubular charts must preserve the specified normal
  identification; do not assert unrestricted-chart independence. Drift verdict
  `no-drift`: `research/frontier-38-owner-30-alpha-step1-drift.md` L174–186.
- Manifests and plan: `research/frontier-38-owner-30-batch-14.pages.json`
  (A 15 items, B 5 items; `requires` and `companion` identical to
  `research/plan-spec.json` orders 547/548; all 20 plan rows are
  `design_row: DT-16`, `local_addition: true`); `research/frontier-38-owner-30-scope-ledger.json`;
  cross-batch input for batch 14 is `[]` and no unified edge in
  `research/frontier-38-owner-30-cross-batch-dependencies.json` touches the
  pair.
- Scaffold record: `research/frontier-38-owner-30-batch-14.notes.md` (full),
  `research/frontier-38-owner-30-batch-14.coverage.json` (all 21 rows),
  `research/frontier-38-owner-30-local-prereq-547.md` (full).
- Published statements read: `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`,
  `prop-thom-space-of-zero-and-trivial-bundles`,
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`,
  `def-tubular-neighbourhood-of-an-embedded-submanifold`,
  `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`,
  `def-pullback-vector-bundle-and-pullback-section`, `cor-local-normal-form-for-submersions`,
  `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`,
  `thm-relative-whitney-approximation-for-manifold-valued-maps`,
  `lem-continuity-is-local-and-pastes`,
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`,
  `def-countable-choice`, `def-axiom-of-choice`,
  `def-thom-class-by-fiberwise-normalization`,
  `thm-thom-isomorphism-for-oriented-vector-bundles`,
  `thm-naturality-and-uniqueness-of-thom-classes`,
  `def-euler-class-by-zero-section-pullback-of-the-thom-class`,
  `thm-poincare-duality-for-oriented-topological-manifolds`,
  `def-relative-cap-product`, `prop-cap-product-naturality-and-projection-formula`,
  `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls`.
  Proof correctness was not re-audited; Step 3b/5 own it.

## Inventory against the design

- A (15 items) = the design's rows 1–15 verbatim in ID and order: disk/sphere/
  Thom-space DT notation; metric independence; trivial-rank suspension smash
  product; empty/rank-zero conventions; stable normal bundle; embedding
  independence (common-ambient route); PT collapse with specified normal data;
  collapse continuity/smooth representatives; compatible-chart and radius
  independence; transverse preimage with pulled-back normal structure;
  transverse based homotopies give normal cobordisms; AT Thom-class/isomorphism
  interface; collapse pulls the Thom class back to the Poincaré dual;
  stabilization `Th(E⊕ε¹)≅ΣTh(E)`; spectrum/ownership seam. Every design
  "For" role has a carrier item; nothing is promised twice across pages, and
  the AT-owned Thom class/isomorphism is consumed as an interface with no
  reconstruction. 15 < 100.
- B (5 items) = the design's five leaves in order: trivial line
  (`ΣB_+`, point/empty cases); Möbius line (`Th(L)≅RP²` quotient model);
  explicit normal-framed equatorial collapse to `Sⁿ_+∧S¹` with projection to
  `S¹`; zero-section pullback is the Euler class; counterexample that
  unsuspended normal Thom data are embedding-dependent while one stabilization
  agrees. All use A-page items and add no B-only supplier.
- One substantive contract correction, owner-mandated: design item 9
  ("collapse is independent of tubular neighbourhood") is false unqualified —
  for `{0}⊂R` the charts `Φ₊(t)=t`, `Φ₋(t)=−t` induce `+1`, `−1` on the normal
  quotient and give non-homotopic based collapses. The scaffold keeps every
  commissioned claim but proves independence for the class whose induced
  normal derivative is the specified `α`, and exhibits the reflected line as
  the sharp boundary. This matches the binding direction (L84–89) and the
  drift review's reading; it is a hypothesis correction, not scope loss.
- Resolved design conflicts (already recorded in the batch notes): the design
  section names MS/MM/F/W as sources while its own source table names
  MS/Stanford 215B/May; the owner direction controls and the manifest follows
  it (Stanford 215B pp. 44–46; May Ch. 23 §5). The design's `Requires` line
  names `obstruction-theory-postnikov-towers-and-classifying-spaces` "for
  cohomological statements"; no item consumes obstruction theory — the
  cohomological content is the published AT Thom/PD/cap interfaces — and the
  plan's nine-page `requires` list controls.

## Source coverage

- Coverage matrix: 3 sources, 21 harvested rows — 6 `included`, 7 `inline`,
  3 `already-published` (Thom diagonal; fiberwise-normalized Thom class; Thom
  isomorphism), 5 `out-of-scope` with individual reasons (rational
  submanifold representability aside; product/multiplicative Thom
  `T(ζ×ξ)≅Tζ∧Tξ`; Thom's Stiefel–Whitney boundary theorem, owned by the
  smooth-cobordism pair; Hatcher Theorem 1.6 and Proposition 1.7
  endpoint-transport, deliberately not the route taken). I judge all five
  dispositions appropriate to this pair's scope.
- I re-fetched both texts and matched the recorded stamps exactly: Stanford
  215B 543,433 B, `sha256_16 7ac76c813f493ed7`; May 1,715,976 B,
  `sha256_16 6724f02748ed1f2f`. Direct reading confirms the load-bearing
  content: Stanford printed pp. 44–46 (PDF pp. 45–47) contains Theorem 138
  (the PD of `[S]` is the Thom class of the normal bundle), Theorem 139
  (`τ*u_S ∩ [M] = ι_*[S]`) and the complete displayed argument — Thom collapse
  `τ`, reduction to the fiberwise one-point compactification, compact-support
  Poincaré–Lefschetz duality, open-extension naturality and Thom-class
  uniqueness — plus the p. 46 cap-order remark (`⟨α∪β,a⟩=⟨α,β∩a⟩`, Bredon
  order), which is the library's cohomology-first, front-evaluation
  convention. May printed pp. 191–196 (PDF pp. 199–204) contains p. 193
  normal-characteristic-number well-definedness (the stable-normal claim),
  p. 194 fiberwise compactification, the disk/sphere quotient and the trivial
  bundle `B₊∧Sⁿ=ΣⁿB₊`, p. 195 the Thom diagonal and fiberwise-normalized
  `R`-orientation/Thom class, pp. 195–196 the Thom isomorphism and the unique
  `Z₂`-orientation, and p. 196 `T(ξ⊕ε)≅ΣT(ξ)` (stabilization). No retrieval
  failure; no `source_resolution` drop.
- The B Möbius and equatorial-collapse items have no dedicated harvested row;
  both are derived computations resting on the May `D/S` model. The Möbius
  verification is self-contained (`D(L)=[0,1]×[-1,1]/((0,t)~(1,−t))` with the
  antipodal-disk model of `RP²`); its design-given Milnor–Stasheff locator was
  superseded with the design sources, so a Step-3b source note may anchor it
  explicitly (minor, not scope-affecting).

## Prerequisite assessment

- Full transitive closure of the 20 items: 1,512 nodes, every one present as an
  item file; all 1,492 out-of-pair nodes carry `status: published`. No missing,
  forward or circular dependency; no item of another in-run batch depends on
  this pair (batch-14 cross-batch input `[]`).
- The nine declared `requires` pages are all published library pages
  (`smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`,
  `whitney-embedding-tubular-neighbourhoods-and-approximation`,
  `manifolds-with-boundary-collars-and-orientations`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `topological-vector-bundles-and-grassmannian-classification`,
  `leray-hirsch-thom-isomorphism-and-gysin-sequences`,
  `stiefel-whitney-and-euler-classes-by-universal-constructions`,
  `chern-and-pontryagin-classes-by-splitting-and-complexification`), and
  `node tools/validate-plan.mjs research/plan-spec.json` exits 0 with no
  undeclared-prerequisite finding for the pair.
- Planned consumers are later and outside this run's selected 30:
  `pontryagin-thom-and-framed-cobordism` (549), `characteristic-numbers-and-cobordism-obstructions`
  (553), `smooth-surgery-traces-and-handle-trading` (557),
  `characteristic-class-obstructions-to-immersions-and-embeddings` (571) and
  `exotic-smooth-structures-and-milnor-spheres` (579) each list this A page in
  `requires`; none has items yet, so no in-run consumer can be broken by this
  review. The B page requires A only.
- Published supplier statements match the uses in kind and hypotheses
  (orientations/compactness for cap-duality; CW-or-CW-type numerable bases and
  AC for the Thom class/isomorphism; closed embeddings and AC_ω for tubes;
  relative Whitney/transversality under AC_ω; ODE global existence and smooth
  parameter dependence for the stable-normal transport). No defective
  published prerequisite was found; the batch notes' one declaration-style
  variation (some published consumers state inherited AC_ω without declaring
  `def-countable-choice`) is correctly handled by the stricter batch-14 form.

## Flagged potential unmet prerequisite (statement level)

- Consuming item: `def-pontryagin-thom-collapse-of-an-embedded-submanifold`
  asserts "The tubular theorem supplies such charts", where a compatible
  tubular chart must induce precisely the specified normal identification `α`
  on the normal quotient (identity when `E=ν(S)`, `α=id`). Every downstream
  collapse item consumes that assertion (continuity, independence lemma,
  collapse/PD proposition, equatorial example).
- Required claim and hypotheses: under `AC_ω`, for a compact embedded smooth
  `S` without boundary in a boundaryless smooth manifold and a smooth bundle
  `E→S` with a smooth bundle isomorphism `α:E→TX|_S/TS`, there is a tubular
  chart `Φ` (diffeomorphism of a zero-section neighbourhood in `E` onto an
  open neighbourhood of `S`, `Φ(s,0)=s`) whose induced map on the normal
  quotient is `α`; in particular the chart produced by the published tubular
  construction induces the identity relative to the quotient normal bundle.
- Evidence for its absence as a stated claim: the published tubular theorem
  states only `Φ(0_p)=i(p)` (and openness); the published definition of a
  tubular neighbourhood adds no derivative condition, and a search of item
  statements finds no other item asserting a chart's induced normal
  identification. The published library in fact takes such data as supplied
  and asserts no canonical identification
  (`def-thom-diagonal-and-zero-section-collapse`: "no tubular-neighborhood
  existence theorem is asserted";
  `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition`:
  "No canonical such identification is asserted").
- Confirmed versus uncertain: it is confirmed that no published or scaffold
  statement carries the claim; it is also confirmed that the claim is
  mathematically true and available inside the published proof — the library's
  tubular theorem proof computes `dF_{(p,0)}(u,w)=di_p(u)+w` and sets
  `Φ=F∘Q^{-1}`, so its chart induces the identity on `ν(S)`, and precomposing
  with a bundle automorphism (transporting `α` across the identification)
  realizes any prescribed `α`. What is uncertain is only whether the Step-3b/5
  audit will treat a fact proved inside a published item as backing for a
  definitional existence assertion; the definition also does not explicitly
  say that `E` and `α` are smooth, although the collapse's smoothness uses it.
- Recommended scaffold addition (owner call): one short same-page lemma, e.g.
  `lem-tubular-charts-realize-a-prescribed-normal-identification`, with deps
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`,
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
  `def-pullback-vector-bundle-and-pullback-section`, `def-countable-choice`;
  it should state the smooth hypotheses and prove both the identity case (from
  the published construction) and the general `α` case (precomposition). The
  alternative of making the collapse definition conditional on supplied
  charts (the published AT precedent) is weaker for downstream PT use; the
  owner direction requires charts preserving the specified normal
  identification, so the lemma is preferable. If added, the pair scope hash
  changes and a fresh owner `proceed` receipt is required for the resulting
  scope; because the subject coverage itself is adequate and the gap is a
  one-lemma licensing point that 3b can close, I record `sufficient` and flag
  this for the owner rather than blocking the pair.

## Minor record notes (not scope-affecting)

1. Step-4 splice obligations (already recorded by the scaffold): relative to
   the plan rows, the batch deps add `def-countable-choice` (stable-normal
   definition, stable-normal theorem, collapse definition), plus
   `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`,
   `lem-continuity-is-local-and-pastes` and `cor-local-normal-form-for-submersions`.
   The plan inventory must be refreshed by the Step-4 splice.
2. Draft item files paraphrase the manifest contracts (manifest is the scope
   hash); no scope loss was found in the statements compared, and the draft
   files carry the full case distinctions (e.g. the trivial-line example's
   point/empty cases).
3. The design's unqualified chart-independence prose must not be reinstated at
   Step 4; the compatible-normal-data form is the commissioned scope.

## Scope judgement

The intended subject — Thom spaces and their metric/trivial/stabilization
computations, stable normal data and its embedding independence, the
Pontryagin–Thom collapse with specified normal data together with its
continuity, choice-independence and transverse-preimage/homotopy machinery,
the AT Thom-class interface, the collapse/Poincaré-dual proposition and the
spectrum ownership seam — is fully planned by the 15 A items, and the five B
leaves illustrate each computational face the design asked for. The pair is
new (not published), its planned consumers are later unbuilt pages, and no
in-run consumer depends on it. No omitted topic or result was found.

Next action: scope receipt recorded at
`research/frontier-38-owner-30-step3a-review-thom-spaces-normal-data-and-collapse-maps.json`
(decision `sufficient`, with the flagged prerequisite above in the reason);
Step 3b may author the 15 A and 5 B items against this scaffold, and the owner
should decide on the recommended tubular-chart lemma before or during that
authoring.
