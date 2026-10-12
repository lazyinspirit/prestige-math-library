# Product evaluation, finite symbols, and full reduction generation

Run: frontier-44-special-representation-examples-28. Author: /root/exception_shifted_pbw_generation_constructor. This is a proof construction, not an independent audit, native decision, or gate receipt. Original ordinary repair counters remain unchanged at their authentic values. Root owns integration and all consumer reconciliation.

## Verified source context and exact defect

Actually read the saved affine proofnote `research/frontier-44-special-representation-examples-28-owner-category-o-batch17-affine-yangian-proof.md`, especially §3, and its finite-W companion §§1–2. The former already uses the true ordered evaluation product. Actually read the saved BK5 fulltext `research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/head-tail-path-model-adoption/bk5-read.txt`, printed pp.16–20,31–39,48–49, and the saved BK109 actual excerpts for §§3.3–3.5. No assertion that unseen pages have been read is made. BK5 pp.37–39 use a degree-by-degree dimension sandwich to prove generation of the entire reduction; their displayed left E/F projection recursion at (10.16)–(10.17) is inconsistent with their own (10.12)–(10.13) and must be corrected, as already recorded in the local finite-W note.

Current PBW Proof 1.2 incorrectly gives the coproduct evaluation as an additive resolvent and then differentiates the coefficients of a different polynomial product. For two factors the actual map has the additional nonzero term $E^{(1)}E^{(2)}/((u-c_1)(u-c_2))$. A subset of an independent basis can lose independence in a quotient, so the sentence restricting infinite PBW to prove finite quotient independence is also invalid. Current loop Proof 2.1 additionally confuses independence of filtered elements with independence of their leading symbols.

## 1. Actual RTT product and its Jacobian

Let $A_a=U(\mathfrak{gl}_n)$ be mutually commuting tensor factors. Matrix-unit brackets verify the RTT identity for $L_a(u)=I+E^{(a)}/(u-c_a)$. In leg notation, if $A$ and $B$ satisfy RTT and all coefficients of $A$ commute with those of $B$, then

$$R A_1 B_1 A_2 B_2=R A_1 A_2 B_1 B_2=A_2 A_1 R B_1 B_2=A_2 A_1 B_2 B_1 R=A_2 B_2 A_1 B_1 R.$$

Thus the evaluation-coproduct map is precisely the ordered product $L_1(u)\cdots L_l(u)$. One may choose $c_a=0$ for every factor; no distinct evaluation points are needed for independence. Then its coefficient of $u^{-r}$ is

$$P_r(E^{(1)},\ldots,E^{(l)})=\sum_{a_1<\cdots<a_r}E^{(a_1)}\cdots E^{(a_r)}.$$

With standard enveloping PBW degree one on each $E^{(a)}$, this coefficient is homogeneous of degree $r$. Its symbol is the same ordered elementary matrix polynomial $P_r(X_1,\ldots,X_l)$ in independent commutative matrix-entry coordinates. At $X_a=h_aI$ with distinct $h_a$, its derivative is

$$dP_r=\sum_{a=1}^l e_{r-1}(h_1,\ldots,\widehat{h_a},\ldots,h_l)\,dX_a,\qquad 1\le r\le l.$$

The coefficient matrix is invertible: its columns are the coefficient vectors of $\prod_{b\ne a}(1+h_bz)$, and evaluating these polynomials at $z=-1/h_c$ makes the matrix diagonal with nonzero diagonal entries (choose all $h_a$ nonzero). Equivalently its determinant is a nonzero Vandermonde factor. This works separately on every matrix entry and gives full rank $ln^2$.

A full-rank Jacobian implies algebraic independence in characteristic zero: a polynomial relation of minimum total degree yields, after differentiation and inversion of the Jacobian over the rational function field, relations for each partial derivative of smaller degree. Minimality makes every derivative zero; the relation is constant and hence zero. Therefore the first $l$ RTT coefficient matrices are algebraically independent in their commutative symbols. A finite linear relation in ordered RTT monomials has a largest weighted degree; applying the evaluation map and enveloping PBW contradicts independence of these symbols. Taking $l$ at least the largest mode proves RTT PBW. The distinct numbers $h_a$ are a point of the commutative symbol space, not spectral evaluation parameters.

