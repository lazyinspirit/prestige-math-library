# Step 3b — pair `quantum-affine-type-a-and-level-one-fock-space` (batch 9)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-quantum-affine-type-a-and-level-one-fock-space-f78bd047e0d22966`.
Owned A page `quantum-affine-type-a-and-level-one-fock-space` (order 1534, 24
items) and B page `quantum-affine-type-a-and-level-one-fock-space-examples`
(order 1535, 5 items); batch 9 contains only this pair, so no sibling rows exist
in the shared batch files. Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md` §Step 3, batch-9 manifest/coverage/notes/cross-batch input,
`step3a` pair report and review, the owner direction and
`…-owner-quantum-fock-repair.md`, `plan-quantum-groups-track.md` QG-6, the
auditor baseline (all 29 IDs are baseline originals, so ordinary item
decisions are owed for every one), and the published suppliers.

## Owned IDs and open obligations (entry checkpoint)

A page (dependency_level order): `def-cyclic-affine-type-a-cartan-datum` (0),
`def-the-level-one-vector-representation-its-affinization-and-energy-function`
(1), `def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation`
(2), `lem-integrable-rank-one-actions-force-the-quantum-serre-relations` (2),
`lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel` (3),
`lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis`
(5), `def-finite-q-wedge-space-and-normal-ordering-relations` (6),
`lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel` (7),
`thm-normally-ordered-q-wedges-form-a-basis` (8),
`def-semi-infinite-q-wedge-fock-space-and-q-adic-topology` (9),
`lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness` (10),
`lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas`
(11), `def-level-one-partition-fock-space-and-node-residues` (12),
`lem-the-node-count-is-the-level-one-cartan-pairing` (13),
`def-the-node-order-and-n-i-exponents-for-fock-space` (14),
`lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices` (15),
`def-good-and-cogood-nodes-by-residue-signature-reduction` (16),
`thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` (16),
`prop-the-empty-partition-generates-an-integrable-highest-weight-submodule` (17),
`thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` (17),
`thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable` (17),
`thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` (18),
`def-regular-partition-label-convention-and-mullineux-crystal-involution` (19),
`thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`
(20).

B page: `ex-level-one-fock-node-actions-for-partitions-up-to-three` (17),
`ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions` (18),
`ex-good-node-crystal-component-for-equals-three` (19),
`cex-the-whole-partition-fock-space-is-not-the-basic-representation` (21),
`ex-unitriangular-global-basis-elements-in-small-rank` (21).

Open obligations at entry: (1) author all 29 item files and both pages
`library/special-topics-in-representation-theory/…-fock-space.md` and
`…-fock-space-examples.md`; (2) keep the batch-9 manifest,
coverage and cross-batch input consistent with the authored claims and actual
dependency uses; (3) write
`research/frontier-44-special-representation-examples-28-batch-9.proof-contracts.json`
with per-step inputs, exact citation excerpts and boundary dispositions;
(4) run the focused checks (proof-layout, precheck, rendercheck,
content-policy, depcheck/depsource, item-dependency-levels, validate-plan,
frontier-dependency-ledger refresh, manifest-deps, coverage-checklist) and
record one `record-item` decision per item; (5) flag unfinished in-run
suppliers with exact consumer IDs and consuming steps. Direct in-run
prerequisite pairs to inspect: `balanced-triples-and-global-crystal-bases` and
`tensor-product-crystals-and-highest-weight-crystal-uniqueness` (both still
being authored; their items are absent from `items/` at entry).

## Entry audit of the scaffold

The batch-9 manifest carries all 29 scaffolds with statements, strategies,
provenance and sources; coverage has 57 A rows and 41 B rows; the 39
cross-batch rows declare the supplier edges. Audit findings before authoring:

- No missing prerequisite inside the pair: every pair item's declared deps
  resolve inside the pair or to a named in-run/published supplier. Every
  in-run supplier (batches 5–8: crystal, integrable-module, lower-global-basis
  items) is **not yet authored** as of this entry, so every consumer is
  authored against the provisional scaffold interface and left escalated with
  the exact supplier and step recorded in the log below.
- `def-cyclic-affine-type-a-cartan-datum` and the two rank-one items are
  self-contained; the Hecke/wedge chain (items 2–8) is closed inside the pair
  except for the crystal/global suppliers.
- All statements were checked for internal consistency against the fixed
  library conventions recorded in the owner direction (residues $c-r\bmod e$,
  level-one weights $\Lambda_0-\sum m_i\alpha_i$, $S=-qt$ with
  $S^2=(Q-1)S+Q$, $Q=q^2$). No scaffold statement needed a claim change.

## Checkpoint log

(updated after each item; resume here)

### Level-0 item: `def-cyclic-affine-type-a-cartan-datum`

- **Authored** `items/def-cyclic-affine-type-a-cartan-datum.md` (draft,
  `dependency_level: 0`, provenance ai-altered/ai-altered). Claim: the cyclic
  affine type A matrix/symmetrizer/lattices with $\alpha_i=\sum_j a_{ji}\Lambda_j+\delta_{i0}\delta$
  form a symmetrizable Cartan datum; roots independent, $\sum_i\alpha_i=\delta$,
  $\langle c,\alpha_j\rangle=0$, levels, root form, diagram reflection $\tau$.
- **Route/conventions.** Row sums $2-1-1=0$ resp. $2-2=0$; root independence by
  the cycle second-difference argument (differences constant, sum zero) and the
  $e=2$ pair of equations; root form defined on the rational splitting
  $P\otimes\mathbb Q=(Q\otimes\mathbb Q)\oplus\mathbb Q\Lambda_0$ (deliberately
  distinct from the lattice pairing); $\tau$ checked on basis pairs.
- **Checks.** `precheck` PASS (direct, 10 steps); `proof-layout` 1 item,
  10 steps, 0 defects. Decision owed at handoff.

### Level-1 item: `def-the-level-one-vector-representation-its-affinization-and-energy-function`

- **Authored** `items/def-the-level-one-vector-representation-its-affinization-and-energy-function.md`
  (draft, `dependency_level: 1`). Claim: the derived vector module $V$, its
  affinization $u_m=z^av_j$ ($m=j-ae$), weights $\Lambda_j-\Lambda_{j-1}+a\delta$,
  $K_d$-eigenvalue $q^a$, crystal data $f_ib_j=b_{j+1}$, $e_ib_j=b_{j-1}$,
  $\varepsilon(b_j)=\Lambda^{\mathrm{cl}}_{j-1}$, $\varphi(b_j)=\Lambda^{\mathrm{cl}}_j$,
  the opposite-channel rule and energy $H_{\mathrm{op}}=\chi(j>k)+b-a$ with
  axioms (E1),(E2),(E3),(E4), the criterion $H_{\mathrm{op}}>0\iff m_1>m_2$ and
  the ground identities $H_{\mathrm{op}}(b^\circ_s\otimes b^\circ_{s+1})=1$,
  $\varepsilon(b^\circ_s)=\varphi(b^\circ_{s+1})$.
- **Route/conventions.** All relations checked on the explicit cyclic shifts
  ($E_i^2=F_i^2=0$ makes the Serre sums vanish); the opposite channel is the
  KMPY $\otimes_+$ rule (2.2.13), and its constancy on components was verified
  by the two-factor case analysis in proof step 5.1 (numerically cross-checked
  for $e=2,3,4$ during authoring, then proved). No source claim is imported
  without a local proof.
- **Checks.** `precheck` PASS; `proof-layout` 10 steps, 0 defects; `rendercheck`
  clean (display math normalised to the one-line form).

### Items 3-29 (authored in dependency order; statement claims follow the
batch-9 manifest unchanged unless noted)

Every line records the item's `dependency_level`, the recorded
`tools/step3-decisions.mjs` decision, the authored claim in one clause, and the
handoff checks (all items: `precheck` PASS on the explicit path, one mapping in
the batch-9 proof contract, inclusion in the batched `proof-layout` run of 29
items/145 steps with 0 defects).

- `def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation` (2, **repaired**): affine Hecke action with $S^2=(Q-1)S+Q$, the three-case residue operator, the divided-difference loop extension and commuting fixed $U_q$-action. Repairs: steps 4.1/5.1 named nonexistent steps 1.2/3.2/3.3 - re-pointed to the steps that prove the claims (1.1/2.1/3.1 for the relations; 2.2/2.3/4.1 for commutation); fact F5 now cited at the two steps that use it (2.3, 4.1).
- `lem-integrable-rank-one-actions-force-the-quantum-serre-relations` (2, **repaired**): the rank-one Serre engine. Repair: declared `def-drinfeld-jimbo-quantized-enveloping-algebra` as a dependency to match facts F1/F5. Its supplier `thm-unique-kashiwara-i-string-decomposition` (batch 6) is now authored; the contract quotes its statement and the use at F3/step 1.2 is aligned.
- `lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel` (3, accept): $A_N^2=C_NA_N$, $\ker A_N=\sum_i\ker(S_i+1)$, the splitting, the two-factor picture.
- `lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis` (5, accept): level-one perfect crystal on $V$, connected tensor square, lower global basis with vanishing divided powers.
- `def-finite-q-wedge-space-and-normal-ordering-relations` (6, **repaired**): the finite $q$-wedge quotient and its three normal-ordering relations. Repairs: cited the nonzero-$q$ fact F4 at step 1.1; the Hecke dependency missing from the manifest row was added there; a wrapped display block was joined.
- `lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel` (7, **repaired**): the normalized $R$-matrix kernel equals $\ker(S+1)$ and the flip gives the KMPY energy braiding. Repairs: the phantom step token produced by a KMPY section number in step 4.1 was reworded; a wrapped display block was joined.
- `thm-normally-ordered-q-wedges-form-a-basis` (8, accept): terminating straightening, field and Laurent bases, the $W_0$ crystal chart.
- `def-semi-infinite-q-wedge-fock-space-and-q-adic-topology` (9, **repaired**): charge-$M$ direct limit, $q$-adic topology via $q^nF_0$, vacuum weights $\Omega_M$, no false periodicity. Repairs: declared the cited vector-representation and Cartan-datum items as dependencies; repaired double-bracket notation that a renderer would resolve as a wikilink, and joined a wrapped display block.
- `lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness` (10, **repaired**): tail vanishing, deep-insertion convergence, nilpotent period operator and finite geometric sums. Repair: declared the two cited prerequisite items as dependencies.
- `lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas` (11, **repaired**): partition indexing and the stable-prefix node formulas. Repair: joined a wrapped display block.
- `def-level-one-partition-fock-space-and-node-residues` (12, **repaired**): charge-0 partition Fock space, residues $c-r$, regular/restricted dictionary. Repair: joined a wrapped display block.
- `lem-the-node-count-is-the-level-one-cartan-pairing` (13, **repaired**): $N_i=\delta_{i0}-\sum_j a_{ij}m_j$, $\sum_iN_i=1$, central action $q$. Repair: declared the node-convention definition as a dependency (facts F1/F2).
- `def-the-node-order-and-n-i-exponents-for-fock-space` (14, **repaired**): increasing-content node order, signed exponents $N^r_i,N^l_i$, Chevalley-minimiser warning. Repairs: declared the node-convention dependency; joined two wrapped display blocks.
- `lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices` (15, **repaired**): fixed-residue orbits are finite Boolean cubes equal to rank-one tensor powers, with the survivor rule in either content order (e=2 included). Repair: declared the node-convention dependency.
- `def-good-and-cogood-nodes-by-residue-signature-reduction` (16, accept): the $-+$ cancellation convention, good $=$ first surviving $-$, cogood $=$ last surviving $+$, confluence.
- `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` (16, accept): all toral/mixed/Serre relations, cubic coefficient at $e=2$, integrability on finite cubes.
- `prop-the-empty-partition-generates-an-integrable-highest-weight-submodule` (17, **escalate**): $M=U_q|\varnothing\rangle\cong V(\Lambda_0)$ with lattice $U_A^-|\varnothing\rangle$. Open: step 3.1 cites F3 to `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` (batch 5), unauthored at handoff.
- `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` (17, **repaired**): crystal basis $(F_0,B_F)$ on all partitions with survivor operators; empty component exactly the regular partitions. Repair: declared the node-count lemma as a dependency (F2).
- `thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable` (17, **escalate**): stable-prefix integrable action, wedge product formulas, finite stabilization, declared choice. Open: step 3.1 cites F3 to `prop-integrable-quantum-highest-weight-modules-are-semisimple` (batch 5), unauthored at handoff. Repair in the same item: a wrapped display block was joined.
- `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` (18, accept): $B(\Lambda_0)$ occurs once, decomposition $F=\bigoplus_k V(\Lambda_0-k\delta)^{\oplus p(k)}$ and the character identity under the declared choice.
- `def-regular-partition-label-convention-and-mullineux-crystal-involution` (19, **escalate**): same-model Mullineux involution versus conjugation between the regular and restricted models. Open: steps 1.1/2.1 cite F2 to `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` (batch 5), unauthored at handoff. Repair in the same item: declared `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` as a dependency (F1).
- `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` (20, **repaired**): semi-infinite wedge bar, unitriangular $G(\lambda)$ on all partitions, exactly the regular elements form the basic lower basis, false transpose symmetry. Repairs: joined a wrapped display block; the two batch-8 suppliers (`def-lower-global-basis-of-a-quantum-highest-weight-module`, `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`) are now authored and their statements are quoted in the contract.
- `ex-level-one-fock-node-actions-for-partitions-up-to-three` (17, **repaired**): complete size-$\le3$ tables at $e=2,3$ with the Leclerc Exercise 15 calibration. Repair: declared the cited node-action and node-count suppliers as dependencies (F1/F3).
- `ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions` (18, **repaired**): the four-term cubic Serre cancellation at $e=2$ on $2,11,21$ and the $E$-check on $321$, plus noncommutation. Repairs: declared the node-residue dependency; removed the unused fact line F3 (no numbered step cited it).
- `ex-good-node-crystal-component-for-equals-three` (19, accept): the empty component through size 3 at $e=3$ and the boundary shape $111$.
- `cex-the-whole-partition-fock-space-is-not-the-basic-representation` (21, accept): $|1^e\rangle$ and its lower lift lie outside $M$, with the $p(k)$ decomposition.
- `ex-unitriangular-global-basis-elements-in-small-rank` (21, accept): degree-$\le4$ global basis elements and the matrix showing the transpose-conjugation symmetry fails.

## Two pages (new)

- `library/special-topics-in-representation-theory/quantum-affine-type-a-and-level-one-fock-space.md` (`page`, `status: draft`, all 24 A items in dependency order, `requires` the manifest's three pages, objective prose plus the item-by-item narrative).
- `library/special-topics-in-representation-theory/quantum-affine-type-a-and-level-one-fock-space-examples.md` (all 5 B items in the `examples` list, companion prose with the finite computations).

Both parse under `rendercheck` (frontmatter YAML, wikilinks, math spans). The A
page `requires` `balanced-triples-and-global-crystal-bases`, whose page file
landed while this dispatch was open; `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
is authored; `young-diagrams-tableaux-and-permutation-modules` is published.

