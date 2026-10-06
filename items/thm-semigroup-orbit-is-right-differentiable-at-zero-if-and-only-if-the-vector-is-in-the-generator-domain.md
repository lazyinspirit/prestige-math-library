---
id: thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain
kind: theorem
title: "An orbit is right differentiable at zero exactly on the generator domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-dependent-choice
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - def-strongly-continuous-semigroup
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
      locator: "Chapter II Section 1, Lemma 1.3 and the remark after Definition 1.2, printed pp. 49-51"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Lemma 11.7, printed p. 255"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]). For every $t\ge0$ and $x\in X$, the right derivative of the orbit exists in $X$ exactly when $T(t)x\in D(A)$, and then it equals $AT(t)x$. In particular, at $t=0$ this derivative exists if and only if $x\in D(A)$ and equals $Ax$. If $x\in D(A)$, domain invariance gives $T(t)x\in D(A)$ and $AT(t)x=T(t)Ax$ for every $t\ge0$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]). A vector outside $D(A)$ may still yield a differentiable orbit at a positive time when $T(t)$ maps it into $D(A)$.

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]); times $t\ge0$ and vectors $x\in X$.

[F1] Definition of the generator: $z\in D(A)$ exactly when the right difference quotient $\frac{T(h)z-z}{h}$ has a limit in $X$ as $h\downarrow0$, and that limit is $Az$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F2] For $t\ge0$ and $h>0$ the semigroup law gives $T(t+h)x=T(h)T(t)x$, so the right difference quotient of the orbit at $t$ is exactly the generator quotient of the vector $T(t)x$. More generally the orbit is defined for all nonnegative times and the family is strongly continuous ([[def-strongly-continuous-semigroup]]).

[F3] Domain invariance and commutation: for $x\in D(A)$ one has $T(t)x\in D(A)$ and $AT(t)x=T(t)Ax$ for every $t\ge0$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]).



## Proof

**Proof technique:** direct: apply the definition of the generator to the vector $T(t)x$.

1.1 At $t=0$ the right derivative of $s\mapsto T(s)x$ at $0$ is by definition the limit of $(T(h)x-x)/h$, which exists exactly when $x\in D(A)$ by [F1], and then equals $Ax$. [F1]

1.2 For fixed $t\ge0$ and $h>0$, [F2] gives $\frac{T(t+h)x-T(t)x}{h}=\frac{T(h)T(t)x-T(t)x}{h}$; this is precisely the generator difference quotient of the vector $z:=T(t)x$. Hence by [F1] the right derivative of the orbit at $t$ exists exactly when $T(t)x\in D(A)$, and then equals $AT(t)x$. [F1, F2]

2.1 When $x\in D(A)$, [F3] gives $T(t)x\in D(A)$ and $AT(t)x=T(t)Ax$ for every $t\ge0$, so the criterion of [step 1.2] is automatically satisfied; conversely, for $x\notin D(A)$ the criterion shows that differentiability of the orbit at time $t>0$ holds or fails according to whether $T(t)x\in D(A)$, which need not fail for every positive time. [F3, step 1.2]

3.1 Combining [step 1.1] and [step 1.2]: for every $t\ge0$ and $x\in X$ the right derivative exists exactly when $T(t)x\in D(A)$ and equals $AT(t)x$, with the case $t=0$ reducing to the criterion $x\in D(A)$ and value $Ax$. [step 1.1, step 1.2] ∎
