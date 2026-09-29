# Step 5a reader report — batch 7

Run: `frontier-36-complete`  
Role: reader  
Assigned batch: `7`

## Scope and runtime limitation

Read the assigned manifest, both listed pages, all 50 assigned items, and the dependencies needed to check their statements and the identified repairs. No rendered reader evidence bundle was available, so I opened the assigned files and relevant dependencies directly. The matching runtime directory `.autopilot/frontier-36-complete` is absent; the status command cannot load the saved workflow under the current revision. The only live autopilot state is `.autopilot/frontier-36-twelve-categories`, at stage 1 drift and held by blockers, so it does not establish the status of this dispatch. I treated the explicit reader dispatch and the assigned carriers' `pipeline_run: frontier-36-complete` / draft metadata as the scope for this review. I did not judge, stamp, or certify any carrier.

## Opened inventory

Assigned A-page: `library/scheme-theory/quasi-coherent-and-coherent-sheaves-and-vector-bundles.md`.

Assigned A-page items (40):

`def-associated-sheaf-module-affine-scheme`; `thm-associated-module-sheaf-exists`; `def-quasi-coherent-ideal-sheaf` (published); `lem-associated-sheaf-stalk-localization`; `lem-associated-sheaf-sections-basic-open`; `lem-associated-sheaf-restriction-affine-open`; `def-quasi-coherent-module-scheme`; `lem-principal-affine-module-descent`; `thm-affine-quasi-coherent-equivalence`; `cor-affine-qc-sheaf-determined-global-sections`; `thm-quasi-coherence-check-affine-cover`; `thm-kernels-cokernels-qc-modules`; `lem-tensor-qc-modules-quasi-coherent`; `lem-pullback-qc-module-quasi-coherent`; `thm-pushforward-qc-under-qcqs-morphism`; `def-finite-type-finite-presentation-module-sheaf`; `def-coherent-module-scheme`; `thm-coherent-sheaves-abelian-noetherian-scheme`; `def-internal-hom-qc-sheaves`; `lem-internal-hom-fp-qc`; `def-locally-free-sheaf-finite-rank`; `lem-dual-locally-free-and-base-change`; `def-symmetric-algebra-qc-module`; `lem-symmetric-algebra-qc-and-base-change`; `def-vector-bundle-scheme`; `thm-vector-bundles-locally-free-sheaves-equivalence`; `def-invertible-sheaf`; `lem-invertible-sheaf-dual-tensor-inverse`; `def-support-module-sheaf`; `thm-support-finite-type-qc-closed`; `def-fibre-of-module-at-point`; `lem-sheaf-nakayama-fibre-detects-generation`; `thm-locally-free-locus-finite-presentation-open`; `lem-fitting-ideals-presentation-independent`; `def-fitting-ideal-sheaf`; `thm-fitting-ideals-control-rank-loci`; `thm-qc-ideal-closed-subscheme-correspondence-complete`; `thm-quasi-coherent-ideal-closed-subscheme-correspondence` (published); `thm-scheme-theoretic-image-quasi-compact-morphism` (published); `rem-coherent-needs-noetherian-or-coherent-ring-care`.

Assigned B-page: `library/scheme-theory/quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples.md`.

Assigned B-page items (10):

`ex-associated-sheaf-quotient-module`; `ex-associated-sheaf-localized-module`; `ex-skyscraper-coherent-closed-point`; `ex-line-bundle-projective-line-transition`; `cex-qc-sheaf-global-sections-not-determine-nonaffine`; `cex-pushforward-qc-needs-quasi-separated`; `cex-finite-type-module-not-locally-free`; `ex-fitting-ideal-two-by-two-presentation`; `ex-rank-zero-locally-free-sheaf`; `cex-stalk-versus-fibre-module`.

Published dependencies opened for the assigned claims include `thm-quasi-coherent-ideal-closed-subscheme-correspondence` and `thm-scheme-theoretic-image-quasi-compact-morphism`. Other dependency statements opened as needed include `def-module-on-ringed-space`, `def-stalk-of-presheaf`, `def-affine-scheme-spectrum`, `thm-structure-sheaf-affine-scheme`, `thm-sections-basic-open-affine-scheme`, `lem-basic-opens-quasi-compact`, `def-localisation-of-a-module`, `thm-localisation-of-modules-is-exact`, `def-sheaf-on-topological-space`, and `thm-stalk-structure-sheaf-prime-localization`.

Proof-contract file reviewed and updated for affected repairs: `research/frontier-36-complete-batch-7.proof-contracts.json`.

