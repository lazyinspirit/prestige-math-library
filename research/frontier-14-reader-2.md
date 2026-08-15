# frontier-14 Step 6a — independent reader 2, batch 2

## Scope and coverage

I opened both dispatched page files and all 24 scoped item files: 19 items on
`ascoli-arzela` and 5 on `ascoli-arzela-examples`. I also opened all 34
out-of-batch item dependencies declared by the manifest, including every
out-of-batch source used by an `[F#]`, `[A#]`, or `[L#]` fact. In total I opened
58 item files. The contracts contain 88 citation rows and 176 boundary rows; I
read the corresponding proof steps and source clauses from disk rather than
treating the clean mechanical screens as verdicts.

All 24 scoped items carry both `provenance.statement` and
`provenance.proof`. The only AI-generated Statements/Constructions are
`cex-boundedness-does-not-replace-pointwise-relative-compactness` and
`ex-compact-affine-interpolation-family`. Neither is a `deps` target. Their
witnesses are directly checkable: the diameter-one infinite discrete space is
bounded and noncompact, and the affine family is a continuous image of a
compact rectangle with the stated endpoint and Lipschitz identities. I found no
truth concern requiring an external counterexample search.

## Findings

### R2-1 — `cor-compact-subsets-of-cx-for-a-proper-metric-target`

- **Exact location:** title, line 4; compare the Statement at line 28.
- **Defect:** the title asserts the compact-family characterisation for
  `C(X,Y)` whenever the target is proper, but it omits the load-bearing
  hypothesis that `X` is a nonempty compact metric space (and also omits the
  stated Choice hypothesis). The proof only invokes the compact-domain result
  `cor-ascoli-arzela-for-compact-metric-domains`.
- **Concrete evidence:** take `X=R`, `Y=R`, and the translated tents
  `f_k(x)=max{1-|x-k|,0}` from
  `ex-translated-tent-functions-converge-in-the-compact-open-topology`. The
  family `{f_k:k in N}` is pointwise bounded and equicontinuous, and it is
  closed in the uniform metric because distinct members have uniform distance
  `1`. It is not compact: it is an infinite `1`-separated subspace. Thus the
  title is false without the compact-domain hypothesis that the Statement
  correctly includes.
- **Severity:** `fatal` — false/overstrong title.

### R2-2 — `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`

- **Exact location:** title, line 4; compare the Statement at line 28.
- **Defect:** the title says that pointwise boundedness, equicontinuity, and a
  proper target alone yield a uniformly convergent subsequence. The Statement
  and proof require a nonempty compact metric domain and Choice.
- **Concrete evidence:** on `X=R`, `Y=R`, the same translated-tent sequence is
  pointwise bounded and equicontinuous. For distinct natural indices `j,k`,
  evaluating at `x=j` gives `f_j(j)=1` and `f_k(j)=0`, so the terms are pairwise
  uniform distance `1`. No subsequence is uniformly Cauchy, hence none
  converges uniformly. This directly refutes the unqualified title while
  leaving the narrower Statement intact.
- **Severity:** `fatal` — false/overstrong title.

### R2-3 — `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain`

- **Exact location:** proof steps 1.2–2.1, lines 44–46; proof-contract
  `nonempty-choice` row at
  `research/frontier-14-batch-2.proof-contracts.json:1007`–1009.
- **Defect:** step 1.2 chooses a pair `(O_f,U_f)` for every `f` in the arbitrary
  compact family `K`, and step 2.1 then uses the resulting indexed family. That
  is an arbitrary family of choices, but the Statement assumes no Choice
  principle and no choice-free construction is supplied. The boundary row
  incorrectly says that the cover is “already-indexed” and that no arbitrary
  choice was made.
- **Why the cited inputs do not close it:** continuity of evaluation gives an
  admissible pair for each fixed `f`; it does not choose such pairs
  simultaneously. A choice-free proof can instead take the set of all
  admissible triples `(f,O,U)`, apply compactness to the cover indexed by those
  triples, and make only the resulting finite selections. That construction is
  absent from the numbered proof.
- **Severity:** `fatal` — unstated choice scope in a numbered proof.

### R2-4 — `cex-boundedness-does-not-replace-pointwise-relative-compactness`

- **Exact location:** Fact `[L3]`, line 36, used in proof step 1.1 at line 44;
  cited item `def-metric-space`, Definition lines 47–55.
