# frontier-16 — independent reader 7 report

## Scope and coverage

I independently opened both scoped page files and all 30/30 scoped items in
research/frontier-16-batch-7.pages.json: 22 A-page items and 8 companion-page
items. I read every numbered step in the 23 proof-bearing items, every direct
[L#] citation against the cited item on disk, all title/Statement pairs,
component provenance, and all 184 proof-contract boundary rows. I also opened
all 94 distinct dependency items named by the final scoped frontmatter; 80 are
external to the batch and 14 are earlier items inside it.

No scoped item depends on an ai-generated Statement or construction. The three
AI-generated scoped constructions are leaves:
cor-nonconstant-entire-function-has-dense-image,
ex-holomorphy-of-integral-of-t-to-z, and
cex-powers-locally-uniform-not-uniform-on-closed-disc. Direct
counterexample checks confirmed the first by the omitted-disc reciprocal
argument, the second by the endpoint bound $|t^z|\le t$ on
$\operatorname{Re}z>1$, and the third by compact maxima below one together
with the boundary value at $z=1$.

## Fatal findings

### R7-1 — cor-holomorphic-functions-are-real-analytic-and-smooth

- **Location:** [L2], proof steps 2.1 and 3.1, dependency metadata, and the
  corresponding proof-contract rows.
- **Defect:** [L2] restated
  lem-binomial-theorem-over-complex-numbers as
  $\sum_{q\le n}\binom nq z^{n-q}w^q$, whereas the cited Statement on disk is
  $\sum_{k\le n}\binom nk z^kw^{n-k}$. The old version silently used binomial
  symmetry, and step 3.1 also used the factorial formula for the coefficient
  without an explicit input.
- **Why fatal:** this was an inaccurate dependency restatement; the omitted
  symmetry/closed formula was not part of the cited clause.
- **Repair:** [L2] now preserves the source indexing exactly. I added the
  published thm-binomial-closed-formula as [L9], used it explicitly in step
  3.1, and synchronized the item, manifest, and proof contract.
- **Severity:** fatal.

### R7-2 — thm-entire-polynomial-growth-is-polynomial

- **Location:** [L1], proof step 1.1, and its proof-contract citation.
- **Defect:** [L1] quoted the coefficient estimate without the source
  hypotheses that $f$ be holomorphic on a containing disc and that
  $0<r<R_0$.
- **Why fatal:** as written, the fact claimed a coefficient bound from a circle
  bound alone. The cited corollary does not license that statement.
- **Repair:** [L1] now carries the full holomorphy and radius hypotheses, and
  step 1.1 explicitly applies it with outer radius $R+1$. The contract now
  records the full source clause.
- **Severity:** fatal.

### R7-3 — thm-weierstrass-convergence-holomorphic-functions

- **Location:** [L5] and contract citations [L5] and [L8].
- **Defect:** [L5] omitted the hypotheses that the difference function be
  holomorphic on a larger disc and that $0\le r<R<S$. Separately, the contract
  quote for [L8] was only “Let ... and let”, not the continuous-image theorem
  clause used in step 1.2.
- **Why fatal:** the visible fact widened the subdisc estimate, and the durable
  citation record did not cite a proposition at all.
- **Repair:** [L5] now states the full disc and holomorphy assumptions; the
  contract quotes the full subdisc estimate and both clauses of the
  continuous-image theorem used for compact edge traces.
- **Severity:** fatal.

### R7-4 — thm-holomorphic-parameter-riemann-integral

- **Location:** [L10], [L11], proof steps 1.1 and 4.1, and their contract
  citations.
- **Defect:** [L10] did not state the cited theorem's conclusion that
  $t\mapsto\|h(t)\|_2$ is integrable. [L11] omitted integrability of $q$, so
  it wrote an ordinary Riemann integral for an arbitrary bounded function.
  Both contract quotes were merely opening fragments of their source
  Statements.
- **Why fatal:** [L11] was false/undefined without the missing hypothesis, and
  the proof needs the norm-integrability clause before applying the elementary
  bound.
- **Repair:** [L10] now states norm integrability and the norm inequality;
  [L11] requires Riemann integrability. Both contract entries now quote the
  complete source clauses.
- **Severity:** fatal.

### R7-5 — cor-holomorphic-mean-value-property

- **Location:** frontmatter title and the matching batch-manifest title.
- **Defect:** “every compactly contained circle” was broader than the Statement
  and proof, which require the entire enclosed disc to lie inside a larger
  concentric holomorphy disc. For example, the unit circle is compactly
  contained in the annulus $1/2<|z|<3/2$, but its centre is outside that domain.
- **Why fatal:** the title asserted a mean-value conclusion on circles for which
  the centre value need not even be defined.
- **Repair:** the title now says “every circle inside a larger concentric
  holomorphy disc” in both the item and manifest.
- **Severity:** fatal.

### R7-6 — def-order-of-zero-holomorphic-function

- **Location:** final sentence of the Definition.
- **Defect:** the phrase “the infinite value records a zero germ” asserted local
  vanishing before the later factorization theorem proves that all Taylor
  coefficients zero imply vanishing on a neighbourhood. That later theorem
  cannot be a backward dependency of this definition.
- **Why fatal:** this was an unlicensed mathematical assertion in a Definition,
  not a gap between proof steps.
- **Repair:** the sentence now says exactly what the definition licenses:
  every Taylor coefficient vanishes, rather than a natural exponent being
  named.
- **Severity:** fatal.

### R7-7 — ex-holomorphy-of-integral-of-t-to-z

- **Location:** proof-contract citations [L6] and [L8].
- **Defect:** the recorded “quotes” ended at “satisfies, for $x,y>0$,” and “is
  complex differentiable at $a$ and”. Neither opening fragment states the
  logarithm laws or the complex chain rule attributed to it.
- **Why fatal:** an opening clause is not a citation to the proposition used.
- **Repair:** both contract entries now contain the complete exact source
  Statements.
- **Severity:** fatal.

### R7-8 — cex-boundary-convergent-power-series-no-larger-holomorphic-disc

- **Location:** proof-contract citation [L6].
- **Defect:** the fact says complex polynomials, including monomials, are
  holomorphic, but its contract quote pointed only to the later rational-function
  clause for $P/Q$.
- **Why fatal:** the contract did not quote the source proposition attributed to
  [L6].
- **Repair:** the citation now quotes the exact polynomial-entire clause and its
  derivative formula.
- **Severity:** fatal.

### R7-9 — batch-7 manifest dependency metadata

- **Location:** dependency arrays for
  thm-taylor-expansion-holomorphic-function,
  cor-holomorphic-functions-are-real-analytic-and-smooth,
  thm-weierstrass-convergence-holomorphic-functions,
  thm-holomorphic-parameter-riemann-integral,
  ex-holomorphy-of-integral-of-t-to-z, and
  cex-boundary-convergent-power-series-no-larger-holomorphic-disc.
- **Defect:** the manifest did not match the authored frontmatter. It omitted
  three Taylor dependencies, the local-uniform power-series dependency, three
  Weierstrass compactness/triangle dependencies, four parameter-integral
  dependencies, and four boundary-counterexample dependencies. The $t^z$
  example also retained unused thm-real-power-laws while omitting the
  logarithm, continuity, and complex-chain-rule dependencies it actually used.
- **Why fatal:** the batch manifest is the scope and splice record; missing or
  stale load-bearing dependencies make the planned graph disagree with the
  proof on disk.
- **Repair:** every manifest title/dependency list now agrees byte-for-byte, as
  an ordered JSON array, with the corresponding authored frontmatter. This also
  includes the dependency added by R7-1. research/plan-spec.json was not
  touched.
- **Severity:** fatal.

## Nonfatal finding

### R7-10 — proof-contract boundary-row data

- **Items/locations:** Taylor empty/endpoints, zero-factorization
  iff-reverse, polynomial-growth empty/one, dense-image zero, and
  Liouville iff-reverse.
- **Defect:** several evidence strings had lost TeX escapes (ainOmega,
  a carriage-return interpretation of rho, a newline interpretation of
  ne, lfloor N/rfloor, and a vertical-tab escape before varepsilon).
  Liouville's reverse rationale also suggested that constancy does not imply
  boundedness, although every constant entire function is bounded.
- **Repair:** the TeX evidence is now valid JSON text, and the Liouville row
  states accurately that the true converse is simply not part of the theorem.
- **Severity:** nonfatal.

## Polish findings under the 30-second rule

### R7-11 — cor-holomorphic-functions-are-real-analytic-and-smooth

- **Location:** steps 4.1 and 5.1.
- **Defect:** step 4.1 invokes the planar definition of “real analytic”, whose
  opening hypothesis is smoothness, before step 5.1 establishes smoothness.
  Reading the two steps together closes the order-of-presentation gap.
- **Disposition:** not repaired; a competent reader closes it by reading step
  5.1, so it is polish rather than a fatal defect.
- **Severity:** polish.

### R7-12 — thm-zero-order-factorization-holomorphic-function

- **Location:** step 1.2.
- **Defect:** multiplying the Taylor expansion of $g$ by $(z-a)^m$ and calling
  the resulting coefficients the Taylor coefficients of $f$ uses the standard
  uniqueness/coefficient formula without naming it.
- **Disposition:** not repaired under the 30-second rule.
- **Severity:** polish.

### R7-13 — ex-sine-minus-z-zero-of-order-three

- **Location:** steps 1.1–2.1.
- **Defect:** the passage from the displayed convergent power-series
  representation of $\sin z-z$ to its Taylor coefficients leaves the standard
  coefficient-uniqueness bridge implicit.
- **Disposition:** not repaired under the 30-second rule.
- **Severity:** polish.

### R7-14 — thm-taylor-expansion-holomorphic-function

- **Location:** step 5.1.
- **Defect:** applying the published higher-derivative Cauchy formula on the
  chosen radius-$r$ circle implicitly requires choosing a slightly larger
  centred disc still inside $\Omega$.
- **Disposition:** not repaired; $r<\rho_a$ supplies such a disc immediately,
  so this is a sub-30-second bridge.
- **Severity:** polish.

## Changes and validation

Changed scoped item files:

- def-order-of-zero-holomorphic-function
- cor-holomorphic-functions-are-real-analytic-and-smooth
- thm-entire-polynomial-growth-is-polynomial
- thm-weierstrass-convergence-holomorphic-functions
- thm-holomorphic-parameter-riemann-integral
- cor-holomorphic-mean-value-property

I also updated research/frontier-16-batch-7.pages.json and
research/frontier-16-batch-7.proof-contracts.json. No item was added or
deleted. No stale verification.judge block existed. I did not edit a
published item, another batch, or research/plan-spec.json.

Validation after the repairs:

- reflow.mts: all six changed items already canonical; all reported unchanged.
- targeted precheck.mts: all five changed proof-bearing items passed; the
  changed definition is legitimately precheck: n/a.
- strict proof contract: 23/23 items, 0 errors; one unchanged heuristic
  shotgun-bracket warning on Weierstrass step 1.2.
- citation fidelity: 127 citations, no missing quote and no widening candidate.
- boundary audit: 184 rows, no template-reuse or contradicted-disposition
  candidate.
- content policy: 30 scoped items, 0 errors and 0 warnings.
- finite smoke: 0 errors and 0 registered checks; this is not mathematical
  evidence for these analytic items.
- risk report: 0 errors; all 23 proof-bearing items route high or critical
  except one moderate item. The required risk_review dispositions remain the
  6b Alpha's role and were not fabricated here.
- prose check: both page files, 0 errors and 0 warnings.
- render check: all six changed items and both page files passed real KaTeX and
  renderer-YAML parsing.
- repository dependency, forward-reference, and external-reference checks all
  exited 0. Their repo-wide legacy warning lists were not treated as evidence
  for this batch.

## Per-page verdict

- analyticity-liouville-and-morera: **repaired; mathematically fit for 6b**.
  Fatal title, citation, proof-input, Definition-prose, contract, and manifest
  defects listed above are closed. Four explicitly identified 30-second polish
  gaps remain nonfatal by owner rule.
- analyticity-liouville-and-morera-examples: **repaired; mathematically fit
  for 6b**. No example/counterexample/false-statement claim or witness was
  false. Its repairs were citation-contract precision and manifest
  synchronization; no B-page item body needed rewriting.

Scoped items actually opened: **30/30**. Distinct dependency items actually
opened: **94/94**.
