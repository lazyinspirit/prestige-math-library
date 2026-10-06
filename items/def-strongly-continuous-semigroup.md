---
id: def-strongly-continuous-semigroup
kind: definition
title: "Strongly continuous semigroup"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-operator-norm
  - def-banach-space
  - rem-real-and-complex-normed-space-convention
  - def-bounded-linear-operator
  - def-space-of-bounded-linear-operators
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
      locator: "Chapter I Section 5, Definition 5.1, printed p. 36"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Definition 1.1, printed p. 1"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ ([[def-banach-space]], [[rem-real-and-complex-normed-space-convention]]) and let $\mathcal B(X)$ be the bounded linear operators on $X$ ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]). A family $(T(t))_{t\ge0}\subseteq\mathcal B(X)$ is a **strongly continuous one-parameter semigroup** (or $C_0$-semigroup) if (i) $T(0)=I$; (ii) $T(t+s)=T(t)T(s)$ for all $s,t\ge0$; (iii) for every $x\in X$ the orbit map $t\mapsto T(t)x$ is continuous from $[0,\infty)$ into $X$. Property (iii) says that $t\mapsto T(t)$ is continuous for the strong operator topology on $\mathcal B(X)$; no continuity in the operator norm ([[def-operator-norm]]) is assumed or implied, and the operators need be neither isometries nor contractions. A **strongly continuous group** is defined analogously with $\mathbb R$ in place of $[0,\infty)$ and the functional equation holding for all $s,t\in\mathbb R$.
