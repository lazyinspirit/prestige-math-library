---
id: thm-hille-yosida-generation-theorem
kind: theorem
title: "Hille-Yosida generation theorem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps:
  - def-dependent-choice
  - thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - cor-resolvent-power-estimates-for-semigroup-generators
  - thm-generators-are-closed-and-densely-defined
  - def-resolvent-of-a-closed-operator
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
      locator: "Chapter II Section 3, Generation Theorem 3.8, printed pp. 77-78"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Theorem 11.16, printed pp. 263-265"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.2, Theorem 1.26, printed pp. 16-20"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Comments on Chapter 7, Theorem 7.8 and Theorem 7.9, printed pp. 197-198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $A:D(A)\subseteq X\to X$ be a closed and densely defined linear operator on a Banach space $X$ and let $M\ge1$, $\omega\in\mathbb R$. Then $A$ generates a strongly continuous semigroup $(T(t))_{t\ge0}$ with $\|T(t)\| \le Me^{\omega t}$ for all $t\ge0$ if and only if both: (i) $(\omega,\infty)\subseteq\rho(A)$, and (ii) $\|R(\lambda,A)^n\| \le M(\lambda-\omega)^{-n}$ for every real $\lambda>\omega$ and every $n\ge1$ ([[def-resolvent-of-a-closed-operator]]). All resolvent powers are required in general; the first power alone guarantees all power estimates when $M=1$, the exponentially rescaled contraction case, where all higher power estimates follow from the single one by submultiplicativity (treated later on this page).

## Facts & Assumptions

**Given:** Dependent Choice; A closed densely defined linear operator $A$ on a Banach space $X$ and constants $M\ge1$, $\omega\in\mathbb R$ ([[def-resolvent-of-a-closed-operator]], [[thm-generators-are-closed-and-densely-defined]]).

[F1] Sufficiency: under (i) $(\omega,\infty)\subseteq\rho(A)$ and (ii) $\|R(\lambda,A)^n\|\le M(\lambda-\omega)^{-n}$ for all real $\lambda>\omega$, $n\ge1$, the operator $A$ generates a strongly continuous semigroup with $\|T(t)\|\le Me^{\omega t}$ ([[thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup]]).

[F2] Necessity of the location of the spectrum and of the first estimate: if $T$ is a strongly continuous semigroup with generator $A$ and $\|T(t)\|\le Me^{\omega t}$, then $A$ is closed and densely defined, $(\omega,\infty)\subseteq\rho(A)$, and $\|R(\lambda,A)\|\le M/(\lambda-\omega)$ ([[thm-generators-are-closed-and-densely-defined]], [[thm-laplace-transform-formula-for-the-semigroup-resolvent]], [[def-strongly-continuous-semigroup]]).

[F3] Necessity of all powers: under the hypotheses of [F2], $R(\lambda,A)^mx=\frac1{(m-1)!}\int_0^\infty s^{m-1}e^{-\lambda s}T(s)x\,ds$ and $\|R(\lambda,A)^m\|\le M(\lambda-\omega)^{-m}$ for every $m\ge1$ ([[cor-resolvent-power-estimates-for-semigroup-generators]]).

## Proof

**Proof technique:** direct: sufficiency is the Yosida construction and necessity is read off from the Laplace representation of the resolvent.

1.1 **(Sufficiency.)** Assume (i) and (ii). Then all hypotheses of [F1] hold, so $A$ generates a strongly continuous semigroup $(T(t))_{t\ge0}$ with $\|T(t)\|\le Me^{\omega t}$ for all $t\ge0$. [F1]

1.2 **(Necessity, domain and spectrum.)** Assume conversely that $A$ generates $T$ with $\|T(t)\|\le Me^{\omega t}$. Then $A$ is closed with dense domain by [F2]; the Laplace-transform formula for the resolvent gives $\lambda\in\rho(A)$ and $\|R(\lambda,A)\|\le M/(\lambda-\omega)$ for every real $\lambda>\omega$; in particular $(\omega,\infty)\subseteq\rho(A)$, which is (i). [F2]

1.3 **(Necessity, all powers.)** Under the same hypothesis, [F3] gives the integral representation of every power $R(\lambda,A)^m$ and the estimate $\|R(\lambda,A)^m\|\le M(\lambda-\omega)^{-m}$ for all $m\ge1$ and real $\lambda>\omega$, which is (ii). [F3]

2.1 Combining [step 1.1] with [steps 1.2-1.3]: $A$ generates a strongly continuous semigroup with $\|T(t)\|\le Me^{\omega t}$ if and only if (i) and (ii) hold. The general theorem retains all power estimates; the case where the first estimate alone suffices ($M=1$, $\omega=0$) is isolated as the next corollary. [step 1.1, step 1.2, step 1.3] ∎
