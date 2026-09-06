# frontier-31a beta 5 — scaffold checkpoint

## Scope and plan reconciliation

- Authorized artifacts: frontier-31a-batch-5.pages.json,
  frontier-31a-batch-5.coverage.json, and this task-named notes file. No
  library page, item body, plan structure, workflow-state, or published content
  was changed.
- The task and plan specification agree on the A page order 288.1401, its B
  companion at 288.14012, category fourier-analysis, and the declared
  prerequisite fejer-and-poisson-summability-of-fourier-series-examples.
- The FR-3 design names the broader prerequisites FR-1, FR-2, FA-18, and
  Parseval from the Hilbert-series material; the current plan specification
  names only the FR-2 examples page. This is a design-versus-spec prerequisite
  conflict. The manifest retains the specification's requires verbatim; it
  does not adjudicate the conflict or rewrite the reading order.
- The A page has 10 planned items, below the mandatory 60-item split limit.
  The two added bridge lemmas are necessary rather than padding: the dyadic
  block estimate is the actual Holder-to-Fourier input, and summing it into
  weighted ell-2 is the separate hypothesis needed by the selected
  Cauchy--Schwarz lemma.
- Before minting, the current items directory and plan home were checked for
  every proposed id. The isolated manifest-only policy check confirms that all
  15 ids are unused in the current batch/plan scope; historical concluded-run
  scaffolds were not treated as current content.

## Conventions held fixed

- The circle is T = R/Z with normalized Haar measure. Characters are
  e_k(x) = exp(2 pi i k x), and Fourier coefficients use the existing
  period-one convention from def-period-one-fourier-coefficients-partial-sums-and-convolution.
- A(T) consists of integrable functions with ell-1 Fourier coefficients, with
  the coefficient ell-1 norm; its continuous representative is constructed in
  the following synthesis lemma rather than silently identified in the
  definition.
- C^alpha(T), for 0 < alpha <= 1, means a continuous one-periodic function
  whose modulus is bounded by a constant times the alpha power of circular
  distance. This is a page-local analytic convention; the existing
  rational-exponent metric Holder item is not treated as the definition.
- The Bernstein theorem is strict: 1/2 < alpha <= 1. The endpoint example
  records that alpha = 1/2 can fail. No claim is made for alpha > 1 because
  this page uses the stated Holder convention only.

## Source reading and harvest

The initial three live URLs were opened in the web reader on 2026-09-05; the
Step-3 fix pass additionally opened Müger's independent treatment of the
Wiener interface. The source coverage file carries each exact locator, its own
headings/results over the read range, every disposition, and full-text
web-reader receipts. Local shell DNS did not resolve the remote hosts, so it
could not produce byte/hash receipts; the inspection is recorded honestly as
`verified_via: web-open`. No source URL was replaced and no result was removed
to bypass a source gate.

- Richard S. Laugesen, Harmonic Analysis Lecture Notes:
  https://arxiv.org/pdf/0903.3845. Contents PDF p. 4; Chapter 4, printed
  pp. 27-30 (PDF pp. 26-29), through Theorem 4.3. It supports the A(T)
  definition, uniform synthesis, completeness/product algebra, the Holder
  inclusion, and the exact Wiener-inversion interface.
- Loukas Grafakos, Classical Fourier Analysis, 3rd ed.:
  https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf.
  Contents PDF p. 17; section 3.3, printed pp. 192-205 (PDF pp. 208-220),
  through Exercise 3.3.8. It is the independent textbook treatment for the
  Holder conventions, dyadic proof route, the sharp threshold, the L2
  derivative criterion, and the endpoint/continuity counterexamples.
- Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient
  Linear PDE:
  https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf.
  Contents PDF p. 1; section 1 begins PDF p. 2 and ends after Exercise 14 on
  PDF p. 12. The design named PDF pp. 1-18, but section 1 itself ends before
  section 2 at PDF p. 12; the narrower locator records precisely what was
  read. Taylor independently supports the Fourier conventions, L2/ell-2
  bridge, weighted Cauchy--Schwarz route, product/convolution identities, and
  pre-existing summability material.
