# Step 3a reader report — batch 8

Run: physics-td-qft-rpm-62-2026-10-14

## Opened inventory

Pages:

- library/thermodynamics/td-representation-and-equilibrium.md (td-representation-and-equilibrium, A).
- library/thermodynamics/td-representation-and-equilibrium-examples.md (td-representation-and-equilibrium-examples, B).

Assigned items:

- def-td-temperature-pressure-chemical-potential
- post-td-mechanical-conjugate-identification
- pthm-td-local-energy-representation
- pthm-td-interior-exchange-equilibrium
- pthm-td-concave-stability
- def-td-response-functions
- ex-td-local-response-chart
- ex-td-retained-volume-thermal-equilibrium (the current title is “Stable equilibrium with retained unequal volumes”).
- cex-td-tagged-scaling-not-fixed-type-homogeneity

Draft dependencies inspected in their current run carriers:

- Batch 1: def-td-si-quantities, def-td-system-and-permitted-exchanges, def-td-galilean-rest-frame, def-td-equilibrium-state-domain, post-td-bulk-additivity, def-td-process-and-protocol, and post-td-first-law-energy.
- Batch 2: post-td-concave-fundamental-entropy, def-td-thermal-contact-constraints, def-td-isolated-compound-feasible-set, post-td-entropy-maximum, and post-td-common-bulk-constitutive-law.
- Batch 4: thm-tdmath-local-implicit-rank and lem-tdmath-concave-affine-maximizer-and-hessian.

Published mathematical suppliers inspected at the exact statements and hypotheses used:

def-interval, def-cartesian-product, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-function-space, def-function-limit, def-natural-numbers, def-finite-sum, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-convex-subset-of-euclidean-space, def-probability-measure, def-subset-and-proper-subset, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, def-metric-topology, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-euclidean-implicit-function-theorem, thm-euclidean-inverse-function-theorem, def-max-min, thm-continuous-partial-derivatives-imply-total-differentiability, cor-mean-value-theorem, def-total-derivative-in-euclidean-space, def-natural-logarithm, and thm-logarithm-derivative-and-integral.

Because I clarified the physical interface of post-td-mechanical-conjugate-identification, I also opened its current run consumers pthm-td-interior-exchange-equilibrium (batch 8) and ex-td-nonzero-isothermal-work-loop (batch 9). The third current-run downstream consumer, ex-td-retained-volume-thermal-equilibrium, was already in the assigned batch and was reviewed above. The current run manifests show no further direct or indirect consumers of that postulate.

## Independent review and repairs

- post-td-mechanical-conjugate-identification: Replaced the undefined labels “quasistatic,” “frictionless,” and “mechanical equilibrium” with a typed path model: a coordinatewise C1 equilibrium path, its volume-displacement relation, zero tangential contact force, zero net normal force, the oriented force-per-area convention, and the sign of the pathwise work increment. The postulate remains explicitly adopted physical input. Added Tong chapter 4 §4.2 as the source for quasistatic-path terminology; the source does not prove the pressure/force identification. Updated its physics_review contract evidence. The A-page summary remains accurate.
- pthm-td-interior-exchange-equilibrium: Updated Fact A2 to state the postulate’s now explicit path and force-balance conditions. Its exchange equalities remain conditional on the listed entropy maximum, open charts, and two-sided feasible directions. The contract’s A2 supplier excerpt was refreshed. The proof still cites the defective thermal-contact dependency described under “Uneditable finding.”
- ex-td-retained-volume-thermal-equilibrium: Restricted the physical slices to positive energies below the stated total, while requiring every fixed-volume split in that range to be present. This makes the exact feasible energy set the open interval used in Verification 1.1, so the derivative sign establishes a global maximum on the declared feasible set. Changed the title and conclusion to “stable equilibrium” under the entropy-maximum postulate; this example does not specify the contact protocol needed for the separate thermal-contact relation. Updated the proof contract’s derivation and endpoint/domain records.
- pthm-td-concave-stability: Expanded Verification 2.1 with the difference-quotient calculation for the derivative of x ↦ DS_c(x)[x]. This supplies the bilinear evaluation/product-rule step from the stated C2 premise and the cited mathematical lemma. Updated the proof contract derivation and its chain-rule use.
- ex-td-local-response-chart: Removed the unnecessary claim that an arbitrary open physical slice is itself a concave domain; the Hessian calculation was not needed for the response computation. Made the natural-coordinate inverses explicit and recorded their C1 chart role. Updated its proof contract derivations. The response formulas and units are unchanged.
- cex-td-tagged-scaling-not-fixed-type-homogeneity: No carrier edit. Corrected stale proof-contract derivation summaries so their dimensionless coordinates, SI units, and entropy formulas match the current counterexample.

