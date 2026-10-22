---
id: ex-knot-kt-20-worked-cases
kind: example
title: Figure-eight A-polynomial calculation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - lem-sl-two-character-trace-coordinate-model
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable
  - lem-knot-a-polynomial-boundary-elimination
  - thm-a-polynomial-boundary-restriction-and-surgery-detector
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-figure-eight-character-and-longitude-traces
  - lem-gauss-lemma-over-a-ufd
  - lem-figure-eight-two-meridian-presentation-and-preferred-longitude-word
justified_by: []
proof_strategy: direct
axiom_use: The finite matrix and polynomial calculations are choice-free; the
  actual character quotient and peripheral data retain their full-AC supplier
  branch.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Kathleen L. Petersen, A-polynomials of a family of two-bridge knots,
        §§3–4 and §7.2
      url: https://nyjm.albany.edu/j/2015/21-39v.pdf
    - title: Léo Bénard, Vincent Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, Example 3.20 and §4.1
      url: https://arxiv.org/pdf/2103.14151
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, §2
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
---

## Example

Let $K=J(2,-2)$ be the figure-eight knot with its positive meridian $\mu$ and preferred longitude $\lambda$. The enhanced A-polynomial is
$$\widetilde A_K(M,L)=M^4L^2+(-M^8+M^6+2M^4+M^2-1)L+M^4,$$
and the ordinary A-polynomial is $(L-1)\widetilde A_K(M,L)$, up to a Laurent unit.

## Example references

[[def-knot-a-polynomial|Ordinary A-polynomial and abelian component]]

[[def-enhanced-a-polynomial|Enhanced A-polynomial]]

[[lem-figure-eight-character-and-longitude-traces|Figure-eight character curve and longitude trace]]

