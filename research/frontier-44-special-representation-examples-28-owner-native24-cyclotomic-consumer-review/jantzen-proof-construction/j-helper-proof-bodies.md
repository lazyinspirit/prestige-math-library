# lem-dvr-cellular-jantzen-filtration-and-gram-valuation

## Statement

Let O be a DVR with uniformizer pi and residue field F. Let M be a finite free O-module with an O-valued bilinear pairing b whose scalar extension to Frac(O) is nondegenerate. Set M(s)={x:b(x,M) subset pi^s O} and M_F^s=(M(s)+pi M)/pi M. Then M_F^0=M/pi M, M_F^1=rad(b_F), the filtration terminates, and sum_{s>0}dim_F M_F^s=nu_pi(det G) for any Gram matrix G. If A acts on M with anti-involution * and b(ax,y)=b(x,a* y), all M(s), and hence M_F^s, are submodules. If M_F is a cellular standard module with nonzero cellular form, rad(b_F) is its unique maximal submodule and therefore its module radical.


## Complete local proof

**Statement.** Let O be a DVR with uniformizer pi and residue field F. Let M be a finite free O-module with an O-valued bilinear pairing b whose scalar extension to Frac(O) is nondegenerate. Set M(s)={x:b(x,M) subset pi^s O} and M_F^s=(M(s)+pi M)/pi M. Then M_F^0=M/pi M, M_F^1=rad(b_F), the filtration terminates, and sum_{s>0}dim_F M_F^s=nu_pi(det G) for any Gram matrix G. If A acts on M with anti-involution * and b(ax,y)=b(x,a* y), all M(s), and hence M_F^s, are submodules. If M_F is a cellular standard module with nonzero cellular form, rad(b_F) is its unique maximal submodule and therefore its module radical.

**Proof.** View the form as an O-linear map phi:M -> M*=Hom_O(M,O), x -> b(x,-). Its determinant is nonzero, so it has full rank. A direct Smith reduction needs no characteristic restriction: choose a nonzero matrix entry of least valuation, move it to the upper-left corner, and multiply its row by a unit to make it pi^a. Every entry is divisible by pi^a. Row and column subtraction eliminate its column and row, leaving a smaller matrix over O. Iterate. Since all elimination coefficients belong to O and every operation is invertible over O, this gives independent bases of M and M* in which phi sends u_j to pi^{a_j}v_j, with all a_j>=0. Thus

$$M(s)=\bigoplus_j\pi^{\max(0,s-a_j)}O u_j,\qquad \dim_F M_F^s=\#\{j:a_j\ge s\}.$$

Consequently M_F^s=0 for s>max_j a_j and sum_{s>0}dim M_F^s=sum_j a_j=nu_pi(det G). Reduction mod pi shows directly that M(1)/its reduction consists of exactly the vectors orthogonal to every vector of M_F, proving M_F^1=rad(b_F). Contravariance gives b(ax,y)=b(x,a*y) in pi^s O whenever x in M(s), proving stability.

For the last assertion use the defining cellular multiplication, not merely the word cellularity: in the standard module, for every basis label u and label v the corresponding cell element acts as w -> b_F(v,w)u (with left/right conventions transposed if necessary). If a submodule N contains w outside rad(b_F), choose v with b_F(v,w) !=0. Every basis vector u belongs to N by this rank-one action, so N=M_F. Therefore every proper submodule is contained in rad(b_F). The radical itself is proper because the form is nonzero, and the same argument shows the quotient is simple. It is the unique maximal submodule and equals the module radical. This completes the proof, including characteristic 2: the Smith reduction uses different domain and codomain bases, never diagonalization of a symmetric form.


# lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes

## Statement

In Leaf A suppose 1=sum_nu e_nu is a finite decomposition into pairwise orthogonal idempotents of A, with e_nu*=e_nu. Write M_nu=e_nu M and G_nu for the restricted Gram matrix. Then each M_nu is finite free, each restricted generic form is nondegenerate, and

$$\sum_{s>0}\dim_F e_\nu M_F^s=\nu_\pi(\det G_\nu).$$

For a split finite-dimensional highest-weight algebra S_F whose standard classes [Delta(mu)] form a Z-basis of K0, if the matrix K_{mu nu}=dim e_nu Delta(mu) has a square unitriangular submatrix indexed by partition weights, then the weight-character map ch:K0 -> Z^{weights}, [N] -> (dim e_nu N)_nu is injective. It follows that a class equality involving Jantzen pieces is equivalent to the corresponding equalities of weight Gram valuations.


## Complete local proof

**Statement.** In Leaf A suppose 1=sum_nu e_nu is a finite decomposition into pairwise orthogonal idempotents of A, with e_nu*=e_nu. Write M_nu=e_nu M and G_nu for the restricted Gram matrix. Then each M_nu is finite free, each restricted generic form is nondegenerate, and

$$\sum_{s>0}\dim_F e_\nu M_F^s=\nu_\pi(\det G_\nu).$$

For a split finite-dimensional highest-weight algebra S_F whose standard classes [Delta(mu)] form a Z-basis of K0, if the matrix K_{mu nu}=dim e_nu Delta(mu) has a square unitriangular submatrix indexed by partition weights, then the weight-character map ch:K0 -> Z^{weights}, [N] -> (dim e_nu N)_nu is injective. It follows that a class equality involving Jantzen pieces is equivalent to the corresponding equalities of weight Gram valuations.

**Proof.** The decomposition M=sum e_nu M is direct, and each summand is a direct summand of a finite free O-module, hence free: choose generators, use the preceding DVR elimination on the inclusion, or the fact that a submodule of a finite free module over the DVR is free. For nu!=rho, b(e_nu x,e_rho y)=b(x,e_nu e_rho y)=0. A vector in M_nu,K orthogonal to its summand is orthogonal to all summands and is zero by generic nondegeneracy. Thus the restricted form is nondegenerate. Orthogonality gives M(s)=direct sum M_nu(s), and reduction respects this direct sum. Leaf A applied to M_nu proves the displayed equality.

Each functor N -> e_nu N is exact: injectivity and kernels follow by restriction, and a lift of y=e_nu y in a quotient can be replaced by e_nu x. Thus ch is additive and defined on K0. Write an element as sum_mu a_mu[Delta(mu)]. Its coordinates on the partition weights are the integer row vector a multiplied by a unitriangular matrix K. This matrix is invertible over Z by finite triangular elimination. If the character is zero, a=0. Apply this injectivity to sum_s [Delta(lambda)^s] - sum_mu J_{lambda mu}[Delta(mu)] and use the valuation equality just proved. No Schur functor, residue-sequence character, rationalization, or semisimple Hecke Grothendieck group is used.


# lem-laurent-binomial-valuation-at-one-over-any-field

## Statement

For nonzero A,B in F and integers u,v, the valuation of A t^u-B t^v is zero if A!=B. If A=B and N=u-v!=0, it is 1 in characteristic zero, and p^{v_p(|N|)} in characteristic p>0. If A=B and N=0 the polynomial is zero and does not have finite valuation.


## Complete local proof

**Statement.** For nonzero A,B in F and integers u,v, the valuation of A t^u-B t^v is zero if A!=B. If A=B and N=u-v!=0, it is 1 in characteristic zero, and p^{v_p(|N|)} in characteristic p>0. If A=B and N=0 the polynomial is zero and does not have finite valuation.

**Proof.** Multiplication by B t^v is a unit, so reduce to (A/B)t^N-1. If A/B!=1 its value at t=1 is nonzero. When A=B replace negative N by -N by multiplying by the unit -t^N. If char F=0, t^N-1=(t-1)(1+t+...+t^{N-1}), and the second factor evaluates to N!=0. In characteristic p, write N=p^r m with p not dividing m. Frobenius gives t^N-1=(t^m-1)^{p^r}; the same geometric-series factor for t^m-1 evaluates to the nonzero element m. The valuation is p^r. The zero case is immediate.

In the intended J expression, foot residues are Q_a q_H^{j-i} t^{na+j-i}. This leaf computes their difference exactly when it is nonzero and prevents replacing valuations by an equality-of-residues indicator in positive characteristic.


# lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms

## Statement

Use the actual arbitrary-level Murphy/Schur datum over the universal Laurent ring and generic field, or LM deformation z=q_Ht,U_a=Q_at^(na) over ANY field F. For every shape λ and ACTUAL multipartition Schur weight ν, det Gλν=∏_(T∈SStdν(λ))γ_tT/(C_tT u_T), empty determinant1. Here tT is the dominance-MINIMAL refinement, C_t=∏_(i<j in same type row)(z r_t(j)−r_t(i))/(r_t(j)−r_t(i)), and u_T=∏_x∏_(b>typecomponent_T(x))(r_x−U_b). The monic transition determinant is exactly1. The initialγ and adjacent standard-swap recurrence, and its equivalent explicit boundary/C/R node-pair norm product, are defined and proved in the strategy. All factors are nonzero in the stated generic fields; no quantum factorial is inverted in the O-lattice. Arbitrary-composition series are auxiliary only.

## Complete local proof

Use the exact declared Q/Murphy/S2 and generic-nondegeneracy suppliers. Actual Schur weights are multipartitions only; arbitrary composition series are auxiliary. The complete inverse form, monic transition, explicit symmetrizer/norm computation and pair cancellation follow.

## 1. Inputs and conventions

Let $F$ be any field, $q_H\in F^\times$ have order $e\ge2$, and let $Q_a=q_H^{c_a}$ at arbitrary level $\ell$. For fixed $n$, use $O=F[t,t^{-1}]_{(t-1)}$, $\pi=t-1$, $K=F(t)$, $z=q_Ht$, and $U_a=Q_at^{na}$. All generic calculations below take place over $K$, followed by the actual valuation on $K^\times$; no characteristic-zero specialization is used.

Use the Murphy form $b_\lambda$ on the generic Specht module $V_\lambda$, with basis $v_s$ indexed by standard tableaux. Write $v_0=v_{t^\lambda}$. In its generic simple matrix block, a Murphy cell element is the rank-one operator

$$m_{st}^\lambda(x)=v_s b_\lambda(v_t,x).$$

Here operators are written on column vectors. The right-module convention is obtained by transposing every operator and reversing composition; it produces the same scalar Gram entries. The higher Murphy ideal acts by zero on this block. Generic nondegeneracy and distinct JM words are inputs from the parent's reviewed Murphy construction, not conclusions of the present note.

For a Schur weight $\nu$, set

$$B_k=\sum_{a\le k}|\nu^{(a)}|,\qquad u_\nu=\prod_{k=2}^{\ell}\prod_{r=1}^{B_{k-1}}(L_r-U_k),\qquad x_\nu=\sum_{w\in\mathfrak S_\nu}T_w,\qquad m_\nu=u_\nu x_\nu.$$

Let $A_\nu$ be the action of $m_\nu$ on $V_\lambda$. For each semistandard tableau $T$ of shape $\lambda$ and type $\nu$, put

$$w_T=\sum_{s:\nu(s)=T}v_s.$$

These are literal sums in the supplied coefficient-one Murphy convention. In a different normalized Murphy convention the same proof uses the actual coefficients in its $m_{(T,t^\lambda)}$ instead.

The supplied integral membership construction gives an actual $h_T\in H_O$ with

$$m_\nu h_T=m_{(T,t^\lambda)}.$$

The actual Schur cellular map $\varphi_{ST}:M^{\operatorname{type}(T)}\to M^{\operatorname{type}(S)}$ sends its generating $m_{\operatorname{type}(T)}$ to $m_{ST}$. This map basis and its cellular product are parent-owned inputs; nothing in this note supplies the missing S2 construction if that input is not established.

## 2. Generic diagonalizability of the relevant operator

Write

$$P_\nu(z)=\sum_{w\in\mathfrak S_\nu}z^{\ell(w)}=\prod_{\text{rows }R\text{ of }\nu}\prod_{j=1}^{|R|}(1+z+\cdots+z^{j-1}).$$

The finite row-coset identity gives $x_\nu^2=P_\nu x_\nu$. Every factor of $P_\nu(q_Ht)$ is a nonzero polynomial, over every $F$, so $P_\nu\ne0$ in $K$. Thus $x_\nu/P_\nu$ is a selfadjoint idempotent. The polynomial $u_\nu$ is symmetric separately on the initial component intervals, hence commutes with every row generator and with $x_\nu$. Both are selfadjoint.

Distinct generic JM words provide a basis of simultaneous JM eigenvectors. On the eigenline labelled by $s$, $u_\nu$ has eigenvalue

$$d_s=\prod_{k=2}^{\ell}\prod_{r=1}^{B_{k-1}}(\operatorname{res}_O(s^{-1}(r))-U_k).$$

It is therefore diagonalizable, including when different $s$ give the same $d_s$. Since $x_\nu$ commutes with $u_\nu$, each $u_\nu$ eigenspace is stable under the idempotent $x_\nu/P_\nu$ and splits into its image and kernel. Consequently $A_\nu$ is diagonalizable. Its nonzero eigenspaces have eigenvalues

$$\alpha=P_\nu d_s\ne0.$$

This statement needs no division by a specialized quantum factorial in $O$: all inverses in this section are exclusively in the generic field $K$.

Set $E=\operatorname{im}A_\nu$. Diagonalizability gives $V_\lambda=E\oplus\ker A_\nu$, and selfadjointness makes this decomposition orthogonal. Generic nondegeneracy of $b_\lambda$ makes $b_\lambda|_E$ nondegenerate. The restriction $A_\nu|_E$ is invertible and selfadjoint. The supplied semistandard permutation-module basis identifies the $\lambda$ cell layer of $m_\nu H$ with the span of the tensors $w_T\otimes v_s$. In the generic simple block this says exactly that $(w_T)_T$ is a basis of $E$. In particular $\dim E=K_{\lambda\nu}$; this uses the actual basis, not a dimension analogy.

## 3. Exact inverse-operator Gram formula

Let $G_{\lambda\nu}$ be the Schur cellular Gram matrix on the type-$\nu$ basis of $\Delta_O(\lambda)$. Then, as an equality in $K$,

$$G_{\lambda\nu}(T,U)=b_\lambda\bigl(w_T,(A_\nu|_E)^{-1}w_U\bigr).\tag{I}$$

**Proof.** The cell quotient of the membership identity is

$$A_\nu\,\rho(h_U)=w_U b_\lambda(v_0,-).$$

Orthogonal projection $p_E$ to $E$ therefore gives

$$p_E\rho(h_U)=(A_\nu|_E)^{-1}w_U b_\lambda(v_0,-).$$

Because $w_T\in E$, its pairing with $\ker A_\nu$ is zero. Hence

$$m_{(t^\lambda,T)}\rho(h_U)=v_0 b_\lambda\bigl(w_T,(A_\nu|_E)^{-1}w_U\bigr)b_\lambda(v_0,-).$$

