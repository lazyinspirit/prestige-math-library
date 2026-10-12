# Step 3a dispatch report — `divided-powers-integral-forms-and-quantum-highest-weights`

- Run: `frontier-44-special-representation-examples-28` (batch 5, the run's
  in-run prerequisite `QG-2` pair, orders 1526/1527, category
  `special-topics-in-representation-theory`).
- Pair: A `divided-powers-integral-forms-and-quantum-highest-weights`
  (21 items: 6 definitions, 11 lemmas, 2 theorems, 2 propositions; in-batch
  dependency levels 0–5) and B
  `divided-powers-integral-forms-and-quantum-highest-weights-examples`
  (4 items: 3 examples, 1 counterexample; in-batch levels 0–2).
- Role: alpha scope review of this pair only. No scaffold, manifest,
  coverage, plan or engine state was edited. This report and the single
  `record-scope` receipt are the only outputs. This is not an item approval,
  not a proof audit, and not an owner record.
- Decision: **`sufficient`** — the planned definitions, results and examples
  match the QG-2 prose design item-for-item and cover the intended subject;
  source coverage is verified and adequate; every dependency resolves to a
  published item or a same-batch scaffold item; no unmet prerequisite was
  confirmed. Minor observations in §5 are drafting/bookkeeping items for the
  owner/3b and do not change the decision.
- Date: 2026-10-10.

## 1. Inputs read

- Manifest of record: `research/frontier-44-special-representation-examples-28-batch-5.pages.json`
  (both pages; all 25 items with kinds, statements, strategies, deps,
  `justified_by`, provenance), sha256 `c9bde61a6bcaa184bcf071e9db8becfa61c47210f924ae7dbc62140203c302cb`.
- Coverage: `…-batch-5.coverage.json` (44 harvested rows; 5 distinct
  sources), sha256 `a646ad7f2ddf795aecda20e7f34f65d3184bf11ad04bf78151e2a9dea0aa7341`;
  notes `…-batch-5.notes.md` (native construction, the three owner repair /
  integration sections at lines 201/206/211), sha256
  `23691bc3e1aa3ff44a732fd4ffd6a8c332b9af1081f4607f1c21790cb6a336a1`;
  `…-batch-5.cross-batch-dependencies.json` = `[]`.