- Michael Müger, Introduction to Functional Analysis:
  https://www.math.ru.nl/~mueger/functionalanalysis.pdf. Contents PDF p. 2;
  §19.2, "Application: Absolutely convergent Fourier series", reader PDF
  pp. 162-163, through Exercise 19.11. It independently verifies the
  circle-Wiener inverse conclusion and its Gelfand-algebra setting. Its four
  source headings/results and dispositions are in the coverage ledger.

The complete heading-by-heading disposition ledger is intentionally in
frontier-31a-batch-5.coverage.json rather than duplicated here. It has 63
harvest rows, including every named result and exercise in the recorded
Grafakos, Taylor, and Müger ranges; an included or inline row names its
scaffold item, and every out-of-scope row gives its particular reason.

## Item ledger and dependency rationale

### A page

1. def-wiener-algebra-of-the-circle — defines A(T) and its coefficient norm.
   Dependency: def-period-one-fourier-coefficients-partial-sums-and-convolution
   supplies the inherited torus coefficient notation. Source support: Laugesen
   Chapter 4; Grafakos Definition 3.3.15. Strategy: definition only.
2. lem-absolutely-summable-fourier-coefficients-give-uniform-convergence —
   ell-1 coefficients synthesize uniformly to the correct continuous Fourier
   representative. Dependencies: the preceding definition and the
   already-published Abel convergence theorem from the declared FR-2 route.
   Source support: Laugesen Chapter 4 and Taylor Proposition 1.1. Strategy:
   M-test, termwise integration, then Abel convergence in L1 to identify the
   original function without assuming unproved Fourier uniqueness. The
   currently published Abel theorem explicitly assumes the Axiom of Countable
   Choice, which this lemma must state when authored.
3. thm-wiener-algebra-is-a-banach-algebra — A(T) is unital, commutative,
   complete, and submultiplicative. Dependencies: the definition and synthesis
   lemma. Source support: Laugesen Definition 4.1, (4.2), Theorem 4.2;
   Grafakos Exercise 3.3.6(a); Taylor Exercises 1-2. Strategy: transport
   ell-1 completeness and finite-sum convolution before uniform limiting.
4. lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz —
   weighted ell-2 with exponent s > 1/2 implies ell-1. Dependencies: none;
   this is the standalone sequence kernel. Source support: Taylor Proposition
   1.3. Strategy: reciprocal-weight Cauchy--Schwarz.
5. lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions —
   a Holder function has O(N^-2alpha) Fourier square mass on each dyadic
   annulus. Dependency: the inherited Fourier convention. Source support:
   Grafakos proof of Theorem 3.3.16. Strategy: translation difference,
   finite orthogonality, and a uniform character-difference lower bound.
6. lem-holder-fourier-coefficients-have-weighted-ltwo-decay — every
   0 < s < alpha gives finite weighted ell-2 mass. Dependency: item 5.
   Source support: the dyadic summation in Grafakos Theorem 3.3.16. Strategy:
   sum weighted dyadic block bounds as a geometric series.
7. thm-bernstein-absolute-convergence-theorem — C^alpha(T) is contained in
   A(T) for alpha > 1/2. Dependencies: items 1, 4, and 6. Source support:
   Laugesen Chapter 4, Grafakos Theorem 3.3.16, Taylor Exercise 3. Strategy:
   choose 1/2 < s < alpha and compose the two bridge lemmas.
8. cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series —
   an L2 function with L2 weak derivative lies in A(T). Dependency: item 4.
   Source support: Taylor's L2 Fourier discussion; Grafakos Exercise 3.3.5 is
   now recorded only as a deferred classical-derivative precursor, not support
   for the weak-derivative claim. Strategy: blocked pending the PDE-11 torus weak-derivative interface and
   its coefficient identity. Once materialized, derive the finite Bessel
   estimate from finite character orthogonality and apply item 4 at s = 1.
   No `forward_refs` entry is recorded while the intended target is absent
   from the plan's item list.
9. rem-wiener-lemma-interface-for-the-circle-algebra — identifies FA-18 as
   owner of the no-zero reciprocal theorem. Dependency: item 3. Source
   support: Laugesen Theorem 4.3 and the functional-analysis design's exact
   thm-wiener-lemma-for-absolutely-convergent-fourier-series. Strategy: a
   blocked, non-duplicating interface remark. FA-18 is earlier in the reading
   order, so the missing target is not represented as a forward reference;
   after materialization it must be an ordinary backward citation.
