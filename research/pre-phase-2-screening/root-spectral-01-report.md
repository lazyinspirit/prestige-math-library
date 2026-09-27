# Spectral graph theory: direct prerequisites and potential fatal defects

The complete current text of all 24 assigned items was read, with the relevant
finite-dimensional linear-algebra, graph and polynomial contracts recorded in
[the receipts](root-spectral-01-receipts.json). One new U-P flag concerns an
invalid proof witness; 23 items have bounded no-new-candidate receipts. Existing
U-P membership of `thm-binet-cauchy-formula` is preserved, not cleared by this
bounded reading. No external-source reading or independent certification is
claimed.

## Matrix-tree theorem: the selected component gives the wrong row relation

In `thm-matrix-tree-theorem`, Proof 1.2 states:

> If $G_S$ is disconnected, then the vertex-indicator vector of the component
> of $v_i$ gives a nonzero linear relation among the rows of $B^{(i)}[S]$,
> so $\det(B^{(i)}[S])=0$.

Choose four vertices with isolated root $v_1$ and the triangle on
$\{v_2,v_3,v_4\}$. Take all three triangle edges as $S$, so $|S|=n-1$ exactly
as required by the proof. Orient them $v_2\to v_3$, $v_2\to v_4$,
$v_3\to v_4$. After deleting the root row, the incidence matrix is

$$B^{(1)}[S]=\begin{pmatrix}-1&-1&0\\1&0&-1\\0&1&1\end{pmatrix}.$$

The indicator of the root's component $\{v_1\}$ becomes $(0,0,0)$ after
deleting the root coordinate. It is therefore not the claimed **nonzero** row
relation. This is an exact false assertion in the disconnected-case proof,
not a counterexample to Kirchhoff's theorem. A component not containing the
deleted root would furnish a different witness; no repair was made here.

The flag is `invalid_proof`, severity `potential_fatal`, pending adjudication.
No missing Phase-2 supplier is required for this particular issue. The finite
graph, incidence matrix and determinant contracts already exist. The item is
historically published and had no prior active classification or exact-ID
finding in the ledger at selection.

## Other checks

The remaining arguments use finite-dimensional spectral theory, not Phase-2
infinite-dimensional spectral results. Empty graphs and one-vertex boundaries
were checked against the definitions, and zero eigenvalue multiplicities were
distinguished from actual occurrences. The cycle spectrum's Vandermonde
independence has adequate existing polynomial-root-bound support; the unlinked
algebra fact was not automatically treated as missing mathematics. The Petersen
spectrum calculation, cut-bound constants, Binet–Cauchy signs, and the cofactor
product formula were checked directly. The matrix-tree proof flag was not
propagated into its consumers, whose own arguments use its unchanged statement.

Every receipt records literal current-file text and hashes. These are bounded
screening outcomes, not full proof-closure certifications.
