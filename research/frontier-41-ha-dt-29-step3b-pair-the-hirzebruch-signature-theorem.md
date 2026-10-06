# Step 3b authoring report — `the-hirzebruch-signature-theorem`

- Run `frontier-41-ha-dt-29`; role alpha-high. Attempt 1
  (`step3b-pair-the-hirzebruch-signature-theorem-350b530fc75ab8c0`) wrote
  all 33 item drafts and checkpoints 1-4 below, then died mid-run; attempt 2
  (`step3b-pair-the-hirzebruch-signature-theorem-78881a71a42eca22`, this
  continuation) re-read every item against its inputs, repaired the defects
  found, ran the checks and recorded the item decisions.
- A page `the-hirzebruch-signature-theorem` (order 555, batch 12,
  `differential-topology`); B page `the-hirzebruch-signature-theorem-examples`
  (order 556, companion). Authoring and auditing only; no sibling or published
  content is edited.
- Inputs read at entry: `CLAUDE.md`, `README.md`, `SCHEMA.md`,
  `briefs/group-author.md`, the batch-12 manifest
  (`research/frontier-41-ha-dt-29-batch-12.pages.json`, 28 A + 5 B items), the
  batch-12 coverage and notes, the cross-batch ledger, the Step-3a report
  (`research/frontier-41-ha-dt-29-step3a-pair-the-hirzebruch-signature-theorem.md`)
  and its scope receipt, the owner authoring direction, `research/plan-spec.json`
  (orders 555/556), and the design `research/plan-differential-topology-track.md`
  §2/§9.3/§12.4.
- Sources re-read in full for this pair: Milnor–Stasheff *Characteristic
  Classes* §19 (scan pp. 219–226; PDF pages 214–221 of
  `/tmp/f41-milnor-stasheff.pdf`), Freed *Bordism: Old and New* §7.6 and §8.1–8.2
  (printed pp. 65–68; PDF pp. 64–67) and Lecture 11 (printed pp. 92–99; PDF
  pp. 92–98), Weston *An Introduction to Cobordism Theory* §19 (printed
  pp. 34–37), Lurie *The Hirzebruch Signature Formula* Lecture 25 (all 3 PDF
  pages).

## Owned IDs (33)

A page (28): `def-middle-dimensional-intersection-form`,
`lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate`,
`def-signature-of-a-closed-oriented-four-k-manifold`,
`lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals`,
`lem-a-half-dimensional-isotropic-subspace-forces-zero-signature`,
`lem-boundary-restriction-image-is-lagrangian`,
`lem-signature-is-additive-under-disjoint-union-and-orientation-reversal`,
`thm-signature-is-an-oriented-cobordism-invariant`,
`lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia`,
`thm-signature-is-multiplicative-under-cartesian-products`,
`def-formal-hyperbolic-tangent-series`,
`lem-formal-tangent-and-artanh-series-are-compositional-inverses`,
`lem-l-series-coefficient-identity-for-projective-spaces`,
`def-completed-fourfold-graded-cohomology-ring`,
`lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality`,
`def-hirzebruch-l-polynomials`,
`lem-l-polynomials-form-a-well-defined-multiplicative-sequence`,
`def-total-l-class-of-a-smooth-manifold`,
`lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism`,
`lem-l-class-of-complex-projective-space`,
`lem-l-genus-of-complex-projective-space-is-one`,
`lem-signature-and-l-genus-agree-on-complex-projective-spaces`,
`lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces`,
`thm-hirzebruch-signature-theorem`,
`cor-four-dimensional-signature-formula`,
`cor-eight-dimensional-signature-formula`,
`cor-signature-theorem-imposes-pontryagin-number-congruences`,
`rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions`.

B page (5): `ex-signature-and-p-one-of-complex-projective-two-space`,
`ex-orientation-reversed-complex-projective-plane-has-signature-minus-one`,
`ex-signature-of-s-two-times-s-two-is-zero`,
`ex-signature-is-multiplicative-on-products-of-projective-spaces`,
`cex-euler-characteristic-does-not-determine-signature`.

## Open obligations at entry

