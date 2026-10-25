---
id: lem-equivariant-associated-symbol-product-index
kind: lemma
title: "Positive-order associated-bundle product and its equivariant index"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-pseudodifferential-calculus
deps:
  - lem-equivariant-finite-chart-symbol-calculus
  - lem-equivariant-controlled-symbol-realization
  - def-axiom-of-choice
dependency_roles:
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  lem-equivariant-controlled-symbol-realization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I, §9,
        pp. 526–529"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf"
    - title: "Searchable compilation of Atiyah–Singer papers I–III; paper I, §§5–6 and
        9"
      url: "https://math.cs.kitami-it.ac.jp/~kouno/paper/Atiyah_Index.pdf"
dependency_level: 2
---

## Statement

Assume AC. Let $T$ and $H$ be compact Lie groups, with no connectedness or commutativity requirement on $H$. For any compact Lie group $K$, write $R(K)$ for the Grothendieck group of finite-dimensional continuous complex $K$-representations. Let $P\to X$ be a smooth principal right $H$-bundle over a compact smooth manifold without boundary. Let $T$ act smoothly on $P$ on the left, commuting with $H$, and let $F$ be a compact smooth manifold without boundary with commuting smooth left actions of $H$ and $T$. Put $Y=P\times_H F$, where $(p h,f)$ is identified with $(p,hf)$, and let $p_Y:Y\to X$ be its projection. The action of $t\in T$ on $Y$ is $[p,f]\mapsto[tp,tf]$.

Let $E^0,E^1\to X$ be smooth Hermitian $T$-bundles and $G^0,G^1\to F$ smooth Hermitian $H\times T$-bundles. Choose invariant densities and metrics. Let $A:C^\infty(X,E^0)\to C^\infty(X,E^1)$ and $B:C^\infty(F,G^0)\to C^\infty(F,G^1)$ be respectively $T$- and $H\times T$-equivariant operators of order one, either classical or in the order-one Sobolev closure. In the latter case, classical order-one operators converge to the given operator in every norm $H^s\to H^{s-1}$, $s\in\mathbb Z$, and their compatible degree-one principal symbols converge to its continuous degree-one principal symbol. Degree one means $a(x,t\xi)=t a(x,\xi)$ and $b(f,t\eta)=t b(f,\eta)$ for $t>0$; the symbols are smooth in the classical case and continuous in the closure case. Elliptic means that the corresponding symbol is a linear isomorphism at every nonzero covector. Extend $a(x,\xi)$ and $b(f,\eta)$ by zero at the zero covector, and assume $A$ and $B$ are elliptic.

Write $\mathcal G^j=P\times_H G^j\to Y$ and $\mathcal E^{ij}=p_Y^*E^i\otimes\mathcal G^j$. The horizontal lifts below are defined by this finite-chart construction. Choose a finite cover $\{U_\alpha\}$ of $X$ trivializing $P$ and the bundles $E^0,E^1$, and smooth real functions $\phi_\alpha$ compactly supported in $U_\alpha$ with $\sum_\alpha\phi_\alpha^2=1$. In the induced product chart $Y|_{U_\alpha}\cong U_\alpha\times F$, lift $\phi_\alpha A\phi_\alpha$ by acting in the base variable on the $E^i$ factor and by the identity on $G^j$; extend this operator by zero outside the chart and sum the finite family to obtain $\widetilde A_j$. Let $\rho_t^{ij}(y):\mathcal E^{ij}_y\to\mathcal E^{ij}_{ty}$ be the induced bundle action and define the section action by $U_t^{ij}s(y)=\rho_t^{ij}(t^{-1}y)s(t^{-1}y)$. Set

$$A_j=\int_T U_t^{1j}\widetilde A_j(U_t^{0j})^{-1}\,dt,$$

where $dt$ is normalized Haar probability and the integral is taken in each $H^s(Y,\mathcal E^{0j})\to H^{s-1}(Y,\mathcal E^{1j})$ operator norm. The resulting operator acts on smooth sections and is a common order-one Sobolev-closure limit, bounded in every such norm for $s\in\mathbb Z$. The connection used in the product-symbol formula below splits covectors on $Y$; the lifts are the chartwise operators just defined.

Thus the domains and codomains of the compatible $T$-equivariant lifts are

