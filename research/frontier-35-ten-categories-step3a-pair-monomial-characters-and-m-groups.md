# Step 3a scope review — pair `monomial-characters-and-m-groups`

- Run: `frontier-35-ten-categories` (stage `3a-scope`), dispatch label
  `step3a-pair-monomial-characters-and-m-groups-61326b5557a19e0f`
- Role: alpha (scope reviewer; not owner, not item author)
- A page: `monomial-characters-and-m-groups` (batch 9, order 510.041,
  `representation-theory`, 10 items: 1 definition, 5 lemmas, 2 theorems,
  1 corollary, 1 remark)
- B page: `monomial-characters-and-m-groups-examples` (batch 9, order 510.042,
  4 items: 3 examples, 1 counterexample)
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page monomial-characters-and-m-groups --decision sufficient`.
- Date: 2026-09-24.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record.

## 1. Intended subject and role in the library

The controlling prose design is RG-6 in
`research/plan-representation-theory-groups-track.md` lines 439–476, with the
track summary at line 37 ("monomial representations, supersolvable groups,
limits of the theory"), the design's own heading table `RG-6/H1`–`RG-6/H5` at
lines 2350–2354 (every heading `included`, each mapped to named item IDs), and
the anti-padding rows at lines 2502–2503 (`tom Dieck §4.6, further examples`
→ `inline`; `Li §12.5, classification questions for M-groups` →
`out-of-scope`). The design's hard proof plan (lines 462–466) is reproduced by
the manifest: induct on `|G|`, quotient by the kernel, use the noncentral
abelian normal layer plus Clifford induction from the proper inertia group,
use induction–inflation compatibility for the quotient step, and keep Brauer's
virtual-character statement separate from the M-group theorem.

Page prerequisites are the three the plan declares at line 2674, and all three
are published and earlier in order:

| prerequisite | order | status |
| --- | --- | --- |
| `brauer-induction-and-elementary-subgroups` (RG-2) | 510.033 | published |
| `clifford-theory-over-normal-subgroups` (RG-4) | 510.037 | published |
| `induced-representations-and-frobenius-reciprocity` | 149 | published |

Step-1 drift verdict: `no-drift` (`frontier-35-ten-categories-alpha-step1-drift.md`
lines 87–92). The run's owner direction file
(`frontier-35-ten-categories-owner-authoring-direction.md`) does not mention
this pair; the Step-1 deferrals it lists are elsewhere.

Consumer check. No published item or page references this pair, its page IDs or
any of its 14 new item IDs (recursive scan of `library/` and `items/`: 0
hits). No other in-run batch manifest references them (0 hits outside batch
9), and `frontier-35-ten-categories-batch-9.cross-batch-dependencies.json` is
`[]`. The pair is a terminal supplier with only its B companion downstream;
its role is the library's self-contained monomial/M-group spine
(definition → matrix model → supersolvable theorem → Brauer virtual induction →
Taketa → boundary → worked examples), not a supplier for RG-7, which does not
list it.

## 2. Design-to-manifest mapping

All 9 designed A items and all 4 designed B items are present in
`research/frontier-35-ten-categories-batch-9.pages.json` with the designed
kinds and proof order; nothing in the design is dropped or weakened, including
the "limits of the theory" remark and the binary-tetrahedral counterexample
that makes it substantive.

The A page adds one support item beyond the design table:
`lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup`, the sharp
`ker(Ind_H^G W) = ⋂_{g} g(ker W)g^{-1}` form used inside the Taketa proof
(`cor-m-groups-are-solvable`). It is an internal step of a designed claim, not
new subject matter; the cited SLMath Chapter 9 proves only the weaker
`ker(α^G) ⊆ H` at PDF pp. 387–390, so the extra lemma is the honest sharpening
needed by the local route.

Recorded route correction (scope-neutral). The design says the virtual-character
theorem is "cited as a consequence of RG-2". The scaffold instead re-proves it
locally (`thm-monomial-induction-for-virtual-characters`) through the published
elementary detection/induction-ideal lemmas plus the new local supersolvable
theorem, because the published Brauer chain
(`lem-monomiality-lifts-along-a-quotient` → `thm-finite-supersolvable-groups-are-monomial`
→ `thm-brauer-induction`) carries proof gaps recorded in
`frontier-35-ten-categories-batch-9.notes.md`. The consequence is that four of
the ten A items are new-ID restatements of results that already exist published
under different IDs:

| local item | published counterpart |
| --- | --- |
| `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced` | `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup` |
| `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup` | `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup` (defect-flagged) |
| `thm-supersolvable-groups-are-m-groups` | `thm-finite-supersolvable-groups-are-monomial` (defect-flagged) |
| `thm-monomial-induction-for-virtual-characters` | `thm-brauer-induction` + `lem-p-elementary-characters-are-induced-from-linear-characters` (defect-flagged) |

This duplication is a deliberate, documented proof-route repair, not a scope
change, and it is the reason the pair can stand on a defect-free chain. I
verified mechanically that the 14 items' transitive dependency closure does
**not** reach `lem-monomiality-lifts-along-a-quotient`,
`thm-finite-supersolvable-groups-are-monomial`, `thm-brauer-induction`,
`lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`
or `lem-p-elementary-characters-are-induced-from-linear-characters`, while it
does reach the sound `lem-p-elementary-groups-are-supersolvable` and
`lem-elementary-detection-at-a-fixed-element`. The three published proof defects
remain owner-held ledger material; they do not block this pair's scope.

## 3. Source coverage

`research/frontier-35-ten-categories-batch-9.coverage.json` has one entry for
the pair's A page, four independent treatments and 83 harvested results;
`node tools/coverage-checklist.mjs … --json` (rerun 2026-09-24) reports
2 pages, 83 harvested, 0 errors, 0 warnings. I re-fetched all four cited full
texts and reproduced the recorded stamps exactly (bytes / sha256-16):
tom Dieck 599,982 / `16052fdeb2dbe0c1`; Li 3,801,706 / `06a67f5483a837af`;
SLMath 461,875 / `88de306969e54bcf`; Garrett 341,493 / `0ae6aa319363a877`.

What I read directly in the fetched files (page numbers as in each PDF):

- tom Dieck §4.3 (pp. 57–59): the definition of a monomial representation and
  of a monomial group; the coset-basis computation yielding exactly one nonzero
  entry per row/column; the supersolvable definition as a string of normal
  subgroups with prime-order factors (p. 57–58); Theorem 4.3.1 "Supersolvable
  groups are monomial", proved after 4.3.4; Proposition 4.3.2 (faithful
  irreducible with noncentral abelian normal `A` is induced from a proper
  subgroup); Lemma 4.3.3 (nonabelian supersolvable has a noncentral normal
  abelian subgroup, via `G/Z(G)`); Lemma 4.3.4 (induction commutes with
  lifting along a surjection); Problem 1 (binary tetrahedral group
  `Q8 ⋊ C3`, faithful SU(2) representation, no index-2 subgroup, solvable,
  quotient `A4`). Everything in that range is harvested and mapped to an item.
- tom Dieck §4.6 (pp. 64–65): Theorem 4.6.3 (monomial induction, the design's
  target for `thm-monomial-induction-for-virtual-characters`), 4.6.5 Brauer
  induction (already published), 4.6.6 splitting field (already published),
  4.6.7 scalar descent (declined with reason). 4.6.4/4.6.8/4.6.9 belong to the
  already published Brauer page.
- Li §12.5 (PDF pp. 153–155 = printed 146–148): Definition 12.5.1 (each `G_i`
  normal in the whole group — the convention the local statements adopt),
  Lemma 12.5.2, Exercise 12.5.4 (induction–inflation),
  Exercise 12.5.5 (abelian irreducibles are linear), Theorem 12.5.6 and its
  complete proof, plus the closing sentence "supersolvable groups are
  M-groups". Exercise 12.5.7 (S3) is declined with a reason.
- Li §14.3 (PDF pp. 169–171 = printed 162–164): Theorem 14.3.1 (Brauer,
  already published), Corollary 14.3.2 (integral monomial induction — the
  exact statement of the local virtual-character theorem), Lemmas 14.3.3–14.3.6
  (already published / declined with reason).
- SLMath Chapter 9 (pp. 374–404 read): monomial-character and M-group
  definitions, "every linear character is monomial", the induced-character
  kernel lemma `ker(α^G) ⊆ H` with proof (pp. 387–390), and the complete
  Taketa proof by induction on character degrees (pp. 391–404), ending with
  `G^(k) ⊆ ker χ` and the open question about `dl(G) ≤ |cd(G)|` for general
  solvable groups. This chapter is the independent backing for Taketa; neither
  RG-6 design source states or proves it.
- Garrett §§1–2 (pp. 1–3): the order-`q³` matrix law
  `(x,y,z)(x',y',z') = (x+x', y+y', z+z'+xy')`, center and commutators, the
  maximal abelian subgroup `A`, irreducibility of `Ind_A^H ψ`, and the
  dimension count `q² + (q−1)·q² = q³` giving the `p−1` degree-`p`
  irreducibles. Garrett assumes odd `q`; the B item states that the local
  calculation also covers `p = 2`.

Cross-run obligations discharged. `frontier-31a-batch-19.coverage.json` deferred
"Theorem 4.6.3 (monomial induction)" and "Problem 4.3.1 (binary tetrahedral
group)" to `monomial-characters-and-m-groups`; both are now owned
(`thm-monomial-induction-for-virtual-characters`; the counterexample and
`rem-m-group-converses-and-boundary`). `frontier-34-batch-14.coverage.json`
deferred tom Dieck §4.3 Problem 1 to
`monomial-characters-and-m-groups-examples`; it is now
`cex-solvable-group-need-not-be-an-m-group`.

