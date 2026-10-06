---
id: cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup
kind: corollary
title: "Restriction to a closed invariant subspace is a C0-semigroup and its generator is the part"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - def-strongly-continuous-semigroup
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - def-normed-subspace
  - lem-closed-subspace-of-a-banach-space-is-banach
  - def-bochner-integrable-function
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
      locator: "Chapter II Section 2, standard constructions for closed invariant subspaces, printed pp. 59-64"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1-1.2, restriction of a C0-semigroup to a closed invariant subspace, printed pp. 6-8"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$, and let $Y\subseteq X$ be a closed linear subspace ([[def-normed-subspace]], [[lem-closed-subspace-of-a-banach-space-is-banach]]) such that $T(t)Y\subseteq Y$ for every $t\ge0$. Then the restrictions $T_Y(t):=T(t)|_Y$ form a strongly continuous semigroup on the Banach space $Y$, and its generator is the **part** $A_Y$ of $A$ in $Y$: $D(A_Y)=\{y\in D(A)\cap Y:\ Ay\in Y\}$ and $A_Yy=Ay$. In particular the generator of the restricted semigroup is the restriction of $A$ to that domain.

## Facts & Assumptions

**Given:** Countable Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]), and a closed linear subspace $Y\subseteq X$ with $T(t)Y\subseteq Y$ for every $t\ge0$.

[F1] A closed linear subspace of a Banach space is a Banach space for the restricted norm ([[lem-closed-subspace-of-a-banach-space-is-banach]], [[def-normed-subspace]]), and convergence in the norm of $Y$ is the same as convergence in $X$ for vectors of $Y$.

[F2] The generator is defined by right difference quotients: $y\in D(A)$ exactly when $\frac{T(h)y-y}{h}$ converges as $h\downarrow0$, and then the limit is $Ay$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F3] Time integrals of orbits lie in the generator domain: for $y\in X$ and $t>0$ the Bochner integral $J_ty=\int_0^tT(s)y\,ds$ satisfies $J_ty\in D(A)$ and $AJ_ty=T(t)y-y$ ([[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]], [[def-bochner-integrable-function]]).



## Proof

**Proof technique:** direct: inheritance of the semigroup properties, then comparison of the two difference-quotient limits through the closed subspace.

1.1 The restrictions $T_Y(t):=T(t)|_Y$ are bounded linear maps of $Y$ into itself by hypothesis, with $T_Y(0)=I_Y$ and $T_Y(t+s)=T_Y(t)T_Y(s)$ inherited from $T$. For each $y\in Y$ the orbit $t\mapsto T_Y(t)y$ is continuous into $Y$, because it is continuous into $X$ and the norm of $Y$ is the restriction of the norm of $X$ by [F1]; hence $T_Y$ is a strongly continuous semigroup on the Banach space $Y$. [F1]

1.2 Let $B$ denote the generator of $T_Y$. If $y\in D(A)\cap Y$ and $Ay\in Y$, then $T(t)y\in Y$ for all $t$, so the difference quotients $\frac{T_Y(h)y-y}{h}=\frac{T(h)y-y}{h}$ lie in $Y$ and converge in $X$ to $Ay\in Y$; by [F1] they converge in $Y$ to $Ay$. Therefore $y\in D(B)$ and $By=Ay$. [F1, F2]

1.3 Conversely, if $y\in D(B)$, then by definition $\frac{T_Y(h)y-y}{h}\to By$ in $Y$, hence also in $X$ by [F1]; the same vectors are the difference quotients of $T$, so $y\in D(A)$ and $Ay=By$. In particular $Ay=By\in Y$, so $D(B)\subseteq\{y\in D(A)\cap Y:Ay\in Y\}$. [F1, F2]

2.1 The two inclusions give $D(B)=\{y\in D(A)\cap Y:Ay\in Y\}$ with $By=Ay$, that is, the generator of $T_Y$ is the part $A_Y$ of $A$ in $Y$; for reference, this domain is dense in $Y$, since for $y\in Y$ and $t>0$ the integral $J_ty$ lies in $D(A)\cap Y$ with $AJ_ty=T(t)y-y\in Y$ by [F3] and the $Y$-valued Bochner integral stays in the closed subspace $Y$, while $\frac1tJ_ty\to y$ as $t\downarrow0$. [F1, F3, step 1.2, step 1.3] ∎
