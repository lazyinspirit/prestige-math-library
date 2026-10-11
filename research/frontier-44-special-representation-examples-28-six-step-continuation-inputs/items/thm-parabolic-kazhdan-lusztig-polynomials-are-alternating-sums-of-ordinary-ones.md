---
id: thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones
kind: theorem
title: "Parabolic Kazhdan–Lusztig polynomials are alternating sums of ordinary ones"
status: draft
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
sources:
  references:
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.7 (printed pp. 8-9): relation (3), the identity n_{y,x}=sum_{z in W_I}(-v)^{l(z)}h_{zy,x} attributed to Deodhar [Deo87], and relation (2), m_{y,x}=h_{w_0y,w_0x} for finitary I; complete passage read."
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 5.12 and Chapter 7 (title-only locator): the ordinary Kazhdan-Lusztig basis and its coefficient bookkeeping, used only as a secondary treatment."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 3 (printed pp. 5-7): translation functors and the parabolic/Hecke interface; the lecture's normalization of the Hecke algebra and the KL basis is the same as the one used here; complete section read."
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

[F1] Ordinary Kazhdan--Lusztig data: existence and uniqueness of the bar-fixed triangular basis, $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, and for $y<w$ the degree bound $p_{y,w}=v^{\ell(w)-\ell(y)}+\text{lower}$ and the parity $p_{y,w}\in v^{\ell(w)-\ell(y)}\mathbb Z[v^{-2}]$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]); the ordinary basis is the unique bar-fixed triangular family and $\overline{H_w}=H_w+\sum_{z<w}c_zH_z$ ([[lem-the-hecke-bar-involution-is-well-defined]]).

[F2] The ordinary multiplication formula: $C_s\underline H_w=\underline H_{sw}+\sum_{z<w,\ sz<z}\mu(z,w)\underline H_z$ if $sw<w$, and $C_s\underline H_w=\sum_{z\le w,\ sz<z}\mu(z,w)\underline H_z$ if $sw>w$ ([[thm-kazhdan-lusztig-basis-multiplication-formula]]); in particular if $sw>w$ then $C_s\underline H_w$ is supported on $z\le w$ with $sz<z$.

[F3] Parabolic Hecke module data: $\{m_y\},\{n_y\}$ are $A$-bases, the right actions of $C_s$ are as in [[lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars]] (2), (3): the bar is the balanced multiplicative one with triangular expansion.

[F4] Parabolic basis theorem: the elements $C_x,D_x$ exist uniquely as the bar-fixed triangular elements, and their coefficients satisfy $m_{x,x}=n_{x,x}=1$ and $m_{y,x},n_{y,x}\in v\mathbb Z[v]$ for $y<x$ ([[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]).

[F5] Parabolic factorization and Bruhat order: $w=uy$ with $u\in W_J$, $y\in{}^JW$ is unique and length-additive; if $y\le x$ then $y$ is a reduced subword of every reduced expression of $x$, and $y\le z$ holds whenever $z=uy$ is length-additive ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]], [[lem-bruhat-order-basic-properties-for-permutations]], [[def-cg-parabolic-quotient-and-two-sided-minima]]).

[F6] For $s\in J$ and $x\in{}^JW$, the left multiplication by $s$ on $x$ raises the length, so $H_s$ acts on $\underline H_{w_0^Jx}$ for finite $W_J$ by the left eigenvalue $v^{-1}$: this is the ordinary multiplication formula of [F2] read at $sw>w$ together with $w_0^Jsw_0^J\in J$ and $\ell(w_0^Js'x)=\ell(w_0^J)+\ell(s'x)$.

## Proof

**Proof technique:** direct: realize the antispherical module in $H_v(n)$ by the induced-map $1\otimes h\mapsto 1\otimes h$ and compare bar-fixed triangular elements; realize the spherical module as the $C_J$-eigen-subspace and compare coefficients.

