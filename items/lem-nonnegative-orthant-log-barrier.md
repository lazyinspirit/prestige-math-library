---
id: lem-nonnegative-orthant-log-barrier
kind: lemma
title: "The orthant logarithmic barrier has parameter equal to its dimension"
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
      locator: "Chapter 11 §11.5 and Chapter 9 §9.6; logarithmic barrier for linear inequalities."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lectures 14 and 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Lecture 16 §16.1, full barrier statement; Lecture 14, the self-concordant convention."
---

## Statement

For $m\ge1$, let $K=\mathbb R_+^m$, $D=\mathbb R_{++}^m$, and $F(x)=-\sum_{i=1}^m\log x_i$. Under the standard Euclidean pairing, $K^*=K$. The function $F$ is an $m$-log-homogeneous self-concordant barrier on $D$ and $\lambda_F(x)=\sqrt m$ for every $x\in D$.

## Facts & Assumptions

**Given:** The local norm and self-concordant barrier convention of [[def-self-concordant-log-homogeneous-barrier]].

[F1] For the Euclidean norm, Cauchy–Schwarz gives $|a^Tb|\le\|a\|_2\|b\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F2] The dual cone is $K^*=\{z:\langle z,y\rangle\ge0\text{ for every }y\in K\}$ ([[def-conic-optimization-primal-dual-models]]).

## Proof

1.1 Coordinatewise inequalities show that $K$ is closed, convex, and closed under addition and nonnegative scaling. If both $z$ and $-z$ lie in $K$, every coordinate is zero, so $K$ is pointed; because $m\ge1$, $D=\mathbb R_{++}^m$ is nonempty and is the interior of $K$. If $z\in K$, then $\langle z,y\rangle=\sum_i z_i y_i\ge0$ for every $y\in K$, so $z\in K^*$ by [F2]. Conversely, if $z\in K^*$, testing against each standard basis vector $e_i\in K$ gives $z_i=\langle z,e_i\rangle\ge0$. Hence $z\in K$ and $K^*=K$. [given, F2, algebra]

1.2 Direct differentiation gives $DF(x)[h]=-\sum_i h_i/x_i$, $D^2F(x)[h,k]=\sum_i h_i k_i/x_i^2$, and $D^3F(x)[u,v,v]=-2\sum_i u_i v_i^2/x_i^3$. The Hessian is positive definite because $D^2F(x)[h,h]=\sum_i(h_i/x_i)^2>0$ for $h\ne0$. If $\|h\|_x<1$, then each $|h_i|/x_i<1$, hence $x_i+h_i>0$ and the Dikin inclusion holds. If a sequence in $D$ approaches a finite boundary point, at least one coordinate tends to zero while all coordinates remain bounded above; each term $-\log x_i$ is bounded below and one tends to $+\infty$, so $F\to+\infty$. [given, F1, algebra]

2.1 Put $a_i=u_i/x_i$ and $b_i=v_i/x_i$. By [F1] and $\sum_i b_i^4\le(\sum_i b_i^2)^2$, $|D^3F(x)[u,v,v]|\le2\|a\|_2(\sum_i b_i^4)^{1/2}\le2\|u\|_x\|v\|_x^2$. Also $F(\alpha x)=F(x)-m\log\alpha$, and $\|DF(x)\|_{x,*}^2=\sum_i(1/x_i)^2x_i^2=m$. These are exactly the required self-concordance and parameter conditions. [F1, step 1.2, algebra] ∎
