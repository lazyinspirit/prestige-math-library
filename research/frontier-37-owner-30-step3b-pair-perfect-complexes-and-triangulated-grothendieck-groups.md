# Step 3b authoring report — perfect-complexes-and-triangulated-grothendieck-groups

- Run: `frontier-37-owner-30`, batch 18. A page
  `perfect-complexes-and-triangulated-grothendieck-groups` (9 items) and B page
  `perfect-complexes-and-triangulated-grothendieck-groups-examples` (3 items).
  Both pages were written during this dispatch with `status: draft`; the A page
  lists the nine A items in manifest order and the B page the three examples in
  manifest order.
- Dispatch order followed: levels 0–4, ties by page order and item ID. Every
  direct supplier is either a published item outside this run or an item of
  this pair authored earlier in the dispatch order; the cross-batch dependency
  input stays `[]` (re-derived below). No direct in-run prerequisite pair.
- Completed IDs: `def-perfect-complex-over-a-ring`,
  `def-triangulated-grothendieck-group`,
  `lem-perfect-complexes-form-a-triangulated-subcategory`,
  `lem-triangulated-k-zero-shifts-and-exact-functors`,
  `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant`,
  `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero`,
  `thm-perfect-complex-k-zero-agrees-with-projective-k-zero`,
  `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories`,
  `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions`,
  `ex-homological-and-internal-shifts-on-k-zero`,
  `ex-dual-numbers-simple-is-not-perfect`,
  `ex-euler-class-of-a-two-term-cone`.

## Progress checkpoints

### Level 0

- `def-perfect-complex-over-a-ring` — authored (choice-free; `[1]`/`{1}`
  separation and the "bounded is not perfect" clause kept). Precheck n/a by
  kind; rendercheck and content-policy clean.
- `def-triangulated-grothendieck-group` — authored. Local scaffold repair: the
  scaffold sentence attributing applicability to $D_{\mathrm{perf}}(A)$ "by
  the preceding closure lemma" was replaced by an explicit statement that
  $D_{\mathrm{perf}}(A)$ is triangulated and essentially small by the closure
  lemma proved on this page (a level-1 item; the definition precedes it, so it
  must not cite it as an established preceding result). Precheck n/a by kind.

### Level 1

- `lem-perfect-complexes-form-a-triangulated-subcategory` — authored
  (choice-free; bounded finite-projective K-projectivity by finitely many
  descending projective lifts, so the DC-qualified bounded-above theorem is not
  used). Precheck PASS.
- `lem-triangulated-k-zero-shifts-and-exact-functors` — authored (choice-free;
  $[0]=0$, $[X[n]]=(-1)^n[X]$ via signed TR2 rotation, exact-functor maps via
  the free-group/quotient universal property). Precheck PASS.

### Level 2

- `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant` —
  authored (choice-free; acyclic bounded finite-projective extraction by
  splitting the top differential, cone additivity, no-roof representative
  independence, TR3 + triangulated five lemma for triangle additivity).
  Precheck PASS (layer renumbering repaired at authoring).
- `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero` — authored
  (choice-free; degree-zero inclusion kills $G_0$ relations, the finite
  long-exact-sequence cancellation gives additivity of the alternating
  cohomology class, canonical-truncation induction gives the inverse).
  Precheck PASS. Content-policy repair: the applied notation `\iota(A)` in
  step 1.1 was replaced by the direct assignment $A\mapsto S^0(A)$ /
  $[A]\mapsto[S^0(A)]$, clearing `notation-iota-applied`.
- `ex-dual-numbers-simple-is-not-perfect` (B) — authored (periodic free
  resolution with kernel = image = $(\varepsilon)$, $\operatorname{Tor}_i\cong
  k$ for all $i\ge0$, contradiction with bounded support; AC stated only for the
  published balanced-Tor/derived-Tor comparison, resolution and tensor homology
  choice-free). Precheck PASS.

### Level 3

- `thm-perfect-complex-k-zero-agrees-with-projective-k-zero` — authored
  (choice-free; split biproduct triangles for degree-zero inclusion and
  brutal-truncation triangles telescoping the Euler inverse, graded clause in
  $\operatorname{GrMod}_0(A)$; no global-dimension hypothesis). Precheck PASS.

### Level 4

- `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories`
  — authored (left Noetherian + finite left global dimension; finite free
  covers with finitely generated syzygies, syzygy theorem at $n=\max(1,d)$,
  published bounded-above replacement and K-projectivity under the declared
  AC to DC use, full faithfulness via the no-roof proposition on both sides,
  essential surjectivity, Cartan composite). Precheck PASS.
- `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions` —
  authored (finite-dimensional restriction of the supplied tensor
  equivalences, descent to graded bounded derived categories, Laurent
  linearity from the degree-zero balanced shift isomorphism, inverse matrices
  in the published shift-orbit bases, no coherence inferred). Precheck PASS.
