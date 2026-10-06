---
id: cor-contraction-hille-yosida-theorem
kind: corollary
title: "Contraction Hille-Yosida theorem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-resolvent-power-estimates-for-semigroup-generators
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - def-dependent-choice
  - thm-hille-yosida-generation-theorem
  - lem-operator-norm-is-a-norm
  - lem-composition-operator-norm-inequality
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
      locator: "Chapter II Section 3, Generation Theorem 3.5, printed pp. 73-77"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Corollary 11.18, printed pp. 266-267"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.2, Theorem 3 and Section 5 Appendix, printed pp. 13-14, 33-37"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.2, the $\\omega$-contraction case (1.17) of Theorem 1.26, printed pp. 16-17"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $A:D(A)\subseteq X\to X$ be closed and densely defined on a Banach space $X$. Then $A$ generates a strongly continuous semigroup of contractions ($\|T(t)\| \le1$ for all $t\ge0$) if and only if $(0,\infty)\subseteq\rho(A)$ and $\|\lambda R(\lambda,A)\| \le1$ for all $\lambda>0$, equivalently $\|R(\lambda,A)\| \le1/\lambda$ for all $\lambda>0$. In this case the first-power estimate implies all the power estimates $\|R(\lambda,A)^n\| \le\lambda^{-n}$ by submultiplicativity, so no separate power condition is needed; when $X$ is complex, every $z$ with $\operatorname{Re}z>0$ belongs to $\rho(A)$ and $\|R(z,A)^n\|\le(\operatorname{Re}z)^{-n}$ for every $n\ge1$.

## Facts & Assumptions

**Given:** Dependent Choice; A closed densely defined operator $A$ on a Banach space $X$ ([[thm-hille-yosida-generation-theorem]]).

[F1] Hille-Yosida with $M=1$, $\omega=0$: $A$ generates a strongly continuous semigroup with $\|T(t)\|\le1$ for all $t\ge0$ if and only if $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\|\le\lambda^{-n}$ for every real $\lambda>0$ and every $n\ge1$ ([[thm-hille-yosida-generation-theorem]]).

[F2] The operator norm is submultiplicative, $\|ST\|\le\|S\|\,\|T\|$ ([[lem-composition-operator-norm-inequality]]), and is a norm on $\mathcal B(X)$ ([[lem-operator-norm-is-a-norm]]).



[F3] The complex exponential satisfies $|e^{-zt}|=e^{-t\operatorname{Re}z}$ and $\frac{d}{dt}e^{-zt}=-ze^{-zt}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]]). The Laplace inverse argument and resolvent differentiation for real parameters are proved in [[thm-laplace-transform-formula-for-the-semigroup-resolvent]] and [[cor-resolvent-power-estimates-for-semigroup-generators]]; their complex extension is derived in step 2.1.

## Proof

**Proof technique:** direct: specialise the general theorem and observe that the first-power estimate implies all power estimates by submultiplicativity.

1.1 Suppose $A$ generates a contraction semigroup, $\|T(t)\|\le1$. Then [F1] with $M=1$, $\omega=0$ gives $(0,\infty)\subseteq\rho(A)$ and $\|R(\lambda,A)^n\|\le\lambda^{-n}$ for all $n\ge1$; in particular the first-power estimate $\|\lambda R(\lambda,A)\|\le1$, equivalently $\|R(\lambda,A)\|\le1/\lambda$, holds for all $\lambda>0$. [F1]

1.2 Conversely, suppose $(0,\infty)\subseteq\rho(A)$ and $\|\lambda R(\lambda,A)\|\le1$, i.e. $\|R(\lambda,A)\|\le1/\lambda$, for all $\lambda>0$. By submultiplicativity [F2], $\|R(\lambda,A)^n\|\le\|R(\lambda,A)\|^n\le\lambda^{-n}$ for every $n\ge1$; hence the power conditions of [F1] hold with $M=1$, $\omega=0$, and $A$ generates a strongly continuous semigroup of contractions. [F1, F2]

2.1 Let $X$ be complex, $a:=\operatorname{Re}z>0$, and $J_zx:=\int_0^\infty e^{-zs}T(s)x\,ds$. By [F3] its tail norm is at most $e^{-aR}\|x\|/a$. For $x\in D(A)$, integration of the derivative of $e^{-zs}T(s)x$, with the closed-graph integration argument of the Laplace theorem, gives $(zI-A)J_zx=x=J_z(zI-A)x$; density and closedness extend the first identity to every $x\in X$, exactly as in that theorem, so $z\in\rho(A)$ and $R(z,A)=J_z$. For small real $h$, the resolvent identity gives $dR(z+h,A)/dh|_{h=0}=-R(z,A)^2$ in operator norm. Differentiating the integral along this real increment is justified by splitting off its tail and dominating by $s^k e^{-a s/2}\|x\|$ for each needed order; induction gives $R(z,A)^nx=(n-1)!^{-1}\int_0^\infty s^{n-1}e^{-zs}T(s)x\,ds$. The scalar integral of the norm majorant is $(n-1)!/a^n$, by the integration-by-parts recurrence of the power-estimate proof. Hence $\|R(z,A)^n\|\le a^{-n}$, the precise complex half-plane estimate. [F1, F3, step 1.2]

3.1 Therefore contractivity of the generated semigroup is equivalent to $(0,\infty)\subseteq\rho(A)$ and $\|\lambda R(\lambda,A)\|\le1$ for all $\lambda>0$, and in this case the single estimate forces all the resolvent power bounds. [step 1.1, step 1.2, step 2.1] ∎
