# Step 3b audit and authoring — Specht modules

Run frontier-36-complete, batch 17; owned pair:
specht-modules-and-the-irreducibles-of-the-symmetric-group and its
-examples companion. The generated order is authoritative and is being
followed without using later items to justify earlier ones.

## Current dispatch checkpoint — 216df4242f007501

This pass re-audited the whole preserved pair on the current disk state and
recorded current Step-3 item decisions for every open item. Everything below
this section is navigation only; only this section describes the current pass.

### State found at handoff

- The pair scope receipt was already current at the unchanged claim hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`; no
  statement or inventory change was made in this pass, so it was re-checked,
  not re-recorded.
- Three level-0 items had current receipts. The other 18 were open:
  `def-column-antisymmetrizer-polytabloid-and-specht-module` had been repaired
  at 19:12 by the interrupted `7ba91d54477d28e8` pass, which changed a
  transitive input of every consumer, and `ex-specht-modules-of-s3` (present
  in the immutable run baseline
  `research/frontier-36-complete-step3-auditor-baseline.json`, so ineligible
  for the auditor-authored addition bypass) had no receipt at all.
- `node tools/step3-decisions.mjs check --run frontier-36-complete --phase
  final` reported all 18 as "current item audit required"; it reported no
  batch-17 scope finding.

### Repairs made in this pass

1. **Contract excerpts** (mechanical strict-gate failure): three citation
   quotes in `research/frontier-36-complete-batch-17.proof-contracts.json`
   still quoted the pre-repair Definition of
   `def-column-antisymmetrizer-polytabloid-and-specht-module`: F6 in
   `lem-column-collision-causes-antisymmetrizer-cancellation`, F6 in
   `ex-polytabloids-for-shape-two-one`, and F15 in `ex-specht-modules-of-s3`.
   Each was replaced by an exact excerpt of the current Definition (the
   inversion-pair bijection clause, and the "inversion sign in $S_n$" clause),
   with the recorded fact and use unchanged. `proof-contract --strict` now
   passes 21/21 with 0 errors and 0 warnings.
2. **`ex-polytabloids-for-shape-two-one`, step 1.2** (literal wording slip):
   the one-line forms 213, 321, 132 belong to the three transpositions written
   on the labels 1, 2, 3, with 1, 3, 1 inversions, and the order-preserving
   relabelling preserves those counts. The sign conclusion ($-1$) is
   unchanged; no dependency changed.
3. **`ex-specht-modules-of-s3`, step 1.4** (literal wording slip): the
   sentence "each transposition has one inversion after relabelling" was
   false for $(13)$; it was replaced by the exact counts 1, 1, 3 inversions
   for $(12),(23),(13)$ after the relabelling, all odd, which is what the step
   uses. No claim or dependency changed.
4. **Source stamp**: the A-page coverage row
   `etingof-characters-and-class-count` (added late in the prior pass) carried
   no fetch stamp. `source-fetch-check --stamp` fetched it (1,403,098 bytes,
   109-page PDF, sha256 prefix `7008168dd9222197`, 2026-09-28T09:40Z) and the
   gate now reports 7/7 fetch-verified. The stamp records retrieval only; the
   audit of `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`
   rests on the published local class-count and cycle-type suppliers, whose
   hypotheses were checked directly.
5. **Boundary dispositions** (batch contract only; no item text touched).
   `boundary-audit --fail-on-contradicted --fail-on-template` over the batch
   contract flagged (i) a six-row template cluster, the identical rationale
   "The definition states no equivalence." on the `iff-forward` and
   `iff-reverse` rows of the three level-0 definitions, and (ii) one
   contradicted candidate, the `empty` row of
   `lem-adjacent-column-garnir-relation`, because the item displays sums.
   Each flagged row was read against its item one at a time. The six template
   rationales were replaced by item-specific dispositions: the
   column-antisymmetrizer Definition introduces $\kappa_t,e_t,S^\lambda$ by a
   finite stabilizer sum and a span and its only conditional inference is the
   one-way $C_t\cap R_t=\{1\}$ coefficient computation; the Hermitian product
   is fixed outright by the orthonormal-basis formula and then checked for
   unitarity and self-adjointness; and the displayed
   $\Longleftrightarrow$ in the order Definition is the definition itself,
   with the item's actual work being existence of the largest differing label
   and totality. For the Garnir `empty` row the rationale was sharpened to the
   item-specific reason that $A_Z$, $A_H$ and $G_{X,Y}$ sum over the subgroups
   $S_Z$ and $H$ and a transversal containing $1$, so no displayed aggregate is
   empty (step 1.1 additionally forces $|Z|\ge2$), and a `reviewed.upheld`
   record was added with that reason and this dispatch's authorship. Post-edit
   `boundary-audit` reports no template cluster, no contradicted disposition,
   and the one upheld row on the record.

The only later edit is the boundary-row repair above; no statement, inventory,
page, provenance or dependency change was made, so the recomputed authoring
order and all dependency labels are unchanged.

### Item decisions recorded in this pass

All 18 open items were re-read in full against their current transitive
inputs, in the dispatched dependency-level order, and recorded at confidence
1 with the examined direct dependency IDs:

- level 1: `lem-column-collision-causes-antisymmetrizer-cancellation`
  (accept; row transposition in $C_t$, canonical least coset
  representatives, odd count $2(b-a)-1$, refreshed F6 excerpt),
  `lem-leading-tabloid-coefficient-of-a-standard-polytabloid` (accept),
  `lem-polytabloid-covariance-and-column-sign` (accept),
  `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`
  (accept), `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis`
  (accept; the $\mathbb F_2$, shape $(3,1)$ invariant-line witness re-verified).
- level 2: `lem-adjacent-column-garnir-relation` (accept; hook-tableau
  collision step and the $|H|$ factor), `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional`
  (accept), `lem-column-antisymmetrizer-detects-dominance` (accept),
  `ex-trivial-and-sign-specht-modules` (accept).
- level 3: `lem-garnir-straightening-of-polytabloids` (accept; finite reverse
  induction over the local column order, choice-free transversal),
  `thm-james-submodule-theorem-in-characteristic-zero` (accept),
  `thm-specht-to-permutation-homomorphism-dominance` (accept; Maschke
  complement and equivariant projection).
- level 4: `cor-distinct-specht-modules-are-inequivalent` (accept),
  `thm-complex-specht-modules-are-irreducible` (accept),
  `thm-standard-polytabloid-basis` (accept).
- level 5: `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`
  (accept; published class-count hypotheses finite group, algebraically
  closed field, $\operatorname{char}\nmid|G|$ checked), `ex-polytabloids-for-shape-two-one`
  (repaired; wording above).
- level 6: `ex-specht-modules-of-s3` (repaired; wording above; the equivariant
  identification, the sum-zero model and the $n=3$ classification step were
  re-derived).

The three level-0 receipts remain current and unrewritten; the pair scope
receipt remains current.

### Checks actually run after the repairs

- `node tools/tsx-run.mjs tools/precheck.mts <21 item paths>`: 18 checked,
  0 failing.
- `node tools/rendercheck.mjs <21 item files and the two page files under
  library/representation-theory/>`: 23 files, no issues (every math span
  parses under KaTeX, every frontmatter block under the renderer's YAML
  parser).
- `node tools/content-policy.mjs research/frontier-36-complete-batch-17.pages.json`:
  21 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-36-complete-batch-17.proof-contracts.json --strict`:
  21/21 items, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs research/frontier-36-complete-batch-17.proof-contracts.json
  --fail-on-contradicted --fail-on-template`: before the boundary repair it
  exited 1 with the cluster and candidate described above; after the repair it
  exits 0 with no template cluster, no contradicted disposition, and one
  reviewed-upheld row.
- `node tools/citation-fidelity.mjs research/frontier-36-complete-batch-17.proof-contracts.json
  --fail-on-missing-quote`: 193 citations over 21 authored items, no missing
  quote and no widening candidate.
- `node tools/merge-proof-contracts.mjs --level frontier-36-complete
  /tmp/b17-merged.json research/frontier-36-complete-batch-17.proof-contracts.json`
  (dry run to a temporary path only; the run-level merged file is engine-owned
  by the `contractGates` sequence at `tools/autopilot/stages/mathlib.mts:1132`):
  merge exit 0, 21 scoped items, and `proof-contract --strict` plus
  `boundary-audit` over the merged copy both pass. A per-batch
  `gate-liveness` run reports `proof-contract` (21 items),
  `coverage-checklist` (57 results) and repo `precheck` live and flags
  `finite-smoke` as vacuous at 0 checks, which is expected here: no item of
  this pair carries a finite-smoke obligation. The engine runs that gate over
  the merged run contracts, not per batch.
- `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-17.coverage.json`:
  2 pages, 57 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage <batch coverage>`: 7/7
  fetch-verified after the stamp.
- `node tools/item-dependency-levels.mjs check --run frontier-36-complete`:
  926 items across 60 pages, maximum level 18, no batch-17 mismatch.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, acyclic and
  consistent, no item cycles, forward references or unresolved ids; the 379
  planned pages without item lists remain the reported pre-splice limitation.
