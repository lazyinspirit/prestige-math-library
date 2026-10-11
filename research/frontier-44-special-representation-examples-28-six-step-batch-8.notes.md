# Batch 8 — Balanced Triples and Global Crystal Bases: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair `balanced-triples-and-global-crystal-bases`
(order 1532) / `balanced-triples-and-global-crystal-bases-examples` (order 1533),
`special-topics-in-representation-theory`.

**Status of this batch.** Manifest populated: 25 A-page items, 4 B-page items. Of the 29 items,
22 carry a fresh `ready` record, 5 carry a fresh `escalated` record (owner-held), and the 2
transferred global Z[q,q^-1] contracts keep their owner escalations. `step1-decisions check`
reports exactly those 7 owner-held items as unresolved for this batch and nothing else; all other
records are closed on current bytes.

## 1. Binding owner direction and the integral transfer

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` and the
owner proposal `...-owner-quantum-integral-home-proposal.json` are treated as binding. Outcomes:

- The two global contracts `thm-integral-triangular-decomposition-for-the-lusztig-form` and
  `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` are preserved
  **verbatim** (id, kind, title, deps, statement, strategy, provenance, sources) from the received
  manifest. Only their scaffold label `dependency_level` was recomputed, 3 -> 15 and 6 -> 16,
  because the transferred contracts now sit after the new QG5 integral suppliers in the same run;
  a stale label would fail the `item-dependency-levels` gate. No mathematical clause changed.
- The owner-prescribed order is implemented in the item array:
  (i) bar/integral lattices and the P^1 two-chart linear algebra;
  (ii) integral residue and star/string-ideal prerequisites
  (`lem-integral-crystal-residues-...`, `lem-string-ideal-decomposition-...`);
  (iii) the simultaneous balanced/global construction for the negative half and the highest weight
  modules (`lem-string-ideal-triples-are-balanced`, `thm-the-highest-weight-crystal-triple-is-balanced`);
  (iv) lower global basis, based quotient and the specialization proposition;
  (v) the two retained global theorems;
  (vi) quasi-R: completion, Drinfeld pairing, dual-basis sums, field-level intertwiner,
  divided-power integrality (separate, escalated), inverse/factorization identities, tensor bars.
- Integral freeness is derived from globalization everywhere: the chart lemma
  `lem-balanced-triple-linear-algebra-over-the-projective-line` is stated for an arbitrary
  `Z[q,q^-1]`-submodule with free A_0/A_inf chart lattices, and no item assumes global Z-freeness.
- `No early QG2–QG4 item depends on the two late QG5 global IDs.` Checked by scanning all 28 batch
  manifests: the only mentions of the two transferred IDs outside batch 8 are two statement-level
  citations inside batch-5 items (see §5); no `deps` edge from batches 5–7 points at them.

## 2. Plan/design conflicts recorded

1. **Current plan vs design scope.** `research/plan-spec.json` carries only the two transferred
   contracts on this pair; `research/plan-quantum-groups-track.md` QG-5 and
   `research/quantum-groups-planning/proposed-items.json` list 18 further approved items. The owner
   direction resolves the conflict: "QG5 must preserve the proposed contracts during scaffolding and
   include all other approved QG5 claims and necessary local suppliers." The manifest therefore
   contains the union (18 design items + 2 transferred + 5 local suppliers: `def-integral-residue-
   lattices-...`, `lem-integral-crystal-residues-...`, `lem-string-ideal-decomposition-...`,
   `lem-string-ideal-triples-are-balanced`, `lem-quasi-r-divided-power-integrality-on-based-lattices`),
   25 A items in total and the 4 approved B items. Plan-spec itself was not edited.
2. **Design dep conflict on the based quotient.** The design's proposed deps put
   `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module` *after*
   `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type`. The based quotient is
   a general-symmetrizable statement (Kashiwara91 Theorem 5(ii), JKK Remark 10.8(i)) and the owner
   direction orders it before the two retained global theorems. The manifest drops the symmetric-type
   dep and uses the integral construction plus the batch-6 projection-compatibility lemma instead.
   Recorded here as a deliberate, owner-supported deviation.
3. **Design ordering of the quasi-R block.** The design lists the quasi-R items (D2–D8) before the
   balanced-triple items. The owner direction places quasi-R divided-power integrality *after* the
   integral bases. The manifest follows the owner: the quasi-R block sits after the integral
   construction and after the two retained theorems. The design's D6 was split so that its
   field-level construction is one item and its divided-power integrality joint is the separate
   `lem-quasi-r-divided-power-integrality-on-based-lattices`, matching the owner's "prove ...
   independently" and "field-level quasi-R construction may occur earlier only with a separate exact
   supplier".
4. **A_0 vs A.** Batch 6's `thm-crystal-basis-of-the-negative-half` is an A_0-statement; this page's
   integral statements are Z[q,q^-1]-statements. The two are never conflated: the integral lattice
   `L_A(infinity)`/`L_A(lambda)` is introduced explicitly and the freeness conclusion is Z-freeness.
   Likewise the lower (bar) lattice L^- and the form-dual upper lattice E^vee are kept distinct, per
   the owner warning "prove the exact claimed perfect pairing rather than assume a lower integral
   lattice is self-dual over Z[q,q^-1]".

## 3. Source evidence and reading honesty

Verified full text with `node tools/source-fetch-check.mjs --coverage <this batch's coverage> --stamp`:
**7/7 sources fetch-verified (4 newly stamped)**: Kashiwara91, Lusztig (monograph), Stanford slides,
JKK, Brundan, Lacabanne, Berkeley lectures. Locators and per-result dispositions are in
`...-batch-8.coverage.json` (39 harvested rows, 0 coverage errors).

