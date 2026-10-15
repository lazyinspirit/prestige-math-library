---
id: thm-tdmath-common-meter-calibration
kind: theorem
title: Finite-family calibration by a common meter
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps: [lem-tdmath-reference-supremum-bounds, def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, thm-tdmath-additive-entropy-representation, def-cartesian-product]
dependency_roles:
  lem-tdmath-reference-supremum-bounds: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  def-cartesian-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.E"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
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

Let $I$ be a finite nonempty set of system types, $X_i$ a nonempty state set with chosen reference $r_i\in X_i$ for each $i\in I$, and $M$ a common meter state set with distinct $z_0,z_1\in M$. For each $i$, let $\preceq_i$ be a comparison relation on equal-mass compounds over the Cartesian product $X_i\times M$ ([[def-cartesian-product]]), defined as in [[def-tdmath-comparison-and-stability]] and satisfying its six hypotheses: preorder, composition consistency, positive scaling, splitting and recombination, stability, and CH. Write $\preceq_{s,i}$ for the signed comparison supplied by [[def-tdmath-signed-comparison]], and $\sim_{s,i}$ for mutual signed comparison. Assume $(r_i,z_0)\preceq_i(r_i,z_1)$ and not $(r_i,z_1)\preceq_i(r_i,z_0)$. Let $S_i$ be the normalized representation supplied by [[thm-tdmath-additive-entropy-representation]] for this product comparison, and put $\sigma_i(x):=S_i(x,z_0)$. In the product comparison, the unit product-state point mass satisfies

$$e_{(x,z_0)}\sim_{s,i}(1-\sigma_i(x))e_{(r_i,z_0)}+\sigma_i(x)e_{(r_i,z_1)},$$

by [[lem-tdmath-reference-supremum-bounds]]. These product-state point masses and product comparisons are separate from the shared state-and-meter compounds and comparison defined next.

Assume a **common-meter compatibility interface** as follows. Let $\mathcal Y$ be a set of raw tags containing three pairwise disjoint families $\{a_{i,x}:i\in I,\ x\in X_i\}$, $\{\rho_i:i\in I\}$, and $\{\zeta_0,\zeta_1\}$, with $\zeta_0\ne\zeta_1$. Compounds over $\mathcal Y$ are finite-support nonnegative coefficient maps as in [[def-tdmath-tagged-scalable-compound]]. Let $\preceq_{\mathcal Y}$ be a relation on equal-mass compounds over $\mathcal Y$ satisfying all six hypotheses of [[def-tdmath-comparison-and-stability]]; write $\preceq_{s,\mathcal Y}$ for its signed comparison from [[def-tdmath-signed-comparison]] and $\sim_{s,\mathcal Y}$ for mutual signed comparison. The common relation is a separate relation from each product comparison $\preceq_i$.

Let $e_{\rho_i}$ and $e_{\zeta_j}$ be the unit point-mass compounds on their indicated raw tags, and define $u_{i,x}:=e_{a_{i,x}}+e_{\zeta_0}$. Thus $u_{i,x}$ is an explicit mass-two state-and-fixed-meter compound, not a unit tag. Require the exact signed substitution

$$u_{i,x}\sim_{s,\mathcal Y} e_{\rho_i}+(1-\sigma_i(x))e_{\zeta_0}+\sigma_i(x)e_{\zeta_1}\qquad(i\in I,\ x\in X_i),$$

and require the common meter point masses to satisfy $e_{\zeta_0}\preceq_{\mathcal Y}e_{\zeta_1}$ and not $e_{\zeta_1}\preceq_{\mathcal Y}e_{\zeta_0}$. Both sides of each substitution have total coefficient two, even when $\sigma_i(x)$ lies outside $[0,1]$. Finite substitutions compose and common terms cancel by [[lem-tdmath-spectator-cancellation]] under the stated common comparison hypotheses; neither property is inferred from the separate product comparisons or from numerical meter values.

For positive coefficients $t_{ik}$ on a finite collection of type-$i$ states $x_{ik}$, define $T_i:=\sum_k t_{ik}$ and $T:=\sum_iT_i$. Put $C_0:=\sum_{i,k}t_{ik}e_{a_{i,x_{ik}}}$ and $C:=\sum_{i,k}t_{ik}u_{i,x_{ik}}=C_0+T e_{\zeta_0}$. Thus $C_0$ is the state compound of mass $T$ and $C$ is its fixed-meter encoding of mass $2T$. Empty collections give $T=0$ and $C_0=C=0$. Define

$$\Sigma(C):=\sum_{i\in I}\sum_k t_{ik}\sigma_i(x_{ik}).$$

For two such compounds $C,D$ with the same type-total vector $(T_i)_{i\in I}$, the common comparison satisfies $C\preceq_{\mathcal Y}D$ exactly when $\Sigma(C)\le\Sigma(D)$. Equivalently, the same order criterion holds for the state compounds $C_0,D_0$ after canceling their common $T e_{\zeta_0}$. The index family is finite; no arbitrary-index choice or infinite decomposition is asserted.

