# Step 5a Reader Report — Batch 8

Run: `frontier-36-complete`  
Date: 2026-09-29

## Opened inventory

Assigned pages opened from their current files:

- A: `library/scheme-theory/proj-projective-schemes-twisting-sheaves-and-ampleness.md`
- B: `library/scheme-theory/proj-projective-schemes-twisting-sheaves-and-ampleness-examples.md`

All 38 A-page items were opened and reviewed: `def-proj-graded-ring-points`,
`def-shifted-graded-module`, `def-standard-open-proj`,
`lem-proj-prime-localization-correspondence`, `thm-proj-structure-sheaf-scheme`,
`lem-standard-opens-proj-affine`, `def-associated-sheaf-graded-module-proj`,
`def-very-ample-invertible-sheaf-relative`, `def-ample-invertible-sheaf`,
`def-globally-generated-sheaf`, `lem-section-nonvanishing-affine-intersection`,
`lem-proj-associated-sheaf-basic-sections`, `def-twisting-sheaf-proj`,
`thm-projective-space-as-proj`, `lem-relative-proj-affine-local-gluing`,
`def-relatively-ample-invertible-sheaf`,
`lem-extend-sections-from-nonvanishing-open`, `lem-ample-stable-positive-power`,
`lem-ample-pullback-finite-morphism`, `lem-proj-irrelevant-and-nilpotent-boundaries`,
`thm-twisting-sheaf-invertible-standard-graded`, `lem-proj-veronese-invariance`,
`lem-projective-space-saturation-local-criterion`,
`def-relative-proj-quasi-coherent-graded-algebra`,
`def-section-zero-scheme-invertible-sheaf`, `lem-very-ample-implies-ample`,
`thm-closed-subschemes-projective-space-homogeneous-ideals`,
`thm-relative-proj-base-change`, `thm-line-bundle-sections-define-projective-map`,
`rem-proj-does-not-recover-graded-ring-literally`,
`thm-projective-map-line-bundle-data-equivalence`,
`lem-projective-morphism-relative-proj-presentation`,
`thm-serre-criterion-ampleness`, `thm-segre-line-bundle-external-tensor`,
`thm-veronese-pullback-twist`, `def-projective-bundle-scheme`,
`thm-ample-powers-very-ample-proper-base`, and
`thm-projective-bundle-represents-line-quotients`.

All 10 B-page items were opened and reviewed: `ex-proj-polynomial-ring-projective-space`,
`ex-proj-empty-irrelevant-nilpotent`,
`ex-twisting-sheaf-projective-line-transitions`,
`ex-zero-section-empty-effective-divisor`, `ex-proj-quotient-projective-hypersurface`,
`cex-o-minus-one-no-global-generators`, `cex-proj-graded-ring-not-faithful`,
`ex-line-bundle-map-conic-veronese`, `cex-globally-generated-not-very-ample`, and
`ex-projective-bundle-trivial-rank-r`.

I also opened the current statements or definitions of all 41 unique direct
external item dependencies listed by the batch manifest:
`def-affine-open-subscheme`, `def-affine-scheme-spectrum`,
`def-associated-sheaf-module-affine-scheme`, `def-axiom-of-choice`,
`def-coherent-module-scheme`, `def-finite-morphism-schemes`,
`def-finite-type-finite-presentation-module-sheaf`,
`def-graded-ring-and-graded-module`, `def-invertible-sheaf`,
`def-localisation-at-a-prime-ideal`,
`def-locally-finite-type-and-finite-type-morphism`,
`def-locally-free-sheaf-finite-rank`,
`def-locally-noetherian-and-noetherian-scheme`, `def-projective-morphism-pre-proj`,
`def-proper-morphism`, `def-quasi-coherent-module-scheme`,
`def-quasi-compact-and-quasi-separated-morphism`,
`def-quasi-compact-and-quasi-separated-scheme`,
`def-relative-projective-space-standard-charts`, `def-symmetric-algebra-qc-module`,
`lem-associated-sheaf-restriction-affine-open`,
`lem-associated-sheaf-sections-basic-open`,
`lem-closed-immersion-affine-quotient-and-base-change`, `lem-finite-morphism-affine`,
`lem-immersion-with-closed-image`, `lem-invertible-sheaf-dual-tensor-inverse`,
`lem-proper-source-to-separated-target-proper`,
`lem-pullback-qc-module-quasi-coherent`, `lem-radical-commutes-with-localisation`,
`lem-symmetric-algebra-qc-and-base-change`, `thm-affine-fibre-product-tensor-ring`,
`thm-affine-quasi-coherent-equivalence`, `thm-associated-module-sheaf-exists`,
`thm-coherent-sheaves-abelian-noetherian-scheme`, `thm-fibre-products-of-schemes-exist`,
`thm-gluing-affine-schemes`, `thm-kernels-cokernels-qc-modules`,
`thm-noetherian-ring-has-noetherian-spectrum`,
`thm-projective-space-proper-over-base`, `thm-proper-morphism-closed-image`, and
`thm-quasi-coherence-check-affine-cover`.

