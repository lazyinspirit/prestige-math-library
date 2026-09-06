# frontier-31a / beta / batch-12 — scaffold checkpoint

## Scope and controlling design

This checkpoint owns only `frontier-31a-batch-12.pages.json`,
`frontier-31a-batch-12.coverage.json`, and this notes file.  It creates no
library page or published item and does not alter plan structure or workflow
state.

I read both matched design locations in
`research/plan-algebraic-topology-track.md`: the A inventory at lines 503–546
and the B inventory at lines 548–559.  They are consecutive parts of the same
AT-3 amendment, so that complete AT-3 section is controlling; there is no
competing later amendment between the two locations.  It specifies the
pair-chain-to-LES, subdivision-to-small-chains, excision, Mayer–Vietoris,
comparison, sphere, and suspension route and all 30 A plus 9 B item IDs below.
The page has 30 A items, below the 60-item split threshold; its B companion has
9 worked examples/counterexamples.  No split is proposed.

There is a genuine design/spec drift.  The design says the A page requires
`singular-chains-and-singular-homology`,
`long-exact-sequences-in-homology`, and `compactness-in-metric-spaces`, while
the dispatch and `plan-spec.json` require only
`singular-chains-and-singular-homology-examples`.  Per dispatch instruction, I
did not choose between them or edit the plan: the manifest retains the plan
edge and directly records the genuinely needed already-planned long-exact and
Lebesgue-number results.  Stage 1 `drift` must reconcile the page prerequisites
before the closure validator can pass.  In particular, the generic long-exact
theorem and the Lebesgue number lemma were not silently replaced by an
unjustified assertion.

At checkpoint time, `.autopilot/` reports the live run as `frontier-23`, not
`frontier-31a`; recent git history similarly does not establish an active
frontier-31a workflow transition.  This batch therefore does not touch
`.autopilot/` or any run state.

## Conventions carried into authoring

- General statements use a fixed abelian coefficient group `G`, as in the
  controlling design, and every singular chain has finite support.  The two
  counterexamples that need a nonzero coefficient group explicitly take
  `G=Z`.
- A pair means `A subset X`; the relative complex is `C_*(X)/C_*(A)`.  Both
  `A=empty` and `A=X`, including degree zero, are handled explicitly.
- A cover-small complex uses a family whose interiors cover `X`.  Each finite
  chain obtains its own least natural-number subdivision depth; a finite
  maximum is taken in ZF.  No uniform depth for all singular simplices is
  claimed.
- Excision is stated with `closure(Z) subset interior(A)`.  The two-open
  Mayer–Vietoris form assumes the relevant interiors cover and fixes the
  difference sign in the chain map and connecting class.
- Reduced groups retain the augmented degree-zero convention.  `S^0` and the
  based well-pointed qualification for suspension are not suppressed.
- The proof route has no forward reference: pair chains and LES; barycentric
  subdivision and mesh; cover-small chains; excision; two-open chain sequence
  and Mayer–Vietoris; comparison, spheres, and suspension; then examples.

## Scaffolded claims and dependency rationale

The manifest is the canonical machine-readable record of each exact title,
kind, explicit `deps` array, and proposed proof strategy.  The item inventory
is reproduced here as the authoring checkpoint.

### A — `relative-homology-excision-and-mayer-vietoris`

1. `def-singular-chain-complex-of-a-pair` — quotient relative chain complex.
2. `lem-singular-boundary-descends-to-relative-chains` — quotient boundary.
3. `def-relative-singular-homology` — homology of that complex.
4. `prop-relative-homology-is-functorial-for-maps-of-pairs` — induced maps.
5. `prop-relative-homology-of-the-empty-and-total-subspace` — endpoint pairs.
6. `thm-long-exact-sequence-of-a-pair-in-singular-homology` — pair LES.
7. `def-relative-homology-connecting-homomorphism-on-cycles` — cycle formula.
8. `lem-the-relative-connecting-map-is-independent-of-lift-and-representative` — well-defined connector.
9. `thm-naturality-of-the-long-exact-sequence-of-a-pair` — natural LES.
10. `def-barycenter-and-affine-cone-on-a-singular-chain` — oriented cone data.
11. `def-barycentric-subdivision-chain-operator` — recursive subdivision.
12. `thm-barycentric-subdivision-is-a-chain-map` — boundary compatibility.
13. `def-barycentric-subdivision-prism-homotopy` — degree-one prism operator.
14. `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` — prism identity.
15. `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` — mesh bound.
16. `def-cover-small-singular-chain-subcomplex` — small-chain subcomplex.
17. `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` — finite-chain smallness.
18. `thm-cover-small-singular-chains-compute-singular-homology` — homology comparison.
19. `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` — stronger chain statement.
20. `thm-excision-for-singular-homology` — excision with closure/interior condition.
21. `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` — quotient corollary.
22. `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` — small-chain decomposition.
23. `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence` — chain SES.
24. `thm-mayer-vietoris-sequence-in-singular-homology` — homology LES.
25. `def-mayer-vietoris-connecting-class` — explicit boundary class.
26. `lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition` — connector well-definedness.
27. `thm-naturality-of-singular-mayer-vietoris` — naturality.
28. `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` — comparison.
29. `cor-homology-of-spheres` — reduced and unreduced sphere groups.
30. `cor-suspension-isomorphism-in-reduced-singular-homology` — reduced suspension shift.

