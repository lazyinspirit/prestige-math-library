# Batch 96 — Inverse Gibbs models, identifiability and correlated uncertainty

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pages: `csm-frontier-inverse-gibbs` / `csm-frontier-inverse-gibbs-examples`

## Plan and design reconciliation

The owner authoring-direction file named by the dispatch was absent. The batch
task and `research/plan-spec.json` require four A-page suppliers:
`csm-frontier-sampling-certificates`,
`csm-frontier-large-deviation-ensembles`, `csm-phase-ensembles`, and
`bayesian-models-priors-and-posterior-laws`. The detailed design at
`research/plan-classical-statistical-mechanics-frontier-expansion-track.md`
L163 declares only the first two. The plan-spec controls this conflict; the A
page and batch manifest retain all four. The B page requires the A page.

The detailed successor in
`research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md`
reserves five A results and the B boundary-MLE example. The A page also adds
`lem-csm-frontier-finite-polytope-support`, with a complete local proof of the
boundary supporting direction needed by the MLE criterion, and
`def-csm-frontier-pseudolikelihood`, which defines the fixed-boundary finite
conditional product used in the design warning. The B page adds a two-spin
finite counterexample showing that this product can change posterior odds.
These additions supply missing local prerequisites and an explicit finite
example; they make no asymptotic claim. The pages contain seven A items and two
B examples, below the 100-item cap.

The immutable owner observation at
`research/physics-non-fluid-129-2026-10-21-r2-owner-inverse-gibbs-context/observations/20261021T140910Z`
recorded the then-empty batch-96 inventory and missing Step 1 records. Its
later provisional diagnosis also identified a genuine statement gap in the
finite-MLE theorem: minimality was used in the proof but was not explicit as a
hypothesis. I rechecked the current carrier and added “Assume the representation
is minimal” to its Statement. Its only assigned direct item consumer,
`ex-csm-frontier-boundary-mle`, independently verifies minimality before using
the criterion. The owner’s batch-98 report records no direct logical use of a
batch-96 theorem by those six consumers; it retains the A page as contextual
input and leaves their page-context recapture to the owner. No batch-98 source,
manifest, contract, or readiness record was changed.

## Item inventory and levels

The level is zero without an in-run item supplier, otherwise one plus the
maximum supplier level. Published mathematical suppliers are listed alongside
in-run ones for interface completeness but do not raise these levels.

| Item | Page | Level | Direct item suppliers |
|---|---|---:|---|
| `def-csm-frontier-inverse-finite-exponential` | A | 0 | `thm-csm-exponential-normalization-covariance`; `def-euclidean-inner-product`; `thm-extreme-value-metric` |
| `thm-csm-frontier-inverse-identifiability` | A | 1 | finite-family Definition; exponential normalization/covariance; `thm-rank-nullity` |
| `lem-csm-frontier-finite-polytope-support` | A | 0 | Heine–Borel; compact continuous image; compact-subset closure; metric continuity; extreme value; rational countability/product countability/surjection; rational density; choice-free Bolzano–Weierstrass; Euclidean inner product |
| `thm-csm-frontier-finite-mle-existence` | A | 2 | finite-family Definition; identifiability theorem; finite-polytope support lemma; exponential normalization/covariance; extreme value; compact Euclidean balls |
| `def-csm-frontier-latent-gibbs-observation` | A | 1 | finite-family Definition; Bayesian model definition; product sigma-algebra definition; measure-kernel definition |
| `thm-csm-frontier-inverse-posterior` | A | 2 | latent-observation Definition; Axiom of Choice; standard-Borel definition; measure-kernel definition; standard-Borel posterior-kernel theorem; Tonelli theorem |
| `def-csm-frontier-pseudolikelihood` | A | 0 | exponential positivity |
| `ex-csm-frontier-boundary-mle` | B | 3 | finite-MLE theorem; finite-family Definition |
| `ex-csm-frontier-pseudolikelihood-not-joint` | B | 1 | pseudo-likelihood Definition; real-exponential definition; strict monotonicity; reciprocal/positivity |

