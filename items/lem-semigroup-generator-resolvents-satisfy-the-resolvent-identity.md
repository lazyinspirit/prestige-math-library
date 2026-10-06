---
id: lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity
kind: lemma
title: "Resolvent identity for closed operators"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-resolvent-of-a-closed-operator
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-bounded-linear-operator
  - def-unbounded-linear-operator-domain-and-graph
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
      locator: "Chapter IV Section 1, Resolvent Equation 1.2, printed pp. 240-241"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Remark 1.16(c), resolvent equation (1.7), printed p. 10 (March 19, 2026 revision)"
verification:
  precheck: pass
---

## Statement

Let $A:D(A)\subseteq X\to X$ be a closed linear operator on a Banach space $X$, with resolvent $R(\lambda,A)=(\lambda I-A)^{-1}$ on $\rho(A)$ ([[def-resolvent-of-a-closed-operator]]). For all $\lambda,\mu\in\rho(A)$, $$R(\lambda,A)-R(\mu,A)=(\mu-\lambda)R(\lambda,A)R(\mu,A),$$ and consequently $R(\lambda,A)R(\mu,A)=R(\mu,A)R(\lambda,A)$.


## Facts & Assumptions

**Given:** A closed linear operator $A:D(A)\subseteq X\to X$ on a Banach space $X$, scalars $\lambda,\mu\in\rho(A)$, and the resolvents $R(\lambda,A),R(\mu,A)\in\mathcal B(X)$ ([[def-resolvent-of-a-closed-operator]]).

[F1] $R(\lambda,A)=(\lambda I-A)^{-1}$ satisfies $R(\lambda,A)X=D(A)$, $R(\lambda,A)(\lambda I-A)y=y$ for $y\in D(A)$ and $(\lambda I-A)R(\lambda,A)x=x$ for $x\in X$; the same holds with $\mu$ in place of $\lambda$ ([[def-resolvent-of-a-closed-operator]]). Ranges of resolvents lie in $D(A)$, and composition with the bounded maps $R(\lambda,A),R(\mu,A)$ is associative and bilinear wherever defined ([[def-bounded-linear-operator]], [[def-unbounded-linear-operator-domain-and-graph]]).



## Proof

**Proof technique:** direct, factoring the difference of the two inverse shifts through the common domain $D(A)$.

1.1 For $x\in X$ the vector $R(\mu,A)x$ lies in $D(A)$ by [F1], so $(\lambda I-A)R(\mu,A)x$ and $(\mu I-A)R(\mu,A)x$ are defined and differ by $(\lambda-\mu)R(\mu,A)x$; applying the bounded linear map $R(\lambda,A)$ and using linearity gives $(\lambda-\mu)R(\lambda,A)R(\mu,A)x=R(\lambda,A)(\lambda I-A)R(\mu,A)x-R(\lambda,A)(\mu I-A)R(\mu,A)x$. [F1, algebra]

2.1 The first term on the right equals $R(\mu,A)x$, because $R(\lambda,A)(\lambda I-A)y=y$ for $y\in D(A)$ and $R(\mu,A)x\in D(A)$; the second equals $R(\lambda,A)x$, because $(\mu I-A)R(\mu,A)=I$ on $X$. Hence $(\lambda-\mu)R(\lambda,A)R(\mu,A)x=R(\mu,A)x-R(\lambda,A)x$, that is $R(\lambda,A)x-R(\mu,A)x=(\mu-\lambda)R(\lambda,A)R(\mu,A)x$. [F1, step 1.1]

3.1 Since $x\in X$ was arbitrary, $R(\lambda,A)-R(\mu,A)=(\mu-\lambda)R(\lambda,A)R(\mu,A)$. [step 2.1]

4.1 Interchanging $\lambda$ and $\mu$ gives $R(\mu,A)-R(\lambda,A)=(\lambda-\mu)R(\mu,A)R(\lambda,A)$; adding the two identities yields $0=(\mu-\lambda)\bigl[R(\lambda,A)R(\mu,A)-R(\mu,A)R(\lambda,A)\bigr]$. For $\lambda\ne\mu$ this gives $R(\lambda,A)R(\mu,A)=R(\mu,A)R(\lambda,A)$, and for $\lambda=\mu$ the equality is trivial. [step 3.1, algebra] ∎
