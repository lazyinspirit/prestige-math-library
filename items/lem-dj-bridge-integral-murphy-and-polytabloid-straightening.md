---
id: lem-dj-bridge-integral-murphy-and-polytabloid-straightening
kind: lemma
title: "Integral polytabloid straightening for the comparison"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids,
       lem-dj-bridge-row-permutation-module-standard-action,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form,
       lem-dj-bridge-parabolic-double-coset-annihilation, def-dominance-order-on-partitions,
       lem-conjugation-reverses-dominance, cor-sum-of-squares-of-standard-tableau-numbers,
       def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-26 (PDF pp. 24-32): Corollary 3.4 (row module and its distinguished basis), Lemma 3.9 and Lemmas 3.12-3.14 with Corollary 3.15 (standard tableaux, Garnir reduction, first-index stability), Proposition 3.16 and Corollary 3.17 (dominance ideals) and Theorem 3.18 (Murphy basis and cell form). The proof below reconstructs these steps from the local presentation and the local double-coset lemma; it uses no unread source."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the standard elements x_st = T_{d(s)^{-1}}x_lambda T_{d(t)} of H, their action rules and the cell form whose normalization is used in the Gram formula."
    - title: "R. Dipper, G. D. James, Representations of Hecke algebras of general linear groups, Proc. London Math. Soc. (3) 52 (1986) 20-52, DOI 10.1112/plms/s3-52.1.20"
      url: "https://doi.org/10.1112/plms/s3-52.1.20"
      locator: "Historical origin of the integral polytabloid basis and of the q-Garnir relations; the article itself was not accessible (Wiley 403 on article and PDF endpoints, recorded in the batch-50 coverage), so nothing below rests on its text."
---

## Statement

Let $R$ be a commutative ring, let $q\in R^\times$, let $\lambda\vdash n$
with conjugate $\mu=\lambda'$, and let $H$, $M(\lambda)=x_\lambda H$,
$P(\lambda)=z_\lambda H$ with $z_\lambda=x_\lambda T_{w_\lambda}y_\mu$, the
permutation form $\beta$ and the DJ form $\beta_{P(\lambda)}$ be as in
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]. Write
$b_r:=x_\lambda T_{d_\lambda(r)}$ for the row-standard $\lambda$-tableaux $r$
(the distinguished basis of $M(\lambda)$) and
$$e_t:=z_\lambda T_{d_\mu(t)}\in P(\lambda)\qquad(t\in\operatorname{Std}(\mu)).$$
For row-standard $\lambda$-tableaux $u,v$ write $u\le v$ when for all
$m,k\ge1$ the first $k$ rows of $u$ contain at most as many labels $\le m$ as
the first $k$ rows of $v$, and let $t'$ be the transpose of $t$, a standard
$\lambda$-tableau. Then:

1. $\{e_t:t\in\operatorname{Std}(\mu)\}$ is an $R$-basis of $P(\lambda)$, so
   $P(\lambda)$ is free of rank $f^\lambda=|\operatorname{Std}(\lambda)|$, and
   the inclusion $P(\lambda)\subseteq M(\lambda)$ splits as a map of
   $R$-modules.

