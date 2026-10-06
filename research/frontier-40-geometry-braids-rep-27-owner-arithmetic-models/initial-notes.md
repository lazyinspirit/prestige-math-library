# Batch 27 notes — `abelian-varieties-base-change-and-arithmetic-models`

Run: `frontier-40-geometry-braids-rep-27`. Role: beta (Step 1 scaffold). Pair 27 / order 917,
A page `abelian-varieties-base-change-and-arithmetic-models`, B page
`abelian-varieties-base-change-and-arithmetic-models-examples`. Design row **AG-ARITH-1**
(`research/plan-algebraic-geometry-expansion-track.md` line 273, the AG-ARITH-1 table row).
Owner direction `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
was read first and is binding: the pair's promised scope is preserved; two escalations and
one reading decision are recorded below for owner reconciliation.

Artifacts written: this file, `research/frontier-40-geometry-braids-rep-27-batch-27.pages.json`
(28 items: 26 A + 2 B), `research/frontier-40-geometry-braids-rep-27-batch-27.coverage.json`
(2 page entries, 8 stamped sources, 55 harvested results with dispositions),
`research/frontier-40-geometry-braids-rep-27-batch-27.cross-batch-dependencies.json` (empty array),
and one `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` readiness record per item.
No published item, page, shared plan, engine state, verdict or ledger was edited.

## Scope, design and plan

The design promises four A items — `thm-abelian-variety-dual-and-polarization`,
`thm-good-reduction-and-smooth-proper-base-change`, `def-neron-model-and-mapping-property`,
`thm-neron-model-existence-in-stated-class` — and two B items
(`ex-elliptic-curve-good-and-bad-reduction`,
`cex-abelian-variety-does-not-have-good-model-over-every-base`), with the instruction to
"state base, finite type, smoothness, and residue-characteristic restrictions item by item".
`plan-spec.json` (order 917/918) registers the same pair, the same four page requirements
(all published: orders 885, 887, 903 and 366.083) and empty item lists. No page-level or
item-level conflict between plan and design was found; the only discrepancy is interpretive
and is recorded below.

The design's source note says: "Stacks proves field projectivity and proper-flat coherent
base change; M22 supplies field-level abelian/tori material. Neither supplies Néron models or
étale-cohomological good-reduction theorems. Retrieve SGA 7/Milne arithmetic sources and a
second treatment." Reading decision (recorded, not silent): the promised
`thm-good-reduction-and-smooth-proper-base-change` is scaffolded as the scheme-theoretic
theorem — good reduction via abelian-scheme models, base change of the model, the
cohomology-and-base-change theorem for the structure sheaf of an abelian scheme with its
exact surjectivity hypotheses, and the Néron-model identification — because the design names
"proper-flat coherent base change" as the supplied input for this item. The
étale-cohomological reading (Néron–Ogg–Shafarevich, unramified ℓ-adic Tate module) is *not*
proved here: the library has no étale cohomology of schemes, no smooth proper base change for
étale cohomology and no ℓ-adic Tate modules. It is recorded as deferred harvest rows and as
escalation (3) below, not silently dropped; the item statement itself carries the boundary.

## Readiness summary

26 of 28 items are recorded `ready` with complete local proof strategies and met
prerequisites; 2 are recorded `escalated` (never weakened, never deleted). After the final
manifest edits the affected ready records were re-recorded against the current bytes; the two
escalations were left untouched exactly as recorded:

| dependency_level | item | decision |
|---|---|---|
| 0 | `def-group-scheme-over-a-scheme` | ready |
| 1 | `def-abelian-scheme` | ready |
| 2 | `lem-abelian-scheme-fibres-commutative-and-pointed-morphisms` | ready |
| 2 | `lem-abelian-scheme-base-change-and-products` | ready |
| 3 | `lem-multiplication-by-n-on-abelian-scheme` | ready |
| 0 | `lem-finite-etale-lifting-over-complete-dvr` | ready |
| 0 | `def-s-dense-open-and-s-rational-map` | ready |
| 1 | `lem-s-rational-map-descends-along-faithfully-flat-smooth-maps` | ready |
| 0 | `lem-normal-noetherian-domain-intersection-of-height-one-localizations` | ready |
| 1 | `lem-rational-map-to-affine-target-indeterminacy-pure-codimension-one` | ready |
| 2 | `thm-weil-extension-rational-map-into-group-scheme` | ready |
| 3 | `cor-extension-of-k-morphisms-into-abelian-schemes` | ready |
| 0 | `def-neron-model-and-mapping-property` (promised) | ready |
| 1 | `lem-neron-model-uniqueness-etale-base-change-and-local-nature` | ready |
| 4 | `thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre` | ready |
| 5 | `def-good-reduction-and-abelian-scheme-model` | ready |
| 6 | `cor-good-reduction-admits-a-neron-model` | ready |
| 6 | `lem-good-reduction-stable-under-base-change` | ready |
| 7 | `thm-good-reduction-and-smooth-proper-base-change` (promised) | ready |
| 6 | `thm-neron-model-existence-in-stated-class` (promised) | **escalated** |
| 1 | `def-rigidified-relative-picard-functor-and-dual-abelian-variety` | ready |
| 2 | `lem-theorem-of-the-square-and-mumford-homomorphism` | ready |
| 3 | `def-polarization-of-an-abelian-variety` | ready |
| 4 | `thm-abelian-variety-dual-and-polarization` (promised) | **escalated** |
| 0 | `thm-plane-cubic-chord-tangent-group-law` | ready |
| 1 | `lem-two-torsion-and-uniqueness-of-plane-cubic-group-law` | ready |
| 7 | `ex-elliptic-curve-good-and-bad-reduction` (B, promised) | ready |
| 8 | `cex-abelian-variety-does-not-have-good-model-over-every-base` (B, promised) | ready |

Dependency levels are computed from the batch's own in-run `deps` only; published and other
out-of-run suppliers do not raise a level. `node tools/item-dependency-levels.mjs check --run
frontier-40-geometry-braids-rep-27` reports no error for any of the 28 items; its 36 current
errors are all `empty scaffold inventory` for the other 26 in-flight batches and are expected
until those batches write their manifests.

The Axiom of Choice is carried explicitly in every proof-bearing item that inherits it from the
published AC-laden suppliers (Riemann–Roch/Serre duality, resolution/flatness, finite-étale
lifting, fpqc descent, cohomology and base change); `def-dependent-choice` is declared where
the inherited suppliers use DC. No choice-free branch is silently widened, and no
`deferred-set-theory-beyond-choice` result is consumed anywhere on the page.

## Escalations (owner resolution required)

### (1) `thm-abelian-variety-dual-and-polarization` — missing representability of Pic^0

The promised item states the existence of the dual abelian variety, the Poincaré bundle,
double duality, dual isogenies, the Mumford maps `phi_L` with `K(L)` finite for ample `L`,
and the polarization formalism. The locally available ingredients are scaffolded and ready:
the rigidified Picard functor, the theorem of the square (from the published theorem of the
cube), the Mumford homomorphism, the polarization definition, and the quotient machinery for
`A/K(L)` (published `thm-nonaffine-group-scheme-normal-subgroup-quotient`). The single
missing ingredient is the representability of the degree-zero Picard functor, equivalently
the surjectivity of `phi_L` for ample `L`. Exact evidence: Milne, *Abelian Varieties* I.8.14
defers the proof to Mumford, *Abelian Varieties*, p. 77 and Lang, *Abelian Varieties*, p. 99;
EGM, *Abelian Varieties* 6.3 and 6.18 admit from the general theory that `Pic_{X/k}` is a
group scheme with projective connected components (Grothendieck, FGA Exposé 232, via Quot
schemes); van Bommel's seminar notes use the same admission. The library has no Quot/Hilbert
scheme, no Picard scheme representability and no Mumford Chapter III construction.

Proposed new pair (owner decision): A page `picard-schemes-and-dual-abelian-varieties`,
B page `picard-schemes-and-dual-abelian-varieties-examples`, placed immediately after
`hilbert-functors-and-projective-hilbert-schemes` (order 905, unselected in this run) and
before order 917. A inventory: `def-relative-picard-functor-and-rigidification` (already on
917 as `def-rigidified-...`, may be re-homed), `thm-quot-scheme-representability`,
`thm-picard-scheme-representable-for-projective-flat`,
`thm-mumford-map-surjective-for-ample-line-bundle`,
`thm-pic-zero-is-an-abelian-variety-and-dual`, `thm-double-duality-for-abelian-varieties`,
`lem-dual-isogeny-and-cartier-dual-kernel`. Sources: Grothendieck FGA Exposé 232 (Quot
schemes), Mumford, *Abelian Varieties*, Chapter III (p. 77 ff.), EGM Chapter 6, Milne I.8.
Dependency chain: 905 Hilbert/Quot → new pair → `thm-abelian-variety-dual-and-polarization`
(order 917); size estimate 25–45 items, so the prerequisite is better placed in another batch
by the brief's placement rule.

### (2) `thm-neron-model-existence-in-stated-class` — complete local closure exceeds the page cap

The promised item is the local existence theorem: for a discrete valuation ring `R` with
fraction field `K`, every abelian variety over `K` admits a Néron model over `R` (BLR 1.3/1
with Corollary 2; equivalently the smooth finite-type `K`-group case with bounded
`K^sh`-points). The good-reduction class *is* proved locally
(`thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre`,
`cor-good-reduction-admits-a-neron-model`), so a restricted statement exists and is ready.
The general theorem is not proved here. Exact evidence: BLR 1.3/1 says "The proof of the
if-part will be carried out in Chapters 3 to 6"; those chapters are pp. 60–160 of the book
(smoothening via Néron's measure, Chapters 3.1–3.6; construction of an `R`-birational group
law from an invariant differential, Chapter 4; Weil's theorem on birational group laws over
a strictly henselian base, Chapter 5; descent, the theorem of the square and quasi-projectivity
of torsors, Chapter 6) plus criterion 1.2/19. Estimated local closure 60–90 library items,
which together with the dual and good-reduction content cannot fit the 100-item page cap and
is better placed in a dedicated batch.

Proposed new pair: A page `neron-models-smoothening-birational-group-laws-and-descent`,
B page with the elliptic-curve and Jacobian reduction examples. Placement: it must precede
order 917 if 917 is to keep the general theorem; a later order is acceptable only if the
owner authorizes narrowing the promise to the good-reduction class (which is *not* done
here). A inventory (outline): `def-r-model-and-extension-property-for-etale-points`,
`thm-smoothening-of-a-separated-model` (BLR 3.1/3), `lem-nerons-measure-decreases`,
`thm-weak-neron-model-and-weak-mapping-property` (BLR 3.5/3), `lem-algebraic-approximation-
of-formal-points`, `def-r-birational-group-law`, `thm-birational-group-law-extension` (BLR
4.3/6), `thm-weil-birational-group-law-strictly-henselian` (BLR 5.1/5),
`thm-descent-of-birational-group-laws` (BLR 6.6), `thm-neron-model-existence` (BLR 1.3/1).
Sources: BLR Chapters 1–6; Milne, *Abelian Varieties* I.17.1–17.3 (statements);
Lombardo, *Abelian varieties* 4.3 (statement). Dependency chain: 917 → new pair; the new
pair consumes `thm-weil-extension-rational-map-into-group-scheme`,
`cor-extension-of-k-morphisms-into-abelian-schemes`, `thm-valuative-criterion-properness`,
and the blowup/regularity material already published on orders 895/901.

### (3) Étale-cohomological good reduction (Néron–Ogg–Shafarevich) — new prerequisite track

The design's source note promises "étale-cohomological good-reduction theorems" retrieved
from SGA 7/Milne arithmetic sources. These cannot be built from the library: there is no
étale cohomology of schemes, no smooth proper base change for étale cohomology, no ℓ-adic
cohomology and no Tate modules. Evidence: `grep` over `items/` finds no item mentioning
"étale cohomology" or "Tate module"; the published `etale-covers-and-the-etale-fundamental-
group` page (order 911) supplies finite étale covers and π₁ only; Lombardo's lecture notes
state the needed unramifiedness result (Theorem 5.3) *without proof*, explicitly as a
consequence of smooth proper base change in étale cohomology, and state the deeper
semistable-reduction and inertia theorems (4.11, 9.1) whose inputs are SGA 7 I Exposé IX
(Grothendieck, "Modèles de Néron et monodromie") and Serre–Tate, "Good reduction of abelian
varieties", Ann. of Math. 88 (1968), 492–517.

Proposed new pairs (owner decision): (a) A page
`etale-cohomology-and-smooth-proper-base-change` after the published order-911 page, with
`def-etale-cohomology-of-schemes`, `thm-smooth-proper-base-change-etale-cohomology`,
`def-l-adic-cohomology`; (b) A page
`l-adic-tate-modules-and-the-neron-ogg-shafarevich-criterion`, with `def-tate-module`,
`thm-good-reduction-iff-unramified-tate-module`, `thm-potential-good-reduction-criterion`.
Sources: SGA 4½ (Deligne, *Cohomologie étale*, LNM 569); SGA 7 I Exposé IX; Serre–Tate 1968;
Lombardo §5.3. Only after these exist can the promised étale-cohomological refinement be
stated as a theorem rather than a deferred boundary; it is *not* included in the scaffold.

## Published-defect record

No published defect was found in any of the actual supplier pages of this pair
(`nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` order 885,
`groups-of-multiplicative-type-and-arithmetic-tori` order 887,
`coherent-duality-on-projective-cohen-macaulay-schemes` order 903,
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` order 366.083): all
four are published pages, all cited items used as dependencies exist and are published, and no
contradiction between a cited statement and the use on this page was found. The only
cross-track gaps are the three escalations above, all of which are *missing new material*, not
defective published consumers.

