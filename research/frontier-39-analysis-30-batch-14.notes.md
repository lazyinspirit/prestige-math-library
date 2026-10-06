# Batch 14 construction handoff — frontier-39-analysis-30 (Weak Elliptic Maximum Principles and Holder Regularity)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-20
(`research/plan-pde-track.md` L1883–L1934 and the PDE-20 additions table at
L3717–L3733; the task file points at L56, whose id mention resolves to the
section located here). A page:
`weak-elliptic-maximum-principles-and-holder-regularity` (order 458.037,
`pde`); B page:
`weak-elliptic-maximum-principles-and-holder-regularity-examples` (458.038).
Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-14.pages.json` (31 items: 22 on A,
9 on B), the coverage record
`research/frontier-39-analysis-30-batch-14.coverage.json` (2 pages, 66
harvested results, 6 fetch-stamped sources per page, 12/12 stubs verified),
the cross-batch input
`research/frontier-39-analysis-30-batch-14.cross-batch-dependencies.json`
(33 rows: 1 page + 32 item; see the replay section below), the 31 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not
exist (checked before construction). The Alpha drift verdict for this page is
**no-drift**: `research/frontier-39-analysis-30-alpha-step1-drift.md` (section
`weak-elliptic-maximum-principles-and-holder-regularity`, order 458.037)
directs the build to read Simon's Lecture 17, Theorems 1–2 and Lemmas 3–4,
printed pp. 199–209, states that the logarithmic energy and moment estimates
supply the positive/negative-power bridge locally, confirms that no additional
BMO page edge is needed, and requires the scalar, coefficient, forcing and
exponent hypotheses to be stated at each Harnack/regularity conclusion. All
three directions were followed; the manifest records the class of each item.

## Design, plan and published-content reconciliation

1. **Plan requires vs the design prose.** `research/plan-spec.json` (order
   458.037) declares exactly one page prerequisite:
   `schauder-and-lp-elliptic-estimates` (in-run draft, batch 13). The design
   prose additionally names PDE-11–PDE-19, MT-8, MT-11, MT-17 and FA-10. The
   plan controls; every additional input is consumed at item level and is
   either published or an in-run draft of batches 4, 10, 12 and 13, recorded
   as 33 item-level cross-batch rows. **Conflict recorded.**
2. **Design items 3–4 vs 5–6 (internal order).** The design lists the weak
   maximum principle (3) and the comparison corollary (4) before the
   truncated Caccioppoli inequality (5) and the level-set step (6). The
   forcing clause of item 3, which the design requires ("controlled by its
   positive boundary trace **and forcing**"), is proved by the same level-set
   iteration that carries items 5–6, so the manifest places items 5–6 (plus
   the added iteration lemma) before items 3–4 in build order, and the
   dependency levels make the order explicit. Design statement, scope and
   proof route are preserved; only the internal construction order changed.
   **Conflict recorded.**
3. **Addition subsumed.** The additions-table entry
   `lem-de-giorgi-measure-decay-from-energy-and-sobolev` (L3716) and design
   item 6 `lem-sobolev-level-set-iteration-step` are one obligation; it is
   scaffolded once under the design ID, with the additions-table name
   recorded here as subsumed. Nothing else in the additions table was
   dropped: `lem-positive-part-of-a-zero-trace-function-has-zero-trace`,
   `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions`,
   `lem-nonlinear-geometric-iteration-sequence-converges-to-zero`,
   `lem-geometric-oscillation-decay-implies-a-holder-modulus`,
   `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range`,
   `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds`,
   `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution` and the
   four B additions are all present.
4. **[E] Evans is a print cross-check only.** The design's locators
   "[E] §§6.2.1 and 6.3.2" could not be checked against an accessible full
   text from this environment, and the plan states that the AMS page is a
   bibliographic source, not an open-access download. No item claims to have
   read Evans; the statements and proofs are backed by [Si], [K1], [K2], [V],
   [T] and [S]. Gilbarg–Trudinger was not used as backing.
5. **[ACM] not used.** The plan's SNS handle
   (`https://ricerca.sns.it/handle/11384/81586`) and the publisher's open
   Unipd record (`https://research.unipd.it/retrieve/.../PDE_IIdraft.pdf`)
   both answer with a Cloudflare bot wall from this environment, and the SNS
   preprint page links only to the published book. The Caccioppoli/decay
   content the design assigns to ACM Chapter 2 is instead fully covered by
   [Si] Lectures 17–18, [K1], [K2] and [V]. No item rests on ACM and ACM is
   not cited in the coverage file, so no source-drop record is claimed.