$$A_j:C^\infty(Y,\mathcal E^{0j})\longrightarrow C^\infty(Y,\mathcal E^{1j}),\qquad j=0,1.$$

Let $B_i:C^\infty(Y,\mathcal E^{i0})\to C^\infty(Y,\mathcal E^{i1})$ denote the operator whose restriction over each base point $x\in X$ is $B$ acting on the $F$-fiber, tensored with the fixed vector space $E_x^i$. On smooth sections these lifts obey all four exact identities

$$B_1A_0=A_1B_0,\qquad B_0^*A_1^*=A_0^*B_1^*,\qquad B_1^*A_1=A_0B_0^*,\qquad B_0A_0^*=A_1^*B_1.$$

The adjoints are with respect to the invariant product density on $Y$ obtained from the base density and the $H$-invariant fiber density. Define

$$D=\begin{pmatrix}A_0&-B_1^*\\ B_0&A_1^*\end{pmatrix}:\mathcal E^{00}\oplus\mathcal E^{11}\longrightarrow\mathcal E^{10}\oplus\mathcal E^{01}.$$

In this calculus, an order-one operator on $Y$ is elliptic when its continuous joint degree-one principal symbol is a bundle isomorphism at every nonzero covector of $T^*Y$. The operator $D$ extends boundedly from $H^1(Y,\mathcal E^{00}\oplus\mathcal E^{11})$ to $L^2(Y,\mathcal E^{10}\oplus\mathcal E^{01})$. Fredholm means that this bounded map has finite-dimensional kernel, closed range, and finite-dimensional cokernel, the quotient of the target by its range; its Hilbert adjoint is taken in the stated $L^2$ structures.

Then $D:H^1\to L^2$ is Fredholm, both its kernel and its adjoint kernel are finite-dimensional smooth $T$-representations, and its principal symbol represents the graded product of $a$ and $b$. Explicitly, a connection splitting of a covector on $Y$ into horizontal $\xi$ and vertical $\eta$ gives the product symbol

$$d_{\mathrm{prod}}(y;\xi,\eta)=\begin{pmatrix}a(p_Yy,\xi)\otimes I&-I\otimes b(f,\eta)^*\\ I\otimes b(f,\eta)&a(p_Yy,\xi)^*\otimes I\end{pmatrix}.$$

This matrix is interpreted using an associated-bundle trivialization; its homotopy class is independent of the connection. The actual glued lift symbol need only be homotopic through invertible joint symbols to this matrix.

Let $K=\ker B$ and $L=\ker B^*$, with their finite-dimensional $H\times T$ actions, and put $K_P=P\times_H K$, $L_P=P\times_H L$. The restricted lifts give elliptic operators $C_K:E^0\otimes K_P\to E^1\otimes K_P$ and $C_L$ with $K$ replaced by $L$, whose symbols are $a\otimes I$. For $\operatorname{Ind}_T Q=[\ker Q]-[\ker Q^*]\in R(T)$ one has

$$\operatorname{Ind}_T D=\operatorname{Ind}_T C_K-\operatorname{Ind}_T C_L.$$

Thus the analytic symbol index of the associated product is the base symbol index twisted by the associated virtual vertical index $K_P-L_P$. For a product bundle with independent commuting group actions this specializes to multiplication of representation-valued indices. The same external-product identity holds for compactly supported elliptic symbol data on invariant open manifolds when their indices are defined by the controlled compactification and excision construction.

## Statement references

[[lem-equivariant-finite-chart-symbol-calculus]]

[[lem-equivariant-controlled-symbol-realization]]

[Atiyah–Singer I, §9, associated-bundle multiplicativity](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf)

## Facts & Assumptions

**Given:** The compact group actions, principal bundle, manifolds, operator data and positive-frequency symbols in the Statement. All Sobolev spaces use the fixed smooth metrics and densities; equivalent choices give the same closure.

[F1] The finite-chart calculus supplies classical quantization, principal-symbol composition and adjoints, integer Sobolev mapping, coordinate covariance and compactness of negative order. In its order-reduced operator-norm closure, the principal map has kernel exactly the compact operators and quotient all continuous cosphere-bundle homomorphisms. A continuous invertible closure symbol therefore gives Fredholm realizations at every integer Sobolev level and smooth kernel/adjoint kernel. Smooth compact-group conjugation and averaging preserve the closure and principal symbols. [[lem-equivariant-finite-chart-symbol-calculus]]

