---
id: lem-schur-weyl-polytabloid-highest-weight
kind: lemma
title: "The row-labelled polytabloid map has highest weight lambda"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-schur-weyl-length-cutoff-by-column-antisymmetrization, thm-schur-weyl-double-centralizer, lem-polytabloid-covariance-and-column-sign, def-commuting-symmetric-and-linear-actions-on-tensor-power, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-subgroup-tabloid-and-permutation-module, def-row-and-column-stabilizers-of-a-tableau, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition, thm-tensor-product-basis-from-bases, def-linear-basis, thm-complex-specht-modules-are-irreducible, thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent, thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4, Sections 4.18-4.21, PDF pp. 18-21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Hsueh-Yung Lin, Modern Algebra I, Section 27, printed pp. 71-74"
      url: "https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $V$ be a finite-dimensional complex vector space of dimension $d\ge0$
with a fixed basis $e_1,\dots,e_d$, let $n\ge0$, and let $\lambda\vdash n$
with $\ell(\lambda)\le d$. For $1\le i,j\le d$ let
$E_{ij}\in\operatorname{End}(V)$ be the matrix unit with $E_{ij}e_j=e_i$ and
$E_{ij}e_k=0$ for $k\ne j$. Fix a $\lambda$-tableau $t$ and endow
$V^{\otimes n}$ with the left place action of $S_n$ and the diagonal action
of $\operatorname{GL}(V)$ of
[[def-commuting-symmetric-and-linear-actions-on-tensor-power]], so that
$\Delta(X)=\sum_{a=1}^n\mathbf 1^{\otimes(a-1)}\otimes X\otimes\mathbf 1^{\otimes(n-a)}$
for $X\in\operatorname{End}(V)$. Put
$M_\lambda:=\operatorname{Hom}_{S_n}(S^\lambda,V^{\otimes n})$, on which
$\operatorname{GL}(V)$ acts by $(g\cdot\psi)(s):=g^{\otimes n}\psi(s)$ and the
algebra $B:=\operatorname{span}_{\mathbb C}\{g^{\otimes n}:g\in\operatorname{GL}(V)\}$
acts by postcomposition $b\cdot\psi:=b\circ\psi$.

Let $w_t\in V^{\otimes n}$ be the elementary tensor whose place labelled $a$
carries $e_{r(a)}$, where $r(a)$ is the row of the box of $t$ containing $a$,
and let $\Phi:M^\lambda\to V^{\otimes n}$ be the row-labelled map
$\Phi(\sigma\cdot\{t\}):=\sigma\cdot w_t$ of
[[lem-schur-weyl-length-cutoff-by-column-antisymmetrization]]. Then
$\varphi:=\Phi|_{S^\lambda}\in M_\lambda$ is nonzero, and, writing
$\lambda_i:=0$ for $i>\ell(\lambda)$, the following hold.

1. **(Weight $\lambda$.)** For every diagonal
   $g=\operatorname{diag}(x_1,\dots,x_d)\in\operatorname{GL}(V)$ one has
   $g^{\otimes n}\circ\varphi=x^\lambda\varphi$, where
   $x^\lambda:=x_1^{\lambda_1}\cdots x_d^{\lambda_d}$; equivalently
   $\Delta(E_{ii})\circ\varphi=\lambda_i\varphi$ for every $i$. Thus $\varphi$
   is a vector of weight $(\lambda_1,\dots,\lambda_d)$ in the multiplicity
   space $M_\lambda$.
2. **(Highest weight vector.)** $\Delta(E_{ij})\circ\varphi=0$ for all
   $1\le i<j\le d$: the map $\varphi$ is killed by every upper-triangular
   raising matrix unit.
