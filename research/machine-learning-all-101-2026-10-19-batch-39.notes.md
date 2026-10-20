# Batch 39 — Step 1 authoring notes

## Scope and item inventory

Pair: `nonconvex-gradient-descent-and-stationarity` (A) and
`nonconvex-gradient-descent-and-stationarity-examples` (B), category
`machine-learning`. The batch scheduling record is dependency level 2, with
prerequisite batch 38 and scheduling input
`eb6e502822da9df2ddecf2163d84fba235d04dad0019f30c62911eb0684aae75`.

The scaffold manifest now declares the owned item inventory and levels before
carrier authoring:

- `thm-smooth-bounded-below-gd-stationarity`, level 0, with direct logical
  dependencies `alg-gradient-descent`, `def-total-derivative-in-euclidean-space`,
  `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`,
  `lem-l-smoothness-descent-inequality`, and `thm-of-archimedean`.
- `ex-nonconvex-cosine-gradient-descent-has-distinct-basins`, level 1, using
  the theorem, fixed-step update, scalar-gradient convention, derivative rules,
  sine/cosine bounds and zero/period facts, and monotone convergence listed in
  the manifest. The one-dimensional absolute-value estimate needs no separate
  Euclidean-inner-product dependency.
- `ex-nonconvex-gd-path-lower-bound-with-unbounded-objective`, level 1, using
  the theorem, the gradient-descent update, Euclidean derivative conventions,
  and the geometric-sequence limit.

No in-run item supplier is used by the theorem; both examples depend on the
level-0 theorem. No cycle or new local definition is needed.

## Plan reconciliation

The controlling design is ML-38 in
`research/plan-machine-learning-track.md`, updated by the 2026-10-18 interface
repair. It says to reuse the published `alg-gradient-descent` and
`lem-l-smoothness-descent-inequality`, keep the nonconvex summation/stationarity
result local, require a fixed positive step at most `1/L`, and make no local or
global optimality claim. The refreshed `research/plan-spec.json` description
agrees with that proof route, while its page-level `requires` still lists
automatic differentiation, numerical optimization, proximal gradient,
`R^n` as a normed space, and the total derivative. The page metadata preserves
those five required pages exactly. The item dependencies contain only actual
logical suppliers; AD is optional implementation context, and no Category 3
optimization theorem is used.

The stale proposed-item wording is not followed where it conflicts with the
dated interface repair: the existing published `alg-gradient-descent` is
reused rather than duplicated. The published `ex-multimodal-nonconvex-objective`
on the required numerical-optimization examples page already supplies the
multiple-minima example; the assigned B page adds a separate globally smooth
periodic basin example and an iterate-path lower-bound example.

## Completed item: `thm-smooth-bounded-below-gd-stationarity`

Claim and conventions: for `F : R^n -> R` with continuous total derivative and
globally `L`-Lipschitz gradient, `L > 0`, fixed `0 < alpha <= 1/L`, and a real
lower bound only along
the recursively defined iterates, the descent inequality gives a bounded sum
of squared gradient norms, the finite-horizon minimum-gradient bound, and
`||grad F(w_t)|| -> 0`. The proof continues the fixed-point update if an
iterate is stationary. It claims no convergence of the iterates or minimum
attainment and uses no choice axiom.

Direct suppliers and proof route: published `alg-gradient-descent`,
`def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`,
`def-euclidean-inner-product`, `lem-l-smoothness-descent-inequality`, and
`thm-of-archimedean`. The descent lemma applies on all of `R^n`;
the fixed step satisfies its inclusive threshold. Its inspected proof uses the
chain rule for total derivatives, Euclidean Cauchy–Schwarz, the scalar mean
value theorem, finite-sum laws, induction, and the reciprocal Archimedean
property. The latter is used only to remove the mesh factor in that supplier's
descent inequality. The local theorem uses the supplied one-step inequality,
finite telescoping, and the Archimedean property to choose a finite number of
large-gradient indices in the contradiction argument. No arbitrary-index
choice is used.

Relevant source passages inspected:

- MIT 6.7220/15.084 Lecture 12, Definition L12.1 and Theorem L12.1 (quadratic
  upper bound), Theorem L12.3 (one-step descent), and Theorem L12.4 plus its
  finite-horizon argument, PDF pp. 1–4. Its proof assumes a global lower bound;
  the local proof below uses and proves only the bound along the actual
  iterates.
- Ghadimi and Lan, §1 and §2.1, Assumption A1, RSG update, Theorem 2.1(a), and
  proof of (2.4), PDF pp. 1–7. The deterministic `sigma = 0`, constant-step
  specialization supports a finite-horizon gradient bound. Its stochastic
  oracle, random output, and global lower-bound assumptions are not transferred
  to this deterministic whole-sequence result.
- Bottou, Curtis, and Nocedal, §4.1, Assumption 4.1, equation (4.3), and
  Lemma 4.2 proof, PDF pp. 21–24. This supports only the smoothness convention
  and quadratic upper model; its stochastic-gradient theorem is not used as a
  deterministic proof.

