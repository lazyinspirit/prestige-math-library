---
id: lem-laver-guided-iteration-size-collapse-and-factorization
kind: lemma
title: "Size, collapse, and factorization for the PFA iteration"
status: published
origin: pipeline
deps: [def-laver-guided-proper-bookkeeping-iteration, thm-countable-support-iterations-preserve-properness, thm-proper-forcing-preserves-stationary-subsets-of-omega-one, thm-lc-supercompactness-closed-embedding-characterization, cor-lc-large-cardinal-implication-ledger, lem-lc-inaccessible-size-and-rank-bounds, lem-generalized-delta-system-for-small-supports, thm-chain-condition-preserves-cofinalities-and-cardinals, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Proposition 7.13 and Theorem 24.11, pp.28 and 99-101"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Statement

Let $\kappa$ be supercompact and let $P_\kappa$ be the Laver-guided
countable-support iteration. Then $P_\kappa$ is proper, has cardinality
$\kappa$, is $\kappa$-cc, preserves $\omega_1$, collapses every ground
cardinal strictly between $\omega_1$ and $\kappa$, and forces
$\kappa=\omega_2$. If a sufficiently closed supercompactness embedding
$j:V\to M$ anticipates a $P_\kappa$-name $\dot Q$ for a proper forcing, then

$$j(P_\kappa)\simeq P_\kappa*\dot Q*\dot R$$

for the tail iteration $\dot R$ in $M$.

## Facts & Assumptions

**Given:** ZFC, a supercompact $\kappa$, a Laver function $\ell$, and the iteration from the statement.

[F1] The bookkeeping construction uses countable support, only forced-proper iterands, a trivial fallback, and identifies an anticipated proper name as stage $\kappa$ of the image iteration. [[def-laver-guided-proper-bookkeeping-iteration]]

[F2] Countable-support iterations of forced-proper iterands are proper. [[thm-countable-support-iterations-preserve-properness]]

[F3] Proper forcing preserves $\omega_1$. [[thm-proper-forcing-preserves-stationary-subsets-of-omega-one]]

[F4] Supercompactness supplies sufficiently closed embeddings with critical point $\kappa$. [[thm-lc-supercompactness-closed-embedding-characterization]]

[F5] Below an inaccessible cardinal all required rank and exponentiation bounds are below $\kappa$. [[lem-lc-inaccessible-size-and-rank-bounds]]

[F6] Families of small supports admit large delta subsystems under the stated inaccessible arithmetic. [[lem-generalized-delta-system-for-small-supports]]

[F7] A $\kappa$-cc forcing preserves the regular cardinal $\kappa$ and all larger cardinals and cofinalities. [[thm-chain-condition-preserves-cofinalities-and-cardinals]]

[F8] Every supercompact cardinal is inaccessible. [[cor-lc-large-cardinal-implication-ledger]]

[A1] AC supplies thinning, well-orders, simultaneous names, and the selected supercompactness embeddings. [[def-axiom-of-choice]]

## Proof

1.1 By F1 every stage forces its iterand proper, so F2 makes every $P_\alpha$, including $P_\kappa$, proper. F3 therefore preserves $\omega_1$. [F1, F2, F3, Given]

1.2 Let $S$ be the set of $\alpha\in[\omega_1,\kappa)$ for which $\ell(\alpha)$ is a valid $P_\alpha$-name for $\operatorname{Col}(\omega_1,\alpha)^{V^{P_\alpha}}$. We verify the required reflection instead of assuming it. Let $\dot C$ be the canonical $P_\kappa$-name for $\operatorname{Col}(\omega_1,\kappa)^{V^{P_\kappa}}$. The Laver anticipation property gives a sufficiently closed supercompactness embedding $j:V\to M$ with $j(\ell)(\kappa)=\dot C$. By elementarity and the recursive definition in F1, the first $\kappa$ stages of $j(P_\kappa)$ are exactly $P_\kappa$, so $M$ recognizes $\dot C$ as the required proper collapse name at stage $\kappa$. Hence $\kappa\in j(S)$. If $S$ were bounded below some $\eta<\kappa$, then $j(S)=S\subseteq\eta$, contradicting $\kappa\in j(S)$. Thus $S$ is unbounded. [F1, F4, A1, Given]

2.1 By F8, $\kappa$ is inaccessible. Inductively, $P_\alpha$ and every iterand name for $\alpha<\kappa$ have hereditary size below $\kappa$: F1 places the guesses in $V_\kappa$, while F5 bounds the number of countable supports and the countable products of earlier hereditary presentations. At every limit of uncountable cofinality, countable support is bounded, so the inverse-limit carrier equals the direct limit; such limits form a stationary subset of inaccessible $\kappa$. For a $\kappa$-sized family of conditions, F6 thins their countable supports to a delta system. The root is bounded below some $\beta<\kappa$; since $|P_\beta|<\kappa$, regularity thins again so all root restrictions agree. The union of any two remaining conditions is a condition: below $\beta$ they agree, and beyond the root their supports are disjoint, so at each coordinate monotonicity of the earlier forcing relation preserves the unique tail requirement. Hence the family has two compatible members and $P_\kappa$ is $\kappa$-Knaster, in particular $\kappa$-cc. Every countable support is bounded in $\kappa$, so $P_\kappa=\bigcup_{\alpha<\kappa}P_\alpha$ and $|P_\kappa|\leq\kappa$. [F1, F5, F6, F8, A1, step 1.1]

3.1 For $\alpha\in S$ the collapse is countably closed and hence proper, so F1 uses it rather than the fallback. Consequently, for every ground cardinal $\mu$ with $\omega_1<\mu<\kappa$, a stage $\alpha\in S$ above $\mu$ makes $|\mu|\leq\omega_1$. Moreover $P_{\alpha+1}$ has at least $|\alpha|$ conditions: the one-point functions in $\operatorname{Col}(\omega_1,\alpha)$ give that many distinct last-coordinate conditions. Since $S$ is unbounded, $|P_\kappa|\geq\kappa$, so equality holds in step 2.1. By F7, $\kappa$ itself remains a cardinal, while step 1.1 preserves $\omega_1$; therefore the final model has no cardinal strictly between them and forces $\kappa=\omega_2$. [F1, F5, F7, A1, step 1.1, step 1.2, step 2.1]

4.1 Let $j:V\to M$ be supplied by F4 with enough closure to contain the relevant $P_\kappa$-name $\dot Q$, and suppose $j(\ell)(\kappa)=\dot Q$ and $P_\kappa$ forces $\dot Q$ proper. Since $\operatorname{crit}(j)=\kappa$, elementarity applied to the recursive definition in F1 makes the first $\kappa$ stages of $j(P_\kappa)$ exactly $P_\kappa$. The closure agreement makes $M$ recognize the same forced-properness assertion, so stage $\kappa$ is $\dot Q$, not the fallback. Splitting the remaining image iteration after that coordinate gives a tail name $\dot R$ and the canonical dense isomorphism $j(P_\kappa)\simeq P_\kappa*\dot Q*\dot R$. This proves every clause, with Choice used exactly through A1 and the declared suppliers. [F1, F4, A1, step 2.1] ∎
