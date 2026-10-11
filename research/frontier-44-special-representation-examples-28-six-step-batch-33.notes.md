# Batch 33 — `lefschetz-splitting-in-bounded-triangulated-categories` (pair order 1799/1806)

Run `frontier-44-special-representation-examples-28`, role beta, label batch-33, 2026-10-09.
Written files: `research/frontier-44-special-representation-examples-28-batch-33.pages.json`,
`…-batch-33.coverage.json`, `…-batch-33.cross-batch-dependencies.json`, this note, and the seven
`…-step1-<item>.json` readiness records. No published content, shared plan, engine state or verdict
was edited. The binding owner direction `…-owner-authoring-direction.md` and the complete design
section (`research/plan-klr-foundation-prerequisites.md`, "Lefschetz Splitting In Bounded
Triangulated Categories", lines 382–427) were read in full before construction, together with the
four research drafts in `…-klr-foundation-semisimplicity-drafts/items/`, the published supplier items
listed below, and the plan (`research/plan-spec.json`).

## Scope built

- A page `lefschetz-splitting-in-bounded-triangulated-categories` (order 1799, homological-algebra):
  **6 items** — the design's three lemmas plus **three necessary local prerequisites** on the same
  page: `def-truncation-functors-and-cohomology-of-a-t-structure`,
  `lem-truncation-triangles-are-essentially-unique-and-functorial`,
  `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude`. All six are recorded
  `ready`; nothing was escalated; no page split was needed (6 items, far below the 100-item cap).
- B page `…-examples` (order 1806): **1 item**, the design's
  `ex-hard-lefschetz-splitting-for-a-three-degree-complex`, recorded `ready`.
- Dependency levels computed from the actual in-run graph
  (`node tools/item-dependency-levels.mjs check --run …`; no cycles, no label mismatch):
  `def-truncation…` 0, `lem-truncation-triangles…` 1, `lem-t-cohomology…` 2,
  `lem-hard-lefschetz-splits…` 3, `lem-graded-hard-lefschetz…` 0,
  `lem-nilpotent-lefschetz-filtration…` 1, `ex-hard-lefschetz-splitting…` 4.

## Design / plan comparison (conflicts recorded)

1. **No scope conflict.** `plan-spec.json` and the batch task agree on both page ids, orders
   (1799/1806), titles, category, companions and `requires`; the design section agrees item by item:
   the same three A items and one B item, with the same ids, titles and the same declared deps. All
   four planned claims, hypotheses and warnings are preserved verbatim in substance (the main lemma
   still asserts only a non-canonical splitting and still disclaims primitive-lift compatibility;
   the nilpotent lemma still keeps uniqueness, the intrinsic convolution formula, self-duality
   $(W_i)^\perp=W_{-i-1}$ and the descended forms $S_i$).
2. **Design dependency lists corrected (route preserved, suppliers added).**
   - `lem-hard-lefschetz-splits-a-bounded-t-structure-complex`: its design inputs are
     `def-canonical-t-structure-on-a-derived-category`,
     `thm-long-exact-hom-sequences-of-a-distinguished-triangle`,
     `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes`. The published
     t-structure item defines *t-structures*, but the lemma's statement and proof use
     **truncation functors, t-cohomology, amplitude and boundedness**, none of which existed in the
     published corpus. Rather than edit the published `derived-categories` page (not owned) or the
     plan, three local prerequisite items were added on this A page, following BBD §1.3.1–1.3.7,
     which is also the delivery page's own primary source family. The main lemma's deps now carry
     those three items; its claim is unchanged.
   - One proof step was made precise: the draft's step 3.1 invokes "the cohomology sequence"; the
     scaffold route instead derives the interior amplitude of the complement $K_0$ from additivity
     of $H^j_t$ plus the concentration identities, which are proved locally. This deliberately
     avoids importing BBD Théorème 1.3.6 (heart is abelian; long exact t-cohomology sequence) into
     this pair, since nothing here needs it. Recorded as a route correction, not a claim change.
   - `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition`: the design input
     `def-abelian-category` alone is not enough to run the printed splitting argument; added
     `thm-splitting-lemma-in-an-abelian-category`,
     `def-split-short-exact-sequence-in-an-abelian-category`,
     `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category`,
     `def-image-and-coimage-in-a-category-with-kernels-and-cokernels` and `def-biproduct`. Claim
     unchanged.
   - `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual`: added the linear-algebra and
     bilinear-form suppliers its proof actually uses (`thm-rank-nullity`,
     `thm-dimension-of-a-linear-subspace`, `cor-dimension-of-a-direct-sum`, `def-linear-subspace`,
     `def-kernel-and-image-of-a-linear-map`, `def-bilinear-symmetric-skew-and-alternating-forms`,
     `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`,
     `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`,
     `def-annihilators-under-the-evaluation-pairing`,
     `thm-double-annihilator-and-annihilator-dimension`). The inner-product items
     `def-orthogonality-and-orthogonal-complement` and `cor-double-orthogonal-complement-and-dimension`
     are on pages outside this page's `requires` closure, so the orthogonal-complement facts are
     taken from the bilinear-form/annihilator items, which are in closure and cover a general
     nondegenerate (not necessarily definite) form.
   - `ex-hard-lefschetz-splitting-for-a-three-degree-complex`: added the canonical-t-structure and
     finite-dimensional-vector-space suppliers needed to identify the abstract $H^j_t$ of
     $D^b(\mathbf{vect}^{fd}_k)$ with ordinary cohomology, and the derived-category size facts. The
     claim and displayed computation are unchanged.
3. **Plan-level `requires` warnings (not edited).** `validate-plan --run …` reports
   `redundant-prereq` warnings for this page's declared `requires` list (e.g. `abelian-categories`
   is reached through `derived-categories`). Those rows come from the plan's page metadata, are
   run-wide, and are left for owner/plan reconciliation; the manifest reproduces the plan's
   `requires` byte-for-byte.

