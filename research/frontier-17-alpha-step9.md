# Step 9 — scope-denial sweep, run `frontier-17`

Lead Alpha, `label: step9-lead`, `covers: all`. Nine batches, 13 A/B pairs.

## Headline

**94 declines collected, 94 re-examined, 3 overturned and built, 91 stand.**
Two further records were corrected without a build: one destination named a page
whose subject cannot carry the result, and one deferral pointed at the very pair
that was declining it.

**Every one of the run's 43 `deferred` rows named a destination.** The failure
mode this stage exists to catch — a prose-only decline, indistinguishable from a
silent drop, 52 of 68 on an earlier run — does not occur here. The 51 rows with
no destination are all `out-of-scope`, which is the shape that disposition is
for.

**Open defect-ledger rows for this run: none.** `research/defect-ledger.jsonl`
holds 332 `frontier-17` rows — 217 `fixed`, 96 `nonfatal-recorded`, 15
`narrowed`, 4 `false-positive`, **0 `open`**. There was no closing condition to
test against disk and nothing to carry to the `--no-open` gate at step 10.

## What was checked, and how

1. Every `deferred` and `out-of-scope` row in all nine
   `research/frontier-17-batch-<i>.coverage.json` files was extracted
   mechanically, not sampled: 94 rows (b1 16, b2 1, b3 23, b4 7, b5 10, b6 7,
   b7 11, b8 4, b9 15).
2. **Destination existence.** All 20 distinct named destinations were resolved
   against `research/plan-spec.json`. Every one exists. Three rows name
   `owner-decision` instead of a page; they are listed below.
3. **Destination publication state.** Each of the 16 destinations outside this
   run was searched for under `library/`: **all 16 are absent** — planned pages
   with no file. So no decline defers a result to a page that is already
   published and therefore will never be retro-filled. That is the honest
   answer, and it is the one that matters: a deferral to a future page is
   recoverable, a deferral to a closed one is a drop.
4. **Destination subject.** Each destination's `plan-spec` title, category and
   `order` were read against the result deferred to it. Every subject covers its
   result except one (D54, corrected below), and every deferral moves **forward**
   in reading order except D17, which points backwards inside this same run and
   is satisfied on disk.
5. **Reasons true of disk.** Every reason asserting that the library lacks
   machinery, or that a retained item already covers the ground, was checked
   against `items/` and `library/`. Details below.

## Overturned — three results built

### 1. `ex-orthogonal-group-is-a-regular-level-set` (batch 4)

The decline (Tu, *An Introduction to Manifolds*, Example 11.3, the orthogonal
group) read: *"The orthogonal-group application uses Lie-group and manifold
structure rather than the Euclidean level-set examples developed in this pair."*

**That reason is false**, and it is false about the mathematics rather than about
the disk. Tu presents the example in a manifold chapter, but the statement needs
nothing from that chapter. Reading $M_n(\mathbb R)$ as $\mathbb R^{n^2}$ and the
symmetric matrices as $\mathbb R^{n(n+1)/2}$, the map $f(A)=A^{\mathsf T}A$ is a
polynomial map between Euclidean spaces; its derivative is
$Df(A)H=A^{\mathsf T}H+H^{\mathsf T}A$; and at any $A$ with
$A^{\mathsf T}A=I_n$ the explicit witness $H=\tfrac12AS$ gives $Df(A)H=S$ for
every symmetric $S$. So $I_n$ is a regular value in exactly the sense
`def-regular-critical-points-values-and-level-sets` defines, and
`cor-regular-level-set-local-graph-theorem` — already on the A page — delivers
the local $C^\infty$ graph of dimension $n^2-n(n+1)/2=n(n-1)/2$. No atlas, no
Lie group, no embedding theorem.

What the pair was missing without it is not decoration. Its four positive
level-set examples were a sphere, an ellipsoid, a graph and a hyperboloid — all
quadrics or graphs, all with a one-dimensional codomain. This is the pair's only
example with a target of dimension greater than one, which is the only place the
*vector-valued* normal form does any work, and its tangent space
$T_AO(n)=\{AK:K^{\mathsf T}=-K\}$ is the first tangent computation on the page
that is not read off a gradient.

I authored the item and its proof, including both inclusions of the tangent-space
identity and the $n=1$ degenerate case ($O(1)=\{1,-1\}$, graph dimension $0$).
The harvest row is now `included`.

### 2. `ex-lagrange-multipliers-with-two-constraints` (batch 4)

The decline (Toronto MAT237 §2.8, Example 5: minimise $xy+xz+yz$ subject to
$x^2+y^2+z^2=2$ and $z=1$) deferred the result to
`constant-rank-submersions-and-regular-level-sets-examples` — **the companion
page of the very pair that was declining it.** A deferral whose destination is
the page under construction is not a deferral; nothing downstream can act on it,
and the `3-fix` and step-6 loops had already closed.

Checked against disk, the gap it left is real. The A page proves
`thm-lagrange-multipliers-for-regular-level-set-constraints` for a
**vector-valued** constraint $G:U\to\mathbb R^q$, and the B page's only
multiplier example, `ex-lagrange-multipliers-on-the-sphere`, exercises the
$q=1$ corollary. The page's main multiplier theorem had no worked example at
all.

MAT237's Example 5 is exactly that witness, and it carries more than arithmetic:
of the four solutions of the multiplier system on the circle, three are extrema
and the fourth, $(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2},1)$ with
$f=\tfrac12-\sqrt2$, is neither — a concrete instance of the theorem's own
closing sentence that the condition is necessary and not sufficient.