[F2] The analytic index of elliptic symbols is invariant under stabilized symbol homotopy, quantization and Sobolev order reduction. Invariant open symbols have representatives equal to an isomorphism plus a kernel supported in $C\times C$ for invariant compact $C$ inside the open set; restriction/extension identifies kernel and adjoint kernel in any compactification, proving excision. These assertions hold for compact acting groups, including disconnected groups. [[lem-equivariant-controlled-symbol-realization]]

[A1] Full AC is inherited from the calculus, Hilbert-space and bundle suppliers. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Prove an explicit shrinking-cone Sobolev approximation, glue compatible local tensor lifts, and reduce the product kernels to the finite-dimensional vertical kernels.

**Given:** The data in the Statement and the exact calculus and index interfaces [F1]–[F2].

1.1 First work in product coordinates $x\in\mathbb R^u$, $y\in\mathbb R^v$, with joint covariable $\vartheta=(\xi,\eta)$. If $a(x,\xi)$ is a classical order-one matrix symbol with compact output support, the locally output-cutoff tensor lift has symbol $q(x,y,\vartheta)=\psi(y)a(x,\xi)$. It need not be a classical joint symbol. Choose smooth scalar functions $h=1$ on $[0,1]$, $h=0$ on $[4,\infty)$, and $\chi=0$ on $[0,1]$, $\chi=1$ on $[2,\infty)$. For $0<t<1/4$ and $\vartheta\ne0$, set $c_t=h(|\xi|^2/(t^2|\vartheta|^2))$, $r_t=1-\chi(t|\vartheta|)c_t$, and $q_t=q r_t$, with $r_t=1$ near zero. For fixed $t$, $q_t$ is classical of order one: at high frequency either it vanishes near $\xi=0$ or $|\xi|\ge t|\vartheta|$, where every frequency derivative satisfies the ordinary joint symbol estimate, with constants allowed to depend on $t$. Its leading symbol is $\psi a_1(x,\xi)(1-c_t)$, uniformly within $O(t)$ on the joint unit sphere of the continuous degree-one function $\psi a_1(x,\xi)$ extended by zero at $\xi=0$. [F1, construct, algebra]

2.1 Put $e_t=q-q_t$. On its support $|\vartheta|\ge1/t$ and $|\xi|\le2t|\vartheta|$, so $\langle\xi\rangle\le\sqrt5t|\vartheta|$. Every output derivative therefore satisfies $|\partial_{x,y}^\alpha e_t|\le C_\alpha t\langle\vartheta\rangle$, with a common compact output support and constants independent of $t$. Fourier transformation in the output variables and integration by parts $N$ times with $1-\Delta_{x,y}$ give $|\widehat e_t(\zeta,\vartheta)|\le C_N t\langle\vartheta\rangle\langle\zeta\rangle^{-2N}$. Conjugating by Sobolev weights introduces $\langle\vartheta+\zeta\rangle^{s-1}\langle\vartheta\rangle^{-s}$; the triangle inequalities for bracket weights bound the resulting kernel by $C_{N,s}t\langle\zeta\rangle^{-2N+|s-1|}$. Choose $2N>u+v+|s-1|$. Both integrals of the absolute Fourier kernel are then at most $C_st$. Weighted Cauchy--Schwarz followed by Fubini proves
$$\|\operatorname{Op}(q)-\operatorname{Op}(q_t)\|_{H^s\to H^{s-1}}\le C_st.$$
This proves simultaneous convergence at every fixed integer $s$ without requiring uniform frequency-derivative estimates for $e_t$. Multiplication on the input by a fixed smooth cutoff is bounded in these spaces. Finite fiber charts therefore prove that the genuine lift acting as the identity on the entire compact fiber lies in the joint order-one closure; the fiber cutoffs used to estimate it do not alter that operator. [F1, step 1.1, algebra]