3. **(Uniqueness.)** If $M_\lambda$ is irreducible as a module over $B$ by
   postcomposition, then every nonzero $\psi\in M_\lambda$ with
   $\Delta(E_{ij})\circ\psi=0$ for all $i<j$ and
   $\Delta(E_{ii})\circ\psi=\mu_i\psi$ for all $i$, for some scalars
   $\mu_1,\dots,\mu_d$, satisfies $\mu_i=\lambda_i$ for every $i$ and lies in
   $\mathbb C\varphi$; that is, $\lambda$ is then the unique highest weight of
   $M_\lambda$, and its highest weight vector is unique up to a scalar.

## Facts & Assumptions

**Given:** a finite-dimensional complex vector space $V$ with basis
$e_1,\dots,e_d$ $(d=\dim_{\mathbb C}V\ge0)$, an integer $n\ge0$, a partition
$\lambda\vdash n$ with $\ell(\lambda)\le d$, a $\lambda$-tableau $t$, the
matrix units $E_{ij}$, the permutation module $M^\lambda$ with its Specht
submodule $S^\lambda$, and $V^{\otimes n}$ with its place and diagonal
actions.

[F1] The rule
$\sigma\cdot(v_1\otimes\cdots\otimes v_n)=v_{\sigma^{-1}(1)}\otimes\cdots\otimes v_{\sigma^{-1}(n)}$
defines a left action of $S_n$ on $V^{\otimes n}$ by linear maps,
$g^{\otimes n}(v_1\otimes\cdots\otimes v_n)=gv_1\otimes\cdots\otimes gv_n$
defines a representation of $\operatorname{GL}(V)$, the operators $g^{\otimes n}$
commute with every place permutation, $\Delta(X)=\sum_{a=1}^n\mathbf 1^{\otimes(a-1)}\otimes X\otimes\mathbf 1^{\otimes(n-a)}$
is $\mathbb C$-linear in $X$ and equals $0$ when $n=0$, and
$V^{\otimes0}=\mathbb C$ ([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]).

[F2] The $d^n$ elementary tensors $e_{a_1}\otimes\cdots\otimes e_{a_n}$ with
$a_1,\dots,a_n\in\{1,\dots,d\}$ form a basis of $V^{\otimes n}$; in particular
distinct elementary tensors are linearly independent
([[thm-tensor-product-basis-from-bases]], [[def-linear-basis]]).

[F3] The $\lambda$-tabloids form a basis of $M^\lambda$, $e_t=\kappa_t\{t\}$
with $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$, $S^\lambda$
is the span of the polytabloids, $C_t\cap R_t=\{1\}$, $e_t\ne0$,
$\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$ for $\gamma\in C_t$, and
$e_{\sigma\cdot t}=\sigma\cdot e_t$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[lem-polytabloid-covariance-and-column-sign]]).

[F4] $S^\lambda$ is a nonzero irreducible $\mathbb C[S_n]$-module and is
generated by $e_t$, that is,
$S^\lambda=\operatorname{span}_{\mathbb C}\{\sigma\cdot e_t:\sigma\in S_n\}$
([[thm-complex-specht-modules-are-irreducible]],
[[lem-polytabloid-covariance-and-column-sign]]).

