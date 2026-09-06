# frontier-32 · beta · batch 17 scaffold notes

## Scope, controlling design, and drift check

This batch changes only `frontier-32-batch-17.pages.json`,
`frontier-32-batch-17.coverage.json`, and this note.  It does not modify the
plan, any library or item content, workflow state, or another batch.

The controlling design is RG-3 in
`research/plan-representation-theory-groups-track.md`, lines 305–343.  Its A
page, B companion, order `510.035`/`510.036`, and prerequisite
`brauer-induction-and-elementary-subgroups-examples` agree with the dispatch
and `research/plan-spec.json`; no design-versus-spec drift is present.  The A
scaffold has 15 items and the B scaffold has 4, so no A-page split is needed.

The design inventories an item named
`def-splitting-field-for-a-finite-group`.  That exact id is already a
published item, so it is retained as a dependency rather than duplicated.
`lem-base-change-of-intertwiner-spaces` is the one added bridge: the design's
hard proof plan expressly requires base-changing Hom spaces, and the bridge
makes that dependency authorable rather than implicit.  Thus the A page still
has the designed 15-item scale without silently reminting a published claim.
Every one of the 19 new manifest objects has an explicit `deps` array.

## Read sources and URL verification

Both complete PDF treatments were opened at their recorded HTTP(S) URLs in the
web reader on 2026-09-06; the reader reported 71 pages for Wiese and 176 pages
for Zheng.  Their tables of contents, exact read ranges, every named heading
or result in those ranges, and each result's disposition are recorded in the
coverage file.  They are independent full lecture/course-note treatments with
harvestable contents.

| Source | Exact URL | Range read and use |
| --- | --- | --- |
| Gabor Wiese, *Galois Representations* | https://math.uni.lu/wiese/notes/GalRep.pdf | Contents PDF p. 2; §2.2, printed pp. 27–29/PDF pp. 26–29; §2.3, printed pp. 30–32/PDF pp. 29–31; §2.5, printed pp. 37–40/PDF pp. 36–39.  This is the primary route for Hom base change, Galois orbits, splitting fields, endomorphism division algebras, realizability, and the two index descriptions. |
| Weizhe Zheng, *Lectures on Algebra* | https://server.mcm.ac.cn/~zheng/algebra.pdf | Contents PDF pp. 2–3; §4.3 from Assumption 4.3.1 through the start of Lemma 4.3.6, printed pp. 145–151/PDF pp. 150–151; §4.6 from Corollary 4.6.13 through Proposition 4.6.15, printed pp. 165–166/PDF pp. 170–171.  This independently gives the scalar-extension decomposition, character formula, splitting criterion, and character-field centre. |

The sources are not being treated as unread citations: the coverage ledger
enumerates their own result labels and gives each an `included`, `inline`,
`already-published`, or specifically justified `out-of-scope` disposition.
The latter includes Zheng's positive-characteristic proposition and the
unneeded character-orthogonality/central-idempotent route, rather than
deleting them to make the harvest look smaller.

## Conventions and proposed proof route

All groups are finite, all coefficient fields in the new theory are
characteristic-zero subfields of $\mathbb C$, and scalar extensions used for
the orbit argument are finite Galois splitting extensions.  The published
cyclotomic splitting-field corollary supplies an explicit such extension; no
unmentioned algebraic closure is selected.  For an absolutely irreducible
constituent $W$ over $E/F$, ${}^\sigma W$ means the representation obtained by
applying $\sigma$ entrywise (equivalently by the corresponding scalar twist).

For an irreducible complex character $\chi$, $F_\chi$ is the field generated
by its values.  The source and design use two standard but initially distinct
quantities: the common multiplicity in scalar extension and the least degree
of a field of realization.  The definition item will first name the
scalar-extension multiplicity for fixed data.  The immediately following
independence lemma proves that it is choice-independent before prose calls it
**the** Schur index.  The later division-algebra and minimal-realization
theorems prove the convention matches the other standard descriptions.  This
prevents the field of values from being silently identified with a field of
definition.