## Audited repairs and reconciliations

1. **Dangling and phantom step references (strict-contract traps).** Three
   items cited step numbers that do not exist in their own proof
   (`def-the-level-one-vector-representation-...` step 4.1 "(2.2.13)";
   `def-the-affine-hecke-...` steps 4.1 and 5.1 "3.2/3.3/1.2";
   `lem-the-q-wedge-relations-...` step 4.1 "[KMPY 3.3]"). Repaired by citing
   the source section in words and re-pointing to the steps that actually prove
   the claims. Every item was then scanned for `\d+\.\d+` tokens that do not
   resolve to a numbered step: none remain.
2. **Dependency declarations reconciled with actual fact uses.** Fourteen
   cited sources were added to item `deps` (and the matching manifest rows)
   across eleven items: the enveloping algebra definition; the vector
   representation and Cartan datum (two items); the node-convention definition
   (three items); the node-count lemma (three items); the crystal-of-Fock
   theorem; the node-residue definition; the two supplier deps of the B item
   `ex-level-one-fock-node-actions-...`; and the batch-5 deps already carried by
   the two escalated items. Two further manifest rows were updated to match
   deps already present in the authored wedge files. Levels recomputed:
   `node tools/item-dependency-levels.mjs check --run ...` still reports
   `862 item(s) checked across 100 page(s)`, so no in-run level changed.
