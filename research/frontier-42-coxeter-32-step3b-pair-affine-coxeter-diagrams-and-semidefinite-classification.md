# Step 3b — scaffold audit and authoring: `affine-coxeter-diagrams-and-semidefinite-classification`

Run `frontier-42-coxeter-32`, batch 27, design label CG-23 (orders 1770/1771),
role `alpha-high`. A page `affine-coxeter-diagrams-and-semidefinite-classification`,
B page `affine-coxeter-diagrams-and-semidefinite-classification-examples`, category
`coxeter-groups`. Only this pair is owned; sibling rows in the shared batch files
(`research/frontier-42-coxeter-32-batch-27.*`) are preserved. A prior dispatch of
this pair (99742deaa6b60343) wrote five carriers (A1–A5) before it went stale;
those carriers are audited here like any authored scaffold item.

## Owned IDs and entry record (2026-10-07)

Authoring order (dependency level, then page order and item ID as dispatched):

| # | level | item | page | what it is |
|---|---|---|---|---|
| 1 | 0 | `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` | A | similarity bridge (all deps published) |
| 2 | 4 | `def-cg-irreducible-affine-coxeter-type` | A | affine form type, radical quotient, slice |
| 3 | 14 | `lem-cg-positive-radical-and-affine-gram-exclusions` | A | positive radical, corank one, domination |
| 4 | 15 | `def-cg-standard-affine-diagrams` | A | the standard affine list |
| 5 | 15 | `lem-cg-affine-slice-simplex-and-wall-reflections` | A | slice simplex and facet reflections |
| 6 | 16 | `ex-cg-reducible-semidefinite-forms-are-factorwise` | B | factorwise reducible forms |
| 7 | 17 | `lem-cg-affine-type-crystallographic-alcove-diagrams` | A | crystallographic table + list |
| 8 | 18 | `lem-cg-affine-diagram-enumeration` | A | the enumeration |
| 9 | 18 | `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` | B | \(\tilde A_1\) and its infinity edge |
| 10 | 18 | `ex-cg-a-tilde-2-radical-vector-and-affine-slice` | B | \(\tilde A_2\) radical vector and slice |
| 11 | 18 | `ex-cg-b-tilde-versus-c-tilde-diagrams` | B | \(\tilde B_n\) vs \(\tilde C_n\) |
| 12 | 19 | `thm-cg-affine-gram-classification-and-euclidean-realization` | A | classification + realization |
| 13 | 20 | `ex-cg-indefinite-coxeter-form-is-not-affine` | B | indefinite form is not affine |

The table above preserves the original 2026-10-07 dispatch labels. After the
local dependency repairs, the current manifest labels and this continuation's
required order are:

| # | current level | item | page |
|---|---:|---|---|
| 1 | 0 | `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` | A |
| 2 | 2 | `def-cg-irreducible-affine-coxeter-type` | A |
| 3 | 14 | `lem-cg-positive-radical-and-affine-gram-exclusions` | A |
| 4 | 15 | `def-cg-standard-affine-diagrams` | A |
| 5 | 15 | `lem-cg-affine-slice-simplex-and-wall-reflections` | A |
| 6 | 16 | `lem-cg-affine-type-crystallographic-alcove-diagrams` | A |
| 7 | 16 | `ex-cg-reducible-semidefinite-forms-are-factorwise` | B |
| 8 | 17 | `lem-cg-affine-diagram-enumeration` | A |
| 9 | 17 | `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` | B |
| 10 | 17 | `ex-cg-a-tilde-2-radical-vector-and-affine-slice` | B |
| 11 | 18 | `thm-cg-affine-gram-classification-and-euclidean-realization` | A |
| 12 | 19 | `ex-cg-b-tilde-versus-c-tilde-diagrams` | B |
| 13 | 19 | `ex-cg-indefinite-coxeter-form-is-not-affine` | B |

Pages to author after their items:

- `library/coxeter-groups/affine-coxeter-diagrams-and-semidefinite-classification.md`
  (items list: the eight A items in order).
- `library/coxeter-groups/affine-coxeter-diagrams-and-semidefinite-classification-examples.md`
  (examples list: the five B items).

Open obligations at the original entry (2026-10-07; current status is recorded
in the continuation checkpoint below):

1. **In-run supplier carriers not yet on disk (flagged, not hidden).** Batch 24
   (`affine-reflections-coroot-translations-and-alcoves`, being authored
   concurrently by sibling dispatch 7d19703b3e98169e):
   `def-cg-affine-root-hyperplane-reflection-and-alcove`,
   `lem-cg-affine-reflection-identities-and-local-finiteness`,
   `lem-cg-highest-root-and-fundamental-alcove`,
   `lem-cg-affine-alcove-separation-and-facet-types`,
   `lem-cg-affine-point-stabilizers-and-vertex-residues`,
   `lem-cg-affine-generic-gallery-paths-and-disk-moves`,
   `thm-cg-affine-alcove-transitivity-presentation-and-length`.
   Consuming items and exact steps are recorded per item below; those item
   decisions stay escalated until each carrier and its actual use are
   reconciled. The three carriers A6, A7, A8 are this pair's own remaining
   authoring work.
2. **Step 3a advisories carried into authoring.**
   (a) B2(ii) scaffold wording "the translates \((2k,2k+1)\) of the alcove tile
   the line" omits the odd translates; the W-orbit of the alcove is the full
   family \(\{(k,k+1):k\in\mathbb Z\}\) — corrected in the authored B2.
   (b) B3(iv) "non-isomorphic since their diagrams differ" needs the abstract
   justification (the two translation lattices are non-isomorphic W-modules);
   supplied in the authored B3.
   (c) The five local additions A3–A7 are Step-1 scaffold items present in the
   pre-author baseline; they take ordinary item decisions.
3. **Choice.** The pair is choice-free: no item declares `def-axiom-of-choice`
   or uses a choice principle; every construction is finite-dimensional or
   explicit.

## Checkpoint log

(per item, as authoring proceeds)

### Current assigned dispatch checkpoint — 2026-10-08

The existing report is the shared output for this pair and has been preserved.
The latest recomputed status from `.autopilot/frontier-42-coxeter-32` is
**PAUSED**: Step 3b has 24/32 pairs covered and nothing is in flight. Batch 27's
pair carrier is still missing from engine coverage even though this report and
some item artifacts exist. The three run-level blockers remain outside Batch 27:
the exclusive cohort JSON has a bad escape at line 424, column 1438; dispatch
preflight refers to the unregistered profile `gpt-6-luna-xhigh`; and plan parsing
fails on an invalid `\l` escape at line 19, column 84 of the large-spherical
page. This pair continues only through its authorized batch artifacts; run
control was not changed.

