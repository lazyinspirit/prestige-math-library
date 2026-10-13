# Reader report — batch 17

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader-17  
Scope: batch 17 only

## Inventory reviewed

Assigned pages:

- A-page **cm01-framework-quantities-and-geometry**.
- B-page **cm01-framework-quantities-and-geometry-examples**.

The required mathematics page **cm-math-geometry** was also opened as prerequisite context.

All 14 assigned items were opened:

- **post-cm01-spacetime**
- **post-cm01-frames**
- **post-cm01-worldlines**
- **def-cm01-units**
- **def-cm01-configuration**
- **def-cm01-velocity-acceleration**
- **pthm-cm01-galilean-kinematics**
- **rem-cm01-model-limit**
- **ex-cm01-galilean-boost-of-a-free-motion**
- **ex-cm01-rotating-basis-of-a-free-motion**
- **cex-cm01-coordinate-velocity-is-frame-dependent**
- **ex-cm01-two-particle-rigid-rod-configuration**
- **ex-cm01-dimension-bookkeeping**
- **ex-cm01-worldline-parameter-condition**

The relevant batch-1 draft mathematical suppliers were opened before reviewing their consumers: **def-cm-affine-time-space**, **lem-cm-adapted-coordinates-exist-and-are-unique**, **lem-cm-adapted-charts-and-galilean-transformations**, **def-cm-special-orthogonal-group**, **lem-cm-so3-is-a-matrix-group**, **lem-cm-moving-frame-acceleration-identity**, and **def-cm-constrained-configuration-and-mass-metric**. **lem-cm-mass-metric-positivity** was opened to check the stated mass-form convention.

Published mathematical suppliers opened for the exact claims used include the linear-map kernel and rank-nullity items; inner-product, orientation, orthonormal-basis and Euclidean-inner-product definitions; matrix and transpose laws; the SO(3) group facts; the cross-product definition and lemma; vector-valued differentiation and the chain rule; the sine/cosine definition, derivative result and trigonometric corollary; and the regular-value, embedded-submanifold, tangent-space and smooth-map definitions. The regular-level theorem was read with its nonempty-fibre and regular-value hypotheses.

## Independent mathematical and physical review

The Galilean transformation and its velocity and acceleration laws are correctly applied in the boost example. The rotating-basis calculation has the correct coordinate curve, derivatives and acceleration identity. The coordinate-velocity counterexample is valid. The rigid-rod example checks nonemptiness and rank on the full zero set and correctly applies the regular-level theorem to obtain dimension five. The worldline parameter-condition calculations are correct.

The model postulates distinguish adopted assumptions from deductions and do not present measurements or statistical conclusions. No experiment item or empirical premise occurs in this batch.

## Uneditable defects

This is a read-only reader assignment; no carrier edits were made.

- **post-cm01-frames**, Postulate clause (iii), lines 81–83: the claim that two different inertial frames have different stationary observer families is false. For example, take a second frame with the same time direction and basis but with origin shifted by a spatial vector. Its stationary curves are exactly the same maps as the first frame's curves, with the spatial labels relabelled. The claim should be restricted to frame changes that alter the time direction, or describe when the congruences differ. Severity: fatal.

- **post-cm01-frames**, Postulate clause (iv), lines 93–97: “exactly one” transformation is attributed to **lem-cm-adapted-charts-and-galilean-transformations**, whose Statement asserts existence of parameters but not uniqueness. The parameters are uniquely recoverable by comparing the time and spatial coordinate functions, but that argument or a supplier stating uniqueness is missing. Severity: nonfatal.

- **post-cm01-frames**, Postulate clause (vi), lines 113–120: momentum, angular momentum, energy and conservation are used as technical quantities without their mathematical definitions or an earlier supplier defining trajectories and constancy. **def-cm01-units** gives dimensions for some of these names, not their constructions. Either supply the definitions before this use or state simply that the frame postulate asserts no conservation law. Severity: nonfatal.

- **post-cm01-worldlines**, Postulate clause (v), lines 85–90: the positive mass parameter is said to be the same “for every model in which the label occurs.” The labels are indices within an individual model; no cross-model identity of a label is defined. The stated assumptions establish a fixed positive parameter within a model and frame, not a universal value across all model realizations. Severity: nonfatal.

- **post-cm01-spacetime**, Status and scope, lines 105–111: the intended regime is restricted to cases where a classical continuum description of matter is adequate, while the same framework explicitly adopts discrete point-particle labels in **post-cm01-worldlines**. Classical particle models do not require matter to be represented as a continuum. The continuum condition overnarrows the stated framework; it can remain as a condition for continuum applications without being imposed on particle models. Severity: nonfatal.

- **def-cm01-units**, Definition (d), lines 40–48: this item assigns dimensions to velocity, acceleration, mass operator, momentum, force, energy, action and angular momentum but does not give the mathematical types and defining constructions for those quantities. Its direct prerequisite is only **def-cm-affine-time-space**. The parenthetical for mass operator is not a map definition, and the other derived quantities are only named with dimensions. Define the relevant quantities before assigning their dimensions, or defer these entries to their defining suppliers. Severity: nonfatal.

- **def-cm01-configuration**, Definition (e), lines 108–116: the velocity law uses dot x without specifying an admissible curve, its domain or regularity, or identifying the derivative definition that supplies it. The item defines A and b but not the curve whose derivative is constrained. Define x:J→O as C1 and dot x(t)=x′(t), with its time parameter, or formulate the allowed-velocity set directly. Severity: fatal.