I authored the item and its proof. The extrema are determined **independently of
the multiplier rule**, by substituting $s=x+y$ to get $f=(s^2+2s-1)/2$ with
$-\sqrt2\le s\le\sqrt2$ and two elementary inequalities; the multiplier
computation is then compared against that answer, which is what makes the fourth
solution's status a verified fact rather than an assertion. That route also keeps
the item inside the page's closure — no compactness or extreme-value machinery is
cited. The harvest row is now `included`.

### 3. `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant` (batch 3)

The decline (Brussel, *Finitely Generated Modules over a PID*, Theorem 4.2.1 —
finite index of a full-rank subgroup and the determinant formula for its order)
read: *"The finite-index determinant formula is a lattice-index theorem rather
than module classification; Smith data already supplies every algebraic quotient
invariant used here."*

Unlike the first two, nothing in that sentence is factually false. What is wrong
is the disposition. `out-of-scope` is licensed for another page's topic or a
subject area the library has not reached (`CLAUDE.md`, self-contained scope), and
this is neither: the row names **no destination**, no page in `plan-spec.json`
carries lattice index, and the result is about $\mathbb Z$-modules, which is this
page's own topic — the page contains `prop-abelian-groups-are-z-modules` and
`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`.
A decline to nowhere, of a result on the page's own subject, is a drop.

Two neighbouring rows explain how it happened: Brussel §4.2 and Example 4.2.2
concern lattice **covolume**, and those declines are right — Euclidean volume is
genuinely absent. The index theorem was swept along with them, and it needs no
volume at all. Its proof is four steps from theorems the page already proves:
Smith normal form $PAQ=D$ over $\mathbb Z$, $Q\mathbb Z^n=\mathbb Z^n$ and the
automorphism $P$ to replace $L$ by $D\mathbb Z^n$, the first isomorphism theorem
to identify $\mathbb Z^n/D\mathbb Z^n$ with $\bigoplus_i\mathbb Z/d_i\mathbb Z$,
and $\lvert\det D\rvert=\lvert\det A\rvert$ because a matrix invertible over
$\mathbb Z$ has determinant $\pm1$. Both cases are stated: finite of order
$\lvert\det A\rvert$ when $\det A\ne0$, infinite when $\det A=0$.

I authored the item and its proof. The harvest row is now `included`.

## Corrected without a build — two records

### D54 — a destination whose subject cannot carry the result

Batch 5 deferred *"2.4(f), surface area of an n-ball as the derivative of its
volume"* (Toronto MAT237Y1 Gamma/Beta handout) to
`regular-surfaces-and-surface-integrals`, on the ground that the assertion
"requires the surface integration definition and area formula assigned to the
regular-surfaces page."

That page is in this run, and it is read: `def-cross-product-in-r3`,
`def-admissible-regular-parametrized-surface-patch`,
`thm-surface-area-density-is-cross-product-norm`. It develops **two-dimensional
patches in $\mathbb R^3$ through the cross-product area density**, and cannot
state the $(n-1)$-dimensional surface measure of an $n$-ball for general $n$. The
destination is wrong, and this is exactly the failure task item 3 names: a
decline to a page whose subject does not cover the result.

The decline itself **stands** — the library has no $(n-1)$-dimensional surface
measure anywhere, so this cannot be built here — but the record was false. I
retargeted it to `hausdorff-measure-and-hausdorff-dimension` (plan-spec order
288.041, measure-theory, unwritten), which is the page where the measure that
does carry the statement is planned, and rewrote the reason to say why the
surfaces page cannot.

### D43 — a self-referential deferral

MAT237 §2.8 Example 4 (parameter-dependent circle constraint) was `deferred` to
`constant-rank-submersions-and-regular-level-sets-examples`, its own pair's
companion, with the note that it "remains recoverable as another worked
constraint example". After D44 was overturned and built, the page carries a
single-constraint multiplier example and a two-constraint one; a third
single-constraint computation adds case algebra and no new result. I reclassified
the row as `out-of-scope` against those two named items, which is what it always
was.

## Declines whose reasons needed a disk check, and what disk said

| ref | claim under test | verdict |
|---|---|---|
| D15, D16 | Craven Prop. 1.3 and Def. 2.26 are "not used by the Frattini-quotient or Burnside-basis arguments" | **true** — all 36 items of the Frattini pair searched: no occurrence of an $\Omega$ subgroup or of the nilpotent-automorphism decomposition |
| D17 | the Washer Method belongs to `volumes-of-elementary-solids-and-solids-of-revolution` | **honoured** — `cor-washer-method-for-solids-of-revolution` is on that page, authored in this run. Backwards in reading order (288.00009 < 288.00025) but satisfied on disk |
| D21, D24, D26, D30, D33, D37 | a retained item already covers the declined example | **true** — `ex-d-four-galois-correspondence-for-x-four-minus-two`, the A₃/S₃ cubics, `fs-characteristic-and-minimal-polynomials-determine-similarity`, `fs-torsion-free-modules-over-pids-are-free-without-finite-generation`, `ex-smith-normal-form-of-an-explicit-integer-matrix` and `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six` all exist |
| D34, D36 | lattice covolume "requires Euclidean volume and geometric measure" | **true** — and the reason does *not* extend to the index theorem, which is D35, overturned above |
| D41, D46 | the manifold atlas and embedding machinery is not available | **true** — no page under `library/` mentions manifolds or atlases; the b4 pair is Euclidean throughout |
| D47 | the source's whole-cone $C^\infty$ claim is wrong at the apex | **true, and correctly declined** — the pair instead carries `cex-cone-level-set-has-a-rank-drop-at-the-apex`. Declining a false source statement is the right act |
| D50 | "this pair uses the published closed Euclidean ball" | **true** — `def-euclidean-spheres-and-closed-balls` is published, and `thm-volume-recursion-for-closed-euclidean-balls` proves its Jordan measurability on the page |
| D52–D57 | the real/complex Gamma seam assigns these to `the-gamma-function` | **true of disk** — the seam is recorded in `research/frontier-17-batch-5.notes.md` line 52 and was adjudicated at step 3 (`frontier-17-alpha-a-step3-scaffold-review.md`: "valid destinations under the settled real/complex Gamma seam"); `the-gamma-function` is a planned complex-analysis page at order 343 whose `requires` include the residue theorem. See the note below |
| D58–D60 | no retained theorem consumes inner measure or saturation | **true** — all 43 items of the b6 pair searched: no occurrence of either |
| D61–D64, D76, D78 | Lebesgue measure, Hausdorff measure, residues and the Poisson integral are not available | **true** — none of those pages exists under `library/` |
| D80 | "the general reflective-inclusion theorem is already published" | **true** — `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory`, `status: published`, on `library/category-theory/monads-comonads-and-their-algebras.md`, a declared prerequisite of this pair |
| D83 | "the maybe-monad example already supplies the strict-versus-ordinary comparison" | **true** — `ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic` is on the B page |