6. **Locator corrections recorded.** (i) The B-addition source "[T] Ch. 10
   §2" for the degenerate-ellipticity counterexample does not match the
   archived Teschl manuscript — Chapter 10 §2 is the Lax–Milgram weak
   formulation; the counterexample is verified inline against the published
   definitions and the uniform-ellipticity hypothesis is sourced to [T]
   Chapter 5 §8 and [K1]. (ii) "[PJ] §7.3" was not fetched and is not used;
   the example is self-contained.
7. **Principal-part convention.** The De Giorgi block (Caccioppoli, level-set
   step, local boundedness, oscillation reduction, Holder regularity) is
   stated for the principal-part operator $-D_i(a^{ij}D_ju)$ with measurable
   bounded symmetric uniformly elliptic $A$, matching the design's "bounded
   measurable principal coefficients". Lower-order terms appear in the
   maximum-principle items under their explicit sign hypotheses (the weak
   sign condition (S), or $b\equiv0$, $c\ge0$), and in the logarithmic/Moser
   items for supersolutions. The forcing classes are $L^q$ with $q>n/2$ on
   A7(ii), A10, A16 and A18, and the design's warning that bare $L^2$ forcing
   is not enough in every dimension is respected.
8. **B-page names.** All five design B items and all four additions are
   present; the additions-table names are kept for the additions.

## Sources and harvest

Six independent treatments back the pair; every entry carries a `fetch_verified`
stamp from `tools/source-fetch-check.mjs --stamp` (12/12 source stubs verified,
0 drops). Simon's scan is a two-logical-pages-per-sheet reproduction: 118
physical sheets, printed pages numbered to 223; locators use the printed page
numbers and the coverage note records the layout.

- [Si] Leon Simon, *Lectures on Partial Differential Equations* (Stanford),
  `https://math.stanford.edu/~lms/lecs-on-pde.pdf` — Lecture 13, printed
  pp. 147–158; Lecture 17, printed pp. 199–210; Lecture 18, printed pp. 211–222.
- [K1] Brian Krummel, *DeGiorgi-Nash lecture notes* (15 March 2016),
  `https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf` —
  Theorems 1–2, Corollary 1 and the Moser proof with (7)–(23), pp. 1–9.
- [K2] Brian Krummel, *Consequences of De Giorgi-Nash-Moser* (4 March 2016),
  `https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf` —
  Theorems 3–5, Corollaries 1–3 and the oscillation inequality (7), pp. 1–7.
- [V] Bozhidar Velichkov, *Elliptic PDEs: Teorema di De Giorgi* (Pisa, in
  Italian), `https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf`
  — Teoremi 1–3, Lemmi 4–6 and 9–12, Proposizione 11, pp. 1–7.
- [T] Gerald Teschl, *PDE: From Classical to Modern* (archived author
  manuscript), `https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`
  — Ch. 5 §8, pp. 139–144; Ch. 10 §§1–2, pp. 223–240.
- [S] Armin Schikorra, *Partial Differential Equations* (2019 notes),
  `https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf` — Chapter 2
  §§II.1–II.2, printed pp. 40–49, with §I.2.5/Corollary I.2.7 cross-checked.

Dispositions over the 66 harvested results: 44 included, 12 inline, 3
already-published, 3 deferred (each with a resolving destination), 4
out-of-scope (each with a specific reason). A heading-by-heading reading is in
the coverage file.

## Choice and axiom ledger

