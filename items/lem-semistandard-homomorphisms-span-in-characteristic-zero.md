---
id: lem-semistandard-homomorphisms-span-in-characteristic-zero
kind: lemma
title: Semistandard maps span the Hom space in characteristic zero
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-semistandard-homomorphisms-are-independent-and-dominance-triangular, lem-semistandard-tableau-homomorphisms-to-young-permutation-modules, lem-integral-specht-garnir-straightening-and-field-basis, lem-polytabloid-covariance-and-column-sign, def-semistandard-tableau-and-kostka-number, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-subgroup-tabloid-and-permutation-module, def-row-and-column-stabilizers-of-a-tableau, thm-sign-is-a-homomorphism]
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
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Lemma 3.28 and Lemma 3.29, PDF pp. 37-39"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Theorem 2.16 proof, printed pp. 28-33"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge0$, let $\lambda,\mu\vdash n$, and work over $\mathbb C$. Fix the
standard reference $\lambda$-tableau $t_0$ with
$t_0(r,c)=\lambda_1+\cdots+\lambda_{r-1}+c$
([[lem-semistandard-homomorphisms-are-independent-and-dominance-triangular]]),
write $T_{\lambda,\mu}$ for the finitely many fillings of $[\lambda]$ with
content $\mu$ ([[def-semistandard-tableau-and-kostka-number]]), and for
$u\in T_{\lambda,\mu}$ let $\theta_u:M^\lambda\to M^\mu$ be the $S_n$-module
homomorphism with $\theta_u(\{t_0\})=\sum_{v\in R_{t_0}\cdot u}v$
([[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]]).
Then the restrictions $\theta_T|_{S^\lambda}:S^\lambda\to M^\mu$ of the
semistandard fillings $T\in T_{\lambda,\mu}$ span
$\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ over $\mathbb C$.

## Facts & Assumptions

**Given:** partitions $\lambda,\mu\vdash n$, the standard reference tableau
$t_0$, and the maps $\theta_u$ for $u\in T_{\lambda,\mu}$.

[F1] The rule $\{s\}\mapsto f$, where $f(x)$ is the row of $t_0(x)$ in the
$\mu$-tabloid $\{s\}$, is a bijection from the $\mu$-tabloids onto
$T_{\lambda,\mu}$; the transported left action satisfies
$(\sigma\cdot f)(x)=f(x')$ whenever $t_0(x')=\sigma^{-1}(t_0(x))$, so a
transposition of two labels $a\ne b$ exchanges the entries in the boxes
labelled $a$ and $b$ and fixes all other entries, and the $\mu$-tabloids,
equivalently the fillings $T_{\lambda,\mu}$, form a basis of $M^\mu$; the maps
$\theta_u$ are the well-defined $S_n$-linear maps with
$\theta_u(\{t_0\})=\sum_{v\in R_{t_0}\cdot u}v$ and
$\theta_u(\sigma\cdot\{t_0\})=\sigma\cdot\theta_u(\{t_0\})$
([[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]]).

[F2] $T_{\lambda,\mu}$ is finite; a filling is semistandard when its entries
weakly increase along every row and strictly increase down every column, and
$K_{\lambda,\mu}$ counts the semistandard members
([[def-semistandard-tableau-and-kostka-number]]).

[F3] $e_t=\kappa_t\cdot\{t\}$ and
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$; for
$\gamma\in C_t$ one has $\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$; for
every $\sigma\in S_n$ one has $e_{\sigma\cdot t}=\sigma\cdot e_t$; and $S^\lambda$
is generated as an $S_n$-module by $e_t$ for any single $\lambda$-tableau $t$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[lem-polytabloid-covariance-and-column-sign]]).

