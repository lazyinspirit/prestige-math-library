---
id: ex-prime-decomposition-cubic-at-five
kind: example
title: Prime decomposition of X^3-X-1 at 5
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-prime-ideal-decomposition-from-integral-basis
  - thm-prime-ideal-decomposition-algorithm-correct
  - cor-squarefree-power-basis-discriminant-gives-ring-of-integers
  - thm-dedekind-kummer-prime-factorisation
  - def-finite-field-and-its-order
  - thm-polynomial-ring-over-a-field-is-a-ufd
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
verification: {}
---

## Example

Let $f(X)=X^3-X-1$, let $\alpha$ be a root, and let $K=\mathbb Q(\alpha)$. The power-basis trace Gram determinant is $d_K=-23$, so $\mathcal O_K=\mathbb Z[\alpha]$ and $5$ does not divide the power-order index. Modulo $5$, $f=(X-2)(X^2+2X+3)$, and the quadratic factor has nonsquare discriminant $2$. The integral-basis prime-decomposition algorithm returns $P_1=(5,\alpha-2)$ and $P_2=(5,\alpha^2+2\alpha+3)$, with residue degrees $1,2$ and ramification exponents $1,1$; hence $(5)=P_1P_2$.

## Example references

[[alg-prime-ideal-decomposition-from-integral-basis|integral-basis prime algorithm]]

[[thm-prime-ideal-decomposition-algorithm-correct|algorithm correctness theorem]]

[[cor-squarefree-power-basis-discriminant-gives-ring-of-integers|squarefree discriminant criterion]]

[[thm-dedekind-kummer-prime-factorisation|Dedekind–Kummer cross-check]]

[Stein, Algorithms 4.3.7–4.3.9](https://wstein.org/books/ant/ant.pdf)

## Diagram

The quotient maps used for the Chinese-remainder splitting are shown below. The left vertical map sends $\alpha$ to $(2,\bar X)$, and the right vertical map is the canonical CRT isomorphism.

\[
\begin{tikzcd}
\mathcal O_K/5\mathcal O_K \arrow[r,"\alpha\mapsto X", "\sim"'] \arrow[d,"\alpha\mapsto(2,\bar X)"'] & \mathbb F_5[X]/((X-2)(X^2+2X+3)) \arrow[d,"\mathrm{CRT}","\sim"'] \\
\mathbb F_5\times\mathbb F_5[X]/(X^2+2X+3) \arrow[r,equal] & \mathbb F_5\times\mathbb F_{25}
\end{tikzcd}
\]

Both paths send $\alpha$ to $(2,\bar X)$, so the square commutes; the lower quadratic quotient is a field because the factor is irreducible.

## Facts & Assumptions

**Given:** The polynomial $f(X)=X^3-X-1$ and the prime $5$.

[F1] A squarefree power-basis discriminant implies that the power order is the full ring of integers ([[cor-squarefree-power-basis-discriminant-gives-ring-of-integers]]).

[F2] The finite-algebra algorithm returns all prime ideals above $5$, their ramification exponents, and residue degrees ([[alg-prime-ideal-decomposition-from-integral-basis]], [[thm-prime-ideal-decomposition-algorithm-correct]]).

[F3] Pairwise coprime factors give the Chinese-remainder quotient decomposition, and an irreducible quadratic over $\mathbb F_5$ gives a field of order $25$ ([[thm-chinese-remainder-theorem-for-comaximal-ideals]], [[thm-polynomial-ring-over-a-field-is-a-ufd]], [[thm-z-mod-p-is-a-field]], [[def-finite-field-and-its-order]]).

[F4] The residue degree is the residue-field extension degree, and the ramification index is the prime exponent in the ideal factorization ([[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

## Proof



1.1 With $\alpha^3=\alpha+1$, the power sums are $\operatorname{Tr}(1)=3$, $\operatorname{Tr}(\alpha)=0$, $\operatorname{Tr}(\alpha^2)=2$, $\operatorname{Tr}(\alpha^3)=3$, and $\operatorname{Tr}(\alpha^4)=2$. Thus the trace Gram matrix in $1,\alpha,\alpha^2$ is [given]
$$G=\begin{pmatrix}3&0&2\\0&2&3\\2&3&2\end{pmatrix},\qquad\det G=-23.$$
Since $23$ is squarefree, [F1] gives $\mathcal O_K=\mathbb Z[\alpha]$; the order index is $1$, so $5$ does not divide it. [F1, given, algebra]

1.2 Modulo $5$, $(X-2)(X^2+2X+3)=X^3-X-1$. The quadratic discriminant is $2^2-4\cdot3=-8\equiv2\pmod5$, and the nonzero squares modulo $5$ are $1,4$, so the quadratic is irreducible. The two factors are coprime because the quadratic evaluated at $2$ is $1$ modulo $5$. [given, algebra]

2.1 The CRT map sends a polynomial class to its value at $2$ in $\mathbb F_5$ and its class modulo $X^2+2X+3$. Its kernels pulled back to $\mathcal O_K$ are $P_1=(5,\alpha-2)$ and $P_2=(5,\alpha^2+2\alpha+3)$. Their quotient cardinalities are $5$ and $5^2=25$, so their residue degrees are $1$ and $2$ by [F4]. The Diagram section depicts these same maps, but this verification follows directly from the quotient description. [F2, F3, F4, step 1.2, algebra]

3.1 The quotient is a product of fields, so its nilradical is zero and both local factors have nilpotency index $1$. The algorithm therefore returns ramification exponents $1,1$; CRT gives $5\mathcal O_K=P_1\cap P_2=P_1P_2$ because the kernels are comaximal. [F2, F3, step 2.1, algebra] ∎

