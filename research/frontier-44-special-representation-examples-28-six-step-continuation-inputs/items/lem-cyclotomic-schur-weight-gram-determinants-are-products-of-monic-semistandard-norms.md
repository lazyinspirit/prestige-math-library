---
id: lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms
kind: lemma
title: "Cyclotomic Schur weight Gram determinants are products of monic semistandard norms"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases,
       lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis,
       lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms,
       def-determinant-of-a-square-matrix,
       thm-determinant-multiplicative,
       thm-determinant-of-transpose]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, Seminormal forms and Gram determinants for cellular algebras, math/0604108v4"
      url: "https://arxiv.org/pdf/math/0604108v4"
      locator: "Example 2.17 PDF pp. 7–8 and Theorem 3.12/Remark 3.13 PDF pp. 12–13 actually read; general strategy only, explicit Schur proof local."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Extracted text PDF pp. 5–6, Definition 2.5 and Theorem 2.6 actually read; original Jucys–Murphy full proof unread, complete local alternative supplied."
---

## Statement

Work with the arbitrary-level Murphy/Schur datum of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]] over
either (i) the fraction field $K$ of the universal Laurent parameter ring,
including the generic field of the Lyle–Mathas deformation, or (ii) any field
$F$ with nonzero $q_H,Q_1,\dots,Q_\ell$ under the deformation
$z=q_Ht$, $U_a=Q_at^{na}$ in $F(t)$. Let $b_\lambda$ be the Murphy cellular
form on the Specht module $V_\lambda$ with basis $v_s$ over standard
tableaux $s$ and $v_0=v_{t^\lambda}$; put
$B_k=\sum_{a\le k}|\nu^{(a)}|$,
$u_\nu=\prod_{k=2}^{\ell}\prod_{r=1}^{B_{k-1}}(X_r-U_k)$,
$x_\nu=\sum_{w\in\mathfrak S_\nu}T_w$, $m_\nu=u_\nu x_\nu$, let $A_\nu$ be
the action of $m_\nu$ on $V_\lambda$, let
$P_\nu(z)=\sum_{w\in\mathfrak S_\nu}z^{\ell(w)}$, and let
$$f_s=v_s+\sum_{r\triangleright s}a_{sr}v_r,\qquad \gamma_s=b_\lambda(f_s,f_s)$$
be the monic simultaneous Jucys–Murphy eigenbasis and its norms. Let
$G_{\lambda\nu}$ be the Schur cellular Gram matrix on the type-$\nu$ basis of
$\Delta(\lambda)$, indexed by the semistandard $T$ of shape $\lambda$ and type
$\nu$, and for such $T$ let $t_T$ be its dominance-minimal standard
refinement, $r_x=U_{a(x)}z^{\operatorname{content}(x)}$ the residue of the node
$x$ of $\lambda$, and $a_T(x)$ the type component of the label of $x$. Then
$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}\,u_T},\qquad C_t=\prod_{i<j\ \mathrm{same\ type\ row}}\frac{z\,r_t(j)-r_t(i)}{r_t(j)-r_t(i)},\qquad u_T=\prod_x\prod_{b>a_T(x)}(r_x-U_b),$$
with empty determinant $1$. The monic transition determinant from the
semistandard basis $(w_T)$ to the chain basis $(g_T)$ is exactly $1$.
Equivalently, with $C(A,B)=\frac{zB-A}{B-A}$,
$R(A,B)=\frac{(zB-A)(B-zA)}{(B-A)^2}$ and
$\mathcal C(T),\mathcal I(T)$ the pair lists of the proof,
$$\det G_{\lambda\nu}=\prod_TB_T\prod_{x<y}C(r_x,r_y)^{c_{xy}}R(r_x,r_y)^{i_{xy}},\qquad B_T=\prod_x\prod_{a(x)<b\le a_T(x)}(r_x-U_b),$$
where $c_{xy},i_{xy}$ are explicit nonnegative semistandard counts. All
factors are nonzero in the stated generic fields, and no quantum factorial is
inverted in the $\mathcal O$-lattice; arbitrary composition series are
auxiliary only.

## Facts & Assumptions

