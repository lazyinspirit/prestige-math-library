# Frontier 8 batch 3 — Beta Steps 1–2 notes

Scope: exactly two A/B pairs:

- `approximation-and-compactness-in-ck` / `approximation-and-compactness-in-ck-examples`
- `mixed-partials-taylor-and-extrema` / `mixed-partials-taylor-and-extrema-examples`

No item or page has been authored. The sibling page manifest is the scope of
record (the complete batch, with 59 new item ids), and the sibling proof-contract file is the
Step-5 obligation map. No authoritative plan file is changed by this batch.

## 1. Dependency-closed scope decisions

### 1.1 RA-24: approximation and compactness in `C(K)`

The A page is restricted to real-valued `C(K)` on compact metric spaces. Its
spine is:

1. native, page-local definitions of equicontinuity, pointwise boundedness,
   and uniform boundedness for families in `C(K,\mathbb R)`;
2. the real Arzelà–Ascoli theorem, including both directions and the sequential
   corollary;
3. Bernstein's constructive proof of Weierstrass approximation;
4. real Stone–Weierstrass, proved by the lattice argument;
5. a locally proved Baire category theorem for complete metric spaces, followed
   by the density of nowhere differentiable functions in `C([0,1])`; and
6. the Takagi series as an explicit continuous nowhere differentiable function.

The local equicontinuity definition is intentional. The published general item
`def-equicontinuity` belongs to the later page `function-space-topologies`
(order 283) and imports later topological function-space machinery. The new
definition must state only the metric, real-valued `C(K)` notion needed here.
The eventual later item should record agreement with this special case; RA-24
must not cite it forward.

The B page is a leaf. Its examples cite only the A page or already-published
earlier items. The rational-spike family replaces the scaffold's trigonometric
example: it witnesses boundedness without equicontinuity using only rational
functions already available at this point.

### 1.2 RA-35: mixed partials, Taylor, and extrema

The A page is restricted to results closed by `the-total-derivative`, the
  published Taylor spine inherited through that page, and finite multinomial
combinatorics. Its spine is:

1. `C^k`, multi-index, Hessian, and Euclidean critical-point notation;
2. the rectangular second-difference lemma, Peano's theorem, Young's theorem,
   Clairaut–Schwarz, Hessian symmetry, and permutation symmetry of continuous
   higher mixed partials;
3. multivariable Taylor formulas obtained by restriction to a line and the
   multinomial theorem;
4. Fermat's necessary condition and the Hessian second-derivative test, proved
   from compactness of the Euclidean unit sphere rather than a spectral
   theorem; and
5. the necessary condition along a differentiable parametrization and its
   genuine graph-constraint Lagrange-multiplier corollary.

For the higher-mixed-partial theorem, the elementary fact that a permutation of
a finite ordered list is a product of adjacent swaps is proved inside the
numbered proof. The published `def-symmetric-group` supplies the finite
permutation vocabulary; no nonexistent or future transposition theorem is
assumed.

The B page may depend on `the-exponential-function`, which occurs earlier than
order 232. That explicit dependency licenses the smooth flat Peano-surface
refinement. It does not create a B-to-B dependency.

### 1.3 Step-3.5 dependency-scope repair

The A page `approximation-and-compactness-in-ck` now declares
`finite-counting-and-binomial-coefficients` because its Bernstein definition
and moment lemma cite `def-binomial-coefficient` and `thm-binomial-theorem` from
that published page. This is a page-level dependency correction; no Bernstein
statement changes.

`lem-pointwise-lipschitz-sets-in-c01-are-closed` no longer cites the planned
later `thm-uniform-limit-theorem` from `function-space-topologies`. Its closure
argument is now licensed entirely by earlier published material: convergence
in `lem-sup-metric-is-a-metric` is unwound with `def-metric-convergence` to the
uniform quantifiers of `def-pointwise-uniform-and-uniformly-cauchy-convergence`;
`thm-uniform-limit-continuous-real-functions` supplies continuity of the limit;
and `thm-bolzano-weierstrass` supplies a convergent subsequence of witnesses in
the interval of `def-interval`. The interval bounds are passed to the limit
inline. This route avoids both a forward reference and any unnecessary appeal
to the choice-qualified compactness-equivalence theorem.