The proof chain is: prove the finite-dimensional base-change identity for
intertwiner spaces; use Maschke semisimplicity and the Galois action to get one
orbit with equal multiplicity; identify the character-field fixed field; then
base-change the endomorphism division algebra to a matrix algebra.  The final
comparison uses a maximal subfield of that central division algebra.  No
Frobenius–Schur indicator is a dependency for the general rational index.

## Item ledger

| Item | Exact planned claim and authoring route | Dependencies / source support |
| --- | --- | --- |
| `def-character-field-and-field-of-definition` | Define $F_\chi=\mathbb Q(\chi(g):g\in G)$ and distinguish it from a field over which an equivalent matrix representation has entries. | Character, representation equivalence, generated subfields; Wiese Defs. 2.5.1, 2.5.8. |
| `def-galois-conjugate-representation` | Define ${}^\sigma W$ and its Galois stabilizer for a finite Galois coefficient extension. | Galois and scalar-extension definitions; Wiese Def. 2.2.7. |
| `lem-base-change-of-intertwiner-spaces` | For finite-dimensional $G$-representations, prove $E\otimes_F\operatorname{Hom}_{FG}(V,U)\cong\operatorname{Hom}_{EG}(E\otimes_FV,E\otimes_FU)$. | Extension of scalars and intertwiners; Wiese Thm. 2.2.4. |
| `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` | A conjugation permutes the isotypic multiplicities, so all members of a Galois orbit occur equally often. | Galois-conjugate definition and Maschke; Wiese Lem. 2.2.9. |
| `thm-scalar-extension-of-an-irreducible-finite-group-representation` | An irreducible $F$-representation becomes a direct sum of one Galois orbit of irreducibles over $E$, each with one common multiplicity; also supply the descent constituent needed later. | Published splitting-field definition, the two new lemmas, Maschke; Wiese Prop. 2.2.11/Cor. 2.2.12 and Zheng Prop. 4.3.2. |
| `lem-character-field-is-the-stabilizer-fixed-field` | For a splitting $E/F$, the fixed field of the character stabilizer is $F(\chi)$. | Character-field and Galois definitions, scalar-extension theorem, character determination, finite Galois theory; Wiese Cor. 2.5.5 and Zheng Prop. 4.6.14. |
| `def-endomorphism-division-algebra-of-an-irreducible` | Define $D_V=\operatorname{End}_{FG}(V)$ and record, by Schur, that it is a finite-dimensional division $F$-algebra. | Intertwiners, irreducibility, Schur's lemma, division rings; Wiese §2.3. |
| `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` | In the stated characteristic-zero splitting environment, $V$ is absolutely irreducible exactly when $D_V=F$. | The division-algebra definition, Hom base change, scalar-extension orbit theorem; Wiese Thm. 2.3.11/Cor. 2.5.10. |
| `def-schur-index-of-an-irreducible-character` | Define the fixed-data scalar-extension multiplicity for a constituent over a finite cyclotomic splitting field, with its well-definedness deferred to the next lemma. | Character field, scalar-extension theorem, stabilizer lemma, cyclotomic splitting; Wiese Cor. 2.5.4 and Def. 2.5.12. |
| `lem-schur-index-is-independent-of-the-chosen-splitting-field` | Compare two finite splitting fields inside a common cyclotomic enlargement and show the multiplicity is unchanged. | Schur-index datum, Hom base change, change of rings, cyclotomic split; Wiese Prop. 2.3.13. |
| `thm-character-of-an-irreducible-over-a-nonsplitting-field` | Give the exact formula $\chi_V=m\sum_{\sigma}\sigma\chi$ for the character of an irreducible representation over the smaller field. | Well-defined index, orbit theorem, fixed-field lemma, direct-sum character rule; Zheng Cor. 4.3.3. |
| `cor-schur-index-divides-the-representation-degree` | From that formula derive $[F(\chi):F]m\chi(1)=\dim_FV$, hence the stated degree divisibilities. | Character formula and index definition; Wiese Cor. 2.5.6. |
| `def-index-of-a-central-division-algebra` | Define $\operatorname{ind}(D)=\sqrt{\dim_FD}$ when $Z(D)=F$, with the maximal-subfield degree convention stated precisely. | Division rings and extension degree; Wiese Thm. 2.3.5. |
| `thm-schur-index-equals-division-algebra-index` | For the irreducible $F_\chi$-model, prove its endomorphism algebra is central over $F_\chi$ and the scalar-extension multiplicity equals its index. | Index and endomorphism definitions, absolute irreducibility, well-defined index, Hom base change; Wiese Cor. 2.5.7/Rem. 2.5.15 and Zheng Props. 4.3.2, 4.6.14. |
| `thm-schur-index-as-minimal-realization-multiplicity` | Prove that the index is both the least positive multiplicity for which $m\chi$ has an $F_\chi$-model and the minimum realization-field degree in this setting. | Field-of-definition, index and central-division comparison; Wiese Def. 2.5.12, Cor. 2.5.13, Rem. 2.5.15. |
| `ex-galois-conjugate-characters-of-c3` | Construct the two nontrivial conjugate complex characters and their irreducible rational two-dimensional model; its index is one. | Character, index, and nonsplitting character formula; Wiese §2.2/§2.5. |
| `ex-s3-is-split-over-the-rationals` | Exhibit rational trivial, sign, and standard models and use the three conjugacy classes to show they exhaust the complex irreducibles. | Symmetric-group, sign/permutation, irreducible-count, splitting definitions; Zheng Cor. 4.3.4. |
| `ex-quaternion-character-has-schur-index-two` | Build the rational quaternion-algebra model, show its complexification is two copies of the faithful degree-two character, and identify index two. | $Q_8$, character, index, character formula, division-algebra comparison; Wiese Cor. 2.5.7 and the design's required canonical example. |
| `ex-trivial-character-has-schur-index-one` | Verify directly that the one-dimensional trivial model is already defined over its character field. | Character and minimal-realization theorems; Wiese Cor. 2.5.10. |

