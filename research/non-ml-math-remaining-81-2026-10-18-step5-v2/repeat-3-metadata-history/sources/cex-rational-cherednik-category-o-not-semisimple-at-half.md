---
id: cex-rational-cherednik-category-o-not-semisimple-at-half
kind: counterexample
title: "Category O is not semisimple at the rank-one parameter c=1/2"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-rational-cherednik-reflection-data-and-parameters
  - def-rational-cherednik-algebra
  - thm-rational-cherednik-pbw-theorem
  - def-rational-cherednik-category-o
  - def-rational-cherednik-standard-module
  - thm-rational-cherednik-standard-module-lies-in-category-o
  - def-rational-cherednik-polynomial-representation
  - lem-rational-cherednik-polynomial-representation-dunkl-formula
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§§3.1–3.2 and 3.5–3.7, rank-one commutator and polynomial standard module, PDF pp. 14–18."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§§3.1–3.2, the rank-one rational Cherednik and category-O conventions, PDF pp. 9–12."
generation:
  role: counterexample
---

## Statement

Let $W=\{1,s\}\cong\mathbb Z/2$ act on $\mathfrak h=\mathbb C$ by $s=-1$. At $t=1$ and $c=1/2$, the polynomial standard module has a nonsplit exact sequence
$$0\longrightarrow x\mathbb C[x]\longrightarrow\mathbb C[x]\longrightarrow\mathbb C\longrightarrow0.$$
Thus category $\mathcal O$ is not semisimple at this parameter.

## Facts & Assumptions

**Given:** The rank-one reflection representation, parameter $c=1/2$, and the polynomial representation.

[F1] [[def-rational-cherednik-reflection-data-and-parameters]]: choose $\alpha=x$ and $\alpha^\vee(x)=2$, so $s(x)=-x$ and $s^2=1$.

[F2] [[def-rational-cherednik-algebra]]: $[y,x]=1-2cs$ in this rank-one normalization.

[F3] [[thm-rational-cherednik-pbw-theorem]] and [[def-rational-cherednik-standard-module]]: the polynomial standard module is $\mathbb C[x]$ as a vector space.

[F4] [[def-rational-cherednik-category-o]] and [[thm-rational-cherednik-standard-module-lies-in-category-o]]: $\mathbb C[x]\in\mathcal O_c$ and its submodules and quotients are objects of $\mathcal O_c$.

[F5] [[lem-rational-cherednik-polynomial-representation-dunkl-formula]]: $y=\frac d{dx}-\frac c{x}(1-s)$ on $\mathbb C[x]$, and $s f(x)=f(-x)$.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F5].

1.1 By [F2] and [F5], $y\,x^n=\left(n-c(1-(-1)^n)\right)x^{n-1}$ for every $n\ge1$, while $y1=0$. At $c=1/2$, this is $n x^{n-1}$ for even $n$ and $(n-1)x^{n-1}$ for odd $n$. In particular, $y x=0$. [F1, F2, F5, algebra]

2.1 The subspace $I=x\mathbb C[x]$ is nonzero and proper. Multiplication by $x$ preserves $I$, $s(x^n)=(-1)^n x^n$ preserves $I$, and step 1.1 shows $y(x^n)\in I$ for every $n\ge1$: for $n=1$ it is zero, while for $n\ge2$ its polynomial degree is $n-1\ge1$. By [F3], this is the polynomial standard module; [F4] places it and its submodules in $\mathcal O_c$. [F3, F4, step 1.1, algebra]

3.1 The quotient $\mathbb C[x]/I$ is one dimensional; $x$ and $y$ act by zero and $s$ acts trivially, so it is simple. If the displayed exact sequence split, its complement would be a one-dimensional submodule $J$ mapping isomorphically to the quotient. A generator $f\in J$ would have nonzero constant term; rescale so $f(0)=1$. Since $xJ\subseteq J$, there would be a scalar $\lambda$ with $xf=\lambda f$, or $(x-\lambda)f=0$. The polynomial ring $\mathbb C[x]$ is an integral domain and both factors are nonzero, a contradiction. The sequence is nonsplit, so $\mathcal O_c$ is not semisimple. [F4, step 2.1, algebra] ∎
