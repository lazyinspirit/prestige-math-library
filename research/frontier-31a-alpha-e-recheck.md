# frontier-31a — group Alpha `e`, Step 3 scaffold recheck

This recheck covers batches `2`, `5`, and `6`. I reread the group-e scaffold
review and every assigned batch's `## Step-3 fix pass`, then checked the current
batch manifests, coverage harvests, and `research/plan-spec.json`. The
manifests remain the authoritative unspliced scaffold: the four corresponding
plan records have `items: []`.

## Dispositions

| Batch | Reported finding | Disposition | Current evidence |
| ---: | --- | --- | --- |
| 2 | S3 Theorem 4.51 (abstract pushforward identity). | Closed without change; `stands`. | It is still not the one-dimensional AC substitution route in the 30-A/6-B manifest. |
| 2 | S3 Theorem 4.47 (five-times-covering weak `(1,1)` proof). | Closed without change; `stands`. | The current route uses the declared published maximal-function predecessor, not this alternate proof. |
| 2 | S1 Exercise 1 (monotone-function jumps). | Closed without change; `stands`. | It remains an alternate proof outside the retained monotone-differentiation carrier. |
| 2 | S1 Exercise 4 (exceptional points for an indefinite integral). | Closed without change; `stands`. | It refines a point not needed for the sharp FTC or its assigned applications. |
| 2 | S1 Exercise 23 (HK refinement). | Closed without change; `stands`. | It belongs to the declared gauge-integral route, not the present Lebesgue/AC spine. |
| 2 | S3 Definition 4.50 (general pushforward measure). | Closed without change; `stands`. | It remains broader than the compact-interval substitution claim. |
| 2 | S2 Remark 3 (complex-valued extension). | Closed without change; `stands`. | The manifest retains its intended real-valued compact-interval scope. |
| 2 | S1 Exercise 2 (Borel information on differentiability). | Closed without change; `stands`. | It supplies no retained page claim or dependency. |
| 2 | S1 Exercise 21 (HK Borel measurability). | Closed without change; `stands`. | It is not an input to the planned HK/Lebesgue comparison or AC calculus. |
| 2 | S1 section notes (alternate treatments). | Closed without change; `stands`. | They remain bibliographic pointers, not a needed result. |
| 5 | Periodic weak-derivative interface for `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`. | **Still blocked; pair remains insufficient.** The pushback is correct. | The item now has no invalid `forward_refs` workaround and says `BLOCKED`; its only local dependency is the weighted `ell-2` lemma. PDE-11 is still later at order `458.019`, has `items: []`, and its design supplies neither the required torus coefficient identity nor a materialized target. |
| 5 | Grafakos Exercise 3.3.5 was changed from local support to a deferred PDE-11 handoff. | Closed: deferral `stands`. | The exercise assumes a classically differentiable function with classical `L2(T)` derivative. It does not supply either the required torus weak-derivative definition or $\widehat g(k)=2\pi i k\widehat f(k)$, so the current coverage row correctly defers it to the still-empty PDE-11 page. |
| 5 | FA-18 Wiener-inversion interface for `rem-wiener-lemma-interface-for-the-circle-algebra`. | **Still blocked; pair remains insufficient.** The pushback is correct. | The strategy retains a blocked earlier-owner handoff, without duplicating or misclassifying FA-18 as forward. FA-18 remains earlier at order `288.081` with `items: []`; Müger Theorem 19.9 supports the conclusion but does not materialize the library-owned theorem. |
| 5 | FA-17 holomorphic-functional-calculus interface for `cor-holomorphic-functional-calculus-in-the-wiener-algebra`. | **Still blocked; pair remains insufficient.** The pushback is correct. | The strategy retains a blocked earlier-owner handoff, with no replacement source-only claim or local duplicate. FA-17 remains earlier at order `288.079` with `items: []`; its design still assigns the required homomorphism theorem there. |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations`. | Closed without change. | The current 16-A/7-B scaffold retains explicit dependencies, its declared predecessor, and the fixed Fourier, Gauss-sum, parity, `q=1`, and root-number qualifications. |
| 6 | `number-fields-rings-of-integers-and-discriminants`. | Closed without change. | The current 20-A/7-B scaffold retains explicit dependencies, its declared predecessor, integral-closure/order/basis distinctions, full-embedding discriminant route, and qualified quadratic case. The nonmonogenic entry remains an honest `owner-decision` source obligation rather than an assertion. |

The two new Müger coverage declines are also resolved from current evidence:
Remark 19.10 and Exercise 19.11 are both `stands`. The first only compares
historical proof routes for the reserved FA-18 theorem; the second is a
Gelfand-homomorphism norm-separation exercise. Neither is a dependency or
required result of FR-3's local spine or its deliberately blocked interface.

## Scope decisions and checks

I refreshed `research/frontier-31a-alpha-e-scope-decisions.json`. The current
Grafakos Exercise 3.3.5 deferral created one pending row; after the direct
comparison above, I resolved it as `stands`. `node
tools/scope-decisions.mjs check --run frontier-31a --group e` now reports 49
current declines and 0 errors.

- `manifest-deps` passed for batches 2, 5, and 6: respectively 36, 15, and
  50 items; zero normalized dependencies and zero errors.
- `coverage-checklist --require-destination` passed: respectively 71, 63, and
  102 harvested results; zero errors. Batches 2 and 5 retain their documented
  `coverage-low-yield` advisories, whose decline rows are now current.
- `source-fetch-check` accepted the current receipts: 3/3, 4/4, and 4/4
  fetch-verified sources respectively.
- `content-policy --manifest-only` over the three manifests passed: 101 scoped
  items, zero errors, zero warnings.
- `validate-plan.mjs research/plan-spec.json` passed: the declared page order
  is acyclic and has no item-level cycles, forward references, B-page
  dependencies, or unresolved IDs among currently itemized plan pages.

## Verdict record

I verified the current bytes of
`research/frontier-31a-alpha-e-step3-verdicts.json`
(`sha256:5b01df6e3c1862f4c627f2a0c13a6801a60609774887b7a4fbe1ec731818b803`).
It contains exactly the four assigned A pages: batch 2 and both batch-6 pages
are `sufficient`; Batch 5 is `insufficient` with its three nonempty,
materialization-specific missing obligations. Those bytes express the verified
outcome, so the verdict artifact is intentionally unchanged.

## Owner closure after automatic repair exhaustion

The final automatic repair round left the three owner-materialization findings
open because the referenced FA-17, FA-18, and PDE-11 pages are not authored.
The owner then removed the invalid cross-track dependencies while preserving
the full claims: Batch 5 now contains a local periodic weak-derivative
definition and coefficient lemma, the source-backed Wiener inversion theorem,
and the holomorphic-composition corollary derived from that theorem. The
broader FA and PDE pages retain their general subject matter without being
treated as authored.

The current manifest and coverage records pass dependency, content-policy,
coverage, plan-order, JSON, and scope-decision checks. The corrected verdict is
therefore `sufficient`, as recorded in the current verdict JSON.
