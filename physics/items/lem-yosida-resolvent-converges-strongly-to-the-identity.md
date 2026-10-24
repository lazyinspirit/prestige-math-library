---
id: lem-yosida-resolvent-converges-strongly-to-the-identity
kind: lemma
title: "The Yosida resolvent converges strongly to the identity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps:
  - def-resolvent-of-a-closed-operator
  - cor-resolvent-power-estimates-for-semigroup-generators
  - thm-generators-are-closed-and-densely-defined
  - def-bounded-linear-operator
  - def-operator-norm
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
      locator: "Chapter II Section 3, Lemma 3.4, printed pp. 72-73"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Lemma 11.15, printed pp. 263-264"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.2, Yosida approximation step of Theorem 1.26, printed pp. 16-20"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A:D(A)\subseteq X\to X$ be closed and densely defined on a Banach space $X$, and let $M\ge1$, $\omega\in\mathbb R$ be such that $(\omega,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\| \le M(\lambda-\omega)^{-n}$ for all real $\lambda>\omega$ and every $n\ge1$ ([[def-resolvent-of-a-closed-operator]]). Then, as $\lambda\to\infty$ along the reals, $\lambda R(\lambda,A)x\to x$ for every $x\in X$, and $\lambda R(\lambda,A)Ax\to Ax$ for every $x\in D(A)$.

## Facts & Assumptions

**Given:** A closed densely defined operator $A$ on a Banach space $X$ with $(\omega,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\|\le M(\lambda-\omega)^{-n}$ for all real $\lambda>\omega$ and $n\ge1$ ([[def-resolvent-of-a-closed-operator]]).

[F1] Resolvent identities: $R(\lambda,A)X=D(A)$, $R(\lambda,A)(\lambda I-A)y=y$ for $y\in D(A)$, and $\lambda R(\lambda,A)x-x=AR(\lambda,A)x$ for $x\in X$; in particular $\lambda R(\lambda,A)y=y+R(\lambda,A)Ay$ for $y\in D(A)$, since $\lambda R(\lambda,A)y=R(\lambda,A)((\lambda I-A)y+Ay)=y+R(\lambda,A)Ay$ ([[def-resolvent-of-a-closed-operator]]).

[F2] First power estimate: $\|R(\lambda,A)\|\le M/(\lambda-\omega)$ for $\lambda>\omega$ ([[cor-resolvent-power-estimates-for-semigroup-generators]] is the source of this estimate in the semigroup case; here it is assumed directly).

[F3] $D(A)$ is dense in $X$, and operators of the form $\lambda R(\lambda,A)$ are bounded ([[def-bounded-linear-operator]], [[def-operator-norm]]).



## Proof

**Proof technique:** direct: the identity on the dense domain and a uniform bound, then a three-epsilon argument.

1.1 For $y\in D(A)$ and $\lambda>\omega$, [F1] gives $\lambda R(\lambda,A)y=y+R(\lambda,A)Ay$, hence by [F2] $\|\lambda R(\lambda,A)y-y\|\le\frac{M}{\lambda-\omega}\|Ay\|\to0$ as $\lambda\to\infty$. [F1, F2]

1.2 The operators $B_\lambda:=\lambda R(\lambda,A)$ are uniformly norm bounded for large $\lambda$: $\|B_\lambda\|\le\frac{\lambda M}{\lambda-\omega}\le2M$ for $\lambda\ge2\omega$ when $\omega>0$, and $\|B_\lambda\|\le M$ for $\omega\le0$ and $\lambda>0$. [F2]

2.1 For arbitrary $x\in X$: given $\varepsilon>0$, choose $y\in D(A)$ with $\|x-y\|<\varepsilon/(4M+2)$ by density [F3]; by [step 1.1] choose $\lambda_0$ with $\|\lambda R(\lambda,A)y-y\|<\varepsilon/2$ for $\lambda>\lambda_0$; then for such $\lambda$, $\|\lambda R(\lambda,A)x-x\|\le\|B_\lambda(x-y)\|+\|\lambda R(\lambda,A)y-y\|+\|y-x\|<2M\frac{\varepsilon}{4M+2}+\frac\varepsilon2+\frac{\varepsilon}{4M+2}<\varepsilon$. Hence $\lambda R(\lambda,A)x\to x$ for every $x\in X$. [F3, step 1.1, step 1.2]

3.1 The second statement is [step 2.1] applied to the vector $Ax\in X$: $\lambda R(\lambda,A)Ax\to Ax$; by [F1] and [F2] this is the same as $\lambda AR(\lambda,A)x=\lambda^2R(\lambda,A)x-\lambda x\to Ax$ for $x\in D(A)$. [F1, step 2.1] ∎
