# Frontier 7 batch 3 — Beta Steps 1–2 notes (2026-08-01)

Scope: convexity + convexity-examples (orders 157–158), and
the-total-derivative + the-total-derivative-examples (orders 229–230).
This batch contains exactly two A/B pairs. These notes are a Step-1/2
scaffold handoff, not authored public content.

## Step 5 authoring record (2026-08-01)

All planned draft items and the matching draft page-composition files
were authored by this Beta after the Step-3 decisions. The following items are
`ai-altered`: `def-convex-concave-and-midpoint-convex-functions`,
`lem-three-slope-inequality-for-convex-functions`,
`thm-convex-functions-are-locally-lipschitz-and-continuous`,
`def-one-sided-derivatives-of-real-functions`,
`thm-one-sided-derivatives-of-convex-functions`,
`thm-convex-functions-are-differentiable-off-a-countable-set`,
`def-supporting-line-for-a-real-function`,
`thm-supporting-lines-for-convex-functions`,
`thm-differentiable-convex-functions-and-monotone-derivatives`,
`cor-convex-differentiable-functions-have-continuous-derivatives`,
`cor-second-derivative-characterises-convexity`,
`lem-midpoint-convexity-extends-to-dyadic-weights`,
`thm-continuous-midpoint-convex-functions-are-convex`,
`thm-finite-jensen-inequality`,
`cor-local-minima-of-convex-functions-are-global`,
`cor-strictly-convex-functions-have-at-most-one-minimizer`,
`def-inflection-point-by-change-of-convexity`,
`cor-second-derivative-sign-change-gives-an-inflection-point`,
`rem-convexity-conventions-and-choice`,
`ex-absolute-value-is-convex`,
`ex-finite-jensen-gives-the-mean-square-inequality`,
`cex-discontinuous-midpoint-convex-hamel-function`,
`ex-cubic-has-an-inflection-point-at-zero`,
`def-euclidean-linear-map`,
`lem-euclidean-linear-maps-have-matrices-and-are-bounded`,
`def-convex-subset-of-euclidean-space`,
`def-directional-and-partial-derivatives`,
`def-total-derivative-in-euclidean-space`,
`lem-uniqueness-of-the-total-derivative`,
`thm-total-differentiability-gives-a-local-linear-bound-and-continuity`,
`def-jacobian-matrix-and-gradient`,
`thm-total-derivative-computes-directional-and-partial-derivatives`,
`thm-gradient-represents-directional-derivatives-and-steepest-ascent`,
`thm-algebra-of-total-derivatives`,
`thm-chain-rule-for-total-derivatives`,
`lem-coordinate-telescoping-on-a-euclidean-ball`,
`thm-continuous-partial-derivatives-imply-total-differentiability`,
`thm-mean-value-inequality-for-total-derivatives`,
`cor-zero-total-derivative-on-a-convex-open-set-is-constant`,
`rem-total-derivative-conventions-and-linear-map-seam`,
`ex-polynomial-map-total-derivative-and-jacobian`,
`cex-partial-derivatives-without-continuity`,
`cex-straight-line-continuity-tests-do-not-imply-continuity`,
`cex-directional-derivatives-without-total-differentiability`, and
`cex-zero-directional-derivatives-without-continuity`. Each has a
source URL in frontmatter: Gardner's convexity notes, Boyd--Vandenberghe,
Green--Gustin, OpenStax, or Lebl/ETSU as appropriate. Their established
statements or classical witnesses were source-checked in Steps 1--2, but the
local exposition and complete phase proofs were materially adapted here.

`cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz`
is the sole `ai-generated` item. Its role is `counterexample`, it has no
consumer and is not load-bearing. Counterexample audit performed before writing:
for each proposed Lipschitz constant $L\ge0$, the points
$-t,t$ with $t=1/(2(L+1))$ lie in $\mathbb R\setminus\{0\}$ and give
$1>2Lt$; at every domain point a component-contained interval makes the map
locally constant, hence its total derivative is zero. The Step-6 reader should
recheck those two universal quantifiers and the failure of convexity.

Authoring changes from the approved baseline were limited to exact dependencies
needed by the written proofs: the one-sided-derivative proof now explicitly
cites `thm-monotone-one-sided-limits-exist`; dyadic approximation explicitly
cites `lem-integer-part`; matrix boundedness and the continuous-partials proof
explicitly cite Cauchy--Schwarz; and the total-derivative mean-value proof
explicitly cites total-differentiability-implies-continuity. No cross-batch or
B-leaf dependency was added.

Scoped author gates run after these edits: `precheck` passed every
phase-formatted item; `content-policy` passed the batch scope; strict
`proof-contract` passed the proof-contract scope; `rendercheck` passed the
authored files; and `prosecheck --warnings` passed the items, notes, and page
files. No paired judge or Step-6 audit was run.

## 1. Findings and recommendations, in severity order

### R1 — HIGH: the total-derivative scaffold has no available linear-map definition

Problem: the standard definition of the Fréchet derivative requires a linear
map from R^m to R^n. The planned page
linear-maps-rank-nullity-and-quotient-spaces is not built, and
rem-rn-conventions-and-scope says explicitly that no definition of a linear map
is available at this point. Silently using “linear” would leave the central
object of the page undefined; depending on that unbuilt page would make
the current pair unbuildable.

Recommendation: approve def-euclidean-linear-map as a native, source-backed
special-case definition, immediately followed by
lem-euclidean-linear-maps-have-matrices-and-are-bounded. Require
rem-total-derivative-conventions-and-linear-map-seam to say that this is only
the concrete Euclidean special case and that the general linear-map page, when
built, must prove agreement rather than introduce a competing notion.

If declined: the total derivative, its uniqueness, chain rule, Jacobian
identification, and continuous-partials theorem have no well-defined target
object and the pair cannot be authored accurately.

### R2 — HIGH: the requested connected-open-set constancy theorem is too early

Problem: the prose asks for “a vanishing derivative on a connected open set
implies constancy.” The general connected-space definition is homed at order
253 and the Euclidean polygonal-connectedness theorem at order 257, both after
this page. Neither is a legal dependency at order 229. Proving the result from
scratch here would duplicate a later topology development and create an
undeclared forward seam.

Recommendation: replace it here by
cor-zero-total-derivative-on-a-convex-open-set-is-constant, obtained directly
from the mean-value inequality. Restore the stronger connected-open-set
statement only after connectedness and Euclidean polygonal connectedness are
available.

If declined: the item either contains an illegal forward dependency or an
unstated polygonal-connectivity argument, both load-bearing defects.

### R3 — HIGH: several requested B examples duplicate published B-page items

Problem: “a differentiable function that is not C1” is already
ex-differentiable-function-with-discontinuous-derivative on
darboux-lhopital-and-taylor-examples. The x^4 failure of the second-derivative
test is already ex-zero-second-derivative-extremum-trichotomy on the same
published B page. Absolute-value nondifferentiability is already
cex-absolute-value-is-not-differentiable-at-zero on another B page. B pages are
leaves, so this pair may neither cite those items as dependencies nor remint
their statements under new ids.

Recommendation: omit the differentiable-not-C1 and quartic items. Retain only the
new assertion ex-absolute-value-is-convex, and mention the existing
nondifferentiability item by an ordinary reader link, never as a dependency.
Use the cubic inflection example instead of x^4.

If declined: the library gains duplicate public statements and/or a forbidden
B-to-B dependency edge.

### R4 — MEDIUM: the slit-annulus angle example is unavailable at this order

Problem: Lebl’s angle function is an excellent connected nonconvex witness for
the failure of a global Lipschitz conclusion, but writing it here requires an
angle/arctangent construction. The sine/cosine page is another concurrent
frontier-7 batch and is not shared published material; no arctangent item is
available.

Recommendation: defer the angle-function item. Use the elementary locally
constant step map on R minus {0} to show that a zero derivative on a nonconvex
open domain does not imply a global Lipschitz bound. This replacement is marked
ai-generated, is not a dependency of anything, and has a mandatory
counterexample-search/quantifier audit.