### One decline that stands but is a design choice, not an impossibility

D53, the **Legendre duplication formula**, is deferred to `the-gamma-function`
with the reason itself conceding *"even though its positive-real restriction is
elementary."* That is accurate in both directions, and the owner should see it
stated plainly rather than buried in a table.

The positive-real case is buildable on this page today, in one lemma: applying
`thm-bohr-mollerup-characterisation-of-the-real-gamma-function` to
$f(s)=2^{s-1}\pi^{-1/2}\Gamma(s/2)\Gamma((s+1)/2)$ — which satisfies
$f(s+1)=sf(s)$, has $f(1)=1$ by `cor-real-gamma-one-half-is-root-pi`, and is
log-convex by `thm-real-gamma-is-log-convex` — gives
$\Gamma(s)=2^{s-1}\pi^{-1/2}\Gamma(s/2)\Gamma((s+1)/2)$ directly.

I did **not** build it, and the reason is not that it is hard. The seam is a
recorded design decision, adjudicated at step 3 by the group Alpha that read the
pair, and `the-gamma-function` is a real planned page whose scope covers it. Step
9's licence is to overturn declines resting on false claims; this one rests on a
true one. Reversing a settled reading-order decision at step 9 — after the text
froze and the judges ran — is an owner call, and this is where to ask for it.
The companion decline D56, Euler reflection, is a different case and stands
outright: it needs the sine product or a contour argument, neither of which is
in this page's closure.

## The three `owner-decision` declines

These name no page because no page is right for them. Recorded here, not
invented into a destination.

- **D1** (b1, Hackman E.I.5) — a third construction algorithm for the prime
  two-square theorem, by infinite descent. The pair keeps the finite-collision
  and Extended-Euclid routes. Under the second-proof rule (owner, 2026-08-20) a
  genuinely different route is welcome; this one has no distinct downstream
  claim, so it is a richness question rather than a gap.
- **D45** (b4, Taylor Exercise 16) — three coordinate-square scalar surface
  integrals on the inner tube of a torus. The torus parametrisation is retained
  (`ex-torus-surface-area`); these are three more moment computations on it.
- **D68** (b7, Hatcher Example 1.25) — the surjection from $\pi_1$ of the
  shrinking wedge onto the countable product of copies of $\mathbb Z$, and
  through it the uncountability of the Hawaiian-earring group. The page's design
  admits essential small loops (`ex-hawaiian-earring-retracts-onto-each-circle`)
  and excludes the group's cardinality structure; opening it is a scope decision.

## Ledger

No `frontier-17` row carries `disposition: open`, so there was no closing
condition to test and no row to update. The three overturns exposed **scope**
defects rather than mathematical ones — no proof on disk was wrong, no statement
was false — so under the ledger schema they are not defect rows: nothing was
repaired, three results were added. The defect ledger is unchanged by this stage,
which `defect-ledger.mjs check` confirms below.

## Items and pages changed

Added, with their proofs authored here and their contract entries written into
the owning batch contract (never only the merged file):

| item | page | batch |
|---|---|---|
| `ex-orthogonal-group-is-a-regular-level-set` | `constant-rank-submersions-and-regular-level-sets-examples` | 4 |
| `ex-lagrange-multipliers-with-two-constraints` | `constant-rank-submersions-and-regular-level-sets-examples` | 4 |
| `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant` | `modules-over-a-pid-and-canonical-forms` | 3 |

Page item lists updated in `library/real-analysis/constant-rank-submersions-and-regular-level-sets-examples.md`
and `library/abstract-algebra/modules-over-a-pid-and-canonical-forms.md`; batch
manifests 3 and 4 updated; both spliced into `research/plan-spec.json` with
`splice-plan.mjs --batch <i> --update`. Neither page grew past its size limit
(14 and 38 items). No item was deleted, renamed or reordered, and no published
item outside the level was touched.

Coverage rows changed: batch 3 one row to `included`, batch 4 two rows to
`included` and one reclassified `deferred`→`out-of-scope`, batch 5 one
destination and reason corrected.

## Adversarial read of the three builds, and the risk reviews