The run also lists `finite-proper-and-projective-morphisms` and
`quasi-coherent-and-coherent-sheaves-and-vector-bundles` as page prerequisites.
I opened both current page files and checked their relevant summaries against the
item statements used here. The batch dispatch prompt and batch manifest were
read. The proof-contract artifact was checked for coverage of all 48 assigned
IDs; the current item files, rather than the contract metadata, supplied the
mathematical evidence.

## Repairs

I edited only the assigned A-page summary at lines 86–93 and 107–110. The
denominator-clearing summary now records the inherited AC convention, the
quasi-compact and quasi-separated hypotheses on $X$, quasi-coherence of $F$,
invertibility of $L$, positive degree of $s$, and the actual target
$\Gamma(X,F\otimes L^{dr})$ with the $s^{-r}$ trivialisation over $X_s$. The
high-power embedding summary now states the Noetherian base, proper finite-type
morphism, absolute ampleness of $L$ on $X$, inherited AC convention, and the
closed H-very-ampleness conclusion. These qualifications match
`lem-extend-sections-from-nonvanishing-open` (Statement, lines 30–52) and
`thm-ample-powers-very-ample-proper-base` (Statement, lines 61–85).

No assigned item was edited. No item proof contract or `verification.judge`
record required an update, and no item reflow or precheck was run.
The uneditable findings are also stored at
`research/frontier-36-complete-reader-findings-8.json`.

## Uneditable findings

1. `items/def-associated-sheaf-module-affine-scheme.md:37–39` says that
   $D(g)\subseteq D(f)$ gives $g\in\sqrt{(f)}$, “so” $f^n=gh$. The first
   implication instead gives $g^n=fh$ for some $n,h$. For example, in
   $k[x,y]$, take $f=x$ and $g=xy$: $D(xy)\subseteq D(x)$, but no equation
   $x^n=xyh$ holds in $k[x,y]$. The restriction map exists because the corrected
   relation makes $f$ invertible in $A_g$, but the displayed inference is
   false. This is a Batch 7 draft dependency and is outside this reader's edit
   scope. The assigned item `def-associated-sheaf-graded-module-proj` directly
   depends on it.
2. `items/thm-associated-module-sheaf-exists.md:115` (step 4.1(b)) proves an
   arbitrary compatible section agrees with the finite-subcover candidate on
   one selected intersection $D(f_i f_{i_j})$, then applies the finite-cover
   uniqueness step to $D(f_i)=D(f_i)\cup D(f_i f_{i_j})$. This cover includes
   all of $D(f_i)$ as one member, where vanishing has not been shown, so the
   uniqueness hypothesis does not apply. The needed cover is by all the
   intersections with the finite subcover. The theorem's conclusion is not
   challenged here, but this proof step is not licensed. This is a Batch 7
   draft dependency and is outside this reader's edit scope. Assigned items
   `def-associated-sheaf-graded-module-proj` and
   `thm-serre-criterion-ampleness` directly depend on it.

## Page verdicts

- A page: **Pass after the prose repair.** The statements in the page summary
  now retain the hypotheses and conclusion of the two summarized results.
- B page: **Pass.** The examples, counterexamples, witnesses, and computations
  are consistent with the cited definitions and the assigned A-page results.

## Blockers and coverage limit

No blocker prevented this reader pass. The cross-batch dependency map still
labels the two page prerequisites above as open; I read their current page
summaries but did not alter that out-of-scope map. The recomputed root
`.autopilot` status confirms that `frontier-36-complete` is running; after the
report and findings JSON were written, batch 8 no longer appears in the missing
artifact list. The `5a-read` stage still awaits its reader coverage record, which
I did not stamp. No standalone rendered evidence bundle was present in the
dispatch directory. I inspected the current statement/definition sections for
all direct external item dependencies, but did not independently re-prove every
external dependency end to end. The two reported dependency defects were
checked at their exact proof locations; the assigned batch's current item
proofs and page summaries were reviewed directly.
