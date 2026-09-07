# Independent Step-6 reader report — batch 20

## Scope opened

Read the current batch manifest, coverage record, page manifests, proof
contracts, author check, and all 68 assigned item bodies.  The assigned page
inventory is:

- A: `weak-choice-principles-and-sierpinskis-theorem` (26 items) and B:
  `weak-choice-principles-and-sierpinskis-theorem-examples` (6 examples).
- A: `club-stationary-sets-and-pressing-down` (29 items) and B:
  `club-stationary-sets-and-pressing-down-examples` (7 examples).

I also opened the direct published dependencies needed by the proofs: the
choice, DC, cofinality, ordinal-arithmetic, recursion, Hartogs,
Schroeder--Bernstein, Cantor, Zorn, finite-choice, countable-union, and real
uncountability items.  The in-batch dependency chains were read at their item
bodies, not inferred from contracts.

For source/citation checking I opened the cited Jech, Morillon, alg-d,
Caicedo (parts 3--5), Carneiro, Lietz, Vasey, Williams, Welch, Kamensky,
Inamdar--Rinot, and Rinot sources.  The key local-GCH, Halbeisen--Shelah,
Hartogs, club/stationary, and elementary-submodel statements match the cited
routes.  The Jech source also supports the reported weak-choice orientation as
a relative-consistency ledger; no model construction was treated as locally
proved.

## Repair

- Confirmed and repaired `items/lem-antichains-well-order-linearly-ordered-sets.md`,
  proof step 1.1.  It called the strict relation
  `$(U,u)\prec(V,v)$ iff $U=V$ and $u<v$` a poset, whereas the library's
  `def-partial-order` requires a reflexive relation.  The construction now
  uses `$(U,u)\le(V,v)$ iff $U=V$ and either $u=v$ or $u<v$`.  This preserves
  the maximal-antichain argument and makes the invocation of the preceding
  poset lemma type-correct.
- Updated the matching derivation claim in
  `research/frontier-33-batch-20.proof-contracts.json`.  The item had no stale
  `verification.judge` record to remove.

## Mathematical reading notes

- Weak choice: checked the AC--DC--countable-choice implications, the DMC
  equivalence, finite-character and multiple-choice routes, the canonical
  ordinal sequence coding, the Halbeisen--Shelah diagonal argument, Hartogs
  bounds, Specker's two-local result, and the arbitrary-set-GCH reduction.
  Assumptions about supplied well-orders, the injected copy of omega, and the
  distinction between local and global GCH are retained.
- Club/stationary: checked the ambient regular-uncountable/ZFC hypotheses,
  closure and intersection bounds, diagonal intersection and Fodor, normal
  filters, normal functions, cofinality strata and trace, both stationary
  splitting cases, Solovay partition, and elementary-initial-segment
  characterization.  Boundary cases at zero, successors, empty intersections,
  and countable cofinality are explicitly handled where needed.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `weak-choice-principles-and-sierpinskis-theorem` | Pass after the repaired poset typing defect. |
| `weak-choice-principles-and-sierpinskis-theorem-examples` | Pass. |
| `club-stationary-sets-and-pressing-down` | Pass. |
| `club-stationary-sets-and-pressing-down-examples` | Pass. |

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-antichains-well-order-linearly-ordered-sets.md` — unchanged after formatting check.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-antichains-well-order-linearly-ordered-sets.md` — pass.
- `node tools/rendercheck.mjs items/lem-antichains-well-order-linearly-ordered-sets.md` — pass.
- Focused proof contract check for the repaired item and strict full batch
  contract check — pass (53/53 proof-bearing items).
- `node tools/tsx-run.mjs tools/author-check.mts frontier-33 20` — pass.
- `node tools/content-policy.mjs research/frontier-33-batch-20.pages.json` —
  pass (68 scoped items, 0 errors, 0 warnings).
- `git diff --check` — pass.

## Uneditable findings and blockers

No uneditable defect remains.  No blocker.
