---
id: cex-a-real-invertible-matrix-with-no-real-logarithm
kind: counterexample
title: A real invertible matrix with no real logarithm
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, ex-general-and-special-linear-lie-groups, ex-matrix-exponential-as-the-lie-group-exponential, def-determinant-of-a-square-matrix]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Jean Gallier, Logarithms and Square Roots of Real Matrices
      url: https://arxiv.org/pdf/0805.0245
      locator: Theorem 3.4 and necessity proof, pages 18-20
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Discussion following Proposition 1.84, printed page 51
---

## Counterexample

Assume $\mathrm{AC}_\omega$. The matrix

$$A=\begin{pmatrix}-2&0\\0&-1/2\end{pmatrix}$$

belongs to the connected Lie group
$\operatorname{GL}_2^+(\mathbb R)=\{B:\det B>0\}$, but there is no real
$2\times2$ matrix $X$ with $e^X=A$. Hence a Lie-group exponential need not be
surjective even when the group is connected.

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[F1] $\operatorname{GL}_2(\mathbb R)$ is a matrix Lie group with tangent algebra $M_2(\mathbb R)$. [[ex-general-and-special-linear-lie-groups]].

[F2] Its Lie exponential is the ordinary matrix exponential. [[ex-matrix-exponential-as-the-lie-group-exponential]].

[F3] Determinant is given by the finite Leibniz formula. [[def-determinant-of-a-square-matrix]].

[F4] Countable choice is inherited through [F1] and [F2]. [[def-countable-choice]].

## Refutation

**Proof technique:** counterexample.

1.1 Direct calculation using [F3] gives $\det A=1$, so $A\in\operatorname{GL}_2^+(\mathbb R)$. [F3, algebra]

1.2 By [F1], the positive-determinant open subgroup is a Lie group; it is path connected. Indeed, for any $B=(b_1\ b_2)$ in it, put $u=b_1/\lVert b_1\rVert$, let $v$ be the positive quarter-turn of $u$, and set $Q=(u\ v)\in\operatorname{SO}(2)$. Then $Q^TB=R=\left(\begin{smallmatrix}r&s\\0&t\end{smallmatrix}\right)$ with $r=\lVert b_1\rVert>0$ and $t=\det(B)/r>0$. The path $R_\lambda=\left(\begin{smallmatrix}(1-\lambda)r+\lambda&(1-\lambda)s\\0&(1-\lambda)t+\lambda\end{smallmatrix}\right)$ joins $R$ to $I$ through positive-determinant matrices, while writing the fixed $Q$ as a rotation through some angle $\theta$ gives the path of rotations from $Q$ to $I$. Concatenating $B=QR$ first to $Q$ and then to $I$ proves path connectedness. [F1, F3, construct, algebra]

1.3 Assume for contradiction that a real matrix $X$ satisfies $e^X=A$. The defining power series commutes with $X$, so $XA=AX$. Since $A$ has the two distinct eigenspaces $\mathbb Re_1$ and $\mathbb Re_2$, commutation makes each of them $X$-invariant. Hence $Xe_1=xe_1$ for some real $x$, and the power series gives $e^Xe_1=e^xe_1$ with $e^x>0$, whereas $Ae_1=-2e_1$. This is impossible. [assume-contra, F2, algebra]

2.1 Thus $A$ has no real matrix logarithm. By [F2], it is not in the image of the Lie exponential of the connected group established in step 1.2, disproving surjectivity. The witness is nonsingular and two-dimensional; no claim is made in dimensions zero or one. There is no boundary, metric, interval endpoint, or iff issue. The logarithm obstruction and path construction are choice-free; $\mathrm{AC}_\omega$ is present only because the current Lie-exponential interface [F2] carries it. [discharge-contradiction, F2, F4, step 1.1, step 1.2, step 1.3] ∎
