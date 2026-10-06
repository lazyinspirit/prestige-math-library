# Step 3a scope review — rouquier-complexes-and-categorical-braid-relations

- Run: `frontier-40-geometry-braids-rep-27` (batch 9), role alpha, label
  `step3a-pair-rouquier-complexes-and-categorical-braid-relations-c5203e09a499842d`.
- A page: `rouquier-complexes-and-categorical-braid-relations` (order 761,
  category `braid-groups`, 15 planned items).
- B page: `rouquier-complexes-and-categorical-braid-relations-examples`
  (order 762, 4 planned items); companion pointers A↔B are consistent and every
  B item depends only on A-page items.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-40-geometry-braids-rep-27-step3a-review-rouquier-complexes-and-categorical-braid-relations.json`;
  re-verify with `node tools/step3-decisions.mjs check --run
  frontier-40-geometry-braids-rep-27 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row, coverage row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-9.pages.json` | Current A inventory (15 items) and B inventory (4 items) with every statement, strategy, `deps`, provenance and source reference; page `requires`; companion pairing |
| `research/frontier-40-geometry-braids-rep-27-batch-9.coverage.json` | Pair source record: 6 sources, 44 harvested results with locators and dispositions, fetch stamps, no deferrals |
| `research/frontier-40-geometry-braids-rep-27-batch-9.notes.md` | Step-1 construction record: design corrections (decategorification normalization, stale RG-13 phrase, informal quotient sentence, convention drift, braid-relation route) and the one local addition |
| `research/frontier-40-geometry-braids-rep-27-batch-9.cross-batch-dependencies.json` | The one in-run page edge and one in-run item edge into batch 8 (`categorical-braid-actions-and-decategorification`) |
| `research/plan-braid-groups-track.md` L53–L57 (role table), L829–L865 (BG-17 A and B rows), L1007 | Controlling prose design: role "invertible braid complexes and coherence", `requires`, the 14 A rows and 4 B rows with intended routes and locators, closure obligation "Rouquier normalized comparisons/coherence are separate obligations" |
| `research/plan-spec.json` rows 761/762; `research/frontier-40-geometry-braids-rep-27-scope-ledger.json`; `...-selection.json` | Page identity/order/kind/category/companion/`requires`; the pair is owed by this run at batch 9 and not deferred |
| `research/frontier-40-geometry-braids-rep-27-drift-evidence.json` (BG-17 closure, "no-drift") and `...-alpha-step1-drift.md` L55–L57 | Prerequisite closure check performed at Step 1: all five `requires` present, batch 8 supplier precedes at order 757 |
| `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` | Owner keeps the 27-pair scope, requires the promised scope to be preserved, and permits required local helper items under the ordinary rules |
| Published suppliers and the batch-8 scaffold, named below | Prerequisite availability and section-level statement re-check |
| Independent PDF downloads (all six pair sources re-downloaded) and Rouquier §3 / GKS §3.1 read in full | Source re-verification at the stamped bytes; convention cross-check |

## Inventory against the prose design

All 14 designed A rows and all 4 designed B rows are present with the design
kinds; no designed row was dropped, renamed or re-kinded. The A page has 15
items: the 14 design rows plus one local addition,
`lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative`,
which supplies the alternating-class infrastructure needed by the design's
decategorification row (the design's route text "take the alternating graded
class of the two-term complexes" has no other supplier). The published
`lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant` does
not apply — its complexes are termwise projective over one ring, while Soergel
bimodules are not projective over $R^e$ — so the addition is required, not
padding, and it is the kind of helper the owner direction permits.

The pair covers the designed arc: the generator complexes
$F_i=[B_i\to R(1)]$, $F_i^{-1}=[R(-1)\to B_i]$; their mutual inverseness; far
commutativity; the three-term braid relation with no shift; the word complex;
the coherent-action definition; canonical graph comparisons
$c_{t,u}$; the derived graph models $F_i\cong R_{s_i}(-1)$,
$F_i^{-1}\cong R_{s_i}(1)$, $F(\sigma)\cong R_w(-e(\sigma))$; uniqueness and
transitivity of the normalized maps $\gamma_{t,u}$; Rouquier's Theorem 3.5
coherent $B_n$-action; well-definedness up to canonical homotopy equivalence;
the strict rigid monoidal two-braid category (Theorem 3.7); the Euler-class
lemma; and the decategorification proposition in the library's exact Hecke
normalization. The B page adds the $\sigma_1\sigma_2$ computation, the type-$A_2$
three-term equivalence, the comparison loop and a sharp counterexample
separating equal Euler/Hecke classes from homotopy equivalence.

## Source coverage assessment

Gates: `coverage-checklist --require-destination` reports 1 coverage page, 44
harvested results, 0 errors, 0 warnings; `source-fetch-check` reports 6/6
fetch-verified and 6/6 resolved. All six source documents were re-downloaded in
this review and every stamp reproduced exactly at the recorded byte size and
sha256(16):

| Source | Bytes | sha256(16) | Verdict |
|---|---|---|---|
| Rouquier, `math/0409593` | 318321 | `ad965f5c80838824` | matches |
| Gorsky–Kivinen–Simental, `2108.10356` | 564035 | `fa23a61640843b1f` | matches |
| Khovanov, `math/0510265` | 190287 | `548a0eece08bd967` | matches |
| Elias–Krasner, `0906.4761` | 686310 | `eecb32126badc759` | matches |
| Stroppel, EMS `33157` | 971032 | `d4beff51f5e6631c` | matches |
| Libedinsky, `1702.00039` | 3587244 | `b47ca7d1cf7b44be` | matches |

Rouquier §3 was read in full against the manifest. §3.2.1 defines
$F_s=[A\otimes_{A^s}A\to A]$ with the $f_s:A_s\xrightarrow{\sim}F_s(1)$
quasi-isomorphism (item `def-positive-and-negative-rouquier-generator-complexes`,
`lem-rouquier-generator-complexes-have-canonical-derived-graph-models`); §3.2.4
defines $F_s^{-1}$ and Lemma 3.3 proves the two inverse (item
`lem-opposite-rouquier-generator-complexes-are-homotopy-inverse`); Proposition
3.2 proves the braid relations in $K^b(A^{en}\text{-modgr})$ and requires only
$m_{st}<\infty$ (automatic in finite type $A$, items
`lem-rouquier-complexes-satisfy-far-commutativity` and
`lem-rouquier-complexes-satisfy-the-three-term-braid-relation`); §3.3.1
constructs $\gamma_{t,u}$ and the $G_v$ with the unique $m_{v,v'}$, $m_1$
(items `lem-rouquier-derived-comparisons-...`, `lem-rouquier-normalized-comparison-isomorphisms-are-transitive`,
`thm-rouquier-complexes-form-a-coherent-braid-group-action`,
`thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence`);
§3.3.2 states Theorem 3.7 (item
`thm-rouquiers-two-braid-category-is-strict-rigid-monoidal`), with Conjecture
3.8/Remark 3.9 deliberately left to the sibling categorical-action pair. GKS
§3.1 was read through Lemma 3.11: its formulas (3.1)–(3.3) and Theorem 3.10
give $B_i=R\otimes_{R^{s_i}}R(1)$, $T_i=[B_i(-1)\to R]$,
$T_i^{-1}=[R\to B_i(1)]$ and the three braid relations with no shift
($T_iT_i^{-1}\simeq R$, the three-term relation, distant commutation).
The convention dictionary is consistent: library $F_i=T_i(1)$ and library
$F_i^{-1}=T_i^{-1}(-1)$ term by term, so all shifts cancel and the scaffold's
"no shift" claim matches GKS/Rouquier; the published
`def-type-a-soergel-bimodule-for-a-simple-reflection` uses the same
$B_i=R\otimes_{R^{s_i}}R(1)$ with $1\otimes1$ of degree $-1$.

The nine out-of-scope harvest rows are justified and none is promised by the
design or consumed by a consumer: the $D_w$ filtration (§3.2.2) is the device
of Rouquier's alternative Lemma 3.1 proof, while the scaffold uses the published
rank-two decomposition and Gaussian elimination; Conjecture 3.8/Remark 3.9
(faithfulness) sits on `categorical-braid-actions-and-decategorification`,
whose scaffold contains `thm-the-khovanov-seidel-weak-braid-action-is-faithful`;
§3.3.3 (coinvariant restriction, Temperley–Lieb quotient) and §§4–6 (category
$\mathcal O$, flag varieties, Deligne appendix) belong to other pages. Elias–Krasner's
cobordism-functoriality (its §3–§4) is likewise beyond this pair's stopping
point, and only §2.5 is used. Source record: 19 `included`, 9 `already-published`,
7 `inline`, 9 `out-of-scope`, 0 deferred.

## Role in the library and prerequisites

- Prerequisites: four declared `requires` pages are `status: published` with
  the expected item inventories (`type-a-soergel-bimodules-and-hecke-categorification`,
  32 items; `graded-quiver-algebras-and-derived-tensor-functors`, 18;
  `derived-categories`, 60; `bounded-bimodule-complexes-and-derived-tensor`, 6).
  The fifth, `categorical-braid-actions-and-decategorification` (batch 8, order
  757), is in-run and earlier; its scaffold contains the only item the pair
  consumes from it, `def-weak-action-of-a-group-on-a-category`, and the
  cross-batch file records the exact weak-versus-coherent clause for re-check at
  the Step-3 gate.
- Own dependencies: the transitive closure of the 19 items has 433 ids and
  **zero missing**; the only in-run suppliers are the 19 batch-9 items and the
  batch-8 weak-action definition. Every wikilink that occurs in a statement or
  strategy resolves to a published item or a run scaffold. `manifest-deps`
  reports 0 errors over 19 items; `item-dependency-levels` reports 892 run
  items with no error and batch-9 maximum level 7.
- Consumers: the pair is a dependency leaf for the B page and, outside the
  batch, for `hochschild-homology-and-triply-graded-link-homology` (batch 11,
  order 765), which consumes exactly
  `def-positive-and-negative-rouquier-generator-complexes`,
  `def-rouquier-complex-of-a-braid-word` and
  `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence`;
  all three are scaffolded and the recorded convention dictionary
  ($F(\sigma_i)=F_i^{-1}\{1\}$, $F(\sigma_i^{-1})=F_i\{-1\}$) is compatible
  with the items' statements. No other batch references a batch-9 id.
- No unmet prerequisite was found: no item of the pair needs a claim that is
  absent from both the published library and the current scaffold. The one
  in-run supplier edge is open only in the ordinary "re-verify on authored
  content at the Step-3 gate" sense.

## Observations for authoring (non-blocking, no scope change)

1. `ex-normalized-comparison-maps-around-a-relation-loop` chooses
   $t=(1,2,1)$ and $u=(1,2,1)$ (same word), so as written
   $\gamma_{t,u}=\mathrm{id}$ and the advertised loop degenerates. The author
   should pick three pairwise distinct signed words for
   $\sigma_1\sigma_2\sigma_1$ (e.g. insert a cancelling pair in one of the two
   reduced words) so the cocycle check is non-trivial.
2. The design cites EGNO Definition 2.7.1 for
   `def-coherent-action-of-a-group-on-a-category`; that locator is not among the
   pair's six harvested sources. The definition is standard and fully stated,
   and Rouquier §3.3.1/Elias–Krasner §3 supply the instance, but the author
   should pin the two unit triangles to a well-typed standard form (the
   whiskering notation `u∗F_f` against `u:F_1\Rightarrow\mathrm{id}` needs
   checking) and, if the owner wants the design locator honored, add EGNO as a
   reference (definition items need only one URL, already present).
3. Seven items are not individually named in a coverage `item` field
   (`lem-rouquier-complexes-satisfy-far-commutativity`,
   `def-coherent-action-of-a-group-on-a-category`,
   `lem-rouquier-normalized-comparison-isomorphisms-are-transitive`, and the
   four B-page items). Their sources are harvested and each manifest item
   carries its own references, so the omission gate passes; naming them is
   coverage-file enrichment only.
4. Several statement/strategy wikilinks are not listed in the items' `deps`
   (same-page forward mentions such as
   `def-rouquier-complex-of-a-braid-word` → `thm-rouquier-complex-is-well-defined-...`,
   and transitive mentions of `thm-homological-gaussian-elimination-...` in the
   B-page example and `lem-rouquier-derived-comparisons-...` in the coherent-action
   theorem). All targets resolve and are transitively available; the author
   should expect depcheck warnings and either add the direct dependency or
   rephrase.
5. The design's informal sentence "its decategorification is a quotient of the
   braid group" (BG-17 row for the strict-rigid theorem) is deliberately not
   asserted by the scaffold, which proves the multiplicative class assignment
   and points to the decategorification proposition; the batch-9 note records
   this correction. The precise generator-level content is present, so this is
   a recorded deviation, not an omission needing enrichment; the owner may ask
   for the one-line surjectivity clause if the sentence is to be kept verbatim.

## Checks run (actual results)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs …batch-9.coverage.json --require-destination` | Pass — 1 page, 44 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-9.coverage.json` | Pass — 6/6 fetch-verified, 6/6 resolved |
| Independent re-download and sha256/size check of all 6 sources | 6/6 stamps reproduced exactly |
| `node tools/manifest-deps.mjs …batch-9.pages.json` | Pass — 19 items, 0 errors |
| `node tools/item-dependency-levels.mjs check --run …` | Pass — 892 items, 54 pages, no error (batch-9 maximum level 7) |
| Full transitive dependency-resolution scan (433 ids) | 0 missing; 4 published `requires` pages + 1 in-run batch-8 supplier; no forward or cyclic edge |
| Cross-batch consumer scan over all 54 run pages | Only batch 11 consumes batch-9 ids (the three items above); B page is a leaf |
| `node tools/step3-decisions.mjs check --run … --phase scope` (before recording) | This pair reports "current scope review required"; no other batch-9 effect |

## Uncertainty and what this review does not decide

- Scope only. Statement-level correctness and every proof remain for the Step-3b
  author and Step 5 — in particular the explicit contractions of Lemma 3.3 and
  Lemma 3.11, the two Gaussian eliminations behind the three-term relation, the
  degree-zero localization isomorphism in the uniqueness lemma, the strictification
  and triangle identities of the two-braid category, and the exact signs and
  shifts of the B-page computations. I verified that the cited source statements
  exist and say what the design says (Rouquier §3 and GKS §3.1 read directly),
  not that the planned local proofs close.
- The four secondary sources (Khovanov, Elias–Krasner, Stroppel, Libedinsky)
  were byte-verified and their cited regions are consistent with the coverage
  dispositions, but were not re-read end to end in this review; the load-bearing
  claims rest on Rouquier §3 and GKS §3.1, which were.
- Observations 1–5 above are authoring notes; none was treated as a scope
  insufficiency, and none was edited into the scaffold by this role.
- Published suppliers were checked for existence, status and the interfaces
  used here; their own proofs were not re-audited.