### B — `relative-homology-excision-and-mayer-vietoris-examples`

1. `ex-relative-homology-of-a-disk-and-its-boundary` — relative fundamental class.
2. `ex-relative-homology-of-an-interval-and-its-endpoints` — signed endpoint boundary.
3. `ex-first-barycentric-subdivision-of-a-triangle` — six signed small triangles.
4. `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` — finite small decomposition.
5. `ex-mayer-vietoris-computation-of-sphere-homology` — hemispherical cover.
6. `ex-mayer-vietoris-computation-of-the-torus-first-homology` — two-cylinder torus cover.
7. `cex-excision-fails-without-the-closure-inside-interior-hypothesis` — `([0,1],{0})` witness.
8. `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` — depth-dependent zigzags.
9. `cex-relative-homology-is-not-the-homology-of-the-set-difference` — `(D^n,S^(n-1))` versus its open-ball difference.

Dependency rationale: items 1–5 establish pair chains before the pair LES;
6–9 use the already-planned homological-algebra LES/naturality results; 10–15
are the signed subdivision package; 16–19 turn the mesh estimate and the
Lebesgue number lemma into the cover-small comparison; 20–21 use that comparison
for excision and quotient pairs; 22–27 build Mayer–Vietoris from its short exact
small-chain sequence; 28–30 are subsequent comparison/applications.  B items
depend only on A results (and published singular prerequisites) needed for their
calculation.  The deliberately direct external dependencies are:

- `thm-long-exact-sequence-in-homology` and
  `cor-the-long-exact-homology-sequence-is-natural` for the two long exact
  constructions;
- `thm-lebesgue-number-lemma` for finite-chain cover smallness;
- `thm-five-lemma-for-a-morphism-of-long-exact-sequences` for comparison;
- established singular-chain, reduced-homology, simplicial-homology, and
  deformation-retract items named directly in the manifest where their exact
  conclusion is used.

## Sources read, support, and limitations

The coverage harvest records every source heading/named result over the exact
ranges read and gives each a disposition.  Both are independent full textbooks
with a harvestable table of contents and live HTTPS PDF URLs.

1. Allen Hatcher, *Algebraic Topology*, Chapter 2, `Exact Sequences and
   Excision` and `Mayer–Vietoris Sequences`:
   <https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf>.  Exact locator: chapter
   ToC viewer pp. 0–1; §2.1 viewer pp. 16–35 / printed pp. 113–132; §2.2 through
   ‘Homology with Coefficients’ viewer pp. 52–56 / printed pp. 149–153.  This is
   the primary source for quotient
   chains, Theorem 2.16, Examples 2.17–18, Proposition 2.19, Theorem 2.20,
   Proposition 2.21 and its four subdivision stages, Proposition 2.22, Theorem
   2.27, the suspension/relative exercises, the two-open sequence, and the
   fixed-abelian-group coefficient extension.  The
   two B counterexamples concerning a boundary-point omission and a nonuniform
   depth are direct witnesses for hypotheses Hatcher states; they are not
   falsely claimed to be named Hatcher examples.
2. J. P. May, *A Concise Course in Algebraic Topology*, revised edition:
   <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>.  Exact
   locator: ToC viewer p. 4; Ch. 14 §§2–6 viewer pp. 115–123 / printed pp.
   108–115; Ch. 16 §3 viewer pp. 132–133 / printed pp. 125–126.  May supplies
   an independent cofiber/quotient, suspension, axiomatic Mayer–Vietoris, and
   singular-CW treatment.  Its axiomatic reduced-theory, colimit, relative-MV,
   and CW-approximation results are honestly deferred or out of scope in the
   coverage ledger rather than silently discarded.

Known limits for the author: write the explicit chain-level constructions and
sign checks; do not replace the small-chain proof with an unproved global
subdivision operator, do not assert excision without its closure/interior
hypothesis, do not identify relative homology with a set difference, and do not
turn May’s relative Mayer–Vietoris or colimit material into an unplanned claim.
The suspension result must retain its based/well-pointed qualification.

## Validation state and next action

Completed checks:

`node tools/coverage-checklist.mjs research/frontier-31a-batch-12.coverage.json --require-destination --json`

reported 1 A page, 74 harvested results, 0 errors, and 0 warnings after the
complete Hatcher §2.2 and May Ch. 14 ranges were re-read and harvested.

`node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-12.coverage.json`

reported both sources fetch-verified.  The source stamps record that the
full-source reader opened Hatcher’s 88-page and May’s 251-page PDFs after the
local Node fetcher received `EAI_AGAIN`; the exact original URLs, locators, and
the fact of that local DNS limitation are retained rather than obscured.