2. For every $t\in\operatorname{Std}(\mu)$ one has, with coefficients
   $a_{r,t}\in R$,
   $$e_t=q^{\ell(d_\mu(t))}\,b_{t'}+\sum_{r<t'}a_{r,t}\,b_r,$$
   where the sum runs over the row-standard $r$ with $r\le t'$, $r\ne t'$; the
   square minor with rows $\{t':t\in\operatorname{Std}(\mu)\}$ is therefore
   triangular with respect to any linear extension of the order $\le$ on
   $\operatorname{Std}(\lambda)$, with diagonal entries
   $q^{\ell(d_\mu(t))}$, all units of $R$.

3. The Gram matrix of the DJ form in the basis $\{e_t\}$ is
   $$B_{tu}=\sum_{r}a_{r,t}a_{r,u}q^{\ell(d_\lambda(r))}\qquad(t,u\in\operatorname{Std}(\mu)),$$
   where $a_{r,t}$ denotes the full coefficient of $b_r$ in $e_t$: it is $q^{\ell(d_\mu(t))}$ for $r=t'$, the displayed lower coefficient for $r<t'$, and zero otherwise. Unit triangularity is a property of the
   embedding, not of the Gram matrix: $\beta_{P(\lambda)}$ may be degenerate.

4. Let $(i,j)$ be a Garnir node of $\mu$, that is, a node of $\mu$ with
   $j\le\mu_{i+1}$, put
   $\alpha=(\mu_1,\dots,\mu_{i-1},j-1,\mu_i+1,\mu_{i+1}-j,\mu_{i+2},\dots)$
   with zero parts deleted and $D:=S_\alpha\cap D_\mu$, and let
   $\theta(T_d)\in H$ be the product of the elements
   $\theta(T_r)=(q-1)-T_r$ over a reduced word of $d$
   ([[lem-dj-bridge-sign-automorphism-and-star-dual]]). Then
   $$z_\lambda\sum_{d\in D}\theta(T_d)=0\qquad\text{in }P(\lambda).$$
   The coefficients are determined by the finite coset identity of step 2.2 and
   survive every base change; together with the unit minor of clause 2 these
   relations give a finite straightening of the elements $z_\lambda T_w$ to
   the standard basis $\{e_t\}$.

5. Every clause is compatible with the base change
   $A=\mathbb Z[v^{\pm1}]\to R$, $v\mapsto q$, with $q\in R^\times$. The proof
   uses no generic semisimplicity, divides by no quantum factorial and uses no
   choice principle.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, $n\ge0$, a partition $\lambda\vdash n$ with conjugate $\mu=\lambda'$, the Hecke algebra $H=H_{R,q}(S_n)$ with standard basis $\{T_w\}$, star anti-involution $T_w^*=T_{w^{-1}}$, the elements $x_\lambda,y_\mu,z_\lambda$, the modules $M(\lambda)=x_\lambda H\supseteq P(\lambda)=z_\lambda H$, the distinguished basis $\{b_r\}$, the row groups $S_\lambda,S_\mu$, the sets $D_\lambda$, $D_\mu$ and the elements $d_\lambda(r),d_\mu(t)$, the permutation form $\beta$ and the dominance order $\unrhd$.

[F1] Multiplication rules and standard basis: $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$, $T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$, with the mirror rule on the left; $\{T_w\}$ is an $R$-basis ([[def-generic-type-a-hecke-algebra]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] Row modules: $M(\lambda)$ is free on $\{b_r\}$, $x_\lambda T_w=q^{\ell(w)}x_\lambda$ for $w\in S_\lambda$, the three-case action rule holds, and all of this is base-change compatible ([[lem-dj-bridge-row-permutation-module-standard-action]]).

[F3] Sign automorphism: $\theta(T_i)=(q-1)-T_i$ defines an involutive $R$-algebra automorphism $\theta$ with $\theta(T_w)=(-q)^{\ell(w)}T_{w^{-1}}^{-1}$ that commutes with $*$, satisfies $\theta(x_\rho)=q^{\ell(w_0(S_\rho))}y_\rho$ for every partition $\rho$, and is base-change compatible ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F4] Murphy theory: the elements $m^\rho_{st}=T_{d_\rho(s)}^*x_\rho T_{d_\rho(t)}$, $s,t\in\operatorname{Std}(\rho)$, form the Murphy basis of $H$, the spans $I^{\rhd\rho}$ and $I^{\unrhd\rho}$ of the basis elements of shapes $\rhd\rho$ respectively $\unrhd\rho$ are two-sided ideals, $C_{\mathrm M}(\rho)=M(\rho)/(M(\rho)\cap I^{\rhd\rho})$ is free with basis $m_t=x_\rho T_{d_\rho(t)}+I^{\rhd\rho}$ and $M(\rho)\cap I^{\rhd\rho}$ is the kernel of $M(\rho)\to C_{\mathrm M}(\rho)$; $f^\rho$ denotes $|\operatorname{Std}(\rho)|$ and $\sum_\rho(f^\rho)^2=n!$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], [[cor-sum-of-squares-of-standard-tableau-numbers]]). The same item also proves the exact Garnir belt identity $x_\rho\sum_{d\in D}T_d=\sum_{v\in E}T_v^*x_\alpha$ for a Garnir node of a partition $\rho$, the composition $\alpha$ of its belt, $D=S_\alpha\cap D_\rho$ and $E=S_\rho\cap D_\alpha$, together with the composition-to-partition reduction $x_\alpha=T_dx_\beta T_d^{-1}$ for a rearrangement $\beta$ of the parts of a composition $\alpha$.

