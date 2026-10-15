---
id: lem-hh-cyclotomic-straightening-spanning
kind: lemma
title: "Integral cyclotomic straightening and bounded PBW spanning"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 2
deps: [lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization, def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38, Lemmas 6.2–6.15; §5, PDF pp. 24–31, braid sweeps used there; the coefficient and commutation-index corrections are incorporated and every reduction is written here"
---

## Statement

Let $H_{r,n}$ be [[def-hh-multiplicative-cyclotomic-hecke-algebra]]. The algebra is spanned over $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}]$ by

$$ \{X_1^{a_1}\cdots X_n^{a_n}T_w:0\le a_j<r,\ w\in S_n\}. $$

No independence is asserted here. The proof uses a finite-free coefficient extension and an explicit generator-closed normal-word span; it does not impose one common cyclotomic polynomial on all $X_i$.

## Facts & Assumptions

**Given:** The multiplicative affine presentation, its cyclotomic quotient, the transport identities of [[lem-hh-cyclotomic-commuting-jucys-murphy-generators]], the normalized finite type-A basis of [[thm-hh-generic-coxeter-hecke-standard-basis]], and its exact multiplicative-normalization form from [[lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization]].

[F1] In the affine algebra, $X_i$ commute; $T_iX_iT_i=QX_{i+1}$; and $T_iX_j=X_jT_i$ for $j\notin\{i,i+1\}$. The quadratic relation is $T_i^2=(Q-1)T_i+Q$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F2] For polynomial $f$ in nonnegative powers, $T_if(X)=s_i(f)T_i-(Q-1)X_{i+1}(f-s_i(f))/(X_i-X_{i+1})$; the quotient is a polynomial, and each correction preserves nonnegative exponents and total $X$-degree. ([[lem-hh-cyclotomic-commuting-jucys-murphy-generators]])

[F3] With a unit parameter $v$, the type-A finite Hecke algebra with $(s-v)(s+v^{-1})=0$ has basis indexed by the symmetric group, and its reduced products multiply by the length rule. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F4] Over $R_0=\mathbb Z[Q,Q^{-1}]$, the finite type-A algebra with $(T_i-Q)(T_i+1)=0$ has basis $(T_w)$ for $n\ge2$, and this basis survives every commutative coefficient extension. Its proof uses $Q=v^2$, $T_i=vU_i$, the free decomposition $\mathbb Z[v,v^{-1}]=R_0\oplus vR_0$, inverse presentation maps and direct-sum descent. ([[lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization]])

## Proof

**Given:** The algebra $H_{r,n}$ and its generators and relations.

1.1 For $n=1$, the relation $p(X_1)=0$ and its unit constant coefficient express $X_1^{-1}$ as a polynomial in $X_1$; monic division then spans the algebra by $1,X_1,\ldots,X_1^{r-1}$, as required. Hence assume $n\ge2$. If $r=1$, $X_1=u_1$, the affine recursion and $T_i^{-1}=Q^{-1}(T_i-(Q-1))$ express every $X_i$ and $X_i^{-1}$ in the finite generators. Thus the multiplicative finite type-A algebra over $R=\mathbb Z[Q^{\pm1},u_1^{\pm1}]$ maps surjectively to $H_{1,n}$, fixing each $T_i$. By [F4] and coefficient extension from $R_0$ to $R$, its basis is $(T_w)$, so the images span $H_{1,n}$; these are precisely the proposed PBW words when all exponents are $0$. For $r\ge2$ set $R'=R[v,w]/(v^2-Q,\ w^r-(-1)^{r+1}e_r)$. Successive division by these monic polynomials gives the $R$-basis $v^iw^j$ with $0\le i<2$, $0\le j<r$, containing $1$; thus $R'$ is free of positive rank. Also $v^{-1}=vQ^{-1}$ and $w^{-1}=(-1)^{r+1}e_r^{-1}w^{r-1}$. [F1, F4, algebra]

1.2 Set $a=v-v^{-1}$, $s_j=v^{-1}T_{j-1}$ for $2\le j\le n$, and $z=w^{-1}X_1$. Scaling gives $s_j^2=as_j+1$, the type-A braid relations, and $zs_j=s_jz$ only for $j\ge3$. The affine relation gives $zs_2zs_2=s_2zs_2z$: before scaling the two sides are $X_1T_1X_1T_1=QX_1X_2$ and $T_1X_1T_1X_1=QX_2X_1$. Expanding $\prod_{c=1}^r(wz-u_c)=0$ and using $w^r=(-1)^{r+1}e_r$ gives $z^r=b_1z^{r-1}+\cdots+b_{r-1}z+1$, where $b_k=(-1)^{k+1}e_kw^{-k}$. Hence powers of $z$ reduce to $0\le j<r$, and $z,s_2,\ldots,s_n$ generate the extended algebra. [F1, algebra]