- **ex-cm01-dimension-bookkeeping**, Statement lines 39–40 and Verification step 3.2, line 65: the symbol a denotes the spatial translation in the Galilean transformation and also the coordinate acceleration in a′=Ra. Fact [L1] assigns the translation components dimension length, while step 3.2 uses the acceleration dimension. The two meanings need separate notation, such as a0 for translation. Severity: nonfatal.

- **ex-cm01-rotating-basis-of-a-free-motion**, Verification step 2.1, lines 89–90: the step concludes that R is C∞ from the suppliers’ first-derivative identities for sine and cosine. Those identities do establish the needed C2 regularity, and repeated differentiation establishes C∞, but the induction is omitted. Either show the repeated derivative argument or state only C2, which is what the moving-frame supplier requires. Severity: nonfatal.

- **def-cm-affine-time-space** (batch-1 in-run dependency), Definition line 38: the assertion V/K ≅ R and dim K=3 uses a quotient/isomorphism result and the finite-dimensional rank-nullity formula. The direct dependency **def-kernel-and-image-of-a-linear-map** defines kernel and image; its justified theorem **thm-linear-kernel-image-and-injectivity** proves they are subspaces and characterizes injectivity, not rank-nullity. The published **thm-rank-nullity** states the needed dimension formula but is absent from this item’s dependencies; no quotient-space or first-isomorphism supplier is listed either. Add the exact mathematical supplier(s) or provide a local derivation and definition of the quotient. Assigned consumer: **post-cm01-spacetime**. Severity: fatal.

- **def-cm-affine-time-space** (batch-1 in-run dependency), Definition lines 44–49: adapted charts require an oriented g-orthonormal basis of K. The listed orthonormal-basis supplier defines that term but does not establish existence; the opened library page explicitly notes the general Gram–Schmidt theory is not yet built. The consuming frame postulate presumes such frames exist. Supply a finite-dimensional construction (for example, Gram–Schmidt followed by orientation adjustment) or an exact theorem. Assigned consumer: **post-cm01-frames**. Severity: nonfatal.

- **def-cm-special-orthogonal-group** (batch-1 in-run dependency), Remarks line 40: the statement that both O(3) and SO(3) are subgroups is attributed to **lem-cm-so3-is-a-matrix-group**, whose Statement and proof establish the group properties only for SO(3). Add the O(3) argument or cite a supplier that proves it. Assigned consumer: **post-cm01-frames**. Defect: citation-inaccurate. Severity: nonfatal.

- **lem-cm-moving-frame-acceleration-identity** (batch-1 in-run dependency), Proof step 5.1, lines 79–81: the step replaces Ω′y by ω′×y, but the earlier pointwise representation Ω(t)z=ω(t)×z does not explicitly establish that t↦ω(t) is differentiable. Since R is C2, Ω is C1 and the components of ω are fixed linear combinations of Ω’s entries, so this is a short omission; state that regularity before differentiating. Assigned consumer: **ex-cm01-rotating-basis-of-a-free-motion**. Severity: nonfatal.

## Page verdicts

- **cm01-framework-quantities-and-geometry** — not accepted as written. The definitions and conditional kinematics are largely explicit, but the listed scope, undefined/conservation terminology, frame-congruence claim, and batch-1 mathematical prerequisites need disposition.
- **cm01-framework-quantities-and-geometry-examples** — not accepted as written. The boost, rigid-rod and parameter-condition computations are sound; the dimension example has ambiguous notation, and the rotating-basis proof overstates smoothness without the short regularity argument.

## Sources and limitations

The source passages checked were:

- K. K. Likharev, *Essential Graduate Physics, Part CM: Classical Mechanics*, §1.1, chapter page 2 / PDF page 6 (absolute Newtonian time and Euclidean spatial metric), and chapter page 3 / PDF page 7 (point-particle idealization and scalar constant mass): https://essentialgraduatephysics.org/Files/CM%20merged.pdf
- D. Tong, *Classical Dynamics*, §1.2 (particle idealization, momentum p=m v, inertial frames and Galilean changes), in the Cambridge-hosted HTML/PDF material: https://www.damtp.cam.ac.uk/user/tong/dynamics/dynhtml/S1.html and https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf
- D. Tong, *Dynamics and Relativity*, §1.2.1, printed page 5 / PDF page 11, for the Galilean transformation discussion: https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf
- Sussman and Wisdom, *Structure and Interpretation of Classical Mechanics*, chapter 1 page 2, for the two-particle fixed-distance five-dimensional configuration example: https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip/chapter001.html

The Lee first-edition PDF cited for the regular-level theorem exceeded the web reader’s 51 MB fetch limit. I checked the exact hypotheses and conclusion in the published local supplier **thm-a-regular-level-set-is-an-embedded-submanifold** and its complete local proof instead. The assigned rigid-rod proof itself establishes nonemptiness and the rank condition explicitly.

The assigned pages and all 14 assigned items were reviewed. I opened the direct mathematical suppliers needed for the claims above, but did not independently audit every proof in the mechanically computed 730-item recursive dependency closure. The run manifest and proof contracts were treated as navigation/evidence, not verdicts. No item validators or formatting tools were run because no carriers were edited.

## Blocker

No process blocker. The full transitive mathematical proof closure was not independently audited; the report limits its coverage claims accordingly.
