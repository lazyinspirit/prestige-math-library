# Step 3a reader report — batch 59

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader (`reader-59`)  
Scope: batch `59` only

## Opened scope and inventory

Read the required workspace instructions, `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md` (including its independent-review sections), `../PHYSICS-CONTENT-MODEL.md`, `briefs/reader.md`, and the batch-59 manifest. Inspected the current batch-59 proof contracts in bounded output and read the author notes as evidence, not as review verdicts.

The manifest assigns the following two mathematics pages, both in `quantum-field-theory-mathematics`:

- A page [qftx-adhm-linear-data-and-framed-monads](../library/quantum-field-theory-mathematics/qftx-adhm-linear-data-and-framed-monads.md).
- B page [qftx-adhm-linear-data-and-framed-monads-examples](../library/quantum-field-theory-mathematics/qftx-adhm-linear-data-and-framed-monads-examples.md).

Read all eight assigned items in dependency order:

1. `def-qftx-adhm-linear-data-stability-and-regularity` (level 0).
2. `lem-adhm-stable-quotient-and-torus-lift` (level 1).
3. `thm-qftx-adhm-real-complex-quotient-correspondence` (level 2).
4. `thm-qftx-projective-gaga-for-monad-data` (level 7).
5. `lem-qftx-p2-beilinson-diagonal-and-framed-vanishing` (level 8).
6. `thm-qftx-framed-p2-monad-adhm-correspondence` (level 9).
7. `ex-qftx-adhm-one-dimensional-fi-chambers` (level 10).
8. `ex-qftx-adhm-zero-charge-framing-monad` (level 10).

The A-page frontmatter lists the six assigned A items and the manifest's page prerequisites; the B-page frontmatter lists the two examples and requires the A page. Both page bodies are empty, both retain `page_layout: compact-v1`, and neither contains a summary. Their page inventories match the manifest. All items are draft mathematics items; none makes an empirical or statistical claim.

## Dependency and source checks

Opened the current direct in-run GAGA supplier carriers used by the assigned projective-GAGA theorem: `thm-qftx-gaga-analytic-oka-coherence` (batch 63), `thm-qftx-gaga-analytic-local-ring-flatness` (batch 64), `thm-qftx-gaga-analytic-compact-projective-coherent-finiteness` (batch 66), and `thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology` (batch 67). Also opened the scalar Laurent–Čech lemma and the local coherent-polydisc, pseudoconvex-intersection, compact-Fréchet, bounded-Weierstrass-relation, coherent-module-calculus, and finite-matrix-kernel arguments used by those suppliers. Their inspected statements and proof portions support the conditional comparison and finiteness inputs used in the assigned GAGA proof; I found no additional defect to route from these inspected portions.

For the Beilinson and ADHM arguments, opened the Koszul-resolution supplier, projective twisting-sheaf cohomology, Serre duality statement, the Auslander–Buchsbaum criterion, the local flatness criterion, projective-space finite-resolution result, regular-surface reflexive-module lemma, PID torsion-free-module result, Serre vanishing, Čech comparison for quasi-coherent sheaves, both hypercohomology spectral-sequence statements, the relative projective-bundle K-theory statement, and the algebraic-closedness supplier. The displayed hypotheses cover the uses made in the assigned proofs except for the local omissions listed below.

For the degree-positivity point below, I also inspected the read-only root mathematics pages on Chow/intersection theory and intersection products on smooth projective surfaces, together with the published plane-curve Bézout theorem and the result identifying intersection with a curve as degree of line-bundle restriction. These give the relevant tools, but the assigned proof does not spell out their application to an arbitrary effective divisor, including a component equal to `L_infty`.

I consulted limited excerpts of Serre, *Géométrie algébrique et géométrie analytique*, §12 Theorem 1 and §13 (PDF pp. 19–22), and Henni, *Monads for framed torsion-free sheaves on multi-blow-ups of the projective plane*, Definition 2.1, the P² monad discussion, and excerpts from the family construction (§§2–4, arXiv:0903.3190). These readings corroborate the broad GAGA and monad context; I do not use them as substitutes for the local proof obligations below, and I did not read either source cover to cover.

The manifest and current items were checked for prerequisite order and consistency. The current batch-59 dependency declarations include the assigned item-to-item edges. I did not independently audit the full transitive mathematical supplier closure; the author notes report a 3,625-item/407-page closure, which is outside the source passages opened for this review.

## Defects not edited

This was a read-only assignment; no source item, proof contract, page, or verification record was edited.

1. **`lem-adhm-stable-quotient-and-torus-lift`, Statement, first paragraph** (item line 50). The statement identifies the quotient tangent space as `ker d_1 / im d_0` but does not define either map there or in an earlier supplier. Their formulas and domains first appear later in Proof step 2.1. The statement needs the two infinitesimal maps (or a prior exact definition with their relevant formulas) to make the asserted tangent space well-formed. Finding severity: fatal.