- **Countable Choice** is declared where the Sobolev/measure interfaces are
  used: A1 (definition, CC only), A2–A5, A7–A12, A14–A16, A18–A21
  (`def-countable-choice` in every such `deps` list).
- **The Axiom of Choice** is declared by every proved item whose route
  consumes the in-run drafts of batches 4, 10, 12 or 13 (whose own statements
  carry AC): A2–A5, A7–A12, A14–A16, A18–A21; `def-axiom-of-choice` is in
  every such `deps` list and the reason names the use. Step 3 must re-check
  these attributions against the final supplier statements.
- A6 (the discrete iteration lemma), A13 (oscillation-to-Holder conversion),
  A17 and A22 are choice-free or not-applicable; A6 and A13 mention no
  choice principle and list none.
- No consumer of this pair reaches `deferred-set-theory-beyond-choice`
  through any `deps`, `justified_by` or `forward_refs` path; no such path
  exists in the manifest graph.

## Dependency notes and cross-batch input

- Dependency labels were recomputed with the engine's own algorithm over the
  whole run (`tools/item-dependency-levels.mjs`): levels of this batch's items
  run 0–14, all labels match the computed values, and there is no cycle.
  Because batches 15–20 are still unscaffolded, the run-wide `check` exits 1
  with 12 `empty scaffold inventory` errors that do not mention any batch-14
  item.
- The cross-batch input records the one page edge
  (`weak-elliptic-maximum-principles-and-holder-regularity` →
  `schauder-and-lp-elliptic-estimates`, batch 13) and 32 item edges whose
  suppliers are A-page drafts of batches 4 (11 edges: Poincare, Sobolev,
  critical embedding, conjugate exponent), 10 (14: divergence-form operator,
  weak Dirichlet solution, weak-form consistency, form boundedness), 12 (6:
  local weak solution formalism) and 13 (1: Holder-scale definition). All are
  `status: open`; none is treated as published. `tools/frontier-dependency-ledger.mjs
  refresh` marks batch 14 reviewed with no orphaned reviews.
- `tools/splice-plan.mjs --verify` is run-wide red (expected at Step 1). For
  this batch it reports the two manifest-vs-plan inventory lines and **31
  item-level edges into unbuilt pages** (after the replay repairs below):
  `sobolev-poincare-and-morrey-inequalities` (11: the
  Poincare/Sobolev/critical-embedding/conjugate-exponent items),
  `lax-milgram-and-weak-elliptic-solutions` (14: the divergence-form operator,
  weak Dirichlet and classical-to-weak suppliers) and
  `interior-and-boundary-sobolev-elliptic-regularity` (6: the local weak
  solution definition). These are genuine uses of pages licensed only
  transitively (458.037 → 458.035 → … → 458.025), exactly as the batch-13
  notes record for the same licence; Step 4 must either add the direct
  `requires` edges or accept the transitive licence. No page, pair or ordering
  was changed here.
- The design's own "Hard proof obligations" are honoured: the page names the
  iteration lemmas (no "by De Giorgi iteration" hiding the recurrence); the
  Moser negative-power tests are carried by
  `lem-moser-iteration-for-positive-supersolutions` through the regularised
  $u+\varepsilon$ route; essential extrema are used before regularity creates
  a representative; and weak boundary inequalities are expressed by the
  positive part lying in $H^1_0$, never by pointwise boundary values.

## Checks actually run (exact results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-14.pages.json`
  → exit 0, "31 item(s), 0 missing, 0 error(s)".
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  (whole run) → exit 0, "665 scoped item(s), 0 error(s), 0 warning(s)".
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → exit 1 with 12 `empty scaffold inventory` errors for batches 15–20 and
  **no** error for any batch-14 item (labels and cycle check clean).
