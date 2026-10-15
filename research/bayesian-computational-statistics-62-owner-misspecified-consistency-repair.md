# Second focused cycle: original weak-test a.s. theorem refuted and repaired

This supersedes the unresolved-main-theorem disposition in the intake, while
retaining that investigation as history. Root supplied an explicit heavy-tail
counterexample, which this same supplier/consumer reviewer independently
verified before editing. The defect is now a false original assertion, not
merely a missing local proof. The necessary hypothesis correction was
explicitly authorized by the root. Both native source writers were drained.

## Verified counterexample

The complete model, prior, metric, test calculations and posterior failure
are local in `items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md`.
In particular the original claim's allowance of infinite-mass sigma-finite
tilts is used honestly: `Q_j(X)=infinity`, but its tested product integrals
are finite and tend uniformly to zero. All original model densities are
finite, normalized and jointly measurable; the KL minimum is finite, the
unique minimizer has prior mass one half, and every log contrast is
integrable. Weak expected test errors tend to zero, whereas posterior mass
outside each discrete radius below one has a.s. limes superior one.

Independent verification checked the following exact points. The heavy-tail
normalizing constant `c` is also `EY`; the tail first moment is exactly
`c/log b`. The truncated second moment is `O(b/log^2 b)`. At
`b_n=n/log^(3/2)n`, the probability of any discarded observation tends to
zero and the centered truncated-sum variance divided by `(n/log n)^2`
tends to zero. Thus `S_n/(n/log n)->-c` in probability. The new local
random-walk supplier proves `sup S_n=infinity` a.s. by the reflected
supremum, bounded-truncation DCT and characteristic-function argument;
its proof needs only an integrable centered nondegenerate increment.
Least admissible deterministic hitting-time quantiles `N_j` avoid extra
selection assumptions. Borel–Cantelli gives `T_j<=N_j` eventually and the
single prior term at `T_j` is at least `exp(j-1) pi_j`, which diverges.
The exact posterior evidence is `1/2+A_n`, finite and positive, so the
posterior-excursion conclusion follows without a Bayes-version ambiguity.

## Rich sound replacement

The repaired main theorem retains the supplied dominated IID model,
nonunique full minimizer set, arbitrary sigma-finite likelihood tilts,
relative KL support and almost-sure posterior conclusion. Its sufficient
test interface now requires a.s.-vanishing type-I statistics and
exponential uniform type-II error. Type-I expectations need not be
summable or exponentially small. The splitting lemma was generalized to
that same interface and its complete proof retained; the main theorem
now has a complete two-step local application proof. No appeal is made to
the false amplification in the source article.

The substantial oscillation prerequisite is a new A-page lemma, and the
refuted original assertion is preserved explicitly as the B-page
counterexample. Both remain draft. The A/B page inventories and prose were
updated. Exact before images of both pre-existing item carriers and the
three changed pages are in the sibling `*-before/` directory.

## Same-reviewer consumer dispositions

The old/current item-link inventory has no item consumer of the original
main theorem. The sole original direct item consumer of the changed
splitting lemma is the main theorem itself; its full proof was repaired
after the supplier. New contextual counterexample links occur only in
Remarks and are not logical premises. The counterexample has no item
consumers and consumes the new proved A-page random-walk supplier.

The planned downstream page relationship to batch 13 was retained, with
the following actual consumer-use checks. These are focused dependency
dispositions, not fabricated whole-item review or acceptance stamps.