## Facts & Assumptions

[A1] The common-meter compatibility assumptions in the Statement: the relation $\preceq_{\mathcal Y}$ is defined on equal-mass compounds over $\mathcal Y$, satisfies all six comparison hypotheses, each exact signed substitution holds, and the common meter pair is strict.

[F1] [[thm-tdmath-additive-entropy-representation]] supplies the real normalized product representation for each $\preceq_i$, and [[lem-tdmath-reference-supremum-bounds]] supplies $e_{(x,z_0)}\sim_{s,i}(1-\sigma_i(x))e_{(r_i,z_0)}+\sigma_i(x)e_{(r_i,z_1)}$ in that product comparison. The separate mass-two substitution on $\mathcal Y$ is exactly [A1], not an identification of product and shared tags.

[F2] [[lem-tdmath-spectator-cancellation]]: on the common relation $\preceq_{\mathcal Y}$, finite signed substitutions are additive, invariant under common signed translation, and common terms can be canceled. [[def-tdmath-signed-comparison]] and [[def-tdmath-comparison-and-stability]] also preserve signed comparison under positive scaling: multiplying the difference by a positive scalar multiplies both its positive and negative parts by that scalar, so the compound scaling axiom applies.

[F3] [[lem-tdmath-reference-order]]: applied to the common relation $\preceq_{\mathcal Y}$ and its strict meter pair, comparison of equal-mass reference expressions is exactly comparison of their $\zeta_1$ coefficients.

## Proof

**Given:** [A1] and [F1]–[F3].

1.1 For each constituent $(i,x_{ik},z_0)$ of $C$, its mass-two shared compound $u_{i,x_{ik}}$ is equivalent under $\sim_{s,\mathcal Y}$ by [A1] to $e_{\rho_i}+(1-\sigma_i(x_{ik}))e_{\zeta_0}+\sigma_i(x_{ik})e_{\zeta_1}$. Each side has total coefficient two, so the signed substitution is defined. Scale by $t_{ik}>0$ and combine the finitely many comparisons using the comparison axioms and [F2]. The resulting reference-system part is $\sum_iT_i e_{\rho_i}$, independent of the chosen states. The meter part has coefficients $T-\Sigma(C)$ on $e_{\zeta_0}$ and $\Sigma(C)$ on $e_{\zeta_1}$, where $T:=\sum_iT_i$. Hence $C$ is equivalent under $\sim_{s,\mathcal Y}$ to that fixed reference-system compound plus $(T-\Sigma(C))e_{\zeta_0}+\Sigma(C)e_{\zeta_1}$, whose total coefficient is $T+T=2T$. If the collection is empty, both expressions are zero and the equivalence is reflexivity, requiring no order scaling at zero. [A1, F1, F2, algebra]

2.1 The same substitution for $D$ gives the same reference-system compound because its type totals agree, and the same total meter mass $T$. Cancel the common reference-system terms by signed translation and cancellation in [F2]. If $T>0$, the remaining meter maps have total coefficient $T$. The reciprocal $T^{-1}$ is positive: $T^{-1}\ne0$, and if $-T^{-1}>0$ then positivity of $T$ and closure of the positive cone under multiplication give $T(-T^{-1})=-1>0$. But $1>0$: since $1\ne0$, trichotomy gives either $1>0$ or $-1>0$; the latter would, by positive-product closure, also give $(-1)^2=1>0$, contradicting trichotomy. Thus $-1>0$ is impossible, and so $T^{-1}>0$. Scaling by $T^{-1}$ turns the remaining maps into the unit reference maps $R_{\Sigma(C)/T}$ and $R_{\Sigma(D)/T}$ on $\{\zeta_0,\zeta_1\}$. By [F3] these compare exactly when $\Sigma(C)/T\le\Sigma(D)/T$; multiplying both sides by $T>0$ preserves order, so this is equivalent to $\Sigma(C)\le\Sigma(D)$. Scaling back by $T$ proves the comparison equivalence, so no unit-mass reference theorem is applied directly at mass $T$. Reversing the equivalences proves the converse implication as well. Since $C=C_0+T e_{\zeta_0}$ and $D=D_0+T e_{\zeta_0}$, [F2] also gives $C\preceq_{\mathcal Y}D$ exactly when $C_0\preceq_{\mathcal Y}D_0$; for $T=0$ all these compounds are empty and the criterion is $0\le0$. [A1, F2, F3, step 1.1, algebra] ∎

## Remarks

The compatibility interface records the compositional assumption needed to move from separate product systems to one shared meter scale. Without it, independent representations need not share a multiplicative calibration. This theorem makes no statement for infinitely many types.

