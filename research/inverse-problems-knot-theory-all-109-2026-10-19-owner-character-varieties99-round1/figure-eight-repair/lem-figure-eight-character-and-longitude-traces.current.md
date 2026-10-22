---
id: lem-figure-eight-character-and-longitude-traces
kind: lemma
title: "Figure-eight character curve and longitude trace"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - lem-sl-two-character-trace-coordinate-model
  - thm-knot-wirtinger-presentation-correctness
  - ex-knot-kt-01-worked-cases
  - def-knot-meridian-and-preferred-longitude
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Example 3.20"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Kathleen L. Petersen, A-polynomials of a family of two-bridge knots, §§3–4"
      url: "https://nyjm.albany.edu/j/2015/21-39v.pdf"
---

## Statement

Assume full AC and let $K=J(2,-2)$ be the figure-eight knot. Use the two-bridge group presentation $\pi_1(E_K)=\langle u,v\mid v w=w u\rangle$, where $w=uv^{-1}u^{-1}v$, and take $\mu=u$. On the one-dimensional irreducible character component, define $x(\chi)=\operatorname{tr}(\rho(u))=\operatorname{tr}(\rho(v))$ and $y(\chi)=\operatorname{tr}(\rho(uv))$. Then
$$2x^2+y^2-x^2y-y-1=0,$$
and the preferred-longitude trace is $\operatorname{tr}(\rho(\lambda))=x^4-5x^2+2$. The displayed curve equation is irreducible over $\mathbb C$, and $x$ is nonconstant on it.

## Statement references