1.3 Put $s=s_2$, $Y=szs$, and $\mathcal N_2=\operatorname{Span}_{R'}\{z^c,z^csz^d,z^csz^ds:0\le c,d<r\}$. The rank-four braid gives $Yz=zY$, and expansion of $Y^2=szs^2zs$ using $s^2=as+1$ gives $Y^2=a^2zY+azsz+sz^2s$, hence $sz^2s=Y^2-a^2zY-azsz$. Inductively every $Y^m$, $1\le m<r$, is in $\mathcal N_2$: multiply a term of each of the three displayed forms by $Y$, use $sY=aY+zs$, $z^dszs=szsz^d$, and $s^2=as+1$, then reduce every excess $z$ power by the monic relation. In particular $z^csz^dsY=az^{c+d}Y+z^{c+1}sz^d$, and $z^csz^dsY$ with a final $s$ first expands its middle $s^2$ into this expression and $z^csz^{d+1}s$. Also $Ys=aY+sz$ and $Yz=zY$, so induction gives $Y^ms$ as a sum of $Y^m,zY^{m-1},\ldots,z^{m-1}Y,sz^m$, all in $\mathcal N_2$. [F1, algebra]

2.1 For $U_m=sz^ms$, $1\le m<r$, induction gives $U_m\in\operatorname{Span}\{z^c,z^cs,z^cY^q,z^csz^d:c<r,\ 1\le q\le m,\ 1\le d\le m-1\}$. The base terms are $U_1=Y$ and $U_2=Y^2-a^2zY-azsz$. For $m\ge3$, inserting $s^{-1}s$ between $z^{m-1}$ and $z$ gives $U_m=U_{m-1}Y-a\,sz^{m-1}Y$, while the rank-four braid and quadratic relation give $sz^{m-1}Y=az^{m-1}Y+zsz^{m-1}$. Multiplication of the four inductive term types by $Y$ uses $z^cY$, $sY=aY+zs$, $z^cY^qY=z^cY^{q+1}$, and $z^csz^dY=az^{c+d}Y+z^{c+1}sz^d$; every resulting exponent at least $r$ is reduced by the monic polynomial. This proves the induction. It also proves $U_mz^d,U_mz^ds\in\mathcal N_2$: commute $z^d$ across $Y^q$, expand $Y^q$ and $Y^qs$ by step 1.3, and reduce excess powers. The corrected coefficient identity in the rank-two induction is $a z^c s z^{c'}s z s=a^2z^{c+c'}Y+a z^{c+1}s z^{c'}$. Left multiplication by $s$ on $z^c$, $z^csz^d$, $z^csz^ds$ gives respectively $sz^c$, $U_cz^d$, $U_cz^ds$; for $c=0$ use $s^2=as+1$. Thus $\mathcal N_2$ is stable under $z,s$, contains $1$, and equals the rank-two algebra. [step 1.3, algebra]

3.1 For $i\ge2$ put $\Lambda_1=\{z^c:0\le c<r\}$, $D_i(j)=s_i\cdots s_j$ for $2\le j\le i$, and $D_i(i+1)=1$. Put $L_i(c)=D_i(2)z^c$ for $1\le c<r$, $L_i(0)=D_i(2)$, and $S_i(c,j)=D_i(2)z^cs_2\cdots s_j$ for $1\le c<r$, $2\le j\le i$. Let $\Lambda_i$ contain $1$, all $D_i(j)$, all $L_i(c)$ with $c>0$, and all $S_i(c,j)$. Then $|\Lambda_1|=r$, $|\Lambda_i|=ir$, and step 2.1 gives the base $M_2=H_{r,2}\otimes_RR'$ for $M_n=\operatorname{Span}_{R'}(\Lambda_1\cdots\Lambda_n)$. If $M_{n-1}=H_{r,n-1}\otimes_RR'$, the older generators preserve $M_n=M_{n-1}\Lambda_n$. Write each prefix as $h'a_{n-1}$ with $h'\in H_{r,n-2}\otimes_RR'$, $a_{n-1}\in\Lambda_{n-1}$; $s_n$ commutes with $h'$, so it remains to reduce $s_n(a_{n-1}a_n)$. For $a_n=1$, $s_nD_{n-1}(j)=D_n(j)$, $s_nL_{n-1}(c)=L_n(c)$, and $s_nS_{n-1}(c,j)=S_n(c,j)$. If $a_{n-1}=1$, use $s_nD_n(j)=aD_n(j)+D_{n-1}(j)$ and, for loops or sandwiches, $s_nD_n(2)=aD_n(2)+D_{n-1}(2)$ followed by the finite coset factorization proved next. These terms are in $H_{r,n-1}\Lambda_n$. [step 2.1, algebra]

4.1 The finite group has the left-coset decomposition $\mathfrak S_n=\mathfrak S_{n-1}\{D_n(j):2\le j\le n+1\}$, where $D_n(n+1)=1$: the representatives place the value $n$ in distinct positions, and left multiplication by $\mathfrak S_{n-1}$ reorders the other values. Their lengths are $n-j+1$, the inversions involving $n$; inversions among the other values are exactly those of the left factor, so lengths add. By [F3], every finite Hecke word therefore expands into $H_{r,n-1}\{D_n(j)\}$. This proves the repeated-square propagation as well: $D_n(3)s_2^2s_3\cdots s_i$ is finite for $2\le i\le n$, and expanding each square by $s_m^2=as_m+1$ leaves finite words to which the same factorization applies. The braid sweep used below is $D_n(3)s_2s_3\cdots s_j=s_2s_3\cdots s_{j-1}D_n(2)$ for $2\le j\le n$: the base is $D_n(3)s_2=D_n(2)$, and $D_n(2)s_m=s_{m-1}D_n(2)$ for $3\le m\le n$, obtained by commuting the rightmost $s_m$ past $s_{m-2},\ldots,s_2$, applying the adjacent braid, then commuting $s_{m-1}$ past $s_n,\ldots,s_{m+1}$. [F3, step 3.1, algebra]

4.2 A last-stage word in $\Lambda_n$ contains no $X$ or one factor $z^k=w^{-k}X_1^k$ with $0\le k<r$, so its total nonnegative $X$-degree is below $r$. Repeatedly apply [F2] to move polynomial factors left of Hecke generators; the divided-difference correction preserves nonnegative exponents and total degree. Thus each last-stage word becomes a sum of $X_1^{a_1}\cdots X_n^{a_n}T_y$ with $\sum a_i<r$. [F2, step 3.1]

5.1 The first three final-factor cases are as follows. For descending/descending, $s_nD_{n-1}(i)D_n(j)=D_{n-1}(j-1)D_n(i)$ if $i<j$, and $=aD_{n-1}(i)D_n(j)+D_{n-1}(j)D_n(i+1)$ if $i\ge j$: slide the leading $s_n$ through the overlapping descending string by the adjacent braid; at the common $s_i$ use $s_i^2=as_i+1$ to obtain the second branch. For descending/loop, $s_nD_{n-1}(i)D_n(2)z^k=aD_{n-1}(i)L_n(k)+L_{n-1}(k)D_n(i+1)$; in the second term commute $z^k$ left past $s_n,\ldots,s_3$. For descending/sandwich, $s_nD_{n-1}(i)S_n(k,j)=aD_{n-1}(i)S_n(k,j)+S_{n-1}(k,j)D_n(i+1)$ if $j<i$, and $=aD_{n-1}(i)S_n(k,j)+S_{n-1}(k,j-1)D_n(i)$ if $j\ge i$; after the quadratic term, move the remaining suffix $s_2\cdots s_j$ left past $D_n(i+1)$ when $j<i$, and past $D_n(i)$ stopping at $s_{j-1}$ when $j\ge i$. In the second branch $S_{n-1}(k,1)=L_{n-1}(k)$. [step 4.1, algebra]

5.2 For loop/descending, $s_nL_{n-1}(k)D_n(j)=D_{n-1}(2)S_n(k,2)$ if $j=2$, and $=D_{n-1}(j-1)L_n(k)$ if $j>2$; the first is the tail $D_n(2)z^ks_2$, and the second moves $z^k$ left past $s_n,\ldots,s_3$. For loop/loop, the $j=2$ sweep leaves $D_{n-1}(2)D_n(3)(sz^ksz^l)$; step 2.1 expands the parenthesized tail into $z^c$, $z^csz^{c'}$, and $z^csz^{c'}s$ (with $c'>0$ in the last type), giving respectively $L_{n-1}(c)D_n(3)$, $L_{n-1}(c)L_n(c')$, and $L_{n-1}(c)S_n(c',2)$ because $D_n(3)s=D_n(2)$. For loop/sandwich, append $s_2\cdots s_j$ to those three tails. The first is finite after the old prefix. The second is $D_n(2)z^{c'}s_2\cdots s_j=S_n(c',j)$ when $c'>0$, and finite when $c'=0$. In the third, expand the final $s^2$: its $a$-term is the preceding sandwich, while the other term has tail $D_n(3)sz^{c'}s_3\cdots s_j$; commute $z^{c'}$ across $s_3,\ldots,s_j$ and use step 4.1 to obtain an old-algebra prefix followed by $L_n(c')$. [step 2.1, step 4.1, algebra]

5.3 Factor $y=hD_n(j)$ length-additively with $h\in\mathfrak S_{n-1}$. Since $X_n$ commutes with $X_1,\ldots,X_{n-1}$ and $T_1,\ldots,T_{n-2}$, each term lies in $H_{r,n-1}X_n^{a_n}T_{D_n(j)}$, with $a_n<r$. Induction on $n$ therefore proves bounded PBW spanning over $R'$. [F1, F3, step 4.2, algebra]

6.1 For sandwich/descending, $s_nS_{n-1}(k,i)D_n(j)=D_{n-1}(i+1)S_n(k,i+1)$ if $j=i+1$, $=D_{n-1}(j-1)S_n(k,i)$ if $i<j-1$, and $=D_{n-1}(j)S_n(k,i+1)$ if $i\ge j$. These are obtained by moving the descending string through the ascending suffix: at each index use $s_ms_{m-1}s_m=s_{m-1}s_ms_{m-1}$ and commute letters at distance at least two; the three stopping points are respectively after $s_{i+1}$, before the suffix, and after crossing $s_i$. For sandwich/loop, the $j=2$ sweep gives $D_{n-1}(2)D_n(3)(sz^ksz^l)s_3\cdots s_{i+1}$. Expand the rank-two tail as $z^c$, $z^csz^{c'}$, $z^csz^{c'}s$. The first is finite after an old-algebra prefix. In the second, $c'=0$ leaves a finite tail; for $c'>0$, commute $z^{c'}$ through the suffix and use $D_n(3)s_2\cdots s_{i+1}=s_2\cdots s_iD_n(2)$ to obtain an old prefix times $L_n(c')$. In the third, $D_n(3)sz^{c'}s=D_n(2)z^{c'}s$, giving the old prefix times $S_n(c',i+1)$. For sandwich/sandwich, append $s_2\cdots s_j$ to the same expansion; the three terms are $D_{n-1}(2)z^cD_n(4)s_3^2s_4\cdots s_{i+1}(s_2\cdots s_j)$, $D_{n-1}(2)z^cs_2\cdots s_iD_n(2)z^{c'}(s_2\cdots s_j)$, and $D_{n-1}(2)z^cD_n(2)z^{c'}s_2\cdots s_{i+1}(s_2\cdots s_j)$. The first is finite after an old prefix. The second is an old prefix times $S_n(c',j)$ for $c'>0$, and finite for $c'=0$. In the third, for $j\le i$ the mixed braid sweep is $D_n(2)z^{c'}s_2\cdots s_{i+1}s_2\cdots s_j=(s_2\cdots s_j)D_n(2)z^{c'}s_2\cdots s_{i+1}$; for $j>i$ it is $(s_2\cdots s_{j-1})D_n(2)z^{c'}s_2\cdots s_i$. At the $s_2$ boundary use $z^d s_2 z s_2=s_2 z s_2 z^d$: it is the rank-four relation for $d=1$, and if it holds for $d$, then $z^{d+1}s_2zs_2=z^d(zs_2zs_2)=z^d(s_2zs_2z)=(z^ds_2zs_2)z=s_2zs_2z^{d+1}$. All higher crossings use the ordinary adjacent braid. Thus $c'>0$ gives an old prefix times $S_n(c',i+1)$ or $S_n(c',i)$, and $c'=0$ leaves a finite word. All nine cases land in $H_{r,n-1}\Lambda_n$, proving that $M_n$ is stable under every generator and contains $1$. [step 4.1, step 5.2, algebra]

6.2 Let $M$ be the $R$-span of the proposed PBW family and $C=H_{r,n}/M$. Right exactness identifies $R'\otimes_RC$ with the quotient of the extended algebra by that family, which is zero by step 5.3. Because $R'$ is free with basis containing $1$, $R'\otimes_RC$ contains $C$ as a direct summand; hence $C=0$. [step 1.1, step 5.3, algebra]

7.1 The preceding steps prove integral spanning, including $r=1$ and faithful-free descent. The cyclotomic relation is used only on $X_1$; higher generators enter through their actual affine transport and the explicit normal-word reductions. [step 1.1, step 2.1, step 6.1, step 4.2, step 5.3, step 6.2] ∎