The A page `mixed-partials-taylor-and-extrema` now declares
`compactness-in-metric-spaces`. The item
`lem-definite-quadratic-forms-have-a-uniform-sphere-bound` no longer cites the
later `cor-euclidean-closed-balls-and-spheres-are-compact`. Instead it proves
the unit sphere nonempty, closed, and bounded from the standard basis, continuity
of the Euclidean norm, and the metric definitions, then applies the earlier
`thm-heine-borel-rn`. Continuity of the fixed quadratic form is proved inline
from its finite coordinate formula before `thm-extreme-value-metric` is applied.
The hypothesis $n\ge 1$ is explicit because it supplies a nonempty sphere and
is required by the cited Euclidean results.

## 2. Explicit deferrals and drops

These are exclusions from the dependency-closed batch, not omissions to repair
during authoring.

### 2.1 Deferred from RA-24

- **Complex Stone–Weierstrass and the self-adjointness counterexample.** Complex
  numbers are not introduced until RA-33 (order 227), after RA-24. The present
  theorem is therefore explicitly real. Restore the complex theorem only after
  the complex-number and conjugation spine is available.
- **The family `sin(nx)`.** The trigonometric page is later than RA-24. The
  rational spikes on the B page carry the same Arzelà–Ascoli lesson without a
  forward reference.
- **Stieltjes' unbounded-interval approximation obstruction.** The proposed
  example needs trigonometric, integration, or moment machinery not available
  here. It may be restored on a later approximation examples page.
- **The later general equicontinuity item.** As noted above, RA-24 supplies its
  own narrow metric definition and records an agreement seam rather than citing
  `def-equicontinuity` forward.

### 2.2 Deferred from RA-35

- **Morse's lemma.** Standard proofs use the inverse or implicit function
  theorem; those appear on RA-36 immediately after this pair. Morse's lemma
  therefore belongs after RA-36 and is not a load-bearing assertion or remark
  here.
- **The general Lagrange-multiplier theorem for arbitrary regular level sets.**
  Its local parametrization/normal-space proof also needs the implicit function
  theorem. RA-35 proves only the parametrized necessary condition and the graph
  case, for which the parametrization is explicit. The full regular-level-set
  statement is deferred until RA-36.
- **Any claim that the Hessian test classifies semidefinite cases.** The page
  states the correct inconclusive boundary and the B page gives zero-Hessian
  witnesses of all three behaviours.

## 3. Convention lock for Step 5

1. Throughout RA-24, `C(K)` means the published real space
   `C(K,\mathbb R)` with the supremum metric. Do not silently switch to complex
   scalars.
2. Arzelà–Ascoli states that the **closure** of a family is compact iff the
   family is equicontinuous and pointwise bounded. Both implications are
   numbered. Empty-family and empty-domain conventions are explicit.
3. The Bernstein definition covers `n=0`; moment identities split `n=0` and
   `n=1` before any division or shifted binomial index.
4. The real Stone–Weierstrass proof uses a unital algebra that separates
   points. Absolute-value closure is proved using real Weierstrass
   approximation, after adjusting the constant coefficient to zero. It then
   uses both compactness passes: a finite maximum followed by a finite minimum.
5. The Baire proof states the concrete closed-empty-interior formulation. Do
   not import the later general definitions of meagre or residual subsets.
   Dependent choice is cited at the recursive nested-ball construction.
6. Endpoint differentiability in the generic nowhere-differentiability theorem
   is one-sided. The Takagi proof separates dyadic from nondyadic points and
   does not replace the slope argument with an unsupported folklore claim.
7. In RA-35, multi-indices are finite tuples of natural numbers and
   `|\alpha|`, `\alpha!`, `h^\alpha`, and `D^\alpha f` are displayed before use.
   Dimension and differentiability hypotheses must prevent vacuous coordinate
   claims.
8. Peano's theorem and Young's theorem are distinct numbered results with
   distinct hypotheses. Clairaut–Schwarz follows from continuity in a
   neighbourhood. Do not collapse these into a single combined result.
9. The multivariable Taylor proof is one-variable Taylor along
   `t\mapsto f(a+th)`. The segment-containment hypothesis is explicit, and the
   zero-increment case is not passed through a normalized quotient.