`risk-report.mjs` tiers all three new items **critical**, so each is owed an
additional refuter and a complete Alpha `risk_review` (`CLAUDE.md`,
high/critical routing). I dispatched one read-only refuter over all three items
and their declared dependencies —
`research/frontier-17-dispatch/refuter-s9-builds.{prompt.md,log,result.json}`,
`claude-opus-5[1m]`, `--sandbox read-only`, 494 s, exit 0. Its task file is
`research/frontier-17-alpha-step9-refuter.task.md`. **It found a fatal defect in
one of my own items, and it was right.**

### S9-1 — fatal, confirmed, repaired

`ex-lagrange-multipliers-with-two-constraints`, title / Example / step 6.1 / the
`endpoints` boundary row.

My first draft claimed the fourth multiplier solution
$P_4=(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2},1)$ was "neither a maximum nor a
minimum", and concluded from that that the multiplier condition is necessary and
not sufficient.

**$P_4$ is a strict local maximum.** On $M$, $f=g(s)$ with
$g(s)=(s^2+2s-1)/2$ and $s=x+y\in[-\sqrt2,\sqrt2]$; $g$ is strictly decreasing on
$[-\sqrt2,-1]$, and $s=-\sqrt2$ is the *left end* of the range — being an
endpoint is exactly why it is a local extremum. Verified independently: for
$p\in M$, $\lVert p-P_4\rVert_2^2=(x^2+y^2)+\sqrt2(x+y)+1=2+\sqrt2\,s$, so
$0<\lVert p-P_4\rVert_2<\sqrt{2-\sqrt2}$ is exactly $-\sqrt2<s<-1$, where
$g(s)-g(-\sqrt2)=(s+\sqrt2)(s+2-\sqrt2)/2<0$. All four multiplier solutions on
this circle are local extrema; three are global.

Under the charitable *global* reading the sentence was true but the inference was
not: the cited theorem's own Statement is about **local** extrema, so being
strictly between the global bounds refutes nothing about sufficiency. The title,
which dropped "on $M$", carried the false local reading. This is the defect class
the brief names — a title and Statement asserting more than the verification
gives — and it is fatal.

**Repaired by correcting the claim, not the wording** (repair 3, and the item is
still in the unfrozen step-9 window). The item now *proves* $P_4$ is a strict
local maximum, with the distance identity above turning the $s$-range into an
explicit ball, and the lesson is restated honestly: the multiplier equation is
satisfied at a point that is a local but not a global extremum, so it does not by
itself separate the two. New title: *"Two constraints on a sphere-plane circle,
where one multiplier solution is only a local maximum."* The `endpoints` boundary
row had **recorded** the false claim as its evidence; it now records what is true
and says which draft it replaced.

That row is worth naming plainly. The templated-boundary failure mode
(`frontier-13` twice, `frontier-14` three times) is a row that says nothing; this
was a row that said something false and confidently. Both are invisible to
`proof-contract --strict`, and only a reader catches either.

### S9-2 — nonfatal, applied

Same item: "critical point" was used in a sense the corpus does not supply.
`def-hessian-and-euclidean-critical-point` requires a vanishing gradient, and
$\nabla f(P_4)=(1-\tfrac1{\sqrt2},1-\tfrac1{\sqrt2},-\sqrt2)\ne0$. Every
occurrence of the phrase is gone; the item now speaks of solutions of the
multiplier equation, and cites
`def-euclidean-local-extrema-and-critical-points` for "strict local maximum".

### S9-3 — nonfatal, applied by strengthening rather than narrowing

`cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant`, title.
The title spoke of "a full-rank subgroup of $\mathbb Z^n$" while the Statement
covered only $L=A\mathbb Z^n$ for a square integer $A$; nothing showed every such
subgroup arises that way. Rather than narrow the title I added **clause 2** —
every subgroup of $\mathbb Z^n$ is $A\mathbb Z^n$ for some $A\in M_n(\mathbb Z)$
— proved in a new step 5.1 from `thm-simultaneous-basis-theorem-for-pid-submodules`,
which sits on this very page. With clause 2 the title is true and the corollary
is the stronger statement: a subgroup has finite index exactly when it is a
column lattice of nonzero determinant, and the index is that determinant.

### S9-4 — nonfatal, applied

Same item, step 1.1: that $\mathbb Z$ is a PID was load-bearing and uncited.
`[F1]` now derives it, by the same route
`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`
already uses on this page: `thm-int-comm-ring`, `lem-int-cancellation`,
`lem-subgroups-of-z-are-cyclic`, `def-principal-ideal-domain`.

My first attempt cited `ex-integers-with-absolute-value-are-euclidean` with
`thm-euclidean-domain-is-a-pid`, and `validate-plan.mjs` refused it: that example
is homed on a **B page**, and B pages must be leaves. The refusal was correct and
the second route is the one the page already used.

### Accepted without a finding

`ex-orthogonal-group-is-a-regular-level-set` — refuter verdict **accept**. It
re-derived the derivative and its symmetry, checked the witness $H=\tfrac12AS$ by
hand, verified both inclusions of the tangent-space identity independently and
confirmed the converse genuinely needs $AA^{\mathsf T}=I_n$ from step 1.2, and
checked the $0$-based index convention of the Given — a $1$-based reading would
have made $f\equiv0$ at $n=1$. Two 30-second gaps it raised and declined to
report as findings, which I agree are 30-second: the uncited
$\dim\{K:K^{\mathsf T}=-K\}=n(n-1)/2$ in step 7.1, and "injective hence
surjective" in step 1.2.

It also confirmed that no dependency of any of the three items has an
`ai-generated` `provenance.statement`, so none is ineligible as a load-bearing
dependency.

