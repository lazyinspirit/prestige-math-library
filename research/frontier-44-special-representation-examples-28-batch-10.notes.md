# Batch 10 — KLR Algebras, Induction, and Quantum-Serre Categorification: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair
`klr-algebras-induction-and-quantum-serre-categorification` (order 1536) /
`klr-algebras-induction-and-quantum-serre-categorification-examples` (order 1537),
`special-topics-in-representation-theory`. This is the QG-7 page of
`research/plan-quantum-groups-track.md` (lines 201–223).

**Status of this batch.** Manifest populated: 13 A-page items and 5 B-page items (18 total).
17 items carry a fresh `ready` record; 1 item carries a fresh `escalated` record (owner-held):
`thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
`step1-decisions check` reports this batch's only unresolved item as that escalation; every other
record is closed on current bytes. `item-dependency-levels check` reports no label mismatch and no
cycle for any batch-10 item (the remaining errors in that output are other batches' empty scaffolds).

## 1. Binding owner direction and preserved claims

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` is treated as
binding. Outcomes for this pair:

- The design's QG-7 scope is preserved in full: the generic KLR presentation, the polynomial
  representation and PBW basis, induction/restriction with biadjunction and projectivity, the
  divided-power idempotents and projectives, the Grothendieck-ring quantum-Serre relations, the KLR
  Cartan pairing and its agreement with the Lusztig-normalized half form, the all-symmetrizable
  negative-half categorification, and the symmetric-type lower-global-basis identification with its
  stated parameter and characteristic guards.
