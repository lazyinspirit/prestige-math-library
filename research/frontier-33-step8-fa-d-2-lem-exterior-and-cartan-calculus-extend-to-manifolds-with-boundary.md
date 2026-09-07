# FA terminal evidence — queue d/2

Item: `lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary`.
Decision: repaired. Source status: familiar.

I read the complete current proof and all seven cited dependencies, the
integration A/B pages, batch-13 manifest, coverage conventions, item contract
including its critical-risk record, original rejection, Sol adjudication and
repair report, and terminal Terra rejection. Sol correctly restricted the
Leibniz sign to homogeneous degrees. Terra correctly observes that the repaired
statement still never binds F. I independently repaired its first paragraph
to quantify smooth manifolds M,N, a smooth map F:N to M, a smooth vector field
X on M, and arbitrary alpha in Omega*(M). This makes all displayed expressions
well typed. The homogeneous clause still quantifies p,q and beta on M.
The owning manifest statement is synchronized. Dependencies and the proof
are unchanged; the existing contract still matches every proof row and fact.

Mathematical check: finitely many coefficients have local smooth extensions
by `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary`.
The uniqueness-of-derivatives lemma follows by differentiating on the dense
interior and taking continuous limits to the face. Thus the first-order
coordinate formulas for d and Lie derivative are extension independent.
For F:N to M, choose extensions of its coordinate components and of the target
form, shrinking the source extension domain about the chosen point to stay
in the open target extension domain. No boundary-preservation or tangency
assumption is needed. Boundaryless pullback naturality then restricts to N.
The graded derivation identity restricts coefficientwise in homogeneous
degrees, and linear identities extend to the finite homogeneous decomposition.
Outside support, the form vanishes on a relative open neighborhood, so all
its coefficient derivatives vanish, including their limits at the face.
Cartan's formula on extensions restricts to M; naturality of the coordinate
operations gives agreement on overlaps. This defines the claimed Lie derivative
even when X has a nonzero normal component and no two-sided internal flow.
Zero forms, degree zero, dimension zero, and empty domains give no exception.

The seven direct dependencies are exactly the seven IDs in the item's deps
and F1–F7, which I read in full from items/. Their local extension and
boundaryless calculus statements support the argument without widening.
The page's compact-support and AC_omega conventions for integration introduce
no choice hypothesis into this entirely local finite-coefficient construction.
This is familiar smooth local calculus and needed no external verification.
No source was used as an unverified substitute for a local proof.

Validation: focused precheck passed (1 item, 0 failures), strict batch-13
contract check for this ID passed (1/1, 0 errors, 0 warnings). Rendercheck
also completed successfully (16,334 files, no YAML or math errors); its CLI
interpreted --help as a default whole-library check. No dependencies were
edited, no new lemmas were needed, and no judgment or pass stamp was created.

Unresolved obligations: none. Next action: record exact final bytes, then
start item 3 only after the recorder accepts item 2.