- Plan/design: `research/plan-quantum-groups-track.md` §0 (lines 14–35, seam
  and coefficient conventions), §QG-2 (lines 87–115: the 21-row proposed
  inventory and proof joints, "Requires: QG-1 and
  `integrable-highest-weight-kac-moody-modules`"), and the QG-2 examples
  inventory (lines 302–309); `research/plan-spec.json` rows 1526/1527
  (ids, titles, kinds, categories, companions, `requires`; both plan item
  arrays empty, so the batch manifest is the pre-splice inventory of record).
- Run records: `…-scope-ledger.json` (both pages owed, batch 5);
  `…-frontier-gate-pages.json` (both pages selected) and
  `…-frontier-gate-items.json` (all 25 items selected);
  `…-owner-authoring-direction.md` lines 22–35 (binding owner route for
  QG2–QG5: the early QG2 page supplies the proved field, rational-local-q1,
  toral and highest-weight prerequisites used by QG3–QG4; the two global
  integral theorems keep their exact IDs and full `Z[q,q^-1]` conclusions
  and move to QG5; no early QG2–QG4 item may depend on the late QG5 IDs);
  `…-owner-quantum-integral-home-proposal.json` (the binding contract-home
  mapping: 21 A contracts stay, 2 move to `balanced-triples-and-global-crystal-bases`,
  4 B stay; 7 named early local suppliers; QG2 order 1526, QG5 order 1532);
  `…-owner-quantum-home-integration.json` (`retained_batch5_items: 25`,
  `scope_pages_unchanged: true`); `…-owner-quantum-integral-repair.md`
  (owner source/strategy repair and actual-read record);
  `…-owner-quantum-early-closure-guard.json` and
  `…-owner-quantum-readiness-pass.json` (42/42 current batch-5/6 Step-1
  readiness after a guarded pass, 0 engine transitions).
- Sibling scope reviews read for consumer context (all `sufficient`):
  `…-step3a-review-kashiwara-operators-and-crystal-lattices.json` (QG-3,
  which consumes 15 batch-5 suppliers), `…-step3a-review-tensor-product-crystals-and-highest-weight-crystal-uniqueness.json`
  (QG-4), `…-step3a-review-balanced-triples-and-global-crystal-bases.json`
  (QG-5, which now hosts the two transferred IDs and reports 38 batch-5/6/7
  scaffold items in its closure).
- Published suppliers read at statement level (all `status: published` in
  `items/`): `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `lem-quantum-pascal-recurrence-and-gaussian-integrality`,
  `def-drinfeld-jimbo-quantized-enveloping-algebra`,
  `def-positive-negative-and-toral-quantum-subalgebras`,
  `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`,
  `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`,
  `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`,
  `thm-quantized-sl-two-string-formulas`, `def-the-laurent-polynomial-ring`,
  `def-generalized-cartan-matrix`, `def-realization-of-a-generalized-cartan-matrix`,
  `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`,
  `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`,
  `def-integrable-kac-moody-module`,
  `def-kac-moody-integral-and-dominant-integral-weights`,
  `thm-kac-moody-verma-module-has-a-unique-simple-quotient`,
  `lem-casimir-separates-comparable-dominant-primitive-weights`,
  `thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules`,
  `thm-serre-presentation-of-a-kac-moody-algebra`,
  plus `def-discrete-valuation-ring`, `cor-dvr-is-a-pid`,
  `ex-localisation-of-a-pid-at-a-prime`,
  `cor-polynomial-ring-over-a-field-is-a-pid` and
  `thm-smith-normal-form-existence-over-a-pid` for the §4 wiring notes.

## 2. Design ∶ scaffold comparison (scope only)

Automated comparison of the current QG-2 design table with the manifest
(both directions): **21/21 A ids equal, in the same order, with 0 design-only
and 0 manifest-only rows**; the QG-2 examples inventory matches the B manifest
**4/4**. There is no unplanned item and no missing designed subject.

| design row (plan §QG-2) | manifest item | kind |
|---|---|---|
| skew derivations `e_i'`, `e_i''`, twisted Leibniz, weight/nilpotence | `def-kashiwara-skew-derivations-on-the-negative-quantum-half` | definition |
| `U_A` over `A=Z[q,q^-1]` with all divided powers, `K_h`, `T_{i,c,t}`; freeness deferred to QG-5 | `def-lusztig-divided-power-integral-form` | definition |
| chosen `P`-label grading, `K_h` eigenvalues, local nilpotence | `def-quantum-weight-module-and-integrability` | definition |
| normalized contravariant form via the constructed Cartan-projection descent | `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` | definition |
| Verma module and unique simple graded quotient | `def-quantum-verma-module-and-simple-highest-weight-quotient` | definition |
| normalized Lusztig–Kashiwara half form, `(1,1)=1`, `e_i'`-adjunction | `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` | definition |
| divided multiplication, full `E/F` reordering, toral index/coefficient integrality, triangular spanning only | `lem-divided-power-and-toral-quantum-binomial-reordering-identities` | lemma |
| ordinary-power projector and integral string coefficients without global bases | `lem-divided-power-half-has-integral-skew-string-coefficients` | lemma |
| finite-support auxiliary perfect datum and category comparison | `lem-finite-support-regularization-of-quantum-label-weight-modules` | lemma |
| bar and contravariant duality preserve `U_A` | `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` | lemma |
| Cartan projection constructs the Verma form, radical = maximal proper graded submodule, descent | `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` | lemma |
| dominant Serre quotient is nonzero, integrable, universal | `lem-quantum-highest-weight-serre-quotient-is-integrable` | lemma |
| separation of the negative half by iterated skew derivations | `lem-the-negative-half-is-separated-by-iterated-skew-derivations` | lemma |
| unmodified integral torus: Gaussian product/shift and coset basis | `lem-unmodified-integral-torus-has-a-quantum-binomial-basis` | lemma |
| local q=1 DVR deformation proves character/universality without `Z[q±]`-freeness | `lem-local-q-one-deformation-proves-integrable-highest-weight-universality` | lemma |
| rational-local halves and positive toral/enveloping specialization | `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` | lemma |
| Serre descent, symmetry, nondegeneracy; word-lattice `A`-valuedness and the exact Gaussian-denominator bound | `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` | theorem |
| q=1 toral specialization and classical Cartan generators after the `K_h=1` quotient | `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` | lemma |
| existence, integrability, uniqueness and universality of the integrable highest-weight module | `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` | theorem |
| complete reducibility of bounded-above finite-weight-space integrable modules | `prop-integrable-quantum-highest-weight-modules-are-semisimple` | proposition |
| both half algebra isomorphisms and the positive full quotient `U(g_der)` | `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` | proposition |

Owner-decided deltas are recorded and matched, not scope loss: the home
proposal moves exactly two native contracts
(`thm-integral-triangular-decomposition-for-the-lusztig-form`,
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character`)
to QG-5 with full retained claims, and the manifest carries exactly the 21
A contracts plus 4 B contracts the proposal maps to this page (21/2/4 by
proposal home). The 7 owner-added early local suppliers listed in the
proposal are all present. The moved IDs appear nowhere in the batch-5 pair,
and no batch-5 item depends on them (scan: 0 violations; also
`no_late_global_branch_dependency.passed = true` in the closure guard).

Conventions announced by the design are visible in the manifest: ordinary
symmetrizable generalized Cartan datum with `a_ii=2` (`def-generalized-cartan-matrix`
fixes this, so "no imaginary simple roots" is automatic); `A=Z[q,q^-1]` inside
`Q(q)` with `q` transcendental; possibly non-perfect toral pairing with an
explicit chosen label grading; AC declared in exactly four items
(`lem-the-negative-half-is-separated…`, the form theorem,
`prop-specialization…`, `prop-integrable-…-semisimple`) with the proposal's
localization of each use; no root-of-unity phenomena (the coverage disposes
ch. 34–35 as out-of-scope); the design's deferrals (crystal operators and
lattices to QG-3; canonical/global bases and the modified algebra to QG-5/QG-7)
carry resolving destinations and are the declared content of those later pairs.

The B page is the designed leaf: `ex-divided-powers-and-lusztig-form-in-quantized-sl-two`,
`ex-quantum-verma-and-simple-modules-for-sl-two` (including the boundary cases
`m=-1` and `m<0`), `ex-specializing-a-quantum-highest-weight-lattice-at-q-one`,
`cex-direct-q-one-substitution-in-quantum-denominators` — exactly the plan's
QG-2 examples list, one computational/diagnostic witness per main A concept
(divided powers and toral binomials; Verma/simple modules; lattice
specialization; the specialization boundary). No B item supplies any other
item (see §4), and the A items do not depend on the B page.

## 3. Source coverage

The pair cites 5 distinct documents (8 page-level entries) whose recorded
fetch stamps are complete. I re-fetched all five complete bodies in this
environment on 2026-10-10 and reproduce bytes and sha256 exactly:

| source | bytes | sha256-16 | pages | re-fetch |
|---|---|---|---|---|
| Lusztig, *Introduction to Quantum Groups* (author-hosted scan) | 16 994 932 | `b0dc6abfffe51656` | 355 | identical |
| Jeong–Kang–Kashiwara, *Crystal Bases for Quantum Generalized Kac–Moody Algebras* | 503 316 | `f873e27305536ded` | 60 | identical |
| Borcherds–Haiman–Johnson-Freyd–Reshetikhin–Serganova, *Berkeley Lectures…* | 2 118 866 | `ffeb74a5a0304b6f` | 364 | identical |
| Stanford Math 263C, quantum groups lecture 16 slides | 224 460 | `e4c6b030d0b938b5` | 44 | identical |
| Kashiwara, *On crystal bases of the q-analogue of UEA* (author-hosted scan) | 3 183 037 | `39b89708ecbff58c` | 52 | identical |

Passages I read directly in the fetched bodies (complete relevant arguments):

- JKK (6.1)–(6.3) on PDF p. 22 / Prop. 6.1 on p. 23: the exact commutator
  definition `e_iP-Pe_i=(K_iQ-K_i^{-1}R)/(q_i-q_i^{-1})`, the twists
  `e_i'f_j=q_i^{-a_ij}f_je_i'+δ_ij` and `e_i''f_j=q_i^{a_ij}f_je_i''+δ_ij`,
  and the i-string decomposition with projector `P_i` — matching the manifest's
  skew-derivation and integral-string items. Also (2.1) and (2.2)–(2.3) on
  PDF p. 8 (integrability condition and the linear anti-involution
  `e_i ↦ q_if_iK_i^{-1}`), matching the highest-weight and contravariant-form
  items.
- Berkeley printed pp. 316–317 (PDF p. 331): Theorem 13.2.1.10 (the
  `Z[q^{±1}]`-lattice `V_A`, its freeness over the PID, specialization at
  `q↦1` and character equality) and Corollary 13.2.1.11 (semisimplicity),
  plus the displayed `[K_i;0]` specialization computed by factoring /
  L'Hospital's rule. This backs the local-q=1 universality/semisimplicity
  items and the B counterexample's 0/0 computation.
- Stanford slides pp. 9–10: the toral quantum binomial
  `[K_i;c,t]=∏_s (K_iq_i^{c-s+1}-K_i^{-1}q_i^{-c+s-1})/(q_i^s-q_i^{-s})`,
  the recursion `[K_i;c,t]-q_i^t[K_i;c+1,t]=K_i^{-1}q_i^{-(c+1)}[K_i;c,t-1]`,
  and the identity `E_i^{(r)}F_i^{(r)}=Σ_t F_i^{(r-t)}[K_i;2t-2r,t]E_i^{(r-t)}`;
  p. 7: the restricted A-form generated by the `K_i` and divided powers —
  matching the reordering, specialization and B example rows.
- Kashiwara 1991 PDF pp. 15, 18–19 (° printed pp. 483–485): Proposition
  3.2.1 with the projector `P` and the ordinary/divided skew-power
  coefficient extraction; (3.4.4); Proposition 3.4.4 (unique symmetric form
  with `(f_iu,v)=(u,e_iv)`, `(1,1)=1`, constructed via the dual module) —
  matching the half-form and integral-string rows.
- Lusztig scan: no text layer exists in the author-hosted scan, so I verified
  document identity (355 pp., exact hash) but could not independently re-read
  its interior pages here (no OCR binary is available in this environment and
  this agent cannot view rendered pages). The cited interiors
  (ch. 1 §§1.2.3–1.2.15; ch. 23 §§23.1.3, 23.2.1–23.2.2; ch. 31 §31.1;
  ch. 33 §33.1.1–33.1.3) are covered by the owner's recorded full-page OCR
  reads in `…-owner-quantum-integral-repair.md` (PDF 267–269 = printed
  258–260, PDF 194–198 = printed 185–189, PDF 254–255, PDF 130–133), and
  their load-bearing content is independently cross-backed by the JKK,
  Kashiwara 1991, Berkeley and Stanford passages read above. This is the one
  source I did not re-read end-to-end; the limitation is recorded rather than
  papered over.

Coverage bookkeeping: `coverage-checklist --require-destination` → 2 pages,
44 harvested rows, **0 errors / 0 warnings**; `source-fetch-check` (gate
mode) → **8/8 fetch-verified, 8/8 resolved**; `url-sweep --recover
--fail-on-dead` re-run → **5/5 live, 0 failed, 0 drops**; `source-backing`
→ **23 authored results, every one still backed**. Dispositions on the A page:
31 `included`, 4 `inline`, 4 `deferred` (destinations
`kashiwara-operators-and-crystal-lattices` and
`klr-algebras-induction-and-quantum-serre-categorification`, both resolving
plan pages), 3 `out-of-scope` with source-grounded reasons, 2 `already-published`
(the QG-1 items reused). The B page: 7 rows, all `included`.

Record-level observations (no scope effect):

1. Four items are not individually named by any harvested row:
   `def-lusztig-divided-power-integral-form`,
   `def-quantum-weight-module-and-integrability`,
   `def-quantum-verma-module-and-simple-highest-weight-quotient`,
   `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality`.
   Their content is covered by the same documents through sibling rows
   (Lusztig ch. 23 A-form/divided powers, JKK §2, Berkeley §13.2.1) and three
   of the four are definitions whose drafting conventions are owner-fixed;
   the stability lemma is proved from the published QG-1 involution lemma.
   The checklist does not require an item-per-row mapping, so this is an
   attribution/record gap only. Recommended owner/3b action: add attribution
   rows (or a note) when the coverage is next touched; no new source is needed.
2. The Berkeley row behind `cex-direct-q-one-substitution-in-quantum-denominators`
   says "the warning that q=1 cannot be substituted directly into the quantum
   formulas". The text does not contain a literal prose warning; it displays
   the indeterminate quotient and evaluates it "either by factoring or by
   applying L'Hospital's rule", which is the same mathematical point. Wording
   only.
3. The Lusztig ch. 23 row name still bundles "triangular decomposition and
   A-basis of the A-form" with the retained reordering identity; that clause
   now belongs to the QG-5 home of the two transferred theorems. The row's
   item pointer and the current inventory are consistent; only the descriptive
   name carries pre-move residue.

## 4. Dependency and unmet-prerequisite checks

- The pair declares 130 `deps` edges: **61 in-batch** (both pages) and
  **69 external edges to 23 distinct published items**. Every external
  supplier exists in `items/` with `status: published`; there are 0 missing,
  0 plan-only, 0 unpublished suppliers, and 0 outgoing cross-batch edges
  (`…-batch-5.cross-batch-dependencies.json` is `[]`). The 2 `justified_by`
  edges (`def-contravariant-form…` → `lem-cartan-projection…`;
  `def-the-lusztig-kashiwara-bilinear-form…` → the half-form theorem) are
  in-pair, and both targets depend on the defined item.
- `manifest-deps` → 25 items, 0 normalized, 0 errors. `content-policy
  --manifest-only` → 25 scoped items, 0 errors / 0 warnings.
  `item-dependency-levels check --run` → no error touches batch 5 (in-page
  levels 0–5 for A in manifest order, 0–2 for B; the manifest order is a
  linear extension, recomputed independently: 0 order violations).
  `validate-plan --run` → OK: declared page order acyclic and consistent,
  no item-level cycles, forward references, B-page dependencies or unresolved
  ids among the 100 planned pages with item lists. `step1-decisions check
  --run` → 858/858 items `ready`, 0 unresolved (all 25 batch-5 items are
  covered by the owner's guarded readiness pass).
- Page prerequisites: `quantized-enveloping-algebras-and-quantum-serre-relations`
  (plan order 1524, published QG-1 page) and
  `integrable-highest-weight-kac-moody-modules` (plan order 1164, published
  classical page) both precede order 1526 and supply exactly the interfaces
  the pair declares (Drinfeld–Jimbo presentation, triangular decomposition,
  rank-one string/simple modules, classical integrable weights and Casimir
  items). The B page requires only the A page.
- Leaf rule: 0 items anywhere in the run consume any of the 4 B items; no
  A item depends on the B page.
- Consumers (intended library role): 3 pages declare the A page in `requires`
  (batch 6 `kashiwara-operators-and-crystal-lattices`, batch 8
  `balanced-triples-and-global-crystal-bases`, batch 10
  `klr-algebras-induction-and-quantum-serre-categorification`); 123
  item-level dependency/justification edges from 57 later consumer items in
  batches 6, 7, 8, 9, 10, 11, 16 and 25 reference **19 of the 25 items**.
  The 6 unreferenced items are the 4 B leaf items and the two internal
  lemmas `lem-quantum-highest-weight-serre-quotient-is-integrable` and
  `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` (used by
  the pair itself), which is exactly the designed supplier-first role. The
  QG-3 and QG-4 reviews independently confirm their batch-5 interfaces
  resolve; the QG-5 review confirms the two transferred IDs sit on its page
  with the retained global claims.
- **Unmet prerequisites absent from both the published library and the
  scaffold: none confirmed.** The load-bearing published interfaces were
  read at statement level and match their uses: the generic half theorem
  supplies clause (i) (classical PBW component ranks, used by the separation
  lemma) and clause (ii) (nondegenerate braided Hopf pairing, used by the form
  theorem); the QG-1 involution lemma defines exactly the semilinear `ψ` and
  anti-multiplicative `τ` fixed in the stability lemma; the rank-one theorem
  supplies the exact divided-power commutation formula and the simple modules
  used by the B examples; the triangular-decomposition theorem supplies the
  uniqueness of the two toral coefficients used by the skew-derivation
  definition; the classical page supplies the dominance/Casimir/Verma
  quotients used by the local-q=1 and semisimplicity strategies.
- Wiring notes for 3b (all facts published; no missing item):
  (a) `lem-rational-local-quantum-halves…` and
  `lem-local-q-one-deformation…` use "`R=Q[q]_{(q-1)}` is a DVR with
  uniformizer `q-1`" without declaring the published chain
  `def-localisation-at-a-prime-ideal`, `ex-localisation-of-a-pid-at-a-prime`,
  `cor-polynomial-ring-over-a-field-is-a-pid`, `cor-dvr-is-a-pid`;
  (b) the toral-basis strategy uses Smith-normal-form coset representatives
  (`thm-smith-normal-form-existence-over-a-pid` exists, unpublished-name-free
  in the strategy); (c) the local-q=1 and semisimplicity strategies invoke
  classical dominance/integrability suppliers
  (`lem-dominance-is-necessary-for-an-integrable-highest-weight-module`,
  `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras`) that are
  published on the classical page but not in the current `deps` arrays.
  These are citation/declaration duties, not scope gaps.
- Uncertainty (stated, not resolved here): the exact proof-level translation
  between the classical `P^+` of a minimal realization and the quantum
  datum's chosen label grading, and between the `C[[ℏ]]`/`C(z)` generic-half
  theorem and the pair's `Q(q)` setting, is a 3b authoring obligation. I
  confirmed the interfaces exist and are used within their stated
  hypotheses; I did not verify the translations at proof level (out of 3a
  scope).

## 5. Minor observations for the owner and 3b (no decision change)

1. `ex-divided-powers-and-lusztig-form-in-quantized-sl-two` (a) is garbled
   as scaffolded: the fragment
   "`F^{(2)}F^{(2)}=[4]![2]!\,F^{(4)}/4!`-free form
   `F^{(2)}F^{(2)}=\binom{4}{2}_iF^{(4)}`" contains a coefficient phrase that
   is not equal to the left-hand side (the correct identity is
   `F^{(2)}F^{(2)}=\binom{4}{2}_iF^{(4)}`, since
   `F^{(2)}F^{(2)}=[4]!/([2]!)^2\,F^{(4)}`). The same item's numeric value is
   also wrong as written: `\binom{4}{2}_i=(q^2+q^{-2}+1+q^2+q^{-2}+\ldots)`
   should be `q^{-4}+q^{-2}+2+q^{2}+q^{4}` (checked symbolically and at
   `q=3`: `[4][3]/[2]=92.123456… = 1/81+1/9+2+9+81`). Subject and intent are
   right; 3b should rewrite the two displayed expressions.
2. `lem-divided-power-and-toral-quantum-binomial-reordering-identities`
   (iii) has a comma/capitalization slip ("…commute with one another, The
   same-half divided powers commute when `a_ij=0`…"); cosmetic.
3. `def-kashiwara-skew-derivations-on-the-negative-quantum-half` has
   "vanish on1" (missing space); cosmetic.
4. The two global IDs transferred to QG-5 remain owner-held/escalated there
   pending their actual integral suppliers. That is the owner's recorded
   state and no batch-5 item depends on them; noted so no reader mistakes
   this pair's scope review for closure of those claims.

## 6. Scope judgement

**`sufficient`.** The planned definitions, results and examples adequately
cover the intended subject:

- design coverage is exact: the QG-2 table and the B inventory match the
  manifest id-for-id and order-for-order (21/21 and 4/4, 0 either way), the
  two owner-decided global transfers are recorded with retained scope and
  homed at QG-5, and the seven owner-added local suppliers are present;
- the subject a page titled "Divided Powers, Integral Forms, and Quantum
  Highest Weights" owes is fully promised: the Lusztig `A`-form with all
  divided powers and toral binomials, its stability under bar and
  contravariant duality, divided-power and toral reordering, integral
  skew-string coefficients, the unmodified integral torus basis, the exact
  integrality/denominator structure of the half form, its symmetry,
  nondegeneracy and separation, the full P-graded highest-weight theory
  (Verma modules, unique simple quotients, contravariant forms, integrability,
  universality via the rational-local q=1 DVR deformation, complete
  reducibility with AC, and the q=1 specialization recovering the classical
  positive enveloping quotient), with the design's deferrals (crystal
  operators/lattices; the global integral triangular decomposition and the
  global weight-character theorem) disposed to QG-3/QG-5 by the owner's
  binding decision;
- source coverage rests on five complete fetch-verified documents; I re-read
  the load-bearing passages of four of them directly (JKK, Berkeley,
  Stanford, Kashiwara 1991) and record honestly that the Lusztig scan's
  interior pages rest on the owner's recorded OCR reads rather than an
  independent re-read in this environment; no claim checked is left
  unsupported;
- the dependency closure resolves completely (130 edges; 23 published
  suppliers, all published; 0 missing or plan-only; 0 cross-batch outgoing;
  no cycles, forward references or B-page dependencies; all 25 items
  Step-1-ready), and no prerequisite is absent from both the published
  library and the scaffold — the only findings are citation/bookkeeping
  items whose suppliers are already published;
- the pair's intended role is supplied: three later pages declare it in
  `requires`, 19 of its items are consumed by 57 items across batches 6–11,
  16 and 25, and the four examples remain a leaf;
- no omitted topic or result requires enrichment or a pair merger. The
  observations in §3 and §5 are record/drafting refinements of existing
  promised content; they are flagged for the owner/3b, not decided here, and
  no scaffold was edited.

This decision certifies scope only. It certifies no statement and no proof,
and no item of this pair has been approved by this review.

## 7. Evidence index

- Design/plan: `research/plan-quantum-groups-track.md` lines 14–35, 87–115,
  302–309; `research/plan-spec.json` orders 1526/1527 (verified equal to the
  manifest in id, title, kind, category, companion and `requires`).
- Batch inputs (hashes above): `…-batch-5.pages.json`,
  `…-batch-5.coverage.json`, `…-batch-5.notes.md`,
  `…-batch-5.cross-batch-dependencies.json` (`[]`),
  `…-scope-ledger.json`, `…-frontier-gate-pages.json`,
  `…-frontier-gate-items.json`.
- Owner records: `…-owner-authoring-direction.md` lines 22–35;
  `…-owner-quantum-integral-home-proposal.json`;
  `…-owner-quantum-home-integration.json`;
  `…-owner-quantum-integral-repair.md`;
  `…-owner-quantum-early-closure-guard.json`;
  `…-owner-quantum-readiness-pass.json`; batch-5 notes lines 201/206/211.
- Sibling scope receipts/reports for QG-3, QG-4, QG-5 (consumer context).
- Checks run for this review: `coverage-checklist --require-destination`
  (2 pages, 44 rows, 0/0); `source-fetch-check` (8/8 verified/resolved);
  `url-sweep --recover --fail-on-dead` (5/5 live); `source-backing` (23
  backed); `manifest-deps` (25 items, 0 errors); `content-policy
  --manifest-only` (25 items, 0/0); `validate-plan --run` (OK, 100 pages);
  `item-dependency-levels check` (no batch-5 error); `step1-decisions check`
  (858/858 ready); design-vs-manifest id/order diff (21/21 and 4/4);
  dependency closure walk (130 edges; 23 published suppliers); consumer
  scan (123 item edges, 3 page requires, 0 B-item consumers); scan for use
  of the two moved global IDs (0).
- Sources fetched to `/tmp/b5-check` with exact recorded hashes:
  `lusztig.pdf` (16 994 932 B, `b0dc6abf…`), `jkk.pdf` (503 316 B,
  `f873e273…`), `berkeley.pdf` (2 118 866 B, `ffeb74a5…`),
  `stanford16.pdf` (224 460 B, `e4c6b030…`), `kashiwara91.pdf`
  (3 183 037 B, `39b89708…`); passages read: JKK pp. 8, 22–23; Berkeley
  p. 331; Stanford pp. 7, 9–10; Kashiwara pp. 15, 18–19.
- Not done (out of role): no proof-level verification of any item, no item
  decisions, no scaffold/manifest/coverage/plan/engine edits, no owner
  records, no publication action.
