---
id: ex-nrqm-fock-and-equilibrium-entropy-divergence-example
aliases: [nrqm-fock-and-equilibrium-entropy-divergence-example]
kind: example
domain: mathematics
title: "Entropy-divergence example"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-cauchy-condensation, thm-p-series-real-exponents, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, def-series-and-absolute-convergence-in-a-normed-space]
dependency_roles:
  thm-cauchy-condensation: mathematical-premise
  thm-p-series-real-exponents: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-series-and-absolute-convergence-in-a-normed-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Sections 1.1.3-1.1.4 pp. 13-14 (von Neumann entropy and its finiteness in the Gibbs setting)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 1 (positive series and comparison criteria as used in the examples)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Let
$$w_n:=\begin{cases}0,&n\in\{0,1\},\\[2mm]\dfrac1{C\,n\,(\log n)^2},&n\ge2,\end{cases}\qquad C:=\sum_{n\ge2}\frac1{n(\log n)^2},$$
where $\log$ is the natural logarithm. This example verifies concretely that:

(a) the normalizing constant is finite and positive,
$C\in(0,\infty)$, so that $\sum_{n\ge0}w_n=1$ ([[def-series-and-absolute-convergence-in-a-normed-space]]);

(b) the entropy of the weight family diverges,
$$s(w):=-\sum_{n\ge0}w_n\log w_n=\sum_{n\ge0}w_n\log\frac1{w_n}=+\infty,$$
where the sum is the nonnegative extended sum of the nonnegative terms
$w_n\log(1/w_n)$;

(c) consequently a probability weight on a countable set can have infinite
entropy; normalisation alone does not force finiteness, in contrast to the
finite-dimensional bound $s\le\log d$ for a finite Hilbert space.

## Verification

**Given:** the weight family $(w_n)_{n\in\mathbb N}$ and the constant $C$ defined above.

[F1] Cauchy condensation: for a nonnegative nonincreasing family $(a_k)_{k\ge1}$, $\sum_{k\ge1}a_k$ converges if and only if $\sum_{j\ge0}2^ja_{2^j}$ converges ([[thm-cauchy-condensation]]).

[F2] $p$-series: $\sum_{k\ge1}k^{-p}$ converges if and only if $p>1$; in particular $\sum_{k\ge1}k^{-2}<\infty$ and $\sum_{k\ge1}k^{-1}=\infty$ ([[thm-p-series-real-exponents]]).

[F3] For $x\ge1$, $\log x=\int_1^xdt/t$ with $0\le\log x\le x-1$ and $1-1/x\le\log x$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]]).

1.1 [Finiteness of $C$] The family $a_k:=1/(k(\log k)^2)$, $k\ge2$, is nonnegative and nonincreasing for $k\ge3$ (the denominator $k(\log k)^2$ is increasing by [F3] applied to $\log$), so condensation [F1] applied to the tail from $k\ge2$ reduces $\sum_{k\ge2}a_k$ to $\sum_{j\ge1}2^ja_{2^j}=\sum_{j\ge1}\frac{2^j}{2^j(\log 2^j)^2}=\frac1{(\log2)^2}\sum_{j\ge1}\frac1{j^2}$, which converges by [F2]; the finitely many terms with $k=2$ do not affect convergence. Since every term is positive, $C\in(0,\infty)$ and therefore $\sum_nw_n=C/C=1$. [F1, F2, F3, algebra]

1.2 [Divergence of the comparison series] Again by [F1], $\sum_{k\ge3}\frac1{k\log k}$ converges if and only if $\sum_{j\ge2}\frac{2^j}{2^j\log(2^j)}=\frac1{\log2}\sum_{j\ge2}\frac1j$ converges, which fails by [F2] with $p=1$; hence $\sum_{k\ge3}1/(k\log k)=+\infty$. [F1, F2, algebra]

1.3 [The entropy lower bound] For $n$ so large that $\log C+2\log\log n\ge0$ one has $\log\frac1{w_n}=\log C+\log n+2\log\log n\ge\log n>0$ by the product-to-sum property of the logarithm ([F3]); hence $w_n\log\frac1{w_n}\ge\frac1{Cn(\log n)^2}\log n=\frac1{Cn\log n}$ for all sufficiently large $n$. [F3, algebra]

2.1 [Divergence of the entropy] Since all terms $w_n\log(1/w_n)$ are nonnegative, the extended sum $s(w)=\sum_{n\ge0}w_n\log(1/w_n)$ dominates any finite partial sum; by step 1.3 it dominates $\frac1C\sum_{N\le n\le M}\frac1{n\log n}$ for all large $N\le M$, and step 1.2 shows that these partial sums are unbounded as $M\to\infty$. Hence $s(w)=+\infty$, proving (b); combined with step 1.1 this proves (a)-(c) and shows that normalisation does not imply finite entropy. [step 1.1, step 1.2, step 1.3, algebra] ∎
