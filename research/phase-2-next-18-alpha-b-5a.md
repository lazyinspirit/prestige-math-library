# Step 5A Alpha group b — authored-content review (batches 3 and 4)

Run: `phase-2-next-18`. Group `b` covers batch 3 (`the-serre-spectral-sequence-and-applications`
and its examples, `leray-hirsch-thom-isomorphism-and-gysin-sequences` and its
examples; 58 items) and batch 4
(`topological-vector-bundles-and-grassmannian-classification` and its examples,
`complex-topological-k-theory-and-bott-periodicity` and its examples; 60 items).
All 126 `authored:*` obligations were decided on disk at the authored
state — 118 items and the 8 page carriers — with **118 `accepted` and 8
`repaired`**; **no `escalated`** decision, no withdrawal and no new pair or page.
No local definition or lemma was needed: every dependency the authors used is
present in this run's inventory or in published content.

Decisions file: `research/phase-2-next-18-alpha-b-5a-decisions.json`
(`{version:1, run, group:"b", decisions}`; the engine's stamp gate adds the
current carrier hashes).

## Method

Every item in `research/phase-2-next-18-step5-scope-3.json` and
`research/phase-2-next-18-step5-scope-4.json` was read on disk, step by step,
against the actual clause of each cited supplier rather than against the Step 3
scaffold checklist; the eight A/B pages were read against their item
inventories. I read the published suppliers whose precise wording carries the
argument — in particular
`def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex` and
`lem-spectral-sequence-subquotient-and-local-lifting-calculus`
(`A^r_{p,n}=F_pC_n cap d^{-1}F_{p-r}C_{n-1}`,
`B^r_{p,q}=A^{r-1}_{p-1,n}+d(A^{r-1}_{p+r-1,n+1})`),
`def-r-page-of-the-spectral-sequence-of-a-filtered-complex`,
`def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`,
`def-strong-convergence-of-a-spectral-sequence`,
`thm-universal-coefficient-theorem-for-homology-over-a-pid`,
`thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`,
`thm-principal-bundles-are-classified-by-maps-to-bg`,
`thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere` and the
published local-coefficient/cellular suppliers. Two convention interfaces were
checked in the definitions themselves: the exact `A^r`/`B^r` subquotient
formulas (used by the relative-cell, `d_1`, transgression and convergence
proofs) and the cohomological `d_r` bidegree `(r,1-r)`. The four-page companions
(`*-examples`) were read as carriers: their prose matches the itemized items,
including the additive-only loop-space claim, the explicit non-splitting
warnings and the local-system counterexamples.

## Batch 3 — the Serre spectral sequence and its applications

Read and accepted (25 A items, 7 examples). Checks that carried real risk:

- **Strict fiber vs homotopy fiber**
  (`lem-serre-fibration-replacement-preserves-fiber-homology-transport`): the
  surjectivity half is the finite Serre lifting of the adjointed homotopy over
  `(I^n, dI^n)` with prescribed strict-fiber lift; the injectivity half
  straightens the cube `I^n x I` relative to its boundary. The text compresses
  the step that makes the conclusion valid — on the slice `t=0` the second
  coordinate of the nullhomotopy is the *constant* path, so that slice stays in
  `F_b` and yields `c ~ w(.,0) ~ const` inside `F_b`. With that observation the
  argument is complete; no repair was made and the item was accepted. Step
  1.2's finite-CW compression with the prism identity covers `k=0` and `k>0`,
  so the weak-equivalence transfer (3.1) and the transport naturality (4.1) are
  sound and choice-free.
- **`E^1` and `d_1`** (`lem-relative-homology-over-one-base-cell-...`,
  `lem-the-first-serre-differential-...`): the deformation-retract lifting
  lemma for Serre fibrations, the iterated hemisphere connectors with their
  orientation signs, the collar/excision separation with finite additivity and
  the reflection sign for an orientation-reversing incidence were each checked;
  the incidence formula matches the published group-ring convention.
