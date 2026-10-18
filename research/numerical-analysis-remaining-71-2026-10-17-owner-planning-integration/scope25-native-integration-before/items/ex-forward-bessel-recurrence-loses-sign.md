---
id: ex-forward-bessel-recurrence-loses-sign
kind: example
title: An arbitrarily small seed perturbation flips a later Bessel sign
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, def-bessel-complementary-recurrence-solution, lem-integer-order-bessel-series-tail, lem-integer-order-bessel-recurrences-and-ode, thm-certified-integer-order-bessel-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §10.6(i), recurrence relations
      url: https://dlmf.nist.gov/10.6
    - title: DLMF, §§3.6(iii) and 10.6(i)
      url: https://dlmf.nist.gov/3.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 8
---

## Statement

At $x=1$, every $J_n(1)$ is positive and tends to zero as $n\to\infty$,
whereas the complementary recurrence solution $D_n(1)$ defined in
[[def-bessel-complementary-recurrence-solution]] is positive and unbounded
for $n\ge1$. Hence, for every $\varepsilon>0$, the perturbed seed pair
$$\widetilde J_0=J_0(1)-\varepsilon D_0(1),\qquad \widetilde J_1=J_1(1)-\varepsilon D_1(1)$$
can be arbitrarily close to the exact seeds, yet its forward recurrence
solution $\widetilde J_n=J_n(1)-\varepsilon D_n(1)$ is negative for some
index where the exact $J_n(1)$ is positive. This is a recurrence-sensitivity
example, not a claim that every floating-point implementation follows this
particular error direction.

## Facts & Assumptions

**Given:** The Bessel series at $x=1$, the order recurrence, and the
complementary solution $D$.

[F1] [[def-integer-order-bessel-series]]: at $x=1$,
$J_n(1)=\sum_{k\ge0}(-1)^k(1/2)^{2k+n}/(k!(k+n)!)$.

[F2] [[lem-integer-order-bessel-series-tail]]: these series converge
absolutely, and their successive absolute term ratio is
$1/[4(k+1)(k+n+1)]$ at $x=1$.

[F3] [[lem-integer-order-bessel-recurrences-and-ode]]:
$J_{n+1}(1)=2nJ_n(1)-J_{n-1}(1)$ for $n\ge1$.

[F4] [[def-bessel-complementary-recurrence-solution]]:
$D_0=-J_1$, $D_1=J_0$, and $D_{n+1}=2nD_n-D_{n-1}$ at $x=1$.

## Proof
1.1 Let $a_k=(1/2)^{2k+n}/(k!(k+n)!)$. By [F2], the positive terms $a_k$ decrease strictly to zero. Grouping the alternating series in consecutive pairs gives $J_n(1)=(a_0-a_1)+(a_2-a_3)+\cdots>0$. Also $(k+n)!\ge n!$, so $$0<J_n(1)\le\sum_{k\ge0}a_k \le\frac{2^{-n}}{n!}\sum_{k\ge0}\frac{(1/4)^k}{k!} =\frac{2^{-n}e^{1/4}}{n!}\longrightarrow0.$$ In particular, $J_0(1)\ge1-1/4=3/4$ and $J_1(1)\ge1/2-1/16=7/16$. [F1, F2, algebra]

2.1 By [F4], $D_0(1)=-J_1(1)<0$ and $D_1(1)=J_0(1)>0$; hence $D_2=2D_1-D_0>D_1>0$. If $n\ge2$ and $D_n\ge D_{n-1}>0$, then $D_{n+1}=2nD_n-D_{n-1}\ge(2n-1)D_n\ge3D_n$. Induction gives $D_n\ge3^{n-2}D_2$ for $n\ge2$, so $D_n\to\infty$. [F1, F3, F4, step 1.1, induction]

3.1 The exact sequence $J_n-\varepsilon D_n$ obeys the same linear recurrence by [F3] and [F4], so it is the forward-recurrence solution from the displayed perturbed seeds. Since $J_n\to0$ and $D_n\to\infty$ by steps 1.1 and 2.1, some finite $n$ satisfies $\varepsilon D_n>J_n$. At that index $\widetilde J_n<0<J_n$. The seed differences have magnitudes $\varepsilon|D_0|$ and $\varepsilon|D_1|$, which tend to zero with $\varepsilon$. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