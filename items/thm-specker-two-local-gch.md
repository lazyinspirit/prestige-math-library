---
id: thm-specker-two-local-gch
kind: theorem
title: "Specker’s two-local-GCH theorem"
status: draft
origin: pipeline
deps: ["lem-local-gch-hartogs-dichotomy", "lem-hartogs-iterated-powerset-bounds", "lem-local-gch-absorbs-sums-and-squares"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (5), Specker theorem and complete proof"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
    - title: "Carneiro, Theorem 1, p.2"
      url: https://arxiv.org/pdf/1506.03533
---

## Statement

In ZF, if $\omega\preceq X$, $\mathrm{CH}(X)$ and $\mathrm{CH}(\mathcal P(X))$, then $\mathcal P(X)\approx h(X)$. In particular $X$ is well-orderable.

## Facts & Assumptions

[F1] [[lem-local-gch-hartogs-dichotomy]]: For a set containing omega and satisfying local GCH, an embedding of its Hartogs number into its power set gives that power set equinumerous with the Hartogs number; otherwise the Hartogs numbers agree.

[F2] [[lem-hartogs-iterated-powerset-bounds]]: If $X^2\approx X$, then $h(X)\preceq\mathcal P^2(X)$.

[F3] [[lem-local-gch-absorbs-sums-and-squares]]: The local hypotheses imply $X^2\approx X$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Write $P=\mathcal P(X)$ and $Q=\mathcal P(P)$. Suppose $P$ is not well-orderable. Then $Q$ is not well-orderable either, since $P\preceq Q$. Apply the dichotomy to $X$ and to $P$; both contain an injected omega and satisfy their respective local hypotheses. Their first branches are excluded, so $h(X)=h(P)=h(Q)$. [F1]

2.1 But square absorption and the double-power bound give $h(X)\preceq Q$. Together with the equality in the previous step this embeds the Hartogs number of $Q$ into $Q$, impossible by its defining property. Thus $P$ is well-orderable. [F2, F3, step 1.1]

3.1 A well-order of $P$ has some ordinal type $\rho$. If $\rho<h(X)$, it would embed into $X$, giving $P\preceq X$, which is impossible: invert that injection on its range and extend by the empty subset elsewhere to get a surjection $s:X\to\mathcal P(X)$; then $\{x\in X:x\notin s(x)\}$ is missed. Thus $h(X)\le\rho$ and $h(X)\preceq P$. The first dichotomy branch now gives $P\approx h(X)$ and the well-orderability of $X$. [F1, step 2.1] ∎