If declined: authoring must either introduce undeclared trigonometric machinery
or rely on another concurrent batch, violating the frozen-context rule.

### R5 — MEDIUM: the prose’s directional-derivative formula is not the clean sourced witness

Problem: the prose names x^3/(x^2+y^2). Lebl’s worked, directly checkable
example is x^2 y/(x^2+y^2), whose directional-derivative map is visibly
nonlinear. Keeping exact source fidelity is preferable.

Recommendation: use cex-directional-derivatives-without-total-differentiability
with formula x^2 y/(x^2+y^2), as in Lebl §8.3.3. The contradiction is exactly
that total differentiability would make the directional-derivative map linear.

If declined: the alternative can still be checked, but it adds unnecessary
source deviation and a second formula to audit.

## 2. Applyable prose-scaffold amendments

### 2.1 Convexity block

File: research/plan-realanalysis-pages.md

Section: RA-17 Convexity

Replace this exact paragraph:

    convex and concave functions; midpoint convexity; supporting lines; convex iff
    the derivative is increasing iff f'' >= 0; convex implies continuous on the
    interior; **convex implies differentiable off a countable set, with one-sided
    derivatives everywhere**; Jensen's inequality; inflection points. B: |x| convex
    and not differentiable; a **discontinuous midpoint-convex function** (midpoint
    convexity without measurability does not give convexity); Jensen applied;
    x^4 defeats the second-derivative test.

with:

    convex, strictly convex, concave and midpoint-convex functions; the three-slope
    inequality; local Lipschitz continuity in the interior; finite one-sided
    derivatives and supporting lines; convex functions are differentiable off an
    at-most-countable set; for differentiable functions, convexity iff the derivative
    is nondecreasing, and for twice-differentiable functions iff the second derivative
    is nonnegative; a differentiable convex function has continuous derivative;
    continuous midpoint convexity implies convexity; finite Jensen; local minima are
    global and strict convexity gives uniqueness; inflection points by change of
    convexity. B: absolute value is convex (its already-published
    nondifferentiability item is linked but not cited); weighted mean-square from
    finite Jensen; assuming Choice, a discontinuous midpoint-convex Hamel coefficient
    map; and the cubic inflection point. The already-published x^4
    second-derivative-test witness is not duplicated.

Append to the existing Scope note 2026-07-27:

    FRONTIER-7 BATCH-3 AMENDMENT (2026-08-01). The midpoint-convex regularity
    theorem derives dyadic approximation inline because
    def-the-dyadic-rationals-of-the-unit-interval is homed after this page and is
    not a legal dependency. When that later definition is read, the two dyadic
    conventions must agree. The Hamel witness cites only the A-page items
    lem-hamel-basis-exists and thm-cauchy-functional-equation-regularity; it does
    not cite the published B-page Hamel example.

### 2.2 Total-derivative block

File: research/plan-realanalysis-pages.md

Section: RA-34 The Total Derivative in R^m -> R^n

Replace the two paragraphs beginning “directional and partial derivatives” and
“B: xy/(x^2+y^2)” with:

    a native Euclidean definition of a linear map R^m -> R^n, its unique matrix
    representation and a norm bound, with an explicit future agreement seam to
    the unbuilt general linear-map page; convex subsets of Euclidean space;
    directional and partial derivatives; the total (Fréchet) derivative;
    uniqueness; a local linear increment bound and differentiable implies
    continuous; the derivative computes all directional and partial derivatives;
    the Jacobian; the gradient and steepest ascent; algebra of derivatives; the
    chain rule; a coordinate-telescoping lemma; continuous partials imply
    differentiability; the mean-value inequality on convex open sets; and a zero
    derivative on a convex open set implies constancy. The stronger connected-open
    statement is deferred until connectedness and Euclidean polygonal
    connectedness are legal dependencies.

    B: the polynomial map (x,y) -> (1+x+2y+x^2, 2x+3y+xy) and its Jacobian;
    xy/(x^2+y^2) (partials exist, discontinuous); x^2y/(x^4+y^2) (every
    straight-line restriction tends to zero, but the function is discontinuous);
    x^2y/(x^2+y^2) (all directional derivatives exist, not differentiable);
    y(x^2+y^2)/x off x=0, extended by zero on x=0 (all directional derivatives
    at zero vanish, but the function is discontinuous); and a locally constant
    step map on the disconnected open set R minus {0} (zero derivative but no
    global Lipschitz bound). The already-published differentiable-but-not-C1
    example is not duplicated, and Lebl’s slit-annulus angle example is deferred
    until its angle-function machinery is available.