3.1 Lifting is also continuous when the base operator itself belongs to the stated closure. For $s\ge1$, expand the product Sobolev norm by horizontal and vertical derivatives: an output term with $k$ horizontal derivatives and $s-1-k$ vertical derivatives is bounded by the base norm $H^{k+1}\to H^k$ applied to the same vertical derivatives of the input. Summing for $0\le k\le s-1$ bounds the lifted norm $H^s\to H^{s-1}$ by finitely many base norms. For $s=0$, Fourier transformation in the passive variable gives the bound from the base norm $L^2\to H^{-1}$, since the joint negative weight is at most the horizontal negative weight. Negative integer levels follow by duality from the corresponding positive-level bounds for the formal adjoint; the base adjoint norm $H^r\to H^{r-1}$ is exactly the original norm $H^{1-r}\to H^{-r}$. Fixed chart cutoffs contribute finitely many lower derivative terms of the same type. Approximate a closure operator by classical operators in all these base norms, lift them, and then use step 2.1 and a diagonal sequence. This gives the asserted closure lift and its continuous leading symbol. Interchanging the two factors proves the same assertion for vertical lifts. [F1, step 2.1, algebra]

4.1 Choose finitely many bundle charts $U_\alpha$ for $P$ and $E^i$, and smooth real functions $\phi_\alpha$ compactly supported in these charts with $\sum_\alpha\phi_\alpha^2=1$. In each chart lift the base operator $\phi_\alpha A\phi_\alpha$ to $U_\alpha\times F$ by acting in the base variable and as the identity on $G^j$. Extend by zero in the base and sum. This defines simultaneously $\widetilde A_0$ and $\widetilde A_1$, in the closure by steps 2.1–3.1. The fiber operator $B_i$ is globally defined because $B$ commutes with $H$; in every such product chart it is the fixed operator $B$ on $F$. Hence every summand commutes with both $B$ and $B^*$, with the indicated bundle types. Base cutoff multiplication also commutes with them. Choose the total density and tensor metrics as in the Statement. These patch because $H$ preserves the fiber density and metrics; the base-dependent coordinate change in $H$ has block triangular derivative, so introduces no extra density factor. Consequently the formal adjoints of the local lifts are exactly the lifts of their base formal adjoints. This proves all four stated identities before averaging. [F1, step 2.1, step 3.1, construct]

5.1 Average both horizontal lifts over $T$ using its normalized Haar measure and their conjugation actions on the appropriate bundles. The orbit is continuous in each Sobolev norm: for a classical approximant this follows from smooth parameter-dependent chart amplitudes in [F1], and uniform boundedness of the smooth compact group action on each $H^s$ passes continuity to the closure limit. Thus the same integral exists compatibly at all integer levels. Since $B_i$ and $B_i^*$ are $T$-invariant, every conjugate still obeys the four identities; integrate them on smooth sections, where all compositions converge in every lower Sobolev norm. Invariance of the inner products makes averaging commute with formal adjoints. The resulting $A_0,A_1$ are $T$-equivariant and obey the exact displayed commutations on smooth sections. These are identities of actual operators, not merely their principal symbols. [F1, step 4.1, construct, algebra]

6.1 The leading symbols of $A_0$ and $A_1$ have the form $Q(y,\zeta)\otimes I_{G^j}$ for the same continuous degree-one map $Q:p_Y^*E^0\to p_Y^*E^1$. Indeed the base local symbols act on $E$ alone; changes of associated trivialization conjugate the fiber identity to itself. On the annihilator of the vertical tangent bundle, all local base covariables identify with the covariable on $X$, so $Q(y,p_Y^*\xi)=a(p_Yy,\xi)$. Averaging preserves this equality because $a$ is equivariant. At general covectors the base-dependent $H$ transition may shift a local horizontal covariable by a term linear in the vertical covariable. It is unnecessary to assert that these local symbols coincide with a preselected connection lift. The vertical leading symbol is precisely $I_E\otimes b(y,\eta)$, where $\eta$ is restriction to the vertical tangent space; this is globally defined by $H$-equivariance. [F1, step 4.1, step 5.1, algebra]

6.2 Apply [F1] to $B$ and $B^*$ on compact $F$. Their kernels $K,L$ are finite-dimensional smooth invariant spaces. The induced $H\times T$ actions on them are smooth and unitary: the action on a fixed smooth kernel basis is smooth in every section seminorm, and its matrix entries are its $L^2$ pairings with that basis. Fiberwise $\ker B_i$ consists exactly of smooth sections of $E^i\otimes K_P$, and fiberwise $\ker B_i^*$ of sections of $E^i\otimes L_P$. This follows in each product chart by expanding a vertical kernel section in an orthonormal basis of $K$ or $L$; its coefficients are fiber integrals against that basis and are smooth in the base. The transition maps are precisely the finite-dimensional $H$ representations, so these descriptions patch to the displayed associated bundles. The orthogonal vertical kernel projections are the finite sums of these smooth rank-one kernels. They commute with the horizontal lifts and their adjoints locally, and commute with $H$ and $T$, so the same is true after gluing and averaging. [F1, step 4.1, step 5.1, construct]

