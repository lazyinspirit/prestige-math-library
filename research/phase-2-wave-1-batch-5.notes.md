# Batch 5 — current final adjudication

Run: phase-2-wave-1. Date: 2026-09-08. Outcome: accepted unchanged.

The current controlling record is [group-e final recheck](phase-2-wave-1-alpha-e-recheck.md).
It supersedes the earlier fix-pass claims in this notes file and records the
exact repairs, current prerequisite proof uses, source readings, scope
dispositions, published-consumer debt and checks. No published content was edited.

Batch 5 retains 12 A items and 2 B examples. HB remains an explicit principle
over ZF; the proofs never derive it using the published Zorn implementation.
The asymmetric gauge, real-part reconstruction, bidual contraction and finite
compact-cover gap proofs are adequate as written. Published consumers needing
the relative axiom statement must be repaired in Phase 3 using the planned
relative extension/norming/separation items mapped in the canonical consumer
ledger. Those consumers do not supply these proofs. Both full-text treatments
and all 49 harvest dispositions remain; no source was dropped.

The batch-owned cross-batch input remains empty: no owned proof or page
requirement consumes another frontier batch. Derived ledger refreshed.
No outstanding owned blocker. See the report for the actual successful check
commands and their limits; this is scaffold adjudication, not publication.

## Step-5 authoring

Author batch 5, 2026-09-08. All 14 manifest item files were absent at entry.
Controlling design: Functional Analysis §14.2 (with §14.1 orders), agreeing
with the current plan and group-e Step-3 sufficient verdict and final recheck.
No assigned input is missing; proof contracts are being created as authorized.
Source readings: Brezis printed pp.1–9 through the evaluation isometry
(PDF pp.16–24), browser text lines 223–664; Teschl 2018 university copy,
Theorems 4.13–4.20, pp.112–116 (lines 7023–7178), complete §5.1,
pp.137–141 (lines 8502–8692). Complete relevant passages were read in
overlapping bounded windows. Browser retrieval succeeded for both PDFs;
shell curl failed DNS and is not represented as a fetch verification.
All 49 coverage dispositions were read; no promised result is removed.
Teschl Theorem 5.2's absolute gauge domination is invalid for asymmetric
sets; use F <= p and the separate bound at -x, as in Brezis Lemmas 1.2–1.3.
Published prerequisites are read-only. No recorded result or Zorn extension
supplies the relative proofs. All statements retain ai-altered provenance;
local proofs are ai-altered, with definitions not-applicable. No generation
field or judge stamp is added. Proof contracts quote current local supplier
statements exactly and map their uses; source locators document adaptations.

### Item checkpoints

