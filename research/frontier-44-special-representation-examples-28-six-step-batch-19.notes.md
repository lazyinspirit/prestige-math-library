# Batch 19 — Rim Hooks and the Murnaghan–Nakayama Rule

Run: `frontier-44-special-representation-examples-28`. Owned pair:
`rim-hooks-and-the-murnaghan-nakayama-rule` (A, order 1563) and
`rim-hooks-and-the-murnaghan-nakayama-rule-examples` (B, order 1564),
category `special-topics-in-representation-theory`. The stable scaffold holds
**11 A items and 5 B items**, all recorded `ready`, with in-run dependency
levels 0–4 (no cycle). Construction is scaffold planning and readiness, not
authored proof acceptance; Step 3 owns the proofs and the full gate battery.

## Scope and governing texts

The owner direction `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before constructing any item: all 24 planned pairs in this category are
retained with their claims, sources and proof obligations, suppliers before
consumers, no new pairs, no publication. The pair keeps the design route in
`research/plan-symmetric-group-representations-track.md` (SYMR-4 row and
`research/symmetric-group-planning/proposed-inventory.md`, §“SYMR-4 — Rim hooks
and Murnaghan–Nakayama”): removable border strips, the hook/rim-hook bijection,
the determinantal form of a Specht character, the full-cycle hook column, James's
Lemma 21.5 binomial cancellation, the Murnaghan–Nakayama rule, the two vanishing
corollaries, the $r$-cycle virtual-character filter, and the fixed-tabloid
(Fox–Mullineux) character-table algorithm, with worked examples and the
disconnected-rim counterexample on the B companion.

`research/plan-spec.json` carries only the planned page shells for this pair
(`"items": []` for orders 1563–1564), so there is **no plan-vs-design inventory
conflict**; the design's proposed inventory is the item source, and the plan's
page objects (`requires`, companion, category, orders) are preserved verbatim in
the manifest. Conflicts and reconciliations between the design text and the
current library are recorded below.

### Design/plan reconciliation recorded for the owner

1. **Missing design supplier replaced.** The design's fixed-tabloid item listed
   `lem-centralizer-order-for-a-symmetric-group-cycle-type`, which does not exist
   anywhere on disk. The published item
   `thm-centralizer-cardinality-from-cycle-type` (same statement:
   $|C_{S_n}(\sigma)|=\prod_k k^{c_k}c_k!$, hence $z_\rho=n!/|C_\rho|$) is used
   instead; `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types` supplies
   the class/cycle-type dictionary. See the A-page readiness record for
   `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`.
2. **Fixed-tabloid statement made exact.** The gap ledger
   (`research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`,
   §SYMR-4) requires the matrices, order, diagonal and Gram identity stated
   exactly. The manifest statement now carries $A=(|S_\lambda\cap C_\rho|)$,
   $B=CA^{\mathsf T}=(|S_\nu|K_{\lambda\nu})$, $M=\operatorname{diag}(z_\rho)$,
   the Gram equation $B^{\mathsf T}B=AMA^{\mathsf T}$, uniqueness of the
   nonnegative triangular solution, $C=B(A^{\mathsf T})^{-1}$ and
   $\det C=\prod_{\lambda}\prod_i\lambda_i$, matching James Theorem 6.2/Corollary
   6.5 and Woods Lemmas 4.2.1–4.2.4/Theorem 4.2.5. The gap ledger's
   “single-treatment” caution is answered: James §6 and the independent Woods
   §4.2 write-up were both read, and the $S_5$ and $S_4$ instances were
   recomputed exactly.
3. **Dependency repairs relative to the design table.** (a)
   `def-removable-border-strip-and-height` now also declares
   `def-skew-diagram-and-semistandard-skew-tableau`, needed for skew diagrams;
   (b) `thm-determinantal-form-of-a-specht-character` declares the actual
   transport suppliers `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`
   and `lem-frobenius-characteristic-preserves-outer-products` in addition to
   the design's three; (c) `prop-r-cycle-virtual-character-filter`
   drops the design's MN-rule edge and declares the two lemmas its proof
   actually uses (cancellation and full-cycle value) plus the induction
   interface — this is a dependency clarification, not a weaker claim;
   (d) the local prerequisite
   `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` was added
   because the design's MN route (“pair outer induction with restriction via
   Frobenius reciprocity, expand each product by LR”) needs the restriction
   multiplicities as an explicit joint; it is proved from published suppliers
   and matches Macdonald §7 Example 3.
4. **Binomial-form correction against the print.** The local review report
   (`research/symmetric-group-planning-main-review/local-agent-1-ordinary-textbook.md`)
   transcribes James Lemma 21.5 as $\binom{c-x}{m-1}$; the printed text of the
   complete scan reads $\binom{m-1}{c-x}$ (OCR-ambiguous in the text layer, so
   the rendered page was re-read). The printed form is the one used in
   `lem-alternating-hook-induction-cancels-disconnected-rim-removals`; it is the
   form that makes the alternating sum reduce to
   $(-1)^{r-c}\sum_{k=0}^{m-1}(-1)^k\binom{m-1}{k}=(-1)^{r-c}[m=1]$, which is
   James's own displayed conclusion. The batch counterexample
   `cex-a-disconnected-rim-set-is-not-a-border-strip` verifies the corrected
   form on $\lambda=(2,2,1,1)$, $\nu=(1,1,1)$, $r=3$ (coefficients $1,1,0$,
   alternating sum $1-1+0=0$).
5. **Two late dependency additions before the final readiness pass.** `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` declares `thm-first-orthogonality-relation-for-irreducible-complex-characters` (needed to read the LR decomposition coefficients off the inner product), and `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` declares `def-dominance-order-on-partitions` (the statement and the triangularity of A use the dominance order). Both are published, so no dependency level changed; the nine affected readiness records were re-recorded against the new hashes, and the unified ledger was refreshed afterwards.

6. **B-page external edges.** The companion's page-level `requires` is only the A page, as the design requires; its items declare only published external items beyond that (orthogonality, character table, centralizer order, LR tableaux, hook data) and never another page's B item, matching the design's own B inventory and SCHEMA's B-leaf rule. No B item is a dependency of any other page.

7. **Advisory on the canonical page prerequisites.** The run-wide plan check
   reports `[redundant-prereq] page rim-hooks-and-the-murnaghan-nakayama-rule
   requires frobenius-characteristic-and-the-symmetric-group-character-dictionary
   directly, but already reaches it through
   outer-products-skew-specht-modules-and-littlewood-richardson`. This is an
   advisory on the shared canonical plan (not edited here); the declared
   `requires` list is preserved exactly as plan-spec has it.

## Mathematical closure and dependency verification

Every item was checked against the actual statements of its suppliers (published
items were read on disk; the four in-run A-page suppliers were built first).
Key verifications performed during construction:

- **Determinantal form.** James Theorem 19.2 (printed pp. 74–76) and Macdonald
  (7.4)–(7.5) (printed p. 114) state the same determinant; the transport through
  `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism` +
  `thm-jacobi-trudi-and-dual-jacobi-trudi-identities` +
  `ch(\chi^\lambda)=s_\lambda` + `ch`-multiplicativity was checked, including
  the degrees identity $\sum_i(\lambda_i-i+w(i))=n$ and the $[0]$-versus-$0$
  convention.
- **Full-cycle value.** The local proof route evaluates the determinant at an
  $n$-cycle; the value of an outer product of trivial characters at an $n$-cycle
  is $1$ iff one factor has degree $n$ and the rest $0$ (checked for each
  Leibniz monomial through the published induced-character interface). The only
  surviving permutation is the $\ell$-cycle of sign $(-1)^{\ell-1}=(-1)^{n-x}$
  on hooks, giving James Theorem 21.4 / the hook column.
- **Cancellation.** James Lemma 21.5 was read with its proof (forced 1's and
  free top-of-last-column spaces, printed pp. 81–82); the binomial coefficient
  $\binom{m-1}{c-x}$ and the out-of-range convention were verified, and the
  alternating sum was reduced to the full alternating row of Pascal's triangle.
  Macdonald I §3 (2) (printed p. 49) with $p_r=\sum_x(-1)^{r-x}s_{(x,1^{r-x})}$
  independently supplies the same cancellation in symmetric-function form.
- **MN rule.** James Theorem 21.1, Woods Theorem 4.3.1 and Macdonald §7 Example 5
  agree; the local proof uses exactly the restriction multiplicities (new local
  lemma), the $S_r$ full-cycle values, and the cancellation lemma. No Mackey
  formula is used. The two numerical instances on the B page
  ($\chi^{(5,4,4)}$ on $(5,4,3,1)$ and $(7,3,3)$, and the $S_4$ table) were
  independently recomputed by hand and cross-checked against Woods's independent
  Fox–Mullineux $S_4$ computation.
- **Filter proposition and the $S_8$ example.** The four partitions with
  $\lambda/(3,2)$ a removable 3-strip are $(6,2),(4,4),(3,2,2,1),(3,2,1,1,1)$
  with heights $0,1,1,2$; the checks $\Psi(1)=20-14-70+64=0$,
  $\Psi(8\text{-cycle})=0$ and $\Psi(4,4)=0-2+2+0=0$ were recomputed by MN.
- **Fixed-tabloid algorithm.** $S_5$ instance recomputed in exact rational
  arithmetic: $A$ elementwise from Young-subgroup cycle-type counts,
  $M=\operatorname{diag}(120/|C_\rho|)$, $B=CA^{\mathsf T}$ with diagonal
  $(120,24,12,6,4,2,1)$, $B^{\mathsf T}B=AMA^{\mathsf T}$ verified,
  $C=B(A^{\mathsf T})^{-1}$ equals the standard $S_5$ table in the declared
  reversed column order, and $\det C=2880=5\cdot4\cdot6\cdot3\cdot4\cdot2\cdot1$
  (product of all parts of all partitions of $5$), matching James Example
  6.3/Corollary 6.5 and the OCR-recovered printed matrices.
- **No axiom use.** Every item is finite character theory, LR combinatorics, or
  finite combinatorics; no item uses the Axiom of Choice and no item reaches
  `deferred-set-theory-beyond-choice`. The manifest statements say so explicitly
  where the design did.

Manifest dependency labels were computed with the run's own tool
(`dependencyLevels`): A levels $0,1,0,1,1,0,2,3,4,2,0$; B levels
$4,3,4,3,1$. `node tools/item-dependency-levels.mjs check --run
frontier-44-special-representation-examples-28` currently exits non-zero only
on **other** batches' empty page shells (`empty scaffold inventory`), which are
still being scaffolded concurrently; a direct run of the tool's
`dependencyLevels` on this batch's two pages reports `errors: []`.

## Sources and fetch evidence

Three independent complete treatments back the pair; two are textbooks, so the
two-treatment and book requirements are met on both pages:

1. G. D. James, *The Representation Theory of the Symmetric Groups*, Lecture
   Notes in Mathematics 682, Springer 1978; complete 161-page author-hosted scan,
   SHA-256 `e339ca5f…2babc`. Locators: §6 pp. 22–26; §18 pp. 73–74; §19
   pp. 74–76; §21 pp. 77–86 (Theorems 21.1, 21.4, 21.7, Lemma 21.5, Corollary
   21.6, Examples 21.2, 21.8).
   URL: https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf
2. I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed.,
   Oxford 1995; complete 486-page author-hosted scan, SHA-256 `64e242b8…74ea7`.
   Locators: Chapter I §7 pp. 112–118, (7.1)–(7.6) and Examples 3, 5, 7;
   Chapter I §3 pp. 48–49 for the border-strip expansion (2).
   URL: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
3. William Woods, *Representation theory of the symmetric groups* (Cambridge
   Part III essay, 33 pp.); complete author-hosted PDF, SHA-256
   `ca20092c…84645`. Locators: §4.2 pp. 19–24 (Fox–Mullineux A, B, Lemmas
   4.2.1–4.2.4, Theorem 4.2.5, worked $S_4$); §4.3 pp. 24–29 (hooks, skew
   hooks, Theorem 4.3.1 with the proof omitted and cited to James).
   URL: https://billywoods.net/part_iii_essay.pdf

`node tools/source-fetch-check.mjs --coverage research/frontier-44-special-representation-examples-28-batch-19.coverage.json --stamp`
returned `6/6 source(s) fetch-verified (6 newly stamped)` (three sources on each
of the two page entries; the gate’s pattern is per source entry). The URLs were
downloaded and inspected in full, and the James/Macdonald SHA-256 values match
the values recorded in `research/symmetric-group-planning/source-manifest.json`.
The coverage file disposes **41 harvested source results** (0 errors, 0 warnings
under `--require-destination`); declined rows name specific reasons and the
deferred block-theory rows point to the in-plan page
`cores-quotients-and-blocks-of-symmetric-groups`.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-19.cross-batch-dependencies.json`
is the **empty array**. Every item supplier outside batch 19 is a published
item, and the page prerequisites of both pages are the published pages
`the-hook-length-formula-and-rsk-correspondence`,
`frobenius-characteristic-and-the-symmetric-group-character-dictionary` and
`outer-products-skew-specht-modules-and-littlewood-richardson`; none lives in
another batch of this run, so no row is owed by this consumer batch. The
refreshed unified ledger (`…-cross-batch-dependencies.json`) records one
**incoming** page edge, owned by batch 20:
`type-a-hecke-specht-modules-and-cellular-bases` requires this A page. Batch 20
owns the review row for that consumer edge (it may reference this page's items
in its own scaffold); nothing on this pair anticipates its items. The current
ledger still lists batches 3, 5–18, 20–25, 27–28 as unreviewed because their
manifests are still being scaffolded; that is run-state, not a finding of this
batch.

