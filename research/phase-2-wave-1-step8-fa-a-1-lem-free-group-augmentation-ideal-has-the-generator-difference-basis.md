# FA terminal evidence — group a, queue position 1

Run: phase-2-wave-1. Dispatch: step8-fa-a-round-1. Item:
`lem-free-group-augmentation-ideal-has-the-generator-difference-basis`.
Decision: **repaired**, source status **verified**.

## Independent review and exact defect

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the frozen queue;
the current item and the full three originally cited dependencies; both
`group-homology-transfer-and-low-degree-exact-sequences` A/B pages; batch 3's
manifest, relevant coverage passages, item proof contract and risk review;
reader-3 and refute-3 evidence; Alpha's Step-8 report, adjudication tuple and
current task's reader-warning routing; and both Terra rejection rows. No
Step-7 reader warning targets this item. The Step-6 reader/refuter acceptance
and Alpha's risk review are historical independent evidence, not a reason to
accept the current proof.

The original rejection (context
`9ceecd82ee67cdaf843b2ac98e126dff1011ca7978efcaa12c52a2ea0b80c419`)
correctly objected that the diagonal-bar supplier does not itself license
using an arbitrary free resolution. Sol replaced that citation with the
published derived-homology definition and projective-resolution comparison
and correctly explained preservation of chain homotopies by tensoring.

The final Terra rejection (context
`6542f0a66f2b6e0373c04d712d74dedbea3369f3e1b710ac19e53680fa3efa36`,
judge item hash `c03530e4066dc86ef3790e7310a0c186af2eeeef656f35bd649af07083c5ca68`)
objects that the statement/Given do not expressly assume DC. The page and
old final statement sentence suggest the intended conditional convention,
but an explicit assumption resolves that ambiguity. Independently, Sol's
step 3.1 also asserted that the arbitrary-rank free module is projective.
The published interface `thm-free-modules-are-projective-with-choice-boundary`
requires AC for an arbitrary basis. That inference does not follow from the
page's DC convention. The final repair therefore supplies the comparison
locally without using that inference, rather than strengthening the page's
hypotheses or editing any supplier.

## Mathematical basis

For any set X, telescoping a finite word expresses its difference from 1 as
a left combination of generator differences, and every augmentation-zero
finite sum is a sum of such differences. The reduced-word Cayley graph is
connected and has no loops, parallel unoriented edges, or cycles: each such
configuration would imply a nonempty reduced identity word. A nonzero finite
edge chain has a supported terminal vertex whose boundary coefficient is
nonzero. Thus the displayed left complex is exact and free in ZF, including
X empty. These original steps remain sound.

The statement and Given now explicitly assume DC and supplied projective
resolution data for the homology conclusion alone. Steps 3.1–7.1 give an
independent comparison. Inversion changes the left free complex P into a
right free complex T, with boundary x^{-1}-1. For the supplied left
projective resolution Q, form T_p tensor_R Q_q. Tensoring with a free module
is exact because each element has finite support; tensoring with a fixed
projective module is exact because its identity lifts through the canonical
free cover, making it a retract of a free module. This needs neither
projectivity of arbitrary free modules nor a chosen family of splittings.

The total differential is h+v with v=(-1)^p(1 tensor d_Q). Its two
augmentations are degreewise surjective. Their kernels have exact columns
and rows, respectively. Eliminate a total cycle starting at its largest
column, or largest row, using an exactness primitive and subtracting its
total boundary. Each subtraction reduces that index; finite total diagonals
make the procedure terminate. The kernel complexes are therefore acyclic.
Lifting cycles and boundary primitives proves that each augmentation induces
a homology isomorphism; in degree zero the differential of a lifted cycle is
already zero. This proves the comparison with the supplied derived complex.
Tensoring T with the trivial module makes every generator difference zero,
giving H_1 equal to the direct sum over X and vanishing in degrees above one.
No general comparison or spectral-sequence theorem is silently imported.

## Authoritative verification

The complete relevant source passages were opened through web retrieval,
not inferred from search snippets:

