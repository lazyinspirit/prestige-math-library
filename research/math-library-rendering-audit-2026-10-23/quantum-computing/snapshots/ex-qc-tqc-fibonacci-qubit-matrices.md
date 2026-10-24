---
id: ex-qc-tqc-fibonacci-qubit-matrices
kind: example
title: Three-Fibonacci-anyon qubit matrices
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - ex-qc-tqc-fibonacci-data
  - def-qc-tqc-fusion-tree-basis
dependency_level: 7
axiom_use: None; the calculation is exact over the real algebraic numbers and unit circle.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.14 and 9.17, PDF pp. 53–62
---

## Example

For three $\tau$ anyons of total charge $\tau$, the fusion space is
two-dimensional. Fix the chiral convention
$$F=\begin{pmatrix}\phi^{-1}&\phi^{-1/2}\\ \phi^{-1/2}&-\phi^{-1}\end{pmatrix},\qquad r=R_\tau/R_1=e^{-3\pi i/5}.$$
After removing the common scalar $R_1$, the adjacent generators are
$$B_1=\operatorname{diag}(1,r),\qquad B_2=FB_1F.$$

The verification checks these matrices directly as a unitary $B_3$
representation. It uses the listed sector data as input and does not infer
global category coherence from this calculation.

## Facts & Assumptions

**Given:** $\tau\otimes\tau=1\oplus\tau$ and the displayed fixed-convention
Fibonacci $F$ and $R$ data.

[F1] The Fibonacci supplier states the fusion rule, the displayed $F$ block,
and the pullback phases $R_1=e^{-4\pi i/5}$ and
$R_\tau=e^{3\pi i/5}$, so $R_\tau/R_1=e^{-3\pi i/5}$.
[[ex-qc-tqc-fibonacci-data]]

## Verification

1.1 Put $u=\phi^{-1}$ and $v=\phi^{-1/2}$. Since $\phi^2=\phi+1$, $u^2+u=1$ and $v^2=u$. Matrix multiplication then gives $F^2=\begin{pmatrix}u^2+v^2&uv-uv\\uv-uv&u^2+v^2\end{pmatrix}=I$. Both diagonal entries of $B_1$ have modulus one, so $B_1$ is unitary; $F$ is unitary because it is real and $F^*F=F^2=I$. The data in [F1] give $r=R_\tau/R_1=e^{-3\pi i/5}$. Also $r^5=-1$ and $r\ne-1$, so division of $r^5+1=0$ by $r+1$ gives $r^4-r^3+r^2-r+1=0$. With $y=r+r^{-1}$, division by $r^2$ gives $y^2-y-1=0$; since $y=2\cos(3\pi/5)<0$, it follows that $y=-u$ and $r^2+ur+1=0$. Hence $B_2=FB_1F$ is unitary. [given, F1, algebra]

1.2 Write $B_2=\begin{pmatrix}p&q\\q&t\end{pmatrix}$, where $p=u^2+ur$, $q=uv(1-r)$, and $t=u+u^2r$. Then $$B_1B_2B_1= \begin{pmatrix}p&qr\\qr&r^2t\end{pmatrix},\qquad B_2B_1B_2= \begin{pmatrix}p^2+q^2r&q(p+rt)\\q(p+rt)&q^2+t^2r\end{pmatrix}.$$ The relations $r^2=-ur-1$ and $u^3=2u-1$ give $p+rt=r$; expanding the remaining diagonal entries and using $u^2+u=1$, $v^2=u$, and $r^2+ur+1=0$ gives $p^2+q^2r=p$ and $q^2+t^2r=-p$. Thus both matrices reduce to $$\begin{pmatrix}u^2+ur&uvr(1-r)\\uvr(1-r)&-(u^2+ur)\end{pmatrix}.$$ The Artin relation follows entry by entry. [given, F1, algebra]

2.1 The off-diagonal entry of $B_1B_2-B_2B_1$ is $q(1-r)=uv(1-r)^2\ne0$, because $u,v\ne0$ and $r\ne1$. Thus the generators do not commute. They are not two copies of a single diagonal phase gate in the same fusion basis. [given, step 1.2, algebra] ∎