- `def-hahn-banach-extension-principle-relative`: authored definition and inline calculations. Claim/conventions: HB means: for every real vector space X, real-valued sublinear p:X→R, real linear subspace M≤X, and real linear g:M→R with g(m)≤p(m), there exists real linear F:X→R with F|M=g and F(x)≤p(x) for every x. This is an additional principle over ZF, not an assertion that ZF proves it. Sources: Brezis Theorem 1.1, p.1 (assertion only); Teschl Theorem 4.13, pp.112–113 (sublinear special case). Dependencies: def-sublinear-functional, def-linear-subspace, def-algebraic-dual-and-linear-functional. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `thm-relative-hahn-banach-dominated-extension`: authored 2 argument steps. Claim/conventions: Assume HB. Given X,M,p,g as in the principle, a real linear extension F exists on all X with -p(-x)≤F(x)≤p(x). No topology, closedness, or completeness is required. Sources: Brezis Theorem 1.1, p.1; Teschl Theorem 4.13 and following lower-bound observation, pp.112–113. Dependencies: def-hahn-banach-extension-principle-relative. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `thm-relative-hahn-banach-norm-preserving-extension`: authored 6 argument steps. Claim/conventions: Assume HB. For a normed space X over K=R or C, any K-linear subspace M, and bounded K-linear g:M→K, there is F∈X* with F|M=g and ||F||=||g||. M need not be closed and X need not be complete; M={0} is allowed. Sources: Brezis Corollary 1.2, p.3 (real); Teschl Theorem 4.14 and Corollary 4.15, pp.113–114. Dependencies: thm-relative-hahn-banach-dominated-extension, def-dual-space-of-a-normed-space, lem-real-part-determines-a-complex-linear-functional, def-linear-subspace. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `cor-relative-hahn-banach-dual-norming`: authored 6 argument steps. Claim/conventions: Assume HB. For each nonzero x∈X there is f∈X* with f(x)=||x|| (a nonnegative real, also over C) and ||f||=1. Thus X* separates distinct points and ||x||=max_{||f||≤1}|f(x)| for every x, including x=0 and the zero space. More generally, any family H⊆X* whose linear span is norm dense detects zero: if h(x)=0 for all h∈H, then x=0. Sources: Brezis Corollaries 1.3–1.4, pp.3–4; Teschl Corollary 4.16 and Theorem 4.20 proof, pp.114–116. Dependencies: thm-relative-hahn-banach-norm-preserving-extension, lem-span-is-the-set-of-linear-combinations, def-metric-interior-closure-boundary, def-dual-space-of-a-normed-space. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `lem-relative-bidual-evaluation-is-a-contraction`: authored 4 argument steps. Claim/conventions: For any real or complex normed X, X**=(X*)* and J_X(x)(f)=f(x) define a K-linear map J_X:X→X** with ||J_Xx||≤||x||. No injectivity is asserted without HB. Sources: Brezis §1.3 first paragraph, pp.8–9 through the isometry formula; Teschl paragraph preceding Theorem 4.20 and its upper-bound proof, pp.115–116. Dependencies: def-dual-space-of-a-normed-space, lem-operator-norm-is-a-norm. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `cor-relative-hahn-banach-bidual-isometry`: authored 3 argument steps. Claim/conventions: Assume HB. The canonical scalar-linear map J_X:X→X** is an isometry: ||J_Xx||=||x|| for every x. It is injective; surjectivity is not claimed. Sources: Brezis §1.3, pp.8–9, first displayed isometry calculation; Teschl Theorem 4.20, pp.115–116. Dependencies: cor-relative-hahn-banach-dual-norming, lem-relative-bidual-evaluation-is-a-contraction. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `def-relative-normed-convexity-and-separation`: authored definition and inline calculations. Claim/conventions: Convex means closed under (1-t)x+ty for real 0≤t≤1, also in a complex space viewed as real. A continuous real hyperplane is {x:Re f(x)=a} for a∈R and nonzero f∈X*. Weak separation means Re f(A)≤a≤Re f(B); open-side strict separation means Re f(x)<a≤Re f(y) for all x∈A,y∈B. Uniform strict separation means Re f(x)≤a-ε<a+ε≤Re f(y) for some ε>0. Over R, Re f=f. Sources: Brezis §1.2 definitions, pp.4–5; Teschl Theorems 5.2–5.3, pp.138–139. Dependencies: rem-real-and-complex-normed-space-convention, def-dual-space-of-a-normed-space, def-metric-topology. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `def-relative-open-convex-gauge`: authored definition and inline calculations. Claim/conventions: For an open convex U⊆X with 0∈U, define p_U(x)=inf{t>0:x/t∈U}. The infimum exists as a finite nonnegative real for each x. The scalar field for p_U is the underlying real field. Sources: Brezis Lemma 1.2 and (8), p.6; Teschl (5.1) and Lemma 5.1, pp.137–138. Dependencies: def-relative-normed-convexity-and-separation, thm-infimum-property. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `lem-relative-open-convex-gauge-properties`: authored 7 argument steps. Claim/conventions: If B(0,r)⊆U as above, then 0≤p_U(x)≤||x||/r, p_U(tx)=t p_U(x) for real t≥0, p_U(x+y)≤p_U(x)+p_U(y), U={x:p_U(x)<1}, and |p_U(x)-p_U(y)|≤||x-y||/r. Symmetry is not asserted. Sources: Brezis Lemma 1.2, p.6, full proof; Teschl Lemma 5.1, p.138, full proof. Dependencies: def-relative-open-convex-gauge, def-sublinear-functional, lem-inf-epsilon. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point`: authored 6 argument steps. Claim/conventions: Assume HB. If C is a nonempty open convex subset of a real or complex normed X and z∉C, some nonzero f∈X* satisfies Re f(c)<Re f(z) for every c∈C. Sources: Brezis Lemma 1.3, pp.6–7; Teschl Theorems 5.2–5.3, pp.138–139. Dependencies: thm-relative-hahn-banach-dominated-extension, lem-relative-open-convex-gauge-properties, lem-real-part-determines-a-complex-linear-functional. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `lem-relative-compact-closed-sets-have-a-positive-distance-gap`: authored 5 argument steps. Claim/conventions: In a normed space X, if K is nonempty compact and C is nonempty closed with K∩C=∅, there exists δ>0 such that ||k-c||≥δ for every k∈K,c∈C. No convexity or completeness is needed. Sources: Brezis Theorem 1.7 proof, p.7, closed-minus-compact step expanded; Teschl Corollary 5.4 proof, p.140, finite-cover step specialized to normed spaces. Dependencies: rem-real-and-complex-normed-space-convention, def-metric-compactness, def-metric-topology, lem-finite-choice, lem-finite-set-has-max. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `thm-relative-hahn-banach-geometric-separation`: authored 9 argument steps. Claim/conventions: Assume HB and let A,B be disjoint nonempty convex subsets of a real or complex normed X. (i) If A is open, there exist nonzero f∈X* and a∈R with Re f(x)<a≤Re f(y) for all x∈A,y∈B; if B is also open, the right inequality is strict too. Swap labels/sign if only B is open. (ii) If A is closed and B compact, there exist nonzero f∈X*, a∈R and ε>0 with Re f(x)≤a-ε<a+ε≤Re f(y) for all x∈A,y∈B. In particular a point outside a nonempty closed convex set is uniformly strictly separated from it. Sources: Brezis Theorems 1.6–1.7, pp.5–7; Teschl Theorems 5.2–5.3 and Corollary 5.4, pp.138–140. Dependencies: lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point, lem-relative-compact-closed-sets-have-a-positive-distance-gap, def-relative-normed-convexity-and-separation, lem-sup-epsilon, thm-infimum-property. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `ex-relative-norming-in-a-finite-dimensional-space`: authored 5 argument steps. Claim/conventions: For n≥1 and nonzero x∈K^n with ||x||∞=max_j|x_j|, let j be the least maximizing coordinate and set f_x(y)=conj(x_j)y_j/|x_j| (with real conjugation trivial). Then f_x(x)=||x||∞ and ||f_x||=1. At x=0 use f=0 for the unit-ball formula; in dimension zero there is no norm-one functional. At x=(1,1) in K², the two different coordinate functionals both norm x, displaying nonuniqueness. Sources: Brezis Corollary 1.3 and Remark 2, pp.3–4 (finite explicit specialization); Teschl Theorem 4.20 proof, p.116 (norming criterion). Dependencies: def-dual-space-of-a-normed-space, rem-real-and-complex-normed-space-convention, lem-finite-set-has-max, thm-well-ordering-principle. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

- `ex-relative-separation-of-a-ball-and-an-exterior-point`: authored 4 argument steps. Claim/conventions: Assume HB. Let r≥0 and ||z-a||>r in a real or complex normed space. There is norm-one f with f(z-a)=||z-a||. Every x with ||x-a||≤r satisfies Re f(x)≤Re f(a)+r<Re f(z). The gap is ||z-a||-r>0; its midpoint defines a separator with margin (||z-a||-r)/2. Sources: Brezis Corollary 1.3 and Theorem 1.7, pp.3,7 (quantitative specialization); Teschl Theorem 4.20 proof and Corollary 5.4, pp.116,140. Dependencies: cor-relative-hahn-banach-dual-norming, def-relative-normed-convexity-and-separation. Decision: preserve full manifest scope; individual proof and boundary contract recorded. Checks: mathematical substitutions/hypotheses reviewed locally; required tools pending. Open gaps: none identified in this argument. Next: continue proof-order authoring, then run batch checks.

Both page drafts are written at `library/functional-analysis/norming-and-separation-under-hahn-banach.md` and `library/functional-analysis/norming-and-separation-under-hahn-banach-examples.md`, with all 12 A and 2 B IDs in manifest order. No promised scope or IDs changed. Next action: explicit-item precheck, plan validation, content policy, and strict contracts; fix owned failures.

### Final Step-5 results

Completed all 14 assigned item IDs listed in the checkpoints above and both
page IDs `norming-and-separation-under-hahn-banach` and
`norming-and-separation-under-hahn-banach-examples`. All remain draft.
The three definitions contain their well-definedness/convention calculations;
the eleven proof-bearing items contain 57 numbered mathematical steps in total.
The completed contract file covers all 14 items, maps each numbered step once,
quotes current supplier statements, records their actual uses, and supplies
item-specific boundary worksheets. The contract's final phase references
supersede the initial numbering implicit in the authoring checkpoints.

Actual checks and repairs:

- Explicit-item `node tools/tsx-run.mjs tools/precheck.mts`, with every one
  of the manifest's 14 `items/ID.md` paths supplied: final exit 0,
  **11 checked, 0 failing**; three definitions have no numbered proof section.
  Initial failure was repaired using the normative checker's canonical phase
  form and its recognized final proof marker. All in-prose step references,
  contract derivations, citation uses, and boundary references were synchronized.
  Canonical grouping places independent setup rows together; the geometric
  branches and the dense-family clause have explicit local assumption labels.
- The exact bare `node tools/validate-plan.mjs` invocation returned usage,
  exit 2: the executable requires a plan path. The corrected
  `node tools/validate-plan.mjs research/plan-spec.json` ran twice and passed,
  final exit 0. Its current report has 930 pages with item lists and 683
  page-level-only entries; it checks no mathematics in those missing inventories.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-5.pages.json`:
  final exit 0, **14 scoped items, 0 errors, 0 warnings**. Initial scanner
  failures were fixed by writing block-style provenance/source mappings,
  indented source lists, and flow-style dependency lists accepted by the
  repository's separate scanners. No source or provenance was removed.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-5.proof-contracts.json --strict`:
  final exit 0, **14/14 checked, 0 errors, 0 warnings**. Intermediate list-syntax
  and two explicit step-input reference failures were repaired in owned files.