- The owner's "Future10/11 categorification consumers retain the full integral negative-half/
  highest-module and based-quotient conclusions with their actual normalization, parameter and
  symmetry hypotheses" is implemented: the negative-half global basis is consumed from QG-5
  (`def-lower-global-basis-of-a-quantum-highest-weight-module`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`,
  `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`) and the KLR-side
  statement keeps the symmetric-Cartan, characteristic-zero and quiver-geometric parameter guards;
  no arbitrary-parameter extension is asserted.
- The convention dictionary of the owner's quantum block is respected: the KLR pairing is compared
  with the **Lusztig-normalized** form `B_L = C_nu B_K` via QG-5's
  `lem-lusztig-and-kashiwara-normalizations-match-by-root-color`; no lower/upper basis is conflated,
  and the Kashiwara-normalized `B_K` (generator value 1) is not silently substituted for `B_L`
  (generator value `(1-q_i^2)^{-1}`).
- The geometric boundary of the owner's QG-7 gate is preserved as history: the symmetric-type
  global-basis item is scaffolded with its exact statement and escalated with the missing proof
  stack, not weakened and not dropped.

## 2. Plan / design conflicts recorded

1. **Current plan vs design item inventory.** `research/plan-spec.json` carries this pair with an
   empty `items` array (like every planned page of this run); the design's QG-7 section proposes
   12 A items and 5 B items, and `research/quantum-groups-planning/proposed-items.json` is design
   evidence only. The manifest contains the design's 12 A items, the 5 design B items, and exactly
   one additional local supplier,
   `lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases`, because HA-19's graded
   Krull-Schmidt and shift-orbit basis theorems are stated for *finite-dimensional* graded algebras
   while the KLR algebras are only locally finite and infinite-dimensional (e.g.
   `R(alpha_i)=k[x_1]`). The local lemma supplies the passage (graded Fitting/Krull-Schmidt and the
   free shift-orbit bases of `K_0` and `G_0`), citing KL I §2.5 where the property is stated.
   No other item was added or removed.
2. **Design order of the quasi-R/global block.** The design's QG-7 list places the Cartan pairing
   before the Serre-relations theorem; the manifest instead orders: presentation and grading →
   polynomial representation → PBW → induction/restriction and its biadjunction → divided powers →
   local Krull-Schmidt supplier → the Grothendieck-ring Serre relations → the Cartan pairing →
   form agreement → categorification → global-basis identification. This is the dependency order
   actually required by the arguments (the pairing needs the divided-power classes; the
   categorification needs the form agreement), and it respects the owner instruction to prove
   supplier-first. The design's claims are unchanged; only the array order was corrected.
3. **Source ledger of the design vs the verified readings.** The design's ledger lists Rouquier,
   VV, KK and (for adjacent pages) KMPY, Leclerc–Thibon, Webster and the Berkeley lectures. For this
   page the verified treatments are KL I, KL II, Rouquier, KK, Kleshchev's survey, Webster §1.3 and
   VV (coverage file, 59 harvested rows). The QG-6 Fock-space sources are not used here; the
   KMPY/Leclerc–Thibon material is outside this pair's scope.
4. **KL II Theorem 8 scope.** KL II states the isomorphism for the KL standard diagrammatic
   parameters ("without any restrictions on the Cartan datum and on the ground field"). The manifest
   states the categorification for every KLR datum of
   `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` and records the general-parameter
   passage as an authoring obligation discharged through Rouquier's flat family and §4 rescaling/
   decategorification results; this nuance is recorded honestly rather than hidden (see §6).

## 3. Source evidence and reading honesty

`node tools/source-fetch-check.mjs --coverage research/...-batch-10.coverage.json --stamp`
→ `11/11 source(s) fetch-verified (11 newly stamped)`; check mode later reports
`11/11 source(s) resolved`. Locators and per-result dispositions are in
`research/frontier-44-special-representation-examples-28-batch-10.coverage.json` (2 pages,
59 harvested rows, 0 coverage errors).

What this worker actually read in this dispatch:

- **KL I** (`arXiv:0803.4121v2`, cached text `khovanov-lauda-quantum-groups-i.txt`): §2.1 relations and
  diagram calculus; §2.2 Examples 2–3 (R(i)=k[x_1], R(mi)=NH_m, idempotent e_m and ψ(e_m)); §2.3
  Proposition 2.3/Theorem 2.5/Corollary 2.6; §2.4 Proposition 2.7 and Theorem 2.9; §2.5
  Proposition 2.12, the Krull–Schmidt statement and the freeness of G_0; §2.6 Propositions 2.16–2.19
  and Lemma 2.20; §3.1 Propositions 3.1–3.4 with the explicit relations [P_ij]=[P_ji] (i·j=0) and
  [P_iji]=[P_i(2)j]+[P_ji(2)] (i·j=−1) and the pairing computation ([P_i],[P_i])=(1−q^2)^{-1};
  §3.2 Propositions 3.10–3.20; §3.3 Proposition 3.22 and Example 3.23; §3.4 the canonical-basis
  conjecture. Limitation, recorded honestly: the PDF text layer drops the graphics of some braid
  relations, so the braid and dot-move relations were cross-read against Rouquier's algebraic
  relation list and Kleshchev's typed presentation (below), and the double-edge formula was verified
  by direct computation (see §4).
- **KL II** (`arXiv:0804.2080v1`, freshly fetched PDF `kl2.pdf`): §§1–2 Cartan data, the algebras
  Af, Propositions 1–2, the relations (2)–(7) with the dot counts and the degree assignment (9);
  §3 Proposition 6/Corollary 7 with the proofs, the paragraph on γ intertwining the forms, and
  Theorem 8; §4 nilHecke computations.
- **Rouquier** (`arXiv:0812.5023v3`, cached text): §2.3.2 Frobenius forms and their equivalence with
  adjunctions; §3.1.6–3.1.7 nil affine Hecke algebra and symmetrizing form; §3.2.1 the presentation
  and its relation list (including the sign convention discussed in §6); §3.2.2 Proposition 3.12 with
  the proof; Theorem 3.7 and Remark 3.14; §3.2.3 Cartan specialization with Lemma 3.13; §3.2.4 the
  quiver-with-automorphism formula and the double-edge instance; §4.1–§4.2 graded category and
  decategorification; §5 headings.
- **KK** (`arXiv:1102.4677v4`, cached text): §2 the graded categories and HOM; §3 equations
  (3.9)–(3.12), Propositions 3.2–3.3, Corollary 3.4, Theorems 3.6 and 3.9; §4 Theorems 4.5/4.7
  statements; §5–§6 statements (deferred to QG-8).
- **Kleshchev survey** (`arXiv:0909.4844`, cached text): §2.6 Theorem 2.5 relations (2.14)–(2.24)
  with Corollary 2.6; §2.11 Definition 2.14/Theorems 2.15 and the duality #; §9.1 Theorems 9.1–9.2.
- **Webster** (`arXiv:1001.2020`, cached text): §1.3 cyclotomic quotients, the closing-diagram
  Frobenius trace, Theorem 1.8 and Remark 1.9.
- **VV** (`arXiv:0901.3992`, cached text): §0–§3 (geometric realization, perverse-sheaf setup),
  §4.5 Theorem 4.5 and its §4.7 proof structure. This reading is the basis of the escalation: the
  proof's imported foundations are named in the item and the escalation record.

## 4. Mathematical verification performed at scaffold level

- **Double-edge braid correction** (B3): computed independently from two sources.
  With `Q_ij(u,v)=-(u-v)^2` and Rouquier's relation (7), on `nu=(i,j,i)`,
  `(tau_2 tau_1 tau_2 - tau_1 tau_2 tau_1)e(nu) = (x_1+x_3-2x_2)e(nu)` up to the global `tau`-sign
  convention; the type-A form is Kleshchev's `e=2` correction `y_r-2y_{r+1}+y_{r+2}`. The degree
  check is the subtle point: the three factors act on the pairs `(j,i)`, `(i,i)`, `(i,j)`, giving
  degrees `2`, `-2`, `2`, totalling the degree `2` of the correction — the middle factor's negative
  degree is exactly what makes the double edge different from the simple edge.
- **Two-vertex polynomial action** (B2): the factorization `Q_ij=u+v=P_ij(u,v)P_ji(v,u)` with
  `P_ij=u+v`, `P_ji=1` gives `tau(fe(ij))=(x_1+x_2)f(x_2,x_1)e(ji)` and `tau(fe(ji))=f(x_2,x_1)e(ij)`,
  whence `tau^2=Q_ij` on each corner; the disconnected case gives `tau^2=e(ij)+e(ji)`. The claimed
  isomorphism `R e(ij) ~= R e(ji)` for `a_ij=0` was verified from `tau^2=1` on the corners.
- **Degenerate-parameter counterexample** (B5): two independent failures verified by direct
  computation — (i) `Q_ij=0` admits no nonzero factorization, so the polynomial action must kill
  `tau_1` while `tau_1≠0` in the PBW basis, destroying faithfulness; (ii) the degree-correct
  non-hermitian pair `Q_ij=u+2v`, `Q_ji=u+v` produces on `(i,j,i)` the relation
  `tau_2tau_1tau_2-tau_1tau_2tau_1=e`, mixing degrees 3 and 0, so the spanning family cannot be a
  basis. The example explicitly does **not** claim that PBW itself fails for `Q_ij=0` (freeness has
  its own source proof).
- **Nil-Hecke idempotents** (A7, B1, B4): `e_{i,2}=x_1 tau_1` was verified to be an idempotent
  (`e^2=x_1(x_2 tau+e) tau=x_1 tau`) and `psi(e_{i,2})=tau_1 x_1` likewise
  (`psi(e)^2=(x_2 tau+e) tau x_1=tau x_1`), in the sign normalization of the manifest's relation (6).
- **Form normalization** (A9, A10): the rank-one and rank-two values of the KLR pairing were checked
  against `B_L=C_nu B_K`: `([P_i],[P_i])=(1-q_i^2)^{-1}=B_L(theta_i,theta_i)` and
  `B_L(theta_i^{(2)},theta_i^{(2)})=(1-q_i^2)^{-1}(1-q_i^4)^{-1}`; the Kashiwara-normalized `B_K`
  (value `1` on `theta_i`) is deliberately *not* used for the comparison.
- **Dependency interfaces read** (supplier statements, not recursive proof certification): batch 5
  `def-kashiwara-skew-derivations-...`, `def-lusztig-divided-power-integral-form`,
  `def-the-lusztig-kashiwara-bilinear-form-...`,
  `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`,
  `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality`; batch 8
  `lem-lusztig-and-kashiwara-normalizations-match-by-root-color`,
  `def-lower-global-basis-of-a-quantum-highest-weight-module`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`,
  `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`; published
  QG-1 (`def-symmetrizable-cartan-datum-...`, `def-drinfeld-jimbo-...`,
  `thm-the-formal-quantum-serre-half-...`, `def-quantum-integers-...`), HA-18
  (`def-graded-balanced-tensor-product-...`, `thm-bimodule-tensor-exactness-...`,
  `thm-graded-bimodule-tensor-hom-adjunction`) and HA-19
  (`def-graded-grothendieck-group-shift-module-...`,
  `def-projective-simple-hom-pairing-...`,
  `thm-projective-hom-pairing-is-additive-and-graded-sesquilinear`) items.

## 5. Escalations (owner-held)

1. `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` —
   escalated. Exact gap: the only complete proof in the required generic symmetric
   characteristic-zero scope is Varagnolo–Vasserot's geometric proof (Theorem 4.5 and its §4.7
   proof), which imports quiver flag varieties and proper maps, equivariant constructible/perverse
   derived categories, Verdier duality and the Decomposition Theorem/semisimplicity of the Lusztig
   complexes, equivariant Ext and Borel–Moore homology/convolution, equivariant formality and base
   change, and Lusztig's perverse-sheaf canonical-basis theorem. None of this has an in-run,
   published or drafted supplier. The type-A route through Brundan–Kleshchev Theorem 5.19 (summarized
   as Kleshchev §9.1 Theorem 9.2) is cyclotomic and needs Ariki's theorem, which is also absent, and
   Rouquier's general-type result is an announcement. Required input: build the displayed geometric
   supplier stack, or verify a complete nongeometric proof of the generic symmetric statement. The
   item's statement, normalization and interfaces are preserved unweakened; its dependencies
   (including the QG-5 based-quotient supplier) are declared in the manifest.