## 3. Authorship and source ledger

Every item not explicitly listed as ai-generated below is expected to have
authorship: ai-altered. The statements and proof architecture are established
in the cited literature, but Beta will personally author or materially adapt
the library statement/proof, so literature-derived would overstate the
provenance. Every such item must carry at least one of the exact URLs below in
sources.references. No item is a proved_here:false external fallback.

### 3.1 Convexity pair

Primary source C1:
https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf

Verified content: definition of convexity; secant/chordal slope inequalities;
increasing derivative and nonnegative second derivative criteria; finite
one-sided derivatives; supporting lines; local Lipschitz continuity; and
differentiability except at countably many points (Definition and Proposition
6.15, Chordal Slope Lemma, Lemma 6.16, Corollary 6.17, Theorem 6.18).

Use C1 for:

- def-convex-concave-and-midpoint-convex-functions
- lem-three-slope-inequality-for-convex-functions
- thm-convex-functions-are-locally-lipschitz-and-continuous
- def-one-sided-derivatives-of-real-functions
- thm-one-sided-derivatives-of-convex-functions
- thm-convex-functions-are-differentiable-off-a-countable-set
- def-supporting-line-for-a-real-function
- thm-supporting-lines-for-convex-functions
- thm-differentiable-convex-functions-and-monotone-derivatives
- cor-convex-differentiable-functions-have-continuous-derivatives
- cor-second-derivative-characterises-convexity
- ex-absolute-value-is-convex

Primary source C2:
https://web.stanford.edu/~boyd/cvxbook/

Verified content: official Boyd–Vandenberghe book landing page and full text for
convex-function definitions, Jensen’s inequality, first/second-order
conditions, supporting hyperplanes, and local/global minimizer consequences.

Use C2 for:

- thm-finite-jensen-inequality
- cor-local-minima-of-convex-functions-are-global
- cor-strictly-convex-functions-have-at-most-one-minimizer
- ex-finite-jensen-gives-the-mean-square-inequality
- and as a second source for the basic convexity/derivative items above.

Primary source C3:
https://doi.org/10.4153/CJM-1950-046-x

Verified content: Green–Gustin, Quasiconvex Sets, Canadian Journal of
Mathematics (1950), especially the historical/source discussion at pp. 504–505:
midpoint convexity, dyadic/rational convexity, continuity implying convexity,
and discontinuous additive functions constructed through a Hamel basis.

Use C3 for:

- lem-midpoint-convexity-extends-to-dyadic-weights
- thm-continuous-midpoint-convex-functions-are-convex
- cex-discontinuous-midpoint-convex-hamel-function
- rem-convexity-conventions-and-choice

Primary source C4:
https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph

Verified content: continuity plus change of concavity as the definition of an
inflection point, the second-derivative sign test, and the warning that
f''(c)=0 alone does not imply an inflection point.

Use C4 for:

- def-inflection-point-by-change-of-convexity
- cor-second-derivative-sign-change-gives-an-inflection-point
- ex-cubic-has-an-inflection-point-at-zero

No convexity item is expected to be ai-generated.

### 3.2 Total-derivative pair

Primary source T1:
https://www.jirka.org/ra/html/sec_svtheder.html

Verified content:

- Definition 8.3.1, total derivative as a unique linear first-order
  approximation;
- Proposition 8.3.2, uniqueness;
- Proposition 8.3.5, differentiability implies continuity;
- Theorem 8.3.7, chain rule;
- Definition 8.3.8 and Proposition 8.3.9, partial derivatives and Jacobian;
- the gradient and directional-derivative formula;
- Proposition 8.3.16, continuous partials imply differentiability;
- Examples 8.3.18–8.3.21, the polynomial and pathologies used on the B page.

