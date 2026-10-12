# Step 3a scope review — pair `rim-hooks-and-the-murnaghan-nakayama-rule`

- Run: `frontier-44-special-representation-examples-28` (stage `3a-scope`), dispatch label
  `step3a-pair-rim-hooks-and-the-murnaghan-nakayama-rule-0569cd4a4fc38cb1`.
- Role: alpha (scope reviewer only — not owner, not item author).
- A page: `rim-hooks-and-the-murnaghan-nakayama-rule` (batch 19, order 1563; 11 items:
  1 definition, 4 lemmas, 3 theorems, 2 corollaries, 1 proposition).
- B page: `rim-hooks-and-the-murnaghan-nakayama-rule-examples` (batch 19, order 1564; 5 items:
  4 examples, 1 counterexample). Batch 19 holds exactly this pair, so no other pair's
  rows were touched or interpreted.
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-44-special-representation-examples-28 --page rim-hooks-and-the-murnaghan-nakayama-rule --decision sufficient`.
- Date: 2026-10-10. Scope only: this is not an item approval, not a proof judgement and not an
  owner record. No scaffold, manifest, coverage, plan or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: SYMR-4 in
`research/plan-symmetric-group-representations-track.md` (summary row line 39, role
“recursive ordinary character computation”; hook-length import note line 96) and the section
“SYMR-4 — Rim hooks and Murnaghan–Nakayama” of
`research/symmetric-group-planning/proposed-inventory.md` (exact claims, deps and source
locators for all 10 planned A items and 5 planned B items). The binding design joints are the
gap-ledger section `SYMR-4` of
`research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`: no generic
Mackey shortcut, the explicit binomial cancellation identity in the proof, and the
fixed-tabloid matrices/order/diagonal/Gram identity stated exactly with a second check.
Registry: `research/plan-spec.json` carries only the two page shells for this pair
(`"items": []`), with the manifest `requires`/companion/category preserved verbatim, so there
is no plan-vs-design inventory conflict. Run scope: the pair is in scope in
`research/frontier-44-special-representation-examples-28-scope-ledger.json` (A and B, batch
19). Step-1 drift verdict for this pair: **no-drift**
(`frontier-44-special-representation-examples-28-alpha-step1-drift.md`, §
`rim-hooks-and-the-murnaghan-nakayama-rule`). Owner direction
(`frontier-44-special-representation-examples-28-owner-authoring-direction.md`) retains the
planned claims, sources and proof obligations and authorizes necessary local prerequisites.
Constructed scaffold: `frontier-44-special-representation-examples-28-batch-19.pages.json`
with `…-batch-19.coverage.json` and `…-batch-19.notes.md`.

Intended subject: removable border strips (rim hooks) and their height; the bijection between
hooks of a partition and removable border strips, with size = hook length and height = leg
length; the determinantal form of a Specht character; the full-cycle hook column; the LR
binomial multiplicities and the alternating cancellation of disconnected rim removals; the
Murnaghan–Nakayama rule; the missing-strip zero corollary; the hook-divisibility vanishing
criterion; the $r$-cycle virtual-character filter; and the fixed-tabloid (Fox–Mullineux)
reconstruction of the ordinary character table, with five worked examples on the B page,
including the disconnected-rim counterexample. The design deliberately keeps the modular
conclusions (James §21.8(ii), §21.9–21.14: 2-/3-modular relations, Nakayama’s conjecture,
$p$-block classification) off this pair; the coverage files dispose them as `deferred` to
`cores-quotients-and-blocks-of-symmetric-groups`.

Role in the library (supplier). In-run consumer imports were checked mechanically against
every current batch manifest of the run:

- Batch 20, `type-a-hecke-specht-modules-and-cellular-bases` (SYMR-7, order 1569): declares
  the page-level `requires` edge to this A page and imports
  `def-removable-border-strip-and-height` and `lem-hooks-correspond-to-removable-border-strips`
  in `thm-q-schur-weyl-weight-space-gram-determinant-hook-product` and
  `thm-q-schaper-virtual-radical-layer-formula`.
- Batch 21, `cores-quotients-and-blocks-of-symmetric-groups` (SYMR-8, order 1571): imports the
  same two items in `lem-hooks-are-bead-gap-pairs-on-an-abacus`,
  `thm-e-core-is-independent-of-the-rim-hook-removal-order` and
  `ex-three-core-of-four-three-two-one`.

Both imported items are present, and they are the exact interfaces the consumer statements
use (a removable border strip with size/height; hooks ↔ border strips preserving hook length
and leg length). The unified dependency ledger records those 11 consumer edges with
`open` review rows owned by batches 20/21 — consumer-side interface reviews still owed at
their Step 3, not a supplier gap. No other batch or page consumes any item of this pair, and
no B-page item is a dependency of any other page (the B page is a dependency leaf, as
designed).

## 2. Design-to-manifest mapping

All 10 designed A items and all 5 designed B items are present, in design order, with the
designed kinds and claim content:

| # | A item (kind) | design row | note |
|---|---|---|---|
| 1 | `def-removable-border-strip-and-height` (def) | SYMR-4 A1 | connected, no $2\times2$, removal leaves a partition; height = rows − 1 = $r-c$ |
| 2 | `lem-hooks-correspond-to-removable-border-strips` (lemma) | A2 | bijection, size = $h(x)$, height = $\ell(x)$ |
| 3 | `thm-determinantal-form-of-a-specht-character` (thm) | A3 | $\chi^\lambda=\det([\lambda_i-i+j])$, $[0]=1$, $[r]=0$ for $r<0$ |
| 4 | `lem-character-value-on-a-full-cycle-is-supported-on-hooks` (lemma) | A4 | $(-1)^{n-x}$ exactly on the hook shapes |
| 5 | `lem-alternating-hook-induction-cancels-disconnected-rim-removals` (lemma) | A5 | $c^\lambda_{\nu,(x,1^{r-x})}=\binom{m-1}{c-x}$, alternating sum $=(-1)^{r-c}[m=1]$ |
| 6 | `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` (lemma) | — | authorized local joint: restriction multiplicities = LR coefficients |
| 7 | `thm-murnaghan-nakayama-character-rule` (thm) | A6 | recursive border-strip removal with signs $(-1)^{\operatorname{ht}}$ |
| 8 | `cor-no-removable-cycle-length-strip-forces-a-character-zero` (cor) | A7 | empty-sum vanishing |
| 9 | `cor-hook-divisibility-defect-zero-vanishing-criterion` (cor) | A8 | no $p$-divisible hook length $\Rightarrow$ zero on $p$-singular classes; no converse |
| 10 | `prop-r-cycle-virtual-character-filter` (prop) | A9 | $\Psi_\nu=\chi^\nu\circ\psi_r$ vanishes off classes with an $r$-cycle |
| 11 | `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` (thm) | A10 | exact $A$, $B=CA^{\mathsf T}$, $M=\mathrm{diag}(z_\rho)$, Gram equation, $C=B(A^{\mathsf T})^{-1}$, $\det C$ |
| B1 | `ex-murnaghan-nakayama-for-shape-five-four-four` | B1 | $13$-box computation $+$ forced zeros |
| B2 | `ex-the-s4-character-table-by-rim-hook-recursion` | B2 | full $S_4$ table with orthogonality check |
| B3 | `cex-a-disconnected-rim-set-is-not-a-border-strip` | B3 | $(2,2,1,1)/(1,1,1)$, coefficients $1,1,0$ |
| B4 | `ex-r-cycle-filter-for-nu-three-two-and-r-three` | B4 | four-term $S_8$ filter |
| B5 | `ex-s5-character-table-by-fixed-tabloid-reconstruction` | B5 | $A,B,C$ matrices, reversed column order, $\det C=2880$ |

No designed item is dropped, renamed to another claim or weakened; the design’s explicit
restrictions are carried in the manifest statements (the $[0]$ vs $0$ convention, the
out-of-range binomial convention, “no converse” on the divisibility criterion, “no modular
block classification”, the exact matrices and Gram identity of the fixed-tabloid theorem).
The single extra item, `lem-restriction-to-two-block-subgroup-has-lr-multiplicities`
(dependency level 0, all-published deps), is the local prerequisite the design’s own MN
route needs; its addition is authorized by the owner direction and recorded as reconciliation
3(d) in the batch notes. The remaining design-to-manifest deltas recorded in the batch notes
(skew-diagram dependency, transport suppliers on the determinantal form, the filter’s
induction interface, the printed-form correction of James’s binomial coefficient) are
proof-route or convention details inside designed claims, not scope changes. Page order
1563/1564 sits after all three prerequisites (1192, 1560, 1562) and before both consumers
(1569, 1571).

## 3. Source coverage

`…-batch-19.coverage.json` carries three fetch-stamped sources per page, all read from
complete author-hosted scans:

1. G. D. James, *The Representation Theory of the Symmetric Groups*, LNM 682 (complete
   161-page scan, SHA-256 `e339ca5f…2babc`): §6, §18, §19, §21 (Theorems 21.1/21.4/21.7,
   Lemma 21.5, Corollary 21.6, Examples 21.2/21.8, and the deferred block-theory sections).
2. I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed. (complete 486-page
   scan, SHA-256 `64e242b8…74ea7`): Chapter I §7 (7.1)–(7.6), Examples 3, 5, 7; §3 (2).
3. W. Woods, *Representation theory of the symmetric groups*, Part III essay (complete
   33-page PDF, SHA-256 `ca20092c…84645`): §4.2 (Fox–Mullineux $A$, $B$, Lemmas 4.2.1–4.2.4,
   Theorem 4.2.5 and the worked $S_4$ matrices); §4.3 (skew hooks and Theorem 4.3.1).

All 41 harvested source results are disposed (included / inline / already-published /
out-of-scope with reasons / deferred to `cores-quotients-and-blocks-of-symmetric-groups` with
destinations). The design’s named treatments are all present, and two textbooks plus an
independent essay give the two-treatment/book coverage on both pages. Current-state checks
re-run for this review: `coverage-checklist … --require-destination` → 2 pages, 41 results,
0 errors, 0 warnings; `source-fetch-check` → 6/6 fetch-verified, 6/6 resolved, 0 documented
drops. Honest scoping note: I did not re-download or re-read the three full PDFs in this
review; I re-verified the stamps and resolution, read the manifest statements in full, checked
the published item interfaces directly, and independently spot-recomputed the B-page values
in §5. The complete reads, locators and hashes are the batch’s recorded evidence, and I
carried them forward as such.

## 4. Prerequisite examination (unmet-prerequisite check)

- Page-level `requires`: all three targets are published pages with `status: published` in
  `library/special-topics-in-representation-theory/` —
  `the-hook-length-formula-and-rsk-correspondence` (order 1192),
  `frobenius-characteristic-and-the-symmetric-group-character-dictionary` (order 1560),
  `outer-products-skew-specht-modules-and-littlewood-richardson` (order 1562). The B page
  requires only the A page.
- Item-level deps: 43 distinct dependency ids across the two pages; 10 are batch-19 A items
  of this pair and the remaining 33 are published `items/` files. Every published dep was
  checked to have `status: published` and a home on an A page (none homed only on a B page);
  load-bearing interfaces were opened and read for claim direction and hypotheses, including
  `thm-outer-littlewood-richardson-rule`, `def-littlewood-richardson-tableau-and-coefficient`,
  `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`,
  `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-hook-arm-leg-and-hook-length`, `thm-hook-length-formula`,
  `def-virtual-character-and-character-ring-of-a-finite-group`,
  `cor-frobenius-reciprocity-for-complex-characters`,
  `thm-youngs-rule-for-permutation-modules`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `thm-centralizer-cardinality-from-cycle-type` and `def-dominance-order-on-partitions`.
  Every linked citation in every statement resolves; no dependency is missing from both the
  published library and the current scaffold.
- Mechanical re-checks on current bytes: `manifest-deps` → 16 items, 0 errors;
  `content-policy --manifest-only` → 16 scoped items, 0 errors, 0 warnings;
  `validate-plan` run-scoped (`--pages-file` all 100 current page ids `--run …`) → exit 0,
  “no item-level cycles, forward references, B-page dependencies, or unresolved ids among the
  100 page(s) with item lists”, with the single plan-wide advisory that this page’s canonical
  `requires` also reaches the Frobenius page through the outer-products page (recorded in the
  batch notes; the declared list is preserved from `plan-spec.json` and was not edited here).
  The cross-batch input file for batch 19 is `[]`; the unified ledger’s 11 edges touching this
  pair are the consumer reviews owed by batches 20/21, not supplier obligations.
- Confirmed gaps: **none**. Residual uncertainty: none material to scope. Two bookkeeping
  items for the authoring stage (not unmet prerequisites, both targets exist and are
  published): `thm-determinantal-form-of-a-specht-character` links
  `thm-complex-specht-modules-are-irreducible`, and `thm-murnaghan-nakayama-character-rule`
  links `def-finite-symmetric-group-and-permutation-notation`, without listing them in `deps`
  — a `depcheck`-level cleanup for Step 3b. The fixed-tabloid theorem’s single-treatment
  caution in the gap ledger is answered for scope by an independent second treatment on disk
  (Woods §4.2) plus the exact matrices, and its proof redundancy remains a Step-5 concern,
  not a scope omission.

## 5. Independent spot checks (scope-level)

To confirm the B page exercises the declared conventions (signs, heights, forced zeros)
rather than a different rule, I recomputed:

- Hook lengths of $(5,4,4)$: $\{7,6,5,4,1;\,5,4,3,2;\,4,3,2,1\}$, so sizes $\{1,\dots,7\}$ and
  no removable strip of size $8$–$13$ — matches B1 and the forced-zero clause.
- $\chi^{(3,3)}(\text{type }(3,3))=2$: legal $3$-strips give $+(3)$ of height $0$ and
  $-(2,1)$ of height $1$, and $1-(-1)=2$ — the value used by B1’s $(7,3,3)$ case.
- $\chi^{(3,3,2)}(\text{type }(4,3,1))=0$ (strips $+(2,1,1)$ ht $2$, $-(3,1)$ ht $1$, both
  values $0$) and $\chi^{(5,3)}(\text{type }(4,3,1))=1$ ($+(3,1)$ ht $0$: $0$; $-(2,2)$
  ht $1$: $-(-1)$), so the B1 recursion $-1=0-1$ reproduces.
- Disconnected rim set $\lambda=(2,2,1,1)$, $\nu=(1,1,1)$: $m=2$, $c=2$; I enumerated the LR
  tableaux and confirmed $c=1,1,0$ for contents $(1,1,1),(2,1),(3)$, alternating sum
  $0$ — matches B3 and the printed binomial convention.
- $S_5$ fixed-tabloid data: $A$’s first row is the class-size list
  $(24,30,20,20,15,10,1)$; $B$’s diagonal is $|S_\nu|=(120,24,12,6,4,2,1)$; the last column
  is the degree list $(1,4,5,6,5,4,1)$; $\det C=2880$ is the product of all parts of all
  partitions of $5$; the displayed inner product $\langle\chi^{(3,2)},\chi^{(2,2,1)}\rangle$
  is $0$ — matches B5.
- The $S_8$ filter degrees $20-14-70+64=0$ and the vanishing checks in B4 are consistent with
  the rule.

These confirm that the planned definitions, results and examples cover the intended subject;
they are spot checks, not proof verification.

## 6. Scope decision

The planned definitions, results and examples adequately cover SYMR-4 “recursive ordinary
character computation”: rim hooks and their height, the hook bijection, the determinantal and
full-cycle inputs, the exact binomial cancellation, the Murnaghan–Nakayama rule with its two
vanishing corollaries and the $r$-cycle filter, and the independent Fox–Mullineux
reconstruction, with five boundary/worked examples on the companion. Source coverage is
complete and mechanically validated; every prerequisite is published (with an A-page home)
or local to the pair; no promised claim is missing or weakened and no unmet prerequisite was
found. Decision: **`sufficient`**. No owner action is requested. Carried forward only as
later-stage notes: the two link/`deps` bookkeeping entries in §4 and the plan-wide
`redundant-prereq` advisory.
