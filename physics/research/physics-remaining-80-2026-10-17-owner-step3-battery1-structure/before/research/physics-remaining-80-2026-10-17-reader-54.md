# Step 3a reader report — batch 54

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `54`

## Inventory

Assigned pages opened:

- `tgr-i01` — `library/thermodynamics-and-general-relativity/tgr-i01.md`.
- `tgr-i01-examples` — `library/thermodynamics-and-general-relativity/tgr-i01-examples.md`.

The A page's required pages were also opened: `tgr-mc01`, `tgr-mi03`, and
`sr-observer-measurements`.

Assigned items opened in dependency order:

1. `def-tgr-framework-units`.
2. `post-tgr-local-material-thermodynamics` and
   `post-tgr-local-entropy-admissibility`.
3. `pthm-tgr-finite-entropy-balance`.
4. `texp-tgr-insulated-entropy-region`.

Direct item dependencies opened to verify those interfaces and uses:

- In-flight draft mathematics: `def-tgr-local-fluid-state` (batch 53),
  `def-tgr-spacelike-current-slab` and
  `thm-tgr-finite-current-production-balance` (batch 50), and
  `lem-tgr-killing-energy-normalization` (batch 52).
- Published mathematics: `def-gr-smooth-lorentzian-objects`,
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
  `def-gr-killing-field`,
  `thm-sr-local-congruence-adapted-charts-and-frobenius`,
  `def-pullback-connection`, and
  `thm-pullback-connection-is-well-defined-and-functorial`.

The draft mathematical finite-current theorem remains explicitly conditional
in both physical consumers; I did not treat its draft status as proof approval.
Its exact finite-slab statement and proof, and the exact slab/current
definitions, were opened before assessing the consumers.

## Review and edits

### `post-tgr-local-material-thermodynamics`

The energy assignment evaluates `e(V/N_p,S/N_p)` for `e` defined only on the
open domain `D`, but the original postulate did not state the admissibility
conditions for those inputs. I made the continuum parcel convention explicit:
`N_p>0`, `V>0`, `S\in\mathbb R`, and
`(V/N_p,S/N_p)\in D`. The postulate now identifies “comoving” with the supplied
observer-rest-space convention and says that it assumes neither a global
orthogonal rest-slice foliation nor a finite-region volume construction. The
existing per-marker meanings and units remain those of
`def-tgr-local-fluid-state`.

This is an explicit domain for the existing function application, not a new
restriction on the state function. I checked all seven direct current-run
consumers. The six model postulates (`post-tgr-bulk-relaxation-model`,
`post-tgr-equilibrium-particle-exchange`, `post-tgr-first-order-dissipation`,
`post-tgr-gravitating-entropy-variational-preparation`,
`post-tgr-perfect-fluid-model`, and `post-tgr-supported-static-heat-model`)
use the supplied state function, its derivatives, or its units; they do not
use the parcel energy assignment. The direct theorem consumer,
`pthm-tgr-local-first-law` in batch 58, already states a positive real
extensive marker variable, positive volume, real entropy, and the open parcel
domain before differentiating the assigned energy. It remains valid. The
The declared current-run dependency closure contains 20 items. I inspected all
seven direct consumers. The clarification makes the original function domain
explicit and adds no model condition; no direct consumer's state-function
interface changes. The 13 indirect descendants retain their unchanged
intermediate supplier interfaces, so no downstream source or argument change
is required.

The batch-54 `physics_review.formulation` evidence in the proof contract now
records the explicit parcel domain. No judge record existed for this postulate.

### `pthm-tgr-finite-entropy-balance`

The balance is stated for the two endpoint slices of one finite slab. Vanishing
of the **total net side flux on that slab** proves an endpoint inequality; it
does not by itself prove that the function of slice charge is monotone at every
intermediate time. For example, in Minkowski coordinates on
`[0,1]×(0,1)^3`, set
`S^0=2+0.1 sin(2πx^0)`,
`S^1=-0.2π cos(2πx^0)x^1`, and `S^2=S^3=0`. Then
`∂_aS^a=0`, the total net side flux is zero, and
`Q_S(x^0)=2+0.1 sin(2πx^0)`, which is not monotone. I changed the conclusion to
the exact endpoint claim `Q_S(x^0_+)\geq Q_S(x^0_-)`.