[Petersen, §§3–4 and §7.2](https://nyjm.albany.edu/j/2015/21-39v.pdf)

[Bénard, Florens, and Rodau, Example 3.20 and §4.1](https://arxiv.org/pdf/2103.14151)

[Cooper, Culler, Gillet, Long, and Shalen, §2](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

## Facts & Assumptions

**Given:** The standard figure-eight knot, its positive meridian and preferred longitude, and the eigenvalue convention in which the peripheral matrices have diagonal entries $(M,M^{-1})$ and $(L,L^{-1})$ on a common invariant line.

[F1] On the one-dimensional irreducible character component, $x=\operatorname{tr}(\rho(\mu))$ and $\operatorname{tr}(\rho(\lambda))=x^4-5x^2+2$ ([[lem-figure-eight-character-and-longitude-traces]]).

[F2] On a common invariant line of the commuting peripheral pair, $\operatorname{tr}(\rho(\mu))=M+M^{-1}$ and $\operatorname{tr}(\rho(\lambda))=L+L^{-1}$ ([[def-sl-two-character-variety-and-peripheral-eigenvalues]]; [[lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable]]).

[F3] The Laurent polynomial ring over $\mathbb C$ is a localization of the finite-variable polynomial UFD ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]); Gauss's lemma passes irreducibility from its fraction field to a primitive polynomial over this UFD ([[lem-gauss-lemma-over-a-ufd]]).

[F4] The concrete two-meridian presentation and preferred longitude are proved in [[lem-figure-eight-two-meridian-presentation-and-preferred-longitude-word]]. A reducible representation is upper triangular with equal diagonal characters on $u,v$, and this explicit longitude has exponent sum zero. Hence its longitude eigenvalue is one. Conversely $u=v=\operatorname{diag}(M,M^{-1})$ realizes $(M,1)$ for every $M\ne0$.

## Verification

1.1 Put $x=M+M^{-1}$. By [F1] and [F2], $L+L^{-1}=x^4-5x^2+2$. Since $x^2=M^2+2+M^{-2}$ and $x^4=M^4+4M^2+6+4M^{-2}+M^{-4}$, the right side is $M^4-M^2-2-M^{-2}+M^{-4}$. Multiplying by the unit $M^4L$ gives $$Q(M,L)=M^4L^2+(-M^8+M^6+2M^4+M^2-1)L+M^4=0.$$ Thus every eigenvalue pair from an irreducible representation lies on this explicit Laurent curve. [F1, F2, construct, algebra]

2.1 **Irreducibility is checked by an exact factorization.** Put $X=M^2$ and $B(X)=-X^4+X^3+2X^2+X-1$. As a quadratic in $L$, $Q=X^2L^2+B(X)L+X^2$ has discriminant $$B(X)^2-4X^4=(X-1)^2(X+1)^2(X^2+X+1)(X^2-3X+1).$$ This follows by factoring $B-2X^2=-(X-1)^2(X^2+X+1)$ and $B+2X^2=-(X+1)^2(X^2-3X+1)$. A root $r$ of $X^2-3X+1$ is nonzero, is simple, and is neither $1,-1$ nor a root of $X^2+X+1$: subtracting the two quadratics at a common root would give $4r=0$. Each square root $M$ of $r$ is consequently a simple zero of the discriminant after substitution $X=M^2$, since $2M\ne0$. Thus the discriminant is not a square in $\mathbb C(M)$. The quadratic $Q$ is irreducible over $\mathbb C(M)$, and [F3] gives its irreducibility in the Laurent polynomial ring; its nonzero constant term excludes an inverted $L$ factor. [F3, step 1.1, construct, algebra]

2.2 **There are actual representations with infinitely many meridian values.** Use the presentation $\langle u,v\mid vw=wu\rangle$, $w=uv^{-1}u^{-1}v$, from [F4]. For $M\ne0$, put $a=M^2+M^{-2}-3$, $F=t^2+at-a$ and $$A=\begin{pmatrix}M&1\\0&M^{-1}\end{pmatrix},\qquad B=\begin{pmatrix}M&0\\t&M^{-1}\end{pmatrix},\qquad W=AB^{-1}A^{-1}B.$$ Both matrices have determinant one. Multiplication gives $$BW-WA=\begin{pmatrix}0&-F\\tF&0\end{pmatrix},$$ so each root of $F=0$ defines an actual representation with $\rho(u)=A$, $\rho(v)=B$. Exclude $M=\pm1$ and the finitely many solutions of $a=0$. The monic quadratic $F$ has a complex root $t$, and $F(0)=-a\ne0$ makes $t\ne0$. Write $d=M-M^{-1}\ne0$. The only eigenlines of $A$ are $\mathbb C(1,0)$ and $\mathbb C(1,-d)$. The first is not $B$-invariant since $t\ne0$; the second is $B$-invariant exactly when $t=-d^2$. Since $d^2=a+1$, substitution gives $F(-d^2)=1$, excluding that case. Thus the representation is irreducible. Commutation with $A$ makes the preferred longitude preserve its $M$-eigenline, producing an eigenvalue pair $(M,L)$. Infinitely many distinct $M$ remain, and their pairs satisfy $Q=0$ by step 1.1. No normal-form converse or image-completeness theorem is assumed. [F2, F4, step 1.1, construct, algebra]

3.1 **The exact curve vanishing ideal follows by polynomial Euclid.** Suppose a Laurent polynomial $P(M,L)$ vanishes on all those irreducible eigenvalue pairs. If $Q$ does not divide $P$ in $\mathbb C(M)[L^{\pm1}]$, step 2.1 makes their gcd one. The finite Euclidean algorithm gives a Bezout identity there. Clearing its finitely many nonzero denominators in $M$, while retaining the already allowed Laurent powers of $L$, gives Laurent coefficients $U,V$ and a nonzero Laurent polynomial $h(M)$ with $UP+VQ=h(M)$. Step 2.2 would make $h(M)$ vanish at infinitely many nonzero meridian values, impossible for a nonzero one-variable Laurent polynomial. Therefore $Q$ divides $P$. Its primitive irreducible Laurent equation from step 2.1 and [F3] then divides $P$ in $\mathbb C[M^{\pm1},L^{\pm1}]$ itself. The converse is step 1.1. Hence the vanishing ideal of the full irreducible peripheral eigenvalue locus is exactly $(Q)$, and its reduced closure is the whole $Q$ curve. This includes any exceptional central or parabolic pairs, since they too satisfy step 1.1, while the dense family already forces this ideal. [F3, step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 Reducible representations contribute precisely $L=1$ by [F4]. Since $Q(M,1)=-M^8+M^6+4M^4+M^2-1$ is not identically zero, $Q$ and $L-1$ are distinct irreducible Laurent factors. The defining reduced union has ideal $(Q)\cap(L-1)=((L-1)Q)$ by [F3]. By the ordinary and enhanced definitions, the enhanced equation is $Q$ and the ordinary one is $(L-1)Q$, up to a Laurent unit. The displayed integer polynomials are primitive and square-free. This proves both formulas using the actual representation family and preferred longitude, rather than an assumed image-completeness premise. [F3, F4, step 2.1, step 3.1, construct, algebra] ∎

## Diagram

The braid box records the word $\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}$ whose closure is $J(2,-2)$. In each positive crossing the left incoming strand passes over the right incoming strand; in each negative crossing the right incoming strand passes over the left. The boxes are read from top to bottom. The closure arcs outside the box are omitted, and the algebraic verification does not rely on the diagram.

```tikz
\begin{tikzpicture}[scale=0.8,thick]
  \draw[gray!45] (0,0) rectangle (3,4);
  \node[left] at (0,3.5) {$\sigma_1$};
  \node[left] at (0,2.5) {$\sigma_2^{-1}$};
  \node[left] at (0,1.5) {$\sigma_1$};
  \node[left] at (0,0.5) {$\sigma_2^{-1}$};
  % First crossing: positive sigma_1, with the left strand over.
  \draw (1,4)--(0.58,3.58) (0.42,3.42)--(0,3);
  \draw (2,4)--(2,3);
  \draw (0,4)--(1,3);
  % Second crossing: negative sigma_2, with the right strand over.
  \draw (0,3)--(0,2);
  \draw (1,3)--(1.42,2.58) (1.58,2.42)--(2,2);
  \draw (2,3)--(1,2);
  % Third crossing: positive sigma_1.
  \draw (1,2)--(0.58,1.58) (0.42,1.42)--(0,1);
  \draw (2,2)--(2,1);
  \draw (0,2)--(1,1);
  % Fourth crossing: negative sigma_2.
  \draw (0,1)--(0,0);
  \draw (1,1)--(1.42,0.58) (1.58,0.42)--(2,0);
  \draw (2,1)--(1,0);
  \node[below] at (1.5,-0.35) {three braid strands; matching endpoints are closed outside the box};
\end{tikzpicture}
```