[F4] For $f\in T_{\lambda,\mu}$ put $N_f(i,j):=\#\{(r,c):c\le j,\ f(r,c)\le i\}$
for $i\ge1$, $j\ge1$. Then $N_f=N_g$ holds exactly when every column of $g$ is
a rearrangement of the corresponding column of $f$; if $T$ is semistandard and
$f$ lies in the row orbit $R_{t_0}\cdot T$, then
$N_f(i,j)\le N_T(i,j)$ for all $i,j$ with equality exactly for $f=T$; and if
$T$ is semistandard then the coefficient of $T$ in
$\kappa_{t_0}\cdot f$ is $0$ unless $N_f=N_T$, while the coefficient of $T$ in
$\kappa_{t_0}\cdot T$ equals $1$ ([[lem-semistandard-homomorphisms-are-independent-and-dominance-triangular]],
established in the course of that proof).

[F5] **(Garnir.)** Let $j,j+1$ be adjacent columns of $[\lambda]$, let $X$ be a
set of entries of column $j$ of $t_0$ and $Y$ a set of entries of column $j+1$
of $t_0$ with $|X|+|Y|>\lambda'_j$, and let $T$ be any set of representatives
containing $1$ for the left cosets of $H:=S_X\times S_Y$ in $S_{X\cup Y}$.
Then $\sum_{g\in T}\operatorname{sgn}(g)\,g\cdot e_{t_0}=0$
([[lem-integral-specht-garnir-straightening-and-field-basis]], claim 1).

[F6] $C_{t_0}$ preserves every column set of $t_0$ and is the direct product
of the symmetric groups on the label sets of the columns; acting on fillings,
its elements permute the entries within each column
([[def-row-and-column-stabilizers-of-a-tableau]], [F1]).

