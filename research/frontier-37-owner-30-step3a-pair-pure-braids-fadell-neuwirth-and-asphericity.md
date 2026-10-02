# Step 3a scope review — pair `pure-braids-fadell-neuwirth-and-asphericity`

- Run: `frontier-37-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-pure-braids-fadell-neuwirth-and-asphericity-8a604352669cae32`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `pure-braids-fadell-neuwirth-and-asphericity` (batch 21, order 737,
  category `braid-groups`, 12 items: 1 definition, 4 lemmas, 5 theorems,
  2 corollaries)
- B page: `pure-braids-fadell-neuwirth-and-asphericity-examples` (batch 21,
  order 738, `requires` only the A page, 4 items: 3 examples,
  1 counterexample)
- Decision: **`sufficient`**, recorded with the prescribed `record-scope`
  command.
- Date: 2026-09-30.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt. The pair remains owned by its author/repair owner.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-braid-groups-track.md` BG-5,
lines 340–374 (A page id line 342, six declared `requires` lines 343–347,
the twelve designed A items lines 351–362; B page id line 366, the four
designed B items lines 370–373). The track role table fixes the subject at
line 43: “forgetful fibrations, free kernels, asphericity and pure
generators.” The track §0 architecture statement (branch 1) says pure braids
“support the Fadell–Neuwirth tower, asphericity, and the Artin action on a
free group,” and the BG-4 “Deferred proof joint” (lines 322–325) makes BG-5
responsible for proving π₂ vanishing first, so the point-pushing injectivity
is not assumed to prove it.

Intended subject, from the design: the finite punctured open disk has a
wedge-of-circles spine with an explicit free meridian basis and vanishing
higher homotopy; the published Fadell–Neuwirth forgetful fibration and the
explicit planar far-right cross-section; the π₂ induction from the long exact
sequence; the split short exact sequence
1 → F_{n−1} → PB_n → PB_{n−1} → 1; point pushing as the kernel of forgetting
a puncture (through the batch-20 pure mapping-class comparison); asphericity
of ordered and unordered planar configuration spaces (K(PB_n,1) and
K(B_n^conf,1) in the higher-homotopy sense); the standard geometric
generators A_ij, the A_{i,n} free-kernel basis, generation of PB_n, and
torsion-freeness of PB_n. The B page witnesses low ranks and convention
choices: PB₂ ≅ ℤ, PB₃ ≅ F₂ ⋊ ℤ with the section action, A_ij as point
pushes, and the generic-extension counterexample that the braid-to-symmetric
short exact sequence alone cannot give torsion-freeness of B_n.

Role and consumers. Five of the six declared prerequisite pages are
published and earlier in reading order — `ordered-and-unordered-configuration-spaces`,
`braids-as-fundamental-groups-of-configuration-spaces`,
`free-groups-and-presentations`, `semidirect-products-and-automorphism-groups`,
`fibrations-fiber-bundles-and-homotopy-exact-sequences` — and the sixth,
`punctured-disks-mapping-classes-and-point-pushing`, is the in-run batch-20
supplier (order 735 < 737). Within the run, the batch-22 pair
`artin-presentation-completeness-and-braid-combing` requires this A page and
its items `lem-the-combed-geometric-decomposition-is-unique` and
`thm-the-artin-presentation-is-complete-for-geometric-braids` depend on
`lem-standard-pure-braids-generate-each-free-kernel`,
`cor-the-pure-braid-extension-splits`,
`thm-pure-braid-forgetting-a-strand-short-exact-sequence` and
`def-standard-pure-braid-generators`; those uses are exactly the promised
free-kernel basis and split tower. Later pages of the same track reuse
`lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` (BG-8
`def-standard-meridians-of-a-punctured-disk`, BG-9 reduced Burau rank
lemma). A recursive scan of `items/` and `library/` finds no published item
or page referencing the sixteen new ids (they are drafts), so the pair
consumes predecessors and is consumed only by later run-internal pages.
The run-level Step-1 drift review records `no-drift` for this pair
(`research/frontier-37-owner-30-alpha-step1-drift.md` lines 105–108) and no
owner authoring direction file exists for this run.

## 2. Design-to-manifest mapping

I diffed the design ids against `research/frontier-37-owner-30-batch-21.pages.json`:

- A manifest is exactly the twelve designed A ids, in design order, with
  matching kinds: spine lemma, π₂ lemma, split-sequence theorem,
  point-pushing theorem, planar-section lemma, splitting corollary, ordered
  asphericity, unordered asphericity, generator definition, kernel-basis
  lemma, generation theorem, torsion-freeness theorem. No added,
  renamed or dropped item.
- B manifest is exactly the four designed B ids with matching kinds:
  PB₂ example, PB₃ example, point-push example, torsion counterexample.
- `research/braid-groups-planning/proposed-items.json` carries the same
  sixteen ids with the design dependency lists, and
  `research/braid-groups-planning/pages.json` carries the same page records;
  `research/plan-spec.json` orders 737/738, titles, companions and all six
  A-page `requires` agree with the manifest. The plan rows carry empty item
  arrays (unspliced), so the batch manifest is the inventory of record, as
  for the other pairs of this run.

The only design-to-manifest dependency difference is documented and does not
change a claim: `lem-the-planar-forgetful-map-has-a-continuous-section` drops
the design’s `thm-fadell-neuwirth-forgetful-fibration` dependency and uses
the explicit radical section s(z₁,…,z_{n−1}) = (z₁,…,z_{n−1},
1+Σ|zᵢ|) with the punctured-fiber path adjustment instead, so the lemma is
choice-free (batch-21 notes, “Scope and design control”). The manifest
otherwise adds explicit published interface, AC and AC⇒DC dependencies
that the designed proof routes need; no designed dependency was removed
except that one, and no promised statement changed.

Dependency levels are 0–8 on A and 4–9 on B, every in-run prerequisite
precedes its consumers, no A item depends on a B item, and the B page
requires only its A companion.

## 3. Source coverage

`research/frontier-37-owner-30-batch-21.coverage.json` records one A-page
entry with four independent treatments and 30 dispositions: 10 `included`,
8 `inline`, 5 `already-published`, 6 `out-of-scope` and 1 `deferred`.
All four sources are fetch-verified, and I re-downloaded and hash-matched
every one against the recorded stamps:

| Source | Recorded stamp | Re-downloaded match |
| --- | --- | --- |
| González-Meneses, *Basic results on braid groups*, arXiv:1010.0321 | 474,454 B; `8fef987df3601d1e`; 45 pp. | identical size and SHA-256 prefix |
| Fadell–Neuwirth, *Configuration Spaces*, Math. Scand. 10 (1962) | 649,774 B; `ae27d6eb1cc84577`; 8 pp. | identical size and SHA-256 prefix |
| Hatcher, *Algebraic Topology* | 8,121,741 B; `bebb3032bf9021b9`; 560 pp. | identical size and SHA-256 prefix |
| Birman–Brendle, *Braids: A Survey* | 809,077 B; `22f52d9961a3f0fc`; 91 pp. | identical size and SHA-256 prefix |

I re-read the named results myself in the three text-extractable sources:

- GM §2.1 “First proof: Short exact sequences” (arXiv file pp. 11–14):
  equation (2.1) 1→PB_n→B_n→Σ_n→1; equation (2.2)
  1→F_n→PB_{n+1}→PB_n→1 with ι(xᵢ)=(σ_n⁻¹⋯σ_{i+1}⁻¹)σᵢ²(σ_{i+1}⋯σ_n);
  Theorem 2.1 (p: M_{n+1}→M_n locally trivial) with the explicit
  cross-section s(z)=(z, |z₁|+⋯+|z_n|+1) and the splitting of (2.2);
  equation (2.3) with the π₂ vanishing induction; Theorem 2.2 that M_n and
  N_n are K(π,1); Corollary 2.3 (B_n torsion-free, deferred).
- Birman–Brendle §1.2–1.3 (author manuscript pp. 4–7): generators
  A_{r,s}, presentation relations (4), the split short exact sequence (5)
  1→F_{n−1}→P_n→P_{n−1}→1 with F_{n−1} generated by
  A_{1,n},…,A_{n−1,n}, P₂ ≅ ℤ generated by A_{1,2} with the iterated
  semidirect-product remark, and Theorem 1 with its evaluation-fibration
  LES proof.
- Hatcher §1.A–1.B (printed pp. 83–88): Propositions 1A.1–1A.2,
  Lemma 1A.3, Theorem 1A.4 and Example 1B.1, the graph/tree/covering and
  graph-as-K(G,1) facts used by the spine lemma.

The declines are faithful to the pair’s claim set, not evasions: the five
`already-published` rows are the published BG-2/abstract-algebra suppliers
this page consumes (GM (2.1), GM Theorem 2.1, FN Theorems 1 and 3, Hatcher
Theorem 1A.4); the eight `inline` rows are used inside the planned proofs
(FN Theorem 2 and §IV, Hatcher 1A.1–1A.2/1A.3/1B.1, BB Theorem 1 and §1.3);
the six `out-of-scope` rows are genuinely beyond this planar pair’s claims —
FN Corollary 2.2’s general compact-surface asphericity with its sphere and
projective-plane exceptions, Corollary 2.3’s coincidence-free extension of
sphere maps, Theorems 4–5 on product triviality and cross-sections for
general manifolds, Theorem 6’s homeomorphism-group connectivity bounds, and
BB’s full pure-braid relation presentation; the one `deferred` row is GM
Corollary 2.3, full-braid torsion-freeness, whose destination page
`garside-structure-normal-forms-and-the-center` is itself already published
with `thm-braid-groups-are-torsion-free-by-the-garside-lattice`. The
`coverage-low-yield` warning counts only the 10 `included` rows; the other
20 rows are independently accounted for above and none of them carries a
claim this pair promises.

Honest limitation: the Fadell–Neuwirth item is an image-only journal scan.
My text tools extract nothing from it and I have no OCR in this environment
(`view_image` is unavailable to me), so I could not independently re-read
FN’s Theorems 1–6 and §IV. The FN rows rest on the Step-1 visual inspection
recorded in `research/frontier-37-owner-30-batch-21.notes.md` (“§II printed
pp. 111–114 … §IV opening printed pp. 116–117”). Two independent
corroborations make this acceptable for a scope decision: the two
load-bearing FN rows are `already-published` BG-2 items whose local proofs
are on disk and which cite FN §II directly
(`lem-forgetting-configuration-points-is-locally-trivial`: Theorem 1 and its
proof, printed pp. 111–113; `thm-fadell-neuwirth-forgetful-fibration`:
Theorem 3, printed p. 113),
and GM Theorem 2.1/2.2 credit [31] = Fadell–Neuwirth with the same local
triviality and K(π,1) statements, matching the dispositions. This is a
proof-level re-verification obligation for Step 3b/5, not a scope gap.

## 4. Dependency and interface checks (re-run today)

| Check | Result |
| --- | --- |
| `node tools/source-fetch-check.mjs --coverage research/frontier-37-owner-30-batch-21.coverage.json` | 4/4 fetch-verified, 0 documented drops |
| `node tools/coverage-checklist.mjs --require-destination …coverage.json` | 1 page, 30 harvested rows, 0 errors, 1 explained low-yield warning |
| `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-21.pages.json` | 16 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-37-owner-30-batch-*.pages.json` | 778 items, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0; 778 items, 60 pages, max level 31 |
| `node tools/step1-decisions.mjs check --run frontier-37-owner-30` | 778/778 ready, closed, no work |
| Step-1 receipts for the 16 owned ids | 16/16 `ready`, 0 escalated |

