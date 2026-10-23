# Batch 26 authoring notes — fd-k02

## Design and plan resolution

The controlling design is research/plan-fluid-dynamics-refresh-track.md,
section “Single-species elastic Boltzmann model” (around L899). The current
owner direction names this refresh as the controlling fluid design, and the
fd-k02 rows in research/plan-spec.json point to it. The older
research/plan-fluid-dynamics-track.md section around L815 reserves the same
page IDs, categories, order, and seven item IDs, but points to the historical
research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json.
The controlling design instead points to the refreshed
research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json.
This source-inventory path is the design conflict; the current plan and owner
direction select the refreshed inventory. The current plan and batch manifest
agree on fd-k02 (order 411), fd-k02-examples (order 412), physics library,
fluid-dynamics category, and fd-k01 as the A-page prerequisite. The plan rows
still have empty inventories because Step 1 has not transcribed authored items;
the owner left shared plan files outside this batch's write scope.

The refreshed inventory reserves six A items and one B item:
post-fd-boltzmann-model, def-fd-physical-kinetic-observables,
pthm-fd-boltzmann-entropy, pthm-fd-ideal-gas-euler-interface,
post-fd-bgk-relaxation, pthm-fd-bgk-equilibration, and
texp-fd-bgk-preparation. Its source records mark the K01 arguments
research-argument-complete but not production or independently audited.
Those labels describe the research argument only.

The authored A page also contains the local intermediate result
pthm-fd-local-boltzmann-h-balance. The current batch-25 thm-fd-kinetic-h
carrier states the global H identity, while the planned K01 inventory
describes a local-and-total result. The local balance is therefore proved in
this batch from the adopted weak collision identity and explicit calculus
prerequisites; the existing K01 theorem is used only for the total identity.
This is the one justified addition to the planned six-item A inventory,
required by the current supplier interface.

The proof wrappers for Boltzmann entropy and the Euler interface explicitly
consume the adopted Boltzmann equation. The refreshed inventory makes that
physical assumption transitive through def-fd-physical-kinetic-observables;
this author also records a direct same-batch post-fd-boltzmann-model edge with
role physical-assumption so each physical proof states its model input
explicitly. It does not change the planned item claims or dependency levels.
The published post-td-boltzmann-molecular-chaos-model was inspected as
read-only context. fd-k02 is a separately assigned fluid-dynamics formulation
and explicitly adopts its own model assumption; no logical derivation from the
thermodynamics postulate is claimed.

## Dependency inventory and levels

The current dependency-level file records batch 26 at level 1, requiring batch
25. This agrees with fd-k02 requiring fd-k01. The refreshed proposed-inventory
graph gives the following in-run item levels, counting the complete planned
K01 supplier graph in batch 25:

| Item | Planned direct dependencies | Level |
|---|---|---:|
| post-fd-boltzmann-model | def-fd-elastic-collision-measure | 2 |
| def-fd-physical-kinetic-observables | def-fd-kinetic-density; post-fd-boltzmann-model | 3 |
| pthm-fd-local-boltzmann-h-balance | def-fd-elastic-collision-measure; def-fd-physical-kinetic-observables; post-fd-boltzmann-model; calculus prerequisites | 4 |
| pthm-fd-boltzmann-entropy | def-fd-physical-kinetic-observables; pthm-fd-local-boltzmann-h-balance; thm-fd-kinetic-h; post-fd-boltzmann-model | 5 |
| pthm-fd-ideal-gas-euler-interface | def-fd-physical-kinetic-observables; thm-fd-controlled-euler-passage; post-fd-boltzmann-model | 6 |
| post-fd-bgk-relaxation | def-fd-conserving-bgk | 6 |
| pthm-fd-bgk-equilibration | post-fd-bgk-relaxation; def-fd-conserving-bgk; prop-fd-maxwellian-moments; thm-fd-homogeneous-bgk-limit; prop-fd-bgk-entropy-rate; calculus prerequisites | 8 |
| texp-fd-bgk-preparation | pthm-fd-bgk-equilibration | 9 |

The planned K01 chain levels used here are def-fd-kinetic-density 0,
def-fd-elastic-collision-measure 1, prop-fd-kinetic-moment-balances 2,
thm-fd-kinetic-h 2, prop-fd-maxwellian-moments 4,
thm-fd-controlled-euler-passage 5, def-fd-conserving-bgk 5,
thm-fd-homogeneous-bgk-limit 6, and prop-fd-bgk-entropy-rate 7. The
dependency-level calculation was made from the refreshed source inventory,
whose proof-module hash is 6660c6795a1df7d9e0435c24f3489e51490f9c4b70c9c4b3f8ff7ea5312faf0b.
The current batch-25 manifest now contains the K01 item inventories, so the
same-run interfaces can be inspected directly. The local H result raises only
pthm-fd-boltzmann-entropy from planned level 4 to current level 5; the other
batch-26 levels are unchanged. The run-level checker result is recorded after
the scoped checks because the shared batch-level fingerprint is stale while
other assigned manifests are being authored.