3. **Fact-block hygiene.** Fact F5 of the Hecke item is now cited at steps 2.3
   and 4.1; fact F4 of the finite-wedge item at step 1.1; the unused F3 of the
   double-edge example was removed. Every remaining linked fact has a nonempty
   step-use set.
4. **Rendering.** `rendercheck` initially reported 13 defects across 8 items
   (9 display blocks hard-wrapped across source lines, 4 `[[q]]` double-bracket
   spans inside math that the renderer would resolve as wikilinks); the batched
   display join rewrote 10 files in total. All were
   repaired (`[[q]]` written as `[\![q]\!]`, display blocks joined one-line);
   the final run over all 29 items plus both pages is clean.

## Proof contracts

`research/frontier-44-special-representation-examples-28-batch-9.proof-contracts.json`
(version 1, 29-item scope) carries authored boundaries for all 232 rows (8
axes per item), generated citations and per-step derivations from the current
item text (`tools/regen-contract-entries.mjs`), and 4 explicit stub citations
for the two still-unauthored suppliers. `boundary-audit` reports 0 template
clusters and 0 contradicted rows; `proof-contract --strict` reports exactly 3
`citation-source-missing` errors, all from the queued batch-5 suppliers, and 2
mechanical `shotgun-bracket` warnings. When those suppliers land, regenerating
this file and re-running the strict check replaces the stubs with quoted
statements.