- `node tools/rendercheck.mjs` with the 14 explicit item paths and both explicit
  page paths: exit 0, **16 files**, YAML and every math span parse using the
  renderer's parsers; no delimiter or wikilink-in-math errors.

Dependency decisions: added the already-published
`def-dual-space-of-a-normed-space` directly to
`cor-relative-hahn-banach-dual-norming` for its normalization and supremum
estimates; added already-published `thm-infimum-property` directly to
`thm-relative-hahn-banach-geometric-separation` for real supremum existence
by reflection. These edits are in the owned manifest and item drafts. The
consumer-batch input remains `[]`: current item dependencies and page
requirements were compared against the other run manifests and have no
cross-batch edge, and neither new published supplier introduces such a use.
The ledger was refreshed after each dependency-edit group and at final input
maintenance. Its derived output is tool-owned, not hand-edited.

Provenance: all 14 statements retain `ai-altered`, expressing the accepted
relative-HB formulations and source-based specializations. Eleven proofs are
`ai-altered`; three definitions use `not-applicable`. Both reference URLs and
exact printed-page locators remain. There are no generated statement targets,
recorded-not-proved suppliers, forward references, judge stamps, or scope
removals. Precheck pass metadata records format checking only.

Unresolved mathematical or scope obligations: none identified in the completed
owned arguments. No prerequisite expansion, narrowing, or removal is proposed
for Alpha. Published consumers' previously recorded relative-HB migration debt
remains outside this assignment and is not claimed closed. These are locally
authored and checked proofs, not independent judgments or publication approval.
Next action belongs to the build driver; no workflow state or plan was edited.
