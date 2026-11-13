---
title: Rational logarithm and pi enclosures after range reduction
status: draft
research_item: lem-author-2e2d9953c21a-logarithm-and-pi
dependency_level: 0
---

## Prerequisites

- [math:lem-range-reduced-exp-log-and-arctan-series-enclosures](https://alphabetamath.cc/item/lem-range-reduced-exp-log-and-arctan-series-enclosures)
- [math:ex-machin-formula](https://alphabetamath.cc/item/ex-machin-formula)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:thm-principal-inverse-tangent-calculus](https://alphabetamath.cc/item/thm-principal-inverse-tangent-calculus)
- [math:lem-archimedean-property-from-completeness](https://alphabetamath.cc/item/lem-archimedean-property-from-completeness)


## Statement

For a positive rational $x$, choose an integer $j$ with $y=2^{-j}x\in[1,2]$. With $v=(y-1)/(y+1)$, enclose $\log y$ by $L_N(v)\pm E_N(v)$, where $L_N(v)=2\sum_{k=0}^Nv^{2k+1}/(2k+1)$ and $E_N(v)=2|v|^{2N+3}/((2N+3)(1-v^2))$, for $N\ge1$. The same formula at $y=2$ encloses $\log2$; interval addition in $\log x=j\log2+\log y$ gives an enclosure for every positive rational $x$. For $|t|\le1/2$, put $A_N(t)=\sum_{k=0}^N(-1)^kt^{2k+1}/(2k+1)$ and $B_N(t)=|t|^{2N+3}/((2N+3)(1-t^2))$. Then $\pi$ belongs to $16[A_N(1/5)\pm B_N(1/5)]-4[A_N(1/239)\pm B_N(1/239)]$.

## Facts & Assumptions

**Given:** Positive rational $x$ and integer $N\ge1$. The notation $[c\pm e]$ means $[c-e,c+e]$ for $e\ge0$; interval addition and scalar multiplication mean the exact set operations $I+J=\{s+r:s\in I,\ r\in J\}$ and $\lambda I=\{\lambda s:s\in I\}$, without rounding.

[F1] [math:lem-range-reduced-exp-log-and-arctan-series-enclosures](https://alphabetamath.cc/item/lem-range-reduced-exp-log-and-arctan-series-enclosures) supplies the stated finite-sum remainder estimates for $y\in[1,2]$, $|t|\le1/2$ and integer $N\ge1$, and the identity $\ln(2^j y)=j\ln2+\ln y$ for integer $j$ and $y>0$. In that supplier, $\ln y=\int_1^y ds/s$ and its arctangent is $\int_0^t ds/(1+s^2)$.

[F2] [math:ex-machin-formula](https://alphabetamath.cc/item/ex-machin-formula) gives $\pi=16\arctan(1/5)-4\arctan(1/239)$ for the principal inverse tangent.

[F3] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) fixes $\log$ as the inverse of the real exponential. [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) identifies it with $\int_1^y ds/s$ for every $y>0$, so the logarithm estimates and identity in [F1] apply to this $\log$.

[F4] [math:thm-principal-inverse-tangent-calculus](https://alphabetamath.cc/item/thm-principal-inverse-tangent-calculus) identifies the principal inverse tangent with $\int_0^t ds/(1+s^2)$ for every real $t$, so [F1] bounds the same arctangents as [F2].

[F5] [math:lem-archimedean-property-from-completeness](https://alphabetamath.cc/item/lem-archimedean-property-from-completeness) gives the unboundedness of the natural numbers in the complete ordered real field.

## Proof

**Given:** Positive rational $x$ and integer $N\ge1$. The notation $[c\pm e]$ means $[c-e,c+e]$ for $e\ge0$; interval addition and scalar multiplication mean the exact set operations $I+J=\{s+r:s\in I,\ r\in J\}$ and $\lambda I=\{\lambda s:s\in I\}$, without rounding.

**Goal:** Prove the stated logarithm and pi enclosures.

1.1 By induction, $2^n\ge n+1$ for every integer $n\ge0$: the base case is equality and $2(n+1)\ge n+2$ advances the induction. By [F5], choose a natural number $M>\max\{x,x^{-1},1\}$. Then $2^M>x$ and $2^M>x^{-1}$, hence $2^{-M}<x$. The finite set of integers $k\in\{-M,\ldots,M\}$ with $2^k\le x$ is nonempty and has a largest member $j$. Since $2^M>x$, we have $j<M$, and maximality gives $2^j\le x<2^{j+1}$. Thus the rational number $y=2^{-j}x$ satisfies $1\le y<2$. [given, F5, induction, choose, algebra]

1.2 For $s\in[a,b]$ and $r\in[c,d]$, adding the endpoint inequalities gives $a+c\le s+r\le b+d$. Multiplication of $a\le s\le b$ by $\lambda\ge0$ gives $\lambda a\le\lambda s\le\lambda b$; for $\lambda<0$ it gives $\lambda b\le\lambda s\le\lambda a$. These elementary order bounds justify the interval compositions below, including reversal under negative scalar multiplication, for arbitrary real endpoints and therefore for exact rational endpoints. [given, algebra]

2.1 For the $y$ from step 1.1, $v=(y-1)/(y+1)$ lies in $[0,1/3]$. Apply [F1] and the logarithm identification [F3] to $y$ and to $2$, obtaining $\log y\in I_y:=[L_N(v)\pm E_N(v)]$ and $\log2\in I_2:=[L_N(1/3)\pm E_N(1/3)]$. The error radii are nonnegative and their denominators are positive because $N\ge1$ and $|v|\le1/3<1$. The identity from [F1], transferred by [F3], is $\log x=j\log2+\log y$. Hence $\log x\in jI_2+I_y$, with the endpoint rule from step 1.2 reversing the $jI_2$ endpoints when $j<0$. [given, F1, F3, step 1.1, step 1.2, algebra]

3.1 Both $1/5$ and $1/239$ lie in $[-1/2,1/2]$, so [F1] and [F4] enclose their principal arctangents in $[A_N(t)\pm B_N(t)]$. These radii are nonnegative with positive denominators because $N\ge1$ and $t^2\le1/4<1$. Apply step 1.2 with scalars $16$ and $-4$, and then [F2], to obtain exactly the asserted enclosure for $\pi$. For the arguments $y$, $2$, $1/5$ and $1/239$ used here, step 1.1 and finite rational arithmetic make the sums, radii and composed endpoint bounds rational. [given, F1, F2, F4, step 1.1, step 1.2, algebra] ∎