- `node tools/depcheck.mjs` and `node tools/extcheck.mjs` with explicit
  batch-17 paths report no finding for any item of this pair. Run-wide
  `depcheck`/`fwdcheck` failures name other pairs only (for example a
  page-item-missing finding on `ex-empty-morphism-proper-projective` and
  undeclared forward links in Fredholm-determinant and measurable-Hilbert-field
  drafts); they are draft findings outside this dispatch and were not edited.
- `node tools/step3-decisions.mjs check --run frontier-36-complete --phase
  final` after recording: no batch-17 item or scope remains open. The
  whole-run check still exits 1 for other pairs' pending work, which is not
  this dispatch's scope.

### Audit notes, open obligations, next action

- One citation in `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`
  step 1.1 ("$\gamma\cdot\{t\}=\{t\}$ gives $\gamma\in R_t$ by [F5]") is a
  definitional unpacking of tabloid equality; the tabloid-module definition
  carrying the stabilizer equivalence is a declared transitive input through
  `def-column-antisymmetrizer-polytabloid-and-specht-module`. Judged sound and
  left unchanged; recorded for a later reader.
- `ex-specht-modules-of-s3` is present in the immutable run baseline, so its
  closure rests on the recorded item decision above, not on the engine's
  auditor-authored addition bypass.
- This batch's contract-detector candidates are adjudicated: the six template
  rows were replaced by item-specific dispositions and the one false
  contradicted candidate is upheld on the record. The run-level merge into
  `research/frontier-36-complete-proof-contracts.json`, the remaining batches'
  candidate reads, and `research/frontier-36-complete-alpha-contract-audit.md`
  belong to the separate contract-audit task and were not written here.
- No potentially defective published item was identified in this pass; no
  escalation, no cross-group change, and no unresolved prerequisite remains
  for this pair. Remaining work for this pair: none.

## Prior dispatch checkpoint — 7ba91d54477d28e8 (interrupted; navigation only)

The earlier authoring notes below are navigation only. This dispatch rechecks
the current files and receipts; only checkpoints in this section describe the
current pass. The task order still begins with the three level-0 A-page
definitions.

### Completed in current pass

1. **`def-column-antisymmetrizer-polytabloid-and-specht-module`** — audited
   the English tableau, left tabloid action, finite column sum, and empty
   shape. Corrected the sign prerequisite: the 1-based/finite-ordinal shift
   preserves inversion pairs by order preservation, so the direct supplier is
   `def-inversions-inversion-number-and-sign`, not the homomorphism theorem.
   Checked the row-column intersection gives identity and therefore the
   coefficient of `{t}` is one. Sources read: Chan, Definition 3.8,
   printed p. 12; published suppliers
   `def-partition-young-diagram-and-conjugate-partition`,
   `def-young-tableau-standard-tableau-and-shape`,
   `def-row-and-column-stabilizers-of-a-tableau`,
   `def-young-subgroup-tabloid-and-permutation-module`, and
   `def-inversions-inversion-number-and-sign`. The explicit-path precheck
   reports 0 checked, 0 failing (definition); the pair's current sufficient
   scope receipt was refreshed at claim hash
   `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
   Decision: repaired, confidence 1, with all five direct suppliers recorded.

2. **`def-invariant-inner-product-on-a-tabloid-module`** — reread the full
   definition and checked the local Hermitian convention, positivity,
   unitary tabloid action, and self-adjointness of each column
   antisymmetrizer. Chan states the bilinear permutation-basis form; the item
   defines and verifies the Hermitian complex version itself. Source read:
   Chan, Definition 9.1, Remark 9.2, Lemma 9.3 and proof, printed p. 31.
   The sole dependency, `def-young-subgroup-tabloid-and-permutation-module`,
   is published and its tabloid basis/action was reread. Its existing
   confidence-1 repaired receipt remains current; item and strict contract
   were not rewritten.

3. **`def-tabloid-and-column-orders-for-specht-straightening`** — reread the
   definitions and verified both are finite strict total orders: compare the
   row-assignment vector or column-assignment vector at its greatest
   differing label. The column direction is explicitly reversed from
   Wildon's convention to support increasing straightening. Sources read:
   Chan, Definition 4.8 and Remark 4.10, printed p. 17; Wildon, Definitions
   6.3 and 6.9, printed pp. 26–27 and 30. All three published dependencies
   (partition, tableau, and tabloid definitions) were examined. Its existing
   confidence-1 repaired receipt remains current; item and strict contract
   were not rewritten.

The strict proof-contract check passed for these three definitions (3/3,
0 errors, 0 warnings); explicit-path precheck reports 0 checked, 0 failing.
Their current item decisions are closed. No AC is used. Next item in the
dispatched order: `lem-column-collision-causes-antisymmetrizer-cancellation`
(level 1).

## Initial audit

- Read CLAUDE.md, README.md, SCHEMA.md, the owner direction, RG-9 design,
  batch-17 manifest, coverage, scaffold notes, cross-batch input, and the Step
  3a scope receipt. The owner direction has no Specht-specific obligation.
- The initial scope review was sufficient for the 21-item inventory and
  statements. Local provenance, source-locator, and direct-dependency repairs
  are recorded in the item checkpoints below; each was followed by a refreshed
  sufficient scope receipt. The current scope hash remains
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
- Audited the local left-action convention against Chan, *Representation
  Theory of Symmetric Groups*, Definition 3.8 and Lemmas 3.10–3.11 (printed
  pp. 12–13); Theorem 4.1 and its proof, Theorem 4.4, Corollary 4.5, and
  Definitions 4.8–Theorem 4.11 (printed pp. 15–17); Wildon, *Representation
  Theory of the Symmetric Group*, Theorem 6.8 and Lemma 6.10 with proofs,
  including the explicit finite-order termination argument (printed
  pp. 28–32); and Craven, ``1.8 and 2.1 (printed pp. 16–21). The local Garnir
  argument is written for the library's left action and the design's chosen
  coset factor order.
- No AC is used. All groups, tabloids, sums, and coset sets here are finite;
  later choices of witnesses are from finite nonempty sets. No
  def-axiom-of-choice dependency is warranted.
- Pre-splice prose/plan mismatch to report for Step 4: RG-9 prose lists Schur
  among prerequisites, while plan-spec.json does not require a Schur page.
  No item proof below uses Schur's lemma. Recommend serial reconciliation of
  the prose or page requirement; do not silently add an item dependency.
- No cross-batch input is declared or needed; batch-17 cross-batch input
  remains [].

## Item checkpoints

### def-column-antisymmetrizer-polytabloid-and-specht-module

- Scaffold audited and accepted. The sign relabelling is a group isomorphism;
  C_t intersect R_t equals the identity, so the coefficient of the original
  tabloid is one and the polytabloid is nonzero. The empty tableau gives the
  one-dimensional trivial module.
- Sources: Chan, Definition 3.8, printed p. 12; Craven, `1.8, printed
  pp. 16–18. Dependencies examined:
  def-partition-young-diagram-and-conjugate-partition,
  def-young-tableau-standard-tableau-and-shape,
  def-row-and-column-stabilizers-of-a-tableau,
  def-young-subgroup-tabloid-and-permutation-module,
  thm-sign-is-a-homomorphism.
- Decision: accepted at confidence 1 after explicit-path precheck (0 checked,
  0 failing) and strict selected proof-contract check (no errors). The item
  receipt records all five direct dependencies.
- Next item: def-invariant-inner-product-on-a-tabloid-module.

### def-invariant-inner-product-on-a-tabloid-module

- Scaffold audited. Local repair: changed statement provenance from
  literature-derived to ai-altered and replaced the imprecise Ch. 3–4 source
  locator with Chan, Chapter 9, Definition 9.1 and Remark 9.2, printed
  pp. 31–32, plus Craven, §2.1, printed pp. 19–20. Those sources define the
  symmetric bilinear tabloid-basis form; the item explicitly identifies its
  Hermitian complex version and proves positivity, invariance and
  self-adjointness directly. No statement or dependency changed.
- Dependency examined: def-young-subgroup-tabloid-and-permutation-module.
  Source locator was checked against Chan's complete Chapter 9 form passage.
- Refreshed the unchanged pair scope receipt as sufficient with this source
  and provenance repair recorded. Decision: repaired at confidence 1 after
  explicit-path precheck and strict selected proof-contract check passed.
- Next item: def-tabloid-and-column-orders-for-specht-straightening.

### def-tabloid-and-column-orders-for-specht-straightening

- Scaffold audited and the two relations verified as strict total orders by
  their largest differing row/column assignment. The local column order is
  intentionally opposite Wildon's Definition 6.9 orientation: with this
  convention, every nonidentity Garnir term moves its largest changed label
  right and increases the order, so reverse induction is well-founded.
- Provenance repaired to ai-altered and source locators narrowed to Chan,
  Definition 4.8/Remark 4.10, pp. 16–17, and Wildon, Definitions 6.3 and 6.9,
  pp. 26–27 and 30. No claim, inventory row or dependency changed. The
  sufficient scope receipt was refreshed.
- Dependencies examined: def-young-tableau-standard-tableau-and-shape,
  def-young-subgroup-tabloid-and-permutation-module,
  def-partition-young-diagram-and-conjugate-partition. Decision: repaired at
  confidence 1 after explicit-path precheck and strict selected proof-contract
  check passed.
- Next item: lem-column-collision-causes-antisymmetrizer-cancellation.

