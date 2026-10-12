# Step 3a scope review — pair `roots-and-rational-powers` / `roots-and-rational-powers-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-roots-and-rational-powers-cad2b49fdde8e08a`
- Batches: 1 (A page `roots-and-rational-powers`, order 15; B page
  `roots-and-rational-powers-examples`, order 16)
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `...-batch-1.pages.json` (both pages, 38 items), the A/B entries
  in `research/plan-spec.json` (A: the same 22-item inventory; B: empty
  placeholder inventory), `...-batch-1.cross-batch-dependencies.json`,
  `...-scope-ledger.json`, `...-batch-1.notes.md`.
- Coverage: `...-batch-1.coverage.json` (2 pages, 6 source rows, 34 harvested
  results), `...-batch-1-owner-source-liveness.json`.
- Prose/design: published page `library/real-analysis/roots-and-rational-powers.md`;
  B item statements and strategies in the manifest; RA-02 in
  `research/plan-realanalysis-pages.md`; §5 (items 1–22) of
  `research/design-round2.md`.
- Owner decisions: `...-owner-authoring-direction.md` (exact scope: author the
  four missing real-analysis/set-theory B pages, preserve the published A
  pages, "substantive, source-grounded examples and counterexamples covering
  the companion A page's concepts and boundary cases… complete verification
  arguments", no load-bearing B suppliers);
  `...-batch-1-owner-proof-coverage-review.md`;
  `...-owner-batches1-3-readiness-corrections.json`.
- Step-1 drift review `...-alpha-step1-drift.md` §`roots-and-rational-powers`:
  verdict `no-drift` (all 22 current dependency lists resolve through
  `suprema-and-infima`).

## A-page scope (published, preserved)

The 22 planned items equal, item for item, the plan-spec order-15 inventory and
the design-round2 §5 skeleton, and equal the published page's front matter
(20 items + 2 false statements): finite sums/products (`def-finite-sum`,
`lem-finite-sum-laws`), integer powers (`def-integer-power`, `lem-power-laws`,
`lem-power-monotone`), Bernoulli (`lem-bernoulli-inequality`), the
difference-factorisation/Lipschitz lemma, `thm-nth-roots-exist` (explicitly
generalising the published `thm-of-square-roots`), rational powers
(`def-rational-power`, well-definedness, laws, monotonicity, with the
positive-base restriction and the zero-base supplementary clause), finite
triangle inequality, AM-GM with equality, weighted AM-GM for rational weights,
Young, Cauchy–Schwarz, Hölder, Minkowski, the two guarding false statements
(negative square root; negative-base rational powers) and
`rem-real-exponents-deferred`. That is the whole intended subject of RA-02
(roots, rational powers, classical inequalities) at the page's declared
level: exponents integer and rational only, finite algebra plus the
least-upper-bound property. The page is preserved bit-identically per the
owner's preservation check, so its scope is the published scope.

Intended role: supplier of finite sums/products, integer powers, Bernoulli and
the classical inequalities to the published real-analysis library and to this
run. Recorded consumers check out: batch 2
(`countability-and-uncountability-examples`) uses existing finite sums/products
and natural powers; batch 3 (`sequences-and-limits-examples`) uses integer
powers, power laws/positivity and Bernoulli for the promised $r^n$
classification. No consumer needs a B-page item.

## B-page scope (16 scaffolded items)

The owner direction asked for a substantive, source-grounded examples/
counterexamples page covering the A page's concepts and boundary cases, plus
the RA-02 B design (five proofs of Bernoulli, five of AM-GM, convexity and
$x\le e^{x-1}$ deferred). The scaffold delivers:

- Worked examples keyed to every concept: rational-power computations
  (including a negative exponent and the non-coprime representative
  $8^{2/6}=8^{1/3}$), odd powers as bijections of $\mathbb{R}$ ($x^3=-8$,
  $x^5=-32$), two-term AM-GM with equality and $x+x^{-1}\ge 2$, comparison
  $2^{1/3}<2^{1/2}<3^{1/3}$ (rational-power monotonicity), weighted AM-GM with
  rational weights, Young at $(2,2)$ and $(3,3/2)$, the two-term Lagrange
  identity for Cauchy–Schwarz with its equality criterion, Hölder at
  $(p,q)=(3,3/2)$ with an equality and a strict instance, and two-entry
  Minkowski with equality and strict cases.
- Counterexamples at the hypothesis boundaries: AM-GM needs nonnegative
  entries, weighted AM-GM needs normalised nonnegative weights, Minkowski needs
  $p\ge1$, Bernoulli needs $x\ge-1$, and the iterated rational-power law needs
  $a>0$ (with the correct general statement $(a^2)^{1/2}=|a|$).
- The design's proof-comparison programme in two examples
  (`ex-five-algebraic-proofs-of-bernoulli-and-rational-forms`,
  `ex-five-finite-proofs-of-am-gm-and-equality`): five complete finite routes
  each, plus the rational-exponent Bernoulli/reversed forms and the quadratic
  refinement with a natural coefficient bounded by $r/2$ (no floor supplier
  needed), with equality cases. The convexity and $e^{x-1}$ routes are
  deferred exactly as the design's own parenthetical allows, and the
  substitute routes stay inside the pair's closure.

Scope-level numeric spot checks of the witnesses (mine, this review):
AM-GM $(-1,-4)$: $G=2>-5/2$; Minkowski $p=1/2$ witness: $4>2$; weighted AM-GM
instance: $8^{2/3}=4<17/3$; $2^{1/2}<3^{1/3}$; Bernoulli $x=-4,n=3$:
$-27<-11$; $((-3)^2)^{1/2}=3\ne-3$. All fail exactly where claimed.

No B item is a load-bearing supplier for another page: a scan of all 50 batch
manifests finds only the same-page edge
`ex-minkowski-two-entry-vectors-equality-and-strict` →
`ex-cauchy-schwarz-lagrange-identity-two-terms`, and no cross-batch ledger row
names `roots-and-rational-powers-examples` as supplier. This matches the owner
direction. The B page requires only the A page; the A page requires
`suprema-and-infima` (published).

## Design-vs-inventory notes (recorded; no action required)

1. The RA-02 summary line mentions "the binomial theorem", but the binding
   22-item skeleton (design-round2 §5) and plan-spec inventory exclude it.
   The library's binomial theorem and coefficient items are homed far later
   (`finite-counting-and-binomial-coefficients`, `algebraic-extensions-…`), so
   minting one here would be a duplicate or forward dependency. The Bernoulli
   example proves the finite Pascal-row identities it needs locally. This was
   already covered by the step-1 drift verdict `no-drift`; it is not an
   omission of this pair's subject.
2. RA-02's "Bernoulli in full generality" (rational exponents, reversed range,
   quadratic/floor refinement) is delivered at pair level by the B example
   above; the A item keeps the integer form, as published.
