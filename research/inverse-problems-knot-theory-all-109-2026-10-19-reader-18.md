# Step 3a reader report — batch 18

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `18`  
Role: `reader`

## Scope and opened inventory

The active autopilot status was recomputed from `.autopilot/`. The run is at
`3a-read`; no reader results have been credited yet. The batch manifest assigns
the following two draft pages and six draft items:

- `library/inverse-problems/linear-gaussian-inverse-posteriors-and-tikhonov.md`
- `library/inverse-problems/linear-gaussian-inverse-posteriors-and-tikhonov-examples.md`
- Dependency order: `lem-ip-singular-gaussian-support-and-pseudoinverse`,
  `thm-ip-finite-linear-gaussian-posterior`,
  `cor-ip-gaussian-map-equals-tikhonov-minimizer`,
  `ex-ip-singular-state-gaussian-posterior`,
  `ex-ip-prior-whitened-tikhonov-posterior`,
  `cex-ip-nongaussian-map-differs-from-posterior-mean`.

I checked the batch manifest, proof-contract entries and their boundary and
finite-check rows, plus the batch notes, coverage record, and cross-batch
dependency record as evidence rather than verdicts. I opened the direct item
prerequisites used in the assigned proofs: `def-axiom-of-choice`,
`def-multivariate-normal-law`, `thm-non-negative-operator-characterisations`,
`thm-non-negative-square-root-exists-and-is-unique`,
`thm-nondegenerate-multivariate-normal-law-has-density`,
`def-moore-penrose-pseudoinverse`,
`thm-moore-penrose-pseudoinverse-exists-and-is-unique`,
`def-gaussian-process`, `def-independent-random-elements`,
`lem-measurable-functions-preserve-independence`,
`thm-finite-gaussian-process-posterior-and-predictive-laws`,
`def-ip-misfit-evidence-and-posterior-law`,
`thm-ip-function-space-posterior-propriety`,
`def-tikhonov-regularised-least-squares`,
`thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`, and
`def-standard-normal-and-normal-laws`. I also checked the conditional-normal
and singular-value-decomposition statements used by those prerequisite proofs.
The two draft batch-16 suppliers were read in full where their statements and
proofs are used; no defect was found in those interfaces.

The A page's required pages were opened:
`bayesian-inverse-likelihoods-and-posterior-propriety`,
`gaussian-process-priors-and-posterior-laws`, and
`the-moore-penrose-pseudoinverse-and-regularised-least-squares`. The first
page's own required page context was also checked:
`function-space-priors-and-random-regularity`,
`bayesian-models-priors-and-posterior-laws`, and
`conditional-distributions-and-regular-conditional-probability`.

## Mathematical review

- `lem-ip-singular-gaussian-support-and-pseudoinverse`: the spectral range
  decomposition, Penrose equations, Gaussian range coordinates, and support
  argument are correct. The proof handles rank zero, intermediate rank, and
  full rank explicitly.
- `thm-ip-finite-linear-gaussian-posterior`: the covariance `S` is positive
  definite; the potential evidence is positive and finite for every datum; the
  finite Gaussian conditioning construction gives the stated all-data version;
  and the range-coordinate square completion yields the displayed mean and
  covariance even when the prior is singular. The rank-zero case is correct.
- `cor-ip-gaussian-map-equals-tikhonov-minimizer`: the support-coordinate
  penalty equals `||z||²`; whitening the noise gives the stated Tikhonov
  problem; the posterior density has its unique mode at the same coordinate
  mean. The separate point-mass case and the induced support-volume convention
  are handled correctly.
- `ex-ip-singular-state-gaussian-posterior`: the matrix, covariance, objective,
  and one-variable minimizer calculations agree with the two supplier results.
- `ex-ip-prior-whitened-tikhonov-posterior`: both whitening identities, the
  Tikhonov minimizer, posterior mean, and covariance `(4/5)I₂` are correct.
- `cex-ip-nongaussian-map-differs-from-posterior-mean`: the evidence bounds,
  unique MAP at zero, non-Gaussian support argument, and positive exact mean
  `(1−e^(−1/2))/Z` prove the stated refutation.

The contracts' derivation rows match the current numbered proof steps. The
rank-boundary rows and both finite matrix computations for the examples agree
with the item proofs. Every assigned statement is complete without an inline
hyperlink. The assigned pages have no Markdown bodies, retain their inventories,
status, requirements, and `page_layout: compact-v1`. No diagram is present in
the assigned items or pages.