### lem-column-collision-causes-antisymmetrizer-cancellation

- Scaffold audited. The row transposition is in the column stabilizer, fixes
  the tabloid, and pairs the signed column sum into terms
  $g(1-\tau)$. I repaired its direct prerequisites by adding
  def-inversions-inversion-number-and-sign: the sign theorem's statement alone
  did not state the sign of a transposition. The inversion calculation now
  shows it is odd. The item remains at dependency level 1.
- Sources read at use: Chan, Theorem 4.1(a) proof, printed p. 15; Craven,
  §2.1, printed pp. 19–20. Dependencies examined:
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-row-and-column-stabilizers-of-a-tableau,
  def-young-subgroup-tabloid-and-permutation-module,
  thm-sign-is-a-homomorphism,
  def-inversions-inversion-number-and-sign.
- Chose canonical least one-line representative of each finite right coset;
  the proof is choice-free. Decision: repaired at confidence 1 after
  explicit-path precheck, strict contract, and batch manifest-dependency
  checks passed. The sufficient scope receipt was refreshed after the
  prerequisite repair.
- Next item: lem-leading-tabloid-coefficient-of-a-standard-polytabloid.

### lem-leading-tabloid-coefficient-of-a-standard-polytabloid

- Claim/convention: for column-standard $t$, the coefficient of $\{t\}$ in
  $e_t$ is $1$, all other terms are lower in the fixed tabloid order, and
  standard polytabloids are linearly independent. The proof uses the local
  left action and the largest-moved-label criterion in the declared order.
- Scaffold repair: the direct dependencies include the order definition, the
  polytabloid definition, row/column stabilizers, and standard tableaux. The
  proof now cites the row-stabilizer fact when tabloid equality implies
  $\gamma\in R_t$, and the column-stabilizer fact when it puts
  $\gamma^{-1}(m)$ and $m$ in one column. This closes the otherwise unstated
  uses. No claim or item was added.
- Argument checked against Wildon, Proposition 6.5 and its preceding Lemma
  6.4 proof, printed pp. 27–28, and Chan, Definition 4.8, Remark 4.10, and
  Theorem 4.11 proof, printed pp. 16–17. For nonidentity $\gamma$, its
  largest moved label $m$ satisfies $\gamma^{-1}(m)<m$; column-standardness
  places the preimage above $m$, while all labels above $m$ are fixed. Thus
  $m$ is the largest label whose row changes and the resulting tabloid is
  lower. Distinct standard tableaux have distinct row tabloids; a greatest
  leading tabloid in a finite relation has coefficient only from its own
  polytabloid. The argument also covers empty, one-box, row, and column
  shapes; the empty and singleton cases are registered in the contract.
- Decision: repaired at confidence 1 after explicit-path precheck, selected
  strict proof-contract check, explicit-path rendercheck, batch-17
  manifest-deps, and run-wide item-dependency-levels all passed. The contract
  has exact source quotes/uses and checked or justified inapplicable boundary
  rows. The pair's sufficient scope receipt was refreshed; its hash is
  unchanged. No unresolved local gap.
- Next item: lem-polytabloid-covariance-and-column-sign.

### lem-polytabloid-covariance-and-column-sign

- Claim/convention: with the declared left action,
  $\kappa_{\sigma t}=\sigma\kappa_t\sigma^{-1}$,
  $e_{\sigma t}=\sigma e_t$, and $\gamma e_t=\operatorname{sgn}(\gamma)e_t$
  for $\gamma\in C_t$. These identities make the span of all polytabloids a
  submodule and show it is generated by any selected polytabloid.
- Scaffold repairs: added direct dependencies on the tableau-bijection and
  linear permutation-module definitions, which the orbit/cyclicity and action
  calculations use. The coverage row for Chan Lemma 3.10 was marked `inline`;
  its column-product factorization is now proved in step 1.1 using the direct
  product of disjoint column groups and multiplicativity of sign. Narrowed the
  item source locator to Chan Lemmas 3.10–3.11 and Definition 3.12, printed
  p. 13. The 21 inventory claims remain unchanged.
- Reread Chan, Lemma 3.11 complete proof and Definition 3.12, printed p. 13.
  Conjugation of $C_t$ and multiplicativity of sign justify the group-algebra
  reindexing; left linearity gives polytabloid covariance. Reindexing by left
  multiplication gives the column eigenrelation. A unique label bijection
  carries any tableau to any other, so the orbit of $e_t$ spans all
  polytabloids, including for $n=0$. The proof uses no AC.
- Dependencies examined: def-column-antisymmetrizer-polytabloid-and-specht-module,
  lem-tableau-stabilizers-transform-by-conjugation,
  def-row-and-column-stabilizers-of-a-tableau,
  thm-sign-is-a-homomorphism,
  def-young-tableau-standard-tableau-and-shape,
  def-young-subgroup-tabloid-and-permutation-module.
- Decision: repaired at confidence 1 after explicit-path precheck, selected
  strict proof-contract check, explicit-path rendercheck, batch-17
  manifest-deps, and run-wide item-dependency-levels passed. Scope was
  refreshed with the same inventory/statement hash. No unresolved local gap.
- Next item: lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero.

### lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero

- Claim/conventions: for every $\lambda\vdash n$, the complex Specht space is
  nonzero and $S^\lambda\cap(S^\lambda)^\perp=\{0\}$ for the explicitly
  defined positive definite Hermitian tabloid product (conjugate-linear in
  its first slot). The local orthogonal-complement definition has the opposite
  slot convention, but only the vanishing equation is used.
- Audited and repaired the scaffold: provenance is ai-altered because the
  locally stated Hermitian claim is proved directly; direct dependencies now
  supply the product's positive definiteness, the Specht span and
  coefficient-one fact, the canonical row-filled tableau, and the definition
  of orthogonal complement. Coverage now marks Chan's form and
  self-adjointness lemma inline for the locally defined Hermitian adaptation;
  Craven's modular quotient result is kept out of scope.
- Proof: the canonical tableau's polytabloid has coefficient one at its
  tabloid, hence belongs nontrivially to $S^\lambda$. If $v$ is in both the
  space and its orthogonal complement, pairing against $v$ gives
  $\langle v,v\rangle=0$, so positive definiteness gives $v=0$; zero belongs
  to both. This covers $n=0$, one-box, row, and column shapes and uses no
  choice principle.
- Sources reread in full at use: Chan, Definition 9.1, Remark 9.2, Lemma 9.3
  and proof, printed pp. 31–32: bilinear tabloid-basis form, invariance,
  nondegeneracy, and antisymmetrizer self-adjointness; Craven, §2.1,
  Corollary 2.4 and the characteristic-zero paragraph, printed p. 20. The
  local proof needs positivity and proves it explicitly. Craven's inference
  from nondegeneracy of the ambient bilinear form alone to vanishing of the
  restricted radical is not established by that premise alone; do not import
  that inference as a proof step.
- Dependencies examined: def-invariant-inner-product-on-a-tabloid-module,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-young-subgroup-tabloid-and-permutation-module,
  def-orthogonality-and-orthogonal-complement. Decision: repaired, confidence
  1, after explicit-path precheck, strict selected contract, and rendercheck
  passed. The first precheck failed only because it requires a step's final
  tag on the same physical line as its number; after reflow, it passed. The
  sufficient scope receipt was refreshed with unchanged hash.
- Next item: cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis.

### cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis

- Claim/conventions: the universal claim that signed-column Specht modules
  remain irreducible over every field is refuted by $K=\mathbb F_2$ and shape
  $(3,1)$. The modular module is defined locally by reducing each coefficient
  $\operatorname{sgn}(\gamma)\in\{1,-1\}$ to $\mathbb F_2$; this does not
  reinterpret the A-page's complex vector space as an $\mathbb F_2$ space.
- Scaffold audit: the original calculation was sound but its dependencies
  named only the complex tabloid/Specht definitions. Added direct suppliers for
  the tabloid action, column stabilizers, sign values, finite-dimensional
  representations, and the subrepresentation/irreducibility criterion.
  Changed statement provenance to ai-altered because the exact $\mathbb F_2$
  witness is computed locally; the claim itself is unchanged.
- Proof: every tableau has one two-entry column, so each polytabloid is
  $v_i+v_j$. Three explicit polytabloids $v_1+v_4,v_2+v_4,v_3+v_4$ form a
  basis for $W=\ker(\sum a_i v_i)$, proving the Specht space is exactly this
  three-dimensional kernel. The nonzero vector $w=\sum_i v_i$ is fixed by
  $S_4$ and lies in $W$ since $4=0$ in $\mathbb F_2$; its line is a proper
  one-dimensional subrepresentation.
- Sources read at use: Wildon, Examples 2.3(2) and 2.6(B), printed pp. 5–6,
  completely gives the singleton-row tabloid indexing and the $(n-1,1)$
  Specht span by differences, with dimension $n-1$ over a field. Chan,
  Remark 4.6, printed p. 16, warns that in characteristic two Specht modules
  can be decomposable. Neither source states this exact $\mathbb F_2$, shape
  $(3,1)$ invariant-line witness. Wildon's sufficient irreducibility
  condition failing when $2\mid4$ alone would not prove reducibility; the
  displayed proper invariant line does.
