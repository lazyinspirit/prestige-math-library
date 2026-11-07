---
dependency_level: 0
id: def-abstract-large-sieve-setting
kind: definition
title: "Large-sieve data and the optimal large-sieve constant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-finite-cardinality
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-cauchy-reals-lub-complete
  - thm-nth-roots-exist
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 15"
      url: "https://kskedlaya.org/ant/chap-largesieve.html"
      locator: "§§15.1–15.3"
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 2, §§2.1–2.3, printed pp. 8–21"
verification:
  precheck: pass
---

## Definition

Let $X$ be a finite set, let $\mu:X\to[0,\infty)$ be weights with
$\mu(X):=\sum_{x\in X}\mu(x)>0$, let $J$ be a finite index set, and let
$(\phi_j)_{j\in J}$ be a family of complex-valued functions on $X$. Repeated
functions at different indices are counted with their multiplicity. For
$a:X\to\mathbb C$, put
$$\|a\|_{\mu}^{2}:=\sum_{x\in X}\mu(x)|a(x)|^{2}.$$
The **optimal large-sieve constant** of $(X,\mu,(\phi_j)_{j\in J})$ is
$$\Delta(X,\mu,(\phi_j)_{j\in J}):=\sup_{\|a\|_{\mu}>0} \frac{\displaystyle\sum_{j\in J} \left|\sum_{x\in X}\mu(x)a(x)\overline{\phi_j(x)}\right|^{2}} {\|a\|_{\mu}^{2}}.$$
Equivalently, it is the least $\Delta\ge0$ such that
$$\sum_{j\in J} \left|\sum_{x\in X}\mu(x)a(x)\overline{\phi_j(x)}\right|^{2} \le\Delta\sum_{x\in X}\mu(x)|a(x)|^{2}$$
for every $a:X\to\mathbb C$. It is finite: finite Cauchy–Schwarz bounds the
ratio by $\sum_{j\in J}\sum_{x\in X}\mu(x)|\phi_j(x)|^{2}$, which is a
finite real number. The empty family has constant $0$.

## Definition references

[[def-finite-cardinality]]

[[thm-cauchy-schwarz-in-an-inner-product-space]]

[[cor-cauchy-reals-lub-complete]]

[[thm-nth-roots-exist]]

[Kedlaya, Chapter 15, full text](https://kskedlaya.org/ant/chap-largesieve.html)

[Kowalski, Chapter 2, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The finite set $X$, nonnegative weights $\mu$ with $\mu(X)>0$,
finite index set $J$, and complex-valued functions $(\phi_j)_{j\in J}$ from
the Definition.

[F1] In a finite-dimensional complex inner-product space,
$|\langle u,v\rangle|\le\|u\|\|v\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F2] Every nonempty bounded-above subset of $\mathbb R$ has a supremum
([[cor-cauchy-reals-lub-complete]]).

[F3] Finite sets admit finite sums, and $\mu(X)$ is the sum of the weights
([[def-finite-cardinality]]).

[F4] Every nonnegative real has a unique nonnegative square root
([[thm-nth-roots-exist]]).

## Proof

1.1 For each $a:X\to\mathbb C$ with $\|a\|_\mu>0$ and each $j\in J$, apply [F1] in $\mathbb C^X$ to the vectors $(\sqrt{\mu(x)}a(x))_{x\in X}$ and $(\sqrt{\mu(x)}\phi_j(x))_{x\in X}$. This gives $\left|\sum_{x\in X}\mu(x)a(x)\overline{\phi_j(x)}\right|^2 \le \|a\|_\mu^2\sum_{x\in X}\mu(x)|\phi_j(x)|^2.$ Summing over the finite set $J$ shows the defining ratio is bounded by the finite nonnegative number $B:=\sum_{j\in J}\sum_{x\in X}\mu(x)|\phi_j(x)|^2$. [F1, F3, F4, given, construct]

2.1 Because $\mu(X)>0$, some $x_0\in X$ has $\mu(x_0)>0$; the indicator of $\{x_0\}$ has positive $\mu$-norm. Thus the set of ratios in the Definition is nonempty, and by step 1.1 it is bounded above by $B$. Its supremum exists by [F2], is finite, and is precisely $\Delta(X,\mu,(\phi_j)_{j\in J})$. [F2, F3, step 1.1, given, choose]

3.1 Every positive-norm $a$ has ratio at most this supremum, so it satisfies the second-moment inequality with constant $\Delta$. If $\|a\|_\mu=0$, then each nonnegative summand $\mu(x)|a(x)|^2$ is zero, so every coefficient $\sum_x\mu(x)a(x)\overline{\phi_j(x)}$ is zero and the same inequality holds. Any other constant valid for every $a$ bounds every ratio and is therefore at least their supremum. Hence $\Delta$ is the least constant in the Definition; when $J=\varnothing$, all numerators and $\Delta$ are zero. [step 2.1, F3, given, algebra] ∎
