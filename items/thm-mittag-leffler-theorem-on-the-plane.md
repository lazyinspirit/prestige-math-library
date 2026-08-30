---
id: thm-mittag-leffler-theorem-on-the-plane
kind: theorem
title: "Mittag-Leffler on the complex plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-part-at-an-isolated-point,
       cor-runge-polynomial-approximation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis, Theorem 3.3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $A=\{a_1,a_2,\dots\}\subseteq\mathbb C$ be a discrete set, listed so that
$|a_n|\to\infty$, and let $p_n$ be a prescribed principal part at $a_n$ for
each $n$. Then there is a meromorphic function $f$ on $\mathbb C$ whose
principal part at $a_n$ is $p_n$ for every $n$.

## Facts & Assumptions

**Given:** A discrete set $A=\{a_n\}$ with $|a_n|\to\infty$ and prescribed principal parts $p_n$.

[L1] A prescribed principal part is a finite negative Laurent polynomial at the chosen point ([[def-principal-part-at-an-isolated-point]]).

[L2] On a compact set with connected complement, every holomorphic function on a neighbourhood is uniformly approximable by polynomials ([[cor-runge-polynomial-approximation]]).

## Proof

**Proof technique:** constructive.

1.1 Choose radii $R_n\uparrow\infty$ so that $A\cap\partial D(0,R_n)=\varnothing$ and $A\cap\overline D(0,R_n)$ is finite for every $n$. [given, L1, choose] Put $$S_1:=A\cap\overline D(0,R_1),\qquad S_n:=A\cap\bigl(\overline D(0,R_n)\setminus \overline D(0,R_{n-1})\bigr)\quad(n\ge2).$$ Then each $S_n$ is finite and $A=\bigsqcup_{n\ge1} S_n$. For $n\ge2$, the finite sum $$f_n(z):=\sum_{a_k\in S_n} p_k(z)$$ is holomorphic on a neighbourhood of $\overline D(0,R_{n-1})$, because every pole it carries lies outside that disc. Set likewise $f_1(z):=\sum_{a_k\in S_1} p_k(z)$. [given, L1, choose]

2.1 By [L2], for each $n\ge2$ choose a polynomial $q_n$ such that [L2, step 1.1, construct] $$\sup_{|z|\le R_{n-1}}|f_n(z)-q_n(z)|<2^{-n}.$$ Put $g_1:=f_1$ and $g_n:=f_n-q_n$ for $n\ge2$. Then every $g_n$ is meromorphic on $\mathbb C$, has the same principal parts as the finitely many $p_k$ with $a_k\in S_n$, and is holomorphic on $\overline D(0,R_{n-1})$. [L2, step 1.1, construct]

3.1 Fix a compact set $K\subseteq\mathbb C\setminus A$. Choose $\ell$ with [step 2.1, choose, algebra, discharge-construct] $K\subseteq\overline D(0,R_\ell)$. For every $n\ge \ell+1$, one has $K\subseteq\overline D(0,R_{n-1})$, so step 2.1 gives $\sup_K|g_n|\le2^{-n}$. Hence $\sum_{n\ge1} g_n$ converges uniformly on $K$. Near any point $a_k\in S_\ell$, all terms except $g_\ell$ are holomorphic, so the sum $f:=\sum_{n\ge1}g_n$ is meromorphic on $\mathbb C$ and has principal part $p_k$ at $a_k$. [step 2.1, choose, algebra, discharge-construct] ∎