[F5] Opposite-dominance annihilation: if $\sum_{i\le k}\kappa_i>\sum_{i\le k}\rho'_i$ for some $k\ge1$, then $x_\kappa Hy_\rho=0$ ([[lem-dj-bridge-parabolic-double-coset-annihilation]]).

[F6] Dominance: transposition reverses the dominance order, and the identity $\sum_{i\le k}\rho'_i=\sum_j\min(k,\rho_j)$ determines the conjugate prefix sums ([[def-dominance-order-on-partitions]], [[lem-conjugation-reverses-dominance]]).

[F7] Base change: the generic algebra $H_v(n)$ over $A=\mathbb Z[v^{\pm1}]$ specializes to $H=H_{R,q}(S_n)$ along $v\mapsto q$, and every formula with coefficients in $A$ specializes ([[def-generic-type-a-hecke-algebra]]).



## Proof

**Proof technique:** direct.

1.1 **The order on row-standard tableaux.** For an $\alpha$-tableau $u$ and integers $m\ge0$, $k\ge1$ put $c_{m,k}(u):=\#\{x\in B_1\cup\cdots\cup B_k:u(x)\le m\}$, where $B_1,B_2,\dots$ are the row blocks of the shape, and write $u\le v$ when $c_{m,k}(u)\le c_{m,k}(v)$ for all $m,k$. Swapping the labels $i$ and $i+1$ changes only the counts at $m=i$, and $c_{i,k}(u\cdot s_i)=c_{i-1,k}(u)+[\,i+1$ lies in the first $k$ blocks of $u\,]$, because the label $i$ is replaced by $i+1$ and every other label $\le i$ stays put. Hence for row-standard $u,v$ the relations $u\le v$ and $v\le u$ hold simultaneously only when $u=v$: the numbers $c_{m,k}$ record the multiset of labels in each row block, and a row-standard tableau is its row multisets sorted increasingly. Moreover, interchanging consecutive labels $i,i+1$ in incomparable cells of a standard tableau preserves standardness: every other label is either smaller than both or larger than both, so inequalities with neighbouring cells persist, and the swapped cells impose no inequality on each other. [F2, algebra]

1.2 **Ascending standard chains and their local shape.** Let $t\in\operatorname{Std}(\mu)$, $t\ne t^\mu$, and put $d:=d_\mu(t)\ne1$. Since $d$ is not the identity there is an index $i$ with $d(i)>d(i+1)$; such an index is a right descent, so $\ell(ds_i)=\ell(d)-1$. In the row-reading word of $t$ the value $i$ occurs at position $d(i)$ and the value $i+1$ at the earlier position $d(i+1)$. The two cells are incomparable: the cell of $i+1$ is not northwest of the cell of $i$, since in a standard tableau a northwest cell carries the smaller value, and it is not southeast either, since a southeast cell is later in row-reading order. Therefore $t\cdot s_i$ is standard and $d_\mu(t\cdot s_i)=ds_i$. Iterating gives a descending chain from $t$ to $t^\mu$ in which each step is a standard adjacent swap of incomparable cells and decreases $\ell(d_\mu(\cdot))$ by one; reversing it gives an ascending chain $t_0=t^\mu,t_1,\dots,t_r=t$ of standard $\mu$-tableaux with $t_{j+1}=t_j\cdot s_{i_j}$ and $\ell(d_\mu(t_{j+1}))=\ell(d_\mu(t_j))+1$. In such a step the value $i:=i_j$ precedes the value $i+1$ in the row-reading order of $t_j$, so the two cells are distinct and lie in different rows, with the row of $i$ strictly above the row of $i+1$; the cell of $i$ also lies in a strictly later column than the cell of $i+1$, since otherwise the cell in the row of $i$ and the column of $i+1$ would carry an integer strictly between $i$ and $i+1$. Transposing, the standard $\lambda$-tableaux $s_j:=t_j'$ satisfy $s_{j+1}=s_j\cdot s_i$, the value $i$ lies in a row strictly below the row of $i+1$ in $s_j$, and $\ell(d_\lambda(s_j)s_i)=\ell(d_\lambda(s_j))-1$. [F1, F2, algebra]

