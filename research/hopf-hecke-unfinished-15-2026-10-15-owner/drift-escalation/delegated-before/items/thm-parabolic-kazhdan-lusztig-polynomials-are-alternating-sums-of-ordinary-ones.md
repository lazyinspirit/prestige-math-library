---
id: thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones
kind: theorem
title: "Parabolic Kazhdan–Lusztig polynomials are alternating sums of ordinary ones"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis,
       def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars,
       thm-kazhdan-lusztig-basis-multiplication-formula,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution,
       def-cg-parabolic-quotient-and-two-sided-minima,
       thm-hh-parabolic-minimal-representatives-and-length-additivity,
       lem-bruhat-order-basic-properties-for-permutations,
       lem-the-hecke-bar-involution-is-well-defined]
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
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.7 (printed pp. 8-9): relation (3), the identity n_{y,x}=sum_{z in W_I}(-v)^{l(z)}h_{zy,x} attributed to Deodhar [Deo87], and relation (2), m_{y,x}=h_{w_0y,w_0x} for finitary I; complete passage read."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 5.12 and Chapter 7 (title-only locator): the ordinary Kazhdan-Lusztig basis and its coefficient bookkeeping, used only as a secondary treatment."
---

## Statement

Retain the notation of
[[def-parabolic-kazhdan-lusztig-basis-and-polynomials]].

**(1) (Antispherical alternating sum.)** For all $x,y\in{}^JW$,
$$n_{y,x}=\sum_{z\in W_J}(-1)^{\ell(z)}\,v^{\ell(z)}\,p_{zy,\,x},$$
the sum over all $z\in W_J$ (the product $zy$ taken in $S_n$, and $p_{\cdot,x}$
the ordinary coefficient of the Kazhdan--Lusztig basis of
[[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], so the inner
coefficients vanish unless $zy\le x$).

**(2) (Spherical reduction.)** If $W_J$ is finite with longest element
$w_0^J$ then for all $x,y\in{}^JW$,
$$m_{y,x}=p_{w_0^Jy,\ w_0^Jx}.$$

In particular both families are computable from the ordinary Kazhdan--Lusztig
coefficients of $S_n$, with no separate recursion.

## Facts & Assumptions

**Given:** The modules $M^J,N^J$, the elements $C_x=\sum_{y\le x}m_{y,x}m_y$ and $D_x=\sum_{y\le x}n_{y,x}n_y$ of [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], the ordinary basis $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ of $H_v(n)$ in the normalization of [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], and, in part (2), a finite $W_J$ with longest element $w_0^J$.

[F1] Ordinary Kazhdan--Lusztig data: existence and uniqueness of the bar-fixed triangular basis, $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, and for $y<w$ the degree bound $p_{y,w}=v^{\ell(w)-\ell(y)}+\text{lower}$ and the parity $p_{y,w}\in v^{\ell(w)-\ell(y)}\mathbb Z[v^{-2}]$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]); The standard bar expansion is triangular: invert the finite unitriangular transition from the standard basis to the bar-fixed ordinary basis, express $H_w$ in that basis, and apply bar. This gives $\overline{H_w}=H_w+\sum_{z<w}c_zH_z$.

[F2] Ordinary multiplication ([[thm-kazhdan-lusztig-basis-multiplication-formula]]): if $sw<w$, then $(H_s+v)\underline H_w=(v+v^{-1})\underline H_w$, hence $H_s\underline H_w=v^{-1}\underline H_w$. If $sw>w$, then $(H_s+v)\underline H_w=\underline H_{sw}+\sum_{sz<z<w}\mu(z,w)\underline H_z$.

[F3] Parabolic Hecke module data: $\{m_y\},\{n_y\}$ are $A$-bases, the right actions of $C_s$ are as in [[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]] (2), (3): the bar is the balanced multiplicative one with triangular expansion.