- Dependencies examined: def-young-subgroup-tabloid-and-permutation-module,
  def-row-and-column-stabilizers-of-a-tableau,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  thm-sign-is-a-homomorphism,
  def-finite-dimensional-representation-of-a-group-over-a-field,
  def-subrepresentation-and-irreducible-representation. Adding these published
  level-zero suppliers leaves the item at dependency level 1 and does not
  change the remaining dispatch order. Decision: repaired at confidence 1
  after explicit-path precheck, strict selected proof contract, and rendercheck
  passed; manifest dependencies and source-coverage checks also pass. The pair
  scope receipt was refreshed with unchanged content hash.
- Run-wide `item-dependency-levels check` currently reports six mismatched
  levels in another pair (classical derivatives, weak Leibniz, cutoff
  localisation, Sobolev pasting, Sobolev norm, and Banach theorem); it reported
  no mismatch for this pair. Do not edit those sibling files.
- Next item: lem-adjacent-column-garnir-relation.

### lem-adjacent-column-garnir-relation

- Claim/conventions: for adjacent columns $j,j+1$, subsets $X,Y$ with
  $|X|+|Y|>\lambda'_j$, and any supplied left-coset transversal $T$ for
  $S_{X\cup Y}/H$ with $H=S_X\times S_Y$, the signed sum
  $G_{X,Y}=\sum_{g\in T}\operatorname{sgn}(g)g$ annihilates $e_t$ under the
  library's left action over $\mathbb C$.
- Scaffold audit: the original strategy's row-capacity/coset factorization is
  valid for the left-action convention. Added direct suppliers for column
  stabilizers, the tableau definition needed for an auxiliary hook tableau,
  and multiplicativity of sign. Dependencies keep this item at level 2.
- Proof: put $Z=X\cup Y$. For every $\gamma\in C_t$, the labels in $Z$ occupy
  at most $\lambda'_j$ rows in $\gamma\{t\}$. Construct a hook tableau $u$
  whose first column is exactly $Z$ and whose other columns are singletons;
  then $\kappa_u=A_Z$. The cited column-collision lemma kills each tabloid
  term of $e_t$, so $A_Ze_t=0$. Since $H\subseteq C_t$, its antisymmetrizer
  acts on $e_t$ by $|H|$. The left-coset factorization is
  $A_Z=G_{X,Y}A_H$, giving $|H|G_{X,Y}e_t=0$; division by this nonzero complex
  integer proves the relation. The argument holds for every supplied
  transversal and makes no further choice.
- Source reread: Wildon, Definition 6.6, Example 6.7 and full Theorem 6.8
  proof, printed pp. 28–30. Wildon uses a right module action, integer
  coefficients, and representatives for the corresponding right-coset
  factorization. The local proof rederives the collision step from the
  existing column-collision lemma and orders factors for the library's left
  action over $\mathbb C$; it does not import a side convention or divide in
  the integral setting.
- Dependencies examined: def-column-antisymmetrizer-polytabloid-and-specht-module,
  lem-polytabloid-covariance-and-column-sign,
  lem-column-collision-causes-antisymmetrizer-cancellation,
  def-partition-young-diagram-and-conjugate-partition,
  def-row-and-column-stabilizers-of-a-tableau,
  def-young-tableau-standard-tableau-and-shape, thm-sign-is-a-homomorphism.
  Decision: repaired, confidence 1, after explicit-path precheck, strict
  selected contract, rendercheck, manifest-deps, and run-wide item dependency
  levels passed. The sufficient scope receipt was refreshed with unchanged
  hash. No unresolved local gap.
- Next item: lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional.

### lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional

- Claim/conventions: for every $n\ge0$, $\lambda\vdash n$, and
  $\lambda$-tableau $t$, the image of the left group-algebra action of
  $\kappa_t$ on the complex tabloid module is the nonzero line $\mathbb C e_t$.
- Scaffold audit: the original plan correctly separated zero tabloid images
  from the equal-shape BCL case, but “by the column sign rule” did not identify
  the needed right multiplication identity. The covariance item proves the
  left eigenrelation on $e_t$; that alone does not justify moving $\gamma$
  past $\kappa_t$ in $\kappa_t(\gamma\{t\})$. Removed that unused dependency
  and added direct suppliers for the tabloid action/stabilizer and sign
  homomorphism. Narrowed the source record to Chan's exact carriers.
- Proof: coefficient one in the definition gives $e_t\ne0$. For any basis
  tabloid $\{s\}$, if $\kappa_t\{s\}\ne0$, the collision lemma gives the
  BCL's row-column incidence hypothesis. The BCL then supplies
  $\rho\in R_s,\gamma\in C_t$ with $\rho s=\gamma t$, hence
  $\{s\}=\gamma\{t\}$. Reindexing $d=c\gamma$ in the signed sum proves
  $\kappa_t\gamma=\operatorname{sgn}(\gamma)\kappa_t$ directly; thus this
  tabloid image is $\operatorname{sgn}(\gamma)e_t$. Linearity gives one
  inclusion, and $e_t=\kappa_t\{t\}$ gives the reverse. This also handles
  $n=0$: the group and its antisymmetrizer are trivial and the empty tabloid
  is the nonzero image.
- Source passages reread completely: Chan, Lemma 2.14 and its proof, printed
  pp. 9–10; Definition 3.8, p. 12; Lemma 3.11(b), p. 13; Theorem 4.1(b) and
  proof, p. 15. Chan's Lemma 2.14 proof ends with an informal “do what you can”
  sketch for the equal-shape witness; the library BCL supplier has its own
  explicit finite construction, and this proof uses that proved local result.
  Chan's Lemma 3.11(b) states both left and right group-algebra eigenrelations;
  the item derives the needed right identity itself. Chan states Theorem
  4.1(b) for equal-shape modules over a field; the local coefficient-one fact
  establishes nonvanishing, and the empty-shape case is checked separately.
- Dependencies examined: def-column-antisymmetrizer-polytabloid-and-specht-module,
  lem-column-collision-causes-antisymmetrizer-cancellation,
  lem-basic-combinatorial-lemma-for-tableaux,
  def-young-subgroup-tabloid-and-permutation-module,
  thm-sign-is-a-homomorphism. Decision: repaired, confidence 1, after
  explicit-path precheck, strict selected proof contract, rendercheck,
  manifest-deps, coverage with required destinations, and run-wide
  item-dependency-levels all passed. The sufficient scope receipt was
  refreshed at its unchanged claim hash
  (0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2).
  No unresolved local proof gap.
- Batch content-policy was run before later assigned item files existed and
  reported only those 11 not-yet-authored item files as missing; rerun the full
  batch policy after the remaining assigned items are authored.
- Next item: lem-column-antisymmetrizer-detects-dominance.

### lem-column-antisymmetrizer-detects-dominance

- Claim/conventions: for $n\ge0$, $\lambda,\mu\vdash n$, and a
  $\lambda$-tableau $t$, nonvanishing of the image $\kappa_tM^\mu$ implies
  $\lambda\unrhd\mu$ in the library's prefix-sum dominance order.
- Scaffold audit: the witness-basis and collision-to-BCL strategy is sound.
  Added def-column-antisymmetrizer-polytabloid-and-specht-module as a direct
  supplier for the operator, which the scaffold had only supplied
  transitively through the collision lemma. Narrowed the broad Chan/Craven
  source metadata to Chan's Theorem 4.1(a) and its proof, the exact carrier.
- Proof: if every $\mu$-tabloid were killed, linearity on the tabloid basis
  would make the entire image zero, contradicting the hypothesis; hence some
  tabloid $\{s\}$ has nonzero image. The collision lemma's contrapositive
  supplies exactly the BCL incidence hypothesis. The BCL gives
  $\lambda\unrhd\mu$, and the local dominance definition identifies this with
  the stated order. The argument is choice-free.
- Sources reread completely: Chan, Theorem 4.1(a) and full proof, printed
  p. 15. Chan writes the conclusion in the reversed notation
  $\mu\mathrel{E}\lambda$, which is precisely $\lambda\unrhd\mu$ under the
  library definition. His proof establishes the no-collision condition by
  pairing signed terms; this item instead uses the already authored local
  collision lemma. The library BCL proof was reread in full; it supplies the
  equal-shape clause as well as dominance and handles $n=0$ explicitly.
- Dependencies examined: def-column-antisymmetrizer-polytabloid-and-specht-module,
  lem-column-collision-causes-antisymmetrizer-cancellation,
  lem-basic-combinatorial-lemma-for-tableaux,
  def-dominance-order-on-partitions,
  def-young-subgroup-tabloid-and-permutation-module. Decision: repaired,
  confidence 1, after explicit-path precheck, strict selected proof contract,
  rendercheck, manifest-deps, coverage with required destinations, and
  run-wide item-dependency-levels passed. The sufficient scope receipt was
  refreshed at the unchanged claim hash
  (0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2).
- The intermediate full batch content-policy check from item 10 had 11
  expected not-yet-authored item files; this item is now authored, and the
  final full batch policy remains due after the remaining ten assigned items.
- Next item: ex-trivial-and-sign-specht-modules.

### ex-trivial-and-sign-specht-modules

- Claim/conventions: for $n\ge1$, the row-shape Specht space is the trivial
  line and the column-shape Specht space is the sign line; at $n=0$, the
  empty-shape Specht space is the trivial line of $S_0$.