No **published** item was found defective by this batch's checks. The published QG-1 and HA-18/HA-19
items were read at statement-interface level for the used clauses; no repair is proposed and none
was made. No page-split or new-pair escalation is needed: the A page carries 13 items and the B page
5, far below the 100-item cap.

## 6. Residual uncertainty and authoring obligations (not represented as completed work)

- `thm-klr-categorification-of-the-negative-quantum-half`: the verified sources state the theorem for
  the KL standard diagrammatic parameters. The manifest states it for every KLR datum of A1; the
  passage to a general hermitian datum is an authoring obligation through Rouquier's flat family and
  §4.1–§4.2 decategorification/rescaling results. If that passage cannot be closed, the item must be
  rescoped to the standard specialization rather than weakened silently.
- `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`: the closing-diagram
  Frobenius trace is proved in Webster §1.3 for the cyclotomic quotients and in Rouquier §3.1.7 for
  the nil affine Hecke algebra; the generic `R(nu)` trace is supplied by the same closing-diagram
  functional on the PBW basis. The author must either run that cyclicity proof explicitly or cite
  the localization/Frobenius-form route (Rouquier §2.3.2 + Proposition 3.12). Recorded as the main
  strategy obligation of the item, not as a completed proof.
- `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`: relation (6) is stated in the
  sign normalization of the divided difference (`tau_a x_a - x_{a+1} tau_a = e(nu)`); Rouquier's
  printed convention has the opposite global sign, and the two are exchanged by `tau_a -> -tau_a`.
  The author must keep one convention fixed across A1, A7, B1, B3 and B4 (the manifest does).