1. **Unfinished in-run suppliers (escalate where consumed).** The pair consumes
   six batch-11 items (`characteristic-numbers-and-cobordism-obstructions`) and
   two batch-2 items (`intersection-pairings-self-intersection-and-euler-classes`).
   No supplier item file exists yet at authoring time. Provisional interfaces
   were read from the batch-11/batch-2 manifests. The exact uses are:
   - `lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes`
     (b11) consumed by `lem-l-class-of-complex-projective-space` step 2.1,
     `lem-l-genus-of-complex-projective-space-is-one` step 2.1,
     `lem-signature-and-l-genus-agree-on-complex-projective-spaces` step 2.1 and
     `ex-signature-and-p-one-of-complex-projective-two-space` step 1.2.
   - `lem-kronecker-pairing-is-multiplicative-under-cross-products` (b11) consumed
     by `thm-signature-is-multiplicative-under-cartesian-products` step 3.1,
     `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` step 3.1 and
     `ex-signature-of-s-two-times-s-two-is-zero` step 2.1.
   - `lem-fundamental-class-of-a-product-of-closed-manifolds` (b11) consumed by the
     same three items.
   - `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas`
     (b11) and `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds`
     (b11) consumed by `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism`
     steps 2.1 and 3.1.
   - `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`
     (b11) consumed by `thm-hirzebruch-signature-theorem` step 3.1 (the spanning
     family). This is the pair's load-bearing supplier risk recorded in Step 3a.
   - `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` and
     `rem-cap-product-order-awaits-the-at-sign-convention` (b2) consumed by
     `def-middle-dimensional-intersection-form` (geometric clause).
   Consumer decisions for items whose proof steps consume these unfinished
   suppliers are recorded `escalate` until supplier and use are reconciled.
2. **Published compensation.** `def-hirzebruch-l-polynomials` declares
   `thm-choice-implies-dependent-implies-countable-choice` for the published
   `def-complex-flag-bundle-and-chern-roots` AC→DC bridge, per the Step-3a
   finding and the published ledger row.
3. **Per-item checks due at handoff:** explicit precheck, rendercheck,
   content-policy (whole run), strict proof contracts (batch-12 contract file),
   `item-dependency-levels check`, `validate-plan`, and one batched
   `proof-layout.mjs` over every changed item path.

## Checkpoint log

(per-item: ID — status — exact claim/conventions — source locators — deps —
decisions — checks — open gaps — next action)

1. `def-completed-fourfold-graded-cohomology-ring` — authored (level 0). Claim:
   $\widehat H^{4*}(B;\mathbb Q)=\prod_{j\ge0}H^{4j}(B;\mathbb Q)$ with
   componentwise addition, convolution product per degree, unit
   $(1,0,0,\dots)$, componentwise pullback; ring laws/naturality deferred to
   the `justified_by` lemma. Deps: published `def-singular-cohomology-ring`.
   Sources: MS §19 pp. 219–222. Local repair: manifest `justified_by` unchanged
   (verified the lemma depends on this definition). Checks: precheck
   (definition, no body), rendercheck OK, no in-run deps. Decision: `accept`
   (no unfinished supplier). No open gap.
2. `def-formal-hyperbolic-tangent-series` — authored (level 0). Claim:
   $T=(\exp x-\exp(-x))/(\exp x+\exp(-x))$, $A=\sum z^{2j+1}/(2j+1)$,
   $S=T/x$ even, $Q=x/T=1/S$ even with
   $Q=1+x^2/3-x^4/45+O(x^6)$; the expansion is verified in the inverse-series
   lemma (manifest `justified_by` extended by that lemma — local repair).
   Sources: MS §19 p. 224, Weston §19 p. 35, Lurie p. 1. Checks: precheck,
   rendercheck OK. Decision: `accept`. No open gap.
3. `lem-a-half-dimensional-isotropic-subspace-forces-zero-signature` —
   authored (level 0), proof by Sylvester normal form plus positivity of sums
   of squares; direct, not the scaffold's induction (shorter and complete).
   Local dep repair (manifest updated): added `def-euclidean-inner-product`,
   `thm-rank-nullity`, `thm-dimension-of-a-linear-subspace`. Sources: Freed
   Lemma 11.30 p. 96; MS Lemma 19.3(3) pp. 224–225. Checks: precheck PASS
   (direct), rendercheck OK. Decision: `accept`. No open gap.