## Sources

Coverage file: `research/frontier-40-geometry-braids-rep-27-batch-27.coverage.json`.
Sources fetched at full text and stamped (`source-fetch-check --stamp`: 8/8 fetch-verified,
0 drops). The exact ranges read per source are recorded in the coverage-file `locator` fields; the
principal close readings were BLR 1.2/1-9, 2.5, 3.1-3.5 and 4.4/1-4.4/4; Milne I.8 and I.17;
EGM 6.1-6.3 and 6.18-6.19; Lombardo Chapter 2 sections 4-5; and the Weierstrass group-law
section of Milne's Elliptic Curves.

Two independent treatments per A page are satisfied (monograph + course notes + book
manuscript + lecture notes). The coverage warning `coverage-low-yield` (17/47 harvested
results scaffolded on the A page) is a measure of the deferred deep material: the declines
are the three escalations above plus results belonging to the unselected AG-ET-1/étale
track, and all of them carry individual reasons and destinations in the coverage file.

## Checks actually run (Step 1, batch 27)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/coverage-checklist.mjs research/...-batch-27.coverage.json --require-destination` | exit 0; 2 pages, 55 harvested, 0 errors, 1 advisory `coverage-low-yield` |
| manifest deps | `node tools/manifest-deps.mjs research/...-batch-27.pages.json` | exit 0; 28 items, 0 missing, 0 errors |
| scaffold policy | `node tools/content-policy.mjs --manifest-only research/...-batch-27.pages.json` | exit 0; 28 scoped items, 0 errors |
| dependency labels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | 0 errors on batch 27 (28 items, max level 8); every remaining reported error at the time of the check was `empty scaffold inventory` for batches still in flight, never a label or cycle defect on batch 27 |
| source full text | `node tools/source-fetch-check.mjs --coverage research/...-batch-27.coverage.json --stamp` | 8/8 sources fetch-verified |
| readiness | `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27` | run-wide 267 items, 254 closed ready at the time of the check; the only open work items belonging to batch 27 are the two escalations above (other open items belong to other in-flight batches). The owner-held `1-scaffold` gate is the designed behaviour and no escalation was overwritten |