10. The Hessian test uses quadratic-form language only. No spectral theorem is
    cited or assumed. The two-variable determinant corollary is derived by
    completing the square.
11. The Peano surface convention is
    `(y-3x^2)(y-x^2)`; it is positive on every fixed line near the origin and
    negative on `y=2x^2`. The smooth refinement replaces `x^2` by the flat
    function `e^{-1/x^2}` off zero.
12. The only Lagrange theorem on the A page is for an explicitly parametrized
    constraint, with a graph corollary. Do not silently generalize it to an
    arbitrary regular level set.

Preserve the exact planned clauses and numbered step identifiers in
`research/frontier-8-batch-3.proof-contracts.json`, or update the contract in
the same authoring change when exact wording changes.

## 4. Dependency and provenance audit

The 59 proposed ids were checked by exact id against both `items/` and the live
plan; none conflicts. Every B-page dependency is directed into its A page or an
earlier published page. There is no B-to-B dependency and no dependency on a
later order.

The following published dependencies were opened and their exact claim was
checked before use:

- `def-continuous-real-functions-on-a-compact-metric-space` and
  `thm-c-k-complete-in-the-sup-metric` for the real `C(K)` convention and
  completeness;
- `def-metric-compactness`, `def-metric-compactness-variants`,
  `thm-metric-compactness-equivalences`, and `def-totally-bounded` for the
  compactness chart;
- `def-pointwise-uniform-and-uniformly-cauchy-convergence`,
  `def-series-of-real-functions`,
  `thm-weierstrass-m-test-for-function-series`, and
  `thm-uniform-limit-continuous-real-functions` for uniform limits and series;
- `def-dependent-choice`, `def-complete-metric-space`, and
  `thm-complete-subspace-iff-closed` for the nested-ball proof;
- `def-finite-sum`, `def-binomial-coefficient`, `thm-binomial-theorem`,
  `def-multinomial-coefficient`, and `thm-multinomial-theorem` for finite
  combinatorics;
- `def-total-derivative-in-euclidean-space`,
  `def-directional-and-partial-derivatives`,
  `def-jacobian-matrix-and-gradient`,
  `thm-chain-rule-for-total-derivatives`, and
  `thm-gradient-represents-directional-derivatives-and-steepest-ascent` for the
  several-variable differential spine; and
- `def-taylor-polynomial-and-remainder`,
  `cor-taylor-lagrange-and-cauchy-remainders`,
  `thm-taylor-peano-remainder`, and `thm-fermat-interior-extremum` for the
  one-variable reductions.
- `cor-mean-value-theorem` and `cor-differentiable-implies-continuous` for
  Young's nested one-variable mean-value argument; the theorem was strengthened
  to its literature hypothesis that both first partials exist on a disk before
  the local total-differentiability assumptions are applied.

Older items without the current provenance block are classified here as
`legacy-unclassified`, not silently treated as source-perfect. Their exact
statements were manually checked and the corresponding standard external
sources below were consulted. The RA-34 derivative items whose provenance says
`ai-altered` were checked against their stated Lebl reference before being
accepted as dependencies.

## 5. External source ledger

All URLs in this ledger were opened during scaffold research; direct web URLs
returned HTTP 200 on 2026-08-02 unless otherwise noted.

