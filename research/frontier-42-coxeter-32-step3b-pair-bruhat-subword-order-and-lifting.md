# Step 3b pair report — `bruhat-subword-order-and-lifting`

Run `frontier-42-coxeter-32` · role alpha-high · pair label
`step3b-pair-bruhat-subword-order-and-lifting-e89460463e14c270` · design label CG-09.
(Earlier attempts of the same pair dispatch are `…-b0c0146d277437ca`, `…-c0405af5602d0481`
and `…-1088ffd509deade1`; this report supersedes their partial notes and records the
current disk state.)

- A page: `bruhat-subword-order-and-lifting` (order 1740, batch 12, kind A).
- B page: `bruhat-subword-order-and-lifting-examples` (order 1741, batch 12, kind B).
- Dispatch task: `research/frontier-42-coxeter-32-step3b-pair-bruhat-subword-order-and-lifting-e89460463e14c270.task.md`.
- Step 3a scope receipt: `research/frontier-42-coxeter-32-step3a-review-bruhat-subword-order-and-lifting.json`
  (`sufficient`, sha256 `23f29e92…6ef2f`).
- Manifests: `research/frontier-42-coxeter-32-batch-12.pages.json`, `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (batch 12 contains this pair only).
- Pages: `library/coxeter-groups/bruhat-subword-order-and-lifting.md` and
  `library/coxeter-groups/bruhat-subword-order-and-lifting-examples.md` (authored drafts).
- Contracts: `research/frontier-42-coxeter-32-batch-12.proof-contracts.json` (10 item entries,
  refreshed in this pass).
- Item decisions: `research/frontier-42-coxeter-32-step3b-review-<id>.json` (ten records,
  confidence 1, one per owned ID: `research/frontier-42-coxeter-32-step3b-review-<id>.json`).

## Owned IDs and entry obligations

Authoring order (ascending `dependency_level`, ties by page order and item ID):

| level | item | home page | status |
|---|---|---|---|
| 6 | `def-cg-bruhat-order-by-reflection-chains` | A | authored, `repaired` |
| 12 | `lem-cg-bruhat-right-exchange-and-augmentation` | A | authored, `repaired` |
| 13 | `thm-cg-bruhat-subword-characterization` | A | authored, `accept` |
| 14 | `lem-cg-bruhat-chain-refinement-and-gradedness` | A | authored, `accept` |
| 14 | `ex-cg-s4-bruhat-versus-weak-comparability` | B | authored, `repaired` |
| 15 | `thm-cg-bruhat-lifting-and-cover-criterion` | A | authored, `accept` |
| 15 | `ex-cg-s4-subword-descriptions-agree` | B | authored, `accept` |
| 16 | `thm-cg-bruhat-parabolic-projection-and-quotients` | A | authored, `repaired` |
| 16 | `ex-cg-s4-lifting-squares` | B | authored, `repaired` |
| 16 | `ex-cg-s4-subwords-and-covers` | B | authored, `accept` |

All ten are original scaffold IDs: each needs an ordinary current item decision under
`tools/step3-decisions.mjs` (`accept`/`repaired`, confidence 1, examined dependency IDs,
concrete evidence) before handoff, or `escalate` where a supplier is unfinished.

Open obligations at entry:

1. Author all ten item files, both page files, the batch-12 proof contracts and this report.
2. Sibling in-run suppliers are being authored concurrently. Their item files must be
   inspected and their used clauses re-verified before any `accept` decision; where a
   supplier file is still absent, the consumer decision stays `escalate`.
3. Repair local scaffold gaps found during the audit (see next section).

## Scaffold audit findings (entry)

- `lem-cg-bruhat-right-exchange-and-augmentation`, part (2): the scaffold's "more precisely"
  clause mis-transcribes Björner–Brenti Lemma 2.2.1. In the printed source the indices
  `i_1<…<i_k` are the **deleted** positions of the chosen reduced subword (so
  `k = q − ℓ(u)`), `i_k` is minimised, and `ut` is the word with only `i_1,…,i_{k-1}`
  deleted. Re-read on the fetched Björner–Brenti PDF (sha256 `ad1e7d9260127bb2…`,
  PDF pages 42–43), where the hat glyphs (character `\x17`) mark exactly those positions.
  The scaffold's kept-index phrasing and its claim "ut is the product of the subword
  obtained by deleting only the positions i_1,…,i_{k-1}" are both wrong; the promised
  claim (existence of `v>u`, `ℓ(v)=ℓ(u)+1`, `v` a reduced subword) is unaffected.
  Verified numerically for every reduced word and reduced subword in S3, S4 (exhaustive
  enumeration): with the corrected reading the identity holds in all cases.
- `thm-cg-bruhat-lifting-and-cover-criterion`, part (1a): the scaffold says
  "`s_1⋯s_q s` is a reduced expression of `vs`", which is false under the case hypothesis
  `ℓ(vs)<ℓ(v)`. Repair: use a reduced expression `t_1…t_r` of `vs`, the reduced word
  `t_1…t_r s` of `v`, and the subword criterion directly.
- `def-cg-bruhat-order-by-reflection-chains`: statement and well-definedness obligations
  are ready as scaffolded; no repair needed.
- Other items: statements are complete and independently re-derived (details per item below).

## Per-item checkpoints

Each entry records, in the dispatched dependency order: the exact claim, the suppliers read
in their current statements, the audit/repair performed, and the open gaps. Finite `S_4`
data were re-derived independently of the item text by exhaustive enumeration (a local
script over all of `S_4`, not imported from the item).

1. **`def-cg-bruhat-order-by-reflection-chains`** (level 6, A, `repaired`).
   Claim/conventions: for an arbitrary Coxeter matrix $(S,m)$ with finite $S$ (entries
   $\infty$ allowed) the Bruhat graph is $u\to v\iff v=ut$, $t\in T$, $\ell(v)>\ell(u)$,
   and the Bruhat order is its reflexive transitive closure; the item proves the partial
   order and length-comparison clauses, $\ell(x)=\ell(y)$ forcing $x=y$, $1\le w$,
   inversion symmetry $u\le v\iff u^{-1}\le v^{-1}$ with left-multiplication generation,
   and the reflection parity $\ell(xt)\equiv\ell(x)+1\pmod2$; intervals and rank are
   deliberately deferred to the level-14 lemma. No Choice; the well-definedness paragraph
   records that both relations are predicates on the fixed $W$. Suppliers read:
   `def-hh-coxeter-matrix-word-group-and-length` (presented group, length, reduced words),
   `def-cg-canonical-reflection-homomorphism` (2) ($T=\{wsw^{-1}\}$ and conjugation
   closure), `thm-hh-coexeter-exchange-deletion-and-faithfulness` (1) (sign character
   $\operatorname{sgn}(s)=-1$, $\operatorname{sgn}(x)=(-1)^{\ell(x)}$),
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (3)
   ($\ell(x)=\ell(x^{-1})$). Repair: added the missing prefix justification $\ell(w_j)=j$
   for a prefix of a reduced word (substitution argument) and named prefix reduction in the
   Remarks. Open gaps: none.

2. **`lem-cg-bruhat-right-exchange-and-augmentation`** (level 12, A, `repaired`).
   Claim: (1) right-handed strong exchange with a unique deleted index and the explicit
   $t=(s_q\cdots s_{i+1})s_i(s_{i+1}\cdots s_q)$; (2) the augmentation step of
   Björner–Brenti Lemma 2.2.1 in deleted-position form, giving $u\to ut$,
   $\ell(ut)=\ell(u)+1$ with $ut$ a reduced subword of the same word. Sources: the
   Björner–Brenti PDF §2.2 printed pp. 33–34 (Lemma 2.2.1 with cases (2.8)–(2.9)), Denton
   Lemma 1, Marberg Lecture 11. Audit: (1) is the batch-7 left-handed uniqueness form
   applied to $u^{-1}$ and inverted index by index; (2) was re-derived by hand in both
   cases — $p>i_k$ produces a word of length $q-2$ for $w$, $p<i_k$ produces a reduced
   subword description of $u$ with largest deleted position $\max(i_{k-1},p)<i_k$; parity
   excludes $\ell(ut)=\ell(u)$. Repair: step 5.1's unsupported clause “$w''$ is a reduced
   expression of $wt$” was deleted (the length-$(q-2)$ word for $w$ already gives the
   contradiction). Suppliers read: `thm-cg-root-inversion-formulas-and-strong-exchange`
   (3), `def-hh-coxeter-matrix-word-group-and-length`, the inversion clause of
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (3), clause (2) of
   `def-cg-canonical-reflection-homomorphism`, and clause (4) of the definition item.
   Open gaps: none.

3. **`thm-cg-bruhat-subword-characterization`** (level 13, A, `accept`).
   Claim: for a fixed reduced expression $w=s_1\cdots s_q$, $u\le w$ iff $u$ is the
   product of a subword, with a reduced subword of length $\ell(u)$; independence
   (a)$\iff$(b)$\iff$(c) and $1\le w$. Audit: chains-to-subwords by downward induction
   using right-handed strong exchange and two-letter deletion; subwords-to-chains by
   induction on the length gap using the augmentation lemma; Matsumoto is used for
   nothing. Suppliers read: clause (3) of
   `thm-hh-coexeter-exchange-deletion-and-faithfulness` (two-letter deletion),
   `def-hh-coxeter-matrix-word-group-and-length`, and the two same-batch suppliers.
   Open gaps: none.

4. **`lem-cg-bruhat-chain-refinement-and-gradedness`** (level 14, A, `accept`).
   Claim: $|[u,v]|\le 2^{\ell(v)}$ by the lexicographically first subword injection; the
   refined chain $u=x_0<\cdots<x_k=v$ with $\ell(x_i)=\ell(u)+i$; every maximal chain in
   $[u,v]$ has exactly $\ell(v)-\ell(u)$ strict steps, and covers raise length by one.
   Audit: the induction on $\ell(v)-\ell(u)$ uses the augmentation lemma and the subword
   criterion; maximality uses the insertion step. The only selection is the
   lexicographically first subword on a finite set; no Choice. Suppliers read:
   `def-hh-coxeter-matrix-word-group-and-length`, the definition item, the subword
   theorem and the augmentation lemma. Open gaps: none.

5. **`ex-cg-s4-bruhat-versus-weak-comparability`** (level 14, B, `repaired`).
   Claim: $2143=s_1s_3$ is a subword of $s_1s_2s_3=2341$, while $\ell$-difference one and
   none of the six products $us_i$, $s_iu$ equals $2341$, so Bruhat comparability holds
   with neither weak comparison; weak comparability implies Bruhat comparability because
   each length-increasing simple step is a Bruhat edge. Independent check: all six
   products, the subword relation and the non-comparability were re-derived by exhaustive
   $S_4$ enumeration. Repair: restored the declared dependency
   `def-hh-coxeter-matrix-word-group-and-length` in both the item and the batch manifest so
   that the item, the manifest and the cross-batch row agree (the row had claimed the edge
   while both carriers omitted it). Suppliers read: the type-$A$ clause (4) of
   `thm-hh-parabolic-minimal-representatives-and-length-additivity`, the definition item,
   the subword theorem, and the published permutation/inversion items. Open gaps: none.

6. **`thm-cg-bruhat-lifting-and-cover-criterion`** (level 15, A, `accept`).
   Claim: the four lifting cases (a)–(d) with all stated inequalities; the cover criterion
   (covered)$\iff$($\ell$-difference one)$\iff$(reflection deletion of a reduced
   expression); reflection deletion $v_i=vt_i$ with a unique deleted position; directedness.
   Audit: (a) and (b) are subword arguments in a reduced word of $v$ (using a reduced word
   $t_1\cdots t_r s$ of $v$ when $s$ is a descent of $v$ — the repair of the Step 3a entry
   finding); (c) reduces to (a) applied to $us\le v$; (d) is the edge chain
   $us\le u\le v\le vs$; uniqueness of the deleted position was verified through the
   braid-equation contradiction; directedness by induction on $\ell(u)+\ell(w)$ with both
   same-magnitude cases. Suppliers read: clause (1) of
   `thm-hh-coexeter-exchange-deletion-and-faithfulness` ($\ell(xs)=\ell(x)\pm1$ and
   parity), the definition item, and the same-batch suppliers. Open gaps: none.

7. **`ex-cg-s4-subword-descriptions-agree`** (level 15, B, `accept`).
   Claim: $v=2431$ has the two reduced expressions $s_1s_2s_3s_2$ and $s_1s_3s_2s_3$,
   and the $16$ subwords of each realize the same $12$-element interval $[1,v]$, with
   $s_2$ at a different position in the two expressions. Independent check: the two word
   values, both $16$-subword value sets, the interval and the positions of $s_2$ were
   re-derived by exhaustive $S_4$ enumeration. Suppliers read: the type-$A$ clause,
   `def-hh-coxeter-matrix-word-group-and-length`, the subword theorem (both parts) and the
   interval item. Open gaps: none.

8. **`thm-cg-bruhat-parabolic-projection-and-quotients`** (level 16, A, `repaired`).
   Claim: $P^I(w)\le w$ with equality iff $w\in W^I$; order preservation; covers over
   $W^I$; the subword criterion verbatim on the restriction plus the chain property in
   $W^I$ with grading and finiteness; directedness and a unique maximum only when $W^I$ is
   finite, with no longest element of $W$ or $W_I$ presumed. Audit: order preservation is
   an induction on $\ell(v)$ using lifting; the decisive extra check $x_1\in W^I$ was
   re-derived (assuming $x_1=us$ with $s\in I$ forces $t=s$ and produces a word of length
   $q-1$ for $wt$, contradicting the defining ascent condition of $w\in W^I$). Repair:
   step 4.1 had written the contradiction as $\ell(wt)<\ell(w)=\ell(ws)$, which is false
   for $t=s\in I$; it now reads $\ell(wt)<\ell(w)$ contradicting the requirement
   $\ell(ws)>\ell(w)$ for $s\in I$. Suppliers read: `def-cg-parabolic-quotient-and-two-sided-minima`
   (1)–(2), `thm-cg-parabolic-intersections-and-coset-factorization` (3), the batch-2
   parabolic clauses (2)–(3), and the same-batch suppliers. Open gaps: none.

9. **`ex-cg-s4-lifting-squares`** (level 16, B, `repaired`).
   Claim: one instance of each lifting case in $S_4$, with all comparisons and the
   sharpness of cases (a) and (c) (two equal-length distinct elements). Independent check:
   all products, inversion numbers, subword witnesses and comparabilities were re-derived
   by exhaustive $S_4$ enumeration (including the two negative comparisons). Repair:
   step 1.2's witness list was completed to cover all eight comparisons required by the
   four cases (witnesses added: $1342$ in the reduced word of $4312$ at positions $1,3$;
   $1324$ in $1432=s_2s_3s_2$ at position $1$). The repair was checked against the
   re-derived witness data. Suppliers read: the lifting theorem (1), the subword
   criterion, the type-$A$ clause and the definition item. Open gaps: none.

10. **`ex-cg-s4-subwords-and-covers`** (level 16, B, `accept`).
    Claim: the $64$ subwords of $w_0=s_1s_2s_3s_1s_2s_1$ realize exactly the $24$ elements
    of $S_4=[1,w_0]$; the six single-letter deletions realize $4312,4123,1324,4231,2341,3421$,
    exactly the three length-$5$ values being covers of $w_0$; the six position sets for
    $s_1=2134$ are displayed. Independent check: subword values (24 distinct), the deletion
    values and reducedness, the length-$5$ elements, the $t_i$ identities $v_i=vt_i$ and
    the position sets were all re-derived by exhaustive $S_4$ enumeration. Suppliers read:
    the cover criterion and reflection deletion of the lifting theorem, the subword
    criterion, the interval/grading item, the definition item and the type-$A$ clause.
    Open gaps: none.

## Checks actually run

All commands were run from the repository root after the last item edit; the batch-12
author check was re-run after the final contract-quote refresh.

| check | command | actual result |
|---|---|---|
| author check (precheck, rendering, policy, contracts) | `node tools/tsx-run.mjs tools/author-check.mts frontier-42-coxeter-32 12` | exit 0; precheck `9 checked, 0 failing` (the definition has no proof phase); rendercheck `OK — 12 file(s)`; content-policy `10 scoped item(s), 0 error(s), 0 warning(s)`; proof-contract `--strict` `0 error(s), 0 warning(s), 10/10 item(s) checked` |
| proof layout (batch of all ten changed item paths) | `node tools/proof-layout.mjs items/def-cg-bruhat-order-by-reflection-chains.md items/lem-cg-bruhat-right-exchange-and-augmentation.md items/thm-cg-bruhat-subword-characterization.md items/lem-cg-bruhat-chain-refinement-and-gradedness.md items/thm-cg-bruhat-lifting-and-cover-criterion.md items/thm-cg-bruhat-parabolic-projection-and-quotients.md items/ex-cg-s4-subwords-and-covers.md items/ex-cg-s4-lifting-squares.md items/ex-cg-s4-bruhat-versus-weak-comparability.md items/ex-cg-s4-subword-descriptions-agree.md` | exit 0; `10 items, 55 steps, 0 defects` |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly 3 errors, all sibling items (`ex-cg-interval-realized-tree-versus-vertex-graph-metric`, `ex-cg-hexagonal-a2-cell-and-graph-distance`, `ex-cg-reducible-semidefinite-forms-are-factorwise`); no batch-12 item is named, and all ten stored levels equal the tool's computed values (6, 12, 13, 14, 14, 15, 15, 16, 16, 16) |
| depcheck (explicit paths) | `node tools/depcheck.mjs items/<the ten ids>` | no finding names a batch-12 item; the repo-wide exit 1 reflects unrelated published debt (published-unaudited, multi-home, unrelated unresolved links) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1599 pages with item lists |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; `303 item(s), 0 normalized, 0 error(s)` |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-12.coverage.json --require-destination` | exit 0; `1 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)` |
| source full text | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-12.coverage.json` | exit 0; `4/4 source(s) fetch-verified`, `4/4 resolved (0 documented drops)` |
| contract battery (batch-12 merge) | `node tools/merge-proof-contracts.mjs --level frontier-42-coxeter-32 /tmp/merged-12.json research/frontier-42-coxeter-32-batch-12.proof-contracts.json` then `proof-contract --strict`, `finite-smoke`, `risk-report`, `boundary-audit --fail-on-contradicted --fail-on-template`, `citation-fidelity --fail-on-missing-quote` on the merge | exit 0 for each; proof-contract `0 error(s), 0 warning(s), 10/10 item(s)`; finite-smoke `0 error(s), 0 check(s)` (no smoke obligations); boundary audit: no contradicted and no template rows; citation fidelity: no findings |
| Step 3 scope gate | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` | exit 1 with 4 sibling pairs still open; this pair's `sufficient` scope decision is current and closed |
| Step 3 item gate | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase final` | exit 1 (251 sibling items not yet authored); all ten batch-12 items are closed at confidence 1 |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; `refreshed and deduplicated`; the unified ledger shows all 27 batch-12 rows present with `verified` reviews, `orphaned_reviews: []`, batch 12 in `reviewed_batches` |
| exhaustive finite cross-checks (local, not a repository tool) | Python enumeration over all of `S_4` re-deriving the subword/interval/deletion/lifting/weak-comparison data | all item assertions of the four B examples and the $S_4$ data reproduced; no mismatch |

Reliability note: the finite enumerations are consistency evidence inside their computed
scope only; the proofs in the strategies are the mathematical content, and no supplier
proof is certified by this pass.

## Decisions and escalations

Ten `record-item` receipts were written with `--decision accept|repaired --confidence 1`
and the examined direct dependency IDs, after the checks above and after every content
change: `research/frontier-42-coxeter-32-step3b-review-<id>.json` for the ten owned IDs.
No `--owner` flag and no judge or audit stamp was used. Repairs recorded: definition item
(prefix justification), augmentation lemma (step 5.1 clause), parabolic projection
(step 4.1 contradiction), lifting-squares example (witness completion), weak-comparison
example (dependency restoration).

Escalations: none outstanding for this pair. All in-run suppliers used by the ten items
exist on disk as drafts and their used clauses were read in their current statements
(the 27 verified cross-batch rows list the exact fact/step locators). The two direct
in-run prerequisite pairs named in the dispatch, `canonical-roots-signs-and-faithful-reflections`
and `parabolic-subgroups-and-double-coset-geometry`, both exist as authored drafts; the
used items `thm-cg-root-inversion-formulas-and-strong-exchange`,
`def-cg-parabolic-quotient-and-two-sided-minima` and
`thm-cg-parabolic-intersections-and-coset-factorization` are present with the required
clauses. This reconciliation is dependency/statement-level: independent supplier-proof
audit is Steps 5–8 work, and a later supplier edit mechanically invalidates the affected
receipts.

Ledger and registration changes made in this pass: one missing row added
(`lem-cg-bruhat-right-exchange-and-augmentation` → `def-cg-canonical-reflection-homomorphism`);
one item/manifest declaration restored to match its row
(`ex-cg-s4-bruhat-versus-weak-comparability` → `def-hh-coxeter-matrix-word-group-and-length`);
all 27 rows marked `verified` with exact use locators; contract quotes refreshed where the
batch-2 parabolic supplier's statement had been revised after the contract was first
written (six citations; no claim changed); three contract claim texts synchronised with
their repaired step texts. No sibling or published file was edited.

## Open observations and published concerns

- **Observed hypothesis wording, not a confirmed defect (low risk, exact IDs).** The
  batch 2 suppliers `thm-hh-coexeter-exchange-deletion-and-faithfulness` and
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`, and the batch 10
  supplier `def-cg-parabolic-quotient-and-two-sided-minima`, phrase their hypotheses as
  “Let $(S,m)$ be a finite Coxeter matrix”, while this pair's items (and the CG-09 design)
  quantify over an arbitrary Coxeter matrix in the sense of
  `def-hh-coxeter-matrix-word-group-and-length` (finite $S$, entries $\infty$ allowed).
  The same batch-2 items explicitly treat $\infty$ entries (the geometric representation
  sets $c_{st}=2$ for $m(s,t)=\infty$; `lem-hh-dihedral-root-recurrence-and-root-sign` (3c)
  and `thm-hh-matsumoto-reduced-word-theorem` (3) state the $m=\infty$ cases), so
  “finite Coxeter matrix” there is best read as “Coxeter matrix on a finite set $S$”.
  Every clause used by this pair (sign parity, exchange, deletion, inversion length,
  parabolic minimal representatives, type $A$) is true and is proved by those suppliers
  for arbitrary Coxeter matrices. Reconciler/Step 4 may wish to harmonise the wording;
  no consumer proof depends on the narrower reading, and this pair deliberately does not
  narrow its claims.