Additional whole-run checks: `node tools/validate-plan.mjs research/plan-spec.json` exit 0 (247 planned pages still carry no item list, including the empty page shells of in-flight batches; reading order guaranteed, item dependencies not yet asserted); `node tools/extcheck.mjs` exit 0 (every recorded-not-proved statement is a cited remark with no proof and every consequence is marked; the two `unproved-on-published` notes are pre-existing published legacy items, not batch-27 items); `node tools/fwdcheck.mjs --quiet` exit 0 (all forward references declared, strictly forward and non-cyclic). None of these checks touches the batch-27 escalations, which remain owner-held.

Cross-batch dependency input: `research/frontier-40-geometry-braids-rep-27-batch-27.cross-batch-
dependencies.json` is the empty array, because every declared prerequisite of this pair is a
published out-of-run page (orders 885, 887, 903, 366.083) and the batch has no in-run item
dependency on another batch of this run. If the owner authorizes escalations (1)–(3) as new
pairs inside this run, the input must be updated with the exact `(kind, consumer, supplier)`
rows before the Step-3b gate.

## Handoff

Next actions (owner): resolve the two escalated item decisions, choosing between (i) adding
the proposed prerequisite pairs to the run scope (with `--allow-in-run-dependencies` and
placement as recorded), or (ii) accepting the recorded scope change, which is *not* done by
this worker. Until then the `1-scaffold` stage gate is owner-held. The 26 ready items have
complete proof strategies, met published prerequisites and stamped sources; Step 3 authors
must write the proofs and the full local arguments, and Step 3 review provides the independent
mathematical acceptance.
