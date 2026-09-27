---
id: cor-flat-local-cohen-macaulay-fibre-criterion
title: The flat-local Cohen--Macaulay fibre criterion
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, cor-flat-local-depth-additivity, def-axiom-of-choice, thm-krull-height-theorem, thm-dimension-as-minimal-number-of-radical-generators, thm-flat-going-down, cor-depth-of-a-finite-local-module-at-most-its-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: Stacks Project, Lemma 10.112.7 (dimension under going down)
      url: https://stacks.math.columbia.edu/tag/00ON
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (cor-flat-local-cohen-macaulay-fibre-criterion). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)\to(S,\mathfrak n)$ be a flat local homomorphism of
Noetherian local rings. Then $S$ is Cohen--Macaulay if and only if both $R$
and the closed fibre $S/\mathfrak mS$ are Cohen--Macaulay.

## Facts & Assumptions

**Given:** AC and a flat local homomorphism of Noetherian local rings $R\to S$; put $F=S/\mathfrak mS$, $d=\dim R$, and $e=\dim F$.

[L0] The Krull height theorem bounds the height of a maximal ideal by the number of its generators ([[thm-krull-height-theorem]]).

[L1] A finite-dimensional local ring of dimension $h$ has an $h$-generated ideal with maximal radical, and no ideal with fewer generators has maximal radical ([[thm-dimension-as-minimal-number-of-radical-generators]]).

[L2] Under AC, a flat ring map has going down for prime chains ([[thm-flat-going-down]], [[def-axiom-of-choice]]).

[L3] Flat-local depth additivity gives $\operatorname{depth}S=\operatorname{depth}R+\operatorname{depth}F$ ([[cor-flat-local-depth-additivity]]).

[L4] For every Noetherian local ring, depth is at most dimension, and Cohen–Macaulay means equality ([[cor-depth-of-a-finite-local-module-at-most-its-dimension]], [[def-cohen-macaulay-local-module-and-ring]]).

## Proof

**Proof technique:** direct.

1.1 Noetherian local maximal ideals are finitely generated. A zero maximal ideal gives a field of dimension zero; otherwise [L0] bounds its height by a positive finite number of generators. Thus $R,S,F$ all have finite dimension. Choose $d$ parameters $x_i$ in $R$ and $e$ lifts $y_j$ in $S$ of parameters of $F$, using [L1]. The ideal $J=(x_i,y_j)S$ has radical $\mathfrak n$: a power of $\mathfrak m$ lies in $(x_i)R$, and a power of $\mathfrak n/\mathfrak mS$ lies in the ideal of the images of $y_j$ in $F$. Taking radicals successively gives $\sqrt J=\mathfrak n$. By the minimal-generator bound [L1] for $S$, $\dim S\le d+e$. [L0, L1, given, construct]

2.1 Choose a maximal chain of primes $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_d=\mathfrak m$ in $R$ and a maximal fibre chain $\mathfrak q_0/\mathfrak mS\subsetneq\cdots\subsetneq\mathfrak q_e/\mathfrak mS=\mathfrak n/\mathfrak mS$ in $F$. All $\mathfrak q_j$ contract to $\mathfrak m$. Starting at $\mathfrak q_0$, repeatedly apply going down [L2] along the base chain, under the declared AC, obtaining $d$ strict prime inclusions below $\mathfrak q_0$. Concatenate them with the $e$ strict fibre inclusions to get a chain of length $d+e$ in $S$. Hence $\dim S\ge d+e$, and step 1.1 gives $\dim S=\dim R+\dim F$. [L2, step 1.1, choose]

3.1 By [L3] and step 2.1, $\dim S-\operatorname{depth}S=(\dim R-\operatorname{depth}R)+(\dim F-\operatorname{depth}F)$. Each summand is nonnegative by [L4]. Their sum vanishes exactly when both vanish, which by [L4] is the claimed Cohen–Macaulay equivalence. [L3, L4, step 2.1, algebra] ∎
