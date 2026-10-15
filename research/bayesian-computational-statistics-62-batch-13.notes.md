# Batch 13 Step-1 scaffold — `parametric-bernstein-von-mises-and-misspecification`

Run `bayesian-computational-statistics-62`, batch 13, category
`bayesian-computational-statistics`. Owned pair:

- A `parametric-bernstein-von-mises-and-misspecification`
- B `parametric-bernstein-von-mises-and-misspecification-examples`

The batch-13 manifest contains six A items and three B examples. This dispatch
edited only the owned A/B pages, their nine draft item files, and batch-13
evidence. No published content, shared plan, autopilot state, or verdict was
changed.

## 1. Controlling direction and plan reconciliation

The repository instructions, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the
owner-authoring direction, the complete BCS-10 design section, the relevant
`plan-spec.json` rows, and the batch dependency-level input were read before
authoring. The owner-authoring direction controls stale design/task wording.

The track design's narrative mentions BCS-08 (`iid-posterior-contraction`) in
the prerequisite chain. The current task and `plan-spec.json` page metadata
both name BCS-09 `misspecified-posterior-consistency` and the published
LAN/contiguity page as direct `requires`. BCS-08 is transitively required by
the BCS-09 page, so this is a direct-versus-transitive description difference,
not a page-metadata conflict. Page IDs, order 2066/2067, titles, category,
companion, and direct requirements agree across the assignment and plan.

The design scope is preserved: a general compact-uniform LAN-to-TV-BvM
theorem; an iid misspecified LAN proof under local KL curvature and a
log-Lipschitz envelope; the conditional misspecified BvM corollary; the
separate consistent approximate-MLE sandwich expansion; the QMD normalized
absolutely continuous component route; and regular, misspecified-normal, and
boundary examples. The claims retain their interior, positive-curvature,
posterior-rate, consistency, approximate-maximization, and compact-uniform
hypotheses. No theorem claims that ordinary posterior consistency supplies a
parameter-rate contraction conclusion.

Batch scheduling level is 5. Item levels are recomputed from the actual
within-batch dependency graph: level 0 is the local empirical-process lemma,
generic LAN-to-BvM theorem, and three independent examples; level 1 is the
QMD corollary and misspecified iid LAN theorem; level 2 is the misspecified
BvM corollary and MLE theorem. The B examples have only external suppliers.
The dependency graph is acyclic. The manifest dependency lists were reconciled
to item frontmatter, including the finite-product measure supplier for the
empirical-process lemma and the Gaussian-density supplier for the MLE item.

## 2. Prerequisite and interface audit

The published LAN/contiguity page and its relevant item bodies were inspected.
The QMD supplier proves LAN for each fixed convergent local sequence, while its
normalized product-likelihood lemma proves the absolutely continuous proxy
expansion and product-TV comparison. Neither establishes a compact-uniform
LAN expansion from QMD alone. The QMD corollary therefore keeps
compact-uniform proxy LAN as an additional premise, controls singular mass
uniformly over compact local directions, and does not claim a full
Radon–Nikodym derivative for the alternative law.

The BCS-09 page and current item bodies were inspected. In
`items/thm-posterior-consistency-at-kl-projection.md`, the frontmatter states
`provenance.proof: not-supplied`; there is no `## Proof`; and the Remarks say
the weak-test to exponential-test bridge remains unverified for the possibly
unnormalized likelihood tilts. The page-level edge is recorded `open` in
`bayesian-computational-statistics-62-batch-13.cross-batch-dependencies.json`.
This theorem is not used as a supplier proof. The BCS-08 entropy/tail/KL-mass
contraction theorem supplies density-metric contraction under its stated
conditions; it does not by itself establish Euclidean parameter-rate
contraction around a possibly misspecified KL projection. The BvM corollary
therefore retains the latter as an explicit condition.

Other verified interfaces include the iid definition, product-measure
construction, stochastic-order definitions, multivariate iid CLT (including
singular covariance), Slutsky and vector stochastic-order rules, TV
definition, Gaussian law/density, and normal density normalization. AC uses
are declared where needed. The score covariance may be singular; the local
curvature matrix `V` is explicitly positive definite. The supplied-density
misspecified route makes no new choice of density representatives.

## 3. Mathematical review corrections

The first LAN draft only used the local empirical-process supremum bound. That
bound is order one after summing likelihood terms and does not alone imply that
the centered log-likelihood remainder vanishes. The local empirical-process
lemma now also proves the pairwise modulus bound
`C_d epsilon sqrt(log(e r/epsilon)) ||M||_2` by symmetrization and dyadic pair
nets. The iid LAN proof combines this modulus with a finite net and the
pointwise `L2` little-o remainder to prove uniform vanishing of the centered
sum over compact local parameters. This closes the required proof step without
strengthening or weakening the theorem's hypotheses.

