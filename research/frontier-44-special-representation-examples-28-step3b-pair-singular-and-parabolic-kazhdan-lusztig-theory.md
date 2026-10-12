# Step 3b — scaffold audit and authoring: `singular-and-parabolic-kazhdan-lusztig-theory`

Run `frontier-44-special-representation-examples-28`, batch 15 (orders
1786/1787), role `alpha-high`, label
`step3b-pair-singular-and-parabolic-kazhdan-lusztig-theory-cad9745a28a5cb28`.
A page `singular-and-parabolic-kazhdan-lusztig-theory` (14 items, draft),
B page `singular-and-parabolic-kazhdan-lusztig-theory-examples` (4 items,
draft), category `special-topics-in-representation-theory`. Only this pair is
owned; sibling pairs in shared carriers are preserved. Report opened at entry
2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A-page items (authored here, in the dispatch's dependency order):

| # | id | kind | scaffold level |
|---|---|---|---|
| 0 | `def-parabolic-hecke-module-and-antispherical-standard-basis` | definition | 0 |
| 0 | `def-singular-integral-category-o-block-and-stabilizer` | definition | 0 |
| 0 | `def-standard-parabolic-and-levi-subalgebras-from-simple-roots` | definition | 0 |
| 1 | `def-parabolic-category-o-for-a-standard-parabolic` | definition | 1 |
| 1 | `lem-facet-tensor-weight-exclusion` | lemma | 1 |
| 1 | `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars` | lemma | 1 |
| 2 | `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis` | theorem | 2 |
| 2 | `thm-parabolic-category-o-is-a-highest-weight-category` | theorem | 2 |
| 2 | `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` | theorem | 2 |
| 3 | `def-parabolic-kazhdan-lusztig-basis-and-polynomials` | definition | 3 |
| 4 | `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones` | theorem | 4 |
| 17 | `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` | theorem | 17 |
| 19 | `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` | theorem | 19 |
| 20 | `thm-parabolic-kazhdan-lusztig-character-formula` | theorem | 20 |

B-page items (authored here):

| # | id | kind | scaffold level |
|---|---|---|---|
| 5 | `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two` | example | 5 |
| 5 | `cex-spherical-and-antispherical-normalizations-give-different-polynomials` | counterexample | 5 |
| 18 | `ex-translation-to-a-singular-wall-in-type-a-two` | example | 18 |
| 21 | `ex-a-small-parabolic-category-o-character-formula` | example | 21 |

Deliverables: 18 item files, `library/special-topics-in-representation-theory/singular-and-parabolic-kazhdan-lusztig-theory.md`,
`library/special-topics-in-representation-theory/singular-and-parabolic-kazhdan-lusztig-theory-examples.md`,
`research/frontier-44-special-representation-examples-28-batch-15.proof-contracts.json`,
18 current item decisions, and this report.

Open obligations at entry:

1. All 18 item files and both page files are absent; the scaffold lives in
   `research/frontier-44-special-representation-examples-28-batch-15.pages.json`
   (full statements, strategies, sources) with the owner's complete local
   proof route in
   `research/frontier-44-special-representation-examples-28-owner-category-o-batch15-local-proof.md`
   (8 sections; read in full) and the binding direction clause
   "Owner genuine parabolic and singular interface correction — 2026-10-08" of
   `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`.
2. **Unfinished in-run suppliers (flagged; consumers authored with the
   obligation stated).**
   - `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`
     consumes batch-14
     `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
     and `def-regular-integral-dot-orbit-labelling-convention` (consuming proof
     steps: the single-term reduction from the regular ordinary KL theorem and
     the block-label dictionary; both to be recorded exactly in the checkpoint
     log once the proof is written); neither supplier file exists yet.
   - `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`
     additionally consumes batch-14
     `prop-translation-identifies-regular-integral-blocks`.
   Both items are authored here and their Step-3 item decisions are left
   `escalate` (`defects: ["dependency"]`) until the suppliers are authored and
   the actual proof uses reconciled.
3. In-run prerequisite pair to inspect: `the-kazhdan-lusztig-character-and-multiplicity-theorem`
   (batch 14). Its manifest is readable; its items are scaffold-only at entry.
   Its corrected interfaces (regular-block transport; weighted inverse-KL
   character formula; `q'_{x,w}` support `x <= w`) are binding for this pair
   and are respected by the singular/parabolic statements.
4. Shared files: `research/frontier-44-special-representation-examples-28-batch-15.pages.json`
   and `.coverage.json` are shared with no sibling pair (batch 15 contains only
   this pair), but `research/plan-spec.json`, the frontier dependency ledger and
   the run's merged contracts are shared and must not be disturbed.
5. The scaffold's two historical Step-1 escalations (rows 13/14) are owner-ready
   history after the owner's supplier-first local repair; the current Step-3a
   scope review is `sufficient` (hash
   `f6179825853b6692f94297a77c2dbcbe74d4f6ff82e928aea8d64e821d229e8a`).
6. `dependency_level` labels must be re-verified with
   `tools/item-dependency-levels.mjs` after authoring (scaffold labels: Hecke
   chain 0,1,2,3,4; singular block chain 0,2,17; parabolic chain 0,1,2,19,20;
   B items 5,5,18,21).

## Checkpoint log

Format: item — status — checks run — open gaps. Items are listed in the dispatch's
authoring order; the log is appended as work proceeds (2026-10-10).

1. `def-parabolic-hecke-module-and-antispherical-standard-basis` — authored
   (`items/…md`, `## Definition` + remarks, level 0) — rendercheck OK. No open
   gap. Kept the scaffold's exact normalization, both characters, the modules
   and the coset families; no proof phase (definition).
2. `def-singular-integral-category-o-block-and-stabilizer` — authored
   (definition + remarks, level 0) — rendercheck OK. Records the dot
   stabilizer $W_J$, the block $\mathcal O_\mu$, the $W^J$ normalization, BGG
   reciprocity and the unitriangular matrix, all quoted from the published
   block theory; AC declared.
3. `def-standard-parabolic-and-levi-subalgebras-from-simple-roots` — authored
   (definition with structural assertions (1)–(5) and justifying remarks;
   level 0) — rendercheck OK. The remarks carry the Cartan splitting, the
   intrinsic-Killing-form semisimplicity of $\mathfrak s_J$, the reductive
   $\mathfrak l_J$, the nilradical/radical equalities and the positive
   $\zeta$-grading/PBW finiteness.
4. `lem-facet-tensor-weight-exclusion` — authored with a 5-step proof
   (level 1) — precheck PASS (`direct`), rendercheck OK. Adapted from the
   published single-wall exclusion with $W_J$ replacing $\{1,s\}$.
5. `def-parabolic-category-o-for-a-standard-parabolic` — authored (definition
   with claims (4)–(7) and justifying remarks, level 1) — rendercheck OK.
   Remarks carry the PBW description of $M_{\mathfrak p}(\lambda)$,
   $\mathfrak p$-local finiteness, largest-quotient argument, the
   local-nilpotence criterion and Serre closure, the simple classification
   and the duality/costandard analysis.
6. `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis` —
   authored with a 5-step proof (level 2) — precheck PASS (`direct`),
   rendercheck OK (checked in the batch run). The proof is the ordinary
   triangular construction over the finite lower Bruhat ideal in ${}^JW$ with
   the induced bar-duality matrix $R$, $\bar RR=I$.
7. `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars`
   — authored with a 4-step proof (level 1) — precheck PASS after adopting the
   checker's canonical layer labels, rendercheck OK. The proof contains the
   free left $H_J$-basis, the two minimal right-action branches, the type-$A$
   parabolic property and the subword expansion of bar with top coefficient
   one.
8. `thm-parabolic-category-o-is-a-highest-weight-category` — authored with an
   8-step proof (level 2) — precheck PASS after canonical relabelling,
   rendercheck OK. Implements the owner's local route: minimal-kernel
   reflector, parabolic projective covers, the bounded representable
   projectives $B_N(E)/Q(E)$, generalized-standard flags, inner
   Hom/$\operatorname{Ext}^1$ vanishing and BGG reciprocity.
9. `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` —
   authored with a 6-step proof (level 2) — precheck PASS after canonical
   relabelling, rendercheck OK. **Scaffold defect found and repaired:** the
   scaffold's "equivalently $TL(w\cdot\lambda)\neq0$ iff
   $F_{w\cdot\mu}\subseteq F^+_{w\cdot\lambda}$" clause is false — the
   containment is automatic for dot-antidominant $\lambda,\mu$ (sign pattern
   alone) and already fails the smallest example $\mathfrak{sl}_2$,
   $\lambda=-2$, $\mu=-1$, $w=s$ ($TL(0)=0$ while
   $F_\mu=\{-1\}\subseteq F^+_0=[-1,\infty)$). The authored statement keeps
   the correct primary dichotomy $w\in W^J$ and records the correction in a
   remark; the defect is reported in the item decision (`repaired`,
   `defects: ["statement"]`). One dependency addition:
   `lem-weight-norm-bound-for-finite-dimensional-simple-modules` (published,
   does not change the level), recorded in both the item and the batch-15
   manifest.

10. `def-parabolic-kazhdan-lusztig-basis-and-polynomials` — authored
    (definition with the two bases $C_x$, $D_x$, the shifted spherical and
    antispherical polynomials in $q=v^{-2}$, the Deodhar normalization
    dictionary and the spherical reduction $m_{y,x}=p_{w_0^Jy,w_0^Jx}$; level
    3; the parity/degree well-definedness is recorded in `justified_by` with
    the alternating-sum theorem, not read back into the existence theorem) —
    rendercheck OK, contracts strict OK.
11. `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones`
    — authored with a 6-step proof (level 4): the induced-image comparison for
    the antispherical sum, the $C_J$ eigen-element and its bar-fixedness, the
    degree bounds, and the ordinary-coefficient comparison giving the
    spherical reduction — precheck PASS, rendercheck OK, proof-layout 0
    defects. One repair: a duplicated supplier link in the ordinary-coefficient
    fact removed and `lem-the-hecke-bar-involution-is-well-defined` added to
    deps (decision `repaired`, `defects: ["dependency","citation"]`).
12. `cex-spherical-and-antispherical-normalizations-give-different-polynomials`
    — authored (level 5): the witness
    $n_{e,s_2s_1}=p_{e,s_2s_1}-v\,p_{s_1,s_2s_1}=v^2-v^2=0$ against
    $m_{e,s_2s_1}=p_{s_1,w_0}=v^2$, hence $0\neq1$ at $v=1$ — precheck PASS,
    rendercheck OK. The first-frozen scaffold text had a wrong index and an
    impossible coefficient; the corrected two-term computation is recorded in
    the item; decision `accept`.
13. `ex-parabolic-kl-polynomials-for-s-three-modulo-s-two` — authored
    (level 5): the complete antispherical and spherical tables of $S_3$
    modulo $S_2$, with the matrices
    $[[1,1,0],[0,1,1],[0,0,1]]$ and $[[1,1,1],[0,1,1],[0,0,1]]$ at $v=1$ —
    precheck PASS, rendercheck OK; decision `accept`.
14. `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` —
    authored with a 5-step proof (level 17): composition multiplicities on the
    wall via exact translation, the dominant-base reduction
    $P_{yw_0,\,ww_0}(1)$, the spherical dictionary
    $m_{k(y),k(w)}=p_{yw_0,ww_0}$, and the projective version by BGG.
    **Escalated** (`defects: ["dependency"]`): the batch-14 suppliers
    `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
    and `def-regular-integral-dot-orbit-labelling-convention` are used through
    fact [F3] in proof step 1.2. The remark was corrected on 2026-10-10 to
    name step 1.2 (it had said step 2.1) and to record that both suppliers are
    now written in `items/` with matching statements; only the owner can
    refresh the escalation receipt. precheck PASS, rendercheck OK.
15. `ex-translation-to-a-singular-wall-in-type-a-two` — authored (level 18):
    the $\mathfrak{sl}_2$ translation dipole, the big projective
    $TP(-2)=2P(-1)$, and the $\mathfrak{sl}_3$ singular matrices,
    $A=[[1,0,0],[1,1,0],[1,1,1]]$ with inverse
    $[[1,0,0],[-1,1,0],[0,-1,1]]$, plus the killed nonminimal labels —
    precheck PASS, rendercheck OK; receipt re-recorded `accept` with a fresh
    input hash once the batch-14 suppliers landed (item text byte-identical).
16. `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` —
    authored with a 6-step proof (level 19): the finite-Levi character
    identity, the $\mathfrak p_J$-dominant labels, the coefficient comparison
    $n_{y,x}(1)=\sum_{u\in W_J}(-1)^{\ell(u)}P_{uy,x}(1)$, the projective
    version, and the native longest-left reindexing. **Escalated**
    (`defects: ["dependency"]`): the batch-14 suppliers
    `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
    and `def-regular-integral-dot-orbit-labelling-convention` are used through
    fact [F4] in proof steps 1.2, 2.1 and 3.2, and
    `prop-translation-identifies-regular-integral-blocks` through fact [F5],
    cited in step 2.1 (the citation was added on 2026-10-10 so the declared
    supplier is visibly used, matching the scaffold's regular-block transport
    sentence); all three supplier files now exist and match. Only the owner
    can refresh the escalation receipt. precheck PASS, rendercheck OK.
17. `thm-parabolic-kazhdan-lusztig-character-formula` — authored with a
    4-step proof (level 20): the matrix equation $M=NL$, unitriangular
    inversion, the character formula and the longest-left reindexing. One
    repair on 2026-10-10: proof step 2.1 now reads $N^{-1}$ with rows indexed
    by simples and columns by generalized standards (the earlier text wrote
    $(N^{-1})_{y,x}$ and then silently switched to $(N^{-1})_{x,y}$); decision
    re-recorded `repaired`, `defects: ["proof"]`. precheck PASS, rendercheck
    OK, contracts strict OK.
18. `ex-a-small-parabolic-category-o-character-formula` — authored (level
    21): both inversions checked entrywise in $\mathfrak{sl}_3$ and the
    singular-versus-parabolic comparison at the $(1,3)$ position
    ($+1$ versus $0$) — precheck PASS, rendercheck OK; receipt re-recorded
    `accept` with a fresh input hash after the supplier files landed (item
    text byte-identical).

## Supplier reconciliation and the two open escalations

Both open rows are the two multiplicity theorems on the A page; each was
escalated while its batch-14 suppliers were scaffold-only, and each remains
escalated because `tools/step3-decisions.mjs` refuses a non-owner refresh of
an escalation receipt ("The owner must resolve this item decision"). The
authoring-side reconciliation is complete as of 2026-10-10:

- Consumer `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`
  uses `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`
  and `def-regular-integral-dot-orbit-labelling-convention` in proof step 1.2
  (fact [F3]): the single-term reduction
  $[M(yw_0\cdot\lambda_{\mathrm{dom}}):L(ww_0\cdot\lambda_{\mathrm{dom}})]=P_{yw_0,ww_0}(1)$
  in the regular integral block, using only the quoted regular-block data,
  Bruhat reversal and $p=v^{\ell(w)-\ell(y)}P(v^{-2})$ normalization of the
  convention definition (not its Soergel dictionary).
- Consumer `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`
  uses the same two suppliers in proof steps 1.2, 2.1 and 3.2 (fact [F4]) and
  `prop-translation-identifies-regular-integral-blocks` in proof step 2.1
  (fact [F5]): the labelled transport of ordinary multiplicities to any
  dominant regular integral block.
- All three supplier files exist on disk (`items/…md`, batch 14, last written
  2026-10-10), their statements were reread against these uses, and the uses
  are exact (regular-block multiplicities $P_{y,w}(1)$ with support $y\le w$;
  the labelling convention's clauses; mutually inverse labelled translations).
  The registered cross-batch rows were updated in place (status left `open`
  for the independent Step-5/6 review) in
  `research/frontier-44-special-representation-examples-28-batch-15.cross-batch-dependencies.json`.

## Checks actually run (after the final edits of this dispatch)

- `node tools/tsx-run.mjs tools/precheck.mts items/<18 paths>` — 13
  proof-bearing items checked, 0 failing, all clean.
- `node tools/rendercheck.mjs items/<18 paths>` — OK (no wikilink in math, no
  unbalanced delimiters, every span parses under KaTeX, frontmatter parses);
  the same check on the two page files is also OK.
- `node tools/proof-layout.mjs items/<18 paths>` — 18 items, 69 steps,
  0 defects (run once after the final edits, all changed paths batched).
- `node tools/proof-contract.mjs research/…-batch-15.proof-contracts.json
  --strict` — 0 errors, 0 warnings, 18/18 contracts checked. The contracts
  were regenerated after the final edits with item-specific boundary
  dispositions for empty / zero / one / degenerate / endpoints / Choice /
  both iff cases, exact cited excerpts and the steps that use each fact.
- `node tools/content-policy.mjs research/…-batch-15.pages.json` — 18 scoped
  items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/…-batch-15.coverage.json
  --require-destination` — 2 pages, 41 harvested results, 0/0.
- `node tools/manifest-deps.mjs research/…-batch-15.pages.json` — 18 items,
  0 normalized, 0 errors.
- `node tools/depcheck.mjs --items-file <18 ids>` — passed; page prerequisite
  depths 56 (A) / 57 (B); no cycles.
- `node tools/item-dependency-levels.mjs check --run …` — exit 0, 862 items
  across 100 pages, maximum level 47; no batch-15 row (every written level
  equals the computed level).
- `node tools/validate-plan.mjs research/plan-spec.json --run …` — FAIL
  run-wide with 5 errors, **all outside this pair**: `b-leaf` plus
  `undeclared-prereq` for `kashiwara-operators-and-crystal-lattices`
  (dependency on `valuation-rings-and-discrete-valuation-rings-examples`), and
  `undeclared-prereq` rows for `character-polynomials-fi-modules-and-representation-stability`,
  `projective-functors-and-the-soergel-functor-in-category-o` and
  `complex-algebraic-stratified-topology`. This pair contributes only the
  three `redundant-prereq` advisories for the retained canonical `requires`
  (see the Step-4 notice below).
- `node tools/source-fetch-check.mjs --coverage …` — 9/9 fetch-verified, 9/9
  resolved; `node tools/url-sweep.mjs … --fail-on-dead` — 6/6 live, 0 failed;
  `node tools/source-backing.mjs …` — 14 authored results, all backed.
- `node tools/step3-decisions.mjs check --run … --phase final` — 862 items,
  accepted run-wide (counts move as sibling batches author); for this pair
  16 of 18 items are closed with current receipts (12 `accept`, 4 `repaired`)
  and the only two open rows are the owner-held escalations above. The
  run-wide exit code is 1 because several hundred rows remain open across the
  other, still-unbuilt pairs; none of them is in this pair. Because each
  receipt hash covers the wide transitive closure (≈4.4k item paths, including
  other batches' items under concurrent authoring), a receipt recorded during
  the live run can be re-invalidated by a sibling writer; this pair was
  re-recorded at 11:49Z with 0 non-owner open rows (2 owner-held rows), and the engine's
  writer-drained final pass is the authority on receipt currency.

## Records, dependencies and contracts

- Manifest, coverage, contracts and both pages are current; sibling rows were
  preserved and no published or sibling content was edited.
- Dependency additions made during authoring and registered in the item
  frontmatter and the batch-15 manifest:
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
  `lem-the-hecke-bar-involution-is-well-defined`,
  `thm-category-o-decomposes-by-generalized-central-character`,
  `cor-central-characters-are-dot-weyl-orbits`,
  `def-standard-and-costandard-objects-in-category-o`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `lem-bruhat-order-basic-properties-for-permutations` (wall example),
  `thm-bgg-reciprocity` (small character example),
  `lem-weight-norm-bound-for-finite-dimensional-simple-modules` and the local
  `lem-facet-tensor-weight-exclusion`. No item was created in this dispatch;
  the three local prerequisites were created and registered in both pages, the
  manifest and coverage during Step 1 scaffolding.
- Repairs recorded in item decisions: statement repair in
  `thm-translation-to-the-wall-on-verma-simple-and-projective-objects` (the
  false facet-containment equivalence of the scaffold, refuted by
  $\mathfrak{sl}_2$, $\lambda=-2$, $\mu=-1$, $w=s$), proof repair in
  `thm-parabolic-kazhdan-lusztig-character-formula` (index convention of
  $N^{-1}$ in step 2.1), and the two dependency/citation repairs in
  `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars`
  and the alternating-sum theorem.

## Step-4 pre-splice notices (reported, not edited)

- `research/plan-spec.json` still lists this pair with
  `requires = {the-kazhdan-lusztig-character-and-multiplicity-theorem,
  root-systems-dynkin-diagrams-and-cartan-killing-classification,
  projectives-standard-filtrations-and-bgg-reciprocity}`, while the manifest
  additionally declares `parabolic-subgroups-and-double-coset-geometry` (the
  actual supplier page of the Hecke-module chain). `validate-plan` treats the
  added requirement as `redundant-prereq` (reachable through the canonical
  requires) and reports no error; the declaration is retained as the actual
  interface used and the amendment is left to Step 4.
- The five `validate-plan` errors listed above are in other pairs and are
  reported for the Step-4 pre-splice reconciliation, not fixed here (their
  consumers and declared `requires` are outside this pair's ownership).

## Published concerns

None found. The published bar convention
(`lem-the-hecke-bar-involution-is-well-defined`), the published $S_3$
Kazhdan–Lusztig example (`ex-kazhdan-lusztig-bases-for-s-two-and-s-three`) and
the published block/facet suppliers were read and are consistent with this
pair's computations; the two defects found were in this batch's own scaffold
text (facet equivalence and the frozen $S_3$ coefficient index) and are
repaired in the authored items. Confidence in the published suppliers is
reported as read-and-consistent, not independently re-proved here.

## Handoff summary

- **Completed:** 18/18 assigned items authored (`items/…md`), both pages
  (`library/special-topics-in-representation-theory/singular-and-parabolic-kazhdan-lusztig-theory.md`,
  `…-examples.md`), the batch-15 manifest/coverage/contracts refreshed, this
  report completed. 16 of 18 item decisions are current as of 11:49Z (see the
  live-run receipt caveat under checks).
- **Open obligations:** the two owner-held escalations
  `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` and
  `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`
  (`defects: ["dependency"]`), with exact supplier IDs and consuming steps
  recorded above; the suppliers are authored and match, so the owner can
  close them with a current decision.
- **Checks run:** precheck, rendercheck, proof-layout (69 steps, 0 defects),
  strict proof contracts (0/0), content policy, coverage, manifest-deps,
  depcheck, dependency levels, validate-plan (out-of-pair errors only),
  source fetch/url/backing gates, and the phase-final Step-3 decision check;
  all results as detailed above.
- **No unresolved scope or source blockers** in this pair; no published
  content was modified.
