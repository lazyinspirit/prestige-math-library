# Level-8 batch 1 — audit notes (Beta-8-1, 2026-07-26)

Pages audited: `completeness-and-uniform-continuity` (A+B),
`topological-spaces-and-continuity` (A+B). Final page objects:
`research/level8-batch-1.pages.json` (verified: validate-plan OK, depsource
0 unresolved / 0 planned-later / 0 B-page deps, item counts and ids unchanged).

Everything below is either (1) a prose-scaffold amendment stated as an exact
edit, or (2) an authoring-time note that has no scaffold anchor but must reach
the step-5 authoring agent. Owner-decision items live in my report, not here,
except where a conditional edit depends on one (marked OWNER-CONDITIONAL).

---

## 1. Prose-scaffold amendments (apply to `research/plan-topology-track.md`)

### 1.1 T2 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T2. Topological Spaces and Continuity`
**Edit:** insert immediately after the heading line
`## T2. Topological Spaces and Continuity` (and its following blank line):

```
**Level-8 audit, 2026-07-26 (batch 1).** Five notes bind authoring of this
page pair. (1) SUBSPACE-TOPOLOGY GAP, owner decision pending: the general
subspace topology is first planned at T3, yet `lem-continuity-is-local-and-
pastes` (restrictions to cover members) and the "embedding" clause of
`def-homeomorphism-and-open-maps` need it. Recommended fix is a new item
`def-subspace-topology-top` on T2 before the pasting lemma; fallback is to
state the pasting lemma in ambient terms (for a closed cover member C and
closed Z, f^{-1}(Z) cap C is closed in X) and drop "embedding" from the def
title, deferring embeddings to T3. (2) `lem-sequential-closure-inside-closure`
no longer claims "neither implication can be reversed": the witnesses are the
cocountable-topology items on the B page, which the A-page lemma may not cite;
non-reversal is a REMARK naming `cex-sequential-closure-strictly-inside-
closure` and `cex-sequentially-continuous-not-continuous`. The cheap clause
"sequential limits need not be unique" stays (indiscrete witness, inline).
(3) The refutation of `fs-sequentially-continuous-implies-continuous` inlines
the cocountable witness on the A page (it cannot cite B): identity from
(R, cocountable) to (R, usual); not continuous because R minus (0,1) contains
a nondegenerate interval, uncountable by `cor-interval-uncountable`;
sequentially continuous because cocountable-convergent sequences are
eventually constant, via `lem-countable-iff-surjection-from-n` (a sequence's
range is countable) plus `lem-subset-of-countable`. (4) The refutation of
`fs-continuous-bijection-is-a-homeomorphism` should use the two-point witness
id: ({0,1}, discrete) -> Sierpinski (continuous bijection; inverse pulls the
non-open {0} back to an open set), which needs nothing beyond
`def-standard-topologies`; the R witness stays on the B page. (5) The closed-
pasting counterexample is R covered by its closed singletons with the
indicator of {0} (the scaffold's Z-subspace version was false: Z is discrete
as a subspace of R, so EVERY map on it is continuous).
```

### 1.2 T2 CEX list — correct the pasting witness

**File:** `research/plan-topology-track.md`
**Section:** `## T2. Topological Spaces and Continuity`, final paragraph (`CEX:`)
**Old text:**
```
a
sequentially continuous discontinuous map; the identity from the discrete to the
usual topology is a continuous bijection that is not a homeomorphism.
```
**New text:**
```
a
sequentially continuous discontinuous map; the identity from the discrete to the
usual topology is a continuous bijection that is not a homeomorphism; R covered
by its closed singletons defeats the closed pasting lemma without finiteness.
```

### 1.3 T1 citation note — extend to the interval-uncountability pattern

**File:** `research/plan-topology-track.md`
**Section:** `## T1. Metric Spaces`, the paragraph beginning
`Citation note for the metric pages (owner-approved additions of 2026-07-26):`
**Edit:** append to the end of that paragraph (after `...stay on the
bare theorem.`):

```
Level-8 addition (batch 1): "the interior of Q is empty" and every other
no-interval-inside-a-countable-set claim cites `cor-interval-uncountable` +
`thm-rationals-countable` + `lem-subset-of-countable` (a ball is a
nondegenerate interval by `lem-real-line-is-a-metric-space`, so it cannot sit
inside a countable set). No density-of-irrationals item exists or is needed
for this. Closedness of [a,b] or [a,infinity) inside a completeness argument
cites `thm-metric-sequential-closure` + `lem-limit-preserves-order`.
```

### 1.4 T1 CEX list — OWNER-CONDITIONAL (only if the sqrt swap is approved)

**File:** `research/plan-topology-track.md`
**Section:** `## T1. Metric Spaces`, citation-note paragraph
**Old text:** `the pairs
n and n + 1/n defeating uniform continuity of x^3`
**New text:** `the pairs
n and n + 1/n defeating uniform continuity of x^2`
Apply only if the owner approves replacing the cube-root item content with
sqrt/[0,infinity) (report recommendation R3).

---

## 2. Authoring-time notes (no scaffold anchor; brief the step-5 agent)

- **`def-lipschitz-holder-contraction`:** state the Hölder condition for
  x != y only (or define 0^alpha := 0 inline). `def-rational-power` gives
  a^r for POSITIVE base a only, and d(x,y) = 0 at x = y.
