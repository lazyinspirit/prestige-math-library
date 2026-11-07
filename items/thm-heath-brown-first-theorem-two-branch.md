---
id: thm-heath-brown-first-theorem-two-branch
kind: theorem
title: "Heath–Brown's first hybrid density bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: [def-dirichlet-l-zero-density-counting-functions, lem-primitive-dirichlet-l-zero-count-in-unit-window, thm-dirichlet-l-euler-product, thm-dirichlet-character-orthogonality, lem-heath-brown-target-scale-zero-detection-away-from-half]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite zero-window counts and the explicit Gaussian-detector and sampling interfaces."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "Theorem 2, equation (2), and §3; zero detection is reconstructed through a Gaussian-integrated route"
verification: {}
---

## Statement

For $Q,T\ge1$, let $N_2(\sigma,Q,T)$ count zeros with multiplicity of primitive Dirichlet $L$-functions of conductor at most $Q$ in $\operatorname{Re}s\ge\sigma$, $|\operatorname{Im}s|\le T$. For every $\eta>0$, uniformly for $1/2\le\sigma\le1$,
$$N_2(\sigma,Q,T)\ll_\eta\left(Q^2T^{6/5}\right)^{5(1-\sigma)/(3-\sigma)+\eta}.$$
The implied constant depends only on $\eta$. This is the first estimate in Heath–Brown's Theorem 2; it does not assert the paper's other three density bounds.

## Statement references

[[def-dirichlet-l-zero-density-counting-functions]]

[[lem-heath-brown-target-scale-zero-detection-away-from-half]]

