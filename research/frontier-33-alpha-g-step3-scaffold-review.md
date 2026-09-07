# frontier-33 — Alpha group `g` Step 3 scaffold review

Scope: batches `11`, `17`, and `18`, comprising four A/B pairs:

| Batch | A page | Order | A items | B page | Order | B items |
|---:|---|---:|---:|---|---:|---:|
| 11 | `co-bird-free-comb-structure` | 439 | 13 | `co-bird-free-comb-structure-examples` | 440 | 4 |
| 17 | `the-polynomial-hierarchy-and-relativization` | 633 | 25 | `the-polynomial-hierarchy-and-relativization-examples` | 634 | 4 |
| 17 | `expander-graphs-and-constraint-graphs` | 645 | 31 | `expander-graphs-and-constraint-graphs-examples` | 646 | 4 |
| 18 | `arithmetization-and-the-sum-check-protocol` | 641 | 24 | `arithmetization-and-the-sum-check-protocol-examples` | 642 | 4 |

I read the complete owned manifests, coverage files, and notes; the current
`research/plan-spec.json` entries and dependency closure; the exact design
sections `research/plan-combinatorics-and-categories.md` §§16.1–16.5 and
`research/plan-computability-theory-track.md` TC-27, TC-31, and TC-33; every
external dependency statement used by the manifests; and the complete source
ranges listed below. Claims were checked as written, including empty and zero
cases, endpoint conventions, field characteristic, quantifier direction,
random-choice scope, and both directions of equivalences.

## Verdicts

| A page | Verdict | Basis |
|---|---|---|
| `co-bird-free-comb-structure` | **sufficient** | The 13-item route exactly covers the co-Bird witness obstructions, E-overlap quotient construction, purity descent, terminal E-free pattern, and special-vertex comb partition of source Lemma 6.5. |
| `the-polynomial-hierarchy-and-relativization` | **sufficient** | The 25-item route covers bounded alternation, circuit and oracle characterizations, collapse, relativization barriers, and the high/low and promise conventions without importing the declined refinements. |
| `expander-graphs-and-constraint-graphs` | **sufficient** | The 31-item route provides the spectral, explicit-construction, regularization, overlay, and walk-hitting infrastructure required before gap amplification. |
| `arithmetization-and-the-sum-check-protocol` | **sufficient after the backward-prerequisite repair below** | The 24-item route covers Boolean arithmetization, multilinear extension, sum-check completeness/soundness/resources, exact-counting conventions, BLR, and self-correction. |

The four B pages are also authorable: each requires only its paired A page and
provides the promised concrete witnesses, computations, counterexamples, and
boundary cases. No new page, forward dependency edge, or reading-order change
is needed.

## In-scope scaffold repair

`def-arithmetization-of-a-boolean-formula` depends on
`def-boolean-formula-cnf-and-sat`, which is owned by the earlier page
`the-cook-levin-theorem` at order 621. Batch 18 previously declared only the
interactive-proof and finite-field pages, so that item lay outside the page's
declared closure. I added `the-cook-levin-theorem` to the A-page `requires`
array in `research/frontier-33-batch-18.pages.json`. This is an exact backward
prerequisite, licensed by the Step-3 task; no item ID, statement, page, or order
changed.

The current plan intentionally remains unchanged for the engine-owned splice
stage. A dry run now reports the single repaired edge as awaiting Step-4
adjudication. The focused overlay closure scan succeeds with that manifest
edge, so there is no remaining authoring gap.

## Pair reviews

### Batch 11 — co-Bird-free comb structure

Route and conventions: the A page requires `co-e-free-comb-structure`, whose
backward closure supplies the mixed-reachability quotient lemmas used in the
descent. The claims use finite simple induced subgraphs, nonempty blockade
blocks, anticonnected E-overlap classes, and a special vertex complete to every
comb block and anticomplete to every tooth. The edge-plus-isolate and
path-plus-isolate obstructions are used with their exact adjacency hypotheses.
Finite quotient iteration strictly reduces the number of blocks, preserves
anticonnectedness, and terminates in a pure blockade whose pattern is E-free.
The no-E boundary uses a singleton from the nonempty comb block; no empty
blockade or unstated choice is required.

