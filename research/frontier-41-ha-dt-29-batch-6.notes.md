# Batch 6 notes — Morse Homology Continuation and Comparison

Run `frontier-41-ha-dt-29`, role **beta**, label **batch-6**, covers exactly one A/B pair:

- A page `morse-homology-continuation-and-comparison` (order 539, `differential-topology`);
- B page `morse-homology-continuation-and-comparison-examples` (order 540).

Constructed artifacts: `research/frontier-41-ha-dt-29-batch-6.pages.json`,
`research/frontier-41-ha-dt-29-batch-6.coverage.json`,
`research/frontier-41-ha-dt-29-batch-6.cross-batch-dependencies.json`,
`research/frontier-41-ha-dt-29-batch-6-url-liveness.json`, the 28
`research/frontier-41-ha-dt-29-step1-<id>.json` readiness records, and the batch-6 rows of the
aggregate `research/frontier-41-ha-dt-29-cross-batch-dependencies.json`. No published content,
shared plan, engine state or verdict was edited. This is a Step-1 scaffold: every record is a
readiness statement for Step 3 authoring, not a mathematical acceptance.

## 1. Inventory and dependency levels

A page — 23 items; B page — 5 items. All 28 items carry an explicit `deps` array and a
`dependency_level` recomputed run-wide by `node tools/item-dependency-levels.mjs`. Levels refer
to in-run dependencies only; published and other-run suppliers do not raise them.

A page `morse-homology-continuation-and-comparison`:

| level | item | kind |
|---|---|---|
| 7 | `def-morse-homology-of-a-morse-smale-pair` | definition |
| 0 | `def-regular-continuation-datum-between-morse-smale-pairs` | definition |
| 1 | `lem-continuation-solutions-have-critical-limits` | lemma |
| 2 | `lem-continuation-energy-identity` | lemma |
| 2 | `def-broken-continuation-trajectory` | definition |
| 4 | `thm-continuation-trajectories-are-compact-up-to-breaking` | theorem |
| 5 | `lem-gluing-continuation-solutions-gives-collar-ends` | lemma |
| 6 | `lem-orientation-lines-orient-continuation-moduli-spaces` | lemma |
| 7 | `def-continuation-chain-map` | definition |
| 8 | `thm-continuation-count-is-a-chain-map` | theorem |
| 7 | `def-two-parameter-continuation-homotopy` | definition |
| 9 | `thm-homotopic-continuation-data-give-chain-homotopic-maps` | theorem |
| 8 | `lem-continuation-map-of-constant-data-is-the-identity` | lemma |
| 10 | `thm-continuation-composition-law-on-homology` | theorem |
| 11 | `thm-reverse-continuation-is-an-inverse-on-morse-homology` | theorem |
| 12 | `def-canonical-morse-homology-of-a-closed-manifold` | definition |
| 5 | `lem-compactified-unstable-manifolds-give-a-cw-decomposition` | lemma |
| 6 | `lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count` | lemma |
| 7 | `prop-relative-morse-complex-for-an-adapted-cobordism` | proposition |
| 8 | `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex` | theorem |
| 13 | `thm-morse-homology-is-naturally-isomorphic-to-singular-homology` | theorem |
| 14 | `cor-morse-homology-recovers-the-morse-inequalities` | corollary |
| 13 | `rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control` | remark |

B page `morse-homology-continuation-and-comparison-examples`:

| level | item | kind |
|---|---|---|
| 15 | `ex-continuation-across-a-birth-death-adds-an-acyclic-pair` | example |
| 16 | `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology` | example |
| 8 | `ex-relative-morse-homology-of-a-single-handle-cobordism` | example |
| 9 | `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation` | example |
| 14 | `cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity` | counterexample |

In-run suppliers used: DT-9 `morse-trajectory-moduli-spaces-and-the-morse-differential` (batch 5)
and the handle/cobordism and relative-CW items of batch 1 (DT-1/DT-2); 70 cross-batch edges
(69 item + 1 page) are recorded and reviewed in the batch input, 56 into batch 5 and 14 into
batch 1. The A16 lemma additionally consumes the published `thm-fundamental-theorem-on-flows`
(out of run, so no level change).

## 2. Design and plan reconciliation