Dependency resolution: all 40 distinct dependencies of the sixteen items
resolve — 27 are published items on disk (all `status: published`) and 13 are
in-run scaffolds, of which 10 are earlier items of this same page and 3 are
batch-20 items (`def-point-pushing-homomorphism-for-a-puncture`,
`cor-pure-braids-are-pure-punctured-disk-mapping-classes`,
`thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk`).
No missing, out-of-run or B-page dependency exists. The run-level
cross-batch record carries five `open` rows naming this pair (one page edge
consuming batch 20, four item edges consuming the batch-20 point-pushing
definition and pure mapping-class comparison); they are Step-3 proof-review
obligations about the authored batch-20 suppliers, not scope omissions —
note in particular that a single-batch `content-policy` invocation flags the
three batch-20 ids as “batch-dependency-missing,” which the whole-run
invocation correctly clears.

Choice bookkeeping is consistent with the design: every item that consumes
the published Fadell–Neuwirth fibration or an AC-qualified published
interface declares AC and `def-axiom-of-choice` plus the published AC⇒DC
theorem, while the planar section lemma and the standard-generator
definition are choice-free. The published fibration item itself declares
`def-axiom-of-choice`/`def-dependent-choice`, so the consumers’ hypotheses
match their supplier.

## 5. Observations for the owner (no decision change)