1.3 **Base case of the triangular expansion.** Let $u\in S_\mu$. The group $S_\mu$ permutes the intervals $B_j=\{\lambda'_1+\cdots+\lambda'_{j-1}+1,\dots,\lambda'_1+\cdots+\lambda'_j\}$, and these are exactly the label sets of the columns of $t_\lambda$; they are intervals, increasing in $j$. Hence row $i$ of $t_\lambda\cdot u$ carries the entries $u^{-1}(t_\lambda(i,j))$ for $j\le\lambda_i$, and these increase with $j$ because $u^{-1}(t_\lambda(i,j))$ lies in $B_j$ and every element of $B_j$ is smaller than every element of $B_{j+1}$. The permutation $w_\lambda$ is increasing on each $\mu$-block: its values are the row-reading positions of the entries in a column of $t_\lambda$, and these increase down that column. Thus $w_\lambda^{-1}\in D_\mu$; applying the row-module length-additivity proof to $u^{-1}w_\lambda^{-1}$ and then taking inverses yields $\ell(w_\lambda u)=\ell(w_\lambda)+\ell(u)$ and $T_{w_\lambda}T_u=T_{w_\lambda u}$. Thus $w_\lambda u\in D_\lambda$ and $x_\lambda T_{w_\lambda u}=b_{r_u}$ with $r_u:=t_\lambda\cdot u$, so that $z_\lambda=\sum_{u\in S_\mu}(-q)^{-\ell(u)}b_{r_u}$. For fixed $m,k$, the first $k$ cells of column $j$ of $r_u$ carry $u^{-1}$ of the first $\min(k,\lambda'_j)$ labels of $B_j$, an arbitrary subset of that size, and the number of labels $\le m$ in such a subset is at most $\min(\min(k,\lambda'_j),t_j)$ with $t_j:=\#\{x\in B_j:x\le m\}$; this bound is exactly the number of labels $\le m$ in the first $\min(k,\lambda'_j)$ cells of column $j$ of $t_\lambda$. Summing over $j$ gives $r_u\le t_\lambda$. If $r_u=t_\lambda$ then $u^{-1}$ fixes every label in every column of $t_\lambda$, so $u=1$; therefore $r_u<t_\lambda$ for $u\ne1$, and the coefficient of $b_{t_\lambda}$ in $z_\lambda$ is $(-q)^0=1$. Since $t_\lambda=(t^\mu)'$ and $d_\mu(t^\mu)=1$, this proves clause 2 for $t=t^\mu$. [F2, algebra]

1.4 **The signed-quotient surjection.** Put $K:=M(\mu)\cap I^{\rhd\mu}$, so that $C_{\mathrm M}(\mu)=M(\mu)/K$ by [F4]. Since $\theta$ is an automorphism, $\theta(I^{\rhd\mu})$ is a two-sided ideal, and the assignment $m+K\mapsto\theta(m)+\theta(I^{\rhd\mu})$ is a bijection from $C_{\mathrm M}(\mu)^\theta$ onto $\theta(M(\mu))/\theta(K)$; it is $H$-linear because $\theta(m\theta(h))=\theta(m)h$ for $m\in M(\mu)$, $h\in H$ by [F3]. On $\theta(M(\mu))$ consider the $H$-linear map $g\mapsto q^{-N}x_\lambda T_{w_\lambda}g$, where $N:=\ell(w_0(S_\mu))$ and $\theta(x_\mu)=q^Ny_\mu$ by [F3]. It kills $\theta(K)$: an element of $I^{\rhd\mu}$ is by [F4] a combination of Murphy elements $m^\nu_{uv}$ with $\nu\rhd\mu$, and $\theta(m^\nu_{uv})=q^{\ell(w_0(S_\nu))}\theta(T_{d(u)})^*y_\nu\theta(T_{d(v)})$ lies in $Hy_\nu H$, so the image under $g\mapsto x_\lambda T_{w_\lambda}g$ lies in $x_\lambda Hy_\nu H$, which vanishes by [F5] because $\nu\rhd\mu=\lambda'$ gives $\lambda\rhd\nu'$ by [F6]. Hence there is a well-defined $H$-linear map $F\colon C_{\mathrm M}(\mu)^\theta\to P(\lambda)$, $F(m):=q^{-N}x_\lambda T_{w_\lambda}\theta(m)$, and $F$ is surjective because $F(m_0)=q^{-N}x_\lambda T_{w_\lambda}\theta(x_\mu) =x_\lambda T_{w_\lambda}y_\mu=z_\lambda$ generates $P(\lambda)$. In particular $F(m_t)=z_\lambda\theta(T_{d_\mu(t)})$ for the basis classes $m_t$ of [F4]. [F3, F4, F5, F6, algebra]

