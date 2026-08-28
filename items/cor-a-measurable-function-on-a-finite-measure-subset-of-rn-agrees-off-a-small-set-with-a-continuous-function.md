---
id: cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function
kind: corollary
title: "Assuming countable choice and dependent choice, a measurable function on a finite-measure subset of R^n agrees there, off a small set, with a continuous function on R^n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-lusins-theorem, thm-tietze-extension-theorem, lem-metrics-on-rn, thm-metric-spaces-are-completely-normal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 5.15"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

**Assume the Axiom of Countable Choice and the Axiom of Dependent Choice.** Let $n \ge 1$, let
$E \subseteq \mathbb R^n$ be Lebesgue measurable with $\lambda_n(E)<+\infty$,
and let $f:E \to \mathbb R$ be measurable. Then for every $\varepsilon>0$ there
are a continuous function $g:\mathbb R^n \to \mathbb R$ and a closed set
$F \subseteq E$ such that
$$\lambda_n(E\setminus F)<\varepsilon \qquad\text{and}\qquad g(x)=f(x)\text{ for every }x \in F.$$

In particular,
$$\lambda_n(\{x \in E : g(x)\ne f(x)\})<\varepsilon.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, dependent choice, a measurable function $f:E \to \mathbb R$ on a finite-measure Lebesgue set $E \subseteq \mathbb R^n$, and a real $\varepsilon>0$.

[L1] Assuming countable choice, Lusin's theorem gives a real $M>0$ and a closed set $F \subseteq E \cap f^{-1}([-M,M])$ such that $\lambda_n(E\setminus F)<\varepsilon$ and $f|_F$ is continuous. ([[thm-lusins-theorem]])

[L2] Assuming dependent choice, every continuous map from a closed subspace of a normal space into a closed interval $[a,b]$ extends continuously to the whole space. ([[thm-tietze-extension-theorem]])

[L3] For $n \ge 1$, $\mathbb R^n$ carries its Euclidean metric. ([[lem-metrics-on-rn]])

[L4] Every metric space is normal. ([[thm-metric-spaces-are-completely-normal]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $M>0$ and a closed set $F \subseteq E \cap f^{-1}([-M,M])$ with $\lambda_n(E\setminus F)<\varepsilon$ such that $f|_F : F \to [-M,M]$ is continuous. [L1, choose]

2.1 By [L3], $\mathbb R^n$ is a metric space, so [L4] makes it normal. Apply [L2] to the closed subspace $F \subseteq \mathbb R^n$ and to the interval $[-M,M]$. This gives a continuous function $g:\mathbb R^n \to [-M,M]$ with $g|_F=f|_F$. [step 1.1, L2, L3, L4]

3.1 Since $g=f$ on $F$, one has $\{x \in E : g(x)\ne f(x)\}\subseteq E\setminus F$. Therefore $\lambda_n(\{x \in E : g(x)\ne f(x)\})<\varepsilon$. The function $g$ and the closed set $F$ satisfy the corollary. [step 1.1, step 2.1, algebra] ∎
