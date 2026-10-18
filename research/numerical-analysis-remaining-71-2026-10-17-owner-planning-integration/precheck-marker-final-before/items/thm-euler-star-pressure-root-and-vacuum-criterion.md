---
id: thm-euler-star-pressure-root-and-vacuum-criterion
kind: theorem
title: "The ideal-gas star-pressure root exists uniquely exactly below vacuum threshold"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-euler-star-pressure-response
  - lem-euler-acoustic-wave-pressure-response
  - thm-intermediate-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.2, printed pp. 91–93: exact Euler Riemann solution and pressure equation"
---

## Statement

For the data of [[def-euler-star-pressure-response]], let
$$\Phi(0+):=u_R-u_L-\frac{2(c_L+c_R)}{\gamma-1}.$$
If $\Phi(0+)<0$, then $\Phi$ has exactly one zero $p_*>0$. By the acoustic
wave-response lemma this is the unique positive pressure at which the left and
right wave curves can be joined by a contact. It lies in the
explicit bracket $0<p_*<P$, where, writing
$D=\max\{0,u_L-u_R\}$ and $K=\sqrt{A_L}+\sqrt{A_R}$,
$$P=2\max\{p_L,p_R\}+\frac{6D^2}{K^2}+p_L.$$
If $\Phi(0+)\ge0$, then there is no positive matching pressure. The limiting
left and right rarefaction-tail velocities are ordered with a vacuum gap, or
coincide at the zero-pressure equality threshold. No other vacuum condition is
asserted.

## Facts & Assumptions

**Given:** Positive densities and pressures, $\gamma>1$, and the response functions from [[def-euler-star-pressure-response]].

[F1] [[def-euler-star-pressure-response]]: on each side the rarefaction and shock formulas define $f_K(p)$ and $\Phi(p)=f_L(p)+f_R(p)+u_R-u_L$ for $p>0$.

[F2] [[thm-intermediate-value]]: a continuous function on a closed real interval takes every value between its endpoint values.

[F3] [[lem-euler-acoustic-wave-pressure-response]]: the matching equation for the left 1-wave, contact, and right 3-wave is $\Phi(p)=0$; the limiting tail velocities differ by $\Phi(0+)$.

## Proof

1.1 On $0<p\le p_K$, differentiation gives $f'_K(p)=\frac{c_K}{\gamma p_K}\left(\frac p{p_K}\right)^{-(\gamma+1)/(2\gamma)}>0$; on $p\ge p_K$, it gives $f'_K(p)=\frac{\sqrt{A_K}(p+p_K+2B_K)}{2(p+B_K)^{3/2}}>0$. At $p=p_K$ both derivatives equal $1/\sqrt{\gamma\rho_Kp_K}$, so $f_K$ is $C^1$ and strictly increasing on $(0,\infty)$. Thus $\Phi$ is also $C^1$ and strictly increasing. [given, F1, algebra]

1.2 For $p\ge2p_K$, we have $p-p_K\ge p/2$ and $p+B_K\le3p/2$, because $0<B_K<p_K\le p/2$. The shock formula therefore gives $f_K(p)\ge\sqrt{A_Kp/6}$. The stated $P$ exceeds both $2p_K$ and $6D^2/K^2$, so $f_L(P)+f_R(P)\ge K\sqrt{P/6}>D$, and consequently $\Phi(P)>0$. [F1, algebra]

2.1 The rarefaction formula in [F1] tends to $-2c_K/(\gamma-1)$ as $p\downarrow0$, hence $\lim_{p\downarrow0}\Phi(p)=\Phi(0+)$. If this limit is nonnegative, strict increase makes $\Phi(p)>0$ for every $p>0$, so there is no positive zero. [step 1.1, F1, algebra]

3.1 If $\Phi(0+)<0$, continuity at the extended endpoint $0$ gives some $\epsilon\in(0,P)$ with $\Phi(\epsilon)<0$. Applying [F2] to $\Phi$ on $[\epsilon,P]$ gives a zero in $(\epsilon,P)$; strict increase from step 1.1 makes it unique on $(0,\infty)$. Thus $0<p_*<P$. [step 1.1, step 2.1, step 1.2, F2, choose]

4.1 By [F3], the left limiting tail velocity is $u_L+2c_L/(\gamma-1)$ and the right limiting tail velocity is $u_R-2c_R/(\gamma-1)$; their difference is $\Phi(0+)$. If it is nonnegative, the tails leave a vacuum gap or meet at equality. If negative, step 3.1 gives the unique positive pressure at which the two wave responses match and the LD contact joins their star states. This proves the stated threshold and matching interpretation. [step 2.1, step 3.1, F3, algebra] ∎
