---
id: ex-additive-energy-of-an-arithmetic-progression
kind: example
title: "Additive energy of an interval in a cyclic group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [thm-additive-energy-fourier-identity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§2.3, Definition 2.8, and §4.2, equation (4.14), printed pp. 59 and 157–158"
verification:
  precheck: pass
---

## Example

Let $m\ge1$ and $N\ge2m-1$ be integers, let $G=\mathbb Z/N\mathbb Z$, and let $A=\{[0]_N,[1]_N,\ldots,[m-1]_N\}$. Define $E(A)$ as the number of ordered quadruples $(a,b,c,d)\in A^4$ with $a+b=c+d$ in $G$, and use the negative-sign unitary DFT $\widehat f(\xi)=N^{-1/2}\sum_{x=0}^{N-1}f([x]_N)e^{-2\pi i\xi x/N}$, where any integer representative of $\xi$ gives the same value. Then

$$E(A)=\frac{2m^3+m}{3}\qquad\text{and}\qquad\sum_{\xi\in G}|\widehat{1_A}(\xi)|^4=\frac{2m^3+m}{3N}.$$

## Example references

[Tao and Vu, *Additive Combinatorics*, §§2.3 and 4.2](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)


## Facts & Assumptions

**Given:** Integers $m\ge1$ and $N\ge2m-1$, $G=\mathbb Z/N\mathbb Z$, and $A=\{[0]_N,\ldots,[m-1]_N\}$.

[A1] The integer representatives of elements of $A$ are exactly $0,\ldots,m-1$.

[F1] For any $B\subseteq G$, $E(B)$ counts ordered quadruples $(a,b,c,d)\in B^4$ with $a+b=c+d$ in $G$, and $E(B)=N\sum_{\xi\in G}|\widehat{1_B}(\xi)|^4$ ([[thm-additive-energy-fourier-identity]]).

## Verification

**Given:** The data in [A1], and the additive-energy Fourier identity [F1].

1.1 For $a,b,c,d\in A$, the integer sums $a+b$ and $c+d$ lie between $0$ and $2m-2$. Their difference has absolute value at most $2m-2<N$, so if they are congruent modulo $N$ then they are equal as integers. Conversely, equal integer sums are congruent modulo $N$. Thus the cyclic-group quadruples counted by $E(A)$ are exactly the integer quadruples in $[0,m-1]^4$ with equal pair sums. [A1, algebra]

2.1 For an integer $s\in[0,2m-2]$, the number $r(s)$ of ordered pairs $(a,b)\in[0,m-1]^2$ with $a+b=s$ is $s+1$ for $0\le s\le m-1$, and $2m-1-s$ for $m\le s\le2m-2$. Each equal-sum quadruple is a pair of such representations with the same $s$, so [F1]'s count gives $E(A)=\sum_{s=0}^{2m-2}r(s)^2=\sum_{j=1}^{m}j^2+\sum_{j=1}^{m-1}j^2$. [A1, F1, step 1.1, construct]

3.1 Using $\sum_{j=1}^{q}j^2=q(q+1)(2q+1)/6$ for each integer $q\ge0$, the preceding sum is $m^2+(m-1)m(2m-1)/3=(2m^3+m)/3$. This also covers $m=1$, when the second sum is empty. [step 2.1, algebra]

4.1 Apply the Fourier identity in [F1] to $A$ and substitute step 3.1 to obtain $\sum_{\xi\in G}|\widehat{1_A}(\xi)|^4=E(A)/N=(2m^3+m)/(3N)$. [F1, step 3.1, algebra] ∎

## Remarks

The condition $N\ge2m-1$ is sharp for this no-wrap argument: it makes the largest possible pair-sum difference strictly less than $N$.