On the Schur side, compose the map $M^\lambda\to M^\nu$ sending $m_\lambda$ to $m_{(U,t^\lambda)}=m_\nu h_U$ with the map $M^\nu\to M^\lambda$ sending $m_\nu$ to $m_{(t^\lambda,T)}$. Its value at $m_\lambda$ is precisely $m_{(t^\lambda,T)}h_U$. By the Schur cell law, modulo higher shapes this is $G_{\lambda\nu}(T,U)m_\lambda$. Comparing with the preceding rank-one operator proves (I), since $m_\lambda$ has nonzero generic rank-one action. Higher Schur maps evaluate to higher Murphy shapes and therefore vanish on this block. Changing the choice of $h_U$ changes its action only by a map into $\ker A_\nu$, which the $w_T$ pairing kills. Thus the formula is well-defined.

The formula does not identify the Schur form with the restriction of the Specht form: it inserts the essential inverse $A_\nu^{-1}$. For example, in the one-row level-one case, $A_\nu=P_\nu$ and $b_\lambda(v_0,v_0)=P_\nu$, so the type-$\lambda$ Schur Gram entry is $1$, as required. For the regular weight $\omega$, $m_\omega=1$, and (I) gives precisely the Specht form. These normalizations follow algebraically; they are not finite evidence for J.

## 4. An exact determinant with all basis-change factors retained

Decompose $E=\bigoplus_{\alpha\ne0}E_\alpha$ into $A_\nu$ eigenspaces. They are mutually orthogonal and their restricted forms are nondegenerate. Choose any $K$-basis $\mathcal B_\alpha$ of each $E_\alpha$, let $H_\alpha$ be its $b_\lambda$ Gram matrix, and let $C$ be the coordinate matrix whose columns are $w_T$ in the concatenated basis $\mathcal B=\bigsqcup_\alpha\mathcal B_\alpha$. Then (I) gives

$$G_{\lambda\nu}=C^{\mathsf T}\operatorname{diag}_\alpha(\alpha^{-1}H_\alpha)C,$$

and therefore

$$\det G_{\lambda\nu}=(\det C)^2\prod_{\alpha\ne0}\alpha^{-\dim E_\alpha}\det H_\alpha.\tag{D}$$

In particular,

$$\nu_\pi(\det G_{\lambda\nu})=2\nu_\pi(\det C)+\sum_{\alpha\ne0}\nu_\pi(\det H_\alpha)-\sum_{\alpha\ne0}(\dim E_\alpha)\nu_\pi(\alpha).\tag{V}$$

This is a full determinant proof from (I): determinant multiplicativity and $\det C^{\mathsf T}=\det C$ give (D), and additivity of the DVR valuation gives (V). Individual terms can have negative valuations, while the total is nonnegative because the original Schur Gram matrix is integral. Empty weight spaces use empty determinant $1$ and contribute zero.

No diagonalization of a symmetric form is used, so characteristic $2$ presents no extra issue. Each $H_\alpha$ can be left as a nonsingular block. Changing the basis by $R_\alpha$ multiplies $\det H_\alpha$ by $(\det R_\alpha)^2$ and divides $\det C$ by $\prod\det R_\alpha$; these contributions cancel exactly. Thus (V) is independent of the arbitrary choices.

The spectral bases are computable by finite linear algebra, without a new theorem: first form the simultaneous JM projectors by Lagrange interpolation in the distinct full JM words; sum projectors having the same $d_s$; apply $x_\nu/P_\nu$; select independent columns. Express the known coefficient-one $w_T$ in those columns and compute $C$. This supplies an exact rational algorithm for every fixed input; the following sections evaluate the monic transition and individual norms uniformly.


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

The explicit symmetrizer calculation below proves each c_T is nonzero and supplies its exact value, completing formula (G).

## 3. Specialization of the exact monic basis

The J constructor has now supplied a local crossed-product derivation in `../jantzen-proof-construction/explicit-parabolic-factor-and-schur-gram-product.md`, which was read in full. Its exact expression is

$$c_T=\prod_{\substack{i<j\\i,j\text{ in the same type row}}}\frac{z\,c_j-c_i}{c_j-c_i},\qquad c_i=\operatorname{res}(t_T^{-1}(i)).\tag{X}$$

The exact rational crossed-product derivation below proves formula (X). Consequently all denominators and numerators are visibly nonzero in the LM generic field: nodes of a horizontal strip in one physical component have distinct contents; in either order two nodes in different rows have absolute content difference at least two, while within one row contents increase. Thus $c_i\ne c_j$ and $c_i\ne zc_j$ for an ordered pair $i<j$. For distinct physical components the absolute content difference of two occupied nodes is at most the sum of their component sizes minus two, hence at most $n-2$; the additional exponent shift by one still cannot cancel $n(a-b)$. This also works in positive characteristic because unequal Laurent exponents cannot give a zero rational function. The addable-node denominators defining the monic $f_t$ are nonzero by the parent's generic first-divergence separation proof.

Accordingly (N), rather than the universal chain projectors, provides a specialization with no vanishing denominators into every permitted $F(t)$ given the sibling proof of (X). The universal zero/one transition coefficients and orthogonality identities then specialize literally. One need not prove that the chosen universal interpolation denominators for entire row chains remain nonzero after specialization. No division by $P_\nu$ or $c_T$ occurs in the integral lattice $O$; these are solely generic proof operations.


## 1. Exact affine symmetrizer identity

Let z be an invertible indeterminate. For a contiguous row interval I of length k, let x_I=sum_{w in S_I}T_w in the affine Hecke algebra. Let X_i be the commuting affine variables. Work temporarily in the fraction field in the X's, and write

$$c_{ij}=\frac{(z-1)X_j}{X_j-X_i},\qquad d_{ij}=\frac{X_j-zX_i}{X_j-X_i},\qquad T_i=c_{i,i+1}+d_{i,i+1}s_i.$$

The Q-S1 affine PBW construction verifies this faithful crossed-product representation. Its use here introduces only a rational calculation of a finite Hecke element, not a new integral membership or flatness assertion. Then the coefficient of the identity permutation in x_I is exactly

$$C_I(X)=\prod_{\substack{i<j\\i,j\in I}}\frac{zX_j-X_i}{X_j-X_i}.$$

**Full proof.** Write x_I=sum_w a_w w in the rational crossed product. The finite row-coset pairing of w and s_iw proves T_i x_I=z x_I for each row generator: if length(s_iw)=length(w)+1, then T_i(T_w+T_{s_iw})=z(T_w+T_{s_iw}) by the quadratic relation. Compare the coefficient of w in this equality. It reads c_i a_w+d_i s_i(a_{s_iw})=z a_w. Since z-c_i=d_i and d_i is a nonzero rational function, this gives a_{s_iw}=s_i(a_w). Induction yields a_w=w(a_1).

The coefficient of the longest row permutation w_0 in sum_w T_w comes only from T_{w_0}: every other word has smaller length and cannot contain w_0 in its crossed-product expansion. Choose a reduced expression for w_0. Selecting the d_i s_i term at every position gives the product of d_{ij} over all positive roots i<j in that row interval, because the roots crossed by a reduced longest word are precisely those pairs, each once. This last elementary permutation fact can be verified by induction: moving the largest entry across k-1 smaller entries produces the roots involving it, and apply induction on k-1 to the remaining entries. Therefore w_0(a_1)=product_{i<j} (X_j-zX_i)/(X_j-X_i). Apply w_0 to both sides; it reverses every ordered pair, giving a_1=C_I(X). This proves the formula. Disjoint row intervals commute, so the identity coefficient of x_nu=product_I x_I is product_I C_I(X).

## 2. The same coefficient on a seminormal vector

Let V_lambda be the generic Specht cell module with its ACTUAL Murphy cell form b_lambda. Its seminormal basis is normalized f_t=v_t+sum_{s strictly dominates t}a_s v_s, with joint JM word r_t(i)=U_{component_t(i)}z^{content_t(i)}. Fix a semistandard tableau T of type nu and its dominance-MINIMAL standard refinement t=t_T. For every type-row interval I, the residues r_t(i), i in I, are distinct. In one physical component the nodes assigned a fixed row label form a horizontal strip; such a strip has no two nodes of equal content. To verify this, if two nodes (a,b),(a+h,b+h) had the same content, the upper new node would force the lower row's old length to be less than b+h, but the upper row's old length is at least that lower length, and the horizontal-strip interlacing condition requires the lower new row length to be at most the old upper row length, which conflicts with the upper node also being new. Equivalently, for a horizontal-strip addition kappa⊂rho, rho_{j+1}≤kappa_j; nodes in row j+1 have column ≤kappa_j, whereas new nodes in row j have column >kappa_j. Thus lower new nodes have strictly smaller content. Distinct physical components have distinct generic U-parameters. Under LM's deformation, two nodes in different components of the fixed size-n shape have content difference at most size(component a)+size(component b)-2≤n-2, so t-exponent difference n(a-b)+content difference is nonzero. All required differences are invertible over F(t), in every characteristic.

Set Phi_i=T_i-c_i. Bernstein commutation gives Phi_i f=s_i(f)Phi_i. The Phi_w for reduced w form a basis over the ring localized at the variable differences: each Phi_w is T_w plus smaller Bruhat terms, so the transition matrix is unitriangular; braid independence also follows from the faithful crossed-product representation. Consequently x_I can be expanded as C_I(X)+sum_{w!=1} b_w(X)Phi_w, with b_w having only variable-difference denominators. Indeed the identity coefficient in the crossed product is exactly its Phi_1 coefficient because Phi_w has just the crossed-product permutation w. This argument does NOT divide by d_{ij}, which may evaluate to zero on a particular tableau.

Restrict to the JM eigenword subspace with the fixed multiset of residues in each type-row interval. It is invariant under the row generators, since Bernstein commutation allows only interchange of adjacent row entries. All differences inside each such interval are invertible on this subspace, so the localized equality acts legitimately. For w!=1, Phi_w, if nonzero on f_t, changes its distinct row entries by w and hence gives a different JM word. It therefore has zero diagonal coefficient at f_t. The diagonal coefficient of f_t x_nu is exactly

$$C_t=\prod_{I\text{ a type-row interval}}\ \prod_{\substack{i<j\\i,j\in I}}\frac{z r_t(j)-r_t(i)}{r_t(j)-r_t(i)}.$$

This remains true if an intertwiner annihilates f_t; no inverse of that intertwiner was introduced. It is also independent of selecting an auxiliary characteristic-zero specialization.

## 3. Completely explicit Specht norm algorithm

The numbers gamma_t=b_lambda(f_t,f_t) can be computed from the proved Murphy/JM data without leaving an unspecified structure constant in the determinant product.

For the initial row-reading tableau t^lambda, f_{t^lambda}=v_{t^lambda}, and

$$\gamma_{t^\lambda}=P_\lambda(z)\prod_{a=1}^{\ell}\ \prod_{x\in[\lambda^{(a)}]}\ \prod_{b>a}(U_a z^{\operatorname{content}(x)}-U_b),\qquad P_\lambda(z)=\prod_{\text{rows }r\text{ of }\lambda}[|r|]_z!.$$

**Proof of the initial value.** The cellular Gram entry is the coefficient of m_lambda in m_lambda^2 modulo higher shapes. The initial cell vector is the greatest standard tableau, so the JM triangular action has no higher terms and gives its residue word exactly. Every row generator acts on it by z, whence x_lambda acts by P_lambda(z). The polynomial u_lambda acts by the displayed residue product. Since m_lambda=x_lambda u_lambda, the cell coefficient is their product. This argument uses the actual fixed Murphy-cell normalization.

Suppose t strictly dominates s=t(i,i+1), with s standard. Put A=r_t(i), B=r_t(i+1). Then

$$\gamma_s=\gamma_t\,\frac{(zB-A)(B-zA)}{(B-A)^2}.$$

**Proof of the recurrence.** Bernstein commutation shows that f_t T_i has support only on f_t and f_s, because its off-diagonal term swaps those two JM eigenvalues. Its diagonal coefficient is a_t=(z-1)B/(B-A); the swapped diagonal coefficient is a_s=(z-1)A/(A-B), so a_t+a_s=z-1. The off-diagonal coefficient from f_t to f_s is1 in the fixed monic normalization. To verify it, the length-additive Murphy equality v_t T_i=v_s holds since t is more dominant and d(s)=d(t)s_i has greater length. Project to the s-word. In the expansion v_t=sum_{u>=t}a_u f_u with a_t=1, the only u that can reach the s-word under T_i is u=t or u=s; the latter is absent because s<t. Thus v_t T_i F_s=f_t T_i F_s. But v_s F_s=f_s by its monic normalization, proving coefficient1.

Write the reverse off-diagonal coefficient as b_s. The quadratic relation gives b_s=z+(z-1)a_t-a_t^2=(z-a_t)(1+a_t)=(B-zA)(zB-A)/(B-A)^2. Contravariance and orthogonality yield gamma_s=b_s gamma_t, proving the formula. The denominator is nonzero: a permitted standard swap concerns incomparable nodes; equal-content nodes in one component are comparable, and distinct components of a fixed shape have distinct generic residues as above.

Every standard tableau is obtainable from t^lambda by a sequence of adjacent swaps of incomparable entries that monotonically increases the permutation length. One explicit construction is to view standard tableaux as linear extensions of the Young-node order, with t^lambda as the fixed row-reading extension. Bubble-sort the desired extension toward this fixed extension, swapping adjacent inversions; those inverted elements are incomparable, since comparable elements have the same relative order in both linear extensions. Reversing those swaps gives the required path. The norm recurrence along this finite path is an actual algorithm. Its product is independent of the chosen path because every factor was proved to equal a ratio of the same cell norms; no path-independence assertion replaces the proof.

## 4. The resulting actual Schur Gram determinant product

Let u_T denote the eigenvalue of u_nu on the row-prefix eigenline of T:

$$u_T=\prod_{x\in[\lambda]}\ \prod_{b>a_T(x)}\big(U_{\operatorname{component}(x)}z^{\operatorname{content}(x)}-U_b\big),$$

where a_T(x) is the TYPE component of the label of x, not its physical component. The flag condition has physical component(x)≤a_T(x); every b>a_T(x) is therefore a different physical component. In the LM deformation each factor is nonzero because |content(x)|≤n-1, so n(component(x)-b)+content(x) cannot vanish. The quantum row factorial P_nu(z) is likewise nonzero over F(t).

The sibling corrected the refinement convention during construction: t_T must be dominance-MINIMAL in its fibre. With f_t=v_t+more dominant terms, no smaller refinement exists to contribute to the coefficient of v_t; choosing a maximal refinement would not justify that coefficient comparison. With this corrected convention, the sibling inverse-pairing/eigenbasis proof gives a monic Schur weight eigenbasis g_T=w_T E_T with det transition1, normalized so f_{t_T}x_nu=C_{t_T}g_T. Its calculation gives

$$b_\lambda(g_T,g_T)=\frac{P_\nu(z)\gamma_{t_T}}{C_{t_T}},\qquad m_\nu g_T=P_\nu(z)u_T g_T.$$

The actual Schur form is b_lambda with inverse m_nu on its image, so its diagonal norm is gamma_{t_T}/(C_{t_T}u_T). Consequently, with the sibling normalization and Q bound as hypotheses, there is the explicit exact rational identity

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}u_T}.$$

All terms are explicit finite products: gamma is given by the initial product and adjacent-swap factors; C by the proved symmetrizer expression; u by the prefix product. The preceding inverse form and determinant-one transition prove this exact determinant formula.