External dependency IDs checked:
`def-bird-graph-and-co-bird-graph`,
`def-edges-between-sets-and-pure-mixed-pairs`,
`def-h-free-and-family-free-graph`, `def-e-graph-and-co-e-graph`,
`def-comb-in-a-graph`,
`def-anticonnected-graph-and-anticonnected-component`,
`def-quotient-blockade-by-mixed-block-reachability`,
`lem-quotient-blocks-preserve-connectedness-and-anticonnectedness`,
`thm-well-ordering-principle`,
`lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge`,
`lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks`,
`lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks`, and
`def-pattern-graph-of-a-pure-blockade`.

Reviewed A item IDs:
`lem-co-bird-free-edge-plus-isolate-witness-obstruction`,
`lem-co-bird-free-path-plus-isolate-witness-obstruction`,
`lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges`,
`lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs`,
`def-e-overlap-chain-relation-in-a-comb-block`,
`lem-e-overlap-classes-form-an-anticonnected-partition`,
`lem-purity-on-every-e-propagates-along-an-overlap-class`,
`def-e-overlap-blockade-and-iterated-mixed-quotients`,
`lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade`,
`lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing`,
`lem-co-bird-free-external-purity-survives-e-overlap-quotients`,
`lem-terminal-e-overlap-quotient-pattern-is-e-free`, and
`thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition`.

Reviewed B item IDs:
`ex-co-bird-edge-plus-isolate-adjacency-witness`,
`ex-co-bird-path-plus-isolate-adjacency-witness`,
`ex-co-bird-e-neighbourhood-case-table`, and
`ex-co-bird-e-free-comb-singleton-partition`.

### Batch 17 — polynomial hierarchy and relativization

Route and conventions: the declared prerequisites supply Boolean circuits and
space/TQBF. Levels are for fixed positive alternation depth; complements,
bounded alternating QBF completeness, adaptive oracle transcripts, and oracle
characterizations preserve their quantifier direction. Collapse propagation
does not assume an unproved unrelativized separation. The two opposite oracle
worlds support only the stated relativization barrier. Lowness/highness and
promise problems remain distinct conventions, and the deliberately false
schema `fs-relativized-separations-prove-unrelativized-separations` is clearly
typed as a false statement rather than used as a premise.

External dependency IDs checked: `def-p`, `def-np-by-verifiers`, `def-conp`,
`lem-polynomial-time-computations-have-logspace-uniform-circuits`,
`def-boolean-circuit-size-depth-fanin-and-basis`,
`def-polynomial-time-many-one-reduction`, `def-pspace-and-npspace`, and
`thm-tqbf-is-pspace-complete`.

Reviewed A item IDs:
`def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`,
`lem-ph-quantifier-block-closure`, `prop-np-and-conp-are-the-first-levels`,
`lem-ph-circuit-matrix-final-block-encoding`,
`thm-bounded-alternation-qbf-is-level-complete`,
`lem-ph-adaptive-oracle-transcript-normal-form`,
`thm-quantifier-and-oracle-characterizations-of-ph`,
`prop-ph-containments-and-polynomial-space`,
`lem-collapse-at-one-level-propagates`,
`thm-sigma-k-equals-pi-k-implies-ph-collapse`,
`cor-ph-complete-language-forces-collapse`,
`lem-standard-containments-relativize`, `def-relativizing-proof-technique`,
`lem-oracle-diagonalization-finite-extension`,
`thm-an-oracle-separates-p-from-np`,
`lem-polynomial-space-oracle-absorption`,
`thm-an-oracle-collapses-p-and-np`,
`cor-relativization-alone-cannot-resolve-p-versus-np`,
`def-lowness-and-highness`, `prop-elementary-high-low-identities`,
`def-promise-problem`, `def-promise-preserving-reduction`,
`rem-oracle-and-promise-conventions-are-distinct`, and
`fs-relativized-separations-prove-unrelativized-separations`.