[F7] $\operatorname{sgn}$ is a homomorphism and $\operatorname{sgn}((a\,b))=-1$
for a transposition, and $\mathbb C$ has characteristic $0$ so $2\ne0$
([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] Fix $f\in\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ and expand $f(e_{t_0})=\sum_{T\in T_{\lambda,\mu}}c_T\,T$ in the filling basis of [F1]; the sum is finite by [F2]. Since $e_{t_0}$ generates $S^\lambda$ as an $S_n$-module by [F3], the map $f$ is determined by $f(e_{t_0})$: if $f(e_{t_0})=0$ then $f(\sigma\cdot e_{t_0})=\sigma\cdot f(e_{t_0})=0$ for every $\sigma\in S_n$, and these elements span $S^\lambda$. It therefore suffices to express $f(e_{t_0})$ as a $\mathbb C$-linear combination of the vectors $\theta_T(e_{t_0})$ with $T$ semistandard: if $f(e_{t_0})=\sum_Ta_T\theta_T(e_{t_0})$ then the $S_n$-linear maps $f$ and $\sum_Ta_T\theta_T$ agree on the generator $e_{t_0}$, hence are equal. [F1, F2, F3, construct, algebra]

1.2 For $\tau\in C_{t_0}$ and every filling $T$ one has $c_{\tau\cdot T}=\operatorname{sgn}(\tau)c_T$: by [F3] and $S_n$-linearity of $f$, $\tau\cdot f(e_{t_0})=f(\tau\cdot e_{t_0})=\operatorname{sgn}(\tau)f(e_{t_0})$, while expanding the left side in the filling basis gives $\tau\cdot f(e_{t_0})=\sum_Tc_T\,(\tau\cdot T)$, so comparing coefficients of the basis element $\tau\cdot T$ yields $c_T=\operatorname{sgn}(\tau)c_{\tau\cdot T}$ and hence $c_{\tau\cdot T}=\operatorname{sgn}(\tau)c_T$ by [F7]. [F1, F3, F7, algebra]

1.3 **(Cross swaps increase $N$.)** Let $x$ be a box in a column $j$, let $y$ be a box in the column $j+1$, let $f$ be a filling with $f(x)>f(y)$, and let $\tau:=(t_0(x)\ t_0(y))$, so that $\tau\cdot f$ is obtained from $f$ by exchanging the values at $x$ and $y$ by [F1]. Then $N_{\tau\cdot f}(i,k)\ge N_f(i,k)$ for all $i,k$, with strict inequality for $i=f(y)$, $k=j$: for $k<j$ or $k\ge j+1$ the swap changes no count of entries in the first $k$ columns, while for $k=j$ the two counts differ by $[f(y)\le i]-[f(x)\le i]$, which is $0$ or $1$ because $f(y)<f(x)$, namely $1$ exactly when $f(y)\le i<f(x)$. [F1, F4, algebra]

1.4 **(A transverse transversal.)** Let $X,Y$ be disjoint nonempty label sets carried by a set of boxes of column $j$ and column $j+1$ respectively, put $Z:=X\cup Y$ and $p:=|X|$, and for every $p$-element subset $A\subseteq Z$ write $X\setminus A=\{a_1<\cdots<a_r\}$ and $A\setminus X=\{b_1<\cdots<b_r\}$, with $r:=|X\setminus A|=|A\setminus X|$, and put $g_A:=(a_1\,b_1)\cdots(a_r\,b_r)$, the empty product for $A=X$ giving $g_X=1$. Then $g_A(X)=A$ and $g_A$ maps each element of $X\setminus A$ to an element of $Y$ and conversely, so $g_A^{-1}=(a_r\,b_r)\cdots(a_1\,b_1)$ is a product of $r$ transpositions each exchanging an element of $X$ with an element of $Y$; and $\{g_A:|A|=p\}$ is a set of representatives for the left cosets of $H=S_X\times S_Y$ in $S_Z$ containing $1$, because $H$ is exactly the setwise stabilizer of $X$ in $S_Z$ so the coset $gH$ is determined by $g(X)\in\{A:|A|=p\}$ and $g_A(X)=A$ realizes each value; consequently this is a transversal of the kind required in [F5]. [F5, construct, algebra]

1.5 **(Finite descending induction.)** Since $T_{\lambda,\mu}$ is finite by [F2], the set $\mathcal N:=\{N_T:T\in T_{\lambda,\mu}\}$ is finite, and we fix a total order $\preceq$ on $\mathcal N$ extending the componentwise order in the sense that $N\sqsubseteq N'$ implies $N\preceq N'$; such an order exists because a finite partial order is listed by repeatedly removing a maximal element. For a nonzero $v\in M^\mu$ let $m(v)$ be the $\preceq$-greatest element of $\{N_T:\text{the coefficient of }T\text{ in }v\text{ is nonzero}\}$. Claim: if $v=f(e_{t_0})$ for some $f\in\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ and $v\ne0$, then there is a semistandard $S$ such that $v-c_S\theta_S(e_{t_0})=0$ or $m(v-c_S\theta_S(e_{t_0}))\prec m(v)$, where $c_S$ is the coefficient of $S$ in $v$. [F2, construct, algebra]

2.1 If a filling $T$ has two boxes $x\ne y$ of the same column carrying the same entry, then $c_T=0$. Indeed, let $a:=t_0(x)\ne b:=t_0(y)$ be the labels of those boxes and let $\tau:=(a\,b)$; then $\tau\in C_{t_0}$ by [F6] and, by [F1], $\tau$ exchanges the entries in the boxes labelled $a$ and $b$, so $\tau\cdot T=T$; step 1.2 gives $c_T=c_{\tau\cdot T}=\operatorname{sgn}(\tau)c_T=-c_T$ by [F7], hence $2c_T=0$ and $c_T=0$ in $\mathbb C$. Thus every filling with $c_T\ne0$ has pairwise distinct entries in each of its columns. [F1, F6, F7, step 1.2, algebra]

2.2 **(Expansion of a semistandard $\theta_S$.)** Let $S\in T_{\lambda,\mu}$ be semistandard and write $\theta_S(e_{t_0})=\sum_{g}d_g\,g$ in the filling basis. Then $d_g=0$ unless $N_g\sqsubseteq N_S$ componentwise, and for every $g$ with $N_g=N_S$ there is a unique $\tau_g\in C_{t_0}$ with $\tau_g\cdot S=g$, and $d_g=\operatorname{sgn}(\tau_g)$. Indeed $\theta_S(e_{t_0})=\sum_{u\in R_{t_0}\cdot S}\kappa_{t_0}\cdot u$, and the coefficient of $g$ in $\kappa_{t_0}\cdot u$ vanishes unless $N_g=N_u$ by [F4], while $N_u\sqsubseteq N_S$ for $u$ in the row orbit; so $d_g=0$ unless $N_g=N_u$ for some such $u$, whence $N_g\sqsubseteq N_S$, and if $N_g=N_S$ then $N_u=N_S$ forces $u=S$ by [F4], so $d_g$ is the coefficient of $g$ in $\kappa_{t_0}\cdot S$, namely $\sum_{\gamma\in C_{t_0}:\gamma\cdot S=g}\operatorname{sgn}(\gamma)$; the column-sorted semistandard $S$ has distinct entries in each column by [F2], so $\gamma\cdot S=S$ only for $\gamma=1$ and there is exactly one $\gamma\in C_{t_0}$ with $\gamma\cdot S=g$, giving $d_g=\operatorname{sgn}(\gamma)$ for that unique $\gamma$, which we call $\tau_g$. [F2, F3, F4, step 1.1, algebra]

3.1 Let us record the standing choice of a maximal level. For the fixed $f$ of step 1.1 with support $\{T:c_T\ne0\}$ nonempty put $v:=f(e_{t_0})$ and choose $T_1$ in the support with $N_{T_1}=m(v)$, the $\preceq$-greatest support level of step 1.5; then every support filling $T$ satisfies $N_T\preceq N_{T_1}$, and no support filling has $N_T$ strictly above $N_{T_1}$ componentwise, because $N_T\sqsupset N_{T_1}$ would imply $N_T\succ N_{T_1}$ in the total order by the extension property of $\preceq$. Replace $T_1$ by the unique filling obtained from it by sorting each column increasingly; $N_{T_1}=m(v)$ is unchanged by [F4] because column sorting only rearranges entries within columns, the coefficient still satisfies $c_{T_1}\ne0$ (it is multiplied by a sign by step 1.2), the entries of $T_1$ are pairwise distinct in each column by step 2.1, and the columns of $T_1$ are strictly increasing by construction. So we may assume: $c_{T_1}\ne0$, the columns of $T_1$ strictly increase, $N_{T_1}=m(v)$, and no filling $T$ with $c_T\ne0$ has $N_T$ strictly above $N_{T_1}$ in the componentwise order. [F4, step 1.2, step 1.5, step 2.1, construct, algebra]

4.1 **(Descent contradicts maximality.)** Suppose the filling $T_1$ of step 3.1 is not semistandard. Since its columns are strictly increasing and it is not semistandard, some row $q$ of $T_1$ descends between adjacent columns $j,j+1$: with $a:=T_1(q,j)$ and $b:=T_1(q,j+1)$ one has $a>b$. Let $X$ be the set of labels of the boxes $(r,j)$ with $q\le r\le\lambda'_j$ and $Y$ the set of labels of the boxes $(r,j+1)$ with $1\le r\le q$; these are label sets of column $j$ and column $j+1$ of $t_0$, and $|X|+|Y|=(\lambda'_j-q+1)+q=\lambda'_j+1>\lambda'_j$. Because the columns of $T_1$ strictly increase, $T_1(x)\ge a$ for every box $x\in X$ and $T_1(y)\le b$ for every box $y\in Y$, and $a>b$, so $T_1(x)>T_1(y)$ for all such boxes. [F2, F4, step 3.1, algebra]

