# Step 3b — scaffold auditor and item author: young-diagrams-tableaux-and-permutation-modules

- Run: `frontier-35-ten-categories`, stage `3b-author`, batch **11** (shared
  with `bruhat-decomposition-and-flags-over-finite-fields`).
- A page: `young-diagrams-tableaux-and-permutation-modules` (order 510.045,
  12 items). B page: `young-diagrams-tableaux-and-permutation-modules-examples`
  (order 510.046, 4 examples).
- Dispatch label:
  `step3b-pair-young-diagrams-tableaux-and-permutation-modules-86123a120ab19c28`.
- Owner direction read:
  `research/frontier-35-ten-categories-owner-authoring-direction.md` — it
  defers the batch-8 Serre-duality pair and one batch-13 Easton item and names
  no change to this pair. Nothing about this pair is deferred, held or
  re-scoped.
- Step 3a decision: `sufficient`, scope receipt sha256 prefix
  `6810ad46dc78…` (`…-step3a-review-young-diagrams-tableaux-and-permutation-modules.json`).
  No manifest `statement` was touched in this dispatch, so the scope hash is
  unchanged and that receipt remains current; only item-hash receipts had to be
  refreshed (below).

## Working checkpoint

All 16 planned items are authored, all 9 proof-bearing items carry proof
contracts, both pages exist as drafts, every one of the 16 Step 3b item
decisions is current (`itemDecision` closed for 16/16), and the batch-11
cross-batch input is `[]` (no cross-batch edge). Scaffold repairs and two
post-authoring text repairs are recorded below. No new item was created in this
dispatch and **no local supplier was added** (every missing prerequisite was
already published), so the auditor-created-item certification class does not
apply here.

## Source verification (this session)

The two full treatments recorded in
`research/frontier-35-ten-categories-batch-11.coverage.json` were re-verified
against the cached complete PDFs and re-read at the cited locators (text
extracted with `mutool`):

| Text | Bytes / sha256 prefix | Passages actually re-read |
|---|---|---|
| Chan, *Representation Theory of Symmetric Groups* | 303,971 / `8a3cac907770c66d` | Def 2.1, 2.3, 2.6 with Remark 2.7, Def 2.10, Def 2.12 with Remark 2.13 (printed p. 9), Lemma 2.14 (BCL) together with its hypothesis and both conclusions (printed pp. 9–10), Lemma 3.4 and Def 3.5 (printed pp. 12–13); Prop 3.6 read at statement level only. |
| Craven, *Groups, Geometries and Representation Theory* | 369,993 / `b2b190e9a1928b17` | Def 1.10 and the largest-entry/deletion paragraph (§1.4, printed p. 7), Def 1.18–1.19 with Lemma 1.21 and its proof (§§1.6–1.7, printed pp. 15–16), semistandard tableaux, types, Kostka numbers, Lemma 2.15 and Young's rule (§2.4, printed pp. 28–29). |

Statement-level mapping checked term by term:

- Chan's BCL hypothesis is "for every $i$, the entries in the $i$th row of
  $t_2$ belong to mutually different columns of $t_1$", conclusion
  $\mu\unlhd\lambda$, and for $\lambda=\mu$ it produces
  $\sigma\in R_{t_2}$, $\pi\in C_{t_1}$ with $\sigma t_2=\pi t_1$. With
  $t:=t_1$ and $s:=t_2$ this is exactly the item's hypothesis
  ("every row of $s$ meets each column of $t$ in at most one entry"), its
  conclusion $\lambda\unrhd\mu$ and its equality clause (here
  $\rho\in R_s$, $\gamma\in C_t$). The orientation is not reversed.
- Chan Remark 2.13(b) is $\mu\unlhd\lambda\iff\lambda'\unlhd\mu'$, which is the
  item's $\lambda\unrhd\mu\iff\mu'\unrhd\lambda'$.
- Chan Def 2.6 defines the standard Young subgroup on consecutive blocks and a
  Young subgroup as a conjugate of it; the item's definition matches (the
  source's printed formula has a harmless "$\lambda_n$" typo for $\lambda_1$).
