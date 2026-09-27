# Step 3b — scaffold auditor and item author: the-modular-function-and-l1-group-algebras

- Run: `frontier-35-ten-categories` (batch 10, shared with
  `frobenius-groups-and-the-normal-complement-theorem`).
- A page: `the-modular-function-and-l1-group-algebras` (order 510.067, category
  representation-theory, **22 items**).
- B page: `the-modular-function-and-l1-group-algebras-examples` (order 510.068,
  **4 items**); companion pointer agrees A↔B.
- Dispatch label: `step3b-pair-the-modular-function-and-l1-group-algebras-375300b9cb01adc2`
  (role alpha-high; state started 2026-09-24T05:45:42Z; still open at handoff).
- Owner direction read: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  defers batch 8's coherent-sheaf/Serre-duality pair and the single batch-13 item
  `thm-pseudointersection-number-equals-tower-number`. It names no change to batch 10,
  and neither deferral touches this pair's subject, suppliers or closure.
- Step 3a scope decision: **sufficient**, refreshed inside this dispatch after the local
  addition, at scope hash `289b96465efcd1abdd6f30a58b2af9dd32aefe1186a155b1003a3e60d09e81ae`
  (`research/frontier-35-ten-categories-step3a-review-the-modular-function-and-l1-group-algebras.json`).
  The pair scope is closed at handoff.
- AC: the A page is built on a fixed left Haar measure, so AC is assumed wherever Haar
  existence/uniqueness, Urysohn cutoffs, density of $C_c$, or the selection of one cutoff
  per identity neighbourhood is used. Every such item declares `def-axiom-of-choice` and
  states its use as a labelled fact `[A1]` with the exact proof steps; DC/$\mathrm{AC}_\omega$
  are discharged from AC where a supplier assumes only the weaker principle. The one
  auditor-created item (the counting-measure lemma) is **choice-free** and says so.

## Sources read

- Batch-10 extracted full texts `/tmp/frontier35-b10-{kowalski,bekka,loomis,vogan}.txt`
  (Kowalski, *Representation Theory of Groups*, §§5.2–5.3 and Lemma 5.5.2, printed
  pp. 212–230, 238–239; Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*, Appendix A
  §§A.3–A.4, printed pp. 316–323; Loomis, *An Introduction to Abstract Harmonic Analysis*,
  §§30A–30B, 31A–31E, printed pp. 115–125; Vogan's note, pp. 1–3, used only as a
  convention cross-check). Locators and fetch stamps are in
  `research/frontier-35-ten-categories-batch-10.coverage.json` (7/7 source rows
  fetch-verified, 0 documented drops).
