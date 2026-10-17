# Reader report — batch 53

Run: physics-remaining-80-2026-10-17  
Role: independent reader  
Scope: assigned batch 53 only; read-only review, no carrier edits.

## Opened inventory and review order

Assigned pages:
- A page tgr-mc01: library/thermodynamics-and-general-relativity-mathematics/tgr-mc01.md
- B page tgr-mc01-examples: library/thermodynamics-and-general-relativity-mathematics/tgr-mc01-examples.md

Assigned items, reviewed supplier before consumer:
1. def-tgr-local-fluid-state
2. lem-tgr-local-gibbs-euler
3. lem-tgr-fluid-frame-projection
4. ex-tgrmath-parcel-rest-shift

The A and B page summaries, item bodies, batch manifest, reader brief, and batch proof contracts were opened. The assigned item dependencies used in the arguments were checked in their relevant statements: def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-timelike-worldline-and-proper-time, def-gr-local-frame-and-tetrad-fields, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-countable-choice, lem-gr-observer-projection-decomposition, thm-gr-local-lorentz-tetrad-existence, thm-tdmath-local-implicit-rank, thm-euclidean-implicit-function-theorem, thm-euclidean-inverse-function-theorem, def-c-one-map-and-local-inverse, thm-chain-rule-for-total-derivatives, and lem-tdmath-concave-affine-maximizer-and-hessian.

The three page prerequisites were opened: gr-connections-and-free-fall, inverse-and-implicit-function-theorems, and td-math-nonsmooth-equilibrium. The imported inverse-and-implicit-function-theorems page was identified in research/math-imports.json. The cited Gourgoulhon and Borghini PDFs were opened at the cited sections on worldlines/proper time, stress-energy, thermodynamics, local rest frames, currents, and Eckart/Landau choices.

## Mathematical review

- def-tgr-local-fluid-state explicitly defines the state maps, field types, regularity, units, projection notation, and the distinction between a congruence, adapted chart, and tetrad. It does not impose a physical constitutive law or conservation equation. Its definitions are internally consistent.
- lem-tgr-local-gibbs-euler derives the Gibbs, Euler, parcel, homogeneity, Hessian-radial, and conditional response identities from the C2 state function. The local-coordinate uses of the implicit-function theorem have the stated nonzero minors. I found no mathematical gap in the proof.
- lem-tgr-fluid-frame-projection has sound projection and tensor decompositions. The Eckart normalization and uniqueness follow for a future timelike current. The Landau construction computes the stated Jacobian h0 I3 and applies the local graph theorem to obtain a local C1 field and local uniqueness. The null-dust obstruction is valid. However, its opening hypothesis does not define a Lorentz form as a symmetric nondegenerate bilinear map or define the “chosen future cone” as a component of the timelike cone. Consequently “future unit timelike” and “J is future timelike” are not fully specified for the standalone vector space in clauses 1–3. Clause 3's uniqueness proof uses this data to infer that the proportionality factor is positive. This statement-level defect needs an explicit definition or an exact supplier citation with its relevant content.
- ex-tgrmath-parcel-rest-shift is a correct direct calculation from the state definitions and parcel differential. It makes no empirical claim.

## Unedited findings

This is a read-only reader assignment, so I made no source edits. The exact findings, including the title spacing errors, are in research/physics-remaining-80-2026-10-17-reader-findings-53.json.

## Page verdicts

- tgr-mc01: defect present. The summary accurately describes the state definitions and conditional frame results, but its title has a missing space and the linked frame lemma has the undefined Lorentz/future-cone data noted above.
- tgr-mc01-examples: example summary and calculation are accurate; the page title repeats the missing space in “state,frame”.

## Blocker and coverage limitation

No workflow blocker prevented the review. I did not edit any item or page. I checked the direct mathematical supplier statements and the proofs most material to the local identity and frame constructions; I did not re-audit every transitive proof/source chain behind all published suppliers or read the cited PDFs cover to cover.

