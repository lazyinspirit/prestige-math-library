# Batch 21 Step 1 scaffold — Crystallographic Root Lattices and Weyl Group Interfaces

Run: `frontier-42-coxeter-32` · pair `crystallographic-root-lattices-and-weyl-group-interfaces`
(A order 1758, B order 1759, `coxeter-groups`, design label CG-16). Outputs:
`research/frontier-42-coxeter-32-batch-21.pages.json` (3 A + 4 B items), this note,
`research/frontier-42-coxeter-32-batch-21.coverage.json`,
`research/frontier-42-coxeter-32-batch-21.cross-batch-dependencies.json` (42 rows, all reviewed)
and seven item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md` (read
  first; binding), the design `research/plan-coxeter-groups-track.md` §CG-16 (lines 404–416), the
  machine inventory `research/coxeter-scaffold/inventory.json` (CG-16),
  `research/coxeter-scaffold/definition-justifications.json`, the native A/B prose
  (`library/coxeter-groups/crystallographic-root-lattices-and-weyl-group-interfaces{,-examples}.md`),
  the algebraic source report's "Real roots and the crystallographic seam", and the classical
  source report's warning that "a root lattice over Z is inappropriate without additional
  crystallographic hypotheses". The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §
  `crystallographic-root-lattices-and-weyl-group-interfaces`) records **VERDICT: no-drift** with
  "No prerequisite gap. The integral pairing and lattice-stability proofs remain draft
  obligations."
- **Preserved contracts.** The three designed local supplier contracts keep their exact ids, kinds
  and relative order: `def-cg-crystallographic-scaling-coroot-and-lattice`,
  `lem-cg-integer-pairings-and-allowed-dihedral-labels`,
  `thm-cg-crystallographic-finite-type-and-lattice-stability`. The design's B companion is
  implemented as four items: `ex-cg-b2-c2-dual-realizations-and-lattices`,
  `ex-cg-g2-from-i2-six`, `cex-cg-i2-five-is-not-crystallographic`,
  `ex-cg-a2-root-and-weight-lattices`.
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task and design on the pair
  ids, orders 1758/1759, category, companion, titles and the A page's `requires`
  (`finite-coxeter-diagrams-and-complete-classification`,
  `root-systems-dynkin-diagrams-and-cartan-killing-classification`). Its item arrays for these two
  pages are empty, exactly as for every other new page of this run, so no item-level plan text can
  conflict; the design's local supplier contracts are the item-level authority. **No
  design-versus-plan conflict exists.**

## Inventory interpretation (design routes kept; where the text was made explicit)

1. **def stated for a general finite Coxeter geometry.** The definition introduces scalings
   $a_s=c_se_s$, coroots $a_s^\vee=2a_s/B(a_s,a_s)$, Cartan numbers $a_{st}=B(a_s,a_t^\vee)$ and,
   for a crystallographic scaling, the lattices $Q,Q^\vee,P$. It assumes no definiteness and states
   the design's caveat explicitly: no existence is asserted, and no claim is made about $H_3$,
   $H_4$ or $I_2(m)$, $m\notin\{2,3,4,6\}$; also no claim that $\Phi_c$ is a root system or that
   non-simple pairings are integral. Those are exactly the lemma's and theorem's obligations.
2. **lemma (3) uses $c_t=2c_s\cos(\pi/m(s,t))$** (the ratio $2\cos$) instead of a square-root
   prescription, so no real square-root existence is needed; on an edge this gives
   $a_{st}=-1$ and $a_{ts}=-4\cos^2(\pi/m(s,t))\in\{-1,-2,-3\}$.
3. **theorem expanded into four clauses** following the design's phrase "admit reduced
   crystallographic realizations": (1) criterion/exclusions via the finite classification list and
   the label restriction; (2) reduced realization $\Phi_c$ with $W(\Phi_c)=\rho(W)\cong W$ and the
   converse (Weyl groups of reduced crystallographic systems have labels in $\{2,3,4,6\}$, via the
   rank-two classification); (3) lattice stability restated from the lemma; (4) the dual
   length choices for a unique multi-edge (transposed Cartan data).
4. **Reducedness is proved locally**, not imported: for a proportional pair
   $\beta=\lambda\gamma$ the lemma gives $2\lambda=B(\beta,\gamma^\vee)\in\mathbb Z$ and
   $2/\lambda=B(\gamma,\beta^\vee)\in\mathbb Z$, so $\lambda\in\{2,1/2\}$; norms give
   $B(\beta,\beta)/B(\gamma,\gamma)=\lambda^2$ and equal $c_s^2/c_t^2$, which on a connected
   positive definite component lies in $\{1,2,2^{-1},3,3^{-1}\}$ (unique multi-edge), never $4$.
   This follows the design's warning that published root-system results "do not prove arbitrary
   Coxeter root positivity": finiteness, spanning, reducedness and integrality are checked
   directly for $\Phi_c$, and the published definitions/rank-two classification are used only
   where their hypotheses are verified.
5. **Definition justification edge fixed.** The inventory makes the theorem the definition's
   `justified_by` but omits the definition from the theorem's `depends_on`; the manifest adds the
   edge (theorem depends on the definition) so the justification is not circular or dangling.

## Inventory `depends_on` edges added or dropped (with reasons)

- **Added** to the lemma and theorem: `thm-cg-root-sign-and-simple-reflection-positivity` (batch 7)
  for the one-sign coefficient statement on $\Phi_c$; `thm-cg-root-length-criterion-and-faithfulness`
  (batch 7) for $\rho$ injective; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
  `def-definiteness-inertia-and-signature-data-over-the-reals`,
  `def-real-and-complex-inner-product-space` for the strict Schwarz step; the trig items
  (`thm-quarter-turn-values-and-shift-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`,
  `def-sine-and-cosine-by-power-series`, `def-pi-via-first-positive-cosine-zero`) for the exact
  cosine values and monotonicity bounds; the batch-13 items `def-cg-coxeter-diagram-components-and-finite-type`,
  `lem-cg-positive-definite-diagram-exclusions`, `thm-cg-finite-type-positive-definite-criterion`,
  `thm-cg-finite-coexeter-classification-including-h-and-dihedral` as explicit inputs of the
  criterion; `def-linear-basis` and `def-root-lattice-...` for the lattice declarations.
- **Dropped**: `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`
  from the def/lemma/theorem (it applies to reduced crystallographic root systems; before the
  theorem proves $\Phi_c$ is one, using it would be circular, and the needed statements are proved
  locally in lemma (4)); `def-weyl-group-of-a-root-system` from the def (unused in the definition
  itself); `thm-cg-finite-coxeter-classification-including-h-and-dihedral` from the def (used only
  by the lemma's ratio clause and the theorem); and the published B-page item
  `ex-simple-roots-and-fundamental-weights-of-a-n` from the A2 example (B pages are leaves; the
  fundamental weights are recomputed locally from the Kronecker pairings instead). No promised
  claim was weakened, and the design's `def`/`lem`/`thm` recipe is unchanged.

## Dependency levels (whole-run manifests; in-run suppliers only)

Computed by `tools/item-dependency-levels.mjs` (and confirmed by the label check): the definition
is level 4, the lemma level 9, the theorem level 15 and all four B items level 16. In-run
suppliers are batches 2, 4, 7 and 13; published and other out-of-run suppliers do not raise the
level. No cycle exists.

## Cross-batch dependency input

`research/frontier-42-coxeter-32-batch-21.cross-batch-dependencies.json` holds 42 reviewed rows:
41 item rows (consumers in batch 21; suppliers `def-hh-coxeter-matrix-word-group-and-length`
[batch 2], the four real-forms/canonical-reflection items [batch 4], the root-sign and
faithfulness items [batch 7], and the diagram/finiteness/classification items [batch 13]) plus the
page row `crystallographic-root-lattices-and-weyl-group-interfaces` requires
`finite-coxeter-diagrams-and-complete-classification`. Each row records the supplier's required
claim, the exact consumer use, and the Step-3 status; `refresh` accepts them and batch 21 appears
in `reviewed_batches`.

## Sources and coverage

Four independent treatments were read in full text (downloaded and inspected at the stated pages)
and stamped by `source-fetch-check --stamp`:

1. **J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups** (lecture notes), §7, printed
   pp. 66–77: Definition 7.4 and RS1–RS3, Proposition 7.8 (reducedness and multiples),
   Propositions 7.11–7.13, the rank-two table and Proposition 7.16 (products 0,1,2,3 on
   pp. 71–73), Theorem 7.18 and the closing diagram list (pp. 74–75), 7.22–7.25 (lattices and
   fundamental weights, p. 76).
2. **A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.**, Ch. II §5 (Proposition 2.48(b)(c)
   and its Schwarz proof, Proposition 2.49, abstract Cartan matrices pp. 149–162), Ch. II §6
   (Weyl group pp. 163–168), Ch. IV §7 (Propositions 4.62 and 4.64, pp. 266–268).
3. **M. W. Davis, The Geometry and Topology of Coxeter Groups**, §6.9 with Table 6.1 (pp. 103–104)
   and Appendix C.1 with Theorems C.1.2–C.1.4 (pp. 433–434).
4. **J. Michel, Lectures on Coxeter groups**, the Weyl-type statement (p. 3), §5 with Proposition
   5.14, the cosine table and Theorem 5.15 with proof (pp. 12–15).

Reading limits recorded: Milne omits standard proofs in §7 (used for scope and conventions, not
as complete proof evidence); the Davis exclusion proof (pp. 434–438) is consumed through the
batch-13 item that was built from it, and this batch read Appendix C.1 in full text; the algebraic
source report's own reading limits (Humphreys and Lusztig were cited in the inventory but not read
into this batch — no claim rests on them) are preserved as history.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` — **pass**
  (141 items across the run at this attempt, 0 missing, 0 errors; 7 items for batch 21).