**What the refuter did not do:** it did not fetch the four external sources (Tu
Example 11.3, Lee §8, MAT237 §2.8 Example 5, Brussel Thm 4.2.1) — it verified the
mathematics directly instead — so it reports nothing on source fidelity of the
harvested statements. I read the sources' claims at scaffold time; that is the
weaker of the two checks and I am recording it as such.

A complete `risk_review` for each of the three items is written into its owning
batch contract, naming this refuter and its log, with my adjudication of every
finding.

## Gates

All run from the repo root after the repairs.

| gate | result |
|---|---|
| `precheck` (whole repo) | 4924 checked, 0 failing |
| `depcheck` | exit 0 |
| `fwdcheck` · `extcheck` · `rendercheck` · `prosecheck` · `depsource` · `pathcheck` | exit 0 |
| `validate-plan` | exit 0 (it caught the B-page leaf violation above and was right) |
| `splice-plan --verify` | 26 pages across 9 manifests — plan and manifests agree |
| `content-policy` (items) | 443 scoped items, 0 errors, 0 warnings |
| `coverage-checklist` ×9 | all clean |
| `merge-proof-contracts` | 384 scoped items from 9 batch contracts |
| `proof-contract --strict` | 0 errors, 384/384 (1 pre-existing warning, batch 9) |
| `citation-fidelity --fail-on-missing-quote` | 1388 citations, no quote-not-found, no widening |
| `boundary-audit --fail-on-contradicted --fail-on-template` | no template clusters, no contradicted rows |
| `finite-smoke` | 0 errors, 3 checks |
| `risk-report --require-reviewed` | 0 errors, 384 items routed |
| `gate-liveness --min-checks 1` | all gates live |
| `defect-ledger check` | 332 rows checked, 0 errors |

Every contract repair went into the **owning batch** file
(`research/frontier-17-batch-3.proof-contracts.json`,
`research/frontier-17-batch-4.proof-contracts.json`) and the merged file was
regenerated from them, never edited directly.

## The full decline register

All 94 declines, numbered in file order over batches 1–9 — the numbering this
report uses throughout. The `disposition` column is what the coverage file said
when this sweep began; three of those rows now read `included`.

