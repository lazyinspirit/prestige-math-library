---
id: lem-ip-vector-radon-variation-is-radon
kind: lemma
title: Variation of a finite vector Radon measure is Radon
status: draft
origin: pipeline
deps:
  - def-radon-measure-on-an-lch-space
  - def-regular-borel-measure-on-an-lch-space
  - def-regular-complex-borel-measure-on-an-lch-space
  - thm-total-variation-is-a-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $\Omega\subseteq\mathbb R^n$ be open and let $\mu=(\mu_1,\ldots,\mu_m)$ have finite signed Radon coordinate measures. For Borel $A\subseteq\Omega$ define $$V(A):=\sup\left\{\sum_{j=1}^\infty |\mu(A_j)|:(A_j)_{j\ge1}\text{ is a Borel partition of }A\right\},$$ where the norm is Euclidean. Then $V$ is a finite positive Radon measure and $$V(\Omega)=\sup\left\{\int_\Omega f\cdot d\mu:f\in C_c(\Omega;\mathbb R^m),\ |f(x)|\le1\right\}.$$

## Statement references

[[def-radon-measure-on-an-lch-space|Radon measure means a regular Borel measure finite on compact sets.]]

[[def-regular-complex-borel-measure-on-an-lch-space|Coordinate total variations are regular measures.]]

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$ and a finite tuple of finite signed Radon measures $\mu_i$.

[F1] For each coordinate, $|\mu_i|$ is a finite positive regular measure. ([[def-regular-complex-borel-measure-on-an-lch-space]], [[thm-total-variation-is-a-measure]])

[F2] Step 3.1 shows that $V$ is a regular Borel measure, with compact inner approximation on all Borel sets. ([[def-regular-borel-measure-on-an-lch-space]])

## Proof

**Given:** The open set $\Omega$ and finite signed Radon coordinate measures $\mu_i$.

1.1 For every Borel $A$ and every countable Borel partition $(A_j)$ of $A$, the Euclidean norm satisfies $|\mu(A_j)|\le\sum_{i=1}^m|\mu_i(A_j)|$. Summing over $j$ gives $V(A)\le\lambda(A)$ for $\lambda:=\sum_{i=1}^m|\mu_i|$, so $V$ is finite and $V(\Omega)<\infty$. [F1, given, algebra]

2.1 If $A=\bigsqcup_{k\ge1}E_k$ is a disjoint Borel union, then intersecting any partition of $A$ with each $E_k$ and using countable additivity of each coordinate shows $V(A)\le\sum_kV(E_k)$. Conversely, for fixed $N$ and $\varepsilon>0$, choose for each of the finitely many $k\le N$ a partition of $E_k$ whose sum exceeds $V(E_k)-\varepsilon/N$. Their union, together with $A\setminus\bigcup_{k\le N}E_k$, is a partition of $A$, so $V(A)\ge\sum_{k\le N}V(E_k)-\varepsilon$. Letting $\varepsilon\downarrow0$ and then $N\to\infty$ proves countable additivity. Thus $V$ is a finite positive Borel measure. [F1, step 1.1, given, choose]

2.2 For every $f\in C_c(\Omega;\mathbb R^m)$ with $|f|\le1$, approximate $f$ uniformly by finite-valued Borel simple functions whose values have norm at most one. The partition definition bounds each simple integral by $V(\Omega)$, and finiteness of the coordinate measures lets the uniform errors tend to zero. Hence the displayed supremum is at most $V(\Omega)$. [step 1.1, given, choose]

3.1 Since $V\le\lambda$ and $\lambda=\sum_i|\mu_i|$ is a finite regular Borel measure by [F1], for every Borel $A$ and $\varepsilon>0$ there is compact $K\subseteq A$ with $\lambda(A\setminus K)<\varepsilon$, whence $V(A\setminus K)<\varepsilon$. There is also an open $G\supseteq A$ with $\lambda(G\setminus A)<\varepsilon$, whence $V(G\setminus A)<\varepsilon$. Thus $V$ is a regular Borel measure in the sense of [[def-regular-borel-measure-on-an-lch-space]], and in particular a Radon measure. [F1, step 1.1, step 2.1, given]

4.1 If $V(\Omega)=0$, the zero field proves the reverse inequality. Otherwise fix $0<\varepsilon<V(\Omega)/4$ and choose a countable Borel partition $(A_j)$ with sum greater than $V(\Omega)-\varepsilon$; truncate after $N\ge1$ so the tail is below $\varepsilon$. Omit indices with $\mu(A_j)=0$ or $V(A_j)\le\varepsilon/(4N)$; the sum of the omitted partition values is at most $\varepsilon/4$. For every retained index, compact inner regularity [F2] gives a nonempty compact $K_j\subset A_j$ with $V(A_j\setminus K_j)<\varepsilon/(8N)$. Since there are finitely many pairwise disjoint compact sets $K_j$ in the metric space $\Omega$, choose pairwise disjoint open neighborhoods $N_j$ with compact closures in $\Omega$. Outer regularity [F2] gives open $G_j\supset K_j$ with $V(G_j\setminus K_j)<\varepsilon/(8N)$. Put $U_j=G_j\cap N_j$. Then $K_j\subset U_j$, $V(U_j\setminus K_j)<\varepsilon/(8N)$, and the closures of the $U_j$ remain pairwise disjoint compact subsets of $\Omega$. Define $$\psi_j(x):=\frac{\operatorname{dist}(x,\Omega\setminus U_j)}{\operatorname{dist}(x,\Omega\setminus U_j)+\operatorname{dist}(x,K_j)}.$$ This is continuous and compactly supported, equals one on $K_j$, and vanishes outside $U_j$. Set $e_j=\mu(A_j)/|\mu(A_j)|$ and $f=\sum_j e_j\psi_j$. The disjoint closures of the $U_j$ imply disjoint supports and $|f|\le1$. For bounded Borel vector fields, the partition definition and uniform simple-function approximation give $|\int g\cdot d\mu|\le\int|g|\,dV$. Thus replacing $e_j\mathbf1_{A_j}$ by $e_j\psi_j$ loses at most $V(A_j\setminus K_j)+V(U_j\setminus K_j)$ for each retained $j$. Summing these errors, the omitted terms, and the tail gives $\int f\cdot d\mu>V(\Omega)-3\varepsilon$. Letting $\varepsilon\downarrow0$ proves the reverse bound. [F1, F2, step 3.1, choose, construct] ∎