## Known limits and next validation action

The intended authoring must retain the finite-group and characteristic-zero
hypotheses, distinguish $F_\chi$ from a realization field, and prove the
intertwiner base-change bridge rather than treating it as background.  The
$Q_8$ example must establish its rational quaternion-algebra calculation
locally; it may not depend on an earlier examples-page character-table item.
The $S_3$ example must construct rational models, not merely quote a character
table.  Positive-characteristic refinements, the Euler-phi bound, the full
character-inner-product theory, and Frobenius–Schur indicators remain out of
scope exactly as the harvest says.

## Validation checkpoint and unresolved source gate

- `node tools/manifest-deps.mjs research/frontier-32-batch-17.pages.json`:
  pass — 19 items, all explicit dependency arrays.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-32-batch-17.coverage.json`: structurally passes — 1 A
  page, 52 harvested results, no errors.  It gives one advisory
  `coverage-low-yield` warning (14 directly scaffolded results): the centralizer,
  finite-field, positive-characteristic, orthogonality, and central-idempotent
  results are retained with source-specific dispositions rather than padded
  into claims the design does not need.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-17.pages.json`: pass — 19 scoped items, no errors
  or warnings.
- `node tools/splice-plan.mjs --run frontier-32 --batch 17 --dry-run`: pass —
  both pages overlay the plan with 19 items, without writing the plan or a
  workflow receipt.  The repository's read-only `validate-plan` run also
  reports no unresolved IDs, cycles, forward references, or B-page
  dependencies; its existing page-prerequisite warnings are outside this batch.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30`:
  blocked.  Both live browser-verified PDF URLs returned runner-local
  `EAI_AGAIN`, so the tool recorded `0/2` verified and wrote no stamps.

No `fetch_verified` stamp is pre-filled: this terminal DNS failure is not
misrepresented as an unavailable source or replaced with fabricated byte/hash
metadata.  In an environment with functioning public DNS, rerun the same
source-fetch command against these exact live URLs; no harvest row should be
removed merely to clear that gate.

## Reharvest-1-b17 checkpoint (2026-09-06)

`research/frontier-32-reharvest-plan.json` has no `work[]` row for batch 17
(its rows are for batches 3, 6, and 9).  The repair was therefore limited to
the named batch coverage and these notes; the page manifest, plan, workflow
state, and published content were not changed.

### Dead-source recovery and source disposition

- The affected source is Gabor Wiese, *Galois Representations*,
  <https://math.uni.lu/wiese/notes/GalRep.pdf>.  The original, 71-page PDF was
  read through the research browser at that exact URL: §2.2 (PDF pp. 26–29),
  §2.3 (PDF pp. 29–32), and §2.5 (PDF pp. 36–40) contain the previously
  harvested statements.  Its notes index and teaching page both point back to
  the same canonical PDF, not a second document URL.
- Direct HTTPS/HTTP, `www`, and tilde-path variants fail in this runner with
  DNS `EAI_AGAIN`/`Could not resolve host`.  A fresh
  `url-sweep --recover` checked host variants and found no complete archived
  snapshot.  Search also found no other complete copy of this document.  The
  cited URL is consequently retained unchanged; no `original_url` replacement
  field is needed because the reader-facing source has not been swapped.
- Two independently readable treatments were checked as possible
  replacements—J. Fawcett, *Bases of primitive groups*, Chapter 7,
  <https://jfawcett.com/dissertation.pdf>, and The Stacks Project §§11.7–11.8,
  <https://stacks.math.columbia.edu/tag/074S> and
  <https://stacks.math.columbia.edu/tag/074X>.  Their hosts also fail the
  runner's DNS fetch test, so they were not inserted without verified stamps.
  Instead, the already fetch-stamped, independent Zheng treatment below
  carries the affected scaffold items with exact locators.

### Reharvested source support and item obligations

All following support is in Weizhe Zheng, *Lectures on Algebra*,
<https://server.mcm.ac.cn/~zheng/algebra.pdf>, whose existing verified fetch
stamp is `d744a39e2258be63` (942361 bytes, 2026-09-06T02:31:54.710Z).  The
coverage now records each result separately rather than replacing or deleting
the Wiese harvest.

| Affected item | Faithful Zheng result and locator | Constraint / decision |
| --- | --- | --- |
| `def-index-of-a-central-division-algebra` | Degree paragraph after Cor. 3.7.20, PDF p. 133; Prop. 3.7.34, PDF pp. 135–136 | Degree is the square root of central-simple-algebra dimension; maximal subfields split.  No claim change. |
| `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` | Thm. 4.2.3, PDF p. 145 | Absolute simplicity is equivalent to semisimplicity and scalar endomorphisms.  The page's irreducibility/Maschke hypotheses supply semisimplicity. |
| `lem-base-change-of-intertwiner-spaces` | Displayed Hom base-change isomorphism in the proof of Prop. 4.2.8, PDF p. 146 | The planned proof still proves the full finite-dimensional intertwiner statement directly; this is corroborating source support. |
| `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` | Prop. 4.3.2, common exponent `d_i`, PDF p. 150 | Zheng assumes `char(F)` does not divide `|G|`, which is satisfied by the page's characteristic-zero convention. |
| `def-character-field-and-field-of-definition` | Realizability definition before Cor. 4.3.4, PDF p. 151; `F(χ)` definition before Prop. 4.6.14, PDF p. 170 | Retains the required distinction between a character field and a realization field. |
| `def-galois-conjugate-representation` | Prop. 4.6.14's conjugate-representation construction, PDF p. 170 | Matrix entries receive `σ^{-1}` under Zheng's convention; the planned convention is stated explicitly, with no changed mathematical claim. |
| `lem-character-field-is-the-stabilizer-fixed-field` | Proof of Prop. 4.6.14, PDF p. 170 | It identifies the character stabilizer and proves its fixed field is `F(χ)`. |

The resulting planned dependencies remain the manifest's existing ones: the
base-change lemma is used before the scalar-extension theorem; Galois
conjugation and equal multiplicity feed that theorem; the character-field
definition and scalar-extension theorem feed the fixed-field lemma; and the
division-algebra definition plus base change feed the absolute-irreducibility
comparison.  No item ID, dependency, page split, or claim constraint changed.

### Reharvest validation

- `node tools/source-backing.mjs --coverage research/frontier-32-batch-17.coverage.json --liveness research/frontier-32-url-liveness.json --require-verified`:
  pass — all 10 authored results have verified backing.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-32-batch-17.coverage.json`:
  pass — 61 harvested results, no errors; one existing advisory low-yield
  warning (22 scaffolded results) remains because out-of-scope rows are kept
  rather than silently discarded.
