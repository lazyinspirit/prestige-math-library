---
id: lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars
kind: lemma
title: "Standard bases, right actions and bar involutions on the parabolic Hecke modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-parabolic-hecke-module-and-antispherical-standard-basis,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution,
       lem-the-hecke-bar-involution-is-well-defined,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       thm-cg-parabolic-intersections-and-coset-factorization,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       def-cg-parabolic-quotient-and-two-sided-minima,
       def-finite-symmetric-group-and-permutation-notation,
       def-inversions-inversion-number-and-sign,
       lem-bruhat-order-basic-properties-for-permutations,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra]
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
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Sections 2.4-2.6 (printed pp. 6-8): the standard bases of the spherical and anti-spherical modules, the right action formulas (2.5)-(2.6), the parabolic property (2.3) and the bar compatibility (2.7) with Theorem 2.2; complete sections read."
    - title: "Volodymyr Mazorchuk and Catharina Stroppel, Translation and shuffling of projectively presentable modules and a categorification of a parabolic Hecke module, Trans. Amer. Math. Soc. 357 (2005) 2939-2973 (author-hosted published version)"
      url: "http://www.math.uni-bonn.de/people/stroppel/Shuffling.pdf"
      locator: "Section 7.2, Lemma 7.5 (printed p. 2965): the standard basis M_x=1 (x) H_x over the distinguished minimal-length representatives and the right action of C_s=H_s+v; complete passage read."
---

## Statement

Retain the notation of
[[def-parabolic-hecke-module-and-antispherical-standard-basis]] and put
$m_x:=1\otimes H_x$, $n_x:=1\otimes H_x$ for $x\in{}^JW$, and
$C_s:=\underline H_s=H_s+v$ for $s\in S$. Then:

**(1) (Bases.)** The sets $\{m_x:x\in{}^JW\}$ and $\{n_x:x\in{}^JW\}$ are
$A$-bases of $M^J$ and $N^J$ respectively. Indeed every $w\in S_n$ factors
uniquely as $w=ly$ with $l\in W_J$, $y\in{}^JW$, length-additively, and
$\varphi_\pm(H_l)=\varphi_\pm(H_s)^{\ell(l)}\in\{v^{-\ell(l)},\pm v^{\ell(l)}\}$
is a unit of $A$, so $1\otimes H_w=\varphi_\pm(H_l)\,(1\otimes H_y)$ in both
modules.

**(2) (Right action.)** For $s\in S$ and $x\in{}^JW$,
$$m_x C_s=\begin{cases}m_{xs}+v\,m_x,&xs\in{}^JW,\ xs>x,\\ m_{xs}+v^{-1}m_x,&xs\in{}^JW,\ xs<x,\\ (v+v^{-1})m_x,&xs\notin{}^JW,\end{cases}\qquad n_xC_s=\begin{cases}n_{xs}+v\,n_x,&xs\in{}^JW,\ xs>x,\\ n_{xs}+v^{-1}n_x,&xs\in{}^JW,\ xs<x,\\ 0,&xs\notin{}^JW.\end{cases}$$

**(3) (Bar.)** The assignment $a\otimes h\mapsto \bar a\otimes\bar h$ (bar on
$A$ and the bar involution of $H_v(n)$) descends to $A$-antilinear
involutions of $M^J$ and $N^J$ that satisfy
$\overline{X\cdot h}=\overline X\cdot\bar h$ and
$$\overline{m_x}=m_x+\sum_{y<x}a_{y,x}m_y,\qquad \overline{n_x}=n_x+\sum_{y<x}b_{y,x}n_y$$
with $a_{y,x},b_{y,x}\in A$ and top coefficient
$a_{x,x}=b_{x,x}=1$.

**(4) (Parabolic property.)** If $x\in{}^JW$ and $s\in S$ with
$xs\notin{}^JW$, then $xs=rx$ for a unique simple $r\in J$ and $xs>x$.

## Facts & Assumptions