- **Convergence** (`thm-homological-serre-spectral-sequence`,
  `thm-cohomological-serre-spectral-sequence`): the homological side proves
  `F_nH_n=H_n` from one finite representative plus a lift instead of assuming
  degreewise finiteness; the cohomological side proves
  `H_k(E,E_m)=0 (k<=m)` by finite cellular approximation, splits the product
  cochain complex by *choosing primitives coordinatewise* (the declared AC use,
  which is also what avoids a `lim^1` gap) and then compares with a finite
  quotient at `N=2n+3`.
- **Edge maps and transgression**
  (`def-serre-edge-homomorphisms-and-transgression`,
  `prop-serre-edge-maps-...`, `prop-serre-transgression-agrees-...`): I verified
  that no differential enters `(n,0)` for `2<=r<=n-1` and none leaves
  `(0,n-1)`, so `D_n`/`Q_{n-1}` are the right surviving subgroup and quotient;
  the representative-independence step uses
  `B^n_{0,n-1}=d(A^{n-1}_{n-1,n})`, which makes `∂a` for
  `a in A^{n-1}_{n-1,n}` a target `n`-boundary.
- **Multiplicativity**: the DGA page-lemma
  (`lem-multiplicative-filtered-cochains-...`) was checked containment by
  containment; the Serre theorem
  (`thm-multiplicative-structure-...`) explicitly avoids the false
  filtered-cup shortcut and builds a filtered diagonal from a cellular diagonal
  of the base lifted through the Hurewicz replacement, then ascends a paired
  exact couple. Residual uncertainty is confined to the sign conventions of the
  two published suppliers it cites for relative products; every internal
  consistency check (Leibniz rule, `(-1)^{bc}` in the `E_2` product, back-face
  reverse transport) passed.
- **Collapse, Gysin, Wang** (`prop-degree-and-parity-criteria-...`,
  `thm-gysin-sequence-from-a-sphere-fiber-...`,
  `thm-wang-sequence-...`): the endpoint/parity criterion and the two-row
  splices were recomputed; the Gysin sign
  `d_{n+1}(a u)=(-1)^{|a|}a cup e` follows from the recorded Leibniz rule, and
  the Wang complex of the one-cell circle has boundary `1-T_q`.
- **Serre classes** (`def-serre-class-ring-ideal-and-mod-c-morphism` through
  `thm-serre-finiteness-transfer-...`) and the rational Eilenberg–Mac Lane
  computation were checked; one citation defect was found and repaired (below).

## Batch 3 — Leray–Hirsch, Thom and Gysin

Read and accepted (20 A items, 6 examples). Risk-bearing checks: the global
fiber basis forces the transport matrix to be the identity; the associated-graded
lift lemma is applied to the *actual* filtered map and chooses no splitting; the
arbitrary-ring disk-pair computation (the local repair the construction notes
promised) is a correct Mayer–Vietoris recursion with the unit-action statement;
the trivial-bundle Thom isomorphism is the iterated interval connector with its
unit signs; the two-open gluing is a relative Mayer–Vietoris five-lemma with a
correct uniqueness argument; the general theorem reads one orientation row off
the relative Serre sequence; Euler class and Gysin pushforward are the usual
composites `s^*j^*u` and `j^*(pi^*a cup u)`; the sphere-bundle Gysin sequence is
the pair sequence rewritten; and the counterexamples (Klein-bottle torsion,
Möbius mod-two sign, no integral fiberwise generator) were recomputed,
including the `H^1(K)=Z` computation via `Hom(Z direct sum Z/2, Z)`.

## Batch 4 — vector bundles, Grassmannians, K-theory

