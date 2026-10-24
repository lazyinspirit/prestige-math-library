---
id: lem-semistandard-homomorphisms-are-independent-and-dominance-triangular
kind: lemma
title: Semistandard maps are independent and respect dominance
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-semistandard-tableau-homomorphisms-to-young-permutation-modules, def-semistandard-tableau-and-kostka-number, def-dominance-order-on-partitions, def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, lem-polytabloid-covariance-and-column-sign, def-young-subgroup-tabloid-and-permutation-module, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition, thm-sign-is-a-homomorphism]
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
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Lemma 2.15 and Theorem 2.16 proof, printed pp. 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Remark 3.25 and Lemma 3.26, PDF pp. 36-37"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $\lambda,\mu\vdash n$ and let $t_0$ be the standard $\lambda$-tableau that
carries the labels $\lambda_1+\cdots+\lambda_{i-1}+1,\dots,\lambda_1+\cdots+\lambda_i$
in row $i$. Write $T_{\lambda,\mu}$ for the set of fillings of $[\lambda]$ by
positive integers with content $\mu$
([[def-semistandard-tableau-and-kostka-number]]), and for $u\in T_{\lambda,\mu}$
let $\theta_u:M^\lambda\to M^\mu$ be the $S_n$-module homomorphism of
[[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]]
constructed from the reference tableau $t_0$. Then:

1. **(Nonvanishing and independence.)** For every semistandard
   $T\in T_{\lambda,\mu}$ the restriction
   $\theta_T|_{S^\lambda}:S^\lambda\to M^\mu$ is nonzero; and if
   $T_1,\dots,T_r$ are pairwise distinct semistandard fillings of content
   $\mu$, then $\theta_{T_1}|_{S^\lambda},\dots,\theta_{T_r}|_{S^\lambda}$
   are linearly independent. In particular
   $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)\ge K_{\lambda,\mu}$.
2. **(Dominance.)** If there exists a semistandard $\lambda$-tableau of
   content $\mu$, that is, if $K_{\lambda,\mu}\ne0$, then $\lambda\unrhd\mu$
   in the dominance order ([[def-dominance-order-on-partitions]]).
3. **(Diagonal case.)** $K_{\lambda,\lambda}=1$: there is exactly one
   semistandard $\lambda$-tableau of content $\lambda$, the filling whose
   $i$-th row consists entirely of the entry $i$.

## Facts & Assumptions

**Given:** partitions $\lambda,\mu\vdash n$, the standard reference tableau $t_0$, and the homomorphisms $\theta_u$ for $u\in T_{\lambda,\mu}$.

[F1] The rule $\{s\}\mapsto f$, where $f(x)$ is the row of $t_0(x)$ in the $\mu$-tabloid $\{s\}$, is a bijection from the $\mu$-tabloids onto $T_{\lambda,\mu}$, and the transported left action on fillings satisfies $(\sigma\cdot f)(x)=f(x')$ whenever $t_0(x')=\sigma^{-1}(t_0(x))$; the $\mu$-tabloids form a basis of $M^\mu$, and $\theta_u$ is the $S_n$-linear map determined by $\theta_u(\{t_0\})=\sum_{v\in R_{t_0}\cdot u}v$ ([[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]]).

[F2] A filling $T$ of $[\lambda]$ has content $\mu$ when the entry $i$ occurs in exactly $\mu_i$ boxes; it is semistandard when its entries weakly increase along every row and strictly increase down every column, and $K_{\lambda,\mu}$ is the number of such fillings ([[def-semistandard-tableau-and-kostka-number]]).

[F3] $e_{t}=\kappa_t\cdot\{t\}$ and $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$; the stabilizer subgroups $C_t,R_t$ preserve every column set and every row set of $t$; $C_{t_0}$ is the direct product of the symmetric groups on the label sets of the columns of $t_0$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[def-row-and-column-stabilizers-of-a-tableau]]).

[F4] $e_{\sigma\cdot t}=\sigma\cdot e_t$ for every $\sigma\in S_n$ and $\gamma\cdot e_t=\operatorname{sgn}(\gamma)e_t$ for $\gamma\in C_t$; $S^\lambda$ is the $\mathbb C$-span of the polytabloids $e_t$ and is an $S_n$-submodule of $M^\lambda$ ([[lem-polytabloid-covariance-and-column-sign]]).

[F5] A $\lambda$-tableau is a bijection $[\lambda]\to\{1,\dots,n\}$; it is standard when its entries strictly increase along rows and down columns, and the tabloid $\{t\}$ records the row sets of $t$ ([[def-young-tableau-standard-tableau-and-shape]], [[def-young-subgroup-tabloid-and-permutation-module]]).

