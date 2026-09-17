# Phase 2 remaining 27 — Step 3a scope review: Gelfand theory and commutative C\*-algebras

Run: `phase-2-remaining-27`
Dispatch: `step3a-pair-gelfand-theory-and-commutative-c-star-algebras-95509b5e12fea36a`
Batches: 4 (shared with the `banach-algebras-spectrum-and-holomorphic-functional-calculus` pair)

Scope review only: this report decides scope and records no item approval and
no owner decision.

## Pair reviewed

| page | kind | planned items | decision |
| --- | --- | ---: | --- |
| `gelfand-theory-and-commutative-c-star-algebras` | A | 37 | **sufficient** |
| `gelfand-theory-and-commutative-c-star-algebras-examples` | B | 14 | companion, covered by the A decision |

A inventory in page order: `def-character-and-maximal-ideal-space`,
`thm-characters-on-a-unital-banach-algebra-are-continuous`,
`lem-closed-ideal-quotient-is-a-banach-algebra`,
`thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`,
`thm-spectrum-as-character-values`,
`thm-maximal-ideal-space-is-compact-hausdorff`, `def-gelfand-transform`,
`thm-gelfand-transform-is-a-contractive-unital-homomorphism`,
`def-jacobson-radical-and-semisimple-commutative-banach-algebra`,
`thm-kernel-of-the-gelfand-transform-is-the-radical`, `def-c-star-algebra`,
`def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra`,
`lem-c-star-spectral-radius-equals-norm-for-normal-elements`,
`lem-characters-on-a-commutative-c-star-algebra-preserve-star`,
`thm-commutative-gelfand-naimark`,
`lem-characters-of-continuous-functions-are-evaluations`,
`thm-commutative-gelfand-duality`,
`lem-zero-free-entire-function-of-exponential-type-is-an-exponential`,
`thm-gleason-kahane-zelazko`,
`lem-extreme-points-of-the-dual-ball-of-c-of-k`, `thm-banach-stone`,
`def-zero-set-filter-and-zero-set-ultrafilter`,
`lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters`,
`lem-zero-set-ultrafilters-and-stone-cech-points`,
`thm-gelfand-kolmogorov-for-rings-of-continuous-functions`,
`def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality`,
`def-stone-space-and-clopen-algebra`,
`lem-boolean-ultrafilter-extension-from-compact-products`,
`thm-stone-representation-for-boolean-algebras`, `thm-stone-duality`,
`def-algebraic-unitization-of-a-star-algebra`,
`thm-minimal-c-star-unitization`,
`thm-character-space-of-the-unitization-is-one-point-compactification`,
`thm-nonunital-commutative-gelfand-naimark`,
`def-approximate-unit-and-proper-c-star-morphism`,
`thm-every-commutative-c-star-algebra-has-an-approximate-unit`,
`thm-locally-compact-gelfand-duality`.

B inventory in page order: `ex-maximal-ideal-space-of-c-of-k`,
`ex-maximal-ideal-space-of-the-disc-algebra`,
`ex-gelfand-transform-of-ell-one-of-z`,
`cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric`,
`ex-banach-stone-weighted-composition-isometries`,
`ex-gelfand-kolmogorov-recovers-beta-x-not-x`,
`ex-stone-duality-for-a-power-set-algebra`,
`ex-stone-duality-for-a-finite-boolean-algebra`,
`rem-nagata-cp-theorem-remains-topological`,
`rem-gerlits-nagy-remains-selection-principle-theory`,
`rem-linear-dugundji-extension-remains-topological`,
`ex-c-zero-of-a-locally-compact-space`,
`ex-unitization-corresponds-to-one-point-compactification`,
`rem-wiener-lemma-is-developed-on-the-fourier-analysis-track`.

## Evidence reviewed