## Checks run (exact results)

| check | command | result |
|---|---|---|
| coverage | `node tools/coverage-checklist.mjs <batch coverage> --require-destination` | 2 pages, 41 harvested results, **0 errors**, 0 warnings |
| manifest deps (whole run, snapshot while other batches were still filling) | `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 128 items at check time, 0 normalized, **0 errors** |
| manifest policy (whole run, same snapshot) | `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 128 scoped items at check time, **0 errors**, 0 warnings |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --pages-file <all 56 manifest pages> --run …` | exit 0; no item-level cycles, forward references, B-page deps or unresolved ids; one `redundant-prereq` advisory on this page's canonical `requires` (recorded above) |
| scope | `node tools/manifest-integrity.mjs --run …` | 56 pages owed, 56 in manifests, **no scope drift** |
| source fetch | `node tools/source-fetch-check.mjs --coverage <batch coverage> --stamp`, then check mode | **6/6 fetch-verified**, 0 drops |
| url liveness | `node tools/url-sweep.mjs --coverage <batch coverage> --out /tmp/… --recover --fail-on-dead` | 3/3 live, 0 failed, 3 citation decisions |
| source backing | `node tools/source-backing.mjs --coverage <batch coverage> --liveness /tmp/… --reharvest-plan /tmp/…` | 16 authored results, every one backed by an openable source |
| drift | `node tools/drift-review-check.mjs --run …` | 28 pages reviewed, 2 spec edits applied, no blocked edges |
| readiness | `node tools/step1-decisions.mjs check --run …` | all 16 batch-19 records closed; run not yet closed because other batches still have open/empty shell work (89 work rows across the run at check time, none for batch 19) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run …` | exits non-zero only on other batches' `empty scaffold inventory`; direct `dependencyLevels` over this batch reports no errors |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed; batch 19 input accepted (`[]`), no orphaned batch-19 review |
| extcheck / depcheck | `node tools/extcheck.mjs --items-file <16 ids>` / `node tools/depcheck.mjs --items-file <16 ids>` | both FAIL with `focus-item-unknown` for all 16 ids, because Step-1 item files are deliberately absent; the engine runs these after authoring (Step 3). Not a batch finding. |

## Published defects and open obligations

No defect was confirmed in any consumed published item: all cited statements
were read at the interfaces used (`def-skew-diagram…`, `def-partition…`,
`def-removable-and-addable-nodes…`, `def-hook-arm-leg-and-hook-length`,
`thm-hook-length-formula`, the Frobenius-dictionary and outer-LR items, the
young-subgroup/Young-rule items, the orthogonality/centralizer items and the
orbital-stabilizer items). No published carrier was edited. No `AC` branch and
no Recorded result is consumed. The only run-level advisories are the two
recorded above (canonical-plan `redundant-prereq` for this page; concurrent
batches' unfinished scaffolds). Owner/operator reconciliation, the Step-3
authoring review and the full engine gate still follow; a readiness record is
not independent mathematical approval.
