# This dispatch — Stage 0 re-check, before step 4 splices

You reviewed batches 1–8 and returned **5 sufficient, 7 insufficient** in
`research/frontier-10-alpha-step3-scaffold-review.md`. The owning Betas have now
repaired. This is the re-check your own review promised: *"I re-check every
`insufficient` pair before step 4 splices, and review batch 9 when it lands."*

## Two jobs

**1. Re-check the seven `insufficient` pairs.** For each, confirm from disk that
your findings were actually applied — not that a Beta said so. An addition must
appear in `pages.json` **and** carry a real disposition and source in
`coverage.json`; an item in one but not the other is exactly the drift the
step-6 gate would catch later and the point of catching it now.

The repaired batches are 2, 3, 5, 6, 7 and 8. Batch 1's pair 2 (`matrices`) was
`insufficient` **solely for F1**, which the owner resolved by re-home — see
below — so it needs no Beta edit; verify that and close it.

Where a Beta disagreed with a finding rather than applying it, adjudicate: it was
told to argue with evidence rather than skip silently. A defensible disagreement
is a fine outcome; record it as such.

**2. Review batch 9 for breadth and depth**, which you have not seen. Same six
questions as before. `gaussian-elimination-and-row-reduction` (A 29, B 8) and
`determinants-of-matrices-over-a-commutative-ring` (A 24, B 6). Batch 9 was
repaired once already: batch 5 needed
`thm-real-square-matrix-invertible-iff-determinant-nonzero` and
`cor-determinant-is-a-polynomial-in-the-matrix-entries`, which batch 9 had
declined `out-of-scope`; both are now built and the dispositions flipped. Check
the ring-versus-field boundary it chose for the invertibility statement — over a
general commutative ring the correct form is invertible iff the determinant is a
UNIT, and the real case batch 5 needs is the specialisation. It was spliced in
at step 3 because Beta-5 correctly refused to scaffold change-of-variables
against a library with no determinant —
`research/frontier-10-step3-decisions.md` §D1. Note that determinants here are
over a **commutative ring**, not a field, so the Leibniz/permutation-sign route
makes `symmetric-groups-and-the-sign-homomorphism` a genuine dependency; check
that page carries enough for it. Batch 5 now depends on batch 9's four
interfaces, so a gap there propagates.

## What changed under you since the review

- **F1 resolved by re-home.** The owner approved moving
  `def-finite-sum-in-a-commutative-monoid` and
  `lem-finite-sum-reindexing-and-fubini` from
  `incidence-algebras-and-mobius-inversion` (203) to
  `rings-subrings-and-integral-domains` (46). Receipt:
  `research/frontier-10-rehomed.json`. Verified before writing: the def's six
  dependencies sit at orders 5.3–24, and the lemma's only late dependency is the
  def itself, which moves with it onto the same destination page, earlier in the
  list. **This fixes batches 1 and 3 (orders 78 and 52) but NOT batch 8**, whose
  page is order 42, still below 46 — batch 8 was told to redirect both edges to
  the order-20 `def-sum-over-a-finite-index-set` instead. Confirm it did.
  Two follow-ups the receipt explicitly does not cover, and which are yours to
  assess: the moved items' own **wikilinks may now point forward**, and their
  **prose may make positional claims the move falsifies**. Both are ordinary
  content repairs. Flag them for step 6; do not fix them now.
- **A gate bug was fixed** (`2764386`): `content-policy`'s `batch-b-leaf-target`
  lacked the same-page exemption `depcheck` and ARCHITECTURE §8 both document,
  and had blocked six legitimate B-page scaffolds. New code
  `batch-b-leaf-forward` covers a same-page edge pointing the wrong way.
- Step 0 re-runs clean over all 9 batches: 563 scoped items, 0 errors.

## Output

Append to `research/frontier-10-alpha-step3-scaffold-review.md` under a clear
`## Re-check (post-repair)` heading — do not rewrite the original verdicts, they
are the record of what was found. Give each of the seven a **`resolved`** or
**`still insufficient`** line, and batch 9's two pairs a `sufficient` /
`insufficient` verdict.

**Step 4 splices nothing until every pair is `resolved` or `sufficient`.** If a
pair is still short, say exactly what is missing; the orchestrator sends it back
again rather than proceeding.

## Boundaries

Unchanged: author nothing, edit no batch file, no item, no page, no
`plan-spec.json`. Record blockers rather than prompting.
