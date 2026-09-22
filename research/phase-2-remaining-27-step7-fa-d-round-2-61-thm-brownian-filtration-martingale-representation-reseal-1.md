# Final adjudicator — position 61, terminal repair and reseal

Disposition: repaired. Source status: verified.

The earlier receipt escalated rejected bytes df5175307d453616cf3d5f8c50bcadbda1b0a77e66eef000558333138e472fe5. The owner changed the item and its filtration supplier; the queue recovery rule expressly requires review of those new bytes and a repaired reseal. The starting item for this review was 3377907beb8b12ee46d02eab0196806b7ca95cb4a0a7df8cf7d2716ca55c59cb. Final item SHA256: c21bb7372e93a839c59b92243c54b305052640b7925357f2b5bc17e0f05498d1. This is a terminal resolution, not a judge verdict or pass stamp.

## Materials and rejection

Read the current item, batch-8 owning manifest and A/B conventions, its exact proof contract and risk record, both Terra records, Alpha row 85, and the original FA evidence. Alpha correctly recognized that a cadlag process can overshoot a level, so that the old stopped process need not be bounded or L2. The single rejudge correctly rejected applying a globally C1 time function to the piecewise-linear step-integrand clock. The owner's intervalwise cosine/sine repair handles that point. The current natural/usual filtration definition now adjoins all ambient null subsets and supplies raw representatives modulo null sets, resolving the former exceptional-set obstruction.

The independent review nevertheless found local obligations: the closed-subspace supplier is for full L2; bounded continuous stopping needed proof; a rational supremum must include an irrational terminal endpoint for cadlag paths; local integrand uniqueness could not be assumed in the patch that is meant to prove it; and arbitrary integrand selections are not canonical.

## Mathematical basis of the final text

Steps 1.1 and 2.1 prove product density and remove the right germ using raw future/past independence, decreasing conditional expectations, Blumenthal and L2 contraction. Event representatives then prove the Brownian increment interface for the usual filtration before step 3.1 uses integration in that filtration. No equality of a raw germ with raw time zero, or sample-space product isomorphism, is assumed.

F2 applies real Ito identities on the finitely many deterministic step intervals. The cosine/sine integrands have expected energies at most exp(q(T))q(T), and their continuous adapted versions are predictable. Steps 4.1–6.1 use the exact triangular coefficient transformation and positive/negative finite pushforward measures for Fourier uniqueness, followed by pi-lambda. Step 8.1 applies the closed-subspace lemma to R_T plus constants in full real L2(F_T), proving closedness by the continuous expectation projection. This supplies exactly the fixed-horizon mean-zero representation and isometric uniqueness.

Step 9.1 uses terminal truncations and Doob L1 on finite grids containing 0 and T, then the countable dense set with T included. Uniform convergence on a measurable full event establishes continuity before any level stopping. Step 10.1 centers M by M0, preserving the local-martingale convention that only stopped increments need be integrable, and normalizes on a fixed F0 full event.

Step 1.2 independently proves bounded stopping for continuous integrable martingales using upward grid approximations, discrete optional sampling, uniform integrability of conditional expectations of the fixed terminal variable, and L1 convergence. Step 11.1 can therefore stop the now-continuous pieces without overshoot and apply the L2 clause. Step 1.3 proves local integrand uniqueness directly with common energy H²+K² and finite-energy isometry, before it is used in either patch. Steps 12.1–14.1 patch predictable disjoint stopping intervals twice. Tonelli and countable intersection convert product-null overlap equalities into pathwise time-a.e. agreement, establishing almost-sure local energy finiteness; further common-energy stops verify the integral identities. Steps 15.1–16.1 discharge uniqueness, time-zero triviality, constants, B, and the full-AC selections.

## Source verification

https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf — Theorem 6.6 and complete proof, printed pp. 122–124, PDF pages 127–129 (zero-based tool pages), lines 7154–7352. I read the complete argument. It supports the representation claim, the closed-range/Fourier method, continuity from terminal truncations and a maximal inequality before level localization, and isometric overlap patching. The detailed raw-to-usual projection and discrete-grid bounded stopping proof in the item are independently supplied to match this library's narrower interfaces. Lawler is retained only as a statement reference; no fresh reading of its proof is claimed here.

Relevant supplier interfaces read and checked include the integral isometry and continuous version, localized integral and stopping identity, usual augmentation, local-martingale definition, full-L2 closed-subspace lemma, Fourier uniqueness, Blumenthal, Levy downward convergence, conditional Lp contraction, discrete bounded optional sampling, fixed-variable conditional-expectation uniform integrability, and UI plus probability convergence implies L1. The repair introduces no existing-supplier edit and no new lemma, theorem, page or pair.

## Scope and checks

Updated only this item's statement/proof metadata, its batch-8 manifest entry, its batch/master proof-contract entries, and its own batch-8 consumer dependency rows. Refreshed the owning consumer-batch record in briefs/tasks/frontier-dependency-ledger.md through the ledger tool. New dependencies are existing published interfaces; sibling consumer rows and published files were not edited.

Focused phase precheck: PASS. Strict proof contract: zero errors, one shotgun-bracket warning on step 2.1. All seven cited facts are used there: completion, raw independence, downward convergence, zero-one law, contraction, and the explicit projection interfaces; the two derivations citing no fact cite already proved steps instead. This is not an unresolved mathematical obligation. Step numbering and references were normalized to the repository's dependency-layer format. Final item whitespace check: PASS.

Queue-status immediately before recording lists positions 1–60 current. Position 62 is already current and is not reopened. Next action after recorder acceptance: review stale position 63. No published mathematical defect found in this repair; no owner mathematical decision remains for position 61.
