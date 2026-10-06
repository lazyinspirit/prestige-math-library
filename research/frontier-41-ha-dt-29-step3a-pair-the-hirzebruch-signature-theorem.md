# Step 3a scope review — `the-hirzebruch-signature-theorem`

- Run `frontier-41-ha-dt-29`; role alpha; label
  `step3a-pair-the-hirzebruch-signature-theorem-fa09b0eaf3da7ea3`.
- A page `the-hirzebruch-signature-theorem` (order 555, batch 12,
  `differential-topology`); B page `the-hirzebruch-signature-theorem-examples`
  (order 556, companion). Scope review only; no scaffold, manifest, coverage,
  plan or item file was edited.
- Inputs read: DT-20 prose design `research/plan-differential-topology-track.md`
  L1087–1127, with §2 row (L49), §9.3 harvest rows H097–H101 (L1804–1808),
  §12.4 exact `requires` row (L2236) and §12.5 (L2277, L2447);
  `research/plan-spec.json` orders 555/556; `…-batch-12.pages.json` (28 A + 5 B
  items), `…-batch-12.coverage.json` (4 sources, 43 harvested + 7 canonical
  rows), `…-batch-12.notes.md`, `…-batch-12.cross-batch-dependencies.json`
  (2 page + 15 item rows) and the derived `…-cross-batch-dependencies.json`;
  `…-scope-ledger.json`; `…-owner-authoring-direction.md`;
  `…-drift-evidence.json`; the 33 Step-1 readiness records; the in-run supplier
  manifests (batches 2, 9, 11, 30) and the batch-24 consumer manifest; the
  published AT/DT-15/linear-algebra/formal-series items named by the pair.
  Step 2 assign closed 2026-10-05T13:12:35Z; this is a fresh review (no prior
  scope receipt for this page; the sibling DT-19 review is the format model).

## Verdict

