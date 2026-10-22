---
id: ex-knot-kt-11-worked-cases
kind: example
title: "Worked cases: double branched covers of the trefoil, figure-eight knot, and unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-double-branched-cover-homology-from-seifert-matrix
  - lem-square-integer-cokernel-finiteness-and-order
  - def-axiom-of-choice
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
    - title: "Shin’ichi Saeki, Knot Theory Lecture Notes, Chapter 7: Seifert Matrices and Derived Invariants"
      url: "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
      locator: "Chapter 7, Examples 7.4–7.5; positive-push matrices for the trefoil and figure-eight knot"
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.D, printed pp. 212–213; double-cover homology presentation"
---

## Example

For the right-handed trefoil and figure-eight knot, use their standard genus-one Seifert surfaces and the ordered bases whose positive-push Seifert matrices are, respectively,
$$V_T=\begin{pmatrix}-1&0\\1&-1\end{pmatrix},\qquad V_8=\begin{pmatrix}-1&0\\1&1\end{pmatrix}.$$
Their double branched covers have first homology $\mathbb Z/3\mathbb Z$ and $\mathbb Z/5\mathbb Z$, respectively. The double branched cover of the unknot is $S^3$.

## Example references

[[lem-double-branched-cover-homology-from-seifert-matrix|The presentation $H_1(\Sigma_2(K))\cong\operatorname{coker}(V+V^T)$]]

[[lem-square-integer-cokernel-finiteness-and-order|The determinant and cokernel criterion for integer matrices]]

[Saeki, *Knot Theory Lecture Notes*, Chapter 7, Examples 7.4–7.5](https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf)

[Rolfsen, *Knots and Links*, Chapter 8.D](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

## Facts & Assumptions

**Given:** Full AC and the matrices and knots specified in the Example.

[A1] Full AC is the choice-function axiom required by the double-cover presentation. [[def-axiom-of-choice]]

[F1] For a positive-push Seifert matrix $V$, $H_1(\Sigma_2(K);\mathbb Z)\cong\operatorname{coker}(V+V^T)$. [[lem-double-branched-cover-homology-from-seifert-matrix]]

[F2] A square integer matrix with nonzero determinant has finite cokernel of order the absolute determinant; unimodular row and column operations preserve the cokernel. [[lem-square-integer-cokernel-finiteness-and-order]]

## Proof

1.1 For the trefoil, $V_T+V_T^T=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$. Swap its columns, add twice the first row to the second, then add twice the first column to the second; the result is $\operatorname{diag}(1,-3)$. Each operation is unimodular, so [F1]–[F2] give $H_1(\Sigma_2(T))\cong\mathbb Z/3\mathbb Z$. [A1, F1, F2, given, algebra]

1.2 For the figure-eight knot, $V_8+V_8^T=\begin{pmatrix}-2&1\\1&2\end{pmatrix}$. Swap its columns, subtract twice the first row from the second, then add twice the first column to the second; the result is $\operatorname{diag}(1,5)$. Thus its cokernel is $\mathbb Z/5\mathbb Z$. [A1, F1, F2, given, algebra]

2.1 For the unknot, the standard spanning disk has genus zero, so its Seifert matrix is empty and [F1] gives trivial first homology. To identify the whole cover, write $S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$ and define $f(z,w)=\bigl(z\sqrt{1+|w|^2},w^2\bigr)$. The image lies in $S^3$ because $|z|^2(1+|w|^2)+|w|^4=1$. Off $w=0$, each target point has exactly two preimages, corresponding to the two square roots of its second coordinate; on $w=0$ it has one. The involution $(z,w)\mapsto(z,-w)$ is the deck transformation, and in tubular coordinates about $w=0$ the transverse map is $w\mapsto w^2$. Hence $f$ is the connected double branched cover of $S^3$ over the unknot, so the cover is $S^3$. [F1, given, construct, algebra] ∎