Retrieval command:
`node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-39.source-coverage.json --stamp`
returned `3/3` full-text sources fetch-verified, exit 0, with no recovery retry
and no documented source drop. Exact stamps and dispositions are in the
source-evidence carrier. No retrieval failure occurred, so no
`source_resolution` entry was needed.

## Completed B examples

- `ex-nonconvex-cosine-gradient-descent-has-distinct-basins` states that for
  `F(x)=1-cos(x)` and `alpha=1`, starts in `(0,pi)` converge to the global
  minimum at `0`, while starts in `(pi,2pi)` converge to the distinct global
  minimum at `2pi`. The proof verifies the smooth bounded-below hypotheses,
  proves both invariant intervals, and uses the sine zero set to identify each
  limit. Dependencies: the A theorem, the published GD algorithm, the scalar
  gradient convention, derivative algebra and sine/cosine derivative and
  Lipschitz results, sine sign/period/zero-set and parity results, and the
  monotone-sequence convergence corollary. Item level 1.
- `ex-nonconvex-gd-path-lower-bound-with-unbounded-objective` uses
  `F(x,y)=x^2-y^2`, `alpha=1/4`, and `w_0=(1,0)`. Direct expansion gives
  `grad F=(2x,-2y)` and global Lipschitz constant 2; the iterates are
  `(2^{-t},0)`, with `F(w_t)>=0`, although `F(0,s)=-s^2` is unbounded below.
  The limit is stationary and has both larger and smaller nearby values.
  Dependencies: the A theorem, GD algorithm, total-derivative and coordinate
  gradient definitions, Euclidean norm, and geometric-sequence convergence.
  Item level 1.

The example proofs use no additional axiom. The published
`ex-multimodal-nonconvex-objective` on the required numerical-optimization
examples page remains the separate two-minimum/local-maximum example; it was
not duplicated or edited.

## Cross-pair interface and unresolved status

The assigned A page retains its page-level requirement on batch 38. The exact
supplier items are `alg-backpropagation-through-shared-parameter-recurrence`
and `thm-shared-parameter-backpropagation-gradient-formula`; both actual draft
bodies were inspected. The declared interface is optional context for a finite
$C^1$ shared-parameter recurrence and its reverse-accumulation formula. No
assigned theorem or example uses either item as a logical premise, so no claim
or proof hypothesis is affected. The page requirement remains unchanged; no
supplier readiness or acceptance is inferred. Exact item status and inspection
evidence are in the dependency-input and cross-batch records.

## Final scoped checks and readiness

- `source-fetch-check --stamp`: 3/3 full-text sources fetch-verified; 0 newly
  stamped on the final check and 0 documented drops.
- `precheck`: all 3 assigned items pass.
- Strict proof contracts: 3/3 checked, 0 errors and 0 warnings.
- `proof-layout`: 3 items, 11 steps, 0 defects.
- `manifest-deps`: 3 items, 0 normalizations, 0 errors. Focused `depcheck`:
  0 errors and 0 warnings across both assigned pages and their prerequisite
  closure.
- `rendercheck`: 5 assigned files checked, 0 errors and 0 warnings. The native
  statement-first inspection on the 3 assigned items reports 0 defects.
- Recomputed item levels are 0 for the theorem and 1 for each example; all
  declared labels match, with no local dependency cycle.
- Cross-batch reconciliation records all 22 external item edges and five page
  requirements; a manifest-to-evidence comparison found no missing or extra
  rows.
- Ordinary `step1-decisions record` wrote non-owner `ready` records for all
  three items after the final proof edit. A direct hash check confirms all three
  records are closed for their current item and dependency bytes. These records
  are authoring readiness only, not independent approval or publication.

Run-wide checks remain open for other owners' unfinished scaffolds. The full
item-level dependency check reports 70 empty inventories across batches 6, 10,
40, 41, 42, 45, 52, 53, 55, 56, 60, 67, 68, 69, 70, 71, 72, 75, 77, 78, 82,
84, 85, 86, 87, 89, 90, 93, 94, 95, 96, 98, 99, 100, and 101. The full-run
statement-first command stops at the first such inventory,
`batch-10:distribution-shift-and-domain-adaptation`; the focused check above
passes for this pair. The full Step-1 check has 866 run items, 624 ready, and
remains open with 312 outstanding work rows; the three assigned records are
closed. The shared batch-dependency-level artifact is stale: a read-only
recomputation still gives batch 39 level 2 with prerequisite batch 38, but its
current input hash is
`7195415d65735971745d95ccc50798c5397e4a7cbe61019b0947df4ddf14f8e2`, differing
from the recorded dispatch input
`eb6e502822da9df2ddecf2163d84fba235d04dad0019f30c62911eb0684aae75`. The
shared artifact and live engine state were left to the owner.

The run status was read at the start of this work as `1-scaffold` held on the
owner repair, with 41/101 pairs covered and no worker in flight. No run status
polling, tests, publication, or owner-state edits were performed.