2.1 **Induction step.** Assume clause 2 for an element $t_j$ of an ascending chain as in step 1.2, and let $t_{j+1}=t_j\cdot s_i$, with $s_{j+1}=s_j\cdot s_i$, be the next step. Then $\ell(d_\mu(t_{j+1}))=\ell(d_\mu(t_j))+1$ and $\ell(d_\lambda(s_{j+1}))=\ell(d_\lambda(s_j))-1$ by step 1.2, and $d_\mu(t_{j+1})=d_\mu(t_j)s_i$ by step 1.2. Hence $e_{t_{j+1}}=z_\lambda T_{d_\mu(t_{j+1})}=e_{t_j}T_i$, and the three-case rule of [F2] gives $b_{s_j}T_i=q\,b_{s_{j+1}}+(q-1)b_{s_j}$ because $s_{j+1}$ is row standard with the smaller distinguished length. Writing $e_{t_j}=q^{\ell(d_\mu(t_j))}b_{s_j}+\sum_{r<s_j}a_{r,t_j}b_r$, one gets $e_{t_{j+1}}=q^{\ell(d_\mu(t_{j+1}))}b_{s_{j+1}}+(q-1)q^{\ell(d_\mu(t_j))}b_{s_j}+\sum_{r<s_j}a_{r,t_j}b_rT_i$. It remains to see that every basis element $b_w$ occurring in $b_rT_i$ for $r<s_j$ satisfies $w<s_{j+1}$. For $m\ne i$ the counts are unchanged by the swap and $c_{m,k}(s_{j+1})=c_{m,k}(s_j)$, so $r\le s_j$ gives $c_{m,k}(w)\le c_{m,k}(s_{j+1})$ for both possible images $w=r$ and $w=r\cdot s_i$. For $m=i$, let $a$ and $b<a$ be the rows of $i$ and of $i+1$ in $s_j$; then $c_{i,k}(s_j)=c_{i-1,k}(s_j)+[k\ge a]$ and $c_{i,k}(s_{j+1})=c_{i-1,k}(s_j)+[k\ge b]$, so the unswapped image satisfies $c_{i,k}(r)\le c_{i,k}(s_j)\le c_{i,k}(s_{j+1})$. The swapped image satisfies $c_{i,k}(r\cdot s_i)=c_{i-1,k}(r)+[\,i+1$ lies in the first $k$ rows of $r\,]\le c_{i-1,k}(r)+1\le c_{i-1,k}(s_j)+1=c_{i,k}(s_{j+1})$ for $k\ge a$; for $b\le k<a$ one has $c_{i+1,k}(s_j)=c_{i-1,k}(s_j)+1=c_{i,k}(s_{j+1})$, and for $k<b$ one has $c_{i+1,k}(s_j)=c_{i-1,k}(s_j)=c_{i,k}(s_{j+1})$, so in both cases $c_{i,k}(r\cdot s_i)\le c_{i+1,k}(r)\le c_{i+1,k}(s_j)=c_{i,k}(s_{j+1})$, using $c_{i,k}(r\cdot s_i)=c_{i-1,k}(r)+[\,i+1\in r\,]\le c_{i-1,k}(r)+[\,i\in r\,]+[\,i+1\in r\,]=c_{i+1,k}(r)$. Finally $s_j\le s_{j+1}$ and $s_j\ne s_{j+1}$ by the two displayed formulas for $c_{i,k}$, so no unswapped lower term equals $b_{s_{j+1}}$; and a swapped source with $r\cdot s_i=s_{j+1}$ would satisfy $r=s_{j+1}\cdot s_i=s_j$, which is excluded. Hence all terms of the last sum lie strictly below $s_{j+1}$, proving clause 2 for $t_{j+1}$ and, by induction along the chain, for every $t\in\operatorname{Std}(\mu)$. [step 1.2, step 1.3, F2, algebra]

