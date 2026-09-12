# Phase 2 next 17 — beta batch 3 construction evidence

Status: **READY** — all 22 owned outcomes (15 A and 7 B) have fresh,
non-owner readiness records bound to the current manifest and dependency hashes.
This is Step 1 construction evidence, not independent mathematical approval;
owner/operator reconciliation and Step 3 review remain necessary. No published
content, shared plan, engine state, selected pair, or verdict was edited.

The scaffold and coverage were imported from `phase-2-next-15` batch 3 as
directed by the run import record. Existing ready inventory and stable IDs were
preserved. Fresh proof-level review found genuine dependency and source-metadata
drift, which was repaired only in the owned manifest and coverage before fresh
outcomes were recorded.

## Instructions, run evidence, and controlling design

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the assigned task, the current run planning notes,
prerequisite audit, drift report, blockers, covers and scope ledger, the owned
manifest/coverage/import note and consumer input, and the relevant statements
and proofs of every actual direct and transitive supplier. The live `.autopilot/`
state and git history, not any concluded `RESUME.md`, were used for run state.

The controlling mathematical design is the complete **PT-9 — Central limit
theorems** section of `research/plan-probability-track.md`, beginning at line
1317. Its scope, finite-variance normalization, direct near-one-product route,
Feller-negligibility warning, singular-covariance convention, Levy-continuity
condition, and prohibition on importing FA-19 or a Berry--Esseen estimate are
preserved.

## Current-plan comparison and recorded conflict

The current `research/plan-spec.json` page object agrees with PT-9 and the
dispatch on the A-page ID, title, order 288.113, category, B companion, and all
thirteen required pages. The one conflict is representational: the current plan
has `items: []`, whereas PT-9 specifies 15 A items and 7 B items. The current
plan still controls page metadata and prerequisite edges, but the run's
prerequisite audit explicitly says an empty pre-materialization array is not
permission to delete an imported completed inventory. The 22-item inventory was
therefore preserved. No other plan/design conflict was found.

## Mathematical and dependency audit

The normal characteristic-function lemma formerly depended on
`thm-product-rule`, which is a combinatorial product rule and cannot justify the
calculus step. Its strategy and dependencies now give the actual route: establish
the first absolute Gaussian moment, differentiate the characteristic function,
integrate by parts on finite intervals, pass to the limit by DCT, solve
`phi'=-t phi`, and apply the affine transform formula. The finite-interval
Riemann/Lebesgue bridge, FTC, exponential/trigonometric derivative rules,
linearity, and zero-derivative supplier are explicit.

The second-order expansion uses the bounded quadratic Taylor remainder and DCT
under only a finite second moment; no third moment is smuggled in. The iid and
triangular-array proofs normalize first. Their growing products are controlled
by `lem-product-of-near-one-characteristic-factors`, proved by the complex
exponential series and finite-product telescoping. The sufficiency proof no
longer mentions an unavailable logarithm lemma and uses neither complex
logarithms nor contour integration.

The Feller converse was rebuilt along Billingsley's canonical-measure route and
does not run the sufficiency theorem backwards. For
`nu_n(B)=sum_k E[X_{n,k}^2 1_{X_{n,k} in B}]`, an inline Helly diagonal argument
uses Bolzano--Weierstrass, right-continuous regularization, Froda, and the
Lebesgue--Stieltjes correspondence to obtain vague subsequential limits. The
functions `h_t(x)=(exp(itx)-1-itx)/x^2`, continuously extended at zero, turn row
characteristic products into canonical-measure exponents. Forward Levy plus the
assumed normal limit identifies the exponent; differentiating twice under the
finite limiting measure and characteristic-function uniqueness forces the
limit to be `delta_0`, which is exactly the Lindeberg tail conclusion. This
route has no converse-Levy, logarithm, circular sufficiency, or forward
dependency.

The imported source metadata incorrectly treated Durrett Theorem 3.4.14 as the
Feller converse. The complete statement shows that it is instead an iid normal
domain-of-attraction criterion under arbitrary centering and normalization, and
Durrett refers its proof to Gnedenko--Kolmogorov. Coverage now marks that result
out of PT-9 scope and cites Billingsley Theorems 28.1--28.4 and Example 28.4 for
the complete normalized infinitesimal-array converse. Durrett Examples 3.4.11,
3.4.12, and 3.4.13 were likewise separated rather than attributed as one
triangular-array example.

The infinite-variance counterexample now constructs the standard Cauchy density,
normalizes it by the arctangent calculus, obtains its transform from the
published density-inversion corollary through the integrable transform
`1/(1+t^2)`, proves the second moment infinite by monotone convergence, and uses
forward Levy to rule out a square-root-n weak limit. It does not depend on its
own B-page item or the later Fourier-analysis page. The Feller counterexample
checks that the single Gaussian summand has a strictly positive tail second
moment. Truncated second moments, uniform moments, covariance projections,
singular directions, and density computations now declare the measurable,
order, integration, Euclidean Cauchy--Schwarz, and zero-integral suppliers used
for well-definedness.

Every declared supplier's relevant complete statement and proof, or defining
contract where no proof applies, was examined for hypotheses, implication
direction, normalization, characteristic-function sign convention,
well-definedness, publication state, and axiom strength. Local dependencies are
strictly earlier. No missing, circular, forward, inadequate, or Recorded
dependency remains. Page membership was not treated as proof evidence.

