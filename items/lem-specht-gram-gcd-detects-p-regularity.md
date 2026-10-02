---
id: lem-specht-gram-gcd-detects-p-regularity
kind: lemma
title: Specht Gram gcd detects p-regularity
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-p-regular-and-p-restricted-partitions
  - lem-field-antisymmetrizer-image-and-dominance
  - def-young-subgroup-tabloid-and-permutation-module
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-row-and-column-stabilizers-of-a-tableau
  - def-young-tableau-standard-tableau-and-shape
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §10.3 (definition of g_lambda), Lemma 10.4 and Corollaries 10.5-10.6, printed pp. 37-38"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, Propositions 2.8-2.9, printed pp. 23-25"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $n\ge0$, let $\lambda\vdash n$, and for $j\ge1$ let
$$z_j:=\#\{\,i:\lambda_i=j\,\}$$
be the number of rows of the Young diagram $[\lambda]$ of length $j$; only
finitely many $z_j$ are nonzero
([[def-p-regular-and-p-restricted-partitions]]). Put
$$L_\lambda:=\prod_{j\ge1}z_j!,\qquad U_\lambda:=\prod_{j\ge1}(z_j!)^j,$$
finite products in which the factors $0!=1!=1$ contribute nothing. Let
$e_t$ be the integral polytabloid of a $\lambda$-tableau $t$, so that
$$e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\,\{\gamma\cdot t\}$$
and let $\beta$ be the integral tabloid form, for which the tabloids form an
orthonormal $\mathbb Z$-basis
([[def-integral-specht-lattice-and-base-change]],
[[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]). Let
$$g_\lambda:=\gcd\bigl\{\,\beta(e_s,e_t):s,t\text{ are }\lambda\text{-tableaux}\,\bigr\}$$
be the positive greatest common divisor of all integral pairings of integral
polytabloids. Then:

1. **Factorial bounds.** $L_\lambda$ divides $g_\lambda$, and $g_\lambda$
   divides $U_\lambda$.
2. **Standard-basis form.** $g_\lambda$ is also the greatest common divisor
   of the entries of the integral Gram matrix $G_\lambda$ in the
   standard-polytabloid basis.
3. **Prime criterion.** For every prime $p$, the reduction of $g_\lambda$
   modulo $p$ is nonzero if and only if $\lambda$ is $p$-regular, that is,
   if and only if $z_j<p$ for every $j\ge1$.
4. **Row reversal.** For every $\lambda$-tableau $t$ let $t^*$ be the
   $\lambda$-tableau obtained by reversing the order of the entries in each
   row of $t$, that is, $t^*(i,c):=t(i,\lambda_i+1-c)$. Then
   $$\beta(e_t,e_{t^*})=U_\lambda,$$
   and over every field $F$ the scalar relation
   $$\kappa_t\cdot e_{t^*}=U_\lambda\,e_t$$
   holds in the field-valued tabloid module $M^\lambda_F$.

For $\lambda=\varnothing$ one has $L_\lambda=U_\lambda=g_\lambda=1$; the
verification of the empty case is step 6.1 below. No step uses the
positive-definiteness of the Hermitian form, and no division by a group
order is made.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a partition $\lambda\vdash n$, a prime $p$ for assertion 3, and the definitions above.

[F1] $M^\lambda_{\mathbb Z}$ is the free $\mathbb Z$-module on the $\lambda$-tabloids, $C_t$ is the column stabilizer of $t$, and $e_t=\kappa_t\{t\}=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma) \{\gamma t\}\in M^\lambda_{\mathbb Z}$ has all coefficients in $\{0,1,-1\}$ with coefficient $1$ at $\{t\}$; the standard polytabloids form a $\mathbb Z$-basis of the integral Specht lattice $S^\lambda_{\mathbb Z}$, and every integral polytabloid is an integral linear combination of the standard ones ([[def-integral-specht-lattice-and-base-change]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] $\beta:M^\lambda_{\mathbb Z}\times M^\lambda_{\mathbb Z}\to\mathbb Z$ is the unique $\mathbb Z$-bilinear form with $\beta(T,U)=\delta_{TU}$ on tabloids, it is symmetric and nondegenerate, it satisfies $\beta(\sigma x,\sigma y)=\beta(x,y)$ for all $\sigma\in S_n$, and every $\kappa_t$ is self-adjoint for it, $\beta(\kappa_tx,y)=\beta(x,\kappa_ty)$; the Gram matrix $G_\lambda$ of $\beta$ restricted to $S^\lambda_{\mathbb Z}$ in the standard basis has integer entries ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F3] For every $\lambda$-tableau $u$ the tabloid is $\{u\}=\{\rho\cdot u:\rho\in R_u\}$, its row sets are the sets $\{u(i,c):1\le c\le\lambda_i\}$, the tabloids form a basis of $M^\lambda$, and $S_n$ acts on tabloids by $\sigma\cdot\{u\}=\{\sigma\cdot u\}$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] $C_t\cap R_t=\{1\}$ and the tabloids $\{\gamma\cdot t\}$ with $\gamma\in C_t$ are pairwise distinct; the map $\gamma\mapsto\{\gamma\cdot t\}$ from $C_t$ to the tabloid set is therefore injective, and the coefficient of $\{\gamma\cdot t\}$ in $e_t$ is $\operatorname{sgn}(\gamma)$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F5] $\gamma\in C_t$ if and only if $\gamma\cdot t$ is obtained from $t$ by permuting the entries within each column, and $C_t$ is the direct product of the symmetric groups on the pairwise disjoint column sets of $t$ ([[def-row-and-column-stabilizers-of-a-tableau]]).