**Given:** The data of [[def-parabolic-hecke-module-and-antispherical-standard-basis]]: $J\subseteq S=\{s_1,\dots,s_{n-1}\}$, $W_J$, ${}^JW$, the modules $M^J,N^J$ with $\varphi_+(H_s)=v^{-1}$, $\varphi_-(H_s)=-v$, the standard basis $\{H_w\}$ and the elements $C_s=H_s+v$; $S_n=\operatorname{Sym}(\{1,\dots,n\})$, $s_i=(i\ i+1)$, and $\ell$ is inversion length.

[F1] Parabolic factorization: every $w\in S_n$ is uniquely $w=ly$ with $l\in W_J$, $y\in{}^JW$, and $\ell(w)=\ell(l)+\ell(y)$; consequently $\ell(uy)=\ell(u)+\ell(y)$ for $u\in W_J$, $y\in{}^JW$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3), [[thm-cg-parabolic-intersections-and-coset-factorization]] (3), [[def-cg-parabolic-quotient-and-two-sided-minima]] (2)). For a reduced expression $w=s_{i_1}\cdots s_{i_k}$ one has $H_w=H_{s_{i_1}}\cdots H_{s_{i_k}}$, and if $\ell(w)=\ell(u)+\ell(y)$ then $H_w=H_uH_y$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] Right multiplication by a generator ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]): $H_wH_s=H_{ws}$ if $\ell(ws)=\ell(w)+1$, and $H_wH_s=H_{ws}+(v^{-1}-v)H_w$ if $\ell(ws)=\ell(w)-1$.

[F3] Bar ([[lem-the-hecke-bar-involution-is-well-defined]]): bar is a multiplicative $A$-semilinear involution with $\overline{H_s}=H_s^{-1}=H_s-(v^{-1}-v)$, $\overline{H_w}=H_{w^{-1}}^{-1}$, and $\varphi_\pm(\overline{H_s})=\overline{\varphi_\pm(H_s)}$, the conjugate under $v\mapsto v^{-1}$.

[F4] Bruhat order ([[lem-bruhat-order-basic-properties-for-permutations]] (b),(c)): $y\le w$ implies $\ell(y)\le\ell(w)$ with equality only for $y=w$; $y\le w$ if and only if for every reduced expression $w=s_{i_1}\cdots s_{i_k}$ the element $y$ is a reduced subword; in particular every subword of a reduced expression is reduced and represents an element $z\le w$.

[F5] Length and left descents ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), [[def-inversions-inversion-number-and-sign]]): $\ell(x)=\operatorname{inv}(x)$, and for a simple reflection $s_i$ the left multiple $s_ix$ swaps the values $i$ and $i+1$ in the one-line notation; the inversion status of every value pair except $\{i,i+1\}$ is unchanged, so $\ell(s_ix)<\ell(x)$ if and only if $i+1$ occurs to the left of $i$ in $x$, equivalently $\ell(s_ix)>\ell(x)$ if and only if $i$ occurs to the left of $i+1$.

[F6] Blocks ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), [[def-cg-parabolic-quotient-and-two-sided-minima]] (1)): if $J$ decomposes into maximal runs of consecutive indices, then $W_J$ is the direct product of the symmetric groups on the corresponding consecutive value blocks, and by [F5] an element $x$ lies in ${}^JW$ if and only if inside every such block the values occur in increasing order in the one-line notation of $x$.

## Proof

**Proof technique:** direct: exhibit the free left $H_J$-basis, compute the right action from the standard multiplication rules, prove the parabolic property from the type-$A$ block criterion, and expand bar along subwords.