- **No published defects identified.** The published items consumed
  (`def-group`, `def-natural-numbers`, `def-finite-symmetric-group-and-permutation-notation`,
  `def-inversions-inversion-number-and-sign`) were read only for the interfaces used and
  match their uses. No entry is proposed for the canonical published ledger.
- **Concurrent-writer caveat.** Sibling writers may still edit the suppliers named above;
  any such edit changes the transitive item hashes and mechanically reopens the affected
  decisions. The engine recomputes; this report does not freeze supplier content.
- **Downstream in-run consumers.** The unified ledger shows three batch-16 consumers of
  these items (`lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
  `thm-cg-bruhat-deletion-label-shelling`, `thm-cg-bruhat-eulerian-intervals-and-mobius`).
  My five content edits change those items' inputs, so the batch-16 receipts that bind
  them are stale until their owner refreshes them; their own rows already marked the
  edges `verified`. No claim interface was altered (only proofs, witness lists and the
  one restored dependency), so no consumer repair is required.

## Handoff summary

- **Completed IDs (all ten, authored and decided):**
  `def-cg-bruhat-order-by-reflection-chains`,
  `lem-cg-bruhat-right-exchange-and-augmentation`,
  `thm-cg-bruhat-subword-characterization`,
  `lem-cg-bruhat-chain-refinement-and-gradedness`,
  `ex-cg-s4-bruhat-versus-weak-comparability`,
  `thm-cg-bruhat-lifting-and-cover-criterion`,
  `ex-cg-s4-subword-descriptions-agree`,
  `thm-cg-bruhat-parabolic-projection-and-quotients`,
  `ex-cg-s4-lifting-squares`,
  `ex-cg-s4-subwords-and-covers`.
- **Pages:** both assigned pages exist and list exactly the manifest entries (A: six items;
  B: four examples); the B page remains a dependency leaf.
- **Added suppliers:** none. No new item IDs were created in this pass; the two local
  additions (`lem-cg-bruhat-right-exchange-and-augmentation`,
  `lem-cg-bruhat-chain-refinement-and-gradedness`) are original scaffold inventory items,
  and all ten IDs appear in the immutable pre-author baseline, so all ten required
  ordinary current item decisions (recorded).
- **Checks run:** the table above (author check, proof layout, dependency levels, depcheck,
  validate-plan, manifest-deps, coverage, source-fetch, the five-tool contract battery,
  the two Step 3 decision gates, the dependency-ledger refresh, and the independent finite
  enumerations).
- **Published concerns:** none confirmed; one hypothesis-wording observation recorded
  above with exact IDs and its evidence.
- **Open obligations:** (i) supplier proofs remain Step 5–8 work; (ii) batch-16 consumer
  receipts are stale after my content edits until their owner refreshes them; (iii) the
  engine's Step 3b gate for the whole frontier still waits on sibling pairs, which is
  outside this pair's scope. No pair-level obligation is deferred or hidden.