10. cor-holomorphic-functional-calculus-in-the-wiener-algebra — holomorphic
    Phi near the spectrum of f gives Phi composed with f in A(T).
    Dependency: item 3. Source support: the FR-3 design and the functional
    analysis design's thm-holomorphic-functional-calculus-homomorphism.
    Strategy: a blocked unital-Banach-algebra functional-calculus corollary,
    deliberately not continuous functional calculus. FA-17 is earlier in the
    reading order, so no forward reference is recorded; after materialization
    its theorem must be an ordinary backward dependency.

### B page

1. ex-a-trigonometric-polynomial-in-the-wiener-algebra — finite coefficients
   give a directly computed A norm. Dependency: item 1 A. Strategy: finite
   calculation.
2. ex-an-absolutely-convergent-non-smooth-fourier-series — sum over nonzero k
   of |k|^-2 e_k lies in A(T) but is not C2. Dependencies: A item 1 and
   thm-riemann-lebesgue-lemma-for-fourier-coefficients. Strategy: comparison,
   twice integrating by parts, and Riemann--Lebesgue contradiction.
3. cex-continuity-does-not-imply-absolute-fourier-convergence — the sourced
   endpoint example is continuous but outside A(T). Dependencies: none.
   Source support: Grafakos Exercise 3.3.8. Strategy: source-stated existence,
   preserving its unsupplied exponential-sum estimate.
4. cex-the-bernstein-holder-one-half-endpoint-can-fail — the same source gives
   the sharp C^(1/2) failure. Dependencies: none. Source support: Grafakos
   Exercise 3.3.8. Strategy: source-stated construction only.
5. cex-wiener-inversion-needs-nonvanishing — 1-e_1 has a zero, so its
   reciprocal cannot be continuous or lie in A(T). Dependency: A item 1.
   Strategy: direct finite-polynomial calculation.

## Known limits and author handoff

- The source design's FA-18 Wiener lemma and FA holomorphic functional
  calculus are not duplicated in this batch. The remark and corollary are
  interfaces to their exact future owners, not substitute proofs.
- The current plan specification has no corresponding planned item entries for
  thm-wiener-lemma-for-absolutely-convergent-fourier-series or
  thm-holomorphic-functional-calculus-homomorphism. Both are reserved to
  earlier FA owners, so they must materialize before this page can cite them
  as backward dependencies; they are not legal forward interfaces.
- The weak-derivative definition is likewise a later PDE item, but it has no
  planned item record and its torus coefficient identity is unspecified. The
  derivative corollary is blocked rather than carrying an unresolved forward
  reference, and may be authored only after that exact interface exists.
- The non-C2 example uses the currently published Riemann--Lebesgue item. Its
  proof contract should be re-read during authoring to ensure the inherited
  hypotheses are stated exactly.
- The synthesis lemma depends on the currently published Abel convergence
  theorem, which explicitly assumes the Axiom of Countable Choice. That
  qualification is inherited by the identification step and must be exposed in
  the authored lemma unless a separately scaffolded choice-free uniqueness
  proof replaces that dependency.
- Next action: validate this manifest and coverage record mechanically, then
  preserve any validator failure in these notes rather than changing plan
  structure or unrelated artifacts.

## Validation checkpoint

- JSON shape check: pass. The manifest has 10 A and 5 B items; every item has
  an explicit deps array. The coverage record has four independent primary
  treatments and 63 harvested results.
- node tools/coverage-checklist.mjs
  research/frontier-31a-batch-5.coverage.json --require-destination: pass,
  0 errors and one advisory warning. The warning is coverage-low-yield
  (17/63 included). It is the expected consequence of faithfully enumerating
  complete source ranges while declining unrelated slow-decay, bounded
  variation, ordinary-convergence, and exercise material; the specific
  reasons remain in coverage for Alpha review.
- node tools/source-fetch-check.mjs --coverage
  research/frontier-31a-batch-5.coverage.json --stamp: pass, 4/4 sources
  fetch-verified, 0 newly stamped.