- `ex-euler-class-of-a-two-term-cone` (B) — authored (cochain reindexing
  $\operatorname{Cone}(f)^{-1}=P$, $\operatorname{Cone}(f)^0=Q$, triangle and
  Euler computations $[Q]-[P]$, and the noncommutative-safe right
  multiplication $x\mapsto xa$ witness with zero Euler class). Precheck PASS.
- `ex-homological-and-internal-shifts-on-k-zero` (B) — authored last. The
  scaffold's claim is made precise through the graded comparison: $P$ finite
  graded projective over the finite-dimensional graded algebra $A$ is finite
  dimensional, $P\{2\}$ is again finite graded projective, the shift-sign
  lemma applied to the object $P\{2\}[0]$ gives
  $[P[1]\{2\}]=-[P\{2\}[0]]$, the graded comparison identifies
  $[P\{2\}[0]]=\iota_\ast(v^2[P])$, and the graded Cartan map carries
  $-v^2[P]$ to $G_0^{\mathrm{gr}}(A)$. Choice-free, no global-dimension
  hypothesis. Precheck PASS.

## Local scaffold repairs and dependency changes

1. **Closure lemma (Step-1 local addition).** Recorded in the Step-3a scope
   review observation 1; consumed in-run by the Euler lemma, both $K_0$
   comparison theorems, and the B examples. Nothing to add here beyond the
   Step-1 note.
2. **Level-0 forward-citation repair** in `def-triangulated-grothendieck-group`
   (above): a level-0 definition must not use the level-1 closure lemma as its
   justification, and does not; the definition now states what is needed and
   the lemma later proves it.
3. **Canonical step numbering**: precheck's layer renumbering was adopted where
   the authored step labels did not match the citation-depth layers
   (`lem-euler-…`, `thm-abelian-…`, `thm-graded-…`); every proof now passes in
   its canonical form with the terminal proof marker.
4. **Dependency lists extended at authoring.** The authored items list the
   exact suppliers actually used; ten items therefore have longer `deps` than
   their Step-1 scaffold rows (most visibly
   `ex-homological-and-internal-shifts-on-k-zero`, which adds
   `def-perfect-complex-over-a-ring`,
   `lem-perfect-complexes-form-a-triangulated-subcategory`,
   `def-triangulated-grothendieck-group`,
   `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`,
   and `def-finitely-generated-graded-projective-module`). The batch manifest
   keeps its Step-1 scaffold rows (the run-wide convention: 190 items across
   this run already show planned-vs-actual dependency drift); the item files
   are authoritative, and the plan-drift reconciliation belongs to Step 4 and
   the later coverage stages. No statement, title, kind or page `requires`
   field was changed, so the recorded pair scope decision stays current.
5. **Notation repair** `\iota(A)` replaced by the direct assignment in
   `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero` (above).

## Suppliers, escalated items and cross-batch input

- **No unfinished supplier.** Every direct `deps` target of the twelve items
  resolves to a file that is either published or an item of this pair authored
  earlier in the dispatch order; no item was left in escalation for an
  unauthored supplier, and no consumer proof step cites a draft sibling
  outside this pair. (The in-pair suppliers used are
  `def-perfect-complex-over-a-ring`,
  `lem-perfect-complexes-form-a-triangulated-subcategory`,
  `def-triangulated-grothendieck-group`,
  `lem-triangulated-k-zero-shifts-and-exact-functors`,
  `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant`,
  `thm-perfect-complex-k-zero-agrees-with-projective-k-zero`, and
  `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero`.)
- **Cross-batch input.** Re-deriving the home batch of every dependency from
  all `frontier-37-owner-30-batch-*.pages.json` manifests shows no dependency
  of this pair on an item homed in another batch of this run, so
  `research/frontier-37-owner-30-batch-18.cross-batch-dependencies.json`
  correctly remains `[]`; no `frontier-dependency-ledger` row changes for this
  batch, and no owner escalation is required on that ground.

## Axiom of choice: declared uses and choice-free remainder

- `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories`
  states AC and depends on `def-axiom-of-choice` and
  `thm-choice-implies-dependent-implies-countable-choice`. Exact use: the
  published DC-qualified suppliers
  `lem-bounded-above-complexes-admit-projective-replacements` and
  `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`
  invoked in steps 2.1 and 3.1; the finite left-Noetherian and syzygy argument
  adds no stronger choice use.
- `ex-dual-numbers-simple-is-not-perfect` states AC and depends on the same
  two items. Exact use: passing from the specified-resolution homology to the
  published balanced Tor bifunctor and to derived-tensor cohomology
  (`def-balanced-tor-bifunctor`,
  `prop-homology-of-the-derived-tensor-product-is-tor`) via AC implying DC in
  steps 2.1 and 3.1. The periodic resolution and its tensor homology
  (steps 1.1 and 2.1) are choice-free.
- The other ten items are choice-free: the closure lemma uses only finitely
  many projective lifts; the Euler lemma only finite splittings; the abelian
  comparison only canonical truncations; the perfect/projective comparison and
  both definitions only free-group presentations; the graded tensor theorem
  only the supplied inverse bimodule data; and both remaining examples only
  the given maps and the supplied comparison isomorphism. No Recorded result
  is consumed and no incompatible-axiom branch is merged.