- `def-divided-power-klr-idempotents-and-projectives` and B4: the grading shift in
  `P_{i,n}=R(n alpha_i) psi(e_{i,n}){-d_i binom(n,2)}` is pinned by the source's displayed
  decomposition `R(n alpha_i) ~= P_{i,n}^{[n]_{q_i}!}`; the author must re-verify the sign of the
  shift against KL §2.2 at authoring.
- `def-the-klr-cartan-pairing`: the horizontal-reflection anti-involution `psi` and the shift
  normalization of the hom form are recorded explicitly; the author must fix the convention that
  makes `([P_i],[P_i])=(1-q_i^2)^{-1}` and keep the bar-conjugate hom form distinct from the
  symmetric tensor form.
- `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route`: the counterexample refutes the
  claim that (Q1)/(Q4) and (Q2) can be dropped from the *faithful-representation/basis* route; it
  does not claim that the degenerate algebra fails to be free (PBW independence is a separate
  source statement). The author must keep that boundary explicit.

## 7. Checks actually run (stable inputs, this dispatch)

- `node tools/coverage-checklist.mjs research/...-batch-10.coverage.json --require-destination`
  → `2 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/...-batch-*.pages.json`
  → `manifest-deps: 502 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json`
  → `content-policy: 502 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → exit 0: "no item-level cycles, forward references, B-page dependencies, or unresolved ids among
  the 42 page(s) with item lists"; the diagnostics touching this pair are the advisory
  `redundant-prereq` warnings inherited from the plan's `requires` list (preserved as planned).
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  → no label mismatch and no cycle for any batch-10 item; the remaining errors are other batches'
  empty scaffolds (batches 9/11/16/17/18/23/24/25 as of this run).
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28`
  → 502 items, 501 ready; the only unresolved *item* record is this batch's escalated A12; the
  remaining work entries are other pages' empty scaffold inventories.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-10.coverage.json --stamp`
  → `11/11 source(s) fetch-verified (11 newly stamped)`.
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28`
  → `56 page(s) owed, 56 in the manifests — no scope drift`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  → refreshed and deduplicated; the batch input
  `research/...-batch-10.cross-batch-dependencies.json` has 16 rows (14 item edges into batches 5/8
  plus the two page requirement edges), all `open`, and remains subject to the ordinary Step-3/Step-5
  supplier-first review.

Not run by this worker (engine or other batches' responsibility): `url-liveness`/`source-backing`
(whole-run gates), `drift-review-check`, `extcheck` (not applicable at Step 1: its manifest-scoped
subjects resolve to item files that do not exist until Step 3 authoring).

## 8. Cross-batch observations for the owner

- The batch input declares the 14 item-level cross-batch edges into batch 5 (QG-2) and batch 8
  (QG-5) plus the two page-requirement edges. The QG-5 edges are the ones the owner already
  reviewed under the "current producer interface" pass; nothing further is requested here.
- Future consumer note (for batches 11 and 24, not edited): the interfaces this page exports are
  `def-divided-power-klr-idempotents-and-projectives`,
  `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`,
  `def-the-klr-cartan-pairing`,
  `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
  `thm-klr-categorification-of-the-negative-quantum-half` and the escalated
  `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`. The
  cyclotomic page (batch 11) should consume the Cartan-pairing and categorification interfaces; it
  must not assume the escalated global-basis item.