- node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-5.pages.json: pass, 15 scoped items and no
  errors or warnings. The required whole-run invocation over all 22
  frontier-31a manifests fails with 22 errors outside Batch 5:
  three duplicate group-cohomology ids and 19 related forward dependencies
  targeting schur-multipliers-and-universal-central-extensions. Its output
  names no Batch 5 item.
- node tools/validate-plan.mjs research/plan-spec.json --repo .: pass for the
  current plan state. A second read-only invocation substituted this batch's
  manifest page objects into an in-memory copy of the plan and also passed:
  no unresolved item dependency, cycle, B-leaf, prefix, order, or size error
  for these 15 items. The plan's unrelated redundant-prerequisite warnings
  remain visible.
- node tools/url-sweep.mjs --coverage
  research/frontier-31a-batch-5.coverage.json --out
  /tmp/frontier-31a-batch-5-url-liveness.json --recover --fail-on-dead:
  0/4 live and 4 failed. Each failure is curl error 6, host DNS resolution
  failure, and archive recovery also failed under the same network condition.
  This is an exact liveness blocker for the shell gate, not evidence that the
  documents are unavailable: all four original URLs were opened and read in
  the web reader. Do not re-source or drop their harvested results; rerun
  liveness in an environment with working DNS.

## Step-3 fix pass

The stable Alpha findings are the numbered findings in
`frontier-31a-alpha-e-step3-scaffold-review.md`, Batch 5, and its structured
verdict row.  The only task-authorized records are this note, the Batch-5
manifest, and its coverage harvest.  None can materialize an item at FA-17,
FA-18, or PDE-11, alter those pages' order, or re-home their claims.  The
dispositions below therefore preserve the source-backed local spine while
making the remaining owner-level blockers explicit; they do not delete a
harvested result merely to clear a gate.

### Finding 1 — periodic weak-derivative interface

- **Disposition:** pushed back as an owner-materialization blocker.  The
  existing `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`
  stays a prospective PDE-11 interface and is not authorable as a closed
  corollary until its target supplies both a torus-compatible weak-derivative
  definition and the coefficient identity
  $\widehat g(k)=2\pi i k\widehat f(k)$.
- **Evidence:** the current specification places PDE-11
  `weak-derivatives-and-sobolev-spaces` at order 458.019 with `items: []`;
  its design at `research/plan-pde-track.md:1084-1102` lists
  `def-weak-derivative-of-a-locally-integrable-function` but not this
  period-one Fourier identity.  The opened Grafakos range identifies Exercise
  3.3.5 only as the differentiable-function criterion, so it cannot justify
  the stated weak-derivative route. The review cites Kinnunen Chapter 1 §1.1
  for the base definition, but its direct URL timed out in this pass; it has
  not been used as verified Batch-5 evidence or added to the harvest. In any
  event, that base definition alone cannot supply the missing periodic
  coefficient identity, which still has to come from PDE-11 or a
  source-complete owner decision.
- **Changed scaffold record:** removed the invalid `forward_refs` entry from
  `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`
  and made its strategy an explicit `BLOCKED pending PDE-11 materialization`
  handoff. Minting a local weak-derivative definition or identity would
  duplicate/re-home PDE-11 material, while removing the corollary would
  discard a required FR-3 result rather than close its prerequisite.

### Finding 2 — Wiener inversion interface