- `node tools/url-sweep.mjs --coverage research/frontier-32-batch-17.coverage.json --out /tmp/frontier-32-batch-17-url-liveness.json --recover --timeout-ms 15000`:
  runner-local failure — 0/2 live and no archive recovery, with DNS failures
  for both Wiese and Zheng.  This conflicts with the already verified Zheng
  fetch stamp and the browser reads, so it is recorded as a resolver failure,
  not evidence that either document's mathematical contents vanished.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30`:
  still blocked only on Wiese (`EAI_AGAIN`); Zheng remains 1/2 fetch-verified.
  No stamp was invented and no source row was removed to clear the gate.

Unresolved obligation: rerun the URL-liveness and source-fetch gates when this
runner can resolve public DNS, or locate a complete same-document archive for
the retained Wiese source.  The seven affected claims are nevertheless now
independently backed by a fetch-stamped source; all original Wiese harvest rows
remain in scope for later adjudication.

## Source-scout-2-b17 checkpoint (2026-09-06)

`source-fetch-check --stamp` identified the sole unstamped source as Gabor
Wiese, *Galois Representations*, at
`https://math.uni.lu/wiese/notes/GalRep.pdf`, with runner error `EAI_AGAIN`.
The source search recovered the author's alternate endpoint
<https://math.uni.lu/~wiese/notes/GalRep>.  The research reader fetches it as
the same complete 71-page PDF: title *Galois Representations*, Gabor Wiese,
version dated 13 February 2012, with the same contents entry for §§2.2, 2.3,
and 2.5.  I reread the harvested range there: Theorem 2.2.4 and
Lemmas 2.2.6–2.2.10; Proposition 2.2.11 and Corollary 2.2.12; Theorem 2.3.5,
Definition 2.3.10, and Theorem 2.3.11; Definition 2.5.1 through Corollary
2.5.7; and Definitions 2.5.8 and 2.5.12 through Remark 2.5.15.  Those are the
existing coverage rows; their item dispositions and exact PDF locators remain
faithful, so no result was removed or reharvested under a different treatment.