1.1 **The antispherical image.** Let $\Phi:H_v(n)\to N^J=A\otimes_{H_J}H_v(n)$, $\Phi(h):=1\otimes h$. It is $A$-linear and satisfies $\Phi(\bar h)=\overline{\Phi(h)}$ by [F3]. Since $\underline H_x$ is bar-fixed, so is $\Phi(\underline H_x)$; expanding $\underline H_x=\sum_{w\le x}p_{w,x}H_w$ and using the parabolic factorization $w=zy$ with $z\in W_J$, $y\in{}^JW$ and $1\otimes H_w=\varphi_-(H_z)n_y=(-v)^{\ell(z)}n_y$ gives $\Phi(\underline H_x)=\sum_{y\in{}^JW}\bigl(\sum_{z\in W_J}(-v)^{\ell(z)}p_{zy,x}\bigr)n_y$. The top coefficient at $y=x$ is $p_{x,x}=1$ (only $z=1$ contributes, since $zx\le x$ with $z\ne1$ would give $\ell(zx)>\ell(x)$); and for a coefficient at $y\ne x$, every contributing term has $zy\le x$, hence $y\le zy$ by [F5] and $y<x$. Thus $\Phi(\underline H_x)$ is bar-fixed with triangular support $n_x+\sum_{y<x}(\text{coefficient})n_y$, so by uniqueness [F4] it equals $D_x$ and matching coefficients gives (1). [F3, F4, F5, algebra]

1.2 **The element $C_J$.** For finite $W_J$ put $C_J:=\sum_{u\in W_J}v^{\ell(w_0^J)-\ell(u)}H_u$. It satisfies $C_JH_s=v^{-1}C_J$ and $H_sC_J=v^{-1}C_J$ for every $s\in J$: pairing $u$ with $us$, the coefficient of $H_{u'}$ in $C_JH_s$ is $v^{\ell(w_0^J)-\ell(u's)}+[\ell(u's)<\ell(u')](v^{-1}-v)v^{\ell(w_0^J)-\ell(u')}$, which equals $v^{\ell(w_0^J)-\ell(u')-1}$ in both length parities, and the left equation is symmetric. Let $K$ be the fraction field of $A$ and let $E:=\{X\in H_J\otimes_AK:H_sX=v^{-1}X\ \forall s\in J\}$. Since $C_JH_s=v^{-1}C_J$ gives $C_JX\in K\cdot C_J$ for all $X$, and any $X\in E$ satisfies $H_uX=v^{-\ell(u)}X$ for all $u\in W_J$ (iterate over a reduced word), hence $X=c^{-1}C_JX\in K\cdot C_J$ with $c=\sum_{u\in W_J}v^{\ell(w_0^J)-2\ell(u)}\neq0$, the space $E$ is exactly $K\cdot C_J$. Bar preserves the eigen-equations ($\overline{H_s}=H_s^{-1}$ turns $H_sX=v^{-1}X$ into $H_s\overline{X}=v^{-1}\overline{X}$) and $\overline{C_J}$ has top term $H_{w_0^J}$ with coefficient one by [F1]; since $C_J$ has the same top term and $E=K\cdot C_J$, the difference $\overline{C_J}-C_J\in E$ has top degree $<\ell(w_0^J)$ and is therefore zero. So $C_J$ is bar-fixed with triangular support, and the uniqueness clause of [F1] identifies it with the ordinary $\underline H_{w_0^J}$. [F1, F2, F5, algebra]

2.1 **Well-definedness and degree bounds for the antispherical family.** In the formula of step 1.1, a term with $p_{zy,x}\ne0$ has $zy\le x$ and $\ell(zy)=\ell(z)+\ell(y)$ by [F5], so $p_{zy,x}\in v^{\ell(x)-\ell(zy)}\mathbb Z[v^{-2}]$ by [F1]; multiplying by $(-v)^{\ell(z)}$ gives a contribution in $v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$. Hence $n_{y,x}\in v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$, so $N^J_{y,x}(q)=v^{\ell(y)-\ell(x)}n_{y,x}$ lies in $\mathbb Z[v^{-2}]=\mathbb Z[q]$ with $q=v^{-2}$, and $n_{y,x}$ has parity $\ell(x)-\ell(y)$ modulo two. This discharges the well-definedness of the antispherical polynomials. [F1, step 1.1, algebra]

