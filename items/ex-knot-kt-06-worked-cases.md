---
id: ex-knot-kt-06-worked-cases
kind: example
title: "Trefoil Seifert matrix and basis changes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - thm-seifert-matrix-presents-knot-alexander-module
  - def-countable-choice
  - def-countable-choice-principle-for-foliation-pair
  - lem-countable-choice-sequence-and-product-formulations-are-equivalent
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A–8.B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Example 6.2.11 and Theorem 6.2.9"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Example

Assume the Axiom of Choice and take the genus-one Seifert surface for the trefoil described as $K_1$ in Cattabriga–Francaviglia, Example 6.2.11. In their basis $f_1,f_2$, their negative-first Seifert form has matrix $A=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$, and they identify $K_1$ as the trefoil. Their convention is $\alpha(x,y)=\operatorname{lk}(x^-,y)$; the positive-first convention here is $\theta(x,y)=\operatorname{lk}(x^+,y)$. In the swapped basis $a_1=f_2$, $a_2=f_1$, the positive-first Seifert matrix is
$$
V=\begin{pmatrix}1&0\\-1&1\end{pmatrix},\qquad V-V^T=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad \det(V-tV^T)=1-t+t^2.
$$
The determinant-one basis change $P_0=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ gives $P_0^TVP_0=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. It changes the off-diagonal entries but not the diagonal entries. The determinant-one basis change $P_1=\begin{pmatrix}1&1\\2&3\end{pmatrix}$ gives $P_1^TVP_1=\begin{pmatrix}3&5\\4&7\end{pmatrix}$, changing every entry. For either $P$, the transformed Alexander presentation matrix is $P^T(V-tV^T)P$, so it presents an isomorphic $\Lambda$-module.

## Example references

[Cattabriga–Francaviglia, Example 6.2.11 and Theorem 6.2.9](https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf)

[[def-knot-seifert-pairing-and-matrix|The positive-push convention used for $V$]]

[[thm-seifert-matrix-presents-knot-alexander-module|The matrix presentation of the one-variable Alexander module]]

## Facts & Assumptions

**Given:** Full AC, the cited genus-one oriented trefoil surface, its negative-first matrix in the source basis, and the positive-first convention of this run.

[A1] Full AC supplies the choice hypotheses of the Seifert-surface and normal-form interfaces. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The source's genus-one example gives $A=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ for $\alpha(x,y)=\operatorname{lk}(x^-,y)$ and identifies its $K_1$ as a trefoil. [Cattabriga–Francaviglia, Example 6.2.11, printed p. 45](https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf)

[F2] The positive-first matrix is defined by $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, linking is symmetric, and moving both curves through a disjoint collar preserves linking. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

[F3] For an integral basis change $P$, the new Seifert matrix is $P^TVP$ and the Alexander presentation matrix is $V-tV^T$. [[lem-seifert-matrix-s-equivalence-under-isotopy]], [[thm-seifert-matrix-presents-knot-alexander-module]]

## Proof

1.1 Under [A1], apply the Seifert-pairing convention to the source's supplied oriented surface and basis. In the original source basis, $A_{ij}=\operatorname{lk}(f_i^-,f_j)$. By symmetry and a simultaneous positive normal translation, this equals $\operatorname{lk}(f_j^+,f_i)$, which is the $(j,i)$ entry of the positive-first matrix in the same basis. Thus that matrix is $A^T$. Let $S=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ be the basis swap. Then $S^TA^TS=A$, so the positive-first matrix in the swapped basis is the displayed $V$. [A1, F1, F2, given, algebra]

2.1 Direct multiplication gives $V-V^T=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Also $V-tV^T=\begin{pmatrix}1-t&t\\-1&1-t\end{pmatrix}$, whose determinant is $(1-t)^2+t=1-t+t^2$. The skew-part identity agrees with the oriented genus-one handle intersection block in the stated positive-normal convention. [F2, F3, step 1.1, algebra]

2.2 For $P_0$, $VP_0=\begin{pmatrix}1&1\\-1&0\end{pmatrix}$ and $P_0^T(VP_0)=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. For $P_1$, $VP_1=\begin{pmatrix}1&1\\1&2\end{pmatrix}$ and $P_1^T(VP_1)=\begin{pmatrix}3&5\\4&7\end{pmatrix}$. Both determinants are $1$, so both are integral basis changes; the second matrix differs from $V$ in all four entries. [F3, step 1.1, algebra]

3.1 For either unimodular $P$, $(P^TVP)-t(P^TV^TP)=P^T(V-tV^T)P$. Right multiplication by $P$ does not change the image of the map on $\Lambda^2$, and left multiplication by the automorphism $P^T$ identifies the two cokernels. The module presentation is therefore independent of these basis changes, as asserted. [F3, step 2.1, step 2.2, algebra] ∎

## Remarks

The following schematic is the closure of a two-strand braid with three crossings. Gaps mark under-strands and the uninterrupted local arc at each crossing is the over-strand. It identifies the knot picture only; the matrix and determinant calculations above use the cited source matrix and the explicit convention translation in step 1.1.

~~~tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  \draw[thick] (-1,3)--(-1.35,2.8).. controls (-1.55,2) and (-1.55,1) ..(-1.35,0.2)--(-1,0);
  \draw[thick] (1,3)--(1.35,2.8).. controls (1.55,2) and (1.55,1) ..(1.35,0.2)--(1,0);
  \draw[thick] (-1,3)--(0,2.5)--(1,2)--(0,1.5)--(-1,1)--(0,0.5)--(1,0);
  \draw[thick] (1,3)--(0,2.5)--(-1,2)--(0,1.5)--(1,1)--(0,0.5)--(-1,0);
  \draw[white,line width=4pt] (0.28,2.64)--(-0.28,2.36);
  \draw[thick] (-0.28,2.64)--(0.28,2.36);
  \draw[white,line width=4pt] (0.28,1.64)--(-0.28,1.36);
  \draw[thick] (-0.28,1.64)--(0.28,1.36);
  \draw[white,line width=4pt] (0.28,0.64)--(-0.28,0.36);
  \draw[thick] (-0.28,0.64)--(0.28,0.36);
  \node at (0,3.35) {$\text{two braid strands}$};
  \node at (0,-0.35) {$\text{three crossings; closure arcs at the sides}$};
\end{tikzpicture}
~~~
