---
id: thm-exponential-bound-for-a-c-zero-semigroup
kind: theorem
title: "Exponential bound for a C0-semigroup"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-dependent-choice
  - def-strongly-continuous-semigroup
  - lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
  - def-operator-norm
  - lem-composition-operator-norm-inequality
  - def-real-exponential-function-and-e
  - cor-exponential-is-a-bijection-onto-positive-reals
  - thm-exponential-addition-formula
  - def-bounded-linear-operator
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
      locator: "Chapter I Section 5, Proposition 5.5 and Definition 5.6, printed pp. 39-40"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Lemma 11.6, printed pp. 253-254"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Lemma 1.4, printed pp. 2-3"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ ([[def-strongly-continuous-semigroup]]). Then there exist $M\ge1$ and $\omega\in\mathbb R$ with $\|T(t)\| \le Me^{\omega t}$ for all $t\ge0$. For $X\ne\{0\}$ one may take $M:=\sup_{0\le s\le1}\|T(s)\|$ and $\omega:=\log M$; for $X=\{0\}$ take $M=1$, $\omega=0$.

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ ([[def-strongly-continuous-semigroup]]).

[F1] Local boundedness: $M_0:=\sup_{0\le s\le1}\|T(s)\|<\infty$; the proof of the lemma uses DC through the uniform boundedness principle ([[lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval]]).

[F2] The operator norm is submultiplicative: $\|ST\|\le\|S\|\,\|T\|$, and $\|Sy\|\le\|S\|\,\|y\|$ for every $y\in X$ ([[def-operator-norm]], [[lem-composition-operator-norm-inequality]], [[def-bounded-linear-operator]]).

[F3] The semigroup law $T(r+s)=T(r)T(s)$ for $r,s\ge0$ and $T(0)=I$ ([[def-strongly-continuous-semigroup]]).

[F4] The real exponential satisfies $e^{u+v}=e^ue^v$, $e^u>0$ for all real $u$, $\exp:\mathbb R\to(0,\infty)$ is a bijection, and $e^u\ge1$ for $u\ge0$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-is-a-bijection-onto-positive-reals]]).



## Proof

**Proof technique:** direct, bounding the powers of $T(1)$ by the local bound and absorbing them into an exponential.

1.1 If $X=\{0\}$ take $M:=1$ and $\omega:=0$: then $\|T(t)\|=0\le Me^{\omega t}$ for every $t$. Otherwise $X\ne\{0\}$, so $\|I\|=1$ and [F1] gives $M:=\sup_{0\le s\le1}\|T(s)\|\ge\|T(0)\|=1$ with $M<\infty$; set $\omega:=\log M$, which exists by [F4] because $M\ge1$. [F1, F3, F4]

2.1 For $t\ge0$ write $t=n+s$ with $n:=\lfloor t\rfloor\in\mathbb N_0$ and $s\in[0,1)$. By the semigroup law, $T(t)=T(s)T(1)^n$, hence $\|T(t)\|\le\|T(s)\|\,\|T(1)\|^n\le M^{n+1}$ by [F2] and the choice of $M$. [F2, F3, step 1.1]

3.1 Since $M\ge1$ and $n\le t$, [F4] gives $M^{n+1}=M\,e^{n\log M}\le M\,e^{t\log M}=Me^{\omega t}$. [F4, step 2.1]

4.1 Combining [step 2.1] and [step 3.1], $\|T(t)\|\le Me^{\omega t}$ for every $t\ge0$, with $M\ge1$ and $\omega\in\mathbb R$; in the nonzero case the displayed $M=\sup_{0\le s\le1}\|T(s)\|$ and $\omega=\log M$ are the explicit choices, and in the zero-space case the bound holds trivially for $M=1$, $\omega=0$. [step 1.1, step 3.1] ∎

Note. The constant $\omega=\log M$ need not be optimal: any larger $\omega$ also works, since $e^{\omega t}$ is nondecreasing in $\omega$ for $t\ge0$; the growth bound $\omega_0(T)=\inf\{\omega:\exists M,\ \|T(t)\|\le Me^{\omega t}\}$ is not needed here.
