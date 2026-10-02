---
id: def-full-euclidean-lattice-and-covolume
kind: definition
title: "Full Euclidean lattice and covolume"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-determinant-of-a-square-matrix
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4, 'Lattices', p.73 and Remark 4.16(a), p.75."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§27 Lemma 27.2, pp.139-140."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix $n\ge1$. A **full lattice** in $\mathbb R^n$ is a subgroup
$\Lambda\subseteq\mathbb R^n$ of the form

$$\Lambda=\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n=\Big\{\sum_{i=1}^n m_i b_i:m_i\in\mathbb Z\Big\},$$

where $b_1,\dots,b_n\in\mathbb R^n$ are **linearly independent over
$\mathbb R$**, that is, they form a real basis of $\mathbb R^n$. Write
$B=(b_1\ \cdots\ b_n)$ for the $n\times n$ matrix whose $i$-th column is
$b_i$; determinants of square matrices are as in
[[def-determinant-of-a-square-matrix]]. The **covolume** of $\Lambda$ is

$$\operatorname{covol}(\Lambda):=|\det B| .$$

The value is positive: linear independence of the columns makes $B$
invertible, so $\det B\ne0$.

## Remarks

**Basis independence.** Suppose $c_1,\dots,c_n$ is a second integer basis of
$\Lambda$, with matrix $C=(c_1\ \cdots\ c_n)$. Each $c_j$ is an integer
combination of the $b_i$ and each $b_i$ is an integer combination of the
$c_j$, so there are matrices $A,A'\in M_n(\mathbb Z)$ with $C=BA$ and
$B=CA'$. Substituting gives $B=BAA'$, hence $AA'=I_n$ because $B$ is
invertible, and symmetrically $A'A=I_n$. Taking determinants,
$(\det A)(\det A')=1$ with both factors integers, so $\det A=\pm1$ and
therefore $|\det C|=|\det B|\,|\det A|=|\det B|$. Thus the covolume does not
depend on the chosen basis, and the definition above is unambiguous.

**Discrete subgroups.** A subgroup $\Lambda\subseteq\mathbb R^n$ is a full
lattice in the sense above exactly when it is discrete in the Euclidean
topology and spans $\mathbb R^n$; this equivalence is Milne's Lemma 4.14
together with the identification of full lattices with discrete spanning
subgroups (Milne, Ch. 4, pp.73-75). The half-open fundamental parallelotope
$P=\{\sum_i t_i b_i:0\le t_i<1\}$ of a full lattice tiles $\mathbb R^n$ by
$\Lambda$-translates with volume $\operatorname{covol}(\Lambda)$, and bounded
sets meet $\Lambda$ in finitely many points; both facts are proved in this
batch and used below.