## Sources (fetch-verified with stamps; two independent treatments plus a monograph)

- **A. A. Beilinson, J. Bernstein and P. Deligne, *Faisceaux pervers*, Astérisque 100 (1982)** —
  monograph (primary), `https://www.numdam.org/item/AST_1982__100__1_0.pdf`. Full 172-page PDF
  fetched and stamped (`bytes 15581222`, sha256_16 `b1e10440e13cb6bf`; identical to the owner-run
  cache). Read: §1.3.1–1.3.9 (printed pp. 28–33) — Définition 1.3.1, Exemples 1.3.2, Propositions
  1.3.3 and 1.3.5, 1.3.4, Théorème 1.3.6, Proposition 1.3.7 — and §5.4.10–5.4.13 (printed
  pp. 143–147). Supports the three local prerequisites (truncations, adjunction, uniqueness,
  extension/closure facts) and supplies the deferred relative-Hard-Lefschetz material.
- **P. Deligne, *Théorème de Lefschetz et critères de dégénérescence de suites spectrales*,
  Publ. Math. IHÉS 35 (1968) 107–126** — paper, `https://www.numdam.org/item/PMIHES_1968__35__107_0.pdf`.
  Full 21-page PDF fetched and stamped (`bytes 2129434`, sha256_16 `b154116942342392`). Read §1,
  results (1.1)–(1.13) with proofs (printed pp. 107–110): Proposition (1.2), Remarque (1.4),
  Théorème (1.5), the primitive isomorphisms (1.6)–(1.7), Remarques (1.8)–(1.10), Théorème (1.11),
  Corollaire (1.12), Remarque (1.13), and the start of §2. The splitting lemma is the abstract
  t-structure form of (1.2)+(1.5); (1.6) is the graded primitive decomposition.
- **M. A. A. de Cataldo and L. Migliorini, *The Hodge theory of algebraic maps*,
  arXiv:math/0306030v2** — paper, `https://arxiv.org/pdf/math/0306030`. Full 66-page PDF fetched and
  stamped (`bytes 676708`, sha256_16 `35fcdf2d6c0688fa`). Read §2.2.3(c) (printed p. 12, printed
  Hard Lefschetz for intersection cohomology with its primitive decomposition), Theorem 4.4.4 with
  Remarks 4.4.5–4.4.6 (printed pp. 35–36), and §4.5 formulas (22)–(30) with the start of
  Remark 4.5.1 (printed pp. 37–38). Theorem 4.4.4(a)–(b) anchors the splitting and the graded
  primitive decomposition; formulas (22)–(27) anchor the nilpotent weight filtration, its
  uniqueness, self-duality and descended forms.

Coverage dispositions (`…-batch-33.coverage.json`, 31 harvested rows over 2 pages): every named
result of the read ranges is disposed — 12 `included`, 4 `inline`, 13 `out-of-scope` with specific
per-result reasons and 2 `deferred` (BBD Théorème 5.4.10 and Lemmes 5.4.11–5.4.13, both to
destination `projective-perverse-hard-lefschetz-and-decomposition`). No source was dropped; no
`source_resolution` record was needed. Sources were
stamped with `source-fetch-check --stamp` (5/5 fetch-verified) and the check re-run without
`--stamp` (5/5 resolved, 0 drops).

