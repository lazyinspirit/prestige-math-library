# Step 7 adjudication — group **f**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **10**, **12**, **16**: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-42-coxeter-32-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `parabolic-subgroups-and-double-coset-geometry` | A | coxeter-groups | 1736 | `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections` |
| 10 | `parabolic-subgroups-and-double-coset-geometry-examples` | B | coxeter-groups | 1737 | `parabolic-subgroups-and-double-coset-geometry` |
| 12 | `bruhat-subword-order-and-lifting` | A | coxeter-groups | 1740 | `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry` |
| 12 | `bruhat-subword-order-and-lifting-examples` | B | coxeter-groups | 1741 | `bruhat-subword-order-and-lifting` |
| 16 | `bruhat-interval-labels-shellings-and-mobius-functions` | A | coxeter-groups | 1748 | `bruhat-subword-order-and-lifting`, `finite-lattice-projections-and-coxeter-chain-labels` |
| 16 | `bruhat-interval-labels-shellings-and-mobius-functions-examples` | B | coxeter-groups | 1749 | `bruhat-interval-labels-shellings-and-mobius-functions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `parabolic-subgroups-and-double-coset-geometry` — Parabolic Subgroups and Double Coset Geometry (5 item(s))

- `def-cg-parabolic-quotient-and-two-sided-minima` · definition — Standard parabolic subgroups, descent-free one- and two-sided representatives, parabolic and reflection subgroups
- `thm-cg-parabolic-intersections-and-coset-factorization` · theorem — Intersections of standard parabolics, the parabolic root subsystem, and global minimality of coset representatives
- `lem-cg-double-coset-descent-reduction-and-minimality` · lemma — Descent reduction, minimum-length elements, and the additive factorization in a double coset
- `lem-cg-double-coset-intersection-parabolic` · lemma — The parabolic intersection W_I cap dW_Jd inverse for d in ^IW^J
- `thm-cg-double-coset-unique-minimum-and-normal-form` · theorem — Unique minimal double coset representatives and the additive normal form u-d-v

### `parabolic-subgroups-and-double-coset-geometry-examples` — Parabolic Subgroups and Double Coset Geometry — Examples (3 item(s))

- `ex-cg-s4-coset-minima-and-double-coset-decomposition` · example — Left and right coset minima and a double coset decomposition in S4
- `ex-cg-infinite-dihedral-parabolic-double-cosets` · example — Parabolic double cosets of the infinite dihedral group
- `ex-cg-reflection-subgroups-parabolic-and-not` · example — Reflection subgroups that are parabolic but not standard, and one that is not parabolic

### `bruhat-subword-order-and-lifting` — Bruhat Subword Order and Lifting (6 item(s))

- `def-cg-bruhat-order-by-reflection-chains` · definition — The Bruhat graph by length-increasing reflection chains, the Bruhat order, inversion symmetry, and reflection parity
- `lem-cg-bruhat-right-exchange-and-augmentation` · lemma — Right-handed strong exchange and the augmentation step for reduced subwords
- `thm-cg-bruhat-subword-characterization` · theorem — The subword characterization of Bruhat order and its independence of the reduced expression
- `lem-cg-bruhat-chain-refinement-and-gradedness` · lemma — Finiteness of Bruhat intervals, the chain refinement property, and grading by length
- `thm-cg-bruhat-lifting-and-cover-criterion` · theorem — The lifting property in all four descent cases, the cover criterion, reflection deletion, and directedness
- `thm-cg-bruhat-parabolic-projection-and-quotients` · theorem — The minimal-coset projection onto W^I is order-preserving, and Bruhat order on the parabolic quotient W^I

### `bruhat-subword-order-and-lifting-examples` — Bruhat Subword Order and Lifting — Examples (4 item(s))

- `ex-cg-s4-subwords-and-covers` · example — Subwords, reflection deletions and the covers of the longest element in S4
- `ex-cg-s4-lifting-squares` · example — The four lifting squares in S4
- `ex-cg-s4-bruhat-versus-weak-comparability` · example — Bruhat versus weak comparability in S4
- `ex-cg-s4-subword-descriptions-agree` · example — Two reduced expressions of one element whose subword descriptions agree

### `bruhat-interval-labels-shellings-and-mobius-functions` — Bruhat Interval Labels, Shellings, and Mobius Functions (4 item(s))

- `def-cg-deletion-chain-labels-and-shelling` · definition — Deleted-position labels from a fixed reduced expression, the lexicographic shelling criterion, and Mobius data
- `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` · lemma — At most one increasing chain, rank-two diamonds, the lexicographically first chain, and the local descent replacement
- `thm-cg-bruhat-deletion-label-shelling` · theorem — Deletion-labeled Bruhat intervals are lexicographically shellable, with the explicit earlier/later chain comparison
- `thm-cg-bruhat-eulerian-intervals-and-mobius` · theorem — Bruhat intervals are Eulerian: parity balance of the elements, and the Mobius function of a full interval

### `bruhat-interval-labels-shellings-and-mobius-functions-examples` — Bruhat Interval Labels, Shellings, and Mobius Functions - Examples (3 item(s))

- `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` · example — All maximal chains of a rank-three interval in S4, their deleted-position labels, and the lexicographically first chain
- `ex-cg-s4-rank-three-interval-mobius-from-recurrence` · example — The Mobius value of the rank-three interval [e,c] in S4 from the recurrence, with the parity and falling-chain checks
- `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` · counterexample — A parabolic quotient interval of S4 whose Mobius value is 0, so the Eulerian sign formula does not extend to quotients

## Your seams

Your pages depend on another group's:

- `parabolic-subgroups-and-double-coset-geometry` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)
- `parabolic-subgroups-and-double-coset-geometry` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `bruhat-subword-order-and-lifting` requires `canonical-roots-signs-and-faithful-reflections` (group b, batch 7)
- `bruhat-interval-labels-shellings-and-mobius-functions` requires `finite-lattice-projections-and-coxeter-chain-labels` (group d, batch 5)

Another group's pages depend on yours:

- `spherical-parabolic-cosets-and-the-davis-complex` (group d) requires your `parabolic-subgroups-and-double-coset-geometry`
- `coxeter-descents-poincare-polynomials-and-growth` (group h) requires your `parabolic-subgroups-and-double-coset-geometry`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `parabolic-subgroups-and-double-coset-geometry`
- `weak-order-inversions-and-lattice-operations` (group k) requires your `parabolic-subgroups-and-double-coset-geometry`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-42-coxeter-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-42-coxeter-32`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