[F6] $[\lambda]=\{(r,c):1\le r\le k,\ 1\le c\le\lambda_r\}$ is a Young diagram, so it is closed to the left and upwards ([[def-partition-young-diagram-and-conjugate-partition]]).

[F7] $\operatorname{sgn}$ is a homomorphism $S_n\to\{\pm1\}$ ([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] The rule $t_0(r,c):=\lambda_1+\cdots+\lambda_{r-1}+c$ defines a bijection $[\lambda]\to\{1,\dots,n\}$, because the row blocks $B_r=\{\lambda_1+\cdots+\lambda_{r-1}+1,\dots,\lambda_1+\cdots+\lambda_r\}$ are disjoint intervals of sizes $\lambda_r$ covering $\{1,\dots,n\}$ and increase along each row, and $t_0(r,c)=\lambda_1+\cdots+\lambda_{r-1}+c<t_0(r+1,c)=\lambda_1+\cdots+\lambda_r+c$, so the entries strictly increase down every column. Hence $t_0$ is a standard $\lambda$-tableau. [F5, F6, construct]

1.2 The stabilizer $R_{t_0}$ of $\{t_0\}$ consists of the permutations that preserve each row set of $t_0$, and such a $\rho$ acts on a filling $f$ by $(\rho\cdot f)(x)=f(x'')$ with $t_0(x'')=\rho^{-1}(t_0(x))$ by [F1]; since $t_0$ carries the labels $\lambda_1+\cdots+\lambda_{r-1}+1,\dots,\lambda_1+\cdots+\lambda_r$ in row $r$, the box $x''$ lies in the same row of $[\lambda]$ as $x$. So the row orbit $R_{t_0}\cdot f$ consists exactly of the fillings obtained from $f$ by permuting the entries within each row of $[\lambda]$, and two fillings in the same row orbit have the same multiset of entries in every row. [F1, F3, F5, algebra]

1.3 For $f\in T_{\lambda,\mu}$ define $N_f(i,j):=\#\{(r,c):c\le j,\ f(r,c)\le i\}$ for $1\le i\le\mu'_1$ and $1\le j\le\lambda_1$, and set $N_f(0,j)=N_f(i,0)=0$ on the boundary. Because the number of entries equal to $i$ in column $c$ is $\bigl(N_f(i,c)-N_f(i-1,c)\bigr)-\bigl(N_f(i,c-1)-N_f(i-1,c-1)\bigr)$, the vector $N_f$ determines, and is determined by, the ordered tuple of the multisets of entries in the columns of $[\lambda]$; thus $N_f=N_g$ holds exactly when every column of $g$ is a rearrangement of the corresponding column of $f$, and the relation $f\preceq g$ defined by $N_f(i,j)\le N_g(i,j)$ for all $i,j$ is a preorder on the finite set $T_{\lambda,\mu}$. [F2, F6, construct, algebra]

1.4 Let $T$ be a semistandard $\lambda$-tableau of content $\mu$ and let $i\ge1$. The set $D_i:=\{(r,c)\in[\lambda]:T(r,c)\le i\}$ of boxes with entries $\le i$ is closed to the left and upwards: if $(r,c)\in D_i$ and $c\ge2$ then $T(r,c-1)\le T(r,c)\le i$ by weak increase along rows, and if $r\ge2$ then $T(r-1,c)<T(r,c)\le i$ by strict increase down columns; hence $D_i$ is a Young diagram inside $[\lambda]$ by [F6]. Moreover $(r,c)\in D_i$ implies $r\le i$, since the entries strictly increase down a column, so $1\le T(1,c)<\cdots<T(r,c)\le i$ gives $r\le T(r,c)\le i$. So $D_i$ lies in the first $i$ rows and has $\mu_1+\cdots+\mu_i$ boxes by the content condition [F2], whence $\mu_1+\cdots+\mu_i\le\lambda_1+\cdots+\lambda_i$ for all $i\ge1$ (both prefixes equal $n$ for $i$ at least the number of parts of $\mu$), that is $\lambda\unrhd\mu$: this proves claim 2. If moreover $\mu=\lambda$, then $|D_i|=\lambda_1+\cdots+\lambda_i$ is the number of boxes in the first $i$ rows of $[\lambda]$; a left- and upward-closed subdiagram with the same number of boxes as its ambient diagram equals it, so $D_i$ is exactly those first $i$ rows, a box in row $r$ carries an entry $\le r$ but not $\le r-1$, namely $r$, and $T$ is the filling whose $r$-th row is constant with entry $r$; conversely that filling is semistandard of shape and content $\lambda$, so $K_{\lambda,\lambda}=1$, proving claim 3. [F2, F6, algebra]

2.1 For $\gamma\in C_{t_0}$ the box $x'$ with $t_0(x')=\gamma^{-1}(t_0(x))$ lies in the same column of $[\lambda]$ as $x$ by step 1.1, since $\gamma$ preserves the column sets of $t_0$ by [F3]; hence $\gamma$ acts on fillings by permuting the entries within each column of $[\lambda]$, and conversely every such columnwise permutation of labels lies in $C_{t_0}$. Therefore $N_{\gamma\cdot f}=N_f$ for all $\gamma\in C_{t_0}$ and $f\in T_{\lambda,\mu}$ by step 1.3, and if $N_g=N_f$ then $g=\gamma\cdot f$ for some $\gamma\in C_{t_0}$. [F1, F3, step 1.1, step 1.3, algebra]