| Scope | Source | What it supports |
|---|---|---|
| Arzelà–Ascoli | MIT, *The Ascoli–Arzelà Theorem*, <https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf> | compact-domain equicontinuity, finite-net proof, and both directions |
| Generic nowhere differentiability | Harvard Math 114 homework 8, <https://people.math.harvard.edu/~ctm/home/text/class/harvard/114/14/html/home/hw/hw8.pdf> | closed nowhere-dense pointwise-Lipschitz sets in `C([0,1])` |
| Takagi function | Allaart and Kawamura, *The Takagi function: a survey*, <https://arxiv.org/abs/1110.1691> | exact series convention and nowhere finite differentiability |
| Rational spikes and classical analysis cross-check | Rudin, *Principles of Mathematical Analysis*, WorldCat record <https://search.worldcat.org/title/Principles-of-mathematical-analysis/oclc/1502474> | the bounded spike family and the classical compactness/approximation setting |
| Real Stone–Weierstrass | Gaddy, *The Stone-Weierstrass Theorem and its Applications*, <https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf> | real lattice proof and two compactness passes |
| Compact analysis overview | UCLA analysis notes, <https://www.math.ucla.edu/~njhu/notes/quals-ubc/Analysis.pdf> | secondary check of compactness and approximation statements |
| Mixed partials | Eremenko, *Mixed partial derivatives*, <https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf> | Peano/Young hypotheses and mixed-partial equality distinctions |
| Multivariable Taylor | University of Toronto MAT237 notes §2.6, <https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html> | reduction to a line and multi-index formula |
| Extrema and optimization | Columbia, *Analysis, Convexity, and Optimization*, <https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf> | Hessian quadratic-form test and constrained-extremum context |
| Graph Lagrange rule | Penn analysis notes §12, <https://www2.math.upenn.edu/~gressman/analysis/12-lagrange.html> | multiplier equation and its regularity boundary |
| Morse deferral | Stanford Morse lemma notes, <https://math.stanford.edu/~conrad/diffgeomPage/handouts/morselemma.pdf> | confirms use of inverse/implicit-function machinery |
| Nonglobal local minimum | DePaul note, <https://math.depaul.edu/~mash/1localmin.pdf> | `x^2+y^2(1-x)^3` as the unique-critical-point example |
| Peano surface | Math Counterexamples, <https://www.mathcounterexamples.net/no-minimum-at-the-origin-but-a-minimum-among-all-lines/> | `(y-3x^2)(y-x^2)` sign convention and curved negative path |
| Published RA-34 derivative seam | Lebl, *Basic Analysis I*, several-variable derivative section, <https://www.jirka.org/ra/html/sec_svtheder.html> | total derivative, Jacobian/gradient, and chain-rule statements used here |

The previously suggested UCLA URL ending in `/ch44.pdf` returned HTTP 404 and
is deliberately not used in the ledger or contracts.

## 6. Proof-contract and verification notes

Definitions have no proof contract. Every theorem, lemma, corollary, example,
and counterexample in the manifest is in the sibling contract scope. Contract
citations name dependency items, while the external ledger above records the
source used to audit the mathematical shape and convention.

No available finite-smoke type is mathematically appropriate: the repository's
current finite-smoke harnesses are graph/group oriented, while both pairs are
analytic and quantify over functions or real neighbourhoods. The contracts
therefore use empty `finite_smoke` arrays and require explicit symbolic edge
checks instead.

Before splice or authoring, run at least:

```bash
node tools/content-policy.mjs --manifest-only research/frontier-8-batch-3.pages.json
node tools/prosecheck.mjs research/frontier-8-batch-3.notes.md --warnings
jq empty research/frontier-8-batch-3.pages.json
jq empty research/frontier-8-batch-3.proof-contracts.json
```

The full plan validator is not an authoritative gate until the manifest has
been spliced into the plan by the owning agent.

## Continuity checkpoint

Step 5 authoring is complete after the Step-4 Alpha receipt. The authoritative
scope is the page-object group for Batch Three in `research/plan-spec.json`; every
scoped item file and each page composition have now been written.
The preserved constraints are real-valued compact-metric `C(K)`, no complex
Stone--Weierstrass or later function-space/Euclidean-topology citations,
semidefinite Hessian inconclusiveness, and no hidden implicit-function theorem.

## 7. Step-5 authorship and provenance completion record

Every statement below carries its component-level frontmatter provenance; the
proof source is independent of the statement source. The literature-derived
items are restatements of the indicated established result, with an
AI-altered proof adapted to the library's earlier dependencies and notation.

