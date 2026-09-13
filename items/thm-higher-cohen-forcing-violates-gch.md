---
id: thm-higher-cohen-forcing-violates-gch
kind: theorem
title: Higher Cohen forcing violates GCH at a regular cardinal
status: draft
origin: pipeline
deps: [thm-cohen-forcing-closure-and-chain-condition, thm-closure-distributivity-and-no-short-sequences, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-nice-name-reduction-and-counting, def-cardinal-arithmetic, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, higher Cohen forcing", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, let $\kappa$ be infinite regular and $\lambda>\kappa$ satisfy $2^{<\kappa}=\kappa$ and $\lambda^\kappa=\lambda$. Then $\operatorname{Add}(\kappa,\lambda)$ preserves all cardinals, adds $\lambda$ distinct subsets of $\kappa$, and forces $2^\kappa=\lambda$. Consequently, if $\lambda\ge\kappa^{++}$, GCH fails at $\kappa$. Over ground-model GCH, $\kappa=\aleph_1$ and $\lambda=\aleph_3$ give a cardinal-preserving extension with CH and $2^{\aleph_1}=\aleph_3$.

## Facts & Assumptions

**Given:** AC and the stated cardinal arithmetic.

[F1] [[thm-cohen-forcing-closure-and-chain-condition]] gives $\kappa$-closure and $\kappa^+$-cc.

[F2] [[thm-closure-distributivity-and-no-short-sequences]] and [[thm-chain-condition-preserves-cofinalities-and-cardinals]] divide cardinal preservation at $\kappa$.

[F3] [[thm-nice-name-reduction-and-counting]] supplies the maximal-antichain name-count method.

[F4] [[def-cardinal-arithmetic]] supplies exponent laws.

## Proof

1.1 F1, F2 preserve cardinals at most $\kappa$ by closure and at least $\kappa^+$ by the chain condition, hence all cardinals. The coordinate-domain and bit-separation dense sets from the Cohen calculation give $\lambda$ distinct subsets of $\kappa$, so $2^\kappa\ge\lambda$. [F1, F2]

1.2 Replace the countable antichains in the nice-name proof by antichains of size at most $\kappa$. A nice name for a subset of $\kappa$ is coded by $\kappa$ many subsets of $P$ of size at most $\kappa$. Since $|P|=\lambda$ and $\lambda^\kappa=\lambda$, there are at most $(\lambda^\kappa)^\kappa=\lambda$ such names. Thus $2^\kappa\le\lambda$, proving equality. [F3, F4]

2.1 If $\lambda\ge\kappa^{++}$, equality gives $2^\kappa>\kappa^+$, so GCH fails. Under GCH with $\kappa=\aleph_1$ and $\lambda=\aleph_3$, the hypotheses hold; $\kappa$-closure adds no reals, so CH remains true, while step 1.2 gives $2^{\aleph_1}=\aleph_3$. [F1, F2, step 1.2] ∎