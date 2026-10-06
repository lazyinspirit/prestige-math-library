---
id: lem-lattice-fundamental-parallelotope-partitions-euclidean-space
kind: lemma
title: "Fundamental parallelotopes of a lattice tile Euclidean space with covolume volume"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-integer-part, thm-lebesgue-measure-of-a-box-of-every-kind, def-multidimensional-rectangle-and-volume, thm-linear-change-of-variables-for-lebesgue-measure, thm-real-square-matrix-invertible-iff-determinant-nonzero, def-countable-choice, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§1, Exercises 5-6: the half-open parallelotope and $\\{\\sum a_iv_i: a\\in[0,1)\\}$ are fundamental domains; integration over $T=V/\\Lambda$ and $\\operatorname{vol}(T)=\\operatorname{vol}(F)$, PDF pp. 1-2"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.11)-(7.14): the translates of the rectangle $\\Omega$ by $\\Gamma$ tile $\\mathbb R^n$ and the periodisation is formed from them, printed p. 72"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $A$ be an invertible
real $n\times n$ matrix, $\Lambda=A\mathbb Z^n$ a full-rank lattice, and
$$F:=A\bigl((0,1]^n\bigr)=\Bigl\{\sum_{i=1}^n t_i a_i:0<t_i\le1\Bigr\},$$
where $a_1,\dots,a_n$ are the columns of $A$, the fundamental parallelotope of
$\Lambda$. Then every $x\in\mathbb R^n$ has a unique representation
$x=\lambda+p$ with $\lambda\in\Lambda$ and $p\in F$; consequently the translates
$F+\lambda$ ($\lambda\in\Lambda$) are pairwise disjoint and cover
$\mathbb R^n$. Moreover $F$ is Lebesgue measurable and
$\lambda_n(F)=|\det A|=\operatorname{covol}(\Lambda)$. Countable Choice is inherited by the box-measure and linear
change-of-variables suppliers in the volume computation; the unique
representation is choice-free.

## Facts & Assumptions

**Given:** Countable Choice and an invertible real $n\times n$ matrix $A$ with columns $a_1,\dots,a_n$ and the full-rank lattice $\Lambda=A\mathbb Z^n$ of [[def-full-rank-lattice-covolume-and-dual-lattice]], whose covolume is $\operatorname{covol}(\Lambda)=|\det A|$.

[F1] The lattice notation is that of [[def-full-rank-lattice-covolume-and-dual-lattice]]: $\Lambda=A\mathbb Z^n=\{Ak:k\in\mathbb Z^n\}$, and $A$ is invertible ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[F2] For every real $t$ there is exactly one integer $m$ with $m\le t<m+1$, written $\lfloor t\rfloor$; consequently every real $t$ has a unique decomposition $t=m+s$ with $m\in\mathbb Z$ and $s\in(0,1]$, namely $m=\lfloor t\rfloor$ and $s=t-\lfloor t\rfloor$ when $t>\lfloor t\rfloor$, and $m=\lfloor t\rfloor-1$, $s=1$ when $t=\lfloor t\rfloor$ ([[lem-integer-part]]).

[F3] The half-open box $(0,1]^n=\prod_{i=1}^n(0,1]$ is Lebesgue measurable with $\lambda_n((0,1]^n)=1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-multidimensional-rectangle-and-volume]]).

[F4] If $T:\mathbb R^n\to\mathbb R^n$ is linear with matrix $A$ and $\det A\ne0$, then $T[E]$ is Lebesgue measurable for every Lebesgue measurable $E$ and $\lambda_n(T[E])=|\det A|\lambda_n(E)$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]); this volume supplier assumes Countable Choice ([[def-countable-choice]]).

[F5] Products $Ak$ of a matrix with a column vector have the entries $(Ak)_i=\sum_{j=1}^nA_{ij}k_j$, so $A\bigl((0,1]^n\bigr)=\bigl\{\sum_i t_ia_i:0<t_i\le1\bigr\}$ ([[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Write an arbitrary $x\in\mathbb R^n$ as $x=Ay$ with $y=A^{-1}x$, possible and unique because $A$ is invertible [F1]. By [F2] each coordinate $y_i$ has a unique decomposition $y_i=m_i+s_i$ with $m_i\in\mathbb Z$ and $s_i\in(0,1]$: if $m_i+s_i=m_i'+s_i'$ then $m_i-m_i'=s_i'-s_i\in(-1,1)\cap\mathbb Z=\{0\}$. With $m=(m_i)$ and $s=(s_i)$ this gives $x=Am+As$, where $Am\in\Lambda$ and $As\in F$ by [F5]. [F1, F2, F5, given, algebra]

2.1 The representation of step 1.1 is unique: if $Am+As=Am'+As'$ with $m,m'\in\mathbb Z^n$ and $s,s'\in(0,1]^n$, then injectivity of $A$ gives $m+s=m'+s'$ and [F2] gives $m=m'$, $s=s'$ coordinatewise. Hence every $x$ lies in exactly one translate $F+\lambda$, $\lambda\in\Lambda$: the translates are pairwise disjoint and cover $\mathbb R^n$. [step 1.1, F1, F5, algebra]

3.1 Volume: $F=A\bigl((0,1]^n\bigr)$ by [F5], the box $(0,1]^n$ is Lebesgue measurable of measure one [F3], and $A$ is an invertible linear map; by the change-of-variables theorem for linear maps [F4] the set $F$ is Lebesgue measurable with $\lambda_n(F)=|\det A|\,\lambda_n((0,1]^n)=|\det A|=\operatorname{covol}(\Lambda)$ [F1]. Only the volume computation uses Countable Choice, inherited from both [F3] and [F4]; the decomposition and uniqueness of steps 1.1 and 2.1 are choice-free. [step 2.1, F1, F3, F4, F5, given] ∎ 