7.1 Choose a $T$-invariant principal connection, by patching local connections with a base partition and averaging their affine space over $T$. It supplies a horizontal covariable $\xi_H$ and the symbol $a_H=a(p_Yy,\xi_H)$. Interpolate $Q_r=(1-r)Q+r a_H$, $0\le r\le1$, and form the block symbol $d_r$ with $Q_r$ in place of $Q$ and $b$ in the vertical entries. Both act on different tensor factors, so
$$d_r^*d_r=\operatorname{diag}(Q_r^*Q_r\otimes I+I\otimes b^*b,\ Q_rQ_r^*\otimes I+I\otimes bb^*).$$
If $\eta\ne0$, vertical ellipticity makes both diagonal blocks positive definite. If $\eta=0$ and the joint covector is nonzero, $Q_r=a(\xi_H)$ is invertible, so they are again positive definite. The analogous $d_rd_r^*$ has the same positive summands with the $E$ parities reversed, so is positive definite by the same two cases. Compactness of the joint unit cosphere and of $[0,1]$ gives one positive lower bound on the smallest eigenvalues of both squares. Thus every $d_r$ is invertible, and $d_0$ is the actual principal symbol of $D$, while $d_1=d_{\mathrm{prod}}$. The same interpolation between two connections proves connection independence. This verifies ellipticity for arbitrary matrix symbols, with no scalar Laplacian or Dirac restriction. [F1, step 6.1, construct, algebra]

8.1 Steps 3.1 and 5.1 put $D$ and its formal adjoint in the all-integer order-one closure. The continuous invertibility just proved is exactly the closure-ellipticity hypothesis of [F1], not an application of a classical parametrix to a nonsmooth joint symbol. Order reduction identifies its principal symbol with the invertible continuous degree-zero map $d_0/\ell_Y$, where $\ell_Y>0$ is the common scalar leading symbol of the order-reduction operator; the compact-kernel exact sequence supplies a parametrix modulo compact operators at every Sobolev level. In particular the range is closed and both defects are finite. A bounded parametrix gives $\|u\|_{H^s}\le C\|Du\|_{H^{s-1}}+\|Ru\|_{H^s}$ with compact $R$ on $H^s$. For every $\varepsilon>0$, compactness gives $\|Ru\|_{H^s}\le\varepsilon\|u\|_{H^s}+C_\varepsilon\|u\|_{H^{s-1}}$: otherwise a normalized violating sequence has weaker norm tending to zero, hence is weakly zero in $H^s$ by smooth dual-test density, contradicting compactness of $R$. Absorb $\varepsilon<1$ to obtain
$$\|u\|_{H^s}\le C_s\bigl(\|Du\|_{H^{s-1}}+\|u\|_{H^{s-1}}\bigr)$$
with the analogous estimate for the adjoint. Smoothness of the defects is also covered by [F1]; equivalently, approximate in any two chosen Sobolev norms by one sufficiently close classical elliptic representative. Fredholm openness gives the same index at these levels, because its classical symbol is uniformly close to $d_0$. The kernels decrease as the Sobolev level increases and the adjoint kernels representing cokernels increase at the dual level. Equality of the two indices forces both dimensions to be unchanged. Repeating over all integers identifies each defect with its smooth intersection. Thus the energy calculations below apply to every kernel vector of the $H^1\to L^2$ realization. [F1, step 3.1, step 5.1, step 7.1, algebra]