5.1 With $X,Y,Z$ as in step 4.1 and the transversal $\{g_A\}$ of step 1.4, the Garnir relation [F5] gives $\sum_{A}\operatorname{sgn}(g_A)\,g_A\cdot e_{t_0}=0$ in $M^\lambda$, where $A$ ranges over the $p$-element subsets of $Z$. Applying the $S_n$-linear map $f$ and expanding yields the identity $0=\sum_Ac_{g_A^{-1}T_1}\operatorname{sgn}(g_A)$ in $\mathbb C$: the coefficient of the basis element $T_1$ in $\sum_A\operatorname{sgn}(g_A)\,g_A\cdot f(e_{t_0})$ is $\sum_A\operatorname{sgn}(g_A)c_{g_A^{-1}\cdot T_1}$, because within the $A$-th summand exactly the filling $g_A^{-1}\cdot T_1$ is transported to $T_1$ by $g_A$. [F1, F5, step 1.1, step 1.4, algebra]

6.1 In the identity of step 5.1, every term with $A\ne X$ vanishes. Indeed, for $A\ne X$ the permutation $g_A^{-1}$ is a product of $r=|X\setminus A|\ge1$ transpositions $(a_i\,b_i)$ with $a_i\in X$ and $b_i\in Y$ by step 1.4, and these act on disjoint pairs of boxes labelled by elements of $Z$; applying them one after another to $T_1$, each step exchanges the value at the box labelled $a_i$, which is still $T_1$'s value there and is $>b$, with the value at the box labelled $b_i$, which is still $\le b$, and hence, by step 1.3 and $T_1(x)>T_1(y)$ for all boxes $x\in X$, $y\in Y$ from step 4.1, strictly increases the count vector $N$ at each step. So $N_{g_A^{-1}T_1}(i,k)\ge N_{T_1}(i,k)$ for all $i,k$ with strict inequality somewhere, and $c_{g_A^{-1}T_1}=0$ by the maximality of $N_{T_1}$ in step 3.1. [F4, step 2.1, step 1.3, step 1.4, step 3.1, step 4.1, algebra]

