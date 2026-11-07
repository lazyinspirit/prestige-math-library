---
id: thm-heath-brown-second-theorem-two-branch
kind: theorem
title: "Heath–Brown's second hybrid density bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: [def-dirichlet-l-zero-density-counting-functions, lem-primitive-dirichlet-l-zero-count-in-unit-window, thm-dirichlet-l-euler-product, thm-heath-brown-first-theorem-two-branch, lem-heath-brown-target-scale-hybrid-large-values]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite zero-window counts and the stated Gaussian-detector and hybrid large-values interfaces."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "Theorem 2, equation (3), and §3; the local proof uses an unconditional hybrid reflection interface"
verification: {}
---

## Statement

For $Q,T\ge1$, let $N_2(\sigma,Q,T)$ count zeros with multiplicity of primitive Dirichlet $L$-functions of conductor at most $Q$ in $\operatorname{Re}s\ge\sigma$, $|\operatorname{Im}s|\le T$. For every $\eta>0$, uniformly for $1/2\le\sigma\le1$,
$$N_2(\sigma,Q,T)\ll_\eta\left(Q^2T^{6/5}\right)^{20(1-\sigma)/9+\eta}.$$
The implied constant depends only on $\eta$. This is the second estimate in Heath–Brown's Theorem 2; it does not assert Theorems 1 or 3 of that paper.

## Statement references

[[def-dirichlet-l-zero-density-counting-functions]]

[[thm-heath-brown-first-theorem-two-branch]]

[[lem-heath-brown-target-scale-hybrid-large-values]]

[Heath-Brown, *The Density of Zeros of Dirichlet's L-Functions*, Theorem 2, equation (3)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Facts & Assumptions

**Given:** $Q,T\ge1$, $1/2\le\sigma\le1$, and $\eta>0$ in the Statement.

[F1] The first Heath–Brown Theorem 2 branch gives $N_2\ll_\eta B^{5(1-\sigma)/(3-\sigma)+\eta}$ for $B=Q^2T^{6/5}$ over the full stated range. [[thm-heath-brown-first-theorem-two-branch]]

[F2] The target-scale hybrid large-values input gives, for each separated family outside the specified conductor-one low-height range, a $W$ with $U^{a/(a+1)}<W\le U$ and $R\ll P^{2\epsilon}(W^{2-2\sigma}+Q^2T W^{4-6\sigma})$ under its exact parameter hypotheses. [[lem-heath-brown-target-scale-hybrid-large-values]]

[F3] Primitive $L$-functions have $O(\log(d(|t|+3)))$ zero occurrences in a unit-height window in the critical strip, and no zeros have real part greater than one. [[lem-primitive-dirichlet-l-zero-count-in-unit-window]] [[thm-dirichlet-l-euler-product]]

## Proof

1.1 It suffices to take $0<\eta\le1$. Put $B=Q^2T^{6/5}$. For $1/2\le\sigma\le3/4$, $$\frac5{3-\sigma}\le\frac{20}{9},$$ so [F1] proves the Statement. Henceforth assume $3/4\le\sigma\le1$, put $\delta_0=1/4$, $\epsilon=\min(1/1000,\eta/1000)$, $\alpha=20\epsilon$, and let $P=C_{\alpha,\delta_0}Q(T+4)$ and $Y_H=P^{1/2+4\epsilon/(2\sigma-1)}$ be the parameters in [F2]. [F1, F2, given, construct, algebra]

2.1 Put $$U=B^{10/9},\qquad D=Q^2T.$$ For sufficiently large $QT$, depending only on $\eta$, the detector threshold holds and $U\ge(2Y_H)^2$ while $U\le P^3$. Indeed $U=Q^{20/9}T^{4/3}\ge(QT)^{4/3}$, $P\asymp_\eta QT$, and $2\log(2Y_H)\le(1+16\epsilon)\log(QT)+O_\eta(1)$ with $1+16\epsilon<4/3$. Thus the integer $a$ in [F2] is at least $2$. For bounded $QT$, [F3] and the elementary count of at most $Q^2$ primitive characters give the result after increasing the constant. [F2, F3, step 1.1, given, algebra]

3.1 Remove the conductor-one zeros with $|\gamma|\le(\log P)^2$; [F3] bounds them by $O((\log P)^3)$. As in finite greedy graph coloring, [F3] partitions the remaining indexed zeros into $O(\log P)$ colors with unit separation within each character label. For each color [F2] gives some $U^{a/(a+1)}<W\le U$ and $$R_{\mathrm{color}}\ll_\eta P^{2\epsilon}\left(W^{2-2\sigma}+DW^{4-6\sigma}\right).$$ Here $a$ depends only on $U,Y_H$, not on the color. [F2, F3, step 2.1, given, construct, algebra]

4.1 Put $q=\log Q$, $t=\log T$, $\ell=q+t$, $p=\log P$, and $u=\log U=20q/9+4t/3$. Then $0\le p-\ell\le c_\eta$ and $U^{2-2\sigma}=B^{20(1-\sigma)/9}$. Since $4-6\sigma<0$ and $W>U^{a/(a+1)}$, the second term in step 3.1 is at most $D U^{(4-6\sigma)a/(a+1)}$. If $a=2$, then $U<(2Y_H)^3$ gives $$u-\tfrac32\ell\le O_\eta(1)+24\epsilon p.$$ As $\sigma\ge3/4$, direct algebra gives $$\log\frac{D U^{(4-6\sigma)2/3}}{U^{2-2\sigma}}\le\frac{4q-3t}{27}\le\frac23\left(u-\tfrac32\ell\right),$$ so the ratio is $O_\eta(P^{16\epsilon})$. [step 1.1, step 2.1, step 3.1, given, algebra]

5.1 If $a=3$, the condition $U<(2Y_H)^4$ gives $u-2\ell\le O_\eta(1)+32\epsilon p$. Again using $\sigma\ge3/4$, $$\log\frac{D U^{(4-6\sigma)3/4}}{U^{2-2\sigma}}\le\frac{q-3t}{18}=\frac14(u-2\ell),$$ so this ratio is $O_\eta(P^{8\epsilon})$. If $a\ge4$, the negative exponent and $a/(a+1)\ge4/5$ give $$\log\frac{D U^{(4-6\sigma)a/(a+1)}}{U^{2-2\sigma}}\le2q+t-\frac9{10}u=-\frac t5\le0.$$ Thus each color has at most $C_\eta P^{18\epsilon}B^{20(1-\sigma)/9}$ zero occurrences. [step 3.1, step 4.1, given, algebra]

6.1 Sum over $O(\log P)$ colors and restore the $O((\log P)^3)$ excluded conductor-one zeros. Since $B^{20(1-\sigma)/9}\ge1$, absorb the logarithms into $P^\epsilon$. The estimate $P\le5C_{\alpha,\delta_0}QT\le C_\eta B$ and $19\epsilon\le\eta$ give $$N_2(\sigma,Q,T)\ll_\eta B^{20(1-\sigma)/9+\eta}.$$ Together with step 1.1 and the bounded-parameter case in step 2.1, this proves the Statement. [F3, step 1.1, step 2.1, step 3.1, step 5.1, given, algebra] ∎
