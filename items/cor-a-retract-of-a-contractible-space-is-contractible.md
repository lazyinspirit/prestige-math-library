---
id: cor-a-retract-of-a-contractible-space-is-contractible
kind: corollary
title: "Every nonempty retract of a contractible space is contractible"
status: published
origin: session
deps: [def-retraction-and-deformation-retract, def-nullhomotopic-map-and-contractible-space, thm-composition-respects-homotopy, cor-contractible-iff-identity-nullhomotopic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

Let $X$ be contractible and let a nonempty subspace $A\subseteq X$ be a retract of $X$. Then $A$ is contractible.

## Facts & Assumptions

**Given:** A contractible space $X$, a nonempty retract $A\subseteq X$, its inclusion $i:A\hookrightarrow X$, and a retraction $r:X\to A$.

[A1] Retraction means $r\circ i=\operatorname{id}_A$ ([[def-retraction-and-deformation-retract]]).

[L1] For every nonempty space $T$, the space $T$ is contractible if and only if $\operatorname{id}_T$ is homotopic to a constant map ([[cor-contractible-iff-identity-nullhomotopic]], [[def-nullhomotopic-map-and-contractible-space]]).

[L2] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{id}_X\simeq c_{x_0}$ for some $x_0\in X$. Precompose this homotopy by $i$ and postcompose by $r$. By [L2], $r\circ\operatorname{id}_X\circ i\simeq r\circ c_{x_0}\circ i$. [L1, L2]

2.1 The left side of step 1.1 is $r\circ i=\operatorname{id}_A$ by [A1], and the right side is the constant map on $A$ with value $r(x_0)$. Thus $\operatorname{id}_A$ is nullhomotopic. [step 1.1, A1]

3.1 Since $A$ is nonempty, step 2.1 and [L1] applied to $A$ show that $A$ is contractible. [step 2.1, L1] ∎