1. **The classical pure-braid relation presentation is unowned.** BB
   relations (4) (the A_{r,s} conjugation relations) are declared
   out-of-scope in the coverage, and no other planned page states a pure
   presentation: BG-6 proves completeness of the Artin presentation (a
   different presentation), not the distinct A_ij presentation. No consumer
   needs it and this pair promises generation only, so this is not a scope
   defect here; if the owner wants it in the library it needs a future item
   (its statement is within reach of BG-6 completeness plus this pair’s
   generation theorem, but it is promised nowhere today).
2. **GM locator parenthetical.** The coverage’s GM locator says “printed
   pp. 11–13 (PDF pp. 12–14)”; in the hash-verified arXiv file the printed
   page number equals the PDF page number, §2.1 runs pp. 11–14, and
   Corollary 2.3 sits on p. 14. The named-results claim is correct and was
   verified in full; only the PDF-page parenthetical is off by one. This is
   a record-precision note for the Step-5 source gate.
3. **Design citation of FN Corollary 2.2.** The design row for the π₂ lemma
   cites “FN Theorem 2 and Corollary 2.2, pp. 113–114,” while the coverage
   correctly scopes FN Corollary 2.2’s general compact-surface statement
   out. The planar instance is what the page proves locally through the
   LES; the two records should be reconciled (or the citation narrowed) when
   the proof is authored/verified.