`node tools/url-sweep.mjs --coverage research/frontier-31a-batch-12.coverage.json --out /tmp/frontier-31a-batch-12-url-liveness.json --recover --fail-on-dead`

showed the same container-local DNS failure and no archival recovery, while the
full-source reader independently opened both exact URLs.  The temporary
liveness record retains the curl failure as `reader_verification` and records
the source-reader HTTP/full-text verification.  On that evidence:

`node tools/source-backing.mjs --coverage research/frontier-31a-batch-12.coverage.json --liveness /tmp/frontier-31a-batch-12-url-liveness.json --require-verified`

reported all 37 harvested authored results backed by an openable source.

`node tools/content-policy.mjs research/frontier-31a-batch-12.pages.json --manifest-only --json`

reported 39 scoped IDs, 0 errors, 0 warnings.  A dry splice reported 2 pages
and 39 items without writing plan state.  Finally, a temporary copy of
`plan-spec.json` with only these two manifests projected into it passed
`node tools/validate-plan.mjs /tmp/frontier-31a-batch-12-plan.json --repo .`:
no unresolved dependencies, cycles, forward references, B-page dependencies,
prefix errors, or size errors.  The only remaining matter is the recorded
design-versus-spec metadata discrepancy for Stage 1 `drift` to adjudicate; no
mathematical claim, dependency, plan edge, or source harvest was changed to
pretend that discrepancy does not exist.

## Step-3 fix pass

`research/frontier-31a-alpha-g-step3-scaffold-review.md` supplies no numbered
or otherwise identified finding for batch 12: its batch-12 verdict is
`sufficient`, and the companion
`research/frontier-31a-alpha-g-step3-verdicts.json` contains only the same
page/verdict record. Thus the per-finding register is empty rather than an
invented finding ID.

- **Finding ID:** none supplied. **Disposition:** no-change, explicitly
  accepted. **Evidence:** the review confirms the 30 A and 9 B claims preserve
  the fixed-$G$, finite-chain, degree-zero, closure-inside-interior, and
  based/well-pointed qualifications; it also confirms that the plan's single
  declared prerequisite closes over the singular-homology, homological-algebra
  long-exact-sequence, and metric-compactness carriers named in the manifest.
  **Changed scaffold record:** none; the manifest and coverage harvest remain
  the current source-grounded records.

I independently re-opened the exact recorded full-text URLs on 2026-09-05.
Hatcher's 88-page Chapter 2, §2.1, states relative chains as the quotient,
the closure-inside-interior excision hypothesis, and the cover-small inclusion
as a chain-homotopy equivalence (Theorem 2.20 and Proposition 2.21); §2.2
gives the signed short exact sequence and its Mayer--Vietoris connector.
May's 251-page revised text, Chapter 14 §§2--5, independently gives the
cofiber quotient comparison, the nondegenerately based suspension isomorphism,
and the signed Mayer--Vietoris sequence for an excisive triad. The URLs remain
live and the harvest's item dispositions therefore require no repair.

Post-pass checks: `manifest-deps` reports 39 items with explicit dependency
arrays and no errors; the batch coverage checklist reports 74 harvested results
with no errors or warnings; and `source-fetch-check` accepts both source
receipts. Batch manifest-only `content-policy` reports 39 scoped items with
no errors or warnings; the whole-run manifest-only invocation reports 902
scoped items with no errors or warnings. `validate-plan.mjs
research/plan-spec.json --repo .` passes its declared page order and all
currently itemized-page dependency checks. No authoring, plan, workflow, or
published-content artifact was touched.

## Step-5 authoring

Authored the two draft pages `relative-homology-excision-and-mayer-vietoris`
and `relative-homology-excision-and-mayer-vietoris-examples`, with all 39
manifest IDs: the 30 relative-chain, subdivision, excision, Mayer--Vietoris,
comparison, sphere, and suspension items, and the nine supplied examples and
counterexamples. Every new item is `status: draft`, carries the preserved
literature-derived statement provenance, Hatcher or May source URL, its
manifest dependency array, and no judge record.

The written route retains fixed abelian coefficients and finite chains; treats
$A=\varnothing$ and $A=X$; states excision only for
$\overline Z\subseteq\operatorname{int}(A)$; uses a finite maximum of
chain-specific subdivision depths; includes $S^0$ and reduced degree-zero;
and states suspension only for based well-pointed spaces. No claim was narrowed
or dropped. The proof-contract records all 31 proof-bearing items, maps each
numbered proof row, has no fact citations because the proofs use no labelled
fact rows, and supplies a disposition for every standard boundary axis.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 39 explicit batch item
  paths: 31 proof-format items checked, 0 failing.
- `node tools/proof-contract.mjs research/frontier-31a-batch-12.proof-contracts.json --strict`:
  31/31 checked, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`: passed;
  declared order is acyclic with no item-level cycles, forward references,
  B-page dependencies, or unresolved IDs among itemized pages.
- `node tools/content-policy.mjs research/frontier-31a-batch-12.pages.json`:
  39 scoped items, 0 errors, 0 warnings.

Blockers: none.
