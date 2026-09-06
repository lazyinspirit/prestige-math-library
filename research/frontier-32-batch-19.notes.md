# frontier-32 beta batch-19 notes

## Scope, controlling design, and state

This batch owns only the `oracle-computability-the-jump-and-turing-degrees`
A/B pair and changes only its manifest, coverage harvest, and these notes.
The live `.autopilot/` status was independently checked: it names
`frontier-23`, not this `frontier-32` dispatch. No workflow state or plan
structure was changed.

The controlling design is TC-18 at
`research/plan-computability-theory-track.md` lines 795–831. The dispatch's
second match at line 821 is TC-18's own B-page heading, not a later
amendment. Its order (615) and prerequisite
`the-arithmetical-hierarchy-and-posts-theorem` agree with
`research/plan-spec.json`; no design/spec conflict exists.

Conventions fixed for authoring: all objects are subsets of $\mathbb N$;
oracle machines make individual membership queries during finite runs;
$A\oplus B=\{2n:n\in A\}\cup\{2n+1:n\in B\}$; the jump is the relative
diagonal halting set under the established acceptable numbering; and a
truth-table functional is total on every oracle, not merely on the target
oracle. There are no forward references.

## Source harvest and verification

Both independent full lecture-note treatments, their URLs, exact read ranges,
their own headings/results, and a disposition for every harvested result are
in `frontier-32-batch-19.coverage.json`.

1. Ludovic Patey, *Computability Theory*, 368-page lecture-note text:
   Chapter 4 §§4.2–4.6, the computably-dominated definition, and the complete
   truth-table range through Theorem 5.12. This is the primary proof route for
   oracle functionals, degree join, jump strictness/monotonicity, and the
   domination characterization of truth-table reducibility.
2. Sebastiaan A. Terwijn, *Computability Theory*, 66-page lecture-note text:
   Chapter 5 §§5.1–5.3. It independently treats relative computation, use,
   the jump, and the arithmetical-hierarchy calibration of finite jumps.

Each source was fetched and its full text opened at its recorded URL in the
web reader on 2026-09-06. Runner-local DNS made direct `curl` verification
return code 000 for both URLs; that limitation, rather than a claim of a
shell fetch, is recorded in each `fetch_verified` object.

## Scaffolded claims, dependencies, and proof route

The A page has 23 items, below the 60-item split ceiling; the B page has 3.
Every manifest object has an explicit `deps` array.