## Repairs and evidence

1. `thm-associated-module-sheaf-exists`, proof steps 2.1, 3.1, and 4.1. The finite gluing proof now handles the zero exponent case in its partition identity, handles covers of the empty distinguished open including finite families of empty basic opens, and compares a section over an arbitrary basic open on the full finite cover by its overlaps with the selected finite subcover. The previous argument applied finite-cover separation to `D(f_i)=D(f_i)\cup D(f_if_{i_j})`, which is not a cover of `D(f_i)`. The repair follows from quasi-compactness of basic opens (Fact F5), the module localization criterion (F3), and the finite-cover gluing and separation argument (steps 1.1–3.1). The associated proof contract's derivations and empty/zero/degenerate boundaries were updated. Validation: `reflow.mts` completed; `precheck.mts` passed (1 checked, 0 failing). Next: validate `lem-associated-sheaf-stalk-localization`.

2. `lem-associated-sheaf-stalk-localization`, proof step 1.4. Replaced the invalid implication from `tm=0` to `t^k m=0` when `k=0`. Since `t` is inverted in `M_{ft}`, `tm=0` directly implies `m=0` there, so the representative vanishes on the distinguished neighborhood `D(ft)`. Evidence: the localization fraction criterion (F3) and the neighborhood basis/stalk description (F2). The proof contract derivation was updated. Validation: `reflow.mts` completed; `precheck.mts` passed (1 checked, 0 failing). Next: validate `def-support-module-sheaf`.

3. `def-support-module-sheaf`, definition prose. Removed the false claim that a sheaf with a nowhere-vanishing section can have small support; such a section has a nonzero germ at every point in its domain. Qualified `Supp(O_X)=X` to the case of nonzero structure stalks (including schemes), since a general ringed space need not have nonzero structure stalks. Removed the unrelated assertion about treating an arbitrary sheaf as a module over the constant sheaf `Z`; the definition is for `O_X`-modules. The support definition uses nonzero stalks and the cited module/stalk definitions. The proof-contract boundary for the one-point case was qualified. Validation: `reflow.mts` completed without changes; `precheck.mts` exited successfully but checked 0 proof-bearing sections for this definition, so it supplied no item-level proof-format check. Next: validate `def-coherent-module-scheme`.

4. `def-coherent-module-scheme`, noncoherent example. Replaced the false basis description with the classes of `1,x,x^2,...,y_1,y_2,...`. The relations impose `xy_i=0` and `y_i y_j=0`, so monomials `x^a y_i` for `a>0` vanish; the corrected basis and the stated annihilator calculation give the intended infinitely generated kernel. The degenerate boundary evidence in the proof contract was updated. Validation: `reflow.mts` completed without changes; `precheck.mts` exited successfully but checked 0 proof-bearing sections for this definition, so it supplied no item-level proof-format check. Next: validate `thm-locally-free-locus-finite-presentation-open`.

5. `thm-locally-free-locus-finite-presentation-open`, Fact F6(a). Replaced the claimed section `w↦(0,w)` of the fiber-product projection, which generally fails because `β(w)` need not vanish. The repaired proof lifts the image of each basis vector of `A^n` through the surjection `ψ`, and each basis vector of `A^r` through `β`, obtaining sections of both projections. Their kernels are respectively `ker ψ` and `im α`; therefore the fiber product is finitely generated and its direct summand `ker ψ` is finitely generated. This uses only the finite free bases and the surjections in the displayed presentation. The proof contract derivation for step 3.1 was updated. Validation: `reflow.mts` completed; `precheck.mts` passed (1 checked, 0 failing). Next: final inventory, diff, and report consistency review.

No stale `verification.judge` record was present in the changed item files. No page prose was edited. No proposed withdrawal was found.

## Page verdicts

- A-page: no remaining defect found in the page prose. Its summary accurately describes the assigned constructions and conclusions, including support via stalks, the open finite-free locus, and Fitting ideals.
- B-page: no remaining defect found in the page prose. Its examples and counterexamples are consistent with their assigned item statements; the non-quasi-separated pushforward counterexample was checked through its construction and proof.

## Remaining findings and blocker

No confirmed or suspected uneditable mathematical defect remains in the reviewed scope. Reflow ran on all five edited items; precheck passed the three proof-bearing items, while the two definition items had no proof-bearing sections for the checker to inspect. The runtime mismatch above is an operational limitation: the dispatched run's saved status and in-flight ownership could not be reconstructed from `.autopilot/`. It did not prevent review of the explicitly assigned files.
