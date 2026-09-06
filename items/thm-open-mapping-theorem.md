---
id: thm-open-mapping-theorem
kind: theorem
title: "Open mapping theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-mapping-successive-approximation, def-bounded-linear-operator]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Theorem 2.8", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---

## Statement

Assume DC. A surjective bounded linear map $T:X\to Y$ between Banach spaces is open: it maps every open subset of $X$ to an open subset of $Y$.

## Facts & Assumptions

**Given:** DC and a surjective bounded linear map $T:X\to Y$ between Banach spaces.

## Proof

**Proof technique:** direct.

1.1 The preceding successive-approximation lemma gives $\varepsilon>0$ with $B_Y(0,\varepsilon)\subseteq T(B_X(0,1))$. [given]

2.1 For every $x\in X$ and $a>0$, linearity gives $B_Y(Tx,a\varepsilon)\subseteq T(B_X(x,a))$. [step 1.1, algebra]

3.1 Let $U\subseteq X$ be open and $y=Tx\in T(U)$. Choose $a>0$ with $B_X(x,a)\subseteq U$. Then step 2.1 gives $B_Y(y,a\varepsilon)\subseteq T(U)$. Thus every point of $T(U)$ is interior, so $T(U)$ is open. [step 2.1] ∎