The coverage source now cites the alternate full-text URL and retains
`original_url: https://math.uni.lu/wiese/notes/GalRep.pdf` for provenance.
Direct Node fetch of the recovered endpoint still returns `EAI_AGAIN`, so
`source-fetch-check --stamp` cannot honestly create `fetch_verified`.  The
remaining blocker is therefore runner-local DNS rather than an absent source:
the reader proves that the alternate endpoint is a complete live copy, while
the validator has no resolver path to it.  Zheng's independent 176-page
treatment remains fetch-stamped and continues to back the affected included
results.  The required post-change command,
`node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30`,
reports `1/2` fetch-verified, `0` newly stamped, and only
`fetch-check-dead ... https://math.uni.lu/~wiese/notes/GalRep — EAI_AGAIN`.
The next action is to rerun `source-fetch-check --stamp` once this runner
resolves `math.uni.lu`; do not synthesize a stamp or delete Wiese rows.

## Source-scout-2-b17 recheck (2026-09-06)

This dispatch re-ran the required command against the current coverage:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30
ERROR fetch-check-dead: schur-indices-and-fields-of-definition: https://math.uni.lu/~wiese/notes/GalRep — EAI_AGAIN
source-fetch-check: 1/2 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

The failed record is still the Wiese source at the recovered author endpoint;
Zheng remains the one fetch-verified independent treatment.  A fresh source
search found only the same author endpoint and the original `GalRep.pdf`
endpoint, not a distinct complete mirror or a complete archive copy.  The
research reader again opened the current URL as the same 71-page PDF and I
re-read the harvested range: the §2.2 scalar-extension results (including
Theorem 2.2.4 and Definition 2.2.7), §2.3's Theorem 2.3.5 and Theorem
2.3.11, and §2.5's Definitions 2.5.1/2.5.8/2.5.12, Corollaries 2.5.4–2.5.7,
and Remarks 2.5.9/2.5.15.  Thus the existing title, URL provenance, exact
locators, harvest rows, and item dispositions are still faithful.

