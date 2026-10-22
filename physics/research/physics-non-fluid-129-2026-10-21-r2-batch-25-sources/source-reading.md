# Batch 25 source reading — emg-fx10

Run: physics-non-fluid-129-2026-10-21-r2

The two complete full-text PDFs below were downloaded to this batch’s raw
directory, extracted with PyMuPDF for page-level inspection, and checked with
source-fetch-check --stamp. Their SHA256 values match the local raw files.
The A page has two independent treatments, including full lecture notes; the B
page also records both sources. No URL failed, so there were no recovery
retries, drops, or source-resolution alternatives.

## Ralf Hiptmair, “Maxwell’s Equations: Continuous and Discrete” (2015)

ETH Research Report 2015-18, 56 pages.

- URL: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf
- Local raw file: research/physics-non-fluid-129-2026-10-21-r2-batch-25-sources/raw/hiptmair-maxwell-continuous-discrete.pdf
- SHA256: e190fb162cf851f32a1b9b80a39f0ed268d34987026600bae937d99b1875a677
- Fetch stamp: 569800 bytes, 56 PDF pages, hash prefix e190fb162cf851f3.
- Inspected §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27). Definition 4 specifies a finite oriented mesh; Definition 5 identifies an ℓ-cochain with its real values on oriented ℓ-facets; Definition 6 builds the discrete exterior derivative from relative-incidence signs. Theorem 7 states that consecutive discrete derivatives compose to zero, equivalently that consecutive incidence matrices multiply to zero.

Disposition by harvested result:

- Definitions 4–6 support def-emg-fx-cochain-maxwell. The local definition states dimensions, dual bases, map shapes, positive mass maps, and the two identities. It admits arbitrary finite matrices satisfying those identities, not only mesh-derived incidence matrices.
- Theorem 7 supports prop-emg-fx-discrete-gauss-preservation; its hypotheses are exactly the two zero-composition identities used in the local proof.
- Theorem 8’s cochain-potential statement is out of scope: it assumes trivial topology, while this pair neither assumes that condition nor proves potential existence.
- Equations (42)–(44), which sample continuum solutions into cochains and then obtain exact discrete equations, are out of scope. This pair constructs no sampling map and asserts no continuum consistency or convergence theorem.
- The opening of §3.4 distinguishes topological cochain calculus from the additional material-law and reconstruction structures. This supports the explicit boundary that the current abstract finite model does not establish a continuum approximation.

## Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations (2007)

University of Twente doctoral dissertation, 210 pages.

- URL: https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf
- Local raw file: research/physics-non-fluid-129-2026-10-21-r2-batch-25-sources/raw/harutyunyan-compatible-maxwell-thesis.pdf
- SHA256: 111b7106803e27622b11302b782305d3ff5f418fe20e54c21b1fe410c0fe8bb0
- Fetch stamp: 4106706 bytes, 210 PDF pages, hash prefix 111b7106803e2762.
- Inspected Ch. 6, §§6.4–6.9, printed pp. 161–174 (PDF pp. 171–184). The source fixes a bounded domain in $\mathbb R^3$, linear material forms, and perfectly conducting boundary conditions; it uses conforming Whitney edge elements and symmetric positive finite-element mass matrices. Equations (6.54)–(6.56) give its own staggered leapfrog, a CFL condition depending on an amplification-matrix eigenvalue, and a stated source-free discrete energy. Section 6.9 constructs discrete divergence-free fluxes using its Whitney/de Rham sequence, with its stated initial-divergence and zero-charge restrictions.

Disposition by harvested result:

- The positive material forms and mass matrices in §§6.5–6.7 are an inline comparison for def-emg-fx-cochain-maxwell. The local definition permits arbitrary symmetric positive maps and does not identify them with a continuum constitutive law.
- The leapfrog equations in §6.8 are an inline comparison for alg-emg-fx-leapfrog-cochains. Their state, spatial finite-element operators, and boundary conditions differ; the algorithm here is stated independently in exact rational arithmetic.
- The thesis’s stated discrete energy in §6.8 is an inline comparison for prop-emg-fx-discrete-gauss-preservation. Its conservation is not used in the proof, which derives the invariant for this item’s exact update.
- The divergence construction in §6.9 is an inline comparison for the proposition. It uses a Whitney finite-element reconstruction with an initially divergence-free field and, for its electric constraint discussion, rho=0. Our proof instead propagates the two abstract algebraic constraints from the finite-complex identities.
- The source reports loss of order and lack of convergence for one first-order Whitney postprocessing. That result is out of scope because this pair makes no mesh-approximation or convergence claim.

The §6.8 stability and energy statements cite other sources in the dissertation; their cited proofs are not used here. The local proof of the new invariant and the local growing-mode calculation are complete and independent of those source citations.