2.2 Let $T\in T_{\lambda,\mu}$ be semistandard and let $f$ be a filling obtained from $T$ by permuting the entries within rows. Fix $i$: in each row $r$ of $T$ the entries $\le i$ form an initial segment, since $T(r,1)\le T(r,2)\le\cdots$, so the number of entries $\le i$ in the first $j$ columns of row $r$ of $T$ is $\min(j,m_r(i))$ with $m_r(i):=\#\{c:T(r,c)\le i\}$, while the same count for $f$ is at most $\min(j,m_r(i))$, because $f$ has the same entries in row $r$ as $T$ by step 1.2. Summing over rows gives $N_f(i,j)\le N_T(i,j)$ for all $i,j$, that is $f\preceq T$. If moreover $N_f=N_T$, then for each row $r$ and all $i,j$ we have $\#\{c\le j:f(r,c)\le i\}=\min(j,m_r(i))$, and induction on $j$ gives $f(r,j)=T(r,j)$: assuming $f(r,c)=T(r,c)$ for $c<j$, the difference of the identities for $j$ and $j-1$ yields $[f(r,j)\le i]=\min(j,m(i))-\min(j-1,m(i))=[m(i)\ge j]=[T(r,j)\le i]$ for every $i$, and a value is determined by the thresholds that dominate it. As $r$ was arbitrary, $f=T$; so among the fillings of the row orbit $R_{t_0}\cdot T$ the filling $T$ is the unique one with $N_f=N_T$. [F2, step 1.2, step 1.3, algebra]

