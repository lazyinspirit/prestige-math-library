# frontier-37-owner-30, batch 23 — Step 1 scaffold notes

Owned pair: `integral-specht-modules-and-modular-simple-modules` (A, order 809)
and its examples page (B, order 811). The manifest now contains 14 A items and
four B items; all 18 have current `ready` records written one at a time, after
each item was added, through `tools/step1-decisions.mjs`. These are scaffold
assessments, not independent mathematical approval. No item body, published
content, shared plan, engine state, verdict, or other batch manifest was edited.

## Instructions, scope and design reconciliation

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated
batch-23 task, `briefs/beta-scaffold.md`, the complete SYMR-6 design section in
`research/symmetric-group-planning/proposed-inventory.md` (lines 157–186), the
surrounding conventions and warnings in
`research/plan-symmetric-group-representations-track.md`, the assigned batch
manifest, the current `research/plan-spec.json` entries, run planning/status
evidence, and the relevant published prerequisite statements and proofs. No
`research/frontier-37-owner-30-owner-authoring-direction.md` exists. The
current plan and design agree on the page IDs, category, title, companions and
three A-page prerequisites; **there is no plan-versus-design conflict**.

The design's proposed proof joints needed three local additions before their
consumers: `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`,
`lem-field-antisymmetrizer-image-and-dominance`, and
`lem-conjugate-specht-sign-duality-over-fields`. The published RG-9 tableau
module, Hermitian form, Garnir relation and standard-basis theorem are stated
over **C**. Integral identities are transported through the torsion-free
tabloid lattice, and the standard-polytabloid unit triangular minor supplies
the required saturated lattice and base change. In particular, the complex
Garnir proof divides by a subgroup order only after first establishing an
integer vector identity; the modular item uses that integer identity, not a
division in characteristic p. The local bilinear form is distinct from the
published positive Hermitian form.

The design's last B counterexample used `(2,2)` in characteristic two as one
witness for both reducibility and a vanishing form head. That Gram computation
proves the latter, not the former. The retained item now uses `(2,1)` in
characteristic three for reducibility and `(2,2)` in characteristic two for a
nonzero Specht module with zero form quotient. Direct tabloid expansion gives
the `(2,2)` Gram matrix `[[4,2],[2,4]]`, with ranks 0, 1 and 2 for p=2, p=3
and p>3. The `S_3` matrices are `[[1,0],[0,1],[1,0]]` at p=2 and
`[[1,0],[1,1],[0,1]]` at p=3, with rows `(3),(2,1),(1^3)` and columns
`D^(3),D^(2,1)`. This corrects a design witness while preserving both useful
claims and all four promised B items.

The original design cites Craven Theorem 2.12 as support for the simple
classification. In the inspected text that theorem states Nakayama's block
claim; Craven Corollary 2.14 is the simple classification. Coverage records
the correct locators. Nakayama is deferred to the planned
`cores-quotients-and-blocks-of-symmetric-groups` page and is not consumed here.

## Mathematical and dependency audit

The modular contract fixes prime p, left actions, and the published splitting
p-modular system `(K,O,k)` for `S_n`; no algebraically closed hypothesis is
silently inserted. `D^lambda` is the James radical quotient and its form
radical is not identified with the module radical until the field James
submodule theorem proves the unique simple head. The arbitrary-field theorem
uses the integral rank-one antisymmetrizer calculation, not Maschke or
positivity. The Gram-gcd lemma records both factorial divisibility bounds and
the row-reversal coefficient needed by the dominance-map lemma. The simple
classification counts p-regular conjugacy classes via cycle type and the
finite-coefficient Euler-product identity, then uses the published Brauer
simple-count theorem with its splitting-field hypothesis. The matrix theorem
uses the actual O-lattice reduction, the dual of `M^lambda/S^lambda`, and the
strict dominance argument; its rows and columns and lower-triangular
orientation are explicit. The conjugate/sign lemma is proved on the group
side before the p-restricted dual-Specht label translation; no future Hecke or
Fock result is used.

