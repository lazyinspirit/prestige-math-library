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
       lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it,
       def-countable-choice, thm-n-cross-n-countable, thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (prop-the-null-set-definition-is-independent-of-the-smooth-atlas). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. If $\mathcal A$ and $\mathcal B$ are smooth atlases on the same smooth manifold
$M$, then a subset $E\subseteq M$ is $\mathcal A$-null if and only if it is
$\mathcal B$-null.

## Facts & Assumptions

**Given:** Countable choice and smooth atlases $\mathcal A$ and $\mathcal B$ on a smooth manifold $M$, and a subset $E\subseteq M$.

[F1] A set is atlas-null when every chart image in that atlas is Euclidean null ([[def-null-subset-of-a-smooth-manifold]]).

[L1] Local coordinate diffeomorphisms preserve Euclidean nullity on suitably small source and target chart neighbourhoods ([[lem-c1-local-diffeomorphisms-preserve-null-sets-locally]]).

[L2] Under countable choice, every manifold open cover has a countable subordinate coordinate-ball cover ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[A1] Countable choice selects one arbitrarily small cube-cover sequence for each member of a countable null family ([[def-countable-choice]]).

[L3] A double sequence can be flattened and the geometric budgets $\varepsilon2^{-j-1}$ sum to $\varepsilon$ ([[thm-n-cross-n-countable]], [[thm-geometric-series]]).

## Proof
**Proof technique:** direct.

1.1 Assume $E$ is $\mathcal A$-null and fix $(V,\psi)\in\mathcal B$. The overlaps $V\cap U$ with $(U,\varphi)\in\mathcal A$ cover $V$. At each point of each overlap, [L1] gives a smaller open neighbourhood $W$ on which the coordinate transition $\psi\circ\varphi^{-1}$ preserves Euclidean nullity in both directions. These $W$ form an open cover of $V$. Apply [L2] under the given countable choice to obtain a countable cover $(W_j)$ subordinate to these local transition neighbourhoods, and use [A1] to fix a containing local transition neighbourhood and its source chart $(U_j,\varphi_j)$ for each $j$. [A1, L1, L2, given]

2.1 Since $E$ is $\mathcal A$-null, each $\varphi_j(E\cap W_j)$ is null as a subset of $\varphi_j(E\cap U_j)$. The chartwise conclusion of [L1], on the local neighbourhood containing $W_j$, gives that $C_j=\psi(E\cap W_j)$ is Euclidean null. The countable family $(W_j)$ covers $V$, so $\psi(E\cap V)=\bigcup_j C_j$. [F1, L1, step 1.1]

3.1 Fix $\varepsilon>0$. Each null $C_j$ admits a sequence of closed-cube covers with total volume at most $\varepsilon2^{-j-1}$. Use [A1] to choose these sequences simultaneously. Flatten them by [L3]; the resulting sequence covers $\bigcup_j C_j$ and has total volume at most $\sum_j\varepsilon2^{-j-1}=\varepsilon$. Thus $\psi(E\cap V)$ is null. Since $(V,\psi)$ was arbitrary, $E$ is $\mathcal B$-null. Interchanging $\mathcal A$ and $\mathcal B$ gives the reverse implication. [A1, L3, step 2.1] ∎
