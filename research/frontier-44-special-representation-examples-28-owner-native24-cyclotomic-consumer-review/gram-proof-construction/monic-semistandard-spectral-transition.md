# Monic semistandard spectral transition: determinant one

Author: `/root/repair_klr_global_basis/native24_schur_weight_gram_construction`.
Run: `frontier-44-special-representation-examples-28`.
Research construction only. This continues the inverse-operator note in the same directory and is disjoint from the J constructor's symmetrizer calculation. Parent reviews every input and consequence. No signed rim-hook cancellation is claimed.

## 1. Universal construction of the monic weight basis

First work over $K_0=\mathbb Q(z,U_1,\ldots,U_\ell)$ in the actual generic Murphy/S2 datum. Use the convention

$$f_s=v_s+\sum_{r\triangleright s}a_{sr}v_r$$

for the monic simultaneous JM eigenbasis. Distinct JM words and triangular action construct this basis by successive spectral projection. The coefficients can be taken in the localization of the integral Laurent parameter ring at the differences between the residues of distinct addable nodes of the same prefix multipartition: at step $j$, multiply by

$$\prod_{c\ne c_s(j)}\frac{L_j-c}{c_s(j)-c},$$

where $c$ ranges over the addable residues of the fixed preceding prefix. The preceding prefix projection is applied first. Thus no arbitrary integer denominator is required. Selfadjointness and word separation make the $f_s$ mutually orthogonal, with $\gamma_s=b_\lambda(f_s,f_s)\ne0$.

Let $R_1<\cdots<R_m=n$ be the ends of the consecutive rows of the type tableau of $\nu$ (empty rows omitted). A semistandard tableau $T$ determines the partition chain

$$\boldsymbol\lambda(T)=(\lambda_T[1],\ldots,\lambda_T[m]),$$

where $\lambda_T[j]$ consists of the nodes carrying labels in the first $j$ type rows. Every standard refinement $s$ in the fibre of $T$ has shape $\lambda_T[j]$ on its first $R_j$ entries. Conversely this chain determines $T$: its $j$th difference is precisely the nodes with the $j$th type-row label. Thus chains and semistandard tableaux of fixed type correspond bijectively.

Use all elementary symmetric polynomials in $L_1,\ldots,L_{R_j}$, for every row end $R_j$. Each such operator commutes with every row generator: a type row lies either wholly inside or wholly outside that prefix, and Bernstein commutation fixes symmetric polynomials for generators inside it. It also commutes with $u_\nu$. Hence it commutes with $m_\nu$ and preserves $E=\operatorname{im}A_\nu$.

The eigenvalues on $f_s$ are the elementary symmetric functions of the residue multiset of its prefix shape. Distinct multipartitions have distinct residue multisets over $K_0$: independence of the $U_a$ separates components; within a component the multiplicity of $U_a z^c$ is the number of nodes on content diagonal $c$. These diagonal counts recover the partition. For $c\ge0$ they count Frobenius arms of length at least $c$; for $c\le0$ they count legs of length at least $-c$. The two sorted arm/leg lists recover the Frobenius coordinates, hence the partition. Elementary symmetric functions determine a finite multiset through its monic polynomial. Consequently the collection of these operators separates the chains $\boldsymbol\lambda(T)$.

Order semistandard tableaux by any linear extension of dominance of their row-prefix shapes, placing larger chains later. On the ordinary Murphy basis every JM polynomial is triangular for tableau dominance. The transition to the monic $f_s$ basis is also triangular; whenever $r\triangleright s$, every prefix shape, in particular each row-end shape, weakly dominates the old one. Grouping by row chains therefore gives a filtration whose associated graded chain piece consists of precisely the $f_s$ in that fibre. Every row-prefix symmetric operator acts on that piece by its chain scalar. The supplied basis of $E$ is $(w_T)_T$, and each $w_T$ has its coefficient-one support in exactly its fibre. Thus its action on $E$ is triangular in the chain order with diagonal the chain scalar. This argument does not assume that standard refinements of different fibres form contiguous intervals in the full tableau order.

Commuting diagonalizable operators can be jointly projected onto each chain eigenspace. Explicitly, for each competing chain choose one operator whose eigenvalue differs from the desired chain and multiply the corresponding Lagrange factors; all operators commute. On the ambient $f_s$ basis this projector $E_T$ is exactly one on the fibre of $T$ and zero on all other fibres. Its restriction to $E$ is triangular with diagonal one at $T$ and zero elsewhere. Therefore

$$g_T=w_T E_T=w_T+\sum_{U:\boldsymbol\lambda(U)>\boldsymbol\lambda(T)}a_{TU}w_U.$$

The $g_T$ form a basis of $E$, each chain eigenspace in $E$ has dimension one, and the transition matrix from $(w_T)$ to $(g_T)$ is upper unitriangular. Its determinant is **exactly one in $K_0$**, irrespective of any denominators in its off-diagonal entries. The $g_T$ are mutually orthogonal: differing chains are separated by a selfadjoint row-prefix operator, so $(a-b)b_\lambda(g_T,g_U)=0$ with $a\ne b$.

This closes the transition-determinant calculation over the universal generic field. It is stronger than a generic rank count and does not discard an unknown lattice index.

## 2. Normalization by the minimal refinement

