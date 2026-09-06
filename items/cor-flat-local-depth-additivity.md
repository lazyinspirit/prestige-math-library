---
id: cor-flat-local-depth-additivity
title: Depth is additive for a flat local homomorphism
kind: corollary
status: draft
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, lem-flat-local-depth-formula-regular-sequence-split, lem-depth-quotient-by-regular-element, thm-depth-zero-associated-prime-criterion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/tag/0338
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

For a flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of
Noetherian local rings,
$$\operatorname{depth}(S)=\operatorname{depth}(R) +\operatorname{depth}(S/\mathfrak mS).$$

## Facts & Assumptions

**Given:** all depths are finite because the three local rings/modules are nonzero Noetherian objects.

## Proof

**Proof technique:** direct.

1.1 Write $d=\operatorname{depth}(R)$ and $e=\operatorname{depth}(S/\mathfrak mS)$. Concatenating maximal regular sequences from the base and closed fibre by `lem-flat-local-depth-formula-regular-sequence-split` gives $\operatorname{depth}(S)\ge d+e$. [given]

1.2 We prove the reverse inequality by induction on $d+e$, following Stacks Project, Tag `0338`. If $d=e=0$, the depth-zero criterion supplies $0\ne z\in R$ with $\mathfrak mz=0$. Flatness makes $S/\mathfrak mS\to S$, $\bar s\mapsto zs$, injective. Choose a nonzero closed-fibre element $\bar y$ annihilated by $\mathfrak n/\mathfrak mS$. Then $zy\ne0$ and $\mathfrak n(zy)=0$, so the depth-zero criterion gives $\operatorname{depth}(S)=0$. [given, algebra]

2.1 If $d>0$, choose an $R$-regular $x\in\mathfrak m$. Flatness makes $x$ $S$-regular, and $R/(x)\to S/(x)$ is again flat local with the same closed fibre. Induction and `lem-depth-quotient-by-regular-element` give $$\operatorname{depth}(S)-1=(d-1)+e.$$ If instead $d=0<e$, lift a closed-fibre regular element $\bar y$. The local flatness criterion makes $y$ regular on $S$ and makes $S/(y)$ flat over $R$; its closed fibre has depth $e-1$. Induction again gives $\operatorname{depth}(S)-1=d+(e-1)$. Thus in all cases $\operatorname{depth}(S)=d+e$. [step 1.2, algebra] ∎