Use T1 for every A-page item from def-euclidean-linear-map through
thm-continuous-partial-derivatives-imply-total-differentiability, and for:

- ex-polynomial-map-total-derivative-and-jacobian
- cex-partial-derivatives-without-continuity
- cex-directional-derivatives-without-total-differentiability
- cex-zero-directional-derivatives-without-continuity

Primary source T2:
https://www.jirka.org/ra/html/sec_svthedercont.html

Verified content: Proposition 8.4.2 mean-value inequality, the convex-domain
Lipschitz argument, the slit-domain warning, Corollary 8.4.4 zero derivative on
a connected open set, and Proposition 8.4.6 continuous partial derivatives.

Use T2 for:

- def-convex-subset-of-euclidean-space
- thm-mean-value-inequality-for-total-derivatives
- cor-zero-total-derivative-on-a-convex-open-set-is-constant
- rem-total-derivative-conventions-and-linear-map-seam

Primary source T3:
https://faculty.etsu.edu/knisleyj/multicalc/Chap2/Chap2-2/2-23.html

Verified content: the exact x^2y/(x^4+y^2) example and its purpose, showing that
agreement of all straight-line limits does not establish a multivariable limit.

Use T3 for:

- cex-straight-line-continuity-tests-do-not-imply-continuity

The following counterexample is expected to be ai-generated:

- cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz
  - generation.role: counterexample
  - it is checkable by direct substitution and is not a dependency of any item;
  - Step 5 must record the unique AI-generation tag;
  - Step 6/Alpha must independently search for a counterexample to each
    quantified clause, specifically openness of the two-component domain,
    zero total derivative at every point, and failure for every proposed
    Lipschitz constant.

All other total-derivative items are expected to be ai-altered and source-backed
by T1 and/or T2.

## 4. Dependency-source ledger and exact-fidelity notes

Every published dependency proposed in frontier-7-batch-3.pages.json was opened
from disk and checked for status: published and for its actual Statement or
Definition. The central published page dependencies were also opened in full:

- library/real-analysis/darboux-lhopital-and-taylor.md
- library/real-analysis/rn-as-a-normed-space.md

The following exact limitations are binding on authoring:

- thm-darboux-theorem-for-derivatives says only that a derivative on an
  interval has the intermediate-value property.
- cor-injective-or-monotone-derivative-is-continuous says that an injective or
  monotone derivative on an interval is continuous. It does not say an
  arbitrary monotone function is continuous.
- thm-monotonicity-from-the-derivative has weak and strict directions stated
  separately and explicitly rejects the strict converse.
- thm-froda applies to a monotone real function on an order-convex domain and
  gives an at-most-countable discontinuity set.
- lem-hamel-basis-exists assumes AC and supplies a coefficient map whose
  complementary span is nontrivial. The counterexample must preserve that
  assumption and must not cite ex-hamel-basis-additive-function.
- def-vector-valued-functions-limits-and-continuity and all relevant R^n
  metric items assume positive codomain dimension. This batch therefore uses
  m,n >= 1 and treats R^1 through the published coordinate identification.
- thm-mean-value-inequality is for a curve [a,b] -> R^n. The several-variable
  theorem must obtain its curve by segment parametrization and the new total
  chain rule; it may not cite the curve theorem as though it already had a
  multivariable domain.
- rem-rn-conventions-and-scope explicitly reports the missing linear-map
  definition. The new special-case definition must not pretend that gap was
  absent.

No load-bearing dependency is external. No proved_here:false fallback is
proposed. Every load-bearing input is published, earlier on the same page, or
proved inside the pair.

## 5. Boundary and proof-obligation map

The machine-readable, per-item version is
research/frontier-7-batch-3.proof-contracts.json. The cross-item obligations
that Step 5 must preserve are:

- Empty and singleton intervals: convexity is vacuous; local-minimum and
  uniqueness corollaries must not assert existence.
- Endpoint scope: local continuity and one-sided derivative theorems are stated
  on the interior/open interval. No endpoint continuity is inferred from
  convexity alone.
