---
id: ex-kazhdan-lusztig-bases-for-s-two-and-s-three
kind: example
title: The Kazhdan–Lusztig bases of $S_2$ and $S_3$
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-the-hecke-bar-involution-is-well-defined, def-bruhat-interval-and-r-polynomials, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-kazhdan-lusztig-basis-multiplication-formula, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 — §3.2 (printed pp. 15–16): the normalized Hecke algebra, bar involution, triangular Kazhdan–Lusztig basis, rank-one element, and the dictionary $\\underline H_x=C'_x$ and $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$."
    url: https://arxiv.org/pdf/1212.0791
    locator: "§3.2, printed pp. 15–16; the complete section and displayed formulas were reread."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Facts & Assumptions

**Given:** The one-based permutation groups $S_2,S_3$, with composition as functions; left $s_i$ swaps values $i,i+1$. Write $\alpha=v-v^{-1}$ and $C_w=\underline H_w$.

[F1] The standard elements form a basis, $H_{s_i}^2=1-\alpha H_{s_i}$, and the normalized bar assignment sends $H_{s_i}$ to $H_{s_i}+\alpha$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] The bar assignment descends to a multiplicative semilinear involution of the quotient Hecke algebra ([[lem-the-hecke-bar-involution-is-well-defined]]).

[F3] A bar-fixed element in $H_w+\sum_{y<w}v\mathbb Z[v]H_y$ is uniquely $C_w=\underline H_w$, and these elements form a basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F4] The coefficients satisfy $p_{y,w}=v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})$ and $\mu(y,w)=[v]p_{y,w}$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F5] Multiplication by $C_s$ is the descent scalar or the ascent sum with lower $s$-descent terms ([[thm-kazhdan-lusztig-basis-multiplication-formula]]).

[F6] Bruhat order has the reduced-subword characterization and is graded by inversion length ([[lem-bruhat-order-basic-properties-for-permutations]]).

[F7] The $R$-coefficient $r_{y,w}$ is the coefficient of $H_y$ in the standard-basis expansion of $\overline{H_w}$ ([[def-bruhat-interval-and-r-polynomials]]).

## Example

Work in the normalization of [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], write permutations in one-line notation, and put $q=v^{-2}$ as in [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]. (a) In $S_2$: $r_{\mathrm{id},21}=v-v^{-1}$, $\underline H_{\mathrm{id}}=H_{\mathrm{id}}$, $\underline H_{21}=H_{21}+vH_{\mathrm{id}}$, $P_{\mathrm{id},21}(q)=1$, $\mu(\mathrm{id},21)=1$ and $\underline H_{21}^2=(v+v^{-1})\underline H_{21}$. (b) In $S_3$ the bar images of the standard basis are $$\overline{H_{132}}=H_{132}+(v-v^{-1})H_{123},\qquad \overline{H_{213}}=H_{213}+(v-v^{-1})H_{123},$$ $$\overline{H_{231}}=H_{231}+(v-v^{-1})(H_{132}+H_{213})+(v^2-2+v^{-2})H_{123},$$ $$\overline{H_{312}}=H_{312}+(v-v^{-1})(H_{132}+H_{213})+(v^2-2+v^{-2})H_{123},$$ $$\overline{H_{321}}=H_{321}+(v-v^{-1})(H_{231}+H_{312})+(v^2-2+v^{-2})(H_{132}+H_{213})+(v^3-2v+2v^{-1}-v^{-3})H_{123},$$ the Kazhdan–Lusztig basis is $$\underline H_{123}=H_{123},\quad \underline H_{132}=H_{132}+vH_{123},\quad \underline H_{213}=H_{213}+vH_{123},$$ $$\underline H_{231}=H_{231}+v(H_{132}+H_{213})+v^2H_{123},\quad \underline H_{312}=H_{312}+v(H_{132}+H_{213})+v^2H_{123},$$ $$\underline H_{321}=H_{321}+v(H_{231}+H_{312})+v^2(H_{132}+H_{213})+v^3H_{123},$$ all $P_{y,w}(q)$ with $y\le w$ equal $1$, and $\mu(y,w)=1$ exactly when $y\lessdot w$ is a cover of the Bruhat order on $S_3$ (the eight covers $(123,132)$, $(123,213)$, $(132,231)$, $(132,312)$, $(213,231)$, $(213,312)$, $(231,321)$, $(312,321)$ in one-line notation). (c) Multiplication checks: $\underline H_{21}^2=(v+v^{-1})\underline H_{21}$ and, in the case $sw>w$ with one $\mu$-edge, $\underline H_{132}\underline H_{231}=\underline H_{321}+\underline H_{132}$ (here $s_2\cdot 231=321$ and $s_2\cdot 132=123<132$, so the sum in [[thm-kazhdan-lusztig-basis-multiplication-formula]] has the single term $\mu(132,231)=1$).