The affected proof-contract entries in research/physics-td-qft-rpm-62-2026-10-14-batch-8.proof-contracts.json were updated. None of the changed carriers had a verification.judge record to remove.

## Source checks

- Tong, Statistical Physics, §1.2.4, equations (1.15)–(1.16), lines 281–302: pressure is defined as T (∂S/∂V)_E; the text relates the definition to force per area and the pressure-volume work term. §1.4 lines 544–547 gives μ=-T(∂S/∂N)_{E,V}; §1.4.3 lines 620–623 states its extensive-scaling convention. URL: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
- Tong, Statistical Physics, Chapter 4 §4.2, lines 114–150: quasi-static processes stay in equilibrium, and the work increment is path-dependent with the stated pressure-volume sign. This supports the clarified regime vocabulary, not the adopted model identification. URL: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
- Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, current-run PDF copy research/physics-td-qft-rpm-62-2026-10-14-owner-escalations/td8-tagged-homogeneity/source-CH02.pdf (SHA-256 42628b58bb26e7b37e9003a1badbc9c7ae087cb6936938712cedefe3e5e7b175): §2.9.1, equations (2.207)–(2.212), derives the temperature, p/T, and μ/T exchange conditions at an entropy maximum; §2.10.5, equations (2.250)–(2.259), gives response-function definitions; §2.6.4, equations (2.103)–(2.112), assumes degree-one homogeneity and derives Euler/Gibbs–Duhem identities; §2.9.2, equations (2.213)–(2.215), studies the entropy Hessian under a homogeneity assumption. The direct web fetch of the cited 2025 PDF timed out; I used this current-run source copy and do not treat its homogeneity assumptions as proving the separate tagged-transport postulate.
- BIPM, The International System of Units, 9th ed., version 4.01, §§2.3.1–2.3.2 and Table 4: the fixed values of k_B=1.380649×10^{-23} J K^{-1} and N_A=6.02214076×10^{23} mol^{-1} and the SI unit assignments match def-td-si-quantities. URL: https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf

No item in this batch reports experimental observations or makes a statistical inference. The authored examples and theorems are formal model calculations; none is treated as empirical confirmation.

## Uneditable finding

def-td-thermal-contact-constraints is a current-run batch 2 dependency and could not be edited in this assignment. Its Definition first sets T to be a set of tagged pairs (c,x) with x∈D_c, then says “a thermal-contact protocol for two states x,y∈T.” Elements of T are tagged pairs, while the subsequent compound-protocol definition treats x,y as untagged state coordinates. It needs tagged states (c_A,x),(c_B,y)∈T (or a separately defined untagged state family). The source is a direct dependency of pthm-td-interior-exchange-equilibrium, which cites it as Fact F3 and in Verification 1.1. The theorem’s explicit energy-exchange and bilateral-feasibility hypotheses otherwise provide the variation used in the derivative calculation, but the malformed definition remains a fatal dependency defect.

The exact current producer bytes observed at split are SHA-256 345c8d83782d0226a6c6df634225a476d0cc3b6783aa92a50e384ac67a9fe931.

## Page verdicts

- td-representation-and-equilibrium (A): Hold for the batch 2 thermal-contact supplier defect routed above. The page summary accurately distinguishes definitions, adopted couplings, and conditional deductions. The assigned repairs clarify the piston regime and supply the missing local derivative step; no page prose edit was needed.
- td-representation-and-equilibrium-examples (B): Hold through the assigned interior-exchange theorem’s dependency on the same malformed supplier. The page summary is otherwise accurate: its response chart and countermodel are formal, and the retained-volume example now states the exact feasible set and the model’s stable-equilibrium criterion. No page prose edit was needed.

## Validation and blocker

- Reflow returned exit 0 and “unchanged” for all five changed item paths.
- Scoped precheck returned exit 0 for all five changed items (the postulate was reported as a nonproof structure pass).
- The final batched command node tools/physics-support/proof-layout.mjs items/post-td-mechanical-conjugate-identification.md items/pthm-td-interior-exchange-equilibrium.md items/ex-td-retained-volume-thermal-equilibrium.md items/pthm-td-concave-stability.md items/ex-td-local-response-chart.md did not complete: the renderer failed with ERR_MODULE_NOT_FOUND: Cannot find package @/components while importing the application’s web/components/library/ItemBody.tsx. No proof-layout pass is claimed.

Coverage limitation: I checked the exact statements and relevant hypotheses of the published mathematical suppliers used here, but did not independently re-audit every lower-level dependency in their published proof chains. The direct Arovas web fetch also timed out; its current-run PDF copy was available and read at the locators above.
