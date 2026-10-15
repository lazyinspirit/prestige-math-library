# Batch 2 authoring notes — fixed-design regression

## Scope and plan reconciliation

This batch owns A page fixed-design-linear-regression-and-estimability and B
page fixed-design-linear-regression-and-estimability-examples, order 1920.
Their IDs and title agree between the current track design and
research/plan-spec.json. The task/spec list six prerequisite pages; all six
remain in the batch manifest. The design prose names SME-01, MSF-01/02, and the
linear-algebra and moment suppliers; it does not conflict with the broader page
requirements.

The older models dossier proposes the pre-integration page names
linear-regression-and-prediction and
linear-regression-and-prediction-examples and mixes exact Gaussian inference
into its SME-02 summary. The controlling current plan fixes the two page IDs
used here and reserves exact Gaussian inference for SME-03. The authoring
follows those current IDs and keeps the exact t/F and Gaussian coordinate laws
out of this pair.

The current row for this A page in
research/statistical-models-experiments-62-drift-evidence.json lists the same
six `declaredRequires` as the task, plan, and batch manifest. It introduces no
additional nearby prerequisite. The batch-1 manifest initially had an empty
SME-01 inventory, but before this handoff it now lists
`def-scientific-statistical-model-contract`; that actual definition and its
ready Step-1 record were inspected and incorporated below.

The batch dependency record assigns batch 2 level 1, requiring batch 1. The
current item graph includes the authored batch-1 supplier item and has levels
0 through 5 with no cycles:

| Item level | Items |
|---|---|
| 0 | lem-linear-contrast-statistics-are-borel-measurable, def-least-squares-solution-set |
| 1 | def-fixed-design-linear-regression-model, thm-least-squares-fitted-vector-and-solution-set |
| 2 | def-linear-estimability-in-fixed-design, thm-ols-unbiasedness-and-covariance-full-rank, ex-high-leverage-is-a-design-feature |
| 3 | thm-linear-estimability-iff-row-space |
| 4 | thm-gauss-markov-for-fixed-design-regression, ex-collinear-fixed-design-estimability |
| 5 | cex-heteroskedasticity-invalidates-ols-blue |

The extra local measurability lemma supplies the measurability required by the
published estimator definition without using Choice. The least-squares
solution-set definition is justified by its local theorem, which depends on
the definition through ordinary deps.

## Supplier inspection and mathematical conventions

The live published MSF suppliers were inspected directly: the statistical
experiment and parametric-model definitions, estimand and estimator
definitions, expectation and moment definitions, expectation linearity,
covariance bilinearity, and finite weighted expectation. Their current
contracts do not assert parameter measurability or a common probability space
across parameter values. The regression model here is a family of laws
parameterized by beta, with expectations taken separately under each law.
The older pair-audit row still labels the MSF-01/02 item interfaces
planned/unpublished. That status predates the current published carriers; the
current item files and proofs were inspected and control this authoring.

The linear-algebra suppliers were also read in full: the generic
least-squares normal-equation theorem, unique-nearest-point projection theorem,
orthogonal-projection definition, matrix-of-the-adjoint theorem, and
rank-nullity. The least-squares theorem applies to finite-dimensional
Euclidean spaces; in standard real coordinates its adjoint is X^T. Projection
uniqueness yields the unique fitted vector and residual even when coefficients
are not unique. Rank-nullity gives the affine solution dimension.

The estimability statement means **linear estimability**: an unbiased
measurable statistic of the form a^T Y exists for every beta. It does not
claim that no nonlinear unbiased estimator exists when a contrast is outside
the row space. The row-space equivalence follows from
E_beta(a^T Y)=(X^T a)^T beta for every beta.

The OLS moment and Gauss–Markov results require fixed full-column-rank X,
E_beta epsilon_beta=0, and
Cov_beta(epsilon_beta)=sigma^2 I_n with sigma^2>0. The coefficient covariance
and variance comparison use only finite first and second moments; Gaussianity
is not assumed. No proof uses the Axiom of Choice. The heteroskedastic
counterexample explicitly has covariance diag(1,9) and compares two unbiased
linear estimators.

## Supplier inspection and cross-batch reconciliation