4. **Thin B page.** Four items is the complete BG-5-B design and the page is
   a dependency leaf by plan; there is no promised PB₄ computation, explicit
   wedge-of-circles worked example, or iterated-semidirect-product item for
   n ≥ 4. If the owner wants more examples that is an enrichment decision
   beyond the approved inventory, not a missing promise.
5. **Published dependency-precision defects** recorded by Step 1 (the
   partitions-of-unity corollary omitting its AC/DC direct dependencies and
   the time-dependent vector-field definition omitting countable choice) lie
   in published transitive suppliers of the batch-20 mapping-class chain.
   This pair’s items declare AC directly, so its route is unaffected; the
   findings belong in the canonical published-defect ledger.

## 6. Scope judgement

`sufficient`. The planned definitions, results and examples cover the
designed subject: the manifest is exactly the twelve designed A items and
four designed B items with no renames, drops or additions; every load-bearing
claim has a fetch-verified source, and I re-read the named GM, BB and Hatcher
results in hash-matched full texts (with the FN image-only limitation
disclosed and corroborated); the declines in the 30-row harvest are
individually justified and none hides a promised claim; all sixteen Step-1
receipts are current `ready`; every dependency resolves to published or
in-run items; the whole-run dependency, content-policy and level checks
pass; five of six prerequisite pages are published and the sixth is the
earlier in-run sibling; and the pair’s downstream role (BG-6 combing,
BG-8/BG-9 meridian reuse) is supplied by its promised items. The §5
observations are recorded rather than presumed resolved and require no
change to this scope decision.

## 7. Evidence index

- Design: `research/plan-braid-groups-track.md` line 43 (role), lines
  322–325 (deferred point-pushing joint), lines 340–374 (BG-5 A and B
  designs); `research/braid-groups-planning/pages.json`,
  `research/braid-groups-planning/proposed-items.json` (same sixteen ids).
- Plan: `research/plan-spec.json` orders 735/737/738 (items empty,
  unspliced).
- Batch inputs: `research/frontier-37-owner-30-batch-21.pages.json`,
  `…-batch-21.coverage.json`, `…-batch-21.notes.md`,
  `…-batch-21.cross-batch-dependencies.json` (5 rows, all `open`),
  `…-cross-batch-dependencies.json` (400 edges; 5 name this pair).
- Step-1 status: 16 `research/frontier-37-owner-30-step1-<id>.json`
  receipts (`ready`), `…-alpha-step1-drift.md` (`no-drift`),
  `…-scope-ledger.json` (both pages, batch 21),
  `…-drift-evidence.json` (design locations 43/342/366/378).
- Sources: GM `https://arxiv.org/pdf/1010.0321` (§2.1 read at
  pp. 11–14), BB `https://www.math.columbia.edu/~jb/Handbook-21.pdf`
  (§§1.2–1.3 read at pp. 4–7), Hatcher
  `https://pi.math.cornell.edu/~hatcher/AT/AT.pdf` (§§1.A–1.B read at
  printed pp. 83–88), FN
  `https://tidsskrift.dk/math/article/download/10517/8538` (rows rest on
  Step-1 visual inspection; scan is image-only). All four re-downloaded
  with matching sizes and SHA-256 prefixes.
- Checks run in this review: design-vs-manifest id/kind diff; proposed-item
  dependency superset diff; published/in-run dependency resolution;
  consumer and cross-batch scans; `source-fetch-check`;
  `coverage-checklist --require-destination`; `manifest-deps`;
  `content-policy --manifest-only` (whole run); `item-dependency-levels
  check --run frontier-37-owner-30`; `step1-decisions check --run
  frontier-37-owner-30`.

## 8. Not done (out of role)

No item approval or refutation, no proof-level verification of the sixteen
items, no owner record, no ledger write, and no scaffold, manifest,
coverage, prose, plan or engine edit. Step 3b and Step 5 own proof
correctness and item evidence; the FN scan and the two record-precision
notes in §5 are carried forward as obligations, not resolved here.