## Verification

1.1 **Rank one.** By [F1, F2], $\overline{H_{21}}=H_{21}+\alpha$ and $\overline{H_{\mathrm{id}}}=H_{\mathrm{id}}$; by [F7], this gives $r_{\mathrm{id},21}=\alpha=v-v^{-1}$. Since $\alpha+v^{-1}=v$, $C:=H_{21}+vH_{\mathrm{id}}$ is bar-fixed. It is triangular below $H_{21}$, so uniqueness [F3] gives $C_{21}=C$ and $C_{\mathrm{id}}=H_{\mathrm{id}}$. From $H_{21}^2=1-\alpha H_{21}$ in [F1], $$C_{21}^2=(H_{21}+v)^2=1+(v+v^{-1})H_{21}+v^2=(v+v^{-1})(H_{21}+v).$$ Its off-diagonal coefficient is $p_{\mathrm{id},21}=v$, so [F4] gives $P_{\mathrm{id},21}=1$ and $\mu(\mathrm{id},21)=1$. [F1, F2, F3, F4, F7, algebra]

1.2 **Every bar image in $S_3$.** Put $X=H_{213}$ and $Y=H_{132}$. The reduced words give $H_{231}=XY$, $H_{312}=YX$ and $H_{321}=YXY$. By [F1, F2], their bar images are computed by expanding $(X+\alpha)(Y+\alpha)$ and its reverse for the two length-two images, and $(Y+\alpha)(X+\alpha)(Y+\alpha)$ for the length-three word, replacing $Y^2$ by $1-\alpha Y$. The latter gives $H_{321}+\alpha(H_{231}+H_{312})+\alpha^2(X+Y)+(\alpha^3+\alpha)H_{123}$. Since $\alpha^2=v^2-2+v^{-2}$ and $\alpha^3+\alpha=v^3-2v+2v^{-1}-v^{-3}$, these are exactly all the displayed bar images. Multiplicativity computes the images directly; it does not assert that $\overline{H_w}$ itself is bar-fixed. [F1, F2, algebra]

1.3 **The six KL elements.** Put $A=X+v$ and $B=Y+v$. By [F1, F2], both are bar-fixed, and $$AB=H_{231}+v(H_{213}+H_{132})+v^2H_{123},\qquad BA=H_{312}+v(H_{132}+H_{213})+v^2H_{123}.$$ A direct expansion gives $$BAB=H_{321}+v(H_{231}+H_{312})+v^2H_{213}+(1+v^2)H_{132}+(v+v^3)H_{123},$$ so subtracting $B=H_{132}+vH_{123}$ gives exactly the displayed $C_{321}$. Each of $1,A,B,AB,BA,BAB-B$ is bar-fixed and has top coefficient $1$ with lower coefficients in $v\mathbb Z[v]$; all lower indices are below its top by [F6]. Thus uniqueness [F3] identifies all six elements. [F1, F2, F3, F6, algebra]

2.1 **Polynomials and covers.** Reading the expansions in step 1.3 gives $p_{y,w}=v^{\ell(w)-\ell(y)}$ for every $y\le w$, so [F4] gives $P_{y,w}=1$ and $\mu(y,w)=[v]p_{y,w}$ is $1$ exactly at length difference one. By the reduced-subword criterion [F6], the Bruhat ranks in $S_3$ are $\{123\}$, $\{132,213\}$, $\{231,312\}$, and $\{321\}$, and each element in one of these layers is below every element in the next layer. Hence the covers are precisely the two edges from $123$, the four edges from rank one to rank two, and the two edges into $321$; these are exactly the eight pairs listed. Grading rules out other covers. [F4, F6, step 1.3, algebra]

3.1 **The ascent multiplication check.** The subword criterion [F6] gives $[\mathrm{id},231]=\{123,132,213,231\}$. Left $s_2$ sends $231$ to $321$, whereas it sends $132$ to $123$ and $213$ to $312$; thus among the strict lower indices only $132$ has a left $s_2$-descent. Step 2.1 gives $\mu(132,231)=1$, so [F5] yields $C_{132}C_{231}=C_{321}+C_{132}$. For comparison, left $s_1$ sends $231$ to $132<231$, and the descent formula gives $C_{213}C_{231}=(v+v^{-1})C_{231}$. The rank-one square was already proved in step 1.1. [F5, F6, step 1.1, step 2.1, algebra] ∎