Reviewed B item IDs: `ex-np-and-conp-are-the-first-levels`,
`ex-relativization-alone-cannot-resolve-p-versus-np`,
`cex-relativized-separations-prove-unrelativized-separations`, and
`ex-promise-oracle-off-promise-answers`.

### Batch 17 — expander graphs and constraint graphs

Route and conventions: graphs are finite undirected regular multigraphs with
adjacency slots, so loops and parallel edges are counted consistently in the
normalized walk matrix and CSP edge totals. The spectral parameter is the
absolute nontrivial operator norm, not merely the second algebraic eigenvalue.
The mixing and Cheeger arguments use the centered-indicator and normalized-cut
conventions consistently. The elementary Fourier proof gives the required
Margulis gap; size adjustment, loop padding, lazification, and edge doubling
give a uniform explicit family without invoking Selberg. Constraint-cloud
regularization, plurality rounding, expander overlays, restricted-operator
contraction, moving-set hitting, and bad-edge return are sufficient inputs for
the next amplification page. The scaffold does not claim the deferred PCP
hardness or alphabet-reduction theorems.

External dependency IDs checked:
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, and
`cor-rayleigh-quotient-extreme-eigenvalue-characterisation`.

Reviewed A item IDs:
`def-regular-multigraph-and-normalized-adjacency`,
`lem-constant-vector-is-a-top-eigenvector`,
`def-spectral-edge-and-vertex-expansion`, `thm-expander-mixing-lemma`,
`lem-cheeger-indicator-and-positive-part-energy`,
`lem-cheeger-sweep-and-layer-cake`,
`thm-cheeger-inequalities-for-finite-regular-graphs`,
`cor-expander-independent-sets-coloring-and-diameter`,
`def-margulis-gabber-galil-graph`,
`lem-margulis-family-is-constant-degree-and-neighbor-computable`,
`def-finite-torus-fourier-transform`,
`lem-finite-torus-fourier-orthogonality-and-affine-change`,
`lem-fourier-analysis-of-margulis-adjacency`,
`lem-margulis-diamond-weight-bound`,
`thm-margulis-family-has-uniform-spectral-gap`,
`lem-expander-size-adjustment-and-laziness`,
`cor-explicit-polynomial-time-constant-degree-expanders-exist`,
`def-constraint-graph-and-labeling-value`,
`def-constraint-graph-regularization`, `lem-cloud-plurality-rounding`,
`lem-regularization-preserves-value-quantitatively`,
`lem-constraint-expander-overlay`, `def-graph-power-and-walk-constraint`,
`lem-expander-walk-contraction`, `lem-expander-walk-restricted-operator`,
`thm-expander-walk-hits-dense-bad-sets`,
`prop-expander-walk-sampled-and-moving-sets`,
`lem-expander-walk-bad-edge-return`,
`prop-expander-walk-hits-bad-edges`, `def-gap-csp`, and
`fs-nonconstructive-expanders-suffice-for-uniform-reductions`.

Reviewed B item IDs: `ex-expander-mixing-lemma`,
`ex-expander-walk-hits-dense-bad-sets`,
`cex-nonconstructive-expanders-suffice-for-uniform-reductions`, and
`ex-constraint-cloud-rounding-and-loop-counts`.

### Batch 18 — arithmetization and sum-check

Route and conventions: after the repaired backward prerequisite, the closure
supplies Boolean-formula syntax, finite fields, polynomial rings, root bounds,
Schwartz–Zippel, and interactive-proof completeness/soundness. Formula
arithmetization retains the expression tree. Multilinear-extension existence
and uniqueness includes `n=0` and characteristic two. Sum-check messages are
coefficient polynomials with individual degree bounds; each challenge is
fresh after its message, including the final round. For a false claim, adaptive
soundness is at most `min(1, sum_i d_i / |F|)`. Exact counting uses a supplied
prime field with `p > 2^n`, not merely a field whose cardinality is large. BLR
uses normalized Boolean-cube Fourier coefficients, recovers a linear (not
affine) function, and the self-corrector's two bad-query events are bounded
without an independence assumption.

