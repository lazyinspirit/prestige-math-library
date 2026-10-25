---
id: cex-a-mild-solution-need-not-be-classical
kind: counterexample
title: "A mild solution need not be classical"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - thm-locally-integrable-functions-embed-in-distributions
  - def-dependent-choice
  - ex-right-translation-semigroup-on-lp
  - def-classical-strong-and-mild-abstract-cauchy-solutions
  - thm-variation-of-constants-formula
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-l-p-space-as-a-quotient-by-null-functions
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Example 11.3 and the paragraph defining mild solutions, printed pp. 259-260"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 3.1, the mild-solution construction, printed pp. 19-20"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 6, the discussion of immediate differentiability after Proposition 6.2, printed pp. 145-146"
verification:
  precheck: pass
---

## Statement refuted

Assume Dependent Choice ([[def-dependent-choice]]), hence Countable Choice. Let $1\le p<\infty$, $X=L^p(\mathbb R)$, let $(T(t))_{t\ge0}$ be the right-translation semigroup with generator $A f=f'$, $D(A)=W^{1,p}(\mathbb R)$ ([[ex-right-translation-semigroup-on-lp]]), and let $f_0:=\mathbf 1_{(0,1)}\in L^p(\mathbb R)$. Then $f_0\notin D(A)$ and $u(t):=T(t)f_0=\mathbf 1_{(-t,1-t)}$ is the unique mild solution of $u'=Au$, $u(0)=f_0$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]], [[thm-variation-of-constants-formula]]), but $u$ is not a classical solution: for every $t\ge0$, $u(t)=\mathbf 1_{(-t,1-t)}$ is a nondegenerate indicator and hence not in $W^{1,p}(\mathbb R)=D(A)$, whereas a classical solution must satisfy $u(t)\in D(A)$ for all $t\ge0$, in particular at $t=0$. The difference quotients $(T(h)f_0-f_0)/h$ have no limit in $L^p$, consistently with $f_0\notin D(A)$.

**Refuted claim.** Every mild solution of the homogeneous abstract Cauchy problem $u'=Au$, $u(0)=x$ is a classical solution. The right-translation semigroup on $L^p(\mathbb R)$ provides a mild solution whose initial datum lies outside the generator domain, so the classical-solution condition $u(t)\in D(A)$ fails at every time.

## Facts & Assumptions

**Given:** Dependent Choice; $1\le p<\infty$, $X=L^p(\mathbb R)$, the right-translation semigroup $(T(t))_{t\ge0}$ with $(T(t)g)(s)=g(s+t)$, its generator $Af=f'$ with $D(A)=W^{1,p}(\mathbb R)$ ([[ex-right-translation-semigroup-on-lp]]), and $f_0:=\mathbf 1_{(0,1)}$ with $u(t):=T(t)f_0=\mathbf 1_{(-t,1-t)}$.

[F1] The generator of the right-translation semigroup is the weak derivative with domain $W^{1,p}(\mathbb R)$, so $D(A)=W^{1,p}(\mathbb R)$ ([[ex-right-translation-semigroup-on-lp]], [[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] The mild solution of $u'=Au$, $u(0)=x$ is the continuous function $u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds$ with $f=0$, which is the unique mild solution and the unique integral solution ([[def-classical-strong-and-mild-abstract-cauchy-solutions]], [[thm-variation-of-constants-formula]]).

[F3] A classical solution on $[0,\infty)$ must satisfy $u(t)\in D(A)$ for every $t$, in particular at $t=0$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]]).

[F4] $L^p$ classes are almost-everywhere classes with the norm of [[def-l-p-space-as-a-quotient-by-null-functions]]; a jump discontinuity is the model of a function without a locally integrable weak derivative, and the one-dimensional computation used here is carried out in [step 1.2].



## Counterexample

**Proof technique:** direct: identify the mild solution and test membership in $W^{1,p}$ by the defining weak-derivative identity.

1.1 $u(t)=T(t)f_0=\mathbf 1_{(-t,1-t)}$ and $u$ is the unique mild solution: with $x=f_0$ and $f=0$ the variation-of-constants formula gives $u(t)=T(t)f_0$, which is continuous, and [F2] gives uniqueness. [F2]

1.2 Suppose $v\in L^p(\mathbb R)$ were a weak derivative of $f_0=\mathbf1_{(0,1)}$. Testing on each of the open intervals $(-\infty,0)$, $(0,1)$ and $(1,\infty)$ gives $\int v\varphi=0$ for every test supported there. The injective distribution embedding [[thm-locally-integrable-functions-embed-in-distributions]] applies because $v$ is locally integrable (Hölder on compact intervals, or its $L^1$ integrability when $p=1$) and Countable Choice holds. It gives $v=0$ almost everywhere on all three intervals, hence on $\mathbb R$ since $\{0,1\}$ is null. Take one smooth compactly supported test $\varphi$ with $\varphi(0)=0$, $\varphi(1)=1$. Then $\int f_0\varphi\prime=\varphi(1)-\varphi(0)=1$, while $-\int v\varphi=0$, contradicting the weak-derivative identity. This covers $p=1$ without an invalid shrinking $L^\infty$ norm estimate. [F1, F4, given]

2.1 Consequently $f_0\notin D(A)$ by [F1], so $u(0)\notin D(A)$; by [F3] $u$ is not a classical solution, and the same computation applies to every $u(t)=\mathbf 1_{(-t,1-t)}$, so membership in $D(A)$ fails at every $t\ge0$. [F1, F3, step 1.2]

3.1 The difference quotients $\frac{T(h)f_0-f_0}{h}$ have no limit in $L^p$: if they had a limit $g$, then $f_0\in D(A)$ with $Af_0=g$ by the definition of the generator [F1], contradicting [step 2.1]. [F1, step 2.1]

4.1 Hence the mild solution $u(t)=\mathbf 1_{(-t,1-t)}$ of $u'=Au$, $u(0)=f_0$ is not classical, and the initial datum lies outside the generator domain; mild solutions are exactly the device that keeps such data admissible. [step 1.1, step 2.1, step 3.1] ∎
