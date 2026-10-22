# Step 3a reader report — batch 25

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 25

## Opened inventory

Assigned pages:

- [emg-fx10](../library/einstein-maxwell-models-mathematics/emg-fx10.md), A page.
- [emg-fx10-examples](../library/einstein-maxwell-models-mathematics/emg-fx10-examples.md), B page.

Assigned items, read in dependency order:

1. [def-emg-fx-cochain-maxwell](../items/def-emg-fx-cochain-maxwell.md)
2. [alg-emg-fx-leapfrog-cochains](../items/alg-emg-fx-leapfrog-cochains.md)
3. [lem-emg-fx-finite-step-termination](../items/lem-emg-fx-finite-step-termination.md)
4. [prop-emg-fx-discrete-gauss-preservation](../items/prop-emg-fx-discrete-gauss-preservation.md)
5. [cex-emg-fx-cfl-discrete-growth](../items/cex-emg-fx-cfl-discrete-growth.md)

Direct mathematical suppliers opened for the assigned claims were lem-cm-positive-definite-matrix-square-roots, thm-operator-norm-is-the-largest-singular-value, and thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. I also read the relevant norm/SVD definitions and direct SVD proof premises, the contextual citation lem-emg-fx-symplectic-current-boundary, the current batch manifest, proof contracts, coverage record, cross-batch dependency record, and research/math-imports.json.

Page prerequisite context opened: emg-cp02 and emg-fx09. The latter is the page-level prerequisite named by the batch-25 cross-batch record. The finite cochain definition links the boundary-current lemma only as context; it explicitly asserts no symplectic form, and that lemma is not in the definition's logical deps.

## Review and page verdicts

**emg-fx10: pass.** Its inventory and prerequisite pages agree with the manifest. The body is empty, as expected for the compact statement-first page layout. The finite cochain diagram in the definition has the arrows \(C^0\xrightarrow{D_0}C^1\xrightarrow{D_1}C^2\xrightarrow{D_2}C^3\) in the stated direction; it illustrates the assumed zero compositions without purporting to prove them.

**emg-fx10-examples: pass.** The example is placed in the B page, which requires its A page. Its empty body is expected under the same page-layout rule.

The definition correctly types the real finite coordinate spaces, duals, cochain maps, mass maps, state, equations, constraints, and energy. The finite algorithm specifies exact rational inputs, fixed no-row-swap elimination, update order, output count, and the zero-size case. The termination lemma's Schur-complement induction proves all prescribed pivots positive; its arithmetic-operation and storage counts do not claim bit-complexity or floating-point stability. The proposition's constraint identities, semidiscrete energy derivative, staggered invariant, and positivity estimate check algebraically in the stated finite-dimensional setting. The counterexample's tetrahedral incidence products, singular mode, update matrix, eigenvalues, and unbounded orbit were checked directly. These items are mathematical model claims, not empirical observations or continuum Maxwell conclusions.

The source context was checked against [Hiptmair, *Maxwell’s Equations: Continuous and Discrete*](https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf), §§3.1–3.2, printed pp. 23–25: Definitions 4–6 specify oriented cells, finite cochains, signed incidence maps, and their matrix representation; Theorem 7 states \(D_{\ell+1}D_\ell=0\). Section 3.3, printed pp. 26–27, treats sampling from continuum fields separately, consistent with the local items' explicit limit on their claims. The [University of Twente Harutyunyan thesis PDF](https://research.utwente.nl/files/6041555/thesis_Harutyunyan.pdf) is cited only for comparison. Its indexed text identifies §6.8, “Leap-frog time discretization,” at printed p. 171, but the direct PDF retrieval returned 403 and the local environment lacks pdftotext; I did not rely on its uninspected equations for any proof.

## Repairs

1. **cex-emg-fx-cfl-discrete-growth.** Step 2.1 previously invoked Cauchy–Schwarz without an explicit proof or direct dependency. I replaced that invocation with the coordinate identity
   \[
   \lVert u\rVert_2^2\lVert v\rVert_2^2-(u^{\mathsf T}v)^2
   =\sum_{i<j}(u_iv_j-u_jv_i)^2\geq0,
   \]
   and used it to derive the operator-norm bound and dual-norm maximum. I also converted the displayed matrices in this proof step to inline math so the complete step occupies one paragraph. The item dependencies still match the batch manifest. I updated the step-2.1 derivation row in the proof contract; no judge stamp was present.

2. **prop-emg-fx-discrete-gauss-preservation.** Its original Statement applied the algorithm's update to arbitrary real data and \(\tau>0\), although the algorithm accepts only rational inputs and rational \(\tau\). I defined the real one-step map \(T_\tau\) explicitly, stated that the exact rational algorithm is its restriction to rational admissible data, made the coordinate Euclidean norm convention explicit, and stated positivity for the quadratic form \(Q_\tau\) on \(\mathcal X\). In step 1.2 I cited lem-cm-positive-definite-matrix-square-roots for symmetry of \(M_1^{-1}\). I updated the affected proof-contract derivations and the counterexample's supplier excerpt. The sole item consumer found in current batch manifests is the assigned counterexample; I reviewed it against the clarified rational restriction and its witness remains valid. No judge stamp was present.

For both changed items, the specified reflow.mts and precheck.mts commands completed successfully. The final required proof-layout command on both paths reported 2 items, 8 steps, 0 defects.

The batch manifest and Step-2 boundary worksheet were preserved as source evidence. In particular, the boundary worksheet retains its recorded source hash; it was not rebound to the reader-edited proof bytes. The counterexample's Statement and witness matrices were unchanged.

## Uneditable findings

- thm-operator-norm-is-the-largest-singular-value, Statement lines 37–39: the additional sentence interleaves an incomplete “maximum in” clause with a zero-domain operator-norm definition and does not parse as a mathematical statement. The required norm-equals-largest-singular-value claim is separately stated and proved at lines 33–35 and in the proof. This published imported item is a direct dependency of the assigned prop-emg-fx-discrete-gauss-preservation; the statement defect is nonfatal to that assigned use but remains for owner disposition.
- lem-cm-positive-definite-matrix-square-roots, frontmatter lines 31–32: the carrier is status published, kind lemma, and has provenance.proof: ai-altered, but its verification has only precheck: pass; it has no audited, verified, or repair marker. [SCHEMA.md](../SCHEMA.md#verification-fields) requires an audit/verification marker for a published proved-here item, or the authorized repair route for an already-published correction. This published local supplier is a direct dependency of assigned def-emg-fx-cochain-maxwell and prop-emg-fx-discrete-gauss-preservation. Its relevant inverse and square-root proof was read; this finding concerns missing publication acceptance metadata.

## Blockers and coverage limits

No in-scope source repair remains. The two published-dependency findings above require owner disposition and are returned separately. The current batch manifest remains the Step-1 routing snapshot, so its original proposition Statement text does not mirror the clarified item source; no manifest edit was within this reader's source scope. The Step-2 boundary worksheet hash is retained as historical evidence rather than refreshed or treated as acceptance of the reader edits.

The assigned carriers, their direct item suppliers, the relevant SVD/Cauchy premises, and the current batch artifacts were inspected. I did not perform a whole-library audit of every foundational dependency beneath the published linear-algebra suppliers. The Harutyunyan retrieval limit is recorded above; no mathematical conclusion here depends on that comparison source.