Read and accepted (26 + 20 A items, 8 + 6 examples). Risk-bearing checks: the
cocycle reconstruction and gauge isomorphism; the numerable-metric and
partition/DC bookkeeping (AC -> DC derived locally, then spent once); the compact
complement theorem's projection formula; the numerated embedding/Gauss map and
the homotopy-invariant classification bijection (with numerability kept
explicit); the explicit Stiefel contraction; Schubert cells as a finite and
stable CW structure; the clutching and oriented-clutching classifications with
their stable ranges; the Grothendieck completion, stable-isomorphism form and
rank map; the cofibration exact sequence of reduced K-theory (Tietze extension
of a stable trivialization to a neighborhood); the whole Bott chain — normalized
clutching data, Fejér/Laurent approximation, clearing negative powers with
`gamma`, the explicit block linearization `L_nq`, the continuous spectral
splitting, and the fundamental product theorem with its explicit inverse `nu`
and `nu mu = id`; Bott periodicity, the sphere groups, and the two-periodic
multiplicative theory. The two classification counterexamples (no finite-rank
complement for the tautological line over `RP^infinity`; the nonnumerable long
line tangent bundle) were checked as written.

## Repairs (all local; 9 closed defect rows, `repair_confidence: 1`)

Defect rows were appended through `tools/defect-ledger.mjs append`
(run `phase-2-next-18`, `caught_at_stage: 5a-adjudicate`,
`caught_by_role: group-alpha`).

| defect | subject | exact change | before -> after (guard hash) |
|---|---|---|---|
| `5a-b-001` | `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` | two display macros written without the leading backslash (`,qquad`, `P^r,qquad`) restored to `,\qquad` | `42c90bff...` -> `b3974b6e...` |
| `5a-b-002` | `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration` | three missing backslashes before `qquad` (statement and both proof steps) restored | `20114d6a...` -> `be4525d7...` |
| `5a-b-003` | `def-whitney-sum-monoid-of-complex-vector-bundles` | `$$operatorname{Vect}_{...}$$` -> `$$\operatorname{Vect}_{...}$$` | `4863fad5...` -> `bf12b5df...` |
| `5a-b-004` | `cor-complex-k-theory-of-spheres` | `,qquad` in the sphere-group display restored to `,\qquad` | `734b52df...` -> `d69a059e...` |
| `5a-b-005` | `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` | `,qquad` in the coefficient display restored to `,\qquad` | `d8e4df23...` -> `8a6ea69b...` |
| `5a-b-006` | `cor-serre-finite-generation-torsion-and-p-primary-transfer` | step 2.1 cited the bounded transfer theorem, whose hypothesis (`every E^2` term with `p+q<=N` in the class) fails at `E^2_{0,0}=Z` for the torsion and `p`-primary classes. The step now records the axis terms and applies the transfer argument on the positive-total-degree region, noting that the isolated `(0,0)` term has no outgoing first-quadrant differential and contributes only to `H_0`. | `236b71a3...` -> `58662d68...` |
| `5a-b-007` | `thm-wang-sequence-for-a-fibration-over-the-circle` | owning contract's `iff-reverse` boundary row replaced the boilerplate "No converse or splitting assertion is made." by this item's actual one-way content | contract row only |
| `5a-b-008` | `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration` | same boilerplate row made item-specific | contract row only |
| `5a-b-009` | `ex-wang-sequence-of-a-mapping-torus` | same boilerplate row made item-specific | contract row only |

The three template rows (`5a-b-007/008/009`) were found by running
`tools/boundary-audit.mjs --fail-on-template`; before the repair it reported one
template cluster of three `iff-reverse` rows and exited non-zero, after it
reports `template_clusters: 0` and exits 0. No item text changed in those three
repairs, so no precheck reflow was required for them; the six items with text
edits were re-prechecked individually.

Because the LaTeX repairs changed two statement displays and one definition
display, four consumer citations in the batch-4 contract went stale; they were
regenerated with `tools/regen-contract-entries.mjs` (only the four `quote`
fields changed — verified by JSON diff), and `tools/proof-contract.mjs --strict`
now reports no mismatch for any batch-3/4 item.