- Scaffold audit: the row/column calculation was sound, but the direct
  dependencies did not include tabloid-row equivalence and the definitions of
  the trivial and sign representations. Added those suppliers plus the
  tableau and row/column stabilizer definitions. Narrowed the source metadata
  to Chan's exact passages. The empty case remains a local convention because
  Chan and Wildon's examples assume positive $n$.
- Proof: for $(n)$, every column is a singleton, so every antisymmetrizer is
  the identity; all tableaux have the same sole row tabloid, fixed by $S_n$.
  For $(1^n)$, the column stabilizer is $S_n$ and the singleton-row tabloids
  $\{\sigma t\}$ are distinct; the coefficient at $\{t\}$ in
  $e_t=\sum_\sigma\operatorname{sgn}(\sigma)\{\sigma t\}$ is $1$. Reindexing
  by $\rho=\tau\sigma$ proves $\tau e_t=\operatorname{sgn}(\tau)e_t$, and
  cyclic generation makes the Specht space exactly that line. For $n=0$,
  the definition gives $S^\varnothing=\mathbb C$ and the sole group element
  acts as identity.
- Sources reread completely: Chan, Definition 3.8, printed p. 12, Lemma
  3.11(b), p. 13, and Example 3.14(a-b), p. 14. Chan's example gives row and
  column cases for positive $n$; the local proof computes the signed sum and
  the left action explicitly. Wildon, Example 2.6(A,C), printed pp. 6–7, was
  also read as a cross-check; Wildon uses a right module action, so the
  present left-action calculation is not imported from that convention.
- Dependencies examined: def-partition-young-diagram-and-conjugate-partition,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-young-tableau-standard-tableau-and-shape,
  def-row-and-column-stabilizers-of-a-tableau,
  def-young-subgroup-tabloid-and-permutation-module,
  lem-polytabloid-covariance-and-column-sign,
  thm-sign-is-a-homomorphism,
  def-trivial-regular-and-permutation-representations,
  def-sign-representation-and-restriction-of-a-representation. Decision:
  repaired, confidence 1, after explicit-path precheck, strict selected proof
  contract, rendercheck, manifest-deps, coverage with required destinations,
  and run-wide item-dependency-levels passed. Refresh the sufficient scope
  receipt for the preserved pair at unchanged claim hash
  (0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2); the
  repaired item decision is recorded at confidence 1.
- The last full content-policy run occurred at item 10 and listed 11
  not-yet-authored assigned item files; two have now been authored, leaving
  the final batch policy to run after the remaining nine items.
- Next item: lem-garnir-straightening-of-polytabloids.

### lem-garnir-straightening-of-polytabloids

- Scaffold audit: the intended straightening induction is valid under the
  local column order, but its transversal argument was only an instruction.
  Added direct suppliers for the polytabloid/Specht-space definitions, tableau
  action and standardness, column stabilizers, and partition column heights.
  Narrowed the source record to Wildon, Definition 6.9 and Lemma 6.10 with
  proof, printed pp. 30–31. Wildon's order is reversed in the local definition;
  the proof therefore uses reverse induction. Wildon writes a right module
  over $\mathbb Z$, while the local proof uses the left-action Garnir relation
  proved over $\mathbb C$. Chan's Remark 4.13, printed p. 17, is a pointer to
  James rather than a proof and is not used as proof evidence.
- Proof: sort columns by the unique label permutation, changing a polytabloid
  only by sign. For a nonstandard column-standard tableau take the least
  adjacent descent $(q,j)$; the sets $X$ and $Y$ have all $x>y$ and satisfy
  $|X|+|Y|=\lambda'_j+1$. For each $p$-subset $A$ of $X\cup Y$, pair
  $X\setminus A$ with $A\setminus X$ in increasing order and swap each
  pair. The resulting disjoint-swap family is a complete left-coset
  transversal because a coset is determined by the image of $X$. Its identity
  term isolates $e_s$. Every nonidentity term moves its largest changed label
  from column $j$ to $j+1$; sorting each resulting tableau preserves that
  column, so it is later in the local order. Finite reverse induction proves
  the claim and hence the standard polytabloids span $S^\lambda$. The empty,
  one-row, and one-column cases are covered explicitly.
- AC: not assumed or used. The least descent, column sorts, and matched
  representatives are uniquely specified from finite sets; no AC dependency
  is declared or propagated.
- Source passages read completely: Wildon, Definition 6.9 and Lemma 6.10
  with proof, printed pp. 30–31, and the adjacent-column Theorem 6.8 proof,
  printed pp. 28–29. The local adjacent-column supplier was reread in full.
  No source uncertainty remains; this item makes no integral or arbitrary-
  field claim.
- Dependencies examined: lem-adjacent-column-garnir-relation,
  def-tabloid-and-column-orders-for-specht-straightening,
  lem-polytabloid-covariance-and-column-sign,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-young-tableau-standard-tableau-and-shape,
  def-row-and-column-stabilizers-of-a-tableau,
  def-partition-young-diagram-and-conjugate-partition. Decision: repaired,
  confidence 1. Explicit-path precheck, rendercheck, strict selected proof
  contract, manifest-deps, coverage-checklist, and run-wide
  item-dependency-levels all passed. Refreshed the sufficient scope receipt
  at the unchanged claim hash
  (0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2).
- Open item-specific gaps: none. The full-batch content-policy, full strict
  proof-contract set, final rendering/precheck, and validate-plan remain due
  after the remaining assigned items and page drafts are complete. No
  published defect was found. Next item: thm-james-submodule-theorem-in-characteristic-zero.

### thm-james-submodule-theorem-in-characteristic-zero

- Audited and repaired the strategy. The claim remains the planned complex
  submodule dichotomy. Removed its false note that the alternatives need not
  be exclusive: for this positive definite Hermitian form, they are exclusive
  because $S^\lambda$ contains the nonzero canonical polytabloid and has zero
  intersection with its orthogonal complement. Added direct dependencies for
  the orthogonal-complement definition, the subrepresentation condition, the
  polytabloid/Specht-space definition, and the tabloid module. Source records
  now point to Chan Chapter 9 rather than unrelated earlier chapters.
- Proof: if some $\kappa_tu\ne0$, the one-dimensional-image lemma gives
  $\kappa_tu=c e_t$ with $c\ne0$. The group-algebra sum lies in $U$, so
  $e_t\in U$; cyclic generation gives $S^\lambda\subseteq U$. If every
  image is zero, self-adjointness gives $\langle u,e_t\rangle=0$ for all
  polytabloids; linearity in the second slot and their spanning property give
  $U\subseteq(S^\lambda)^\perp$. A canonical nonzero $e_{t_0}$ rules out both
  alternatives holding at once.
- No AC is assumed or used. The proof makes one existential case split, uses
  an explicitly defined row-filled tableau, and evaluates finite sums only.
- Complete source passage reread: Chan, *Representation Theory of Symmetric
  Groups*, Chapter 9, Definition 9.1 and Remark 9.2, Lemma 9.3 and its proof,
  and Theorem 9.4 and its proof, printed pp. 31–32. Chan's Theorem 9.4 is
  stated over an arbitrary field with the symmetric bilinear tabloid form;
  the local proof uses the explicitly defined conjugate-first Hermitian
  product and its locally proved self-adjointness. Chan notes that the
  characteristic-zero case is immediate if simplicity is already known; this
  proof does not assume the later irreducibility theorem. The exact zero-image
  and nonzero-image arguments were independently checked against the local
  image and covariance lemmas.
- Dependencies examined: def-invariant-inner-product-on-a-tabloid-module,
  lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional,
  lem-polytabloid-covariance-and-column-sign,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-orthogonality-and-orthogonal-complement,
  def-subrepresentation-and-irreducible-representation,
  def-young-subgroup-tabloid-and-permutation-module. The repaired item remains
  at level 3, so the remaining generated order is unchanged. Decision:
  repaired, confidence 1; item receipt hash
  `6a9799ffb2bf6608763c79952e4dedd8f408fde8b6147807d8a6a0cec820a8ab`.
  Refreshed the sufficient scope receipt at the unchanged hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
- Checks actually run on the complete item: explicit-path precheck passed,
  explicit-path rendercheck passed, selected strict proof-contract check
  passed, batch-17 manifest-deps passed (21 items, zero errors), coverage
  passed (two pages, 55 harvested results, zero errors/warnings), and
  run-wide item-dependency-levels passed (924 items, 60 pages, maximum level
  18). The run-wide scope check lists four other pairs pending; this pair is
  closed and none of those findings belongs to this dispatch.
- Open item-specific gaps: none. Full-batch content-policy, full strict
  contracts, final batch precheck/rendering, and validate-plan remain due
  after the other items/pages. No potentially defective published item was
  found. Next item: thm-specht-to-permutation-homomorphism-dominance.

### thm-specht-to-permutation-homomorphism-dominance

- Claim retained: for $\lambda,\mu\vdash n$ over $\mathbb C$, a nonzero
  $S_n$-map $S^\lambda\to M^\mu$ forces $\lambda\unrhd\mu$; when
  $\mu=\lambda$, every map is a scalar multiple of the inclusion and the
  Hom space is one-dimensional.
