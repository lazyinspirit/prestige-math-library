---
id: ex-prime-decomposition-at-index-prime-q-sqrt-seventeen
kind: example
title: Prime decomposition at an index-dividing prime in Q(sqrt 17)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-prime-ideal-decomposition-from-integral-basis
  - thm-prime-ideal-decomposition-algorithm-correct
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - cor-order-index-discriminant-formula
  - thm-dedekind-kummer-prime-factorisation
  - thm-power-basis-discriminant-is-polynomial-discriminant
  - def-finite-field-and-its-order
  - thm-z-mod-p-is-a-field
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-chinese-remainder-theorem-for-comaximal-ideals
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Algorithms 4.3.7–4.3.9"
      url: "https://wstein.org/books/ant/ant.pdf"
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Example 2.46"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification: {}
---

## Example

Let $K=\mathbb Q(s)$ with $s^2=17$ and $\omega=(1+s)/2$. Then $\mathcal O_K=\mathbb Z[\omega]$, the power order $\mathbb Z[s]$ has index $2$, and the maximal-order generator satisfies $X^2-X-4=0$. At the index-dividing prime $2$, its polynomial reduces to $X(X+1)$ over $\mathbb F_2$. The integral-basis prime-decomposition algorithm returns $P_0=(2,\omega)$ and $P_1=(2,\omega+1)$, both of residue degree and ramification exponent $1$, so $(2)=P_0P_1$. A factorization shortcut based on the power order is inadmissible because its index is divisible by $2$.

## Example references

[[alg-prime-ideal-decomposition-from-integral-basis|integral-basis prime algorithm]]

[[thm-prime-ideal-decomposition-algorithm-correct|algorithm correctness theorem]]

[[thm-ring-of-integers-of-a-quadratic-field|quadratic integer basis]]

[[cor-order-index-discriminant-formula|order-index discriminant formula]]

## Diagram

The two maps from the maximal-order quotient are evaluation at the distinct roots $0$ and $1$ of the reduced polynomial:

\[
\begin{tikzcd}
\mathcal O_K/2\mathcal O_K \arrow[r,"\omega\mapsto X", "\sim"'] \arrow[d,"\omega\mapsto(0,1)"'] & \mathbb F_2[X]/(X(X+1)) \arrow[d,"\mathrm{CRT}","\sim"'] \\
\mathbb F_2\times\mathbb F_2 \arrow[r,equal] & \mathbb F_2\times\mathbb F_2
\end{tikzcd}
\]

Both paths send $\omega$ to $(0,1)$; the two component kernels are the prime ideals listed in the Example.

## Facts & Assumptions

**Given:** The quadratic field $K=\mathbb Q(\sqrt{17})$ and the rational prime $2$.

[F1] Since $17$ is squarefree and $17\equiv1\pmod4$, $\mathcal O_K=\mathbb Z[(1+\sqrt{17})/2]$ ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F2] The field discriminant is $17$, the power-basis discriminant of $1,s$ is $68$, and the square of the order index is their ratio ([[cor-discriminant-of-a-quadratic-field]], [[thm-power-basis-discriminant-is-polynomial-discriminant]], [[cor-order-index-discriminant-formula]]).

[F3] The power-order prime-factorization shortcut requires the rational prime not to divide the order index ([[thm-dedekind-kummer-prime-factorisation]]).

[F4] The prime-decomposition algorithm accepts a maximal-order integral basis even at an index-dividing rational prime ([[alg-prime-ideal-decomposition-from-integral-basis]], [[thm-prime-ideal-decomposition-algorithm-correct]]).

[F5] Residue degree is the degree of the residue-field extension, and ramification index is the prime exponent in the ideal factorization ([[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

[F6] Coprime factors give the quotient product decomposition by the Chinese remainder theorem ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

## Proof



1.1 By [F1], $\omega=(1+s)/2$ is an integral basis element and satisfies $\omega^2-\omega-4=0$. By [F2], $[\mathcal O_K:\mathbb Z[s]]^2=68/17=4$, hence the index is $2$. Directly, $s=2\omega-1$, so the power order is $\mathbb Z+2\mathbb Z\omega$ inside $\mathbb Z+\mathbb Z\omega$. [F1, F2, given, algebra]

2.1 Modulo $2$, $X^2-X-4=X^2-X=X(X-1)=X(X+1)$ in $\mathbb F_2[X]$, with distinct roots $0$ and $1$. The CRT isomorphism [F6] identifies $\mathcal O_K/2\mathcal O_K$ with $\mathbb F_2\times\mathbb F_2$ by $\omega\mapsto(0,1)$. The kernels are $(2,\omega)$ and $(2,\omega-1)=(2,\omega+1)$, each with quotient cardinality $2$. The Diagram section illustrates this map, while the quotient computation here proves the assertion directly. [F4, F6, step 1.1, algebra]

3.1 The product decomposition has zero nilradical, so each component has ramification exponent $1$. The two distinct kernels are comaximal and their intersection is $2\mathcal O_K$ by step 2.1; their product equals their intersection. Hence the algorithm returns $(2)=P_0P_1$ with residue degrees and exponents both $1$ by [F5]. By [F3] and step 1.1, the power-order index is divisible by $2$, so the index-coprime hypothesis of the shortcut fails at this prime. [F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎

