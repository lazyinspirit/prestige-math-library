---
id: lem-francis-compact-bulge-support-propagation
kind: lemma
title: "A compact Francis bulge chase preserves Hessenberg form and the initial direction"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-householder-reflector
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: the implicit Q theorem"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $n\ge1$, let $r\in\{1,2\}$, and require $n\ge2$ when $r=2$. Let $H_0\in\mathbb F^{n\times n}$ be upper Hessenberg, and let $P_0$ be a Householder reflector supported on the first $\min(r+1,n)$ coordinates. Set $H_1=P_0^*H_0P_0$. For $j=1,\ldots,J:=\max(n-2,0)$, put $I_j=\{j+1,\ldots,\min(j+r+1,n)\}$. Let $P_j$ be either the identity on $I_j$ or a Householder reflector supported on $I_j$, in either case required to map the active vector $(H_j)_{I_j,j}$ to a multiple of the first coordinate vector, and set $H_{j+1}=P_j^*H_jP_j$. Then $H_{J+1}$ is upper Hessenberg.

If, in addition, $x\ne0$, $P_0x=\alpha e_1$ with $\alpha\ne0$, and $Q=P_0P_1\cdots P_J$, then $Qe_1=x/\alpha$. Thus the exact chase preserves the initial direction while restoring the Hessenberg zero pattern.

## Facts & Assumptions

**Given:** The matrices and supported Householder transformations in the statement.

[F1] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]: an upper-Hessenberg matrix has $h_{ik}=0$ whenever $i>k+1$.

[F2] [[def-householder-reflector]]: a Householder reflector is self-adjoint, involutive, and acts as the identity outside its stated support.

[F3] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: every nonzero active vector admits a Householder reflector mapping it to a multiple of the first coordinate vector.

## Proof

1.1 Write $\mathcal P(j)$ for the assertions that columns $k<j$ of $H_j$ are upper Hessenberg and every nonzero entry below the first subdiagonal of $H_j$ lies in a row $i\le\min(n,j+r+1)$. For the base $j=1$, $P_0$ changes only the first $r+1$ rows and columns. If $i>r+2$ and $k\le r+1$, then $i>k+1$, so [F1] gives $(H_0)_{i,k}=0$; right multiplication within the first $r+1$ columns and left multiplication within the first $r+1$ rows cannot create entries there. For $k>r+1$, the row $i>r+2$ is untouched and $(H_0)_{i,k}=0$ whenever $i>k+1$. Hence all below-subdiagonal entries of $H_1$ lie in rows $i\le\min(n,r+2)$, which is $\mathcal P(1)$. [given, F1, algebra]

1.2 Suppose $\mathcal P(j)$ holds. By hypothesis, the chosen $P_j$ aligns the active vector, including when $P_j$ is the identity. Such choices exist by [F3] for a nonzero vector and by the identity for a zero vector. The below-subdiagonal entries of column $j$ can occur only in rows $j+2,\ldots,\min(n,j+r+1)$, all inside $I_j$. Left multiplication by $P_j^*$ maps the active column segment to a multiple of its first coordinate; here [F2] identifies $P_j^*$ with the reflector $P_j$. The rows beyond $I_j$ already vanish there by $\mathcal P(j)$. Since right multiplication acts only on columns in $I_j$, column $j$ is unchanged by it and is now Hessenberg. If $k<j$, every entry in rows $I_j$ of column $k$ was zero because $i\ge j+1>k+1$; the left update preserves these zeros and the right update does not touch column $k$. Thus columns $k\le j$ are Hessenberg after this step. [given, F1, F2, F3, algebra]

2.1 The left update changes only rows at most $j+r+1$. In the columns in $I_j$, any entry below the first subdiagonal in a row greater than $j+r+2$ is zero before the right update: it lies below the Hessenberg band, and its row exceeds the support bound in $\mathcal P(j)$. The right update mixes only columns in $I_j$, so those entries remain zero. In columns outside $I_j$, the right update makes no change; rows outside the left support are unchanged, and every below-subdiagonal entry in a row greater than $j+r+2$ was already zero by $\mathcal P(j)$. Therefore every below-subdiagonal entry of $H_{j+1}$ lies in a row $i\le\min(n,j+r+2)$, proving $\mathcal P(j+1)$. [F1, step 1.1, step 1.2, algebra]

3.1 If $n\le2$, every $n\times n$ matrix is upper Hessenberg. If $n\ge3$, the loop ends at $j=n-2$; steps 1.2 and 2.1 show that columns $1$ through $n-2$ are Hessenberg, while the last two columns cannot contain entries below their first subdiagonal by dimension. Hence $H_{J+1}$ is upper Hessenberg. By [F2], $P_0x=\alpha e_1$ implies $P_0e_1=x/\alpha$. Each later $P_j$ is supported on indices beginning at $j+1\ge2$, so $P_je_1=e_1$. Therefore $Qe_1=P_0e_1=x/\alpha$. [given, F2, step 1.2, step 2.1, algebra] ∎

## Remarks

The sparsity envelopes below illustrate one step with $n=7$, $r=2$, and $j=2$, so $I_2=\{3,4,5\}$. A dot means an entry is allowed to be nonzero, not that it must be nonzero; $0$ means a forced zero under $\mathcal P(2)$ or $\mathcal P(3)$ respectively. The outlined segment is the active vector in column $2$. Left multiplication aligns it; right multiplication mixes only columns $3,4,5$, leaving column $2$ Hessenberg. Column $1$ is unchanged. The next possible below-subdiagonal entries lie in rows at most $6$, ready for the next support $I_3=\{4,5,6\}$.