- **Defect:** `[L3]` says “The discrete distance is a metric” and cites
  `def-metric-space`. The cited Definition states only that a metric is a
  function satisfying separation, symmetry, and the triangle inequality; it
  nowhere states that this particular discrete-distance construction is a
  metric. Thus `[L3]` attributes a theorem to a definition that does not contain
  it.
- **Evidence:** step 1.1 itself correctly checks the three axioms, so the
  construction is valid. A faithful `[L3]` would state the three defining
  metric axioms, after which step 1.1 supplies the verification; it may not
  present the verification as a cited result.
- **Severity:** `fatal` — inaccurate `[L3]` restatement.

### R2-5 — `prop-compact-open-is-uniform-on-a-compact-metric-domain`

- **Exact location:** proof step 1.2, line 44; Facts `[L2]`–`[L3]`, lines
  34–36.
- **Defect:** step 1.2 claims exact equality between
  `B_X(f,epsilon)={g:d(f(x),g(x))<epsilon for every x}` and the open ball
  defined by `sup_x min{d(f(x),g(x)),1}<epsilon`. Pointwise strict inequalities
  alone do not imply a strict supremum inequality. The step also needs the fact
  that the continuous distance function on nonempty compact `X` attains its
  maximum. Neither `[L2]` nor `[L3]` restates that clause.
- **Why the conclusion remains true:** clause (U3) of the cited
  `def-topology-of-compact-convergence` does supply the missing maximum. Adding
  that faithful clause and observing that its attained value is `<epsilon`
  closes the step immediately.
- **Severity:** `polish` — a sub-30-second missing bridge, not a false
  Statement.

### R2-6 — `cor-real-and-euclidean-vector-valued-ascoli-arzela`

- **Exact location:** Facts/Given line 41; proof steps 1.3 and 3.1, lines 71 and
  75.
- **Defect:** the Given introduces only Choice, `X`, and `n`. Steps 1.3 and 3.1
  then use a family `F`, its equicontinuity, and its pointwise boundedness
  without first fixing such a Euclidean-valued family or opening that local
  hypothesis. The tag `[given]` at step 1.3 therefore names inputs that the
  Given does not contain.
- **Why the conclusion remains true:** prepend “Fix an equicontinuous,
  pointwise-bounded family `F subset C(X,R^n)`” to this subargument. The finite
  cover and bound then follow as written.
- **Severity:** `polish` — the missing local scope is repaired in under 30
  seconds and the Statement already has the right conditional claim.

### R2-7 — `cor-real-and-euclidean-vector-valued-ascoli-arzela`

- **Exact location:** proof-contract `degenerate` row at
  `research/frontier-14-batch-2.proof-contracts.json:1977`–1980.
- **Defect:** the row claims that an “endpoint rectangle of coordinate bounds”
  may collapse. This item has no endpoint rectangle; that object belongs to
  `ex-compact-affine-interpolation-family`. The row is copied/irrelevant prose,
  not the disposition actually determined for this corollary. Its constant-
  family tail does not make the nonexistent rectangle evidence accurate.
- **Severity:** `polish` — inaccurate boundary artifact; no mathematical claim
  in the item depends on it.

### R2-8 — `ex-compact-affine-interpolation-family`

- **Exact location:** proof-contract `zero` row at
  `research/frontier-14-batch-2.proof-contracts.json:2690`–2693; actual proof
  steps 1.3 and 2.2 at item lines 54 and 58.
- **Defect:** the row says step 2.2 treats the collapsed bound `M=0`. Step 2.2 is
  the endpoint-homeomorphism argument; the `M=0` Lipschitz boundary is handled
  in step 1.3. The boundary conclusion is correct, but its purported evidence
  location is false.
- **Severity:** `polish` — inaccurate boundary evidence anchor.

## Per-page verdicts

- **`ascoli-arzela`: FAIL.** Fatal findings R2-1, R2-2, and R2-3; polish
  findings R2-5, R2-6, and R2-7. The other 14 of its 19 scoped items were clean
  on proof steps, dependency fidelity, title/Statement alignment, boundaries,
  and provenance.
- **`ascoli-arzela-examples`: FAIL.** Fatal finding R2-4 and polish finding
  R2-8. The other 3 of its 5 scoped items were clean; the mathematical content
  of `ex-compact-affine-interpolation-family` itself was also clean.

**Items actually opened:** 58 item files total — all 24 scoped items plus 34
out-of-batch dependencies — and both page files.
