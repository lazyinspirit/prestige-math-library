---
id: thm-tdmath-common-meter-calibration
kind: theorem
title: Finite-family calibration by a common meter
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps: [def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, thm-tdmath-additive-entropy-representation]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.E"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Let $I$ be a finite nonempty set of system types, $X_i$ a nonempty state set with chosen reference $r_i\in X_i$ for each $i\in I$, and $M$ a common meter state set with $z_0,z_1\in M$. Assume for every $i$ that the product state set $X_i\times M$ satisfies the hypotheses of [[thm-tdmath-additive-entropy-representation]], with strict reference pair $(r_i,z_0)\prec\prec(r_i,z_1)$. Let $S_i$ be its normalized representation and put $\sigma_i(x):=S_i(x,z_0)$. Thus $(x,z_0)\sim_s(r_i,(1-\sigma_i(x))z_0,\sigma_i(x)z_1)$ in that product comparison.

Assume in addition a **common-meter compatibility interface**. Let $\mathcal Y$ be a set of formal tags containing a distinct token $u_{i,x}$ for each type/state pair, a type-reference token $e_{r_i}$ for each $i$, and the common meter tokens $e_{z_0},e_{z_1}$; take these three token families to be pairwise disjoint. Compounds over $\mathcal Y$ use the finite-support convention of [[def-tdmath-tagged-scalable-compound]], and their signed comparison is the one in [[def-tdmath-signed-comparison]]. Require the exact substitution

$$u_{i,x}\sim_s e_{r_i}+(1-\sigma_i(x))e_{z_0}+\sigma_i(x)e_{z_1}\qquad(i\in I,\ x\in X_i),$$

finite substitutions to compose, and the fixed reference sum $\sum_iT_ie_{r_i}$ to cancel when type totals agree. Require the common meter order to satisfy $z_0\preceq z_1$ and not $z_1\preceq z_0$. These are hypotheses on the comparison algebra, not consequences of separate numerical meter readings.

For a compound $C$ whose terms are type-$i$ states $x_{ik}$ with positive coefficients $t_{ik}$ and whose meter component is fixed at $z_0$, define the type totals $T_i:=\sum_k t_{ik}$ and

$$\Sigma(C):=\sum_{i\in I}\sum_k t_{ik}\sigma_i(x_{ik}).$$

For two such compounds $C,D$ with the same type-total vector $(T_i)_{i\in I}$, the common comparison satisfies $C\preceq D$ exactly when $\Sigma(C)\le\Sigma(D)$. The index family is finite; no arbitrary-index choice or infinite decomposition is asserted.

## Facts & Assumptions

[A1] The common-meter compatibility interface in the Statement: the exact signed substitution for every $u_{i,x}$ holds, finite substitutions compose, equal type totals give the same cancellable reference sum, and the common meter pair is strict.

[F1] [[thm-tdmath-additive-entropy-representation]]: each strict-reference product type has a normalized additive representation and $(x,z_0)\sim_s(r_i,(1-\sigma_i(x))z_0,\sigma_i(x)z_1)$.

[F2] [[lem-tdmath-spectator-cancellation]]: finite signed substitutions are additive and common terms can be canceled.

[F3] [[lem-tdmath-reference-order]]: for the common strict meter pair, comparison of equal-mass reference expressions is exactly comparison of their $z_1$ coefficients.

## Proof

**Given:** [A1] and [F1]–[F3].

1.1 For each constituent $(i,x_{ik},z_0)$ of $C$, its common-algebra token $u_{i,x_{ik}}$ is equivalent by [F1] and the exact identification in [A1] to $e_{r_i}+(1-\sigma_i(x_{ik}))e_{z_0}+\sigma_i(x_{ik})e_{z_1}$. Scale by $t_{ik}$ and combine the finitely many comparisons using [A1] and [F2]. The resulting reference-system part is $\sum_iT_i e_{r_i}$, independent of the chosen states. The meter part has coefficients $T-\Sigma(C)$ on $e_{z_0}$ and $\Sigma(C)$ on $e_{z_1}$, where $T:=\sum_iT_i$. Hence $C$ is equivalent to that fixed reference-system compound plus $(T-\Sigma(C))e_{z_0}+\Sigma(C)e_{z_1}$. [A1, F1, F2, algebra]

2.1 The same substitution for $D$ gives the same reference-system compound because its type totals are the same, and the same total meter mass $T$. Cancel the common reference-system terms by [A1] and [F2]. The remaining comparison is between equal-mass meter expressions whose $e_{z_1}$ coefficients are $\Sigma(C)$ and $\Sigma(D)$; [F3] says it holds exactly when $\Sigma(C)\le\Sigma(D)$. Reversing the same equivalences proves the converse implication as well. [A1, F2, F3, step 1.1] ∎

## Remarks

The compatibility interface records the compositional assumption needed to move from separate product systems to one shared meter scale. Without it, independent representations need not share a multiplicative calibration. This theorem makes no statement for infinitely many types.