- **Disposition:** pushed back as an earlier-owner/materialization blocker.
  `rem-wiener-lemma-interface-for-the-circle-algebra` must not be converted
  into a locally proved duplicate or silently relabel its earlier FA-18 target
  as a forward reference.  When FA-18 materializes
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series`, this interface
  must become an ordinary backward dependency/citation.
- **Evidence:** the current specification places FA-18
  `gelfand-theory-and-commutative-c-star-algebras` at order 288.081, before
  FR-3 at 288.1401, and it still has `items: []`.  The opened live Laugesen
  PDF, Chapter 4 Theorem 4.3 (PDF p. 28), and Mueger §19.2 Theorem 19.9
  (reader PDF p. 162) both state the no-zero reciprocal conclusion. The
  exact owner assignment is `research/plan-functional-analysis-track.md:1412`.
  These sources establish support but do not create the library-owned FA-18
  theorem required by the design.
- **Changed scaffold record:** removed the invalid `forward_refs` entry from
  `rem-wiener-lemma-interface-for-the-circle-algebra` and made its strategy a
  `BLOCKED handoff to the earlier FA-18 owner`. The existing coverage
  disposition of Laugesen Theorem 4.3 remains attached to the interface
  remark; the theorem is retained, not duplicated or removed.

### Finding 3 — holomorphic-functional-calculus interface

- **Disposition:** pushed back as an earlier-owner/materialization blocker.
  `cor-holomorphic-functional-calculus-in-the-wiener-algebra` cannot be
  proved from the local Banach-algebra result alone.  It remains a prospective
  consequence of the designated FA-17 theorem, rather than a new local
  functional-calculus development or an invalid forward reference.
- **Evidence:** the current specification places FA-17
  `banach-algebras-spectrum-and-holomorphic-functional-calculus` at order
  288.079 with `items: []`; its design expressly assigns
  `thm-holomorphic-functional-calculus-homomorphism` to that page at
  `research/plan-functional-analysis-track.md:1292`. The Alpha verdict
  identifies Bühler--Salamon §5.2.4 (PDF pp. 210--233) as the exact supporting
  treatment. Its live URL did not complete in this repair pass, so it has not
  been added to Batch 5's verified harvest or used as a replacement source.
- **Changed scaffold record:** removed the invalid `forward_refs` entry from
  `cor-holomorphic-functional-calculus-in-the-wiener-algebra` and made its
  strategy a `BLOCKED handoff to the earlier FA-17 owner`. Replacing the
  planned corollary with a source-only or locally reproved assertion would
  respectively evade the closed-dependency requirement or duplicate FA-17's
  reserved result.

### Source and validation recheck

- Re-opened all four recorded A-page PDFs in the full-text web reader on
  2026-09-05:
  Laugesen Chapter 4 (including Definition 4.1, Theorems 4.2--4.3), Grafakos
  §3.3 (including Theorem 3.3.16 and Exercise 3.3.8), Taylor §1, and Müger
  §19.2 (including Theorem 19.9). The original 59-row harvest remains
  faithful; the four-result Müger harvest was added to document the
  independently read Wiener source, giving 63 rows in all.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-5.coverage.json --require-destination`:
  pass, 0 errors; the existing `coverage-low-yield` advisory is 17/63 and is
  accounted for by the reviewed, result-specific declines.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-5.coverage.json --stamp`:
  pass, 4/4 fetch-verified and 0 newly stamped.
- A forced byte/hash refresh with `--force` reached the workspace DNS failure
  `EAI_AGAIN` for each of those same four hosts. This does not invalidate the
  live full-text reader fetches above, and no stale URL, alternate source, or
  harvest row was retained on its account; the recorded web-reader receipts
  remain the available exact-URL verification in this sandbox.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`:
  whole-run pass, 908 scoped items, 0 errors and 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`:
  pass.  The repository's pre-existing redundant-prerequisite diagnostics are
  warnings; no Batch-5 plan record was altered.

**Open obligation and next action:** re-run Alpha review only after the FA-17,
FA-18, and PDE-11 owners have materialized the exact targets.  Until then,
the three records above are deliberately blocked rather than falsely certified
as dependency-closed or represented by illegal forward references.

## Scaffold-fix round

The closure record supplies one Batch-5 work entry but no per-bullet ids.  The
stable labels below identify its three listed findings in their recorded order.
No new scaffold item was added: all three claims were already in the manifest,
and locally adding one would duplicate or re-home an assigned owner result.

### closure-5.1 — torus weak-derivative interface

- **Disposition:** pushed back to PDE-11
  `weak-derivatives-and-sobolev-spaces`; Batch 5 retains the blocked
  `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`
  with only the local weighted-Cauchy--Schwarz lemma in `deps`.
- **Evidence and coverage repair:** live re-reading of Grafakos, §3.3,
  Exercise 3.3.5 (printed p. 203 / PDF p. 219) confirms its hypothesis is a
  differentiable function with classical derivative in $L^2(\mathbb T)$.
  It supplies neither the PDE-11 weak-derivative definition nor
  $\widehat g(k)=2\pi i k\widehat f(k)$ for a weak derivative.  Its coverage
  row is therefore changed from `included` to `deferred`, with destination
  PDE-11 and a result-specific reason.  The live Kinnunen URL named by the
  closure timed out; attempted HTTP and `www` variants did not recover an
  alternate full-text URL.  Its search-indexed contents confirm Chapter 1,
  §1.1 is about weak derivatives, but it is deliberately not entered as
  verified Batch-5 harvest evidence because its full text was not fetched.
- **Manifest and dependency decision:** no `forward_refs` or phantom target
  is introduced.  The manifest strategy remains an explicit blocked handoff;
  the exact torus identity must be materialized by PDE-11 before authoring.

### closure-5.2 — Wiener inversion theorem

- **Disposition:** pushed back to earlier owner FA-18
  `gelfand-theory-and-commutative-c-star-algebras`.  The local
  `rem-wiener-lemma-interface-for-the-circle-algebra` remains an interface,
  not a duplicate theorem or proof.
- **Evidence and coverage:** Laugesen Chapter 4, Theorem 4.3 (PDF p. 28),
  fetched live from `https://arxiv.org/pdf/0903.3845`, states that a
  nowhere-zero $f\in A(\mathbb T)$ has $1/f\in A(\mathbb T)$; the existing
  `included` coverage row correctly names the interface remark.  The
  independent Müger §19.2 treatment was also re-read live: it identifies the
  Wiener algebra as the absolutely convergent Fourier series algebra and
  derives the inversion conclusion in the surrounding Theorem 19.9 argument
  (reader PDF p. 162).  The owner theorem is still absent from FA-18's empty
  manifest, so this evidence cannot close the library dependency.