- Weights zero and one: both convexity and Jensen include them; finite Jensen
  starts with a positive number of terms and never normalizes an empty family.
- Midpoint dyadics: the induction includes n=0 and k=0, and all natural numbers
  inside real arithmetic use the canonical embedding.
- Iff directions: derivative monotonicity and second-derivative
  characterization both require independent forward and reverse proofs.
- Dimensions: total-derivative results carry m,n >= 1; no maximum or standard
  basis over an empty index set is used.
- Zero vector and zero increment: uniqueness, directional derivatives, chain
  rule, steepest ascent and mean-value inequality each have an explicit zero
  case before division.
- Openness: testing along tv in uniqueness and along coordinate increments in
  continuous-partials uses a ball contained in U.
- Convexity: the segment mean-value proof checks that every segment point lies
  in U. The nonconvex counterexample is not a refutation of the theorem because
  its domain fails exactly this hypothesis.

Long-proof decomposition performed:

- Convex regularity is decomposed through the three-slope lemma and the
  one-sided-derivative theorem.
- Differentiability off a countable set is separated from the secant-limit
  construction and consumes Froda only after a monotone right-derivative
  function is obtained.
- Continuous midpoint convexity is decomposed through the dyadic-weight lemma.
- Total derivative is decomposed through Euclidean linear-map
  matrix/boundedness, uniqueness, and the local linear increment bound.
- Continuous partials is decomposed through the coordinate-telescoping lemma.
- The several-variable mean-value theorem is downstream of the total chain
  rule, not folded into it.

Corollary pass performed:

- differentiable convex implies C1;
- second derivative characterizes convexity;
- local minima of convex functions are global;
- strict convexity gives at most one minimizer;
- second-derivative sign change gives an inflection point;
- zero total derivative on a convex open set gives constancy.

No page exceeds the 100-item review ceiling.

## 6. Collision-search receipt

Exact-id search run from the repository root against items/ and
research/plan-spec.json:

    rg -n --fixed-strings -e <each of the 46 proposed ids> items research/plan-spec.json

Result: no exact id collision.

Semantic searches run:

    rg -n 'one-sided derivative|supporting line|Jensen|convex' items research/plan-spec.json
    rg -n 'total derivative|Jacobian|gradient|linear map' items research/plan-spec.json
    rg -n 'absolute.*not.*different|x\^4|differentiable function with discontinuous derivative' items research/plan-spec.json

The searches found the three B-page duplicates disposed of in R3, later
topology items that define convex subsets or dyadics at illegal higher orders,
and no existing canonical total-derivative or Euclidean-linear-map item.

## 7. Forward references, cross-batch references, and expected dependency gate

Dependencies/forward references kept: none.

Orientation-only seams, not deps:

- def-euclidean-linear-map must agree with the general linear-map definition
  when linear-maps-rank-nullity-and-quotient-spaces is built.
- the connected-open zero-derivative theorem is deferred to connectedness plus
  the topology of Euclidean space.
- the slit-annulus angle example is deferred until angle-function machinery is
  available.
- the local dyadic approximation must agree with the later published dyadic
  convention, but that later item is not cited at order 157.

Cross-batch dependencies: none. In particular, this batch does not depend on
the concurrently scaffolded sine/cosine pair or any other page in this frontier.

Expected depsource result after the orchestrator splice: zero unresolved, zero
planned-later, zero B-page dependencies. This is an expectation, not a claim
that the authoritative spliced gate has passed.

## 8. Confidence and unverified work

Confidence: high on page order, dependency closure, duplicate avoidance, and
the mathematical truth of the selected statements. The two main design changes
(native Euclidean linear maps and convex rather than connected constancy) are
necessary consequences of the actual reading order, not stylistic preferences.

Not yet verified at Steps 1–2: no item/page text exists, so proof-contract quote
matching, content-policy, linkcheck, precheck, rendering, Alpha risk review, and
judge verdicts cannot run. The Step-5 author must keep the contracts synchronized
with the exact numbered proofs and exact cited clauses. The generated step-map
counterexample requires the explicit extra truth-risk audit recorded above.