- Current artifacts: `research/phase-2-remaining-27-batch-4.pages.json` (both
  pages plus the sibling FA-17 pair the A page requires in-batch), the
  `plan-spec.json` entries (orders 288.081/288.082, page `requires` exactly
  `banach-algebras-spectrum-and-holomorphic-functional-calculus` +
  `tychonoff-embedding-and-stone-cech` for A and the A companion only for B),
  `research/phase-2-remaining-27-scope-ledger.json` (both pages batch 4), the
  drift-evidence entry for this A page and `research/phase-2-remaining-27-alpha-step1-drift.md`
  (`no-drift`, "Remaining uncertainty: none"), `research/phase-2-remaining-27-batch-4.notes.md`,
  and `research/phase-2-remaining-27-batch-4.coverage.json`.
- Binding prose: `research/phase-2-remaining-27-owner-authoring-direction.md`
  (binding; §§14.4–14.5 controls FA) and `research/plan-functional-analysis-track.md`
  §5 FA-18 (28 named A items, 14 B items) with §14.4's FA-18 bullet requiring
  "the 37-item batch-6 A inventory". I diffed the manifest against that
  historical inventory, `research/frontier-34-fa-prereqs-batch-6.pages.json`:
  identical IDs and page order (37 A, 14 B), kinds unchanged, with Step-1
  statement/dependency repairs (unitality and morphism conventions, choice
  ledgers) that preserve or sharpen the claims. The nine manifest items beyond
  §5's 28 are exactly the locally needed helpers the §14.4 bullet names
  (closed-ideal quotient, `C(K)` evaluation characters, GKZ growth lemma,
  dual-ball extreme points, zero-set filter machinery, Boolean-ultrafilter
  extension); every §5 A and B item is present.
- Source coverage: the A-page coverage entry has eight sources, two of them
  complete treatments — Bühler–Salamon *Functional Analysis* and Shirbisheh
  *Lectures on C-star Algebras* v2 — plus Williams, Tressl, Shalit,
  Gabriyelyan–Osipov and Dugundji, with one documented drop (Gillman–
  Henriksen–Jerison: one initial attempt plus five 403 retries, with complete
  local alternatives and dependency lists recorded for all five affected
  zero-set results, so the drop waives only the unavailable backing). I
  re-downloaded four sources and reproduced the recorded fetch stamps exactly:
  Bühler–Salamon 1 912 109 bytes / sha256_16 `8ffd5f868b480006` / 452 pages;
  Shirbisheh 1 279 538 bytes / sha256_16 `50372d5215737bfe` / 179 pages;
  Williams 493 980 bytes / sha256_16 `12aa6e2ceb0a4f8c` / 39 pages; Tressl
  548 405 bytes / sha256_16 `52ba627a7d722ea1` / 20 pages. From Bühler–Salamon
  I read the page openings and displayed statements across §5.5.1, including
  Theorem 5.58 (printed p. 259), Definition 5.59, the proof run-up to Theorem
  5.63, Theorem 5.64 and the start of §5.5.2 (printed pp. 262–267); from
  Shirbisheh §3.1 I read the printed
  pp. 54–61, including Propositions 3.1.4, 3.1.9, 3.1.11–3.1.12, Example
  3.1.15, Propositions 3.1.16, Definition 3.1.17, Theorem 3.1.18, Lemma 3.1.20,
  Lemma 3.1.22, Definition 3.1.23 and Remark 3.1.24. For Shirbisheh
  3.1.31–3.1.32, 3.1.34–3.1.35, Example 3.1.39 and Theorems 3.3.5–3.3.6, and
  for Williams Theorem 3.1, Definition 3.2, Theorem 3.6, Examples 3.10/4.3,
  Theorem 4.5 and Tressl 2.2.10–2.2.11, Example 2.3.2, 2.3.4, 3.1.4–3.1.5,
  4.4, I confirmed the numbered headings exist in the fetch-verified files at
  the recorded locators; I did not re-read each of those full arguments.