- Craven Def 1.10 (removable node = hook length 1; addable node = removable node
  of a partition of $n+1$) matches the item's diagram criterion, and his
  dominance lemma is the same statement as the BCL's first clause.

Independent arithmetic checks run in this dispatch: brute-force enumeration
confirms dominance is total on partitions of $n$ for $n\le5$ and that the first
incomparable pairs occur exactly at $n=6$, namely $\{(4,1,1),(3,3)\}$ and its
transpose $\{(3,1,1,1),(2,2,2)\}$.

## Scaffold audit and repairs

No structure change was needed: all 12 designed A items and all 4 designed B
examples stay, in the scaffold's order, with the same ids, kinds and promises,
and no item beyond the design list was added. The following local repairs were
made and every affected decision re-recorded after the repair:

1. **Dependency completion, three items** (Step 1 scaffold `deps` were
   incomplete; item and batch-manifest `deps` now agree for all 16 items):
   - `lem-basic-combinatorial-lemma-for-tableaux` gained
     `def-partition-young-diagram-and-conjugate-partition`, because the proof
     uses the column-height identity $\lambda'_j=\#\{i:\lambda_i\ge j\}$
     directly (step 1.1);
   - `lem-young-permutation-module-is-induced-from-the-trivial-character`
     gained `def-young-tableau-standard-tableau-and-shape`, because the proof
     uses the row-set image property of $\sigma\cdot t$ (step 1.1);
   - `ex-young-permutation-modules-for-row-and-column-partitions` gained
     `def-trivial-regular-and-permutation-representations`, because the example
     names the trivial and regular modules by that definition.
2. **`def-dominance-order-on-partitions` — false display repaired (found by
   this audit).** The displayed prefix-sum chain bounded
   $\sum_{i\le r}\mu_i$ above by $\min(r,n)$, which is false for $\mu=(n)$ when
   $r<n$. The upper bound is now $n=\sum_{i\le r}(n)_i$; the true lower bound
   $\min(r,n)=\sum_{i\le r}(1^n)_i$ is unchanged. (Recheck: for $r\le n$,
   $\sum_{i\le r}\mu_i\ge r$ because either $\mu$ has at least $r$ positive
   parts or its total $n$ already appears.)
3. **`def-removable-and-addable-nodes-of-a-partition` — quantifier repaired
   (found by this audit).** The corner remark read "every partition of $n$
   arises from exactly $\#\operatorname{Rem}(\lambda)$ partitions of $n-1$",
   which is literally false for a partition other than $\lambda$ (e.g.
   $\lambda=(2,1)$ has $\#\operatorname{Rem}=2$ while $(3)$ arises from one
   partition of $2$). The subject is now $\lambda$ itself; the dual
   $\#\operatorname{Add}(\lambda)$ statement was already true and is unchanged.
4. Retained from the beta scaffold: `def-row-and-column-stabilizers-of-a-tableau`
   precedes `lem-basic-combinatorial-lemma-for-tableaux`, whose equality clause
   uses both stabilizers. No claim was weakened, dropped or renamed, and no
   manifest `statement` was edited (the Step 3a scope hash still matches).

## Item authoring status

`accept` = audited sound for the current text; `repaired` = a local repair was
made (dependency or text) before closure. All receipts are in
`research/frontier-35-ten-categories-step3b-review-<id>.json`.

