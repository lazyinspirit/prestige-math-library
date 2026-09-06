# Frontier 32 — reader 9

## Scope opened

- Manifest: `research/frontier-32-batch-9.pages.json` (70 items: 57 A and 13
  B).
- Pages: `library/commutative-algebra/depth-and-cohen-macaulay-modules.md` and
  `library/commutative-algebra/depth-and-cohen-macaulay-modules-examples.md`.
- Direct dependency interfaces opened: `def-associated-prime-of-a-module`,
  `def-balanced-ext-bifunctor`, `def-flat-and-faithfully-flat-modules-and-ring-maps`,
  `def-koszul-complex-of-a-sequence-with-coefficients`,
  `def-regular-sequence-on-a-module`, `def-support-of-a-module`,
  `def-system-of-parameters-and-parameter-ideal`,
  `lem-associated-prime-equivalent-cyclic-embedding`,
  `lem-finite-prime-avoidance`, `lem-parameter-dimension-drop-is-exact`,
  `lem-zero-divisor-annihilator-contained-in-associated-prime`,
  `thm-artin-rees-lemma`,
  `thm-completion-preserves-dimension-and-hilbert-samuel-data`,
  `thm-dimension-and-parameters-for-modules`,
  `thm-existence-of-associated-primes`,
  `thm-faithful-flatness-of-jacobson-adic-completion`,
  `thm-flatness-of-noetherian-completion`, `thm-krull-height-theorem`,
  `thm-krull-principal-ideal-theorem`,
  `thm-localisation-and-flat-base-change-of-regular-sequences`,
  `thm-long-exact-ext-sequence-in-the-second-variable`,
  `thm-minimal-support-primes-are-associated`, `thm-nakayama-lemma`, and
  `thm-regular-sequences-give-acyclic-koszul-complexes`.
- Source passages independently opened: Stacks Sections 10.72 (definition,
  Ext characterization, Depth Lemma, quotient, associated-prime, and
  localization results), 10.103 (definition and regular-parameter results),
  and 10.163 (flat-local results). In particular, 10.72.1 gives the exact
  `IM=M`/zero-module depth convention, and 10.103.1 gives the local
  Cohen--Macaulay equality.

## Repairs made

1. `def-depth-with-respect-to-an-ideal`: replaced strategy prose with the
   actual finite-module definition, including the `IM=M` and zero-module
   convention and the local abbreviation.
2. `def-cohen-macaulay-local-module-and-ring`: replaced strategy prose with
   the finite nonzero local-module equality, made the zero-module exclusion
   explicit, and defined the ring case.
3. `def-maximal-and-global-cohen-macaulay-modules`: supplied the maximal and
   global definitions and stated their distinct zero-module conventions.
4. A-page summary: changed the claim that the material is already developed to
   an accurate draft-status summary. No B-page prose was changed.

No repaired item had a `verification.judge` record, and definitions have no
proof-contract entry to update.

## Confirmed in-flight defect

All 67 proof-bearing assigned items remain fatally ill-formed. Each has a
strategy sentence in place of its mathematical statement/example, then says
“the hypotheses and notation stated above” even though none are stated, and
its two numbered rows merely repeat the strategy. Thus there is no domain,
quantifier, hypothesis, conclusion, witness, computation, or proof to verify.
This is not a short omitted inference: it prevents every cited dependency from
being applied and every displayed title from being assessed.

The affected A items are:

`lem-depth-infinity-when-ideal-acts-surjectively`,
`lem-regular-element-exists-by-prime-avoidance`,
`cor-depth-zero-iff-ideal-contained-in-an-associated-prime`,
`thm-depth-zero-associated-prime-criterion`,
`lem-maximal-regular-sequence-stops-at-associated-prime`,
`lem-ext-depth-zero-identifies-annihilated-elements`,
`lem-ext-depth-shift-across-a-regular-element`,
`lem-maximal-regular-sequences-have-common-length-ext`,
`cor-depth-as-first-nonzero-ext`,
`thm-depth-equals-maximal-regular-sequence-length`,
`lem-depth-radical-invariance-via-ext`,
`cor-depth-depends-only-on-radical`,
`lem-depth-quotient-by-regular-element`,
`lem-associated-prime-after-power-regular-quotient`,
`lem-depth-bounded-by-associated-prime-quotient-dimension`,
`lem-depth-localisation-inequality`,
`thm-radical-localisation-and-regular-quotient-properties-of-depth`,
`lem-depth-lemma-lower-bound-middle`,
`lem-depth-lemma-lower-bound-left`,
`lem-depth-lemma-lower-bound-right`, `thm-depth-lemma`,
`cor-depth-lemma-unequal-depth-equalities`,
`lem-koszul-depth-first-nonzero-cohomology`,
`cor-depth-bounded-by-number-of-ideal-generators`,
`thm-koszul-characterisation-of-depth`,
`lem-depth-at-a-prime-bounded-by-local-dimension`,
`cor-depth-of-a-finite-local-module-at-most-its-dimension`,
`thm-depth-bounded-by-support-dimension`,
`cor-zero-dimensional-local-modules-are-cohen-macaulay`,
`lem-regular-quotient-preserves-depth-dimension-gap`,
`cor-regular-quotient-cohen-macaulay-equivalence`,
`thm-regular-quotients-and-cohen-macaulayness`,
`lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`,
`cor-cohen-macaulay-modules-have-no-embedded-associated-primes`,
`thm-associated-primes-of-cohen-macaulay-modules`,
`lem-cohen-macaulay-parameter-first-element-regular`,
`lem-cohen-macaulay-parameter-sequence-induction`,
`cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`,
`cor-one-regular-system-of-parameters-implies-cohen-macaulay`,
`thm-parameters-and-regular-sequences-in-cohen-macaulay-modules`,
`lem-localisation-of-cohen-macaulay-module-depth-dimension-equality`,
`cor-cohen-macaulayness-localises`,
`thm-localisation-of-cohen-macaulay-modules`,
`lem-polynomial-extension-depth-increases-by-one`,
`cor-polynomial-extension-preserves-cohen-macaulayness`,
`thm-polynomial-extension-of-cohen-macaulay-rings`,
`lem-completion-preserves-regular-sequences`, `lem-completion-reflects-depth`,
`cor-completion-preserves-cohen-macaulayness-two-directions`,
`thm-completion-preserves-cohen-macaulayness`,
`lem-flat-local-depth-formula-regular-sequence-split`,
`cor-flat-local-depth-additivity`,
`cor-flat-local-cohen-macaulay-fibre-criterion`, and
`thm-depth-formula-for-flat-local-homomorphisms`.

The affected B items are:

`ex-zero-dimensional-rings-cohen-macaulay`,
`ex-polynomial-rings-cohen-macaulay`, `ex-non-cohen-macaulay-local-ring`,
`ex-cohen-macaulay-ring-with-zero-divisors`,
`ex-maximal-cohen-macaulay-module`, `ex-depth-of-a-hypersurface`,
`ex-depth-of-a-union-of-planes`, `ex-depth-infinity-zero-module-convention`,
`ex-depth-lemma-three-inequalities`,
`ex-parameter-sequence-regular-in-a-hypersurface`,
`ex-parameter-sequence-fails-in-a-non-cm-ring`,
`ex-cohen-macaulay-associated-primes-unmixed`, and
`ex-completion-depth-computation`.

These defects are in-flight and assigned, so they are not emitted as
uneditable findings. They require full reauthoring with exact statements and
proofs/verifications; no withdrawal was deleted.

## Validation

- Reflow: unchanged for each of the three repaired definitions.
- Focused precheck: `0 checked, 0 failing` (definitions have no proof body).
- Full assigned precheck: `67 checked, 0 failing`; this validates the
  phase-format shell only and does not cure the missing claims above.
- `content-policy.mjs research/frontier-32-batch-9.pages.json`: 70 scoped,
  0 errors, 0 warnings.
- Strict proof contracts: 67/67 checked, 0 errors, 0 warnings; contracts are
  structurally valid but cannot supply absent item claims.
- Focused rendercheck for the three definitions and A page: pass after fixing
  the display-math formatting introduced in the repair.
- Repository-wide `depcheck --quiet` has pre-existing unrelated failures
  (13 errors and 477 warnings); none names a batch-9 item or the repaired
  A-page.

## Page verdict and blocker

- A page: **blocked** — three definitions are now meaningful, but 54 listed
  proof-bearing entries do not contain mathematical claims.
- B page: **blocked** — all 13 listed examples lack a concrete construction,
  computation, and conclusion. Its body was not edited.
- No access or source blocker remains. The release blocker is the 67-item
  authoring gap documented above.
