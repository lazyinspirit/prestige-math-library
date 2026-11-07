---
id: ex-bounded-ideal-enumeration-q-sqrt-minus-five
kind: example
title: Enumerate bounded-norm ideals in Q(sqrt -5)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-integral-ideals-of-bounded-norm
  - thm-integral-ideal-enumeration-correct
  - thm-ring-of-integers-of-a-quadratic-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Proposition 6.3.6"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Example

Let $K=\mathbb Q(s)$ with $s^2=-5$ and integral basis $1,s$. The bounded-ideal HNF search with norm bound $B=3$ returns exactly the unit ideal of norm $1$, the ideal $(2,1+s)$ of norm $2$, and the two ideals $(3,1+s)$ and $(3,2+s)$ of norm $3$; the latter correspond to $s\equiv-1$ and $s\equiv1\pmod3$. This list alone does not determine ideal-class relations.

## Example references

[[alg-integral-ideals-of-bounded-norm|bounded-ideal search algorithm]]

[[thm-integral-ideal-enumeration-correct|enumeration correctness theorem]]

[[thm-ring-of-integers-of-a-quadratic-field|quadratic integer basis]]

[Stein, Proposition 6.3.6](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The field $K=\mathbb Q(s)$ with $s^2=-5$ and the integer bound $B=3$.

[F1] Since $-5$ is squarefree and is not $1$ modulo $4$, $\mathcal O_K=\mathbb Z[s]$ ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F2] The search retains exactly the HNF lattices stable under multiplication by the integral basis ([[alg-integral-ideals-of-bounded-norm]], [[thm-integral-ideal-enumeration-correct]]).

## Proof



1.1 Every candidate is $H=\begin{pmatrix}a&b\\0&d\end{pmatrix}$ with $a,d>0$, $0\le b<a$, and $ad\le3$. The possibilities are $I_2$, $\begin{pmatrix}1&0\\0&2\end{pmatrix}$, $\begin{pmatrix}2&0\\0&1\end{pmatrix}$, $\begin{pmatrix}2&1\\0&1\end{pmatrix}$, $\begin{pmatrix}1&0\\0&3\end{pmatrix}$, and $\begin{pmatrix}3&b\\0&1\end{pmatrix}$ for $b=0,1,2$. [F1, given, algebra]

2.1 In the basis $1,s$, multiplication by $s$ has matrix $M_s=\begin{pmatrix}0&-5\\1&0\end{pmatrix}$. A candidate lattice is an ideal exactly when both columns of $M_sH$ lie in $H\mathbb Z^2$, because $1,s$ generate the ring. For $H=\begin{pmatrix}1&0\\0&2\end{pmatrix}$, $s\cdot1=s$ is not in the lattice. For $H=\begin{pmatrix}2&0\\0&1\end{pmatrix}$, $s\cdot s=-5$ is not in the lattice. For $H=\begin{pmatrix}2&1\\0&1\end{pmatrix}$, the products of its basis columns $(2,0),(1,1)$ are $(0,2)$ and $(-5,1)$, both in the lattice. [F1, step 1.1, algebra]

3.1 For $H=\begin{pmatrix}3&b\\0&1\end{pmatrix}$, the first basis column $(3,0)$ maps to $(0,3)$, which is always in the lattice. The second column $(b,1)$ maps to $(-5,b)$; this lies in the lattice exactly when $-5\equiv b^2\pmod3$. Since $-5\equiv1\pmod3$, this holds exactly for $b=1,2$. The candidate $I_2$ is the unit ideal, and all other candidates fail the stability filter. [F2, step 1.1, step 2.1, algebra]

4.1 The retained HNF matrices are therefore $I_2$, $\begin{pmatrix}2&1\\0&1\end{pmatrix}$, $\begin{pmatrix}3&1\\0&1\end{pmatrix}$, and $\begin{pmatrix}3&2\\0&1\end{pmatrix}$. Their columns give the ideals and determinant norms in the Example. The output is an enumeration only; it gives no ideal-class relations by itself. [F2, step 1.1, step 2.1, step 3.1] ∎