No coverage row was removed, no different treatment was substituted, and no
`fetch_verified` stamp was fabricated.  The remaining blocker is the
validator process's DNS resolution of `math.uni.lu`; rerun this exact command
when that resolver can reach the host.

## Source-scout-1-b17 checkpoint (2026-09-06)

The required source check was run again against the current batch coverage:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30
ERROR fetch-check-dead: schur-indices-and-fields-of-definition: https://math.uni.lu/~wiese/notes/GalRep — EAI_AGAIN
source-fetch-check: 1/2 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

The sole failed record is still Gabor Wiese, *Galois Representations*, at
`https://math.uni.lu/~wiese/notes/GalRep`.  I fetch-verified this endpoint in
the research reader as the complete 71-page PDF, then followed the author's
lecture-note index at
<https://math.uni.lu/wiese/notes/index.html>.  Its “Galois Representations”
link resolves to the retained provenance URL
<https://math.uni.lu/wiese/notes/GalRep.pdf>, which the reader also verifies
as the same complete 71-page document.  I re-read the coverage's named
ranges: §2.2 *Scalar extensions* (Theorem 2.2.4; Definitions/Lemmas
2.2.7–2.2.10; Proposition 2.2.11 and Corollary 2.2.12), §2.3 *Splitting
fields* (Theorem 2.3.5, Definition 2.3.10, and Theorem 2.3.11), and §2.5
*Definability of Galois representations* (Definitions 2.5.1, 2.5.8, and
2.5.12; Corollaries 2.5.4–2.5.7 and 2.5.10–2.5.13; Remarks 2.5.9 and
2.5.15).  The source's statements, coverage locators, and each existing item
disposition remain faithful.

A title-and-author search and the author index recovered only these two
author-hosted URLs; other hits merely cite the notes.  It found no complete
independent mirror or archive snapshot to replace the current same-document
endpoint.  The coverage is therefore unchanged: it retains the reader-live
alternate URL and its `original_url` provenance, rather than cycling back to
the same DNS-unreachable PDF URL.  No harvest result was removed or
re-sourced.  Zheng's independent treatment remains the sole fetch-stamped
source and continues to carry the separately recorded support for the ten
authored results.