Formal Gauss factorization is a polynomial triangular change of coefficient coordinates: in degree $r$, the diagonal, upper, and lower Gauss coefficients equal their corresponding RTT coefficients plus polynomials in strictly smaller mode indices. Conversely $T=FDE$ is polynomial coefficientwise. Hence the same canonical independence holds for all Gauss root modes.

To handle shifted abstract generators, first straighten their defining Drinfeld relations into ordered root-mode words. These relations lower canonical degree upon swapping; higher roots are defined by adjacent root commutators, and the Serre relations resolve the adjacent overlap. Their images in the RTT algebra have exactly the corresponding Gauss canonical symbols. The latter form a subset of a polynomial coordinate system, so the spanning words are independent, and the abstract shifted presentation embeds. No truncation assertion enters this step. The loop brackets are the current brackets by taking degree $r+s-2$ in these relations. PBW for the resulting current Lie algebra follows from finite jets: any proposed relation uses finitely many modes, and a jet quotient $\mathfrak{gl}_n[t]/(t^K)$ with larger $K$ preserves every involved basis vector. Finite-dimensional enveloping PBW makes their ordered monomials independent. The same argument applies to the shifted current subalgebra, using the shift inequalities to check closure. Its associated graded identification is strict because canonical independence prevents a relation between loop monomials once the straightening has been performed with loop degree.

## 2. Finite Levi symbols, including their degrees

Use the explicit signed path D/E/F generators, and assume only the separate constructor's proved invariance for ALL allowed generators on the original and reflected pyramids. We do not assume that these generators generate either reduction or that the finite shifted quotient is a W-algebra.

Let $\pi:U(\mathfrak p)\to U(\mathfrak h)$ kill the strictly positive-degree radical. Give $e_{ab}\in\mathfrak p$ canonical/Kazhdan degree $\operatorname{col}(b)-\operatorname{col}(a)+1$. All these degrees are positive. On the Levi the filtration is standard PBW. Scalar shifts in the diagonal automorphisms have smaller degree, so they disappear on symbols. Let $X_c$ denote the matrix-entry variables of the $c$th Levi block. In path coefficients only same-column factors survive this projection. At $X_c=h_cI$ define $Q_i(z)=\prod_{c\le p_i}(1+h_cz)$ on the left-justified pyramid.

The diagonal symbol is $D_i(z)=Q_i(z)$ at this point. Its first differential in the diagonal entry of the $c$th column is $z\prod_{a\le p_i,a\ne c}(1+h_az)$. For $i<j$, put $m=p_i$ and $M=p_j$. A first variation has precisely one off-diagonal matrix entry, in a common column $c\le m$. All other path factors are diagonal. Strict forward column steps sum the numerators; repeated visits on the negative side of a Gauss cut sum the geometric denominator. Directly summing those paths, or differentiating the Gauss cut identity, gives

$$dE_{ij}(z)=\frac{z\prod_{a=m+1}^M(1+h_az)}{1+h_cz}\,dX_{c,ij},\qquad dF_{ji}(z)=\frac{z}{1+h_cz}\,dX_{c,ji}.$$

These are first-variation identities on the ALLOWED shifted coefficients. They do not identify excluded low modes with shifted generators and do not assert that the full block-supported product satisfies unshifted RTT. The higher-root first variations can also be proved directly, without assuming a full-product identity. On $S(\mathfrak h)$ use the linear Lie–Poisson bracket, the leading symbol of an enveloping commutator. Its Poisson tensor is zero at the scalar block point $X_c=h_cI$. Therefore the differential there of a Poisson bracket depends only on the two first differentials and the differential of the Poisson tensor. For $i<k<j$, $p_i=m$, $p_k=t$, $p_j=M$, the root recursion $E_{ij}^{(r)}=[E_{ik}^{(r-s_{kj})},E_{kj}^{(s_{kj}+1)}]$ in canonical degree $r$ gives the product of the two common-column linear coefficients, since $\{X_{c,ik},X_{c,kj}\}=X_{c,ij}$ and different columns Poisson commute. At $r=M-m+a$, those coefficients are $(-h_c)^{a-1}\prod_{m<b\le t}(h_b-h_c)$ and $\prod_{t<b\le M}(h_b-h_c)$. Their product is the asserted coefficient for $E_{ij}^{(r)}$. For F the reversed root recursion uses $\{X_{c,jk},X_{c,ki}\}=X_{c,ji}$; its lowest-mode coefficient is one and the other coefficient is $(-h_c)^{r-1}$. Induction on $j-i$ proves every higher-root block. Reflection interchanges these recursions. This also explains precisely why higher-root correction terms cannot change the stated first variation at the scalar point. This distinction is essential when $p_i\ne p_j$.