## Risk reviews

`tools/risk-report.mjs` (threshold 5) marks 51 items in batch 3 and 32 in batch 4
as high or critical. All 83 received a complete `risk_review`
(`status: "complete"`, `reviewer: "alpha-5a-b"`, item-specific notes) written
into the owning batch contracts in this same read with
`tools/apply-risk-reviews.mjs`; the notes state the actual risk, the clauses
checked and the conclusion. `risk-report ... --require-reviewed` now reports no
missing review for any item of batches 3 or 4.

## Published findings and ledgers

No **published** item was judged defective in this group's scope, so no entry
was added to `research/published-consumer-supplier-ledger.md` and its lock was
not taken. The published suppliers read here (spectral-sequence subquotient
calculus, edge maps, strong convergence, UCT, EM uniqueness, principal-bundle
classification, even-sphere tangent fields, local-coefficient cellular chains)
were used exactly within their stated hypotheses.
`research/phase-2-next-18-batch-3.cross-batch-dependencies.json` already carries
`verified` rows for the eight batch-3 -> batch-4 edges and the page edge, with
evidence matching the current supplier texts; the batch-4 input is the empty
array (batch 4 has no same-frontier cross-batch dependency). No refresh of the
unified ledger was needed because no input row changed.

## Checks actually executed

- `node tools/tsx-run.mjs tools/precheck.mts <the six edited items>` — 5 checked,
  0 failing (`def-whitney-sum-monoid-of-complex-vector-bundles` is
  non-proof-bearing and is skipped by the tool).
- `node tools/merge-proof-contracts.mjs --level phase-2-next-18 /tmp/merged-18.json ...`
  and `node tools/proof-contract.mjs /tmp/merged-18.json --strict` — the only
  remaining error is another group's `lem-enflo-symmetry-averaging-and-block-assembly`
  quote; no batch-3/4 item errors.
- `node tools/boundary-audit.mjs /tmp/merged-18.json --fail-on-contradicted --fail-on-template`
  — exit 0, `template_clusters: 0`, `contradicted_candidates: 0` (4 rows upheld
  by earlier owner reviews; 0 of them mine).
- `node tools/risk-report.mjs research/phase-2-next-18-batch-{3,4}.proof-contracts.json --require-reviewed`
  — no error for any item in either batch.
- `node tools/finite-smoke.mjs /tmp/merged-18.json` — 0 errors.
- `node tools/defect-ledger.mjs validate --run phase-2-next-18` — 13 rows,
  0 errors.
- `node tools/step5-scope.mjs check --run phase-2-next-18 --phase adjudicate --batch 3`
  — the only errors are the 126 `decision-stale` rows because the decisions file
  has not yet been stamped with carrier hashes; the engine's
  `step5-decision-stamp` gate performs that stamp. No `decision-missing`,
  `decision-extra`, `decision-route`, `decision-evidence`,
  `decision-ledger-refs` or `ledger-*` errors.

## Shared-plan and Phase-2 amendments

None required: no item was added, dropped or reordered, no page split is
requested, no withdrawal is proposed and the manifest/coverage/provenance and
dependency records are unchanged. For the serial lead's information only: the
positive-degree form used by the repaired `cor-serre-finite-generation-torsion-and-p-primary-transfer`
step is proved inside that step, so
`thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class` does not
need a statement change; if 5B prefers it, a one-sentence positive-degree clause
there would make the citation literal.

## Blockers

None for this group. One honest residual-uncertainty note, recorded rather than
asserted as a defect: in `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`
the page product's sign is fixed by the conventions of the published relative
product and local-cup suppliers (`def-additive-singular-cohomology-cross-product`,
`def-cup-and-cap-products-with-local-coefficient-pairings`); I verified every
internal consequence (Leibniz rule, `(-1)^{bc}`, associativity and unit
propagation) but did not re-derive those two published sign conventions from
scratch.
