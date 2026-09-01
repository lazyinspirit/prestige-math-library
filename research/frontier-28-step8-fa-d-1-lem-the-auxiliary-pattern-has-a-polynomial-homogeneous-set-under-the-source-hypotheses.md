# Final-adjudicator evidence — `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`

Disposition: `repaired`.

## Material reviewed

I independently read the current item and all four cited dependencies, both
pages in its A/B pair, every other item on those pages, the batch-9 manifest,
coverage record, notes, batch-local and merged proof contracts, the Alpha risk
record, the Step-6 reader/refuter/Alpha evidence, both frozen judge rejections,
their exact adjudications and defect-ledger rows, and Alpha's first and second
Step-8 repairs. I also checked the direct downstream use in
`lem-star-or-special-vertex-obstructions-force-wonderfulness`.

## Frozen defects and Alpha repairs

The first frozen rejection was correct: the old fact `[L1]` omitted the
ordinary-pattern bound `(r-1)eta<1`, the `H^+` bound
`(q-1)eta<1/2`, and the indexed-copy/relabeling condition. Alpha's first
repair correctly restored all three requirements, and current step 2.2 proves
the required bounds before invoking the lifting lemma.

The second frozen rejection was also correct: the then-current statement used
`a` in `eta=y^a` without quantifying it. Alpha's second repair correctly added
`a in R` before that definition. For every real `a`, `y^a>0`, so the lifting
lemma's nonnegative-parameter hypothesis is satisfied; in the special branch,
the additional assumption `a>=m>=q>=2` supplies all numerical estimates.

## Independent mathematical review and repair

The repaired proof's two case arguments are sound.

- In the star case, a `K_t` in `J` lifts to the complement of the
  one-subdivision of `K_{1,t}`. Since `F_star` is an induced subgraph of that
  subdivision, its complement is an induced subgraph of the lifted complement,
  contradicting `overline(F)`-freeness. Thus `J` is `K_t`-free, and the
  complete-graph-free Erdős-Hajnal theorem supplies the claimed homogeneous
  set.
- In the special case, let `Gcal={H} union overline(F)`. If an
  `F in overline(F)` of order `r` occurred in `J`, then `r<=m<=a` gives
  `(r-1)y^a <= (r-1)2^{-a} <= (r-1)2^{-r}<1`, so the indexed copy lifts to
  `G`, a contradiction. If `H` occurred, then
  `(q-1)y^a < (q-1)2^{-a} <= (q-1)2^{-q}<1/2`, so it lifts with the outside
  vertex to `H^+`. Because `H^+` is not `overline(F)`-free, this again
  contradicts the ambient hypothesis. Hence `J` is `Gcal`-free and its
  Erdős-Hajnal constant applies.

Independent review found one further load-bearing defect: the statement fixed
`a,y,G`, the blocks, and `J` before asserting the existence of `c`. Read
literally, that allowed an exponent depending on the individual finite `J`,
which is too weak for the downstream wonderfulness proof, where `c` must be
fixed before `a` and the graph instance are chosen. I repaired the quantifier
order. The statement now fixes an applicable obstruction first, chooses a
uniform `c` depending only on `t` in the star case or on
`{H} union overline(F)` in the special case, and only then quantifies the
instance data. I also made `s>=1` explicit so both Erdős-Hajnal applications
are visibly to a nonempty auxiliary graph, and wrote
`c=min(epsilon,1/2)` in both branches to justify `c in (0,1)` without an
implicit exponent-shrinking step.

The directly affected batch-9 contract entries for this lemma and its
wonderfulness consumer were regenerated. The target's empty/zero boundary
rows were synchronized with the new statement, and the 11 batch contracts were
remerged into the run-wide contract. No unrelated mathematical item was
changed.

## Authoritative source verification

Source status: `verified`.

- https://arxiv.org/html/2606.06258v2
  is the cited primary paper version. Section 2.1, Claim 2.1.1 and its proof
  state the same two auxiliary-graph branches: in the star branch the proof
  chooses an exponent from `t` via Ramsey theory; in the special branch it sets
  `a_0` to the maximum order in `{H} union overline(F)`, excludes that entire
  family from `J` by blockwise lifting, and uses the family's Erdős-Hajnal
  constant. This supports both lift thresholds and the required uniformity of
  `c`. The local library deliberately retains its documented narrower,
  directly proved adjacent-pair `H^+` formulation rather than importing the
  paper's broader printed `H^+`/`H^-` wording.
- https://arxiv.org/html/2606.06258v3
  is the authors' current revised primary version. Its Section 2.1 again gives
  Claim 2.1.1 with `a_0=1` in the star branch and `a_0` equal to the maximum
  forbidden-pattern order in the special branch; its proof again chooses `c`
  only from the obstruction data and performs the same induced-pattern lifts.
  This independently confirms that the repaired quantifier order matches the
  intended theorem rather than an instance-by-instance exponent.

## Focused checks

- Item `precheck`: 1 checked, 0 failing.
- Item renderer/frontmatter/KaTeX check: clean.
- Strict batch-9 proof contract: 8/8 checked, 0 errors or warnings.
- Strict run-wide proof contract: 339/339 checked, 0 errors or warnings.
- Batch-9 citation fidelity: 27 citations, no missing quote and no widening
  candidate.
- Batch-9 boundary audit: no contradicted disposition.
- Finite smoke test `induced-complement-commutes`: passed through four
  vertices.
- Reviewed risk report on the target: critical item routed, 0 errors; the
  required Alpha review remains present.
- Batch-9 content policy: 9 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings, ending with
  no cycles, all references resolved, and no draft item on a published page.

Final raw SHA-256 values before recording were
`e39a1a5896ad53fdf4fdb39ebc97d4ecfc1b92aeaa9cfdd0539b0cb614e73377`
for the item,
`ae5f9d2c6af70c51fd215de7e7f496302dc5d077996d0f18a2b5a0ce0edfb133`
for the batch-9 contract, and
`ca40616a3844b8dc3fb381aab14d51596ac2f261ac3ddd4409a4d4b086883141`
for the merged contract.