- No other batch's manifest, coverage, notes, decisions or the shared plan was edited by this
  worker; the only shared file touched is the unified cross-batch ledger, refreshed by its own tool.

## 9. Final edit pass and re-run (this dispatch)

Two text-only strategy corrections were made after the first recording pass:

1. `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`: the description of the
   closing-diagram trace was made precise and its normalization explicitly delegated to KL §2.2 and
   Webster §1.3 (the earlier wording named an imprecise "top dot monomial").
2. `thm-klr-categorification-of-the-negative-quantum-half`: a clause was removed that could have
   suggested the escalated global-basis identification; the free-basis sentence now refers only to
   the divided-power classes produced by the surjectivity clause.

Because the readiness hash is transitive, the affected records were refreshed in the same pass:
`thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`,
`thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`,
`thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
`thm-klr-categorification-of-the-negative-quantum-half` and
`ex-a-nil-hecke-divided-power-projective` (the last two transitively). The escalated A12 record was
left untouched (the registrar refuses to overwrite an escalation). After this pass
`step1-decisions check` reports this batch's only unresolved item as the A12 escalation.

Re-run results on the final bytes:

- `manifest-deps` 502 item(s), 0 error(s); `content-policy --manifest-only` 0 error(s), 0 warning(s)
  at the time of the run (a sibling batch wrote more items concurrently; the count moved from 502 to
  524 between invocations, all outside this batch).
- `coverage-checklist --require-destination` 2 pages, 59 harvested results, 0 error(s).
- `source-fetch-check` (check mode) 11/11 fetch-verified, 11/11 resolved.
- `validate-plan` exit 0, no item-level cycles/forward references/B-page dependencies/unresolved ids
  among the pages with item lists.
- `item-dependency-levels check` no error mentions this batch; the 12 remaining errors are other
  batches' empty scaffolds (batches 11, 17, 18, 23, 24, 25 at the time of the run).
- `frontier-dependency-ledger refresh --require-reviewed` reports "Cross-batch review incomplete:
  supply every batch input and review every declared edge" because batches 11/16/17/18/23/24/25 have
  no inputs yet; batch 10 itself is listed under `reviewed_batches` with all 16 of its edges reviewed
  and 0 orphaned reviews.

No mathematical clause was changed by this pass; only the two strategy phrasings above.

## 10. Final confirmation pass on the frozen manifest bytes (continued dispatch)

After the last wording edit (`def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`:
the list of polynomial conditions is now cited as `(Q1)-(Q4)`), the ordinary record command was
re-run for all 18 items. It wrote nothing, and the registrar refusals are the expected closed-state
messages: for all 17 ready items "Keep unchanged ready items and records intact", which
`step1-decisions.mjs` returns only when the stored `sha256` still equals the hash of the current
manifest bytes; for the A12 escalation "Only the owner may resolve this record". The escalation
record was not overwritten and keeps its original stamp (`at 2026-10-08T17:17:37Z`). No `--owner`
flag was used anywhere in this batch.

Check battery re-run on those bytes (shared 28-manifest, 524-item run state at the time of the run):

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/...-batch-*.pages.json` | `524 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json` | `524 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/coverage-checklist.mjs research/...-batch-10.coverage.json --require-destination` | `2 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)` |
| `node tools/source-fetch-check.mjs --coverage research/...-batch-10.coverage.json` | `11/11 source(s) fetch-verified`, `11/11 source(s) resolved (0 documented drops)` |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-...` | exit 0; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 44 pages with item lists |
| `node tools/item-dependency-levels.mjs check --run frontier-44-...` | exit 1 with exactly the 12 empty-inventory errors of batches 11, 17, 18, 23, 24, 25; no error line names either batch-10 page, so all 18 declared labels equal the recomputed `1 + max(in-run dep level)` values (default `validateLabels: true`) |
| `node tools/step1-decisions.mjs check --run frontier-44-...` | `524 items, 520 ready`; the only batch-10 work row is the A12 escalation; the other item rows (batch 9) and the 12 empty page rows are outside this batch |
| `node tools/manifest-integrity.mjs --run frontier-44-...` | `56 page(s) owed, 56 in the manifests`; no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-...` | refreshed and deduplicated; batch 10 in `reviewed_batches`, all 16 owned input rows present as `open` reviews, 0 orphaned reviews |