## Published suppliers examined (no defects found)

- `def-canonical-t-structure-on-a-derived-category` (published, audited 2026-09-07): its axiom
  (iii) and the heart definition are exactly what the truncation construction consumes.
- `thm-long-exact-hom-sequences-of-a-distinguished-triangle` and
  `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` (published,
  audited 2026-09-07): the first supplies the Hom sequences used for uniqueness, the second the
  split criterion used on the triangle with the left inverse.
- `def-abelian-category`, `thm-splitting-lemma-in-an-abelian-category`,
  `def-split-short-exact-sequence-in-an-abelian-category`,
  `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair`,
  `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category`,
  `def-image-and-coimage-in-a-category-with-kernels-and-cokernels`, `def-biproduct`
  (all published): read for the graded-HL splitting step; statements, directions and hypotheses are
  adequate as cited.
- `thm-nilpotent-jordan-string-basis` (published): read in full, including its induction and its
  three facts; the nilpotent lemma consumes only the basis conclusion and the rank–nullity input.
- `def-bilinear-symmetric-skew-and-alternating-forms`,
  `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`,
  `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`,
  `def-annihilators-under-the-evaluation-pairing`,
  `thm-double-annihilator-and-annihilator-dimension` (all published): adequate for a general
  nondegenerate bilinear form (no definiteness hypothesis needed).
- `def-canonical-truncation-of-a-complex`, `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`,
  `thm-canonical-truncations-fit-a-distinguished-triangle`,
  `thm-the-canonical-pair-is-a-t-structure`, `def-derived-category-of-an-abelian-category`,
  `thm-the-derived-category-inherits-a-triangulated-structure`,
  `prop-cohomology-factors-through-the-derived-category` (all published on
  `derived-categories`/`triangulated-categories`): adequate for the example's identification of
  abstract t-cohomology with the canonical cohomology functors.
No defective published prerequisite was found; no published-repair note is owed. No Recorded
result is consumed, and no Foundations page appears on any proof path.

## Mathematical quality of the new items

- Conventions fixed once and used consistently: $\mathcal T^{\le n}=\mathcal T^{\le0}[-n]$, so
  $X\in\mathcal T^{\le n}\iff X[n]\in\mathcal T^{\le0}$; truncation triangles
  $\tau_{\le n}X\to X\to\tau_{\ge n+1}X\to$ obtained from the axiom applied to $X[n]$; t-cohomology
  $H^n_t(X)=(\tau_{\le n}\tau_{\ge n}X)[n]$ in the heart; bounded t-structure = every object lies in
  $\mathcal T^{\le n}\cap\mathcal T^{\ge -n}$ for some $n$. Under these conventions
  $H^n_t(X[m])\cong H^{n+m}_t(X)$, and the design's maps
  $H^{-j}_t(L^j):H^{-j}_t(K)\to H^j_t(K)$ are exactly the functorial maps into
  $H^{-j}_t(K[2j])$ under the shift iso (checked against the canonical example).
- Amplitude detection in both directions is proved locally **for bounded t-structures**, by the
  downward induction on $N$ using the concentration identity; the nondegenerate-t-structure version
  (BBD Prop. 1.3.7) is deliberately not imported, and BBD Théorème 1.3.6 (heart abelian; long exact
  sequence) is recorded as unused. This is the only place where the design's sketch was made more
  precise; no claim was weakened.
- The main splitting proof was re-derived end to end at scaffold level (truncation maps $a,b$;
  $h=H^{-n}_t(L^n)$; the explicit $c,r$; $bc=1$, $ra=1$ by map detection; $r'=r-(rc)b$; the split
  triangle via the published split criterion; additivity identifying $H^{\pm n}_t(K_0)=0$; the
  complement object $K_0$ in $\mathcal T^{\le n-1}\cap\mathcal T^{\ge-(n-1)}$; $L_0=p[2]Li$ with
  outer factors isomorphisms; the finite induction). Degenerate endpoints and zero objects are
  covered explicitly in the statement.
- Axioms: no item uses AC/DC; `axiom_use` records this on every item. All constructions are
  canonical up to unique compatible isomorphism, and no assertion depends on a selection of
  truncation triangles. The example notes the essentially-small size hypothesis of the
  derived-category construction.
- No claim was weakened and no inventory was padded: the three additions are each consumed
  (adjunction/uniqueness by the main lemma; cohomology properties by the main lemma and the
  example; truncation conventions by all of them), and every other declared dependency names a
  published item actually used.

## Cross-batch dependencies

- Consumer-side input `research/frontier-44-special-representation-examples-28-batch-33.cross-batch-dependencies.json`
  is `[]`: none of this batch's items consumes an item owned by another batch of this run (all
  non-local suppliers are published, out-of-run items).