1.1 **The bases.** The standard basis $\{H_w:w\in S_n\}$ partitions as $\{H_uH_y:u\in W_J,\ y\in{}^JW\}$ by [F1], and $(u,y)\mapsto uy$ is a bijection $W_J\times{}^JW\to S_n$; hence $\{H_y:y\in{}^JW\}$ is a left $H_J$-basis of $H_v(n)$. Indeed the $A$-linear map $\Psi:A^{\oplus_{y\in{}^JW}}\to A\otimes_{H_J}H_v(n)$, $(a_y)_y\mapsto\sum_ya_y\otimes H_y$, is onto because every $1\otimes H_w$ with $w=ly$ equals $\varphi_\pm(H_l)(1\otimes H_y)$; and the balanced map $\Phi:A\times H_v(n)\to A^{\oplus_{y\in{}^JW}}$, $\Phi(a,\sum_{u,y}c_{u,y}H_uH_y):=(a\sum_uc_{u,y}\varphi_\pm(H_u))_y$, satisfies $\Phi(a\varphi_\pm(H_t),h)=\Phi(a,H_th)$ for $t=H_s$, $s\in J$, because $H_sH_u=H_{su}$ and $\varphi_\pm$ is multiplicative; hence $\Phi$ descends to an $A$-linear left inverse of $\Psi$. Thus $\Psi$ is an isomorphism and $\{m_y\}$, $\{n_y\}$ are $A$-bases in the two modules. [F1, given, algebra]

2.1 **The two minimal branches.** Let $x\in{}^JW$, $s\in S$ and suppose $xs\in{}^JW$. Since $xs=x\cdot(x^{-1}sx)$ is the left translate of $x$ by the transposition $x^{-1}sx$ and $xs\ne x$, [F4](a),(b) shows that $xs>x$ holds exactly when $\ell(xs)=\ell(x)+1$, and $xs<x$ exactly when $\ell(xs)=\ell(x)-1$. If $xs>x$ then [F2] gives $H_xH_s=H_{xs}$, so by step 1.1 and the module structure $m_xC_s=1\otimes(H_{xs}+vH_x)=m_{xs}+v\,m_x$, and likewise $n_xC_s=n_{xs}+v\,n_x$. If $xs<x$ then $H_xH_s=H_{xs}+(v^{-1}-v)H_x$, so $m_xC_s=m_{xs}+(v^{-1}-v)m_x+v\,m_x=m_{xs}+v^{-1}m_x$, and likewise $n_xC_s=n_{xs}+v^{-1}n_x$. [F2, F4, step 1.1, algebra]

2.2 **The parabolic property.** Let $x\in{}^JW$ and $s=s_j$, and suppose $xs\notin{}^JW$; by [F5] $xs$ has a left descent in $J$: some $r\in J$ has $r+1$ to the left of $r$ in $xs$. Since $x\in{}^JW$ has no such descent, while $xs$ differs from $x$ only by the swap of the entries at positions $j$ and $j+1$, the only changed relative order is that of the values $a:=x(j)$, $b:=x(j+1)$, so $\{r,r+1\}=\{a,b\}$. If $a=r+1$ and $b=r$, then in $xs$ the value $r+1$ still precedes $r$, no descent is created, and every other pair is unchanged, a contradiction. Hence $a=r$ and $b=r+1$ with $r\in J$; the two permutations $xs$ and $s_rx$ coincide because both are obtained from $x$ by interchanging the values $r$ and $r+1$. Moreover $\ell(s_rx)>\ell(x)$ because $r\in J$ and $x\in{}^JW$, so $\ell(xs)=\ell(x)+1$ and $xs>x$ by [F4](a),(b); thus $H_xH_s=H_{xs}=H_{s_rx}=H_rH_x$ by [F1] and [F2]. Therefore $m_xC_s=1\otimes(H_{xs}+vH_x)=\varphi_+(H_r)m_x+v\,m_x=(v^{-1}+v)m_x$ and $n_xC_s=\varphi_-(H_r)n_x+v\,n_x=(-v+v)n_x=0$. Uniqueness of $r$ holds because $r$ is the value whose swap produces $xs$; this proves (4) and the third branch of (2). [F1, F2, F4, F5, F6, step 1.1, algebra]

