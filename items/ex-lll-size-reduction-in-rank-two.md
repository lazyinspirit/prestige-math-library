---
id: ex-lll-size-reduction-in-rank-two
kind: example
title: A rank-two size-reduction step in LLL
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-lll-reduced-lattice-basis
  - thm-lll-algorithm-terminates-and-returns-reduced-basis
  - def-full-euclidean-lattice-and-covolume
  - def-euclidean-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. K. Lenstra, H. W. Lenstra Jr., and L. Lovász, Factoring Polynomials with Rational Coefficients, §1"
      url: "https://ir.cwi.nl/pub/9304/9304D.pdf"
verification: {}
---

## Example

For the ordered basis $b_1=(1,0)$, $b_2=(10,1)$ of $\mathbb Z^2$, the first LLL size-reduction step subtracts $10b_1$ from $b_2$ and returns $(1,0),(0,1)$. The output has $\mu_{21}=0$ and satisfies the $\delta=3/4$ Lovász inequality.

## Example references

[[alg-lll-reduced-lattice-basis|LLL algorithm]]

[[thm-lll-algorithm-terminates-and-returns-reduced-basis|LLL correctness theorem]]

[Lenstra–Lenstra–Lovász, algorithm (1.15)](https://ir.cwi.nl/pub/9304/9304D.pdf)

## Diagram

The arrows in the two panels have the exact endpoint coordinates shown in the standard Euclidean plane; the drawing illustrates the calculation only.

\[
\begin{tikzpicture}[scale=0.32,>=stealth]
\begin{scope}
  \draw[->] (-1,0)--(12,0) node[right] {$x$};
  \draw[->] (0,-1)--(0,3) node[above] {$y$};
  \draw[thick,->,blue] (0,0)--(1,0) node[below] {$b_1=(1,0)$};
  \draw[thick,->,red] (0,0)--(10,1) node[above] {$b_2=(10,1)$};
  \node at (5.5,-2) {input basis};
\end{scope}
\begin{scope}[xshift=16cm]
  \draw[->] (-1,0)--(3,0) node[right] {$x$};
  \draw[->] (0,-1)--(0,3) node[above] {$y$};
  \draw[thick,->,blue] (0,0)--(1,0) node[below] {$b_1=(1,0)$};
  \draw[thick,->,red] (0,0)--(0,1) node[left] {$b_2'=(0,1)$};
  \node at (1,-2) {after reduction};
\end{scope}
\end{tikzpicture}
\]

## Facts & Assumptions

**Given:** The Euclidean lattice $\mathbb Z^2$ with its standard inner product and the ordered basis in the Example.

[F1] LLL reduces $b_k$ by the nearest integer multiple of $b_{k-1}$, then checks the Lovász condition ([[alg-lll-reduced-lattice-basis]]).

[F2] The output size and Lovász conditions use Gram–Schmidt coefficients and squared Euclidean norms ([[thm-lll-algorithm-terminates-and-returns-reduced-basis]], [[def-euclidean-inner-product]]).

## Proof



1.1 Initially $b_1^*=b_1=(1,0)$, $\|b_1^*\|^2=1$, and $\mu_{21}=\langle(10,1),(1,0)\rangle=10$. Thus the nearest integer is $r=\lfloor10+1/2\rfloor=10$, and replacing $b_2$ by $b_2-10b_1$ gives $(0,1)$. [F1, given, algebra]

2.1 The updated basis matrix has determinant $1$, so it is still a basis of $\mathbb Z^2$. Its Gram–Schmidt vectors are $(1,0),(0,1)$; hence $\mu_{21}=0$ and the Lovász inequality is $1+0\ge3/4$. [F2, step 1.1, algebra] ∎

