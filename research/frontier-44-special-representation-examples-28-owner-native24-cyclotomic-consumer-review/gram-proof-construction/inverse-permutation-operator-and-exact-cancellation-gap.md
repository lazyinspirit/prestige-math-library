# Schur weight Gram matrices through an inverse permutation operator

Author: `/root/repair_klr_global_basis/native24_schur_weight_gram_construction`.
Run: `frontier-44-special-representation-examples-28`.
Status: research construction with an explicit unresolved determinant identity; no mathematical acceptance, consumer review, or native control change.

This is a disjoint alternative to the existing J constructor. It uses the actual universal Murphy/semistandard construction and the actual Schur map datum supplied by the parent. It proves an inverse-operator formula for the Schur weight Gram matrix and isolates a concrete transition determinant. It does **not** prove the required signed rim-hook cancellation.

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

The spectral bases are computable by finite linear algebra, without a new theorem: first form the simultaneous JM projectors by Lagrange interpolation in the distinct full JM words; sum projectors having the same $d_s$; apply $x_\nu/P_\nu$; select independent columns. Express the known coefficient-one $w_T$ in those columns and compute $C$. This supplies an exact rational algorithm for every fixed input. It does not supply a uniform combinatorial evaluation.

## 5. Exact outstanding identity

Let $J_{\lambda\mu}$ be the signed equal-length rim-hook foot-residue valuation sum in the existing J packet. The required Schur formula is equivalent, via the proved (V), to

$$2\nu_\pi(\det C)+\sum_{\alpha\ne0}\nu_\pi(\det H_\alpha)-\sum_{\alpha\ne0}(\dim E_\alpha)\nu_\pi(\alpha)=\sum_\mu J_{\lambda\mu}K_{\mu\nu}.\tag{CANCEL}$$

All terms on the left now have actual algebraic definitions. The nonzero $\alpha$ are the explicitly stated quantum-row polynomial times prefix-residue products. The missing part is a uniform evaluation of the transition determinant $\det C$ and the restricted Specht determinants $\det H_\alpha$, followed by alternation/cancellation into the rim-hook foot differences with coefficient $K_{\mu\nu}$. Discarding $\det C$ as a unit is unjustified: generic spectral projectors have residue-difference denominators, and the semistandard lattice is not generally their direct sum over $O$. Smith reduction cannot remove this index term. A Specht total determinant gives only the regular-weight case and does not determine these restricted determinants.

The Laurent-binomial valuation leaf already handles every nonzero factor over arbitrary characteristic, including valuations $p^{v_p(N)}$ instead of $1$. It does not establish CANCEL. Likewise, generic split semisimplicity proves only existence of these inverses, not the index cancellation. No injectivity of the Hecke Schur functor on $G_0$ is assumed or inferred.

## 6. Source and handoff boundary

This note uses only the specified local construction packets and the exact formula recorded by the J constructor. No new external source fetch occurred, no exhausted James–Mathas/DJM retry was repeated, and no full-source reading is claimed. The existing source-read records remain unchanged.

The inverse-operator formula and determinant reduction are offered as research lemmas for parent review, conditional on the named actual Q/S2 data. The full requested Gram valuation identity remains unresolved at CANCEL for arbitrary fields and arbitrary level. The next necessary proof is a uniform spectral-lattice transition/restricted-Gram calculation with the stated rim-hook cancellation; a finite exact algorithm or successful small cases would not prove it. Parent alone owns integration, supplier registration, native resolution, and all consumers.