4. `lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia` —
   authored (level 0): diagonalizes both factors, constructs $D=B\otimes C$
   by its diagonal matrix in the product basis, proves the simple-tensor
   formula, nondegeneracy, inertia $(pp'+qq',pq'+p'q)$. Local dep repair:
   added `thm-tensor-product-basis-from-bases` and
   `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`. Sources:
   Freed Exercise 11.25 p. 95; Weston §19 property (2) pp. 34–36. Checks:
   precheck PASS, rendercheck OK. Decision: `accept`. No open gap.

## Continuation — attempt 2 (`78881a71a42eca22`), 2026-10-06

### Entry state and re-verification

All 33 item drafts existed from attempt 1, but the checkpoint log covered only
items 1–4. I re-read all 33 files in dependency order against `SCHEMA.md`, the
batch-12 manifest, the coverage record and the source treatments
(Milnor–Stasheff §19; Freed §§7.6, 8.1–8.2 and Lecture 11; Weston §19; Lurie
Lecture 25), re-deriving the load-bearing computations by hand:

- `Q(x)=1+x^2/3-x^4/45` from the even/odd exponential parts, and
  $[z^{2k}](z/\tanh z)^{2k+1}=1$ for $k=0,2,4$ by exact rational arithmetic;
- $L_1=p_1/3$, $L_2=(7p_2-p_1^2)/45$ from $q_2=1/3$, $q_4=-1/45$, against
  $p(\mathbb{CP}^4)=(1+y^2)^5$ and $p_2[\mathbb{CP}^4]=10$, i.e. $(70-25)/45=1$;
- the middle-form, Lagrangian, additivity, product and genus computations
  step by step (every numbered step of every item was read).

No mathematical error was found in the proofs. Four mechanical/structural
defects were found and repaired, plus contract, manifest and ledger repairs.

### Repairs in this attempt

1. `lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality` step 1.2:
   the two associativity formulas were swapped; corrected to
   $((a\cdot b)\cdot c)_n=\sum(a_i\smile b_j)\smile c_k$ and
   $(a\cdot(b\cdot c))_n=\sum a_i\smile(b_j\smile c_k)$. Mathematics unchanged.
2. `lem-l-genus-of-complex-projective-space-is-one` step 3.1: dangling
   reference "Steps 1.1 and 1.2" corrected to "Steps 1.1 and 2.1".
3. `lem-boundary-restriction-image-is-lagrangian`: removed the dependency on
   the batch-24 item `lem-relative-cap-evaluation-identity` (homed on
   `exotic-smooth-structures-and-milnor-spheres`), which produced the fatal
   depcheck page cycle
   `exotic-smooth-structures-and-milnor-spheres -> the-hirzebruch-signature-theorem -> exotic-smooth-structures-and-milnor-spheres`.
   `[F6]` is now a cochain-level relative-cap/evaluation statement proved from
   published suppliers (`def-relative-cap-product`,
   `def-singular-cup-product-on-cochains`,
   `thm-cap-product-boundary-identity`, `thm-poincare-lefschetz-duality`,
   plus the absolute Kronecker well-definedness lemma), and step 1.2 is an
   equality chain $Q_M(i^*a,x)=\langle a,T_{2k+1}(\delta x)\rangle$.
   depcheck now reports no page cycle.
4. `ex-signature-of-s-two-times-s-two-is-zero`: removed the B/examples-page
   dependency `ex-fundamental-classes-and-duality-for-spheres-and-tori`
   (depcheck `[b-leaf-content]` violation) and derived the $S^2$ normalization
   from the published A-page items
   `def-fundamental-class-of-a-compact-oriented-manifold`,
   `thm-top-homology-characterizes-compact-orientable-manifolds` and
   `cor-homology-of-spheres`; step 1.1 adjusted accordingly.
5. `research/frontier-41-ha-dt-29-batch-12.pages.json`: the `deps` arrays of
   the two repaired items updated to match the item files; dependency levels
   unchanged (7 and 12) and re-verified.