- Scaffold audit found the strategy mathematically sound but missing an
  explicit premise needed by Maschke: the permutation group $S_n$ is finite.
  Added direct prerequisites for natural-number label-set finiteness and the
  finite-bijection theorem, plus the other definitions and supplier results
  actually used. The proof constructs a stable complement $T$ in $M^\lambda$,
  projects equivariantly along $T$, extends $\phi$ to $\Phi=\phi p$, and uses
  $e_t=\kappa_t\{t\}$ to obtain a nonzero antisymmetrizer image. The dominance
  detector gives the first assertion. For equal shapes the one-dimensional
  image and cyclic generation give a scalar inclusion; the zero map and the
  nonzero canonical inclusion complete the Hom-space bijection.
- Sources reread completely at use: Chan, *Representation Theory of
  Symmetric Groups*, Theorem 4.1(a-b) with proof and Corollary 4.2(a-b) with
  full proof (printed pp. 15-16); Theorem 4.3 (Maschke, p. 16); and the proof
  of Theorem 4.4(c) (p. 16). Chan's Corollary 4.2 treats maps between
  permutation modules; this item supplies the extension from a Specht module
  locally via Maschke rather than importing the corollary outside its stated
  domain. The local group-ring/equivariant-map correspondence and antisymmetrizer
  lemmas were reread at use.
- No AC is assumed or used. The proof uses a single complement supplied by
  Maschke, an existential tableau witness for a nonzero value, and a canonical
  row-filled tableau; it selects no family of witnesses.
- Examined dependencies: def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-dominance-order-on-partitions,
  def-intertwiner-equivalent-and-faithful-representations,
  def-natural-numbers, def-subrepresentation-and-irreducible-representation,
  def-symmetric-group, def-young-subgroup-tabloid-and-permutation-module,
  lem-column-antisymmetrizer-detects-dominance,
  lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional,
  lem-polytabloid-covariance-and-column-sign, lem-symmetric-group-is-a-group,
  thm-group-actions-and-group-ring-modules-correspond,
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
  thm-number-of-bijections-of-a-finite-set.
- Refreshed the unchanged sufficient scope receipt at hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
  Item decision: repaired, confidence 1; receipt hash
  `2b7a1ab0fdd47932078638e2a2115788f7ec301603daddcbcf6f56e05096cd4b`.
- Checks: explicit-path precheck and rendercheck passed; selected strict proof
  contract passed with exact supplier excerpts/uses and all eight boundary
  dispositions; batch-17 manifest-deps passed (21 items, zero errors),
  coverage passed (two pages, 55 harvested results, zero errors/warnings),
  and run-wide item-dependency-levels passed (924 items, 60 pages, maximum
  level 18). Recomputed owned order is unchanged; this item is level 3.
- Open item-specific gaps: none. Final full-batch content-policy, strict
  contracts, explicit-path precheck/rendering, and validate-plan remain due
  after the remaining assigned items/pages. No potentially defective
  published item was found. Next item: cor-distinct-specht-modules-are-inequivalent.

### cor-distinct-specht-modules-are-inequivalent

- Claim retained: if $S^\lambda$ and $S^\mu$ are isomorphic complex
  $S_n$-representations for partitions of the same $n$, then $\lambda=\mu$.
- Scaffold repair: added the direct prerequisites for the canonical nonzero
  polytabloids, their Specht submodule inclusions, the representation
  intertwiner and group-ring-map correspondence, the preceding Hom-dominance
  theorem, and dominance antisymmetry. The proof composes an isomorphism and
  its inverse with the target Specht inclusions. It separately verifies both
  composites are nonzero using the canonical polytabloids, verifies the inverse
  is equivariant, converts both maps to $\mathbb C[S_n]$-homomorphisms, and
  applies Hom dominance in both directions. Antisymmetry finishes the claim.
- Sources read completely at use: Chan, *Representation Theory of Symmetric
  Groups*, Theorem 4.4(a) and its complete proof, printed p. 16; Wildon,
  *Representation Theory of the Symmetric Group*, Corollary 4.4 and its
  complete proof, printed p. 15. Wildon uses right actions; the local proof
  uses the library's left action and invokes the already proved local
  Hom-dominance theorem, so no right-action formula is imported.
- No AC is used; the two witnesses are canonical row-filled tableaux. The
  empty, one-box, row, and column cases use the same proof, and both map
  composites remain nonzero by the coefficient-one fact.
- Examined dependencies: def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-dominance-order-on-partitions,
  def-intertwiner-equivalent-and-faithful-representations,
  def-young-subgroup-tabloid-and-permutation-module,
  lem-polytabloid-covariance-and-column-sign,
  thm-group-actions-and-group-ring-modules-correspond, and
  thm-specht-to-permutation-homomorphism-dominance.
- Refreshed the unchanged sufficient scope receipt at hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
  Decision: repaired, confidence 1; item receipt hash
  `72dbff69072487ac27ced4586b7804dde040058ffa632a6542d91550c5728cb6`.
- Checks: explicit-path precheck and rendercheck passed; selected strict proof
  contract passed with exact supplier excerpts/uses and all eight boundary
  dispositions; batch-17 manifest-deps passed (21 items, zero errors),
  coverage passed (two pages, 55 harvested results, zero errors/warnings),
  and run-wide item-dependency-levels passed (924 items, 60 pages, maximum
  level 18). Recomputed owned order is unchanged; this item is level 4.
- Open item-specific gaps: none. Final full-batch content-policy, strict
  contracts, explicit-path precheck/rendering, and validate-plan remain due
  after the remaining assigned items/pages. No potentially defective
  published item was found. Next item: thm-complex-specht-modules-are-irreducible.

### thm-complex-specht-modules-are-irreducible

- Claim retained: for every $n\ge0$ and partition $\lambda\vdash n$, the
  nonzero complex representation $S^\lambda$ is irreducible.
- Scaffold audit: the original James-dichotomy strategy was sound but did not
  explicitly establish that $S^\lambda$ is a subrepresentation of
  $M^\lambda$, which is required to apply the theorem to a subrepresentation
  $U\le S^\lambda\le M^\lambda$. Added direct dependencies on the Specht
  definition and submodule inclusion, the permutation module and
  subrepresentation/irreducibility definitions, James's theorem, and the
  characteristic-zero nondegenerate self-pairing lemma. The recomputed level
  remains 4.
- Proof: put the given nonzero $U$ inside $M^\lambda$ using covariance of
  polytabloids. James gives either $S^\lambda\subseteq U$ or
  $U\subseteq(S^\lambda)^\perp$. In the second case, also using
  $U\subseteq S^\lambda$, the zero-intersection assertion forces $U=0$, a
  contradiction. Thus $U=S^\lambda$. The self-pairing lemma supplies
  $S^\lambda\ne0$, including for the empty shape, completing the definition
  of irreducible. No form of AC is used; the proof is conditional on the given
  $U$ and makes no choice from a family.
- Sources checked in full at use: Chan, *Representation Theory of Symmetric
  Groups*, Theorem 4.4(b), printed p. 16 (PDF lines 752-760 at
  https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf),
  and Chapter 9, Definition 9.1, Remark 9.2, Lemma 9.3 with proof, and Theorem
  9.4 with proof, printed pp. 31-32 (PDF lines 1772-1827, same URL). The
  Chapter 9 proof establishes the dichotomy directly; Chan's nearby note says
  the characteristic-zero instance is trivial if simplicity is already
  known, and the local proof does not use that circular observation. Chan's
  Theorem 4.4(b) proof is not imported as a completed argument; the local proof
  explicitly combines the already-proved dichotomy with the local Hermitian
  zero-intersection result.
- Examined dependencies: def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-subrepresentation-and-irreducible-representation,
  def-young-subgroup-tabloid-and-permutation-module,
  lem-polytabloid-covariance-and-column-sign,
  lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero,
  and thm-james-submodule-theorem-in-characteristic-zero. Exact cited clauses
  and their uses are recorded in the item contract. Boundary dispositions
  cover empty, zero, one, degenerate, endpoints, nonempty-choice, and both
  inapplicable iff fields.
