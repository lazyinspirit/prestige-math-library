---
id: lem-real-francis-double-shift-polynomial
kind: lemma
title: "The real Francis double-shift polynomial is real and annihilates its trailing block"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-real-and-complex-schur-forms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "James W. Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $B=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathbb R^{2\times2}$, set $s=\operatorname{tr}B=a+d$, $t=\det B=ad-bc$, and define $p(z)=z^2-sz+t$. Then $p(z)=\det(zI-B)$ and $p(B)=0$. If $s^2-4t<0$, the roots are a nonreal conjugate pair $\mu,\overline\mu$, and for every real square matrix $H$ of positive dimension,

$$p(H)=H^2-sH+tI=(H-\mu I)(H-\overline\mu I)$$

is real. This supplies the exact polynomial used by a real double-shift step; it asserts no convergence of the iteration.

## Facts & Assumptions

**Given:** A real $2\times2$ matrix $B$ and the scalars $s,t$ above.

[F1] [[def-real-and-complex-schur-forms]]: a real $2\times2$ Schur block for a conjugate pair has negative characteristic-polynomial discriminant.

## Proof

1.1 Direct expansion gives $\det(zI-B)=(z-a)(z-d)-bc=z^2-(a+d)z+(ad-bc)=p(z)$. [given, algebra]

1.2 Direct multiplication gives $B^2=\begin{pmatrix}a^2+bc&b(a+d)\\c(a+d)&d^2+bc\end{pmatrix}$, so subtracting $(a+d)B$ and adding $(ad-bc)I$ makes all four entries zero. Hence $p(B)=0$. [given, algebra]

2.1 If $s^2-4t<0$, the quadratic formula gives roots $\mu=s/2+i\sqrt{4t-s^2}/2$ and $\overline\mu$. Their product and sum are $t$ and $s$, so $p(H)=(H-\mu I)(H-\overline\mu I)$. In the application where $B$ is a real Schur block for a conjugate pair, [F1] supplies exactly this negative-discriminant hypothesis; the statement's general algebraic case already assumes it. Since $s,t,H$ are real, $H^2-sH+tI$ is real. [given, F1, step 1.1, algebra] ∎
