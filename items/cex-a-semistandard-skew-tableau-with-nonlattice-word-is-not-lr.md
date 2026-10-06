---
id: cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr
kind: counterexample
title: A semistandard tableau with non-lattice reading word is not a Littlewood--Richardson tableau
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
generation:
  role: counterexample
deps:
  - def-littlewood-richardson-tableau-and-coefficient
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
  - thm-skew-jacobi-trudi-and-tableau-expansion
  - def-stable-schur-function-by-bialternants
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Complete note, printed pp. 1--4; the reading-word and lattice-permutation conventions are the ones converted in the remark on printed p. 3, and the finite tableau below was checked directly against those conventions."
---

## Statement refuted

For partitions $\lambda\subseteq\nu$ and $\mu$ with
$|\nu|=|\lambda|+|\mu|$, every semistandard skew tableau of shape
$\nu/\lambda$ and content $\mu$ is a Littlewood--Richardson tableau, i.e. its
reading word is automatically a lattice word
([[def-littlewood-richardson-tableau-and-coefficient]]).

## Facts & Assumptions

[F1] Reading words read the rows from right to left beginning with the top row and are lattice words when every prefix contains at least as many letters $i$ as letters $i+1$ for every $i\ge1$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F2] A semistandard skew tableau of shape $\nu/\lambda$ weakly increases along rows, strictly increases down columns, and has content $\mu$ when the entry $i$ occurs $\mu_i$ times ([[def-semistandard-tableau-and-kostka-number]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

## Counterexample

**Given:** $\nu=(2,1)$, $\lambda=\varnothing$ in English coordinates
([[def-partition-young-diagram-and-conjugate-partition]]), $\mu=(1,1,1)$, and
the tableau $T$ of shape $(2,1)$ with first row $1\ 3$ and second row $2$,
$$\begin{matrix}1&3\\2\end{matrix}.$$

1.1 The tableau $T$ is a semistandard skew tableau of shape $\nu/\lambda=(2,1)$ and content $\mu=(1,1,1)$: its first row is weakly increasing ($1\le3$), its first column is strictly increasing ($1<2$) and its second column is a single cell, and its entries are exactly one $1$, one $2$ and one $3$. [F2, given]

1.2 The reading word of $T$ is obtained by reading each row from right to left starting with the top row: the first row contributes $3,1$ and the second row contributes $2$, so $w(T)=3\,1\,2$ ([[def-littlewood-richardson-tableau-and-coefficient]]). [F1, given]

2.1 The first prefix of $w(T)$ is the single letter $3$; it contains zero copies of the letter $2$ and one copy of the letter $3$, so the prefix condition of a lattice word fails for $i=2$. Hence $T$ is a semistandard skew tableau of shape $(2,1)$ and content $(1,1,1)$ whose reading word is not a lattice word, and by definition $T$ is not a Littlewood--Richardson tableau; this refutes the statement. [F1, step 1.1, step 1.2, algebra]

3.1 The instance is sharp: the semistandard tableaux of shape $(2,1)$ and content $(1,1,1)$ are exactly $T$ and the tableau with first row $1\ 2$ and second row $3$. Indeed the top-left entry must be $1$: were it $2$, the cell below it in the first column would carry the only remaining letter larger than $2$, namely $3$, leaving $1$ in the top-right cell in violation of weak row increase; were it $3$, no letter would remain below it in strict column increase. With $1$ in the top-left cell, the remaining letters $2$ and $3$ may be placed in the other two cells in either order, since $2,3>1$ and each row and column condition involves at most those two cells, giving exactly the two tableaux. The second of these has reading word $2\,1\,3$, which also fails the lattice condition at its first letter $2$; consistently, $c^{(2,1)}_{\varnothing,(1,1,1)}=0$ by the defining count of LR tableaux, while $s_\varnothing=1$ and $s_{(2,1)}(x_1,x_2,x_3)=x_1^2x_2+x_1^2x_3+x_1x_2^2+2x_1x_2x_3+x_1x_3^2+x_2^2x_3+x_2x_3^2$ is not the squarefree polynomial $s_{(1,1,1)}=e_3$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[thm-skew-jacobi-trudi-and-tableau-expansion]], [[def-stable-schur-function-by-bialternants]]). [F2, step 1.2, step 2.1, algebra] ∎