## 1. An inversion-set formula for the actual seminormal norm

Fix a shape $\lambda$ and order its nodes by the initial physical row-reading order: first component, then row, then column. Write $x<y$ for this order and $r_x=U_{a(x)}z^{\operatorname{content}(x)}$. For a semistandard $T$, let $L_T(x)$ be its type-row label in the total type order (first type component, then its row). Within each equal-label class, the dominance-minimal standard refinement orders physical components and physical rows in reverse order, and the nodes inside a single physical row left-to-right. Write $t_T(x)$ for its resulting integer.

Define

$$C(A,B)=\frac{zB-A}{B-A},\qquad R(A,B)=\frac{(zB-A)(B-zA)}{(B-A)^2}.$$

The initial norm and the actual adjacent standard-swap recurrence from the J constructor give

$$\gamma_{t_T}=\gamma_{t^\lambda}\prod_{\substack{x<y\\t_T(x)>t_T(y)}}R(r_x,r_y).\tag{1}$$

**Proof.** Standard tableaux are linear extensions of the Young-node order. Bubble-sort the target extension toward the initial extension, swapping adjacent inverted nodes. Every swapped pair is incomparable: comparable nodes have the same order in both extensions. Each target inversion is swapped exactly once and no other pair is swapped. Reversing the swaps gives a standard path from $t^\lambda$ to $t_T$, along which the actual norm recurrence multiplies by $R$. The expression $R(A,B)$ is unchanged on exchanging $A,B$, as seen by reversing both numerator factors and the denominator. Thus its factor depends only on the unordered node pair, and the path gives exactly (1). This is an inversion-set evaluation, rather than an unspecified path algorithm.

Every factor is nonzero in the universal field and in the LM generic field. Incomparable nodes in one component have content difference of absolute value at least two: an upper incomparable node is strictly to the right of a lower node, giving at least one column plus one row difference. Distinct components of the fixed size-$n$ shape have content difference bounded by $n-2$, so neither that difference nor that difference shifted by one can cancel the exponent $n(a-b)$. No zero factor is canceled formally.

## 2. Cancel the component factors and the physical row factorials exactly

The initial component product divided by $u_T$ is

$$\frac{\gamma_{t^\lambda}}{u_T}=P_\lambda(z)B_T,\qquad B_T=\prod_{x\in[\lambda]}\prod_{a(x)<b\le a_T(x)}(r_x-U_b),\tag{2}$$

where $a_T(x)$ is the type component of its label. The flag condition $a(x)\le a_T(x)$ makes this a literal cancellation of nested finite products. No omitted denominator or unit remains.

For the nodes in one physical row of length $r$, their residues in row-reading order are $A_j=A_1z^{j-1}$. Hence

$$\prod_{i<j}C(A_i,A_j)=\prod_{d=1}^{r-1}\left(\frac{z^{d+1}-1}{z^d-1}\right)^{r-d}=\prod_{k=2}^{r}\frac{z^k-1}{z-1}=[r]_z!.$$

Each exponent on the middle expression is the number $r-d$ of pairs at column distance $d$. Subtracting the numerator and denominator exponents leaves exponent one for $z^k-1$, $2\le k\le r$, and exponent $-(r-1)$ for $z-1$, proving the displayed telescoping identity. Thus

$$P_\lambda(z)=\prod_{\substack{x<y\\x,y\text{ in the same physical row}}}C(r_x,r_y).\tag{3}$$

Now divide the monic norm product by the actual symmetrizer coefficient $C_{t_T}$. For each $x<y$ there are only the following cases.

* If the nodes are in the same physical row and have the same label, their order in $t_T$ is unchanged. The denominator contributes $C(r_x,r_y)$ and (3) cancels it; no inversion factor occurs.
* If they are in the same physical row and have different labels, row weakness forces $L_T(x)<L_T(y)$. The physical-row factor $C(r_x,r_y)$ remains, with no symmetrizer or inversion factor.
* If they are in different physical rows (including different components) and have the same label, the minimal refinement reverses their order. The numerator has the inversion factor $R(r_x,r_y)$ and the symmetrizer denominator has $C(r_y,r_x)=(r_y-zr_x)/(r_y-r_x)$. Their quotient is exactly $C(r_x,r_y)$.
* If they are in different physical rows and have different labels, there is no physical-row or symmetrizer factor. An inversion factor $R(r_x,r_y)$ occurs exactly when $L_T(x)>L_T(y)$.

This case division is exhaustive, and therefore the Schur norm is the exact rational product

$$\frac{\gamma_{t_T}}{C_{t_T}u_T}=B_T\prod_{(x,y)\in\mathcal C(T)}C(r_x,r_y)\prod_{(x,y)\in\mathcal I(T)}R(r_x,r_y),\tag{4}$$

where $\mathcal C(T)$ consists of pairs $x<y$ with either the same physical row and different labels, or different physical rows and the same label; and $\mathcal I(T)$ consists of pairs $x<y$ in different physical rows with $L_T(x)>L_T(y)$. Equal-label nodes in different rows of the same component form a horizontal strip, so their contents differ by at least two; within a physical row the contents strictly increase. These observations again exclude zero numerator/denominator factors in (4).

The determinant-one transition now gives

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}B_T\prod_{x<y}C(r_x,r_y)^{c_{xy}}R(r_x,r_y)^{i_{xy}},\tag{5}$$

with the explicit nonnegative integers

$$c_{xy}=\#\{T:(x,y)\in\mathcal C(T)\},\qquad i_{xy}=\#\{T:(x,y)\in\mathcal I(T)\}.$$

Also set $b_{xb}=\#\{T:a_T(x)\ge b\}$ for $a(x)<b$. Then $\prod_T B_T=\prod_x\prod_{b>a(x)}(r_x-U_b)^{b_{xb}}$. Formula (5) reduces the left side to three kinds of plain semistandard counts, with no uncomputed spectral norms, transitions, or permutations.


# lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums

## Statement

For ANY field F, arbitrary level ℓ, q_H∈F^× of finite order e≥2, charges Q_a=q_H^(c_a), fixed n≥0, O=F[t,t^−1]_(t−1), z=q_Ht,U_a=Q_at^(na), and every shape λ and ACTUAL multipartition Schur weight ν, V(det Gλν)=ΣµJλµKµν. Jλµ=0 unless λ strictly dominates µ; otherwise it is the sum over equal-length rim hooks removed from λ and µ to the SAME remainder, with sign (−1)^(leg λ+leg µ) and valuation V(res_O(foot λ)−res_O(foot µ)). Every difference is nonzero in F(t). The full signed marked-strip commutator and auxiliary coefficient identity are proved locally; arbitrary-composition coefficients are combinatorial only, not extra Schur modules.

## Complete local proof

Use the declared monic weight-Gram supplier and fixed final-rank-n LM parameters at every auxiliary rank. Polynomial and Γ series allowing arbitrary compositions are AUXILIARY only; all Schur determinant conclusions are for actual multipartition weights. The following complete beta/strip/rank case proofs establish the signed identity with no unresolved cancellation.

## 1. Characters as actual finite symmetric polynomials

Fix d>=n row labels per type component, with ordered variables x_(a,r), 1<=a<=ell,1<=r<=d. Put Y_a={x_(b,r):b>=a}, with the inherited order. For a shape lambda, Q's semistandard flag condition says that its physical component a is an ordinary semistandard tableau over alphabet Y_a. These components can be selected independently, so

$$\operatorname{ch}_\lambda(x)=\sum_{T\in\operatorname{SStd}(\lambda)}x^{\operatorname{wt}(T)}=\prod_{a=1}^{\ell}s_{\lambda^{(a)}}(Y_a).$$

The coefficient of x^nu is precisely K_{lambda nu}. This is the auxiliary nested-alphabet tableau character; coefficients at actual multipartition weights equal those of the Schur standards.

Here s_rho(Y)=det(h_{rho_i-i+j}(Y))_{1<=i,j<=N}, for any N>=length(rho), h_0=1,h_k=0 for k<0. For completeness this determinant equals the ordinary semistandard generating polynomial by a finite cancellation proof. A path from (-j,1) to (rho_i-i,m), using east and north unit steps and weighting an east step at height r by y_r, has generating polynomial h_{rho_i-i+j}(Y). Expand the determinant as signed families of these paths with permuted ends. Choose the first intersection in a fixed coordinate/lexicographic order and exchange the two tails after it. The exchange is an involution, preserves monomial weight, and reverses the end permutation's sign; thus all intersecting families cancel. In a nonintersecting family the planar order of the start and end points forces the identity matching, and the east-step heights in path i are the entries of row i. The offset by -i means nonintersection is exactly strict increase down columns, while east/north ordering gives weak increase along rows. Hence the surviving families are precisely semistandard tableaux with positive sign. This also proves the empty and short-row cases; paths of negative horizontal length do not exist. Thus no unproved Schur-character formula is being used as the cancellation sought below.

## 2. Generalized beta determinants and their signs

Choose N>=n, put beta_(a,i)=lambda_i^(a)+N-i (append zero parts), and for any nonnegative integer array v=(v_(a,i)) define

$$\chi(v;x)=\prod_{a=1}^{\ell}\det\big(h_{v_{a,i}-N+j}(Y_a)\big)_{1\le i,j\le N}.$$

If two entries in one component of v agree, its determinant has equal rows and is zero. Otherwise sort that component into strictly decreasing order v'_1>...>v'_N>=0. It determines a partition rho_i=v'_i-N+i: the distinct nonnegative entries imply v'_i>=N-i, and adjacent differences imply rho_i>=rho_(i+1). Permuting the determinant's rows gives

$$\chi(v;x)=\varepsilon(v)\prod_a s_{\rho^{(a)}}(Y_a),$$

where epsilon is the product of the sorting-permutation signs. These are literal determinant identities over Z[x]. In particular every coefficient is the signed Kostka multiplicity, including zero when a shifted beta array has a repeated bead.

A beta move from a bead v+L to an unoccupied position v removes a rim hook of length L. Its foot content is v-N+1, and its leg length is the number of beads strictly between v and v+L. Here is the elementary boundary argument, so this correspondence is not a citation: trace the southeast boundary of the partition as a sequence of horizontal/vertical unit steps, labelling successive positions by integers. Vertical steps correspond to the occupied beta positions lambda_i+N-i. Swapping the vertical step at v+L with the horizontal step at v cuts off the contiguous boundary strip between those steps. There are L boxes in that strip (one for every intervening boundary position), the vertical interior steps are exactly its leg increments, and the final vertical coordinate yields foot content v-N+1. Reversing this swap adds that strip. Equivalently, sorting the beta list after lowering one bead crosses exactly the rows occupied by those interior vertical steps, one transposition per leg box. Thus its permutation sign is (-1)^leg. The same proof applies to an addition from v to v+L, and also proves uniqueness of the rim hook from the source/target bead pair.

## 3. Finite alternating polynomial for the complete hook side

Write V(f)=nu_(t-1)(f) under the EXACT LM deformation z=q_H t,U_a=Q_a t^(na). Monomial factors in z and U_a are units and have valuation zero. In each sum below omit terms for which chi is the zero polynomial BEFORE evaluating V: a zero determinant cannot multiply an infinite valuation. The displayed factors on every nonzero retained term are nonzero by the foot-exponent separation proof. Define

$$\mathcal B_\lambda(x)=\sum_{1\le a<b\le\ell}\ \sum_{i,j=1}^N\ \sum_{h=1}^{\beta_{a,i}}\chi(\beta-h e_{a,i}+h e_{b,j};x)\,V(U_a z^{\beta_{a,i}-h}-U_b z^{\beta_{b,j}})+\sum_{a=1}^{\ell}\ \sum_{1\le i<j\le N}\ \sum_{h=1}^{\beta_{a,i}-\beta_{a,j}-1}\chi(\beta-h e_{a,i}+h e_{a,j};x)\,V(U_a z^{\beta_{a,i}-h}-U_a z^{\beta_{a,j}}).$$

**Proved identity.** This finite expression is exactly

$$\mathcal B_\lambda(x)=\sum_{\mu:\lambda\triangleright\mu}J_{\lambda\mu}\operatorname{ch}_\mu(x),$$

where J is the actual equal-length rim-hook, foot-residue valuation coefficient specified by LM.

**Full proof for crosscomponent terms.** Remove a hook of length h from physical component a by moving beta_(a,i) to beta_(a,i)-h. Add a hook of length h to component b by moving beta_(b,j) to beta_(b,j)+h. If a<b, removing h boxes earlier and adding them later gives lambda strictly dominating the result: within a the removed diagram is a subdiagram, between a and b the total deficit is h, and within b no initial-row increase can exceed h. If a>b the earlier component instead gains h, so lambda cannot dominate the result and that term is absent from J. Every permitted pair of hooks in different components occurs once by the unique bead description.

If a source removal target is occupied, the shifted array in component a has repeated entries and chi=0. The same holds if the addition target is occupied in component b. Conversely a nonzero shifted determinant means both targets are unoccupied, and both moves are valid hooks. The range h<=beta_(a,i) guarantees the lowered position is nonnegative. This range contains every actual removal; an h exceeding the component's size cannot leave N distinct nonnegative beads because their sum would be below N(N-1)/2, so these spurious terms also have chi=0. Sorting the shifted arrays has sign (-1)^(removed leg+added leg), by §2. The foot contents are beta_(a,i)-h-N+1 and beta_(b,j)-N+1. Their deformed residue difference is z^(-N+1)(U_a z^(beta_(a,i)-h)-U_b z^beta_(b,j)). The prefactor is a unit, giving exactly the valuation in the displayed crosscomponent sum. Every such contribution therefore agrees with its full J summand, with its sign and character.

**Full proof for one component.** The two moved beads must be distinct; restoring the very bead just removed gives mu=lambda, excluded from J. Write the removed bead as beta_i and the added bead as beta_j. If i>j, the transfer subtracts from the smaller bead and adds to the larger, making the sorted beta list strictly more spread out. It therefore makes mu dominate lambda, rather than the required reverse dominance. If i<j, put D=beta_i-beta_j>0. For 0<h<D both resulting bead values lie strictly inside the old interval [beta_j,beta_i], with the same sum; replacing two coordinates by this inward transfer can only decrease every sorted initial-coordinate sum, with at least one strict decrease. Subtracting the fixed staircase from sorted beta coordinates preserves these dominance inequalities, so lambda strictly dominates mu. If h=D, the two beads are exchanged and mu=lambda. If h>D, both new extreme values lie outside the old interval, so the reverse strict dominance holds. This proves that precisely the finite range 1<=h<=D-1 is required. One can justify the sorted-sum assertion directly: the sum of the k largest coordinates is max_{|S|=k}sum_{r in S}v_r; for a two-coordinate inward transfer with fixed sum and reduced max, all such maxima weakly decrease, and the reverse argument handles the outward transfer.

Within that range, if a removal or addition target is occupied by an unchanged bead, the final array has a repeated entry and chi=0. A target occupied by the other moved bead would require h=D, already excluded. Thus nonzero determinant terms correspond exactly to valid samecomponent hook pairs with common remainder. Their signs are again the product of the two bead-sorting signs; if the moving beads cross each other in the two-step motion, that crossing is counted in the appropriate leg and in the final sorting permutation alike. The same unit z^(-N+1) converts the beta difference to the two foot residues. Hence these summands agree exactly with the one-component part of J. No hook pair has been lost or added, proving the identity.