## Checks actually run

| Check (exact command form) | Observed result |
|---|---|
| `tools/precheck.mts` on all 12 item files (one invocation) | 10 proof-bearing items PASS, 0 failing; 2 definitions have no phase body (precheck n/a by kind) |
| `tools/rendercheck.mjs` on the 12 items and 2 pages | OK — 14 files; no wikilink in math, no unbalanced delimiters, every math span parses under KaTeX, every frontmatter parses |
| `tools/content-policy.mjs research/frontier-37-owner-30-batch-18.pages.json` | 12 scoped items, 0 errors, 0 warnings (after the notation repair) |
| `tools/proof-contract.mjs research/frontier-37-owner-30-batch-18.proof-contracts.json --strict` | 12/12 items checked, 0 errors, 0 warnings |
| `tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0; 808 items across 60 pages, maximum level 31; no label mismatch or cycle |
| `tools/validate-plan.mjs research/plan-spec.json` | exit 0; only pre-existing repo-wide `redundant-prereq` warnings and the note that 367 planned pages carry no item list yet (this pair's plan rows are spliced at Step 4) |
| `tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-18.coverage.json --require-destination` | exit 0; 1 page, 30 harvested results, 0 errors, 1 `coverage-low-yield` warning (11/30 scaffolded) — disposition reasoned in the Step-3a scope review |
| `tools/source-fetch-check.mjs --coverage research/frontier-37-owner-30-batch-18.coverage.json` | 5/5 sources fetch-verified, 0 documented drops |
| `tools/manifest-deps.mjs research/frontier-37-owner-30-batch-18.pages.json` | 12 items, 0 errors |
| `tools/depcheck.mjs` (repo-wide) | FAIL overall from other in-flight pairs' not-yet-written suppliers; zero findings name any of this pair's 12 items (filtered) |
| `tools/audit-manifest.mjs research/frontier-37-owner-30-batch-18.pages.json` | 142 relationships over 12 items, 0 defects |
| `tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | this pair has no work entry (scope decision current) |
| `tools/step3-decisions.mjs record-item` once per item, accept, confidence 1, examined dependency IDs = the item's `deps` | 12 receipts written (`…-step3b-review-<id>.json`); the final-phase check lists none of the 12 as work |

## Published concerns

- No confirmed defect in a published item used by this pair. The published
  suppliers were checked at statement and interface level (hypotheses, side
  conventions, cochain signs, direction of the maps), not independently
  audited; that is the Steps 5–8 obligation.
- Two seams are recorded for the owner without claiming a defect. (1) The
  published frontier-35 `def-triangulated-k-zero-of-khovanov-seidel-projectives`
  is the $A_m$-specific instance of the general
  `def-triangulated-grothendieck-group` minted here; per the Step-3a review,
  the reconciliation is a note, not an edit of published content. (2) The
  graded conventions used here (internal shift $\{1\}$, $v[M]=[M\{1\}]$,
  cochain shift $[1]$) agree with the published graded Grothendieck-group
  definition; no contradiction or duplicate-claim conflict was found.
- Confidence: high for these two seam observations as consistency statements;
  neither is reported as a defect, and no repair is proposed.

## Step-3a obligations carried

1. The closure lemma is a Step-1 local addition relative to the HA-21
   enrichment inventory; it is design-required and consumed in-run (item 1
   above).
2. AC is confined to the two items named above; the finite bounded arguments
   elsewhere stay choice-free, as scaffolded.
3. BG-15 interface (report only, no published edit): the planned consumer
   `categorical-braid-actions-and-decategorification` will read the general
   `def-triangulated-grothendieck-group` for an arbitrary essentially small
   triangulated category and
   `thm-perfect-complex-k-zero-agrees-with-projective-k-zero` for the
   projective comparison; the $A_m$-specific frontier-35 item remains the
   homotopy-category presentation, and the general items specialise to it
   because $K^b(\operatorname{proj}^{gr}A_m)\to
   D_{\mathrm{perf}}^{\mathrm{gr}}(A_m)$ is an equivalence with the same
   no-roof representation. The finite-dimensional hypotheses live only on
   `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions`,
   which BG-15 does not consume.
4. The B page has no own coverage record; the scope review accepted that, and
   the three examples are checkable from the A items plus the same five
   stamped sources.

## Open obligations for the next stage

- **Step 4 splice**: the shared `research/plan-spec.json` still lists this
  pair's pages with empty item lists; splicing is Step 4's mechanical step, and
  only this pair's two rows are affected. The planned-vs-actual dependency
  drift noted above is deliberate and should be recorded, not silently
  rewritten into the scaffold rows.
- **Independent audit**: Steps 5–8 own thorough mathematical audit, source
  fidelity review and defect repair; this dispatch's audit was an author-level
  readiness check.
- **Serial reconciler**: no entry needs adding to
  `research/published-consumer-supplier-ledger.md` from this dispatch (no
  confirmed defect); the two seams above are informational.
- **Owner escalations**: none raised. All twelve items were authored, checked
  and recorded as `accept`; no item was left escalated.