- https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf
  — Weibel, Definition 6.1.2, printed p.161 (PDF page 2), identifies derived
  group homology with Tor. Proposition 6.2.6 and its complete proof and
  Corollary 6.2.7 and proof, printed p.169 (PDF page 10), verify the arbitrary
  free-generator augmentation basis and the homology calculation. The source's
  projective-dimension shorthand is not used to bypass the local choice boundary.
- https://math.ucla.edu/~sharifi/homalg.pdf
  — Sharifi, Lemma 3.5.8 and complete proof, printed p.66 (PDF page 66),
  gives projective-implies-flat by the direct-summand argument. Proposition
  3.5.9 and its complete first proof, printed p.67 (PDF page 67), give the
  signed tensor bicomplex and augmentation comparison. Remark 3.5.11,
  printed p.68 (PDF page 68), permits a flat resolution on either side.
  The item independently fills in the source's total-exactness assertion by
  finite elimination, with the choice accounting proved locally.

The original Löh reference and batch coverage supply page context; no new
claim of external full-text verification of that reference is made here.

## Scope, contracts and frontier bookkeeping

Final dependencies are `thm-reduced-words-form-the-free-group`,
`def-group-homology-as-a-derived-functor`, `def-projective-object`, and
`def-dependent-choice`; their complete interfaces were read. No existing
dependency item was edited, so no owner-prerequisite-repair licence is needed.
No new lemma, page inventory, scope-group entry or judge call is needed.
The owning batch-3 manifest statement, dependencies and proof route were
updated. The batch and aggregate contracts contain the regenerated citations
and derivations, corrected boundary evidence and an independent FA risk review.
Original Alpha/judge/reader evidence files remain untouched.

The direct consumer
`lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree`
was read for the affected use: its statement/Given retain the page's DC and
supplied-resolution convention and it uses the same integral homology
conclusions. Its mathematics was not edited. Only its contract's verbatim
supplier quotation was synchronized in the batch and aggregate contracts.
The A/B prose and page placement remain valid under the existing convention.

Following `briefs/tasks/frontier-dependency-ledger.md`, reconciled and atomically
rewrote `research/phase-2-wave-1-batch-3.cross-batch-dependencies.json` as `[]`:
all four final suppliers are published, so this repair creates no same-frontier
cross-batch edge. Ran `node tools/frontier-dependency-ledger.mjs refresh --run
phase-2-wave-1` successfully. No mathematical scope was added for bookkeeping.

## Checks and terminal checkpoint

- Focused precheck: 1 checked, 0 failing, after adopting its canonical phase numbering.
- Focused rendering: clean YAML, delimiters and KaTeX.
- Strict batch proof contract: 1/1 checked, zero errors/warnings.
- Required risk review: complete, zero errors; HIGH score 7 explicitly reviewed.
- Batch citation fidelity: 77 citations / 34 items, no missing quotes or widening candidates after synchronizing the one downstream quote.
- Dependency check: no cycles, all references resolve, no draft items on published pages; existing unrelated warning output retained in the command result.

Final itemHashGuard:
`12bad985ae6839592a6ece4300897817d58b74363ff1a75e8c77d8787321be31`.
The sole queued item's mathematical obligations are complete. Next action is
the exact `repaired` terminal recorder, followed by receipt/guard verification.
This is FA closure evidence, not a judge verdict or a pass stamp. No third
consumer judgment is authorized or requested.

### Recorder completion

The prescribed `record ... --disposition repaired --source-status verified`
command succeeded, recording item hash
`9b7184083fa882edb35105611e0c90c66a969bda64a1cd280991f4029cbe97b2`.
The Step-8 edit guard passed: 26/26 current run changes licensed, zero new or
deleted items. Focused whitespace checking passed.

The terminal-resolution checker found six current resolutions and one
engine-lifecycle error: this active dispatch's result file
`research/phase-2-wave-1-dispatch/final-adjudicator-step8-fa-a-round-1.result.json`
does not yet exist. The engine creates that result on dispatch completion;
it must rerun receipt validation then. No result file or judge stamp was
fabricated. Mathematical work and the ordered queue are complete; the only
remaining action belongs to normal engine dispatch completion and validation.
