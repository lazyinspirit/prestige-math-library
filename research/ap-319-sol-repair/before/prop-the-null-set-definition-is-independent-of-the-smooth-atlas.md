---
id: prop-the-null-set-definition-is-independent-of-the-smooth-atlas
kind: proposition
title: "The null-set definition is independent of the smooth atlas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       lem-c1-local-diffeomorphisms-preserve-null-sets-locally,
       lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

If $\mathcal A$ and $\mathcal B$ are smooth atlases on the same smooth manifold
$M$, then a subset $E\subseteq M$ is $\mathcal A$-null if and only if it is
$\mathcal B$-null.

## Facts & Assumptions

**Given:** Smooth atlases $\mathcal A$ and $\mathcal B$ on a smooth manifold $M$, and a subset $E\subseteq M$.

[F1] A set is atlas-null when every chart image in that atlas is Euclidean null ([[def-null-subset-of-a-smooth-manifold]]).

[L1] Local diffeomorphisms preserve null sets locally ([[lem-c1-local-diffeomorphisms-preserve-null-sets-locally]]).

[L2] Every open cover admits a countable cover by relatively compact coordinate balls subordinate to it ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

## Proof
**Proof technique:** direct.

1.1 Assume $E$ is $\mathcal A$-null. Fix a chart $(V,\psi)\in\mathcal B$. The sets $V\cap U$ with $(U,\varphi)\in\mathcal A$ cover $V$, so [L2] gives a countable cover of $V$ by relatively compact coordinate balls $W_j\subseteq V\cap U_j$. [F1, L2, given, choose]

2.1 On each $W_j$, the transition map $\psi\circ\varphi_j^{-1}$ is a local diffeomorphism between Euclidean chart domains. Since $E$ is $\mathcal A$-null, [F1] makes $\varphi_j(E\cap W_j)$ null. Applying [L1] to the transition map shows that $\psi(E\cap W_j)$ is null for every $j$. [F1, L1, step 1.1]

3.1 The set $\psi(E\cap V)$ is the countable union of the null sets $\psi(E\cap W_j)$, hence is null. Since $(V,\psi)$ was arbitrary, $E$ is $\mathcal B$-null by [F1]. The reverse implication is symmetric. [F1, step 2.1, algebra] ∎