Extracting the finite modes $E_{ij}^{(M-m+k)}$, $F_{ji}^{(k)}$, $1\le k\le m$, gives respectively

$$(-h_c)^{k-1}\prod_{a=m+1}^M(h_a-h_c),\qquad(-h_c)^{k-1}.$$

Indeed for $P(z)=\prod_{a=m+1}^M(1+h_az)$ of degree $d=M-m$, the coefficient of $z^{d+k}$ in $zP(z)/(1+h_cz)$ is $(-h_c)^{k-1}(-h_c)^dP(-1/h_c)=(-h_c)^{k-1}\prod_{a=m+1}^M(h_a-h_c)$. The upper range is therefore $s_{ij}<r\le s_{ij}+p_i$, exactly the existing mode convention. The lower range is $1\le r\le p_i$; diagonal range is $1\le r\le p_i$.

Choose all $h_c$ nonzero and distinct. Each upper/lower block is an invertible Vandermonde matrix, with the displayed nonzero column multipliers in the upper case. Each diagonal block is the elementary-symmetric Jacobian already proved invertible. Each ordered row pair has its own column-entry variables, and other row pairs contribute no first variations at the diagonal point. The complete Jacobian is thus block diagonal of rank $\sum_{i,j}\min(p_i,p_j)$. Empty rows contribute zero-sized blocks. It follows that all finite canonical symbols are algebraically independent in $S(\mathfrak h)$.

Reflection reverses column order, transposes the shift matrix, and interchanges the upper and lower calculations. With the reflected row-presence intervals, the same common-column Vandermonde and extra-column nonzero factors result. In particular this independence holds on the reflected pyramid without appealing to an anti-isomorphism between already generated W-algebras.

## 3. Exact weighted Hilbert equality proves FULL generation

Let $\mathcal W_\pi$ be the ENTIRE left quantum Hamiltonian reduction in $U(\mathfrak p)$, with the defining diagonal shift. By the local Gan–Ginzburg lemma (proved using its transverse product and Chevalley–Eilenberg lifting, independently of Yangian PBW),

$$\operatorname{gr}_K\mathcal W_\pi=\mathbb C[S].$$

The homogeneous transverse slice coordinate weights are the highest good-grading centralizer degrees plus one, namely $s_{ij}+1,\ldots,s_{ij}+\min(p_i,p_j)$ for each $(i,j)$. Under the doubled grading used in that lemma these weights are $2r$; divide by two here. One can obtain this precise multiset from the rowwise $\operatorname{Hom}(R_j,R_i)$ strings in its Proof 1.1, or by trace-pairing lowest slice vectors with the displayed homogeneous centralizer basis. Reflection uses $s_{ji}$ and gives the same calculation for its own grading. Consequently

$$H_\pi(t)=\prod_{i,j}\prod_{r=s_{ij}+1}^{s_{ij}+\min(p_i,p_j)}(1-t^r)^{-1}.$$

All factors have positive integer degree; each coefficient is finite. This is an equality of homogeneous Hilbert series, not an ungraded dimension count. Let $M_d$ span the ordered monomials in the explicit finite generators of total degree at most $d$. Their invariance gives $M_d\subseteq F_d^K\mathcal W_\pi$. The Levi Jacobian proves their symbols independent: any finite relation in the projected enveloping monomials has a highest PBW degree and would contradict polynomial independence there. Hence $\dim M_d=\sum_{k\le d}[t^k]H_\pi(t)$. Gan–Ginzburg gives EXACTLY the same finite dimension for $F_d^K\mathcal W_\pi$. Therefore $M_d=F_d^K\mathcal W_\pi$ for EVERY $d$. Exhaustivity proves that these generators generate the WHOLE reduction, and their ordered monomials form its filtered basis. The same argument, with reflected invariance and transposed degree multiset, proves whole reflected reduction generation. No reflected generation or W-PBW conclusion was used to establish this equality.

