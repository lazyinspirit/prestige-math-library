---
id: def-qftx-finite-groupoid-integration
kind: definition
title: "Finite groupoid cardinality and homotopy-fiber integration"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps: []
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; all sums are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§12, PDF pp. 50–51, for groupoids and automorphism groups; §§23.2–23.3, PDF pp. 92–99, for homotopy fiber products and finite pushforward by homotopy cardinality."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–11, for the measure assigning each bundle class weight 1/|Aut(P)| and its behavior under cutting and gluing."
verification:
  precheck: pending
---

## Definition

A **finite groupoid** is a small category in which every morphism is invertible, with finitely many isomorphism classes and a finite automorphism group at every object. Write $\pi_0(\mathcal C)$ for its set of isomorphism classes. Its **groupoid cardinality** is

$$|\mathcal C|:=\sum_{[c]\in\pi_0(\mathcal C)}\frac{1}{|\operatorname{Aut}_{\mathcal C}(c)|}.$$

For an isomorphism-invariant function $f:\pi_0(\mathcal C)\to\mathbb C$, define

$$\int_{c\in\mathcal C} f(c):=\sum_{[c]\in\pi_0(\mathcal C)}\frac{f(c)}{|\operatorname{Aut}_{\mathcal C}(c)|}.$$

For finite groupoids $\mathcal C,\mathcal D$, a functor $p:\mathcal C\to\mathcal D$, and an object $d$ of $\mathcal D$, its **homotopy fiber** $\mathcal C_d$ has objects $(c,\alpha)$ with $\alpha:p(c)\overset{\cong}{\longrightarrow}d$ and morphisms $u:(c,\alpha)\to(c',\alpha')$ satisfying $\alpha'\circ p(u)=\alpha$. Define pullback and pushforward of invariant functions by

$$(p^*g)([c])=g([p(c)]),\qquad (p_!f)([d])=\int_{(c,\alpha)\in\mathcal C_d} f([c]).$$

A span $\mathcal X\xleftarrow{a}\mathcal E\xrightarrow{b}\mathcal Y$ of finite groupoids therefore induces the linear map $b_!a^*$ on invariant functions.

## Facts & Assumptions

**Given:** Finite groupoids $\mathcal C,\mathcal D$, a functor $p:\mathcal C\to\mathcal D$, and invariant complex-valued functions on their isomorphism classes.

[A1] A finite groupoid has finitely many isomorphism classes and a finite automorphism group at every object.

## Proof

1.1 The groupoid cardinality and integral in the Definition are finite sums by [A1]. Fix $d\in\mathcal D$ and one representative $c$ from each source isomorphism class. The set of isomorphisms $p(c)\cong d$ is empty or a torsor for the finite group $\operatorname{Aut}_{\mathcal D}(d)$. Every object of the homotopy fiber is isomorphic to one with such a chosen source representative, so the fiber has finitely many isomorphism classes. The automorphisms of $(c,\alpha)$ are the $u\in\operatorname{Aut}_{\mathcal C}(c)$ satisfying $\alpha\circ p(u)=\alpha$, a subgroup of a finite group by [A1]. Thus every homotopy fiber is finite and each pushforward sum is finite. [given, A1]

1.2 If $\eta:d\to d'$ is an isomorphism in $\mathcal D$, the rule $(c,\alpha)\mapsto(c,\eta\circ\alpha)$ is an equivalence $\mathcal C_d\to\mathcal C_{d'}$ with inverse given by $\eta^{-1}$. It preserves isomorphism classes, automorphism groups, and the values of $f([c])$, so the fiber integral is independent of the representative of $[d]$. [given, A1, construct]

2.1 If $c\to c'$ is an isomorphism in $\mathcal C$, then $p(c)\to p(c')$ is an isomorphism in $\mathcal D$, so $p^*g$ is invariant; step 1.2 proves the same for $p_!f$. Consequently $b_!a^*$ is a well-defined linear map, since its sums are finite and both operations preserve linear combinations. [given, step 1.2, algebra] ∎