Read before construction: `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding;
no DT-10-specific amendment), the complete DT-10 design section
(`research/plan-differential-topology-track.md` L678–L718: A page items 1–16, B page items 1–5,
the "Hard-proof closure" paragraphs), `research/plan-spec.json` for both pages, and the batch-5
DT-9 manifest as the in-run supplier. The owner direction and the plan agree on the pair's scope;
no conflict between them arose.

Conflicts and deviations recorded (all preserved, none silently dropped):

(a) **Design item 13 wording vs manifest statement.** The design names
`thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex` "chain homotopy
equivalent", while its description asks that "signed trajectory counts agree with attaching-map
boundary coefficients". The manifest keeps the design id and states the stronger and more precise
claim: the sign-normalised identity is an isomorphism of chain complexes (hence a chain homotopy
equivalence). The same item in the design also expects the comparison to hold "for compatible
Morse data"; the manifest restricts to Morse--Smale data on a closed manifold, which is what the
suppliers prove. Recorded for owner/Step-4 review; no claim was weakened.

(b) **Page `requires` array vs actual closure (observation, not edited).** The plan-spec
`requires` list of the A page does not contain `local-coefficients-twisted-homology-and-duality`,
yet `prop-relative-morse-complex-for-an-adapted-cobordism` consumes the published
`thm-cellular-chains-compute-homology-with-local-coefficients` for the relative CW pair. The
constant-coefficient alternative `thm-cellular-homology-computes-singular-homology` is stated in
this library for CW complexes only (no relative/CW-pair form), so the local-coefficient route is
the honest one available. This is a plan-vs-closure observation for the owner/Step 4: either add
the AT-23 page (or an equivalent relative cellular-singular comparison) to the inherited closure,
or accept the constant-local-system use recorded in the proposition's strategy. The `requires`
array was left exactly as the plan-spec has it.

(c) **Item order within the page.** The manifest orders the items by proof route: continuation
definitions → energy/compactness/gluing → orientation → chain map → homotopy independence →
composition/inverse → canonical homology; then the CW/cellular comparison items; then the
relative-cobordism proposition and the singular comparison; then the inequalities and the
noncompact remark. The design lists them in a slightly different order (comparison items 12–14
before 15–16, with the relative proposition at 12). No claim was added or dropped; the batches'
dependency-level recomputation verifies the reordering introduces no forward arrow.

(d) **A16 relative-case revision (this scaffold).** The first draft of
`lem-compactified-unstable-manifolds-give-a-cw-decomposition` asserted, for the cobordism case,
that the open unstable manifolds are the cells of a CW decomposition of $W$ relative to $M_0$ and
that $\partial\overline W{}^u(p)=\bigcup_q\mathcal M(p,q)\times\overline W{}^u(q)$. Both are false as stated in the
relative case: segments of unstable manifolds escape through $M_0$ (so the closed cells' boundaries
also meet $M_0$, and the disks do not cover $W\setminus M_0$ — the trivial cobordism $M\times[0,1]$
has no critical points at all), and trajectories entering through $M_1$ need not pass through a
critical point. The lemma now adds the escape stratum $\mathcal E_p$ of trajectories leaving
through $M_0$, sends the attaching map into $M_0\cup$(lower closed cells), states the relative
statement as a homotopy equivalence of pairs $(W,M_0)\simeq(X,M_0)$ for the quotient relative CW
pair $(X,M_0)$, and states the boundary stratification
$\partial\overline W{}^u(p)=\mathcal E_p\sqcup\bigsqcup_q\mathcal M(p,q)\times\overline W{}^u(q)$.
The closed case is unchanged and remains Audin--Damian 4.9 with the disk theorem of Qin
(Nicolaescu §4.5 end, printed p. 200). The relative-case disk/CW assembly is a scaffold-level
combination of the in-run batch-1 handle items and the published core-disk corollary; no single
source read for this batch states the escape stratum in exactly this form. This caveat is recorded
here and in the coverage's canonical row, and is the main item for Step-3 review.

(e) **Sources.** The design's DT-10 source list (Audin--Damian §§3.3–3.5, 4.1, 4.6, 4.9;
Ritter Lectures 19–21; Nicolaescu §§2.5, 4.4–4.5) is wholly harvested; the manifest additionally
uses Fowdar Chs. 6–8 (orientation and gluing details) and Hutchings Lecture 21 (the continuation
route) for the items where the design's three treatments are thin. This is a superset, not a
conflict.

(f) **Added prerequisite items (7).** Beyond the design's 16 A-page entries the manifest scaffolds
seven prerequisites the design's route needs but does not name:
`lem-continuation-solutions-have-critical-limits`, `def-broken-continuation-trajectory`,
`lem-gluing-continuation-solutions-gives-collar-ends`,
`lem-orientation-lines-orient-continuation-moduli-spaces`,
`lem-continuation-map-of-constant-data-is-the-identity`,
`lem-compactified-unstable-manifolds-give-a-cw-decomposition` and
`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`. They lie inside the
design's stated scope (its "Hard-proof closure" paragraph explicitly asks for the compactified
moduli, the gluing collar and the exact relative cellular label), are placed on the same A page
before their consumers, and keep the design's claims intact. The B page has exactly the design's
five entries.

## 3. Dependency and readiness verification

Method: each item's `deps` array was read against the actual scaffold statements and strategies of
the suppliers (batch-5 and batch-1 manifests; published `items/*.md` for the 88 out-of-run
suppliers). Checked: hypothesis match, direction of the used implication, sign/dimension
conventions (the library's $df(X)<0$, $X=(2u,-2v)$ convention vs Milnor's upward field), the
relative/cobordism restrictions, and the finiteness/compactness hypotheses. Every declared
dependency resolves; no missing, circular, forward or inadequate dependency was found; no item
consumes a Recorded result to prove a replacement, and no path reaches
`deferred-set-theory-beyond-choice`.

Findings of this pass:

- All 28 items have complete proof strategies and adequate met prerequisites; all 28 readiness
  records are `ready`, none escalated. Readiness records were refreshed twice for A16 and its nine
  transitive consumers after the relative-case revision and its flow-theorem citation
  (`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`,
  `prop-relative-morse-complex-for-an-adapted-cobordism`,
  `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex`,
  `thm-morse-homology-is-naturally-isomorphic-to-singular-homology`,
  `cor-morse-homology-recovers-the-morse-inequalities`,
  `ex-continuation-across-a-birth-death-adds-an-acyclic-pair`,
  `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology`,
  `ex-relative-morse-homology-of-a-single-handle-cobordism`,
  `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation`); the final
  `step1-decisions check` reports 0 batch-6 flags.
- The relative-cobordism proposition and the B-page single-handle example were re-read against the
  revised A16; their claims (interior critical points, trajectories staying in the compact region
  between endpoint values, the chain isomorphism with the relative handle complex) use only the
  repaired clauses.
- `item-dependency-levels check --run` fails only on 26 empty inventories of other batches; no
  batch-6 page appears among the errors, and every batch-6 label matches the run-wide computation.

## 4. Axiom-strength bookkeeping

- Items whose statements explicitly assume the Axiom of Choice (16):
  - `def-morse-homology-of-a-morse-smale-pair`
  - `thm-continuation-trajectories-are-compact-up-to-breaking`
  - `lem-gluing-continuation-solutions-gives-collar-ends`
  - `lem-orientation-lines-orient-continuation-moduli-spaces`
  - `def-continuation-chain-map`
  - `thm-continuation-count-is-a-chain-map`
  - `thm-homotopic-continuation-data-give-chain-homotopic-maps`
  - `thm-continuation-composition-law-on-homology`
  - `thm-reverse-continuation-is-an-inverse-on-morse-homology`
  - `def-canonical-morse-homology-of-a-closed-manifold`
  - `lem-compactified-unstable-manifolds-give-a-cw-decomposition`
  - `lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`
  - `prop-relative-morse-complex-for-an-adapted-cobordism`
  - `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex`
  - `thm-morse-homology-is-naturally-isomorphic-to-singular-homology`
  - `cor-morse-homology-recovers-the-morse-inequalities`
- Items whose statements explicitly assume only $\mathrm{AC}_\omega$ (1): `lem-continuation-solutions-have-critical-limits` (inherited from the published single-limit lemma).
- Items whose statements assert no choice principle (11; the mod-two branches inside the
  AC-flagged items are choice-free, and the definitions and the remark carry none):
  - `def-regular-continuation-datum-between-morse-smale-pairs`
  - `lem-continuation-energy-identity`
  - `def-broken-continuation-trajectory`
  - `def-two-parameter-continuation-homotopy`
  - `lem-continuation-map-of-constant-data-is-the-identity`
  - `rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control`
  - `ex-continuation-across-a-birth-death-adds-an-acyclic-pair`
  - `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology`
  - `ex-relative-morse-homology-of-a-single-handle-cobordism`
  - `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation`
  - `cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity`
- Where AC enters: the published DT-9 compactness/gluing/finiteness suppliers, the orientation
  package (orientation-line choices and coherent orientations), the existence theorems for
  excellent Morse functions and Morse--Smale metrics, the handle-attachment suppliers, and the
  metric compactness equivalences. The integral branches of the homology and continuation-map
  definitions assume AC because they fix orientation lines; their mod-two branches are
  choice-free. No incompatible-axiom branch is created, no item assumes the negation of a
  consequence of AC, and no item consumes a choice principle stronger than AC.

## 5. Sources, stamps and coverage

Five sources, all downloaded in full and read at the cited locators (sha256_16 of the fetched
bytes; `source-fetch-check --stamp` recorded 8/8 source rows fetch-verified):

| source | kind | bytes | sha256_16 | batch-6 use |
|---|---|---|---|---|
| Audin--Damian, *Morse Theory and Floer Homology* (628 pp.) | textbook | 2,773,280 | `e162409dc3c24e7b` | continuation, cobordism complex, §4.9 CW comparison, relative disk example |
| Ritter, *Part III Morse Homology* (115 pp.) | lecture notes | 3,097,365 | `cb69c17956ad7b25` | continuation chain map, homotopy independence, composition/inverse, boundary case, inequalities |
| Nicolaescu, *An Invitation to Morse Theory*, 2nd ed. (291 pp.) | monograph | 1,821,860 | `c599a63debd5e6e6` | self-indexing filtration, Thom--Smale differential, CW decomposition (Qin, p. 200), compactness scope |
| Fowdar, *A Functional Analytic Approach to Morse Homology* (93 pp.) | course notes | 597,056 | `acda87fd14a8216f` | determinant-line orientations, gluing compatibility, chain homotopy |
| Hutchings (Van Dyke notes), Math 242 Lecture 21 | lecture notes | 323,559 | `48a109362a91e2e5` | continuation map, chain-map lemma, path independence, identity |

Every A-page item is backed by Audin--Damian and Ritter (two independent full treatments) plus
the Nicolaescu monograph; the analytic items additionally have Fowdar and Hutchings. The B page is
backed by Audin--Damian, Ritter and Nicolaescu plus the page-level computations.

Coverage: 89 harvested results over the two pages — 60 `included`, 16 `inline`, 6 `deferred`
(destinations `morse-trajectory-moduli-spaces-and-the-morse-differential` and
`intersection-pairings-self-intersection-and-euler-classes`, both in this run), 7 `out-of-scope`
with specific reasons. Every one of the 28 items now has at least one harvest row; the two items
that were initially uncovered (`lem-continuation-solutions-have-critical-limits` and
`rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control`) received
rows from the RI/AD/NI passages already declared in their sources. The relative-case caveat of
A16 and the Qin passage are recorded in the coverage's canonical and NI rows.

## 6. Command results (actual)

| check | result |
|---|---|
| `coverage-checklist research/frontier-41-ha-dt-29-batch-6.coverage.json --require-destination` | 2 pages, 89 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --coverage ... --stamp` (batch 6) | 8/8 source rows fetch-verified (8 newly stamped); check mode 8/8 resolved, 0 documented drops |
| `url-sweep --coverage ... --out ... --recover --fail-on-dead` (batch 6) | 5/5 URLs live, 0 failed, 0 recoverable, 0 suspect; 5 citation decisions, 0 source drops |
| `source-backing --coverage ... --liveness ... --require-verified` (batch 6) | 27 authored results, every one still backed |
| `manifest-deps` (all 29 run manifests) | 382 items, 0 normalized, 0 errors |
| `content-policy --manifest-only` (all 29 run manifests) | 382 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels check --run` | fails only on 26 empty scaffolds of other batches; 0 findings touching batch 6 |
| `step1-decisions check --run` | 382 items / 293 ready run-wide; all 28 batch-6 records closed, 0 batch-6 flags |
| `frontier-dependency-ledger refresh --run` | refreshed, 0 orphaned reviews; 70 batch-6 edges (69 item + 1 page), all reviewed, 56 into batch 5 and 14 into batch 1 |
| `frontier-dependency-ledger refresh --require-reviewed` | fails only because 17 other batches have not supplied inputs yet |
| `validate-plan research/plan-spec.json` | exit 0 (acyclic order; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages with item lists) |
| `extcheck` | exit 0 (183 recorded-not-proved, 40 resting; pre-existing, none introduced here) |
| `fwdcheck` | 23,441 items, 0 open forward references |
| `drift-review-check --run frontier-41-ha-dt-29 --before-apply` | 29 pages reviewed, exit 0; this page `no-drift` (`research/frontier-41-ha-dt-29-alpha-step1-drift.md` line 103) |
| `depcheck` (repo-wide, published content) | FAIL: 835 errors (833 `published-unaudited`, 2 `published-unchecked`) + 335 warnings; none references a batch-6 item; three findings touch published prerequisites of this batch (see §7) |
| `audit-manifest research/frontier-41-ha-dt-29-batch-6.pages.json` | 28 `missing-source` defects, one per scaffold id, because no batch-6 item is authored yet; expected at Step 1 and not a scaffold defect |

## 7. Published items examined; findings for the canonical ledger

All 88 published items in the batch's dependency closure were read at statement level and their
frontmatter checked: every one is `status: published` with a verification block. No mathematical
defect was found in the published statements actually consumed. Three mechanical/verification
findings in published prerequisites are recorded for owner reconciliation (published content was
not edited from this scaffold):

1. `items/lem-boundary-of-a-compact-one-manifold-has-even-cardinality.md` — depcheck
   `published-unaudited`: "status published but neither verification.audited nor
   verification.verified is set; no local repair receipt". Consumed by
   `thm-continuation-count-is-a-chain-map` (mod-two boundary parity). Publication state:
   published. Planned supplier: none (mathematics unchanged). Repair strategy: add the missing
   verification/audit receipt (or a local repair receipt) through the owner's published-repair
   process; the Statement and Proof need no change.
2. `items/lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count.md` —
   same `published-unaudited` finding. Consumed by `thm-continuation-count-is-a-chain-map` and
   `thm-homotopic-continuation-data-give-chain-homotopic-maps` (integral boundary
   cancellation). Repair strategy as in (1).
3. `items/thm-metric-compactness-equivalences.md` — depcheck `cited-not-in-deps`: the item cites
   `rem-compactness-choice-ledger-metric` in Statement/Facts but does not list it in `deps`.
   Consumed (transitively, through the DT-9 compactness theorem) by several batch-6 items.
   Publication state: published. Repair strategy: add the remark to the item's `deps` array (or
   remove the citation) in a published-content repair; the mathematics is unaffected.

No other published prerequisite of this batch carries a depcheck finding, and no batch-6 id
appears anywhere in the depcheck output. The batch-5-discovered typo in
`def-parametrized-morse-trajectory-space` is not consumed by this pair (it is not in any batch-6
`deps` array) and is left to that batch's record.

## 8. Remaining uncertainty and next steps

- **A16 relative case (main caveat).** The escape stratum and the relative quotient CW pair are a
  scaffold-level assembly from the in-run handle correspondence and the published core-disk
  corollary; no single authoritative text read for this batch states it in exactly this form.
  Step 3 must either supply the complete proof from those suppliers (the strategy gives the
  route: compactness of $W$, finite-time exit through the collar product model, slicing along
  $f$, and the core-disk identification) or escalate to the owner for a dedicated relative-case
  source. The problem statement and its consumers (A17, A18, B example 3) were aligned with the
  repaired wording.
- **Requires-array observation (b):** the local-coefficient route in the relative proposition
  either stays as an inherited published supplier or needs a plan amendment adding AT-23
  `local-coefficients-twisted-homology-and-duality`; owner/Step 4 decision, no manifest change
  made here.
- **Step-3 authoring load:** the continuation compactness/gluing and the orientation-line lemma
  carry the analytic work (uniform constants, Fredholm setup, collar gluing); the strategies name
  the exact suppliers and the remaining details.
- No other unresolved mathematical uncertainty was found; nothing was escalated, and no
  `source_resolution` record was needed (all five sources were fetched in full, so no drop or
  owner-escalation branch applies).
- Owner/operator reconciliation and the full engine gate follow construction; a worker exit and a
  readiness record are not independent mathematical approval. Step 3 provides that review.