**Given:** The Murphy/Schur datum [F1], the affine crossed product [F2], the
cellular Murphy basis [F3], the Jucys–Murphy content triangularity [F4], the
permutation-module basis [F5], the Schur cellular maps [F6], the generic
nondegeneracy [F7], and the determinant rules [F8].

[F1] $H_n$, its Specht modules $V_\lambda=S_\lambda$ with cellular form, the
commuting invertible generators $X_r$ (the Jucys–Murphy elements), the row
subgroups, $m_\nu$, the Schur algebra $C_n$ with standards
$\Delta(\lambda)$ and their cellular forms
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] In the localization of the affine algebra at the variable differences the
algebra maps into the rational crossed product with
$T_i=c_{i,i+1}+d_{i,i+1}s_i$, $c_{ij}=(z-1)X_j/(X_j-X_i)$,
$d_{ij}=(X_j-zX_i)/(X_j-X_i)$, and the $\Phi_w$ over reduced $w$ are a basis
there ([[lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis]]).

[F3] The $m_{st}$ are an $R$-basis of $H_n$ with the dominance-cellular law,
coefficients independent of the left index, and the flag condition on
semistandard tableaux ([[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]]).

[F4] Distinct generic Jucys–Murphy words separate standard tableaux;
$X_r$ acts on $S_\lambda$ dominance-triangularly with diagonal
$U_az^{j-i}$ at the node carrying $r$
([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).

[F5] $m_\nu H_n$ has the semistandard basis
$m_{(T,t)}=\sum_{s:\nu(s)=T}m_{st}$ and the integral membership identity
$m_\nu h_T=m_{(T,t^\lambda)}$ for an actual $h_T$
([[lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases]]).

[F6] The Schur cellular maps $\varphi_{ST}$ and their multiplication law are
established, with $\Delta(\lambda)$ the cell module
([[lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis]]).

[F7] Over the two generic regimes above all Specht and Schur standards are
simple with nondegenerate forms
([[lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms]]).

[F8] Determinants are multiplicative,
$\det X^{\mathsf T}=\det X$, and the determinant of a block-triangular matrix
is the product of the diagonal block determinants
([[def-determinant-of-a-square-matrix]],
[[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F8]; the two generic regimes of the Statement.

1.1 Generic diagonalizability of $A_\nu$. The finite row-coset identity gives $x_\nu^2=P_\nu(z)x_\nu$, and every factor of $P_\nu(q_Ht)=\prod_{R}\prod_{j=1}^{|R|}\bigl(1+q_Ht+\cdots+(q_Ht)^{j-1}\bigr)$ is a nonzero polynomial over any $F$, so $P_\nu\ne0$ in $K$ and $x_\nu/P_\nu$ is a selfadjoint idempotent. The polynomial $u_\nu$ is symmetric separately on each initial component interval, hence commutes with every row generator and with $x_\nu$, and both are selfadjoint. Distinct generic JM words provide a basis of simultaneous eigenvectors ([F4]); on the eigenline of $s$, the element $u_\nu$ has eigenvalue $d_s=\prod_{k=2}^{\ell}\prod_{r=1}^{B_{k-1}}\bigl(\mathrm{res}(s^{-1}(r))-U_k\bigr)$, so $u_\nu$ is diagonalizable, and since $x_\nu$ commutes with $u_\nu$, each $u_\nu$-eigenspace splits into the image and kernel of the idempotent $x_\nu/P_\nu$. Hence $A_\nu=x_\nu u_\nu$ is diagonalizable with nonzero eigenvalues $\alpha=P_\nu d_s\ne0$. Put $E=\mathrm{im}\,A_\nu$; then $V_\lambda=E\oplus\ker A_\nu$ is an orthogonal decomposition by selfadjointness, $A_\nu|_E$ is invertible and selfadjoint, and the supplied semistandard basis [F5] identifies the $\lambda$-cell layer of $m_\nu H_n$ with the span of the tensors $w_T\otimes v_s$, $w_T=\sum_{s:\nu(s)=T}v_s$, so on the generic simple block [F7] the $(w_T)_T$ are a basis of $E$ and $\dim E=K_{(\lambda,\nu)}$. [F1, F4, F5, F7, algebra]

2.1 The inverse-operator Gram formula. The cell quotient of the membership identity of [F5], followed by orthogonal projection to $E$ and pairing with $w_T\in E$ (which annihilates $\ker A_\nu$), gives $m_{(t^\lambda,T)}\rho(h_U)=v_0\,b_\lambda\bigl(w_T,(A_\nu|_E)^{-1}w_U\bigr)b_\lambda(v_0,-)$. On the Schur side the composite $M^\lambda\to M^\nu\to M^\lambda$ sending $m_\lambda$ to $m_{(t^\lambda,T)}h_U$ is $G_{\lambda\nu}(T,U)m_\lambda$ modulo higher shapes by the cellular law [F6], and higher Schur maps evaluate to higher Murphy shapes and therefore vanish on this block. Comparing the resulting rank-one operators, and observing that changing $h_U$ changes it only by a map into $\ker A_\nu$, proves $G_{\lambda\nu}(T,U)=b_\lambda\bigl(w_T,(A_\nu|_E)^{-1}w_U\bigr)$ as an identity over the ground field. This formula uses the inverse operator rather than identifying the Schur form with a restriction of the Specht form. [F5, F6, step 1.1, algebra]

2.2 The chain basis and the unitriangular transition. Let $R_1<\cdots<R_m=n$ be the ends of the consecutive nonempty rows of the type tableau of $\nu$. A semistandard $T$ determines the chain $\boldsymbol\lambda(T)=(\lambda_T[1],\ldots,\lambda_T[m])$ of prefix shapes filled by its first $j$ type rows; every standard refinement in the fibre of $T$ has prefix shape $\lambda_T[j]$ on its first $R_j$ entries, and conversely the chain determines $T$, so chains and semistandard tableaux of type $\nu$ correspond bijectively. The elementary symmetric polynomials in $X_1,\ldots,X_{R_j}$, for every row end $R_j$, commute with every row generator (a type row lies wholly inside or wholly outside the prefix and Bernstein commutation fixes symmetric polynomials), hence with $m_\nu$, and thus preserve $E$; they act on the chain-$T$ layer by the elementary symmetric functions of its prefix residue multiset. Distinct multipartitions have distinct residue multisets over $K$ (distinct $U_a$ separate components, and within a component the content-diagonal multiplicities recover the partition), so these operators separate the chains. Ordering $T$ by a linear extension of dominance of the chains, the action on $E$ is triangular in the chain order with diagonal the chain scalar; commuting diagonalizable operators are jointly diagonalized, and the projector $E_T$ onto the chain-$T$ eigenspace is $1$ on the fibre of $T$ and $0$ on all other fibres. Hence $g_T=w_TE_T=w_T+\sum_{U:\,\boldsymbol\lambda(U)>\boldsymbol\lambda(T)}a_{TU}w_U,$ the $g_T$ form a basis of $E$, the transition matrix from $(w_T)$ to $(g_T)$ is upper unitriangular with determinant exactly $1$, and $b_\lambda(g_T,g_U)=0$ for $T\ne U$ because differing chains are separated by a selfadjoint row-prefix operator. [F1, F3, F4, step 1.1, algebra]

3.1 Spectral-block determinant. Decompose $E=\bigoplus_{\alpha\ne0}E_\alpha$ into $A_\nu$-eigenspaces; they are mutually orthogonal with nondegenerate restricted forms. Choose bases $\mathcal B_\alpha$ of the $E_\alpha$, let $H_\alpha$ be the $b_\lambda$-Gram matrix of $\mathcal B_\alpha$, and let $X$ be the coordinate matrix whose columns are the $w_T$ in the concatenated basis. Step 2.1 gives $G_{\lambda\nu}=X^{\mathsf T}\mathrm{diag}_\alpha(\alpha^{-1}H_\alpha)X$, hence by [F8] $\det G_{\lambda\nu}=(\det X)^2\prod_{\alpha\ne0}\alpha^{-\dim E_\alpha}\det H_\alpha.$ A change of the bases $\mathcal B_\alpha$ multiplies each $\det H_\alpha$ by $(\det R_\alpha)^2$ and divides $\det X$ by $\prod_\alpha\det R_\alpha$, so the expression is independent of the arbitrary choices; individual terms may have negative valuation while the total is integral because the Schur Gram matrix is integral. No diagonalization of a symmetric form is used, so characteristic $2$ causes no extra issue. [F8, step 2.1, algebra]

3.2 Normalization by the minimal refinement. Let $t_T$ be the dominance-minimal standard refinement of $T$: in each type-row class place the next increasing interval into its nodes in reverse physical-component order, then reverse physical-row order, then left to right. The eigenvalue of $u_\nu$ on $f_{t_T}$ is $u_T=\prod_x\prod_{b>a_T(x)}(r_x-U_b)$, which is nonzero in the stated generic fields because the flag condition [F3] places the node $x$ in a physical component strictly earlier than $b$, so $r_x$ and $U_b$ are distinct monomials. Since $u_\nu$ commutes with $x_\nu$, we have $f_{t_T}x_\nu=u_T^{-1}f_{t_T}m_\nu\in E$, and this vector lies in the chain-$T$ eigenspace, hence is a scalar multiple of $g_T$; the scalar is $c_T=[f_{t_T}](f_{t_T}x_\nu)$, and comparing the coefficient of $v_{t_T}$ — which equals $1$ in $g_T$, while no strictly smaller refinement lies in that chain — gives $g_T=c_T^{-1}f_{t_T}x_\nu$ with the nonzero value of $c_T$ computed below. [F3, step 2.2, algebra]

3.3 Initial norm and adjacent-swap recurrence. For the initial tableau $f_{t^\lambda}=v_{t^\lambda}$, and the cellular Gram entry is the coefficient of $m_\lambda$ in $m_\lambda^2$ modulo higher shapes, so with $P_\lambda(z)=\prod_{\text{rows }r}[|r|]_z!$ and the row generators acting on $v_{t^\lambda}$ by $z$ and $u_\lambda$ by its residue product, $\gamma_{t^\lambda}=P_\lambda(z)\prod_{a=1}^{\ell}\prod_{x\in[\lambda^{(a)}]}\prod_{b>a}(U_az^{\operatorname{content}(x)}-U_b).$ If $t$ strictly dominates $s=t(i,i+1)$ with $s$ standard and $A=r_t(i)$, $B=r_t(i+1)$, then $f_tT_i$ is supported on $f_t,f_s$, with diagonal coefficients $a_t=(z-1)B/(B-A)$, $a_s=(z-1)A/(A-B)$ satisfying $a_t+a_s=z-1$, off-diagonal coefficient $1$ in the monic normalization, and reverse coefficient $b_s=z+(z-1)a_t-a_t^2=(z-a_t)(1+a_t)$; selfadjointness and orthogonality give the recurrence $\gamma_s=\gamma_t\,\frac{(zB-A)(B-zA)}{(B-A)^2}=\gamma_tR(A,B),$ whose denominator is nonzero because a permitted standard swap concerns incomparable nodes. [F3, F4, step 2.2, algebra]

4.1 The monic Schur norm and the determinant product. Selfadjointness and $x_\nu^2=P_\nu x_\nu$ give $b_\lambda(f_{t_T}x_\nu,f_{t_T}x_\nu)=P_\nu b_\lambda(f_{t_T},f_{t_T}x_\nu)=P_\nu c_T\gamma_{t_T}$, and $A_\nu g_T=P_\nu u_Tg_T$ because $A_\nu$ acts as $P_\nu u_T$ on the chain-$T$ eigenspace. Using step 2.1 in the $g$-basis (the transition from $(w_T)$ has determinant $1$) together with the orthogonality of step 2.2, $b_\lambda\bigl(g_T,(A_\nu|_E)^{-1}g_T\bigr)=\frac{b_\lambda(g_T,g_T)}{P_\nu u_T}=\frac{\gamma_{t_T}}{c_Tu_T},$ and the off-diagonal entries vanish, so $\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{c_Tu_T}.$ [step 2.1, step 2.2, step 3.1, step 3.2, algebra]

4.2 The explicit symmetrizer value of $c_T$. In the rational crossed product [F2], for a row interval $I$ and $x_I=\sum_{w\in S_I}T_w$, write $x_I=\sum_wa_ww$; the row-coset identity $T_ix_I=zx_I$ gives $a_{s_iw}=s_i(a_w)$ by coefficient comparison with $T_i=c_{i,i+1}+d_{i,i+1}s_i$, and the coefficient of the longest permutation comes from the product of the $d_{ij}=(X_j-zX_i)/(X_j-X_i)$ over the positive roots of $I$, each once. Hence $a_1=w_0\bigl(\prod_{i<j\in I}\frac{X_j-zX_i}{X_j-X_i}\bigr)=\prod_{i<j\in I}\frac{zX_j-X_i}{X_j-X_i}=C_I(X)$. Disjoint row intervals commute, so $x_\nu=\prod_Ix_I$ has identity coefficient $\prod_IC_I(X)$; expanding $x_I=C_I(X)+\sum_{w\ne1}b_w(X)\Phi_w$ and using that every $\Phi_w$ with $w\ne1$ changes the distinct row entries and hence the JM word, the diagonal coefficient of $f_{t_T}x_\nu$ is exactly $C_{t_T}$ evaluated at the residues of $t_T$. Therefore $c_T=C_{t_T}=\prod_{i<j\ \text{same type row}}\frac{zr_{t_T}(j)-r_{t_T}(i)}{r_{t_T}(j)-r_{t_T}(i)}$. Every factor is nonzero in the stated generic fields: in one physical component two nodes of a horizontal strip have distinct contents, and in the deformation two nodes of different components have content difference at most $n-2$, which cannot cancel the exponent $n(a-b)$. [F2, F3, step 3.2, algebra]

5.1 The inversion-set formula and the explicit product. Every standard tableau is a linear extension of the node order; bubble-sorting it toward the initial extension swaps adjacent inverted (hence incomparable) nodes exactly once and never swaps comparable ones, so reversing those swaps and multiplying the recurrence of step 3.3 gives $\gamma_{t_T}=\gamma_{t^\lambda}\prod_{\substack{x<y\\t_T(x)>t_T(y)}}R(r_x,r_y),$ and $R$ is symmetric in its arguments. Dividing by $C_{t_T}$ and $u_T$ and using $\gamma_{t^\lambda}/u_T=P_\lambda(z)B_T$ with $B_T=\prod_x\prod_{a(x)<b\le a_T(x)}(r_x-U_b)$ (a literal nested-product cancellation by the flag condition), together with the telescoping row identity $\prod_{i<j}C(A_i,A_j)=[r]_z!$ for residues $A_j=A_1z^{j-1}$ in a row of length $r$, the four pair classes — same physical row with same or different labels, different physical rows with same or different labels — give exactly $\frac{\gamma_{t_T}}{C_{t_T}u_T}=B_T\prod_{(x,y)\in\mathcal C(T)}C(r_x,r_y)\prod_{(x,y)\in\mathcal I(T)}R(r_x,r_y),$ where $\mathcal C(T)$ collects pairs $x<y$ that are in one physical row with different labels or in different physical rows with the same label, and $\mathcal I(T)$ collects pairs $x<y$ in different physical rows with $L_T(x)>L_T(y)$. Multiplying over $T$ and collecting like node pairs yields $\det G_{\lambda\nu}=\prod_TB_T\prod_{x<y}C(r_x,r_y)^{c_{xy}}R(r_x,r_y)^{i_{xy}},\qquad c_{xy}=\#\{T:(x,y)\in\mathcal C(T)\},\qquad i_{xy}=\#\{T:(x,y)\in\mathcal I(T)\}.$ All factors are nonzero in the two generic regimes by step 4.2, the empty weight contributes determinant $1$, and no factor $P_\nu$ or $c_T$ is inverted in the $\mathcal O$-lattice; this proves both displayed determinant formulas. [F1, step 4.1, step 3.3, step 4.2, algebra] ∎

## Remarks

The lemma is the determinant input of the Jantzen sum formula: it replaces the
signed rim-hook valuation by an exact product of monic semistandard norms,
with the transition determinant computed rather than bounded. The inverse
operator $A_\nu|_E^{-1}$ is essential; the Schur form is not the restriction
of the Specht form except at the regular weight. No choice principle is used:
all tableaux, chains, and matrices are finite.
