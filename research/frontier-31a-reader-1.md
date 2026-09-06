# frontier-31a · Step-6a independent reader · batch 1

## Scope opened

I read the current `research/frontier-31a-batch-1.pages.json`, all four
assigned page bodies, and all 74 assigned item bodies: 24 A and 6 B items for
`the-finite-simple-group-classification-landscape`, and 38 A and 6 B items for
`schur-multipliers-and-universal-central-extensions`.  I enumerated the 58
direct dependency IDs and verified that each resolves in `items/`; I opened the
dependency definitions/theorems used by the local group-homology and CFSG
spines, including the two derived-functor definitions, the PID UCT, H^2
extension classification, Jordan–Hölder, simplicity of A_n, simple groups, and
the Fitting-subgroup definition.  No assigned item or page is absent.

I also read the relevant source passages independently: Aschbacher, *Status*
pp. 1–4 (classification statement; original/second effort; p-local and
quasithin discussion); Smith, *CFSG—A User's Manual* opening and family-table
material; Löh's group-cohomology notes as the declared source for the Schur
items; and the AMS Number 10 product record.  The AMS direct open returned
403, but the official search result supplied the complete product description,
including its 2023 book details and wording that the series aims to provide a
complete proof.

## Repairs made

- In `library/group-theory/schur-multipliers-and-universal-central-extensions.md`,
  repaired `$H_2(G;mathbb Z)$` to `$H_2(G;\mathbb Z)$`.
- In `lem-every-finite-group-is-finitely-presented`, repaired `$gin G$` to
  `$g\in G$`; in `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`,
  repaired both missing `\le`; and in
  `prop-schur-multiplier-of-a-free-group-is-trivial`, repaired the missing
  `\cap`.
- Retargeted the citations for the first-generation-history and quasithin-gap
  remarks to the Aschbacher survey, and the second-generation-status remark to
  the AMS Number 10 record.  Those are the current source records that actually
  support the respective assertions.

Focused `reflow`, `precheck`, and `rendercheck` pass for the changed items;
`rendercheck` passes for the changed A page; `proof-contract --strict` passes
47/47.  The latter is structural only and does not cure the defects below.
`depcheck --quiet` reports no errors (repository-wide legacy warnings only),
and batch content-policy passes 74/74.

## Confirmed unresolved defects

Thirty-two proof-like bodies contain one of three circular templates.  The
“tautology” template says only that the hypotheses give the conclusion; the
refutation template names no counterexample or deduction; and the verification
template names no calculation or cited table entry.  They do not prove,
refute, or verify the displayed claim, despite mechanically valid two-step
formatting.  Exact affected IDs are in the JSON findings artifact.

The defect is fatal for the theorems/lemmas/corollaries because the claims are
load-bearing.  It is fatal for the listed false statements and examples because
their counterexample/witness/citation is missing, not merely a short omitted
step.  I did not replace these 32 proofs: doing so would require substantial
new mathematical derivations and corresponding contract rewrites beyond a
reader repair.  No published dependency was found defective.

## Per-page verdict

- `the-finite-simple-group-classification-landscape` (A): blocked by the
  unproved components and generalized-Fitting results and by six unrefuted
  false statements.
- `the-finite-simple-group-classification-landscape-examples` (B): blocked by
  five unverified witnesses; its composition-factor counterexample itself is
  adequate.
- `schur-multipliers-and-universal-central-extensions` (A): blocked by ten
  unproved load-bearing results and six unrefuted false statements.
- `schur-multipliers-and-universal-central-extensions-examples` (B): blocked
  by three generic verifications; the Hopf, stem-extension, and D8/Q8
  calculations are adequate.

## Blocker and next action

The batch cannot advance until the author replaces every listed template with
an argument that identifies the needed source fact or derives the conclusion
from the declared dependencies, and updates the associated proof-contract
entries.  A new independent reader must then reread those post-repair bodies.