The full declared supplier closure of the first item,
`lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`, was read from
its current manifest and checked on disk: all 19 declared suppliers are present
published items. Its primary source, Davis, *The Geometry and Topology of Coxeter
Groups*, §6.8, Lemma 6.8.5 and Lemma 6.8.6 (printed pp. 99–100; PDF pages 99–100
in the source's printed pagination, extracted lines 4284–4311), was opened and
read in full around the cited arguments. Lemma 6.8.5 proves translation and
homothety normalization from facet normals; Lemma 6.8.6 proves the unique relation
has all coefficients nonzero with one sign. The authored proof supplies the
corresponding translation and facet-reflection conjugacy explicitly. No Choice
is used.

**Item 1 audit result.** The inherited proof's route is sound under the intended
simplex hypotheses. I clarified the statement to assume explicitly that the two
sets are (n)-simplices presented by their distinct facet half-spaces, rather
than leaving the implication from “(n+1) facet inequalities” implicit. This
preserves the promised claim and makes the geometric input explicit. I also made
the primed opposite-vertex argument explicit in step 1.2 and repaired the missing
sentence punctuation in step 3.1. The focused checks and strict contract now pass; record its current Step 3b decision
in the final stable pass, then proceed to item 2.

#### Item 1 — `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` (level 0)

**Claim and conventions.** Two nonempty bounded Euclidean n-simplices, presented by
indexed distinct facet half-spaces with unit inward normals and the same Gram matrix,
are related by a positive homothety after a linear isometry, carrying each indexed
facet to its mate; the resulting facet-reflection groups are conjugate. Origins are
chosen in both affine spaces to write the inequalities. The statement now says the
simplex hypothesis explicitly.

**Exact suppliers read.** All 19 current declared dependencies are present and published:
`def-geometric-simplex-spanned-by-affinely-independent-vertices`,
`def-real-and-complex-inner-product-space`, `def-affine-subspace-of-a-vector-space`,
`def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-isometry-and-metric-embedding`,
`def-linear-basis`, `def-linear-independence`,
`def-linear-isomorphism-and-invertible-linear-map`, `def-linear-subspace`,
`def-kernel-and-image-of-a-linear-map`, `def-linear-map`,
`thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`,
`def-convex-subset-of-euclidean-space`, `def-extreme-point-and-face`,
`def-orthogonal-complement`, `thm-finite-dimensional-orthogonal-decomposition`,
`lem-kernel-basis-extension-gives-image-basis`, `thm-dimension-of-a-linear-subspace`,
and `def-dimension`. There is no in-run supplier for this item and no missing
prerequisite to flag.

**Source and proof audit.** Davis, *The Geometry and Topology of Coxeter Groups*,
§6.8, Lemmas 6.8.5 and 6.8.6 with proofs, printed pp. 99–100 (PDF pp. 115–116;
extracted lines 4284–4311): translation/homothety normalization and the common-sign
relation among facet normals. The item independently derives the corresponding
positive ratio, solves the offset equations by identifying the normal-coordinate
image with p-perp, then verifies the facet map and reflection conjugacy. The
proof uses finite-dimensional constructions only; AC is neither assumed nor declared.

**Changes and checks.** Clarified the simplex and origin assumptions, stated the
primed opposite-vertex argument, made the affine-dimension count explicit, and
expanded the unit-normal reflection isometry calculation. No unsupported claim or
open local proof step remains. These focused checks passed:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram.md`
- `node tools/rendercheck.mjs items/lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram.md`
- `node tools/content-policy.mjs /tmp/frontier-42-b27-item1-manifest.json` (single-item projection of the current manifest)
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-27.proof-contracts.json --strict --items lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`

The strict contract records all 12 exact fact excerpts/uses, all 8 proof-step claims
and inputs, and the empty, zero-dimensional, one-dimensional, degenerate, endpoint,
Choice, and iff dispositions. The final batched proof-layout check and full Batch 27
checks remain open until the pair is stable. The current Step 3b item decision is also
queued for the final dependency-ordered stable pass. **Next:** audit and finish
`def-cg-irreducible-affine-coxeter-type` (level 4).

#### Item 2 — def-cg-irreducible-affine-coxeter-type (level 4 in scaffold; recomputed level 2)

**Claim and conventions.** This is the owner-designed property declaration: affine form
type means connected Coxeter diagram and positive-semidefinite Coxeter form of
corank one; it names the positive radical ray, the Euclidean radical quotient, and
the dual affine slice. It explicitly does not identify every infinite Coxeter group
with affine type, and excludes a geometric reflection action or alcove tiling from
this definition.

**Source recheck.** Davis, The Geometry and Topology of Coxeter Groups, §6.8,
Definition 6.8.11 (printed p. 101; cosine matrix and the m=infinity value) and
Theorem 6.8.12(ii) (printed pp. 101–102), plus Appendix C, Definition C.1.1 and
Theorem C.1.3 (printed pp. 433–434). I read the full extracted passages at lines
4391–4413 and 19024–19039. Theorem 6.8.12 assumes no Coxeter label is infinity;
it is contextual only and cannot by itself justify any infinite-label case. The
cosine-matrix definition and Appendix C classification use the infinity convention.
The current statement's decision to define a form type without claiming Euclidean
realization is consistent with that distinction. The Step-1 coverage records the
complete Davis, Davis–Moussong and Xiong source ranges; the relevant source backing
was checked against the current scope.

**Current supplier state.** The 13 declared suppliers were read. Three declared
in-run inputs lack current Step 3b item decisions and remain provisional:
def-hh-coxeter-matrix-word-group-and-length supplies W and ell in the
Definition preamble; def-cg-real-coxeter-form-and-reflection supplies B and its
radical in the preamble and clauses (1)–(4); and
def-cg-coxeter-diagram-components-and-finite-type supplies Gamma and its
connectedness in clause (1). The definition consumer remains pending reconciliation
with those exact suppliers and uses. The inherited
def-cg-canonical-reflection-homomorphism dependency is used only to name rho in an
abstention; that action is not part of this definition and will be removed, so that
supplier is not a required edge.

**Confirmed scaffold gaps to repair locally.** The current Definition also links
to lem-cg-affine-slice-simplex-and-wall-reflections for the positive-definiteness
of the quotient although it is neither declared nor an earlier supplier; I will
supply the short quotient-form argument here and remove that link. The links to
lem-cg-diagram-products-and-invariant-form-comparison and
thm-cg-affine-alcove-transitivity-presentation-and-length occur only in scope
notes, not in the definition's mathematical input; the former is a later level-6
item and the latter's item file is absent. I will remove both editorial links while
preserving the connected-only convention and the distinction from affine-Weyl-group
terminology. The dimension statements need an explicit def-dimension dependency.
The resulting actual in-run dependency maximum is level 1, so removing the unused
level-3 canonical-reflection edge changes this item's correct level from 4 to 2;
this will be synchronized in both item metadata and the batch manifest and recorded
as a pre-splice plan/order mismatch for Step 4.

The existing justified_by targets lem-cg-positive-radical-and-affine-gram-exclusions
and thm-cg-affine-gram-classification-and-euclidean-realization are retained as
well-definedness obligations from the scaffold/design. They are later assigned
items, so no claim about their proof is used yet; their actual completed arguments
and uses must be checked before this definition's current decision can close.
No Axiom of Choice is used. **Next:** complete this definition locally, update its
manifest/level and cross-batch input, then run focused checks before item 3.

**Item 2 authoring checkpoint.** The current definition now states the matrix
convention and the full meaning of affine form type, keeps the positive radical
and classification justifications in their assigned later items, and gives local
well-definedness calculations for the quotient form, its dimension, the affine
slice direction, and the dual Euclidean form. I removed the non-load-bearing
canonical-reflection notation and its dependency; removed the unregistered later
links to the slice-simplex lemma, diagram-product lemma, and absent affine-alcove
theorem; and added the published dimension definition. These edits preserve the
CG-23 definition contract while removing unsupported forward uses.

The current manifest and item metadata now agree on the 13 direct dependencies
and dependency level 2 (the former level 4 used an unused level-3 reflection
homomorphism). The owner-approved definition justifiers remain
lem-cg-positive-radical-and-affine-gram-exclusions and
thm-cg-affine-gram-classification-and-euclidean-realization. Their actual
arguments and uses remain open until those later assigned items are completed.
The cross-batch input now marks the removed reflection-homomorphism edge as
removed and keeps the three real-form, diagram, and presented-group edges open.

Focused checks after the final item edit passed:
- precheck: 0 checked, 0 failing (definition, proof not applicable);
- explicit-path rendercheck: 1 file, no YAML or KaTeX errors;
- single-item content-policy projection: 1 scoped item, 0 errors/warnings;
- single-item manifest-deps projection: 1 item, 0 normalizations/errors;
- depsource with the current run and explicit item selection: 10 dependencies
  published, 3 draft-page dependencies, 0 unresolved;
- frontier-dependency-ledger refresh: refreshed and deduplicated.

The current run-wide dependency-level check confirms this item is now at level 2.
The same run-wide check also reported the B4 label drift (manifest level 15,
computed level 16); Item 6 below synchronizes its item and manifest level to 16.
Other level mismatches belong to sibling pairs and remain outside this pair.
The definition's final strict contract and Step 3b decision remain open pending
its exact in-run suppliers and both assigned well-definedness justifiers. No
Choice is used. Next: item 3, lem-cg-positive-radical-and-affine-gram-exclusions,
at level 14.

#### Item 3 — `lem-cg-positive-radical-and-affine-gram-exclusions` (level 14)

**Claim and conventions.** From a finite Coxeter system with connected diagram,
nonpositive off-diagonal form entries, positive-semidefinite Coxeter form and
nonzero radical, the proof establishes full support of every nonzero radical
vector, existence and uniqueness of a positive radical ray, and
`rad(B)=R delta` (corank one). It proves every proper principal form positive
definite and every proper standard parabolic finite, then proves the strict
label/subgraph domination exclusion for any induced subdiagram. The empty
principal restriction is positive definite vacuously and its parabolic is
trivial. No Choice or Perron–Frobenius theorem is used.

**Source passages rechecked.** Davis, *The Geometry and Topology of Coxeter
Groups*, printed pp. 79–80, Lemma 6.3.5 and its `|c_i|` proof (PDF lines
3366–3398), Definition 6.3.6 and the complete proof of Lemma 6.3.7 (PDF lines
3409–3437); printed p. 101, Remark 6.8.9(ii), including its padded-vector
argument (PDF lines 4372–4384); Appendix C.3, the domination convention and the
complete proof of Lemma C.3.1 (PDF lines 19136–19175). The current item proves
these claims locally; it does not treat the literature statement as a proof.
The source lemma C.3.1 assumes a connected source diagram, so the item states
and proves the label/subgraph relation for `Gamma_T` even when that induced
subdiagram is disconnected; equality forces `T=S` and recovers the connected
case. The exact current PDF passages were read in full.

**Confirmed scaffold defects and repairs.** The old step 3.1 showed that two
positive radical vectors are proportional but then incorrectly inferred that
every radical vector lies on that line. It now perturbs a fixed positive vector
by an explicit sufficiently small positive multiple of an arbitrary radical
vector, obtaining a positive radical vector and proving full span. The old
premise called the system “affine form type”, whose definition already requires
corank one; that made the corank conclusion circular. The theorem now starts
from the raw conditions (connected, positive semidefinite, nonzero radical) and
proves corank one without using the definition. After the downstream dependency audit exposed `justification-backward`, the direct edge to
`def-cg-irreducible-affine-coxeter-type` is restored for the terminology-only
reference in Statement (4). The theorem still assumes only raw connected,
positive-semidefinite, nonzero-radical hypotheses, and its proof does not use a
corank-one premise. The added edge is level 2, so A3 remains level 14; it gives
the definition’s `justified_by` relation a current dependency path without
changing the corank proof. I also removed the
unused `lem-cg-positive-definite-diagram-exclusions` dependency, proved the
absolute-value inequality locally, made the domination cosine form and its
label conventions explicit, cited strict cosine monotonicity for equality of
labels, and strengthened the determinant obstruction so `det <= 0` alone
rules out positive definiteness by Sylvester. The empty-parabolic case is
explicit.

**Prerequisite audit and provisional suppliers.** The Step-1 readiness record
called the scaffold ready, but it omitted the direct presented-group supplier
already linked in the statement and the restricted-parabolic presentation
needed before applying the finite-type criterion. The item declares its current direct dependency list in the frontmatter and batch
manifest, including the level-2 terminology edge to A2 noted above. It adds
`def-hh-coxeter-matrix-word-group-and-length` (the ambient presentation and
`W_T` definition), `def-generated-subgroup` (the empty parabolic), and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (the
restricted Coxeter presentation used in proof step 4.1). The three newly
declared same-run batch-2 edges are inside the A page's transitive `requires`
closure; no page prerequisite or new supplier item is needed.

Six direct same-run suppliers still lack current Step-3 item decisions and
remain provisional; this consumer's final decision must stay escalated until
their exact claims are reconciled against the completed suppliers:

- `def-cg-irreducible-affine-coxeter-type` — terminology in Statement (4) only;
  the raw-hypothesis proof does not use its corank-one condition.
- `def-hh-coxeter-matrix-word-group-and-length` — Statement setup and clause
  (2), Fact F9, proof step 4.1.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` — clause
  (2), Fact F9, proof step 4.1.
- `def-cg-real-coxeter-form-and-reflection` — Facts F1/F2, steps 1.1–1.3 and
  3.1–3.4.
- `def-cg-coxeter-diagram-components-and-finite-type` — edge/connectedness
  facts F4/F11, steps 1.3 and 3.3.
- `thm-cg-finite-type-positive-definite-criterion` — clause (2), Fact F10,
  proof step 4.1.

The old `lem-cg-positive-definite-diagram-exclusions` edge is recorded
`removed`: no current statement, fact or proof step consumes it. Its former
witness route is now proved in step 1.1. No prerequisite is missing from the
library and current scaffold after these registrations.

**Checks after the final item edit.** Explicit-path precheck passed (1/1),
rendercheck passed (1 file, no KaTeX/YAML/delimiter errors), focused
content-policy passed (1 item, 0 errors/warnings), batch manifest-deps passed
(13 items, 0 errors), strict proof contract passed (1/1, 0 errors/warnings),
focused depcheck passed (0 errors/warnings), `depsource` reported 12 published,
5 draft-page and 0 unresolved direct dependencies, and source-backing verified
all 18 source-backed results in the batch file. The run-wide dependency-level
check found 14 mismatches in other pairs and none for this item. The selected
pre-splice `validate-plan` check for both Batch-27 pages passed with the known
`redundant-prereq` warning: the A page lists the finite-classification page
directly even though the affine-reflections prerequisite already reaches it.
The full run validation remains red on run-wide prerequisite findings; the
Batch-27 page is reported only with that same redundancy warning. The shared
dependency ledger refreshed and deduplicated successfully.



**Post-item-5 dependency-gate follow-up.** A5 focused depcheck reached A2's
justified_by target and correctly flagged that A3 did not depend on the A2
definition. I restored the A2 edge only for the terminology crossreference in
A3 clause (4), explicitly preserving the raw hypotheses and the proof of corank
one without assuming the definition. A3 remains level 14, and A5 remains level
15. After that repair, focused depcheck over A3 and A5 passed; the A3 precheck,
renderer, strict proof contract, and content-policy projection passed. The batch
manifest-deps check passed with 13 items. Focused depsource over the two consumers
reports 19 published, 14 draft-page and 0 unresolved external direct dependencies.
The run-wide dependency-level check still reports six mismatches in other items;
neither A3 nor A5 is among them.

The item proof contract records exact source excerpts, all nine numbered proof
steps, and the empty, zero, one, degenerate, endpoint, Choice and both iff-case
dispositions. The A3 current item decision is queued for the stable closeout
pass: all local work and checks are complete, but the six supplier decisions
above remain open. **Next:** audit and author `def-cg-standard-affine-diagrams`
(level 15).

#### Item 4 — `def-cg-standard-affine-diagrams` (level 15)

**Claim and conventions.** The definition gives explicit finite labelled graphs
for `A-tilde`, `B-tilde`, `C-tilde`, `D-tilde`, `E-tilde`, `F-tilde`, and
`G-tilde`; it states the low-rank aliases and identifies `A-tilde_1` as the only
listed diagram with an infinity label. The opening sentence fixes the edge-label
and nonedge conventions. The B2/C2 finite coincidence is now worded separately
from the affine three-vertex `(4,4)` path, and the cycle edge set is explicit.
The B/C lower rank bounds ensure the terminal/end edge labels are assigned to
distinct edges. No Choice is used.

**Source passages rechecked.** Davis, *The Geometry and Topology of Coxeter
Groups*, Section 6.9, Table 6.1, printed p. 104 (PDF lines 4475–4510), the
Appendix B paragraph “Euclidean Tessellations,” printed p. 432 (PDF lines
18971–18988), and Appendix C.3’s E-arm list, printed pp. 437–438 (PDF lines
19186–19203). Xiong, *Lectures on Affine Weyl Groups*, Chapter 2, Section 2.12,
PDF p. 14, lists the untwisted affine diagram families. Davis supplies the
Coxeter-table notation and low-rank `B-tilde_2` row; the diagram definition
states the Coxeter edge labels explicitly.

**Current supplier state.** The two direct in-run inputs are present but their
current Step-3 item decisions are missing:

- `def-cg-coxeter-diagram-components-and-finite-type` supplies the finite
  labelled-graph and induced-subdiagram conventions in the opening and clauses
  (1)–(7).
- `thm-cg-finite-coxeter-classification-including-h-and-dihedral` supplies the
  finite `B_2=C_2=I_2(4)` and `A_3=D_3` coincidences cited in clause (7). A prior
  accepted review report records the completed proof and its B3/H4 arithmetic
  repairs, but the current decision checker says the supplier needs a current
  item audit, so the edge remains open.

The declared definition justifiers are also still un-authored. The exact open
obligations are `lem-cg-affine-type-crystallographic-alcove-diagrams` for the
pairwise non-isomorphism assertion in clause (7), and
`thm-cg-affine-gram-classification-and-euclidean-realization` as the second
declared definition-level justifier. They are later assigned items; the A4
definition is authored with these obligations visible and stays escalated until
the completed justifier arguments and their actual uses are checked. The
focused `depcheck` therefore reports three expected unresolved targets: both
justifiers and the clause-(7) wikilink to the later A6 item. The declared direct
dependencies themselves resolve; `depsource` reports 4 published, 2 draft-page,
and 0 unresolved.

**Checks after the final item edit.** Explicit-path precheck returned 0 checked,
0 failing (definition); rendercheck passed (1 file); focused content-policy
passed (1 item, 0 errors/warnings); batch manifest-deps passed (13 items,
0 errors); strict proof-contract passed (1/1, 0 errors/warnings); source-backing
passed for the 18 authored results in the batch. The run-wide dependency-level
check found 13 mismatches in other items and none for this item. The selected
pre-splice `validate-plan` check for both Batch-27 pages passes with the known
`redundant-prereq` warning recorded under item 3. The shared dependency ledger
refreshed and deduplicated successfully after the A4 edge evidence update.

The contract records the eight standard boundary dispositions; the definition
has no numbered proof steps. The A4 current item decision is queued for the
stable closeout pass because its two direct suppliers and two definition
justifiers remain open. **Next:** audit and author
`lem-cg-affine-slice-simplex-and-wall-reflections` (level 15, following the
page-order tie break).

#### Item 5 — `lem-cg-affine-slice-simplex-and-wall-reflections` (level 15)

**Claim and conventions.** Under the raw affine-form hypotheses already established by
A2/A3, the item proves the dual action preserves the affine slice as faithful
affine isometries; the weighted coordinate relation; the explicit vertices and
barycentric coordinates; the topological closure as a compact Euclidean simplex
with the claimed facets and normal Gram matrix; the generator wall reflections
and trivial stabilizers on the open alcove; and the exact closed-face formula
for intersections of translates. In this lemma “alcoves” means the indexed
family of translates of the open base alcove. The item does not claim that these
translates cover all of the slice or that the action is properly discontinuous
or cocompact.

**Source passages rechecked.** Davis, *The Geometry and Topology of Coxeter
Groups*, Section 6.3, Lemma 6.3.10 and its complete proof (printed pp. 80–81,
PDF lines 3468–3480); Section 6.8, Lemmas 6.8.5–6.8.7 and Proposition 6.8.8
with their complete proofs (printed pp. 99–101, PDF lines 4284–4371); Davis and
Moussong, *Notes on Nonpositively Curved Polyhedra*, Example 6.1.4 (PDF
pp. 33–34, lines 1556–1588). These give comparison results about simplex
geometry, normal Gram matrices, and the Euclidean simplicial criterion. The
slice proof here is direct and does not use those sources as a substitute for
its coordinate, closure, faithfulness, or intersection arguments.

**Confirmed readiness gaps and repairs.** The Step-1 readiness record said
“ready,” but its faithfulness strategy claimed every functional was a difference
of two points of E. That is false: such differences annihilate δ. The proof
now fixes an explicit phi_0 in E, notes that the differences give all of the
direction space, and decomposes any f in V* as
\((f-f(\delta)\varphi_0)+f(\delta)\varphi_0\); hence fixing E pointwise
forces fixing all of V*.

The old vertex/compactness proof treated nonnegative coordinates as if they
automatically described \(\bar A\), although \(\bar A\) was defined as the
topological closure of the strict alcove. Step 2.1 now uses Cauchy–Schwarz in
the quotient metric to prove each coordinate evaluation continuous, then
approximates any nonnegative-coordinate point by explicit convex interpolation
with \(\varphi_0\). This proves \(\bar A=E\cap C\), puts the vertices in the
closure, and licenses the subsequent barycentric simplex and facet argument.
The proof also states the one-dimensional case inside the general construction
and the empty face case for full support.

The inherited “alcoves as connected components” claim was unsupported before
global coverage was established. It is now the orbit family \(\{wA\}\), and
the proof establishes their pairwise disjointness from the open-chamber result.
The future A6/A8 proof-route links were removed from the abstention: this item
records only that covering, proper discontinuity, and cocompactness are outside
its claims. The page manifest had omitted the local-compact-hull supplier and
now matches the item’s dependencies. I added the Cauchy–Schwarz and empty
subgroup suppliers, retained only direct inputs used by the completed proof,
and recorded unused cross-batch edges as removed.

**Current supplier obligations.** A2 and A3 are the same-pair suppliers used in
Facts F1–F3 and proof steps 1.1–1.3 and 2.1–3.1; their local arguments and
focused checks are complete, but their current item decisions are still queued
for the stable pass. The current step3-decisions final check marks A2, A3, and all six direct
cross-batch suppliers below as requiring a current item audit. The six direct
cross-batch suppliers are present but still need current Step-3 decisions, so
A5 must remain escalated until these claims and uses are reconciled:

- `def-cg-real-coxeter-form-and-reflection` — Fact F4; proof steps 1.1–1.3,
  2.1, 3.1 and 4.1.
- `lem-cg-reflection-representation-descends-and-root-norms` — Fact F5; steps
  1.1 and 4.1.
- `thm-cg-root-length-criterion-and-faithfulness` — Fact F7; step 1.1.
- `def-cg-dual-chambers-and-reflection-hyperplanes` — Fact F6; steps 1.1 and
  4.2.
- `thm-cg-dual-chamber-intersections-and-point-stabilizers` — Fact F8; steps
  4.1–4.2.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` — Fact F9;
  step 4.2.

The provisional cross-batch records for
`def-cg-canonical-reflection-homomorphism`,
`def-cg-tits-cone-and-fundamental-chamber`, and
`lem-cg-reflection-form-invariance-and-rank-two-orders` are marked `removed`:
the canonical representation lemma supplies the needed representation,
`C`/`C^circ` come from the dual-chamber definition, and the reflection formula
and involutivity are supplied or proved locally. No current A5 proof use remains
for those three edges.

**Checks after the final A5 item edit.** Explicit-path precheck passed (1/1),
rendercheck passed (one file), focused content-policy passed (one item, zero
errors/warnings), strict proof contract passed (1/1, zero errors/warnings), and
batch manifest-deps passed (13 items, zero errors). Focused depcheck passed for
A5 alone and for the A3/A5 closure after the A2 justifier edge was restored;
there were no unresolved item links or cycles. Focused depsource for A5 found
15 direct dependencies: 7 published, 8 on draft-page carriers, zero unresolved.
The current A5 contract has derivations for all eight numbered steps and explicit
empty, zero-dimensional, one-dimensional, degenerate-form/simplex, boundary,
Choice, and iff dispositions. The run-wide dependency-level check reports six
mismatches elsewhere; neither A3 nor A5 is mismatched (A5 remains level 15 from
A3 at level 14). The selected plan-spec check for pages A/B passed with the
known `redundant-prereq` warning on A’s finite-classification prerequisite; the
plan-spec page entries carry no item lists, so current item edges were checked
from the batch manifest and the focused dependency tools instead. Batch-wide source-backing passed for 18 authored results with all sources
backed; the single final batched proof-layout command remains open for handoff.
The shared cross-batch dependency ledger refreshed and deduplicated after the A3/A5
edge repairs.

The A5 item decision is queued for the stable dependency-ordered closeout pass;
its six direct cross-batch suppliers, plus the current A2/A3 item decisions, must
be reconciled before it can be accepted or repaired. **Next:** audit and author
`ex-cg-reducible-semidefinite-forms-are-factorwise` on the B page at computed
level 16.


#### Item 6 — `ex-cg-reducible-semidefinite-forms-are-factorwise` (level 16)

**Claim and conventions.** The example proves the factorwise definiteness, radical,
and corank formulas for a disconnected finite Coxeter diagram; both directions of
the PSD corank-one criterion; the explicit `A-tilde_1 perp A_1` and
`A-tilde_1 perp A-tilde_1` computations; and the square reflection group as
`D_infty x D_infty`. Here PSD means `B(v,v) >= 0` for every `v`, corank means
`dim rad(B)`, and indefinite means the form takes both positive and negative
values. No Choice is used.

**Source passage rechecked.** Davis–Moussong, *Notes on Nonpositively Curved
Polyhedra*, §6.1, Example 6.1.3, PDF pp. 33–34, extracted lines 1535–1555,
was read in full. It gives the angle-sum criterion for a k-gon and identifies
the rectangle as the nonobtuse Euclidean polygon case. This source is background
only: the item proves the reducible square reflection group and factorwise form
statements directly, without consuming the general polygon-classification
claim. Its locator states this limitation, consistent with Step 3a's out-of-scope
coverage decision.

**Confirmed scaffold gaps and repairs.** The former wording said closed unit
squares covered the plane “without overlap” and that each point belonged to
exactly one closed square. The point `(1, 1/2)` belongs to two neighboring closed
squares, so that tiling claim was false. Clause (iv) now says the closed grid
squares cover with pairwise disjoint interiors and proves that each group orbit
meets the base square in exactly one point, including boundary coordinates
`u=0` and `u=1`. The old Fact F5 asserted a generic product-isomorphism criterion
without support; step 2.3 proves the multiplication map locally by checking
homomorphism, surjectivity, and injectivity from commutation, generation, and
trivial intersection. Step 1.4 verifies that the isometry set used for the square
is a group and computes both infinite-dihedral coordinate actions from the
presentation. The silent PSD zero-radical implication and missing finite
corank-addition argument are now proved locally, with finite dimensionality
established first. The forward reference to the later affine-classification
theorem was removed; clause (v) follows from the local block formulas. Edges to
the rank-two reflection lemma and dihedral example are marked `removed`, since
step 2.2 computes the form and radical directly and step 1.4 proves the
infinite-dihedral presentation locally.

**Current supplier obligations.** The six direct cross-batch in-run suppliers
were read provisionally; each current item audit remains required, so B4 remains
escalated pending reconciliation of the supplier and actual proof use:

- `lem-cg-diagram-products-and-invariant-form-comparison` — Fact F1; steps
  1.1–1.3 and 2.2 (orthogonal blocks, group product, length additivity).
- `def-cg-coxeter-diagram-components-and-finite-type` — Fact F2; setup, steps
  1.2, 2.2 and 4.1 (components and coordinate block convention).
- `def-cg-real-coxeter-form-and-reflection` — Fact F2; steps 1.2, 2.2 and 4.1
  (bilinearity, entries, and the positive diagonal witness).
- `thm-cg-finite-type-positive-definite-criterion` — Fact F3; step 2.1
  (positive-definite component implies finite component group).
- `def-hh-coxeter-matrix-word-group-and-length` — Fact F6; step 1.4 (Coxeter
  presentation and universal property).
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` — Fact F3;
  step 2.1 (the restricted parabolic is a Coxeter system).

The two same-pair suppliers are `def-cg-irreducible-affine-coxeter-type` (Fact
F11; step 2.1) and `def-cg-standard-affine-diagrams` (Fact F9; steps 1.4 and
2.2); their current item decisions and applicable definition justifiers remain
to be reconciled. The current `step3-decisions check --phase final` reports
“current item audit required” for all eight direct in-run suppliers above. The
item receipt is therefore `escalate` at confidence 1, with the exact direct
dependency list recorded; only the owner resolves escalations. No published
content concern was found, no new item was added, and no general polygon theorem
is used.

The cross-batch input now has six open B4 supplier rows and two `removed` rows.
`frontier-dependency-ledger refresh --run frontier-42-coxeter-32` completed and
deduplicated after these edits. The refreshed pair-scope decision is `sufficient`
(hash `892b152e27efc37c13d80fe29676ee7426460ffc2454b9d9001df8641169a3c7`): the
same thirteen CG-23 IDs and A/B boundaries remain; B4's repairs add no items or
claims.

**Checks.** Explicit-path precheck passed (1/1); rendercheck passed for the item
and B page (2 files); focused content-policy passed (1 item, zero
errors/warnings); strict proof-contract passed (1/1, zero errors/warnings); batch
manifest-deps passed (13 items, zero errors); focused depcheck passed for B4 and
its prerequisite closure (848 items and 163 pages in the selected cycle checks);
depsource found 25 direct dependencies, 17 published and 8 on draft pages, with
zero unresolved; batch source-backing passed for all 18 authored results. The
selected plan-spec check for A/B passed with the existing A-page
`redundant-prereq` warning and no error. Full run-wide `validate-plan` exits 1: 304 `frontier-selection` findings arise
because `plan-spec.json` still has empty item lists for all 64 pages, plus eight
`undeclared-prereq` findings outside this pair. Those eight are the affine-reflections
examples page's `minkowski-theory-and-number-field-class-groups` dependency; the
Coxeter growth A page's dependencies on `weak-order-inversions-and-lattice-operations`,
`permutation-statistics-inversions-and-eulerian-numbers`,
`braided-and-symmetric-monoidal-categories`, and
`fundamental-trigonometric-identities-examples`; and the growth B page's dependencies
on `braided-and-symmetric-monoidal-categories`, `formal-power-series-examples`, and
`weak-order-inversions-and-lattice-operations`. No full-plan diagnostic names either
Batch-27 page. The run-wide dependency-level check exits 1 on ten sibling mismatches;
B4's item and manifest both match computed level 16. The item decision receipt is
`escalate` (hash `da27f2e4004baea9f6e7921e4a6a47c8881ee9d48ef6c92360186b085420d3ec`).
The batch's single final proof-layout command remains open for handoff.

The B page now lists B4 under `examples`; the remaining four examples are still
pending in dependency order. **Next:** `lem-cg-affine-type-crystallographic-alcove-diagrams`
(level 17).


#### Item 7 — `lem-cg-affine-type-crystallographic-alcove-diagrams` (level 17 in the prior checkpoint; current level 16; see the continuation recheck below)

**Claim and conventions.** The item gives the highest-root coefficient vectors
and affine labels for the reduced crystallographic types A–G in the stated
standard numbering, including the distinct B2/C2 root-length assignments and
the A1 infinity edge. It identifies the inward facet-normal Gram matrix,
proves the semidefinite corank-one consequences for every standard affine
diagram, realizes every family member (including the D3/E4/E5 aliases), proves
the Euclidean simplex presentation and `W_a = Q^vee ⋊ W` conditional on the
declared facet-generation supplier, records the coefficient checks, and proves
labelled-graph non-isomorphism apart from the explicit names. It asserts no
twisted diagrams or extended affine Weyl group. No Choice is used.

**Source passages rechecked.** Knapp, *Lie Groups Beyond an Introduction*,
2nd ed., Appendix C, classical and exceptional irreducible root-system tables,
printed pp. 684–692 (PDF pp. 702–710), was read and inspected in the table
layout. The E6 branch-node coefficient and the reversed F4 order were checked
visually; the root coefficient vectors used in the item match those tables.
Davis, *The Geometry and Topology of Coxeter Groups*, §6.4, Example 6.4.1 and
Theorem 6.4.3 with its complete proof, printed pp. 82–84 (PDF pp. 97–99), was
read in full. It proves the rank-one infinite-dihedral case and the abstract
Coxeter presentation/fundamental-domain result for a Euclidean simplex. It
does not prove that the generated facet group is all of `W_a`; that exact
generation step remains the batch-24 obligation below. Xiong, *Lectures on
Affine Weyl Groups*, Chapter 2, §§2.1–2.13, PDF pp. 11–14, was read as a
convention comparison only. Davis §6.9, Table 6.1 (printed p. 104/PDF p. 119)
and Appendix C.2.2 (printed pp. 435–436/PDF pp. 450–451) were also rechecked as
background; the item proves its matrix claims from its alcove normals and the
local positive-radical result.

**Confirmed repairs.** The previous simply-laced computation implicitly fixed
root squared-length 2 although the statement allows arbitrary global scale.
Step 2.1 now writes the pairing as
`(L^2/2)(2c_i - sum_{j~i} c_j)` and divides by the actual root lengths; Fact
F15 proves directly from the Cartan formula that based Gram matrices with the
same connected Cartan matrix differ by one positive scalar. The non-simply-
laced model calculations transfer by the same normalized-pairing argument.
The missing D3/E4/E5 low-rank aliases are now stated in clause (4) and supplied
through Fact F16; the local graph-invariant proof does not assume the definition’s
pairwise-nonisomorphism assertion. Step 4.2 now verifies that `W` normalizes
`Q^vee` and that translations intersect the linear Weyl group trivially, so its
semidirect-product wording has the required group-theoretic details. The final
numbering is `1.1, 2.1, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1, 6.1`.

**Direct dependencies.** The 28 direct IDs are recorded identically in item
frontmatter, the batch manifest and the escalation receipt:
`def-cg-standard-affine-diagrams`,
`lem-cg-positive-radical-and-affine-gram-exclusions`,
`def-cg-crystallographic-scaling-coroot-and-lattice`,
`lem-cg-integer-pairings-and-allowed-dihedral-labels`,
`thm-cg-crystallographic-finite-type-and-lattice-stability`,
`def-cg-affine-root-hyperplane-reflection-and-alcove`,
`lem-cg-highest-root-and-fundamental-alcove`,
`lem-cg-affine-point-stabilizers-and-vertex-residues`,
`thm-cg-affine-alcove-transitivity-presentation-and-length`,
`prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`,
`ex-classical-root-systems-in-euclidean-coordinates`,
`thm-rank-two-root-system-classification`,
`prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
`def-reduced-crystallographic-euclidean-root-system`,
`def-coroot-and-dual-root-system`, `def-weyl-group-of-a-root-system`,
`def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
`thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
`ex-root-systems-a-two-b-two-and-g-two`,
`def-positive-system-and-base-of-simple-roots`,
`def-height-of-a-root-and-highest-root`, `def-linear-basis`,
`def-graph-isomorphism-and-complement`,
`def-cartan-matrix-of-a-based-root-system`,
`def-bilinear-symmetric-skew-and-alternating-forms`,
`def-definiteness-inertia-and-signature-data-over-the-reals`,
`lem-cg-affine-reflection-identities-and-local-finiteness`, and
`thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`.
The eight cross-batch records remain open because all await current item
decisions; their actual uses are synced in the ledger. The critical missing
carrier is `thm-cg-affine-alcove-transitivity-presentation-and-length`: batch-24
clause (1) says the affine facets generate `W_a`, and A7 consumes that at proof
Step 4.2. The manifest row exists at planned-earlier order, but its item file is
absent. Davis proves the presentation for `G=<s_0,...,s_n>` only, so the
consumer cannot yet conclude `G=W_a`. The other seven cross-batch suppliers are
present but still require their current Step-3 decisions. One separate sibling
concern remains: `lem-cg-affine-reflection-identities-and-local-finiteness`
Fact F3 asserts that the simple coroots generate `Q^vee` without proving that
claim. A7 avoids it by using all root coroots and proving the needed translation
inclusion locally; its actual use of that supplier is only the affine-reflection
formula. This is a potential sibling defect, not a published-content concern.

**Checks and decisions.** Explicit-path precheck passed (1/1), explicit rendering
passed (1 file), the focused content-policy projection passed (1 item, no
warnings), strict proof contract passed (34 exact citations, 9 derivations,
zero errors/warnings), and `manifest-deps` passed (13 items, zero errors).
Focused `depcheck` exits 1 on exactly the absent batch-24 carrier above; its
selected prerequisite closure has 986 items. Focused `depsource` reports 18
published, 1 planned-earlier, 9 draft-page, no homeless, no later and no
unresolved dependencies. Batch source-backing passes all 18 authored results;
the refreshed URL sweep reports 4/4 live sources. The run-wide dependency-level
check still exits 1 on nine sibling mismatches, none naming A7: `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`
(recorded 11, computed 10),
`thm-cg-compact-local-cat-one-short-circle-criterion` (12, 11),
`ex-cg-root-versus-coroot-translation-lattices` (3, 2),
`ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` (21, 20),
`def-cg-recursive-sortable-projection-and-cambrian-congruence` (28, 27),
`thm-cg-sortable-meet-join-closure-and-cambrian-quotient` (29, 28),
`thm-cg-sortable-projection-greatest-element-and-interval-fibers` (30, 29),
`ex-cg-cambrian-quotient-of-s3-and-two-orientations` (31, 30), and
`ex-cg-a3-sortable-subset-and-a-three-element-fiber` (31, 30). A7 remains
recorded at dependency level 17 in both item and manifest. The refreshed pair
scope receipt is `sufficient` (hash
`893648480404bafa8d905ce80ee75e0fd6ae571928466179745899a2bd432fbe`); the item
decision is `escalate` at confidence 1 (hash
`ed2674b968cfde3d9bdef1d080552fe5f8541bb65a7b0e4c30626759b5b63e33`) because
the exact generation supplier is absent and the remaining current supplier
decisions are still open. The cross-batch dependency ledger refreshed and
deduplicated after the proof-step references were synchronized.

`validate-plan` remains for the end-of-batch pass after both library pages are
authored, and the single batched `proof-layout` command remains reserved for
handoff after all assigned item paths are final. **Next:**
`lem-cg-affine-diagram-enumeration` (level 18).

### Item 8 — `lem-cg-affine-diagram-enumeration` (recomputed level 17)

**Claim and conventions.** The item classifies the connected positive-semidefinite
corank-one Coxeter diagrams as the standard affine list, including the low-rank
aliases. In rank at least three, it states that the graph is an all-3 cycle
`tilde A_n` or a tree, has no infinity label, has only labels `3,4,6`, and has at
most two edges labelled at least four. The `tilde A_1` infinity-edge case is
handled separately in rank two. The statement preserves the full promised
classification claim.

**Confirmed scaffold defect and repair.** The scaffold's corollary that every
rank-at-least-three diagram is a tree is false: `tilde A_2` is a 3-cycle with
cosine matrix
`[[1,-1/2,-1/2],[-1/2,1,-1/2],[-1/2,-1/2,1]]`. Each row sums to zero; on the
sum-zero plane the matrix acts as multiplication by `3/2`, so its eigenvalues
are `0,3/2,3/2`. It is positive semidefinite of corank one and is not a tree.
The item statement now says “an all-3 cycle `tilde A_n` ($n\ge2$) or a tree.”
Confidence in this confirmed defect and repair: high.

**Argument and source audit.** Davis, *The Geometry and Topology of Coxeter
Groups*, Appendix C.3, Lemma C.3.1 and the complete proofs of Theorems C.1.2–C.1.3,
printed pp. 436–438 (PDF pp. 452–454), were reread in full. The item uses the
domination comparison and finite/affine enumeration as source context, but
proves the equality cases locally. The path determinant recurrence is derived
by a last-row cofactor expansion with the cofactor sign made explicit. For a
path with one large edge the proof derives the non-strict two-vector inequality
from positive semidefiniteness and explicitly does not apply Davis's strict
positive-definite inequality to that degenerate case. The star calculation
displays the square-completion identity. The finite path leading minors and
integer arm cases are computed locally. Davis–Moussong, §6.1, Example 6.1.4 and
Table 6.1.1 (PDF pp. 33–34) were read as classification context. Davis Appendix
C.2.3's `Z_4`/`Z_5` determinants and Table C.1 were checked but are not proof
inputs here.

The 26 direct dependencies are synchronized in the item and Batch 27 manifest;
the current computed level is 17. All 26 declarations resolve in the repository.
The focused source classification reports 18 published dependencies and eight
draft-page dependencies, with no homeless, planned-later, or unresolved IDs.
The four open Batch 13 suppliers and exact uses are:

- `def-cg-coxeter-diagram-components-and-finite-type`: graph dictionary and
  induced-subdiagram conventions, Steps 1.1, 1.3, 2.1–2.4, 3.1–3.3, 4.1, 6.1.
- `lem-cg-positive-definite-diagram-exclusions`: path recurrence Step 2.3;
  strict positive-definite inequality discussed but not applied in Step 2.4;
  three-arm inequality Steps 3.2 and 4.1.
- `thm-cg-finite-type-positive-definite-criterion`: finiteness from the local
  positive-definiteness calculations, Steps 3.2–3.3.
- `thm-cg-finite-coxeter-classification-including-h-and-dihedral`: finite
  diagram names, Steps 3.2–3.3.

Each is on the draft finite-classification page and still lacks a current item
decision. Same-pair supplier `lem-cg-affine-type-crystallographic-alcove-diagrams`
supplies only clause (3), that standard affine diagrams are not positive
definite, at Steps 2.2, 3.1, and 4.1. That supplier is owner-held after its
Step 4.2 use of the absent Batch 24 carrier
`thm-cg-affine-alcove-transitivity-presentation-and-length`; A7's current use
cannot be certified until the owner resolves that edge. A8 therefore remains
escalated. The current Step 3b decisions for same-pair suppliers A1–A3 are also
not yet recorded.

**Coverage and Step 4 reconciliation.** In the current A-page coverage, Appendix
C.2.2 remains inline but is now assigned to A7, whose local proof gives the
positive-semidefinite corank-one property of the standard diagrams. Appendix
C.2.3 and Table C.1 are now out of scope for A8: its `Z_4`/`Z_5` obstructions
and determinant table are not used. The historical Step 3a count (19 included,
10 inline, 10 deferred, 13 out of scope for the A page) should be reconciled in
Step 4 to 18 included, 9 inline, 10 deferred, and 15 out of scope. No sibling
coverage row was changed. The plan's original order labels also need Step 4
reconciliation: the live dependency check moves A7 from 17 to 16 and A8 from 18
to 17. B4 has level 16 and was completed before A7 under the earlier labels;
B4 does not depend on A7, so its proof was not justified by a later supplier.
With recomputed levels, page-order sorting would place the A-page A7 before
B-page B4.

**Checks and current decision state.** These checks passed for A8:

- explicit-path precheck and rendering;
- one-item content-policy projection (0 errors, 0 warnings);
- strict proof contract (35 exact citations, 13 derivations, all eight boundary
  dispositions, 0 errors or warnings);
- focused `depcheck` (selected item/page and prerequisite cycle checks pass);
- `manifest-deps` for Batch 27 (13 items, no missing dependency arrays);
- focused `depsource` (26 dependencies: 18 published, eight draft-page, zero
  unresolved);
- URL sweep (4/4 live) and source backing (18 authored source results remain
  backed).

The run-wide dependency-level check now has no A7 or A8 mismatch, but still
reports five unrelated sibling mismatches and five not-yet-authored owned
items: A9–A11 compute at 17 rather than 18, A12 at 18 rather than 19, and A13
at 19 rather than 20. The sibling mismatches are `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`
(11/10), `thm-cg-compact-local-cat-one-short-circle-criterion` (12/11),
`ex-cg-root-versus-coroot-translation-lattices` (3/2),
`ex-cg-extended-affine-weyl-group-and-alcove-stabilizers` (17/13), and
`ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite` (19/20).

The item was recorded `escalate` at confidence 1, but the subsequent level
correction from 18 to 17 changed its hashed inputs. The decision engine now
reports `owner: true` and “changed inputs require a current owner decision”; I
cannot refresh that escalation without the owner. A7's earlier escalation
receipt is also stale after its level correction. Both remain unresolved owner
decisions; neither is marked accepted. The scope receipt is current and
`sufficient` (hash
`c19259e7367fe10f67df89860165e88edc586b748a795a01cbb7193f6cb2d623`).

The run remains **PAUSED**, with 24/32 pairs covered and nothing in flight; the
three run-level blockers remain outside Batch 27 (exclusive-cohort JSON escape,
unregistered `gpt-6-luna-xhigh` profile, and invalid `\l` escape in the
large-spherical page). `validate-plan` remains for the end-of-batch pass after
both library pages are authored. The one batched proof-layout command remains
reserved until all 13 assigned item paths are final.

**Next:** `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` (recomputed
level 17; A page before the level-17 B examples by page order).

### Continuation checkpoint — B4 proof-use correction (2026-10-08)

The current manifest and item frontmatter agree that
`ex-cg-reducible-semidefinite-forms-are-factorwise` is dependency level 16.
This continuation follows the dispatch's recomputed order: A7 precedes B4 at
level 16; A8 enumeration follows at level 17, before the level-17 B examples.
The old `Next` line above preserves the previous checkpoint and is superseded
by this order.

**B4 current audit.** I reread the current example and its direct supplier
statements. The block positivity, radical-sum and corank arguments, the
infinite-dihedral presentation, the square reflection group and its closed
orbit representatives are proved locally. I found and repaired one exact-use
error in Proof 2.1: the unique connected PSD corank-one block was attributed
to Fact F4 (the radical definition); it is now attributed to Fact F11 (the
affine-form definition), with Fact F2 recording both symmetric bilinearity
and connected components. The proof-contract citations and step inputs now
include that actual use. The B4-to-
`def-cg-coxeter-diagram-components-and-finite-type` input row now names Proof
2.1, preserving the sibling rows; the shared unified ledger remains for the
serial reconciler.

The B4 current dependency list and level were not changed. Its six outside-
batch in-run supplier uses remain open pending their current item decisions:
`lem-cg-diagram-products-and-invariant-form-comparison` (Facts F1; Steps 1.1–1.3
and 2.2), `def-cg-coxeter-diagram-components-and-finite-type` (Fact F2; Steps
1.2, 2.1, 2.2 and 4.1), `def-cg-real-coxeter-form-and-reflection` (Fact F2;
Steps 1.2, 2.1, 2.2 and 4.1),
`thm-cg-finite-type-positive-definite-criterion` (Fact F3; Step 2.1),
`def-hh-coxeter-matrix-word-group-and-length` (Fact F6; Step 1.4), and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (Fact F3;
Step 2.1). B4's current raw SHA256 after this correction is
`74f1cb195c3a771efb7a81cb2664c3be1c1afe7fed9464ccbcda1a692b850570`. The two same-batch suppliers A2 and A4 remain subject to their own
current decisions. No Choice is used and the pair scope is unchanged.

After the correction, explicit precheck passed for B4, explicit rendering
passed for B4 and its B page, and its strict proof contract passed with zero
errors or warnings. The final batch content-policy, graph/dependency/source
checks, current item decisions, page checks, validate-plan and one batched
proof-layout check remain open for the stable handoff pass. A7's previously
reported missing generation carrier now exists at level 12; its exact
generation proof and actual A7 use are under focused current reconciliation.

**Next:** complete A7's current supplier-use review, then continue with A8
(`lem-cg-affine-diagram-enumeration`) at level 17.

### Continuation checkpoint — A7 current supplier reconciliation (2026-10-08)

This recheck supersedes the earlier A7 level, direct-dependency count, absent
generation-carrier finding, and focused dependency-check result above.

**Current A7 claim and dependencies.** The item remains the crystallographic
root-table-to-affine-diagram lemma described above; its current item and
manifest level is 16, with 27 matching direct dependencies. The current list is
`def-cg-standard-affine-diagrams`,
`lem-cg-positive-radical-and-affine-gram-exclusions`,
`def-cg-crystallographic-scaling-coroot-and-lattice`,
`lem-cg-integer-pairings-and-allowed-dihedral-labels`,
`thm-cg-crystallographic-finite-type-and-lattice-stability`,
`def-cg-affine-root-hyperplane-reflection-and-alcove`,
`lem-cg-highest-root-and-fundamental-alcove`,
`lem-cg-affine-point-stabilizers-and-vertex-residues`,
`thm-cg-affine-alcove-transitivity-presentation-and-length`,
`prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`,
`ex-classical-root-systems-in-euclidean-coordinates`,
`thm-rank-two-root-system-classification`,
`prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
`def-reduced-crystallographic-euclidean-root-system`,
`def-coroot-and-dual-root-system`, `def-weyl-group-of-a-root-system`,
`def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
`thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
`def-positive-system-and-base-of-simple-roots`,
`def-height-of-a-root-and-highest-root`, `def-linear-basis`,
`def-graph-isomorphism-and-complement`,
`def-cartan-matrix-of-a-based-root-system`,
`def-bilinear-symmetric-skew-and-alternating-forms`,
`def-definiteness-inertia-and-signature-data-over-the-reals`,
`lem-cg-affine-reflection-identities-and-local-finiteness`, and
`thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`.
The previous 28-entry note included `ex-root-systems-a-two-b-two-and-g-two`,
which is absent from the current item and manifest dependencies; the direct
classical-coordinate supplier remains `ex-classical-root-systems-in-euclidean-coordinates`.
Current A7 raw SHA256: `5f77d65a1c6c5a00b251f20c03fab36bc0366bbd250c26cdd3e2dd5b2d9f5351`.

**Current source and proof-use review.** The focused independent review checked
the finite root-type and highest-root calculations against Knapp, *Lie Groups
Beyond an Introduction*, 2nd ed., Appendix C, printed pp. 684–692, and checked
the F4 numbering reversal against the current Bourbaki convention. It verified
the B/C normalized pairings and the F4/G2 reflection descents; no A7 Statement,
dependency, proof or contract change was needed. Davis, *The Geometry and
Topology of Coxeter Groups*, §6.4, Example 6.4.1 and Theorem 6.4.3, proves the
simplex presentation for the subgroup generated by its facets but does not
establish that this subgroup is all of `W_a`. The current batch-24 carrier
`thm-cg-affine-alcove-transitivity-presentation-and-length` now exists at
level 12. Its Step 2.1 proves every affine wall is a facet of an alcove and
that every wall reflection is conjugate into the fundamental facet subgroup,
which gives generation of `W_a`; Step 3.1 proves the abstract presentation.
A7 Fact F11 consumes those clauses at Proof Step 6.2. The matching cross-batch
row is `verified` as a local supplier-use review, not as a native item decision.

The five direct batch-24 input rows are locally reconciled as follows:
`def-cg-affine-root-hyperplane-reflection-and-alcove` (A7 Fact F4, Steps 2.1,
6.2); `lem-cg-affine-reflection-identities-and-local-finiteness` (Fact F4,
Steps 2.1, 6.2); `lem-cg-highest-root-and-fundamental-alcove` (Fact F5, Steps
5.1, 6.2); `lem-cg-affine-point-stabilizers-and-vertex-residues` (Fact F6,
Steps 4.2, 5.1); and
`thm-cg-affine-alcove-transitivity-presentation-and-length` (Fact F11, Step
6.2). The current reflection-identities item now proves simple-coroot
generation in its Step 1.5; A7 does not use that result, only its affine
reflection formula in Fact F4.

Three direct batch-21 inputs remain open: `def-cg-crystallographic-scaling-coroot-and-lattice`
and `lem-cg-integer-pairings-and-allowed-dihedral-labels` supply A7 Fact F8 at
Steps 1.1, 4.1 and 4.2; `thm-cg-crystallographic-finite-type-and-lattice-stability`
supplies Fact F7 at Steps 1.1, 3.1 and 4.1. The current scaling and pairing
supplier statements match their uses, but their current item audits remain
open. The classifier's recorded owner-held escalation refers to an old false
identity in `lem-cg-positive-definite-diagram-exclusions` Step 1.4. The current
source file no longer has that step; its current Step 2.1 gives
`sum(k^2)-sum(k(k+1)) = i^2-sum(k) = i(i+1)/2`, which checks at `i=2` as
`4-2=2`. Thus the old arithmetic objection is not present in the current
source bytes, but the classifier's changed-input owner decision remains
unresolved. The A7-to-classifier input row stays `open` pending the owning
batch's current decision and any source-proof reconciliation; this report does
not clear or override that owner-held record.

The previous A7 concern about a missing source-24 carrier and an unproved
simple-coroot-generation claim is therefore superseded. A7 still remains
escalated because its current direct suppliers do not yet all have current
item decisions, including the owner-held crystallographic classifier. Its old
decision hash and dependency list are stale; record a fresh `escalate` after
the final stable checks, with the 27 current dependencies and these exact open
supplier obligations.

**Current A7 checks.** The independent review ran proof-layout for A7 (11
steps, 0 defects), explicit-path precheck, explicit rendercheck, strict
selected proof-contract check, and focused `depcheck --items-file` (0
errors/warnings; 1,030-item prerequisite closure). No item or contract bytes
were changed in this review. The final pair-wide layout command, full content
policy, source/dependency gates, dependency-level check, current item decision,
and `validate-plan` remain part of the stable handoff pass.

**Next:** `lem-cg-affine-diagram-enumeration` at current level 17, with its A7
supplier use treated provisionally until A7's current escalation is resolved.

### Continuation checkpoint — A8 current proof and supplier review (2026-10-08)

`lem-cg-affine-diagram-enumeration` is present with dependency level 17 in both
the current manifest and item. Its 26 direct dependencies are unchanged. The
current claim is the full connected PSD corank-one classification, explicitly
allowing the all-3 $\tilde A_n$ cycle for $n\ge2$ as well as the listed tree
families; the earlier tree-only statement was false for $\tilde A_2$ and remains
corrected in this item. Current raw SHA256:
`7cdf66d3fac5cd8a58be1ebf85942acfd627a284359c3cf68f48ce78634f21ed`.

The focused independent review found no current proof defect and made no
edits. It checked the $\tilde A_2$ cycle witness, the proper-principal and strict
domination reductions, the non-strict semidefinite two-vector path inequality,
the determinant recurrence, the $m=4,5,\ge6$ path cases, and all arm
equalities. The authoritative comparison passage is Davis, *The Geometry and
Topology of Coxeter Groups*, Appendix C.3, Lemma C.3.1 and the complete proof
of Theorems C.1.2–C.1.3, printed pp. 436–438 (PDF pp. 452–454). The local A8
proof supplies the equality cases and explicitly does not apply the strict
positive-definite path inequality to the semidefinite case.

The four open batch-13 supplier rows remain exact: `def-cg-coxeter-diagram-components-and-finite-type`
(Fact F5 across the graph conventions used throughout),
`lem-cg-positive-definite-diagram-exclusions` (Fact F8 at Step 2.3; Fact F23
is only a Step 2.4 caveat; Fact F24 at Steps 3.2 and 4.1),
`thm-cg-finite-type-positive-definite-criterion` (Fact F6, Steps 3.2–3.3), and
`thm-cg-finite-coxeter-classification-including-h-and-dihedral` (Fact F7,
Steps 3.2–3.3). Their current statement interfaces match the cited uses, but
their current item decisions remain required. Same-pair supplier A7 supplies
only Fact F4, that each standard affine diagram is not positive definite, at
Steps 2.2, 3.1 and 4.1. That statement/use was checked; A7's own current
decision remains owner-held after changed inputs, so A8 stays escalated until
the A7 decision is refreshed by its owner. No transitive supplier's open
decision is treated as a mathematical proof failure here.

The current cross-batch input preserves all four A8 supplier rows as `open`;
their current use locations remain aligned with the proof contract. The
previously recorded A8 `escalate` decision is stale after the level change from
18 to 17 and remains owner-held; I will not replace it. The prior local
precheck, rendering, strict contract (35 citations, 13 derivations, all eight
boundary dispositions), focused dependency/source checks, and source-backing
remain historical evidence for unchanged bytes. The final batch gates and the
single batched proof-layout check are still pending after all item content is
stable.

**Next:** `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` at level 17;
its A8 dependency is not implicated.

### Continuation checkpoint — B2 infinity-edge limit repair (2026-10-08)

`ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` remains at dependency
level 17. Its statement, scope, and Choice status are unchanged. The audit found
that Proof Step 3.1 inferred $\cos(\pi/m)\to1$ from $\cos0=1$ without a
continuity or limit argument. The current proof supplies the missing epsilon
argument: for $\varepsilon>0$, use $\pi>0$ to apply the reciprocal Archimedean
bound to $\varepsilon/\pi$; for all sufficiently large finite labels $m$,
$0<\pi/m<\varepsilon$; cosine's $1$-Lipschitz bound then gives
$|\cos(\pi/m)-1|<\varepsilon$. The direct $m=\infty$ matrix convention and
absence of a finite relator remain separately justified.

The repair adds four published direct dependencies to both item and manifest:
`cor-sine-and-cosine-are-one-lipschitz`,
`cor-cauchy-reals-lub-complete`, `thm-reals-ordered-field`, and
`cor-archimedean-reciprocal`. Facts F18–F20 and the Step 3.1 contract mapping
now record the Lipschitz estimate, completeness and ordered-field hypotheses,
reciprocal Archimedean conclusion, and $\pi>0$. The changed item SHA256 is
`95ff2571de669dd60630dd391e0d0b838f0ed220652f51a5856fc39e075c50d5`.

Focused explicit-path precheck, rendercheck, and strict selected proof-contract
check all pass after the repair. No cross-batch row is needed for the four new
published dependencies. Same-pair inputs still needing current decisions are
`def-cg-standard-affine-diagrams` (Fact F6, Step 2.2),
`lem-cg-affine-slice-simplex-and-wall-reflections` (Fact F5, Steps 1.3, 1.4,
2.1), and `lem-cg-affine-type-crystallographic-alcove-diagrams` (Fact F10,
Step 2.2). The last supplier is the A7 carrier; its changed-input decision is
owner-held after the level and dependency update, so its owner must refresh that
decision before B2 can be accepted. The current pair-wide item decision and
final gates remain open.

**Next:** `ex-cg-a-tilde-2-radical-vector-and-affine-slice` at level 17.

### Continuation checkpoint — B1 A-tilde 2 slice calculations (2026-10-08)

`ex-cg-a-tilde-2-radical-vector-and-affine-slice` remains at dependency level
17, now with 10 direct dependencies synchronized between item and manifest.
Its statement, scope, and Choice status are unchanged. The rank-three matrix
calculation is direct: $B(x,x)=\frac12\sum_{i<j}(x_i-x_j)^2$ gives PSD and
exactly the line $\mathbb R(1,1,1)$ as its zero set, while multiplication by
the displayed matrix puts that line in the radical; each $2\times2$ principal
form is $(a-b/2)^2+3b^2/4$. The slice metric is computed with the quotient
dual form, not by applying $B$ to coordinate tuples: the quotient is identified
with the sum-zero plane, where $B$ acts as $3/2$ times the standard dot product,
so the dual metric on direction coordinates is $2/3$ times the dot product.
The three root-alcove vertices are now solved explicitly from pairs of wall
equations, and each side calculation gives squared length $2/3$; the slice
triangle has squared side length $4/3$, so the facet similarity has scale
$\sqrt2$ and conjugates the facet-reflection groups.

The audit repaired two omitted calculations: Step 2.1 now identifies each
quotient class with its unique sum-zero representative and each direction
functional with its standard-dot-product coordinate vector before computing
$b^\flat{}^{-1}$; Step 4.1 now solves all three pairs of wall equations and
checks the remaining inequalities before computing side lengths. The proof
contract was updated to map the Step 2.1 use of the Coxeter matrix and the
Step 4.1 calculation. The proof provenance now records `ai-altered` while the
unchanged statement remains `ai-generated`. Current item SHA256:
`fe9312ccd25e6b3df1c612f754a109689c44290c61a58895445aeab962c3e6a8`.

The direct dependencies are `def-cg-irreducible-affine-coxeter-type`,
`lem-cg-positive-radical-and-affine-gram-exclusions`,
`def-cg-standard-affine-diagrams`,
`lem-cg-affine-slice-simplex-and-wall-reflections`,
`def-cg-real-coxeter-form-and-reflection`,
`ex-classical-root-systems-in-euclidean-coordinates`,
`thm-sylvesters-criterion-for-positive-definiteness`,
`lem-cg-affine-type-crystallographic-alcove-diagrams`,
`lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`, and
`lem-cg-highest-root-and-fundamental-alcove`. Five unused scaffold dependencies
were removed (`thm-cg-finite-type-positive-definite-criterion`,
`def-linear-basis`, `def-kernel-and-image-of-a-linear-map`,
`def-bilinear-symmetric-skew-and-alternating-forms`, and
`def-matrix-minors-cofactors-and-adjugate`). The corresponding stale
cross-batch row for the finite-type criterion is marked `removed`: neither the
statement nor the completed proof uses it.

Davis, *The Geometry and Topology of Coxeter Groups*, §6.8, Lemmas 6.8.5–6.8.7
and Proposition 6.8.8, printed pp. 99–101 (PDF pp. 115–117), was read in full.
The source explains how simplex normals determine the simplex up to translation
and homothety, proves the coefficients of the normal relation have one sign,
and gives the PSD/corank-one/positive-kernel criterion for a Euclidean simplex.
The consumer calculations remain local; the similarity conclusion is supplied
by the earlier assigned shared-facet-normal lemma. The cited Xiong PDF could
not be fetched by the browser because its 19.7 MB size exceeded the fetch limit;
the A2 alcove coordinates and their wall inequalities are computed directly
here, so no unresolved mathematical claim depends on that source.

Exact supplier obligations: `lem-cg-affine-type-crystallographic-alcove-diagrams`
(A7) supplies the affine-normal Gram matrix used by B1 Fact F4 at Proof Step
4.1; A7's item decision is owner-held after its input changes, so this exact
supplier/consumer/step remains escalated until its owner refreshes that
decision. `def-cg-real-coxeter-form-and-reflection` supplies B1 Fact F1 at
Steps 1.1, 2.1 and 3.1; the consumer-specific cross-batch row remains `open`
pending its source item's current decision. Same-pair items A2, A3, A4 and the
level-0 shared-simplex lemma also supply claims used in this consumer; their
current decisions remain queued for stable closeout. The direct
`lem-cg-highest-root-and-fundamental-alcove` use at Step 4.1 is locally
reconciled in its cross-batch row as `verified` (proof-use review only, not a
global item acceptance).

Focused explicit-path precheck, two-file rendercheck, and strict selected
proof-contract check pass after the edits. The final pair-wide precheck,
rendering, dependency/source gates, dependency-level check, decision record,
and single batched proof-layout command remain open.

**Next:** `thm-cg-affine-gram-classification-and-euclidean-realization` at
recomputed level 18.

### Continuation checkpoint — classification theorem and Euclidean action (2026-10-08)

`thm-cg-affine-gram-classification-and-euclidean-realization` remains at
dependency level 18 in the item and manifest. The theorem proves the connected
PSD corank-one classification in both directions, then constructs the slice
action, matches it by a facet-normal similarity to the root-system alcove, and
proves coverage, strict orbit representatives, proper discontinuity and
cocompactness. It also gives the finite-type criterion consequences, the
explicit indefinite $(3,3,4)$ witness, the converse Euclidean-simplex criterion,
and the exact coroot versus coweight translation-group comparison. Rank-one
$A_1$ is now addressed in the last equivalence: its form is $[1]$ and it has no
faithful bounded simplex reflection chamber; the affine rank-one case remains
$\tilde A_1$, realized by the interval from finite type $A_1$. No Choice is
used.

The audit made these concrete repairs and dependency corrections:

- Step 2.1 now obtains a compact neighborhood using finite-dimensional local
  compactness, then uses the affine-arrangement local-finiteness supplier and
  finite-subspace avoidance. It explicitly adds the zero subspace to the
  avoided family, so the selected direction is nonzero even when the basepoint
  is on no wall.
- Step 3.2 now justifies the compactness needed for cocompactness: the closed
  root alcove is a finite vertex hull, and the library's finite-hull theorem
  makes it compact. The proof of proper discontinuity uses the actual
  simple-coroot basis and its continuous coordinate map before counting the
  integer lattice points in bounded coordinate sets.
- Step 1.4 now computes $\cos(\pi/3)=1/2$ and
  $\cos(\pi/4)=\sqrt2/2$ from the double-angle and supplementary identities,
  strict decrease and the quarter-turn value; the negative vector's quadratic
  value is explicitly $1-\sqrt2<0$. The remaining two-generator forms have
  positive determinant and are finite by the finite-type criterion.
- Step 4.1 now gives the simplex-normal Gram calculation and handles the
  one-generator finite case. The coweight/coroot lattice inclusion is cited at
  the exact point where the extended-group comparison is made.
- Six unused direct scaffold dependencies were removed, with only this
  consumer's cross-batch rows marked `removed`:
  `thm-cg-root-length-criterion-and-faithfulness`,
  `lem-cg-diagram-products-and-invariant-form-comparison`,
  `thm-cg-finite-coxeter-classification-including-h-and-dihedral`,
  `lem-cg-affine-alcove-separation-and-facet-types`,
  `lem-cg-affine-point-stabilizers-and-vertex-residues`, and
  `thm-cg-crystallographic-finite-type-and-lattice-stability`. Their stated
  uses were absent from this theorem's proof: A7 supplies the matching root
  system; the affine-alcove presentation theorem supplies the consumed
  generation, presentation and alcove-action results. The new direct published
  inputs for compact neighborhoods, compact finite hulls, continuous basis
  coordinates, coweight inclusion and the trigonometric constants are in both
  item metadata and manifest. The recomputed level is still 18 because the
  level-17 A8 enumeration remains a direct input.

The direct dependency list now has 31 IDs and is synchronized between the item
and manifest: `def-cg-irreducible-affine-coxeter-type`,
`lem-cg-positive-radical-and-affine-gram-exclusions`,
`def-cg-standard-affine-diagrams`,
`lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`,
`lem-cg-affine-slice-simplex-and-wall-reflections`,
`lem-cg-affine-type-crystallographic-alcove-diagrams`,
`lem-cg-affine-diagram-enumeration`,
`def-cg-real-coxeter-form-and-reflection`,
`thm-cg-finite-type-positive-definite-criterion`,
`def-cg-affine-root-hyperplane-reflection-and-alcove`,
`lem-cg-highest-root-and-fundamental-alcove`,
`thm-cg-affine-alcove-transitivity-presentation-and-length`,
`def-geometric-simplex-spanned-by-affinely-independent-vertices`,
`lem-locally-convex-closures-and-finite-compact-convex-hulls`,
`lem-cg-affine-reflection-identities-and-local-finiteness`,
`def-hh-coxeter-matrix-word-group-and-length`,
`def-cg-canonical-reflection-homomorphism`,
`def-cg-coxeter-diagram-components-and-finite-type`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity`,
`prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
`lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`,
`thm-locally-compact-normed-space-iff-finite-dimensional`,
`lem-compact-closed-balls-in-a-locally-compact-metric-space`,
`thm-coordinate-map-for-a-finite-dimensional-normed-space`,
`def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`,
`thm-double-angle-and-power-reduction-identities`,
`thm-cofunction-supplementary-and-reflection-identities`,
`thm-quarter-turn-values-and-shift-formulas`,
`thm-sine-cosine-signs-monotonicity-and-ranges`,
`thm-of-square-roots`, and `def-pi-via-first-positive-cosine-zero`.

**Source audit.** The complete Davis passage was read: *The Geometry and
Topology of Coxeter Groups*, §6.8, Theorem 6.8.12 (printed p. 102; it explicitly
assumes no infinite labels); §6.9, Theorem 6.9.1 and Table 6.1 (printed pp.
103–104); Appendix C.1–C.3, including the complete proof of Theorems C.1.2–C.1.3
(printed pp. 433–438; PDF pp. 448–453). The Davis–Moussong *Notes on
Nonpositively Curved Polyhedra*, §6.1, Example 6.1.4 and Theorem 6.1.1, printed
pp. 31–33 (PDF pp. 32–34), was also read; Theorem 6.1.1 gives only a sketch,
which is not used as the consumer's proof. Xiong's referenced PDF could not be
fetched because its 19.7 MB size exceeded the browser fetch limit; no theorem
step depends on it. **Published-source concern:** Davis Lemma C.3.1, printed
p. 436 (PDF p. 452, lines 19159–19163), says “positive definite” in the first
inequality although its hypothesis is positive semidefinite. The inequality
still follows from the PSD quadratic form, but the wording is a confirmed
source typo (high confidence); this consumer and A8 prove their needed claims
locally and do not rely on that sentence.

Current cross-batch supplier uses are recorded exactly. Open supplier decisions
remain for `def-cg-affine-root-hyperplane-reflection-and-alcove` (the Statement's
root-hyperplane setup and Step 2.1),
`def-cg-real-coxeter-form-and-reflection` (Fact F19, Step 1.4 and the setup),
`thm-cg-finite-type-positive-definite-criterion` (Fact F8, Step 1.4), and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (Fact F12,
Step 3.1). `lem-cg-affine-reflection-identities-and-local-finiteness` is
reconciled as a local proof-use review at Facts F15/F16/F18, Steps 2.1, 3.2,
4.1; `lem-cg-highest-root-and-fundamental-alcove` is reconciled at Fact F13,
Steps 1.3 and 3.2; and `thm-cg-affine-alcove-transitivity-presentation-and-length`
is reconciled at Fact F6, Steps 1.3, 2.1 and 3.1. These three rows remain local
use reviews, not supplier acceptance receipts. Same-pair A7 supplies Facts
F3/F5 at Steps 1.1 and 1.3; its changed-input item decision is owner-held.
Same-pair A8 supplies Fact F2 at Step 1.1; its changed-input item decision is
also owner-held. The A1/A2/A3/A4/A5 author decisions remain queued for stable
closeout. The theorem decision therefore remains escalated until the owners
resolve the held suppliers and current decisions are recorded.

Focused explicit-path precheck, two-file rendercheck, strict selected
proof-contract check, and batch manifest-deps all pass after these edits. The
item is ready for the final pair-wide gates, not accepted. Current raw item
SHA256: `ac646347643b669abcee011b377e8fe5ad06aa74fd112ead3c223f71334d26ac`.

**Next:** `ex-cg-b-tilde-versus-c-tilde-diagrams` at level 19.

### Continuation checkpoint — B-tilde/C-tilde comparison (2026-10-08)

`ex-cg-b-tilde-versus-c-tilde-diagrams` remains at dependency level 19 with 19
direct dependencies synchronized in the item and Batch 27 manifest. It compares
the shared $(4,4)$ path at $n=2$, distinguishes the labelled affine diagrams for
$n\ge3$, computes positive kernel vectors for both cosine matrices, and now proves
the stronger abstract-group distinction for $n\ge3$.

**Proof audit.** The former Step 3a objection was valid: different Coxeter diagrams
alone do not prove that the underlying affine groups are not abstractly
isomorphic. The item now proves this with maximal finite subgroups. A finite
subgroup fixes the barycentre of one of its finite orbits. The affine-Gram
classification theorem's strict closed domain and intersection formula, together
with the support criterion, give $\operatorname{Stab}(p)=W_{T(p)}$ for every
$p$ in the closed simplex. Proper parabolics are finite. Every finite subgroup
therefore lies in a vertex stabilizer; the incident facet reflections have the
vertex as their unique common fixed point, which proves that each vertex
stabilizer is maximal finite and that every maximal finite subgroup is conjugate
to one.

For $\tilde B_n$, deleting the terminal $4$-edge vertex leaves $D_n$ (with
$D_3=A_3$), producing a maximal finite subgroup of order
$2^{n-1}n!$. For $\tilde C_n$, deleting vertex $i$ gives finite terminal-$4$
blocks of ranks $i$ and $n-i$, with rank-zero blocks trivial and rank-one blocks
$A_1=B_1$. Their subgroup orders are $2^n i!(n-i)!$. The endpoints have order
$2^n n!$; for interior $i$, the binomial coefficient $\binom ni\ge n$ gives
order at most $2^n n!/n<2^{n-1}n!$. Thus no maximal finite subgroup on the
$C$ side has the $B$-side order, an invariant of abstract group isomorphism.
The proof includes the root-coordinate coroot calculations: $Q^ee(B_n)$ is
the even-coordinate-sum sublattice of $\mathbb Z^n$, while
$Q^ee(C_n)=\mathbb Z^n$.

**Sources and inputs.** Davis, *The Geometry and Topology of Coxeter Groups*,
§6.9, Theorem 6.9.1 and Table 6.1 (printed p. 104, PDF p. 119), and Appendix B,
§B.4, “Euclidean Tessellations” (printed p. 432, PDF p. 447), were read at the
exact cited passages. Table 6.1 lists the affine diagrams; Appendix B identifies
the $\tilde C_n$ straight-line diagram $(4,3,\ldots,3,4)$ with the cube
tessellation and states its dimension-1 and dimension-2 conventions. The local
proof supplies the kernel and group-invariant calculations. Xiong's cited
19.7-MB PDF could not be fetched within the browser limit; no claim in the proof
depends on it. There is no new published-content concern.

Current exact supplier uses are recorded in this consumer's cross-batch rows:

- `def-cg-affine-root-hyperplane-reflection-and-alcove` — Statement (iv), Fact
  F7 and Proof Step 3.1; open until Batch 24 records its current supplier
  decision.
- `def-cg-crystallographic-scaling-coroot-and-lattice` — Statement (iv), Fact
  F4 and Proof Step 1.1; open until Batch 21 resolves its current supplier
  decision.
- `lem-cg-highest-root-and-fundamental-alcove` — Statement (iv) and Proof Step
  3.1 dimension claim; open while its Batch 24 owner decision is outstanding.
- `thm-cg-crystallographic-finite-type-and-lattice-stability` — Facts F4/F5,
  Steps 1.1 and 1.3; open under its owner-held changed-input decision.
- `thm-cg-finite-coxeter-classification-including-h-and-dihedral` — Fact F9,
  Steps 1.1, 1.3, 2.1; open for current owner-decision reconciliation.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` — Fact F10,
  Steps 1.4 and 2.1; open for current owner-decision reconciliation.
- `lem-cg-affine-reflection-identities-and-local-finiteness` — Fact F7, Step
  3.1; locally reconciled against current bytes, not a supplier acceptance.
- `thm-cg-affine-alcove-transitivity-presentation-and-length` — Fact F11, Step
  3.1 and the statement's presentation/extension conventions; locally reconciled
  against current bytes, not a supplier acceptance.

Same-pair current obligations include `def-cg-standard-affine-diagrams` (Fact
F1, Steps 1.1, 1.2 and 2.1), `lem-cg-affine-type-crystallographic-alcove-diagrams`
(Facts F2/F3, Steps 1.1, 1.2 and 3.1), and the classification theorem used by
Fact F8, Step 1.4. A7 remains owner-held after changed inputs; these supplier
uses and any unfinished current decisions keep B3 escalated. The B3 strict
contract records each numbered step's inputs, the exact source excerpts, and
empty, zero, one, degenerate, endpoint, Choice and iff dispositions.

**Checks after the last B3 proof edit.** Explicit-path precheck passed; two-file
rendercheck passed; selected strict proof-contract passed with 0 errors and 0
warnings; `manifest-deps` reported 13 items, 0 normalizations and 0 errors.
The run-wide item dependency-level check reports no B3 level error; it does
report two unrelated pre-existing drifts:
`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` is recorded at 11
but computes to 10, and `thm-cg-compact-local-cat-one-short-circle-criterion`
is recorded at 12 but computes to 11. The general `depcheck` was also invoked
with the item path; that tool scanned the full library and failed on its
repository-wide published-unaudited warnings, not a B3 dependency error. Current
B3 raw item SHA256: `f2d7ad40f58bbd8b901c835cbcb049e54485e985c7f9693983c24be8db012dcd`.

**Next:** `ex-cg-indefinite-coxeter-form-is-not-affine` at level 19; it is last
in the assigned dependency order.

### Continuation checkpoint — indefinite non-affine example (2026-10-08)

`ex-cg-indefinite-coxeter-form-is-not-affine` remains at dependency level 19, now
with 22 direct dependencies synchronized in the item and Batch 27 manifest. The
example is the connected triangle Coxeter system with labels $(3,3,5)$ and its
cosine matrix. Its form has a vector of negative norm, a positive basis vector,
and determinant $-\sqrt5/4$, so it is indefinite and nondegenerate. Every
nonempty proper principal submatrix is positive definite; the empty matrix case
is stated vacuously, and every proper standard parabolic is finite. The finite
type criterion therefore makes the full group infinite, while the affine-form
definition excludes it.

**Mathematical audit and repairs.** The B5 notes' prior corrections were checked
against the current item: the hyperbolic realization claim remains absent and
the determinant cross-term is $-2(1/2)(1/2)\cos(\pi/5)$, giving
$\frac12-\frac12\cos(\pi/5)-\cos^2(\pi/5)=-\sqrt5/4$. The item's provenance
is now `ai-altered` for both statement and proof, and the stale `generation`
field was removed to match the edited statement provenance.

The fifth-root calculation proves $\cos(\pi/5)=(1+\sqrt5)/4$ locally from
$1+\zeta+\cdots+\zeta^4=0$ with $\zeta=e^{2\pi i/5}$, Euler's identity and the
double-angle identity. It also derives the $m=3$ and $m=4$ cosine values. The
proof gives the full determinant and completes the square on each proper
two-coordinate form. It separately handles the rank-zero parabolic. For the
broader finite-label triangle boundary, the $3\times3$ cosine determinant
factors as
$(\sin\theta_1\sin\theta_2)^2-(\cos\theta_3+\cos\theta_1\cos\theta_2)^2$;
the second factor is positive and the first has the sign of
$\cos(\pi-\theta_1-\theta_2)-\cos\theta_3$. Strict cosine monotonicity then
gives equality exactly at angle sum $\pi$, while the sum-vector supplies a
negative quadratic value for every strict sub-$\pi$ case. This is an algebraic
calculation only; no hyperbolic triangle is constructed.

The qualitative trichotomy paragraph is justified for this connected system.
If its form were positive semidefinite but not positive definite, the proof
uses the quadratic polynomial $B(x+ty,x+ty)$ to show a nonzero null vector is
in the radical; A2 then gives corank one and affine form type. Positive
definiteness gives finiteness by the finite-type criterion. The current example
is instead indefinite, infinite, and has finite proper parabolics, so it
refutes replacing the positive-semidefinite hypothesis in A8's classification
with infiniteness or proper-subdiagram finiteness.

**Source recheck.** Davis–Moussong, *Notes on Nonpositively Curved Polyhedra*,
§6.1, Example 6.1.2 (printed p. 33/PDF p. 32), was read in full around the
triangle-angle criterion. Davis, *The Geometry and Topology of Coxeter Groups*,
§6.8, Exercise 6.8.10 and Theorem 6.8.12 (printed p. 102/PDF p. 117), was read
through its explicit no-infinite-label hypothesis and three cosine-form cases.
Both sources are contextual only; the item proves its matrix claims locally,
and the displayed labels are finite. No published defect was found.

Current exact supplier-use obligations are recorded in the B5 rows of
`research/frontier-42-coxeter-32-batch-27.cross-batch-dependencies.json`:

- `def-cg-coxeter-diagram-components-and-finite-type` — Fact F3, Step 3.1
  (connectedness); `def-cg-real-coxeter-form-and-reflection` — Fact F1, Steps
  2.1 and 2.2; `thm-cg-finite-type-positive-definite-criterion` — Fact F4,
  Steps 2.1 and 3.1; `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  — Fact F5, Step 2.1; `lem-cg-reflection-form-invariance-and-rank-two-orders`
  — Fact F13, Steps 2.1 and 2.2. Each is locally reconciled against its current
  statement and hypotheses, but its current supplier decision remains open, so
  the B5 decision must be escalated.
- Same-pair suppliers are `def-cg-irreducible-affine-coxeter-type` (Facts F2,
  Steps 2.1 and 3.1), `def-cg-standard-affine-diagrams` and
  `lem-cg-affine-type-crystallographic-alcove-diagrams` (Fact F10, Step 2.2),
  `lem-cg-positive-radical-and-affine-gram-exclusions` (Fact F14, Step 3.1),
  and `thm-cg-affine-gram-classification-and-euclidean-realization` (Fact F15,
  Step 3.1). These current item decisions remain in the dependency-ordered
  stable closeout; A8 is already escalated on its own supplier obligations.

The original batch notes listed B5 at level 20; the current manifest and dispatch
recompute it to level 19 because A8 is now at level 18. This pre-splice plan/order
mismatch is recorded for Step 4. B5 itself has no unresolved local calculation.

**Checks after the final B5 item edit.** Explicit-path precheck passed; rendering
of B5 and the B page passed; selected strict proof-contract passed with 0 errors
and 0 warnings; content policy passed for all 13 scoped items with 0 errors and
0 warnings; `manifest-deps` reported 13 items, 0 normalizations and 0 errors.
Current B5 raw item SHA256: `dbb1e5a20719d5590381ee7dfa9ac28b6837deded49f242472876c8aa56415b0`.

**Next:** the assigned pages and final pair-wide gates are complete; see the
final handoff below for the remaining owner-held decision and plan obligations.

### Final pair handoff — 2026-10-08

**Owned work completed.** All 13 assigned items are authored at their current
levels and registered in Batch 27; both assigned pages have current prose and
item order. The required one-time formatter command covered all 13 item paths:
`proof-layout` reported 13 items, 88 steps, 0 defects. No new item IDs were
created. Supplier changes recorded in item metadata and the manifest include
`thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix`
for B3; `def-pi-via-first-positive-cosine-zero` for A8 and B5; and the
classification theorem's local-compactness, compact-hull, coordinate-map,
coweight, and trigonometric inputs listed in its dependency list. B3's unused
graph-isomorphism supplier and B5's four unused algebra/trigonometry suppliers
were removed; their proof-use records and the current remaining edges are
preserved in the Batch 27 manifest and cross-batch file.

**Final checks after proof-layout.** Explicit-path precheck passed for all 13
items (11 proof-bearing; the two definitions are not applicable). Rendering
passed for 15 files (13 items and both pages). Content policy passed for 13
items with 0 errors and 0 warnings. The strict proof-contract check passed for
all 12 proof-bearing items with 0 errors and 0 warnings. `manifest-deps`
reported 13 items, 0 normalizations and 0 errors. Focused `depcheck`,
`fwdcheck`, and `extcheck` passed with 0 errors or warnings. Focused `depsource`
reported 152 published and 97 draft-page dependency edges, with 0 unresolved or
homeless dependencies. Source-fetch verification passed for 7/7 sources after
stamping the already-read Knapp PDF; source-backing passed for all 18 authored
results. The run-wide dependency-level check reports no assigned-item level
errors, but still reports the two unrelated drifts already identified:
`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` (recorded 11,
computed 10) and `thm-cg-compact-local-cat-one-short-circle-criterion`
(recorded 12, computed 11).

**Decision gate remains owner-held.** `step3-decisions check --phase final`
still reports the A/B pair scope as owner-held: the owner scope decision says
“proceed” only for the former scope hash and requires the amendments to be
applied before a current “proceed” receipt. The first ordered `record-item`
attempt, for `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram`,
was rejected before writing with `Step 3a must clear for the item pair before
item auditing`. No new item decisions were written. Current receipts for
`lem-cg-affine-type-crystallographic-alcove-diagrams`,
`lem-cg-affine-diagram-enumeration`, and
`ex-cg-reducible-semidefinite-forms-are-factorwise` remain owner-held/escalated
after input changes. The other ten assigned IDs still need their current item
decisions after the owner resolves the scope gate; the direct supplier IDs and
consuming facts/steps are recorded in this report and
`research/frontier-42-coxeter-32-batch-27.cross-batch-dependencies.json`.
No `--owner` or judge/audit stamp was used.

**Step 4 plan amendment.** `validate-plan research/plan-spec.json --run
frontier-42-coxeter-32` reports three undeclared prerequisites. The local one
is the B page's dependency on
`trigonometric-and-oscillatory-examples-in-one-variable`: B2 uses the exact
published A-page supplier `cor-sine-and-cosine-are-one-lipschitz` at Fact F18
and Proof Step 3.1 to establish `cos(pi/m) -> 1`. The supplier and use are
mathematically valid, but the page is outside the pair's declared requirement
closure. Step 4 must either add that A page to the pair's prerequisite closure
and synchronize the plan/page/manifest, or replace the supplier with a complete
local Lipschitz argument. The two other plan errors are on the unrelated
`noncrossing-partition-lattices-and-kreweras-complements` pages, each missing
`braided-and-symmetric-monoidal-categories`. A batch page-selection pass
confirmed the same local error and reported one redundant-prerequisite warning:
the A page directly requires `finite-coxeter-diagrams-and-complete-classification`,
which it already reaches through `affine-reflections-coroot-translations-and-alcoves`.
The prior pre-splice note that B5 was level 20 is also stale: the current
correct level is 19 because A8 is 18.

**Open mathematical and source obligations.** The Batch 24 item
`thm-cg-affine-alcove-transitivity-presentation-and-length` is still absent;
A6 uses its facet-generation claim at Proof Step 4.2 to identify the generated
facet group with `W_a`. The Davis theorem proves the presentation for the
generated group only and does not discharge that generation claim. Other open
supplier decisions and exact uses remain on the owned rows of the cross-batch
file, including the Coxeter-form and diagram definitions, finite-type and
parabolic criteria, rank-two reflection result, affine-root setup, highest-root
lemma, and crystallographic scaling theorem. These keep the affected consumers
escalated even though their local proofs and gates are complete. The confirmed
published-source concern remains Davis, *The Geometry and Topology of Coxeter
Groups*, Lemma C.3.1, printed p. 436 (PDF p. 452): its first inequality says
“positive definite” although the hypothesis and argument use positive
semidefiniteness. Confidence is high; correct the wording in the source record
when the owner next edits that source, and do not rely on the typo. No other
published defect was confirmed.

**Run state.** The autopilot run remains paused, with the recorded 3b blockers:
malformed exclusive-cohort JSON, unknown profile `gpt-6-luna-xhigh`, and invalid
`\\l` escape in the large-spherical plan. No autopilot controls were changed.
These orchestration blockers are independent of the authored pair and its
current owner-held Step 3 decision gate.
