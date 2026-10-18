# Batch 29 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: `topological-braid-gates-encodings-and-universality`  
Role: beta · batch 29 · dependency level 1

## Controlling plan and design conflicts

- The current `research/plan-spec.json` entry and batch-29 assignment require exactly three pages: `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`, `pauli-and-clifford-groups-binary-symplectic-tableaux`, and `approximate-universality-and-solovay-kitaev`. The stale `research/quantum-computing-planning/pages.json` QC26 entry adds six more page prerequisites: `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `controlled-gates-phase-and-entanglement`, `lie-subgroups-actions-and-homogeneous-spaces`, `ordered-and-unordered-configuration-spaces`, `yang-baxter-operators-and-quantum-braid-representations`, and `continuous-gate-universality-and-exact-synthesis`. The current plan controls.
- `research/plan-quantum-computing-track.md` line 101 requires exact joint `SU(5)×SU(8)` B6 density and arbitrary-size triple-code universality. In the detailed `research/quantum-computing-planning/sections/tqc-expansion.md`, the proof route around lines 249–477 contains the local density, finite-rank, joint-closure, and spectator arguments. Its summary at lines 547–553 still calls the six-anyon density proof unresolved. This is a stale summary conflict; the detailed route controls the authored scope.
- The current plan does not identify the pair-charge code with the triple code. The B6 example constructs both in total charge 1 and treats them as independent four-dimensional subspaces of a five-dimensional block. It makes no projector-equality claim.

## Supplier audit and unresolved mathematics

- Batch 28 has a populated A/B manifest and actual QC25 supplier bodies. The fusion-category, fusion-tree, F/R, pentagon/hexagon-coordinate, and gauge-covariance bodies were inspected. The numerical `ex-qc-tqc-fibonacci-data` body is present, but its proof has a concrete mismatch in Verification step 3.2. It prints the fourth total-τ hexagon entry as
  `u y (u x + u^2 y) = -u y`. With `x=y^2` and `y^2+uy+1=0`, its next identity gives `u x+u^2 y = u(y^2+uy)=-u`; the matrix entry required by `B₂D=EF` is `y(u x+u^2 y)=-u y`. The printed left side has one extra factor `u` and is not established by the following calculation. No category-coherence acceptance is claimed. The local three-anyon and B6 matrix representations separately verify their displayed generators and Artin relations, so those matrix-group results remain mathematically conditional on the stated numerical data. The associator-dependent six-code and its higher consumers are escalated pending owner repair/review of the supplier proof.
- The actual `ex-qc-tqc-ising-data` body states only the three-σ, total-σ sector (`F=H`, `Rψ/R1=i`) and expressly makes no all-label coherence claim. A new A-page definition, `def-qc-tqc-ising-majorana-interface`, makes the all-m Majorana channel identification an explicit model hypothesis. The Clifford theorem is conditional on that interface; no all-label Ising F/R table or unproved identification is used as a premise.
- The physical braid interface is conditional on a finite-dimensional C² Hamiltonian path, constant-rank isolated band, uniform positive full gap, preparation, schedule, and specified endpoint action. The Jansen–Ruskai–Seiler bound does not establish a material realization, prescribed holonomy, or free preparation. No physical topological phase is asserted.
- The exact-logical-block/nonzero-leakage obligation was corrected using `lem-qc-tqc-zero-logical-error-forces-zero-leakage`: for an ambient unitary and isometric encoding, zero block error forces zero leakage. The separate boundary remains that zero leakage can coexist with nonzero logical error.
- A single braid phase is common across charge blocks and spectator paths. Projective phase can be removed for an uncontrolled fixed-sector computation but becomes relative under coherent control; the controlled-global-phase counterexample and determinant-character lemma preserve that distinction.

## Sources and retrieval evidence

Five full-text sources were inspected; all source records are included, with no retrieval failures or source drops.

- Nayak et al., *Non-Abelian Anyons and Topological Quantum Computation*, full PDF inspected at §II.A (PDF pp. 3–6), §II.B (pp. 7–11), §IV.A (pp. 31–32), §IV.B.c (pp. 53–57), and the opening/physical limitations in §IV.C (pp. 58–63). Supports fixed Ising/Fibonacci conventions, braid representations, density, Majorana interpretation, and physical caveats.
- Freedman–Larsen–Wang, *A Modular Functor Which Is Universal for Quantum Computation*, complete §4 Theorem 4.1 proof (printed pp. 17–21); cross-check only, not the local density proof.
- Preskill, *Lecture Notes for Physics 219*, §9.5 (PDF pp. 13–16) and §§9.14–9.17 (pp. 53–62). The opposite Fibonacci chirality and four-anyon/SU(13) discussion were not imported into the fixed convention here. The whole chapter was not claimed as read.
- de Wolf, *Quantum Computing: Lecture Notes*, Chapter 2 §2.2 (PDF pp. 26–29), used for standard universality context.
- Jansen–Ruskai–Seiler, *Bounds for the adiabatic approximation with applications to quantum computation*, Theorem 3 and Lemmas 1–8 (PDF pp. 5–12), used for the conditional physical interface.

`source-fetch-check --stamp` reported **5/5 fetch-verified, 5/5 resolved, 0 newly stamped**. The source-coverage records preserve prior fetch hashes/stamps and record each source's supported items and disposition. No `source_resolution` recovery record was needed.

## Axioms and finite checks

- The density and closed-subgroup arguments declare exactly `ACω`; choice-free finite matrix, projector, rank, and Clifford calculations remain separate. No full Axiom of Choice is claimed. The physical interface and JRS estimate use no choice principle.
- B6 SU5 certificate: `python3 research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-lie-rank-certificate.py` returned `F_31 determinant of the selected 24x24 minor: 17` using integer arithmetic.
- B6 SU8 certificate: `python3 research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-su8-lie-rank-certificate.py` returned `selected words Y0..Y62; F_31 determinant of the selected 63x63 minor: 22` using integer arithmetic.
- The proof contracts preserve these commands and outputs. They are finite certificates for Lie-word independence, not independent proof acceptance.

## Inventory and checks

- Final inventory: 29 A-page items and 2 B examples. The A page is under the 100-item cap. The current manifest retains the exact three page prerequisites and records the new local Ising/Majorana interface definition.
- Dependency levels were recomputed from the populated batch-28 and batch-29 manifests. The scoped 53-item graph has no cycles or level errors; maximum item level is 11. Batch-29 labels match the current global item graph where populated.
- The final full-run `item-dependency-levels.mjs check` reports 108 errors elsewhere in the 81-batch run: 56 empty inventories and 52 stale labels. None is in batches 28–29; the scoped 53-item graph passes. The full-run `batch-dependency-levels.mjs check` reports stale recorded input. The dispatch hash is `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`; the shared batch-level record currently carries `a5d69dafee055b4cd79786f729eb4bd8f91cb34c37a754d3bbac3db1824476fb`. Shared scheduling evidence was left to the owner.
- `manifest-integrity.mjs --run non-ml-math-remaining-81-2026-10-18 --json` reports 162/162 pages present with no missing or added pages. The final `step1-decisions.mjs check` reports 918 run items and 482 ready; all 31 batch-29 records hash-check, with only the five listed category-dependent consumers open as escalations. Other run items remain open outside this assignment.
- `proof-contract.mjs --strict` currently validates 31/31 scoped items with zero errors and warnings. Contracts include exact supplier excerpts, numbered derivations, boundary dispositions, both finite certificates, and unresolved supplier records for associator-dependent consumers.
- `audit-manifest.mjs` on the populated batch-28 and batch-29 manifests found 100 published-backward, 114 same-batch, and 34 cross-batch dependency edges, with no missing-source or unresolved edge. The Fib hexagon issue is a semantic proof defect, so it is recorded separately in the dependency evidence.
- `node tools/proof-layout.mjs` on the 31 assigned item files passes: 101 numbered steps, 0 defects. The first pass found seven formatting defects in the Ising Majorana and joint SU5×SU8 proofs; the blank paragraph breaks inside those numbered steps were removed, and the final pass is clean.

## Readiness disposition

Local numerical representations and conditional Majorana results are drafted with complete stated hypotheses. Associator-dependent six-code claims and their consumers remain escalated because the QC25 Fibonacci coherence proof needs owner repair/review. These records document authoring readiness only; they do not imply independent approval, proof acceptance, or publication.


## Owner focused Fibonacci coherence completion

The original construction observations above remain historical. After immutable attempts 28 and 29 completed unaborted, the owner-assigned trace supplier agent inspected the actual current Fibonacci carrier. Its fourth entry already had the corrected factor; no earlier typo repair is attributed to this agent. The focused completion makes all five pentagon tree bases, all route matrices, both total-charge hexagon sectors, the inverse-precomposition convention, positive roots and direct-sum extension explicit. An independent integer-arithmetic quotient-ring script checks all 16 four-input label lists, 32 total sectors and 50 pentagon entries, plus all nontrivial hexagon entries exactly. The existing Fibonacci example is on A and retains its full model interface. No new duplicate model or B-page logical supplier was created.

The five original associator/code holds are discharged at the current authoring-input level after focused consumer checks; their original records are archived under `research/non-ml-math-remaining-81-2026-10-18-owner-fibonacci-coherence-completion`. This is genuine delegated focused repair, not independent native mathematical acceptance or readiness certification. The six-anyon grouped-to-left associator, pair/triple comparison, common phase, joint-block density use, spectator extension and arbitrary-register claims retain their rich original statements and hypotheses. Live batch-31 outputs were read only. Current exact source/evidence hashes and consumer dispositions are in `research/non-ml-math-remaining-81-2026-10-18-owner-fibonacci-coherence-completion/repair.json`; root owns readiness/hash recertification and native acceptance.