`sufficient` for `the-hirzebruch-signature-theorem`. The planned 28 A + 5 B
items realize every one of the design's 17 A rows and 5 B rows under their
designed ids, plus 11 locally justified support items (three added in the
documented §9 repair pass); nothing is dropped, weakened or rehomed. The
declared `requires` array is the §12.4 array verbatim, and the §12.5
DT-19/DT-20 repair ("Steenrod/Thom detection and Pontryagin normalization are
now hard dependencies") is honoured through the published
`def-pontryagin-classes-by-complexification` convention \(p_i=(-1)^i c_{2i}\)
and the in-run DT-19 statement \(p(T\mathbb{CP}^n)=(1+y^2)^{n+1}\) with
\(p_1[\mathbb{CP}^2]=3,\ p_2[\mathbb{CP}^4]=10\). All 112 distinct direct
dependency edges resolve (77 to published items, 35 to in-run batches 2/11/12);
the 2086-item transitive closure contains no unresolved id and no
non-`published` published carrier. No prerequisite needed by a planned claim
of this pair is absent from both the published library and the current
scaffold. The only open item is the scheduled Step-3 supplier re-read of the
load-bearing DT-19 spanning proposition (itself routed through the batch-30 AT
support pair), which is a tracked cross-batch obligation, not a scope defect.

## Design → scaffold mapping (scope, not proof)

| Design rows | Realization in `…-batch-12.pages.json` | Evidence |
|---|---|---|
| 1–4 (intersection form, symmetry/nondegeneracy, signature, well-definedness) | `def-middle-dimensional-intersection-form`, `lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate`, `def-signature-of-a-closed-oriented-four-k-manifold`, `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals` | statements as designed; the symmetric/nondegenerate lemma states rank, unimodularity of the free quotient, torsion kernel, and disjoint-union splitting; signature defined only in dimensions \(4k\) |
| 5–7 (boundary vanishing/cobordism invariance, additivity/orientation, product multiplicativity) | `thm-signature-is-an-oriented-cobordism-invariant`, `lem-signature-is-additive-under-disjoint-union-and-orientation-reversal`, `thm-signature-is-multiplicative-under-cartesian-products` (+ added `lem-a-half-dimensional-isotropic-subspace-forces-zero-signature`, `lem-boundary-restriction-image-is-lagrangian`, `lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia`) | the design's "half-dimensional annihilator" route is made precise by the local isotropic lemma; the §9 repair replaced a tautological rank step by the Lagrangian restriction-image lemma. All consumers of the added linear-algebra items are on the A page |
| 8–10 (L-polynomials, total L-class, L-genus homomorphism) | `def-hirzebruch-l-polynomials`, `def-total-l-class-of-a-smooth-manifold`, `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` (+ added `def-formal-hyperbolic-tangent-series`, `lem-formal-tangent-and-artanh-series-are-compositional-inverses`, `def-completed-fourfold-graded-cohomology-ring`, `lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality`, `lem-l-polynomials-form-a-well-defined-multiplicative-sequence`) | \(L_1=p_1/3\), \(L_2=(7p_2-p_1^2)/45\) from \(Q(x)=x/\tanh x\); uniqueness/multiplicativity from the fundamental theorem of symmetric polynomials (Milnor–Stasheff Lemma 19.1); total class typed in the completed fourfold ring so the broad CW-base scope of the published Pontryagin items is preserved |
| 11–12 (generator agreement) | `lem-signature-and-l-genus-agree-on-complex-projective-spaces`, `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` (+ added `lem-l-class-of-complex-projective-space`, `lem-l-genus-of-complex-projective-space-is-one`, `lem-l-series-coefficient-identity-for-projective-spaces`) | \(L(T\mathbb{CP}^n)=Q(y)^{n+1}\), \(L[\mathbb{CP}^{2k}]=1=\sigma(\mathbb{CP}^{2k})\); products handled by the two multiplicativity theorems. I verified \([z^{2k}]Q(z)^{2k+1}=1\) independently for \(k\le7\) by exact rational series arithmetic |
| 13–16 (theorem, 4- and 8-dimensional formulas, integrality corollary) | `thm-hirzebruch-signature-theorem`, `cor-four-dimensional-signature-formula`, `cor-eight-dimensional-signature-formula`, `cor-signature-theorem-imposes-pontryagin-number-congruences` | the theorem is stated only in dimensions \(4k\) and consumes the DT-19 spanning proposition; the corollaries match Milnor–Stasheff Corollary 19.5 and the Freed (11.55)–(11.57) integrality discussion. Independent check: \(p(\mathbb{CP}^4)=(1+y^2)^5\) gives \((7\cdot10-25)/45=1\) |
| 17 (bookkeeping remark) | `rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions` | states that the zero extension is not a geometric definition in other dimensions |
| B rows 1–5 | `ex-signature-and-p-one-of-complex-projective-two-space`, `ex-orientation-reversed-complex-projective-plane-has-signature-minus-one`, `ex-signature-of-s-two-times-s-two-is-zero`, `ex-signature-is-multiplicative-on-products-of-projective-spaces`, `cex-euler-characteristic-does-not-determine-signature` | same ids as the design; the counterexample's connected-sum pair was replaced by \(\mathbb{CP}^2\) vs \(-\mathbb{CP}^2\) (same \(\chi=3\), signatures \(\pm1\)) to avoid importing unpublished connected-sum additivity — a scope-conserving adaptation recorded in the batch notes |

Page caps and leaf rule: 28 + 5 = 33 items (cap 100); the B page depends only
on its own A page, published items, and A-page items of in-run supplier pairs.
The 11 added items are local prerequisites/proof steps inside the pair, not new
scope (each is mapped above and in the batch-12 notes §2 and §9).

## Source coverage

- Four full treatments, all fetch-verified (4/4) and live (4/4): Milnor–Stasheff
  *Characteristic Classes* Ch. 19 in full (original pp. 219–230) plus §15.6 and
  §18.9; Freed *Bordism: Old and New* §7.6, §8.1–8.2 and Lectures 11–12;
  Weston *An Introduction to Cobordism Theory* §18–§19; Lurie *The Hirzebruch
  Signature Formula* (3-page lecture, short-document reading receipt).
- Dispositions: 50 result rows (43 harvested source rows + 7 canonical
  local-support rows), 0 errors, 0 warnings. The 43 source rows: 28 included,
  3 inline, 1 already-published, 5 deferred with named destinations, 6
  out-of-scope with specific reasons; the 7 canonical rows are all included
  local-support rows (tensor inertia, the formal tanh/artanh and residue
  series, the Lagrangian boundary image, and the completed fourfold-graded
  ring). Declined material has reasons: Corollary 19.6 (oriented homotopy
  invariance), Wu's mod-\(\ell\) Theorem 19.7 and Problems 19-A–C lie outside
  the commissioned page; the K3/E8/Rohlin block is spin/lattice material not
  used here; Weston's Wall Theorem 18.5 is stated without proof and is never
  used.
- Locator honesty: the design's "TW §19, pp. 34–36" was widened to pp. 34–37
  (the final substitution step is on p. 37) and "F Lectures 11–12, pp. 92–105"
  to include §7.6 and §8.1–8.2 (pp. 65–68), because the design's own L-genus
  rows are Freed Proposition 8.2/8.8; both extensions only widen the read
  range. The Milnor–Stasheff scan is located by chapter/section with the
  original pagination quoted (re-typeset folios recorded).

## Prerequisite findings (unmet-prerequisite check)

- **Confirmed available (no gap).** Direct deps: 112 distinct (77 published /
  35 in-run, batches 2, 11, 12). Transitive closure: 2086 items (2017 published
  + 69 in-run), 10,476 edges, 0 unresolved, 0 published carriers with a
  non-`published` status. In-run closure pages are exactly
  `characteristic-numbers-and-cobordism-obstructions` (DT-19),
  `intersection-pairings-self-intersection-and-euler-classes` (DT-12),
  `pontryagin-thom-and-framed-cobordism` (DT-17) and
  `thom-spectra-and-unoriented-bordism-detection` (AT support), all reached
  through DT-19's spanning proposition, all inside the owner-approved scope.
- **Supplier interface re-read at scaffold level.** The DT-19 spanning
  proposition (`…-batch-11`), tangent-bundle lemma, Kronecker-multiplicativity
  and product-fundamental-class lemmas, and DT-12's geometric-intersection
  theorem and cap-convention remark all exist with statements matching the
  exact uses named in `…-batch-12.cross-batch-dependencies.json`.
- **Published-compensation record (tracked, not a scope gap).** Published
  `def-complex-flag-bundle-and-chern-roots` has a dependency-contract omission
  (its body uses "AC implies DC" but its `deps` omit the proved bridge). The
  pair compensates by declaring the published
  `thm-choice-implies-dependent-implies-countable-choice` at
  `def-hirzebruch-l-polynomials`; the finding and the required later published
  repair are recorded in `research/published-consumer-supplier-ledger.md`
  (lines 36488–36492). No claim of this pair depends on the missing edge
  itself.
- **Uncertainty, recorded honestly.** (i) The signature theorem's final step
  consumes DT-19's `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
  whose proof routes through the batch-30 AT support items with the strict
  stability range \(r\ge n+2\). This is the pair's only material supplier risk;
  the derived cross-batch ledger keeps the edge open for the Step-3 author's
  final re-read. It is another pair's scope, but if it fails to close the
  theorem's proof route needs an owner decision. (ii) The three added §9 items
  (`lem-boundary-restriction-image-is-lagrangian`, the completed fourfold
  graded ring definition and its laws lemma) are local support whose proofs
  must still be authored at Step 3b; their scope is inside the pair.

## Library role and consumers

- The pair is the commissioned characteristic-class application of the DT
  track: signature defined by the middle form, made a rational bordism genus,
  and identified with the L-genus, with the 4- and 8-dimensional formulas and
  the divisibility corollaries as the low-dimensional checks.
- Declared consumer: `exotic-smooth-structures-and-milnor-spheres` (batch 24)
  requires this A page; its `thm-milnor-lambda-invariant-is-well-defined-modulo-seven`
  uses only `cor-eight-dimensional-signature-formula` (on the glued closed
  8-manifold) together with `def-middle-dimensional-intersection-form` and
  `def-signature-of-a-closed-oriented-four-k-manifold` through its own local
  gluing/relative-form lemmas. The interface is adequate; the batch-24 edge is
  open in the ledger only as a Step-3/5 supplier-availability record.
- No other current-frontier page requires this A page; the published-library
  side is unaffected.

## Checks run (actual results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-12.pages.json` | 33 items, 0 errors |
| dependency resolution scan (direct + transitive closure from the pair) | 112 direct (77 published / 35 in-run); 2086-item closure, 0 missing, 0 non-published |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs …batch-12.coverage.json --require-destination` | 1 page, 50 rows, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-12.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| `node tools/url-sweep.mjs --coverage …batch-12.coverage.json --recover --fail-on-dead` (out to `/tmp`) | 4/4 live, 0 failed, 0 recoverable, 0 suspect |
| `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | 883/883 ready, closed |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 883 items, 60 pages, no error |
| `node tools/drift-review-check.mjs --run frontier-41-ha-dt-29` | 30 pages, 0 blocked edges |
| independent series check (exact rational arithmetic, Python `fractions`) | \(Q(z)=1+z^2/3-z^4/45+2z^6/945-\cdots\), \([z^{2k}]Q^{2k+1}=1\) for \(0\le k\le7\); \((7\cdot10-25)/45=1\) |

## Scope decision

Recorded via `node tools/step3-decisions.mjs record-scope --run
frontier-41-ha-dt-29 --page the-hirzebruch-signature-theorem --decision
sufficient --reason "…; report path
research/frontier-41-ha-dt-29-step3a-pair-the-hirzebruch-signature-theorem.md"`.
Receipt: `research/frontier-41-ha-dt-29-step3a-review-the-hirzebruch-signature-theorem.json`
(scope-hash bound to the current batch-12 A/B bytes), recorded 2026-10-05T13:24:52Z
with `sha256 = 990c2caf79d4f82360a48436dfeba02d2d0b947f01eb2460efab404344a21813`;
`step3-decisions.mjs check --phase scope` no longer lists this pair as open.