It also proves that the Levi projection is injective on the entire reduction. To identify the abstract truncated shifted quotient, use the local Drinfeld coefficient relations of the invariant paths and the cutoff $D_1^{(r)}=0$ for $r>p_1$ to obtain its homomorphism to the reduction. Its finite straightening follows by induction from the identities

$$E_{c-1}^{(r)}=[D_{c-1}^{(r-s_{c-1,c})},E_{c-1}^{(s_{c-1,c}+1)}]-\sum_{t=1}^{r-s_{c-1,c}-1}D_{c-1}^{(t)}E_{c-1}^{(r-t)},$$

and the analogous F identity; $[E_{c-1}^{(a)},F_{c-1}^{(b)}]$ supplies the next diagonal modes. More explicitly, writing $D_i(u)^{-1}=\sum A_i^{(t)}u^{-t}$, the relevant diagonal relation is $D_c^{(r)}=-\sum_{t=1}^r A_{c-1}^{(t)}D_c^{(r-t)}-[E_{c-1}^{(r-s_{c,c-1})},F_{c-1}^{(s_{c,c-1}+1)}]$, with the appropriate fixed row entries in a parabolic block. Induct on $c$ and then on $r$; the relation $p_c=p_{c-1}+s_{c-1,c}+s_{c,c-1}$ ensures precisely the finite ranges above. Higher root modes come from adjacent root commutators. The resulting finite ordered words span the quotient; their reduction images are the independent basis just proved. Thus the homomorphism is an isomorphism, and there is no claim that restriction of infinite PBW alone establishes a quotient basis.

## 4. Strict loop filtration and the finite T basis

Under Gauss inversion and multiplication, in each surviving coefficient index $r$, the finite $T_{ij}^{(r)}$ equals the corresponding finite Gauss generator plus products of modes with smaller coefficient indices and total canonical degree $r$. A product of $k\ge2$ such factors has loop degree at most $r-k<r-1$. The signed path formula's single-factor part is therefore the loop symbol

$$\operatorname{gr}_{r-1}^{\mathrm{loop}}T_{ij}^{(r)}=(-1)^{r-1}\sum_{\substack{\operatorname{row}(a)=i,\operatorname{row}(b)=j\\\operatorname{col}(b)-\operatorname{col}(a)=r-1}}e_{ab}=(-1)^{r-1}e_{ij;r-1}.$$

The finite T coefficient coordinate change is weighted triangular; excluded lower indices are zero and the highest cutoff is proved by the column recursion, not by calling higher diagonal Gauss modes zero. Thus the finite T monomials have the same canonical filtered basis property. Their loop symbols are independent for a different, direct reason: the $e_{ij;r-1}$ form a homogeneous basis of the actual finite-dimensional subalgebra $\mathfrak g^e\subseteq\mathfrak p$. Extend this basis to a homogeneous vector-space basis of $\mathfrak p$ and apply finite-dimensional enveloping PBW. The corresponding ordered monomials in $U(\mathfrak p)$ are independent. Their grading degrees are their exact total loop degrees. Therefore a linear combination of T monomials cannot drop below its largest loop degree: the leading homogeneous sum in $U(\mathfrak p)$ is nonzero. This proves strictness of the monomial loop filtration versus the intersection filtration in the theorem and shows that the symbols form a basis of $\operatorname{gr}^{\mathrm{loop}}\mathcal W_\pi$.

Since they lie in the ACTUAL ambient $U(\mathfrak p)$, their products and brackets are the actual products and brackets of $U(\mathfrak g^e)$; no unsupported truncation of current brackets is required. This proves $\operatorname{gr}^{\mathrm{loop}}\mathcal W_\pi\cong U(\mathfrak g^e)$. The increasing filtration is bounded below with $F_{-1}=0$ and exhaustive; separatedness follows from these actual grading components, not from a no-zero-divisor assertion. Reflection repeats the same ambient PBW argument.

## Join status

Product evaluation and Jacobian, finite Levi first variations, exact weighted GG dimension equality, and ambient-PBW loop strictness are supplied here. Root must join the separate constructor's exact ALL-generator invariance and path-recursion coefficient verification for both pyramids before accepting the combined theorem proof. This note never substitutes a citation for that prerequisite, never assumes generated reductions in establishing generation, and does not declare native acceptance.
