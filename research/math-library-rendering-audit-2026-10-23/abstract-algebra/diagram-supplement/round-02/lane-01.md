# Abstract Algebra diagram supplement — round 02, lane 01

## Scope and evidence

Reviewed the bound snapshot for `prop-real-spin-factor-maps-onto-clifford-jordan-subalgebra` and compared its SHA256 with the current item; both are `ad46eec545e9d63189cc20afa347606455ee03c0d3d2a65e3058eea626a51fa5`. Viewed both assigned local screenshots at original resolution: the 1200 × 1400 first tile contains the statement and diagram, and the 1200 × 1130 second tile contains the proof, including the explicit commutativity calculation. Their hashes match the receipt. The receipt is bound by the assignment, though its internal `lane` field says `05` while this assignment is lane `01`.

## Verdict

**Checked correct. No concrete diagram/math mismatch found.** The square's top arrow is the spin-factor product, its bottom arrow is the symmetrized Clifford product, and its vertical arrows are \(\Phi\times\Phi\) and \(\Phi\). The diagram's Clifford algebra labels denote the underlying carriers equipped with the displayed lower product, consistent with the stated codomain \(\mathrm{Cl}^{+}(V,Q)^+\).

For \((v,\alpha),(w,\beta)\in S(V)\), the upper route followed by \(\Phi\) gives
\[
\alpha\bar w+\beta\bar v+(\langle v,w\rangle+\alpha\beta)1.
\]
The route through \(\Phi\times\Phi\) and the lower product gives
\[
\alpha\bar w+\beta\bar v+
\tfrac12(\bar v\bar w+\bar w\bar v)+\alpha\beta1,
\]
which is equal by the plus-\(Q\) relation \(\bar v\bar w+\bar w\bar v=2\langle v,w\rangle1\). The \(1/2\) normalization is therefore correct, and the positive sign agrees with the source convention \(\bar v^2=Q(v)1\), \(Q(v)=\langle v,v\rangle\). The vertical map labels have the correct source and target carriers, and the two square paths commute.

## Rendering observation

The first original-resolution tile shows one rendered TikZ square with the stated arrows and product labels. The second shows the proof calculation used to verify commutativity. The receipt reports one TikZ diagram and zero diagram failures. No repair is indicated.