[Heath-Brown, *The Density of Zeros of Dirichlet's L-Functions*, Theorem 2, equation (2)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Facts & Assumptions

**Given:** $Q,T\ge1$, $1/2\le\sigma\le1$, and $\eta>0$ in the Statement.

[F1] A primitive conductor-$d$ $L$-function has $O(\log(d(|t|+3)))$ zeros with multiplicity in each unit-height window in $1/2\le\operatorname{Re}s\le1$, and there are no zeros for real part greater than one. The number of primitive characters of conductor at most $Q$ is at most $Q^2$. [[lem-primitive-dirichlet-l-zero-count-in-unit-window]] [[thm-dirichlet-l-euler-product]] [[thm-dirichlet-character-orthogonality]]

[F2] Away from the critical line, the target-scale Gaussian detector gives a separated-family bound $R\ll P^{2\epsilon}(Q^2T+W)W^{1-2\sigma}$ for some $U^{a/(a+1)}<W\le U$, under its explicit parameter and conductor-one conditions. [[lem-heath-brown-target-scale-zero-detection-away-from-half]]

## Proof

1.1 It suffices to take $0<\eta\le1$. Put $\delta_0=\eta/100$, $\epsilon=\min(1/160,\delta_0/1000,\eta\delta_0/1000)$, $\alpha=20\epsilon$, $B=Q^2T^{6/5}$, and $a(\sigma)=5(1-\sigma)/(3-\sigma)$. By [F1], $N_2\ll Q^2T\log(2QT)$. For $1/2\le\sigma<1/2+\delta_0$, $a(1/2)=1$ and $|a'(\sigma)|\le5/2$, so $a(\sigma)\ge1-\eta/40$. Since $B\ge Q^2T\ge QT$, the trivial estimate is $O_\eta(B^{a(\sigma)+\eta})$. Henceforth $\sigma\ge1/2+\delta_0$. [F1, given, construct, algebra]

2.1 Let $P=C_{\alpha,\delta_0}Q(T+4)$ and $Y_H=P^{1/2+4\epsilon/(2\sigma-1)}$, as in [F2]. Put $$U=(Q^5T^3)^{1/(3-\sigma)},\qquad D=Q^2T.$$ For sufficiently large $QT$, depending only on $\eta$, $P$ exceeds the detector threshold and $2Y_H\le U\le P^3$. Indeed $U\ge(QT)^{6/5}$, while $2Y_H\le2P^{1/2+2\epsilon/\delta_0}$ and $P\asymp_\eta QT$. In fact $U\ge(2Y_H)^2$ for all sufficiently large $QT$, since $2\log(2Y_H)\le(1+4\epsilon/\delta_0)\log(QT)+O_\eta(1)$ and $1+4\epsilon/\delta_0<6/5$. Thus the integer $a$ in [F2] is at least $2$. The complementary bounded $QT$ range follows from [F1] after increasing the $\eta$-constant. [F1, F2, step 1.1, given, algebra]

3.1 Exclude the conductor-one zeros with $|\gamma|\le(\log P)^2$; by [F1] there are $O((\log P)^3)$ such occurrences. For each remaining character label, join two zero occurrences when their ordinates differ by less than one. The unit-window bound gives graph degree $O(\log P)$, so finite greedy coloring gives $O(\log P)$ colors, each one-separated within every label. Apply [F2] to each color with the same $U$ and $A=3$. For some $W$ depending on that color, $$U^{a/(a+1)}<W\le U,\qquad R_{\mathrm{color}}\ll_\eta P^{2\epsilon}\left(W^{2-2\sigma}+D W^{1-2\sigma}\right).$$ The integer $a$ depends only on $U,Y_H$, not on the color. [F1, F2, step 2.1, given, construct, algebra]

4.1 Put $q=\log Q$, $t=\log T$, $\ell=q+t$, $p=\log P$, and $u=\log U=(5q+3t)/(3-\sigma)$. Then $0\le p-\ell\le c_\eta$ and $$U^{2-2\sigma}=B^{a(\sigma)}.$$ Since $1-2\sigma<0$ and $W>U^{a/(a+1)}$, the second term in step 3.1 is at most $D U^{(1-2\sigma)a/(a+1)}$. If $a=2$, the condition $U<(2Y_H)^3$ gives $$u-\tfrac32\ell\le O_\eta(1)+6\epsilon p/\delta_0.$$ Direct algebra gives $$\log\frac{D U^{(1-2\sigma)2/3}}{U^{2-2\sigma}}=\frac23\left(u-\tfrac32\ell\right)-\frac q3,$$ so the ratio is $O_\eta(P^{4\epsilon/\delta_0})$. [step 1.1, step 2.1, step 3.1, given, algebra]

5.1 If $a=3$, $U<(2Y_H)^4$ gives $u-2\ell\le O_\eta(1)+8\epsilon p/\delta_0$, and direct algebra yields $$\log\frac{D U^{(1-2\sigma)3/4}}{U^{2-2\sigma}}=\frac14(u-2\ell).$$ Thus this ratio is $O_\eta(P^{2\epsilon/\delta_0})$. If $a\ge4$, the negative exponent and $a/(a+1)\ge4/5$ give $$\log\frac{D U^{(1-2\sigma)a/(a+1)}}{U^{2-2\sigma}}\le2q+t-\frac25(3-\sigma)u=-\frac t5\le0.$$ All three cases therefore bound a color by $C_\eta P^{2\epsilon+4\epsilon/\delta_0}B^{a(\sigma)}$. [step 3.1, step 4.1, given, algebra]

6.1 Sum over the $O(\log P)$ colors and restore the $O((\log P)^3)$ excluded conductor-one occurrences. Since $B^{a(\sigma)}\ge1$, a fixed logarithmic loss is $O_\eta(P^\epsilon)$. Also $P\le5C_{\alpha,\delta_0}QT\le C_\eta B$, and the choice of $\epsilon$ makes $3\epsilon+4\epsilon/\delta_0\le\eta$. Hence $$N_2(\sigma,Q,T)\ll_\eta B^{a(\sigma)+\eta}.$$ This covers the unbounded away-from-half range; steps 1.1–2.1 cover the critical-line neighborhood and bounded parameters. [F1, step 1.1, step 2.1, step 3.1, step 5.1, given, algebra] ∎