7.1 Therefore the identity of step 5.1 reduces to $c_{T_1}\operatorname{sgn}(g_X)=c_{T_1}=0$, contradicting $c_{T_1}\ne0$ from step 3.1. Hence the filling $T_1$ is semistandard. [F1, step 3.1, step 5.1, step 6.1, algebra]

8.1 **(Subtraction kills a whole level.)** Keep $T_1$ semistandard with $c_{T_1}\ne0$ and $N_{T_1}=m(v)$ from step 7.1 and step 3.1 and put $v':=f(e_{t_0})-c_{T_1}\,\theta_{T_1}(e_{t_0})$, with coefficients $c'_g=c_g-c_{T_1}d_g$ in the filling basis. If $N_g=N_{T_1}$ then $g$ is a column rearrangement of $T_1$ by [F4], so $g=\tau_g\cdot T_1$ for the unique $\tau_g\in C_{t_0}$ of step 2.2; step 1.2 gives $c_g=\operatorname{sgn}(\tau_g)c_{T_1}$ and step 2.2 gives $d_g=\operatorname{sgn}(\tau_g)$, so $c'_g=\operatorname{sgn}(\tau_g)c_{T_1}-\operatorname{sgn}(\tau_g)c_{T_1}=0$. Every $g$ with $c'_g\ne0$ satisfies $N_g\preceq N_{T_1}$: if $c_g\ne0$ then this is the maximality of $N_{T_1}=m(v)$ among the support levels in the total order of step 1.5, and if $d_g\ne0$ then $N_g\sqsubseteq N_{T_1}$ by step 2.2, hence again $N_g\preceq N_{T_1}$. Since no such $g$ has $N_g=N_{T_1}$, every nonzero coefficient of $v'$ sits at a level strictly below $N_{T_1}$ in the total order. [F4, step 1.2, step 1.5, step 2.2, step 3.1, step 7.1, algebra]

