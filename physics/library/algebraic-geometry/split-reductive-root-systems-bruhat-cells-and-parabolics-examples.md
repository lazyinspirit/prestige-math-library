---
page: split-reductive-root-systems-bruhat-cells-and-parabolics-examples
title: "Split Reductive Root Systems, Bruhat Cells, and Parabolics — Examples"
status: published
requires: [split-reductive-root-systems-bruhat-cells-and-parabolics]
items: []
examples:
  - ex-root-groups-and-bruhat-cells-for-sl2
  - ex-standard-parabolics-in-gl-n
  - cex-lie-root-system-does-not-record-full-root-datum
---

These examples exercise the structure theory of
[[split-reductive-root-systems-bruhat-cells-and-parabolics]] on the two
classical families and record one boundary of the root-datum invariant.

The first leaf, [[ex-root-groups-and-bruhat-cells-for-sl2]], runs the whole
machine on $\mathrm{SL}_2$: the root datum $X(T_2)=\mathbb Z\chi$ with
$\alpha=2\chi$ and $\alpha^\vee=\chi^\vee$, the conjugation formulas
$tu_\alpha(a)t^{-1}=u_\alpha(\alpha(t)a)$, the representative $n_\alpha$ of the
nontrivial Weyl element, and the two-cell Bruhat decomposition
$\mathrm{SL}_2=B\sqcup Bn_\alpha B$ with big cell $U^-T_2U^+$ an open
$\mathbf A^1\times\mathbf G_m\times\mathbf A^1$ of dimension $3$, together with
the identification of the flag variety with $\mathbf P^1$.

The second leaf, [[ex-standard-parabolics-in-gl-n]], computes the standard
parabolics of $\mathrm{GL}_n$ by blocks: the roots $\alpha_{ij}=\chi_i-\chi_j$
with root groups $U_{ij}=\{I+aE_{ij}\}$, the base
$\{\alpha_{i,i+1}\}$, and the description of $P_I$ as the block upper
triangular group with diagonal blocks $a_1,\dots,a_s$, whose unipotent radical
is the block strictly upper triangular part and whose Levi factor is
$\prod_i\mathrm{GL}_{a_i}$. The maximal proper parabolics
$P_{\Delta\smallsetminus\{i\}}$ stabilize a single subspace of dimension $i$.
For $n\ge3$, the minimal proper parabolics strictly above $B$ are
$P_{\{i\}}$, stabilizing the standard partial flag with only the
$i$-dimensional step omitted; for $n\le2$ there is no proper parabolic
strictly between $B$ and $G$. The Bruhat cells of the complete flag variety
are indexed by $S_n$ with dimension the inversion number.

The counterexample,
[[cex-lie-root-system-does-not-record-full-root-datum]], separates
$\mathrm{SL}_2$ from $\mathrm{PGL}_2$ over a field of characteristic $\neq2$.
The two groups have the same Lie algebra $\mathfrak{sl}_2$ and the same
abstract root system $A_1$, but their root data differ: the root $2\chi_1$ of
$\mathrm{SL}_2$ is divisible by $2$ in the character lattice while the root
$\chi_2$ of $\mathrm{PGL}_2$ is not, and dually the coroot lattice of
$\mathrm{PGL}_2$ has index $2$ in the cocharacter lattice. The example
therefore shows why the coroots are part of the invariant, and it complements
the published Lie-group statement that the two complex groups share a Lie
algebra.