2.2 **Garnir relations.** Let $(i,j)$ be a Garnir node of $\mu$, with the composition $\alpha$, the sets $D=S_\alpha\cap D_\mu$ and $E=S_\mu\cap D_\alpha$ as in clause 4. For this composition put $y_\alpha:=\sum_{u\in S_\alpha}(-q)^{-\ell(u)}T_u$ and $N_\alpha:=\sum_r\alpha_r(\alpha_r-1)/2=\ell(w_0(S_\alpha))$. The consecutive-block proof of [F3] applies here: pairing $u,s_ru$ gives $T_rx_\alpha=qx_\alpha$, and the common $-1$ eigenspace in the parabolic algebra is $Ry_\alpha$ by the recurrence $a_{s_ru}=-q^{-1}a_u$ for length-increasing products. Comparing the coefficient of the unique longest element gives $\theta(x_\alpha)=q^{N_\alpha}y_\alpha$. By [F4] the exact belt identity $x_\mu\sum_{d\in D}T_d=\sum_{v\in E}T_v^*x_\alpha$ holds. Applying $\theta$ to it and using $\theta(T_v^*)=\theta(T_v)^*$ gives $\theta(x_\mu)\sum_{d\in D}\theta(T_d)=\sum_{v\in E}\theta(T_v)^*\theta(x_\alpha)$; multiplying by $x_\lambda T_{w_\lambda}$ and using $\theta(x_\mu)=q^Ny_\mu$, $\theta(x_\alpha)=q^{N_\alpha}y_\alpha$ yields $z_\lambda\sum_{d\in D}\theta(T_d)=q^{-N+N_\alpha}x_\lambda T_{w_\lambda}(\sum_{v\in E}\theta(T_v)^*)y_\alpha$. Let $\nu$ be the partition obtained by sorting the parts of $\alpha$. By [F4] the composition-to-partition reduction writes $x_\alpha=T_dx_\nu T_d^{-1}$ for a suitable $d$, hence $y_\alpha=\theta(T_d)y_\nu\theta(T_d)^{-1}$, since sorting parts preserves $N_\alpha=N_\nu$; the right side therefore lies in $x_\lambda Hy_\nu H$. The partition $\mu$ does not dominate $\nu$: the $i$ largest parts of the multiset of $\alpha$ have sum at least $\mu_1+\cdots+\mu_{i-1}+(\mu_i+1)>\mu_1+\cdots+\mu_i$, because $\mu_1,\dots,\mu_{i-1}$ and the part $\mu_i+1$ all belong to that multiset. By [F6] transposition reverses dominance, so $\nu'$ does not dominate $\mu'$, that is, $\sum_{t\le k}\nu'_t<\sum_{t\le k}\mu'_t$ for some $k$; with $\kappa=\mu'=\lambda$ and $\rho=\nu$ this is the hypothesis of [F5], so $x_\lambda Hy_\nu=0$ and the displayed left-hand side vanishes. This proves clause 4; since every coefficient in the belt identity and in $\theta$ lies in $\mathbb Z[q^{\pm1}]$, the relations specialize to every base ring. [step 1.4, F3, F4, F5, F6, algebra]

