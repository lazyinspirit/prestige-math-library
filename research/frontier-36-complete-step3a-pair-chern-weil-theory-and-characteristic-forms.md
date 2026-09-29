# Step 3a scope review — Chern–Weil theory and characteristic forms

- Run: `frontier-36-complete`
- Pair: A `chern-weil-theory-and-characteristic-forms`; B `chern-weil-theory-and-characteristic-forms-examples`
- Batch: 19
- Scope decision for A: **sufficient**

## Evidence

The detailed DG-38 design in `research/plan-differential-geometry-track.md` §10.8 and `research/plan-differential-topology-track.md` specifies eleven A-page items and four B examples. The current batch manifest contains every listed A item and all four B items. The A manifest expands the list with six local support items for compatible connections, smooth-base splitting, and the first-Chern normalization used in the comparison proof. This is suitable enrichment within the designed subject.

The intended subject is the vector-bundle Chern–Weil construction for Chern, Pontryagin, and Euler characteristic forms: invariant polynomials and curvature evaluation; closedness; the chosen-connection map; explicit transgression and connection independence; naturality and direct-sum formulas; comparison with the topological classes over `R`; and the integral-torsion limitation. The B page covers the planned line normalization on `CP^1`, flat-connection vanishing, a real-connection Pontryagin calculation, and an example where connection changes the representative but not its class. The source-coverage manifest maps each planned claim to sources and expressly places full invariant-ring generation and the Chern character outside this selected scope. Those omissions do not leave a gap in the stated Chern/Pontryagin/Euler subject.

This pair supplies the Chern–Weil comparison used by DT-31's planned Bott-vanishing theorem; the foliation-specific partial connection and transverse-degree argument remain in DT-31. The B manifest requires only A, as the design intends.
For source context, the coverage file cites Bott, *Lectures on Characteristic Classes and Foliations*, §§4–5, printed pp. 22–30 ([PDF](https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf)); Milnor–Stasheff, *Characteristic Classes*, Appendix C, pp. 289–312 ([PDF](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf)); Haller, *The Atiyah–Singer Index Theorem*, §II.4, especially Proposition II.4.1, pp. 86–89 ([PDF](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf)); Hatcher, *Vector Bundles & K-Theory*, §3.1, pp. 77–83 ([PDF](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf)); and Kaiwen, §4, pp. 6–10 ([PDF](https://www.math.uni-bonn.de/people/cfb/TEACHING/Vortrag-13-Song.pdf)), for real splitting. I read Haller's complete Proposition II.4.1 argument: it derives closedness from Bianchi, exact variation along a path of connections, then pullback and direct-sum formulas. The source structure supports the selected scope. This is a scope review, not a correctness audit of authored proofs.

## Carry-forward discrepancy

The DG-38 prose in `research/plan-differential-geometry-track.md` §10.8 lists eight A-page prerequisites: connections/parallel transport, Riemann curvature, Lie groups, exterior derivative, the de Rham complex, topological vector bundles, Stiefel–Whitney/Euler classes, and Chern/Pontryagin classes. The current `research/frontier-36-complete-batch-19.pages.json` A-page `requires` field lists four instead: Riemann curvature, Lie groups, Chern/Pontryagin classes, and `the-de-rham-theorem-and-degree`. The remaining five planned entries are absent from that direct list, and the de Rham theorem page appears only in the manifest. The Step 1 drift note says the lists match, while `research/frontier-36-complete-batch-19.cross-batch-dependencies.json` is empty. The difference may reflect transitive reduction, but the current records do not explain it. The owner should reconcile this dependency interface before relying on the Step 1 summary. It does not change this content-scope decision.

The run status currently shows `1-drift` active and `3a-scope` waiting. The scope ledger has the pair assignment but no pair-specific owner proceed/merge/enrichment decision; the run-local owner-authoring direction has no Chern–Weil instruction.