External dependency IDs checked: `def-boolean-formula-cnf-and-sat`,
`def-field`, `def-multivariate-polynomial-ring-by-iteration`,
`thm-root-bound-for-polynomials-over-a-domain`,
`thm-schwartz-zippel-lemma`, `def-finite-field-and-its-order`, and
`def-completeness-and-soundness`.

Reviewed A item IDs:
`def-arithmetization-of-a-boolean-formula`,
`lem-arithmetization-agrees-on-boolean-inputs`,
`lem-formula-arithmetization-degree-and-evaluation-cost`,
`def-multilinear-extension`,
`thm-existence-and-uniqueness-of-multilinear-extension`,
`lem-multilinear-extension-streaming-evaluation`,
`lem-multilinear-extension-table-evaluation`,
`lem-degree-under-arithmetized-quantifiers`,
`rem-polynomial-identity-bounds-for-sum-check`,
`def-sum-check-instance-and-protocol`,
`lem-sum-check-perfect-completeness`,
`lem-first-false-round-is-caught-by-root-bound`, `thm-sum-check-soundness`,
`lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`,
`cor-sum-check-field-size-error-budget`,
`prop-arithmetized-formula-counting-sum`, `def-linearity-test`,
`def-boolean-cube-fourier-coefficients`,
`lem-boolean-cube-fourier-inversion-and-parseval`,
`lem-blr-acceptance-fourier-identity`, `thm-blr-linearity-test-soundness`,
`def-self-correction-of-a-noisy-linear-function`,
`thm-linear-self-correction`, and
`fs-sum-check-computes-all-exponential-summands`.

Reviewed B item IDs: `ex-existence-and-uniqueness-of-multilinear-extension`,
`ex-sum-check-three-variable-transcript`, `ex-linear-self-correction`, and
`cex-sum-check-computes-all-exponential-summands`. The transcript arithmetic
was independently checked: the Boolean-cube sum is 12, the successive claimed
values at challenges 2, 3, and 6 are 69, 37, and 46, and the final point
evaluation is 46.

## Source evidence

