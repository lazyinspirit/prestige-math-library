# Coupled PDE / constraints stable handoff

2026-10-04. Completed worker research; no production content or gates touched.

`proofs.md` CP00–CP09 contains exact spaces, tensor/gauge/data conventions and full arguments or inspected exact existing proof suppliers for:

- Maxwell field-strength symmetric-hyperbolic reduction, with only metric first-derivative lower-order coupling; positive time matrices and propagation of both Gauss constraints by d² and normal transport.
- Electrovacuum Gauss/Codazzi constraints and actual stress; harmonic data against a fixed smooth background, correcting the finite-regularity source-background mismatch locally.
- Local source-free high-Sobolev torus evolution at integer s≥5, with metric L∞Hs+1∩CHs and first derivatives/F L∞Hs∩CHs−1; smooth persistence, chosen-gauge uniqueness/stability and admissible-state continuation.
- Smooth local geometric uniqueness on general initial manifolds; source-free smooth maximal globally hyperbolic universal development carrying the two-form, using a currently read complete external gluing proof and explicitly closed quotient second countability. No completeness/censorship conclusion.
- A strict interior charged barotropic fluid branch: invertible sound-speed variable, positive principal matrix, derived N(ε), advected charge per particle, current continuity and all sourced Maxwell/Einstein subsidiaries.
- A classical charged complex scalar branch: exact trivial real-potential sector, arbitrary classical λ independent of ℏ, temporal potential transport and independent π=Dφ variables. Definition/potential/current/Maxwell/Einstein subsidiaries close sequentially. GA9 exact variation supplier is inspected and consumed; smooth geometric uniqueness includes the necessary gauge transformation.

`inventory.json` has 46 proposed items in seven homogeneous-domain paired pages, all under100 and B leaves: mathematics EMG-CP01 9/3, CP02 9/2, CP03 5/2, CP04 4/2; physics EMG-PCP01 3/1, PCP02 2/1, PCP03 2/1. Exact sibling mathematical supplier `lem-emg-charged-scalar-variation` is in `workers/geometry-actions/proof-modules.md#GA9`. External physical action/units IDs are coordinator-confirmed reservations, not published items.

`sources-and-suppliers.json` records actual statements/statuses/reading extents and source dispositions. Read current GR E0–E3 and H0–H4 in full; G0–G4; selected exact EM wave/Cauchy/sign/stress arguments; actual geometry GA9 in full. Retrieved Friedrich–Rendall 97-page full PDF, read pp10,21–34,83–85; retrieved Sbierski 25-page full PDF, read pp9–24 including complete main theorem proofs. Raw PDFs/text are locally retained and ignored. No whole-source or transitive independent-audit claim. The FR printed mollifier/composition/weak-convergence defects are recorded and its unexpanded EM outline is not treated as a complete coupled proof.

`build-records.py` regenerates inventories/source hashes and checks unique IDs, declared external/local dependencies, DAG, mathematical boundary, homogeneous page domains, B leaves, page ceilings and all proof anchors. Run from repository root:

`python3 physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/coupled-pde/build-records.py`

`structural-checks.json` records actual local results. `closure-ledger.json` records repaired findings and affected consumers. There are no missing prerequisites within the exact asserted branches. Stronger rough geometric uniqueness, arbitrary matter/EOS, nontrivial arbitrary-λ scalar bundles, singular sources, free-boundary/shocks and unrestricted global stability remain unasserted with explicit reasons.

Coordinator/root have read earlier CP00–CP07; this is local reading, not independent acceptance. Final CP08/CP09 are separately sent for integration review. All authored files remain inside this worker directory; earlier dossiers, originals/imports, engines, publication and receipts remain read-only.

Final physical-interface repair: `pthm-emg-local-charged-fluid-model` consumes `post-emg-einstein-maxwell-equations`, the equation-based postulate in canonical `prose-scaffold.md#equation-model-postulate`, plus the explicit fluid model. No fluid matter action is asserted. Electrovacuum and the constructed scalar-action branch retain the action postulate. This changes no mathematical statement or argument.