I reviewed its sole item consumer, `texp-tgr-insulated-entropy-region`.
That consumer imposes pointwise vanishing of the flux three-form on every side
face, uses the exact finite-balance identity, and concludes only the endpoint
identity and inequality; it remains valid. The B-page summary also describes
this stronger pointwise side-face condition, so its monotonicity summary remains
valid.

The batch-54 proof contract's citation quote for the consumer was updated to the
revised endpoint statement. The theorem has no `verification.judge` record.

### `texp-tgr-insulated-entropy-region`

I changed the title from “finite worldtube” to “finite-slab.” The statement
defines a coordinate slab and side faces with no causal-character restriction;
the slab supplier explicitly permits null side faces. “Worldtube” would add an
undefined geometric implication. The revised title matches the defined setup.

## Source checks

The source checks relevant to the reviewed claims found faithful, qualified use:

- Romatschke, *Relativistic Viscous Fluid Dynamics and Non-Equilibrium
  Entropy*, §4.1, PDF p. 9: the entropy-divergence condition is model-specific;
  the author states that he knew of no experimental verification. This supports
  the postulate's scope caveat, not a measured universal law.
  <https://arxiv.org/pdf/0906.4787>
- Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, §4.3,
  equations (4.10)–(4.14), PDF pp. 15–17: the rest-frame state function
  includes rest energy and its derivatives define the thermodynamic variables.
  <https://arxiv.org/pdf/gr-qc/0603009>
- Borghini, *Elements of Hydrodynamics*, §I.1.3, PDF pp. 4–5, treats local
  thermodynamic equilibrium as a modeling hypothesis; §IX.2 defines local-rest
  and comoving quantities. The selected model is not presented as a measured
  equation of state.
  <https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf>
- BIPM, *The International System of Units*, 9th ed., version 4.01, §§1.1,
  2.2, PDF pp. 122–125: the defining values of `c`, `h`, and `k_B` are exact
  SI definitions.
  <https://www.bipm.org/documents/d/guest/si-brochure-9-pdf>
- NIST/CODATA 2022, Table XXX: `G` is determined from experimental input data
  with reported uncertainty; no numerical `G` value is used in the item.
  <https://physics.nist.gov/cuu/pdf/JPCRD2022CODATA.pdf>
- Naaijkens, *Quantum Spin Systems on Infinite Lattices*, §3.4,
  Definition 3.4.4, gives the all-observable KMS strip boundary condition and
  the `\hbar\beta` strip width. Reall §5.3, pp. 56–57, and Tong §4.5.5 give
  the Killing-current and finite charge context. These references are
  conventions/context; the local finite balance remains conditional on its
  exact mathematical draft supplier.
  <https://arxiv.org/pdf/1311.2717>
  <https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf>
  <https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html>

## Page verdicts

- `tgr-i01`: **pass**. Its summary accurately separates the adopted material
  and entropy-current premises from the conditional finite-slab deduction and
  preserves the draft supplier status.
- `tgr-i01-examples`: **pass**. Its summary describes pointwise vanishing
  entropy-current flux on every side face, which supports monotonicity on
  subslabs, and distinguishes the idealized model prediction from observation
  and generalized-entropy claims.

## Validation, unresolved defects, and blocker

Reflow and precheck were run on all three changed items:

- `post-tgr-local-material-thermodynamics`: reflow unchanged; precheck passed
  as nonproof structure.
- `pthm-tgr-finite-entropy-balance`: reflow unchanged; precheck passed.
- `texp-tgr-insulated-entropy-region`: reflow unchanged; precheck passed.

The final proof-layout command checked the three changed item paths: 3 items,
6 proof steps, 0 defects. The proof contract JSON parses successfully.

Unedited defects: none found. Blocker: none. The published mathematical
suppliers were checked at the exact interfaces used here; this reader did not
re-audit their unrelated transitive proofs.
