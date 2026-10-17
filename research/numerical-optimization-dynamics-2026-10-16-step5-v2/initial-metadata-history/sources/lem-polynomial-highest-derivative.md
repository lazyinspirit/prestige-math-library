---
id: lem-polynomial-highest-derivative
kind: lemma
title: "The highest derivative of a polynomial"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-higher-derivatives-and-smoothness
  - lem-derivative-of-a-power
  - thm-induction-principle
  - def-canonical-natural
  - def-factorial-and-falling-factorial
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 3"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
---

## Statement

Let $m\in\mathbb N$, $m\ge1$, and let $p:\mathbb R\to\mathbb R$ be the evaluation function of a formal real polynomial of degree at most $m$, or the zero polynomial. Write its actual coefficient list through its degree and extend that list by zeros to $a_0,\ldots,a_m$ (all zero for the zero polynomial); this is an evaluation vector, not a change to the formal polynomial object. Define iterated derivatives as in [[def-higher-derivatives-and-smoothness]] and write $m!_{\mathbb R}:=\prod_{j<m}(j+1)$, with each natural factor read as its canonical real image under [[def-canonical-natural]]. Then
$$p^{(m)}(x)=a_m m!_{\mathbb R}$$
for every $x\in\mathbb R$. In particular, this derivative is zero if $\deg p<m$, and it is $m!_{\mathbb R}$ if $p$ is monic of degree $m$.

## Facts & Assumptions

**Given:** A natural number $m\ge1$ and the evaluation function and padded coefficient vector of a formal polynomial of degree at most $m$, or of the zero polynomial with its all-zero evaluation vector.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a nonzero formal real polynomial is a finite coefficient list with nonzero final coefficient, and its evaluation is the corresponding finite sum of coefficients times powers. The zero polynomial is a separate formal object with no degree.

[F2] [[def-higher-derivatives-and-smoothness]]: $p^{(0)}=p$ and, wherever $p^{(r)}$ is differentiable, $p^{(r+1)}=(p^{(r)})'$.

[F3] [[lem-derivative-of-a-power]] and [[def-canonical-natural]]: every finite polynomial sum is differentiable term by term; $x^k$ has derivative $kx^{k-1}$ for $k\ge1$, where the natural coefficient is its canonical real image, and $x^0$ is constant with derivative $0$.

[F4] [[thm-induction-principle]]: a property true at $0$ and inherited by successors holds for every natural number.

[F5] [[def-canonical-natural]]: a natural number used as a real scalar denotes its canonical real image; the image of a successor is the image of its predecessor plus $1$.

[F6] [[def-factorial-and-falling-factorial]]: the full falling product $m(m-1)\cdots1$ is the natural factorial $m!$, which is also the natural product $\prod_{j<m}(j+1)$.

[F7] [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: the canonical real image of a finite natural product is the corresponding product of real images, so the product representation of $m!$ in [F6] becomes the stated $m!_{\mathbb R}$.

## Proof

1.1 For a nonzero formal polynomial, [F1] gives $p(X)=\sum_{k=0}^{m}a_kX^k$, since zero padding adds only zero terms. For the zero polynomial, $p\equiv0$ and the given evaluation vector is all zero, so the same identity holds without representing the formal object by a coefficient list. For $0\le r\le m$, define the real function $Q_r(X)=\sum_{k=r}^{m}a_k\bigl(\prod_{s=0}^{r-1}(k-s)\bigr)X^{k-r}$, with the empty product equal to $1$; each factor $k-s$ is natural because $k\ge r>s$. [given, F1, F5, construct]

2.1 At $r=0$, $Q_0=p=p^{(0)}$ by [F2]. If $r<m$ and $p^{(r)}=Q_r$, termwise differentiation in [F3] kills the $k=r$ constant term and multiplies each term with $k>r$ by its exponent $k-r$; for each $k>r$, the resulting real coefficient is $a_k\bigl(\prod_{s=0}^{r-1}(k-s)\bigr)(k-r)=a_k\prod_{s=0}^{r}(k-s)$. Indeed the finite natural product extends by its last factor, and [F7] carries that natural identity to the product of canonical real images. The new exponent is $(k-r)-1=k-(r+1)$, so the differentiated sum is exactly $Q_{r+1}$. Hence $p^{(r+1)}=Q_{r+1}$. [base, given, step 1.1, F2, F3, F7, ih, algebra]

3.1 Apply [F4] to the property $P(r)$ that $r\le m$ implies $p^{(r)}=Q_r$. Step 2.1 proves $P(0)$. If $P(r)$ holds and $r+1\le m$, then $r<m$ and step 2.1 proves $p^{(r+1)}=Q_{r+1}$; if $r+1>m$, $P(r+1)$ is vacuous. Thus $P(m)$ holds. [step 1.1, step 2.1, F4, ih, discharge-induction]

4.1 At $r=m$, the sum defining $Q_m$ contains only $k=m$ and equals $a_m\prod_{s=0}^{m-1}(m-s)=a_m m!_{\mathbb R}$: [F6] identifies the natural falling product with $m!$, and [F7] carries it to the real product in the statement. This proves the stated derivative and both special cases. [step 3.1, given, F6, F7, discharge-induction, algebra] ∎