| A page | Source and complete locator read |
|---|---|
| `co-bird-free-comb-structure` | Huang–Ju–Zhou, [*Erdős–Hajnal beyond the five-vertex path*](https://arxiv.org/html/2606.06258v2), §6 opening Lemmas 6.1–6.2, §6.1 Lemma 6.4 and proof, and all of §6.2 through Lemma 6.5, Claims 6.5.1–6.5.3 and Figure 9; Diestel, [*Graph Theory*, Chapter 1](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf), §1.1 pp.2–4 and §1.4 pp.10–11 through the component paragraph after Proposition 1.4.1. |
| `the-polynomial-hierarchy-and-relativization` | Arora–Barak, [*Computational Complexity* draft](https://theory.cs.princeton.edu/complexity/book.pdf), §3.5 pp.70–72, §§5.1–5.3.1 pp.91–96, §5.5 pp.98–99 through Remark 5.16; Goldreich, [complete complexity lecture notes](https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf), Lecture 9 §§9.1–9.2 pp.101–108 and Proposition 9.2.3 appendix pp.113–114; Chang, [*On the Structure of Bounded Queries to Arbitrary NP Sets*](https://userpages.cs.umbc.edu/chang/papers/bqh/bqh.pdf), §3 pp.3–4; Goldreich, [*On Promise Problems*](https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf), §§1.1–1.2 pp.2–5 through the convention after Definition 1.3. |
| `expander-graphs-and-constraint-graphs` | Hoory–Linial–Wigderson, [*Expander Graphs and Their Applications*](https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf), contents pp.5–7, §§2.1–2.4 pp.19–22, §3.1 through §3.1.1 pp.25–26, §3.2 pp.28–29, §4.5 pp.40–42, and Chapter 8 pp.69–73; Dinur, [*The PCP theorem by gap amplification*](https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf), §§1.1–1.2 pp.2–5, §§2.1–2.2 pp.8–10 through Fact 2.6, and §4 pp.12–15. |
| `arithmetization-and-the-sum-check-protocol` | Thaler, [*Proofs, Arguments, and Zero-Knowledge*](https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf), §§3.4–3.5 pp.28–32 and §4.1 pp.33–39 complete; Arora–Barak, [*Computational Complexity* draft](https://theory.cs.princeton.edu/complexity/book.pdf), §§8.5.1–8.5.2 pp.158–160, §8.5.3 opening degree-growth paragraph, §18.4.1 pp.363–365, and §§19.3.1–19.3.2 pp.388–391. |

All ten source records retain current durable fetch receipts. The source-fetch
check reports `10/10` fetch-verified. No conclusion rests on a snippet or a
truncated source read.

## Deferred and out-of-scope decisions

After the required refresh, all 39 decline rows were compared individually
with their exact source range, design, manifest claims, dependency closure, and
current plan destination. Every row is `stands`; none requires an owner
decision.

| A page | Deferred | Out of scope | Decision summary |
|---|---:|---:|---|
| `co-bird-free-comb-structure` | 8 | 1 | Lemmas 6.1–6.2 remain on the earlier quotient page, the §6.1 co-E route remains on the preceding co-E page, and line graphs are unused. |
| `the-polynomial-hierarchy-and-relativization` | 2 | 9 | PromiseBPP/randomized containment remains on the randomized page; optimization examples, AP, sparse/bounded-query refinements, and stronger high/low classifications are not premises of the selected route. |
| `expander-graphs-and-constraint-graphs` | 8 | 6 | PCP hardness, amplification, endpoint-view powering, composition, and alphabet reduction remain on their named later pages; converse/sharp spectral refinements and alternative constructions are unused. |
| `arithmetization-and-the-sum-check-protocol` | 2 | 3 | Uniform `#SAT_D` membership and PCP application remain on their named pages; general grids, optimized prover implementation, and random-function heuristics are not needed. |

The exact current evidence and destination for every row is recorded in
`research/frontier-33-alpha-g-scope-decisions.json`.

## Validation

- `node tools/scope-decisions.mjs refresh --run frontier-33 --group g`:
  39 declines generated for review.
- `node tools/scope-decisions.mjs check --run frontier-33 --group g` after
  resolution: 39 current declines, 0 errors.
- `node tools/coverage-checklist.mjs ... --require-destination` for batches
  11, 17, and 18: respectively 36, 153, and 57 harvested results; 0 errors.
  Batch 18 retains the expected low-yield warning because 20 of 57 harvested
  results map to scaffold items. Its five actual deferred/out-of-scope rows
  were all individually resolved in the durable decision file; the other
  non-item rows have explicit inline dispositions.
- `node tools/manifest-deps.mjs` for the three manifests: 17, 64, and 28
  items; 0 errors.
- `node tools/content-policy.mjs --manifest-only` for the three manifests:
  109 total scoped items; 0 errors and 0 warnings.
- Assigned-manifest overlay closure scan: 8 pages, 109 items, 0 unresolved
  IDs and 0 dependencies outside the declared backward closure.
- `node tools/source-fetch-check.mjs --coverage ...`: 10/10 sources
  fetch-verified.
- `node tools/manifest-integrity.mjs --run frontier-33`: all 48 owed pages
  present; no scope drift.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; declared
  page order is acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved IDs among populated pages.
  The four reviewed A pages are not yet spliced, so the focused overlay scan is
  the item-level check for this dispatch.
- `node tools/splice-plan.mjs --run frontier-33 --batch 11 --dry-run` and the
  corresponding batch-17 dry run: both are splice-ready. The batch-18 dry run
  reports exactly one withheld requires edge,
  `arithmetization-and-the-sum-check-protocol -> the-cook-levin-theorem`, for
  the engine-owned Step-4 adjudication.

## Unresolved obligations and next action

There is no unresolved mathematical scaffold obligation in this group.
`def-pspace-and-npspace`, `thm-tqbf-is-pspace-complete`,
`def-boolean-formula-cnf-and-sat`, and `thm-schwartz-zippel-lemma` are existing
draft dependencies whose publication remains with their owning earlier pages;
their exact statements and relevant proofs were checked and no local duplicate
was introduced. The next mechanical action is the engine-owned Step-4 splice,
including adjudication of the one corrected backward edge. Authoring can then
proceed from the four `sufficient` verdicts.