[F6] $\lambda$ is $p$-regular if and only if $z_j(\lambda)<p$ for every $j\ge1$ ([[def-p-regular-and-p-restricted-partitions]]).

[F7] For every field $F$ the rank-one image statement $\kappa_tM^\lambda_F=Fe_t$ holds, with $e_t\ne0$ ([[lem-field-antisymmetrizer-image-and-dominance]]).

[F8] A $\lambda$-tableau is a bijection from the set of cells of $[\lambda]$ onto $\{1,\dots,n\}$, and column $j$ of $[\lambda]$ consists of the cells $(i,j)$ with $\lambda_i\ge j$ ([[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct.

1.1 For $j\ge1$ let $P_j:=\{i:\lambda_i=j\}$ be the set of row indices of length $j$, and let $\Pi:=\prod_{j\ge1}\operatorname{Sym}(P_j)$ be the finite group of all permutations of the rows of $[\lambda]$ that preserve each row length. For $\pi=(\pi_j)_j\in\Pi$ and a tabloid $T$ define $T\star\pi$ by $$\text{row}_i(T\star\pi):=\text{row}_{\pi_j(i)}(T)\qquad(i\in P_j).$$ This is a right action of $\Pi$ on tabloids: $(T\star\pi)\star\rho=T\star(\pi\rho)$ under the convention $(\pi\rho)(i)=\pi(\rho(i))$. It is free: if $T\star\pi=T$, then $\text{row}_{\pi_j(i)}(T)=\text{row}_i(T)$ for all $i$, and distinct rows are disjoint nonempty sets, so $\pi_j(i)=i$ for all $i$. Therefore $|\Pi|=\prod_{j\ge1}z_j!=L_\lambda$ and every orbit has $L_\lambda$ tabloids. Put $s_\pi:=\prod_{j\ge1}\operatorname{sgn}(\pi_j)^{j}$. [given, F3, F8, algebra]

1.2 Fix a $\lambda$-tableau $u$ and $\pi\in\Pi$. Define a permutation $\delta_\pi\in S_n$ by $$\delta_\pi\bigl(u(i,c)\bigr):=u\bigl(\pi_j(i),c\bigr) \qquad(i\in P_j,\ 1\le c\le j),$$ which is well defined because the map $(i,c)\mapsto u(i,c)$ is a bijection from the cells of $[\lambda]$ onto $\{1,\dots,n\}$ by [F8] and because $\pi_j(i)\in P_j$, so that the cell $(\pi_j(i),c)$ exists exactly when $c\le j$. For each column $c$ of $[\lambda]$ the values $u(i,c)$ with $\lambda_i\ge c$ are permuted among themselves by $\delta_\pi$: indeed $\delta_\pi$ permutes, for each $j\ge c$, the set $E_{j,c}:=\{u(i,c):i\in P_j\}$ of the $z_j$ entries of column $c$ lying in rows of length $j$, and these sets partition the $c$-th column. Hence $\delta_\pi\in C_u$ by [F5]. Moreover $\operatorname{sgn}(\delta_\pi)=\prod_{j\ge1}\operatorname{sgn}(\pi_j)^j=s_\pi$: the restriction of $\delta_\pi$ to $E_{j,c}$ corresponds to $\pi_j$ under the bijection $i\mapsto u(i,c)$, and the sets $E_{j,c}$ over all pairs $(j,c)$ with $c\le j$ are pairwise disjoint, so the signs multiply. Finally $\delta_\pi\bigl(\text{row}_i(u)\bigr)=\text{row}_{\pi_j(i)}(u)$ for $i\in P_j$, since $\delta_\pi$ carries $u(i,c)$ to $u(\pi_j(i),c)$ for every $c\le\lambda_i=j$. [given, F4, F5, F8, algebra]

1.3 Every integral polytabloid is an integral linear combination of the standard polytabloids, by [F1]. Fix an ordering $u_1,\dots,u_d$ of the standard $\lambda$-tableaux and write $e_s=\sum_ia_ie_{u_i}$ and $e_t=\sum_jb_je_{u_j}$ with integers $a_i,b_j$ and $G_\lambda=(G_{ij})=\bigl(\beta(e_{u_i},e_{u_j})\bigr)$. Bilinearity of $\beta$ gives $\beta(e_s,e_t)=\sum_{i,j}a_ib_jG_{ij}$ for every pair of tableaux $s,t$. Hence the greatest common divisor of the entries $G_{ij}$ divides every pairing $\beta(e_s,e_t)$, while each $G_{ij}$ is itself one of the pairings appearing in the definition of $g_\lambda$; the two finite gcds therefore coincide, and $g_\lambda$ is the gcd of the entries of the integral Gram matrix $G_\lambda$. [given, F1, F2, algebra]

1.4 Fix a tableau $t$ and its row reversal $t^*(i,c)=t(i,\lambda_i+1-c)$. Suppose $T=\{\gamma t\}=\{\delta t^*\}$ with $\gamma\in C_t$ and $\delta\in C_{t^*}$. A row of $T$ of length $m$ contains one entry from each of columns $1,\ldots,m$ of $t$ and one from each of columns $1,\ldots,m$ of $t^*$. An entry originally in a row of length $j$ and column $c$ of $t$ lies in column $j+1-c$ of $t^*$. Take $m$ maximal among the row lengths still under consideration. The entry of a length-$m$ row of $T$ in $t$-column $m$ must come from an original length-$m$ row and occupies $t^*$-column $1$. Descending through $t$-columns $c=m-1,\ldots,1$, assume the preceding entries occupy $t^*$-columns $1,\ldots,m-c$. An entry in $t$-column $c$ from a shorter row has $t^*$-column $j+1-c\le m-c$, already occupied; thus it comes from a length-$m$ row and occupies $t^*$-column $m+1-c$. All length-$m$ rows of $T$ therefore use only entries from original length-$m$ rows, exhausting those entries. Remove these rows and repeat at the next largest length. Hence every row $i$ of $T$ contains only entries originally in rows of length $\lambda_i$.
For $x=t(i,c)$, both $\gamma(x)$ and $\delta(x)$ belong to row $i$ of $T$. The former lies in $t$-column $c$; the latter lies in $t^*$-column $\lambda_i+1-c$, which is $t$-column $c$ among entries originally in rows of length $\lambda_i$. Since row $i$ of $T$ contains exactly one entry from that $t$-column, $\gamma(x)=\delta(x)$. Thus $\gamma=\delta$. Conversely, if $\gamma\in C_t\cap C_{t^*}$, the equal row sets of $t$ and $t^*$ give $\{\gamma t\}=\{\gamma t^*\}$. Consequently $$\operatorname{supp}(e_t)\cap\operatorname{supp}(e_{t^*})=\bigl\{\{\gamma t\}:\gamma\in C_t\cap C_{t^*}\bigr\},$$ and [F4] makes the coefficient of each common tabloid $\operatorname{sgn}(\gamma)$ in both polytabloids. [given, F3, F4, F8, algebra]

1.5 We determine the intersection $C_t\cap C_{t^*}$. First let $\gamma\in C_t\cap C_{t^*}$ and let $j\ge1$. For a value $x=t(i,c)$ with $\lambda_i=j$, the value $x$ lies in the $t^*$-column $\lambda_i+1-c$, so $\gamma(x)$, being in $C_{t^*}$, lies in that same $t^*$-column; say $\gamma(x)=t(i'',\lambda_{i''}+1-(\lambda_i+1-c)) =t(i'',c+\lambda_{i''}-\lambda_i)$ for some $i''$ with $\lambda_{i''}\ge\lambda_i+1-c$. On the other hand $\gamma\in C_t$ means $\gamma(x)=t(i',c)$ for some row $i'$ by [F5]. Comparing the two descriptions cell by cell gives $i''=i'$ and $c+\lambda_{i''}-\lambda_i=c$, that is, $\lambda_{i'}=\lambda_i=j$. Therefore $\gamma(x)$ lies in a row of length $j$ for every $x$ in a row of length $j$; since $\gamma$ is bijective, $\gamma(R_j)=R_j$ for every $j$, where $R_j:=\bigcup_{i\in P_j}\text{row}_i(t)$. Second, conversely, suppose $\gamma\in C_t$ satisfies $\gamma(R_j)=R_j$ for every $j$. Let $c\ge1$ and let $x=t(i,\lambda_i+1-c)$ be an entry of the $t^*$-column $c$, so $\lambda_i\ge c$ and $x\in R_{\lambda_i}$. Then $\gamma(x)\in R_{\lambda_i}$ and $\gamma\in C_t$ preserve the $t$-column of $x$, which is $\lambda_i+1-c$; hence $\gamma(x)=t(i',\lambda_i+1-c)$ with $\lambda_{i'}=\lambda_i$, that is, $\gamma(x)=t(i',\lambda_{i'}+1-c)$, an entry of the $t^*$-column $c$. Thus $\gamma\in C_{t^*}$. This proves $$C_t\cap C_{t^*}=\{\gamma\in C_t:\gamma(R_j)=R_j\text{ for every }j\}.$$ [given, F5, F8, algebra]

2.1 Let $u$ be a $\lambda$-tableau, $\gamma\in C_u$ and $\pi\in\Pi$. By step 1.2, for $i\in P_j$, $$\text{row}_i\bigl(\gamma\,\delta_\pi\cdot u\bigr)=\gamma\bigl(\text{row}_{\pi_j(i)}(u)\bigr)=\text{row}_{\pi_j(i)}\bigl(\gamma\cdot u\bigr)=\text{row}_i\bigl(\{\gamma\cdot u\}\star\pi\bigr),$$ so $\{\gamma\cdot u\}\star\pi=\{\gamma\,\delta_\pi\cdot u\}$. By [F4] the coefficient changes by $\operatorname{sgn}(\delta_\pi)=s_\pi$. Applying $\pi^{-1}$ gives the converse for support. Thus, writing $c_u(T)$ for the coefficient of $T$ in $e_u$, $$c_u(T\star\pi)=s_\pi c_u(T)\qquad(T\text{ any tabloid},\ \pi\in\Pi),$$ including when both coefficients vanish. [given, F1, F4, step 1.2, algebra]

2.2 Such a $\gamma$ is exactly a choice, for every pair $(j,c)$ with $c\le j$, of an arbitrary permutation of the $z_j$ values $E_{j,c}=\{t(i,c):i\in P_j\}$ that column $c$ of $[\lambda]$ receives from the rows of length $j$, the choices for the finitely many pairs $(j,c)$ being independent; these permutations determine $\gamma$ and lie in $C_t$ because the sets $E_{j,c}$ partition the value sets of the columns, and they satisfy $\gamma(R_j)=R_j$ and hence $\gamma\in C_{t^*}$ by step 1.5. Therefore $$|C_t\cap C_{t^*}|=\prod_{j\ge1}\ \prod_{c=1}^{j}z_j! =\prod_{j\ge1}(z_j!)^{j}=U_\lambda .$$ [given, F5, F8, step 1.5, algebra]

3.1 Let $C$ be a $\Pi$-orbit with base point $T_0$. By step 1.1 the map $\pi\mapsto T_0\star\pi$ is a bijection $\Pi\to C$, and by step 2.1, for any two polytabloids $e_s,e_t$, $$\sum_{T\in C}c_s(T)c_t(T)=\sum_{\pi\in\Pi}c_s(T_0\star\pi)c_t(T_0\star\pi)=\sum_{\pi\in\Pi}s_\pi^2c_s(T_0)c_t(T_0)=L_\lambda c_s(T_0)c_t(T_0).$$ Summing over all orbits gives $\beta(e_s,e_t)=L_\lambda N_{s,t}$ for an integer $N_{s,t}$; hence $L_\lambda\mid g_\lambda$. [given, F2, step 1.1, step 2.1, algebra]

4.1 Combining steps 1.4 and 2.2, each of the $U_\lambda$ common tabloids contributes $\operatorname{sgn}(\gamma)^2=1$ to the pairing, so $$\beta(e_t,e_{t^*})=U_\lambda .$$ Since $U_\lambda$ is one of the pairings whose positive gcd is $g_\lambda$, the gcd divides it: $g_\lambda\mid U_\lambda$. With step 3.1 this gives $L_\lambda\mid g_\lambda\mid U_\lambda$, assertions 1 and 2 of the statement. [given, F2, step 3.1, step 1.4, step 2.2, algebra]

5.1 Let $p$ be a prime. A prime divides the factorial $z_j!$ if and only if $z_j\ge p$. Hence $p\mid L_\lambda$ if and only if $z_j\ge p$ for some $j$, and the same equivalence holds for the product $U_\lambda=\prod_j(z_j!)^j$; the two products therefore have the same prime divisors. By step 4.1, $p\mid g_\lambda$ if and only if $p\mid L_\lambda$, that is, if and only if $z_j\ge p$ for some $j$; by [F6] this is exactly the failure of $p$-regularity of $\lambda$. Therefore $g_\lambda$ is nonzero modulo $p$ if and only if $\lambda$ is $p$-regular, assertion 3. [given, F6, step 4.1, algebra]

5.2 It remains to verify the field relation of assertion 4. Let $F$ be a field and let $M^\lambda_F$ be the field-valued tabloid module, with $\beta_F$ the scalar extension of $\beta$ and with the same symbols $\kappa_t,e_t$. By [F7] the image of $\kappa_t$ on $M^\lambda_F$ is the line $Fe_t$, so $\kappa_t\cdot e_{t^*}=h\,e_t$ for a unique $h\in F$. Using [F2], the normalization $\beta_F(e_t,\{t\})=1$ (the coefficient of $\{t\}$ in $e_t$ is $1$ by [F4]), and $\kappa_t\{t\}=e_t$, we compute $$h=h\,\beta_F(e_t,\{t\})=\beta_F(he_t,\{t\}) =\beta_F(\kappa_t e_{t^*},\{t\})=\beta_F(e_{t^*},\kappa_t\{t\}) =\beta_F(e_{t^*},e_t)=U_\lambda\cdot1_F,$$ where the last equality is the base change of the integral identity of step 4.1. Hence $\kappa_t\cdot e_{t^*}=U_\lambda e_t$ in $M^\lambda_F$, over every field and in particular in every prime characteristic, with no division by a group order. [given, F2, F4, F7, step 4.1, algebra]

6.1 Finally take $\lambda=\varnothing$ and $n=0$. There is exactly one tabloid, exactly one tableau, and $C_t=\{1\}$, so $e_t$ is the unique basis vector and $\beta(e_t,e_t)=1$; the products $L_\varnothing$ and $U_\varnothing$ are empty products equal to $1$, and the empty partition is $p$-regular for every prime $p$ by [F6]. Thus $L_\varnothing=U_\varnothing=g_\varnothing=1$ and all four assertions hold in this case. [given, F1, F2, F6, step 4.1, step 5.1, algebra] ∎