| # | item | kind | decision | proof contract | evidence |
|---|---|---|---|---|---|
| 1 | `def-partition-young-diagram-and-conjugate-partition` | def | accept | n/a (definition) | English diagram from the partition, column-height conjugation with the transpose identity, involution and bijectivity, $S_0=\{1\}$; Chan Def 2.1/2.7, Craven §1.4. |
| 2 | `def-young-tableau-standard-tableau-and-shape` | def | accept | n/a | tableaux as bijections, strict row/column increase, the left action with row/column image property, $f^\lambda$, empty tableau and $n=0$; Chan Def 2.1(b)(c). |
| 3 | `def-removable-and-addable-nodes-of-a-partition` | def | **repaired** | n/a | definition via deleting/inserting a node, row criteria, the $(k+1,1)$ case, $\operatorname{Rem}/\operatorname{Add}$ of $\varnothing$, row-endpoint warning; quantifier repair above; Craven Def 1.10. |
| 4 | `lem-largest-entry-of-a-standard-tableau-is-removable` | lemma | accept (refreshed) | yes | steps 1.1–1.2: no box right of or below $n$; 2.1: removable; 3.1–4.1: restriction is standard of size $n-1$; $n=1$ and single-row/column cases checked. |
| 5 | `def-dominance-order-on-partitions` | def | **repaired** | n/a | padded prefix sums; reflexivity, transitivity, antisymmetry; unique max $(n)$ / min $(1^n)$ with the corrected display; $n=0$; partial-vs-lexicographic and conjugation remarks; Chan Def 2.12/Remark 2.13, Craven Def 1.19. |
| 6 | `lem-conjugation-reverses-dominance` | lemma | accept (refreshed) | yes | step 1.1 exact identity $\sum_{j\le k}\lambda'_j=n-\max_r(\sum_{i\le r}\lambda_i-rk)$, forward 2.1, reverse 3.1 via the involution; matches Chan Remark 2.13(b). |
| 7 | `def-row-and-column-stabilizers-of-a-tableau` | def | accept | n/a | row sets $A_i$, column sets $B_j$, $R_t$, $C_t$, direct-product structure and orders, $R_t\cap C_t=\{1\}$; Chan Def 2.3. |
| 8 | `lem-basic-combinatorial-lemma-for-tableaux` | lemma | **repaired** | yes | dominance by double counting (1.1–2.1); equality clause: the column bounds are attained, $A_{ij}=1\iff j\le\lambda_i$, the auxiliary tableau $v$, then $\rho\in R_s$, $\gamma\in C_t$ with $\rho\cdot s=\gamma\cdot t$ (3.1–8.1); dependency repair above; hypothesis stress-tested on extreme shapes. |
| 9 | `def-young-subgroup-tabloid-and-permutation-module` | def | accept | n/a | blocks and $S_\lambda$ with order $\prod\lambda_i!$, row equivalence, tabloids, well-defined tabloid action, $M^\lambda$ as permutation module, stabilizer $R_t$, transitivity, $R_{t_0}=S_\lambda$; Chan Def 2.6/2.10, Lemma 3.4, Def 3.5. |
| 10 | `lem-young-permutation-module-is-induced-from-the-trivial-character` | lemma | **repaired** | yes | well-defined equivariant bijection $S_n/S_\lambda\to\Omega_\lambda$ (confirmation 1.1, injectivity 2.1, surjectivity 2.2, equivariance 2.3), then the published coset theorem; $n=0$ case; dependency repair above. |
| 11 | `lem-tableau-stabilizers-transform-by-conjugation` | lemma | accept | yes | row/column set images (1.1), membership equivalence (2.1) giving both inclusions, column case, $n=0$; matches Chan Lemma 2.8. |
| 12 | `def-semistandard-tableau-and-kostka-number` | def | accept | n/a | content, weak rows, strict columns, finiteness of $K_{\lambda,\mu}$, $K_{\varnothing,\varnothing}=1$, $K_{\lambda,(1^n)}=f^\lambda$; Craven §2.4. |
| B1 | `ex-partitions-and-dominance-through-size-five` | example | accept (refreshed) | yes | complete lists for $n\le5$ by the largest-part recursion, conjugates by column heights, chains by explicit prefix-sum comparisons, first incomparability at $n=6$ ($4>3$, $5<6$) and the transpose pair; independent brute force agrees. |
| B2 | `ex-removable-nodes-and-row-endpoints` | example | accept (refreshed) | yes | $\operatorname{Rem}/\operatorname{Add}$ of $(3,3,1)$, $(3,2,1)$, $\varnothing$ from the row criteria, with $(1,3)$ an endpoint that is not removable. |
| B3 | `ex-young-permutation-modules-for-row-and-column-partitions` | example | **repaired** | yes | $M^{(n)}$ one-dimensional trivial, $M^{(1^n)}$ regular on $n!$ tabloids by left multiplication, $n=0$ and $n=1$ collapse; dependency repair above. |
| B4 | `ex-semistandard-tableaux-and-small-kostka-numbers` | example | accept | yes | exhaustive candidate lists give $K_{(2,1),(2,1)}=1$ (witness $11/2$), $K_{(2,1),(1^3)}=2$ ($12/3$, $13/2$), $K_{(3),(2,1)}=1$ ($112$), $K_{(1^3),(2,1)}=0$. |