[F4] Parabolic basis theorem: the elements $C_x,D_x$ exist uniquely as the bar-fixed triangular elements, and their coefficients satisfy $m_{x,x}=n_{x,x}=1$ and $m_{y,x},n_{y,x}\in v\mathbb Z[v]$ for $y<x$ ([[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]).

[F5] Parabolic factorization and Bruhat order: $w=uy$ with $u\in W_J$, $y\in{}^JW$ is unique and length-additive; if $y\le x$ then $y$ is a reduced subword of every reduced expression of $x$, and $y\le z$ holds whenever $z=uy$ is length-additive ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]], [[lem-bruhat-order-basic-properties-for-permutations]], [[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F6] For finite $W_J$ with longest element $w_J=w_0^J$, one has $\ell(sw_J)=\ell(w_J)-1$ for $s\in J$. In type $A$, $w_J$ reverses each consecutive value block, so these descents follow directly from inversion length. For $x\in{}^JW$, length additivity gives $\ell(sw_Jx)=\ell(w_J)-1+\ell(x)<\ell(w_Jx)$, and [F2] therefore gives $H_s\underline H_{w_Jx}=v^{-1}\underline H_{w_Jx}$.

## Proof

**Proof technique:** compare the antispherical quotient of an ordinary canonical element and the spherical integral left-eigenmodule with their parabolic canonical bases.

1.1 **The antispherical image.** Let $\Phi:H_v(n)\to N^J=A\otimes_{H_J}H_v(n)$, $\Phi(h):=1\otimes h$. It is $A$-linear and satisfies $\Phi(\bar h)=\overline{\Phi(h)}$ by [F3]. Since $\underline H_x$ is bar-fixed, so is $\Phi(\underline H_x)$; expanding $\underline H_x=\sum_{w\le x}p_{w,x}H_w$ and using the parabolic factorization $w=zy$ with $z\in W_J$, $y\in{}^JW$ and $1\otimes H_w=\varphi_-(H_z)n_y=(-v)^{\ell(z)}n_y$ gives $\Phi(\underline H_x)=\sum_{y\in{}^JW}\bigl(\sum_{z\in W_J}(-v)^{\ell(z)}p_{zy,x}\bigr)n_y$. The top coefficient at $y=x$ is $p_{x,x}=1$ (only $z=1$ contributes, since $zx\le x$ with $z\ne1$ would give $\ell(zx)>\ell(x)$); and for a coefficient at $y\ne x$, every contributing term has $zy\le x$, hence $y\le zy$ by [F5] and $y<x$. For $y<x$, every contributing ordinary coefficient has $zy<x$: equality $zy=x$ would contradict the unique parabolic factorization of the minimal representative $x$. Thus $p_{zy,x}\in v\mathbb Z[v]$, and multiplication by $(-v)^{\ell(z)}$ preserves this property. Hence $\Phi(\underline H_x)$ is bar-fixed in $n_x+\sum_{y<x}v\mathbb Z[v]n_y$, so by uniqueness [F4] it equals $D_x$ and matching coefficients gives (1). [F3, F4, F5, algebra]

1.2 **The integral parabolic eigenline.** Put $L=\ell(w_J)$ and $C_J=\sum_{u\in W_J}v^{L-\ell(u)}H_u$. Pairing $u$ with $su$ where $\ell(su)=\ell(u)+1$, the left multiplication rule gives $H_s(a_uH_u+a_{su}H_{su})=a_{su}H_u+(a_u+(v^{-1}-v)a_{su})H_{su}$. This equals $v^{-1}(a_uH_u+a_{su}H_{su})$ iff $a_{su}=v^{-1}a_u$. Iterating along reduced words proves that the simultaneous left eigenvectors in $H_J$ are exactly $A C_J$: their coefficients satisfy $a_u=v^{-\ell(u)}a_e=v^{L-\ell(u)}a_{w_J}$. The same pairing on the right gives $C_JH_s=v^{-1}C_J$. Bar preserves the left eigen-equations, since conjugating $H_sX=v^{-1}X$ gives $H_s^{-1}\overline X=v\overline X$ and hence $H_s\overline X=v^{-1}\overline X$. By [F1] its triangular standard expansion leaves the coefficient of $H_{w_J}$ in $\overline{C_J}$ equal to one. The integral eigenline calculation therefore forces $\overline{C_J}=C_J$. Every $u\in W_J$ is a reduced subword of a reduced expression for the block-reversing longest permutation $w_J$ (sort a block permutation up to the reverse order by adjacent ascents); thus $u\le w_J$. Consequently $C_J$ has the ordinary canonical triangular form, and [F1] identifies it with $\underline H_{w_J}$. [F1, F5, F6, algebra]

2.1 **Well-definedness and degree bounds for the antispherical family.** In the formula of step 1.1, a term with $p_{zy,x}\ne0$ has $zy\le x$ and $\ell(zy)=\ell(z)+\ell(y)$ by [F5], so $p_{zy,x}\in v^{\ell(x)-\ell(zy)}\mathbb Z[v^{-2}]$ by [F1]; multiplying by $(-v)^{\ell(z)}$ gives a contribution in $v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$. Hence $n_{y,x}\in v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$, so $N^J_{y,x}(q)=v^{\ell(y)-\ell(x)}n_{y,x}$ lies in $\mathbb Z[v^{-2}]=\mathbb Z[q]$ with $q=v^{-2}$, and $n_{y,x}$ has parity $\ell(x)-\ell(y)$ modulo two. This discharges the well-definedness of the antispherical polynomials. [F1, step 1.1, algebra]

2.2 **The integral spherical image.** Define $\Theta:M^J\to H_v(n)$ by $\Theta(1\otimes h)=C_Jh$. Step 1.2 proves balancing and bar compatibility. Decompose $H_v(n)=\bigoplus_{y\in{}^JW}H_JH_y$ as in [F3]. An element $X=\sum_yh_yH_y$ satisfies $H_sX=v^{-1}X$ for all $s\in J$ iff each $h_y$ does. The integral eigenline calculation of step 1.2 then gives $h_y=c_yC_J$ with $c_y\in A$. Thus the image of $\Theta$ is exactly this integral eigenmodule, and it is injective: the coefficient of $H_{w_Jy}$ in $C_JH_y=\sum_uv^{L-\ell(u)}H_{uy}$ is one, and no other coset contributes to that standard label. By [F2] in the descent case [F6], $\underline H_{w_Jx}$ lies in this image, with unique preimage $X_x=\sum_yc_ym_y$. [F2, F3, F5, F6, step 1.2, algebra]

3.1 **Triangularity and coefficient comparison.** The disjoint coset expansions in step 2.2 give $c_y=p_{w_Jy,w_Jx}$. The coefficient $c_x$ is one. If $c_y\ne0$, then $w_Jy\le w_Jx$, so $y\le w_Jy\le w_Jx$. Choose a reduced expression for $w_Jx$ consisting of a word in $J$ followed by a reduced expression for $x$. By [F5] it contains a reduced subword for $y$. Such a subword cannot select any letter from the initial $J$-word: its first selected letter would be in $J$, making it a left descent of $y$, contrary to $y\in{}^JW$. Thus the subword lies entirely in $x$, proving $y\le x$. For $y\ne x$, the ordinary coefficient $p_{w_Jy,w_Jx}$ lies in $v\mathbb Z[v]$ by [F1]. Bar compatibility and injectivity give $\overline{X_x}=X_x$. Therefore $X_x$ has exactly the defining canonical form in [F4], so $X_x=C_x$ and $m_{y,x}=p_{w_Jy,w_Jx}$. This proves (2), including zero coefficients outside the lower ideal. [F1, F4, F5, step 2.2, algebra]

4.1 **Degree bounds and conclusion.** The ordinary degree bound of [F1] gives $p_{w_0^Jy,w_0^Jx}\in v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$, so $m_{y,x}$ has parity $\ell(x)-\ell(y)$ and $M^J_{y,x}(q)=v^{\ell(y)-\ell(x)}m_{y,x}\in\mathbb Z[q]$. Both families are therefore computable from the ordinary coefficients by (1) and (2), and both polynomial families are well defined. [F1, step 2.1, step 3.1, algebra] ∎

## Remarks

The antispherical formula is Deodhar's alternating sum; the spherical formula is the reduction $m_{y,x}=p_{w_0^Jy,w_0^Jx}$ for finite $W_J$. The proof uses only the ordinary basis theorem and multiplication formula, the induced module structure, and the comparison of bar-fixed triangular elements; it does not read a parity clause back into the existence theorem of the parabolic basis, and it uses no choice principle.