- `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json`
  — **pass** (141 scoped items, 0 errors, 0 warnings).
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` — **fails only on
  other batches**: 34 `empty scaffold inventory` errors for the 17 batches still pending at this
  attempt (12, 14, 16–20, 23–32); **no error names a batch-21 item**, and the seven labels match the
  computed levels.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-21.coverage.json
  --require-destination` — **pass** (2 pages, 36 harvested results, 0 errors); one warning,
  `coverage-low-yield` for the A page (5 of 27 harvested results scaffolded). The declines are the
  classification/exclusion headings absorbed indirectly and the out-of-scope chamber,
  invariant-form, generation and hyperbolic items, each with a written reason.
- `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-21.coverage.json`
  (check mode) — **pass** (7/7 source entries fetch-verified; stamps written once with `--stamp`).
- `node tools/url-sweep.mjs --coverage research/frontier-42-coxeter-32-batch-21.coverage.json --out
  /tmp/... --recover --fail-on-dead` — **pass** (4/4 live).
- `node tools/source-backing.mjs --coverage research/frontier-42-coxeter-32-batch-21.coverage.json
  --liveness research/frontier-42-coxeter-32-url-liveness.json --reharvest-plan /tmp/...` —
  **pass** (7 authored results, all backed by an openable source).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — **pass**;
  `--require-reviewed` fails with "Cross-batch review incomplete: supply every batch input and
  review every declared edge" (other batches have no input yet).
