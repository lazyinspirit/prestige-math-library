---
id: thm-dirichlet-hyperbola-method
kind: theorem
title: "Dirichlet's hyperbola method for summatory convolutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-summatory-function-and-average-order,
       def-dirichlet-convolution,
       lem-finite-sum-reindexing-and-fubini]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

Let $f,g$ be arithmetic functions with summatory functions
$F(y)=\sum_{n\le y}f(n)$ and $G(y)=\sum_{n\le y}g(n)$
([[def-summatory-function-and-average-order]]). If $x\ge1$ and $U,V\ge1$
satisfy $UV=x$, then

$$
\sum_{n\le x}(f*g)(n)=\sum_{a\le U} f(a)G(x/a)+\sum_{b\le V} g(b)F(x/b)-F(U)G(V).
$$

## Facts & Assumptions

**Given:** Arithmetic functions $f,g$, a real $x\ge1$, and reals $U,V\ge1$ with $UV=x$.

## Proof

**Proof technique:** direct.

1.1 By [[def-dirichlet-convolution]], $$\sum_{n\le x}(f*g)(n)=\sum_{n\le x}\sum_{d\mid n} f(d)g(n/d)=\sum_{ab\le x}f(a)g(b),$$ where the last equality is the finite reindexing of [[lem-finite-sum-reindexing-and-fubini]]. [given, algebra]

2.1 Every lattice point $(a,b)$ with $ab\le x=UV$ lies in at least one of the regions $a\le U$ or $b\le V$, for otherwise $a>U$ and $b>V$ would give $ab>UV=x$. Therefore $$\sum_{ab\le x}f(a)g(b)=\sum_{\substack{ab\le x\\a\le U}}f(a)g(b)+\sum_{\substack{ab\le x\\b\le V}}f(a)g(b)-\sum_{\substack{a\le U\\b\le V}}f(a)g(b).$$ [step 1.1, given, algebra]

3.1 For fixed $a\le U$, the inner sum over $b$ is exactly $G(x/a)$, and for fixed $b\le V$ the inner sum over $a$ is exactly $F(x/b)$. The overlap sum factors as $$\left(\sum_{a\le U}f(a)\right)\left(\sum_{b\le V}g(b)\right)=F(U)G(V).$$ Substituting these identities into step 2.1 gives the claimed formula. [step 2.1, given, algebra] ∎
