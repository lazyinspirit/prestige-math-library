## Group B of run `frontier-13` — linear algebra and generating functions

### Your batches

| batch | A pages |
|---|---|
| 3 | `diagonalisation-and-the-minimal-polynomial` (88) · `inner-product-spaces-and-orthogonality` (94) |
| 7 | `linear-recurrences-and-rational-generating-functions` (195) |

Three A/B pairs, six pages. Read `research/frontier-13-batch-{3,7}.*` and the
task files `research/frontier-13-beta-{3,7}.task.md` that those Betas received.
**Do not open batches 1, 2, 4, 5 or 6** — groups A and C own them and are working
concurrently.

You are a group Alpha, **not** the lead. You run step 3 and later steps 6a/6b for
your two batches, write namespaced reports, and hand them to the orchestrator.
Step 4 propagation, step 6c cross-batch/cross-level citation audit and step 8
judge adjudication belong to group A (`briefs/alpha.md` §"Group Alpha or lead
Alpha"). If you find something that bears on another group's batch, **record it
for the orchestrator** rather than acting on it.

### The named challenges for your batches

**Cayley–Hamilton is where a bogus proof hides.** The classic error is
"substitute `A` into `det(xI − A)`", which is not a proof. Batch 3's task file
required a correct route — the adjugate identity over `F[x]`, or a
density/algebraic-closure argument **stated with its hypotheses intact** — and
required the notes to record which route and the source for it. Check both the
route and the record.

**The minimal polynomial's existence is why `euclidean-domains-pids-and-unique-factorisation`
is a prerequisite.** The scaffold should *use* that dependency to get the monic
generator of the annihilator ideal, not assert the generator exists. Check the
proof obligation is actually discharged against a cited item.

**Order 94's inner-product definition is load-bearing for a track that does not
exist yet.** `research/plan-algebra-track-expansion.md` line ~445 records that a
later representation-theory page pins **the inner product on class functions** to
*this* page's definition. So the definition must be the standard one —
conjugate-symmetric, positive definite — and not a variant. Also check the
**linear-in-which-argument convention is recorded as a convention disagreement**
in the notes rather than silently resolved; sources genuinely differ.

**Order 94 must not reach into analysis.** Completeness, Hilbert spaces and
infinite orthonormal bases belong to the functional-analysis track. The design
records that this page names no analysis page above it. A scaffold that drifts
there is a finding.

**Neither pair in batch 3 may cite the other**, and the place that bites is the
**spectral theorem**, which wants both and is a separate downstream page
(`the-spectral-theorem-and-singular-value-decomposition`) that is *not* in this
run. Check neither pair anticipated it.

**Batch 7 must mint the cofactor/adjugate machinery itself.** The CB-5 design
records that the transfer-matrix theorem needs it and that
`determinants-of-matrices-over-a-commutative-ring` does not have it, and it
instructs: *decide once, and record the decision in the batch notes.* Verify the
notes contain that decision and that the Beta actually opened the determinants
page on disk rather than assuming.

**Batch 7's central equivalence must be proved by the dimension count, not by
partial fractions.** "Rational ⟺ linear recurrence" comes from a dimension count
of four vector spaces; the partial-fraction closed form is a **separate**
consequence. Only the first is convention-free. If the scaffold collapses them
into one item, that is depth loss and a finding.

Three further CB-5 traps to check: the splitting field is **named in the
Statement** (not assumed to be ℝ or ℂ); the reciprocal-root convention
`Q(x) = ∏(1 − λ_i x)` is fixed in a `rem-` and cited everywhere; and the
eigenvalue form of the transfer-matrix result carries its algebraic-closure
hypothesis while the cofactor form stays primary.

**Splitting:** batch 7 is a live split candidate — the transfer-matrix
enrichment plus the cofactor machinery it must mint. Rule on it by name.
