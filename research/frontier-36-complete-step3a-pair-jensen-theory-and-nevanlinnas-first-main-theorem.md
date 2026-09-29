# Step 3a scope report — Jensen theory and Nevanlinna's First Main Theorem

- Run: `frontier-36-complete`
- Pair: A `jensen-theory-and-nevanlinnas-first-main-theorem`; B `jensen-theory-and-nevanlinnas-first-main-theorem-examples`
- Decision: **sufficient**

## Scope basis

The batch 27 manifest contains all seven named CA-NV-1 results from the prose design: Poisson–Jensen, Nevanlinna's counting/proximity/characteristic setup and conventions, the First Main Theorem, characteristic laws, meromorphic order, and the rational-growth characterization. It adds three local supporting results: the centre-divisor Jensen identity needed for the exact finite-target constant, the Ahlfors–Shimizu area identity named in the cited source treatment, and the entire maximum-modulus comparison that distinguishes entire from meromorphic growth. These additions stay within the planned subject.

The B manifest contains each of the five designed examples and the reciprocal-Gamma example required by the current run owner direction. Its published Gamma-page prerequisite is present in both the current batch manifest and current `plan-spec.json`. This run-specific direction resolves the older generic B-page-leaf clause in the track prose. The owner Step-1 record for the Gamma example is `ready`. The older batch-27 notes describe the earlier missing-prerequisite state; the current owner direction and plan records resolve it. The Step-1 item record was not changed here.

The library boundary is clear: the following CA-NV-2 pair owns the logarithmic-derivative lemma, Second Main Theorem, deficiencies, and Nevanlinna–Picard consequences, and consumes CA-NV-1. CA-23's detailed design cites CA-NV-2 for the independent quantitative Picard agreement proof. Thus those results need not be added to this pair, and no pair merger is indicated. The CA-NV-1 opening placement note's phrase “this pair” is broader than its A/B scope if read literally; the later CA-23 specification identifies CA-NV-2 as the Picard proof supplier.

## Source and dependency coverage

The batch 27 coverage record maps the selected claims and examples to Eremenko, *Lectures on Nevanlinna Theory*, §§1–3 (printed pp. 1–6), and Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1 §§1–2, 4, 6–7 and Ch. 2 §1, with the reciprocal-Gamma example also tied to the published Gamma page. I consulted the complete relevant Jensen, First Main, Ahlfors–Shimizu, fixed-rational-composition, and growth arguments in these sources. The source map explicitly assigns logarithmic-derivative/Second Main results to CA-NV-2 and marks stronger angular, moving-coefficient, and fine growth results out of scope.

- [Eremenko, *Lectures on Nevanlinna Theory*](https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf), §§1–3.
- [Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*](https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf), cited chapters and sections above.
- Current dependency evidence: A requires `isolated-singularities-and-laurent-series`, `the-argument-principle-and-rouche`, `harmonic-functions-and-the-poisson-integral`, and `the-lebesgue-integral-and-the-convergence-theorems`; B requires A and published `the-gamma-function`; the in-run cross-batch dependency record is empty.

The current `plan-spec.json` page shells still have empty item arrays pending Step 4; the scoped item inventories for this review are in the batch 27 manifest. This is a scope review only and makes no item-level proof approval.