## Edits made

I corrected only source locators in three assigned in-flight items:

- `thm-ip-finite-linear-gaussian-posterior`: corrected Clason's equation range
  from `(145)–(148)` to `(13.1)–(13.4)`, and corrected the Dashti–Stuart
  potential-posterior result from Theorem 3.3 to Theorem 3.4. The source's
  §3.1 Theorem 3.1 is separately identified for the conditional-law reweighting
  formula.
- `cor-ip-gaussian-map-equals-tikhonov-minimizer`: corrected the cited Clason
  equations to `(13.2)–(13.4)`.
- `cex-ip-nongaussian-map-differs-from-posterior-mean`: corrected the warning's
  locator to the discussion after equation `(13.4)`.

Evidence: Clason's Chapter 13 identifies Bayes' Theorem 13.1 and equations
`(13.1)–(13.4)`; its assumptions are a positive-definite isotropic Gaussian
prior and noise, and its post-`(13.4)` discussion says the conditional mean need
not generally equal MAP when the prior or likelihood is non-Gaussian or the
inverse problem is nonlinear. The broader singular and weighted statements in
the assigned items are established by their local proofs. See [Clason,
*Regularization of Inverse Problems*, Chapter 13](https://arxiv.org/pdf/2001.00617).
In the current Dashti–Stuart notes, §3.1 Theorem 3.1 gives the conditional-law
reweighting result and §3.2 Theorem 3.4 gives the potential-weighted posterior
formula and proof; §3.2 Lemma 3.3 is not that theorem. See [Dashti and Stuart,
*The Bayesian Approach to Inverse Problems*, §§3.1–3.2](https://arxiv.org/pdf/1302.6989).

These locator-only repairs do not change a proof contract's derivations or
supplier citations, so the batch contract was not altered. The three edited
items had no `verification.judge` record to remove. Reflow and precheck passed
for each edited item. The final batched proof-layout check passed: 3 items, 15
steps, 0 defects.

## Uneditable defects

All four findings below are in published dependencies outside batch 18's edit
scope. They are recorded for the assigned consumers and are not repaired here.

1. `def-moore-penrose-pseudoinverse`, Definition lines 43–46: the paragraph
   joins the text “conventions of Rectangular matrix multiplication and the
   identity matrix I_n, including zero-sized shapes and In orthonormal bases”
   into an ungrammatical sentence. The definition can be interpreted from the
   equations, but the prose around the conventions is malformed. The item is a
   direct prerequisite of `lem-ip-singular-gaussian-support-and-pseudoinverse`.
   Restore a complete sentence and keep its references in `Definition
   references`.
2. `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, Statement line 35:
   “satisfying the four Penrose equations of The Moore--Penrose pseudoinverse
   $A^+$ as the solution of the four Penrose equations” is a broken sentence
   left by citation text. State the existence-and-uniqueness conclusion
   continuously and keep the definition link in `Statement references`. This
   theorem is a direct prerequisite of
   `lem-ip-singular-gaussian-support-and-pseudoinverse`.
3. `def-standard-normal-and-normal-laws`, Definition line 26: citation titles
   interrupt the construction prose (“By The standard normal density…”, “The
   law of a random element is a probability measure makes…”, and “in The Dirac
   set function…”), leaving the definition ill-formed. Restore the three
   mathematical implications in complete prose; the existing links belong in
   `Definition references`. The direct assigned consumer is
   `cex-ip-nongaussian-map-differs-from-posterior-mean`.
4. `def-tikhonov-regularised-least-squares`, Definition line 37: the live
   wikilink `[[def-inner-product-norm]]` remains inside the complete definition.
   Move it to an immediately following `## Definition references` section. The
   direct assigned consumer is `cor-ip-gaussian-map-equals-tikhonov-minimizer`.

## Page verdicts and blockers

- `linear-gaussian-inverse-posteriors-and-tikhonov`: pass. Its inventory and
  `requires` agree with the manifest; the page is YAML frontmatter only and
  retains `compact-v1`.
- `linear-gaussian-inverse-posteriors-and-tikhonov-examples`: pass. Its example
  inventory and `requires` agree with the manifest; the page is YAML
  frontmatter only and retains `compact-v1`.

No batch-local blocker remains. The four published-dependency defects are
outside this reader's write scope and are included in the findings payload.
Coverage is limited to batch 18 and the direct prerequisite interfaces needed
for its claims; this was not a repository-wide audit of every transitive
dependency.
