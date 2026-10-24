# Batch 17 focused contract repair

Run: advanced-qft-supersymmetry-build-2026-10-23. Reviewer: /root/rg_contract_repair.
One review/repair round. This is focused owner repair evidence, not a native review, readiness decision, recertification, or gate authorization.

The actual strict checker reported 15 errors: eleven boundary entries lacked a Statement/Definition/Example or proof-step anchor, and four F2–F5 quotations were not excerpts of the current imported supplier sections. All three manifest statement mirrors were empty. The scheme Remarks and contract risk note also incorrectly said that the batch-16 page inventory was absent.

Preserved exact contract, manifest, three source carriers, and three Step-1 receipt preimages under `rg-contract-repair-preimages/`, with raw SHA-256 index. Existing readiness receipts were not rewritten. Current source bindings and mechanical invariants are in `rg-contract-repair-invariants.json`.

## Supplier and hypothesis matching

Read all three complete batch-17 item arguments, then the actual Definitions of the finite-jet operator and finite-order quotient suppliers. The quotient supplies a finite complex fixed-weight space and basis representatives and explicitly limits equivalence to declared relations. The scheme consumes precisely that interface, retains the physical-completeness limitation, and assumes positive dimension and a supplied ordered basis. No arbitrary family of bases is selected and no AC hypothesis is needed.

Read the exact current imported ODE supplier Definitions/Statements and their actual proofs where supplied before checking the consumer. Each of the four unchanged imported files matches its math-imports.json pin (recorded in invariants). No mathematical original or import was edited.

- F2: the IVP definition supplies differentiability in the domain-relative sense, including one-sided endpoint derivatives. The consumer's closed nondegenerate time interval, graphs in the open domain, and initial values satisfy those conditions.
- F3: the precise definition supplies one finite Lipschitz constant on every compact time-state cylinder. Step 1.1 chooses exactly such a cylinder inside the open RG domain. Since I is open in the real line, Omega open in I times R^(2N) is also an open ambient time-state domain.
- F4: the quantitative Picard statement requires a contained compact cylinder, field bound M, state-Lipschitz constant L, hM <= r, and Lh < 1. Step 1.1 supplies all inequalities. Every y in the open radius-r ball has its closed radius-r ball contained in the radius-2r ball about x0, so step 2.1 meets the same hypotheses uniformly. Common-interval uniqueness is supplied explicitly.
- F5: the Volterra proposition requires n >= 1, open domain, continuous field and curve, an order-convex interval with at least two elements, initial time in the interval, and graphs in the domain. Here n=2N >= 2 and h>0, so the solutions on [t0-h,t0+h] satisfy all conditions. The oriented integral clause supplies both sides of t0 in step 3.1.

The original contract strings omitted actual bold emphasis, display delimiters, line structure, or the domain-relative and interval qualifications. Replaced them with the exact complete current supplier Definition/Statement excerpts rather than changing hypotheses or suppliers. The consumer Facts already correctly paraphrase the relevant claims.

Checked the rest of the argument: step 3.1 bounds the distance by 4r; the oriented-time reparameterization gives a standard Volterra inequality; repeated substitution yields the factorial remainder and the exponential estimate. The example verifies both initial coefficients and the ODE for all real t, proves the sqrt(6) Lipschitz bound by the triangle and elementary square inequalities, and uses common-interval uniqueness to identify its explicit global solution. No interface or proof repair was necessary, and no downstream interface propagation is triggered.

## Changes and validation

Added concrete heading/step anchors to the checked boundary entries, retained each boundary disposition, filled all three manifest mirrors from exact canonical public sections, corrected only the stale scheme Remarks placement sentence and contract risk note, and replaced F2–F5 quotations. All public sections remain unchanged; the theorem and example are byte-identical to their preimages. Direct dependency declarations and cross-batch review rows remain unchanged.

Actual successful scoped check records (each contains command, exit code, stdout and stderr):

- `rg-contract-repair-contract.json`: strict contract checker, three items, zero errors/warnings.
- `rg-contract-repair-precheck.json`: three files, two proof-bearing items, zero failures; definition not applicable.
- `rg-contract-repair-layout.json`: three items, eight proof steps, zero defects, after the final item edit.
- `rg-contract-repair-render.json`: three items and two pages, zero rendering defects.
- `rg-contract-repair-dependencies.json`: focused three-item/two-page check with actual prerequisite closure, zero errors/warnings.
- `rg-contract-repair-policy.json`: authored manifest policy, three items, zero errors/warnings.

The initial attempted direct `.mts` precheck invocation had no TypeScript loader and exited before checking content; the recorded successful command uses tools/tsx-run.mjs. No global gate or native state was changed. Root owns fresh recertification and any readiness disposition. Historical batch-17 author notes and receipts remain historical; their old missing-readiness observation is not current authority.

## Readiness handoff to Root

Called the native `loadStep1Record` / `step1Decision` API on exactly the three reached in-run batch-16 suppliers, without a whole-run readiness check or writes. All three return `closed: true` with current `decision: ready`: the local-operator definition, finite-dimensionality lemma, and quotient definition. The lemma's complete bounded-monomial proof was also inspected; it supplies finite dimensionality without a positivity restriction on weights or any arbitrary choice. The scheme adds its own supplied positive-dimensional quotient/basis input, so it does not infer nonzero dimension from the lemma.

`rg-contract-repair-readiness-context.json` contains the actual three native responses and dependency-ordered proposed Root record inputs, including exact arrays of examined direct dependencies and exact archived prior-receipt paths. These arrays equal the current manifest and carrier declarations. All batch-17 source writes by this reviewer are complete; Root retains ownership of recording and recertification.
