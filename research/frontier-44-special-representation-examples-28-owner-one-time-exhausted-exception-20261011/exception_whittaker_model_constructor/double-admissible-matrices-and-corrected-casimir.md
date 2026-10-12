# Double-admissible tensor matrices from the proved original right model

The exact prerequisite is the same ORIGINAL left-justified finite $W$ algebra's left-tail and right-head normalizer descriptions for every initial-column prefix, together with the actual original prefix $T$ recursion. The separate right-invariance/PBW constructors own these prerequisite proofs. This appendix derives the tensor-matrix and common Casimir interfaces from them; it does not require a new reflected tensor assertion.

## Prefix matrices and both character equations

Write $a=\operatorname{col}(i)$, $b=\operatorname{col}(j)$ and, for $a>b$,
$$X_{ij}=(-1)^{a-b}I_{a-1}(T_{\operatorname{row}(j),\operatorname{row}(i)}^{(a-b)}).$$
For $a\le b$ put $X_{ij}=\delta_{ij}$. Modes use their ACTUAL displacement index; there is no $u^s$ reindexing. The matrix is strictly column-lower-triangular away from its identity diagonal, so its inverse is the finite path sum
$$Y_{ij}=\sum_{t\ge0}\sum_{i=i_0,\dots,i_t=j\atop\operatorname{col}(i_0)>\cdots>\operatorname{col}(i_t)}(-1)^tX_{i_0i_1}\cdots X_{i_{t-1}i_t}.$$
The term $t=0$ is $\delta_{ij}$. All sums are finite.

For an adjacent negative matrix $x=E_{rs}$ with $\operatorname{col}(r)=\operatorname{col}(s)+1=A$, prove BOTH
$$[E_{rs},\eta_{\mathrm{tail}}X_{ij}]+\delta_{ir}\eta_{\mathrm{tail}}X_{sj}\in U(\mathfrak g)I_\chi,$$
$$[E_{rs},\eta_{\mathrm{head}}X_{ij}]+\delta_{ir}\eta_{\mathrm{head}}X_{sj}\in I_\chi U(\mathfrak g).$$
If $a<A$, every matrix unit in $X_{ij}$ is supported in columns $\le a-1<A-1$, so the commutator vanishes. If $a>A$, $X_{ij}$ belongs to the proved $W$ of prefix $a-1$, where $E_{rs}$ is a negative generator; the two normalizer descriptions give the two ideal containments. Restriction of a whole-pyramid tail shift to a prefix differs from its prefix tail shift by a uniform scalar trace character; this uniform automorphism fixes $\mathfrak m$ and $\chi$ and preserves both reduction ideals. The same observation covers a changed declared row count. Thus no accidental prefix normalization is used.

For the only boundary $a=A$, expand the prefix-$a-1$ coefficient with its proved last-column recursion. In schematic row notation this is
$$T_{u,v}^{(d)}=\iota(T_{u,v}^{(d)})-\sum_{h\le n-q_{a-1}}\iota(T_{u,h}^{(d-s_{hv})})\iota(T_{h,v}^{(s_{hv})})+\sum_{h>n-q_{a-1}}\iota(T_{u,h}^{(d-1)})E_{\operatorname{box}(h,a-1),\operatorname{box}(v,a-1)}-[\iota(T_{u,v}^{(d-1)}),E_{\operatorname{box}(v,a-2),\operatorname{box}(v,a-1)}],$$
where $\iota$ is the prefix-$a-2$ embedding and impossible boxes/terms are omitted exactly as in the supplier. The first two terms commute with $E_{rs}$ by disjoint box support. The final commutator does also: its prefix-$a-2$ coefficient and its positive matrix unit both commute with $E_{rs}$. Only the displayed column-Levi sum contributes. Its bracket is
$$\delta_{s,\operatorname{box}(h,a-1)}\,\eta(\iota T_{u,h}^{(d-1)})E_{r,\operatorname{box}(v,a-1)}.$$
The negative bridge commutes with that prefix-$a-2$ coefficient, so its LEFT and RIGHT reductions are identical, equal to $\delta_{ir}\eta(\iota T_{u,\operatorname{row}(s)}^{(d-1)})$. The factors $(-1)^{a-b}$ and $(-1)^{a-1-b}$ differ by a minus sign. This gives $-\delta_{ir}\eta X_{sj}$ for either head or tail shift, proving the two character equations. Scalars inserted on the column-Levi diagonal commute with $E_{rs}$ and do not change this calculation.

Now use the inverse path formula to prove
$$[\eta_{\mathrm{head}}Y_{ij},E_{rs}]+\eta_{\mathrm{head}}Y_{ir}\delta_{sj}\in I_\chi U(\mathfrak g).$$
In a strictly descending path there is at most one vertex with column $A$. Before it, each factor $X_{uv}$ starts in a column $>A$, hence belongs to a prefix $W$ whose proved right model normalizes $I_\chi U(\mathfrak g)$. After it, the factors are supported strictly before column $A-1$, hence commute with $E_{rs}$. This is why reduction of the product commutator is legitimate; arbitrary multiplication of a right-ideal congruence on its left would not be legitimate. The sole surviving bracket replaces the factor starting at $r$ by the factor starting at $s$. Pair the path which next visits $s$ with the otherwise identical path which omits that visit. Their contributions have opposite signs and the same product ($X_{ss}=1$). All contributions cancel except the terminating visit $s=j$, whose sum is $-\eta_{\mathrm{head}}Y_{ir}\delta_{sj}$. This proves the right equation for $Y$. Adjacent negative generators generate $\mathfrak m$; the Lie commutator rule and their natural-module coefficient brackets propagate both character equations to every $x\in\mathfrak m$.