- Refreshed the sufficient scope receipt at the current unchanged pair-scope
  hash `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
  Decision: repaired, confidence 1; item receipt hash
  `223cbc3a6e664cc04c48ad65daefba44352510b8336d410f18a848edf9bfc57d`.
- Checks actually run after authoring: explicit-path precheck via
  `node tools/tsx-run.mjs tools/precheck.mts items/thm-complex-specht-modules-are-irreducible.md`
  passed; explicit-path rendercheck passed; selected strict proof-contract
  check passed (0 errors, 0 warnings); batch-17 manifest-deps passed (21
  items, 0 errors); coverage passed (2 pages, 55 harvested results, 0
  errors/warnings); run-wide item-dependency-levels passed (924 items, 60
  pages, maximum level 18). Recomputed assigned order is unchanged; the next
  item is thm-standard-polytabloid-basis at level 4.
- Open item-specific gaps and published concerns: none identified. Full-batch
  content-policy, full selected-pair contract/precheck/rendering, and
  validate-plan remain for the completed pair.

### thm-standard-polytabloid-basis

- Claim retained: for every $n\ge0$ and $\lambda\vdash n$, the family
  $(e_t)_{t\text{ standard}}$ is a $\mathbb C$-basis of $S^\lambda$, with
  $\dim_{\mathbb C}S^\lambda=f^\lambda$ and the empty-shape dimension equal to
  one.
- Scaffold audit: the leading-term and Garnir strategy is mathematically
  sound, but the scaffold omitted the linear-span, basis and dimension
  interfaces needed to turn those supplier results into an actual basis and
  dimension calculation. Added direct dependencies on `def-linear-basis`,
  `def-linear-combination-and-span`,
  `lem-span-is-the-set-of-linear-combinations`, and `def-dimension`. Also
  declared the tabloid-order and row-set definitions used to show distinct
  standard tableaux yield distinct leading vectors. The assigned level remains
  4.
- Proof: the canonical standard row-filled tableau makes the index set
  nonempty. The leading-tabloid lemma gives independence; distinct standard
  tableaux have distinct tabloids because their rows are already sorted, and
  the total tabloid order plus coefficient-one leading terms shows the map
  $t\mapsto e_t$ is injective. Garnir straightening puts every Specht
  generator in the span of standard polytabloids; the definition and
  characterization of span give equality with $S^\lambda$. The finite family
  has $f^\lambda$ distinct vectors, so the finite-basis dimension definition
  gives the dimension formula. The unique empty tableau and its polytabloid
  give the singleton basis at $n=0$. No RSK identity or AC is used.
- Sources read completely at use: Chan, *Representation Theory of Symmetric
  Groups*, Theorem 4.11 and proof, printed p. 17 (PDF lines 827-862), plus
  Remark 4.13 (lines 863-867) at
  https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf.
  Chan proves independence from the leading tabloid, but defers spanning in
  Theorem 4.11 to a later RSK sum-of-squares identity; Remark 4.13 only points
  to James for Garnir. Neither is imported as a completed proof here. Wildon,
  *Representation Theory of the Symmetric Group*, Theorem 6.2 and Proposition
  6.5, printed pp. 26-27 (PDF lines 2092-2198); Theorem 6.8, printed p. 29
  (lines 2268-2308); Definition 6.9 and the complete Lemma 6.10 proof, printed
  pp. 30-31 (lines 2323-2406); and the standard-basis conclusion, printed p.
  32 (lines 2480-2494), at
  https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf. Wildon uses a
  right action; the local proof uses the already proved left-action Garnir
  supplier and its local column order.
- Examined dependencies: def-young-tableau-standard-tableau-and-shape,
  def-young-subgroup-tabloid-and-permutation-module,
  def-tabloid-and-column-orders-for-specht-straightening,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  lem-leading-tabloid-coefficient-of-a-standard-polytabloid,
  lem-garnir-straightening-of-polytabloids, def-linear-basis,
  def-linear-combination-and-span,
  lem-span-is-the-set-of-linear-combinations, and def-dimension. The source
  excerpts and their exact proof-step uses are in the contract. All eight
  boundary fields are addressed.
- Scope receipt refreshed at the unchanged pair hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
  Decision: repaired, confidence 1; item receipt hash
  `29b203616f615c7a0b1f33d762ff7c98e9d5a2e57d6f4001759c5f57fd5a0ea1`.
- Checks actually run: explicit-path precheck passed; explicit-path
  rendercheck passed; selected strict proof-contract passed with 0 errors and
  0 warnings; batch-17 manifest-deps passed (21 items, 0 normalized, 0
  errors); coverage passed (2 pages, 55 results, 0 errors/warnings); run-wide
  item-dependency-levels passed (925 items across 60 pages, maximum level 18).
  Recomputed assigned order is unchanged; the next item is
  thm-complex-irreducibles-of-symmetric-groups-are-specht-modules at level 5.
- Open item-specific gaps and published concerns: none identified. The Chan
  Remark 4.13 coverage row is a pointer to James rather than a proof; the
  authored proof and local straightening supplier use Wildon's full argument,
  and the item source references now name it. Leave the shared coverage ledger
  unchanged for serial reconciliation. Full-batch content-policy, full
  selected-pair contracts/precheck/rendering, and validate-plan remain due
  after all assigned items and pages.

### thm-complex-irreducibles-of-symmetric-groups-are-specht-modules

- Claim retained: for every $n\ge0$, the Specht modules indexed by partitions
  form a complete irredundant list of finite-dimensional irreducible complex
  $S_n$-representations.
- Scaffold audit and repair: the counting strategy left the characteristic-zero
  and nondivisibility hypotheses implicit and did not declare all the finite
  set, cycle-type, and map facts needed to turn an injection into surjectivity.
  Added those direct dependencies and split the finite-cardinality facts so
  each source clause supports the exact proof step. The item remains at level 5.
- Proof: establish $\operatorname{char}\mathbb C=0$ from the embedded ordered
  real field and positive canonical naturals. Since $S_n$ is finite and
  contains its identity, its order is a positive natural and hence a positive
  integer, so zero does not divide it; algebraic closure and the class-count
  theorem give equal finite numbers of irreducible classes and conjugacy
  classes. Cycle-type tuples correspond explicitly to partitions by part
  multiplicities, including the empty tuple/partition at $n=0$. Irreducibility
  and inequivalence make $\lambda\mapsto[S^\lambda]$ an injection; the finite
  image has the cardinality of the irreducible-class set, so the finite-subset
  theorem makes it surjective. The empty, zero, one, degenerate, endpoint,
  choice, and iff dispositions are tied to this argument. No AC is used.
- Source passages read completely: Chan, *Representation Theory of Symmetric
  Groups*, Corollary 4.5 and its one-sentence reduction to Theorem 4.4 and
  Lecture 2's first corollary, printed p. 16, plus Remark 4.6's modular warning,
  at https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf.
  Etingof et al., *Introduction to Representation Theory*, Theorem 2.17 and
  proof, printed pp. 26-27, and the Maschke, character-basis, and class-count
  argument in Theorem 3.1 and Theorems 3.5 / Corollary 3.6, printed pp. 32-34,
  at https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf.
  These literature arguments are source checks, not substitutes for the local
  proof. The local argument uses the already-published class-count theorem and
  cycle-type classification with their hypotheses checked explicitly.
- Examined dependencies: thm-complex-specht-modules-are-irreducible,
  cor-distinct-specht-modules-are-inequivalent,
  thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order,
  cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types,
  def-partition-young-diagram-and-conjugate-partition,
  def-finite-dimensional-representation-of-a-group-over-a-field,
  def-subrepresentation-and-irreducible-representation,
  def-intertwiner-equivalent-and-faithful-representations,
  def-symmetric-group, lem-symmetric-group-is-a-group,
  cor-symmetric-group-has-factorial-cardinality-again,
  def-finite-cardinality, thm-subset-of-a-finite-set,
  def-injection-surjection-bijection, def-complex-numbers-and-arithmetic,
  thm-complex-numbers-form-a-field, def-field-homomorphism,
  thm-the-complex-numbers-are-algebraically-closed,
  thm-reals-ordered-field, lem-of-naturals-positive,
  lem-characteristic-and-additive-order,
  lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field,
  and lem-nat-embeds-int. Exact source excerpts, uses, and step inputs are in
  the strict proof contract. The Etingof result is now mapped in the A-page
  coverage entry; the unused Webb source reference was removed from this item's
  batch-manifest sources.
- Decision: repaired, confidence 1. Receipt hash
  `a2272d90b83dd83bb6b55385c3116c28c535037b216fdc9629a541a8b4842e38`.
- Checks after authoring: explicit-path precheck passed; explicit-path
  rendercheck passed; selected strict proof-contract passed with 0 errors and 0
  warnings; batch-17 manifest-deps passed (21 items); coverage passed (2 pages,
  56 harvested results, 0 errors/warnings); run-wide item-dependency-levels
  passed (925 items across 60 pages, maximum level 18). The A/B scope hash
  remains `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
- Open item-specific gaps and published concerns: none identified. The
  recomputed next item remains `ex-polytabloids-for-shape-two-one` at level 5.

### ex-polytabloids-for-shape-two-one

- Claim retained: in shape $(2,1)$ the two standard polytabloids are
  $v_3-v_1$ and $v_2-v_1$; all six tableau polytabloids are the three pairwise
  tabloid differences and their negatives; the two standard polytabloids are a
  basis of $S^{(2,1)}$.
- Scaffold audit and repair: the strategy was correct, but the item needed
  direct access to the row/column stabilizer convention and the sign calculation
  in the library's finite-ordinal convention. Added those two declared
  dependencies; the existing level-4 standard-basis supplier remains a direct
  dependency, so the item stays at level 5 and the assigned order is unchanged.
- Proof: list the three tabloids by their singleton second rows. For a tableau
  with rows $[a,b]$ and $[c]$, its column stabilizer is
  $\{1,(a\ c)\}$; the transposition sign is $-1$ after relabelling to the
  library's finite ordinal, so $e_s=v_c-v_a$. Substitution of all six label
  orders gives the three differences and their negatives. The row and column
  inequalities leave exactly the two stated standard tableaux, and their
  distinct $v_2,v_3$ coefficients prove independence. The earlier standard
  polytabloid basis theorem supplies the spanning conclusion. No AC is used.
