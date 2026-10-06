# Step 3a scope review — pair `the-direct-method-and-euler-lagrange-equations`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-the-direct-method-and-euler-lagrange-equations-cc8da1064c9c84bc`
  (task file `research/frontier-39-analysis-30-step3a-pair-the-direct-method-and-euler-lagrange-equations-cc8da1064c9c84bc.task.md`;
  a byte-identical earlier copy exists as `…-14547307cc980f8a.task.md`).
- Role: alpha scope reviewer (not owner, not item author).
- A page: `the-direct-method-and-euler-lagrange-equations` (batch 15,
  order 458.039, category `pde`, `requires` =
  [`weak-elliptic-maximum-principles-and-holder-regularity`]; 26 items:
  3 definitions, 12 lemmas, 7 theorems, 3 corollaries, 1 remark).
- B page: `the-direct-method-and-euler-lagrange-equations-examples`
  (batch 15, order 458.04, `requires` = the A page; 10 items:
  4 examples, 6 counterexamples).
- Decision: **`sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope`.
- Date: 2026-10-05 (local; 2026-10-04 UTC).

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt
`research/frontier-39-analysis-30-step3a-review-the-direct-method-and-euler-lagrange-equations.json`.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-pde-track.md` PDE-21, lines
1930–1983 (A/B ids and `requires` 1932–1935; the 15 designed A rows
1939–1953, item 12 at 1950; the seven-row B companion 1955–1963; sources,
hard proof obligations and well-definedness 1965–1983); the PDE-21 additions
table §12.6 lines 3731–3744; the source-audit row line 3398; the track index
row line 57; and the well-definedness table row line 2404. The design builds
"weak lower semicontinuity, coercivity, minimisers and Euler–Lagrange
equations": the direct method in reflexive Banach spaces, the first-variation
and Euler–Lagrange machinery for integral functionals on Sobolev spaces
(fixed trace, then the natural boundary condition), the convex
integral-functional existence theorem, the Dirichlet principle, the
regularity corollary, and the necessity-not-sufficient remark.

The drift verdict for this page is `no-drift`
(`research/frontier-39-analysis-30-alpha-step1-drift.md` L199–L209, same text
in the initial file): weak closure and integral lower semicontinuity are
local lemmas; properness needs a finite competitor; the scalar
convex-gradient theorem must state the hypotheses that allow passage in the
$u$-variable; Gâteaux variations require a common integrable dominator; no
new variational or optimal-control supplier is needed. The realized items
follow this point by point: A1 defines properness with a finite competitor
and A5/A9 consume it; A23 states joint convexity with lower semicontinuity
and the growth hypotheses (the passage hypotheses); A14 proves a single
dominator with $G\in L^1(\Omega)$, $g\in L^{p'}(\Omega)$.

Intended role: PDE-21 is the variational base of the elliptic track. The
only in-run consumer is the batch-16 pair PDE-22
(`constrained-variational-problems-and-variational-inequalities`,
order 458.041), which declares 14 item-level edges and the page edge into
this pair (scan of all 30 batch manifests for `deps` and `[[…]]` citations
of batch-15 ids). All consumer orders are larger, so the
supplier-before-consumer direction holds and no consumer needs a claim this
pair does not plan to prove.

One recorded scope qualification governs item 12. The design summary says
"convexity in the gradient"; the realized
`thm-direct-method-for-convex-integral-functionals` assumes joint convexity
and lower semicontinuity of $(s,\xi)\mapsto f(x,s,\xi)$, Carathéodory
measurability/continuity, an upper bound with $G\in L^1(\Omega)$ and a
two-case coercivity bound. This is the hypothesis set the drift instruction
prescribes ("state the hypotheses that allow passage in the $u$-variable"),
it is sourced to [MA] Theorem 2.44(ii) (verified below), and every planned
consumer (the Dirichlet functional, the free/fixed-trace example, the PDE-22
quadratic/eigenvalue problems) lies inside the jointly convex case. The
strictly more general [MA] Theorems 2.48–2.51 (convexity in the gradient
alone, lower semicontinuity in $(u,\xi)$) is **not** claimed and is recorded
in `frontier-39-analysis-30-batch-15.coverage.json` with disposition
`deferred`, destination `owner-decision`, and a written reason (its proof
needs Young-measure or measurable-selection machinery this pair does not
build). This is a recorded qualification, not a silent weakening; the item
readiness record
`research/frontier-39-analysis-30-step1-thm-direct-method-for-convex-integral-functionals.json`
states the same boundary.

## 2. Design-to-manifest mapping

All fifteen designed A rows are present, in design order, with matching
kinds: `def-proper-coercive-and-weakly-lower-semicontinuous-functional`,
`lem-norm-closed-convex-sets-are-weakly-closed`,
`lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous`,
`thm-direct-method-in-a-reflexive-banach-space`,
`cor-strict-convexity-gives-uniqueness-of-a-minimiser`,
`def-gateaux-and-frechet-derivatives-of-a-functional`,
`lem-differentiation-of-an-integral-functional`,
`thm-first-variation-vanishes-at-an-interior-minimiser`,
`thm-weak-euler-lagrange-equation-for-integral-functionals`,
`cor-classical-euler-lagrange-equation-under-regularity`,
`thm-natural-boundary-condition-for-free-boundary-variations`,
`thm-direct-method-for-convex-integral-functionals`,
`thm-dirichlet-principle-for-poisson-equation`,
`cor-minimisers-are-classical-when-elliptic-regularity-applies`,
`rem-euler-lagrange-is-necessary-not-sufficient-without-convexity`.

All seven PDE-21 A additions of the §12.6 table are present:
`lem-coercivity-makes-every-finite-level-minimising-sequence-bounded`,
`lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`,
`lem-weak-closedness-keeps-the-direct-method-limit-admissible`,
`lem-liminf-passage-makes-the-weak-limit-a-minimiser`,
`lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed`,
`thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional`,
`lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation`.
Four locally necessary prerequisites complete the page:
`def-convex-and-strictly-convex-functionals-on-a-banach-space` (the library
had convexity only on Euclidean sets),
`lem-fundamental-lemma-of-the-calculus-of-variations`,
`lem-boundary-fundamental-lemma-of-the-calculus-of-variations` (no published
$L^1_{\mathrm{loc}}$ fundamental lemma exists under any name — searched
`items/`) and `lem-caratheodory-composition-is-measurable` (well-definedness
of $I(u)=\int f(x,u,Du)$ before differentiation). 26 items in total, far
below the page cap.

B page: the seven designed rows are present
(`ex-dirichlet-energy-with-affine-boundary-data`,
`ex-one-dimensional-euler-lagrange-equation`,
`cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity`,
`cex-a-minimising-sequence-need-not-converge-strongly`,
`cex-euler-lagrange-stationarity-does-not-imply-a-minimum`,
`cex-nonstrict-convexity-allows-many-minimisers`,
`ex-natural-neumann-condition-from-a-free-endpoint`), plus all three B
additions of the §12.6 table
(`cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed`,
`cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity`,
`ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations`).
The B page tests the structural hypotheses one by one: coercivity without
weak lower semicontinuity, weak versus strong compactness, stationarity
without convexity, non-strict convexity, non-convex admissible set,
non-convex gradient integrand, and the admissible-direction choice. No
designed claim is missing, none is weakened, and no un-designed claim
displaces a designed one.

Two statement overlaps with published items are recorded by the builder and
retained because the design lists them and the page consumes the sequential
form: A3 against `thm-norm-closed-convex-iff-weakly-closed` /
`thm-mazur-weak-and-norm-closure-of-convex-sets` (separate separation proof
along the prescribed FA-5 route), and A10 against the published
one-dimensional `cor-strictly-convex-functions-have-at-most-one-minimizer`
(different generality: convex functionals on a convex set). Neither removes
subject matter.

## 3. Source coverage

`research/frontier-39-analysis-30-batch-15.coverage.json` carries 2 pages,
71 harvested headings and 10 fetch-stamped source entries over six distinct
full texts: A page [CV], [T], [MA], [G], [SO], [L]; B page [CV], [T], [MA],
[SO]. Dispositions: A 37 `included`, 9 `out-of-scope`, 6 `deferred`,
1 `inline`, 1 `already-published` (the divergence theorem); B 10
`included`, 4 `out-of-scope`, 2 `deferred`, 1 `inline`.

I re-verified the stamps against fresh downloads or the repository copy:
[CV] 3,198,738 bytes, sha256_16 `8511dd35c5d9a7f4`; [T] 2,912,992 bytes,
`cea9939acea1858e`; [MA] 745,553 bytes, `3b714fce9ae87263`; [G] 344,177
bytes, `89b3037f298b15a3`; [SO] 1,129,332 bytes, `31912c16701f02b5`; [L]
`laugesen.pdf` 764,005 bytes, `6aec033c5bc5a0c6`. All ten entries pass
`source-fetch-check` (10/10 fetch-verified, 0 documented drops).

I re-read the load-bearing locators in the fetched texts and confirmed the
attributed claims:

- [T] §13.1 (printed pp. 293–296) fixes the Fréchet derivative (13.1)–(13.3)
  and the Gâteaux/variational derivative (13.4)–(13.6) with the
  non-linearity/unboundedness warnings (Examples 13.2–13.3); §13.2
  Theorem 13.1 (p. 297) states the direct method with M nonempty weakly
  sequentially closed, coercivity/boundedness, weak sequential lower
  semicontinuity, and the Gâteaux conclusion (13.8); Lemma 13.2
  (pp. 297–298) is the convex closed-set statement; Corollary 13.4 (p. 299)
  and Examples 13.6–13.7 (pp. 298–300) give the integral-functional and
  Dirichlet-principle cases. This matches A16/A17/A23/A24 and the four-step
  split in A5–A9.
- [MA] Theorem 2.2, Definition 2.3 and Theorem 2.4 (printed pp. 31–32)
  state the metric-space direct method; Lemma 2.41 (p. 43) is the convex
  closed-set lemma; Theorem 2.44(ii) (pp. 43–44) states that a positive
  Borel $f$ with $(s,\xi)\mapsto f(x,s,\xi)$ convex and lower semicontinuous
  a.e. gives a convex, weakly lower semicontinuous $F$ (the route A23
  follows); Theorems 2.46–2.51 (pp. 44–48) are the necessity and
  Serrin–Alberti statements, recorded deferred; Example 2.54 (p. 52) is the
  oscillating $\pm1$ example behind B9.
- [L] §3.10 (printed pp. 80–81 of the repository copy) contains Lemma 3.30
  (lower energy bound), Proposition 3.31 (existence of an energy minimiser
  by weak compactness) and Theorem 3.32 (the minimiser solves the weak
  Dirichlet Poisson problem), the claims A23/A24 use.
- [G] §4.1 (printed pp. 26–27) has Definition 4.1 and Remark 4.3
  (coercivity and bounded sublevels) and Definition 4.4 (weak lower
  semicontinuity); §4.2 carries the Dirichlet functional calculation that
  A24's strategy follows.
- [CV] Chapter 4 (printed pp. 47–50): Lemma 4.1 and its sign version, the
  Euler operator Definition 4.2, Theorem 4.3 (classical Euler–Lagrange
  equation), Lemma 4.4 (boundary fundamental lemma) and Theorem 4.5
  (natural boundary conditions), with §4.1.0.1 examples (i)–(ii)
  Dirichlet/Poisson; §3.5 supplies the free-endpoint condition; §5.1
  Theorem 5.1 supplies the non-negative second variation. This backs A12,
  A17–A19, B2, B7 and A25.
- [SO] §1.4 (printed pp. 7–9) contains the action principle, Newton's
  equations, the Dirichlet-energy/Laplace derivation and the free-variation
  examples used by B2 and B10.

Disposition soundness: constrained, isoperimetric, multiplier and obstacle
content is deferred to PDE-22 (which builds those results); field-system
actions, minimal-surface/geometric examples, higher-order derivatives, the
$p$-power regularity refinement and Young-measure relaxation are
`out-of-scope` with written reasons; the general Serrin–Alberti theorem and
relaxation/Lavrentiev are `deferred` to `owner-decision`. None of the
deferred or out-of-scope rows is needed to prove a planned claim on this
pair. The design's primary backing [E] and [ACM] could not be fetched from
this environment; the batch records that no item rests on them and that
their content is independently covered by [T], [MA], [CV], [G], [SO] and
[L] — no planned claim lacks a readable source.

Fresh checks against the current tree (read-only):
`node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-15.pages.json`
→ 36 items, 0 errors;
`node tools/coverage-checklist.mjs … --require-destination`
→ 2 pages, 71 harvested results, 0 errors/warnings;
`source-fetch-check` → 10/10;
`node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
→ 899 items, 0 errors, 0 warnings;
`node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
→ exit 0 (max level 22; batch 15 max level 12, no cycle);
`node tools/manifest-integrity.mjs --run frontier-39-analysis-30`
→ 60 pages owed, 60 in the manifests, no scope drift;
`node tools/validate-plan.mjs research/plan-spec.json` → exit 0;
`node tools/step1-decisions.mjs check --run frontier-39-analysis-30`
→ 899/899 items ready, no open work, no owner-held batch-15 record (36/36).

## 4. Prerequisite and dependency audit

The 36 items declare 81 distinct dependency ids and cite 79 distinct
`[[…]]` targets in their statements and strategies; the union is 86 distinct
ids, of which 54 are **published** item files with `status: published`
(verified in the front matter of every file) and 32 are in-run scaffold
drafts: 24 on this page itself, 5 from batch 10
(`lax-milgram-and-weak-elliptic-solutions`, order 458.029), and 1 each from
batch 4 (`sobolev-poincare-and-morrey-inequalities`, 458.025), batch 12
(`interior-and-boundary-sobolev-elliptic-regularity`, 458.033) and batch 13
(`schauder-and-lp-elliptic-estimates`, 458.035). **No dependency id and no
cited id is absent from both the published library and the current
scaffold**; the transitive dependency closure is 355 nodes with zero
missing nodes.

The twelve item-level cross-batch rows plus the one page row in
`research/frontier-39-analysis-30-batch-15.cross-batch-dependencies.json`
are all reviewed in the unified ledger
(`research/frontier-39-analysis-30-cross-batch-dependencies.json`): 30/30
batches reviewed, 0 orphaned reviews, and every one of the 28 batch-15
related edges carries exactly one review. I read the statements of the eight
distinct in-run suppliers and confirmed they state the required claims:
`thm-poincare-inequality-for-w-one-p-zero`,
`def-weak-dirichlet-solution-for-a-divergence-form-operator`,
`thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
`cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
`lem-classical-solutions-satisfy-the-weak-formulation`,
`thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`,
`cor-smooth-weak-dirichlet-solutions-are-classical` and
`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`. The
manifest also consumes published trace, weak-topology/reflexivity,
separation, Fatou/dominated-convergence, convexity and Taylor items; all
resolve.

The plan requires mismatch is the recorded builder conflict, not a scope
omission: `plan-spec.json` order 458.039 declares exactly one page
prerequisite, `weak-elliptic-maximum-principles-and-holder-regularity`
(batch 14, order 458.037, present and earlier), while the design prose names
PDE-14–PDE-16 and PDE-18 plus FA/MT/published pages. The plan controls, and
every additional mathematical input is consumed at item level (batches 4,
10, 12, 13 as above); the reading-order chain
458.025 → 458.027 → 458.029 → 458.033 → 458.035 → 458.037 → 458.039 is
acyclic and supplier-before-consumer throughout.

Unmet prerequisites: **none confirmed**. The transitive sweep above finds no
claim consumed by this pair that is absent from both the published library
and the current scaffold; the four prerequisites that were genuinely missing
from the library (the Banach-space convexity definition, the two fundamental
lemmas, Carathéodory composition measurability) were already added as
scaffold items by the builder and are inside this pair's inventory, so no
new scaffold addition is recommended. Dependency-state note for the owner
and Step 4 (not a finding against this pair): the batch-10 pair
`lax-milgram-and-weak-elliptic-solutions` is currently owner-held
`insufficient` for a B-page sharp-Poincaré-constant counterexample on that
pair; the five batch-10 items this pair consumes are not the subject of that
recorded omission, and the batch-14 PDE-20 scope review was still pending at
the time of this review. Either outcome on those pairs leaves the supplier
statements this pair uses unchanged; Step 3/4 own any subsequent supplier
change.

## 5. Flagged uncertainty and author notes (not scope blockers)

- **A21 and the interval supplier.** The published
  `thm-supporting-lines-for-convex-functions` is a one-real-variable interval
  statement. A21 is a Banach-space statement; the needed inequality
  $\delta I(u;v-u)\le I(v)-I(u)$ follows directly from the convexity
  definition (A2) applied to $t\mapsto I(u+t(v-u))$ and Gâteaux
  differentiability (A11), so no prerequisite is absent, but the author
  should not cite the interval lemma outside its hypotheses or lean on
  one-sided derivatives in the Banach-space setting.
- **A22 and the one-dimensional Taylor supplier.** The published
  `cor-taylor-lagrange-and-cauchy-remainders` is for real functions of one
  variable; A22 applies it to $t\mapsto F(u+tv)$ and must make the
  composition with the published Banach chain rule explicit (the derivative
  identification $g''(0)=D^2F(u)[v,v]$), which the declared dependencies
  support.
- **A3 separation route.** The declared supplier
  `thm-strong-separation-of-closed-and-compact-convex-sets` is applied to the
  compact singleton $\{u\}$ and the closed convex $K$, which is inside its
  hypotheses; the author should state that instantiation.
- **Choice labels.** A6/A9 state the ultrafilter lemma, DC and HB; A1/A5/A8
  do not carry choice beyond their definitions. The batch's convention is
  that DC licenses the countable selection of a minimising sequence. The
  author should keep the choice basis of each item consistent with its
  declared dependencies.
- The joint-convexity qualification of §1 and the two `owner-decision`
  deferrals (Serrin–Alberti with Young measures; relaxation/Lavrentiev) are
  the only unresolved scope-adjacent rows; the owner may re-scope them at
  reconciliation, and they block no item, consumer or gate.

## 6. Decision

**`sufficient`.** The planned definitions, results and examples cover the
intended subject as designed and sourced: all 15 designed A claims, all 7 A
additions and the 4 recorded local prerequisites (26 items), and all 7
designed B claims plus the 3 B additions (10 items) are present with
matching ids and kinds; the six backing treatments are fetch-verified and
the load-bearing locators were re-read and confirm the attributed claims;
the 86 distinct prerequisite references (54 published, 32 in-run) and the
355-node transitive closure contain zero claims absent from both the
published library and the current scaffold; and the drift instruction for
this page (state the passage hypotheses, keep weak closure and lower
semicontinuity local, use one dominator) is realized. The recorded
joint-convexity qualification with its `owner-decision` Serrin–Alberti
deferral, the recorded design-vs-plan requires conflict, the recorded A3/A10
overlaps, and the author notes above do not omit anything from the planned
scope and do not change pair membership or inventory.

Recorded with:
`node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 --page the-direct-method-and-euler-lagrange-equations --decision sufficient --reason "…"`.