## 1. Samecomponent beta alternation is a precise operator

Let f(k)=V(z^k-1) for k>0. In the samecomponent beta sum of the preceding packet, put D=beta_i-beta_j and k=D-h. Its valuation is f(k), because the other factors U_a z^beta_j are units. Swapping the two changed determinant rows shows

$$\chi(\beta-(D-k)e_i+(D-k)e_j;x)=-\chi(\beta-k e_i+k e_j;x).$$

Therefore the complete coefficient of f(k), for that physical component, is exactly

$$-\sum_{i<j:\beta_i-\beta_j>k}\chi(\beta-k e_i+k e_j;x).$$

This is the strictly dominance-lowering part of `-p_k p_k^perp` on the abstract Schur shape basis. Here p_k^perp can be defined integrally as the signed bead-removal map: lower an occupied bead by k into an unoccupied nonnegative position, with sign (-1)^number-crossed-beads. Multiplication by p_k raises a bead by k with the same sign rule. The latter statement has a local determinant proof: with N variables y_1,...,y_N, multiply the alternant det(y_r^beta_i) by sum_r y_r^k. Expanding the determinant, distribute this factor to its N rows; the sum equals sum_i det(y_r^(beta_i+k delta_ij)). Divide by the fixed Vandermonde alternant. This gives precisely the bead-raising formula, including equal-row zero terms and sorting signs. Specializing unused variables to zero preserves the polynomial identity. The bead-removal map is its transpose in the orthonormal abstract partition basis; thus it is exactly the adjoint customarily denoted p_k^perp. No characteristic assumption is needed for this integral operator definition.

After one removal and one addition, a non-diagonal lower-dominance result must come from distinct original beads i<j with 0<k<beta_i-beta_j, by the full dominance proof in the preceding packet. Occupied intermediate positions produce zero. All unchanged-bead collision cases are the zero repeated rows already removed in the determinant. Restoring the just-removed bead gives the original partition and is discarded by the strict projection. Hence the lower part is exactly the displayed sum, with no missing diagonal term. This proves the operator identification. It is an algebraic reformulation of the beta side, not a proof of its equality with norm counts.

## 2. Exact finite-current representation of the crosscomponent operator

Let W have ordered basis e_0,e_1,... and work with its N-fold exterior power. A partition rho is represented by the ordered wedge e_(beta_1)∧...∧e_(beta_N), beta_i=rho_i+N-i strictly decreasing. Let E(p,q) insert e_p after removing e_q, with the exterior signs. It vanishes if q is absent or p is occupied. Its sign is exactly the bead-sorting sign. The usual contraction/insertion calculation gives

$$[E(p,q),E(r,s)]=\delta_{q,r}E(p,s)-\delta_{p,s}E(r,q).$$

This follows directly by expanding E=creation·contraction and using contraction_q creation_r+creation_r contraction_q=delta_(q,r); the two products with two creations and two contractions cancel. The exterior space is only a convenient actual finite sign calculator; on a fixed size-n sector all bead positions in nonzero terms are bounded by N+n-1.

Write J for the MATRIX with entries J_(lambda mu), row lambda/column mu, acting on column shape vectors. Thus J's crosscomponent terms raise boxes toward earlier physical components, the transpose of the hook move lambda→mu. Precisely, they are

$$J^{\mathrm{cross}}=\sum_{a<b}\ \sum_{h>0}\ \sum_{q\ge h,\ w\ge0}V(U_a z^{q-h}-U_b z^w)\ E_a(q,q-h)E_b(w,w+h).$$

Omit a current term that is zero on the entire size-n sector BEFORE evaluating its valuation. On every retained term the corresponding valid hook pair makes the residue difference nonzero by the foot-exponent bound. Every nonzero term on the size-n sector has all its positions in [0,N+n-1], so this is a finite operator there. The reverse hook pair has source beads q in earlier component a and w in later component b, removal length h in a, addition length h in b; its forward current is E_a(q-h,q)E_b(w+h,w). Transposing gives exactly the displayed operator, with the same two exterior signs and valuation. This proves its agreement with the entire crosscomponent beta sum. The one-component part is the transpose of the strictly dominance-lowering operator in §1, equivalently the strictly dominance-raising matrix part of `-sum_k f(k) p_k p_k^perp`. These statements specify J by elementary exterior operators; the complete local norm comparison follows below.

## 3. Horizontal strips are an explicit exterior determinant

Let S e_q=e_(q+1). For a formal variable x define H(x)=(I-xS)^(-1)=sum_(r>=0)x^r S^r. Its entry H_(p,q) is x^(p-q) if p>=q and0 otherwise. All assertions are coefficientwise finite in x; alternatively truncate the basis beyond the largest degree being considered. On N-wedges the matrix of ∧^N H(x) between beta_mu and beta_rho is

$$x^{|\mu|-|\rho|}\det\big(1_{\beta_{\mu,i}\ge\beta_{\rho,j}}\big)_{i,j=1}^N.$$

Since both beta lists strictly decrease, subtract consecutive columns in the 0/1 matrix. Its determinant is1 exactly when beta_mu,i>=beta_rho,i>beta_mu,i+1 for all i (with the last lower bound automatic), and0 otherwise. These inequalities are precisely mu_i>=rho_i>=mu_(i+1), the horizontal-strip criterion. This proves, including coefficient1, that Γ(x)=∧^N H(x) adds every horizontal strip once with weight x^(strip size).

For a TYPE component a, put Γ_a(x)=product_(b<=a) Γ_b(x). It adds a horizontal strip in every permitted physical component b<=a, leaves components b>a unchanged, and weights the total added size by x. Thus successive Γ_a(x_(a,r)) from the empty shape enumerate exactly the flagged semistandard tableaux: the boxes bearing each successive row label are those strips. This proves the branching matrix used below without a new Schur-functor assertion.

Conjugation of an elementary current is equally explicit:

$$\Gamma(x)^{-1}E(p,q)\Gamma(x)=\sum_{r=0}^q x^{q-r}\big(E(p,r)-xE(p+1,r)\big).$$

**Proof.** Conjugation under an exterior power carries the induced matrix-unit action to H^-1 E(p,q)H. Since H^-1=I-xS, its column vector is e_p-xe_(p+1); its row covector is sum_(r<=q)x^(q-r)e_r*. Their outer product gives the displayed sum. This proof also gives the two-current conjugation by multiplying the two displayed sums, retaining their order if they lie in one component. It is valid in every finite coefficient range and does not use a source theorem.


## 4. Explicit marked-strip factor and complete local identity

Let rho→lambda be a permitted Γ_a strip transition, η=[lambda]\[rho], and order nodes by physical component, then row, then column. Put r_x=U_(physicalcomponent x) z^(content x), C+(A,B)=(zB-A)/(B-A), and R(A,B)=(zB-A)(B-zA)/(B-A)^2. Define the following entirely explicit rational factor:

$$F_{\lambda\rho}^{(a)}=\prod_{x\in\eta}\ \prod_{\operatorname{comp}(x)<b\le a}(r_x-U_b)\ \prod_{\substack{x\in[\rho],\ y\in\eta\\x,y\text{ in same physical row}}}C_+(r_x,r_y)\ \prod_{\substack{x<y,\ x,y\in\eta\\x,y\text{ in different physical rows}}}C_+(r_x,r_y)\ \prod_{\substack{x\in\eta,\ y\in[\rho]\\x<y}}R(r_x,r_y).$$

The last pairs cannot be in one physical row: new nodes append to the right of all old nodes. In the third product “different physical rows” includes different components. Every factor is exactly one of the sibling pair-reduction factors. Indeed older labels are strictly smaller than the new label; same-row old/new pairs give C+; distinct-row new/new pairs have the same label and give C+; a new row-reading-earlier node followed by an old node is a different-label inversion and gives R; all other new/old pairs have no factor. Boundary factors occur only for the new nodes, because previous node type-components are unchanged. Thus along any semistandard chain, the product of these F-factors over labels is EXACTLY gamma_(t_T)/(C_(t_T)u_T). This multiplicative branching description is proved by splitting the complete node-pair list into old/old, old/new, and new/new pairs, not by assuming the desired J formula.

All auxiliary ranks m use the SAME fixed parameters z,U_a of the final rank-n LM deformation (in particular U_a=Q_a t^(na), not Q_a t^(ma)). For each n,m, let Γ_a^(n,m)(x) be the size-n/size-m block of the strip matrix. The local train/marked-strip identity is

$$\big(J_n\Gamma_a^{(n,m)}(x)-\Gamma_a^{(n,m)}(x)J_m\big)_{\lambda\rho}=\begin{cases}x^{n-m}V(F_{\lambda\rho}^{(a)}),&\lambda/\rho\text{ is a permitted }\Gamma_a\text{ transition},\\0,&\text{otherwise}.\end{cases}$$

It is required only on the reachable prefix sector where physical components b>a are empty. J, Γ and F are the explicit matrices/product above. The complete support/off-support case proofs included below establish the identity.

By the local identity proved in all cases below, multiply the Γ matrices in increasing type-row label order and telescope JΓ−ΓJ, starting from J_0=0. Each commutator inserts exactly V(F) at its strip position, so the λ-coordinate is the sum over all semistandard chains of their total norm valuation. The resulting equality is L_lambda(x)=B_lambda(x), completing R and, via the previous DVR/character leaves, the full integer K0 J theorem. The complete on/off-support case proofs below establish the displayed local marked-strip identity and hence this algebraic telescope.


Let q_(a,i)=lambda_i^(a)+N-i, p_(a,i)=rho_i^(a)+N-i, b_i=N-i. A permitted strip transition has q_(a,i)>=p_(a,i)>q_(a,i+1) in each physical component a receiving the current row label. New nodes in physical row i have exponent indices u in [p_i,q_i), and old nodes have indices v in [b_i,p_i): the residue at index u is U_a z^(u-N+1). Because z^(-N+1) is a unit, every residue difference can be evaluated with U_a z^u instead. All auxiliary ranks keep the fixed final-n deformation parameters.

## 1. Samecomponent formula

Write phi(k)=V(z^k-1), k>=1, and S(m)=sum_(k=1)^m phi(k), S(0)=0. The samecomponent part of the marked-strip factor has valuation

$$\mathcal F_a(q,p)=\sum_{i=1}^N\big(S(q_i)-S(p_i)-S(q_i-p_i)\big)+\sum_{i<j}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big).$$

Only nonempty u intervals are used. The interlacing inequalities ensure every phi argument in the last sum is positive: u>=p_i>q_j, and p_i>q_j>=p_j. Thus no artificial phi(0) is evaluated.

**Full telescoping proof.** A same-row old/new pair has difference d=v-u>=1 (v new, u old), contributing phi(d+1)-phi(d). Summing first over the new interval and then over the old interval gives S(q_i-b_i)-S(q_i-p_i)-S(p_i-b_i).

For i<j, the new/new C factor contributes phi(u-v-1)-phi(u-v), with u in [p_i,q_i),v in [p_j,q_j). The new-upper/old-lower R contributes phi(u-v-1)+phi(u-v+1)-2phi(u-v), v in [b_j,p_j). Summing over v gives, respectively, phi(u-q_j)-phi(u-p_j) and phi(u-b_j+1)-phi(u-b_j)-phi(u-p_j+1)+phi(u-p_j). Their sum is phi(u-q_j)-phi(u-p_j+1)+phi(u-b_j+1)-phi(u-b_j). Summing the final difference over u yields phi(q_i-b_j)-phi(p_i-b_j).

For each fixed i, sum this baseline term over j>i. Because b_j=N-j, sum_(j>i)phi(q_i-b_j)=S(q_i)-S(q_i-b_i), and likewise with p_i. Add the same-row expression from the first paragraph. The S(q_i-b_i),S(p_i-b_i) terms cancel exactly, leaving the displayed formula. Every equality is a finite sum telescope of actual norm-pair factors.

The vacuum rows with q_j=p_j=b_j do not require an infinite limit; N is finite and their terms participate in this exact cancellation. The expression therefore proves independence of artificial row padding, and can be compared directly with the samecomponent shifted-beta determinant commutator.

## 2. Crosscomponent formula without artificial zero factors

Fix two physical components a<b both allowed by the current TYPE component c (so b<=c). Put g_(ab)(u,v)=V(U_a z^u-U_b z^v). Let L_b=length(lambda^(b)), R_b=length(rho^(b)). The contribution of this component pair to the marked-strip norm valuation is exactly

$$\mathcal F_{ab}(q,p)=\sum_{i:q_{a,i}>p_{a,i}}\left[\sum_{u=p_{a,i}}^{q_{a,i}-1}\left(g_{ab}(u,N-1)+\sum_{j=1}^{L_b}\big(g_{ab}(u,q_{b,j})-g_{ab}(u,b_j)\big)\right)+\sum_{j=1}^{R_b}\ \sum_{v=b_j}^{p_{b,j}-1}\big(g_{ab}(q_{a,i},v)-g_{ab}(p_{a,i},v)\big)\right].$$

Every endpoint in this displayed formula is tied to an actual nonzero row or an actual new/old node. This restriction matters: separating a padded-vacuum sum into arbitrary individual valuations could introduce identically zero Laurent differences under the LM specialization. Here all retained differences have finite valuation. Indeed u corresponds to a node in component a; q_(b,j) corresponds to the next-column position of an actual lambda^(b) row, b_j to that row's first-column position, and v to an actual old node. Their content differences, including q_(a,i),p_(a,i) against an old component-b node, are at most n-1 in absolute value. Hence n(a-b)+content difference cannot be zero. Constant residues may agree, but the earlier Laurent-binomial leaf then gives a finite positive valuation.

**Full telescoping proof.** For fixed upper/new index u, new/new C terms in component b contribute sum_(v=p_bj)^(q_bj-1)[g(u,v+1)-g(u,v)]=g(u,q_bj)-g(u,p_bj). New-upper/old-lower R terms contribute sum_(v=b_j)^(p_bj-1)[g(u,v+1)+g(u+1,v)-2g(u,v)]=g(u,p_bj)-g(u,b_j)+sum_(v=b_j)^(p_bj-1)[g(u+1,v)-g(u,v)]. Adding gives g(u,q_bj)-g(u,b_j)+the last sum. Sum this over actual component-b rows; rows beyond L_b have q_bj=p_bj=b_j and contribute0. Add the boundary factor g(u,N-1). Finally telescope the last u-difference over u in [p_ai,q_ai), giving the final endpoint difference in the displayed formula. This proves the identity without evaluating a padded zero factor.

Physical component pairs involving b>c contribute nothing along the reachable prefix sector, because those components contain no old or new boxes and the boundary product stops at c. Samecomponent plus all a<b<=c formulas give the complete V(F_(lambda rho)^(c)) needed in the local commutator.


## 1. Exact row and column minors on interlacing beta lists