2.3 Two distinct semistandard fillings $T,T'$ of content $\mu$ satisfy $N_T\ne N_{T'}$: if $N_T=N_{T'}$ then by step 1.3 each column of $T'$ is a rearrangement of the corresponding column of $T$, and each column of a semistandard filling is strictly increasing, hence determined by its multiset, so $T=T'$. [F2, step 1.3, algebra]

2.4 For any finite $\mathbb C$-linear combination $F=\sum_Ta_T\theta_T$ of the maps attached to semistandard fillings, $S_n$-linearity of the $\theta_T$, the identity $e_{t_0}=\kappa_{t_0}\cdot\{t_0\}$ of [F3] and the defining value of $\theta_T$ in [F1] give the identity $F(e_{t_0})=\kappa_{t_0}\cdot\bigl(\sum_Ta_T\sum_{f\in R_{t_0}\cdot T}f\bigr)=\sum_Ta_T\sum_{f\in R_{t_0}\cdot T}\kappa_{t_0}\cdot f$ in $M^\mu$, the outer sums being finite because $T_{\lambda,\mu}$ is finite by [F2]. [F1, F2, F3, F4, step 1.2, algebra]

3.1 For $f\in T_{\lambda,\mu}$ the expansion of $\kappa_{t_0}\cdot f=\sum_{\gamma\in C_{t_0}}\operatorname{sgn}(\gamma)\,\gamma\cdot f$ in the filling basis involves, by step 2.1, only fillings $g$ with $N_g=N_f$; so the coefficient of a filling $g$ in $\kappa_{t_0}\cdot f$ is zero unless $N_g=N_f$, and the coefficient of $f$ itself is $\sum_{\gamma\cdot f=f}\operatorname{sgn}(\gamma)$. The latter is $1$ when $f=T$ is semistandard: a nontrivial $\gamma\in C_{t_0}$ permutes two entries of some column of $T$, whereas $T$ has distinct entries in every column, so only $\gamma=1$ fixes $T$ and $\operatorname{sgn}(1)=1$ by [F7]. [F2, F7, step 2.1, algebra]

4.1 Suppose that $\sum_Ta_T\theta_T=0$ with not all $a_T=0$, and among the semistandard $T$ with $a_T\ne0$ choose $T_\ast$ whose vector $N_{T_\ast}$ is maximal in the preorder of step 1.3: whenever $N_{T_\ast}(i,j)\le N_T(i,j)$ for all $i,j$ and $a_T\ne0$, then $N_T=N_{T_\ast}$; such $T_\ast$ exists because the semistandard fillings of content $\mu$ form a finite set by [F2]. In the filling-basis expansion of $F(e_{t_0})=\sum_Ta_T\sum_{f\in R_{t_0}\cdot T}\kappa_{t_0}\cdot f$ from step 2.4, the coefficient of $T_\ast$ is exactly $a_{T_\ast}\ne0$: a term $\kappa_{t_0}\cdot f$ with $f\in R_{t_0}\cdot T$ can contribute only if $N_f=N_{T_\ast}$ by step 3.1, while $N_f\preceq N_T$ by step 2.2, so maximality gives $N_T=N_{T_\ast}$ and then $T=T_\ast$ by step 2.3; within the orbit $R_{t_0}\cdot T_\ast$ the condition $N_f=N_{T_\ast}$ forces $f=T_\ast$ by step 2.2, and the coefficient of $T_\ast$ in $\kappa_{t_0}\cdot T_\ast$ is $1$ by step 3.1. [F2, step 1.3, step 2.2, step 2.3, step 2.4, step 3.1, construct, algebra]

5.1 Hence every nonzero combination $F=\sum_Ta_T\theta_T$ satisfies $F(e_{t_0})\ne0$ by steps 2.4 and 4.1, so the restrictions $\theta_T|_{S^\lambda}$ for distinct semistandard $T$ are linearly independent; taking a combination with a single nonzero coefficient shows that each $\theta_T|_{S^\lambda}$ is nonzero. Since these restrictions lie in $\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ by [F4], that space has dimension at least the number of semistandard fillings, which is $K_{\lambda,\mu}$ by [F2]. This proves claim 1, and claims 2 and 3 are step 1.4. [F2, F4, step 1.4, step 2.4, step 4.1, discharge-construct]

6.1 Claims 1, 2 and 3 are steps 5.1 and 1.4. No division and no choice principle is used: the order of step 1.3 compares finitely many integer vectors attached to the finitely many fillings of content $\mu$, and $T_\ast$ is a maximal element of a finite set. [step 1.3, step 1.4, step 5.1, discharge-construct] ∎

## Remarks

- **What the order does.** The vector $N_f$ is the dominance criterion applied to the multiset of entries of each column: increasing $N_f(i,j)$ means moving smaller entries to the left, the move generating the column-word order used in the source proof. Step 4.1 shows that the matrix of coefficients of the maps $\theta_T$ against the filling basis is triangular with diagonal entries $1$ when the semistandard fillings are listed compatibly with $\preceq$, which is the triangularity behind the independence statement. Step 2.2 is the quantitative form of the source observation that a row permutation of a semistandard tableau produces a strictly smaller column word ([[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]]).

- **Linearity over other rings.** Steps 1.1--5.1 never divide by an integer and never use a sign cancellation of the form $c=-c$, so the independence statement holds verbatim after base change to any commutative ring over which the maps $\theta_T$ are defined, and in particular over any field. The counting statements 2 and 3 are ring-independent. The characteristic-zero hypothesis is used only later, when these maps are upgraded to a spanning set and to multiplicities of Specht modules.

- **Dominance is not an input to independence.** The choice of $T_\ast$ in step 4.1 uses only maximality in a finite preorder; the dominance statement 2 is proved separately in step 1.4 and is not used in steps 1.1--5.1. In particular no circular use of Young's rule occurs here.

- **Boundary cases.** For $n=0$ we have $\lambda=\mu=\varnothing$, the unique filling is empty and semistandard, $K_{\varnothing,\varnothing}=1$, and $\theta$ is the identity of the one-dimensional space $\mathbb C$; all claims hold. For $n\ge1$ and $\lambda=(n)$ there is exactly one semistandard filling of content $\mu$ for each partition $\mu$ of $n$, namely the single row filled with the entries of $\mu$ in weakly increasing order, in agreement with $K_{(n),\mu}=1$.

- **No choice.** All sets of fillings are finite, the order is a componentwise integer comparison, and the maximal element $T_\ast$ is selected from a finite set; no selection principle is used.
