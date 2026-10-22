---
id: def-qftx-finite-homotopy-pullback
kind: definition
title: "Homotopy pullback of finite groupoids"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-qftx-finite-groupoid-integration
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-groupoid-integration: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; the groupoids have finite isomorphism-class sets and finite automorphism groups."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§23.2, PDF pp. 92–95, for homotopy fiber products of groupoids and correspondence composition."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–9, Lemma 2.4, for boundary bundle identifications and the groupoid of glued bundles."
verification:
  precheck: pending
---

## Definition

Let $p:\mathcal C\to\mathcal D$ and $q:\mathcal E\to\mathcal D$ be functors of finite groupoids. The **homotopy pullback groupoid** $\mathcal C\times^h_{\mathcal D}\mathcal E$ has objects $(c,e,\alpha)$, where $c\in\mathcal C$, $e\in\mathcal E$, and $\alpha:p(c)\overset{\cong}{\longrightarrow}q(e)$ is an isomorphism in $\mathcal D$. A morphism $(u,v):(c,e,\alpha)\to(c',e',\alpha')$ consists of isomorphisms $u:c\to c'$ and $v:e\to e'$ satisfying

$$q(v)\circ\alpha=\alpha'\circ p(u).$$

Composition is componentwise. The projections to $\mathcal C$ and $\mathcal E$ send $(c,e,\alpha)$ to $c$ and $e$, respectively.

## Definition references

[[def-qftx-finite-groupoid-integration]]

## Facts & Assumptions

**Given:** Finite groupoids $\mathcal C,\mathcal D,\mathcal E$ and functors $p:\mathcal C\to\mathcal D$, $q:\mathcal E\to\mathcal D$.

[F1] [[def-qftx-finite-groupoid-integration]]: a finite groupoid has finitely many isomorphism classes and a finite automorphism group at every object.

## Proof

1.1 Identity pairs satisfy the compatibility equation. If $(u,v)$ and $(u',v')$ are composable compatible pairs, then $q(v'\circ v)\circ\alpha=q(v')\circ q(v)\circ\alpha=q(v')\circ\alpha'\circ p(u)=\alpha''\circ p(u'\circ u)$, so their composite is compatible. Inverting the compatibility equation shows $(u^{-1},v^{-1})$ is compatible with the reversed objects. Thus the stated data form a groupoid. [given, F1, algebra]

2.1 Choose one representative from each of the finitely many isomorphism classes of $\mathcal C$ and $\mathcal E$. If $u:c\to c_0$ and $v:e\to e_0$ are isomorphisms to representatives, then $(c,e,\alpha)$ is isomorphic to $(c_0,e_0,q(v)\circ\alpha\circ p(u)^{-1})$. For each representative pair $(c_0,e_0)$, the possible isomorphisms $p(c_0)\cong q(e_0)$ are either absent or form a set on which postcomposition by $\operatorname{Aut}_{\mathcal D}(q(e_0))$ acts freely and transitively; that set has finite size by [F1]. Thus there are finitely many isomorphism classes of triples. The automorphism group of a triple is the subgroup of $\operatorname{Aut}_{\mathcal C}(c_0)\times\operatorname{Aut}_{\mathcal E}(e_0)$ satisfying the compatibility equation, and is finite by [F1]. Hence the homotopy pullback is a finite groupoid. [given, F1, construct] ∎