| ref | batch | page | harvested result | was | verdict | destination / outcome |
|---|---|---|---|---|---|---|
| D1 | 1 | sums-of-two-squares | E.I.5 Example, an infinite-descent algorithm for a prime two-square representation | `deferred` | stands | `owner-decision` |
| D2 | 1 | sums-of-two-squares | E.I Exercise 1, primes represented by x squared plus 2y squared | `deferred` | stands | `positive-definite-binary-quadratic-forms-and-reduction` |
| D3 | 1 | sums-of-two-squares | E.I Exercise 2, primes represented by x squared minus 2y squared | `deferred` | stands | `pell-equations-and-generalized-pell-orbits` |
| D4 | 1 | sums-of-two-squares | E.I Exercise 3, primes represented by 2x squared plus 3y squared or x squared plus 6y squared | `deferred` | stands | `positive-definite-binary-quadratic-forms-and-reduction` |
| D5 | 1 | sums-of-two-squares | E.I Exercise 4, a constructive Extended-Euclid proof of Thue’s Lemma | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation` |
| D6 | 1 | sums-of-two-squares | E.I Exercise 5, compute large prime representations with Jacobi and Extended Euclid | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation-examples` |
| D7 | 1 | sums-of-two-squares | E.II Exercise 3, four essential representations of 9061 and the lattice-point count | `deferred` | stands | `average-orders-divisor-sums-and-representation-counts` |
| D8 | 1 | sums-of-two-squares | E.II Exercise 5, insolubility of y squared equals x cubed plus 7 | `out-of-scope` | stands | — |
| D9 | 1 | sums-of-two-squares | E.II Exercise 7, two distinct representations by x squared plus D y squared force compositeness | `deferred` | stands | `positive-definite-binary-quadratic-forms-and-reduction` |
| D10 | 1 | sums-of-two-squares | SAGE Example 5.7.2, a naive search for a two-square representation | `out-of-scope` | stands | — |
| D11 | 1 | sums-of-two-squares | Lemma 5.7.5, continued-fraction approximation with denominator at most n | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation` |
| D12 | 1 | sums-of-two-squares | Proof of Theorem 5.7.1, sufficiency via continued fractions | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation` |
| D13 | 1 | sums-of-two-squares | Remark 5.7.6, the proof gives an efficient representation algorithm | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation-examples` |
| D14 | 1 | sums-of-two-squares | SAGE Example 5.7.7, the continued-fraction algorithm for a 10-digit prime | `deferred` | stands | `regular-continued-fractions-and-diophantine-approximation-examples` |
| D15 | 1 | frattini-subgroups-and-the-burnside-basis-theorem | Proposition 1.3, automorphisms of a finite nilpotent group split over its Sylow direct factors | `out-of-scope` | stands | — |
| D16 | 1 | frattini-subgroups-and-the-burnside-basis-theorem | Definition 2.26, the Omega subgroups generated by elements of p-power-bounded order | `out-of-scope` | stands | — |
| D17 | 2 | trigonometric-and-oscillatory-examples-in-several-variables | Learning objective 2.2.3 and the Washer Method | `deferred` | stands | `volumes-of-elementary-solids-and-solids-of-revolution` |
| D18 | 3 | the-galois-correspondence | Example 3.1, automorphisms of C and rational function fields | `out-of-scope` | stands | — |
| D19 | 3 | the-galois-correspondence | Remark 4.3, the sign of a real polynomial discriminant from its nonreal roots | `out-of-scope` | stands | — |
| D20 | 3 | the-galois-correspondence | Aside 4.4, the Berlekamp discriminant in characteristic two | `deferred` | stands | `finite-fields-and-cyclotomic-extensions` |
| D21 | 3 | the-galois-correspondence | Examples 4.10–4.11, sample S_4 and D_4/C_4 quartics | `out-of-scope` | stands | — |
| D22 | 3 | the-galois-correspondence | Remark 5.4, bounded degrees imply finiteness in a separable extension but not an inseparable extension | `out-of-scope` | stands | — |
| D23 | 3 | the-galois-correspondence | Example 5.10, the complete intermediate-field lattice of Q(zeta_8)/Q | `deferred` | stands | `finite-fields-and-cyclotomic-extensions` |
| D24 | 3 | the-galois-correspondence | Examples 2.5–2.6, families of A_3 and S_3 cubics | `out-of-scope` | stands | — |
| D25 | 3 | the-galois-correspondence | Corollary 2.7, an infinite family of irreducible A_3 cubics | `out-of-scope` | stands | — |
| D26 | 3 | the-galois-correspondence | Example 3.10, a negative-discriminant D_4 quartic | `out-of-scope` | stands | — |
| D27 | 3 | modules-over-a-pid-and-canonical-forms | Remark 2.4, infinite-rank submodule freeness uses Zorn's lemma | `out-of-scope` | stands | — |
| D28 | 3 | modules-over-a-pid-and-canonical-forms | Remark 2.5, a spanning set of a finite free module need not contain a basis | `out-of-scope` | stands | — |
| D29 | 3 | modules-over-a-pid-and-canonical-forms | Examples 2.10–2.11, basis extension and its torsion-quotient failure | `out-of-scope` | stands | — |
| D30 | 3 | modules-over-a-pid-and-canonical-forms | Example 4.7, a non-finitely-generated torsion submodule need not split | `out-of-scope` | stands | — |
| D31 | 3 | modules-over-a-pid-and-canonical-forms | Definition 5.1, A-cardinality of a finitely generated torsion module | `out-of-scope` | stands | — |
| D32 | 3 | modules-over-a-pid-and-canonical-forms | Examples 5.2–5.6, A-cardinality and annihilator computations | `out-of-scope` | stands | — |
| D33 | 3 | modules-over-a-pid-and-canonical-forms | Example 4.1.2, a three-generator two-relation abelian group and its Smith generators | `out-of-scope` | stands | — |
| D34 | 3 | modules-over-a-pid-and-canonical-forms | §4.2, Volume of a Lattice Quotient | `out-of-scope` | stands | — |
| D35 | 3 | modules-over-a-pid-and-canonical-forms | Theorem 4.2.1, finite index of a full-rank subgroup and the determinant formula for its order | `out-of-scope` | **overturned** | built as `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant` |
| D36 | 3 | modules-over-a-pid-and-canonical-forms | Example 4.2.2, Euclidean volume of a full lattice quotient | `out-of-scope` | stands | — |
| D37 | 3 | modules-over-a-pid-and-canonical-forms | Example 5.4.3, three matrices with equal characteristic polynomial but two similarity classes | `out-of-scope` | stands | — |
| D38 | 3 | modules-over-a-pid-and-canonical-forms | Example 5.4.4, characteristic-polynomial coefficients from sums of diagonal minors | `out-of-scope` | stands | — |
| D39 | 3 | modules-over-a-pid-and-canonical-forms | Example 5.4.5, conjugacy-class counting in GL_n(F_q) from invariant factors | `out-of-scope` | stands | — |
| D40 | 3 | modules-over-a-pid-and-canonical-forms | Example 7.4.5, all Jordan canonical forms in dimension three over C | `out-of-scope` | stands | — |
| D41 | 4 | constant-rank-submersions-and-regular-level-sets | Proposition 8.12 (embedded submanifolds are locally submersion level sets) | `out-of-scope` | stands | — |
| D42 | 4 | constant-rank-submersions-and-regular-level-sets | Example 11.3 (Orthogonal group) | `out-of-scope` | **overturned** | built as `ex-orthogonal-group-is-a-regular-level-set` |
| D43 | 4 | constant-rank-submersions-and-regular-level-sets | Example 4 (parameter-dependent circle constraint) | `deferred` | stands | reclassified `deferred`→`out-of-scope` |
| D44 | 4 | constant-rank-submersions-and-regular-level-sets | Example 5 (minimize xy+xz+yz subject to x^2+y^2+z^2=2 and z=1) | `deferred` | **overturned** | built as `ex-lagrange-multipliers-with-two-constraints` |
| D45 | 4 | regular-surfaces-and-surface-integrals | Exercise 16, the three coordinate-square scalar surface integrals on the inner tube | `deferred` | stands | `owner-decision` |
| D46 | 4 | regular-surfaces-and-surface-integrals | Abstract manifolds and quotient surfaces mentioned after the Euclidean surface definition | `out-of-scope` | stands | — |
| D47 | 4 | regular-surfaces-and-surface-integrals | Cone example claim that the polar parametrization makes the whole cone a C-infinity surface | `out-of-scope` | stands | — |
| D48 | 5 | volumes-of-elementary-solids-and-solids-of-revolution | §4.2, Problem 2 — Revolve the parabolic cap around the line x = -1 | `out-of-scope` | stands | — |
| D49 | 5 | volumes-of-elementary-solids-and-solids-of-revolution | §4.3, Problem 3 — Revolve the parabolic cap around the line y = 2 | `out-of-scope` | stands | — |
| D50 | 5 | volumes-of-elementary-solids-and-solids-of-revolution | 5.43, Definition — open unit ball in R^n | `out-of-scope` | stands | — |
| D51 | 5 | volumes-of-elementary-solids-and-solids-of-revolution | Example 216, Gabriel's horn has infinite lateral surface area | `deferred` | stands | `regular-surfaces-and-surface-integrals` |
| D52 | 5 | the-real-gamma-and-beta-functions | 2.3(c), the diagonal Beta identity | `deferred` | stands | `the-gamma-function` |
| D53 | 5 | the-real-gamma-and-beta-functions | 2.3(d), Legendre duplication formula | `deferred` | stands | `the-gamma-function` |
| D54 | 5 | the-real-gamma-and-beta-functions | 2.4(f), surface area of an n-ball as the derivative of its volume | `deferred` | stands | destination corrected to `hausdorff-measure-and-hausdorff-dimension` |
| D55 | 5 | the-real-gamma-and-beta-functions | §1(iii), analytic Gamma on the complex right half-plane | `deferred` | stands | `the-gamma-function` |
| D56 | 5 | the-real-gamma-and-beta-functions | §1(vii), Euler reflection formula on 0 < x < 1 | `deferred` | stands | `the-gamma-function` |
| D57 | 5 | the-real-gamma-and-beta-functions | §6, complex asymptotic expansion for Gamma(z) | `deferred` | stands | `the-gamma-function` |
| D58 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Exercise 19, Inner measure characterizes measurability for an outer measure induced by a finite premeasure | `out-of-scope` | stands | — |
| D59 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Exercise 21, Saturation of the Carathéodory measure induced by a premeasure | `out-of-scope` | stands | — |
| D60 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Exercise 22(b), In general the full induced measure is the saturation of the completion | `out-of-scope` | stands | — |
| D61 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Exercise 1.7.2, Compatibility with Lebesgue measurability | `deferred` | stands | `lebesgue-measure-on-euclidean-space` |
| D62 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Remark 1.7.4, Alternate construction of Lebesgue measure through the Carathéodory theorem | `deferred` | stands | `lebesgue-measure-on-euclidean-space` |
| D63 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Remark 1.7.6, Hausdorff measure is constructed by Carathéodory's theorem | `deferred` | stands | `hausdorff-measure-and-hausdorff-dimension` |
| D64 | 6 | outer-measure-and-the-caratheodory-extension-theorem | Exercise 1.7.5, Elementary measure on the elementary Boolean algebra is a premeasure | `deferred` | stands | `lebesgue-measure-on-euclidean-space` |
| D65 | 7 | applications-of-the-fundamental-group | The higher-dimensional Brouwer fixed-point theorem, cited after Theorem 1.9 as Corollary 2.15 | `deferred` | stands | `homology-axioms-degree-and-classical-applications` |
| D66 | 7 | applications-of-the-fundamental-group | Higher-dimensional Borsuk–Ulam theorem and its n+1 versus n+2 closed-cover consequence | `deferred` | stands | `homology-axioms-degree-and-classical-applications` |
| D67 | 7 | applications-of-the-fundamental-group | General invariance of Euclidean dimension mentioned after Corollary 1.16 | `deferred` | stands | `homology-axioms-degree-and-classical-applications` |
| D68 | 7 | applications-of-the-fundamental-group | Example 1.25, the product map from pi_1 of the shrinking wedge onto the countable product of copies of Z | `deferred` | stands | `owner-decision` |
| D69 | 7 | applications-of-the-fundamental-group | Example 1.25, comparison with the countable wedge of circles | `deferred` | stands | `cw-complexes-and-cellular-homology-examples` |
| D70 | 7 | applications-of-the-fundamental-group | Example 1.25, finite-circle retractions give nonabelian free-group quotients | `out-of-scope` | stands | — |
| D71 | 7 | applications-of-the-fundamental-group | Shelah's 1988 finitely-generated-or-uncountable dichotomy for compact locally path-connected metric spaces | `out-of-scope` | stands | — |
| D72 | 7 | applications-of-the-fundamental-group | Degree of a circle self-map defined from its induced fundamental-group homomorphism | `deferred` | stands | `the-winding-number-and-the-global-cauchy-theorem` |
| D73 | 7 | applications-of-the-fundamental-group | Theorem, a degree-n complex polynomial has n roots counted with multiplicity | `deferred` | stands | `the-argument-principle-and-rouche` |
| D74 | 7 | applications-of-the-fundamental-group | Problem 1, the number of polynomial roots inside the unit circle is the degree of the normalized boundary map | `deferred` | stands | `the-argument-principle-and-rouche` |
| D75 | 7 | applications-of-the-fundamental-group | Problem 2, a circle self-map of degree different from one has a fixed point | `deferred` | stands | `the-winding-number-and-the-global-cauchy-theorem` |
| D76 | 8 | the-identity-theorem-and-the-open-mapping-theorem | Lemma 5.6.2, contour-integral representation of the inverse of an injective holomorphic function | `deferred` | stands | `the-residue-theorem` |
| D77 | 8 | the-identity-theorem-and-the-open-mapping-theorem | Exercise 2.29, avoidance of the prescribed alternating values f(1/n)=(-1)^n/n^3 | `out-of-scope` | stands | — |
| D78 | 8 | the-identity-theorem-and-the-open-mapping-theorem | Exercise 1.9, a bounded upper-half-plane holomorphic function real on the boundary is constant | `deferred` | stands | `harmonic-functions-and-the-poisson-integral` |
| D79 | 8 | the-identity-theorem-and-the-open-mapping-theorem | Exercise 1.16(1), monotonicity of the radial polynomial maximum divided by the leading power | `out-of-scope` | stands | — |
| D80 | 9 | monadicity-and-becks-theorem | Exercise 5.3.ii: revisit examples of reflective subcategories as idempotent-monad algebras | `out-of-scope` | stands | — |
| D81 | 9 | monadicity-and-becks-theorem | Exercise 5.4.i: reinterpret the canonical abelian-group presentation using cokernels | `out-of-scope` | stands | — |
| D82 | 9 | monadicity-and-becks-theorem | Corollary 5.5.3(iii): lattices and meet or join semilattices are monadic over Set | `out-of-scope` | stands | — |
| D83 | 9 | monadicity-and-becks-theorem | Corollary 5.5.3(iv): pointed sets are monadic over Set | `out-of-scope` | stands | — |
| D84 | 9 | monadicity-and-becks-theorem | Example 5.5.7(iii): diagram evaluation or restriction functors are monadic | `deferred` | stands | `kan-extensions-density-and-the-free-cocompletion` |
| D85 | 9 | monadicity-and-becks-theorem | Example 5.5.7(iv): categories are monadic over reflexive quivers | `out-of-scope` | stands | — |
| D86 | 9 | monadicity-and-becks-theorem | Exercise 5.5.v: evaluation from a functor category is monadic | `deferred` | stands | `kan-extensions-density-and-the-free-cocompletion` |
| D87 | 9 | monadicity-and-becks-theorem | Exercise 5.5.vi: monadic restriction along suitable functors | `deferred` | stands | `kan-extensions-density-and-the-free-cocompletion` |
| D88 | 9 | monadicity-and-becks-theorem | Exercise 5.5.vii: recover models of a finitary monad from its Lawvere theory | `out-of-scope` | stands | — |
| D89 | 9 | monadicity-and-becks-theorem | Example 5.6.8: the p-adic integers as a limit of quotient rings | `out-of-scope` | stands | — |
| D90 | 9 | monadicity-and-becks-theorem | Definition 5.24: the monadic tower and monadic length | `out-of-scope` | stands | — |
| D91 | 9 | monadicity-and-becks-theorem | Example 5.25: examples of adjunctions with monadic length two and infinity | `out-of-scope` | stands | — |
| D92 | 9 | monadicity-and-becks-theorem | Beyond Manes' theorem: lax ultrafilter algebras on Rel describe topological spaces | `out-of-scope` | stands | — |
| D93 | 9 | monadicity-and-becks-theorem | Beyond Manes' theorem: prime-filter algebras on Poset describe compact pospaces | `out-of-scope` | stands | — |
| D94 | 9 | monadicity-and-becks-theorem | Definition 4.2: λ-sifted diagrams | `out-of-scope` | stands | — |

Reading-order check: every deferral moves forward in `plan-spec` order except
D17, which points backwards inside this same run (288.00025 → 288.00009) and is
satisfied on disk. The three `owner-decision` rows are D1, D45 and D68.

## Judge closure after the builds

`level-coverage --judge-only --verify-current-context` over all nine manifests,
against the tree as it stands:

```
scope 443 items · 440 pairs complete · unadjudicated 0 · open fatal 0
needs_rejudge 3:
  cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  ex-lagrange-multipliers-with-two-constraints
  ex-orthogonal-group-is-a-regular-level-set
