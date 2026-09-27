---
id: thm-open-mapping-theorem
kind: theorem
title: "Open mapping theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-mapping-ball-closure-step, lem-open-mapping-successive-approximation, def-bounded-linear-operator, def-dependent-choice]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Theorem 2.8", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---

## Statement

Assume DC. A surjective bounded linear map $T:X\to Y$ between Banach spaces is open: it maps every open subset of $X$ to an open subset of $Y$.

## Facts & Assumptions

**Given:** DC and a surjective bounded linear map $T:X\to Y$ between Banach spaces.

[A1] The stated Dependent Choice is the direct premise for the two open-mapping lemmas ([[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 Under [A1], [[lem-open-mapping-ball-closure-step]] gives some $r>0$ with $B_Y(0,r)\subseteq\overline{T(B_X(0,1))}$. The successive-approximation lemma [[lem-open-mapping-successive-approximation]] then gives $B_Y(0,r/2)\subseteq T(B_X(0,1))$. Put $\varepsilon=r/2>0$. [given, A1]

2.1 For every $x\in X$ and $a>0$, linearity gives $B_Y(Tx,a\varepsilon)\subseteq T(B_X(x,a))$. [step 1.1, algebra]

3.1 Let $U\subseteq X$ be open and $y=Tx\in T(U)$. Choose $a>0$ with $B_X(x,a)\subseteq U$. Then step 2.1 gives $B_Y(y,a\varepsilon)\subseteq T(U)$. Thus every point of $T(U)$ is interior, so $T(U)$ is open. [step 2.1] ∎