What this worker actually read in this dispatch:

- **Kashiwara91** (full PDF, SHA-256 `39b89708ecbff58c7262cb5aede2857aca82b24303ed32788b3263fdd6be63a5`):
  §0 (Theorems 5–7), §1.2–1.3, §5.1–5.2 (Propositions 5.1.3, 5.2.1, 5.2.4 and their proofs),
  §6.1 (prose and statement structure of (6.1.1)–(6.1.19), Propositions 6.1.1/6.1.3, Corollary 6.1.2,
  Lemma 6.1.4), §7.1–7.5 (Lemmas 7.1.1–7.1.2, (7.1.1)–(7.1.2), (G_l), Lemmas 7.3.1–7.3.4,
  Proposition 7.4.1, Corollary 7.4.2, Lemma 7.5.1, (7.5.4)–(7.5.6), Lemma 7.5.2 and the closing
  argument). **Limitation, recorded honestly:** the PDF's text layer drops most mathematical symbols;
  statements were reconstructed from the readable prose plus the parallel rational proof in JKK §8–10.
  Symbol-level details of the printed displays (e.g. the exact rings in (6.1.8)–(6.1.11) and the exact
  constant in the §7.4/§7.5 recursions) must be re-checked by the Step-3 author against the printed
  pages; the scaffold states the mathematical claims at the level confirmed by both treatments and by
  the library's own QG-2 normalization.
- **JKK** (`math/0305390`, SHA-256 `f873e2...`): §8 (Definition 8.1, Theorem 8.2, Lemma 8.4),
  §9 (Theorems 9.1–9.3, Definition 9.4, the (q−q^-1)-divided-difference proof), §10 in full
  (Lemmas 10.1–10.3, Propositions 10.4, Corollary 10.6, Lemma 10.7, Remark 10.8 and the final
  induction). Note: JKK's ring is A = Q[q,q^-1] (a PID); this page's integral claims are the
  Z[q,q^-1] refinements whose non-free chart step is Kashiwara91 Lemma 7.1.1.
- **Brundan** (`math/0509700v2`, SHA-256 `803ba9...`): §3 (Θ in the completion, weightwise
  finiteness, tensor bar (3.1), parenthesization (3.2)–(3.3), citation of [L, 27.3.1/27.3.6]) and the
  statements of §§4–5 concerning the Z[q,q^-1]-lattices and triangular expansions.
- **Lacabanne** (`1807.00770v2`, SHA-256 `42cca3...`): §1.5 (Proposition 1.7, the divided-power norm),
  §1.6, §1.7 (Proposition 1.14 with proof, Lemma 1.15, Lemma 1.16, Proposition 1.17) and §2.3.