## Checks actually run (handoff state)

| Check | Command (abbreviated) | Result |
|---|---|---|
| precheck (explicit paths) | `tools/precheck.mts` on all 29 items | 29 checked, 0 failing |
| proof layout | `tools/proof-layout.mjs` on all 29 items (one batched run) | 29 items, 145 steps, 0 defects; no file needed rewriting |
| rendering | `tools/rendercheck.mjs` on the 29 items + 2 pages | OK (after the repairs above) |
| content policy | `tools/content-policy.mjs ...batch-9.pages.json` | 29 scoped items, 0 errors |
| dependency graph | `tools/depcheck.mjs` on the 29 items | no hard errors |
| dependency sourcing | `tools/depsource.mjs --run ... --items-file` | 29/29 consumers, 0 unresolved |
| dependency levels | `tools/item-dependency-levels.mjs check --run ...` | 862 items/100 pages, levels consistent |
| manifest deps | `tools/manifest-deps.mjs ...batch-9.pages.json` | 29 items, 0 errors |
| coverage checklist | `tools/coverage-checklist.mjs ...batch-9.coverage.json` | 2 pages, 98 rows, 0 errors |
| plan validation | `tools/validate-plan.mjs research/plan-spec.json --run ...` | 5 errors, none on this pair (see pre-splice mismatches) |
| proof contracts (strict) | `tools/proof-contract.mjs ...batch-9.proof-contracts.json --strict` | 3 errors (the two unauthored suppliers), 2 warnings |
| boundary audit | `tools/boundary-audit.mjs ...batch-9.proof-contracts.json` | 232 rows, 0 template clusters, 0 contradicted |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run ...` | refreshed; 39 batch-9 rows updated with actual uses |
| scope decisions (group j) | `tools/scope-decisions.mjs check --run ... --group j` | 19 batch-9 declines decided "stands"; 10 sibling batch-10/11 rows still pending for their owners |
| item decisions | `tools/step3-decisions.mjs check --run ... --phase final` | this pair's 29 receipts recorded (10 accept, 16 repaired, 3 escalate) |

## Unfinished in-run suppliers (escalated; exact consumer and step)

1. `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`
   (batch 5, file absent). Consumers: `prop-the-empty-partition-generates-an-integrable-highest-weight-submodule`
   fact F3 at proof step 3.1, and
   `def-regular-partition-label-convention-and-mullineux-crystal-involution`
   fact F2 at proof steps 1.1 and 2.1. Both item decisions are `escalate`
   (`defects: ["dependency"]`).
2. `prop-integrable-quantum-highest-weight-modules-are-semisimple` (batch 5,
   file absent). Consumer: `thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable`
   fact F3 at proof step 3.1. Decision `escalate`.

No supplier was added by this pair (no new IDs), so all 29 IDs remain baseline
originals with ordinary current item decisions.

## Pre-splice plan mismatches reported for Step 4 (other pairs; not hidden)

`validate-plan --run frontier-44-special-representation-examples-28` fails on
five edges outside this pair: `def-the-local-ring-at-q-zero` depends on the
B-page item `ex-localisation-of-a-pid-at-a-prime` (b-leaf), with the matching
undeclared page prerequisite on `kashiwara-operators-and-crystal-lattices`;
undeclared prerequisites on `character-polynomials-fi-modules-and-representation-stability`
(`eilenberg-watts-theorem-and-natural-transformations`),
`projective-functors-and-the-soergel-functor-in-category-o`
(`quantized-enveloping-algebras-and-quantum-serre-relations`) and
`complex-algebraic-stratified-topology`
(`riemann-surfaces-branched-maps-and-differentials`). These belong to other
pairs' owners; this pair's pages 1534/1535 produce no plan error.

## Published concerns

None found in published content by this pair. The defects repaired above were
in this pair's own draft items (phantom step references, missing dependency
declarations, wrapped display blocks, double-bracket math); no published item
or page was edited, and no published item statement was changed.

## Open obligations at handoff

1. Reconcile the two batch-5 suppliers above and regenerate
   `…batch-9.proof-contracts.json` (the three stub citations then become quoted
   statement citations); keep the three escalated item decisions until then.
2. Sibling pairs writing batches 10/11 must fill the ten pending group-j scope
   decline rows; the batch-9 rows are decided.
3. Step 4 must adjudicate the five plan mismatches listed above.
4. Full independent mathematical review of all 29 items remains Steps 5-7 work;
   nothing here is a substitute for it.

Step-3a uncertainties rechecked against the current inputs: the KMPY
$R^{-1}$/energy-to-Hecke bridge is authored in
`lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel`
and `thm-normally-ordered-q-wedges-form-a-basis`; the tail estimates are
re-derived in the $c-r$ residue convention in
`lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness`; and
the $A$ versus $A_0$ versus $\mathbb Z[q]$ chart separations are fixed in
`def-semi-infinite-q-wedge-fock-space-and-q-adic-topology`,
`thm-normally-ordered-q-wedges-form-a-basis` and
`thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`.
Whether those arguments are correct is a Steps 5-7 obligation, not settled here.

## Handoff

Completed: all 24 A-page items and all 5 B-page items written to `items/`;
both library pages written; batch-9 manifest and coverage preserved and
reconciled (13 `deps` rows updated to actual uses, sibling rows untouched);
`…batch-9.proof-contracts.json` written; batch-9 cross-batch input refreshed
and the ledger refreshed; 29 item decisions recorded; the assigned report
(this file) completed. Added suppliers: none. Checks actually run and their
results are the table above.