## Supplier inspection and current blocker

The current batch-25 manifest lists ten A-page and three B-page items, and
all current batch-25 item files are present. Its thirteen item Step 1 records
are closed ready, including every direct and transitive supplier inspected
below. The actual K01 page carriers library/fluid-dynamics/fd-k01.md and
library/fluid-dynamics/fd-k01-examples.md are still absent; this is the only
unresolved cross-batch input. The inspected current interfaces are:

- post-fd-boltzmann-model uses the current positive finite-valued collision
  domain and symmetric weak identity in def-fd-elastic-collision-measure; the
  postulate now states that collision solutions lie in that domain.
- def-fd-physical-kinetic-observables uses the current nonnegative
  finite-\(\omega_3\)-moment density definition, including its
  \(\mathrm{AC}_\omega\) assumption and positive-density branch.
- pthm-fd-local-boltzmann-h-balance proves the local identity from the current
  collision weak form, explicit calculus suppliers, and the adopted model.
  The current thm-fd-kinetic-h Statement and proof provide only the periodic
  global identity, not the planned local statement.
- pthm-fd-boltzmann-entropy uses the new local result for its local physical
  balance and the actual global thm-fd-kinetic-h conclusion for periodic
  total entropy.
- pthm-fd-ideal-gas-euler-interface matches the current K3 theorem's
  \(\omega_3\) spacetime and \(\omega_2\) initial convergence, moment-balance,
  and Gaussian-flux interface. K3's current moment-balance and
  Maxwellian-moment supplier statements and proofs were inspected.
- post-fd-bgk-relaxation matches the current BGK definition's moment-matched
  Maxwellian, positive-temperature domain, relaxation time, and accelerated
  homogeneous equation.
- pthm-fd-bgk-equilibration consumes the current K4 theorem's
  \(C^1([0,\infty);L^1(\omega_3\,dv))\) solution and exact \(\omega_3\) bound,
  plus the current entropy-rate proposition. It separately proves uniqueness
  in the explicitly stated pointwise differentiable class and derives its
  chosen \(1+|v/v_*|^3\) norm directly from the exact formula.
- texp-fd-bgk-preparation consumes the authored conditional physical theorem
  pthm-fd-bgk-equilibration.

The K01 interface and proof route were read in full in
research/scaffold-refresh-2026-10-18/fluid-dynamics/inherited/workers/weak-kinetic/developments.md,
sections K0–K4. In particular, K0 fixes d=3, SI velocity and density units,
the symmetric weak collision identity, positivity/integrability hypotheses,
and the periodic boundary convention; K1 proves moment and conditional entropy
identities; K2 proves Maxwellian moments and records the full-support
qualification; K3 assumes strong weighted-L1 convergence and does not derive
it; K4 gives the explicit homogeneous BGK solution and entropy estimate.
Upstream mathematical context was checked at its actual status: the imported
published thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces statement
and full proof were read; the TD-L12, TD-M17, and TD-M27 arguments are complete
research-scaffold arguments, not production acceptance. Their hypotheses and
uses are recorded in the refreshed supplier map. The current K01 item files,
manifest entries, and Step 1 records are present and current. Their draft
statements are used only at the exact inspected scope and are not represented
as independently accepted results. The absent K01 page files keep the page
dependency row open.

The original beta-batch-26 native result has raw SHA-256
e03a534e71b42d2031404b59542bd01dbf87fe75126be92408d0df0ea3b1c137. Its
terminal report says shell creation failed with “No space left on device”
before any command ran. The current owner release addresses that operational
failure only. No original result, attempt history, or owner direction was
edited.

## Source reading and resolution

Two independent full-text lecture-note treatments were inspected for the
assigned A page, with the complete passages needed for each claim read:

| Source | Inspected locator and result | Supported items and disposition |
|---|---|---|
| Mehran Kardar, MIT OCW 8.333, Lecture 8, direct PDF | §§III.C–III.D, printed pp. 47–54. Read the hierarchy-to-collision equation development, incoming molecular-chaos substitution, collision-rate form, and the warning that collisions can generate correlations. | post-fd-boltzmann-model; included as formulation context. It does not establish a many-particle derivation or propagation of chaos. |
| Mehran Kardar, MIT OCW 8.333, Lecture 9, direct PDF | §III.E, printed pp. 56–57. Read the complete H derivative, periodic/decay integration-by-parts argument, incoming/outgoing symmetrization, and sign inequality. | pthm-fd-local-boltzmann-h-balance and pthm-fd-boltzmann-entropy; included as independent physical treatment. The authored local proof retains the exact K02 weak-measure and integrability hypotheses. |
| Mehran Kardar, MIT OCW 8.333, Lecture 10, direct PDF | §III.G, printed pp. 64–67. Read the collision-invariant moment equations, pressure tensor, internal kinetic energy and heat flux. | def-fd-physical-kinetic-observables and pthm-fd-ideal-gas-euler-interface; included for physical definitions and moment interpretation. The notes use momentum-space notation in places; the authored items define velocity-space f and SI units directly. |
| Mehran Kardar, MIT OCW 8.333, Lecture 11, direct PDF | §III.H, printed pp. 67–68. Read the local Maxwellian, Gaussian moments, ideal-gas pressure, and zeroth-order fluid equations. | pthm-fd-ideal-gas-euler-interface; included for physical interpretation. The source explicitly treats local equilibrium as an approximation and does not prove strong kinetic convergence; the authored theorem assumes the exact weighted-L1 convergence hypothesis from K01. |
| David Tong, Lectures on Kinetic Theory, chapter PDF | §§2.2–2.4.2 and §2.5.1, printed pp. 20–46. Read the collision closure, detailed balance, full H-theorem symmetrization, moment hierarchy, local Maxwellian/Euler reduction, and relaxation-time passage. | All A claims, including pthm-fd-local-boltzmann-h-balance; included as the second independent treatment. Tong explicitly says local equilibrium generally fails the full streaming equation and the linear relaxation-time approximation is not exact; these qualifications are preserved. |
| François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations, lecture-slide PDF | Lecture 2, “Properties of Collision Operators,” PDF pp. 5–14 and “The BGK Operator,” pp. 27–29. Read the conserved-moment and entropy-dissipation framework and the classical BGK operator with positive relaxation time and local Maxwellian. | post-fd-bgk-relaxation and pthm-fd-bgk-equilibration; included for the adopted model form. It does not supply the exact K4 homogeneous solution, which is proved conditionally from the planned K01 mathematics. |

The selected full-text URLs and exact locators are copied into the item source
metadata and batch coverage. MIT and Tong provide the two independent A-page
treatments; the Golse–Levermore notes provide additional BGK context.

One exploratory candidate, CoA Memo 154, could not be opened as readable full
text: the browser returned an error response for
https://dspace.lib.cranfield.ac.uk/bitstream/1826/9580/1/COA_Memo_154_June_1968.pdf.
An alternative search returned the complete Golse–Levermore lecture PDF, whose
BGK section was inspected; this successful alternative was the first recovery
attempt, so no further retry was made. The failed candidate was not harvested
or cited. The attempt and successful alternative are retained in
coverage.source_resolution. No selected source is dropped or awaiting owner
resolution.

## Authoring checkpoints

No batch-26 carrier existed at the start of this continuation. Each item is
added below after its complete local argument and source disposition are
finished. Items are authored in ascending planned dependency level; no K01 item
is written in this batch.

### post-fd-boltzmann-model

Authored the d=3 periodic one-species physical postulate: the incoming
factorization, elastic quadruple space, symmetric collision-rate measure weak
identity, kinetic transport equation, SI density units, and primitive mass and
Boltzmann-constant parameters are all stated. It is explicitly an adopted model
with no many-particle derivation or empirical assertion. Direct dependency:
def-fd-elastic-collision-measure (batch-25 mathematical supplier).
Planned level: 2, based on that supplier at level 1. Sources read: MIT 8.333
Lecture 8 §III.D and Tong Kinetic Theory §§2.2–2.2.3; both support the
Boltzmann collision formulation while retaining the molecular-chaos
qualification. The supplier file and manifest carrier are present, and its
current Step 1 record is closed ready. Source-fetch stamps and scoped layout
checks were rerun after final item edits; their results are recorded below.
Next item: the physical observables definition, which consumes this postulate
and the kinetic-density definition.

### def-fd-physical-kinetic-observables