The misspecified BvM corollary initially passed `V^{-1}S_n` as the LAN central
vector to the general theorem. The general theorem's expansion uses central
vector `Delta_n` and centers its Gaussian at `V^{-1}Delta_n`; the corrected
proof passes `S_n`, giving the stated center `V^{-1}S_n`.

The approximate-MLE proof uses the local empirical-process bound to control
dyadic shells, then the compact LAN quadratic to identify the maximizer. It
assumes consistency and `o_P(n^{-1})` approximate maximization and does not
assert either as a consequence. The optional posterior recentering is proved
by an explicit finite Gaussian translation bound.

## 4. Full-text source record

Full relevant sections were inspected, with locators and harvested-item
dispositions in `bayesian-computational-statistics-62-batch-13.coverage.json`.
There were no retrieval failures and therefore no `source_resolution` entries
or recovery searches.

| Source | Full-text locator inspected | Main supported items |
|---|---|---|
| Kleijn–van der Vaart, *The Bernstein–von Mises theorem under misspecification* | §2.1 Theorem 2.1 and proof, printed pp. 358–360; §2.2 Lemma 2.1 and proof, pp. 360–361; Lemma 2.2 and normal example, pp. 361–362 | Local process bound, LAN-to-BvM route, sandwich covariance, misspecified normal coverage |
| van der Vaart, *Asymptotic Statistics*, Chapter 10 | §10.2 Theorem 10.1 and proof, printed pp. 140–143 | Independent regular BvM argument and normal example context |
| Bartlett, *Theoretical Statistics*, Lecture 23 | Complete QMD/LAN lecture notes, including fixed-sequence QMD-to-LAN scope and the MLE regularity caveat | QMD interface and LAN/MLE context |
| Bochkina, *Bernstein–von Mises theorem and misspecified models: a review* | Complete relevant §§1.2 and 1.4, including the boundary example | Sandwich/coverage distinction and boundary truncation warning |

All four are full papers, a textbook chapter, or full lecture/review notes;
the A page has more than two independent treatments. The batch coverage
records the full-text fetch stamps and source locators.

## 5. Proof contracts, readiness, and scoped checks

The proof-contract file contains one entry for each of the nine manifest
items. Exact supplier statement excerpts and numbered-step derivations are
generated from the final item text; boundary dispositions and the applicable
finite formula checks are recorded there. Readiness records are written only
after the final scoped checks. The unresolved BCS-09 page prerequisite remains
an owner escalation at handoff; no item record constitutes approval.

Final scoped results:

- `source-fetch-check --stamp`: 7/7 source records verified; zero documented
  drops. `coverage-checklist --require-destination`: 2 pages, 23 harvested
  results, zero errors or warnings.
- `proof-layout`: 9 items, 39 steps, zero defects. The normative precheck:
  9 checked, zero failing. Strict proof contracts: 9/9 items, zero errors or
  warnings. The nine item-level dependency labels match their in-batch graph
  (levels 0–2); manifest/frontmatter dependency comparison reports zero
  mismatches; `manifest-deps` reports 9 items and zero errors.
- Focused `depcheck`, `extcheck`, `fwdcheck`, and content-policy checks pass
  with zero errors and warnings. `rendercheck` passes all 11 changed item/page
  files.
- The whole-run `item-dependency-levels check` has one unrelated diagnostic:
  `ex-cylinder-gaussian-process-is-not-banach-valued` is labelled 1 but
  computes to 2. No batch-13 item is in that diagnostic.
- The read-only whole-run batch-level check reports the shared scheduling
  artifact stale relative to the dispatch input hash
  `0ed93c535f3708790687fb8377522a614761350ad4dabe3f9f0c525ab060a0f1`. After
  the manifest dependency corrections, recomputing in memory gives input hash
  `fca5f09bd71db96eaf3be7a71fd3fa06c4f9f3eb2da04d8c8ea3b0eb388ad885`; batch
  13 remains level 5 with prerequisite batch 12. The shared artifact was not
  written by this pair.
- `step1-decisions record` wrote nine records: four `ready` (the local
  empirical-process lemma and three B examples) and five `escalated` A items
  for the open BCS-09 page prerequisite. The run-wide decision check reports
  763 items, 53 ready, and 710 requiring work, including the five batch-13
  escalations and many unrelated stale records. These authoring records are
  not approvals.

No general test suite, autopilot gate, batch transition, or shared-state write
is part of this authoring dispatch. The remaining owner handoff is the open
BCS-09 proof/interface reconciliation and refresh of the shared batch-level
scheduling artifact after run-manifest integration.

## Owner contextual consistency-page reconciliation

Focused same reviewer found that these five conditional results do not import the unresolved weak-test theorem. Current source-exact dispositions in research/bayesian-computational-statistics-62-owner-misspecified-consistency-intake.md. Their explicit contraction/LAN/MLE premises remain; the supplier theorem stays escalated and prevents all frontier gates until resolved. This context-only author-readiness binding is neither upstream acceptance nor a mathematical claim change.