- Published suppliers re-read where the pair's arguments lean on them:
  `thm-uniqueness-of-left-haar-measure-up-to-scale`, `cor-existence-of-left-and-right-haar-measures`,
  `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` (DC form),
  `thm-riesz-fischer-completeness-of-l-p`, `thm-c-c-is-dense-in-l-p-for-radon-measures`,
  `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
  (Axiom of Countable Choice), `cor-normalized-haar-probability-on-a-compact-group`,
  `cor-cauchy-schwarz-inequality-for-l-two`, and the two published definitions used for the
  representation vocabulary (`def-continuous-and-unitary-representation-of-a-compact-lie-group`,
  `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`) —
  see the observation in "Published concerns" below.

## Scaffold audit and local repairs

The scaffold was audited against the Step 3a decision, the batch manifest, the coverage
record and the design's RG-19 plan. No pair was added, no promised result dropped, no
published item edited. All repaired claims below are on this pair's own draft items.

### Extra item kept, one defect fixed

The 6 scaffolding items recorded as local prerequisites in the Step 3a report remain, and
this dispatch added one more:

- `lem-counting-measure-on-a-discrete-group` — on a discrete LCH group, counting measure
  is a two-sided Haar measure, every Haar measure is a positive multiple of it, and
  integration against such a measure is summation (three clauses, fully proved from
  `prop-counting-measure-is-a-measure`, the Radon-measure regularity clauses and the
  simple-integral machinery; no AC anywhere in the item or its proof).
  **Why it was needed:** three consumers — `prop-compact-discrete-and-abelian-groups-are-unimodular`,
  `prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` and `ex-convolution-on-a-discrete-group` —
  had been routed through the B-page-only item `ex-counting-measure-as-haar-measure-on-a-discrete-group`,
  which `depcheck` reports as `[b-leaf-content]` (a B page's leaf cannot be another page's
  supplier) and which additionally dragged in the AC-assuming general uniqueness theorem.
  The new A-page lemma closes that defect *and* makes the discrete cases choice-free.
  The three consumers were rewired, their `[F]` fact rows and brackets rebuilt, and their
  proof contracts regenerated. `depcheck` now reports **0** `[b-leaf-content]` rows naming
  any of this pair's items, and the replaced B item is no longer in the pair's closure.

### Item and proof repairs (11 items re-receipted as `repaired`)

1. `lem-right-translation-scales-left-haar-measure` — fact labels renumbered to close an
   F6 gap; step 2.1's citation corrected to `[F6, step 1.1, step 1.2]`; contract rebuilt.
   Mathematics re-verified: $\nu_g(E)=\mu(Eg^{-1})$ is a nonzero Radon left Haar measure
   (regularity transported along $x\mapsto xg$), and the scalar $c(g)$ is unique using a
   Borel set with $0<\mu(E)<\infty$; AC enters only through Haar uniqueness `[F5]`.
2. `prop-compact-discrete-and-abelian-groups-are-unimodular` — discrete case rewired to the
   new counting-measure lemma; `[F5]` rewritten, deps updated, choice-cost remark updated.
   Compact case (normalized Haar probability + uniqueness) and abelian case ($xg=gx$)
   re-verified with their `[A1]` use.
3. `prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` — discrete direction rewired to the
   new lemma; the non-discrete direction (a unit $u$ forces $\mu(\{e\})>0$; Urysohn cutoff
   with $\|u-v\|_1<\tfrac12$ and $\mu(V)<1/(2\max(1,\|v\|_\infty))$ gives a contradiction)
   re-verified; both iff directions present in the contract.
4. `lem-convolution-preserves-cc-and-is-associative` — a duplicated empty `## Remarks`
   heading (rendering blemish) removed; a second one confirmed absent. Argument re-verified:
   compact support of the kernel on $\operatorname{supp}f\times(\operatorname{supp}f\cdot\operatorname{supp}g)$,
   continuity of the partial integral via the compact-kernel interchange lemma, associativity
   by $z=yw$ and left invariance; AC declared as `[A1]` with its single use in `[F2]`.
5. `lem-complex-haar-l1-and-l2-are-complete-and-cc-dense` — fact labels made contiguous and
   the brackets of steps 1.1/1.2 completed to the facts their own text cites (density `[F3]`,
   Riesz–Fischer `[F2]`); the AC ⇒ DC/$\mathrm{AC}_\omega$ discharges re-verified.
6. `thm-regular-representations-are-unitary-and-strongly-continuous` — labels renumbered to
   F1–F6 and the brackets of steps 1.2/1.3/2.1/2.2 corrected to the facts actually cited
   (a stale `F7` removed); unitarity, strong continuity, and faithfulness of $\lambda$ via
   the $UU^{-1}$-separation argument re-verified; AC declared as `[A1]`, single use step 2.2.
7. `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` — a stale remark
   reference "Step 3.2" (no such step) corrected to "Step 3.1"; the net construction, the
   two-sided convergence via density and the involution isometry re-verified.
8. `ex-convolution-on-a-discrete-group` — suppliers rewired (counting-measure lemma,
   $L^2$ Cauchy–Schwarz, square-summable families); a new `[A1]` fact declares AC inherited
   from the density/completeness supplier with exact uses in steps 1.3 and 2.1; the
   absolutely convergent series formula, its agreement with the $L^1$ convolution by density,
   and the norm-one identity $u=c^{-1}\mathbf 1_{\{e\}}$ re-verified.
9. `ex-convolution-on-a-compact-group` — step 1.2 sharpened: both $(f,g)\mapsto h$ and the
   $L^1$ convolution are now stated as continuous bilinear maps $L^2\times L^2\to L^1$
   (using $\|t\|_1\le\|t\|_2$ on the probability space), which makes the density argument
   airtight; the contradictory "Choice cost" note was corrected to the declared `[A1]` path
   through `[F1]`,`[F3]`,`[F5]` first used in step 1.1. The finite-dimensional Schur step is
   proved inline (kernel/image subrepresentations, an eigenvalue of the averaged
   intertwiner from the published algebraically-closed eigenvalue corollary,
   $\operatorname{tr}A=\langle u,z\rangle$ from rank-one traces) — no forward edge to the
   later Schur-orthogonality page.
