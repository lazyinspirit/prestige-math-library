---
id: lem-dj-bridge-row-permutation-module-standard-action
kind: lemma
title: "The row permutation module: distinguished basis and Hecke action"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids, def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra, def-weyl-group-and-length-for-finite-gl-n, def-young-tableau-standard-tableau-and-shape]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed p. 18 (PDF p. 24), Lemma 3.2 (m_lambda T_w = q^{ell(w)} m_lambda), Proposition 3.3 (D_lambda is a complete set of right coset representatives, and ell(wd) = ell(w) + ell(d), T_{wd} = T_w T_d for w in S_lambda, d in D_lambda), and printed p. 19 (PDF p. 25), Corollary 3.4 (M_lambda is free on {m_lambda T_{d(t)}} together with the three-case formula for m_lambda T_{d(t)} T_i, with the same-row coset case and the length-increasing/decreasing cases separated exactly as in Proof steps 3.2 and 4.1)."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the standard basis x_st = T_{d(s)^{-1}} x_lambda T_{d(t)} of H in the normalization x_lambda = sum_{w in S_lambda} T_w, and the cell-module action rules for x_t T_i, with nonstandard outputs requiring Garnir straightening; this is supporting cellular context, not a claim that (6) is a row-permutation-module theorem."
---

## Statement

In the notation of
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], for every
commutative ring $R$ and every $q\in R^\times$:

1. $M(\lambda)$ is free with basis $\{x_\lambda T_d:d\in D_\lambda\}$;

2. $x_\lambda T_w=q^{\ell(w)}x_\lambda$ and $T_wx_\lambda=q^{\ell(w)}x_\lambda$
for every $w\in S_\lambda$, and $x_\lambda^*=x_\lambda$;

3. if $d\in D_\lambda$, $t=t^\lambda\cdot d$ and $s=t\cdot s_i=t^\lambda\cdot d'$, then
$$x_\lambda T_dT_i=\begin{cases}q\,x_\lambda T_d,&s\text{ is not row standard},\\ x_\lambda T_{d'},&s\text{ is row standard and }\ell(d')>\ell(d),\\ q\,x_\lambda T_{d'}+(q-1)x_\lambda T_d,&s\text{ is row standard and }\ell(d')<\ell(d);\end{cases}$$

4. the basis and the action formulas are compatible with every base change
$R\to R'$ along a ring map sending $q$ to a unit.

No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, $n\ge0$, a partition $\lambda\vdash n$, and the Hecke algebra $H=H_{R,q}(S_n)$ with its data $x_\lambda,t^\lambda,t_\lambda,S_\lambda,D_\lambda,w_\lambda$ as in [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]].