6. `research/frontier-41-ha-dt-29-batch-12.proof-contracts.json`: repaired the
   structural defects (`D-3.1` named a missing step 1.2; boundary-evidence rows
   named missing steps 1.3 and 2.2) and updated the F2/F4/F6 citation
   contracts of the two repaired items, with verbatim quotes from the current
   supplier texts.
7. `research/frontier-41-ha-dt-29-batch-12.cross-batch-dependencies.json`: the
   two batch-2 item rows and the DT-12 page row are now `verified` after
   reading the final batch-2 texts; every remaining open row names the
   consumer, the consuming proof step and the exact required clause.

### Decisions (all 33 items; recorded via `step3-decisions.mjs record-item`)

Accepted (17, confidence 1): `def-completed-fourfold-graded-cohomology-ring`,
`def-formal-hyperbolic-tangent-series`,
`lem-a-half-dimensional-isotropic-subspace-forces-zero-signature`,
`lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia`,
`def-hirzebruch-l-polynomials`,
`lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality`,
`lem-formal-tangent-and-artanh-series-are-compositional-inverses`,
`lem-l-polynomials-form-a-well-defined-multiplicative-sequence`,
`lem-l-series-coefficient-identity-for-projective-spaces`,
`def-total-l-class-of-a-smooth-manifold`,
`def-middle-dimensional-intersection-form`,
`lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate`,
`def-signature-of-a-closed-oriented-four-k-manifold`,
`lem-boundary-restriction-image-is-lagrangian`,
`lem-signature-is-additive-under-disjoint-union-and-orientation-reversal`,
`lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals`,
`thm-signature-is-an-oriented-cobordism-invariant`.

Escalated (16, owner-held; exact supplier and consuming step in the recorded
reason and in the cross-batch input):

| item | level | unfinished supplier(s) | consuming step |
|---|---|---|---|
| `thm-signature-is-multiplicative-under-cartesian-products` | 8 | `lem-kronecker-pairing-is-multiplicative-under-cross-products`, `lem-fundamental-class-of-a-product-of-closed-manifolds` (batch 11) | 1.2 |
| `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` | 4 | `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds` (1.2); `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas`, `lem-kronecker-pairing-is-multiplicative-under-cross-products`, `lem-fundamental-class-of-a-product-of-closed-manifolds` (1.3) | 1.2, 1.3 |
| `lem-l-class-of-complex-projective-space` | 4 | `lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes` (batch 11) | 1.1 |
| `lem-l-genus-of-complex-projective-space-is-one` | 5 | same | 1.1 |
| `lem-signature-and-l-genus-agree-on-complex-projective-spaces` | 8 | same | 1.1 |
| `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` | 9 | transitive through the two rows above | 1.1–1.2 |
| `thm-hirzebruch-signature-theorem` | 10 | `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` (load-bearing; routes through batch 30 at range $r\ge n+2$) | 2.1 |
| `cor-four-dimensional-signature-formula` | 11 | transitive through `thm-hirzebruch-signature-theorem` | 1.1 |
| `cor-eight-dimensional-signature-formula` | 11 | same | 1.1 |
| `cor-signature-theorem-imposes-pontryagin-number-congruences` | 12 | same (via the two corollaries) | 1.1–2.1 |
| `rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions` | 11 | same | dependency clause |
| `ex-signature-and-p-one-of-complex-projective-two-space` | 12 | `lem-tangent-bundle-…` (1.2) and `cor-four-dimensional-signature-formula` (3.1) | 1.2, 3.1 |
| `ex-orientation-reversed-complex-projective-plane-has-signature-minus-one` | 13 | transitive through the two examples above | 1.2, 3.1 |
| `ex-signature-of-s-two-times-s-two-is-zero` | 12 | `lem-fundamental-class-of-a-product-of-closed-manifolds`, `lem-kronecker-pairing-is-multiplicative-under-cross-products` (3.1); `cor-four-dimensional-signature-formula` (5.1) | 3.1, 5.1 |
| `ex-signature-is-multiplicative-on-products-of-projective-spaces` | 13 | transitive through the product agreement and the spanning proposition | 2.1–4.1 |
| `cex-euler-characteristic-does-not-determine-signature` | 14 | transitive through the two projective-plane examples | 1.2, 4.1 |