Every owned item has explicit `deps` and a `dependency_level` between 0 and 8.
An independent traversal from the 18 owned roots reached 583 items: 18 owned
and 565 external, all 565 published; it found no missing ID, nonpublished
supplier, cycle, Recorded result, or malformed `justified_by` backlink among
36 reached backlinks. The 24 distinct direct external IDs were checked
against their actual statements and relevant proofs, including RG-9's exact
complex coefficient limitation, the published modular-system and radical
definitions, the Brauer class-count proof, cycle-type classification, and the
decomposition-map lattice-independence proof. No published defect in an actual
prerequisite was established. None of the 18 strategies uses AC: all tableau,
group-algebra, Gram and counting constructions are finite. The B page remains
a dependency leaf and the three A prerequisites are published on disk. There
is no new page split, prerequisite pair, cross-batch item edge or cross-batch
page edge. The owned consumer-batch dependency input is `[]`; a read-only
ledger collection found no batch-23 edge. The unified ledger was not rewritten
because this dispatch permits only consumer-batch input edits.

## Full-text sources and harvest

The complete source-heading crosswalk, dispositions, supported item IDs and
exact locators are in
`research/frontier-37-owner-30-batch-23.coverage.json` (55 harvested
results). Four independent full texts back the A page:

| Treatment | Inspected proof range and supported items |
|---|---|
| [James, *The Representation Theory of the Symmetric Groups*](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf) | §§6.7, 8.14–8.15, 10.2–10.6, 11.1–11.7, 12.1–12.4, §24 opening; integral duality, Gram gcd, radical quotient, dominance, classification, triangularity and B computations. Complete 161-page book scan. |
| [Law/Tomczak, *Representation Theory of Symmetric Groups*](https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf) | §§2.2–2.3, printed pp. 11–22; field James theorem, absolute simplicity, formal p-regular count and standard basis. Complete 76-page lecture-note set. |
| [Craven, *Groups, Geometries and Representation Theory*](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf) | §2.3, printed pp. 23–27, especially Proposition 2.9, Proposition 2.10, Corollaries 2.11 and 2.14; independent Gram/dominance/triangularity checks. Complete 42-page course notes. |
| [Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*](https://arxiv.org/pdf/0909.4844) | §5.2 and §5.3 Remark 5.5, PDF pp. 22–25; dual-Specht convention and transpose/sign dictionary. Complete 66-page survey. |

`source-fetch-check --stamp` fetched 4/4 complete PDFs. The fetched SHA-256
prefixes and page counts match the inspected cached documents: James
`e339ca5fb1ff9d78`/161, Law/Tomczak `eb7051ab74e7753b`/76, Craven
`b2b190e9a1928b17`/42, Kleshchev `8685199608967fa7`/66. Each URL
succeeded on the initial attempt. No source drop, recovery retry or
source-resolution escalation was needed.

## Checks and unresolved run work

- `coverage-checklist ... --require-destination`: **pass**, one A page, 55
  harvested results, zero errors and warnings.
- `manifest-deps` on batch 23: **pass**, 18 items, zero errors. Whole-run
  `manifest-deps`: **pass**, 160 items, zero errors.
- Whole-run `content-policy --manifest-only`: **pass**, 162 scoped items, zero
  errors and warnings. `validate-plan research/plan-spec.json`: **pass**;
  declared reading order acyclic, no item-level cycle or unresolved ID among
  pages with item lists. The plan check reports 319 planned pages still with
  empty item lists outside this batch.
- `extcheck`: **exit 0**, with 40 pre-existing published Recorded-result
  warnings; none is in this batch's dependency closure. Batch-23
  `source-fetch-check` check mode: **pass**, 4/4 resolved.
- `item-dependency-levels check --run frontier-37-owner-30`: **exit 1** from
  empty scaffold inventories in other batches. Its output contains no
  batch-23 error; an independent whole-run-ID recomputation checked all 18
  batch-23 levels with zero mismatch or cycle. Whole-run
  `step1-decisions check`: **exit 1** from other batches' missing/stale records
  and empty pages; a direct batch-23 decision check found 18/18 current and
  closed. The live run is separately paused at owner-held `1-drift` work for
  another pair.

There is no unresolved batch-23 mathematical or source finding. Step 3 must
still author and independently review every scaffold strategy.
