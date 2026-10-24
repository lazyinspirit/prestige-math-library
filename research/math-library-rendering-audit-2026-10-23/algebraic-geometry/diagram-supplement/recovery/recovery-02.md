# Algebraic Geometry diagram recovery — item 02

**ex-standard-parabolics-in-gl-n** — A partial-flag and block-matrix diagram is warranted as an optional editorial aid; classification remains **uncertain**, with no confirmed mathematical inconsistency.

Source lines 26 and 42 identify the composition \(n=a_1+\cdots+a_s\), the partial sums \(c_j=a_1+\cdots+a_j\), and the coordinate flag
\[
0\subset k^{a_1}\subset k^{a_1+a_2}\subset\cdots\subset k^n.
\]
They identify its stabilizer \(P_I\) with the block upper-triangular matrices with diagonal block sizes \(a_1,\ldots,a_s\). Line 44 explicitly says the general stabilizer is the intersection over cuts in \(\Delta\smallsetminus I\), **not** over \(I\).

A figure could pair the flag chain (annotating quotient dimensions \(a_i\)) with the corresponding block matrix: invertible diagonal blocks, arbitrary blocks above the diagonal, and zero blocks below. It may label \(L_I=\prod_i\mathrm{GL}_{a_i}\), \(R_u(P_I)\) with identity diagonal blocks, and \(R_u(P_I)\rtimes L_I\to P_I\).

Checks: \(a_i\ge1\), \(\sum a_i=n\), and the increasing cut positions \(c_j\) lie in \(\{1,\ldots,n-1\}\). The cut set is exactly \(\Delta\smallsetminus I\). The all-one composition gives \(P_\varnothing=B\); the one-part composition gives \(P_\Delta=G\). Both assigned screenshot tiles were viewed at original resolution and show no diagram. Source/snapshot and image hashes are recorded in `recovery-02.json`.
