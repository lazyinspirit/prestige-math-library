# Batch 88 source reading — large-deviation variational mechanics

Run: `physics-non-fluid-129-2026-10-21-r2`  
Date: 2026-10-21  
Scope: `csm-frontier-large-deviation-ensembles` and its B example.

## Touchette

Hugo Touchette, “The large deviation approach to statistical mechanics,”
complete arXiv PDF: <https://arxiv.org/pdf/0804.0327>.

- Read Section III.E.4, equations (59)–(60), printed pp. 19–20 / PDF pp. 18–19. It states the exponential-integral variational formula for a continuous tilt and explains its multiple-maximizer use. The review does not give a full compact-space finite-cover proof there; the local compact-space theorem supplies it and proves the normalized tilted-law LDP.
- Read Section IV.B, printed pp. 26–27 / PDF pp. 25–26. It identifies the empirical probability vector of a finite alphabet and its relative-entropy large-deviation cost. The run’s imported Sanov supplier gives the exact finite-support statement and complete local source proof used by the consuming item.
- Read Sections V.B–V.D, printed pp. 39–50 / PDF pp. 38–49, for the reference-law entropy, constrained energy, and canonical Gibbs weighting. The review sets its physical convention (k_B=1) and works with thermodynamic-limit notation; the local mean-field result separately states the finite-alphabet product law, dimensionless exponent βh, and matching-shell hypothesis.
- Read Section V.E, printed pp. 52–54 / PDF pp. 51–53. It explains why nonconcave entropy cannot be recovered by formal Legendre–Fenchel inversion and why canonical realization is governed by supporting-line geometry. The local theorem proves the finite-alphabet supporting-line criterion directly; the B example proves its specific nonexposed-energy claim.
- Read the review’s Curie–Weiss contextual references in Section V.D and the distinction between equilibrium minimizers and arbitrary stationary points. It is not used to supply the Curie–Weiss global minimizer proof.

The downloaded raw PDF is
`research/physics-non-fluid-129-2026-10-21-r2-batch-88-sources/raw/touchette-2009-large-deviation-statistical-mechanics.pdf`, SHA-256
`60929ffd10c0b768881a980c0a2a2330c5e30e65ca4d99e2a370c6fde674e272`.
The source-fetch stamp records 1,121,975 bytes, 95 pages, and the matching first
16 SHA-256 digits.

## Poisat

Julien Poisat, *Introduction to Large Deviations*, complete author-hosted lecture
notes: <https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf>.

- Read Section 2, Theorem 2.1 and its proof indication, printed pp. 4–6 / PDF pp. 4–6. It uses multinomial type probabilities, Stirling’s estimate and a finite count of types. The notes direct the reader to fill the proof steps; the local consumer relies on the exact imported Sanov theorem instead of treating those indications as a complete external proof.
- Read Section 3.1’s LDP definition and Section 3.4’s Varadhan lemma and full proof-indication sequence, printed pp. 8–11 / PDF pp. 8–11. Several upper-bound steps are exercises, and the normalized tilted-law LDP is not supplied. The local compact Laplace item proves both claims from the open/closed LDP bounds.
- Read Exercise 19 and Solution 19, printed pp. 10–11 and 20 / PDF pp. 10–11 and 19. The solution reduces the Curie–Weiss partition function to a variational problem and computes first and second derivatives, then asks the reader to draw the variation table. The local Curie–Weiss proof supplies uniqueness of the positive solution, both global minima, and endpoint checks.
- The notes do not give the binary (q_1^{1/4}) nonexposed-energy example. They serve as an independent treatment of the finite-alphabet Sanov, exponential-tilt, and Curie–Weiss variational interfaces; the B example’s exact construction and convexity proof are local.

The downloaded raw PDF is
`research/physics-non-fluid-129-2026-10-21-r2-batch-88-sources/raw/poisat-introduction-to-large-deviations.pdf`, SHA-256
`2b29c9acd5e4ecd63eb7fb46b3b2f2444f6f94dfc7a05dcd26c482b9b425e948`.
The source-fetch stamp records 361,279 bytes, 21 pages, and the matching first
16 SHA-256 digits.

## Harvest disposition

Both source readings support all four authored results. Each item’s `sources`
coverage entry records its exact locator and per-item use. No source was dropped,
replaced, or escalated. These readings and fetch stamps are source evidence only;
they do not replace local proofs, supplier-use checks, or independent review.
