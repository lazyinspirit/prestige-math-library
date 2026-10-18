---
id: lem-noncommutative-filtered-exponential-and-logarithm
kind: lemma
title: "Exponential and logarithm in a noncommutative complete filtered algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-coefficient-complete-codifferential-deformation
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Marco Manetti, Deformation theory via differential graded Lie algebras, §1"
      url: "https://arxiv.org/pdf/math/0507284"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§1.2, 2.2, 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $E$ be any unital associative $k$-algebra over a characteristic-zero field, with descending two-sided filtration $F^0E=E$, $F^pE\,F^qE\subseteq F^{p+q}E$, and $E\cong\varprojlim E/F^nE$. Commutativity is not assumed. The formulas

$$\exp X=\sum_{j\ge0}\frac{X^j}{j!},\qquad \log(1+N)=\sum_{j\ge1}\frac{(-1)^{j-1}N^j}{j}$$

give mutually inverse bijections $F^1E\leftrightarrow1+F^1E$, and $\exp(-X)$ is the inverse of $\exp X$. For $X\in F^1E$ and $T\in E$,

$$\exp(X)T\exp(-X)=\sum_{r\ge0}\frac{(\operatorname{ad}_X)^r(T)}{r!},\qquad \operatorname{ad}_X(T)=XT-TX.$$

There is also a degreewise-complete graded variant: assume $E=\bigoplus_dE^d$ is a multiplicatively filtered graded algebra with each $E^d\cong\varprojlim_n E^d/(F^nE)^d$. Then exp and log give inverse bijections $(F^1E)^0\leftrightarrow1+(F^1E)^0$, and the displayed conjugation identity holds for $X\in(F^1E)^0$ and any fixed homogeneous $T\in E^d$. The first two series converge in $E^0$ and the conjugation series in $E^d$; no completeness of the ungraded direct sum is required. In particular this variant applies to the degreewise complete endomorphism algebra in [[def-coefficient-complete-codifferential-deformation]] once its completeness is established.

## Facts & Assumptions

**Given:** A complete multiplicatively filtered unital associative algebra $E$, $X,N\in F^1E$, and $T\in E$.

[F1] [[def-coefficient-complete-codifferential-deformation]] specifies the concrete endomorphism algebra and its order filtration for the stated application; the abstract lemma separately assumes completeness.

## Proof

1.1 The terms $X^j$ and $N^j$ belong to $F^jE$. Therefore all displayed series have finite reductions modulo every $F^nE$ and define unique limits. Multiplication respects these limits because the filtration is multiplicative. In particular any one-variable formal series with rational coefficients and zero-order constant defined in $k$ can be evaluated at a positive-order element: each coefficient calculation becomes finite in every quotient. [given, construct]

1.2 In $\mathbb Q[\![t]\!]$, define $\ell(t)=\sum_{j\ge1}(-1)^{j-1}t^j/j$. Termwise differentiation gives $\ell'(t)=(1+t)^{-1}$. The formal chain rule, obtained by expanding products coefficient by coefficient, gives $h'=h/(1+t)$ for $h=\exp\ell(t)$ and $h(0)=1$. From $(1+t)h'=h$ the coefficient recursion gives $h=1+t$: its coefficient of $t$ is $1$ and every higher coefficient is zero. Also the formal derivative of $\ell(\exp(t)-1)$ is $1$ and its constant coefficient is zero, so $\ell(\exp(t)-1)=t$. Each assertion is an identity of scalar coefficient series. [algebra]

1.3 Induction on $r$ proves $(\operatorname{ad}_X)^r(T)=\sum_{j=0}^r(-1)^j\binom rjX^{r-j}TX^j$: the induction step multiplies once on the left and subtracts once on the right, and Pascal's identity collects the overlapping terms. Every summand has filtration order at least $r$, even if $T$ has order zero, so the resulting exponential series converges. [given, algebra]

2.1 Substitute $N$ and $X$ into the two scalar identities modulo $F^nE$ and pass to the inverse limit, using step 1.1. This proves $\exp(\log(1+N))=1+N$ and $\log(\exp X)=X$. The substitution is sound in the noncommutative algebra because every identity involves powers of one fixed element only. The coefficient of total degree $r>0$ in $\exp(X)\exp(-X)$ is $X^r\sum_{j=0}^r(-1)^j/(j!(r-j)!)=0$; the degree-zero coefficient is $1$. Thus the exponential inverse is $\exp(-X)$ and both inverse bijections have the stated domains. [step 1.1, step 1.2, algebra]

3.1 Expanding $\exp(X)T\exp(-X)$ modulo $F^nE$ and collecting the terms containing a total of $r$ copies of $X$ gives $\sum_{j=0}^r(-1)^jX^{r-j}TX^j/((r-j)!j!)=(\operatorname{ad}_X)^r(T)/r!$. Passing to limits gives the conjugation identity. If $E$ is graded and $|X|=0$, its graded commutator with $T$ is exactly the ordinary commutator used here, so the same proof applies in every fixed homogeneous degree. In the degreewise-complete variant, perform the scalar substitutions and exponential inverses entirely in the complete unital algebra $E^0$. Every term $X^{r-j}TX^j$ has degree $d$, so the conjugation coefficient sums and their limit lie in the complete component $E^d$. Multiplicativity gives continuity of the left and right $E^0$ actions on $E^d$, justifying those limits. This proves the graded variant without allowing a sum of endomorphisms in varying degrees. [F1, step 1.1, step 1.3, algebra] ∎