- **Manifest and dependency decision:** keep the existing dependency on the
  local Banach-algebra theorem only; do not invent an invalid forward reference
  to an earlier page.  After FA-18 materializes its assigned item, it must be
  an ordinary backward citation/dependency at authoring time.

### closure-5.3 — holomorphic-functional-calculus homomorphism

- **Disposition:** pushed back to earlier owner FA-17
  `banach-algebras-spectrum-and-holomorphic-functional-calculus`.  The
  blocked `cor-holomorphic-functional-calculus-in-the-wiener-algebra` is not
  replaced with a source-only claim or locally reproved calculus.
- **Evidence and URL outcome:** the closure's Bühler--Salamon source,
  `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`, returned 403
  in the full-text reader; the identified same-document `funcana-ams.pdf`
  variant also returned 403.  The archive lookup was unavailable to this
  reader.  Consequently no unverifiable source row was added to Batch-5
  coverage, and no existing harvest row was removed to make a gate pass.  The
  functional-analysis design remains the owner assignment at
  `research/plan-functional-analysis-track.md:1292`; the current FA-17
  manifest is empty.
- **Manifest and dependency decision:** retain the explicit blocked strategy
  and its dependency on the local Banach-algebra result.  FA-17 must
  materialize `thm-holomorphic-functional-calculus-homomorphism` before the
  corollary can carry the intended ordinary backward dependency.

### Current round state

- Current Batch-5 A-page harvest: 63 rows.  The correction changes the
  classical derivative exercise to a destination-resolved deferral, leaving
  16 `included` rows; all other coverage dispositions and exact locators are
  preserved.  The four recorded A-page source URLs were fetched as live,
  full-text PDFs in the web reader during this round.  The two failed owner
  URLs above are not recorded as fetch-verified coverage sources.
- Current manifest item IDs and explicit `deps` arrays are unchanged: 10 A
  items and 5 B leaves.  The three owner-level results remain open external
  materialization obligations, not closed local dependencies.
- Next action: run the required coverage checklist, whole-run manifest-only
  policy check, and plan validator; preserve any non-Batch-5 failures here
  without editing their owners.

### Round validation

- `node tools/coverage-checklist.mjs research/frontier-31a-batch-5.coverage.json --require-destination`:
  pass, 0 errors.  Its one advisory is `coverage-low-yield` at 16/63; it is
  expected after the classical-only Grafakos result was honestly deferred and
  the other source-range dispositions were preserved.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-5.coverage.json --stamp`:
  pass, 4/4 recorded coverage sources fetch-verified and 0 newly stamped.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`:
  whole-run pass, 908 scoped items, 0 errors, 0 warnings.

## Owner intervention after scaffold-repair exhaustion

