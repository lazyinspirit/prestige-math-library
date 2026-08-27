# frontier-20 — Alpha group **c**, step-3 scaffold review

Batches **4, 6, 7** (`covers:` line of the step3-c dispatch). Group rationale in
`research/frontier-20-alpha-groups.json`: the three batches share algebra-heavy
closure questions around group structure, spectra/radicals, and the Artin route
to algebraic closedness, so one Alpha can check the hidden prerequisite and
scope seams once.

| pair | batch | A items | B items | verdict |
|---|---:|---:|---:|---|
| `socles-and-the-onan-scott-landscape` | 4 | 21 | 7 | **sufficient** |
| `hyperbolic-spaces-and-hyperbolic-groups` | 4 | 31 | 7 | **sufficient** with scope decisions recorded |
| `prime-spectra-and-radicals` | 6 | 17 | 6 | **sufficient** with scope decisions recorded |
| `the-fundamental-theorem-of-algebra` | 7 | 13 | 10 | **sufficient** after direct repair (B7-1) and owner scope decisions |

Machine half: `research/frontier-20-alpha-c-step3-verdicts.json`.

Scope receipt: `research/frontier-20-alpha-c-scope-decisions.json`
(`node tools/scope-decisions.mjs check --run frontier-20 --group c` now passes
with **8 current decline(s), 0 error(s)**).

---

## Severity table

| id | pair | class | severity | disposition |
|---|---|---|---|---|
| **B7-1** | fundamental theorem of algebra | foreign `-examples` dependency on a B-page witness | **blocking** | repaired in `research/frontier-20-batch-7.pages.json` |

No other blocking scaffold defect remained after review.

---

## What I checked

- Read each owned manifest, coverage file, and notes file:
  `research/frontier-20-batch-4.{pages.json,coverage.json,notes.md}`,
  `research/frontier-20-batch-6.{pages.json,coverage.json,notes.md}`,
  `research/frontier-20-batch-7.{pages.json,coverage.json,notes.md}`.
- Read the governing design sections and the live plan:
  `research/plan-group-theory-track.md` GT-4 and GT-12,
  `research/plan-commutative-algebra-track.md` CA-3,
  `research/plan-algebra-track.md` II.8 X-1,
  and `research/plan-spec.json`.
- Ran `node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination`
  → `42` harvested results, `0` errors, `0` warnings.
- Ran `node tools/coverage-checklist.mjs research/frontier-20-batch-6.coverage.json --require-destination`
  → `36` harvested results, `0` errors, `0` warnings.
- Ran `node tools/coverage-checklist.mjs research/frontier-20-batch-7.coverage.json --require-destination`
  → `27` harvested results, `0` errors, `0` warnings.
- Ran `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-4.pages.json`
  → `66` scoped items, `0` errors, `0` warnings.
- Ran `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-6.pages.json`
  → `23` scoped items, `0` errors, `0` warnings.
- Ran `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-7.pages.json`
  after the repair → `23` scoped items, `0` errors, `0` warnings.
- Ran `node tools/scope-decisions.mjs refresh --run frontier-20 --group c`,
  resolved all 8 rows, then ran
  `node tools/scope-decisions.mjs check --run frontier-20 --group c`
  → `8` current declines, `0` errors.
- Ran a focused post-repair dependency scan over the three manifests on
  Wednesday, August 26, 2026: no remaining external forward-page dependencies
  and no remaining dependencies on foreign B-page items.

---

## Batch 4 — `socles-and-the-onan-scott-landscape`

This pair is sufficient. The A-page route matches GT-4 as written in
`research/plan-group-theory-track.md:867-959`: minimal normal subgroups,
characteristic simplicity, socle decomposition, primitive-group constraints, the
five-type dictionary, and then a bounded O'Nan-Scott survey that never becomes a
dependency spine. The B page is real rather than decorative, with concrete
affine, almost-simple, diagonal, product-action, and two-regular-minimal-normal
witnesses.

The source stack is sufficient for authoring. Humphreys and Milne cover the
local socle structure, while Soicher supplies the exact open survey wording for
the five-type convention map, the “one or two minimal normals” claim, and the
finite 2-transitive reduction. That asymmetry is acceptable here because the
classification and its follow-on remarks are deliberately bounded survey items,
not locally proved load-bearing theorems. I found no missing lemma, backward
prerequisite, or dishonest deferment on this pair.

