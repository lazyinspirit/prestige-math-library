---
id: cor-bounded-domain-lusin-core-can-be-chosen-compact
kind: corollary
title: "Assuming countable choice, on a bounded measurable set, Lusin's closed core can be chosen compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-lusins-theorem, thm-heine-borel-rn]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 5.15"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $n \ge 1$, let $E \subseteq \mathbb R^n$ be Lebesgue measurable with
$\lambda_n(E)<+\infty$, and suppose $E$ is bounded. Let $f:E \to \mathbb R$ be
measurable. Then for every $\varepsilon>0$ there is a compact set
$K \subseteq E$ such that $\lambda_n(E\setminus K)<\varepsilon$ and
$f|_K$ is continuous.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a bounded Lebesgue measurable set $E \subseteq \mathbb R^n$ of finite measure, a measurable function $f:E \to \mathbb R$, and a real $\varepsilon>0$.

[L1] Assuming countable choice, Lusin's theorem gives a closed set $F \subseteq E$ with $\lambda_n(E\setminus F)<\varepsilon$ such that $f|_F$ is continuous. ([[thm-lusins-theorem]])

[L2] In $\mathbb R^n$, a subset is compact if and only if it is closed and bounded. ([[thm-heine-borel-rn]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a closed set $F \subseteq E$ with $\lambda_n(E\setminus F)<\varepsilon$ such that $f|_F$ is continuous. [L1, choose]

2.1 Because $F \subseteq E$ and $E$ is bounded, the set $F$ is bounded. Since $F$ is also closed in $\mathbb R^n$, [L2] makes $F$ compact. [step 1.1, L2]

3.1 Taking $K:=F$ proves the claim. [step 2.1] ∎