Let $t_T$ be the dominance-minimal standard refinement of $T$ and put

$$c_T=[f_{t_T}](f_{t_T}x_\nu).$$

Existence of a unique minimal refinement can be seen directly: in each type-row class place the next increasing interval into its nodes in reverse physical-component order, then reverse row order, then left-to-right order. At every intermediate prefix this chooses the latest available node in the multipartition dominance order. The horizontal-strip/column-strict condition makes these choices standard. Exchanging two labels contrary to this order increases the first differing prefix, which proves minimality and uniqueness.

The scalar of $u_\nu$ on $f_s$ depends only on the component-boundary prefix multisets, so on a refinement of $T$ it is

$$u_T=\prod_{k=2}^{\ell}\prod_{r=1}^{B_{k-1}}(\operatorname{res}(t_T^{-1}(r))-U_k).$$

It is nonzero universally because the flag condition places every such entry in a physical component strictly earlier than $k$. Commutation gives $f_{t_T}x_\nu=u_T^{-1} f_{t_T}m_\nu\in E$. Since $x_\nu$ commutes with all row-prefix symmetric operators, this vector lies in the one-dimensional chain-$T$ eigenspace, and hence is a scalar multiple of $g_T$.

Whenever $c_T\ne0$, the scalar is exactly $c_T$, and

$$g_T=c_T^{-1}f_{t_T}x_\nu.\tag{N}$$

To check the normalization, compare the coefficient at $v_{t_T}$. It is one in $g_T$: the coefficient-one $w_T$ has that coefficient, and every higher chain has none of its refinements equal to $t_T$. In $f_{t_T}x_\nu$, the coefficient at $v_{t_T}$ equals its $f_{t_T}$ coefficient. There is no smaller standard refinement in the same chain, and the chain-$T$ spectral support excludes all other chains. Triangularity of $f_s=v_s+\text{higher}$ therefore supplies the equality of those two coefficients. This proves (N), rather than declaring an unspecified proportionality constant a unit.

Using selfadjointness and $x_\nu^2=P_\nu x_\nu$ gives

$$b_\lambda(f_{t_T}x_\nu,f_{t_T}x_\nu)=P_\nu b_\lambda(f_{t_T},f_{t_T}x_\nu)=P_\nu c_T\gamma_{t_T}.$$

Since $A_\nu g_T=P_\nu u_Tg_T$, the inverse-operator formula yields the Schur norm

$$\langle g_T,g_T\rangle_{\mathrm{Schur}}=\frac{\gamma_{t_T}}{c_Tu_T}.$$

The monic transition proved above consequently gives the exact generic determinant

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{c_Tu_T}.\tag{G}$$

Here nonvanishing of each $c_T$ is a separate symmetrizer coefficient calculation, owned by the J constructor. Formula (G) is conditional on it; this note does not silently assume the row projection of an arbitrary spectral line is nonzero.

## 3. Specialization boundary and the remaining cancellation

The J constructor has now supplied a local crossed-product derivation in `../jantzen-proof-construction/explicit-parabolic-factor-and-schur-gram-product.md`, which was read in full. Its exact expression is

$$c_T=\prod_{\substack{i<j\\i,j\text{ in the same type row}}}\frac{z\,c_j-c_i}{c_j-c_i},\qquad c_i=\operatorname{res}(t_T^{-1}(i)).\tag{X}$$

Formula (X) is a separately constructed local draft input subject to parent review, rather than an external quotation. Given that exact rational crossed-product derivation, all denominators and numerators are visibly nonzero in the LM generic field: nodes of a horizontal strip in one physical component have distinct contents; in either order two nodes in different rows have absolute content difference at least two, while within one row contents increase. Thus $c_i\ne c_j$ and $c_i\ne zc_j$ for an ordered pair $i<j$. For distinct physical components the absolute content difference of two occupied nodes is at most the sum of their component sizes minus two, hence at most $n-2$; the additional exponent shift by one still cannot cancel $n(a-b)$. This also works in positive characteristic because unequal Laurent exponents cannot give a zero rational function. The addable-node denominators defining the monic $f_t$ are nonzero by the parent's generic first-divergence separation proof.

Accordingly (N), rather than the universal chain projectors, provides a specialization with no vanishing denominators into every permitted $F(t)$ given the sibling proof of (X). The universal zero/one transition coefficients and orthogonality identities then specialize literally. One need not prove that the chosen universal interpolation denominators for entire row chains remain nonzero after specialization. No division by $P_\nu$ or $c_T$ occurs in the integral lattice $O$; these are solely generic proof operations.

With the sibling construction of (X), the outstanding target becomes the precise uniform combinatorial identity

$$\sum_T\bigl(\nu_\pi(\gamma_{t_T})-\nu_\pi(c_T)-\nu_\pi(u_T)\bigr)=\sum_\mu J_{\lambda\mu}K_{\mu\nu}.\tag{R}$$

The existing Specht seminormal norm recurrence can evaluate each $\gamma_{t_T}$, but neither that recurrence nor the proved determinant-one transition establishes (R). A full alternation into equal-length rim hooks, with their foot residues and leg signs, is still required. The arbitrary-field binomial valuation leaf applies to the factors after that cancellation and must retain higher positive-characteristic valuations. No complete Schur Jantzen formula or native24 closure is claimed by this packet.