2.3 **The bar descent.** The map $\beta(a\otimes h):=\bar a\otimes\bar h$ is well defined on $A\otimes_{H_J}H_v(n)$: it suffices to check $\overline{a\varphi_\pm(t)}\otimes\bar h=\bar a\otimes\overline{th}$ for $t=H_s$, $s\in J$, where the left side is $\bar a\,\overline{\varphi_\pm(H_s)}\otimes\bar h$ and the right side is $\bar a\otimes\overline{H_s}\bar h=\bar a\otimes(H_s-(v^{-1}-v))\bar h=\bar a\,\varphi_\pm(H_s-(v^{-1}-v))\otimes\bar h$, and $\varphi_+(H_s-(v^{-1}-v))=v^{-1}+(v-v^{-1})=v=\overline{v^{-1}}$, $\varphi_-(H_s-(v^{-1}-v))=-v+(v-v^{-1})=-v^{-1}=\overline{-v}$ by [F3]; multiplicativity extends this to all $t$. The map is $A$-antilinear, involutive ($\beta^2=\mathrm{id}$ because bar is an involution on $A$ and on $H_v(n)$), and satisfies $\beta(X\cdot h')=\beta(X)\cdot\overline{h'}$ because $(a\otimes h)\cdot h'=a\otimes hh'$ maps to $\bar a\otimes\overline{hh'}=\bar a\otimes\bar h\bar h'=(\bar a\otimes\bar h)\cdot\bar h'$. [F3, step 1.1, algebra]

3.1 **Triangular expansion and top coefficient.** For $x=s_{i_1}\cdots s_{i_k}$ reduced, [F3] gives $\overline{H_x}=H_{s_{i_1}}^{-1}\cdots H_{s_{i_k}}^{-1}=\prod_{m=1}^{k}\bigl(H_{s_{i_m}}-(v^{-1}-v)\bigr)$. Expanding the product, a choice of the scalar term at a nonempty set $S$ of positions contributes $\bigl(-(v^{-1}-v)\bigr)^{|S|}$ times the product of the generators at the remaining positions; that product is a subword of the reduced expression, hence by [F4] is a reduced word for an element $z_S\le x$, and if $S\ne\varnothing$ then $\ell(z_S)=k-|S|<k$, so $z_S<x$. Collecting the finitely many terms in the standard basis gives $\overline{H_x}=H_x+\sum_{z<x}c_zH_z$ with $c_z\in A$ (the unique term with top label $x$ is $S=\varnothing$, with coefficient $1$). Now $\overline{m_x}=\beta(m_x)=\sum_zc_z(1\otimes H_z)+m_x$ with $c_x:=1$. For $z<x$ write $z=uy$ with $u\in W_J$, $y\in{}^JW$; then $1\otimes H_z=\varphi_\pm(H_u)m_y$, and $y\le z<x$ by [F4] (a reduced expression of $z$ contains a reduced subword for $y$, using $\ell(z)=\ell(u)+\ell(y)$). Hence $\overline{m_x}=m_x+\sum_{y<x}a_{y,x}m_y$ with $a_{y,x}\in A$ (a finite sum of the terms $\varphi_\pm(H_u)c_{uy}$), and no term with $y=x$ occurs since $y\le z<x$ would force $\ell(y)<\ell(x)$. The same computation gives $\overline{n_x}=n_x+\sum_{y<x}b_{y,x}n_y$, $b_{y,x}\in A$, and $a_{x,x}=b_{x,x}=1$. This proves (3). [F3, F4, step 1.1, step 2.3, algebra]

4.1 Parts (1), (2), (3) and (4) are proved in steps 1.1, 2.1 together with 2.2, 2.3 together with 3.1, and 2.2 respectively. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

The independence of $\{m_x\}$ uses the free left $H_J$-basis $\{H_y\}$ of
$H_v(n)$ and not merely the spanning property; a unit coefficient alone would
not prove independence. The top coefficient one in (3) is the coefficient of
$H_x$ in the expansion of the inverse generators; it is not a claim that all
lower coefficients lie in $v\mathbb Z[v]$. The bar is multiplicative; the
balancing check in step 4.1 is exactly where the multiplicative convention
(rather than an anti-automorphism convention) is used.
