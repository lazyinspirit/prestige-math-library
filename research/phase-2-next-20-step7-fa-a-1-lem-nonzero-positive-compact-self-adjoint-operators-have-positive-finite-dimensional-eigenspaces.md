# Final adjudication — queue position 1

Run: phase-2-next-20. Group a. Item: `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces`.
Disposition: repaired. Source status: familiar.

## Independent mathematical basis

Read the current item in full, each declared supplier, the A/B pages `library/measure-theory/weak-mixing-and-the-chacon-transformation{,-examples}.md`, and the owning batch-1 manifest, item's complete proof contract (including risk and boundary rows), relevant coverage and notes. The declared suppliers are `def-l-two-operator-conventions-for-weak-mixing`, `lem-closed-l-two-subspaces-have-orthogonal-projections`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, and `def-axiom-of-choice`. The projection supplier is not needed by the finite Gram–Schmidt calculation; no new projection or completeness theorem is being imported. Compactness here explicitly supplies a subsequential limit in H.

Under AC, on a nonzero closed complex L2 subspace, a nonzero positive self-adjoint compact S has alpha=||S||>0 as an eigenvalue; only its alpha-eigenspace is asserted nonzero, closed and finite-dimensional. With the first-variable-linear pairing, expansion gives q(x-ty)=q(x)-conj(t)B(x,y)-t conj(B(x,y))+|t|^2 q(y). Both choices of t in step 1.1 are correct, including q(y)=0. Taking the supremum over unit y gives ||Sx||^2<=a q(x). Homogeneity transfers the unit-sphere bound to the unit ball in the definition of operator norm, proving a=||S||, and a=0 would force S=0.

The zero-based maximizing sequence now uses 1/(n+1) at every natural index. Its residual satisfies ||Sx_n-alpha x_n||^2<alpha/(n+1). A convergent subsequence of Sx_n and this residual give x_nj->y/alpha, of norm one, and boundedness gives the eigenvector identity. The kernel is closed by continuity. If it has no finite spanning set, a choice function on its nonempty subsets and finite orthogonal subtraction yield unit orthogonal e_n recursively. All these vectors remain in the kernel. Their images have constant pairwise distance alpha sqrt(2), contradicting sequential compactness. AC is explicitly available for both infinite selections. No spectral theorem, Fredholm alternative or infinite orthonormal basis is assumed.

This elementary quadratic/compactness argument and the rank-one counterexample below are familiar enough to verify directly; no external verification was needed or performed. The existing Axler reference/coverage was inspected as provenance, not claimed as a fresh external reading.

## Rejections and final repair

Read both Terra rows in `research/phase-2-next-20-judge.jsonl`, Alpha's matching adjudication in `research/phase-2-next-20-judge-adjudications.jsonl`, and the item's section of `research/phase-2-next-20-alpha-step7-a.md`. The first rejection correctly identified division by zero at n=0; Alpha's 1/(n+1) repair resolves it. The final Terra rejection concerns the title, not a defect in the displayed Statement or proof. On l2, projection onto the first coordinate has an infinite-dimensional zero eigenspace, so an unrestricted reading would indeed be false. The old title can be read as referring only to positive eigenvalues, but an explicit title avoids this ambiguity entirely.

Changed only this item's title and its owning batch-1 manifest title to: “The positive norm eigenvalue of a nonzero positive compact self-adjoint operator has a nonzero finite-dimensional eigenspace”. Statement, proof, ID, suppliers, coverage and proof contract retain their already correct scope. No dependency repair occurred, hence no consumer-batch dependency row changes are required. No published finding or supplier edit is involved.

## Validation and checkpoint

Focused precheck: 1 checked, 0 failing. Strict owning proof-contract check: 1/1 checked, 0 errors, 0 warnings. Focused renderer/YAML/KaTeX check: clean. These are mechanical checks in addition to the independent mathematics above, not a third judgment or pass stamp.

No mathematical obligation remains for this item. Next action: record the repaired final bytes with the specified terminal recorder; only after its acceptance begin queue position 2. The append-only recorder receipt is the authoritative completion record.