2. **`lem-qftx-p2-beilinson-diagonal-and-framed-vanishing`, Facts & Assumptions preamble and Proof step 2.1** (lines 89 and 121). The slope argument uses that an effective divisor on P² has nonnegative intersection degree with `L_infty`. The item asserts this consequence, but the local DVR and determinant facts only produce the effective divisor; the proof does not apply an exact intersection result to it. The A-page has an intersection-theory page prerequisite, and the opened root suppliers give tools to close this, but the proof should spell out the application: use Bézout for each component other than `L_infty` and compute `L_infty^2=1` for a component equal to `L_infty`, then add with multiplicity. Finding severity: nonfatal.

3. **`lem-qftx-p2-beilinson-diagonal-and-framed-vanishing`, Proof steps 6.1 and 7.1** (lines 129 and 131). The proof tensors the diagonal Koszul resolution by `E(-1)` and later by an S-flat family whose fibers are only torsion-free. The cited Koszul supplier proves the resolution of the diagonal and tensor exactness for a vector bundle; it does not itself establish exactness after tensoring by this non-locally-free sheaf. Exactness is recoverable because the diagonal is flat over the first projection and the Koszul resolution is relatively pure (or by a local coordinate-difference argument), but that necessary argument is absent before the spectral-sequence computation uses the result. Finding severity: nonfatal.

4. **`lem-qftx-p2-beilinson-diagonal-and-framed-vanishing`, Proof step 3.1** (line 124). From depth at least one, the proof excludes torsion supported at finitely many points by saying a nonzero finite-length torsion submodule would force depth zero. The required local fact is not cited or derived. It can be closed by taking a nonzero socle element of a finite-length submodule, which gives a nonzero map from the residue field and hence depth zero. Finding severity: nonfatal.

5. **`lem-qftx-p2-beilinson-diagonal-and-framed-vanishing`, Proof step 5.1** (line 127). The stability and slope contradiction for `T_{P²}(-3)` are asserted without computing its degree from the Euler sequence or separating rank-one and full-rank images. The preceding absence of rank-one subsheaves of degree at least `-1` yields strict stability only after noting the degree is integral and `deg T(-3) = -3`; for a rank-two image, stability alone does not control its slope, so the full-rank subsheaf bound from step 2.1 must be applied. The Euler-sequence determinant calculation and the rank cases close this short gap. Finding severity: nonfatal.

6. **`thm-qftx-framed-p2-monad-adhm-correspondence`, Proof step 4.2** (line 130). For an arbitrary finite-type ADHM data family, the proof writes `0 → V O(-1) → K → E → 0` as exact after citing only the fibrewise monad result. The total-space injectivity of `alpha` is not proved, yet it is needed before the residue-field Tor calculation and local flatness criterion. A local proof is available from the explicit monad matrix: on the standard charts an appropriate block has a monic determinant in a chart coordinate, so the adjugate identity gives total-space injectivity over an arbitrary base; alternatively, cite and verify a relative exactness criterion. Finding severity: nonfatal.

7. **`thm-qftx-framed-p2-monad-adhm-correspondence`, Facts & Assumptions [F6] and Proof steps 2.2 and 3.2** (lines 102, 120, and 126). The common-eigenvector fact for two commuting endomorphisms is attributed only to the supplier stating that `C` is algebraically closed. The needed linear-algebra implication is not supplied by that statement: choose an eigenvalue of the first map, observe its nonzero eigenspace is invariant under the commuting second map, then take an eigenvector of the restriction. Add this derivation or an exact supplier. Finding severity: nonfatal.

## Diagram review

No TikZ/tikzcd diagrams occur in the assigned pages or items. The algebraic complexes and maps are stated in formulas; I found no exposition point requiring an additional diagram for correctness.

## Page verdicts

- **A page — `qftx-adhm-linear-data-and-framed-monads`:** page carrier and inventory pass. The page's mathematical content remains open because findings 1–5 affect assigned items on it.
- **B page — `qftx-adhm-linear-data-and-framed-monads-examples`:** page carrier and inventory pass. The two example computations have no separate confirmed defect; the first example depends on the assigned ADHM correspondence item whose proof findings are listed above.

## Edits, checks, and blocker

Edits: none. No proof contracts or judge records were changed. Since no item was edited, reflow, precheck, and proof-layout were not run. No workflow or filesystem blocker occurred. Coverage is limited to the assigned carriers, the specifically opened mathematical suppliers listed above, and limited external-source excerpts; the full transitive prerequisite closure and complete cited source texts were not independently re-audited.
