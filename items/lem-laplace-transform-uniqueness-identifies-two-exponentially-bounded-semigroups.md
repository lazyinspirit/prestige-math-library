---
id: lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups
kind: lemma
title: "Laplace uniqueness identifies two exponentially bounded semigroups"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - def-dependent-choice
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class
  - cor-relative-hahn-banach-dual-norming
  - def-hahn-banach-extension-principle-relative
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - def-bochner-integrable-function
  - def-strongly-continuous-semigroup
  - thm-exponential-bound-for-a-c-zero-semigroup
  - def-resolvent-of-a-closed-operator
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
      locator: "Chapter II Sections 1-2, integral representation and uniqueness of the generator, printed pp. 55-58, 59-64"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Lemma 11.13 and Corollary 11.11, printed pp. 262-263"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.2, uniqueness clause following Theorem 3, printed pp. 13-15"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) and the Hahn-Banach extension principle HB ([[def-hahn-banach-extension-principle-relative]]). Let $(S(t))_{t\ge0}$ and $(T(t))_{t\ge0}$ be strongly continuous semigroups on a Banach space $X$ with generators $A$ and $B$ and resolvents $R_A,R_B$ ([[def-resolvent-of-a-closed-operator]]), and suppose there are $M\ge1$, $\omega\in\mathbb R$ with $\|S(t)\|,\|T(t)\| \le Me^{\omega t}$ for all $t\ge0$. If $R_A(\lambda)=R_B(\lambda)$ for every real $\lambda>\omega$, then $S(t)=T(t)$ for every $t\ge0$. In particular two strongly continuous semigroups with the same generator coincide.

## Facts & Assumptions

**Given:** Dependent Choice; The Hahn-Banach extension principle HB ([[def-hahn-banach-extension-principle-relative]]); strongly continuous semigroups $(S(t))_{t\ge0}$, $(T(t))_{t\ge0}$ on a Banach space $X$ with generators $A,B$ and resolvents $R_A,R_B$ ([[def-strongly-continuous-semigroup]], [[def-resolvent-of-a-closed-operator]]); $M\ge1$, $\omega\in\mathbb R$ with $\|S(t)\|,\|T(t)\|\le Me^{\omega t}$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]); and $R_A(\lambda)=R_B(\lambda)$ for every real $\lambda>\omega$.

[F1] Laplace formula: for real $\lambda>\omega$, $\lambda$ lies in the resolvent sets of both generators and $R_A(\lambda)x=\int_0^\infty e^{-\lambda t}S(t)x\,dt$, $R_B(\lambda)x=\int_0^\infty e^{-\lambda t}T(t)x\,dt$ ([[thm-laplace-transform-formula-for-the-semigroup-resolvent]]).

[F2] Bounded linear functionals and, more generally, bounded linear maps commute with Bochner integrals: $x^*\bigl(\int h\bigr)=\int x^*\circ h$ ([[thm-bounded-linear-maps-commute-with-bochner-integration]], [[def-bochner-integrable-function]]).

[F3] Scalar Laplace uniqueness: a continuous scalar function $\varphi$ with $|\varphi(t)|\le Ce^{\sigma t}$ whose Laplace transform vanishes for every real $\lambda>\sigma$ is identically zero ([[thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class]]).

[F4] Point separation and norming under HB: for every $x\ne0$ there is $x^*\in X^*$ with $\|x^*\|=1$ and $x^*(x)=\|x\|$, so the dual separates points ([[cor-relative-hahn-banach-dual-norming]]).



## Proof

**Proof technique:** direct: scalarise the difference of the two semigroups by a functional and apply scalar Laplace uniqueness.

1.1 Put $D(t):=S(t)-T(t)$ for $t\ge0$. For fixed $x\in X$ and $x^*\in X^*$ the scalar function $\varphi(t):=x^*(D(t)x)$ is continuous and satisfies $|\varphi(t)|\le2Me^{\omega t}\|x^*\|\,\|x\|$, because $S,T$ are strongly continuous and exponentially bounded. [given]

2.1 For real $\lambda>\omega$, [F1] and [F2] give $\int_0^\infty e^{-\lambda t}\varphi(t)\,dt=x^*\bigl(\int_0^\infty e^{-\lambda t}D(t)x\,dt\bigr)=x^*\bigl[(R_A(\lambda)-R_B(\lambda))x\bigr]=0$. [F1, F2, step 1.1]

3.1 By scalar Laplace uniqueness [F3] applied with $\sigma:=\omega$ and $C:=2M\|x^*\|\|x\|$, the continuous function $\varphi$ vanishes identically: $x^*(S(t)x)=x^*(T(t)x)$ for every $t\ge0$. [F3, step 1.1, step 2.1]

4.1 Since $x^*\in X^*$ was arbitrary, the dual separates points of $X$ (using HB, [F4]), so $S(t)x=T(t)x$ for every $x$ and every $t\ge0$; that is, $S(t)=T(t)$ for all $t$. [F4, step 3.1]

5.1 If moreover $A=B$, then both semigroups have exponential bounds and, taking a common pair $M,\omega$ for the two bounds (for instance the maxima of the respective constants), their resolvents agree on $(\omega,\infty)$ because both are given by the Laplace formula for the same operator; [step 4.1] then gives $S=T$. [F1, step 4.1] ∎
