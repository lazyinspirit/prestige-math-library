---
id: cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero
kind: corollary
title: Analytic semigroups are operator-norm differentiable away from zero
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [thm-analytic-semigroup-smoothing-estimates, def-operator-norm, def-bounded-linear-operator, lem-integrated-semigroup-orbits-belong-to-the-generator-domain, lem-neumann-series-and-small-perturbations-of-bounded-inverses, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Theorem 4.6 and its addendum, printed pp. 101-104'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.25 addendum, printed pp. 63-65'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

In the setting of [[thm-analytic-semigroup-smoothing-estimates]], the map
$t\mapsto T(t)\in\mathcal B(X)$ ([[def-bounded-linear-operator]]) is of class
$C^\infty$ on $(0,\infty)$ in the operator norm ([[def-operator-norm]]), with
$\frac{d}{dt}T(t)=AT(t)$ for every $t>0$. In particular $T$ is immediately
operator-norm differentiable on $(0,\infty)$; no norm continuity or
differentiability at $0$ is asserted, and for an unbounded generator $A$ it
fails (the heat counterexample of the companion page). No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta$ with vertex $0$ on a complex Banach space $X$ and its contour semigroup $T$, together with the conclusions of the smoothing theorem.

[L1] $T\in C^\infty((0,\infty),\mathcal B(X))$ in the operator norm and $\frac{d^m}{dt^m}T(t)=A^mT(t)$ for every $t>0$ and $m\ge1$ ([[thm-analytic-semigroup-smoothing-estimates]], [[def-operator-norm]]).

[L2] For any strongly continuous semigroup with generator $G$, $J_hy:=\int_0^hT(s)y\,ds$ belongs to $D(G)$ and $GJ_hy=T(h)y-y$ ([[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]]). A bounded operator within norm distance $1$ of $I$ is invertible by the Neumann series ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

## Proof

**Proof technique:** direct.

1.1 $C^\infty$ regularity and the first derivative. By [L1] the map $t\mapsto T(t)$ has norm derivatives of every order on $(0,\infty)$ and $\frac{d^m}{dt^m}T(t)=A^mT(t)$ for every $m\ge1$; taking $m=1$ gives $\frac{d}{dt}T(t)=AT(t)$ as bounded operators, and taking all $m$ gives the $C^\infty$ statement in the operator norm. [L1, given]

2.1 The vertex and bounded generators. If $\|T(t)-I\|\to0$ as $t\downarrow0$, choose $h>0$ with $\sup_{0\le s\le h}\|T(s)-I\|<1/2$. By [L2], the bounded operator $K_h:=J_h/h$ satisfies $\|K_h-I\|\le\sup_{0\le s\le h}\|T(s)-I\|<1/2$ and is invertible. Since its range lies in $D(G)$, this forces $D(G)=X$, and $G=(T(h)-I)K_h^{-1}/h$ is bounded. Thus an unbounded generator cannot have norm continuity at the vertex. Step 1.1 gives the asserted positive-time regularity, and this argument proves the general exclusion at zero rather than inferring it from one heat example. [step 1.1, L1, L2, given, algebra] ∎