Post-scout checks:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-32-batch-17.coverage.json`
  passes with 61 harvested results and no errors; its existing low-yield
  advisory remains.
- `node tools/source-backing.mjs --coverage research/frontier-32-batch-17.coverage.json --liveness research/frontier-32-url-liveness.json --require-verified`
  passes: all 10 authored results have verified backing.

Remaining blocker and next action: this runner cannot resolve `math.uni.lu`
for Node's fetch, even though the research reader fetches both author URLs.
Do not synthesize `fetch_verified`; rerun the exact source-fetch command when
that resolver can reach the host, or replace the source only if a complete
same-document archive later becomes available.

## Source-scout-2-b17 final DNS recheck (2026-09-06)

This source-scout pass was limited to the authorised coverage and notes.  It
ran the required source gate against the current bytes:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-17.coverage.json --stamp --timeout-sec 30
ERROR fetch-check-dead: schur-indices-and-fields-of-definition: https://math.uni.lu/~wiese/notes/GalRep — EAI_AGAIN
source-fetch-check: 1/2 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

The sole failed source is therefore still Gabor Wiese, *Galois
Representations*, at the existing recovered author endpoint
<https://math.uni.lu/~wiese/notes/GalRep>.  The alternate retains
`original_url: https://math.uni.lu/wiese/notes/GalRep.pdf` in coverage.  I
searched by title, author, and both author paths; the author's
[lecture-notes index](https://math.uni.lu/wiese/notes/index.html) identifies
the item as *Galois Representations* and the associated
[course page](https://math.uni.lu/wiese/teaching/GalReps.html) labels the
same direct PDF its current lecture-note version.  Both links resolve in the
research reader to the identical 71-page PDF, headed *Galois
Representations*, Gabor Wiese, version dated 13 February 2012.  The targeted
archive search returned citations to those same author-hosted URLs but no
complete mirror; the Wayback availability and collection-search endpoints
were unavailable through the reader, so they are not evidence of an archive
copy.  No fetchable complete same-document replacement was found.

I re-read the harvested source range on the recovered URL: §2.2 *Scalar
extensions* (Theorem 2.2.4; Definition 2.2.7; Lemmas 2.2.9--2.2.10;
Proposition 2.2.11 and Corollary 2.2.12), §2.3 *Splitting fields* (Theorems
2.3.5 and 2.3.11), and §2.5 *Definability of Galois representations*
(Definitions 2.5.1, 2.5.8, and 2.5.12; Corollaries 2.5.4--2.5.7 and
2.5.10--2.5.13; Remark 2.5.15).  These remain the exact headings/results and
PDF locators carried by the 42 Wiese coverage rows.  In particular, the Hom
base-change result, Galois-orbit/common-exponent calculation, maximal-subfield
index result, scalar-endomorphism criterion, field-of-definition fixed-field
calculation, and Schur-index comparison still support their existing included
or inline item dispositions.  I also re-opened the independent 176-page
Weizhe Zheng *Lectures on Algebra* PDF at
<https://server.mcm.ac.cn/~zheng/algebra.pdf>: its §4.3 Proposition 4.3.2
and §4.6 Proposition 4.6.14 retain the independently harvested
scalar-extension, character-field, Galois-conjugation, and division-algebra
support.  Its existing `fetch_verified` receipt remains the sole valid stamp.

Accordingly, no source row, item disposition, locator, dependency rationale,
page split, convention, or claimed result was altered, and no
`fetch_verified` record was fabricated.  The remaining blocker is strictly
the Node validator's `EAI_AGAIN` resolution failure for `math.uni.lu`; the
next permitted recovery action is to rerun the same command when that resolver
can reach the author host, or to replace the source only with a complete,
verified copy of the identical Wiese document.

Post-checks on these authorised artifacts: `coverage-checklist
--require-destination` reports 61 harvested results, 0 errors, and the
pre-existing `coverage-low-yield` advisory (22 directly scaffolded rows);
`git diff --check` is clean.  The source-fetch gate remains intentionally red
only for the DNS failure stated above.

## Supervisor full-text recovery (2026-09-06)

After three source-scout attempts, the author host remained reachable through
the research reader and `curl` but not through Node's direct fetch transport.
The coverage URL now uses Jina Reader's live full-text extraction of the exact
author-hosted PDF,
<https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf>, while
`original_url` retains Wiese's canonical PDF URL. The endpoint returns 136,563
bytes of substantive plain-text content from the same 71-page document,
including the harvested §§2.2, 2.3, and 2.5 ranges; this changes access only,
not the source, locators, or dispositions.

## Step-3 fix pass

The batch-17 portion of
`research/frontier-32-alpha-d-step3-scaffold-review.md` gives
`schur-indices-and-fields-of-definition` the verdict **sufficient**.  It
issues no batch-17 finding identifier or requested scaffold correction, so no
identifier is invented or renumbered here.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none issued — reviewer verdict row for `schur-indices-and-fields-of-definition` | accepted; no repair warranted | I re-read the controlling RG-3 design and the complete current source PDFs: Wiese, §§2.2, 2.3, 2.5 (71 pages; Theorem 2.2.4, Proposition 2.2.11/Corollary 2.2.12, Theorem 2.3.11, Corollary 2.5.7, and Definitions 2.5.8/2.5.12); and Zheng, §§4.2, 4.3, 4.6 (176 pages; Theorem 4.2.3, Proposition 4.3.2/Corollaries 4.3.3–4.3.4, and Proposition 4.6.14).  These retain the recorded orbit, common-multiplicity, scalar-endomorphism, character-field, index, and realization support. | none — `frontier-32-batch-17.pages.json` remains 15 A plus 4 B items, every object retains an explicit `deps` array, and `frontier-32-batch-17.coverage.json` retains its 42 Wiese and 19 Zheng source-result rows and locators. |

Current validation on the unchanged scaffold: `manifest-deps` passes with 19
items and zero errors; `coverage-checklist --require-destination` passes with
61 harvested results and zero errors (the 22/61 low-yield advisory remains the
reviewed, source-specific out-of-scope material); `source-fetch-check` reports
2/2 fetch-verified sources; `source-backing --require-verified` keeps all ten
authored results backed by an openable source; and whole-run
`content-policy --manifest-only` reports 672 scoped items with zero errors or
warnings.  `validate-plan research/plan-spec.json` passes; its
redundant-prerequisite messages are global advisories outside this batch.

## Step-5 authoring

Authored the two draft pages
`library/representation-theory/schur-indices-and-fields-of-definition.md` and
`library/representation-theory/schur-indices-and-fields-of-definition-examples.md`,
with all manifest IDs: `def-character-field-and-field-of-definition`,
`def-galois-conjugate-representation`,
`lem-base-change-of-intertwiner-spaces`,
`lem-galois-conjugates-have-equal-scalar-extension-multiplicity`,
`thm-scalar-extension-of-an-irreducible-finite-group-representation`,
`lem-character-field-is-the-stabilizer-fixed-field`,
`def-endomorphism-division-algebra-of-an-irreducible`,
`thm-absolute-irreducibility-via-the-endomorphism-division-algebra`,
`def-schur-index-of-an-irreducible-character`,
`lem-schur-index-is-independent-of-the-chosen-splitting-field`,
`thm-character-of-an-irreducible-over-a-nonsplitting-field`,
`cor-schur-index-divides-the-representation-degree`,
`def-index-of-a-central-division-algebra`,
`thm-schur-index-equals-division-algebra-index`,
`thm-schur-index-as-minimal-realization-multiplicity`,
`ex-galois-conjugate-characters-of-c3`, `ex-s3-is-split-over-the-rationals`,
`ex-quaternion-character-has-schur-index-two`, and
`ex-trivial-character-has-schur-index-one`.  Every authored item and page is
`status: draft`.

The statements and proofs are marked `literature-derived` (definitions have
`proof: not-applicable`), with the two batch treatments retained in every
item's references: Wiese, *Galois Representations*, §§2.2, 2.3, 2.5, PDF
pp. 26–40, and Zheng, *Lectures on Algebra*, §§3.7, 4.2, 4.3, 4.6, PDF
pp. 133, 145–151, 170–171.  The proof route is the scaffolded one: Hom base
change and complete reducibility give the Galois orbit and common multiplicity;
the stabilizer gives the character field; and the endomorphism division algebra
identifies the Schur index with its index and minimal realization multiplicity.
The $Q_8$ example explicitly proves that rational-valued does not imply
rationally realizable.  No claim was narrowed or dropped.

`research/frontier-32-batch-17.proof-contracts.json` records all 14
proof-bearing items, exact cited dependency text, step uses, and each standard
boundary disposition.  The explicit batch precheck passes for 14 proof-format
items; `content-policy` reports 19 scoped items with 0 errors and 0 warnings;
and the strict proof-contract check reports 14/14 items with 0 errors and 0
warnings.  `validate-plan research/plan-spec.json` was run successfully.
Focused rendering initially found a multiline display in
`lem-base-change-of-intertwiner-spaces`; it was converted to the schema's
one-line display form, and the subsequent focused render check passed for all
21 authored item/page files.  The repository-wide `depcheck` remains red only for pre-existing,
unrelated corpus diagnostics (including YAML escapes and unresolved links in
other batches); no batch-17 diagnostic was reported.