- Role consumers: the in-run batch-5 FA-19 page edge and its item edges
  (`def-c-star-algebra`, `lem-c-star-spectral-radius-equals-norm-for-normal-elements`,
  `thm-spectrum-as-character-values`, `lem-characters-on-a-commutative-c-star-algebra-preserve-star`,
  `thm-commutative-gelfand-naimark`, read in
  `research/phase-2-remaining-27-batch-5.cross-batch-dependencies.json` and the
  batch-5 manifest); the published `thm-wiener-lemma-for-absolutely-convergent-fourier-series`,
  whose exact suppliers per `research/published-consumer-supplier-ledger.md` are
  this page's `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`
  and `thm-characters-on-a-unital-banach-algebra-are-continuous`; the library's
  recorded drafts `rem-gelfand-naimark-commutative`, `rem-banach-stone`,
  `rem-gelfand-kolmogorov` (`items/`, `proved_here: false`), whose "what would
  prove it" sections are covered item-by-item by A items 4/6/15/17, 20/21 and
  22–25 respectively; and the future representation-theory track's abelian
  comparison use (RG-25 in `research/plan-representation-theory-groups-track.md`).
- Checks re-run read-only for this review: `manifest-deps` on batch 4 (91
  items, 0 errors); `coverage-checklist --require-destination` on batch-4
  coverage (2 pages, 102 harvested results, 0 errors, 0 warnings);
  `validate-plan research/plan-spec.json --repo .` (OK, acyclic and
  consistent); `manifest-integrity` (54/54 owed pages, no scope drift);
  `step1-decisions check` (1006/1006 ready, closed, so this pair's 51 items
  have current readiness records); `step3-decisions check --phase scope` shows
  the remaining pairs still open, so no owner decision is being overwritten.

## Why the scope is sufficient

The intended subject — Gelfand theory for commutative Banach algebras together
with the commutative C\*-algebra representation theorems and the algebraic
topology dictionaries — is covered end to end in a coherent proof order:
characters and their automatic continuity (1–2); closed-ideal quotients,
maximal ideals as character kernels and the spectrum identity (3–5);
compactness of the character space (6); the Gelfand transform, its
spectral-radius norm and radical kernel (7–10); the C\*-vocabulary, the
normal-element norm formula, star preservation and unital Gelfand–Naimark
(11–15); the `C(K)` evaluation characters and unital Gelfand duality (16–17);
the classical companions Gleason–Kahane–Żelazko and Banach–Stone (18–21); the
Gelfand–Kolmogorov, Stone-representation and Stone-duality dictionary (22–30);
and the nonunital theory — algebraic and minimal unitization, the one-point
compactification of the character space, nonunital Gelfand–Naimark, approximate
units and locally compact Gelfand duality with proper morphisms (31–37). The
fourteen B items supply the standard diagnostics: the two evaluation models
`C(K)` and the disc algebra, the `\ell^1(\mathbb Z)`/Laurent example, a
non-isometric transform counterexample, a weighted-composition isometry, the
`\beta\mathbb N` reconstruction, two Stone-duality computations, `c_0`, the
unitization dictionary, and three explicitly deferred orientation remarks plus
the Wiener-track pointer. Every consumer was checked item-by-item and is
supplied; the one published consumer's two needed items are on the A page; the
three recorded draft remarks are covered.

Adjacent material is deliberately owned elsewhere and none of it is needed by
this pair's consumers: noncommutative Gelfand–Naimark is a §3 scope denial;
continuous functional calculus, spectral permanence and the `C^*`-algebra of a
normal operator are FA-19; complex Stone–Weierstrass is the published
`thm-complex-stone-weierstrass-self-adjoint` used by item 15; the Wiener
inverse theorem and the Wiener algebra are the Fourier track's; `L^1(G)`
characters/Pontryagin material is the representation track's; and the
Nagata/Gerlits–Nagy/Dugundji leaves stay L/NS orientation remarks with empty
dependency arrays, as §3 and the §14.4 bullet require.