Thus $X,Y$ are double-admissible in the precise sense used by the model-tensor proof. Direct sums and direct summands preserve the equations (choose an adapted basis and use uniqueness of the left lift). For tensor factors $Z,Z'$ use $X_{Z\otimes Z'}=\delta_Z(X_{Z'})(X_Z\otimes1)$ and $Y_{Z\otimes Z'}=(Y_Z\otimes1)\delta_Z(Y_{Z'})$; inserting the two successive left/right Whittaker lifts proves their respective equations and these matrices are mutual inverses. Modules with trivial derived $\mathfrak{sl}_N$ action use identity matrices, even when the scalar centre has Jordan blocks. Complete reducibility for $\mathfrak{sl}_N$ writes a finite module as a sum of derived irreducibles tensored with such central multiplicity modules. A derived irreducible is a summand of a natural tensor power after a scalar determinant-character correction (exterior powers are antisymmetrizer summands). Consequently every finite-dimensional $\mathfrak g$ module has these double-admissible matrices. Usual left contragredients and their RIGHT vector-space duals keep their separate action conventions.

## Corrected ordinary-matrix-unit Casimir coefficient

In ordinary box matrix units, the actual common coefficient is
$$C_{j,i}=\sum_{\operatorname{col}(h)\le\operatorname{col}(k)}Y_{i,k}E_{h,k}X_{h,j}+\sum_k(q_{\operatorname{col}(k)}-n)Y_{i,k}X_{k,j}+\sum_{\operatorname{row}(h)=\operatorname{row}(k),\,\operatorname{col}(h)=\operatorname{col}(k)-1}Y_{i,h}X_{k,j}.$$
There is NO extra $(-1)^{\operatorname{col}(k)-\operatorname{col}(h)}$ on $E_{h,k}$; the signs of prefix $T$ modes are already in $X$ and $Y$. The printed memoir formula8.40 and the inherited matrix research note put that extra sign in their first sum. For the repository's ordinary matrix-unit convention this fails the explicit test below. The local derivation determines the actual formula and takes precedence over a copied display.

Here is the full coefficient calculation on the LEFT. The Whittaker lift of $m\otimes v_j$ is $\sum_h\eta_{\mathrm{tail}}(X_{hj})1_\chi\otimes m\otimes v_h$. The coefficient at $v_k$ after applying $\Omega$ is $\sum_hE_{h,k}\eta_{\mathrm{tail}}X_{hj}$. For $\operatorname{col}(h)\le\operatorname{col}(k)$ the matrix is in $\mathfrak p$, and applying $\eta_{\mathrm{tail}}^{-1}$ gives $(E_{h,k}-\delta_{hk}\rho^{\mathrm{tail}}_k)X_{hj}$. For $\operatorname{col}(h)>\operatorname{col}(k)$ the proved left equation moves it to the right, giving $\chi(E_{h,k})X_{hj}-X_{kj}$. Summing these negative correction terms and the positive diagonal trace shift gives
$$-\rho^{\mathrm{tail}}_k-\sum_{b>\operatorname{col}(k)}q_b=q_{\operatorname{col}(k)}-n.$$
The character term is nonzero exactly for an adjacent same-row pair. Multiply the resulting coefficient matrix by $Y$ on the left; this is the displayed $C$.

On the RIGHT, the lift of $f\otimes v^i$ is $\sum_kf\otimes1_\chi\eta_{\mathrm{head}}Y_{ik}\otimes v^k$. The coefficient at $v^h$ after the right Casimir is $\sum_k\eta_{\mathrm{head}}Y_{ik}E_{h,k}$. For a negative $E_{h,k}$ the proved right $Y$ equation moves it left, giving $\chi(E_{h,k})Y_{ik}-Y_{ih}$ in the right quotient. The diagonal/head correction therefore is
$$-\rho^{\mathrm{head}}_h-\sum_{b<\operatorname{col}(h)}q_b=q_{\operatorname{col}(h)}-n.$$
For a nonnegative matrix the ordinary unshifted $E_{h,k}$ remains; the same-row adjacent character terms give $\sum Y_{i,h}X_{k,j}$. Multiplication by $X$ on the right gives exactly the SAME $C_{j,i}$. Its entries lie in $W$ because the universal Casimir preserves the actual Whittaker subspace. Hence the perfect finite pairing intertwines both transported Casimirs as required.

The scalar normalizations also show directly that the ground-character tensor action is the existing unrestricted deformed formula with $c_{\operatorname{col}}+q_{\operatorname{col}}-n$; no origin is omitted or multiplied by tensor degree.

## Explicit defect countercheck

For the principal $\mathfrak{gl}_2$ pyramid $(q_1,q_2)=(1,1)$, $n=1$, the ordinary prefix formulas give
$$X=\begin{pmatrix}1&0\\-E_{11}&1\end{pmatrix},\qquad Y=\begin{pmatrix}1&0\\E_{11}&1\end{pmatrix},\qquad T^{(2)}=E_{11}E_{22}-E_{12}.$$
The corrected coefficient is $C_{1,2}=E_{12}-E_{22}E_{11}=-T^{(2)}$, which belongs to $W$. The inherited signed expression instead gives $-E_{12}-E_{22}E_{11}$. Under the original tail shift $\eta(E_{11})=E_{11}-1$, $\eta(E_{22})=E_{22}$, commute this expression with $E_{21}$ and project modulo $U(\mathfrak g)(E_{21}-1)$: the result is $2(E_{11}-E_{22})\ne0$. Thus it is not even a $W$ element. This bounded example diagnoses the extra sign, while the preceding left/right calculation proves the corrected full formula.