The three automatic repair rounds correctly refused to create dependencies on
unauthored FA-17, FA-18, or PDE-11 items: a future plan reservation is not an
authored dependency on disk. The owner resolved that architectural mismatch
without weakening any mathematical claim.

- The pair now defines the circle-specific periodic $L^2$ weak derivative and
  proves its Fourier-coefficient identity locally. The general open-domain
  weak-derivative definition remains owned by PDE-11.
- Laugesen Theorem 4.3 and Müger Theorem 19.9 now back the local theorem
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series`, replacing the
  blocked interface remark.
- The holomorphic-composition corollary closes locally from Wiener inversion,
  the Cauchy integral formula, and completeness of $A(\mathbb T)$; it no
  longer depends on an unauthored general FA-17 calculus theorem.

The canonical Fourier and functional-analysis plans were synchronized with
this ownership decision. Post-intervention validation reports 910 manifest
items with zero dependency or content-policy errors, 63 coverage rows with
zero errors, an acyclic plan with no unresolved item ids, and 286 current
scope decisions with zero pending or stale rows.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`:
  pass.  It reports only pre-existing redundant-prerequisite diagnostics
  outside this task; no Batch-5 manifest, dependency, order, B-page-leaf, or
  size failure is reported.

**Round conclusion:** Batch 5 is locally repaired and validator-ready.  Its
three specifically named owner claims remain intentionally blocked pending
FA-17, FA-18, and PDE-11 materialization; that unresolved cross-batch work is
recorded, not concealed by a duplicate local scaffold.

## Step-5 authoring

- Dispatch-input filename discrepancy: the dispatch names the absent
  `frontier-31a-batch-5.notes.md`; Alpha-e's scaffold review identifies this
  current file, `frontier-31a-beta-5.notes.md`, as the correctly named batch
  notes. This entry uses that current artifact and no historical substitute.
- Authored draft A items: `def-wiener-algebra-of-the-circle`,
  `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence`,
  `thm-wiener-algebra-is-a-banach-algebra`,
  `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz`,
  `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions`,
  `lem-holder-fourier-coefficients-have-weighted-ltwo-decay`,
  `thm-bernstein-absolute-convergence-theorem`,
  `def-periodic-ltwo-weak-derivative`,
  `lem-fourier-coefficients-of-a-periodic-weak-derivative`,
  `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`,
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series`, and
  `cor-holomorphic-functional-calculus-in-the-wiener-algebra`; authored draft
  B items: `ex-a-trigonometric-polynomial-in-the-wiener-algebra`,
  `ex-an-absolutely-convergent-non-smooth-fourier-series`,
  `cex-continuity-does-not-imply-absolute-fourier-convergence`,
  `cex-the-bernstein-holder-one-half-endpoint-can-fail`, and
  `cex-wiener-inversion-needs-nonvanishing`.
- Wrote the two draft pages under `library/fourier-analysis/`. The local
  periodic weak-derivative, Wiener-inversion, and holomorphic-composition
  proofs follow the final owner-intervention record; no foreign FA/PDE page,
  plan record, workflow state, or published item was changed. The endpoint
  counterexamples remain recorded-not-proved and retain Grafakos's explicit
  exponential-sum qualification.
- Sources and conventions retained: Laugesen Chapter 4, Grafakos §3.3 and
  Exercise 3.3.8, Taylor §1, and Müger §19.2; $\mathbb T=\mathbb R/\mathbb Z$,
  normalized Haar measure, and $e_k(x)=\exp(2\pi ikx)$. The synthesis
  identification explicitly inherits the Axiom of Countable Choice from the
  cited Abel theorem. No planned claim was narrowed or dropped.
- Wrote `research/frontier-31a-batch-5.proof-contracts.json`; strict checking
  maps 13 locally proved proof-bearing items, their cited facts, proof rows,
  and boundary dispositions. The two recorded source-only counterexamples
  have no local proof contract by design.
- Checks run: focused `precheck` on all 17 batch item paths (pass);
  `proof-contract --strict` (13/13, 0 errors); `content-policy` on the batch
  manifest (17 scoped, 0 errors/warnings); and `validate-plan` (acyclic and no
  unresolved ids, with unrelated repository redundant-prerequisite warnings).
  Blockers: none for this batch.
