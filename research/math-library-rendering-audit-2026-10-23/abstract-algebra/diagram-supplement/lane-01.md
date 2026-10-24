# Abstract Algebra diagram supplement — lane 01

## Scope and evidence

Reviewed the bound snapshot for `thm-mackey-double-coset-formula-for-restricting-an-induced-character` and compared its SHA256 with the current source; both are `1678dcc13880f253851261c7b447f598b8ee63f956dbcc22fc500dc48a5eeac2`. Viewed both assigned local screenshots at original resolution. The first is 1200 × 1400 and shows the statement and full proof; the second is a blank 1200 × 100 tail crop. Their hashes match the receipt. The receipt is bound by the assignment, though its internal `lane` field says `06` while this assignment is lane `01`.

## Decision

**A diagram would be useful, but its absence is not a diagram defect.** The decomposition has a natural two-stage picture: partition the induced representation by the (K)-orbits on (G/H), indexed by (S\subseteq G) representing (K\backslash G/H), then identify the block supported on (KsH) with an induced (K)-module from the subgroup that stabilizes the corresponding orbit.

The indexing and conjugation direction in the source agree. For a representative (s), the block is supported on (KsH), its stabilizer is (K\cap sHs^{-1}\leq K), and its coefficient representation is the restriction of ({}^sW), a representation of (sHs^{-1}). The displayed summand is therefore induced from (K\cap sHs^{-1}) up to (K). Since the double cosets partition (G), their support subspaces give the stated direct sum with one summand per representative.

The proof's map has the correct type and direction:
\[
\Theta_s:I_s\longrightarrow \operatorname{Ind}_{K\cap sHs^{-1}}^K
\left(\operatorname{Res}_{K\cap sHs^{-1}}^{sHs^{-1}}{}^sW\right),
\qquad \Theta_s(f)(k)=f(ks).
\]
With induced functions satisfying (f(gh)=h^{-1}f(g)), if (u=shs^{-1}\in K\cap sHs^{-1}), then
\(\Theta_s(f)(ku)=f(ksh)=h^{-1}f(ks)=u^{-1}\Theta_s(f)(k)\), using the conjugate action on ({}^sW). The inverse's factorization-independence check is consistent with the same covariance. The left (K)-actions also make \(\Theta_s\) equivariant. No tensor balancing or separate naturality assertion is involved; the isomorphisms are indexed by the chosen representatives, and changing representatives yields isomorphic summands.

A concise figure could show the (KsH) support blocks alongside their subgroup inclusions (K\cap sHs^{-1}\leq K), their restricted conjugate coefficient modules, and the map (f\mapsto(k\mapsto f(ks))). The source already states these relationships clearly, so this is an editorial aid rather than a required correction.

## Rendering observation

The receipt reports zero TikZ diagrams and zero diagram failures. The first original-resolution tile renders the formula and proof without a diagram; the second tile contains only the blank bottom margin. This review found no diagram-rendering defect.