[F5] Every $\lambda$-tabloid is $\sigma\cdot\{t\}$ for some $\sigma\in S_n$,
and the stabilizer of $\{t\}$ in $S_n$ is the row stabilizer $R_t$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F6] With $B_t:=\{t(i,j):1\le i\le\lambda'_j\}$ the column set of column $j$,
one has $C_t=S(B_1)\times\cdots\times S(B_{\lambda_1})$ and
$R_t=S(A_1)\times\cdots\times S(A_k)$ for the row sets $A_i$; the boxes of
column $j$ of the diagram of $\lambda$ are exactly the pairs $(i,j)$ with
$i\le\lambda'_j$, and $\ell(\lambda)=\lambda'_1$
([[def-row-and-column-stabilizers-of-a-tableau]],
[[def-partition-young-diagram-and-conjugate-partition]],
[[def-young-tableau-standard-tableau-and-shape]]).

[F7] $B=\operatorname{span}_{\mathbb C}\{g^{\otimes n}:g\in\operatorname{GL}(V)\}$
is a unital $\mathbb C$-subalgebra of $\operatorname{End}(V^{\otimes n})$, it
equals the centralizer $\operatorname{End}_{S_n}(V^{\otimes n})=\{F:F a=aF$
for all $a$ in the image $A$ of $\mathbb C[S_n]\}$ of the place action, and it
equals the unital subalgebra generated by
$\{\Delta(X):X\in\operatorname{End}(V)\}$ ([[thm-schur-weyl-double-centralizer]]).

[F8] Eigenvectors of an endomorphism belonging to pairwise distinct eigenvalues
are linearly independent
([[thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]]).

[F9] The sign $\operatorname{sgn}$ is multiplicative and
$\operatorname{sgn}((ab))=-1$ for every transposition $(ab)$
([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] Let $w_t:=e_{r(1)}\otimes\cdots\otimes e_{r(n)}\in V^{\otimes n}$ be the elementary tensor whose place labelled $a$ carries $e_{r(a)}$, and define $\Phi(\sigma\cdot\{t\}):=\sigma\cdot w_t$ for $\sigma\in S_n$, extended linearly. This is well defined: if $\sigma\cdot\{t\}=\sigma'\cdot\{t\}$, then $\sigma'=\sigma\rho$ with $\rho\in R_t$, and $\rho\cdot w_t=w_t$ because $\rho$ permutes only the places inside each row of $t$, all carrying the same factor $e_i$ in row $i$; hence $\sigma'\cdot w_t=\sigma\cdot w_t$. As the tabloids form a basis of $M^\lambda$ and every tabloid is $\sigma\cdot\{t\}$, $\Phi$ is a well-defined $\mathbb C$-linear map, and it is $S_n$-linear because $\tau\cdot(\sigma\cdot\{t\})=(\tau\sigma)\cdot\{t\}$ and the place action on $V^{\otimes n}$ is a left action. [given, F1, F3, F5, construct]

1.2 For $X\in\operatorname{End}(V)$ and $a\in\{1,\dots,n\}$ put $X_a:=\mathbf 1^{\otimes(a-1)}\otimes X\otimes\mathbf 1^{\otimes(n-a)}$, so that $\Delta(X)=\sum_aX_a$. For $\sigma\in S_n$ one has $\sigma X_a\sigma^{-1}=X_{\sigma(a)}$: both sides act as $X$ on the place $\sigma(a)$ and as the identity on the other places. Since $a\mapsto\sigma(a)$ is a bijection, $\sigma\Delta(X)\sigma^{-1}=\Delta(X)$, so $\Delta(X)$ commutes with the place action of every element of $\mathbb C[S_n]$, in particular with $\kappa_t$. Moreover $[\Delta(X),\Delta(Y)]=\Delta([X,Y])$ for all $X,Y\in\operatorname{End}(V)$: summands on distinct places commute, $[X_a,Y_a]=[X,Y]_a$, so $[\Delta(X),\Delta(Y)]=\sum_a[X_a,Y_a]=\Delta([X,Y])$. Finally $[E_{ij},E_{k\ell}]=\delta_{jk}E_{i\ell}-\delta_{\ell i}E_{kj}$: both sides send $e_m$ to $\delta_{\ell m}\delta_{kj}e_i-\delta_{jm}\delta_{i\ell}e_k$. [given, F1, construct, algebra]

1.3 Every $X\in\operatorname{End}(V)$ has an expansion $X=\sum_{i,j}c_{ij}E_{ij}$: define $c_{ij}$ by $Xe_j=\sum_ic_{ij}e_i$, so that the two sides agree on each basis vector. By $\mathbb C$-linearity of $\Delta$, every product $\Delta(X_1)\cdots\Delta(X_m)$ of diagonal operators is therefore a finite $\mathbb C$-linear combination of products of matrix-unit operators $\Delta(E_{ij})$, and by [F7] every element of $B$ is such a combination; so it suffices to run all bookkeeping below on matrix-unit words. [given, F1, F2, F7, algebra]

2.1 The tensors $\gamma\cdot w_t$ for $\gamma\in C_t$ are pairwise distinct: $\gamma\cdot w_t$ carries $e_{r(\gamma^{-1}(a))}$ in the place labelled $a$, so $\gamma\cdot w_t=w_t$ exactly when $\gamma^{-1}$, equivalently $\gamma$, preserves every row set of $t$, that is, exactly when $\gamma\in R_t$; and if $\gamma\cdot w_t=\gamma'\cdot w_t$, then $\gamma'^{-1}\gamma\in C_t\cap R_t=\{1\}$, so $\gamma=\gamma'$. Distinct elementary tensors are linearly independent, and in $\kappa_t\cdot w_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\,\gamma\cdot w_t$ the tensor $w_t$ occurs only as the term $\gamma=1$, with coefficient $\operatorname{sgn}(1)=1$; hence $\kappa_t\cdot w_t\ne0$. Therefore $\varphi(e_t)=\Phi(\kappa_t\cdot\{t\})=\kappa_t\cdot\Phi(\{t\})=\kappa_t\cdot w_t\ne0$, so $\varphi=\Phi|_{S^\lambda}$ is a nonzero element of $M_\lambda$. [given, F1, F2, F3, F4, step 1.1, algebra]

2.2 The place labelled $a$ of $w_t$ carries $e_{r(a)}$, and $E_{ss}e_{r(a)}$ equals $e_s$ if $r(a)=s$ and $0$ otherwise; hence $\Delta(E_{ss})\cdot w_t=\lambda_sw_t$, because exactly the $\lambda_s$ places of row $s$ of $t$ contribute a copy of $w_t$. Likewise, for diagonal $g=\operatorname{diag}(x_1,\dots,x_d)$, one has $g^{\otimes n}\cdot w_t=\bigl(\prod_{a=1}^nx_{r(a)}\bigr)w_t=x_1^{\lambda_1}\cdots x_d^{\lambda_d}w_t=x^\lambda w_t$, the product collecting one factor $x_s$ from each of the $\lambda_s$ places of row $s$ and $\lambda_s=0$ for $s>\ell(\lambda)$. [given, F1, step 1.1, algebra]

2.3 Fix $i<j$ and let $S_j:=\{a:r(a)=j\}$ be the set of places of row $j$ of $t$. Then $\Delta(E_{ij})w_t=\sum_{a\in S_j}w_t^{(a)}$, where $w_t^{(a)}$ is $w_t$ with the factor at place $a$ replaced by $e_i$: the operator $E_{ij}$ sends $e_j$ to $e_i$ and kills every other basis vector. For $a\in S_j$, let $m$ be its column in $t$, so that $a$ occupies the box $(j,m)$ with $j\le\lambda'_m$; since $i<j\le\lambda'_m$, the box $(i,m)$ also belongs to the diagram of $\lambda$ and contains a label $b$ in the same column set $B_m$ as $a$, so the transposition $\tau=(ab)$ lies in $C_t$, and $\tau\cdot w_t^{(a)}=w_t^{(a)}$ because $w_t^{(a)}$ carries $e_i$ in both places $a$ and $b$ and $\tau$ exchanges only these two places. Consequently $\kappa_t\tau=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma\tau=\sum_{\delta\in C_t}\operatorname{sgn}(\delta\tau^{-1})\delta=\operatorname{sgn}(\tau)\kappa_t=-\kappa_t$ by [F9] after the reindexing $\delta=\gamma\tau$, so $\kappa_t\cdot w_t^{(a)}=\kappa_t\tau\cdot w_t^{(a)}=-\kappa_t\cdot w_t^{(a)}$; as $2\kappa_t\cdot w_t^{(a)}=0$ over $\mathbb C$, we get $\kappa_t\cdot w_t^{(a)}=0$. [given, F3, F6, F9, step 1.1, step 1.2, algebra]

2.4 Every product $\Delta(Y_1)\cdots\Delta(Y_p)$ of matrix-unit operators $Y_k=E_{i_kj_k}$ with $i_k\ge j_k$ for all $k$ is a product $V$ of non-raising factors; we show that an arbitrary product $\Delta(Y_1)\cdots\Delta(Y_p)$ of matrix-unit operators is a finite sum $\sum_cV_cR_c$ with every $V_c$ a product of $\Delta(E_{ij})$ with $i\ge j$ and every $R_c$ a product of $\Delta(E_{ij})$ with $i<j$, products of either kind possibly empty. [construct: induction on $p$, and for fixed $p$ on the number of pairs $u<v$ with $Y_u$ raising and $Y_v$ non-raising]. If such a pair exists, choose one with $v-u$ minimal; then $v=u+1$, for if $v>u+1$ then either $Y_{v-1}$ is non-raising and $(u,v-1)$ is an earlier pair, or $Y_{v-1}$ is raising and $(v-1,v)$ is such a pair. Replace the adjacent pair by $\Delta(Y_u)\Delta(Y_v)=\Delta(Y_v)\Delta(Y_u)+\Delta([Y_u,Y_v])$ using step 1.2; the first term has the same number $p$ of factors and one fewer pair, while $[Y_u,Y_v]=\delta_{jk}E_{i\ell}-\delta_{\ell i}E_{kj}$ by step 1.2 is a linear combination of at most two matrix units. By linearity of $\Delta$, expand the commutator term accordingly; each nonzero resulting word has $p-1$ factors, so the induction hypothesis on $p$ applies to each, and zero terms are dropped. If no such pair exists, every raising factor already lies to the right of every non-raising factor, so the product is already of the required form $V\cdot R$. [given, F1, step 1.2, construct, algebra]

2.5 Let $x\in M_\lambda$ satisfy $\Delta(E_{ij})x=0$ for all $i<j$ and $\Delta(E_{ss})x=\nu_sx$ for all $s$, and let $V=\Delta(Y_1)\cdots\Delta(Y_p)$ be a product of matrix-unit operators with $Y_k=E_{i_kj_k}$ and $i_k\ge j_k$ for all $k$. Then $Vx$ is either $0$ or a weight vector with $\Delta(E_{ss})Vx=(\nu-\alpha)_sVx$ for all $s$, where $\alpha:=\sum_{k=1}^p(e_{j_k}-e_{i_k})$ is a nonnegative integer combination of the simple vectors $e_1-e_2,\dots,e_{d-1}-e_d$. [construct: induction on $p$]. For $p=0$ the empty product is the identity and $Vx=x$ has weight $\nu$, with $\alpha=0$. For $p\ge1$, put $W:=\Delta(Y_2)\cdots\Delta(Y_p)x$, which is $0$ or a weight vector of weight $\nu-\alpha'$ with $\alpha'$ nonnegative, by the induction hypothesis; if $W=0$ then $Vx=0$, and otherwise, for every $s$, $\Delta(E_{ss})\Delta(Y_1)W=\Delta(Y_1)\Delta(E_{ss})W+\Delta([E_{ss},Y_1])W$ by step 1.2, and $[E_{ss},E_{ij}]=\delta_{si}E_{ij}-\delta_{sj}E_{ij}$, so $\Delta(E_{ss})Vx=(\nu-\alpha')_sVx+(\delta_{si}-\delta_{sj})Vx=(\nu-\alpha)_sVx$ with $\alpha=\alpha'+(e_j-e_i)$; here $i\ge j$, so $e_j-e_i$ is $0$ or a sum of simple vectors with nonnegative coefficients. [given, step 1.2, construct, algebra]

3.1 Hence $\Delta(E_{ss})\circ\varphi=\lambda_s\varphi$ for every $s$, and $g^{\otimes n}\circ\varphi=x^\lambda\varphi$ for every diagonal $g$: both $\Delta(E_{ss})\circ\varphi$ and $g^{\otimes n}\circ\varphi$ are $S_n$-linear (steps 1.1 and 1.2 and [F1]), and at $e_t$ they take the values $\Delta(E_{ss})\varphi(e_t)=\kappa_t\Delta(E_{ss})w_t=\lambda_s\kappa_tw_t=\lambda_s\varphi(e_t)$ and $g^{\otimes n}\varphi(e_t)=\kappa_tg^{\otimes n}w_t=x^\lambda\kappa_tw_t=x^\lambda\varphi(e_t)$, by steps 1.2 and 2.2 and $\varphi(e_t)=\kappa_tw_t$; since $e_t$ generates $S^\lambda$ [F4], the two $S_n$-linear maps agree on all of $S^\lambda$. This proves claim 1. [given, F3, F4, step 1.1, step 2.1, step 1.2, step 2.2, algebra]

3.2 For every $i<j$ one then has $\Delta(E_{ij})\varphi(e_t)=\Delta(E_{ij})\kappa_tw_t=\kappa_t\Delta(E_{ij})w_t=\sum_{a\in S_j}\kappa_tw_t^{(a)}=0$, by steps 1.2 and 2.3 and $\varphi(e_t)=\kappa_tw_t$. If $j>\ell(\lambda)$ then $S_j=\varnothing$ and the same computation gives $0$; if $j\le\ell(\lambda)$ the sum is over the $\lambda_j$ places of row $j$ and step 2.3 applies to each. Since $\Delta(E_{ij})\varphi$ is $S_n$-linear (step 1.2) and $e_t$ generates $S^\lambda$ [F4], $\Delta(E_{ij})\circ\varphi=0$. This proves claim 2. [given, F4, step 1.1, step 2.1, step 1.2, step 2.3, algebra]

3.3 In the situation of step 2.5, let $w_s:=d+1-s$, put $H:=\Delta(\operatorname{diag}(w_1,\dots,w_d))=\sum_sw_s\Delta(E_{ss})$, and let $\operatorname{ht}(\alpha):=\sum_{k=1}^p(i_k-j_k)$. If $Vx\ne0$, then $HVx=(\langle w,\nu\rangle-\operatorname{ht}(\alpha))Vx$ with $\langle w,\nu\rangle:=\sum_sw_s\nu_s$; moreover $\operatorname{ht}(\alpha)\ge0$, and $\operatorname{ht}(\alpha)=0$ if and only if $\alpha=0$, if and only if every $Y_k$ is diagonal, in which case $Vx=\nu_1^{m_1}\cdots\nu_d^{m_d}x\in\mathbb Cx$, where $m_s$ is the number of indices $k$ with $Y_k=E_{ss}$. Indeed $w_j-w_i=i-j$ for all $i,j$, so $\langle w,\alpha\rangle=\sum_k(w_{j_k}-w_{i_k})=\operatorname{ht}(\alpha)$, and $\operatorname{ht}(\alpha)=0$ with $i_k\ge j_k$ forces $i_k=j_k$ for every $k$; a product of diagonal factors $\Delta(E_{ss})$ then acts on $x$ by the scalar $\nu_s$, once per factor. [given, step 2.5, algebra]

4.1 In the situation of step 2.5 and for arbitrary $b\in B$, the element $y:=b\cdot x$ can be written as a finite sum $y=\sum_{e\ge0}y_e$ indexed by integers $e$, where each $y_e$ is $0$ or an eigenvector of $H$ with $Hy_e=(\langle w,\nu\rangle-e)y_e$, and $y_0\in\mathbb Cx$. Indeed, by steps 1.3 and 2.4 the element $y$ is a finite sum $\sum_cV_cR_cx$ with each $V_c$ a non-raising and each $R_c$ a raising product of matrix-unit operators; if $R_c$ is nonempty then its rightmost factor is some $\Delta(E_{ij})$ with $i<j$, so $R_cx=0$; hence $y=\sum_{c:\,R_c\text{ empty}}V_cx$, and grouping the finitely many remaining terms by the value $e=\operatorname{ht}(\alpha_c)\ge0$ from step 3.3 gives the $y_e$, the $e=0$ part lying in $\mathbb Cx$ by step 3.3. [given, F7, step 1.3, step 2.4, step 2.5, step 3.3, algebra]

5.1 In the situation of step 4.1, suppose in addition that $y\ne0$ is an eigenvector of $H$ with $Hy=Ey$. Then $E=\langle w,\nu\rangle-e$ for some $e\ge0$ with $y_e\ne0$; in particular $\langle w,\nu\rangle-E\in\mathbb Z_{\ge0}$, and if $E=\langle w,\nu\rangle$ then $y\in\mathbb Cx$. Indeed the set $Z:=\{e:y_e\ne0\}$ is finite and nonempty; if $E\notin\{\langle w,\nu\rangle-e:e\in Z\}$, then the nonzero members of $\{y\}\cup\{y_e:e\in Z\}$ are eigenvectors of $H$ with pairwise distinct eigenvalues while $y-\sum_{e\in Z}y_e=0$ is a nontrivial vanishing linear combination, contradicting [F8]; so $E=\langle w,\nu\rangle-e_0$ for some $e_0\in Z$ and $\langle w,\nu\rangle-E\in\mathbb Z_{\ge0}$. If $E=\langle w,\nu\rangle$, then $e_0=0$, every nonzero member of $\{y-y_0\}\cup\{y_e:e\in Z,\ e\ne0\}$ is an eigenvector of $H$ with eigenvalue $\langle w,\nu\rangle$ or $\langle w,\nu\rangle-e\ne\langle w,\nu\rangle$, these eigenvalues are pairwise distinct, and $(y-y_0)-\sum_{e\in Z,\,e\ne0}y_e=0$ vanishes, so [F8] forces every member to be $0$ and $y=y_0\in\mathbb Cx$. [given, F8, step 4.1, algebra]

6.1 Assume that $M_\lambda$ is irreducible over $B$. Since $\varphi\ne0$ by step 2.1, the space $B\varphi$ is a nonzero $B$-stable subspace of $M_\lambda$, hence $B\varphi=M_\lambda$; likewise $B\psi=M_\lambda$ for the nonzero $\psi$, so $\psi\in B\varphi$ and $\varphi\in B\psi$. Applying step 5.1 with $x:=\varphi$, $\nu:=\lambda$ (claim 1 proved in step 3.1) and $y:=\psi$ (an eigenvector of $H$ with eigenvalue $\langle w,\mu\rangle$, since $\Delta(E_{ss})\psi=\mu_s\psi$) gives $\langle w,\lambda\rangle-\langle w,\mu\rangle\in\mathbb Z_{\ge0}$; applying step 5.1 with $x:=\psi$, $\nu:=\mu$ and $y:=\varphi$ gives $\langle w,\mu\rangle-\langle w,\lambda\rangle\in\mathbb Z_{\ge0}$. These two nonnegative integers sum to zero, so $\langle w,\lambda\rangle=\langle w,\mu\rangle$, and the equality case of the first application gives $\psi\in\mathbb C\varphi$: write $\psi=c\varphi$ with $c\ne0$. Then for every $s$, $\mu_s\psi=\Delta(E_{ss})\psi=c\Delta(E_{ss})\varphi=c\lambda_s\varphi=\lambda_s\psi$, so $\mu_s=\lambda_s$ and $\mu=\lambda$. Thus $\lambda$ is the unique highest weight of $M_\lambda$ and the highest weight vector is unique up to a scalar, which proves claim 3. [given, F7, step 2.1, step 3.1, step 3.2, step 5.1, algebra]

7.1 Boundary and choice audit. If $n=0$ then $\lambda=\varnothing$, $V^{\otimes0}=\mathbb C$, $w_\varnothing=1$, $\kappa_\varnothing=1$, $\Phi=\varphi=\mathrm{id}_{\mathbb C}\ne0$, and $\Delta(X)=0$ for all $X$ by [F1]; claims 1 and 2 are then immediate ($\lambda_i=0$ and $\Delta(E_{ij})=0$), and in claim 3 the space $M_\varnothing=\operatorname{Hom}_{S_0}(\mathbb C,\mathbb C)=\mathbb C\,\mathrm{id}$ is one-dimensional and irreducible over $B=\mathbb C\,\mathrm{id}$, every nonzero $\psi$ is a scalar multiple of $\varphi$, and its weight is $\mu=(0,\dots,0)=\lambda$. If $d=0$ then $\ell(\lambda)\le0$ forces $n=0$, no indices $i<j$ exist, and the same discussion applies with $V=0$. In the remaining case $n\ge1$, $d\ge1$ the sets $S_j$ of steps 2.3 and 2.5 are finite (possibly empty) sets of places of the fixed tableau $t$, and the arguments of steps 1.1, 2.1, 1.2, 1.3, 2.2, 3.1, 2.3, 3.2, 2.4, 2.5, 3.3, 4.1, 5.1 and 6.1 use only the fixed basis, the fixed tableau, the explicit matrix units and finite sums, so no choice principle is invoked; this completes the proof of all three claims. [given, F1, F7, step 1.1, step 2.1, step 3.1, step 3.2, step 6.1, discharge-construct] ∎

## Remarks

- **Concrete highest weight vectors.** For $\lambda=(n)$ the module
  $S^{(n)}$ is trivial and $M_{(n)}=\operatorname{Sym}^nV$, and $\varphi$ is
  the map $1\mapsto e_1^n$ of weight $(n,0,\dots,0)$; for $\lambda=(1^n)$ with
  $n\le d$, $S^{(1^n)}$ is the sign representation and $\varphi$ is the
  antisymmetrization map whose image is spanned by
  $\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\,e_{\sigma(1)}\otimes\cdots\otimes e_{\sigma(n)}\ne0$,
  of weight $(1,\dots,1,0,\dots,0)$. These are the usual highest weight
  vectors of the symmetric and exterior powers.

- **No Lie theory is imported.** The proof uses matrix units, diagonal
  operators and finite sums only. The bracket relation
  $[\Delta(X),\Delta(Y)]=\Delta([X,Y])$ and the place-commutation of
  $\Delta(X)$ are proved directly in step 1.2, and the uniqueness argument
  reduces to the elementary independence of eigenvectors for distinct
  eigenvalues; no root system, PBW theorem or classification of irreducible
  $\mathfrak{gl}(V)$-modules is used.

- **Characteristic.** The cancellation
  $\kappa_t\cdot w_t^{(a)}=-\kappa_t\cdot w_t^{(a)}$ in step 2.3 uses that $2$
  is invertible, and the argument is carried out over $\mathbb C$.

- **Dependence on the choices.** The map $\varphi$ depends on the tableau $t$
  and on the basis $e_1,\dots,e_d$. When $M_\lambda$ is irreducible, claim 3
  says that every nonzero highest weight vector is a scalar multiple of
  $\varphi$, so the weight $\lambda$ is an invariant of $M_\lambda$ and does
  not depend on those choices.

- **Use in the Schur–Weyl decomposition.** Together with the double
  centralizer theorem, which makes the multiplicity spaces $M_\lambda$
  irreducible whenever they are nonzero, this lemma identifies $M_\lambda$ as
  the irreducible module of highest weight $\lambda$ in the decomposition of
  $V^{\otimes n}$ proved later on this page.