| Item | Claim to author | Dependency/proof rationale |
| --- | --- | --- |
| `def-oracle-turing-machine` | Formal finite-program, membership-query oracle-machine model. | Formalizes the published relative-computability convention. |
| `def-turing-reducibility-and-equivalence` | $A\le_TB$ by a total $B$-oracle decider and mutual reducibility. | Uses the oracle-machine model. |
| `lem-turing-reducibility-is-a-preorder` | Turing reducibility is reflexive and transitive. | Identity machine and effective substitution of oracle simulations. |
| `def-turing-degree-and-degree-order` | Degrees are equivalence classes and $[A]\le[B]$ means $A\le_TB$. | Quotient the preorder only after proving its laws. |
| `lem-degree-order-is-representative-independent` | Equivalent representatives give the same degree comparison. | Compose the four reductions. |
| `def-tagged-join-of-oracles` | Defines $A\oplus B$ by even/odd tags. | Keeps both component channels decodable. |
| `thm-turing-degrees-form-an-upper-semilattice` | $[A\oplus B]$ is the least upper bound. | Decode tags for upper-bound maps, then branch on parity for minimality. |
| `def-turing-jump` | $A'=\{e:\Phi_e^A(e)\downarrow\}$. | Fixes the relative diagonal-halting convention. |
| `lem-jump-is-well-defined-on-degrees` | $A\equiv_TB$ implies $A'\equiv_TB'$. | Compile each oracle simulation through the reduction in both directions. |
| `thm-every-oracle-is-strictly-below-its-jump` | $A<_TA'$ for every oracle. | Relativized $s$-$m$-$n$ gives $A\le_TA'$; diagonal relative halting gives $A'\not\le_TA$. |
| `thm-jump-is-monotone` | $A\le_TB$ implies $A'\le_TB'$. | Uniformly simulate the $A$-oracle program using the $B$ reduction and ask $B'$ whether it halts. |
| `def-oracle-ce-completeness` | Defines completeness among $A$-c.e. sets under total $A$-computable many-one maps. | Makes the next theorem's reduction class explicit. |
| `thm-relative-halting-is-oracle-ce-complete` | $A'$ is $A$-c.e.-complete. | Verify relative halting is c.e. and compile any $A$-c.e. search into a diagonal relative program. |
| `cor-finite-jumps-match-arithmetical-levels` | $C\in\Sigma^0_{n+1}$ iff $C$ is $0^{(n)}$-c.e.; $C\in\Delta^0_{n+1}$ iff $C\le_T0^{(n)}$. | Reconcile the local jump notation with published Post's theorem. |
| `def-truth-table-reduction` | Defines a target-correct oracle functional total for every oracle. | This is stronger than ordinary target-oracle totality. |
| `lem-total-oracle-functional-has-computable-use-bound` | A functional total on every oracle has a computable input-wise bound on the finite oracle portion it needs. | Proves the finite-branch compactness argument locally, rather than importing a theorem from an undeclared page. |
| `prop-truth-table-implies-turing-reduction` | Every truth-table reduction is a Turing reduction. | Specialize an everywhere-total functional to its target oracle. |
| `def-computably-dominated-oracle` | Every total oracle-computable function has a computable dominator. | Needed to state the source's precise separation criterion. |
| `lem-halting-oracle-is-not-computably-dominated` | $0'$ computes a total function no computable function dominates. | Use the recursion theorem to diagonalize a candidate computable dominator via a halting-time function. |
| `thm-computably-dominated-characterizes-truth-table-reducibility` | $X$ is computably dominated iff every $Y\le_TX$ is $Y\le_{tt}X$. | Follow Patey Theorem 5.12: the preceding local use-bound lemma supplies the needed finite-tree compactness; conversely encode a total $X$-computable function. |
| `thm-some-turing-reductions-are-not-truth-table-reductions` | Some $Y\le_TX$ fail $Y\le_{tt}X$. | Apply the preceding characterization to $X=0'$. |
| `fs-an-oracle-machine-reads-the-infinite-oracle-at-once` | Refutes the infinite-read misconception. | A concrete halting trace has a finite query witness. |
| `fs-degree-join-is-set-union` | Refutes identifying degree join with ordinary set union. | Contrast tagged join and least-upper-bound operation on degree classes. |
| `ex-degree-order-is-representative-independent` | Works an explicit change of representatives. | Instantiates the representative-independence lemma. |
| `ex-some-turing-reductions-are-not-truth-table-reductions` | Instantiates the non-truth-table consequence of non-domination. | Keeps the worked explanation on the B page. |
| `cex-an-oracle-machine-reads-the-infinite-oracle-at-once` | Gives a finite transcript counterexample to whole-oracle reading. | Uses the false statement and finite-query lemma. |

Known scope limits: degree incomparability, jump inversion, low/high degrees,
and priority constructions are explicitly excluded in the harvest because they
need later machinery. The proof of the domination characterization is the
only nontrivial added bridge beyond the design's named list; it is necessary
to derive the requested strict Turing-versus-truth-table result without using
an unstated external theorem or an undeclared page prerequisite.

## Validation checkpoint

Passed on 2026-09-06:

