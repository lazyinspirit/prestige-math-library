---
id: cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero
kind: corollary
title: "A semigroup with unbounded generator is not norm continuous at zero"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - def-bochner-integrable-function
  - def-bounded-linear-operator
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-operator-norm
  - def-strongly-continuous-semigroup
  - def-unital-banach-algebra
  - lem-bochner-integral-norm-inequality
  - lem-linearity-of-the-bochner-integral
  - lem-composition-operator-norm-inequality
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - lem-neumann-series
  - thm-bounded-operator-space-is-banach
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Corollary 1.5 and the equivalence with uniform continuity, printed pp. 52-54"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.2, Problem 11.10 and the discussion after Theorem 11.4, printed pp. 251-252"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]). If $T$ is continuous at $0$ in the operator norm, i.e. $\|T(t)-I\|\to0$ as $t\downarrow0$, then $A\in\mathcal B(X)$ and $D(A)=X$. Consequently either an unbounded generator or a proper generator domain $D(A)\ne X$ rules out operator-norm continuity at $0$.

## Facts & Assumptions

**Given:** Countable Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]), which is continuous at $0$ in the operator norm.

[F1] For every $\varepsilon>0$, operator-norm continuity at $0$ gives $\tau>0$ such that $\|T(s)-I\|\le1/2$ for every $0\le s\le\tau$ ([[def-operator-norm]], [[def-strongly-continuous-semigroup]]).

[F2] The time integral of each continuous orbit is Bochner integrable; the integral is linear and satisfies $\|\int g(s)\,ds\|\le\int\|g(s)\|\,ds$ ([[def-bochner-integrable-function]], [[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]]). The integrated-orbits identity gives $Vx\in D(A)$ and $AVx=T(t)x-x$ for $Vx:=\int_0^tT(s)x\,ds$ ([[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]]).

[F3] The operator space $\mathcal B(X)$ is a Banach space in the operator norm and composition is submultiplicative ([[thm-bounded-operator-space-is-banach]], [[lem-composition-operator-norm-inequality]], [[def-operator-norm]]). For $\|K\|<1$, the Neumann series makes $I+K$ invertible in $\mathcal B(X)$ ([[lem-neumann-series]], [[def-unital-banach-algebra]]); for a real Banach space the same geometric-series and telescoping argument applies.

[F4] If $S,T\in\mathcal B(X)$, then $ST\in\mathcal B(X)$ and $\|ST\|\le\|S\|\,\|T\|$ ([[def-bounded-linear-operator]], [[lem-composition-operator-norm-inequality]]).



## Proof

**Proof technique:** direct: a short-time integral of the semigroup is invertible and maps onto the generator domain; the integrated-orbits identity then expresses the generator as a product of bounded operators.

1.1 If $X=\{0\}$ the conclusion is immediate; assume $X\ne\{0\}$. By [F1] choose $t\in(0,\tau]$ and define $Vx:=\int_0^tT(s)x\,ds$. By [F2], the operator $V$ is linear, and for every $x\in X$, $\|Vx\|\le\int_0^t\|T(s)x\|\,ds\le\frac{3t}{2}\|x\|$; hence $V\in\mathcal B(X)$. The integrated-orbits identity gives $VX\subseteq D(A)$. [F1, F2, given]

1.2 For every $x\in X$, linearity and the norm inequality for the Bochner integral give $\|(V-tI)x\|=\|\int_0^t(T(s)-I)x\,ds\|\le\int_0^t\|(T(s)-I)x\|\,ds\le\frac t2\|x\|$ by [F1]. Taking the supremum over $\|x\|\le1$ yields $\|V-tI\|\le t/2$. [F1, F2]

2.1 Put $K:=(V-tI)/t$. Then $V=t(I+K)$ and $\|K\|\le1/2<1$; [F3] gives $(I+K)^{-1}=\sum_{n\ge0}(-K)^n$ in $\mathcal B(X)$, so $V$ is invertible and $VX=X$. [F3, step 1.2]

3.1 Since $VX=X$ and $VX\subseteq D(A)$ by [F2], every element of $X$ lies in $D(A)$; hence $D(A)=X$. [F2, step 2.1]

4.1 For $y\in X$, write $y=Vx$ with $x=V^{-1}y$. The identity in [F2] gives   $$Ay=AVx=(T(t)-I)x=(T(t)-I)V^{-1}y.$$ Thus $A=(T(t)-I)V^{-1}\in\mathcal B(X)$ by [F4]. [F2, F4, step 2.1, step 3.1]

5.1 Therefore operator-norm continuity at $0$ forces $D(A)=X$ and a bounded generator; contrapositively, an unbounded generator cannot have an operator-norm continuous semigroup at $0$. [step 3.1, step 4.1] ∎
