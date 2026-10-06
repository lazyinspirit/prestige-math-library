---
id: def-yosida-approximants
kind: definition
title: "Yosida approximants"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - def-resolvent-of-a-closed-operator
  - def-bounded-linear-operator
  - lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 3, formula (3.7), printed p. 74"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, formula (11.33), printed p. 263"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.2, Lemma 1.22 and Yosida approximations in the proof of Theorem 1.26, printed pp. 16, 18-19 (March 19, 2026 revision)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $A:D(A)\subseteq X\to X$ be closed and densely defined on a Banach space $X$ with $(\omega,\infty)\subseteq\rho(A)$, and let $R(\lambda,A)=(\lambda I-A)^{-1}$ ([[def-resolvent-of-a-closed-operator]]). For real $\lambda>\omega$ the **Yosida approximant** of $A$ at $\lambda$ is $$A_\lambda:=\lambda AR(\lambda,A)=\lambda^2R(\lambda,A)-\lambda I\in\mathcal B(X).$$ The equality with $\lambda^2R(\lambda,A)-\lambda I$ uses $AR(\lambda,A)=\lambda R(\lambda,A)-I$; in particular $A_\lambda$ is a bounded everywhere defined operator. Distinct approximants commute, $A_\lambda A_\mu=A_\mu A_\lambda$, and each commutes with $R(\mu,A)$.

**The two formulae agree.** Since $\lambda\in\rho(A)$, the resolvent identity
$AR(\lambda,A)=\lambda R(\lambda,A)-I$ of [[def-resolvent-of-a-closed-operator]]
gives
$$A_\lambda=\lambda AR(\lambda,A)=\lambda\bigl(\lambda R(\lambda,A)-I\bigr)=\lambda^2R(\lambda,A)-\lambda I,$$
and the right-hand side is a sum of bounded everywhere defined operators
([[def-bounded-linear-operator]]). Hence each $A_\lambda$ is bounded with
$D(A_\lambda)=X$, and it is meant as a bounded approximation of the possibly
unbounded $A$; the sense in which $A_\lambda x\to Ax$ for $x\in D(A)$ is a
theorem proved on this page, not part of the definition.

**Commutativity.** For real $\lambda,\mu>\omega$ the resolvents commute,
$R(\lambda,A)R(\mu,A)=R(\mu,A)R(\lambda,A)$, by
[[lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity]].
Therefore
$$A_\lambda A_\mu=(\lambda^2R(\lambda,A)-\lambda I)(\mu^2R(\mu,A)-\mu I)$$
is symmetric in $\lambda$ and $\mu$: the only mixed term that is not obviously
symmetric is $\lambda^2\mu^2R(\lambda,A)R(\mu,A)$, and that product is symmetric
by the resolvent identity. Hence distinct approximants commute, and for the same
reason
$$A_\lambda R(\mu,A)=\lambda\bigl(\lambda R(\lambda,A)-I\bigr)R(\mu,A)=\lambda^2R(\lambda,A)R(\mu,A)-\lambda R(\mu,A)$$
equals $R(\mu,A)A_\lambda$, since $A_\lambda$ is the product of $R(\lambda,A)$
with bounded operators and resolvents at $\lambda$ and $\mu$ commute. The closedness and density of $A$ are hypotheses, not conclusions drawn from a generator theorem. The resolvent vocabulary is [[def-resolvent-of-a-closed-operator]], and the definition itself asserts no approximation property.