- JSON parse and a manifest audit: 26 fresh IDs, every `deps` array explicit,
  no item-ID collision, and every dependency resolves to this scaffold or an
  existing item.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-32-batch-19.coverage.json`: 1 page, 41 harvested results,
  0 errors, 0 warnings.
- `node tools/validate-plan.mjs` against a temporary full-plan overlay carrying
  this exact manifest: exit 0; 802 pages with item lists, no item cycle,
  forward reference, B-page dependency, or unresolved ID.
- `node tools/splice-plan.mjs --run frontier-32 --batch 19 --dry-run`: exit 0;
  2 pages and 26 items mechanically spliceable. The dry run did not alter
  `research/plan-spec.json`.

No item or page body is authored in this beta-scaffolding task. The next
authorized phase may splice the manifest and author the 26 planned items.

## Step-3 fix pass

The Alpha-a Step-3 review contains no numbered or ID-bearing finding for batch
19. Its only batch-specific record is the `sufficient` verdict for
`oracle-computability-the-jump-and-turing-degrees` in
`frontier-32-alpha-a-step3-scaffold-review.md` and the matching unnumbered
entry in `frontier-32-alpha-a-step3-verdicts.json`. Therefore there is no
finding id to apply, push back on, or renumber.

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| _none recorded_ (batch-19 `sufficient` verdict) | Accepted; no manifest or coverage change. | The review confirms the 23-item A route and 3-item B route are dependency-closed and source-backed. The manifest retains all 26 explicit `deps` arrays and remains below the 60-item split threshold. | None. |

The two recorded source URLs were re-opened and their relevant passages read
again. Patey, Chapter 4, §§4.2--4.6 (PDF pp. 69--78), supplies the oracle
functional, finite-use, Turing-degree, join, and jump routes; his Definition
5.1 (PDF p. 156) and §5.1, especially Theorems 5.11--5.12 (PDF pp. 160--162),
support computable domination and the truth-table/Turing separation. Terwijn,
Chapter 5 §§5.1--5.3 (PDF pp. 44--47), independently supplies relative
computation, the use principle, the jump, and finite-jump calibration.
`source-fetch-check` also accepts both existing full-text verification stamps.

Patey Theorem 5.11 makes the finite binary-tree compactness argument explicit.
That argument remains an internal part of the already planned
`lem-total-oracle-functional-has-computable-use-bound`, rather than an
undeclared imported dependency: author its proof by forming the tree of finite
oracle strings on which the fixed-input computation has no halting
finite-oracle transcript, deriving an infinite non-halting oracle if every
finite bound fails, and then performing the finite exhaustive search for the
first bound. The next theorem uses that local bridge exactly as Patey Theorem
5.12 does. No additional item or page prerequisite is warranted.

Validation rerun on 2026-09-06:

- `node tools/manifest-deps.mjs research/frontier-32-batch-19.pages.json`:
  26 items, 0 missing `deps`, 0 errors.
- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-32-batch-19.coverage.json`: 41 harvested results, 0 errors,
  0 warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-19.coverage.json`: 2/2 sources fetch-verified.
- Whole-run `content-policy --manifest-only` across batches 1--19: 676 scoped
  items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: declared order
  consistent and acyclic, with no item cycles, forward references, B-page
  dependencies, or unresolved IDs among itemized pages.
- `node tools/splice-plan.mjs --run frontier-32 --batch 19 --dry-run`: 2 pages
  and 26 items splice cleanly; no plan file was altered.

Unresolved obligations: none for this fix pass. Next action remains the
authorized splice and authoring phase, where the local compactness proof route
above must be carried into the named lemma.

## Step-5 authoring

Authored the two draft pages directly at
`library/computability-theory/oracle-computability-the-jump-and-turing-degrees.md`
and `library/computability-theory/oracle-computability-the-jump-and-turing-degrees-examples.md`,
with all 26 manifest IDs: the 23 A-page definitions, results, and refutations
plus the three B-page generated worked items. Every new item remains
`status: draft`; no published content, plan structure, workflow state, or
other batch was changed.

The controlling design remains TC-18 (track lines 795--831): its second
dispatch locator is the companion heading, not a later amendment. The design
and plan spec agree on orders 615/616 and the prerequisite
`the-arithmetical-hierarchy-and-posts-theorem`. The source basis and exact
locators remain the two full note ranges in the coverage file. Patey §§4.2--4.6
and §7.5/§7.5.1 support the oracle, degree, jump, total-functional compactness,
and domination routes; Terwijn §§5.1--5.3 independently supports relative
computation, finite use, jump, and finite-jump calibration. The authored
compactness lemma keeps the required hypothesis that a truth-table functional
is total on *every* oracle. The domination equivalence records the source's
canonical coding of a total function as an oracle sequence and takes the
finite truth-table maximum; it does not claim a bound merely from target-oracle
totality.

All source-backed statements are marked `literature-derived` and all local
proofs `ai-generated`; the three B-page worked items are accurately marked
`ai-generated` with their required `generation` roles. No claim was narrowed
or dropped, there are no forward references, and no unresolved authoring
blocker remains. `research/frontier-32-batch-19.proof-contracts.json` now
contains all 18 proof-bearing item contracts, with no citations because the
proofs use their declared definitions/results directly rather than labelled
fact rows; every proof step is mapped and every standard boundary axis has a
real disposition.

Checks rerun after canonical phase repairs on 2026-09-06:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 26 explicit
  `items/ID.md` paths: 18 proof-bearing items checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; no declared
  page-order cycle, item cycle, forward reference, B-page dependency, or
  unresolved ID among the itemized pages.
- `node tools/content-policy.mjs research/frontier-32-batch-19.pages.json`:
  26 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-19.proof-contracts.json --strict`:
  18/18 checked, 0 errors, 0 warnings.