The item graph is acyclic and all proof-bearing consumers were authored after
their in-batch suppliers. The final scoped item-level check reports 838 items
over 258 pages and maximum run level 11; the assigned levels are as listed.

## Mathematical scope and conventions

- The finite exponential family uses a finite nonempty state space, positive
  reference weights, a real sufficient statistic, and counting measure. Its
  compact-parameter envelope is proved locally before invoking the
  normalization/covariance identity.
- Identifiability is stated both as the parameter-to-probability-map
  injectivity claim and as the equivalent minimality, covariance, and full
  affine-span conditions. The affine-span equivalence is proved by
  finite-dimensional rank-nullity.
- The finite-MLE criterion is for an explicitly IID product law and an
  explicitly minimal representation. Its interior direction proves
  coercivity; its boundary direction proves strict likelihood increase at
  every finite parameter. The all-plus example is hypothetical mathematical
  data, not a measurement.
- A latent parameter object has an explicit measurable canonical-parameter
  map. Hidden states are summed out in the observation kernel before forming
  the data likelihood. The posterior-kernel theorem assumes a proper prior,
  standard-Borel parameter/data spaces, and AC. Its dominated formula is
  asserted only where the predictive normalizer is finite and positive;
  uniqueness is only prior-predictive almost everywhere.
- The pseudo-likelihood uses a fixed exterior boundary and finite
  interaction neighborhoods. It is an objective formed from exact
  one-site conditionals, not a normalized joint law. The two-spin example
  defines $e=\exp(1)$ and $\cosh$ explicitly, cites the current exponential
  monotonicity/reciprocal interfaces, and computes both likelihoods, posterior
  odds, and the pseudo-likelihood mass sum directly.
- The design’s MCMC warning is preserved: no chain output is called IID, and
  no mixing, CLT, confidence, consistency, concentration, or computational
  efficiency result is asserted. No physical observation or precision is
  reported; all nine items are mathematical.

## Current prerequisite and page checks

Fresh `loadStep1Record` / `step1Decision` checks were made against the current
carriers, not the earlier owner snapshot:

- Batch 88’s four A items and B example all have current closed `ready`
  records. Their proofs and exact page interface were inspected.
- Batch 95’s seven A items all have current closed `ready` records. Their
  current proofs were read and their exact assumptions checked: finite
  positive-weight heat-bath resampling; the finite Dobrushin estimate with
  both row and column influence sums below one; error composition conditional
  on an explicit realized-error event; monotone finite Ising CFTP with
  nonnegative couplings, shared two-sided IID seeds, and almost-sure
  termination but no runtime bound; and finite Potts Swendsen–Wang invariance
  for integer $Q\ge2$ and finite nonnegative activities. Batch 96 does not use
  these sampling conclusions or claim chain outputs are IID.
- `csm-phase-ensembles` and
  `bayesian-models-priors-and-posterior-laws` are current published pages. The
  exponential normalization/covariance, proper prior/kernel, and
  standard-Borel posterior interfaces and relevant proofs were inspected.
- The four A-page edges and all 41 declared item edges (including the
  pseudo-likelihood Definition’s nonlogical forward reference) are recorded
  individually as `verified` in
  `research/physics-non-fluid-129-2026-10-21-r2-batch-96.cross-batch-dependencies.json`.
  A current-frontmatter-to-row check confirms one row per declared edge, 45
  rows total. These record scoped current-interface checks, not independent
  proof approval. Batch 95’s own upstream pages and Batch 88’s other page
  requirements remain transitive context; they are not additional Batch 96
  consumer edges.

The earlier owner observation listed Batch 95 readiness as missing at its
2026-10-21T14:09Z snapshot. The fresh current check found all seven records
closed and ready, so that historical blocker was not carried forward. Batch 98
still has its separate owner-recorded page-context holds; its final report
states that its actual proof steps have no direct logical use of Batch 96
items. Those holds and their eventual native readiness recapture remain
owner-controlled.