[F1] $H$ is the base change $R\otimes_AH_v(n)$ of the generic algebra along $v\mapsto q$, the family $\{T_w:w\in S_n\}$ is an $R$-basis of $H$, and $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$, while $T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$ ([[def-generic-type-a-hecke-algebra]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] $\ell(g)=\#\{(a,b):a<b,\ g(a)>g(b)\}$ is the inversion count, and $\ell(g^{-1})=\ell(g)$ ([[def-weyl-group-and-length-for-finite-gl-n]]).

[F3] The star map is an algebra anti-automorphism with $T_w^*=T_{w^{-1}}$ ([[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]).

[F4] Tableau facts: $t^\lambda\cdot g=g^{-1}\cdot t^\lambda$, the row sets of $t^\lambda\cdot g$ are $g^{-1}(B_1),\dots,g^{-1}(B_k)$ where $B_r$ is the $r$-th row block of $t^\lambda$, and row standard means strictly increasing rows ([[def-young-tableau-standard-tableau-and-shape]], [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]).

## Proof

**Proof technique:** direct.

1.1 **Length and multiplication criteria for one generator.** Let $g\in S_n$ and $1\le i<n$. The one-line list of $gs_i$ is obtained from that of $g$ by exchanging the entries $g(i),g(i+1)$ at positions $i,i+1$, and only the relative order of this single pair changes, so $\ell(gs_i)=\ell(g)+1$ if $g(i)<g(i+1)$ and $\ell(gs_i)=\ell(g)-1$ if $g(i)>g(i+1)$. Replacing $g$ by $g^{-1}$ gives $\ell(s_ig)=\ell(g^{-1}s_i)$ equal to $\ell(g)+1$ if and only if $g^{-1}(i)<g^{-1}(i+1)$. Thus [F1] gives $T_gT_i=T_{gs_i}$ under the right ascent hypothesis $g(i)<g(i+1)$; under the left ascent hypothesis $g^{-1}(i)<g^{-1}(i+1)$, applying [F1] to $g^{-1}$ and then $*$ gives $T_iT_g=T_{s_ig}$. [F1, F2, F3, algebra]

1.2 **Order preservation inside rows.** If $d\in D_\lambda$ and $a<b$ are entries lying in the same row of $t^\lambda$, then $d^{-1}(a)<d^{-1}(b)$. Indeed the boxes of $a$ and $b$ lie in that row with the box of $a$ to the left, and $t^\lambda\cdot d=d^{-1}\cdot t^\lambda$ carries those boxes to the entries $d^{-1}(a),d^{-1}(b)$; since $t^\lambda\cdot d$ is row standard, its entries increase along the row. [F4, algebra]

1.3 **The coset representatives.** The row sets of $t^\lambda\cdot g$ are $g^{-1}(B_1),\dots,g^{-1}(B_k)$ by [F4], so $t^\lambda\cdot g$ and $t^\lambda\cdot g'$ have the same row sets if and only if $g'g^{-1}$ preserves every $B_r$, that is, if and only if $g'\in S_\lambda g$. For a given right coset $S_\lambda g$, the tableau $t^\lambda\cdot g$ has some row sets; filling each row by its entries in increasing order gives a row-standard tableau with the same row sets, and it equals $t^\lambda\cdot y$ for some $y\in S_n$ because the action of $S_n$ on tableaux is transitive. That $y$ lies in $S_\lambda g$, since it has the same row sets as $t^\lambda\cdot g$. Two row-standard tableaux with the same row sets are equal, and the action on tableaux is free, so $y$ is unique in its coset; hence $D_\lambda$ is a complete set of right coset representatives of $S_\lambda$ in $S_n$. [F4, algebra]

1.4 **The parabolic identities.** For every $w\in S_\lambda$ one has $x_\lambda T_w=q^{\ell(w)}x_\lambda$, $T_wx_\lambda=q^{\ell(w)}x_\lambda$ and $x_\lambda^*=x_\lambda$. For a generator $s_i\in S_\lambda$ split $S_\lambda$ into $A=\{u:\ell(us_i)>\ell(u)\}$ and its complement $B$; right multiplication by $s_i$ bijects $A$ onto $B$, and the multiplication rule gives $$x_\lambda T_i=\sum_{u\in A}T_{us_i}+\sum_{u\in B}\bigl((q-1)T_u+qT_{us_i}\bigr)=\sum_{v\in B}T_v+(q-1)\sum_{u\in B}T_u+q\sum_{v\in A}T_v=q\,x_\lambda.$$ Since every product $us_i$ with $u\in S_\lambda$ lies in $S_\lambda$, induction on $\ell(w)=\ell(vs_i)=\ell(v)+1$ gives $x_\lambda T_w=(x_\lambda T_v)T_i=q^{\ell(v)}q\,x_\lambda=q^{\ell(w)}x_\lambda$. The star map sends each $T_w$ to $T_{w^{-1}}$ and permutes the sum $x_\lambda$, so $x_\lambda^*=x_\lambda$; then $(T_wx_\lambda)^*=x_\lambda T_{w^{-1}}=q^{\ell(w^{-1})}x_\lambda=q^{\ell(w)}x_\lambda$ by [F2], and applying $*$ again gives $T_wx_\lambda=q^{\ell(w)}x_\lambda$. [F1, F2, F3, algebra]

2.1 **Length additivity and multiplicativity.** For $w\in S_\lambda$ and $d\in D_\lambda$ one has $\ell(wd)=\ell(w)+\ell(d)$ and $T_wT_d=T_{wd}$. Prove this by induction on $\ell(w)$. For $w=1$ both claims are immediate. For $\ell(w)\ge1$ write $w=s_iv$ with $s_i\in S_\lambda$ a simple reflection of $S_\lambda$ and $\ell(w)=1+\ell(v)$; then $\ell(s_iv)=\ell(v)+1$, so $v^{-1}(i)<v^{-1}(i+1)$ by step 1.1. Because $s_i\in S_\lambda$, the labels $i,i+1$ lie in one row block $B_r$, and $v^{-1}\in S_\lambda$ preserves every row block, so $v^{-1}(i)$ and $v^{-1}(i+1)$ lie in the same row of $t^\lambda$; step 1.2 then gives $(vd)^{-1}(i)=d^{-1}(v^{-1}(i))<d^{-1}(v^{-1}(i+1))=(vd)^{-1}(i+1)$, whence $\ell(s_ivd)=\ell(vd)+1$ by step 1.1. The induction hypothesis gives $\ell(vd)=\ell(v)+\ell(d)$, so $\ell(wd)=\ell(s_ivd)=\ell(v)+1+\ell(d)=\ell(w)+\ell(d)$. For the basis elements, step 1.1 gives $T_{s_i}T_{vd}=T_{s_ivd}$ since $\ell(s_ivd)=\ell(vd)+1$, so $T_wT_d=T_{s_i}(T_vT_d)=T_{s_i}T_{vd}=T_{wd}$ using the induction hypothesis $T_vT_d=T_{vd}$. [step 1.1, step 1.2, F1, algebra]

2.2 **The shape of the three cases.** Let $d\in D_\lambda$, $t=t^\lambda\cdot d$, $s=t\cdot s_i=s_i\cdot t=t^\lambda\cdot(ds_i)$. First, $s$ is row standard if and only if $i$ and $i+1$ lie in different rows of $t$: if they lie in the same row then $i$ is left of $i+1$ and the swap creates a descent in that row, while if they lie in different rows then each affected row keeps the same two neighbours of the moved entry, the left neighbour smaller than $i$ and the right neighbour larger than $i+1$, so both inequalities persist. Second, the position of a label $j$ in the row-reading word of $t$ equals $d(j)$, because $t=d^{-1}\cdot t^\lambda$; so by step 1.1, $\ell(ds_i)=\ell(d)+1$ holds exactly when $i$ precedes $i+1$ in $t$, and this happens in particular when $i$ and $i+1$ lie in the same row. [step 1.1, F4, algebra]

3.1 **The basis.** For $d\in D_\lambda$, step 2.1 gives $x_\lambda T_d=\sum_{w\in S_\lambda}T_wT_d=\sum_{w\in S_\lambda}T_{wd}$, whose support in the standard basis is exactly the right coset $S_\lambda d$ with coefficient $1$ at every element. By step 1.3 the cosets $S_\lambda d$, $d\in D_\lambda$, are pairwise disjoint and partition $S_n$, so the supports of the $x_\lambda T_d$ are disjoint; since the $T_w$ are $R$-linearly independent by [F1], the family $\{x_\lambda T_d:d\in D_\lambda\}$ is linearly independent. For an arbitrary $g\in S_n$, step 1.3 lets us write $g=wd$ with $w\in S_\lambda$, $d\in D_\lambda$, and then $x_\lambda T_g=x_\lambda T_wT_d=q^{\ell(w)}x_\lambda T_d$ by steps 2.1 and 1.4; since the $T_g$ span $H$ by [F1], the family spans the right ideal $M(\lambda)=x_\lambda H$. Hence it is a basis and $M(\lambda)$ is free, which is clause (1). [step 1.3, step 1.4, step 2.1, F1]

3.2 **Case of one row.** Suppose $i$ and $i+1$ lie in the same row of $t$. Then $s$ has the same row sets as $t$, so $ds_i$ and $d$ lie in the same right coset of $S_\lambda$ by step 1.3, say $ds_i=wd$ with $w\in S_\lambda$. By steps 2.1 and 2.2, $\ell(d)+1=\ell(ds_i)=\ell(wd)=\ell(w)+\ell(d)$, so $\ell(w)=1$. The multiplication rule [F1] and step 2.2 give $x_\lambda T_dT_i=x_\lambda T_{ds_i}=x_\lambda T_{wd}=x_\lambda T_wT_d=q^{\ell(w)}x_\lambda T_d=q\,x_\lambda T_d$, using step 1.4. This is the first displayed case. [F1, step 1.3, step 1.4, step 2.1, step 2.2]

4.1 **Case of two rows.** Suppose $i$ and $i+1$ lie in different rows of $t$. Then $s$ is row standard by step 2.2, so $d':=ds_i$ lies in $D_\lambda$ and $t^\lambda\cdot d'=s$; this is the element $d'$ of the statement. The multiplication rule [F1] gives $x_\lambda T_dT_i=x_\lambda T_{d'}$ if $\ell(d')=\ell(d)+1$, and $x_\lambda T_dT_i=(q-1)x_\lambda T_d+q\,x_\lambda T_{d'}$ if $\ell(d')=\ell(d)-1$. These are the second and third displayed cases, and together with step 3.2 they prove clause (3). [F1, step 2.2, step 3.2]

4.2 **Base change.** All constructions above are defined over an arbitrary commutative $R$ with $q\in R^\times$ by the formulas of [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], and every identity was obtained from the presentation and from inversion counts, so its coefficients are Laurent polynomials in $q$ with integer coefficients. Given a ring map $R\to R'$ with $q\mapsto q'\in(R')^\times$, the base change sends $H_{R,q}(S_n)$ to $H_{R',q'}(S_n)$ and the elements $T_w$, $x_\lambda$ to their images $T'_w$, $x'_\lambda$; the basis $\{x_\lambda T_d\}$ maps to the corresponding basis, and the formulas of steps 1.4, 2.1 and 3.1 specialize termwise, so clause (4) follows. [step 1.4, step 2.1, step 3.1, F1, algebra]

5.1 Clauses (1), (2), (3) and (4) are established by steps 3.1, 1.4, 3.2, 4.1 and 4.2. Only inversion counts, the presentation of $H$, the structure of the row groups and the standard basis are used; no choice principle is used. [step 1.4, step 3.1, step 3.2, step 4.1, step 4.2] ∎
