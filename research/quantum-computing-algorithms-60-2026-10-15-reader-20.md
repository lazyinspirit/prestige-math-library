# Step 3a reader report — batch 20

Run: `quantum-computing-algorithms-60-2026-10-15`  
Date: 2026-10-16  
Verdict: no confirmed defects found; no item or page edits.

## Opened inventory

Assigned pages:

- A: `library/quantum-computing/stabilizer-css-codes-syndromes-and-procedures.md`
- B: `library/quantum-computing/stabilizer-css-codes-syndromes-and-procedures-examples.md`

All 17 assigned items were opened in dependency order:

- `def-qc-css-code-from-nested-binary-codes`
- `lem-qc-binary-dual-dimension`
- `def-qc-stabilizer-code-space`
- `alg-qc-stabilizer-encoder-by-symplectic-elimination`
- `def-qc-square-planar-surface-code`
- `def-qc-stabilizer-syndrome-and-logical-operators`
- `thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count`
- `thm-qc-stabilizer-projector-and-dimension`
- `thm-qc-css-encoding-dimension-and-commutation`
- `thm-qc-stabilizer-encoder-correctness`
- `thm-qc-stabilizer-logical-pauli-quotient-dimension`
- `def-qc-stabilizer-distance`
- `thm-qc-css-syndrome-correction`
- `thm-qc-square-planar-surface-code-distance-and-path-count`
- `thm-qc-stabilizer-distance-detection-and-correction`
- `ex-qc-steane-seven-qubit-css-code`
- `ex-qc-css-nested-code-parameters`

I also opened all 40 external direct dependencies named by the batch manifest. They were current draft suppliers in batches 2, 4, 7, 8, 9, 15, 16, 18, and 19, plus the published linear-algebra suppliers `def-dimension`, `thm-rank-nullity`, `thm-dimension-of-a-linear-subspace`, `thm-dual-family-is-a-basis-in-finite-dimension`, and `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`. For the assigned claims, I checked the relevant statements and proof arguments of the Pauli algebra/action suppliers, ordered-wire and CNOT suppliers, binary-dual and classical-distance suppliers, projector suppliers, measurement suppliers, and Knill–Laflamme recovery supplier. I additionally opened the maximal-isotropic and idempotent-trace lemmas used by the projector-rank supplier, and the classical syndrome and parity-check lemmas used by the classical-distance supplier.

The manifest, current proof-contract records consulted, batch notes, and source-evidence records were treated as navigation and evidence only; the verdicts below are from the current item and page bodies.

## Mathematical review

- The nested CSS definition proves representative independence, quotient size, normalization, and orthogonality. The encoded space and logical dimension use only `C2 ⊆ C1`; the absent extra inclusion `C2^perp ⊆ C1` is correctly not assumed.
- The binary dual-dimension proof identifies the coordinate pairing with the algebraic dual, proves restriction onto by finite basis extension, and applies rank-nullity. The stabilizer subgroup, phase-aware Pauli, syndrome, projector, and logical-quotient arguments preserve scalar phases and the `-I` exclusion where needed.
- The encoder's tableau rules agree with the stated convention `P(k,x,z)=i^k X^x Z^z`: H and S/S† phase changes, X sign correction, CNOT control-target direction, row-product phase, and wire/factor index conversion are consistent. The termination, gate-count, and correctness proofs establish the pivot invariant, the canonical `+Z_j` checks, and the encoded orthonormal basis.
- The CSS syndrome proof derives both ancilla parities, handles zero-code cases in the decoder, and proves the Knill–Laflamme condition for all Kraus operators in the stated Pauli span. The CSS logical distance is the minimum of the two pure logical distances, with the `k=0` convention handled explicitly.
- The surface-patch proof independently computes the two check ranks and one encoded qubit, identifies Z logicals with `ker ∂1 / im ∂2`, and derives the rough-to-rough and dual top-to-bottom path lower bounds from the specified relative grid. The stated path-count bound follows from `d+1` starting vertices and at most three non-backtracking continuations per edge.
- The Steane and four-qubit examples' displayed ranks, duals, coset states, logical operators, and syndromes are consistent with their matrices.

For the unfamiliar relative-boundary surface-code argument, I checked the exact chain-complex and planar-path discussions in John Preskill, *Quantum Information*, Chapter 7, §§7.18.2 and 7.18.4 (especially equations (7.233)–(7.238)), [official PDF](https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf), and Dennis, Kitaev, Landahl, and Preskill, “Topological quantum memory,” §III.B, printed pp. 4460–4461, [author-hosted PDF](https://www.preskill.caltech.edu/pubs/preskill-2002-memory.pdf). Those sources support the chain-complex/relative-path framework; the exact `d` and `d+1` bounds here follow from the local coordinates and proof, not from a rotated source diagram. I also checked Preskill §7.7, equations (7.89)–(7.98), for the general nested-code CSS convention and separate syndrome extraction.

## Edits and unresolved defects

No assigned item or page was edited. No confirmed defect remained unresolved, and no finding is routed outside this batch.

Because there were no item edits or formatting changes, I did not run reflow, precheck, or `proof-layout`.

## Page verdicts

- `stabilizer-css-codes-syndromes-and-procedures` (A): **Pass.** The summary accurately describes the code-space, projector, syndrome, encoder, and relative surface-code results.
- `stabilizer-css-codes-syndromes-and-procedures-examples` (B): **Pass.** The summary accurately describes both worked examples, including the four-qubit pair that violates the extra dual-containment condition.

## Blocker

The live `.autopilot/quantum-computing-algorithms-60-2026-10-15` status remains at `3a-read` and reports a pre-existing `spec` blocker from `1-scaffold`: invalid unit prerequisite-graph identity `def-qc-effective-unitary-matrix-input` in batch 12. It is outside this assignment and did not prevent the batch-20 review. No run control or other batch artifact was changed.

## Coverage limitation

I checked the direct dependencies needed by the assigned claims and selected transitive suppliers named above; I did not independently re-audit every unrelated transitive prerequisite of those suppliers.
