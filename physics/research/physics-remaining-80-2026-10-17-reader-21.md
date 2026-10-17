# Reader report — batch 21

Run: `physics-remaining-80-2026-10-17`  
Role: read-only reader  
Batch: `21`

## Inventory reviewed

Assigned pages opened:

- `emg-ms01` — `library/einstein-maxwell-models-mathematics/emg-ms01.md`, draft A page.
- `emg-ms01-examples` — `library/einstein-maxwell-models-mathematics/emg-ms01-examples.md`, draft B page.

All 18 listed items were opened. The substantive review followed the in-batch prerequisite order after the mathematical supplier statements were checked:

1. `alg-emg-rational-electrovac-verification`
2. `def-emg-xs-geometric-electrovac`, `def-emg-xs-rn-data`
3. `lem-emg-rational-electrovac-verification-correctness`, `lem-emg-rational-electrovac-verification-termination-resources`
4. `def-emg-xs-kn-data`, `lem-emg-xs-duality`, `ex-emg-xs-rn-charge-sign`
5. `lem-emg-xs-rn-tensor-identities`
6. `def-emg-xs-kn-full-sphere-exterior`
7. `lem-emg-xs-kn-rational-calculus`
8. `thm-emg-xs-rn-verification`, `prop-emg-xs-rn-curvature`, `cex-emg-xs-scalar-trace`
9. `thm-emg-xs-kn-verification`
10. `prop-emg-xs-kn-invariants`, `prop-emg-xs-kn-dyonic-flux`, `ex-emg-xs-zero-rotation`

Relevant supplier statements opened included the six polynomial/fraction/differentiation suppliers of the verifier; the sphere topology and round-metric suppliers; the Lorentzian Hodge, smooth-form, exterior-derivative, curvature, warped-sphere, density-divergence, point-normal-chart, finite-chain Stokes, and causal-extension suppliers; the current Maxwell observer-stress and positive-square-root items; the Schwarzschild exterior definition; and the real-analysis integrability and fundamental-theorem suppliers. The 11 page prerequisites declared by the current A-page manifest were also checked at their page header and summary level. I did not audit unrelated inventories on those prerequisite pages.

The current `batch-21.dependency-inputs.json` differs from the current manifest and carriers: it lists five page requirements where both the batch manifest and `emg-ms01.md` list eleven, and its notes call seven `emg-mg02` foundation items absent although those item files are present now. I followed the current manifest and source files; presence was not treated as proof acceptance.

## Confirmed defects not editable in this read-only assignment

1. **`lem-emg-xs-kn-rational-calculus`, Proof 2.2–3.1.** Step 2.2 asserts the full Kerr–Newman Ricci table from substitution but gives no intermediate Christoffel table or checkable execution result. Step 3.1 asserts the full 16-entry identity 2Q(F)=Ricci and zero Einstein residuals after “direct contraction,” without displaying the contraction matrix or exact zero-numerator data. The correctness lemma proves what a run of the rational algorithm would mean; it does not establish that this input produces the claimed outputs. The finite-check receipt reports a separate SymPy cross-check, explicitly not execution of the defined algorithm; its referenced `/tmp/physics-ms01-kn-check.json` output was absent when checked. Close this with the omitted exact component contractions or a complete checkable rational-output certificate and a justified link from that certificate to the algorithm. This blocks the central Kerr–Newman verification.

2. **`ex-emg-xs-zero-rotation`, Verification 1.1.** The stated Kerr–Newman domain allows r<0 when a=0, Sigma=r^2>0, and Delta is nonzero; for example M=0, q=1, r=-1 is allowed. The cited RN datum is defined only for r in J subset (0,infinity). Thus the conclusion that the restricted datum is “exactly” that RN datum is false on part of the stated domain. Restrict this substitution to r>0, or identify only the matching coordinate formula.

3. **`def-emg-xs-rn-data`, Definition, lines 37–40.** The item names a “standard smooth sphere structure” and “smooth product” but its listed dependencies give the sphere’s subspace topology and an example that assumes the “usual” smooth sphere structure; they do not provide an atlas for S^2 or declare the product smooth structure. Smoothness of the area form, metric and two-form therefore lacks an exact supplied manifold structure. Define the sphere atlas and product atlas locally, or add an exact smooth-sphere and product-structure supplier and state its relevant content.

4. **`def-emg-xs-kn-full-sphere-exterior`, Definition, line 37 and Well-definedness.** The global exterior is likewise placed on R x (R0,infinity) x S^2 and then asserts that the sphere coordinate functions, induced metric, lambda and tensors are smooth. Its dependencies supply the sphere topology and round-metric example, but no exact smooth atlas/product structure. Give that structure locally or declare an exact supplier before using the smoothness claims.

## Page verdicts

- **`emg-ms01`: hold.** The page summary accurately limits the results to mathematical model identities and the stated exterior. The batch contains the KN component-proof gap and the missing smooth-manifold specification in the RN and full-sphere definitions.
- **`emg-ms01-examples`: hold.** Its page summary is accurate, but `ex-emg-xs-zero-rotation` overstates the RN datum’s domain. The charge-sign example and scalar-trace counterexample were consistent with their opened dependencies.

No source-fidelity defect was confirmed. Carroll’s cited RN equations (7.106)–(7.113) and rotating equations (7.114)–(7.118) give the corresponding source-free RN and Kerr/charged rotating forms. Adamo–Newman’s Kerr–Newman derivation gives its null-coordinate metric and Maxwell field (equations (2.15)–(2.29)) and describes the direct spin-coefficient verification in §2.2 (equations (2.30)–(2.35)). Their signature and unit conventions differ from the local items; I verified that the local items state their own conventions rather than silently importing those signs or normalizations. These checks covered the cited passages, not entire PDFs.

## Edits, checks and blocker

No assigned item or page prose was edited; this dispatch is read-only. No formatter or validator was run because no carrier was changed. All four confirmed defects are recorded in the accompanying findings JSON. There was no process blocker; repair is left to the authorized repair route.

Coverage limitation: I opened the rational verifier before its six external algebra suppliers while inventorying the batch, then checked those suppliers before evaluating its correctness and downstream uses. The cited source passages and the exact mathematical supplier statements needed for the reviewed claims were inspected, but I did not audit every transitive proof inside the entire published mathematics library.
