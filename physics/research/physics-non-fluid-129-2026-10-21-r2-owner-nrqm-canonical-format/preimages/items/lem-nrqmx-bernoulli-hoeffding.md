---
id: lem-nrqmx-bernoulli-hoeffding
kind: lemma
title: "Two-sided Hoeffding bound for Bernoulli frequencies"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - lem-bounded-variable-hoeffding-mgf
dependency_roles:
  lem-bounded-variable-hoeffding-mgf: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dmitry Panchenko, MIT OpenCourseWare 18.465, Lecture 07: Hoeffding’s inequality, Spring 2007"
      url: "https://live.ocw.mit.edu/courses/18-465-topics-in-statistics-statistical-learning-theory-spring-2007/8fc2f7e9e92e6ed03edf22dd35f37eb5_lecture07.pdf"
---

## Statement

Let $n\ge1$, $p\in[0,1]$, and let $X_1,\ldots,X_n:\Omega\to\{0,1\}$ be measurable on a probability space with
$$\mathbb P(X_1=x_1,\ldots,X_n=x_n)=\prod_{k=1}^n b_p(x_k)\quad\text{for every }(x_1,\ldots,x_n)\in\{0,1\}^n.$$
Here $b_p(1)=p$ and $b_p(0)=1-p$, including $p=0$ and $p=1$. Thus the variables have the stated independent Bernoulli product law. For their frequency $f=n^{-1}\sum_{k=1}^nX_k$ and every $t>0$,
$$
\mathbb P(|f-p|\ge t)\le2e^{-2nt^2}.
$$
No axiom of choice is assumed.

## Statement references

[[lem-bounded-variable-hoeffding-mgf]]

## Facts & Assumptions

**Given:** $n\ge1$, $p\in[0,1]$, and the finite Bernoulli product law in the Statement.

[A1] For each tuple in $\{0,1\}^n$, its probability is the product of the one-coordinate probabilities $b_p(1)=p$ and $b_p(0)=1-p$.

[F1] [[lem-bounded-variable-hoeffding-mgf]]: if $Y$ is measurable with $0\le Y\le1$ almost surely, then $\mathbb E e^{\lambda(Y-\mathbb EY)}\le e^{\lambda^2/8}$ for every real $\lambda$; its proof does not assume choice.

## Proof

1.1 Summing the product law [A1] over the other $n-1$ coordinates gives $\mathbb P(X_k=1)=p\prod_{j\ne k}(p+(1-p))=p$, so $\mathbb E X_k=p$. Put $S=\sum_{k=1}^n(X_k-p)$. By [F1], $\mathbb E e^{\lambda(X_k-p)}\le e^{\lambda^2/8}$ for every real $\lambda$. Expanding the finite expectation over $\{0,1\}^n$ and using [A1] factors it into the product of these $n$ expectations. Hence $\mathbb E e^{\lambda S}\le e^{n\lambda^2/8}$. [given, A1, F1, algebra]

1.2 For $\lambda>0$, $S\ge nt$ implies $e^{\lambda S}\ge e^{\lambda nt}$. For any nonnegative $W$ and $c>0$, $W\ge c\,\mathbf1_{\{W\ge c\}}$, so $\mathbb P(W\ge c)\le\mathbb EW/c$. Apply this to $W=e^{\lambda S}$ and then step 1.1 to get $\mathbb P(f-p\ge t)\le e^{-\lambda nt+n\lambda^2/8}$. Setting $\lambda=4t$ gives $e^{-2nt^2}$. [given, A1, step 1.1, algebra]

2.1 Apply the same argument to $-S$, using step 1.1 at $-4t$; it gives $\mathbb P(p-f\ge t)\le e^{-2nt^2}$. The union bound follows from $\mathbf1_{A\cup B}\le\mathbf1_A+\mathbf1_B$, so adding the two tails proves the claim. Endpoints $p=0,1$ are included by [A1]: then every $X_k=p$ almost surely and the left side is zero for $t>0$. [given, A1, step 1.1, algebra] ∎
