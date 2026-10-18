# Step 3a reader report — batch 22

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: `reader-22`  
Run status checked from disk: running at `3a-read`; the assigned carriers were in the active reader frontier.

## Opened inventory

Assigned pages:

- `library/information-theory/quantum-relative-entropy-data-processing-and-strong-subadditivity.md` (A)
- `library/information-theory/quantum-relative-entropy-data-processing-and-strong-subadditivity-examples.md` (B)

Assigned items, read in supplier order:

- `lem-it-finite-weyl-twirl-partial-trace`
- `thm-it-finite-strong-subadditivity`
- `thm-it-finite-quantum-conditional-mutual-information-nonnegative`
- `ex-it-dephasing-quantum-relative-entropy-dpi`
- `ex-it-strong-subadditivity-for-pure-tripartite-state`
- `cex-it-fidelity-data-processing-does-not-prove-qre-dpi`

Additional page and contract context:

- `library/information-theory/quantum-information-measures.md`, required by the A page
- `items/thm-it-holevo-measurement-bound.md`, named in the A-page summary
- `research/non-ml-math-remaining-81-2026-10-18-batch-22.proof-contracts.json`

Supplier items opened to check cited facts, proof steps, conventions, and witnesses:

- `def-qc-partial-trace`, `def-qc-tensor-register-and-permutation`, `thm-kernel-and-fibres-of-complex-exponential`, `cor-complex-de-moivre-formula`, `thm-eulers-formula`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`
- `def-it-von-neumann-entropy`, `def-it-finite-dimensional-quantum-relative-entropy`, `lem-it-quantum-entropy-support-and-finiteness`, `thm-it-quantum-entropy-identities`, `thm-it-quantum-relative-entropy-partial-trace-data-processing`, `def-qc-density-operator`, `lem-it-partial-traces-of-a-state-are-states`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-non-negative-operator-characterisations`, `thm-qc-partial-trace-characterization-and-basis-independence`, `def-qc-first-factor-partial-trace`, `def-it-finite-quantum-information-measures`, `thm-qc-wire-permutation-is-unitary`, `thm-it-quantum-relative-entropy-joint-convexity`, `lem-it-quantum-relative-entropy-isometric-invariance`, `thm-qc-partial-trace-positive-and-trace-preserving`, `lem-it-operator-jensen-negative-log`, `lem-it-relative-modular-representation`, `lem-it-quantum-relative-entropy-support-regularization`, `lem-it-inverse-compression-resolvent`, `thm-non-negative-square-root-exists-and-is-unique`, `lem-natural-logarithm-bounded-by-argument`
- `def-it-classical-quantum-state-and-holevo-information`, `def-qc-fidelity`, `def-qc-trace-distance`, `def-qc-trace-norm`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-sine-and-cosine-derivatives`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-differentiable-implies-continuous`, `def-pi-via-first-positive-cosine-zero`
- `thm-it-quantum-relative-entropy-channel-data-processing`, `def-qc-quantum-channel`, `def-qc-completely-positive-map`, `def-qc-register-and-computational-basis`, `thm-trace-of-ab-equals-trace-of-ba`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-qc-schmidt-decomposition`

The cited authoritative source was Watrous, *The Theory of Quantum Information*, Chapter 5 PDF at <https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf>. The opened section states channel monotonicity as Theorem 5.35 (printed pp. 280–281) and strong subadditivity as Theorem 5.36 (printed pp. 281–282), with the latter derived by applying relative-entropy data processing to a partial trace (PDF text around lines 1988–2099). This confirms the central reduction used by the local strong-subadditivity proof.

## Review and edits

No item or page prose was edited. The six assigned items' definitions, claims, supports, computations, witnesses, and proof steps are mathematically sound. The tensor order in the marginal calculations is preserved; the support-sensitive relative-entropy branches are handled before finite entropy expressions are equated; and the CMI proof applies strong subadditivity to the correctly swapped tripartite state.

The A-page summary describes the finite-dimensional chain including prerequisite results from `quantum-information-measures`; that required page contains the entropy setup, resolvent/Jensen route, joint convexity, and partial-trace/channel data-processing items. The summary also correctly locates the Holevo measurement bound on that prerequisite page. The B-page summary matches its three assigned examples: strict finite dephasing decrease, the GHZ strict SSA instance, and the nonlinear diagonal-state map with its separate support check.

The batch contract's recorded unresolved-supplier notes were treated as leads, not verdicts. The actual current bodies for the cited batch-21 entropy-identity and relative-entropy suppliers were inspected; no mathematical defect affecting this batch's uses was found. Pending verification metadata is a workflow/readiness observation, not a mathematical proof gap established by this reader.

No reflow, precheck, or proof-layout command was run because no item changed. No blocker was encountered.

## Finding not editable in this assignment

- `thm-kernel-and-fibres-of-complex-exponential`, Proof 2.1: the proof invokes the complex exponential addition law to pass from `exp z = exp w` to a kernel statement and back, but the step is tagged only `[given]` and the `Facts & Assumptions` section supplies only `z,w`. The exact local result is `thm-complex-exponential-addition-and-real-extension`; it is reachable through the corollary dependency closure, but the proof step does not cite or identify it. Add the explicit citation and derive both directions using that theorem (including the inverse identity). This is a nonfatal, one-step citation gap. The assigned consumer `lem-it-finite-weyl-twirl-partial-trace` uses only the kernel subclaim, which is separately proved in steps 1.1–1.2, so this gap does not undermine its twirling identity.

## Page verdicts

- A page `quantum-relative-entropy-data-processing-and-strong-subadditivity`: pass. Its assigned entropy inequalities and required prerequisite chain support the summary; no page edit was needed.
- B page `quantum-relative-entropy-data-processing-and-strong-subadditivity-examples`: pass. Each listed example/counterexample is present and its calculations match the summary; no page edit was needed.

