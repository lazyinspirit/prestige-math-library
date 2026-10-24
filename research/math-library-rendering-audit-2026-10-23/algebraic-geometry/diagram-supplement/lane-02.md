# Algebraic Geometry diagram supplement — lane 02

Reviewed only the two items in `assignments/assignment-02.json`, using their bound snapshots and original-resolution local screenshot tiles. Both snapshots match their current item SHA256. The screenshots show no existing TikZ diagrams; the receipt's primary capture lanes are 06 and 04 respectively, not supplement lane 02.

## Candidates

**lem-ag-local-flatness-regular-parameters** — **warranted**, optional tensor-sequence chase (source line 87; uncertain, no confirmed defect). The proof explicitly invokes a diagram chase for
\[
0\to I\cap\mathfrak m^n\to I\oplus\mathfrak m^n\to I+\mathfrak m^n\to0
\]
and its tensor with \(M\). A diagram could show the three tensor terms, their multiplication maps to \(M\), and the element \((k,0)\) lifted to \((x,-x)\).

Checks: the ideal maps are \(x\mapsto(x,-x)\) and \((a,b)\mapsto a+b\); their composite is zero. After tensoring, exactness at the middle and rightmost surjectivity follow from right exactness, but the left tensor map is not asserted injective. The multiplication maps commute with these maps. The proof uses injectivity only on \(\mathfrak m^n\otimes_R M\) and \((I+\mathfrak m^n)\otimes_R M\), by step 3.1. The first component of the lifted \((x,-x)\) maps to \(k\), and the second to zero, placing \(x\) in the stated multiplication kernel. The minus sign is essential to match the exact ideal sequence.

**ex-root-groups-and-bruhat-cells-for-sl2** — **warranted**, optional two-cell Bruhat schematic (source lines 31, 47–49; uncertain, no confirmed defect). The source identifies \(G/B\cong\mathbf P^1\) with cells \(\{B\}\sqcup Y(s_\alpha)\), where \(Y(s_\alpha)=U^+w_0B/B\cong\mathbf A^1\), and relates these to the two \(T_2\)-fixed points. A schematic could place this beside the group decomposition \(\mathrm{SL}_2=B\sqcup Bn_\alpha B\).

Checks: on the group, \(B\) is \(c=0\) and the Bruhat big cell is \(c\ne0\); separately, the Gaussian cell \(U^-T_2U^+\) is \(a\ne0\). Keep these loci distinct. Flag-cell dimensions are 0 and 1, while group-cell dimensions are 2 and 3. Label the closed flag cell \(\{B\}\), the open cell \(Y(s_\alpha)\cong\mathbf A^1\), and the two fixed points; do not label the whole open affine cell fixed. The representative is \(n_\alpha=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\). No commutative square is asserted.

The bound screenshots for both items show no existing diagram to check. The source statements and maps are consistent; these are editorial opportunities only, and no proof may depend on a diagram. Full source hashes, exact quoted source lines, screenshot tile hashes, and further checks are recorded in `lane-02.json`.