9.1 For smooth inputs, expand the squared norm using the product inner products. The cross terms are $-2\operatorname{Re}\langle B_1A_0u,v\rangle+2\operatorname{Re}\langle A_1B_0u,v\rangle$ and cancel by step 5.1. Therefore
$$\|D(u,v)\|^2=\|A_0u\|^2+\|B_0u\|^2+\|A_1^*v\|^2+\|B_1^*v\|^2.$$
For $D^*(w,z)=(A_0^*w+B_0^*z,-B_1w+A_1z)$ the cross terms cancel using $B_0A_0^*=A_1^*B_1$, giving
$$\|D^*(w,z)\|^2=\|A_0^*w\|^2+\|B_1w\|^2+\|A_1z\|^2+\|B_0^*z\|^2.$$
It follows, now for the actual Fredholm kernels by step 8.1, that $\ker D=(\ker A_0\cap\ker B_0)\oplus(\ker A_1^*\cap\ker B_1^*)$ and $\ker D^*=(\ker A_0^*\cap\ker B_1)\oplus(\ker A_1\cap\ker B_0^*)$. No cancellation of unbounded operator products on unspecified domains is used: the identities were first proved on smooth sections, and all kernel vectors are smooth. [F1, step 3.1, step 5.1, step 8.1, algebra]

10.1 Restrict $A_0$ to the $K$-kernel bundle and $A_1$ to the $L$-kernel bundle. They are respectively $C_K$ and $C_L$. In local charts they are the base operators tensored with the identity of the finite-dimensional spaces $K,L$; their symbols are $a\otimes I$. Hence they are elliptic closure operators on the compact base and have smooth Fredholm defects by [F1]. Since the vertical projections are orthogonal and commute with both horizontal operators and adjoints, the restrictions of $A_0^*$ and $A_1^*$ are exactly $C_K^*$ and $C_L^*$, with no compression error. The four intersections in step 9.1 are therefore $\ker C_K$, $\ker C_L^*$, $\ker C_K^*$ and $\ker C_L$, respectively. All identifications commute with $T$. Taking their virtual representation difference gives
$$[\ker D]-[\ker D^*]=([\ker C_K]-[\ker C_K^*])-([\ker C_L]-[\ker C_L^*]),$$
the claimed associated-bundle formula. [F1, step 9.1, step 6.2, algebra]

11.1 By [F2] and the explicit elliptic homotopy in step 7.1, the index of $D$ is the analytic symbol index of the graded product. Replacing $C_K,C_L$ by any equivariant elliptic quantizations with the same twisted symbols leaves their indices unchanged. For a genuine product choose the global tensor lift instead of the patched lift. Then $C_K=A\otimes I_K$ and $C_L=A\otimes I_L$. Their kernel and adjoint-kernel spaces are the tensor products of the corresponding defects of $A$ with $K,L$; the Fredholm estimates and a finite orthonormal basis of $K,L$ prove this directly. The representation difference is $\operatorname{Ind}A\otimes(\ker B-\ker B^*)$. Applying this construction with the product of the independently acting compact groups proves the external representation-index product, and restriction proves the version for a diagonal action. [F2, step 7.1, step 10.1, algebra]

12.1 For compactly supported symbols on invariant open manifolds, choose the controlled representatives of [F2] in compactifications, stabilize them if needed, and use its order reduction to make their homogeneous order one representatives. Form the compact product just proved. For compact-support triples representing the two data sets, the tensor complex is contractible wherever either map is invertible: a contracting homotopy for that factor, tensored with the identity and the usual grading, contracts the total differential because the cross terms cancel. Its nonexactness set is therefore contained in the product of the prescribed compact supports. The homogeneous order normalization represents this same product class by [F2]. The controlled realization of that product class has kernel supported in a compact subset of the product open set in both variables. Excision identifies its index with that in the compact product, whose symbol index is already the product of the two indices by step 11.1. A different compactification gives the same result by the two-variable kernel/adjoint-kernel restriction argument of [F2]. Empty manifolds, zero-rank coefficient bundles and zero-dimensional fibers give the same identities with zero operators or finite matrices. In dimension zero the closure estimate is just a finite-dimensional norm estimate. All compact-group averages and Hilbert constructions retain the stated AC hypothesis. [A1, F2, step 11.1, algebra] ∎

## Remarks

The positive order is essential in the lift argument: an order-zero homogeneous symbol extended from horizontal covectors can be discontinuous at horizontal zero. Here its degree-one extension is continuous, and the explicit cone estimate controls the operator in every integer Sobolev norm. The product is therefore realized in a specified positive-order closure, rather than treated as a formal order-zero tensor operator.

Neither an equivariant K-localization theorem nor an equivariant analytic/topological index comparison is assumed in this lemma. Its inputs are the compact symbol calculus and controlled analytic realization. The result supplies the associated-bundle multiplicativity needed for the latter comparison.