For one physical component write q_i=beta_lambda,i, p_i=beta_rho,i. Suppose q_i>=p_i>q_(i+1). The horizontal-strip matrix has entries H_(i,j)=1_(q_i>=p_j), so H is the upper triangular matrix U_(i,j)=1_(j>=i). Its inverse is I minus the superdiagonal shift. Replacing row i by the row at a bead position v changes its determinant to

$$d_i^{\mathrm{row}}(v)=1_{v\ge p_i}-1_{v\ge p_{i-1}}=1_{p_i\le v<p_{i-1}},$$

with p_0=+infinity. This is the row-replacement determinant formula v_row U^-1 e_i, proved by multilinearity (expand the replacement row in the original row basis). Likewise replacing column i by a column at v gives

$$d_i^{\mathrm{col}}(v)=1_{q_i\ge v}-1_{q_{i+1}\ge v}=1_{q_{i+1}<v\le q_i}.$$

For the last column use q_(N+1)=-1 and restrict v>=0. These formulas include all beta sorting signs automatically; they are determinants in the original ordered row/column positions.

Choose N>n, so the last rows of every size<=n shape are zero and p_N=q_N=0. In particular a column lowered from p_N by a positive h is inadmissible and contributes0. Every current term is omitted if its elementary exterior action is zero, before evaluating its residue valuation.

## 2. Operator-side finite sum for a physical pair a<b

Let M_i=q_(a,i)-p_(a,i). Only M_i>0 matters. Under LM, g_ab(u,v)=V(U_a z^u-U_b z^v) depends only on d=u-v, because z^v is a unit. Write it as psi_ab(d). For the intermediate padded manipulations below first treat psi(d) as FORMAL independent symbols; cancel symbols before evaluating their values. This prevents evaluating a padded artificial identically-zero residue difference.

For JΓ, a term in which lambda removes h boxes from component-a bead q_ai and adds h boxes to component-b bead q_bj has row-minor product

`d_row,a,i(q_ai-h) · d_row,b,j(q_bj+h)`.

It is1 exactly when h<=M_i and h<p_(b,j-1)-q_(b,j), with the upper bound absent for j=1. Its valuation is psi(q_ai-h-q_bj). For ΓJ, the inverse transfer applied to rho changes its column beads p_ai+h,p_bj-h. Its minor product is1 exactly when h<=M_i and h<p_bj-q_(b,j+1), and its valuation is psi(p_ai-p_bj+h). This follows directly from §1; no multiplicity or sign is inferred by a generic rank argument.

Pair the JΓ term with index j+1 with the ΓJ term with index j. They have the SAME positive-h bound

$$K_j=p_{b,j}-q_{b,j+1}-1\ge0.$$

The unpaired JΓ term j=1 remains; the unpaired last ΓJ term is0 because p_bN=0. Thus the complete crosscomponent commutator contribution for new row i is exactly

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\psi(u-q_{b,1})+\sum_{j=1}^{N-1}\ \sum_{h=1}^{\min(M_i,K_j)}\left(\psi(A_{ij}+M_i+K_j+1-h)-\psi(A_{ij}+h)\right),\qquad A_{ij}=p_{a,i}-p_{b,j}.$$

Every retained term came from a valid current and strip minor, so its original foot-residue valuation is finite. The unit/common-exponent precision is the same as the preceding hook-exponent proof.

## 3. Norm-side endpoint sum and complete interval cancellation

The crosscomponent marked-strip norm factor was proved in `marked-strip-beta-endpoint-telescoping.md`. Temporarily extending the padded sums as formal symbols, and telescoping its old-node rectangle in the other direction, yields for row i

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\left(\psi(u+1)+\sum_{j=1}^N\big(\psi(u-q_{b,j})-\psi(u-p_{b,j}+1)\big)\right).$$

Here is the complete algebra leading to this expression. The old-node endpoint rectangle satisfies

`Σ_(v=b_j)^(p_bj-1)[ψ(q_ai-v)-ψ(p_ai-v)] = Σ_(u=p_ai)^(q_ai-1)[ψ(u-b_j+1)-ψ(u-p_bj+1)]`.

This equality is the finite rectangle telescope of the same discrete difference: sum ψ(u+1-v)-ψ(u-v) over both u and v. In the previously proved endpoint formula add these rectangles to the new-node terms. The vacuum terms sum over j to ψ(u+1)-ψ(u-N+1), and the actual boundary term ψ(u-N+1) cancels that lower endpoint. This gives the displayed expression. The last j=N term has q_bN=p_bN=0 and cancels ψ(u+1). Separate j=1 from the positive q terms and reindex all remaining q terms by j+1. The result is

$$\sum_{u=p_{a,i}}^{q_{a,i}-1}\psi(u-q_{b,1})+\sum_{j=1}^{N-1}\ \sum_{s=0}^{M_i-1}\left(\psi(A_{ij}+s+K_j+1)-\psi(A_{ij}+s+1)\right).$$

For any integers A and nonnegative M,K there is the EXACT elementary identity

$$\sum_{s=0}^{M-1}\big(\psi(A+s+K+1)-\psi(A+s+1)\big)=\sum_{h=1}^{\min(M,K)}\big(\psi(A+M+K+1-h)-\psi(A+h)\big).$$

**Proof.** The left side is the formal sum over the integer interval [A+K+1,A+K+M] minus the interval [A+1,A+M]. If M<=K they are disjoint and both have M entries, giving the right side with min(M,K)=M after reversing the first interval. If M>K, their overlapping middle interval cancels, leaving the top K entries minus the bottom K entries, giving the right side with min(M,K)=K. M=0 or K=0 gives0 on both sides. This proves the equality for arbitrary symbols psi, so no analytic or field assumption is hidden in it.

Apply it for each i,j. The resulting norm-side sum is IDENTICAL term-for-term to the operator-side sum in §2. All padded artificial symbols have canceled in this formal proof. Specialize only the remaining coefficients: they correspond to the valid currents in §2 and therefore to nonzero Laurent differences. Thus the equality holds for the exact LM valuations over every field, including positive-characteristic multiplicities. This completes the crosscomponent marked-strip commutator proof on permitted strip support.


Take N>n so every partition of size at most n has last beta entry0. Work first with formal potential symbols psi(d); only after equal coefficients cancel evaluate the surviving symbols as V(U_a z^d-U_b), omitting all zero current terms beforehand. This has the same specialization-safe precision as the preceding support proof.

## 1. Classification of every defective horizontal-strip step matrix

For sorted beta lists q,p, the matrix H_(i,j)=1_(q_i>=p_j) has rows equal to tail-step vectors t_r=(0,...,0,1,...,1), with first1 in column r. Since q_N=p_N=0, no row is zero. The N vectors t_1,...,t_N are a basis with unit upper-triangular transition matrix. Hence the rank is exactly the number of distinct occupied tail-step types. If rank<=N-2, changing one row or one column cannot give a nonzero determinant, so every minor used by a crosscomponent current vanishes.

If rank=N-1, exactly one tail type r is missing, and exactly one other tail type occurs twice. The duplicated rows are adjacent, say i,i+1, because their thresholds are weakly ordered. Put Q=q_i,Q'=q_(i+1), so Q>Q'. The missing interval is

`[P,P')=[p_r,p_(r-1))`, with p_0=+infinity.

The left nullspace is spanned by u=e_i-e_(i+1). The right nullspace is spanned by v=e_r-e_(r-1), interpreting e_0=0. At least one (N-1)-minor is±1 (remove one duplicated row and the appropriate column in the tail-step basis). Therefore the adjugate is exactly epsilon·v u^T for one fixed epsilon=±1.

By row/column multilinearity, replacing row l by the row at bead position x gives

`D_row,l(x)=epsilon u_l·1_(P<=x<P')`.

Replacing column l by the column at x gives

`D_col,l(x)=epsilon v_l·1_(Q'<x<=Q)`.

Thus all row and column sorting signs are accounted for, and the SAME epsilon governs both kinds of replacement. These identities prove the defective-minor formulas; no division by the zero base determinant occurs.

The missing tail interval lies entirely above or entirely below the duplicated interval, because its type differs from the duplicated type. If it lies below, Q'>=P', so only lowering a q bead or raising a p bead can restore the determinant. If it lies above, Q<P, so only raising a q bead or lowering a p bead can restore it. A crosscomponent current lowers q in earlier component a and raises q in later component b; the inverse column current raises p in a and lowers p in b. Therefore the only possible nonzero defect in component a is the “missing below” case, and in b the “missing above” case. In every opposite-direction defect both JΓ and ΓJ terms are0.

Any untouched physical component with a defective base strip determinant kills the entire term. Thus it remains to handle only an a defect, only a b defect, or defects in both. Rank<=N-2 defects were already disposed of.

## 2. Only earlier component a defective

Use the notation above for a, with Q'>=P'. Let b be interlacing. As in the on-support proof, pair b's row-plus term j+1 with its column-minus term j; their common bound is h<B_j, B_j=p_(b,j)-q_(b,j+1). The unpaired first row-plus term contributes0 here: the two a row-source coefficients add to epsilon(1-1)=0 at every restored position, since its b bound is unrestricted. The last column-minus term is0 because p_bN=0.

For fixed j, put L=q_(b,j+1), M=p_(b,j). The first term sums over restored a positions x in [P,P'), with source coefficients +Q and -Q'. Its coefficient at psi(x-L) is

`epsilon·(1_(Q-x<B_j)-1_(Q'-x<B_j)) = -epsilon·1_(Q'-M<x-L<=Q-M)`.

The second term sums over restored a-column positions y in (Q',Q], with a source coefficients +P and -P'. Its coefficient at psi(y-M) is

`epsilon·(1_(y-P<B_j)-1_(y-P'<B_j)) = -epsilon·1_(P-L<=y-M<P'-L)`.

Both sums are therefore exactly

`-epsilon Σ_(d in [P-L,P'-L) intersect (Q'-M,Q-M]) psi(d)`.

They agree, so their difference in the commutator is0. All positive-h requirements are automatic: restoring the a row lowers a source at least Q' to a position below P'<=Q', and restoring the a column raises a source at most P' to a position strictly above Q'. This proves vanishing for an a-only defect, including all signs.

## 3. Only later component b defective

Write its duplicated q endpoints as R>R' and missing p interval [S,S'), with R<S. Let a be interlacing. For each new a row put M=q_ai-p_ai>=0. In JΓ, restore a b-row position w in [S,S') from source +R or -R'. The a row-minus minor imposes h<=M. The signed coefficient is

`epsilon·(1_(w-R<=M)-1_(w-R'<=M))=epsilon·1_(R'+M<w<=R+M)`.

Its potential is psi(q_ai-w). In ΓJ, restore a b-column position t in (R',R] from source +S or -S'. The a column-plus minor imposes h<=M. The signed coefficient is

`epsilon·(1_(S-t<=M)-1_(S'-t<=M))=epsilon·1_(S<=t+M<S')`.

Its potential is psi(p_ai-t). The translation w=t+M identifies both index intersections and both potentials because q_ai=p_ai+M. Hence the two sums agree and the commutator vanishes. If r=1, S'=+infinity and there is no source at that virtual endpoint; the formulas simply omit it, and the same interval translation remains valid.

## 4. Both components defective

Use a endpoints Q>Q', [P,P') with Q'>=P', and b endpoints R>R', [S,S') with R<S. Common positive h is automatic in all potentially nonzero terms. For each formal potential psi(d), the coefficient in JΓ is epsilon_a epsilon_b times

`[1_(S<=Q-d<S')-1_(S<=Q'-d<S')] · [1_(P<=R+d<P')-1_(P<=R'+d<P')]`.

Indeed if the a source is A in {Q,Q'} and b source is B in {R,R'}, their restored positions are x=A-h and y=B+h. The potential index is d=x-B=A-y. Thus x=B+d must lie in [P,P') and y=A-d in [S,S'), making the two source sums factor exactly as displayed.

The corresponding coefficient in ΓJ is epsilon_a epsilon_b times

`[1_(R'<P-d<=R)-1_(R'<P'-d<=R)] · [1_(Q'<S+d<=Q)-1_(Q'<S'+d<=Q)]`.

For inverse column sources A in {P,P'} and B in {S,S'}, the restored positions are z=A+h and t=B-h. Its potential index is d=A-t=z-B, so t=A-d must lie in (R',R] and z=B+d in (Q',Q], giving the displayed factors.

The two products are IDENTICAL by the elementary interval boundary identity

$$1_{B_0\le A_1-d<B_1}-1_{B_0\le A_0-d<B_1}=1_{A_0<B_0+d\le A_1}-1_{A_0<B_1+d\le A_1}.$$

Its proof is subtraction of the four half-line indicators 1_(A>=B+d); the common terms regroup on the other side. Apply it with (A_1,A_0;B_0,B_1)=(Q,Q';S,S') to the first factor, and with (R,R';P,P') and offset -d to the second. Missing top interval S'=infinity is handled by omitting its virtual source and setting the corresponding half-line indicator to0. Thus every formal potential coefficient matches, proving commutator vanishing when both components are defective.

## 5. Coverage and specialization

All ranks and restoring directions have been covered. If an untouched receiving component is noninterlacing, its unchanged base determinant is0. If a touched matrix has rank<=N-2, every one-row/column determinant is0. If it has rankN-1, the wrong direction kills both terms, while the three remaining defect patterns vanish by §§2–4. Thus the entire crosscomponent commutator is0 off permitted Γ support. Combined with the on-support interval proof, this establishes the FULL crosscomponent marked-strip identity.

For physical b beyond the current TYPE component c, the reachable prefix has rho^(b)=empty. In JΓ, a hook transfer from earlier a to later b would make the intermediate shape in component b nonempty, impossible for that Γ prefix. In ΓJ, the inverse transfer would remove a positive hook from the empty rho^(b), impossible. Therefore these terms vanish as well; the identity needs only a<b<=c.

Throughout, signs and equality were proved as coefficients of formal psi(d). Any artificial undefined Laurent factor has canceled before evaluation. Each retained current term corresponds to an actual valid hook pair, so the root's foot-exponent separation makes its value finite. Hence specializing psi(d) to the exact LM valuation is legitimate over every field, including characteristic p with p-power valuations. No field algebraic closure, level restriction, or constant-residue indicator replacement is introduced.


Let phi(k)=V(z^k-1), k>0, S(r)=sum_(k=1)^r phi(k), S(0)=0. Fix one physical component and a horizontal-strip transition rho→lambda. Put q_i=beta_lambda,i, p_i=beta_rho,i, q_i>=p_i>q_(i+1), M_i=q_i-p_i, and

$$K_j=p_j-q_{j+1}-1\ge0\quad(1\le j<N),\qquad K_N=0.$$

Take N>n, so q_N=p_N=0. The strip base matrix is U_(i,j)=1_(j>=i). Row and column replacement minors are exactly those established in the crosscomponent support packet.

## 1. Correct full inverse-column formula

The original samecomponent JΓ expression is

$$\sum_{i<j}\ \sum_{h=1}^{q_i-q_j-1}\phi(q_i-q_j-h)\det H(q-h e_i+h e_j,p).$$

Here H(q,p)_(r,s)=1_(q_r>=p_s); changed rows are kept in their original indexed positions, so the determinant includes all sorting signs. This is the original beta-hook formula before replacing h by its complementary gap.

The FULL inverse-column expression for ΓJ is

$$\sum_{i<j}\ \sum_{h\ge1}\big(\phi(p_i-p_j+h)-\phi(h)\big)\det H(q,p+h e_i-h e_j),$$

omitting negative or repeated shifted bead positions before evaluation.

**Full proof of the inverse formula.** An outward source sigma above rho changes its two beta values p_i,p_j (i<j) to p_i+h,p_j-h, h>0. Every distinct nonnegative such shifted array is a partition after sorting, and its sorted beta list strictly majorizes rho. Conversely every sigma with a two-bead move and sigma strictly dominating rho comes uniquely from an outward pair of this form: the larger changed value increases, the smaller decreases; source/target sets determine both original indices and h. A duplicate shifted bead gives determinant0 and is omitted.

There are exactly TWO hook pairs returning this source to rho. The first removes h from p_i+h to p_i and adds h from p_j-h to p_j; its foot-gap is p_i-p_j+h, and its sorting sign returns the original ordered rho list. The second removes p_i-p_j+h from p_i+h to p_j and adds that same length from p_j-h to p_i; its foot-gap is h, and its final rho beads are exchanged, giving the opposite sign. The intermediate targets p_i,p_j are both unoccupied in sigma: a valid shifted array changed exactly those two original beads and left all others distinct. Hence both hook paths are actual, not formal collision terms. Their combined coefficient is the source-sorting sign times [phi(p_i-p_j+h)-phi(h)]. The shifted-column determinant has exactly that same source-sorting sign. This proves the full formula. In particular crossed inverse sources must not be silently discarded; they are precisely the second term here.

## 2. Every two-row and two-column minor on strip support

Expand a two-row replacement determinant in the original U row basis. It is the 2×2 determinant of the replacement-row coefficients. For row shifts q_i-h,q_j+h, i<j, its direct product is1 exactly when

`1<=h<=min(M_i,K_(j-1))`.

Its crossed product, which appears with minus sign, has positions q_i-h in interval j and q_j+h in interval i. Put k=q_i-q_j-h>0. Then these positions are q_j+k and q_i-k. The interlacing inequalities make all lower/upper bounds automatic except

`1<=k<=min(M_i,K_(j-1))`.

For clarity: q_j+k>=p_j since q_j>=p_j; q_j+k<p_(j-1) gives k<=K_(j-1); q_i-k>=p_i gives k<=M_i; q_i-k<p_(i-1) is automatic since q_i<p_(i-1). The original restriction k<q_i-q_j follows from K_(j-1)<=q_i-q_j-1. Therefore the crossed part contributes exactly `-S(min(M_i,K_(j-1)))` after the valuation weight phi(k) is included.

For the outward two-column shift p_i+h,p_j-h, the crossed coefficient product is0: raising p_i cannot put it into the lower j-th q interval, and lowering p_j cannot put it into the upper i-th interval. The direct product is1 exactly when

`1<=h<=min(M_i,K_j)`.

This includes the last-row convention: p_N=0 has no permissible positive lowering, hence K_N=0. These are actual determinant identities, so no row sorting, leg sign, or multiplicity has been suppressed.

## 3. Pair adjacent row terms with the inverse-column terms

For fixed i the direct row terms with indices (i,j+1), j>=i+1, and the negative phi(p_i-p_j+h) inverse-column terms with indices (i,j) have the SAME bound r=min(M_i,K_j). Their combined sum is

$$\sum_{h=1}^{r}\left(\phi(q_i-q_{j+1}-h)-\phi(p_i-p_j+h)\right)=\sum_{u=p_i}^{q_i-1}\left(\phi(u-q_{j+1})-\phi(u-p_j+1)\right).$$

This is exactly the finite interval-overlap identity proved in the crosscomponent support packet, with A=p_i-p_j, M=M_i, K=K_j, and q_i-q_(j+1)=A+M+K+1. Every phi argument is positive; no infinite/zero valuation enters. Summing these paired terms gives

$$P_i=\sum_{j=i+1}^{N-1}\ \sum_{u=p_i}^{q_i-1}\left(\phi(u-q_{j+1})-\phi(u-p_j+1)\right).$$

The positive phi(h) inverse-column terms sum over j>i to sum_j S(min(M_i,K_j)). The crossed-row terms sum to -sum_(j>i)S(min(M_i,K_(j-1))). All terms cancel except

`-S(min(M_i,K_i))`,

because K_N=0. The one unpaired direct row term is j=i+1; it contributes

$$\sum_{h=1}^{\min(M_i,K_i)}\phi(M_i+K_i+1-h).$$

Subtract the residual S. Apply the same finite interval-overlap identity with A=0. The total residual becomes

$$U_i=\sum_{u=p_i}^{q_i-1}\phi(u-q_{i+1})-S(M_i).$$

If M_i=0 all these sums vanish. If i=N there is no pair term and M_N=0, so the same convention is valid.

## 4. Exact match with the norm endpoint expression

Add P_i+U_i. The q terms now run over all j=i+1,...,N, and the negative p terms run over j=i+1,...,N-1:

$$P_i+U_i=\sum_{j=i+1}^{N}\ \sum_{u=p_i}^{q_i-1}\phi(u-q_j)-\sum_{j=i+1}^{N-1}\ \sum_{u=p_i}^{q_i-1}\phi(u-p_j+1)-S(M_i).$$

Since p_N=q_N=0, this is equivalently

$$\sum_{u=p_i}^{q_i-1}\phi(u+1)-S(M_i)+\sum_{j=i+1}^{N}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big).$$