- **Berkeley lectures** (`categorified.net/LieQuantumGroups.pdf`, SHA-256 prefix `ffeb74a5...`):
  §13.2.1 (Theorem 13.2.1.10, Corollary 13.2.1.11) and §11.2.2.6.
- **Lusztig, Introduction to Quantum Groups** (author-hosted scan, SHA-256 `b0dc6abf...`): the file
  is a page-image scan **without a text layer**; this worker could not read it and did not claim to.
  The Lusztig locators in the coverage file are the ones received from the batch-5/owner transfer and
  from the design; the new rows (Ch. 1.2, Ch. 14.4, Ch. 4.1.2, Ch. 27.3) are attribution-level and are
  flagged as unverified in the escalation records. This is the direct cause of the escalations in §4.
- **Stanford slides**: retained from the received coverage (batch-5 evidence); re-stamped this
  dispatch.

## 4. Escalations (owner-held), with exact gaps

1. `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` — escalated. Gap: the exact
   perfect pairing and the normalization dictionary between the divided-power form
   (`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`, A_loc-valued on
   `U_A^-`) and the orthonormal polarization (`lem-crystal-lattice-polarizations-are-perfect-at-q-zero`,
   A_0-valued) are not closed by the sources verified here. Required input: either a verified
   integral duality statement for the form-dual lattice over Z[q,q^-1] with the pinned normalization,
   or the exact change-of-normalization; the owner-held step cannot be replaced by assuming
   self-duality.
2. `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` — escalated. Gap:
   depends on (1) and on the four-clause dictionary whose Lusztig passages are not text-verifiable
   here; Kashiwara91's introduction (printed p. 466) states the A_n,D_n,E_n agreement but is a
   statement, not a verified proof route.
3. `lem-quasi-r-divided-power-integrality-on-based-lattices` — escalated. Gap: type-A
   Z[q,q^-1]-triangularity is verified (Brundan §§4–5) and the rational construction is complete
   (Lacabanne §1.7), but the A-integrality of the dual-basis sums for an arbitrary symmetrizable
   datum (Lusztig Ch. 4.1.2 + Ch. 27.3, cited by Brundan (3.1)) could not be text-verified; no
   independent proof is recorded. Owner direction forbids inferring it from lattice freeness.
4. `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` — escalated because its
   integral-lattice clause consumes (3); its rational clauses are ready.
5. `ex-lower-and-upper-global-bases-in-a-small-highest-weight-module` — escalated because its
   upper-basis clause is phrased inside the normalization framework of (1); the rank-one
   computations themselves are recorded and complete.

The two transferred contracts keep their received owner escalations ("held pending root serial home
integration ... and actual stable simultaneous integral ... supplier scaffold"). With this batch the
simultaneous integral supplier scaffold now exists
(`thm-the-highest-weight-crystal-triple-is-balanced`, `thm-existence-bar-invariance-...`,
`thm-global-basis-projection-...`), so the owner/operator reconciliation can now review those holds
against actual in-run suppliers; this worker did not clear them (not permitted).

No **published** item was found defective by this batch's checks. No page-split or new-pair
escalation is needed: the A page carries 25 items, far below the 100-item cap, and the B page 4.

## 5. Cross-batch observations for the owner

- B-page leaf rule: one initial draft of the counterexample depended on the batch-6 B-page item
  `cex-an-a-zero-lattice-without-a-crystal-basis`; `content-policy --manifest-only` flagged
  `batch-b-leaf-target`, and the dependency was removed with the lattice computations redone inside
  the item. No other B-page supplier is used.
- Batch 5's `lem-divided-power-and-toral-quantum-binomial-reordering-identities` (and one further
  batch-5 statement) cite the two transferred QG5 IDs in prose. These are statement-level forward
  references to a later-order page; at authoring time the batch-5 items will need the declared
  `forward_refs` (or rephrasing), and the batch-5 item that says "it is
  [[thm-integral-triangular-decomposition-for-the-lusztig-form]]" now points at a live later supplier.
  This is recorded for the owner; batch-8 files only were written.