**Verdict:** sufficient.

---

## Batch 4 — `hyperbolic-spaces-and-hyperbolic-groups`

This pair is sufficient. The manifest tracks GT-12 in
`research/plan-group-theory-track.md:1665-1720` closely: equivalent
hyperbolicity criteria, Morse stability, quasi-isometry invariance, hyperbolic
groups, Dehn presentations and the word problem, elementary subgroup structure,
and the proper-geodesic boundary package. The two declines in the coverage file
are exactly the right ones: quasi-convexity is a later subgroup branch, and the
conjugacy-problem half of Bowditch's §2.3 is outside the scoped algorithmic
closure, which stops at the word problem.

The small-cancellation bridge is also scoped honestly. It stays present as the
design's promised GT-8 agreement item, but it is not used as a hidden later
spine. The “virtually cyclic” terminology remains an authoring obligation rather
than a scaffold gap: the notes correctly flag that no earlier published library
definition exists, and the current manifest leaves that notion to be introduced
locally in the authored statements rather than by a fake backward citation.

**Verdict:** sufficient, with the two scope decisions standing as recorded.

---

## Batch 6 — `prime-spectra-and-radicals`

This pair is sufficient. The page stays within the CA-3 algebraic boundary in
`research/plan-commutative-algebra-track.md:386-437`: `Spec` is treated only as
the set of prime ideals, the page proves the algebraic `V(I)` and `D(f)`
identities, and it explicitly does not introduce topology or the later
dimension-theorem layer. The three declined rows are therefore correctly
out-of-scope: one is the first topological Noetherianity statement, one is the
first dimension theorem, and one is the stronger Noetherian finite-intersection
theorem not listed in the CA-3 item table.

The extra definition `def-minimal-prime-over-an-ideal` does not make the page
insufficient. The notes justify why the term is needed, and the included
Noetherian minimal-primes rows from Milne and Stacks already supply enough
source context for an author to state that notion cleanly without inventing a
new branch. No undeclared prerequisite or false scope decline remained here.

**Verdict:** sufficient, with the three scope decisions standing as recorded.

---

## Batch 7 — `the-fundamental-theorem-of-algebra`

This pair is sufficient after one direct repair. The A-page route matches
`research/plan-algebra-track.md:4057-4144`: isolate the odd-degree analytic
input, prove the quadratic-extension lemma and the algebraically-closed/splitting
equivalence, run the five-step Artin proof, then record the algebraic-closure,
factorisation, and multiplicity consequences. The B page also matches the live
II.8 scope: the two factorisation examples, the odd-degree witness, the
insoluble quintic, the four false statements, and the agreement remark with a
forward reference but no dependency edge.

### B7-1 — foreign B-page dependency on `x^5-2` witness · repaired

`fs-every-quintic-over-q-is-insoluble-by-radicals` originally depended on the
published example `ex-x-fifth-minus-two-is-solvable-by-radicals`, which is homed
on the foreign page
`solvability-by-radicals-and-kummer-theory-examples`. That violates the examples
page leaf rule: an item homed only on another `-examples` page cannot be a
dependency target here.

I repaired `research/frontier-20-batch-7.pages.json` directly by

- rewriting the strategy to use a local radical-extension witness
  `Q(zeta_5, root(5,2))` for `x^5-2`, and
- replacing the forbidden dependency with the earlier A-page definition
  `def-solvable-by-radicals`.

After that repair, the manifest has no remaining foreign B-page dependency and
the pair clears the focused graph check and `content-policy`.

The two Artin-Schreier deferrals are still correctly `owner-decision`. II.8.c in
`research/plan-algebra-track.md:4100-4106` explicitly marks that converse as
later real-closed/formally-real field theory, and on Wednesday, August 26, 2026,
the live `research/plan-spec.json` still had no exact destination page id for
that block.

**Verdict:** sufficient after direct repair, with the two owner scope decisions
recorded.

---

## Final verdicts

All four owned A pages are sufficient for authoring. No split is owed: the A-page
sizes are `21`, `31`, `17`, and `13`, all below the step-3 ceiling.