3.1 **The unit minor and the splitting.** By clause 2, the coefficient of $b_{t'}$ in $e_u$ equals $q^{\ell(d_\mu(u))}$ for $t=u$ and vanishes unless $t'\le u'$. Choose a linear extension of the order $\le$ restricted to $\operatorname{Std}(\lambda)=\{t':t\in\operatorname{Std}(\mu)\}$ and order both sides of the square matrix $C$ with entries $C_{t,u}:=[$coefficient of $b_{t'}$ in $e_u]$ by it. Then $C$ is triangular with diagonal entries $q^{\ell(d_\mu(u))}\in R^\times$, so $C$ is invertible and $\{e_t:t\in\operatorname{Std}(\mu)\}$ is $R$-linearly independent. Define $\pi\colon M(\lambda)\to E:=\sum_tRe_t$ by reading the coordinates of a vector in the basis $\{b_r\}$ at the rows $t'$, applying $C^{-1}$ and forming the corresponding combination of the $e_t$. Then $\pi$ is $R$-linear, $\pi|_{E}=\mathrm{id}_E$ since the $t'$-coordinates of $e_u$ are the $u$-th column of $C$, and the image of $\pi$ is $E$; hence $E$ is free of rank $f^\lambda=|\operatorname{Std}(\lambda)|$ and a direct summand of $M(\lambda)$. [step 1.2, step 2.1, F2, algebra]

4.1 **Spanning.** The composite $\pi F\colon C_{\mathrm M}(\mu)^\theta\to E$ is surjective: $F$ maps onto $P(\lambda)$, and $\pi$ maps $P(\lambda)$ onto $E$, because $E\subseteq P(\lambda)$ by $e_t=z_\lambda T_{d_\mu(t)}$ and $\pi$ fixes $E$ while its image lies in $E$. Both $C_{\mathrm M}(\mu)^\theta$ and $E$ are free of rank $f^\mu=f^\lambda$ by [F4] and step 3.1. Choose preimages under $\pi F$ of the finitely many basis vectors of $E$; their coordinate columns form a right inverse of the square matrix of $\pi F$, so the determinant of that matrix is a unit of $R$ and $\pi F$ is an isomorphism. If $p\in P(\lambda)$ and $\pi(p)=0$, choose $u$ with $F(u)=p$; then $\pi F(u)=0$ gives $u=0$ and $p=0$. For arbitrary $p\in P(\lambda)$ the difference $p-\pi(p)$ lies in $P(\lambda)$ and is killed by $\pi$, so it vanishes and $p=\pi(p)\in E$. Therefore $P(\lambda)=E$: the family $\{e_t\}$ is an $R$-basis of $P(\lambda)$, the module $P(\lambda)$ is free of rank $f^\lambda$, and it is a split direct summand of $M(\lambda)$ by step 3.1. This is clause 1. [step 3.1, step 1.4, F4, algebra]

5.1 **Finite straightening.** Expand $z_\lambda T_w$ in the distinguished row basis by the finite standard-basis multiplication rules. Read its coordinates at the standard rows $t'$ and apply the inverse unit-triangular matrix $C^{-1}$ of step 3.1. The resulting coordinates give its unique expansion in $\{e_t\}$, since step 4.1 proves $P(\lambda)=E$ and $\pi|_P=\mathrm{id}_P$. All operations use Laurent-polynomial coefficients; the inverse of $C$ is obtained by finite triangular substitution. The signed Garnir identities of step 2.2 hold for this expansion as well. Thus clause 4 supplies valid relations and the unit minor supplies an exact finite straightening, without requiring an additional unproved signed-belt induction. [F1, F2, step 3.1, step 4.1, step 2.2, algebra]

6.1 **The DJ form, base change and degenerate cases.** For $t,u$ one has $B_{tu}=\beta(e_t,e_u)=\sum_r a_{r,t}a_{r,u}q^{\ell(d_\lambda(r))}$ by clause 2 and the defining diagonal values of $\beta$, which is clause 3; no claim of invertibility of $B$ is made, and $\beta_{P(\lambda)}$ may well be degenerate. For $\lambda=\varnothing$ and $n=0$ one has $\mu=\varnothing$, $z_\lambda=1$, $\operatorname{Std}(\mu)=\{\varnothing\}$ and clause 2 reads $e_\varnothing=b_\varnothing$; for $n=1$ the two shapes are the single node with $z_\lambda=1$. All constructions above use only the presentation [F1], the row-module rules [F2], the automorphism $\theta$ [F3], the Murphy theory [F4], the vanishing [F5] and the dominance facts [F6], whose coefficients lie in $\mathbb Z[q^{\pm1}]$; the determinant argument of step 4.1 inverts a square matrix whose entries are Laurent polynomials and whose determinant is a unit, so its inverse has entries in $\mathbb Z[q^{\pm1}]$, and every identity specializes along $v\mapsto q$ by [F7]. This is clause 5; no generic semisimplicity, no division by a quantum factorial and no choice principle are used. [step 3.1, step 4.1, step 2.2, F1, F2, F3, F4, F5, F6, F7] ∎