9.1 This proves the claim of step 1.5: take $S:=T_1$, which is semistandard by step 7.1. Step 8.1 says that the residual $v':=v-c_S\theta_S(e_{t_0})$ either is zero or has every support level strictly below $m(v)$, so in the nonzero case $m(v')\prec m(v)$. [step 1.5, step 3.1, step 7.1, step 8.1, algebra]

10.1 Set $f_0:=f$ and $v_0:=f(e_{t_0})$. Whenever $v_k\ne0$, apply step 9.1 to $v_k=f_k(e_{t_0})$, choose the resulting semistandard $S_k$ and its coefficient $a_k$ in $v_k$, and put $f_{k+1}:=f_k-a_k\theta_{S_k}|_{S^\lambda}$ and $v_{k+1}:=f_{k+1}(e_{t_0})$. Each $f_{k+1}$ is $S_n$-linear by [F1]. Either $v_{k+1}=0$ and we stop, or $m(v_{k+1})\prec m(v_k)$. The nonzero residuals thus have strictly decreasing levels in the finite set $\mathcal N$, so after at most $|\mathcal N|$ subtractions we reach $v_k=0$. Then $f(e_{t_0})=\sum_{j<k}a_j\theta_{S_j}(e_{t_0})$, and the $S_n$-linear maps agree on a module generator, hence $f=\sum_{j<k}a_j\theta_{S_j}|_{S^\lambda}$ by step 1.1. If $v_0=0$, the same conclusion holds with the empty sum. [F1, F3, step 1.1, step 1.5, step 9.1, construct, algebra]

11.1 The remaining cases are the empty ones: for $n=0$ one has $\lambda=\mu=\varnothing$, the set $T_{\varnothing,\varnothing}$ consists of the single empty filling, which is semistandard because its row and column conditions are vacuous, and $\theta_{\varnothing}$ is the identity of $M^\varnothing=\mathbb C$, so $\operatorname{Hom}(S^\varnothing,M^\varnothing)=\mathbb C$ is spanned by that restriction; here step 1.1 applies with $e_{t_0}$ generating $S^\varnothing$, and the argument of the descent and subtraction steps is either vacuous or terminates at once, since the support of $f(e_{t_0})$ is empty or consists of the semistandard empty filling. No division is used anywhere, only the fact that $2\ne0$ in $\mathbb C$ in step 2.1, and all choices made are selections of a maximal element or a unique column-sorted filling from finite explicitly given sets, so no choice principle is invoked. [F2, F7, step 1.1, step 7.1, step 10.1, discharge-construct] ∎

## Remarks

- **Route.** Step 1.1 reduces the spanning claim to the vectors
  $\theta_T(e_{t_0})$; for any nonzero $f(e_{t_0})$ the covariance and descent
  steps produce a semistandard filling at the greatest count vector in the
  total order of step 1.5 by comparing the integral
  Garnir relation with the count vector $N$, and the subtraction and induction
  steps remove those semistandard maps one whole level at a time. This is the direct
  characteristic-zero proof, using no RSK bijection and no dimension count; the
  independent semistandard maps give the reverse inequality, so together they
  yield $\dim\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)=K_{\lambda,\mu}$ on the
  next page ([[thm-youngs-rule-for-permutation-modules]]).

- **Characteristic zero.** Step 2.1 divides by $2$ implicitly when it cancels
  $2c_T=0$; over a field of characteristic $2$ the semistandard maps need not
  span, and the spanning statement is a characteristic-zero phenomenon. The
  last stages use only finite well-ordering, not division.

- **No choice.** The only selections are from the finite sets
  $T_{\lambda,\mu}$ and $\mathcal N$ and the finite gallery of subsets $A$ of
  $Z$; the total order $\preceq$ of step 1.5 is produced by finitely many
  maximal-element removals.