## Proof contracts

`research/frontier-35-ten-categories-batch-11.proof-contracts.json` covers the
9 proof-bearing items of this pair (scope = the 5 lemmas and 4 examples; the 7
definitions of this pair have no proof section and therefore carry no contract,
matching `tools/level-coverage.mjs`'s proof-bearing predicate). Each entry
records the exact cited excerpt per fact ([L#]/[F#] with `source_section`),
every numbered step with its inputs, and all eight boundary axes:
72 boundary rows, 32 `not_applicable` with item-specific reasons, 0 template
clusters, 0 contradicted rows. No finite-smoke obligation is attached to these
items. Choice: every argument is finite or finite-dimensional and no step uses
AC; no step reaches the Foundations bootstrapping boundary; no incompatible
axiom branch occurs.

Text repairs 2 and 3 changed item bytes only inside a Definition preamble and a
Remark; every contract quote that cites these two definitions was re-checked
against the edited text (all quotes are in untouched sentences) and all seven
receipts whose transitive item hash changed were re-recorded with the repair
named.

## Dependency and ledger record

- In-pair prerequisite chain only, in manifest order; every `deps` entry of the
  16 item files equals the batch-manifest entry and resolves to an earlier item
  of the pair or to a published item.
- Published suppliers actually used: `def-symmetric-group`,
  `def-trivial-regular-and-permutation-representations`,
  `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets`
  (all `status: published`; the coset theorem's left-coset orientation was
  re-read and matches the tabloid construction).
- `research/frontier-35-ten-categories-batch-11.cross-batch-dependencies.json`
  is `[]` and stays `[]`: no item or page of either pair of this batch consumes
  an in-run item from another batch (sibling rows preserved — the file is
  shared with the Bruhat pair, which has no Step 3b dispatch yet).
  `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-35-ten-categories` was run after the audit and reported
  "refreshed and deduplicated".

## Checks actually run (2026-09-24)

| Check | Actual result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <16 item files>` (explicit paths) | 9 proof-bearing items checked, 0 failing, all clean |
| `node tools/rendercheck.mjs <16 items + 2 pages>` | OK — no wikilink in math, balanced delimiters, every math span parses under KaTeX, frontmatter parses |
| `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-11.pages.json` | 40 scoped items, **24 errors, all `scope-item-missing` for the 24 not-yet-authored Bruhat-pair items**; zero errors attributable to this pair |
| `… content-policy --manifest-only` (scaffold mode) | 16 `batch-item-already-exists` for this pair's authored ids — the expected behaviour of the pre-authoring mint check, not used by the 3b gate |
| `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-11.proof-contracts.json --strict` | 0 errors, 0 warnings, 9/9 items |
| `node tools/boundary-audit.mjs <contracts> --fail-on-contradicted --fail-on-template` | 72 rows, 32 n/a, 0 template clusters, 0 contradicted candidates |
| `node tools/citation-fidelity.mjs <contracts> --fail-on-missing-quote` | 25 quotes over 9 items; every quote found; no widening candidate |
| `node tools/finite-smoke.mjs <contracts>` | 0 errors, 0 checks over 0/9 items carrying obligations |
| `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-11.coverage.json` | 2 pages, 71 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-11.pages.json` | 40 items, 0 normalized, 0 errors; item-file vs manifest `deps` compared separately: 0 mismatches |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic, no item cycle/forward reference/B-page dependency/unresolved id among 1188 itemized pages; pre-existing `redundant-prereq` warnings only (this pair's plan inventories are still empty, see below) |
| `node tools/step3-decisions.mjs check --run … --phase final` + per-item `itemDecision` | this pair 16/16 closed (11 accept, 5 repaired); remaining `work` entries belong to other pairs |
| `node tools/depcheck.mjs`, `node tools/fwdcheck.mjs` (repo-wide) | both FAIL on unrelated content (published legacy findings, other pairs' in-flight drafts, one published page cycle through the Brauer/Green pages); grep over the full diagnostics: **no finding names any item or page of this pair** |
| `node tools/prosecheck.mjs` | 21430 files, 0 errors, 825 heuristic warnings |
| `node tools/extcheck.mjs --quiet` | **exit 0**, 0 errors, 48 `unproved-on-published` warnings; none of the 48 ids lies in this pair's 254-item transitive dependency closure |

## Published concerns for the owner (canonical ledger)

- **No confirmed or suspected published defect is required from this pair.**
  The three published suppliers used here were read and match their stated
  hypotheses; no published item is a consumer of this pair (page-level
  companion only), so no published-consumer-supplier-ledger row is created.
- **Published overlap (not a defect).**
  `def-ferrers-young-diagram-conjugate-partition-and-durfee-square`
  (`integer-partitions-and-the-twelvefold-way`) already states the same English
  diagram convention, the same transpose and the same
  $\lambda'_j=\#\{i:\lambda_i\ge j\}$; the two texts agree. This pair
  deliberately restates the conventions locally, as RG-8 asks. An owner may
  later add a non-load-bearing orientation link; that is a reading-order
  decision, not a repair.
- **Enrichment candidates recorded by Step 3a, not obligations of this pair**
  (kept here so they are not lost): Chan Prop 3.6 ($M^\lambda$ cyclic,
  $\dim M^\lambda=n!/\prod\lambda_i!$) and Example 3.7(c)(d) are unitemized but
  derivable from item 10 plus published Lagrange/coset counting; Craven Lemma
  2.15's general statements belong on RG-10's
  `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`.
- The 12 `extcheck` errors that the Step-1 batch-11 notes recorded are no
  longer reproducible (`extcheck --quiet` now exits 0 with warnings only); the
  current 48 warnings do not touch this pair.

## Open obligations at handoff

1. **Sibling pair.** `bruhat-decomposition-and-flags-over-finite-fields` in the
   same batch has no Step 3b dispatch yet and no item files; the batch-level
   item-mode content-policy gate is red solely on its 24 `scope-item-missing`
   entries. Its owner must author and register that pair; nothing of this
   pair's work needs to change when it lands (no dependency runs in either
   direction between the two pairs, and `content-policy` reports zero errors
   for this pair's 16 items).
2. **Step 4 splice.** The plan's item inventories for both pages are still
   empty; `validate-plan` lists the pages among the 431 planned pages without
   item lists. The 16 authored ids and their intra-page order are exactly the
   manifest order, so the splice should be mechanical (no `requires`
   disagreement was introduced: A page
   `requires: [group-actions-and-cayleys-theorem,
   induced-representations-and-frobenius-reciprocity]`, B page requires the A
   page).
3. **Outside this dispatch.** Step 5 reading/refutation, Step 7 judgments and
   the repo-wide `depcheck`/`fwdcheck`/`content-policy` batch gate are owned
   elsewhere; the failures listed above are not this pair's findings and were
   not repaired here.

## Honest uncertainty

I re-derived all nine proof-bearing arguments line by line and re-checked both
cited sources at the exact locators above; I did not read the two lecture notes
in full, only the cited sections and their immediate context (the same
qualification the Step 3a scope review recorded). No unresolved mathematical
uncertainty remains in this pair after the two text repairs. The two repairs
were found by this post-authoring audit, not by an independent reviewer; they
are corrections of imprecise prose/quantifiers, not of any proof step.