- `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` — **pass** (64 pages owed, 64 in
  the manifests, no scope drift).
- `extcheck` is deliberately not run at this stage: the engine's Step-1 gate list defers it until
  authoring, when the manifest-scoped subjects resolve to real item carriers (the tool needs item
  files, which do not exist at scaffold time).
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` — **cannot
  run to completion for the run yet**: `frontier gate selection: Empty frontier page
  bruhat-subword-order-and-lifting` (batch 12 pending; batches 14 and 16–32 also unpopulated at
  this attempt). A local projection (temporary spec copy with every current run manifest injected,
  no repo edit) reports for this page exactly one `undeclared-prereq` finding — a dependency path
  to `hilbert-space-geometry-and-riesz-representation` through
  `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` and
  `def-real-and-complex-inner-product-space` — and the same finding is reported for the pages of
  batches 6, 9, 11 and 13; **no `resolve`, `item-cycle`, `forward-ref`, `intra-order`, `dup-id` or
  `b-leaf` error names a batch-21 item** (the earlier b-leaf finding on the A2 example was removed
  by dropping the published examples-page dependency).

## Choice and axiom base

No item uses the Axiom of Choice: every argument is finite-dimensional linear algebra, integral
arithmetic and the exact trigonometry already in the library, and a scan of all 36 supplier targets
(in-run statements and published item statements) finds no `Axiom of Choice` premise that would have to
be carried. The strategies record the choice-free status explicitly. No branch consumes any recorded or
deferred material, and no dependency path touches `deferred-set-theory-beyond-choice`.

## Findings for owner/engine reconciliation (no batch-21 escalation)

1. **Systemic `undeclared-prereq` pattern.** Most new pages of this run consume elementary
   published items (inner-product, trigonometry, linear-algebra pages) outside the transitive
   closure of their declared `requires`. The run gate derives its plan scope from the run pages, so
   this is a whole-run reconciliation item; this batch keeps the design's requires list and does
   not edit the shared plan.
2. **Pending batches** (12, 14, 16–20, 23–32 at this attempt; batch 22 landed concurrently while
   this batch was being written) block the whole-run Step-1 gates
   (`item-dependency-levels`, `step1-readiness`, `frontier-dependency-ledger --require-reviewed`,
   `--run` validate-plan). None of these blockers is caused by batch 21.
3. **Low-yield warning** on the A page: 5 of 27 harvested headings are `included`; the declines are
   classification material absorbed through batch-13 items, auxiliary classification steps, and
   deliberately out-of-scope topics, each dispositioned in the coverage file. Alpha confirms the
   declines at Step 5.
4. No new pairs, no cross-batch placement changes, no page-split needs, and no defective published
   prerequisite were found. The published items consumed at the interface level (Lie root-system
   page, Hilbert/inner-product pages) are stated in the forms used here; their own proofs remain
   their owners' obligation.

## Readiness records

Seven records, all `ready`, in prerequisite order:
`def-cg-crystallographic-scaling-coroot-and-lattice`,
`lem-cg-integer-pairings-and-allowed-dihedral-labels`,
`thm-cg-crystallographic-finite-type-and-lattice-stability`,
`ex-cg-b2-c2-dual-realizations-and-lattices`, `ex-cg-g2-from-i2-six`,
`cex-cg-i2-five-is-not-crystallographic`, `ex-cg-a2-root-and-weight-lattices`. Each names the
examined dependency ids and the evidence; `step1-decisions.mjs check` finds no batch-21 item in
the work list.
