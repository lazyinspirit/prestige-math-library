---
id: lem-caratheodory-composition-is-measurable
kind: lemma
title: "A Caratheodory integrand composed with measurable functions is measurable"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-borel-and-lebesgue-measurable-function-on-rn, prop-closure-properties-of-measurable-functions-used-by-the-integral, cor-measurable-functions-admit-dominated-simple-approximations, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 3.1, Caratheodory framework, printed pp. 41-42"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.1, Example 13.3 and the preceding conventions, printed pp. 295-296"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be Lebesgue measurable and let $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$ be a Caratheodory integrand: for every $(s,\xi)\in\mathbb R\times\mathbb R^n$ the map $x\mapsto f(x,s,\xi)$ is measurable ([[def-borel-and-lebesgue-measurable-function-on-rn]]), and for almost every $x\in\Omega$ the map $(s,\xi)\mapsto f(x,s,\xi)$ is continuous. If $u:\Omega\to\mathbb R$ and $w:\Omega\to\mathbb R^n$ are measurable, then $x\mapsto f(x,u(x),w(x))$ is measurable.

## Facts & Assumptions

**Given:** Countable Choice; a Lebesgue measurable set $\Omega\subseteq\mathbb R^n$; a Caratheodory integrand $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$, so that $x\mapsto f(x,s,\xi)$ is measurable for every $(s,\xi)\in\mathbb R\times\mathbb R^n$ and $(s,\xi)\mapsto f(x,s,\xi)$ is continuous for almost every $x\in\Omega$; measurable maps $u:\Omega\to\mathbb R$ and $w:\Omega\to\mathbb R^n$. Throughout, $\Omega$ carries the trace of the Lebesgue sigma-algebra and the restricted Lebesgue measure, and $N:=\{x\in\Omega:\ (s,\xi)\mapsto f(x,s,\xi)\text{ is not continuous}\}$ satisfies $|N|=0$.

[F1] Every real-valued measurable function is the pointwise limit everywhere of a sequence of real-valued simple functions ([[cor-measurable-functions-admit-dominated-simple-approximations]]).

[F2] Measurable real-valued functions are closed under finite sums, real scalar multiplication, positive and negative parts, and multiplication by measurable indicators. Countable infima and increasing suprema of measurable extended-real functions are measurable; thus $\liminf_k g_k=\sup_m\inf_{k\ge m}g_k$ is extended-real measurable and need not be finite ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[F3] For a map into $\mathbb R^m$, measurability means that preimages of Borel sets are measurable in the domain, and when $m=1$ this is the usual notion of a real-valued measurable function ([[def-borel-and-lebesgue-measurable-function-on-rn]]); under the ambient Axiom of Countable Choice this is the Lebesgue sigma-algebra framework used throughout.

[F4] The Lebesgue measure space is complete: every subset of a Lebesgue null set is Lebesgue measurable ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Proof technique:** direct, by approximation with measurable simple functions and passage to the pointwise limit.

1.1 Measurability of $u$ and of the coordinates of $w$. For every $a\in\mathbb R$ and every coordinate index $i$ the set $\{\xi\in\mathbb R^n:\xi_i>a\}$ is Borel, so $(w^i)^{-1}((a,\infty))=w^{-1}(\{\xi_i>a\})$ is measurable in $\Omega$ by [F3]; hence each coordinate function $w^i$ of $w$ is real-valued measurable, and so is $u$. [F3]

2.1 Simple approximants. By [F1] applied to $u$ there are simple functions $u_k:\Omega\to\mathbb R$ with $u_k\to u$ pointwise on $\Omega$, and by [F1] applied to each coordinate $w^i$ there are simple functions $s_k^i$ with $s_k^i\to w^i$ pointwise. Setting $w_k:=(s_k^1,\dots,s_k^n)$ gives, for each $k$, a map with finitely many values that converges to $w$ pointwise. [F1, step 1.1]

3.1 Measurability of the composed approximations. Fix $k$ and write $u_k=\sum_{i=1}^I a_i\mathbf 1_{E_i}$ and $w_k=\sum_{j=1}^J b_j\mathbf 1_{F_j}$ with pairwise disjoint measurable sets $E_i,F_j$ covering $\Omega$. For each pair $(i,j)$ the map $x\mapsto f(x,a_i,b_j)$ is measurable by the first Caratheodory clause, so $x\mapsto f(x,a_i,b_j)\mathbf 1_{E_i\cap F_j}(x)$ is measurable by the indicator clause of [F2] applied to its positive and negative parts; the finite sum $g_k:=\sum_{i,j}f(x,a_i,b_j)\mathbf 1_{E_i\cap F_j}$ is therefore measurable [F2]. Since the $E_i$ and the $F_j$ partition $\Omega$, one has $g_k(x)=f(x,u_k(x),w_k(x))$ for every $x$. [F2, step 2.1]

4.1 The limit inferior. On $\Omega\setminus N$ the map $(s,\xi)\mapsto f(x,s,\xi)$ is continuous, so $g_k(x)=f(x,u_k(x),w_k(x))\to f(x,u(x),w(x))$ there by step 2.1. Hence the extended-real measurable function $g:=\liminf_k g_k$, which exists by [F2], satisfies $g(x)=f(x,u(x),w(x))$ for every $x\in\Omega\setminus N$. [F2, step 2.1, step 3.1]

5.1 Conclusion. The function $x\mapsto f(x,u(x),w(x))$ differs from the measurable function $g$ only on the null set $N$. For a Borel set $B\subseteq\mathbb R$ (also Borel in $\overline{\mathbb R}$) its preimage is the union of $\{g\in B\}\setminus N$, which is measurable, and a subset of $N$, which is measurable by the completeness of Lebesgue measure [F4]. So $x\mapsto f(x,u(x),w(x))$ is measurable. [F4, step 4.1] ∎