| Items | Statement / proof provenance | Source route and rationale |
|---|---|---|
| `def-equicontinuity-and-boundedness-in-ck`, `lem-equicontinuity-on-a-compact-domain-is-uniform`, `lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness`, `lem-equicontinuous-families-have-finite-sup-nets`, `lem-uniformly-convergent-sequences-form-equicontinuous-families`, `thm-arzela-ascoli-for-real-ck`, `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`, `cex-rudin-bounded-spikes-are-not-equicontinuous`, `cex-constant-functions-are-equicontinuous-not-pointwise-bounded`, `cex-noncompact-domain-breaks-arzela-ascoli`, `ex-distance-functions-form-a-compact-family-in-c01` | literature-derived / AI-altered | MIT Arzelà--Ascoli notes in the source ledger; proofs make compactness and finite-net steps explicit. |
| `def-bernstein-polynomial`, `lem-bernstein-basis-moment-identities`, `thm-bernstein-polynomials-converge-uniformly`, `cor-weierstrass-approximation-on-the-unit-interval`, `cor-weierstrass-approximation-on-a-closed-interval`, `ex-bernstein-polynomials-of-the-square-function` | literature-derived / AI-altered | Encyclopedia of Mathematics and the earlier finite-binomial spine; the degree-zero case is separated before division. |
| `def-unital-separating-real-function-algebra`, `lem-uniform-closure-of-a-real-function-algebra-is-a-lattice`, `lem-two-point-interpolation-in-a-separating-real-function-algebra`, `thm-real-stone-weierstrass-for-compact-metric-spaces`, `cex-even-polynomial-algebra-is-not-dense`, `cex-separating-algebra-without-constants-is-not-dense` | literature-derived / AI-altered | Gaddy's Stone--Weierstrass notes; adapted to the real compact-metric setting and two compactness passes. |
| `thm-baire-category-for-complete-metric-spaces`, `lem-pointwise-lipschitz-sets-in-c01-are-closed`, `lem-steep-polygonal-functions-are-dense-in-c01`, `thm-nowhere-differentiable-functions-are-dense-in-c01`, `def-tent-function-and-takagi-series`, `thm-takagi-function-is-continuous-and-nowhere-differentiable` | literature-derived / AI-altered | Harvard nowhere-differentiability material and the Allaart--Kawamura Takagi survey; endpoint and dyadic cases are stated explicitly. |
| `def-ck-and-multi-index-notation-in-several-variables`, `def-hessian-and-euclidean-critical-point`, `lem-rectangle-second-difference-mean-value-formula`, `thm-peano-mixed-partial-theorem`, `thm-young-mixed-partial-theorem`, `thm-clairaut-schwarz-mixed-partials`, `cor-hessian-is-symmetric`, `thm-symmetry-of-higher-mixed-partials`, `lem-derivatives-along-a-line-have-the-multinomial-expansion`, `def-multivariable-taylor-polynomial`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `cor-multivariable-taylor-formula-with-peano-remainder`, `cor-second-order-taylor-expansion-with-the-hessian`, `def-euclidean-local-extrema-and-critical-points`, `thm-fermat-for-euclidean-local-extrema`, `def-definite-and-indefinite-hessian-quadratic-forms`, `lem-definite-quadratic-forms-have-a-uniform-sphere-bound`, `thm-multivariable-second-derivative-test`, `cor-two-variable-hessian-determinant-test`, `thm-parametrized-constraint-necessary-condition`, `cor-lagrange-multiplier-rule-for-graph-constraints` | literature-derived / AI-altered | Eremenko, Toronto, Columbia, and Penn sources in the ledger; proofs are restricted to the dependency-closed Taylor and graph-parametrization route. |
| `cex-peano-unequal-mixed-partials`, `cex-peano-surface-linewise-minimum-without-an-extremum`, `ex-monkey-saddle`, `cex-zero-hessian-does-not-classify-a-critical-point`, `ex-second-order-multivariable-taylor-polynomial-computed`, `ex-lagrange-multiplier-on-an-affine-graph`, `cex-lagrange-multiplier-rule-needs-a-regular-constraint` | literature-derived / AI-altered | Standard textbook or ledger examples, recalculated in the local notation. |
| `cex-smooth-linewise-minimum-without-an-extremum` | AI-altered / AI-generated | A flat-function adaptation of the documented Peano surface; it is an example only and has no downstream consumer. |
| `cex-unique-critical-point-is-a-nonglobal-strict-local-minimum` | AI-generated / AI-generated | A direct, checkable counterexample generated only for the B page; it is not cited by any in-scope proof and has the required `generation.role: counterexample`. |

The Step-5 contract was resynchronized after canonical proof-phase normalization:
all 50 proof-bearing items have an exact fact citation, one contract entry per
numbered step, and all eight boundary dispositions. Definitions have no proof
contract by design.
The repaired pointwise-Lipschitz and sphere-compactness contracts remain the
authoring source of truth; the scoped authoring gates are the next checkpoint.