Coverage observations (recorded, not scope blockers):

- O1. The SLMath locator ("PDF slides pp. 374–404") understates the range the
  scaffolder actually used: the harvested rows "Exercises 9.3–9.4" are at
  PDF pp. 405–406 ("nilpotent groups are M-groups", "if G′ is abelian then G
  is an M-group"). Both are correctly marked `out-of-scope` with a reason, and
  neither is needed by a designed claim, so no item statement is affected; the
  locator should be corrected to pp. 374–406 if the record is ever refreshed.
- O2. The same chapter continues past the read range (pp. 407–418) with M-group
  structure material that is not harvested anywhere: the strictness remark
  "all supersolvable groups are M-groups, but not conversely" (p. 408; the
  standard witness is `S4`, which the literature confirms is monomial,
  non-supersolvable and non-`A`-group), Exercise 9.5 (a monomial induction can
  be taken from a subgroup containing any given normal abelian subgroup),
  Dade's theorem that every solvable group embeds in an M-group (so M-groups
  can have non-M subgroups), and the coprime normal-subgroup theorem
  (`N ⊴ G`, `(|N|,|G:N|)=1`, `G` an M-group ⇒ `N` an M-group) with its proof.
  All of this is outside RG-6's declared spine, and the plan expressly declines
  "classification questions for M-groups" as out-of-scope (line 2503), so I did
  **not** treat it as a scope failure of this pair. Because this pair is the
  library's only M-group page, I flag it for the owner as candidate material
  for a future enrichment or successor page; nothing in the current design,
  coverage record, plan or consumer set requires it.
