# Frontier-31a Step 6c — cross-batch audit and closure

**Run:** `frontier-31a`  
**Role:** lead Alpha (`6c-lead`)  
**Computed scope:** 26 saved cross-group edges, 5 saved forward references,
0 saved post-6b changes; after the licensed repairs, 1 introduced cross-group
edge and 7 current post-6b item-carrier changes.  
**Disposition:** every computed mathematical obligation is decided and applied.
The full Step-6 closure battery remains blocked by pre-existing/out-of-scope
repository state and unavailable DNS, listed below. No stage transition or
judge action was taken.

## Evidence basis

I read the saved work list, current citing and cited carriers, the relevant
reader/refuter artifacts, current group-Alpha dispositions, prior-retry
evidence, and the post-6b carrier snapshots. Reports were used only as routing
evidence: every decision below was rechecked against the current item text and
exact target statement. The machine record is the 39-row append-only file
`research/frontier-31a-6c-verdicts.jsonl`; all rows carry current item or
composite-carrier hashes and explicit `defect_ids` (empty for clean outcomes).

## Cross-group edges

| citing item | cited item | disposition and evidence |
|---|---|---|
| `def-l-and-nl` | `def-read-only-input-workspace-classes` | accurate — identical read-only-input work-tape convention for L/NL |
| `def-schur-multiplier-of-a-group` | `def-group-homology-as-a-derived-functor` | accurate — supplies the integral derived-functor meaning of degree-two homology |
| `def-superperfect-group` | `def-group-homology-as-a-derived-functor` | accurate — supplies the integral degree-one and degree-two homology convention |
| `fs-flat-modules-have-projective-dimension-zero` | `def-projective-dimension-of-an-object` | accurate — dimension zero is projectivity, contradicted by the flat nonprojective witness |
| `lem-five-term-homology-sequence-for-a-free-presentation` | `def-group-homology-as-a-derived-functor` | accurate — same integral group-homology terms and coefficients |
| `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion` | `def-group-homology-as-a-derived-functor` | accurate — same positive-degree integral homology convention |
| `lem-the-cohomology-universal-coefficient-extension-map` | `def-balanced-ext-bifunctor` | accurate — correct balanced Ext object and variance |
| `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` | `def-balanced-ext-bifunctor` | accurate — correct module handedness and positive Ext degrees |
| `prop-the-integers-have-weak-and-global-dimension-one` | `thm-the-integers-have-global-dimension-one` | accurate — exact global-dimension fact used by the proposition |
| `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` | `def-left-and-right-global-dimension-of-a-ring` | accurate — exact left/right suprema compared in the claim |
| `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` | `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` | accurate — application to the trivial group-ring module has the required all-coefficients quantifier |
| `thm-higher-tor-over-the-integers-vanishes` | `thm-the-integers-have-global-dimension-one` | accurate — length-one resolutions kill Tor in degrees at least two |
| `thm-immerman-szelepcsenyi-nl-equals-conl` | `def-read-only-input-workspace-classes` | accurate — identical nondeterministic workspace and complement conventions |
| `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` | `lem-acyclic-assembly-by-exact-columns` | struck — the target is a double **cochain** lemma but the citing object is a double **chain** tensor complex; step 1.1 now proves the finite mapping-cone filtration directly (`frontier-31a-S6c-edge-tor-columns`) |
| same Tor theorem | `lem-acyclic-assembly-by-exact-rows` | struck — the same chain/cochain type mismatch occurred for the row edge; the direct row filtration is now explicit (`frontier-31a-S6c-edge-tor-rows`) |
| `thm-nl-is-contained-in-dspace-log-squared-n` | `def-read-only-input-workspace-classes` | accurate — exact read-only-input workspace measure used by the simulation bound |
| `thm-read-only-input-savitch-simulation` | `def-read-only-input-workspace-classes` | accurate — exact machine model and work-space accounting |
| `thm-the-bar-cochain-complex-computes-derived-group-cohomology` | `def-direct-sum-total-complex-on-finite-diagonals` | accurate — first-quadrant finite-diagonal signed totalization |
| same bar theorem | `def-hom-double-complex-of-a-projective-and-an-injective-resolution` | accurate — exact Hom double cochain construction and signing convention |
| same bar theorem | `lem-acyclic-assembly-by-exact-columns` | accurate — unlike the Tor use, this is a typed double-cochain application with exact augmented columns |
| same bar theorem | `lem-acyclic-assembly-by-exact-rows` | accurate — typed double-cochain application with exact augmented rows |
| same bar theorem | `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact` | accurate — projective resolution terms give the required exact Hom columns |
| same bar theorem | `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact` | accurate — injective resolution terms give the required exact Hom rows |
| same bar theorem | `lem-the-two-hom-double-complex-differentials-commute-before-signing` | accurate — supplies the commutation identity needed before signing |
| `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two` | `def-group-cohomology-as-a-derived-functor` | accurate — exact resolution-derived group-cohomology convention |
| same group UCT theorem | `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` | repaired — this target proves natural exactness but not splitting; its use is now limited to exactness (`frontier-31a-S6c-edge-group-uct-splitting`) |
| same group UCT theorem | `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` | accurate introduced edge — the target states precisely existence after choices and disclaims a natural splitting |

No edge above has an unresolved mathematical blocker.

## Forward references