- This batch is a **supplier** to two in-run pages, whose owners record the edges in their own
  inputs: batch 42 `geometric-fixed-parts-and-gauss-manin-semisimplicity` (page-level `requires`
  edge, and item-level use of `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` by
  `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`) and batch 48
  `projective-perverse-hard-lefschetz-and-decomposition` (page-level `requires` edge, and item-level
  uses of all three planned lemmas by `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`,
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` and
  `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`). The three
  *added* local items are internal support: they change no statement consumed by those batches and
  do not need to be declared on the consumer side.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` ran successfully (lock-protected);
  the unified ledger currently shows the two page-level edges 42→33 and 48→33 with no reviews yet,
  because batches 42/48 are still in flight.

## Checks actually run (2026-10-09)

- `node tools/coverage-checklist.mjs research/…-batch-33.coverage.json --require-destination` →
  2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-33.coverage.json --stamp` →
  5/5 sources fetch-verified (5 newly stamped); plain check → 5/5 resolved, 0 documented drops.
- `node tools/url-sweep.mjs --coverage research/…-batch-33.coverage.json --out /tmp/… --recover --fail-on-dead`
  → 3/3 live, 0 failed, 0 blocking (scoped run; the engine's gate writes the canonical run artifact).
- `node tools/source-backing.mjs --coverage research/…-batch-33.coverage.json --liveness /tmp/…`
  → 5 authored result(s), all still backed; empty reharvest plan.
- `node tools/manifest-deps.mjs research/…-batch-33.pages.json` → 7 item(s), 0 missing, 0 error(s).
- `node tools/content-policy.mjs --manifest-only research/…-batch-33.pages.json` → 7 scoped item(s),
  0 error(s). Whole-run `--manifest-only` over all current manifests → 618 scoped item(s), 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → first run (before other writers landed items) exit 0 with only `redundant-prereq` warnings on
  declared page metadata (see above) and the expected "pages with no item list yet" note. Final
  re-run after the focused correction below: exit 1 with exactly two `[undeclared-prereq]` errors,
  both on **another batch's** page `compact-support-sheaf-calculus` (batch 32, in flight), none on
  either batch-33 page; the only batch-33 rows in either run are the pre-existing `redundant-prereq`
  warnings on this pair's plan-level `requires` list.
- `node tools/item-dependency-levels.mjs check --run …` → exit 1 with **only** `empty scaffold
  inventory` errors for the batches still being scaffolded (11, 24, 25, 32, 35–49 at the time of the
  run). No error, cycle or level mismatch involves a batch-33 item; batch-33 labels match the
  computed levels (0, 1, 2, 3, 0, 1, 4 as listed above).
- `node tools/step1-decisions.mjs record …` for all seven items (see the seven
  `…-step1-<item>.json` records); `check --run …` still lists the items of other unopened batches —
  expected while the frontier is incomplete.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed and deduplicated.
- **Second scaffold pass (focused correction).** After the first pass a single under-justified
  clause was found in `lem-truncation-triangles-are-essentially-unique-and-functorial` (its aisle
  Hom-criterion). The claim was not changed: the proof strategy now derives it from the published
  zero-map split criterion `prop-a-distinguished-triangle-with-zero-first-map-is-split` (added to
  the deps; published on `triangulated-categories`, in closure) and the vanishing of
  $\tau_{\le m}\tau_{\ge n}$ from the iteration identities. The manifest was re-checked
  (`manifest-deps`, scoped `content-policy`, `item-dependency-levels` levels unchanged at
  0/1/2/3/0/1/4, `coverage-checklist`, whole-run `content-policy`) and the five affected readiness
  records (L1, L2, L3, main lemma, example) were re-recorded; `step1-decisions.mjs check` reports no
  pending batch-33 row. A later clarity edit to the example statement (naming $j=0,2$ as the two
  Lefschetz steps and $j=1$, $j\ge3$ as the zero cases) triggered a re-record of that example only;
  no claim changed, and `manifest-deps`, `content-policy` and the level check were re-run clean.

## Unresolved findings / escalations

- None blocking: no item of this batch is escalated, no cross-batch supplier is missing, and no page
  split is required.
- Noted for owner/plan reconciliation (not edited here): the page-level `redundant-prereq` warnings
  on this pair's `requires` list, and the fact that the design's declared inputs for the main lemma
  omitted the (now local) truncation/cohomology machinery.
- This is scaffold readiness only, not authored-proof acceptance: owner/operator reconciliation and
  Step 3 review follow, and no gate result is claimed.