Authored the SI definitions of number and mass density, mean and peculiar
velocity, translational temperature, kinetic stress, heat flux, total kinetic
energy, and the reference-relative kinetic entropy and entropy flux. The
statement keeps number density n distinct from mass density rho=mn, records
the positive-density/positive-temperature domains, gives the units, and does
not assume isotropy or an empirical pressure law. Direct dependencies:
def-fd-kinetic-density (batch-25 mathematical supplier) and
post-fd-boltzmann-model (authored above). Planned level: 3. The current
definition's \(\omega_3\) moment domain, positive-density branch, units, and
\(\mathrm{AC}_\omega\) assumption were checked against this interface; its
current Step 1 record is closed ready. Read support:
MIT 8.333 Lecture 10 §III.G and Tong Kinetic Theory §§2.4.1–2.4.2. The K01
kinetic-density carrier is present and its current Step 1 record is closed
ready. No independent acceptance is claimed. Next item: the conditional
physical Boltzmann entropy theorem, using a local result authored in this batch
and the actual K01 global H theorem.

### pthm-fd-local-boltzmann-h-balance

Added this A-page physical intermediate because the current batch-25
thm-fd-kinetic-h Statement asserts only the global derivative, while the K02
physical entropy theorem needs a local balance. The statement defines the
elastic collision set and measure interface, positivity, regularity, velocity
envelopes, logarithmic test, and local production. Its proof differentiates
the entropy and flux integrals under the stated majorants, applies the weak
identity to 1 and log(f/f_ref), and proves the production sign from the
monotonicity of log. Direct dependencies are the K02 Boltzmann postulate,
observable definition, K01 collision-measure definition, and exact chain,
limit, differentiation, logarithm, and mean-value suppliers. Planned level:
4. MIT 8.333 Lecture 9 §III.E and Tong §2.3 support the physical H-theorem
mechanism; the local result is proved from the adopted K02 weak identity.
The current K01 collision-measure Step 1 record is closed ready; this local
item's current Step 1 record is ready. The fd-k01 page edge remains open
separately.

### pthm-fd-boltzmann-entropy

Authored the conditional local and periodic-global physical kinetic entropy
balance \( \partial_t s_{\rm kin}+\nabla\cdot j_{\rm kin}=k_BD\ge0 \), with
the reference-relative logarithm, SI entropy units, exact regularity and
collision-log-test hypotheses, and the distinction from fine-grained
Hamiltonian Gibbs entropy. Direct dependencies include the observable
definition, physical Boltzmann postulate, a new local entropy-balance result,
and thm-fd-kinetic-h for its actual global identity. Planned level after the
local result: 5. The complete K01 K1 proof and upstream TD-L12/M27 uses were
inspected; the current K01 Statement is global only, so the local balance is
proved in pthm-fd-local-boltzmann-h-balance. MIT Lecture 9 §III.E and Tong
§2.3 were read as independent H-theorem treatments. The current K01 Step 1
record and this item's record are both closed ready. The fd-k01 page edge
remains open separately. Next: the conditional
ideal-gas Euler interface using the current K01 passage theorem.

### pthm-fd-ideal-gas-euler-interface

Authored the conditional periodic d=3 ideal-monatomic-gas Euler interface.
The statement includes the exact dimensionless fast-collision equation, the
regularity and moment class, positive bounded C1 limiting fields, dimensionless
weighted-L1 convergence and initial trace, SI Maxwellian and observable
conventions, the \(p=nk_BT\) equation of state, and all three Euler balances.
Direct dependencies are the physical observables definition, the physical
Boltzmann postulate, and planned K01 theorem thm-fd-controlled-euler-passage;
the direct postulate edge is explicitly a physical assumption. Planned level:
6. The complete K01 K3 argument and its K1/K2 inputs were inspected; it assumes
the strong convergence and does not derive it. MIT Lecture 11 §III.H and Tong
§2.4.2 support the local-Maxwellian moments and Euler interpretation, while
both sources' approximation limits are preserved. The current K01 theorem
Statement matches the \(\omega_3\)/\(\omega_2\) assumptions; its Step 1
record and this item's record are closed ready. The fd-k01 page edge remains
open separately.

### post-fd-bgk-relaxation

Authored a distinct homogeneous single-species BGK postulate with explicit
number, mean-velocity, temperature and Maxwellian formulas, constant
phenomenological \(\tau>0\) in seconds, dimensionless fast scale, and explicit
separation from the binary Boltzmann operator. Its direct dependency is
def-fd-conserving-bgk; planned level: 6. The current mathematical BGK
definition matches the moment and relaxation-time interface, and its Step 1
record and this item's record are closed ready. Golse–Levermore Lecture 2
§II, “The BGK Operator,” was read for the local-Maxwellian collision model;
Tong §2.5.1 was read for the non-exactness caveat of relaxation-time
approximations. No exact-solution proof is attributed to either source. The
item remains draft; its authored readiness record is current. The fd-k01
page edge remains open separately.