All five receive the task vocabulary `lemmas-added`: the load-bearing witness
and calculation are now present in the citing carrier, and each current
frontmatter block has no `forward_refs` field.

| citing item → former target | evidence and disposition |
|---|---|
| `fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous` → `cex-the-cantor-function-fails-luzin-property-n` | inlined the Cantor set, `C(K)=[0,1]`, failure of property (N), and AC-implies-N contradiction (`frontier-31a-S6c-forward-bv-cantor`) |
| `fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz` → the same Cantor target | inlined `C(0)=0`, `C(1)=1`, and `C'=0` a.e., so the endpoint increment differs from the integral (`frontier-31a-S6c-forward-newton-cantor`) |
| `fs-absolute-continuity-is-preserved-under-composition` → `cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous` | inlined AC factors `g(x)=x^2 sin^2(1/x)` and `h(y)=sqrt(y)` and the infinite variation of `|x sin(1/x)|` (`frontier-31a-S6c-forward-ac-composition`) |
| `fs-luzin-property-n-implies-absolute-continuity` → `cex-luzin-property-n-does-not-imply-absolute-continuity` | inlined `x sin(1/x)`, the countable Lipschitz-cover proof of (N), and the infinite-variation obstruction (`frontier-31a-S6c-forward-luzin-n`) |
| `rem-noncompact-flow-completeness-is-an-extra-hypothesis` → `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` | inlined `f=-x^3/3`, `x'=x^2`, and `x(t)=x_0/(1-x_0t)` with finite blow-up (`frontier-31a-S6c-forward-noncompact-flow`) |

No forward-reference obligation remains unresolved.

## Current post-6b carriers

Seven `kind:"item"` outcomes are accepted with current composite hashes:
the four batch-2 false statements above, the batch-20 noncompact-flow remark,
the batch-9 Tor theorem, and the batch-1 group UCT theorem. Their affected
proof-contract rows were synchronized. The two high-risk theorem contracts
also contain complete `alpha-6c-lead` risk reviews covering typing, zero and
degenerate cases, choice scope, finite diagonals, and naturality. No item or
page was added or removed, and no page content or reading order was changed.

The nine non-clean outcomes own nine distinct closed `6c-cross` defect rows.
`node tools/defect-ledger.mjs validate --run frontier-31a` checks 472 run rows
with zero errors, and the generated ledger view was refreshed atomically.

## Validation and closure-gate results

- PASS: focused precheck on the six proof-bearing edited items (`6 checked, 0 failing`) and real-KaTeX/YAML rendercheck on all seven edited items.
- PASS: strict per-batch contracts for batches 1, 2, and 9; after merge, `704/704` strict contracts pass, finite-smoke performs its live check, risk-report has `0` errors, boundary-audit has no contradicted/template disposition, citation-fidelity finds no missing quote or widening candidate, and gate-liveness is live.
- PASS: `cross-group-edges check` both with `--reconcile-plan` and again against the reconciled tree: 26 saved edges, 5 saved forwards, 0 saved post-6b changes, 0 errors. The checker also accepts the introduced edge and all seven introduced item changes.
- PASS: final Step-6 routing (`910` items, `374` adjudication obligations, `0` errors), plan validation, content policy (`910` items), manifest integrity (`54/54` pages), splice verification, repo-wide precheck/depcheck/fwdcheck/extcheck/rendercheck/prosecheck/depsource/pathcheck, and 21 of 22 coverage files.
- PASS after repair cycle 1: batch-14 no longer claims the draft `lem-sheaf-condition-check-on-basis` as already published. The source result is deferred to its resolvable owning page `presheaves-sheaves-stalks-and-sheafification`, where the repaired lemma remains draft pending independent certification; neither publication status was restored.
- BLOCKED, prior impact dispositions: both canonical impact commands write their receipts but exit nonzero because numerous prior receipt entries still have invalid/unresolved status and no concrete review note. The tail includes `thm-verma-module-has-a-unique-simple-quotient` in the pre-author→post-6b receipt and multiple Tor/UCT consumers in the post-6b→current receipt. These are not computed 6c edge/forward/carrier obligations.
- BLOCKED, environment: the exact URL gate collected 76 URLs but DNS resolution was unavailable for every host (`curl: (6) Could not resolve host`), yielding `0/76 live`. This is a mechanical outage, not a mathematical defect, so no defect or gate-verdict row was invented.

## Remaining blocker

The computed 6c queue itself is closed, and repair cycle 1 closes the
`coverage-14` primary gate without restoring withdrawn publication status.
Step 6 as a repository stage is not closable from this dispatch until the
prior impact-disposition receipts are completed by their owning workflow and
the URL gate is rerun in a network-capable environment. No judge stamp or
stage transition has been requested or made.

## Repair cycle 1 — `coverage-14`

- Live page: `affine-schemes-and-the-structure-sheaf`.
- Confirmed nonfatal contract defect: the batch-14 coverage row for Milne
  10.5 retained `already-published` after the published-dependency repair
  moved `lem-sheaf-condition-check-on-basis` and its owning page to `draft`.
- Current mathematical evidence: the reader's proof-order finding is repaired
  on disk—basis-overlap compatibility is proved before gluing, and the global
  selections have an explicit Axiom-of-Choice hypothesis. The Step-8 published
  repair receipt expressly leaves the item and page draft pending independent
  certification. Refuter 14 inspected this dependency for citation-flow
  context and reported no additional finding within its own scope.