No defective published item lies on an actual owned proof path. The incorrect
Durrett attribution and the combinatorial `thm-product-rule` edge were defects
of the owned imported scaffold, not published-content defects; both were
repaired here. No canonical-ledger repair request is needed from this batch.

## Choice ledger

- Full AC is stated where inherited published interfaces require it: construction
  of normal laws and independent copies, the Levy/uniqueness route, the
  finite-dimensional Gaussian realization, and the compact
  Riemann/Lebesgue bridge used in the normal-transform proof.
- The De Moivre--Laplace specialization retains the published
  `AC -> DC -> AC_omega` chain used by the countable independent-copy
  realization.
- Choice-free local branches remain choice-free, including the second-order
  characteristic expansion, the near-one product lemma, and Lindeberg implying
  Feller negligibility.
- No incompatible axiom is combined with AC. No Recorded result proves a
  replacement, and the audited closure has no path from Foundations to
  `deferred-set-theory-beyond-choice`.

## Full-text source evidence and dispositions

Coverage records 31 harvested results and a valid disposition for every one.
Five complete authoritative sources were downloaded, text-extracted, and the
listed arguments read in full:

- Durrett, *Probability: Theory and Examples*, fifth edition: Sections 3.1,
  3.3, 3.4, and 3.10 at the exact theorem/example ranges recorded in coverage;
  490 pages, SHA-256 prefix `aeac36cbf5e44c53`.
- Aldous--Chewi, *Probability Theory* notes: Theorems 5.2--5.6,
  Corollaries 6.1--6.3, and Theorems 8.2 and 8.4; 104 pages, prefix
  `a20ea8ff8e35178e`.
- Varadhan, *Probability Theory*, Chapter 3: Theorems 3.17--3.18, Remark 3.3,
  and Exercises 3.17--3.19; 50 pages, prefix `49bd43f7a334e2fc`.
- Norris, *Probability and Measure*: Proposition 8.1.1 and Theorem 8.2.1;
  54 pages, prefix `f05c0da722c87484`.
- Billingsley, *Probability and Measure*, third edition: Theorem 27.2 and
  Theorems 28.1--28.4 with Example 28.4; 608 pages, prefix
  `1813e8c52c7424a8`.

All five original URLs succeeded on the recorded full-text retrieval. No retry
exhaustion, source drop, alternative-proof waiver, or owner source escalation
applies. General infinitely divisible limits and nonlinear delta-method material
are deferred to `owner-decision`; three-series and wider domain-of-attraction
material are out of scope with specific reasons. No harvested result is left
undisposed.

## Cross-batch dependencies and owned outcomes

There is no new same-run consumer/supplier edge and no new prerequisite pair.
The owned `research/phase-2-next-17-batch-3.cross-batch-dependencies.json`
remains the reviewed empty array, so refreshing the canonical frontier ledger
requires no Batch 3 edge. Planned suppliers were not treated as published.

All 22 items were built and recorded exactly once in manifest prerequisite
order with `node tools/step1-decisions.mjs record`, without `--owner` and
without overwriting an escalation. The records contain the exact examined
dependency IDs and evidence basis. There are 22 `ready`, 0 `escalated`, 0
missing, and 0 dependency-array mismatches in the owned pair.

## Checks actually executed

- Owned `manifest-deps`: 22 items, 0 normalized, 0 errors.
- Owned scaffold `content-policy --manifest-only`: 22 scoped items, 0 errors,
  0 warnings.
- Owned `coverage-checklist`: 1 page, 31 harvested results, 0 errors, 0
  warnings.
- Owned `source-fetch-check --stamp`: 5/5 fetch-verified and 5/5 resolved, 0
  newly stamped and 0 documented drops.
- Fresh owned readiness verification: 22/22 records exist, are non-owner and
  `ready`, match the manifest's dependency arrays, and are bound to current item
  hashes.
- Whole-run `manifest-deps`: 521 items, 0 normalized, 0 errors. Whole-run
  scaffold policy: 521 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success; the
  declared page order is acyclic and consistent, with no item cycle, forward
  reference, B-page dependency, or unresolved ID among the 1022 pages carrying
  inventories. It notes 597 planned pages with no item list and existing
  redundant-prerequisite diagnostics.
- `manifest-integrity --run phase-2-next-17`: all 34 owed pages present, no
  scope drift. `fwdcheck --quiet`: success.
- `extcheck --quiet`: success with 55 repository-wide
  `unproved-on-published` warnings; none is an owned item or enters this pair's
  audited dependency closure.
- `frontier-dependency-ledger refresh --run phase-2-next-17`: refreshed and
  deduplicated; the empty Batch 3 input adds no row and the shared ledger needed
  no content change.
- Whole-run readiness snapshot: 513/521 ready and 8 explicit escalations, all
  on the unrelated `orientations-poincare-lefschetz-and-alexander-duality` and
  `the-de-rham-theorem-and-degree` pages. Accordingly the whole-run readiness
  command exits nonzero while this owned pair is 22/22 ready.
- Live status through the documented `tools/tsx-run.mjs` launcher reports
  `phase-2-next-17` running, Step 1 scaffold at 8/11 and nothing in flight; the
  engine has not yet reconciled this worker artifact. Plain Node cannot execute
  the `.mts` entrypoint in the installed runtime, so it was not used as status
  evidence.
- `git diff --check` on the owned artifacts and readiness records: clean.

Unresolved owned findings: **none**. The full engine gate was not invoked;
reconciliation and Step 3 remain responsible for independent review.