2.2 **The spherical image as an eigen-subspace.** Define $\Theta:M^J\to H_v(n)$ by $\Theta(1\otimes h):=C_Jh$. It is well defined because $C_JH_s=v^{-1}C_J=\varphi_+(H_s)C_J$ for $s\in J$, $A$-linear, and bar-compatible: $\Theta(\overline{1\otimes h})=\Theta(1\otimes\bar h)=C_J\bar h=\overline{C_Jh}=\overline{\Theta(1\otimes h)}$ by [F3] and step 1.2. Its image is $C_JH_v(n)$, which is exactly the set of $X$ with $H_sX=v^{-1}X$ for all $s\in J$ (an element of that set lies in $C_JH$ because $C_J$ spans the rank-one eigen-space of the left action). For $x\in{}^JW$, the ordinary element $\underline H_{w_0^Jx}$ satisfies $H_s\underline H_{w_0^Jx}=v^{-1}\underline H_{w_0^Jx}$ for all $s\in J$ by [F6], hence lies in the image: $\underline H_{w_0^Jx}=\Theta(X_x)$ for a unique $X_x\in M^J$. [F3, F6, step 1.2, algebra]

3.1 **Comparing coefficients.** The map $\Theta$ is injective (its source is free on the $m_y$ and $C_JH_y$ has top term $H_{w_0^Jy}$ with coefficient one), so $X_x$ is determined. Since $\Theta$ is a bar-isomorphism onto its image and $\underline H_{w_0^Jx}$ is bar-fixed with top term $H_{w_0^Jx}$, the element $X_x$ is bar-fixed with top term $m_x$ and support in the lower ideal of $x$: the coefficients of $X_x$ in the basis $\{m_y\}$ are the coefficients of the basis $\{C_JH_y\}$ in the expansion of $\underline H_{w_0^Jx}$, and uniqueness [F4] identifies $X_x=C_x$; hence $m_{y,x}$ is the coefficient of $C_JH_y$ in $\underline H_{w_0^Jx}$. Now $C_JH_y=(\sum_{u}v^{\ell(w_0^J)-\ell(u)}H_u)H_y=\sum_uv^{\ell(w_0^J)-\ell(u)}H_{uy}$ has top term $H_{w_0^Jy}$ with coefficient one, so comparing top coefficients along the finite triangular system for the pairs $(w_0^Jy)$ gives $m_{y,x}=p_{w_0^Jy,w_0^Jx}$: the coefficient of $C_JH_y$ in $\underline H_{w_0^Jx}$ is the coefficient of $H_{w_0^Jy}$ in $C_JH_y$ read in the ordinary basis, namely the ordinary coefficient $p_{w_0^Jy,w_0^Jx}$ (the two triangular matrices are inverse to each other in the finite poset $\{w_0^Jy:y\in{}^JW\}$, and the ordinary triangular matrix has diagonal one). This proves (2). [F1, F4, F5, step 2.2, algebra]

4.1 **Degree bounds and conclusion.** The ordinary degree bound of [F1] gives $p_{w_0^Jy,w_0^Jx}\in v^{\ell(x)-\ell(y)}\mathbb Z[v^{-2}]$, so $m_{y,x}$ has parity $\ell(x)-\ell(y)$ and $M^J_{y,x}(q)=v^{\ell(y)-\ell(x)}m_{y,x}\in\mathbb Z[q]$. Both families are therefore computable from the ordinary coefficients by (1) and (2), and both polynomial families are well defined. [F1, step 2.1, step 3.1, algebra] ∎

## Remarks

The antispherical formula is Deodhar's alternating sum; the spherical formula
is the reduction $m_{y,x}=p_{w_0^Jy,w_0^Jx}$ for finite $W_J$. The proof uses
only the ordinary basis theorem and multiplication formula, the induced module
structure, and the comparison of bar-fixed triangular elements; it does not
read a parity clause back into the existence theorem of the parabolic basis,
and it uses no choice principle.
