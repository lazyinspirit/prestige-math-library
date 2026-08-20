# Frontier-16 independent reader 4 — Step 6a

Scope: both pages in research/frontier-16-batch-4.pages.json, comprising 25
in-flight items. I opened every scoped item in full, every numbered proof step,
every Fact citation, both page files, the batch notes, the proof contract, and
the relevant Definition/Statement/Example section of each of the 92 unique Fact
targets. I did not judge, publish, edit research/plan-spec.json, or edit a
published item.

Findings: 13 fatal, 7 nonfatal, and 2 polish. All were repaired in the assigned
batch; no scoped mathematical concern remains open.

## Fatal findings

### R4-1 — ex-weierstrass-function-with-one-half-and-fifteen

- **Location:** Example and Verification step 2.1, Fact [L4].
- **Defect:** The Example asserted that the displayed series converges uniformly,
  but [L4] cited thm-classical-weierstrass-function-nowhere-differentiable,
  whose Statement concludes only continuity and nowhere differentiability under
  the strict parameter condition. It does not state uniform convergence.
- **Evidence:** The separate on-disk theorem
  thm-classical-weierstrass-series-converges-uniformly states that the defining
  series converges uniformly on \(\mathbb R\).
- **Severity:** **fatal** — an unlicensed inference left part of the Example
  unsupported.
- **Repair:** Added that theorem to deps, added faithful Fact [L5], and split
  step 2.1 so [L5] licenses uniform convergence while [L4] licenses continuity
  and nowhere differentiability. Updated the proof contract.

### R4-2 — lem-finite-sine-harmonic-sums

- **Location:** Proof step 1.1, originally Facts [L1], [L2], [L3], [L5].
- **Defect:** Telescoping \((1-e^{ix})S_N\) requires
  \(e^{i(n+1)x}=e^{inx}e^{ix}\). Fact [L1]'s cited corollary gives Euler's
  Cartesian formula and modulus, but its Statement does not assert the
  exponential addition law.
- **Evidence:** The on-disk Statement of
  thm-complex-exponential-addition-and-real-extension says
  \(\exp(z+w)=\exp z\exp w\) for all complex \(z,w\).
- **Severity:** **fatal** — the cited inputs did not license the telescoping
  identity.
- **Repair:** Added the exact exponential-addition dependency and Fact [L7],
  cited it in step 1.1, and updated the proof contract.

### R4-3 — cor-x-sine-of-one-over-x-is-not-differentiable-at-zero

- **Location:** Fact [L4], used in step 1.3.
- **Defect:** [L4] said that reciprocals of positive natural numbers tend to
  zero. The cited cor-archimedean-reciprocal states only that for each
  \(\varepsilon>0\) there exists a positive integer \(N\) with
  \(1/N<\varepsilon\); it does not state the eventual quantifier required by
  sequence convergence.
- **Severity:** **fatal** — the Fact widened the cited conclusion.
- **Repair:** Replaced [L4] by the exact existential clause. Step 1.3 already
  carries [algebra], which supplies the elementary monotonicity passage from
  one \(N\) to all later denominators. Updated the contract citation record.

### R4-4 — ex-x-squared-sine-of-one-over-x-squared

- **Location:** Fact [L6], used in step 2.1.
- **Defect:** [L6] claimed that cosine equals \(1\) at every multiple of
  \(2\pi\), but its two cited Statements supplied periodicity, sine zeros, and
  quarter-turn shifts without supplying the base value \(\cos 0=1\).
- **Evidence:** thm-sine-and-cosine-derivatives states
  \(\sin0=0\) and \(\cos0=1\).
- **Severity:** **fatal** — the Fact's cited sources did not establish its full
  conclusion.
- **Repair:** Added the existing derivative theorem as a third citation in [L6]
  and recorded the exact base-value clause in the proof contract.

### R4-5 — ex-x-squared-sine-of-one-over-x-squared

- **Location:** Fact [L8], used in step 3.1.
- **Defect:** [L8] widened cor-archimedean-reciprocal from its existential
  reciprocal bound to convergence of the whole reciprocal sequence.
- **Severity:** **fatal** — inaccurate citation quantifiers.
- **Repair:** Restated the source's exact \(\varepsilon\)-\(N\) conclusion;
  step 3.1's existing algebra supplies the eventual monotonicity argument.

### R4-6 — ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence

- **Location:** Fact [L5], used in steps 1.3 and 4.1.
- **Defect:** [L5] widened cor-archimedean-reciprocal to a sequence-limit
  statement not present in the cited Statement.