### pthm-fd-bgk-equilibration

Authored the conditional exact homogeneous BGK solution, conserved moments,
weighted-L1 equality and time-integrated bound, entropy-gap decay, and the
non-Maxwellian initial-layer consequence. Its direct dependencies include
post-fd-bgk-relaxation, def-fd-conserving-bgk,
prop-fd-maxwellian-moments, thm-fd-homogeneous-bgk-limit, and
prop-fd-bgk-entropy-rate, plus the calculus inputs for the pointwise uniqueness
argument; planned level: 8. The current K01 carriers state the
exact \(\omega_3\)-weighted solution and entropy estimate. The consuming proof
matches those statements, proves uniqueness in the explicitly stated
pointwise differentiable class, and derives its \(1+|v/v_*|^3\) norm directly
from the exact formula. Both K01 Step 1 readiness records and this item's
record are closed ready. The fd-k01 page edge remains open separately.
Golse–Levermore and Tong support the adopted BGK model's physical scope.
Next: author the B-page thought experiment from a finite-moment,
finite-entropy non-Maxwellian initial density.

### texp-fd-bgk-preparation

Authored the B-page thought experiment with the explicit uniform velocity
density on a finite cube. Its number density, zero mean, positive temperature,
finite third moment, finite reference-relative entropy, and non-Maxwellian
support are checked directly; the consuming proof then applies
pthm-fd-bgk-equilibration to obtain the exponential initial-layer prediction.
Direct dependency: pthm-fd-bgk-equilibration (same-batch physical result).
Planned level: 9. No apparatus, observed outcome, or empirical inference is
claimed. The parent theorem and its current K01 inputs have closed-ready Step 1
records, as does this thought experiment. Golse–Levermore §II and Tong §2.5.1
support only the adopted BGK
model scope and its approximation caveat; the finite-cube calculation is
proved locally.

## Final readiness and scoped checks

The eight batch-26 item records are now closed ready: post-fd-boltzmann-model,
def-fd-physical-kinetic-observables,
pthm-fd-local-boltzmann-h-balance, pthm-fd-boltzmann-entropy,
pthm-fd-ideal-gas-euler-interface, post-fd-bgk-relaxation,
pthm-fd-bgk-equilibration, and texp-fd-bgk-preparation. At the final supplier
snapshot, all thirteen batch-25 item records are also closed ready, including
the eight current direct item inputs. The current fd-k01 and
fd-k01-examples page files are absent, so the batch-26 page edge to fd-k01
remains open and the batch coverage status is escalated. The ten item rows in
the cross-batch JSON are verified as scoped interface checks, not proof
acceptance.

The scoped dependency calculation covered all 21 manifest items in batches 25
and 26, found no cycles, and matched every recorded item level. Batch 26 is at
level 1 and requires batch 25. Its item levels are 2, 3, 4, 5, 6, 6, 8, and 9
in the dependency order listed above. The native run-wide batch-level checker
still reports its shared dependency-level snapshot as stale after the batch-25
and batch-26 manifests were populated. A fresh read-only computation returns
batch 25 at level 0 and batch 26 at level 1. The dependency-level file is
owner-maintained and was not edited.

Final scoped results: proof-layout passed for 8 items and 15 steps with 0
defects; precheck passed for all 7 proof-bearing items; rendercheck passed for
the 8 items and 2 pages with 0 errors or warnings; content-policy passed for
the 8 manifest items with 0 errors or warnings; depcheck passed for the
focused closure with 0 errors or warnings; strict proof-contract validation
passed for 7 proof-bearing items with 0 errors or warnings. Source-fetch-check
reports 8/8 URLs fetch-verified and resolved, with 0 drops.

The run-wide Step 1 check reports 274 items, 164 ready, and 119 remaining work
entries across other batches, including nine empty scaffold inventories. None
of those work entries belongs to batch 25's thirteen items or batch 26's eight
items; the assigned items and their direct K01 item prerequisites are closed
ready.


### Owner canonical supplier page resolution (2026-10-22T15:58:16.919Z)

Owner resolved the wrong-category path hold: canonical mathematical suppliers are library/fluid-dynamics-mathematics/fd-k01.md and fd-k01-examples.md. Actual page IDs, mathematical library and inventories match the completed batch25 manifest (10 A and 3 B). No duplicate physical pages or supplier proof acceptance is created. See research/fluid-dynamics-all-47-2026-10-23-owner-completed-consumer-resolution/review.json.
Earlier wrong-directory absence observations are historical.