- **`def-standard-topologies`:** the body must discharge topology-hood of all
  six families (WORKFLOW definition-justification rule). Cofinite/cocountable
  need `lem-subset-of-countable` for arbitrary intersections of closed sets and
  `thm-countable-union-of-countable` for finite unions (both now in deps); say
  honestly that only FINITE unions are needed, so no choice is actually used
  despite the cited theorem's AC_omega hypothesis.
- **`thm-basis-criterion`:** state the nullary-intersection convention for the
  subbasis clause explicitly (empty intersection = the whole set, or require
  the subbasis to cover; pick one and say so — `rem-topology-conventions` is
  the natural home for the fork).
- **`thm-cantor-intersection-metric`:** the converse direction needs
  diam(cl A) = diam A; prove it inline from `thm-metric-closure-characterisation`
  (two closure points are within epsilon of set points, triangle inequality) —
  do not silently assume it.
- **`thm-metric-completion-exists`:** the equivalence relation on Cauchy
  sequences ((x_n) ~ (y_n) iff d(x_n,y_n) -> 0) is defined and verified inline;
  the library has no general equivalence-relation item (house practice matches
  `def-integers`). Transitivity uses the triangle inequality +
  `lem-limit-preserves-order`; well-definedness of the limit metric uses
  `lem-metric-reverse-triangle` (quadrilateral inequality) +
  `thm-algebra-of-limits` (all now in deps).
- **`thm-metric-regularity-hierarchy`:** strictness was dropped from the title
  (see report). Put it in a Remark naming the B-page witnesses
  `ex-square-root-is-half-holder` (Hölder, not Lipschitz) and
  `cex-continuous-map-destroying-cauchyness` (continuous, not uniformly
  continuous), as ordinary same-pair links, not deps — the
  `thm-metric-equivalence-hierarchy` pattern from the level-7 audit.
- **`rem-complete-metrizability-is-the-topological-shadow`:** "settled only
  much later" is a genuine forward orientation at the page
  `complete-metrizability-and-baire` (order 128). That page has no items yet,
  so no `forward_refs` id can be declared now; when it gains items, this remark
  MUST declare the Alexandroff-theorem item in `forward_refs` (fwdcheck).
  Record in the forward-refs ledger at authoring time.
- **`ex-sorgenfrey-line`:** the title and body must say "has a countable dense
  subset", never the word "separable" — no item defines separability.
  (Title still contains "separable" in pages.json; fix at authoring per this
  note, or the owner may prefer to retitle now.)
- **`cex-sequential-limits-not-unique`:** the cofinite clause is a CONDITIONAL
  general statement (any injective sequence converges to every point) —
  instantiate on N with the identity sequence, which is injective outright;
  do NOT invoke "every infinite set has a countably infinite subset", which is
  choice-dependent (`fs-infinite-has-countable-subset-in-zf`).
- **`ex-cocountable-topology-on-r`:** "eventually constant" direction: the
  range of a sequence is at most countable via
  `lem-countable-iff-surjection-from-n`; the open set is R minus
  (range minus {limit}). "Closed sets are the countable sets AND R" needs
  `thm-r-uncountable` for distinctness (now in deps; the previously listed
  `cor-irrationals-uncountable` was kept but the direct tool is preferred).
- **`ex-banach-fixed-point-for-square-roots`:** the contraction constant comes
  from the algebraic identity f(x) - f(y) = (x-y)(1/2 - 1/(xy)) — no
  derivatives (the MVT lives on a later page); self-mapping of [1,2] via
  (x + 2/x)/2 >= sqrt2 from (sqrt x - sqrt(2/x))^2 >= 0.
- **`cex-strict-contraction-without-a-fixed-point` / `fs-strict-contraction-has-a-fixed-point`:**
  d(fx,fy) = |x-y| |1 - 1/(xy)| < |x-y| needs xy > 1, which holds on
  [1,infinity) whenever x != y; no fixed point because f(x) - x = 1/x > 0
  (`lem-of-inverse-positive`); completeness of [1,infinity) via
  `thm-euclidean-space-complete` + `thm-complete-subspace-iff-closed` +
  sequential closedness (`thm-metric-sequential-closure`,
  `lem-limit-preserves-order`).
- **Indexing:** every 1/n-shaped sequence on these pages must start high enough
  under 0-indexing: (1/(k+2)) in (0,1) (baked into the
  `cex-continuous-map-destroying-cauchyness` title), d(m,n) = 1 + 1/(m+n) only
  for m != n (baked), reciprocal metrics only on the POSITIVE integers (baked).

## 3. Forward references and same-level cross-page references

- Forward references introduced by this batch: **none** in any `deps`.
  One PLANNED orientation-only forward reference:
  `rem-complete-metrizability-is-the-topological-shadow` ->
  `complete-metrizability-and-baire` (order 128), declarable only once that
  page has items (see authoring note above).
- Same-level cross-page references (to `equivalent-forms-of-completeness`,
  `series-and-nonnegative-tests`, `limits-of-real-functions` or their B pages):
  **none**, before or after my edits.
- Leaf-rule: no item on any of my four pages cites an item homed on an
  examples page of another pair; my two B pages cite only published pages,
  `metric-spaces` (level 7), their own A page, and earlier items on their own
  page. The one pressure point is the p-adic clause of
  `ex-completion-of-q-is-r` (owner decision, report R1).