- `node tools/coverage-checklist.mjs --require-destination research/frontier-39-analysis-30-batch-14.coverage.json`
  → exit 0, "2 page(s), 66 harvested result(s), 0 error(s), 0 warning(s)".
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-14.coverage.json --stamp`
  → exit 0, "12/12 source(s) fetch-verified (12 newly stamped)"; check mode
  afterwards: "12/12 source(s) fetch-verified".
- `node tools/validate-plan.mjs research/plan-spec.json --repo .` → exit 0,
  "declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 1420
  page(s) with item lists" (247 planned pages still carry no item list).
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` → exit 1
  (run-wide, expected at Step 1); the batch-14 findings are the 32 item-level
  edges into unbuilt pages listed above.
- `node tools/fwdcheck.mjs --quiet` → exit 0 ("every forward reference is
  declared, points strictly forward, …"), with pre-existing
  `unproved-on-published` warnings on unrelated published items.
- `node tools/extcheck.mjs --quiet` → exit 0.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → exit
  1 solely because of the 12 empty-batch inventories; of 665 run items, 665
  have closed readiness records and there is **no** batch-14 work item.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → exit 0; batch 14 in `reviewed_batches`, `orphaned_reviews: []`.

## Unresolved findings and Step-3 notes

1. **A7 clause 2 (forcing) has no verbatim source for the boundary form.**
   The homogeneous clause is [Si] Lecture 13, Theorem 4; the forcing clause
   must be written by the author from [K1] Theorem 1 and [Si] Lecture 18,
   Theorem 2 (the scaling reduction normalising the forcing below the
   iteration threshold) applied on $\Omega$ with the global $H^1_0$ Poincare
   and Sobolev inputs. The author must display the $L^q$–$L^{q'}$ Holder step,
   the threshold $q>n/2$, and the dependence of $C$ on $\Omega$; if it cannot
   be closed as stated, escalate rather than silently weakening the forcing
   class.
2. **A5's $n=2$ clause.** The clause uses
   `thm-critical-sobolev-embedding-into-every-finite-lq`; Step 3 must confirm
   its exact hypotheses (bounded domain versus $\mathbb R^n$) before using it
   in place of the $2^*$ embedding, and restrict the clause if needed.
3. **A15/A16 constants.** The exponent $p_0$ and the negative-power constants
   are to be transcribed from [K1] displays (7)–(13); the source's constants
   depend on the smallness quantity $\nu$ of its condition (2), and the
   coverage records that the sourced statement uses that class. The weak
   Harnack range is exactly $0<p<n/(n-2)$ and the companion remark forbids
   restating it for arbitrary $p$.
4. **Choice ledger on in-run suppliers.** The AC/CC declarations above follow
   the current draft statements of batches 4, 10, 12 and 13; Step 3 must
   re-verify each supplier's final choice ledger before authoring, and Step 5
   should check the same for the counterexamples that consume them.
5. **No source-resolution drops.** All twelve source stubs were fetchable in
   full; the [ACM] non-use is recorded in item 5 of the reconciliation
   section, affects no item, and asserts no reading.

## Replay verification and repairs (2026-10-04)

This batch was re-dispatched by the engine (the attempt-1 process had been
paused before its exit receipt was recorded). The artifacts on disk were
therefore audited rather than rebuilt: the PDE-20 design and additions table
and `plan-spec.json` were re-read, all 31 manifest entries were re-read against
their declared suppliers, the whole check suite was re-run, and every Step-1
record was re-validated. The audit found five mathematical defects, all in
B-page entries, and seven items were repaired and re-recorded. No A-page
statement, dependency edge or source record was changed by the replay.

**Repairs (exact items).**

1. `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions` —
   the verification route had the integration-by-parts sign reversed
   ($a_0(u,v)=4\int v\ge0$). Corrected to
   $a_0(u,v)=-4\int_\Omega v\,dx\le0$, which is the subsolution inequality;
   the item is also routed through
   `lem-classical-solutions-satisfy-the-weak-formulation`, whose hypotheses
   ($n\ge2$, $u=|x|^2-1\in C^2(\overline\Omega)\cap H^1_0(B_1)$) hold.
2. `cex-weak-maximum-principle-needs-the-zero-order-sign` — the one-dimensional
   eigenfunction $u=\sin x$ cannot be consumed by the batch-10
   classical-to-weak lemma ($n\ge2$, $u\in H^1_0$). Moved the counterexample to
   the square $(0,\pi)^2$ with $u(x)=\sin x_1$ and $L=-\Delta-1$; the lemma now
   applies and the essential supremum is still $1$ against
   $\sup_{\partial\Omega}u^+=0$.
3. `cex-harnack-requires-nonnegativity` — the same lemma had been applied to
   $u=x_1\notin H^1_0(B_1)$. Replaced by a direct verification (first Green
   identity `cor-first-green-identity-on-a-bounded-c-one-domain` on
   $C_c^\infty$ tests, extended by density of $C_c^\infty$ in $H^1_0$), and the
   refuted claim is now stated for a positive constant $C$ so that the single
   affine counterexample refutes it (a constant solution forces $C\ge1$
   anyway).
4. `cex-harnack-estimate-needs-an-additive-forcing-term` — same misapplication
   ($u=|x|^2/(2n)\notin H^1_0$), replaced by the direct first-Green-identity
   verification $a_0(u,v)=\int(-1)v$ for $v\in H^1_0(B_1)$. The statement and
   the additive-term comparison are unchanged.
5. `cex-global-harnack-comparison-needs-connectedness` — same misapplication,
   replaced by the direct observation that the piecewise constant $u$ has
   vanishing weak gradient. The in-run mechanism lemma
   `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds` is now a
   declared dependency, so the item's `dependency_level` rose 12 -> 13.
6. `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets`
   — counterexample/statement mismatch: $u(x)=x_2$ is not nonnegative on the
   ball, and the matrix $\operatorname{diag}(1,0)$ does not satisfy the
   lower-bound hypothesis as the refuted statement was worded. Repaired to the
   design's form: the false claim is now that the strong maximum principle
   survives positive-semidefinite (degenerate) coefficients, and the
   counterexample is the nonnegative $u=|x_2|$, whose zero set $\{x_2=0\}$ is a
   nonempty interior line, with the weak identity
   $\int_{B_1}a^{11}D_1u\,D_1v\,dx=0$. The stale, unfetched `[PJ]` citation was
   removed; deps trimmed to the five actually used.
7. `ex-measurable-coefficients-with-a-holder-regular-weak-solution` — the 1D
   model of the design's "piecewise constant radial coefficient" also cited the
   $n\ge2$ De Giorgi--Nash theorem outside its scope. Rebuilt as the radial
   annulus example $\Omega=\{\tfrac14<|x|<1\}$, $a=1$ resp. $4$,
   $u=\log|x|$ resp. $\tfrac14\log|x|-\tfrac34\log2$: $u$ is Lipschitz,
   continuous across $|x|=\tfrac12$, with radial derivative jumping from $2$ to
   $\tfrac12$, and the divergence-free flux $a\nabla u=x/|x|^2$ makes $u$ a
   weak solution by the published Gauss-Green formula. The De Giorgi--Nash
   dependency is now in scope.

All seven items were re-recorded with
`node tools/step1-decisions.mjs record` (decision `ready`, the current
dependency arrays, and reasons naming the repair and the examined suppliers);
the other 24 records were preserved unchanged.

**Cross-batch input.** The replay removed the three now-stale
`-> lem-classical-solutions-satisfy-the-weak-formulation` reviews and added the
two new `-> def-local-weak-solution-for-a-divergence-form-operator` reviews.
`research/frontier-39-analysis-30-batch-14.cross-batch-dependencies.json` now
has 33 rows (1 page + 32 item); `tools/frontier-dependency-ledger.mjs refresh`
reports batch 14 reviewed, `orphaned_reviews: []`, and all 33 batch-14 edges
carry a review.

**Checks re-run after the repairs (actual results).**

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-14.pages.json`
  → exit 0, "31 item(s), 0 normalized, 0 error(s)".
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → exit 1 with the same 12 `empty scaffold inventory` errors for batches
  15-20 and **no** error for any batch-14 item; recomputed levels match every
  label (one intentional label change, item 5 above).
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → exit 0, "665 scoped item(s), 0 error(s), 0 warning(s)".
- `node tools/coverage-checklist.mjs --require-destination research/frontier-39-analysis-30-batch-14.coverage.json`
  → exit 0, "2 page(s), 66 harvested result(s), 0 error(s), 0 warning(s)".
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-14.coverage.json`
  → exit 0, "12/12 source(s) fetch-verified".
- `node tools/validate-plan.mjs research/plan-spec.json --repo .` → exit 0.
- `node tools/fwdcheck.mjs --quiet` → exit 0; `node tools/extcheck.mjs --quiet`
  → exit 0.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → 665
  of 665 items closed; only the 12 empty-batch inventories for batches 15-20
  remain open.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` → exit 1
  (run-wide, expected at Step 1); for this batch the findings are the two
  manifest-vs-plan inventory lines and the 31 item-level edges into unbuilt
  pages (11 + 14 + 6) listed above.

The unresolved Step-3 findings in the previous section still stand (the
forcing clause of
`thm-weak-maximum-principle-for-coercive-divergence-form-equations`, the $n=2$
clause of `lem-sobolev-level-set-iteration-step`, the Moser constant
transcription, and the re-check of the in-run suppliers' choice ledgers).


## Owner scope repair integration

The owner repair replaces the weak-maximum counterexample by the smooth radial eigenfunction u(x)=sin|x|/|x| on B_pi(0) in R^3, for L=-Delta-1. It directly verifies a scalar weak solution with zero boundary data and positive interior supremum. The companion scalar-systems remark now states only the supported limitation: scalar De Giorgi theory does not apply verbatim to systems. Coverage records the added De Giorgi source scope.


## Owner follow-up — manifest dependency and proof-contract reconciliation (2026-10-05)

A full item-frontmatter comparison found 20/31 rows whose page-manifest deps differed from the authored item deps. Exact added and removed IDs for every row are in research/frontier-39-analysis-30-batch-14-metadata-dependency-reconciliation.json. The manifest now matches all 31 current item dependency arrays. The added edges occur in current item frontmatter and are cited in the item text except the explicitly recorded vocabulary/assumption cases; the removed edges were not cited in the current item. This reconciliation changed deps metadata and seven dependency_level labels, but no Statement, title, item inventory or page scope changed.

The four owner-assigned rows were checked individually. The finite interior-ball chain and scale-correct local boundedness items already matched their current item dependency arrays. The weak maximum principle added the p=1 Gagliardo–Nirenberg–Sobolev supplier, the W^{1,p}_0 closure definition and the Sobolev-space definition, and removed the unused Caccioppoli and level-set entries. The disconnected-domain counterexample added the uniform-ellipticity and connected-space definitions and the Axiom of Choice, and removed the unused H^k notation.

The chain item had an existing proof-layout defect: its numbered 2.1 argument was split across blank-line paragraphs, leaving the tags detached. The same mathematical argument is now a single paragraph, and its proof contract was regenerated. Contracts were also regenerated for the weak maximum principle and the connectedness counterexample; the scale-correct forcing item was unchanged. Focused proof-layout passes for the four assigned items: 4 items, 16 steps, 0 defects. Recomputed levels against the full 929-item run graph; all 31 B14 manifest labels now match. The seven level updates were: weak maximum principle 7→6, weak comparison 8→7, strong maximum principle 13→12, smooth classical-maximum example 8→7, zero-order-sign counterexample 8→7, degenerate-ellipticity counterexample 14→13, and essential-supremum example 10→12. The page scope hash is unchanged because no Statement, title or item inventory changed. Current B14 cross-batch ledger has 62 rows (61 verified, one removed, none open). Existing Step-3 review states on the four assigned items are chain=repaired, weak maximum=escalate, scale-correct forcing=repaired, connectedness counterexample=repaired; their receipts are stale after these input updates. The weak-maximum mathematical escalation remains for its separate proof issues. No Step-1 readiness record or Step-3 receipt was written, and no gates or tests were run.
