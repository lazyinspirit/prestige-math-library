# Step 3b — scaffold audit and authoring: `mixed-hodge-structures-and-strictness`

Run `frontier-44-special-representation-examples-28`, batch 34 (orders
1800/1807), role `alpha-high`, label
`step3b-pair-mixed-hodge-structures-and-strictness-7592a5a8dd15f1a9`.
A page `mixed-hodge-structures-and-strictness` (5 new items), B page
`mixed-hodge-structures-and-strictness-examples` (1 new item), category
`algebraic-geometry`. Only this pair is owned; sibling rows in shared carriers
are preserved. Report opened at entry 2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A-page items (dependency order, lower first):
`def-rational-mixed-hodge-structure` (L0);
`lem-deligne-splitting-of-a-mixed-hodge-structure` (L1);
`def-cohomological-mixed-hodge-complex` (L1);
`lem-morphisms-of-mixed-hodge-structures-are-strict` (L2);
`lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights` (L3).

B-page item (all authored here):
`ex-a-mixed-hodge-extension-need-not-split-rationally` (L1).

Deliverables: 6 item files, the two page files
`library/algebraic-geometry/mixed-hodge-structures-and-strictness.md` and
`…-examples.md`, batch-34 manifest rows with actual dependencies and recomputed
`dependency_level`s, item decisions, and this report.

