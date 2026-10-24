---
id: thm-identifiability-iff-constant-on-equivalence-classes
kind: theorem
title: "Identifiability is constancy on observational classes"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-identifiability-of-an-estimand, def-observational-equivalence,
       def-estimand-on-a-statistical-model, def-parametric-statistical-model]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§1.3.5–1.3.6, PDF pp. 19–21"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §6, PDF pp. 6–7"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Statement

Let $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$ be a parametric
model, let $\psi:\Theta\to\mathcal T_0$ be an estimand, and set
$\mathcal M:=\mathsf P(\Theta)$, the set of laws in the model. For
$\theta\in\Theta$, write
$$
[\theta]_\sim:=\{\eta\in\Theta:\eta\sim\theta\}.
$$
Then the following are equivalent: **(i)** $\psi$ is identifiable; **(ii)**
$\psi$ is constant on every observational equivalence class $[\theta]_\sim$;
and **(iii)** there is a unique function $\bar\psi:\mathcal M\to\mathcal T_0$
such that $\psi=\bar\psi\circ\mathsf P$.

The factorization is a statement about sets and functions. It asserts no
measurable structure or measurable factor map.

## Facts & Assumptions

**Given:** A parametric model $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$ and an estimand $\psi:\Theta\to\mathcal T_0$.

[F1] [[def-parametric-statistical-model]]: the model is the parameter map $\mathsf P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$, and its set of laws is $\mathcal M=\mathsf P(\Theta)$.

[F2] [[def-observational-equivalence]]: $\theta\sim\eta$ exactly when $P_\theta=P_\eta$ as measures.

[F3] [[def-estimand-on-a-statistical-model]]: an estimand is a function $\psi:\Theta\to\mathcal T_0$.

[F4] [[def-identifiability-of-an-estimand]]: $\psi$ is identifiable exactly when $\theta\sim\eta$ implies $\psi(\theta)=\psi(\eta)$.

## Proof

**Proof technique:** Direct equivalence and factorization through the image of the model map.

1.1 Equality of measures is reflexive, symmetric and transitive; by [F2], $\sim$ is therefore an equivalence relation, so each class $[\theta]_\sim$ is defined. [given, F2, algebra]

1.2 If $\psi=\bar\psi\circ\mathsf P$, then $P_\theta=P_\eta$ gives $\bar\psi(P_\theta)=\bar\psi(P_\eta)$ and hence $\psi(\theta)=\psi(\eta)$. Thus (iii) implies identifiability. [given, F1, F2, F4, algebra]

1.3 Suppose $\psi$ is identifiable. Form the relation $G:=\{(Q,a):\text{there exists }\theta\in\Theta\text{ with }Q=P_\theta\text{ and }a=\psi(\theta)\}$. Every $Q\in\mathcal M$ has at least one such parameter by [F1]. If both $\theta$ and $\eta$ represent the same $Q$, then [F2] gives $\theta\sim\eta$, so [F4] gives $\psi(\theta)=\psi(\eta)$. Thus $G$ has exactly one value for each $Q\in\mathcal M$, defines a function $\bar\psi:\mathcal M\to\mathcal T_0$ by [F3], and satisfies $\psi=\bar\psi\circ\mathsf P$. This construction defines the graph directly and uses no choice axiom. [given, F1, F2, F3, F4, construct]

2.1 By [F2], $\eta\in[\theta]_\sim$ exactly when $\eta\sim\theta$. If $a,b\in[\theta]_\sim$, then $a\sim\theta$ and $b\sim\theta$, so symmetry and transitivity from step 1.1 give $a\sim b$; conversely, $\theta\sim\eta$ gives $\eta\in[\theta]_\sim$. Hence [F4] is exactly constancy of $\psi$ on every class. [F2, F4, step 1.1, algebra]

3.1 If $\bar\psi_1$ and $\bar\psi_2$ both factor $\psi$, each $Q\in\mathcal M$ equals $P_\theta$ for some $\theta$ by [F1], and then $\bar\psi_1(Q)=\psi(\theta)=\bar\psi_2(Q)$ by [F3]. The factor is unique. The implication in step 1.2 and the construction in step 1.3 give (i) iff (iii), while step 2.1 gives (i) iff (ii). [given, F1, F3, step 1.2, step 1.3, step 2.1, algebra] ∎