The first sum is S(q_i)-S(p_i). Summing over i gives EXACTLY

$$\sum_i\big(S(q_i)-S(p_i)-S(M_i)\big)+\sum_{i<j}\ \sum_{u=p_i}^{q_i-1}\big(\phi(u-q_j)-\phi(u-p_j+1)\big),$$

which was proved to equal the actual samecomponent marked-strip norm valuation in `marked-strip-beta-endpoint-telescoping.md`. Thus `(JΓ−ΓJ)_(lambda rho)=V(F_(lambda rho)) Γ_(lambda rho)` for every permitted horizontal-strip transition, for the SAMEcomponent terms. This completes the general on-support identity, retaining all signed hooks and inverse source terms.


Use the correct weighted-h original-row and outward-column formulas from `samecomponent-on-strip-actual-cancellation.md`. Put phi(k)=V(z^k-1), k>0, and take N>n. A rank-N−1 step matrix has exactly one missing p-threshold interval and two adjacent duplicate q rows, as proved in the crosscomponent off-support packet.

Let the duplicated q endpoints be Q>Q', in rows s,s+1. Let the missing interval be [P,P')=[p_r,p_(r-1)), with r>s and Q'>=P'. Thus the missing interval lies BELOW the duplicated q interval. The cofactor null vectors and common sign epsilon are

`u=e_s-e_(s+1)`, `v=e_r-e_(r-1)`, `adj(H)=epsilon·v u^T`.

A one-row minor is epsilon u_l·1_(P<=newq<P'), and a one-column minor is epsilon v_l·1_(Q'<newp<=Q). Normal q rows strictly below the missing interval have indices j>=r+1 and occupy their own p interval [p_j,p_(j-1)). Put

$$K_j=p_j-q_{j+1}-1\quad(j\ge r),\qquad K_N=0.$$

Every K_j>=0 in this tail, because the tail interlaces normally after the one missing threshold. The last zero beta row makes K_N=0.

## 1. Exhaustive two-row and two-column repair types

A nonzero two-row determinant must touch a duplicate source row: otherwise the two unchanged duplicate rows remain equal. One new row value must fill the missing interval, and the other must fill the original threshold of its unique source row; these two assignments have opposite determinant signs. Both duplicate source rows together cannot contribute to the inward root range: filling the lower missing interval from one source would leave a foot position below the other duplicated source, violating 0<h<source-gap. A unique source above or between the duplicate interval and missing interval likewise cannot contribute. If its down-shifted value fills the missing interval, it is below the other source q, again violating the inward foot-gap condition. If its up-shifted value fills the missing interval, that value cannot be below its original source. Thus the only possible unique source is a normal row j>=r+1 below the missing interval.

For such j, the source duplicated row is earlier in beta order. There are EXACTLY two determinant assignments: (direct) the duplicate lowers to the missing interval and the unique row raises within its own old interval; (exchange) the duplicate lowers into the unique row's old interval and the unique row raises to the missing interval. The direct minor sign is epsilon u_l and the exchange sign is its negative. This follows by expanding the two replacement rows on the missing step vector and the old unique threshold step; their 2×2 determinant is the direct product minus the exchange product, with the same cofactor epsilon as the one-row repair.

For outward two-column sources, a nonzero determinant must touch one of the duplicate column endpoints P',P. The raised endpoint column can fill the missing q-gap (Q',Q], while a unique lower source column j>=r+1 lowers within its old q interval; its sign is epsilon v_l. The only other possible source pair is the two endpoints themselves, with the upper original endpoint P' raised to (Q',Q] and the lower endpoint P lowered within the original duplicate-column threshold. Its sign is -epsilon (the raised endpoint has v_(r-1)=-1). Normal source columns above or between the affected endpoints cannot lower into an upper original interval from an endpoint below it; all other assignment types therefore vanish. These statements include both directions of target assignment, so no crossed repair is discarded.

## 2. Direct-row terms match first-potential column terms except one boundary

For normal row j>=r+1, the direct row repair at missing position x in [P,P') has source +Q or -Q'. Its common normal-row condition is h<p_(j-1)-q_j. As in the crosscomponent a-only calculation, its total is

$$R_j=-\varepsilon\sum_{d\in[P-q_j,P'-q_j)\cap(Q'-p_{j-1},Q-p_{j-1}]}\phi(d).$$

A unique outward column source j>=r+1 has endpoint +P or -P', raised to a position y in (Q',Q], with h<=K_j. Its inverse-source coefficient is phi(endpoint-p_j+h)-phi(h). Write its first-potential sum as C_j^first and its second-potential sum as C_j^second, so its actual contribution to ΓJ is C_j^first-C_j^second. The same interval translation from the crosscomponent proof gives

`R_(j+1)=C_j^first` for j>=r+1.

Indeed both are -epsilon times the formal sum over [P-q_(j+1),P'-q_(j+1)) intersect (Q'-p_j,Q-p_j]. Hence all direct rows cancel those first column potentials except the initial direct row R_(r+1). The final inverse column is0 because p_N=0.

The second-potential column sum is explicit:

$$C_j^{\mathrm{second}}=\varepsilon\sum_{h=1}^{K_j}\phi(h)\big(1_{Q'<P+h\le Q}-1_{Q'<P'+h\le Q}\big).$$

The sign of this sum is not assumed positive; it is the actual endpoint cofactor difference.

## 3. Exchange-row repairs telescope all remaining column second potentials

In an exchange-row repair at source pair (duplicate A in {Q,Q'}, unique B=q_j), put k=A-B-h>0, the original inward foot gap. The two new positions are B+k in the unique interval and A-k in the missing interval. The own-interval condition is exactly 1<=k<=K_(j-1). The signed sum is

$$X_j=-\varepsilon\sum_{k=1}^{K_{j-1}}\phi(k)\big(1_{P\le Q-k<P'}-1_{P\le Q'-k<P'}\big).$$

The elementary endpoint reciprocity from the crosscomponent rank-one proof gives

`1_(P<=Q-k<P')-1_(P<=Q'-k<P') = 1_(Q'<P+k<=Q)-1_(Q'<P'+k<=Q)`.

Therefore

`X_j=-C_(j-1)^second`.

Sum over j>=r+1. The exchange rows cancel the plus C_j^second terms arising when ΓJ is subtracted, for every j>=r+1, leaving only -C_r^second. This is the precise repair type that a “direct-only” argument would miss.

## 4. The two endpoint columns cancel the final boundary exactly

Put

$$A=Q'-P'\ge0,\quad B=P'-P>0,\quad L=Q-Q'>0,\quad I_0=(A,A+L],\quad I_1=I_0+B,\quad K=K_r.$$

The one remaining direct row has

$$R_{r+1}=-\varepsilon\sum_{d\in I_1\cap(K,K+B]}\phi(d).$$

This is the preceding R_j formula with j=r+1 and P-q_(r+1)=K+1. Also

$$C_r^{\mathrm{second}}=\varepsilon\sum_{h=1}^{K}\phi(h)\big(1_{I_1}(h)-1_{I_0}(h)\big).$$

The outward source made from the two endpoint columns raises P' and lowers P. Its restoring conditions are h in I_0 and h<=K; its source beta gap is B. Its full two-hook coefficient, including the negative endpoint cofactor, is

$$C^{\mathrm{end}}=-\varepsilon\sum_{\substack{h\in I_0\\h\le K}}\big(\phi(B+h)-\phi(h)\big).$$

After all previous cancellations, the commutator is exactly `R_(r+1)-C_r^second-C^end`. Substitute the three sums. The phi(h) terms on I_0 cancel, and the remaining expression is

$$-\varepsilon\sum_{d\in I_1\cap[1,K+B]}\phi(d)+\varepsilon\sum_{\substack{h\in I_0\\1\le h\le K}}\phi(B+h)=0.$$

The equality is the translation d=h+B. Since A>=0, I_1 lies entirely in [B+1,infinity), so the translated lower endpoint restrictions match exactly. Thus every formal phi coefficient vanishes. All its arguments are positive, so specializing to the exact arbitrary-characteristic LM valuation is immediate.


## 1. Exact defect data and cofactor signs

Use decreasing nonnegative beta lists $q_1>\cdots>q_N=0$, $p_1>\cdots>p_N=0$, with $N>n$, and the step matrix $H_{ij}=1_{q_i\ge p_j}$. Suppose $\operatorname{rank}H=N-1$, its missing row threshold is $r$, and its duplicated rows are $s,s+1$, with $r\le s$. Put

$$Q=q_s>Q'=q_{s+1},\qquad [P,P')=[p_r,p_{r-1}),\qquad P>Q,$$

where $P'=+\infty$ when $r=1$. This is precisely the missing-above orientation. Its cofactor vectors and common sign are

$$u=e_s-e_{s+1},\qquad v=e_r-e_{r-1},\qquad\varepsilon=(-1)^{s-r},\qquad\operatorname{adj}(H)=\varepsilon vu^{\mathsf T},$$

with the nonexistent $e_0$ omitted. A one-row replacement at position $l$ has determinant $\varepsilon u_l1_{P\le\mathrm{new}\ q<P'}$; a one-column replacement has determinant $\varepsilon v_l1_{Q'<\mathrm{new}\ p\le Q}$. To verify the sign, move the inserted missing row threshold from row $s$ to its sorted position $r$, crossing $s-r$ rows; inserting at the other duplicate row changes the sign. On the column side, inserting into column $r$ the missing column-end threshold $s$ crosses the same $s-r$ columns. Thus endpoint $P$ has sign $+$ and endpoint $P'$ has sign $-$, with the same $\varepsilon$.

Write $\phi(k)$, $k>0$, as independent formal symbols until the finite cancellation is proved. The exact samecomponent row expression is the signed sum over inward replacements $(q_i-h,q_j+h)$ with $i<j$ and $0<h<q_i-q_j$, weighted by $\phi(q_i-q_j-h)$. The inverse column expression is the signed outward replacement $(p_i+h,p_j-h)$, weighted by

$$\phi(p_i-p_j+h)-\phi(h).\tag{1}$$

Formula (1) includes both inward hook lengths from that source, whose exchanged target order changes the sign. These expressions were derived in the J constructor's current packet and are used without a discarded crossed-source term.

## 2. Top missing interval: both sides vanish directly

If $r=1$, then $q_1<P=p_1$, so no inward row replacement can reach the missing interval: both new positions lie strictly between their two original source positions and hence at most $q_1$. Every row determinant is zero. The base first column is zero. A nonzero two-column replacement must replace it; as the first column it is necessarily the earlier source, whose outward replacement raises its bead from $p_1$ to $p_1+h>q_1$. It therefore remains zero. Every column determinant is zero too. This proves the missing-top case without evaluating an infinite endpoint or a zero-residue symbol.

Henceforth let $r\ge2$, so $P'$ is finite.

## 3. Exhaustive repair assignments

A nonzero two-row determinant must remove one of the duplicated rows and insert the missing threshold. The second source row is unique, and its old threshold must also be restored. Both duplicated rows alone cannot repair the missing interval: their inward new positions remain below $Q<P$. A unique source at or below the missing interval cannot repair it either, because both new positions lie below the earlier source bead, which is itself below $P$. Thus the only unique row sources are the normally interlacing head rows $i\le r-1$, whose beads are at least $P'$.

For such $i$, the earlier source is $A=q_i$ and the later duplicated source is $B\in\{Q,Q'\}$. There are exactly two assignments:

* Direct: $A-h$ restores its own interval $[p_i,p_{i-1})$, and $B+h$ fills $[P,P')$.
* Exchange: $A-h$ fills $[P,P')$, and $B+h$ restores $[p_i,p_{i-1})$.

Their signs are $\varepsilon u_B$ and $-\varepsilon u_B$, respectively. Expanding the two replacement rows on the old unique threshold vector and the missing threshold vector gives exactly that direct-minus-exchange $2\times2$ determinant; every other threshold assignment leaves a missing or repeated base vector and vanishes.

For outward two-column sources, the affected endpoint must be the later, lowered source: raising either $P$ or $P'$ cannot reach the lower gap $(Q',Q]$. An earlier unique source column $i\le r-2$ raises within its own original interval $(q_{i+1},q_i]$, while endpoint $P$ or $P'$ lowers into the missing gap. The sign is $\varepsilon v_{\mathrm{endpoint}}$. The remaining possible pair consists of the endpoints themselves: $P'$ raises within their common old column threshold interval, and $P$ lowers into $(Q',Q]$. Its sign is $+\varepsilon$, because the actual repaired endpoint is $P$, with $v_r=+1$. No other pair can remove the duplicate columns and simultaneously fill the missing gap with outward moves. This classification retains both possible row target assignments and the full two-hook inverse coefficient (1).

Set

$$M_i=q_i-p_i\ge0\qquad(i\le r-1).$$

In the normal head, a row lowering within its own interval and a column raising within its own interval both have exactly $1\le h\le M_i$.

## 4. Direct terms match first potentials at the same index

For a fixed unique row $i\le r-1$, the direct sum is

$$R_i=\varepsilon\sum_{h=1}^{M_i}\left(1_{P\le Q+h<P'}\phi(q_i-Q-h)-1_{P\le Q'+h<P'}\phi(q_i-Q'-h)\right).$$

Writing the missing new position as $x=B+h$, the source-copy difference is $1_{x\le Q+M_i}-1_{x\le Q'+M_i}$. Therefore the exact interval form is

$$R_i=\varepsilon\sum_{d\in(q_i-P',q_i-P]\cap[p_i-Q,p_i-Q')}\phi(d).\tag{2}$$

All displayed $d$ are positive: the restored normal-head row remains above the missing interval.

For a unique column $i\le r-2$, split its inverse coefficient (1) into first and second potentials. Its first-potential sum is

$$C_i^{\mathrm{first}}=\varepsilon\sum_{h=1}^{M_i}\left(1_{Q'<P-h\le Q}\phi(p_i-P+h)-1_{Q'<P'-h\le Q}\phi(p_i-P'+h)\right).$$

Writing the new gap position as $y=E-h$, the endpoint difference is $1_{y\ge P-M_i}-1_{y\ge P'-M_i}$. With $d=p_i-y$ this becomes EXACTLY (2). Hence

$$R_i=C_i^{\mathrm{first}}\qquad(i\le r-2).\tag{3}$$

There is no reindexing as in the missing-below orientation; the head intervals match at the SAME index.

The second-potential sum is

$$C_i^{\mathrm{second}}=\varepsilon\sum_{h=1}^{M_i}\phi(h)\left(1_{Q'<P-h\le Q}-1_{Q'<P'-h\le Q}\right).\tag{4}$$

The actual column contribution is $C_i^{\mathrm{first}}-C_i^{\mathrm{second}}$.

## 5. Exchange assignments cancel the second potentials

In an exchange-row term put $k=A-B-h>0$. The new positions are $B+k$ in the missing interval and $A-k$ in the unique old interval. The own-interval condition is exactly $1\le k\le M_i$: its upper endpoint is automatic since $A=q_i<p_{i-1}$, and its lower endpoint gives $k\le q_i-p_i$. The signed exchange sum is

$$X_i=-\varepsilon\sum_{k=1}^{M_i}\phi(k)\left(1_{P\le Q+k<P'}-1_{P\le Q'+k<P'}\right).$$

The literal half-open/half-closed endpoint reciprocity is

$$1_{P\le Q+k<P'}-1_{P\le Q'+k<P'}=1_{Q'<P-k\le Q}-1_{Q'<P'-k\le Q}.$$

It follows by expressing each interval indicator as a difference of half-line indicators; all endpoints are integers, with precisely the shown strictness. Comparing with (4) gives

$$X_i=-C_i^{\mathrm{second}}\qquad(i\le r-1).\tag{5}$$

For every $i\le r-2$, equations (3) and (5) show $R_i+X_i-(C_i^{\mathrm{first}}-C_i^{\mathrm{second}})=0$ term by term. Thus the sole remaining row source is the boundary head row $r-1$, together with the two-endpoint column source.

## 6. The boundary head row and endpoint columns cancel exactly

Put

$$M=q_{r-1}-P'\ge0,\qquad B=P'-P>0,\qquad A=P-Q>0,\qquad L=Q-Q'>0,$$

and use the finite integer intervals

$$I_0=[A,A+L),\qquad I_1=I_0+B.$$

Formula (2) at $i=r-1$ gives

$$R_{r-1}=\varepsilon\sum_{d\in I_1\cap(M,M+B]}\phi(d).\tag{6}$$

Formula (4) at that same index is

$$C_{r-1}^{\mathrm{second}}=\varepsilon\sum_{h=1}^{M}\phi(h)\left(1_{I_0}(h)-1_{I_1}(h)\right).\tag{7}$$

For the endpoint pair, the upper endpoint $P'$ raises within its own threshold interval exactly when $h\le q_{r-1}-P'=M$. The lower endpoint $P$ lands in $(Q',Q]$ exactly when $h\in I_0$. Their source bead gap is $B$, and the repaired endpoint cofactor is positive. Its COMPLETE inverse contribution is therefore

$$C^{\mathrm{end}}=+\varepsilon\sum_{\substack{h\in I_0\\1\le h\le M}}\left(\phi(B+h)-\phi(h)\right).\tag{8}$$

This $+\varepsilon$ is essential; importing the missing-below endpoint sign would give the wrong expression.

The full residual commutator is $R_{r-1}+X_{r-1}-C^{\mathrm{end}}=R_{r-1}-C_{r-1}^{\mathrm{second}}-C^{\mathrm{end}}$. Substitute (6)–(8). The $\phi(h)$ terms on $I_0$ cancel, and the result is

$$\varepsilon\sum_{d\in I_1\cap[1,M+B]}\phi(d)-\varepsilon\sum_{\substack{h\in I_0\\1\le h\le M}}\phi(B+h)=0.$$

The equality is the explicit translation $d=h+B$. Since $A>0$, every integer in $I_1$ is at least $B+1$; the translated lower endpoint therefore agrees with the displayed positive-argument restriction. This proves cancellation of every formal coefficient, including $M=0$.


## 1. Exact two-row and outward-two-column expression

Choose $N>n$ and decreasing nonnegative beta lists $q_1>\cdots>q_N=0$ and $p_1>\cdots>p_N=0$. Set $H_{ij}=1_{q_i\ge p_j}$ and write $\phi(k)=\nu_{t-1}(z^k-1)$ for $k>0$. Work initially with independent formal symbols $\phi(k)$; the finite valuation specialization comes after cancellation.

The J constructor's signed beta formula gives the row side of the commutator as

$$\sum_{i<j}\sum_{h=1}^{q_i-q_j-1}\phi(q_i-q_j-h)\det H(q-he_i+he_j,p).\tag{1}$$

The inverse column side can be written uniformly as

$$\sum_{i<j}\sum_{h\ge1}\bigl(\phi(p_i-p_j+h)-\phi(h)\bigr)\det H(q,p+he_i-he_j).\tag{2}$$

Terms with a negative new bead or repeated new beads are zero. Both expressions are finite in the fixed size sector. Formula (2) accounts for both hook transfers from the same outward source: if its two changed bead values are $p_i+h$ and $p_j-h$, the inward lengths $h$ and $p_i-p_j+h$ yield the same target $p$, but the latter exchanges the two target beads and has the opposite sign. Their foot gaps are respectively $p_i-p_j+h$ and $h$. The remaining sorting sign is precisely the unsorted column determinant. Thus the coefficient is their difference as displayed, including the case $h=p_i-p_j$. It would be incorrect to discard crossed inverse sources before this pairing.

The assertion proved here is equality of (1) and (2) when $\operatorname{rank}H=N-2$. The common strip monomial is suppressed: every changed beta list has the same total as its original list, so both sides have the identical power of the new alphabet variable.

## 2. Threshold classification and the only potentially active pattern

For $v\ge0$ define its row threshold $\kappa(v)$ by

$$(1_{v\ge p_j})_{j=1}^N=(0,\ldots,0,1,\ldots,1),\qquad\text{first }1\text{ at }\kappa(v).$$

The threshold-$m$ interval is $I_m=[p_m,p_{m-1})$, with $p_0=+\infty$. Because $q_N=p_N=0$, every base row is nonzero. The base thresholds $\kappa(q_i)$ are nondecreasing. The vectors of different nonzero thresholds are independent (subtract successive threshold vectors), so the rank is their number. At deficiency two there are exactly two missing thresholds. The excess repetitions are either one triple, or two disjoint adjacent duplicate pairs.

A nonzero two-row replacement must remove exactly those excess copies and insert exactly the two missing threshold vectors. In (1), both new bead positions lie strictly between the original two source beads: $q_j<q_i-h<q_i$ and $q_j<q_j+h<q_i$. If the two removed rows came from one triple threshold, that entire interval between their bead positions has their already occupied threshold, so neither missing threshold can be supplied. Thus every term is zero in that case.

For two duplicate threshold values $r<s$, a nonzero term must remove one row from each duplicate pair. Every new position strictly between those source beads has threshold between $r$ and $s$ inclusive. Since $r,s$ are already occupied by the unchanged copies, the two missing thresholds must therefore satisfy

$$r<m_1<m_2<s.\tag{3}$$

If (3) fails, every row-side term vanishes.

The same condition is necessary for a nonzero outward two-column term. If the base first column is zero, it must be replaced; but it is necessarily the earlier source column, whose outward shift raises its bead still further above $q_1$, so it remains zero. Thus that boundary case has no nonzero term. To see this without assuming invertibility, the column at $v$ is $(1_{q_i\ge v})_i$, a prefix vector whose last $1$ index is $\ell(v)$. An outward replacement raises the bead in the earlier source column and lowers the bead in the later source column; its two new column-end indices respectively decrease and increase. A nonzero replacement must remove the two excess column copies and insert the two missing column-end values, so those missing ends lie strictly outside the two source repeated-end values, in opposite directions. Relate the two threshold lists by

$$\ell(p_j)=\#\{i:\kappa(q_i)\le j\}.$$

A duplicated row threshold is a jump of size two (or three) in this cumulative count; a missing row threshold is a flat step. Two outward column repairs require two separate size-two jumps, with both flat steps strictly between them. A size-three jump gives adjacent missing column ends with no repeated-end value strictly between them, so cannot be repaired outward. The size-two jumps at $r,s$ and the two intervening flats give exactly (3). This proves the column necessity and shows that all other deficiency-two patterns have both sides zero.

In the active pattern (3), the upper duplicate rows are $r,r+1$, and the lower duplicate rows are $s-1,s$. Write their bead positions as

$$Q=q_r>Q'=q_{r+1},\qquad R=q_{s-1}>R'=q_s.$$

Write the missing intervals as

$$I_1=[P,P')=[p_{m_1},p_{m_1-1}),\qquad I_2=[S,S')=[p_{m_2},p_{m_2-1}).$$

They satisfy $Q'\ge P'>P\ge S'>S>R$. The only missing column-end intervals are

$$J_Q=(Q',Q],\qquad J_R=(R',R].$$

The repeated column groups are columns $m_1-1,m_1$ and $m_2-1,m_2$. If $m_2=m_1+1$, these groups share a column and form a triple; the calculation below includes that case explicitly.

## 3. The exact cofactor signs

Set

$$\varepsilon=(-1)^{m_1-r+s-1-m_2}.$$

Replacing the first upper duplicate row $r$ by a threshold-$m_1$ row and the first lower duplicate row $s-1$ by a threshold-$m_2$ row gives determinant $\varepsilon$. Indeed moving the first new row from position $r$ to its sorted position $m_1$ crosses $m_1-r$ rows, and moving the second from position $s-1$ to $m_2$ crosses $s-1-m_2$ rows. These intervals of moves are disjoint because $m_1<m_2$. Switching which copy of either duplicated source is replaced changes the sign; swapping the two supplied missing thresholds also changes the sign. These statements follow alternatively by transposing the two equal base rows or the two inserted rows.

On the column side choose the lower endpoint $P=p_{m_1}$ from the first repeated group and $S=p_{m_2}$ from the second. Replace them by a column in $J_Q$ and a column in $J_R$, respectively. Moving the first new column from position $m_1$ to column-end position $r$, and the second from position $m_2$ to $s-1$, crosses the same numbers of columns. Its determinant is therefore the SAME $\varepsilon$. Replacing the other copy in either source group changes its sign. Thus the endpoint signs are $P:+$, $P':-$, $S:+$, $S':-$, with common factor $\varepsilon$.

## 4. Every formal coefficient cancels by endpoint reciprocity

For $k>0$ abbreviate

$$A_I(k)=1_{R+k\in I}-1_{R'+k\in I},\qquad B_I(k)=1_{Q-k\in I}-1_{Q'-k\in I}.$$

In (1) put $k=q_i-q_j-h$. Its new row positions are $q_j+k$ and $q_i-k$. The two missing intervals are strictly between the upper and lower source threshold intervals, so all nonzero indicators automatically imply $0<k<q_i-q_j$ and $h>0$; no guard has been dropped. The source-copy signs and the two possible assignments of the missing intervals give the COMPLETE coefficient of $\phi(k)$:

$$\varepsilon\bigl(A_{I_1}(k)B_{I_2}(k)-A_{I_2}(k)B_{I_1}(k)\bigr).\tag{4}$$

On the column side define

$$D_P^{\pm}(J;k)=1_{P\pm k\in J}-1_{P'\pm k\in J},\qquad D_S^{\pm}(J;k)=1_{S\pm k\in J}-1_{S'\pm k\in J}.$$

The positive $\phi(p_i-p_j+h)$ term in (2) at coefficient $\phi(k)$ has new column positions $p_j+k$ and $p_i-k$; the negative $\phi(h)$ term has positions $p_i+k$ and $p_j-k$. The first target must lie in $J_Q$, the second in $J_R$. The target intervals are above and below all source endpoint values, respectively, so these indicators automatically imply the required positive $h$. Cofactor signs therefore give the COMPLETE coefficient

$$\varepsilon\bigl(D_S^+(J_Q;k)D_P^-(J_R;k)-D_P^+(J_Q;k)D_S^-(J_R;k)\bigr).\tag{5}$$

If the two repeated column groups overlap, the formal product sum includes the common endpoint choice $p_i=p_j=P=S'$. It contributes zero: the positive and negative terms in (2) then have identical weight $\phi(h)-\phi(h)$. Consequently (5) remains exact; it has not assigned a two-column minor to one column twice.

For any $a<b$ and $c<d$ the elementary endpoint identity is

$$1_{a\le d+k<b}-1_{a\le c+k<b}=1_{c<a-k\le d}-1_{c<b-k\le d}.\tag{6}$$

It follows by expressing each interval indicator as a difference of half-line indicators and canceling, or by considering the four possible relative positions of the two interval endpoints. Applying (6) with $(a,b)=(P,P')$ and $(c,d)=(R',R)$ gives

$$A_{I_1}(k)=D_P^-(J_R;k).$$

The same substitution with $I_2$ gives $A_{I_2}(k)=D_S^-(J_R;k)$. Applying the reversed-shift version to $(Q',Q)$ gives

$$B_{I_1}(k)=D_P^+(J_Q;k),\qquad B_{I_2}(k)=D_S^+(J_Q;k).$$

Substitute these four literal indicator identities into (4). The resulting expression is exactly (5). Thus every formal coefficient $\phi(k)$ is equal on the row and column sides, proving (1)=(2) at deficiency two. This is an actual finite signed-minor cancellation, including adjacent missing thresholds and overlapping column groups.

## 5. Higher deficiency and exact boundary

If $\operatorname{rank}H\le N-3$, changing two rows or two columns can increase rank by at most two. Every determinant in (1) and (2) is therefore zero. Hence the samecomponent commutator also vanishes in that case.

All nonzero retained terms in the deficiency-two proof are valid exterior bead transfers; repeated or negative targets have already been assigned determinant zero. Since $k>0$, $z^k-1$ is nonzero in every LM generic field, so its finite valuation is legitimate, including the higher positive-characteristic value. Formal coefficient cancellation therefore specializes without any field restriction. The artificial infinite top interval never occurs in the active pattern, because $m_1>r\ge1$; the common padded zero bead prevents a missing last threshold. There is no hidden boundary term.


# Rim-hook foot exponents in the LM deformation

Same native24 first pending repair; local prerequisite construction only. No native, readiness or gate writes. This proves applicability of the Laurent-binomial valuation leaf, not the Schur determinant identity.

For a removable rim hook of length L from a partition rho to kappa of size M, write its foot as (h,j), with h the height of its column, and foot content gamma=j-h. Then

-(M+L-1) <= gamma <= M.

Indeed h<=|rho|=M+L and j>=1 give the lower bound. Every box strictly left of the foot in its row survives removal: the rim hook ends at the bottom box of its starting column and removes no box to its left. Thus j-1<=M, and h>=1 gives gamma<=M.

Suppose lambda and mu have size n and remove equal-length hooks L in distinct components a,b to the same multipartition. If those remainder components have sizes M_a,M_b, their foot contents satisfy |gamma_x-gamma_y|<=M_a+M_b+L-1<=n-1. Therefore the deformation exponent difference

N=n(a-b)+gamma_x-gamma_y

is nonzero. This includes n=1 and all field characteristics: it is an integer exponent assertion, not a nonzero scalar modulo characteristic.

For hooks in the same component, equal foot content and equal length L determine the same inverse hook addition to the common remainder. More explicitly, choose a common beta-set charge c. Removing a hook with foot content gamma replaces a bead at v+L by a bead at v, where v=gamma+c-1. Thus the remainder beta-set and the pair (v,L) reconstruct the original partition uniquely. Equal foot contents would force lambda=mu. In the strictly dominant distinct-label terms of the Jantzen sum this is excluded, so again N!=0.

Consequently whenever the constant foot residues coincide, their two deformed residues differ by a nonzero Laurent exponent. The binomial does not vanish identically over F(t). Its valuation at t=1 is 1 in characteristic zero and p^{v_p(N)} in characteristic p. If the constant residues differ, the valuation is zero. The preceding complete marked-strip cancellations establish the determinant/rim-hook identity; this bound proves finite applicability of its valuations.


All receiving components and all ranks are covered: support, deficiency1 in both orientations, deficiency2, and deficiency≥3. Untouched defective components kill a term. Thus the displayed complete marked-strip commutator holds. Telescope it over the type-row labels from the empty shape J0=0. The inserted strip factors multiply to the exact monic norms. At every ACTUAL multipartition ν the coefficient is V(detGλν)=ΣµJλµKµν. The empty n0 case is0; all ranks retain the fixed parameters. Artificial symbols cancel before evaluation, and the included foot bound makes every retained difference nonzero. This completes the proof.


# thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations

## Statement

Let F be any field, q_H in F^× have finite multiplicative order e>=2, ell>=1 be arbitrary, and Q_a=q_H^(c_a), with charges c_a in Z. Fix n>=0 and let S_F be the cyclotomic q-Schur algebra with summands indexed by all ell-multipartitions of n. Put

$$O=F[t,t^{-1}]_{(t-1)},\quad \pi=t-1,\quad K=F(t),\quad z=q_Ht,\quad U_a=Q_at^{na}.$$

Let Delta_O(lambda) be its standard Weyl lattice with its actual cellular form. Define

$$\Delta_O(\lambda)(s)=\{v:\langle v,\Delta_O(\lambda)\rangle\subseteq\pi^sO\},\qquad\Delta_F(\lambda)^s=(\Delta_O(\lambda)(s)+\pi\Delta_O(\lambda))/\pi\Delta_O(\lambda).$$

Then this is a filtration by S_F-submodules, its first term is rad Delta_F(lambda), it terminates, and in the INTEGER Grothendieck group of finite-dimensional S_F-modules,

$$\sum_{s>0}[\Delta_F(\lambda)^s]=\sum_{\mu}J_{\lambda\mu}[\Delta_F(\mu)].$$

For a node x=(i,j,a), define the rim hook r_x^lambda and foot f_x^lambda=(lambda'_j,j,a) as in LM, leg(r_x^lambda)=lambda'_j-i, and res_O(i,j,a)=U_a z^(j-i). If lambda strictly dominates mu, set

$$J_{\lambda\mu}=\sum_{\substack{x\in[\lambda],\ y\in[\mu]\\[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}}(-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)}\nu_\pi\big(\operatorname{res}_O(f_x^\lambda)-\operatorname{res}_O(f_y^\mu)\big);$$

otherwise set J_(lambda mu)=0. Equal remainder diagrams force equal hook lengths. Every displayed difference is nonzero in K, including samecomponent terms with distinct labels, by the local foot-exponent separation proof. No level-one or characteristic-zero restriction is present.


## Complete local proof

## Facts and local proof suppliers to bind

[F1] [[thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage]] and [[lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms]]: Actual arbitrary-level Q/Murphy/S2 construction: S_O is finite free and cellular, Delta_O(lambda) is finite free with its contravariant cellular form, every specialized standard has a nonzero unit Gram entry1, and the multipartition weight projections e_nu are selfadjoint and act on the actual semistandard type-nu basis. Over K the Hecke and Schur standards are split simple, so their forms are nondegenerate. The standard classes form a Z-basis of K0 and their multipartition-weight Kostka submatrix is unitriangular. These are the exact supplied Q contracts, not consequences assumed from J.

[F2] [[lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms]]: Proved local monic Gram product: with the actual Specht Murphy form, dominance-MINIMAL refinement t_T, row symmetrizer coefficient C_(t_T), and prefix polynomial eigenvalue u_T,

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}u_T}.$$

The inverse-permutation-operator proof inserts the essential m_nu inverse; the spectral transition has determinant exactly1; the explicit parabolic coefficient and Specht norm recurrence were proved locally. All their denominators are nonzero in the permitted F(t), and generic operations do not divide the O-lattice by a quantum factorial. Full bodies are in the sibling Gram directory and `explicit-parabolic-factor-and-schur-gram-product.md`.

[F3] [[lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums]]: Proved local pair-factor/strip recursion: this norm is exactly the boundary/node-pair product in the sibling pair-reduction packet. Adding the next type-row label gives a permitted strip rho→lambda with factor F_(lambda rho)^(a) in `beta-current-and-horizontal-strip-commutator-reduction.md`. A product of these factors over a tableau chain is the norm in F2.

[F4] [[lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums]]: Proved local complete marked-strip identity: the signed hook matrix J, with all auxiliary ranks using the SAME fixed z,U_a, and the coefficient-one strip matrix Γ_a obey

$$\big(J_n\Gamma_a^{(n,m)}-\Gamma_a^{(n,m)}J_m\big)_{\lambda\rho}=\Gamma_a^{(n,m)}(\lambda,\rho)\,\nu_\pi(F_{\lambda\rho}^{(a)}).$$

On support, both samecomponent and crosscomponent cases were proved by explicit triangular step-matrix minors and interval overlap cancellation. Off support, the crosscomponent rank-one adjugate proof covers all defects; the samecomponent proof covers rank<=N-3, rankN-2, and rankN-1 in BOTH missing-interval orientations, including the top zero-column boundary. These are actual local proof bodies; no unnamed sign-reversing cancellation or James–Mathas quotation remains. The complete case carriers and hashes are listed in the construction record and handoff inventory.

[F5] [[lem-dvr-cellular-jantzen-filtration-and-gram-valuation]] and [[lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes]]: Proved DVR leaves: the filtration is contravariant-stable; its first term is the reduced form radical, equal to the module radical for these nonzero-form cellular standards; Smith reduction gives finite termination and sum_(s>0)dim e_nu Delta_F(lambda)^s=V(det G_(lambda nu)). Exactness of selfadjoint weight projection and the multipartition Kostka unitriangular matrix give integer K0 character injectivity. Full local proofs are in `dvr-leaves-and-exact-jantzen-gap.md`.

## Proof

**Given:** the arbitrary field, level, charges, actual Schur construction, and deformation specified in the Statement.

1.1 For n=0 there is one empty multipartition, S_O=O, Delta_O=O with form1, every positive filtration term is0, and every J coefficient is0; the assertions follow directly. For n>=1, F1 gives free standard lattices with nondegenerate generic forms. F5's Smith reduction shows the defined filtration is by submodules, begins at Delta_F(lambda), has first term equal to the form radical, and is zero for all sufficiently large s. The nonzero cellular form's rank-one cell actions force every proper submodule into that radical, so it is the module radical. [given, F1, F5]

1.2 It remains to prove the class sum. Fix an ACTUAL multipartition weight nu. The selfadjoint orthogonal decomposition by e_nu makes its standard weight space orthogonal to every other weight space. F5 therefore gives sum_(s>0)dim_F e_nu Delta_F(lambda)^s=V(det G_(lambda nu)). By F2 and valuation additivity, this is the sum over type-nu semistandard T of the valuations of their explicit monic norms. Empty spaces use determinant1 and contribute0. [F2, F5, step 1.1]

2.1 Introduce ordered variables for type-row labels. The AUXILIARY generating series of flagged semistandard tableaux is the product over physical components a of s_(lambda^(a))(Y_a), with Y_a the alphabet of type components at least a. Its coefficient at an actual multipartition nu is K_(lambda nu). Successive Γ_a matrices add the horizontal strips carrying each next label and therefore enumerate these tableaux once. The path/Jacobi–Trudi cancellation in `signed-rim-hooks-to-beta-jacobi-trudi-reduction.md` proves this character identity locally. No actual Schur weight or module for another composition is needed. [F1, F3]

2.2 Pad beta lists to N>n. Removing a hook of length h lowers one beta bead by h, with sorting sign (-1)^leg; adding it raises a bead by h with the corresponding sign. The foot content is the lower bead position minus N plus1. Thus the full signed equal-length hook side is precisely the finite shifted-beta Jacobi–Trudi polynomial proved in that same packet. Samecomponent inward ranges, crosscomponent earlier-to-later ranges, occupied-position zero terms, and the unit foot-residue shift were all established there. Its coefficient at nu is sum_mu J_(lambda mu)K_(mu nu). [F4, step 2.1]

3.1 Apply the COMPLETE local identity F4 to the product of successive type-row Γ matrices and telescope JΓ−ΓJ. Start with the empty shape, where J_0=0. Each commutator inserts exactly the valuation of the strip factor at that label position, while all other Γ factors retain the same tableau chain. Summing inserted positions gives the total valuation of the product of the factors over the chain, hence of the monic norm by F3. The left endpoint of the telescope gives exactly the auxiliary polynomial in step2.2. Consequently, at the ACTUAL multipartition coefficient nu,

$$\nu_\pi(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu}.$$

Every auxiliary rank keeps the final-rank-n parameters U_a=Q_a t^(na); no inconsistent rank-dependent deformation is substituted during the telescope. [F2, F3, F4, step 2.2]

3.2 All binomial valuations used in the proof are exact. For a nonzero difference A t^u-B t^v, unequal constants give valuation0; equal constants with u-v!=0 give valuation1 in characteristic zero or p^(v_p(|u-v|)) in characteristic p. Artificial padded symbols in the crosscomponent minor proofs cancel FORMALLY before evaluation; the retained terms are actual valid hook/node pairs, whose exponent bound makes their differences nonzero. Thus step3.1 is valid over every F and retains the required higher positive-characteristic multiplicities. [F4, step 3.1]

4.1 Combining steps1.2 and3.1 shows that the actual multipartition-weight character of sum_(s>0)[Delta_F(lambda)^s] equals that of sum_mu J_(lambda mu)[Delta_F(mu)]. Weight projection is exact, so these are additive characters on the integer K0 group. The standard classes form its Z-basis by F1; their multipartition weight matrix is unitriangular, hence invertible over Z. A zero difference of these weight characters therefore has all standard coefficients zero. This proves the asserted INTEGER K0 equality, with no rationalization and no Schur-functor injectivity claim. [F1, F5, step 1.2, step 3.1] ∎