10. `ex-modular-function-of-the-affine-group-of-the-line` — **unmet choice hypothesis
    repaired in the final pass** (see below): steps 1.2/1.3 applied the change-of-variables
    theorem `[F4]`, which is stated *under countable choice*, while the item assumed nothing;
    the item now declares AC.
11. `cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group` — dependency
    completion (affine example, inversion change of variables, $L^1$ space and Haar-measure
    definitions, Urysohn cutoff) and the witness re-verified: with
    $K=[3/2,7/4]\times[1/4,3/4]\subset U=(1,2)\times(0,1)$ and $f$ a cutoff,
    $\|Jf\|_1-\|f\|_1=\int(a-1)f\,a^{-2}da\,db>0$ because $a-1>0$ on $\operatorname{supp}f$
    and the integrand is strictly positive where $f>0$, so $J$ is not isometric.

### Final-pass repair A — the affine example's choice assumption

`ex-modular-function-of-the-affine-group-of-the-line` used two AC-dependent inputs without
declaring any choice principle: the change-of-variables theorem
`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` states
"Assume the Axiom of Countable Choice", and the modular-function definition
`def-modular-function-of-a-locally-compact-group` states "Assume AC" and declares
`def-axiom-of-choice`. This is exactly the open observation recorded in the Step 3a report
("each B proof should either be choice-free or declare the exact choice principle it
inherits") — the other three B items comply; this one did not.

Repair: the Given now includes AC; `deps` gained `def-axiom-of-choice` and
`def-countable-choice`; a new fact `[A1]` declares the assumption and both uses; steps 1.2
and 1.3 now say the countable-choice hypothesis of `[F4]` is in force by `[A1]` and carry
`[A1]` in their brackets; step 2.1 records that the scalar $c(g)$ is the well-defined one
supplied under AC and carries `[A1]`; the Choice-cost remark states the same path. The
Jacobian computations and the nonunimodularity witness remain choice-free and are described
as such. The claim is narrowed (one extra hypothesis), never widened; the manifest's
scaffold summary is unchanged and remains true, so the pair scope receipt stays current.
Contract: two new `[A1]` citation rows with exact quotes from `def-axiom-of-choice` and
`def-countable-choice`, updated derivations for steps 1.2/1.3/2.1 and updated
`nonempty-choice` boundary row; `--strict` 0 errors, citation fidelity clean. Both this item
and its consumer were re-receipted (`repaired`, confidence 1) at the new hashes.

### Final-pass repair B — nine templated boundary rows

Running the engine's own contract gates (`boundary-audit --fail-on-template`) over
`research/frontier-35-ten-categories-batch-10.proof-contracts.json` surfaced **two
template clusters (9 rows)**, all in this pair: six A items and three B items shared the
verbatim `iff-reverse` dispositions "No converse implication is claimed." / "No converse
claim is part of the example." A templated `not_applicable` row is not a disposition, and
this gate is a stage gate, so each of the nine rows was rewritten to state what that
specific item asserts and why no converse arises (e.g. for
`thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra`: one direction only is
asserted, and nothing claims every Banach $*$-algebra is an $L^1$ group algebra). No
sibling (Frobenius) row was touched: the 9 changed contract entries are exactly the
affected ones, verified by diffing the file before/after. `boundary-audit` now reports
`568` boundary rows, **0** template clusters, 0 contradicted.

### Final-pass repair C — the new supplier's manifest edge

The Step 3b local addition was registered in the batch manifest as an *item*, but its
*consumers* did not name it: the manifest rows of the three rewired consumers still listed
only their scaffold-level `deps`, while their authored frontmatter deps — and their proofs —
do use `lem-counting-measure-on-a-discrete-group`. This matters pre-splice, because
`tools/splice-plan.mjs` copies manifest item objects into `plan-spec.json`
**byte-identically** ("the resulting plan item lists are BYTE-IDENTICAL to the batch
manifests"), and the tool's own licence for exactly this kind of addition
(`authoredLocalAdditions`) reads the *manifest* `deps` when it asks whether every added
supplier "actually feeds another item on its owned page".

Repair: in `research/frontier-35-ten-categories-batch-10.pages.json` the id
`lem-counting-measure-on-a-discrete-group` was appended to the `deps` of exactly the three
consumers — `prop-compact-discrete-and-abelian-groups-are-unimodular`,
`prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` and
`ex-convolution-on-a-discrete-group`. The file's own round-trip format was verified
byte-identical **before** the edit (`json.dumps(d, indent=2, ensure_ascii=False) + "\n"`;
the round-trip with `ensure_ascii=True` is *not* byte-identical, a handoff note worth
correcting), and a structural diff taken at the edit shows exactly those three rows changed,
with every Frobenius row and every page-level field untouched. That diff is a statement
about *this dispatch's* writes only: the manifest is shared and the sibling lane is editing
it concurrently (a Frobenius row later gained `lem-fusion-control-and-centralizer-transitivity`),
so a diff taken afterwards shows that unrelated row as well. Because a receipt binds its
manifest row, the four items whose dependency closure contains a changed row were
re-receipted `repaired` at confidence 1 with fresh item-specific evidence — the three
consumers plus `ex-convolution-on-a-compact-group` (whose supplier row changed) — and all
25 receipts verify current under the tool's own `itemHash`. The pair scope hash is
unaffected, since it maps `{id, kind, title, statement}` only.

### Scaffold observation (not a defect, for Step 4/5 awareness)

`def-convolution-on-cc-and-l1-of-a-group` is a *definition* whose Definition section
asserts existence **and** uniqueness of the bilinear extension of the $C_c$ convolution to
$L^1\times L^1$ and carries the well-definedness argument inline (density plus the norm
bound); it declares `justified_by: []`, so the well-definedness is verified inside the
definition rather than delegated to a separate lemma. This is consistent with the library's
other inline-well-definedness definitions, but it means the mathematical content of the
existence/uniqueness of $L^1$ convolution is not separately minted. If Step 4/5 wants a
separately justifiable item, that would be an owner-scope decision, not a Step 3b edit.

## Item table (26 items; every row authored, checked and receipted)

| item | kind | page | class | decision |
|---|---|---|---|---|
| `lem-right-translation-scales-left-haar-measure` | lemma | A | baseline | repaired |
| `def-modular-function-of-a-locally-compact-group` | definition | A | baseline | accept |
| `thm-the-modular-function-is-a-continuous-homomorphism` | theorem | A | baseline | accept |
| `lem-haar-change-of-variables-under-inversion` | lemma | A | baseline | accept |
| `def-unimodular-locally-compact-group` | definition | A | baseline | accept |
| `lem-counting-measure-on-a-discrete-group` | lemma | A | **auditor-added** | auditor-certification pending |
| `prop-compact-discrete-and-abelian-groups-are-unimodular` | proposition | A | baseline | repaired |
| `def-complex-haar-lp-spaces-and-compactly-supported-functions` | definition | A | baseline | accept |
| `def-compactly-supported-convolution-on-a-group` | definition | A | baseline | accept |
| `lem-convolution-preserves-cc-and-is-associative` | lemma | A | baseline | repaired |
| `lem-l1-convolution-norm-inequality` | lemma | A | baseline | accept |
| `lem-complex-haar-l1-and-l2-are-complete-and-cc-dense` | lemma | A | baseline | repaired |
| `def-convolution-on-cc-and-l1-of-a-group` | definition | A | baseline | accept |
| `def-involution-on-l1-of-a-group` | definition | A | baseline | accept |
| `lem-the-l1-involution-is-isometric-and-reverses-convolution` | lemma | A | baseline | accept |
| `def-banach-star-algebra-without-required-unit` | definition | A | baseline | accept |
| `thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` | theorem | A | baseline | accept |
| `lem-haar-translations-are-strongly-continuous-on-lp-one-and-two` | lemma | A | baseline | accept |
| `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` | theorem | A | baseline | repaired |
| `prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` | proposition | A | baseline | repaired |
| `def-left-and-right-regular-unitary-representations` | definition | A | baseline | accept |
| `thm-regular-representations-are-unitary-and-strongly-continuous` | theorem | A | baseline | repaired |
| `ex-modular-function-of-the-affine-group-of-the-line` | example | B | baseline | repaired |
| `ex-convolution-on-a-discrete-group` | example | B | baseline | repaired |
| `ex-convolution-on-a-compact-group` | example | B | baseline | repaired |
| `cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group` | counterexample | B | baseline | repaired |

25 items carry current `research/frontier-35-ten-categories-step3b-review-<id>.json`
receipts (`repaired` for the 11 rows above, `accept` for the other 14, confidence 1,
item-specific evidence, examined dependency IDs); four of them were re-recorded once more
after repair C changed their dependency closure (still `repaired`). The 26th, the
auditor-created lemma, is covered by the separate certification class (obligation 1 below).

## Local supplier added by this dispatch (1)

- `lem-counting-measure-on-a-discrete-group` — "Counting measure on a discrete group is
  Haar, Haar measures there are its multiples, and integrals against them are sums".
  Statement has three clauses (counting measure is a left and right Haar measure; every
  left Haar measure is a positive multiple $c\,\#_G$, $c=\mu(\{e\})>0$, uniquely; and
  $\int_G H\,d\mu=c\sum_{y\in G}H(y)$ for nonnegative finite-valued and for $\mu$-integrable
  complex $H$), proved in six phases/15 numbered steps from regularity of the counting
  measure, the finite-subcover characterisation of compactness in a discrete space, and the
  simple-integral ladder. It is choice-free (the finite subsets are produced by induction,
  not by selection, and the general AC-assuming Haar uniqueness theorem is deliberately not
  used). Registered in the manifest (A page, position 5), in the coverage record's canonical
  list, and in the batch proof contracts; its three consumers also carry the edge in their
  manifest `deps` (repair C), and the four closure-affected consumers were re-receipted at
  the new hashes.

## Checks actually run (on the files as they now stand, 2026-09-24)

| check | command | result |
|---|---|---|
| explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <26 items>` | **18 checked, 0 failing** (8 definitions carry no proof body) |
| rendering | `node tools/rendercheck.mjs <26 items> research/…-batch-10.pages.json` | OK — 27 files; no wikilink in math, all math parses under KaTeX, frontmatter parses (2 benign `newLineInDisplayMode` warnings) |
| strict proof contracts (pair) | `node tools/proof-contract.mjs research/…-batch-10.proof-contracts.json --strict --items <26 ids>` | **0 errors, 0 warnings, 26/26** |
| strict proof contracts (batch 10) | same, no `--items` | this pair 0/0 at 26/26 after repair C; the batch-wide run currently reports 5 `citation-uses`/`citation-quote-mismatch` errors **inside Frobenius-pair items**, which a sibling repair lane is editing concurrently — none in this pair |
| boundary audit | `node tools/boundary-audit.mjs research/…-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template --json` | exit 0; 568 rows, **0 template clusters**, 0 contradicted, 0 upheld-template (after repair B) |
| citation fidelity | `node tools/citation-fidelity.mjs research/…-batch-10.proof-contracts.json --fail-on-missing-quote` | no missing quote; no widening candidate |
| risk report (routing signal) | `node tools/risk-report.mjs research/…-batch-10.proof-contracts.json --items <26 ids>` | 0 errors, 26 items routed; the single heuristic flag is the auditor-added counting-measure lemma (existence/uniqueness/induction language) — read in full, no defect found |
| finite smoke | `node tools/finite-smoke.mjs research/…-batch-10.proof-contracts.json --items <26 ids>` | 0 errors, 0 checks (no item in this pair carries a finite-model obligation) |
| content policy, item mode | `node tools/content-policy.mjs research/…-batch-10.pages.json` | 71 scoped items, **0 errors, 0 warnings** |
| coverage checklist | `node tools/coverage-checklist.mjs research/…-batch-10.coverage.json --require-destination` | 2 pages, 148 harvested results, **0/0** |
| manifest deps | `node tools/manifest-deps.mjs research/…-batch-10.pages.json` | 71 items, 0 normalized, **0 errors** |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-35-ten-categories` | 52 pages owed and present, **no scope drift** |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — acyclic, no item cycle, no forward reference, no unresolved id (page-level for 510.067/510.068, see obligation 3) |
| audit manifest | `node tools/audit-manifest.mjs research/…-batch-10.pages.json`, plus a 2-page copy restricted to this pair | **0 defects**; on the pair-only manifest, 238 relationships over 26 items (the batch-wide total moves while the sibling pair is edited concurrently) |
| prose check | `node tools/prosecheck.mjs` | OK — no positional claim contradicts the spec (repo-wide `library-scope-denial` warnings are heuristic) |
| dependency sources | `node tools/depsource.mjs research/plan-spec.json` | **0 unresolved**; 0 deps link to an earlier planned page; the single repository-wide "neither" row belongs to another pair and is unchanged by this dispatch |
| source fetch check | `node tools/source-fetch-check.mjs --coverage research/…-batch-10.coverage.json` | **7/7 fetch-verified and resolved** |
| extcheck | `node tools/extcheck.mjs` | exit 0; 48 informational `unproved-on-published` warnings repo-wide, **1 in this pair's closure** (`thm-urysohn-lemma`, see concern 4); 0 naming this pair's items |
| depcheck | `node tools/depcheck.mjs --quiet` | exit 1 repo-wide; **0 rows name any of the 26 items or the 2 pages** (histogram at the final re-run, after repair C: `published-unaudited` 333, `multi-home` 140, `cited-not-in-deps` 128, `published-unchecked` 9, `b-leaf-content` 10, `link-unresolved` 8, `justification-backward` 3, `page-cycle` 1; the repo-wide totals move while sibling lanes edit) |
| frontier dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` | refreshed and deduplicated; batch-10 input is `[]`, 16 batches reviewed, 0 orphaned reviews, 0 edges touching this pair |
| Step 3 decisions | `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase final` | pair scope **closed**; re-verified after repair C, the only open item of this pair is `lem-counting-measure-on-a-discrete-group` |
| auditor certification | `node tools/step3-auditor-items.mjs certify --run frontier-35-ten-categories` | **blocked by a sibling pair's item** at the final re-run — see obligation 1 |

## What this dispatch re-derived, and what it did not

Re-read argument by argument at authoring/receipt time: the modular-function chain
(`lem-right-translation-scales-left-haar-measure` → `def-modular-function-of-a-locally-compact-group`
→ `thm-the-modular-function-is-a-continuous-homomorphism` → `lem-haar-change-of-variables-under-inversion`),
the $L^1$ algebra chain (the two convolution definitions, closure/associativity, the norm
inequality, completeness/density, the involutions and the Banach-$*$ theorem), the
approximate identity, the unit-iff-discrete proposition (both directions), the regular
representations theorem, and all four B items including the inline Schur computation. The
final re-verification pass re-read the edited passages and re-ran every gate above; it did
**not** re-derive the unedited accepted items (`def-unimodular-locally-compact-group`,
`lem-l1-convolution-norm-inequality`, `def-involution-on-l1-of-a-group`,
`lem-the-l1-involution-is-isometric-and-reverses-convolution`,
`def-banach-star-algebra-without-required-unit`,
`thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra`,
`lem-haar-translations-are-strongly-continuous-on-lp-one-and-two`,
`def-left-and-right-regular-unitary-representations`) line by line, and this report does not
claim otherwise. Those carry item-specific `accept` receipts and pass every mechanical gate.

## Cross-batch dependency input (batch 10)

`research/frontier-35-ten-categories-batch-10.cross-batch-dependencies.json` is preserved as
the empty array. That is correct for this pair: every declared prerequisite of the A and B
page is either an item of this pair or an already-published library item from an earlier
frontier; no declared prerequisite is supplied by another page of this run. The Frobenius
pair's rows were not touched. The unified ledger was refreshed after the local edits
(16 reviewed batches; 0 edges touching this pair).

## Published concerns and observations for the owner's ledger (read-only here)

This dispatch ran no `--owner` action and did not edit
`research/published-consumer-supplier-ledger.md` or any published item.

1. **`thm-normalizer-condition-for-finite-nilpotent-groups` — previous Step-1 finding now
   closed, not a live defect.** The batch-10 Step-1 notes recorded that its proof skipped
   the commutator computation from "normalizes $H$ modulo $Z_{i-1}$" to
   "$N_G(H)\setminus H$". The current published text (mtime 2026-09-24 15:49 local,
   `verification.audited: 2026-09-24`) contains the missing step: `[L3]` states
   $zhz^{-1}=[h,z]^{-1}h$ with $[h,z]\in K_{i-1}\le H$, and step 2.1 uses it. No repair is
   requested. This pair does not consume the item.
2. **Terminology-scope observation (suspicion, low severity, not a confirmed defect).**
   `def-continuous-and-unitary-representation-of-a-compact-lie-group` (published) fixes
   "$G$ a compact Lie group" in its first sentence; its infinite-dimensional clause is
   written generically. This pair's `def-left-and-right-regular-unitary-representations`
   uses that terminology for an arbitrary LCH group and cites the compact-Lie definition
   for it, and `thm-regular-representations-are-unitary-and-strongly-continuous` `[F4]`
   quotes it as "the terminology of the cited definition". The mathematics is
   self-contained: the item spells out that a representation is a homomorphism
   $\pi:G\to U(H)$ and is strongly continuous when $g\mapsto\pi(g)\xi$ is continuous, with
   "unitary operator" on infinite-dimensional $H$ defined as an invertible linear isometry,
   and it points to the published compact-Lie analogue
   `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`.
   Honest assessment: this is a scope transfer of *vocabulary*, not a gap in the argument;
   the Step 3a reviewer explicitly left the choice "cite or add locally" to the author. If
   the owner wants strict scope fidelity, the remedy is a local definition of "strongly
   continuous unitary representation of an LCH group" on this A page before its consumers —
   a content addition with its own manifest/coverage/contract rows and re-receipts of the
   two consumers; this dispatch judged the existing self-contained statement sufficient and
   did not mint it. Confidence: not a defect (medium-high); flagged so Step 5 can decide.
3. **Repo-wide depcheck debt (not this pair's).** At the final re-run `depcheck --quiet`
   exits 1 with 333 `published-unaudited`, 140 `multi-home`, 128 `cited-not-in-deps`, 9
   `published-unchecked`, 10 `b-leaf-content`, 8 `link-unresolved`, 3
   `justification-backward` and 1 `page-cycle` row, none of which names any of this pair's
   26 items or 2 pages (the repo-wide totals move while sibling lanes edit). The
   `b-leaf-content` rows belong to other pairs (e.g. the
   group-ring/regular-local-rings/Brauer areas); they are the same class of defect this
   dispatch fixed locally for its own three consumers and should be routed to their owners.
4. **One informational extcheck warning inside this pair's closure.** `thm-urysohn-lemma`
   is listed as "PUBLISHED and rests (direct) on material not proved in this library". The
   relation is its `external_refs: [rem-urysohn-lemma-not-a-zf-theorem]` — a properly
   shaped recorded remark (kind remark, `proved_here: false`, `precheck: n/a`, cited) about
   the ZF/choice strength of Urysohn's lemma, not a load-bearing dependency; the theorem
   itself is proved in the library under DC. `extcheck` documents this row class as
   "correct and marked, but worth seeing every run". No action requested.
5. **Structural pre-splice conditions (engine-level, expected).** `content-policy
   --manifest-only` over all batch manifests is red with 524 `batch-item-already-exists`
   rows (26 of them this pair's), because authored item files exist that the plan does not
   yet list; and `research/plan-spec.json` still carries empty item arrays for orders
   510.067/510.068. Both are resolved by Step 4's mechanical splice, not by authoring. The
   dispatch ran the item-mode content policy (the half that enforces authored content) and
   it is clean.

## Open obligations at handoff

0. **Touches ledger left to the engine (checked, not taken).**
   `research/frontier-35-ten-categories-touches.json` holds only the engine's `pre-author`
   snapshot (2026-09-24T03:45:00.882Z). The `3b-author` stage's artifact list
   (`pairAuthorArtifacts`: batch manifest, proof contracts, both library pages, every item
   file) does not include the touches ledger; the post-author snapshot is the engine's own
   `4-baseline` stage. Nothing was run here to move it.
1. **Auditor certification for `lem-counting-measure-on-a-discrete-group` is blocked by a
   sibling pair's item (owner/engine action required; not touched here).**
   `node tools/step3-auditor-items.mjs certify --run frontier-35-ten-categories` fails with
   `def-induced-class-function-on-a-finite-group: changed after its latest successful Step 3
   auditor/author result`. Evidence, computed on the current files: that Frobenius-pair
   item's input closure has 936 paths; every item file in it predates the Frobenius author
   window (result `step3b-pair-frobenius-groups-and-the-normal-complement-theorem-f3f03e11284b1086`,
   ended 2026-09-24T05:45:22.330Z), but the shared plan carrier `research/plan-spec.json`
   was rewritten at **2026-09-24T06:10:59.628Z**, i.e. after that window, and
   `itemInputPaths` treats a plan item that is not in the run manifests as a live input
   (unlike the batch manifests, which the tool explicitly filters out). The same cause
   defers the other six Frobenius additions and the additions of
   `homogeneous-resultants-and-projective-intersection-length` and
   `diagonals-separated-morphisms-and-valuative-uniqueness`; the engine's recovery path
   certified the 4 additions whose windows already postdate that rewrite
   (`research/frontier-35-ten-categories-step3-auditor-certifications.json`,
   at 2026-09-24T07:00:38Z: `lem-path-conjugation-isomorphism-of-fundamental-groups`,
   `lem-the-closed-disk-is-a-manifold-with-boundary`,
   `lem-ag-base-change-of-standard-smooth-presentations`,
   `lem-ag-standard-smooth-fibre-regular-parameters`). This item's own certification is
   mechanically in order otherwise (it is absent from
   `research/frontier-35-ten-categories-step3-auditor-baseline.json` both as a manifest item
   and as an item file on disk, its own file and all 889 closure paths predate the current
   dispatch window, and its declared dependencies match its hash), so it should certify on
   the first tick after this dispatch's result lands, once the sibling obstruction is gone.
   Proposed remedies for the owner, in order of preference: (a) write the existing
   `research/frontier-35-ten-categories-step3b-owner-def-induced-class-function-on-a-finite-group.json`
   recertification record that `currentOwnerRepair` accepts for the Frobenius item; or
   (b) re-run a short successful author dispatch for the Frobenius pair so a result window
   postdates 06:10:59Z; or (c) treat `research/plan-spec.json` like the batch-manifest
   carrier in `itemInputPaths` (a tool change with tests, owner-owned). This dispatch takes
   no action on another pair's item.
   **Status note (final re-run).** While this report was finalised, a sibling repair lane was
   editing exactly these Frobenius items (local mtimes: `lem-local-sylow-conjugacy-ascent-for-fusion`
   17:14:26, `lem-automizer-condition-gives-centralizer-transitivity` 17:15:36,
   `lem-p-automizer-condition-implies-fusion-control` 17:16:07,
   `lem-local-normal-p-complements-force-control-of-fusion` 17:17:35), and the batch-wide
   `proof-contract --strict` run currently shows 5 citation errors inside those items. The
   lane has also added a dependency edge to a Frobenius row of the shared batch manifest. The
   obstruction may therefore clear without action from this lane; remedies (a)–(c) stand if
   it does not.
2. **Stage-level owner hold outside this pair.** The `3b-author` blocker recorded in
   `state.json` is the `eastons-theorem-and-cardinal-invariants-of-the-continuum` stalemate
   ("covered but artifact-incomplete and no longer running", raised 06:24:58Z), plus the
   gate failures owned by other pairs' certifications. Neither is this pair's; this pair's
   scope is closed and its items are complete.
3. **Pre-splice plan rows (Step 4).** `research/plan-spec.json` still shows orders 510.067
   and 510.068 with empty item arrays; the 26 authored IDs enter the plan at the Step 4
   splice, together with the 524-item `batch-item-already-exists` condition of other pairs.
   Nothing for authors here; reported so the post-splice validation is not mistaken for a
   new mismatch.
4. **Manifest rows vs authored frontmatter deps (repo-wide, pre-splice).** Measured on the
   current manifests: for **23 of this pair's 26 items** the batch manifest lists fewer
   dependency ids than the item's authored frontmatter (the item files remain the
   authoritative, complete lists — e.g. `ex-modular-function-of-the-affine-group-of-the-line`
   has 11 authored deps and 3 manifest deps). The same pattern is present in other batches
   (measured the same way: batch 2, 22 of 31 rows; batch 3, 33 of 33; batch 9, 19 of 30;
   batch 14, 11 of 26; smaller counts in 1, 6, 11, 16, 17), while some batches are fully
   synced. Since `splice-plan` copies manifest item objects byte-identically into the plan,
   the spliced plan will under-declare those edges. This dispatch repaired only the edge it
   introduced (repair C) and left the rest alone; full reconciliation — copying the authored
   `deps` into the plan items at splice time, or ruling that the manifest is the plan-level
   carrier and the frontmatter the proof-level one — is a Step 4 serial-reconciliation or
   owner decision, not a pair edit, and re-syncing here would churn every receipt hash for
   no gate that currently checks it.
5. **Nothing else is open for this pair.** All 26 items are authored at the manifest's
   promised claims, the A page carries 22 and the B page 4 items, the local supplier is
   registered in manifest/coverage/contracts, the pair scope decision is current, all 25
   non-auditor items hold current `accept`/`repaired` receipts, and every gate listed above
   is green for this pair's files.