3. The native batch worker claimed the five-proof programme could not be
   honoured; the owner repair superseded that and added the two items with
   finite routes. The subsequent owner batches1–3 corrections fixed the
   affected B contracts. Current contracts are the corrected ones.

## Prerequisite closure — no unmet prerequisites

- `node tools/manifest-deps.mjs research/...-batch-1.pages.json` → 38 items,
  0 errors.
- Independent transitive walk from the pair's 38 items over the run manifests
  and the published item files: 149 distinct ids; the only ids not yet on disk
  are the 16 batch-1 B scaffold items themselves; **0 plan-only ids, 0
  entirely missing ids**, i.e. nothing is needed that is absent from both the
  published library and this run's scaffold. Every A-page dependency
  (`lem-sup-epsilon`, `lem-sup-unique`, `def-bounded-set`,
  `thm-of-square-roots`, `lem-of-q-dense`, `thm-of-archimedean`,
  `def-real-limit`, …) is published on an earlier page.
- No forward page edge: A requires `suprema-and-infima` only; B requires A.
  No scaffold addition or pair merger is recommended.

## Source coverage

- 6 source rows across the two pages, all `fetch_verified`:
  `source-fetch-check.mjs` → 6/6 resolved, 6/6 fetch-verified.
- `coverage-checklist.mjs --require-destination` → 2 pages, 34 harvested
  results, 0 errors, 1 advisory: `coverage-low-yield` on the preserved A page
  (3/17 scaffolded) — expected, because its harvest disposes to
  `already-published` rows; the A page is preserved, not re-authored.
- `source-backing.mjs` (with the owner liveness file) → 11 authored results,
  each still backed by an openable source or documented alternative.
- Out-of-scope declines have explicit reasons (Lebl's differentiability clause
  and even-$n$ negative-root exercise, the rescaling heuristic, completeness
  clauses owned by the foundations pages; Hunter's real-$p$ restriction
  recorded openly). The two owner-added five-proof items cite MIT OCW
  Recitation 01 (AM-GM proof read in full by the owner) and Cornell's
  *Convexity, Inequalities, and Norms* Theorem 5 (statement only; its
  exponential proof is not used), with extra routes explicitly attributed as
  owner-derived.

## Checks re-run during this review

`manifest-deps` (0 errors); my closure walk (no missing/plan-only deps);
`coverage-checklist` (0 errors, 1 explained advisory); `source-fetch-check`
(6/6); `source-backing` (11/11). Step-1 drift verdict for this page:
`no-drift`. Proof correctness was not assessed here (out of scope for 3a);
strategies were read at statement/hypothesis level and the owner review was
consulted.

## Uncertainty

- Honest limit: this review establishes scope, not proof validity. The two
  five-route strategies and all B witnesses were examined at the
  statement/strategy level with numeric spot checks and the owner's
  exact-rational checks; no independent proof certification is claimed, and
  none is due at this step.
- The A page's prose claim that $x\mapsto x^n$ is a bijection of $\mathbb{R}$
  for odd $n$ (previously unproved on the page) now has a B scaffold
  (`ex-odd-roots-of-negative-reals`) — a coverage improvement, not a defect
  found in published content.

## Decision

`sufficient` for `roots-and-rational-powers`: the planned definitions, results
and examples of the pair adequately cover the intended subject, with no
unmet prerequisites and adequate source coverage. Recorded with
`tools/step3-decisions.mjs record-scope`.