- Disposition: changed only the stale coverage row to `deferred`, with the
  resolvable destination `presheaves-sheaves-stalks-and-sheafification` and a
  reason specific to the pending certification. No item, page, proof contract,
  manifest, reading order, or publication status changed in this repair.
- Focused gate: `node tools/coverage-checklist.mjs
  research/frontier-31a-batch-14.coverage.json` reports 1 page, 38 harvested
  results, 0 errors, and 0 warnings. The stricter rerun with
  `--require-destination` has the same result.
- The advisory impact and audit-manifest failures remain outside this repair
  dispatch and are not decided here.

## Repair cycle 2 — `impact-audit`

- Live artifact: `research/frontier-31a-impact.json`, auditing the exact
  `pre-author` to `post-6b` touch-ledger window. The reproduced primary gate
  computed 911 changed public interfaces and 787 affected items; its only
  defects were the receipt's blank reviewer and 787 pending/blank
  dispositions, not a mathematical item defect.
- Scope and evidence: the receipt's changed-interface and required-review
  arrays exactly match a fresh computation. Every affected item is itself a
  same-window changed interface, so all 787 outcomes are `repaired`; there is
  no byte-stable published consumer to classify `still-licensed`. For each
  item, the receipt now names its batch, page, complete changed-source cone,
  direct changed-interface citations (if any), and current evidence carrier.
- Carrier verification: the 787 current carriers partition into 88 exact
  post-reader carriers retained through post-6b, 372 exact post-6b carriers
  for items introduced or completed after the reader snapshot, 322 carriers
  with a matching current-hash group-Alpha 6b decision, and 5 carriers with a
  matching accepted 6c item verdict. All 22 reader-findings hashes and all 22
  refuter-report hashes match their frozen Step-6 scope records. The seven
  total post-6b item changes all have current accepted 6c item verdicts; five
  lie in this impact set.
- Disposition: populated the reviewer and all 787 item-specific receipt rows.
  No item, proof contract, page, manifest, dependency, citation, ledger, or
  verdict row changed. This is a receipt-only mechanical closure, so the
  append-only verdict file remains at 40 rows with SHA-256
  `bb0436a6a988b8b3561d44d51ecbed77581f71aea8f9978c01e0bb5877dafa5f`.
  Its `kind:"gate"` schema requires a concrete owned defect and current
  item/page subject; inventing either for a blank receipt would violate the
  repair protocol.
- PASS: exact primary command `node tools/impact-audit.mjs --touches
  research/frontier-31a-touches.json --from pre-author --to post-6b --receipt
  research/frontier-31a-impact.json` reports 911 changed interfaces, 787
  affected items, and exits 0.
- PASS: strict proof contracts (`704/704`, zero errors/warnings), depcheck,
  fwdcheck, cross-group verdict currency (26 edges, 5 forwards, 0 unresolved
  post-6b changes, 0 errors), and whitespace validation of the two authorized
  repair artifacts.
- The advisory `impact-audit-6c` and `audit-manifest` failures remain outside
  repair cycle 2 and were neither edited nor decided here. No judge action or
  stage transition was requested or made.

## Repair cycle 3 — `impact-audit-6c` receipt completion

The exact primary command was reproduced against the current workspace:

```text
node tools/impact-audit.mjs --touches research/frontier-31a-touches.json --from post-6b --current --receipt research/frontier-31a-impact-6c.json
```

Before repair it recomputed seven changed public interfaces and 51 affected
items, then failed solely because the new receipt had an empty `reviewer` and
51 `pending` rows with blank notes. The computed impact set consists of 49
logical consumers (five of them also direct citation consumers) of
`thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`
and two logical/direct consumers of
`thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two`. The
other five changed interfaces have no logical or citation consumer.

### Current evidence and dispositions

Every affected item body was opened and checked against the current changed
source, its dependency path, and its displayed claim. Forty-seven current item
bodies remain byte-identical to the corresponding frozen post-6b item
snapshots in `research/frontier-31a-step6-hash-1-post-6b.json` or
`research/frontier-31a-step6-hash-9-post-6b.json`. Four batch-9 proof bodies
and their exact proof contracts were repaired during this cycle, as recorded
below. The frozen reader/refuter reports were treated only as historical
evidence: their hashes remain those recorded in the Step-6 scopes, while their
former missing-carrier findings had already been superseded by the post-6b
authoring and Alpha-b adjudication. In particular, the reports could not
pre-clear the four later-authored witnesses because those carriers did not
exist when the independent reads ran.

The current Tor balance theorem has composite carrier hash
`3277e64a1a99cc09148673f23d8e07ec9408bdac2c0714aae84bd97e2c7326e5`.
Its finite mapping-cone filtrations give both edge-to-total
quasi-isomorphisms, and its comparison-map square gives naturality; the
coherence proposition separately records independence of resolution choices.
Accordingly, the repair that removed two ill-typed cochain-assembly citations
did not weaken the natural balanced Tor interface. The 45 unaffected items in
the Tor cone are disposed `still-licensed` item by item:

- direct balance/coherence consumers:
  `def-balanced-tor-bifunctor`,
  `fs-the-two-tor-constructions-are-equal-by-definition`,
  `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`,
  `thm-long-exact-tor-sequence-in-the-right-module-variable`, and
  `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric`;