- **Severity:** **fatal** — inaccurate citation quantifiers.
- **Repair:** Replaced it by the exact reciprocal Archimedean clause; the two
  proof steps already contain the elementary index comparison.

### R4-7 — ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence

- **Location:** Fact [L7] and Verification step 2.1.
- **Defect:** [L7] claimed compactness for \([0,\pi]\) with its metric while
  citing Heine--Borel in the real open-cover sense and the definition of the
  usual metric. Neither cited item identifies real compactness with metric
  compactness, a hypothesis of the cited equicontinuity definition.
- **Evidence:** Claim 5 of lem-real-and-metric-notions-agree gives exactly that
  equivalence.
- **Severity:** **fatal** — a required compact-metric hypothesis was not
  licensed.
- **Repair:** Added the dictionary lemma to deps and [L7], cited [L7] in step
  2.1, and updated the contract with the complete equivalence clause.

### R4-8 — lem-topologists-sine-curve-is-connected

- **Location:** Fact [L6], used in step 1.2.
- **Defect:** The Fact again restated the reciprocal Archimedean corollary as
  convergence of reciprocal naturals instead of its stated existential bound.
- **Severity:** **fatal** — inaccurate citation quantifiers.
- **Repair:** Quoted cofinality and the exact reciprocal bound. The explicit
  affine denominators and [algebra] in step 1.2 give convergence of \(r_j\).

### R4-9 — cex-topologists-sine-curve-connected-not-path-connected

- **Location:** Fact [L4] and Counterexample step 2.1.
- **Defect:** Compactness of \([0,1]\) was cited in the real open-cover sense
  and then fed directly to a theorem about compact metric spaces.
- **Evidence:** Claim 5 of lem-real-and-metric-notions-agree, already an item
  dependency, is the missing bridge.
- **Severity:** **fatal** — an application hypothesis was not licensed by the
  cited Fact.
- **Repair:** Added the exact real/metric compactness equivalence to [L4] and
  its contract citation.

### R4-10 — cex-topologists-sine-curve-connected-not-path-connected

- **Location:** Fact [L7], used in step 3.1.
- **Defect:** [L7] attributed the already-derived assertion that arbitrarily
  small peak and trough abscissae exist to three dependencies. The
  Archimedean source states only a single reciprocal bound, not that derived
  oscillatory conclusion.
- **Severity:** **fatal** — the Fact replaced the cited clauses by a stronger
  constructed consequence.
- **Repair:** [L7] now states the exact quarter-turn/period values and exact
  reciprocal bound; step 3.1 performs the construction with its existing
  [choose, algebra] inputs.

### R4-11 — ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces

- **Location:** Fact [L8], used in step 1.4.
- **Defect:** [L8] widened the reciprocal Archimedean corollary to a full
  sequence-limit claim.
- **Severity:** **fatal** — inaccurate citation quantifiers.
- **Repair:** Replaced it by the exact \(\varepsilon\)-\(N\) clause; the
  explicit sequence and algebra in step 1.4 supply the limit.

### R4-12 — ex-sine-harmonic-series-pointwise-not-uniform

- **Location:** Fact [L6], used in step 1.2.
- **Defect:** [L6] attributed positivity, monotonicity, and convergence of the
  weights \(1/(k+1)\) to cor-archimedean-reciprocal, whose Statement gives
  only one reciprocal below each positive tolerance.
- **Severity:** **fatal** — a materially wider restatement.
- **Repair:** [L6] now quotes only the exact source clause. Positivity,
  monotonicity, and the eventual estimate are elementary algebra in step 1.2.

### R4-13 — fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph

- **Location:** Fact [L6], used in Refutation step 1.3.
- **Defect:** [L6] widened the reciprocal Archimedean corollary to convergence
  of the reciprocal sequence.
- **Severity:** **fatal** — inaccurate citation quantifiers.
- **Repair:** Replaced the Fact by the exact existential bound; step 1.3's
  explicit formula and algebra supply monotone convergence.

## Nonfatal findings and polish

### R4-14 — lem-weierstrass-low-frequency-difference-quotient-bound

- **Location:** Proof step 2.1.
- **Defect:** The equality replacing \(|x_m-x_0|\) by \(x_m-x_0\), and the
  replacement of \(|\pi|\) by \(\pi\), did not name the positivity inputs.
- **Severity:** **nonfatal** — both are immediate bridges under the 30-second
  rule.
- **Repair:** Cited [L2] for \(x_m-x_0>0\), added a faithful [L6] for
  \(\pi>0\), added its two dependencies, and updated the contract.