| Actual batch-13 item | Supplier-use disposition |
| --- | --- |
| `lem-local-lipschitz-class-empirical-process-bound` | Its complete statement/proof uses IID symmetrization, signs and chaining, and has no consistency-theorem premise. No mathematical edit required for this supplier change. |
| `thm-lan-implies-total-variation-bvm` | Compact-uniform LAN and contraction outside every divergent LAN-scale radius are explicit premises. Ordinary consistency never discharges the rate. No mathematical edit required. |
| `cor-qmd-ac-component-lan-to-bvm` | Uses normalized AC proxy likelihood, separate compact-uniform proxy-LAN, and explicit posterior-rate assumptions. No reliance on weak tilted tests. No mathematical edit required. |
| `thm-misspecified-iid-lan-under-kv-smoothness` | Uses local KL expansion, differentiability in probability, square-integrable log-Lipschitz envelope and the empirical-process lemma. It makes no posterior-consistency inference. No mathematical edit required. |
| `cor-misspecified-iid-bvm-under-kv-regularity` | Explicitly assumes every-diverging-radius root-n contraction and says ordinary KL consistency alone does not discharge it. No mathematical edit required. |
| `thm-misspecified-mle-sandwich-expansion` | Separately assumes consistent approximate MLE and, for posterior recentering, the full rate-contraction/BvM interface. No MLE consistency is inferred from the repaired supplier. No mathematical edit required. |

Read complete actual Statements and Proofs of these six items. The batch-13
page prose was surgically updated to describe the proved sufficient
consistency interface and distinguish it from the retained root-n rate
premise. The existing three examples use their own explicit finite-model
calculations/conditional theorem assumptions; no changed supplier premise
was introduced. There are no direct/indirect logical consumers beyond
the repaired main theorem for the changed splitting result, and no direct
logical main-theorem consumers to propagate further. The A/B page and
downstream sequencing edge remain intact.

## Root-owned metadata proposals

`bayesian-computational-statistics-62-owner-misspecified-consistency-proposals.json`
contains source-exact full manifest entries and proof contracts for all four
changed/new items, with complete actual step claims, source-section quotes,
dependency arrays and citation-use mappings. The auxiliary oscillation
proposal records its source reading and contract separately. These are
proposals only: no live manifest, contract, numeric dependency label,
readiness record, certificate, source hash, native state or gate permission
was edited by this reviewer. Root must integrate these exact current
carriers, replace stale escalated readiness honestly, and recertify in
dependency order before any frontier gate.

The required current BCS-09 design Scope/Proof-route replacement is:

> For a dominated IID model with supplied jointly measurable finite-valued
> densities, a nonempty finite-KL minimizer set and positive prior mass in
> every relative KL neighborhood, define the arbitrary sigma-finite
> likelihood tilts at any selected minimizer. Prove almost-sure posterior
> exclusion of every fixed neighborhood complement using tests whose
> statistics vanish almost surely and whose uniform tilted type-II error
> is exponentially small. Type-I expectations need not be summable. Retain
> the nonunique minimizer set and all sigma-finite tilt masses. Preserve the
> original weaker both-errors-vanish assertion as an explicit counterexample:
> its normalized heavy-tail model has finite KL minimum, positive minimizer
> prior mass, and valid weak tests, but recurrent posterior excursions.
> Supply the centered integrable random-walk unboundedness lemma locally.
> Apply the locally proved KL denominator and generalized test-splitting
> lemmas; do not invoke the false weak-test amplification. Keep the compact
> unique-minimizer sufficient construction under its existing fractional-
> moment continuity and likelihood-ratio-integrability conditions. Preserve
> all existing examples and add the exact counterexample. Ordinary
> consistency is contextual for BCS-10 and does not discharge that page's
> explicit every-diverging-radius root-n posterior-contraction premise.

The same correction should replace the BCS-09 source-comparison row's
implicit endorsement of bare weak tests. Existing page identities,
prerequisites and other pair designs are unchanged. This report supplies
the concrete prose replacement rather than editing the shared design file.

## Required formatting check

After the final item edits ran exactly:

`node tools/proof-layout.mjs items/lem-exponential-test-posterior-splitting-at-kl-projection.md items/thm-posterior-consistency-at-kl-projection.md items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md items/lem-centered-integrable-iid-random-walk-is-unbounded-above.md`

Exit 0; `proof-layout: 4 items, 19 steps, 0 defects`.
No optional tests or gates were run. This is the second and final focused
review→repair cycle for the escalation, not an additional workflow review
or an acceptance stamp.