[Bénard, Florens, and Rodau, Example 3.20](https://arxiv.org/html/2103.14151)

[Petersen, §§3–4](https://nyjm.albany.edu/j/2015/21-39v.pdf)

## Facts & Assumptions

**Given:** Full AC, the standard figure-eight knot, its positive meridian and preferred longitude, and the two-bridge group presentation in the Statement.

[F1] The four-crossing figure-eight code gives a one-component Wirtinger presentation ([[ex-knot-kt-01-worked-cases]]; [[thm-knot-wirtinger-presentation-correctness]]).

[F2] [[lem-figure-eight-two-meridian-presentation-and-preferred-longitude-word]] derives the exact two-meridian presentation from that actual four-crossing code and proves, using its crossing traversal and zero writhe, that the preferred longitude is $C=X_4u^{-1}vX_3^{-1}$ with $X_3=uvu^{-1}$ and $X_4=v^{-1}uvu^{-1}v$. It is not inferred merely from commutation and zero exponent sum.

[F3] [[lem-two-generator-sl2-word-traces-reduce-to-three-coordinates]] proves the actual four-matrix word table. In the equal-generator-trace case, every word trace is a polynomial in $x=\operatorname{tr}u=\operatorname{tr}v$ and $y=\operatorname{tr}uv$.

[F4] Word traces generate the character coordinate algebra by [[lem-sl2-character-trace-coordinate-algebra]]. The actual quotient is onto and any finite algebra generators give its closed affine coordinate model by [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]].

## Proof

1.1 **Every irreducible pair has the required concrete matrix form.** Let $A=\rho(u)$ and $B=\rho(v)$. Relation $vw=wu$ makes them conjugate, hence of equal trace $x$. Choose an eigenvalue $M\ne0$ of $A$ and an eigenvector for it, and choose an eigenvector of $B$ with eigenvalue $M^{-1}$. The two lines are distinct; otherwise they form a common invariant line for the two generators. In this basis $A$ is upper triangular and $B$ is lower triangular, with respective diagonals $(M,M^{-1})$ in both cases. The upper entry of $A$ is nonzero, for otherwise the second line is common; the lower entry of $B$ is nonzero for the same reason on the first line. Rescale the second basis vector to make the upper entry of $A$ equal to one. Thus every irreducible representation is conjugate to $$A=\begin{pmatrix}M&1\\0&M^{-1}\end{pmatrix},\qquad B=\begin{pmatrix}M&0\\t&M^{-1}\end{pmatrix},\qquad t\ne0.$$ This works also at $M=\pm1$; no distinct-eigenvalue hypothesis was used. A scalar adjustment of the conjugating basis matrix gives determinant one if desired. [F1, F2, given, construct, algebra]

2.1 **All relator entries are computed.** Put $a=M^2+M^{-2}-3=x^2-5$ and $F=t^2+at-a$. Direct multiplication gives $$W=AB^{-1}A^{-1}B=\begin{pmatrix}t^2+(M^2-2)t+1&M+M^{-1}(t-1)\\t\bigl(M+M^{-1}(t-1)\bigr)&1+M^{-2}t\end{pmatrix},\qquad BW-WA=\begin{pmatrix}0&-F\\tF&0\end{pmatrix}.$$ Thus the representation relation is exactly $F=0$, not a condition obtained after discarding an extra entry. Conversely a pair with $F=0,t\ne0$ is irreducible. At $M=\pm1$ its two nontrivial unipotent matrices have distinct invariant lines. Otherwise a common line besides the two chosen eigenlines can occur only when $t=-(M-M^{-1})^2$; solving the two eigenvector equations gives this equality. But $F$ evaluated at that value is $1$, since $(M-M^{-1})^2=a+1$. So it never occurs on $F=0$. When $t=0$ the pair is upper triangular and reducible. [step 1.1, construct, algebra]

3.1 **The trace equation and its actual image.** Matrix multiplication gives $$x=M+M^{-1},\qquad y=M^2+M^{-2}+t=x^2-2+t.$$ Substituting $t=y-x^2+2$ into $F$ gives $$f(x,y)=2x^2+y^2-x^2y-y-1.$$ Every irreducible representation therefore maps to $f=0$. Conversely, if $f(x,y)=0$ and $t=y-x^2+2\ne0$, choose a root $M$ of $M^2-xM+1=0$. It is nonzero, and step 2.1 constructs an irreducible representation with those traces. The excluded points with $t=0$ have $x^2=5,y=3$, hence are only two points. In particular this is an actual dense realization of the curve, not merely a necessary trace equation. [step 2.1, construct, algebra]

4.1 **There is exactly one component containing irreducible characters.** The discriminant of the monic quadratic $f$ in $y$ is $$(x^2+1)^2-4(2x^2-1)=(x^2-1)(x^2-5).$$ Each of its four zeros is simple, so it is not a square in $\mathbb C(x)$: a rational square has even zero order. Thus $f$ is irreducible over $\mathbb C(x)$ as a quadratic in $y$, and is irreducible in $\mathbb C[x,y]$. Indeed a factor of $y$-degree zero would divide the leading coefficient one, and two positive-$y$-degree factors would give a factorization over $\mathbb C(x)$. By [F3] and [F4], $x,y$ generate the whole character algebra and give its actual closed planar model. Reducible representations have common triangular diagonal characters; the relation makes their $u,v$ diagonal characters equal, so they lie on $y=x^2-2$. Every point on this parabola is realized by the diagonal pair $A=B=\operatorname{diag}(M,M^{-1})$. Step 3.1 realizes all of $f=0$ except its two intersection points with that parabola, which are also realized diagonally. Hence the full closed character model is precisely the union of that parabola and $f=0$. The latter is the unique irreducible component containing irreducible characters, and $x$ is nonconstant on it because the monic quadratic $f(x,y)$ has a complex root for every $x$. [F3, F4, step 3.1, construct, algebra]

4.2 **The preferred word, not an unspecified centralizer element, is evaluated.** Use exactly the preferred word $C=X_4A^{-1}BX_3^{-1}$ of [F2], with $X_3=ABA^{-1}$ and $X_4=B^{-1}ABA^{-1}B$. Their matrices and the displayed $A,B$ give the Laurent polynomial identity $$\operatorname{tr}C=\bigl(M^4-M^2-2-M^{-2}+M^{-4}\bigr)+F\bigl(x^2(t+1)-tF\bigr).$$ This identity is obtained by the four indicated matrix products and the entry formula for determinant-one inverses; equivalently multiply out with $a=M^2+M^{-2}-3$ to get $\operatorname{tr}C=(x^4-5x^2+2)+F\bigl((a+5)(t+1)-tF\bigr)$. It is an identity before imposing the relator, so no denominator, exceptional parabolic point, or extra component has been canceled. On $F=0$ it gives $\operatorname{tr}\rho(\lambda)=x^4-5x^2+2$ for every irreducible representation. [F2, step 2.1, step 3.1, construct, algebra]

5.1 Word traces are regular functions in the actual character model by [F4]. The irreducible characters are dense in the irreducible curve by steps 3.1–4.1. Consequently the longitude-trace identity of step 4.2 holds on that entire component, including its reducible intersection points. Steps 3.1–4.1 supply exactly the irreducible curve and nonconstant coordinate required in the Statement, with its original full-AC branch retained. No generic trace-model, eigenvalue-image completeness or preferred-longitude calculation remains assumed in this finite computation. [F4, step 3.1, step 4.1, step 4.2, construct] ∎