### R4-15 — lem-weierstrass-tail-difference-quotient-bound

- **Location:** Proof step 1.2.
- **Defect:** Passing from \(|z_m|\le1/2\) to
  \(|z_m|\pi\le\pi/2\) silently used \(\pi>0\).
- **Severity:** **nonfatal** — an immediate sign bridge.
- **Repair:** Added faithful Fact [L7] and cited it in step 1.2; updated deps
  and the proof contract.

### R4-16 — ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence

- **Location:** Verification step 1.1.
- **Defect:** Continuity of \(f_k(x)=\sin((k+1)x)\) was attributed to sine's
  continuity alone, without the affine-map and composition facts.
- **Severity:** **nonfatal** — a competent reader closes the composition bridge
  immediately.
- **Repair:** Added faithful Fact [L8], the two dependencies, and the contract
  entries.

### R4-17 — fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence

- **Location:** Refutation step 1.2.
- **Defect:** The cited Example established uniform boundedness and failure of
  subsequential uniform convergence, but the step also needed the individual
  functions to be continuous and the interval to be compact.
- **Severity:** **nonfatal** — both bridges are routine but were absent from the
  step inputs.
- **Repair:** Added exact continuity/composition and compact-interval Facts
  [L2]--[L3], their dependencies, and contract entries.

### R4-18 — cex-topologists-sine-curve-connected-not-path-connected

- **Location:** Counterexample steps 1.2 and 3.1.
- **Defect:** Step 1.2 used continuity of composites after citing only
  continuity of the projections; step 3.1 applied the connected-domain IVT to
  \([s,r]\) without an explicit connectedness input.
- **Severity:** **nonfatal** — both are standard sub-30-second bridges.
- **Repair:** Added Facts [L10]--[L11] for interval connectedness and
  composition, cited them in the steps, added the dependencies, and updated the
  contract.

### R4-19 — fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph

- **Location:** Refutation step 4.1.
- **Defect:** The rectifiability theorem applies to a path, but the graph map
  had not explicitly been shown continuous as a map into \(\mathbb R^2\).
- **Severity:** **nonfatal** — a direct product-continuity bridge.
- **Repair:** Added Fact [L10] for identity and product continuity, cited it in
  step 4.1, added the product-universal-property dependency, and updated the
  contract.

### R4-20 — ex-sine-period-arc-length-as-a-complete-elliptic-integral

- **Location:** Verification step 1.1.
- **Defect:** The inequality
  \(1-k^2\sin^2t\ge1-k^2\) used \(\sin^2t\le1\) without citing [L5].
- **Severity:** **nonfatal** — an immediate 30-second bridge.
- **Repair:** Cited [L5] in the step and added the use to the contract.

### R4-21 — thm-riemann-lebesgue-lemma-for-continuous-functions

- **Location:** Proof step 4.1.
- **Defect:** The final conversion of the eventual estimates into sequence
  convergence did not state the library's rational-tolerance limit definition.
- **Severity:** **polish** — the definition closes the step immediately.
- **Repair:** Added faithful Fact [L12] from def-real-limit, cited it in step
  4.1, and updated the contract.

### R4-22 — ex-x-squared-sine-of-one-over-x-squared

- **Location:** Verification step 1.1.
- **Defect:** The step computed the difference quotient at zero without naming
  the derivative definition already declared in deps.
- **Severity:** **polish** — the missing definition is immediate.
- **Repair:** Added faithful Fact [L11], cited it in step 1.1, and updated the
  contract.

## Boundary worksheet and contract corrections

No boundary instantiation produced a counterexample to a scoped Statement.
I corrected contract-only inaccuracies rather than leaving them as boilerplate:

- lem-weierstrass-probe-points: replaced repeated and wrong step anchors for
  positivity and the half-open endpoint calculation.
- lem-weierstrass-tail-difference-quotient-bound: anchored retention of the
  \(n=m\) term to step 2.1 rather than step 1.2.
- lem-finite-sine-harmonic-sums: anchored period multiples to the periodic
  branch, not the nonperiodic quotient-formula branch.
- ex-x-squared-sine-of-one-over-x-squared: corrected the square-root citation
  from [L6] to [L7].
- ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence and its
  false-statement consequence: corrected the zero-based first index
  (\(k=0\), frequency \(k+1=1\)).
- ex-sine-period-arc-length-as-a-complete-elliptic-integral: replaced repeated
  generated step strings by actual dispositions for \(k=0,1\), the integration
  endpoints, and the unique square-root choice.
- lem-topologists-sine-curve-is-connected,
  cex-topologists-sine-curve-connected-not-path-connected,
  ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces, and
  ex-sine-harmonic-series-pointwise-not-uniform: recorded the direction
  actually used from each cited iff and stated that the converse was checked
  but unused.

## Provenance and source pass

All 25 scoped mathematical-content items carry separate
provenance.statement and provenance.proof fields. All 100 unique declared
dependency targets carry component provenance, and no dependency target has an
ai-generated Statement/Construction.

The sole generated construction is
ex-weierstrass-function-with-one-half-and-fifteen. It is non-load-bearing.
I independently recomputed \(a=1/2\), odd \(b=15\), and
\(\pi<4\), hence \(1+3\pi/2<7<15/2=ab\); no counterexample arises.

I independently checked the sole external fallback against Hall's cited
Special Functions, Example 3.1.2. The source states that the second-kind
elliptic integral is not elementary except at the degenerate moduli \(k=0,1\),
which supports the in-scope \(0<k<1\) record. The source URL also passes the
repository's content-hash fetch check. No published dependency was edited.

## Changes made

No item was added or deleted, so the batch page manifest's item lists are
unchanged. No page prose changed. Material changes were confined to the scoped
items named in findings R4-1 through R4-22 and
research/frontier-16-batch-4.proof-contracts.json. Newly declared item
dependencies are:

- lem-finite-sine-harmonic-sums:
  thm-complex-exponential-addition-and-real-extension;
- ex-weierstrass-function-with-one-half-and-fifteen:
  thm-classical-weierstrass-series-converges-uniformly;
- the two Weierstrass bound lemmas: the on-disk \(\pi\)-definition and
  positive-zero theorem;
- ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence:
  lem-real-and-metric-notions-agree,
  thm-algebra-of-continuous-functions, and
  thm-composition-of-continuous-functions;
- its false-statement consequence: the exact continuity/composition,
  Heine--Borel, and \(\pi\)-positivity dependencies recorded in its Facts;
- cex-topologists-sine-curve-connected-not-path-connected:
  cor-connected-subsets-of-the-line and
  lem-continuity-is-local-and-pastes;
- fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph:
  thm-product-universal-property.

No scoped item carried verification.judge, so there was no stale judge block
to delete.

## Gate record

- proof-contract --strict: 22/22 items, 0 errors, 0 warnings.
- citation-fidelity --fail-on-missing-quote: 219 citations; no missing quote
  and no detector widening candidate.
- boundary-audit --fail-on-contradicted --fail-on-template: 176 rows; no
  contradicted disposition and no template cluster.
- finite-smoke: no registered finite check applies; this is not mathematical
  evidence.
- reflow on all 15 changed proof-bearing items: unchanged; the files were
  already in canonical line form.
- scoped precheck: 15/15 changed proof-bearing items pass.
- content-policy: 25 scoped items, 0 errors, 0 warnings.
- coverage-checklist: one A page, 36 harvested results, 0 errors, 0 warnings.
- source-fetch-check: 12/12 sources fetch-verified.
- rendercheck: all 15 changed items and both page files clean under YAML and
  KaTeX parsing.
- prosecheck: the same 17 files, 0 errors, 0 warnings.
- risk-report: completed with 0 errors; the high/critical dispositions remain
  Alpha's Step-6b duty.
- depcheck: globally clean for hard errors and no batch-4 warning.
- extcheck: clean; the recorded-not-proved Hall remark is well formed.
- validate-plan: clean for hard errors.
- depsource: 0 unresolved dependencies.
- citecheck: no batch-4 warning.
- fwdcheck: the global invocation is red only for the concurrently authored
  cor-simple-polygon-triangulation-has-n-minus-two-triangles and its
  areas/plane-graphs page cycle. Neither file or page is in batch 4, and I did
  not edit it.

## Per-page verdict

- trigonometric-and-oscillatory-examples-in-one-variable: **repaired; clean
  after the final gates recorded above**. Fatal finding R4-2 and the
  Weierstrass-bound citation issues were repaired. The A-page summary has
  exactly two prose paragraphs (60 and 76 words), and its title, summary,
  Statements, proofs, and Remarks agree after repair.
- trigonometric-and-oscillatory-examples-in-one-variable-examples:
  **repaired; clean after the final gates recorded above**. Fatal findings
  R4-1 and R4-3 through R4-13 were repaired, along with the nonfatal bridges.
  The B page has no authored body.

**Scoped items opened in full: 25 of 25. Unique Fact targets opened at their
relevant source section: 92. Exceptions: none.**
