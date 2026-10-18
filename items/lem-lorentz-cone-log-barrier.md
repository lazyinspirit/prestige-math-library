---
id: lem-lorentz-cone-log-barrier
kind: lemma
title: "The Lorentz logarithmic barrier has parameter two"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-self-concordant-log-homogeneous-barrier
  - def-conic-optimization-primal-dual-models
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.6.1, Example 11.6 and §11.6.4, Example 11.10."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.2, the second-order cone barrier and its parameter bound."
---

## Statement

For $d\ge1$, let $K=\mathcal L_{d+1}=\{(t,u):t\ge\|u\|_2\}$ and $F(t,u)=-\log(t^2-\|u\|_2^2)$ on $D=\operatorname{int}K$. The cone is self-dual under the Euclidean pairing. The function $F$ is a $2$-log-homogeneous self-concordant barrier and $\lambda_F(x)=\sqrt2$ throughout $D$.

## Facts & Assumptions

**Given:** The Euclidean pairing and the self-concordant barrier convention of [[def-self-concordant-log-homogeneous-barrier]].

[F1] The local norm is the square root of the Hessian quadratic form, and its dual is induced by the inverse Hessian ([[def-self-concordant-log-homogeneous-barrier]]).

[F2] The dual cone is the set of vectors pairing nonnegatively with every cone element ([[def-conic-optimization-primal-dual-models]]).

## Proof

1.1 Continuity of the Euclidean norm makes $K$ closed, and its triangle inequality makes $K$ convex and closed under addition and nonnegative scaling. If $(t,u)$ and its negative are both in $K$, then $t\ge\|u\|$ and $-t\ge\|u\|$, forcing $t=0,u=0$; hence $K$ is pointed. The point $(1,0)$ is interior, so $K$ is proper. If $(a,v)\in K$ and $(t,u)\in K$, then $at+v^Tu\ge at-\|v\|_2\|u\|_2\ge0$, so $K\subseteq K^*$ by [F2]. Conversely, suppose $(a,v)\in K^*$. If $v=0$ and $a<\|v\|_2=0$, then pairing with $(1,0)\in K$ gives $a<0$, a contradiction. If $v\ne0$ and $a<\|v\|_2$, pairing with $(1,-v/\|v\|_2)\in K$ gives $a-\|v\|_2<0$, also a contradiction. Thus $a\ge\|v\|_2$ and $K^*=K$. [F2, given, algebra]

1.2 Write $\rho=t^2-\|u\|_2^2>0$. An orthogonal change of spatial coordinates followed by the Lorentz boost $\rho^{-1/2}\begin{pmatrix}t&-\|u\|\\-\|u\|&t\end{pmatrix}$ on the time and first spatial coordinate preserves $\rho$ and maps $(t,u)$ to $(\sqrt\rho,0)$. Since $F$ is invariant under this invertible linear cone map, the chain rule transports its Hessian, third derivative, and local norms; the Newton decrement is invariant as well. At the canonical point $\nabla F=(-2/\sqrt\rho,0)$ and $D^2F=(2/\rho)I$. For directions $h=(a,p)$ and $k=(b,v)$, direct differentiation gives $D^3F[h,k,k]=-\frac{4\{a(b^2+\|v\|_2^2)+2b\,p^Tv\}}{\rho^{3/2}}$. These formulas also show the Hessian is positive definite. [given, F1, algebra, construct]

2.1 By Cauchy–Schwarz and $2|b|\|v\|_2\le b^2+\|v\|_2^2$, the numerator in step 1.2 has absolute value at most $4\sqrt2\sqrt{a^2+\|p\|_2^2}(b^2+\|v\|_2^2)/\rho^{3/2}=2\|h\|_x\|k\|_x^2$. If $\|h\|_x<1$, set $A=|a|/\sqrt\rho$ and $B=\|p\|_2/\sqrt\rho$. Then $A^2+B^2<1/2$, so $1+a/\sqrt\rho\ge1-A>0$ and $(1+a/\sqrt\rho)^2-B^2\ge(1-A)^2-B^2>2(A-1/2)^2\ge0$. Thus $\sqrt\rho+a>\|p\|_2$ and the Dikin ball stays inside $D$. The Lorentz transformation carries this inclusion to every $x$. Approaching a finite boundary point makes $\rho\downarrow0$, hence $F\to+\infty$. Finally, $F(\alpha x)=F(x)-2\log\alpha$, and step 1.2 gives $\|DF(x)\|_{x,*}^2=2$. [step 1.2, F1, algebra] ∎