- UCT and choice consumers:
  `ex-a-nonzero-tor-correction-in-universal-coefficients`,
  `ex-uct-homology-with-z-mod-m-coefficients`,
  `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition`,
  `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term`,
  `lem-the-universal-coefficient-tor-obstruction-map-for-homology`,
  `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally`, and
  `thm-universal-coefficient-theorem-for-homology-over-a-pid`;
- Kunneth consumers:
  `cor-kunneth-over-a-field`,
  `cor-kunneth-when-one-homology-family-is-flat`,
  `ex-euler-characteristic-of-a-tensor-product-complex`,
  `ex-kunneth-for-two-cyclic-two-term-complexes`,
  `ex-kunneth-over-a-field`,
  `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement`,
  `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism`,
  `lem-the-kunneth-tor-map`,
  `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses`,
  `thm-kunneth-theorem-for-free-complexes-over-a-pid`, and
  `thm-the-kunneth-sequence-splits-nonnaturally`;
- flatness, dimension, exact-sequence, cyclic, and symmetry consumers:
  `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes`,
  `ex-localization-is-flat-and-has-vanishing-positive-tor`,
  `ex-tor-detects-n-torsion`,
  `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution`,
  `ex-tor-symmetry-over-a-commutative-ring`,
  `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers`,
  `fs-tor-is-symmetric-over-every-noncommutative-ring`,
  `fs-tor-one-vanishes-only-when-one-module-is-projective`,
  `prop-semisimple-rings-have-vanishing-positive-tor-and-ext`,
  `prop-the-integers-have-weak-and-global-dimension-one`,
  `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map`,
  `prop-tor-dimension-shifting`,
  `prop-torsion-free-abelian-groups-are-flat`,
  `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`,
  `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes`,
  `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes`,
  `thm-higher-tor-over-the-integers-vanishes`,
  `thm-long-exact-tor-sequence-in-the-left-module-variable`,
  `thm-over-a-pid-flat-is-equivalent-to-torsion-free`,
  `thm-tor-of-two-cyclic-abelian-groups`,
  `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion`, and
  `thm-tor-symmetry-over-a-commutative-ring`.

The current group-cohomology UCT theorem has composite carrier hash
`b99f2193a1f31429eaded900694a4ab071bb365a70be8b1d62131e96c46bea8e`.
It now attributes natural exactness and choice-dependent splitting to separate
exact dependencies. Thus
`cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier`
remains licensed because perfectness kills the Ext term, while
`fs-the-universal-coefficient-short-exact-sequence-splits-naturally` remains
licensed because the repaired source expressly makes no natural-splitting
claim. Their current composite carrier hashes are respectively
`1e7f84c35e8876d40904e649b41da78f154df8fb20a24f9141af74c0764636e2`
and
`c904129d9e401909bc9a17d2f07ce00d03af13c8bc68e108d38bb0e82c30233d`.

Four affected batch-9 items remained licensed by the changed interfaces but
contained independent fatal proof-witness defects. The smallest coherent
repairs preserve every id, title, statement, dependency, manifest row, page,
and provenance classification:

- `cex-a-nonnatural-choice-of-uct-splitting` and
  `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally`
  formerly appealed to a moved, unspecified complement. Each current proof
  now uses the free complex $C_1=\mathbb Ze\oplus\mathbb Zf\to C_0=\mathbb Zg$
  with $d(e)=2g$, $d(f)=0$, and $G=\mathbb Z/2$. It computes the degree-one
  UCT sequence and shows that the homology-trivial shear $e\mapsto e+f$ moves
  every section. Their current composite carrier hashes are respectively
  `50da438c98602add91ffe94f458ef471f2c1611e0038cd53158d82b40fbe4539`
  and
  `18f520885a170ed234db0b35b46a71929c30883e38ce10d707c47294f52e07f4`.
