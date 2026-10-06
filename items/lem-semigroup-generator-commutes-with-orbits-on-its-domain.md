---
id: lem-semigroup-generator-commutes-with-orbits-on-its-domain
kind: lemma
title: "The generator commutes with the semigroup on its domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
  - def-dependent-choice
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-strongly-continuous-semigroup
  - def-operator-norm
  - lem-composition-operator-norm-inequality
  - lem-strong-continuity-at-zero-implies-orbit-continuity
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
      locator: "Chapter II Section 1, Lemma 1.3, printed pp. 50-51"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Lemma 11.7 and Corollary 11.10, printed pp. 255-259"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Proposition 1.10 and proof, printed pp. 6-7 (March 19, 2026 revision)"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]). If $x\in D(A)$, then $T(t)x\in D(A)$ and $AT(t)x=T(t)Ax$ for every $t\ge0$; moreover the orbit $t\mapsto T(t)x$ is differentiable on $(0,\infty)$ with $\frac{d}{dt}T(t)x=T(t)Ax=AT(t)x$, and right differentiable at $t=0$ with right derivative $Ax$.

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]) and a vector $x\in D(A)$.

[F1] $x\in D(A)$ means that $\frac{T(h)x-x}{h}\to Ax$ as $h\downarrow0$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F2] The semigroup law $T(t+h)=T(t)T(h)$ holds for all $t,h\ge0$, and operator norms satisfy $\|Sy\|\le\|S\|\,\|y\|$ ([[def-operator-norm]], [[lem-composition-operator-norm-inequality]]).

[F3] The family is locally bounded and the orbit of every vector is continuous on $[0,\infty)$ ([[lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval]], [[def-strongly-continuous-semigroup]]): for $t_0>0$ there is $M$ with $\|T(s)\|\le M$ for $s\in[0,t_0]$, and $T(s)z\to T(t)z$ for every $z$ as $s\to t$.



## Proof

**Proof technique:** direct, writing the difference quotients of the orbit as $T(\cdot)$ applied to the generator quotient.

1.1 For $t\ge0$ and $h>0$, the semigroup law gives $\frac{T(t+h)x-T(t)x}{h}=T(t)\frac{T(h)x-x}{h}$. [F2]

2.1 Since $\frac{T(h)x-x}{h}\to Ax$ by [F1] and $T(t)$ is a fixed bounded operator, the right difference quotient in [step 1.1] converges to $T(t)Ax$ as $h\downarrow0$. Hence the right derivative of the orbit at $t$ exists and equals $T(t)Ax$; taking $t=0$ shows that the right derivative at $0$ is $Ax$ and, for general $t$, that $T(t)x\in D(A)$ with $AT(t)x=T(t)Ax$. [F1, F2, step 1.1]

3.1 Left derivative at $t>0$: for $0<h<t$ one has $\frac{T(t-h)x-T(t)x}{-h}=T(t-h)\frac{T(h)x-x}{h}$. Let $v_h:=\frac{T(h)x-x}{h}\to Ax$ and use the local bound $M$ on $[0,t]$ from [F3]: $\bigl\|T(t-h)v_h-T(t)Ax\bigr\|\le M\|v_h-Ax\|+\bigl\|\bigl(T(t-h)-T(t)\bigr)Ax\bigr\|\to0$, because $v_h\to Ax$ and $T(t-h)\to T(t)$ strongly as $h\downarrow0$ by [F3]. Hence the left derivative at $t$ also equals $T(t)Ax=AT(t)x$. [F2, F3, step 1.1, step 2.1]

4.1 Combining [step 2.1] and [step 3.1], for every $x\in D(A)$ and every $t\ge0$ the orbit satisfies $T(t)x\in D(A)$, $AT(t)x=T(t)Ax$, and $t\mapsto T(t)x$ is differentiable on $(0,\infty)$ with derivative $T(t)Ax=AT(t)x$, with right derivative $Ax$ at $t=0$. [step 2.1, step 3.1] ∎