```

The receipt is written to `research/frontier-17-judge-closure.json`. Three
errors, all of the same kind — `judge-coverage-missing` on the three items built
here, which no judge has seen. Nothing else moved: **not one page-mate was
staled** by adding items to two pages, because coverage follows the item, and
every other item's own text is byte-identical to what its verdicts were cast
against (`level-coverage.mjs`, clause (b)).

I did not run the sweep. Judging is the engine's: the `9-scope` gate fails on
`judge-closure` and its mechanical repair is
`judge-sweep.mjs --pages <A page ids>`, whose currency rule spends a call only on
an item with no current verdict. So the bill for this stage is three items across
two lanes, not two pairs.

`manifest-integrity --run frontier-17`: 26 pages owed, 26 in the manifests, no
scope drift.

## Honest remaining gaps

1. **The three new items are unjudged.** Until the paired DeepSeek/Opus sweep
   runs, they carry a `risk_review` and one adversarial read, and no judge
   verdict. That is the stage's own gate, not a surprise, but it is the one thing
   between this level and closure.
2. **Source fidelity of the three builds was checked by me alone.** The refuter
   verified the mathematics and said explicitly that it did not fetch Tu, Lee,
   MAT237 or Brussel. The statements are standard and I read the sources when
   adjudicating the declines, but nobody re-fetched them at authoring time.
3. **D53, Legendre duplication on the positive reals, is an owner call.** It
   stands under a design seam recorded at step 3, and it is elementary from this
   page's own Bohr–Mollerup theorem. If the seam should bend, this is the place to
   say so; I did not bend it unilaterally.
4. **D1, D45 and D68 are owner decisions by their own record** — a third
   construction route for the two-square theorem, three torus moment integrals,
   and the Hawaiian-earring cardinality direction.
5. **The `frontier-17` defect ledger has no open rows**, so nothing is deferred
   into step 10 by this stage.

Nothing here is a publish blocker that this stage could have closed and did not.

## Verdict

The scope-denial sweep is complete: 94 declines examined against disk, 3
overturned and built with their proofs and gates, 2 records corrected, 91 upheld
with evidence, 0 open ledger rows. One of my own three builds carried a fatal
overclaim, a dispatched refuter caught it, and it was repaired here rather than
recorded — which is what this stage is for.