The current batch-1 A page lists `def-scientific-statistical-model-contract`,
and its Step-1 record is `ready`. I inspected that actual item body. Its
Definition calls a contract an “explicit record of the following fields for a
specified analysis” and then requires an observation record and units, indices,
quantity status, target, observation mechanism, law/support, conditioning, and
adequacy classification. It explicitly says these bookkeeping fields do not
establish scientific adequacy or causal identification.

The batch-2 fixed-design definition now directly depends on and links that
supplier. It records the abstract analysis contract: one observed Borel vector
`Y in R^n`, row coordinates as response slots with no time or application
unit, fixed `X` and fixed parameter `beta`, random/observed `Y`, random
residual, the direct law `P_beta`, fixed-design conditioning, no added support
assumption, and no population, causal, or empirical-adequacy claim. It states
that sampling/assignment units and scientific application specifics are
unspecified. It classifies the mean equation as empirically assessable in a
specified application, while recording that this pair has no application data
or validation and asserts no adequacy. The A page repeats that boundary so
readers do not treat the mathematical mean condition as applied validation.

The batch-2 cross-batch input now marks both the page edge and exact item edge
as verified, with the supplier ID and checked interface recorded. This
reconciles the earlier empty-manifest observation; no supplier text or item ID
was invented. The seven affected items were rechecked against the now-present
supplier after making the abstract-model boundary explicit.

Their Step-1 records were created as escalated before the supplier arrived.
The current `step1-decisions.mjs record` interface rejects any transition
from an escalated record with “Only the owner may resolve this record.” Per the
dispatch, no `--owner` flag was used and none of the escalations was
overwritten. The earlier record reasons are superseded by this note and the
verified cross-batch evidence; owner reconciliation is still required for those
seven records.

## Sources read and harvested

Both independent course treatments were read in full from the local complete
text, and their current public full-text URLs passed the command
node tools/source-fetch-check.mjs --coverage
research/statistical-models-experiments-62-batch-2.coverage.json --stamp
(2/2 sources fetched and verified). There were no retrieval failures, so no
source_resolution record was needed and no source was dropped.

- MIT 18.443, *Statistics for Applications*, Section 15, PDF pp. 1–4 and
  8–11: fixed-design notation, least-squares objective and normal equations,
  plus rank/collinearity discussion. Its Gaussian coordinate, chi-square, t,
  and F conclusions are deferred to the planned SME-03 exact-inference page.
- Wickham, *Statistics: Lecture Three — Linear Models*, PDF pp. 2–6, 8,
  11–12, and 17: matrix model, least-squares geometry and normal equations,
  estimability, full Gauss–Markov competitor proof, and diagnostic workflow.
  The p. 5 covariance algebra is not adopted; the local theorem proves the
  covariance calculation from the published moment identities.

Every harvested heading and its included, inline, or deferred disposition is
listed in the batch coverage file. The source locator distinguishes the
Gaussian assumptions in the MIT inference section from the moment-only claims
proved here.

## Checks and status

The A page has 8 items and the B page has 3 examples/counterexamples, within
the 100-item page cap. One finite smoke check is attached to the exact
collinear two-column witness. Its result checks only that finite witness; the
general theorem remains supported by the local proof and published suppliers.

Scoped final checks passed: item dependency levels match the batch-1/batch-2 graph (levels
0–5 across 14 items, no cycle); `manifest-deps` checked all 11 items; focused `depcheck`
checked all 11 items and their 464-item / 131-page prerequisite closure with
no errors or warnings; `content-policy` checked 11 items with no errors or
warnings; `precheck` passed all 8 proof-bearing items (the three definitions
are not applicable); `proof-layout` checked 11 items and 23 numbered steps with
no defects; and `rendercheck` checked 13 files with no errors or warnings.
The strict proof-contract check passed all 11 items, and the collinear finite
smoke passed. The coverage checklist found 11 harvested results, no errors or
warnings; both sources are fetch-verified. The scheduling input hash recorded
in the coverage file is
`be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`.

The proofs are authored as drafts. Four item-specific Step-1 records are
ready: the measurability lemma, least-squares solution-set definition and
theorem, and leverage example; all four ready-record hashes were rechecked.
Seven items remain escalated pending owner
reconciliation of their now-verified supplier edge: the fixed-design model
definition, estimability definition and theorem, OLS moment theorem,
Gauss–Markov theorem, collinear example, and heteroskedasticity counterexample.
Readiness is author evidence, not independent mathematical approval.
