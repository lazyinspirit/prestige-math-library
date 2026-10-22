# Batch 16 Step 3a adjudication

Run: physics-non-fluid-129-2026-10-21-r2. Group: batch-16. Scope file retains original group j.

The routed scope has no touched items, changed pages, reader findings or refuter findings. Therefore the decisions array is empty; no acceptance/reversion or defect-ledger decision is owed. Pre/post item and page fingerprint records are identical.

## Level 1 checkpoint: lem-emg-fx-conformal-constraints

Reviewed the complete current Statement, Facts and proof (1.1–3.1), seed Definition, and the exact used content of def-emg-constrained-electrovacuum-data, def-emg-geometric-scaling and thm-gr-constraint-equations-in-normal-frame. The latter explicitly fixes R(X,Y)Z=∇X∇YZ−∇Y∇XZ−∇[X,Y]Z, the Ricci contraction and positive K convention. The published definitions supply the divergence, Hamiltonian and negative momentum source and positive constant alpha. Their status is published; only these actual uses, not unrelated transitive proofs, are reviewed here.

The determinant, field norm, lowered cross product, trace and trace-free norm exponents are respectively 12, −8, −6, tau and −12. Independently expanding the connection difference yields Ric(h)=Ric(hbar)−Hess(u)−hbar Delta(u)+du⊗du−hbar|du|² for u=2 log psi. Its trace gives the displayed scalar-curvature formula. Substitution produces the exact scalar equation; multiplication by positive psi^5 and the positive constant alpha is reversible. Vanishing seed fields, tensor, trace and Lambda, and psi=1 cause no singularity. Momentum remains an independent equation. No new choice principle or empirical premise occurs. No defect or repair identified; complete item-specific risk review recorded in the owning contract before moving to level 2.

Sources actually opened for this review: [Alcubierre, Degollado and Salgado](https://arxiv.org/pdf/0907.1151), III.A (3.1)–(3.12), PDF pages 9–10; [Gourgoulhon author preprint](https://arxiv.org/pdf/gr-qc/0703035), (6.33)–(6.52), PDF pages 89–91. Read the connection, divergence, Ricci and scalar-curvature derivations; source restrictions and normalization do not replace the local general calculation. The existing batch source-reading record was read as earlier evidence, not a new full-book reading attestation.

Initial risk-report command on the owning batch contract exited 0 and identified exactly the lemma and RN proposition as HIGH. Remaining work: level 2 current proof/dependency review, final risk-report with --require-reviewed, dependency-ledger entry and final artifact checks.

## Level 2 checkpoint: prop-emg-fx-rn-isotropic-seed

Reviewed the complete current Statement, Facts, proof (1.1–4.1), matching contract derivations/boundaries and all three direct suppliers. The published def-emg-xs-rn-data defines the smooth product, unit round metric, signed charge lengths and RN metric on f≠0. Its actual use here is only the spatial metric at magnetic charge zero on the f>0 exterior.

For r>0 and m>0 the radicand is positive exactly when 2r+m>|q|, including zero charge, extremal and overcharged cases. With C=m²−q² and w=psi², direct differentiation gives Delta psi=−q²/(4r⁴ psi³). Divergence and Hamiltonian are satisfied throughout that domain, and K=B=0 separately satisfies momentum. For C>0, R'=1−C/(4r²) has one zero r0=sqrt(C)/2; H=2R'/(psi²R) has exactly the same zero. This establishes both directions only for centered spheres. The area minimum is m+sqrt(C). Inversion tilde r=r0²/r reproduces the entire isotropic spatial metric; its rational coefficient verifies both Cartesian derivative estimates, without differentiating an arbitrary big-O remainder. On r>r0, R is increasing onto (m+sqrt(C),infinity), f>0 and f⁻¹(R')²=psi⁴. No excluded endpoint, point source, horizon or maximal-extension claim is inferred. No defect or repair identified; the item's complete risk review is recorded in the owning contract.

Source check: [Alcubierre et al.](https://arxiv.org/pdf/0907.1151), equations (3.15)–(3.16), PDF page 11, gives the isotropic single-hole factor and radial field. [Gourgoulhon](https://arxiv.org/pdf/gr-qc/0703035), equations (6.22)–(6.24), PDF page 87, supplies the conformal metric convention and uncharged isotropic example. All charged minimality and end deductions were checked in the local proof. These exact sections were read; no new whole-paper/whole-book reading is asserted.

## Remaining scope and consumer dispositions

Read both assigned frontmatter-only pages and the extremal example and wrong-weight counterexample as scoped context. The extremal example gives s'=1+m/r>0 with limits ±infinity, sphere radius tending to m at the inner infinite-distance end, and H=2r/(r+m)²>0. The counterexample's unscaled vector has divergence 6 on all of smooth Euclidean space. No TikZ/tikzcd diagram occurs in the assigned items or pages; none is needed for these explicit calculations. No item Statement/Definition or physical interface changed, so no new propagation is triggered. The existing exact cross-batch edge dispositions remain unchanged. No defective published supplier was identified in the checked uses, and no published-ledger edit is required. No withdrawal, open scientific blocker, escalation, repair or new defect-ledger row. The findings files are empty and all five current item raw hashes equal both pre/post recorded hashes; the two page snapshot records also coincide.

## Final local checks and handoff

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-16.proof-contracts.json` before review: exit 0, exactly two HIGH items.
- The same command with `--require-reviewed` after both reviews: exit 0, zero errors across five routed items.
- Scoped Node artifact check: exit 0; zero owed obligations equals zero decisions, correct `group: batch-16`, and both HIGH risk reviews identify this dispatch. All five item raw hashes and both page raw hashes match the post-reader snapshot, whose relevant records also match the pre-reader snapshot.
- Updated the frontier dependency ledger with this batch's unchanged interfaces and exact supplier-use disposition. Contract changes are confined to the two required `risk_review` records. Report and decisions files are written at the task-named paths.

No item was edited, so no proof-layout, reflow, precheck or render rerun is required for changed carriers. No judge cycle, certification, decision stamping or engine gate battery was run. Local checks are evidence of their stated mechanical properties only. All assigned work is complete; scheduling, decision hashes and the gate battery remain with the engine.