## Source reading and disposition

The exact URLs, locators, supported items, per-result dispositions, fetch
stamps, and retrieval history are in
`research/physics-non-fluid-129-2026-10-21-r2-batch-96.coverage.json`.
`source_resolution` is empty: no retrieval failed, no retry was needed, and no
source was dropped.

- Wainwright–Jordan, full 301-page monograph: §§3.2, 3.5.1 Proposition 2,
  3.5.2 Propositions 3 and Theorem 1 with Appendix B.1, 3.6, 6.1, and 6.2.1.
  The compact-family and gradient-range arguments inform the locally proved
  claims; §6.2.1 is context for observed/latent separation, not a proof of the
  broader kernel definition.
- Geyer, full 74-page exponential-family lecture notes: §2 and §4.6.3 are
  used as finite-family and relative-interior context. §3.2’s existence
  criterion cites an older proof; it is marked `out-of-scope` and is not
  accepted as a proof input.
- Besag, full 1975 paper: §1 and §3.3, especially equation (3.2), support the
  definition and distinction of site-conditional pseudo-likelihood from the
  joint likelihood. The asymptotic consistency discussion is `out-of-scope`.
- Johnson, Ott, and Dogucu, *Bayes Rules!*, complete Chapter 2: supports the
  proper prior, likelihood, marginal normalizer, and finite Bayes formula.
  General posterior-kernel existence is supplied by the inspected local
  standard-Borel theorem, not by this chapter.
- Touchette’s large-deviation review was retained as `deferred` context for
  the required large-deviation page; no large-deviation claim here depends on
  it.

Final source check: `source-fetch-check` verified 5/5 source entries; 5/5 are
resolved with zero drops. Coverage reports one A page, 22 harvested results,
zero errors, and zero warnings.

## Contracts, readiness, and final checks

The nine proof contracts contain the numbered derivations and actual inputs,
exact current supplier statement excerpts and hypotheses, all eight boundary
worksheets, and finite checks. Every changed carrier has a proof contract.
`verification.precheck` is `pass` on all nine items. The nine final Step 1
records bind the item’s actual direct dependencies and placement; they record
authoring readiness only, not independent proof acceptance.

Final scoped results:

- `proof-contract.mjs --strict`: 9/9 items, 0 errors, 0 warnings.
- Normative `precheck.mts`: 9 checked, 0 failing.
- `proof-layout.mjs`: 9 items, 30 steps, 0 defects.
- `rendercheck.mjs`: 11 item/page files pass YAML, link, delimiter, and KaTeX
  checks.
- `content-policy.mjs --manifest-only --authored`: 9 items, 0 errors, 0
  warnings.
- Focused `depcheck.mjs`: 9 assigned items pass; prerequisite/page-cycle
  checks cover 1120 items and 384 pages.
- `audit-manifest.mjs`: 38 relationships over 9 items, 0 defects.
- `manifest-deps.mjs`: 9 items, 0 normalized.
- `item-dependency-levels.mjs check`: 838 items over 258 pages; no item cycle
  or level defect.
- Current in-memory batch recomputation gives batch 96 level 4 with
  prerequisites 88 and 95. The read-only
  `batch-dependency-levels.mjs check` reports the shared run-wide scheduling
  file stale after the current manifests changed: its recorded input SHA-256
  is `477e4926f913bd61321482f4a18b9a05332cfe3f9495387ffc4f6bffc316b7d9`,
  while the current recomputation is
  `5b457deee5f2424aa2e210efe04b7016eed16602cd5b84b8a822c73d05718c08`.
  The shared scheduling file was not edited; the owner/engine must refresh it
  at the drained construction join specified in `WORKFLOW.md`.

The page-level prerequisites and all item-level proof inputs are current. No
mathematical prerequisite or source-resolution gap remains in this assigned
pair. The only outstanding run-wide operation is the owner-controlled refresh
of the stale batch scheduling snapshot; no published content, shared plan,
engine state, or verdict was changed.