- `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting` formerly
  named no witnessing complexes. The current proof computes the degree-one
  Kunneth sequence for two explicit two-term free complexes, identifies the
  middle homology as $(\mathbb Z/2)^2$, and uses the same homology-trivial shear
  to move every section while fixing both outer terms. Its current composite
  carrier hash is
  `6bc45114df33f9e99d12d053775f08ea37eef2a58ffab29eb26d290e36d3b713`.
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m`
  formerly asserted failure beyond the principal-ideal calculation without a
  counterexample. For $R=k[x,y]$, $I=(x,y)$, and $M=k$, the current proof gives
  $\operatorname{Tor}_1^R(R/I,k)\cong I/I^2\cong k^2$, whereas the
  $I$-annihilator of $k$ is $k$. Its current composite carrier hash is
  `268cea8b273d03de40b697b84a98e406b28901ed8f26484c8a8073a82e4f154c`.

These repairs are closed by the four unique `6c-cross` rows in
`research/frontier-31a-alpha-6c-gate-ledger-rows-3.json`. Matching
`kind:"gate"` verdicts record the fatal findings, and separate clean
`kind:"item"` verdicts accept the repaired current carriers without owning a
second defect row. This preserves the one-defect/one-row rule while recording
both the gate outcome and every changed item.

`research/frontier-31a-impact-6c.json` now names reviewer
`alpha-6c-gate-impact-audit-6c-3` and contains 51 item-specific
dispositions: 47 `still-licensed` and four `repaired`, each with concrete
evidence. Its SHA-256 is
`61602c0ca624940f40463383d79e94f7d756b12411c272eec06c97f1b5a3a79c`.
Only the four proof bodies, their batch-9 contract entries, the impact receipt,
this report, and the required append-only ledger/verdict artifacts changed in
this cycle; statements, manifests, pages, dependencies, and provenance remain
unchanged.

The four materially edited items pass focused reflow and precheck. Their
scoped strict proof-contract check passes `4/4` with zero errors or warnings.
Current-run defect-ledger validation passes `476` rows with zero errors after
appending the four rows, and `cross-group-edges check` validates the current
hashes and verdict ownership
for 26 edges, five forward references, the saved zero-change work list, and
all repair-introduced item and gate verdicts with zero errors.

After repair, the exact primary command passes with seven changed interfaces,
51 affected items, and no errors or warnings. There is no remaining blocker
for `impact-audit-6c`. The `audit-manifest` advisory remains outside this
cycle's scope; no judge action or stage transition was requested or made.

## Repair cycle 4 — `audit-manifest`

The exact primary command was reproduced against all 22 current batch
manifests. Before repair it reported 2,185 relationships over 910 items and
the two dispatched unresolved edges from
`lem-structure-presheaf-basic-open-well-defined` and
`thm-structure-sheaf-affine-scheme` to
`lem-sheaf-condition-check-on-basis`.

The missing target is present on disk, but that is not sufficient for this
gate: `research/frontier-31a-step8-published-repairs.jsonl` records its
published-content proof repair and requires both the item and its owning page
to remain `draft` pending independent certification. The current item proves
basis-overlap compatibility before invoking gluing and explicitly assumes the
Axiom of Choice. The reader-14 finding, refuter-14 scope note, detector rows,
group-c decisions, Step-8 receipt, and prior 6c coverage repair were checked
against those current bytes. They support the draft disposition but cannot
restore publication, and no judge action was taken.

The two stale consumer edges were therefore repaired without changing page
membership or reading order:

- `lem-structure-presheaf-basic-open-well-defined` now proves the sheaf axiom
  on the distinguished-open basis directly from arbitrary-cover localization
  gluing instead of invoking the unavailable criterion. Proof step 2.2 covers
  `D(f)=empty`: the nilradical intersection theorem makes `f` nilpotent,
  `A_f` is the zero ring, and the empty family glues uniquely. Current
  dependencies are `def-structure-presheaf-on-basic-opens`,
  `lem-distinguished-opens-cover-every-open`,
  `lem-distinguished-open-refinement-at-a-point`,
  `lem-spectrum-compactness-open-cover-to-unit-ideal`,
  `cor-nilradical-as-intersection-of-primes`, and
  `thm-universal-property-of-localisation`.
- `thm-structure-sheaf-affine-scheme` now propagates the Axiom-of-Choice
  hypothesis required by the preceding lemma and constructs the extension:
  sections on an open are locally representable families of germs,
  restrictions forget germs, compatible families glue pointwise, the basis
  comparison follows from locality and basis gluing, and the same germ map
  proves uniqueness. The empty open and zero-ring spectrum are explicit.
  Current dependencies are `def-affine-scheme-spectrum`,
  `def-structure-presheaf-on-basic-opens`, and
  `lem-structure-presheaf-basic-open-well-defined`.

The mathematical source check used the exact Stacks Project statements:
Section 26.5 (`01HR`) gives the standard-open localization maps, finite
unit-ideal gluing, basis sheaf, and unique structure-sheaf extension; Lemma
6.30.9 (`009Q`) gives the unique extension of a sheaf of algebraic structures
from a basis by locally representable data. The theorem source list now names
both locators. Both carriers retain stable ids and `ai-altered` proof
provenance; no stale judge or audit stamp was added.

The item frontmatter, batch-14 manifest strategies and dependencies,
proof-contract derivations and boundary records, and the batch notes are
synchronized. Reflow left both files unchanged; focused precheck passes
`2/2`, and the scoped strict proof-contract gate passes `2/2` with zero errors
or warnings. The current composite carrier hashes are
`1c7387b1212eb99f8638f20dc074f5f0eff8dc67576698dc2bc8bc64817f3d15`
and
`2e901a090b6106c3dfe0f64b534884b5b280db92fe4cb405606d825d03b9ba63`.
Two closed `6c-cross` rows were appended through the ledger interface from
`research/frontier-31a-alpha-6c-gate-ledger-rows-4.json`; matching
`kind:"gate"` verdicts own those rows, while separate clean `kind:"item"`
verdicts record both changed carriers.

After repair, the exact primary command reports 2,184 relationships over 910
items in 22 batches with 0 defects. There is no remaining blocker for
`audit-manifest`. No page status, page order, stage transition, or judge stamp
was changed.

## Repair cycle 5 — `step6-routing-final`

The exact primary command was reproduced on the current tree and initially
reported 910 routed items, 374 adjudication obligations, and the dispatched
`reader-findings-invalid` error for reader finding `reader:14:1` on
`lem-sheaf-condition-check-on-basis`.

The finding itself remains valid and closed. Reader 14 opened the complete
lemma as a published dependency of
`lem-structure-presheaf-basic-open-well-defined` and identified that the old
proof invoked basis gluing before establishing compatibility. Refuter 14's
scope note independently records that it inspected the dependency for
citation-flow context and made no second finding. The current proof establishes
compatibility in step 2.1 before applying gluing in step 3.1, propagates those
references through step 4.1, and explicitly assumes Choice for the pointwise
selections. Its dependencies state the exact basis and sheaf axioms, including
the empty cover. The group-c decision and closed 6a reader ledger row agree
with that disposition, while the exact published claim and Step-8 repair
receipt bind pre-hash
`817549ba8d8b24fa3647160e150e3acd5ff3a5c997d195057d6999f98ec327f2`
to the current guarded repair hash
`8baab786a2cb58b808c6c84b108e5f9a1d2be32871ec5a273805f955a3e830ee`.
The item and its containing page correctly remain draft pending independent
certification.

The gate error was therefore a false positive caused by routing currency, not
a new mathematical defect. Repair cycle 4 legitimately removed the consumer's
edge to the withdrawn draft by internalizing its basis-sheaf argument. The
final routing check recomputed only the current dependency closure and thereby
forgot the already validated, claimed published-repair binding. The routing
tool now preserves the exact frozen binding from the batch scope whenever the
target has a valid Step-6 published claim; the existing receipt and ownership
checks still validate the claim, pre-hash, consumer, obligation, repair owner,
and current post-hash. Regression coverage removes the downstream edge after
the claim and repair, then requires the final phase to retain and close the
reader obligation.

No mathematical carrier, proof contract, manifest, page, provenance field, or
verification stamp changed in this cycle, and no mechanical failure was
invented as a defect-ledger row. The group-c report's stale intermediate
post-hash was synchronized to the exact current repair receipt. A clean `kind:"gate"`,
`verdict:"false_positive"` row records the governing rule and current external
published-repair carrier hash
`eb377ec88c3affc658dc898bf4c8e1ca9ea87af03a6412e1db715a602d831985`.
The 6c carrier/verdict checker now supports that claimed carrier and accepts a
clean false-positive gate outcome with `defect_ids:[]`; confirmed gate defects
continue to require exactly one closed 6c ledger row.

Validation after repair:

- exact `step6-scope ... --phase final`: 910 items, 374 obligations, 0 errors;
- focused precheck and real-KaTeX/YAML rendercheck for the live lemma: pass;
- `cross-group-edges carrier`: current hash above;
- `cross-group-edges check`: 26 edges, five forward references, zero post-6b
  changes, 0 errors;
- syntax checks for both changed JavaScript tools and `git diff --check`: pass.

The two dispatched advisory failures remain outside this repair cycle. No
judge action or stage transition was requested or made. The TypeScript
regression fixtures could not be executed inside this managed sandbox because
their nested `spawnSync` calls are denied with `EPERM`; the repository-level
primary and verdict gates above executed directly and passed.

## Repair cycle 6 — `risk-report`

The scoped primary command was reproduced on the current merged contract for
the sole live id, `lem-structure-presheaf-basic-open-well-defined`. Before this
repair it classified the item `HIGH 6` and reported
`risk-review-missing`; the owning batch-14 contract had no `risk_review`.

I reread the current item and all six declared dependencies. I also checked the
frozen reader-14 finding, the refuter-14 scope note, the baseline detector and
Alpha-c arbitrary-cover ledger rows, the group-c decision, and repair cycles 4
and 5 against the current files. Reader 14's only relevant finding concerned
the formerly published dependency `lem-sheaf-condition-check-on-basis`, not
the current internalized proof. Refuter 14 explicitly opened that dependency
only for citation-flow context and did not refute this item. The detector's
scheduler-race row and Alpha-c's genuine finite-cover/arbitrary-cover defect
are both closed, and cycle 4 removed the now-draft dependency while retaining
the direct argument. The current item remains draft; this repair neither
publishes it nor supplies a judge outcome.

The mathematical review found no new defect. The exact primary source,
Stacks Project Section 26.5 (`01HR`), states that
`D(g) subset D(f)` gives the canonical localization map, equal standard opens
give mutually inverse maps, and finite standard-open covers reduce to a unit
ideal. Its cited localization gluing result, Stacks Project Lemma 10.24.1
(`00EK`), gives the required exact Cech sequence. Thus a finite subcover glues
the selected sections; intersecting each omitted cover member with that finite
subcover and applying the same separatedness argument proves agreement with
every omitted section and uniqueness. This is the short comparison compressed
in proof step 2.1. For `D(f)=empty`, `f` is nilpotent and `A_f` is the zero
ring; every covering `D(g_i)` is also empty, hence every `A_{g_i}` is the zero
ring and even a nonempty indexed cover has exactly one compatible family.
That is the immediate extension of the empty-family wording in step 2.2.
Choice is explicit, and the statement has no iff direction or unhandled
endpoint.

The complete item-specific review is now in
`research/frontier-31a-batch-14.proof-contracts.json`, and the merged
`research/frontier-31a-proof-contracts.json` was regenerated from all 22 batch
contracts. The item Markdown, page manifest, page order, provenance, and
verification frontmatter did not change. Because contract metadata is part of
the composite carrier, its current hash is
`ffc6b3d150baea05e8647392ec3c510727c37060132cb0328155c9161cbcb730`;
the existing cycle-4 item and gate records were synchronized to that hash
without changing their decisions. A clean `kind:"gate"`,
`gate:"risk-report"`, `verdict:"false_positive"` row records that the required
high-risk reread found no content defect. In accordance with the repair rule,
the missing review itself has no invented defect-ledger row.

Validation after repair:

- scoped strict proof-contract checks pass `1/1` on both the batch-14 and
  merged contracts with zero errors or warnings;
- scoped merged `risk-report --require-reviewed` still routes the item as
  `HIGH 6` but now reports `0 error(s), 1 item(s) routed`;
- focused precheck passes `1 checked, 0 failing` on the unchanged item;
- `cross-group-edges check --reconcile-plan` passes 26 edges, five forward
  references, zero listed post-6b changes, and zero errors;
- current-run defect-ledger validation passes 478 rows with zero errors; and
- `git diff --check` passes for the cycle-6 artifacts.

There is no remaining blocker for the `risk-report` primary gate. The
`impact-audit-6c` changed-scope receipt and `audit-manifest` liveness-summary
advisories remain outside this dispatch. No stage transition or judge action
was taken.

## Repair cycle 7 — `impact-audit-6c` scheme-interface expansion

The exact primary command was reproduced against the current workspace:

```text
node tools/impact-audit.mjs --touches research/frontier-31a-touches.json --from post-6b --current --receipt research/frontier-31a-impact-6c.json
```

Before repair it recomputed nine changed public interfaces and 85 affected
items, then failed because the receipt still recorded the seven interfaces and
51 dispositions from repair cycle 3. The two newly detected interfaces are
`lem-structure-presheaf-basic-open-well-defined` and
`thm-structure-sheaf-affine-scheme`; their downstream union is exactly the 34
live batch-14 ids in this dispatch. The other 51 current dispositions remain
unchanged. The saved cross-group plan has 26 edges, five forward references,
and no post-6b structural changes; none of those edge or forward obligations is
in the live scheme-theory scope.

I reread both changed carriers, all 34 live consumers, the batch-14 manifest
and proof contracts, reader-14 report and finding, refuter-14 report, baseline
detector and Alpha-c ledger outcomes, group-c decisions, and repair cycles
4--6. I also checked the cited Stacks locators recorded by the source harvest:
Section 26.5 (`01HR`) supplies the distinguished-open localization data and
finite unit-ideal gluing, Lemma 10.24.1 (`00EK`) supplies the exact finite
localization gluing calculation, and Lemma 6.30.9 (`009Q`) supplies unique
extension from a basis by locally representable data.

The current basis lemma handles arbitrary covers by passing to a finite
unit-ideal subcover, compares the glued section with every omitted member, and
covers the empty open and zero localization. Its current composite carrier
hash is `ffc6b3d150baea05e8647392ec3c510727c37060132cb0328155c9161cbcb730`.
The current structure-sheaf theorem explicitly assumes Choice, constructs the
germ-family sheaf on every open, proves agreement with the localization basis,
and proves uniqueness through the prescribed basis identifications, including
the zero-ring spectrum. Its current composite carrier hash is
`2e901a090b6106c3dfe0f64b534884b5b280db92fe4cb405606d825d03b9ba63`.
The only consumer that itself asserts this extension is that theorem, and it
now carries the source hypothesis. Every later consumer starts with the
resulting affine structure sheaf or an already affine locally ringed space; it
does not assert existence under weaker foundations.

### Live impact dispositions

| Item | Disposition | Current evidence |
| --- | --- | --- |
| `cex-nonclosed-scheme-point-no-k-valued-coordinate` | still licensed | The generic/closed-point and relative `$k$`-algebra-kernel argument uses the retained prime topology and residue fields. |
| `cex-scheme-not-determined-by-underlying-space` | still licensed | The one-point spectra retain coordinate rings `$k$` and `$k[epsilon]/(epsilon^2)$`, so reducedness still distinguishes the schemes. |
| `cor-affine-scheme-isomorphism-ring-isomorphism` | still licensed | The repaired sheaf retains global sections and the affine anti-equivalence, so both iff directions survive. |
| `cor-affine-scheme-quasi-compact` | still licensed | The argument is topological: an affine presentation sends `$X$` to `$D(1)=Spec A$`, including `$A=0$`. |
| `cor-spectrum-with-structure-sheaf-locally-ringed` | still licensed | The retained stalk `$A_p$` is local with maximal ideal `$pA_p$`. |
| `def-affine-scheme` | still licensed | The definition concerns an already constructed locally ringed spectrum, whose global coordinate ring is unchanged. |
| `def-closed-point-scheme` | still licensed | Closed points remain exactly maximal ideals in the unchanged prime-spectrum topology. |
| `def-dual-numbers-scheme` | still licensed | The repaired construction applies to `$k[epsilon]/(epsilon^2)$` and preserves its square-zero section. |
| `def-functor-of-points-affine-scheme` | still licensed | The natural affine Hom bijection remains the one furnished by the retained anti-equivalence. |
| `def-generic-point-irreducible-closed-subset` | still licensed | The equality `closure({p})=V(p)` is purely topological and unchanged. |
| `def-integral-affine-scheme` | still licensed | Nonzero-domain, nonempty, reduced, and irreducible conditions use the same coordinate ring and spectrum, including the zero-ring exclusion. |
| `def-morphism-affine-schemes-from-ring-map` | still licensed | Contraction on primes and the maps `$A_f -> B_{phi(f)}$` are exactly the localization data preserved by the extension. |
| `def-nonreduced-infinitesimal-thickening-affine` | still licensed | Nilpotent quotients retain the same prime-space homeomorphism and global-section quotient map. |
| `def-reduced-affine-scheme` | still licensed | Presentation independence still follows by reflecting affine isomorphisms through global sections. |
| `def-residue-field-scheme-point` | still licensed | The stalk and quotient remain `$A_p$` and `$A_p/pA_p ~= Frac(A/p)$`. |
| `ex-basic-open-affine-line` | still licensed | `$Spec(k[t]_t)=D(t)$` as locally ringed spaces still uses the same localized section rings. |
| `ex-dual-numbers-one-point-nonreduced` | still licensed | The explicit nilradical, sole prime, residue field, and square-zero calculations are unchanged. |
| `ex-functor-points-affine-line` | still licensed | The relative polynomial universal-property bijection remains compatible with the repaired affine Hom correspondence. |
| `ex-spectrum-field-one-point` | still licensed | The sole prime, stalk, residue field, and global ring are still `(0)`, `$k$`, `$k$`, and `$k$`. |
| `ex-spectrum-integers-generic-and-closed-points` | still licensed | Prime classification and generic/closed behavior depend only on the unchanged Zariski topology. |
| `ex-spectrum-product-ring-disjoint-union` | still licensed | The two clopen prime families retain localizations `$A_p$` and `$B_q$`, so the locally ringed disjoint union remains valid. |
| `ex-spectrum-zero-ring-empty` | still licensed | The repaired theorem explicitly covers the empty spectrum and its unique zero-ring global section. |
| `lem-basic-opens-quasi-compact` | still licensed | The unchanged homeomorphism `$Spec(A_f)=D(f)$` transfers compactness, including zero localization. |
| `lem-classical-points-inside-affine-scheme` | still licensed | The maximal-ideal/kernel classification uses the unchanged coordinate ring and prime topology. |
| `lem-spectrum-localization-open-immersion` | still licensed | The sheaf still has sections `$(A_f)_{g/1}=A_g$` on every basic open inside `$D(f)$`. |
| `lem-spectrum-map-stalk-homomorphisms-local` | still licensed | The stalk map remains `$A_p -> B_q$` with inverse image of `$qB_q$` equal to `$pA_p$`. |
| `rem-spec-contravariance-and-points` | still licensed | Contravariance, residue fields, and the generic/closed/classical distinction are all retained. |
| `thm-affine-scheme-ring-anti-equivalence` | still licensed | Global sections, localized basic-open maps, and local stalk maps remain exactly the inputs to the Hom bijection. |
| `thm-affine-schemes-determined-by-functor-of-points` | still licensed | Yoneda still recovers mutually inverse scheme maps between the same affine representing objects. |
| `thm-global-sections-affine-scheme` | still licensed | `$D(1)=Spec A$` and the repaired basis agreement give `$Gamma(Spec A,O)=A_1=A$`, also for `$A=0$`. |
| `thm-sections-basic-open-affine-scheme` | still licensed | The repaired extension agrees with `$A_f$` and its canonical restriction maps on every distinguished open, including the empty case. |
| `thm-spectrum-sober` | still licensed | Its own Choice hypothesis is explicit and its generic-point proof uses only the unchanged prime topology. |
| `thm-stalk-structure-sheaf-prime-localization` | still licensed | The colimit of the retained `$A_f$` over cofinal distinguished neighborhoods remains `$A_p$`. |
| `thm-structure-sheaf-affine-scheme` | repaired | Repair cycle 4 propagated Choice and supplied the locally representable germ-family construction, sheaf proof, basis comparison, uniqueness, and empty-spectrum case. |

### Authorized edits and validation

Only `research/frontier-31a-impact-6c.json` and this report changed in cycle 7.
The receipt reviewer is now `alpha-6c-gate-impact-audit-6c-7`; its computed
scope has nine interfaces, 85 required reviews, and 85 unique dispositions
(80 `still-licensed`, five `repaired`). Its SHA-256 is
`ef1c31091c9ce604093e4a8b2aa42394c685a4ae3ad7d96ee5d87e12fa1b9ee1`.

No item, proof contract, manifest, page, provenance field, verification stamp,
defect-ledger row, or append-only verdict row changed. The cycle-4 gate and
item verdicts already bind the repaired structure-sheaf theorem to its current
carrier hash; the other 33 outcomes are receipt dispositions on unchanged
items. As in repair cycles 2 and 3, inventing a new item defect or changed-item
verdict for a stale receipt would violate the one-defect/one-row and
changed-carrier rules.

Validation after repair:

- exact primary `impact-audit-6c`: nine changed interfaces, 85 affected items,
  zero errors and warnings;
- strict batch-14 proof contracts scoped to all 23 proof-bearing live items:
  `23/23`, zero errors and warnings;
- focused precheck on the same 23 items: `23` checked, zero failing;
- current carrier checks for both changed interfaces: hashes above;
- `cross-group-edges check --reconcile-plan`: 26 edges, five forward
  references, zero post-6b changes, zero errors;
- frontier-31a defect-ledger validation: 478 rows, zero errors.

There is no remaining blocker for `impact-audit-6c`. No judge action or stage
transition was requested or made.
