# Step 5a Reader Report — Batch 21

Run: `frontier-36-complete`  
Reader: `reader-21`

## Blocker and scope

The requested state directory `.autopilot/frontier-36-complete` is absent. The
status command for that run reports that the workflow revision differs and that
historical receipts cannot be adopted under the current stage numbering. The
only live state directory found is `.autopilot/frontier-36-twelve-categories`;
its recomputed status is held at the Step 1 drift gate. The latest Git commit is
`0d143b8f` (`Defer live citation checks from Step 3b to Step 5b`). These records
do not establish that the named `frontier-36-complete` carriers are in flight.

I completed the content audit from the assigned manifest and current files. I
made no item or page edits because the required in-flight authorization for the
named run could not be verified. The three citation defects below therefore
remain unedited. No item contracts or judge records were changed, and reflow and
precheck were not run because no carrier was repaired.

## Opened inventory

Assigned pages:

- A — `library/homological-algebra/grothendieck-groups-and-graded-cartan-pairings.md`
- B — `library/homological-algebra/grothendieck-groups-and-graded-cartan-pairings-examples.md`

Assigned items, read in dependency-level order:

- Level 0: `def-grothendieck-group-of-an-essentially-small-abelian-category`;
  `def-split-grothendieck-group-of-an-additive-category`;
  `lem-graded-fitting-decomposition-preserves-homogeneous-summands`.
- Level 1: `thm-grothendieck-group-universal-properties-and-functoriality`;
  `thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis`;
  `thm-graded-krull-schmidt-for-finite-dimensional-graded-modules`;
  `lem-finite-dimensional-graded-algebras-have-graded-projective-covers`.
- Level 2: `thm-finite-length-grothendieck-groups-have-simple-class-bases`;
  `def-graded-grothendieck-group-shift-module-and-cartan-map`.
- Level 3: `thm-graded-projective-and-simple-classes-have-shift-orbit-bases`;
  `def-projective-simple-hom-pairing-on-grothendieck-groups`;
  `ex-cartan-map-for-the-dual-numbers`.
- Level 4: `thm-projective-hom-pairing-is-additive-and-graded-sesquilinear`;
  `ex-graded-dual-numbers-cartan-polynomial`.
- Level 5: `thm-split-simple-projective-hom-pairing-has-dual-bases`;
  `thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators`.
- Level 6: `ex-hom-pairing-over-a-nonsplit-field`.

I also opened the current statement/definition section for each of the 63
unique declared dependencies outside the assigned item set. This includes the
category, module, exactness, projectivity, graded-shift, Hom, finite-length,
quotient, and finite-dimensional linear-algebra facts used in the contracts.

## Audit and findings

The authored definitions, statements, proof contracts, proofs, computations,
examples, remarks, and page summaries are mathematically sound on the inspected
arguments. In particular, the graded shift convention is consistently
`M{r}_d = M_{d-r}`; the graded Hom pairing has the stated exponent
`v^{s-r}`; the two dual-number Cartan computations give `2` and `1+v^2` under
that convention; and the real/complex example has pairing value `2`.

The following citation defects remain unedited because the run status blocker
above prevents confirming repair authority:

1. `items/lem-graded-fitting-decomposition-preserves-homogeneous-summands.md:26`
   lists Kleshchev, §2.2 as its source. The cited section (PDF pp. 6–7) sets up
   graded module, shift, homogeneous Hom, and pairing conventions; it does not
   state the finite-dimensional graded Fitting decomposition or the localness
   conclusion. The assigned item proves those claims locally.
2. `items/thm-graded-krull-schmidt-for-finite-dimensional-graded-modules.md:25`
   lists Kleshchev, §2.2 as its source. That section contains no graded
   Krull–Schmidt decomposition or uniqueness result. The assigned item gives a
   local proof.
3. `items/lem-finite-dimensional-graded-algebras-have-graded-projective-covers.md:27`
   lists Kleshchev, §2.2 as its source. That section defines the graded module
   setting and discusses shift and graded-simple conventions, but does not
   state existence or uniqueness of finite graded projective covers. The
   assigned item proves the cover result locally.

No defect was found in the dependency statements opened for this batch. Source
checks confirmed that Weibel, Chapter II, Exercise 6.3 is the
finite-length simple-class basis exercise; Stacks tag 02MT gives the short
exact-sequence presentation of the K-group and exact-functor map; Kleshchev,
§2.2 gives the cited graded shift and homogeneous-Hom/pairing conventions; and
Khovanov–Seidel, §2e.1 discusses Grothendieck operators for its specific
`A_m` family, not the general adjunction theorem.

## Page verdicts

- **A page:** sound summary of the assigned Grothendieck-group, graded-shift,
  pairing, and adjunction results. No page-prose defect found. Three source
  entries in its assigned item set remain routed as findings above.
- **B page:** sound summary of the dual-number and nonsplit-field examples. No
  page-prose defect found.

## Coverage limitation

All two assigned pages and all 17 assigned items were read in full. The current
statement/definition sections of all 63 unique declared external dependencies
were opened, but I did not audit each dependency item's separate proof. The
named run's active status could not be verified, so no potentially repairable
carrier was modified.