### Checks actually run (attempt 2, actual results)

- explicit-path precheck over all 33 items: 26 proof-bearing items PASS, 0 failing.
- rendercheck over the 33 items and 2 pages: OK (35 files, all math and frontmatter parse).
- `proof-layout.mjs` over all 33 items: 33 items, 129 steps, 0 defects.
- `proof-contract.mjs --strict` on the batch-12 contracts: 0 errors, 1 advisory
  `shotgun-bracket` warning; `citation-fidelity --fail-on-missing-quote`: no
  missing quote; `boundary-audit --fail-on-contradicted --fail-on-template`:
  no upheld findings; `finite-smoke`: 0 errors; `risk-report`: 0 errors
  (routing only).
- `content-policy.mjs` (batch-12, item mode): 33 items, 0 errors, 0 warnings.
- `coverage-checklist.mjs … --require-destination`: 1 page, 50 rows, 0/0.
- `manifest-deps.mjs`: 33 items, 0 errors.
- `item-dependency-levels.mjs check --run`: no batch-12 item flagged (remaining
  errors belong to other pairs).
- `validate-plan.mjs research/plan-spec.json`: OK (warnings only, none on this pair).
- `depcheck.mjs` (repo-wide): the hirzebruch page cycle is gone; no error line
  names a batch-12 item. Remaining depcheck errors are other pairs' in-flight
  work.
- `fwdcheck.mjs`: no finding names a batch-12 item. `extcheck.mjs`: OK.
  `depsource.mjs`: OK (0 unresolved deps).
- `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`:
  blocked by `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json`
  (row status `available` is not in the allowed `open|verified|removed`). The
  batch-12 input itself was validated row by row (17 rows, correct ownership,
  no duplicates, evidence present).

### Added or replaced suppliers

No new item or page was added; the pair inventory is unchanged. Two manifest
dependency sets were replaced by published A-page suppliers:
`def-relative-cap-product` (for `lem-boundary-restriction-image-is-lagrangian`)
and `def-fundamental-class-of-a-compact-oriented-manifold` +
`thm-top-homology-characterizes-compact-orientable-manifolds` (for
`ex-signature-of-s-two-times-s-two-is-zero`). Removed dependencies:
`lem-relative-cap-evaluation-identity` (batch 24) and
`ex-fundamental-classes-and-duality-for-spheres-and-tori` (B page).

### Published concerns (preserved from Step 3a)

- `def-complex-flag-bundle-and-chern-roots` (published) uses AC ⇒ DC in its
  body while its `deps` omit `thm-choice-implies-dependent-implies-countable-choice`.
  `def-hirzebruch-l-polynomials` compensates by declaring that dependency and
  stating the exact use. The finding and the required later published repair
  remain recorded in `research/published-consumer-supplier-ledger.md`
  (lines 36488–36492). Confidence: confirmed contract omission, no mathematical
  error in the published item; this pair's claims do not depend on the missing
  edge itself.

### Open obligations at handoff

1. The 16 escalations above (owner-held): on closure of the six batch-11 items
   (and batch 30 for the spanning proposition), re-read each named consuming
   step against the final supplier text and resolve the decisions.
2. `research/frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json` must
   be corrected by its owner (status `available` is invalid) before the unified
   frontier ledger can refresh; then re-run the refresh command.
3. The load-bearing edge
   `thm-hirzebruch-signature-theorem` → `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`
   (and its batch-30 inputs at stability $r\ge n+2$) is the pair's principal
   supplier risk; it is flagged with the exact consuming step 2.1.

### Handoff

All 33 assigned items are authored and verified; 17 are accepted at confidence
1 with current dependency hashes, 16 are escalated with exact supplier,
consuming-step and required-clause evidence. Both pages, the batch-12 manifest,
the coverage record and the batch-12 proof contracts are consistent and pass
their gates. No sibling or published content was edited; no scope change was
made. Report file: this document.