- The `frontier-dependency-ledger` input for this batch lists and reviews all 68 cross-batch edges
  (3 page-requirement edges to batches 5/6/7; 65 item edges), with `status: open` and per-edge
  evidence in `...-batch-8.cross-batch-dependencies.json`; the collector reports 0 orphaned reviews
  and 68/68 reviewed edges for batch 8.

## 6. Checks actually run (stable inputs, this dispatch)

- `node tools/coverage-checklist.mjs research/...-batch-8.coverage.json --require-destination`
  → `1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/...-batch-8.pages.json` → `29 item(s), 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only <all 28 manifests>` → `426 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run RUN` → exit 0, "no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 34 page(s) with item lists";
  the only diagnostics touching this pair are advisory `redundant-prereq` warnings inherited from the
  plan's `requires` list (the requires list is preserved as planned).
- `node tools/item-dependency-levels.mjs check --run RUN` → no label mismatches and no cycles for
  batch-8 items; remaining errors are other batches' empty scaffolds (batches 9–11, 14–18, 23–25
  were still unwritten when this ran).
- `node tools/step1-decisions.mjs check --run RUN` → for this batch, exactly the 7 owner-held items
  above are unresolved; all 22 fresh `ready` records are closed on current bytes.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-8.coverage.json --stamp`
  → `7/7 source(s) fetch-verified (4 newly stamped)`.
- `node tools/manifest-integrity.mjs --run RUN` → `56 page(s) owed, 56 in the manifests — no scope drift`.

Not run by this worker (engine or other batches' responsibility): `url-sweep`/`source-backing`
(whole-run gates), `drift-review-check`, and the other batches' scaffolds. `extcheck` is not
applicable at Step 1 because its manifest-scoped subjects resolve to item files that do not exist
until Step 3 authoring (WORKFLOW records the same ordering).

## 7. Residual uncertainty

Beyond the five escalations: (a) symbol-level details of Kashiwara91 §§6.1/7.4/7.5 must be re-read by
Step 3 against the printed paper (text-layer limitation recorded in §3); (b) the dictionary between
Lacabanne's Drinfeld double and the library's `U_q` for the field-level Θ is recorded inside
`thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique` as an explicit authoring obligation;
(c) `def-upper-global-basis-by-the-contravariant-form` deliberately asserts no perfectness, so the
held duality item cannot be consumed silently. None of these uncertainties is represented as
completed work.

## 8. Bookkeeping corrections inside this construction pass

- `ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module` (clause (e)) and
  `cex-bar-invariance-and-mod-q-congruence-without-balancedness` (clause (b)) had drafting
  artifacts in their `strategy` text; they were rewritten to finished prose and their `ready`
  records were refreshed in the same pass (the guard forbids refreshing after hand-off, so the
  correction was made before closing this batch). No mathematical clause changed.
- `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type`: a malformed wikilink
  in the strategy was corrected to
  `[[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]]` (the same ID was
  already in its `deps`). Its escalation record predates that text-only fix; escalated records are
  frozen for owner reconciliation by design and their stored hash is not consulted by the readiness
  gate.
- `cex-bar-invariance-and-mod-q-congruence-without-balancedness` initially depended on the batch-6
  B-page item `cex-an-a-zero-lattice-without-a-crystal-basis`; `content-policy --manifest-only`
  reported `batch-b-leaf-target` and the dependency was removed, with the required lattice
  computations (free rank two, generation, failure of `\tilde e_1`-stability and of weight
  decomposition) redone inside the item.
- The cross-batch ledger input was regenerated after these edits and still reports 68/68 reviewed
  edges for batch 8 and 0 orphaned reviews.

## 9. Final correction pass (owner-warning alignment)

- `def-upper-global-basis-by-the-contravariant-form` and
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`: the required-perfectness
  clause originally listed the inclusion `E subseteq E^vee` as a claim. That inclusion is precisely
  the lower-lattice self-duality-adjacent assertion the owner direction forbids assuming, so it was
  removed from both items; the claim list is now: `E^vee` is free over `A`, the pairing
  `E^vee x E -> A` is perfect, the dual family is an `A`-basis of `E^vee`, plus the crystal
  compatibility and the explicit non-self-duality guard. `def-upper-global-basis-...` (ready) was
  refreshed; the duality theorem is escalated and needs no refresh (escalated records are frozen).