Open obligations at entry:
1. No direct in-run prerequisite pair is declared; the pair consumes only
   published items (`def-linear-basis`, the filtration and tensor suppliers,
   `thm-the-cohomological-filtered-complex-construction` and the strictness
   consumers' common suppliers). All were re-read at use.
2. Step-3a recorded two proof-level risks for this pair: reproducing Deligne II
   (1.2.8)'s induction with (1.2.9), and the representative correction
   identifying the induced Hodge filtration on `Gr^W_mH^n` with the stable-page
   filtration of the weight spectral sequence. Both are audited here; the
   second is the item-5 obligation recorded in the checkpoint log below.
3. Choice: the pair declares no `def-axiom-of-choice`; every argument must be
   verified choice-free (finite-dimensional linear algebra and finite
   filtrations only).

## Checkpoint log

### 1. `def-rational-mixed-hodge-structure` (A, L0) — authored

- Exact claim: finite increasing $W$ on a finite-dimensional $\mathbb Q$-space,
  finite decreasing $F$ on $H_{\mathbb C}$, $n$-opposition on each
  $\operatorname{Gr}^W_n$ (stated in the decomposition form with the pieces
  $H^{p,q}_n$), morphisms, substructures/quotients, pure/Tate/tensor/dual
  conventions, polarizability; no splitting over $\mathbb R$ or $\mathbb Q$ is
  assumed. Choice-free: no selection from a family of nonempty sets.
- Suppliers checked: `def-linear-basis`,
  `def-increasing-and-decreasing-filtration-of-an-object`,
  `def-associated-graded-object-of-a-filtered-object`,
  `def-internal-direct-sum`, `thm-modules-over-a-ring-form-an-abelian-category`,
  `def-complex-numbers-and-arithmetic`,
  `def-tensor-product-of-modules-by-generators-and-relations`.
- Checks: precheck `n/a` (definition); rendercheck OK. Decision `accept`.

### 2. `lem-deligne-splitting-of-a-mixed-hodge-structure` (A, L1) — authored

- Exact claim: the displayed $I^{p,q}$; (a) projection isomorphism onto
  $H^{p,q}_m$ with vanishing $I^{p,q}\cap W_{m-1}$; (b) the $W$-, $F$- and
  $\bar F$-partial-sum decompositions; (c) functoriality. The negative caveat
  (no conjugate symmetry of the formula; only the congruence mod $W_{m-2}$) is
  recorded from Weber (2.2.5)/Voisin.
- Proof: complete reconstruction of Deligne II (1.2.5), (1.2.8)-(1.2.11):
  two-filtration lemma in the forms (spanning/partial sums) and (vanishing)
  [steps 1.1, 2.1]; the descending lifting correction through the finite weight
  filtration [2.2]; surjectivity onto the graded summand [3.1]; injectivity
  modulo $W_{m-1}$ by the highest-weight class argument [3.2]; the weight direct
  sum by dimension telescoping [4.1]; the $F$- and $\bar F$-decompositions by
  descending induction on the top weight [5.1]; functoriality [6.1].
- Checks: precheck PASS (adopted the canonical layer relabelling); rendercheck
  OK; proof-layout batched over the pair 0 defects. Decision `accept` —
  receipt recorded 2026-10-10T11:31Z and current against the final file hash
  (canonical layer relabelling only; no mathematical change).
- Open: none. Choice-free (finite-dimensional linear algebra and finite
  filtrations).

### 3. `def-cohomological-mixed-hodge-complex` (A, L1) — authored

- Exact claim: rational cohomological mixed Hodge complex as (a) a
  bounded-below $\mathbb Q$-complex with a finite increasing $W$ by
  subcomplexes; (b) a $\mathbb C$-complex with finite $W$ and finite decreasing
  $F$ by subcomplexes; (c) a filtered comparison whose weight-graded maps are
  quasi-isomorphisms, subject to the axiom that each
  $\operatorname{Gr}^W_wK$ has finite-dimensional cohomology, $F$-strict
  differentials and pure cohomology of weight $r+w$; plus the shifted weight
  filtration $W_mH^n(K)=\operatorname{im}(H^n(W_{m-n}K)\to H^n(K))$, recorded
  as essential, and the morphism and sheaf/derived-global-sections conventions.
  The $F$-strictness $\Leftrightarrow$ $E_1$-degeneration equivalence is prose
  only and is not used.
- Sources: Deligne III (8.1.1)-(8.1.6), printed pp. 28-29; Weber (2.3.1) and
  (2.4.1), printed p. 7; Arapura §4.5, printed pp. 29-30.
- Dependencies (all published, re-read at use):
  `def-rational-mixed-hodge-structure`,
  `def-cochain-complex-in-an-abelian-category`,
  `def-filtered-chain-complex`, `def-filtered-chain-map`,
  `def-quasi-isomorphism`, `thm-modules-over-a-ring-form-an-abelian-category`.
- Checks: precheck `n/a` (definition); rendercheck, proof-layout, content
  policy and strict proof contract clean. Decision `accept` — receipt recorded
  2026-10-10T11:32Z and current; no work-list row for this item. Choice-free.

### 4. `ex-a-mixed-hodge-extension-need-not-split-rationally` (B, L1) — authored

- Exact claim: on $H=\mathbb Q e_0\oplus\mathbb Q e_1$ put
  $W_{-3}=0$, $W_{-2}=W_{-1}=\mathbb Q e_1$, $W_0=H$ and
  $F^1=0$, $F^0=\mathbb C(e_0+ie_1)$, $F^{-1}=H_{\mathbb C}$; the graded
  pieces are $\mathbb Q(1)$ of type $(-1,-1)$ and $\mathbb Q(0)$ of type
  $(0,0)$, both opposed, and the extension
  $0\to\mathbb Q(1)\to H\to\mathbb Q(0)\to 0$ has no splitting in rational
  mixed Hodge structures. Statement and proof provenance `ai-generated`, as
  scaffolded; the exact witness was not located verbatim in the fetched texts
  (closest analogue: El Zein, Example 1.3) and this is recorded in the source
  notes.
- Verification: [1.1] the two graded pieces computed in the displayed basis;
  [2.1] the inclusion and the quotient are mixed Hodge morphisms; [3.1] every
  $\mathbb Q$-linear section sends $1$ to $e_0+q e_1$, $q\in\mathbb Q$, and
  $F^0$-preservation forces $q=i\notin\mathbb Q$; the vanishing
  $F^0H_{\mathbb C}\cap\bar F^0H_{\mathbb C}=0$ records the obstruction.
- Sources: Deligne II §§1.2.5-1.2.11 and 2.3.1-2.3.8, printed pp. 9-13 and
  29-31; Voisin Definitions 1.22 and 2.6; Weber (2.1.5) and (2.2.1);
  El Zein §1.3-2 as the closest statement-level analogue.
- Dependencies: `def-rational-mixed-hodge-structure` and, added at authoring,
  the published `def-complex-numbers-and-arithmetic` (used for $i$ and
  conjugation); the manifest row and the proof contract carry the addition.
- Checks: precheck PASS; rendercheck, proof-layout, content policy, strict
  contract and citation fidelity clean. Decision `accept` — receipt recorded
  2026-10-10T11:38Z and current. Choice-free (a finite computation in a
  displayed two-dimensional basis).

### 5. `lem-morphisms-of-mixed-hodge-structures-are-strict` (A, L2) — authored

- Exact claim: every mixed Hodge morphism is strict for $W$ and $F$; kernel,
  image and cokernel with induced/quotient filtrations are mixed Hodge
  structures; $\operatorname{Gr}^W_n$ is exact; a morphism from weights at
  least $n$ to weights at most $n$ has pure image of weight $n$. No canonical
  splitting of the induced structures is claimed.
- Proof (Voisin's deduction of Theorem 2.7 from the functorial splitting):
  [1.1] weight strictness by vanishing of the components above $W_n$; [1.2]
  Hodge strictness with the condition $p<a$; [2.1] descent from $\mathbb C$ to
  $\mathbb Q$ via $\sigma$-fixed vectors; [2.2] componentwise decomposition of
  kernel, image and cokernel with induced and quotient structures; [2.3]
  exactness of $\operatorname{Gr}^W_n$ via the piecewise short exact sequences;
  [3.1] the pure-image clause.
- Sources: Deligne II (1.2.10)-(1.2.12), printed pp. 12-13, and
  (2.3.4)-(2.3.5), printed p. 30; Voisin Theorems 2.7-2.8, printed p. 19;
  Weber (2.2.3) and (2.2.6)-(2.2.7); El Zein, Lemma 2.3 and Proposition 2.4.
- Dependencies: the definition and the splitting lemma, both in-pair; the
  computed level is 2 and the manifest agrees.
- Checks: precheck PASS; rendercheck, proof-layout, content policy, strict
  contract and citation fidelity clean. Decision `accept` — receipt recorded
  2026-10-10T11:38Z and current. Choice-free.

### 6. `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights` (A, L3) — authored, escalated

- Exact claim: (i) for a rational cohomological mixed Hodge complex $K$, the
  space $H^n(K_{\mathbb Q})$ carries a mixed Hodge structure with the shifted
  image weight filtration and the image Hodge filtration; in the weight
  spectral sequence $E_1^{p,q}=H^{p+q}(\operatorname{Gr}^W_{-p}K)$ the terms
  are pure of weight $q$, the sequence degenerates at $E_2$, and
  $\operatorname{Gr}^W_mH^n\cong E_2^{n-m,m}$ compatibly with the Hodge
  filtrations; morphisms induce morphisms of the resulting structures. (ii)
  for a cosimplicial system of weight-zero Hodge complexes in nonnegative
  bidegrees, the simple complex $sK$ with the $L$-filtration is a
  cohomological mixed Hodge complex, the cosimplicial spectral sequence
  degenerates at $E_2$ with $\operatorname{Gr}^W_qH^n(sK)\cong E_2^{n-q,q}$,
  and all weights of $H^n(sK)$ are at most $n$.
- Proved: [1.1] the weight spectral sequence from the published cohomological
  filtered-complex construction and purity of $E_1$; [2.1] $d_1$ is strict
  between pure structures, $d_r=0$ for $r\ge2$, so $E_\infty=E_2$; [3.1] the
  vector-space identification of the graded pieces with $E_2$-terms; [4.1]
  naturality and filtered compatibility of the induced maps; [4.2] $sK$ is a
  mixed Hodge complex for $L$ and the cosimplicial identification; [5.1] the
  weight bound.
- Open obligation (the escalation): the claim that the image Hodge filtration
  makes $(H^n(K),W,F)$ a mixed Hodge structure, the Hodge-compatibility of the
  identifications of steps 3.1/4.1, and the functoriality/Hodge clauses of
  parts (i)/(ii) all need the comparison of the recurrent filtration on the
  stable page with the filtration induced on the abutment by the second
  filtration under strictness of the differentials — Deligne II
  (1.3.15)-(1.3.17), invoked by Deligne III Scholie (8.1.9) and Deligne II
  (3.2.5). That comparison is not a published item in this library and is not
  proved inside the item; the item's `## Remarks` records the obligation with
  the exact locator, and nothing conditional is presented as proved.
- Consumers at risk (exact): batch 38
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`
  consumes the functorial rational mixed Hodge structure on $H^n(U,\mathbb Q)$
  and the shifted weight filtration; batch 46
  `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
  consumes part (ii) through its [F4] and the resulting mixed Hodge structure
  on $H^n$. Both consumer items are still unauthored; the unified ledger
  carries exactly these two item edges, owned by batches 38 and 46.
- Sources: Deligne III Scholie (8.1.9), printed p. 30, and Theorem (8.1.15)
  with proof (8.1.17), printed pp. 32-34; Deligne II §§3.2.5-3.2.11, printed
  pp. 35-37, and §§1.3.8-1.3.17, printed pp. 16-19, for the missing
  comparison; Weber (2.4.1); El Zein, Theorem 3.6 (statement level);
  Arapura, Proposition 4.12 and Corollary 4.13.
- Checks: precheck PASS; rendercheck, proof-layout, content policy, strict
  contract and citation fidelity clean. Decision `escalate` with defect
  `dependency` — receipt recorded 2026-10-10T11:38Z; the run's final-phase
  work list shows this item as the pair's single owner-held row, which is the
  intended state. Choice-free: no selection from a family of nonempty sets.

## Handoff

**Completed IDs.** All six assigned items are authored, checked and decided.
Accepted (5): `def-rational-mixed-hodge-structure`,
`lem-deligne-splitting-of-a-mixed-hodge-structure`,
`def-cohomological-mixed-hodge-complex`,
`ex-a-mixed-hodge-extension-need-not-split-rationally`,
`lem-morphisms-of-mixed-hodge-structures-are-strict`. Escalated (1, defect
`dependency`): `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`,
as detailed above. Both page files are drafted and consistent with the open
obligation: `library/algebraic-geometry/mixed-hodge-structures-and-strictness.md`
(5 items) and `…-examples.md` (1 item); the A page prose states that item 6's
Hodge-filtration half is an open obligation needing Deligne II
(1.3.15)-(1.3.17).

**Changed artifacts** (all inside the owned pair; sibling rows preserved): the
six item files; the two page files; `…-batch-34.pages.json` (the B item's
dependency row now includes `def-complex-numbers-and-arithmetic`);
`…-batch-34.proof-contracts.json` (6 items, 13 citations); one local repair in
`…-batch-34.coverage.json` — the El Zein B-page row named
`ex-a-mixed-hodge-extension-need-not-split-atically`, corrected to
`ex-a-mixed-hodge-extension-need-not-split-rationally` (all 46 coverage item
references now resolve; no content changed). `…-batch-34.notes.md` and the
reviewed empty `…-batch-34.cross-batch-dependencies.json` are untouched and
remain correct.

**Checks actually run at this stage (results).**

- `node tools/tsx-run.mjs tools/precheck.mts` on the six item paths — 4 proof
  items PASS, 2 definitions `n/a`; `4 checked, 0 failing`.
- `node tools/rendercheck.mjs` on the six paths — OK; no wikilink inside math,
  no nested or unbalanced delimiters, no multiline display, KaTeX and YAML
  clean.
- `node tools/proof-layout.mjs` on the six paths (batched, after the final item
  edits) — `6 items, 23 steps, 0 defects`.
- `node tools/content-policy.mjs …-batch-34.pages.json` — 6 scoped items,
  0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/proof-contract.mjs …-batch-34.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 6/6 items checked.
- `node tools/citation-fidelity.mjs …-batch-34.proof-contracts.json` — 13
  citations over 6 items; no missing quotes, no widening candidates.
- `node tools/manifest-deps.mjs …-batch-34.pages.json` — 6 items, 0 errors.
- `node tools/tsx-run.mjs tools/item-dependency-levels.mjs check --run …` —
  exit 0, 862 items across 100 pages, maximum level 47, no finding printed
  (the pair's labels 0/1/2/1/3 and 1 equal the computed levels).
- `node tools/depcheck.mjs --items-file /tmp/mhs-items.json` — OK; page depths
  33 (A) and 34 (B), prerequisite cycle checks passed.
- `node tools/tsx-run.mjs tools/coverage-checklist.mjs …-batch-34.coverage.json`
  — 2 pages, 46 harvested results, 0 errors, 1 pre-existing advisory warning
  (`coverage-low-yield` on the B page: the plan prescribes exactly one B item;
  recorded and explained in the batch notes).
- `node tools/validate-plan.mjs research/plan-spec.json --run …` — no finding
  names either page or any of the six items apart from the pre-existing
  advisory `redundant-prereq` on the A page's `requires`; the run-wide exit 1
  comes from sibling batches (kashiwara `b-leaf`/`undeclared-prereq`,
  character-polynomials and projective-functors `undeclared-prereq`), none of
  which touches this pair.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run … --phase final`
  — no receipt-missing row for five of the six items; the sixth is present as
  the pair's single owner-held escalation, as intended.
- `autopilot status --run …` — the pair is now among the covered dispatches
  (10/50) and is no longer listed as missing its artifact.

**Added suppliers / dependency changes.** No new item IDs were created: the
pair's inventory is exactly the scaffold's six items, and every supplier is a
published item. One dependency was added at authoring: the B item now declares
the published `def-complex-numbers-and-arithmetic` (for $i$ and conjugation),
synchronized in the manifest and the contract. Because the batch consumes only
published items, its cross-batch input stays `[]` and reviewed, and no ledger
row is owned here.

**Published concerns.** None confirmed. The published suppliers used were
re-read at statement level and match their uses; the only plan-level advisory
(`redundant-prereq` above) is shared-plan wording for the Step-4 reconciler,
preserved unchanged because plan, plan-spec and batch task all declare the
same two-element `requires`.

**Open obligations.**

1. Item 6's Hodge/MHS half (missing recurrent-filtration comparison, Deligne
   II (1.3.15)-(1.3.17)); remedy: add and fully author the comparison (the
   recurrent filtration on the stable page equals the filtration induced on
   the abutment when the page differentials are strict), rewire item 6 steps
   3.1/4.1 and the (i)/(ii) Hodge clauses, and reconcile the exact consumer
   uses in batch 38
   (`thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`)
   and batch 46
   (`thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`).
   This is the second of the two Step-3a pre-splice proof risks: the first,
   the splitting item's reconstruction of Deligne II (1.2.8)/(1.2.9), is
   discharged in checkpoint 2; the second materialized and is escalated here
   rather than papered over.
2. The pre-existing `redundant-prereq` advisory on the A page — for the
   Step-4 reconciler.
3. The `coverage-low-yield` advisory on the B page — pre-existing and
   explained; no action requested.

**Source reading at this stage.** Re-read in full while authoring and
checking: Deligne II (Numdam PDF, sha256_16 `748edefb44fded8a`) §§1.2.5-1.2.13,
2.3.1-2.3.8, 3.2.5-3.2.11, including 1.3.8-1.3.17 for the comparison the item
6 obligation names; Deligne III (`d78d4f46742916cd`) (8.1.1)-(8.1.19); Voisin
Definitions 1.22/2.6 and Theorems 2.7-2.8 (printed p. 19); Weber
(2.2.1)-(2.4.1); Cirici-Horel Lemma 3.3 as an independent cross-check of the
splitting formula. El Zein could not be re-fetched at this stage (HTTP 403);
its locators are used as recorded in the scaffold's fetch-verified coverage
row and are not claimed as a fresh read.

**Next action.** Owner resolution of the item 6 escalation (authorize the
missing comparison supplier or accept a weakened interface), after which the
item can be re-recorded; until then Step 4 must not treat part (i)'s MHS and
Hodge-compatibility clauses, or the corresponding part (ii) clauses, as
available to batches 38 and 46.