```tikz
\begin{tikzpicture}[x=0.65cm,y=0.65cm]
\begin{scope}[shift={(0,0)}]
\node at (4,0.2) {$H_2$};
\node[font=\small] at (1,-0.65) {$1$};
\node[font=\small] at (2,-0.65) {$2$};
\node[font=\small] at (3,-0.65) {$3$};
\node[font=\small] at (4,-0.65) {$4$};
\node[font=\small] at (5,-0.65) {$5$};
\node[font=\small] at (6,-0.65) {$6$};
\node[font=\small] at (7,-0.65) {$7$};
\node[font=\small] at (0,-1.6) {$1$};
\fill (1,-1.6) circle (0.055);
\fill (2,-1.6) circle (0.055);
\fill (3,-1.6) circle (0.055);
\fill (4,-1.6) circle (0.055);
\fill (5,-1.6) circle (0.055);
\fill (6,-1.6) circle (0.055);
\fill (7,-1.6) circle (0.055);
\node[font=\small] at (0,-2.6) {$2$};
\fill (1,-2.6) circle (0.055);
\fill (2,-2.6) circle (0.055);
\fill (3,-2.6) circle (0.055);
\fill (4,-2.6) circle (0.055);
\fill (5,-2.6) circle (0.055);
\fill (6,-2.6) circle (0.055);
\fill (7,-2.6) circle (0.055);
\node[font=\small] at (0,-3.6) {$3$};
\node[font=\small] at (1,-3.6) {$0$};
\fill (2,-3.6) circle (0.055);
\fill (3,-3.6) circle (0.055);
\fill (4,-3.6) circle (0.055);
\fill (5,-3.6) circle (0.055);
\fill (6,-3.6) circle (0.055);
\fill (7,-3.6) circle (0.055);
\node[font=\small] at (0,-4.6) {$4$};
\node[font=\small] at (1,-4.6) {$0$};
\fill[cyan] (2,-4.6) circle (0.075);
\fill (3,-4.6) circle (0.055);
\fill (4,-4.6) circle (0.055);
\fill (5,-4.6) circle (0.055);
\fill (6,-4.6) circle (0.055);
\fill (7,-4.6) circle (0.055);
\node[font=\small] at (0,-5.6) {$5$};
\node[font=\small] at (1,-5.6) {$0$};
\fill[cyan] (2,-5.6) circle (0.075);
\fill[cyan] (3,-5.6) circle (0.075);
\fill (4,-5.6) circle (0.055);
\fill (5,-5.6) circle (0.055);
\fill (6,-5.6) circle (0.055);
\fill (7,-5.6) circle (0.055);
\node[font=\small] at (0,-6.6) {$6$};
\node[font=\small] at (1,-6.6) {$0$};
\node[font=\small] at (2,-6.6) {$0$};
\node[font=\small] at (3,-6.6) {$0$};
\node[font=\small] at (4,-6.6) {$0$};
\fill (5,-6.6) circle (0.055);
\fill (6,-6.6) circle (0.055);
\fill (7,-6.6) circle (0.055);
\node[font=\small] at (0,-7.6) {$7$};
\node[font=\small] at (1,-7.6) {$0$};
\node[font=\small] at (2,-7.6) {$0$};
\node[font=\small] at (3,-7.6) {$0$};
\node[font=\small] at (4,-7.6) {$0$};
\node[font=\small] at (5,-7.6) {$0$};
\fill (6,-7.6) circle (0.055);
\fill (7,-7.6) circle (0.055);
\draw (0.5,-1.1) rectangle (7.5,-8.1);
\draw[orange,very thick] (1.65,-3.25) rectangle (2.35,-5.95);
\draw[cyan,dashed] (0.5,-6.1) -- (7.5,-6.1);
\end{scope}
\begin{scope}[shift={(12,0)}]
\node at (4,0.2) {$H_3=P_2^*H_2P_2$};
\node[font=\small] at (1,-0.65) {$1$};
\node[font=\small] at (2,-0.65) {$2$};
\node[font=\small] at (3,-0.65) {$3$};
\node[font=\small] at (4,-0.65) {$4$};
\node[font=\small] at (5,-0.65) {$5$};
\node[font=\small] at (6,-0.65) {$6$};
\node[font=\small] at (7,-0.65) {$7$};
\node[font=\small] at (0,-1.6) {$1$};
\fill (1,-1.6) circle (0.055);
\fill (2,-1.6) circle (0.055);
\fill (3,-1.6) circle (0.055);
\fill (4,-1.6) circle (0.055);
\fill (5,-1.6) circle (0.055);
\fill (6,-1.6) circle (0.055);
\fill (7,-1.6) circle (0.055);
\node[font=\small] at (0,-2.6) {$2$};
\fill (1,-2.6) circle (0.055);
\fill (2,-2.6) circle (0.055);
\fill (3,-2.6) circle (0.055);
\fill (4,-2.6) circle (0.055);
\fill (5,-2.6) circle (0.055);
\fill (6,-2.6) circle (0.055);
\fill (7,-2.6) circle (0.055);
\node[font=\small] at (0,-3.6) {$3$};
\node[font=\small] at (1,-3.6) {$0$};
\fill (2,-3.6) circle (0.055);
\fill (3,-3.6) circle (0.055);
\fill (4,-3.6) circle (0.055);
\fill (5,-3.6) circle (0.055);
\fill (6,-3.6) circle (0.055);
\fill (7,-3.6) circle (0.055);
\node[font=\small] at (0,-4.6) {$4$};
\node[font=\small] at (1,-4.6) {$0$};
\node[font=\small] at (2,-4.6) {$0$};
\fill (3,-4.6) circle (0.055);
\fill (4,-4.6) circle (0.055);
\fill (5,-4.6) circle (0.055);
\fill (6,-4.6) circle (0.055);
\fill (7,-4.6) circle (0.055);
\node[font=\small] at (0,-5.6) {$5$};
\node[font=\small] at (1,-5.6) {$0$};
\node[font=\small] at (2,-5.6) {$0$};
\fill[cyan] (3,-5.6) circle (0.075);
\fill (4,-5.6) circle (0.055);
\fill (5,-5.6) circle (0.055);
\fill (6,-5.6) circle (0.055);
\fill (7,-5.6) circle (0.055);
\node[font=\small] at (0,-6.6) {$6$};
\node[font=\small] at (1,-6.6) {$0$};
\node[font=\small] at (2,-6.6) {$0$};
\fill[cyan] (3,-6.6) circle (0.075);
\fill[cyan] (4,-6.6) circle (0.075);
\fill (5,-6.6) circle (0.055);
\fill (6,-6.6) circle (0.055);
\fill (7,-6.6) circle (0.055);
\node[font=\small] at (0,-7.6) {$7$};
\node[font=\small] at (1,-7.6) {$0$};
\node[font=\small] at (2,-7.6) {$0$};
\node[font=\small] at (3,-7.6) {$0$};
\node[font=\small] at (4,-7.6) {$0$};
\node[font=\small] at (5,-7.6) {$0$};
\fill (6,-7.6) circle (0.055);
\fill (7,-7.6) circle (0.055);
\draw (0.5,-1.1) rectangle (7.5,-8.1);
\draw[orange,very thick] (1.65,-3.25) rectangle (2.35,-5.95);
\draw[cyan,dashed] (0.5,-7.1) -- (7.5,-7.1);
\end{scope}
\draw[->,thick] (8.1,-4.4) -- (10.9,-4.4);
\node[font=\small] at (9.5,-3.6) {$P_2^*(\cdot)P_2$};
\end{tikzpicture}
```

Cyan dots mark the permitted entries below the first subdiagonal, and the dashed line marks their row bound. For $r=1$, the support has at most two coordinates and the analogous row bound advances from $j+2$ to $j+3$; for $r=2$, it has at most three and the bound advances from $j+3$ to $j+4$, always truncated at $n$. At $j=n-2$, the support is $\{n-1,n\}$ for either value of $r$, and clearing column $n-2$ finishes the chase: the last two columns have no positions below the first subdiagonal. When $n\le2$, there is no chase step. Every later support excludes coordinate $1$, so $P_je_1=e_1$; this explains why the same chase retains the initial direction. The proof above is independent of this illustration.