- Because the item hash is transitive, the upstream edit invalidated the `ready` record of the
  consumer `ex-canonical-global-basis-normalization-in-symmetric-type`; its record was refreshed in
  the same pass with the reason recorded. After this pass `step1-decisions check` reports exactly the
  7 owner-held items for batch 8 and no stale record.
- No further item-text edits were made after that pass.


## Owner correction supersession — current31 contract interface

The preceding native caveats and ready labels are preserved as history, not current proof verdicts. The exclusive owner has preserved all29 native batch8 IDs and added exactly two in-page suppliers: negative-half reversal and the full Lusztig/Kashiwara root-color normalization dictionary. Current inventory is27A+4B, maximum dependency level19, ordered supplier-first. Current5/6/7 inventories are25/17/14. No early5–7 dependency reaches either transferred global8 contract.

The full Kashiwara91 §§6–7 integral induction now derives the strong Z[q±] claims: ordinary skew extraction proves half saturation BEFORE gluing; signed reversal transfers right ideals; the balanced string ideals glue global lifts; finite Z-chart generation proves Laurent freeness, and module ideal saturation/integral highest quotient presentation are conclusions. No torsionfree-over-nonPID or pre-existing global-basis freeness premise remains.

The full source convention is v=q^-1, torus inversion, opposite coproduct followed by tensor flip; the forms differ by the root-color factor C_nu, not a single scalar. Field Θ, inverse and all threefold identities have local complete proofs. Upper duality is restricted graded and perfect weightwise. The A-dual basis uses inverse FIELD Gram matrices, its own dual infinity chart and adjoint bar; no lower integral self-duality or exact unweighted operator adjunction is asserted.

The affine A1 action counterexample is CONFIRMED, not an unresolved proof gap: its modified free/bar-fixed U_A-stable lattice satisfies the exact four Lusztig27.1.2 based conditions and the crystal chart equals the direct-sum chart. Integral highest quotient presentation supplies the map modulo[2]. The degree-delta Θ coefficient is −(1−q²)/(1+q²), outside A. Root independently checked the algebra and visually read all(a)–(d) on PDF223/printed214. Thus arbitrary affine based pairs do not have automatic integral Θ action. The actual contract retains general highest-FIRST with arbitrary based second, arbitrary based first with lowestSECOND under finite action, all finite highest products, finite-type arbitrary based pairs proved by the full24.1.6 coefficient route, and exact based direct sums/subquotients of these constructions via actual bar-compatible basis-to-basis-or0 maps and basis-subset kernels. Arbitrary based pairs retain the field tensor bar whenever action is finite; their integral claims require independent integral action, which is not assumed.

Bao–Wang arXiv1403.0039v2 complete7 pages was actually read. Propositions2.4/2.6 and Theorems2.7/2.9 close ordered/general-highest cases; Remark2.10 does not supply integral splitting; p5 association explicitly presupposes the relevant integral actions; Remark2.14 confirms the algebra coefficient boundary. This full source is now in coverage with its actual byte/hash stamp.

All4 native B contracts are corrected: actual Z-balanced intersections and correct q± charts; two-dimensional Θ has c=q−q^-1 fixed by coproduct intertwining and weight-preserving E⊗F action; the mixed chart witnesses nonexistence and the separate scaled1D genuine crystal chart witnesses nonuniqueness; m2 upper lattice uses middle vector/(1+q²), and the A2 lower words are already global while duals require inverse Gram matrices.

The owner reviewed every current7 consumer against the corrected5/6 supplier Definitions and Statements. Six current7 contracts needed focused repairs: top-weight residue and induction measure; strict tie versus max-attainment and raising-sign count; full finite-top tensor lattice stability BEFORE congruences; dual swap inequalities/operators; locally weight-finite indexed uniqueness rather than a false finite-constituent claim; dual B highest/lowest wording. All14 native7 IDs and actual true clauses remain. Native7 four carriers,14 decisions and2 receipts are archived before these amendments.

No readiness registrar, engine transition, shared-plan edit or independent authored-item audit is recorded by these corrections. Source/strategy proof readiness will be assessed only after the final current guard set and root authorization.