No manifest, coverage, decision or prose correction was needed by this pass. Nothing outside the
owned batch-10 artifacts (manifest, coverage, notes, cross-batch input, step-1 records) and the
tool-owned derived ledger `research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
was written. Readiness here remains scaffold readiness; owner/operator reconciliation and the engine
gate follow construction, and the escalated A12 item is not independent mathematical approval of
that pair by this worker.

## 11. Convention repair in the KLR presentation (same dispatch, after §10)

The §10 pass left the mathematical text untouched; a dependency/convention audit of relation (7)
then found a genuine sign error and a missing relation case, with two downstream echoes; a follow-up
check of the polynomial-representation item found one more false clause. Five affected items were
repaired; this overrides §9's "no mathematical clause was changed" statement, which described the
earlier pass only.

**What was wrong.**

1. `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`, relation (7), printed the braid
   numerator `Q(x_{a+2},x_{a+1})-Q(x_a,x_{a+1})` — Rouquier's printed numerator, arXiv:0812.5023
   §3.2.1 — while the same item fixes the $\tau$-normalization of relation (6) as
   $\tau_ax_a-x_{a+1}\tau_a=e(\nu)$ (the divided difference of sign $(f-s_af)/(x_a-x_{a+1})$), which
   is the negative of Rouquier's printed convention. The two conventions differ by
   $\tau_a\mapsto-\tau_a$, which flips every odd relation; the printed (7) had not been flipped with
   (6). Source check: Kleshchev, arXiv:0909.4844, Theorem 2.5, relations (2.20)–(2.21) and the braid
   relation (2.24), whose $e=2$ correction is $\psi_r\psi_{r+1}\psi_r-\psi_{r+1}\psi_r\psi_{r+1}
   =(y_r-2y_{r+1}+y_{r+2})e(i)$ on the double edge. In the batch's $\tau$-normalization this pins
   the correction to the negated Rouquier numerator,
   $(\tau_{a+1}\tau_a\tau_{a+1}-\tau_a\tau_{a+1}\tau_a)e(\nu)=
   \frac{Q(x_a,x_{a+1})-Q(x_{a+2},x_{a+1})}{x_{a+2}-x_a}e(\nu)$.
2. Independent check in the batch's own polynomial action
   (`thm-polynomial-representation-of-a-klr-algebra`, KL I §2.3 action): for the standard
   simply-laced $Q_{ij}=u+v$ a direct computation of the operators on the $(i,j,i)$-component gives
   $\tau_2\tau_1\tau_2-\tau_1\tau_2\tau_1=-e(\nu)$ (checked on $f=1$ and $f=x_1$), which satisfies
   the corrected relation and contradicts the printed one; for the double-edge $Q=-(u-v)^2$ the
   corrected relation returns $+(x_1+x_3-2x_2)$, the value
   `ex-the-double-edge-klr-braid-correction` already stated in (b) and matching Kleshchev (2.24).
3. The dot move (6) omitted the case $b\in\{a,a+1\}$ with $\nu_a\ne\nu_{a+1}$ (Rouquier's printed
   "0 otherwise"); as printed, the presentation did not force $\tau_ax_b=x_{s_a(b)}\tau_a$ there.
   The clause now reads "if $b\notin\{a,a+1\}$ or $\nu_a\ne\nu_{a+1}$".
4. `def-klr-grading-and-diagrammatic-composition`'s strategy carried the compensating slip
   $-3b_{\nu_a\nu_{a+1}}$ for the degree of the left side of (7) (it counted the three crossings on
   their original adjacent pairs). The graded pieces act on $(\nu_a,\nu_{a+1})$,
   $(\nu_{a+1},\nu_{a+2})=(\nu_{a+1},\nu_a)$ and $(\nu_a,\nu_{a+2})=(\nu_a,\nu_a)$, so the degree is
   $-2b_{\nu_a\nu_{a+1}}-2d_{\nu_a}$ — the same count the double-edge example's (c) already used
   ($2+(-2)+2=2$). It equals the right side $-2b-2d$ for every Cartan datum and is $0$ on a simple
   edge and $2$ on the double edge.
5. `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route`(c) had inherited that slip and
   claimed a "degree-$3$ versus degree-$0$" contradiction. Under the item's own grading both sides of
   the toy braid relation have degree $0$ ($-2b_{ij}-2d_i=2-2$), so the claimed degree mismatch was
   false and the relation as printed had the wrong sign. (c) was rebuilt around the correct failure
   of the basis route: relations (4) on the two corners $(i,j)$ and $(j,i)$ and the dot slides of (6)
   give $\bigl(Q_{ji}(x_1,x_2)-Q_{ij}(x_2,x_1)\bigr)\tau_1e(ij)=-x_1\tau_1e(ij)=0$, hence
   $\tau_1x_2e(ij)=0$; the would-be basis monomial $\tau_1x_2e(ij)$ vanishes, so Rouquier's spanning
   family $S$ is not linearly independent — the contrapositive of Rouquier's Theorem 3.7
   (PBW $\Leftrightarrow$ $Q_{ij}(u,v)=Q_{ji}(v,u)$), whose proof derives exactly this identity. The
   toy braid relation is now displayed with the corrected sign, $-e(i,j,i)$, and explicitly labelled
   homogeneous, so the counterexample no longer claims a false mechanism. Clauses (a)–(b) of the
   counterexample (the $Q_{ij}=0$ factorization failure) are unchanged and remain correct, including
   its explicit non-claim that the degenerate algebra fails to be free.
6. `ex-the-double-edge-klr-braid-correction`: the displayed divided difference in (b) now uses the
   corrected numerator order (the value, the strategy's $-\frac{Q(x_3,x_2)-Q(x_1,x_2)}{x_3-x_1}$ and
   the Kleshchev match were already right), and (c)'s closing sentence states the degree as
   $-2b_{ij}-2d_i=2$ instead of attributing the difference from the simple edge to the middle factor
   (whose degree $-b_{ii}=-2$ is common to both).
7. `thm-polynomial-representation-of-a-klr-algebra`: the action formula itself matches KL I §2.3
   (equal colours the divided difference, distinct adjacent colours $P(x_{a+1},x_a)s_a$ with the
   orientation-dependent factor) and needed no change. But the statement's clause "All operators
   have degree $0$ for the grading ... when $x_a$ is given degree $2d_{\nu_a}$" is false: $x_a$ acts
   in degree $2d_{\nu_a}$, and the distinct-colour crossing $P_{\nu_a\nu_{a+1}}(x_{a+1},x_a)s_a$ acts
   in degree $\deg P_{\nu_a\nu_{a+1}}$, which equals $-b$ only for the equal-colour divided
   difference. The clause and the strategy now carry the standard summand-shifted statement: the
   increments $\Delta_{ij}:=-b_{ij}-\deg P_{ij}$ are antisymmetric because
   $\Delta_{ij}+\Delta_{ji}=-2b_{ij}-\deg Q_{ij}=0$ by (Q3), the equal-colour crossings need no shift
   (the divided difference already has degree $-b_{\nu_a\nu_a}$), so the shifts integrate over the
   two-step cells of the permutohedron and $\rho(R_n(Q)_m)\mathrm{Pol}_{n,d}\subseteq
   \mathrm{Pol}_{n,d+m}$. The injectivity and localization content (Rouquier §3.2.2, Proposition
   3.12 with all $P_{ij}\ne0$) is unchanged, and the strategy's vague "up to the fixed sign $w_\nu$"
   was replaced by the identity actually used, $\partial_ax_a-x_{a+1}\partial_a=1$.

**Effect on dependencies.** No statement of a *used* interface changed: (6) gained a case, (7) a
sign, (4) in item 7 is a grading-homogeneity clause on a faithful representation, and the B-page
items are leaves. All five edits are text-only inside the batch, with `deps` arrays and
`dependency_level` labels unchanged, so no dependency-level label and no cross-batch row changed.
Because the readiness hash is transitive, the five edited items and everything downstream were
refreshed (17 ready records in total across the two record passes; each directly edited item carries
the exact evidence above, the rest are hash-invalidated only). The A12 escalation record was not
touched.

**Re-run on the repaired bytes.** `manifest-deps` 524 item(s), 0 error(s); `content-policy
--manifest-only` 524 scoped, 0 error(s), 0 warning(s); `coverage-checklist --require-destination`
2 pages, 59 harvested results, 0 error(s); `source-fetch-check` 11/11 fetch-verified and 11/11
resolved; `validate-plan` exit 0; `item-dependency-levels check` exactly the 12 other-batch
empty-scaffold errors and none for either batch-10 page; `step1-decisions check` 520/524 ready with
the A12 escalation as batch 10's only open row; `manifest-integrity` 56/56, no scope drift;
`frontier-dependency-ledger refresh` OK, 16 batch-10-owned edges all reviewed, 0 orphaned reviews.


## 12. Owner mathematical correction and current hold — 2026-10-08T18:12:21.790084+00:00

The preceding native17-ready/one-escalated report is historical. The actual owner read found additional false supplier clauses and repaired them atomically while preserving all18IDs; the current contracts, exact source readings, local arguments and remaining smallest results are in `research/frontier-44-special-representation-examples-28-owner-klr-review.md` and `research/frontier-44-special-representation-examples-28-owner-klr-interface-proposal.json`. All18 original readiness records remain unchanged pending root review and guarded certification; no current-ready mathematical claim is made by this note. The canonical branch retains full symmetric multiple-edge characteristic-zero geometric parameters and remains held on the exact decomposition/Ext-formality/positive-global prerequisites. The all-symmetrizable integral categorification route additionally holds on its exact maximal-tail/simple-head lemma. Corrected algebraic clauses use genuine longest-shuffle second adjunction, degree-zero End/projective lifting, Q4 Serre contraction and projective# Hom comparison. Current batch10 dependency levels are reconciled; no published or current out-of-batch downstream subjects were found. Full scoped policy and source-fetch/coverage mechanical checks pass; other batches empty inventories remain the dependency-level checker failures. No engine transitions, shared plans/ledgers, items/ or library/ files were mutated.


## 13. Complete algebraic owner cycle — 2026-10-08T18:41:20.496025+00:00

The owner independently closed the maximal-tail/unique-head/absolute-simple/integral-surjectivity gap and added exactly two necessary local suppliers, giving20 current contracts (15A,5B) with all18 native IDs retained. The second helper proves generic self-dual normalization and positive FIRST-string coefficient1; it uses the exact general QG5 LEFT recursion rather than an unproved unsigned star extension. Mackey is declared/proved in the induction/restriction supplier, and shuffle bimodules are ungraded-free but graded sums of labelled principal-projective shifts. Exact remaining hold: semisimple quiver-flag Ext realization in full symmetric multiple-edge characteristic-zero geometric scope. Conditional graded Yoneda makes negative End vanish, then norm/balanced uniqueness gives signed global vectors and the new FIRST-string rule fixes positivity. No separate VV augmentation/formality or ADE-only canonical comparison is imported. All18 original readiness records remain unchanged pending root current20 review and guarded registrar authorization. See the revised owner-klr-review, interface-proposal and geometric-minimum artifacts; the preceding algebraic hold is historical and resolved by the actual local proof.


## Owner integration of existing geometric bridge

After all21 added pairs were scaffolded, the original reviewer found and the original signed supplier author repaired the omitted adjacent unequal-color slides and the separate leaf example dimensions in native47, each in its first repair round. Same-owner actual consumer checks are recorded in the native47 repair packet. The original global reviewer then issued sufficient-at-Step1 verdict `research/frontier-44-special-representation-examples-28-owner-klr-actual-geometric-sufficiency-review/corrected-clause-applicability-after-native47-round1.json`. Root applied only the frozen deps/strategy/axiom_use fields and mechanically recomputed level16 to27, preserving all20 IDs and original rich Statement/title/provenance/sources. The four new owned page/item input rows record current scaffold interface review and retain native authoring/independent acceptance obligations. The original exhausted repair history was not reset. Final after-binding is required before the global held readiness row changes; no Step3 proof or publication acceptance is asserted.
