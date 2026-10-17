# Step 3a reader report — batch 19

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `19` only

## Outcome

No confirmed or suspected defect remains in the assigned items or pages. I made no item or page edits, so no proof-contract update, item validation, or proof-layout run was required. There is no blocker.

## Assigned inventory opened

| Page | File | Verdict |
|---|---|---|
| `emg-mp03` | `library/einstein-maxwell-models/emg-mp03.md` | Pass. The summary matches the four listed A items and preserves the test-field, finite-order, finite-time, and nonexistence limitations. |
| `emg-mp03-examples` | `library/einstein-maxwell-models/emg-mp03-examples.md` | Pass. The summary matches the three examples and does not present them as observations or coupled solutions. |

| Assigned item | File | Review disposition |
|---|---|---|
| `post-emg-background-maxwell-test` | `items/post-emg-background-maxwell-test.md` | Pass. This is an adopted fixed-background model with explicit field/current regularity, local-potential and curve conditions, units, and exclusions. It does not claim empirical support or small backreaction. |
| `pthm-emg-controlled-test-geometric-optics` | `items/pthm-emg-controlled-test-geometric-optics.md` | Pass. The exact finite-ansatz residual, field-strength expansion, null rays, and polarization conclusion retain the supplier's hypotheses and do not assert convergence or an exact Maxwell/coupled solution. |
| `pthm-emg-source-test-backreaction-scope` | `items/pthm-emg-source-test-backreaction-scope.md` | Pass. The source-free and sourced residual identities, matter-stress omission, dust scaling, observer-energy obstruction, and finite-annulus energy calculation are stated with their separate hypotheses. |
| `pthm-emg-weak-slow-test-motion` | `items/pthm-emg-weak-slow-test-motion.md` | Pass. The estimate is conditional on the exact metric/field bounds, nonzero charge-to-mass ratio, speed and Lipschitz bounds, existing trajectories, common compact containment, and finite scaled duration. Local potentials are not promoted to a global one. |
| `ex-emg-ml-b04` | `items/ex-emg-ml-b04.md` | Pass. The stationary-potential sign convention gives the stated first integral. The proof handles its actual (C^2) potential directly instead of applying the smooth-potential supplier outside its hypotheses. |
| `ex-emg-ml-b07` | `items/ex-emg-ml-b07.md` | Pass. The components, SI observer fields, both source-free Maxwell equations, positive field energy, and nonzero unchanged-background Einstein residual are checked directly. |
| `ex-emg-ml-b08` | `items/ex-emg-ml-b08.md` | Pass. The global potential, magnetic Lorentz orbit, exponential flow, and velocity/position bounds are proved on the stated parameter range. The general weak/slow theorem's smaller cutoff is not used to enlarge its scope. |

## Dependency and contract context opened

I opened the current batch-19 manifest, proof-contract file, and cross-batch dependency rows. The contract clauses and edge declarations were checked against the current text; their recorded dispositions were not treated as verdicts. Relevant prerequisite page bodies opened were `emg-mm03`, `emg-mp01`, `emg-c01`, `emg-mm01`, `rpm-external-charge`, and `emg-g04`.

Relevant item suppliers opened and checked at the clauses used include `def-emg-matter-observables`, `def-emg-matter-formal-systems`, `def-emg-geometry-units`, `def-emg-lorentzian-forms`, `def-rpm-charge-spin-model`, `def-em-electromagnetic-tensor`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `lem-rpm-curved-charge-action-variation`, `lem-emg-controlled-maxwell-wkb`, `lem-emg-potential-maxwell-wave-identity`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-source-and-test-scaling`, `lem-emg-local-potential-construction`, `lem-emg-observer-field-decomposition`, `thm-emg-weak-slow-test-lorentz-limit`, `thm-emg-selected-matter-energy-conditions`, `thm-emg-charged-dust-projection`, `prop-emg-test-field-residual-order`, `def-emg-geometric-scaling`, `thm-emg-field-normalization-equivalence`, and `thm-emg-charged-symmetry-current`.

For the B08 comparison proof I opened the pinned mathematical suppliers `cor-finite-dimensional-normed-spaces-are-banach`, `lem-exponential-series-of-a-bounded-operator`, `cor-vector-valued-ftc-and-lipschitz-bound`, and `thm-norm-inequality-for-the-vector-valued-integral`. For the source/test scaling calculations I also checked the pinned `thm-polar-coordinates-formula-for-lebesgue-measure` and `thm-ftc-second-part`. The geometric action equivalence's `ACω` premise is carried through the postulate and consumers; no stronger choice principle is used.

## Source checks

The source passages used as context were checked against author-hosted or arXiv texts. They support the stated contextual attributions; the local proofs and mathematical suppliers, not textbook authority, carry the batch's deductions.

- A. I. Harte, [*Gravitational lensing beyond geometric optics: I*](https://arxiv.org/pdf/1808.06203v2), §§3.1–3.3, equations (40)–(55), PDF pp. 10–13: vector-potential ansatz, eikonal and amplitude constraints, leading field, and polarization quotient. Appendix A, equations (A.2)–(A.3), PDF pp. 33–34, records the residual-current issue for truncated series.
- H. S. Reall, [*General Relativity*](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), §6.2, equations (6.7)–(6.10), PDF pp. 61–62: Maxwell and Lorentz-force conventions; equations (6.12)–(6.13), pp. 62–63: the leading eikonal/null condition. Its Gaussian units are not imported.
- Poisson, Pound and Vega, [*The Motion of Point Particles in Curved Spacetime*](https://arxiv.org/pdf/1102.0529v3), §18.1, equations (18.3)–(18.9), PDF pp. 96–97: proper-time action, interaction, reparameterization, Lorentz equation, and Lorenz-gauge wave equation. The authors state the point-charge field is singular on the worldline and the resulting equations are only formal until the singularity is treated; the assigned items exclude self-field evaluation.
- David Tong, [*General Relativity*](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), §1.2.3, equation (1.20), PDF pp. 23–24: the action's interaction sign and electrostatic potential term. Tong's sign and units are explicitly distinguished from the local convention.
- Sean M. Carroll, [*Lecture Notes on General Relativity*](https://arxiv.org/pdf/gr-qc/9712019v1), §4.1, equations (4.8)–(4.21), PDF pp. 110–114: the weak-field/Newtonian metric context. The local weak/slow estimate is proved by the declared mathematical supplier.
- Tong, [*General Relativity*](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), §4.5.3, equation (4.52), PDF p. 192: Maxwell stress and its flat-frame energy density. The locally stated SI normalization remains authoritative for this workspace.

## Edits, uneditable defects, and blockers

- Edits: none.
- Confirmed or suspected defects outside reader authority: none.
- Page verdicts: both assigned pages pass, as recorded above.
- Blocker: none.

## Coverage note

All two assigned page bodies, all seven assigned items, the current batch contract and cross-batch records, the direct prerequisite page bodies, and the direct scientific suppliers used in the arguments were inspected. Pinned mathematical suppliers were opened at the exact clauses used. The assigned carriers were initially opened before the supplier review, so acquisition was not strictly supplier-first; the supplier statements and proofs were reviewed before final dispositions were made. This report does not claim a whole-library or unrelated transitive-foundation audit.
