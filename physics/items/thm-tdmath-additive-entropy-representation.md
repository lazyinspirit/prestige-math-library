---
id: thm-tdmath-additive-entropy-representation
kind: theorem
title: Additive extensive representation of compound comparison
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps: [lem-tdmath-compound-mass-well-defined, def-complete-ordered-field, def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, lem-tdmath-reference-supremum-bounds]
dependency_roles:
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
  lem-tdmath-reference-supremum-bounds: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Campión et al., A Survey on the Mathematical Foundations of Axiomatic Entropy, §§2–5"
      url: "https://www.mdpi.com/2075-1680/7/2/29/pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $X$ be nonempty and suppose its finite-support compounds carry the comparison structure of [[def-tdmath-comparison-and-stability]] over the complete ordered field $\mathbb R$. If there are $x_0,x_1\in X$ with $x_0\preceq x_1$ and not $x_1\preceq x_0$, define $S(x):=\sup L_x$ using [[lem-tdmath-reference-supremum-bounds]]. Then $S:X\to\mathbb R$ is normalized by $S(x_0)=0$, $S(x_1)=1$, and for all equal-mass compounds $A=\sum_i a_i e_{x_i}$ and $B=\sum_j b_j e_{y_j}$,

$$A\preceq B\quad\Longleftrightarrow\quad\sum_i a_iS(x_i)\le\sum_j b_jS(y_j).$$

Thus $S$ is an additive extensive representation on finite compounds. If no strict pair exists, CH instead makes every equal-mass pair of compounds equivalent, and any constant state function gives a (degenerate) additive representation. No concavity, continuity, or physical law follows without additional hypotheses.

## Facts & Assumptions

[A1] [[def-tdmath-comparison-and-stability]]: equal-mass compounds satisfy the preorder, consistency, scaling, stability and comparison hypotheses; the state set is nonempty.

[F1] [[def-tdmath-signed-comparison]] and [[lem-tdmath-spectator-cancellation]]: signed comparisons are translation-invariant and additive, and agree with ordinary comparison for nonnegative compounds.

[F2] [[lem-tdmath-reference-supremum-bounds]]: in the strict-reference case, each $S(x)=\sup L_x$ is finite and $x\sim_sR_{S(x)}$.

[F3] [[lem-tdmath-reference-order]]: $R_\lambda\preceq_sR_\mu$ iff $\lambda\le\mu$ for the chosen strict reference pair.

[F4] [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]]: each state denotes its unit-mass point compound $e_x$; every compound is the finite sum of its strictly positive support coefficients, or the empty sum. Nonnegative scaling is pointwise, $0C=0$, and a nonnegative compound has zero mass exactly when it is empty.

## Proof

**Given:** [A1] and [F1]–[F4].

1.1 In the strict-reference case, [F3] gives $R_\lambda\preceq_s e_{x_0}$ exactly for $\lambda\le0$, and $R_\lambda\preceq_s e_{x_1}$ exactly for $\lambda\le1$. Their suprema are therefore $S(x_0)=0$ and $S(x_1)=1$. [F2, F3]

1.2 Let $C=\sum_i a_i e_{x_i}$ have mass $M$ and set $q_C:=\sum_i a_iS(x_i)$. Discard any zero terms in this presentation using [F4]. If the support is empty, $C=0$, $M=q_C=0$ and $C_R=0$, so signed reflexivity gives the claimed equivalence. Otherwise each remaining coefficient is strictly positive. For each remaining constituent, [F2] gives $e_{x_i}\sim_sR_{S(x_i)}$; positive scaling and finite repeated use of composition combine these into $C\sim_s C_R$, where $C_R:=\sum_i a_iR_{S(x_i)}=(M-q_C)e_{x_0}+q_Ce_{x_1}$. This calculation is valid for signed coefficients because the signed relation is additive and translation-invariant by [F1]. [A1, F1, F2, F4, algebra]

2.1 Apply step 1.2 to both $A$ and $B$, and write $q_A,q_B$ for the resulting scalar sums. Since $A\sim_sA_R$ and $B\sim_sB_R$, transitivity gives $A\preceq B$ exactly when $A_R\preceq_sB_R$. Their masses agree, and $B_R-A_R=(q_B-q_A)(e_{x_1}-e_{x_0})$; [F3] therefore gives $A_R\preceq_sB_R$ exactly when $q_A\le q_B$. This proves the representation formula. [A1, F1, F3, step 1.2]

3.1 In the no-strict-pair case, take any $x,y\in X$. By [F4] their unit compounds have equal mass one, so CH gives one of $x\preceq y$ or $y\preceq x$; if exactly one held it would be a strict pair, so both hold. Fix $r\in X$. Let $C$ have mass $M$. If $M=0$, [F4] gives $C=0$, and reflexivity handles this empty compound without applying the positive-scaling axiom at zero. If $M>0$, use the canonical finite decomposition over the support from [F4]; every coefficient there is positive. Scale each constituent equivalence $e_x\sim e_r$ by its positive coefficient and compose the finitely many comparisons to obtain $C\sim M e_r$. Thus equal-mass $A,B$ are both empty when their common mass is zero, and otherwise each is equivalent to the same $M e_r$; hence they are equivalent in both cases. For a constant $S(x)=c$, both compound values equal $cM$, including zero for empty compounds, so the representation equivalence holds. [A1, F1, F4, algebra] ∎

