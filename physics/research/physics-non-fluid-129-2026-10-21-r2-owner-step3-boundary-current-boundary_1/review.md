# Current boundary case review

Read all eight complete current source files. All source hashes, audit input and immutable semantic-contract input match the supplied scope guards. This is selected-case metadata evidence review, not an independent proof acceptance or recertification.

Result: 11 rows upheld; four rows corrected from not_applicable to checked. No source repair or consumer-cone work is required by a defect found in these selected cases. No full supplier proof audit or external-source reading is claimed.

## cex-emx-rough-field-energy-limit

**iff-forward — uphold.** The public target is a universal implication from distributional Maxwell solvability to locally integrable electric energy. Step 1.1 constructs a particular stationary Coulomb solution; step 1.2 uses q!=0 and shells with delta tending to zero to violate that conclusion; step 2.1 excludes this witness from the finite-energy model. Neither membership in that model nor Maxwell solvability is characterized by a converse.

**iff-reverse — uphold.** The public target is a universal implication from distributional Maxwell solvability to locally integrable electric energy. Step 1.1 constructs a particular stationary Coulomb solution; step 1.2 uses q!=0 and shells with delta tending to zero to violate that conclusion; step 2.1 excludes this witness from the finite-energy model. Neither membership in that model nor Maxwell solvability is characterized by a converse.

## def-emx-angular-spectrum

**iff-forward — correct.** The Definition explicitly introduces a predicate: a candidate is an exact source-free vacuum plane-wave mode precisely when its encoded real fields are jointly C1 and satisfy the four displayed homogeneous Maxwell equations. In the forward direction, being a mode in this defined sense entails those regularity and equation conditions by unpacking the definition. Verification step 4.1 binds that clause to F4 and A2; no scalar propagator is thereby claimed to satisfy Maxwell.

**iff-reverse — correct.** For the same encoded candidate, jointly C1 real fields satisfying the four displayed source-free equations meet exactly the predicate that the Definition names an exact source-free vacuum plane-wave mode. Verification step 4.1 supplies the adopted homogeneous-model binding. This reverse direction is definitional; it does not assert that arbitrary band-limited scalar u0 yields such vector fields, nor a new amplitude/transversality characterization.

## def-emx-finite-energy-boundary-model

**iff-forward — uphold.** This is a specification of admissible solution data, two alternative boundary branches, and energy. PEC explicitly uses closure membership without claiming equivalence to a trace kernel. Impedance explicitly assumes a Green-compatible L2 pair rather than deriving its existence from H(curl). Its bounded-coefficient energy and Y|E_tau|^2 integrability consequences do not assert an equivalence theorem or converse existence claim. The generic reason is true for this particular definition.

**iff-reverse — uphold.** This is a specification of admissible solution data, two alternative boundary branches, and energy. PEC explicitly uses closure membership without claiming equivalence to a trace kernel. Impedance explicitly assumes a Green-compatible L2 pair rather than deriving its existence from H(curl). Its bounded-coefficient energy and Y|E_tau|^2 integrability consequences do not assert an equivalence theorem or converse existence claim. The generic reason is true for this particular definition.

## ex-emx-anomalous-group-delay

**iff-forward — uphold.** The Statement specifies one passive Lorentz medium and one chosen positive-real/positive-imaginary square-root branch, realizes its transverse mode, and computes a negative phase derivative at nu=1. Verification 1.1 includes a converse construction after deriving the wave symbol, but this supports the specified example rather than asserting a public iff classification. The actual final conclusion 2.1 is the local derivative sign and the absence of a front inference; neither is a claimed equivalence.

**iff-reverse — uphold.** The Statement specifies one passive Lorentz medium and one chosen positive-real/positive-imaginary square-root branch, realizes its transverse mode, and computes a negative phase derivative at nu=1. Verification 1.1 includes a converse construction after deriving the wave symbol, but this supports the specified example rather than asserting a public iff classification. The actual final conclusion 2.1 is the local derivative sign and the absence of a front inference; neither is a claimed equivalence.

## ex-emx-impedance-sign-check

**iff-forward — uphold.** The Example prescribes E_tau=E0 e_x and either sign of the boundary law. Verification 1.1--2.1 calculates their respective outward powers +Y E0^2 and -Y E0^2. Verification 3.1 conditionally integrates the Green-compatible evolution identity; it assumes a solution and does not infer its existence from a boundary flux sign. The strict-inward statement when Y E0^2>0 is a stated consequence, not a public characterization of all boundary data by energy increase.

**iff-reverse — uphold.** The Example prescribes E_tau=E0 e_x and either sign of the boundary law. Verification 1.1--2.1 calculates their respective outward powers +Y E0^2 and -Y E0^2. Verification 3.1 conditionally integrates the Green-compatible evolution identity; it assumes a solution and does not infer its existence from a boundary flux sign. The strict-inward statement when Y E0^2>0 is a stated consequence, not a public characterization of all boundary data by energy increase.

## ex-emx-lossless-dispersive-energy

**iff-forward — uphold.** Verification 1.1 compares two allowed instantaneous oscillator states with identical E=D=P=B=H=0, but P_t=0 versus a nonzero v, giving energy 0 versus |v|^2/(2a)>0. Verification 2.1 concludes that energy is not a function of the instantaneous pair (E,D). This two-state counterexample to determinacy is neither direction of an iff characterization of energy or admissible states.

**iff-reverse — uphold.** Verification 1.1 compares two allowed instantaneous oscillator states with identical E=D=P=B=H=0, but P_t=0 versus a nonzero v, giving energy 0 versus |v|^2/(2a)>0. Verification 2.1 concludes that energy is not a function of the instantaneous pair (E,D). This two-state counterexample to determinacy is neither direction of an iff characterization of energy or admissible states.

## lem-emg-fx-global-dirichlet-holder-estimate

**empty — uphold.** The detected sum is in the norm definition over multi-indices in N_0^3. For k=0 the sets |beta|<=k and |beta|=k both contain (0,0,0); for k=2 they contain the zero multi-index or the six second-order multi-indices respectively. These are fixed nonempty sets, not an arbitrary input family that can be empty. The domain is explicitly nonempty and open, so it contains distinct points for the Holder supremum; boundedness and smoothness give the finite covering used in steps 1.1 and 4.1. The normalized sequence in step 5.1 arises only under the contrary assumption. No empty input-family case is available.

## pthm-emx-drude-plasma-response

**iff-forward — correct.** The Statement classifies existence of a source-free transverse bulk mode with real nonzero k and e!=0 in the collisionless branch. Necessity is genuine: step 3.1 derives |k|^2=mu epsilon_infty(omega^2-omega_p^2). Its left side is strictly positive and mu epsilon_infty>0, forcing omega>omega_p since omega>0. Equality gives k=0 and is expressly outside the class; below cutoff the right side is negative. Thus the old blanket non-equivalence reason misses an actual necessary/sufficient cutoff claim.

**iff-reverse — correct.** Sufficiency is established in the same actual step 3.1, not inferred just from a positive symbol: for omega>omega_p it chooses k0=sqrt(mu epsilon_infty(omega^2-omega_p^2))>0, k=k0 zhat, e=xhat, b=(k0/omega)yhat, h=b/mu and checks both curl and both divergence constraints. It supplies a real nonzero transverse mode. The step 4.1 complex evanescent mode below cutoff is a separate class and does not supply a real-k converse exception.

The proposal embeds each exact original row, candidate, source guard and supporting current paragraphs. The four replacement rows carry only case, status and item-specific evidence; root must preserve historical provenance and perform its own current row hashing/certification. Unselected cases are outside this review and remain untouched.