- O3. Tom Dieck's adjacent supersolvable closure facts ("subgroups and factor
  groups of supersolvable groups are supersolvable", p. 58) are used inline in
  the local proof strategy but appear in no harvest row; that is an `inline`
  case the record could name.

All `already-published` mappings in the coverage resolve to existing published
items (`thm-brauer-induction`, `cor-cyclotomic-field-splits-a-finite-group`,
`def-supersolvable-groups-and-monomial-characters`, `thm-clifford-correspondence`,
`thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`,
`lem-hyperelementary-permutation-subring-reduction`,
`lem-banaschewski-prime-obstruction`; all `status: published`). No false
mapping of the kind found in the finite-abelian-characters pair.

## 4. Integrity, dependency and consumer checks (rerun 2026-09-24)

- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-9.pages.json`
  → 30 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs … --manifest-only` → 30 scoped items,
  0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs … --json` → 2 pages, 83 harvested,
  0 errors, 0 warnings.
- Transitive closure of the 14 items over `items/*.md` and the run manifests:
  529 distinct IDs, every external one `status: published`, 0 unresolved,
  and no dependency whose plan order exceeds 510.041 (no forward references,
  no not-proved-here/`proved_here:false` reach — all reached items are
  published). The three declared prerequisite pages are among it.
- The defect-flagged published Brauer chain is not reached (section 2).
- No duplicate ID: none of the 14 new IDs exists in `items/` or `library/`.
- No consumer: 0 references from other batches, `items/` or `library/`.

## 5. Uncertainty and considered-and-declined additions

- This review does not judge proof correctness. The manifest statements and
  strategies were read only to decide whether the pair's subject matter is
  complete; several plan-level strategy claims (e.g. the inline derivation of
  subgroup-supersolvability, the `p = 2` Heisenberg count, the S4-free boundary
  remark) are Step-3b/Step-5 obligations, not scope decisions.
- Considered and declined as scope blockers: metabelian ⇒ M-group and
  nilpotent ⇒ M-group (SLMath Exercises 9.3–9.4; nilpotent already follows
  from the designed supersolvable theorem), the M-group structure results of
  O2, and an `S4`-type witness that the supersolvable inclusion is strict.
  None is named in RG-6, in the RG-6/H1–H5 table, or in any consumer; adding
  them would enlarge the page beyond the commissioned spine.
- Operational note (not mathematical): two identical dispatch files exist for
  this pair (`…61326b5557a19e0f` and `…d4a70760791f174a`, byte-identical).
  No second agent is live, no scope receipt existed before this one, and the
  receipt is idempotent per A page, so the duplication has no effect on this
  decision.

## 6. Decision

Scope decision for the A page (and hence the pair): **`sufficient`** — the
planned definitions, results and examples cover the intended subject, match the
RG-6 prose design item-for-item (plus one internal support lemma), are backed by
four independently re-verified full treatments, rest on published earlier
prerequisites with no forward reference, and introduce no unowned subject
matter. Receipt:
`research/frontier-35-ten-categories-step3a-review-monomial-characters-and-m-groups.json`.