- Source passages read completely: Chan, *Representation Theory of Symmetric
  Groups*, Remark 3.9, printed p. 12, which computes two tableaux of shape
  $(2,1)$ and notes dependence on the tableau representative, at
  https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf.
  Wildon, *Representation Theory of the Symmetric Group*, Definition 2.4 and
  Example 2.6(B), printed pp. 5-6, which defines the signed column sum and works
  out the $(n-1,1)$ hook polytabloids, at
  https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf. Wildon's source
  uses a right action; the present six values are derived locally using the
  declared left action.
- Coverage repair: corrected the B-page Wildon harvest. Example 2.3(2) is the
  general hook tabloid indexing, Example 2.6(B) is the hook Specht calculation,
  Example 3.2 is the unrelated modular $(2,2)$ Gram-form computation, and
  Example 5.2 is modular $(2,1,1)$ self-pairing. Only the relevant $n=3$
  specialization is absorbed in this example; the two modular calculations are
  now explicitly out of scope with item-specific reasons. Coverage currently
  passes with 57 harvested results and no errors or warnings.
- Examined dependencies: def-young-subgroup-tabloid-and-permutation-module,
  def-young-tableau-standard-tableau-and-shape,
  def-row-and-column-stabilizers-of-a-tableau,
  def-column-antisymmetrizer-polytabloid-and-specht-module,
  def-inversions-inversion-number-and-sign, and
  thm-standard-polytabloid-basis. Exact source excerpts and proof-step uses are
  in the item contract.
- Decision: repaired, confidence 1. Receipt hash
  `2daca5b7665d0a2e9e50e2e9d8a35b17cb277fd995fa56b78feba3f612fc5e91`.
- Checks after authoring: explicit-path precheck passed; explicit-path
  rendercheck passed; selected strict proof-contract passed with 0 errors and 0
  warnings; batch-17 manifest-deps passed (21 items, 0 errors); run-wide
  item-dependency-levels passed (925 items across 60 pages, maximum level 18).
- Open item-specific gaps and published concerns: none identified. The next
  assigned item is `ex-specht-modules-of-s3` at level 6.

### ex-specht-modules-of-s3 — final assigned item, level 6

- Claim retained and fully authored: over the complex numbers the three irreducible S3-modules are the trivial module S^(3), the sign module S^(1,1,1), and the two-dimensional standard module S^(2,1). The latter is realized as the coordinate-sum-zero subspace of the natural three-point permutation representation. The claim distinguishes these representations and proves exhaustion using the already established characteristic-zero Specht classification.
- Scaffold audit: the original strategy correctly identified the augmentation representation but needed explicit suppliers for the partition/S3 conventions, permutation-module construction, representation-theoretic notions, and the concrete sign action. Added those ten direct dependencies listed in the item manifest; retained the four original example/classification prerequisites. Recomputed levels: this item remains level 6 and remains last in the assigned order.
- Proof: compute the (2,1)-polytabloids as differences of the three point basis vectors. Identify their span with W={(x1,x2,x3) in C^3 : x1+x2+x3=0}; show the two displayed differences form a basis. The adjacent transpositions act by the specified coordinate swaps, so W is invariant. The matrices show that W has no invariant line: a line invariant under both generators would have to be a common eigenline, and the two generator eigenspaces have zero intersection in W. The matrices generate S3, and the two nonisomorphic one-dimensional representations are the previously calculated trivial and sign actions; dimensions and the complex Specht classification give exhaustion. No AC is used.
- Source passages read completely: Chan, Representation Theory of Symmetric Groups, Example 3.14(a-b), printed p. 14, for the natural permutation representation and its sum-zero subrepresentation; Theorem 4.4 and Corollary 4.5, printed pp. 16-17, for the characteristic-zero irreducibility, inequivalence, and completeness results. The local proof includes the explicit S3 matrices and invariant-line calculation; the source supports the general theorem and the example, not the local matrix computation. Chan's hypotheses are met: the field is C, characteristic zero, and the group is S3, of order 6.
- Examined dependencies: the ten additional IDs recorded in the item frontmatter, plus ex-polytabloids-for-shape-two-one, ex-trivial-and-sign-specht-modules, thm-standard-polytabloid-basis, and thm-complex-irreducibles-of-symmetric-groups-are-specht-modules. Exact source excerpts and actual step inputs are in the strict proof contract.
- Decision: authored and fully checked. This ID is in the frozen pre-author baseline, so it requires a Step 3 item decision. The current `repaired`, confidence-1 receipt is `research/frontier-36-complete-step3b-review-ex-specht-modules-of-s3.json` (recorded at 09:40 UTC); the final Step 3 checker reports no open row for this pair. The other 20 item decisions are also current. Pair scope hash: 0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2. No current alpha-high scope declines.
- Open item-specific gaps and published concerns: none identified. No owner-held escalation remains for this pair.

## Dispatch handoff

### Completed IDs

All 21 assigned items are authored, contracted, inventoried, covered, and rendered:

- Level 0: def-column-antisymmetrizer-polytabloid-and-specht-module; def-invariant-inner-product-on-a-tabloid-module; def-tabloid-and-column-orders-for-specht-straightening.
- Level 1: lem-column-collision-causes-antisymmetrizer-cancellation; lem-leading-tabloid-coefficient-of-a-standard-polytabloid; lem-polytabloid-covariance-and-column-sign; lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero; cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis.
- Level 2: lem-adjacent-column-garnir-relation; lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional; lem-column-antisymmetrizer-detects-dominance; ex-trivial-and-sign-specht-modules.
- Level 3: lem-garnir-straightening-of-polytabloids; thm-james-submodule-theorem-in-characteristic-zero; thm-specht-to-permutation-homomorphism-dominance.
- Level 4: cor-distinct-specht-modules-are-inequivalent; thm-complex-specht-modules-are-irreducible; thm-standard-polytabloid-basis.
- Level 5: thm-complex-irreducibles-of-symmetric-groups-are-specht-modules; ex-polytabloids-for-shape-two-one.
- Level 6: ex-specht-modules-of-s3.

Authored A and B pages: specht-modules-and-the-irreducibles-of-the-symmetric-group and specht-modules-and-the-irreducibles-of-the-symmetric-group-examples. Local suppliers added: none beyond the assigned items. Dependency additions repaired existing item scaffolds as recorded above; no new page or pair was introduced.

### Checks actually run

- Explicit-path precheck: 18 proof-bearing items checked, 0 failures.
- Explicit-path rendercheck: all 21 item files and both pages, 23 files, 0 issues.
- Content policy: 21 items, 0 errors and 0 warnings.
- Strict proof contracts: 21 of 21, 0 errors and 0 warnings.
- Batch-17 manifest dependency check: 21 items, 0 errors.
- Source coverage: 2 pages, 57 harvested results, 0 errors and 0 warnings.
- Run-wide item dependency levels: 925 items across 60 pages, maximum level 18.
- Scope-decline validation for alpha-high: 0 current declines, 0 errors.
- Plan validation with research/plan-spec.json: exit 0; no cycles, forward references, or unresolved IDs among the 1240 pages with populated item lists.
- Same-frontier dependency ledger refresh succeeded. The owned batch-17 cross-batch dependency input remains an empty array; no cross-batch item dependency was added.

### Plan reconciliation and open obligations

The plan has 379 pages without item lists, including these page-level A/B entries; their item inventories are not represented in plan-spec for pre-splice item-by-item comparison. Report that pre-splice limitation to Step 4. The existing RG-9 prose names Schur among prerequisites while plan-spec does not require the Schur page; this proof uses no Schur result. Step 4 should reconcile that plan/prose mismatch. There is no unresolved mathematical prerequisite or local item gap.

### Published concerns, sibling routing, and escalations

No potentially defective published item was identified among the consulted prerequisites. No cross-group change or owner resolution is required for this pair. A separate whole-corpus rendercheck invocation earlier in the dispatch (the command's help flag was interpreted as a path selection) exposed rendering-policy errors in draft sibling material, not published items and not mathematical defects. These were not edited; route the findings to the respective pair owners:

- Batch 30, weak-derivatives-and-sobolev-spaces, confidence high for the render failure: def-locally-integrable-function-as-a-regular-distribution, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-is-independent-of-lp-representatives, and thm-zero-weak-gradient-implies-componentwise-constancy. The renderer reported multiline-display errors; make each affected display expression one source line. Owner task: research/frontier-36-complete-step3b-pair-weak-derivatives-and-sobolev-spaces-c71c232621148491.task.md.
- Batch 11, fundamental-solutions-newtonian-potentials-and-green-functions, confidence high for the render failure: def-newtonian-potential. The renderer reported a multiline-display error; put the affected display expression on one source line. Owner task: research/frontier-36-complete-step3b-pair-fundamental-solutions-newtonian-potentials-and-green-functions-b4f18dd449aeda72.task.md.

These are draft rendering issues, not published-item concerns and not blockers for this pair. No changes were made to sibling pair files or the serial published-consumer-supplier ledger.

### Engine handoff state

Operator correction (2026-09-28): that status invocation used `.autopilot/frontier-36-complete` as its state directory rather than the live `.autopilot` state directory, so its `1-drift` result did not describe this run. The live engine recorded this Step 3b dispatch as successful at 09:46:40 UTC and remains in `3b-author`. The example `ex-specht-modules-of-s3` was in the frozen pre-author inventory and has a repaired Step 3b item decision receipt. The pair's local gates passed; global downstream certification remains governed by the engine.
