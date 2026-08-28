---
id: thm-lusins-theorem
kind: theorem
title: "Assuming countable choice, Lusin's theorem on finite-measure subsets of R^n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measurable-function-between-measurable-spaces, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, lem-simple-approximants-converge-uniformly-on-a-large-closed-set, thm-continuity-from-below-for-measures, thm-uniform-limit-theorem, thm-finite-and-countable-subadditivity-of-measures]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 5.15"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---
## Statement
Assume the Axiom of Countable Choice.

Let $n \ge 1$, let $E \subseteq \mathbb R^n$ be Lebesgue measurable with
$\lambda_n(E)<+\infty$, and let $f:E \to \mathbb R$ be measurable. Then for
every $\varepsilon>0$ there exist a real $M>0$ and a closed set
$F \subseteq E \cap f^{-1}([-M,M])$ such that
$$\lambda_n(E\setminus F)<\varepsilon$$
and $f|_F$ is continuous. In particular, $f|_F$ is bounded.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice, a measurable function $f:E \to \mathbb R$ on a Lebesgue measurable set $E \subseteq \mathbb R^n$ with $\lambda_n(E)<+\infty$, and a real $\varepsilon>0$.

[L1] Measurability means preimages of Borel sets are measurable. ([[def-measurable-function-between-measurable-spaces]])

[L2] Measures are continuous from below on increasing measurable sets. ([[thm-continuity-from-below-for-measures]])

[L3] Assuming countable choice, for bounded measurable functions on finite-measure Lebesgue sets there is a large closed set on which simple approximants are continuous and converge uniformly to the function. ([[lem-simple-approximants-converge-uniformly-on-a-large-closed-set]])

[L4] A uniform limit of continuous functions is continuous. ([[thm-uniform-limit-theorem]])

[L5] For measurable $(A_k)$ one has $\mu(\bigcup_k A_k)\le\sum_{k=0}^\infty\mu(A_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

## Proof

**Proof technique:** direct.

1.1 For $m \ge 1$, put $E_m:=E \cap f^{-1}([-m,m])$. Because $[-m,m]$ is a Borel subset of $\mathbb R$, [L1] makes every $E_m$ measurable. The sets $E_m$ increase with $m$, and their union is all of $E$ because $f$ is real-valued. So [L2] gives $$\lambda_n(E)=\sup_{m\ge1}\lambda_n(E_m).$$ Choose $M \ge 1$ with $\lambda_n(E\setminus E_M)<\varepsilon/2$. [L1, L2, choose]

2.1 On $E_M$ one has $|f|\le M$, so $f|_{E_M}$ is bounded. Apply [L3] to the bounded measurable function $f|_{E_M}$ with tolerance $\varepsilon/2$. This gives a closed set $F \subseteq E_M$ and simple functions $s_m:E_M \to \mathbb R$ such that $$\lambda_n(E_M\setminus F)<\varepsilon/2,$$ each $s_m|_F$ is continuous, and $s_m \to f|_{E_M}$ uniformly on $F$. By [L4], $f|_F$ is continuous. [step 1.1, L3, L4]

3.1 Because $F \subseteq E_M \subseteq E$, one has $$E\setminus F=(E\setminus E_M)\cup(E_M\setminus F).$$ Hence [L5] together with steps 1.1 and 2.1 gives $$\lambda_n(E\setminus F)<\varepsilon/2+\varepsilon/2=\varepsilon.$$ The set $F$ also lies in $E \cap f^{-1}([-M,M])$ by step 1.1. [step 1.1, step 2.1, L5, algebra]

4.1 The set $F$ and the bound $M$ satisfy the theorem. [step 2.1, step 3.1] ∎
