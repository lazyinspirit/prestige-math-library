# Batch 49 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-49`.

## Completed in dependency order

- Level 1, `lem-module-jacobi-formal-delta-substitution-identity`: current proof and formal-distribution/Laurent conventions checked coefficientwise. Negative powers cancel and nonnegative coefficients match using the negative-binomial identity; j=0 is included. No defect. Risk review complete in batch contract. Sources: Nozaradan, §§1.2–1.3 (https://arxiv.org/pdf/0809.1380); local proof establishes the three-variable identity directly.


- Level 2, `def-vertex-algebra-module`: reader locator correction accepted. Arakawa–Moreau §2.9 Definition 2.6 and Lemma 2.8 are at printed pp. 58–59; HLZ Definition 2.9 equations (2.35)–(2.37) give the exact three axioms, with further grading/Virasoro conditions explicitly distinguished. Definition, domains, zero module and Jacobi conventions are sound. Change is bibliographic metadata only; no consumer interface changed. Pre/post hashes differ as reported; exact historical comparison is being checked.

- Level 4, `thm-rank-one-heisenberg-vertex-operator-algebra`: every reconstruction hypothesis and residue normal-product formula checked against the current supplier proof. Virasoro scalar error and its central sum, L(-1), Euler weights and finite monomial bases are sound, including m=0,1. Arakawa–Moreau Proposition 3.1/Example 3.1 (pp. 67–68) and Example 3.4 (p. 71) cross-checked. Risk complete; no repair.

- Level 4, dual-number counterexample: reviewed full subcategory definition, simple-class proof, nonsplitting and exclusion of CFT type. Zero module and epsilon=0 cases cause no defect. Local delta identity supplies full module Jacobi; no Choice used. Risk complete; no repair.


- Level 5, `lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi`: reviewed contraction signs/factorials, partial matching enumeration, common reversed expansion, full Taylor iterate and degree-projection justification. This proves all three-variable Jacobi coefficients for arbitrary E,A, including E=0 and A=0; no semisimplicity, choice or completion needed. The full Wick proof in Arakawa–Moreau Theorem 2.2 (pp. 50–51) and smooth-module correspondence Proposition 3.2 (pp. 67–68) were read as cross-checks. Risk complete; no repair.


- Level 6, `thm-rank-one-heisenberg-jordan-fock-module`: accepted reader title repair. Full proof verifies quadratic Virasoro modes, exact generalized weight spaces using the inverse c^(-1)I−lambda c^(-2)N, dimensions, lower bound, and logarithmic iff lambda nonzero. At zero the conformal operator is diagonal although the current zero mode is not. Risk complete. Manifest title synchronized. Current raw SHA-256 f846a2752f1db5ecafeb30b958df8083577c489488b82e6203d6c87cbbedd999 equals post-reader; replacing only its title reconstructs exact pre-reader df97422e4ee92f1ae8a8b9a79a73f4309cab53de2c9e5904cbd77a29f27dd6fc.

Historical module-definition binding: archive `research/non-ml-math-remaining-81-2026-10-18-owner-logarithmic-voa-completion/archive/items/def-vertex-algebra-module.md` matches pre-reader e38104762e69c4043d445c5fc2b19c7b365104d211ddc179e0fd4e5cd5fce563; current raw hash 3bc44ddac628cf30f6d02475967142a216325eedbdca096058084c5d5a104d8a equals post-reader. Only bibliographic fields differ. No historical uncertainty or owner resolution needed.


- Level 6, `ex-trivial-vertex-algebra-is-rational`: confirmed `refuter:49:1` fatal. The current basis corollary explicitly assumes AC; arbitrary admissible grades need not be finite dimensional. Added AC to the Example, title, Given, manifest and contract, preserving the precise basis-existence and family-selection use in 3.1. Clarified that states are scalar multiples of the vacuum in 1.1. Scalar actions, zero module/empty sum, degree-zero lines and zero conformal vector all check. Risk complete; repair confidence 1. No material proof rewrite or judge record.

- Pages: confirmed `refuter:49:2` and `refuter:49:3` fatal missing hypotheses in their rationality summaries; both now explicitly assume AC. These are the only actual page consumers of the changed conclusion; repository searches found no item consumers or other page uses of the example ID. The A-page reference to the Jordan family and the B-page lambda=1 example use the already sound Statement and need no change. All source items and pages are draft; no defective published carrier was found in the reviewed prerequisites.


## Decisions and repair records

The decisions JSON contains exactly the five routed obligations: two touched carriers accepted and three refuter findings confirmed fatal and repaired. No reader findings, page-touch obligations, in-run producer findings, escalations, proposed withdrawals, or historical-byte blockers are owed by this scope.

Five closed ledger rows were appended through `tools/defect-ledger.mjs`, each at `3a-adjudicate`, with repair confidence 1:

- `math81-3a-b49-module-locator`: nonfatal inaccurate bibliographic locator; accepted reader repair.
- `math81-3a-b49-jordan-title`: fatal overstrong family title at zero parameter; accepted reader repair.
- `math81-3a-b49-rationality-choice`: fatal omitted hypothesis in the rationality example; repaired.
- `math81-3a-b49-a-page-choice`: fatal omitted hypothesis in the A-page summary; repaired.
- `math81-3a-b49-b-page-choice`: fatal omitted hypothesis in the companion summary; repaired.

Each finding decision refers to exactly its own closed row. The original refuter observations concern the unqualified text; they are not counterexamples to the corrected AC-qualified claims. The proof uses AC as a sufficient hypothesis; no equivalence between this fixed-field claim and full AC is asserted.

## Sources, consumers, and scope

Reviewed the current carriers and their cited formal-distribution, state-field, reconstruction, polynomial, conformal/Virasoro, module-regime, basis and AC dependencies at their actual uses. The published basis corollary's explicit hypothesis is carried to the example and both summaries. Actual consumers were searched under `items/` and `library/`: the rationality example has no item consumers; the B-page lists it and the A-page summarizes its conclusion. The Jordan theorem's sole item consumer is the explicit lambda=1 logarithmic example, whose two matrix/Jordan-chain steps were read and remain sound. Its Statement was unchanged. No further hop or outside repair is required.

Source checks:

- [Nozaradan](https://arxiv.org/pdf/0809.1380), §§1.2–1.3: binomial expansion and delta conventions; the local coefficient proof supplies the exact three-variable identity.
- [Arakawa–Moreau](https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf), Theorem 2.2 and complete proof, printed pp.50–51; §2.9 Definition 2.6 and Lemma 2.8, pp.58–59; Proposition 3.1, Proposition 3.2 and Example 3.1, pp.67–68; Example 3.4, p.71. The source Wick hypotheses hold because contractions are scalar and equal-sign oscillator modes commute. Local full proofs establish the exact oscillator conclusions rather than replacing them with citations. The full Wick and affine-module source passages were also read from the existing extracted PDF under the owner-logarithmic-voa-completion sources directory.
- [HLZ](https://arxiv.org/pdf/1012.4193), Definition 2.9, equations (2.35)–(2.37), printed p.53, and Definition 2.12, p.54: underlying module axioms and generalized eigenspaces. The local definitions explicitly state their additional grading restrictions.

The published category-O page, its definition and relevant theorem statements were checked only for the A-page navigation/comparison: their finite-dimensional semisimple Lie algebra and finiteness hypotheses are not transferred to VOA modules. No defective published carrier was identified in this assigned review, so no published-ledger edit or lock was required.

The owned batch cross-dependency records retain their exact consumer/supplier identities and prior evidence, with current independent review notes for the reviewed uses. The required dependency-ledger refresh succeeded. No other batch's mathematical content was edited.

## Local checks and handoff

- Initial risk report without `--require-reviewed`: six HIGH/CRITICAL carriers routed. Every required risk review was completed in dependency order in the batch contract. Final `--require-reviewed` report: 0 errors, seven result items routed (six require reviews); the explicit AC wording now raises the rationality example's structural tier to CRITICAL.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-trivial-vertex-algebra-is-rational.md`: unchanged.
- Explicit precheck on the repaired example and both reader-touched items: two proofs checked, zero failures; the definition has no applicable phase proof.
- Explicit rendercheck on those three items and both edited pages: five files passed, including renderer YAML and real KaTeX parsing.
- Final single batched `node tools/proof-layout.mjs items/ex-trivial-vertex-algebra-is-rational.md items/def-vertex-algebra-module.md items/thm-rank-one-heisenberg-jordan-fock-module.md`: three items, eight steps, zero defects. No subsequent item edit.
- Ledger append: five rows accepted and generated view refreshed. Dependency ledger refreshed and deduplicated.

No mathematical blocker or unresolved risk remains in the routed obligations. These are local checks and adjudication records, not judgment or certification. The engine retains decision-hash stamping and the gate battery; neither was initiated here.