## Observations and residual uncertainty (do not change the decision)

- Nonunital Banach-algebra generality. Shirbisheh's §3.1 develops characters,
  regular maximal ideals, locally compact `\Omega(A)` and the `C_0` transform
  for arbitrary commutative Banach algebras, while this manifest states the
  Banach-algebra items (4–8) for unital algebras and handles the nonunital
  case only for C\*-algebras through the minimal unitization (31–37). That is
  exactly the binding inventory, and no consumer needs the general case; if the
  owner ever wants the full Banach generality it is an enrichment, not a gap
  in the pair's declared role.
- Gelfand–Kolmogorov topology. A item 25 states the maximal-ideal/`\beta X`
  correspondence and the fixed ideals; it does not mint the hull-kernel
  topology on the maximal-ideal space, so the "consequently `C(X)\cong C(Y)`
  iff `\beta X\cong\beta Y`" corollary written in the draft remark
  `rem-gelfand-kolmogorov` is not literally claimed (the item's own strategy
  says "if claiming topology, define hull-kernel closed sets and prove the
  homeomorphism"). The standard reference (nLab, Gelfand–Kolmogorov theorem)
  presents the fully faithful/`\beta X` formulation with that corollary, so
  this is a genuine, narrow enrichment candidate if the owner wants the
  recorded remark retired in full. I did not treat it as an omission of the
  pair's subject: the design's own proof obligation for the remark asks only
  for the two bijections, and the topology of `\beta X` is owned by the
  published Stone–Čech page.
- Citation precision on B items. Several B items carry the section-level
  locators Bühler–Salamon §5.5 / Shirbisheh ch. 3. I verified those sections
  contain the general theory but not the specific worked examples (no disc
  algebra, `\ell^1(\mathbb Z)` characters, or dual-number algebra in
  Bühler–Salamon §5.5.1). The genuine published backing for the
  `\ell^1(\mathbb Z)`/Wiener material is Mueger, *Introduction to Functional
  Analysis* §19.2, printed p. 163, Theorem 19.9 (which the design names but the
  current coverage does not list), and `rem-wiener-lemma-is-developed-on-the-fourier-analysis-track`
  cites "Shirbisheh §2.6 Problem 2.20", which is the holomorphic-calculus
  inclusion statement, not the Wiener material. The claims are sound and
  locally provable; this is a citation-accuracy note for the Step-3b and
  Step-5 item reviewers, not a scope gap.
- Authorized overlap. A items 26–30 redevelop Boolean Stone duality locally
  under AC/Zorn, while the published foundations page
  `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` already contains
  judge-passed BPI-based items for the same dictionary. The §14.4 bullet and
  item 30's own strategy require the local block with the explicit AC/Zorn
  cost (the published ultrafilter lemma is an AC/Zorn implementation, not a
  BPI-only supplier), so this is an authorized overlap; the owner may later
  prefer to cite the published pair.
- Optional enrichment. Mueger §19.2 also records the lesson that the Gelfand
  transform of `\ell^1(\mathbb Z)` is injective but not surjective, with image
  the Wiener algebra `W \subsetneq C(\mathbb T)`. Nothing in the binding
  design, the consumers, or the B item 3 statement requires that clause (the
  Fourier track owns the Wiener algebra), so I record it only as a candidate
  clause if the owner wants the "what can fail" trio (non-injective,
  non-isometric, non-surjective) completed on this pair.
- Dispatch duplication. Two identical Step-3a task files exist for this pair
  (`...-7ce4416cf5f6348c` and `...-95509b5e12fea36a`); I am recording one
  scope decision against the current manifest. If a second reviewer records
  the same decision, the receipt is overwritten with an equivalent row; a
  diverging decision would be visible as a changed receipt.

Nothing published in this pair's closure was found defective, and no
uncertainty above changes the scope verdict.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page
gelfand-theory-and-commutative-c-star-algebras --decision sufficient` with this
report as the reason path.
